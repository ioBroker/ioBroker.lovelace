(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-customize"],{

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeDomain; });
function computeDomain(entityId) {
  return entityId.substr(0, entityId.indexOf("."));
}

/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeObjectId; });
/** Compute the object ID of a state. */
function computeObjectId(entityId) {
  return entityId.substr(entityId.indexOf(".") + 1);
}

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

function computeStateDomain(stateObj) {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id);
}

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

/* harmony default export */ __webpack_exports__["default"] = (function (stateObj) {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
});

/***/ }),

/***/ "./src/common/entity/states_sort_by_name.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortStatesByName; });
/* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts");
/**
 * Sort function to help sort states by name
 *
 * Usage:
 *   const states = [state1, state2]
 *   states.sort(statesSortByName);
 */

function sortStatesByName(entityA, entityB) {
  var nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(entityA);
  var nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(entityB);

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

        /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
});

/***/ }),

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
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
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            hass: Object,

            /**
             * Translates a string to the current `language`. Any parameters to the
             * string should be passed in order, as follows:
             * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
             */
            localize: {
              type: Function,
              computed: "__computeLocalize(hass.localize)"
            }
          };
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/config/customize/ha-config-customize.js":
/*!************************************************************!*\
  !*** ./src/panels/config/customize/ha-config-customize.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _ha_entity_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-entity-config */ "./src/panels/config/ha-entity-config.js");
/* harmony import */ var _ha_form_customize__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ha-form-customize */ "./src/panels/config/customize/ha-form-customize.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\"></style>\n\n      <app-header-layout has-scrolling-region=\"\">\n        <app-header slot=\"header\" fixed=\"\">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click=\"_backTapped\"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title=\"\">\n              [[localize('ui.panel.config.customize.caption')]]\n            </div>\n          </app-toolbar>\n        </app-header>\n\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <ha-config-section is-wide=\"[[isWide]]\">\n            <span slot=\"header\">\n              [[localize('ui.panel.config.customize.picker.header')]]\n            </span>\n            <span slot=\"introduction\">\n              [[localize('ui.panel.config.customize.picker.introduction')]]\n            </span>\n            <ha-entity-config\n              hass=\"[[hass]]\"\n              label=\"Entity\"\n              entities=\"[[entities]]\"\n              config=\"[[entityConfig]]\"\n            >\n            </ha-entity-config>\n          </ha-config-section>\n        </div>\n      </app-header-layout>\n    "]);

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

var HaConfigCustomize =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigCustomize, _LocalizeMixin);

  function HaConfigCustomize() {
    _classCallCheck(this, HaConfigCustomize);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCustomize).apply(this, arguments));
  }

  _createClass(HaConfigCustomize, [{
    key: "computeClasses",
    value: function computeClasses(isWide) {
      return isWide ? "content" : "content narrow";
    }
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      history.back();
    }
  }, {
    key: "computeEntities",
    value: function computeEntities(hass) {
      return Object.keys(hass.states).map(function (key) {
        return hass.states[key];
      }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_13__["default"]);
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
        isWide: Boolean,
        entities: {
          type: Array,
          computed: "computeEntities(hass)"
        },
        entityConfig: {
          type: Object,
          value: {
            component: "ha-form-customize",
            computeSelectCaption: function computeSelectCaption(stateObj) {
              return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj) + " (" + Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_12__["default"])(stateObj) + ")";
            }
          }
        }
      };
    }
  }]);

  return HaConfigCustomize;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]));

customElements.define("ha-config-customize", HaConfigCustomize);

/***/ }),

/***/ "./src/panels/config/customize/ha-customize-attribute.js":
/*!***************************************************************!*\
  !*** ./src/panels/config/customize/ha-customize-attribute.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ha-form-style */ "./src/panels/config/ha-form-style.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_ha_form_style__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _types_ha_customize_array__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./types/ha-customize-array */ "./src/panels/config/customize/types/ha-customize-array.js");
/* harmony import */ var _types_ha_customize_boolean__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./types/ha-customize-boolean */ "./src/panels/config/customize/types/ha-customize-boolean.js");
/* harmony import */ var _types_ha_customize_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./types/ha-customize-icon */ "./src/panels/config/customize/types/ha-customize-icon.js");
/* harmony import */ var _types_ha_customize_key_value__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./types/ha-customize-key-value */ "./src/panels/config/customize/types/ha-customize-key-value.js");
/* harmony import */ var _types_ha_customize_string__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./types/ha-customize-string */ "./src/panels/config/customize/types/ha-customize-string.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-form-style\">\n        :host {\n          display: block;\n          position: relative;\n          padding-right: 40px;\n        }\n\n        .button {\n          position: absolute;\n          margin-top: -20px;\n          top: 50%;\n          right: 0;\n        }\n      </style>\n      <div id=\"wrapper\" class=\"form-group\"></div>\n      <paper-icon-button\n        class=\"button\"\n        icon=\"[[getIcon(item.secondary)]]\"\n        on-click=\"tapButton\"\n      ></paper-icon-button>\n    "]);

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












var HaCustomizeAttribute =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeAttribute, _PolymerElement);

  function HaCustomizeAttribute() {
    _classCallCheck(this, HaCustomizeAttribute);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeAttribute).apply(this, arguments));
  }

  _createClass(HaCustomizeAttribute, [{
    key: "tapButton",
    value: function tapButton() {
      if (this.item.secondary) {
        this.item = Object.assign({}, this.item, {
          secondary: false
        });
      } else {
        this.item = Object.assign({}, this.item, {
          closed: true
        });
      }
    }
  }, {
    key: "getIcon",
    value: function getIcon(secondary) {
      return secondary ? "hass:pencil" : "hass:close";
    }
  }, {
    key: "itemObserver",
    value: function itemObserver(item) {
      var _this = this;

      var wrapper = this.$.wrapper;
      var tag = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].TYPE_TO_TAG[item.type].toUpperCase();
      var child;

      if (wrapper.lastChild && wrapper.lastChild.tagName === tag) {
        child = wrapper.lastChild;
      } else {
        if (wrapper.lastChild) {
          wrapper.removeChild(wrapper.lastChild);
        } // Creating an element with upper case works fine in Chrome, but in FF it doesn't immediately
        // become a defined Custom Element. Polymer does that in some later pass.


        this.$.child = child = document.createElement(tag.toLowerCase());
        child.className = "form-control";
        child.addEventListener("item-changed", function () {
          _this.item = Object.assign({}, child.item);
        });
      }

      child.setProperties({
        item: this.item
      });

      if (child.parentNode === null) {
        wrapper.appendChild(child);
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
        item: {
          type: Object,
          notify: true,
          observer: "itemObserver"
        }
      };
    }
  }]);

  return HaCustomizeAttribute;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-attribute", HaCustomizeAttribute);

/***/ }),

/***/ "./src/panels/config/customize/ha-form-customize-attributes.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize-attributes.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/mutable-data */ "./node_modules/@polymer/polymer/lib/mixins/mutable-data.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_customize_attribute__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-customize-attribute */ "./src/panels/config/customize/ha-customize-attribute.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <template is=\"dom-repeat\" items=\"{{attributes}}\" mutable-data=\"\">\n        <ha-customize-attribute item=\"{{item}}\" hidden$=\"[[item.closed]]\">\n        </ha-customize-attribute>\n      </template>\n    "]);

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






var HaFormCustomizeAttributes =
/*#__PURE__*/
function (_MutableData) {
  _inherits(HaFormCustomizeAttributes, _MutableData);

  function HaFormCustomizeAttributes() {
    _classCallCheck(this, HaFormCustomizeAttributes);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaFormCustomizeAttributes).apply(this, arguments));
  }

  _createClass(HaFormCustomizeAttributes, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        attributes: {
          type: Array,
          notify: true
        }
      };
    }
  }]);

  return HaFormCustomizeAttributes;
}(Object(_polymer_polymer_lib_mixins_mutable_data__WEBPACK_IMPORTED_MODULE_0__["MutableData"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-form-customize-attributes", HaFormCustomizeAttributes);

/***/ }),

/***/ "./src/panels/config/customize/ha-form-customize.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/customize/ha-form-customize.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
/* harmony import */ var _ha_form_customize_attributes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-form-customize-attributes */ "./src/panels/config/customize/ha-form-customize-attributes.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style ha-form-style\">\n        .warning {\n          color: red;\n        }\n\n        .attributes-text {\n          padding-left: 20px;\n        }\n      </style>\n      <template\n        is=\"dom-if\"\n        if=\"[[computeShowWarning(localConfig, globalConfig)]]\"\n      >\n        <div class=\"warning\">\n          It seems that your configuration.yaml doesn't properly include\n          customize.yaml<br />\n          Changes made here won't affect your configuration.\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasLocalAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes are already set in customize.yaml<br />\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{localAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasGlobalAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes are customized from outside of\n          customize.yaml<br />\n          Possibly via a domain, a glob or a different include.\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{globalAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasExistingAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes of the entity are set programatically.<br />\n          You can override them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{existingAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <template is=\"dom-if\" if=\"[[hasNewAttributes]]\">\n        <h4 class=\"attributes-text\">\n          The following attributes weren't set. Set them if you like.\n        </h4>\n        <ha-form-customize-attributes\n          attributes=\"{{newAttributes}}\"\n        ></ha-form-customize-attributes>\n      </template>\n      <div class=\"form-group\">\n        <paper-dropdown-menu\n          label=\"Pick an attribute to override\"\n          class=\"flex\"\n          dynamic-align=\"\"\n        >\n          <paper-listbox\n            slot=\"dropdown-content\"\n            selected=\"{{selectedNewAttribute}}\"\n          >\n            <template\n              is=\"dom-repeat\"\n              items=\"[[newAttributesOptions]]\"\n              as=\"option\"\n            >\n              <paper-item>[[option]]</paper-item>\n            </template>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n    "]);

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










var HaFormCustomize =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaFormCustomize, _PolymerElement);

  function HaFormCustomize() {
    _classCallCheck(this, HaFormCustomize);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaFormCustomize).apply(this, arguments));
  }

  _createClass(HaFormCustomize, [{
    key: "_initOpenObject",
    value: function _initOpenObject(key, value, secondary, config) {
      return Object.assign({
        attribute: key,
        value: value,
        closed: false,
        domain: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["default"])(this.entity),
        secondary: secondary,
        description: key
      }, config);
    }
  }, {
    key: "loadEntity",
    value: function loadEntity(entity) {
      var _this = this;

      this.entity = entity;
      return this.hass.callApi("GET", "config/customize/config/" + entity.entity_id).then(function (data) {
        _this.localConfig = data.local;
        _this.globalConfig = data.global;
        _this.newAttributes = [];
      });
    }
  }, {
    key: "saveEntity",
    value: function saveEntity() {
      var data = {};
      var attrs = this.localAttributes.concat(this.globalAttributes, this.existingAttributes, this.newAttributes);
      attrs.forEach(function (attr) {
        if (attr.closed || attr.secondary || !attr.attribute || !attr.value) return;
        var value = attr.type === "json" ? JSON.parse(attr.value) : attr.value;
        if (!value) return;
        data[attr.attribute] = value;
      });
      var objectId = this.entity.entity_id;
      return this.hass.callApi("POST", "config/customize/config/" + objectId, data);
    }
  }, {
    key: "_computeSingleAttribute",
    value: function _computeSingleAttribute(key, value, secondary) {
      var config = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIC_STATE_ATTRIBUTES[key] || {
        type: _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].UNKNOWN_TYPE
      };
      return this._initOpenObject(key, config.type === "json" ? JSON.stringify(value) : value, secondary, config);
    }
  }, {
    key: "_computeAttributes",
    value: function _computeAttributes(config, keys, secondary) {
      var _this2 = this;

      return keys.map(function (key) {
        return _this2._computeSingleAttribute(key, config[key], secondary);
      });
    }
  }, {
    key: "computeLocalAttributes",
    value: function computeLocalAttributes(localConfig) {
      if (!localConfig) return [];
      var localKeys = Object.keys(localConfig);

      var result = this._computeAttributes(localConfig, localKeys, false);

      return result;
    }
  }, {
    key: "computeGlobalAttributes",
    value: function computeGlobalAttributes(localConfig, globalConfig) {
      if (!localConfig || !globalConfig) return [];
      var localKeys = Object.keys(localConfig);
      var globalKeys = Object.keys(globalConfig).filter(function (key) {
        return !localKeys.includes(key);
      });
      return this._computeAttributes(globalConfig, globalKeys, true);
    }
  }, {
    key: "computeExistingAttributes",
    value: function computeExistingAttributes(localConfig, globalConfig, entity) {
      if (!localConfig || !globalConfig || !entity) return [];
      var localKeys = Object.keys(localConfig);
      var globalKeys = Object.keys(globalConfig);
      var entityKeys = Object.keys(entity.attributes).filter(function (key) {
        return !localKeys.includes(key) && !globalKeys.includes(key);
      });
      return this._computeAttributes(entity.attributes, entityKeys, true);
    }
  }, {
    key: "computeShowWarning",
    value: function computeShowWarning(localConfig, globalConfig) {
      if (!localConfig || !globalConfig) return false;
      return Object.keys(localConfig).some(function (key) {
        return JSON.stringify(globalConfig[key]) !== JSON.stringify(localConfig[key]);
      });
    }
  }, {
    key: "filterFromAttributes",
    value: function filterFromAttributes(attributes) {
      return function (key) {
        return !attributes || attributes.every(function (attr) {
          return attr.attribute !== key || attr.closed;
        });
      };
    }
  }, {
    key: "getNewAttributesOptions",
    value: function getNewAttributesOptions(localAttributes, globalAttributes, existingAttributes, newAttributes) {
      var _this3 = this;

      var knownKeys = Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIC_STATE_ATTRIBUTES).filter(function (key) {
        var conf = _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].LOGIC_STATE_ATTRIBUTES[key];
        return conf && (!conf.domains || !_this3.entity || conf.domains.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["default"])(_this3.entity)));
      }).filter(this.filterFromAttributes(localAttributes)).filter(this.filterFromAttributes(globalAttributes)).filter(this.filterFromAttributes(existingAttributes)).filter(this.filterFromAttributes(newAttributes));
      return knownKeys.sort().concat("Other");
    }
  }, {
    key: "selectedNewAttributeObserver",
    value: function selectedNewAttributeObserver(selected) {
      if (selected < 0) return;
      var option = this.newAttributesOptions[selected];

      if (selected === this.newAttributesOptions.length - 1) {
        // The "Other" option.
        var _attr = this._initOpenObject("", "", false
        /* secondary */
        , {
          type: _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_5__["default"].ADD_TYPE
        });

        this.push("newAttributes", _attr);
        this.selectedNewAttribute = -1;
        return;
      }

      var result = this.localAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("localAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      result = this.globalAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("globalAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      result = this.existingAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("existingAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      result = this.newAttributes.findIndex(function (attr) {
        return attr.attribute === option;
      });

      if (result >= 0) {
        this.set("newAttributes." + result + ".closed", false);
        this.selectedNewAttribute = -1;
        return;
      }

      var attr = this._computeSingleAttribute(option, "", false
      /* secondary */
      );

      this.push("newAttributes", attr);
      this.selectedNewAttribute = -1;
    }
  }, {
    key: "attributesObserver",
    value: function attributesObserver() {
      this.hasLocalAttributes = this.localAttributes && this.localAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.hasGlobalAttributes = this.globalAttributes && this.globalAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.hasExistingAttributes = this.existingAttributes && this.existingAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.hasNewAttributes = this.newAttributes && this.newAttributes.some(function (attr) {
        return !attr.closed;
      });
      this.newAttributesOptions = this.getNewAttributesOptions(this.localAttributes, this.globalAttributes, this.existingAttributes, this.newAttributes);
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
        entity: Object,
        localAttributes: {
          type: Array,
          computed: "computeLocalAttributes(localConfig)"
        },
        hasLocalAttributes: Boolean,
        globalAttributes: {
          type: Array,
          computed: "computeGlobalAttributes(localConfig, globalConfig)"
        },
        hasGlobalAttributes: Boolean,
        existingAttributes: {
          type: Array,
          computed: "computeExistingAttributes(localConfig, globalConfig, entity)"
        },
        hasExistingAttributes: Boolean,
        newAttributes: {
          type: Array,
          value: []
        },
        hasNewAttributes: Boolean,
        newAttributesOptions: Array,
        selectedNewAttribute: {
          type: Number,
          value: -1,
          observer: "selectedNewAttributeObserver"
        },
        localConfig: Object,
        globalConfig: Object
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["attributesObserver(localAttributes.*, globalAttributes.*, existingAttributes.*, newAttributes.*)"];
    }
  }]);

  return HaFormCustomize;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]);

customElements.define("ha-form-customize", HaFormCustomize);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-array.js":
/*!*****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-array.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-dropdown-menu {\n          margin: -9px 0;\n        }\n      </style>\n      <paper-dropdown-menu\n        label=\"[[item.description]]\"\n        disabled=\"[[item.secondary]]\"\n        selected-item-label=\"{{item.value}}\"\n        dynamic-align=\"\"\n      >\n        <paper-listbox\n          slot=\"dropdown-content\"\n          selected=\"[[computeSelected(item)]]\"\n        >\n          <template is=\"dom-repeat\" items=\"[[getOptions(item)]]\" as=\"option\">\n            <paper-item>[[option]]</paper-item>\n          </template>\n        </paper-listbox>\n      </paper-dropdown-menu>\n    "]);

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

var HaCustomizeArray =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaCustomizeArray, _EventsMixin);

  function HaCustomizeArray() {
    _classCallCheck(this, HaCustomizeArray);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeArray).apply(this, arguments));
  }

  _createClass(HaCustomizeArray, [{
    key: "getOptions",
    value: function getOptions(item) {
      var domain = item.domain || "*";
      var options = item.options[domain] || item.options["*"];

      if (!options) {
        this.item.type = "string";
        this.fire("item-changed");
        return [];
      }

      return options.sort();
    }
  }, {
    key: "computeSelected",
    value: function computeSelected(item) {
      var options = this.getOptions(item);
      return options.indexOf(item.value);
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
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeArray;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("ha-customize-array", HaCustomizeArray);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-boolean.js":
/*!*******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-boolean.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <paper-checkbox disabled=\"[[item.secondary]]\" checked=\"{{item.value}}\">\n        [[item.description]]\n      </paper-checkbox>\n    "]);

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





var HaCustomizeBoolean =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeBoolean, _PolymerElement);

  function HaCustomizeBoolean() {
    _classCallCheck(this, HaCustomizeBoolean);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeBoolean).apply(this, arguments));
  }

  _createClass(HaCustomizeBoolean, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeBoolean;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-boolean", HaCustomizeBoolean);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-icon.js":
/*!****************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-icon.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        .icon-image {\n          border: 1px solid grey;\n          padding: 8px;\n          margin-right: 20px;\n          margin-top: 10px;\n        }\n      </style>\n      <iron-icon class=\"icon-image\" icon=\"[[item.value]]\"></iron-icon>\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        label=\"icon\"\n        value=\"{{item.value}}\"\n      >\n      </paper-input>\n    "]);

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






var HaCustomizeIcon =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeIcon, _PolymerElement);

  function HaCustomizeIcon() {
    _classCallCheck(this, HaCustomizeIcon);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeIcon).apply(this, arguments));
  }

  _createClass(HaCustomizeIcon, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeIcon;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("ha-customize-icon", HaCustomizeIcon);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-key-value.js":
/*!*********************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-key-value.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --layout-horizontal;\n        }\n        paper-input {\n          @apply --layout-flex;\n        }\n        .key {\n          padding-right: 20px;\n        }\n      </style>\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        class=\"key\"\n        label=\"Attribute name\"\n        value=\"{{item.attribute}}\"\n      >\n      </paper-input>\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        label=\"Attribute value\"\n        value=\"{{item.value}}\"\n      >\n      </paper-input>\n    "]);

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





var HaCustomizeKeyValue =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeKeyValue, _PolymerElement);

  function HaCustomizeKeyValue() {
    _classCallCheck(this, HaCustomizeKeyValue);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeKeyValue).apply(this, arguments));
  }

  _createClass(HaCustomizeKeyValue, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeKeyValue;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-key-value", HaCustomizeKeyValue);

/***/ }),

/***/ "./src/panels/config/customize/types/ha-customize-string.js":
/*!******************************************************************!*\
  !*** ./src/panels/config/customize/types/ha-customize-string.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <paper-input\n        disabled=\"[[item.secondary]]\"\n        label=\"[[getLabel(item)]]\"\n        value=\"{{item.value}}\"\n      >\n      </paper-input>\n    "]);

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





var HaCustomizeString =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCustomizeString, _PolymerElement);

  function HaCustomizeString() {
    _classCallCheck(this, HaCustomizeString);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCustomizeString).apply(this, arguments));
  }

  _createClass(HaCustomizeString, [{
    key: "getLabel",
    value: function getLabel(item) {
      return item.description + (item.type === "json" ? " (JSON formatted)" : "");
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
        item: {
          type: Object,
          notifies: true
        }
      };
    }
  }]);

  return HaCustomizeString;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-customize-string", HaCustomizeString);

/***/ }),

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding: 28px 20px 0;\n          max-width: 1040px;\n          margin: 0 auto;\n        }\n\n        .header {\n          @apply --paper-font-display1;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .together {\n          margin-top: 32px;\n        }\n\n        .intro {\n          @apply --paper-font-subhead;\n          width: 100%;\n          max-width: 400px;\n          margin-right: 40px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        .panel {\n          margin-top: -24px;\n        }\n\n        .panel ::slotted(*) {\n          margin-top: 24px;\n          display: block;\n        }\n\n        .narrow.content {\n          max-width: 640px;\n        }\n        .narrow .together {\n          margin-top: 20px;\n        }\n        .narrow .header {\n          @apply --paper-font-headline;\n        }\n        .narrow .intro {\n          font-size: 14px;\n          padding-bottom: 20px;\n          margin-right: 0;\n          max-width: 500px;\n        }\n      </style>\n      <div class$=\"[[computeContentClasses(isWide)]]\">\n        <div class=\"header\"><slot name=\"header\"></slot></div>\n        <div class$=\"[[computeClasses(isWide)]]\">\n          <div class=\"intro\"><slot name=\"introduction\"></slot></div>\n          <div class=\"panel flex-auto\"><slot></slot></div>\n        </div>\n      </div>\n    "]);

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





var HaConfigSection =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigSection, _PolymerElement);

  function HaConfigSection() {
    _classCallCheck(this, HaConfigSection);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigSection).apply(this, arguments));
  }

  _createClass(HaConfigSection, [{
    key: "computeContentClasses",
    value: function computeContentClasses(isWide) {
      var classes = "content ";
      return isWide ? classes : classes + "narrow";
    }
  }, {
    key: "computeClasses",
    value: function computeClasses(isWide) {
      var classes = "together layout ";
      return classes + (isWide ? "horizontal" : "vertical narrow");
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
        hass: {
          type: Object
        },
        narrow: {
          type: Boolean
        },
        isWide: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaConfigSection;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-config-section", HaConfigSection);

/***/ }),

/***/ "./src/panels/config/ha-entity-config.js":
/*!***********************************************!*\
  !*** ./src/panels/config/ha-entity-config.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        ha-card {\n          direction: ltr;\n        }\n\n        .device-picker {\n          @apply --layout-horizontal;\n          padding-bottom: 24px;\n        }\n\n        .form-placeholder {\n          @apply --layout-vertical;\n          @apply --layout-center-center;\n          height: 96px;\n        }\n\n        [hidden]: {\n          display: none;\n        }\n\n        .card-actions {\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n      </style>\n      <ha-card>\n        <div class=\"card-content\">\n          <div class=\"device-picker\">\n            <paper-dropdown-menu\n              label=\"[[label]]\"\n              class=\"flex\"\n              disabled=\"[[!entities.length]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"{{selectedEntity}}\"\n              >\n                <template is=\"dom-repeat\" items=\"[[entities]]\" as=\"state\">\n                  <paper-item>[[computeSelectCaption(state)]]</paper-item>\n                </template>\n              </paper-listbox>\n            </paper-dropdown-menu>\n          </div>\n\n          <div class=\"form-container\">\n            <template is=\"dom-if\" if=\"[[computeShowPlaceholder(formState)]]\">\n              <div class=\"form-placeholder\">\n                <template is=\"dom-if\" if=\"[[computeShowNoDevices(formState)]]\">\n                  No entities found! :-(\n                </template>\n\n                <template is=\"dom-if\" if=\"[[computeShowSpinner(formState)]]\">\n                  <paper-spinner active=\"\" alt=\"[[formState]]\"></paper-spinner>\n                  [[formState]]\n                </template>\n              </div>\n            </template>\n\n            <div hidden$=\"[[!computeShowForm(formState)]]\" id=\"form\"></div>\n          </div>\n        </div>\n        <div class=\"card-actions\">\n          <mwc-button\n            on-click=\"saveEntity\"\n            disabled=\"[[computeShowPlaceholder(formState)]]\"\n            >SAVE</mwc-button\n          >\n          <template is=\"dom-if\" if=\"[[allowDelete]]\">\n            <mwc-button\n              class=\"warning\"\n              on-click=\"deleteEntity\"\n              disabled=\"[[computeShowPlaceholder(formState)]]\"\n              >DELETE</mwc-button\n            >\n          </template>\n        </div>\n      </ha-card>\n    "]);

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











var HaEntityConfig =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaEntityConfig, _PolymerElement);

  function HaEntityConfig() {
    _classCallCheck(this, HaEntityConfig);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaEntityConfig).apply(this, arguments));
  }

  _createClass(HaEntityConfig, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaEntityConfig.prototype), "connectedCallback", this).call(this);

      this.formEl = document.createElement(this.config.component);
      this.formEl.hass = this.hass;
      this.$.form.appendChild(this.formEl);
      this.entityChanged(this.selectedEntity);
    }
  }, {
    key: "computeSelectCaption",
    value: function computeSelectCaption(stateObj) {
      return this.config.computeSelectCaption ? this.config.computeSelectCaption(stateObj) : Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj);
    }
  }, {
    key: "computeShowNoDevices",
    value: function computeShowNoDevices(formState) {
      return formState === "no-devices";
    }
  }, {
    key: "computeShowSpinner",
    value: function computeShowSpinner(formState) {
      return formState === "loading" || formState === "saving";
    }
  }, {
    key: "computeShowPlaceholder",
    value: function computeShowPlaceholder(formState) {
      return formState !== "editing";
    }
  }, {
    key: "computeShowForm",
    value: function computeShowForm(formState) {
      return formState === "editing";
    }
  }, {
    key: "hassChanged",
    value: function hassChanged(hass) {
      if (this.formEl) {
        this.formEl.hass = hass;
      }
    }
  }, {
    key: "entitiesChanged",
    value: function entitiesChanged(entities, oldEntities) {
      if (entities.length === 0) {
        this.formState = "no-devices";
        return;
      }

      if (!oldEntities) {
        this.selectedEntity = 0;
        return;
      }

      var oldEntityId = oldEntities[this.selectedEntity].entity_id;
      var newIndex = entities.findIndex(function (ent) {
        return ent.entity_id === oldEntityId;
      });

      if (newIndex === -1) {
        this.selectedEntity = 0;
      } else if (newIndex !== this.selectedEntity) {
        // Entity moved index
        this.selectedEntity = newIndex;
      }
    }
  }, {
    key: "entityChanged",
    value: function entityChanged(index) {
      if (!this.entities || !this.formEl) return;
      var entity = this.entities[index];
      if (!entity) return;
      this.formState = "loading";
      var el = this;
      this.formEl.loadEntity(entity).then(function () {
        el.formState = "editing";
      });
    }
  }, {
    key: "saveEntity",
    value: function saveEntity() {
      this.formState = "saving";
      var el = this;
      this.formEl.saveEntity().then(function () {
        el.formState = "editing";
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
          type: Object,
          observer: "hassChanged"
        },
        label: {
          type: String,
          value: "Device"
        },
        entities: {
          type: Array,
          observer: "entitiesChanged"
        },
        allowDelete: {
          type: Boolean,
          value: false
        },
        selectedEntity: {
          type: Number,
          value: -1,
          observer: "entityChanged"
        },
        formState: {
          type: String,
          // no-devices, loading, saving, editing
          value: "no-devices"
        },
        config: {
          type: Object
        }
      };
    }
  }]);

  return HaEntityConfig;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

customElements.define("ha-entity-config", HaEntityConfig);

/***/ }),

/***/ "./src/panels/config/ha-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = "<dom-module id=\"ha-form-style\">\n  <template>\n    <style>\n      .form-group {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        padding: 8px 16px;\n      }\n\n      .form-group label {\n        @apply --layout-flex-2;\n      }\n\n      .form-group .form-control {\n        @apply --layout-flex;\n      }\n\n      .form-group.vertical {\n        @apply --layout-vertical;\n        @apply --layout-start;\n      }\n\n      paper-dropdown-menu.form-control {\n        margin: -9px 0;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild(documentContainer.content);

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
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength"],
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

/***/ })

}]);
//# sourceMappingURL=panel-config-customize.chunk.js.map