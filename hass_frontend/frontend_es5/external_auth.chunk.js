(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["external_auth"],{

/***/ "./src/external_app/external_auth.ts":
/*!*******************************************!*\
  !*** ./src/external_app/external_auth.ts ***!
  \*******************************************/
/*! exports provided: createExternalAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createExternalAuth", function() { return createExternalAuth; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _external_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./external_messaging */ "./src/external_app/external_messaging.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Auth class that connects to a native app for authentication.
 */


var CALLBACK_SET_TOKEN = "externalAuthSetToken";
var CALLBACK_REVOKE_TOKEN = "externalAuthRevokeToken";

if (!window.externalApp && !window.webkit) {
  throw new Error("External auth requires either externalApp or webkit defined on Window object.");
}

var ExternalAuth =
/*#__PURE__*/
function (_Auth) {
  _inherits(ExternalAuth, _Auth);

  function ExternalAuth(hassUrl) {
    var _this;

    _classCallCheck(this, ExternalAuth);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ExternalAuth).call(this, {
      hassUrl: hassUrl,
      clientId: "",
      refresh_token: "",
      access_token: "",
      expires_in: 0,
      // This will trigger connection to do a refresh right away
      expires: 0
    }));

    _defineProperty(_assertThisInitialized(_this), "external", void 0);

    return _this;
  }

  _createClass(ExternalAuth, [{
    key: "refreshAccessToken",
    value: function () {
      var _refreshAccessToken = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var callbackPayload, tokens;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                callbackPayload = {
                  callback: CALLBACK_SET_TOKEN
                };

                if (window.externalApp) {
                  window.externalApp.getExternalAuth(JSON.stringify(callbackPayload));
                } else {
                  window.webkit.messageHandlers.getExternalAuth.postMessage(callbackPayload);
                }

                _context.next = 4;
                return new Promise(function (resolve, reject) {
                  window[CALLBACK_SET_TOKEN] = function (success, data) {
                    return success ? resolve(data) : reject(data);
                  };
                });

              case 4:
                tokens = _context.sent;
                this.data.access_token = tokens.access_token;
                this.data.expires = tokens.expires_in * 1000 + Date.now();

              case 7:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function refreshAccessToken() {
        return _refreshAccessToken.apply(this, arguments);
      }

      return refreshAccessToken;
    }()
  }, {
    key: "revoke",
    value: function () {
      var _revoke = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee2() {
        var callbackPayload;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                callbackPayload = {
                  callback: CALLBACK_REVOKE_TOKEN
                };

                if (window.externalApp) {
                  window.externalApp.revokeExternalAuth(JSON.stringify(callbackPayload));
                } else {
                  window.webkit.messageHandlers.revokeExternalAuth.postMessage(callbackPayload);
                }

                _context2.next = 4;
                return new Promise(function (resolve, reject) {
                  window[CALLBACK_REVOKE_TOKEN] = function (success, data) {
                    return success ? resolve(data) : reject(data);
                  };
                });

              case 4:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      function revoke() {
        return _revoke.apply(this, arguments);
      }

      return revoke;
    }()
  }]);

  return ExternalAuth;
}(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["Auth"]);

var createExternalAuth = function createExternalAuth(hassUrl) {
  var auth = new ExternalAuth(hassUrl);

  if (window.externalApp && window.externalApp.externalBus || window.webkit && window.webkit.messageHandlers.externalBus) {
    auth.external = new _external_messaging__WEBPACK_IMPORTED_MODULE_1__["ExternalMessaging"]();
    auth.external.attach();
  }

  return auth;
};

/***/ }),

/***/ "./src/external_app/external_events_forwarder.ts":
/*!*******************************************************!*\
  !*** ./src/external_app/external_events_forwarder.ts ***!
  \*******************************************************/
/*! exports provided: externalForwardConnectionEvents, externalForwardHaptics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalForwardConnectionEvents", function() { return externalForwardConnectionEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "externalForwardHaptics", function() { return externalForwardHaptics; });
var externalForwardConnectionEvents = function externalForwardConnectionEvents(bus) {
  window.addEventListener("connection-status", function (ev) {
    return bus.fireMessage({
      type: "connection-status",
      payload: {
        event: ev.detail
      }
    });
  });
};
var externalForwardHaptics = function externalForwardHaptics(bus) {
  return window.addEventListener("haptic", function (ev) {
    return bus.fireMessage({
      type: "haptic",
      payload: {
        hapticType: ev.detail
      }
    });
  });
};

/***/ }),

/***/ "./src/external_app/external_messaging.ts":
/*!************************************************!*\
  !*** ./src/external_app/external_messaging.ts ***!
  \************************************************/
/*! exports provided: ExternalMessaging */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExternalMessaging", function() { return ExternalMessaging; });
/* harmony import */ var _external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./external_events_forwarder */ "./src/external_app/external_events_forwarder.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


var CALLBACK_EXTERNAL_BUS = "externalBus";
var ExternalMessaging =
/*#__PURE__*/
function () {
  function ExternalMessaging() {
    _classCallCheck(this, ExternalMessaging);

    _defineProperty(this, "commands", {});

    _defineProperty(this, "cache", {});

    _defineProperty(this, "msgId", 0);
  }

  _createClass(ExternalMessaging, [{
    key: "attach",
    value: function attach() {
      var _this = this;

      Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardConnectionEvents"])(this);
      Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardHaptics"])(this);

      window[CALLBACK_EXTERNAL_BUS] = function (msg) {
        return _this.receiveMessage(msg);
      };
    }
    /**
     * Send message to external app that expects a response.
     * @param msg message to send
     */

  }, {
    key: "sendMessage",
    value: function sendMessage(msg) {
      var _this2 = this;

      var msgId = ++this.msgId;
      msg.id = msgId;
      this.fireMessage(msg);
      return new Promise(function (resolve, reject) {
        _this2.commands[msgId] = {
          resolve: resolve,
          reject: reject
        };
      });
    }
    /**
     * Send message to external app without expecting a response.
     * @param msg message to send
     */

  }, {
    key: "fireMessage",
    value: function fireMessage(msg) {
      if (!msg.id) {
        msg.id = ++this.msgId;
      }

      this._sendExternal(msg);
    }
  }, {
    key: "receiveMessage",
    value: function receiveMessage(msg) {
      if (true) {
        // tslint:disable-next-line: no-console
        console.log("Receiving message from external app", msg);
      }

      var pendingCmd = this.commands[msg.id];

      if (!pendingCmd) {
        // tslint:disable-next-line: no-console
        console.warn("Received unknown msg ID", msg.id);
        return;
      }

      if (msg.type === "result") {
        if (msg.success) {
          pendingCmd.resolve(msg.result);
        } else {
          pendingCmd.reject(msg.error);
        }
      }
    }
  }, {
    key: "_sendExternal",
    value: function _sendExternal(msg) {
      if (true) {
        // tslint:disable-next-line: no-console
        console.log("Sending message to external app", msg);
      }

      if (window.externalApp) {
        window.externalApp.externalBus(JSON.stringify(msg));
      } else {
        window.webkit.messageHandlers.externalBus.postMessage(msg);
      }
    }
  }]);

  return ExternalMessaging;
}();

/***/ })

}]);
//# sourceMappingURL=external_auth.chunk.js.map