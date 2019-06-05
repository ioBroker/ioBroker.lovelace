(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lovelace-yaml-editor"],{

/***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
  if (typeof value !== "string") {
    return "entity id should be a string";
  }

  if (!value.includes(".")) {
    return "entity id should be in the format 'domain.entity'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/is-icon.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
  if (typeof value !== "string") {
    return "icon should be a string";
  }

  if (!value.includes(":")) {
    return "icon should be in the format 'mdi:icon'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/struct.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts");



var struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
  types: {
    "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
    icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"]
  }
});

/***/ }),

/***/ "./src/panels/lovelace/hui-editor.ts":
/*!*******************************************!*\
  !*** ./src/panels/lovelace/hui-editor.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_hui_yaml_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hui-yaml-editor */ "./src/panels/lovelace/components/hui-yaml-editor.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          --code-mirror-height: 100%;\n        }\n\n        app-header-layout {\n          height: 100vh;\n        }\n\n        app-toolbar {\n          background-color: var(--dark-background-color, #455a64);\n          color: var(--dark-text-color);\n        }\n\n        .comments {\n          font-size: 16px;\n        }\n\n        .content {\n          height: calc(100vh - 68px);\n        }\n\n        hui-code-editor {\n          height: 100%;\n        }\n\n        .save-button {\n          opacity: 0;\n          font-size: 14px;\n          padding: 0px 10px;\n        }\n\n        .saved {\n          opacity: 1;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <app-header-layout>\n        <app-header>\n          <app-toolbar>\n            <paper-icon-button\n              icon=\"hass:close\"\n              @click=\"", "\"\n            ></paper-icon-button>\n            <div main-title>\n              ", "\n            </div>\n            <div\n              class=\"save-button\n              ", "\"\n            >\n              ", "\n            </div>\n            <mwc-button raised @click=\"", "\"\n              >", "</mwc-button\n            >\n          </app-toolbar>\n        </app-header>\n        <div class=\"content\">\n          <hui-yaml-editor\n            .hass=\"", "\"\n            @yaml-changed=\"", "\"\n            @yaml-save=\"", "\"\n          >\n          </hui-yaml-editor>\n        </div>\n      </app-header-layout>\n    "]);

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













 // This is not a duplicate import, one is for types, one is for element.
// tslint:disable-next-line

var lovelaceStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"]["interface"]({
  title: "string?",
  views: ["object"],
  resources: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(["object"])
});

var LovelaceFullConfigEditor =
/*#__PURE__*/
function (_LitElement) {
  _inherits(LovelaceFullConfigEditor, _LitElement);

  function LovelaceFullConfigEditor() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LovelaceFullConfigEditor);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LovelaceFullConfigEditor)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "lovelace", void 0);

    _defineProperty(_assertThisInitialized(_this), "closeEditor", void 0);

    _defineProperty(_assertThisInitialized(_this), "_saving", void 0);

    _defineProperty(_assertThisInitialized(_this), "_changed", void 0);

    _defineProperty(_assertThisInitialized(_this), "_generation", void 0);

    return _this;
  }

  _createClass(LovelaceFullConfigEditor, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this._closeEditor, this.hass.localize("ui.panel.lovelace.editor.raw_editor.header"), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
        saved: this._saving === false || this._changed === true
      }), this._changed ? this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes") : this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved"), this._handleSave, this.hass.localize("ui.panel.lovelace.editor.raw_editor.save"), this.hass, this._yamlChanged, this._handleSave);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.yamlEditor.value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeDump(this.lovelace.config);
      this.yamlEditor.codemirror.clearHistory();
      this._generation = this.yamlEditor.codemirror.changeGeneration(true);
    }
  }, {
    key: "_yamlChanged",
    value: function _yamlChanged() {
      if (!this._generation) {
        return;
      }

      this._changed = !this.yamlEditor.codemirror.isClean(this._generation);

      if (this._changed && !window.onbeforeunload) {
        window.onbeforeunload = function () {
          return true;
        };
      } else if (!this._changed && window.onbeforeunload) {
        window.onbeforeunload = null;
      }
    }
  }, {
    key: "_closeEditor",
    value: function _closeEditor() {
      if (this._changed) {
        if (!confirm("You have unsaved changes, are you sure you want to exit?")) {
          return;
        }
      }

      window.onbeforeunload = null;

      if (this.closeEditor) {
        this.closeEditor();
      }
    }
  }, {
    key: "_handleSave",
    value: function () {
      var _handleSave2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var value;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._saving = true;

                if (!this.yamlEditor.hasComments) {
                  _context.next = 4;
                  break;
                }

                if (confirm("Your config contains comment(s), these will not be saved. Do you want to continue?")) {
                  _context.next = 4;
                  break;
                }

                return _context.abrupt("return");

              case 4:
                _context.prev = 4;
                value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(this.yamlEditor.value);
                _context.next = 13;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](4);
                alert("Unable to parse YAML: ".concat(_context.t0));
                this._saving = false;
                return _context.abrupt("return");

              case 13:
                _context.prev = 13;
                value = lovelaceStruct(value);
                _context.next = 21;
                break;

              case 17:
                _context.prev = 17;
                _context.t1 = _context["catch"](13);
                alert("Your config is not valid: ".concat(_context.t1));
                return _context.abrupt("return");

              case 21:
                _context.prev = 21;
                _context.next = 24;
                return this.lovelace.saveConfig(value);

              case 24:
                _context.next = 29;
                break;

              case 26:
                _context.prev = 26;
                _context.t2 = _context["catch"](21);
                alert("Unable to save YAML: ".concat(_context.t2));

              case 29:
                this._generation = this.yamlEditor.codemirror.changeGeneration(true);
                window.onbeforeunload = null;
                this._saving = false;
                this._changed = false;

              case 33:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[4, 8], [13, 17], [21, 26]]);
      }));

      function _handleSave() {
        return _handleSave2.apply(this, arguments);
      }

      return _handleSave;
    }()
  }, {
    key: "yamlEditor",
    get: function get() {
      return this.shadowRoot.querySelector("hui-yaml-editor");
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        lovelace: {},
        closeEditor: {},
        _saving: {},
        _changed: {}
      };
    }
  }, {
    key: "styles",
    get: function get() {
      return [_resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"], Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject2())];
    }
  }]);

  return LovelaceFullConfigEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("hui-editor", LovelaceFullConfigEditor);

/***/ })

}]);
//# sourceMappingURL=lovelace-yaml-editor.chunk.js.map