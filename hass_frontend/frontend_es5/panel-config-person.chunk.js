(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-person"],{

/***/ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n<dom-module id=\"paper-material-styles\">\n  <template>\n    <style>\n      html {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      .paper-material {\n        @apply --paper-material;\n      }\n      .paper-material[elevation=\"1\"] {\n        @apply --paper-material-elevation-1;\n      }\n      .paper-material[elevation=\"2\"] {\n        @apply --paper-material-elevation-2;\n      }\n      .paper-material[elevation=\"3\"] {\n        @apply --paper-material-elevation-3;\n      }\n      .paper-material[elevation=\"4\"] {\n        @apply --paper-material-elevation-4;\n      }\n      .paper-material[elevation=\"5\"] {\n        @apply --paper-material-elevation-5;\n      }\n\n      /* Duplicate the styles because of https://github.com/webcomponents/shadycss/issues/193 */\n      :host {\n        --paper-material: {\n          display: block;\n          position: relative;\n        };\n        --paper-material-elevation-1: {\n          @apply --shadow-elevation-2dp;\n        };\n        --paper-material-elevation-2: {\n          @apply --shadow-elevation-4dp;\n        };\n        --paper-material-elevation-3: {\n          @apply --shadow-elevation-6dp;\n        };\n        --paper-material-elevation-4: {\n          @apply --shadow-elevation-8dp;\n        };\n        --paper-material-elevation-5: {\n          @apply --shadow-elevation-16dp;\n        };\n      }\n      :host(.paper-material) {\n        @apply --paper-material;\n      }\n      :host(.paper-material[elevation=\"1\"]) {\n        @apply --paper-material-elevation-1;\n      }\n      :host(.paper-material[elevation=\"2\"]) {\n        @apply --paper-material-elevation-2;\n      }\n      :host(.paper-material[elevation=\"3\"]) {\n        @apply --paper-material-elevation-3;\n      }\n      :host(.paper-material[elevation=\"4\"]) {\n        @apply --paper-material-elevation-4;\n      }\n      :host(.paper-material[elevation=\"5\"]) {\n        @apply --paper-material-elevation-5;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/**
Material design:
[Cards](https://www.google.com/design/spec/components/cards.html)

Shared styles that you can apply to an element to renders two shadows on top
of each other,that create the effect of a lifted piece of paper.

Example:

    <custom-style>
      <style is="custom-style" include="paper-material-styles"></style>
    </custom-style>

    <div class="paper-material" elevation="1">
      ... content ...
    </div>

@group Paper Elements
@demo demo/index.html
*/



var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
template.setAttribute('style', 'display: none;');
document.head.appendChild(template.content);

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
var compare = function compare(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
var caseInsensitiveCompare = function caseInsensitiveCompare(a, b) {
  return compare(a.toLowerCase(), b.toLowerCase());
};

/***/ }),

/***/ "./src/data/person.ts":
/*!****************************!*\
  !*** ./src/data/person.ts ***!
  \****************************/
/*! exports provided: fetchPersons, createPerson, updatePerson, deletePerson */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchPersons", function() { return fetchPersons; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createPerson", function() { return createPerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updatePerson", function() { return updatePerson; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deletePerson", function() { return deletePerson; });
var fetchPersons = function fetchPersons(hass) {
  return hass.callWS({
    type: "person/list"
  });
};
var createPerson = function createPerson(hass, values) {
  return hass.callWS(Object.assign({
    type: "person/create"
  }, values));
};
var updatePerson = function updatePerson(hass, personId, updates) {
  return hass.callWS(Object.assign({
    type: "person/update",
    person_id: personId
  }, updates));
};
var deletePerson = function deletePerson(hass, personId) {
  return hass.callWS({
    type: "person/delete",
    person_id: personId
  });
};

/***/ }),

/***/ "./src/data/user.ts":
/*!**************************!*\
  !*** ./src/data/user.ts ***!
  \**************************/
/*! exports provided: SYSTEM_GROUP_ID_ADMIN, SYSTEM_GROUP_ID_USER, SYSTEM_GROUP_ID_READ_ONLY, fetchUsers, createUser, updateUser, deleteUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_ADMIN", function() { return SYSTEM_GROUP_ID_ADMIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_USER", function() { return SYSTEM_GROUP_ID_USER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SYSTEM_GROUP_ID_READ_ONLY", function() { return SYSTEM_GROUP_ID_READ_ONLY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchUsers", function() { return fetchUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createUser", function() { return createUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteUser", function() { return deleteUser; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var SYSTEM_GROUP_ID_ADMIN = "system-admin";
var SYSTEM_GROUP_ID_USER = "system-users";
var SYSTEM_GROUP_ID_READ_ONLY = "system-read-only";
var fetchUsers =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(hass) {
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", hass.callWS({
              type: "config/auth/list"
            }));

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function fetchUsers(_x) {
    return _ref.apply(this, arguments);
  };
}();
var createUser =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee2(hass, name) {
    return regeneratorRuntime.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            return _context2.abrupt("return", hass.callWS({
              type: "config/auth/create",
              name: name
            }));

          case 1:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function createUser(_x2, _x3) {
    return _ref2.apply(this, arguments);
  };
}();
var updateUser =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee3(hass, userId, params) {
    return regeneratorRuntime.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            return _context3.abrupt("return", hass.callWS(Object.assign({}, params, {
              type: "config/auth/update",
              user_id: userId
            })));

          case 1:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function updateUser(_x4, _x5, _x6) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteUser =
/*#__PURE__*/
function () {
  var _ref4 = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee4(hass, userId) {
    return regeneratorRuntime.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            return _context4.abrupt("return", hass.callWS({
              type: "config/auth/delete",
              user_id: userId
            }));

          case 1:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function deleteUser(_x7, _x8) {
    return _ref4.apply(this, arguments);
  };
}();

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

/***/ "./src/panels/config/person/ha-config-person.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/person/ha-config-person.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var _data_person__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../data/person */ "./src/data/person.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _layouts_hass_loading_screen__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/hass-loading-screen */ "./src/layouts/hass-loading-screen.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./show-dialog-person-detail */ "./src/panels/config/person/show-dialog-person-detail.ts");
/* harmony import */ var _data_user__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../data/user */ "./src/data/user.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n      a {\n        color: var(--primary-color);\n      }\n      ha-card {\n        max-width: 600px;\n        margin: 16px auto;\n        overflow: hidden;\n      }\n      .empty {\n        text-align: center;\n        padding: 8px;\n      }\n      paper-item {\n        padding-top: 4px;\n        padding-bottom: 4px;\n      }\n      ha-card.storage paper-item {\n        cursor: pointer;\n      }\n      paper-fab {\n        position: fixed;\n        bottom: 16px;\n        right: 16px;\n        z-index: 1;\n      }\n\n      paper-fab[is-wide] {\n        bottom: 24px;\n        right: 24px;\n      }\n    "]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n                      <paper-item>\n                        <paper-item-body>\n                          ", "\n                        </paper-item-body>\n                      </paper-item>\n                    "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                <ha-card header=\"Configuration.yaml persons\">\n                  ", "\n                </ha-card>\n              "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                  <div class=\"empty\">\n                    Looks like you have not created any persons yet.\n                    <mwc-button @click=", ">\n                      CREATE PERSON</mwc-button\n                    >\n                  </div>\n                "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                <paper-item @click=", " .entry=", ">\n                  <paper-item-body>\n                    ", "\n                  </paper-item-body>\n                </paper-item>\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                  <p>\n                    Note: persons configured via configuration.yaml cannot be\n                    edited via the UI.\n                  </p>\n                "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <hass-subpage header=\"Persons\">\n        <ha-config-section .isWide=", ">\n          <span slot=\"header\">Persons</span>\n          <span slot=\"introduction\">\n            Here you can define each person of interest in ioBroker.\n            ", "\n          </span>\n          <ha-card class=\"storage\">\n            ", "\n            ", "\n          </ha-card>\n          ", "\n        </ha-config-section>\n      </hass-subpage>\n\n      <paper-fab\n        ?is-wide=", "\n        icon=\"hass:plus\"\n        title=\"Create Area\"\n        @click=", "\n      ></paper-fab>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <hass-loading-screen></hass-loading-screen>\n      "]);

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














var HaConfigPerson =
/*#__PURE__*/
function (_LitElement) {
  _inherits(HaConfigPerson, _LitElement);

  function HaConfigPerson() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HaConfigPerson);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaConfigPerson)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "isWide", void 0);

    _defineProperty(_assertThisInitialized(_this), "_storageItems", void 0);

    _defineProperty(_assertThisInitialized(_this), "_configItems", void 0);

    _defineProperty(_assertThisInitialized(_this), "_usersLoad", void 0);

    return _this;
  }

  _createClass(HaConfigPerson, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      if (!this.hass || this._storageItems === undefined || this._configItems === undefined) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
      }

      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.isWide, this._configItems.length > 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3()) : "", this._storageItems.map(function (entry) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), _this2._openEditEntry, entry, entry.name);
      }), this._storageItems.length === 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject5(), this._createPerson) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject6()), this._configItems.length > 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject7(), this._configItems.map(function (entry) {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject8(), entry.name);
      })) : "", this.isWide, this._createPerson);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated(changedProps) {
      _get(_getPrototypeOf(HaConfigPerson.prototype), "firstUpdated", this).call(this, changedProps);

      this._fetchData();

      Object(_show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__["loadPersonDetailDialog"])();
    }
  }, {
    key: "_fetchData",
    value: function () {
      var _fetchData2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var personData;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._usersLoad = Object(_data_user__WEBPACK_IMPORTED_MODULE_11__["fetchUsers"])(this.hass);
                _context.next = 3;
                return Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["fetchPersons"])(this.hass);

              case 3:
                personData = _context.sent;
                this._storageItems = personData.storage.sort(function (ent1, ent2) {
                  return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(ent1.name, ent2.name);
                });
                this._configItems = personData.config.sort(function (ent1, ent2) {
                  return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(ent1.name, ent2.name);
                });

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _fetchData() {
        return _fetchData2.apply(this, arguments);
      }

      return _fetchData;
    }()
  }, {
    key: "_createPerson",
    value: function _createPerson() {
      this._openDialog();
    }
  }, {
    key: "_openEditEntry",
    value: function _openEditEntry(ev) {
      var entry = ev.currentTarget.entry;

      this._openDialog(entry);
    }
  }, {
    key: "_allowedUsers",
    value: function _allowedUsers(users, currentPerson) {
      var used = new Set();

      for (var _i = 0, _arr = [this._configItems, this._storageItems]; _i < _arr.length; _i++) {
        var coll = _arr[_i];
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = coll[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var pers = _step.value;

            if (pers.user_id) {
              used.add(pers.user_id);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      var currentUserId = currentPerson ? currentPerson.user_id : undefined;
      return users.filter(function (user) {
        return user.id === currentUserId || !used.has(user.id);
      });
    }
  }, {
    key: "_openDialog",
    value: function () {
      var _openDialog2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee5(entry) {
        var _this3 = this;

        var users;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return this._usersLoad;

              case 2:
                users = _context5.sent;
                Object(_show_dialog_person_detail__WEBPACK_IMPORTED_MODULE_10__["showPersonDetailDialog"])(this, {
                  entry: entry,
                  users: this._allowedUsers(users, entry),
                  createEntry: function () {
                    var _createEntry = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee2(values) {
                      var created;
                      return regeneratorRuntime.wrap(function _callee2$(_context2) {
                        while (1) {
                          switch (_context2.prev = _context2.next) {
                            case 0:
                              _context2.next = 2;
                              return Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["createPerson"])(_this3.hass, values);

                            case 2:
                              created = _context2.sent;
                              _this3._storageItems = _this3._storageItems.concat(created).sort(function (ent1, ent2) {
                                return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(ent1.name, ent2.name);
                              });

                            case 4:
                            case "end":
                              return _context2.stop();
                          }
                        }
                      }, _callee2);
                    }));

                    function createEntry(_x2) {
                      return _createEntry.apply(this, arguments);
                    }

                    return createEntry;
                  }(),
                  updateEntry: function () {
                    var _updateEntry = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee3(values) {
                      var updated;
                      return regeneratorRuntime.wrap(function _callee3$(_context3) {
                        while (1) {
                          switch (_context3.prev = _context3.next) {
                            case 0:
                              _context3.next = 2;
                              return Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["updatePerson"])(_this3.hass, entry.id, values);

                            case 2:
                              updated = _context3.sent;
                              _this3._storageItems = _this3._storageItems.map(function (ent) {
                                return ent === entry ? updated : ent;
                              });

                            case 4:
                            case "end":
                              return _context3.stop();
                          }
                        }
                      }, _callee3);
                    }));

                    function updateEntry(_x3) {
                      return _updateEntry.apply(this, arguments);
                    }

                    return updateEntry;
                  }(),
                  removeEntry: function () {
                    var _removeEntry = _asyncToGenerator(
                    /*#__PURE__*/
                    regeneratorRuntime.mark(function _callee4() {
                      return regeneratorRuntime.wrap(function _callee4$(_context4) {
                        while (1) {
                          switch (_context4.prev = _context4.next) {
                            case 0:
                              if (confirm("Are you sure you want to delete this person?\n\nAll devices belonging to this person will become unassigned.")) {
                                _context4.next = 2;
                                break;
                              }

                              return _context4.abrupt("return", false);

                            case 2:
                              _context4.prev = 2;
                              _context4.next = 5;
                              return Object(_data_person__WEBPACK_IMPORTED_MODULE_4__["deletePerson"])(_this3.hass, entry.id);

                            case 5:
                              _this3._storageItems = _this3._storageItems.filter(function (ent) {
                                return ent !== entry;
                              });
                              return _context4.abrupt("return", true);

                            case 9:
                              _context4.prev = 9;
                              _context4.t0 = _context4["catch"](2);
                              return _context4.abrupt("return", false);

                            case 12:
                            case "end":
                              return _context4.stop();
                          }
                        }
                      }, _callee4, null, [[2, 9]]);
                    }));

                    function removeEntry() {
                      return _removeEntry.apply(this, arguments);
                    }

                    return removeEntry;
                  }()
                });

              case 4:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      function _openDialog(_x) {
        return _openDialog2.apply(this, arguments);
      }

      return _openDialog;
    }()
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        isWide: {},
        _storageItems: {},
        _configItems: {}
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject9());
    }
  }]);

  return HaConfigPerson;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("ha-config-person", HaConfigPerson);

/***/ }),

/***/ "./src/panels/config/person/show-dialog-person-detail.ts":
/*!***************************************************************!*\
  !*** ./src/panels/config/person/show-dialog-person-detail.ts ***!
  \***************************************************************/
/*! exports provided: loadPersonDetailDialog, showPersonDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadPersonDetailDialog", function() { return loadPersonDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showPersonDetailDialog", function() { return showPersonDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadPersonDetailDialog = function loadPersonDetailDialog() {
  return Promise.all(/*! import() | person-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~8d022d61"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~entity-registry-detail-dialog~more-info-dialog~panel-config-auto~58812f3e"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~60eddf8d"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~704fb8c7"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~person-detail-dialog"), __webpack_require__.e("hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-card-edi~530c088e"), __webpack_require__.e("more-info-dialog~panel-config-automation~panel-config-cloud~panel-config-entity-registry~panel-confi~13c426ad"), __webpack_require__.e(0), __webpack_require__.e("person-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-person-detail */ "./src/panels/config/person/dialog-person-detail.ts"));
};
var showPersonDetailDialog = function showPersonDetailDialog(element, systemLogDetailParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-person-detail",
    dialogImport: loadPersonDetailDialog,
    dialogParams: systemLogDetailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=panel-config-person.chunk.js.map