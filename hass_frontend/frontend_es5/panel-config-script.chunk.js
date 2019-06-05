(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-script"],{

/***/ "./src/data/script.ts":
/*!****************************!*\
  !*** ./src/data/script.ts ***!
  \****************************/
/*! exports provided: triggerScript, deleteScript */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "triggerScript", function() { return triggerScript; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScript", function() { return deleteScript; });
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");

var triggerScript = function triggerScript(hass, entityId, variables) {
  return hass.callService("script", Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"])(entityId), variables);
};
var deleteScript = function deleteScript(hass, objectId) {
  return hass.callApi("DELETE", "config/script/config/".concat(objectId));
};

/***/ }),

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
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
        key: "navigate",
        value: function navigate() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"].apply(void 0, [this].concat(args));
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/config/js/script.js":
/*!****************************************!*\
  !*** ./src/panels/config/js/script.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScriptEditor; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var ScriptEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(ScriptEditor, _Component);

  function ScriptEditor() {
    var _this;

    _classCallCheck(this, ScriptEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ScriptEditor).call(this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.sequenceChanged = _this.sequenceChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ScriptEditor, [{
    key: "onChange",
    value: function onChange(ev) {
      this.props.onChange(Object.assign({}, this.props.script, _defineProperty({}, ev.target.name, ev.target.value)));
    }
  }, {
    key: "sequenceChanged",
    value: function sequenceChanged(sequence) {
      this.props.onChange(Object.assign({}, this.props.script, {
        sequence: sequence
      }));
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var script = _ref.script,
          isWide = _ref.isWide,
          hass = _ref.hass,
          localize = _ref.localize;
      var alias = script.alias,
          sequence = script.sequence;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
        "is-wide": isWide
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "header"
      }, alias), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "introduction"
      }, "Use scripts to execute a sequence of actions."), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: "Name",
        name: "alias",
        value: alias,
        "onvalue-changed": this.onChange
      })))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
        "is-wide": isWide
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "header"
      }, "Sequence"), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "introduction"
      }, "The sequence of actions of this script.", Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: "https://home-assistant.io/docs/scripts/",
        target: "_blank"
      }, "Learn more about available actions."))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
        script: sequence,
        onChange: this.sequenceChanged,
        hass: hass,
        localize: localize
      })));
    }
  }]);

  return ScriptEditor;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/panels/config/script/ha-config-script.js":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-config-script.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_script_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-script-editor */ "./src/panels/config/script/ha-script-editor.js");
/* harmony import */ var _ha_script_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-script-picker */ "./src/panels/config/script/ha-script-picker.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-script-picker,\n        ha-script-editor {\n          height: 100%;\n        }\n      </style>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/edit/:script\"\n        data=\"{{_routeData}}\"\n        active=\"{{_edittingScript}}\"\n      ></app-route>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/new\"\n        active=\"{{_creatingNew}}\"\n      ></app-route>\n\n      <template is=\"dom-if\" if=\"[[!showEditor]]\">\n        <ha-script-picker\n          hass=\"[[hass]]\"\n          scripts=\"[[scripts]]\"\n          is-wide=\"[[isWide]]\"\n        ></ha-script-picker>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[showEditor]]\" restamp=\"\">\n        <ha-script-editor\n          hass=\"[[hass]]\"\n          script=\"[[script]]\"\n          is-wide=\"[[isWide]]\"\n          creating-new=\"[[_creatingNew]]\"\n        ></ha-script-editor>\n      </template>\n    "]);

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









var HaConfigScript =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigScript, _PolymerElement);

  function HaConfigScript() {
    _classCallCheck(this, HaConfigScript);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigScript).apply(this, arguments));
  }

  _createClass(HaConfigScript, [{
    key: "computeScript",
    value: function computeScript(scripts, edittingAddon, routeData) {
      if (!scripts || !edittingAddon) {
        return null;
      }

      for (var i = 0; i < scripts.length; i++) {
        if (scripts[i].entity_id === routeData.script) {
          return scripts[i];
        }
      }

      return null;
    }
  }, {
    key: "computeScripts",
    value: function computeScripts(hass) {
      var scripts = [];
      Object.keys(hass.states).forEach(function (key) {
        var entity = hass.states[key];

        if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["default"])(entity) === "script") {
          scripts.push(entity);
        }
      });
      return scripts.sort(function entitySortBy(entityA, entityB) {
        var nameA = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(entityA);
        var nameB = Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(entityB);

        if (nameA < nameB) {
          return -1;
        }

        if (nameA > nameB) {
          return 1;
        }

        return 0;
      });
    }
  }, {
    key: "computeShowEditor",
    value: function computeShowEditor(_edittingScript, _creatingNew) {
      return _creatingNew || _edittingScript;
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
        hass: Object,
        route: Object,
        isWide: Boolean,
        _routeData: Object,
        _routeMatches: Boolean,
        _creatingNew: Boolean,
        _edittingScript: Boolean,
        scripts: {
          type: Array,
          computed: "computeScripts(hass)"
        },
        script: {
          type: Object,
          computed: "computeScript(scripts, _edittingScript, _routeData)"
        },
        showEditor: {
          type: Boolean,
          computed: "computeShowEditor(_edittingScript, _creatingNew)"
        }
      };
    }
  }]);

  return HaConfigScript;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-config-script", HaConfigScript);

/***/ }),

/***/ "./src/panels/config/script/ha-script-editor.js":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-editor.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _js_script__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/script */ "./src/panels/config/js/script.js");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        .errors {\n          padding: 20px;\n          font-weight: bold;\n          color: var(--google-red-500);\n        }\n        .content {\n          padding-bottom: 20px;\n        }\n        .triggers,\n        .script {\n          margin-top: -16px;\n        }\n        .triggers ha-card,\n        .script ha-card {\n          margin-top: 16px;\n        }\n        .add-card mwc-button {\n          display: block;\n          text-align: center;\n        }\n        .card-menu {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n          color: var(--primary-text-color);\n        }\n        .card-menu paper-item {\n          cursor: pointer;\n        }\n        span[slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n          margin-bottom: -80px;\n          transition: margin-bottom 0.3s;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[dirty] {\n          margin-bottom: 0;\n        }\n\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      </style>\n      <ha-app-layout has-scrolling-region=\"\">\n        <app-header slot=\"header\" fixed=\"\">\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              on-click=\"backTapped\"\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title>Script [[computeName(script)]]</div>\n            <template is=\"dom-if\" if=\"[[!creatingNew]]\">\n              <paper-icon-button\n                icon=\"hass:delete\"\n                on-click=\"_delete\"\n              ></paper-icon-button>\n            </template>\n          </app-toolbar>\n        </app-header>\n        <div class=\"content\">\n          <template is=\"dom-if\" if=\"[[errors]]\">\n            <div class=\"errors\">[[errors]]</div>\n          </template>\n          <div id=\"root\"></div>\n        </div>\n        <paper-fab\n          slot=\"fab\"\n          is-wide$=\"[[isWide]]\"\n          dirty$=\"[[dirty]]\"\n          icon=\"hass:content-save\"\n          title=\"Save\"\n          on-click=\"saveScript\"\n          rtl$=\"[[rtl]]\"\n        ></paper-fab>\n      </ha-app-layout>\n    "]);

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



















function ScriptEditor(mountEl, props, mergeEl) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_6__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_6__["h"])(_js_script__WEBPACK_IMPORTED_MODULE_9__["default"], props), mountEl, mergeEl);
}
/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin NavigateMixin
 */


var HaScriptEditor =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaScriptEditor, _LocalizeMixin);

  function HaScriptEditor() {
    _classCallCheck(this, HaScriptEditor);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaScriptEditor).apply(this, arguments));
  }

  _createClass(HaScriptEditor, [{
    key: "ready",
    value: function ready() {
      this.configChanged = this.configChanged.bind(this);

      _get(_getPrototypeOf(HaScriptEditor.prototype), "ready", this).call(this); // This call will initialize preact.

    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaScriptEditor.prototype), "disconnectedCallback", this).call(this);

      if (this._rendered) {
        Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"])(this._rendered);
        this._rendered = null;
      }
    }
  }, {
    key: "configChanged",
    value: function configChanged(config) {
      // onChange gets called a lot during initial rendering causing recursing calls.
      if (this._rendered === null) return;
      this.config = config;
      this.errors = null;
      this.dirty = true;

      this._updateComponent();
    }
  }, {
    key: "scriptChanged",
    value: function scriptChanged(newVal, oldVal) {
      var _this = this;

      if (!newVal) return;

      if (!this.hass) {
        setTimeout(function () {
          return _this.scriptChanged(newVal, oldVal);
        }, 0);
        return;
      }

      if (oldVal && oldVal.entity_id === newVal.entity_id) {
        return;
      }

      this.hass.callApi("get", "config/script/config/" + Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["default"])(newVal.entity_id)).then(function (config) {
        // Normalize data: ensure sequence is a list
        // Happens when people copy paste their scripts into the config
        var value = config.sequence;

        if (value && !Array.isArray(value)) {
          config.sequence = [value];
        }

        _this.dirty = false;
        _this.config = config;

        _this._updateComponent();
      }, function () {
        alert("Only scripts inside scripts.yaml are editable.");
        history.back();
      });
    }
  }, {
    key: "creatingNewChanged",
    value: function creatingNewChanged(newVal) {
      if (!newVal) {
        return;
      }

      this.dirty = false;
      this.config = {
        alias: "New Script",
        sequence: [{
          service: "",
          data: {}
        }]
      };

      this._updateComponent();
    }
  }, {
    key: "backTapped",
    value: function backTapped() {
      if (this.dirty && // eslint-disable-next-line
      !confirm("You have unsaved changes. Are you sure you want to leave?")) {
        return;
      }

      history.back();
    }
  }, {
    key: "_updateComponent",
    value: function _updateComponent() {
      var _this2 = this;

      if (this._renderScheduled || !this.hass || !this.config) return;
      this._renderScheduled = true;
      Promise.resolve().then(function () {
        _this2._rendered = ScriptEditor(_this2.$.root, {
          script: _this2.config,
          onChange: _this2.configChanged,
          isWide: _this2.isWide,
          hass: _this2.hass,
          localize: _this2.localize
        }, _this2._rendered);
        _this2._renderScheduled = false;
      });
    }
  }, {
    key: "_delete",
    value: function () {
      var _delete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (confirm("Are you sure you want to delete this script?")) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return Object(_data_script__WEBPACK_IMPORTED_MODULE_16__["deleteScript"])(this.hass, Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["default"])(this.script.entity_id));

              case 4:
                history.back();

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _delete() {
        return _delete2.apply(this, arguments);
      }

      return _delete;
    }()
  }, {
    key: "saveScript",
    value: function saveScript() {
      var _this3 = this;

      var id = this.creatingNew ? "" + Date.now() : Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_11__["default"])(this.script.entity_id);
      this.hass.callApi("post", "config/script/config/" + id, this.config).then(function () {
        _this3.dirty = false;

        if (_this3.creatingNew) {
          _this3.navigate("/config/script/edit/".concat(id), true);
        }
      }, function (errors) {
        _this3.errors = errors.body.message;
        throw errors;
      });
    }
  }, {
    key: "computeName",
    value: function computeName(script) {
      return script && Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_12__["default"])(script);
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
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
        hass: {
          type: Object
        },
        errors: {
          type: Object,
          value: null
        },
        dirty: {
          type: Boolean,
          value: false
        },
        config: {
          type: Object,
          value: null
        },
        script: {
          type: Object,
          observer: "scriptChanged"
        },
        creatingNew: {
          type: Boolean,
          observer: "creatingNewChanged"
        },
        isWide: {
          type: Boolean,
          observer: "_updateComponent"
        },
        _rendered: {
          type: Object,
          value: null
        },
        _renderScheduled: {
          type: Boolean,
          value: false
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return HaScriptEditor;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

customElements.define("ha-script-editor", HaScriptEditor);

/***/ }),

/***/ "./src/panels/config/script/ha-script-picker.ts":
/*!******************************************************!*\
  !*** ./src/panels/config/script/ha-script-picker.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_script__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../data/script */ "./src/data/script.ts");
/* harmony import */ var _util_toast__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../util/toast */ "./src/util/toast.ts");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          padding-bottom: 8px;\n          margin-bottom: 56px;\n        }\n\n        .script {\n          display: flex;\n          flex-direction: horizontal;\n          align-items: center;\n          padding: 0 8px;\n          margin: 4px 0;\n        }\n\n        .script > *:first-child {\n          margin-right: 8px;\n        }\n\n        .script a[href],\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n\n        .actions {\n          display: flex;\n        }\n\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                    <div class=\"script\">\n                      <paper-icon-button\n                        .script=", "\n                        icon=\"hass:play\"\n                        @click=", "\n                      ></paper-icon-button>\n                      <paper-item-body>\n                        <div>", "</div>\n                      </paper-item-body>\n                      <div class=\"actions\">\n                        <a href=", ">\n                          <paper-icon-button\n                            icon=\"hass:pencil\"\n                          ></paper-icon-button>\n                        </a>\n                      </div>\n                    </div>\n                  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                  <div class=\"card-content\">\n                    <p>We couldn't find any scripts.</p>\n                  </div>\n                "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <hass-subpage\n        .header=", "\n      >\n        <ha-config-section .isWide=", ">\n          <div slot=\"header\">Script Editor</div>\n          <div slot=\"introduction\">\n            The script editor allows you to create and edit scripts. Please read\n            <a\n              href=\"https://home-assistant.io/docs/scripts/editor/\"\n              target=\"_blank\"\n              >the instructions</a\n            >\n            to make sure that you have configured ioBroker correctly.\n          </div>\n\n          <ha-card header=\"Pick script to edit\">\n            ", "\n          </ha-card>\n        </ha-config-section>\n\n        <a href=\"/config/script/new\">\n          <paper-fab\n            slot=\"fab\"\n            ?is-wide=", "\n            icon=\"hass:plus\"\n            title=\"Add Script\"\n            ?rtl=", "\n          ></paper-fab>\n        </a>\n      </hass-subpage>\n    "]);

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















var HaScriptPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-script-picker")], function (_initialize, _LitElement) {
  var HaScriptPicker =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaScriptPicker, _LitElement2);

    function HaScriptPicker() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaScriptPicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaScriptPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaScriptPicker;
  }(_LitElement);

  return {
    F: HaScriptPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "scripts",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.hass.localize("ui.panel.config.script.caption"), this.isWide, this.scripts.length === 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2()) : Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_12__["repeat"])(this.scripts, function (script) {
          return script.entity_id;
        }, function (script) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), script, _this2._runScript, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["default"])(script), "/config/script/edit/".concat(script.entity_id));
        }), this.isWide, Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_5__["computeRTL"])(this.hass));
      }
    }, {
      kind: "method",
      key: "_runScript",
      value: function () {
        var _runScript2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee(ev) {
          var script;
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  script = ev.currentTarget.script;
                  _context.next = 3;
                  return Object(_data_script__WEBPACK_IMPORTED_MODULE_10__["triggerScript"])(this.hass, script.entity_id);

                case 3:
                  Object(_util_toast__WEBPACK_IMPORTED_MODULE_11__["showToast"])(this, {
                    message: "Triggered ".concat(Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["default"])(script))
                  });

                case 4:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _runScript(_x) {
          return _runScript2.apply(this, arguments);
        }

        return _runScript;
      }()
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_9__["haStyle"], Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4())];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=panel-config-script.chunk.js.map