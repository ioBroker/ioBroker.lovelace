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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * Auth class that connects to a native app for authentication.
 */


const CALLBACK_SET_TOKEN = "externalAuthSetToken";
const CALLBACK_REVOKE_TOKEN = "externalAuthRevokeToken";

if (!window.externalApp && !window.webkit) {
  throw new Error("External auth requires either externalApp or webkit defined on Window object.");
}

class ExternalAuth extends home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["Auth"] {
  constructor(hassUrl) {
    super({
      hassUrl,
      clientId: "",
      refresh_token: "",
      access_token: "",
      expires_in: 0,
      // This will trigger connection to do a refresh right away
      expires: 0
    });

    _defineProperty(this, "external", void 0);
  }

  async refreshAccessToken() {
    const callbackPayload = {
      callback: CALLBACK_SET_TOKEN
    };

    if (window.externalApp) {
      window.externalApp.getExternalAuth(JSON.stringify(callbackPayload));
    } else {
      window.webkit.messageHandlers.getExternalAuth.postMessage(callbackPayload);
    }

    const tokens = await new Promise((resolve, reject) => {
      window[CALLBACK_SET_TOKEN] = (success, data) => success ? resolve(data) : reject(data);
    });
    this.data.access_token = tokens.access_token;
    this.data.expires = tokens.expires_in * 1000 + Date.now();
  }

  async revoke() {
    const callbackPayload = {
      callback: CALLBACK_REVOKE_TOKEN
    };

    if (window.externalApp) {
      window.externalApp.revokeExternalAuth(JSON.stringify(callbackPayload));
    } else {
      window.webkit.messageHandlers.revokeExternalAuth.postMessage(callbackPayload);
    }

    await new Promise((resolve, reject) => {
      window[CALLBACK_REVOKE_TOKEN] = (success, data) => success ? resolve(data) : reject(data);
    });
  }

}

const createExternalAuth = hassUrl => {
  const auth = new ExternalAuth(hassUrl);

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
const externalForwardConnectionEvents = bus => {
  window.addEventListener("connection-status", ev => bus.fireMessage({
    type: "connection-status",
    payload: {
      event: ev.detail
    }
  }));
};
const externalForwardHaptics = bus => window.addEventListener("haptic", ev => bus.fireMessage({
  type: "haptic",
  payload: {
    hapticType: ev.detail
  }
}));

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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


const CALLBACK_EXTERNAL_BUS = "externalBus";
class ExternalMessaging {
  constructor() {
    _defineProperty(this, "commands", {});

    _defineProperty(this, "cache", {});

    _defineProperty(this, "msgId", 0);
  }

  attach() {
    Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardConnectionEvents"])(this);
    Object(_external_events_forwarder__WEBPACK_IMPORTED_MODULE_0__["externalForwardHaptics"])(this);

    window[CALLBACK_EXTERNAL_BUS] = msg => this.receiveMessage(msg);
  }
  /**
   * Send message to external app that expects a response.
   * @param msg message to send
   */


  sendMessage(msg) {
    const msgId = ++this.msgId;
    msg.id = msgId;
    this.fireMessage(msg);
    return new Promise((resolve, reject) => {
      this.commands[msgId] = {
        resolve,
        reject
      };
    });
  }
  /**
   * Send message to external app without expecting a response.
   * @param msg message to send
   */


  fireMessage(msg) {
    if (!msg.id) {
      msg.id = ++this.msgId;
    }

    this._sendExternal(msg);
  }

  receiveMessage(msg) {
    if (true) {
      // tslint:disable-next-line: no-console
      console.log("Receiving message from external app", msg);
    }

    const pendingCmd = this.commands[msg.id];

    if (!pendingCmd) {
      // tslint:disable-next-line: no-console
      console.warn(`Received unknown msg ID`, msg.id);
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

  _sendExternal(msg) {
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

}

/***/ })

}]);
//# sourceMappingURL=external_auth.chunk.js.map