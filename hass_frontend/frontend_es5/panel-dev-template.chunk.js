(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-dev-template"],{

/***/ "./src/panels/dev-template/ha-panel-dev-template.js":
/*!**********************************************************!*\
  !*** ./src/panels/dev-template/ha-panel-dev-template.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style iron-flex iron-positioning\"></style>\n      <style>\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 16px;\n          direction: ltr;\n        }\n\n        .edit-pane {\n          margin-right: 16px;\n        }\n\n        .edit-pane a {\n          color: var(--dark-primary-color);\n        }\n\n        .horizontal .edit-pane {\n          max-width: 50%;\n        }\n\n        .render-pane {\n          position: relative;\n          max-width: 50%;\n        }\n\n        .render-spinner {\n          position: absolute;\n          top: 8px;\n          right: 8px;\n        }\n\n        paper-textarea {\n          --paper-input-container-input: {\n            @apply --paper-font-code1;\n          }\n        }\n\n        .rendered {\n          @apply --paper-font-code1;\n          clear: both;\n          white-space: pre-wrap;\n        }\n\n        .rendered.error {\n          color: red;\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button></ha-menu-button>\n            <div main-title>Templates</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class$=\"[[computeFormClasses(narrow)]]\">\n          <div class=\"edit-pane\">\n            <p>\n              Templates are rendered using the Jinja2 template engine with some\n              ioBroker specific extensions.\n            </p>\n            <ul>\n              <li>\n                <a\n                  href=\"http://jinja.pocoo.org/docs/dev/templates/\"\n                  target=\"_blank\"\n                  >Jinja2 template documentation</a\n                >\n              </li>\n              <li>\n                <a\n                  href=\"https://home-assistant.io/docs/configuration/templating/\"\n                  target=\"_blank\"\n                  >ioBroker template extensions</a\n                >\n              </li>\n            </ul>\n            <paper-textarea\n              label=\"Template editor\"\n              value=\"{{template}}\"\n              autofocus\n            ></paper-textarea>\n          </div>\n\n          <div class=\"render-pane\">\n            <paper-spinner\n              class=\"render-spinner\"\n              active=\"[[rendering]]\"\n            ></paper-spinner>\n            <pre class$=\"[[computeRenderedClasses(error)]]\">[[processed]]</pre>\n          </div>\n        </div>\n      </app-header-layout>\n    "]);

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













var HaPanelDevTemplate =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaPanelDevTemplate, _PolymerElement);

  function HaPanelDevTemplate() {
    _classCallCheck(this, HaPanelDevTemplate);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelDevTemplate).apply(this, arguments));
  }

  _createClass(HaPanelDevTemplate, [{
    key: "computeFormClasses",
    value: function computeFormClasses(narrow) {
      return narrow ? "content fit" : "content fit layout horizontal";
    }
  }, {
    key: "computeRenderedClasses",
    value: function computeRenderedClasses(error) {
      return error ? "error rendered" : "rendered";
    }
  }, {
    key: "templateChanged",
    value: function templateChanged() {
      var _this = this;

      if (this.error) {
        this.error = false;
      }

      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(500), function () {
        _this.renderTemplate();
      });
    }
  }, {
    key: "renderTemplate",
    value: function renderTemplate() {
      this.rendering = true;
      this.hass.callApi("POST", "template", {
        template: this.template
      }).then(function (processed) {
        this.processed = processed;
        this.rendering = false;
      }.bind(this), function (error) {
        this.processed = error && error.body && error.body.message || "Unknown error rendering template";
        this.error = true;
        this.rendering = false;
      }.bind(this));
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
        error: {
          type: Boolean,
          value: false
        },
        rendering: {
          type: Boolean,
          value: false
        },
        template: {
          type: String,

          /* eslint-disable max-len */
          value: "Imitate available variables:\n{% set my_test_json = {\n  \"temperature\": 25,\n  \"unit\": \"\xB0C\"\n} %}\n\nThe temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.\n\n{% if is_state(\"device_tracker.paulus\", \"home\") and\n      is_state(\"device_tracker.anne_therese\", \"home\") -%}\n  You are both home, you silly\n{%- else -%}\n  Anne Therese is at {{ states(\"device_tracker.anne_therese\") }}\n  Paulus is at {{ states(\"device_tracker.paulus\") }}\n{%- endif %}\n\nFor loop example:\n{% for state in states.sensor -%}\n  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}\n  {{ state.name | lower }} is {{state.state_with_unit}}\n{%- endfor %}.",

          /* eslint-enable max-len */
          observer: "templateChanged"
        },
        processed: {
          type: String,
          value: ""
        }
      };
    }
  }]);

  return HaPanelDevTemplate;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"]);

customElements.define("ha-panel-dev-template", HaPanelDevTemplate);

/***/ })

}]);
//# sourceMappingURL=panel-dev-template.chunk.js.map