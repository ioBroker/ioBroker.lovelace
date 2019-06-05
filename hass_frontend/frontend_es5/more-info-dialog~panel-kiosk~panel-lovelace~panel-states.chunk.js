(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
  return hass && hass.config.components.indexOf(component) !== -1;
}

/***/ }),

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return durationToSeconds; });
function durationToSeconds(duration) {
  var parts = duration.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

/***/ }),

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
var tests = [60, 60, 24, 7];
var langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var compareTime = options.compareTime || new Date();
  var delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
  var tense = delta >= 0 ? "past" : "future";
  delta = Math.abs(delta);
  var timeDesc;

  for (var i = 0; i < tests.length; i++) {
    if (delta < tests[i]) {
      delta = Math.floor(delta);
      timeDesc = localize("ui.components.relative_time.duration.".concat(langKey[i]), "count", delta);
      break;
    }

    delta /= tests[i];
  }

  if (timeDesc === undefined) {
    delta = Math.floor(delta);
    timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
  }

  return options.includeTense === false ? timeDesc : localize("ui.components.relative_time.".concat(tense), "time", timeDesc);
}

/***/ }),

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return secondsToDuration; });
var leftPad = function leftPad(num) {
  return num < 10 ? "0".concat(num) : num;
};

function secondsToDuration(d) {
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  if (h > 0) {
    return "".concat(h, ":").concat(leftPad(m), ":").concat(leftPad(s));
  }

  if (m > 0) {
    return "".concat(m, ":").concat(leftPad(s));
  }

  if (s > 0) {
    return "" + s;
  }

  return null;
}

/***/ }),

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/*! exports provided: stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
var stopPropagation = function stopPropagation(ev) {
  return ev.stopPropagation();
};

/***/ }),

/***/ "./src/common/entity/supports-feature.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
/*! exports provided: supportsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFeature", function() { return supportsFeature; });
var supportsFeature = function supportsFeature(stateObj, feature) {
  // tslint:disable-next-line:no-bitwise
  return (stateObj.attributes.supported_features & feature) !== 0;
};

/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

function timerTimeRemaining(stateObj) {
  var timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    var now = new Date().getTime();
    var madeActive = new Date(stateObj.last_changed).getTime();
    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
  }

  return timeRemaining;
}

/***/ }),

/***/ "./src/common/util/time-cache-function-promise.ts":
/*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
/*! exports provided: timeCachePromiseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCachePromiseFunc", function() { return timeCachePromiseFunc; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var timeCachePromiseFunc =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(cacheKey, cacheTime, func, hass, entityId) {
    var _len,
        args,
        _key,
        cache,
        lastResult,
        result,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_len = _args.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
              args[_key - 5] = _args[_key];
            }

            cache = hass[cacheKey];

            if (!cache) {
              cache = hass[cacheKey] = {};
            }

            lastResult = cache[entityId];

            if (!lastResult) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", lastResult);

          case 6:
            result = func.apply(void 0, [hass, entityId].concat(args));
            cache[entityId] = result;
            result.then( // When successful, set timer to clear cache
            function () {
              return setTimeout(function () {
                cache[entityId] = undefined;
              }, cacheTime);
            }, // On failure, clear cache right away
            function () {
              cache[entityId] = undefined;
            });
            return _context.abrupt("return", result);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function timeCachePromiseFunc(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./src/components/ha-climate-state.js":
/*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n\n        .unit {\n          display: inline-block;\n          direction: ltr;\n        }\n      </style>\n\n      <div class=\"target\">\n        <template is=\"dom-if\" if=\"[[_hasKnownState(stateObj.state)]]\">\n          <span class=\"state-label\"> [[_localizeState(stateObj.state)]] </span>\n        </template>\n        <div class=\"unit\">[[computeTarget(hass, stateObj)]]</div>\n      </div>\n\n      <template is=\"dom-if\" if=\"[[currentStatus]]\">\n        <div class=\"current\">\n          [[localize('ui.card.climate.currently')]]:\n          <div class=\"unit\">[[currentStatus]]</div>\n        </div>\n      </template>\n    "]);

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

var HaClimateState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaClimateState, _LocalizeMixin);

  function HaClimateState() {
    _classCallCheck(this, HaClimateState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaClimateState).apply(this, arguments));
  }

  _createClass(HaClimateState, [{
    key: "computeCurrentStatus",
    value: function computeCurrentStatus(hass, stateObj) {
      if (!hass || !stateObj) return null;

      if (stateObj.attributes.current_temperature != null) {
        return "".concat(stateObj.attributes.current_temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.current_humidity != null) {
        return "".concat(stateObj.attributes.current_humidity, " %");
      }

      return null;
    }
  }, {
    key: "computeTarget",
    value: function computeTarget(hass, stateObj) {
      if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

      if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
        return "".concat(stateObj.attributes.target_temp_low, " - ").concat(stateObj.attributes.target_temp_high, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.temperature != null) {
        return "".concat(stateObj.attributes.temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
        return "".concat(stateObj.attributes.target_humidity_low, " - ").concat(stateObj.attributes.target_humidity_high, " %");
      }

      if (stateObj.attributes.humidity != null) {
        return "".concat(stateObj.attributes.humidity, " %");
      }

      return "";
    }
  }, {
    key: "_hasKnownState",
    value: function _hasKnownState(state) {
      return state !== "unknown";
    }
  }, {
    key: "_localizeState",
    value: function _localizeState(state) {
      return this.localize("state.climate.".concat(state)) || state;
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
        stateObj: Object,
        currentStatus: {
          type: String,
          computed: "computeCurrentStatus(hass, stateObj)"
        }
      };
    }
  }]);

  return HaClimateState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-climate-state", HaClimateState);

/***/ }),

/***/ "./src/components/ha-cover-controls.js":
/*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .state {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div class=\"state\">\n        <paper-icon-button\n          icon=\"hass:arrow-up\"\n          on-click=\"onOpenTap\"\n          invisible$=\"[[!entityObj.supportsOpen]]\"\n          disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          icon=\"hass:stop\"\n          on-click=\"onStopTap\"\n          invisible$=\"[[!entityObj.supportsStop]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          icon=\"hass:arrow-down\"\n          on-click=\"onCloseTap\"\n          invisible$=\"[[!entityObj.supportsClose]]\"\n          disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n      </div>\n    "]);

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






var HaCoverControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverControls, _PolymerElement);

  function HaCoverControls() {
    _classCallCheck(this, HaCoverControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverControls).apply(this, arguments));
  }

  _createClass(HaCoverControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
    }
  }, {
    key: "onOpenTap",
    value: function onOpenTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCover();
    }
  }, {
    key: "onCloseTap",
    value: function onCloseTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCover();
    }
  }, {
    key: "onStopTap",
    value: function onStopTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCover();
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
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return HaCoverControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-cover-controls", HaCoverControls);

/***/ }),

/***/ "./src/components/ha-cover-tilt-controls.js":
/*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <paper-icon-button\n        icon=\"hass:arrow-top-right\"\n        on-click=\"onOpenTiltTap\"\n        title=\"Open tilt\"\n        invisible$=\"[[!entityObj.supportsOpenTilt]]\"\n        disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon=\"hass:stop\"\n        on-click=\"onStopTiltTap\"\n        invisible$=\"[[!entityObj.supportsStopTilt]]\"\n        title=\"Stop tilt\"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon=\"hass:arrow-bottom-left\"\n        on-click=\"onCloseTiltTap\"\n        title=\"Close tilt\"\n        invisible$=\"[[!entityObj.supportsCloseTilt]]\"\n        disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n    "]);

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







var HaCoverTiltControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverTiltControls, _PolymerElement);

  function HaCoverTiltControls() {
    _classCallCheck(this, HaCoverTiltControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverTiltControls).apply(this, arguments));
  }

  _createClass(HaCoverTiltControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyOpenTilt && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyClosedTilt && !assumedState;
    }
  }, {
    key: "onOpenTiltTap",
    value: function onOpenTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCoverTilt();
    }
  }, {
    key: "onCloseTiltTap",
    value: function onCloseTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCoverTilt();
    }
  }, {
    key: "onStopTiltTap",
    value: function onStopTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCoverTilt();
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
        hass: {
          type: Object
        },
        stateObj: {
          type: Object
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return HaCoverTiltControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

/***/ }),

/***/ "./src/components/ha-markdown.js":
/*!***************************************!*\
  !*** ./src/components/ha-markdown.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
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



var loaded = null;
/**
 * White list allowed svg tag.
 * Only put in the tag used in QR code, can be extend in future.
 */

var svgWhiteList = ["svg", "path"];
/*
 * @appliesMixin EventsMixin
 */

var HaMarkdown =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaMarkdown, _EventsMixin);

  function HaMarkdown() {
    _classCallCheck(this, HaMarkdown);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMarkdown).apply(this, arguments));
  }

  _createClass(HaMarkdown, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaMarkdown.prototype), "connectedCallback", this).call(this); // 0 = not loaded, 1 = success, 2 = error


      this._scriptLoaded = 0;
      this._renderScheduled = false;

      this._resize = function () {
        return _this.fire("iron-resize");
      };

      if (!loaded) {
        loaded = Promise.all(/*! import() | load_markdown */[__webpack_require__.e("vendors~load_markdown"), __webpack_require__.e("load_markdown")]).then(__webpack_require__.bind(null, /*! ../resources/load_markdown */ "./src/resources/load_markdown.js"));
      }

      loaded.then(function (_ref) {
        var marked = _ref.marked,
            filterXSS = _ref.filterXSS;
        _this.marked = marked;
        _this.filterXSS = filterXSS;
        _this._scriptLoaded = 1;
      }, function () {
        _this._scriptLoaded = 2;
      }).then(function () {
        return _this._render();
      });
    }
  }, {
    key: "_render",
    value: function _render() {
      var _this2 = this;

      if (this._scriptLoaded === 0 || this._renderScheduled) return;
      this._renderScheduled = true; // debounce it to next microtask.

      Promise.resolve().then(function () {
        _this2._renderScheduled = false;

        if (_this2._scriptLoaded === 1) {
          _this2.innerHTML = _this2.filterXSS(_this2.marked(_this2.content, {
            gfm: true,
            tables: true,
            breaks: true
          }), {
            onIgnoreTag: _this2.allowSvg ? function (tag, html) {
              return svgWhiteList.indexOf(tag) >= 0 ? html : null;
            } : null
          });

          _this2._resize();

          var walker = document.createTreeWalker(_this2, 1
          /* SHOW_ELEMENT */
          , null, false);

          while (walker.nextNode()) {
            var node = walker.currentNode; // Open external links in a new window

            if (node.tagName === "A" && node.host !== document.location.host) {
              node.target = "_blank"; // Fire a resize event when images loaded to notify content resized
            } else if (node.tagName === "IMG") {
              node.addEventListener("load", _this2._resize);
            }
          }
        } else if (_this2._scriptLoaded === 2) {
          _this2.innerText = _this2.content;
        }
      });
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        content: {
          type: String,
          observer: "_render"
        },
        allowSvg: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaMarkdown;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define("ha-markdown", HaMarkdown);

/***/ }),

/***/ "./src/components/ha-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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





/*
 * @appliesMixin LocalizeMixin
 */

var HaRelativeTime =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaRelativeTime, _LocalizeMixin);

  _createClass(HaRelativeTime, null, [{
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        datetime: {
          type: String,
          observer: "datetimeChanged"
        },
        datetimeObj: {
          type: Object,
          observer: "datetimeObjChanged"
        },
        parsedDateTime: Object
      };
    }
  }]);

  function HaRelativeTime() {
    var _this;

    _classCallCheck(this, HaRelativeTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaRelativeTime).call(this));
    _this.updateRelative = _this.updateRelative.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HaRelativeTime, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "connectedCallback", this).call(this); // update every 60 seconds


      this.updateInterval = setInterval(this.updateRelative, 60000);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "disconnectedCallback", this).call(this);

      clearInterval(this.updateInterval);
    }
  }, {
    key: "datetimeChanged",
    value: function datetimeChanged(newVal) {
      this.parsedDateTime = newVal ? new Date(newVal) : null;
      this.updateRelative();
    }
  }, {
    key: "datetimeObjChanged",
    value: function datetimeObjChanged(newVal) {
      this.parsedDateTime = newVal;
      this.updateRelative();
    }
  }, {
    key: "updateRelative",
    value: function updateRelative() {
      var root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

      if (!this.parsedDateTime) {
        root.innerHTML = this.localize("ui.components.relative_time.never");
      } else {
        root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
      }
    }
  }]);

  return HaRelativeTime;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-relative-time", HaRelativeTime);

/***/ }),

/***/ "./src/components/ha-slider.js":
/*!*************************************!*\
  !*** ./src/components/ha-slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PaperSliderClass = customElements.get("paper-slider");
var subTemplate;

var HaSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaSlider, _PaperSliderClass);

  function HaSlider() {
    _classCallCheck(this, HaSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaSlider).apply(this, arguments));
  }

  _createClass(HaSlider, [{
    key: "_calcStep",
    value: function _calcStep(value) {
      if (!this.step) {
        return parseFloat(value);
      }

      var numSteps = Math.round((value - this.min) / this.step);
      var stepStr = this.step.toString();
      var stepPointAt = stepStr.indexOf(".");

      if (stepPointAt !== -1) {
        /**
         * For small values of this.step, if we calculate the step using
         * For non-integer values of this.step, if we calculate the step using
         * `Math.round(value / step) * step` we may hit a precision point issue
         * eg. 0.1 * 0.2 =  0.020000000000000004
         * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
         *
         * as a work around we can round with the decimal precision of `step`
         */
        var precision = Math.pow(10, stepStr.length - stepPointAt - 1);
        return Math.round((numSteps * this.step + this.min) * precision) / precision;
      }

      return numSteps * this.step + this.min;
    }
  }], [{
    key: "template",
    get: function get() {
      if (!subTemplate) {
        subTemplate = PaperSliderClass.template.cloneNode(true);
        var superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

        superStyle.appendChild(document.createTextNode("\n          :host([dir=\"rtl\"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        "));
      }

      return subTemplate;
    }
  }]);

  return HaSlider;
}(PaperSliderClass);

customElements.define("ha-slider", HaSlider);

/***/ }),

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hassUrl", function() { return hassUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
var hassUrl = "".concat(location.protocol, "//").concat(location.host);
var getSignedPath = function getSignedPath(hass, path) {
  return hass.callWS({
    type: "auth/sign_path",
    path: path
  });
};
var fetchAuthProviders = function fetchAuthProviders() {
  return fetch("/auth/providers", {
    credentials: "same-origin"
  });
};

/***/ }),

/***/ "./src/data/camera.ts":
/*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
/*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchThumbnail, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_ON_OFF", function() { return CAMERA_SUPPORT_ON_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_STREAM", function() { return CAMERA_SUPPORT_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMJPEGStreamUrl", function() { return computeMJPEGStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrlWithCache", function() { return fetchThumbnailUrlWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrl", function() { return fetchThumbnailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnail", function() { return fetchThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreamUrl", function() { return fetchStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCameraPrefs", function() { return fetchCameraPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCameraPrefs", function() { return updateCameraPrefs; });
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/data/auth.ts");


var CAMERA_SUPPORT_ON_OFF = 1;
var CAMERA_SUPPORT_STREAM = 2;
var computeMJPEGStreamUrl = function computeMJPEGStreamUrl(entity) {
  return "/api/camera_proxy_stream/".concat(entity.entity_id, "?token=").concat(entity.attributes.access_token);
};
var fetchThumbnailUrlWithCache = function fetchThumbnailUrlWithCache(hass, entityId) {
  return Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
};
var fetchThumbnailUrl = function fetchThumbnailUrl(hass, entityId) {
  return Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, "/api/camera_proxy/".concat(entityId)).then(function (_ref) {
    var path = _ref.path;
    return path;
  });
};
var fetchThumbnail = function fetchThumbnail(hass, entityId) {
  // tslint:disable-next-line: no-console
  console.warn("This method has been deprecated.");
  return hass.callWS({
    type: "camera_thumbnail",
    entity_id: entityId
  });
};
var fetchStreamUrl = function fetchStreamUrl(hass, entityId, format) {
  var data = {
    type: "camera/stream",
    entity_id: entityId
  };

  if (format) {
    // @ts-ignore
    data.format = format;
  }

  return hass.callWS(data);
};
var fetchCameraPrefs = function fetchCameraPrefs(hass, entityId) {
  return hass.callWS({
    type: "camera/get_prefs",
    entity_id: entityId
  });
};
var updateCameraPrefs = function updateCameraPrefs(hass, entityId, prefs) {
  return hass.callWS(Object.assign({
    type: "camera/update_prefs",
    entity_id: entityId
  }, prefs));
};

/***/ }),

/***/ "./src/data/input-select.ts":
/*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
/*! exports provided: setInputSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputSelectOption", function() { return setInputSelectOption; });
var setInputSelectOption = function setInputSelectOption(hass, entity, option) {
  return hass.callService("input_select", "select_option", {
    option: option,
    entity_id: entity
  });
};

/***/ }),

/***/ "./src/util/cover-model.js":
/*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
/*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpen", function() { return supportsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsClose", function() { return supportsClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetPosition", function() { return supportsSetPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStop", function() { return supportsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpenTilt", function() { return supportsOpenTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCloseTilt", function() { return supportsCloseTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStopTilt", function() { return supportsStopTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetTiltPosition", function() { return supportsSetTiltPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTiltOnly", function() { return isTiltOnly; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* eslint-enable no-bitwise */

var CoverEntity =
/*#__PURE__*/
function () {
  function CoverEntity(hass, stateObj) {
    _classCallCheck(this, CoverEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(CoverEntity, [{
    key: "openCover",
    value: function openCover() {
      this.callService("open_cover");
    }
  }, {
    key: "closeCover",
    value: function closeCover() {
      this.callService("close_cover");
    }
  }, {
    key: "stopCover",
    value: function stopCover() {
      this.callService("stop_cover");
    }
  }, {
    key: "openCoverTilt",
    value: function openCoverTilt() {
      this.callService("open_cover_tilt");
    }
  }, {
    key: "closeCoverTilt",
    value: function closeCoverTilt() {
      this.callService("close_cover_tilt");
    }
  }, {
    key: "stopCoverTilt",
    value: function stopCoverTilt() {
      this.callService("stop_cover_tilt");
    }
  }, {
    key: "setCoverPosition",
    value: function setCoverPosition(position) {
      this.callService("set_cover_position", {
        position: position
      });
    }
  }, {
    key: "setCoverTiltPosition",
    value: function setCoverTiltPosition(tiltPosition) {
      this.callService("set_cover_tilt_position", {
        tilt_position: tiltPosition
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("cover", service, data);
    }
  }, {
    key: "isFullyOpen",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 100;
      }

      return this.stateObj.state === "open";
    }
  }, {
    key: "isFullyClosed",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 0;
      }

      return this.stateObj.state === "closed";
    }
  }, {
    key: "isFullyOpenTilt",
    get: function get() {
      return this._attr.current_tilt_position === 100;
    }
  }, {
    key: "isFullyClosedTilt",
    get: function get() {
      return this._attr.current_tilt_position === 0;
    }
  }, {
    key: "isOpening",
    get: function get() {
      return this.stateObj.state === "opening";
    }
  }, {
    key: "isClosing",
    get: function get() {
      return this.stateObj.state === "closing";
    }
  }, {
    key: "supportsOpen",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsClose",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
    }
  }, {
    key: "supportsSetPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsStop",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsOpenTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsCloseTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsStopTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
    }
  }, {
    key: "supportsSetTiltPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "isTiltOnly",
    get: function get() {
      var supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
      var supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
      return supportsTilt && !supportsCover;
    }
  }]);

  return CoverEntity;
}();


var supportsOpen = function supportsOpen(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
};
var supportsClose = function supportsClose(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
};
var supportsSetPosition = function supportsSetPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
};
var supportsStop = function supportsStop(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
};
var supportsOpenTilt = function supportsOpenTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
};
var supportsCloseTilt = function supportsCloseTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
};
var supportsStopTilt = function supportsStopTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
};
var supportsSetTiltPosition = function supportsSetTiltPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
};
function isTiltOnly(stateObj) {
  var supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  var supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
  return supportsTilt && !supportsCover;
}

/***/ }),

/***/ "./src/util/hass-media-player-model.js":
/*!*********************************************!*\
  !*** ./src/util/hass-media-player-model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayerEntity; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MediaPlayerEntity =
/*#__PURE__*/
function () {
  function MediaPlayerEntity(hass, stateObj) {
    _classCallCheck(this, MediaPlayerEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(MediaPlayerEntity, [{
    key: "mediaPlayPause",
    value: function mediaPlayPause() {
      this.callService("media_play_pause");
    }
  }, {
    key: "nextTrack",
    value: function nextTrack() {
      this.callService("media_next_track");
    }
  }, {
    key: "playbackControl",
    value: function playbackControl() {
      this.callService("media_play_pause");
    }
  }, {
    key: "previousTrack",
    value: function previousTrack() {
      this.callService("media_previous_track");
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this.callService("volume_set", {
        volume_level: volume
      });
    }
  }, {
    key: "togglePower",
    value: function togglePower() {
      if (this.isOff) {
        this.turnOn();
      } else {
        this.turnOff();
      }
    }
  }, {
    key: "turnOff",
    value: function turnOff() {
      this.callService("turn_off");
    }
  }, {
    key: "turnOn",
    value: function turnOn() {
      this.callService("turn_on");
    }
  }, {
    key: "volumeDown",
    value: function volumeDown() {
      this.callService("volume_down");
    }
  }, {
    key: "volumeMute",
    value: function volumeMute(mute) {
      if (!this.supportsVolumeMute) {
        throw new Error("Muting volume not supported");
      }

      this.callService("volume_mute", {
        is_volume_muted: mute
      });
    }
  }, {
    key: "volumeUp",
    value: function volumeUp() {
      this.callService("volume_up");
    }
  }, {
    key: "selectSource",
    value: function selectSource(source) {
      this.callService("select_source", {
        source: source
      });
    }
  }, {
    key: "selectSoundMode",
    value: function selectSoundMode(soundMode) {
      this.callService("select_sound_mode", {
        sound_mode: soundMode
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("media_player", service, data);
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "isIdle",
    get: function get() {
      return this.stateObj.state === "idle";
    }
  }, {
    key: "isMuted",
    get: function get() {
      return this._attr.is_volume_muted;
    }
  }, {
    key: "isPaused",
    get: function get() {
      return this.stateObj.state === "paused";
    }
  }, {
    key: "isPlaying",
    get: function get() {
      return this.stateObj.state === "playing";
    }
  }, {
    key: "isMusic",
    get: function get() {
      return this._attr.media_content_type === "music";
    }
  }, {
    key: "isTVShow",
    get: function get() {
      return this._attr.media_content_type === "tvshow";
    }
  }, {
    key: "hasMediaControl",
    get: function get() {
      return ["playing", "paused", "unknown", "on"].indexOf(this.stateObj.state) !== -1;
    }
  }, {
    key: "volumeSliderValue",
    get: function get() {
      return this._attr.volume_level * 100;
    }
  }, {
    key: "showProgress",
    get: function get() {
      return (this.isPlaying || this.isPaused) && "media_duration" in this.stateObj.attributes && "media_position" in this.stateObj.attributes && "media_position_updated_at" in this.stateObj.attributes;
    }
  }, {
    key: "currentProgress",
    get: function get() {
      var progress = this._attr.media_position;

      if (this.isPlaying) {
        progress += (Date.now() - new Date(this._attr.media_position_updated_at).getTime()) / 1000.0;
      }

      return progress;
    }
  }, {
    key: "supportsPause",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsVolumeSet",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsVolumeMute",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsPreviousTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsNextTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsTurnOn",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "supportsTurnOff",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 256);
    }
  }, {
    key: "supportsPlayMedia",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 512);
    }
  }, {
    key: "supportsVolumeButtons",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1024);
    }
  }, {
    key: "supportsSelectSource",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2048);
    }
  }, {
    key: "supportsSelectSoundMode",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 65536);
    }
  }, {
    key: "supportsPlay",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16384);
    }
  }, {
    key: "primaryTitle",
    get: function get() {
      return this._attr.media_title;
    }
  }, {
    key: "secondaryTitle",
    get: function get() {
      if (this.isMusic) {
        return this._attr.media_artist;
      }

      if (this.isTVShow) {
        var text = this._attr.media_series_title;

        if (this._attr.media_season) {
          text += " S" + this._attr.media_season;

          if (this._attr.media_episode) {
            text += "E" + this._attr.media_episode;
          }
        }

        return text;
      }

      if (this._attr.app_name) {
        return this._attr.app_name;
      }

      return "";
    }
  }, {
    key: "source",
    get: function get() {
      return this._attr.source;
    }
  }, {
    key: "sourceList",
    get: function get() {
      return this._attr.source_list;
    }
  }, {
    key: "soundMode",
    get: function get() {
      return this._attr.sound_mode;
    }
  }, {
    key: "soundModeList",
    get: function get() {
      return this._attr.sound_mode_list;
    }
  }]);

  return MediaPlayerEntity;
}();



/***/ })

}]);
//# sourceMappingURL=more-info-dialog~panel-kiosk~panel-lovelace~panel-states.chunk.js.map