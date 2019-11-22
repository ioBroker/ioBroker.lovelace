(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog"],{

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-card:not([dialog]) .content {\n          padding: 0 16px 16px;\n        }\n        paper-card[dialog] {\n          padding-top: 16px;\n          background-color: transparent;\n        }\n        paper-card {\n          width: 100%;\n          /* prevent new stacking context, chart tooltip needs to overflow */\n          position: static;\n        }\n        .header {\n          @apply --paper-font-headline;\n          line-height: 40px;\n          color: var(--primary-text-color);\n          padding: 20px 16px 12px;\n          @apply --paper-font-common-nowrap;\n        }\n        paper-card[dialog] .header {\n          display: none;\n        }\n      </style>\n      <ha-state-history-data\n        hass=\"[[hass]]\"\n        filter-type=\"recent-entity\"\n        entity-id=\"[[computeHistoryEntities(stateObj)]]\"\n        data=\"{{stateHistory}}\"\n        is-loading=\"{{stateHistoryLoading}}\"\n        cache-config=\"[[cacheConfig]]\"\n      ></ha-state-history-data>\n      <paper-card\n        dialog$=\"[[inDialog]]\"\n        on-click=\"cardTapped\"\n        elevation=\"[[computeElevation(inDialog)]]\"\n      >\n        <div class=\"header\">[[computeTitle(stateObj)]]</div>\n        <div class=\"content\">\n          <state-history-charts\n            hass=\"[[hass]]\"\n            history-data=\"[[stateHistory]]\"\n            is-loading-data=\"[[stateHistoryLoading]]\"\n            up-to-now\n            no-single\n          >\n          </state-history-charts>\n        </div>\n      </paper-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/*
 * @appliesMixin EventsMixin
 */

var HaHistoryGraphCard =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaHistoryGraphCard, _EventsMixin);

  function HaHistoryGraphCard() {
    _classCallCheck(this, HaHistoryGraphCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaHistoryGraphCard).apply(this, arguments));
  }

  _createClass(HaHistoryGraphCard, [{
    key: "stateObjObserver",
    value: function stateObjObserver(stateObj) {
      if (!stateObj) return;

      if (this.cacheConfig.cacheKey !== stateObj.entity_id || this.cacheConfig.refresh !== (stateObj.attributes.refresh || 0) || this.cacheConfig.hoursToShow !== (stateObj.attributes.hours_to_show || 24)) {
        this.cacheConfig = {
          refresh: stateObj.attributes.refresh || 0,
          cacheKey: stateObj.entity_id,
          hoursToShow: stateObj.attributes.hours_to_show || 24
        };
      }
    }
  }, {
    key: "computeTitle",
    value: function computeTitle(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeContentClass",
    value: function computeContentClass(inDialog) {
      return inDialog ? "" : "content";
    }
  }, {
    key: "computeHistoryEntities",
    value: function computeHistoryEntities(stateObj) {
      return stateObj.attributes.entity_id;
    }
  }, {
    key: "computeElevation",
    value: function computeElevation(inDialog) {
      return inDialog ? 0 : 1;
    }
  }, {
    key: "cardTapped",
    value: function cardTapped(ev) {
      var mq = window.matchMedia("(min-width: 610px) and (min-height: 550px)");

      if (mq.matches) {
        ev.stopPropagation();
        this.fire("hass-more-info", {
          entityId: this.stateObj.entity_id
        });
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaHistoryGraphCard;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

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
var DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Panel to show when no panel is picked. */

var DEFAULT_PANEL = "lovelace";
/** Domains that have a state card. */

var DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

var DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "counter", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "script", "sun", "timer", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

var DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

var DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

var STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */

var DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

var UNIT_C = "°C";
var UNIT_F = "°F";
/** Entity ID of the default view. */

var DEFAULT_VIEW_ENTITY_ID = "group.default_view";

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
  var rootEl = root;
  var customEl;

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
    Object.keys(attributes).forEach(function (key) {
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
/*! exports provided: attributeClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attributeClassNames", function() { return attributeClassNames; });
var attributeClassNames = function attributeClassNames(stateObj, attributes) {
  if (!stateObj) {
    return "";
  }

  return attributes.map(function (attribute) {
    return attribute in stateObj.attributes ? "has-" + attribute : "";
  }).filter(function (attr) {
    return attr !== "";
  }).join(" ");
};

/***/ }),

/***/ "./src/common/entity/can_toggle_domain.ts":
/*!************************************************!*\
  !*** ./src/common/entity/can_toggle_domain.ts ***!
  \************************************************/
/*! exports provided: canToggleDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canToggleDomain", function() { return canToggleDomain; });
var canToggleDomain = function canToggleDomain(hass, domain) {
  var services = hass.services[domain];

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
};

/***/ }),

/***/ "./src/common/entity/can_toggle_state.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/can_toggle_state.ts ***!
  \***********************************************/
/*! exports provided: canToggleState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "canToggleState", function() { return canToggleState; });
/* harmony import */ var _can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_domain */ "./src/common/entity/can_toggle_domain.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");



var canToggleState = function canToggleState(hass, stateObj) {
  var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateObj);

  if (domain === "group") {
    return stateObj.state === "on" || stateObj.state === "off";
  }

  if (domain === "climate") {
    return Object(_supports_feature__WEBPACK_IMPORTED_MODULE_2__["supportsFeature"])(stateObj, 4096);
  }

  return Object(_can_toggle_domain__WEBPACK_IMPORTED_MODULE_0__["canToggleDomain"])(hass, domain);
};

/***/ }),

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: computeDomain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeDomain", function() { return computeDomain; });
var computeDomain = function computeDomain(entityId) {
  return entityId.substr(0, entityId.indexOf("."));
};

/***/ }),

/***/ "./src/common/entity/feature_class_names.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/feature_class_names.ts ***!
  \**************************************************/
/*! exports provided: featureClassNames */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "featureClassNames", function() { return featureClassNames; });
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");
 // Expects classNames to be an object mapping feature-bit -> className

var featureClassNames = function featureClassNames(stateObj, classNames) {
  if (!stateObj || !stateObj.attributes.supported_features) {
    return "";
  }

  return Object.keys(classNames).map(function (feature) {
    return Object(_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, Number(feature)) ? classNames[feature] : "";
  }).filter(function (attr) {
    return attr !== "";
  }).join(" ");
};

/***/ }),

/***/ "./src/common/entity/state_card_type.ts":
/*!**********************************************!*\
  !*** ./src/common/entity/state_card_type.ts ***!
  \**********************************************/
/*! exports provided: stateCardType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateCardType", function() { return stateCardType; });
/* harmony import */ var _can_toggle_state__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./can_toggle_state */ "./src/common/entity/can_toggle_state.ts");
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");



var stateCardType = function stateCardType(hass, stateObj) {
  if (stateObj.state === "unavailable") {
    return "display";
  }

  var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateObj);

  if (_const__WEBPACK_IMPORTED_MODULE_2__["DOMAINS_WITH_CARD"].includes(domain)) {
    return domain;
  }

  if (Object(_can_toggle_state__WEBPACK_IMPORTED_MODULE_0__["canToggleState"])(hass, stateObj) && stateObj.attributes.control !== "hidden") {
    return "toggle";
  }

  return "display";
};

/***/ }),

/***/ "./src/common/entity/state_more_info_type.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/state_more_info_type.ts ***!
  \***************************************************/
/*! exports provided: stateMoreInfoType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stateMoreInfoType", function() { return stateMoreInfoType; });
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");


var stateMoreInfoType = function stateMoreInfoType(stateObj) {
  var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["computeStateDomain"])(stateObj);

  if (_const__WEBPACK_IMPORTED_MODULE_1__["DOMAINS_WITH_MORE_INFO"].includes(domain)) {
    return domain;
  }

  if (_const__WEBPACK_IMPORTED_MODULE_1__["DOMAINS_HIDE_MORE_INFO"].includes(domain)) {
    return "hidden";
  }

  return "default";
};

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"info\">\n        <div class=\"name\" in-dialog$=\"[[inDialog]]\">\n          [[computeStateName(stateObj)]]\n        </div>\n\n        <template is=\"dom-if\" if=\"[[inDialog]]\">\n          <div class=\"time-ago\">\n            <ha-relative-time\n              hass=\"[[hass]]\"\n              datetime=\"[[stateObj.last_changed]]\"\n            ></ha-relative-time>\n          </div>\n        </template>\n        <template is=\"dom-if\" if=\"[[!inDialog]]\">\n          <div class=\"extra-info\"><slot> </slot></div>\n        </template>\n      </div>\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      <state-badge state-obj=\"[[stateObj]]\"></state-badge>\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          min-width: 120px;\n          white-space: nowrap;\n        }\n\n        state-badge {\n          float: left;\n        }\n\n        :host([rtl]) state-badge {\n          float: right;\n        }\n\n        .info {\n          margin-left: 56px;\n        }\n\n        :host([rtl]) .info {\n          margin-right: 56px;\n          margin-left: 0;\n          text-align: right;\n        }\n\n        .name {\n          @apply --paper-font-common-nowrap;\n          color: var(--primary-text-color);\n          line-height: 40px;\n        }\n\n        .name[in-dialog],\n        :host([secondary-line]) .name {\n          line-height: 20px;\n        }\n\n        .time-ago,\n        .extra-info,\n        .extra-info > * {\n          @apply --paper-font-common-nowrap;\n          color: var(--secondary-text-color);\n        }\n      </style>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", " ", " ", "\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var StateInfo =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateInfo, _PolymerElement);

  function StateInfo() {
    _classCallCheck(this, StateInfo);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateInfo).apply(this, arguments));
  }

  _createClass(StateInfo, [{
    key: "computeStateName",
    value: function computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["computeStateName"])(stateObj);
    }
  }, {
    key: "computeRTL",
    value: function computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.styleTemplate, this.stateBadgeTemplate, this.infoTemplate);
    }
  }, {
    key: "styleTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
    }
  }, {
    key: "stateBadgeTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3());
    }
  }, {
    key: "infoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: function value() {
            return false;
          }
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "computeRTL(hass)"
        }
      };
    }
  }]);

  return StateInfo;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .data-entry .value {\n          max-width: 200px;\n          overflow-wrap: break-word;\n        }\n        .attribution {\n          color: var(--secondary-text-color);\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"layout vertical\">\n        <template\n          is=\"dom-repeat\"\n          items=\"[[computeDisplayAttributes(stateObj, filtersArray)]]\"\n          as=\"attribute\"\n        >\n          <div class=\"data-entry layout justified horizontal\">\n            <div class=\"key\">[[formatAttribute(attribute)]]</div>\n            <div class=\"value\">\n              [[formatAttributeValue(stateObj, attribute)]]\n            </div>\n          </div>\n        </template>\n        <div class=\"attribution\" hidden$=\"[[!computeAttribution(stateObj)]]\">\n          [[computeAttribution(stateObj)]]\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var HaAttributes =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaAttributes, _PolymerElement);

  function HaAttributes() {
    _classCallCheck(this, HaAttributes);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaAttributes).apply(this, arguments));
  }

  _createClass(HaAttributes, [{
    key: "computeFiltersArray",
    value: function computeFiltersArray(extraFilters) {
      return Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(",") : []);
    }
  }, {
    key: "computeDisplayAttributes",
    value: function computeDisplayAttributes(stateObj, filtersArray) {
      if (!stateObj) {
        return [];
      }

      return Object.keys(stateObj.attributes).filter(function (key) {
        return filtersArray.indexOf(key) === -1;
      });
    }
  }, {
    key: "formatAttribute",
    value: function formatAttribute(attribute) {
      return attribute.replace(/_/g, " ");
    }
  }, {
    key: "formatAttributeValue",
    value: function formatAttributeValue(stateObj, attribute) {
      var value = stateObj.attributes[attribute];
      if (value === null) return "-";

      if (Array.isArray(value)) {
        return value.join(", ");
      }

      return value instanceof Object ? JSON.stringify(value, null, 2) : value;
    }
  }, {
    key: "computeAttribution",
    value: function computeAttribution(stateObj) {
      return stateObj.attributes.attribution;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaAttributes;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      :host,\n      img,\n      video {\n        display: block;\n      }\n\n      img,\n      video {\n        width: 100%;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            <video\n              autoplay\n              muted\n              playsinline\n              ?controls=", "\n              @loadeddata=", "\n            ></video>\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            <img\n              @load=", "\n              .src=", "\n              .alt=", "\n            />\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }







var HaCameraStream = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-camera-stream")], function (_initialize, _LitElement) {
  var HaCameraStream =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaCameraStream, _LitElement2);

    function HaCameraStream() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaCameraStream);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaCameraStream)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaCameraStream;
  }(_LitElement);

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
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_attached",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_forceMJPEG",
      value: function value() {
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
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(),  false || this._shouldRenderMJPEG ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this._elementResized,  false ? undefined : Object(_data_camera__WEBPACK_IMPORTED_MODULE_3__["computeMJPEGStreamUrl"])(this.stateObj), "Preview of the ".concat(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(this.stateObj), " camera.")) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this.showControls, this._elementResized));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaCameraStream.prototype), "updated", this).call(this, changedProps);

        var stateObjChanged = changedProps.has("stateObj");
        var attachedChanged = changedProps.has("_attached");
        var oldState = changedProps.get("stateObj");
        var oldEntityId = oldState ? oldState.entity_id : undefined;
        var curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;

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
      value: function _startHls() {
        var Hls, hlsSupported, videoEl, _ref, url;

        return regeneratorRuntime.async(function _startHls$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(__webpack_require__.e(/*! import() | hls.js */ "vendors~hls.js").then(__webpack_require__.t.bind(null, /*! hls.js */ "./node_modules/hls.js/dist/hls.js", 7)));

              case 2:
                Hls = _context.sent["default"];
                hlsSupported = Hls.isSupported();
                videoEl = this._videoEl;

                if (!hlsSupported) {
                  hlsSupported = videoEl.canPlayType("application/vnd.apple.mpegurl") !== "";
                }

                if (hlsSupported) {
                  _context.next = 9;
                  break;
                }

                this._forceMJPEG = this.stateObj.entity_id;
                return _context.abrupt("return");

              case 9:
                _context.prev = 9;
                _context.next = 12;
                return regeneratorRuntime.awrap(Object(_data_camera__WEBPACK_IMPORTED_MODULE_3__["fetchStreamUrl"])(this.hass, this.stateObj.entity_id));

              case 12:
                _ref = _context.sent;
                url = _ref.url;

                if (Hls.isSupported()) {
                  this._renderHLSPolyfill(videoEl, Hls, url);
                } else {
                  this._renderHLSNative(videoEl, url);
                }

                return _context.abrupt("return");

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](9);
                // Fails if we were unable to get a stream
                // tslint:disable-next-line
                console.error(_context.t0);
                this._forceMJPEG = this.stateObj.entity_id;

              case 22:
              case "end":
                return _context.stop();
            }
          }
        }, null, this, [[9, 18]]);
      }
    }, {
      kind: "method",
      key: "_renderHLSNative",
      value: function _renderHLSNative(videoEl, url) {
        return regeneratorRuntime.async(function _renderHLSNative$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                videoEl.src = url;
                _context2.next = 3;
                return regeneratorRuntime.awrap(new Promise(function (resolve) {
                  return videoEl.addEventListener("loadedmetadata", resolve);
                }));

              case 3:
                videoEl.play();

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        });
      }
    }, {
      kind: "method",
      key: "_renderHLSPolyfill",
      value: function _renderHLSPolyfill(videoEl, // tslint:disable-next-line
      Hls, url) {
        var hls;
        return regeneratorRuntime.async(function _renderHLSPolyfill$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                hls = new Hls();
                this._hlsPolyfillInstance = hls;
                hls.attachMedia(videoEl);
                hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                  hls.loadSource(url);
                });

              case 4:
              case "end":
                return _context3.stop();
            }
          }
        }, null, this);
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
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5());
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n          direction: ltr;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id=\"target_temperature\">[[value]] [[units]]</div>\n      <div class=\"control-buttons\">\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-up\"\n            on-click=\"incrementValue\"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-down\"\n            on-click=\"decrementValue\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/*
 * @appliesMixin EventsMixin
 */

var HaClimateControl =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaClimateControl, _EventsMixin);

  function HaClimateControl() {
    _classCallCheck(this, HaClimateControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaClimateControl).apply(this, arguments));
  }

  _createClass(HaClimateControl, [{
    key: "temperatureStateInFlux",
    value: function temperatureStateInFlux(inFlux) {
      this.$.target_temperature.classList.toggle("in-flux", inFlux);
    }
  }, {
    key: "_round",
    value: function _round(val) {
      // round value to precision derived from step
      // insired by https://github.com/soundar24/roundSlider/blob/master/src/roundslider.js
      var s = this.step.toString().split(".");
      return s[1] ? parseFloat(val.toFixed(s[1].length)) : Math.round(val);
    }
  }, {
    key: "incrementValue",
    value: function incrementValue() {
      var newval = this._round(this.value + this.step);

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
  }, {
    key: "decrementValue",
    value: function decrementValue() {
      var newval = this._round(this.value - this.step);

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
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var _this = this;

      // when the last_changed timestamp is changed,
      // trigger a potential event fire in
      // the future, as long as last changed is far enough in the
      // past.
      if (this.last_changed) {
        window.setTimeout(function () {
          var now = Date.now();

          if (now - _this.last_changed >= 2000) {
            _this.fire("change");

            _this.temperatureStateInFlux(false);

            _this.last_changed = null;
          }
        }, 2010);
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaClimateControl;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          user-select: none;\n          -webkit-user-select: none;\n        }\n\n        #canvas {\n          position: relative;\n          width: 100%;\n          max-width: 330px;\n        }\n        #canvas > * {\n          display: block;\n        }\n        #interactionLayer {\n          color: white;\n          position: absolute;\n          cursor: crosshair;\n          width: 100%;\n          height: 100%;\n          overflow: visible;\n        }\n        #backgroundLayer {\n          width: 100%;\n          overflow: visible;\n          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);\n          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);\n          --wheel-shadow: var(\n            --ha-color-picker-wheel-shadow,\n            rgb(15, 15, 15) 10px 5px 5px 0px\n          );\n        }\n\n        #marker {\n          fill: currentColor;\n          stroke: var(--ha-color-picker-marker-bordercolor, white);\n          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);\n          filter: url(#marker-shadow);\n        }\n        .dragging #marker {\n        }\n\n        #colorTooltip {\n          display: none;\n          fill: currentColor;\n          stroke: var(--ha-color-picker-tooltip-bordercolor, white);\n          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);\n        }\n\n        .touch.dragging #colorTooltip {\n          display: inherit;\n        }\n      </style>\n      <div id=\"canvas\">\n        <svg id=\"interactionLayer\">\n          <defs>\n            <filter\n              id=\"marker-shadow\"\n              x=\"-50%\"\n              y=\"-50%\"\n              width=\"200%\"\n              height=\"200%\"\n              filterUnits=\"objectBoundingBox\"\n            >\n              <feOffset\n                result=\"offOut\"\n                in=\"SourceAlpha\"\n                dx=\"2\"\n                dy=\"2\"\n              ></feOffset>\n              <feGaussianBlur\n                result=\"blurOut\"\n                in=\"offOut\"\n                stdDeviation=\"2\"\n              ></feGaussianBlur>\n              <feComponentTransfer in=\"blurOut\" result=\"alphaOut\">\n                <feFuncA type=\"linear\" slope=\"0.3\"></feFuncA>\n              </feComponentTransfer>\n              <feBlend\n                in=\"SourceGraphic\"\n                in2=\"alphaOut\"\n                mode=\"normal\"\n              ></feBlend>\n            </filter>\n          </defs>\n        </svg>\n        <canvas id=\"backgroundLayer\"></canvas>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/**
 * Color-picker custom element
 *
 * @appliesMixin EventsMixin
 */

var HaColorPicker =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaColorPicker, _EventsMixin);

  function HaColorPicker() {
    _classCallCheck(this, HaColorPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaColorPicker).apply(this, arguments));
  }

  _createClass(HaColorPicker, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaColorPicker.prototype), "ready", this).call(this);

      this.setupLayers();
      this.drawColorWheel();
      this.drawMarker();
      this.interactionLayer.addEventListener("mousedown", function (ev) {
        return _this.onMouseDown(ev);
      });
      this.interactionLayer.addEventListener("touchstart", function (ev) {
        return _this.onTouchStart(ev);
      });
    } // converts browser coordinates to canvas canvas coordinates
    // origin is wheel center
    // returns {x: X, y: Y} object

  }, {
    key: "convertToCanvasCoordinates",
    value: function convertToCanvasCoordinates(clientX, clientY) {
      var svgPoint = this.interactionLayer.createSVGPoint();
      svgPoint.x = clientX;
      svgPoint.y = clientY;
      var cc = svgPoint.matrixTransform(this.interactionLayer.getScreenCTM().inverse());
      return {
        x: cc.x,
        y: cc.y
      };
    } // Mouse events

  }, {
    key: "onMouseDown",
    value: function onMouseDown(ev) {
      var cc = this.convertToCanvasCoordinates(ev.clientX, ev.clientY); // return if we're not on the wheel

      if (!this.isInWheel(cc.x, cc.y)) {
        return;
      } // a mousedown in wheel is always a color select action


      this.onMouseSelect(ev); // allow dragging

      this.canvas.classList.add("mouse", "dragging");
      this.addEventListener("mousemove", this.onMouseSelect);
      this.addEventListener("mouseup", this.onMouseUp);
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.canvas.classList.remove("mouse", "dragging");
      this.removeEventListener("mousemove", this.onMouseSelect);
    }
  }, {
    key: "onMouseSelect",
    value: function onMouseSelect(ev) {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.processUserSelect(ev);
      });
    } // Touch events

  }, {
    key: "onTouchStart",
    value: function onTouchStart(ev) {
      var _this3 = this;

      var touch = ev.changedTouches[0];
      var cc = this.convertToCanvasCoordinates(touch.clientX, touch.clientY); // return if we're not on the wheel

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
      this.addEventListener("touchmove", function () {
        _this3.tapBecameScroll = true;
      }, {
        passive: true
      });
    }
  }, {
    key: "onTap",
    value: function onTap(ev) {
      if (this.tapBecameScroll) {
        return;
      }

      ev.preventDefault();
      this.onTouchSelect(ev);
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      this.canvas.classList.remove("touch", "dragging");
      this.removeEventListener("touchmove", this.onTouchSelect);
    }
  }, {
    key: "onTouchSelect",
    value: function onTouchSelect(ev) {
      var _this4 = this;

      requestAnimationFrame(function () {
        return _this4.processUserSelect(ev.changedTouches[0]);
      });
    }
    /*
     * General event/selection handling
     */
    // Process user input to color

  }, {
    key: "processUserSelect",
    value: function processUserSelect(ev) {
      var canvasXY = this.convertToCanvasCoordinates(ev.clientX, ev.clientY);
      var hs = this.getColor(canvasXY.x, canvasXY.y);
      this.onColorSelect(hs);
    } // apply color to marker position and canvas

  }, {
    key: "onColorSelect",
    value: function onColorSelect(hs) {
      var _this5 = this;

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
        this.ensureFinalSelect = setTimeout(function () {
          _this5.fireColorSelected(hs); // do it for the final time

        }, this.throttle);
        return;
      }

      this.fireColorSelected(hs); // do it

      this.colorSelectIsThrottled = true;
      setTimeout(function () {
        _this5.colorSelectIsThrottled = false;
      }, this.throttle);
    } // set color values and fire colorselected event

  }, {
    key: "fireColorSelected",
    value: function fireColorSelected(hs) {
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

  }, {
    key: "setMarkerOnColor",
    value: function setMarkerOnColor(hs) {
      var dist = hs.s * this.radius;
      var theta = (hs.h - 180) / 180 * Math.PI;
      var markerdX = -dist * Math.cos(theta);
      var markerdY = -dist * Math.sin(theta);
      var translateString = "translate(".concat(markerdX, ",").concat(markerdY, ")");
      this.marker.setAttribute("transform", translateString);
      this.tooltip.setAttribute("transform", translateString);
    } // apply given color to interface elements

  }, {
    key: "applyColorToCanvas",
    value: function applyColorToCanvas(hs) {
      // we're not really converting hs to hsl here, but we keep it cheap
      // setting the color on the interactionLayer, the svg elements can inherit
      this.interactionLayer.style.color = "hsl(".concat(hs.h, ", 100%, ").concat(100 - hs.s * 50, "%)");
    }
  }, {
    key: "applyHsColor",
    value: function applyHsColor(hs) {
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

  }, {
    key: "getAngle",
    value: function getAngle(dX, dY) {
      var theta = Math.atan2(-dY, -dX); // radians from the left edge, clockwise = positive

      var angle = theta / Math.PI * 180 + 180; // degrees, clockwise from right

      return angle;
    } // returns true when coordinates are in the colorwheel

  }, {
    key: "isInWheel",
    value: function isInWheel(x, y) {
      return this.getDistance(x, y) <= 1;
    } // returns distance from wheel center, 0 = center, 1 = edge, >1 = outside

  }, {
    key: "getDistance",
    value: function getDistance(dX, dY) {
      return Math.sqrt(dX * dX + dY * dY) / this.radius;
    }
    /*
     * Getting colors
     */

  }, {
    key: "getColor",
    value: function getColor(x, y) {
      var hue = this.getAngle(x, y); // degrees, clockwise from right

      var relativeDistance = this.getDistance(x, y); // edge of radius = 1

      var sat = Math.min(relativeDistance, 1); // Distance from center

      return {
        h: hue,
        s: sat
      };
    }
  }, {
    key: "applySegmentFilter",
    value: function applySegmentFilter(hs) {
      // apply hue segment steps
      if (this.hueSegments) {
        var angleStep = 360 / this.hueSegments;
        var halfAngleStep = angleStep / 2;
        hs.h -= halfAngleStep; // take the 'centered segemnts' into account

        if (hs.h < 0) {
          hs.h += 360;
        } // don't end up below 0


        var rest = hs.h % angleStep;
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

  }, {
    key: "setupLayers",
    value: function setupLayers() {
      this.canvas = this.$.canvas;
      this.backgroundLayer = this.$.backgroundLayer;
      this.interactionLayer = this.$.interactionLayer; // coordinate origin position (center of the wheel)

      this.originX = this.width / 2;
      this.originY = this.originX; // synchronise width/height coordinates

      this.backgroundLayer.width = this.width;
      this.backgroundLayer.height = this.height;
      this.interactionLayer.setAttribute("viewBox", "".concat(-this.originX, " ").concat(-this.originY, " ").concat(this.width, " ").concat(this.height));
    }
  }, {
    key: "drawColorWheel",
    value: function drawColorWheel() {
      /*
       *  Setting up all paremeters
       */
      var shadowColor;
      var shadowOffsetX;
      var shadowOffsetY;
      var shadowBlur;
      var context = this.backgroundLayer.getContext("2d"); // postioning and sizing

      var cX = this.originX;
      var cY = this.originY;
      var radius = this.radius;
      var counterClockwise = false; // styling of the wheel

      var wheelStyle = window.getComputedStyle(this.backgroundLayer, null);
      var borderWidth = parseInt(wheelStyle.getPropertyValue("--wheel-borderwidth"), 10);
      var borderColor = wheelStyle.getPropertyValue("--wheel-bordercolor").trim();
      var wheelShadow = wheelStyle.getPropertyValue("--wheel-shadow").trim(); // extract shadow properties from  CCS variable
      // the shadow should be defined as: "10px 5px 5px 0px COLOR"

      if (wheelShadow !== "none") {
        var values = wheelShadow.split("px ");
        shadowColor = values.pop();
        shadowOffsetX = parseInt(values[0], 10);
        shadowOffsetY = parseInt(values[1], 10);
        shadowBlur = parseInt(values[2], 10) || 0;
      }

      var borderRadius = radius + borderWidth / 2;
      var wheelRadius = radius;
      var shadowRadius = radius + borderWidth;
      /*
       *  Drawing functions
       */

      function drawCircle(hueSegments, saturationSegments) {
        hueSegments = hueSegments || 360; // reset 0 segments to 360

        var angleStep = 360 / hueSegments;
        var halfAngleStep = angleStep / 2; // center segments on color

        for (var angle = 0; angle <= 360; angle += angleStep) {
          var startAngle = (angle - halfAngleStep) * (Math.PI / 180);
          var endAngle = (angle + halfAngleStep + 1) * (Math.PI / 180);
          context.beginPath();
          context.moveTo(cX, cY);
          context.arc(cX, cY, wheelRadius, startAngle, endAngle, counterClockwise);
          context.closePath(); // gradient

          var gradient = context.createRadialGradient(cX, cY, 0, cX, cY, wheelRadius);
          var lightness = 100; // first gradient stop

          gradient.addColorStop(0, "hsl(".concat(angle, ", 100%, ").concat(lightness, "%)")); // segment gradient stops

          if (saturationSegments > 0) {
            var ratioStep = 1 / saturationSegments;
            var ratio = 0;

            for (var stop = 1; stop < saturationSegments; stop += 1) {
              var prevLighness = lightness;
              ratio = stop * ratioStep;
              lightness = 100 - 50 * ratio;
              gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, ").concat(prevLighness, "%)"));
              gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, ").concat(lightness, "%)"));
            }

            gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, 50%)"));
          } // last gradient stop


          gradient.addColorStop(1, "hsl(".concat(angle, ", 100%, 50%)"));
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

  }, {
    key: "drawMarker",
    value: function drawMarker() {
      var svgElement = this.interactionLayer;
      var markerradius = this.radius * 0.08;
      var tooltipradius = this.radius * 0.15;
      var TooltipOffsetY = -(tooltipradius * 3);
      var TooltipOffsetX = 0;
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
  }, {
    key: "segmentationChange",
    value: function segmentationChange() {
      if (this.backgroundLayer) {
        this.drawColorWheel();
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaColorPicker;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n\n        .title {\n          margin-bottom: 16px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        ha-icon {\n          float: left;\n          margin-top: 4px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        ha-paper-slider {\n          background-image: var(--ha-slider-background);\n        }\n      </style>\n\n      <div class=\"title\">[[caption]]</div>\n      <div class=\"extra-container\"><slot name=\"extra\"></slot></div>\n      <div class=\"slider-container\">\n        <ha-icon icon=\"[[icon]]\" hidden$=\"[[!icon]]\"></ha-icon>\n        <ha-paper-slider\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          step=\"[[step]]\"\n          pin=\"[[pin]]\"\n          disabled=\"[[disabled]]\"\n          disabled=\"[[disabled]]\"\n          value=\"{{value}}\"\n        ></ha-paper-slider>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var HaLabeledSlider =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaLabeledSlider, _PolymerElement);

  function HaLabeledSlider() {
    _classCallCheck(this, HaLabeledSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaLabeledSlider).apply(this, arguments));
  }

  _createClass(HaLabeledSlider, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaLabeledSlider;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var paperIconButtonClass = customElements.get("paper-icon-button");
var HaPaperIconButtonArrowPrev =
/*#__PURE__*/
function (_paperIconButtonClass) {
  _inherits(HaPaperIconButtonArrowPrev, _paperIconButtonClass);

  function HaPaperIconButtonArrowPrev() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HaPaperIconButtonArrowPrev);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaPaperIconButtonArrowPrev)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hassio", void 0);

    return _this;
  }

  _createClass(HaPaperIconButtonArrowPrev, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(HaPaperIconButtonArrowPrev.prototype), "connectedCallback", this).call(this); // wait to check for direction since otherwise direction is wrong even though top level is RTL


      setTimeout(function () {
        _this2.icon = window.getComputedStyle(_this2).direction === "ltr" ? _this2.hassio ? "hassio:arrow-left" : "hass:arrow-left" : _this2.hassio ? "hassio:arrow-right" : "hass:arrow-right";
      }, 100);
    }
  }]);

  return HaPaperIconButtonArrowPrev;
}(paperIconButtonClass);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

var PaperSliderClass = customElements.get("paper-slider");

var HaPaperSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaPaperSlider, _PaperSliderClass);

  function HaPaperSlider() {
    _classCallCheck(this, HaPaperSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperSlider).apply(this, arguments));
  }

  _createClass(HaPaperSlider, null, [{
    key: "template",
    get: function get() {
      var tpl = document.createElement("template");
      tpl.innerHTML = PaperSliderClass.template.innerHTML;
      var styleEl = document.createElement("style");
      styleEl.innerHTML = "\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir=\"rtl\"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ";
      tpl.content.appendChild(styleEl);
      return tpl;
    }
  }]);

  return HaPaperSlider;
}(PaperSliderClass);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n        mwc-button[disabled] {\n          background-color: transparent;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <mwc-button on-click=\"_callService\" disabled=\"[[!_interceptable]]\"\n        >[[_computeLabel(stateObj.state, _interceptable)]]</mwc-button\n      >\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var STATES_INTERCEPTABLE = {
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

var HaVacuumState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaVacuumState, _LocalizeMixin);

  function HaVacuumState() {
    _classCallCheck(this, HaVacuumState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaVacuumState).apply(this, arguments));
  }

  _createClass(HaVacuumState, [{
    key: "_computeInterceptable",
    value: function _computeInterceptable(state, supportedFeatures) {
      return state in STATES_INTERCEPTABLE && supportedFeatures !== 0;
    }
  }, {
    key: "_computeLabel",
    value: function _computeLabel(state, interceptable) {
      return interceptable ? this.localize("ui.card.vacuum.actions.".concat(STATES_INTERCEPTABLE[state].action)) : this.localize("state.vacuum.".concat(state));
    }
  }, {
    key: "_callService",
    value: function _callService(ev) {
      ev.stopPropagation();
      var stateObj = this.stateObj;
      var service = STATES_INTERCEPTABLE[stateObj.state].service;
      this.hass.callService("vacuum", service, {
        entity_id: stateObj.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        _interceptable: {
          type: Boolean,
          computed: "_computeInterceptable(stateObj.state, stateObj.attributes.supported_features)"
        }
      };
    }
  }]);

  return HaVacuumState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id=\"target_temperature\">[[value]] [[units]]</div>\n      <div class=\"control-buttons\">\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-up\"\n            on-click=\"incrementValue\"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-down\"\n            on-click=\"decrementValue\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






/*
 * @appliesMixin EventsMixin
 */

var HaWaterHeaterControl =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaWaterHeaterControl, _EventsMixin);

  function HaWaterHeaterControl() {
    _classCallCheck(this, HaWaterHeaterControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaWaterHeaterControl).apply(this, arguments));
  }

  _createClass(HaWaterHeaterControl, [{
    key: "temperatureStateInFlux",
    value: function temperatureStateInFlux(inFlux) {
      this.$.target_temperature.classList.toggle("in-flux", inFlux);
    }
  }, {
    key: "incrementValue",
    value: function incrementValue() {
      var newval = this.value + this.step;

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
  }, {
    key: "decrementValue",
    value: function decrementValue() {
      var newval = this.value - this.step;

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
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var _this = this;

      // when the last_changed timestamp is changed,
      // trigger a potential event fire in
      // the future, as long as last changed is far enough in the
      // past.
      if (this.last_changed) {
        window.setTimeout(function () {
          var now = Date.now();

          if (now - _this.last_changed >= 2000) {
            _this.fire("change");

            _this.temperatureStateInFlux(false);

            _this.last_changed = null;
          }
        }, 2010);
      }
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaWaterHeaterControl;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n      </style>\n\n      <div class=\"target\">\n        <span class=\"state-label\"> [[_localizeState(stateObj.state)]] </span>\n        [[computeTarget(hass, stateObj)]]\n      </div>\n\n      <template is=\"dom-if\" if=\"[[currentStatus]]\">\n        <div class=\"current\">\n          [[localize('ui.card.water_heater.currently')]]: [[currentStatus]]\n        </div>\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




/*
 * @appliesMixin LocalizeMixin
 */

var HaWaterHeaterState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaWaterHeaterState, _LocalizeMixin);

  function HaWaterHeaterState() {
    _classCallCheck(this, HaWaterHeaterState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaWaterHeaterState).apply(this, arguments));
  }

  _createClass(HaWaterHeaterState, [{
    key: "computeTarget",
    value: function computeTarget(hass, stateObj) {
      if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

      if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
        return "".concat(stateObj.attributes.target_temp_low, " - ").concat(stateObj.attributes.target_temp_high, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.temperature != null) {
        return "".concat(stateObj.attributes.temperature, " ").concat(hass.config.unit_system.temperature);
      }

      return "";
    }
  }, {
    key: "_localizeState",
    value: function _localizeState(state) {
      return this.localize("state.water_heater.".concat(state)) || state;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return HaWaterHeaterState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog paper-dialog-shared-styles\">\n        :host {\n          font-size: 14px;\n          width: 365px;\n          border-radius: 2px;\n        }\n\n        more-info-controls,\n        more-info-settings {\n          --more-info-header-background: var(--secondary-background-color);\n          --more-info-header-color: var(--primary-text-color);\n          --ha-more-info-app-toolbar-title: {\n            /* Design guideline states 24px, changed to 16 to align with state info */\n            margin-left: 16px;\n            line-height: 1.3em;\n            max-height: 2.6em;\n            overflow: hidden;\n            /* webkit and blink still support simple multiline text-overflow */\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            text-overflow: ellipsis;\n          }\n        }\n\n        /* overrule the ha-style-dialog max-height on small screens */\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          more-info-controls,\n          more-info-settings {\n            --more-info-header-background: var(--primary-color);\n            --more-info-header-color: var(--text-primary-color);\n          }\n          :host {\n            width: 100% !important;\n            border-radius: 0px;\n            position: fixed !important;\n            margin: 0;\n          }\n          :host::before {\n            content: \"\";\n            position: fixed;\n            z-index: -1;\n            top: 0px;\n            left: 0px;\n            right: 0px;\n            bottom: 0px;\n            background-color: inherit;\n          }\n        }\n\n        :host([data-domain=\"camera\"]) {\n          width: auto;\n        }\n\n        :host([data-domain=\"history_graph\"]),\n        :host([large]) {\n          width: 90%;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[!_page]]\">\n        <more-info-controls\n          class=\"no-padding\"\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n          dialog-element=\"[[_dialogElement]]\"\n          can-configure=\"[[_registryInfo]]\"\n          large=\"{{large}}\"\n        ></more-info-controls>\n      </template>\n      <template is=\"dom-if\" if='[[_equals(_page, \"settings\")]]'>\n        <more-info-settings\n          class=\"no-padding\"\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n          registry-info=\"{{_registryInfo}}\"\n        ></more-info-settings>\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











/*
 * @appliesMixin DialogMixin
 */

var HaMoreInfoDialog =
/*#__PURE__*/
function (_DialogMixin) {
  _inherits(HaMoreInfoDialog, _DialogMixin);

  function HaMoreInfoDialog() {
    _classCallCheck(this, HaMoreInfoDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMoreInfoDialog).apply(this, arguments));
  }

  _createClass(HaMoreInfoDialog, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaMoreInfoDialog.prototype), "ready", this).call(this);

      this._dialogElement = this;
      this.addEventListener("more-info-page", function (ev) {
        _this._page = ev.detail.page;
      });
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["computeStateDomain"])(stateObj) : "";
    }
  }, {
    key: "_computeStateObj",
    value: function _computeStateObj(hass) {
      return hass.states[hass.moreInfoEntityId] || null;
    }
  }, {
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal, oldVal) {
      var _this2 = this;

      var info;
      return regeneratorRuntime.async(function _stateObjChanged$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (newVal) {
                _context.next = 3;
                break;
              }

              this.setProperties({
                opened: false,
                _page: null,
                _registryInfo: null,
                large: false
              });
              return _context.abrupt("return");

            case 3:
              requestAnimationFrame(function () {
                return requestAnimationFrame(function () {
                  // allow dialog to render content before showing it so it will be
                  // positioned correctly.
                  _this2.opened = true;
                });
              });

              if (!(!Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["isComponentLoaded"])(this.hass, "config") || oldVal && oldVal.entity_id === newVal.entity_id)) {
                _context.next = 6;
                break;
              }

              return _context.abrupt("return");

            case 6:
              if (!this.hass.user.is_admin) {
                _context.next = 17;
                break;
              }

              _context.prev = 7;
              _context.next = 10;
              return regeneratorRuntime.awrap(this.hass.callWS({
                type: "config/entity_registry/get",
                entity_id: newVal.entity_id
              }));

            case 10:
              info = _context.sent;
              this._registryInfo = info;
              _context.next = 17;
              break;

            case 14:
              _context.prev = 14;
              _context.t0 = _context["catch"](7);
              this._registryInfo = null;

            case 17:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[7, 14]]);
    }
  }, {
    key: "_dialogOpenChanged",
    value: function _dialogOpenChanged(newVal) {
      if (!newVal && this.stateObj) {
        this.fire("hass-more-info", {
          entityId: null
        });
      }
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_largeChanged",
    value: function _largeChanged() {
      this.notifyResize();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }, {
    key: "observers",
    get: function get() {
      return ["_dialogOpenChanged(opened)"];
    }
  }]);

  return HaMoreInfoDialog;
}(Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        paper-input {\n          margin: auto;\n          max-width: 200px;\n        }\n        .pad {\n          display: flex;\n          justify-content: center;\n          margin-bottom: 24px;\n        }\n        .pad div {\n          display: flex;\n          flex-direction: column;\n        }\n        .pad mwc-button {\n          width: 80px;\n        }\n        .actions mwc-button {\n          flex: 1 0 50%;\n          margin: 0 4px 16px;\n          max-width: 200px;\n        }\n        mwc-button.disarm {\n          color: var(--google-red-500);\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[_codeFormat]]\">\n        <paper-input\n          label=\"[[localize('ui.card.alarm_control_panel.code')]]\"\n          value=\"{{_enteredCode}}\"\n          type=\"password\"\n          disabled=\"[[!_inputEnabled]]\"\n        ></paper-input>\n\n        <template is=\"dom-if\" if=\"[[_isNumber(_codeFormat)]]\">\n          <div class=\"pad\">\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"1\"\n                raised\n                >1</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"4\"\n                raised\n                >4</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"7\"\n                raised\n                >7</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"2\"\n                raised\n                >2</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"5\"\n                raised\n                >5</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"8\"\n                raised\n                >8</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"0\"\n                raised\n                >0</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"3\"\n                raised\n                >3</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"6\"\n                raised\n                >6</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"9\"\n                raised\n                >9</mwc-button\n              >\n              <mwc-button\n                on-click=\"_clearEnteredCode\"\n                disabled=\"[[!_inputEnabled]]\"\n                raised\n              >\n                [[localize('ui.card.alarm_control_panel.clear_code')]]\n              </mwc-button>\n            </div>\n          </div>\n        </template>\n      </template>\n\n      <div class=\"layout horizontal center-justified actions\">\n        <template is=\"dom-if\" if=\"[[_disarmVisible]]\">\n          <mwc-button\n            outlined\n            class=\"disarm\"\n            on-click=\"_callService\"\n            data-service=\"alarm_disarm\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.disarm')]]\n          </mwc-button>\n        </template>\n        <template is=\"dom-if\" if=\"[[_armVisible]]\">\n          <mwc-button\n            outlined\n            on-click=\"_callService\"\n            data-service=\"alarm_arm_home\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.arm_home')]]\n          </mwc-button>\n          <mwc-button\n            outlined\n            on-click=\"_callService\"\n            data-service=\"alarm_arm_away\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.arm_away')]]\n          </mwc-button>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var MoreInfoAlarmControlPanel =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoAlarmControlPanel, _LocalizeMixin);

  _createClass(MoreInfoAlarmControlPanel, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
          computed: "_validateCode(_enteredCode,  _codeFormat,  _armVisible, _codeArmRequired)"
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
  }]);

  function MoreInfoAlarmControlPanel() {
    var _this;

    _classCallCheck(this, MoreInfoAlarmControlPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoAlarmControlPanel).call(this));
    _this._armedStates = ["armed_home", "armed_away", "armed_night", "armed_custom_bypass"];
    return _this;
  }

  _createClass(MoreInfoAlarmControlPanel, [{
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal, oldVal) {
      var _this2 = this;

      if (newVal) {
        var state = newVal.state;
        var props = {
          _codeFormat: newVal.attributes.code_format,
          _armVisible: state === "disarmed",
          _codeArmRequired: newVal.attributes.code_arm_required,
          _disarmVisible: this._armedStates.includes(state) || state === "pending" || state === "triggered" || state === "arming"
        };
        props._inputEnabled = props._disarmVisible || props._armVisible;
        this.setProperties(props);
      }

      if (oldVal) {
        setTimeout(function () {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(_this2, "iron-resize");
        }, 500);
      }
    }
  }, {
    key: "_isNumber",
    value: function _isNumber(format) {
      return format === "Number";
    }
  }, {
    key: "_validateCode",
    value: function _validateCode(code, format, armVisible, codeArmRequired) {
      return !format || code.length > 0 || armVisible && !codeArmRequired;
    }
  }, {
    key: "_digitClicked",
    value: function _digitClicked(ev) {
      this._enteredCode += ev.target.getAttribute("data-digit");
    }
  }, {
    key: "_clearEnteredCode",
    value: function _clearEnteredCode() {
      this._enteredCode = "";
    }
  }, {
    key: "_callService",
    value: function _callService(ev) {
      var _this3 = this;

      var service = ev.target.getAttribute("data-service");
      var data = {
        entity_id: this.stateObj.entity_id,
        code: this._enteredCode
      };
      this.hass.callService("alarm_control_panel", service, data).then(function () {
        _this3._enteredCode = "";
      });
    }
  }]);

  return MoreInfoAlarmControlPanel;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .flex {\n          display: flex;\n          justify-content: space-between;\n        }\n        .actions {\n          margin: 36px 0 8px 0;\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"flex\">\n        <div>[[localize('ui.card.automation.last_triggered')]]:</div>\n        <ha-relative-time\n          hass=\"[[hass]]\"\n          datetime=\"[[stateObj.attributes.last_triggered]]\"\n        ></ha-relative-time>\n      </div>\n\n      <div class=\"actions\">\n        <mwc-button on-click=\"handleTriggerTapped\">\n          [[localize('ui.card.automation.trigger')]]\n        </mwc-button>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var MoreInfoAutomation =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoAutomation, _LocalizeMixin);

  function MoreInfoAutomation() {
    _classCallCheck(this, MoreInfoAutomation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoAutomation).apply(this, arguments));
  }

  _createClass(MoreInfoAutomation, [{
    key: "handleTriggerTapped",
    value: function handleTriggerTapped() {
      this.hass.callService("automation", "trigger", {
        entity_id: this.stateObj.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return MoreInfoAutomation;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      paper-checkbox {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: var(--secondary-background-color);\n        padding: 5px;\n        border-bottom-left-radius: 6px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            <paper-checkbox\n              .checked=", "\n              @change=", "\n            >\n              Preload stream\n            </paper-checkbox>\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-camera-stream\n        .hass=\"", "\"\n        .stateObj=\"", "\"\n        showcontrols\n      ></ha-camera-stream>\n      ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }





 // Not duplicate import, it's for typing
// tslint:disable-next-line

var MoreInfoCamera = _decorate(null, function (_initialize, _LitElement) {
  var MoreInfoCamera =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MoreInfoCamera, _LitElement2);

    function MoreInfoCamera() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoCamera);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoCamera)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoCamera;
  }(_LitElement);

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
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_attached",
      value: function value() {
        return false;
      }
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(MoreInfoCamera.prototype), "connectedCallback", this).call(this);

        this._attached = true;
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(MoreInfoCamera.prototype), "disconnectedCallback", this).call(this);

        this._attached = false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._attached || !this.hass || !this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.hass, this.stateObj, this._cameraPrefs ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this._cameraPrefs.preload_stream, this._handleCheckboxChanged) : undefined);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (!changedProps.has("stateObj")) {
          return;
        }

        var oldState = changedProps.get("stateObj");
        var oldEntityId = oldState ? oldState.entity_id : undefined;
        var curEntityId = this.stateObj ? this.stateObj.entity_id : undefined; // Same entity, ignore.

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
      value: function _fetchCameraPrefs() {
        return regeneratorRuntime.async(function _fetchCameraPrefs$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return regeneratorRuntime.awrap(Object(_data_camera__WEBPACK_IMPORTED_MODULE_1__["fetchCameraPrefs"])(this.hass, this.stateObj.entity_id));

              case 2:
                this._cameraPrefs = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "_handleCheckboxChanged",
      value: function _handleCheckboxChanged(ev) {
        var checkbox;
        return regeneratorRuntime.async(function _handleCheckboxChanged$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                checkbox = ev.currentTarget;
                _context2.prev = 1;
                _context2.next = 4;
                return regeneratorRuntime.awrap(Object(_data_camera__WEBPACK_IMPORTED_MODULE_1__["updateCameraPrefs"])(this.hass, this.stateObj.entity_id, {
                  preload_stream: checkbox.checked
                }));

              case 4:
                this._cameraPrefs = _context2.sent;
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                alert(_context2.t0.message);
                checkbox.checked = !checkbox.checked;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, null, this, [[1, 7]]);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("more-info-camera", MoreInfoCamera);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-climate.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-climate.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_climate_control__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-climate-control */ "./src/components/ha-climate-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/climate */ "./src/data/climate.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject15() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        color: var(--primary-text-color);\n      }\n\n      .container-hvac_modes iron-icon,\n      .container-fan_list iron-icon,\n      .container-swing_list iron-icon {\n        margin: 22px 16px 0 0;\n      }\n\n      ha-paper-dropdown-menu {\n        width: 100%;\n      }\n\n      paper-item {\n        cursor: pointer;\n      }\n\n      ha-paper-slider {\n        width: 100%;\n      }\n\n      .container-humidity .single-row {\n        display: flex;\n        height: 50px;\n      }\n\n      .target-humidity {\n        width: 90px;\n        font-size: 200%;\n        margin: auto;\n        direction: ltr;\n      }\n\n      ha-climate-control.range-control-left,\n      ha-climate-control.range-control-right {\n        float: left;\n        width: 46%;\n      }\n      ha-climate-control.range-control-left {\n        margin-right: 4%;\n      }\n      ha-climate-control.range-control-right {\n        margin-left: 4%;\n      }\n\n      .humidity {\n        --paper-slider-active-color: var(--paper-blue-400);\n        --paper-slider-secondary-color: var(--paper-blue-400);\n      }\n\n      .single-row {\n        padding: 8px 0;\n      }\n    "]);

  _templateObject15 = function _templateObject15() {
    return data;
  };

  return data;
}

function _templateObject14() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"container-aux_heat\">\n                <div class=\"center horizontal layout single-row\">\n                  <div class=\"flex\">\n                    ", "\n                  </div>\n                  <ha-switch\n                    .checked=", "\n                    @change=", "\n                  ></ha-switch>\n                </div>\n              </div>\n            "]);

  _templateObject14 = function _templateObject14() {
    return data;
  };

  return data;
}

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n                        <paper-item item-name=", ">", "</paper-item>\n                      "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"container-swing_list\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ", "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n                        <paper-item item-name=", ">\n                          ", "\n                        </paper-item>\n                      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"container-fan_list\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ", "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n                        <paper-item item-name=", ">\n                          ", "\n                        </paper-item>\n                      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"container-preset_modes\">\n                <ha-paper-dropdown-menu\n                  label-float\n                  dynamic-align\n                  .label=", "\n                >\n                  <paper-listbox\n                    slot=\"dropdown-content\"\n                    attr-for-selected=\"item-name\"\n                    .selected=", "\n                    @selected-changed=", "\n                  >\n                    ", "\n                  </paper-listbox>\n                </ha-paper-dropdown-menu>\n              </div>\n            "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                      <paper-item item-name=", ">\n                        ", "\n                      </paper-item>\n                    "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"container-humidity\">\n                <div>", "</div>\n                <div class=\"single-row\">\n                  <div class=\"target-humidity\">\n                    ", " %\n                  </div>\n                  <ha-paper-slider\n                    class=\"humidity\"\n                    step=\"1\"\n                    pin\n                    ignore-bar-touch\n                    dir=", "\n                    .min=", "\n                    .max=", "\n                    .secondaryProgress=", "\n                    .value=", "\n                    @change=", "\n                  >\n                  </ha-paper-slider>\n                </div>\n              </div>\n            "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    class=\"range-control-left\"\n                    @change=", "\n                  ></ha-climate-control>\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    class=\"range-control-right\"\n                    @change=", "\n                  ></ha-climate-control>\n                "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                  <ha-climate-control\n                    .value=", "\n                    .units=", "\n                    .step=", "\n                    .min=", "\n                    .max=", "\n                    @change=", "\n                  ></ha-climate-control>\n                "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                  <div>\n                    ", "\n                  </div>\n                "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <div\n        class=", "\n      >\n        <div class=\"container-temperature\">\n          <div class=", ">\n            ", "\n            ", "\n            ", "\n          </div>\n        </div>\n\n        ", "\n\n        <div class=\"container-hvac_modes\">\n          <div class=\"controls\">\n            <ha-paper-dropdown-menu\n              label-float\n              dynamic-align\n              .label=", "\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                attr-for-selected=\"item-name\"\n                .selected=", "\n                @selected-changed=", "\n              >\n                ", "\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </div>\n\n        ", "\n        ", "\n        ", "\n        ", "\n      </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }















var MoreInfoClimate = _decorate(null, function (_initialize, _LitElement) {
  var MoreInfoClimate =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MoreInfoClimate, _LitElement2);

    function MoreInfoClimate() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoClimate);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoClimate)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoClimate;
  }(_LitElement);

  return {
    F: MoreInfoClimate,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      key: "_resizeDebounce",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
        }

        var hass = this.hass;
        var stateObj = this.stateObj;
        var supportTargetTemperature = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_10__["CLIMATE_SUPPORT_TARGET_TEMPERATURE"]);
        var supportTargetTemperatureRange = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_10__["CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE"]);
        var supportTargetHumidity = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_10__["CLIMATE_SUPPORT_TARGET_HUMIDITY"]);
        var supportFanMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_10__["CLIMATE_SUPPORT_FAN_MODE"]);
        var supportPresetMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_10__["CLIMATE_SUPPORT_PRESET_MODE"]);
        var supportSwingMode = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_10__["CLIMATE_SUPPORT_SWING_MODE"]);
        var supportAuxHeat = Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_8__["supportsFeature"])(stateObj, _data_climate__WEBPACK_IMPORTED_MODULE_10__["CLIMATE_SUPPORT_AUX_HEAT"]);
        var temperatureStepSize = stateObj.attributes.target_temp_step || (hass.config.unit_system.temperature.indexOf("F") === -1 ? 0.5 : 1);
        var rtlDirection = Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_9__["computeRTLDirection"])(hass);
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject2(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_12__["classMap"])({
          "has-current_temperature": "current_temperature" in stateObj.attributes,
          "has-current_humidity": "current_humidity" in stateObj.attributes,
          "has-target_temperature": supportTargetTemperature,
          "has-target_temperature_range": supportTargetTemperatureRange,
          "has-target_humidity": supportTargetHumidity,
          "has-fan_mode": supportFanMode,
          "has-swing_mode": supportSwingMode,
          "has-aux_heat": supportAuxHeat,
          "has-preset_mode": supportPresetMode
        }), stateObj.state, supportTargetTemperature || supportTargetTemperatureRange ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject3(), hass.localize("ui.card.climate.target_temperature")) : "", stateObj.attributes.temperature ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject4(), stateObj.attributes.temperature, hass.config.unit_system.temperature, temperatureStepSize, stateObj.attributes.min_temp, stateObj.attributes.max_temp, this._targetTemperatureChanged) : "", stateObj.attributes.target_temp_low || stateObj.attributes.target_temp_high ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject5(), stateObj.attributes.target_temp_low, hass.config.unit_system.temperature, temperatureStepSize, stateObj.attributes.min_temp, stateObj.attributes.target_temp_high, this._targetTemperatureLowChanged, stateObj.attributes.target_temp_high, hass.config.unit_system.temperature, temperatureStepSize, stateObj.attributes.target_temp_low, stateObj.attributes.max_temp, this._targetTemperatureHighChanged) : "", supportTargetHumidity ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject6(), hass.localize("ui.card.climate.target_humidity"), stateObj.attributes.humidity, rtlDirection, stateObj.attributes.min_humidity, stateObj.attributes.max_humidity, stateObj.attributes.max_humidity, stateObj.attributes.humidity, this._targetHumiditySliderChanged) : "", hass.localize("ui.card.climate.operation"), stateObj.state, this._handleOperationmodeChanged, stateObj.attributes.hvac_modes.concat().sort(_data_climate__WEBPACK_IMPORTED_MODULE_10__["compareClimateHvacModes"]).map(function (mode) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject7(), mode, hass.localize("state.climate.".concat(mode)));
        }), supportPresetMode ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject8(), hass.localize("ui.card.climate.preset_mode"), stateObj.attributes.preset_mode, this._handlePresetmodeChanged, stateObj.attributes.preset_modes.map(function (mode) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject9(), mode, hass.localize("state_attributes.climate.preset_mode.".concat(mode)) || mode);
        })) : "", supportFanMode ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject10(), hass.localize("ui.card.climate.fan_mode"), stateObj.attributes.fan_mode, this._handleFanmodeChanged, stateObj.attributes.fan_modes.map(function (mode) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject11(), mode, hass.localize("state_attributes.climate.fan_mode.".concat(mode)) || mode);
        })) : "", supportSwingMode ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject12(), hass.localize("ui.card.climate.swing_mode"), stateObj.attributes.swing_mode, this._handleSwingmodeChanged, stateObj.attributes.swing_modes.map(function (mode) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject13(), mode, mode);
        })) : "", supportAuxHeat ? Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject14(), hass.localize("ui.card.climate.aux_heat"), stateObj.attributes.aux_heat === "on", this._auxToggleChanged) : "");
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        var _this2 = this;

        _get(_getPrototypeOf(MoreInfoClimate.prototype), "updated", this).call(this, changedProps);

        if (!changedProps.has("stateObj") || !this.stateObj) {
          return;
        }

        if (this._resizeDebounce) {
          clearTimeout(this._resizeDebounce);
        }

        this._resizeDebounce = window.setTimeout(function () {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_11__["fireEvent"])(_this2, "iron-resize");
          _this2._resizeDebounce = undefined;
        }, 500);
      }
    }, {
      kind: "method",
      key: "_targetTemperatureChanged",
      value: function _targetTemperatureChanged(ev) {
        var newVal = ev.target.value;

        this._callServiceHelper(this.stateObj.attributes.temperature, newVal, "set_temperature", {
          temperature: newVal
        });
      }
    }, {
      kind: "method",
      key: "_targetTemperatureLowChanged",
      value: function _targetTemperatureLowChanged(ev) {
        var newVal = ev.currentTarget.value;

        this._callServiceHelper(this.stateObj.attributes.target_temp_low, newVal, "set_temperature", {
          target_temp_low: newVal,
          target_temp_high: this.stateObj.attributes.target_temp_high
        });
      }
    }, {
      kind: "method",
      key: "_targetTemperatureHighChanged",
      value: function _targetTemperatureHighChanged(ev) {
        var newVal = ev.currentTarget.value;

        this._callServiceHelper(this.stateObj.attributes.target_temp_high, newVal, "set_temperature", {
          target_temp_low: this.stateObj.attributes.target_temp_low,
          target_temp_high: newVal
        });
      }
    }, {
      kind: "method",
      key: "_targetHumiditySliderChanged",
      value: function _targetHumiditySliderChanged(ev) {
        var newVal = ev.target.value;

        this._callServiceHelper(this.stateObj.attributes.humidity, newVal, "set_humidity", {
          humidity: newVal
        });
      }
    }, {
      kind: "method",
      key: "_auxToggleChanged",
      value: function _auxToggleChanged(ev) {
        var newVal = ev.target.checked;

        this._callServiceHelper(this.stateObj.attributes.aux_heat === "on", newVal, "set_aux_heat", {
          aux_heat: newVal
        });
      }
    }, {
      kind: "method",
      key: "_handleFanmodeChanged",
      value: function _handleFanmodeChanged(ev) {
        var newVal = ev.detail.value;

        this._callServiceHelper(this.stateObj.attributes.fan_mode, newVal, "set_fan_mode", {
          fan_mode: newVal
        });
      }
    }, {
      kind: "method",
      key: "_handleOperationmodeChanged",
      value: function _handleOperationmodeChanged(ev) {
        var newVal = ev.detail.value;

        this._callServiceHelper(this.stateObj.state, newVal, "set_hvac_mode", {
          hvac_mode: newVal
        });
      }
    }, {
      kind: "method",
      key: "_handleSwingmodeChanged",
      value: function _handleSwingmodeChanged(ev) {
        var newVal = ev.detail.value;

        this._callServiceHelper(this.stateObj.attributes.swing_mode, newVal, "set_swing_mode", {
          swing_mode: newVal
        });
      }
    }, {
      kind: "method",
      key: "_handlePresetmodeChanged",
      value: function _handlePresetmodeChanged(ev) {
        var newVal = ev.detail.value || null;

        this._callServiceHelper(this.stateObj.attributes.preset_mode, newVal, "set_preset_mode", {
          preset_mode: newVal
        });
      }
    }, {
      kind: "method",
      key: "_callServiceHelper",
      value: function _callServiceHelper(oldVal, newVal, service, data) {
        var curState;
        return regeneratorRuntime.async(function _callServiceHelper$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (!(oldVal === newVal)) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                data.entity_id = this.stateObj.entity_id;
                curState = this.stateObj;
                _context.next = 6;
                return regeneratorRuntime.awrap(this.hass.callService("climate", service, data));

              case 6:
                _context.next = 8;
                return regeneratorRuntime.awrap(new Promise(function (resolve) {
                  return setTimeout(resolve, 2000);
                }));

              case 8:
                if (!(this.stateObj !== curState)) {
                  _context.next = 10;
                  break;
                }

                return _context.abrupt("return");

              case 10:
                this.stateObj = undefined;
                _context.next = 13;
                return regeneratorRuntime.awrap(this.updateComplete);

              case 13:
                // Only restore if not set yet by a state change
                if (this.stateObj === undefined) {
                  this.stateObj = curState;
                }

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["css"])(_templateObject15());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_3__["LitElement"]);

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
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        p {\n          margin: 8px 0;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n\n        p > img {\n          max-width: 100%;\n        }\n\n        p.center {\n          text-align: center;\n        }\n\n        p.error {\n          color: #c62828;\n        }\n\n        p.submit {\n          text-align: center;\n          height: 41px;\n        }\n\n        paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      </style>\n\n      <div class=\"layout vertical\">\n        <template is=\"dom-if\" if=\"[[isConfigurable]]\">\n          <ha-markdown\n            content=\"[[stateObj.attributes.description]]\"\n          ></ha-markdown>\n\n          <p class=\"error\" hidden$=\"[[!stateObj.attributes.errors]]\">\n            [[stateObj.attributes.errors]]\n          </p>\n\n          <template is=\"dom-repeat\" items=\"[[stateObj.attributes.fields]]\">\n            <paper-input\n              label=\"[[item.name]]\"\n              name=\"[[item.id]]\"\n              type=\"[[item.type]]\"\n              on-change=\"fieldChanged\"\n            ></paper-input>\n          </template>\n\n          <p class=\"submit\" hidden$=\"[[!stateObj.attributes.submit_caption]]\">\n            <mwc-button\n              raised=\"\"\n              disabled=\"[[isConfiguring]]\"\n              on-click=\"submitClicked\"\n            >\n              <paper-spinner\n                active=\"[[isConfiguring]]\"\n                hidden=\"[[!isConfiguring]]\"\n                alt=\"Configuring\"\n              ></paper-spinner>\n              [[stateObj.attributes.submit_caption]]\n            </mwc-button>\n          </p>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var MoreInfoConfigurator =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoConfigurator, _PolymerElement);

  function MoreInfoConfigurator() {
    _classCallCheck(this, MoreInfoConfigurator);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoConfigurator).apply(this, arguments));
  }

  _createClass(MoreInfoConfigurator, [{
    key: "computeIsConfigurable",
    value: function computeIsConfigurable(stateObj) {
      return stateObj.state === "configure";
    }
  }, {
    key: "fieldChanged",
    value: function fieldChanged(ev) {
      var el = ev.target;
      this.fieldInput[el.name] = el.value;
    }
  }, {
    key: "submitClicked",
    value: function submitClicked() {
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
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
          value: function value() {
            return {};
          }
        }
      };
    }
  }]);

  return MoreInfoConfigurator;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

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
/* harmony import */ var _more_info_climate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-info-climate */ "./src/dialogs/more-info/controls/more-info-climate.ts");
/* harmony import */ var _more_info_configurator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info-configurator */ "./src/dialogs/more-info/controls/more-info-configurator.js");
/* harmony import */ var _more_info_counter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info-counter */ "./src/dialogs/more-info/controls/more-info-counter.ts");
/* harmony import */ var _more_info_cover__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-info-cover */ "./src/dialogs/more-info/controls/more-info-cover.js");
/* harmony import */ var _more_info_default__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-info-default */ "./src/dialogs/more-info/controls/more-info-default.js");
/* harmony import */ var _more_info_fan__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more-info-fan */ "./src/dialogs/more-info/controls/more-info-fan.js");
/* harmony import */ var _more_info_group__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./more-info-group */ "./src/dialogs/more-info/controls/more-info-group.js");
/* harmony import */ var _more_info_history_graph__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./more-info-history_graph */ "./src/dialogs/more-info/controls/more-info-history_graph.js");
/* harmony import */ var _more_info_input_datetime__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more-info-input_datetime */ "./src/dialogs/more-info/controls/more-info-input_datetime.js");
/* harmony import */ var _more_info_light__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./more-info-light */ "./src/dialogs/more-info/controls/more-info-light.js");
/* harmony import */ var _more_info_lock__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./more-info-lock */ "./src/dialogs/more-info/controls/more-info-lock.js");
/* harmony import */ var _more_info_media_player__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./more-info-media_player */ "./src/dialogs/more-info/controls/more-info-media_player.js");
/* harmony import */ var _more_info_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./more-info-script */ "./src/dialogs/more-info/controls/more-info-script.js");
/* harmony import */ var _more_info_sun__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./more-info-sun */ "./src/dialogs/more-info/controls/more-info-sun.ts");
/* harmony import */ var _more_info_timer__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./more-info-timer */ "./src/dialogs/more-info/controls/more-info-timer.ts");
/* harmony import */ var _more_info_updater__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./more-info-updater */ "./src/dialogs/more-info/controls/more-info-updater.js");
/* harmony import */ var _more_info_vacuum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./more-info-vacuum */ "./src/dialogs/more-info/controls/more-info-vacuum.js");
/* harmony import */ var _more_info_water_heater__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./more-info-water_heater */ "./src/dialogs/more-info/controls/more-info-water_heater.js");
/* harmony import */ var _more_info_weather__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./more-info-weather */ "./src/dialogs/more-info/controls/more-info-weather.ts");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



























var MoreInfoContent = _decorate(null, function (_initialize, _UpdatingElement) {
  var MoreInfoContent =
  /*#__PURE__*/
  function (_UpdatingElement2) {
    _inherits(MoreInfoContent, _UpdatingElement2);

    function MoreInfoContent() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoContent);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoContent;
  }(_UpdatingElement);

  return {
    F: MoreInfoContent,
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
      key: "_detachedChild",
      value: void 0
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated() {
        this.style.position = "relative";
        this.style.display = "block";
      } // This is not a lit element, but an updating element, so we implement update

    }, {
      kind: "method",
      key: "update",
      value: function update(changedProps) {
        _get(_getPrototypeOf(MoreInfoContent.prototype), "update", this).call(this, changedProps);

        var stateObj = this.stateObj;
        var hass = this.hass;

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

        var moreInfoType = stateObj.attributes && "custom_ui_more_info" in stateObj.attributes ? stateObj.attributes.custom_ui_more_info : "more-info-" + Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_23__["stateMoreInfoType"])(stateObj);
        Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_24__["default"])(this, moreInfoType.toUpperCase(), {
          hass: hass,
          stateObj: stateObj
        });
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]);

customElements.define("more-info-content", MoreInfoContent);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-counter.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-counter.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"actions\">\n        <mwc-button\n          .action=\"", "\"\n          @click=\"", "\"\n        >\n          ", "\n        </mwc-button>\n        <mwc-button\n          .action=\"", "\"\n          @click=\"", "\"\n        >\n          ", "\n        </mwc-button>\n        <mwc-button .action=\"", "\" @click=\"", "\">\n          ", "\n        </mwc-button>\n      </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var MoreInfoCounter = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("more-info-counter")], function (_initialize, _LitElement) {
  var MoreInfoCounter =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MoreInfoCounter, _LitElement2);

    function MoreInfoCounter() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoCounter);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoCounter)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoCounter;
  }(_LitElement);

  return {
    F: MoreInfoCounter,
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
        if (!this.hass || !this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), "increment", this._handleActionClick, this.hass.localize("ui.card.counter.actions.increment"), "decrement", this._handleActionClick, this.hass.localize("ui.card.counter.actions.decrement"), "reset", this._handleActionClick, this.hass.localize("ui.card.counter.actions.reset"));
      }
    }, {
      kind: "method",
      key: "_handleActionClick",
      value: function _handleActionClick(e) {
        var action = e.currentTarget.action;
        this.hass.callService("counter", action, {
          entity_id: this.stateObj.entity_id
        });
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

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
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .current_position,\n        .tilt {\n          max-height: 0px;\n          overflow: hidden;\n        }\n\n        .has-current_position .current_position,\n        .has-set_tilt_position .tilt,\n        .has-current_tilt_position .tilt {\n          max-height: 208px;\n        }\n\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"current_position\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.cover.position')]]\"\n            pin=\"\"\n            value=\"{{coverPositionSliderValue}}\"\n            disabled=\"[[!entityObj.supportsSetPosition]]\"\n            on-change=\"coverPositionSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"tilt\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.cover.tilt_position')]]\"\n            pin=\"\"\n            extra=\"\"\n            value=\"{{coverTiltPositionSliderValue}}\"\n            disabled=\"[[!entityObj.supportsSetTiltPosition]]\"\n            on-change=\"coverTiltPositionSliderChanged\"\n          >\n            <ha-cover-tilt-controls\n              slot=\"extra\"\n              hidden$=\"[[entityObj.isTiltOnly]]\"\n              hass=\"[[hass]]\"\n              state-obj=\"[[stateObj]]\"\n            ></ha-cover-tilt-controls>\n          </ha-labeled-slider>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var FEATURE_CLASS_NAMES = {
  128: "has-set_tilt_position"
};

var MoreInfoCover =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoCover, _LocalizeMixin);

  function MoreInfoCover() {
    _classCallCheck(this, MoreInfoCover);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoCover).apply(this, arguments));
  }

  _createClass(MoreInfoCover, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      if (newVal) {
        this.setProperties({
          coverPositionSliderValue: newVal.attributes.current_position,
          coverTiltPositionSliderValue: newVal.attributes.current_tilt_position
        });
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = [Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__["attributeClassNames"])(stateObj, ["current_position", "current_tilt_position"]), Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_7__["featureClassNames"])(stateObj, FEATURE_CLASS_NAMES)];
      return classes.join(" ");
    }
  }, {
    key: "coverPositionSliderChanged",
    value: function coverPositionSliderChanged(ev) {
      this.entityObj.setCoverPosition(ev.target.value);
    }
  }, {
    key: "coverTiltPositionSliderChanged",
    value: function coverTiltPositionSliderChanged(ev) {
      this.entityObj.setCoverTiltPosition(ev.target.value);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoCover;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-attributes state-obj=\"[[stateObj]]\"></ha-attributes>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MoreInfoDefault =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoDefault, _PolymerElement);

  function MoreInfoDefault() {
    _classCallCheck(this, MoreInfoDefault);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoDefault).apply(this, arguments));
  }

  _createClass(MoreInfoDefault, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoDefault;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

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
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .container-speed_list,\n        .container-direction,\n        .container-oscillating {\n          display: none;\n        }\n\n        .has-speed_list .container-speed_list,\n        .has-direction .container-direction,\n        .has-oscillating .container-oscillating {\n          display: block;\n        }\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"container-speed_list\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"[[localize('ui.card.fan.speed')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.speed]]\"\n              on-selected-changed=\"speedChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.speed_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <div class=\"container-oscillating\">\n          <div class=\"center horizontal layout single-row\">\n            <div class=\"flex\">[[localize('ui.card.fan.oscillate')]]</div>\n            <ha-switch\n              checked=\"[[oscillationToggleChecked]]\"\n              on-change=\"oscillationToggleChanged\"\n            >\n            </ha-switch>\n          </div>\n        </div>\n\n        <div class=\"container-direction\">\n          <div class=\"direction\">\n            <div>[[localize('ui.card.fan.direction')]]</div>\n            <paper-icon-button\n              icon=\"hass:rotate-left\"\n              on-click=\"onDirectionReverse\"\n              title=\"[[localize('ui.card.fan.reverse')]]\"\n              disabled=\"[[computeIsRotatingReverse(stateObj)]]\"\n            ></paper-icon-button>\n            <paper-icon-button\n              icon=\"hass:rotate-right\"\n              on-click=\"onDirectionForward\"\n              title=\"[[localize('ui.card.fan.forward')]]\"\n              disabled=\"[[computeIsRotatingForward(stateObj)]]\"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"speed,speed_list,oscillating,direction\"\n      ></ha-attributes>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













/*
 * @appliesMixin EventsMixin
 */

var MoreInfoFan =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoFan, _LocalizeMixin);

  function MoreInfoFan() {
    _classCallCheck(this, MoreInfoFan);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoFan).apply(this, arguments));
  }

  _createClass(MoreInfoFan, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      if (newVal) {
        this.setProperties({
          oscillationToggleChecked: newVal.attributes.oscillating
        });
      }

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return "more-info-fan " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["attributeClassNames"])(stateObj, ["oscillating", "speed_list", "direction"]);
    }
  }, {
    key: "speedChanged",
    value: function speedChanged(ev) {
      var oldVal = this.stateObj.attributes.speed;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("fan", "turn_on", {
        entity_id: this.stateObj.entity_id,
        speed: newVal
      });
    }
  }, {
    key: "oscillationToggleChanged",
    value: function oscillationToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.oscillating;
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.hass.callService("fan", "oscillate", {
        entity_id: this.stateObj.entity_id,
        oscillating: newVal
      });
    }
  }, {
    key: "onDirectionReverse",
    value: function onDirectionReverse() {
      this.hass.callService("fan", "set_direction", {
        entity_id: this.stateObj.entity_id,
        direction: "reverse"
      });
    }
  }, {
    key: "onDirectionForward",
    value: function onDirectionForward() {
      this.hass.callService("fan", "set_direction", {
        entity_id: this.stateObj.entity_id,
        direction: "forward"
      });
    }
  }, {
    key: "computeIsRotatingReverse",
    value: function computeIsRotatingReverse(stateObj) {
      return stateObj.attributes.direction === "reverse";
    }
  }, {
    key: "computeIsRotatingForward",
    value: function computeIsRotatingForward(stateObj) {
      return stateObj.attributes.direction === "forward";
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoFan;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .child-card {\n          margin-bottom: 8px;\n        }\n\n        .child-card:last-child {\n          margin-bottom: 0;\n        }\n      </style>\n\n      <div id=\"groupedControlDetails\"></div>\n      <template is=\"dom-repeat\" items=\"[[states]]\" as=\"state\">\n        <div class=\"child-card\">\n          <state-card-content\n            state-obj=\"[[state]]\"\n            hass=\"[[hass]]\"\n          ></state-card-content>\n        </div>\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MoreInfoGroup =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoGroup, _PolymerElement);

  function MoreInfoGroup() {
    _classCallCheck(this, MoreInfoGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoGroup).apply(this, arguments));
  }

  _createClass(MoreInfoGroup, [{
    key: "computeStates",
    value: function computeStates(stateObj, hass) {
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
  }, {
    key: "statesChanged",
    value: function statesChanged(stateObj, states) {
      var groupDomainStateObj = false;
      var groupDomain = false;

      if (states && states.length > 0) {
        var baseStateObj = states.find(function (s) {
          return s.state === "on";
        }) || states[0];
        groupDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(baseStateObj); // Groups need to be filtered out or we'll show content of
        // first child above the children of the current group

        if (groupDomain !== "group") {
          groupDomainStateObj = Object.assign({}, baseStateObj, {
            entity_id: stateObj.entity_id,
            attributes: Object.assign({}, baseStateObj.attributes)
          });

          for (var i = 0; i < states.length; i++) {
            if (groupDomain !== Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(states[i])) {
              groupDomainStateObj = false;
              break;
            }
          }
        }
      }

      if (!groupDomainStateObj) {
        var el = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this.$.groupedControlDetails);

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
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }, {
    key: "observers",
    get: function get() {
      return ["statesChanged(stateObj, states)"];
    }
  }]);

  return MoreInfoGroup;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          margin-bottom: 6px;\n        }\n      </style>\n      <ha-history_graph-card\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"\"\n      >\n        <ha-attributes state-obj=\"[[stateObj]]\"></ha-attributes>\n      </ha-history_graph-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MoreInfoHistoryGraph =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoHistoryGraph, _PolymerElement);

  function MoreInfoHistoryGraph() {
    _classCallCheck(this, MoreInfoHistoryGraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoHistoryGraph).apply(this, arguments));
  }

  _createClass(MoreInfoHistoryGraph, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return MoreInfoHistoryGraph;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

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
/* harmony import */ var _vaadin_vaadin_date_picker_theme_material_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/theme/material/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_paper_time_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/paper-time-input */ "./src/components/paper-time-input.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <template is=\"dom-if\" if=\"[[doesHaveDate(stateObj)]]\" restamp=\"\">\n          <div>\n            <vaadin-date-picker\n              id=\"dateInput\"\n              on-value-changed=\"dateTimeChanged\"\n              label=\"Date\"\n              value=\"{{selectedDate}}\"\n            ></vaadin-date-picker>\n          </div>\n        </template>\n        <template is=\"dom-if\" if=\"[[doesHaveTime(stateObj)]]\" restamp=\"\">\n          <div>\n            <paper-time-input\n              hour=\"{{selectedHour}}\"\n              min=\"{{selectedMinute}}\"\n              format=\"24\"\n            ></paper-time-input>\n          </div>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var DatetimeInput =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(DatetimeInput, _PolymerElement);

  _createClass(DatetimeInput, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }]);

  function DatetimeInput() {
    var _this;

    _classCallCheck(this, DatetimeInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatetimeInput).call(this));
    _this.is_ready = false;
    return _this;
  }

  _createClass(DatetimeInput, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(DatetimeInput.prototype), "ready", this).call(this);

      this.is_ready = true;
    }
    /* Convert the date in the stateObj into a string useable by vaadin-date-picker */

  }, {
    key: "getDateString",
    value: function getDateString(stateObj) {
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

  }, {
    key: "dateTimeChanged",
    value: function dateTimeChanged() {
      // Check if the change is really coming from the user
      if (!this.is_ready) {
        return;
      }

      var changed = false;
      var minuteFiller;
      var serviceData = {
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

        var dateValInput = new Date(this.selectedDate);
        var dateValState = new Date(this.stateObj.attributes.year, this.stateObj.attributes.month - 1, this.stateObj.attributes.day);
        changed |= dateValState !== dateValInput;
        serviceData.date = this.selectedDate;
      }

      if (changed) {
        this.hass.callService("input_datetime", "set_datetime", serviceData);
      }
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
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
  }, {
    key: "doesHaveDate",
    value: function doesHaveDate(stateObj) {
      return stateObj.attributes.has_date;
    }
  }, {
    key: "doesHaveTime",
    value: function doesHaveTime(stateObj) {
      return stateObj.attributes.has_time;
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return "more-info-input_datetime " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__["attributeClassNames"])(stateObj, ["has_time", "has_date"]);
    }
  }], [{
    key: "properties",
    get: function get() {
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
  }]);

  return DatetimeInput;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .effect_list,\n        .brightness,\n        .color_temp,\n        .white_value {\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .color_temp {\n          --ha-slider-background: -webkit-linear-gradient(\n            right,\n            rgb(255, 160, 0) 0%,\n            white 50%,\n            rgb(166, 209, 255) 100%\n          );\n          /* The color temp minimum value shouldn't be rendered differently. It's not \"off\". */\n          --paper-slider-knob-start-border-color: var(--primary-color);\n        }\n\n        .segmentationContainer {\n          position: relative;\n          width: 100%;\n        }\n\n        ha-color-picker {\n          display: block;\n          width: 100%;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          padding: 0px;\n          max-height: 0px;\n          width: 23px;\n          height: 23px;\n          opacity: var(--dark-secondary-opacity);\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-color.is-on .segmentationContainer .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          width: 23px;\n          height: 23px;\n          padding: 0px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        .has-effect_list.is-on .effect_list,\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          max-height: 84px;\n        }\n\n        .has-brightness .has-color_temp.is-on,\n        .has-white_value.is-on {\n          margin-top: -16px;\n        }\n\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          padding-top: 16px;\n        }\n\n        .has-color.is-on .segmentationButton {\n          max-height: 100px;\n          overflow: visible;\n        }\n\n        .has-color.is-on ha-color-picker {\n          max-height: 500px;\n          overflow: visible;\n          --ha-color-picker-wheel-borderwidth: 5;\n          --ha-color-picker-wheel-bordercolor: white;\n          --ha-color-picker-wheel-shadow: none;\n          --ha-color-picker-marker-borderwidth: 2;\n          --ha-color-picker-marker-bordercolor: white;\n        }\n\n        .is-unavailable .control {\n          max-height: 0px;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"control brightness\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.brightness')]]\"\n            icon=\"hass:brightness-5\"\n            min=\"1\"\n            max=\"255\"\n            value=\"{{brightnessSliderValue}}\"\n            on-change=\"brightnessSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"control color_temp\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.color_temperature')]]\"\n            icon=\"hass:thermometer\"\n            min=\"[[stateObj.attributes.min_mireds]]\"\n            max=\"[[stateObj.attributes.max_mireds]]\"\n            value=\"{{ctSliderValue}}\"\n            on-change=\"ctSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"control white_value\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.white_value')]]\"\n            icon=\"hass:file-word-box\"\n            max=\"255\"\n            value=\"{{wvSliderValue}}\"\n            on-change=\"wvSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n        <div class=\"segmentationContainer\">\n          <ha-color-picker\n            class=\"control color\"\n            on-colorselected=\"colorPicked\"\n            desired-hs-color=\"{{colorPickerColor}}\"\n            throttle=\"500\"\n            hue-segments=\"{{hueSegments}}\"\n            saturation-segments=\"{{saturationSegments}}\"\n          >\n          </ha-color-picker>\n          <paper-icon-button\n            icon=\"mdi:palette\"\n            on-click=\"segmentClick\"\n            class=\"control segmentationButton\"\n          ></paper-icon-button>\n        </div>\n\n        <div class=\"control effect_list\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"[[localize('ui.card.light.effect')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.effect]]\"\n              on-selected-changed=\"effectChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.effect_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <ha-attributes\n          state-obj=\"[[stateObj]]\"\n          extra-filters=\"brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds\"\n        ></ha-attributes>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













var FEATURE_CLASS_NAMES = {
  1: "has-brightness",
  2: "has-color_temp",
  4: "has-effect_list",
  16: "has-color",
  128: "has-white_value"
};
/*
 * @appliesMixin EventsMixin
 */

var MoreInfoLight =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoLight, _LocalizeMixin);

  function MoreInfoLight() {
    _classCallCheck(this, MoreInfoLight);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoLight).apply(this, arguments));
  }

  _createClass(MoreInfoLight, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      var props = {
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
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__["featureClassNames"])(stateObj, FEATURE_CLASS_NAMES)];

      if (stateObj && stateObj.state === "on") {
        classes.push("is-on");
      }

      if (stateObj && stateObj.state === "unavailable") {
        classes.push("is-unavailable");
      }

      return classes.join(" ");
    }
  }, {
    key: "effectChanged",
    value: function effectChanged(ev) {
      var oldVal = this.stateObj.attributes.effect;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        effect: newVal
      });
    }
  }, {
    key: "brightnessSliderChanged",
    value: function brightnessSliderChanged(ev) {
      var bri = parseInt(ev.target.value, 10);
      if (isNaN(bri)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        brightness: bri
      });
    }
  }, {
    key: "ctSliderChanged",
    value: function ctSliderChanged(ev) {
      var ct = parseInt(ev.target.value, 10);
      if (isNaN(ct)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        color_temp: ct
      });
    }
  }, {
    key: "wvSliderChanged",
    value: function wvSliderChanged(ev) {
      var wv = parseInt(ev.target.value, 10);
      if (isNaN(wv)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        white_value: wv
      });
    }
  }, {
    key: "segmentClick",
    value: function segmentClick() {
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
  }, {
    key: "serviceChangeColor",
    value: function serviceChangeColor(hass, entityId, color) {
      hass.callService("light", "turn_on", {
        entity_id: entityId,
        hs_color: [color.h, color.s * 100]
      });
    }
    /**
     * Called when a new color has been picked.
     * should be throttled with the 'throttle=' attribute of the color picker
     */

  }, {
    key: "colorPicked",
    value: function colorPicked(ev) {
      this.serviceChangeColor(this.hass, this.stateObj.entity_id, ev.detail.hs);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoLight;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-input {\n          display: inline-block;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[stateObj.attributes.code_format]]\">\n        <paper-input\n          label=\"[[localize('ui.card.lock.code')]]\"\n          value=\"{{enteredCode}}\"\n          pattern=\"[[stateObj.attributes.code_format]]\"\n          type=\"password\"\n        ></paper-input>\n        <mwc-button\n          on-click=\"callService\"\n          data-service=\"unlock\"\n          hidden$=\"[[!isLocked]]\"\n          >[[localize('ui.card.lock.unlock')]]</mwc-button\n        >\n        <mwc-button\n          on-click=\"callService\"\n          data-service=\"lock\"\n          hidden$=\"[[isLocked]]\"\n          >[[localize('ui.card.lock.lock')]]</mwc-button\n        >\n      </template>\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"code_format\"\n      ></ha-attributes>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/*
 * @appliesMixin LocalizeMixin
 */

var MoreInfoLock =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoLock, _LocalizeMixin);

  function MoreInfoLock() {
    _classCallCheck(this, MoreInfoLock);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoLock).apply(this, arguments));
  }

  _createClass(MoreInfoLock, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      if (newVal) {
        this.isLocked = newVal.state === "locked";
      }
    }
  }, {
    key: "callService",
    value: function callService(ev) {
      var service = ev.target.getAttribute("data-service");
      var data = {
        entity_id: this.stateObj.entity_id,
        code: this.enteredCode
      };
      this.hass.callService("lock", service, data);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoLock;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .media-state {\n          text-transform: capitalize;\n        }\n\n        paper-icon-button[highlight] {\n          color: var(--accent-color);\n        }\n\n        .volume {\n          margin-bottom: 8px;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-volume_level .volume {\n          max-height: 40px;\n        }\n\n        iron-icon.source-input {\n          padding: 7px;\n          margin-top: 15px;\n        }\n\n        ha-paper-dropdown-menu.source-input {\n          margin-left: 10px;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"layout horizontal\">\n          <div class=\"flex\">\n            <paper-icon-button\n              icon=\"hass:power\"\n              highlight$=\"[[playerObj.isOff]]\"\n              on-click=\"handleTogglePower\"\n              hidden$=\"[[computeHidePowerButton(playerObj)]]\"\n            ></paper-icon-button>\n          </div>\n          <div>\n            <template\n              is=\"dom-if\"\n              if=\"[[computeShowPlaybackControls(playerObj)]]\"\n            >\n              <paper-icon-button\n                icon=\"hass:skip-previous\"\n                on-click=\"handlePrevious\"\n                hidden$=\"[[!playerObj.supportsPreviousTrack]]\"\n              ></paper-icon-button>\n              <paper-icon-button\n                icon=\"[[computePlaybackControlIcon(playerObj)]]\"\n                on-click=\"handlePlaybackControl\"\n                hidden$=\"[[!computePlaybackControlIcon(playerObj)]]\"\n                highlight=\"\"\n              ></paper-icon-button>\n              <paper-icon-button\n                icon=\"hass:skip-next\"\n                on-click=\"handleNext\"\n                hidden$=\"[[!playerObj.supportsNextTrack]]\"\n              ></paper-icon-button>\n            </template>\n          </div>\n        </div>\n        <!-- VOLUME -->\n        <div\n          class=\"volume_buttons center horizontal layout\"\n          hidden$=\"[[computeHideVolumeButtons(playerObj)]]\"\n        >\n          <paper-icon-button\n            on-click=\"handleVolumeTap\"\n            icon=\"hass:volume-off\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"volumeDown\"\n            disabled$=\"[[playerObj.isMuted]]\"\n            on-mousedown=\"handleVolumeDown\"\n            on-touchstart=\"handleVolumeDown\"\n            on-touchend=\"handleVolumeTouchEnd\"\n            icon=\"hass:volume-medium\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"volumeUp\"\n            disabled$=\"[[playerObj.isMuted]]\"\n            on-mousedown=\"handleVolumeUp\"\n            on-touchstart=\"handleVolumeUp\"\n            on-touchend=\"handleVolumeTouchEnd\"\n            icon=\"hass:volume-high\"\n          ></paper-icon-button>\n        </div>\n        <div\n          class=\"volume center horizontal layout\"\n          hidden$=\"[[!playerObj.supportsVolumeSet]]\"\n        >\n          <paper-icon-button\n            on-click=\"handleVolumeTap\"\n            hidden$=\"[[playerObj.supportsVolumeButtons]]\"\n            icon=\"[[computeMuteVolumeIcon(playerObj)]]\"\n          ></paper-icon-button>\n          <ha-paper-slider\n            disabled$=\"[[playerObj.isMuted]]\"\n            min=\"0\"\n            max=\"100\"\n            value=\"[[playerObj.volumeSliderValue]]\"\n            on-change=\"volumeSliderChanged\"\n            class=\"flex\"\n            ignore-bar-touch=\"\"\n            dir=\"{{rtl}}\"\n          >\n          </ha-paper-slider>\n        </div>\n        <!-- SOURCE PICKER -->\n        <div\n          class=\"controls layout horizontal justified\"\n          hidden$=\"[[computeHideSelectSource(playerObj)]]\"\n        >\n          <iron-icon class=\"source-input\" icon=\"hass:login-variant\"></iron-icon>\n          <ha-paper-dropdown-menu\n            class=\"flex source-input\"\n            dynamic-align=\"\"\n            label-float=\"\"\n            label=\"[[localize('ui.card.media_player.source')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              attr-for-selected=\"item-name\"\n              selected=\"[[playerObj.source]]\"\n              on-selected-changed=\"handleSourceChanged\"\n            >\n              <template is=\"dom-repeat\" items=\"[[playerObj.sourceList]]\">\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n        <!-- SOUND MODE PICKER -->\n        <template is=\"dom-if\" if=\"[[!computeHideSelectSoundMode(playerObj)]]\">\n          <div class=\"controls layout horizontal justified\">\n            <iron-icon class=\"source-input\" icon=\"hass:music-note\"></iron-icon>\n            <ha-paper-dropdown-menu\n              class=\"flex source-input\"\n              dynamic-align\n              label-float\n              label=\"[[localize('ui.card.media_player.sound_mode')]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                attr-for-selected=\"item-name\"\n                selected=\"[[playerObj.soundMode]]\"\n                on-selected-changed=\"handleSoundModeChanged\"\n              >\n                <template is=\"dom-repeat\" items=\"[[playerObj.soundModeList]]\">\n                  <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n                </template>\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </template>\n        <!-- TTS -->\n        <div\n          hidden$=\"[[computeHideTTS(ttsLoaded, playerObj)]]\"\n          class=\"layout horizontal end\"\n        >\n          <paper-input\n            id=\"ttsInput\"\n            label=\"[[localize('ui.card.media_player.text_to_speak')]]\"\n            class=\"flex\"\n            value=\"{{ttsMessage}}\"\n            on-keydown=\"ttsCheckForEnter\"\n          ></paper-input>\n          <paper-icon-button\n            icon=\"hass:send\"\n            on-click=\"sendTTS\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var MoreInfoMediaPlayer =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoMediaPlayer, _LocalizeMixin);

  function MoreInfoMediaPlayer() {
    _classCallCheck(this, MoreInfoMediaPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoMediaPlayer).apply(this, arguments));
  }

  _createClass(MoreInfoMediaPlayer, [{
    key: "computePlayerObj",
    value: function computePlayerObj(hass, stateObj) {
      return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__["default"](hass, stateObj);
    }
  }, {
    key: "playerObjChanged",
    value: function playerObjChanged(newVal, oldVal) {
      var _this = this;

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["attributeClassNames"])(stateObj, ["volume_level"]);
    }
  }, {
    key: "computeMuteVolumeIcon",
    value: function computeMuteVolumeIcon(playerObj) {
      return playerObj.isMuted ? "hass:volume-off" : "hass:volume-high";
    }
  }, {
    key: "computeHideVolumeButtons",
    value: function computeHideVolumeButtons(playerObj) {
      return !playerObj.supportsVolumeButtons || playerObj.isOff;
    }
  }, {
    key: "computeShowPlaybackControls",
    value: function computeShowPlaybackControls(playerObj) {
      return !playerObj.isOff && playerObj.hasMediaControl;
    }
  }, {
    key: "computePlaybackControlIcon",
    value: function computePlaybackControlIcon(playerObj) {
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
  }, {
    key: "computeHidePowerButton",
    value: function computeHidePowerButton(playerObj) {
      return playerObj.isOff ? !playerObj.supportsTurnOn : !playerObj.supportsTurnOff;
    }
  }, {
    key: "computeHideSelectSource",
    value: function computeHideSelectSource(playerObj) {
      return playerObj.isOff || !playerObj.supportsSelectSource || !playerObj.sourceList;
    }
  }, {
    key: "computeHideSelectSoundMode",
    value: function computeHideSelectSoundMode(playerObj) {
      return playerObj.isOff || !playerObj.supportsSelectSoundMode || !playerObj.soundModeList;
    }
  }, {
    key: "computeHideTTS",
    value: function computeHideTTS(ttsLoaded, playerObj) {
      return !ttsLoaded || !playerObj.supportsPlayMedia;
    }
  }, {
    key: "computeTTSLoaded",
    value: function computeTTSLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__["isComponentLoaded"])(hass, "tts");
    }
  }, {
    key: "handleTogglePower",
    value: function handleTogglePower() {
      this.playerObj.togglePower();
    }
  }, {
    key: "handlePrevious",
    value: function handlePrevious() {
      this.playerObj.previousTrack();
    }
  }, {
    key: "handlePlaybackControl",
    value: function handlePlaybackControl() {
      this.playerObj.mediaPlayPause();
    }
  }, {
    key: "handleNext",
    value: function handleNext() {
      this.playerObj.nextTrack();
    }
  }, {
    key: "handleSourceChanged",
    value: function handleSourceChanged(ev) {
      if (!this.playerObj) return;
      var oldVal = this.playerObj.source;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.playerObj.selectSource(newVal);
    }
  }, {
    key: "handleSoundModeChanged",
    value: function handleSoundModeChanged(ev) {
      if (!this.playerObj) return;
      var oldVal = this.playerObj.soundMode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.playerObj.selectSoundMode(newVal);
    }
  }, {
    key: "handleVolumeTap",
    value: function handleVolumeTap() {
      if (!this.playerObj.supportsVolumeMute) {
        return;
      }

      this.playerObj.volumeMute(!this.playerObj.isMuted);
    }
  }, {
    key: "handleVolumeTouchEnd",
    value: function handleVolumeTouchEnd(ev) {
      /* when touch ends, we must prevent this from
       * becoming a mousedown, up, click by emulation */
      ev.preventDefault();
    }
  }, {
    key: "handleVolumeUp",
    value: function handleVolumeUp() {
      var obj = this.$.volumeUp;
      this.handleVolumeWorker("volume_up", obj, true);
    }
  }, {
    key: "handleVolumeDown",
    value: function handleVolumeDown() {
      var obj = this.$.volumeDown;
      this.handleVolumeWorker("volume_down", obj, true);
    }
  }, {
    key: "handleVolumeWorker",
    value: function handleVolumeWorker(service, obj, force) {
      var _this2 = this;

      if (force || obj !== undefined && obj.pointerDown) {
        this.playerObj.callService(service);
        setTimeout(function () {
          return _this2.handleVolumeWorker(service, obj, false);
        }, 500);
      }
    }
  }, {
    key: "volumeSliderChanged",
    value: function volumeSliderChanged(ev) {
      var volPercentage = parseFloat(ev.target.value);
      var volume = volPercentage > 0 ? volPercentage / 100 : 0;
      this.playerObj.setVolume(volume);
    }
  }, {
    key: "ttsCheckForEnter",
    value: function ttsCheckForEnter(ev) {
      if (ev.keyCode === 13) this.sendTTS();
    }
  }, {
    key: "sendTTS",
    value: function sendTTS() {
      var services = this.hass.services.tts;
      var serviceKeys = Object.keys(services).sort();
      var service;
      var i;

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
  }, {
    key: "_computeRTLDirection",
    value: function _computeRTLDirection(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTLDirection"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoMediaPlayer;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n\n      <div class=\"layout vertical\">\n        <div class=\"data-entry layout justified horizontal\">\n          <div class=\"key\">\n            [[localize('ui.dialogs.more_info_control.script.last_action')]]\n          </div>\n          <div class=\"value\">[[stateObj.attributes.last_action]]</div>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var MoreInfoScript =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoScript, _LocalizeMixin);

  function MoreInfoScript() {
    _classCallCheck(this, MoreInfoScript);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoScript).apply(this, arguments));
  }

  _createClass(MoreInfoScript, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoScript;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-script", MoreInfoScript);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-sun.ts":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-sun.ts ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      .row {\n        margin: 0 8px;\n        display: flex;\n        flex-direction: row;\n        justify-content: space-between;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          <div class=\"row\">\n            <div class=\"key\">\n              <span\n                >", "</span\n              >\n              <ha-relative-time\n                .hass=", "\n                .datetimeObj=", "\n              ></ha-relative-time>\n            </div>\n            <div class=\"value\">\n              ", "\n            </div>\n          </div>\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      <div class=\"row\">\n        <div class=\"key\">\n          ", "\n        </div>\n        <div class=\"value\">", "</div>\n      </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }





var MoreInfoSun = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("more-info-sun")], function (_initialize, _LitElement) {
  var MoreInfoSun =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MoreInfoSun, _LitElement2);

    function MoreInfoSun() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoSun);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoSun)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoSun;
  }(_LitElement);

  return {
    F: MoreInfoSun,
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
        var _this2 = this;

        if (!this.hass || !this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        var risingDate = new Date(this.stateObj.attributes.next_rising);
        var settingDate = new Date(this.stateObj.attributes.next_setting);
        var order = risingDate > settingDate ? ["set", "ris"] : ["ris", "set"];
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), order.map(function (item) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), item === "ris" ? _this2.hass.localize("ui.dialogs.more_info_control.sun.rising") : _this2.hass.localize("ui.dialogs.more_info_control.sun.setting"), _this2.hass, item === "ris" ? risingDate : settingDate, Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_2__["default"])(item === "ris" ? risingDate : settingDate, _this2.hass.language));
        }), this.hass.localize("ui.dialogs.more_info_control.sun.elevation"), this.stateObj.attributes.elevation);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-timer.ts":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-timer.ts ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n      .actions {\n        margin: 0 8px;\n        padding-top: 20px;\n        display: flex;\n        flex-wrap: wrap;\n        justify-content: center;\n      }\n    "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              <mwc-button\n                .action=\"", "\"\n                @click=\"", "\"\n              >\n                ", "\n              </mwc-button>\n            "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-attributes\n        .stateObj=", "\n        .extraFilters=", "\n      ></ha-attributes>\n      <div class=\"actions\">\n        ", "\n        ", "\n        ", "\n      </div>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var MoreInfoTimer = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("more-info-timer")], function (_initialize, _LitElement) {
  var MoreInfoTimer =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MoreInfoTimer, _LitElement2);

    function MoreInfoTimer() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoTimer);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoTimer)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoTimer;
  }(_LitElement);

  return {
    F: MoreInfoTimer,
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
        if (!this.hass || !this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.stateObj, "remaining", this.stateObj.state === "idle" || this.stateObj.state === "paused" ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), "start", this._handleActionClick, this.hass.localize("ui.card.timer.actions.start")) : "", this.stateObj.state === "active" ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), "pause", this._handleActionClick, this.hass.localize("ui.card.timer.actions.pause")) : "", this.stateObj.state === "active" || this.stateObj.state === "paused" ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), "cancel", this._handleActionClick, this.hass.localize("ui.card.timer.actions.cancel"), "finish", this._handleActionClick, this.hass.localize("ui.card.timer.actions.finish")) : "");
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(MoreInfoTimer.prototype), "updated", this).call(this, changedProps);

        if (!changedProps.has("stateObj") || !this.stateObj) {
          return;
        }
      }
    }, {
      kind: "method",
      key: "_handleActionClick",
      value: function _handleActionClick(e) {
        var action = e.currentTarget.action;
        this.hass.callService("timer", action, {
          entity_id: this.stateObj.entity_id
        });
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject6());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .link {\n          color: #03a9f4;\n        }\n      </style>\n\n      <div>\n        <a\n          class=\"link\"\n          href=\"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/docs/installation/updating/\"\n          target=\"_blank\"\n          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a\n        >\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MoreInfoUpdater =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoUpdater, _LocalizeMixin);

  function MoreInfoUpdater() {
    _classCallCheck(this, MoreInfoUpdater);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoUpdater).apply(this, arguments));
  }

  _createClass(MoreInfoUpdater, [{
    key: "computeReleaseNotes",
    value: function computeReleaseNotes(stateObj) {
      return stateObj.attributes.release_notes || "https://www.home-assistant.io/docs/installation/updating/";
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoUpdater;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        .status-subtitle {\n          color: var(--secondary-text-color);\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        <div hidden$=\"[[!supportsStatus(stateObj)]]\">\n          <span class=\"status-subtitle\">Status: </span\n          ><span><strong>[[stateObj.attributes.status]]</strong></span>\n        </div>\n        <div hidden$=\"[[!supportsBattery(stateObj)]]\">\n          <span\n            ><iron-icon icon=\"[[stateObj.attributes.battery_icon]]\"></iron-icon>\n            [[stateObj.attributes.battery_level]] %</span\n          >\n        </div>\n      </div>\n      <div hidden$=\"[[!supportsCommandBar(stateObj)]]\">\n        <p></p>\n        <div class=\"status-subtitle\">Vacuum cleaner commands:</div>\n        <div class=\"horizontal justified layout\">\n          <template is=\"dom-if\" if=\"[[supportsStart(stateObj)]]\">\n            <div>\n              <paper-icon-button\n                icon=\"hass:play\"\n                on-click=\"onStart\"\n                title=\"Start\"\n              ></paper-icon-button>\n            </div>\n            <div hidden$=\"[[!supportsPause(stateObj)]]\">\n              <paper-icon-button\n                icon=\"hass:pause\"\n                on-click=\"onPause\"\n                title=\"Pause\"\n              ></paper-icon-button>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!supportsStart(stateObj)]]\">\n            <div hidden$=\"[[!supportsPause(stateObj)]]\">\n              <paper-icon-button\n                icon=\"hass:play-pause\"\n                on-click=\"onPlayPause\"\n                title=\"Pause\"\n              ></paper-icon-button>\n            </div>\n          </template>\n\n          <div hidden$=\"[[!supportsStop(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:stop\"\n              on-click=\"onStop\"\n              title=\"Stop\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsCleanSpot(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:broom\"\n              on-click=\"onCleanSpot\"\n              title=\"Clean spot\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsLocate(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:map-marker\"\n              on-click=\"onLocate\"\n              title=\"Locate\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsReturnHome(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:home-map-marker\"\n              on-click=\"onReturnHome\"\n              title=\"Return home\"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <div hidden$=\"[[!supportsFanSpeed(stateObj)]]\">\n        <div class=\"horizontal justified layout\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"Fan speed\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.fan_speed]]\"\n              on-selected-changed=\"fanSpeedChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.fan_speed_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n          <div\n            style=\"justify-content: center; align-self: center; padding-top: 1.3em\"\n          >\n            <span\n              ><iron-icon icon=\"hass:fan\"></iron-icon>\n              [[stateObj.attributes.fan_speed]]</span\n            >\n          </div>\n        </div>\n        <p></p>\n      </div>\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"fan_speed,fan_speed_list,status,battery_level,battery_icon\"\n      ></ha-attributes>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }












var MoreInfoVacuum =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoVacuum, _PolymerElement);

  function MoreInfoVacuum() {
    _classCallCheck(this, MoreInfoVacuum);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoVacuum).apply(this, arguments));
  }

  _createClass(MoreInfoVacuum, [{
    key: "supportsPause",
    value: function supportsPause(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4);
    }
  }, {
    key: "supportsStop",
    value: function supportsStop(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8);
    }
  }, {
    key: "supportsReturnHome",
    value: function supportsReturnHome(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16);
    }
  }, {
    key: "supportsFanSpeed",
    value: function supportsFanSpeed(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 32);
    }
  }, {
    key: "supportsBattery",
    value: function supportsBattery(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 64);
    }
  }, {
    key: "supportsStatus",
    value: function supportsStatus(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 128);
    }
  }, {
    key: "supportsLocate",
    value: function supportsLocate(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512);
    }
  }, {
    key: "supportsCleanSpot",
    value: function supportsCleanSpot(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024);
    }
  }, {
    key: "supportsStart",
    value: function supportsStart(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
    }
  }, {
    key: "supportsCommandBar",
    value: function supportsCommandBar(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
    }
  }, {
    key: "fanSpeedChanged",
    value: function fanSpeedChanged(ev) {
      var oldVal = this.stateObj.attributes.fan_speed;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("vacuum", "set_fan_speed", {
        entity_id: this.stateObj.entity_id,
        fan_speed: newVal
      });
    }
  }, {
    key: "onStop",
    value: function onStop() {
      this.hass.callService("vacuum", "stop", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onPlayPause",
    value: function onPlayPause() {
      this.hass.callService("vacuum", "start_pause", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.hass.callService("vacuum", "pause", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this.hass.callService("vacuum", "start", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onLocate",
    value: function onLocate() {
      this.hass.callService("vacuum", "locate", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onCleanSpot",
    value: function onCleanSpot() {
      this.hass.callService("vacuum", "clean_spot", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onReturnHome",
    value: function onReturnHome() {
      this.hass.callService("vacuum", "return_to_base", {
        entity_id: this.stateObj.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoVacuum;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

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
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_water_heater_control__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-water_heater-control */ "./src/components/ha-water_heater-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _components_ha_switch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-switch */ "./src/components/ha-switch.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          color: var(--primary-text-color);\n        }\n\n        .container-away_mode,\n        .container-temperature,\n        .container-operation_list,\n\n        .has-away_mode .container-away_mode,\n        .has-target_temperature .container-temperature,\n        .has-operation_mode .container-operation_list,\n\n        .container-operation_list iron-icon,\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        ha-paper-slider {\n          width: 100%;\n        }\n\n        ha-water_heater-control.range-control-left,\n        ha-water_heater-control.range-control-right {\n          float: left;\n          width: 46%;\n        }\n        ha-water_heater-control.range-control-left {\n          margin-right: 4%;\n        }\n        ha-water_heater-control.range-control-right {\n          margin-left: 4%;\n        }\n\n        .single-row {\n          padding: 8px 0;\n        }\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"container-temperature\">\n          <div class$=\"[[stateObj.attributes.operation_mode]]\">\n            <div hidden$=\"[[!supportsTemperatureControls(stateObj)]]\">\n              [[localize('ui.card.water_heater.target_temperature')]]\n            </div>\n            <template is=\"dom-if\" if=\"[[supportsTemperature(stateObj)]]\">\n              <ha-water_heater-control\n                value=\"[[stateObj.attributes.temperature]]\"\n                units=\"[[hass.config.unit_system.temperature]]\"\n                step=\"[[computeTemperatureStepSize(hass, stateObj)]]\"\n                min=\"[[stateObj.attributes.min_temp]]\"\n                max=\"[[stateObj.attributes.max_temp]]\"\n                on-change=\"targetTemperatureChanged\"\n              >\n              </ha-water_heater-control>\n            </template>\n          </div>\n        </div>\n\n        <template is=\"dom-if\" if=\"[[supportsOperationMode(stateObj)]]\">\n          <div class=\"container-operation_list\">\n            <div class=\"controls\">\n              <ha-paper-dropdown-menu\n                label-float=\"\"\n                dynamic-align=\"\"\n                label=\"[[localize('ui.card.water_heater.operation')]]\"\n              >\n                <paper-listbox\n                  slot=\"dropdown-content\"\n                  selected=\"[[stateObj.attributes.operation_mode]]\"\n                  attr-for-selected=\"item-name\"\n                  on-selected-changed=\"handleOperationmodeChanged\"\n                >\n                  <template\n                    is=\"dom-repeat\"\n                    items=\"[[stateObj.attributes.operation_list]]\"\n                  >\n                    <paper-item item-name$=\"[[item]]\"\n                      >[[_localizeOperationMode(localize, item)]]</paper-item\n                    >\n                  </template>\n                </paper-listbox>\n              </ha-paper-dropdown-menu>\n            </div>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsAwayMode(stateObj)]]\">\n          <div class=\"container-away_mode\">\n            <div class=\"center horizontal layout single-row\">\n              <div class=\"flex\">\n                [[localize('ui.card.water_heater.away_mode')]]\n              </div>\n              <ha-switch\n                checked=\"[[awayToggleChecked]]\"\n                on-change=\"awayToggleChanged\"\n              >\n              </ha-switch>\n            </div>\n          </div>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var MoreInfoWaterHeater =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoWaterHeater, _LocalizeMixin);

  function MoreInfoWaterHeater() {
    _classCallCheck(this, MoreInfoWaterHeater);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoWaterHeater).apply(this, arguments));
  }

  _createClass(MoreInfoWaterHeater, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      if (newVal) {
        this.setProperties({
          awayToggleChecked: newVal.attributes.away_mode === "on"
        });
      }

      if (oldVal) {
        this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_3__["timeOut"].after(500), function () {
          _this.fire("iron-resize");
        });
      }
    }
  }, {
    key: "computeTemperatureStepSize",
    value: function computeTemperatureStepSize(hass, stateObj) {
      if (stateObj.attributes.target_temp_step) {
        return stateObj.attributes.target_temp_step;
      }

      if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
        return 1;
      }

      return 0.5;
    }
  }, {
    key: "supportsTemperatureControls",
    value: function supportsTemperatureControls(stateObj) {
      return this.supportsTemperature(stateObj);
    }
  }, {
    key: "supportsTemperature",
    value: function supportsTemperature(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 1) && typeof stateObj.attributes.temperature === "number";
    }
  }, {
    key: "supportsOperationMode",
    value: function supportsOperationMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 2);
    }
  }, {
    key: "supportsAwayMode",
    value: function supportsAwayMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_11__["supportsFeature"])(stateObj, 4);
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var _featureClassNames = {
        1: "has-target_temperature",
        2: "has-operation_mode",
        4: "has-away_mode"
      };
      var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_13__["featureClassNames"])(stateObj, _featureClassNames)];
      classes.push("more-info-water_heater");
      return classes.join(" ");
    }
  }, {
    key: "targetTemperatureChanged",
    value: function targetTemperatureChanged(ev) {
      var temperature = ev.target.value;
      if (temperature === this.stateObj.attributes.temperature) return;
      this.callServiceHelper("set_temperature", {
        temperature: temperature
      });
    }
  }, {
    key: "awayToggleChanged",
    value: function awayToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.away_mode === "on";
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.callServiceHelper("set_away_mode", {
        away_mode: newVal
      });
    }
  }, {
    key: "handleOperationmodeChanged",
    value: function handleOperationmodeChanged(ev) {
      var oldVal = this.stateObj.attributes.operation_mode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.callServiceHelper("set_operation_mode", {
        operation_mode: newVal
      });
    }
  }, {
    key: "callServiceHelper",
    value: function callServiceHelper(service, data) {
      var _this2 = this;

      // We call stateChanged after a successful call to re-sync the inputs
      // with the state. It will be out of sync if our service call did not
      // result in the entity to be turned on. Since the state is not changing,
      // the resync is not called automatic.

      /* eslint-disable no-param-reassign */
      data.entity_id = this.stateObj.entity_id;
      /* eslint-enable no-param-reassign */

      this.hass.callService("water_heater", service, data).then(function () {
        _this2.stateObjChanged(_this2.stateObj);
      });
    }
  }, {
    key: "_localizeOperationMode",
    value: function _localizeOperationMode(localize, mode) {
      return localize("state.water_heater.".concat(mode)) || mode;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoWaterHeater;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])));

customElements.define("more-info-water_heater", MoreInfoWaterHeater);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-weather.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-weather.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-html */ "./node_modules/lit-html/lit-html.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject13() {
  var data = _taggedTemplateLiteral(["\n      iron-icon {\n        color: var(--paper-item-icon-color);\n      }\n      .section {\n        margin: 16px 0 8px 0;\n        font-size: 1.2em;\n      }\n\n      .flex {\n        display: flex;\n        height: 32px;\n        align-items: center;\n      }\n\n      .main {\n        flex: 1;\n        margin-left: 24px;\n      }\n\n      .temp,\n      .templow {\n        min-width: 48px;\n        text-align: right;\n      }\n\n      .templow {\n        margin: 0 16px;\n        color: var(--secondary-text-color);\n      }\n\n      .attribution {\n        color: var(--secondary-text-color);\n        text-align: center;\n      }\n    "]);

  _templateObject13 = function _templateObject13() {
    return data;
  };

  return data;
}

function _templateObject12() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"attribution\">\n              ", "\n            </div>\n          "]);

  _templateObject12 = function _templateObject12() {
    return data;
  };

  return data;
}

function _templateObject11() {
  var data = _taggedTemplateLiteral(["\n                        <div class=\"main\">\n                          ", "\n                        </div>\n                        <div class=\"templow\">\n                          ", " ", "\n                        </div>\n                      "]);

  _templateObject11 = function _templateObject11() {
    return data;
  };

  return data;
}

function _templateObject10() {
  var data = _taggedTemplateLiteral(["\n                        <div class=\"main\">\n                          ", "\n                        </div>\n                      "]);

  _templateObject10 = function _templateObject10() {
    return data;
  };

  return data;
}

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n                        <iron-icon\n                          .icon=\"", "\"\n                        ></iron-icon>\n                      "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"flex\">\n                  ", "\n                  ", "\n                  ", "\n                  <div class=\"temp\">\n                    ", " ", "\n                  </div>\n                </div>\n              "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"section\">\n              ", ":\n            </div>\n            ", "\n          "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"flex\">\n              <iron-icon icon=\"hass:eye\"></iron-icon>\n              <div class=\"main\">\n                ", "\n              </div>\n              <div>\n                ", " ", "\n              </div>\n            </div>\n          "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"flex\">\n              <iron-icon icon=\"hass:weather-windy\"></iron-icon>\n              <div class=\"main\">\n                ", "\n              </div>\n              <div>\n                ", "\n              </div>\n            </div>\n          "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"flex\">\n              <iron-icon icon=\"hass:water-percent\"></iron-icon>\n              <div class=\"main\">\n                ", "\n              </div>\n              <div>", " %</div>\n            </div>\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            <div class=\"flex\">\n              <iron-icon icon=\"hass:gauge\"></iron-icon>\n              <div class=\"main\">\n                ", "\n              </div>\n              <div>\n                ", "\n                ", "\n              </div>\n            </div>\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <div class=\"flex\">\n        <iron-icon icon=\"hass:thermometer\"></iron-icon>\n        <div class=\"main\">\n          ", "\n        </div>\n        <div>\n          ", " ", "\n        </div>\n      </div>\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n      ", "\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
var weatherIcons = {
  "clear-night": "hass:weather-night",
  cloudy: "hass:weather-cloudy",
  exceptional: "hass:alert-circle-outline",
  fog: "hass:weather-fog",
  hail: "hass:weather-hail",
  lightning: "hass:weather-lightning",
  "lightning-rainy": "hass:weather-lightning-rainy",
  partlycloudy: "hass:weather-partly-cloudy",
  pouring: "hass:weather-pouring",
  rainy: "hass:weather-rainy",
  snowy: "hass:weather-snowy",
  "snowy-rainy": "hass:weather-snowy-rainy",
  sunny: "hass:weather-sunny",
  windy: "hass:weather-windy",
  "windy-variant": "hass:weather-windy-variant"
};

var MoreInfoWeather = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["customElement"])("more-info-weather")], function (_initialize, _LitElement) {
  var MoreInfoWeather =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MoreInfoWeather, _LitElement2);

    function MoreInfoWeather() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoWeather);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoWeather)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoWeather;
  }(_LitElement);

  return {
    F: MoreInfoWeather,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "method",
      key: "shouldUpdate",
      value: function shouldUpdate(changedProps) {
        if (changedProps.has("stateObj")) {
          return true;
        }

        var oldHass = changedProps.get("hass");

        if (!oldHass || oldHass.language !== this.hass.language || oldHass.config.unit_system !== this.hass.config.unit_system) {
          return true;
        }

        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;

        if (!this.hass || !this.stateObj) {
          return Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
        }

        return Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2(), this.hass.localize("ui.card.weather.attributes.temperature"), this.stateObj.attributes.temperature, this.getUnit("temperature"), this._showValue(this.stateObj.attributes.pressure) ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject3(), this.hass.localize("ui.card.weather.attributes.air_pressure"), this.stateObj.attributes.pressure, this.getUnit("air_pressure")) : "", this._showValue(this.stateObj.attributes.humidity) ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject4(), this.hass.localize("ui.card.weather.attributes.humidity"), this.stateObj.attributes.humidity) : "", this._showValue(this.stateObj.attributes.wind_speed) ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject5(), this.hass.localize("ui.card.weather.attributes.wind_speed"), this.getWind(this.stateObj.attributes.wind_speed, this.stateObj.attributes.wind_bearing)) : "", this._showValue(this.stateObj.attributes.visibility) ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject6(), this.hass.localize("ui.card.weather.attributes.visibility"), this.stateObj.attributes.visibility, this.getUnit("length")) : "", this.stateObj.attributes.forecast ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject7(), this.hass.localize("ui.card.weather.forecast"), this.stateObj.attributes.forecast.map(function (item) {
          return Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject8(), item.condition ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject9(), weatherIcons[item.condition]) : "", !_this2._showValue(item.templow) ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject10(), _this2.computeDateTime(item.datetime)) : "", _this2._showValue(item.templow) ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject11(), _this2.computeDate(item.datetime), item.templow, _this2.getUnit("temperature")) : "", item.temperature, _this2.getUnit("temperature"));
        })) : "", this.stateObj.attributes.attribution ? Object(lit_html__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject12(), this.stateObj.attributes.attribution) : "");
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_1__["css"])(_templateObject13());
      }
    }, {
      kind: "method",
      key: "computeDate",
      value: function computeDate(data) {
        var date = new Date(data);
        return date.toLocaleDateString(this.hass.language, {
          weekday: "long",
          month: "short",
          day: "numeric"
        });
      }
    }, {
      kind: "method",
      key: "computeDateTime",
      value: function computeDateTime(data) {
        var date = new Date(data);
        return date.toLocaleDateString(this.hass.language, {
          weekday: "long",
          hour: "numeric"
        });
      }
    }, {
      kind: "method",
      key: "getUnit",
      value: function getUnit(measure) {
        var lengthUnit = this.hass.config.unit_system.length || "";

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
    }, {
      kind: "method",
      key: "windBearingToText",
      value: function windBearingToText(degree) {
        var degreenum = parseInt(degree, 10);

        if (isFinite(degreenum)) {
          // tslint:disable-next-line: no-bitwise
          return cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
        }

        return degree;
      }
    }, {
      kind: "method",
      key: "getWind",
      value: function getWind(speed, bearing) {
        if (bearing != null) {
          var cardinalDirection = this.windBearingToText(bearing);
          return "".concat(speed, " ").concat(this.getUnit("length"), "/h (").concat(this.hass.localize("ui.card.weather.cardinal_direction.".concat(cardinalDirection.toLowerCase())) || cardinalDirection, ")");
        }

        return "".concat(speed, " ").concat(this.getUnit("length"), "/h");
      }
    }, {
      kind: "method",
      key: "_showValue",
      value: function _showValue(item) {
        return typeof item !== "undefined" && item !== null;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_1__["LitElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog\">\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        state-card-content {\n          display: block;\n          padding: 16px;\n        }\n\n        state-history-charts {\n          max-width: 100%;\n          margin-bottom: 16px;\n        }\n\n        @media all and (min-width: 451px) and (min-height: 501px) {\n          .main-title {\n            pointer-events: auto;\n            cursor: default;\n          }\n        }\n\n        paper-dialog-scrollable {\n          padding-bottom: 16px;\n        }\n\n        :host([domain=\"camera\"]) paper-dialog-scrollable {\n          margin: 0 -24px -21px;\n        }\n\n        :host([rtl]) app-toolbar {\n          direction: rtl;\n          text-align: right;\n        }\n      </style>\n\n      <app-toolbar>\n        <paper-icon-button\n          aria-label=\"Dismiss dialog\"\n          icon=\"hass:close\"\n          dialog-dismiss\n        ></paper-icon-button>\n        <div class=\"main-title\" main-title=\"\" on-click=\"enlarge\">\n          [[_computeStateName(stateObj)]]\n        </div>\n        <template is=\"dom-if\" if=\"[[canConfigure]]\">\n          <paper-icon-button\n            icon=\"hass:settings\"\n            on-click=\"_gotoSettings\"\n          ></paper-icon-button>\n        </template>\n      </app-toolbar>\n\n      <template is=\"dom-if\" if=\"[[_computeShowStateInfo(stateObj)]]\" restamp=\"\">\n        <state-card-content\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n          in-dialog=\"\"\n        ></state-card-content>\n      </template>\n      <paper-dialog-scrollable dialog-element=\"[[dialogElement]]\">\n        <template\n          is=\"dom-if\"\n          if=\"[[_computeShowHistoryComponent(hass, stateObj)]]\"\n          restamp=\"\"\n        >\n          <ha-state-history-data\n            hass=\"[[hass]]\"\n            filter-type=\"recent-entity\"\n            entity-id=\"[[stateObj.entity_id]]\"\n            data=\"{{_stateHistory}}\"\n            is-loading=\"{{_stateHistoryLoading}}\"\n            cache-config=\"[[_cacheConfig]]\"\n          ></ha-state-history-data>\n          <state-history-charts\n            hass=\"[[hass]]\"\n            history-data=\"[[_stateHistory]]\"\n            is-loading-data=\"[[_stateHistoryLoading]]\"\n            up-to-now\n          ></state-history-charts>\n        </template>\n        <more-info-content\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n        ></more-info-content>\n      </paper-dialog-scrollable>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
/*
 * @appliesMixin EventsMixin
 */

var MoreInfoControls =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(MoreInfoControls, _EventsMixin);

  function MoreInfoControls() {
    _classCallCheck(this, MoreInfoControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoControls).apply(this, arguments));
  }

  _createClass(MoreInfoControls, [{
    key: "enlarge",
    value: function enlarge() {
      this.large = !this.large;
    }
  }, {
    key: "_computeShowStateInfo",
    value: function _computeShowStateInfo(stateObj) {
      return !stateObj || !DOMAINS_NO_INFO.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj));
    }
  }, {
    key: "_computeShowHistoryComponent",
    value: function _computeShowHistoryComponent(hass, stateObj) {
      return hass && stateObj && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__["isComponentLoaded"])(hass, "history") && !_common_const__WEBPACK_IMPORTED_MODULE_13__["DOMAINS_MORE_INFO_NO_HISTORY"].includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj));
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["computeStateDomain"])(stateObj) : "";
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["computeStateName"])(stateObj) : "";
    }
  }, {
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal) {
      if (!newVal) {
        return;
      }

      if (this._cacheConfig.cacheKey !== "more_info.".concat(newVal.entity_id)) {
        this._cacheConfig = Object.assign({}, this._cacheConfig, {
          cacheKey: "more_info.".concat(newVal.entity_id)
        });
      }
    }
  }, {
    key: "_gotoSettings",
    value: function _gotoSettings() {
      this.fire("more-info-page", {
        page: "settings"
      });
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoControls;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

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
/* harmony import */ var _util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/toast-saved-success */ "./src/util/toast-saved-success.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n\n          /* to fit save button */\n          padding-right: 0;\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        app-toolbar mwc-button {\n          font-size: 0.8em;\n          margin: 0;\n          --mdc-theme-primary: var(--more-info-header-color);\n        }\n\n        .form {\n          padding: 0 24px 24px;\n        }\n      </style>\n\n      <app-toolbar>\n        <ha-paper-icon-button-arrow-prev\n          on-click=\"_backTapped\"\n        ></ha-paper-icon-button-arrow-prev>\n        <div main-title=\"\">[[_computeStateName(stateObj)]]</div>\n        <mwc-button on-click=\"_save\" disabled=\"[[_computeInvalid(_entityId)]]\"\n          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button\n        >\n      </app-toolbar>\n\n      <div class=\"form\">\n        <paper-input\n          value=\"{{_name}}\"\n          label=\"[[localize('ui.dialogs.more_info_settings.name')]]\"\n        ></paper-input>\n        <paper-input\n          value=\"{{_entityId}}\"\n          label=\"[[localize('ui.dialogs.more_info_settings.entity_id')]]\"\n          error-message=\"Domain needs to stay the same\"\n          invalid=\"[[_computeInvalid(_entityId)]]\"\n        ></paper-input>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var MoreInfoSettings =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoSettings, _LocalizeMixin);

  function MoreInfoSettings() {
    _classCallCheck(this, MoreInfoSettings);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoSettings).apply(this, arguments));
  }

  _createClass(MoreInfoSettings, [{
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      if (!stateObj) return "";
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["computeStateName"])(stateObj);
    }
  }, {
    key: "_computeInvalid",
    value: function _computeInvalid(entityId) {
      return Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(this.stateObj.entity_id) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["computeDomain"])(entityId);
    }
  }, {
    key: "_registryInfoChanged",
    value: function _registryInfoChanged(newVal) {
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
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      this.fire("more-info-page", {
        page: null
      });
    }
  }, {
    key: "_save",
    value: function _save() {
      var info;
      return regeneratorRuntime.async(function _save$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return regeneratorRuntime.awrap(Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_10__["updateEntityRegistryEntry"])(this.hass, this.stateObj.entity_id, {
                name: this._name,
                new_entity_id: this._entityId
              }));

            case 3:
              info = _context.sent;
              Object(_util_toast_saved_success__WEBPACK_IMPORTED_MODULE_11__["showSaveSuccessToast"])(this, this.hass);
              this.registryInfo = info; // Keep the more info dialog open at the new entity.

              if (this.stateObj.entity_id !== this._entityId) {
                this.fire("hass-more-info", {
                  entityId: this._entityId
                });
              }

              _context.next = 12;
              break;

            case 9:
              _context.prev = 9;
              _context.t0 = _context["catch"](0);
              alert("save failed: ".concat(_context.t0.message));

            case 12:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[0, 9]]);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return MoreInfoSettings;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/**
 * @polymerMixin
 * @appliesMixin EventsMixin
 * @appliesMixin PaperDialogBehavior
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_mixinBehaviors) {
      _inherits(_class, _mixinBehaviors);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, null, [{
        key: "properties",
        get: function get() {
          return {
            withBackdrop: {
              type: Boolean,
              value: true
            }
          };
        }
      }]);

      return _class;
    }(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"], _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__["PaperDialogBehavior"]], superClass))
  );
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        ha-climate-state {\n          margin-left: 16px;\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-climate-state\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n        ></ha-climate-state>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var StateCardClimate =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardClimate, _PolymerElement);

  function StateCardClimate() {
    _classCallCheck(this, StateCardClimate);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardClimate).apply(this, arguments));
  }

  _createClass(StateCardClimate, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardClimate;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <mwc-button hidden$=\"[[inDialog]]\"\n          >[[_localizeState(stateObj.state)]]</mwc-button\n        >\n      </div>\n\n      <!-- pre load the image so the dialog is rendered the proper size -->\n      <template is=\"dom-if\" if=\"[[stateObj.attributes.description_image]]\">\n        <img hidden=\"\" src=\"[[stateObj.attributes.description_image]]\" />\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/*
 * @appliesMixin LocalizeMixin
 */

var StateCardConfigurator =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardConfigurator, _LocalizeMixin);

  function StateCardConfigurator() {
    _classCallCheck(this, StateCardConfigurator);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardConfigurator).apply(this, arguments));
  }

  _createClass(StateCardConfigurator, [{
    key: "_localizeState",
    value: function _localizeState(state) {
      return this.localize("state.configurator.".concat(state));
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardConfigurator;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





















var StateCardContent =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardContent, _PolymerElement);

  function StateCardContent() {
    _classCallCheck(this, StateCardContent);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardContent).apply(this, arguments));
  }

  _createClass(StateCardContent, [{
    key: "inputChanged",
    value: function inputChanged(hass, inDialog, stateObj) {
      var stateCard;
      if (!stateObj || !hass) return;

      if (stateObj.attributes && "custom_ui_state_card" in stateObj.attributes) {
        stateCard = stateObj.attributes.custom_ui_state_card;
      } else {
        stateCard = "state-card-" + Object(_common_entity_state_card_type__WEBPACK_IMPORTED_MODULE_17__["stateCardType"])(hass, stateObj);
      }

      Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_18__["default"])(this, stateCard.toUpperCase(), {
        hass: hass,
        stateObj: stateObj,
        inDialog: inDialog
      });
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["inputChanged(hass, inDialog, stateObj)"];
    }
  }]);

  return StateCardContent;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          line-height: 1.5;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <div class=\"horizontal layout\">\n          <ha-cover-controls\n            hidden$=\"[[entityObj.isTiltOnly]]\"\n            hass=\"[[hass]]\"\n            state-obj=\"[[stateObj]]\"\n          ></ha-cover-controls>\n          <ha-cover-tilt-controls\n            hidden$=\"[[!entityObj.isTiltOnly]]\"\n            hass=\"[[hass]]\"\n            state-obj=\"[[stateObj]]\"\n          ></ha-cover-tilt-controls>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var StateCardCover =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardCover, _PolymerElement);

  function StateCardCover() {
    _classCallCheck(this, StateCardCover);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardCover).apply(this, arguments));
  }

  _createClass(StateCardCover, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      var entity = new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
      return entity;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return StateCardCover;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n          @apply --layout-baseline;\n        }\n\n        :host([rtl]) {\n          direction: rtl;\n          text-align: right;\n        }\n\n        state-info {\n          flex: 1 1 auto;\n          min-width: 0;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n          margin-left: 16px;\n          text-align: right;\n          max-width: 40%;\n          flex: 0 0 auto;\n          overflow-wrap: break-word;\n        }\n        :host([rtl]) .state {\n          margin-right: 16px;\n          margin-left: 0;\n          text-align: left;\n        }\n\n        .state.has-unit_of_measurement {\n          white-space: nowrap;\n        }\n      </style>\n\n      ", "\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        [[computeStateDisplay(localize, stateObj, language)]]\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/*
 * @appliesMixin LocalizeMixin
 */

var StateCardDisplay =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardDisplay, _LocalizeMixin);

  function StateCardDisplay() {
    _classCallCheck(this, StateCardDisplay);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardDisplay).apply(this, arguments));
  }

  _createClass(StateCardDisplay, [{
    key: "computeStateDisplay",
    value: function computeStateDisplay(localize, stateObj, language) {
      return Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_6__["computeStateDisplay"])(localize, stateObj, language);
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = ["state", Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_5__["attributeClassNames"])(stateObj, ["unit_of_measurement"])];
      return classes.join(" ");
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_7__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return StateCardDisplay;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        ha-slider {\n          margin-left: auto;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          text-align: right;\n          line-height: 40px;\n        }\n        .sliderstate {\n          min-width: 45px;\n        }\n        ha-slider[hidden] {\n          display: none !important;\n        }\n        paper-input {\n          text-align: right;\n          margin-left: auto;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\" id=\"input_number_card\">\n        ", "\n        <ha-slider\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          step=\"[[step]]\"\n          hidden=\"[[hiddenslider]]\"\n          pin=\"\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          id=\"slider\"\n          ignore-bar-touch=\"\"\n        >\n        </ha-slider>\n        <paper-input\n          no-label-float=\"\"\n          auto-validate=\"\"\n          pattern=\"[0-9]+([\\.][0-9]+)?\"\n          step=\"[[step]]\"\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          type=\"number\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          hidden=\"[[hiddenbox]]\"\n        >\n        </paper-input>\n        <div class=\"state\" hidden=\"[[hiddenbox]]\">\n          [[stateObj.attributes.unit_of_measurement]]\n        </div>\n        <div\n          id=\"sliderstate\"\n          class=\"state sliderstate\"\n          hidden=\"[[hiddenslider]]\"\n        >\n          [[value]] [[stateObj.attributes.unit_of_measurement]]\n        </div>\n      </div>\n    "], ["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        ha-slider {\n          margin-left: auto;\n        }\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          text-align: right;\n          line-height: 40px;\n        }\n        .sliderstate {\n          min-width: 45px;\n        }\n        ha-slider[hidden] {\n          display: none !important;\n        }\n        paper-input {\n          text-align: right;\n          margin-left: auto;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\" id=\"input_number_card\">\n        ", "\n        <ha-slider\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          step=\"[[step]]\"\n          hidden=\"[[hiddenslider]]\"\n          pin=\"\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          id=\"slider\"\n          ignore-bar-touch=\"\"\n        >\n        </ha-slider>\n        <paper-input\n          no-label-float=\"\"\n          auto-validate=\"\"\n          pattern=\"[0-9]+([\\\\.][0-9]+)?\"\n          step=\"[[step]]\"\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          value=\"{{value}}\"\n          type=\"number\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          hidden=\"[[hiddenbox]]\"\n        >\n        </paper-input>\n        <div class=\"state\" hidden=\"[[hiddenbox]]\">\n          [[stateObj.attributes.unit_of_measurement]]\n        </div>\n        <div\n          id=\"sliderstate\"\n          class=\"state sliderstate\"\n          hidden=\"[[hiddenslider]]\"\n        >\n          [[value]] [[stateObj.attributes.unit_of_measurement]]\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










var StateCardInputNumber =
/*#__PURE__*/
function (_mixinBehaviors) {
  _inherits(StateCardInputNumber, _mixinBehaviors);

  function StateCardInputNumber() {
    _classCallCheck(this, StateCardInputNumber);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardInputNumber).apply(this, arguments));
  }

  _createClass(StateCardInputNumber, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(StateCardInputNumber.prototype), "ready", this).call(this);

      if (typeof ResizeObserver === "function") {
        var ro = new ResizeObserver(function (entries) {
          entries.forEach(function () {
            _this.hiddenState();
          });
        });
        ro.observe(this.$.input_number_card);
      } else {
        this.addEventListener("iron-resize", this.hiddenState);
      }
    }
  }, {
    key: "hiddenState",
    value: function hiddenState() {
      if (this.mode !== "slider") return;
      var sliderwidth = this.$.slider.offsetWidth;

      if (sliderwidth < 100) {
        this.$.sliderstate.hidden = true;
      } else if (sliderwidth >= 145) {
        this.$.sliderstate.hidden = false;
      }
    }
  }, {
    key: "stateObjectChanged",
    value: function stateObjectChanged(newVal) {
      var prevMode = this.mode;
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
  }, {
    key: "selectedValueChanged",
    value: function selectedValueChanged() {
      if (this.value === Number(this.stateObj.state)) {
        return;
      }

      this.hass.callService("input_number", "set_value", {
        value: this.value,
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation(ev) {
      ev.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return StateCardInputNumber;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_3__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        display: block;\n      }\n\n      state-badge {\n        float: left;\n        margin-top: 10px;\n      }\n\n      paper-dropdown-menu-light {\n        display: block;\n        margin-left: 53px;\n      }\n\n      paper-item {\n        cursor: pointer;\n        min-width: 200px;\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              <paper-item>", "</paper-item>\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <state-badge .stateObj=", "></state-badge>\n      <paper-dropdown-menu-light\n        .label=", "\n        .value=\"", "\"\n        @iron-select=", "\n        @click=", "\n      >\n        <paper-listbox slot=\"dropdown-content\">\n          ", "\n        </paper-listbox>\n      </paper-dropdown-menu-light>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }



 // tslint:disable-next-line: no-duplicate-imports







var StateCardInputSelect = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("state-card-input_select")], function (_initialize, _LitElement) {
  var StateCardInputSelect =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(StateCardInputSelect, _LitElement2);

    function StateCardInputSelect() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StateCardInputSelect);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateCardInputSelect)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return StateCardInputSelect;
  }(_LitElement);

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
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.stateObj, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(this.stateObj), this.stateObj.state, this._selectedOptionChanged, _common_dom_stop_propagation__WEBPACK_IMPORTED_MODULE_7__["stopPropagation"], this.stateObj.attributes.options.map(function (option) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), option);
        }));
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
      value: function _selectedOptionChanged(ev) {
        var option;
        return regeneratorRuntime.async(function _selectedOptionChanged$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                option = ev.detail.item.innerText.trim();

                if (!(option === this.stateObj.state)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.next = 5;
                return regeneratorRuntime.awrap(Object(_data_input_select__WEBPACK_IMPORTED_MODULE_6__["setInputSelectOption"])(this.hass, this.stateObj.entity_id, option));

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        paper-input {\n          margin-left: 16px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <paper-input\n          no-label-float=\"\"\n          minlength=\"[[stateObj.attributes.min]]\"\n          maxlength=\"[[stateObj.attributes.max]]\"\n          value=\"{{value}}\"\n          auto-validate=\"[[stateObj.attributes.pattern]]\"\n          pattern=\"[[stateObj.attributes.pattern]]\"\n          type=\"[[stateObj.attributes.mode]]\"\n          on-change=\"selectedValueChanged\"\n          on-click=\"stopPropagation\"\n          placeholder=\"(empty value)\"\n        >\n        </paper-input>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var StateCardInputText =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardInputText, _PolymerElement);

  function StateCardInputText() {
    _classCallCheck(this, StateCardInputText);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardInputText).apply(this, arguments));
  }

  _createClass(StateCardInputText, [{
    key: "stateObjectChanged",
    value: function stateObjectChanged(newVal) {
      this.value = newVal.state;
    }
  }, {
    key: "selectedValueChanged",
    value: function selectedValueChanged() {
      if (this.value === this.stateObj.state) {
        return;
      }

      this.hass.callService("input_text", "set_value", {
        value: this.value,
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "stopPropagation",
    value: function stopPropagation(ev) {
      ev.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return StateCardInputText;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <mwc-button\n          on-click=\"_callService\"\n          data-service=\"unlock\"\n          hidden$=\"[[!isLocked]]\"\n          >[[localize('ui.card.lock.unlock')]]</mwc-button\n        >\n        <mwc-button\n          on-click=\"_callService\"\n          data-service=\"lock\"\n          hidden$=\"[[isLocked]]\"\n          >[[localize('ui.card.lock.lock')]]</mwc-button\n        >\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/*
 * @appliesMixin LocalizeMixin
 */

var StateCardLock =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardLock, _LocalizeMixin);

  function StateCardLock() {
    _classCallCheck(this, StateCardLock);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardLock).apply(this, arguments));
  }

  _createClass(StateCardLock, [{
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal) {
      if (newVal) {
        this.isLocked = newVal.state === "locked";
      }
    }
  }, {
    key: "_callService",
    value: function _callService(ev) {
      ev.stopPropagation();
      var service = ev.target.dataset.service;
      var data = {
        entity_id: this.stateObj.entity_id
      };
      this.hass.callService("lock", service, data);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return StateCardLock;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          line-height: 1.5;\n        }\n\n        .state {\n          @apply --paper-font-common-nowrap;\n          @apply --paper-font-body1;\n          margin-left: 16px;\n          text-align: right;\n        }\n\n        .main-text {\n          @apply --paper-font-common-nowrap;\n          color: var(--primary-text-color);\n          text-transform: capitalize;\n        }\n\n        .main-text[take-height] {\n          line-height: 40px;\n        }\n\n        .secondary-text {\n          @apply --paper-font-common-nowrap;\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <div class=\"state\">\n          <div class=\"main-text\" take-height$=\"[[!playerObj.secondaryTitle]]\">\n            [[computePrimaryText(localize, playerObj)]]\n          </div>\n          <div class=\"secondary-text\">[[playerObj.secondaryTitle]]</div>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







/*
 * @appliesMixin LocalizeMixin
 */

var StateCardMediaPlayer =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardMediaPlayer, _LocalizeMixin);

  function StateCardMediaPlayer() {
    _classCallCheck(this, StateCardMediaPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardMediaPlayer).apply(this, arguments));
  }

  _createClass(StateCardMediaPlayer, [{
    key: "computePlayerObj",
    value: function computePlayerObj(hass, stateObj) {
      return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_5__["default"](hass, stateObj);
    }
  }, {
    key: "computePrimaryText",
    value: function computePrimaryText(localize, playerObj) {
      return playerObj.primaryTitle || localize("state.media_player.".concat(playerObj.stateObj.state)) || localize("state.default.".concat(playerObj.stateObj.state)) || playerObj.stateObj.state;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return StateCardMediaPlayer;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

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
/* harmony import */ var _data_scene__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/scene */ "./src/data/scene.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <mwc-button on-click=\"_activateScene\"\n          >[[localize('ui.card.scene.activate')]]</mwc-button\n        >\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/*
 * @appliesMixin LocalizeMixin
 */

var StateCardScene =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardScene, _LocalizeMixin);

  function StateCardScene() {
    _classCallCheck(this, StateCardScene);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardScene).apply(this, arguments));
  }

  _createClass(StateCardScene, [{
    key: "_activateScene",
    value: function _activateScene(ev) {
      ev.stopPropagation();
      Object(_data_scene__WEBPACK_IMPORTED_MODULE_6__["activateScene"])(this.hass, this.stateObj.entity_id);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardScene;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        mwc-button {\n          top: 3px;\n          height: 37px;\n          margin-right: -0.57em;\n        }\n\n        ha-entity-toggle {\n          margin-left: 16px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <template is=\"dom-if\" if=\"[[stateObj.attributes.can_cancel]]\">\n          <ha-entity-toggle\n            state-obj=\"[[stateObj]]\"\n            hass=\"[[hass]]\"\n          ></ha-entity-toggle>\n        </template>\n        <template is=\"dom-if\" if=\"[[!stateObj.attributes.can_cancel]]\">\n          <mwc-button on-click=\"fireScript\"\n            >[[localize('ui.card.script.execute')]]</mwc-button\n          >\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








/*
 * @appliesMixin LocalizeMixin
 */

var StateCardScript =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateCardScript, _LocalizeMixin);

  function StateCardScript() {
    _classCallCheck(this, StateCardScript);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardScript).apply(this, arguments));
  }

  _createClass(StateCardScript, [{
    key: "fireScript",
    value: function fireScript(ev) {
      ev.stopPropagation();
      this.hass.callService("script", "turn_on", {
        entity_id: this.stateObj.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardScript;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .state {\n          @apply --paper-font-body1;\n          color: var(--primary-text-color);\n\n          margin-left: 16px;\n          text-align: right;\n          line-height: 40px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <div class=\"state\">[[_secondsToDuration(timeRemaining)]]</div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var StateCardTimer =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardTimer, _PolymerElement);

  function StateCardTimer() {
    _classCallCheck(this, StateCardTimer);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardTimer).apply(this, arguments));
  }

  _createClass(StateCardTimer, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateCardTimer.prototype), "connectedCallback", this).call(this);

      this.startInterval(this.stateObj);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(StateCardTimer.prototype), "disconnectedCallback", this).call(this);

      this.clearInterval();
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(stateObj) {
      this.startInterval(stateObj);
    }
  }, {
    key: "clearInterval",
    value: function (_clearInterval) {
      function clearInterval() {
        return _clearInterval.apply(this, arguments);
      }

      clearInterval.toString = function () {
        return _clearInterval.toString();
      };

      return clearInterval;
    }(function () {
      if (this._updateRemaining) {
        clearInterval(this._updateRemaining);
        this._updateRemaining = null;
      }
    })
  }, {
    key: "startInterval",
    value: function startInterval(stateObj) {
      var _this = this;

      this.clearInterval();
      this.calculateRemaining(stateObj);

      if (stateObj.state === "active") {
        this._updateRemaining = setInterval(function () {
          return _this.calculateRemaining(_this.stateObj);
        }, 1000);
      }
    }
  }, {
    key: "calculateRemaining",
    value: function calculateRemaining(stateObj) {
      this.timeRemaining = Object(_common_entity_timer_time_remaining__WEBPACK_IMPORTED_MODULE_4__["timerTimeRemaining"])(stateObj);
    }
  }, {
    key: "_secondsToDuration",
    value: function _secondsToDuration(time) {
      return Object(_common_datetime_seconds_to_duration__WEBPACK_IMPORTED_MODULE_5__["default"])(time);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return StateCardTimer;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        ha-entity-toggle {\n          margin: -4px -16px -4px 0;\n          padding: 4px 16px;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-entity-toggle\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n        ></ha-entity-toggle>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var StateCardToggle =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardToggle, _PolymerElement);

  function StateCardToggle() {
    _classCallCheck(this, StateCardToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardToggle).apply(this, arguments));
  }

  _createClass(StateCardToggle, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardToggle;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-vacuum-state\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n        ></ha-vacuum-state>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var StateCardVacuum =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardVacuum, _PolymerElement);

  function StateCardVacuum() {
    _classCallCheck(this, StateCardVacuum);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardVacuum).apply(this, arguments));
  }

  _createClass(StateCardVacuum, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardVacuum;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-info\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"[[inDialog]]\"\n      ></state-info>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        ha-water_heater-state {\n          margin-left: 16px;\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        ", "\n        <ha-water_heater-state\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n        ></ha-water_heater-state>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var StateCardWaterHeater =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardWaterHeater, _PolymerElement);

  function StateCardWaterHeater() {
    _classCallCheck(this, StateCardWaterHeater);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardWaterHeater).apply(this, arguments));
  }

  _createClass(StateCardWaterHeater, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject(), this.stateInfoTemplate);
    }
  }, {
    key: "stateInfoTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardWaterHeater;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <state-badge state-obj=\"[[stateObj]]\"></state-badge>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        .name {\n          @apply --paper-font-common-nowrap;\n          @apply --paper-font-body1;\n          color: var(--primary-color);\n\n          text-transform: capitalize;\n          line-height: 40px;\n          margin-left: 16px;\n        }\n      </style>\n\n      ", "\n      <a href$=\"[[stateObj.state]]\" target=\"_blank\" class=\"name\" id=\"link\"\n        >[[_computeStateName(stateObj)]]</a\n      >\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var StateCardWeblink =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(StateCardWeblink, _PolymerElement);

  function StateCardWeblink() {
    _classCallCheck(this, StateCardWeblink);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateCardWeblink).apply(this, arguments));
  }

  _createClass(StateCardWeblink, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(StateCardWeblink.prototype), "ready", this).call(this);

      this.addEventListener("click", function (ev) {
        return _this.onTap(ev);
      });
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["computeStateName"])(stateObj);
    }
  }, {
    key: "onTap",
    value: function onTap(ev) {
      ev.stopPropagation();
      ev.preventDefault();
      window.open(this.stateObj.state, "_blank");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.stateBadgeTemplate);
    }
  }, {
    key: "stateBadgeTemplate",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: Object,
        inDialog: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return StateCardWeblink;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

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
var hassAttributeUtil = {};
hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength", "timestamp"],
  "switch": ["switch", "outlet"]
};
hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";
hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  "boolean": "ha-customize-boolean",
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

/***/ }),

/***/ "./src/util/toast-saved-success.ts":
/*!*****************************************!*\
  !*** ./src/util/toast-saved-success.ts ***!
  \*****************************************/
/*! exports provided: showSaveSuccessToast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSaveSuccessToast", function() { return showSaveSuccessToast; });
/* harmony import */ var _toast__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toast */ "./src/util/toast.ts");

var showSaveSuccessToast = function showSaveSuccessToast(el, hass) {
  return Object(_toast__WEBPACK_IMPORTED_MODULE_0__["showToast"])(el, {
    message: hass.localize("ui.common.successfully_saved")
  });
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jYXJkcy9oYS1oaXN0b3J5X2dyYXBoLWNhcmQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9jb25zdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY2FuX3RvZ2dsZV9kb21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9lbnRpdHkvY2FuX3RvZ2dsZV9zdGF0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9mZWF0dXJlX2NsYXNzX25hbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3N0YXRlX2NhcmRfdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mby5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNhbWVyYS1zdHJlYW0udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1jb250cm9sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLWNvbG9yLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1sYWJlbGVkLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2LnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLXNsaWRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS12YWN1dW0tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2wuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLXN0YXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2hhLW1vcmUtaW5mby1kaWFsb2cuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1hbGFybV9jb250cm9sX3BhbmVsLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tYXV0b21hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNsaW1hdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb25maWd1cmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1jb250ZW50LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tY291bnRlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWNvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tZGVmYXVsdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWZhbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWdyb3VwLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8taGlzdG9yeV9ncmFwaC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vY29udHJvbHMvbW9yZS1pbmZvLWlucHV0X2RhdGV0aW1lLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tbGlnaHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby1sb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tbWVkaWFfcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tc2NyaXB0LmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tc3VuLnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tdGltZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3MvbW9yZS1pbmZvL2NvbnRyb2xzL21vcmUtaW5mby11cGRhdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8tdmFjdXVtLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8td2F0ZXJfaGVhdGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9jb250cm9scy9tb3JlLWluZm8td2VhdGhlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGlhbG9ncy9tb3JlLWluZm8vbW9yZS1pbmZvLWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL21vcmUtaW5mby9tb3JlLWluZm8tc2V0dGluZ3MuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9kaWFsb2ctbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jbGltYXRlLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29uZmlndXJhdG9yLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWNvdmVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtZGlzcGxheS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWlucHV0X251bWJlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWlucHV0X3NlbGVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLWlucHV0X3RleHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1sb2NrLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtbWVkaWFfcGxheWVyLmpzIiwid2VicGFjazovLy8uL3NyYy9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtc2NlbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1zY3JpcHQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC10aW1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLXRvZ2dsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLXZhY3V1bS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLXdhdGVyX2hlYXRlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc3RhdGUtc3VtbWFyeS9zdGF0ZS1jYXJkLXdlYmxpbmsuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvaGFzcy1hdHRyaWJ1dGVzLXV0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3V0aWwvdG9hc3Qtc2F2ZWQtc3VjY2Vzcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgXCJAcG9seW1lci9wYXBlci1jYXJkL3BhcGVyLWNhcmRcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydHNcIjtcbmltcG9ydCBcIi4uL2RhdGEvaGEtc3RhdGUtaGlzdG9yeS1kYXRhXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFIaXN0b3J5R3JhcGhDYXJkIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItY2FyZDpub3QoW2RpYWxvZ10pIC5jb250ZW50IHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDE2cHggMTZweDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1jYXJkW2RpYWxvZ10ge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAxNnB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWNhcmQge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIC8qIHByZXZlbnQgbmV3IHN0YWNraW5nIGNvbnRleHQsIGNoYXJ0IHRvb2x0aXAgbmVlZHMgdG8gb3ZlcmZsb3cgKi9cbiAgICAgICAgICBwb3NpdGlvbjogc3RhdGljO1xuICAgICAgICB9XG4gICAgICAgIC5oZWFkZXIge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtaGVhZGxpbmU7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAxNnB4IDEycHg7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWNhcmRbZGlhbG9nXSAuaGVhZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLXN0YXRlLWhpc3RvcnktZGF0YVxuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBmaWx0ZXItdHlwZT1cInJlY2VudC1lbnRpdHlcIlxuICAgICAgICBlbnRpdHktaWQ9XCJbW2NvbXB1dGVIaXN0b3J5RW50aXRpZXMoc3RhdGVPYmopXV1cIlxuICAgICAgICBkYXRhPVwie3tzdGF0ZUhpc3Rvcnl9fVwiXG4gICAgICAgIGlzLWxvYWRpbmc9XCJ7e3N0YXRlSGlzdG9yeUxvYWRpbmd9fVwiXG4gICAgICAgIGNhY2hlLWNvbmZpZz1cIltbY2FjaGVDb25maWddXVwiXG4gICAgICA+PC9oYS1zdGF0ZS1oaXN0b3J5LWRhdGE+XG4gICAgICA8cGFwZXItY2FyZFxuICAgICAgICBkaWFsb2ckPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgICAgb24tY2xpY2s9XCJjYXJkVGFwcGVkXCJcbiAgICAgICAgZWxldmF0aW9uPVwiW1tjb21wdXRlRWxldmF0aW9uKGluRGlhbG9nKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPltbY29tcHV0ZVRpdGxlKHN0YXRlT2JqKV1dPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XG4gICAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnRzXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgaGlzdG9yeS1kYXRhPVwiW1tzdGF0ZUhpc3RvcnldXVwiXG4gICAgICAgICAgICBpcy1sb2FkaW5nLWRhdGE9XCJbW3N0YXRlSGlzdG9yeUxvYWRpbmddXVwiXG4gICAgICAgICAgICB1cC10by1ub3dcbiAgICAgICAgICAgIG5vLXNpbmdsZVxuICAgICAgICAgID5cbiAgICAgICAgICA8L3N0YXRlLWhpc3RvcnktY2hhcnRzPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvcGFwZXItY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqT2JzZXJ2ZXJcIixcbiAgICAgIH0sXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVIaXN0b3J5OiBPYmplY3QsXG4gICAgICBzdGF0ZUhpc3RvcnlMb2FkaW5nOiBCb29sZWFuLFxuICAgICAgY2FjaGVDb25maWc6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZToge1xuICAgICAgICAgIHJlZnJlc2g6IDAsXG4gICAgICAgICAgY2FjaGVLZXk6IG51bGwsXG4gICAgICAgICAgaG91cnNUb1Nob3c6IDI0LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGVPYmpPYnNlcnZlcihzdGF0ZU9iaikge1xuICAgIGlmICghc3RhdGVPYmopIHJldHVybjtcbiAgICBpZiAoXG4gICAgICB0aGlzLmNhY2hlQ29uZmlnLmNhY2hlS2V5ICE9PSBzdGF0ZU9iai5lbnRpdHlfaWQgfHxcbiAgICAgIHRoaXMuY2FjaGVDb25maWcucmVmcmVzaCAhPT0gKHN0YXRlT2JqLmF0dHJpYnV0ZXMucmVmcmVzaCB8fCAwKSB8fFxuICAgICAgdGhpcy5jYWNoZUNvbmZpZy5ob3Vyc1RvU2hvdyAhPT0gKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaG91cnNfdG9fc2hvdyB8fCAyNClcbiAgICApIHtcbiAgICAgIHRoaXMuY2FjaGVDb25maWcgPSB7XG4gICAgICAgIHJlZnJlc2g6IHN0YXRlT2JqLmF0dHJpYnV0ZXMucmVmcmVzaCB8fCAwLFxuICAgICAgICBjYWNoZUtleTogc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgICBob3Vyc1RvU2hvdzogc3RhdGVPYmouYXR0cmlidXRlcy5ob3Vyc190b19zaG93IHx8IDI0LFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlVGl0bGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlQ29udGVudENsYXNzKGluRGlhbG9nKSB7XG4gICAgcmV0dXJuIGluRGlhbG9nID8gXCJcIiA6IFwiY29udGVudFwiO1xuICB9XG5cbiAgY29tcHV0ZUhpc3RvcnlFbnRpdGllcyhzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9pZDtcbiAgfVxuXG4gIGNvbXB1dGVFbGV2YXRpb24oaW5EaWFsb2cpIHtcbiAgICByZXR1cm4gaW5EaWFsb2cgPyAwIDogMTtcbiAgfVxuXG4gIGNhcmRUYXBwZWQoZXYpIHtcbiAgICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKFwiKG1pbi13aWR0aDogNjEwcHgpIGFuZCAobWluLWhlaWdodDogNTUwcHgpXCIpO1xuICAgIGlmIChtcS5tYXRjaGVzKSB7XG4gICAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICAgIH1cbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtaGlzdG9yeV9ncmFwaC1jYXJkXCIsIEhhSGlzdG9yeUdyYXBoQ2FyZCk7XG4iLCIvKiogQ29uc3RhbnRzIHRvIGJlIHVzZWQgaW4gdGhlIGZyb250ZW5kLiAqL1xuXG4vLyBDb25zdGFudHMgc2hvdWxkIGJlIGFscGhhYmV0aWNhbGx5IHNvcnRlZCBieSBuYW1lLlxuLy8gQXJyYXlzIHdpdGggdmFsdWVzIHNob3VsZCBiZSBhbHBoYWJldGljYWxseSBzb3J0ZWQgaWYgb3JkZXIgZG9lc24ndCBtYXR0ZXIuXG4vLyBFYWNoIGNvbnN0YW50IHNob3VsZCBoYXZlIGEgZGVzY3JpcHRpb24gd2hhdCBpdCBpcyBzdXBwb3NlZCB0byBiZSB1c2VkIGZvci5cblxuLyoqIEljb24gdG8gdXNlIHdoZW4gbm8gaWNvbiBzcGVjaWZpZWQgZm9yIGRvbWFpbi4gKi9cbmV4cG9ydCBjb25zdCBERUZBVUxUX0RPTUFJTl9JQ09OID0gXCJoYXNzOmJvb2ttYXJrXCI7XG5cbi8qKiBQYW5lbCB0byBzaG93IHdoZW4gbm8gcGFuZWwgaXMgcGlja2VkLiAqL1xuZXhwb3J0IGNvbnN0IERFRkFVTFRfUEFORUwgPSBcImxvdmVsYWNlXCI7XG5cbi8qKiBEb21haW5zIHRoYXQgaGF2ZSBhIHN0YXRlIGNhcmQuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19XSVRIX0NBUkQgPSBbXG4gIFwiY2xpbWF0ZVwiLFxuICBcImNvdmVyXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaW5wdXRfc2VsZWN0XCIsXG4gIFwiaW5wdXRfbnVtYmVyXCIsXG4gIFwiaW5wdXRfdGV4dFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY2VuZVwiLFxuICBcInNjcmlwdFwiLFxuICBcInRpbWVyXCIsXG4gIFwidmFjdXVtXCIsXG4gIFwid2F0ZXJfaGVhdGVyXCIsXG4gIFwid2VibGlua1wiLFxuXTtcblxuLyoqIERvbWFpbnMgd2l0aCBzZXBhcmF0ZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfV0lUSF9NT1JFX0lORk8gPSBbXG4gIFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLFxuICBcImF1dG9tYXRpb25cIixcbiAgXCJjYW1lcmFcIixcbiAgXCJjbGltYXRlXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiY291bnRlclwiLFxuICBcImNvdmVyXCIsXG4gIFwiZmFuXCIsXG4gIFwiZ3JvdXBcIixcbiAgXCJoaXN0b3J5X2dyYXBoXCIsXG4gIFwiaW5wdXRfZGF0ZXRpbWVcIixcbiAgXCJsaWdodFwiLFxuICBcImxvY2tcIixcbiAgXCJtZWRpYV9wbGF5ZXJcIixcbiAgXCJzY3JpcHRcIixcbiAgXCJzdW5cIixcbiAgXCJ0aW1lclwiLFxuICBcInVwZGF0ZXJcIixcbiAgXCJ2YWN1dW1cIixcbiAgXCJ3YXRlcl9oZWF0ZXJcIixcbiAgXCJ3ZWF0aGVyXCIsXG5dO1xuXG4vKiogRG9tYWlucyB0aGF0IHNob3cgbm8gbW9yZSBpbmZvIGRpYWxvZy4gKi9cbmV4cG9ydCBjb25zdCBET01BSU5TX0hJREVfTU9SRV9JTkZPID0gW1xuICBcImlucHV0X251bWJlclwiLFxuICBcImlucHV0X3NlbGVjdFwiLFxuICBcImlucHV0X3RleHRcIixcbiAgXCJzY2VuZVwiLFxuICBcIndlYmxpbmtcIixcbl07XG5cbi8qKiBEb21haW5zIHRoYXQgc2hvdWxkIGhhdmUgdGhlIGhpc3RvcnkgaGlkZGVuIGluIHRoZSBtb3JlIGluZm8gZGlhbG9nLiAqL1xuZXhwb3J0IGNvbnN0IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgPSBbXG4gIFwiY2FtZXJhXCIsXG4gIFwiY29uZmlndXJhdG9yXCIsXG4gIFwiaGlzdG9yeV9ncmFwaFwiLFxuICBcInNjZW5lXCIsXG5dO1xuXG4vKiogU3RhdGVzIHRoYXQgd2UgY29uc2lkZXIgXCJvZmZcIi4gKi9cbmV4cG9ydCBjb25zdCBTVEFURVNfT0ZGID0gW1wiY2xvc2VkXCIsIFwibG9ja2VkXCIsIFwib2ZmXCJdO1xuXG4vKiogRG9tYWlucyB3aGVyZSB3ZSBhbGxvdyB0b2dnbGUgaW4gTG92ZWxhY2UuICovXG5leHBvcnQgY29uc3QgRE9NQUlOU19UT0dHTEUgPSBuZXcgU2V0KFtcbiAgXCJmYW5cIixcbiAgXCJpbnB1dF9ib29sZWFuXCIsXG4gIFwibGlnaHRcIixcbiAgXCJzd2l0Y2hcIixcbiAgXCJncm91cFwiLFxuICBcImF1dG9tYXRpb25cIixcbl0pO1xuXG4vKiogVGVtcGVyYXR1cmUgdW5pdHMuICovXG5leHBvcnQgY29uc3QgVU5JVF9DID0gXCLCsENcIjtcbmV4cG9ydCBjb25zdCBVTklUX0YgPSBcIsKwRlwiO1xuXG4vKiogRW50aXR5IElEIG9mIHRoZSBkZWZhdWx0IHZpZXcuICovXG5leHBvcnQgY29uc3QgREVGQVVMVF9WSUVXX0VOVElUWV9JRCA9IFwiZ3JvdXAuZGVmYXVsdF92aWV3XCI7XG4iLCIvKipcbiAqIFVwZGF0ZSByb290J3MgY2hpbGQgZWxlbWVudCB0byBiZSBuZXdFbGVtZW50VGFnIHJlcGxhY2luZyBhbm90aGVyIGV4aXN0aW5nIGNoaWxkIGlmIGFueS5cbiAqIENvcHkgYXR0cmlidXRlcyBpbnRvIHRoZSBjaGlsZCBlbGVtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBkeW5hbWljQ29udGVudFVwZGF0ZXIocm9vdCwgbmV3RWxlbWVudFRhZywgYXR0cmlidXRlcykge1xuICBjb25zdCByb290RWwgPSByb290O1xuICBsZXQgY3VzdG9tRWw7XG5cbiAgaWYgKHJvb3RFbC5sYXN0Q2hpbGQgJiYgcm9vdEVsLmxhc3RDaGlsZC50YWdOYW1lID09PSBuZXdFbGVtZW50VGFnKSB7XG4gICAgY3VzdG9tRWwgPSByb290RWwubGFzdENoaWxkO1xuICB9IGVsc2Uge1xuICAgIGlmIChyb290RWwubGFzdENoaWxkKSB7XG4gICAgICByb290RWwucmVtb3ZlQ2hpbGQocm9vdEVsLmxhc3RDaGlsZCk7XG4gICAgfVxuICAgIC8vIENyZWF0aW5nIGFuIGVsZW1lbnQgd2l0aCB1cHBlciBjYXNlIHdvcmtzIGZpbmUgaW4gQ2hyb21lLCBidXQgaW4gRkYgaXQgZG9lc24ndCBpbW1lZGlhdGVseVxuICAgIC8vIGJlY29tZSBhIGRlZmluZWQgQ3VzdG9tIEVsZW1lbnQuIFBvbHltZXIgZG9lcyB0aGF0IGluIHNvbWUgbGF0ZXIgcGFzcy5cbiAgICBjdXN0b21FbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudFRhZy50b0xvd2VyQ2FzZSgpKTtcbiAgfVxuXG4gIGlmIChjdXN0b21FbC5zZXRQcm9wZXJ0aWVzKSB7XG4gICAgY3VzdG9tRWwuc2V0UHJvcGVydGllcyhhdHRyaWJ1dGVzKTtcbiAgfSBlbHNlIHtcbiAgICAvLyBJZiBjdXN0b20gZWxlbWVudCBkZWZpbml0aW9uIHdhc24ndCBsb2FkZWQgeWV0IC0gc2V0UHJvcGVydGllcyB3b3VsZCBiZVxuICAgIC8vIG1pc3NpbmcsIGJ1dCBubyBoYXJtIGluIHNldHRpbmcgYXR0cmlidXRlcyBvbmUtYnktb25lIHRoZW4uXG4gICAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICBjdXN0b21FbFtrZXldID0gYXR0cmlidXRlc1trZXldO1xuICAgIH0pO1xuICB9XG5cbiAgaWYgKGN1c3RvbUVsLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByb290RWwuYXBwZW5kQ2hpbGQoY3VzdG9tRWwpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3QgYXR0cmlidXRlQ2xhc3NOYW1lcyA9IChcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGF0dHJpYnV0ZXM6IHN0cmluZ1tdXG4pOiBzdHJpbmcgPT4ge1xuICBpZiAoIXN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIGF0dHJpYnV0ZXNcbiAgICAubWFwKChhdHRyaWJ1dGUpID0+XG4gICAgICBhdHRyaWJ1dGUgaW4gc3RhdGVPYmouYXR0cmlidXRlcyA/IFwiaGFzLVwiICsgYXR0cmlidXRlIDogXCJcIlxuICAgIClcbiAgICAuZmlsdGVyKChhdHRyKSA9PiBhdHRyICE9PSBcIlwiKVxuICAgIC5qb2luKFwiIFwiKTtcbn07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBjYW5Ub2dnbGVEb21haW4gPSAoaGFzczogSG9tZUFzc2lzdGFudCwgZG9tYWluOiBzdHJpbmcpID0+IHtcbiAgY29uc3Qgc2VydmljZXMgPSBoYXNzLnNlcnZpY2VzW2RvbWFpbl07XG4gIGlmICghc2VydmljZXMpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoZG9tYWluID09PSBcImxvY2tcIikge1xuICAgIHJldHVybiBcImxvY2tcIiBpbiBzZXJ2aWNlcztcbiAgfVxuICBpZiAoZG9tYWluID09PSBcImNvdmVyXCIpIHtcbiAgICByZXR1cm4gXCJvcGVuX2NvdmVyXCIgaW4gc2VydmljZXM7XG4gIH1cbiAgcmV0dXJuIFwidHVybl9vblwiIGluIHNlcnZpY2VzO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBjYW5Ub2dnbGVEb21haW4gfSBmcm9tIFwiLi9jYW5fdG9nZ2xlX2RvbWFpblwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuL3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuZXhwb3J0IGNvbnN0IGNhblRvZ2dsZVN0YXRlID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG4gIGlmIChkb21haW4gPT09IFwiZ3JvdXBcIikge1xuICAgIHJldHVybiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJvblwiIHx8IHN0YXRlT2JqLnN0YXRlID09PSBcIm9mZlwiO1xuICB9XG4gIGlmIChkb21haW4gPT09IFwiY2xpbWF0ZVwiKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNDA5Nik7XG4gIH1cblxuICByZXR1cm4gY2FuVG9nZ2xlRG9tYWluKGhhc3MsIGRvbWFpbik7XG59O1xuIiwiZXhwb3J0IGNvbnN0IGNvbXB1dGVEb21haW4gPSAoZW50aXR5SWQ6IHN0cmluZyk6IHN0cmluZyA9PiB7XG4gIHJldHVybiBlbnRpdHlJZC5zdWJzdHIoMCwgZW50aXR5SWQuaW5kZXhPZihcIi5cIikpO1xufTtcbiIsImltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbi8vIEV4cGVjdHMgY2xhc3NOYW1lcyB0byBiZSBhbiBvYmplY3QgbWFwcGluZyBmZWF0dXJlLWJpdCAtPiBjbGFzc05hbWVcbmV4cG9ydCBjb25zdCBmZWF0dXJlQ2xhc3NOYW1lcyA9IChcbiAgc3RhdGVPYmo6IEhhc3NFbnRpdHksXG4gIGNsYXNzTmFtZXM6IHsgW2ZlYXR1cmU6IG51bWJlcl06IHN0cmluZyB9XG4pID0+IHtcbiAgaWYgKCFzdGF0ZU9iaiB8fCAhc3RhdGVPYmouYXR0cmlidXRlcy5zdXBwb3J0ZWRfZmVhdHVyZXMpIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIHJldHVybiBPYmplY3Qua2V5cyhjbGFzc05hbWVzKVxuICAgIC5tYXAoKGZlYXR1cmUpID0+XG4gICAgICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIE51bWJlcihmZWF0dXJlKSkgPyBjbGFzc05hbWVzW2ZlYXR1cmVdIDogXCJcIlxuICAgIClcbiAgICAuZmlsdGVyKChhdHRyKSA9PiBhdHRyICE9PSBcIlwiKVxuICAgIC5qb2luKFwiIFwiKTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY2FuVG9nZ2xlU3RhdGUgfSBmcm9tIFwiLi9jYW5fdG9nZ2xlX3N0YXRlXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgRE9NQUlOU19XSVRIX0NBUkQgfSBmcm9tIFwiLi4vY29uc3RcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHN0YXRlQ2FyZFR5cGUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcInVuYXZhaWxhYmxlXCIpIHtcbiAgICByZXR1cm4gXCJkaXNwbGF5XCI7XG4gIH1cblxuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChET01BSU5TX1dJVEhfQ0FSRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgcmV0dXJuIGRvbWFpbjtcbiAgfVxuICBpZiAoXG4gICAgY2FuVG9nZ2xlU3RhdGUoaGFzcywgc3RhdGVPYmopICYmXG4gICAgc3RhdGVPYmouYXR0cmlidXRlcy5jb250cm9sICE9PSBcImhpZGRlblwiXG4gICkge1xuICAgIHJldHVybiBcInRvZ2dsZVwiO1xuICB9XG4gIHJldHVybiBcImRpc3BsYXlcIjtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IERPTUFJTlNfSElERV9NT1JFX0lORk8sIERPTUFJTlNfV0lUSF9NT1JFX0lORk8gfSBmcm9tIFwiLi4vY29uc3RcIjtcblxuZXhwb3J0IGNvbnN0IHN0YXRlTW9yZUluZm9UeXBlID0gKHN0YXRlT2JqOiBIYXNzRW50aXR5KSA9PiB7XG4gIGNvbnN0IGRvbWFpbiA9IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaik7XG5cbiAgaWYgKERPTUFJTlNfV0lUSF9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBkb21haW47XG4gIH1cbiAgaWYgKERPTUFJTlNfSElERV9NT1JFX0lORk8uaW5jbHVkZXMoZG9tYWluKSkge1xuICAgIHJldHVybiBcImhpZGRlblwiO1xuICB9XG4gIHJldHVybiBcImRlZmF1bHRcIjtcbn07XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9oYS1yZWxhdGl2ZS10aW1lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWJhZGdlXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNsYXNzIFN0YXRlSW5mbyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7dGhpcy5zdHlsZVRlbXBsYXRlfSAke3RoaXMuc3RhdGVCYWRnZVRlbXBsYXRlfSAke3RoaXMuaW5mb1RlbXBsYXRlfVxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIG1pbi13aWR0aDogMTIwcHg7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtydGxdKSBzdGF0ZS1iYWRnZSB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgLmluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDU2cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAubmFtZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm5hbWVbaW4tZGlhbG9nXSxcbiAgICAgICAgOmhvc3QoW3NlY29uZGFyeS1saW5lXSkgLm5hbWUge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtYWdvLFxuICAgICAgICAuZXh0cmEtaW5mbyxcbiAgICAgICAgLmV4dHJhLWluZm8gPiAqIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUJhZGdlVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtYmFkZ2Ugc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9zdGF0ZS1iYWRnZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBpbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibmFtZVwiIGluLWRpYWxvZyQ9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICBbW2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopXV1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2luRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZS1hZ29cIj5cbiAgICAgICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICAgIGRhdGV0aW1lPVwiW1tzdGF0ZU9iai5sYXN0X2NoYW5nZWRdXVwiXG4gICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWluRGlhbG9nXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtaW5mb1wiPjxzbG90PiA8L3Nsb3Q+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6ICgpID0+IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIHJ0bDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlUlRMKGhhc3MpIHtcbiAgICByZXR1cm4gY29tcHV0ZVJUTChoYXNzKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1pbmZvXCIsIFN0YXRlSW5mbyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IGhhc3NBdHRyaWJ1dGVVdGlsIGZyb20gXCIuLi91dGlsL2hhc3MtYXR0cmlidXRlcy11dGlsXCI7XG5cbmNsYXNzIEhhQXR0cmlidXRlcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuZGF0YS1lbnRyeSAudmFsdWUge1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgfVxuICAgICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgdmVydGljYWxcIj5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICBpdGVtcz1cIltbY29tcHV0ZURpc3BsYXlBdHRyaWJ1dGVzKHN0YXRlT2JqLCBmaWx0ZXJzQXJyYXkpXV1cIlxuICAgICAgICAgIGFzPVwiYXR0cmlidXRlXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkYXRhLWVudHJ5IGxheW91dCBqdXN0aWZpZWQgaG9yaXpvbnRhbFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImtleVwiPltbZm9ybWF0QXR0cmlidXRlKGF0dHJpYnV0ZSldXTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInZhbHVlXCI+XG4gICAgICAgICAgICAgIFtbZm9ybWF0QXR0cmlidXRlVmFsdWUoc3RhdGVPYmosIGF0dHJpYnV0ZSldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhdHRyaWJ1dGlvblwiIGhpZGRlbiQ9XCJbWyFjb21wdXRlQXR0cmlidXRpb24oc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICBbW2NvbXB1dGVBdHRyaWJ1dGlvbihzdGF0ZU9iaildXVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBleHRyYUZpbHRlcnM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICBmaWx0ZXJzQXJyYXk6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVGaWx0ZXJzQXJyYXkoZXh0cmFGaWx0ZXJzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUZpbHRlcnNBcnJheShleHRyYUZpbHRlcnMpIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoaGFzc0F0dHJpYnV0ZVV0aWwuTE9HSUNfU1RBVEVfQVRUUklCVVRFUykuY29uY2F0KFxuICAgICAgZXh0cmFGaWx0ZXJzID8gZXh0cmFGaWx0ZXJzLnNwbGl0KFwiLFwiKSA6IFtdXG4gICAgKTtcbiAgfVxuXG4gIGNvbXB1dGVEaXNwbGF5QXR0cmlidXRlcyhzdGF0ZU9iaiwgZmlsdGVyc0FycmF5KSB7XG4gICAgaWYgKCFzdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc3RhdGVPYmouYXR0cmlidXRlcykuZmlsdGVyKGZ1bmN0aW9uKGtleSkge1xuICAgICAgcmV0dXJuIGZpbHRlcnNBcnJheS5pbmRleE9mKGtleSkgPT09IC0xO1xuICAgIH0pO1xuICB9XG5cbiAgZm9ybWF0QXR0cmlidXRlKGF0dHJpYnV0ZSkge1xuICAgIHJldHVybiBhdHRyaWJ1dGUucmVwbGFjZSgvXy9nLCBcIiBcIik7XG4gIH1cblxuICBmb3JtYXRBdHRyaWJ1dGVWYWx1ZShzdGF0ZU9iaiwgYXR0cmlidXRlKSB7XG4gICAgdmFyIHZhbHVlID0gc3RhdGVPYmouYXR0cmlidXRlc1thdHRyaWJ1dGVdO1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCkgcmV0dXJuIFwiLVwiO1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlLmpvaW4oXCIsIFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbHVlIGluc3RhbmNlb2YgT2JqZWN0ID8gSlNPTi5zdHJpbmdpZnkodmFsdWUsIG51bGwsIDIpIDogdmFsdWU7XG4gIH1cblxuICBjb21wdXRlQXR0cmlidXRpb24oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5hdHRyaWJ1dGlvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1hdHRyaWJ1dGVzXCIsIEhhQXR0cmlidXRlcyk7XG4iLCJpbXBvcnQge1xuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIENhbWVyYUVudGl0eSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHtcbiAgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNLFxuICBmZXRjaFN0cmVhbVVybCxcbiAgY29tcHV0ZU1KUEVHU3RyZWFtVXJsLFxufSBmcm9tIFwiLi4vZGF0YS9jYW1lcmFcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxudHlwZSBITFNNb2R1bGUgPSB0eXBlb2YgaW1wb3J0KFwiaGxzLmpzXCIpO1xuXG5AY3VzdG9tRWxlbWVudChcImhhLWNhbWVyYS1zdHJlYW1cIilcbmNsYXNzIEhhQ2FtZXJhU3RyZWFtIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzPzogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogQ2FtZXJhRW50aXR5O1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuIH0pIHB1YmxpYyBzaG93Q29udHJvbHMgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXR0YWNoZWQgPSBmYWxzZTtcbiAgLy8gV2Uga2VlcCB0cmFjayBpZiB3ZSBzaG91bGQgZm9yY2UgTUpQRUcgd2l0aCBhIHN0cmluZ1xuICAvLyB0aGF0IHdheSBpdCBhdXRvbWF0aWNhbGx5IHJlc2V0cyBpZiB3ZSBjaGFuZ2UgZW50aXR5LlxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9mb3JjZU1KUEVHOiBzdHJpbmcgfCB1bmRlZmluZWQgPSB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2hsc1BvbHlmaWxsSW5zdGFuY2U/OiBIbHM7XG5cbiAgcHVibGljIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSB0cnVlO1xuICB9XG5cbiAgcHVibGljIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5fYXR0YWNoZWQgPSBmYWxzZTtcbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuc3RhdGVPYmogfHwgIXRoaXMuX2F0dGFjaGVkKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgJHtfX0RFTU9fXyB8fCB0aGlzLl9zaG91bGRSZW5kZXJNSlBFR1xuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgIEBsb2FkPSR7dGhpcy5fZWxlbWVudFJlc2l6ZWR9XG4gICAgICAgICAgICAgIC5zcmM9JHtfX0RFTU9fX1xuICAgICAgICAgICAgICAgID8gYC9hcGkvY2FtZXJhX3Byb3h5X3N0cmVhbS8ke3RoaXMuc3RhdGVPYmouZW50aXR5X2lkfWBcbiAgICAgICAgICAgICAgICA6IGNvbXB1dGVNSlBFR1N0cmVhbVVybCh0aGlzLnN0YXRlT2JqKX1cbiAgICAgICAgICAgICAgLmFsdD0ke2BQcmV2aWV3IG9mIHRoZSAke2NvbXB1dGVTdGF0ZU5hbWUoXG4gICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9ialxuICAgICAgICAgICAgICApfSBjYW1lcmEuYH1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgYFxuICAgICAgICA6IGh0bWxgXG4gICAgICAgICAgICA8dmlkZW9cbiAgICAgICAgICAgICAgYXV0b3BsYXlcbiAgICAgICAgICAgICAgbXV0ZWRcbiAgICAgICAgICAgICAgcGxheXNpbmxpbmVcbiAgICAgICAgICAgICAgP2NvbnRyb2xzPSR7dGhpcy5zaG93Q29udHJvbHN9XG4gICAgICAgICAgICAgIEBsb2FkZWRkYXRhPSR7dGhpcy5fZWxlbWVudFJlc2l6ZWR9XG4gICAgICAgICAgICA+PC92aWRlbz5cbiAgICAgICAgICBgfVxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgY29uc3Qgc3RhdGVPYmpDaGFuZ2VkID0gY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpO1xuICAgIGNvbnN0IGF0dGFjaGVkQ2hhbmdlZCA9IGNoYW5nZWRQcm9wcy5oYXMoXCJfYXR0YWNoZWRcIik7XG5cbiAgICBjb25zdCBvbGRTdGF0ZSA9IGNoYW5nZWRQcm9wcy5nZXQoXCJzdGF0ZU9ialwiKSBhcyB0aGlzW1wic3RhdGVPYmpcIl07XG4gICAgY29uc3Qgb2xkRW50aXR5SWQgPSBvbGRTdGF0ZSA/IG9sZFN0YXRlLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcbiAgICBjb25zdCBjdXJFbnRpdHlJZCA9IHRoaXMuc3RhdGVPYmogPyB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChcbiAgICAgICghc3RhdGVPYmpDaGFuZ2VkICYmICFhdHRhY2hlZENoYW5nZWQpIHx8XG4gICAgICAoc3RhdGVPYmpDaGFuZ2VkICYmIG9sZEVudGl0eUlkID09PSBjdXJFbnRpdHlJZClcbiAgICApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSBhcmUgbm8gbG9uZ2VyIGF0dGFjaGVkLCBkZXN0cm95IHBvbHlmaWxsLlxuICAgIGlmIChhdHRhY2hlZENoYW5nZWQgJiYgIXRoaXMuX2F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9kZXN0cm95UG9seWZpbGwoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOb3RoaW5nIHRvIGRvIGlmIHdlIGFyZSByZW5kZXIgTUpQRUcuXG4gICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlck1KUEVHKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gVGVhciBkb3duIGV4aXN0aW5nIHBvbHlmaWxsLCBpZiBhdmFpbGFibGVcbiAgICB0aGlzLl9kZXN0cm95UG9seWZpbGwoKTtcblxuICAgIGlmIChjdXJFbnRpdHlJZCkge1xuICAgICAgdGhpcy5fc3RhcnRIbHMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGdldCBfc2hvdWxkUmVuZGVyTUpQRUcoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPT09IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZCB8fFxuICAgICAgIXRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJzdHJlYW1cIikgfHxcbiAgICAgICFzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiEsIENBTUVSQV9TVVBQT1JUX1NUUkVBTSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3ZpZGVvRWwoKTogSFRNTFZpZGVvRWxlbWVudCB7XG4gICAgcmV0dXJuIHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInZpZGVvXCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3N0YXJ0SGxzKCk6IFByb21pc2U8dm9pZD4ge1xuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIGNvbnN0IEhscyA9ICgoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiaGxzLmpzXCIgKi8gXCJobHMuanNcIikpIGFzIGFueSlcbiAgICAgIC5kZWZhdWx0IGFzIEhMU01vZHVsZTtcbiAgICBsZXQgaGxzU3VwcG9ydGVkID0gSGxzLmlzU3VwcG9ydGVkKCk7XG4gICAgY29uc3QgdmlkZW9FbCA9IHRoaXMuX3ZpZGVvRWw7XG5cbiAgICBpZiAoIWhsc1N1cHBvcnRlZCkge1xuICAgICAgaGxzU3VwcG9ydGVkID1cbiAgICAgICAgdmlkZW9FbC5jYW5QbGF5VHlwZShcImFwcGxpY2F0aW9uL3ZuZC5hcHBsZS5tcGVndXJsXCIpICE9PSBcIlwiO1xuICAgIH1cblxuICAgIGlmICghaGxzU3VwcG9ydGVkKSB7XG4gICAgICB0aGlzLl9mb3JjZU1KUEVHID0gdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IHVybCB9ID0gYXdhaXQgZmV0Y2hTdHJlYW1VcmwoXG4gICAgICAgIHRoaXMuaGFzcyEsXG4gICAgICAgIHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZFxuICAgICAgKTtcblxuICAgICAgaWYgKEhscy5pc1N1cHBvcnRlZCgpKSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckhMU1BvbHlmaWxsKHZpZGVvRWwsIEhscywgdXJsKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3JlbmRlckhMU05hdGl2ZSh2aWRlb0VsLCB1cmwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gRmFpbHMgaWYgd2Ugd2VyZSB1bmFibGUgdG8gZ2V0IGEgc3RyZWFtXG4gICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcbiAgICAgIHRoaXMuX2ZvcmNlTUpQRUcgPSB0aGlzLnN0YXRlT2JqIS5lbnRpdHlfaWQ7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcmVuZGVySExTTmF0aXZlKHZpZGVvRWw6IEhUTUxWaWRlb0VsZW1lbnQsIHVybDogc3RyaW5nKSB7XG4gICAgdmlkZW9FbC5zcmMgPSB1cmw7XG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUpID0+XG4gICAgICB2aWRlb0VsLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkZWRtZXRhZGF0YVwiLCByZXNvbHZlKVxuICAgICk7XG4gICAgdmlkZW9FbC5wbGF5KCk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9yZW5kZXJITFNQb2x5ZmlsbChcbiAgICB2aWRlb0VsOiBIVE1MVmlkZW9FbGVtZW50LFxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgIEhsczogSExTTW9kdWxlLFxuICAgIHVybDogc3RyaW5nXG4gICkge1xuICAgIGNvbnN0IGhscyA9IG5ldyBIbHMoKTtcbiAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlID0gaGxzO1xuICAgIGhscy5hdHRhY2hNZWRpYSh2aWRlb0VsKTtcbiAgICBobHMub24oSGxzLkV2ZW50cy5NRURJQV9BVFRBQ0hFRCwgKCkgPT4ge1xuICAgICAgaGxzLmxvYWRTb3VyY2UodXJsKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2VsZW1lbnRSZXNpemVkKCkge1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVzdHJveVBvbHlmaWxsKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlKSB7XG4gICAgICB0aGlzLl9obHNQb2x5ZmlsbEluc3RhbmNlLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuX2hsc1BvbHlmaWxsSW5zdGFuY2UgPSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3QsXG4gICAgICBpbWcsXG4gICAgICB2aWRlbyB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBpbWcsXG4gICAgICB2aWRlbyB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImhhLWNhbWVyYS1zdHJlYW1cIjogSGFDYW1lcmFTdHJlYW07XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBIYUNsaW1hdGVDb250cm9sIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAvKiBsb2NhbCBET00gc3R5bGVzIGdvIGhlcmUgKi9cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICAgIH1cbiAgICAgICAgLmluLWZsdXgjdGFyZ2V0X3RlbXBlcmF0dXJlIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgICB9XG4gICAgICAgICN0YXJnZXRfdGVtcGVyYXR1cmUge1xuICAgICAgICAgIEBhcHBseSAtLWxheW91dC1zZWxmLWNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRyb2wtYnV0dG9ucyB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMDAlO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBoZWlnaHQ6IDQ4cHg7XG4gICAgICAgICAgd2lkdGg6IDQ4cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDwhLS0gbG9jYWwgRE9NIGdvZXMgaGVyZSAtLT5cbiAgICAgIDxkaXYgaWQ9XCJ0YXJnZXRfdGVtcGVyYXR1cmVcIj5bW3ZhbHVlXV0gW1t1bml0c11dPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbC1idXR0b25zXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpjaGV2cm9uLXVwXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiaW5jcmVtZW50VmFsdWVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJoYXNzOmNoZXZyb24tZG93blwiXG4gICAgICAgICAgICBvbi1jbGljaz1cImRlY3JlbWVudFZhbHVlXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcInZhbHVlQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIHVuaXRzOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIH0sXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgfSxcbiAgICAgIG1heDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgICAgc3RlcDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAxLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgdGVtcGVyYXR1cmVTdGF0ZUluRmx1eChpbkZsdXgpIHtcbiAgICB0aGlzLiQudGFyZ2V0X3RlbXBlcmF0dXJlLmNsYXNzTGlzdC50b2dnbGUoXCJpbi1mbHV4XCIsIGluRmx1eCk7XG4gIH1cblxuICBfcm91bmQodmFsKSB7XG4gICAgLy8gcm91bmQgdmFsdWUgdG8gcHJlY2lzaW9uIGRlcml2ZWQgZnJvbSBzdGVwXG4gICAgLy8gaW5zaXJlZCBieSBodHRwczovL2dpdGh1Yi5jb20vc291bmRhcjI0L3JvdW5kU2xpZGVyL2Jsb2IvbWFzdGVyL3NyYy9yb3VuZHNsaWRlci5qc1xuICAgIGNvbnN0IHMgPSB0aGlzLnN0ZXAudG9TdHJpbmcoKS5zcGxpdChcIi5cIik7XG4gICAgcmV0dXJuIHNbMV0gPyBwYXJzZUZsb2F0KHZhbC50b0ZpeGVkKHNbMV0ubGVuZ3RoKSkgOiBNYXRoLnJvdW5kKHZhbCk7XG4gIH1cblxuICBpbmNyZW1lbnRWYWx1ZSgpIHtcbiAgICBjb25zdCBuZXd2YWwgPSB0aGlzLl9yb3VuZCh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcbiAgICBpZiAodGhpcy52YWx1ZSA8IHRoaXMubWF4KSB7XG4gICAgICB0aGlzLmxhc3RfY2hhbmdlZCA9IERhdGUubm93KCk7XG4gICAgICB0aGlzLnRlbXBlcmF0dXJlU3RhdGVJbkZsdXgodHJ1ZSk7XG4gICAgfVxuICAgIGlmIChuZXd2YWwgPD0gdGhpcy5tYXgpIHtcbiAgICAgIC8vIElmIG5vIGluaXRpYWwgdGFyZ2V0X3RlbXBcbiAgICAgIC8vIHRoaXMgZm9yY2VzIGNvbnRyb2wgdG8gc3RhcnRcbiAgICAgIC8vIGZyb20gdGhlIG1pbiBjb25maWd1cmVkIGluc3RlYWQgb2YgMFxuICAgICAgaWYgKG5ld3ZhbCA8PSB0aGlzLm1pbikge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgfVxuICB9XG5cbiAgZGVjcmVtZW50VmFsdWUoKSB7XG4gICAgY29uc3QgbmV3dmFsID0gdGhpcy5fcm91bmQodGhpcy52YWx1ZSAtIHRoaXMuc3RlcCk7XG4gICAgaWYgKHRoaXMudmFsdWUgPiB0aGlzLm1pbikge1xuICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KHRydWUpO1xuICAgIH1cbiAgICBpZiAobmV3dmFsID49IHRoaXMubWluKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgfVxuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKCkge1xuICAgIC8vIHdoZW4gdGhlIGxhc3RfY2hhbmdlZCB0aW1lc3RhbXAgaXMgY2hhbmdlZCxcbiAgICAvLyB0cmlnZ2VyIGEgcG90ZW50aWFsIGV2ZW50IGZpcmUgaW5cbiAgICAvLyB0aGUgZnV0dXJlLCBhcyBsb25nIGFzIGxhc3QgY2hhbmdlZCBpcyBmYXIgZW5vdWdoIGluIHRoZVxuICAgIC8vIHBhc3QuXG4gICAgaWYgKHRoaXMubGFzdF9jaGFuZ2VkKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RfY2hhbmdlZCA+PSAyMDAwKSB7XG4gICAgICAgICAgdGhpcy5maXJlKFwiY2hhbmdlXCIpO1xuICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LCAyMDEwKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY2xpbWF0ZS1jb250cm9sXCIsIEhhQ2xpbWF0ZUNvbnRyb2wpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuXG4vKipcbiAqIENvbG9yLXBpY2tlciBjdXN0b20gZWxlbWVudFxuICpcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFDb2xvclBpY2tlciBleHRlbmRzIEV2ZW50c01peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgI2NhbnZhcyB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1heC13aWR0aDogMzMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgI2NhbnZhcyA+ICoge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB9XG4gICAgICAgICNpbnRlcmFjdGlvbkxheWVyIHtcbiAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgfVxuICAgICAgICAjYmFja2dyb3VuZExheWVyIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgICAtLXdoZWVsLWJvcmRlcmNvbG9yOiB2YXIoLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyY29sb3IsIHdoaXRlKTtcbiAgICAgICAgICAtLXdoZWVsLWJvcmRlcndpZHRoOiB2YXIoLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyd2lkdGgsIDMpO1xuICAgICAgICAgIC0td2hlZWwtc2hhZG93OiB2YXIoXG4gICAgICAgICAgICAtLWhhLWNvbG9yLXBpY2tlci13aGVlbC1zaGFkb3csXG4gICAgICAgICAgICByZ2IoMTUsIDE1LCAxNSkgMTBweCA1cHggNXB4IDBweFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICAjbWFya2VyIHtcbiAgICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgc3Ryb2tlOiB2YXIoLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcmNvbG9yLCB3aGl0ZSk7XG4gICAgICAgICAgc3Ryb2tlLXdpZHRoOiB2YXIoLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcndpZHRoLCAzKTtcbiAgICAgICAgICBmaWx0ZXI6IHVybCgjbWFya2VyLXNoYWRvdyk7XG4gICAgICAgIH1cbiAgICAgICAgLmRyYWdnaW5nICNtYXJrZXIge1xuICAgICAgICB9XG5cbiAgICAgICAgI2NvbG9yVG9vbHRpcCB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICBmaWxsOiBjdXJyZW50Q29sb3I7XG4gICAgICAgICAgc3Ryb2tlOiB2YXIoLS1oYS1jb2xvci1waWNrZXItdG9vbHRpcC1ib3JkZXJjb2xvciwgd2hpdGUpO1xuICAgICAgICAgIHN0cm9rZS13aWR0aDogdmFyKC0taGEtY29sb3ItcGlja2VyLXRvb2x0aXAtYm9yZGVyd2lkdGgsIDMpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRvdWNoLmRyYWdnaW5nICNjb2xvclRvb2x0aXAge1xuICAgICAgICAgIGRpc3BsYXk6IGluaGVyaXQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8ZGl2IGlkPVwiY2FudmFzXCI+XG4gICAgICAgIDxzdmcgaWQ9XCJpbnRlcmFjdGlvbkxheWVyXCI+XG4gICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICA8ZmlsdGVyXG4gICAgICAgICAgICAgIGlkPVwibWFya2VyLXNoYWRvd1wiXG4gICAgICAgICAgICAgIHg9XCItNTAlXCJcbiAgICAgICAgICAgICAgeT1cIi01MCVcIlxuICAgICAgICAgICAgICB3aWR0aD1cIjIwMCVcIlxuICAgICAgICAgICAgICBoZWlnaHQ9XCIyMDAlXCJcbiAgICAgICAgICAgICAgZmlsdGVyVW5pdHM9XCJvYmplY3RCb3VuZGluZ0JveFwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxmZU9mZnNldFxuICAgICAgICAgICAgICAgIHJlc3VsdD1cIm9mZk91dFwiXG4gICAgICAgICAgICAgICAgaW49XCJTb3VyY2VBbHBoYVwiXG4gICAgICAgICAgICAgICAgZHg9XCIyXCJcbiAgICAgICAgICAgICAgICBkeT1cIjJcIlxuICAgICAgICAgICAgICA+PC9mZU9mZnNldD5cbiAgICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyXG4gICAgICAgICAgICAgICAgcmVzdWx0PVwiYmx1ck91dFwiXG4gICAgICAgICAgICAgICAgaW49XCJvZmZPdXRcIlxuICAgICAgICAgICAgICAgIHN0ZERldmlhdGlvbj1cIjJcIlxuICAgICAgICAgICAgICA+PC9mZUdhdXNzaWFuQmx1cj5cbiAgICAgICAgICAgICAgPGZlQ29tcG9uZW50VHJhbnNmZXIgaW49XCJibHVyT3V0XCIgcmVzdWx0PVwiYWxwaGFPdXRcIj5cbiAgICAgICAgICAgICAgICA8ZmVGdW5jQSB0eXBlPVwibGluZWFyXCIgc2xvcGU9XCIwLjNcIj48L2ZlRnVuY0E+XG4gICAgICAgICAgICAgIDwvZmVDb21wb25lbnRUcmFuc2Zlcj5cbiAgICAgICAgICAgICAgPGZlQmxlbmRcbiAgICAgICAgICAgICAgICBpbj1cIlNvdXJjZUdyYXBoaWNcIlxuICAgICAgICAgICAgICAgIGluMj1cImFscGhhT3V0XCJcbiAgICAgICAgICAgICAgICBtb2RlPVwibm9ybWFsXCJcbiAgICAgICAgICAgICAgPjwvZmVCbGVuZD5cbiAgICAgICAgICAgIDwvZmlsdGVyPlxuICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgPC9zdmc+XG4gICAgICAgIDxjYW52YXMgaWQ9XCJiYWNrZ3JvdW5kTGF5ZXJcIj48L2NhbnZhcz5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhzQ29sb3I6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgLy8gdXNlIHRoZXNlIHByb3BlcnRpZXMgdG8gdXBkYXRlIHRoZSBzdGF0ZSB2aWEgYXR0cmlidXRlc1xuICAgICAgZGVzaXJlZEhzQ29sb3I6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJhcHBseUhzQ29sb3JcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHdpZHRoLCBoZWlnaHQgYW5kIHJhZGl1cyBhcHBseSB0byB0aGUgY29vcmRpbmF0ZXMgb2ZcbiAgICAgIC8vIG9mIHRoZSBjYW52YXMuXG4gICAgICAvLyBib3JkZXIgd2lkdGggYXJlIHJlbGF0aXZlIHRvIHRoZXNlIG51bWJlcnNcbiAgICAgIC8vIHRoZSBvbnNjcmVlbiBkaXNwbGF5ZWQgc2l6ZSBzaG91bGQgYmUgY29udHJvbGxlZCB3aXRoIGNzc1xuICAgICAgLy8gYW5kIHNob3VsZCBiZSB0aGUgc2FtZSBvciBzbWFsbGVyXG4gICAgICB3aWR0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiA1MDAsXG4gICAgICB9LFxuXG4gICAgICBoZWlnaHQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogNTAwLFxuICAgICAgfSxcblxuICAgICAgcmFkaXVzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDIyNSxcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZSBhbW91bnQgc2VnbWVudHMgZm9yIHRoZSBodWVcbiAgICAgIC8vIDAgPSBjb250aW51b3VzIGdyYWRpZW50XG4gICAgICAvLyBvdGhlciB0aGFuIDAgZ2l2ZXMgJ3BpZS1waWVjZXMnXG4gICAgICBodWVTZWdtZW50czoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvYnNlcnZlcjogXCJzZWdtZW50YXRpb25DaGFuZ2VcIixcbiAgICAgIH0sXG5cbiAgICAgIC8vIHRoZSBhbW91bnQgc2VnbWVudHMgZm9yIHRoZSBodWVcbiAgICAgIC8vIDAgPSBjb250aW51b3VzIGdyYWRpZW50XG4gICAgICAvLyAxID0gb25seSBmdWxseSBzYXR1cmF0ZWRcbiAgICAgIC8vID4gMSA9IHNlZ21lbnRzIGZyb20gd2hpdGUgdG8gZnVsbHkgc2F0dXJhdGVkXG4gICAgICBzYXR1cmF0aW9uU2VnbWVudHM6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic2VnbWVudGF0aW9uQ2hhbmdlXCIsXG4gICAgICB9LFxuXG4gICAgICAvLyBzZXQgdG8gdHJ1ZSB0byBtYWtlIHRoZSBzZWdtZW50cyBwdXJlbHkgZXN0aGV0aWNhbFxuICAgICAgLy8gdGhpcyBhbGxvd3Mgc2VsZWN0aW9uIG9mZiBhbGwgY29sbG9ycywgYWxzb1xuICAgICAgLy8gaW50ZXJwb2xhdGVkIGJldHdlZW4gdGhlIHNlZ21lbnRzXG4gICAgICBpZ25vcmVTZWdtZW50czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICAvLyB0aHJvdHRsZSB0ZSBhbW91bnQgb2YgJ2NvbG9yc2VsZWN0ZWQnIGV2ZW50cyBmaXJlZFxuICAgICAgLy8gdmFsdWUgaXMgdGltZW91dCBpbiBtaWxsaXNlY29uZHNcbiAgICAgIHRocm90dGxlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDUwMCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5zZXR1cExheWVycygpO1xuICAgIHRoaXMuZHJhd0NvbG9yV2hlZWwoKTtcbiAgICB0aGlzLmRyYXdNYXJrZXIoKTtcblxuICAgIHRoaXMuaW50ZXJhY3Rpb25MYXllci5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIChldikgPT5cbiAgICAgIHRoaXMub25Nb3VzZURvd24oZXYpXG4gICAgKTtcbiAgICB0aGlzLmludGVyYWN0aW9uTGF5ZXIuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgKGV2KSA9PlxuICAgICAgdGhpcy5vblRvdWNoU3RhcnQoZXYpXG4gICAgKTtcbiAgfVxuXG4gIC8vIGNvbnZlcnRzIGJyb3dzZXIgY29vcmRpbmF0ZXMgdG8gY2FudmFzIGNhbnZhcyBjb29yZGluYXRlc1xuICAvLyBvcmlnaW4gaXMgd2hlZWwgY2VudGVyXG4gIC8vIHJldHVybnMge3g6IFgsIHk6IFl9IG9iamVjdFxuICBjb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyhjbGllbnRYLCBjbGllbnRZKSB7XG4gICAgdmFyIHN2Z1BvaW50ID0gdGhpcy5pbnRlcmFjdGlvbkxheWVyLmNyZWF0ZVNWR1BvaW50KCk7XG4gICAgc3ZnUG9pbnQueCA9IGNsaWVudFg7XG4gICAgc3ZnUG9pbnQueSA9IGNsaWVudFk7XG4gICAgdmFyIGNjID0gc3ZnUG9pbnQubWF0cml4VHJhbnNmb3JtKFxuICAgICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLmdldFNjcmVlbkNUTSgpLmludmVyc2UoKVxuICAgICk7XG4gICAgcmV0dXJuIHsgeDogY2MueCwgeTogY2MueSB9O1xuICB9XG5cbiAgLy8gTW91c2UgZXZlbnRzXG5cbiAgb25Nb3VzZURvd24oZXYpIHtcbiAgICBjb25zdCBjYyA9IHRoaXMuY29udmVydFRvQ2FudmFzQ29vcmRpbmF0ZXMoZXYuY2xpZW50WCwgZXYuY2xpZW50WSk7XG4gICAgLy8gcmV0dXJuIGlmIHdlJ3JlIG5vdCBvbiB0aGUgd2hlZWxcbiAgICBpZiAoIXRoaXMuaXNJbldoZWVsKGNjLngsIGNjLnkpKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGEgbW91c2Vkb3duIGluIHdoZWVsIGlzIGFsd2F5cyBhIGNvbG9yIHNlbGVjdCBhY3Rpb25cbiAgICB0aGlzLm9uTW91c2VTZWxlY3QoZXYpO1xuICAgIC8vIGFsbG93IGRyYWdnaW5nXG4gICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcIm1vdXNlXCIsIFwiZHJhZ2dpbmdcIik7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZVNlbGVjdCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2V1cFwiLCB0aGlzLm9uTW91c2VVcCk7XG4gIH1cblxuICBvbk1vdXNlVXAoKSB7XG4gICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LnJlbW92ZShcIm1vdXNlXCIsIFwiZHJhZ2dpbmdcIik7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKFwibW91c2Vtb3ZlXCIsIHRoaXMub25Nb3VzZVNlbGVjdCk7XG4gIH1cblxuICBvbk1vdXNlU2VsZWN0KGV2KSB7XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHRoaXMucHJvY2Vzc1VzZXJTZWxlY3QoZXYpKTtcbiAgfVxuXG4gIC8vIFRvdWNoIGV2ZW50c1xuXG4gIG9uVG91Y2hTdGFydChldikge1xuICAgIHZhciB0b3VjaCA9IGV2LmNoYW5nZWRUb3VjaGVzWzBdO1xuICAgIGNvbnN0IGNjID0gdGhpcy5jb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyh0b3VjaC5jbGllbnRYLCB0b3VjaC5jbGllbnRZKTtcbiAgICAvLyByZXR1cm4gaWYgd2UncmUgbm90IG9uIHRoZSB3aGVlbFxuICAgIGlmICghdGhpcy5pc0luV2hlZWwoY2MueCwgY2MueSkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGV2LnRhcmdldCA9PT0gdGhpcy5tYXJrZXIpIHtcbiAgICAgIC8vIGRyYWcgbWFya2VyXG4gICAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdGhpcy5jYW52YXMuY2xhc3NMaXN0LmFkZChcInRvdWNoXCIsIFwiZHJhZ2dpbmdcIik7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoU2VsZWN0KTtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMub25Ub3VjaEVuZCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIGRvbid0IGZpcmUgY29sb3Igc2VsZWN0aW9uIGltbWVkaWF0ZWx5LFxuICAgIC8vIHdhaXQgZm9yIHRvdWNoZW5kIGFuZCBpbnZhbGlkYXRlIHdoZW4gd2Ugc2Nyb2xsXG4gICAgdGhpcy50YXBCZWNhbWVTY3JvbGwgPSBmYWxzZTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGVuZFwiLCB0aGlzLm9uVGFwKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICBcInRvdWNobW92ZVwiLFxuICAgICAgKCkgPT4ge1xuICAgICAgICB0aGlzLnRhcEJlY2FtZVNjcm9sbCA9IHRydWU7XG4gICAgICB9LFxuICAgICAgeyBwYXNzaXZlOiB0cnVlIH1cbiAgICApO1xuICB9XG5cbiAgb25UYXAoZXYpIHtcbiAgICBpZiAodGhpcy50YXBCZWNhbWVTY3JvbGwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLm9uVG91Y2hTZWxlY3QoZXYpO1xuICB9XG5cbiAgb25Ub3VjaEVuZCgpIHtcbiAgICB0aGlzLmNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKFwidG91Y2hcIiwgXCJkcmFnZ2luZ1wiKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy5vblRvdWNoU2VsZWN0KTtcbiAgfVxuXG4gIG9uVG91Y2hTZWxlY3QoZXYpIHtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gdGhpcy5wcm9jZXNzVXNlclNlbGVjdChldi5jaGFuZ2VkVG91Y2hlc1swXSkpO1xuICB9XG5cbiAgLypcbiAgICogR2VuZXJhbCBldmVudC9zZWxlY3Rpb24gaGFuZGxpbmdcbiAgICovXG5cbiAgLy8gUHJvY2VzcyB1c2VyIGlucHV0IHRvIGNvbG9yXG4gIHByb2Nlc3NVc2VyU2VsZWN0KGV2KSB7XG4gICAgdmFyIGNhbnZhc1hZID0gdGhpcy5jb252ZXJ0VG9DYW52YXNDb29yZGluYXRlcyhldi5jbGllbnRYLCBldi5jbGllbnRZKTtcbiAgICB2YXIgaHMgPSB0aGlzLmdldENvbG9yKGNhbnZhc1hZLngsIGNhbnZhc1hZLnkpO1xuICAgIHRoaXMub25Db2xvclNlbGVjdChocyk7XG4gIH1cblxuICAvLyBhcHBseSBjb2xvciB0byBtYXJrZXIgcG9zaXRpb24gYW5kIGNhbnZhc1xuICBvbkNvbG9yU2VsZWN0KGhzKSB7XG4gICAgdGhpcy5zZXRNYXJrZXJPbkNvbG9yKGhzKTsgLy8gbWFya2VyIGFsd2F5cyBmb2xsb3dzIG1vdW5zZSAncmF3JyBocyB2YWx1ZSAoPSBtb3VzZSBwb3NpdGlvbilcbiAgICBpZiAoIXRoaXMuaWdub3JlU2VnbWVudHMpIHtcbiAgICAgIC8vIGFwcGx5IHNlZ21lbnRzIGlmIG5lZWRlZFxuICAgICAgaHMgPSB0aGlzLmFwcGx5U2VnbWVudEZpbHRlcihocyk7XG4gICAgfVxuICAgIC8vIGFsd2F5cyBhcHBseSB0aGUgbmV3IGNvbG9yIHRvIHRoZSBpbnRlcmZhY2UgLyBjYW52YXNcbiAgICB0aGlzLmFwcGx5Q29sb3JUb0NhbnZhcyhocyk7XG4gICAgLy8gdGhyb3R0bGluZyBpcyBhcHBsaWVkIHRvIHVwZGF0aW5nIHRoZSBleHBvc2VkIGNvbG9ycyAocHJvcGVydGllcylcbiAgICAvLyBhbmQgZmlyaW5nIG9mIGV2ZW50c1xuICAgIGlmICh0aGlzLmNvbG9yU2VsZWN0SXNUaHJvdHRsZWQpIHtcbiAgICAgIC8vIG1ha2Ugc3VyZSB3ZSBhcHBseSB0aGUgbGFzdCBzZWxlY3RlZCBjb2xvclxuICAgICAgLy8gZXZlbnR1YWxseSBhZnRlciB0aHJvdHRsZSBsaW1pdCBoYXMgcGFzc2VkXG4gICAgICBjbGVhclRpbWVvdXQodGhpcy5lbnN1cmVGaW5hbFNlbGVjdCk7XG4gICAgICB0aGlzLmVuc3VyZUZpbmFsU2VsZWN0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZUNvbG9yU2VsZWN0ZWQoaHMpOyAvLyBkbyBpdCBmb3IgdGhlIGZpbmFsIHRpbWVcbiAgICAgIH0sIHRoaXMudGhyb3R0bGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmZpcmVDb2xvclNlbGVjdGVkKGhzKTsgLy8gZG8gaXRcbiAgICB0aGlzLmNvbG9yU2VsZWN0SXNUaHJvdHRsZWQgPSB0cnVlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5jb2xvclNlbGVjdElzVGhyb3R0bGVkID0gZmFsc2U7XG4gICAgfSwgdGhpcy50aHJvdHRsZSk7XG4gIH1cblxuICAvLyBzZXQgY29sb3IgdmFsdWVzIGFuZCBmaXJlIGNvbG9yc2VsZWN0ZWQgZXZlbnRcbiAgZmlyZUNvbG9yU2VsZWN0ZWQoaHMpIHtcbiAgICB0aGlzLmhzQ29sb3IgPSBocztcbiAgICB0aGlzLmZpcmUoXCJjb2xvcnNlbGVjdGVkXCIsIHsgaHM6IHsgaDogaHMuaCwgczogaHMucyB9IH0pO1xuICB9XG5cbiAgLypcbiAgICogSW50ZXJmYWNlIHVwZGF0aW5nXG4gICAqL1xuXG4gIC8vIHNldCBtYXJrZXIgcG9zaXRpb24gdG8gdGhlIGdpdmVuIGNvbG9yXG4gIHNldE1hcmtlck9uQ29sb3IoaHMpIHtcbiAgICB2YXIgZGlzdCA9IGhzLnMgKiB0aGlzLnJhZGl1cztcbiAgICB2YXIgdGhldGEgPSAoKGhzLmggLSAxODApIC8gMTgwKSAqIE1hdGguUEk7XG4gICAgdmFyIG1hcmtlcmRYID0gLWRpc3QgKiBNYXRoLmNvcyh0aGV0YSk7XG4gICAgdmFyIG1hcmtlcmRZID0gLWRpc3QgKiBNYXRoLnNpbih0aGV0YSk7XG4gICAgdmFyIHRyYW5zbGF0ZVN0cmluZyA9IGB0cmFuc2xhdGUoJHttYXJrZXJkWH0sJHttYXJrZXJkWX0pYDtcbiAgICB0aGlzLm1hcmtlci5zZXRBdHRyaWJ1dGUoXCJ0cmFuc2Zvcm1cIiwgdHJhbnNsYXRlU3RyaW5nKTtcbiAgICB0aGlzLnRvb2x0aXAuc2V0QXR0cmlidXRlKFwidHJhbnNmb3JtXCIsIHRyYW5zbGF0ZVN0cmluZyk7XG4gIH1cblxuICAvLyBhcHBseSBnaXZlbiBjb2xvciB0byBpbnRlcmZhY2UgZWxlbWVudHNcbiAgYXBwbHlDb2xvclRvQ2FudmFzKGhzKSB7XG4gICAgLy8gd2UncmUgbm90IHJlYWxseSBjb252ZXJ0aW5nIGhzIHRvIGhzbCBoZXJlLCBidXQgd2Uga2VlcCBpdCBjaGVhcFxuICAgIC8vIHNldHRpbmcgdGhlIGNvbG9yIG9uIHRoZSBpbnRlcmFjdGlvbkxheWVyLCB0aGUgc3ZnIGVsZW1lbnRzIGNhbiBpbmhlcml0XG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLnN0eWxlLmNvbG9yID0gYGhzbCgke2hzLmh9LCAxMDAlLCAkezEwMCAtXG4gICAgICBocy5zICogNTB9JSlgO1xuICB9XG5cbiAgYXBwbHlIc0NvbG9yKGhzKSB7XG4gICAgLy8gZG8gbm90aGluZyBpcyB3ZSBhbHJlYWR5IGhhdmUgdGhlIHNhbWUgY29sb3JcbiAgICBpZiAodGhpcy5oc0NvbG9yICYmIHRoaXMuaHNDb2xvci5oID09PSBocy5oICYmIHRoaXMuaHNDb2xvci5zID09PSBocy5zKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2V0TWFya2VyT25Db2xvcihocyk7IC8vIG1hcmtlciBpcyBhbHdheXMgc2V0IG9uICdyYXcnIGhzIHBvc2l0aW9uXG4gICAgaWYgKCF0aGlzLmlnbm9yZVNlZ21lbnRzKSB7XG4gICAgICAvLyBhcHBseSBzZWdtZW50cyBpZiBuZWVkZWRcbiAgICAgIGhzID0gdGhpcy5hcHBseVNlZ21lbnRGaWx0ZXIoaHMpO1xuICAgIH1cbiAgICB0aGlzLmhzQ29sb3IgPSBocztcbiAgICAvLyBhbHdheXMgYXBwbHkgdGhlIG5ldyBjb2xvciB0byB0aGUgaW50ZXJmYWNlIC8gY2FudmFzXG4gICAgdGhpcy5hcHBseUNvbG9yVG9DYW52YXMoaHMpO1xuICB9XG5cbiAgLypcbiAgICogaW5wdXQgcHJvY2Vzc2luZyBoZWxwZXJzXG4gICAqL1xuXG4gIC8vIGdldCBhbmdsZSAoZGVncmVlcylcbiAgZ2V0QW5nbGUoZFgsIGRZKSB7XG4gICAgdmFyIHRoZXRhID0gTWF0aC5hdGFuMigtZFksIC1kWCk7IC8vIHJhZGlhbnMgZnJvbSB0aGUgbGVmdCBlZGdlLCBjbG9ja3dpc2UgPSBwb3NpdGl2ZVxuICAgIHZhciBhbmdsZSA9ICh0aGV0YSAvIE1hdGguUEkpICogMTgwICsgMTgwOyAvLyBkZWdyZWVzLCBjbG9ja3dpc2UgZnJvbSByaWdodFxuICAgIHJldHVybiBhbmdsZTtcbiAgfVxuXG4gIC8vIHJldHVybnMgdHJ1ZSB3aGVuIGNvb3JkaW5hdGVzIGFyZSBpbiB0aGUgY29sb3J3aGVlbFxuICBpc0luV2hlZWwoeCwgeSkge1xuICAgIHJldHVybiB0aGlzLmdldERpc3RhbmNlKHgsIHkpIDw9IDE7XG4gIH1cblxuICAvLyByZXR1cm5zIGRpc3RhbmNlIGZyb20gd2hlZWwgY2VudGVyLCAwID0gY2VudGVyLCAxID0gZWRnZSwgPjEgPSBvdXRzaWRlXG4gIGdldERpc3RhbmNlKGRYLCBkWSkge1xuICAgIHJldHVybiBNYXRoLnNxcnQoZFggKiBkWCArIGRZICogZFkpIC8gdGhpcy5yYWRpdXM7XG4gIH1cblxuICAvKlxuICAgKiBHZXR0aW5nIGNvbG9yc1xuICAgKi9cblxuICBnZXRDb2xvcih4LCB5KSB7XG4gICAgdmFyIGh1ZSA9IHRoaXMuZ2V0QW5nbGUoeCwgeSk7IC8vIGRlZ3JlZXMsIGNsb2Nrd2lzZSBmcm9tIHJpZ2h0XG4gICAgdmFyIHJlbGF0aXZlRGlzdGFuY2UgPSB0aGlzLmdldERpc3RhbmNlKHgsIHkpOyAvLyBlZGdlIG9mIHJhZGl1cyA9IDFcbiAgICB2YXIgc2F0ID0gTWF0aC5taW4ocmVsYXRpdmVEaXN0YW5jZSwgMSk7IC8vIERpc3RhbmNlIGZyb20gY2VudGVyXG4gICAgcmV0dXJuIHsgaDogaHVlLCBzOiBzYXQgfTtcbiAgfVxuXG4gIGFwcGx5U2VnbWVudEZpbHRlcihocykge1xuICAgIC8vIGFwcGx5IGh1ZSBzZWdtZW50IHN0ZXBzXG4gICAgaWYgKHRoaXMuaHVlU2VnbWVudHMpIHtcbiAgICAgIGNvbnN0IGFuZ2xlU3RlcCA9IDM2MCAvIHRoaXMuaHVlU2VnbWVudHM7XG4gICAgICBjb25zdCBoYWxmQW5nbGVTdGVwID0gYW5nbGVTdGVwIC8gMjtcbiAgICAgIGhzLmggLT0gaGFsZkFuZ2xlU3RlcDsgLy8gdGFrZSB0aGUgJ2NlbnRlcmVkIHNlZ2VtbnRzJyBpbnRvIGFjY291bnRcbiAgICAgIGlmIChocy5oIDwgMCkge1xuICAgICAgICBocy5oICs9IDM2MDtcbiAgICAgIH0gLy8gZG9uJ3QgZW5kIHVwIGJlbG93IDBcbiAgICAgIGNvbnN0IHJlc3QgPSBocy5oICUgYW5nbGVTdGVwO1xuICAgICAgaHMuaCAtPSByZXN0IC0gYW5nbGVTdGVwO1xuICAgIH1cblxuICAgIC8vIGFwcGx5IHNhdHVyYXRpb24gc2VnbWVudCBzdGVwc1xuICAgIGlmICh0aGlzLnNhdHVyYXRpb25TZWdtZW50cykge1xuICAgICAgaWYgKHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzID09PSAxKSB7XG4gICAgICAgIGhzLnMgPSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdmFyIHNlZ21lbnRTaXplID0gMSAvIHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzO1xuICAgICAgICB2YXIgc2F0dXJhdGlvblN0ZXAgPSAxIC8gKHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzIC0gMSk7XG4gICAgICAgIHZhciBjYWxjdWxhdGVkU2F0ID0gTWF0aC5mbG9vcihocy5zIC8gc2VnbWVudFNpemUpICogc2F0dXJhdGlvblN0ZXA7XG4gICAgICAgIGhzLnMgPSBNYXRoLm1pbihjYWxjdWxhdGVkU2F0LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGhzO1xuICB9XG5cbiAgLypcbiAgICogRHJhd2luZyByZWxhdGVkIHN0dWZmXG4gICAqL1xuXG4gIHNldHVwTGF5ZXJzKCkge1xuICAgIHRoaXMuY2FudmFzID0gdGhpcy4kLmNhbnZhcztcbiAgICB0aGlzLmJhY2tncm91bmRMYXllciA9IHRoaXMuJC5iYWNrZ3JvdW5kTGF5ZXI7XG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyID0gdGhpcy4kLmludGVyYWN0aW9uTGF5ZXI7XG5cbiAgICAvLyBjb29yZGluYXRlIG9yaWdpbiBwb3NpdGlvbiAoY2VudGVyIG9mIHRoZSB3aGVlbClcbiAgICB0aGlzLm9yaWdpblggPSB0aGlzLndpZHRoIC8gMjtcbiAgICB0aGlzLm9yaWdpblkgPSB0aGlzLm9yaWdpblg7XG5cbiAgICAvLyBzeW5jaHJvbmlzZSB3aWR0aC9oZWlnaHQgY29vcmRpbmF0ZXNcbiAgICB0aGlzLmJhY2tncm91bmRMYXllci53aWR0aCA9IHRoaXMud2lkdGg7XG4gICAgdGhpcy5iYWNrZ3JvdW5kTGF5ZXIuaGVpZ2h0ID0gdGhpcy5oZWlnaHQ7XG4gICAgdGhpcy5pbnRlcmFjdGlvbkxheWVyLnNldEF0dHJpYnV0ZShcbiAgICAgIFwidmlld0JveFwiLFxuICAgICAgYCR7LXRoaXMub3JpZ2luWH0gJHstdGhpcy5vcmlnaW5ZfSAke3RoaXMud2lkdGh9ICR7dGhpcy5oZWlnaHR9YFxuICAgICk7XG4gIH1cblxuICBkcmF3Q29sb3JXaGVlbCgpIHtcbiAgICAvKlxuICAgICAqICBTZXR0aW5nIHVwIGFsbCBwYXJlbWV0ZXJzXG4gICAgICovXG4gICAgbGV0IHNoYWRvd0NvbG9yO1xuICAgIGxldCBzaGFkb3dPZmZzZXRYO1xuICAgIGxldCBzaGFkb3dPZmZzZXRZO1xuICAgIGxldCBzaGFkb3dCbHVyO1xuICAgIGNvbnN0IGNvbnRleHQgPSB0aGlzLmJhY2tncm91bmRMYXllci5nZXRDb250ZXh0KFwiMmRcIik7XG4gICAgLy8gcG9zdGlvbmluZyBhbmQgc2l6aW5nXG4gICAgY29uc3QgY1ggPSB0aGlzLm9yaWdpblg7XG4gICAgY29uc3QgY1kgPSB0aGlzLm9yaWdpblk7XG4gICAgY29uc3QgcmFkaXVzID0gdGhpcy5yYWRpdXM7XG4gICAgY29uc3QgY291bnRlckNsb2Nrd2lzZSA9IGZhbHNlO1xuICAgIC8vIHN0eWxpbmcgb2YgdGhlIHdoZWVsXG4gICAgY29uc3Qgd2hlZWxTdHlsZSA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMuYmFja2dyb3VuZExheWVyLCBudWxsKTtcbiAgICBjb25zdCBib3JkZXJXaWR0aCA9IHBhcnNlSW50KFxuICAgICAgd2hlZWxTdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKFwiLS13aGVlbC1ib3JkZXJ3aWR0aFwiKSxcbiAgICAgIDEwXG4gICAgKTtcbiAgICBjb25zdCBib3JkZXJDb2xvciA9IHdoZWVsU3R5bGVcbiAgICAgIC5nZXRQcm9wZXJ0eVZhbHVlKFwiLS13aGVlbC1ib3JkZXJjb2xvclwiKVxuICAgICAgLnRyaW0oKTtcbiAgICBjb25zdCB3aGVlbFNoYWRvdyA9IHdoZWVsU3R5bGUuZ2V0UHJvcGVydHlWYWx1ZShcIi0td2hlZWwtc2hhZG93XCIpLnRyaW0oKTtcbiAgICAvLyBleHRyYWN0IHNoYWRvdyBwcm9wZXJ0aWVzIGZyb20gIENDUyB2YXJpYWJsZVxuICAgIC8vIHRoZSBzaGFkb3cgc2hvdWxkIGJlIGRlZmluZWQgYXM6IFwiMTBweCA1cHggNXB4IDBweCBDT0xPUlwiXG4gICAgaWYgKHdoZWVsU2hhZG93ICE9PSBcIm5vbmVcIikge1xuICAgICAgY29uc3QgdmFsdWVzID0gd2hlZWxTaGFkb3cuc3BsaXQoXCJweCBcIik7XG4gICAgICBzaGFkb3dDb2xvciA9IHZhbHVlcy5wb3AoKTtcbiAgICAgIHNoYWRvd09mZnNldFggPSBwYXJzZUludCh2YWx1ZXNbMF0sIDEwKTtcbiAgICAgIHNoYWRvd09mZnNldFkgPSBwYXJzZUludCh2YWx1ZXNbMV0sIDEwKTtcbiAgICAgIHNoYWRvd0JsdXIgPSBwYXJzZUludCh2YWx1ZXNbMl0sIDEwKSB8fCAwO1xuICAgIH1cbiAgICBjb25zdCBib3JkZXJSYWRpdXMgPSByYWRpdXMgKyBib3JkZXJXaWR0aCAvIDI7XG4gICAgY29uc3Qgd2hlZWxSYWRpdXMgPSByYWRpdXM7XG4gICAgY29uc3Qgc2hhZG93UmFkaXVzID0gcmFkaXVzICsgYm9yZGVyV2lkdGg7XG5cbiAgICAvKlxuICAgICAqICBEcmF3aW5nIGZ1bmN0aW9uc1xuICAgICAqL1xuICAgIGZ1bmN0aW9uIGRyYXdDaXJjbGUoaHVlU2VnbWVudHMsIHNhdHVyYXRpb25TZWdtZW50cykge1xuICAgICAgaHVlU2VnbWVudHMgPSBodWVTZWdtZW50cyB8fCAzNjA7IC8vIHJlc2V0IDAgc2VnbWVudHMgdG8gMzYwXG4gICAgICBjb25zdCBhbmdsZVN0ZXAgPSAzNjAgLyBodWVTZWdtZW50cztcbiAgICAgIGNvbnN0IGhhbGZBbmdsZVN0ZXAgPSBhbmdsZVN0ZXAgLyAyOyAvLyBjZW50ZXIgc2VnbWVudHMgb24gY29sb3JcbiAgICAgIGZvciAodmFyIGFuZ2xlID0gMDsgYW5nbGUgPD0gMzYwOyBhbmdsZSArPSBhbmdsZVN0ZXApIHtcbiAgICAgICAgdmFyIHN0YXJ0QW5nbGUgPSAoYW5nbGUgLSBoYWxmQW5nbGVTdGVwKSAqIChNYXRoLlBJIC8gMTgwKTtcbiAgICAgICAgdmFyIGVuZEFuZ2xlID0gKGFuZ2xlICsgaGFsZkFuZ2xlU3RlcCArIDEpICogKE1hdGguUEkgLyAxODApO1xuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyhjWCwgY1kpO1xuICAgICAgICBjb250ZXh0LmFyYyhcbiAgICAgICAgICBjWCxcbiAgICAgICAgICBjWSxcbiAgICAgICAgICB3aGVlbFJhZGl1cyxcbiAgICAgICAgICBzdGFydEFuZ2xlLFxuICAgICAgICAgIGVuZEFuZ2xlLFxuICAgICAgICAgIGNvdW50ZXJDbG9ja3dpc2VcbiAgICAgICAgKTtcbiAgICAgICAgY29udGV4dC5jbG9zZVBhdGgoKTtcbiAgICAgICAgLy8gZ3JhZGllbnRcbiAgICAgICAgdmFyIGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudChcbiAgICAgICAgICBjWCxcbiAgICAgICAgICBjWSxcbiAgICAgICAgICAwLFxuICAgICAgICAgIGNYLFxuICAgICAgICAgIGNZLFxuICAgICAgICAgIHdoZWVsUmFkaXVzXG4gICAgICAgICk7XG4gICAgICAgIGxldCBsaWdodG5lc3MgPSAxMDA7XG4gICAgICAgIC8vIGZpcnN0IGdyYWRpZW50IHN0b3BcbiAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsIGBoc2woJHthbmdsZX0sIDEwMCUsICR7bGlnaHRuZXNzfSUpYCk7XG4gICAgICAgIC8vIHNlZ21lbnQgZ3JhZGllbnQgc3RvcHNcbiAgICAgICAgaWYgKHNhdHVyYXRpb25TZWdtZW50cyA+IDApIHtcbiAgICAgICAgICBjb25zdCByYXRpb1N0ZXAgPSAxIC8gc2F0dXJhdGlvblNlZ21lbnRzO1xuICAgICAgICAgIGxldCByYXRpbyA9IDA7XG4gICAgICAgICAgZm9yICh2YXIgc3RvcCA9IDE7IHN0b3AgPCBzYXR1cmF0aW9uU2VnbWVudHM7IHN0b3AgKz0gMSkge1xuICAgICAgICAgICAgdmFyIHByZXZMaWdobmVzcyA9IGxpZ2h0bmVzcztcbiAgICAgICAgICAgIHJhdGlvID0gc3RvcCAqIHJhdGlvU3RlcDtcbiAgICAgICAgICAgIGxpZ2h0bmVzcyA9IDEwMCAtIDUwICogcmF0aW87XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoXG4gICAgICAgICAgICAgIHJhdGlvLFxuICAgICAgICAgICAgICBgaHNsKCR7YW5nbGV9LCAxMDAlLCAke3ByZXZMaWdobmVzc30lKWBcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AocmF0aW8sIGBoc2woJHthbmdsZX0sIDEwMCUsICR7bGlnaHRuZXNzfSUpYCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcChyYXRpbywgYGhzbCgke2FuZ2xlfSwgMTAwJSwgNTAlKWApO1xuICAgICAgICB9XG4gICAgICAgIC8vIGxhc3QgZ3JhZGllbnQgc3RvcFxuICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgYGhzbCgke2FuZ2xlfSwgMTAwJSwgNTAlKWApO1xuXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XG4gICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGRyYXdTaGFkb3coKSB7XG4gICAgICBjb250ZXh0LnNhdmUoKTtcbiAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICBjb250ZXh0LmFyYyhjWCwgY1ksIHNoYWRvd1JhZGl1cywgMCwgMiAqIE1hdGguUEksIGZhbHNlKTtcbiAgICAgIGNvbnRleHQuc2hhZG93Q29sb3IgPSBzaGFkb3dDb2xvcjtcbiAgICAgIGNvbnRleHQuc2hhZG93T2Zmc2V0WCA9IHNoYWRvd09mZnNldFg7XG4gICAgICBjb250ZXh0LnNoYWRvd09mZnNldFkgPSBzaGFkb3dPZmZzZXRZO1xuICAgICAgY29udGV4dC5zaGFkb3dCbHVyID0gc2hhZG93Qmx1cjtcbiAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ3aGl0ZVwiO1xuICAgICAgY29udGV4dC5maWxsKCk7XG4gICAgICBjb250ZXh0LnJlc3RvcmUoKTtcbiAgICB9XG5cbiAgICBmdW5jdGlvbiBkcmF3Qm9yZGVyKCkge1xuICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgIGNvbnRleHQuYXJjKGNYLCBjWSwgYm9yZGVyUmFkaXVzLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgY29udGV4dC5saW5lV2lkdGggPSBib3JkZXJXaWR0aDtcbiAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBib3JkZXJDb2xvcjtcbiAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG4gICAgfVxuXG4gICAgLypcbiAgICAgKiAgIENhbGwgdGhlIGRyYXdpbmcgZnVuY3Rpb25zXG4gICAgICogICBkcmF3cyB0aGUgc2hhZG93LCB3aGVlbCBhbmQgYm9yZGVyXG4gICAgICovXG4gICAgaWYgKHdoZWVsU3R5bGUuc2hhZG93ICE9PSBcIm5vbmVcIikge1xuICAgICAgZHJhd1NoYWRvdygpO1xuICAgIH1cbiAgICBkcmF3Q2lyY2xlKHRoaXMuaHVlU2VnbWVudHMsIHRoaXMuc2F0dXJhdGlvblNlZ21lbnRzKTtcbiAgICBpZiAoYm9yZGVyV2lkdGggPiAwKSB7XG4gICAgICBkcmF3Qm9yZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgLypcbiAgICogICBEcmF3IHRoZSAoZHJhZ2dhYmxlKSBtYXJrZXIgYW5kIHRvb2x0aXBcbiAgICogICBvbiB0aGUgaW50ZXJhY3Rpb25MYXllcilcbiAgICovXG5cbiAgZHJhd01hcmtlcigpIHtcbiAgICBjb25zdCBzdmdFbGVtZW50ID0gdGhpcy5pbnRlcmFjdGlvbkxheWVyO1xuICAgIGNvbnN0IG1hcmtlcnJhZGl1cyA9IHRoaXMucmFkaXVzICogMC4wODtcbiAgICBjb25zdCB0b29sdGlwcmFkaXVzID0gdGhpcy5yYWRpdXMgKiAwLjE1O1xuICAgIGNvbnN0IFRvb2x0aXBPZmZzZXRZID0gLSh0b29sdGlwcmFkaXVzICogMyk7XG4gICAgY29uc3QgVG9vbHRpcE9mZnNldFggPSAwO1xuXG4gICAgc3ZnRWxlbWVudC5tYXJrZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXG4gICAgICBcImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIsXG4gICAgICBcImNpcmNsZVwiXG4gICAgKTtcbiAgICBzdmdFbGVtZW50Lm1hcmtlci5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcIm1hcmtlclwiKTtcbiAgICBzdmdFbGVtZW50Lm1hcmtlci5zZXRBdHRyaWJ1dGUoXCJyXCIsIG1hcmtlcnJhZGl1cyk7XG4gICAgdGhpcy5tYXJrZXIgPSBzdmdFbGVtZW50Lm1hcmtlcjtcbiAgICBzdmdFbGVtZW50LmFwcGVuZENoaWxkKHN2Z0VsZW1lbnQubWFya2VyKTtcblxuICAgIHN2Z0VsZW1lbnQudG9vbHRpcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnROUyhcbiAgICAgIFwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIixcbiAgICAgIFwiY2lyY2xlXCJcbiAgICApO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJpZFwiLCBcImNvbG9yVG9vbHRpcFwiKTtcbiAgICBzdmdFbGVtZW50LnRvb2x0aXAuc2V0QXR0cmlidXRlKFwiclwiLCB0b29sdGlwcmFkaXVzKTtcbiAgICBzdmdFbGVtZW50LnRvb2x0aXAuc2V0QXR0cmlidXRlKFwiY3hcIiwgVG9vbHRpcE9mZnNldFgpO1xuICAgIHN2Z0VsZW1lbnQudG9vbHRpcC5zZXRBdHRyaWJ1dGUoXCJjeVwiLCBUb29sdGlwT2Zmc2V0WSk7XG4gICAgdGhpcy50b29sdGlwID0gc3ZnRWxlbWVudC50b29sdGlwO1xuICAgIHN2Z0VsZW1lbnQuYXBwZW5kQ2hpbGQoc3ZnRWxlbWVudC50b29sdGlwKTtcbiAgfVxuXG4gIHNlZ21lbnRhdGlvbkNoYW5nZSgpIHtcbiAgICBpZiAodGhpcy5iYWNrZ3JvdW5kTGF5ZXIpIHtcbiAgICAgIHRoaXMuZHJhd0NvbG9yV2hlZWwoKTtcbiAgICB9XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvbG9yLXBpY2tlclwiLCBIYUNvbG9yUGlja2VyKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4vaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuL2hhLWljb25cIjtcblxuY2xhc3MgSGFMYWJlbGVkU2xpZGVyIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1wcmltYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtaWNvbiB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItc2xpZGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB2YXIoLS1oYS1zbGlkZXItYmFja2dyb3VuZCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbY2FwdGlvbl1dPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiZXh0cmEtY29udGFpbmVyXCI+PHNsb3QgbmFtZT1cImV4dHJhXCI+PC9zbG90PjwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1jb250YWluZXJcIj5cbiAgICAgICAgPGhhLWljb24gaWNvbj1cIltbaWNvbl1dXCIgaGlkZGVuJD1cIltbIWljb25dXVwiPjwvaGEtaWNvbj5cbiAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgIG1pbj1cIltbbWluXV1cIlxuICAgICAgICAgIG1heD1cIltbbWF4XV1cIlxuICAgICAgICAgIHN0ZXA9XCJbW3N0ZXBdXVwiXG4gICAgICAgICAgcGluPVwiW1twaW5dXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgID48L2hhLXBhcGVyLXNsaWRlcj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNhcHRpb246IFN0cmluZyxcbiAgICAgIGRpc2FibGVkOiBCb29sZWFuLFxuICAgICAgbWluOiBOdW1iZXIsXG4gICAgICBtYXg6IE51bWJlcixcbiAgICAgIHBpbjogQm9vbGVhbixcbiAgICAgIHN0ZXA6IE51bWJlcixcblxuICAgICAgZXh0cmE6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGlnbm9yZUJhclRvdWNoOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGljb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1sYWJlbGVkLXNsaWRlclwiLCBIYUxhYmVsZWRTbGlkZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG4vLyBOb3QgZHVwbGljYXRlLCB0aGlzIGlzIGZvciB0eXBpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IFBhcGVySWNvbkJ1dHRvbkVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcblxuY29uc3QgcGFwZXJJY29uQnV0dG9uQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXG4gIFwicGFwZXItaWNvbi1idXR0b25cIlxuKSBhcyBDb25zdHJ1Y3RvcjxQYXBlckljb25CdXR0b25FbGVtZW50PjtcblxuZXhwb3J0IGNsYXNzIEhhUGFwZXJJY29uQnV0dG9uQXJyb3dQcmV2IGV4dGVuZHMgcGFwZXJJY29uQnV0dG9uQ2xhc3Mge1xuICBwdWJsaWMgaGFzc2lvPzogYm9vbGVhbjtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMuaWNvbiA9XG4gICAgICAgIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpLmRpcmVjdGlvbiA9PT0gXCJsdHJcIlxuICAgICAgICAgID8gdGhpcy5oYXNzaW9cbiAgICAgICAgICAgID8gXCJoYXNzaW86YXJyb3ctbGVmdFwiXG4gICAgICAgICAgICA6IFwiaGFzczphcnJvdy1sZWZ0XCJcbiAgICAgICAgICA6IHRoaXMuaGFzc2lvXG4gICAgICAgICAgPyBcImhhc3NpbzphcnJvdy1yaWdodFwiXG4gICAgICAgICAgOiBcImhhc3M6YXJyb3ctcmlnaHRcIjtcbiAgICB9LCAxMDApO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCI6IEhhUGFwZXJJY29uQnV0dG9uQXJyb3dQcmV2O1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcbiAgXCJoYS1wYXBlci1pY29uLWJ1dHRvbi1hcnJvdy1wcmV2XCIsXG4gIEhhUGFwZXJJY29uQnV0dG9uQXJyb3dQcmV2XG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc2xpZGVyL3BhcGVyLXNsaWRlclwiO1xuXG4vKipcbiAqIEBwb2x5bWVyXG4gKiBAY3VzdG9tRWxlbWVudFxuICogQGFwcGxpZXNNaXhpbiBwYXBlci1zbGlkZXJcbiAqL1xuY29uc3QgUGFwZXJTbGlkZXJDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLXNsaWRlclwiKTtcblxuY2xhc3MgSGFQYXBlclNsaWRlciBleHRlbmRzIFBhcGVyU2xpZGVyQ2xhc3Mge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRwbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICB0cGwuaW5uZXJIVE1MID0gUGFwZXJTbGlkZXJDbGFzcy50ZW1wbGF0ZS5pbm5lckhUTUw7XG4gICAgY29uc3Qgc3R5bGVFbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgICBzdHlsZUVsLmlubmVySFRNTCA9IGBcbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXIge1xuICAgICAgICBmb250LXNpemU6ICB2YXIoLS1oYS1wYXBlci1zbGlkZXItcGluLWZvbnQtc2l6ZSwgMTBweCk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICB9XG5cbiAgICAgIC5waW4gPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIHRvcDogdW5zZXQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiB1bnNldDtcblxuICAgICAgICBib3R0b206IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgd2lkdGg6IDIuMmVtO1xuICAgICAgICBoZWlnaHQ6IDIuMmVtO1xuXG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBib3R0b207XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IGxlZnQgYm90dG9tO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC00NWRlZykgc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoN3B4LCAtN3B4KTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgxKSB0cmFuc2xhdGUoN3B4LCAtN3B4KTtcbiAgICAgIH1cblxuICAgICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgICB0b3A6IHVuc2V0O1xuICAgICAgICBmb250LXNpemU6IHVuc2V0O1xuXG4gICAgICAgIGJvdHRvbTogY2FsYygxNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICBtYXJnaW4tbGVmdDogLTEuMWVtO1xuICAgICAgICB3aWR0aDogMi4yZW07XG4gICAgICAgIGhlaWdodDogMi4xZW07XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiBjZW50ZXIgYm90dG9tO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlKDApO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICAgIH1cblxuICAgICAgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTBweCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xMHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpcj1cInJ0bFwiXSkgLnBpbi5leHBhbmQgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgYDtcbiAgICB0cGwuY29udGVudC5hcHBlbmRDaGlsZChzdHlsZUVsKTtcbiAgICByZXR1cm4gdHBsO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1zbGlkZXJcIiwgSGFQYXBlclNsaWRlcik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBTVEFURVNfSU5URVJDRVBUQUJMRSA9IHtcbiAgY2xlYW5pbmc6IHtcbiAgICBhY3Rpb246IFwicmV0dXJuX3RvX2Jhc2VcIixcbiAgICBzZXJ2aWNlOiBcInJldHVybl90b19iYXNlXCIsXG4gIH0sXG4gIGRvY2tlZDoge1xuICAgIGFjdGlvbjogXCJzdGFydF9jbGVhbmluZ1wiLFxuICAgIHNlcnZpY2U6IFwic3RhcnRcIixcbiAgfSxcbiAgaWRsZToge1xuICAgIGFjdGlvbjogXCJzdGFydF9jbGVhbmluZ1wiLFxuICAgIHNlcnZpY2U6IFwic3RhcnRcIixcbiAgfSxcbiAgb2ZmOiB7XG4gICAgYWN0aW9uOiBcInR1cm5fb25cIixcbiAgICBzZXJ2aWNlOiBcInR1cm5fb25cIixcbiAgfSxcbiAgb246IHtcbiAgICBhY3Rpb246IFwidHVybl9vZmZcIixcbiAgICBzZXJ2aWNlOiBcInR1cm5fb2ZmXCIsXG4gIH0sXG4gIHBhdXNlZDoge1xuICAgIGFjdGlvbjogXCJyZXN1bWVfY2xlYW5pbmdcIixcbiAgICBzZXJ2aWNlOiBcInN0YXJ0XCIsXG4gIH0sXG59O1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhVmFjdXVtU3RhdGUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbltkaXNhYmxlZF0ge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxtd2MtYnV0dG9uIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCIgZGlzYWJsZWQ9XCJbWyFfaW50ZXJjZXB0YWJsZV1dXCJcbiAgICAgICAgPltbX2NvbXB1dGVMYWJlbChzdGF0ZU9iai5zdGF0ZSwgX2ludGVyY2VwdGFibGUpXV08L213Yy1idXR0b25cbiAgICAgID5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgX2ludGVyY2VwdGFibGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6XG4gICAgICAgICAgXCJfY29tcHV0ZUludGVyY2VwdGFibGUoc3RhdGVPYmouc3RhdGUsIHN0YXRlT2JqLmF0dHJpYnV0ZXMuc3VwcG9ydGVkX2ZlYXR1cmVzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2NvbXB1dGVJbnRlcmNlcHRhYmxlKHN0YXRlLCBzdXBwb3J0ZWRGZWF0dXJlcykge1xuICAgIHJldHVybiBzdGF0ZSBpbiBTVEFURVNfSU5URVJDRVBUQUJMRSAmJiBzdXBwb3J0ZWRGZWF0dXJlcyAhPT0gMDtcbiAgfVxuXG4gIF9jb21wdXRlTGFiZWwoc3RhdGUsIGludGVyY2VwdGFibGUpIHtcbiAgICByZXR1cm4gaW50ZXJjZXB0YWJsZVxuICAgICAgPyB0aGlzLmxvY2FsaXplKFxuICAgICAgICAgIGB1aS5jYXJkLnZhY3V1bS5hY3Rpb25zLiR7U1RBVEVTX0lOVEVSQ0VQVEFCTEVbc3RhdGVdLmFjdGlvbn1gXG4gICAgICAgIClcbiAgICAgIDogdGhpcy5sb2NhbGl6ZShgc3RhdGUudmFjdXVtLiR7c3RhdGV9YCk7XG4gIH1cblxuICBfY2FsbFNlcnZpY2UoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjb25zdCBzdGF0ZU9iaiA9IHRoaXMuc3RhdGVPYmo7XG4gICAgY29uc3Qgc2VydmljZSA9IFNUQVRFU19JTlRFUkNFUFRBQkxFW3N0YXRlT2JqLnN0YXRlXS5zZXJ2aWNlO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBzZXJ2aWNlLCB7IGVudGl0eV9pZDogc3RhdGVPYmouZW50aXR5X2lkIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS12YWN1dW0tc3RhdGVcIiwgSGFWYWN1dW1TdGF0ZSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqL1xuY2xhc3MgSGFXYXRlckhlYXRlckNvbnRyb2wgZXh0ZW5kcyBFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC8qIGxvY2FsIERPTSBzdHlsZXMgZ28gaGVyZSAqL1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZsZXg7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWp1c3RpZmllZDtcbiAgICAgICAgfVxuICAgICAgICAuaW4tZmx1eCN0YXJnZXRfdGVtcGVyYXR1cmUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgICAgI3RhcmdldF90ZW1wZXJhdHVyZSB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXNlbGYtY2VudGVyO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY29udHJvbC1idXR0b25zIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b24ge1xuICAgICAgICAgIGhlaWdodDogNDhweDtcbiAgICAgICAgICB3aWR0aDogNDhweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPCEtLSBsb2NhbCBET00gZ29lcyBoZXJlIC0tPlxuICAgICAgPGRpdiBpZD1cInRhcmdldF90ZW1wZXJhdHVyZVwiPltbdmFsdWVdXSBbW3VuaXRzXV08L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sLWJ1dHRvbnNcIj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJoYXNzOmNoZXZyb24tdXBcIlxuICAgICAgICAgICAgb24tY2xpY2s9XCJpbmNyZW1lbnRWYWx1ZVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2hldnJvbi1kb3duXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiZGVjcmVtZW50VmFsdWVcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwidmFsdWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgdW5pdHM6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgfSxcbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB9LFxuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIH0sXG4gICAgICBzdGVwOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDEsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICB0ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KGluRmx1eCkge1xuICAgIHRoaXMuJC50YXJnZXRfdGVtcGVyYXR1cmUuY2xhc3NMaXN0LnRvZ2dsZShcImluLWZsdXhcIiwgaW5GbHV4KTtcbiAgfVxuXG4gIGluY3JlbWVudFZhbHVlKCkge1xuICAgIGNvbnN0IG5ld3ZhbCA9IHRoaXMudmFsdWUgKyB0aGlzLnN0ZXA7XG4gICAgaWYgKHRoaXMudmFsdWUgPCB0aGlzLm1heCkge1xuICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KHRydWUpO1xuICAgIH1cbiAgICBpZiAobmV3dmFsIDw9IHRoaXMubWF4KSB7XG4gICAgICAvLyBJZiBubyBpbml0aWFsIHRhcmdldF90ZW1wXG4gICAgICAvLyB0aGlzIGZvcmNlcyBjb250cm9sIHRvIHN0YXJ0XG4gICAgICAvLyBmcm9tIHRoZSBtaW4gY29uZmlndXJlZCBpbnN0ZWFkIG9mIDBcbiAgICAgIGlmIChuZXd2YWwgPD0gdGhpcy5taW4pIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWluO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9IG5ld3ZhbDtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy52YWx1ZSA9IHRoaXMubWF4O1xuICAgIH1cbiAgfVxuXG4gIGRlY3JlbWVudFZhbHVlKCkge1xuICAgIGNvbnN0IG5ld3ZhbCA9IHRoaXMudmFsdWUgLSB0aGlzLnN0ZXA7XG4gICAgaWYgKHRoaXMudmFsdWUgPiB0aGlzLm1pbikge1xuICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBEYXRlLm5vdygpO1xuICAgICAgdGhpcy50ZW1wZXJhdHVyZVN0YXRlSW5GbHV4KHRydWUpO1xuICAgIH1cbiAgICBpZiAobmV3dmFsID49IHRoaXMubWluKSB7XG4gICAgICB0aGlzLnZhbHVlID0gbmV3dmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5taW47XG4gICAgfVxuICB9XG5cbiAgdmFsdWVDaGFuZ2VkKCkge1xuICAgIC8vIHdoZW4gdGhlIGxhc3RfY2hhbmdlZCB0aW1lc3RhbXAgaXMgY2hhbmdlZCxcbiAgICAvLyB0cmlnZ2VyIGEgcG90ZW50aWFsIGV2ZW50IGZpcmUgaW5cbiAgICAvLyB0aGUgZnV0dXJlLCBhcyBsb25nIGFzIGxhc3QgY2hhbmdlZCBpcyBmYXIgZW5vdWdoIGluIHRoZVxuICAgIC8vIHBhc3QuXG4gICAgaWYgKHRoaXMubGFzdF9jaGFuZ2VkKSB7XG4gICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IG5vdyA9IERhdGUubm93KCk7XG4gICAgICAgIGlmIChub3cgLSB0aGlzLmxhc3RfY2hhbmdlZCA+PSAyMDAwKSB7XG4gICAgICAgICAgdGhpcy5maXJlKFwiY2hhbmdlXCIpO1xuICAgICAgICAgIHRoaXMudGVtcGVyYXR1cmVTdGF0ZUluRmx1eChmYWxzZSk7XG4gICAgICAgICAgdGhpcy5sYXN0X2NoYW5nZWQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9LCAyMDEwKTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcIiwgSGFXYXRlckhlYXRlckNvbnRyb2wpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIEhhV2F0ZXJIZWF0ZXJTdGF0ZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhcmdldCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0ZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0YXJnZXRcIj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0ZS1sYWJlbFwiPiBbW19sb2NhbGl6ZVN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dIDwvc3Bhbj5cbiAgICAgICAgW1tjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKV1dXG4gICAgICA8L2Rpdj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2N1cnJlbnRTdGF0dXNdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudFwiPlxuICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQud2F0ZXJfaGVhdGVyLmN1cnJlbnRseScpXV06IFtbY3VycmVudFN0YXR1c11dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFoYXNzIHx8ICFzdGF0ZU9iaikgcmV0dXJuIG51bGw7XG4gICAgLy8gV2UncmUgdXNpbmcgXCIhPSBudWxsXCIgb24gcHVycG9zZSBzbyB0aGF0IHdlIG1hdGNoIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkLlxuICAgIGlmIChcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93ICE9IG51bGwgJiZcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9IC0gJHtcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICB9ICR7aGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmV9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9ICR7XG4gICAgICAgIGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlXG4gICAgICB9YDtcbiAgICB9XG5cbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuXG4gIF9sb2NhbGl6ZVN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoYHN0YXRlLndhdGVyX2hlYXRlci4ke3N0YXRlfWApIHx8IHN0YXRlO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS13YXRlcl9oZWF0ZXItc3RhdGVcIiwgSGFXYXRlckhlYXRlclN0YXRlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL3Jlc291cmNlcy9oYS1zdHlsZVwiO1xuXG5pbXBvcnQgXCIuL21vcmUtaW5mby9tb3JlLWluZm8tY29udHJvbHNcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvL21vcmUtaW5mby1zZXR0aW5nc1wiO1xuXG5pbXBvcnQgeyBjb21wdXRlU3RhdGVEb21haW4gfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgaXNDb21wb25lbnRMb2FkZWQgfSBmcm9tIFwiLi4vY29tbW9uL2NvbmZpZy9pc19jb21wb25lbnRfbG9hZGVkXCI7XG5cbmltcG9ydCBEaWFsb2dNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2RpYWxvZy1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBEaWFsb2dNaXhpblxuICovXG5jbGFzcyBIYU1vcmVJbmZvRGlhbG9nIGV4dGVuZHMgRGlhbG9nTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGUtZGlhbG9nIHBhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzXCI+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgd2lkdGg6IDM2NXB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vcmUtaW5mby1jb250cm9scyxcbiAgICAgICAgbW9yZS1pbmZvLXNldHRpbmdzIHtcbiAgICAgICAgICAtLW1vcmUtaW5mby1oZWFkZXItYmFja2dyb3VuZDogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICAgIC0tbW9yZS1pbmZvLWhlYWRlci1jb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICAtLWhhLW1vcmUtaW5mby1hcHAtdG9vbGJhci10aXRsZToge1xuICAgICAgICAgICAgLyogRGVzaWduIGd1aWRlbGluZSBzdGF0ZXMgMjRweCwgY2hhbmdlZCB0byAxNiB0byBhbGlnbiB3aXRoIHN0YXRlIGluZm8gKi9cbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xuICAgICAgICAgICAgbWF4LWhlaWdodDogMi42ZW07XG4gICAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgICAgLyogd2Via2l0IGFuZCBibGluayBzdGlsbCBzdXBwb3J0IHNpbXBsZSBtdWx0aWxpbmUgdGV4dC1vdmVyZmxvdyAqL1xuICAgICAgICAgICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XG4gICAgICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XG4gICAgICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xuICAgICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyogb3ZlcnJ1bGUgdGhlIGhhLXN0eWxlLWRpYWxvZyBtYXgtaGVpZ2h0IG9uIHNtYWxsIHNjcmVlbnMgKi9cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIG1vcmUtaW5mby1jb250cm9scyxcbiAgICAgICAgICBtb3JlLWluZm8tc2V0dGluZ3Mge1xuICAgICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWJhY2tncm91bmQ6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICAgICAgLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIH1cbiAgICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMHB4O1xuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgfVxuICAgICAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICAgICAgdG9wOiAwcHg7XG4gICAgICAgICAgICBsZWZ0OiAwcHg7XG4gICAgICAgICAgICByaWdodDogMHB4O1xuICAgICAgICAgICAgYm90dG9tOiAwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIDpob3N0KFtkYXRhLWRvbWFpbj1cImNhbWVyYVwiXSkge1xuICAgICAgICAgIHdpZHRoOiBhdXRvO1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW2RhdGEtZG9tYWluPVwiaGlzdG9yeV9ncmFwaFwiXSksXG4gICAgICAgIDpob3N0KFtsYXJnZV0pIHtcbiAgICAgICAgICB3aWR0aDogOTAlO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIV9wYWdlXV1cIj5cbiAgICAgICAgPG1vcmUtaW5mby1jb250cm9sc1xuICAgICAgICAgIGNsYXNzPVwibm8tcGFkZGluZ1wiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGRpYWxvZy1lbGVtZW50PVwiW1tfZGlhbG9nRWxlbWVudF1dXCJcbiAgICAgICAgICBjYW4tY29uZmlndXJlPVwiW1tfcmVnaXN0cnlJbmZvXV1cIlxuICAgICAgICAgIGxhcmdlPVwie3tsYXJnZX19XCJcbiAgICAgICAgPjwvbW9yZS1pbmZvLWNvbnRyb2xzPlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPSdbW19lcXVhbHMoX3BhZ2UsIFwic2V0dGluZ3NcIildXSc+XG4gICAgICAgIDxtb3JlLWluZm8tc2V0dGluZ3NcbiAgICAgICAgICBjbGFzcz1cIm5vLXBhZGRpbmdcIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICByZWdpc3RyeS1pbmZvPVwie3tfcmVnaXN0cnlJbmZvfX1cIlxuICAgICAgICA+PC9tb3JlLWluZm8tc2V0dGluZ3M+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVTdGF0ZU9iaihoYXNzKVwiLFxuICAgICAgICBvYnNlcnZlcjogXCJfc3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBsYXJnZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiBcIl9sYXJnZUNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIF9kaWFsb2dFbGVtZW50OiBPYmplY3QsXG4gICAgICBfcmVnaXN0cnlJbmZvOiBPYmplY3QsXG5cbiAgICAgIF9wYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuXG4gICAgICBkYXRhRG9tYWluOiB7XG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRG9tYWluKHN0YXRlT2JqKVwiLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiX2RpYWxvZ09wZW5DaGFuZ2VkKG9wZW5lZClcIl07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX2RpYWxvZ0VsZW1lbnQgPSB0aGlzO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcIm1vcmUtaW5mby1wYWdlXCIsIChldikgPT4ge1xuICAgICAgdGhpcy5fcGFnZSA9IGV2LmRldGFpbC5wYWdlO1xuICAgIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVEb21haW4oc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmogPyBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopIDogXCJcIjtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVPYmooaGFzcykge1xuICAgIHJldHVybiBoYXNzLnN0YXRlc1toYXNzLm1vcmVJbmZvRW50aXR5SWRdIHx8IG51bGw7XG4gIH1cblxuICBhc3luYyBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKCFuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIG9wZW5lZDogZmFsc2UsXG4gICAgICAgIF9wYWdlOiBudWxsLFxuICAgICAgICBfcmVnaXN0cnlJbmZvOiBudWxsLFxuICAgICAgICBsYXJnZTogZmFsc2UsXG4gICAgICB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT5cbiAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIC8vIGFsbG93IGRpYWxvZyB0byByZW5kZXIgY29udGVudCBiZWZvcmUgc2hvd2luZyBpdCBzbyBpdCB3aWxsIGJlXG4gICAgICAgIC8vIHBvc2l0aW9uZWQgY29ycmVjdGx5LlxuICAgICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgICB9KVxuICAgICk7XG5cbiAgICBpZiAoXG4gICAgICAhaXNDb21wb25lbnRMb2FkZWQodGhpcy5oYXNzLCBcImNvbmZpZ1wiKSB8fFxuICAgICAgKG9sZFZhbCAmJiBvbGRWYWwuZW50aXR5X2lkID09PSBuZXdWYWwuZW50aXR5X2lkKVxuICAgICkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmhhc3MudXNlci5pc19hZG1pbikge1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHRoaXMuaGFzcy5jYWxsV1Moe1xuICAgICAgICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9nZXRcIixcbiAgICAgICAgICBlbnRpdHlfaWQ6IG5ld1ZhbC5lbnRpdHlfaWQsXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9yZWdpc3RyeUluZm8gPSBpbmZvO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRoaXMuX3JlZ2lzdHJ5SW5mbyA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RpYWxvZ09wZW5DaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsICYmIHRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHRoaXMuZmlyZShcImhhc3MtbW9yZS1pbmZvXCIsIHsgZW50aXR5SWQ6IG51bGwgfSk7XG4gICAgfVxuICB9XG5cbiAgX2VxdWFscyhhLCBiKSB7XG4gICAgcmV0dXJuIGEgPT09IGI7XG4gIH1cblxuICBfbGFyZ2VDaGFuZ2VkKCkge1xuICAgIHRoaXMubm90aWZ5UmVzaXplKCk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLW1vcmUtaW5mby1kaWFsb2dcIiwgSGFNb3JlSW5mb0RpYWxvZyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbmNsYXNzIE1vcmVJbmZvQWxhcm1Db250cm9sUGFuZWwgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWlucHV0IHtcbiAgICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICAgICAgbWF4LXdpZHRoOiAyMDBweDtcbiAgICAgICAgfVxuICAgICAgICAucGFkIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLnBhZCBkaXYge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgfVxuICAgICAgICAucGFkIG13Yy1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICB9XG4gICAgICAgIC5hY3Rpb25zIG13Yy1idXR0b24ge1xuICAgICAgICAgIGZsZXg6IDEgMCA1MCU7XG4gICAgICAgICAgbWFyZ2luOiAwIDRweCAxNnB4O1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgbXdjLWJ1dHRvbi5kaXNhcm0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1nb29nbGUtcmVkLTUwMCk7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfY29kZUZvcm1hdF1dXCI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmNvZGUnKV1dXCJcbiAgICAgICAgICB2YWx1ZT1cInt7X2VudGVyZWRDb2RlfX1cIlxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICA+PC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX2lzTnVtYmVyKF9jb2RlRm9ybWF0KV1dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInBhZFwiPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiMVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjE8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI0XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NDwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjdcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID43PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiMlwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjI8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCI1XCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+NTwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjhcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID44PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiMFwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjA8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2RpZ2l0Q2xpY2tlZFwiXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFfaW5wdXRFbmFibGVkXV1cIlxuICAgICAgICAgICAgICAgIGRhdGEtZGlnaXQ9XCIzXCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgICA+MzwvbXdjLWJ1dHRvblxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJfZGlnaXRDbGlja2VkXCJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9pbnB1dEVuYWJsZWRdXVwiXG4gICAgICAgICAgICAgICAgZGF0YS1kaWdpdD1cIjZcIlxuICAgICAgICAgICAgICAgIHJhaXNlZFxuICAgICAgICAgICAgICAgID42PC9td2MtYnV0dG9uXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIl9kaWdpdENsaWNrZWRcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICBkYXRhLWRpZ2l0PVwiOVwiXG4gICAgICAgICAgICAgICAgcmFpc2VkXG4gICAgICAgICAgICAgICAgPjk8L213Yy1idXR0b25cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiX2NsZWFyRW50ZXJlZENvZGVcIlxuICAgICAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2lucHV0RW5hYmxlZF1dXCJcbiAgICAgICAgICAgICAgICByYWlzZWRcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIFtbbG9jYWxpemUoJ3VpLmNhcmQuYWxhcm1fY29udHJvbF9wYW5lbC5jbGVhcl9jb2RlJyldXVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgaG9yaXpvbnRhbCBjZW50ZXItanVzdGlmaWVkIGFjdGlvbnNcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19kaXNhcm1WaXNpYmxlXV1cIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIGNsYXNzPVwiZGlzYXJtXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCJcbiAgICAgICAgICAgIGRhdGEtc2VydmljZT1cImFsYXJtX2Rpc2FybVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmRpc2FybScpXV1cbiAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfYXJtVmlzaWJsZV1dXCI+XG4gICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgIG91dGxpbmVkXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJhbGFybV9hcm1faG9tZVwiXG4gICAgICAgICAgICBkaXNhYmxlZD1cIltbIV9jb2RlVmFsaWRdXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC5hbGFybV9jb250cm9sX3BhbmVsLmFybV9ob21lJyldXVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgb3V0bGluZWRcbiAgICAgICAgICAgIG9uLWNsaWNrPVwiX2NhbGxTZXJ2aWNlXCJcbiAgICAgICAgICAgIGRhdGEtc2VydmljZT1cImFsYXJtX2FybV9hd2F5XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shX2NvZGVWYWxpZF1dXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmFsYXJtX2NvbnRyb2xfcGFuZWwuYXJtX2F3YXknKV1dXG4gICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfc3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgICAgX2VudGVyZWRDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgX2NvZGVGb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICBfY29kZVZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIGNvbXB1dGVkOlxuICAgICAgICAgIFwiX3ZhbGlkYXRlQ29kZShfZW50ZXJlZENvZGUsICBfY29kZUZvcm1hdCwgIF9hcm1WaXNpYmxlLCBfY29kZUFybVJlcXVpcmVkKVwiLFxuICAgICAgfSxcbiAgICAgIF9kaXNhcm1WaXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBfYXJtVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgX2lucHV0RW5hYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIHRoaXMuX2FybWVkU3RhdGVzID0gW1xuICAgICAgXCJhcm1lZF9ob21lXCIsXG4gICAgICBcImFybWVkX2F3YXlcIixcbiAgICAgIFwiYXJtZWRfbmlnaHRcIixcbiAgICAgIFwiYXJtZWRfY3VzdG9tX2J5cGFzc1wiLFxuICAgIF07XG4gIH1cblxuICBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG5ld1ZhbCkge1xuICAgICAgY29uc3Qgc3RhdGUgPSBuZXdWYWwuc3RhdGU7XG4gICAgICBjb25zdCBwcm9wcyA9IHtcbiAgICAgICAgX2NvZGVGb3JtYXQ6IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvZGVfZm9ybWF0LFxuICAgICAgICBfYXJtVmlzaWJsZTogc3RhdGUgPT09IFwiZGlzYXJtZWRcIixcbiAgICAgICAgX2NvZGVBcm1SZXF1aXJlZDogbmV3VmFsLmF0dHJpYnV0ZXMuY29kZV9hcm1fcmVxdWlyZWQsXG4gICAgICAgIF9kaXNhcm1WaXNpYmxlOlxuICAgICAgICAgIHRoaXMuX2FybWVkU3RhdGVzLmluY2x1ZGVzKHN0YXRlKSB8fFxuICAgICAgICAgIHN0YXRlID09PSBcInBlbmRpbmdcIiB8fFxuICAgICAgICAgIHN0YXRlID09PSBcInRyaWdnZXJlZFwiIHx8XG4gICAgICAgICAgc3RhdGUgPT09IFwiYXJtaW5nXCIsXG4gICAgICB9O1xuICAgICAgcHJvcHMuX2lucHV0RW5hYmxlZCA9IHByb3BzLl9kaXNhcm1WaXNpYmxlIHx8IHByb3BzLl9hcm1WaXNpYmxlO1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHByb3BzKTtcbiAgICB9XG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGZpcmVFdmVudCh0aGlzLCBcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBfaXNOdW1iZXIoZm9ybWF0KSB7XG4gICAgcmV0dXJuIGZvcm1hdCA9PT0gXCJOdW1iZXJcIjtcbiAgfVxuXG4gIF92YWxpZGF0ZUNvZGUoY29kZSwgZm9ybWF0LCBhcm1WaXNpYmxlLCBjb2RlQXJtUmVxdWlyZWQpIHtcbiAgICByZXR1cm4gIWZvcm1hdCB8fCBjb2RlLmxlbmd0aCA+IDAgfHwgKGFybVZpc2libGUgJiYgIWNvZGVBcm1SZXF1aXJlZCk7XG4gIH1cblxuICBfZGlnaXRDbGlja2VkKGV2KSB7XG4gICAgdGhpcy5fZW50ZXJlZENvZGUgKz0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtZGlnaXRcIik7XG4gIH1cblxuICBfY2xlYXJFbnRlcmVkQ29kZSgpIHtcbiAgICB0aGlzLl9lbnRlcmVkQ29kZSA9IFwiXCI7XG4gIH1cblxuICBfY2FsbFNlcnZpY2UoZXYpIHtcbiAgICBjb25zdCBzZXJ2aWNlID0gZXYudGFyZ2V0LmdldEF0dHJpYnV0ZShcImRhdGEtc2VydmljZVwiKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGNvZGU6IHRoaXMuX2VudGVyZWRDb2RlLFxuICAgIH07XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiYWxhcm1fY29udHJvbF9wYW5lbFwiLCBzZXJ2aWNlLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuX2VudGVyZWRDb2RlID0gXCJcIjtcbiAgICB9KTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFxuICBcIm1vcmUtaW5mby1hbGFybV9jb250cm9sX3BhbmVsXCIsXG4gIE1vcmVJbmZvQWxhcm1Db250cm9sUGFuZWxcbik7XG4iLCJpbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9BdXRvbWF0aW9uIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAuZmxleCB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIH1cbiAgICAgICAgLmFjdGlvbnMge1xuICAgICAgICAgIG1hcmdpbjogMzZweCAwIDhweCAwO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICA8ZGl2PltbbG9jYWxpemUoJ3VpLmNhcmQuYXV0b21hdGlvbi5sYXN0X3RyaWdnZXJlZCcpXV06PC9kaXY+XG4gICAgICAgIDxoYS1yZWxhdGl2ZS10aW1lXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBkYXRldGltZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5sYXN0X3RyaWdnZXJlZF1dXCJcbiAgICAgICAgPjwvaGEtcmVsYXRpdmUtdGltZT5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cImhhbmRsZVRyaWdnZXJUYXBwZWRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmF1dG9tYXRpb24udHJpZ2dlcicpXV1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICB9O1xuICB9XG5cbiAgaGFuZGxlVHJpZ2dlclRhcHBlZCgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJhdXRvbWF0aW9uXCIsIFwidHJpZ2dlclwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1hdXRvbWF0aW9uXCIsIE1vcmVJbmZvQXV0b21hdGlvbik7XG4iLCJpbXBvcnQge1xuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG4gIExpdEVsZW1lbnQsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQsIENhbWVyYUVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNLFxuICBDYW1lcmFQcmVmZXJlbmNlcyxcbiAgZmV0Y2hDYW1lcmFQcmVmcyxcbiAgdXBkYXRlQ2FtZXJhUHJlZnMsXG59IGZyb20gXCIuLi8uLi8uLi9kYXRhL2NhbWVyYVwiO1xuaW1wb3J0IHsgc3VwcG9ydHNGZWF0dXJlIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvc3VwcG9ydHMtZmVhdHVyZVwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jYW1lcmEtc3RyZWFtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuLy8gTm90IGR1cGxpY2F0ZSBpbXBvcnQsIGl0J3MgZm9yIHR5cGluZ1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckNoZWNrYm94RWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveFwiO1xuXG5jbGFzcyBNb3JlSW5mb0NhbWVyYSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IENhbWVyYUVudGl0eTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfY2FtZXJhUHJlZnM/OiBDYW1lcmFQcmVmZXJlbmNlcztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYXR0YWNoZWQgPSBmYWxzZTtcblxuICBwdWJsaWMgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IHRydWU7XG4gIH1cblxuICBwdWJsaWMgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9hdHRhY2hlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5fYXR0YWNoZWQgfHwgIXRoaXMuaGFzcyB8fCAhdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxoYS1jYW1lcmEtc3RyZWFtXG4gICAgICAgIC5oYXNzPVwiJHt0aGlzLmhhc3N9XCJcbiAgICAgICAgLnN0YXRlT2JqPVwiJHt0aGlzLnN0YXRlT2JqfVwiXG4gICAgICAgIHNob3djb250cm9sc1xuICAgICAgPjwvaGEtY2FtZXJhLXN0cmVhbT5cbiAgICAgICR7dGhpcy5fY2FtZXJhUHJlZnNcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPHBhcGVyLWNoZWNrYm94XG4gICAgICAgICAgICAgIC5jaGVja2VkPSR7dGhpcy5fY2FtZXJhUHJlZnMucHJlbG9hZF9zdHJlYW19XG4gICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl9oYW5kbGVDaGVja2JveENoYW5nZWR9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIFByZWxvYWQgc3RyZWFtXG4gICAgICAgICAgICA8L3BhcGVyLWNoZWNrYm94PlxuICAgICAgICAgIGBcbiAgICAgICAgOiB1bmRlZmluZWR9XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBpZiAoIWNoYW5nZWRQcm9wcy5oYXMoXCJzdGF0ZU9ialwiKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG9sZFN0YXRlID0gY2hhbmdlZFByb3BzLmdldChcInN0YXRlT2JqXCIpIGFzIHRoaXNbXCJzdGF0ZU9ialwiXTtcbiAgICBjb25zdCBvbGRFbnRpdHlJZCA9IG9sZFN0YXRlID8gb2xkU3RhdGUuZW50aXR5X2lkIDogdW5kZWZpbmVkO1xuICAgIGNvbnN0IGN1ckVudGl0eUlkID0gdGhpcy5zdGF0ZU9iaiA/IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkIDogdW5kZWZpbmVkO1xuXG4gICAgLy8gU2FtZSBlbnRpdHksIGlnbm9yZS5cbiAgICBpZiAoY3VyRW50aXR5SWQgPT09IG9sZEVudGl0eUlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKFxuICAgICAgY3VyRW50aXR5SWQgJiZcbiAgICAgIHRoaXMuaGFzcyEuY29uZmlnLmNvbXBvbmVudHMuaW5jbHVkZXMoXCJzdHJlYW1cIikgJiZcbiAgICAgIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqISwgQ0FNRVJBX1NVUFBPUlRfU1RSRUFNKVxuICAgICkge1xuICAgICAgLy8gRmV0Y2ggaW4gYmFja2dyb3VuZCB3aGlsZSB3ZSBzZXQgdXAgdGhlIHZpZGVvLlxuICAgICAgdGhpcy5fZmV0Y2hDYW1lcmFQcmVmcygpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZldGNoQ2FtZXJhUHJlZnMoKSB7XG4gICAgdGhpcy5fY2FtZXJhUHJlZnMgPSBhd2FpdCBmZXRjaENhbWVyYVByZWZzKFxuICAgICAgdGhpcy5oYXNzISxcbiAgICAgIHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZFxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIF9oYW5kbGVDaGVja2JveENoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBjaGVja2JveCA9IGV2LmN1cnJlbnRUYXJnZXQgYXMgUGFwZXJDaGVja2JveEVsZW1lbnQ7XG4gICAgdHJ5IHtcbiAgICAgIHRoaXMuX2NhbWVyYVByZWZzID0gYXdhaXQgdXBkYXRlQ2FtZXJhUHJlZnMoXG4gICAgICAgIHRoaXMuaGFzcyEsXG4gICAgICAgIHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZCxcbiAgICAgICAge1xuICAgICAgICAgIHByZWxvYWRfc3RyZWFtOiBjaGVja2JveC5jaGVja2VkISxcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGFsZXJ0KGVyci5tZXNzYWdlKTtcbiAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSAhY2hlY2tib3guY2hlY2tlZDtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICBwYXBlci1jaGVja2JveCB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiA1cHg7XG4gICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDZweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jYW1lcmFcIiwgTW9yZUluZm9DYW1lcmEpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1jb250cm9sXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLXNsaWRlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXN3aXRjaFwiO1xuXG5pbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVSVExEaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7XG4gIENsaW1hdGVFbnRpdHksXG4gIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkUsXG4gIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVfUkFOR0UsXG4gIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfSFVNSURJVFksXG4gIENMSU1BVEVfU1VQUE9SVF9GQU5fTU9ERSxcbiAgQ0xJTUFURV9TVVBQT1JUX1NXSU5HX01PREUsXG4gIENMSU1BVEVfU1VQUE9SVF9BVVhfSEVBVCxcbiAgQ0xJTUFURV9TVVBQT1JUX1BSRVNFVF9NT0RFLFxuICBjb21wYXJlQ2xpbWF0ZUh2YWNNb2Rlcyxcbn0gZnJvbSBcIi4uLy4uLy4uL2RhdGEvY2xpbWF0ZVwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgY2xhc3NNYXAgfSBmcm9tIFwibGl0LWh0bWwvZGlyZWN0aXZlcy9jbGFzcy1tYXBcIjtcblxuY2xhc3MgTW9yZUluZm9DbGltYXRlIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogQ2xpbWF0ZUVudGl0eTtcbiAgcHJpdmF0ZSBfcmVzaXplRGVib3VuY2U/OiBudW1iZXI7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgYDtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5zdGF0ZU9iajtcblxuICAgIGNvbnN0IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZSA9IHN1cHBvcnRzRmVhdHVyZShcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9URU1QRVJBVFVSRVxuICAgICk7XG4gICAgY29uc3Qgc3VwcG9ydFRhcmdldFRlbXBlcmF0dXJlUmFuZ2UgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9UQVJHRVRfVEVNUEVSQVRVUkVfUkFOR0VcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRUYXJnZXRIdW1pZGl0eSA9IHN1cHBvcnRzRmVhdHVyZShcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgQ0xJTUFURV9TVVBQT1JUX1RBUkdFVF9IVU1JRElUWVxuICAgICk7XG4gICAgY29uc3Qgc3VwcG9ydEZhbk1vZGUgPSBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIENMSU1BVEVfU1VQUE9SVF9GQU5fTU9ERSk7XG4gICAgY29uc3Qgc3VwcG9ydFByZXNldE1vZGUgPSBzdXBwb3J0c0ZlYXR1cmUoXG4gICAgICBzdGF0ZU9iaixcbiAgICAgIENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERVxuICAgICk7XG4gICAgY29uc3Qgc3VwcG9ydFN3aW5nTW9kZSA9IHN1cHBvcnRzRmVhdHVyZShcbiAgICAgIHN0YXRlT2JqLFxuICAgICAgQ0xJTUFURV9TVVBQT1JUX1NXSU5HX01PREVcbiAgICApO1xuICAgIGNvbnN0IHN1cHBvcnRBdXhIZWF0ID0gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCBDTElNQVRFX1NVUFBPUlRfQVVYX0hFQVQpO1xuXG4gICAgY29uc3QgdGVtcGVyYXR1cmVTdGVwU2l6ZSA9XG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX3N0ZXAgfHxcbiAgICAgIChoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZS5pbmRleE9mKFwiRlwiKSA9PT0gLTEgPyAwLjUgOiAxKTtcblxuICAgIGNvbnN0IHJ0bERpcmVjdGlvbiA9IGNvbXB1dGVSVExEaXJlY3Rpb24oaGFzcyk7XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgXCJoYXMtY3VycmVudF90ZW1wZXJhdHVyZVwiOlxuICAgICAgICAgICAgXCJjdXJyZW50X3RlbXBlcmF0dXJlXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlcyxcbiAgICAgICAgICBcImhhcy1jdXJyZW50X2h1bWlkaXR5XCI6IFwiY3VycmVudF9odW1pZGl0eVwiIGluIHN0YXRlT2JqLmF0dHJpYnV0ZXMsXG4gICAgICAgICAgXCJoYXMtdGFyZ2V0X3RlbXBlcmF0dXJlXCI6IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZSxcbiAgICAgICAgICBcImhhcy10YXJnZXRfdGVtcGVyYXR1cmVfcmFuZ2VcIjogc3VwcG9ydFRhcmdldFRlbXBlcmF0dXJlUmFuZ2UsXG4gICAgICAgICAgXCJoYXMtdGFyZ2V0X2h1bWlkaXR5XCI6IHN1cHBvcnRUYXJnZXRIdW1pZGl0eSxcbiAgICAgICAgICBcImhhcy1mYW5fbW9kZVwiOiBzdXBwb3J0RmFuTW9kZSxcbiAgICAgICAgICBcImhhcy1zd2luZ19tb2RlXCI6IHN1cHBvcnRTd2luZ01vZGUsXG4gICAgICAgICAgXCJoYXMtYXV4X2hlYXRcIjogc3VwcG9ydEF1eEhlYXQsXG4gICAgICAgICAgXCJoYXMtcHJlc2V0X21vZGVcIjogc3VwcG9ydFByZXNldE1vZGUsXG4gICAgICAgIH0pfVxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXRlbXBlcmF0dXJlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz0ke3N0YXRlT2JqLnN0YXRlfT5cbiAgICAgICAgICAgICR7c3VwcG9ydFRhcmdldFRlbXBlcmF0dXJlIHx8IHN1cHBvcnRUYXJnZXRUZW1wZXJhdHVyZVJhbmdlXG4gICAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS50YXJnZXRfdGVtcGVyYXR1cmVcIil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZVxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aGEtY2xpbWF0ZS1jb250cm9sXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmV9XG4gICAgICAgICAgICAgICAgICAgIC51bml0cz0ke2hhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAuc3RlcD0ke3RlbXBlcmF0dXJlU3RlcFNpemV9XG4gICAgICAgICAgICAgICAgICAgIC5taW49JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl90ZW1wfVxuICAgICAgICAgICAgICAgICAgICAubWF4PSR7c3RhdGVPYmouYXR0cmlidXRlcy5tYXhfdGVtcH1cbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RhcmdldFRlbXBlcmF0dXJlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L2hhLWNsaW1hdGUtY29udHJvbD5cbiAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cgfHxcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaFxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8aGEtY2xpbWF0ZS1jb250cm9sXG4gICAgICAgICAgICAgICAgICAgIC52YWx1ZT0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93fVxuICAgICAgICAgICAgICAgICAgICAudW5pdHM9JHtoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgLnN0ZXA9JHt0ZW1wZXJhdHVyZVN0ZXBTaXplfVxuICAgICAgICAgICAgICAgICAgICAubWluPSR7c3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcH1cbiAgICAgICAgICAgICAgICAgICAgLm1heD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaH1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9XCJyYW5nZS1jb250cm9sLWxlZnRcIlxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdGFyZ2V0VGVtcGVyYXR1cmVMb3dDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtY2xpbWF0ZS1jb250cm9sPlxuICAgICAgICAgICAgICAgICAgPGhhLWNsaW1hdGUtY29udHJvbFxuICAgICAgICAgICAgICAgICAgICAudmFsdWU9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2h9XG4gICAgICAgICAgICAgICAgICAgIC51bml0cz0ke2hhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlfVxuICAgICAgICAgICAgICAgICAgICAuc3RlcD0ke3RlbXBlcmF0dXJlU3RlcFNpemV9XG4gICAgICAgICAgICAgICAgICAgIC5taW49JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2xvd31cbiAgICAgICAgICAgICAgICAgICAgLm1heD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXB9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwicmFuZ2UtY29udHJvbC1yaWdodFwiXG4gICAgICAgICAgICAgICAgICAgIEBjaGFuZ2U9JHt0aGlzLl90YXJnZXRUZW1wZXJhdHVyZUhpZ2hDaGFuZ2VkfVxuICAgICAgICAgICAgICAgICAgPjwvaGEtY2xpbWF0ZS1jb250cm9sPlxuICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAke3N1cHBvcnRUYXJnZXRIdW1pZGl0eVxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1odW1pZGl0eVwiPlxuICAgICAgICAgICAgICAgIDxkaXY+JHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF9odW1pZGl0eVwiKX08L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2luZ2xlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhcmdldC1odW1pZGl0eVwiPlxuICAgICAgICAgICAgICAgICAgICAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHl9ICVcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgPGhhLXBhcGVyLXNsaWRlclxuICAgICAgICAgICAgICAgICAgICBjbGFzcz1cImh1bWlkaXR5XCJcbiAgICAgICAgICAgICAgICAgICAgc3RlcD1cIjFcIlxuICAgICAgICAgICAgICAgICAgICBwaW5cbiAgICAgICAgICAgICAgICAgICAgaWdub3JlLWJhci10b3VjaFxuICAgICAgICAgICAgICAgICAgICBkaXI9JHtydGxEaXJlY3Rpb259XG4gICAgICAgICAgICAgICAgICAgIC5taW49JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1pbl9odW1pZGl0eX1cbiAgICAgICAgICAgICAgICAgICAgLm1heD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X2h1bWlkaXR5fVxuICAgICAgICAgICAgICAgICAgICAuc2Vjb25kYXJ5UHJvZ3Jlc3M9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF9odW1pZGl0eX1cbiAgICAgICAgICAgICAgICAgICAgLnZhbHVlPSR7c3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX1cbiAgICAgICAgICAgICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX3RhcmdldEh1bWlkaXR5U2xpZGVyQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDwvaGEtcGFwZXItc2xpZGVyPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1odmFjX21vZGVzXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2xzXCI+XG4gICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICBkeW5hbWljLWFsaWduXG4gICAgICAgICAgICAgIC5sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUub3BlcmF0aW9uXCIpfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7c3RhdGVPYmouc3RhdGV9XG4gICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVPcGVyYXRpb25tb2RlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5odmFjX21vZGVzXG4gICAgICAgICAgICAgICAgICAuY29uY2F0KClcbiAgICAgICAgICAgICAgICAgIC5zb3J0KGNvbXBhcmVDbGltYXRlSHZhY01vZGVzKVxuICAgICAgICAgICAgICAgICAgLm1hcChcbiAgICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lPSR7bW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoYHN0YXRlLmNsaW1hdGUuJHttb2RlfWApfVxuICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICAke3N1cHBvcnRQcmVzZXRNb2RlXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXByZXNldF9tb2Rlc1wiPlxuICAgICAgICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5wcmVzZXRfbW9kZVwiKX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdGVkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5wcmVzZXRfbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgQHNlbGVjdGVkLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVQcmVzZXRtb2RlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNldF9tb2RlcyEubWFwKFxuICAgICAgICAgICAgICAgICAgICAgIChtb2RlKSA9PiBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lPSR7bW9kZX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7aGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBgc3RhdGVfYXR0cmlidXRlcy5jbGltYXRlLnByZXNldF9tb2RlLiR7bW9kZX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICkgfHwgbW9kZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgICAgICAgICBgXG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICR7c3VwcG9ydEZhbk1vZGVcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItZmFuX2xpc3RcIj5cbiAgICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgICAgbGFiZWwtZmxvYXRcbiAgICAgICAgICAgICAgICAgIGR5bmFtaWMtYWxpZ25cbiAgICAgICAgICAgICAgICAgIC5sYWJlbD0ke2hhc3MubG9jYWxpemUoXCJ1aS5jYXJkLmNsaW1hdGUuZmFuX21vZGVcIil9XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICAgICAgICAgIC5zZWxlY3RlZD0ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuZmFuX21vZGV9XG4gICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlRmFubW9kZUNoYW5nZWR9XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICR7c3RhdGVPYmouYXR0cmlidXRlcy5mYW5fbW9kZXMhLm1hcChcbiAgICAgICAgICAgICAgICAgICAgICAobW9kZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZT0ke21vZGV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYHN0YXRlX2F0dHJpYnV0ZXMuY2xpbWF0ZS5mYW5fbW9kZS4ke21vZGV9YFxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHx8IG1vZGV9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3N1cHBvcnRTd2luZ01vZGVcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItc3dpbmdfbGlzdFwiPlxuICAgICAgICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICAgICAgLmxhYmVsPSR7aGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5zd2luZ19tb2RlXCIpfVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgICAuc2VsZWN0ZWQ9JHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnN3aW5nX21vZGV9XG4gICAgICAgICAgICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5faGFuZGxlU3dpbmdtb2RlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnN3aW5nX21vZGVzIS5tYXAoXG4gICAgICAgICAgICAgICAgICAgICAgKG1vZGUpID0+IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWU9JHttb2RlfT4ke21vZGV9PC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgYFxuICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgJHtzdXBwb3J0QXV4SGVhdFxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1hdXhfaGVhdFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXIgaG9yaXpvbnRhbCBsYXlvdXQgc2luZ2xlLXJvd1wiPlxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmF1eF9oZWF0XCIpfVxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgICAgICAgIC5jaGVja2VkPSR7c3RhdGVPYmouYXR0cmlidXRlcy5hdXhfaGVhdCA9PT0gXCJvblwifVxuICAgICAgICAgICAgICAgICAgICBAY2hhbmdlPSR7dGhpcy5fYXV4VG9nZ2xlQ2hhbmdlZH1cbiAgICAgICAgICAgICAgICAgID48L2hhLXN3aXRjaD5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fcmVzaXplRGVib3VuY2UpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aGlzLl9yZXNpemVEZWJvdW5jZSk7XG4gICAgfVxuICAgIHRoaXMuX3Jlc2l6ZURlYm91bmNlID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgICB0aGlzLl9yZXNpemVEZWJvdW5jZSA9IHVuZGVmaW5lZDtcbiAgICB9LCA1MDApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy50ZW1wZXJhdHVyZSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X3RlbXBlcmF0dXJlXCIsXG4gICAgICB7IHRlbXBlcmF0dXJlOiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF90YXJnZXRUZW1wZXJhdHVyZUxvd0NoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBldi5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3csXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF90ZW1wZXJhdHVyZVwiLFxuICAgICAge1xuICAgICAgICB0YXJnZXRfdGVtcF9sb3c6IG5ld1ZhbCxcbiAgICAgICAgdGFyZ2V0X3RlbXBfaGlnaDogdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoLFxuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF90YXJnZXRUZW1wZXJhdHVyZUhpZ2hDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuY3VycmVudFRhcmdldC52YWx1ZTtcbiAgICB0aGlzLl9jYWxsU2VydmljZUhlbHBlcihcbiAgICAgIHRoaXMuc3RhdGVPYmohLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X3RlbXBlcmF0dXJlXCIsXG4gICAgICB7XG4gICAgICAgIHRhcmdldF90ZW1wX2xvdzogdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3csXG4gICAgICAgIHRhcmdldF90ZW1wX2hpZ2g6IG5ld1ZhbCxcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfdGFyZ2V0SHVtaWRpdHlTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgICAgdGhpcy5zdGF0ZU9iaiEuYXR0cmlidXRlcy5odW1pZGl0eSxcbiAgICAgIG5ld1ZhbCxcbiAgICAgIFwic2V0X2h1bWlkaXR5XCIsXG4gICAgICB7IGh1bWlkaXR5OiBuZXdWYWwgfVxuICAgICk7XG4gIH1cblxuICBwcml2YXRlIF9hdXhUb2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLmF1eF9oZWF0ID09PSBcIm9uXCIsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF9hdXhfaGVhdFwiLFxuICAgICAgeyBhdXhfaGVhdDogbmV3VmFsIH1cbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlRmFubW9kZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLmZhbl9tb2RlLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfZmFuX21vZGVcIixcbiAgICAgIHsgZmFuX21vZGU6IG5ld1ZhbCB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuICAgIHRoaXMuX2NhbGxTZXJ2aWNlSGVscGVyKHRoaXMuc3RhdGVPYmohLnN0YXRlLCBuZXdWYWwsIFwic2V0X2h2YWNfbW9kZVwiLCB7XG4gICAgICBodmFjX21vZGU6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVN3aW5nbW9kZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLnN3aW5nX21vZGUsXG4gICAgICBuZXdWYWwsXG4gICAgICBcInNldF9zd2luZ19tb2RlXCIsXG4gICAgICB7IHN3aW5nX21vZGU6IG5ld1ZhbCB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZVByZXNldG1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlIHx8IG51bGw7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2VIZWxwZXIoXG4gICAgICB0aGlzLnN0YXRlT2JqIS5hdHRyaWJ1dGVzLnByZXNldF9tb2RlLFxuICAgICAgbmV3VmFsLFxuICAgICAgXCJzZXRfcHJlc2V0X21vZGVcIixcbiAgICAgIHsgcHJlc2V0X21vZGU6IG5ld1ZhbCB9XG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2NhbGxTZXJ2aWNlSGVscGVyKFxuICAgIG9sZFZhbDogdW5rbm93bixcbiAgICBuZXdWYWw6IHVua25vd24sXG4gICAgc2VydmljZTogc3RyaW5nLFxuICAgIGRhdGE6IHtcbiAgICAgIGVudGl0eV9pZD86IHN0cmluZztcbiAgICAgIFtrZXk6IHN0cmluZ106IHVua25vd247XG4gICAgfVxuICApIHtcbiAgICBpZiAob2xkVmFsID09PSBuZXdWYWwpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBkYXRhLmVudGl0eV9pZCA9IHRoaXMuc3RhdGVPYmohLmVudGl0eV9pZDtcbiAgICBjb25zdCBjdXJTdGF0ZSA9IHRoaXMuc3RhdGVPYmo7XG5cbiAgICBhd2FpdCB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJjbGltYXRlXCIsIHNlcnZpY2UsIGRhdGEpO1xuXG4gICAgLy8gV2UgcmVzZXQgc3RhdGVPYmogdG8gcmUtc3luYyB0aGUgaW5wdXRzIHdpdGggdGhlIHN0YXRlLiBJdCB3aWxsIGJlIG91dFxuICAgIC8vIG9mIHN5bmMgaWYgb3VyIHNlcnZpY2UgY2FsbCBkaWQgbm90IHJlc3VsdCBpbiB0aGUgZW50aXR5IHRvIGJlIHR1cm5lZFxuICAgIC8vIG9uLiBTaW5jZSB0aGUgc3RhdGUgaXMgbm90IGNoYW5naW5nLCB0aGUgcmVzeW5jIGlzIG5vdCBjYWxsZWQgYXV0b21hdGljLlxuICAgIGF3YWl0IG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiBzZXRUaW1lb3V0KHJlc29sdmUsIDIwMDApKTtcblxuICAgIC8vIE5vIG5lZWQgdG8gcmVzeW5jIGlmIHdlIHJlY2VpdmVkIGEgbmV3IHN0YXRlLlxuICAgIGlmICh0aGlzLnN0YXRlT2JqICE9PSBjdXJTdGF0ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuc3RhdGVPYmogPSB1bmRlZmluZWQ7XG4gICAgYXdhaXQgdGhpcy51cGRhdGVDb21wbGV0ZTtcbiAgICAvLyBPbmx5IHJlc3RvcmUgaWYgbm90IHNldCB5ZXQgYnkgYSBzdGF0ZSBjaGFuZ2VcbiAgICBpZiAodGhpcy5zdGF0ZU9iaiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnN0YXRlT2JqID0gY3VyU3RhdGU7XG4gICAgfVxuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lci1odmFjX21vZGVzIGlyb24taWNvbixcbiAgICAgIC5jb250YWluZXItZmFuX2xpc3QgaXJvbi1pY29uLFxuICAgICAgLmNvbnRhaW5lci1zd2luZ19saXN0IGlyb24taWNvbiB7XG4gICAgICAgIG1hcmdpbjogMjJweCAxNnB4IDAgMDtcbiAgICAgIH1cblxuICAgICAgaGEtcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICBoYS1wYXBlci1zbGlkZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lci1odW1pZGl0eSAuc2luZ2xlLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIH1cblxuICAgICAgLnRhcmdldC1odW1pZGl0eSB7XG4gICAgICAgIHdpZHRoOiA5MHB4O1xuICAgICAgICBmb250LXNpemU6IDIwMCU7XG4gICAgICAgIG1hcmdpbjogYXV0bztcbiAgICAgICAgZGlyZWN0aW9uOiBsdHI7XG4gICAgICB9XG5cbiAgICAgIGhhLWNsaW1hdGUtY29udHJvbC5yYW5nZS1jb250cm9sLWxlZnQsXG4gICAgICBoYS1jbGltYXRlLWNvbnRyb2wucmFuZ2UtY29udHJvbC1yaWdodCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgfVxuICAgICAgaGEtY2xpbWF0ZS1jb250cm9sLnJhbmdlLWNvbnRyb2wtbGVmdCB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNCU7XG4gICAgICB9XG4gICAgICBoYS1jbGltYXRlLWNvbnRyb2wucmFuZ2UtY29udHJvbC1yaWdodCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA0JTtcbiAgICAgIH1cblxuICAgICAgLmh1bWlkaXR5IHtcbiAgICAgICAgLS1wYXBlci1zbGlkZXItYWN0aXZlLWNvbG9yOiB2YXIoLS1wYXBlci1ibHVlLTQwMCk7XG4gICAgICAgIC0tcGFwZXItc2xpZGVyLXNlY29uZGFyeS1jb2xvcjogdmFyKC0tcGFwZXItYmx1ZS00MDApO1xuICAgICAgfVxuXG4gICAgICAuc2luZ2xlLXJvdyB7XG4gICAgICAgIHBhZGRpbmc6IDhweCAwO1xuICAgICAgfVxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNsaW1hdGVcIiwgTW9yZUluZm9DbGltYXRlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9pcm9uLWlucHV0L2lyb24taW5wdXRcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLW1hcmtkb3duXCI7XG5cbmNsYXNzIE1vcmVJbmZvQ29uZmlndXJhdG9yIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBwIHtcbiAgICAgICAgICBtYXJnaW46IDhweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgcCA+IGltZyB7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgcC5jZW50ZXIge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHAuZXJyb3Ige1xuICAgICAgICAgIGNvbG9yOiAjYzYyODI4O1xuICAgICAgICB9XG5cbiAgICAgICAgcC5zdWJtaXQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBoZWlnaHQ6IDQxcHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1zcGlubmVyIHtcbiAgICAgICAgICB3aWR0aDogMTRweDtcbiAgICAgICAgICBoZWlnaHQ6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJsYXlvdXQgdmVydGljYWxcIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2lzQ29uZmlndXJhYmxlXV1cIj5cbiAgICAgICAgICA8aGEtbWFya2Rvd25cbiAgICAgICAgICAgIGNvbnRlbnQ9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb25dXVwiXG4gICAgICAgICAgPjwvaGEtbWFya2Rvd24+XG5cbiAgICAgICAgICA8cCBjbGFzcz1cImVycm9yXCIgaGlkZGVuJD1cIltbIXN0YXRlT2JqLmF0dHJpYnV0ZXMuZXJyb3JzXV1cIj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5lcnJvcnNdXVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5maWVsZHNdXVwiPlxuICAgICAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgICAgIGxhYmVsPVwiW1tpdGVtLm5hbWVdXVwiXG4gICAgICAgICAgICAgIG5hbWU9XCJbW2l0ZW0uaWRdXVwiXG4gICAgICAgICAgICAgIHR5cGU9XCJbW2l0ZW0udHlwZV1dXCJcbiAgICAgICAgICAgICAgb24tY2hhbmdlPVwiZmllbGRDaGFuZ2VkXCJcbiAgICAgICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICA8cCBjbGFzcz1cInN1Ym1pdFwiIGhpZGRlbiQ9XCJbWyFzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1Ym1pdF9jYXB0aW9uXV1cIj5cbiAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgIHJhaXNlZD1cIlwiXG4gICAgICAgICAgICAgIGRpc2FibGVkPVwiW1tpc0NvbmZpZ3VyaW5nXV1cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cInN1Ym1pdENsaWNrZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8cGFwZXItc3Bpbm5lclxuICAgICAgICAgICAgICAgIGFjdGl2ZT1cIltbaXNDb25maWd1cmluZ11dXCJcbiAgICAgICAgICAgICAgICBoaWRkZW49XCJbWyFpc0NvbmZpZ3VyaW5nXV1cIlxuICAgICAgICAgICAgICAgIGFsdD1cIkNvbmZpZ3VyaW5nXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItc3Bpbm5lcj5cbiAgICAgICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1Ym1pdF9jYXB0aW9uXV1cbiAgICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBhY3Rpb246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJkaXNwbGF5XCIsXG4gICAgICB9LFxuXG4gICAgICBpc0NvbmZpZ3VyYWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlSXNDb25maWd1cmFibGUoc3RhdGVPYmopXCIsXG4gICAgICB9LFxuXG4gICAgICBpc0NvbmZpZ3VyaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGZpZWxkSW5wdXQ6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUlzQ29uZmlndXJhYmxlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLnN0YXRlID09PSBcImNvbmZpZ3VyZVwiO1xuICB9XG5cbiAgZmllbGRDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIGVsID0gZXYudGFyZ2V0O1xuICAgIHRoaXMuZmllbGRJbnB1dFtlbC5uYW1lXSA9IGVsLnZhbHVlO1xuICB9XG5cbiAgc3VibWl0Q2xpY2tlZCgpIHtcbiAgICB2YXIgZGF0YSA9IHtcbiAgICAgIGNvbmZpZ3VyZV9pZDogdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmNvbmZpZ3VyZV9pZCxcbiAgICAgIGZpZWxkczogdGhpcy5maWVsZElucHV0LFxuICAgIH07XG5cbiAgICB0aGlzLmlzQ29uZmlndXJpbmcgPSB0cnVlO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY29uZmlndXJhdG9yXCIsIFwiY29uZmlndXJlXCIsIGRhdGEpLnRoZW4oXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0NvbmZpZ3VyaW5nID0gZmFsc2U7XG4gICAgICB9LmJpbmQodGhpcyksXG4gICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5pc0NvbmZpZ3VyaW5nID0gZmFsc2U7XG4gICAgICB9LmJpbmQodGhpcylcbiAgICApO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1jb25maWd1cmF0b3JcIiwgTW9yZUluZm9Db25maWd1cmF0b3IpO1xuIiwiaW1wb3J0IHsgUHJvcGVydHlWYWx1ZXMsIFVwZGF0aW5nRWxlbWVudCwgcHJvcGVydHkgfSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCBcIi4vbW9yZS1pbmZvLWFsYXJtX2NvbnRyb2xfcGFuZWxcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWF1dG9tYXRpb25cIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWNhbWVyYVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY2xpbWF0ZVwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tY29uZmlndXJhdG9yXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1jb3VudGVyXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1jb3ZlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZGVmYXVsdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tZmFuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1ncm91cFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taGlzdG9yeV9ncmFwaFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLWxpZ2h0XCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1sb2NrXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXNjcmlwdFwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tc3VuXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby10aW1lclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tdXBkYXRlclwiO1xuaW1wb3J0IFwiLi9tb3JlLWluZm8tdmFjdXVtXCI7XG5pbXBvcnQgXCIuL21vcmUtaW5mby13YXRlcl9oZWF0ZXJcIjtcbmltcG9ydCBcIi4vbW9yZS1pbmZvLXdlYXRoZXJcIjtcblxuaW1wb3J0IHsgc3RhdGVNb3JlSW5mb1R5cGUgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9tb3JlX2luZm9fdHlwZVwiO1xuaW1wb3J0IGR5bmFtaWNDb250ZW50VXBkYXRlciBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2RvbS9keW5hbWljX2NvbnRlbnRfdXBkYXRlclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi8uLi90eXBlc1wiO1xuXG5jbGFzcyBNb3JlSW5mb0NvbnRlbnQgZXh0ZW5kcyBVcGRhdGluZ0VsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IEhhc3NFbnRpdHk7XG4gIHByaXZhdGUgX2RldGFjaGVkQ2hpbGQ/OiBDaGlsZE5vZGU7XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgfVxuXG4gIC8vIFRoaXMgaXMgbm90IGEgbGl0IGVsZW1lbnQsIGJ1dCBhbiB1cGRhdGluZyBlbGVtZW50LCBzbyB3ZSBpbXBsZW1lbnQgdXBkYXRlXG4gIHByb3RlY3RlZCB1cGRhdGUoY2hhbmdlZFByb3BzOiBQcm9wZXJ0eVZhbHVlcyk6IHZvaWQge1xuICAgIHN1cGVyLnVwZGF0ZShjaGFuZ2VkUHJvcHMpO1xuICAgIGNvbnN0IHN0YXRlT2JqID0gdGhpcy5zdGF0ZU9iajtcbiAgICBjb25zdCBoYXNzID0gdGhpcy5oYXNzO1xuXG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcykge1xuICAgICAgaWYgKHRoaXMubGFzdENoaWxkKSB7XG4gICAgICAgIHRoaXMuX2RldGFjaGVkQ2hpbGQgPSB0aGlzLmxhc3RDaGlsZDtcbiAgICAgICAgLy8gRGV0YWNoIGNoaWxkIHRvIHByZXZlbnQgaXQgZnJvbSBkb2luZyB3b3JrLlxuICAgICAgICB0aGlzLnJlbW92ZUNoaWxkKHRoaXMubGFzdENoaWxkKTtcbiAgICAgIH1cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGV0YWNoZWRDaGlsZCkge1xuICAgICAgdGhpcy5hcHBlbmRDaGlsZCh0aGlzLl9kZXRhY2hlZENoaWxkKTtcbiAgICAgIHRoaXMuX2RldGFjaGVkQ2hpbGQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgY29uc3QgbW9yZUluZm9UeXBlID1cbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMgJiYgXCJjdXN0b21fdWlfbW9yZV9pbmZvXCIgaW4gc3RhdGVPYmouYXR0cmlidXRlc1xuICAgICAgICA/IHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VzdG9tX3VpX21vcmVfaW5mb1xuICAgICAgICA6IFwibW9yZS1pbmZvLVwiICsgc3RhdGVNb3JlSW5mb1R5cGUoc3RhdGVPYmopO1xuXG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKHRoaXMsIG1vcmVJbmZvVHlwZS50b1VwcGVyQ2FzZSgpLCB7XG4gICAgICBoYXNzLFxuICAgICAgc3RhdGVPYmosXG4gICAgfSk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWNvbnRlbnRcIiwgTW9yZUluZm9Db250ZW50KTtcbiIsImltcG9ydCB7XG4gIExpdEVsZW1lbnQsXG4gIGh0bWwsXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbiAgcHJvcGVydHksXG4gIGN1c3RvbUVsZW1lbnQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5cbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJtb3JlLWluZm8tY291bnRlclwiKVxuY2xhc3MgTW9yZUluZm9Db3VudGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogSGFzc0VudGl0eTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgIC5hY3Rpb249XCIke1wiaW5jcmVtZW50XCJ9XCJcbiAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZUFjdGlvbkNsaWNrfVwiXG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jYXJkLmNvdW50ZXIuYWN0aW9ucy5pbmNyZW1lbnRcIil9XG4gICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAuYWN0aW9uPVwiJHtcImRlY3JlbWVudFwifVwiXG4gICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICA+XG4gICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC5jb3VudGVyLmFjdGlvbnMuZGVjcmVtZW50XCIpfVxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgIDxtd2MtYnV0dG9uIC5hY3Rpb249XCIke1wicmVzZXRcIn1cIiBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZUFjdGlvbkNsaWNrfVwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcInVpLmNhcmQuY291bnRlci5hY3Rpb25zLnJlc2V0XCIpfVxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJpdmF0ZSBfaGFuZGxlQWN0aW9uQ2xpY2soZTogTW91c2VFdmVudCk6IHZvaWQge1xuICAgIGNvbnN0IGFjdGlvbiA9IChlLmN1cnJlbnRUYXJnZXQgYXMgYW55KS5hY3Rpb247XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiY291bnRlclwiLCBhY3Rpb24sIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJtb3JlLWluZm8tY291bnRlclwiOiBNb3JlSW5mb0NvdW50ZXI7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWxhYmVsZWQtc2xpZGVyXCI7XG5cbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuaW1wb3J0IHsgZmVhdHVyZUNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9mZWF0dXJlX2NsYXNzX25hbWVzXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCB7IGF0dHJpYnV0ZUNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcblxuY29uc3QgRkVBVFVSRV9DTEFTU19OQU1FUyA9IHtcbiAgMTI4OiBcImhhcy1zZXRfdGlsdF9wb3NpdGlvblwiLFxufTtcbmNsYXNzIE1vcmVJbmZvQ292ZXIgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jdXJyZW50X3Bvc2l0aW9uLFxuICAgICAgICAudGlsdCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWN1cnJlbnRfcG9zaXRpb24gLmN1cnJlbnRfcG9zaXRpb24sXG4gICAgICAgIC5oYXMtc2V0X3RpbHRfcG9zaXRpb24gLnRpbHQsXG4gICAgICAgIC5oYXMtY3VycmVudF90aWx0X3Bvc2l0aW9uIC50aWx0IHtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiAyMDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtpbnZpc2libGVdIHtcbiAgICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW4gIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY3VycmVudF9wb3NpdGlvblwiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQuY292ZXIucG9zaXRpb24nKV1dXCJcbiAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7Y292ZXJQb3NpdGlvblNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgZGlzYWJsZWQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTZXRQb3NpdGlvbl1dXCJcbiAgICAgICAgICAgIG9uLWNoYW5nZT1cImNvdmVyUG9zaXRpb25TbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbHRcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmNvdmVyLnRpbHRfcG9zaXRpb24nKV1dXCJcbiAgICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgICBleHRyYT1cIlwiXG4gICAgICAgICAgICB2YWx1ZT1cInt7Y292ZXJUaWx0UG9zaXRpb25TbGlkZXJWYWx1ZX19XCJcbiAgICAgICAgICAgIGRpc2FibGVkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzU2V0VGlsdFBvc2l0aW9uXV1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwiY292ZXJUaWx0UG9zaXRpb25TbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8aGEtY292ZXItdGlsdC1jb250cm9sc1xuICAgICAgICAgICAgICBzbG90PVwiZXh0cmFcIlxuICAgICAgICAgICAgICBoaWRkZW4kPVwiW1tlbnRpdHlPYmouaXNUaWx0T25seV1dXCJcbiAgICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgICAgID48L2hhLWNvdmVyLXRpbHQtY29udHJvbHM+XG4gICAgICAgICAgPC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgICAgY292ZXJQb3NpdGlvblNsaWRlclZhbHVlOiBOdW1iZXIsXG4gICAgICBjb3ZlclRpbHRQb3NpdGlvblNsaWRlclZhbHVlOiBOdW1iZXIsXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopIHtcbiAgICByZXR1cm4gbmV3IENvdmVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgICBjb3ZlclBvc2l0aW9uU2xpZGVyVmFsdWU6IG5ld1ZhbC5hdHRyaWJ1dGVzLmN1cnJlbnRfcG9zaXRpb24sXG4gICAgICAgIGNvdmVyVGlsdFBvc2l0aW9uU2xpZGVyVmFsdWU6IG5ld1ZhbC5hdHRyaWJ1dGVzLmN1cnJlbnRfdGlsdF9wb3NpdGlvbixcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgdmFyIGNsYXNzZXMgPSBbXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXG4gICAgICAgIFwiY3VycmVudF9wb3NpdGlvblwiLFxuICAgICAgICBcImN1cnJlbnRfdGlsdF9wb3NpdGlvblwiLFxuICAgICAgXSksXG4gICAgICBmZWF0dXJlQ2xhc3NOYW1lcyhzdGF0ZU9iaiwgRkVBVFVSRV9DTEFTU19OQU1FUyksXG4gICAgXTtcbiAgICByZXR1cm4gY2xhc3Nlcy5qb2luKFwiIFwiKTtcbiAgfVxuXG4gIGNvdmVyUG9zaXRpb25TbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5lbnRpdHlPYmouc2V0Q292ZXJQb3NpdGlvbihldi50YXJnZXQudmFsdWUpO1xuICB9XG5cbiAgY292ZXJUaWx0UG9zaXRpb25TbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgdGhpcy5lbnRpdHlPYmouc2V0Q292ZXJUaWx0UG9zaXRpb24oZXYudGFyZ2V0LnZhbHVlKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY292ZXJcIiwgTW9yZUluZm9Db3Zlcik7XG4iLCJpbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcblxuY2xhc3MgTW9yZUluZm9EZWZhdWx0IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGhhLWF0dHJpYnV0ZXMgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCI+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZGVmYXVsdFwiLCBNb3JlSW5mb0RlZmF1bHQpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCB7IGF0dHJpYnV0ZUNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0ZhbiBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jb250YWluZXItc3BlZWRfbGlzdCxcbiAgICAgICAgLmNvbnRhaW5lci1kaXJlY3Rpb24sXG4gICAgICAgIC5jb250YWluZXItb3NjaWxsYXRpbmcge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLXNwZWVkX2xpc3QgLmNvbnRhaW5lci1zcGVlZF9saXN0LFxuICAgICAgICAuaGFzLWRpcmVjdGlvbiAuY29udGFpbmVyLWRpcmVjdGlvbixcbiAgICAgICAgLmhhcy1vc2NpbGxhdGluZyAuY29udGFpbmVyLW9zY2lsbGF0aW5nIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1zcGVlZF9saXN0XCI+XG4gICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgIGR5bmFtaWMtYWxpZ249XCJcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLmZhbi5zcGVlZCcpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgc2VsZWN0ZWQ9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc3BlZWRdXVwiXG4gICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJzcGVlZENoYW5nZWRcIlxuICAgICAgICAgICAgICBhdHRyLWZvci1zZWxlY3RlZD1cIml0ZW0tbmFtZVwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICAgIGlzPVwiZG9tLXJlcGVhdFwiXG4gICAgICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuc3BlZWRfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci1vc2NpbGxhdGluZ1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXIgaG9yaXpvbnRhbCBsYXlvdXQgc2luZ2xlLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5bW2xvY2FsaXplKCd1aS5jYXJkLmZhbi5vc2NpbGxhdGUnKV1dPC9kaXY+XG4gICAgICAgICAgICA8aGEtc3dpdGNoXG4gICAgICAgICAgICAgIGNoZWNrZWQ9XCJbW29zY2lsbGF0aW9uVG9nZ2xlQ2hlY2tlZF1dXCJcbiAgICAgICAgICAgICAgb24tY2hhbmdlPVwib3NjaWxsYXRpb25Ub2dnbGVDaGFuZ2VkXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgIDwvaGEtc3dpdGNoPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWRpcmVjdGlvblwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJkaXJlY3Rpb25cIj5cbiAgICAgICAgICAgIDxkaXY+W1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uZGlyZWN0aW9uJyldXTwvZGl2PlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnJvdGF0ZS1sZWZ0XCJcbiAgICAgICAgICAgICAgb24tY2xpY2s9XCJvbkRpcmVjdGlvblJldmVyc2VcIlxuICAgICAgICAgICAgICB0aXRsZT1cIltbbG9jYWxpemUoJ3VpLmNhcmQuZmFuLnJldmVyc2UnKV1dXCJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9XCJbW2NvbXB1dGVJc1JvdGF0aW5nUmV2ZXJzZShzdGF0ZU9iaildXVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpyb3RhdGUtcmlnaHRcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uRGlyZWN0aW9uRm9yd2FyZFwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiW1tsb2NhbGl6ZSgndWkuY2FyZC5mYW4uZm9yd2FyZCcpXV1cIlxuICAgICAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUlzUm90YXRpbmdGb3J3YXJkKHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwic3BlZWQsc3BlZWRfbGlzdCxvc2NpbGxhdGluZyxkaXJlY3Rpb25cIlxuICAgICAgPjwvaGEtYXR0cmlidXRlcz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBvc2NpbGxhdGlvblRvZ2dsZUNoZWNrZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIG9zY2lsbGF0aW9uVG9nZ2xlQ2hlY2tlZDogbmV3VmFsLmF0dHJpYnV0ZXMub3NjaWxsYXRpbmcsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAob2xkVmFsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlKFwiaXJvbi1yZXNpemVcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwibW9yZS1pbmZvLWZhbiBcIiArXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXCJvc2NpbGxhdGluZ1wiLCBcInNwZWVkX2xpc3RcIiwgXCJkaXJlY3Rpb25cIl0pXG4gICAgKTtcbiAgfVxuXG4gIHNwZWVkQ2hhbmdlZChldikge1xuICAgIHZhciBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuc3BlZWQ7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcblxuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBzcGVlZDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgb3NjaWxsYXRpb25Ub2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIG9sZFZhbCA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5vc2NpbGxhdGluZztcbiAgICB2YXIgbmV3VmFsID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICBpZiAob2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImZhblwiLCBcIm9zY2lsbGF0ZVwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgb3NjaWxsYXRpbmc6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uRGlyZWN0aW9uUmV2ZXJzZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJmYW5cIiwgXCJzZXRfZGlyZWN0aW9uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBkaXJlY3Rpb246IFwicmV2ZXJzZVwiLFxuICAgIH0pO1xuICB9XG5cbiAgb25EaXJlY3Rpb25Gb3J3YXJkKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImZhblwiLCBcInNldF9kaXJlY3Rpb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGRpcmVjdGlvbjogXCJmb3J3YXJkXCIsXG4gICAgfSk7XG4gIH1cblxuICBjb21wdXRlSXNSb3RhdGluZ1JldmVyc2Uoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5kaXJlY3Rpb24gPT09IFwicmV2ZXJzZVwiO1xuICB9XG5cbiAgY29tcHV0ZUlzUm90YXRpbmdGb3J3YXJkKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGlyZWN0aW9uID09PSBcImZvcndhcmRcIjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tZmFuXCIsIE1vcmVJbmZvRmFuKTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL3N0YXRlLXN1bW1hcnkvc3RhdGUtY2FyZC1jb250ZW50XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgZHluYW1pY0NvbnRlbnRVcGRhdGVyIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZG9tL2R5bmFtaWNfY29udGVudF91cGRhdGVyXCI7XG5cbmNsYXNzIE1vcmVJbmZvR3JvdXAgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5jaGlsZC1jYXJkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuY2hpbGQtY2FyZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGlkPVwiZ3JvdXBlZENvbnRyb2xEZXRhaWxzXCI+PC9kaXY+XG4gICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3N0YXRlc11dXCIgYXM9XCJzdGF0ZVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hpbGQtY2FyZFwiPlxuICAgICAgICAgIDxzdGF0ZS1jYXJkLWNvbnRlbnRcbiAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVdXVwiXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgID48L3N0YXRlLWNhcmQtY29udGVudD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgc3RhdGVzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlU3RhdGVzKHN0YXRlT2JqLCBoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcInN0YXRlc0NoYW5nZWQoc3RhdGVPYmosIHN0YXRlcylcIl07XG4gIH1cblxuICBjb21wdXRlU3RhdGVzKHN0YXRlT2JqLCBoYXNzKSB7XG4gICAgdmFyIHN0YXRlcyA9IFtdO1xuICAgIHZhciBlbnRJZHMgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmVudGl0eV9pZCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZW50SWRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRJZHNbaV1dO1xuXG4gICAgICBpZiAoc3RhdGUpIHtcbiAgICAgICAgc3RhdGVzLnB1c2goc3RhdGUpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBzdGF0ZXM7XG4gIH1cblxuICBzdGF0ZXNDaGFuZ2VkKHN0YXRlT2JqLCBzdGF0ZXMpIHtcbiAgICBsZXQgZ3JvdXBEb21haW5TdGF0ZU9iaiA9IGZhbHNlO1xuICAgIGxldCBncm91cERvbWFpbiA9IGZhbHNlO1xuXG4gICAgaWYgKHN0YXRlcyAmJiBzdGF0ZXMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgYmFzZVN0YXRlT2JqID0gc3RhdGVzLmZpbmQoKHMpID0+IHMuc3RhdGUgPT09IFwib25cIikgfHwgc3RhdGVzWzBdO1xuICAgICAgZ3JvdXBEb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oYmFzZVN0YXRlT2JqKTtcblxuICAgICAgLy8gR3JvdXBzIG5lZWQgdG8gYmUgZmlsdGVyZWQgb3V0IG9yIHdlJ2xsIHNob3cgY29udGVudCBvZlxuICAgICAgLy8gZmlyc3QgY2hpbGQgYWJvdmUgdGhlIGNoaWxkcmVuIG9mIHRoZSBjdXJyZW50IGdyb3VwXG4gICAgICBpZiAoZ3JvdXBEb21haW4gIT09IFwiZ3JvdXBcIikge1xuICAgICAgICBncm91cERvbWFpblN0YXRlT2JqID0ge1xuICAgICAgICAgIC4uLmJhc2VTdGF0ZU9iaixcbiAgICAgICAgICBlbnRpdHlfaWQ6IHN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7IC4uLmJhc2VTdGF0ZU9iai5hdHRyaWJ1dGVzIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzdGF0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAoZ3JvdXBEb21haW4gIT09IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZXNbaV0pKSB7XG4gICAgICAgICAgICBncm91cERvbWFpblN0YXRlT2JqID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWdyb3VwRG9tYWluU3RhdGVPYmopIHtcbiAgICAgIGNvbnN0IGVsID0gZG9tKHRoaXMuJC5ncm91cGVkQ29udHJvbERldGFpbHMpO1xuICAgICAgaWYgKGVsLmxhc3RDaGlsZCkge1xuICAgICAgICBlbC5yZW1vdmVDaGlsZChlbC5sYXN0Q2hpbGQpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBkeW5hbWljQ29udGVudFVwZGF0ZXIoXG4gICAgICAgIHRoaXMuJC5ncm91cGVkQ29udHJvbERldGFpbHMsXG4gICAgICAgIFwiTU9SRS1JTkZPLVwiICsgZ3JvdXBEb21haW4udG9VcHBlckNhc2UoKSxcbiAgICAgICAgeyBzdGF0ZU9iajogZ3JvdXBEb21haW5TdGF0ZU9iaiwgaGFzczogdGhpcy5oYXNzIH1cbiAgICAgICk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1ncm91cFwiLCBNb3JlSW5mb0dyb3VwKTtcbiIsImltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NhcmRzL2hhLWhpc3RvcnlfZ3JhcGgtY2FyZFwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5cbmNsYXNzIE1vcmVJbmZvSGlzdG9yeUdyYXBoIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWhpc3RvcnlfZ3JhcGgtY2FyZFxuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJcIlxuICAgICAgPlxuICAgICAgICA8aGEtYXR0cmlidXRlcyBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIj48L2hhLWF0dHJpYnV0ZXM+XG4gICAgICA8L2hhLWhpc3RvcnlfZ3JhcGgtY2FyZD5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgIH07XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1oaXN0b3J5X2dyYXBoXCIsIE1vcmVJbmZvSGlzdG9yeUdyYXBoKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBcIkB2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlclwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXJlbGF0aXZlLXRpbWVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvcGFwZXItdGltZS1pbnB1dFwiO1xuXG5pbXBvcnQgeyBhdHRyaWJ1dGVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5cbmNsYXNzIERhdGV0aW1lSW5wdXQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2RvZXNIYXZlRGF0ZShzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlclxuICAgICAgICAgICAgICBpZD1cImRhdGVJbnB1dFwiXG4gICAgICAgICAgICAgIG9uLXZhbHVlLWNoYW5nZWQ9XCJkYXRlVGltZUNoYW5nZWRcIlxuICAgICAgICAgICAgICBsYWJlbD1cIkRhdGVcIlxuICAgICAgICAgICAgICB2YWx1ZT1cInt7c2VsZWN0ZWREYXRlfX1cIlxuICAgICAgICAgICAgPjwvdmFhZGluLWRhdGUtcGlja2VyPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbZG9lc0hhdmVUaW1lKHN0YXRlT2JqKV1dXCIgcmVzdGFtcD1cIlwiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cGFwZXItdGltZS1pbnB1dFxuICAgICAgICAgICAgICBob3VyPVwie3tzZWxlY3RlZEhvdXJ9fVwiXG4gICAgICAgICAgICAgIG1pbj1cInt7c2VsZWN0ZWRNaW51dGV9fVwiXG4gICAgICAgICAgICAgIGZvcm1hdD1cIjI0XCJcbiAgICAgICAgICAgID48L3BhcGVyLXRpbWUtaW5wdXQ+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLmlzX3JlYWR5ID0gZmFsc2U7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHNlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgc2VsZWN0ZWRIb3VyOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6IFwiZGF0ZVRpbWVDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBzZWxlY3RlZE1pbnV0ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGVUaW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmlzX3JlYWR5ID0gdHJ1ZTtcbiAgfVxuXG4gIC8qIENvbnZlcnQgdGhlIGRhdGUgaW4gdGhlIHN0YXRlT2JqIGludG8gYSBzdHJpbmcgdXNlYWJsZSBieSB2YWFkaW4tZGF0ZS1waWNrZXIgKi9cbiAgZ2V0RGF0ZVN0cmluZyhzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmtub3duXCIpIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgICB2YXIgbW9udGhGaWxsZXI7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMubW9udGggPCAxMCkge1xuICAgICAgbW9udGhGaWxsZXIgPSBcIjBcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgbW9udGhGaWxsZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIHZhciBkYXlGaWxsZXI7XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5IDwgMTApIHtcbiAgICAgIGRheUZpbGxlciA9IFwiMFwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBkYXlGaWxsZXIgPSBcIlwiO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIgK1xuICAgICAgXCItXCIgK1xuICAgICAgbW9udGhGaWxsZXIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCArXG4gICAgICBcIi1cIiArXG4gICAgICBkYXlGaWxsZXIgK1xuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICApO1xuICB9XG5cbiAgLyogU2hvdWxkIGZpcmUgd2hlbiBhbnkgdmFsdWUgd2FzIGNoYW5nZWQgKmJ5IHRoZSB1c2VyKiwgbm90IGIvYyBvZiBzZXR0aW5nXG4gICAqIGluaXRpYWwgdmFsdWVzLiAqL1xuICBkYXRlVGltZUNoYW5nZWQoKSB7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNoYW5nZSBpcyByZWFsbHkgY29taW5nIGZyb20gdGhlIHVzZXJcbiAgICBpZiAoIXRoaXMuaXNfcmVhZHkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBsZXQgY2hhbmdlZCA9IGZhbHNlO1xuICAgIGxldCBtaW51dGVGaWxsZXI7XG5cbiAgICBjb25zdCBzZXJ2aWNlRGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfTtcblxuICAgIGlmICh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIGNoYW5nZWQgfD1cbiAgICAgICAgcGFyc2VJbnQodGhpcy5zZWxlY3RlZE1pbnV0ZSkgIT09IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5taW51dGU7XG4gICAgICBjaGFuZ2VkIHw9IHBhcnNlSW50KHRoaXMuc2VsZWN0ZWRIb3VyKSAhPT0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhvdXI7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZE1pbnV0ZSA8IDEwKSB7XG4gICAgICAgIG1pbnV0ZUZpbGxlciA9IFwiMFwiO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWludXRlRmlsbGVyID0gXCJcIjtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lU3RyID1cbiAgICAgICAgdGhpcy5zZWxlY3RlZEhvdXIgKyBcIjpcIiArIG1pbnV0ZUZpbGxlciArIHRoaXMuc2VsZWN0ZWRNaW51dGU7XG4gICAgICBzZXJ2aWNlRGF0YS50aW1lID0gdGltZVN0cjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICBpZiAodGhpcy5zZWxlY3RlZERhdGUubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHJldHVybjsgLy8gRGF0ZSB3YXMgbm90IHNldFxuICAgICAgfVxuXG4gICAgICBjb25zdCBkYXRlVmFsSW5wdXQgPSBuZXcgRGF0ZSh0aGlzLnNlbGVjdGVkRGF0ZSk7XG4gICAgICBjb25zdCBkYXRlVmFsU3RhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnllYXIsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5kYXlcbiAgICAgICk7XG5cbiAgICAgIGNoYW5nZWQgfD0gZGF0ZVZhbFN0YXRlICE9PSBkYXRlVmFsSW5wdXQ7XG5cbiAgICAgIHNlcnZpY2VEYXRhLmRhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICB9XG5cbiAgICBpZiAoY2hhbmdlZCkge1xuICAgICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiaW5wdXRfZGF0ZXRpbWVcIiwgXCJzZXRfZGF0ZXRpbWVcIiwgc2VydmljZURhdGEpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICAvLyBTZXQgdG8gbm9uLXJlYWR5IHMudC4gZGF0ZVRpbWVDaGFuZ2VkIGRvZXMgbm90IGZpcmVcbiAgICB0aGlzLmlzX3JlYWR5ID0gZmFsc2U7XG5cbiAgICBpZiAobmV3VmFsLmF0dHJpYnV0ZXMuaGFzX3RpbWUpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWRIb3VyID0gbmV3VmFsLmF0dHJpYnV0ZXMuaG91cjtcbiAgICAgIHRoaXMuc2VsZWN0ZWRNaW51dGUgPSBuZXdWYWwuYXR0cmlidXRlcy5taW51dGU7XG4gICAgfVxuXG4gICAgaWYgKG5ld1ZhbC5hdHRyaWJ1dGVzLmhhc19kYXRlKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IHRoaXMuZ2V0RGF0ZVN0cmluZyhuZXdWYWwpO1xuICAgIH1cblxuICAgIHRoaXMuaXNfcmVhZHkgPSB0cnVlO1xuICB9XG5cbiAgZG9lc0hhdmVEYXRlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX2RhdGU7XG4gIH1cblxuICBkb2VzSGF2ZVRpbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmouYXR0cmlidXRlcy5oYXNfdGltZTtcbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIFwibW9yZS1pbmZvLWlucHV0X2RhdGV0aW1lIFwiICtcbiAgICAgIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcImhhc190aW1lXCIsIFwiaGFzX2RhdGVcIl0pXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8taW5wdXRfZGF0ZXRpbWVcIiwgRGF0ZXRpbWVJbnB1dCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWNvbG9yLXBpY2tlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1sYWJlbGVkLXNsaWRlclwiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1kcm9wZG93bi1tZW51XCI7XG5cbmltcG9ydCB7IGZlYXR1cmVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvZmVhdHVyZV9jbGFzc19uYW1lc1wiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2V2ZW50cy1taXhpblwiO1xuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG5jb25zdCBGRUFUVVJFX0NMQVNTX05BTUVTID0ge1xuICAxOiBcImhhcy1icmlnaHRuZXNzXCIsXG4gIDI6IFwiaGFzLWNvbG9yX3RlbXBcIixcbiAgNDogXCJoYXMtZWZmZWN0X2xpc3RcIixcbiAgMTY6IFwiaGFzLWNvbG9yXCIsXG4gIDEyODogXCJoYXMtd2hpdGVfdmFsdWVcIixcbn07XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0xpZ2h0IGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgLmVmZmVjdF9saXN0LFxuICAgICAgICAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmNvbG9yX3RlbXAsXG4gICAgICAgIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAwLjVzIGVhc2UtaW47XG4gICAgICAgIH1cblxuICAgICAgICAuY29sb3JfdGVtcCB7XG4gICAgICAgICAgLS1oYS1zbGlkZXItYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoXG4gICAgICAgICAgICByaWdodCxcbiAgICAgICAgICAgIHJnYigyNTUsIDE2MCwgMCkgMCUsXG4gICAgICAgICAgICB3aGl0ZSA1MCUsXG4gICAgICAgICAgICByZ2IoMTY2LCAyMDksIDI1NSkgMTAwJVxuICAgICAgICAgICk7XG4gICAgICAgICAgLyogVGhlIGNvbG9yIHRlbXAgbWluaW11bSB2YWx1ZSBzaG91bGRuJ3QgYmUgcmVuZGVyZWQgZGlmZmVyZW50bHkuIEl0J3Mgbm90IFwib2ZmXCIuICovXG4gICAgICAgICAgLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlZ21lbnRhdGlvbkNvbnRhaW5lciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY29sb3ItcGlja2VyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMC41cyBlYXNlLWluO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMTElO1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAlLCAwJSk7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDBweDtcbiAgICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tZGFyay1zZWNvbmRhcnktb3BhY2l0eSk7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtY29sb3IuaXMtb24gLnNlZ21lbnRhdGlvbkNvbnRhaW5lciAuc2VnbWVudGF0aW9uQnV0dG9uIHtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgdG9wOiAxMSU7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMCUsIDAlKTtcbiAgICAgICAgICB3aWR0aDogMjNweDtcbiAgICAgICAgICBoZWlnaHQ6IDIzcHg7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstc2Vjb25kYXJ5LW9wYWNpdHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1lZmZlY3RfbGlzdC5pcy1vbiAuZWZmZWN0X2xpc3QsXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuYnJpZ2h0bmVzcyxcbiAgICAgICAgLmhhcy1jb2xvcl90ZW1wLmlzLW9uIC5jb2xvcl90ZW1wLFxuICAgICAgICAuaGFzLXdoaXRlX3ZhbHVlLmlzLW9uIC53aGl0ZV92YWx1ZSB7XG4gICAgICAgICAgbWF4LWhlaWdodDogODRweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtYnJpZ2h0bmVzcyAuaGFzLWNvbG9yX3RlbXAuaXMtb24sXG4gICAgICAgIC5oYXMtd2hpdGVfdmFsdWUuaXMtb24ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IC0xNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmhhcy1icmlnaHRuZXNzIC5icmlnaHRuZXNzLFxuICAgICAgICAuaGFzLWNvbG9yX3RlbXAuaXMtb24gLmNvbG9yX3RlbXAsXG4gICAgICAgIC5oYXMtd2hpdGVfdmFsdWUuaXMtb24gLndoaXRlX3ZhbHVlIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtY29sb3IuaXMtb24gLnNlZ21lbnRhdGlvbkJ1dHRvbiB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgIH1cblxuICAgICAgICAuaGFzLWNvbG9yLmlzLW9uIGhhLWNvbG9yLXBpY2tlciB7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyd2lkdGg6IDU7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItd2hlZWwtYm9yZGVyY29sb3I6IHdoaXRlO1xuICAgICAgICAgIC0taGEtY29sb3ItcGlja2VyLXdoZWVsLXNoYWRvdzogbm9uZTtcbiAgICAgICAgICAtLWhhLWNvbG9yLXBpY2tlci1tYXJrZXItYm9yZGVyd2lkdGg6IDI7XG4gICAgICAgICAgLS1oYS1jb2xvci1waWNrZXItbWFya2VyLWJvcmRlcmNvbG9yOiB3aGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pcy11bmF2YWlsYWJsZSAuY29udHJvbCB7XG4gICAgICAgICAgbWF4LWhlaWdodDogMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgYnJpZ2h0bmVzc1wiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQuYnJpZ2h0bmVzcycpXV1cIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJpZ2h0bmVzcy01XCJcbiAgICAgICAgICAgIG1pbj1cIjFcIlxuICAgICAgICAgICAgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3ticmlnaHRuZXNzU2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJicmlnaHRuZXNzU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgPjwvaGEtbGFiZWxlZC1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sIGNvbG9yX3RlbXBcIj5cbiAgICAgICAgICA8aGEtbGFiZWxlZC1zbGlkZXJcbiAgICAgICAgICAgIGNhcHRpb249XCJbW2xvY2FsaXplKCd1aS5jYXJkLmxpZ2h0LmNvbG9yX3RlbXBlcmF0dXJlJyldXVwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp0aGVybW9tZXRlclwiXG4gICAgICAgICAgICBtaW49XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWluX21pcmVkc11dXCJcbiAgICAgICAgICAgIG1heD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5tYXhfbWlyZWRzXV1cIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e2N0U2xpZGVyVmFsdWV9fVwiXG4gICAgICAgICAgICBvbi1jaGFuZ2U9XCJjdFNsaWRlckNoYW5nZWRcIlxuICAgICAgICAgID48L2hhLWxhYmVsZWQtc2xpZGVyPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udHJvbCB3aGl0ZV92YWx1ZVwiPlxuICAgICAgICAgIDxoYS1sYWJlbGVkLXNsaWRlclxuICAgICAgICAgICAgY2FwdGlvbj1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQud2hpdGVfdmFsdWUnKV1dXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOmZpbGUtd29yZC1ib3hcIlxuICAgICAgICAgICAgbWF4PVwiMjU1XCJcbiAgICAgICAgICAgIHZhbHVlPVwie3t3dlNsaWRlclZhbHVlfX1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwid3ZTbGlkZXJDaGFuZ2VkXCJcbiAgICAgICAgICA+PC9oYS1sYWJlbGVkLXNsaWRlcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWdtZW50YXRpb25Db250YWluZXJcIj5cbiAgICAgICAgICA8aGEtY29sb3ItcGlja2VyXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRyb2wgY29sb3JcIlxuICAgICAgICAgICAgb24tY29sb3JzZWxlY3RlZD1cImNvbG9yUGlja2VkXCJcbiAgICAgICAgICAgIGRlc2lyZWQtaHMtY29sb3I9XCJ7e2NvbG9yUGlja2VyQ29sb3J9fVwiXG4gICAgICAgICAgICB0aHJvdHRsZT1cIjUwMFwiXG4gICAgICAgICAgICBodWUtc2VnbWVudHM9XCJ7e2h1ZVNlZ21lbnRzfX1cIlxuICAgICAgICAgICAgc2F0dXJhdGlvbi1zZWdtZW50cz1cInt7c2F0dXJhdGlvblNlZ21lbnRzfX1cIlxuICAgICAgICAgID5cbiAgICAgICAgICA8L2hhLWNvbG9yLXBpY2tlcj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGljb249XCJtZGk6cGFsZXR0ZVwiXG4gICAgICAgICAgICBvbi1jbGljaz1cInNlZ21lbnRDbGlja1wiXG4gICAgICAgICAgICBjbGFzcz1cImNvbnRyb2wgc2VnbWVudGF0aW9uQnV0dG9uXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRyb2wgZWZmZWN0X2xpc3RcIj5cbiAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubGlnaHQuZWZmZWN0JyldXVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3RdXVwiXG4gICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJlZmZlY3RDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICBpcz1cImRvbS1yZXBlYXRcIlxuICAgICAgICAgICAgICAgIGl0ZW1zPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmVmZmVjdF9saXN0XV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgZXh0cmEtZmlsdGVycz1cImJyaWdodG5lc3MsY29sb3JfdGVtcCx3aGl0ZV92YWx1ZSxlZmZlY3RfbGlzdCxlZmZlY3QsaHNfY29sb3IscmdiX2NvbG9yLHh5X2NvbG9yLG1pbl9taXJlZHMsbWF4X21pcmVkc1wiXG4gICAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwic3RhdGVPYmpDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBicmlnaHRuZXNzU2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIGN0U2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIHd2U2xpZGVyVmFsdWU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG5cbiAgICAgIGh1ZVNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDI0LFxuICAgICAgfSxcblxuICAgICAgc2F0dXJhdGlvblNlZ21lbnRzOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDgsXG4gICAgICB9LFxuXG4gICAgICBjb2xvclBpY2tlckNvbG9yOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGNvbnN0IHByb3BzID0ge1xuICAgICAgYnJpZ2h0bmVzc1NsaWRlclZhbHVlOiAwLFxuICAgIH07XG5cbiAgICBpZiAobmV3VmFsICYmIG5ld1ZhbC5zdGF0ZSA9PT0gXCJvblwiKSB7XG4gICAgICBwcm9wcy5icmlnaHRuZXNzU2xpZGVyVmFsdWUgPSBuZXdWYWwuYXR0cmlidXRlcy5icmlnaHRuZXNzO1xuICAgICAgcHJvcHMuY3RTbGlkZXJWYWx1ZSA9IG5ld1ZhbC5hdHRyaWJ1dGVzLmNvbG9yX3RlbXA7XG4gICAgICBwcm9wcy53dlNsaWRlclZhbHVlID0gbmV3VmFsLmF0dHJpYnV0ZXMud2hpdGVfdmFsdWU7XG4gICAgICBpZiAobmV3VmFsLmF0dHJpYnV0ZXMuaHNfY29sb3IpIHtcbiAgICAgICAgcHJvcHMuY29sb3JQaWNrZXJDb2xvciA9IHtcbiAgICAgICAgICBoOiBuZXdWYWwuYXR0cmlidXRlcy5oc19jb2xvclswXSxcbiAgICAgICAgICBzOiBuZXdWYWwuYXR0cmlidXRlcy5oc19jb2xvclsxXSAvIDEwMCxcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLnNldFByb3BlcnRpZXMocHJvcHMpO1xuXG4gICAgaWYgKG9sZFZhbCkge1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIHRoaXMuZmlyZShcImlyb24tcmVzaXplXCIpO1xuICAgICAgfSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIEZFQVRVUkVfQ0xBU1NfTkFNRVMpXTtcbiAgICBpZiAoc3RhdGVPYmogJiYgc3RhdGVPYmouc3RhdGUgPT09IFwib25cIikge1xuICAgICAgY2xhc3Nlcy5wdXNoKFwiaXMtb25cIik7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iaiAmJiBzdGF0ZU9iai5zdGF0ZSA9PT0gXCJ1bmF2YWlsYWJsZVwiKSB7XG4gICAgICBjbGFzc2VzLnB1c2goXCJpcy11bmF2YWlsYWJsZVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzZXMuam9pbihcIiBcIik7XG4gIH1cblxuICBlZmZlY3RDaGFuZ2VkKGV2KSB7XG4gICAgdmFyIG9sZFZhbCA9IHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5lZmZlY3Q7XG4gICAgdmFyIG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcblxuICAgIGlmICghbmV3VmFsIHx8IG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGVmZmVjdDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgYnJpZ2h0bmVzc1NsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgYnJpID0gcGFyc2VJbnQoZXYudGFyZ2V0LnZhbHVlLCAxMCk7XG5cbiAgICBpZiAoaXNOYU4oYnJpKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibGlnaHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBicmlnaHRuZXNzOiBicmksXG4gICAgfSk7XG4gIH1cblxuICBjdFNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgY3QgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTihjdCkpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgY29sb3JfdGVtcDogY3QsXG4gICAgfSk7XG4gIH1cblxuICB3dlNsaWRlckNoYW5nZWQoZXYpIHtcbiAgICB2YXIgd3YgPSBwYXJzZUludChldi50YXJnZXQudmFsdWUsIDEwKTtcblxuICAgIGlmIChpc05hTih3dikpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcImxpZ2h0XCIsIFwidHVybl9vblwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgICAgd2hpdGVfdmFsdWU6IHd2LFxuICAgIH0pO1xuICB9XG5cbiAgc2VnbWVudENsaWNrKCkge1xuICAgIGlmICh0aGlzLmh1ZVNlZ21lbnRzID09PSAyNCAmJiB0aGlzLnNhdHVyYXRpb25TZWdtZW50cyA9PT0gOCkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgaHVlU2VnbWVudHM6IDAsIHNhdHVyYXRpb25TZWdtZW50czogMCB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHsgaHVlU2VnbWVudHM6IDI0LCBzYXR1cmF0aW9uU2VnbWVudHM6IDggfSk7XG4gICAgfVxuICB9XG5cbiAgc2VydmljZUNoYW5nZUNvbG9yKGhhc3MsIGVudGl0eUlkLCBjb2xvcikge1xuICAgIGhhc3MuY2FsbFNlcnZpY2UoXCJsaWdodFwiLCBcInR1cm5fb25cIiwge1xuICAgICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAgIGhzX2NvbG9yOiBbY29sb3IuaCwgY29sb3IucyAqIDEwMF0sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYSBuZXcgY29sb3IgaGFzIGJlZW4gcGlja2VkLlxuICAgKiBzaG91bGQgYmUgdGhyb3R0bGVkIHdpdGggdGhlICd0aHJvdHRsZT0nIGF0dHJpYnV0ZSBvZiB0aGUgY29sb3IgcGlja2VyXG4gICAqL1xuICBjb2xvclBpY2tlZChldikge1xuICAgIHRoaXMuc2VydmljZUNoYW5nZUNvbG9yKHRoaXMuaGFzcywgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsIGV2LmRldGFpbC5ocyk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwibW9yZS1pbmZvLWxpZ2h0XCIsIE1vcmVJbmZvTGlnaHQpO1xuIiwiaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLWF0dHJpYnV0ZXNcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uLy4uLy4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIE1vcmVJbmZvTG9jayBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29kZV9mb3JtYXRdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay5jb2RlJyldXVwiXG4gICAgICAgICAgdmFsdWU9XCJ7e2VudGVyZWRDb2RlfX1cIlxuICAgICAgICAgIHBhdHRlcm49XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuY29kZV9mb3JtYXRdXVwiXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgb24tY2xpY2s9XCJjYWxsU2VydmljZVwiXG4gICAgICAgICAgZGF0YS1zZXJ2aWNlPVwidW5sb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1shaXNMb2NrZWRdXVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay51bmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBvbi1jbGljaz1cImNhbGxTZXJ2aWNlXCJcbiAgICAgICAgICBkYXRhLXNlcnZpY2U9XCJsb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1tpc0xvY2tlZF1dXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5sb2NrLmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiY29kZV9mb3JtYXRcIlxuICAgICAgPjwvaGEtYXR0cmlidXRlcz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGVudGVyZWRDb2RlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuICAgICAgaXNMb2NrZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gbmV3VmFsLnN0YXRlID09PSBcImxvY2tlZFwiO1xuICAgIH1cbiAgfVxuXG4gIGNhbGxTZXJ2aWNlKGV2KSB7XG4gICAgY29uc3Qgc2VydmljZSA9IGV2LnRhcmdldC5nZXRBdHRyaWJ1dGUoXCJkYXRhLXNlcnZpY2VcIik7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICBjb2RlOiB0aGlzLmVudGVyZWRDb2RlLFxuICAgIH07XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibG9ja1wiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tbG9ja1wiLCBNb3JlSW5mb0xvY2spO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1wYXBlci1zbGlkZXJcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IEhhc3NNZWRpYVBsYXllckVudGl0eSBmcm9tIFwiLi4vLi4vLi4vdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbFwiO1xuXG5pbXBvcnQgeyBhdHRyaWJ1dGVDbGFzc05hbWVzIH0gZnJvbSBcIi4uLy4uLy4uL2NvbW1vbi9lbnRpdHkvYXR0cmlidXRlX2NsYXNzX25hbWVzXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGNvbXB1dGVSVExEaXJlY3Rpb24gfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb01lZGlhUGxheWVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAubWVkaWEtc3RhdGUge1xuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaWNvbi1idXR0b25baGlnaGxpZ2h0XSB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWFjY2VudC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAudm9sdW1lIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICBtYXgtaGVpZ2h0OiAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBtYXgtaGVpZ2h0IDAuNXMgZWFzZS1pbjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oYXMtdm9sdW1lX2xldmVsIC52b2x1bWUge1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBpcm9uLWljb24uc291cmNlLWlucHV0IHtcbiAgICAgICAgICBwYWRkaW5nOiA3cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLXBhcGVyLWRyb3Bkb3duLW1lbnUuc291cmNlLWlucHV0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIFtoaWRkZW5dIHtcbiAgICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3MkPVwiW1tjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaildXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibGF5b3V0IGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgIGljb249XCJoYXNzOnBvd2VyXCJcbiAgICAgICAgICAgICAgaGlnaGxpZ2h0JD1cIltbcGxheWVyT2JqLmlzT2ZmXV1cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVRvZ2dsZVBvd2VyXCJcbiAgICAgICAgICAgICAgaGlkZGVuJD1cIltbY29tcHV0ZUhpZGVQb3dlckJ1dHRvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgICAgICAgIGlmPVwiW1tjb21wdXRlU2hvd1BsYXliYWNrQ29udHJvbHMocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1wcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVQcmV2aW91c1wiXG4gICAgICAgICAgICAgICAgaGlkZGVuJD1cIltbIXBsYXllck9iai5zdXBwb3J0c1ByZXZpb3VzVHJhY2tdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiW1tjb21wdXRlUGxheWJhY2tDb250cm9sSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgICAgICAgIG9uLWNsaWNrPVwiaGFuZGxlUGxheWJhY2tDb250cm9sXCJcbiAgICAgICAgICAgICAgICBoaWRkZW4kPVwiW1shY29tcHV0ZVBsYXliYWNrQ29udHJvbEljb24ocGxheWVyT2JqKV1dXCJcbiAgICAgICAgICAgICAgICBoaWdobGlnaHQ9XCJcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c2tpcC1uZXh0XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZU5leHRcIlxuICAgICAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFwbGF5ZXJPYmouc3VwcG9ydHNOZXh0VHJhY2tdXVwiXG4gICAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwhLS0gVk9MVU1FIC0tPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3M9XCJ2b2x1bWVfYnV0dG9ucyBjZW50ZXIgaG9yaXpvbnRhbCBsYXlvdXRcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlVm9sdW1lQnV0dG9ucyhwbGF5ZXJPYmopXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBvbi1jbGljaz1cImhhbmRsZVZvbHVtZVRhcFwiXG4gICAgICAgICAgICBpY29uPVwiaGFzczp2b2x1bWUtb2ZmXCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIGlkPVwidm9sdW1lRG93blwiXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgb24tbW91c2Vkb3duPVwiaGFuZGxlVm9sdW1lRG93blwiXG4gICAgICAgICAgICBvbi10b3VjaHN0YXJ0PVwiaGFuZGxlVm9sdW1lRG93blwiXG4gICAgICAgICAgICBvbi10b3VjaGVuZD1cImhhbmRsZVZvbHVtZVRvdWNoRW5kXCJcbiAgICAgICAgICAgIGljb249XCJoYXNzOnZvbHVtZS1tZWRpdW1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgaWQ9XCJ2b2x1bWVVcFwiXG4gICAgICAgICAgICBkaXNhYmxlZCQ9XCJbW3BsYXllck9iai5pc011dGVkXV1cIlxuICAgICAgICAgICAgb24tbW91c2Vkb3duPVwiaGFuZGxlVm9sdW1lVXBcIlxuICAgICAgICAgICAgb24tdG91Y2hzdGFydD1cImhhbmRsZVZvbHVtZVVwXCJcbiAgICAgICAgICAgIG9uLXRvdWNoZW5kPVwiaGFuZGxlVm9sdW1lVG91Y2hFbmRcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6dm9sdW1lLWhpZ2hcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGNsYXNzPVwidm9sdW1lIGNlbnRlciBob3Jpem9udGFsIGxheW91dFwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbIXBsYXllck9iai5zdXBwb3J0c1ZvbHVtZVNldF1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgb24tY2xpY2s9XCJoYW5kbGVWb2x1bWVUYXBcIlxuICAgICAgICAgICAgaGlkZGVuJD1cIltbcGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lQnV0dG9uc11dXCJcbiAgICAgICAgICAgIGljb249XCJbW2NvbXB1dGVNdXRlVm9sdW1lSWNvbihwbGF5ZXJPYmopXV1cIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDxoYS1wYXBlci1zbGlkZXJcbiAgICAgICAgICAgIGRpc2FibGVkJD1cIltbcGxheWVyT2JqLmlzTXV0ZWRdXVwiXG4gICAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICAgIG1heD1cIjEwMFwiXG4gICAgICAgICAgICB2YWx1ZT1cIltbcGxheWVyT2JqLnZvbHVtZVNsaWRlclZhbHVlXV1cIlxuICAgICAgICAgICAgb24tY2hhbmdlPVwidm9sdW1lU2xpZGVyQ2hhbmdlZFwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgaWdub3JlLWJhci10b3VjaD1cIlwiXG4gICAgICAgICAgICBkaXI9XCJ7e3J0bH19XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9oYS1wYXBlci1zbGlkZXI+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNPVVJDRSBQSUNLRVIgLS0+XG4gICAgICAgIDxkaXZcbiAgICAgICAgICBjbGFzcz1cImNvbnRyb2xzIGxheW91dCBob3Jpem9udGFsIGp1c3RpZmllZFwiXG4gICAgICAgICAgaGlkZGVuJD1cIltbY29tcHV0ZUhpZGVTZWxlY3RTb3VyY2UocGxheWVyT2JqKV1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJzb3VyY2UtaW5wdXRcIiBpY29uPVwiaGFzczpsb2dpbi12YXJpYW50XCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgPGhhLXBhcGVyLWRyb3Bkb3duLW1lbnVcbiAgICAgICAgICAgIGNsYXNzPVwiZmxleCBzb3VyY2UtaW5wdXRcIlxuICAgICAgICAgICAgZHluYW1pYy1hbGlnbj1cIlwiXG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubWVkaWFfcGxheWVyLnNvdXJjZScpXV1cIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94XG4gICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICBzZWxlY3RlZD1cIltbcGxheWVyT2JqLnNvdXJjZV1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZVNvdXJjZUNoYW5nZWRcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW3BsYXllck9iai5zb3VyY2VMaXN0XV1cIj5cbiAgICAgICAgICAgICAgICA8cGFwZXItaXRlbSBpdGVtLW5hbWUkPVwiW1tpdGVtXV1cIj5bW2l0ZW1dXTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICA8L2hhLXBhcGVyLWRyb3Bkb3duLW1lbnU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8IS0tIFNPVU5EIE1PREUgUElDS0VSIC0tPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIWNvbXB1dGVIaWRlU2VsZWN0U291bmRNb2RlKHBsYXllck9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9scyBsYXlvdXQgaG9yaXpvbnRhbCBqdXN0aWZpZWRcIj5cbiAgICAgICAgICAgIDxpcm9uLWljb24gY2xhc3M9XCJzb3VyY2UtaW5wdXRcIiBpY29uPVwiaGFzczptdXNpYy1ub3RlXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICBjbGFzcz1cImZsZXggc291cmNlLWlucHV0XCJcbiAgICAgICAgICAgICAgZHluYW1pYy1hbGlnblxuICAgICAgICAgICAgICBsYWJlbC1mbG9hdFxuICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQubWVkaWFfcGxheWVyLnNvdW5kX21vZGUnKV1dXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1twbGF5ZXJPYmouc291bmRNb2RlXV1cIlxuICAgICAgICAgICAgICAgIG9uLXNlbGVjdGVkLWNoYW5nZWQ9XCJoYW5kbGVTb3VuZE1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbcGxheWVyT2JqLnNvdW5kTW9kZUxpc3RdXVwiPlxuICAgICAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gaXRlbS1uYW1lJD1cIltbaXRlbV1dXCI+W1tpdGVtXV08L3BhcGVyLWl0ZW0+XG4gICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8IS0tIFRUUyAtLT5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW2NvbXB1dGVIaWRlVFRTKHR0c0xvYWRlZCwgcGxheWVyT2JqKV1dXCJcbiAgICAgICAgICBjbGFzcz1cImxheW91dCBob3Jpem9udGFsIGVuZFwiXG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIGlkPVwidHRzSW5wdXRcIlxuICAgICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5jYXJkLm1lZGlhX3BsYXllci50ZXh0X3RvX3NwZWFrJyldXVwiXG4gICAgICAgICAgICBjbGFzcz1cImZsZXhcIlxuICAgICAgICAgICAgdmFsdWU9XCJ7e3R0c01lc3NhZ2V9fVwiXG4gICAgICAgICAgICBvbi1rZXlkb3duPVwidHRzQ2hlY2tGb3JFbnRlclwiXG4gICAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpzZW5kXCJcbiAgICAgICAgICAgIG9uLWNsaWNrPVwic2VuZFRUU1wiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIHBsYXllck9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVQbGF5ZXJPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICAgIG9ic2VydmVyOiBcInBsYXllck9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHR0c0xvYWRlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlVFRTTG9hZGVkKGhhc3MpXCIsXG4gICAgICB9LFxuXG4gICAgICB0dHNNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiXCIsXG4gICAgICB9LFxuXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTERpcmVjdGlvbihoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVBsYXllck9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgSGFzc01lZGlhUGxheWVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIHBsYXllck9iakNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICBpZiAob2xkVmFsKSB7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5maXJlKFwiaXJvbi1yZXNpemVcIik7XG4gICAgICB9LCA1MDApO1xuICAgIH1cbiAgfVxuXG4gIGNvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIGF0dHJpYnV0ZUNsYXNzTmFtZXMoc3RhdGVPYmosIFtcInZvbHVtZV9sZXZlbFwiXSk7XG4gIH1cblxuICBjb21wdXRlTXV0ZVZvbHVtZUljb24ocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuIHBsYXllck9iai5pc011dGVkID8gXCJoYXNzOnZvbHVtZS1vZmZcIiA6IFwiaGFzczp2b2x1bWUtaGlnaFwiO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVWb2x1bWVCdXR0b25zKHBsYXllck9iaikge1xuICAgIHJldHVybiAhcGxheWVyT2JqLnN1cHBvcnRzVm9sdW1lQnV0dG9ucyB8fCBwbGF5ZXJPYmouaXNPZmY7XG4gIH1cblxuICBjb21wdXRlU2hvd1BsYXliYWNrQ29udHJvbHMocGxheWVyT2JqKSB7XG4gICAgcmV0dXJuICFwbGF5ZXJPYmouaXNPZmYgJiYgcGxheWVyT2JqLmhhc01lZGlhQ29udHJvbDtcbiAgfVxuXG4gIGNvbXB1dGVQbGF5YmFja0NvbnRyb2xJY29uKHBsYXllck9iaikge1xuICAgIGlmIChwbGF5ZXJPYmouaXNQbGF5aW5nKSB7XG4gICAgICByZXR1cm4gcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgPyBcImhhc3M6cGF1c2VcIiA6IFwiaGFzczpzdG9wXCI7XG4gICAgfVxuICAgIGlmIChwbGF5ZXJPYmouaGFzTWVkaWFDb250cm9sIHx8IHBsYXllck9iai5pc09mZiB8fCBwbGF5ZXJPYmouaXNJZGxlKSB7XG4gICAgICBpZiAoXG4gICAgICAgIHBsYXllck9iai5oYXNNZWRpYUNvbnRyb2wgJiZcbiAgICAgICAgcGxheWVyT2JqLnN1cHBvcnRzUGF1c2UgJiZcbiAgICAgICAgIXBsYXllck9iai5pc1BhdXNlZFxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiBcImhhc3M6cGxheS1wYXVzZVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHBsYXllck9iai5zdXBwb3J0c1BsYXkgPyBcImhhc3M6cGxheVwiIDogbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cblxuICBjb21wdXRlSGlkZVBvd2VyQnV0dG9uKHBsYXllck9iaikge1xuICAgIHJldHVybiBwbGF5ZXJPYmouaXNPZmZcbiAgICAgID8gIXBsYXllck9iai5zdXBwb3J0c1R1cm5PblxuICAgICAgOiAhcGxheWVyT2JqLnN1cHBvcnRzVHVybk9mZjtcbiAgfVxuXG4gIGNvbXB1dGVIaWRlU2VsZWN0U291cmNlKHBsYXllck9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBwbGF5ZXJPYmouaXNPZmYgfHxcbiAgICAgICFwbGF5ZXJPYmouc3VwcG9ydHNTZWxlY3RTb3VyY2UgfHxcbiAgICAgICFwbGF5ZXJPYmouc291cmNlTGlzdFxuICAgICk7XG4gIH1cblxuICBjb21wdXRlSGlkZVNlbGVjdFNvdW5kTW9kZShwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgcGxheWVyT2JqLmlzT2ZmIHx8XG4gICAgICAhcGxheWVyT2JqLnN1cHBvcnRzU2VsZWN0U291bmRNb2RlIHx8XG4gICAgICAhcGxheWVyT2JqLnNvdW5kTW9kZUxpc3RcbiAgICApO1xuICB9XG5cbiAgY29tcHV0ZUhpZGVUVFModHRzTG9hZGVkLCBwbGF5ZXJPYmopIHtcbiAgICByZXR1cm4gIXR0c0xvYWRlZCB8fCAhcGxheWVyT2JqLnN1cHBvcnRzUGxheU1lZGlhO1xuICB9XG5cbiAgY29tcHV0ZVRUU0xvYWRlZChoYXNzKSB7XG4gICAgcmV0dXJuIGlzQ29tcG9uZW50TG9hZGVkKGhhc3MsIFwidHRzXCIpO1xuICB9XG5cbiAgaGFuZGxlVG9nZ2xlUG93ZXIoKSB7XG4gICAgdGhpcy5wbGF5ZXJPYmoudG9nZ2xlUG93ZXIoKTtcbiAgfVxuXG4gIGhhbmRsZVByZXZpb3VzKCkge1xuICAgIHRoaXMucGxheWVyT2JqLnByZXZpb3VzVHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZVBsYXliYWNrQ29udHJvbCgpIHtcbiAgICB0aGlzLnBsYXllck9iai5tZWRpYVBsYXlQYXVzZSgpO1xuICB9XG5cbiAgaGFuZGxlTmV4dCgpIHtcbiAgICB0aGlzLnBsYXllck9iai5uZXh0VHJhY2soKTtcbiAgfVxuXG4gIGhhbmRsZVNvdXJjZUNoYW5nZWQoZXYpIHtcbiAgICBpZiAoIXRoaXMucGxheWVyT2JqKSByZXR1cm47XG5cbiAgICB2YXIgb2xkVmFsID0gdGhpcy5wbGF5ZXJPYmouc291cmNlO1xuICAgIHZhciBuZXdWYWwgPSBldi5kZXRhaWwudmFsdWU7XG5cbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuXG4gICAgdGhpcy5wbGF5ZXJPYmouc2VsZWN0U291cmNlKG5ld1ZhbCk7XG4gIH1cblxuICBoYW5kbGVTb3VuZE1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgaWYgKCF0aGlzLnBsYXllck9iaikgcmV0dXJuO1xuXG4gICAgdmFyIG9sZFZhbCA9IHRoaXMucGxheWVyT2JqLnNvdW5kTW9kZTtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMucGxheWVyT2JqLnNlbGVjdFNvdW5kTW9kZShuZXdWYWwpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVGFwKCkge1xuICAgIGlmICghdGhpcy5wbGF5ZXJPYmouc3VwcG9ydHNWb2x1bWVNdXRlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMucGxheWVyT2JqLnZvbHVtZU11dGUoIXRoaXMucGxheWVyT2JqLmlzTXV0ZWQpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lVG91Y2hFbmQoZXYpIHtcbiAgICAvKiB3aGVuIHRvdWNoIGVuZHMsIHdlIG11c3QgcHJldmVudCB0aGlzIGZyb21cbiAgICAgKiBiZWNvbWluZyBhIG1vdXNlZG93biwgdXAsIGNsaWNrIGJ5IGVtdWxhdGlvbiAqL1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBoYW5kbGVWb2x1bWVVcCgpIHtcbiAgICBjb25zdCBvYmogPSB0aGlzLiQudm9sdW1lVXA7XG4gICAgdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoXCJ2b2x1bWVfdXBcIiwgb2JqLCB0cnVlKTtcbiAgfVxuXG4gIGhhbmRsZVZvbHVtZURvd24oKSB7XG4gICAgY29uc3Qgb2JqID0gdGhpcy4kLnZvbHVtZURvd247XG4gICAgdGhpcy5oYW5kbGVWb2x1bWVXb3JrZXIoXCJ2b2x1bWVfZG93blwiLCBvYmosIHRydWUpO1xuICB9XG5cbiAgaGFuZGxlVm9sdW1lV29ya2VyKHNlcnZpY2UsIG9iaiwgZm9yY2UpIHtcbiAgICBpZiAoZm9yY2UgfHwgKG9iaiAhPT0gdW5kZWZpbmVkICYmIG9iai5wb2ludGVyRG93bikpIHtcbiAgICAgIHRoaXMucGxheWVyT2JqLmNhbGxTZXJ2aWNlKHNlcnZpY2UpO1xuICAgICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLmhhbmRsZVZvbHVtZVdvcmtlcihzZXJ2aWNlLCBvYmosIGZhbHNlKSwgNTAwKTtcbiAgICB9XG4gIH1cblxuICB2b2x1bWVTbGlkZXJDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3Qgdm9sUGVyY2VudGFnZSA9IHBhcnNlRmxvYXQoZXYudGFyZ2V0LnZhbHVlKTtcbiAgICBjb25zdCB2b2x1bWUgPSB2b2xQZXJjZW50YWdlID4gMCA/IHZvbFBlcmNlbnRhZ2UgLyAxMDAgOiAwO1xuICAgIHRoaXMucGxheWVyT2JqLnNldFZvbHVtZSh2b2x1bWUpO1xuICB9XG5cbiAgdHRzQ2hlY2tGb3JFbnRlcihldikge1xuICAgIGlmIChldi5rZXlDb2RlID09PSAxMykgdGhpcy5zZW5kVFRTKCk7XG4gIH1cblxuICBzZW5kVFRTKCkge1xuICAgIGNvbnN0IHNlcnZpY2VzID0gdGhpcy5oYXNzLnNlcnZpY2VzLnR0cztcbiAgICBjb25zdCBzZXJ2aWNlS2V5cyA9IE9iamVjdC5rZXlzKHNlcnZpY2VzKS5zb3J0KCk7XG4gICAgbGV0IHNlcnZpY2U7XG4gICAgbGV0IGk7XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgc2VydmljZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChzZXJ2aWNlS2V5c1tpXS5pbmRleE9mKFwiX3NheVwiKSAhPT0gLTEpIHtcbiAgICAgICAgc2VydmljZSA9IHNlcnZpY2VLZXlzW2ldO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIXNlcnZpY2UpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ0dHNcIiwgc2VydmljZSwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIG1lc3NhZ2U6IHRoaXMudHRzTWVzc2FnZSxcbiAgICB9KTtcbiAgICB0aGlzLnR0c01lc3NhZ2UgPSBcIlwiO1xuICAgIHRoaXMuJC50dHNJbnB1dC5mb2N1cygpO1xuICB9XG5cbiAgX2NvbXB1dGVSVExEaXJlY3Rpb24oaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMRGlyZWN0aW9uKGhhc3MpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby1tZWRpYV9wbGF5ZXJcIiwgTW9yZUluZm9NZWRpYVBsYXllcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9TY3JpcHQgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImxheW91dCB2ZXJ0aWNhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiZGF0YS1lbnRyeSBsYXlvdXQganVzdGlmaWVkIGhvcml6b250YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgICBbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnNjcmlwdC5sYXN0X2FjdGlvbicpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5bW3N0YXRlT2JqLmF0dHJpYnV0ZXMubGFzdF9hY3Rpb25dXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tc2NyaXB0XCIsIE1vcmVJbmZvU2NyaXB0KTtcbiIsImltcG9ydCB7XG4gIHByb3BlcnR5LFxuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1yZWxhdGl2ZS10aW1lXCI7XG5cbmltcG9ydCBmb3JtYXRUaW1lIGZyb20gXCIuLi8uLi8uLi9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJtb3JlLWluZm8tc3VuXCIpXG5jbGFzcyBNb3JlSW5mb1N1biBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcyE6IEhvbWVBc3Npc3RhbnQ7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBzdGF0ZU9iaj86IEhhc3NFbnRpdHk7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIGNvbnN0IHJpc2luZ0RhdGUgPSBuZXcgRGF0ZSh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMubmV4dF9yaXNpbmcpO1xuICAgIGNvbnN0IHNldHRpbmdEYXRlID0gbmV3IERhdGUodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLm5leHRfc2V0dGluZyk7XG4gICAgY29uc3Qgb3JkZXIgPSByaXNpbmdEYXRlID4gc2V0dGluZ0RhdGUgPyBbXCJzZXRcIiwgXCJyaXNcIl0gOiBbXCJyaXNcIiwgXCJzZXRcIl07XG5cbiAgICByZXR1cm4gaHRtbGBcbiAgICAgICR7b3JkZXIubWFwKChpdGVtKSA9PiB7XG4gICAgICAgIHJldHVybiBodG1sYFxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJrZXlcIj5cbiAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICA+JHtpdGVtID09PSBcInJpc1wiXG4gICAgICAgICAgICAgICAgICA/IHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICAgICAgICBcInVpLmRpYWxvZ3MubW9yZV9pbmZvX2NvbnRyb2wuc3VuLnJpc2luZ1wiXG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIDogdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy5tb3JlX2luZm9fY29udHJvbC5zdW4uc2V0dGluZ1wiXG4gICAgICAgICAgICAgICAgICAgICl9PC9zcGFuXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPGhhLXJlbGF0aXZlLXRpbWVcbiAgICAgICAgICAgICAgICAuaGFzcz0ke3RoaXMuaGFzc31cbiAgICAgICAgICAgICAgICAuZGF0ZXRpbWVPYmo9JHtpdGVtID09PSBcInJpc1wiID8gcmlzaW5nRGF0ZSA6IHNldHRpbmdEYXRlfVxuICAgICAgICAgICAgICA+PC9oYS1yZWxhdGl2ZS10aW1lPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj5cbiAgICAgICAgICAgICAgJHtmb3JtYXRUaW1lKFxuICAgICAgICAgICAgICAgIGl0ZW0gPT09IFwicmlzXCIgPyByaXNpbmdEYXRlIDogc2V0dGluZ0RhdGUsXG4gICAgICAgICAgICAgICAgdGhpcy5oYXNzLmxhbmd1YWdlXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcbiAgICAgIH0pfVxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwia2V5XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnN1bi5lbGV2YXRpb25cIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwidmFsdWVcIj4ke3RoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5lbGV2YXRpb259PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLnJvdyB7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJtb3JlLWluZm8tc3VuXCI6IE1vcmVJbmZvU3VuO1xuICB9XG59XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgY3VzdG9tRWxlbWVudCxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBUaW1lckVudGl0eSB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL3RpbWVyXCI7XG5cbkBjdXN0b21FbGVtZW50KFwibW9yZS1pbmZvLXRpbWVyXCIpXG5jbGFzcyBNb3JlSW5mb1RpbWVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBUaW1lckVudGl0eTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICAuc3RhdGVPYmo9JHt0aGlzLnN0YXRlT2JqfVxuICAgICAgICAuZXh0cmFGaWx0ZXJzPSR7XCJyZW1haW5pbmdcIn1cbiAgICAgID48L2hhLWF0dHJpYnV0ZXM+XG4gICAgICA8ZGl2IGNsYXNzPVwiYWN0aW9uc1wiPlxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiaWRsZVwiIHx8IHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGF1c2VkXCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgLmFjdGlvbj1cIiR7XCJzdGFydFwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLnN0YXJ0XCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCJcbiAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgIDxtd2MtYnV0dG9uXG4gICAgICAgICAgICAgICAgLmFjdGlvbj1cIiR7XCJwYXVzZVwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLnBhdXNlXCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICAke3RoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIgfHwgdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIlxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICAgICAgICAuYWN0aW9uPVwiJHtcImNhbmNlbFwifVwiXG4gICAgICAgICAgICAgICAgQGNsaWNrPVwiJHt0aGlzLl9oYW5kbGVBY3Rpb25DbGlja31cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFwidWkuY2FyZC50aW1lci5hY3Rpb25zLmNhbmNlbFwiKX1cbiAgICAgICAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgICAgICAgICA8bXdjLWJ1dHRvblxuICAgICAgICAgICAgICAgIC5hY3Rpb249XCIke1wiZmluaXNoXCJ9XCJcbiAgICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2hhbmRsZUFjdGlvbkNsaWNrfVwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcyEubG9jYWxpemUoXCJ1aS5jYXJkLnRpbWVyLmFjdGlvbnMuZmluaXNoXCIpfVxuICAgICAgICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgaWYgKCFjaGFuZ2VkUHJvcHMuaGFzKFwic3RhdGVPYmpcIikgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVBY3Rpb25DbGljayhlOiBNb3VzZUV2ZW50KTogdm9pZCB7XG4gICAgY29uc3QgYWN0aW9uID0gKGUuY3VycmVudFRhcmdldCBhcyBhbnkpLmFjdGlvbjtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ0aW1lclwiLCBhY3Rpb24sIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iaiEuZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgLmFjdGlvbnMge1xuICAgICAgICBtYXJnaW46IDAgOHB4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJtb3JlLWluZm8tdGltZXJcIjogTW9yZUluZm9UaW1lcjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi8uLi8uLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgTW9yZUluZm9VcGRhdGVyIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICAubGluayB7XG4gICAgICAgICAgY29sb3I6ICMwM2E5ZjQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxhXG4gICAgICAgICAgY2xhc3M9XCJsaW5rXCJcbiAgICAgICAgICBocmVmPVwiaHR0cHM6Ly93d3cuaG9tZS1hc3Npc3RhbnQuaW8vZG9jcy9pbnN0YWxsYXRpb24vdXBkYXRpbmcvXCJcbiAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19jb250cm9sLnVwZGF0ZXIudGl0bGUnKV1dPC9hXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGNvbXB1dGVSZWxlYXNlTm90ZXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gKFxuICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5yZWxlYXNlX25vdGVzIHx8XG4gICAgICBcImh0dHBzOi8vd3d3LmhvbWUtYXNzaXN0YW50LmlvL2RvY3MvaW5zdGFsbGF0aW9uL3VwZGF0aW5nL1wiXG4gICAgKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tdXBkYXRlclwiLCBNb3JlSW5mb1VwZGF0ZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1hdHRyaWJ1dGVzXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcblxuY2xhc3MgTW9yZUluZm9WYWN1dW0gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0dXMtc3VidGl0bGUge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXR1cy1zdWJ0aXRsZVwiPlN0YXR1czogPC9zcGFuXG4gICAgICAgICAgPjxzcGFuPjxzdHJvbmc+W1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnN0YXR1c11dPC9zdHJvbmc+PC9zcGFuPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgID48aXJvbi1pY29uIGljb249XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuYmF0dGVyeV9pY29uXV1cIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5iYXR0ZXJ5X2xldmVsXV0gJTwvc3BhblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaildXVwiPlxuICAgICAgICA8cD48L3A+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0dXMtc3VidGl0bGVcIj5WYWN1dW0gY2xlYW5lciBjb21tYW5kczo8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdXBwb3J0c1N0YXJ0KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5XCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uU3RhcnRcIlxuICAgICAgICAgICAgICAgIHRpdGxlPVwiU3RhcnRcIlxuICAgICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwYXVzZVwiXG4gICAgICAgICAgICAgICAgb24tY2xpY2s9XCJvblBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1shc3VwcG9ydHNTdGFydChzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNQYXVzZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgICBpY29uPVwiaGFzczpwbGF5LXBhdXNlXCJcbiAgICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUGxheVBhdXNlXCJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIlBhdXNlXCJcbiAgICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICAgICAgPGRpdiBoaWRkZW4kPVwiW1shc3VwcG9ydHNTdG9wKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25TdG9wXCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJTdG9wXCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzQ2xlYW5TcG90KHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6YnJvb21cIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xlYW5TcG90XCJcbiAgICAgICAgICAgICAgdGl0bGU9XCJDbGVhbiBzcG90XCJcbiAgICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzTG9jYXRlKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWFwLW1hcmtlclwiXG4gICAgICAgICAgICAgIG9uLWNsaWNrPVwib25Mb2NhdGVcIlxuICAgICAgICAgICAgICB0aXRsZT1cIkxvY2F0ZVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpob21lLW1hcC1tYXJrZXJcIlxuICAgICAgICAgICAgICBvbi1jbGljaz1cIm9uUmV0dXJuSG9tZVwiXG4gICAgICAgICAgICAgIHRpdGxlPVwiUmV0dXJuIGhvbWVcIlxuICAgICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgaGlkZGVuJD1cIltbIXN1cHBvcnRzRmFuU3BlZWQoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAgIDxoYS1wYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgICBsYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgIGxhYmVsPVwiRmFuIHNwZWVkXCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItbGlzdGJveFxuICAgICAgICAgICAgICBzbG90PVwiZHJvcGRvd24tY29udGVudFwiXG4gICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZF1dXCJcbiAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImZhblNwZWVkQ2hhbmdlZFwiXG4gICAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwiaXRlbS1uYW1lXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICBpdGVtcz1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRfbGlzdF1dXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiPltbaXRlbV1dPC9wYXBlci1pdGVtPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvaGEtcGFwZXItZHJvcGRvd24tbWVudT5cbiAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyOyBhbGlnbi1zZWxmOiBjZW50ZXI7IHBhZGRpbmctdG9wOiAxLjNlbVwiXG4gICAgICAgICAgPlxuICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgPjxpcm9uLWljb24gaWNvbj1cImhhc3M6ZmFuXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIFtbc3RhdGVPYmouYXR0cmlidXRlcy5mYW5fc3BlZWRdXTwvc3BhblxuICAgICAgICAgICAgPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHA+PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aGEtYXR0cmlidXRlc1xuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBleHRyYS1maWx0ZXJzPVwiZmFuX3NwZWVkLGZhbl9zcGVlZF9saXN0LHN0YXR1cyxiYXR0ZXJ5X2xldmVsLGJhdHRlcnlfaWNvblwiXG4gICAgICA+PC9oYS1hdHRyaWJ1dGVzPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3VwcG9ydHNQYXVzZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdG9wKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG4gIH1cblxuICBzdXBwb3J0c1JldHVybkhvbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBzdXBwb3J0c0ZhblNwZWVkKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMzIpO1xuICB9XG5cbiAgc3VwcG9ydHNCYXR0ZXJ5KHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuICB9XG5cbiAgc3VwcG9ydHNTdGF0dXMoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMjgpO1xuICB9XG5cbiAgc3VwcG9ydHNMb2NhdGUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpO1xuICB9XG5cbiAgc3VwcG9ydHNDbGVhblNwb3Qoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxMDI0KTtcbiAgfVxuXG4gIHN1cHBvcnRzU3RhcnQoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKTtcbiAgfVxuXG4gIHN1cHBvcnRzQ29tbWFuZEJhcihzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAxNikgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA1MTIpIHxcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTAyNCkgfFxuICAgICAgc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCA4MTkyKVxuICAgICk7XG4gIH1cblxuICBmYW5TcGVlZENoYW5nZWQoZXYpIHtcbiAgICB2YXIgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmZhbl9zcGVlZDtcbiAgICB2YXIgbmV3VmFsID0gZXYuZGV0YWlsLnZhbHVlO1xuXG4gICAgaWYgKCFuZXdWYWwgfHwgb2xkVmFsID09PSBuZXdWYWwpIHJldHVybjtcblxuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInNldF9mYW5fc3BlZWRcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICAgIGZhbl9zcGVlZDogbmV3VmFsLFxuICAgIH0pO1xuICB9XG5cbiAgb25TdG9wKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0b3BcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUGxheVBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0X3BhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblBhdXNlKCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInBhdXNlXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvblN0YXJ0KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcInN0YXJ0XCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBvbkxvY2F0ZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJsb2NhdGVcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uQ2xlYW5TcG90KCkge1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcInZhY3V1bVwiLCBcImNsZWFuX3Nwb3RcIiwge1xuICAgICAgZW50aXR5X2lkOiB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCxcbiAgICB9KTtcbiAgfVxuXG4gIG9uUmV0dXJuSG9tZSgpIHtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJ2YWN1dW1cIiwgXCJyZXR1cm5fdG9fYmFzZVwiLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby12YWN1dW1cIiwgTW9yZUluZm9WYWN1dW0pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbVwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItc2xpZGVyXCI7XG5pbXBvcnQgXCIuLi8uLi8uLi9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCBcIi4uLy4uLy4uL2NvbXBvbmVudHMvaGEtc3dpdGNoXCI7XG5cbmltcG9ydCB7IHN1cHBvcnRzRmVhdHVyZSB9IGZyb20gXCIuLi8uLi8uLi9jb21tb24vZW50aXR5L3N1cHBvcnRzLWZlYXR1cmVcIjtcbmltcG9ydCB7IEV2ZW50c01peGluIH0gZnJvbSBcIi4uLy4uLy4uL21peGlucy9ldmVudHMtbWl4aW5cIjtcblxuaW1wb3J0IHsgZmVhdHVyZUNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vLi4vLi4vY29tbW9uL2VudGl0eS9mZWF0dXJlX2NsYXNzX25hbWVzXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIEV2ZW50c01peGluXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgTW9yZUluZm9XYXRlckhlYXRlciBleHRlbmRzIExvY2FsaXplTWl4aW4oRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuY29udGFpbmVyLW9wZXJhdGlvbl9saXN0LFxuXG4gICAgICAgIC5oYXMtYXdheV9tb2RlIC5jb250YWluZXItYXdheV9tb2RlLFxuICAgICAgICAuaGFzLXRhcmdldF90ZW1wZXJhdHVyZSAuY29udGFpbmVyLXRlbXBlcmF0dXJlLFxuICAgICAgICAuaGFzLW9wZXJhdGlvbl9tb2RlIC5jb250YWluZXItb3BlcmF0aW9uX2xpc3QsXG5cbiAgICAgICAgLmNvbnRhaW5lci1vcGVyYXRpb25fbGlzdCBpcm9uLWljb24sXG5cbiAgICAgICAgaGEtcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pdGVtIHtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBoYS1wYXBlci1zbGlkZXIge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2wucmFuZ2UtY29udHJvbC1sZWZ0LFxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICB3aWR0aDogNDYlO1xuICAgICAgICB9XG4gICAgICAgIGhhLXdhdGVyX2hlYXRlci1jb250cm9sLnJhbmdlLWNvbnRyb2wtbGVmdCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0JTtcbiAgICAgICAgfVxuICAgICAgICBoYS13YXRlcl9oZWF0ZXItY29udHJvbC5yYW5nZS1jb250cm9sLXJpZ2h0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNCU7XG4gICAgICAgIH1cblxuICAgICAgICAuc2luZ2xlLXJvdyB7XG4gICAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcyQ9XCJbW2NvbXB1dGVDbGFzc05hbWVzKHN0YXRlT2JqKV1dXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItdGVtcGVyYXR1cmVcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzJD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5vcGVyYXRpb25fbW9kZV1dXCI+XG4gICAgICAgICAgICA8ZGl2IGhpZGRlbiQ9XCJbWyFzdXBwb3J0c1RlbXBlcmF0dXJlQ29udHJvbHMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIudGFyZ2V0X3RlbXBlcmF0dXJlJyldXVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgICAgICA8aGEtd2F0ZXJfaGVhdGVyLWNvbnRyb2xcbiAgICAgICAgICAgICAgICB2YWx1ZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy50ZW1wZXJhdHVyZV1dXCJcbiAgICAgICAgICAgICAgICB1bml0cz1cIltbaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmVdXVwiXG4gICAgICAgICAgICAgICAgc3RlcD1cIltbY29tcHV0ZVRlbXBlcmF0dXJlU3RlcFNpemUoaGFzcywgc3RhdGVPYmopXV1cIlxuICAgICAgICAgICAgICAgIG1pbj1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5taW5fdGVtcF1dXCJcbiAgICAgICAgICAgICAgICBtYXg9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMubWF4X3RlbXBdXVwiXG4gICAgICAgICAgICAgICAgb24tY2hhbmdlPVwidGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXdhdGVyX2hlYXRlci1jb250cm9sPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaildXVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXItb3BlcmF0aW9uX2xpc3RcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250cm9sc1wiPlxuICAgICAgICAgICAgICA8aGEtcGFwZXItZHJvcGRvd24tbWVudVxuICAgICAgICAgICAgICAgIGxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICAgICAgICBkeW5hbWljLWFsaWduPVwiXCJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIltbbG9jYWxpemUoJ3VpLmNhcmQud2F0ZXJfaGVhdGVyLm9wZXJhdGlvbicpXV1cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICAgICAgICAgIHNlbGVjdGVkPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlXV1cIlxuICAgICAgICAgICAgICAgICAgYXR0ci1mb3Itc2VsZWN0ZWQ9XCJpdGVtLW5hbWVcIlxuICAgICAgICAgICAgICAgICAgb24tc2VsZWN0ZWQtY2hhbmdlZD1cImhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8dGVtcGxhdGVcbiAgICAgICAgICAgICAgICAgICAgaXM9XCJkb20tcmVwZWF0XCJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMub3BlcmF0aW9uX2xpc3RdXVwiXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pdGVtIGl0ZW0tbmFtZSQ9XCJbW2l0ZW1dXVwiXG4gICAgICAgICAgICAgICAgICAgICAgPltbX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgaXRlbSldXTwvcGFwZXItaXRlbVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgICAgICAgPC9oYS1wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3N1cHBvcnRzQXdheU1vZGUoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLWF3YXlfbW9kZVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlciBob3Jpem9udGFsIGxheW91dCBzaW5nbGUtcm93XCI+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgICAgICAgW1tsb2NhbGl6ZSgndWkuY2FyZC53YXRlcl9oZWF0ZXIuYXdheV9tb2RlJyldXVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGhhLXN3aXRjaFxuICAgICAgICAgICAgICAgIGNoZWNrZWQ9XCJbW2F3YXlUb2dnbGVDaGVja2VkXV1cIlxuICAgICAgICAgICAgICAgIG9uLWNoYW5nZT1cImF3YXlUb2dnbGVDaGFuZ2VkXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8L2hhLXN3aXRjaD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICBzdGF0ZU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcInN0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgYXdheVRvZ2dsZUNoZWNrZWQ6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqQ2hhbmdlZChuZXdWYWwsIG9sZFZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIGF3YXlUb2dnbGVDaGVja2VkOiBuZXdWYWwuYXR0cmlidXRlcy5hd2F5X21vZGUgPT09IFwib25cIixcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlmIChvbGRWYWwpIHtcbiAgICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgICB0aW1lT3V0LmFmdGVyKDUwMCksXG4gICAgICAgICgpID0+IHtcbiAgICAgICAgICB0aGlzLmZpcmUoXCJpcm9uLXJlc2l6ZVwiKTtcbiAgICAgICAgfVxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjb21wdXRlVGVtcGVyYXR1cmVTdGVwU2l6ZShoYXNzLCBzdGF0ZU9iaikge1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX3N0ZXApIHtcbiAgICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX3N0ZXA7XG4gICAgfVxuICAgIGlmIChoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZS5pbmRleE9mKFwiRlwiKSAhPT0gLTEpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICByZXR1cm4gMC41O1xuICB9XG5cbiAgc3VwcG9ydHNUZW1wZXJhdHVyZUNvbnRyb2xzKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VwcG9ydHNUZW1wZXJhdHVyZShzdGF0ZU9iaik7XG4gIH1cblxuICBzdXBwb3J0c1RlbXBlcmF0dXJlKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMSkgJiZcbiAgICAgIHR5cGVvZiBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlID09PSBcIm51bWJlclwiXG4gICAgKTtcbiAgfVxuXG4gIHN1cHBvcnRzT3BlcmF0aW9uTW9kZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDIpO1xuICB9XG5cbiAgc3VwcG9ydHNBd2F5TW9kZShzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopIHtcbiAgICBjb25zdCBfZmVhdHVyZUNsYXNzTmFtZXMgPSB7XG4gICAgICAxOiBcImhhcy10YXJnZXRfdGVtcGVyYXR1cmVcIixcbiAgICAgIDI6IFwiaGFzLW9wZXJhdGlvbl9tb2RlXCIsXG4gICAgICA0OiBcImhhcy1hd2F5X21vZGVcIixcbiAgICB9O1xuXG4gICAgdmFyIGNsYXNzZXMgPSBbZmVhdHVyZUNsYXNzTmFtZXMoc3RhdGVPYmosIF9mZWF0dXJlQ2xhc3NOYW1lcyldO1xuXG4gICAgY2xhc3Nlcy5wdXNoKFwibW9yZS1pbmZvLXdhdGVyX2hlYXRlclwiKTtcblxuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgdGFyZ2V0VGVtcGVyYXR1cmVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgdGVtcGVyYXR1cmUgPSBldi50YXJnZXQudmFsdWU7XG4gICAgaWYgKHRlbXBlcmF0dXJlID09PSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUpIHJldHVybjtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlSGVscGVyKFwic2V0X3RlbXBlcmF0dXJlXCIsIHsgdGVtcGVyYXR1cmU6IHRlbXBlcmF0dXJlIH0pO1xuICB9XG5cbiAgYXdheVRvZ2dsZUNoYW5nZWQoZXYpIHtcbiAgICBjb25zdCBvbGRWYWwgPSB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYXdheV9tb2RlID09PSBcIm9uXCI7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG4gICAgaWYgKG9sZFZhbCA9PT0gbmV3VmFsKSByZXR1cm47XG4gICAgdGhpcy5jYWxsU2VydmljZUhlbHBlcihcInNldF9hd2F5X21vZGVcIiwgeyBhd2F5X21vZGU6IG5ld1ZhbCB9KTtcbiAgfVxuXG4gIGhhbmRsZU9wZXJhdGlvbm1vZGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3Qgb2xkVmFsID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLm9wZXJhdGlvbl9tb2RlO1xuICAgIGNvbnN0IG5ld1ZhbCA9IGV2LmRldGFpbC52YWx1ZTtcbiAgICBpZiAoIW5ld1ZhbCB8fCBvbGRWYWwgPT09IG5ld1ZhbCkgcmV0dXJuO1xuICAgIHRoaXMuY2FsbFNlcnZpY2VIZWxwZXIoXCJzZXRfb3BlcmF0aW9uX21vZGVcIiwge1xuICAgICAgb3BlcmF0aW9uX21vZGU6IG5ld1ZhbCxcbiAgICB9KTtcbiAgfVxuXG4gIGNhbGxTZXJ2aWNlSGVscGVyKHNlcnZpY2UsIGRhdGEpIHtcbiAgICAvLyBXZSBjYWxsIHN0YXRlQ2hhbmdlZCBhZnRlciBhIHN1Y2Nlc3NmdWwgY2FsbCB0byByZS1zeW5jIHRoZSBpbnB1dHNcbiAgICAvLyB3aXRoIHRoZSBzdGF0ZS4gSXQgd2lsbCBiZSBvdXQgb2Ygc3luYyBpZiBvdXIgc2VydmljZSBjYWxsIGRpZCBub3RcbiAgICAvLyByZXN1bHQgaW4gdGhlIGVudGl0eSB0byBiZSB0dXJuZWQgb24uIFNpbmNlIHRoZSBzdGF0ZSBpcyBub3QgY2hhbmdpbmcsXG4gICAgLy8gdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgICAvKiBlc2xpbnQtZGlzYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIGRhdGEuZW50aXR5X2lkID0gdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQ7XG4gICAgLyogZXNsaW50LWVuYWJsZSBuby1wYXJhbS1yZWFzc2lnbiAqL1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcIndhdGVyX2hlYXRlclwiLCBzZXJ2aWNlLCBkYXRhKS50aGVuKCgpID0+IHtcbiAgICAgIHRoaXMuc3RhdGVPYmpDaGFuZ2VkKHRoaXMuc3RhdGVPYmopO1xuICAgIH0pO1xuICB9XG5cbiAgX2xvY2FsaXplT3BlcmF0aW9uTW9kZShsb2NhbGl6ZSwgbW9kZSkge1xuICAgIHJldHVybiBsb2NhbGl6ZShgc3RhdGUud2F0ZXJfaGVhdGVyLiR7bW9kZX1gKSB8fCBtb2RlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcIm1vcmUtaW5mby13YXRlcl9oZWF0ZXJcIiwgTW9yZUluZm9XYXRlckhlYXRlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxufSBmcm9tIFwibGl0LWVsZW1lbnRcIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCwgaHRtbCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuXG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IGNhcmRpbmFsRGlyZWN0aW9ucyA9IFtcbiAgXCJOXCIsXG4gIFwiTk5FXCIsXG4gIFwiTkVcIixcbiAgXCJFTkVcIixcbiAgXCJFXCIsXG4gIFwiRVNFXCIsXG4gIFwiU0VcIixcbiAgXCJTU0VcIixcbiAgXCJTXCIsXG4gIFwiU1NXXCIsXG4gIFwiU1dcIixcbiAgXCJXU1dcIixcbiAgXCJXXCIsXG4gIFwiV05XXCIsXG4gIFwiTldcIixcbiAgXCJOTldcIixcbiAgXCJOXCIsXG5dO1xuXG5jb25zdCB3ZWF0aGVySWNvbnMgPSB7XG4gIFwiY2xlYXItbmlnaHRcIjogXCJoYXNzOndlYXRoZXItbmlnaHRcIixcbiAgY2xvdWR5OiBcImhhc3M6d2VhdGhlci1jbG91ZHlcIixcbiAgZXhjZXB0aW9uYWw6IFwiaGFzczphbGVydC1jaXJjbGUtb3V0bGluZVwiLFxuICBmb2c6IFwiaGFzczp3ZWF0aGVyLWZvZ1wiLFxuICBoYWlsOiBcImhhc3M6d2VhdGhlci1oYWlsXCIsXG4gIGxpZ2h0bmluZzogXCJoYXNzOndlYXRoZXItbGlnaHRuaW5nXCIsXG4gIFwibGlnaHRuaW5nLXJhaW55XCI6IFwiaGFzczp3ZWF0aGVyLWxpZ2h0bmluZy1yYWlueVwiLFxuICBwYXJ0bHljbG91ZHk6IFwiaGFzczp3ZWF0aGVyLXBhcnRseS1jbG91ZHlcIixcbiAgcG91cmluZzogXCJoYXNzOndlYXRoZXItcG91cmluZ1wiLFxuICByYWlueTogXCJoYXNzOndlYXRoZXItcmFpbnlcIixcbiAgc25vd3k6IFwiaGFzczp3ZWF0aGVyLXNub3d5XCIsXG4gIFwic25vd3ktcmFpbnlcIjogXCJoYXNzOndlYXRoZXItc25vd3ktcmFpbnlcIixcbiAgc3Vubnk6IFwiaGFzczp3ZWF0aGVyLXN1bm55XCIsXG4gIHdpbmR5OiBcImhhc3M6d2VhdGhlci13aW5keVwiLFxuICBcIndpbmR5LXZhcmlhbnRcIjogXCJoYXNzOndlYXRoZXItd2luZHktdmFyaWFudFwiLFxufTtcblxuQGN1c3RvbUVsZW1lbnQoXCJtb3JlLWluZm8td2VhdGhlclwiKVxuY2xhc3MgTW9yZUluZm9XZWF0aGVyIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIHN0YXRlT2JqPzogSGFzc0VudGl0eTtcblxuICBwcm90ZWN0ZWQgc2hvdWxkVXBkYXRlKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiBib29sZWFuIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBjb25zdCBvbGRIYXNzID0gY2hhbmdlZFByb3BzLmdldChcImhhc3NcIikgYXMgSG9tZUFzc2lzdGFudCB8IHVuZGVmaW5lZDtcbiAgICBpZiAoXG4gICAgICAhb2xkSGFzcyB8fFxuICAgICAgb2xkSGFzcy5sYW5ndWFnZSAhPT0gdGhpcy5oYXNzLmxhbmd1YWdlIHx8XG4gICAgICBvbGRIYXNzLmNvbmZpZy51bml0X3N5c3RlbSAhPT0gdGhpcy5oYXNzLmNvbmZpZy51bml0X3N5c3RlbVxuICAgICkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5oYXNzIHx8ICF0aGlzLnN0YXRlT2JqKSB7XG4gICAgICByZXR1cm4gaHRtbGBgO1xuICAgIH1cblxuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFzczp0aGVybW9tZXRlclwiPjwvaXJvbi1pY29uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY2FyZC53ZWF0aGVyLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmVcIil9XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgICR7dGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlfSAke3RoaXMuZ2V0VW5pdChcInRlbXBlcmF0dXJlXCIpfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgJHt0aGlzLl9zaG93VmFsdWUodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlKVxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOmdhdWdlXCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy5haXJfcHJlc3N1cmVcIil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnByZXNzdXJlfVxuICAgICAgICAgICAgICAgICR7dGhpcy5nZXRVbml0KFwiYWlyX3ByZXNzdXJlXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLl9zaG93VmFsdWUodGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmh1bWlkaXR5KVxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleFwiPlxuICAgICAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJoYXNzOndhdGVyLXBlcmNlbnRcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLmh1bWlkaXR5XCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj4ke3RoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5odW1pZGl0eX0gJTwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3Nob3dWYWx1ZSh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMud2luZF9zcGVlZClcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFzczp3ZWF0aGVyLXdpbmR5XCI+PC9pcm9uLWljb24+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtYWluXCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jYXJkLndlYXRoZXIuYXR0cmlidXRlcy53aW5kX3NwZWVkXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAke3RoaXMuZ2V0V2luZChcbiAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGVPYmouYXR0cmlidXRlcy53aW5kX3NwZWVkLFxuICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLndpbmRfYmVhcmluZ1xuICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgICAke3RoaXMuX3Nob3dWYWx1ZSh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMudmlzaWJpbGl0eSlcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgPGlyb24taWNvbiBpY29uPVwiaGFzczpleWVcIj48L2lyb24taWNvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNhcmQud2VhdGhlci5hdHRyaWJ1dGVzLnZpc2liaWxpdHlcIil9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICR7dGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLnZpc2liaWxpdHl9ICR7dGhpcy5nZXRVbml0KFwibGVuZ3RoXCIpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuZm9yZWNhc3RcbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY3Rpb25cIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5jYXJkLndlYXRoZXIuZm9yZWNhc3RcIil9OlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAke3RoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5mb3JlY2FzdC5tYXAoKGl0ZW0pID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZsZXhcIj5cbiAgICAgICAgICAgICAgICAgICR7aXRlbS5jb25kaXRpb25cbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGlyb24taWNvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAuaWNvbj1cIiR7d2VhdGhlckljb25zW2l0ZW0uY29uZGl0aW9uXX1cIlxuICAgICAgICAgICAgICAgICAgICAgICAgPjwvaXJvbi1pY29uPlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgJHshdGhpcy5fc2hvd1ZhbHVlKGl0ZW0udGVtcGxvdylcbiAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW5cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgJHt0aGlzLmNvbXB1dGVEYXRlVGltZShpdGVtLmRhdGV0aW1lKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICAgICAgICAgICAgJHt0aGlzLl9zaG93VmFsdWUoaXRlbS50ZW1wbG93KVxuICAgICAgICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibWFpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAke3RoaXMuY29tcHV0ZURhdGUoaXRlbS5kYXRldGltZSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZW1wbG93XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICR7aXRlbS50ZW1wbG93fSAke3RoaXMuZ2V0VW5pdChcInRlbXBlcmF0dXJlXCIpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGVtcFwiPlxuICAgICAgICAgICAgICAgICAgICAke2l0ZW0udGVtcGVyYXR1cmV9ICR7dGhpcy5nZXRVbml0KFwidGVtcGVyYXR1cmVcIil9XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYDtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIGBcbiAgICAgICAgOiBcIlwifVxuICAgICAgJHt0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYXR0cmlidXRpb25cbiAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF0dHJpYnV0aW9uXCI+XG4gICAgICAgICAgICAgICR7dGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLmF0dHJpYnV0aW9ufVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgYFxuICAgICAgICA6IFwiXCJ9XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGlyb24taWNvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWljb24tY29sb3IpO1xuICAgICAgfVxuICAgICAgLnNlY3Rpb24ge1xuICAgICAgICBtYXJnaW46IDE2cHggMCA4cHggMDtcbiAgICAgICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICAgIH1cblxuICAgICAgLmZsZXgge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBoZWlnaHQ6IDMycHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5tYWluIHtcbiAgICAgICAgZmxleDogMTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC50ZW1wLFxuICAgICAgLnRlbXBsb3cge1xuICAgICAgICBtaW4td2lkdGg6IDQ4cHg7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICAudGVtcGxvdyB7XG4gICAgICAgIG1hcmdpbjogMCAxNnB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuYXR0cmlidXRpb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHByaXZhdGUgY29tcHV0ZURhdGUoZGF0YSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5oYXNzLmxhbmd1YWdlLCB7XG4gICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgIG1vbnRoOiBcInNob3J0XCIsXG4gICAgICBkYXk6IFwibnVtZXJpY1wiLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBjb21wdXRlRGF0ZVRpbWUoZGF0YSkge1xuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShkYXRhKTtcbiAgICByZXR1cm4gZGF0ZS50b0xvY2FsZURhdGVTdHJpbmcodGhpcy5oYXNzLmxhbmd1YWdlLCB7XG4gICAgICB3ZWVrZGF5OiBcImxvbmdcIixcbiAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRVbml0KG1lYXN1cmU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbGVuZ3RoVW5pdCA9IHRoaXMuaGFzcy5jb25maWcudW5pdF9zeXN0ZW0ubGVuZ3RoIHx8IFwiXCI7XG4gICAgc3dpdGNoIChtZWFzdXJlKSB7XG4gICAgICBjYXNlIFwiYWlyX3ByZXNzdXJlXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0ID09PSBcImttXCIgPyBcImhQYVwiIDogXCJpbkhnXCI7XG4gICAgICBjYXNlIFwibGVuZ3RoXCI6XG4gICAgICAgIHJldHVybiBsZW5ndGhVbml0O1xuICAgICAgY2FzZSBcInByZWNpcGl0YXRpb25cIjpcbiAgICAgICAgcmV0dXJuIGxlbmd0aFVuaXQgPT09IFwia21cIiA/IFwibW1cIiA6IFwiaW5cIjtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB0aGlzLmhhc3MuY29uZmlnLnVuaXRfc3lzdGVtW21lYXN1cmVdIHx8IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSB3aW5kQmVhcmluZ1RvVGV4dChkZWdyZWU6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgZGVncmVlbnVtID0gcGFyc2VJbnQoZGVncmVlLCAxMCk7XG4gICAgaWYgKGlzRmluaXRlKGRlZ3JlZW51bSkpIHtcbiAgICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tYml0d2lzZVxuICAgICAgcmV0dXJuIGNhcmRpbmFsRGlyZWN0aW9uc1soKChkZWdyZWVudW0gKyAxMS4yNSkgLyAyMi41KSB8IDApICUgMTZdO1xuICAgIH1cbiAgICByZXR1cm4gZGVncmVlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRXaW5kKHNwZWVkOiBzdHJpbmcsIGJlYXJpbmc6IHN0cmluZykge1xuICAgIGlmIChiZWFyaW5nICE9IG51bGwpIHtcbiAgICAgIGNvbnN0IGNhcmRpbmFsRGlyZWN0aW9uID0gdGhpcy53aW5kQmVhcmluZ1RvVGV4dChiZWFyaW5nKTtcbiAgICAgIHJldHVybiBgJHtzcGVlZH0gJHt0aGlzLmdldFVuaXQoXCJsZW5ndGhcIil9L2ggKCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICBgdWkuY2FyZC53ZWF0aGVyLmNhcmRpbmFsX2RpcmVjdGlvbi4ke2NhcmRpbmFsRGlyZWN0aW9uLnRvTG93ZXJDYXNlKCl9YFxuICAgICAgKSB8fCBjYXJkaW5hbERpcmVjdGlvbn0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke3NwZWVkfSAke3RoaXMuZ2V0VW5pdChcImxlbmd0aFwiKX0vaGA7XG4gIH1cblxuICBwcml2YXRlIF9zaG93VmFsdWUoaXRlbTogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHR5cGVvZiBpdGVtICE9PSBcInVuZGVmaW5lZFwiICYmIGl0ZW0gIT09IG51bGw7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcIm1vcmUtaW5mby13ZWF0aGVyXCI6IE1vcmVJbmZvV2VhdGhlcjtcbiAgfVxufVxuIiwiaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtdG9vbGJhci9hcHAtdG9vbGJhclwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL3N0YXRlLWhpc3RvcnktY2hhcnRzXCI7XG5pbXBvcnQgXCIuLi8uLi9kYXRhL2hhLXN0YXRlLWhpc3RvcnktZGF0YVwiO1xuaW1wb3J0IFwiLi4vLi4vcmVzb3VyY2VzL2hhLXN0eWxlXCI7XG5pbXBvcnQgXCIuLi8uLi9zdGF0ZS1zdW1tYXJ5L3N0YXRlLWNhcmQtY29udGVudFwiO1xuXG5pbXBvcnQgXCIuL2NvbnRyb2xzL21vcmUtaW5mby1jb250ZW50XCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURvbWFpbiB9IGZyb20gXCIuLi8uLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZG9tYWluXCI7XG5pbXBvcnQgeyBpc0NvbXBvbmVudExvYWRlZCB9IGZyb20gXCIuLi8uLi9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWRcIjtcbmltcG9ydCB7IERPTUFJTlNfTU9SRV9JTkZPX05PX0hJU1RPUlkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNvbnN0IERPTUFJTlNfTk9fSU5GTyA9IFtcImNhbWVyYVwiLCBcImNvbmZpZ3VyYXRvclwiLCBcImhpc3RvcnlfZ3JhcGhcIl07XG4vKlxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb0NvbnRyb2xzIGV4dGVuZHMgRXZlbnRzTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaGEtc3R5bGUtZGlhbG9nXCI+XG4gICAgICAgIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1jb2xvcik7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1iYWNrZ3JvdW5kKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIFttYWluLXRpdGxlXSB7XG4gICAgICAgICAgQGFwcGx5IC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtY2FyZC1jb250ZW50IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtaGlzdG9yeS1jaGFydHMge1xuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1pbi13aWR0aDogNDUxcHgpIGFuZCAobWluLWhlaWdodDogNTAxcHgpIHtcbiAgICAgICAgICAubWFpbi10aXRsZSB7XG4gICAgICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbZG9tYWluPVwiY2FtZXJhXCJdKSBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZSB7XG4gICAgICAgICAgbWFyZ2luOiAwIC0yNHB4IC0yMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgOmhvc3QoW3J0bF0pIGFwcC10b29sYmFyIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGFwcC10b29sYmFyPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiRGlzbWlzcyBkaWFsb2dcIlxuICAgICAgICAgIGljb249XCJoYXNzOmNsb3NlXCJcbiAgICAgICAgICBkaWFsb2ctZGlzbWlzc1xuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGl0bGVcIiBtYWluLXRpdGxlPVwiXCIgb24tY2xpY2s9XCJlbmxhcmdlXCI+XG4gICAgICAgICAgW1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NhbkNvbmZpZ3VyZV1dXCI+XG4gICAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgICBpY29uPVwiaGFzczpzZXR0aW5nc1wiXG4gICAgICAgICAgICBvbi1jbGljaz1cIl9nb3RvU2V0dGluZ3NcIlxuICAgICAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC9hcHAtdG9vbGJhcj5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW19jb21wdXRlU2hvd1N0YXRlSW5mbyhzdGF0ZU9iaildXVwiIHJlc3RhbXA9XCJcIj5cbiAgICAgICAgPHN0YXRlLWNhcmQtY29udGVudFxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBpbi1kaWFsb2c9XCJcIlxuICAgICAgICA+PC9zdGF0ZS1jYXJkLWNvbnRlbnQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlIGRpYWxvZy1lbGVtZW50PVwiW1tkaWFsb2dFbGVtZW50XV1cIj5cbiAgICAgICAgPHRlbXBsYXRlXG4gICAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICAgIGlmPVwiW1tfY29tcHV0ZVNob3dIaXN0b3J5Q29tcG9uZW50KGhhc3MsIHN0YXRlT2JqKV1dXCJcbiAgICAgICAgICByZXN0YW1wPVwiXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxoYS1zdGF0ZS1oaXN0b3J5LWRhdGFcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBmaWx0ZXItdHlwZT1cInJlY2VudC1lbnRpdHlcIlxuICAgICAgICAgICAgZW50aXR5LWlkPVwiW1tzdGF0ZU9iai5lbnRpdHlfaWRdXVwiXG4gICAgICAgICAgICBkYXRhPVwie3tfc3RhdGVIaXN0b3J5fX1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZz1cInt7X3N0YXRlSGlzdG9yeUxvYWRpbmd9fVwiXG4gICAgICAgICAgICBjYWNoZS1jb25maWc9XCJbW19jYWNoZUNvbmZpZ11dXCJcbiAgICAgICAgICA+PC9oYS1zdGF0ZS1oaXN0b3J5LWRhdGE+XG4gICAgICAgICAgPHN0YXRlLWhpc3RvcnktY2hhcnRzXG4gICAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgICAgaGlzdG9yeS1kYXRhPVwiW1tfc3RhdGVIaXN0b3J5XV1cIlxuICAgICAgICAgICAgaXMtbG9hZGluZy1kYXRhPVwiW1tfc3RhdGVIaXN0b3J5TG9hZGluZ11dXCJcbiAgICAgICAgICAgIHVwLXRvLW5vd1xuICAgICAgICAgID48L3N0YXRlLWhpc3RvcnktY2hhcnRzPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8bW9yZS1pbmZvLWNvbnRlbnRcbiAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgID48L21vcmUtaW5mby1jb250ZW50PlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG5cbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGlhbG9nRWxlbWVudDogT2JqZWN0LFxuICAgICAgY2FuQ29uZmlndXJlOiBCb29sZWFuLFxuXG4gICAgICBkb21haW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlRG9tYWluKHN0YXRlT2JqKVwiLFxuICAgICAgfSxcblxuICAgICAgX3N0YXRlSGlzdG9yeTogT2JqZWN0LFxuICAgICAgX3N0YXRlSGlzdG9yeUxvYWRpbmc6IEJvb2xlYW4sXG5cbiAgICAgIGxhcmdlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcblxuICAgICAgX2NhY2hlQ29uZmlnOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICByZWZyZXNoOiA2MCxcbiAgICAgICAgICBjYWNoZUtleTogbnVsbCxcbiAgICAgICAgICBob3Vyc1RvU2hvdzogMjQsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6IFwiX2NvbXB1dGVSVEwoaGFzcylcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGVubGFyZ2UoKSB7XG4gICAgdGhpcy5sYXJnZSA9ICF0aGlzLmxhcmdlO1xuICB9XG5cbiAgX2NvbXB1dGVTaG93U3RhdGVJbmZvKHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuICFzdGF0ZU9iaiB8fCAhRE9NQUlOU19OT19JTkZPLmluY2x1ZGVzKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikpO1xuICB9XG5cbiAgX2NvbXB1dGVTaG93SGlzdG9yeUNvbXBvbmVudChoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiAoXG4gICAgICBoYXNzICYmXG4gICAgICBzdGF0ZU9iaiAmJlxuICAgICAgaXNDb21wb25lbnRMb2FkZWQoaGFzcywgXCJoaXN0b3J5XCIpICYmXG4gICAgICAhRE9NQUlOU19NT1JFX0lORk9fTk9fSElTVE9SWS5pbmNsdWRlcyhjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopKVxuICAgICk7XG4gIH1cblxuICBfY29tcHV0ZURvbWFpbihzdGF0ZU9iaikge1xuICAgIHJldHVybiBzdGF0ZU9iaiA/IGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZU9iaikgOiBcIlwiO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gc3RhdGVPYmogPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSA6IFwiXCI7XG4gIH1cblxuICBfc3RhdGVPYmpDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmICghbmV3VmFsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NhY2hlQ29uZmlnLmNhY2hlS2V5ICE9PSBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gKSB7XG4gICAgICB0aGlzLl9jYWNoZUNvbmZpZyA9IHtcbiAgICAgICAgLi4udGhpcy5fY2FjaGVDb25maWcsXG4gICAgICAgIGNhY2hlS2V5OiBgbW9yZV9pbmZvLiR7bmV3VmFsLmVudGl0eV9pZH1gLFxuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICBfZ290b1NldHRpbmdzKCkge1xuICAgIHRoaXMuZmlyZShcIm1vcmUtaW5mby1wYWdlXCIsIHsgcGFnZTogXCJzZXR0aW5nc1wiIH0pO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tY29udHJvbHNcIiwgTW9yZUluZm9Db250cm9scyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9hcHAtbGF5b3V0L2FwcC10b29sYmFyL2FwcC10b29sYmFyXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgeyBFdmVudHNNaXhpbiB9IGZyb20gXCIuLi8uLi9taXhpbnMvZXZlbnRzLW1peGluXCI7XG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcbmltcG9ydCB7IGNvbXB1dGVEb21haW4gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX2RvbWFpblwiO1xuaW1wb3J0IHsgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSB9IGZyb20gXCIuLi8uLi9kYXRhL2VudGl0eV9yZWdpc3RyeVwiO1xuaW1wb3J0IHsgc2hvd1NhdmVTdWNjZXNzVG9hc3QgfSBmcm9tIFwiLi4vLi4vdXRpbC90b2FzdC1zYXZlZC1zdWNjZXNzXCI7XG5cbmltcG9ydCBcIi4uLy4uL2NvbXBvbmVudHMvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldlwiO1xuLypcbiAqIEBhcHBsaWVzTWl4aW4gRXZlbnRzTWl4aW5cbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBNb3JlSW5mb1NldHRpbmdzIGV4dGVuZHMgTG9jYWxpemVNaXhpbihFdmVudHNNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgYXBwLXRvb2xiYXIge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1tb3JlLWluZm8taGVhZGVyLWNvbG9yKTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tb3JlLWluZm8taGVhZGVyLWJhY2tncm91bmQpO1xuXG4gICAgICAgICAgLyogdG8gZml0IHNhdmUgYnV0dG9uICovXG4gICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC10b29sYmFyIFttYWluLXRpdGxlXSB7XG4gICAgICAgICAgQGFwcGx5IC0taGEtbW9yZS1pbmZvLWFwcC10b29sYmFyLXRpdGxlO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLXRvb2xiYXIgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgLS1tZGMtdGhlbWUtcHJpbWFyeTogdmFyKC0tbW9yZS1pbmZvLWhlYWRlci1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuZm9ybSB7XG4gICAgICAgICAgcGFkZGluZzogMCAyNHB4IDI0cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxhcHAtdG9vbGJhcj5cbiAgICAgICAgPGhhLXBhcGVyLWljb24tYnV0dG9uLWFycm93LXByZXZcbiAgICAgICAgICBvbi1jbGljaz1cIl9iYWNrVGFwcGVkXCJcbiAgICAgICAgPjwvaGEtcGFwZXItaWNvbi1idXR0b24tYXJyb3ctcHJldj5cbiAgICAgICAgPGRpdiBtYWluLXRpdGxlPVwiXCI+W1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9zYXZlXCIgZGlzYWJsZWQ9XCJbW19jb21wdXRlSW52YWxpZChfZW50aXR5SWQpXV1cIlxuICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19zZXR0aW5ncy5zYXZlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2FwcC10b29sYmFyPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiZm9ybVwiPlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICB2YWx1ZT1cInt7X25hbWV9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2xvY2FsaXplKCd1aS5kaWFsb2dzLm1vcmVfaW5mb19zZXR0aW5ncy5uYW1lJyldXVwiXG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICB2YWx1ZT1cInt7X2VudGl0eUlkfX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1tsb2NhbGl6ZSgndWkuZGlhbG9ncy5tb3JlX2luZm9fc2V0dGluZ3MuZW50aXR5X2lkJyldXVwiXG4gICAgICAgICAgZXJyb3ItbWVzc2FnZT1cIkRvbWFpbiBuZWVkcyB0byBzdGF5IHRoZSBzYW1lXCJcbiAgICAgICAgICBpbnZhbGlkPVwiW1tfY29tcHV0ZUludmFsaWQoX2VudGl0eUlkKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuXG4gICAgICByZWdpc3RyeUluZm86IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJfcmVnaXN0cnlJbmZvQ2hhbmdlZFwiLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuXG4gICAgICBfbmFtZTogU3RyaW5nLFxuICAgICAgX2VudGl0eUlkOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlU3RhdGVOYW1lKHN0YXRlT2JqKSB7XG4gICAgaWYgKCFzdGF0ZU9iaikgcmV0dXJuIFwiXCI7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopO1xuICB9XG5cbiAgX2NvbXB1dGVJbnZhbGlkKGVudGl0eUlkKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVEb21haW4odGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQpICE9PSBjb21wdXRlRG9tYWluKGVudGl0eUlkKTtcbiAgfVxuXG4gIF9yZWdpc3RyeUluZm9DaGFuZ2VkKG5ld1ZhbCkge1xuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9uYW1lOiBuZXdWYWwubmFtZSxcbiAgICAgICAgX2VudGl0eUlkOiBuZXdWYWwuZW50aXR5X2lkLFxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2V0UHJvcGVydGllcyh7XG4gICAgICAgIF9uYW1lOiBcIlwiLFxuICAgICAgICBfZW50aXR5SWQ6IFwiXCIsXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfYmFja1RhcHBlZCgpIHtcbiAgICB0aGlzLmZpcmUoXCJtb3JlLWluZm8tcGFnZVwiLCB7IHBhZ2U6IG51bGwgfSk7XG4gIH1cblxuICBhc3luYyBfc2F2ZSgpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW5mbyA9IGF3YWl0IHVwZGF0ZUVudGl0eVJlZ2lzdHJ5RW50cnkoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgICAgIHtcbiAgICAgICAgICBuYW1lOiB0aGlzLl9uYW1lLFxuICAgICAgICAgIG5ld19lbnRpdHlfaWQ6IHRoaXMuX2VudGl0eUlkLFxuICAgICAgICB9XG4gICAgICApO1xuXG4gICAgICBzaG93U2F2ZVN1Y2Nlc3NUb2FzdCh0aGlzLCB0aGlzLmhhc3MpO1xuXG4gICAgICB0aGlzLnJlZ2lzdHJ5SW5mbyA9IGluZm87XG5cbiAgICAgIC8vIEtlZXAgdGhlIG1vcmUgaW5mbyBkaWFsb2cgb3BlbiBhdCB0aGUgbmV3IGVudGl0eS5cbiAgICAgIGlmICh0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCAhPT0gdGhpcy5fZW50aXR5SWQpIHtcbiAgICAgICAgdGhpcy5maXJlKFwiaGFzcy1tb3JlLWluZm9cIiwgeyBlbnRpdHlJZDogdGhpcy5fZW50aXR5SWQgfSk7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgc2F2ZSBmYWlsZWQ6ICR7ZXJyLm1lc3NhZ2V9YCk7XG4gICAgfVxuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJtb3JlLWluZm8tc2V0dGluZ3NcIiwgTW9yZUluZm9TZXR0aW5ncyk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG5pbXBvcnQgeyBQYXBlckRpYWxvZ0JlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3JcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgRXZlbnRzTWl4aW4gfSBmcm9tIFwiLi9ldmVudHMtbWl4aW5cIjtcbi8qKlxuICogQHBvbHltZXJNaXhpblxuICogQGFwcGxpZXNNaXhpbiBFdmVudHNNaXhpblxuICogQGFwcGxpZXNNaXhpbiBQYXBlckRpYWxvZ0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgbWl4aW5CZWhhdmlvcnMoXG4gICAgICBbRXZlbnRzTWl4aW4sIFBhcGVyRGlhbG9nQmVoYXZpb3JdLFxuICAgICAgc3VwZXJDbGFzc1xuICAgICkge1xuICAgICAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHdpdGhCYWNrZHJvcDoge1xuICAgICAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWNsaW1hdGUtc3RhdGVcIjtcblxuY2xhc3MgU3RhdGVDYXJkQ2xpbWF0ZSBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtY2xpbWF0ZS1zdGF0ZSB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtY2xpbWF0ZS1zdGF0ZVxuICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgPjwvaGEtY2xpbWF0ZS1zdGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1jbGltYXRlXCIsIFN0YXRlQ2FyZENsaW1hdGUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmRDb25maWd1cmF0b3IgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgbXdjLWJ1dHRvbiB7XG4gICAgICAgICAgdG9wOiAzcHg7XG4gICAgICAgICAgaGVpZ2h0OiAzN3B4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogLTAuNTdlbTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxtd2MtYnV0dG9uIGhpZGRlbiQ9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgICAgID5bW19sb2NhbGl6ZVN0YXRlKHN0YXRlT2JqLnN0YXRlKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIHByZSBsb2FkIHRoZSBpbWFnZSBzbyB0aGUgZGlhbG9nIGlzIHJlbmRlcmVkIHRoZSBwcm9wZXIgc2l6ZSAtLT5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmRlc2NyaXB0aW9uX2ltYWdlXV1cIj5cbiAgICAgICAgPGltZyBoaWRkZW49XCJcIiBzcmM9XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMuZGVzY3JpcHRpb25faW1hZ2VdXVwiIC8+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIF9sb2NhbGl6ZVN0YXRlKHN0YXRlKSB7XG4gICAgcmV0dXJuIHRoaXMubG9jYWxpemUoYHN0YXRlLmNvbmZpZ3VyYXRvci4ke3N0YXRlfWApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWNvbmZpZ3VyYXRvclwiLCBTdGF0ZUNhcmRDb25maWd1cmF0b3IpO1xuIiwiaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLWNsaW1hdGVcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1jb25maWd1cmF0b3JcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1jb3ZlclwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLWRpc3BsYXlcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1pbnB1dF9udW1iZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1pbnB1dF9zZWxlY3RcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC1pbnB1dF90ZXh0XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtbG9ja1wiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLW1lZGlhX3BsYXllclwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1jYXJkLXNjZW5lXCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtc2NyaXB0XCI7XG5pbXBvcnQgXCIuL3N0YXRlLWNhcmQtdGltZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC10b2dnbGVcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC12YWN1dW1cIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC13YXRlcl9oZWF0ZXJcIjtcbmltcG9ydCBcIi4vc3RhdGUtY2FyZC13ZWJsaW5rXCI7XG5cbmltcG9ydCB7IHN0YXRlQ2FyZFR5cGUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdGF0ZV9jYXJkX3R5cGVcIjtcbmltcG9ydCBkeW5hbWljQ29udGVudFVwZGF0ZXIgZnJvbSBcIi4uL2NvbW1vbi9kb20vZHluYW1pY19jb250ZW50X3VwZGF0ZXJcIjtcblxuY2xhc3MgU3RhdGVDYXJkQ29udGVudCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImlucHV0Q2hhbmdlZChoYXNzLCBpbkRpYWxvZywgc3RhdGVPYmopXCJdO1xuICB9XG5cbiAgaW5wdXRDaGFuZ2VkKGhhc3MsIGluRGlhbG9nLCBzdGF0ZU9iaikge1xuICAgIGxldCBzdGF0ZUNhcmQ7XG4gICAgaWYgKCFzdGF0ZU9iaiB8fCAhaGFzcykgcmV0dXJuO1xuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzICYmIFwiY3VzdG9tX3VpX3N0YXRlX2NhcmRcIiBpbiBzdGF0ZU9iai5hdHRyaWJ1dGVzKSB7XG4gICAgICBzdGF0ZUNhcmQgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1c3RvbV91aV9zdGF0ZV9jYXJkO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZUNhcmQgPSBcInN0YXRlLWNhcmQtXCIgKyBzdGF0ZUNhcmRUeXBlKGhhc3MsIHN0YXRlT2JqKTtcbiAgICB9XG4gICAgZHluYW1pY0NvbnRlbnRVcGRhdGVyKHRoaXMsIHN0YXRlQ2FyZC50b1VwcGVyQ2FzZSgpLCB7XG4gICAgICBoYXNzOiBoYXNzLFxuICAgICAgc3RhdGVPYmo6IHN0YXRlT2JqLFxuICAgICAgaW5EaWFsb2c6IGluRGlhbG9nLFxuICAgIH0pO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWNvbnRlbnRcIiwgU3RhdGVDYXJkQ29udGVudCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jb3Zlci1jb250cm9sc1wiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzXCI7XG5pbXBvcnQgQ292ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvY292ZXItbW9kZWxcIjtcblxuY2xhc3MgU3RhdGVDYXJkQ292ZXIgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBsYXlvdXRcIj5cbiAgICAgICAgICA8aGEtY292ZXItY29udHJvbHNcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbW2VudGl0eU9iai5pc1RpbHRPbmx5XV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgPjwvaGEtY292ZXItY29udHJvbHM+XG4gICAgICAgICAgPGhhLWNvdmVyLXRpbHQtY29udHJvbHNcbiAgICAgICAgICAgIGhpZGRlbiQ9XCJbWyFlbnRpdHlPYmouaXNUaWx0T25seV1dXCJcbiAgICAgICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgID48L2hhLWNvdmVyLXRpbHQtY29udHJvbHM+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgdmFyIGVudGl0eSA9IG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gICAgcmV0dXJuIGVudGl0eTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1jb3ZlclwiLCBTdGF0ZUNhcmRDb3Zlcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbmltcG9ydCB7IGF0dHJpYnV0ZUNsYXNzTmFtZXMgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9hdHRyaWJ1dGVfY2xhc3NfbmFtZXNcIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZURpc3BsYXkgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX2Rpc3BsYXlcIjtcbmltcG9ydCB7IGNvbXB1dGVSVEwgfSBmcm9tIFwiLi4vY29tbW9uL3V0aWwvY29tcHV0ZV9ydGxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmREaXNwbGF5IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWp1c3RpZmllZDtcbiAgICAgICAgICBAYXBwbHkgLS1sYXlvdXQtYmFzZWxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICA6aG9zdChbcnRsXSkge1xuICAgICAgICAgIGRpcmVjdGlvbjogcnRsO1xuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGUtaW5mbyB7XG4gICAgICAgICAgZmxleDogMSAxIGF1dG87XG4gICAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgICB9XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDQwJTtcbiAgICAgICAgICBmbGV4OiAwIDAgYXV0bztcbiAgICAgICAgICBvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtydGxdKSAuc3RhdGUge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB9XG5cbiAgICAgICAgLnN0YXRlLmhhcy11bml0X29mX21lYXN1cmVtZW50IHtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICA8ZGl2IGNsYXNzJD1cIltbY29tcHV0ZUNsYXNzTmFtZXMoc3RhdGVPYmopXV1cIj5cbiAgICAgICAgW1tjb21wdXRlU3RhdGVEaXNwbGF5KGxvY2FsaXplLCBzdGF0ZU9iaiwgbGFuZ3VhZ2UpXV1cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVN0YXRlRGlzcGxheShsb2NhbGl6ZSwgc3RhdGVPYmosIGxhbmd1YWdlKSB7XG4gICAgcmV0dXJuIGNvbXB1dGVTdGF0ZURpc3BsYXkobG9jYWxpemUsIHN0YXRlT2JqLCBsYW5ndWFnZSk7XG4gIH1cblxuICBjb21wdXRlQ2xhc3NOYW1lcyhzdGF0ZU9iaikge1xuICAgIGNvbnN0IGNsYXNzZXMgPSBbXG4gICAgICBcInN0YXRlXCIsXG4gICAgICBhdHRyaWJ1dGVDbGFzc05hbWVzKHN0YXRlT2JqLCBbXCJ1bml0X29mX21lYXN1cmVtZW50XCJdKSxcbiAgICBdO1xuICAgIHJldHVybiBjbGFzc2VzLmpvaW4oXCIgXCIpO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWRpc3BsYXlcIiwgU3RhdGVDYXJkRGlzcGxheSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgSXJvblJlc2l6YWJsZUJlaGF2aW9yIH0gZnJvbSBcIkBwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXNsaWRlclwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRJbnB1dE51bWJlciBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICBbSXJvblJlc2l6YWJsZUJlaGF2aW9yXSxcbiAgUG9seW1lckVsZW1lbnRcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLXNsaWRlciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgICAgLnN0YXRlIHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuXG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLnNsaWRlcnN0YXRlIHtcbiAgICAgICAgICBtaW4td2lkdGg6IDQ1cHg7XG4gICAgICAgIH1cbiAgICAgICAgaGEtc2xpZGVyW2hpZGRlbl0ge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgICAgfVxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIiBpZD1cImlucHV0X251bWJlcl9jYXJkXCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGhhLXNsaWRlclxuICAgICAgICAgIG1pbj1cIltbbWluXV1cIlxuICAgICAgICAgIG1heD1cIltbbWF4XV1cIlxuICAgICAgICAgIHZhbHVlPVwie3t2YWx1ZX19XCJcbiAgICAgICAgICBzdGVwPVwiW1tzdGVwXV1cIlxuICAgICAgICAgIGhpZGRlbj1cIltbaGlkZGVuc2xpZGVyXV1cIlxuICAgICAgICAgIHBpbj1cIlwiXG4gICAgICAgICAgb24tY2hhbmdlPVwic2VsZWN0ZWRWYWx1ZUNoYW5nZWRcIlxuICAgICAgICAgIG9uLWNsaWNrPVwic3RvcFByb3BhZ2F0aW9uXCJcbiAgICAgICAgICBpZD1cInNsaWRlclwiXG4gICAgICAgICAgaWdub3JlLWJhci10b3VjaD1cIlwiXG4gICAgICAgID5cbiAgICAgICAgPC9oYS1zbGlkZXI+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIG5vLWxhYmVsLWZsb2F0PVwiXCJcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiXCJcbiAgICAgICAgICBwYXR0ZXJuPVwiWzAtOV0rKFtcXFxcLl1bMC05XSspP1wiXG4gICAgICAgICAgc3RlcD1cIltbc3RlcF1dXCJcbiAgICAgICAgICBtaW49XCJbW21pbl1dXCJcbiAgICAgICAgICBtYXg9XCJbW21heF1dXCJcbiAgICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgb24tY2hhbmdlPVwic2VsZWN0ZWRWYWx1ZUNoYW5nZWRcIlxuICAgICAgICAgIG9uLWNsaWNrPVwic3RvcFByb3BhZ2F0aW9uXCJcbiAgICAgICAgICBoaWRkZW49XCJbW2hpZGRlbmJveF1dXCJcbiAgICAgICAgPlxuICAgICAgICA8L3BhcGVyLWlucHV0PlxuICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdGVcIiBoaWRkZW49XCJbW2hpZGRlbmJveF1dXCI+XG4gICAgICAgICAgW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnRdXVxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdlxuICAgICAgICAgIGlkPVwic2xpZGVyc3RhdGVcIlxuICAgICAgICAgIGNsYXNzPVwic3RhdGUgc2xpZGVyc3RhdGVcIlxuICAgICAgICAgIGhpZGRlbj1cIltbaGlkZGVuc2xpZGVyXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgW1t2YWx1ZV1dIFtbc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50XV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIGlmICh0eXBlb2YgUmVzaXplT2JzZXJ2ZXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgY29uc3Qgcm8gPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLmhpZGRlblN0YXRlKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICByby5vYnNlcnZlKHRoaXMuJC5pbnB1dF9udW1iZXJfY2FyZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImlyb24tcmVzaXplXCIsIHRoaXMuaGlkZGVuU3RhdGUpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgaGlkZGVuYm94OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGhpZGRlbnNsaWRlcjoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iamVjdENoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgIH0sXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTAwLFxuICAgICAgfSxcbiAgICAgIG1heGxlbmd0aDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAzLFxuICAgICAgfSxcbiAgICAgIHN0ZXA6IE51bWJlcixcbiAgICAgIHZhbHVlOiBOdW1iZXIsXG4gICAgICBtb2RlOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIGhpZGRlblN0YXRlKCkge1xuICAgIGlmICh0aGlzLm1vZGUgIT09IFwic2xpZGVyXCIpIHJldHVybjtcbiAgICBjb25zdCBzbGlkZXJ3aWR0aCA9IHRoaXMuJC5zbGlkZXIub2Zmc2V0V2lkdGg7XG4gICAgaWYgKHNsaWRlcndpZHRoIDwgMTAwKSB7XG4gICAgICB0aGlzLiQuc2xpZGVyc3RhdGUuaGlkZGVuID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHNsaWRlcndpZHRoID49IDE0NSkge1xuICAgICAgdGhpcy4kLnNsaWRlcnN0YXRlLmhpZGRlbiA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHN0YXRlT2JqZWN0Q2hhbmdlZChuZXdWYWwpIHtcbiAgICBjb25zdCBwcmV2TW9kZSA9IHRoaXMubW9kZTtcbiAgICB0aGlzLnNldFByb3BlcnRpZXMoe1xuICAgICAgbWluOiBOdW1iZXIobmV3VmFsLmF0dHJpYnV0ZXMubWluKSxcbiAgICAgIG1heDogTnVtYmVyKG5ld1ZhbC5hdHRyaWJ1dGVzLm1heCksXG4gICAgICBzdGVwOiBOdW1iZXIobmV3VmFsLmF0dHJpYnV0ZXMuc3RlcCksXG4gICAgICB2YWx1ZTogTnVtYmVyKG5ld1ZhbC5zdGF0ZSksXG4gICAgICBtb2RlOiBTdHJpbmcobmV3VmFsLmF0dHJpYnV0ZXMubW9kZSksXG4gICAgICBtYXhsZW5ndGg6IFN0cmluZyhuZXdWYWwuYXR0cmlidXRlcy5tYXgpLmxlbmd0aCxcbiAgICAgIGhpZGRlbmJveDogbmV3VmFsLmF0dHJpYnV0ZXMubW9kZSAhPT0gXCJib3hcIixcbiAgICAgIGhpZGRlbnNsaWRlcjogbmV3VmFsLmF0dHJpYnV0ZXMubW9kZSAhPT0gXCJzbGlkZXJcIixcbiAgICB9KTtcbiAgICBpZiAodGhpcy5tb2RlID09PSBcInNsaWRlclwiICYmIHByZXZNb2RlICE9PSBcInNsaWRlclwiKSB7XG4gICAgICB0aGlzLmhpZGRlblN0YXRlKCk7XG4gICAgfVxuICB9XG5cbiAgc2VsZWN0ZWRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IE51bWJlcih0aGlzLnN0YXRlT2JqLnN0YXRlKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJpbnB1dF9udW1iZXJcIiwgXCJzZXRfdmFsdWVcIiwge1xuICAgICAgdmFsdWU6IHRoaXMudmFsdWUsXG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuICB9XG5cbiAgc3RvcFByb3BhZ2F0aW9uKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1pbnB1dF9udW1iZXJcIiwgU3RhdGVDYXJkSW5wdXROdW1iZXIpO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBwcm9wZXJ0eSxcbiAgUHJvcGVydHlWYWx1ZXMsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW1cIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IFBhcGVySXRlbUVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1saXN0Ym94L3BhcGVyLWxpc3Rib3hcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgSW5wdXRTZWxlY3RFbnRpdHkgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IHNldElucHV0U2VsZWN0T3B0aW9uIH0gZnJvbSBcIi4uL2RhdGEvaW5wdXQtc2VsZWN0XCI7XG5pbXBvcnQgeyBQb2x5bWVySXJvblNlbGVjdEV2ZW50IH0gZnJvbSBcIi4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IHN0b3BQcm9wYWdhdGlvbiB9IGZyb20gXCIuLi9jb21tb24vZG9tL3N0b3BfcHJvcGFnYXRpb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJzdGF0ZS1jYXJkLWlucHV0X3NlbGVjdFwiKVxuY2xhc3MgU3RhdGVDYXJkSW5wdXRTZWxlY3QgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmohOiBJbnB1dFNlbGVjdEVudGl0eTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtYmFkZ2UgLnN0YXRlT2JqPSR7dGhpcy5zdGF0ZU9ian0+PC9zdGF0ZS1iYWRnZT5cbiAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0XG4gICAgICAgIC5sYWJlbD0ke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9XG4gICAgICAgIC52YWx1ZT1cIiR7dGhpcy5zdGF0ZU9iai5zdGF0ZX1cIlxuICAgICAgICBAaXJvbi1zZWxlY3Q9JHt0aGlzLl9zZWxlY3RlZE9wdGlvbkNoYW5nZWR9XG4gICAgICAgIEBjbGljaz0ke3N0b3BQcm9wYWdhdGlvbn1cbiAgICAgID5cbiAgICAgICAgPHBhcGVyLWxpc3Rib3ggc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgICAke3RoaXMuc3RhdGVPYmouYXR0cmlidXRlcy5vcHRpb25zLm1hcChcbiAgICAgICAgICAgIChvcHRpb24pID0+IGh0bWxgXG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtPiR7b3B0aW9ufTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgICA8L3BhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQ+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpIHtcbiAgICBzdXBlci51cGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgLy8gVXBkYXRlIHNlbGVjdGVkIGFmdGVyIHJlbmRlcmluZyB0aGUgaXRlbXMgb3IgZWxzZSBpdCB3b24ndCB3b3JrIGluIEZpcmVmb3hcbiAgICB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXG4gICAgICBcInBhcGVyLWxpc3Rib3hcIlxuICAgICkhLnNlbGVjdGVkID0gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzLm9wdGlvbnMuaW5kZXhPZih0aGlzLnN0YXRlT2JqLnN0YXRlKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NlbGVjdGVkT3B0aW9uQ2hhbmdlZChcbiAgICBldjogUG9seW1lcklyb25TZWxlY3RFdmVudDxQYXBlckl0ZW1FbGVtZW50PlxuICApIHtcbiAgICBjb25zdCBvcHRpb24gPSBldi5kZXRhaWwuaXRlbS5pbm5lclRleHQudHJpbSgpO1xuICAgIGlmIChvcHRpb24gPT09IHRoaXMuc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYXdhaXQgc2V0SW5wdXRTZWxlY3RPcHRpb24odGhpcy5oYXNzLCB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZCwgb3B0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIHN0YXRlLWJhZGdlIHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDUzcHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1pbi13aWR0aDogMjAwcHg7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwic3RhdGUtY2FyZC1pbnB1dF9zZWxlY3RcIjogU3RhdGVDYXJkSW5wdXRTZWxlY3Q7XG4gIH1cbn1cbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5jbGFzcyBTdGF0ZUNhcmRJbnB1dFRleHQgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cbiAgICAgIDxzdHlsZT5cbiAgICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQ9XCJcIlxuICAgICAgICAgIG1pbmxlbmd0aD1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5taW5dXVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1heF1dXCJcbiAgICAgICAgICB2YWx1ZT1cInt7dmFsdWV9fVwiXG4gICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbc3RhdGVPYmouYXR0cmlidXRlcy5wYXR0ZXJuXV1cIlxuICAgICAgICAgIHBhdHRlcm49XCJbW3N0YXRlT2JqLmF0dHJpYnV0ZXMucGF0dGVybl1dXCJcbiAgICAgICAgICB0eXBlPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vZGVdXVwiXG4gICAgICAgICAgb24tY2hhbmdlPVwic2VsZWN0ZWRWYWx1ZUNoYW5nZWRcIlxuICAgICAgICAgIG9uLWNsaWNrPVwic3RvcFByb3BhZ2F0aW9uXCJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIihlbXB0eSB2YWx1ZSlcIlxuICAgICAgICA+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcblxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcblxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iamVjdENoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhdHRlcm46IFN0cmluZyxcbiAgICAgIHZhbHVlOiBTdHJpbmcsXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRlT2JqZWN0Q2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnZhbHVlID0gbmV3VmFsLnN0YXRlO1xuICB9XG5cbiAgc2VsZWN0ZWRWYWx1ZUNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMudmFsdWUgPT09IHRoaXMuc3RhdGVPYmouc3RhdGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwiaW5wdXRfdGV4dFwiLCBcInNldF92YWx1ZVwiLCB7XG4gICAgICB2YWx1ZTogdGhpcy52YWx1ZSxcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cblxuICBzdG9wUHJvcGFnYXRpb24oZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLWlucHV0X3RleHRcIiwgU3RhdGVDYXJkSW5wdXRUZXh0KTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkTG9jayBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICBtd2MtYnV0dG9uIHtcbiAgICAgICAgICB0b3A6IDNweDtcbiAgICAgICAgICBoZWlnaHQ6IDM3cHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMC41N2VtO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgZGF0YS1zZXJ2aWNlPVwidW5sb2NrXCJcbiAgICAgICAgICBoaWRkZW4kPVwiW1shaXNMb2NrZWRdXVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay51bmxvY2snKV1dPC9td2MtYnV0dG9uXG4gICAgICAgID5cbiAgICAgICAgPG13Yy1idXR0b25cbiAgICAgICAgICBvbi1jbGljaz1cIl9jYWxsU2VydmljZVwiXG4gICAgICAgICAgZGF0YS1zZXJ2aWNlPVwibG9ja1wiXG4gICAgICAgICAgaGlkZGVuJD1cIltbaXNMb2NrZWRdXVwiXG4gICAgICAgICAgPltbbG9jYWxpemUoJ3VpLmNhcmQubG9jay5sb2NrJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICA+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdGF0ZUluZm9UZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1pbmZvXG4gICAgICAgIGhhc3M9XCJbW2hhc3NdXVwiXG4gICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgIGluLWRpYWxvZz1cIltbaW5EaWFsb2ddXVwiXG4gICAgICA+PC9zdGF0ZS1pbmZvPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX3N0YXRlT2JqQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBpc0xvY2tlZDogQm9vbGVhbixcbiAgICB9O1xuICB9XG5cbiAgX3N0YXRlT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICBpZiAobmV3VmFsKSB7XG4gICAgICB0aGlzLmlzTG9ja2VkID0gbmV3VmFsLnN0YXRlID09PSBcImxvY2tlZFwiO1xuICAgIH1cbiAgfVxuXG4gIF9jYWxsU2VydmljZShldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGNvbnN0IHNlcnZpY2UgPSBldi50YXJnZXQuZGF0YXNldC5zZXJ2aWNlO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH07XG4gICAgdGhpcy5oYXNzLmNhbGxTZXJ2aWNlKFwibG9ja1wiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC1sb2NrXCIsIFN0YXRlQ2FyZExvY2spO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCBIYXNzTWVkaWFQbGF5ZXJFbnRpdHkgZnJvbSBcIi4uL3V0aWwvaGFzcy1tZWRpYS1wbGF5ZXItbW9kZWxcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBTdGF0ZUNhcmRNZWRpYVBsYXllciBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi10ZXh0IHtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cblxuICAgICAgICAubWFpbi10ZXh0W3Rha2UtaGVpZ2h0XSB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2Vjb25kYXJ5LXRleHQge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiaG9yaXpvbnRhbCBqdXN0aWZpZWQgbGF5b3V0XCI+XG4gICAgICAgICR7dGhpcy5zdGF0ZUluZm9UZW1wbGF0ZX1cbiAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRlXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm1haW4tdGV4dFwiIHRha2UtaGVpZ2h0JD1cIltbIXBsYXllck9iai5zZWNvbmRhcnlUaXRsZV1dXCI+XG4gICAgICAgICAgICBbW2NvbXB1dGVQcmltYXJ5VGV4dChsb2NhbGl6ZSwgcGxheWVyT2JqKV1dXG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeS10ZXh0XCI+W1twbGF5ZXJPYmouc2Vjb25kYXJ5VGl0bGVdXTwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICBwbGF5ZXJPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlUGxheWVyT2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZVBsYXllck9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgSGFzc01lZGlhUGxheWVyRW50aXR5KGhhc3MsIHN0YXRlT2JqKTtcbiAgfVxuXG4gIGNvbXB1dGVQcmltYXJ5VGV4dChsb2NhbGl6ZSwgcGxheWVyT2JqKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBsYXllck9iai5wcmltYXJ5VGl0bGUgfHxcbiAgICAgIGxvY2FsaXplKGBzdGF0ZS5tZWRpYV9wbGF5ZXIuJHtwbGF5ZXJPYmouc3RhdGVPYmouc3RhdGV9YCkgfHxcbiAgICAgIGxvY2FsaXplKGBzdGF0ZS5kZWZhdWx0LiR7cGxheWVyT2JqLnN0YXRlT2JqLnN0YXRlfWApIHx8XG4gICAgICBwbGF5ZXJPYmouc3RhdGVPYmouc3RhdGVcbiAgICApO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLW1lZGlhX3BsYXllclwiLCBTdGF0ZUNhcmRNZWRpYVBsYXllcik7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcbmltcG9ydCB7IGFjdGl2YXRlU2NlbmUgfSBmcm9tIFwiLi4vZGF0YS9zY2VuZVwiO1xuXG4vKlxuICogQGFwcGxpZXNNaXhpbiBMb2NhbGl6ZU1peGluXG4gKi9cbmNsYXNzIFN0YXRlQ2FyZFNjZW5lIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8bXdjLWJ1dHRvbiBvbi1jbGljaz1cIl9hY3RpdmF0ZVNjZW5lXCJcbiAgICAgICAgICA+W1tsb2NhbGl6ZSgndWkuY2FyZC5zY2VuZS5hY3RpdmF0ZScpXV08L213Yy1idXR0b25cbiAgICAgICAgPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3RhdGVJbmZvVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3RhdGUtaW5mb1xuICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICBpbi1kaWFsb2c9XCJbW2luRGlhbG9nXV1cIlxuICAgICAgPjwvc3RhdGUtaW5mbz5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgaW5EaWFsb2c6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgX2FjdGl2YXRlU2NlbmUoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBhY3RpdmF0ZVNjZW5lKHRoaXMuaGFzcywgdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJzdGF0ZS1jYXJkLXNjZW5lXCIsIFN0YXRlQ2FyZFNjZW5lKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvaGEtZW50aXR5LXRvZ2dsZVwiO1xuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5cbi8qXG4gKiBAYXBwbGllc01peGluIExvY2FsaXplTWl4aW5cbiAqL1xuY2xhc3MgU3RhdGVDYXJkU2NyaXB0IGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIG13Yy1idXR0b24ge1xuICAgICAgICAgIHRvcDogM3B4O1xuICAgICAgICAgIGhlaWdodDogMzdweDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjU3ZW07XG4gICAgICAgIH1cblxuICAgICAgICBoYS1lbnRpdHktdG9nZ2xlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tzdGF0ZU9iai5hdHRyaWJ1dGVzLmNhbl9jYW5jZWxdXVwiPlxuICAgICAgICAgIDxoYS1lbnRpdHktdG9nZ2xlXG4gICAgICAgICAgICBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIlxuICAgICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICA+PC9oYS1lbnRpdHktdG9nZ2xlPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbIXN0YXRlT2JqLmF0dHJpYnV0ZXMuY2FuX2NhbmNlbF1dXCI+XG4gICAgICAgICAgPG13Yy1idXR0b24gb24tY2xpY2s9XCJmaXJlU2NyaXB0XCJcbiAgICAgICAgICAgID5bW2xvY2FsaXplKCd1aS5jYXJkLnNjcmlwdC5leGVjdXRlJyldXTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIGZpcmVTY3JpcHQoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJzY3JpcHRcIiwgXCJ0dXJuX29uXCIsIHtcbiAgICAgIGVudGl0eV9pZDogdGhpcy5zdGF0ZU9iai5lbnRpdHlfaWQsXG4gICAgfSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtc2NyaXB0XCIsIFN0YXRlQ2FyZFNjcmlwdCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtaW5mb1wiO1xuXG5pbXBvcnQgeyB0aW1lclRpbWVSZW1haW5pbmcgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS90aW1lcl90aW1lX3JlbWFpbmluZ1wiO1xuaW1wb3J0IHNlY29uZHNUb0R1cmF0aW9uIGZyb20gXCIuLi9jb21tb24vZGF0ZXRpbWUvc2Vjb25kc190b19kdXJhdGlvblwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRUaW1lciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICAuc3RhdGUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG5cbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiPltbX3NlY29uZHNUb0R1cmF0aW9uKHRpbWVSZW1haW5pbmcpXV08L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJzdGF0ZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG4gICAgICB0aW1lUmVtYWluaW5nOiBOdW1iZXIsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuc3RhcnRJbnRlcnZhbCh0aGlzLnN0YXRlT2JqKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5jbGVhckludGVydmFsKCk7XG4gIH1cblxuICBzdGF0ZU9iakNoYW5nZWQoc3RhdGVPYmopIHtcbiAgICB0aGlzLnN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopO1xuICB9XG5cbiAgY2xlYXJJbnRlcnZhbCgpIHtcbiAgICBpZiAodGhpcy5fdXBkYXRlUmVtYWluaW5nKSB7XG4gICAgICBjbGVhckludGVydmFsKHRoaXMuX3VwZGF0ZVJlbWFpbmluZyk7XG4gICAgICB0aGlzLl91cGRhdGVSZW1haW5pbmcgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0SW50ZXJ2YWwoc3RhdGVPYmopIHtcbiAgICB0aGlzLmNsZWFySW50ZXJ2YWwoKTtcbiAgICB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZyhzdGF0ZU9iaik7XG5cbiAgICBpZiAoc3RhdGVPYmouc3RhdGUgPT09IFwiYWN0aXZlXCIpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZVJlbWFpbmluZyA9IHNldEludGVydmFsKFxuICAgICAgICAoKSA9PiB0aGlzLmNhbGN1bGF0ZVJlbWFpbmluZyh0aGlzLnN0YXRlT2JqKSxcbiAgICAgICAgMTAwMFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBjYWxjdWxhdGVSZW1haW5pbmcoc3RhdGVPYmopIHtcbiAgICB0aGlzLnRpbWVSZW1haW5pbmcgPSB0aW1lclRpbWVSZW1haW5pbmcoc3RhdGVPYmopO1xuICB9XG5cbiAgX3NlY29uZHNUb0R1cmF0aW9uKHRpbWUpIHtcbiAgICByZXR1cm4gc2Vjb25kc1RvRHVyYXRpb24odGltZSk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtdGltZXJcIiwgU3RhdGVDYXJkVGltZXIpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LWNsYXNzZXNcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS10b2dnbGVcIjtcbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvZW50aXR5L3N0YXRlLWluZm9cIjtcblxuY2xhc3MgU3RhdGVDYXJkVG9nZ2xlIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXggaXJvbi1mbGV4LWFsaWdubWVudFwiPjwvc3R5bGU+XG4gICAgICA8c3R5bGU+XG4gICAgICAgIGhhLWVudGl0eS10b2dnbGUge1xuICAgICAgICAgIG1hcmdpbjogLTRweCAtMTZweCAtNHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogNHB4IDE2cHg7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJob3Jpem9udGFsIGp1c3RpZmllZCBsYXlvdXRcIj5cbiAgICAgICAgJHt0aGlzLnN0YXRlSW5mb1RlbXBsYXRlfVxuICAgICAgICA8aGEtZW50aXR5LXRvZ2dsZVxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgPjwvaGEtZW50aXR5LXRvZ2dsZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC10b2dnbGVcIiwgU3RhdGVDYXJkVG9nZ2xlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXZhY3V1bS1zdGF0ZVwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRWYWN1dW0gZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGUgaW5jbHVkZT1cImlyb24tZmxleCBpcm9uLWZsZXgtYWxpZ25tZW50XCI+PC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxoYS12YWN1dW0tc3RhdGVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgID48L2hhLXZhY3V1bS1zdGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC12YWN1dW1cIiwgU3RhdGVDYXJkVmFjdXVtKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC1jbGFzc2VzXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2VudGl0eS9zdGF0ZS1pbmZvXCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLXdhdGVyX2hlYXRlci1zdGF0ZVwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRXYXRlckhlYXRlciBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZSBpbmNsdWRlPVwiaXJvbi1mbGV4IGlyb24tZmxleC1hbGlnbm1lbnRcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtd2F0ZXJfaGVhdGVyLXN0YXRlIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTZweDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cblxuICAgICAgPGRpdiBjbGFzcz1cImhvcml6b250YWwganVzdGlmaWVkIGxheW91dFwiPlxuICAgICAgICAke3RoaXMuc3RhdGVJbmZvVGVtcGxhdGV9XG4gICAgICAgIDxoYS13YXRlcl9oZWF0ZXItc3RhdGVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHN0YXRlLW9iaj1cIltbc3RhdGVPYmpdXVwiXG4gICAgICAgID48L2hhLXdhdGVyX2hlYXRlci1zdGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlSW5mb1RlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0YXRlLWluZm9cbiAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgc3RhdGUtb2JqPVwiW1tzdGF0ZU9ial1dXCJcbiAgICAgICAgaW4tZGlhbG9nPVwiW1tpbkRpYWxvZ11dXCJcbiAgICAgID48L3N0YXRlLWluZm8+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczogT2JqZWN0LFxuICAgICAgc3RhdGVPYmo6IE9iamVjdCxcbiAgICAgIGluRGlhbG9nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwic3RhdGUtY2FyZC13YXRlcl9oZWF0ZXJcIiwgU3RhdGVDYXJkV2F0ZXJIZWF0ZXIpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi4vY29tcG9uZW50cy9lbnRpdHkvc3RhdGUtYmFkZ2VcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuXG5jbGFzcyBTdGF0ZUNhcmRXZWJsaW5rIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm5hbWUge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLW5vd3JhcDtcbiAgICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcblxuICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICAke3RoaXMuc3RhdGVCYWRnZVRlbXBsYXRlfVxuICAgICAgPGEgaHJlZiQ9XCJbW3N0YXRlT2JqLnN0YXRlXV1cIiB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzcz1cIm5hbWVcIiBpZD1cImxpbmtcIlxuICAgICAgICA+W1tfY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaildXTwvYVxuICAgICAgPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0YXRlQmFkZ2VUZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdGF0ZS1iYWRnZSBzdGF0ZS1vYmo9XCJbW3N0YXRlT2JqXV1cIj48L3N0YXRlLWJhZGdlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHN0YXRlT2JqOiBPYmplY3QsXG4gICAgICBpbkRpYWxvZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldikgPT4gdGhpcy5vblRhcChldikpO1xuICB9XG5cbiAgX2NvbXB1dGVTdGF0ZU5hbWUoc3RhdGVPYmopIHtcbiAgICByZXR1cm4gY29tcHV0ZVN0YXRlTmFtZShzdGF0ZU9iaik7XG4gIH1cblxuICBvblRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIGV2LnByZXZlbnREZWZhdWx0KCk7XG4gICAgd2luZG93Lm9wZW4odGhpcy5zdGF0ZU9iai5zdGF0ZSwgXCJfYmxhbmtcIik7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWNhcmQtd2VibGlua1wiLCBTdGF0ZUNhcmRXZWJsaW5rKTtcbiIsImNvbnN0IGhhc3NBdHRyaWJ1dGVVdGlsID0ge307XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLkRPTUFJTl9ERVZJQ0VfQ0xBU1MgPSB7XG4gIGJpbmFyeV9zZW5zb3I6IFtcbiAgICBcImJhdHRlcnlcIixcbiAgICBcImNvbGRcIixcbiAgICBcImNvbm5lY3Rpdml0eVwiLFxuICAgIFwiZG9vclwiLFxuICAgIFwiZ2FyYWdlX2Rvb3JcIixcbiAgICBcImdhc1wiLFxuICAgIFwiaGVhdFwiLFxuICAgIFwibGlnaHRcIixcbiAgICBcImxvY2tcIixcbiAgICBcIm1vaXN0dXJlXCIsXG4gICAgXCJtb3Rpb25cIixcbiAgICBcIm1vdmluZ1wiLFxuICAgIFwib2NjdXBhbmN5XCIsXG4gICAgXCJvcGVuaW5nXCIsXG4gICAgXCJwbHVnXCIsXG4gICAgXCJwb3dlclwiLFxuICAgIFwicHJlc2VuY2VcIixcbiAgICBcInByb2JsZW1cIixcbiAgICBcInNhZmV0eVwiLFxuICAgIFwic21va2VcIixcbiAgICBcInNvdW5kXCIsXG4gICAgXCJ2aWJyYXRpb25cIixcbiAgICBcIndpbmRvd1wiLFxuICBdLFxuICBjb3ZlcjogW1xuICAgIFwiYXduaW5nXCIsXG4gICAgXCJibGluZFwiLFxuICAgIFwiY3VydGFpblwiLFxuICAgIFwiZGFtcGVyXCIsXG4gICAgXCJkb29yXCIsXG4gICAgXCJnYXJhZ2VcIixcbiAgICBcInNoYWRlXCIsXG4gICAgXCJzaHV0dGVyXCIsXG4gICAgXCJ3aW5kb3dcIixcbiAgXSxcbiAgc2Vuc29yOiBbXG4gICAgXCJiYXR0ZXJ5XCIsXG4gICAgXCJodW1pZGl0eVwiLFxuICAgIFwiaWxsdW1pbmFuY2VcIixcbiAgICBcInRlbXBlcmF0dXJlXCIsXG4gICAgXCJwcmVzc3VyZVwiLFxuICAgIFwicG93ZXJcIixcbiAgICBcInNpZ25hbF9zdHJlbmd0aFwiLFxuICAgIFwidGltZXN0YW1wXCIsXG4gIF0sXG4gIHN3aXRjaDogW1wic3dpdGNoXCIsIFwib3V0bGV0XCJdLFxufTtcblxuaGFzc0F0dHJpYnV0ZVV0aWwuVU5LTk9XTl9UWVBFID0gXCJqc29uXCI7XG5oYXNzQXR0cmlidXRlVXRpbC5BRERfVFlQRSA9IFwia2V5LXZhbHVlXCI7XG5cbmhhc3NBdHRyaWJ1dGVVdGlsLlRZUEVfVE9fVEFHID0ge1xuICBzdHJpbmc6IFwiaGEtY3VzdG9taXplLXN0cmluZ1wiLFxuICBqc29uOiBcImhhLWN1c3RvbWl6ZS1zdHJpbmdcIixcbiAgaWNvbjogXCJoYS1jdXN0b21pemUtaWNvblwiLFxuICBib29sZWFuOiBcImhhLWN1c3RvbWl6ZS1ib29sZWFuXCIsXG4gIGFycmF5OiBcImhhLWN1c3RvbWl6ZS1hcnJheVwiLFxuICBcImtleS12YWx1ZVwiOiBcImhhLWN1c3RvbWl6ZS1rZXktdmFsdWVcIixcbn07XG5cbi8vIEF0dHJpYnV0ZXMgaGVyZSBzZXJ2ZSBkdWFsIHB1cnBvc2U6XG4vLyAxKSBBbnkga2V5IG9mIHRoaXMgb2JqZWN0IHdvbid0IGJlIHNob3duIGluIG1vcmUtaW5mbyB3aW5kb3cuXG4vLyAyKSBBbnkga2V5IHdoaWNoIGhhcyB2YWx1ZSBvdGhlciB0aGFuIHVuZGVmaW5lZCB3aWxsIGFwcGVhciBpbiBjdXN0b21pemF0aW9uXG4vLyAgICBjb25maWcgYWNjb3JkaW5nIHRvIGl0cyB2YWx1ZS5cbmhhc3NBdHRyaWJ1dGVVdGlsLkxPR0lDX1NUQVRFX0FUVFJJQlVURVMgPSBoYXNzQXR0cmlidXRlVXRpbC5MT0dJQ19TVEFURV9BVFRSSUJVVEVTIHx8IHtcbiAgZW50aXR5X3BpY3R1cmU6IHVuZGVmaW5lZCxcbiAgZnJpZW5kbHlfbmFtZTogeyB0eXBlOiBcInN0cmluZ1wiLCBkZXNjcmlwdGlvbjogXCJOYW1lXCIgfSxcbiAgaWNvbjogeyB0eXBlOiBcImljb25cIiB9LFxuICBlbXVsYXRlZF9odWU6IHtcbiAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICBkb21haW5zOiBbXCJlbXVsYXRlZF9odWVcIl0sXG4gIH0sXG4gIGVtdWxhdGVkX2h1ZV9uYW1lOiB7XG4gICAgdHlwZTogXCJzdHJpbmdcIixcbiAgICBkb21haW5zOiBbXCJlbXVsYXRlZF9odWVcIl0sXG4gIH0sXG4gIGhhYXNrYV9oaWRkZW46IHVuZGVmaW5lZCxcbiAgaGFhc2thX25hbWU6IHVuZGVmaW5lZCxcbiAgaG9tZWJyaWRnZV9oaWRkZW46IHsgdHlwZTogXCJib29sZWFuXCIgfSxcbiAgaG9tZWJyaWRnZV9uYW1lOiB7IHR5cGU6IFwic3RyaW5nXCIgfSxcbiAgc3VwcG9ydGVkX2ZlYXR1cmVzOiB1bmRlZmluZWQsXG4gIGF0dHJpYnV0aW9uOiB1bmRlZmluZWQsXG4gIGN1c3RvbV91aV9tb3JlX2luZm86IHsgdHlwZTogXCJzdHJpbmdcIiB9LFxuICBjdXN0b21fdWlfc3RhdGVfY2FyZDogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG4gIGRldmljZV9jbGFzczoge1xuICAgIHR5cGU6IFwiYXJyYXlcIixcbiAgICBvcHRpb25zOiBoYXNzQXR0cmlidXRlVXRpbC5ET01BSU5fREVWSUNFX0NMQVNTLFxuICAgIGRlc2NyaXB0aW9uOiBcIkRldmljZSBjbGFzc1wiLFxuICAgIGRvbWFpbnM6IFtcImJpbmFyeV9zZW5zb3JcIiwgXCJjb3ZlclwiLCBcInNlbnNvclwiLCBcInN3aXRjaFwiXSxcbiAgfSxcbiAgaGlkZGVuOiB7IHR5cGU6IFwiYm9vbGVhblwiLCBkZXNjcmlwdGlvbjogXCJIaWRlIGZyb20gVUlcIiB9LFxuICBhc3N1bWVkX3N0YXRlOiB7XG4gICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgZG9tYWluczogW1xuICAgICAgXCJzd2l0Y2hcIixcbiAgICAgIFwibGlnaHRcIixcbiAgICAgIFwiY292ZXJcIixcbiAgICAgIFwiY2xpbWF0ZVwiLFxuICAgICAgXCJmYW5cIixcbiAgICAgIFwiZ3JvdXBcIixcbiAgICAgIFwid2F0ZXJfaGVhdGVyXCIsXG4gICAgXSxcbiAgfSxcbiAgaW5pdGlhbF9zdGF0ZToge1xuICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgZG9tYWluczogW1wiYXV0b21hdGlvblwiXSxcbiAgfSxcbiAgdW5pdF9vZl9tZWFzdXJlbWVudDogeyB0eXBlOiBcInN0cmluZ1wiIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBoYXNzQXR0cmlidXRlVXRpbDtcbiIsImltcG9ydCB7IHNob3dUb2FzdCB9IGZyb20gXCIuL3RvYXN0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBzaG93U2F2ZVN1Y2Nlc3NUb2FzdCA9IChlbDogSFRNTEVsZW1lbnQsIGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIHNob3dUb2FzdChlbCwge1xuICAgIG1lc3NhZ2U6IGhhc3MhLmxvY2FsaXplKFwidWkuY29tbW9uLnN1Y2Nlc3NmdWxseV9zYXZlZFwiKSxcbiAgfSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQStFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFuSEE7QUFDQTtBQW1EQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBWkE7QUFxQkE7Ozs7QUE3RUE7QUFDQTtBQXFIQTs7Ozs7Ozs7Ozs7O0FDbklBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBaUJBO0FBQ0E7QUFBQTtBQXdCQTtBQUNBO0FBQUE7QUFRQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDMUZBO0FBQUE7QUFBQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDOUJBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUVBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDdEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1HQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBeEdBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQTZDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBbUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFQQTtBQWFBOzs7O0FBakdBO0FBQ0E7QUEyR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEhBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBR0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFoRkE7QUFDQTtBQStCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBOzs7O0FBakRBO0FBQ0E7QUFtRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUZBO0FBV0E7QUFFQTtBQUNBO0FBS0E7QUFDQTtBQUlBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7QUFDQTtBQUFBO0FBQUE7OztBQUFBOzs7O0FBQ0E7OztBQUFBOzs7O0FBR0E7OztBQUFBOzs7Ozs7Ozs7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF1QkE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUtBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDZNQUVBO0FBQ0E7QUFIQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFYQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFiQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFrQkE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7QUFxQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBUUE7QUFHQTtBQUhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBY0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTtBQVlBOzs7QUFyTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXNFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQWhJQTtBQUNBO0FBNENBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQWRBO0FBbUJBOzs7O0FBcEVBO0FBQ0E7QUFtSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUlBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7QUFLQTs7Ozs7Ozs7Ozs7OztBQWtLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTs7O0FBSUE7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7QUFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUFJQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQTs7O0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUdBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBNWtCQTtBQUNBO0FBMEZBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUE1REE7QUFpRUE7Ozs7QUFoS0E7QUFDQTtBQThrQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemxCQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBcUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFwQkE7QUF5QkE7Ozs7QUFuRUE7QUFDQTtBQXFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDNUVBO0FBTUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBakJBO0FBQ0E7QUFEQTtBQUFBO0FBMEJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBb0RBO0FBQ0E7QUFDQTs7OztBQTNEQTtBQUNBO0FBNERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBckJBO0FBMkJBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQWpEQTtBQUNBO0FBaUJBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFTQTs7OztBQS9CQTtBQUNBO0FBbURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBeEhBO0FBQ0E7QUEyQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBZEE7QUFtQkE7Ozs7QUFuRUE7QUFDQTtBQTJIQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3RJQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQWxFQTtBQUNBO0FBa0NBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7Ozs7QUEzQ0E7QUFDQTtBQW9FQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0VBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXNIQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBOzs7Ozs7OztBQUNBOzs7OztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTs7OztBQVNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFRQTs7Ozs7Ozs7QUFNQTs7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7O0FBREE7QUFJQTs7Ozs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXhMQTtBQUNBO0FBZ0ZBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBdEJBO0FBMkJBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFwSEE7QUFDQTtBQTBMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTtBQThKQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUEzQkE7QUFnQ0E7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBRkE7QUFRQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBL1BBO0FBQ0E7QUFnUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzFRQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUF4Q0E7QUFDQTtBQTBCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBbkNBO0FBQ0E7QUEyQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNwREE7QUFXQTtBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7OztBQUFBOzs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaUJBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFPQTtBQURBO0FBQ0E7QUFQQTtBQUdBO0FBSEE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBZ0JBO0FBQ0E7QUFVQTs7O0FBbEdBO0FBQ0E7QUFvR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0hBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBSUE7QUFJQTtBQUlBO0FBQ0E7QUFJQTtBQUlBO0FBRUE7QUFJQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUF1R0E7QUFBQTtBQTBCQTtBQUFBO0FBNEJBO0FBQUE7QUE0QkE7QUFBQTtBQTBCQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBRkE7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFFQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFHQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFBQTtBQUVBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBRUE7Ozs7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBYUE7QUFDQTtBQWRBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXFCQTtBQUFBO0FBQ0E7QUF0QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBNEJBO0FBNUJBO0FBQUE7QUFDQTtBQURBO0FBOEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBb0NBO0FBQ0E7QUF3REE7OztBQTFjQTtBQUNBO0FBNGNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE2R0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7QUFySUE7QUFDQTtBQTJFQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXBCQTtBQTJCQTs7OztBQTNHQTtBQUNBO0FBd0lBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQXZDQTtBQUNBO0FBeUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hFQTtBQVNBO0FBQ0E7QUFLQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTs7Ozs7QUFFQTtBQUNBO0FBU0E7OztBQS9DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFxRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBT0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQWxHQTtBQUNBO0FBaURBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQVhBO0FBYUE7Ozs7QUFuRUE7QUFDQTtBQXFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZIQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBREE7QUFLQTs7OztBQWJBO0FBQ0E7QUFlQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBdUdBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF2S0E7QUFDQTtBQWtGQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBVkE7QUFjQTs7OztBQXJHQTtBQUNBO0FBMEtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDOUxBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBSEE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7QUFsR0E7QUFDQTtBQXFCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBVEE7QUFjQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBNUNBO0FBQ0E7QUFxR0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0dBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFlQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBeEJBO0FBQ0E7QUF5QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFDQTtBQUNBO0FBdUJBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QUFDQTs7O0FBNkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBRUE7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUlBOzs7QUEvSUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBcEJBO0FBeUJBOzs7O0FBMURBO0FBQ0E7QUFpTEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3TEE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBaU9BO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQXZVQTtBQUNBO0FBbUxBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBbkNBO0FBdUNBOzs7O0FBL05BO0FBQ0E7QUEwVUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBOzs7QUEvREE7QUFDQTtBQWdDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFZQTs7OztBQWpEQTtBQUNBO0FBa0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBMk5BO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUNBO0FBS0E7OztBQUVBO0FBQ0E7QUFLQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUE5WUE7QUFDQTtBQTRMQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBbkJBO0FBd0JBOzs7O0FBek5BO0FBQ0E7QUFpWkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFZQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7Ozs7QUF0QkE7QUFDQTtBQXdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlCQTtBQVdBO0FBRUE7QUFDQTtBQUdBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7QUFDQTs7Ozs7QUFDQTs7Ozs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBeUJBO0FBUUE7Ozs7O0FBRUE7QUFDQTtBQVFBOzs7QUEzREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCQTtBQVVBO0FBQ0E7QUFLQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7O0FBQ0E7Ozs7O0FBRUE7Ozs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTRDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7OztBQUVBO0FBQ0E7QUFTQTs7O0FBaEZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUE0QkE7QUFDQTtBQUlBOzs7QUFoQ0E7QUFDQTtBQWdCQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBS0E7Ozs7QUExQkE7QUFDQTtBQW1DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBb0pBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFRQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUF0UEE7QUFDQTtBQStIQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBVkE7QUFjQTs7OztBQWxKQTtBQUNBO0FBeVBBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdFFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBa0lBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBSUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUVBO0FBRUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQW5PQTtBQUNBO0FBK0dBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQVZBO0FBWUE7Ozs7QUFoSUE7QUFDQTtBQXNPQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlQQTtBQUNBO0FBU0E7QUFJQTtBQW9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWZBO0FBQ0E7QUFrQkE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFzRUE7QUErQkE7QUFXQTs7Ozs7QUFFQTtBQUNBO0FBb0NBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBUkE7QUFVQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7O0FBdk9BOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQTRJQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF2TEE7QUFDQTtBQTZGQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFGQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFsQ0E7QUF3Q0E7Ozs7QUExSUE7QUFDQTtBQXlMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7QUFJQTs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTs7O0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7QUFJQTtBQUlBO0FBQ0E7QUFGQTtBQUNBOztBQUpBO0FBU0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQW5IQTtBQUNBO0FBZ0RBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBWEE7QUFhQTs7OztBQWxFQTtBQUNBO0FBc0hBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7QUFNQTtBQVpBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQTdDQTtBQUNBO0FBOENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3REQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBK0NBO0FBQ0E7QUFDQTs7O0FBaERBO0FBQ0E7QUFzQkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7Ozs7QUE3Q0E7QUFDQTtBQWtEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMvREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBOzs7QUE1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7OztBQUVBO0FBQ0E7QUFDQTs7OztBQWRBO0FBQ0E7QUE4QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFxREE7QUFDQTtBQUNBO0FBQ0E7OztBQXZEQTtBQUNBO0FBd0JBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUFuREE7QUFDQTtBQXlEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25FQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTs7Ozs7Ozs7Ozs7OztBQXdFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFJQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXJGQTtBQUNBO0FBMENBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBUEE7QUFhQTs7OztBQXRFQTtBQUNBO0FBdUZBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQW1GQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBdUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF6S0E7QUFDQTtBQWtFQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFoQ0E7QUFrQ0E7Ozs7QUFwSUE7QUFDQTtBQStLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMUxBO0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7OztBQUNBOzs7OztBQUNBOzs7Ozs7QUFFQTtBQUNBO0FBVUE7QUFBQTtBQU9BOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUdBOzs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUpBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFVQTtBQUNBO0FBb0JBOzs7QUEvREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUEwREE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUF6RUE7QUFDQTtBQXlCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQWRBO0FBZ0JBOzs7O0FBeERBO0FBQ0E7QUE0RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUF1REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTs7O0FBbkVBO0FBQ0E7QUEwQkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBVkE7QUFZQTs7OztBQXJEQTtBQUNBO0FBcUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBOzs7Ozs7Ozs7Ozs7O0FBcUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQU1BOzs7QUEvRUE7QUFDQTtBQXdDQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBOzs7O0FBbkVBO0FBQ0E7QUFpRkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzdGQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUEwQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTVDQTtBQUNBO0FBaUJBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVFBOzs7O0FBeENBO0FBQ0E7QUE4Q0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7Ozs7Ozs7Ozs7Ozs7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBOzs7QUExREE7QUFDQTtBQTZCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQXBEQTtBQUNBO0FBNERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQStDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQXJGQTtBQUNBO0FBa0JBOzs7QUFFQTtBQUNBO0FBT0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQVBBO0FBWUE7Ozs7QUE3Q0E7QUFDQTtBQXVGQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFpQkE7OztBQUVBO0FBQ0E7QUFPQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7Ozs7QUF4Q0E7QUFDQTtBQXlDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFXQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQWxDQTtBQUNBO0FBbUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0NBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQXNCQTs7O0FBRUE7QUFDQTtBQU9BOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFRQTs7OztBQTdDQTtBQUNBO0FBOENBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQXlDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBckRBO0FBQ0E7QUFxQkE7OztBQUVBO0FBQ0E7QUFHQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQU9BOzs7O0FBdkNBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBRUE7QUFDQTtBQXlCQTtBQVdBO0FBVUE7QUEvQ0E7QUFrREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFZQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQTNDQTtBQThDQTs7Ozs7Ozs7Ozs7O0FDbEhBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUVBO0FBREE7QUFEQTs7OztBIiwic291cmNlUm9vdCI6IiJ9