(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["import-href-polyfill"],{

/***/ "./src/resources/html-import/import-href.js":
/*!**************************************************!*\
  !*** ./src/resources/html-import/import-href.js ***!
  \**************************************************/
/*! exports provided: importHref, importHrefPromise */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importHref", function() { return importHref; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "importHrefPromise", function() { return importHrefPromise; });
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfill */ "./src/resources/html-import/polyfill.js");
/* harmony import */ var _polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* eslint-disable */

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
// run a callback when HTMLImports are ready or immediately if
// this api is not available.

function whenImportsReady(cb) {
  if (window.HTMLImports) {
    HTMLImports.whenReady(cb);
  } else {
    cb();
  }
}
/**
 * Convenience method for importing an HTML document imperatively.
 *
 * This method creates a new `<link rel="import">` element with
 * the provided URL and appends it to the document to start loading.
 * In the `onload` callback, the `import` property of the `link`
 * element will contain the imported document contents.
 *
 * @param {string} href URL to document to load.
 * @param {?function(!Event):void=} onload Callback to notify when an import successfully
 *   loaded.
 * @param {?function(!ErrorEvent):void=} onerror Callback to notify when an import
 *   unsuccessfully loaded.
 * @param {boolean=} optAsync True if the import should be loaded `async`.
 *   Defaults to `false`.
 * @return {!HTMLLinkElement} The link element for the URL to be loaded.
 */


var importHref = function importHref(href, onload, onerror, optAsync) {
  var link
  /** @type {HTMLLinkElement} */
  = document.head.querySelector('link[href="' + href + '"][import-href]');

  if (!link) {
    link =
    /** @type {HTMLLinkElement} */
    document.createElement("link");
    link.rel = "import";
    link.href = href;
    link.setAttribute("import-href", "");
  } // always ensure link has `async` attribute if user specified one,
  // even if it was previously not async. This is considered less confusing.


  if (optAsync) {
    link.setAttribute("async", "");
  } // NOTE: the link may now be in 3 states: (1) pending insertion,
  // (2) inflight, (3) already loaded. In each case, we need to add
  // event listeners to process callbacks.


  var cleanup = function cleanup() {
    link.removeEventListener("load", loadListener);
    link.removeEventListener("error", errorListener);
  };

  var loadListener = function loadListener(event) {
    cleanup(); // In case of a successful load, cache the load event on the link so
    // that it can be used to short-circuit this method in the future when
    // it is called with the same href param.

    link.__dynamicImportLoaded = true;

    if (onload) {
      whenImportsReady(function () {
        onload(event);
      });
    }
  };

  var errorListener = function errorListener(event) {
    cleanup(); // In case of an error, remove the link from the document so that it
    // will be automatically created again the next time `importHref` is
    // called.

    if (link.parentNode) {
      link.parentNode.removeChild(link);
    }

    if (onerror) {
      whenImportsReady(function () {
        onerror(event);
      });
    }
  };

  link.addEventListener("load", loadListener);
  link.addEventListener("error", errorListener);

  if (link.parentNode == null) {
    document.head.appendChild(link); // if the link already loaded, dispatch a fake load event
    // so that listeners are called and get a proper event argument.
  } else if (link.__dynamicImportLoaded) {
    link.dispatchEvent(new Event("load"));
  }

  return link;
};
var importHrefPromise = function importHrefPromise(href) {
  return new Promise(function (resolve, reject) {
    return importHref(href, resolve, reject);
  });
};

/***/ }),

/***/ "./src/resources/html-import/polyfill.js":
/*!***********************************************!*\
  !*** ./src/resources/html-import/polyfill.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable */

/*
 Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 Code distributed by Google as part of the polymer project is also
 subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
(function (q) {
  function y(a, b) {
    if ("function" === typeof window.CustomEvent) return new CustomEvent(a, b);
    var c = document.createEvent("CustomEvent");
    c.initCustomEvent(a, !!b.bubbles, !!b.cancelable, b.detail);
    return c;
  }

  function m(a) {
    if (u) return a.ownerDocument !== document ? a.ownerDocument : null;
    var b = a.__importDoc;

    if (!b && a.parentNode) {
      b = a.parentNode;
      if ("function" === typeof b.closest) b = b.closest("link[rel=import]");else for (; !r(b) && (b = b.parentNode);) {
        ;
      }
      a.__importDoc = b;
    }

    return b;
  }

  function D(a) {
    var b = k(document, "link[rel=import]:not([import-dependency])"),
        c = b.length;
    c ? g(b, function (b) {
      return t(b, function () {
        0 === --c && a();
      });
    }) : a();
  }

  function z(a) {
    function b() {
      "loading" !== document.readyState && document.body && (document.removeEventListener("readystatechange", b), a());
    }

    document.addEventListener("readystatechange", b);
    b();
  }

  function A(a) {
    z(function () {
      return D(function () {
        return a && a();
      });
    });
  }

  function t(a, b) {
    if (a.__loaded) b && b();else if ("script" === a.localName && !a.src || "style" === a.localName && !a.firstChild) a.__loaded = !0, b && b();else {
      var c = function c(d) {
        a.removeEventListener(d.type, c);
        a.__loaded = !0;
        b && b();
      };

      a.addEventListener("load", c);
      v && "style" === a.localName || a.addEventListener("error", c);
    }
  }

  function r(a) {
    return a.nodeType === Node.ELEMENT_NODE && "link" === a.localName && "import" === a.rel;
  }

  function h() {
    var a = this;
    this.a = {};
    this.b = 0;
    this.g = new MutationObserver(function (b) {
      return a.w(b);
    });
    this.g.observe(document.head, {
      childList: !0,
      subtree: !0
    });
    this.loadImports(document);
  }

  function B(a) {
    g(k(a, "template"), function (a) {
      g(k(a.content, 'script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'), function (a) {
        var b = document.createElement("script");
        g(a.attributes, function (a) {
          return b.setAttribute(a.name, a.value);
        });
        b.textContent = a.textContent;
        a.parentNode.replaceChild(b, a);
      });
      B(a.content);
    });
  }

  function k(a, b) {
    return a.childNodes.length ? a.querySelectorAll(b) : E;
  }

  function g(a, b, c) {
    var d = a ? a.length : 0,
        f = c ? -1 : 1;

    for (c = c ? d - 1 : 0; c < d && 0 <= c; c += f) {
      b(a[c], c);
    }
  }

  var n = document.createElement("link"),
      u = "import" in n,
      E = n.querySelectorAll("*"),
      w = null;
  !1 === "currentScript" in document && Object.defineProperty(document, "currentScript", {
    get: function get() {
      return w || ("complete" !== document.readyState ? document.scripts[document.scripts.length - 1] : null);
    },
    configurable: !0
  });
  var F = /(url\()([^)]*)(\))/g,
      G = /(@import[\s]+(?!url\())([^;]*)(;)/g,
      H = /(<link[^>]*)(rel=['|"]?stylesheet['|"]?[^>]*>)/g,
      e = {
    u: function u(a, b) {
      a.href && a.setAttribute("href", e.c(a.getAttribute("href"), b));
      a.src && a.setAttribute("src", e.c(a.getAttribute("src"), b));

      if ("style" === a.localName) {
        var c = e.o(a.textContent, b, F);
        a.textContent = e.o(c, b, G);
      }
    },
    o: function o(a, b, c) {
      return a.replace(c, function (a, c, l, g) {
        a = l.replace(/["']/g, "");
        b && (a = e.c(a, b));
        return c + "'" + a + "'" + g;
      });
    },
    c: function c(a, b) {
      if (void 0 === e.f) {
        e.f = !1;

        try {
          var c = new URL("b", "http://a");
          c.pathname = "c%20d";
          e.f = "http://a/c%20d" === c.href;
        } catch (d) {}
      }

      if (e.f) return new URL(a, b).href;
      c = e.s;
      c || (c = document.implementation.createHTMLDocument("temp"), e.s = c, c.i = c.createElement("base"), c.head.appendChild(c.i), c.h = c.createElement("a"));
      c.i.href = b;
      c.h.href = a;
      return c.h.href || a;
    }
  },
      C = {
    async: !0,
    load: function load(a, b, c) {
      if (a) {
        if (a.match(/^data:/)) {
          a = a.split(",");
          var d = a[1];
          d = -1 < a[0].indexOf(";base64") ? atob(d) : decodeURIComponent(d);
          b(d);
        } else {
          var f = new XMLHttpRequest();
          f.open("GET", a, C.async);

          f.onload = function () {
            var a = f.responseURL || f.getResponseHeader("Location");
            a && 0 === a.indexOf("/") && (a = (location.origin || location.protocol + "//" + location.host) + a);
            var d = f.response || f.responseText;
            304 === f.status || 0 === f.status || 200 <= f.status && 300 > f.status ? b(d, a) : c(d);
          };

          f.send();
        }
      } else c("error: href must be specified");
    }
  },
      v = /Trident/.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent);

  h.prototype.loadImports = function (a) {
    var b = this;
    g(k(a, "link[rel=import]"), function (a) {
      return b.l(a);
    });
  };

  h.prototype.l = function (a) {
    var b = this,
        c = a.href;

    if (void 0 !== this.a[c]) {
      var d = this.a[c];
      d && d.__loaded && (a.__import = d, this.j(a));
    } else this.b++, this.a[c] = "pending", C.load(c, function (a, d) {
      a = b.A(a, d || c);
      b.a[c] = a;
      b.b--;
      b.loadImports(a);
      b.m();
    }, function () {
      b.a[c] = null;
      b.b--;
      b.m();
    });
  };

  h.prototype.A = function (a, b) {
    if (!a) return document.createDocumentFragment();
    v && (a = a.replace(H, function (a, b, c) {
      return -1 === a.indexOf("type=") ? b + " type=import-disable " + c : a;
    }));
    var c = document.createElement("template");
    c.innerHTML = a;
    if (c.content) a = c.content, B(a);else for (a = document.createDocumentFragment(); c.firstChild;) {
      a.appendChild(c.firstChild);
    }
    if (c = a.querySelector("base")) b = e.c(c.getAttribute("href"), b), c.removeAttribute("href");
    var d = 0;
    g(k(a, 'link[rel=import],link[rel=stylesheet][href][type=import-disable],style:not([type]),link[rel=stylesheet][href]:not([type]),script:not([type]),script[type="application/javascript"],script[type="text/javascript"]'), function (a) {
      t(a);
      e.u(a, b);
      a.setAttribute("import-dependency", "");
      "script" === a.localName && !a.src && a.textContent && (a.setAttribute("src", "data:text/javascript;charset=utf-8," + encodeURIComponent(a.textContent + ("\n//# sourceURL=" + b + (d ? "-" + d : "") + ".js\n"))), a.textContent = "", d++);
    });
    return a;
  };

  h.prototype.m = function () {
    var a = this;

    if (!this.b) {
      this.g.disconnect();
      this.flatten(document);

      var b = !1,
          c = !1,
          d = function d() {
        c && b && (a.loadImports(document), a.b || (a.g.observe(document.head, {
          childList: !0,
          subtree: !0
        }), a.v()));
      };

      this.C(function () {
        c = !0;
        d();
      });
      this.B(function () {
        b = !0;
        d();
      });
    }
  };

  h.prototype.flatten = function (a) {
    var b = this;
    g(k(a, "link[rel=import]"), function (a) {
      var c = b.a[a.href];
      (a.__import = c) && c.nodeType === Node.DOCUMENT_FRAGMENT_NODE && (b.a[a.href] = a, a.readyState = "loading", a.__import = a, b.flatten(c), a.appendChild(c));
    });
  };

  h.prototype.B = function (a) {
    function b(f) {
      if (f < d) {
        var l = c[f],
            e = document.createElement("script");
        l.removeAttribute("import-dependency");
        g(l.attributes, function (a) {
          return e.setAttribute(a.name, a.value);
        });
        w = e;
        l.parentNode.replaceChild(e, l);
        t(e, function () {
          w = null;
          b(f + 1);
        });
      } else a();
    }

    var c = k(document, "script[import-dependency]"),
        d = c.length;
    b(0);
  };

  h.prototype.C = function (a) {
    var b = k(document, "style[import-dependency],link[rel=stylesheet][import-dependency]"),
        c = b.length;

    if (c) {
      var d = v && !!document.querySelector("link[rel=stylesheet][href][type=import-disable]");
      g(b, function (b) {
        t(b, function () {
          b.removeAttribute("import-dependency");
          0 === --c && a();
        });

        if (d && b.parentNode !== document.head) {
          var e = document.createElement(b.localName);
          e.__appliedElement = b;
          e.setAttribute("type", "import-placeholder");
          b.parentNode.insertBefore(e, b.nextSibling);

          for (e = m(b); e && m(e);) {
            e = m(e);
          }

          e.parentNode !== document.head && (e = null);
          document.head.insertBefore(b, e);
          b.removeAttribute("type");
        }
      });
    } else a();
  };

  h.prototype.v = function () {
    var a = this;
    g(k(document, "link[rel=import]"), function (b) {
      return a.j(b);
    }, !0);
  };

  h.prototype.j = function (a) {
    a.__loaded || (a.__loaded = !0, a["import"] && (a["import"].readyState = "complete"), a.dispatchEvent(y(a["import"] ? "load" : "error", {
      bubbles: !1,
      cancelable: !1,
      detail: void 0
    })));
  };

  h.prototype.w = function (a) {
    var b = this;
    g(a, function (a) {
      return g(a.addedNodes, function (a) {
        a && a.nodeType === Node.ELEMENT_NODE && (r(a) ? b.l(a) : b.loadImports(a));
      });
    });
  };

  var x = null;
  if (u) g(k(document, "link[rel=import]"), function (a) {
    a["import"] && "loading" === a["import"].readyState || (a.__loaded = !0);
  }), n = function n(a) {
    a = a.target;
    r(a) && (a.__loaded = !0);
  }, document.addEventListener("load", n, !0), document.addEventListener("error", n, !0);else {
    var p = Object.getOwnPropertyDescriptor(Node.prototype, "baseURI");
    Object.defineProperty((!p || p.configurable ? Node : Element).prototype, "baseURI", {
      get: function get() {
        var a = r(this) ? this : m(this);
        return a ? a.href : p && p.get ? p.get.call(this) : (document.querySelector("base") || window.location).href;
      },
      configurable: !0,
      enumerable: !0
    });
    Object.defineProperty(HTMLLinkElement.prototype, "import", {
      get: function get() {
        return this.__import || null;
      },
      configurable: !0,
      enumerable: !0
    });
    z(function () {
      x = new h();
    });
  }
  A(function () {
    return document.dispatchEvent(y("HTMLImportsLoaded", {
      cancelable: !0,
      bubbles: !0,
      detail: void 0
    }));
  });
  q.useNative = u;
  q.whenReady = A;
  q.importForElement = m;

  q.loadImports = function (a) {
    x && x.loadImports(a);
  };
})(window.HTMLImports = window.HTMLImports || {});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1wb3J0LWhyZWYtcG9seWZpbGwuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVzb3VyY2VzL2h0bWwtaW1wb3J0L2ltcG9ydC1ocmVmLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvaHRtbC1pbXBvcnQvcG9seWZpbGwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgKi9cbmltcG9ydCBcIi4vcG9seWZpbGxcIjtcbi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5cbi8vIHJ1biBhIGNhbGxiYWNrIHdoZW4gSFRNTEltcG9ydHMgYXJlIHJlYWR5IG9yIGltbWVkaWF0ZWx5IGlmXG4vLyB0aGlzIGFwaSBpcyBub3QgYXZhaWxhYmxlLlxuZnVuY3Rpb24gd2hlbkltcG9ydHNSZWFkeShjYikge1xuICBpZiAod2luZG93LkhUTUxJbXBvcnRzKSB7XG4gICAgSFRNTEltcG9ydHMud2hlblJlYWR5KGNiKTtcbiAgfSBlbHNlIHtcbiAgICBjYigpO1xuICB9XG59XG5cbi8qKlxuICogQ29udmVuaWVuY2UgbWV0aG9kIGZvciBpbXBvcnRpbmcgYW4gSFRNTCBkb2N1bWVudCBpbXBlcmF0aXZlbHkuXG4gKlxuICogVGhpcyBtZXRob2QgY3JlYXRlcyBhIG5ldyBgPGxpbmsgcmVsPVwiaW1wb3J0XCI+YCBlbGVtZW50IHdpdGhcbiAqIHRoZSBwcm92aWRlZCBVUkwgYW5kIGFwcGVuZHMgaXQgdG8gdGhlIGRvY3VtZW50IHRvIHN0YXJ0IGxvYWRpbmcuXG4gKiBJbiB0aGUgYG9ubG9hZGAgY2FsbGJhY2ssIHRoZSBgaW1wb3J0YCBwcm9wZXJ0eSBvZiB0aGUgYGxpbmtgXG4gKiBlbGVtZW50IHdpbGwgY29udGFpbiB0aGUgaW1wb3J0ZWQgZG9jdW1lbnQgY29udGVudHMuXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IGhyZWYgVVJMIHRvIGRvY3VtZW50IHRvIGxvYWQuXG4gKiBAcGFyYW0gez9mdW5jdGlvbighRXZlbnQpOnZvaWQ9fSBvbmxvYWQgQ2FsbGJhY2sgdG8gbm90aWZ5IHdoZW4gYW4gaW1wb3J0IHN1Y2Nlc3NmdWxseVxuICogICBsb2FkZWQuXG4gKiBAcGFyYW0gez9mdW5jdGlvbighRXJyb3JFdmVudCk6dm9pZD19IG9uZXJyb3IgQ2FsbGJhY2sgdG8gbm90aWZ5IHdoZW4gYW4gaW1wb3J0XG4gKiAgIHVuc3VjY2Vzc2Z1bGx5IGxvYWRlZC5cbiAqIEBwYXJhbSB7Ym9vbGVhbj19IG9wdEFzeW5jIFRydWUgaWYgdGhlIGltcG9ydCBzaG91bGQgYmUgbG9hZGVkIGBhc3luY2AuXG4gKiAgIERlZmF1bHRzIHRvIGBmYWxzZWAuXG4gKiBAcmV0dXJuIHshSFRNTExpbmtFbGVtZW50fSBUaGUgbGluayBlbGVtZW50IGZvciB0aGUgVVJMIHRvIGJlIGxvYWRlZC5cbiAqL1xuZXhwb3J0IGNvbnN0IGltcG9ydEhyZWYgPSBmdW5jdGlvbihocmVmLCBvbmxvYWQsIG9uZXJyb3IsIG9wdEFzeW5jKSB7XG4gIGxldCBsaW5rIC8qKiBAdHlwZSB7SFRNTExpbmtFbGVtZW50fSAqLyA9IGRvY3VtZW50LmhlYWQucXVlcnlTZWxlY3RvcihcbiAgICAnbGlua1tocmVmPVwiJyArIGhyZWYgKyAnXCJdW2ltcG9ydC1ocmVmXSdcbiAgKTtcbiAgaWYgKCFsaW5rKSB7XG4gICAgbGluayA9IC8qKiBAdHlwZSB7SFRNTExpbmtFbGVtZW50fSAqLyAoZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIikpO1xuICAgIGxpbmsucmVsID0gXCJpbXBvcnRcIjtcbiAgICBsaW5rLmhyZWYgPSBocmVmO1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiaW1wb3J0LWhyZWZcIiwgXCJcIik7XG4gIH1cbiAgLy8gYWx3YXlzIGVuc3VyZSBsaW5rIGhhcyBgYXN5bmNgIGF0dHJpYnV0ZSBpZiB1c2VyIHNwZWNpZmllZCBvbmUsXG4gIC8vIGV2ZW4gaWYgaXQgd2FzIHByZXZpb3VzbHkgbm90IGFzeW5jLiBUaGlzIGlzIGNvbnNpZGVyZWQgbGVzcyBjb25mdXNpbmcuXG4gIGlmIChvcHRBc3luYykge1xuICAgIGxpbmsuc2V0QXR0cmlidXRlKFwiYXN5bmNcIiwgXCJcIik7XG4gIH1cbiAgLy8gTk9URTogdGhlIGxpbmsgbWF5IG5vdyBiZSBpbiAzIHN0YXRlczogKDEpIHBlbmRpbmcgaW5zZXJ0aW9uLFxuICAvLyAoMikgaW5mbGlnaHQsICgzKSBhbHJlYWR5IGxvYWRlZC4gSW4gZWFjaCBjYXNlLCB3ZSBuZWVkIHRvIGFkZFxuICAvLyBldmVudCBsaXN0ZW5lcnMgdG8gcHJvY2VzcyBjYWxsYmFja3MuXG4gIGNvbnN0IGNsZWFudXAgPSBmdW5jdGlvbigpIHtcbiAgICBsaW5rLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGxvYWRMaXN0ZW5lcik7XG4gICAgbGluay5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZXJyb3JMaXN0ZW5lcik7XG4gIH07XG4gIGxldCBsb2FkTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNsZWFudXAoKTtcbiAgICAvLyBJbiBjYXNlIG9mIGEgc3VjY2Vzc2Z1bCBsb2FkLCBjYWNoZSB0aGUgbG9hZCBldmVudCBvbiB0aGUgbGluayBzb1xuICAgIC8vIHRoYXQgaXQgY2FuIGJlIHVzZWQgdG8gc2hvcnQtY2lyY3VpdCB0aGlzIG1ldGhvZCBpbiB0aGUgZnV0dXJlIHdoZW5cbiAgICAvLyBpdCBpcyBjYWxsZWQgd2l0aCB0aGUgc2FtZSBocmVmIHBhcmFtLlxuICAgIGxpbmsuX19keW5hbWljSW1wb3J0TG9hZGVkID0gdHJ1ZTtcbiAgICBpZiAob25sb2FkKSB7XG4gICAgICB3aGVuSW1wb3J0c1JlYWR5KCgpID0+IHtcbiAgICAgICAgb25sb2FkKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgbGV0IGVycm9yTGlzdGVuZXIgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGNsZWFudXAoKTtcbiAgICAvLyBJbiBjYXNlIG9mIGFuIGVycm9yLCByZW1vdmUgdGhlIGxpbmsgZnJvbSB0aGUgZG9jdW1lbnQgc28gdGhhdCBpdFxuICAgIC8vIHdpbGwgYmUgYXV0b21hdGljYWxseSBjcmVhdGVkIGFnYWluIHRoZSBuZXh0IHRpbWUgYGltcG9ydEhyZWZgIGlzXG4gICAgLy8gY2FsbGVkLlxuICAgIGlmIChsaW5rLnBhcmVudE5vZGUpIHtcbiAgICAgIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICB9XG4gICAgaWYgKG9uZXJyb3IpIHtcbiAgICAgIHdoZW5JbXBvcnRzUmVhZHkoKCkgPT4ge1xuICAgICAgICBvbmVycm9yKGV2ZW50KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgbGluay5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBsb2FkTGlzdGVuZXIpO1xuICBsaW5rLmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBlcnJvckxpc3RlbmVyKTtcbiAgaWYgKGxpbmsucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAvLyBpZiB0aGUgbGluayBhbHJlYWR5IGxvYWRlZCwgZGlzcGF0Y2ggYSBmYWtlIGxvYWQgZXZlbnRcbiAgICAvLyBzbyB0aGF0IGxpc3RlbmVycyBhcmUgY2FsbGVkIGFuZCBnZXQgYSBwcm9wZXIgZXZlbnQgYXJndW1lbnQuXG4gIH0gZWxzZSBpZiAobGluay5fX2R5bmFtaWNJbXBvcnRMb2FkZWQpIHtcbiAgICBsaW5rLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KFwibG9hZFwiKSk7XG4gIH1cbiAgcmV0dXJuIGxpbms7XG59O1xuXG5leHBvcnQgY29uc3QgaW1wb3J0SHJlZlByb21pc2UgPSAoaHJlZikgPT5cbiAgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4gaW1wb3J0SHJlZihocmVmLCByZXNvbHZlLCByZWplY3QpKTtcbiIsIi8qIGVzbGludC1kaXNhYmxlICovXG4vKlxuIENvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuIFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG4gVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG4gQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbihmdW5jdGlvbihxKSB7XG4gIGZ1bmN0aW9uIHkoYSwgYikge1xuICAgIGlmIChcImZ1bmN0aW9uXCIgPT09IHR5cGVvZiB3aW5kb3cuQ3VzdG9tRXZlbnQpIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoYSwgYik7XG4gICAgdmFyIGMgPSBkb2N1bWVudC5jcmVhdGVFdmVudChcIkN1c3RvbUV2ZW50XCIpO1xuICAgIGMuaW5pdEN1c3RvbUV2ZW50KGEsICEhYi5idWJibGVzLCAhIWIuY2FuY2VsYWJsZSwgYi5kZXRhaWwpO1xuICAgIHJldHVybiBjO1xuICB9XG4gIGZ1bmN0aW9uIG0oYSkge1xuICAgIGlmICh1KSByZXR1cm4gYS5vd25lckRvY3VtZW50ICE9PSBkb2N1bWVudCA/IGEub3duZXJEb2N1bWVudCA6IG51bGw7XG4gICAgdmFyIGIgPSBhLl9faW1wb3J0RG9jO1xuICAgIGlmICghYiAmJiBhLnBhcmVudE5vZGUpIHtcbiAgICAgIGIgPSBhLnBhcmVudE5vZGU7XG4gICAgICBpZiAoXCJmdW5jdGlvblwiID09PSB0eXBlb2YgYi5jbG9zZXN0KSBiID0gYi5jbG9zZXN0KFwibGlua1tyZWw9aW1wb3J0XVwiKTtcbiAgICAgIGVsc2UgZm9yICg7ICFyKGIpICYmIChiID0gYi5wYXJlbnROb2RlKTsgKTtcbiAgICAgIGEuX19pbXBvcnREb2MgPSBiO1xuICAgIH1cbiAgICByZXR1cm4gYjtcbiAgfVxuICBmdW5jdGlvbiBEKGEpIHtcbiAgICB2YXIgYiA9IGsoZG9jdW1lbnQsIFwibGlua1tyZWw9aW1wb3J0XTpub3QoW2ltcG9ydC1kZXBlbmRlbmN5XSlcIiksXG4gICAgICBjID0gYi5sZW5ndGg7XG4gICAgY1xuICAgICAgPyBnKGIsIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgICByZXR1cm4gdChiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIDAgPT09IC0tYyAmJiBhKCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgICA6IGEoKTtcbiAgfVxuICBmdW5jdGlvbiB6KGEpIHtcbiAgICBmdW5jdGlvbiBiKCkge1xuICAgICAgXCJsb2FkaW5nXCIgIT09IGRvY3VtZW50LnJlYWR5U3RhdGUgJiZcbiAgICAgICAgZG9jdW1lbnQuYm9keSAmJlxuICAgICAgICAoZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlYWR5c3RhdGVjaGFuZ2VcIiwgYiksIGEoKSk7XG4gICAgfVxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJyZWFkeXN0YXRlY2hhbmdlXCIsIGIpO1xuICAgIGIoKTtcbiAgfVxuICBmdW5jdGlvbiBBKGEpIHtcbiAgICB6KGZ1bmN0aW9uKCkge1xuICAgICAgcmV0dXJuIEQoZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBhICYmIGEoKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIHQoYSwgYikge1xuICAgIGlmIChhLl9fbG9hZGVkKSBiICYmIGIoKTtcbiAgICBlbHNlIGlmIChcbiAgICAgIChcInNjcmlwdFwiID09PSBhLmxvY2FsTmFtZSAmJiAhYS5zcmMpIHx8XG4gICAgICAoXCJzdHlsZVwiID09PSBhLmxvY2FsTmFtZSAmJiAhYS5maXJzdENoaWxkKVxuICAgIClcbiAgICAgIChhLl9fbG9hZGVkID0gITApLCBiICYmIGIoKTtcbiAgICBlbHNlIHtcbiAgICAgIHZhciBjID0gZnVuY3Rpb24oZCkge1xuICAgICAgICBhLnJlbW92ZUV2ZW50TGlzdGVuZXIoZC50eXBlLCBjKTtcbiAgICAgICAgYS5fX2xvYWRlZCA9ICEwO1xuICAgICAgICBiICYmIGIoKTtcbiAgICAgIH07XG4gICAgICBhLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGMpO1xuICAgICAgKHYgJiYgXCJzdHlsZVwiID09PSBhLmxvY2FsTmFtZSkgfHwgYS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgYyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIHIoYSkge1xuICAgIHJldHVybiAoXG4gICAgICBhLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSAmJlxuICAgICAgXCJsaW5rXCIgPT09IGEubG9jYWxOYW1lICYmXG4gICAgICBcImltcG9ydFwiID09PSBhLnJlbFxuICAgICk7XG4gIH1cbiAgZnVuY3Rpb24gaCgpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgdGhpcy5hID0ge307XG4gICAgdGhpcy5iID0gMDtcbiAgICB0aGlzLmcgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihmdW5jdGlvbihiKSB7XG4gICAgICByZXR1cm4gYS53KGIpO1xuICAgIH0pO1xuICAgIHRoaXMuZy5vYnNlcnZlKGRvY3VtZW50LmhlYWQsIHsgY2hpbGRMaXN0OiAhMCwgc3VidHJlZTogITAgfSk7XG4gICAgdGhpcy5sb2FkSW1wb3J0cyhkb2N1bWVudCk7XG4gIH1cbiAgZnVuY3Rpb24gQihhKSB7XG4gICAgZyhrKGEsIFwidGVtcGxhdGVcIiksIGZ1bmN0aW9uKGEpIHtcbiAgICAgIGcoXG4gICAgICAgIGsoXG4gICAgICAgICAgYS5jb250ZW50LFxuICAgICAgICAgICdzY3JpcHQ6bm90KFt0eXBlXSksc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLHNjcmlwdFt0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdJ1xuICAgICAgICApLFxuICAgICAgICBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgdmFyIGIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgICAgICAgIGcoYS5hdHRyaWJ1dGVzLCBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgICByZXR1cm4gYi5zZXRBdHRyaWJ1dGUoYS5uYW1lLCBhLnZhbHVlKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBiLnRleHRDb250ZW50ID0gYS50ZXh0Q29udGVudDtcbiAgICAgICAgICBhLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGIsIGEpO1xuICAgICAgICB9XG4gICAgICApO1xuICAgICAgQihhLmNvbnRlbnQpO1xuICAgIH0pO1xuICB9XG4gIGZ1bmN0aW9uIGsoYSwgYikge1xuICAgIHJldHVybiBhLmNoaWxkTm9kZXMubGVuZ3RoID8gYS5xdWVyeVNlbGVjdG9yQWxsKGIpIDogRTtcbiAgfVxuICBmdW5jdGlvbiBnKGEsIGIsIGMpIHtcbiAgICB2YXIgZCA9IGEgPyBhLmxlbmd0aCA6IDAsXG4gICAgICBmID0gYyA/IC0xIDogMTtcbiAgICBmb3IgKGMgPSBjID8gZCAtIDEgOiAwOyBjIDwgZCAmJiAwIDw9IGM7IGMgKz0gZikgYihhW2NdLCBjKTtcbiAgfVxuICB2YXIgbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpLFxuICAgIHUgPSBcImltcG9ydFwiIGluIG4sXG4gICAgRSA9IG4ucXVlcnlTZWxlY3RvckFsbChcIipcIiksXG4gICAgdyA9IG51bGw7XG4gICExID09PSBcImN1cnJlbnRTY3JpcHRcIiBpbiBkb2N1bWVudCAmJlxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShkb2N1bWVudCwgXCJjdXJyZW50U2NyaXB0XCIsIHtcbiAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgdyB8fFxuICAgICAgICAgIChcImNvbXBsZXRlXCIgIT09IGRvY3VtZW50LnJlYWR5U3RhdGVcbiAgICAgICAgICAgID8gZG9jdW1lbnQuc2NyaXB0c1tkb2N1bWVudC5zY3JpcHRzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICA6IG51bGwpXG4gICAgICAgICk7XG4gICAgICB9LFxuICAgICAgY29uZmlndXJhYmxlOiAhMCxcbiAgICB9KTtcbiAgdmFyIEYgPSAvKHVybFxcKCkoW14pXSopKFxcKSkvZyxcbiAgICBHID0gLyhAaW1wb3J0W1xcc10rKD8hdXJsXFwoKSkoW147XSopKDspL2csXG4gICAgSCA9IC8oPGxpbmtbXj5dKikocmVsPVsnfFwiXT9zdHlsZXNoZWV0Wyd8XCJdP1tePl0qPikvZyxcbiAgICBlID0ge1xuICAgICAgdTogZnVuY3Rpb24oYSwgYikge1xuICAgICAgICBhLmhyZWYgJiYgYS5zZXRBdHRyaWJ1dGUoXCJocmVmXCIsIGUuYyhhLmdldEF0dHJpYnV0ZShcImhyZWZcIiksIGIpKTtcbiAgICAgICAgYS5zcmMgJiYgYS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZS5jKGEuZ2V0QXR0cmlidXRlKFwic3JjXCIpLCBiKSk7XG4gICAgICAgIGlmIChcInN0eWxlXCIgPT09IGEubG9jYWxOYW1lKSB7XG4gICAgICAgICAgdmFyIGMgPSBlLm8oYS50ZXh0Q29udGVudCwgYiwgRik7XG4gICAgICAgICAgYS50ZXh0Q29udGVudCA9IGUubyhjLCBiLCBHKTtcbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIG86IGZ1bmN0aW9uKGEsIGIsIGMpIHtcbiAgICAgICAgcmV0dXJuIGEucmVwbGFjZShjLCBmdW5jdGlvbihhLCBjLCBsLCBnKSB7XG4gICAgICAgICAgYSA9IGwucmVwbGFjZSgvW1wiJ10vZywgXCJcIik7XG4gICAgICAgICAgYiAmJiAoYSA9IGUuYyhhLCBiKSk7XG4gICAgICAgICAgcmV0dXJuIGMgKyBcIidcIiArIGEgKyBcIidcIiArIGc7XG4gICAgICAgIH0pO1xuICAgICAgfSxcbiAgICAgIGM6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAgICAgaWYgKHZvaWQgMCA9PT0gZS5mKSB7XG4gICAgICAgICAgZS5mID0gITE7XG4gICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciBjID0gbmV3IFVSTChcImJcIiwgXCJodHRwOi8vYVwiKTtcbiAgICAgICAgICAgIGMucGF0aG5hbWUgPSBcImMlMjBkXCI7XG4gICAgICAgICAgICBlLmYgPSBcImh0dHA6Ly9hL2MlMjBkXCIgPT09IGMuaHJlZjtcbiAgICAgICAgICB9IGNhdGNoIChkKSB7fVxuICAgICAgICB9XG4gICAgICAgIGlmIChlLmYpIHJldHVybiBuZXcgVVJMKGEsIGIpLmhyZWY7XG4gICAgICAgIGMgPSBlLnM7XG4gICAgICAgIGMgfHxcbiAgICAgICAgICAoKGMgPSBkb2N1bWVudC5pbXBsZW1lbnRhdGlvbi5jcmVhdGVIVE1MRG9jdW1lbnQoXCJ0ZW1wXCIpKSxcbiAgICAgICAgICAoZS5zID0gYyksXG4gICAgICAgICAgKGMuaSA9IGMuY3JlYXRlRWxlbWVudChcImJhc2VcIikpLFxuICAgICAgICAgIGMuaGVhZC5hcHBlbmRDaGlsZChjLmkpLFxuICAgICAgICAgIChjLmggPSBjLmNyZWF0ZUVsZW1lbnQoXCJhXCIpKSk7XG4gICAgICAgIGMuaS5ocmVmID0gYjtcbiAgICAgICAgYy5oLmhyZWYgPSBhO1xuICAgICAgICByZXR1cm4gYy5oLmhyZWYgfHwgYTtcbiAgICAgIH0sXG4gICAgfSxcbiAgICBDID0ge1xuICAgICAgYXN5bmM6ICEwLFxuICAgICAgbG9hZDogZnVuY3Rpb24oYSwgYiwgYykge1xuICAgICAgICBpZiAoYSlcbiAgICAgICAgICBpZiAoYS5tYXRjaCgvXmRhdGE6LykpIHtcbiAgICAgICAgICAgIGEgPSBhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIHZhciBkID0gYVsxXTtcbiAgICAgICAgICAgIGQgPSAtMSA8IGFbMF0uaW5kZXhPZihcIjtiYXNlNjRcIikgPyBhdG9iKGQpIDogZGVjb2RlVVJJQ29tcG9uZW50KGQpO1xuICAgICAgICAgICAgYihkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGYgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGYub3BlbihcIkdFVFwiLCBhLCBDLmFzeW5jKTtcbiAgICAgICAgICAgIGYub25sb2FkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgIHZhciBhID0gZi5yZXNwb25zZVVSTCB8fCBmLmdldFJlc3BvbnNlSGVhZGVyKFwiTG9jYXRpb25cIik7XG4gICAgICAgICAgICAgIGEgJiZcbiAgICAgICAgICAgICAgICAwID09PSBhLmluZGV4T2YoXCIvXCIpICYmXG4gICAgICAgICAgICAgICAgKGEgPVxuICAgICAgICAgICAgICAgICAgKGxvY2F0aW9uLm9yaWdpbiB8fFxuICAgICAgICAgICAgICAgICAgICBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3QpICsgYSk7XG4gICAgICAgICAgICAgIHZhciBkID0gZi5yZXNwb25zZSB8fCBmLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgICAgMzA0ID09PSBmLnN0YXR1cyB8fFxuICAgICAgICAgICAgICAwID09PSBmLnN0YXR1cyB8fFxuICAgICAgICAgICAgICAoMjAwIDw9IGYuc3RhdHVzICYmIDMwMCA+IGYuc3RhdHVzKVxuICAgICAgICAgICAgICAgID8gYihkLCBhKVxuICAgICAgICAgICAgICAgIDogYyhkKTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBmLnNlbmQoKTtcbiAgICAgICAgICB9XG4gICAgICAgIGVsc2UgYyhcImVycm9yOiBocmVmIG11c3QgYmUgc3BlY2lmaWVkXCIpO1xuICAgICAgfSxcbiAgICB9LFxuICAgIHYgPVxuICAgICAgL1RyaWRlbnQvLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCkgfHxcbiAgICAgIC9FZGdlXFwvXFxkLi9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gIGgucHJvdG90eXBlLmxvYWRJbXBvcnRzID0gZnVuY3Rpb24oYSkge1xuICAgIHZhciBiID0gdGhpcztcbiAgICBnKGsoYSwgXCJsaW5rW3JlbD1pbXBvcnRdXCIpLCBmdW5jdGlvbihhKSB7XG4gICAgICByZXR1cm4gYi5sKGEpO1xuICAgIH0pO1xuICB9O1xuICBoLnByb3RvdHlwZS5sID0gZnVuY3Rpb24oYSkge1xuICAgIHZhciBiID0gdGhpcyxcbiAgICAgIGMgPSBhLmhyZWY7XG4gICAgaWYgKHZvaWQgMCAhPT0gdGhpcy5hW2NdKSB7XG4gICAgICB2YXIgZCA9IHRoaXMuYVtjXTtcbiAgICAgIGQgJiYgZC5fX2xvYWRlZCAmJiAoKGEuX19pbXBvcnQgPSBkKSwgdGhpcy5qKGEpKTtcbiAgICB9IGVsc2VcbiAgICAgIHRoaXMuYisrLFxuICAgICAgICAodGhpcy5hW2NdID0gXCJwZW5kaW5nXCIpLFxuICAgICAgICBDLmxvYWQoXG4gICAgICAgICAgYyxcbiAgICAgICAgICBmdW5jdGlvbihhLCBkKSB7XG4gICAgICAgICAgICBhID0gYi5BKGEsIGQgfHwgYyk7XG4gICAgICAgICAgICBiLmFbY10gPSBhO1xuICAgICAgICAgICAgYi5iLS07XG4gICAgICAgICAgICBiLmxvYWRJbXBvcnRzKGEpO1xuICAgICAgICAgICAgYi5tKCk7XG4gICAgICAgICAgfSxcbiAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGIuYVtjXSA9IG51bGw7XG4gICAgICAgICAgICBiLmItLTtcbiAgICAgICAgICAgIGIubSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgfTtcbiAgaC5wcm90b3R5cGUuQSA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICBpZiAoIWEpIHJldHVybiBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XG4gICAgdiAmJlxuICAgICAgKGEgPSBhLnJlcGxhY2UoSCwgZnVuY3Rpb24oYSwgYiwgYykge1xuICAgICAgICByZXR1cm4gLTEgPT09IGEuaW5kZXhPZihcInR5cGU9XCIpID8gYiArIFwiIHR5cGU9aW1wb3J0LWRpc2FibGUgXCIgKyBjIDogYTtcbiAgICAgIH0pKTtcbiAgICB2YXIgYyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0ZW1wbGF0ZVwiKTtcbiAgICBjLmlubmVySFRNTCA9IGE7XG4gICAgaWYgKGMuY29udGVudCkgKGEgPSBjLmNvbnRlbnQpLCBCKGEpO1xuICAgIGVsc2VcbiAgICAgIGZvciAoYSA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKTsgYy5maXJzdENoaWxkOyApXG4gICAgICAgIGEuYXBwZW5kQ2hpbGQoYy5maXJzdENoaWxkKTtcbiAgICBpZiAoKGMgPSBhLnF1ZXJ5U2VsZWN0b3IoXCJiYXNlXCIpKSlcbiAgICAgIChiID0gZS5jKGMuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSwgYikpLCBjLnJlbW92ZUF0dHJpYnV0ZShcImhyZWZcIik7XG4gICAgdmFyIGQgPSAwO1xuICAgIGcoXG4gICAgICBrKFxuICAgICAgICBhLFxuICAgICAgICAnbGlua1tyZWw9aW1wb3J0XSxsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXVt0eXBlPWltcG9ydC1kaXNhYmxlXSxzdHlsZTpub3QoW3R5cGVdKSxsaW5rW3JlbD1zdHlsZXNoZWV0XVtocmVmXTpub3QoW3R5cGVdKSxzY3JpcHQ6bm90KFt0eXBlXSksc2NyaXB0W3R5cGU9XCJhcHBsaWNhdGlvbi9qYXZhc2NyaXB0XCJdLHNjcmlwdFt0eXBlPVwidGV4dC9qYXZhc2NyaXB0XCJdJ1xuICAgICAgKSxcbiAgICAgIGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgdChhKTtcbiAgICAgICAgZS51KGEsIGIpO1xuICAgICAgICBhLnNldEF0dHJpYnV0ZShcImltcG9ydC1kZXBlbmRlbmN5XCIsIFwiXCIpO1xuICAgICAgICBcInNjcmlwdFwiID09PSBhLmxvY2FsTmFtZSAmJlxuICAgICAgICAgICFhLnNyYyAmJlxuICAgICAgICAgIGEudGV4dENvbnRlbnQgJiZcbiAgICAgICAgICAoYS5zZXRBdHRyaWJ1dGUoXG4gICAgICAgICAgICBcInNyY1wiLFxuICAgICAgICAgICAgXCJkYXRhOnRleHQvamF2YXNjcmlwdDtjaGFyc2V0PXV0Zi04LFwiICtcbiAgICAgICAgICAgICAgZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgIGEudGV4dENvbnRlbnQgK1xuICAgICAgICAgICAgICAgICAgKFwiXFxuLy8jIHNvdXJjZVVSTD1cIiArIGIgKyAoZCA/IFwiLVwiICsgZCA6IFwiXCIpICsgXCIuanNcXG5cIilcbiAgICAgICAgICAgICAgKVxuICAgICAgICAgICksXG4gICAgICAgICAgKGEudGV4dENvbnRlbnQgPSBcIlwiKSxcbiAgICAgICAgICBkKyspO1xuICAgICAgfVxuICAgICk7XG4gICAgcmV0dXJuIGE7XG4gIH07XG4gIGgucHJvdG90eXBlLm0gPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgaWYgKCF0aGlzLmIpIHtcbiAgICAgIHRoaXMuZy5kaXNjb25uZWN0KCk7XG4gICAgICB0aGlzLmZsYXR0ZW4oZG9jdW1lbnQpO1xuICAgICAgdmFyIGIgPSAhMSxcbiAgICAgICAgYyA9ICExLFxuICAgICAgICBkID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYyAmJlxuICAgICAgICAgICAgYiAmJlxuICAgICAgICAgICAgKGEubG9hZEltcG9ydHMoZG9jdW1lbnQpLFxuICAgICAgICAgICAgYS5iIHx8XG4gICAgICAgICAgICAgIChhLmcub2JzZXJ2ZShkb2N1bWVudC5oZWFkLCB7IGNoaWxkTGlzdDogITAsIHN1YnRyZWU6ICEwIH0pLFxuICAgICAgICAgICAgICBhLnYoKSkpO1xuICAgICAgICB9O1xuICAgICAgdGhpcy5DKGZ1bmN0aW9uKCkge1xuICAgICAgICBjID0gITA7XG4gICAgICAgIGQoKTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5CKGZ1bmN0aW9uKCkge1xuICAgICAgICBiID0gITA7XG4gICAgICAgIGQoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfTtcbiAgaC5wcm90b3R5cGUuZmxhdHRlbiA9IGZ1bmN0aW9uKGEpIHtcbiAgICB2YXIgYiA9IHRoaXM7XG4gICAgZyhrKGEsIFwibGlua1tyZWw9aW1wb3J0XVwiKSwgZnVuY3Rpb24oYSkge1xuICAgICAgdmFyIGMgPSBiLmFbYS5ocmVmXTtcbiAgICAgIChhLl9faW1wb3J0ID0gYykgJiZcbiAgICAgICAgYy5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmXG4gICAgICAgICgoYi5hW2EuaHJlZl0gPSBhKSxcbiAgICAgICAgKGEucmVhZHlTdGF0ZSA9IFwibG9hZGluZ1wiKSxcbiAgICAgICAgKGEuX19pbXBvcnQgPSBhKSxcbiAgICAgICAgYi5mbGF0dGVuKGMpLFxuICAgICAgICBhLmFwcGVuZENoaWxkKGMpKTtcbiAgICB9KTtcbiAgfTtcbiAgaC5wcm90b3R5cGUuQiA9IGZ1bmN0aW9uKGEpIHtcbiAgICBmdW5jdGlvbiBiKGYpIHtcbiAgICAgIGlmIChmIDwgZCkge1xuICAgICAgICB2YXIgbCA9IGNbZl0sXG4gICAgICAgICAgZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgICAgIGwucmVtb3ZlQXR0cmlidXRlKFwiaW1wb3J0LWRlcGVuZGVuY3lcIik7XG4gICAgICAgIGcobC5hdHRyaWJ1dGVzLCBmdW5jdGlvbihhKSB7XG4gICAgICAgICAgcmV0dXJuIGUuc2V0QXR0cmlidXRlKGEubmFtZSwgYS52YWx1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB3ID0gZTtcbiAgICAgICAgbC5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChlLCBsKTtcbiAgICAgICAgdChlLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICB3ID0gbnVsbDtcbiAgICAgICAgICBiKGYgKyAxKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2UgYSgpO1xuICAgIH1cbiAgICB2YXIgYyA9IGsoZG9jdW1lbnQsIFwic2NyaXB0W2ltcG9ydC1kZXBlbmRlbmN5XVwiKSxcbiAgICAgIGQgPSBjLmxlbmd0aDtcbiAgICBiKDApO1xuICB9O1xuICBoLnByb3RvdHlwZS5DID0gZnVuY3Rpb24oYSkge1xuICAgIHZhciBiID0gayhcbiAgICAgICAgZG9jdW1lbnQsXG4gICAgICAgIFwic3R5bGVbaW1wb3J0LWRlcGVuZGVuY3ldLGxpbmtbcmVsPXN0eWxlc2hlZXRdW2ltcG9ydC1kZXBlbmRlbmN5XVwiXG4gICAgICApLFxuICAgICAgYyA9IGIubGVuZ3RoO1xuICAgIGlmIChjKSB7XG4gICAgICB2YXIgZCA9XG4gICAgICAgIHYgJiZcbiAgICAgICAgISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgIFwibGlua1tyZWw9c3R5bGVzaGVldF1baHJlZl1bdHlwZT1pbXBvcnQtZGlzYWJsZV1cIlxuICAgICAgICApO1xuICAgICAgZyhiLCBmdW5jdGlvbihiKSB7XG4gICAgICAgIHQoYiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgYi5yZW1vdmVBdHRyaWJ1dGUoXCJpbXBvcnQtZGVwZW5kZW5jeVwiKTtcbiAgICAgICAgICAwID09PSAtLWMgJiYgYSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGQgJiYgYi5wYXJlbnROb2RlICE9PSBkb2N1bWVudC5oZWFkKSB7XG4gICAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGIubG9jYWxOYW1lKTtcbiAgICAgICAgICBlLl9fYXBwbGllZEVsZW1lbnQgPSBiO1xuICAgICAgICAgIGUuc2V0QXR0cmlidXRlKFwidHlwZVwiLCBcImltcG9ydC1wbGFjZWhvbGRlclwiKTtcbiAgICAgICAgICBiLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGUsIGIubmV4dFNpYmxpbmcpO1xuICAgICAgICAgIGZvciAoZSA9IG0oYik7IGUgJiYgbShlKTsgKSBlID0gbShlKTtcbiAgICAgICAgICBlLnBhcmVudE5vZGUgIT09IGRvY3VtZW50LmhlYWQgJiYgKGUgPSBudWxsKTtcbiAgICAgICAgICBkb2N1bWVudC5oZWFkLmluc2VydEJlZm9yZShiLCBlKTtcbiAgICAgICAgICBiLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIik7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSBhKCk7XG4gIH07XG4gIGgucHJvdG90eXBlLnYgPSBmdW5jdGlvbigpIHtcbiAgICB2YXIgYSA9IHRoaXM7XG4gICAgZyhcbiAgICAgIGsoZG9jdW1lbnQsIFwibGlua1tyZWw9aW1wb3J0XVwiKSxcbiAgICAgIGZ1bmN0aW9uKGIpIHtcbiAgICAgICAgcmV0dXJuIGEuaihiKTtcbiAgICAgIH0sXG4gICAgICAhMFxuICAgICk7XG4gIH07XG4gIGgucHJvdG90eXBlLmogPSBmdW5jdGlvbihhKSB7XG4gICAgYS5fX2xvYWRlZCB8fFxuICAgICAgKChhLl9fbG9hZGVkID0gITApLFxuICAgICAgYS5pbXBvcnQgJiYgKGEuaW1wb3J0LnJlYWR5U3RhdGUgPSBcImNvbXBsZXRlXCIpLFxuICAgICAgYS5kaXNwYXRjaEV2ZW50KFxuICAgICAgICB5KGEuaW1wb3J0ID8gXCJsb2FkXCIgOiBcImVycm9yXCIsIHtcbiAgICAgICAgICBidWJibGVzOiAhMSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiAhMSxcbiAgICAgICAgICBkZXRhaWw6IHZvaWQgMCxcbiAgICAgICAgfSlcbiAgICAgICkpO1xuICB9O1xuICBoLnByb3RvdHlwZS53ID0gZnVuY3Rpb24oYSkge1xuICAgIHZhciBiID0gdGhpcztcbiAgICBnKGEsIGZ1bmN0aW9uKGEpIHtcbiAgICAgIHJldHVybiBnKGEuYWRkZWROb2RlcywgZnVuY3Rpb24oYSkge1xuICAgICAgICBhICYmXG4gICAgICAgICAgYS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUgJiZcbiAgICAgICAgICAocihhKSA/IGIubChhKSA6IGIubG9hZEltcG9ydHMoYSkpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH07XG4gIHZhciB4ID0gbnVsbDtcbiAgaWYgKHUpXG4gICAgZyhrKGRvY3VtZW50LCBcImxpbmtbcmVsPWltcG9ydF1cIiksIGZ1bmN0aW9uKGEpIHtcbiAgICAgIChhLmltcG9ydCAmJiBcImxvYWRpbmdcIiA9PT0gYS5pbXBvcnQucmVhZHlTdGF0ZSkgfHwgKGEuX19sb2FkZWQgPSAhMCk7XG4gICAgfSksXG4gICAgICAobiA9IGZ1bmN0aW9uKGEpIHtcbiAgICAgICAgYSA9IGEudGFyZ2V0O1xuICAgICAgICByKGEpICYmIChhLl9fbG9hZGVkID0gITApO1xuICAgICAgfSksXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBuLCAhMCksXG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgbiwgITApO1xuICBlbHNlIHtcbiAgICB2YXIgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoTm9kZS5wcm90b3R5cGUsIFwiYmFzZVVSSVwiKTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkoXG4gICAgICAoIXAgfHwgcC5jb25maWd1cmFibGUgPyBOb2RlIDogRWxlbWVudCkucHJvdG90eXBlLFxuICAgICAgXCJiYXNlVVJJXCIsXG4gICAgICB7XG4gICAgICAgIGdldDogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgdmFyIGEgPSByKHRoaXMpID8gdGhpcyA6IG0odGhpcyk7XG4gICAgICAgICAgcmV0dXJuIGFcbiAgICAgICAgICAgID8gYS5ocmVmXG4gICAgICAgICAgICA6IHAgJiYgcC5nZXRcbiAgICAgICAgICAgID8gcC5nZXQuY2FsbCh0aGlzKVxuICAgICAgICAgICAgOiAoZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcImJhc2VcIikgfHwgd2luZG93LmxvY2F0aW9uKS5ocmVmO1xuICAgICAgICB9LFxuICAgICAgICBjb25maWd1cmFibGU6ICEwLFxuICAgICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICAgIH1cbiAgICApO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShIVE1MTGlua0VsZW1lbnQucHJvdG90eXBlLCBcImltcG9ydFwiLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2ltcG9ydCB8fCBudWxsO1xuICAgICAgfSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogITAsXG4gICAgICBlbnVtZXJhYmxlOiAhMCxcbiAgICB9KTtcbiAgICB6KGZ1bmN0aW9uKCkge1xuICAgICAgeCA9IG5ldyBoKCk7XG4gICAgfSk7XG4gIH1cbiAgQShmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZG9jdW1lbnQuZGlzcGF0Y2hFdmVudChcbiAgICAgIHkoXCJIVE1MSW1wb3J0c0xvYWRlZFwiLCB7IGNhbmNlbGFibGU6ICEwLCBidWJibGVzOiAhMCwgZGV0YWlsOiB2b2lkIDAgfSlcbiAgICApO1xuICB9KTtcbiAgcS51c2VOYXRpdmUgPSB1O1xuICBxLndoZW5SZWFkeSA9IEE7XG4gIHEuaW1wb3J0Rm9yRWxlbWVudCA9IG07XG4gIHEubG9hZEltcG9ydHMgPSBmdW5jdGlvbihhKSB7XG4gICAgeCAmJiB4LmxvYWRJbXBvcnRzKGEpO1xuICB9O1xufSkoKHdpbmRvdy5IVE1MSW1wb3J0cyA9IHdpbmRvdy5IVE1MSW1wb3J0cyB8fCB7fSkpO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBREE7Ozs7Ozs7Ozs7O0FDbkdBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFUQTtBQVdBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFwQ0E7QUFIQTtBQTBDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUF4QkE7QUEwQkE7QUE3QkE7QUF6Q0E7QUFDQTtBQTBFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFEQTtBQUVBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBYUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQVZBO0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9