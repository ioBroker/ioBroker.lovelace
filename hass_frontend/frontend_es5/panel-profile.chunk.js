(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-profile"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
  return hass && hass.config.components.indexOf(component) !== -1;
}

/***/ }),

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

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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


var paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

var HaPaperDropdownClass =
/*#__PURE__*/
function (_paperDropdownClass) {
  _inherits(HaPaperDropdownClass, _paperDropdownClass);

  function HaPaperDropdownClass() {
    _classCallCheck(this, HaPaperDropdownClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperDropdownClass).apply(this, arguments));
  }

  _createClass(HaPaperDropdownClass, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaPaperDropdownClass.prototype), "ready", this).call(this); // wait to check for direction since otherwise direction is wrong even though top level is RTL


      setTimeout(function () {
        if (window.getComputedStyle(_this).direction === "rtl") {
          _this.style.textAlign = "right";
        }
      }, 100);
    }
  }]);

  return HaPaperDropdownClass;
}(paperDropdownClass);
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

/***/ }),

/***/ "./src/components/ha-push-notifications-toggle.js":
/*!********************************************************!*\
  !*** ./src/components/ha-push-notifications-toggle.js ***!
  \********************************************************/
/*! exports provided: pushSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushSupported", function() { return pushSupported; });
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _data_notify_html5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/notify_html5 */ "./src/data/notify_html5.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <paper-toggle-button\n        disabled=\"[[_compDisabled(disabled, loading)]]\"\n        checked=\"{{pushChecked}}\"\n        on-change=\"handlePushChange\"\n      ></paper-toggle-button>\n    "]);

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






var pushSupported = "serviceWorker" in navigator && "PushManager" in window && (document.location.protocol === "https:" || document.location.hostname === "localhost" || document.location.hostname === "127.0.0.1");
/*
 * @appliesMixin EventsMixin
 */

var HaPushNotificationsToggle =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaPushNotificationsToggle, _EventsMixin);

  function HaPushNotificationsToggle() {
    _classCallCheck(this, HaPushNotificationsToggle);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPushNotificationsToggle).apply(this, arguments));
  }

  _createClass(HaPushNotificationsToggle, [{
    key: "connectedCallback",
    value: function () {
      var _connectedCallback = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var _this = this;

        var reg;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _get(_getPrototypeOf(HaPushNotificationsToggle.prototype), "connectedCallback", this).call(this);

                if (pushSupported) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return navigator.serviceWorker.ready;

              case 6:
                reg = _context.sent;

                if (reg.pushManager) {
                  _context.next = 9;
                  break;
                }

                return _context.abrupt("return");

              case 9:
                reg.pushManager.getSubscription().then(function (subscription) {
                  _this.loading = false;
                  _this.pushChecked = !!subscription;
                });
                _context.next = 14;
                break;

              case 12:
                _context.prev = 12;
                _context.t0 = _context["catch"](3);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 12]]);
      }));

      function connectedCallback() {
        return _connectedCallback.apply(this, arguments);
      }

      return connectedCallback;
    }()
  }, {
    key: "handlePushChange",
    value: function handlePushChange(event) {
      // Somehow this is triggered on Safari on page load causing
      // it to get into a loop and crash the page.
      if (!pushSupported) return;

      if (event.target.checked) {
        this.subscribePushNotifications();
      } else {
        this.unsubscribePushNotifications();
      }
    }
  }, {
    key: "subscribePushNotifications",
    value: function () {
      var _subscribePushNotifications = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var reg, sub, browserName, name, applicationServerKey, message;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return navigator.serviceWorker.ready;

              case 2:
                reg = _context2.sent;
                _context2.prev = 3;

                if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
                  browserName = "firefox";
                } else {
                  browserName = "chrome";
                }

                name = prompt("What should this device be called ?");

                if (!(name == null)) {
                  _context2.next = 9;
                  break;
                }

                this.pushChecked = false;
                return _context2.abrupt("return");

              case 9:
                _context2.prev = 9;
                _context2.next = 12;
                return Object(_data_notify_html5__WEBPACK_IMPORTED_MODULE_3__["getAppKey"])(this.hass);

              case 12:
                applicationServerKey = _context2.sent;
                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](9);
                applicationServerKey = null;

              case 18:
                if (!applicationServerKey) {
                  _context2.next = 24;
                  break;
                }

                _context2.next = 21;
                return reg.pushManager.subscribe({
                  userVisibleOnly: true,
                  applicationServerKey: applicationServerKey
                });

              case 21:
                sub = _context2.sent;
                _context2.next = 27;
                break;

              case 24:
                _context2.next = 26;
                return reg.pushManager.subscribe({
                  userVisibleOnly: true
                });

              case 26:
                sub = _context2.sent;

              case 27:
                _context2.next = 29;
                return this.hass.callApi("POST", "notify.html5", {
                  subscription: sub,
                  browser: browserName,
                  name: name
                });

              case 29:
                _context2.next = 40;
                break;

              case 31:
                _context2.prev = 31;
                _context2.t1 = _context2["catch"](3);
                message = _context2.t1.message || "Notification registration failed.";

                if (!sub) {
                  _context2.next = 37;
                  break;
                }

                _context2.next = 37;
                return sub.unsubscribe();

              case 37:
                // eslint-disable-next-line
                console.error(_context2.t1);
                this.fire("hass-notification", {
                  message: message
                });
                this.pushChecked = false;

              case 40:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[3, 31], [9, 15]]);
      }));

      function subscribePushNotifications() {
        return _subscribePushNotifications.apply(this, arguments);
      }

      return subscribePushNotifications;
    }()
  }, {
    key: "unsubscribePushNotifications",
    value: function () {
      var _unsubscribePushNotifications = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee3() {
        var reg, sub, message;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return navigator.serviceWorker.ready;

              case 2:
                reg = _context3.sent;
                _context3.prev = 3;
                _context3.next = 6;
                return reg.pushManager.getSubscription();

              case 6:
                sub = _context3.sent;

                if (sub) {
                  _context3.next = 9;
                  break;
                }

                return _context3.abrupt("return");

              case 9:
                _context3.next = 11;
                return this.hass.callApi("DELETE", "notify.html5", {
                  subscription: sub
                });

              case 11:
                _context3.next = 13;
                return sub.unsubscribe();

              case 13:
                _context3.next = 21;
                break;

              case 15:
                _context3.prev = 15;
                _context3.t0 = _context3["catch"](3);
                message = _context3.t0.message || "Failed unsubscribing for push notifications."; // eslint-disable-next-line

                console.error("Error in unsub push", _context3.t0);
                this.fire("hass-notification", {
                  message: message
                });
                this.pushChecked = true;

              case 21:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[3, 15]]);
      }));

      function unsubscribePushNotifications() {
        return _unsubscribePushNotifications.apply(this, arguments);
      }

      return unsubscribePushNotifications;
    }()
  }, {
    key: "_compDisabled",
    value: function _compDisabled(disabled, loading) {
      return disabled || loading;
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
        hass: {
          type: Object,
          value: null
        },
        disabled: {
          type: Boolean,
          value: false
        },
        pushChecked: {
          type: Boolean,
          value: "Notification" in window && Notification.permission === "granted"
        },
        loading: {
          type: Boolean,
          value: true
        }
      };
    }
  }]);

  return HaPushNotificationsToggle;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-push-notifications-toggle", HaPushNotificationsToggle);

/***/ }),

/***/ "./src/data/notify_html5.ts":
/*!**********************************!*\
  !*** ./src/data/notify_html5.ts ***!
  \**********************************/
/*! exports provided: getAppKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppKey", function() { return getAppKey; });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function urlBase64ToUint8Array(base64String) {
  var padding = "=".repeat((4 - base64String.length % 4) % 4);
  var base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  var rawData = window.atob(base64);
  var outputArray = new Uint8Array(rawData.length);

  for (var i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

var getAppKey =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(hass) {
    var res;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return hass.callWS({
              type: "notify/html5/appkey"
            });

          case 2:
            res = _context.sent;
            return _context.abrupt("return", res ? urlBase64ToUint8Array(res) : null);

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function getAppKey(_x) {
    return _ref.apply(this, arguments);
  };
}();

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

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
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
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            hass: Object,

            /**
             * Translates a string to the current `language`. Any parameters to the
             * string should be passed in order, as follows:
             * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
             */
            localize: {
              type: Function,
              computed: "__computeLocalize(hass.localize)"
            }
          };
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/profile/ha-change-password-card.js":
/*!*******************************************************!*\
  !*** ./src/panels/profile/ha-change-password-card.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        .currentPassword {\n          margin-top: -4px;\n        }\n      </style>\n      <div>\n        <ha-card\n          header=\"[[localize('ui.panel.profile.change_password.header')]]\"\n        >\n          <div class=\"card-content\">\n            <template is=\"dom-if\" if=\"[[_errorMsg]]\">\n              <div class=\"error\">[[_errorMsg]]</div>\n            </template>\n            <template is=\"dom-if\" if=\"[[_statusMsg]]\">\n              <div class=\"status\">[[_statusMsg]]</div>\n            </template>\n            <paper-input\n              class=\"currentPassword\"\n              label=\"[[localize('ui.panel.profile.change_password.current_password')]]\"\n              type=\"password\"\n              value=\"{{_currentPassword}}\"\n              required\n              auto-validate\n              error-message=\"[[localize('ui.panel.profile.change_password.error_required')]]\"\n            ></paper-input>\n            <template is=\"dom-if\" if=\"[[_currentPassword]]\">\n              <paper-input\n                label=\"[[localize('ui.panel.profile.change_password.new_password')]]\"\n                type=\"password\"\n                value=\"{{_password1}}\"\n                required\n                auto-validate\n                error-message=\"[[localize('ui.panel.profile.change_password.error_required')]]\"\n              ></paper-input>\n              <paper-input\n                label=\"[[localize('ui.panel.profile.change_password.confirm_new_password')]]\"\n                type=\"password\"\n                value=\"{{_password2}}\"\n                required\n                auto-validate\n                error-message=\"[[localize('ui.panel.profile.change_password.error_required')]]\"\n              ></paper-input>\n            </template>\n          </div>\n          <div class=\"card-actions\">\n            <template is=\"dom-if\" if=\"[[_loading]]\">\n              <div><paper-spinner active></paper-spinner></div>\n            </template>\n            <template is=\"dom-if\" if=\"[[!_loading]]\">\n              <mwc-button on-click=\"_changePassword\"\n                >[[localize('ui.panel.profile.change_password.submit')]]</mwc-button\n              >\n            </template>\n          </div>\n        </ha-card>\n      </div>\n    "]);

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

var HaChangePasswordCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaChangePasswordCard, _LocalizeMixin);

  function HaChangePasswordCard() {
    _classCallCheck(this, HaChangePasswordCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaChangePasswordCard).apply(this, arguments));
  }

  _createClass(HaChangePasswordCard, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaChangePasswordCard.prototype), "ready", this).call(this);

      this.addEventListener("keypress", function (ev) {
        _this._statusMsg = null;

        if (ev.keyCode === 13) {
          _this._changePassword();
        }
      });
    }
  }, {
    key: "_changePassword",
    value: function () {
      var _changePassword2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._statusMsg = null;

                if (!(!this._currentPassword || !this._password1 || !this._password2)) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                if (!(this._password1 !== this._password2)) {
                  _context.next = 6;
                  break;
                }

                this._errorMsg = "New password confirmation doesn't match";
                return _context.abrupt("return");

              case 6:
                if (!(this._currentPassword === this._password1)) {
                  _context.next = 9;
                  break;
                }

                this._errorMsg = "New password must be different than current password";
                return _context.abrupt("return");

              case 9:
                this._loading = true;
                this._errorMsg = null;
                _context.prev = 11;
                _context.next = 14;
                return this.hass.callWS({
                  type: "config/auth_provider/homeassistant/change_password",
                  current_password: this._currentPassword,
                  new_password: this._password1
                });

              case 14:
                this.setProperties({
                  _statusMsg: "Password changed successfully",
                  _currentPassword: null,
                  _password1: null,
                  _password2: null
                });
                _context.next = 20;
                break;

              case 17:
                _context.prev = 17;
                _context.t0 = _context["catch"](11);
                this._errorMsg = _context.t0.message;

              case 20:
                this._loading = false;

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[11, 17]]);
      }));

      function _changePassword() {
        return _changePassword2.apply(this, arguments);
      }

      return _changePassword;
    }()
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _statusMsg: String,
        _errorMsg: String,
        _currentPassword: String,
        _password1: String,
        _password2: String
      };
    }
  }]);

  return HaChangePasswordCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("ha-change-password-card", HaChangePasswordCard);

/***/ }),

/***/ "./src/panels/profile/ha-long-lived-access-tokens-card.js":
/*!****************************************************************!*\
  !*** ./src/panels/profile/ha-long-lived-access-tokens-card.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        .card-content {\n          margin: -1em 0;\n        }\n        a {\n          color: var(--primary-color);\n        }\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n      </style>\n      <ha-card\n        header=\"[[localize('ui.panel.profile.long_lived_access_tokens.header')]]\"\n      >\n        <div class=\"card-content\">\n          <p>\n            [[localize('ui.panel.profile.long_lived_access_tokens.description')]]\n            <a\n              href=\"https://developers.home-assistant.io/docs/en/auth_api.html#making-authenticated-requests\"\n              target=\"_blank\"\n            >\n              [[localize('ui.panel.profile.long_lived_access_tokens.learn_auth_requests')]]\n            </a>\n          </p>\n          <template is=\"dom-if\" if=\"[[!_tokens.length]]\">\n            <p>\n              [[localize('ui.panel.profile.long_lived_access_tokens.empty_state')]]\n            </p>\n          </template>\n        </div>\n        <template is=\"dom-repeat\" items=\"[[_tokens]]\">\n          <ha-settings-row two-line>\n            <span slot=\"heading\">[[item.client_name]]</span>\n            <div slot=\"description\">[[_formatCreatedAt(item.created_at)]]</div>\n            <paper-icon-button\n              icon=\"hass:delete\"\n              on-click=\"_handleDelete\"\n            ></paper-icon-button>\n          </ha-settings-row>\n        </template>\n        <div class=\"card-actions\">\n          <mwc-button on-click=\"_handleCreate\">\n            [[localize('ui.panel.profile.long_lived_access_tokens.create')]]\n          </mwc-button>\n        </div>\n      </ha-card>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaLongLivedTokens =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaLongLivedTokens, _LocalizeMixin);

  function HaLongLivedTokens() {
    _classCallCheck(this, HaLongLivedTokens);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaLongLivedTokens).apply(this, arguments));
  }

  _createClass(HaLongLivedTokens, [{
    key: "_computeTokens",
    value: function _computeTokens(refreshTokens) {
      return refreshTokens.filter(function (tkn) {
        return tkn.type === "long_lived_access_token";
      }).reverse();
    }
  }, {
    key: "_formatTitle",
    value: function _formatTitle(name) {
      return this.localize("ui.panel.profile.long_lived_access_tokens.token_title", "name", name);
    }
  }, {
    key: "_formatCreatedAt",
    value: function _formatCreatedAt(created) {
      return this.localize("ui.panel.profile.long_lived_access_tokens.created_at", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(created), this.hass.language));
    }
  }, {
    key: "_handleCreate",
    value: function () {
      var _handleCreate2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var name, token;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                name = prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_name"));

                if (name) {
                  _context.next = 3;
                  break;
                }

                return _context.abrupt("return");

              case 3:
                _context.prev = 3;
                _context.next = 6;
                return this.hass.callWS({
                  type: "auth/long_lived_access_token",
                  lifespan: 3650,
                  client_name: name
                });

              case 6:
                token = _context.sent;
                prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_copy_token"), token);
                this.fire("hass-refresh-tokens");
                _context.next = 15;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](3);
                // eslint-disable-next-line
                console.error(_context.t0);
                alert(this.localize("ui.panel.profile.long_lived_access_tokens.create_failed"));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 11]]);
      }));

      function _handleCreate() {
        return _handleCreate2.apply(this, arguments);
      }

      return _handleCreate;
    }()
  }, {
    key: "_handleDelete",
    value: function () {
      var _handleDelete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2(ev) {
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (confirm(this.localize("ui.panel.profile.long_lived_access_tokens.confirm_delete", "name", ev.model.item.client_name))) {
                  _context2.next = 2;
                  break;
                }

                return _context2.abrupt("return");

              case 2:
                _context2.prev = 2;
                _context2.next = 5;
                return this.hass.callWS({
                  type: "auth/delete_refresh_token",
                  refresh_token_id: ev.model.item.id
                });

              case 5:
                this.fire("hass-refresh-tokens");
                _context2.next = 12;
                break;

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](2);
                // eslint-disable-next-line
                console.error(_context2.t0);
                alert(this.localize("ui.panel.profile.long_lived_access_tokens.delete_failed"));

              case 12:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[2, 8]]);
      }));

      function _handleDelete(_x) {
        return _handleDelete2.apply(this, arguments);
      }

      return _handleDelete;
    }()
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
        refreshTokens: Array,
        _tokens: {
          type: Array,
          computed: "_computeTokens(refreshTokens)"
        }
      };
    }
  }]);

  return HaLongLivedTokens;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])));

customElements.define("ha-long-lived-access-tokens-card", HaLongLivedTokens);

/***/ }),

/***/ "./src/panels/profile/ha-mfa-modules-card.js":
/*!***************************************************!*\
  !*** ./src/panels/profile/ha-mfa-modules-card.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        .error {\n          color: red;\n        }\n        .status {\n          color: var(--primary-color);\n        }\n        .error,\n        .status {\n          position: absolute;\n          top: -4px;\n        }\n        mwc-button {\n          margin-right: -0.57em;\n        }\n      </style>\n      <ha-card header=\"[[localize('ui.panel.profile.mfa.header')]]\">\n        <template is=\"dom-repeat\" items=\"[[mfaModules]]\" as=\"module\">\n          <paper-item>\n            <paper-item-body two-line=\"\">\n              <div>[[module.name]]</div>\n              <div secondary=\"\">[[module.id]]</div>\n            </paper-item-body>\n            <template is=\"dom-if\" if=\"[[module.enabled]]\">\n              <mwc-button on-click=\"_disable\"\n                >[[localize('ui.panel.profile.mfa.disable')]]</mwc-button\n              >\n            </template>\n            <template is=\"dom-if\" if=\"[[!module.enabled]]\">\n              <mwc-button on-click=\"_enable\"\n                >[[localize('ui.panel.profile.mfa.enable')]]</mwc-button\n              >\n            </template>\n          </paper-item>\n        </template>\n      </ha-card>\n    "]);

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










var registeredDialog = false;
/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaMfaModulesCard =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaMfaModulesCard, _EventsMixin);

  function HaMfaModulesCard() {
    _classCallCheck(this, HaMfaModulesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMfaModulesCard).apply(this, arguments));
  }

  _createClass(HaMfaModulesCard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaMfaModulesCard.prototype), "connectedCallback", this).call(this);

      if (!registeredDialog) {
        registeredDialog = true;
        this.fire("register-dialog", {
          dialogShowEvent: "show-mfa-module-setup-flow",
          dialogTag: "ha-mfa-module-setup-flow",
          dialogImport: function dialogImport() {
            return Promise.all(/*! import() | ha-mfa-module-setup-flow */[__webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-calendar~panel-config-cus~ab938ece"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-kiosk~panel-lovelace~pane~abfacb2f"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow"), __webpack_require__.e("ha-mfa-module-setup-flow")]).then(__webpack_require__.bind(null, /*! ./ha-mfa-module-setup-flow */ "./src/panels/profile/ha-mfa-module-setup-flow.js"));
          }
        });
      }
    }
  }, {
    key: "_enable",
    value: function _enable(ev) {
      var _this = this;

      this.fire("show-mfa-module-setup-flow", {
        hass: this.hass,
        mfaModuleId: ev.model.module.id,
        dialogClosedCallback: function dialogClosedCallback() {
          return _this._refreshCurrentUser();
        }
      });
    }
  }, {
    key: "_disable",
    value: function _disable(ev) {
      var _this2 = this;

      if (!confirm(this.localize("ui.panel.profile.mfa.confirm_disable", "name", ev.model.module.name))) {
        return;
      }

      var mfaModuleId = ev.model.module.id;
      this.hass.callWS({
        type: "auth/depose_mfa",
        mfa_module_id: mfaModuleId
      }).then(function () {
        _this2._refreshCurrentUser();
      });
    }
  }, {
    key: "_refreshCurrentUser",
    value: function _refreshCurrentUser() {
      this.fire("hass-refresh-current-user");
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _statusMsg: String,
        _errorMsg: String,
        mfaModules: Array
      };
    }
  }]);

  return HaMfaModulesCard;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ha-mfa-modules-card", HaMfaModulesCard);

/***/ }),

/***/ "./src/panels/profile/ha-panel-profile.js":
/*!************************************************!*\
  !*** ./src/panels/profile/ha-panel-profile.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_change_password_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-change-password-card */ "./src/panels/profile/ha-change-password-card.js");
/* harmony import */ var _ha_mfa_modules_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-mfa-modules-card */ "./src/panels/profile/ha-mfa-modules-card.js");
/* harmony import */ var _ha_refresh_tokens_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ha-refresh-tokens-card */ "./src/panels/profile/ha-refresh-tokens-card.js");
/* harmony import */ var _ha_long_lived_access_tokens_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ha-long-lived-access-tokens-card */ "./src/panels/profile/ha-long-lived-access-tokens-card.js");
/* harmony import */ var _ha_pick_language_row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ha-pick-language-row */ "./src/panels/profile/ha-pick-language-row.js");
/* harmony import */ var _ha_pick_theme_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ha-pick-theme-row */ "./src/panels/profile/ha-pick-theme-row.js");
/* harmony import */ var _ha_push_notifications_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ha-push-notifications-row */ "./src/panels/profile/ha-push-notifications-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          display: block;\n          max-width: 600px;\n          margin: 0 auto;\n        }\n\n        .content > * {\n          display: block;\n          margin: 24px 0;\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button></ha-menu-button>\n            <div main-title>[[localize('panel.profile')]]</div>\n          </app-toolbar>\n        </app-header>\n\n        <div class=\"content\">\n          <ha-card header=\"[[hass.user.name]]\">\n            <div class=\"card-content\">\n              [[localize('ui.panel.profile.current_user', 'fullName',\n              hass.user.name)]]\n              <template is=\"dom-if\" if=\"[[hass.user.is_owner]]\"\n                >[[localize('ui.panel.profile.is_owner')]]</template\n              >\n            </div>\n\n            <hello-world hass=\"[[hass]]\"></hello-world>\n\n            <ha-pick-language-row\n              narrow=\"[[narrow]]\"\n              hass=\"[[hass]]\"\n            ></ha-pick-language-row>\n            <ha-pick-theme-row\n              narrow=\"[[narrow]]\"\n              hass=\"[[hass]]\"\n            ></ha-pick-theme-row>\n            <ha-push-notifications-row\n              narrow=\"[[narrow]]\"\n              hass=\"[[hass]]\"\n            ></ha-push-notifications-row>\n\n            <div class=\"card-actions\">\n              <mwc-button class=\"warning\" on-click=\"_handleLogOut\"\n                >[[localize('ui.panel.profile.logout')]]</mwc-button\n              >\n            </div>\n          </ha-card>\n\n          <template is=\"dom-if\" if=\"[[_canChangePassword(hass.user)]]\">\n            <ha-change-password-card hass=\"[[hass]]\"></ha-change-password-card>\n          </template>\n\n          <ha-mfa-modules-card\n            hass=\"[[hass]]\"\n            mfa-modules=\"[[hass.user.mfa_modules]]\"\n          ></ha-mfa-modules-card>\n\n          <ha-refresh-tokens-card\n            hass=\"[[hass]]\"\n            refresh-tokens=\"[[_refreshTokens]]\"\n            on-hass-refresh-tokens=\"_refreshRefreshTokens\"\n          ></ha-refresh-tokens-card>\n\n          <ha-long-lived-access-tokens-card\n            hass=\"[[hass]]\"\n            refresh-tokens=\"[[_refreshTokens]]\"\n            on-hass-refresh-tokens=\"_refreshRefreshTokens\"\n          ></ha-long-lived-access-tokens-card>\n        </div>\n      </app-header-layout>\n    "]);

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
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaPanelProfile =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaPanelProfile, _EventsMixin);

  function HaPanelProfile() {
    _classCallCheck(this, HaPanelProfile);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelProfile).apply(this, arguments));
  }

  _createClass(HaPanelProfile, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaPanelProfile.prototype), "connectedCallback", this).call(this);

      this._refreshRefreshTokens();
    }
  }, {
    key: "_refreshRefreshTokens",
    value: function () {
      var _refreshRefreshTokens2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return this.hass.callWS({
                  type: "auth/refresh_tokens"
                });

              case 2:
                this._refreshTokens = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function _refreshRefreshTokens() {
        return _refreshRefreshTokens2.apply(this, arguments);
      }

      return _refreshRefreshTokens;
    }()
  }, {
    key: "_handleLogOut",
    value: function _handleLogOut() {
      this.fire("hass-logout");
    }
  }, {
    key: "_canChangePassword",
    value: function _canChangePassword(user) {
      return user.credentials.some(function (cred) {
        return cred.auth_provider_type === "homeassistant";
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        narrow: Boolean,
        _refreshTokens: Array
      };
    }
  }]);

  return HaPanelProfile;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_11__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])));

customElements.define("ha-panel-profile", HaPanelProfile);

/***/ }),

/***/ "./src/panels/profile/ha-pick-language-row.js":
/*!****************************************************!*\
  !*** ./src/panels/profile/ha-pick-language-row.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n        paper-item {\n          direction: ltr;\n        }\n        paper-item[is-rtl] {\n          direction: rtl;\n        }\n      </style>\n      <ha-settings-row narrow=\"[[narrow]]\">\n        <span slot=\"heading\"\n          >[[localize('ui.panel.profile.language.header')]]</span\n        >\n        <span slot=\"description\">\n          <a\n            href=\"https://developers.home-assistant.io/docs/en/internationalization_translation.html\"\n            target=\"_blank\"\n            >[[localize('ui.panel.profile.language.link_promo')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label=\"[[localize('ui.panel.profile.language.dropdown_label')]]\"\n          dynamic-align=\"\"\n        >\n          <paper-listbox\n            slot=\"dropdown-content\"\n            attr-for-selected=\"language-tag\"\n            selected=\"{{languageSelection}}\"\n          >\n            <template is=\"dom-repeat\" items=\"[[languages]]\">\n              <paper-item language-tag$=\"[[item.key]]\" is-rtl$=\"[[item.isRTL]]\">\n                [[item.nativeName]]\n              </paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    "]);

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









/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaPickLanguageRow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPickLanguageRow, _LocalizeMixin);

  function HaPickLanguageRow() {
    _classCallCheck(this, HaPickLanguageRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPickLanguageRow).apply(this, arguments));
  }

  _createClass(HaPickLanguageRow, [{
    key: "computeLanguages",
    value: function computeLanguages(hass) {
      if (!hass || !hass.translationMetadata) {
        return [];
      }

      var translations = hass.translationMetadata.translations;
      return Object.keys(translations).map(function (key) {
        return Object.assign({
          key: key
        }, translations[key]);
      });
    }
  }, {
    key: "setLanguageSelection",
    value: function setLanguageSelection(language) {
      this.languageSelection = language;
    }
  }, {
    key: "languageSelectionChanged",
    value: function languageSelectionChanged(newVal) {
      // Only fire event if language was changed. This prevents select updates when
      // responding to hass changes.
      if (newVal !== this.hass.language) {
        this.fire("hass-language-select", {
          language: newVal
        });
      }
    }
  }, {
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(HaPickLanguageRow.prototype), "ready", this).call(this);

      if (this.hass && this.hass.language) {
        this.setLanguageSelection(this.hass.language);
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
        hass: Object,
        narrow: Boolean,
        languageSelection: {
          type: String,
          observer: "languageSelectionChanged"
        },
        languages: {
          type: Array,
          computed: "computeLanguages(hass)"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["setLanguageSelection(language)"];
    }
  }]);

  return HaPickLanguageRow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-pick-language-row", HaPickLanguageRow);

/***/ }),

/***/ "./src/panels/profile/ha-pick-theme-row.js":
/*!*************************************************!*\
  !*** ./src/panels/profile/ha-pick-theme-row.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow=\"[[narrow]]\">\n        <span slot=\"heading\"\n          >[[localize('ui.panel.profile.themes.header')]]</span\n        >\n        <span slot=\"description\">\n          <template is=\"dom-if\" if=\"[[!_hasThemes]]\">\n            [[localize('ui.panel.profile.themes.error_no_theme')]]\n          </template>\n          <a\n            href=\"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/components/frontend/#defining-themes\"\n            target=\"_blank\"\n            >[[localize('ui.panel.profile.themes.link_promo')]]</a\n          >\n        </span>\n        <ha-paper-dropdown-menu\n          label=\"[[localize('ui.panel.profile.themes.dropdown_label')]]\"\n          dynamic-align\n          disabled=\"[[!_hasThemes]]\"\n        >\n          <paper-listbox slot=\"dropdown-content\" selected=\"{{selectedTheme}}\">\n            <template is=\"dom-repeat\" items=\"[[themes]]\" as=\"theme\">\n              <paper-item>[[theme]]</paper-item>\n            </template>\n          </paper-listbox>\n        </ha-paper-dropdown-menu>\n      </ha-settings-row>\n    "]);

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








/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaPickThemeRow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPickThemeRow, _LocalizeMixin);

  function HaPickThemeRow() {
    _classCallCheck(this, HaPickThemeRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPickThemeRow).apply(this, arguments));
  }

  _createClass(HaPickThemeRow, [{
    key: "_compHasThemes",
    value: function _compHasThemes(hass) {
      return hass.themes && hass.themes.themes && Object.keys(hass.themes.themes).length;
    }
  }, {
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(HaPickThemeRow.prototype), "ready", this).call(this);

      if (this.hass.selectedTheme && this.themes.indexOf(this.hass.selectedTheme) > 0) {
        this.selectedTheme = this.themes.indexOf(this.hass.selectedTheme);
      } else if (!this.hass.selectedTheme) {
        this.selectedTheme = 0;
      }
    }
  }, {
    key: "_computeThemes",
    value: function _computeThemes(hass) {
      if (!hass) return [];
      return ["Backend-selected", "default"].concat(Object.keys(hass.themes.themes).sort());
    }
  }, {
    key: "selectionChanged",
    value: function selectionChanged(hass, selection) {
      if (selection > 0 && selection < this.themes.length) {
        if (hass.selectedTheme !== this.themes[selection]) {
          this.fire("settheme", this.themes[selection]);
        }
      } else if (selection === 0 && hass.selectedTheme !== "") {
        this.fire("settheme", "");
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
        hass: Object,
        narrow: Boolean,
        _hasThemes: {
          type: Boolean,
          computed: "_compHasThemes(hass)"
        },
        themes: {
          type: Array,
          computed: "_computeThemes(hass)"
        },
        selectedTheme: {
          type: Number
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["selectionChanged(hass, selectedTheme)"];
    }
  }]);

  return HaPickThemeRow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-pick-theme-row", HaPickThemeRow);

/***/ }),

/***/ "./src/panels/profile/ha-push-notifications-row.js":
/*!*********************************************************!*\
  !*** ./src/panels/profile/ha-push-notifications-row.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_label_iron_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-label/iron-label */ "./node_modules/@polymer/iron-label/iron-label.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-push-notifications-toggle */ "./src/components/ha-push-notifications-toggle.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        a {\n          color: var(--primary-color);\n        }\n      </style>\n      <ha-settings-row narrow=\"[[narrow]]\">\n        <span slot=\"heading\"\n          >[[localize('ui.panel.profile.push_notifications.header')]]</span\n        >\n        <span slot=\"description\">\n          [[_description(_platformLoaded, _pushSupported)]]\n          <a\n            href=\"https://www.home-assistant.io/components/notify.html5/\"\n            target=\"_blank\"\n            >[[localize('ui.panel.profile.push_notifications.link_promo')]]</a\n          >\n        </span>\n        <ha-push-notifications-toggle\n          hass=\"[[hass]]\"\n          disabled=\"[[_error]]\"\n        ></ha-push-notifications-toggle>\n      </ha-settings-row>\n    "]);

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
 * @appliesMixin LocalizeMixin
 */

var HaPushNotificationsRow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPushNotificationsRow, _LocalizeMixin);

  function HaPushNotificationsRow() {
    _classCallCheck(this, HaPushNotificationsRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPushNotificationsRow).apply(this, arguments));
  }

  _createClass(HaPushNotificationsRow, [{
    key: "_compPlatformLoaded",
    value: function _compPlatformLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["default"])(hass, "notify.html5");
    }
  }, {
    key: "_compError",
    value: function _compError(platformLoaded, pushSupported_) {
      return !platformLoaded || !pushSupported_;
    }
  }, {
    key: "_description",
    value: function _description(platformLoaded, pushSupported_) {
      var key;

      if (!pushSupported_) {
        key = "error_use_https";
      } else if (!platformLoaded) {
        key = "error_load_platform";
      } else {
        key = "description";
      }

      return this.localize("ui.panel.profile.push_notifications.".concat(key));
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
        hass: Object,
        narrow: Boolean,
        _platformLoaded: {
          type: Boolean,
          computed: "_compPlatformLoaded(hass)"
        },
        _pushSupported: {
          type: Boolean,
          value: _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__["pushSupported"]
        },
        _error: {
          type: Boolean,
          computed: "_compError(_platformLoaded, _pushSupported)"
        }
      };
    }
  }]);

  return HaPushNotificationsRow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-push-notifications-row", HaPushNotificationsRow);

/***/ }),

/***/ "./src/panels/profile/ha-refresh-tokens-card.js":
/*!******************************************************!*\
  !*** ./src/panels/profile/ha-refresh-tokens-card.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-icon-button {\n          color: var(--primary-text-color);\n        }\n        paper-icon-button[disabled] {\n          color: var(--disabled-text-color);\n        }\n      </style>\n      <ha-card header=\"[[localize('ui.panel.profile.refresh_tokens.header')]]\">\n        <div class=\"card-content\">\n          [[localize('ui.panel.profile.refresh_tokens.description')]]\n        </div>\n        <template is=\"dom-repeat\" items=\"[[_computeTokens(refreshTokens)]]\">\n          <ha-settings-row three-line>\n            <span slot=\"heading\">[[_formatTitle(item.client_id)]]</span>\n            <div slot=\"description\">[[_formatCreatedAt(item.created_at)]]</div>\n            <div slot=\"description\">[[_formatLastUsed(item)]]</div>\n            <div>\n              <template is=\"dom-if\" if=\"[[item.is_current]]\">\n                <paper-tooltip position=\"left\"\n                  >[[localize('ui.panel.profile.refresh_tokens.current_token_tooltip')]]</paper-tooltip\n                >\n              </template>\n              <paper-icon-button\n                icon=\"hass:delete\"\n                on-click=\"_handleDelete\"\n                disabled=\"[[item.is_current]]\"\n              ></paper-icon-button>\n            </div>\n          </ha-settings-row>\n        </template>\n      </ha-card>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }










/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var HaRefreshTokens =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaRefreshTokens, _LocalizeMixin);

  function HaRefreshTokens() {
    _classCallCheck(this, HaRefreshTokens);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaRefreshTokens).apply(this, arguments));
  }

  _createClass(HaRefreshTokens, [{
    key: "_computeTokens",
    value: function _computeTokens(refreshTokens) {
      return refreshTokens.filter(function (tkn) {
        return tkn.type === "normal";
      }).reverse();
    }
  }, {
    key: "_formatTitle",
    value: function _formatTitle(clientId) {
      return this.localize("ui.panel.profile.refresh_tokens.token_title", "clientId", clientId);
    }
  }, {
    key: "_formatCreatedAt",
    value: function _formatCreatedAt(created) {
      return this.localize("ui.panel.profile.refresh_tokens.created_at", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(created), this.hass.language));
    }
  }, {
    key: "_formatLastUsed",
    value: function _formatLastUsed(item) {
      return item.last_used_at ? this.localize("ui.panel.profile.refresh_tokens.last_used", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(item.last_used_at), this.hass.language), "location", item.last_used_ip) : this.localize("ui.panel.profile.refresh_tokens.not_used");
    }
  }, {
    key: "_handleDelete",
    value: function () {
      var _handleDelete2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(ev) {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (confirm(this.localize("ui.panel.profile.refresh_tokens.confirm_delete", "name", ev.model.item.client_id))) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return");

              case 2:
                _context.prev = 2;
                _context.next = 5;
                return this.hass.callWS({
                  type: "auth/delete_refresh_token",
                  refresh_token_id: ev.model.item.id
                });

              case 5:
                this.fire("hass-refresh-tokens");
                _context.next = 12;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](2);
                // eslint-disable-next-line
                console.error(_context.t0);
                alert(this.localize("ui.panel.profile.refresh_tokens.delete_failed"));

              case 12:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 8]]);
      }));

      function _handleDelete(_x) {
        return _handleDelete2.apply(this, arguments);
      }

      return _handleDelete;
    }()
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        refreshTokens: Array
      };
    }
  }]);

  return HaRefreshTokens;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ha-refresh-tokens-card", HaRefreshTokens);

/***/ }),

/***/ "./src/panels/profile/ha-settings-row.js":
/*!***********************************************!*\
  !*** ./src/panels/profile/ha-settings-row.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          padding: 0 16px;\n          align-content: normal;\n          align-self: auto;\n          align-items: center;\n        }\n        :host([narrow]) {\n          align-items: normal;\n          flex-direction: column;\n          border-top: 1px solid var(--divider-color);\n          padding-bottom: 8px;\n        }\n        paper-item-body {\n          padding-right: 16px;\n        }\n      </style>\n      <paper-item-body two-line$=\"[[!threeLine]]\" three-line$=\"[[threeLine]]\">\n        <slot name=\"heading\"></slot>\n        <div secondary><slot name=\"description\"></slot></div>\n      </paper-item-body>\n      <slot></slot>\n    "]);

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




var HaSettingsRow =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaSettingsRow, _PolymerElement);

  function HaSettingsRow() {
    _classCallCheck(this, HaSettingsRow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaSettingsRow).apply(this, arguments));
  }

  _createClass(HaSettingsRow, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        narrow: {
          type: Boolean,
          reflectToAttribute: true
        },
        threeLine: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  return HaSettingsRow;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-settings-row", HaSettingsRow);

/***/ })

}]);
//# sourceMappingURL=panel-profile.chunk.js.map