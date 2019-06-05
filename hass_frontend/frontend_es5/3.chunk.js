(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./src/panels/config/cloud/ha-config-cloud-register.js":
/*!*************************************************************!*\
  !*** ./src/panels/config/cloud/ha-config-cloud-register.js ***!
  \*************************************************************/
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
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"iron-flex ha-style\">\n      .content {\n        direction: ltr;\n      }\n\n      [slot=introduction] {\n        margin: -1em 0;\n      }\n      [slot=introduction] a {\n        color: var(--primary-color);\n      }\n      a {\n        color: var(--primary-color);\n      }\n      paper-item {\n        cursor: pointer;\n      }\n      h1 {\n        @apply --paper-font-headline;\n        margin: 0;\n      }\n      .error {\n        color: var(--google-red-500);\n      }\n      .card-actions {\n        display: flex;\n        justify-content: space-between;\n        align-items: center;\n      }\n      [hidden] {\n        display: none;\n      }\n    </style>\n    <hass-subpage header=\"Register Account\">\n      <div class=\"content\">\n        <ha-config-section is-wide=\"[[isWide]]\">\n          <span slot=\"header\">Start your free trial</span>\n          <div slot=\"introduction\">\n            <p>\n              Create an account to start your free one month trial with ioBroker Cloud. No payment information necessary.\n            </p>\n            <p>\n              The trial will give you access to all the benefits of ioBroker Cloud, including:\n            </p>\n            <ul>\n              <li>Control of ioBroker away from home</li>\n              <li>Integration with Google Assistant</li>\n              <li>Integration with Amazon Alexa</li>\n              <li>Easy integration with webhook-based apps like OwnTracks</li>\n            </ul>\n            <p>\n              This service is run by our partner <a href='https://www.nabucasa.com' target='_blank'>Nabu&nbsp;Casa,&nbsp;Inc</a>, a company founded by the founders of ioBroker and Hass.io.\n            </p>\n\n            <p>\n              By registering an account you agree to the following terms and conditions.\n              </p><ul>\n                <li><a href=\"https://home-assistant.io/tos/\" target=\"_blank\">Terms and Conditions</a></li>\n                <li><a href=\"https://home-assistant.io/privacy/\" target=\"_blank\">Privacy Policy</a></li>\n              </ul>\n            </p>\n          </div>\n\n          <ha-card header=\"Create Account\">\n            <div class=\"card-content\">\n              <div class=\"header\">\n                <div class=\"error\" hidden$=\"[[!_error]]\">[[_error]]</div>\n              </div>\n              <paper-input autofocus=\"\" id=\"email\" label=\"Email address\" type=\"email\" value=\"{{email}}\" on-keydown=\"_keyDown\" error-message=\"Invalid email\"></paper-input>\n              <paper-input id=\"password\" label=\"Password\" value=\"{{_password}}\" type=\"password\" on-keydown=\"_keyDown\" error-message=\"Your password needs to be at least 8 characters\"></paper-input>\n            </div>\n            <div class=\"card-actions\">\n              <ha-progress-button on-click=\"_handleRegister\" progress=\"[[_requestInProgress]]\">Start trial</ha-progress-button>\n              <button class=\"link\" hidden=\"[[_requestInProgress]]\" on-click=\"_handleResendVerifyEmail\">Resend confirmation email</button>\n            </div>\n          </ha-card>\n        </ha-config-section>\n      </div>\n    </hass-subpage>\n"]);

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

var HaConfigCloudRegister =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaConfigCloudRegister, _EventsMixin);

  function HaConfigCloudRegister() {
    _classCallCheck(this, HaConfigCloudRegister);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigCloudRegister).apply(this, arguments));
  }

  _createClass(HaConfigCloudRegister, [{
    key: "_inputChanged",
    value: function _inputChanged() {
      this._error = "";
      this.$.email.invalid = false;
      this.$.password.invalid = false;
    }
  }, {
    key: "_keyDown",
    value: function _keyDown(ev) {
      // validate on enter
      if (ev.keyCode === 13) {
        this._handleRegister();

        ev.preventDefault();
      }
    }
  }, {
    key: "_handleRegister",
    value: function _handleRegister() {
      var _this = this;

      var invalid = false;

      if (!this.email || !this.email.includes("@")) {
        this.$.email.invalid = true;
        this.$.email.focus();
        invalid = true;
      }

      if (this._password.length < 8) {
        this.$.password.invalid = true;

        if (!invalid) {
          invalid = true;
          this.$.password.focus();
        }
      }

      if (invalid) return;
      this._requestInProgress = true;
      this.hass.callApi("post", "cloud/register", {
        email: this.email,
        password: this._password
      }).then(function () {
        return _this._verificationEmailSent();
      }, function (err) {
        // Do this before setProperties because changing it clears errors.
        _this._password = "";

        _this.setProperties({
          _requestInProgress: false,
          _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
        });
      });
    }
  }, {
    key: "_handleResendVerifyEmail",
    value: function _handleResendVerifyEmail() {
      var _this2 = this;

      if (!this.email) {
        this.$.email.invalid = true;
        return;
      }

      this.hass.callApi("post", "cloud/resend_confirm", {
        email: this.email
      }).then(function () {
        return _this2._verificationEmailSent();
      }, function (err) {
        return _this2.setProperties({
          _error: err && err.body && err.body.message ? err.body.message : "Unknown error"
        });
      });
    }
  }, {
    key: "_verificationEmailSent",
    value: function _verificationEmailSent() {
      this.setProperties({
        _requestInProgress: false,
        _password: ""
      });
      this.fire("cloud-done", {
        flashMessage: "Account created! Check your email for instructions on how to activate your account."
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
        isWide: Boolean,
        email: {
          type: String,
          notify: true
        },
        _requestInProgress: {
          type: Boolean,
          value: false
        },
        _password: {
          type: String,
          value: ""
        },
        _error: {
          type: String,
          value: ""
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_inputChanged(email, _password)"];
    }
  }]);

  return HaConfigCloudRegister;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_8__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-config-cloud-register", HaConfigCloudRegister);

/***/ })

}]);
//# sourceMappingURL=3.chunk.js.map