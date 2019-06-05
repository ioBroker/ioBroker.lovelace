(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-automation"],{

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

/***/ "./src/data/automation.ts":
/*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
/*! exports provided: deleteAutomation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAutomation", function() { return deleteAutomation; });
var deleteAutomation = function deleteAutomation(hass, id) {
  return hass.callApi("DELETE", "config/automation/config/".concat(id));
};

/***/ }),

/***/ "./src/panels/config/automation/ha-automation-editor.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-editor.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _js_automation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/automation */ "./src/panels/config/js/automation.js");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n        ha-card {\n          overflow: hidden;\n        }\n        .errors {\n          padding: 20px;\n          font-weight: bold;\n          color: var(--google-red-500);\n        }\n        .content {\n          padding-bottom: 20px;\n        }\n        .triggers,\n        .script {\n          margin-top: -16px;\n        }\n        .triggers ha-card,\n        .script ha-card {\n          margin-top: 16px;\n        }\n        .add-card mwc-button {\n          display: block;\n          text-align: center;\n        }\n        .card-menu {\n          position: absolute;\n          top: 0;\n          right: 0;\n          z-index: 1;\n          color: var(--primary-text-color);\n        }\n        .rtl .card-menu {\n          right: auto;\n          left: 0;\n        }\n        .card-menu paper-item {\n          cursor: pointer;\n        }\n        span[slot=\"introduction\"] a {\n          color: var(--primary-color);\n        }\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n          margin-bottom: -80px;\n          transition: margin-bottom 0.3s;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[dirty] {\n          margin-bottom: 0;\n        }\n\n        paper-fab.rtl {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[is-wide].rtl {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"errors\">", "</div>\n              "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                  <paper-icon-button\n                    icon=\"hass:delete\"\n                    @click=", "\n                  ></paper-icon-button>\n                "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-app-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-paper-icon-button-arrow-prev\n              @click=", "\n            ></ha-paper-icon-button-arrow-prev>\n            <div main-title>\n              ", "\n            </div>\n            ", "\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          ", "\n          <div\n            id=\"root\"\n            class=\"", "\"\n          ></div>\n        </div>\n        <paper-fab\n          slot=\"fab\"\n          ?is-wide=\"", "\"\n          ?dirty=\"", "\"\n          icon=\"hass:content-save\"\n          .title=\"", "\"\n          @click=", "\n          class=\"", "\"\n        ></paper-fab>\n      </ha-app-layout>\n    "]);

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


















function AutomationEditor(mountEl, props, mergeEl) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_6__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_6__["h"])(_js_automation__WEBPACK_IMPORTED_MODULE_9__["default"], props), mountEl, mergeEl);
}

var HaAutomationEditor =
/*#__PURE__*/
function (_LitElement) {
  _inherits(HaAutomationEditor, _LitElement);

  _createClass(HaAutomationEditor, null, [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        automation: {},
        creatingNew: {},
        isWide: {},
        _errors: {},
        _dirty: {},
        _config: {}
      };
    }
  }]);

  function HaAutomationEditor() {
    var _this;

    _classCallCheck(this, HaAutomationEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaAutomationEditor).call(this));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "automation", void 0);

    _defineProperty(_assertThisInitialized(_this), "isWide", void 0);

    _defineProperty(_assertThisInitialized(_this), "creatingNew", void 0);

    _defineProperty(_assertThisInitialized(_this), "_config", void 0);

    _defineProperty(_assertThisInitialized(_this), "_dirty", void 0);

    _defineProperty(_assertThisInitialized(_this), "_rendered", void 0);

    _defineProperty(_assertThisInitialized(_this), "_errors", void 0);

    _this._configChanged = _this._configChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HaAutomationEditor, [{
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaAutomationEditor.prototype), "disconnectedCallback", this).call(this);

      if (this._rendered) {
        Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"])(this._rendered);
        this._rendered = undefined;
      }
    }
  }, {
    key: "render",
    value: function render() {
      if (!this.hass) {
        return;
      }

      return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this._backTapped, this.automation ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["default"])(this.automation) : this.hass.localize("ui.panel.config.automation.editor.default_name"), this.creatingNew ? "" : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this._delete), this._errors ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this._errors) : "", Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
        rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass)
      }), this.isWide, this._dirty, this.hass.localize("ui.panel.config.automation.editor.save"), this._saveAutomation, Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
        rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass)
      }));
    }
  }, {
    key: "updated",
    value: function updated(changedProps) {
      var _this2 = this;

      _get(_getPrototypeOf(HaAutomationEditor.prototype), "updated", this).call(this, changedProps);

      var oldAutomation = changedProps.get("automation");

      if (changedProps.has("automation") && this.automation && this.hass && ( // Only refresh config if we picked a new automation. If same ID, don't fetch it.
      !oldAutomation || oldAutomation.attributes.id !== this.automation.attributes.id)) {
        this.hass.callApi("GET", "config/automation/config/".concat(this.automation.attributes.id)).then(function (config) {
          // Normalize data: ensure trigger, action and condition are lists
          // Happens when people copy paste their automations into the config
          for (var _i = 0, _arr = ["trigger", "condition", "action"]; _i < _arr.length; _i++) {
            var key = _arr[_i];
            var value = config[key];

            if (value && !Array.isArray(value)) {
              config[key] = [value];
            }
          }

          _this2._dirty = false;
          _this2._config = config;
        }, function (resp) {
          alert(resp.status_code === 404 ? _this2.hass.localize("ui.panel.config.automation.editor.load_error_not_editable") : _this2.hass.localize("ui.panel.config.automation.editor.load_error_unknown", "err_no", resp.status_code));
          history.back();
        });
      }

      if (changedProps.has("creatingNew") && this.creatingNew && this.hass) {
        this._dirty = false;
        this._config = {
          alias: this.hass.localize("ui.panel.config.automation.editor.default_name"),
          trigger: [{
            platform: "state"
          }],
          condition: [],
          action: [{
            service: ""
          }]
        };
      }

      if (changedProps.has("_config") && this.hass) {
        this._rendered = AutomationEditor(this.shadowRoot.querySelector("#root"), {
          automation: this._config,
          onChange: this._configChanged,
          isWide: this.isWide,
          hass: this.hass,
          localize: this.hass.localize
        }, this._rendered);
      }
    }
  }, {
    key: "_configChanged",
    value: function _configChanged(config) {
      // onChange gets called a lot during initial rendering causing recursing calls.
      if (!this._rendered) {
        return;
      }

      this._config = config;
      this._errors = undefined;
      this._dirty = true;
    }
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      if (this._dirty && !confirm(this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"))) {
        return;
      }

      history.back();
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
                if (confirm("Are you sure you want to delete this automation?")) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.next = 4;
                return Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["deleteAutomation"])(this.hass, this.automation.attributes.id);

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
    key: "_saveAutomation",
    value: function _saveAutomation() {
      var _this3 = this;

      var id = this.creatingNew ? "" + Date.now() : this.automation.attributes.id;
      this.hass.callApi("POST", "config/automation/config/" + id, this._config).then(function () {
        _this3._dirty = false;

        if (_this3.creatingNew) {
          Object(_common_navigate__WEBPACK_IMPORTED_MODULE_14__["navigate"])(_this3, "/config/automation/edit/".concat(id), true);
        }
      }, function (errors) {
        _this3._errors = errors.body.message;
        throw errors;
      });
    }
  }], [{
    key: "styles",
    get: function get() {
      return [_resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"], Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4())];
    }
  }]);

  return HaAutomationEditor;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("ha-automation-editor", HaAutomationEditor);

/***/ }),

/***/ "./src/panels/config/automation/ha-automation-picker.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-picker.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          display: block;\n        }\n\n        ha-card {\n          margin-bottom: 56px;\n        }\n\n        .automation {\n          display: flex;\n          flex-direction: horizontal;\n          align-items: center;\n          padding: 0 8px 0 16px;\n        }\n\n        .automation a[href] {\n          color: var(--primary-text-color);\n        }\n\n        ha-entity-toggle {\n          margin-right: 16px;\n        }\n\n        .actions {\n          display: flex;\n        }\n\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n      "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                                    <paper-tooltip position=\"left\">\n                                      Only automations defined in\n                                      automations.yaml are editable.\n                                    </paper-tooltip>\n                                  "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n\n                      <div class='automation'>\n                        <ha-entity-toggle\n                          .hass=", "\n                          .stateObj=", "\n                        ></ha-entity-toggle>\n\n                        <paper-item-body two-line>\n                          <div>", "</div>\n                          <div secondary>\n                            Last triggered: ", "\n                          </div>\n                        </paper-item-body>\n                        <div class='actions'>\n                          <paper-icon-button\n                            .automation=", "\n                            @click=", "\n                            icon=\"hass:information-outline\"\n                          ></paper-icon-button>\n                          <a\n                            href=", "\n                          >\n                            <paper-icon-button\n                              icon=\"hass:pencil\"\n                              .disabled=", "\n                            ></paper-icon-button>\n                            ", "\n                          </a>\n                        </div>\n                      </div>\n                    </a>\n                  "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n                  <div class=\"card-content\">\n                    <p>\n                      ", "\n                    </p>\n                  </div>\n                "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <hass-subpage\n        .header=", "\n      >\n        <ha-config-section .isWide=", ">\n          <div slot=\"header\">\n            ", "\n          </div>\n          <div slot=\"introduction\">\n            ", "\n            <p>\n              <a\n                href=\"https://home-assistant.io/docs/automation/editor/\"\n                target=\"_blank\"\n              >\n                ", "\n              </a>\n            </p>\n          </div>\n\n          <ha-card\n            .heading=", "\n          >\n            ", "\n          </ha-card>\n        </ha-config-section>\n\n        <a href=\"/config/automation/new\">\n          <paper-fab\n            slot=\"fab\"\n            ?is-wide=", "\n            icon=\"hass:plus\"\n            title=", "\n            ?rtl=", "\n          ></paper-fab\n        ></a>\n      </hass-subpage>\n    "]);

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


















var HaAutomationPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-automation-picker")], function (_initialize, _LitElement) {
  var HaAutomationPicker =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaAutomationPicker, _LitElement2);

    function HaAutomationPicker() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaAutomationPicker);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaAutomationPicker)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaAutomationPicker;
  }(_LitElement);

  return {
    F: HaAutomationPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "automations",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject(), this.hass.localize("ui.panel.config.automation.caption"), this.isWide, this.hass.localize("ui.panel.config.automation.picker.header"), this.hass.localize("ui.panel.config.automation.picker.introduction"), this.hass.localize("ui.panel.config.automation.picker.learn_more"), this.hass.localize("ui.panel.config.automation.picker.pick_automation"), this.automations.length === 0 ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.hass.localize("ui.panel.config.automation.picker.no_automations")) : Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_15__["repeat"])(this.automations, function (automation) {
          return automation.entity_id;
        }, function (automation) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), _this2.hass, automation, Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["default"])(automation), automation.attributes.last_triggered ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(automation.attributes.last_triggered), _this2.hass.language) : "never", automation, _this2._showInfo, Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(automation.attributes.id ? "/config/automation/edit/".concat(automation.attributes.id) : undefined), !automation.attributes.id, !automation.attributes.id ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4()) : "");
        }), this.isWide, this.hass.localize("ui.panel.config.automation.picker.add_automation"), Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.hass));
      }
    }, {
      kind: "method",
      key: "_showInfo",
      value: function _showInfo(ev) {
        var entityId = ev.currentTarget.automation.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__["fireEvent"])(this, "hass-more-info", {
          entityId: entityId
        });
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"], Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5())];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/automation/ha-config-automation.js":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-config-automation.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_automation_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-automation-editor */ "./src/panels/config/automation/ha-automation-editor.ts");
/* harmony import */ var _ha_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-automation-picker */ "./src/panels/config/automation/ha-automation-picker.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-automation-picker,\n        ha-automation-editor {\n          height: 100%;\n        }\n      </style>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/edit/:automation\"\n        data=\"{{_routeData}}\"\n        active=\"{{_edittingAutomation}}\"\n      ></app-route>\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/new\"\n        active=\"{{_creatingNew}}\"\n      ></app-route>\n\n      <template is=\"dom-if\" if=\"[[!showEditor]]\">\n        <ha-automation-picker\n          hass=\"[[hass]]\"\n          automations=\"[[automations]]\"\n          is-wide=\"[[isWide]]\"\n        ></ha-automation-picker>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[showEditor]]\" restamp=\"\">\n        <ha-automation-editor\n          hass=\"[[hass]]\"\n          automation=\"[[automation]]\"\n          is-wide=\"[[isWide]]\"\n          creating-new=\"[[_creatingNew]]\"\n        ></ha-automation-editor>\n      </template>\n    "]);

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








var HaConfigAutomation =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaConfigAutomation, _PolymerElement);

  function HaConfigAutomation() {
    _classCallCheck(this, HaConfigAutomation);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigAutomation).apply(this, arguments));
  }

  _createClass(HaConfigAutomation, [{
    key: "computeAutomation",
    value: function computeAutomation(automations, edittingAddon, routeData) {
      if (!automations || !edittingAddon) {
        return null;
      }

      for (var i = 0; i < automations.length; i++) {
        if (automations[i].attributes.id === routeData.automation) {
          return automations[i];
        }
      }

      return null;
    }
  }, {
    key: "computeAutomations",
    value: function computeAutomations(hass) {
      var automations = [];
      Object.keys(hass.states).forEach(function (key) {
        var entity = hass.states[key];

        if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["default"])(entity) === "automation") {
          automations.push(entity);
        }
      });
      return automations.sort(function entitySortBy(entityA, entityB) {
        var nameA = (entityA.attributes.alias || entityA.entity_id).toLowerCase();
        var nameB = (entityB.attributes.alias || entityB.entity_id).toLowerCase();

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
    value: function computeShowEditor(_edittingAutomation, _creatingNew) {
      return _creatingNew || _edittingAutomation;
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
        _edittingAutomation: Boolean,
        automations: {
          type: Array,
          computed: "computeAutomations(hass)"
        },
        automation: {
          type: Object,
          computed: "computeAutomation(automations, _edittingAutomation, _routeData)"
        },
        showEditor: {
          type: Boolean,
          computed: "computeShowEditor(_edittingAutomation, _creatingNew)"
        }
      };
    }
  }]);

  return HaConfigAutomation;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-config-automation", HaConfigAutomation);

/***/ }),

/***/ "./src/panels/config/js/automation.js":
/*!********************************************!*\
  !*** ./src/panels/config/js/automation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Automation; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trigger/index */ "./src/panels/config/js/trigger/index.js");
/* harmony import */ var _condition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./condition/index */ "./src/panels/config/js/condition/index.js");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.js");
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









var Automation =
/*#__PURE__*/
function (_Component) {
  _inherits(Automation, _Component);

  function Automation() {
    var _this;

    _classCallCheck(this, Automation);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Automation).call(this));
    _this.onChange = _this.onChange.bind(_assertThisInitialized(_this));
    _this.triggerChanged = _this.triggerChanged.bind(_assertThisInitialized(_this));
    _this.conditionChanged = _this.conditionChanged.bind(_assertThisInitialized(_this));
    _this.actionChanged = _this.actionChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Automation, [{
    key: "onChange",
    value: function onChange(ev) {
      this.props.onChange(Object.assign({}, this.props.automation, _defineProperty({}, ev.target.name, ev.target.value)));
    }
  }, {
    key: "triggerChanged",
    value: function triggerChanged(trigger) {
      this.props.onChange(Object.assign({}, this.props.automation, {
        trigger: trigger
      }));
    }
  }, {
    key: "conditionChanged",
    value: function conditionChanged(condition) {
      this.props.onChange(Object.assign({}, this.props.automation, {
        condition: condition
      }));
    }
  }, {
    key: "actionChanged",
    value: function actionChanged(action) {
      this.props.onChange(Object.assign({}, this.props.automation, {
        action: action
      }));
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var automation = _ref.automation,
          isWide = _ref.isWide,
          hass = _ref.hass,
          localize = _ref.localize;
      var alias = automation.alias,
          trigger = automation.trigger,
          condition = automation.condition,
          action = automation.action;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
        "is-wide": isWide
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "header"
      }, alias), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "introduction"
      }, localize("ui.panel.config.automation.editor.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.alias"),
        name: "alias",
        value: alias,
        "onvalue-changed": this.onChange
      })))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
        "is-wide": isWide
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "header"
      }, localize("ui.panel.config.automation.editor.triggers.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "introduction"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.triggers.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: "https://home-assistant.io/docs/automation/trigger/",
        target: "_blank"
      }, localize("ui.panel.config.automation.editor.triggers.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
        trigger: trigger,
        onChange: this.triggerChanged,
        hass: hass,
        localize: localize
      })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
        "is-wide": isWide
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "header"
      }, localize("ui.panel.config.automation.editor.conditions.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "introduction"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.conditions.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: "https://home-assistant.io/docs/scripts/conditions/",
        target: "_blank"
      }, localize("ui.panel.config.automation.editor.conditions.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
        condition: condition || [],
        onChange: this.conditionChanged,
        hass: hass,
        localize: localize
      })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
        "is-wide": isWide
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "header"
      }, localize("ui.panel.config.automation.editor.actions.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
        slot: "introduction"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.actions.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
        href: "https://home-assistant.io/docs/automation/action/",
        target: "_blank"
      }, localize("ui.panel.config.automation.editor.actions.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
        script: action,
        onChange: this.actionChanged,
        hass: hass,
        localize: localize
      })));
    }
  }]);

  return Automation;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/panels/config/js/condition/condition_row.js":
/*!*********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_row.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condition_edit */ "./src/panels/config/js/condition/condition_edit.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var ConditionRow =
/*#__PURE__*/
function (_Component) {
  _inherits(ConditionRow, _Component);

  function ConditionRow() {
    var _this;

    _classCallCheck(this, ConditionRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ConditionRow).call(this));
    _this.onDelete = _this.onDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ConditionRow, [{
    key: "onDelete",
    value: function onDelete() {
      // eslint-disable-next-line
      if (confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))) {
        this.props.onChange(this.props.index, null);
      }
    }
  }, {
    key: "render",
    value: function render(props) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-menu"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", {
        "no-animations": true,
        "horizontal-align": "right",
        "horizontal-offset": "-5",
        "vertical-offset": "-5"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", {
        icon: "hass:dots-vertical",
        slot: "dropdown-trigger"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
        slot: "dropdown-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
        disabled: true
      }, props.localize("ui.panel.config.automation.editor.conditions.duplicate")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
        onTap: this.onDelete
      }, props.localize("ui.panel.config.automation.editor.conditions.delete"))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props)));
    }
  }]);

  return ConditionRow;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/panels/config/js/condition/index.js":
/*!*************************************************!*\
  !*** ./src/panels/config/js/condition/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Condition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condition_row */ "./src/panels/config/js/condition/condition_row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Condition =
/*#__PURE__*/
function (_Component) {
  _inherits(Condition, _Component);

  function Condition() {
    var _this;

    _classCallCheck(this, Condition);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Condition).call(this));
    _this.addCondition = _this.addCondition.bind(_assertThisInitialized(_this));
    _this.conditionChanged = _this.conditionChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Condition, [{
    key: "addCondition",
    value: function addCondition() {
      var condition = this.props.condition.concat({
        condition: "state"
      });
      this.props.onChange(condition);
    }
  }, {
    key: "conditionChanged",
    value: function conditionChanged(index, newValue) {
      var condition = this.props.condition.concat();

      if (newValue === null) {
        condition.splice(index, 1);
      } else {
        condition[index] = newValue;
      }

      this.props.onChange(condition);
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var _this2 = this;

      var condition = _ref.condition,
          hass = _ref.hass,
          localize = _ref.localize;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "triggers"
      }, condition.map(function (cnd, idx) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
          index: idx,
          condition: cnd,
          onChange: _this2.conditionChanged,
          hass: hass,
          localize: localize
        });
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-actions add-card"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
        onTap: this.addCondition
      }, localize("ui.panel.config.automation.editor.conditions.add")))));
    }
  }]);

  return Condition;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/panels/config/js/trigger/event.js":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/event.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _json_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json_textarea */ "./src/panels/config/js/json_textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var EventTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(EventTrigger, _Component);

  function EventTrigger() {
    var _this;

    _classCallCheck(this, EventTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(EventTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    _this.eventDataChanged = _this.eventDataChanged.bind(_assertThisInitialized(_this));
    return _this;
  }
  /* eslint-disable camelcase */


  _createClass(EventTrigger, [{
    key: "eventDataChanged",
    value: function eventDataChanged(event_data) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        event_data: event_data
      }));
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;
      var event_type = trigger.event_type,
          event_data = trigger.event_data;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.event.event_type"),
        name: "event_type",
        value: event_type,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_json_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
        label: localize("ui.panel.config.automation.editor.triggers.type.event.event_data"),
        value: event_data,
        onChange: this.eventDataChanged
      }));
    }
  }]);

  return EventTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


EventTrigger.defaultConfig = {
  event_type: "",
  event_data: {}
};

/***/ }),

/***/ "./src/panels/config/js/trigger/geo_location.js":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/geo_location.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var GeolocationTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(GeolocationTrigger, _Component);

  function GeolocationTrigger() {
    var _this;

    _classCallCheck(this, GeolocationTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GeolocationTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    _this.zonePicked = _this.zonePicked.bind(_assertThisInitialized(_this));
    _this.radioGroupPicked = _this.radioGroupPicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(GeolocationTrigger, [{
    key: "zonePicked",
    value: function zonePicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        zone: ev.target.value
      }));
    }
  }, {
    key: "radioGroupPicked",
    value: function radioGroupPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        event: ev.target.selected
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          hass = _ref.hass,
          localize = _ref.localize;
      var source = trigger.source,
          zone = trigger.zone,
          event = trigger.event;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.source"),
        name: "source",
        value: source,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
        label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.zone"),
        value: zone,
        onChange: this.zonePicked,
        hass: hass,
        allowCustomEntity: true,
        domainFilter: "zone"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
        id: "eventlabel"
      }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
        selected: event,
        "aria-labelledby": "eventlabel",
        "onpaper-radio-group-changed": this.radioGroupPicked
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "enter"
      }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.enter")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "leave"
      }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.leave"))));
    }
  }]);

  return GeolocationTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


GeolocationTrigger.defaultConfig = {
  source: "",
  zone: "",
  event: "enter"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/homeassistant.js":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/homeassistant.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HassTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HassTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(HassTrigger, _Component);

  function HassTrigger() {
    var _this;

    _classCallCheck(this, HassTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HassTrigger).call(this));
    _this.radioGroupPicked = _this.radioGroupPicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HassTrigger, [{
    key: "radioGroupPicked",
    value: function radioGroupPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        event: ev.target.selected
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;
      var event = trigger.event;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
        id: "eventlabel"
      }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
        selected: event,
        "aria-labelledby": "eventlabel",
        "onpaper-radio-group-changed": this.radioGroupPicked
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "start"
      }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.start")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "shutdown"
      }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown"))));
    }
  }]);

  return HassTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


HassTrigger.defaultConfig = {
  event: "start"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/index.js":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger_row */ "./src/panels/config/js/trigger/trigger_row.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Trigger =
/*#__PURE__*/
function (_Component) {
  _inherits(Trigger, _Component);

  function Trigger() {
    var _this;

    _classCallCheck(this, Trigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Trigger).call(this));
    _this.addTrigger = _this.addTrigger.bind(_assertThisInitialized(_this));
    _this.triggerChanged = _this.triggerChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(Trigger, [{
    key: "addTrigger",
    value: function addTrigger() {
      var trigger = this.props.trigger.concat(Object.assign({
        platform: "state"
      }, _state__WEBPACK_IMPORTED_MODULE_4__["default"].defaultConfig));
      this.props.onChange(trigger);
    }
  }, {
    key: "triggerChanged",
    value: function triggerChanged(index, newValue) {
      var trigger = this.props.trigger.concat();

      if (newValue === null) {
        trigger.splice(index, 1);
      } else {
        trigger[index] = newValue;
      }

      this.props.onChange(trigger);
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var _this2 = this;

      var trigger = _ref.trigger,
          hass = _ref.hass,
          localize = _ref.localize;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "triggers"
      }, trigger.map(function (trg, idx) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
          index: idx,
          trigger: trg,
          onChange: _this2.triggerChanged,
          hass: hass,
          localize: localize
        });
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-actions add-card"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
        onTap: this.addTrigger
      }, localize("ui.panel.config.automation.editor.triggers.add")))));
    }
  }]);

  return Trigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/panels/config/js/trigger/mqtt.js":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/mqtt.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MQTTTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var MQTTTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(MQTTTrigger, _Component);

  function MQTTTrigger() {
    var _this;

    _classCallCheck(this, MQTTTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MQTTTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    return _this;
  }
  /* eslint-disable camelcase */


  _createClass(MQTTTrigger, [{
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;
      var topic = trigger.topic,
          payload = trigger.payload;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.topic"),
        name: "topic",
        value: topic,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.payload"),
        name: "payload",
        value: payload,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return MQTTTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


MQTTTrigger.defaultConfig = {
  topic: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/numeric_state.js":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/numeric_state.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumericStateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var NumericStateTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(NumericStateTrigger, _Component);

  function NumericStateTrigger() {
    var _this;

    _classCallCheck(this, NumericStateTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(NumericStateTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    _this.entityPicked = _this.entityPicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(NumericStateTrigger, [{
    key: "entityPicked",
    value: function entityPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        entity_id: ev.target.value
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          hass = _ref.hass,
          localize = _ref.localize;
      var value_template = trigger.value_template,
          entity_id = trigger.entity_id,
          below = trigger.below,
          above = trigger.above;
      var trgFor = trigger["for"];

      if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
        // If the trigger was defined using the yaml dict syntax, convert it to
        // the equivalent string format
        var _trgFor = trgFor,
            _trgFor$hours = _trgFor.hours,
            hours = _trgFor$hours === void 0 ? 0 : _trgFor$hours,
            _trgFor$minutes = _trgFor.minutes,
            minutes = _trgFor$minutes === void 0 ? 0 : _trgFor$minutes,
            _trgFor$seconds = _trgFor.seconds,
            seconds = _trgFor$seconds === void 0 ? 0 : _trgFor$seconds;
        hours = hours.toString();
        minutes = minutes.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
        trgFor = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
      }

      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
        value: entity_id,
        onChange: this.entityPicked,
        hass: hass,
        allowCustomEntity: true
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.above"),
        name: "above",
        value: above,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.below"),
        name: "below",
        value: below,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
        label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"),
        name: "value_template",
        value: value_template,
        "onvalue-changed": this.onChange,
        dir: "ltr"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.state.for"),
        name: "for",
        value: trgFor,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return NumericStateTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


NumericStateTrigger.defaultConfig = {
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/state.js":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/state.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var StateTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(StateTrigger, _Component);

  function StateTrigger() {
    var _this;

    _classCallCheck(this, StateTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(StateTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    _this.entityPicked = _this.entityPicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(StateTrigger, [{
    key: "entityPicked",
    value: function entityPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        entity_id: ev.target.value
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          hass = _ref.hass,
          localize = _ref.localize;
      var entity_id = trigger.entity_id,
          to = trigger.to;
      var trgFrom = trigger.from;
      var trgFor = trigger["for"];

      if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
        // If the trigger was defined using the yaml dict syntax, convert it to
        // the equivalent string format
        var _trgFor = trgFor,
            _trgFor$hours = _trgFor.hours,
            hours = _trgFor$hours === void 0 ? 0 : _trgFor$hours,
            _trgFor$minutes = _trgFor.minutes,
            minutes = _trgFor$minutes === void 0 ? 0 : _trgFor$minutes,
            _trgFor$seconds = _trgFor.seconds,
            seconds = _trgFor$seconds === void 0 ? 0 : _trgFor$seconds;
        hours = hours.toString();
        minutes = minutes.toString().padStart(2, "0");
        seconds = seconds.toString().padStart(2, "0");
        trgFor = "".concat(hours, ":").concat(minutes, ":").concat(seconds);
      }

      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
        value: entity_id,
        onChange: this.entityPicked,
        hass: hass,
        allowCustomEntity: true
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.state.from"),
        name: "from",
        value: trgFrom,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.state.to"),
        name: "to",
        value: to,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.state.for"),
        name: "for",
        value: trgFor,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return StateTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


StateTrigger.defaultConfig = {
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/sun.js":
/*!*********************************************!*\
  !*** ./src/panels/config/js/trigger/sun.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SunTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var SunTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(SunTrigger, _Component);

  function SunTrigger() {
    var _this;

    _classCallCheck(this, SunTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(SunTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    _this.radioGroupPicked = _this.radioGroupPicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(SunTrigger, [{
    key: "radioGroupPicked",
    value: function radioGroupPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        event: ev.target.selected
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;
      var offset = trigger.offset,
          event = trigger.event;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
        id: "eventlabel"
      }, localize("ui.panel.config.automation.editor.triggers.type.sun.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
        selected: event,
        "aria-labelledby": "eventlabel",
        "onpaper-radio-group-changed": this.radioGroupPicked
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "sunrise"
      }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunrise")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "sunset"
      }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunset"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.sun.offset"),
        name: "offset",
        value: offset,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return SunTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


SunTrigger.defaultConfig = {
  event: "sunrise"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/template.js":
/*!**************************************************!*\
  !*** ./src/panels/config/js/trigger/template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TemplateTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(TemplateTrigger, _Component);

  function TemplateTrigger() {
    var _this;

    _classCallCheck(this, TemplateTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TemplateTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    return _this;
  }

  _createClass(TemplateTrigger, [{
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;

      /* eslint-disable camelcase */
      var value_template = trigger.value_template;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
        label: localize("ui.panel.config.automation.editor.triggers.type.template.value_template"),
        name: "value_template",
        value: value_template,
        "onvalue-changed": this.onChange,
        dir: "ltr"
      }));
    }
  }]);

  return TemplateTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TemplateTrigger.defaultConfig = {
  value_template: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/time.js":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/time.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TimeTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(TimeTrigger, _Component);

  function TimeTrigger() {
    var _this;

    _classCallCheck(this, TimeTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimeTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    return _this;
  }
  /* eslint-disable camelcase */


  _createClass(TimeTrigger, [{
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;
      var at = trigger.at;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.time.at"),
        name: "at",
        value: at,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return TimeTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TimeTrigger.defaultConfig = {
  at: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/time_pattern.js":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/time_pattern.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimePatternTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var TimePatternTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(TimePatternTrigger, _Component);

  function TimePatternTrigger() {
    var _this;

    _classCallCheck(this, TimePatternTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TimePatternTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    return _this;
  }
  /* eslint-disable camelcase */


  _createClass(TimePatternTrigger, [{
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;
      var hours = trigger.hours,
          minutes = trigger.minutes,
          seconds = trigger.seconds;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.hours"),
        name: "hours",
        value: hours,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.minutes"),
        name: "minutes",
        value: minutes,
        "onvalue-changed": this.onChange
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.seconds"),
        name: "seconds",
        value: seconds,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return TimePatternTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


TimePatternTrigger.defaultConfig = {
  hours: "",
  minutes: "",
  seconds: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_edit.js":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerEdit; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/trigger/event.js");
/* harmony import */ var _geo_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geo_location */ "./src/panels/config/js/trigger/geo_location.js");
/* harmony import */ var _homeassistant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeassistant */ "./src/panels/config/js/trigger/homeassistant.js");
/* harmony import */ var _mqtt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mqtt */ "./src/panels/config/js/trigger/mqtt.js");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/trigger/numeric_state.js");
/* harmony import */ var _time_pattern__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time_pattern */ "./src/panels/config/js/trigger/time_pattern.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.js");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/trigger/sun.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/trigger/template.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/trigger/time.js");
/* harmony import */ var _webhook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./webhook */ "./src/panels/config/js/trigger/webhook.js");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/trigger/zone.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

















var TYPES = {
  event: _event__WEBPACK_IMPORTED_MODULE_4__["default"],
  state: _state__WEBPACK_IMPORTED_MODULE_10__["default"],
  geo_location: _geo_location__WEBPACK_IMPORTED_MODULE_5__["default"],
  homeassistant: _homeassistant__WEBPACK_IMPORTED_MODULE_6__["default"],
  mqtt: _mqtt__WEBPACK_IMPORTED_MODULE_7__["default"],
  numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_8__["default"],
  sun: _sun__WEBPACK_IMPORTED_MODULE_11__["default"],
  template: _template__WEBPACK_IMPORTED_MODULE_12__["default"],
  time: _time__WEBPACK_IMPORTED_MODULE_13__["default"],
  time_pattern: _time_pattern__WEBPACK_IMPORTED_MODULE_9__["default"],
  webhook: _webhook__WEBPACK_IMPORTED_MODULE_14__["default"],
  zone: _zone__WEBPACK_IMPORTED_MODULE_15__["default"]
};
var OPTIONS = Object.keys(TYPES).sort();

var TriggerEdit =
/*#__PURE__*/
function (_Component) {
  _inherits(TriggerEdit, _Component);

  function TriggerEdit() {
    var _this;

    _classCallCheck(this, TriggerEdit);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TriggerEdit).call(this));
    _this.typeChanged = _this.typeChanged.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TriggerEdit, [{
    key: "typeChanged",
    value: function typeChanged(ev) {
      var type = ev.target.selectedItem.attributes.platform.value;

      if (type !== this.props.trigger.platform) {
        this.props.onChange(this.props.index, Object.assign({
          platform: type
        }, TYPES[type].defaultConfig));
      }
    }
  }, {
    key: "render",
    value: function render(_ref) {
      var index = _ref.index,
          trigger = _ref.trigger,
          onChange = _ref.onChange,
          hass = _ref.hass,
          localize = _ref.localize;
      var Comp = TYPES[trigger.platform];
      var selected = OPTIONS.indexOf(trigger.platform);

      if (!Comp) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, localize("ui.panel.config.automation.editor.triggers.unsupported_platform", "platform", trigger.platform), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(trigger, null, 2)));
      }

      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", {
        label: localize("ui.panel.config.automation.editor.triggers.type_select"),
        "no-animations": true
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
        slot: "dropdown-content",
        selected: selected,
        "oniron-select": this.typeChanged
      }, OPTIONS.map(function (opt) {
        return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
          platform: opt
        }, localize("ui.panel.config.automation.editor.triggers.type.".concat(opt, ".label")));
      }))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
        index: index,
        trigger: trigger,
        onChange: onChange,
        hass: hass,
        localize: localize
      }));
    }
  }]);

  return TriggerEdit;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_row.js":
/*!*****************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_row.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trigger_edit */ "./src/panels/config/js/trigger/trigger_edit.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var TriggerRow =
/*#__PURE__*/
function (_Component) {
  _inherits(TriggerRow, _Component);

  function TriggerRow() {
    var _this;

    _classCallCheck(this, TriggerRow);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TriggerRow).call(this));
    _this.onDelete = _this.onDelete.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(TriggerRow, [{
    key: "onDelete",
    value: function onDelete() {
      // eslint-disable-next-line
      if (confirm(this.props.localize("ui.panel.config.automation.editor.triggers.delete_confirm"))) {
        this.props.onChange(this.props.index, null);
      }
    }
  }, {
    key: "render",
    value: function render(props) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
        "class": "card-menu"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", {
        "no-animations": true,
        "horizontal-align": "right",
        "horizontal-offset": "-5",
        "vertical-offset": "-5"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", {
        icon: "hass:dots-vertical",
        slot: "dropdown-trigger"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
        slot: "dropdown-content"
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
        disabled: true
      }, props.localize("ui.panel.config.automation.editor.triggers.duplicate")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
        onTap: this.onDelete
      }, props.localize("ui.panel.config.automation.editor.triggers.delete"))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props)));
    }
  }]);

  return TriggerRow;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./src/panels/config/js/trigger/webhook.js":
/*!*************************************************!*\
  !*** ./src/panels/config/js/trigger/webhook.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebhookTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var WebhookTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(WebhookTrigger, _Component);

  function WebhookTrigger() {
    var _this;

    _classCallCheck(this, WebhookTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(WebhookTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    return _this;
  }

  _createClass(WebhookTrigger, [{
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          localize = _ref.localize;
      var webhookId = trigger.webhook_id;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
        label: localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id"),
        name: "webhook_id",
        value: webhookId,
        "onvalue-changed": this.onChange
      }));
    }
  }]);

  return WebhookTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


WebhookTrigger.defaultConfig = {
  webhook_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/zone.js":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/zone.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoneTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









function zoneAndLocationFilter(stateObj) {
  return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__["default"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["default"])(stateObj) !== "zone";
}

var ZoneTrigger =
/*#__PURE__*/
function (_Component) {
  _inherits(ZoneTrigger, _Component);

  function ZoneTrigger() {
    var _this;

    _classCallCheck(this, ZoneTrigger);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZoneTrigger).call(this));
    _this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(_assertThisInitialized(_this), "trigger");
    _this.radioGroupPicked = _this.radioGroupPicked.bind(_assertThisInitialized(_this));
    _this.entityPicked = _this.entityPicked.bind(_assertThisInitialized(_this));
    _this.zonePicked = _this.zonePicked.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ZoneTrigger, [{
    key: "entityPicked",
    value: function entityPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        entity_id: ev.target.value
      }));
    }
  }, {
    key: "zonePicked",
    value: function zonePicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        zone: ev.target.value
      }));
    }
  }, {
    key: "radioGroupPicked",
    value: function radioGroupPicked(ev) {
      this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
        event: ev.target.selected
      }));
    }
    /* eslint-disable camelcase */

  }, {
    key: "render",
    value: function render(_ref) {
      var trigger = _ref.trigger,
          hass = _ref.hass,
          localize = _ref.localize;
      var entity_id = trigger.entity_id,
          zone = trigger.zone,
          event = trigger.event;
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
        label: localize("ui.panel.config.automation.editor.triggers.type.zone.entity"),
        value: entity_id,
        onChange: this.entityPicked,
        hass: hass,
        allowCustomEntity: true,
        entityFilter: zoneAndLocationFilter
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
        label: localize("ui.panel.config.automation.editor.triggers.type.zone.zone"),
        value: zone,
        onChange: this.zonePicked,
        hass: hass,
        allowCustomEntity: true,
        domainFilter: "zone"
      }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
        id: "eventlabel"
      }, localize("ui.panel.config.automation.editor.triggers.type.zone.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
        selected: event,
        "aria-labelledby": "eventlabel",
        "onpaper-radio-group-changed": this.radioGroupPicked
      }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "enter"
      }, localize("ui.panel.config.automation.editor.triggers.type.zone.enter")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
        name: "leave"
      }, localize("ui.panel.config.automation.editor.triggers.type.zone.leave"))));
    }
  }]);

  return ZoneTrigger;
}(preact__WEBPACK_IMPORTED_MODULE_0__["Component"]);


ZoneTrigger.defaultConfig = {
  entity_id: "",
  zone: "",
  event: "enter"
};

/***/ })

}]);
//# sourceMappingURL=panel-config-automation.chunk.js.map