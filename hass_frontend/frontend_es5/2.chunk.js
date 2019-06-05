(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/panels/config/cloud/ha-config-cloud-forgot-password.js":
/*!********************************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud-forgot-password.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .content {\n          padding-bottom: 24px;\n          direction: ltr;\n        }\n\n        ha-card {\n          max-width: 600px;\n          margin: 0 auto;\n          margin-top: 24px;\n        }\n        h1 {\n          @apply --paper-font-headline;\n          margin: 0;\n        }\n        .error {\n          color: var(--google-red-500);\n        }\n        .card-actions {\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n        }\n        .card-actions a {\n          color: var(--primary-text-color);\n        }\n        [hidden] {\n          display: none;\n        }\n      </style>\n      <hass-subpage header=\"Forgot Password\">\n        <div class=\"content\">\n          <ha-card header=\"Forgot your password\">\n            <div class=\"card-content\">\n              <p>\n                Enter your email address and we will send you a link to reset\n                your password.\n              </p>\n              <div class=\"error\" hidden$=\"[[!_error]]\">[[_error]]</div>\n              <paper-input\n                autofocus=\"\"\n                id=\"email\"\n                label=\"E-mail\"\n                value=\"{{email}}\"\n                type=\"email\"\n                on-keydown=\"_keyDown\"\n                error-message=\"Invalid email\"\n              ></paper-input>\n            </div>\n            <div class=\"card-actions\">\n              <ha-progress-button\n                on-click=\"_handleEmailPasswordReset\"\n                progress=\"[[_requestInProgress]]\"\n                >Send reset email</ha-progress-button\n              >\n            </div>\n          </ha-card>\n        </div>\n      </hass-subpage>\n    "]);

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

var HaConfigCloudForgotPassword =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaConfigCloudForgotPassword, _EventsMixin);

  function HaConfigCloudForgotPassword() {
    _classCallCheck(this, HaConfigCloudForgotPassword);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCloudForgotPassword).apply(this, arguments));
  }

  _createClass(HaConfigCloudForgotPassword, [{
    key: "_emailChanged",
    value: function _emailChanged() {
      this._error = "";
      this.$.email.invalid = false;
    }
  }, {
    key: "_keyDown",
    value: function _keyDown(ev) {
      // validate on enter
      if (ev.keyCode === 13) {
        this._handleEmailPasswordReset();

        ev.preventDefault();
      }
    }
  }, {
    key: "_handleEmailPasswordReset",
    value: function _handleEmailPasswordReset() {
      var _this = this;

      if (!this.email || !this.email.includes("@")) {
        this.$.email.invalid = true;
      }

      if (this.$.email.invalid) return;
      this._requestInProgress = true;
      this.hass.callApi("post", "cloud/forgot_password", {
        email: this.email
      }).then(function () {
        _this._requestInProgress = false;

        _this.fire("cloud-done", {
          flashMessage: "Check your email for instructions on how to reset your password."
        });
      }, function (err) {
        return _this.setProperties({
          _requestInProgress: false,
          _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
        });
      });
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
        email: {
          type: String,
          notify: true,
          observer: "_emailChanged"
        },
        _requestInProgress: {
          type: Boolean,
          value: false
        },
        _error: {
          type: String,
          value: ""
        }
      };
    }
  }]);

  return HaConfigCloudForgotPassword;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-config-cloud-forgot-password", HaConfigCloudForgotPassword);

/***/ })

}]);
//# sourceMappingURL=2.chunk.js.map