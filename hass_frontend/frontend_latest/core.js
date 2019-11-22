/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 	};
/******/
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"core": 0
/******/ 	};
/******/
/******/
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "" + ({"external_auth":"external_auth"}[chunkId]||chunkId) + ".chunk.js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/frontend_latest/";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = self["webpackJsonp"] = self["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entrypoints/core.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/home-assistant-js-websocket/dist/haws.es.js":
/*!******************************************************************!*\
  !*** ./node_modules/home-assistant-js-websocket/dist/haws.es.js ***!
  \******************************************************************/
/*! exports provided: createConnection, getAuth, genClientId, genExpires, Auth, getCollection, createCollection, Connection, subscribeConfig, subscribeServices, entitiesColl, subscribeEntities, ERR_CANNOT_CONNECT, ERR_INVALID_AUTH, ERR_CONNECTION_LOST, ERR_HASS_HOST_REQUIRED, ERR_INVALID_HTTPS_TO_HTTP, getStates, getServices, getConfig, getUser, callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return x; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return u; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genClientId", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genExpires", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return v; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCollection", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfig", function() { return S; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeServices", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesColl", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntities", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CANNOT_CONNECT", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_AUTH", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CONNECTION_LOST", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_HASS_HOST_REQUIRED", function() { return o; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_HTTPS_TO_HTTP", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return k; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return _; });
function e(e, t) {
  try {
    var n = e();
  } catch (e) {
    return t(e);
  }

  return n && n.then ? n.then(void 0, t) : n;
}

"undefined" != typeof Symbol && (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator"))), "undefined" != typeof Symbol && (Symbol.asyncIterator || (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
var t = 1,
    n = 2,
    r = 3,
    o = 4,
    s = 5;

function i(e) {
  return {
    type: "unsubscribe_events",
    subscription: e
  };
}

var c = function (e, t) {
  this.options = t, this.commandId = 1, this.commands = new Map(), this.eventListeners = new Map(), this.closeRequested = !1, this.setSocket(e);
};

c.prototype.setSocket = function (e) {
  var t = this,
      n = this.socket;

  if (this.socket = e, e.addEventListener("message", function (e) {
    return t._handleMessage(e);
  }), e.addEventListener("close", function (e) {
    return t._handleClose(e);
  }), n) {
    var r = this.commands;
    this.commandId = 1, this.commands = new Map(), r.forEach(function (e) {
      "subscribe" in e && e.subscribe().then(function (t) {
        e.unsubscribe = t, e.resolve();
      });
    }), this.fireEvent("ready");
  }
}, c.prototype.addEventListener = function (e, t) {
  var n = this.eventListeners.get(e);
  n || this.eventListeners.set(e, n = []), n.push(t);
}, c.prototype.removeEventListener = function (e, t) {
  var n = this.eventListeners.get(e);

  if (n) {
    var r = n.indexOf(t);
    -1 !== r && n.splice(r, 1);
  }
}, c.prototype.fireEvent = function (e, t) {
  var n = this;
  (this.eventListeners.get(e) || []).forEach(function (e) {
    return e(n, t);
  });
}, c.prototype.close = function () {
  this.closeRequested = !0, this.socket.close();
}, c.prototype.subscribeEvents = function (e, t) {
  try {
    return this.subscribeMessage(e, function (e) {
      var t = {
        type: "subscribe_events"
      };
      return e && (t.event_type = e), t;
    }(t));
  } catch (e) {
    return Promise.reject(e);
  }
}, c.prototype.ping = function () {
  return this.sendMessagePromise({
    type: "ping"
  });
}, c.prototype.sendMessage = function (e, t) {
  t || (t = this._genCmdId()), e.id = t, this.socket.send(JSON.stringify(e));
}, c.prototype.sendMessagePromise = function (e) {
  var t = this;
  return new Promise(function (n, r) {
    var o = t._genCmdId();

    t.commands.set(o, {
      resolve: n,
      reject: r
    }), t.sendMessage(e, o);
  });
}, c.prototype.subscribeMessage = function (e, t) {
  try {
    var n,
        r = this,
        o = r._genCmdId();

    return Promise.resolve(new Promise(function (s, c) {
      n = {
        resolve: s,
        reject: c,
        callback: e,
        subscribe: function () {
          return r.subscribeMessage(e, t);
        },
        unsubscribe: function () {
          try {
            return Promise.resolve(r.sendMessagePromise(i(o))).then(function () {
              r.commands.delete(o);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
      }, r.commands.set(o, n);

      try {
        r.sendMessage(t, o);
      } catch (e) {}
    })).then(function () {
      return function () {
        return n.unsubscribe();
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, c.prototype._handleMessage = function (e) {
  var t = JSON.parse(e.data),
      n = this.commands.get(t.id);

  switch (t.type) {
    case "event":
      n ? n.callback(t.event) : (console.warn("Received event for unknown subscription " + t.id + ". Unsubscribing."), this.sendMessagePromise(i(t.id)));
      break;

    case "result":
      n && (t.success ? (n.resolve(t.result), "subscribe" in n || this.commands.delete(t.id)) : (n.reject(t.error), this.commands.delete(t.id)));
      break;

    case "pong":
      n ? (n.resolve(), this.commands.delete(t.id)) : console.warn("Received unknown pong response " + t.id);
  }
}, c.prototype._handleClose = function (t) {
  var n = this;

  if (this.commands.forEach(function (e) {
    "subscribe" in e || e.reject({
      type: "result",
      success: !1,
      error: {
        code: 3,
        message: "Connection lost"
      }
    });
  }), !this.closeRequested) {
    this.fireEvent("disconnected");

    var r = Object.assign({}, this.options, {
      setupRetry: 0
    }),
        o = function (t) {
      var s = n;
      setTimeout(function () {
        try {
          var n = e(function () {
            return Promise.resolve(r.createSocket(r)).then(function (e) {
              s.setSocket(e);
            });
          }, function (e) {
            2 === e ? s.fireEvent("reconnect-error", e) : o(t + 1);
          });
          return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      }, 1e3 * Math.min(t, 5));
    };

    o(0);
  }
}, c.prototype._genCmdId = function () {
  return ++this.commandId;
};

var u = function (e) {
  void 0 === e && (e = {});

  try {
    function t() {
      function t() {
        function t() {
          if (n) return new v(n, e.saveTokens);
          if (void 0 === r) throw o;
          return function (e, t, n, r) {
            n += (n.includes("?") ? "&" : "?") + "auth_callback=1", document.location.href = function (e, t, n, r) {
              var o = e + "/auth/authorize?response_type=code&redirect_uri=" + encodeURIComponent(n);
              return null !== t && (o += "&client_id=" + encodeURIComponent(t)), r && (o += "&state=" + encodeURIComponent(r)), o;
            }(e, t, n, r);
          }(r, s, e.redirectUrl || location.protocol + "//" + location.host + location.pathname + location.search, btoa(JSON.stringify({
            hassUrl: r,
            clientId: s
          }))), new Promise(function () {});
        }

        var i = function () {
          if (!n && e.loadTokens) return Promise.resolve(e.loadTokens()).then(function (e) {
            n = e;
          });
        }();

        return i && i.then ? i.then(t) : t();
      }

      var i = function () {
        if (!n) {
          var t = function (e) {
            for (var t = {}, n = location.search.substr(1).split("&"), r = 0; r < n.length; r++) {
              var o = n[r].split("="),
                  s = decodeURIComponent(o[0]),
                  i = o.length > 1 ? decodeURIComponent(o[1]) : void 0;
              t[s] = i;
            }

            return t;
          }(),
              r = function () {
            if ("auth_callback" in t) {
              var r = JSON.parse(atob(t.state));
              return Promise.resolve(h(r.hassUrl, r.clientId, t.code)).then(function (t) {
                n = t, e.saveTokens && e.saveTokens(n);
              });
            }
          }();

          if (r && r.then) return r.then(function () {});
        }
      }();

      return i && i.then ? i.then(t) : t();
    }

    var n,
        r = e.hassUrl;
    r && "/" === r[r.length - 1] && (r = r.substr(0, r.length - 1));

    var s = void 0 !== e.clientId ? e.clientId : f(),
        i = function () {
      if (!n && e.authCode && r) return Promise.resolve(h(r, s, e.authCode)).then(function (t) {
        n = t, e.saveTokens && e.saveTokens(n);
      });
    }();

    return Promise.resolve(i && i.then ? i.then(t) : t());
  } catch (e) {
    return Promise.reject(e);
  }
},
    a = function (e, t, n) {
  try {
    var r = "undefined" != typeof location && location;

    if (r && "https:" === r.protocol) {
      var o = document.createElement("a");
      if (o.href = e, "http:" === o.protocol && "localhost" !== o.hostname) throw 5;
    }

    var s = new FormData();
    return null !== t && s.append("client_id", t), Object.keys(n).forEach(function (e) {
      s.append(e, n[e]);
    }), Promise.resolve(fetch(e + "/auth/token", {
      method: "POST",
      credentials: "same-origin",
      body: s
    })).then(function (n) {
      if (!n.ok) throw 400 === n.status || 403 === n.status ? 2 : new Error("Unable to fetch tokens");
      return Promise.resolve(n.json()).then(function (n) {
        return n.hassUrl = e, n.clientId = t, n.expires = d(n.expires_in), n;
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    f = function () {
  return location.protocol + "//" + location.host + "/";
},
    d = function (e) {
  return 1e3 * e + Date.now();
};

function h(e, t, n) {
  return a(e, t, {
    code: n,
    grant_type: "authorization_code"
  });
}

var v = function (e, t) {
  this.data = e, this._saveTokens = t;
},
    l = {
  wsUrl: {
    configurable: !0
  },
  accessToken: {
    configurable: !0
  },
  expired: {
    configurable: !0
  }
};

l.wsUrl.get = function () {
  return "ws" + this.data.hassUrl.substr(4) + "/api/websocket";
}, l.accessToken.get = function () {
  return this.data.access_token;
}, l.expired.get = function () {
  return Date.now() > this.data.expires;
}, v.prototype.refreshAccessToken = function () {
  try {
    var e = this;
    return Promise.resolve(a(e.data.hassUrl, e.data.clientId, {
      grant_type: "refresh_token",
      refresh_token: e.data.refresh_token
    })).then(function (t) {
      t.refresh_token = e.data.refresh_token, e.data = t, e._saveTokens && e._saveTokens(t);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, v.prototype.revoke = function () {
  try {
    var e = this,
        t = new FormData();
    return t.append("action", "revoke"), t.append("token", e.data.refresh_token), Promise.resolve(fetch(e.data.hassUrl + "/auth/token", {
      method: "POST",
      credentials: "same-origin",
      body: t
    })).then(function () {
      e._saveTokens && e._saveTokens(null);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, Object.defineProperties(v.prototype, l);

var m = function (e, t, n, r) {
  if (e[t]) return e[t];

  var o,
      s = 0,
      i = function (e) {
    var t = [];

    function n(n, r) {
      e = r ? n : Object.assign({}, e, n);

      for (var o = t, s = 0; s < o.length; s++) o[s](e);
    }

    return {
      get state() {
        return e;
      },

      action: function (t) {
        function r(e) {
          n(e, !1);
        }

        return function () {
          for (var n = arguments, o = [e], s = 0; s < arguments.length; s++) o.push(n[s]);

          var i = t.apply(this, o);
          if (null != i) return i.then ? i.then(r) : r(i);
        };
      },
      setState: n,
      subscribe: function (e) {
        return t.push(e), function () {
          !function (e) {
            for (var n = [], r = 0; r < t.length; r++) t[r] === e ? e = null : n.push(t[r]);

            t = n;
          }(e);
        };
      }
    };
  }(),
      c = function () {
    return n(e).then(function (e) {
      return i.setState(e, !0);
    });
  },
      u = function () {
    return c().catch(function (t) {
      if (e.socket.readyState == e.socket.OPEN) throw t;
    });
  };

  return e[t] = {
    get state() {
      return i.state;
    },

    refresh: c,
    subscribe: function (t) {
      1 == ++s && (r && (o = r(e, i)), e.addEventListener("ready", u), u());
      var n = i.subscribe(t);
      return void 0 !== i.state && setTimeout(function () {
        return t(i.state);
      }, 0), function () {
        n(), --s || (o && o.then(function (e) {
          e();
        }), e.removeEventListener("ready", c));
      };
    }
  }, e[t];
},
    p = function (e, t, n, r, o) {
  return m(r, e, t, n).subscribe(o);
},
    b = function (e) {
  return e.sendMessagePromise({
    type: "get_states"
  });
},
    y = function (e) {
  return e.sendMessagePromise({
    type: "get_services"
  });
},
    g = function (e) {
  return e.sendMessagePromise({
    type: "get_config"
  });
},
    k = function (e) {
  return e.sendMessagePromise({
    type: "auth/current_user"
  });
},
    _ = function (e, t, n, r) {
  return e.sendMessagePromise(function (e, t, n) {
    var r = {
      type: "call_service",
      domain: e,
      service: t
    };
    return n && (r.service_data = n), r;
  }(t, n, r));
};

function P(e, t) {
  return void 0 === e ? null : {
    components: e.components.concat(t.data.component)
  };
}

var E = function (e) {
  return g(e);
},
    w = function (e, t) {
  return Promise.all([e.subscribeEvents(t.action(P), "component_loaded"), e.subscribeEvents(function () {
    return E(e).then(function (e) {
      return t.setState(e, !0);
    });
  }, "core_config_updated")]).then(function (e) {
    return function () {
      return e.forEach(function (e) {
        return e();
      });
    };
  });
},
    S = function (e, t) {
  return function (e) {
    return m(e, "_cnf", E, w);
  }(e).subscribe(t);
};

function j(e, t) {
  var n, r;
  if (void 0 === e) return null;
  var o = t.data,
      s = o.domain,
      i = Object.assign({}, e[s], ((n = {})[o.service] = {
    description: "",
    fields: {}
  }, n));
  return (r = {})[s] = i, r;
}

function T(e, t) {
  var n;
  if (void 0 === e) return null;
  var r = t.data,
      o = r.domain,
      s = r.service,
      i = e[o];
  if (!(i && s in i)) return null;
  var c = {};
  return Object.keys(i).forEach(function (e) {
    e !== s && (c[e] = i[e]);
  }), (n = {})[o] = c, n;
}

var I = function (e) {
  return y(e);
},
    M = function (e, t) {
  return Promise.all([e.subscribeEvents(t.action(j), "service_registered"), e.subscribeEvents(t.action(T), "service_removed")]).then(function (e) {
    return function () {
      return e.forEach(function (e) {
        return e();
      });
    };
  });
},
    L = function (e, t) {
  return function (e) {
    return m(e, "_srv", I, M);
  }(e).subscribe(t);
},
    O = function (e) {
  try {
    return Promise.resolve(b(e)).then(function (e) {
      for (var t = {}, n = 0; n < e.length; n++) {
        var r = e[n];
        t[r.entity_id] = r;
      }

      return t;
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    U = function (e, t) {
  return e.subscribeEvents(function (e) {
    return function (t, n) {
      var r,
          o = t.state;

      if (void 0 !== o) {
        var s = e.data,
            i = s.entity_id,
            c = s.new_state;
        if (c) t.setState(((r = {})[c.entity_id] = c, r));else {
          var u = Object.assign({}, o);
          delete u[i], t.setState(u, !0);
        }
      }
    }(t);
  }, "state_changed");
},
    C = function (e) {
  return m(e, "_ent", O, U);
},
    R = function (e, t) {
  return C(e).subscribe(t);
},
    x = function (e) {
  try {
    var t = Object.assign({}, N, e);
    return Promise.resolve(t.createSocket(t)).then(function (e) {
      return new c(e, t);
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    N = {
  setupRetry: 0,
  createSocket: function (t) {
    if (!t.auth) throw o;
    var n = t.auth,
        r = n.expired ? n.refreshAccessToken().then(function () {
      r = void 0;
    }, function () {
      r = void 0;
    }) : void 0,
        s = n.wsUrl;
    return new Promise(function (o, i) {
      return function t(o, i, c) {
        var u = new WebSocket(s),
            a = !1,
            f = function () {
          if (u.removeEventListener("close", f), a) c(2);else if (0 !== o) {
            var e = -1 === o ? -1 : o - 1;
            setTimeout(function () {
              return t(e, i, c);
            }, 1e3);
          } else c(1);
        },
            d = function (t) {
          try {
            var o = e(function () {
              function e() {
                u.send(JSON.stringify({
                  type: "auth",
                  access_token: n.accessToken
                }));
              }

              var t = function () {
                if (n.expired) return Promise.resolve(r || n.refreshAccessToken()).then(function () {});
              }();

              return t && t.then ? t.then(e) : e();
            }, function (e) {
              a = 2 === e, u.close();
            });
            return Promise.resolve(o && o.then ? o.then(function () {}) : void 0);
          } catch (e) {
            return Promise.reject(e);
          }
        },
            h = function (e) {
          try {
            switch (JSON.parse(e.data).type) {
              case "auth_invalid":
                a = !0, u.close();
                break;

              case "auth_ok":
                u.removeEventListener("open", d), u.removeEventListener("message", h), u.removeEventListener("close", f), u.removeEventListener("error", f), i(u);
            }

            return Promise.resolve();
          } catch (e) {
            return Promise.reject(e);
          }
        };

        u.addEventListener("open", d), u.addEventListener("message", h), u.addEventListener("close", f), u.addEventListener("error", f);
      }(t.setupRetry, o, i);
    });
  }
};



/***/ }),

/***/ "./src/common/auth/token_storage.ts":
/*!******************************************!*\
  !*** ./src/common/auth/token_storage.ts ***!
  \******************************************/
/*! exports provided: askWrite, saveTokens, enableWrite, loadTokens */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "askWrite", function() { return askWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveTokens", function() { return saveTokens; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableWrite", function() { return enableWrite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadTokens", function() { return loadTokens; });
const storage = window.localStorage || {};
// So that core.js and main app hit same shared object.
let tokenCache = window.__tokenCache;

if (!tokenCache) {
  tokenCache = window.__tokenCache = {
    tokens: undefined,
    writeEnabled: undefined
  };
}

function askWrite() {
  return tokenCache.tokens !== undefined && tokenCache.writeEnabled === undefined;
}
function saveTokens(tokens) {
  tokenCache.tokens = tokens;

  if (tokenCache.writeEnabled) {
    try {
      storage.hassTokens = JSON.stringify(tokens);
    } catch (err) {// write failed, ignore it. Happens if storage is full or private mode.
    }
  }
}
function enableWrite() {
  tokenCache.writeEnabled = true;

  if (tokenCache.tokens) {
    saveTokens(tokenCache.tokens);
  }
}
function loadTokens() {
  if (tokenCache.tokens === undefined) {
    try {
      // Delete the old token cache.
      delete storage.tokens;
      const tokens = storage.hassTokens;

      if (tokens) {
        tokenCache.tokens = JSON.parse(tokens);
        tokenCache.writeEnabled = true;
      } else {
        tokenCache.tokens = null;
      }
    } catch (err) {
      tokenCache.tokens = null;
    }
  }

  return tokenCache.tokens;
}

/***/ }),

/***/ "./src/data/auth.ts":
/*!**************************!*\
  !*** ./src/data/auth.ts ***!
  \**************************/
/*! exports provided: hassUrl, getSignedPath, fetchAuthProviders */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hassUrl", function() { return hassUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSignedPath", function() { return getSignedPath; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchAuthProviders", function() { return fetchAuthProviders; });
const hassUrl = `${location.protocol}//${location.host}`;
const getSignedPath = (hass, path) => hass.callWS({
  type: "auth/sign_path",
  path
});
const fetchAuthProviders = () => fetch("/auth/providers", {
  credentials: "same-origin"
});

/***/ }),

/***/ "./src/data/lovelace.ts":
/*!******************************!*\
  !*** ./src/data/lovelace.ts ***!
  \******************************/
/*! exports provided: fetchConfig, saveConfig, subscribeLovelaceUpdates, getLovelaceCollection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfig", function() { return fetchConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveConfig", function() { return saveConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeLovelaceUpdates", function() { return subscribeLovelaceUpdates; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLovelaceCollection", function() { return getLovelaceCollection; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");

const fetchConfig = (conn, force) => conn.sendMessagePromise({
  type: "lovelace/config",
  force
});
const saveConfig = (hass, config) => hass.callWS({
  type: "lovelace/config/save",
  config
});
const subscribeLovelaceUpdates = (conn, onChange) => conn.subscribeEvents(onChange, "lovelace_updated");
const getLovelaceCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_lovelace", conn2 => fetchConfig(conn2, false), (_conn, store) => subscribeLovelaceUpdates(conn, () => fetchConfig(conn, false).then(config => store.setState(config, true))));

/***/ }),

/***/ "./src/data/ws-panels.ts":
/*!*******************************!*\
  !*** ./src/data/ws-panels.ts ***!
  \*******************************/
/*! exports provided: subscribePanels */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribePanels", function() { return subscribePanels; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");


const fetchPanels = conn => conn.sendMessagePromise({
  type: "get_panels"
});

const subscribeUpdates = (conn, store) => conn.subscribeEvents(() => fetchPanels(conn).then(panels => store.setState(panels, true)), "panels_updated");

const subscribePanels = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_pnl", fetchPanels, subscribeUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/ws-themes.ts":
/*!*******************************!*\
  !*** ./src/data/ws-themes.ts ***!
  \*******************************/
/*! exports provided: subscribeThemes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeThemes", function() { return subscribeThemes; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");


const fetchThemes = conn => conn.sendMessagePromise({
  type: "frontend/get_themes"
});

const subscribeUpdates = (conn, store) => conn.subscribeEvents(event => store.setState(event.data, true), "themes_updated");

const subscribeThemes = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_thm", fetchThemes, subscribeUpdates, conn, onChange);

/***/ }),

/***/ "./src/data/ws-user.ts":
/*!*****************************!*\
  !*** ./src/data/ws-user.ts ***!
  \*****************************/
/*! exports provided: userCollection, subscribeUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userCollection", function() { return userCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeUser", function() { return subscribeUser; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");

const userCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getCollection"])(conn, "_usr", () => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getUser"])(conn), undefined);
const subscribeUser = (conn, onChange) => userCollection(conn).subscribe(onChange);

/***/ }),

/***/ "./src/entrypoints/core.ts":
/*!*********************************!*\
  !*** ./src/entrypoints/core.ts ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/auth/token_storage */ "./src/common/auth/token_storage.ts");
/* harmony import */ var _data_ws_panels__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../data/ws-panels */ "./src/data/ws-panels.ts");
/* harmony import */ var _data_ws_themes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/ws-themes */ "./src/data/ws-themes.ts");
/* harmony import */ var _data_ws_user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../data/ws-user */ "./src/data/ws-user.ts");
/* harmony import */ var _data_auth__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/auth */ "./src/data/auth.ts");
/* harmony import */ var _data_lovelace__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/lovelace */ "./src/data/lovelace.ts");







const isExternal = location.search.includes("external_auth=1");
const authProm = isExternal ? () => __webpack_require__.e(/*! import() | external_auth */ "external_auth").then(__webpack_require__.bind(null, /*! ../external_app/external_auth */ "./src/external_app/external_auth.ts")).then(({
  createExternalAuth
}) => createExternalAuth(_data_auth__WEBPACK_IMPORTED_MODULE_5__["hassUrl"])) : () => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["getAuth"])({
  hassUrl: _data_auth__WEBPACK_IMPORTED_MODULE_5__["hassUrl"],
  saveTokens: _common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"],
  loadTokens: () => Promise.resolve(Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["loadTokens"])()),
  authCode: window.hassNoAuth // for IoB

});

const connProm = async auth => {
  try {
    const conn = await Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      auth
    }); // Clear url if we have been able to establish a connection

    if (location.search.includes("auth_callback=1")) {
      history.replaceState(null, "", location.pathname);
    }

    return {
      auth,
      conn
    };
  } catch (err) {
    if (err !== home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["ERR_INVALID_AUTH"]) {
      throw err;
    } // We can get invalid auth if auth tokens were stored that are no longer valid
    // Clear stored tokens.


    if (!isExternal) {
      Object(_common_auth_token_storage__WEBPACK_IMPORTED_MODULE_1__["saveTokens"])(null);
    }

    auth = await authProm();
    const conn = await Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createConnection"])({
      auth
    });
    return {
      auth,
      conn
    };
  }
};

if (true) {
  performance.mark("hass-start");
}

window.hassConnection = authProm().then(connProm); // Start fetching some of the data that we will need.

window.hassConnection.then(({
  conn
}) => {
  const noop = () => {// do nothing
  };

  Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeEntities"])(conn, noop);
  Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeConfig"])(conn, noop);
  Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["subscribeServices"])(conn, noop);
  Object(_data_ws_panels__WEBPACK_IMPORTED_MODULE_2__["subscribePanels"])(conn, noop);
  Object(_data_ws_themes__WEBPACK_IMPORTED_MODULE_3__["subscribeThemes"])(conn, noop);
  Object(_data_ws_user__WEBPACK_IMPORTED_MODULE_4__["subscribeUser"])(conn, noop);

  if (location.pathname === "/" || location.pathname.startsWith("/lovelace/")) {
    window.llConfProm = Object(_data_lovelace__WEBPACK_IMPORTED_MODULE_6__["fetchConfig"])(conn, false);
  }
});
window.addEventListener("error", e => {
  const homeAssistant = document.querySelector("home-assistant");

  if (homeAssistant && homeAssistant.hass && homeAssistant.hass.callService) {
    homeAssistant.hass.callService("system_log", "write", {
      logger: `frontend.${ true ? "js_dev" : undefined}.${"latest"}.${"20191119.0".replace(".", "")}`,
      message: `${e.filename}:${e.lineno}:${e.colno} ${e.message}`
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29yZS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly8vLi4vbm9kZV9tb2R1bGVzL2JhYmVsLXBsdWdpbi10cmFuc2Zvcm0tYXN5bmMtdG8tcHJvbWlzZXMvaGVscGVycy5qcyIsIndlYnBhY2s6Ly8vLi4vbGliL2Vycm9ycy50cyIsIndlYnBhY2s6Ly8vLi4vbGliL21lc3NhZ2VzLnRzIiwid2VicGFjazovLy8uLi9saWIvc29ja2V0LnRzIiwid2VicGFjazovLy8uLi9saWIvY29ubmVjdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vbGliL2F1dGgudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi91dGlsLnRzIiwid2VicGFjazovLy8uLi9saWIvc3RvcmUudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9jb2xsZWN0aW9uLnRzIiwid2VicGFjazovLy8uLi9saWIvY29tbWFuZHMudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9jb25maWcudHMiLCJ3ZWJwYWNrOi8vLy4uL2xpYi9zZXJ2aWNlcy50cyIsIndlYnBhY2s6Ly8vLi4vbGliL2VudGl0aWVzLnRzIiwid2VicGFjazovLy8uLi9saWIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9hdXRoL3Rva2VuX3N0b3JhZ2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvYXV0aC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9sb3ZlbGFjZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS93cy1wYW5lbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvd3MtdGhlbWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL3dzLXVzZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2NvcmUudHMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG4gXHRmdW5jdGlvbiB3ZWJwYWNrSnNvbnBDYWxsYmFjayhkYXRhKSB7XG4gXHRcdHZhciBjaHVua0lkcyA9IGRhdGFbMF07XG4gXHRcdHZhciBtb3JlTW9kdWxlcyA9IGRhdGFbMV07XG5cblxuIFx0XHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcbiBcdFx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG4gXHRcdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG4gXHRcdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG4gXHRcdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuIFx0XHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuIFx0XHRcdH1cbiBcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuIFx0XHR9XG4gXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdGlmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG4gXHRcdFx0XHRtb2R1bGVzW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0XHR9XG4gXHRcdH1cbiBcdFx0aWYocGFyZW50SnNvbnBGdW5jdGlvbikgcGFyZW50SnNvbnBGdW5jdGlvbihkYXRhKTtcblxuIFx0XHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcbiBcdFx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG4gXHRcdH1cblxuIFx0fTtcblxuXG4gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuIFx0Ly8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4gXHQvLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxuIFx0dmFyIGluc3RhbGxlZENodW5rcyA9IHtcbiBcdFx0XCJjb3JlXCI6IDBcbiBcdH07XG5cblxuXG4gXHQvLyBzY3JpcHQgcGF0aCBmdW5jdGlvblxuIFx0ZnVuY3Rpb24ganNvbnBTY3JpcHRTcmMoY2h1bmtJZCkge1xuIFx0XHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgXCJcIiArICh7XCJleHRlcm5hbF9hdXRoXCI6XCJleHRlcm5hbF9hdXRoXCJ9W2NodW5rSWRdfHxjaHVua0lkKSArIFwiLmNodW5rLmpzXCJcbiBcdH1cblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG4gXHQvLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4gXHQvLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3NcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZSA9IGZ1bmN0aW9uIHJlcXVpcmVFbnN1cmUoY2h1bmtJZCkge1xuIFx0XHR2YXIgcHJvbWlzZXMgPSBbXTtcblxuXG4gXHRcdC8vIEpTT05QIGNodW5rIGxvYWRpbmcgZm9yIGphdmFzY3JpcHRcblxuIFx0XHR2YXIgaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuIFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIHsgLy8gMCBtZWFucyBcImFscmVhZHkgaW5zdGFsbGVkXCIuXG5cbiBcdFx0XHQvLyBhIFByb21pc2UgbWVhbnMgXCJjdXJyZW50bHkgbG9hZGluZ1wiLlxuIFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0pO1xuIFx0XHRcdH0gZWxzZSB7XG4gXHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdH0pO1xuIFx0XHRcdFx0cHJvbWlzZXMucHVzaChpbnN0YWxsZWRDaHVua0RhdGFbMl0gPSBwcm9taXNlKTtcblxuIFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuIFx0XHRcdFx0dmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuIFx0XHRcdFx0dmFyIG9uU2NyaXB0Q29tcGxldGU7XG5cbiBcdFx0XHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04JztcbiBcdFx0XHRcdHNjcmlwdC50aW1lb3V0ID0gMTIwO1xuIFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcbiBcdFx0XHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuIFx0XHRcdFx0fVxuIFx0XHRcdFx0c2NyaXB0LnNyYyA9IGpzb25wU2NyaXB0U3JjKGNodW5rSWQpO1xuXG4gXHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG4gXHRcdFx0XHR2YXIgZXJyb3IgPSBuZXcgRXJyb3IoKTtcbiBcdFx0XHRcdG9uU2NyaXB0Q29tcGxldGUgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiBcdFx0XHRcdFx0Ly8gYXZvaWQgbWVtIGxlYWtzIGluIElFLlxuIFx0XHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuIFx0XHRcdFx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG4gXHRcdFx0XHRcdHZhciBjaHVuayA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcbiBcdFx0XHRcdFx0aWYoY2h1bmsgIT09IDApIHtcbiBcdFx0XHRcdFx0XHRpZihjaHVuaykge1xuIFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcbiBcdFx0XHRcdFx0XHRcdHZhciByZWFsU3JjID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5zcmM7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG4gXHRcdFx0XHRcdFx0XHRlcnJvci50eXBlID0gZXJyb3JUeXBlO1xuIFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG4gXHRcdFx0XHRcdFx0XHRjaHVua1sxXShlcnJvcik7XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcbiBcdFx0XHRcdFx0fVxuIFx0XHRcdFx0fTtcbiBcdFx0XHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpe1xuIFx0XHRcdFx0XHRvblNjcmlwdENvbXBsZXRlKHsgdHlwZTogJ3RpbWVvdXQnLCB0YXJnZXQ6IHNjcmlwdCB9KTtcbiBcdFx0XHRcdH0sIDEyMDAwMCk7XG4gXHRcdFx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlO1xuIFx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9mcm9udGVuZF9sYXRlc3QvXCI7XG5cbiBcdC8vIG9uIGVycm9yIGZ1bmN0aW9uIGZvciBhc3luYyBsb2FkaW5nXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm9lID0gZnVuY3Rpb24oZXJyKSB7IGNvbnNvbGUuZXJyb3IoZXJyKTsgdGhyb3cgZXJyOyB9O1xuXG4gXHR2YXIganNvbnBBcnJheSA9IHNlbGZbXCJ3ZWJwYWNrSnNvbnBcIl0gPSBzZWxmW1wid2VicGFja0pzb25wXCJdIHx8IFtdO1xuIFx0dmFyIG9sZEpzb25wRnVuY3Rpb24gPSBqc29ucEFycmF5LnB1c2guYmluZChqc29ucEFycmF5KTtcbiBcdGpzb25wQXJyYXkucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrO1xuIFx0anNvbnBBcnJheSA9IGpzb25wQXJyYXkuc2xpY2UoKTtcbiBcdGZvcih2YXIgaSA9IDA7IGkgPCBqc29ucEFycmF5Lmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhqc29ucEFycmF5W2ldKTtcbiBcdHZhciBwYXJlbnRKc29ucEZ1bmN0aW9uID0gb2xkSnNvbnBGdW5jdGlvbjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvZW50cnlwb2ludHMvY29yZS50c1wiKTtcbiIsIi8vIEEgdHlwZSBvZiBwcm9taXNlLWxpa2UgdGhhdCByZXNvbHZlcyBzeW5jaHJvbm91c2x5IGFuZCBzdXBwb3J0cyBvbmx5IG9uZSBvYnNlcnZlclxuZXhwb3J0IGNvbnN0IF9QYWN0ID0gLyojX19QVVJFX18qLyhmdW5jdGlvbigpIHtcblx0ZnVuY3Rpb24gX1BhY3QoKSB7fVxuXHRfUGFjdC5wcm90b3R5cGUudGhlbiA9IGZ1bmN0aW9uKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG5cdFx0Y29uc3QgcmVzdWx0ID0gbmV3IF9QYWN0KCk7XG5cdFx0Y29uc3Qgc3RhdGUgPSB0aGlzLnM7XG5cdFx0aWYgKHN0YXRlKSB7XG5cdFx0XHRjb25zdCBjYWxsYmFjayA9IHN0YXRlICYgMSA/IG9uRnVsZmlsbGVkIDogb25SZWplY3RlZDtcblx0XHRcdGlmIChjYWxsYmFjaykge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBjYWxsYmFjayh0aGlzLnYpKTtcblx0XHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHRoaXMubyA9IGZ1bmN0aW9uKF90aGlzKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRjb25zdCB2YWx1ZSA9IF90aGlzLnY7XG5cdFx0XHRcdGlmIChfdGhpcy5zICYgMSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAxLCBvbkZ1bGZpbGxlZCA/IG9uRnVsZmlsbGVkKHZhbHVlKSA6IHZhbHVlKTtcblx0XHRcdFx0fSBlbHNlIGlmIChvblJlamVjdGVkKSB7XG5cdFx0XHRcdFx0X3NldHRsZShyZXN1bHQsIDEsIG9uUmVqZWN0ZWQodmFsdWUpKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRfc2V0dGxlKHJlc3VsdCwgMiwgdmFsdWUpO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGNhdGNoIChlKSB7XG5cdFx0XHRcdF9zZXR0bGUocmVzdWx0LCAyLCBlKTtcblx0XHRcdH1cblx0XHR9O1xuXHRcdHJldHVybiByZXN1bHQ7XG5cdH1cblx0cmV0dXJuIF9QYWN0O1xufSkoKTtcblxuLy8gU2V0dGxlcyBhIHBhY3Qgc3luY2hyb25vdXNseVxuZXhwb3J0IGZ1bmN0aW9uIF9zZXR0bGUocGFjdCwgc3RhdGUsIHZhbHVlKSB7XG5cdGlmICghcGFjdC5zKSB7XG5cdFx0aWYgKHZhbHVlIGluc3RhbmNlb2YgX1BhY3QpIHtcblx0XHRcdGlmICh2YWx1ZS5zKSB7XG5cdFx0XHRcdGlmIChzdGF0ZSAmIDEpIHtcblx0XHRcdFx0XHRzdGF0ZSA9IHZhbHVlLnM7XG5cdFx0XHRcdH1cblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsdWUubyA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCBzdGF0ZSk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRcdHZhbHVlLnRoZW4oX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIHN0YXRlKSwgX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpKTtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cdFx0cGFjdC5zID0gc3RhdGU7XG5cdFx0cGFjdC52ID0gdmFsdWU7XG5cdFx0Y29uc3Qgb2JzZXJ2ZXIgPSBwYWN0Lm87XG5cdFx0aWYgKG9ic2VydmVyKSB7XG5cdFx0XHRvYnNlcnZlcihwYWN0KTtcblx0XHR9XG5cdH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9pc1NldHRsZWRQYWN0KHRoZW5hYmxlKSB7XG5cdHJldHVybiB0aGVuYWJsZSBpbnN0YW5jZW9mIF9QYWN0ICYmIHRoZW5hYmxlLnMgJiAxO1xufVxuXG4vLyBDb252ZXJ0cyBhcmd1bWVudCB0byBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgYSBQcm9taXNlXG5leHBvcnQgZnVuY3Rpb24gX2FzeW5jKGYpIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHRcdGZvciAodmFyIGFyZ3MgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG5cdFx0fVxuXHRcdHRyeSB7XG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGYuYXBwbHkodGhpcywgYXJncykpO1xuXHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBd2FpdHMgb24gYSB2YWx1ZSB0aGF0IG1heSBvciBtYXkgbm90IGJlIGEgUHJvbWlzZSAoZXF1aXZhbGVudCB0byB0aGUgYXdhaXQga2V5d29yZCBpbiBFUzIwMTUsIHdpdGggY29udGludWF0aW9ucyBwYXNzZWQgZXhwbGljaXRseSlcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXQodmFsdWUsIHRoZW4sIGRpcmVjdCkge1xuXHRpZiAoZGlyZWN0KSB7XG5cdFx0cmV0dXJuIHRoZW4gPyB0aGVuKHZhbHVlKSA6IHZhbHVlO1xuXHR9XG5cdGlmICghdmFsdWUgfHwgIXZhbHVlLnRoZW4pIHtcblx0XHR2YWx1ZSA9IFByb21pc2UucmVzb2x2ZSh2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIHRoZW4gPyB2YWx1ZS50aGVuKHRoZW4pIDogdmFsdWU7XG59XG5cbi8vIEF3YWl0cyBvbiBhIHZhbHVlIHRoYXQgbWF5IG9yIG1heSBub3QgYmUgYSBQcm9taXNlLCB0aGVuIGlnbm9yZXMgaXRcbmV4cG9ydCBmdW5jdGlvbiBfYXdhaXRJZ25vcmVkKHZhbHVlLCBkaXJlY3QpIHtcblx0aWYgKCFkaXJlY3QpIHtcblx0XHRyZXR1cm4gdmFsdWUgJiYgdmFsdWUudGhlbiA/IHZhbHVlLnRoZW4oX2VtcHR5KSA6IFByb21pc2UucmVzb2x2ZSgpO1xuXHR9XG59XG5cbi8vIFByb2NlZWRzIGFmdGVyIGEgdmFsdWUgaGFzIHJlc29sdmVkLCBvciBwcm9jZWVkcyBpbW1lZGlhdGVseSBpZiB0aGUgdmFsdWUgaXMgbm90IHRoZW5hYmxlXG5leHBvcnQgZnVuY3Rpb24gX2NvbnRpbnVlKHZhbHVlLCB0aGVuKSB7XG5cdHJldHVybiB2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbih0aGVuKSA6IHRoZW4odmFsdWUpO1xufVxuXG4vLyBQcm9jZWVkcyBhZnRlciBhIHZhbHVlIGhhcyByZXNvbHZlZCwgb3IgcHJvY2VlZHMgaW1tZWRpYXRlbHkgaWYgdGhlIHZhbHVlIGlzIG5vdCB0aGVuYWJsZVxuZXhwb3J0IGZ1bmN0aW9uIF9jb250aW51ZUlnbm9yZWQodmFsdWUpIHtcblx0aWYgKHZhbHVlICYmIHZhbHVlLnRoZW4pIHtcblx0XHRyZXR1cm4gdmFsdWUudGhlbihfZW1wdHkpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QgdGhhdCBoYXMgYSBsZW5ndGggcHJvcGVydHksIHBhc3NpbmcgdGhlIGluZGV4IGFzIHRoZSBmaXJzdCBhcmd1bWVudCB0byB0aGUgY2FsbGJhY2sgKGV2ZW4gYXMgdGhlIGxlbmd0aCBwcm9wZXJ0eSBjaGFuZ2VzKVxuZXhwb3J0IGZ1bmN0aW9uIF9mb3JUbyhhcnJheSwgYm9keSwgY2hlY2spIHtcblx0dmFyIGkgPSAtMSwgcGFjdCwgcmVqZWN0O1xuXHRmdW5jdGlvbiBfY3ljbGUocmVzdWx0KSB7XG5cdFx0dHJ5IHtcblx0XHRcdHdoaWxlICgrK2kgPCBhcnJheS5sZW5ndGggJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keShpKTtcblx0XHRcdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwYWN0ID0gcmVzdWx0O1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGUpIHtcblx0XHRcdF9zZXR0bGUocGFjdCB8fCAocGFjdCA9IG5ldyBfUGFjdCgpKSwgMiwgZSk7XG5cdFx0fVxuXHR9XG5cdF9jeWNsZSgpO1xuXHRyZXR1cm4gcGFjdDtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSB0aHJvdWdoIGFuIG9iamVjdCdzIHByb3BlcnRpZXMgKGluY2x1ZGluZyBwcm9wZXJ0aWVzIGluaGVyaXRlZCBmcm9tIHRoZSBwcm90b3R5cGUpXG4vLyBVc2VzIGEgc25hcHNob3Qgb2YgdGhlIG9iamVjdCdzIHByb3BlcnRpZXNcbmV4cG9ydCBmdW5jdGlvbiBfZm9ySW4odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0a2V5cy5wdXNoKGtleSk7XG5cdH1cblx0cmV0dXJuIF9mb3JUbyhrZXlzLCBmdW5jdGlvbihpKSB7IHJldHVybiBib2R5KGtleXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyBvd24gcHJvcGVydGllcyAoZXhjbHVkaW5nIHByb3BlcnRpZXMgaW5oZXJpdGVkIGZyb20gdGhlIHByb3RvdHlwZSlcbi8vIFVzZXMgYSBzbmFwc2hvdCBvZiB0aGUgb2JqZWN0J3MgcHJvcGVydGllc1xuZXhwb3J0IGZ1bmN0aW9uIF9mb3JPd24odGFyZ2V0LCBib2R5LCBjaGVjaykge1xuXHR2YXIga2V5cyA9IFtdO1xuXHRmb3IgKHZhciBrZXkgaW4gdGFyZ2V0KSB7XG5cdFx0aWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSkpIHtcblx0XHRcdGtleXMucHVzaChrZXkpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gX2ZvclRvKGtleXMsIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIGJvZHkoa2V5c1tpXSk7IH0sIGNoZWNrKTtcbn1cblxuZXhwb3J0IGNvbnN0IF9pdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuaXRlcmF0b3IgfHwgKFN5bWJvbC5pdGVyYXRvciA9IFN5bWJvbChcIlN5bWJvbC5pdGVyYXRvclwiKSkpIDogXCJAQGl0ZXJhdG9yXCI7XG5cbi8vIEFzeW5jaHJvbm91c2x5IGl0ZXJhdGUgdGhyb3VnaCBhbiBvYmplY3QncyB2YWx1ZXNcbi8vIFVzZXMgZm9yLi4ub2YgaWYgdGhlIHJ1bnRpbWUgc3VwcG9ydHMgaXQsIG90aGVyd2lzZSBpdGVyYXRlcyB1bnRpbCBsZW5ndGggb24gYSBjb3B5XG5leHBvcnQgZnVuY3Rpb24gX2Zvck9mKHRhcmdldCwgYm9keSwgY2hlY2spIHtcblx0aWYgKHR5cGVvZiB0YXJnZXRbX2l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIGl0ZXJhdG9yID0gdGFyZ2V0W19pdGVyYXRvclN5bWJvbF0oKSwgc3RlcCwgcGFjdCwgcmVqZWN0O1xuXHRcdGZ1bmN0aW9uIF9jeWNsZShyZXN1bHQpIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdHdoaWxlICghKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmUgJiYgKCFjaGVjayB8fCAhY2hlY2soKSkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSBib2R5KHN0ZXAudmFsdWUpO1xuXHRcdFx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0LnRoZW4oX2N5Y2xlLCByZWplY3QgfHwgKHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0ID0gbmV3IF9QYWN0KCksIDIpKSk7XG5cdFx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHBhY3QpIHtcblx0XHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cGFjdCA9IHJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fSBjYXRjaCAoZSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QgfHwgKHBhY3QgPSBuZXcgX1BhY3QoKSksIDIsIGUpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRfY3ljbGUoKTtcblx0XHRpZiAoaXRlcmF0b3IucmV0dXJuKSB7XG5cdFx0XHR2YXIgX2ZpeHVwID0gZnVuY3Rpb24odmFsdWUpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRpZiAoIXN0ZXAuZG9uZSkge1xuXHRcdFx0XHRcdFx0aXRlcmF0b3IucmV0dXJuKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cdFx0XHRpZiAocGFjdCAmJiBwYWN0LnRoZW4pIHtcblx0XHRcdFx0cmV0dXJuIHBhY3QudGhlbihfZml4dXAsIGZ1bmN0aW9uKGUpIHtcblx0XHRcdFx0XHR0aHJvdyBfZml4dXAoZSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXHRcdFx0X2ZpeHVwKCk7XG5cdFx0fVxuXHRcdHJldHVybiBwYWN0O1xuXHR9XG5cdC8vIE5vIHN1cHBvcnQgZm9yIFN5bWJvbC5pdGVyYXRvclxuXHRpZiAoIShcImxlbmd0aFwiIGluIHRhcmdldCkpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZVwiKTtcblx0fVxuXHQvLyBIYW5kbGUgbGl2ZSBjb2xsZWN0aW9ucyBwcm9wZXJseVxuXHR2YXIgdmFsdWVzID0gW107XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgdGFyZ2V0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFsdWVzLnB1c2godGFyZ2V0W2ldKTtcblx0fVxuXHRyZXR1cm4gX2ZvclRvKHZhbHVlcywgZnVuY3Rpb24oaSkgeyByZXR1cm4gYm9keSh2YWx1ZXNbaV0pOyB9LCBjaGVjayk7XG59XG5cbmV4cG9ydCBjb25zdCBfYXN5bmNJdGVyYXRvclN5bWJvbCA9IC8qI19fUFVSRV9fKi8gdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IChTeW1ib2wuYXN5bmNJdGVyYXRvciB8fCAoU3ltYm9sLmFzeW5jSXRlcmF0b3IgPSBTeW1ib2woXCJTeW1ib2wuYXN5bmNJdGVyYXRvclwiKSkpIDogXCJAQGFzeW5jSXRlcmF0b3JcIjtcblxuLy8gQXN5bmNocm9ub3VzbHkgaXRlcmF0ZSBvbiBhIHZhbHVlIHVzaW5nIGl0J3MgYXN5bmMgaXRlcmF0b3IgaWYgcHJlc2VudCwgb3IgaXRzIHN5bmNocm9ub3VzIGl0ZXJhdG9yIGlmIG1pc3NpbmdcbmV4cG9ydCBmdW5jdGlvbiBfZm9yQXdhaXRPZih0YXJnZXQsIGJvZHksIGNoZWNrKSB7XG5cdGlmICh0eXBlb2YgdGFyZ2V0W19hc3luY0l0ZXJhdG9yU3ltYm9sXSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0XHR2YXIgaXRlcmF0b3IgPSB0YXJnZXRbX2FzeW5jSXRlcmF0b3JTeW1ib2xdKCk7XG5cdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdHJldHVybiBwYWN0O1xuXHRcdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkocmVzdWx0KSB7XG5cdFx0XHRpZiAoY2hlY2sgJiYgIWNoZWNrKCkpIHtcblx0XHRcdFx0cmV0dXJuIF9zZXR0bGUocGFjdCwgMSwgaXRlcmF0b3IucmV0dXJuID8gaXRlcmF0b3IucmV0dXJuKCkudGhlbihmdW5jdGlvbigpIHsgcmV0dXJuIHJlc3VsdDsgfSkgOiByZXN1bHQpO1xuXHRcdFx0fVxuXHRcdFx0aXRlcmF0b3IubmV4dCgpLnRoZW4oX3Jlc3VtZUFmdGVyTmV4dCkudGhlbih2b2lkIDAsIF9yZWplY3QpO1xuXHRcdH1cblx0XHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJOZXh0KHN0ZXApIHtcblx0XHRcdGlmIChzdGVwLmRvbmUpIHtcblx0XHRcdFx0X3NldHRsZShwYWN0LCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFByb21pc2UucmVzb2x2ZShib2R5KHN0ZXAudmFsdWUpKS50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCBfcmVqZWN0KTtcblx0XHRcdH1cblx0XHR9XG5cdFx0ZnVuY3Rpb24gX3JlamVjdChlcnJvcikge1xuXHRcdFx0X3NldHRsZShwYWN0LCAyLCBpdGVyYXRvci5yZXR1cm4gPyBpdGVyYXRvci5yZXR1cm4oKS50aGVuKGZ1bmN0aW9uKCkgeyByZXR1cm4gZXJyb3I7IH0pIDogZXJyb3IpO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gUHJvbWlzZS5yZXNvbHZlKF9mb3JPZih0YXJnZXQsIGZ1bmN0aW9uKHZhbHVlKSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oYm9keSk7IH0sIGNoZWNrKSk7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGltcGxlbWVudCBhIGdlbmVyaWMgZm9yIGxvb3BcbmV4cG9ydCBmdW5jdGlvbiBfZm9yKHRlc3QsIHVwZGF0ZSwgYm9keSkge1xuXHR2YXIgc3RhZ2U7XG5cdGZvciAoOzspIHtcblx0XHR2YXIgc2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0aWYgKF9pc1NldHRsZWRQYWN0KHNob3VsZENvbnRpbnVlKSkge1xuXHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdH1cblx0XHRpZiAoIXNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0XHRpZiAoc2hvdWxkQ29udGludWUudGhlbikge1xuXHRcdFx0c3RhZ2UgPSAwO1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdFx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0cmVzdWx0ID0gcmVzdWx0LnM7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzdGFnZSA9IDE7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAodXBkYXRlKSB7XG5cdFx0XHR2YXIgdXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdGlmICh1cGRhdGVWYWx1ZSAmJiB1cGRhdGVWYWx1ZS50aGVuICYmICFfaXNTZXR0bGVkUGFjdCh1cGRhdGVWYWx1ZSkpIHtcblx0XHRcdFx0c3RhZ2UgPSAyO1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9XG5cdH1cblx0dmFyIHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0dmFyIHJlamVjdCA9IF9zZXR0bGUuYmluZChudWxsLCBwYWN0LCAyKTtcblx0KHN0YWdlID09PSAwID8gc2hvdWxkQ29udGludWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KSA6IHN0YWdlID09PSAxID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiB1cGRhdGVWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclVwZGF0ZSkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRyZXR1cm4gcGFjdDtcblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keSh2YWx1ZSkge1xuXHRcdHJlc3VsdCA9IHZhbHVlO1xuXHRcdGRvIHtcblx0XHRcdGlmICh1cGRhdGUpIHtcblx0XHRcdFx0dXBkYXRlVmFsdWUgPSB1cGRhdGUoKTtcblx0XHRcdFx0aWYgKHVwZGF0ZVZhbHVlICYmIHVwZGF0ZVZhbHVlLnRoZW4gJiYgIV9pc1NldHRsZWRQYWN0KHVwZGF0ZVZhbHVlKSkge1xuXHRcdFx0XHRcdHVwZGF0ZVZhbHVlLnRoZW4oX3Jlc3VtZUFmdGVyVXBkYXRlKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHNob3VsZENvbnRpbnVlID0gdGVzdCgpO1xuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSB8fCAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpICYmICFzaG91bGRDb250aW51ZS52KSkge1xuXHRcdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fVxuXHRcdH0gd2hpbGUgKCFyZXN1bHQgfHwgIXJlc3VsdC50aGVuKTtcblx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0fVxuXHRmdW5jdGlvbiBfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKSB7XG5cdFx0aWYgKHNob3VsZENvbnRpbnVlKSB7XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0X3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdFx0fVxuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclVwZGF0ZSgpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUgPSB0ZXN0KCkpIHtcblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRfcmVzdW1lQWZ0ZXJUZXN0KHNob3VsZENvbnRpbnVlKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdH1cblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBpbXBsZW1lbnQgYSBkbyAuLi4gd2hpbGUgbG9vcFxuZXhwb3J0IGZ1bmN0aW9uIF9kbyhib2R5LCB0ZXN0KSB7XG5cdHZhciBhd2FpdEJvZHk7XG5cdGRvIHtcblx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChyZXN1bHQpKSB7XG5cdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHZhciBzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRpZiAoX2lzU2V0dGxlZFBhY3Qoc2hvdWxkQ29udGludWUpKSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0fVxuXHRcdGlmICghc2hvdWxkQ29udGludWUpIHtcblx0XHRcdHJldHVybiByZXN1bHQ7XG5cdFx0fVxuXHR9IHdoaWxlICghc2hvdWxkQ29udGludWUudGhlbik7XG5cdGNvbnN0IHBhY3QgPSBuZXcgX1BhY3QoKTtcblx0Y29uc3QgcmVqZWN0ID0gX3NldHRsZS5iaW5kKG51bGwsIHBhY3QsIDIpO1xuXHQoYXdhaXRCb2R5ID8gcmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkgOiBzaG91bGRDb250aW51ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlckJvZHkodmFsdWUpIHtcblx0XHRyZXN1bHQgPSB2YWx1ZTtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRzaG91bGRDb250aW51ZSA9IHRlc3QoKTtcblx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSBzaG91bGRDb250aW51ZS52O1xuXHRcdFx0fVxuXHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmIChzaG91bGRDb250aW51ZS50aGVuKSB7XG5cdFx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRyZXN1bHQgPSByZXN1bHQudjtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHR9XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3Qoc2hvdWxkQ29udGludWUpIHtcblx0XHRpZiAoc2hvdWxkQ29udGludWUpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0cmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0aWYgKF9pc1NldHRsZWRQYWN0KHJlc3VsdCkpIHtcblx0XHRcdFx0XHRcdHJlc3VsdCA9IHJlc3VsdC52O1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0c2hvdWxkQ29udGludWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmIChfaXNTZXR0bGVkUGFjdChzaG91bGRDb250aW51ZSkpIHtcblx0XHRcdFx0XHRzaG91bGRDb250aW51ZSA9IHNob3VsZENvbnRpbnVlLnY7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKCFzaG91bGRDb250aW51ZSkge1xuXHRcdFx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gd2hpbGUgKCFzaG91bGRDb250aW51ZS50aGVuKTtcblx0XHRcdHNob3VsZENvbnRpbnVlLnRoZW4oX3Jlc3VtZUFmdGVyVGVzdCkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0XHR9XG5cdH1cbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgaW1wbGVtZW50IGEgc3dpdGNoIHN0YXRlbWVudFxuZXhwb3J0IGZ1bmN0aW9uIF9zd2l0Y2goZGlzY3JpbWluYW50LCBjYXNlcykge1xuXHR2YXIgZGlzcGF0Y2hJbmRleCA9IC0xO1xuXHR2YXIgYXdhaXRCb2R5O1xuXHRvdXRlcjoge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY2FzZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciB0ZXN0ID0gY2FzZXNbaV1bMF07XG5cdFx0XHRpZiAodGVzdCkge1xuXHRcdFx0XHR2YXIgdGVzdFZhbHVlID0gdGVzdCgpO1xuXHRcdFx0XHRpZiAodGVzdFZhbHVlICYmIHRlc3RWYWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0YnJlYWsgb3V0ZXI7XG5cdFx0XHRcdH1cblx0XHRcdFx0aWYgKHRlc3RWYWx1ZSA9PT0gZGlzY3JpbWluYW50KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCA9IGk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEZvdW5kIHRoZSBkZWZhdWx0IGNhc2UsIHNldCBpdCBhcyB0aGUgcGVuZGluZyBkaXNwYXRjaCBjYXNlXG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoZGlzcGF0Y2hJbmRleCAhPT0gLTEpIHtcblx0XHRcdGRvIHtcblx0XHRcdFx0dmFyIGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRcdGJvZHkgPSBjYXNlc1tkaXNwYXRjaEluZGV4XVsxXTtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgcmVzdWx0ID0gYm9keSgpO1xuXHRcdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdFx0YXdhaXRCb2R5ID0gdHJ1ZTtcblx0XHRcdFx0XHRicmVhayBvdXRlcjtcblx0XHRcdFx0fVxuXHRcdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0XHR9IHdoaWxlIChmYWxsdGhyb3VnaENoZWNrICYmICFmYWxsdGhyb3VnaENoZWNrKCkpO1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblx0Y29uc3QgcGFjdCA9IG5ldyBfUGFjdCgpO1xuXHRjb25zdCByZWplY3QgPSBfc2V0dGxlLmJpbmQobnVsbCwgcGFjdCwgMik7XG5cdChhd2FpdEJvZHkgPyByZXN1bHQudGhlbihfcmVzdW1lQWZ0ZXJCb2R5KSA6IHRlc3RWYWx1ZS50aGVuKF9yZXN1bWVBZnRlclRlc3QpKS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0cmV0dXJuIHBhY3Q7XG5cdGZ1bmN0aW9uIF9yZXN1bWVBZnRlclRlc3QodmFsdWUpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHRpZiAodmFsdWUgPT09IGRpc2NyaW1pbmFudCkge1xuXHRcdFx0XHRkaXNwYXRjaEluZGV4ID0gaTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoKytpID09PSBjYXNlcy5sZW5ndGgpIHtcblx0XHRcdFx0aWYgKGRpc3BhdGNoSW5kZXggIT09IC0xKSB7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0X3NldHRsZShwYWN0LCAxLCByZXN1bHQpO1xuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0dGVzdCA9IGNhc2VzW2ldWzBdO1xuXHRcdFx0aWYgKHRlc3QpIHtcblx0XHRcdFx0dmFsdWUgPSB0ZXN0KCk7XG5cdFx0XHRcdGlmICh2YWx1ZSAmJiB2YWx1ZS50aGVuKSB7XG5cdFx0XHRcdFx0dmFsdWUudGhlbihfcmVzdW1lQWZ0ZXJUZXN0KS50aGVuKHZvaWQgMCwgcmVqZWN0KTtcblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXggPSBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRkbyB7XG5cdFx0XHR2YXIgYm9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0d2hpbGUgKCFib2R5KSB7XG5cdFx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdFx0Ym9keSA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzFdO1xuXHRcdFx0fVxuXHRcdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0XHRcdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRcdFx0cmVzdWx0LnRoZW4oX3Jlc3VtZUFmdGVyQm9keSkudGhlbih2b2lkIDAsIHJlamVjdCk7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblx0XHRcdHZhciBmYWxsdGhyb3VnaENoZWNrID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMl07XG5cdFx0XHRkaXNwYXRjaEluZGV4Kys7XG5cdFx0fSB3aGlsZSAoZmFsbHRocm91Z2hDaGVjayAmJiAhZmFsbHRocm91Z2hDaGVjaygpKTtcblx0XHRfc2V0dGxlKHBhY3QsIDEsIHJlc3VsdCk7XG5cdH1cblx0ZnVuY3Rpb24gX3Jlc3VtZUFmdGVyQm9keShyZXN1bHQpIHtcblx0XHRmb3IgKDs7KSB7XG5cdFx0XHR2YXIgZmFsbHRocm91Z2hDaGVjayA9IGNhc2VzW2Rpc3BhdGNoSW5kZXhdWzJdO1xuXHRcdFx0aWYgKCFmYWxsdGhyb3VnaENoZWNrIHx8IGZhbGx0aHJvdWdoQ2hlY2soKSkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGRpc3BhdGNoSW5kZXgrKztcblx0XHRcdHZhciBib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR3aGlsZSAoIWJvZHkpIHtcblx0XHRcdFx0ZGlzcGF0Y2hJbmRleCsrO1xuXHRcdFx0XHRib2R5ID0gY2FzZXNbZGlzcGF0Y2hJbmRleF1bMV07XG5cdFx0XHR9XG5cdFx0XHRyZXN1bHQgPSBib2R5KCk7XG5cdFx0XHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0XHRcdHJlc3VsdC50aGVuKF9yZXN1bWVBZnRlckJvZHkpLnRoZW4odm9pZCAwLCByZWplY3QpO1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cdFx0fVxuXHRcdF9zZXR0bGUocGFjdCwgMSwgcmVzdWx0KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2NhbGwoYm9keSwgdGhlbiwgZGlyZWN0KSB7XG5cdGlmIChkaXJlY3QpIHtcblx0XHRyZXR1cm4gdGhlbiA/IHRoZW4oYm9keSgpKSA6IGJvZHkoKTtcblx0fVxuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBQcm9taXNlLnJlc29sdmUoYm9keSgpKTtcblx0XHRyZXR1cm4gdGhlbiA/IHJlc3VsdC50aGVuKHRoZW4pIDogcmVzdWx0O1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVqZWN0KGUpO1xuXHR9XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGNhbGwgYSBmdW5jdGlvbiBhbmQgc3dhbGxvdyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2NhbGxJZ25vcmVkKGJvZHksIGRpcmVjdCkge1xuXHRyZXR1cm4gX2NhbGwoYm9keSwgX2VtcHR5LCBkaXJlY3QpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHBhc3MgdGhlIHJlc3VsdCB0byBleHBsaWNpdGx5IHBhc3NlZCBjb250aW51YXRpb25zXG5leHBvcnQgZnVuY3Rpb24gX2ludm9rZShib2R5LCB0aGVuKSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4odGhlbik7XG5cdH1cblx0cmV0dXJuIHRoZW4ocmVzdWx0KTtcbn1cblxuLy8gQXN5bmNocm9ub3VzbHkgY2FsbCBhIGZ1bmN0aW9uIGFuZCBzd2FsbG93IHRoZSByZXN1bHRcbmV4cG9ydCBmdW5jdGlvbiBfaW52b2tlSWdub3JlZChib2R5KSB7XG5cdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oX2VtcHR5KTtcblx0fVxufVxuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvblxuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaChib2R5LCByZWNvdmVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaChlKSB7XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH1cblx0aWYgKHJlc3VsdCAmJiByZXN1bHQudGhlbikge1xuXHRcdHJldHVybiByZXN1bHQudGhlbih2b2lkIDAsIHJlY292ZXIpO1xuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5cbi8vIEFzeW5jaHJvbm91c2x5IGF3YWl0IGEgcHJvbWlzZSBhbmQgcGFzcyB0aGUgcmVzdWx0IHRvIGEgZmluYWxseSBjb250aW51YXRpb25cbmV4cG9ydCBmdW5jdGlvbiBfZmluYWxseVJldGhyb3dzKGJvZHksIGZpbmFsaXplcikge1xuXHR0cnkge1xuXHRcdHZhciByZXN1bHQgPSBib2R5KCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmluYWxpemVyKHRydWUsIGUpO1xuXHR9XG5cdGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcblx0XHRyZXR1cm4gcmVzdWx0LnRoZW4oZmluYWxpemVyLmJpbmQobnVsbCwgZmFsc2UpLCBmaW5hbGl6ZXIuYmluZChudWxsLCB0cnVlKSk7XG5cdH1cblx0cmV0dXJuIGZpbmFsaXplcihmYWxzZSwgdmFsdWUpO1xufVxuXG4vLyBBc3luY2hyb25vdXNseSBhd2FpdCBhIHByb21pc2UgYW5kIGludm9rZSBhIGZpbmFsbHkgY29udGludWF0aW9uIHRoYXQgYWx3YXlzIG92ZXJyaWRlcyB0aGUgcmVzdWx0XG5leHBvcnQgZnVuY3Rpb24gX2ZpbmFsbHkoYm9keSwgZmluYWxpemVyKSB7XG5cdHRyeSB7XG5cdFx0dmFyIHJlc3VsdCA9IGJvZHkoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdHJldHVybiBmaW5hbGl6ZXIoKTtcblx0fVxuXHRpZiAocmVzdWx0ICYmIHJlc3VsdC50aGVuKSB7XG5cdFx0cmV0dXJuIHJlc3VsdC50aGVuKGZpbmFsaXplciwgZmluYWxpemVyKTtcblx0fVxuXHRyZXR1cm4gZmluYWxpemVyKCk7XG59XG5cbi8vIFJldGhyb3cgb3IgcmV0dXJuIGEgdmFsdWUgZnJvbSBhIGZpbmFsbHkgY29udGludWF0aW9uXG5leHBvcnQgZnVuY3Rpb24gX3JldGhyb3codGhyb3duLCB2YWx1ZSkge1xuXHRpZiAodGhyb3duKVxuXHRcdHRocm93IHZhbHVlO1xuXHRyZXR1cm4gdmFsdWU7XG59XG5cbi8vIEVtcHR5IGZ1bmN0aW9uIHRvIGltcGxlbWVudCBicmVhayBhbmQgb3RoZXIgY29udHJvbCBmbG93IHRoYXQgaWdub3JlcyBhc3luY2hyb25vdXMgcmVzdWx0c1xuZXhwb3J0IGZ1bmN0aW9uIF9lbXB0eSgpIHtcbn1cblxuLy8gU2VudGluZWwgdmFsdWUgZm9yIGVhcmx5IHJldHVybnMgaW4gZ2VuZXJhdG9ycyBcbmV4cG9ydCBjb25zdCBfZWFybHlSZXR1cm4gPSAvKiNfX1BVUkVfXyovIHt9O1xuXG4vLyBBc3luY2hyb25vdXNseSBjYWxsIGEgZnVuY3Rpb24gYW5kIHNlbmQgZXJyb3JzIHRvIHJlY292ZXJ5IGNvbnRpbnVhdGlvbiwgc2tpcHBpbmcgZWFybHkgcmV0dXJuc1xuZXhwb3J0IGZ1bmN0aW9uIF9jYXRjaEluR2VuZXJhdG9yKGJvZHksIHJlY292ZXIpIHtcblx0cmV0dXJuIF9jYXRjaChib2R5LCBmdW5jdGlvbihlKSB7XG5cdFx0aWYgKGUgPT09IF9lYXJseVJldHVybikge1xuXHRcdFx0dGhyb3cgZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlY292ZXIoZSk7XG5cdH0pO1xufVxuXG4vLyBBc3luY2hyb25vdXMgZ2VuZXJhdG9yIGNsYXNzOyBhY2NlcHRzIHRoZSBlbnRyeXBvaW50IG9mIHRoZSBnZW5lcmF0b3IsIHRvIHdoaWNoIGl0IHBhc3NlcyBpdHNlbGYgd2hlbiB0aGUgZ2VuZXJhdG9yIHNob3VsZCBzdGFydFxuZXhwb3J0IGNvbnN0IF9Bc3luY0dlbmVyYXRvciA9IC8qI19fUFVSRV9fKi8oZnVuY3Rpb24oKSB7XG5cdGZ1bmN0aW9uIF9Bc3luY0dlbmVyYXRvcihlbnRyeSkge1xuXHRcdHRoaXMuX2VudHJ5ID0gZW50cnk7XG5cdFx0dGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0dGhpcy5fcmVzb2x2ZSA9IG51bGw7XG5cdFx0dGhpcy5fcmV0dXJuID0gbnVsbDtcblx0XHR0aGlzLl9wcm9taXNlID0gbnVsbDtcblx0fVxuXG5cdGZ1bmN0aW9uIF93cmFwUmV0dXJuZWRWYWx1ZSh2YWx1ZSkge1xuXHRcdHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogdHJ1ZSB9O1xuXHR9XG5cdGZ1bmN0aW9uIF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSB7XG5cdFx0cmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiBmYWxzZSB9O1xuXHR9XG5cblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5feWllbGQgPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIFlpZWxkIHRoZSB2YWx1ZSB0byB0aGUgcGVuZGluZyBuZXh0IGNhbGxcblx0XHR0aGlzLl9yZXNvbHZlKHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF93cmFwWWllbGRlZFZhbHVlKSA6IF93cmFwWWllbGRlZFZhbHVlKHZhbHVlKSk7XG5cdFx0Ly8gUmV0dXJuIGEgcGFjdCBmb3IgYW4gdXBjb21pbmcgbmV4dC9yZXR1cm4vdGhyb3cgY2FsbFxuXHRcdHJldHVybiB0aGlzLl9wYWN0ID0gbmV3IF9QYWN0KCk7XG5cdH07XG5cdF9Bc3luY0dlbmVyYXRvci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG5cdFx0Ly8gQWR2YW5jZSB0aGUgZ2VuZXJhdG9yLCBzdGFydGluZyBpdCBpZiBpdCBoYXMgeWV0IHRvIGJlIHN0YXJ0ZWRcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0Y29uc3QgX2VudHJ5ID0gX3RoaXMuX2VudHJ5O1xuXHRcdFx0XHRpZiAoX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgbmV4dCBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBTdGFydCB0aGUgZ2VuZXJhdG9yXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gcmVzb2x2ZTtcblx0XHRcdFx0ZnVuY3Rpb24gcmV0dXJuVmFsdWUodmFsdWUpIHtcblx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSh2YWx1ZSAmJiB2YWx1ZS50aGVuID8gdmFsdWUudGhlbihfd3JhcFJldHVybmVkVmFsdWUpIDogX3dyYXBSZXR1cm5lZFZhbHVlKHZhbHVlKSk7XG5cdFx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0XHRfZW50cnkoX3RoaXMpLnRoZW4ocmV0dXJuVmFsdWUsIGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0XHRcdFx0aWYgKGVycm9yID09PSBfZWFybHlSZXR1cm4pIHtcblx0XHRcdFx0XHRcdHJldHVyblZhbHVlKF90aGlzLl9yZXR1cm4pO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRjb25zdCBwYWN0ID0gbmV3IF9QYWN0KCk7XG5cdFx0XHRcdFx0XHRfdGhpcy5fcmVzb2x2ZShwYWN0KTtcblx0XHRcdFx0XHRcdF90aGlzLl9wYWN0ID0gbnVsbDtcblx0XHRcdFx0XHRcdF90aGlzLl9yZXNvbHZlID0gbnVsbDtcblx0XHRcdFx0XHRcdF9yZXNvbHZlKHBhY3QsIDIsIGVycm9yKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQgYW5kIGEgeWllbGQgZXhwcmVzc2lvbiBpcyBwZW5kaW5nLCBzZXR0bGUgaXRcblx0XHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRcdF9zZXR0bGUoX3BhY3QsIDEsIHZhbHVlKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fTtcblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS5yZXR1cm4gPSBmdW5jdGlvbih2YWx1ZSkge1xuXHRcdC8vIEVhcmx5IHJldHVybiBmcm9tIHRoZSBnZW5lcmF0b3IgaWYgc3RhcnRlZCwgb3RoZXJ3aXNlIGFiYW5kb25zIHRoZSBnZW5lcmF0b3Jcblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRcdGNvbnN0IF9wYWN0ID0gX3RoaXMuX3BhY3Q7XG5cdFx0XHRpZiAoX3BhY3QgPT09IG51bGwpIHtcblx0XHRcdFx0aWYgKF90aGlzLl9lbnRyeSA9PT0gbnVsbCkge1xuXHRcdFx0XHRcdC8vIEdlbmVyYXRvciBpcyBzdGFydGVkLCBidXQgbm90IGF3YWl0aW5nIGEgeWllbGQgZXhwcmVzc2lvblxuXHRcdFx0XHRcdC8vIEFiYW5kb24gdGhlIHJldHVybiBjYWxsIVxuXHRcdFx0XHRcdHJldHVybiByZXNvbHZlKF90aGlzLl9wcm9taXNlKTtcblx0XHRcdFx0fVxuXHRcdFx0XHQvLyBHZW5lcmF0b3IgaXMgbm90IHN0YXJ0ZWQsIGFiYW5kb24gaXQgYW5kIHJldHVybiB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiByZXNvbHZlKHZhbHVlICYmIHZhbHVlLnRoZW4gPyB2YWx1ZS50aGVuKF93cmFwUmV0dXJuZWRWYWx1ZSkgOiBfd3JhcFJldHVybmVkVmFsdWUodmFsdWUpKTtcblx0XHRcdH1cblx0XHRcdC8vIFNldHRsZSB0aGUgeWllbGQgZXhwcmVzc2lvbiB3aXRoIGEgcmVqZWN0ZWQgXCJlYXJseSByZXR1cm5cIiB2YWx1ZVxuXHRcdFx0X3RoaXMuX3JldHVybiA9IHZhbHVlO1xuXHRcdFx0X3RoaXMuX3Jlc29sdmUgPSByZXNvbHZlO1xuXHRcdFx0X3RoaXMuX3BhY3QgPSBudWxsO1xuXHRcdFx0X3NldHRsZShfcGFjdCwgMiwgX2Vhcmx5UmV0dXJuKTtcblx0XHR9KTtcblx0fTtcblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZS50aHJvdyA9IGZ1bmN0aW9uKGVycm9yKSB7XG5cdFx0Ly8gSW5qZWN0IGFuIGV4Y2VwdGlvbiBpbnRvIHRoZSBwZW5kaW5nIHlpZWxkIGV4cHJlc3Npb25cblx0XHRjb25zdCBfdGhpcyA9IHRoaXM7XG5cdFx0cmV0dXJuIF90aGlzLl9wcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuXHRcdFx0Y29uc3QgX3BhY3QgPSBfdGhpcy5fcGFjdDtcblx0XHRcdGlmIChfcGFjdCA9PT0gbnVsbCkge1xuXHRcdFx0XHRpZiAoX3RoaXMuX2VudHJ5ID09PSBudWxsKSB7XG5cdFx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIHN0YXJ0ZWQsIGJ1dCBub3QgYXdhaXRpbmcgYSB5aWVsZCBleHByZXNzaW9uXG5cdFx0XHRcdFx0Ly8gQWJhbmRvbiB0aGUgdGhyb3cgY2FsbCFcblx0XHRcdFx0XHRyZXR1cm4gcmVzb2x2ZShfdGhpcy5fcHJvbWlzZSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0Ly8gR2VuZXJhdG9yIGlzIG5vdCBzdGFydGVkLCBhYmFuZG9uIGl0IGFuZCByZXR1cm4gYSByZWplY3RlZCBQcm9taXNlIGNvbnRhaW5pbmcgdGhlIGVycm9yXG5cdFx0XHRcdF90aGlzLl9lbnRyeSA9IG51bGw7XG5cdFx0XHRcdHJldHVybiByZWplY3QoZXJyb3IpO1xuXHRcdFx0fVxuXHRcdFx0Ly8gU2V0dGxlIHRoZSB5aWVsZCBleHByZXNzaW9uIHdpdGggdGhlIHZhbHVlIGFzIGEgcmVqZWN0aW9uXG5cdFx0XHRfdGhpcy5fcmVzb2x2ZSA9IHJlc29sdmU7XG5cdFx0XHRfdGhpcy5fcGFjdCA9IG51bGw7XG5cdFx0XHRfc2V0dGxlKF9wYWN0LCAyLCBlcnJvcik7XG5cdFx0fSk7XG5cdH07XG5cblx0X0FzeW5jR2VuZXJhdG9yLnByb3RvdHlwZVtfYXN5bmNJdGVyYXRvclN5bWJvbF0gPSBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcztcblx0fTtcblx0XG5cdHJldHVybiBfQXN5bmNHZW5lcmF0b3I7XG59KSgpO1xuIiwiZXhwb3J0IGNvbnN0IEVSUl9DQU5OT1RfQ09OTkVDVCA9IDE7XG5leHBvcnQgY29uc3QgRVJSX0lOVkFMSURfQVVUSCA9IDI7XG5leHBvcnQgY29uc3QgRVJSX0NPTk5FQ1RJT05fTE9TVCA9IDM7XG5leHBvcnQgY29uc3QgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRCA9IDQ7XG5leHBvcnQgY29uc3QgRVJSX0lOVkFMSURfSFRUUFNfVE9fSFRUUCA9IDU7XG4iLCJpbXBvcnQgeyBFcnJvciB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhdXRoKGFjY2Vzc1Rva2VuOiBzdHJpbmcpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImF1dGhcIixcbiAgICBhY2Nlc3NfdG9rZW46IGFjY2Vzc1Rva2VuXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzdGF0ZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJnZXRfc3RhdGVzXCJcbiAgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNvbmZpZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImdldF9jb25maWdcIlxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gc2VydmljZXMoKSB7XG4gIHJldHVybiB7XG4gICAgdHlwZTogXCJnZXRfc2VydmljZXNcIlxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdXNlcigpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcImF1dGgvY3VycmVudF91c2VyXCJcbiAgfTtcbn1cblxudHlwZSBTZXJ2aWNlQ2FsbE1lc3NhZ2UgPSB7XG4gIHR5cGU6IFwiY2FsbF9zZXJ2aWNlXCI7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBzZXJ2aWNlOiBzdHJpbmc7XG4gIHNlcnZpY2VfZGF0YT86IG9iamVjdDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBjYWxsU2VydmljZShcbiAgZG9tYWluOiBzdHJpbmcsXG4gIHNlcnZpY2U6IHN0cmluZyxcbiAgc2VydmljZURhdGE/OiBvYmplY3Rcbikge1xuICBjb25zdCBtZXNzYWdlOiBTZXJ2aWNlQ2FsbE1lc3NhZ2UgPSB7XG4gICAgdHlwZTogXCJjYWxsX3NlcnZpY2VcIixcbiAgICBkb21haW4sXG4gICAgc2VydmljZVxuICB9O1xuXG4gIGlmIChzZXJ2aWNlRGF0YSkge1xuICAgIG1lc3NhZ2Uuc2VydmljZV9kYXRhID0gc2VydmljZURhdGE7XG4gIH1cblxuICByZXR1cm4gbWVzc2FnZTtcbn1cblxudHlwZSBTdWJzY3JpYmVFdmVudE1lc3NhZ2UgPSB7XG4gIHR5cGU6IFwic3Vic2NyaWJlX2V2ZW50c1wiO1xuICBldmVudF90eXBlPzogc3RyaW5nO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHN1YnNjcmliZUV2ZW50cyhldmVudFR5cGU/OiBzdHJpbmcpIHtcbiAgY29uc3QgbWVzc2FnZTogU3Vic2NyaWJlRXZlbnRNZXNzYWdlID0ge1xuICAgIHR5cGU6IFwic3Vic2NyaWJlX2V2ZW50c1wiXG4gIH07XG5cbiAgaWYgKGV2ZW50VHlwZSkge1xuICAgIG1lc3NhZ2UuZXZlbnRfdHlwZSA9IGV2ZW50VHlwZTtcbiAgfVxuXG4gIHJldHVybiBtZXNzYWdlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gdW5zdWJzY3JpYmVFdmVudHMoc3Vic2NyaXB0aW9uOiBudW1iZXIpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInVuc3Vic2NyaWJlX2V2ZW50c1wiLFxuICAgIHN1YnNjcmlwdGlvblxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcGluZygpIHtcbiAgcmV0dXJuIHtcbiAgICB0eXBlOiBcInBpbmdcIlxuICB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZXJyb3IoY29kZTogRXJyb3IsIG1lc3NhZ2U6IHN0cmluZykge1xuICByZXR1cm4ge1xuICAgIHR5cGU6IFwicmVzdWx0XCIsXG4gICAgc3VjY2VzczogZmFsc2UsXG4gICAgZXJyb3I6IHtcbiAgICAgIGNvZGUsXG4gICAgICBtZXNzYWdlXG4gICAgfVxuICB9O1xufVxuIiwiLyoqXG4gKiBDcmVhdGUgYSB3ZWIgc29ja2V0IGNvbm5lY3Rpb24gd2l0aCBhIEhvbWUgQXNzaXN0YW50IGluc3RhbmNlLlxuICovXG5pbXBvcnQge1xuICBFUlJfSU5WQUxJRF9BVVRILFxuICBFUlJfQ0FOTk9UX0NPTk5FQ1QsXG4gIEVSUl9IQVNTX0hPU1RfUkVRVUlSRURcbn0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uT3B0aW9ucywgRXJyb3IgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0ICogYXMgbWVzc2FnZXMgZnJvbSBcIi4vbWVzc2FnZXNcIjtcblxuY29uc3QgREVCVUcgPSBmYWxzZTtcblxuY29uc3QgTVNHX1RZUEVfQVVUSF9SRVFVSVJFRCA9IFwiYXV0aF9yZXF1aXJlZFwiO1xuY29uc3QgTVNHX1RZUEVfQVVUSF9JTlZBTElEID0gXCJhdXRoX2ludmFsaWRcIjtcbmNvbnN0IE1TR19UWVBFX0FVVEhfT0sgPSBcImF1dGhfb2tcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVNvY2tldChvcHRpb25zOiBDb25uZWN0aW9uT3B0aW9ucyk6IFByb21pc2U8V2ViU29ja2V0PiB7XG4gIGlmICghb3B0aW9ucy5hdXRoKSB7XG4gICAgdGhyb3cgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRDtcbiAgfVxuICBjb25zdCBhdXRoID0gb3B0aW9ucy5hdXRoO1xuXG4gIC8vIFN0YXJ0IHJlZnJlc2hpbmcgZXhwaXJlZCB0b2tlbnMgZXZlbiBiZWZvcmUgdGhlIFdTIGNvbm5lY3Rpb24gaXMgb3Blbi5cbiAgLy8gV2Uga25vdyB0aGF0IHdlIHdpbGwgbmVlZCBhdXRoIGFueXdheS5cbiAgbGV0IGF1dGhSZWZyZXNoVGFzayA9IGF1dGguZXhwaXJlZFxuICAgID8gYXV0aC5yZWZyZXNoQWNjZXNzVG9rZW4oKS50aGVuKFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYXV0aFJlZnJlc2hUYXNrID0gdW5kZWZpbmVkO1xuICAgICAgICB9LFxuICAgICAgICAoKSA9PiB7XG4gICAgICAgICAgYXV0aFJlZnJlc2hUYXNrID0gdW5kZWZpbmVkO1xuICAgICAgICB9XG4gICAgICApXG4gICAgOiB1bmRlZmluZWQ7XG5cbiAgLy8gQ29udmVydCBmcm9tIGh0dHA6Ly8gLT4gd3M6Ly8sIGh0dHBzOi8vIC0+IHdzczovL1xuICBjb25zdCB1cmwgPSBhdXRoLndzVXJsO1xuXG4gIGlmIChERUJVRykge1xuICAgIGNvbnNvbGUubG9nKFwiW0F1dGggcGhhc2VdIEluaXRpYWxpemluZ1wiLCB1cmwpO1xuICB9XG5cbiAgZnVuY3Rpb24gY29ubmVjdChcbiAgICB0cmllc0xlZnQ6IG51bWJlcixcbiAgICBwcm9tUmVzb2x2ZTogKHNvY2tldDogV2ViU29ja2V0KSA9PiB2b2lkLFxuICAgIHByb21SZWplY3Q6IChlcnI6IEVycm9yKSA9PiB2b2lkXG4gICkge1xuICAgIGlmIChERUJVRykge1xuICAgICAgY29uc29sZS5sb2coXCJbQXV0aCBQaGFzZV0gTmV3IGNvbm5lY3Rpb25cIiwgdXJsKTtcbiAgICB9XG5cbiAgICBjb25zdCBzb2NrZXQgPSBuZXcgV2ViU29ja2V0KHVybCk7XG5cbiAgICAvLyBJZiBpbnZhbGlkIGF1dGgsIHdlIHdpbGwgbm90IHRyeSB0byByZWNvbm5lY3QuXG4gICAgbGV0IGludmFsaWRBdXRoID0gZmFsc2U7XG5cbiAgICBjb25zdCBjbG9zZU1lc3NhZ2UgPSAoKSA9PiB7XG4gICAgICAvLyBJZiB3ZSBhcmUgaW4gZXJyb3IgaGFuZGxlciBtYWtlIHN1cmUgY2xvc2UgaGFuZGxlciBkb2Vzbid0IGFsc28gZmlyZS5cbiAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICAgIGlmIChpbnZhbGlkQXV0aCkge1xuICAgICAgICBwcm9tUmVqZWN0KEVSUl9JTlZBTElEX0FVVEgpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIFJlamVjdCBpZiB3ZSBubyBsb25nZXIgaGF2ZSB0byByZXRyeVxuICAgICAgaWYgKHRyaWVzTGVmdCA9PT0gMCkge1xuICAgICAgICAvLyBXZSBuZXZlciB3ZXJlIGNvbm5lY3RlZCBhbmQgd2lsbCBub3QgcmV0cnlcbiAgICAgICAgcHJvbVJlamVjdChFUlJfQ0FOTk9UX0NPTk5FQ1QpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG5ld1RyaWVzID0gdHJpZXNMZWZ0ID09PSAtMSA/IC0xIDogdHJpZXNMZWZ0IC0gMTtcbiAgICAgIC8vIFRyeSBhZ2FpbiBpbiBhIHNlY29uZFxuICAgICAgc2V0VGltZW91dChcbiAgICAgICAgKCkgPT5cbiAgICAgICAgICBjb25uZWN0KFxuICAgICAgICAgICAgbmV3VHJpZXMsXG4gICAgICAgICAgICBwcm9tUmVzb2x2ZSxcbiAgICAgICAgICAgIHByb21SZWplY3RcbiAgICAgICAgICApLFxuICAgICAgICAxMDAwXG4gICAgICApO1xuICAgIH07XG5cbiAgICAvLyBBdXRoIGlzIG1hbmRhdG9yeSwgc28gd2UgY2FuIHNlbmQgdGhlIGF1dGggbWVzc2FnZSByaWdodCBhd2F5LlxuICAgIGNvbnN0IGhhbmRsZU9wZW4gPSBhc3luYyAoZXZlbnQ6IE1lc3NhZ2VFdmVudEluaXQpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChhdXRoLmV4cGlyZWQpIHtcbiAgICAgICAgICBhd2FpdCAoYXV0aFJlZnJlc2hUYXNrID8gYXV0aFJlZnJlc2hUYXNrIDogYXV0aC5yZWZyZXNoQWNjZXNzVG9rZW4oKSk7XG4gICAgICAgIH1cbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZXMuYXV0aChhdXRoLmFjY2Vzc1Rva2VuKSkpO1xuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIC8vIFJlZnJlc2ggdG9rZW4gZmFpbGVkXG4gICAgICAgIGludmFsaWRBdXRoID0gZXJyID09PSBFUlJfSU5WQUxJRF9BVVRIO1xuICAgICAgICBzb2NrZXQuY2xvc2UoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgY29uc3QgaGFuZGxlTWVzc2FnZSA9IGFzeW5jIChldmVudDogTWVzc2FnZUV2ZW50KSA9PiB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcblxuICAgICAgaWYgKERFQlVHKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiW0F1dGggcGhhc2VdIFJlY2VpdmVkXCIsIG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgICAgY2FzZSBNU0dfVFlQRV9BVVRIX0lOVkFMSUQ6XG4gICAgICAgICAgaW52YWxpZEF1dGggPSB0cnVlO1xuICAgICAgICAgIHNvY2tldC5jbG9zZSgpO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgTVNHX1RZUEVfQVVUSF9PSzpcbiAgICAgICAgICBzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgaGFuZGxlT3Blbik7XG4gICAgICAgICAgc29ja2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZU1lc3NhZ2UpO1xuICAgICAgICAgIHNvY2tldC5yZW1vdmVFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICAgICAgICBzb2NrZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGNsb3NlTWVzc2FnZSk7XG4gICAgICAgICAgcHJvbVJlc29sdmUoc29ja2V0KTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgICAgLy8gV2UgYWxyZWFkeSBzZW5kIHRoaXMgbWVzc2FnZSB3aGVuIHNvY2tldCBvcGVuc1xuICAgICAgICAgICAgaWYgKG1lc3NhZ2UudHlwZSAhPT0gTVNHX1RZUEVfQVVUSF9SRVFVSVJFRCkge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJbQXV0aCBwaGFzZV0gVW5oYW5kbGVkIG1lc3NhZ2VcIiwgbWVzc2FnZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgIH07XG5cbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm9wZW5cIiwgaGFuZGxlT3Blbik7XG4gICAgc29ja2V0LmFkZEV2ZW50TGlzdGVuZXIoXCJtZXNzYWdlXCIsIGhhbmRsZU1lc3NhZ2UpO1xuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgY2xvc2VNZXNzYWdlKTtcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGNsb3NlTWVzc2FnZSk7XG4gIH1cblxuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT5cbiAgICBjb25uZWN0KFxuICAgICAgb3B0aW9ucy5zZXR1cFJldHJ5LFxuICAgICAgcmVzb2x2ZSxcbiAgICAgIHJlamVjdFxuICAgIClcbiAgKTtcbn1cbiIsIi8qKlxuICogQ29ubmVjdGlvbiB0aGF0IHdyYXBzIGEgc29ja2V0IGFuZCBwcm92aWRlcyBhbiBpbnRlcmZhY2UgdG8gaW50ZXJhY3Qgd2l0aFxuICogdGhlIEhvbWUgQXNzaXN0YW50IHdlYnNvY2tldCBBUEkuXG4gKi9cbmltcG9ydCAqIGFzIG1lc3NhZ2VzIGZyb20gXCIuL21lc3NhZ2VzXCI7XG5pbXBvcnQgeyBFUlJfSU5WQUxJRF9BVVRILCBFUlJfQ09OTkVDVElPTl9MT1NUIH0gZnJvbSBcIi4vZXJyb3JzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uT3B0aW9ucywgSGFzc0V2ZW50LCBNZXNzYWdlQmFzZSB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmNvbnN0IERFQlVHID0gZmFsc2U7XG5cbmV4cG9ydCB0eXBlIENvbm5lY3Rpb25FdmVudExpc3RlbmVyID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBldmVudERhdGE/OiBhbnlcbikgPT4gdm9pZDtcblxudHlwZSBFdmVudHMgPSBcInJlYWR5XCIgfCBcImRpc2Nvbm5lY3RlZFwiIHwgXCJyZWNvbm5lY3QtZXJyb3JcIjtcblxudHlwZSBXZWJTb2NrZXRQb25nUmVzcG9uc2UgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHR5cGU6IFwicG9uZ1wiO1xufTtcblxudHlwZSBXZWJTb2NrZXRFdmVudFJlc3BvbnNlID0ge1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBcImV2ZW50XCI7XG4gIGV2ZW50OiBIYXNzRXZlbnQ7XG59O1xuXG50eXBlIFdlYlNvY2tldFJlc3VsdFJlc3BvbnNlID0ge1xuICBpZDogbnVtYmVyO1xuICB0eXBlOiBcInJlc3VsdFwiO1xuICBzdWNjZXNzOiB0cnVlO1xuICByZXN1bHQ6IGFueTtcbn07XG5cbnR5cGUgV2ViU29ja2V0UmVzdWx0RXJyb3JSZXNwb25zZSA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdHlwZTogXCJyZXN1bHRcIjtcbiAgc3VjY2VzczogZmFsc2U7XG4gIGVycm9yOiB7XG4gICAgY29kZTogc3RyaW5nO1xuICAgIG1lc3NhZ2U6IHN0cmluZztcbiAgfTtcbn07XG5cbnR5cGUgV2ViU29ja2V0UmVzcG9uc2UgPVxuICB8IFdlYlNvY2tldFBvbmdSZXNwb25zZVxuICB8IFdlYlNvY2tldEV2ZW50UmVzcG9uc2VcbiAgfCBXZWJTb2NrZXRSZXN1bHRSZXNwb25zZVxuICB8IFdlYlNvY2tldFJlc3VsdEVycm9yUmVzcG9uc2U7XG5cbnR5cGUgU3Vic2NyaXB0aW9uVW5zdWJzY3JpYmUgPSAoKSA9PiBQcm9taXNlPHZvaWQ+O1xuXG5pbnRlcmZhY2UgU3Vic2NyaWJlRXZlbnRDb21tbWFuZEluRmxpZ2h0PFQ+IHtcbiAgcmVzb2x2ZTogKHJlc3VsdD86IGFueSkgPT4gdm9pZDtcbiAgcmVqZWN0OiAoZXJyOiBhbnkpID0+IHZvaWQ7XG4gIGNhbGxiYWNrOiAoZXY6IFQpID0+IHZvaWQ7XG4gIHN1YnNjcmliZTogKCkgPT4gUHJvbWlzZTxTdWJzY3JpcHRpb25VbnN1YnNjcmliZT47XG4gIHVuc3Vic2NyaWJlOiBTdWJzY3JpcHRpb25VbnN1YnNjcmliZTtcbn1cblxudHlwZSBDb21tYW5kV2l0aEFuc3dlckluRmxpZ2h0ID0ge1xuICByZXNvbHZlOiAocmVzdWx0PzogYW55KSA9PiB2b2lkO1xuICByZWplY3Q6IChlcnI6IGFueSkgPT4gdm9pZDtcbn07XG5cbnR5cGUgQ29tbWFuZEluRmxpZ2h0ID1cbiAgfCBTdWJzY3JpYmVFdmVudENvbW1tYW5kSW5GbGlnaHQ8YW55PlxuICB8IENvbW1hbmRXaXRoQW5zd2VySW5GbGlnaHQ7XG5cbmV4cG9ydCBjbGFzcyBDb25uZWN0aW9uIHtcbiAgb3B0aW9uczogQ29ubmVjdGlvbk9wdGlvbnM7XG4gIGNvbW1hbmRJZDogbnVtYmVyO1xuICBjb21tYW5kczogTWFwPG51bWJlciwgQ29tbWFuZEluRmxpZ2h0PjtcbiAgZXZlbnRMaXN0ZW5lcnM6IE1hcDxzdHJpbmcsIENvbm5lY3Rpb25FdmVudExpc3RlbmVyW10+O1xuICBjbG9zZVJlcXVlc3RlZDogYm9vbGVhbjtcbiAgLy8gQHRzLWlnbm9yZTogaW5jb3JyZWN0bHkgY2xhaW1pbmcgaXQncyBub3Qgc2V0IGluIGNvbnN0cnVjdG9yLlxuICBzb2NrZXQ6IFdlYlNvY2tldDtcblxuICBjb25zdHJ1Y3Rvcihzb2NrZXQ6IFdlYlNvY2tldCwgb3B0aW9uczogQ29ubmVjdGlvbk9wdGlvbnMpIHtcbiAgICAvLyBjb25uZWN0aW9uIG9wdGlvbnNcbiAgICAvLyAgLSBzZXR1cFJldHJ5OiBhbW91bnQgb2YgbXMgdG8gcmV0cnkgd2hlbiB1bmFibGUgdG8gY29ubmVjdCBvbiBpbml0aWFsIHNldHVwXG4gICAgLy8gIC0gY3JlYXRlU29ja2V0OiBjcmVhdGUgYSBuZXcgU29ja2V0IGNvbm5lY3Rpb25cbiAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgIC8vIGlkIGlmIG5leHQgY29tbWFuZCB0byBzZW5kXG4gICAgdGhpcy5jb21tYW5kSWQgPSAxO1xuICAgIC8vIGluZm8gYWJvdXQgYWN0aXZlIHN1YnNjcmlwdGlvbnMgYW5kIGNvbW1hbmRzIGluIGZsaWdodFxuICAgIHRoaXMuY29tbWFuZHMgPSBuZXcgTWFwKCk7XG4gICAgLy8gbWFwIG9mIGV2ZW50IGxpc3RlbmVyc1xuICAgIHRoaXMuZXZlbnRMaXN0ZW5lcnMgPSBuZXcgTWFwKCk7XG4gICAgLy8gdHJ1ZSBpZiBhIGNsb3NlIGlzIHJlcXVlc3RlZCBieSB0aGUgdXNlclxuICAgIHRoaXMuY2xvc2VSZXF1ZXN0ZWQgPSBmYWxzZTtcblxuICAgIHRoaXMuc2V0U29ja2V0KHNvY2tldCk7XG4gIH1cblxuICBzZXRTb2NrZXQoc29ja2V0OiBXZWJTb2NrZXQpIHtcbiAgICBjb25zdCBvbGRTb2NrZXQgPSB0aGlzLnNvY2tldDtcbiAgICB0aGlzLnNvY2tldCA9IHNvY2tldDtcbiAgICBzb2NrZXQuYWRkRXZlbnRMaXN0ZW5lcihcIm1lc3NhZ2VcIiwgZXYgPT4gdGhpcy5faGFuZGxlTWVzc2FnZShldikpO1xuICAgIHNvY2tldC5hZGRFdmVudExpc3RlbmVyKFwiY2xvc2VcIiwgZXYgPT4gdGhpcy5faGFuZGxlQ2xvc2UoZXYpKTtcblxuICAgIGlmIChvbGRTb2NrZXQpIHtcbiAgICAgIGNvbnN0IG9sZENvbW1hbmRzID0gdGhpcy5jb21tYW5kcztcblxuICAgICAgLy8gcmVzZXQgdG8gb3JpZ2luYWwgc3RhdGVcbiAgICAgIHRoaXMuY29tbWFuZElkID0gMTtcbiAgICAgIHRoaXMuY29tbWFuZHMgPSBuZXcgTWFwKCk7XG5cbiAgICAgIG9sZENvbW1hbmRzLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICAgIGlmIChcInN1YnNjcmliZVwiIGluIGluZm8pIHtcbiAgICAgICAgICBpbmZvLnN1YnNjcmliZSgpLnRoZW4odW5zdWIgPT4ge1xuICAgICAgICAgICAgaW5mby51bnN1YnNjcmliZSA9IHVuc3ViO1xuICAgICAgICAgICAgLy8gV2UgbmVlZCB0byByZXNvbHZlIHRoaXMgaW4gY2FzZSBpdCB3YXNuJ3QgcmVzb2x2ZWQgeWV0LlxuICAgICAgICAgICAgLy8gVGhpcyBhbGxvd3MgdXMgdG8gc3Vic2NyaWJlIHdoaWxlIHdlJ3JlIGRpc2Nvbm5lY3RlZFxuICAgICAgICAgICAgLy8gYW5kIHJlY292ZXIgcHJvcGVybHkuXG4gICAgICAgICAgICBpbmZvLnJlc29sdmUoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHRoaXMuZmlyZUV2ZW50KFwicmVhZHlcIik7XG4gICAgfVxuICB9XG5cbiAgYWRkRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IEV2ZW50cywgY2FsbGJhY2s6IENvbm5lY3Rpb25FdmVudExpc3RlbmVyKSB7XG4gICAgbGV0IGxpc3RlbmVycyA9IHRoaXMuZXZlbnRMaXN0ZW5lcnMuZ2V0KGV2ZW50VHlwZSk7XG5cbiAgICBpZiAoIWxpc3RlbmVycykge1xuICAgICAgbGlzdGVuZXJzID0gW107XG4gICAgICB0aGlzLmV2ZW50TGlzdGVuZXJzLnNldChldmVudFR5cGUsIGxpc3RlbmVycyk7XG4gICAgfVxuXG4gICAgbGlzdGVuZXJzLnB1c2goY2FsbGJhY2spO1xuICB9XG5cbiAgcmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudFR5cGU6IEV2ZW50cywgY2FsbGJhY2s6IENvbm5lY3Rpb25FdmVudExpc3RlbmVyKSB7XG4gICAgY29uc3QgbGlzdGVuZXJzID0gdGhpcy5ldmVudExpc3RlbmVycy5nZXQoZXZlbnRUeXBlKTtcblxuICAgIGlmICghbGlzdGVuZXJzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5kZXggPSBsaXN0ZW5lcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBsaXN0ZW5lcnMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICB9XG4gIH1cblxuICBmaXJlRXZlbnQoZXZlbnRUeXBlOiBFdmVudHMsIGV2ZW50RGF0YT86IGFueSkge1xuICAgICh0aGlzLmV2ZW50TGlzdGVuZXJzLmdldChldmVudFR5cGUpIHx8IFtdKS5mb3JFYWNoKGNhbGxiYWNrID0+XG4gICAgICBjYWxsYmFjayh0aGlzLCBldmVudERhdGEpXG4gICAgKTtcbiAgfVxuXG4gIGNsb3NlKCkge1xuICAgIHRoaXMuY2xvc2VSZXF1ZXN0ZWQgPSB0cnVlO1xuICAgIHRoaXMuc29ja2V0LmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogU3Vic2NyaWJlIHRvIGEgc3BlY2lmaWMgb3IgYWxsIGV2ZW50cy5cbiAgICpcbiAgICogQHBhcmFtIGNhbGxiYWNrIENhbGxiYWNrICB0byBiZSBjYWxsZWQgd2hlbiBhIG5ldyBldmVudCBmaXJlc1xuICAgKiBAcGFyYW0gZXZlbnRUeXBlXG4gICAqIEByZXR1cm5zIHByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhbiB1bnN1YnNjcmliZSBmdW5jdGlvblxuICAgKi9cbiAgYXN5bmMgc3Vic2NyaWJlRXZlbnRzPEV2ZW50VHlwZT4oXG4gICAgY2FsbGJhY2s6IChldjogRXZlbnRUeXBlKSA9PiB2b2lkLFxuICAgIGV2ZW50VHlwZT86IHN0cmluZ1xuICApOiBQcm9taXNlPFN1YnNjcmlwdGlvblVuc3Vic2NyaWJlPiB7XG4gICAgcmV0dXJuIHRoaXMuc3Vic2NyaWJlTWVzc2FnZShjYWxsYmFjaywgbWVzc2FnZXMuc3Vic2NyaWJlRXZlbnRzKGV2ZW50VHlwZSkpO1xuICB9XG5cbiAgcGluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zZW5kTWVzc2FnZVByb21pc2UobWVzc2FnZXMucGluZygpKTtcbiAgfVxuXG4gIHNlbmRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2VCYXNlLCBjb21tYW5kSWQ/OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAoREVCVUcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU2VuZGluZ1wiLCBtZXNzYWdlKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbW1hbmRJZCkge1xuICAgICAgY29tbWFuZElkID0gdGhpcy5fZ2VuQ21kSWQoKTtcbiAgICB9XG4gICAgbWVzc2FnZS5pZCA9IGNvbW1hbmRJZDtcblxuICAgIHRoaXMuc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkobWVzc2FnZSkpO1xuICB9XG5cbiAgc2VuZE1lc3NhZ2VQcm9taXNlPFJlc3VsdD4obWVzc2FnZTogTWVzc2FnZUJhc2UpOiBQcm9taXNlPFJlc3VsdD4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBjb25zdCBjb21tYW5kSWQgPSB0aGlzLl9nZW5DbWRJZCgpO1xuICAgICAgdGhpcy5jb21tYW5kcy5zZXQoY29tbWFuZElkLCB7IHJlc29sdmUsIHJlamVjdCB9KTtcbiAgICAgIHRoaXMuc2VuZE1lc3NhZ2UobWVzc2FnZSwgY29tbWFuZElkKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDYWxsIGEgd2Vic29ja2V0IGNvbW1hbmQgdGhhdCBzdGFydHMgYSBzdWJzY3JpcHRpb24gb24gdGhlIGJhY2tlbmQuXG4gICAqXG4gICAqIEBwYXJhbSBtZXNzYWdlIHRoZSBtZXNzYWdlIHRvIHN0YXJ0IHRoZSBzdWJzY3JpcHRpb25cbiAgICogQHBhcmFtIGNhbGxiYWNrIHRoZSBjYWxsYmFjayB0byBiZSBjYWxsZWQgd2hlbiBhIG5ldyBpdGVtIGFycml2ZXNcbiAgICogQHJldHVybnMgcHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGFuIHVuc3Vic2NyaWJlIGZ1bmN0aW9uXG4gICAqL1xuICBhc3luYyBzdWJzY3JpYmVNZXNzYWdlPFJlc3VsdD4oXG4gICAgY2FsbGJhY2s6IChyZXN1bHQ6IFJlc3VsdCkgPT4gdm9pZCxcbiAgICBzdWJzY3JpYmVNZXNzYWdlOiBNZXNzYWdlQmFzZVxuICApOiBQcm9taXNlPFN1YnNjcmlwdGlvblVuc3Vic2NyaWJlPiB7XG4gICAgLy8gQ29tbWFuZCBJRCB0aGF0IHdpbGwgYmUgdXNlZFxuICAgIGNvbnN0IGNvbW1hbmRJZCA9IHRoaXMuX2dlbkNtZElkKCk7XG4gICAgbGV0IGluZm86IFN1YnNjcmliZUV2ZW50Q29tbW1hbmRJbkZsaWdodDxSZXN1bHQ+O1xuXG4gICAgYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgLy8gV2Ugc3RvcmUgdW5zdWJzY3JpYmUgb24gaW5mbyBvYmplY3QuIFRoYXQgd2F5IHdlIGNhbiBvdmVyd3JpdGUgaXQgaW4gY2FzZVxuICAgICAgLy8gd2UgZ2V0IGRpc2Nvbm5lY3RlZCBhbmQgd2UgaGF2ZSB0byBzdWJzY3JpYmUgYWdhaW4uXG4gICAgICBpbmZvID0ge1xuICAgICAgICByZXNvbHZlLFxuICAgICAgICByZWplY3QsXG4gICAgICAgIGNhbGxiYWNrLFxuICAgICAgICBzdWJzY3JpYmU6ICgpID0+IHRoaXMuc3Vic2NyaWJlTWVzc2FnZShjYWxsYmFjaywgc3Vic2NyaWJlTWVzc2FnZSksXG4gICAgICAgIHVuc3Vic2NyaWJlOiBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgdGhpcy5zZW5kTWVzc2FnZVByb21pc2UobWVzc2FnZXMudW5zdWJzY3JpYmVFdmVudHMoY29tbWFuZElkKSk7XG4gICAgICAgICAgdGhpcy5jb21tYW5kcy5kZWxldGUoY29tbWFuZElkKTtcbiAgICAgICAgfVxuICAgICAgfTtcbiAgICAgIHRoaXMuY29tbWFuZHMuc2V0KGNvbW1hbmRJZCwgaW5mbyk7XG5cbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc2VuZE1lc3NhZ2Uoc3Vic2NyaWJlTWVzc2FnZSwgY29tbWFuZElkKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAvLyBIYXBwZW5zIHdoZW4gdGhlIHdlYnNvY2tldCBpcyBhbHJlYWR5IGNsb3NpbmcuXG4gICAgICAgIC8vIERvbid0IGhhdmUgdG8gaGFuZGxlIHRoZSBlcnJvciwgcmVjb25uZWN0IGxvZ2ljIHdpbGwgcGljayBpdCB1cC5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHJldHVybiAoKSA9PiBpbmZvLnVuc3Vic2NyaWJlKCk7XG4gIH1cblxuICBwcml2YXRlIF9oYW5kbGVNZXNzYWdlKGV2ZW50OiBNZXNzYWdlRXZlbnQpIHtcbiAgICBjb25zdCBtZXNzYWdlOiBXZWJTb2NrZXRSZXNwb25zZSA9IEpTT04ucGFyc2UoZXZlbnQuZGF0YSk7XG5cbiAgICBpZiAoREVCVUcpIHtcbiAgICAgIGNvbnNvbGUubG9nKFwiUmVjZWl2ZWRcIiwgbWVzc2FnZSk7XG4gICAgfVxuXG4gICAgY29uc3QgaW5mbyA9IHRoaXMuY29tbWFuZHMuZ2V0KG1lc3NhZ2UuaWQpO1xuXG4gICAgc3dpdGNoIChtZXNzYWdlLnR5cGUpIHtcbiAgICAgIGNhc2UgXCJldmVudFwiOlxuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIChpbmZvIGFzIFN1YnNjcmliZUV2ZW50Q29tbW1hbmRJbkZsaWdodDxhbnk+KS5jYWxsYmFjayhtZXNzYWdlLmV2ZW50KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgUmVjZWl2ZWQgZXZlbnQgZm9yIHVua25vd24gc3Vic2NyaXB0aW9uICR7XG4gICAgICAgICAgICAgIG1lc3NhZ2UuaWRcbiAgICAgICAgICAgIH0uIFVuc3Vic2NyaWJpbmcuYFxuICAgICAgICAgICk7XG4gICAgICAgICAgdGhpcy5zZW5kTWVzc2FnZVByb21pc2UobWVzc2FnZXMudW5zdWJzY3JpYmVFdmVudHMobWVzc2FnZS5pZCkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFwicmVzdWx0XCI6XG4gICAgICAgIC8vIE5vIGluZm8gaXMgZmluZS4gSWYganVzdCBzZW5kTWVzc2FnZSBpcyB1c2VkLCB3ZSBkaWQgbm90IHN0b3JlIHByb21pc2UgZm9yIHJlc3VsdFxuICAgICAgICBpZiAoaW5mbykge1xuICAgICAgICAgIGlmIChtZXNzYWdlLnN1Y2Nlc3MpIHtcbiAgICAgICAgICAgIGluZm8ucmVzb2x2ZShtZXNzYWdlLnJlc3VsdCk7XG5cbiAgICAgICAgICAgIC8vIERvbid0IHJlbW92ZSBzdWJzY3JpcHRpb25zLlxuICAgICAgICAgICAgaWYgKCEoXCJzdWJzY3JpYmVcIiBpbiBpbmZvKSkge1xuICAgICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShtZXNzYWdlLmlkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaW5mby5yZWplY3QobWVzc2FnZS5lcnJvcik7XG4gICAgICAgICAgICB0aGlzLmNvbW1hbmRzLmRlbGV0ZShtZXNzYWdlLmlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgXCJwb25nXCI6XG4gICAgICAgIGlmIChpbmZvKSB7XG4gICAgICAgICAgaW5mby5yZXNvbHZlKCk7XG4gICAgICAgICAgdGhpcy5jb21tYW5kcy5kZWxldGUobWVzc2FnZS5pZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS53YXJuKGBSZWNlaXZlZCB1bmtub3duIHBvbmcgcmVzcG9uc2UgJHttZXNzYWdlLmlkfWApO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBkZWZhdWx0OlxuICAgICAgICBpZiAoREVCVUcpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJVbmhhbmRsZWQgbWVzc2FnZVwiLCBtZXNzYWdlKTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNsb3NlKGV2OiBDbG9zZUV2ZW50KSB7XG4gICAgLy8gUmVqZWN0IGluLWZsaWdodCBzZW5kTWVzc2FnZVByb21pc2UgcmVxdWVzdHNcbiAgICB0aGlzLmNvbW1hbmRzLmZvckVhY2goaW5mbyA9PiB7XG4gICAgICAvLyBXZSBkb24ndCBjYW5jZWwgc3Vic2NyaWJlRXZlbnRzIGNvbW1hbmRzIGluIGZsaWdodFxuICAgICAgLy8gYXMgd2Ugd2lsbCBiZSBhYmxlIHRvIHJlY292ZXIgdGhlbS5cbiAgICAgIGlmICghKFwic3Vic2NyaWJlXCIgaW4gaW5mbykpIHtcbiAgICAgICAgaW5mby5yZWplY3QobWVzc2FnZXMuZXJyb3IoRVJSX0NPTk5FQ1RJT05fTE9TVCwgXCJDb25uZWN0aW9uIGxvc3RcIikpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuY2xvc2VSZXF1ZXN0ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZpcmVFdmVudChcImRpc2Nvbm5lY3RlZFwiKTtcblxuICAgIC8vIERpc2FibGUgc2V0dXBSZXRyeSwgd2UgY29udHJvbCBpdCBoZXJlIHdpdGggYXV0by1iYWNrb2ZmXG4gICAgY29uc3Qgb3B0aW9ucyA9IHsgLi4udGhpcy5vcHRpb25zLCBzZXR1cFJldHJ5OiAwIH07XG5cbiAgICBjb25zdCByZWNvbm5lY3QgPSAodHJpZXM6IG51bWJlcikgPT4ge1xuICAgICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmIChERUJVRykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiVHJ5aW5nIHRvIHJlY29ubmVjdFwiKTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgIGNvbnN0IHNvY2tldCA9IGF3YWl0IG9wdGlvbnMuY3JlYXRlU29ja2V0KG9wdGlvbnMpO1xuICAgICAgICAgIHRoaXMuc2V0U29ja2V0KHNvY2tldCk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGlmIChlcnIgPT09IEVSUl9JTlZBTElEX0FVVEgpIHtcbiAgICAgICAgICAgIHRoaXMuZmlyZUV2ZW50KFwicmVjb25uZWN0LWVycm9yXCIsIGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlY29ubmVjdCh0cmllcyArIDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSwgTWF0aC5taW4odHJpZXMsIDUpICogMTAwMCk7XG4gICAgfTtcblxuICAgIHJlY29ubmVjdCgwKTtcbiAgfVxuXG4gIHByaXZhdGUgX2dlbkNtZElkKCkge1xuICAgIHJldHVybiArK3RoaXMuY29tbWFuZElkO1xuICB9XG59XG4iLCJpbXBvcnQgeyBwYXJzZVF1ZXJ5IH0gZnJvbSBcIi4vdXRpbFwiO1xuaW1wb3J0IHtcbiAgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRCxcbiAgRVJSX0lOVkFMSURfQVVUSCxcbiAgRVJSX0lOVkFMSURfSFRUUFNfVE9fSFRUUFxufSBmcm9tIFwiLi9lcnJvcnNcIjtcblxuZXhwb3J0IHR5cGUgQXV0aERhdGEgPSB7XG4gIGhhc3NVcmw6IHN0cmluZztcbiAgY2xpZW50SWQ6IHN0cmluZyB8IG51bGw7XG4gIGV4cGlyZXM6IG51bWJlcjtcbiAgcmVmcmVzaF90b2tlbjogc3RyaW5nO1xuICBhY2Nlc3NfdG9rZW46IHN0cmluZztcbiAgZXhwaXJlc19pbjogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgU2F2ZVRva2Vuc0Z1bmMgPSAoZGF0YTogQXV0aERhdGEgfCBudWxsKSA9PiB2b2lkO1xuZXhwb3J0IHR5cGUgTG9hZFRva2Vuc0Z1bmMgPSAoKSA9PiBQcm9taXNlPEF1dGhEYXRhIHwgbnVsbCB8IHVuZGVmaW5lZD47XG5cbmV4cG9ydCB0eXBlIGdldEF1dGhPcHRpb25zID0ge1xuICBoYXNzVXJsPzogc3RyaW5nO1xuICBjbGllbnRJZD86IHN0cmluZyB8IG51bGw7XG4gIHJlZGlyZWN0VXJsPzogc3RyaW5nO1xuICBhdXRoQ29kZT86IHN0cmluZztcbiAgc2F2ZVRva2Vucz86IFNhdmVUb2tlbnNGdW5jO1xuICBsb2FkVG9rZW5zPzogTG9hZFRva2Vuc0Z1bmM7XG59O1xuXG50eXBlIFF1ZXJ5Q2FsbGJhY2tEYXRhID1cbiAgfCB7fVxuICB8IHtcbiAgICAgIHN0YXRlOiBzdHJpbmc7XG4gICAgICBjb2RlOiBzdHJpbmc7XG4gICAgICBhdXRoX2NhbGxiYWNrOiBzdHJpbmc7XG4gICAgfTtcblxudHlwZSBPQXV0aFN0YXRlID0ge1xuICBoYXNzVXJsOiBzdHJpbmc7XG4gIGNsaWVudElkOiBzdHJpbmcgfCBudWxsO1xufTtcblxudHlwZSBBdXRob3JpemF0aW9uQ29kZVJlcXVlc3QgPSB7XG4gIGdyYW50X3R5cGU6IFwiYXV0aG9yaXphdGlvbl9jb2RlXCI7XG4gIGNvZGU6IHN0cmluZztcbn07XG5cbnR5cGUgUmVmcmVzaFRva2VuUmVxdWVzdCA9IHtcbiAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCI7XG4gIHJlZnJlc2hfdG9rZW46IHN0cmluZztcbn07XG5cbmV4cG9ydCBjb25zdCBnZW5DbGllbnRJZCA9ICgpOiBzdHJpbmcgPT5cbiAgYCR7bG9jYXRpb24ucHJvdG9jb2x9Ly8ke2xvY2F0aW9uLmhvc3R9L2A7XG5cbmV4cG9ydCBjb25zdCBnZW5FeHBpcmVzID0gKGV4cGlyZXNfaW46IG51bWJlcik6IG51bWJlciA9PiB7XG4gIHJldHVybiBleHBpcmVzX2luICogMTAwMCArIERhdGUubm93KCk7XG59O1xuXG5mdW5jdGlvbiBnZW5SZWRpcmVjdFVybCgpIHtcbiAgLy8gR2V0IGN1cnJlbnQgdXJsIGJ1dCB3aXRob3V0ICMgcGFydC5cbiAgY29uc3QgeyBwcm90b2NvbCwgaG9zdCwgcGF0aG5hbWUsIHNlYXJjaCB9ID0gbG9jYXRpb247XG4gIHJldHVybiBgJHtwcm90b2NvbH0vLyR7aG9zdH0ke3BhdGhuYW1lfSR7c2VhcmNofWA7XG59XG5cbmZ1bmN0aW9uIGdlbkF1dGhvcml6ZVVybChcbiAgaGFzc1VybDogc3RyaW5nLFxuICBjbGllbnRJZDogc3RyaW5nIHwgbnVsbCxcbiAgcmVkaXJlY3RVcmw6IHN0cmluZyxcbiAgc3RhdGU6IHN0cmluZ1xuKSB7XG4gIGxldCBhdXRob3JpemVVcmwgPSBgJHtoYXNzVXJsfS9hdXRoL2F1dGhvcml6ZT9yZXNwb25zZV90eXBlPWNvZGUmcmVkaXJlY3RfdXJpPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgIHJlZGlyZWN0VXJsXG4gICl9YDtcblxuICBpZiAoY2xpZW50SWQgIT09IG51bGwpIHtcbiAgICBhdXRob3JpemVVcmwgKz0gYCZjbGllbnRfaWQ9JHtlbmNvZGVVUklDb21wb25lbnQoY2xpZW50SWQpfWA7XG4gIH1cblxuICBpZiAoc3RhdGUpIHtcbiAgICBhdXRob3JpemVVcmwgKz0gYCZzdGF0ZT0ke2VuY29kZVVSSUNvbXBvbmVudChzdGF0ZSl9YDtcbiAgfVxuICByZXR1cm4gYXV0aG9yaXplVXJsO1xufVxuXG5mdW5jdGlvbiByZWRpcmVjdEF1dGhvcml6ZShcbiAgaGFzc1VybDogc3RyaW5nLFxuICBjbGllbnRJZDogc3RyaW5nIHwgbnVsbCxcbiAgcmVkaXJlY3RVcmw6IHN0cmluZyxcbiAgc3RhdGU6IHN0cmluZ1xuKSB7XG4gIC8vIEFkZCBlaXRoZXIgP2F1dGhfY2FsbGJhY2s9MSBvciAmYXV0aF9jYWxsYmFjaz0xXG4gIHJlZGlyZWN0VXJsICs9IChyZWRpcmVjdFVybC5pbmNsdWRlcyhcIj9cIikgPyBcIiZcIiA6IFwiP1wiKSArIFwiYXV0aF9jYWxsYmFjaz0xXCI7XG5cbiAgZG9jdW1lbnQubG9jYXRpb24hLmhyZWYgPSBnZW5BdXRob3JpemVVcmwoXG4gICAgaGFzc1VybCxcbiAgICBjbGllbnRJZCxcbiAgICByZWRpcmVjdFVybCxcbiAgICBzdGF0ZVxuICApO1xufVxuXG5hc3luYyBmdW5jdGlvbiB0b2tlblJlcXVlc3QoXG4gIGhhc3NVcmw6IHN0cmluZyxcbiAgY2xpZW50SWQ6IHN0cmluZyB8IG51bGwsXG4gIGRhdGE6IEF1dGhvcml6YXRpb25Db2RlUmVxdWVzdCB8IFJlZnJlc2hUb2tlblJlcXVlc3Rcbikge1xuICAvLyBCcm93c2VycyBkb24ndCBhbGxvdyBmZXRjaGluZyB0b2tlbnMgZnJvbSBodHRwcyAtPiBodHRwLlxuICAvLyBUaHJvdyBhbiBlcnJvciBiZWNhdXNlIGl0J3MgYSBwYWluIHRvIGRlYnVnIHRoaXMuXG4gIC8vIEd1YXJkIGFnYWluc3Qgbm90IHdvcmtpbmcgaW4gbm9kZS5cbiAgY29uc3QgbCA9IHR5cGVvZiBsb2NhdGlvbiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBsb2NhdGlvbjtcbiAgaWYgKGwgJiYgbC5wcm90b2NvbCA9PT0gXCJodHRwczpcIikge1xuICAgIC8vIEVuc3VyZSB0aGF0IHRoZSBoYXNzVXJsIGlzIGhvc3RlZCBvbiBodHRwcy5cbiAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgYS5ocmVmID0gaGFzc1VybDtcbiAgICBpZiAoYS5wcm90b2NvbCA9PT0gXCJodHRwOlwiICYmIGEuaG9zdG5hbWUgIT09IFwibG9jYWxob3N0XCIpIHtcbiAgICAgIHRocm93IEVSUl9JTlZBTElEX0hUVFBTX1RPX0hUVFA7XG4gICAgfVxuICB9XG5cbiAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgaWYgKGNsaWVudElkICE9PSBudWxsKSB7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiY2xpZW50X2lkXCIsIGNsaWVudElkKTtcbiAgfVxuICBPYmplY3Qua2V5cyhkYXRhKS5mb3JFYWNoKGtleSA9PiB7XG4gICAgZm9ybURhdGEuYXBwZW5kKGtleSwgZGF0YVtrZXldKTtcbiAgfSk7XG5cbiAgY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKGAke2hhc3NVcmx9L2F1dGgvdG9rZW5gLCB7XG4gICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICBjcmVkZW50aWFsczogXCJzYW1lLW9yaWdpblwiLFxuICAgIGJvZHk6IGZvcm1EYXRhXG4gIH0pO1xuXG4gIGlmICghcmVzcC5vaykge1xuICAgIHRocm93IHJlc3Auc3RhdHVzID09PSA0MDAgLyogYXV0aCBpbnZhbGlkICovIHx8XG4gICAgcmVzcC5zdGF0dXMgPT09IDQwMyAvKiB1c2VyIG5vdCBhY3RpdmUgKi9cbiAgICAgID8gRVJSX0lOVkFMSURfQVVUSFxuICAgICAgOiBuZXcgRXJyb3IoXCJVbmFibGUgdG8gZmV0Y2ggdG9rZW5zXCIpO1xuICB9XG5cbiAgY29uc3QgdG9rZW5zOiBBdXRoRGF0YSA9IGF3YWl0IHJlc3AuanNvbigpO1xuICB0b2tlbnMuaGFzc1VybCA9IGhhc3NVcmw7XG4gIHRva2Vucy5jbGllbnRJZCA9IGNsaWVudElkO1xuICB0b2tlbnMuZXhwaXJlcyA9IGdlbkV4cGlyZXModG9rZW5zLmV4cGlyZXNfaW4pO1xuICByZXR1cm4gdG9rZW5zO1xufVxuXG5mdW5jdGlvbiBmZXRjaFRva2VuKGhhc3NVcmw6IHN0cmluZywgY2xpZW50SWQ6IHN0cmluZyB8IG51bGwsIGNvZGU6IHN0cmluZykge1xuICByZXR1cm4gdG9rZW5SZXF1ZXN0KGhhc3NVcmwsIGNsaWVudElkLCB7XG4gICAgY29kZSxcbiAgICBncmFudF90eXBlOiBcImF1dGhvcml6YXRpb25fY29kZVwiXG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlbmNvZGVPQXV0aFN0YXRlKHN0YXRlOiBPQXV0aFN0YXRlKTogc3RyaW5nIHtcbiAgcmV0dXJuIGJ0b2EoSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbn1cblxuZnVuY3Rpb24gZGVjb2RlT0F1dGhTdGF0ZShlbmNvZGVkOiBzdHJpbmcpOiBPQXV0aFN0YXRlIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UoYXRvYihlbmNvZGVkKSk7XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoIHtcbiAgcHJpdmF0ZSBfc2F2ZVRva2Vucz86IFNhdmVUb2tlbnNGdW5jO1xuICBkYXRhOiBBdXRoRGF0YTtcblxuICBjb25zdHJ1Y3RvcihkYXRhOiBBdXRoRGF0YSwgc2F2ZVRva2Vucz86IFNhdmVUb2tlbnNGdW5jKSB7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLl9zYXZlVG9rZW5zID0gc2F2ZVRva2VucztcbiAgfVxuXG4gIGdldCB3c1VybCgpIHtcbiAgICAvLyBDb252ZXJ0IGZyb20gaHR0cDovLyAtPiB3czovLywgaHR0cHM6Ly8gLT4gd3NzOi8vXG4gICAgcmV0dXJuIGB3cyR7dGhpcy5kYXRhLmhhc3NVcmwuc3Vic3RyKDQpfS9hcGkvd2Vic29ja2V0YDtcbiAgfVxuXG4gIGdldCBhY2Nlc3NUb2tlbigpIHtcbiAgICByZXR1cm4gdGhpcy5kYXRhLmFjY2Vzc190b2tlbjtcbiAgfVxuXG4gIGdldCBleHBpcmVkKCkge1xuICAgIHJldHVybiBEYXRlLm5vdygpID4gdGhpcy5kYXRhLmV4cGlyZXM7XG4gIH1cblxuICAvKipcbiAgICogUmVmcmVzaCB0aGUgYWNjZXNzIHRva2VuLlxuICAgKi9cbiAgYXN5bmMgcmVmcmVzaEFjY2Vzc1Rva2VuKCkge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB0b2tlblJlcXVlc3QodGhpcy5kYXRhLmhhc3NVcmwsIHRoaXMuZGF0YS5jbGllbnRJZCwge1xuICAgICAgZ3JhbnRfdHlwZTogXCJyZWZyZXNoX3Rva2VuXCIsXG4gICAgICByZWZyZXNoX3Rva2VuOiB0aGlzLmRhdGEucmVmcmVzaF90b2tlblxuICAgIH0pO1xuICAgIC8vIEFjY2VzcyB0b2tlbiByZXNwb25zZSBkb2VzIG5vdCBjb250YWluIHJlZnJlc2ggdG9rZW4uXG4gICAgZGF0YS5yZWZyZXNoX3Rva2VuID0gdGhpcy5kYXRhLnJlZnJlc2hfdG9rZW47XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICBpZiAodGhpcy5fc2F2ZVRva2VucykgdGhpcy5fc2F2ZVRva2VucyhkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZva2UgdGhlIHJlZnJlc2ggJiBhY2Nlc3MgdG9rZW5zLlxuICAgKi9cbiAgYXN5bmMgcmV2b2tlKCkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgZm9ybURhdGEuYXBwZW5kKFwiYWN0aW9uXCIsIFwicmV2b2tlXCIpO1xuICAgIGZvcm1EYXRhLmFwcGVuZChcInRva2VuXCIsIHRoaXMuZGF0YS5yZWZyZXNoX3Rva2VuKTtcblxuICAgIC8vIFRoZXJlIGlzIG5vIGVycm9yIGNoZWNraW5nLCBhcyByZXZva2Ugd2lsbCBhbHdheXMgcmV0dXJuIDIwMFxuICAgIGF3YWl0IGZldGNoKGAke3RoaXMuZGF0YS5oYXNzVXJsfS9hdXRoL3Rva2VuYCwge1xuICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gICAgICBib2R5OiBmb3JtRGF0YVxuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3NhdmVUb2tlbnMpIHtcbiAgICAgIHRoaXMuX3NhdmVUb2tlbnMobnVsbCk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBdXRoKG9wdGlvbnM6IGdldEF1dGhPcHRpb25zID0ge30pOiBQcm9taXNlPEF1dGg+IHtcbiAgbGV0IGRhdGE6IEF1dGhEYXRhIHwgbnVsbCB8IHVuZGVmaW5lZDtcblxuICBsZXQgaGFzc1VybCA9IG9wdGlvbnMuaGFzc1VybDtcbiAgLy8gU3RyaXAgdHJhaWxpbmcgc2xhc2guXG4gIGlmIChoYXNzVXJsICYmIGhhc3NVcmxbaGFzc1VybC5sZW5ndGggLSAxXSA9PT0gXCIvXCIpIHtcbiAgICBoYXNzVXJsID0gaGFzc1VybC5zdWJzdHIoMCwgaGFzc1VybC5sZW5ndGggLSAxKTtcbiAgfVxuICBjb25zdCBjbGllbnRJZCA9XG4gICAgb3B0aW9ucy5jbGllbnRJZCAhPT0gdW5kZWZpbmVkID8gb3B0aW9ucy5jbGllbnRJZCA6IGdlbkNsaWVudElkKCk7XG5cbiAgLy8gVXNlIGF1dGggY29kZSBpZiBpdCB3YXMgcGFzc2VkIGluXG4gIGlmICghZGF0YSAmJiBvcHRpb25zLmF1dGhDb2RlICYmIGhhc3NVcmwpIHtcbiAgICBkYXRhID0gYXdhaXQgZmV0Y2hUb2tlbihoYXNzVXJsLCBjbGllbnRJZCwgb3B0aW9ucy5hdXRoQ29kZSk7XG4gICAgaWYgKG9wdGlvbnMuc2F2ZVRva2Vucykge1xuICAgICAgb3B0aW9ucy5zYXZlVG9rZW5zKGRhdGEpO1xuICAgIH1cbiAgfVxuXG4gIC8vIENoZWNrIGlmIHdlIGNhbWUgYmFjayBmcm9tIGFuIGF1dGhvcml6ZSByZWRpcmVjdFxuICBpZiAoIWRhdGEpIHtcbiAgICBjb25zdCBxdWVyeSA9IHBhcnNlUXVlcnk8UXVlcnlDYWxsYmFja0RhdGE+KGxvY2F0aW9uLnNlYXJjaC5zdWJzdHIoMSkpO1xuXG4gICAgLy8gQ2hlY2sgaWYgd2UgZ290IHJlZGlyZWN0ZWQgaGVyZSBmcm9tIGF1dGhvcml6ZSBwYWdlXG4gICAgaWYgKFwiYXV0aF9jYWxsYmFja1wiIGluIHF1ZXJ5KSB7XG4gICAgICAvLyBSZXN0b3JlIHN0YXRlXG4gICAgICBjb25zdCBzdGF0ZSA9IGRlY29kZU9BdXRoU3RhdGUocXVlcnkuc3RhdGUpO1xuICAgICAgZGF0YSA9IGF3YWl0IGZldGNoVG9rZW4oc3RhdGUuaGFzc1VybCwgc3RhdGUuY2xpZW50SWQsIHF1ZXJ5LmNvZGUpO1xuICAgICAgaWYgKG9wdGlvbnMuc2F2ZVRva2Vucykge1xuICAgICAgICBvcHRpb25zLnNhdmVUb2tlbnMoZGF0YSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLy8gQ2hlY2sgZm9yIHN0b3JlZCB0b2tlbnNcbiAgaWYgKCFkYXRhICYmIG9wdGlvbnMubG9hZFRva2Vucykge1xuICAgIGRhdGEgPSBhd2FpdCBvcHRpb25zLmxvYWRUb2tlbnMoKTtcbiAgfVxuXG4gIGlmIChkYXRhKSB7XG4gICAgcmV0dXJuIG5ldyBBdXRoKGRhdGEsIG9wdGlvbnMuc2F2ZVRva2Vucyk7XG4gIH1cblxuICBpZiAoaGFzc1VybCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgdGhyb3cgRVJSX0hBU1NfSE9TVF9SRVFVSVJFRDtcbiAgfVxuXG4gIC8vIElmIG5vIHRva2VucyBmb3VuZCBidXQgYSBoYXNzVXJsIHdhcyBwYXNzZWQgaW4sIGxldCdzIGdvIGdldCBzb21lIHRva2VucyFcbiAgcmVkaXJlY3RBdXRob3JpemUoXG4gICAgaGFzc1VybCxcbiAgICBjbGllbnRJZCxcbiAgICBvcHRpb25zLnJlZGlyZWN0VXJsIHx8IGdlblJlZGlyZWN0VXJsKCksXG4gICAgZW5jb2RlT0F1dGhTdGF0ZSh7XG4gICAgICBoYXNzVXJsLFxuICAgICAgY2xpZW50SWRcbiAgICB9KVxuICApO1xuICAvLyBKdXN0IGRvbid0IHJlc29sdmUgd2hpbGUgd2UgbmF2aWdhdGUgdG8gbmV4dCBwYWdlXG4gIHJldHVybiBuZXcgUHJvbWlzZTxBdXRoPigoKSA9PiB7fSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VRdWVyeTxUPihxdWVyeVN0cmluZzogc3RyaW5nKSB7XG4gIGNvbnN0IHF1ZXJ5OiBhbnkgPSB7fTtcbiAgY29uc3QgaXRlbXMgPSBxdWVyeVN0cmluZy5zcGxpdChcIiZcIik7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgIGNvbnN0IGtleSA9IGRlY29kZVVSSUNvbXBvbmVudChpdGVtWzBdKTtcbiAgICBjb25zdCB2YWx1ZSA9IGl0ZW0ubGVuZ3RoID4gMSA/IGRlY29kZVVSSUNvbXBvbmVudChpdGVtWzFdKSA6IHVuZGVmaW5lZDtcbiAgICBxdWVyeVtrZXldID0gdmFsdWU7XG4gIH1cbiAgcmV0dXJuIHF1ZXJ5IGFzIFQ7XG59XG4iLCJpbXBvcnQgeyBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi90eXBlc1wiO1xuXG4vLyAoYykgSmFzb24gTWlsbGVyXG4vLyBVbmlzdG9yZSAtIE1JVCBsaWNlbnNlXG4vLyBBbmQgdGhlbiBhZG9wdGVkIHRvIG91ciBuZWVkcyArIHR5cGVzY3JpcHRcblxudHlwZSBMaXN0ZW5lcjxTdGF0ZT4gPSAoc3RhdGU6IFN0YXRlKSA9PiB2b2lkO1xudHlwZSBBY3Rpb248U3RhdGU+ID0gKFxuICBzdGF0ZTogU3RhdGUsXG4gIC4uLmFyZ3M6IGFueVtdXG4pID0+IFBhcnRpYWw8U3RhdGU+IHwgUHJvbWlzZTxQYXJ0aWFsPFN0YXRlPj4gfCBudWxsO1xudHlwZSBCb3VuZEFjdGlvbjxTdGF0ZT4gPSAoLi4uYXJnczogYW55W10pID0+IHZvaWQ7XG5cbmV4cG9ydCB0eXBlIFN0b3JlPFN0YXRlPiA9IHtcbiAgc3RhdGU6IFN0YXRlIHwgdW5kZWZpbmVkO1xuICBhY3Rpb24oYWN0aW9uOiBBY3Rpb248U3RhdGU+KTogQm91bmRBY3Rpb248U3RhdGU+O1xuICBzZXRTdGF0ZSh1cGRhdGU6IFBhcnRpYWw8U3RhdGU+LCBvdmVyd3JpdGU/OiBib29sZWFuKTogdm9pZDtcbiAgc3Vic2NyaWJlKGxpc3RlbmVyOiBMaXN0ZW5lcjxTdGF0ZT4pOiBVbnN1YnNjcmliZUZ1bmM7XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlU3RvcmUgPSA8U3RhdGU+KHN0YXRlPzogU3RhdGUpOiBTdG9yZTxTdGF0ZT4gPT4ge1xuICBsZXQgbGlzdGVuZXJzOiBMaXN0ZW5lcjxTdGF0ZT5bXSA9IFtdO1xuXG4gIGZ1bmN0aW9uIHVuc3Vic2NyaWJlKGxpc3RlbmVyOiBMaXN0ZW5lcjxTdGF0ZT4gfCBudWxsKSB7XG4gICAgbGV0IG91dCA9IFtdO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAobGlzdGVuZXJzW2ldID09PSBsaXN0ZW5lcikge1xuICAgICAgICBsaXN0ZW5lciA9IG51bGw7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBvdXQucHVzaChsaXN0ZW5lcnNbaV0pO1xuICAgICAgfVxuICAgIH1cbiAgICBsaXN0ZW5lcnMgPSBvdXQ7XG4gIH1cblxuICBmdW5jdGlvbiBzZXRTdGF0ZSh1cGRhdGU6IFBhcnRpYWw8U3RhdGU+LCBvdmVyd3JpdGU6IGJvb2xlYW4pOiB2b2lkIHtcbiAgICBzdGF0ZSA9IG92ZXJ3cml0ZSA/ICh1cGRhdGUgYXMgU3RhdGUpIDogT2JqZWN0LmFzc2lnbih7fSwgc3RhdGUsIHVwZGF0ZSk7XG4gICAgbGV0IGN1cnJlbnRMaXN0ZW5lcnMgPSBsaXN0ZW5lcnM7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjdXJyZW50TGlzdGVuZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBjdXJyZW50TGlzdGVuZXJzW2ldKHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogQW4gb2JzZXJ2YWJsZSBzdGF0ZSBjb250YWluZXIsIHJldHVybmVkIGZyb20ge0BsaW5rIGNyZWF0ZVN0b3JlfVxuICAgKiBAbmFtZSBzdG9yZVxuICAgKi9cblxuICByZXR1cm4ge1xuICAgIGdldCBzdGF0ZSgpIHtcbiAgICAgIHJldHVybiBzdGF0ZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGEgYm91bmQgY29weSBvZiB0aGUgZ2l2ZW4gYWN0aW9uIGZ1bmN0aW9uLlxuICAgICAqIFRoZSBib3VuZCByZXR1cm5lZCBmdW5jdGlvbiBpbnZva2VzIGFjdGlvbigpIGFuZCBwZXJzaXN0cyB0aGUgcmVzdWx0IGJhY2sgdG8gdGhlIHN0b3JlLlxuICAgICAqIElmIHRoZSByZXR1cm4gdmFsdWUgb2YgYGFjdGlvbmAgaXMgYSBQcm9taXNlLCB0aGUgcmVzb2x2ZWQgdmFsdWUgd2lsbCBiZSB1c2VkIGFzIHN0YXRlLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGFjdGlvblx0QW4gYWN0aW9uIG9mIHRoZSBmb3JtIGBhY3Rpb24oc3RhdGUsIC4uLmFyZ3MpIC0+IHN0YXRlVXBkYXRlYFxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gYm91bmRBY3Rpb24oKVxuICAgICAqL1xuICAgIGFjdGlvbihhY3Rpb246IEFjdGlvbjxTdGF0ZT4pOiBCb3VuZEFjdGlvbjxTdGF0ZT4ge1xuICAgICAgZnVuY3Rpb24gYXBwbHkocmVzdWx0OiBQYXJ0aWFsPFN0YXRlPikge1xuICAgICAgICBzZXRTdGF0ZShyZXN1bHQsIGZhbHNlKTtcbiAgICAgIH1cblxuICAgICAgLy8gTm90ZTogcGVyZiB0ZXN0cyB2ZXJpZnlpbmcgdGhpcyBpbXBsZW1lbnRhdGlvbjogaHR0cHM6Ly9lc2JlbmNoLmNvbS9iZW5jaC81YTI5NWU2Mjk5NjM0ODAwYTAzNDk1MDBcbiAgICAgIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IGFyZ3MgPSBbc3RhdGVdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbGV0IHJldCA9IGFjdGlvbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgaWYgKHJldCAhPSBudWxsKSB7XG4gICAgICAgICAgaWYgKHJldC50aGVuKSByZXR1cm4gcmV0LnRoZW4oYXBwbHkpO1xuICAgICAgICAgIHJldHVybiBhcHBseShyZXQpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBhIHBhcnRpYWwgc3RhdGUgb2JqZWN0IHRvIHRoZSBjdXJyZW50IHN0YXRlLCBpbnZva2luZyByZWdpc3RlcmVkIGxpc3RlbmVycy5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gdXBkYXRlXHRcdFx0XHRBbiBvYmplY3Qgd2l0aCBwcm9wZXJ0aWVzIHRvIGJlIG1lcmdlZCBpbnRvIHN0YXRlXG4gICAgICogQHBhcmFtIHtCb29sZWFufSBbb3ZlcndyaXRlPWZhbHNlXVx0SWYgYHRydWVgLCB1cGRhdGUgd2lsbCByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgYmVpbmcgbWVyZ2VkIGludG8gaXRcbiAgICAgKi9cbiAgICBzZXRTdGF0ZSxcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVyIGEgbGlzdGVuZXIgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIHdoZW5ldmVyIHN0YXRlIGlzIGNoYW5nZWQuIFJldHVybnMgYW4gYHVuc3Vic2NyaWJlKClgIGZ1bmN0aW9uLlxuICAgICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyXHRBIGZ1bmN0aW9uIHRvIGNhbGwgd2hlbiBzdGF0ZSBjaGFuZ2VzLiBHZXRzIHBhc3NlZCB0aGUgbmV3IHN0YXRlLlxuICAgICAqIEByZXR1cm5zIHtGdW5jdGlvbn0gdW5zdWJzY3JpYmUoKVxuICAgICAqL1xuICAgIHN1YnNjcmliZShsaXN0ZW5lcjogTGlzdGVuZXI8U3RhdGU+KSB7XG4gICAgICBsaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICB1bnN1YnNjcmliZShsaXN0ZW5lcik7XG4gICAgICB9O1xuICAgIH1cblxuICAgIC8vIC8qKlxuICAgIC8vICAqIFJlbW92ZSBhIHByZXZpb3VzbHktcmVnaXN0ZXJlZCBsaXN0ZW5lciBmdW5jdGlvbi5cbiAgICAvLyAgKiBAcGFyYW0ge0Z1bmN0aW9ufSBsaXN0ZW5lclx0VGhlIGNhbGxiYWNrIHByZXZpb3VzbHkgcGFzc2VkIHRvIGBzdWJzY3JpYmUoKWAgdGhhdCBzaG91bGQgYmUgcmVtb3ZlZC5cbiAgICAvLyAgKiBAZnVuY3Rpb25cbiAgICAvLyAgKi9cbiAgICAvLyB1bnN1YnNjcmliZSxcbiAgfTtcbn07XG4iLCJpbXBvcnQgeyBTdG9yZSwgY3JlYXRlU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCB0eXBlIENvbGxlY3Rpb248U3RhdGU+ID0ge1xuICBzdGF0ZTogU3RhdGU7XG4gIHJlZnJlc2goKTogUHJvbWlzZTx2b2lkPjtcbiAgc3Vic2NyaWJlKHN1YnNjcmliZXI6IChzdGF0ZTogU3RhdGUpID0+IHZvaWQpOiBVbnN1YnNjcmliZUZ1bmM7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Q29sbGVjdGlvbiA9IDxTdGF0ZT4oXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGtleTogc3RyaW5nLFxuICBmZXRjaENvbGxlY3Rpb246IChjb25uOiBDb25uZWN0aW9uKSA9PiBQcm9taXNlPFN0YXRlPixcbiAgc3Vic2NyaWJlVXBkYXRlcz86IChcbiAgICBjb25uOiBDb25uZWN0aW9uLFxuICAgIHN0b3JlOiBTdG9yZTxTdGF0ZT5cbiAgKSA9PiBQcm9taXNlPFVuc3Vic2NyaWJlRnVuYz5cbik6IENvbGxlY3Rpb248U3RhdGU+ID0+IHtcbiAgaWYgKGNvbm5ba2V5XSkge1xuICAgIHJldHVybiBjb25uW2tleV07XG4gIH1cblxuICBsZXQgYWN0aXZlID0gMDtcbiAgbGV0IHVuc3ViUHJvbTogUHJvbWlzZTxVbnN1YnNjcmliZUZ1bmM+O1xuICBsZXQgc3RvcmUgPSBjcmVhdGVTdG9yZTxTdGF0ZT4oKTtcblxuICBjb25zdCByZWZyZXNoID0gKCkgPT5cbiAgICBmZXRjaENvbGxlY3Rpb24oY29ubikudGhlbihzdGF0ZSA9PiBzdG9yZS5zZXRTdGF0ZShzdGF0ZSwgdHJ1ZSkpO1xuXG4gIGNvbnN0IHJlZnJlc2hTd2FsbG93ID0gKCkgPT5cbiAgICByZWZyZXNoKCkuY2F0Y2goKGVycjogdW5rbm93bikgPT4ge1xuICAgICAgLy8gU3dhbGxvdyBlcnJvcnMgaWYgc29ja2V0IGlzIGNvbm5lY3RpbmcsIGNsb3Npbmcgb3IgY2xvc2VkLlxuICAgICAgLy8gV2Ugd2lsbCBhdXRvbWF0aWNhbGx5IGNhbGwgcmVmcmVzaCBhZ2FpbiB3aGVuIHdlIHJlLWVzdGFibGlzaCB0aGUgY29ubmVjdGlvbi5cbiAgICAgIC8vIFVzaW5nIGNvbm4uc29ja2V0Lk9QRU4gaW5zdGVhZCBvZiBXZWJTb2NrZXQgZm9yIGJldHRlciBub2RlIHN1cHBvcnRcbiAgICAgIGlmIChjb25uLnNvY2tldC5yZWFkeVN0YXRlID09IGNvbm4uc29ja2V0Lk9QRU4pIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIGNvbm5ba2V5XSA9IHtcbiAgICBnZXQgc3RhdGUoKSB7XG4gICAgICByZXR1cm4gc3RvcmUuc3RhdGU7XG4gICAgfSxcblxuICAgIHJlZnJlc2gsXG5cbiAgICBzdWJzY3JpYmUoc3Vic2NyaWJlcjogKHN0YXRlOiBTdGF0ZSkgPT4gdm9pZCk6IFVuc3Vic2NyaWJlRnVuYyB7XG4gICAgICBhY3RpdmUrKztcblxuICAgICAgLy8gSWYgdGhpcyB3YXMgdGhlIGZpcnN0IHN1YnNjcmliZXIsIGF0dGFjaCBjb2xsZWN0aW9uXG4gICAgICBpZiAoYWN0aXZlID09PSAxKSB7XG4gICAgICAgIGlmIChzdWJzY3JpYmVVcGRhdGVzKSB7XG4gICAgICAgICAgdW5zdWJQcm9tID0gc3Vic2NyaWJlVXBkYXRlcyhjb25uLCBzdG9yZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBGZXRjaCB3aGVuIGNvbm5lY3Rpb24gcmUtZXN0YWJsaXNoZWQuXG4gICAgICAgIGNvbm4uYWRkRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIHJlZnJlc2hTd2FsbG93KTtcblxuICAgICAgICByZWZyZXNoU3dhbGxvdygpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1bnN1YiA9IHN0b3JlLnN1YnNjcmliZShzdWJzY3JpYmVyKTtcblxuICAgICAgaWYgKHN0b3JlLnN0YXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gRG9uJ3QgY2FsbCBpdCByaWdodCBhd2F5IHNvIHRoYXQgY2FsbGVyIGhhcyB0aW1lXG4gICAgICAgIC8vIHRvIGluaXRpYWxpemUgYWxsIHRoZSB0aGluZ3MuXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc3Vic2NyaWJlcihzdG9yZS5zdGF0ZSEpLCAwKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuICgpID0+IHtcbiAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgYWN0aXZlLS07XG4gICAgICAgIGlmICghYWN0aXZlKSB7XG4gICAgICAgICAgLy8gVW5zdWJzY3JpYmUgZnJvbSBjaGFuZ2VzXG4gICAgICAgICAgaWYgKHVuc3ViUHJvbSlcbiAgICAgICAgICAgIHVuc3ViUHJvbS50aGVuKHVuc3ViID0+IHtcbiAgICAgICAgICAgICAgdW5zdWIoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIGNvbm4ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5XCIsIHJlZnJlc2gpO1xuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gY29ubltrZXldO1xufTtcblxuLy8gTGVnYWN5IG5hbWUuIEl0IGdldHMgYSBjb2xsZWN0aW9uIGFuZCBzdWJzY3JpYmVzLlxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbGxlY3Rpb24gPSA8U3RhdGU+KFxuICBrZXk6IHN0cmluZyxcbiAgZmV0Y2hDb2xsZWN0aW9uOiAoY29ubjogQ29ubmVjdGlvbikgPT4gUHJvbWlzZTxTdGF0ZT4sXG4gIHN1YnNjcmliZVVwZGF0ZXM6XG4gICAgfCAoKGNvbm46IENvbm5lY3Rpb24sIHN0b3JlOiBTdG9yZTxTdGF0ZT4pID0+IFByb21pc2U8VW5zdWJzY3JpYmVGdW5jPilcbiAgICB8IHVuZGVmaW5lZCxcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChzdGF0ZTogU3RhdGUpID0+IHZvaWRcbik6IFVuc3Vic2NyaWJlRnVuYyA9PlxuICBnZXRDb2xsZWN0aW9uKGNvbm4sIGtleSwgZmV0Y2hDb2xsZWN0aW9uLCBzdWJzY3JpYmVVcGRhdGVzKS5zdWJzY3JpYmUoXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5pbXBvcnQgKiBhcyBtZXNzYWdlcyBmcm9tIFwiLi9tZXNzYWdlc1wiO1xuaW1wb3J0IHsgSGFzc0VudGl0eSwgSGFzc1NlcnZpY2VzLCBIYXNzQ29uZmlnLCBIYXNzVXNlciB9IGZyb20gXCIuL3R5cGVzXCI7XG5cbmV4cG9ydCBjb25zdCBnZXRTdGF0ZXMgPSAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT5cbiAgY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2U8SGFzc0VudGl0eVtdPihtZXNzYWdlcy5zdGF0ZXMoKSk7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2aWNlcyA9IChjb25uZWN0aW9uOiBDb25uZWN0aW9uKSA9PlxuICBjb25uZWN0aW9uLnNlbmRNZXNzYWdlUHJvbWlzZTxIYXNzU2VydmljZXM+KG1lc3NhZ2VzLnNlcnZpY2VzKCkpO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnID0gKGNvbm5lY3Rpb246IENvbm5lY3Rpb24pID0+XG4gIGNvbm5lY3Rpb24uc2VuZE1lc3NhZ2VQcm9taXNlPEhhc3NDb25maWc+KG1lc3NhZ2VzLmNvbmZpZygpKTtcblxuZXhwb3J0IGNvbnN0IGdldFVzZXIgPSAoY29ubmVjdGlvbjogQ29ubmVjdGlvbikgPT5cbiAgY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2U8SGFzc1VzZXI+KG1lc3NhZ2VzLnVzZXIoKSk7XG5cbmV4cG9ydCBjb25zdCBjYWxsU2VydmljZSA9IChcbiAgY29ubmVjdGlvbjogQ29ubmVjdGlvbixcbiAgZG9tYWluOiBzdHJpbmcsXG4gIHNlcnZpY2U6IHN0cmluZyxcbiAgc2VydmljZURhdGE/OiBvYmplY3RcbikgPT5cbiAgY29ubmVjdGlvbi5zZW5kTWVzc2FnZVByb21pc2UoXG4gICAgbWVzc2FnZXMuY2FsbFNlcnZpY2UoZG9tYWluLCBzZXJ2aWNlLCBzZXJ2aWNlRGF0YSlcbiAgKTtcbiIsImltcG9ydCB7IGdldENvbGxlY3Rpb24gfSBmcm9tIFwiLi9jb2xsZWN0aW9uXCI7XG5pbXBvcnQgeyBIYXNzQ29uZmlnLCBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7IGdldENvbmZpZyB9IGZyb20gXCIuL2NvbW1hbmRzXCI7XG5cbnR5cGUgQ29tcG9uZW50TG9hZGVkRXZlbnQgPSB7XG4gIGRhdGE6IHtcbiAgICBjb21wb25lbnQ6IHN0cmluZztcbiAgfTtcbn07XG5cbmZ1bmN0aW9uIHByb2Nlc3NDb21wb25lbnRMb2FkZWQoXG4gIHN0YXRlOiBIYXNzQ29uZmlnLFxuICBldmVudDogQ29tcG9uZW50TG9hZGVkRXZlbnRcbik6IFBhcnRpYWw8SGFzc0NvbmZpZz4gfCBudWxsIHtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybiBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgY29tcG9uZW50czogc3RhdGUuY29tcG9uZW50cy5jb25jYXQoZXZlbnQuZGF0YS5jb21wb25lbnQpXG4gIH07XG59XG5cbmNvbnN0IGZldGNoQ29uZmlnID0gKGNvbm46IENvbm5lY3Rpb24pID0+IGdldENvbmZpZyhjb25uKTtcbmNvbnN0IHN1YnNjcmliZVVwZGF0ZXMgPSAoY29ubjogQ29ubmVjdGlvbiwgc3RvcmU6IFN0b3JlPEhhc3NDb25maWc+KSA9PlxuICBQcm9taXNlLmFsbChbXG4gICAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgICBzdG9yZS5hY3Rpb24ocHJvY2Vzc0NvbXBvbmVudExvYWRlZCksXG4gICAgICBcImNvbXBvbmVudF9sb2FkZWRcIlxuICAgICksXG4gICAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgICAoKSA9PiBmZXRjaENvbmZpZyhjb25uKS50aGVuKGNvbmZpZyA9PiBzdG9yZS5zZXRTdGF0ZShjb25maWcsIHRydWUpKSxcbiAgICAgIFwiY29yZV9jb25maWdfdXBkYXRlZFwiXG4gICAgKVxuICBdKS50aGVuKHVuc3VicyA9PiAoKSA9PiB1bnN1YnMuZm9yRWFjaCh1bnN1YiA9PiB1bnN1YigpKSk7XG5cbmNvbnN0IGNvbmZpZ0NvbGwgPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihjb25uLCBcIl9jbmZcIiwgZmV0Y2hDb25maWcsIHN1YnNjcmliZVVwZGF0ZXMpO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlQ29uZmlnID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHN0YXRlOiBIYXNzQ29uZmlnKSA9PiB2b2lkXG4pOiBVbnN1YnNjcmliZUZ1bmMgPT4gY29uZmlnQ29sbChjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcbmltcG9ydCB7IEhhc3NTZXJ2aWNlcywgSGFzc0RvbWFpblNlcnZpY2VzLCBVbnN1YnNjcmliZUZ1bmMgfSBmcm9tIFwiLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiB9IGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmltcG9ydCB7IFN0b3JlIH0gZnJvbSBcIi4vc3RvcmVcIjtcbmltcG9ydCB7IGdldFNlcnZpY2VzIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxudHlwZSBTZXJ2aWNlUmVnaXN0ZXJlZEV2ZW50ID0ge1xuICBkYXRhOiB7XG4gICAgZG9tYWluOiBzdHJpbmc7XG4gICAgc2VydmljZTogc3RyaW5nO1xuICB9O1xufTtcblxudHlwZSBTZXJ2aWNlUmVtb3ZlZEV2ZW50ID0ge1xuICBkYXRhOiB7XG4gICAgZG9tYWluOiBzdHJpbmc7XG4gICAgc2VydmljZTogc3RyaW5nO1xuICB9O1xufTtcblxuZnVuY3Rpb24gcHJvY2Vzc1NlcnZpY2VSZWdpc3RlcmVkKFxuICBzdGF0ZTogSGFzc1NlcnZpY2VzLFxuICBldmVudDogU2VydmljZVJlZ2lzdGVyZWRFdmVudFxuKSB7XG4gIGlmIChzdGF0ZSA9PT0gdW5kZWZpbmVkKSByZXR1cm4gbnVsbDtcblxuICBjb25zdCB7IGRvbWFpbiwgc2VydmljZSB9ID0gZXZlbnQuZGF0YTtcblxuICBjb25zdCBkb21haW5JbmZvID0gT2JqZWN0LmFzc2lnbih7fSwgc3RhdGVbZG9tYWluXSwge1xuICAgIFtzZXJ2aWNlXTogeyBkZXNjcmlwdGlvbjogXCJcIiwgZmllbGRzOiB7fSB9XG4gIH0pO1xuXG4gIHJldHVybiB7IFtkb21haW5dOiBkb21haW5JbmZvIH07XG59XG5cbmZ1bmN0aW9uIHByb2Nlc3NTZXJ2aWNlUmVtb3ZlZChcbiAgc3RhdGU6IEhhc3NTZXJ2aWNlcyxcbiAgZXZlbnQ6IFNlcnZpY2VSZW1vdmVkRXZlbnRcbikge1xuICBpZiAoc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIG51bGw7XG5cbiAgY29uc3QgeyBkb21haW4sIHNlcnZpY2UgfSA9IGV2ZW50LmRhdGE7XG4gIGNvbnN0IGN1ckRvbWFpbkluZm8gPSBzdGF0ZVtkb21haW5dO1xuXG4gIGlmICghY3VyRG9tYWluSW5mbyB8fCAhKHNlcnZpY2UgaW4gY3VyRG9tYWluSW5mbykpIHJldHVybiBudWxsO1xuXG4gIGNvbnN0IGRvbWFpbkluZm86IEhhc3NEb21haW5TZXJ2aWNlcyA9IHt9O1xuICBPYmplY3Qua2V5cyhjdXJEb21haW5JbmZvKS5mb3JFYWNoKHNLZXkgPT4ge1xuICAgIGlmIChzS2V5ICE9PSBzZXJ2aWNlKSBkb21haW5JbmZvW3NLZXldID0gY3VyRG9tYWluSW5mb1tzS2V5XTtcbiAgfSk7XG5cbiAgcmV0dXJuIHsgW2RvbWFpbl06IGRvbWFpbkluZm8gfTtcbn1cblxuY29uc3QgZmV0Y2hTZXJ2aWNlcyA9IChjb25uOiBDb25uZWN0aW9uKSA9PiBnZXRTZXJ2aWNlcyhjb25uKTtcbmNvbnN0IHN1YnNjcmliZVVwZGF0ZXMgPSAoY29ubjogQ29ubmVjdGlvbiwgc3RvcmU6IFN0b3JlPEhhc3NTZXJ2aWNlcz4pID0+XG4gIFByb21pc2UuYWxsKFtcbiAgICBjb25uLnN1YnNjcmliZUV2ZW50czxTZXJ2aWNlUmVnaXN0ZXJlZEV2ZW50PihcbiAgICAgIHN0b3JlLmFjdGlvbihwcm9jZXNzU2VydmljZVJlZ2lzdGVyZWQpLFxuICAgICAgXCJzZXJ2aWNlX3JlZ2lzdGVyZWRcIlxuICAgICksXG4gICAgY29ubi5zdWJzY3JpYmVFdmVudHM8U2VydmljZVJlbW92ZWRFdmVudD4oXG4gICAgICBzdG9yZS5hY3Rpb24ocHJvY2Vzc1NlcnZpY2VSZW1vdmVkKSxcbiAgICAgIFwic2VydmljZV9yZW1vdmVkXCJcbiAgICApXG4gIF0pLnRoZW4odW5zdWJzID0+ICgpID0+IHVuc3Vicy5mb3JFYWNoKGZuID0+IGZuKCkpKTtcblxuY29uc3Qgc2VydmljZXNDb2xsID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb24oY29ubiwgXCJfc3J2XCIsIGZldGNoU2VydmljZXMsIHN1YnNjcmliZVVwZGF0ZXMpO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlU2VydmljZXMgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoc3RhdGU6IEhhc3NTZXJ2aWNlcykgPT4gdm9pZFxuKTogVW5zdWJzY3JpYmVGdW5jID0+IHNlcnZpY2VzQ29sbChjb25uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuIiwiaW1wb3J0IHsgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcbmltcG9ydCB7IEhhc3NFbnRpdGllcywgU3RhdGVDaGFuZ2VkRXZlbnQsIFVuc3Vic2NyaWJlRnVuYyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBDb25uZWN0aW9uIH0gZnJvbSBcIi4vY29ubmVjdGlvblwiO1xuaW1wb3J0IHsgU3RvcmUgfSBmcm9tIFwiLi9zdG9yZVwiO1xuaW1wb3J0IHsgZ2V0U3RhdGVzIH0gZnJvbSBcIi4vY29tbWFuZHNcIjtcblxuZnVuY3Rpb24gcHJvY2Vzc0V2ZW50KHN0b3JlOiBTdG9yZTxIYXNzRW50aXRpZXM+LCBldmVudDogU3RhdGVDaGFuZ2VkRXZlbnQpIHtcbiAgY29uc3Qgc3RhdGUgPSBzdG9yZS5zdGF0ZTtcbiAgaWYgKHN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybjtcblxuICBjb25zdCB7IGVudGl0eV9pZCwgbmV3X3N0YXRlIH0gPSBldmVudC5kYXRhO1xuICBpZiAobmV3X3N0YXRlKSB7XG4gICAgc3RvcmUuc2V0U3RhdGUoeyBbbmV3X3N0YXRlLmVudGl0eV9pZF06IG5ld19zdGF0ZSB9KTtcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBuZXdFbnRpdGllcyA9IE9iamVjdC5hc3NpZ24oe30sIHN0YXRlKTtcbiAgICBkZWxldGUgbmV3RW50aXRpZXNbZW50aXR5X2lkXTtcbiAgICBzdG9yZS5zZXRTdGF0ZShuZXdFbnRpdGllcywgdHJ1ZSk7XG4gIH1cbn1cblxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hFbnRpdGllcyhjb25uOiBDb25uZWN0aW9uKTogUHJvbWlzZTxIYXNzRW50aXRpZXM+IHtcbiAgY29uc3Qgc3RhdGVzID0gYXdhaXQgZ2V0U3RhdGVzKGNvbm4pO1xuICBjb25zdCBlbnRpdGllczogSGFzc0VudGl0aWVzID0ge307XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgc3RhdGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc3RhdGUgPSBzdGF0ZXNbaV07XG4gICAgZW50aXRpZXNbc3RhdGUuZW50aXR5X2lkXSA9IHN0YXRlO1xuICB9XG4gIHJldHVybiBlbnRpdGllcztcbn1cblxuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uOiBDb25uZWN0aW9uLCBzdG9yZTogU3RvcmU8SGFzc0VudGl0aWVzPikgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHM8U3RhdGVDaGFuZ2VkRXZlbnQ+KFxuICAgIGV2ID0+IHByb2Nlc3NFdmVudChzdG9yZSwgZXYgYXMgU3RhdGVDaGFuZ2VkRXZlbnQpLFxuICAgIFwic3RhdGVfY2hhbmdlZFwiXG4gICk7XG5cbmV4cG9ydCBjb25zdCBlbnRpdGllc0NvbGwgPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihjb25uLCBcIl9lbnRcIiwgZmV0Y2hFbnRpdGllcywgc3Vic2NyaWJlVXBkYXRlcyk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVFbnRpdGllcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6IChzdGF0ZTogSGFzc0VudGl0aWVzKSA9PiB2b2lkXG4pOiBVbnN1YnNjcmliZUZ1bmMgPT4gZW50aXRpZXNDb2xsKGNvbm4pLnN1YnNjcmliZShvbkNoYW5nZSk7XG4iLCJpbXBvcnQgeyBDb25uZWN0aW9uT3B0aW9ucyB9IGZyb20gXCIuL3R5cGVzXCI7XG5pbXBvcnQgeyBjcmVhdGVTb2NrZXQgfSBmcm9tIFwiLi9zb2NrZXRcIjtcbmltcG9ydCB7IENvbm5lY3Rpb24gfSBmcm9tIFwiLi9jb25uZWN0aW9uXCI7XG5cbmV4cG9ydCAqIGZyb20gXCIuL2F1dGhcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvbGxlY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2Nvbm5lY3Rpb25cIjtcbmV4cG9ydCAqIGZyb20gXCIuL2NvbmZpZ1wiO1xuZXhwb3J0ICogZnJvbSBcIi4vc2VydmljZXNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL2VudGl0aWVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9lcnJvcnNcIjtcbmV4cG9ydCAqIGZyb20gXCIuL3R5cGVzXCI7XG5leHBvcnQgKiBmcm9tIFwiLi9jb21tYW5kc1wiO1xuXG5jb25zdCBkZWZhdWx0Q29ubmVjdGlvbk9wdGlvbnM6IENvbm5lY3Rpb25PcHRpb25zID0ge1xuICBzZXR1cFJldHJ5OiAwLFxuICBjcmVhdGVTb2NrZXRcbn07XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDb25uZWN0aW9uKG9wdGlvbnM/OiBQYXJ0aWFsPENvbm5lY3Rpb25PcHRpb25zPikge1xuICBjb25zdCBjb25uT3B0aW9uczogQ29ubmVjdGlvbk9wdGlvbnMgPSBPYmplY3QuYXNzaWduKFxuICAgIHt9LFxuICAgIGRlZmF1bHRDb25uZWN0aW9uT3B0aW9ucyxcbiAgICBvcHRpb25zXG4gICk7XG4gIGNvbnN0IHNvY2tldCA9IGF3YWl0IGNvbm5PcHRpb25zLmNyZWF0ZVNvY2tldChjb25uT3B0aW9ucyk7XG4gIGNvbnN0IGNvbm4gPSBuZXcgQ29ubmVjdGlvbihzb2NrZXQsIGNvbm5PcHRpb25zKTtcbiAgcmV0dXJuIGNvbm47XG59XG4iLCJpbXBvcnQgeyBBdXRoRGF0YSB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuY29uc3Qgc3RvcmFnZSA9IHdpbmRvdy5sb2NhbFN0b3JhZ2UgfHwge307XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIFdpbmRvdyB7XG4gICAgX190b2tlbkNhY2hlOiB7XG4gICAgICAvLyB1bmRlZmluZWQ6IHdlIGhhdmVuJ3QgbG9hZGVkIHlldFxuICAgICAgLy8gbnVsbDogbm9uZSBzdG9yZWRcbiAgICAgIHRva2Vucz86IEF1dGhEYXRhIHwgbnVsbDtcbiAgICAgIHdyaXRlRW5hYmxlZD86IGJvb2xlYW47XG4gICAgfTtcbiAgfVxufVxuXG4vLyBTbyB0aGF0IGNvcmUuanMgYW5kIG1haW4gYXBwIGhpdCBzYW1lIHNoYXJlZCBvYmplY3QuXG5sZXQgdG9rZW5DYWNoZSA9IHdpbmRvdy5fX3Rva2VuQ2FjaGU7XG5pZiAoIXRva2VuQ2FjaGUpIHtcbiAgdG9rZW5DYWNoZSA9IHdpbmRvdy5fX3Rva2VuQ2FjaGUgPSB7XG4gICAgdG9rZW5zOiB1bmRlZmluZWQsXG4gICAgd3JpdGVFbmFibGVkOiB1bmRlZmluZWQsXG4gIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBhc2tXcml0ZSgpIHtcbiAgcmV0dXJuIChcbiAgICB0b2tlbkNhY2hlLnRva2VucyAhPT0gdW5kZWZpbmVkICYmIHRva2VuQ2FjaGUud3JpdGVFbmFibGVkID09PSB1bmRlZmluZWRcbiAgKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNhdmVUb2tlbnModG9rZW5zOiBBdXRoRGF0YSB8IG51bGwpIHtcbiAgdG9rZW5DYWNoZS50b2tlbnMgPSB0b2tlbnM7XG4gIGlmICh0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCkge1xuICAgIHRyeSB7XG4gICAgICBzdG9yYWdlLmhhc3NUb2tlbnMgPSBKU09OLnN0cmluZ2lmeSh0b2tlbnMpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgLy8gd3JpdGUgZmFpbGVkLCBpZ25vcmUgaXQuIEhhcHBlbnMgaWYgc3RvcmFnZSBpcyBmdWxsIG9yIHByaXZhdGUgbW9kZS5cbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZVdyaXRlKCkge1xuICB0b2tlbkNhY2hlLndyaXRlRW5hYmxlZCA9IHRydWU7XG4gIGlmICh0b2tlbkNhY2hlLnRva2Vucykge1xuICAgIHNhdmVUb2tlbnModG9rZW5DYWNoZS50b2tlbnMpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsb2FkVG9rZW5zKCkge1xuICBpZiAodG9rZW5DYWNoZS50b2tlbnMgPT09IHVuZGVmaW5lZCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBEZWxldGUgdGhlIG9sZCB0b2tlbiBjYWNoZS5cbiAgICAgIGRlbGV0ZSBzdG9yYWdlLnRva2VucztcbiAgICAgIGNvbnN0IHRva2VucyA9IHN0b3JhZ2UuaGFzc1Rva2VucztcbiAgICAgIGlmICh0b2tlbnMpIHtcbiAgICAgICAgdG9rZW5DYWNoZS50b2tlbnMgPSBKU09OLnBhcnNlKHRva2Vucyk7XG4gICAgICAgIHRva2VuQ2FjaGUud3JpdGVFbmFibGVkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRva2VuQ2FjaGUudG9rZW5zID0gbnVsbDtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRva2VuQ2FjaGUudG9rZW5zID0gbnVsbDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRva2VuQ2FjaGUudG9rZW5zO1xufVxuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEF1dGhQcm92aWRlciB7XG4gIG5hbWU6IHN0cmluZztcbiAgaWQ6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENyZWRlbnRpYWwge1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbmVkUGF0aCB7XG4gIHBhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGNvbnN0IGhhc3NVcmwgPSBgJHtsb2NhdGlvbi5wcm90b2NvbH0vLyR7bG9jYXRpb24uaG9zdH1gO1xuXG5leHBvcnQgY29uc3QgZ2V0U2lnbmVkUGF0aCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgcGF0aDogc3RyaW5nXG4pOiBQcm9taXNlPFNpZ25lZFBhdGg+ID0+IGhhc3MuY2FsbFdTKHsgdHlwZTogXCJhdXRoL3NpZ25fcGF0aFwiLCBwYXRoIH0pO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hBdXRoUHJvdmlkZXJzID0gKCkgPT5cbiAgZmV0Y2goXCIvYXV0aC9wcm92aWRlcnNcIiwge1xuICAgIGNyZWRlbnRpYWxzOiBcInNhbWUtb3JpZ2luXCIsXG4gIH0pO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgQ29ubmVjdGlvbiwgZ2V0Q29sbGVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IEhBU1NEb21FdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZUNvbmZpZyB7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB2aWV3czogTG92ZWxhY2VWaWV3Q29uZmlnW107XG4gIGJhY2tncm91bmQ/OiBzdHJpbmc7XG4gIHJlc291cmNlcz86IEFycmF5PHsgdHlwZTogXCJjc3NcIiB8IFwianNcIiB8IFwibW9kdWxlXCIgfCBcImh0bWxcIjsgdXJsOiBzdHJpbmcgfT47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTG92ZWxhY2VWaWV3Q29uZmlnIHtcbiAgaW5kZXg/OiBudW1iZXI7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBiYWRnZXM/OiBBcnJheTxzdHJpbmcgfCBMb3ZlbGFjZUJhZGdlQ29uZmlnPjtcbiAgY2FyZHM/OiBMb3ZlbGFjZUNhcmRDb25maWdbXTtcbiAgcGF0aD86IHN0cmluZztcbiAgaWNvbj86IHN0cmluZztcbiAgdGhlbWU/OiBzdHJpbmc7XG4gIHBhbmVsPzogYm9vbGVhbjtcbiAgYmFja2dyb3VuZD86IHN0cmluZztcbiAgdmlzaWJsZT86IGJvb2xlYW4gfCBTaG93Vmlld0NvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dWaWV3Q29uZmlnIHtcbiAgdXNlcj86IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBMb3ZlbGFjZUJhZGdlQ29uZmlnIHtcbiAgdHlwZT86IHN0cmluZztcbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExvdmVsYWNlQ2FyZENvbmZpZyB7XG4gIGluZGV4PzogbnVtYmVyO1xuICB2aWV3X2luZGV4PzogbnVtYmVyO1xuICB0eXBlOiBzdHJpbmc7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUb2dnbGVBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInRvZ2dsZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJjYWxsLXNlcnZpY2VcIjtcbiAgc2VydmljZTogc3RyaW5nO1xuICBzZXJ2aWNlX2RhdGE/OiB7XG4gICAgZW50aXR5X2lkPzogc3RyaW5nIHwgW3N0cmluZ107XG4gICAgW2tleTogc3RyaW5nXTogYW55O1xuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE5hdmlnYXRlQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJuYXZpZ2F0ZVwiO1xuICBuYXZpZ2F0aW9uX3BhdGg6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBVcmxBY3Rpb25Db25maWcgZXh0ZW5kcyBCYXNlQWN0aW9uQ29uZmlnIHtcbiAgYWN0aW9uOiBcInVybFwiO1xuICB1cmxfcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIE1vcmVJbmZvQWN0aW9uQ29uZmlnIGV4dGVuZHMgQmFzZUFjdGlvbkNvbmZpZyB7XG4gIGFjdGlvbjogXCJtb3JlLWluZm9cIjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBOb0FjdGlvbkNvbmZpZyBleHRlbmRzIEJhc2VBY3Rpb25Db25maWcge1xuICBhY3Rpb246IFwibm9uZVwiO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEJhc2VBY3Rpb25Db25maWcge1xuICBjb25maXJtYXRpb24/OiBDb25maXJtYXRpb25SZXN0cmljdGlvbkNvbmZpZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maXJtYXRpb25SZXN0cmljdGlvbkNvbmZpZyB7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGV4ZW1wdGlvbnM/OiBSZXN0cmljdGlvbkNvbmZpZ1tdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc3RyaWN0aW9uQ29uZmlnIHtcbiAgdXNlcjogc3RyaW5nO1xufVxuXG5leHBvcnQgdHlwZSBBY3Rpb25Db25maWcgPVxuICB8IFRvZ2dsZUFjdGlvbkNvbmZpZ1xuICB8IENhbGxTZXJ2aWNlQWN0aW9uQ29uZmlnXG4gIHwgTmF2aWdhdGVBY3Rpb25Db25maWdcbiAgfCBVcmxBY3Rpb25Db25maWdcbiAgfCBNb3JlSW5mb0FjdGlvbkNvbmZpZ1xuICB8IE5vQWN0aW9uQ29uZmlnO1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDb25maWcgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIGZvcmNlOiBib29sZWFuXG4pOiBQcm9taXNlPExvdmVsYWNlQ29uZmlnPiA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJsb3ZlbGFjZS9jb25maWdcIixcbiAgICBmb3JjZSxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBzYXZlQ29uZmlnID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb25maWc6IExvdmVsYWNlQ29uZmlnXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImxvdmVsYWNlL2NvbmZpZy9zYXZlXCIsXG4gICAgY29uZmlnLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUxvdmVsYWNlVXBkYXRlcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICgpID0+IHZvaWRcbikgPT4gY29ubi5zdWJzY3JpYmVFdmVudHMob25DaGFuZ2UsIFwibG92ZWxhY2VfdXBkYXRlZFwiKTtcblxuZXhwb3J0IGNvbnN0IGdldExvdmVsYWNlQ29sbGVjdGlvbiA9IChjb25uOiBDb25uZWN0aW9uKSA9PlxuICBnZXRDb2xsZWN0aW9uKFxuICAgIGNvbm4sXG4gICAgXCJfbG92ZWxhY2VcIixcbiAgICAoY29ubjIpID0+IGZldGNoQ29uZmlnKGNvbm4yLCBmYWxzZSksXG4gICAgKF9jb25uLCBzdG9yZSkgPT5cbiAgICAgIHN1YnNjcmliZUxvdmVsYWNlVXBkYXRlcyhjb25uLCAoKSA9PlxuICAgICAgICBmZXRjaENvbmZpZyhjb25uLCBmYWxzZSkudGhlbigoY29uZmlnKSA9PiBzdG9yZS5zZXRTdGF0ZShjb25maWcsIHRydWUpKVxuICAgICAgKVxuICApO1xuXG5leHBvcnQgaW50ZXJmYWNlIFdpbmRvd1dpdGhMb3ZlbGFjZVByb20gZXh0ZW5kcyBXaW5kb3cge1xuICBsbENvbmZQcm9tPzogUHJvbWlzZTxMb3ZlbGFjZUNvbmZpZz47XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQWN0aW9uSGFuZGxlck9wdGlvbnMge1xuICBoYXNIb2xkPzogYm9vbGVhbjtcbiAgaGFzRG91YmxlQ2xpY2s/OiBib29sZWFuO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGlvbkhhbmRsZXJEZXRhaWwge1xuICBhY3Rpb246IHN0cmluZztcbn1cblxuZXhwb3J0IHR5cGUgQWN0aW9uSGFuZGxlckV2ZW50ID0gSEFTU0RvbUV2ZW50PEFjdGlvbkhhbmRsZXJEZXRhaWw+O1xuIiwiaW1wb3J0IHsgY3JlYXRlQ29sbGVjdGlvbiwgQ29ubmVjdGlvbiB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcbmltcG9ydCB7IFBhbmVscyB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5jb25zdCBmZXRjaFBhbmVscyA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJnZXRfcGFuZWxzXCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVVcGRhdGVzID0gKGNvbm4sIHN0b3JlKSA9PlxuICBjb25uLnN1YnNjcmliZUV2ZW50cyhcbiAgICAoKSA9PiBmZXRjaFBhbmVscyhjb25uKS50aGVuKChwYW5lbHMpID0+IHN0b3JlLnNldFN0YXRlKHBhbmVscywgdHJ1ZSkpLFxuICAgIFwicGFuZWxzX3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlUGFuZWxzID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHBhbmVsczogUGFuZWxzKSA9PiB2b2lkXG4pID0+XG4gIGNyZWF0ZUNvbGxlY3Rpb248UGFuZWxzPihcbiAgICBcIl9wbmxcIixcbiAgICBmZXRjaFBhbmVscyxcbiAgICBzdWJzY3JpYmVVcGRhdGVzLFxuICAgIGNvbm4sXG4gICAgb25DaGFuZ2VcbiAgKTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBUaGVtZXMgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgZmV0Y2hUaGVtZXMgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiZnJvbnRlbmQvZ2V0X3RoZW1lc1wiLFxuICB9KTtcblxuY29uc3Qgc3Vic2NyaWJlVXBkYXRlcyA9IChjb25uLCBzdG9yZSkgPT5cbiAgY29ubi5zdWJzY3JpYmVFdmVudHMoXG4gICAgKGV2ZW50KSA9PiBzdG9yZS5zZXRTdGF0ZShldmVudC5kYXRhLCB0cnVlKSxcbiAgICBcInRoZW1lc191cGRhdGVkXCJcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZVRoZW1lcyA9IChcbiAgY29ubjogQ29ubmVjdGlvbixcbiAgb25DaGFuZ2U6ICh0aGVtZXM6IFRoZW1lcykgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPFRoZW1lcz4oXG4gICAgXCJfdGhtXCIsXG4gICAgZmV0Y2hUaGVtZXMsXG4gICAgc3Vic2NyaWJlVXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQge1xuICBnZXRVc2VyLFxuICBDb25uZWN0aW9uLFxuICBnZXRDb2xsZWN0aW9uLFxufSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgdXNlckNvbGxlY3Rpb24gPSAoY29ubjogQ29ubmVjdGlvbikgPT5cbiAgZ2V0Q29sbGVjdGlvbihcbiAgICBjb25uLFxuICAgIFwiX3VzclwiLFxuICAgICgpID0+IGdldFVzZXIoY29ubikgYXMgUHJvbWlzZTxDdXJyZW50VXNlcj4sXG4gICAgdW5kZWZpbmVkXG4gICk7XG5cbmV4cG9ydCBjb25zdCBzdWJzY3JpYmVVc2VyID0gKFxuICBjb25uOiBDb25uZWN0aW9uLFxuICBvbkNoYW5nZTogKHVzZXI6IEN1cnJlbnRVc2VyKSA9PiB2b2lkXG4pID0+IHVzZXJDb2xsZWN0aW9uKGNvbm4pLnN1YnNjcmliZShvbkNoYW5nZSk7XG4iLCJpbXBvcnQge1xuICBnZXRBdXRoLFxuICBjcmVhdGVDb25uZWN0aW9uLFxuICBzdWJzY3JpYmVDb25maWcsXG4gIHN1YnNjcmliZUVudGl0aWVzLFxuICBzdWJzY3JpYmVTZXJ2aWNlcyxcbiAgRVJSX0lOVkFMSURfQVVUSCxcbiAgQXV0aCxcbiAgQ29ubmVjdGlvbixcbn0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5pbXBvcnQgeyBsb2FkVG9rZW5zLCBzYXZlVG9rZW5zIH0gZnJvbSBcIi4uL2NvbW1vbi9hdXRoL3Rva2VuX3N0b3JhZ2VcIjtcbmltcG9ydCB7IHN1YnNjcmliZVBhbmVscyB9IGZyb20gXCIuLi9kYXRhL3dzLXBhbmVsc1wiO1xuaW1wb3J0IHsgc3Vic2NyaWJlVGhlbWVzIH0gZnJvbSBcIi4uL2RhdGEvd3MtdGhlbWVzXCI7XG5pbXBvcnQgeyBzdWJzY3JpYmVVc2VyIH0gZnJvbSBcIi4uL2RhdGEvd3MtdXNlclwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgaGFzc1VybCB9IGZyb20gXCIuLi9kYXRhL2F1dGhcIjtcbmltcG9ydCB7IGZldGNoQ29uZmlnLCBXaW5kb3dXaXRoTG92ZWxhY2VQcm9tIH0gZnJvbSBcIi4uL2RhdGEvbG92ZWxhY2VcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgV2luZG93IHtcbiAgICBoYXNzQ29ubmVjdGlvbjogUHJvbWlzZTx7IGF1dGg6IEF1dGg7IGNvbm46IENvbm5lY3Rpb24gfT47XG4gICAgaGFzc05vQXV0aDogc3RyaW5nO1xuICB9XG59XG5cbmNvbnN0IGlzRXh0ZXJuYWwgPSBsb2NhdGlvbi5zZWFyY2guaW5jbHVkZXMoXCJleHRlcm5hbF9hdXRoPTFcIik7XG5cbmNvbnN0IGF1dGhQcm9tID0gaXNFeHRlcm5hbFxuICA/ICgpID0+XG4gICAgICBpbXBvcnQoXG4gICAgICAgIC8qIHdlYnBhY2tDaHVua05hbWU6IFwiZXh0ZXJuYWxfYXV0aFwiICovIFwiLi4vZXh0ZXJuYWxfYXBwL2V4dGVybmFsX2F1dGhcIlxuICAgICAgKS50aGVuKCh7IGNyZWF0ZUV4dGVybmFsQXV0aCB9KSA9PiBjcmVhdGVFeHRlcm5hbEF1dGgoaGFzc1VybCkpXG4gIDogKCkgPT5cbiAgICAgIGdldEF1dGgoe1xuICAgICAgICBoYXNzVXJsLFxuICAgICAgICBzYXZlVG9rZW5zLFxuICAgICAgICBsb2FkVG9rZW5zOiAoKSA9PiBQcm9taXNlLnJlc29sdmUobG9hZFRva2VucygpKSxcbiAgICAgICAgYXV0aENvZGU6IHdpbmRvdy5oYXNzTm9BdXRoLCAvLyBmb3IgSW9CXG4gICAgICB9KTtcblxuY29uc3QgY29ublByb20gPSBhc3luYyAoYXV0aCkgPT4ge1xuICB0cnkge1xuICAgIGNvbnN0IGNvbm4gPSBhd2FpdCBjcmVhdGVDb25uZWN0aW9uKHsgYXV0aCB9KTtcblxuICAgIC8vIENsZWFyIHVybCBpZiB3ZSBoYXZlIGJlZW4gYWJsZSB0byBlc3RhYmxpc2ggYSBjb25uZWN0aW9uXG4gICAgaWYgKGxvY2F0aW9uLnNlYXJjaC5pbmNsdWRlcyhcImF1dGhfY2FsbGJhY2s9MVwiKSkge1xuICAgICAgaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgXCJcIiwgbG9jYXRpb24ucGF0aG5hbWUpO1xuICAgIH1cblxuICAgIHJldHVybiB7IGF1dGgsIGNvbm4gfTtcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgaWYgKGVyciAhPT0gRVJSX0lOVkFMSURfQVVUSCkge1xuICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbiAgICAvLyBXZSBjYW4gZ2V0IGludmFsaWQgYXV0aCBpZiBhdXRoIHRva2VucyB3ZXJlIHN0b3JlZCB0aGF0IGFyZSBubyBsb25nZXIgdmFsaWRcbiAgICAvLyBDbGVhciBzdG9yZWQgdG9rZW5zLlxuICAgIGlmICghaXNFeHRlcm5hbCkge1xuICAgICAgc2F2ZVRva2VucyhudWxsKTtcbiAgICB9XG4gICAgYXV0aCA9IGF3YWl0IGF1dGhQcm9tKCk7XG4gICAgY29uc3QgY29ubiA9IGF3YWl0IGNyZWF0ZUNvbm5lY3Rpb24oeyBhdXRoIH0pO1xuICAgIHJldHVybiB7IGF1dGgsIGNvbm4gfTtcbiAgfVxufTtcblxuaWYgKF9fREVWX18pIHtcbiAgcGVyZm9ybWFuY2UubWFyayhcImhhc3Mtc3RhcnRcIik7XG59XG53aW5kb3cuaGFzc0Nvbm5lY3Rpb24gPSBhdXRoUHJvbSgpLnRoZW4oY29ublByb20pO1xuXG4vLyBTdGFydCBmZXRjaGluZyBzb21lIG9mIHRoZSBkYXRhIHRoYXQgd2Ugd2lsbCBuZWVkLlxud2luZG93Lmhhc3NDb25uZWN0aW9uLnRoZW4oKHsgY29ubiB9KSA9PiB7XG4gIGNvbnN0IG5vb3AgPSAoKSA9PiB7XG4gICAgLy8gZG8gbm90aGluZ1xuICB9O1xuICBzdWJzY3JpYmVFbnRpdGllcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlQ29uZmlnKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVTZXJ2aWNlcyhjb25uLCBub29wKTtcbiAgc3Vic2NyaWJlUGFuZWxzKGNvbm4sIG5vb3ApO1xuICBzdWJzY3JpYmVUaGVtZXMoY29ubiwgbm9vcCk7XG4gIHN1YnNjcmliZVVzZXIoY29ubiwgbm9vcCk7XG5cbiAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lID09PSBcIi9cIiB8fCBsb2NhdGlvbi5wYXRobmFtZS5zdGFydHNXaXRoKFwiL2xvdmVsYWNlL1wiKSkge1xuICAgICh3aW5kb3cgYXMgV2luZG93V2l0aExvdmVsYWNlUHJvbSkubGxDb25mUHJvbSA9IGZldGNoQ29uZmlnKGNvbm4sIGZhbHNlKTtcbiAgfVxufSk7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgKGUpID0+IHtcbiAgY29uc3QgaG9tZUFzc2lzdGFudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJob21lLWFzc2lzdGFudFwiKSBhcyBhbnk7XG4gIGlmIChcbiAgICBob21lQXNzaXN0YW50ICYmXG4gICAgaG9tZUFzc2lzdGFudC5oYXNzICYmXG4gICAgKGhvbWVBc3Npc3RhbnQuaGFzcyBhcyBIb21lQXNzaXN0YW50KS5jYWxsU2VydmljZVxuICApIHtcbiAgICBob21lQXNzaXN0YW50Lmhhc3MuY2FsbFNlcnZpY2UoXCJzeXN0ZW1fbG9nXCIsIFwid3JpdGVcIiwge1xuICAgICAgbG9nZ2VyOiBgZnJvbnRlbmQuJHtcbiAgICAgICAgX19ERVZfXyA/IFwianNfZGV2XCIgOiBcImpzXCJcbiAgICAgIH0uJHtfX0JVSUxEX199LiR7X19WRVJTSU9OX18ucmVwbGFjZShcIi5cIiwgXCJcIil9YCxcbiAgICAgIG1lc3NhZ2U6IGAke2UuZmlsZW5hbWV9OiR7ZS5saW5lbm99OiR7ZS5jb2xub30gJHtlLm1lc3NhZ2V9YCxcbiAgICB9KTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUM2V0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFwWkE7QUFDQTtBQURBO0FBNkRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQzlOQTtBQ3VFQTtBQUVBO0FBQUE7QUFEQTtBQzlEQTtBQUNBO0FBREE7QUNpRUE7QUFjQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQU9BO0FBRUE7QUFJQTtBQUFBO0FBS0E7QUFBQTtBQUlBO0FBR0E7QUFLQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBSUE7QUFHQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBRUE7QUFZQTtBQUFBO0FGM0dBO0FBRUE7QUFEQTtBQUNBO0FFMkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBRjNGQTtBQURBO0FBQ0E7QUVvR0E7QUFLQTtBQUdBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBYUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBTUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQQTtBQUNBO0FBU0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBTUE7QUFFQTtBQUVBO0FBUUE7QUFDQTtBQURBO0FBTUE7QUFVQTtBQUNBO0FBREE7QUFNQTtBQWxDQTtBQXNDQTtBQVdBO0FBQ0E7QUFEQTtBQUtBO0FGcE5BO0FBQ0E7QUFDQTtBQUFBO0FEMUZBO0FDMEZBO0FBSEE7QUVzTkE7QUFJQTtBQUNBO0FBR0E7QUFHQTtBQUFBO0FBSEE7QUFLQTtBQU9BO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFDQTtBQUFBO0FIbFVBO0FHdVVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQ3ZIQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXdDQTtBQUlBO0FBNUtBO0FBdkJBO0FBR0E7QUFzQkE7QUE4S0E7QUFJQTtBQUNBO0FBREE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQXRCQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFoQkE7QUMvT0E7QUFHQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBRHlPQTtBQURBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQXhCQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FEd0dBO0FDMU9BO0FBQUE7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBSjVHQTtBQUNBO0FBREE7QUltSEE7QUFLQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQVVBO0FBR0E7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QURrTUE7QUMvUkE7QUFDQTtBRDhSQTtBQzVSQTtBQUNBO0FBQ0E7QUEyRkE7QUFBQTtBQUNBO0FBRUE7QUFGQTtBQWNBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFOQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQU1BO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFGQTtBQUFBO0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU1BO0FBQUE7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBRW5NQTtBQ05BO0FBQ0E7QUFLQTtBQUFBO0FBQUE7QURBQTtBQUNBO0FBQUE7QUFlQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFTQTtBQUFBO0FBRUE7QUFDQTtBQVNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFBQTtBQUFBO0FBaUJBO0FBQUE7QUFDQTtBQXBFQTtBQUNBO0FBUUE7QUE2REE7QUFBQTtBQUFBO0FBN0NBO0FDdkJBO0FBTEE7QUFPQTtBQUNBO0FBQUE7QUFBQTtBQVJBO0FBVUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFEQTtBQUtBO0FBSUE7QUFRQTtBQUdBO0FBS0E7QUFBQTtBQUlBO0FBTUE7QUFBQTtBQUVBO0FBQUE7QUF2Q0E7QUE2Q0E7QURqRUE7QUM0RUE7QUFHQTtBRC9FQTtBRWhCQTtBUE9BO0FBREE7QUFDQTtBS1NBO0FFYkE7QVBnQkE7QUFEQTtBQUNBO0FLSEE7QUVWQTtBUE9BO0FBREE7QUFDQTtBS0dBO0FFUEE7QVBnQkE7QUFEQTtBQUNBO0FLVEE7QUVBQTtBUHVCQTtBQUdBO0FBQUE7QUFDQTtBQUZBO0FBR0E7QU96QkE7QUFBQTtBQUNBO0FDWkE7QUFFQTtBQUtBO0FBREE7QUFLQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWtCQTtBQUxBO0FBTUE7QUFBQTtBQUNBO0FDdkJBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBTUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFYQTtBQWtCQTtBQUxBO0FBTUE7QUFBQTtBQW5CQTtBQ2xDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFDQTtBQURBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBRDJCQTtBQ3hCQTtBQUVBO0FBMUJBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFBQTtBQWdCQTtBQUFBO0FBQ0E7QURxQkE7QUNsQkE7QUFDQTtBRGlCQTtBQ2JBO0FBQ0E7QURZQTtBRW5DQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUY0QkE7QUV2Q0E7QUFBQTtBVkVBO0FBRUE7QUFBQTtBQVNBO0FBQUE7QUFHQTtBQUFBO0FBWkE7QUFrQkE7QUFrR0E7QUF6RkE7QUFBQTtBQUFBO0FBV0E7QUFTQTtBQVFBO0FBQUE7QUFLQTtBQUVBO0FGakZBO0FFOENBO0FBd0NBO0FBQUE7QUFBQTtBQUtBO0FEdkZBO0FBQ0E7QUFGQTtBQ3dGQTtBQUNBO0FBREE7QUFBQTtBQUZBO0FBQ0E7QUFEQTtBQUFBO0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFqREE7QUFxREE7QUFBQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFJQTtBQWJBO0FBQ0E7QUFnQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBWUE7QUFPQTtBQUdBO0FBQUE7QVU3SEE7QUFDQTs7Ozs7Ozs7Ozs7OztBQ2JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJGQTtBQUtBO0FBQ0E7QUFGQTtBQUtBO0FBS0E7QUFDQTtBQUZBO0FBS0E7QUFLQTs7Ozs7Ozs7Ozs7O0FDbkhBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBREE7QUFDQTtBQUdBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7QUNkQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFRQTs7Ozs7Ozs7Ozs7O0FDZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBU0E7QUFFQSwyTkFHQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUtBO0FBQ0E7QUFHQTtBQUpBO0FBTUE7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9