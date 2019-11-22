(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["lovelace-yaml-editor"],{

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
/* harmony import */ var _components_ha_code_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-code-editor */ "./src/components/ha-code-editor.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          --code-mirror-height: 100%;\n        }\n\n        app-header-layout {\n          height: 100vh;\n        }\n\n        app-toolbar {\n          background-color: var(--dark-background-color, #455a64);\n          color: var(--dark-text-color);\n        }\n\n        .comments {\n          font-size: 16px;\n        }\n\n        .content {\n          height: calc(100vh - 68px);\n        }\n\n        hui-code-editor {\n          height: 100%;\n        }\n\n        .save-button {\n          opacity: 0;\n          font-size: 14px;\n          padding: 0px 10px;\n        }\n\n        .saved {\n          opacity: 1;\n        }\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <app-header-layout>\n        <app-header>\n          <app-toolbar>\n            <paper-icon-button\n              icon=\"hass:close\"\n              @click=\"", "\"\n            ></paper-icon-button>\n            <div main-title>\n              ", "\n            </div>\n            <div\n              class=\"save-button\n              ", "\"\n            >\n              ", "\n            </div>\n            <mwc-button raised @click=\"", "\"\n              >", "</mwc-button\n            >\n          </app-toolbar>\n        </app-header>\n        <div class=\"content\">\n          <ha-code-editor\n            mode=\"yaml\"\n            autofocus\n            .rtl=", "\n            .hass=\"", "\"\n            @value-changed=\"", "\"\n            @editor-save=\"", "\"\n          >\n          </ha-code-editor>\n        </div>\n      </app-header-layout>\n    "]);

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

    _defineProperty(_assertThisInitialized(_this), "_generation", 1);

    return _this;
  }

  _createClass(LovelaceFullConfigEditor, [{
    key: "render",
    value: function render() {
      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this._closeEditor, this.hass.localize("ui.panel.lovelace.editor.raw_editor.header"), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
        saved: this._saving === false || this._changed === true
      }), this._changed ? this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes") : this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved"), this._handleSave, this.hass.localize("ui.panel.lovelace.editor.raw_editor.save"), Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_13__["computeRTL"])(this.hass), this.hass, this._yamlChanged, this._handleSave);
    }
  }, {
    key: "firstUpdated",
    value: function firstUpdated() {
      this.yamlEditor.value = Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeDump"])(this.lovelace.config);
    }
  }, {
    key: "_yamlChanged",
    value: function _yamlChanged() {
      this._changed = !this.yamlEditor.codemirror.getDoc().isClean(this._generation);

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
        if (!confirm(this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_changes"))) {
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
    value: function _handleSave() {
      var value;
      return regeneratorRuntime.async(function _handleSave$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              this._saving = true;

              if (!this.yamlEditor.hasComments) {
                _context.next = 4;
                break;
              }

              if (confirm(this.hass.localize("ui.panel.lovelace.editor.raw_editor.confirm_unsaved_comments"))) {
                _context.next = 4;
                break;
              }

              return _context.abrupt("return");

            case 4:
              _context.prev = 4;
              value = Object(js_yaml__WEBPACK_IMPORTED_MODULE_2__["safeLoad"])(this.yamlEditor.value);
              _context.next = 13;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](4);
              alert(this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_parse_yaml", "error", _context.t0));
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
              alert(this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_invalid_config", "error", _context.t1));
              return _context.abrupt("return");

            case 21:
              _context.prev = 21;
              _context.next = 24;
              return regeneratorRuntime.awrap(this.lovelace.saveConfig(value));

            case 24:
              _context.next = 29;
              break;

            case 26:
              _context.prev = 26;
              _context.t2 = _context["catch"](21);
              alert(this.hass.localize("ui.panel.lovelace.editor.raw_editor.error_save_yaml", "error", _context.t2));

            case 29:
              this._generation = this.yamlEditor.codemirror.getDoc().changeGeneration(true);
              window.onbeforeunload = null;
              this._saving = false;
              this._changed = false;

            case 33:
            case "end":
              return _context.stop();
          }
        }
      }, null, this, [[4, 8], [13, 17], [21, 26]]);
    }
  }, {
    key: "yamlEditor",
    get: function get() {
      return this.shadowRoot.querySelector("ha-code-editor");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG92ZWxhY2UteWFtbC1lZGl0b3IuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWVudGl0eS1pZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbW1vbi9zdHJ1Y3RzL2lzLWljb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9jb21tb24vc3RydWN0cy9zdHJ1Y3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BhbmVscy9sb3ZlbGFjZS9odWktZWRpdG9yLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBpc0VudGl0eUlkKHZhbHVlOiBhbnkpOiBzdHJpbmcgfCBib29sZWFuIHtcbiAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiLlwiKSkge1xuICAgIHJldHVybiBcImVudGl0eSBpZCBzaG91bGQgYmUgaW4gdGhlIGZvcm1hdCAnZG9tYWluLmVudGl0eSdcIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0ljb24odmFsdWU6IGFueSk6IHN0cmluZyB8IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIFwiaWNvbiBzaG91bGQgYmUgYSBzdHJpbmdcIjtcbiAgfVxuICBpZiAoIXZhbHVlLmluY2x1ZGVzKFwiOlwiKSkge1xuICAgIHJldHVybiBcImljb24gc2hvdWxkIGJlIGluIHRoZSBmb3JtYXQgJ21kaTppY29uJ1wiO1xuICB9XG4gIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHsgc3VwZXJzdHJ1Y3QgfSBmcm9tIFwic3VwZXJzdHJ1Y3RcIjtcbmltcG9ydCB7IGlzRW50aXR5SWQgfSBmcm9tIFwiLi9pcy1lbnRpdHktaWRcIjtcbmltcG9ydCB7IGlzSWNvbiB9IGZyb20gXCIuL2lzLWljb25cIjtcblxuZXhwb3J0IGNvbnN0IHN0cnVjdCA9IHN1cGVyc3RydWN0KHtcbiAgdHlwZXM6IHtcbiAgICBcImVudGl0eS1pZFwiOiBpc0VudGl0eUlkLFxuICAgIGljb246IGlzSWNvbixcbiAgfSxcbn0pO1xuIiwiaW1wb3J0IHsgTGl0RWxlbWVudCwgaHRtbCwgVGVtcGxhdGVSZXN1bHQsIENTU1Jlc3VsdCwgY3NzIH0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgc2FmZUR1bXAsIHNhZmVMb2FkIH0gZnJvbSBcImpzLXlhbWxcIjtcblxuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyLWxheW91dC9hcHAtaGVhZGVyLWxheW91dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvYXBwLWxheW91dC9hcHAtaGVhZGVyL2FwcC1oZWFkZXJcIjtcbmltcG9ydCBcIkBwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXJcIjtcbmltcG9ydCBcIkBtYXRlcmlhbC9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5cbmltcG9ydCB7IHN0cnVjdCB9IGZyb20gXCIuL2NvbW1vbi9zdHJ1Y3RzL3N0cnVjdFwiO1xuaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG5pbXBvcnQgXCIuLi8uLi9jb21wb25lbnRzL2hhLWljb25cIjtcbmltcG9ydCB7IGhhU3R5bGUgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9oYS1jb2RlLWVkaXRvclwiO1xuLy8gVGhpcyBpcyBub3QgYSBkdXBsaWNhdGUgaW1wb3J0LCBvbmUgaXMgZm9yIHR5cGVzLCBvbmUgaXMgZm9yIGVsZW1lbnQuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbmltcG9ydCB7IEhhQ29kZUVkaXRvciB9IGZyb20gXCIuLi8uLi9jb21wb25lbnRzL2hhLWNvZGUtZWRpdG9yXCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNvbnN0IGxvdmVsYWNlU3RydWN0ID0gc3RydWN0LmludGVyZmFjZSh7XG4gIHRpdGxlOiBcInN0cmluZz9cIixcbiAgdmlld3M6IFtcIm9iamVjdFwiXSxcbiAgcmVzb3VyY2VzOiBzdHJ1Y3Qub3B0aW9uYWwoW1wib2JqZWN0XCJdKSxcbn0pO1xuXG5jbGFzcyBMb3ZlbGFjZUZ1bGxDb25maWdFZGl0b3IgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBwdWJsaWMgbG92ZWxhY2U/OiBMb3ZlbGFjZTtcbiAgcHVibGljIGNsb3NlRWRpdG9yPzogKCkgPT4gdm9pZDtcbiAgcHJpdmF0ZSBfc2F2aW5nPzogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfY2hhbmdlZD86IGJvb2xlYW47XG4gIHByaXZhdGUgX2dlbmVyYXRpb24gPSAxO1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge30sXG4gICAgICBsb3ZlbGFjZToge30sXG4gICAgICBjbG9zZUVkaXRvcjoge30sXG4gICAgICBfc2F2aW5nOiB7fSxcbiAgICAgIF9jaGFuZ2VkOiB7fSxcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGFwcC1oZWFkZXItbGF5b3V0PlxuICAgICAgICA8YXBwLWhlYWRlcj5cbiAgICAgICAgICA8YXBwLXRvb2xiYXI+XG4gICAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgICAgaWNvbj1cImhhc3M6Y2xvc2VcIlxuICAgICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2Nsb3NlRWRpdG9yfVwiXG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxkaXYgbWFpbi10aXRsZT5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuaGVhZGVyXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBjbGFzcz1cInNhdmUtYnV0dG9uXG4gICAgICAgICAgICAgICR7Y2xhc3NNYXAoe1xuICAgICAgICAgICAgICAgIHNhdmVkOiB0aGlzLl9zYXZpbmchID09PSBmYWxzZSB8fCB0aGlzLl9jaGFuZ2VkID09PSB0cnVlLFxuICAgICAgICAgICAgICB9KX1cIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAke3RoaXMuX2NoYW5nZWRcbiAgICAgICAgICAgICAgICA/IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IudW5zYXZlZF9jaGFuZ2VzXCJcbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICA6IHRoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZWRcIlxuICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPG13Yy1idXR0b24gcmFpc2VkIEBjbGljaz1cIiR7dGhpcy5faGFuZGxlU2F2ZX1cIlxuICAgICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3Iuc2F2ZVwiXG4gICAgICAgICAgICAgICl9PC9td2MtYnV0dG9uXG4gICAgICAgICAgICA+XG4gICAgICAgICAgPC9hcHAtdG9vbGJhcj5cbiAgICAgICAgPC9hcHAtaGVhZGVyPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxuICAgICAgICAgIDxoYS1jb2RlLWVkaXRvclxuICAgICAgICAgICAgbW9kZT1cInlhbWxcIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgICAucnRsPSR7Y29tcHV0ZVJUTCh0aGlzLmhhc3MpfVxuICAgICAgICAgICAgLmhhc3M9XCIke3RoaXMuaGFzc31cIlxuICAgICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9XCIke3RoaXMuX3lhbWxDaGFuZ2VkfVwiXG4gICAgICAgICAgICBAZWRpdG9yLXNhdmU9XCIke3RoaXMuX2hhbmRsZVNhdmV9XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgPC9oYS1jb2RlLWVkaXRvcj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2FwcC1oZWFkZXItbGF5b3V0PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKCkge1xuICAgIHRoaXMueWFtbEVkaXRvci52YWx1ZSA9IHNhZmVEdW1wKHRoaXMubG92ZWxhY2UhLmNvbmZpZyk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGUsXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICAtLWNvZGUtbWlycm9yLWhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuXG4gICAgICAgIGFwcC1oZWFkZXItbGF5b3V0IHtcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgICB9XG5cbiAgICAgICAgYXBwLXRvb2xiYXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWRhcmstYmFja2dyb3VuZC1jb2xvciwgIzQ1NWE2NCk7XG4gICAgICAgICAgY29sb3I6IHZhcigtLWRhcmstdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY29tbWVudHMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5jb250ZW50IHtcbiAgICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSA2OHB4KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGh1aS1jb2RlLWVkaXRvciB7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNhdmUtYnV0dG9uIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zYXZlZCB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG5cbiAgcHJpdmF0ZSBfeWFtbENoYW5nZWQoKSB7XG4gICAgdGhpcy5fY2hhbmdlZCA9ICF0aGlzLnlhbWxFZGl0b3JcbiAgICAgIC5jb2RlbWlycm9yIS5nZXREb2MoKVxuICAgICAgLmlzQ2xlYW4odGhpcy5fZ2VuZXJhdGlvbik7XG4gICAgaWYgKHRoaXMuX2NoYW5nZWQgJiYgIXdpbmRvdy5vbmJlZm9yZXVubG9hZCkge1xuICAgICAgd2luZG93Lm9uYmVmb3JldW5sb2FkID0gKCkgPT4ge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICghdGhpcy5fY2hhbmdlZCAmJiB3aW5kb3cub25iZWZvcmV1bmxvYWQpIHtcbiAgICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2xvc2VFZGl0b3IoKSB7XG4gICAgaWYgKHRoaXMuX2NoYW5nZWQpIHtcbiAgICAgIGlmIChcbiAgICAgICAgIWNvbmZpcm0oXG4gICAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IucmF3X2VkaXRvci5jb25maXJtX3Vuc2F2ZWRfY2hhbmdlc1wiXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICB3aW5kb3cub25iZWZvcmV1bmxvYWQgPSBudWxsO1xuICAgIGlmICh0aGlzLmNsb3NlRWRpdG9yKSB7XG4gICAgICB0aGlzLmNsb3NlRWRpdG9yKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfaGFuZGxlU2F2ZSgpIHtcbiAgICB0aGlzLl9zYXZpbmcgPSB0cnVlO1xuXG4gICAgaWYgKHRoaXMueWFtbEVkaXRvci5oYXNDb21tZW50cykge1xuICAgICAgaWYgKFxuICAgICAgICAhY29uZmlybShcbiAgICAgICAgICB0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5yYXdfZWRpdG9yLmNvbmZpcm1fdW5zYXZlZF9jb21tZW50c1wiXG4gICAgICAgICAgKVxuICAgICAgICApXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxldCB2YWx1ZTtcbiAgICB0cnkge1xuICAgICAgdmFsdWUgPSBzYWZlTG9hZCh0aGlzLnlhbWxFZGl0b3IudmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoXG4gICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5yYXdfZWRpdG9yLmVycm9yX3BhcnNlX3lhbWxcIixcbiAgICAgICAgICBcImVycm9yXCIsXG4gICAgICAgICAgZXJyXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgICB0aGlzLl9zYXZpbmcgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gbG92ZWxhY2VTdHJ1Y3QodmFsdWUpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgYWxlcnQoXG4gICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5yYXdfZWRpdG9yLmVycm9yX2ludmFsaWRfY29uZmlnXCIsXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIGVyclxuICAgICAgICApXG4gICAgICApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgYXdhaXQgdGhpcy5sb3ZlbGFjZSEuc2F2ZUNvbmZpZyh2YWx1ZSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChcbiAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwubG92ZWxhY2UuZWRpdG9yLnJhd19lZGl0b3IuZXJyb3Jfc2F2ZV95YW1sXCIsXG4gICAgICAgICAgXCJlcnJvclwiLFxuICAgICAgICAgIGVyclxuICAgICAgICApXG4gICAgICApO1xuICAgIH1cbiAgICB0aGlzLl9nZW5lcmF0aW9uID0gdGhpcy55YW1sRWRpdG9yXG4gICAgICAuY29kZW1pcnJvciEuZ2V0RG9jKClcbiAgICAgIC5jaGFuZ2VHZW5lcmF0aW9uKHRydWUpO1xuICAgIHdpbmRvdy5vbmJlZm9yZXVubG9hZCA9IG51bGw7XG4gICAgdGhpcy5fc2F2aW5nID0gZmFsc2U7XG4gICAgdGhpcy5fY2hhbmdlZCA9IGZhbHNlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgeWFtbEVkaXRvcigpOiBIYUNvZGVFZGl0b3Ige1xuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QhLnF1ZXJ5U2VsZWN0b3IoXCJoYS1jb2RlLWVkaXRvclwiKSEgYXMgSGFDb2RlRWRpdG9yO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJodWktZWRpdG9yXCI6IExvdmVsYWNlRnVsbENvbmZpZ0VkaXRvcjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJodWktZWRpdG9yXCIsIExvdmVsYWNlRnVsbENvbmZpZ0VkaXRvcik7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBTUE7QUFDQTs7Ozs7O0FBV0E7QUFDQTtBQWdCQTtBQURBO0FBZ0NBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQTRDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7OztBQUVBOzs7Ozs7Ozs7QUFZQTs7Ozs7OztBQUVBO0FBT0E7Ozs7O0FBSUE7Ozs7Ozs7QUFFQTs7Ozs7O0FBVUE7QUFDQTs7Ozs7Ozs7QUFDQTtBQUNBOztBQU9BO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7QUFFQTtBQUNBO0FBQ0E7OztBQXZNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7OztBQXdEQTtBQUNBO0FBdUNBOzs7O0FBaEhBO0FBQ0E7QUF1TkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==