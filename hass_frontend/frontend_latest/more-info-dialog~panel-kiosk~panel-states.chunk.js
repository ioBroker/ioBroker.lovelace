(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog~panel-kiosk~panel-states"],{

/***/ "./src/cards/ha-history_graph-card.js":
/*!********************************************!*\
  !*** ./src/cards/ha-history_graph-card.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_card_paper_card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-card/paper-card */ "./node_modules/@polymer/paper-card/paper-card.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");







/*
 * @appliesMixin EventsMixin
 */

class HaHistoryGraphCard extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        paper-card:not([dialog]) .content {
          padding: 0 16px 16px;
        }
        paper-card[dialog] {
          padding-top: 16px;
          background-color: transparent;
        }
        paper-card {
          width: 100%;
          /* prevent new stacking context, chart tooltip needs to overflow */
          position: static;
        }
        .header {
          @apply --paper-font-headline;
          line-height: 40px;
          color: var(--primary-text-color);
          padding: 20px 16px 12px;
          @apply --paper-font-common-nowrap;
        }
        paper-card[dialog] .header {
          display: none;
        }
      </style>
      <ha-state-history-data
        hass="[[hass]]"
        filter-type="recent-entity"
        entity-id="[[computeHistoryEntities(stateObj)]]"
        data="{{stateHistory}}"
        is-loading="{{stateHistoryLoading}}"
        cache-config="[[cacheConfig]]"
      ></ha-state-history-data>
      <paper-card
        dialog$="[[inDialog]]"
        on-click="cardTapped"
        elevation="[[computeElevation(inDialog)]]"
      >
        <div class="header">[[computeTitle(stateObj)]]</div>
        <div class="content">
          <state-history-charts
            hass="[[hass]]"
            history-data="[[stateHistory]]"
            is-loading-data="[[stateHistoryLoading]]"
            up-to-now
            no-single
          >
          </state-history-charts>
        </div>
      </paper-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "stateObjObserver"
      },
      inDialog: {
        type: Boolean,
        value: false
      },
      stateHistory: Object,
      stateHistoryLoading: Boolean,
      cacheConfig: {
        type: Object,
        value: {
          refresh: 0,
          cacheKey: null,
          hoursToShow: 24
        }
      }
    };
  }

  stateObjObserver(stateObj) {
    if (!stateObj) return;

    if (this.cacheConfig.cacheKey !== stateObj.entity_id || this.cacheConfig.refresh !== (stateObj.attributes.refresh || 0) || this.cacheConfig.hoursToShow !== (stateObj.attributes.hours_to_show || 24)) {
      this.cacheConfig = Object.assign({}, {
        refresh: stateObj.attributes.refresh || 0,
        cacheKey: stateObj.entity_id,
        hoursToShow: stateObj.attributes.hours_to_show || 24
      });
    }
  }

  computeTitle(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(stateObj);
  }

  computeContentClass(inDialog) {
    return inDialog ? "" : "content";
  }

  computeHistoryEntities(stateObj) {
    return stateObj.attributes.entity_id;
  }

  computeElevation(inDialog) {
    return inDialog ? 0 : 1;
  }

  cardTapped(ev) {
    const mq = window.matchMedia("(min-width: 610px) and (min-height: 550px)");

    if (mq.matches) {
      ev.stopPropagation();
      this.fire("hass-more-info", {
        entityId: this.stateObj.entity_id
      });
    }
  }

}

customElements.define("ha-history_graph-card", HaHistoryGraphCard);

/***/ }),

/***/ "./src/common/dom/dynamic_content_updater.ts":
/*!***************************************************!*\
  !*** ./src/common/dom/dynamic_content_updater.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return dynamicContentUpdater; });
/**
 * Update root's child element to be newElementTag replacing another existing child if any.
 * Copy attributes into the child element.
 */
function dynamicContentUpdater(root, newElementTag, attributes) {
  const rootEl = root;
  let customEl;

  if (rootEl.lastChild && rootEl.lastChild.tagName === newElementTag) {
    customEl = rootEl.lastChild;
  } else {
    if (rootEl.lastChild) {
      rootEl.removeChild(rootEl.lastChild);
    } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
    // become a defined Custom Element. Polymer does that in some later pass.


    customEl = document.createElement(newElementTag.toLowerCase());
  }

  if (customEl.setProperties) {
    customEl.setProperties(attributes);
  } else {
    // If custom element definition wasn't loaded yet - setProperties would be
    // missing, but no harm in setting attributes one-by-one then.
    Object.keys(attributes).forEach(key => {
      customEl[key] = attributes[key];
    });
  }

  if (customEl.parentNode === null) {
    rootEl.appendChild(customEl);
  }
}

/***/ }),

/***/ "./src/common/entity/attribute_class_names.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/attribute_class_names.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return attributeClassNames; });
function attributeClassNames(stateObj, attributes) {
  if (!stateObj) {
    return "";
  }

  return attributes.map(attribute => attribute in stateObj.attributes ? "has-" + attribute : "").filter(attr => attr !== "").join(" ");
}

/***/ }),

/***/ "./src/common/entity/can_toggle_domain.ts":
/*!************************************************!*\
  !*** ./src/common/entity/can_toggle_domain.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canToggleDomain; });
function canToggleDomain(hass, domain) {
  const services = hass.services[domain];

  if (!services) {
    return false;
  }

  if (domain === "lock") {
    return "lock" in services;
  }

  if (domain === "cover") {
    return "open_cover" in services;
  }

  return "turn_on" in services;
}

/***/ }),

/***/ "./src/common/entity/can_toggle_state.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/can_toggle_state.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return canToggleState; });
/* harmony import */ var _can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_domain */ "./src/common/entity/can_toggle_domain.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");



function canToggleState(hass, stateObj) {
  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);

  if (domain === "group") {
    return stateObj.state === "on" || stateObj.state === "off";
  }

  if (domain === "climate") {
    return Object(_supports_feature__WEBPACK_IMPORTED_MODULE_2__["supportsFeature"])(stateObj, 4096);
  }

  return Object(_can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(hass, domain);
}

/***/ }),

/***/ "./src/common/entity/state_card_type.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/state_card_type.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stateCardType; });
/* harmony import */ var _can_toggle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_state */ "./src/common/entity/can_toggle_state.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");



function stateCardType(hass, stateObj) {
  if (stateObj.state === "unavailable") {
    return "display";
  }

  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateObj);

  if (_const__WEBPACK_IMPORTED_MODULE_2__["DOMAINS_WITH_CARD"].includes(domain)) {
    return domain;
  }

  if (Object(_can_toggle_state__WEBPACK_IMPORTED_MODULE_0__["default"])(hass, stateObj) && stateObj.attributes.control !== "hidden") {
    return "toggle";
  }

  return "display";
}

/***/ }),

/***/ "./src/common/entity/state_more_info_type.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/state_more_info_type.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stateMoreInfoType; });
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");


function stateMoreInfoType(stateObj) {
  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj);

  if (_const__WEBPACK_IMPORTED_MODULE_1__["DOMAINS_WITH_MORE_INFO"].includes(domain)) {
    return domain;
  }

  if (_const__WEBPACK_IMPORTED_MODULE_1__["DOMAINS_HIDE_MORE_INFO"].includes(domain)) {
    return "hidden";
  }

  return "default";
}

/***/ }),

/***/ "./src/components/entity/state-info.js":
/*!*********************************************!*\
  !*** ./src/components/entity/state-info.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");







class StateInfo extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${this.styleTemplate} ${this.stateBadgeTemplate} ${this.infoTemplate}
    `;
  }

  static get styleTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          @apply --paper-font-body1;
          min-width: 120px;
          white-space: nowrap;
        }

        state-badge {
          float: left;
        }

        :host([rtl]) state-badge {
          float: right;
        }

        .info {
          margin-left: 56px;
        }

        :host([rtl]) .info {
          margin-right: 56px;
          margin-left: 0;
          text-align: right;
        }

        .name {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          line-height: 40px;
        }

        .name[in-dialog],
        :host([secondary-line]) .name {
          line-height: 20px;
        }

        .time-ago,
        .extra-info,
        .extra-info > * {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>
    `;
  }

  static get stateBadgeTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `;
  }

  static get infoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="info">
        <div class="name" in-dialog$="[[inDialog]]">
          [[computeStateName(stateObj)]]
        </div>

        <template is="dom-if" if="[[inDialog]]">
          <div class="time-ago">
            <ha-relative-time
              hass="[[hass]]"
              datetime="[[stateObj.last_changed]]"
            ></ha-relative-time>
          </div>
        </template>
        <template is="dom-if" if="[[!inDialog]]">
          <div class="extra-info"><slot> </slot></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: () => false
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "computeRTL(hass)"
      }
    };
  }

  computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["default"])(stateObj);
  }

  computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(hass);
  }

}

customElements.define("state-info", StateInfo);

/***/ }),

/***/ "./src/components/ha-vacuum-state.js":
/*!*******************************************!*\
  !*** ./src/components/ha-vacuum-state.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




const STATES_INTERCEPTABLE = {
  cleaning: {
    action: "return_to_base",
    service: "return_to_base"
  },
  docked: {
    action: "start_cleaning",
    service: "start"
  },
  idle: {
    action: "start_cleaning",
    service: "start"
  },
  off: {
    action: "turn_on",
    service: "turn_on"
  },
  on: {
    action: "turn_off",
    service: "turn_off"
  },
  paused: {
    action: "resume_cleaning",
    service: "start"
  }
};
/*
 * @appliesMixin LocalizeMixin
 */

class HaVacuumState extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
        mwc-button[disabled] {
          background-color: transparent;
          color: var(--secondary-text-color);
        }
      </style>

      <mwc-button on-click="_callService" disabled="[[!_interceptable]]"
        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button
      >
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      _interceptable: {
        type: Boolean,
        computed: "_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"
      }
    };
  }

  _computeInterceptable(state, supportedFeatures) {
    return state in STATES_INTERCEPTABLE && supportedFeatures !== 0;
  }

  _computeLabel(state, interceptable) {
    return interceptable ? this.localize(`ui.card.vacuum.actions.${STATES_INTERCEPTABLE[state].action}`) : this.localize(`state.vacuum.${state}`);
  }

  _callService(ev) {
    ev.stopPropagation();
    const stateObj = this.stateObj;
    const service = STATES_INTERCEPTABLE[stateObj.state].service;
    this.hass.callService("vacuum", service, {
      entity_id: stateObj.entity_id
    });
  }

}

customElements.define("ha-vacuum-state", HaVacuumState);

/***/ }),

/***/ "./src/components/ha-water_heater-state.js":
/*!*************************************************!*\
  !*** ./src/components/ha-water_heater-state.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");



/*
 * @appliesMixin LocalizeMixin
 */

class HaWaterHeaterState extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }
      </style>

      <div class="target">
        <span class="state-label"> [[_localizeState(stateObj.state)]] </span>
        [[computeTarget(hass, stateObj)]]
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object
    };
  }

  computeTarget(hass, stateObj) {
    if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

    if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
      return `${stateObj.attributes.target_temp_low} - ${stateObj.attributes.target_temp_high} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.temperature != null) {
      return `${stateObj.attributes.temperature} ${hass.config.unit_system.temperature}`;
    }

    return "";
  }

  _localizeState(state) {
    return this.localize(`state.water_heater.${state}`) || state;
  }

}

customElements.define("ha-water_heater-state", HaWaterHeaterState);

/***/ }),

/***/ "./src/state-summary/state-card-climate.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-climate.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_climate_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-climate-state */ "./src/components/ha-climate-state.js");






class StateCardClimate extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-climate-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-climate-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-climate-state>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

}

customElements.define("state-card-climate", StateCardClimate);

/***/ }),

/***/ "./src/state-summary/state-card-configurator.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-configurator.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






/*
 * @appliesMixin LocalizeMixin
 */

class StateCardConfigurator extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button hidden$="[[inDialog]]"
          >[[_localizeState(stateObj.state)]]</mwc-button
        >
      </div>

      <!-- pre load the image so the dialog is rendered the proper size -->
      <template is="dom-if" if="[[stateObj.attributes.description_image]]">
        <img hidden="" src="[[stateObj.attributes.description_image]]" />
      </template>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

  _localizeState(state) {
    return this.localize(`state.configurator.${state}`);
  }

}

customElements.define("state-card-configurator", StateCardConfigurator);

/***/ }),

/***/ "./src/state-summary/state-card-content.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-content.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_card_climate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./state-card-climate */ "./src/state-summary/state-card-climate.js");
/* harmony import */ var _state_card_configurator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./state-card-configurator */ "./src/state-summary/state-card-configurator.js");
/* harmony import */ var _state_card_cover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-card-cover */ "./src/state-summary/state-card-cover.js");
/* harmony import */ var _state_card_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-card-display */ "./src/state-summary/state-card-display.js");
/* harmony import */ var _state_card_input_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./state-card-input_number */ "./src/state-summary/state-card-input_number.js");
/* harmony import */ var _state_card_input_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./state-card-input_select */ "./src/state-summary/state-card-input_select.ts");
/* harmony import */ var _state_card_input_text__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./state-card-input_text */ "./src/state-summary/state-card-input_text.js");
/* harmony import */ var _state_card_lock__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./state-card-lock */ "./src/state-summary/state-card-lock.js");
/* harmony import */ var _state_card_media_player__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./state-card-media_player */ "./src/state-summary/state-card-media_player.js");
/* harmony import */ var _state_card_scene__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state-card-scene */ "./src/state-summary/state-card-scene.js");
/* harmony import */ var _state_card_script__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./state-card-script */ "./src/state-summary/state-card-script.js");
/* harmony import */ var _state_card_timer__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./state-card-timer */ "./src/state-summary/state-card-timer.js");
/* harmony import */ var _state_card_toggle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./state-card-toggle */ "./src/state-summary/state-card-toggle.js");
/* harmony import */ var _state_card_vacuum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./state-card-vacuum */ "./src/state-summary/state-card-vacuum.js");
/* harmony import */ var _state_card_water_heater__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./state-card-water_heater */ "./src/state-summary/state-card-water_heater.js");
/* harmony import */ var _state_card_weblink__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./state-card-weblink */ "./src/state-summary/state-card-weblink.js");
/* harmony import */ var _common_entity_state_card_type__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../common/entity/state_card_type */ "./src/common/entity/state_card_type.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");




















class StateCardContent extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return ["inputChanged(hass, inDialog, stateObj)"];
  }

  inputChanged(hass, inDialog, stateObj) {
    let stateCard;
    if (!stateObj || !hass) return;

    if (stateObj.attributes && "custom_ui_state_card" in stateObj.attributes) {
      stateCard = stateObj.attributes.custom_ui_state_card;
    } else {
      stateCard = "state-card-" + Object(_common_entity_state_card_type__WEBPACK_IMPORTED_MODULE_17__["default"])(hass, stateObj);
    }

    Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_18__["default"])(this, stateCard.toUpperCase(), {
      hass: hass,
      stateObj: stateObj,
      inDialog: inDialog
    });
  }

}

customElements.define("state-card-content", StateCardContent);

/***/ }),

/***/ "./src/state-summary/state-card-cover.js":
/*!***********************************************!*\
  !*** ./src/state-summary/state-card-cover.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_cover_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-cover-controls */ "./src/components/ha-cover-controls.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");








class StateCardCover extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="horizontal layout">
          <ha-cover-controls
            hidden$="[[entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-controls>
          <ha-cover-tilt-controls
            hidden$="[[!entityObj.isTiltOnly]]"
            hass="[[hass]]"
            state-obj="[[stateObj]]"
          ></ha-cover-tilt-controls>
        </div>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)"
      }
    };
  }

  computeEntityObj(hass, stateObj) {
    var entity = new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
    return entity;
  }

}

customElements.define("state-card-cover", StateCardCover);

/***/ }),

/***/ "./src/state-summary/state-card-display.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-display.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");








/*
 * @appliesMixin LocalizeMixin
 */

class StateCardDisplay extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          @apply --layout-horizontal;
          @apply --layout-justified;
          @apply --layout-baseline;
        }

        :host([rtl]) {
          direction: rtl;
          text-align: right;
        }

        state-info {
          flex: 1 1 auto;
          min-width: 0;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);
          margin-left: 16px;
          text-align: right;
          max-width: 40%;
          flex: 0 0 auto;
        }
        :host([rtl]) .state {
          margin-right: 16px;
          margin-left: 0;
          text-align: left;
        }

        .state.has-unit_of_measurement {
          white-space: nowrap;
        }
      </style>

      ${this.stateInfoTemplate}
      <div class$="[[computeClassNames(stateObj)]]">
        [[computeStateDisplay(localize, stateObj, language)]]
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)"
      }
    };
  }

  computeStateDisplay(localize, stateObj, language) {
    return Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_5__["default"])(localize, stateObj, language);
  }

  computeClassNames(stateObj) {
    const classes = ["state", Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_6__["default"])(stateObj, ["unit_of_measurement"])];
    return classes.join(" ");
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(hass);
  }

}

customElements.define("state-card-display", StateCardDisplay);

/***/ }),

/***/ "./src/state-summary/state-card-input_number.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-input_number.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ha-slider */ "./src/components/ha-slider.js");









class StateCardInputNumber extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_3__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-slider {
          margin-left: auto;
        }
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          text-align: right;
          line-height: 40px;
        }
        .sliderstate {
          min-width: 45px;
        }
        ha-slider[hidden] {
          display: none !important;
        }
        paper-input {
          text-align: right;
          margin-left: auto;
        }
      </style>

      <div class="horizontal justified layout" id="input_number_card">
        ${this.stateInfoTemplate}
        <ha-slider
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          step="[[step]]"
          hidden="[[hiddenslider]]"
          pin=""
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          id="slider"
          ignore-bar-touch=""
        >
        </ha-slider>
        <paper-input
          no-label-float=""
          auto-validate=""
          pattern="[0-9]+([\\.][0-9]+)?"
          step="[[step]]"
          min="[[min]]"
          max="[[max]]"
          value="{{value}}"
          type="number"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          hidden="[[hiddenbox]]"
        >
        </paper-input>
        <div class="state" hidden="[[hiddenbox]]">
          [[stateObj.attributes.unit_of_measurement]]
        </div>
        <div
          id="sliderstate"
          class="state sliderstate"
          hidden="[[hiddenslider]]"
        >
          [[value]] [[stateObj.attributes.unit_of_measurement]]
        </div>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  ready() {
    super.ready();

    if (typeof ResizeObserver === "function") {
      const ro = new ResizeObserver(entries => {
        entries.forEach(() => {
          this.hiddenState();
        });
      });
      ro.observe(this.$.input_number_card);
    } else {
      this.addEventListener("iron-resize", this.hiddenState);
    }
  }

  static get properties() {
    return {
      hass: Object,
      hiddenbox: {
        type: Boolean,
        value: true
      },
      hiddenslider: {
        type: Boolean,
        value: true
      },
      inDialog: {
        type: Boolean,
        value: false
      },
      stateObj: {
        type: Object,
        observer: "stateObjectChanged"
      },
      min: {
        type: Number,
        value: 0
      },
      max: {
        type: Number,
        value: 100
      },
      maxlength: {
        type: Number,
        value: 3
      },
      step: Number,
      value: Number,
      mode: String
    };
  }

  hiddenState() {
    if (this.mode !== "slider") return;
    const sliderwidth = this.$.slider.offsetWidth;

    if (sliderwidth < 100) {
      this.$.sliderstate.hidden = true;
    } else if (sliderwidth >= 145) {
      this.$.sliderstate.hidden = false;
    }
  }

  stateObjectChanged(newVal) {
    const prevMode = this.mode;
    this.setProperties({
      min: Number(newVal.attributes.min),
      max: Number(newVal.attributes.max),
      step: Number(newVal.attributes.step),
      value: Number(newVal.state),
      mode: String(newVal.attributes.mode),
      maxlength: String(newVal.attributes.max).length,
      hiddenbox: newVal.attributes.mode !== "box",
      hiddenslider: newVal.attributes.mode !== "slider"
    });

    if (this.mode === "slider" && prevMode !== "slider") {
      this.hiddenState();
    }
  }

  selectedValueChanged() {
    if (this.value === Number(this.stateObj.state)) {
      return;
    }

    this.hass.callService("input_number", "set_value", {
      value: this.value,
      entity_id: this.stateObj.entity_id
    });
  }

  stopPropagation(ev) {
    ev.stopPropagation();
  }

}

customElements.define("state-card-input_number", StateCardInputNumber);

/***/ }),

/***/ "./src/state-summary/state-card-input_select.ts":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-input_select.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _data_input_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/input-select */ "./src/data/input-select.ts");
/* harmony import */ var _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/dom/stop_propagation */ "./src/common/dom/stop_propagation.ts");
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



 // tslint:disable-next-line: no-duplicate-imports







let StateCardInputSelect = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("state-card-input_select")], function (_initialize, _LitElement) {
  class StateCardInputSelect extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: StateCardInputSelect,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <state-badge .stateObj=${this.stateObj}></state-badge>
      <paper-dropdown-menu-light
        .label=${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(this.stateObj)}
        .value="${this.stateObj.state}"
        @iron-select=${this._selectedOptionChanged}
        @click=${_common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_7__["stopPropagation"]}
      >
        <paper-listbox slot="dropdown-content">
          ${this.stateObj.attributes.options.map(option => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-item>${option}</paper-item>
            `)}
        </paper-listbox>
      </paper-dropdown-menu-light>
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(StateCardInputSelect.prototype), "updated", this).call(this, changedProps); // Update selected after rendering the items or else it won't work in Firefox


        this.shadowRoot.querySelector("paper-listbox").selected = this.stateObj.attributes.options.indexOf(this.stateObj.state);
      }
    }, {
      kind: "method",
      key: "_selectedOptionChanged",
      value: async function _selectedOptionChanged(ev) {
        const option = ev.detail.item.innerText.trim();

        if (option === this.stateObj.state) {
          return;
        }

        await Object(_data_input_select__WEBPACK_IMPORTED_MODULE_6__["setInputSelectOption"])(this.hass, this.stateObj.entity_id, option);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
      }

      state-badge {
        float: left;
        margin-top: 10px;
      }

      paper-dropdown-menu-light {
        display: block;
        margin-left: 53px;
      }

      paper-item {
        cursor: pointer;
        min-width: 200px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/state-summary/state-card-input_text.js":
/*!****************************************************!*\
  !*** ./src/state-summary/state-card-input_text.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");






class StateCardInputText extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        paper-input {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <paper-input
          no-label-float=""
          minlength="[[stateObj.attributes.min]]"
          maxlength="[[stateObj.attributes.max]]"
          value="{{value}}"
          auto-validate="[[stateObj.attributes.pattern]]"
          pattern="[[stateObj.attributes.pattern]]"
          type="[[stateObj.attributes.mode]]"
          on-change="selectedValueChanged"
          on-click="stopPropagation"
          placeholder="(empty value)"
        >
        </paper-input>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      inDialog: {
        type: Boolean,
        value: false
      },
      stateObj: {
        type: Object,
        observer: "stateObjectChanged"
      },
      pattern: String,
      value: String
    };
  }

  stateObjectChanged(newVal) {
    this.value = newVal.state;
  }

  selectedValueChanged() {
    if (this.value === this.stateObj.state) {
      return;
    }

    this.hass.callService("input_text", "set_value", {
      value: this.value,
      entity_id: this.stateObj.entity_id
    });
  }

  stopPropagation(ev) {
    ev.stopPropagation();
  }

}

customElements.define("state-card-input_text", StateCardInputText);

/***/ }),

/***/ "./src/state-summary/state-card-lock.js":
/*!**********************************************!*\
  !*** ./src/state-summary/state-card-lock.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






/*
 * @appliesMixin LocalizeMixin
 */

class StateCardLock extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button
          on-click="_callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="_callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "_stateObjChanged"
      },
      inDialog: {
        type: Boolean,
        value: false
      },
      isLocked: Boolean
    };
  }

  _stateObjChanged(newVal) {
    if (newVal) {
      this.isLocked = newVal.state === "locked";
    }
  }

  _callService(ev) {
    ev.stopPropagation();
    const service = ev.target.dataset.service;
    const data = {
      entity_id: this.stateObj.entity_id
    };
    this.hass.callService("lock", service, data);
  }

}

customElements.define("state-card-lock", StateCardLock);

/***/ }),

/***/ "./src/state-summary/state-card-media_player.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-media_player.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");






/*
 * @appliesMixin LocalizeMixin
 */

class StateCardMediaPlayer extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          line-height: 1.5;
        }

        .state {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          margin-left: 16px;
          text-align: right;
        }

        .main-text {
          @apply --paper-font-common-nowrap;
          color: var(--primary-text-color);
          text-transform: capitalize;
        }

        .main-text[take-height] {
          line-height: 40px;
        }

        .secondary-text {
          @apply --paper-font-common-nowrap;
          color: var(--secondary-text-color);
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">
          <div class="main-text" take-height$="[[!playerObj.secondaryTitle]]">
            [[computePrimaryText(localize, playerObj)]]
          </div>
          <div class="secondary-text">[[playerObj.secondaryTitle]]</div>
        </div>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      },
      playerObj: {
        type: Object,
        computed: "computePlayerObj(hass, stateObj)"
      }
    };
  }

  computePlayerObj(hass, stateObj) {
    return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__["default"](hass, stateObj);
  }

  computePrimaryText(localize, playerObj) {
    return playerObj.primaryTitle || localize(`state.media_player.${playerObj.stateObj.state}`) || localize(`state.default.${playerObj.stateObj.state}`) || playerObj.stateObj.state;
  }

}

customElements.define("state-card-media_player", StateCardMediaPlayer);

/***/ }),

/***/ "./src/state-summary/state-card-scene.js":
/*!***********************************************!*\
  !*** ./src/state-summary/state-card-scene.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






/*
 * @appliesMixin LocalizeMixin
 */

class StateCardScene extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <mwc-button on-click="activateScene"
          >[[localize('ui.card.scene.activate')]]</mwc-button
        >
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

  activateScene(ev) {
    ev.stopPropagation();
    this.hass.callService("scene", "turn_on", {
      entity_id: this.stateObj.entity_id
    });
  }

}

customElements.define("state-card-scene", StateCardScene);

/***/ }),

/***/ "./src/state-summary/state-card-script.js":
/*!************************************************!*\
  !*** ./src/state-summary/state-card-script.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







/*
 * @appliesMixin LocalizeMixin
 */

class StateCardScript extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        mwc-button {
          top: 3px;
          height: 37px;
          margin-right: -0.57em;
        }

        ha-entity-toggle {
          margin-left: 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <template is="dom-if" if="[[stateObj.attributes.can_cancel]]">
          <ha-entity-toggle
            state-obj="[[stateObj]]"
            hass="[[hass]]"
          ></ha-entity-toggle>
        </template>
        <template is="dom-if" if="[[!stateObj.attributes.can_cancel]]">
          <mwc-button on-click="fireScript"
            >[[localize('ui.card.script.execute')]]</mwc-button
          >
        </template>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

  fireScript(ev) {
    ev.stopPropagation();
    this.hass.callService("script", "turn_on", {
      entity_id: this.stateObj.entity_id
    });
  }

}

customElements.define("state-card-script", StateCardScript);

/***/ }),

/***/ "./src/state-summary/state-card-timer.js":
/*!***********************************************!*\
  !*** ./src/state-summary/state-card-timer.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/timer_time_remaining */ "./src/common/entity/timer_time_remaining.ts");
/* harmony import */ var _common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/seconds_to_duration */ "./src/common/datetime/seconds_to_duration.ts");







class StateCardTimer extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .state {
          @apply --paper-font-body1;
          color: var(--primary-text-color);

          margin-left: 16px;
          text-align: right;
          line-height: 40px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <div class="state">[[_secondsToDuration(timeRemaining)]]</div>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      timeRemaining: Number,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

  connectedCallback() {
    super.connectedCallback();
    this.startInterval(this.stateObj);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.clearInterval();
  }

  stateObjChanged(stateObj) {
    this.startInterval(stateObj);
  }

  clearInterval() {
    if (this._updateRemaining) {
      clearInterval(this._updateRemaining);
      this._updateRemaining = null;
    }
  }

  startInterval(stateObj) {
    this.clearInterval();
    this.calculateRemaining(stateObj);

    if (stateObj.state === "active") {
      this._updateRemaining = setInterval(() => this.calculateRemaining(this.stateObj), 1000);
    }
  }

  calculateRemaining(stateObj) {
    this.timeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__["default"])(stateObj);
  }

  _secondsToDuration(time) {
    return Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__["default"])(time);
  }

}

customElements.define("state-card-timer", StateCardTimer);

/***/ }),

/***/ "./src/state-summary/state-card-toggle.js":
/*!************************************************!*\
  !*** ./src/state-summary/state-card-toggle.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");






class StateCardToggle extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        ha-entity-toggle {
          margin: -4px -16px -4px 0;
          padding: 4px 16px;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-entity-toggle
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></ha-entity-toggle>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

}

customElements.define("state-card-toggle", StateCardToggle);

/***/ }),

/***/ "./src/state-summary/state-card-vacuum.js":
/*!************************************************!*\
  !*** ./src/state-summary/state-card-vacuum.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_vacuum_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-vacuum-state */ "./src/components/ha-vacuum-state.js");






class StateCardVacuum extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-vacuum-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-vacuum-state>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

}

customElements.define("state-card-vacuum", StateCardVacuum);

/***/ }),

/***/ "./src/state-summary/state-card-water_heater.js":
/*!******************************************************!*\
  !*** ./src/state-summary/state-card-water_heater.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/state-info */ "./src/components/entity/state-info.js");
/* harmony import */ var _components_ha_water_heater_state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-water_heater-state */ "./src/components/ha-water_heater-state.js");






class StateCardWaterHeater extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        ha-water_heater-state {
          margin-left: 16px;
          text-align: right;
        }
      </style>

      <div class="horizontal justified layout">
        ${this.stateInfoTemplate}
        <ha-water_heater-state
          hass="[[hass]]"
          state-obj="[[stateObj]]"
        ></ha-water_heater-state>
      </div>
    `;
  }

  static get stateInfoTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <state-info
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog="[[inDialog]]"
      ></state-info>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

}

customElements.define("state-card-water_heater", StateCardWaterHeater);

/***/ }),

/***/ "./src/state-summary/state-card-weblink.js":
/*!*************************************************!*\
  !*** ./src/state-summary/state-card-weblink.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");





class StateCardWeblink extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: block;
        }
        .name {
          @apply --paper-font-common-nowrap;
          @apply --paper-font-body1;
          color: var(--primary-color);

          text-transform: capitalize;
          line-height: 40px;
          margin-left: 16px;
        }
      </style>

      ${this.stateBadgeTemplate}
      <a href$="[[stateObj.state]]" target="_blank" class="name" id="link"
        >[[_computeStateName(stateObj)]]</a
      >
    `;
  }

  static get stateBadgeTemplate() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <state-badge state-obj="[[stateObj]]"></state-badge>
    `;
  }

  static get properties() {
    return {
      stateObj: Object,
      inDialog: {
        type: Boolean,
        value: false
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.onTap(ev));
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["default"])(stateObj);
  }

  onTap(ev) {
    ev.stopPropagation();
    ev.preventDefault();
    window.open(this.stateObj.state, "_blank");
  }

}

customElements.define("state-card-weblink", StateCardWeblink);

/***/ })

}]);
//# sourceMappingURL=more-info-dialog~panel-kiosk~panel-states.chunk.js.map