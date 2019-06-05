(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ha-dialog-add-user"],{

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


var HaIronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // tslint:disable-next-line

var paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

var haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["HaIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore

var HaPaperDialog =
/*#__PURE__*/
function (_mixinBehaviors) {
  _inherits(HaPaperDialog, _mixinBehaviors);

  function HaPaperDialog() {
    _classCallCheck(this, HaPaperDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperDialog).apply(this, arguments));
  }

  return HaPaperDialog;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass));
customElements.define("ha-paper-dialog", HaPaperDialog);

/***/ }),

/***/ "./src/panels/config/users/ha-dialog-add-user.js":
/*!*******************************************************!*\
  !*** ./src/panels/config/users/ha-dialog-add-user.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog\">\n        .error {\n          color: red;\n        }\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        .username {\n          margin-top: -8px;\n        }\n      </style>\n      <ha-paper-dialog\n        id=\"dialog\"\n        with-backdrop\n        opened=\"{{_opened}}\"\n        on-opened-changed=\"_openedChanged\"\n      >\n        <h2>[[localize('ui.panel.config.users.add_user.caption')]]</h2>\n        <div>\n          <template is=\"dom-if\" if=\"[[_errorMsg]]\">\n            <div class=\"error\">[[_errorMsg]]</div>\n          </template>\n          <paper-input\n            class=\"name\"\n            label=\"[[localize('ui.panel.config.users.add_user.name')]]\"\n            value=\"{{_name}}\"\n            required\n            auto-validate\n            autocapitalize=\"on\"\n            error-message=\"Required\"\n            on-blur=\"_maybePopulateUsername\"\n          ></paper-input>\n          <paper-input\n            class=\"username\"\n            label=\"[[localize('ui.panel.config.users.add_user.username')]]\"\n            value=\"{{_username}}\"\n            required\n            auto-validate\n            autocapitalize=\"none\"\n            error-message=\"Required\"\n          ></paper-input>\n          <paper-input\n            label=\"[[localize('ui.panel.config.users.add_user.password')]]\"\n            type=\"password\"\n            value=\"{{_password}}\"\n            required\n            auto-validate\n            error-message=\"Required\"\n          ></paper-input>\n        </div>\n        <div class=\"buttons\">\n          <template is=\"dom-if\" if=\"[[_loading]]\">\n            <div class=\"submit-spinner\">\n              <paper-spinner active></paper-spinner>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!_loading]]\">\n            <mwc-button on-click=\"_createUser\"\n              >[[localize('ui.panel.config.users.add_user.create')]]</mwc-button\n            >\n          </template>\n        </div>\n      </ha-paper-dialog>\n    "]);

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








/*
 * @appliesMixin LocalizeMixin
 */

var HaDialogAddUser =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaDialogAddUser, _LocalizeMixin);

  function HaDialogAddUser() {
    _classCallCheck(this, HaDialogAddUser);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaDialogAddUser).apply(this, arguments));
  }

  _createClass(HaDialogAddUser, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaDialogAddUser.prototype), "ready", this).call(this);

      this.addEventListener("keypress", function (ev) {
        if (ev.keyCode === 13) {
          _this._createUser(ev);
        }
      });
    }
  }, {
    key: "showDialog",
    value: function showDialog(_ref) {
      var _this2 = this;

      var hass = _ref.hass,
          dialogClosedCallback = _ref.dialogClosedCallback;
      this.hass = hass;
      this._dialogClosedCallback = dialogClosedCallback;
      this._loading = false;
      this._opened = true;
      setTimeout(function () {
        return _this2.shadowRoot.querySelector("paper-input").focus();
      }, 0);
    }
  }, {
    key: "_maybePopulateUsername",
    value: function _maybePopulateUsername() {
      if (this._username) return;

      var parts = this._name.split(" ");

      if (parts.length) {
        this._username = parts[0].toLowerCase();
      }
    }
  }, {
    key: "_createUser",
    value: function () {
      var _createUser2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        var userId, userResponse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                ev.preventDefault();

                if (!(!this._name || !this._username || !this._password)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                this._loading = true;
                this._errorMsg = null;
                _context.prev = 5;
                _context.next = 8;
                return this.hass.callWS({
                  type: "config/auth/create",
                  name: this._name
                });

              case 8:
                userResponse = _context.sent;
                userId = userResponse.user.id;
                _context.next = 17;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](5);
                this._loading = false;
                this._errorMsg = _context.t0.code;
                return _context.abrupt("return");

              case 17:
                _context.prev = 17;
                _context.next = 20;
                return this.hass.callWS({
                  type: "config/auth_provider/homeassistant/create",
                  user_id: userId,
                  username: this._username,
                  password: this._password
                });

              case 20:
                _context.next = 29;
                break;

              case 22:
                _context.prev = 22;
                _context.t1 = _context["catch"](17);
                this._loading = false;
                this._errorMsg = _context.t1.code;
                _context.next = 28;
                return this.hass.callWS({
                  type: "config/auth/delete",
                  user_id: userId
                });

              case 28:
                return _context.abrupt("return");

              case 29:
                this._dialogDone(userId);

              case 30:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[5, 12], [17, 22]]);
      }));

      function _createUser(_x) {
        return _createUser2.apply(this, arguments);
      }

      return _createUser;
    }()
  }, {
    key: "_dialogDone",
    value: function _dialogDone(userId) {
      this._dialogClosedCallback({
        userId: userId
      });

      this.setProperties({
        _errorMsg: null,
        _username: "",
        _password: "",
        _dialogClosedCallback: null,
        _opened: false
      });
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_openedChanged",
    value: function _openedChanged(ev) {
      // Closed dialog by clicking on the overlay
      // Check against dialogClosedCallback to make sure we didn't change
      // programmatically
      if (this._dialogClosedCallback && !ev.detail.value) {
        this._dialogDone();
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
        _hass: Object,
        _dialogClosedCallback: Function,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _errorMsg: String,
        _opened: {
          type: Boolean,
          value: false
        },
        _name: String,
        _username: String,
        _password: String
      };
    }
  }]);

  return HaDialogAddUser;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-dialog-add-user", HaDialogAddUser);

/***/ })

}]);
//# sourceMappingURL=ha-dialog-add-user.chunk.js.map