(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog"],{

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

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PANEL", function() { return DEFAULT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.

/** Icon to use when no icon specified for domain. */
const DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Panel to show when no panel is picked. */

const DEFAULT_PANEL = "lovelace";
/** Domains that have a state card. */

const DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

const DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "script", "sun", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

const DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

const DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

const STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */

const DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

const UNIT_C = "°C";
const UNIT_F = "°F";
/** Entity ID of the default view. */

const DEFAULT_VIEW_ENTITY_ID = "group.default_view";

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

/***/ "./src/common/entity/feature_class_names.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/feature_class_names.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return featureClassNames; });
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");
 // Expects classNames to be an object mapping feature-bit -> className

function featureClassNames(stateObj, classNames) {
  if (!stateObj || !stateObj.attributes.supported_features) {
    return "";
  }

  return Object.keys(classNames).map(feature => Object(_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, Number(feature)) ? classNames[feature] : "").filter(attr => attr !== "").join(" ");
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

/***/ "./src/components/ha-attributes.js":
/*!*****************************************!*\
  !*** ./src/components/ha-attributes.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");





class HaAttributes extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .data-entry .value {
          max-width: 200px;
        }
        .attribution {
          color: var(--secondary-text-color);
          text-align: right;
        }
      </style>

      <div class="layout vertical">
        <template
          is="dom-repeat"
          items="[[computeDisplayAttributes(stateObj, filtersArray)]]"
          as="attribute"
        >
          <div class="data-entry layout justified horizontal">
            <div class="key">[[formatAttribute(attribute)]]</div>
            <div class="value">
              [[formatAttributeValue(stateObj, attribute)]]
            </div>
          </div>
        </template>
        <div class="attribution" hidden$="[[!computeAttribution(stateObj)]]">
          [[computeAttribution(stateObj)]]
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object
      },
      extraFilters: {
        type: String,
        value: ""
      },
      filtersArray: {
        type: Array,
        computed: "computeFiltersArray(extraFilters)"
      }
    };
  }

  computeFiltersArray(extraFilters) {
    return Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(",") : []);
  }

  computeDisplayAttributes(stateObj, filtersArray) {
    if (!stateObj) {
      return [];
    }

    return Object.keys(stateObj.attributes).filter(function (key) {
      return filtersArray.indexOf(key) === -1;
    });
  }

  formatAttribute(attribute) {
    return attribute.replace(/_/g, " ");
  }

  formatAttributeValue(stateObj, attribute) {
    var value = stateObj.attributes[attribute];
    if (value === null) return "-";

    if (Array.isArray(value)) {
      return value.join(", ");
    }

    return value instanceof Object ? JSON.stringify(value, null, 2) : value;
  }

  computeAttribution(stateObj) {
    return stateObj.attributes.attribution;
  }

}

customElements.define("ha-attributes", HaAttributes);

/***/ }),

/***/ "./src/components/ha-camera-stream.ts":
/*!********************************************!*\
  !*** ./src/components/ha-camera-stream.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
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







let HaCameraStream = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-camera-stream")], function (_initialize, _LitElement) {
  class HaCameraStream extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaCameraStream,
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "showControls",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_attached",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_forceMJPEG",

      value() {
        return undefined;
      }

    }, {
      kind: "field",
      key: "_hlsPolyfillInstance",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: // We keep track if we should force MJPEG with a string
      // that way it automatically resets if we change entity.
      function connectedCallback() {
        _get(_getPrototypeOf(HaCameraStream.prototype), "connectedCallback", this).call(this);

        this._attached = true;
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaCameraStream.prototype), "disconnectedCallback", this).call(this);

        this._attached = false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.stateObj || !this._attached) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      ${ false || this._shouldRenderMJPEG ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <img
              @load=${this._elementResized}
              .src=${ false ? undefined : Object(_data_camera__WEBPACK_IMPORTED_MODULE_3__["computeMJPEGStreamUrl"])(this.stateObj)}
              .alt=${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["default"])(this.stateObj)}
            />
          ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <video
              autoplay
              muted
              playsinline
              ?controls=${this.showControls}
              @loadeddata=${this._elementResized}
            ></video>
          `}
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaCameraStream.prototype), "updated", this).call(this, changedProps);

        const stateObjChanged = changedProps.has("stateObj");
        const attachedChanged = changedProps.has("_attached");
        const oldState = changedProps.get("stateObj");
        const oldEntityId = oldState ? oldState.entity_id : undefined;
        const curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;

        if (!stateObjChanged && !attachedChanged || stateObjChanged && oldEntityId === curEntityId) {
          return;
        } // If we are no longer attached, destroy polyfill.


        if (attachedChanged && !this._attached) {
          this._destroyPolyfill();

          return;
        } // Nothing to do if we are render MJPEG.


        if (this._shouldRenderMJPEG) {
          return;
        } // Tear down existing polyfill, if available


        this._destroyPolyfill();

        if (curEntityId) {
          this._startHls();
        }
      }
    }, {
      kind: "get",
      key: "_shouldRenderMJPEG",
      value: function _shouldRenderMJPEG() {
        return this._forceMJPEG === this.stateObj.entity_id || !this.hass.config.components.includes("stream") || !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_4__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_3__["CAMERA_SUPPORT_STREAM"]);
      }
    }, {
      kind: "get",
      key: "_videoEl",
      value: function _videoEl() {
        return this.shadowRoot.querySelector("video");
      }
    }, {
      kind: "method",
      key: "_startHls",
      value: async function _startHls() {
        // tslint:disable-next-line
        const Hls = (await __webpack_require__.e(/*! import() | hls.js */ "vendors~hls.js").then(__webpack_require__.t.bind(null, /*! hls.js */ "./node_modules/hls.js/dist/hls.js", 7))).default;
        let hlsSupported = Hls.isSupported();
        const videoEl = this._videoEl;

        if (!hlsSupported) {
          hlsSupported = videoEl.canPlayType("application/vnd.apple.mpegurl") !== "";
        }

        if (!hlsSupported) {
          this._forceMJPEG = this.stateObj.entity_id;
          return;
        }

        try {
          const {
            url
          } = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_3__["fetchStreamUrl"])(this.hass, this.stateObj.entity_id);

          if (Hls.isSupported()) {
            this._renderHLSPolyfill(videoEl, Hls, url);
          } else {
            this._renderHLSNative(videoEl, url);
          }

          return;
        } catch (err) {
          // Fails if we were unable to get a stream
          // tslint:disable-next-line
          console.error(err);
          this._forceMJPEG = this.stateObj.entity_id;
        }
      }
    }, {
      kind: "method",
      key: "_renderHLSNative",
      value: async function _renderHLSNative(videoEl, url) {
        videoEl.src = url;
        await new Promise(resolve => videoEl.addEventListener("loadedmetadata", resolve));
        videoEl.play();
      }
    }, {
      kind: "method",
      key: "_renderHLSPolyfill",
      value: async function _renderHLSPolyfill(videoEl, // tslint:disable-next-line
      Hls, url) {
        const hls = new Hls();
        this._hlsPolyfillInstance = hls;
        hls.attachMedia(videoEl);
        hls.on(Hls.Events.MEDIA_ATTACHED, () => {
          hls.loadSource(url);
        });
      }
    }, {
      kind: "method",
      key: "_elementResized",
      value: function _elementResized() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_destroyPolyfill",
      value: function _destroyPolyfill() {
        if (this._hlsPolyfillInstance) {
          this._hlsPolyfillInstance.destroy();

          this._hlsPolyfillInstance = undefined;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host,
      img,
      video {
        display: block;
      }

      img,
      video {
        width: 100%;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-climate-control.js":
/*!**********************************************!*\
  !*** ./src/components/ha-climate-control.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");





/*
 * @appliesMixin EventsMixin
 */

class HaClimateControl extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
          direction: ltr;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      value: {
        type: Number,
        observer: "valueChanged"
      },
      units: {
        type: String
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      step: {
        type: Number,
        value: 1
      }
    };
  }

  temperatureStateInFlux(inFlux) {
    this.$.target_temperature.classList.toggle("in-flux", inFlux);
  }

  _round(val) {
    // round value to precision derived from step
    // insired by https://github.com/soundar24/roundSlider/blob/master/src/roundslider.js
    const s = this.step.toString().split(".");
    return s[1] ? parseFloat(val.toFixed(s[1].length)) : Math.round(val);
  }

  incrementValue() {
    const newval = this._round(this.value + this.step);

    if (this.value < this.max) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }

    if (newval <= this.max) {
      // If no initial target_temp
      // this forces control to start
      // from the min configured instead of 0
      if (newval <= this.min) {
        this.value = this.min;
      } else {
        this.value = newval;
      }
    } else {
      this.value = this.max;
    }
  }

  decrementValue() {
    const newval = this._round(this.value - this.step);

    if (this.value > this.min) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }

    if (newval >= this.min) {
      this.value = newval;
    } else {
      this.value = this.min;
    }
  }

  valueChanged() {
    // when the last_changed timestamp is changed,
    // trigger a potential event fire in
    // the future, as long as last changed is far enough in the
    // past.
    if (this.last_changed) {
      window.setTimeout(() => {
        const now = Date.now();

        if (now - this.last_changed >= 2000) {
          this.fire("change");
          this.temperatureStateInFlux(false);
          this.last_changed = null;
        }
      }, 2010);
    }
  }

}

customElements.define("ha-climate-control", HaClimateControl);

/***/ }),

/***/ "./src/components/ha-color-picker.js":
/*!*******************************************!*\
  !*** ./src/components/ha-color-picker.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");



/**
 * Color-picker custom element
 *
 * @appliesMixin EventsMixin
 */

class HaColorPicker extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          user-select: none;
          -webkit-user-select: none;
        }

        #canvas {
          position: relative;
          width: 100%;
          max-width: 330px;
        }
        #canvas > * {
          display: block;
        }
        #interactionLayer {
          color: white;
          position: absolute;
          cursor: crosshair;
          width: 100%;
          height: 100%;
          overflow: visible;
        }
        #backgroundLayer {
          width: 100%;
          overflow: visible;
          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);
          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);
          --wheel-shadow: var(
            --ha-color-picker-wheel-shadow,
            rgb(15, 15, 15) 10px 5px 5px 0px
          );
        }

        #marker {
          fill: currentColor;
          stroke: var(--ha-color-picker-marker-bordercolor, white);
          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);
          filter: url(#marker-shadow);
        }
        .dragging #marker {
        }

        #colorTooltip {
          display: none;
          fill: currentColor;
          stroke: var(--ha-color-picker-tooltip-bordercolor, white);
          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);
        }

        .touch.dragging #colorTooltip {
          display: inherit;
        }
      </style>
      <div id="canvas">
        <svg id="interactionLayer">
          <defs>
            <filter
              id="marker-shadow"
              x="-50%"
              y="-50%"
              width="200%"
              height="200%"
              filterUnits="objectBoundingBox"
            >
              <feOffset
                result="offOut"
                in="SourceAlpha"
                dx="2"
                dy="2"
              ></feOffset>
              <feGaussianBlur
                result="blurOut"
                in="offOut"
                stdDeviation="2"
              ></feGaussianBlur>
              <feComponentTransfer in="blurOut" result="alphaOut">
                <feFuncA type="linear" slope="0.3"></feFuncA>
              </feComponentTransfer>
              <feBlend
                in="SourceGraphic"
                in2="alphaOut"
                mode="normal"
              ></feBlend>
            </filter>
          </defs>
        </svg>
        <canvas id="backgroundLayer"></canvas>
      </div>
    `;
  }

  static get properties() {
    return {
      hsColor: {
        type: Object
      },
      // use these properties to update the state via attributes
      desiredHsColor: {
        type: Object,
        observer: "applyHsColor"
      },
      // width, height and radius apply to the coordinates of
      // of the canvas.
      // border width are relative to these numbers
      // the onscreen displayed size should be controlled with css
      // and should be the same or smaller
      width: {
        type: Number,
        value: 500
      },
      height: {
        type: Number,
        value: 500
      },
      radius: {
        type: Number,
        value: 225
      },
      // the amount segments for the hue
      // 0 = continuous gradient
      // other than 0 gives 'pie-pieces'
      hueSegments: {
        type: Number,
        value: 0,
        observer: "segmentationChange"
      },
      // the amount segments for the hue
      // 0 = continuous gradient
      // 1 = only fully saturated
      // > 1 = segments from white to fully saturated
      saturationSegments: {
        type: Number,
        value: 0,
        observer: "segmentationChange"
      },
      // set to true to make the segments purely esthetical
      // this allows selection off all collors, also
      // interpolated between the segments
      ignoreSegments: {
        type: Boolean,
        value: false
      },
      // throttle te amount of 'colorselected' events fired
      // value is timeout in milliseconds
      throttle: {
        type: Number,
        value: 500
      }
    };
  }

  ready() {
    super.ready();
    this.setupLayers();
    this.drawColorWheel();
    this.drawMarker();
    this.interactionLayer.addEventListener("mousedown", ev => this.onMouseDown(ev));
    this.interactionLayer.addEventListener("touchstart", ev => this.onTouchStart(ev));
  } // converts browser coordinates to canvas canvas coordinates
  // origin is wheel center
  // returns {x: X, y: Y} object


  convertToCanvasCoordinates(clientX, clientY) {
    var svgPoint = this.interactionLayer.createSVGPoint();
    svgPoint.x = clientX;
    svgPoint.y = clientY;
    var cc = svgPoint.matrixTransform(this.interactionLayer.getScreenCTM().inverse());
    return {
      x: cc.x,
      y: cc.y
    };
  } // Mouse events


  onMouseDown(ev) {
    const cc = this.convertToCanvasCoordinates(ev.clientX, ev.clientY); // return if we're not on the wheel

    if (!this.isInWheel(cc.x, cc.y)) {
      return;
    } // a mousedown in wheel is always a color select action


    this.onMouseSelect(ev); // allow dragging

    this.canvas.classList.add("mouse", "dragging");
    this.addEventListener("mousemove", this.onMouseSelect);
    this.addEventListener("mouseup", this.onMouseUp);
  }

  onMouseUp() {
    this.canvas.classList.remove("mouse", "dragging");
    this.removeEventListener("mousemove", this.onMouseSelect);
  }

  onMouseSelect(ev) {
    requestAnimationFrame(() => this.processUserSelect(ev));
  } // Touch events


  onTouchStart(ev) {
    var touch = ev.changedTouches[0];
    const cc = this.convertToCanvasCoordinates(touch.clientX, touch.clientY); // return if we're not on the wheel

    if (!this.isInWheel(cc.x, cc.y)) {
      return;
    }

    if (ev.target === this.marker) {
      // drag marker
      ev.preventDefault();
      this.canvas.classList.add("touch", "dragging");
      this.addEventListener("touchmove", this.onTouchSelect);
      this.addEventListener("touchend", this.onTouchEnd);
      return;
    } // don't fire color selection immediately,
    // wait for touchend and invalidate when we scroll


    this.tapBecameScroll = false;
    this.addEventListener("touchend", this.onTap);
    this.addEventListener("touchmove", () => {
      this.tapBecameScroll = true;
    }, {
      passive: true
    });
  }

  onTap(ev) {
    if (this.tapBecameScroll) {
      return;
    }

    ev.preventDefault();
    this.onTouchSelect(ev);
  }

  onTouchEnd() {
    this.canvas.classList.remove("touch", "dragging");
    this.removeEventListener("touchmove", this.onTouchSelect);
  }

  onTouchSelect(ev) {
    requestAnimationFrame(() => this.processUserSelect(ev.changedTouches[0]));
  }
  /*
   * General event/selection handling
   */
  // Process user input to color


  processUserSelect(ev) {
    var canvasXY = this.convertToCanvasCoordinates(ev.clientX, ev.clientY);
    var hs = this.getColor(canvasXY.x, canvasXY.y);
    this.onColorSelect(hs);
  } // apply color to marker position and canvas


  onColorSelect(hs) {
    this.setMarkerOnColor(hs); // marker always follows mounse 'raw' hs value (= mouse position)

    if (!this.ignoreSegments) {
      // apply segments if needed
      hs = this.applySegmentFilter(hs);
    } // always apply the new color to the interface / canvas


    this.applyColorToCanvas(hs); // throttling is applied to updating the exposed colors (properties)
    // and firing of events

    if (this.colorSelectIsThrottled) {
      // make sure we apply the last selected color
      // eventually after throttle limit has passed
      clearTimeout(this.ensureFinalSelect);
      this.ensureFinalSelect = setTimeout(() => {
        this.fireColorSelected(hs); // do it for the final time
      }, this.throttle);
      return;
    }

    this.fireColorSelected(hs); // do it

    this.colorSelectIsThrottled = true;
    setTimeout(() => {
      this.colorSelectIsThrottled = false;
    }, this.throttle);
  } // set color values and fire colorselected event


  fireColorSelected(hs) {
    this.hsColor = hs;
    this.fire("colorselected", {
      hs: {
        h: hs.h,
        s: hs.s
      }
    });
  }
  /*
   * Interface updating
   */
  // set marker position to the given color


  setMarkerOnColor(hs) {
    var dist = hs.s * this.radius;
    var theta = (hs.h - 180) / 180 * Math.PI;
    var markerdX = -dist * Math.cos(theta);
    var markerdY = -dist * Math.sin(theta);
    var translateString = `translate(${markerdX},${markerdY})`;
    this.marker.setAttribute("transform", translateString);
    this.tooltip.setAttribute("transform", translateString);
  } // apply given color to interface elements


  applyColorToCanvas(hs) {
    // we're not really converting hs to hsl here, but we keep it cheap
    // setting the color on the interactionLayer, the svg elements can inherit
    this.interactionLayer.style.color = `hsl(${hs.h}, 100%, ${100 - hs.s * 50}%)`;
  }

  applyHsColor(hs) {
    // do nothing is we already have the same color
    if (this.hsColor && this.hsColor.h === hs.h && this.hsColor.s === hs.s) {
      return;
    }

    this.setMarkerOnColor(hs); // marker is always set on 'raw' hs position

    if (!this.ignoreSegments) {
      // apply segments if needed
      hs = this.applySegmentFilter(hs);
    }

    this.hsColor = hs; // always apply the new color to the interface / canvas

    this.applyColorToCanvas(hs);
  }
  /*
   * input processing helpers
   */
  // get angle (degrees)


  getAngle(dX, dY) {
    var theta = Math.atan2(-dY, -dX); // radians from the left edge, clockwise = positive

    var angle = theta / Math.PI * 180 + 180; // degrees, clockwise from right

    return angle;
  } // returns true when coordinates are in the colorwheel


  isInWheel(x, y) {
    return this.getDistance(x, y) <= 1;
  } // returns distance from wheel center, 0 = center, 1 = edge, >1 = outside


  getDistance(dX, dY) {
    return Math.sqrt(dX * dX + dY * dY) / this.radius;
  }
  /*
   * Getting colors
   */


  getColor(x, y) {
    var hue = this.getAngle(x, y); // degrees, clockwise from right

    var relativeDistance = this.getDistance(x, y); // edge of radius = 1

    var sat = Math.min(relativeDistance, 1); // Distance from center

    return {
      h: hue,
      s: sat
    };
  }

  applySegmentFilter(hs) {
    // apply hue segment steps
    if (this.hueSegments) {
      const angleStep = 360 / this.hueSegments;
      const halfAngleStep = angleStep / 2;
      hs.h -= halfAngleStep; // take the 'centered segemnts' into account

      if (hs.h < 0) {
        hs.h += 360;
      } // don't end up below 0


      const rest = hs.h % angleStep;
      hs.h -= rest - angleStep;
    } // apply saturation segment steps


    if (this.saturationSegments) {
      if (this.saturationSegments === 1) {
        hs.s = 1;
      } else {
        var segmentSize = 1 / this.saturationSegments;
        var saturationStep = 1 / (this.saturationSegments - 1);
        var calculatedSat = Math.floor(hs.s / segmentSize) * saturationStep;
        hs.s = Math.min(calculatedSat, 1);
      }
    }

    return hs;
  }
  /*
   * Drawing related stuff
   */


  setupLayers() {
    this.canvas = this.$.canvas;
    this.backgroundLayer = this.$.backgroundLayer;
    this.interactionLayer = this.$.interactionLayer; // coordinate origin position (center of the wheel)

    this.originX = this.width / 2;
    this.originY = this.originX; // synchronise width/height coordinates

    this.backgroundLayer.width = this.width;
    this.backgroundLayer.height = this.height;
    this.interactionLayer.setAttribute("viewBox", `${-this.originX} ${-this.originY} ${this.width} ${this.height}`);
  }

  drawColorWheel() {
    /*
     *  Setting up all paremeters
     */
    let shadowColor;
    let shadowOffsetX;
    let shadowOffsetY;
    let shadowBlur;
    const context = this.backgroundLayer.getContext("2d"); // postioning and sizing

    const cX = this.originX;
    const cY = this.originY;
    const radius = this.radius;
    const counterClockwise = false; // styling of the wheel

    const wheelStyle = window.getComputedStyle(this.backgroundLayer, null);
    const borderWidth = parseInt(wheelStyle.getPropertyValue("--wheel-borderwidth"), 10);
    const borderColor = wheelStyle.getPropertyValue("--wheel-bordercolor").trim();
    const wheelShadow = wheelStyle.getPropertyValue("--wheel-shadow").trim(); // extract shadow properties from  CCS variable
    // the shadow should be defined as: "10px 5px 5px 0px COLOR"

    if (wheelShadow !== "none") {
      const values = wheelShadow.split("px ");
      shadowColor = values.pop();
      shadowOffsetX = parseInt(values[0], 10);
      shadowOffsetY = parseInt(values[1], 10);
      shadowBlur = parseInt(values[2], 10) || 0;
    }

    const borderRadius = radius + borderWidth / 2;
    const wheelRadius = radius;
    const shadowRadius = radius + borderWidth;
    /*
     *  Drawing functions
     */

    function drawCircle(hueSegments, saturationSegments) {
      hueSegments = hueSegments || 360; // reset 0 segments to 360

      const angleStep = 360 / hueSegments;
      const halfAngleStep = angleStep / 2; // center segments on color

      for (var angle = 0; angle <= 360; angle += angleStep) {
        var startAngle = (angle - halfAngleStep) * (Math.PI / 180);
        var endAngle = (angle + halfAngleStep + 1) * (Math.PI / 180);
        context.beginPath();
        context.moveTo(cX, cY);
        context.arc(cX, cY, wheelRadius, startAngle, endAngle, counterClockwise);
        context.closePath(); // gradient

        var gradient = context.createRadialGradient(cX, cY, 0, cX, cY, wheelRadius);
        let lightness = 100; // first gradient stop

        gradient.addColorStop(0, `hsl(${angle}, 100%, ${lightness}%)`); // segment gradient stops

        if (saturationSegments > 0) {
          const ratioStep = 1 / saturationSegments;
          let ratio = 0;

          for (var stop = 1; stop < saturationSegments; stop += 1) {
            var prevLighness = lightness;
            ratio = stop * ratioStep;
            lightness = 100 - 50 * ratio;
            gradient.addColorStop(ratio, `hsl(${angle}, 100%, ${prevLighness}%)`);
            gradient.addColorStop(ratio, `hsl(${angle}, 100%, ${lightness}%)`);
          }

          gradient.addColorStop(ratio, `hsl(${angle}, 100%, 50%)`);
        } // last gradient stop


        gradient.addColorStop(1, `hsl(${angle}, 100%, 50%)`);
        context.fillStyle = gradient;
        context.fill();
      }
    }

    function drawShadow() {
      context.save();
      context.beginPath();
      context.arc(cX, cY, shadowRadius, 0, 2 * Math.PI, false);
      context.shadowColor = shadowColor;
      context.shadowOffsetX = shadowOffsetX;
      context.shadowOffsetY = shadowOffsetY;
      context.shadowBlur = shadowBlur;
      context.fillStyle = "white";
      context.fill();
      context.restore();
    }

    function drawBorder() {
      context.beginPath();
      context.arc(cX, cY, borderRadius, 0, 2 * Math.PI, false);
      context.lineWidth = borderWidth;
      context.strokeStyle = borderColor;
      context.stroke();
    }
    /*
     *   Call the drawing functions
     *   draws the shadow, wheel and border
     */


    if (wheelStyle.shadow !== "none") {
      drawShadow();
    }

    drawCircle(this.hueSegments, this.saturationSegments);

    if (borderWidth > 0) {
      drawBorder();
    }
  }
  /*
   *   Draw the (draggable) marker and tooltip
   *   on the interactionLayer)
   */


  drawMarker() {
    const svgElement = this.interactionLayer;
    const markerradius = this.radius * 0.08;
    const tooltipradius = this.radius * 0.15;
    const TooltipOffsetY = -(tooltipradius * 3);
    const TooltipOffsetX = 0;
    svgElement.marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svgElement.marker.setAttribute("id", "marker");
    svgElement.marker.setAttribute("r", markerradius);
    this.marker = svgElement.marker;
    svgElement.appendChild(svgElement.marker);
    svgElement.tooltip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
    svgElement.tooltip.setAttribute("id", "colorTooltip");
    svgElement.tooltip.setAttribute("r", tooltipradius);
    svgElement.tooltip.setAttribute("cx", TooltipOffsetX);
    svgElement.tooltip.setAttribute("cy", TooltipOffsetY);
    this.tooltip = svgElement.tooltip;
    svgElement.appendChild(svgElement.tooltip);
  }

  segmentationChange() {
    if (this.backgroundLayer) {
      this.drawColorWheel();
    }
  }

}

customElements.define("ha-color-picker", HaColorPicker);

/***/ }),

/***/ "./src/components/ha-labeled-slider.js":
/*!*********************************************!*\
  !*** ./src/components/ha-labeled-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");





class HaLabeledSlider extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: block;
        }

        .title {
          margin-bottom: 16px;
          opacity: var(--dark-primary-opacity);
        }

        ha-icon {
          float: left;
          margin-top: 4px;
          opacity: var(--dark-secondary-opacity);
        }

        ha-paper-slider {
          background-image: var(--ha-slider-background);
        }
      </style>

      <div class="title">[[caption]]</div>
      <div class="extra-container"><slot name="extra"></slot></div>
      <div class="slider-container">
        <ha-icon icon="[[icon]]" hidden$="[[!icon]]"></ha-icon>
        <ha-paper-slider
          min="[[min]]"
          max="[[max]]"
          step="[[step]]"
          pin="[[pin]]"
          disabled="[[disabled]]"
          disabled="[[disabled]]"
          value="{{value}}"
        ></ha-paper-slider>
      </div>
    `;
  }

  static get properties() {
    return {
      caption: String,
      disabled: Boolean,
      min: Number,
      max: Number,
      pin: Boolean,
      step: Number,
      extra: {
        type: Boolean,
        value: false
      },
      ignoreBarTouch: {
        type: Boolean,
        value: true
      },
      icon: {
        type: String,
        value: ""
      },
      value: {
        type: Number,
        notify: true
      }
    };
  }

}

customElements.define("ha-labeled-slider", HaLabeledSlider);

/***/ }),

/***/ "./src/components/ha-paper-icon-button-arrow-prev.ts":
/*!***********************************************************!*\
  !*** ./src/components/ha-paper-icon-button-arrow-prev.ts ***!
  \***********************************************************/
/*! exports provided: HaPaperIconButtonArrowPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonArrowPrev", function() { return HaPaperIconButtonArrowPrev; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const paperIconButtonClass = customElements.get("paper-icon-button");
class HaPaperIconButtonArrowPrev extends paperIconButtonClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hassio", void 0);
  }

  connectedCallback() {
    this.icon = window.getComputedStyle(this).direction === "ltr" ? this.hassio ? "hassio:arrow-left" : "hass:arrow-left" : this.hassio ? "hassio:arrow-right" : "hass:arrow-right"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

    super.connectedCallback();
  }

}
customElements.define("ha-paper-icon-button-arrow-prev", HaPaperIconButtonArrowPrev);

/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");

/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

const PaperSliderClass = customElements.get("paper-slider");

class HaPaperSlider extends PaperSliderClass {
  static get template() {
    const tpl = document.createElement("template");
    tpl.innerHTML = PaperSliderClass.template.innerHTML;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
    tpl.content.appendChild(styleEl);
    return tpl;
  }

}

customElements.define("ha-paper-slider", HaPaperSlider);

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

/***/ "./src/components/ha-water_heater-control.js":
/*!***************************************************!*\
  !*** ./src/components/ha-water_heater-control.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");





/*
 * @appliesMixin EventsMixin
 */

class HaWaterHeaterControl extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        /* local DOM styles go here */
        :host {
          @apply --layout-flex;
          @apply --layout-horizontal;
          @apply --layout-justified;
        }
        .in-flux#target_temperature {
          color: var(--google-red-500);
        }
        #target_temperature {
          @apply --layout-self-center;
          font-size: 200%;
        }
        .control-buttons {
          font-size: 200%;
          text-align: right;
        }
        paper-icon-button {
          height: 48px;
          width: 48px;
        }
      </style>

      <!-- local DOM goes here -->
      <div id="target_temperature">[[value]] [[units]]</div>
      <div class="control-buttons">
        <div>
          <paper-icon-button
            icon="hass:chevron-up"
            on-click="incrementValue"
          ></paper-icon-button>
        </div>
        <div>
          <paper-icon-button
            icon="hass:chevron-down"
            on-click="decrementValue"
          ></paper-icon-button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      value: {
        type: Number,
        observer: "valueChanged"
      },
      units: {
        type: String
      },
      min: {
        type: Number
      },
      max: {
        type: Number
      },
      step: {
        type: Number,
        value: 1
      }
    };
  }

  temperatureStateInFlux(inFlux) {
    this.$.target_temperature.classList.toggle("in-flux", inFlux);
  }

  incrementValue() {
    const newval = this.value + this.step;

    if (this.value < this.max) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }

    if (newval <= this.max) {
      // If no initial target_temp
      // this forces control to start
      // from the min configured instead of 0
      if (newval <= this.min) {
        this.value = this.min;
      } else {
        this.value = newval;
      }
    } else {
      this.value = this.max;
    }
  }

  decrementValue() {
    const newval = this.value - this.step;

    if (this.value > this.min) {
      this.last_changed = Date.now();
      this.temperatureStateInFlux(true);
    }

    if (newval >= this.min) {
      this.value = newval;
    } else {
      this.value = this.min;
    }
  }

  valueChanged() {
    // when the last_changed timestamp is changed,
    // trigger a potential event fire in
    // the future, as long as last changed is far enough in the
    // past.
    if (this.last_changed) {
      window.setTimeout(() => {
        const now = Date.now();

        if (now - this.last_changed >= 2000) {
          this.fire("change");
          this.temperatureStateInFlux(false);
          this.last_changed = null;
        }
      }, 2010);
    }
  }

}

customElements.define("ha-water_heater-control", HaWaterHeaterControl);

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

/***/ "./src/dialogs/ha-more-info-dialog.js":
/*!********************************************!*\
  !*** ./src/dialogs/ha-more-info-dialog.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _more_info_more_info_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info/more-info-controls */ "./src/dialogs/more-info/more-info-controls.js");
/* harmony import */ var _more_info_more_info_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info/more-info-settings */ "./src/dialogs/more-info/more-info-settings.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/dialog-mixin */ "./src/mixins/dialog-mixin.js");










/*
 * @appliesMixin DialogMixin
 */

class HaMoreInfoDialog extends Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="ha-style-dialog paper-dialog-shared-styles">
        :host {
          font-size: 14px;
          width: 365px;
          border-radius: 2px;
        }

        more-info-controls,
        more-info-settings {
          --more-info-header-background: var(--secondary-background-color);
          --more-info-header-color: var(--primary-text-color);
          --ha-more-info-app-toolbar-title: {
            /* Design guideline states 24px, changed to 16 to align with state info */
            margin-left: 16px;
            line-height: 1.3em;
            max-height: 2.6em;
            overflow: hidden;
            /* webkit and blink still support simple multiline text-overflow */
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            text-overflow: ellipsis;
          }
        }

        /* overrule the ha-style-dialog max-height on small screens */
        @media all and (max-width: 450px), all and (max-height: 500px) {
          more-info-controls,
          more-info-settings {
            --more-info-header-background: var(--primary-color);
            --more-info-header-color: var(--text-primary-color);
          }
          :host {
            width: 100% !important;
            border-radius: 0px;
            position: fixed !important;
            margin: 0;
          }
          :host::before {
            content: "";
            position: fixed;
            z-index: -1;
            top: 0px;
            left: 0px;
            right: 0px;
            bottom: 0px;
            background-color: inherit;
          }
        }

        :host([data-domain="camera"]) {
          width: auto;
        }

        :host([data-domain="history_graph"]),
        :host([large]) {
          width: 90%;
        }
      </style>

      <template is="dom-if" if="[[!_page]]">
        <more-info-controls
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          dialog-element="[[_dialogElement]]"
          can-configure="[[_registryInfo]]"
          large="{{large}}"
        ></more-info-controls>
      </template>
      <template is="dom-if" if='[[_equals(_page, "settings")]]'>
        <more-info-settings
          class="no-padding"
          hass="[[hass]]"
          state-obj="[[stateObj]]"
          registry-info="{{_registryInfo}}"
        ></more-info-settings>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        computed: "_computeStateObj(hass)",
        observer: "_stateObjChanged"
      },
      large: {
        type: Boolean,
        reflectToAttribute: true,
        observer: "_largeChanged"
      },
      _dialogElement: Object,
      _registryInfo: Object,
      _page: {
        type: String,
        value: null
      },
      dataDomain: {
        computed: "_computeDomain(stateObj)",
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ["_dialogOpenChanged(opened)"];
  }

  ready() {
    super.ready();
    this._dialogElement = this;
    this.addEventListener("more-info-page", ev => {
      this._page = ev.detail.page;
    });
  }

  _computeDomain(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj) : "";
  }

  _computeStateObj(hass) {
    return hass.states[hass.moreInfoEntityId] || null;
  }

  async _stateObjChanged(newVal, oldVal) {
    if (!newVal) {
      this.setProperties({
        opened: false,
        _page: null,
        _registryInfo: null,
        large: false
      });
      return;
    }

    requestAnimationFrame(() => requestAnimationFrame(() => {
      // allow dialog to render content before showing it so it will be
      // positioned correctly.
      this.opened = true;
    }));

    if (!Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(this.hass, "config") || oldVal && oldVal.entity_id === newVal.entity_id) {
      return;
    }

    if (this.hass.user.is_admin) {
      try {
        const info = await this.hass.callWS({
          type: "config/entity_registry/get",
          entity_id: newVal.entity_id
        });
        this._registryInfo = info;
      } catch (err) {
        this._registryInfo = null;
      }
    }
  }

  _dialogOpenChanged(newVal) {
    if (!newVal && this.stateObj) {
      this.fire("hass-more-info", {
        entityId: null
      });
    }
  }

  _equals(a, b) {
    return a === b;
  }

  _largeChanged() {
    this.notifyResize();
  }

}

customElements.define("ha-more-info-dialog", HaMoreInfoDialog);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js":
/*!*************************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-alarm_control_panel.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");








class MoreInfoAlarmControlPanel extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex"></style>
      <style>
        paper-input {
          margin: auto;
          max-width: 200px;
        }
        .pad {
          display: flex;
          justify-content: center;
          margin-bottom: 24px;
        }
        .pad div {
          display: flex;
          flex-direction: column;
        }
        .pad mwc-button {
          width: 80px;
        }
        .actions mwc-button {
          min-width: 160px;
          margin-bottom: 16px;
        }
        mwc-button.disarm {
          color: var(--google-red-500);
        }
      </style>

      <template is="dom-if" if="[[_codeFormat]]">
        <paper-input
          label="[[localize('ui.card.alarm_control_panel.code')]]"
          value="{{_enteredCode}}"
          type="password"
          disabled="[[!_inputEnabled]]"
        ></paper-input>

        <template is="dom-if" if="[[_isNumber(_codeFormat)]]">
          <div class="pad">
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="1"
                raised
                >1</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="4"
                raised
                >4</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="7"
                raised
                >7</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="2"
                raised
                >2</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="5"
                raised
                >5</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="8"
                raised
                >8</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="0"
                raised
                >0</mwc-button
              >
            </div>
            <div>
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="3"
                raised
                >3</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="6"
                raised
                >6</mwc-button
              >
              <mwc-button
                on-click="_digitClicked"
                disabled="[[!_inputEnabled]]"
                data-digit="9"
                raised
                >9</mwc-button
              >
              <mwc-button
                on-click="_clearEnteredCode"
                disabled="[[!_inputEnabled]]"
                raised
              >
                [[localize('ui.card.alarm_control_panel.clear_code')]]
              </mwc-button>
            </div>
          </div>
        </template>
      </template>

      <div class="layout horizontal center-justified actions">
        <template is="dom-if" if="[[_disarmVisible]]">
          <mwc-button
            raised
            class="disarm"
            on-click="_callService"
            data-service="alarm_disarm"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.disarm')]]
          </mwc-button>
        </template>
        <template is="dom-if" if="[[_armVisible]]">
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_home"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_home')]]
          </mwc-button>
          <mwc-button
            raised
            on-click="_callService"
            data-service="alarm_arm_away"
            disabled="[[!_codeValid]]"
          >
            [[localize('ui.card.alarm_control_panel.arm_away')]]
          </mwc-button>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "_stateObjChanged"
      },
      _enteredCode: {
        type: String,
        value: ""
      },
      _codeFormat: {
        type: String,
        value: ""
      },
      _codeValid: {
        type: Boolean,
        computed: "_validateCode(_enteredCode, _codeFormat)"
      },
      _disarmVisible: {
        type: Boolean,
        value: false
      },
      _armVisible: {
        type: Boolean,
        value: false
      },
      _inputEnabled: {
        type: Boolean,
        value: false
      }
    };
  }

  constructor() {
    super();
    this._armedStates = ["armed_home", "armed_away", "armed_night", "armed_custom_bypass"];
  }

  _stateObjChanged(newVal, oldVal) {
    if (newVal) {
      const state = newVal.state;
      const props = {
        _codeFormat: newVal.attributes.code_format,
        _armVisible: state === "disarmed",
        _disarmVisible: this._armedStates.includes(state) || state === "pending" || state === "triggered" || state === "arming"
      };
      props._inputEnabled = props._disarmVisible || props._armVisible;
      this.setProperties(props);
    }

    if (oldVal) {
      setTimeout(() => {
        this.fire("iron-resize");
      }, 500);
    }
  }

  _isNumber(format) {
    return format === "Number";
  }

  _validateCode(code, format) {
    return !format || code.length > 0;
  }

  _digitClicked(ev) {
    this._enteredCode += ev.target.getAttribute("data-digit");
  }

  _clearEnteredCode() {
    this._enteredCode = "";
  }

  _callService(ev) {
    const service = ev.target.getAttribute("data-service");
    const data = {
      entity_id: this.stateObj.entity_id,
      code: this._enteredCode
    };
    this.hass.callService("alarm_control_panel", service, data).then(() => {
      this._enteredCode = "";
    });
  }

}

customElements.define("more-info-alarm_control_panel", MoreInfoAlarmControlPanel);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-automation.js":
/*!****************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-automation.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






class MoreInfoAutomation extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .flex {
          display: flex;
          justify-content: space-between;
        }
        .actions {
          margin: 36px 0 8px 0;
          text-align: right;
        }
      </style>

      <div class="flex">
        <div>[[localize('ui.card.automation.last_triggered')]]:</div>
        <ha-relative-time
          hass="[[hass]]"
          datetime="[[stateObj.attributes.last_triggered]]"
        ></ha-relative-time>
      </div>

      <div class="actions">
        <mwc-button on-click="handleTriggerTapped">
          [[localize('ui.card.automation.trigger')]]
        </mwc-button>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object
    };
  }

  handleTriggerTapped() {
    this.hass.callService("automation", "trigger", {
      entity_id: this.stateObj.entity_id
    });
  }

}

customElements.define("more-info-automation", MoreInfoAutomation);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-camera.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-camera.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _components_ha_camera_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-camera-stream */ "./src/components/ha-camera-stream.ts");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
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





 // Not duplicate import, it's for typing
// tslint:disable-next-line

let MoreInfoCamera = _decorate(null, function (_initialize, _LitElement) {
  class MoreInfoCamera extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: MoreInfoCamera,
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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cameraPrefs",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-camera-stream
        .hass="${this.hass}"
        .stateObj="${this.stateObj}"
        showcontrols
      ></ha-camera-stream>
      ${this._cameraPrefs ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <paper-checkbox
              .checked=${this._cameraPrefs.preload_stream}
              @change=${this._handleCheckboxChanged}
            >
              Preload stream
            </paper-checkbox>
          ` : undefined}
    `;
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (!changedProps.has("stateObj")) {
          return;
        }

        const oldState = changedProps.get("stateObj");
        const oldEntityId = oldState ? oldState.entity_id : undefined;
        const curEntityId = this.stateObj ? this.stateObj.entity_id : undefined; // Same entity, ignore.

        if (curEntityId === oldEntityId) {
          return;
        }

        if (curEntityId && this.hass.config.components.includes("stream") && Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_2__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_1__["CAMERA_SUPPORT_STREAM"])) {
          // Fetch in background while we set up the video.
          this._fetchCameraPrefs();
        }
      }
    }, {
      kind: "method",
      key: "_fetchCameraPrefs",
      value: async function _fetchCameraPrefs() {
        this._cameraPrefs = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_1__["fetchCameraPrefs"])(this.hass, this.stateObj.entity_id);
      }
    }, {
      kind: "method",
      key: "_handleCheckboxChanged",
      value: async function _handleCheckboxChanged(ev) {
        const checkbox = ev.currentTarget;

        try {
          this._cameraPrefs = await Object(_data_camera__WEBPACK_IMPORTED_MODULE_1__["updateCameraPrefs"])(this.hass, this.stateObj.entity_id, {
            preload_stream: checkbox.checked
          });
        } catch (err) {
          alert(err.message);
          checkbox.checked = !checkbox.checked;
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      paper-checkbox {
        position: absolute;
        top: 0;
        right: 0;
        background-color: var(--secondary-background-color);
        padding: 5px;
        border-bottom-left-radius: 6px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("more-info-camera", MoreInfoCamera);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-climate.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-climate.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_climate_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-climate-control */ "./src/components/ha-climate-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");

















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class MoreInfoClimate extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          color: var(--primary-text-color);
        }

        .container-on,
        .container-away_mode,
        .container-aux_heat,
        .container-temperature,
        .container-humidity,
        .container-operation_list,
        .container-fan_list,
        .container-swing_list {
          display: none;
        }

        .has-on .container-on,
        .has-away_mode .container-away_mode,
        .has-aux_heat .container-aux_heat,
        .has-target_temperature .container-temperature,
        .has-target_temperature_low .container-temperature,
        .has-target_temperature_high .container-temperature,
        .has-target_humidity .container-humidity,
        .has-operation_mode .container-operation_list,
        .has-fan_mode .container-fan_list,
        .has-swing_list .container-swing_list,
        .has-swing_mode .container-swing_list {
          display: block;
          margin-bottom: 5px;
        }

        .container-operation_list iron-icon,
        .container-fan_list iron-icon,
        .container-swing_list iron-icon {
          margin: 22px 16px 0 0;
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }

        ha-paper-slider {
          width: 100%;
        }

        .container-humidity .single-row {
            display: flex;
            height: 50px;
        }

        .target-humidity {
          width: 90px;
          font-size: 200%;
          margin: auto;
          direction: ltr;
        }

        ha-climate-control.range-control-left,
        ha-climate-control.range-control-right {
          float: left;
          width: 46%;
        }
        ha-climate-control.range-control-left {
          margin-right: 4%;
        }
        ha-climate-control.range-control-right {
          margin-left: 4%;
        }

        .humidity {
          --paper-slider-active-color: var(--paper-blue-400);
          --paper-slider-secondary-color: var(--paper-blue-400);
        }

        .single-row {
          padding: 8px 0;
        }
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <template is="dom-if" if="[[supportsOn(stateObj)]]">
          <div class="container-on">
            <div class="center horizontal layout single-row">
              <div class="flex">[[localize('ui.card.climate.on_off')]]</div>
              <paper-toggle-button
                checked="[[onToggleChecked]]"
                on-change="onToggleChanged"
              >
              </paper-toggle-button>
            </div>
          </div>
        </template>

        <div class="container-temperature">
          <div class$="[[stateObj.attributes.operation_mode]]">
            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">
              [[localize('ui.card.climate.target_temperature')]]
            </div>
            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
              <ha-climate-control
                value="[[stateObj.attributes.temperature]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.max_temp]]"
                on-change="targetTemperatureChanged"
              >
              </ha-climate-control>
            </template>
            <template is="dom-if" if="[[supportsTemperatureRange(stateObj)]]">
              <ha-climate-control
                value="[[stateObj.attributes.target_temp_low]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.target_temp_high]]"
                class="range-control-left"
                on-change="targetTemperatureLowChanged"
              >
              </ha-climate-control>
              <ha-climate-control
                value="[[stateObj.attributes.target_temp_high]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.target_temp_low]]"
                max="[[stateObj.attributes.max_temp]]"
                class="range-control-right"
                on-change="targetTemperatureHighChanged"
              >
              </ha-climate-control>
            </template>
          </div>
        </div>

        <template is="dom-if" if="[[supportsHumidity(stateObj)]]">
          <div class="container-humidity">
            <div>[[localize('ui.card.climate.target_humidity')]]</div>
            <div class="single-row">
              <div class="target-humidity">
                [[stateObj.attributes.humidity]] %
              </div>
              <ha-paper-slider
                class="humidity"
                min="[[stateObj.attributes.min_humidity]]"
                max="[[stateObj.attributes.max_humidity]]"
                secondary-progress="[[stateObj.attributes.max_humidity]]"
                step="1"
                pin=""
                value="[[stateObj.attributes.humidity]]"
                on-change="targetHumiditySliderChanged"
                ignore-bar-touch=""
                dir="[[rtl]]"
              >
              </ha-paper-slider>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
          <div class="container-operation_list">
            <div class="controls">
              <ha-paper-dropdown-menu
                label-float=""
                dynamic-align=""
                label="[[localize('ui.card.climate.operation')]]"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[stateObj.attributes.operation_mode]]"
                  attr-for-selected="item-name"
                  on-selected-changed="handleOperationmodeChanged"
                >
                  <template
                    is="dom-repeat"
                    items="[[stateObj.attributes.operation_list]]"
                  >
                    <paper-item item-name$="[[item]]"
                      >[[_localizeOperationMode(localize, item)]]</paper-item
                    >
                  </template>
                </paper-listbox>
              </ha-paper-dropdown-menu>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsFanMode(stateObj)]]">
          <div class="container-fan_list">
            <ha-paper-dropdown-menu
              label-float=""
              dynamic-align=""
              label="[[localize('ui.card.climate.fan_mode')]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="[[stateObj.attributes.fan_mode]]"
                attr-for-selected="item-name"
                on-selected-changed="handleFanmodeChanged"
              >
                <template
                  is="dom-repeat"
                  items="[[stateObj.attributes.fan_list]]"
                >
                  <paper-item item-name$="[[item]]"
                    >[[_localizeFanMode(localize, item)]]
                  </paper-item>
                </template>
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </template>

        <template is="dom-if" if="[[supportsSwingMode(stateObj)]]">
          <div class="container-swing_list">
            <ha-paper-dropdown-menu
              label-float=""
              dynamic-align=""
              label="[[localize('ui.card.climate.swing_mode')]]"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="[[stateObj.attributes.swing_mode]]"
                attr-for-selected="item-name"
                on-selected-changed="handleSwingmodeChanged"
              >
                <template
                  is="dom-repeat"
                  items="[[stateObj.attributes.swing_list]]"
                >
                  <paper-item item-name$="[[item]]">[[item]]</paper-item>
                </template>
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
          <div class="container-away_mode">
            <div class="center horizontal layout single-row">
              <div class="flex">[[localize('ui.card.climate.away_mode')]]</div>
              <paper-toggle-button
                checked="[[awayToggleChecked]]"
                on-change="awayToggleChanged"
              >
              </paper-toggle-button>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAuxHeat(stateObj)]]">
          <div class="container-aux_heat">
            <div class="center horizontal layout single-row">
              <div class="flex">[[localize('ui.card.climate.aux_heat')]]</div>
              <paper-toggle-button
                checked="[[auxToggleChecked]]"
                on-change="auxToggleChanged"
              >
              </paper-toggle-button>
            </div>
          </div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      awayToggleChecked: Boolean,
      auxToggleChecked: Boolean,
      onToggleChecked: Boolean,
      rtl: {
        type: String,
        value: "ltr",
        computed: "_computeRTLDirection(hass)"
      }
    };
  }

  stateObjChanged(newVal, oldVal) {
    if (newVal) {
      this.setProperties({
        awayToggleChecked: newVal.attributes.away_mode === "on",
        auxToggleChecked: newVal.attributes.aux_heat === "on",
        onToggleChecked: newVal.state !== "off"
      });
    }

    if (oldVal) {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(500), () => {
        this.fire("iron-resize");
      });
    }
  }

  computeTemperatureStepSize(hass, stateObj) {
    if (stateObj.attributes.target_temp_step) {
      return stateObj.attributes.target_temp_step;
    }

    if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
      return 1;
    }

    return 0.5;
  }

  supportsTemperatureControls(stateObj) {
    return this.supportsTemperature(stateObj) || this.supportsTemperatureRange(stateObj);
  }

  supportsTemperature(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 1) && typeof stateObj.attributes.temperature === "number";
  }

  supportsTemperatureRange(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 6) && (typeof stateObj.attributes.target_temp_low === "number" || typeof stateObj.attributes.target_temp_high === "number");
  }

  supportsHumidity(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 8);
  }

  supportsFanMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 64);
  }

  supportsOperationMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 128);
  }

  supportsSwingMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 512);
  }

  supportsAwayMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 1024);
  }

  supportsAuxHeat(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 2048);
  }

  supportsOn(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 4096);
  }

  computeClassNames(stateObj) {
    const _featureClassNames = {
      1: "has-target_temperature",
      2: "has-target_temperature_high",
      4: "has-target_temperature_low",
      8: "has-target_humidity",
      16: "has-target_humidity_high",
      32: "has-target_humidity_low",
      64: "has-fan_mode",
      128: "has-operation_mode",
      256: "has-hold_mode",
      512: "has-swing_mode",
      1024: "has-away_mode",
      2048: "has-aux_heat",
      4096: "has-on"
    };
    var classes = [Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj, ["current_temperature", "current_humidity"]), Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_12__["default"])(stateObj, _featureClassNames)];
    classes.push("more-info-climate");
    return classes.join(" ");
  }

  targetTemperatureChanged(ev) {
    const temperature = ev.target.value;
    if (temperature === this.stateObj.attributes.temperature) return;
    this.callServiceHelper("set_temperature", {
      temperature: temperature
    });
  }

  targetTemperatureLowChanged(ev) {
    const targetTempLow = ev.currentTarget.value;
    if (targetTempLow === this.stateObj.attributes.target_temp_low) return;
    this.callServiceHelper("set_temperature", {
      target_temp_low: targetTempLow,
      target_temp_high: this.stateObj.attributes.target_temp_high
    });
  }

  targetTemperatureHighChanged(ev) {
    const targetTempHigh = ev.currentTarget.value;
    if (targetTempHigh === this.stateObj.attributes.target_temp_high) return;
    this.callServiceHelper("set_temperature", {
      target_temp_low: this.stateObj.attributes.target_temp_low,
      target_temp_high: targetTempHigh
    });
  }

  targetHumiditySliderChanged(ev) {
    const humidity = ev.target.value;
    if (humidity === this.stateObj.attributes.humidity) return;
    this.callServiceHelper("set_humidity", {
      humidity: humidity
    });
  }

  awayToggleChanged(ev) {
    const oldVal = this.stateObj.attributes.away_mode === "on";
    const newVal = ev.target.checked;
    if (oldVal === newVal) return;
    this.callServiceHelper("set_away_mode", {
      away_mode: newVal
    });
  }

  auxToggleChanged(ev) {
    const oldVal = this.stateObj.attributes.aux_heat === "on";
    const newVal = ev.target.checked;
    if (oldVal === newVal) return;
    this.callServiceHelper("set_aux_heat", {
      aux_heat: newVal
    });
  }

  onToggleChanged(ev) {
    const oldVal = this.stateObj.state !== "off";
    const newVal = ev.target.checked;
    if (oldVal === newVal) return;
    this.callServiceHelper(newVal ? "turn_on" : "turn_off", {});
  }

  handleFanmodeChanged(ev) {
    const oldVal = this.stateObj.attributes.fan_mode;
    const newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.callServiceHelper("set_fan_mode", {
      fan_mode: newVal
    });
  }

  handleOperationmodeChanged(ev) {
    const oldVal = this.stateObj.attributes.operation_mode;
    const newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.callServiceHelper("set_operation_mode", {
      operation_mode: newVal
    });
  }

  handleSwingmodeChanged(ev) {
    const oldVal = this.stateObj.attributes.swing_mode;
    const newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.callServiceHelper("set_swing_mode", {
      swing_mode: newVal
    });
  }

  callServiceHelper(service, data) {
    // We call stateChanged after a successful call to re-sync the inputs
    // with the state. It will be out of sync if our service call did not
    // result in the entity to be turned on. Since the state is not changing,
    // the resync is not called automatic.

    /* eslint-disable no-param-reassign */
    data.entity_id = this.stateObj.entity_id;
    /* eslint-enable no-param-reassign */

    this.hass.callService("climate", service, data).then(() => {
      this.stateObjChanged(this.stateObj);
    });
  }

  _localizeOperationMode(localize, mode) {
    return localize(`state.climate.${mode}`) || mode;
  }

  _localizeFanMode(localize, mode) {
    return localize(`state_attributes.climate.fan_mode.${mode}`) || mode;
  }

  _computeRTLDirection(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTLDirection"])(hass);
  }

}

customElements.define("more-info-climate", MoreInfoClimate);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-configurator.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-configurator.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_input_iron_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.js");









class MoreInfoConfigurator extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex"></style>
      <style>
        p {
          margin: 8px 0;
        }

        a {
          color: var(--primary-color);
        }

        p > img {
          max-width: 100%;
        }

        p.center {
          text-align: center;
        }

        p.error {
          color: #c62828;
        }

        p.submit {
          text-align: center;
          height: 41px;
        }

        paper-spinner {
          width: 14px;
          height: 14px;
          margin-right: 20px;
        }

        [hidden] {
          display: none;
        }
      </style>

      <div class="layout vertical">
        <template is="dom-if" if="[[isConfigurable]]">
          <ha-markdown
            content="[[stateObj.attributes.description]]"
          ></ha-markdown>

          <p class="error" hidden$="[[!stateObj.attributes.errors]]">
            [[stateObj.attributes.errors]]
          </p>

          <template is="dom-repeat" items="[[stateObj.attributes.fields]]">
            <paper-input
              label="[[item.name]]"
              name="[[item.id]]"
              type="[[item.type]]"
              on-change="fieldChanged"
            ></paper-input>
          </template>

          <p class="submit" hidden$="[[!stateObj.attributes.submit_caption]]">
            <mwc-button
              raised=""
              disabled="[[isConfiguring]]"
              on-click="submitClicked"
            >
              <paper-spinner
                active="[[isConfiguring]]"
                hidden="[[!isConfiguring]]"
                alt="Configuring"
              ></paper-spinner>
              [[stateObj.attributes.submit_caption]]
            </mwc-button>
          </p>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object
      },
      action: {
        type: String,
        value: "display"
      },
      isConfigurable: {
        type: Boolean,
        computed: "computeIsConfigurable(stateObj)"
      },
      isConfiguring: {
        type: Boolean,
        value: false
      },
      fieldInput: {
        type: Object,
        value: function () {
          return {};
        }
      }
    };
  }

  computeIsConfigurable(stateObj) {
    return stateObj.state === "configure";
  }

  fieldChanged(ev) {
    var el = ev.target;
    this.fieldInput[el.name] = el.value;
  }

  submitClicked() {
    var data = {
      configure_id: this.stateObj.attributes.configure_id,
      fields: this.fieldInput
    };
    this.isConfiguring = true;
    this.hass.callService("configurator", "configure", data).then(function () {
      this.isConfiguring = false;
    }.bind(this), function () {
      this.isConfiguring = false;
    }.bind(this));
  }

}

customElements.define("more-info-configurator", MoreInfoConfigurator);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-content.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-content.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _more_info_alarm_control_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-info-alarm_control_panel */ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js");
/* harmony import */ var _more_info_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more-info-automation */ "./src/dialogs/more-info/controls/more-info-automation.js");
/* harmony import */ var _more_info_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-info-camera */ "./src/dialogs/more-info/controls/more-info-camera.ts");
/* harmony import */ var _more_info_climate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-info-climate */ "./src/dialogs/more-info/controls/more-info-climate.js");
/* harmony import */ var _more_info_configurator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info-configurator */ "./src/dialogs/more-info/controls/more-info-configurator.js");
/* harmony import */ var _more_info_cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info-cover */ "./src/dialogs/more-info/controls/more-info-cover.js");
/* harmony import */ var _more_info_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-info-default */ "./src/dialogs/more-info/controls/more-info-default.js");
/* harmony import */ var _more_info_fan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-info-fan */ "./src/dialogs/more-info/controls/more-info-fan.js");
/* harmony import */ var _more_info_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more-info-group */ "./src/dialogs/more-info/controls/more-info-group.js");
/* harmony import */ var _more_info_history_graph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./more-info-history_graph */ "./src/dialogs/more-info/controls/more-info-history_graph.js");
/* harmony import */ var _more_info_input_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./more-info-input_datetime */ "./src/dialogs/more-info/controls/more-info-input_datetime.js");
/* harmony import */ var _more_info_light__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more-info-light */ "./src/dialogs/more-info/controls/more-info-light.js");
/* harmony import */ var _more_info_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./more-info-lock */ "./src/dialogs/more-info/controls/more-info-lock.js");
/* harmony import */ var _more_info_media_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./more-info-media_player */ "./src/dialogs/more-info/controls/more-info-media_player.js");
/* harmony import */ var _more_info_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./more-info-script */ "./src/dialogs/more-info/controls/more-info-script.js");
/* harmony import */ var _more_info_sun__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./more-info-sun */ "./src/dialogs/more-info/controls/more-info-sun.js");
/* harmony import */ var _more_info_updater__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./more-info-updater */ "./src/dialogs/more-info/controls/more-info-updater.js");
/* harmony import */ var _more_info_vacuum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./more-info-vacuum */ "./src/dialogs/more-info/controls/more-info-vacuum.js");
/* harmony import */ var _more_info_water_heater__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./more-info-water_heater */ "./src/dialogs/more-info/controls/more-info-water_heater.js");
/* harmony import */ var _more_info_weather__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./more-info-weather */ "./src/dialogs/more-info/controls/more-info-weather.js");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

























class MoreInfoContent extends lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "stateObj", void 0);

    _defineProperty(this, "_detachedChild", void 0);
  }

  static get properties() {
    return {
      hass: {},
      stateObj: {}
    };
  }

  firstUpdated() {
    this.style.position = "relative";
    this.style.display = "block";
  } // This is not a lit element, but an updating element, so we implement update


  update(changedProps) {
    super.update(changedProps);
    const stateObj = this.stateObj;
    const hass = this.hass;

    if (!stateObj || !hass) {
      if (this.lastChild) {
        this._detachedChild = this.lastChild; // Detach child to prevent it from doing work.

        this.removeChild(this.lastChild);
      }

      return;
    }

    if (this._detachedChild) {
      this.appendChild(this._detachedChild);
      this._detachedChild = undefined;
    }

    const moreInfoType = stateObj.attributes && "custom_ui_more_info" in stateObj.attributes ? stateObj.attributes.custom_ui_more_info : "more-info-" + Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_21__["default"])(stateObj);
    Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_22__["default"])(this, moreInfoType.toUpperCase(), {
      hass,
      stateObj
    });
  }

}

customElements.define("more-info-content", MoreInfoContent);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-cover.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-cover.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/cover-model */ "./src/util/cover-model.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");










const FEATURE_CLASS_NAMES = {
  128: "has-set_tilt_position"
};

class MoreInfoCover extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        .current_position,
        .tilt {
          max-height: 0px;
          overflow: hidden;
        }

        .has-current_position .current_position,
        .has-set_tilt_position .tilt,
        .has-current_tilt_position .tilt {
          max-height: 208px;
        }

        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <div class$="[[computeClassNames(stateObj)]]">
        <div class="current_position">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.position')]]"
            pin=""
            value="{{coverPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetPosition]]"
            on-change="coverPositionSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="tilt">
          <ha-labeled-slider
            caption="[[localize('ui.card.cover.tilt_position')]]"
            pin=""
            extra=""
            value="{{coverTiltPositionSliderValue}}"
            disabled="[[!entityObj.supportsSetTiltPosition]]"
            on-change="coverTiltPositionSliderChanged"
          >
            <ha-cover-tilt-controls
              slot="extra"
              hidden$="[[entityObj.isTiltOnly]]"
              hass="[[hass]]"
              state-obj="[[stateObj]]"
            ></ha-cover-tilt-controls>
          </ha-labeled-slider>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)"
      },
      coverPositionSliderValue: Number,
      coverTiltPositionSliderValue: Number
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
  }

  stateObjChanged(newVal) {
    if (newVal) {
      this.setProperties({
        coverPositionSliderValue: newVal.attributes.current_position,
        coverTiltPositionSliderValue: newVal.attributes.current_tilt_position
      });
    }
  }

  computeClassNames(stateObj) {
    var classes = [Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj, ["current_position", "current_tilt_position"]), Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj, FEATURE_CLASS_NAMES)];
    return classes.join(" ");
  }

  coverPositionSliderChanged(ev) {
    this.entityObj.setCoverPosition(ev.target.value);
  }

  coverTiltPositionSliderChanged(ev) {
    this.entityObj.setCoverTiltPosition(ev.target.value);
  }

}

customElements.define("more-info-cover", MoreInfoCover);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-default.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-default.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");




class MoreInfoDefault extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object
      }
    };
  }

}

customElements.define("more-info-default", MoreInfoDefault);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-fan.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-fan.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");












/*
 * @appliesMixin EventsMixin
 */

class MoreInfoFan extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex"></style>
      <style>
        .container-speed_list,
        .container-direction,
        .container-oscillating {
          display: none;
        }

        .has-speed_list .container-speed_list,
        .has-direction .container-direction,
        .has-oscillating .container-oscillating {
          display: block;
        }

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-speed_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.fan.speed')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.speed]]"
              on-selected-changed="speedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <div class="container-oscillating">
          <div class="center horizontal layout single-row">
            <div class="flex">[[localize('ui.card.fan.oscillate')]]</div>
            <paper-toggle-button
              checked="[[oscillationToggleChecked]]"
              on-change="oscillationToggleChanged"
            >
            </paper-toggle-button>
          </div>
        </div>

        <div class="container-direction">
          <div class="direction">
            <div>[[localize('ui.card.fan.direction')]]</div>
            <paper-icon-button
              icon="hass:rotate-left"
              on-click="onDirectionLeft"
              title="Left"
              disabled="[[computeIsRotatingLeft(stateObj)]]"
            ></paper-icon-button>
            <paper-icon-button
              icon="hass:rotate-right"
              on-click="onDirectionRight"
              title="Right"
              disabled="[[computeIsRotatingRight(stateObj)]]"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="speed,speed_list,oscillating,direction"
      ></ha-attributes>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      oscillationToggleChecked: {
        type: Boolean
      }
    };
  }

  stateObjChanged(newVal, oldVal) {
    if (newVal) {
      this.setProperties({
        oscillationToggleChecked: newVal.attributes.oscillating
      });
    }

    if (oldVal) {
      setTimeout(() => {
        this.fire("iron-resize");
      }, 500);
    }
  }

  computeClassNames(stateObj) {
    return "more-info-fan " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__["default"])(stateObj, ["oscillating", "speed_list", "direction"]);
  }

  speedChanged(ev) {
    var oldVal = this.stateObj.attributes.speed;
    var newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.hass.callService("fan", "turn_on", {
      entity_id: this.stateObj.entity_id,
      speed: newVal
    });
  }

  oscillationToggleChanged(ev) {
    var oldVal = this.stateObj.attributes.oscillating;
    var newVal = ev.target.checked;
    if (oldVal === newVal) return;
    this.hass.callService("fan", "oscillate", {
      entity_id: this.stateObj.entity_id,
      oscillating: newVal
    });
  }

  onDirectionLeft() {
    this.hass.callService("fan", "set_direction", {
      entity_id: this.stateObj.entity_id,
      direction: "reverse"
    });
  }

  onDirectionRight() {
    this.hass.callService("fan", "set_direction", {
      entity_id: this.stateObj.entity_id,
      direction: "forward"
    });
  }

  computeIsRotatingLeft(stateObj) {
    return stateObj.attributes.direction === "reverse";
  }

  computeIsRotatingRight(stateObj) {
    return stateObj.attributes.direction === "forward";
  }

}

customElements.define("more-info-fan", MoreInfoFan);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-group.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-group.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");







class MoreInfoGroup extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .child-card {
          margin-bottom: 8px;
        }

        .child-card:last-child {
          margin-bottom: 0;
        }
      </style>

      <div id="groupedControlDetails"></div>
      <template is="dom-repeat" items="[[states]]" as="state">
        <div class="child-card">
          <state-card-content
            state-obj="[[state]]"
            hass="[[hass]]"
          ></state-card-content>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object
      },
      states: {
        type: Array,
        computed: "computeStates(stateObj, hass)"
      }
    };
  }

  static get observers() {
    return ["statesChanged(stateObj, states)"];
  }

  computeStates(stateObj, hass) {
    var states = [];
    var entIds = stateObj.attributes.entity_id || [];

    for (var i = 0; i < entIds.length; i++) {
      var state = hass.states[entIds[i]];

      if (state) {
        states.push(state);
      }
    }

    return states;
  }

  statesChanged(stateObj, states) {
    let groupDomainStateObj = false;
    let groupDomain = false;

    if (states && states.length > 0) {
      const baseStateObj = states.find(s => s.state === "on") || states[0];
      groupDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["default"])(baseStateObj); // Groups need to be filtered out or we'll show content of
      // first child above the children of the current group

      if (groupDomain !== "group") {
        groupDomainStateObj = Object.assign({}, baseStateObj, {
          entity_id: stateObj.entity_id,
          attributes: Object.assign({}, baseStateObj.attributes)
        });

        for (let i = 0; i < states.length; i++) {
          if (groupDomain !== Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["default"])(states[i])) {
            groupDomainStateObj = false;
            break;
          }
        }
      }
    }

    if (!groupDomainStateObj) {
      const el = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this.$.groupedControlDetails);

      if (el.lastChild) {
        el.removeChild(el.lastChild);
      }
    } else {
      Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__["default"])(this.$.groupedControlDetails, "MORE-INFO-" + groupDomain.toUpperCase(), {
        stateObj: groupDomainStateObj,
        hass: this.hass
      });
    }
  }

}

customElements.define("more-info-group", MoreInfoGroup);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-history_graph.js":
/*!*******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-history_graph.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _cards_ha_history_graph_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/ha-history_graph-card */ "./src/cards/ha-history_graph-card.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");





class MoreInfoHistoryGraph extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: block;
          margin-bottom: 6px;
        }
      </style>
      <ha-history_graph-card
        hass="[[hass]]"
        state-obj="[[stateObj]]"
        in-dialog=""
      >
        <ha-attributes state-obj="[[stateObj]]"></ha-attributes>
      </ha-history_graph-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object
    };
  }

}

customElements.define("more-info-history_graph", MoreInfoHistoryGraph);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-input_datetime.js":
/*!********************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-input_datetime.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_paper_time_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/paper-time-input */ "./src/components/paper-time-input.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");









class DatetimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <div class$="[[computeClassNames(stateObj)]]">
        <template is="dom-if" if="[[doesHaveDate(stateObj)]]" restamp="">
          <div>
            <vaadin-date-picker
              id="dateInput"
              on-value-changed="dateTimeChanged"
              label="Date"
              value="{{selectedDate}}"
            ></vaadin-date-picker>
          </div>
        </template>
        <template is="dom-if" if="[[doesHaveTime(stateObj)]]" restamp="">
          <div>
            <paper-time-input
              hour="{{selectedHour}}"
              min="{{selectedMinute}}"
              format="24"
            ></paper-time-input>
          </div>
        </template>
      </div>
    `;
  }

  constructor() {
    super();
    this.is_ready = false;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      selectedDate: {
        type: String,
        observer: "dateTimeChanged"
      },
      selectedHour: {
        type: Number,
        observer: "dateTimeChanged"
      },
      selectedMinute: {
        type: Number,
        observer: "dateTimeChanged"
      }
    };
  }

  ready() {
    super.ready();
    this.is_ready = true;
  }
  /* Convert the date in the stateObj into a string useable by vaadin-date-picker */


  getDateString(stateObj) {
    if (stateObj.state === "unknown") {
      return "";
    }

    var monthFiller;

    if (stateObj.attributes.month < 10) {
      monthFiller = "0";
    } else {
      monthFiller = "";
    }

    var dayFiller;

    if (stateObj.attributes.day < 10) {
      dayFiller = "0";
    } else {
      dayFiller = "";
    }

    return stateObj.attributes.year + "-" + monthFiller + stateObj.attributes.month + "-" + dayFiller + stateObj.attributes.day;
  }
  /* Should fire when any value was changed *by the user*, not b/c of setting
   * initial values. */


  dateTimeChanged() {
    // Check if the change is really coming from the user
    if (!this.is_ready) {
      return;
    }

    let changed = false;
    let minuteFiller;
    const serviceData = {
      entity_id: this.stateObj.entity_id
    };

    if (this.stateObj.attributes.has_time) {
      changed |= parseInt(this.selectedMinute) !== this.stateObj.attributes.minute;
      changed |= parseInt(this.selectedHour) !== this.stateObj.attributes.hour;

      if (this.selectedMinute < 10) {
        minuteFiller = "0";
      } else {
        minuteFiller = "";
      }

      var timeStr = this.selectedHour + ":" + minuteFiller + this.selectedMinute;
      serviceData.time = timeStr;
    }

    if (this.stateObj.attributes.has_date) {
      if (this.selectedDate.length === 0) {
        return; // Date was not set
      }

      const dateValInput = new Date(this.selectedDate);
      const dateValState = new Date(this.stateObj.attributes.year, this.stateObj.attributes.month - 1, this.stateObj.attributes.day);
      changed |= dateValState !== dateValInput;
      serviceData.date = this.selectedDate;
    }

    if (changed) {
      this.hass.callService("input_datetime", "set_datetime", serviceData);
    }
  }

  stateObjChanged(newVal) {
    // Set to non-ready s.t. dateTimeChanged does not fire
    this.is_ready = false;

    if (newVal.attributes.has_time) {
      this.selectedHour = newVal.attributes.hour;
      this.selectedMinute = newVal.attributes.minute;
    }

    if (newVal.attributes.has_date) {
      this.selectedDate = this.getDateString(newVal);
    }

    this.is_ready = true;
  }

  doesHaveDate(stateObj) {
    return stateObj.attributes.has_date;
  }

  doesHaveTime(stateObj) {
    return stateObj.attributes.has_time;
  }

  computeClassNames(stateObj) {
    return "more-info-input_datetime " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj, ["has_time", "has_date"]);
  }

}

customElements.define("more-info-input_datetime", DatetimeInput);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-light.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-light.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-color-picker */ "./src/components/ha-color-picker.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");












const FEATURE_CLASS_NAMES = {
  1: "has-brightness",
  2: "has-color_temp",
  4: "has-effect_list",
  16: "has-color",
  128: "has-white_value"
};
/*
 * @appliesMixin EventsMixin
 */

class MoreInfoLight extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex"></style>
      <style>
        .effect_list,
        .brightness,
        .color_temp,
        .white_value {
          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .color_temp {
          --ha-slider-background: -webkit-linear-gradient(
            right,
            rgb(255, 160, 0) 0%,
            white 50%,
            rgb(166, 209, 255) 100%
          );
          /* The color temp minimum value shouldn't be rendered differently. It's not "off". */
          --paper-slider-knob-start-border-color: var(--primary-color);
        }

        .segmentationContainer {
          position: relative;
          width: 100%;
        }

        ha-color-picker {
          display: block;
          width: 100%;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          padding: 0px;
          max-height: 0px;
          width: 23px;
          height: 23px;
          opacity: var(--dark-secondary-opacity);
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-color.is-on .segmentationContainer .segmentationButton {
          position: absolute;
          top: 11%;
          transform: translate(0%, 0%);
          width: 23px;
          height: 23px;
          padding: 0px;
          opacity: var(--dark-secondary-opacity);
        }

        .has-effect_list.is-on .effect_list,
        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          max-height: 84px;
        }

        .has-brightness .has-color_temp.is-on,
        .has-white_value.is-on {
          margin-top: -16px;
        }

        .has-brightness .brightness,
        .has-color_temp.is-on .color_temp,
        .has-white_value.is-on .white_value {
          padding-top: 16px;
        }

        .has-color.is-on .segmentationButton {
          max-height: 100px;
          overflow: visible;
        }

        .has-color.is-on ha-color-picker {
          max-height: 500px;
          overflow: visible;
          --ha-color-picker-wheel-borderwidth: 5;
          --ha-color-picker-wheel-bordercolor: white;
          --ha-color-picker-wheel-shadow: none;
          --ha-color-picker-marker-borderwidth: 2;
          --ha-color-picker-marker-bordercolor: white;
        }

        .is-unavailable .control {
          max-height: 0px;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="control brightness">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.brightness')]]"
            icon="hass:brightness-5"
            min="1"
            max="255"
            value="{{brightnessSliderValue}}"
            on-change="brightnessSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control color_temp">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.color_temperature')]]"
            icon="hass:thermometer"
            min="[[stateObj.attributes.min_mireds]]"
            max="[[stateObj.attributes.max_mireds]]"
            value="{{ctSliderValue}}"
            on-change="ctSliderChanged"
          ></ha-labeled-slider>
        </div>

        <div class="control white_value">
          <ha-labeled-slider
            caption="[[localize('ui.card.light.white_value')]]"
            icon="hass:file-word-box"
            max="255"
            value="{{wvSliderValue}}"
            on-change="wvSliderChanged"
          ></ha-labeled-slider>
        </div>
        <div class="segmentationContainer">
          <ha-color-picker
            class="control color"
            on-colorselected="colorPicked"
            desired-hs-color="{{colorPickerColor}}"
            throttle="500"
            hue-segments="{{hueSegments}}"
            saturation-segments="{{saturationSegments}}"
          >
          </ha-color-picker>
          <paper-icon-button
            icon="mdi:palette"
            on-click="segmentClick"
            class="control segmentationButton"
          ></paper-icon-button>
        </div>

        <div class="control effect_list">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="[[localize('ui.card.light.effect')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.effect]]"
              on-selected-changed="effectChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.effect_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>

        <ha-attributes
          state-obj="[[stateObj]]"
          extra-filters="brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds"
        ></ha-attributes>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      brightnessSliderValue: {
        type: Number,
        value: 0
      },
      ctSliderValue: {
        type: Number,
        value: 0
      },
      wvSliderValue: {
        type: Number,
        value: 0
      },
      hueSegments: {
        type: Number,
        value: 24
      },
      saturationSegments: {
        type: Number,
        value: 8
      },
      colorPickerColor: {
        type: Object
      }
    };
  }

  stateObjChanged(newVal, oldVal) {
    const props = {
      brightnessSliderValue: 0
    };

    if (newVal && newVal.state === "on") {
      props.brightnessSliderValue = newVal.attributes.brightness;
      props.ctSliderValue = newVal.attributes.color_temp;
      props.wvSliderValue = newVal.attributes.white_value;

      if (newVal.attributes.hs_color) {
        props.colorPickerColor = {
          h: newVal.attributes.hs_color[0],
          s: newVal.attributes.hs_color[1] / 100
        };
      }
    }

    this.setProperties(props);

    if (oldVal) {
      setTimeout(() => {
        this.fire("iron-resize");
      }, 500);
    }
  }

  computeClassNames(stateObj) {
    const classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__["default"])(stateObj, FEATURE_CLASS_NAMES)];

    if (stateObj && stateObj.state === "on") {
      classes.push("is-on");
    }

    if (stateObj && stateObj.state === "unavailable") {
      classes.push("is-unavailable");
    }

    return classes.join(" ");
  }

  effectChanged(ev) {
    var oldVal = this.stateObj.attributes.effect;
    var newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      effect: newVal
    });
  }

  brightnessSliderChanged(ev) {
    var bri = parseInt(ev.target.value, 10);
    if (isNaN(bri)) return;
    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      brightness: bri
    });
  }

  ctSliderChanged(ev) {
    var ct = parseInt(ev.target.value, 10);
    if (isNaN(ct)) return;
    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      color_temp: ct
    });
  }

  wvSliderChanged(ev) {
    var wv = parseInt(ev.target.value, 10);
    if (isNaN(wv)) return;
    this.hass.callService("light", "turn_on", {
      entity_id: this.stateObj.entity_id,
      white_value: wv
    });
  }

  segmentClick() {
    if (this.hueSegments === 24 && this.saturationSegments === 8) {
      this.setProperties({
        hueSegments: 0,
        saturationSegments: 0
      });
    } else {
      this.setProperties({
        hueSegments: 24,
        saturationSegments: 8
      });
    }
  }

  serviceChangeColor(hass, entityId, color) {
    hass.callService("light", "turn_on", {
      entity_id: entityId,
      hs_color: [color.h, color.s * 100]
    });
  }
  /**
   * Called when a new color has been picked.
   * should be throttled with the 'throttle=' attribute of the color picker
   */


  colorPicked(ev) {
    this.serviceChangeColor(this.hass, this.stateObj.entity_id, ev.detail.hs);
  }

}

customElements.define("more-info-light", MoreInfoLight);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-lock.js":
/*!**********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-lock.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






/*
 * @appliesMixin LocalizeMixin
 */

class MoreInfoLock extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        paper-input {
          display: inline-block;
        }
      </style>

      <template is="dom-if" if="[[stateObj.attributes.code_format]]">
        <paper-input
          label="[[localize('ui.card.lock.code')]]"
          value="{{enteredCode}}"
          pattern="[[stateObj.attributes.code_format]]"
          type="password"
        ></paper-input>
        <mwc-button
          on-click="callService"
          data-service="unlock"
          hidden$="[[!isLocked]]"
          >[[localize('ui.card.lock.unlock')]]</mwc-button
        >
        <mwc-button
          on-click="callService"
          data-service="lock"
          hidden$="[[isLocked]]"
          >[[localize('ui.card.lock.lock')]]</mwc-button
        >
      </template>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="code_format"
      ></ha-attributes>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      enteredCode: {
        type: String,
        value: ""
      },
      isLocked: Boolean
    };
  }

  stateObjChanged(newVal) {
    if (newVal) {
      this.isLocked = newVal.state === "locked";
    }
  }

  callService(ev) {
    const service = ev.target.getAttribute("data-service");
    const data = {
      entity_id: this.stateObj.entity_id,
      code: this.enteredCode
    };
    this.hass.callService("lock", service, data);
  }

}

customElements.define("more-info-lock", MoreInfoLock);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-media_player.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-media_player.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");















/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class MoreInfoMediaPlayer extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        .media-state {
          text-transform: capitalize;
        }

        paper-icon-button[highlight] {
          color: var(--accent-color);
        }

        .volume {
          margin-bottom: 8px;

          max-height: 0px;
          overflow: hidden;
          transition: max-height 0.5s ease-in;
        }

        .has-volume_level .volume {
          max-height: 40px;
        }

        iron-icon.source-input {
          padding: 7px;
          margin-top: 15px;
        }

        ha-paper-dropdown-menu.source-input {
          margin-left: 10px;
        }

        [hidden] {
          display: none !important;
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="layout horizontal">
          <div class="flex">
            <paper-icon-button
              icon="hass:power"
              highlight$="[[playerObj.isOff]]"
              on-click="handleTogglePower"
              hidden$="[[computeHidePowerButton(playerObj)]]"
            ></paper-icon-button>
          </div>
          <div>
            <template
              is="dom-if"
              if="[[computeShowPlaybackControls(playerObj)]]"
            >
              <paper-icon-button
                icon="hass:skip-previous"
                on-click="handlePrevious"
                hidden$="[[!playerObj.supportsPreviousTrack]]"
              ></paper-icon-button>
              <paper-icon-button
                icon="[[computePlaybackControlIcon(playerObj)]]"
                on-click="handlePlaybackControl"
                hidden$="[[!computePlaybackControlIcon(playerObj)]]"
                highlight=""
              ></paper-icon-button>
              <paper-icon-button
                icon="hass:skip-next"
                on-click="handleNext"
                hidden$="[[!playerObj.supportsNextTrack]]"
              ></paper-icon-button>
            </template>
          </div>
        </div>
        <!-- VOLUME -->
        <div
          class="volume_buttons center horizontal layout"
          hidden$="[[computeHideVolumeButtons(playerObj)]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            icon="hass:volume-off"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeDown"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeDown"
            on-touchstart="handleVolumeDown"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-medium"
          ></paper-icon-button>
          <paper-icon-button
            id="volumeUp"
            disabled$="[[playerObj.isMuted]]"
            on-mousedown="handleVolumeUp"
            on-touchstart="handleVolumeUp"
            on-touchend="handleVolumeTouchEnd"
            icon="hass:volume-high"
          ></paper-icon-button>
        </div>
        <div
          class="volume center horizontal layout"
          hidden$="[[!playerObj.supportsVolumeSet]]"
        >
          <paper-icon-button
            on-click="handleVolumeTap"
            hidden$="[[playerObj.supportsVolumeButtons]]"
            icon="[[computeMuteVolumeIcon(playerObj)]]"
          ></paper-icon-button>
          <ha-paper-slider
            disabled$="[[playerObj.isMuted]]"
            min="0"
            max="100"
            value="[[playerObj.volumeSliderValue]]"
            on-change="volumeSliderChanged"
            class="flex"
            ignore-bar-touch=""
            dir="{{rtl}}"
          >
          </ha-paper-slider>
        </div>
        <!-- SOURCE PICKER -->
        <div
          class="controls layout horizontal justified"
          hidden$="[[computeHideSelectSource(playerObj)]]"
        >
          <iron-icon class="source-input" icon="hass:login-variant"></iron-icon>
          <ha-paper-dropdown-menu
            class="flex source-input"
            dynamic-align=""
            label-float=""
            label="[[localize('ui.card.media_player.source')]]"
          >
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="[[playerObj.source]]"
              on-selected-changed="handleSourceChanged"
            >
              <template is="dom-repeat" items="[[playerObj.sourceList]]">
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
        </div>
        <!-- SOUND MODE PICKER -->
        <template is="dom-if" if="[[!computeHideSelectSoundMode(playerObj)]]">
          <div class="controls layout horizontal justified">
            <iron-icon class="source-input" icon="hass:music-note"></iron-icon>
            <ha-paper-dropdown-menu
              class="flex source-input"
              dynamic-align
              label-float
              label="[[localize('ui.card.media_player.sound_mode')]]"
            >
              <paper-listbox
                slot="dropdown-content"
                attr-for-selected="item-name"
                selected="[[playerObj.soundMode]]"
                on-selected-changed="handleSoundModeChanged"
              >
                <template is="dom-repeat" items="[[playerObj.soundModeList]]">
                  <paper-item item-name$="[[item]]">[[item]]</paper-item>
                </template>
              </paper-listbox>
            </ha-paper-dropdown-menu>
          </div>
        </template>
        <!-- TTS -->
        <div
          hidden$="[[computeHideTTS(ttsLoaded, playerObj)]]"
          class="layout horizontal end"
        >
          <paper-input
            id="ttsInput"
            label="[[localize('ui.card.media_player.text_to_speak')]]"
            class="flex"
            value="{{ttsMessage}}"
            on-keydown="ttsCheckForEnter"
          ></paper-input>
          <paper-icon-button
            icon="hass:send"
            on-click="sendTTS"
          ></paper-icon-button>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      playerObj: {
        type: Object,
        computed: "computePlayerObj(hass, stateObj)",
        observer: "playerObjChanged"
      },
      ttsLoaded: {
        type: Boolean,
        computed: "computeTTSLoaded(hass)"
      },
      ttsMessage: {
        type: String,
        value: ""
      },
      rtl: {
        type: String,
        computed: "_computeRTLDirection(hass)"
      }
    };
  }

  computePlayerObj(hass, stateObj) {
    return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__["default"](hass, stateObj);
  }

  playerObjChanged(newVal, oldVal) {
    if (oldVal) {
      setTimeout(() => {
        this.fire("iron-resize");
      }, 500);
    }
  }

  computeClassNames(stateObj) {
    return Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["default"])(stateObj, ["volume_level"]);
  }

  computeMuteVolumeIcon(playerObj) {
    return playerObj.isMuted ? "hass:volume-off" : "hass:volume-high";
  }

  computeHideVolumeButtons(playerObj) {
    return !playerObj.supportsVolumeButtons || playerObj.isOff;
  }

  computeShowPlaybackControls(playerObj) {
    return !playerObj.isOff && playerObj.hasMediaControl;
  }

  computePlaybackControlIcon(playerObj) {
    if (playerObj.isPlaying) {
      return playerObj.supportsPause ? "hass:pause" : "hass:stop";
    }

    if (playerObj.hasMediaControl || playerObj.isOff || playerObj.isIdle) {
      if (playerObj.hasMediaControl && playerObj.supportsPause && !playerObj.isPaused) {
        return "hass:play-pause";
      }

      return playerObj.supportsPlay ? "hass:play" : null;
    }

    return "";
  }

  computeHidePowerButton(playerObj) {
    return playerObj.isOff ? !playerObj.supportsTurnOn : !playerObj.supportsTurnOff;
  }

  computeHideSelectSource(playerObj) {
    return playerObj.isOff || !playerObj.supportsSelectSource || !playerObj.sourceList;
  }

  computeHideSelectSoundMode(playerObj) {
    return playerObj.isOff || !playerObj.supportsSelectSoundMode || !playerObj.soundModeList;
  }

  computeHideTTS(ttsLoaded, playerObj) {
    return !ttsLoaded || !playerObj.supportsPlayMedia;
  }

  computeTTSLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__["default"])(hass, "tts");
  }

  handleTogglePower() {
    this.playerObj.togglePower();
  }

  handlePrevious() {
    this.playerObj.previousTrack();
  }

  handlePlaybackControl() {
    this.playerObj.mediaPlayPause();
  }

  handleNext() {
    this.playerObj.nextTrack();
  }

  handleSourceChanged(ev) {
    if (!this.playerObj) return;
    var oldVal = this.playerObj.source;
    var newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.playerObj.selectSource(newVal);
  }

  handleSoundModeChanged(ev) {
    if (!this.playerObj) return;
    var oldVal = this.playerObj.soundMode;
    var newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.playerObj.selectSoundMode(newVal);
  }

  handleVolumeTap() {
    if (!this.playerObj.supportsVolumeMute) {
      return;
    }

    this.playerObj.volumeMute(!this.playerObj.isMuted);
  }

  handleVolumeTouchEnd(ev) {
    /* when touch ends, we must prevent this from
     * becoming a mousedown, up, click by emulation */
    ev.preventDefault();
  }

  handleVolumeUp() {
    const obj = this.$.volumeUp;
    this.handleVolumeWorker("volume_up", obj, true);
  }

  handleVolumeDown() {
    const obj = this.$.volumeDown;
    this.handleVolumeWorker("volume_down", obj, true);
  }

  handleVolumeWorker(service, obj, force) {
    if (force || obj !== undefined && obj.pointerDown) {
      this.playerObj.callService(service);
      setTimeout(() => this.handleVolumeWorker(service, obj, false), 500);
    }
  }

  volumeSliderChanged(ev) {
    const volPercentage = parseFloat(ev.target.value);
    const volume = volPercentage > 0 ? volPercentage / 100 : 0;
    this.playerObj.setVolume(volume);
  }

  ttsCheckForEnter(ev) {
    if (ev.keyCode === 13) this.sendTTS();
  }

  sendTTS() {
    const services = this.hass.services.tts;
    const serviceKeys = Object.keys(services).sort();
    let service;
    let i;

    for (i = 0; i < serviceKeys.length; i++) {
      if (serviceKeys[i].indexOf("_say") !== -1) {
        service = serviceKeys[i];
        break;
      }
    }

    if (!service) {
      return;
    }

    this.hass.callService("tts", service, {
      entity_id: this.stateObj.entity_id,
      message: this.ttsMessage
    });
    this.ttsMessage = "";
    this.$.ttsInput.focus();
  }

  _computeRTLDirection(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTLDirection"])(hass);
  }

}

customElements.define("more-info-media_player", MoreInfoMediaPlayer);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-script.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-script.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");





class MoreInfoScript extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>

      <div class="layout vertical">
        <div class="data-entry layout justified horizontal">
          <div class="key">
            [[localize('ui.dialogs.more_info_control.script.last_action')]]
          </div>
          <div class="value">[[stateObj.attributes.last_action]]</div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object
      }
    };
  }

}

customElements.define("more-info-script", MoreInfoScript);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-sun.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-sun.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");







class MoreInfoSun extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>

      <template
        is="dom-repeat"
        items="[[computeOrder(risingDate, settingDate)]]"
      >
        <div class="data-entry layout justified horizontal">
          <div class="key">
            <span>[[itemCaption(item)]]</span>
            <ha-relative-time
              hass="[[hass]]"
              datetime-obj="[[itemDate(item)]]"
            ></ha-relative-time>
          </div>
          <div class="value">[[itemValue(item)]]</div>
        </div>
      </template>
      <div class="data-entry layout justified horizontal">
        <div class="key">
          [[localize('ui.dialogs.more_info_control.sun.elevation')]]
        </div>
        <div class="value">[[stateObj.attributes.elevation]]</div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      risingDate: {
        type: Object,
        computed: "computeRising(stateObj)"
      },
      settingDate: {
        type: Object,
        computed: "computeSetting(stateObj)"
      }
    };
  }

  computeRising(stateObj) {
    return new Date(stateObj.attributes.next_rising);
  }

  computeSetting(stateObj) {
    return new Date(stateObj.attributes.next_setting);
  }

  computeOrder(risingDate, settingDate) {
    return risingDate > settingDate ? ["set", "ris"] : ["ris", "set"];
  }

  itemCaption(type) {
    if (type === "ris") {
      return this.localize("ui.dialogs.more_info_control.sun.rising");
    }

    return this.localize("ui.dialogs.more_info_control.sun.setting");
  }

  itemDate(type) {
    return type === "ris" ? this.risingDate : this.settingDate;
  }

  itemValue(type) {
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__["default"])(this.itemDate(type), this.hass.language);
  }

}

customElements.define("more-info-sun", MoreInfoSun);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-updater.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-updater.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




class MoreInfoUpdater extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .link {
          color: #03a9f4;
        }
      </style>

      <div>
        <a
          class="link"
          href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/docs/installation/updating/"
          target="_blank"
          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a
        >
      </div>
    `;
  }

  static get properties() {
    return {
      stateObj: {
        type: Object
      }
    };
  }

  computeReleaseNotes(stateObj) {
    return stateObj.attributes.release_notes || "https://www.home-assistant.io/docs/installation/updating/";
  }

}

customElements.define("more-info-updater", MoreInfoUpdater);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-vacuum.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-vacuum.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");











class MoreInfoVacuum extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style include="iron-flex iron-flex-alignment"></style>
      <style>
        :host {
          @apply --paper-font-body1;
          line-height: 1.5;
        }

        .status-subtitle {
          color: var(--secondary-text-color);
        }

        paper-item {
          cursor: pointer;
        }
      </style>

      <div class="horizontal justified layout">
        <div hidden$="[[!supportsStatus(stateObj)]]">
          <span class="status-subtitle">Status: </span
          ><span><strong>[[stateObj.attributes.status]]</strong></span>
        </div>
        <div hidden$="[[!supportsBattery(stateObj)]]">
          <span
            ><iron-icon icon="[[stateObj.attributes.battery_icon]]"></iron-icon>
            [[stateObj.attributes.battery_level]] %</span
          >
        </div>
      </div>
      <div hidden$="[[!supportsCommandBar(stateObj)]]">
        <p></p>
        <div class="status-subtitle">Vacuum cleaner commands:</div>
        <div class="horizontal justified layout">
          <template is="dom-if" if="[[supportsStart(stateObj)]]">
            <div>
              <paper-icon-button
                icon="hass:play"
                on-click="onStart"
                title="Start"
              ></paper-icon-button>
            </div>
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:pause"
                on-click="onPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>
          <template is="dom-if" if="[[!supportsStart(stateObj)]]">
            <div hidden$="[[!supportsPause(stateObj)]]">
              <paper-icon-button
                icon="hass:play-pause"
                on-click="onPlayPause"
                title="Pause"
              ></paper-icon-button>
            </div>
          </template>

          <div hidden$="[[!supportsStop(stateObj)]]">
            <paper-icon-button
              icon="hass:stop"
              on-click="onStop"
              title="Stop"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsCleanSpot(stateObj)]]">
            <paper-icon-button
              icon="hass:broom"
              on-click="onCleanSpot"
              title="Clean spot"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsLocate(stateObj)]]">
            <paper-icon-button
              icon="hass:map-marker"
              on-click="onLocate"
              title="Locate"
            ></paper-icon-button>
          </div>
          <div hidden$="[[!supportsReturnHome(stateObj)]]">
            <paper-icon-button
              icon="hass:home-map-marker"
              on-click="onReturnHome"
              title="Return home"
            ></paper-icon-button>
          </div>
        </div>
      </div>

      <div hidden$="[[!supportsFanSpeed(stateObj)]]">
        <div class="horizontal justified layout">
          <ha-paper-dropdown-menu
            label-float=""
            dynamic-align=""
            label="Fan speed"
          >
            <paper-listbox
              slot="dropdown-content"
              selected="[[stateObj.attributes.fan_speed]]"
              on-selected-changed="fanSpeedChanged"
              attr-for-selected="item-name"
            >
              <template
                is="dom-repeat"
                items="[[stateObj.attributes.fan_speed_list]]"
              >
                <paper-item item-name$="[[item]]">[[item]]</paper-item>
              </template>
            </paper-listbox>
          </ha-paper-dropdown-menu>
          <div
            style="justify-content: center; align-self: center; padding-top: 1.3em"
          >
            <span
              ><iron-icon icon="hass:fan"></iron-icon>
              [[stateObj.attributes.fan_speed]]</span
            >
          </div>
        </div>
        <p></p>
      </div>
      <ha-attributes
        state-obj="[[stateObj]]"
        extra-filters="fan_speed,fan_speed_list,status,battery_level,battery_icon"
      ></ha-attributes>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      inDialog: {
        type: Boolean,
        value: false
      },
      stateObj: {
        type: Object
      }
    };
  }

  supportsPause(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4);
  }

  supportsStop(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8);
  }

  supportsReturnHome(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16);
  }

  supportsFanSpeed(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 32);
  }

  supportsBattery(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 64);
  }

  supportsStatus(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 128);
  }

  supportsLocate(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512);
  }

  supportsCleanSpot(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024);
  }

  supportsStart(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
  }

  supportsCommandBar(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
  }

  fanSpeedChanged(ev) {
    var oldVal = this.stateObj.attributes.fan_speed;
    var newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.hass.callService("vacuum", "set_fan_speed", {
      entity_id: this.stateObj.entity_id,
      fan_speed: newVal
    });
  }

  onStop() {
    this.hass.callService("vacuum", "stop", {
      entity_id: this.stateObj.entity_id
    });
  }

  onPlayPause() {
    this.hass.callService("vacuum", "start_pause", {
      entity_id: this.stateObj.entity_id
    });
  }

  onPause() {
    this.hass.callService("vacuum", "pause", {
      entity_id: this.stateObj.entity_id
    });
  }

  onStart() {
    this.hass.callService("vacuum", "start", {
      entity_id: this.stateObj.entity_id
    });
  }

  onLocate() {
    this.hass.callService("vacuum", "locate", {
      entity_id: this.stateObj.entity_id
    });
  }

  onCleanSpot() {
    this.hass.callService("vacuum", "clean_spot", {
      entity_id: this.stateObj.entity_id
    });
  }

  onReturnHome() {
    this.hass.callService("vacuum", "return_to_base", {
      entity_id: this.stateObj.entity_id
    });
  }

}

customElements.define("more-info-vacuum", MoreInfoVacuum);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-water_heater.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-water_heater.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_water_heater_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-water_heater-control */ "./src/components/ha-water_heater-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class MoreInfoWaterHeater extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          color: var(--primary-text-color);
        }

        .container-away_mode,
        .container-temperature,
        .container-operation_list,

        .has-away_mode .container-away_mode,
        .has-target_temperature .container-temperature,
        .has-operation_mode .container-operation_list,

        .container-operation_list iron-icon,

        ha-paper-dropdown-menu {
          width: 100%;
        }

        paper-item {
          cursor: pointer;
        }

        ha-paper-slider {
          width: 100%;
        }

        ha-water_heater-control.range-control-left,
        ha-water_heater-control.range-control-right {
          float: left;
          width: 46%;
        }
        ha-water_heater-control.range-control-left {
          margin-right: 4%;
        }
        ha-water_heater-control.range-control-right {
          margin-left: 4%;
        }

        .single-row {
          padding: 8px 0;
        }
        }
      </style>

      <div class$="[[computeClassNames(stateObj)]]">
        <div class="container-temperature">
          <div class$="[[stateObj.attributes.operation_mode]]">
            <div hidden$="[[!supportsTemperatureControls(stateObj)]]">
              [[localize('ui.card.water_heater.target_temperature')]]
            </div>
            <template is="dom-if" if="[[supportsTemperature(stateObj)]]">
              <ha-water_heater-control
                value="[[stateObj.attributes.temperature]]"
                units="[[hass.config.unit_system.temperature]]"
                step="[[computeTemperatureStepSize(hass, stateObj)]]"
                min="[[stateObj.attributes.min_temp]]"
                max="[[stateObj.attributes.max_temp]]"
                on-change="targetTemperatureChanged"
              >
              </ha-water_heater-control>
            </template>
          </div>
        </div>

        <template is="dom-if" if="[[supportsOperationMode(stateObj)]]">
          <div class="container-operation_list">
            <div class="controls">
              <ha-paper-dropdown-menu
                label-float=""
                dynamic-align=""
                label="[[localize('ui.card.water_heater.operation')]]"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="[[stateObj.attributes.operation_mode]]"
                  attr-for-selected="item-name"
                  on-selected-changed="handleOperationmodeChanged"
                >
                  <template
                    is="dom-repeat"
                    items="[[stateObj.attributes.operation_list]]"
                  >
                    <paper-item item-name$="[[item]]"
                      >[[_localizeOperationMode(localize, item)]]</paper-item
                    >
                  </template>
                </paper-listbox>
              </ha-paper-dropdown-menu>
            </div>
          </div>
        </template>

        <template is="dom-if" if="[[supportsAwayMode(stateObj)]]">
          <div class="container-away_mode">
            <div class="center horizontal layout single-row">
              <div class="flex">
                [[localize('ui.card.water_heater.away_mode')]]
              </div>
              <paper-toggle-button
                checked="[[awayToggleChecked]]"
                on-change="awayToggleChanged"
              >
              </paper-toggle-button>
            </div>
          </div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object,
        observer: "stateObjChanged"
      },
      awayToggleChecked: Boolean
    };
  }

  stateObjChanged(newVal, oldVal) {
    if (newVal) {
      this.setProperties({
        awayToggleChecked: newVal.attributes.away_mode === "on"
      });
    }

    if (oldVal) {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(500), () => {
        this.fire("iron-resize");
      });
    }
  }

  computeTemperatureStepSize(hass, stateObj) {
    if (stateObj.attributes.target_temp_step) {
      return stateObj.attributes.target_temp_step;
    }

    if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
      return 1;
    }

    return 0.5;
  }

  supportsTemperatureControls(stateObj) {
    return this.supportsTemperature(stateObj);
  }

  supportsTemperature(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__["supportsFeature"])(stateObj, 1) && typeof stateObj.attributes.temperature === "number";
  }

  supportsOperationMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__["supportsFeature"])(stateObj, 2);
  }

  supportsAwayMode(stateObj) {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__["supportsFeature"])(stateObj, 4);
  }

  computeClassNames(stateObj) {
    const _featureClassNames = {
      1: "has-target_temperature",
      2: "has-operation_mode",
      4: "has-away_mode"
    };
    var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj, _featureClassNames)];
    classes.push("more-info-water_heater");
    return classes.join(" ");
  }

  targetTemperatureChanged(ev) {
    const temperature = ev.target.value;
    if (temperature === this.stateObj.attributes.temperature) return;
    this.callServiceHelper("set_temperature", {
      temperature: temperature
    });
  }

  awayToggleChanged(ev) {
    const oldVal = this.stateObj.attributes.away_mode === "on";
    const newVal = ev.target.checked;
    if (oldVal === newVal) return;
    this.callServiceHelper("set_away_mode", {
      away_mode: newVal
    });
  }

  handleOperationmodeChanged(ev) {
    const oldVal = this.stateObj.attributes.operation_mode;
    const newVal = ev.detail.value;
    if (!newVal || oldVal === newVal) return;
    this.callServiceHelper("set_operation_mode", {
      operation_mode: newVal
    });
  }

  callServiceHelper(service, data) {
    // We call stateChanged after a successful call to re-sync the inputs
    // with the state. It will be out of sync if our service call did not
    // result in the entity to be turned on. Since the state is not changing,
    // the resync is not called automatic.

    /* eslint-disable no-param-reassign */
    data.entity_id = this.stateObj.entity_id;
    /* eslint-enable no-param-reassign */

    this.hass.callService("water_heater", service, data).then(() => {
      this.stateObjChanged(this.stateObj);
    });
  }

  _localizeOperationMode(localize, mode) {
    return localize(`state.water_heater.${mode}`) || mode;
  }

}

customElements.define("more-info-water_heater", MoreInfoWaterHeater);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-weather.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-weather.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




/*
 * @appliesMixin LocalizeMixin
 */

class MoreInfoWeather extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        iron-icon {
          color: var(--paper-item-icon-color);
        }
        .section {
          margin: 16px 0 8px 0;
          font-size: 1.2em;
        }

        .flex {
          display: flex;
          height: 32px;
          align-items: center;
        }

        .main {
          flex: 1;
          margin-left: 24px;
        }

        .temp,
        .templow {
          min-width: 48px;
          text-align: right;
        }

        .templow {
          margin: 0 16px;
          color: var(--secondary-text-color);
        }

        .attribution {
          color: var(--secondary-text-color);
          text-align: center;
        }
      </style>

      <div class="flex">
        <iron-icon icon="hass:thermometer"></iron-icon>
        <div class="main">
          [[localize('ui.card.weather.attributes.temperature')]]
        </div>
        <div>
          [[stateObj.attributes.temperature]] [[getUnit('temperature')]]
        </div>
      </div>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.pressure)]]">
        <div class="flex">
          <iron-icon icon="hass:gauge"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.air_pressure')]]
          </div>
          <div>
            [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.humidity)]]">
        <div class="flex">
          <iron-icon icon="hass:water-percent"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.humidity')]]
          </div>
          <div>[[stateObj.attributes.humidity]] %</div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.wind_speed)]]">
        <div class="flex">
          <iron-icon icon="hass:weather-windy"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.wind_speed')]]
          </div>
          <div>
            [[getWind(stateObj.attributes.wind_speed,
            stateObj.attributes.wind_bearing, localize)]]
          </div>
        </div>
      </template>
      <template is="dom-if" if="[[_showValue(stateObj.attributes.visibility)]]">
        <div class="flex">
          <iron-icon icon="hass:eye"></iron-icon>
          <div class="main">
            [[localize('ui.card.weather.attributes.visibility')]]
          </div>
          <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>
        </div>
      </template>

      <template is="dom-if" if="[[stateObj.attributes.forecast]]">
        <div class="section">[[localize('ui.card.weather.forecast')]]:</div>
        <template is="dom-repeat" items="[[stateObj.attributes.forecast]]">
          <div class="flex">
            <template is="dom-if" if="[[_showValue(item.condition)]]">
              <iron-icon icon="[[getWeatherIcon(item.condition)]]"></iron-icon>
            </template>
            <template is="dom-if" if="[[!_showValue(item.templow)]]">
              <div class="main">[[computeDateTime(item.datetime)]]</div>
            </template>
            <template is="dom-if" if="[[_showValue(item.templow)]]">
              <div class="main">[[computeDate(item.datetime)]]</div>
              <div class="templow">
                [[item.templow]] [[getUnit('temperature')]]
              </div>
            </template>
            <div class="temp">
              [[item.temperature]] [[getUnit('temperature')]]
            </div>
          </div>
        </template>
      </template>

      <template is="dom-if" if="stateObj.attributes.attribution">
        <div class="attribution">[[stateObj.attributes.attribution]]</div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object
    };
  }

  constructor() {
    super();
    this.cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    this.weatherIcons = {
      "clear-night": "hass:weather-night",
      cloudy: "hass:weather-cloudy",
      fog: "hass:weather-fog",
      hail: "hass:weather-hail",
      lightning: "hass:weather-lightning",
      "lightning-rainy": "hass:weather-lightning-rainy",
      partlycloudy: "hass:weather-partlycloudy",
      pouring: "hass:weather-pouring",
      rainy: "hass:weather-rainy",
      snowy: "hass:weather-snowy",
      "snowy-rainy": "hass:weather-snowy-rainy",
      sunny: "hass:weather-sunny",
      windy: "hass:weather-windy",
      "windy-variant": "hass:weather-windy-variant"
    };
  }

  computeDate(data) {
    const date = new Date(data);
    return date.toLocaleDateString(this.hass.language, {
      weekday: "long",
      month: "short",
      day: "numeric"
    });
  }

  computeDateTime(data) {
    const date = new Date(data);
    return date.toLocaleDateString(this.hass.language, {
      weekday: "long",
      hour: "numeric"
    });
  }

  getUnit(measure) {
    const lengthUnit = this.hass.config.unit_system.length || "";

    switch (measure) {
      case "air_pressure":
        return lengthUnit === "km" ? "hPa" : "inHg";

      case "length":
        return lengthUnit;

      case "precipitation":
        return lengthUnit === "km" ? "mm" : "in";

      default:
        return this.hass.config.unit_system[measure] || "";
    }
  }

  windBearingToText(degree) {
    const degreenum = parseInt(degree);

    if (isFinite(degreenum)) {
      return this.cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
    }

    return degree;
  }

  getWind(speed, bearing, localize) {
    if (bearing != null) {
      const cardinalDirection = this.windBearingToText(bearing);
      return `${speed} ${this.getUnit("length")}/h (${localize(`ui.card.weather.cardinal_direction.${cardinalDirection.toLowerCase()}`) || cardinalDirection})`;
    }

    return `${speed} ${this.getUnit("length")}/h`;
  }

  getWeatherIcon(condition) {
    return this.weatherIcons[condition];
  }

  _showValue(item) {
    return typeof item !== "undefined" && item !== null;
  }

}

customElements.define("more-info-weather", MoreInfoWeather);

/***/ }),

/***/ "./src/dialogs/more-info/more-info-controls.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-controls.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _controls_more_info_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/more-info-content */ "./src/dialogs/more-info/controls/more-info-content.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
















const DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
/*
 * @appliesMixin EventsMixin
 */

class MoreInfoControls extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style-dialog">
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        state-card-content {
          display: block;
          padding: 16px;
        }

        state-history-charts {
          max-width: 100%;
          margin-bottom: 16px;
        }

        @media all and (min-width: 451px) and (min-height: 501px) {
          .main-title {
            pointer-events: auto;
            cursor: default;
          }
        }

        paper-dialog-scrollable {
          padding-bottom: 16px;
        }

        :host([domain="camera"]) paper-dialog-scrollable {
          margin: 0 -24px -21px;
        }

        :host([rtl]) app-toolbar {
          direction: rtl;
          text-align: right;
        }
      </style>

      <app-toolbar>
        <paper-icon-button
          icon="hass:close"
          dialog-dismiss=""
        ></paper-icon-button>
        <div class="main-title" main-title="" on-click="enlarge">
          [[_computeStateName(stateObj)]]
        </div>
        <template is="dom-if" if="[[canConfigure]]">
          <paper-icon-button
            icon="hass:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </template>
      </app-toolbar>

      <template is="dom-if" if="[[_computeShowStateInfo(stateObj)]]" restamp="">
        <state-card-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
          in-dialog=""
        ></state-card-content>
      </template>
      <paper-dialog-scrollable dialog-element="[[dialogElement]]">
        <template
          is="dom-if"
          if="[[_computeShowHistoryComponent(hass, stateObj)]]"
          restamp=""
        >
          <ha-state-history-data
            hass="[[hass]]"
            filter-type="recent-entity"
            entity-id="[[stateObj.entity_id]]"
            data="{{_stateHistory}}"
            is-loading="{{_stateHistoryLoading}}"
            cache-config="[[_cacheConfig]]"
          ></ha-state-history-data>
          <state-history-charts
            hass="[[hass]]"
            history-data="[[_stateHistory]]"
            is-loading-data="[[_stateHistoryLoading]]"
            up-to-now
          ></state-history-charts>
        </template>
        <more-info-content
          state-obj="[[stateObj]]"
          hass="[[hass]]"
        ></more-info-content>
      </paper-dialog-scrollable>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: {
        type: Object,
        observer: "_stateObjChanged"
      },
      dialogElement: Object,
      canConfigure: Boolean,
      domain: {
        type: String,
        reflectToAttribute: true,
        computed: "_computeDomain(stateObj)"
      },
      _stateHistory: Object,
      _stateHistoryLoading: Boolean,
      large: {
        type: Boolean,
        value: false,
        notify: true
      },
      _cacheConfig: {
        type: Object,
        value: {
          refresh: 60,
          cacheKey: null,
          hoursToShow: 24
        }
      },
      rtl: {
        type: Boolean,
        reflectToAttribute: true,
        computed: "_computeRTL(hass)"
      }
    };
  }

  enlarge() {
    this.large = !this.large;
  }

  _computeShowStateInfo(stateObj) {
    return !stateObj || !DOMAINS_NO_INFO.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj));
  }

  _computeShowHistoryComponent(hass, stateObj) {
    return hass && stateObj && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__["default"])(hass, "history") && !_common_const__WEBPACK_IMPORTED_MODULE_13__["DOMAINS_MORE_INFO_NO_HISTORY"].includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj));
  }

  _computeDomain(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj) : "";
  }

  _computeStateName(stateObj) {
    return stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["default"])(stateObj) : "";
  }

  _stateObjChanged(newVal) {
    if (!newVal) {
      return;
    }

    if (this._cacheConfig.cacheKey !== `more_info.${newVal.entity_id}`) {
      this._cacheConfig = Object.assign({}, this._cacheConfig, {
        cacheKey: `more_info.${newVal.entity_id}`
      });
    }
  }

  _gotoSettings() {
    this.fire("more-info-page", {
      page: "settings"
    });
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
  }

}

customElements.define("more-info-controls", MoreInfoControls);

/***/ }),

/***/ "./src/dialogs/more-info/more-info-settings.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-settings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");












/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class MoreInfoSettings extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        app-toolbar {
          color: var(--more-info-header-color);
          background-color: var(--more-info-header-background);

          /* to fit save button */
          padding-right: 0;
        }

        app-toolbar [main-title] {
          @apply --ha-more-info-app-toolbar-title;
        }

        app-toolbar mwc-button {
          font-size: 0.8em;
          margin: 0;
        }

        .form {
          padding: 0 24px 24px;
        }
      </style>

      <app-toolbar>
        <ha-paper-icon-button-arrow-prev
          on-click="_backTapped"
        ></ha-paper-icon-button-arrow-prev>
        <div main-title="">[[_computeStateName(stateObj)]]</div>
        <mwc-button on-click="_save" disabled="[[_computeInvalid(_entityId)]]"
          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button
        >
      </app-toolbar>

      <div class="form">
        <paper-input
          value="{{_name}}"
          label="[[localize('ui.dialogs.more_info_settings.name')]]"
        ></paper-input>
        <paper-input
          value="{{_entityId}}"
          label="[[localize('ui.dialogs.more_info_settings.entity_id')]]"
          error-message="Domain needs to stay the same"
          invalid="[[_computeInvalid(_entityId)]]"
        ></paper-input>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      registryInfo: {
        type: Object,
        observer: "_registryInfoChanged",
        notify: true
      },
      _name: String,
      _entityId: String
    };
  }

  _computeStateName(stateObj) {
    if (!stateObj) return "";
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj);
  }

  _computeInvalid(entityId) {
    return Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["default"])(this.stateObj.entity_id) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["default"])(entityId);
  }

  _registryInfoChanged(newVal) {
    if (newVal) {
      this.setProperties({
        _name: newVal.name,
        _entityId: newVal.entity_id
      });
    } else {
      this.setProperties({
        _name: "",
        _entityId: ""
      });
    }
  }

  _backTapped() {
    this.fire("more-info-page", {
      page: null
    });
  }

  async _save() {
    try {
      const info = await Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_10__["updateEntityRegistryEntry"])(this.hass, this.stateObj.entity_id, {
        name: this._name,
        new_entity_id: this._entityId
      });
      this.registryInfo = info; // Keep the more info dialog open at the new entity.

      if (this.stateObj.entity_id !== this._entityId) {
        this.fire("hass-more-info", {
          entityId: this._entityId
        });
      }
    } catch (err) {
      alert(`save failed: ${err.message}`);
    }
  }

}

customElements.define("more-info-settings", MoreInfoSettings);

/***/ }),

/***/ "./src/mixins/dialog-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/dialog-mixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-mixin */ "./src/mixins/events-mixin.js");




/**
 * @polymerMixin
 * @appliesMixin EventsMixin
 * @appliesMixin PaperDialogBehavior
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"], _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__["PaperDialogBehavior"]], superClass) {
  static get properties() {
    return {
      withBackdrop: {
        type: Boolean,
        value: true
      }
    };
  }

}));

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

/***/ }),

/***/ "./src/util/hass-attributes-util.js":
/*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const hassAttributeUtil = {};
hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength"],
  switch: ["switch", "outlet"]
};
hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";
hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  boolean: "ha-customize-boolean",
  array: "ha-customize-array",
  "key-value": "ha-customize-key-value"
}; // Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.

hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: {
    type: "string",
    description: "Name"
  },
  icon: {
    type: "icon"
  },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"]
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"]
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  homebridge_hidden: {
    type: "boolean"
  },
  homebridge_name: {
    type: "string"
  },
  supported_features: undefined,
  attribution: undefined,
  custom_ui_more_info: {
    type: "string"
  },
  custom_ui_state_card: {
    type: "string"
  },
  device_class: {
    type: "array",
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"]
  },
  hidden: {
    type: "boolean",
    description: "Hide from UI"
  },
  assumed_state: {
    type: "boolean",
    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
  },
  initial_state: {
    type: "string",
    domains: ["automation"]
  },
  unit_of_measurement: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hassAttributeUtil);

/***/ })

}]);
//# sourceMappingURL=more-info-dialog.chunk.js.map