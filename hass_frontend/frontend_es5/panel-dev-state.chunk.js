(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-dev-state"],{

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

/***/ "./src/panels/dev-state/ha-panel-dev-state.js":
/*!****************************************************!*\
  !*** ./src/panels/dev-state/ha-panel-dev-state.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 16px;\n          direction: ltr;\n        }\n\n        ha-entity-picker,\n        .state-input,\n        paper-textarea {\n          display: block;\n          max-width: 400px;\n        }\n\n        .entities th {\n          text-align: left;\n        }\n\n        .entities tr {\n          vertical-align: top;\n        }\n\n        .entities tr:nth-child(odd) {\n          background-color: var(--table-row-background-color, #fff);\n        }\n\n        .entities tr:nth-child(even) {\n          background-color: var(--table-row-alternative-background-color, #eee);\n        }\n        .entities td {\n          padding: 4px;\n        }\n        .entities paper-icon-button {\n          height: 24px;\n          padding: 0;\n        }\n        .entities td:nth-child(3) {\n          white-space: pre-wrap;\n          word-break: break-word;\n        }\n\n        .entities a {\n          color: var(--primary-color);\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button></ha-menu-button>\n            <div main-title>States</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          <div>\n            <p>\n              Set the representation of a device within ioBroker.<br />\n              This will not communicate with the actual device.\n            </p>\n\n            <ha-entity-picker\n              autofocus\n              hass=\"[[hass]]\"\n              value=\"{{_entityId}}\"\n              allow-custom-entity\n            ></ha-entity-picker>\n            <paper-input\n              label=\"State\"\n              required\n              autocapitalize=\"none\"\n              autocomplete=\"off\"\n              autocorrect=\"off\"\n              spellcheck=\"false\"\n              value=\"{{_state}}\"\n              class=\"state-input\"\n            ></paper-input>\n            <paper-textarea\n              label=\"State attributes (JSON, optional)\"\n              autocapitalize=\"none\"\n              autocomplete=\"off\"\n              spellcheck=\"false\"\n              value=\"{{_stateAttributes}}\"\n            ></paper-textarea>\n            <mwc-button on-click=\"handleSetState\" raised>Set State</mwc-button>\n          </div>\n\n          <h1>Current entities</h1>\n          <table class=\"entities\">\n            <tr>\n              <th>Entity</th>\n              <th>State</th>\n              <th hidden$=\"[[narrow]]\">\n                Attributes\n                <paper-checkbox checked=\"{{_showAttributes}}\"></paper-checkbox>\n              </th>\n            </tr>\n            <tr>\n              <th>\n                <paper-input\n                  label=\"Filter entities\"\n                  type=\"search\"\n                  value=\"{{_entityFilter}}\"\n                ></paper-input>\n              </th>\n              <th>\n                <paper-input\n                  label=\"Filter states\"\n                  type=\"search\"\n                  value=\"{{_stateFilter}}\"\n                ></paper-input>\n              </th>\n              <th hidden$=\"[[!computeShowAttributes(narrow, _showAttributes)]]\">\n                <paper-input\n                  label=\"Filter attributes\"\n                  type=\"search\"\n                  value=\"{{_attributeFilter}}\"\n                ></paper-input>\n              </th>\n            </tr>\n            <tr hidden$=\"[[!computeShowEntitiesPlaceholder(_entities)]]\">\n              <td colspan=\"3\">No entities</td>\n            </tr>\n            <template is=\"dom-repeat\" items=\"[[_entities]]\" as=\"entity\">\n              <tr>\n                <td>\n                  <paper-icon-button\n                    on-click=\"entityMoreInfo\"\n                    icon=\"hass:open-in-new\"\n                    alt=\"More Info\"\n                    title=\"More Info\"\n                  >\n                  </paper-icon-button>\n                  <a href=\"#\" on-click=\"entitySelected\">[[entity.entity_id]]</a>\n                </td>\n                <td>[[entity.state]]</td>\n                <template\n                  is=\"dom-if\"\n                  if=\"[[computeShowAttributes(narrow, _showAttributes)]]\"\n                >\n                  <td>[[attributeString(entity)]]</td>\n                </template>\n              </tr>\n            </template>\n          </table>\n        </div>\n      </app-header-layout>\n    "]);

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

var HaPanelDevState =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaPanelDevState, _EventsMixin);

  function HaPanelDevState() {
    _classCallCheck(this, HaPanelDevState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelDevState).apply(this, arguments));
  }

  _createClass(HaPanelDevState, [{
    key: "entitySelected",
    value: function entitySelected(ev) {
      var state = ev.model.entity;
      this._entityId = state.entity_id;
      this._state = state.state;
      this._stateAttributes = JSON.stringify(state.attributes, null, "  ");
      ev.preventDefault();
    }
  }, {
    key: "entityMoreInfo",
    value: function entityMoreInfo(ev) {
      ev.preventDefault();
      this.fire("hass-more-info", {
        entityId: ev.model.entity.entity_id
      });
    }
  }, {
    key: "handleSetState",
    value: function handleSetState() {
      var attr;

      var attrRaw = this._stateAttributes.replace(/^\s+|\s+$/g, "");

      try {
        attr = attrRaw ? JSON.parse(attrRaw) : {};
      } catch (err) {
        /* eslint-disable no-alert */
        alert("Error parsing JSON: " + err);
        /* eslint-enable no-alert */

        return;
      }

      this.hass.callApi("POST", "states/" + this._entityId, {
        state: this._state,
        attributes: attr
      });
    }
  }, {
    key: "computeEntities",
    value: function computeEntities(hass, _entityFilter, _stateFilter, _attributeFilter) {
      return Object.keys(hass.states).map(function (key) {
        return hass.states[key];
      }).filter(function (value) {
        if (!value.entity_id.includes(_entityFilter.toLowerCase())) {
          return false;
        }

        if (!value.state.includes(_stateFilter.toLowerCase())) {
          return false;
        }

        if (_attributeFilter !== "") {
          var attributeFilter = _attributeFilter.toLowerCase();

          var colonIndex = attributeFilter.indexOf(":");
          var multiMode = colonIndex !== -1;
          var keyFilter = attributeFilter;
          var valueFilter = attributeFilter;

          if (multiMode) {
            // we need to filter keys and values separately
            keyFilter = attributeFilter.substring(0, colonIndex).trim();
            valueFilter = attributeFilter.substring(colonIndex + 1).trim();
          }

          var attributeKeys = Object.keys(value.attributes);

          for (var i = 0; i < attributeKeys.length; i++) {
            var key = attributeKeys[i];

            if (key.includes(keyFilter) && !multiMode) {
              return true; // in single mode we're already satisfied with this match
            }

            if (!key.includes(keyFilter) && multiMode) {
              continue;
            }

            var attributeValue = value.attributes[key];

            if (attributeValue !== null && JSON.stringify(attributeValue).toLowerCase().includes(valueFilter)) {
              return true;
            }
          } // there are no attributes where the key and/or value can be matched


          return false;
        }

        return true;
      }).sort(function (entityA, entityB) {
        if (entityA.entity_id < entityB.entity_id) {
          return -1;
        }

        if (entityA.entity_id > entityB.entity_id) {
          return 1;
        }

        return 0;
      });
    }
  }, {
    key: "computeShowEntitiesPlaceholder",
    value: function computeShowEntitiesPlaceholder(_entities) {
      return _entities.length === 0;
    }
  }, {
    key: "computeShowAttributes",
    value: function computeShowAttributes(narrow, _showAttributes) {
      return !narrow && _showAttributes;
    }
  }, {
    key: "attributeString",
    value: function attributeString(entity) {
      var output = "";
      var i;
      var keys;
      var key;
      var value;

      for (i = 0, keys = Object.keys(entity.attributes); i < keys.length; i++) {
        key = keys[i];
        value = entity.attributes[key];

        if (!Array.isArray(value) && value instanceof Object) {
          value = JSON.stringify(value, null, "  ");
        }

        output += key + ": " + value + "\n";
      }

      return output;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        _entityId: {
          type: String,
          value: ""
        },
        _entityFilter: {
          type: String,
          value: ""
        },
        _stateFilter: {
          type: String,
          value: ""
        },
        _attributeFilter: {
          type: String,
          value: ""
        },
        _state: {
          type: String,
          value: ""
        },
        _stateAttributes: {
          type: String,
          value: ""
        },
        _showAttributes: {
          type: Boolean,
          value: true
        },
        _entities: {
          type: Array,
          computed: "computeEntities(hass, _entityFilter, _stateFilter, _attributeFilter)"
        }
      };
    }
  }]);

  return HaPanelDevState;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"]));

customElements.define("ha-panel-dev-state", HaPanelDevState);

/***/ })

}]);
//# sourceMappingURL=panel-dev-state.chunk.js.map