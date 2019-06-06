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
/******/ 			if(installedChunks[chunkId]) {
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
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
/*! exports provided: createConnection, getAuth, genClientId, genExpires, Auth, getCollection, createCollection, Connection, subscribeConfig, subscribeServices, entitiesColl, subscribeEntities, ERR_CANNOT_CONNECT, ERR_INVALID_AUTH, ERR_CONNECTION_LOST, ERR_HASS_HOST_REQUIRED, getStates, getServices, getConfig, getUser, callService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConnection", function() { return R; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuth", function() { return c; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genClientId", function() { return a; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "genExpires", function() { return f; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Auth", function() { return d; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return l; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createCollection", function() { return m; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Connection", function() { return i; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfig", function() { return w; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeServices", function() { return L; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "entitiesColl", function() { return I; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntities", function() { return C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CANNOT_CONNECT", function() { return t; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_INVALID_AUTH", function() { return n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_CONNECTION_LOST", function() { return r; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ERR_HASS_HOST_REQUIRED", function() { return s; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStates", function() { return p; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getServices", function() { return b; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfig", function() { return g; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return y; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "callService", function() { return k; });
function e(e, t) {
  try {
    var n = e();
  } catch (e) {
    return t(e);
  }

  return n && n.then ? n.then(void 0, t) : n;
}

var t = 1,
    n = 2,
    r = 3,
    s = 4;

function o(e) {
  return {
    type: "unsubscribe_events",
    subscription: e
  };
}

var i = function (e, t) {
  this.options = t, this.commandId = 1, this.commands = new Map(), this.eventListeners = new Map(), this.closeRequested = !1, this.setSocket(e);
};

i.prototype.setSocket = function (e) {
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
}, i.prototype.addEventListener = function (e, t) {
  var n = this.eventListeners.get(e);
  n || this.eventListeners.set(e, n = []), n.push(t);
}, i.prototype.removeEventListener = function (e, t) {
  var n = this.eventListeners.get(e);

  if (n) {
    var r = n.indexOf(t);
    -1 !== r && n.splice(r, 1);
  }
}, i.prototype.fireEvent = function (e, t) {
  var n = this;
  (this.eventListeners.get(e) || []).forEach(function (e) {
    return e(n, t);
  });
}, i.prototype.close = function () {
  this.closeRequested = !0, this.socket.close();
}, i.prototype.subscribeEvents = function (e, t) {
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
}, i.prototype.ping = function () {
  return this.sendMessagePromise({
    type: "ping"
  });
}, i.prototype.sendMessage = function (e, t) {
  t || (t = this._genCmdId()), e.id = t, this.socket.send(JSON.stringify(e));
}, i.prototype.sendMessagePromise = function (e) {
  var t = this;
  return new Promise(function (n, r) {
    var s = t._genCmdId();

    t.commands.set(s, {
      resolve: n,
      reject: r
    }), t.sendMessage(e, s);
  });
}, i.prototype.subscribeMessage = function (e, t) {
  try {
    var n,
        r = this,
        s = r._genCmdId();

    return Promise.resolve(new Promise(function (i, c) {
      n = {
        resolve: i,
        reject: c,
        callback: e,
        subscribe: function () {
          return r.subscribeMessage(e, t);
        },
        unsubscribe: function () {
          try {
            return Promise.resolve(r.sendMessagePromise(o(s))).then(function () {
              r.commands.delete(s);
            });
          } catch (e) {
            return Promise.reject(e);
          }
        }
      }, r.commands.set(s, n);

      try {
        r.sendMessage(t, s);
      } catch (e) {}
    })).then(function () {
      return function () {
        return n.unsubscribe();
      };
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, i.prototype._handleMessage = function (e) {
  var t = JSON.parse(e.data),
      n = this.commands.get(t.id);

  switch (t.type) {
    case "event":
      n ? n.callback(t.event) : (console.warn("Received event for unknown subscription " + t.id + ". Unsubscribing."), this.sendMessagePromise(o(t.id)));
      break;

    case "result":
      n && (t.success ? (n.resolve(t.result), "subscribe" in n || this.commands.delete(t.id)) : (n.reject(t.error), this.commands.delete(t.id)));
      break;

    case "pong":
      n ? (n.resolve(), this.commands.delete(t.id)) : console.warn("Received unknown pong response " + t.id);
  }
}, i.prototype._handleClose = function (t) {
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
        s = function (t) {
      var o = n;
      setTimeout(function () {
        try {
          var n = e(function () {
            return Promise.resolve(r.createSocket(r)).then(function (e) {
              o.setSocket(e);
            });
          }, function (e) {
            2 === e ? o.fireEvent("reconnect-error", e) : s(t + 1);
          });
          return Promise.resolve(n && n.then ? n.then(function () {}) : void 0);
        } catch (e) {
          return Promise.reject(e);
        }
      }, 1e3 * Math.min(t, 5));
    };

    s(0);
  }
}, i.prototype._genCmdId = function () {
  return ++this.commandId;
};

var c = function (t) {
  void 0 === t && (t = {});

  try {
    function n() {
      function n() {
        function e() {
          if (r) return new d(r, t.saveTokens);
          if (void 0 === o) throw s;
          return function (e, t, n, r) {
            n += (n.includes("?") ? "&" : "?") + "auth_callback=1", document.location.href = function (e, t, n, r) {
              var s = e + "/auth/authorize?response_type=code&client_id=" + encodeURIComponent(t) + "&redirect_uri=" + encodeURIComponent(n);
              return r && (s += "&state=" + encodeURIComponent(r)), s;
            }(e, t, n, r);
          }(o, i, t.redirectUrl || location.protocol + "//" + location.host + location.pathname + location.search, btoa(JSON.stringify({
            hassUrl: o,
            clientId: i
          }))), new Promise(function () {});
        }

        var n = function () {
          if (!r && t.loadTokens) return Promise.resolve(t.loadTokens()).then(function (e) {
            r = e;
          });
        }();

        return n && n.then ? n.then(e) : e();
      }

      var c = function () {
        if (!r) {
          var n = function (e) {
            for (var t = {}, n = location.search.substr(1).split("&"), r = 0; r < n.length; r++) {
              var s = n[r].split("="),
                  o = decodeURIComponent(s[0]),
                  i = s.length > 1 ? decodeURIComponent(s[1]) : void 0;
              t[o] = i;
            }

            return t;
          }(),
              s = function () {
            if ("auth_callback" in n) {
              var s = JSON.parse(atob(n.state)),
                  o = e(function () {
                return Promise.resolve(h(s.hassUrl, s.clientId, n.code)).then(function (e) {
                  r = e, t.saveTokens && t.saveTokens(r);
                });
              }, function (e) {
                console.log("Unable to fetch access token", e);
              });
              if (o && o.then) return o.then(function () {});
            }
          }();

          if (s && s.then) return s.then(function () {});
        }
      }();

      return c && c.then ? c.then(n) : n();
    }

    var r,
        o = t.hassUrl;
    o && "/" === o[o.length - 1] && (o = o.substr(0, o.length - 1));

    var i = t.clientId || a(),
        c = function () {
      if (!r && t.authCode && o && i) {
        var n = e(function () {
          return Promise.resolve(h(o, i, t.authCode)).then(function (e) {
            r = e, t.saveTokens && t.saveTokens(r);
          });
        }, function (e) {
          console.log("Unable to fetch access token", e);
        });
        if (n && n.then) return n.then(function () {});
      }
    }();

    return Promise.resolve(c && c.then ? c.then(n) : n());
  } catch (e) {
    return Promise.reject(e);
  }
},
    u = function (e, t, n) {
  try {
    var r = new FormData();
    return r.append("client_id", t), Object.keys(n).forEach(function (e) {
      r.append(e, n[e]);
    }), Promise.resolve(fetch(e + "/auth/token", {
      method: "POST",
      credentials: "same-origin",
      body: r
    })).then(function (n) {
      if (!n.ok) throw 400 === n.status || 403 === n.status ? 2 : new Error("Unable to fetch tokens");
      return Promise.resolve(n.json()).then(function (n) {
        return n.hassUrl = e, n.clientId = t, n.expires = f(n.expires_in), n;
      });
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    a = function () {
  return location.protocol + "//" + location.host + "/";
},
    f = function (e) {
  return 1e3 * e + Date.now();
};

function h(e, t, n) {
  return u(e, t, {
    code: n,
    grant_type: "authorization_code"
  });
}

var d = function (e, t) {
  this.data = e, this._saveTokens = t;
},
    v = {
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

v.wsUrl.get = function () {
  return "ws" + this.data.hassUrl.substr(4) + "/api/websocket";
}, v.accessToken.get = function () {
  return this.data.access_token;
}, v.expired.get = function () {
  return Date.now() > this.data.expires;
}, d.prototype.refreshAccessToken = function () {
  try {
    var e = this;
    return Promise.resolve(u(e.data.hassUrl, e.data.clientId, {
      grant_type: "refresh_token",
      refresh_token: e.data.refresh_token
    })).then(function (t) {
      t.refresh_token = e.data.refresh_token, e.data = t, e._saveTokens && e._saveTokens(t);
    });
  } catch (e) {
    return Promise.reject(e);
  }
}, d.prototype.revoke = function () {
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
}, Object.defineProperties(d.prototype, v);

var l = function (e, t, n, r) {
  if (e[t]) return e[t];

  var s,
      o = 0,
      i = function (e) {
    var t = [];

    function n(n, r) {
      e = r ? n : Object.assign({}, e, n);

      for (var s = t, o = 0; o < s.length; o++) s[o](e);
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
          for (var n = arguments, s = [e], o = 0; o < arguments.length; o++) s.push(n[o]);

          var i = t.apply(this, s);
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
      1 == ++o && (r && (s = r(e, i)), e.addEventListener("ready", u), u());
      var n = i.subscribe(t);
      return void 0 !== i.state && setTimeout(function () {
        return t(i.state);
      }, 0), function () {
        n(), --o || (s && s.then(function (e) {
          e();
        }), e.removeEventListener("ready", c));
      };
    }
  }, e[t];
},
    m = function (e, t, n, r, s) {
  return l(r, e, t, n).subscribe(s);
},
    p = function (e) {
  return e.sendMessagePromise({
    type: "get_states"
  });
},
    b = function (e) {
  return e.sendMessagePromise({
    type: "get_services"
  });
},
    g = function (e) {
  return e.sendMessagePromise({
    type: "get_config"
  });
},
    y = function (e) {
  return e.sendMessagePromise({
    type: "auth/current_user"
  });
},
    k = function (e, t, n, r) {
  return e.sendMessagePromise(function (e, t, n) {
    var r = {
      type: "call_service",
      domain: e,
      service: t
    };
    return n && (r.service_data = n), r;
  }(t, n, r));
};

function _(e, t) {
  return void 0 === e ? null : {
    components: e.components.concat(t.data.component)
  };
}

var P = function (e) {
  return g(e);
},
    E = function (e, t) {
  return Promise.all([e.subscribeEvents(t.action(_), "component_loaded"), e.subscribeEvents(function () {
    return P(e).then(function (e) {
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
    w = function (e, t) {
  return function (e) {
    return l(e, "_cnf", P, E);
  }(e).subscribe(t);
};

function j(e, t) {
  var n, r;
  if (void 0 === e) return null;
  var s = t.data,
      o = s.domain,
      i = Object.assign({}, e[o], ((n = {})[s.service] = {
    description: "",
    fields: {}
  }, n));
  return (r = {})[o] = i, r;
}

function T(e, t) {
  var n;
  if (void 0 === e) return null;
  var r = t.data,
      s = r.domain,
      o = r.service,
      i = e[s];
  if (!(i && o in i)) return null;
  var c = {};
  return Object.keys(i).forEach(function (e) {
    e !== o && (c[e] = i[e]);
  }), (n = {})[s] = c, n;
}

var S = function (e) {
  return b(e);
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
    return l(e, "_srv", S, M);
  }(e).subscribe(t);
},
    U = function (e) {
  try {
    return Promise.resolve(p(e)).then(function (e) {
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
    O = function (e, t) {
  return e.subscribeEvents(function (e) {
    return function (t, n) {
      var r,
          s = t.state;

      if (void 0 !== s) {
        var o = e.data,
            i = o.entity_id,
            c = o.new_state;
        if (c) t.setState(((r = {})[c.entity_id] = c, r));else {
          var u = Object.assign({}, s);
          delete u[i], t.setState(u, !0);
        }
      }
    }(t);
  }, "state_changed");
},
    I = function (e) {
  return l(e, "_ent", U, O);
},
    C = function (e, t) {
  return I(e).subscribe(t);
},
    R = function (e) {
  try {
    var t = Object.assign({}, x, e);
    return Promise.resolve(t.createSocket(t)).then(function (e) {
      return new i(e, t);
    });
  } catch (e) {
    return Promise.reject(e);
  }
},
    x = {
  setupRetry: 0,
  createSocket: function (t) {
    if (!t.auth) throw s;
    var n = t.auth,
        r = n.expired ? n.refreshAccessToken().then(function () {
      r = void 0;
    }, function () {
      r = void 0;
    }) : void 0,
        o = n.wsUrl;
    return new Promise(function (s, i) {
      return function t(s, i, c) {
        var u = new WebSocket(o),
            a = !1,
            f = function () {
          if (u.removeEventListener("close", f), a) c(2);else if (0 !== s) {
            var e = -1 === s ? -1 : s - 1;
            setTimeout(function () {
              return t(e, i, c);
            }, 1e3);
          } else c(1);
        },
            h = function (t) {
          try {
            var s = e(function () {
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
            return Promise.resolve(s && s.then ? s.then(function () {}) : void 0);
          } catch (e) {
            return Promise.reject(e);
          }
        },
            d = function (e) {
          try {
            switch (JSON.parse(e.data).type) {
              case "auth_invalid":
                a = !0, u.close();
                break;

              case "auth_ok":
                u.removeEventListener("open", h), u.removeEventListener("message", d), u.removeEventListener("close", f), u.removeEventListener("error", f), i(u);
            }

            return;
          } catch (e) {
            return Promise.reject(e);
          }
        };

        u.addEventListener("open", h), u.addEventListener("message", d), u.addEventListener("close", f), u.addEventListener("error", f);
      }(t.setupRetry, s, i);
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
});
window.addEventListener("error", e => {
  const homeAssistant = document.querySelector("home-assistant");

  if (homeAssistant && homeAssistant.hass && homeAssistant.hass.callService) {
    homeAssistant.hass.callService("system_log", "write", {
      logger: `frontend.${ true ? "js_dev" : undefined}.${"latest"}.${"20190604.0".replace(".", "")}`,
      message: `${e.filename}:${e.lineno}:${e.colno} ${e.message}`
    });
  }
});

/***/ })

/******/ });
//# sourceMappingURL=core.js.map