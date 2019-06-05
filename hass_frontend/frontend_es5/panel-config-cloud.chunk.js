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

/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions() ? function (dateObj, locales) {
  return dateObj.toLocaleString(locales, {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit"
  });
} : function (dateObj) {
  return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime");
});

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

var isEmptyFilter = function isEmptyFilter(filter) {
  return filter.include_domains.length + filter.include_entities.length + filter.exclude_domains.length + filter.exclude_entities.length === 0;
};
var generateFilter = function generateFilter(includeDomains, includeEntities, excludeDomains, excludeEntities) {
  var includeDomainsSet = new Set(includeDomains);
  var includeEntitiesSet = new Set(includeEntities);
  var excludeDomainsSet = new Set(excludeDomains);
  var excludeEntitiesSet = new Set(excludeEntities);
  var haveInclude = includeDomainsSet.size > 0 || includeEntitiesSet.size > 0;
  var haveExclude = excludeDomainsSet.size > 0 || excludeEntitiesSet.size > 0; // Case 1 - no includes or excludes - pass all entities

  if (!haveInclude && !haveExclude) {
    return function () {
      return true;
    };
  } // Case 2 - includes, no excludes - only include specified entities


  if (haveInclude && !haveExclude) {
    return function (entityId) {
      return includeEntitiesSet.has(entityId) || includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId));
    };
  } // Case 3 - excludes, no includes - only exclude specified entities


  if (!haveInclude && haveExclude) {
    return function (entityId) {
      return !excludeEntitiesSet.has(entityId) && !excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId));
    };
  } // Case 4 - both includes and excludes specified
  // Case 4a - include domain specified
  //  - if domain is included, pass if entity not excluded
  //  - if domain is not included, pass if entity is included
  // note: if both include and exclude domains specified,
  //   the exclude domains are ignored


  if (includeDomainsSet.size) {
    return function (entityId) {
      return includeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId)) ? !excludeEntitiesSet.has(entityId) : includeEntitiesSet.has(entityId);
    };
  } // Case 4b - exclude domain specified
  //  - if domain is excluded, pass if entity is included
  //  - if domain is not excluded, pass if entity not excluded


  if (excludeDomainsSet.size) {
    return function (entityId) {
      return excludeDomainsSet.has(Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId)) ? includeEntitiesSet.has(entityId) : !excludeEntitiesSet.has(entityId);
    };
  } // Case 4c - neither include or exclude domain specified
  //  - Only pass if entity is included.  Ignore entity excludes.


  return function (entityId) {
    return includeEntitiesSet.has(entityId);
  };
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-progress-button\n        .progress=\"", "\"\n        @click=\"", "\"\n        ?disabled=\"", "\"\n        ><slot></slot\n      ></ha-progress-button>\n    "]);

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





var HaCallApiButton =
/*#__PURE__*/
function (_LitElement) {
  _inherits(HaCallApiButton, _LitElement);

  _createClass(HaCallApiButton, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.progress, this._buttonTapped, this.disabled);
    }
  }]);

  function HaCallApiButton() {
    var _this;

    _classCallCheck(this, HaCallApiButton);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaCallApiButton).call(this));
    _this.method = "POST";
    _this.data = {};
    _this.disabled = false;
    _this.progress = false;
    return _this;
  }

  _createClass(HaCallApiButton, [{
    key: "_buttonTapped",
    value: function () {
      var _buttonTapped2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var eventData, resp;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this.progress = true;
                eventData = {
                  method: this.method,
                  path: this.path,
                  data: this.data
                };
                _context.prev = 2;
                _context.next = 5;
                return this.hass.callApi(this.method, this.path, this.data);

              case 5:
                resp = _context.sent;
                this.progress = false;
                this.progressButton.actionSuccess();
                eventData.success = true;
                eventData.response = resp;
                _context.next = 18;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](2);
                this.progress = false;
                this.progressButton.actionError();
                eventData.success = false;
                eventData.response = _context.t0;

              case 18:
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "hass-api-called", eventData);

              case 19:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 12]]);
      }));

      function _buttonTapped() {
        return _buttonTapped2.apply(this, arguments);
      }

      return _buttonTapped;
    }()
  }, {
    key: "progressButton",
    get: function get() {
      return this.renderRoot.querySelector("ha-progress-button");
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        progress: Boolean,
        path: String,
        method: String,
        data: {},
        disabled: Boolean
      };
    }
  }]);

  return HaCallApiButton;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("ha-call-api-button", HaCallApiButton);

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
var fetchWebhooks = function fetchWebhooks(hass) {
  return hass.callWS({
    type: "webhook/list"
  });
};

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                <p>Exposed entities:</p>\n                <cloud-exposed-entities\n                  .hass=\"", "\"\n                  .filter=\"", "\"\n                  .supportedDomains=\"", "\"\n                ></cloud-exposed-entities>\n              "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-card header=\"Alexa\">\n        <paper-toggle-button\n          .checked=\"", "\"\n          @change=\"", "\"\n        ></paper-toggle-button>\n        <div class=\"card-content\">\n          With the Alexa integration for ioBroker Cloud you'll be able to\n          control all your ioBroker devices via any Alexa-enabled device.\n          <ul>\n            <li>\n              To activate, search in the Alexa app for the ioBroker Smart\n              Home skill.\n            </li>\n            <li>\n              <a\n                href=\"https://www.nabucasa.com/config/amazon_alexa/\"\n                target=\"_blank\"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires an Alexa-enabled device like the Amazon\n            Echo.</em\n          >\n          ", "\n        </div>\n      </ha-card>\n    "]);

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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // tslint:disable-next-line





var CloudAlexaPref =
/*#__PURE__*/
function (_LitElement) {
  _inherits(CloudAlexaPref, _LitElement);

  function CloudAlexaPref() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CloudAlexaPref);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CloudAlexaPref)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "cloudStatus", void 0);

    return _this;
  }

  _createClass(CloudAlexaPref, [{
    key: "render",
    value: function render() {
      if (!this.cloudStatus) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
      }

      var enabled = this.cloudStatus.prefs.alexa_enabled;
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), enabled, this._toggleChanged, enabled ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this.hass, this.cloudStatus.alexa_entities, this.cloudStatus.alexa_domains) : "");
    }
  }, {
    key: "_toggleChanged",
    value: function () {
      var _toggleChanged2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        var toggle;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                toggle = ev.target;
                _context.prev = 1;
                _context.next = 4;
                return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, {
                  alexa_enabled: toggle.checked
                });

              case 4:
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "ha-refresh-cloud-status");
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                toggle.checked = !toggle.checked;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function _toggleChanged(_x) {
        return _toggleChanged2.apply(this, arguments);
      }

      return _toggleChanged;
    }()
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        cloudStatus: {}
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
    }
  }]);

  return CloudAlexaPref;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-state-icon {\n          color: var(--primary-text-color);\n          cursor: pointer;\n        }\n      </style>\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n          <span>\n            <ha-state-icon\n              .stateObj=\"", "\"\n              @click=\"", "\"\n            ></ha-state-icon>\n            <paper-tooltip position=\"bottom\">", "</paper-tooltip>\n          </span>\n        "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      ", "\n    "]);

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








var CloudExposedEntities =
/*#__PURE__*/
function (_LitElement) {
  _inherits(CloudExposedEntities, _LitElement);

  function CloudExposedEntities() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CloudExposedEntities);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CloudExposedEntities)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "filter", void 0);

    _defineProperty(_assertThisInitialized(_this), "supportedDomains", void 0);

    _defineProperty(_assertThisInitialized(_this), "_filterFunc", void 0);

    return _this;
  }

  _createClass(CloudExposedEntities, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this._filterFunc) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
      }

      var states = [];
      Object.keys(this.hass.states).forEach(function (entityId) {
        if (_this2._filterFunc(entityId)) {
          var stateObj = _this2.hass.states[entityId];
          states.push([Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(stateObj), stateObj]);
        }
      });
      states.sort();
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.renderStyle(), Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_1__["repeat"])(states, function (stateInfo) {
        return stateInfo[1].entity_id;
      }, function (stateInfo) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), stateInfo[1], _this2._handleMoreInfo, stateInfo[0]);
      }));
    }
  }, {
    key: "updated",
    value: function updated(changedProperties) {
      _get(_getPrototypeOf(CloudExposedEntities.prototype), "updated", this).call(this, changedProperties);

      if (changedProperties.has("filter") && changedProperties.get("filter") !== this.filter) {
        var filter = this.filter;
        var filterFunc = Object(_common_entity_entity_filter__WEBPACK_IMPORTED_MODULE_6__["generateFilter"])(filter.include_domains, filter.include_entities, filter.exclude_domains, filter.exclude_entities);
        var domains = new Set(this.supportedDomains);

        this._filterFunc = function (entityId) {
          var domain = entityId.split(".")[0];
          return domains.has(domain) && filterFunc(entityId);
        };
      }
    }
  }, {
    key: "_handleMoreInfo",
    value: function _handleMoreInfo(ev) {
      Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_4__["fireEvent"])(this, "hass-more-info", {
        entityId: ev.currentTarget.stateObj.entity_id
      });
    }
  }, {
    key: "renderStyle",
    value: function renderStyle() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4());
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        filter: {},
        supportedDomains: {},
        _filterFunc: {}
      };
    }
  }]);

  return CloudExposedEntities;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      ha-call-api-button {\n        color: var(--primary-color);\n        font-weight: 500;\n      }\n      .secure_devices {\n        padding-top: 16px;\n      }\n      paper-input {\n        width: 200px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"secure_devices\">\n                  Please enter a pin to interact with security devices. Security\n                  devices are doors, garage doors and locks. You will be asked\n                  to say/enter this pin when interacting with such devices via\n                  Google Assistant.\n                  <paper-input\n                    label=\"Secure Devices Pin\"\n                    id=\"google_secure_devices_pin\"\n                    placeholder=\"Secure devices disabled\"\n                    .value=", "\n                    @change=\"", "\"\n                  ></paper-input>\n                </div>\n              "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-card header=\"Google Assistant\">\n        <paper-toggle-button\n          id=\"google_enabled\"\n          .checked=\"", "\"\n          @change=\"", "\"\n        ></paper-toggle-button>\n        <div class=\"card-content\">\n          With the Google Assistant integration for ioBroker Cloud you'll\n          be able to control all your ioBroker devices via any Google\n          Assistant-enabled device.\n          <ul>\n            <li>\n              <a\n                href=\"https://assistant.google.com/services/a/uid/00000091fd5fb875?hl=en-US\"\n                target=\"_blank\"\n              >\n                Activate the ioBroker skill for Google Assistant\n              </a>\n            </li>\n            <li>\n              <a\n                href=\"https://www.nabucasa.com/config/google_assistant/\"\n                target=\"_blank\"\n              >\n                Config documentation\n              </a>\n            </li>\n          </ul>\n          <em\n            >This integration requires a Google Assistant-enabled device like\n            the Google Home or Android phone.</em\n          >\n          ", "\n        </div>\n        <div class=\"card-actions\">\n          <ha-call-api-button\n            .hass=\"", "\"\n            .disabled=\"", "\"\n            path=\"cloud/google_actions/sync\"\n          >\n            Sync entities to Google\n          </ha-call-api-button>\n          <div class=\"spacer\"></div>\n          <a href=\"/config/cloud/google-assistant\">\n            <mwc-button>Manage Entities</mwc-button>\n          </a>\n        </div>\n      </ha-card>\n    "]);

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

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // tslint:disable-next-line





var CloudGooglePref =
/*#__PURE__*/
function (_LitElement) {
  _inherits(CloudGooglePref, _LitElement);

  function CloudGooglePref() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CloudGooglePref);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CloudGooglePref)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "cloudStatus", void 0);

    return _this;
  }

  _createClass(CloudGooglePref, [{
    key: "render",
    value: function render() {
      if (!this.cloudStatus) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
      }

      var _this$cloudStatus$pre = this.cloudStatus.prefs,
          google_enabled = _this$cloudStatus$pre.google_enabled,
          google_secure_devices_pin = _this$cloudStatus$pre.google_secure_devices_pin;
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), google_enabled, this._toggleChanged, google_enabled ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), google_secure_devices_pin || "", this._pinChanged) : "", this.hass, !google_enabled);
    }
  }, {
    key: "_toggleChanged",
    value: function () {
      var _toggleChanged2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        var toggle;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                toggle = ev.target;
                _context.prev = 1;
                _context.next = 4;
                return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, _defineProperty({}, toggle.id, toggle.checked));

              case 4:
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
                _context.next = 10;
                break;

              case 7:
                _context.prev = 7;
                _context.t0 = _context["catch"](1);
                toggle.checked = !toggle.checked;

              case 10:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 7]]);
      }));

      function _toggleChanged(_x) {
        return _toggleChanged2.apply(this, arguments);
      }

      return _toggleChanged;
    }()
  }, {
    key: "_pinChanged",
    value: function () {
      var _pinChanged2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(ev) {
        var input;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                input = ev.target;
                _context2.prev = 1;
                _context2.next = 4;
                return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["updateCloudPref"])(this.hass, _defineProperty({}, input.id, input.value || null));

              case 4:
                Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
                _context2.next = 11;
                break;

              case 7:
                _context2.prev = 7;
                _context2.t0 = _context2["catch"](1);
                alert("Unable to store pin: ".concat(_context2.t0.message));
                input.value = this.cloudStatus.prefs.google_secure_devices_pin;

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 7]]);
      }));

      function _pinChanged(_x2) {
        return _pinChanged2.apply(this, arguments);
      }

      return _pinChanged;
    }()
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        cloudStatus: {}
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
    }
  }]);

  return CloudGooglePref;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      .preparing {\n        padding: 0 16px 16px;\n      }\n      a {\n        color: var(--primary-color);\n      }\n      ha-card > paper-toggle-button {\n        margin: -4px 0;\n        position: absolute;\n        right: 8px;\n        top: 32px;\n      }\n      .card-actions {\n        display: flex;\n      }\n      .card-actions a {\n        text-decoration: none;\n      }\n      .spacer {\n        flex-grow: 1;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"spacer\"></div>\n                <mwc-button @click=", ">\n                  Certificate Info\n                </mwc-button>\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      <ha-card header=\"Remote Control\">\n        <paper-toggle-button\n          .checked=\"", "\"\n          @change=\"", "\"\n        ></paper-toggle-button>\n        <div class=\"card-content\">\n          ioBroker Cloud provides a secure remote connection to your\n          instance while away from home. Your instance\n          ", " available at\n          <a href=\"https://", "\" target=\"_blank\">\n            https://", "</a\n          >.\n        </div>\n        <div class=\"card-actions\">\n          <a href=\"https://www.nabucasa.com/config/remote/\" target=\"_blank\">\n            <mwc-button>Learn how it works</mwc-button>\n          </a>\n          ", "\n        </div>\n      </ha-card>\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <ha-card header=\"Remote Control\">\n          <div class=\"preparing\">\n            Remote access is being prepared. We will notify you when it's ready.\n          </div>\n        </ha-card>\n      "]);

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




 // tslint:disable-next-line





var CloudRemotePref = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("cloud-remote-pref")], function (_initialize, _LitElement) {
  var CloudRemotePref =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(CloudRemotePref, _LitElement2);

    function CloudRemotePref() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, CloudRemotePref);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CloudRemotePref)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return CloudRemotePref;
  }(_LitElement);

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
      "static": true,
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
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        var _this$cloudStatus = this.cloudStatus,
            remote_connected = _this$cloudStatus.remote_connected,
            remote_domain = _this$cloudStatus.remote_domain,
            remote_certificate = _this$cloudStatus.remote_certificate;

        if (!remote_certificate) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), remote_connected, this._toggleChanged, remote_connected ? "is" : "will be", remote_domain, remote_domain, remote_certificate ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this._openCertInfo) : "");
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
      value: function () {
        var _toggleChanged2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(ev) {
          var toggle;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  toggle = ev.target;
                  _context.prev = 1;

                  if (!toggle.checked) {
                    _context.next = 7;
                    break;
                  }

                  _context.next = 5;
                  return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["connectCloudRemote"])(this.hass);

                case 5:
                  _context.next = 9;
                  break;

                case 7:
                  _context.next = 9;
                  return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_6__["disconnectCloudRemote"])(this.hass);

                case 9:
                  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this, "ha-refresh-cloud-status");
                  _context.next = 16;
                  break;

                case 12:
                  _context.prev = 12;
                  _context.t0 = _context["catch"](1);
                  alert(_context.t0.message);
                  toggle.checked = !toggle.checked;

                case 16:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[1, 12]]);
        }));

        function _toggleChanged(_x) {
          return _toggleChanged2.apply(this, arguments);
        }

        return _toggleChanged;
      }()
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .body-text {\n          padding: 8px 0;\n        }\n        .webhook {\n          display: flex;\n          padding: 4px 0;\n        }\n        .progress {\n          margin-right: 16px;\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n        }\n        .footer {\n          padding-top: 16px;\n        }\n        .body-text a,\n        .footer a {\n          color: var(--primary-color);\n        }\n      </style>\n    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                <paper-toggle-button\n                  @click=\"", "\"\n                ></paper-toggle-button>\n              "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                <mwc-button @click=\"", "\">\n                  Manage\n                </mwc-button>\n              "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"progress\">\n                  <paper-spinner active></paper-spinner>\n                </div>\n              "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"webhook\" .entry=\"", "\">\n          <paper-item-body two-line>\n            <div>\n              ", "\n              ", "\n            </div>\n            <div secondary>", "</div>\n          </paper-item-body>\n          ", "\n        </div>\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"body-text\">\n          Looks like you have no webhooks yet. Get started by configuring a\n          <a href=\"/config/integrations\">webhook-based integration</a> or by\n          creating a <a href=\"/config/automation/new\">webhook automation</a>.\n        </div>\n      "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <div class=\"body-text\">Loading\u2026</div>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      ", "\n      <ha-card header=\"Webhooks\">\n        <div class=\"card-content\">\n          Anything that is configured to be triggered by a webhook can be given\n          a publicly accessible URL to allow you to send data back to Home\n          Assistant from anywhere, without exposing your instance to the\n          internet. ", "\n\n          <div class=\"footer\">\n            <a href=\"https://www.nabucasa.com/config/webhooks\" target=\"_blank\">\n              Learn more about creating webhook-powered automations.\n            </a>\n          </div>\n        </div>\n      </ha-card>\n    "]);

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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










var CloudWebhooks =
/*#__PURE__*/
function (_LitElement) {
  _inherits(CloudWebhooks, _LitElement);

  _createClass(CloudWebhooks, null, [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        cloudStatus: {},
        _cloudHooks: {},
        _localHooks: {},
        _progress: {}
      };
    }
  }]);

  function CloudWebhooks() {
    var _this;

    _classCallCheck(this, CloudWebhooks);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(CloudWebhooks).call(this));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "cloudStatus", void 0);

    _defineProperty(_assertThisInitialized(_this), "_cloudHooks", void 0);

    _defineProperty(_assertThisInitialized(_this), "_localHooks", void 0);

    _defineProperty(_assertThisInitialized(_this), "_progress", void 0);

    _this._progress = [];
    return _this;
  }

  _createClass(CloudWebhooks, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(CloudWebhooks.prototype), "connectedCallback", this).call(this);

      this._fetchData();
    }
  }, {
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.renderStyle(), this._renderBody());
    }
  }, {
    key: "updated",
    value: function updated(changedProps) {
      _get(_getPrototypeOf(CloudWebhooks.prototype), "updated", this).call(this, changedProps);

      if (changedProps.has("cloudStatus") && this.cloudStatus) {
        this._cloudHooks = this.cloudStatus.prefs.cloudhooks || {};
      }
    }
  }, {
    key: "_renderBody",
    value: function _renderBody() {
      var _this2 = this;

      if (!this.cloudStatus || !this._localHooks || !this._cloudHooks) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2());
      }

      if (this._localHooks.length === 0) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3());
      }

      return this._localHooks.map(function (entry) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), entry, entry.name, entry.domain === entry.name.toLowerCase() ? "" : " (".concat(entry.domain, ")"), entry.webhook_id, _this2._progress.includes(entry.webhook_id) ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5()) : _this2._cloudHooks[entry.webhook_id] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6(), _this2._handleManageButton) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7(), _this2._enableWebhook));
      });
    }
  }, {
    key: "_showDialog",
    value: function _showDialog(webhookId) {
      var _this3 = this;

      var webhook = this._localHooks.find(function (ent) {
        return ent.webhook_id === webhookId;
      });

      var cloudhook = this._cloudHooks[webhookId];
      Object(_show_cloud_webhook_manage_dialog__WEBPACK_IMPORTED_MODULE_8__["showManageCloudhookDialog"])(this, {
        webhook: webhook,
        cloudhook: cloudhook,
        disableHook: function disableHook() {
          return _this3._disableWebhook(webhookId);
        }
      });
    }
  }, {
    key: "_handleManageButton",
    value: function _handleManageButton(ev) {
      var entry = ev.currentTarget.parentElement.entry;

      this._showDialog(entry.webhook_id);
    }
  }, {
    key: "_enableWebhook",
    value: function () {
      var _enableWebhook2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        var entry, updatedWebhook;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                entry = ev.currentTarget.parentElement.entry;
                this._progress = [].concat(_toConsumableArray(this._progress), [entry.webhook_id]);
                _context.prev = 2;
                _context.next = 5;
                return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["createCloudhook"])(this.hass, entry.webhook_id);

              case 5:
                updatedWebhook = _context.sent;
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                alert(_context.t0.message);
                return _context.abrupt("return");

              case 12:
                _context.prev = 12;
                this._progress = this._progress.filter(function (wid) {
                  return wid !== entry.webhook_id;
                });
                return _context.finish(12);

              case 15:
                this._cloudHooks = Object.assign({}, this._cloudHooks, _defineProperty({}, entry.webhook_id, updatedWebhook)); // Only open dialog if we're not also enabling others, otherwise it's confusing

                if (this._progress.length === 0) {
                  this._showDialog(entry.webhook_id);
                }

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8, 12, 15]]);
      }));

      function _enableWebhook(_x) {
        return _enableWebhook2.apply(this, arguments);
      }

      return _enableWebhook;
    }()
  }, {
    key: "_disableWebhook",
    value: function () {
      var _disableWebhook2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(webhookId) {
        var _ref, disabledHook, newHooks;

        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                this._progress = [].concat(_toConsumableArray(this._progress), [webhookId]);
                _context2.prev = 1;
                _context2.next = 4;
                return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_7__["deleteCloudhook"])(this.hass, webhookId);

              case 4:
                _context2.next = 10;
                break;

              case 6:
                _context2.prev = 6;
                _context2.t0 = _context2["catch"](1);
                alert("Failed to disable webhook: ".concat(_context2.t0.message));
                return _context2.abrupt("return");

              case 10:
                _context2.prev = 10;
                this._progress = this._progress.filter(function (wid) {
                  return wid !== webhookId;
                });
                return _context2.finish(10);

              case 13:
                // Remove cloud related parts from entry.
                _ref = this._cloudHooks, disabledHook = _ref[webhookId], newHooks = _objectWithoutProperties(_ref, [webhookId].map(_toPropertyKey));
                this._cloudHooks = newHooks;

              case 15:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[1, 6, 10, 13]]);
      }));

      function _disableWebhook(_x2) {
        return _disableWebhook2.apply(this, arguments);
      }

      return _disableWebhook;
    }()
  }, {
    key: "_fetchData",
    value: function () {
      var _fetchData2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.hass.config.components.includes("webhook")) {
                  _context3.next = 6;
                  break;
                }

                _context3.next = 3;
                return Object(_data_webhook__WEBPACK_IMPORTED_MODULE_6__["fetchWebhooks"])(this.hass);

              case 3:
                _context3.t0 = _context3.sent;
                _context3.next = 7;
                break;

              case 6:
                _context3.t0 = [];

              case 7:
                this._localHooks = _context3.t0;

              case 8:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      function _fetchData() {
        return _fetchData2.apply(this, arguments);
      }

      return _fetchData;
    }()
  }, {
    key: "renderStyle",
    value: function renderStyle() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject8());
    }
  }]);

  return CloudWebhooks;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        [slot=\"introduction\"] {\n          margin: -1em 0;\n        }\n        [slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        .account-row {\n          display: flex;\n          padding: 0 16px;\n        }\n        mwc-button {\n          align-self: center;\n        }\n        .soon {\n          font-style: italic;\n          margin-top: 24px;\n          text-align: center;\n        }\n        .nowrap {\n          white-space: nowrap;\n        }\n        .wrap {\n          white-space: normal;\n        }\n        .status {\n          text-transform: capitalize;\n          padding: 16px;\n        }\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <hass-subpage header=\"ioBroker Cloud\">\n        <div class=\"content\">\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\">ioBroker Cloud</span>\n            <div slot=\"introduction\">\n              <p>\n                Thank you for being part of ioBroker Cloud. It's because\n                of people like you that we are able to make a great home\n                automation experience for everyone. Thank you!\n              </p>\n            </div>\n\n            <ha-card header=\"Nabu Casa Account\">\n              <div class=\"account-row\">\n                <paper-item-body two-line=\"\">\n                  [[cloudStatus.email]]\n                  <div secondary class=\"wrap\">\n                    [[_formatSubscription(_subscription)]]\n                  </div>\n                </paper-item-body>\n              </div>\n\n              <div class=\"account-row\">\n                <paper-item-body> Cloud connection status </paper-item-body>\n                <div class=\"status\">[[cloudStatus.cloud]]</div>\n              </div>\n\n              <div class=\"card-actions\">\n                <a href=\"https://account.nabucasa.com\" target=\"_blank\"\n                  ><mwc-button>Manage Account</mwc-button></a\n                >\n                <mwc-button style=\"float: right\" on-click=\"handleLogout\"\n                  >Sign out</mwc-button\n                >\n              </div>\n            </ha-card>\n          </ha-config-section>\n\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\">Integrations</span>\n            <div slot=\"introduction\">\n              <p>\n                Integrations for ioBroker Cloud allow you to connect with\n                services in the cloud without having to expose your Home\n                Assistant instance publicly on the internet.\n              </p>\n              <p>\n                Check the website for\n                <a href=\"https://www.nabucasa.com\" target=\"_blank\"\n                  >all available features</a\n                >.\n              </p>\n            </div>\n\n            <cloud-remote-pref\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-remote-pref>\n\n            <cloud-alexa-pref\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-alexa-pref>\n\n            <cloud-google-pref\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-google-pref>\n\n            <cloud-webhooks\n              hass=\"[[hass]]\"\n              cloud-status=\"[[cloudStatus]]\"\n            ></cloud-webhooks>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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




















var registeredWebhookDialog = false;
/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaConfigCloudAccount =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaConfigCloudAccount, _EventsMixin);

  function HaConfigCloudAccount() {
    _classCallCheck(this, HaConfigCloudAccount);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCloudAccount).apply(this, arguments));
  }

  _createClass(HaConfigCloudAccount, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(HaConfigCloudAccount.prototype), "ready", this).call(this);

      this._fetchSubscriptionInfo();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaConfigCloudAccount.prototype), "connectedCallback", this).call(this);

      if (!registeredWebhookDialog) {
        registeredWebhookDialog = true;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__["fireEvent"])(this, "register-dialog", {
          dialogShowEvent: "manage-cloud-webhook",
          dialogTag: "cloud-webhook-manage-dialog",
          dialogImport: function dialogImport() {
            return Promise.all(/*! import() | cloud-webhook-manage-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~cloud-webhook-manage-dialog"), __webpack_require__.e("cloud-webhook-manage-dialog")]).then(__webpack_require__.bind(null, /*! ./cloud-webhook-manage-dialog */ "./src/panels/config/cloud/cloud-webhook-manage-dialog.ts"));
          }
        });
      }
    }
  }, {
    key: "_computeRemoteConnected",
    value: function _computeRemoteConnected(connected) {
      return connected ? "Connected" : "Not Connected";
    }
  }, {
    key: "_fetchSubscriptionInfo",
    value: function () {
      var _fetchSubscriptionInfo2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_data_cloud__WEBPACK_IMPORTED_MODULE_15__["fetchCloudSubscriptionInfo"])(this.hass);

              case 2:
                this._subscription = _context.sent;

                if (this._subscription.provider && this.cloudStatus && this.cloudStatus.cloud !== "connected") {
                  this.fire("ha-refresh-cloud-status");
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _fetchSubscriptionInfo() {
        return _fetchSubscriptionInfo2.apply(this, arguments);
      }

      return _fetchSubscriptionInfo;
    }()
  }, {
    key: "handleLogout",
    value: function handleLogout() {
      var _this = this;

      this.hass.callApi("post", "cloud/logout").then(function () {
        return _this.fire("ha-refresh-cloud-status");
      });
    }
  }, {
    key: "_formatSubscription",
    value: function _formatSubscription(subInfo) {
      if (subInfo === null) {
        return "Fetching subscription…";
      }

      var description = subInfo.human_description;

      if (subInfo.plan_renewal_date) {
        description = description.replace("{periodEnd}", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_11__["default"])(new Date(subInfo.plan_renewal_date * 1000), this.hass.language));
      }

      return description;
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
        isWide: Boolean,
        cloudStatus: Object,
        _subscription: {
          type: Object,
          value: null
        }
      };
    }
  }]);

  return HaConfigCloudAccount;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n        [slot=\"introduction\"] {\n          margin: -1em 0;\n        }\n        [slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          cursor: pointer;\n        }\n        ha-card {\n          overflow: hidden;\n        }\n        ha-card .card-header {\n          margin-bottom: -8px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        [hidden] {\n          display: none;\n        }\n        .flash-msg {\n          padding-right: 44px;\n        }\n        .flash-msg paper-icon-button {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <hass-subpage header=\"Cloud Login\">\n        <div class=\"content\">\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\">ioBroker Cloud</span>\n            <div slot=\"introduction\">\n              <p>\n                ioBroker Cloud provides you with a secure remote\n                connection to your instance while away from home. It also allows\n                you to connect with cloud-only services: Amazon Alexa and Google\n                Assistant.\n              </p>\n              <p>\n                This service is run by our partner\n                <a href=\"https://www.nabucasa.com\" target=\"_blank\"\n                  >Nabu&nbsp;Casa,&nbsp;Inc</a\n                >, a company founded by the founders of ioBroker and\n                Hass.io.\n              </p>\n              <p>\n                ioBroker Cloud is a subscription service with a free one\n                month trial. No payment information necessary.\n              </p>\n              <p>\n                <a href=\"https://www.nabucasa.com\" target=\"_blank\"\n                  >Learn more about ioBroker Cloud</a\n                >\n              </p>\n            </div>\n\n            <ha-card hidden$=\"[[!flashMessage]]\">\n              <div class=\"card-content flash-msg\">\n                [[flashMessage]]\n                <paper-icon-button icon=\"hass:close\" on-click=\"_dismissFlash\"\n                  >Dismiss</paper-icon-button\n                >\n                <paper-ripple id=\"flashRipple\" noink=\"\"></paper-ripple>\n              </div>\n            </ha-card>\n\n            <ha-card header=\"Sign in\">\n              <div class=\"card-content\">\n                <div class=\"error\" hidden$=\"[[!_error]]\">[[_error]]</div>\n                <paper-input\n                  label=\"Email\"\n                  id=\"email\"\n                  type=\"email\"\n                  value=\"{{email}}\"\n                  on-keydown=\"_keyDown\"\n                  error-message=\"Invalid email\"\n                ></paper-input>\n                <paper-input\n                  id=\"password\"\n                  label=\"Password\"\n                  value=\"{{_password}}\"\n                  type=\"password\"\n                  on-keydown=\"_keyDown\"\n                  error-message=\"Passwords are at least 8 characters\"\n                ></paper-input>\n              </div>\n              <div class=\"card-actions\">\n                <ha-progress-button\n                  on-click=\"_handleLogin\"\n                  progress=\"[[_requestInProgress]]\"\n                  >Sign in</ha-progress-button\n                >\n                <button\n                  class=\"link\"\n                  hidden=\"[[_requestInProgress]]\"\n                  on-click=\"_handleForgotPassword\"\n                >\n                  forgot password?\n                </button>\n              </div>\n            </ha-card>\n\n            <ha-card>\n              <paper-item on-click=\"_handleRegister\">\n                <paper-item-body two-line=\"\">\n                  Start your free 1 month trial\n                  <div secondary=\"\">No payment information necessary</div>\n                </paper-item-body>\n                <ha-icon-next></ha-icon-next>\n              </paper-item>\n            </ha-card>\n          </ha-config-section>\n        </div>\n      </hass-subpage>\n    "]);

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
 * @appliesMixin NavigateMixin
 * @appliesMixin EventsMixin
 */

var HaConfigCloudLogin =
/*#__PURE__*/
function (_NavigateMixin) {
  _inherits(HaConfigCloudLogin, _NavigateMixin);

  function HaConfigCloudLogin() {
    _classCallCheck(this, HaConfigCloudLogin);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCloudLogin).apply(this, arguments));
  }

  _createClass(HaConfigCloudLogin, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaConfigCloudLogin.prototype), "connectedCallback", this).call(this);

      if (this.flashMessage) {
        // Wait for DOM to be drawn
        requestAnimationFrame(function () {
          return requestAnimationFrame(function () {
            return _this.$.flashRipple.simulatedRipple();
          });
        });
      }
    }
  }, {
    key: "_inputChanged",
    value: function _inputChanged() {
      this.$.email.invalid = false;
      this.$.password.invalid = false;
      this._error = false;
    }
  }, {
    key: "_keyDown",
    value: function _keyDown(ev) {
      // validate on enter
      if (ev.keyCode === 13) {
        this._handleLogin();

        ev.preventDefault();
      }
    }
  }, {
    key: "_handleLogin",
    value: function _handleLogin() {
      var _this2 = this;

      var invalid = false;

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
      }).then(function () {
        _this2.fire("ha-refresh-cloud-status");

        _this2.setProperties({
          email: "",
          _password: ""
        });
      }, function (err) {
        // Do this before setProperties because changing it clears errors.
        _this2._password = "";
        var errCode = err && err.body && err.body.code;

        if (errCode === "PasswordChangeRequired") {
          alert("You need to change your password before logging in.");

          _this2.navigate("/config/cloud/forgot-password");

          return;
        }

        var props = {
          _requestInProgress: false,
          _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
        };

        if (errCode === "UserNotConfirmed") {
          props._error = "You need to confirm your email before logging in.";
        }

        _this2.setProperties(props);

        _this2.$.email.focus();
      });
    }
  }, {
    key: "_handleRegister",
    value: function _handleRegister() {
      this.flashMessage = "";
      this.navigate("/config/cloud/register");
    }
  }, {
    key: "_handleForgotPassword",
    value: function _handleForgotPassword() {
      this.flashMessage = "";
      this.navigate("/config/cloud/forgot-password");
    }
  }, {
    key: "_dismissFlash",
    value: function _dismissFlash() {
      var _this3 = this;

      // give some time to let the ripple finish.
      setTimeout(function () {
        _this3.flashMessage = "";
      }, 200);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }, {
    key: "observers",
    get: function get() {
      return ["_inputChanged(email, _password)"];
    }
  }]);

  return HaConfigCloudLogin;
}(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])));

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






var LOGGED_IN_URLS = ["account", "google-assistant"];
var NOT_LOGGED_IN_URLS = ["login", "register", "forgot-password"];

var HaConfigCloud = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["customElement"])("ha-config-cloud")], function (_initialize, _HassRouterPage) {
  var HaConfigCloud =
  /*#__PURE__*/
  function (_HassRouterPage2) {
    _inherits(HaConfigCloud, _HassRouterPage2);

    function HaConfigCloud() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaConfigCloud);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaConfigCloud)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaConfigCloud;
  }(_HassRouterPage);

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
      value: function value() {
        var _this2 = this;

        return {
          defaultPage: "login",
          showLoading: true,
          initialLoad: function initialLoad() {
            return _this2._cloudStatusLoaded;
          },
          // Guard the different pages based on if we're logged in.
          beforeRender: function beforeRender(page) {
            if (_this2.cloudStatus.logged_in) {
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
              load: function load() {
                return __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.bind(null, /*! ./ha-config-cloud-register */ "./src/panels/config/cloud/ha-config-cloud-register.js"));
              }
            },
            "forgot-password": {
              tag: "ha-config-cloud-forgot-password",
              load: function load() {
                return __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.bind(null, /*! ./ha-config-cloud-forgot-password */ "./src/panels/config/cloud/ha-config-cloud-forgot-password.js"));
              }
            },
            account: {
              tag: "ha-config-cloud-account"
            },
            "google-assistant": {
              tag: "ha-config-cloud-google-assistant",
              load: function load() {
                return Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e(1)]).then(__webpack_require__.bind(null, /*! ./ha-config-cloud-google-assistant */ "./src/panels/config/cloud/ha-config-cloud-google-assistant.ts"));
              }
            }
          }
        };
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_flashMessage",
      value: function value() {
        return "";
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_3__["property"])()],
      key: "_loginEmail",
      value: function value() {
        return "";
      }
    }, {
      kind: "field",
      key: "_resolveCloudStatusLoaded",
      value: void 0
    }, {
      kind: "field",
      key: "_cloudStatusLoaded",
      value: function value() {
        var _this3 = this;

        return new Promise(function (resolve) {
          _this3._resolveCloudStatusLoaded = resolve;
        });
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        var _this4 = this;

        _get(_getPrototypeOf(HaConfigCloud.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("cloud-done", function (ev) {
          _this4._flashMessage = ev.detail.flashMessage;
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_4__["navigate"])(_this4, "/config/cloud/login");
        });
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaConfigCloud.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("cloudStatus")) {
          var oldStatus = changedProps.get("cloudStatus");

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
        var _this5 = this;

        var el = _get(_getPrototypeOf(HaConfigCloud.prototype), "createElement", this).call(this, tag);

        el.addEventListener("email-changed", function (ev) {
          _this5._loginEmail = ev.detail.value;
        });
        el.addEventListener("flash-message-changed", function (ev) {
          _this5._flashMessage = ev.detail.value;
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

var showManageCloudhookDialog = function showManageCloudhookDialog(element, webhookDialogParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "cloud-webhook-manage-dialog",
    dialogImport: function dialogImport() {
      return Promise.all(/*! import() | cloud-webhook-manage-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~cloud-webhook-manage-dialog"), __webpack_require__.e("cloud-webhook-manage-dialog")]).then(__webpack_require__.bind(null, /*! ./cloud-webhook-manage-dialog */ "./src/panels/config/cloud/cloud-webhook-manage-dialog.ts"));
    },
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

var showCloudCertificateDialog = function showCloudCertificateDialog(element, webhookDialogParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-cloud-certificate",
    dialogImport: function dialogImport() {
      return Promise.all(/*! import() | dialog-cloud-certificate */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("dialog-cloud-certificate")]).then(__webpack_require__.bind(null, /*! ./dialog-cloud-certificate */ "./src/panels/config/cloud/dialog-cloud-certificate.ts"));
    },
    dialogParams: webhookDialogParams
  });
};

/***/ })

}]);
//# sourceMappingURL=panel-config-cloud.chunk.js.map