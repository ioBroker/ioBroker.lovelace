(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[6],{

/***/ "./src/cast/cast_framework.ts":
/*!************************************!*\
  !*** ./src/cast/cast_framework.ts ***!
  \************************************/
/*! exports provided: castApiAvailable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "castApiAvailable", function() { return castApiAvailable; });
/* harmony import */ var _common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/dom/load_resource */ "./src/common/dom/load_resource.ts");

var loadedPromise;
var castApiAvailable = function castApiAvailable() {
  if (loadedPromise) {
    return loadedPromise;
  }

  loadedPromise = new Promise(function (resolve) {
    window.__onGCastApiAvailable = resolve;
  }); // Any element with a specific ID will get set as a JS variable on window
  // This will override the cast SDK if the iconset is loaded afterwards.
  // Conflicting IDs will no longer mess with window, so we'll just append one.

  var el = document.createElement("div");
  el.id = "cast";
  document.body.append(el);
  Object(_common_dom_load_resource__WEBPACK_IMPORTED_MODULE_0__["loadJS"])("https://www.gstatic.com/cv/js/sender/v1/cast_sender.js?loadCastFramework=1");
  return loadedPromise;
};

/***/ }),

/***/ "./src/cast/cast_manager.ts":
/*!**********************************!*\
  !*** ./src/cast/cast_manager.ts ***!
  \**********************************/
/*! exports provided: CastManager, getCastManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CastManager", function() { return CastManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCastManager", function() { return getCastManager; });
/* harmony import */ var _cast_framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cast_framework */ "./src/cast/cast_framework.ts");
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./const */ "./src/cast/const.ts");
/* harmony import */ var _dev_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dev_const */ "./src/cast/dev_const.ts");
/* harmony import */ var _receiver_messages__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./receiver_messages */ "./src/cast/receiver_messages.ts");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var managerProm;
var CastManager =
/*#__PURE__*/
function () {
  // If the cast connection is connected to our Hass.
  function CastManager(auth) {
    var _this = this;

    _classCallCheck(this, CastManager);

    _defineProperty(this, "auth", void 0);

    _defineProperty(this, "status", void 0);

    _defineProperty(this, "_eventListeners", {});

    this.auth = auth;
    var context = this.castContext;
    context.setOptions({
      receiverApplicationId: _const__WEBPACK_IMPORTED_MODULE_1__["CAST_APP_ID"],
      // @ts-ignore
      autoJoinPolicy: chrome.cast.AutoJoinPolicy.ORIGIN_SCOPED
    });
    context.addEventListener(cast.framework.CastContextEventType.SESSION_STATE_CHANGED, function (ev) {
      return _this._sessionStateChanged(ev);
    });
    context.addEventListener(cast.framework.CastContextEventType.CAST_STATE_CHANGED, function (ev) {
      return _this._castStateChanged(ev);
    });
  }

  _createClass(CastManager, [{
    key: "addEventListener",
    value: function addEventListener(event, listener) {
      var _this2 = this;

      if (!(event in this._eventListeners)) {
        this._eventListeners[event] = [];
      }

      this._eventListeners[event].push(listener);

      return function () {
        _this2._eventListeners[event].splice(_this2._eventListeners[event].indexOf(listener));
      };
    }
  }, {
    key: "sendMessage",
    value: function sendMessage(msg) {
      if (true) {
        console.log("Sending cast message", msg);
      }

      this.castSession.sendMessage(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], msg);
    }
  }, {
    key: "requestSession",
    value: function requestSession() {
      return this.castContext.requestSession();
    }
  }, {
    key: "_fireEvent",
    value: function _fireEvent(event) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = (this._eventListeners[event] || [])[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var listener = _step.value;
          listener();
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator["return"] != null) {
            _iterator["return"]();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
  }, {
    key: "_receiveMessage",
    value: function _receiveMessage(msg) {
      if (true) {
        console.log("Received cast message", msg);
      }

      if (msg.type === "receiver_status") {
        this.status = msg;

        this._fireEvent("connection-changed");
      }
    }
  }, {
    key: "_sessionStateChanged",
    value: function _sessionStateChanged(ev) {
      if (true) {
        console.log("Cast session state changed", ev.sessionState);
      } // On Android, opening a new session always results in SESSION_RESUMED.
      // So treat both as the same.


      if (ev.sessionState === "SESSION_STARTED" || ev.sessionState === "SESSION_RESUMED") {
        if (this.auth) {
          Object(_receiver_messages__WEBPACK_IMPORTED_MODULE_3__["castSendAuth"])(this, this.auth);
        } else {
          // Only do if no auth, as this is done as part of sendAuth.
          this.sendMessage({
            type: "get_status"
          });
        }

        this._attachMessageListener();
      } else if (ev.sessionState === "SESSION_ENDED") {
        this.status = undefined;

        this._fireEvent("connection-changed");
      }
    }
  }, {
    key: "_castStateChanged",
    value: function _castStateChanged(ev) {
      if (true) {
        console.log("Cast state changed", ev.castState);
      }

      this._fireEvent("state-changed");
    }
  }, {
    key: "_attachMessageListener",
    value: function _attachMessageListener() {
      var _this3 = this;

      var session = this.castSession;
      session.addMessageListener(_const__WEBPACK_IMPORTED_MODULE_1__["CAST_NS"], function (_ns, msg) {
        return _this3._receiveMessage(JSON.parse(msg));
      });
    }
  }, {
    key: "castConnectedToOurHass",
    get: function get() {
      return this.status !== undefined && this.auth !== undefined && this.status.connected && (this.status.hassUrl === this.auth.data.hassUrl || _const__WEBPACK_IMPORTED_MODULE_1__["CAST_DEV"] && this.status.hassUrl === _dev_const__WEBPACK_IMPORTED_MODULE_2__["CAST_DEV_HASS_URL"]);
    }
  }, {
    key: "castState",
    get: function get() {
      return this.castContext.getCastState();
    }
  }, {
    key: "castContext",
    get: function get() {
      return cast.framework.CastContext.getInstance();
    }
  }, {
    key: "castSession",
    get: function get() {
      return this.castContext.getCurrentSession();
    }
  }]);

  return CastManager;
}();
var getCastManager = function getCastManager(auth) {
  if (!managerProm) {
    managerProm = Object(_cast_framework__WEBPACK_IMPORTED_MODULE_0__["castApiAvailable"])().then(function (isAvailable) {
      if (!isAvailable) {
        throw new Error("No Cast API available");
      }

      return new CastManager(auth);
    });
  }

  return managerProm;
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jYXN0L2Nhc3RfZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL3NyYy9jYXN0L2Nhc3RfbWFuYWdlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2FkSlMgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9sb2FkX3Jlc291cmNlXCI7XG5cbmxldCBsb2FkZWRQcm9taXNlOiBQcm9taXNlPGJvb2xlYW4+IHwgdW5kZWZpbmVkO1xuXG5leHBvcnQgY29uc3QgY2FzdEFwaUF2YWlsYWJsZSA9ICgpID0+IHtcbiAgaWYgKGxvYWRlZFByb21pc2UpIHtcbiAgICByZXR1cm4gbG9hZGVkUHJvbWlzZTtcbiAgfVxuXG4gIGxvYWRlZFByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICh3aW5kb3cgYXMgYW55KS5fX29uR0Nhc3RBcGlBdmFpbGFibGUgPSByZXNvbHZlO1xuICB9KTtcbiAgLy8gQW55IGVsZW1lbnQgd2l0aCBhIHNwZWNpZmljIElEIHdpbGwgZ2V0IHNldCBhcyBhIEpTIHZhcmlhYmxlIG9uIHdpbmRvd1xuICAvLyBUaGlzIHdpbGwgb3ZlcnJpZGUgdGhlIGNhc3QgU0RLIGlmIHRoZSBpY29uc2V0IGlzIGxvYWRlZCBhZnRlcndhcmRzLlxuICAvLyBDb25mbGljdGluZyBJRHMgd2lsbCBubyBsb25nZXIgbWVzcyB3aXRoIHdpbmRvdywgc28gd2UnbGwganVzdCBhcHBlbmQgb25lLlxuICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gIGVsLmlkID0gXCJjYXN0XCI7XG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kKGVsKTtcblxuICBsb2FkSlMoXG4gICAgXCJodHRwczovL3d3dy5nc3RhdGljLmNvbS9jdi9qcy9zZW5kZXIvdjEvY2FzdF9zZW5kZXIuanM/bG9hZENhc3RGcmFtZXdvcms9MVwiXG4gICk7XG4gIHJldHVybiBsb2FkZWRQcm9taXNlO1xufTtcbiIsImltcG9ydCB7IGNhc3RBcGlBdmFpbGFibGUgfSBmcm9tIFwiLi9jYXN0X2ZyYW1ld29ya1wiO1xuaW1wb3J0IHsgQ0FTVF9BUFBfSUQsIENBU1RfTlMsIENBU1RfREVWIH0gZnJvbSBcIi4vY29uc3RcIjtcbmltcG9ydCB7IENBU1RfREVWX0hBU1NfVVJMIH0gZnJvbSBcIi4vZGV2X2NvbnN0XCI7XG5pbXBvcnQge1xuICBjYXN0U2VuZEF1dGgsXG4gIEhhc3NNZXNzYWdlIGFzIFJlY2VpdmVyTWVzc2FnZSxcbn0gZnJvbSBcIi4vcmVjZWl2ZXJfbWVzc2FnZXNcIjtcbmltcG9ydCB7XG4gIFNlc3Npb25TdGF0ZUV2ZW50RGF0YSxcbiAgQ2FzdFN0YXRlRXZlbnREYXRhLFxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IG5vLWltcGxpY2l0LWRlcGVuZGVuY2llc1xufSBmcm9tIFwiY2hyb21lY2FzdC1jYWYtcmVjZWl2ZXIvY2FzdC5mcmFtZXdvcmtcIjtcbmltcG9ydCB7IFNlbmRlck1lc3NhZ2UsIFJlY2VpdmVyU3RhdHVzTWVzc2FnZSB9IGZyb20gXCIuL3NlbmRlcl9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgQXV0aCB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxubGV0IG1hbmFnZXJQcm9tOiBQcm9taXNlPENhc3RNYW5hZ2VyPiB8IHVuZGVmaW5lZDtcblxudHlwZSBDYXN0RXZlbnRMaXN0ZW5lciA9ICgpID0+IHZvaWQ7XG5cbi8qXG5HZW5lcmFsIGZsb3cgb2YgQ2hyb21lY2FzdDpcblxuQ2hyb21lY2FzdCBzZXNzaW9ucyBhcmUgc3RhcnRlZCB2aWEgdGhlIENocm9tZWNhc3QgYnV0dG9uLiBXaGVuIGNsaWNrZWQsIHNlc3Npb25cbnN0YXRlIGNoYW5nZXMgdG8gc3RhcnRlZC4gV2UgdGhlbiBzZW5kIGF1dGhlbnRpY2F0aW9uLCB3aGljaCB3aWxsIGNhdXNlIHRoZVxucmVjZWl2ZXIgYXBwIHRvIHNlbmQgYSBzdGF0dXMgdXBkYXRlLlxuXG5JZiBhIHNlc3Npb24gaXMgYWxyZWFkeSBhY3RpdmUsIHdlIHF1ZXJ5IHRoZSBzdGF0dXMgdG8gc2VlIHdoYXQgaXQgaXMgdXAgdG8uIElmXG5hIHVzZXIgcHJlc3NlcyB0aGUgY2FzdCBidXR0b24gd2Ugc2VuZCBhdXRoIGlmIG5vdCBjb25uZWN0ZWQgeWV0LCB0aGVuIHNlbmRcbmNvbW1hbmQgYXMgdXN1YWwuXG4qL1xuXG4vKiB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlICovXG5cbnR5cGUgQ2FzdEV2ZW50ID0gXCJjb25uZWN0aW9uLWNoYW5nZWRcIiB8IFwic3RhdGUtY2hhbmdlZFwiO1xuXG5leHBvcnQgY2xhc3MgQ2FzdE1hbmFnZXIge1xuICBwdWJsaWMgYXV0aD86IEF1dGg7XG4gIC8vIElmIHRoZSBjYXN0IGNvbm5lY3Rpb24gaXMgY29ubmVjdGVkIHRvIG91ciBIYXNzLlxuICBwdWJsaWMgc3RhdHVzPzogUmVjZWl2ZXJTdGF0dXNNZXNzYWdlO1xuICBwcml2YXRlIF9ldmVudExpc3RlbmVyczogeyBbZXZlbnQ6IHN0cmluZ106IENhc3RFdmVudExpc3RlbmVyW10gfSA9IHt9O1xuXG4gIGNvbnN0cnVjdG9yKGF1dGg/OiBBdXRoKSB7XG4gICAgdGhpcy5hdXRoID0gYXV0aDtcbiAgICBjb25zdCBjb250ZXh0ID0gdGhpcy5jYXN0Q29udGV4dDtcbiAgICBjb250ZXh0LnNldE9wdGlvbnMoe1xuICAgICAgcmVjZWl2ZXJBcHBsaWNhdGlvbklkOiBDQVNUX0FQUF9JRCxcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIGF1dG9Kb2luUG9saWN5OiBjaHJvbWUuY2FzdC5BdXRvSm9pblBvbGljeS5PUklHSU5fU0NPUEVELFxuICAgIH0pO1xuICAgIGNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIGNhc3QuZnJhbWV3b3JrLkNhc3RDb250ZXh0RXZlbnRUeXBlLlNFU1NJT05fU1RBVEVfQ0hBTkdFRCxcbiAgICAgIChldikgPT4gdGhpcy5fc2Vzc2lvblN0YXRlQ2hhbmdlZChldilcbiAgICApO1xuICAgIGNvbnRleHQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIGNhc3QuZnJhbWV3b3JrLkNhc3RDb250ZXh0RXZlbnRUeXBlLkNBU1RfU1RBVEVfQ0hBTkdFRCxcbiAgICAgIChldikgPT4gdGhpcy5fY2FzdFN0YXRlQ2hhbmdlZChldilcbiAgICApO1xuICB9XG5cbiAgcHVibGljIGFkZEV2ZW50TGlzdGVuZXIoZXZlbnQ6IENhc3RFdmVudCwgbGlzdGVuZXI6IENhc3RFdmVudExpc3RlbmVyKSB7XG4gICAgaWYgKCEoZXZlbnQgaW4gdGhpcy5fZXZlbnRMaXN0ZW5lcnMpKSB7XG4gICAgICB0aGlzLl9ldmVudExpc3RlbmVyc1tldmVudF0gPSBbXTtcbiAgICB9XG4gICAgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5zcGxpY2UoXG4gICAgICAgIHRoaXMuX2V2ZW50TGlzdGVuZXJzW2V2ZW50XS5pbmRleE9mKGxpc3RlbmVyKVxuICAgICAgKTtcbiAgICB9O1xuICB9XG5cbiAgcHVibGljIGdldCBjYXN0Q29ubmVjdGVkVG9PdXJIYXNzKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnN0YXR1cyAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLmF1dGggIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5zdGF0dXMuY29ubmVjdGVkICYmXG4gICAgICAodGhpcy5zdGF0dXMuaGFzc1VybCA9PT0gdGhpcy5hdXRoLmRhdGEuaGFzc1VybCB8fFxuICAgICAgICAoQ0FTVF9ERVYgJiYgdGhpcy5zdGF0dXMuaGFzc1VybCA9PT0gQ0FTVF9ERVZfSEFTU19VUkwpKVxuICAgICk7XG4gIH1cblxuICBwdWJsaWMgc2VuZE1lc3NhZ2UobXNnOiBSZWNlaXZlck1lc3NhZ2UpIHtcbiAgICBpZiAoX19ERVZfXykge1xuICAgICAgY29uc29sZS5sb2coXCJTZW5kaW5nIGNhc3QgbWVzc2FnZVwiLCBtc2cpO1xuICAgIH1cbiAgICB0aGlzLmNhc3RTZXNzaW9uLnNlbmRNZXNzYWdlKENBU1RfTlMsIG1zZyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhc3RTdGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5jYXN0Q29udGV4dC5nZXRDYXN0U3RhdGUoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2FzdENvbnRleHQoKSB7XG4gICAgcmV0dXJuIGNhc3QuZnJhbWV3b3JrLkNhc3RDb250ZXh0LmdldEluc3RhbmNlKCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNhc3RTZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhc3RDb250ZXh0LmdldEN1cnJlbnRTZXNzaW9uKCkhO1xuICB9XG5cbiAgcHVibGljIHJlcXVlc3RTZXNzaW9uKCkge1xuICAgIHJldHVybiB0aGlzLmNhc3RDb250ZXh0LnJlcXVlc3RTZXNzaW9uKCk7XG4gIH1cblxuICBwcml2YXRlIF9maXJlRXZlbnQoZXZlbnQ6IENhc3RFdmVudCkge1xuICAgIGZvciAoY29uc3QgbGlzdGVuZXIgb2YgdGhpcy5fZXZlbnRMaXN0ZW5lcnNbZXZlbnRdIHx8IFtdKSB7XG4gICAgICBsaXN0ZW5lcigpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3JlY2VpdmVNZXNzYWdlKG1zZzogU2VuZGVyTWVzc2FnZSkge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIlJlY2VpdmVkIGNhc3QgbWVzc2FnZVwiLCBtc2cpO1xuICAgIH1cbiAgICBpZiAobXNnLnR5cGUgPT09IFwicmVjZWl2ZXJfc3RhdHVzXCIpIHtcbiAgICAgIHRoaXMuc3RhdHVzID0gbXNnO1xuICAgICAgdGhpcy5fZmlyZUV2ZW50KFwiY29ubmVjdGlvbi1jaGFuZ2VkXCIpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3Nlc3Npb25TdGF0ZUNoYW5nZWQoZXY6IFNlc3Npb25TdGF0ZUV2ZW50RGF0YSkge1xuICAgIGlmIChfX0RFVl9fKSB7XG4gICAgICBjb25zb2xlLmxvZyhcIkNhc3Qgc2Vzc2lvbiBzdGF0ZSBjaGFuZ2VkXCIsIGV2LnNlc3Npb25TdGF0ZSk7XG4gICAgfVxuICAgIC8vIE9uIEFuZHJvaWQsIG9wZW5pbmcgYSBuZXcgc2Vzc2lvbiBhbHdheXMgcmVzdWx0cyBpbiBTRVNTSU9OX1JFU1VNRUQuXG4gICAgLy8gU28gdHJlYXQgYm90aCBhcyB0aGUgc2FtZS5cbiAgICBpZiAoXG4gICAgICBldi5zZXNzaW9uU3RhdGUgPT09IFwiU0VTU0lPTl9TVEFSVEVEXCIgfHxcbiAgICAgIGV2LnNlc3Npb25TdGF0ZSA9PT0gXCJTRVNTSU9OX1JFU1VNRURcIlxuICAgICkge1xuICAgICAgaWYgKHRoaXMuYXV0aCkge1xuICAgICAgICBjYXN0U2VuZEF1dGgodGhpcywgdGhpcy5hdXRoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9ubHkgZG8gaWYgbm8gYXV0aCwgYXMgdGhpcyBpcyBkb25lIGFzIHBhcnQgb2Ygc2VuZEF1dGguXG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2UoeyB0eXBlOiBcImdldF9zdGF0dXNcIiB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2F0dGFjaE1lc3NhZ2VMaXN0ZW5lcigpO1xuICAgIH0gZWxzZSBpZiAoZXYuc2Vzc2lvblN0YXRlID09PSBcIlNFU1NJT05fRU5ERURcIikge1xuICAgICAgdGhpcy5zdGF0dXMgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9maXJlRXZlbnQoXCJjb25uZWN0aW9uLWNoYW5nZWRcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY2FzdFN0YXRlQ2hhbmdlZChldjogQ2FzdFN0YXRlRXZlbnREYXRhKSB7XG4gICAgaWYgKF9fREVWX18pIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiQ2FzdCBzdGF0ZSBjaGFuZ2VkXCIsIGV2LmNhc3RTdGF0ZSk7XG4gICAgfVxuICAgIHRoaXMuX2ZpcmVFdmVudChcInN0YXRlLWNoYW5nZWRcIik7XG4gIH1cblxuICBwcml2YXRlIF9hdHRhY2hNZXNzYWdlTGlzdGVuZXIoKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IHRoaXMuY2FzdFNlc3Npb247XG4gICAgc2Vzc2lvbi5hZGRNZXNzYWdlTGlzdGVuZXIoQ0FTVF9OUywgKF9ucywgbXNnKSA9PlxuICAgICAgdGhpcy5fcmVjZWl2ZU1lc3NhZ2UoSlNPTi5wYXJzZShtc2cpKVxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IGdldENhc3RNYW5hZ2VyID0gKGF1dGg/OiBBdXRoKSA9PiB7XG4gIGlmICghbWFuYWdlclByb20pIHtcbiAgICBtYW5hZ2VyUHJvbSA9IGNhc3RBcGlBdmFpbGFibGUoKS50aGVuKChpc0F2YWlsYWJsZSkgPT4ge1xuICAgICAgaWYgKCFpc0F2YWlsYWJsZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBDYXN0IEFQSSBhdmFpbGFibGVcIik7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IENhc3RNYW5hZ2VyKGF1dGgpO1xuICAgIH0pO1xuICB9XG4gIHJldHVybiBtYW5hZ2VyUHJvbTtcbn07XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFvQkE7QUFBQTtBQUFBO0FBRUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUVBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFFQTtBQUNBO0FBdkJBO0FBQUE7QUFBQTtBQXdCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFuQ0E7QUFBQTtBQUFBO0FBZ0RBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXBEQTtBQUFBO0FBQUE7QUFtRUE7QUFDQTtBQXBFQTtBQUFBO0FBQUE7QUFzRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBMUVBO0FBQUE7QUFBQTtBQTZFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXBGQTtBQUFBO0FBQUE7QUF1RkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQTNHQTtBQUFBO0FBQUE7QUE4R0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbEhBO0FBQUE7QUFBQTtBQW9IQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQXpIQTtBQUFBO0FBQUE7QUFzQ0E7QUFPQTtBQTdDQTtBQUFBO0FBQUE7QUF1REE7QUFDQTtBQXhEQTtBQUFBO0FBQUE7QUEyREE7QUFDQTtBQTVEQTtBQUFBO0FBQUE7QUErREE7QUFDQTtBQWhFQTtBQUNBO0FBREE7QUFBQTtBQTRIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9