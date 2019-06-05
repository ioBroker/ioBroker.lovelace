(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog~panel-lovelace"],{

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
var debounce = function debounce(func, wait) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timeout; // @ts-ignore

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // tslint:disable:no-this-assignment
    // @ts-ignore
    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

/***/ }),

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
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


var paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

var HaPaperDropdownClass =
/*#__PURE__*/
function (_paperDropdownClass) {
  _inherits(HaPaperDropdownClass, _paperDropdownClass);

  function HaPaperDropdownClass() {
    _classCallCheck(this, HaPaperDropdownClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperDropdownClass).apply(this, arguments));
  }

  _createClass(HaPaperDropdownClass, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaPaperDropdownClass.prototype), "ready", this).call(this); // wait to check for direction since otherwise direction is wrong even though top level is RTL


      setTimeout(function () {
        if (window.getComputedStyle(_this).direction === "rtl") {
          _this.style.textAlign = "right";
        }
      }, 100);
    }
  }]);

  return HaPaperDropdownClass;
}(paperDropdownClass);
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

/***/ }),

/***/ "./src/components/paper-time-input.js":
/*!********************************************!*\
  !*** ./src/components/paper-time-input.js ***!
  \********************************************/
/*! exports provided: PaperTimeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperTimeInput", function() { return PaperTimeInput; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          @apply --paper-font-common-base;\n        }\n\n        paper-input {\n          width: 30px;\n          text-align: center;\n          --paper-input-container-input: {\n            /* Damn you firefox\n             * Needed to hide spin num in firefox\n             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box\n             */\n            -moz-appearance: textfield;\n            @apply --paper-time-input-cotnainer;\n          }\n          --paper-input-container-input-webkit-spinner: {\n            -webkit-appearance: none;\n            margin: 0;\n            display: none;\n          }\n          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;\n        }\n\n        paper-dropdown-menu {\n          width: 55px;\n          padding: 0;\n          /* Force ripple to use the whole container */\n          --paper-dropdown-menu-ripple: {\n            color: var(\n              --paper-time-input-dropdown-ripple-color,\n              var(--primary-color)\n            );\n          }\n          --paper-input-container-input: {\n            @apply --paper-font-button;\n            text-align: center;\n            padding-left: 5px;\n            @apply --paper-time-dropdown-input-cotnainer;\n          }\n          --paper-input-container-underline: {\n            border-color: transparent;\n          }\n          --paper-input-container-underline-focus: {\n            border-color: transparent;\n          }\n        }\n\n        paper-item {\n          cursor: pointer;\n          text-align: center;\n          font-size: 14px;\n        }\n\n        paper-listbox {\n          padding: 0;\n        }\n\n        label {\n          @apply --paper-font-caption;\n        }\n\n        .time-input-wrap {\n          @apply --layout-horizontal;\n          @apply --layout-no-wrap;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      </style>\n\n      <label hidden$=\"[[hideLabel]]\">[[label]]</label>\n      <div class=\"time-input-wrap\">\n        <!-- Hour Input -->\n        <paper-input\n          id=\"hour\"\n          type=\"number\"\n          value=\"{{hour}}\"\n          on-change=\"_shouldFormatHour\"\n          required=\"\"\n          auto-validate=\"[[autoValidate]]\"\n          prevent-invalid-input=\"\"\n          maxlength=\"2\"\n          max=\"[[_computeHourMax(format)]]\"\n          min=\"0\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n          <span suffix=\"\" slot=\"suffix\">:</span>\n        </paper-input>\n\n        <!-- Min Input -->\n        <paper-input\n          id=\"min\"\n          type=\"number\"\n          value=\"{{min}}\"\n          on-change=\"_formatMin\"\n          required=\"\"\n          auto-validate=\"[[autoValidate]]\"\n          prevent-invalid-input=\"\"\n          maxlength=\"2\"\n          max=\"59\"\n          min=\"0\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n        </paper-input>\n\n        <!-- Dropdown Menu -->\n        <paper-dropdown-menu\n          id=\"dropdown\"\n          required=\"\"\n          hidden$=\"[[_equal(format, 24)]]\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n          <paper-listbox\n            attr-for-selected=\"name\"\n            selected=\"{{amPm}}\"\n            slot=\"dropdown-content\"\n          >\n            <paper-item name=\"AM\">AM</paper-item>\n            <paper-item name=\"PM\">PM</paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n    "]);

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

/**
Adapted from paper-time-input from
https://github.com/ryanburns23/paper-time-input
MIT Licensed. Copyright (c) 2017 Ryan Burns

`<paper-time-input>` Polymer element to accept a time with paper-input & paper-dropdown-menu
Inspired by the time input in google forms

### Styling

`<paper-time-input>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-time-input-dropdown-ripple-color` | dropdown ripple color | `--primary-color`
`--paper-time-input-cotnainer` | Mixin applied to the inputs | `{}`
`--paper-time-dropdown-input-cotnainer` | Mixin applied to the dropdown input | `{}`
*/






var PaperTimeInput =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(PaperTimeInput, _PolymerElement);

  function PaperTimeInput() {
    _classCallCheck(this, PaperTimeInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaperTimeInput).apply(this, arguments));
  }

  _createClass(PaperTimeInput, [{
    key: "validate",

    /**
     * Validate the inputs
     * @return {boolean}
     */
    value: function validate() {
      var valid = true; // Validate hour & min fields

      if (!this.$.hour.validate() | !this.$.min.validate()) {
        valid = false;
      } // Validate AM PM if 12 hour time


      if (this.format === 12 && !this.$.dropdown.validate()) {
        valid = false;
      }

      return valid;
    }
    /**
     * Create time string
     */

  }, {
    key: "_computeTime",
    value: function _computeTime(min, hour, amPm) {
      if (hour && min) {
        // No ampm on 24 hr time
        if (this.format === 24) {
          amPm = "";
        }

        return hour + ":" + min + " " + amPm;
      }

      return undefined;
    }
    /**
     * Format min
     */

  }, {
    key: "_formatMin",
    value: function _formatMin() {
      if (this.min.toString().length === 1) {
        this.min = this.min < 10 ? "0" + this.min : this.min;
      }
    }
    /**
     * Hour needs a leading zero in 24hr format
     */

  }, {
    key: "_shouldFormatHour",
    value: function _shouldFormatHour() {
      if (this.format === 24 && this.hour.toString().length === 1) {
        this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
      }
    }
    /**
     * 24 hour format has a max hr of 23
     */

  }, {
    key: "_computeHourMax",
    value: function _computeHourMax(format) {
      if (format === 12) {
        return format;
      }

      return 23;
    }
  }, {
    key: "_equal",
    value: function _equal(n1, n2) {
      return n1 === n2;
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
        /**
         * Label for the input
         */
        label: {
          type: String,
          value: "Time"
        },

        /**
         * auto validate time inputs
         */
        autoValidate: {
          type: Boolean,
          value: true
        },

        /**
         * hides the label
         */
        hideLabel: {
          type: Boolean,
          value: false
        },

        /**
         * 12 or 24 hr format
         */
        format: {
          type: Number,
          value: 12
        },

        /**
         * disables the inputs
         */
        disabled: {
          type: Boolean,
          value: false
        },

        /**
         * hour
         */
        hour: {
          type: String,
          notify: true
        },

        /**
         * minute
         */
        min: {
          type: String,
          notify: true
        },

        /**
         * AM or PM
         */
        amPm: {
          type: String,
          notify: true,
          value: "AM"
        },

        /**
         * Formatted time string
         */
        value: {
          type: String,
          notify: true,
          readOnly: true,
          computed: "_computeTime(min, hour, amPm)"
        }
      };
    }
  }]);

  return PaperTimeInput;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);
customElements.define("paper-time-input", PaperTimeInput);

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



var computeEntityRegistryName = function computeEntityRegistryName(hass, entry) {
  if (entry.name) {
    return entry.name;
  }

  var state = hass.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["default"])(state) : null;
};
var updateEntityRegistryEntry = function updateEntityRegistryEntry(hass, entityId, updates) {
  return hass.callWS(Object.assign({
    type: "config/entity_registry/update",
    entity_id: entityId
  }, updates));
};
var removeEntityRegistryEntry = function removeEntityRegistryEntry(hass, entityId) {
  return hass.callWS({
    type: "config/entity_registry/remove",
    entity_id: entityId
  });
};

var fetchEntityRegistry = function fetchEntityRegistry(conn) {
  return conn.sendMessagePromise({
    type: "config/entity_registry/list"
  });
};

var subscribeEntityRegistryUpdates = function subscribeEntityRegistryUpdates(conn, store) {
  return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
    return fetchEntityRegistry(conn).then(function (entities) {
      return store.setState(entities, true);
    });
  }, 500, true), "entity_registry_updated");
};

var subscribeEntityRegistry = function subscribeEntityRegistry(conn, onChange) {
  return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);
};

/***/ })

}]);
//# sourceMappingURL=more-info-dialog~panel-lovelace.chunk.js.map