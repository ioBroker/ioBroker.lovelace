(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~polyfill-web-animations-next"],{

/***/ "./node_modules/web-animations-js/web-animations-next-lite.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/web-animations-js/web-animations-next-lite.min.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Copyright 2014 Google Inc. All rights reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
//     You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
//     See the License for the specific language governing permissions and
// limitations under the License.
!function (a, b) {
  var c = {},
      d = {},
      e = {};
  !function (a, b) {
    function c(a) {
      if ("number" == typeof a) return a;
      var b = {};

      for (var c in a) b[c] = a[c];

      return b;
    }

    function d() {
      this._delay = 0, this._endDelay = 0, this._fill = "none", this._iterationStart = 0, this._iterations = 1, this._duration = 0, this._playbackRate = 1, this._direction = "normal", this._easing = "linear", this._easingFunction = x;
    }

    function e() {
      return a.isDeprecated("Invalid timing inputs", "2016-03-02", "TypeError exceptions will be thrown instead.", !0);
    }

    function f(b, c, e) {
      var f = new d();
      return c && (f.fill = "both", f.duration = "auto"), "number" != typeof b || isNaN(b) ? void 0 !== b && Object.getOwnPropertyNames(b).forEach(function (c) {
        if ("auto" != b[c]) {
          if (("number" == typeof f[c] || "duration" == c) && ("number" != typeof b[c] || isNaN(b[c]))) return;
          if ("fill" == c && -1 == v.indexOf(b[c])) return;
          if ("direction" == c && -1 == w.indexOf(b[c])) return;
          if ("playbackRate" == c && 1 !== b[c] && a.isDeprecated("AnimationEffectTiming.playbackRate", "2014-11-28", "Use Animation.playbackRate instead.")) return;
          f[c] = b[c];
        }
      }) : f.duration = b, f;
    }

    function g(a) {
      return "number" == typeof a && (a = isNaN(a) ? {
        duration: 0
      } : {
        duration: a
      }), a;
    }

    function h(b, c) {
      return b = a.numericTimingToObject(b), f(b, c);
    }

    function i(a, b, c, d) {
      return a < 0 || a > 1 || c < 0 || c > 1 ? x : function (e) {
        function f(a, b, c) {
          return 3 * a * (1 - c) * (1 - c) * c + 3 * b * (1 - c) * c * c + c * c * c;
        }

        if (e <= 0) {
          var g = 0;
          return a > 0 ? g = b / a : !b && c > 0 && (g = d / c), g * e;
        }

        if (e >= 1) {
          var h = 0;
          return c < 1 ? h = (d - 1) / (c - 1) : 1 == c && a < 1 && (h = (b - 1) / (a - 1)), 1 + h * (e - 1);
        }

        for (var i = 0, j = 1; i < j;) {
          var k = (i + j) / 2,
              l = f(a, c, k);
          if (Math.abs(e - l) < 1e-5) return f(b, d, k);
          l < e ? i = k : j = k;
        }

        return f(b, d, k);
      };
    }

    function j(a, b) {
      return function (c) {
        if (c >= 1) return 1;
        var d = 1 / a;
        return (c += b * d) - c % d;
      };
    }

    function k(a) {
      C || (C = document.createElement("div").style), C.animationTimingFunction = "", C.animationTimingFunction = a;
      var b = C.animationTimingFunction;
      if ("" == b && e()) throw new TypeError(a + " is not a valid value for easing");
      return b;
    }

    function l(a) {
      if ("linear" == a) return x;
      var b = E.exec(a);
      if (b) return i.apply(this, b.slice(1).map(Number));
      var c = F.exec(a);
      return c ? j(Number(c[1]), {
        start: y,
        middle: z,
        end: A
      }[c[2]]) : B[a] || x;
    }

    function m(a) {
      return Math.abs(n(a) / a.playbackRate);
    }

    function n(a) {
      return 0 === a.duration || 0 === a.iterations ? 0 : a.duration * a.iterations;
    }

    function o(a, b, c) {
      if (null == b) return G;
      var d = c.delay + a + c.endDelay;
      return b < Math.min(c.delay, d) ? H : b >= Math.min(c.delay + a, d) ? I : J;
    }

    function p(a, b, c, d, e) {
      switch (d) {
        case H:
          return "backwards" == b || "both" == b ? 0 : null;

        case J:
          return c - e;

        case I:
          return "forwards" == b || "both" == b ? a : null;

        case G:
          return null;
      }
    }

    function q(a, b, c, d, e) {
      var f = e;
      return 0 === a ? b !== H && (f += c) : f += d / a, f;
    }

    function r(a, b, c, d, e, f) {
      var g = a === 1 / 0 ? b % 1 : a % 1;
      return 0 !== g || c !== I || 0 === d || 0 === e && 0 !== f || (g = 1), g;
    }

    function s(a, b, c, d) {
      return a === I && b === 1 / 0 ? 1 / 0 : 1 === c ? Math.floor(d) - 1 : Math.floor(d);
    }

    function t(a, b, c) {
      var d = a;

      if ("normal" !== a && "reverse" !== a) {
        var e = b;
        "alternate-reverse" === a && (e += 1), d = "normal", e !== 1 / 0 && e % 2 != 0 && (d = "reverse");
      }

      return "normal" === d ? c : 1 - c;
    }

    function u(a, b, c) {
      var d = o(a, b, c),
          e = p(a, c.fill, b, d, c.delay);
      if (null === e) return null;
      var f = q(c.duration, d, c.iterations, e, c.iterationStart),
          g = r(f, c.iterationStart, d, c.iterations, e, c.duration),
          h = s(d, c.iterations, g, f),
          i = t(c.direction, h, g);
      return c._easingFunction(i);
    }

    var v = "backwards|forwards|both|none".split("|"),
        w = "reverse|alternate|alternate-reverse".split("|"),
        x = function (a) {
      return a;
    };

    d.prototype = {
      _setMember: function (b, c) {
        this["_" + b] = c, this._effect && (this._effect._timingInput[b] = c, this._effect._timing = a.normalizeTimingInput(this._effect._timingInput), this._effect.activeDuration = a.calculateActiveDuration(this._effect._timing), this._effect._animation && this._effect._animation._rebuildUnderlyingAnimation());
      },

      get playbackRate() {
        return this._playbackRate;
      },

      set delay(a) {
        this._setMember("delay", a);
      },

      get delay() {
        return this._delay;
      },

      set endDelay(a) {
        this._setMember("endDelay", a);
      },

      get endDelay() {
        return this._endDelay;
      },

      set fill(a) {
        this._setMember("fill", a);
      },

      get fill() {
        return this._fill;
      },

      set iterationStart(a) {
        if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterationStart must be a non-negative number, received: " + timing.iterationStart);

        this._setMember("iterationStart", a);
      },

      get iterationStart() {
        return this._iterationStart;
      },

      set duration(a) {
        if ("auto" != a && (isNaN(a) || a < 0) && e()) throw new TypeError("duration must be non-negative or auto, received: " + a);

        this._setMember("duration", a);
      },

      get duration() {
        return this._duration;
      },

      set direction(a) {
        this._setMember("direction", a);
      },

      get direction() {
        return this._direction;
      },

      set easing(a) {
        this._easingFunction = l(k(a)), this._setMember("easing", a);
      },

      get easing() {
        return this._easing;
      },

      set iterations(a) {
        if ((isNaN(a) || a < 0) && e()) throw new TypeError("iterations must be non-negative, received: " + a);

        this._setMember("iterations", a);
      },

      get iterations() {
        return this._iterations;
      }

    };
    var y = 1,
        z = .5,
        A = 0,
        B = {
      ease: i(.25, .1, .25, 1),
      "ease-in": i(.42, 0, 1, 1),
      "ease-out": i(0, 0, .58, 1),
      "ease-in-out": i(.42, 0, .58, 1),
      "step-start": j(1, y),
      "step-middle": j(1, z),
      "step-end": j(1, A)
    },
        C = null,
        D = "\\s*(-?\\d+\\.?\\d*|-?\\.\\d+)\\s*",
        E = new RegExp("cubic-bezier\\(" + D + "," + D + "," + D + "," + D + "\\)"),
        F = /steps\(\s*(\d+)\s*,\s*(start|middle|end)\s*\)/,
        G = 0,
        H = 1,
        I = 2,
        J = 3;
    a.cloneTimingInput = c, a.makeTiming = f, a.numericTimingToObject = g, a.normalizeTimingInput = h, a.calculateActiveDuration = m, a.calculateIterationProgress = u, a.calculatePhase = o, a.normalizeEasing = k, a.parseEasingFunction = l;
  }(c), function (a, b) {
    function c(a, b) {
      return a in k ? k[a][b] || b : b;
    }

    function d(a) {
      return "display" === a || 0 === a.lastIndexOf("animation", 0) || 0 === a.lastIndexOf("transition", 0);
    }

    function e(a, b, e) {
      if (!d(a)) {
        var f = h[a];

        if (f) {
          i.style[a] = b;

          for (var g in f) {
            var j = f[g],
                k = i.style[j];
            e[j] = c(j, k);
          }
        } else e[a] = c(a, b);
      }
    }

    function f(a) {
      var b = [];

      for (var c in a) if (!(c in ["easing", "offset", "composite"])) {
        var d = a[c];
        Array.isArray(d) || (d = [d]);

        for (var e, f = d.length, g = 0; g < f; g++) e = {}, e.offset = "offset" in a ? a.offset : 1 == f ? 1 : g / (f - 1), "easing" in a && (e.easing = a.easing), "composite" in a && (e.composite = a.composite), e[c] = d[g], b.push(e);
      }

      return b.sort(function (a, b) {
        return a.offset - b.offset;
      }), b;
    }

    function g(b) {
      function c() {
        var a = d.length;
        null == d[a - 1].offset && (d[a - 1].offset = 1), a > 1 && null == d[0].offset && (d[0].offset = 0);

        for (var b = 0, c = d[0].offset, e = 1; e < a; e++) {
          var f = d[e].offset;

          if (null != f) {
            for (var g = 1; g < e - b; g++) d[b + g].offset = c + (f - c) * g / (e - b);

            b = e, c = f;
          }
        }
      }

      if (null == b) return [];
      window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || (b = f(b));

      for (var d = b.map(function (b) {
        var c = {};

        for (var d in b) {
          var f = b[d];

          if ("offset" == d) {
            if (null != f) {
              if (f = Number(f), !isFinite(f)) throw new TypeError("Keyframe offsets must be numbers.");
              if (f < 0 || f > 1) throw new TypeError("Keyframe offsets must be between 0 and 1.");
            }
          } else if ("composite" == d) {
            if ("add" == f || "accumulate" == f) throw {
              type: DOMException.NOT_SUPPORTED_ERR,
              name: "NotSupportedError",
              message: "add compositing is not supported"
            };
            if ("replace" != f) throw new TypeError("Invalid composite mode " + f + ".");
          } else f = "easing" == d ? a.normalizeEasing(f) : "" + f;

          e(d, f, c);
        }

        return void 0 == c.offset && (c.offset = null), void 0 == c.easing && (c.easing = "linear"), c;
      }), g = !0, h = -1 / 0, i = 0; i < d.length; i++) {
        var j = d[i].offset;

        if (null != j) {
          if (j < h) throw new TypeError("Keyframes are not loosely sorted by offset. Sort or specify offsets.");
          h = j;
        } else g = !1;
      }

      return d = d.filter(function (a) {
        return a.offset >= 0 && a.offset <= 1;
      }), g || c(), d;
    }

    var h = {
      background: ["backgroundImage", "backgroundPosition", "backgroundSize", "backgroundRepeat", "backgroundAttachment", "backgroundOrigin", "backgroundClip", "backgroundColor"],
      border: ["borderTopColor", "borderTopStyle", "borderTopWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderBottom: ["borderBottomWidth", "borderBottomStyle", "borderBottomColor"],
      borderColor: ["borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor"],
      borderLeft: ["borderLeftWidth", "borderLeftStyle", "borderLeftColor"],
      borderRadius: ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"],
      borderRight: ["borderRightWidth", "borderRightStyle", "borderRightColor"],
      borderTop: ["borderTopWidth", "borderTopStyle", "borderTopColor"],
      borderWidth: ["borderTopWidth", "borderRightWidth", "borderBottomWidth", "borderLeftWidth"],
      flex: ["flexGrow", "flexShrink", "flexBasis"],
      font: ["fontFamily", "fontSize", "fontStyle", "fontVariant", "fontWeight", "lineHeight"],
      margin: ["marginTop", "marginRight", "marginBottom", "marginLeft"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      padding: ["paddingTop", "paddingRight", "paddingBottom", "paddingLeft"]
    },
        i = document.createElementNS("http://www.w3.org/1999/xhtml", "div"),
        j = {
      thin: "1px",
      medium: "3px",
      thick: "5px"
    },
        k = {
      borderBottomWidth: j,
      borderLeftWidth: j,
      borderRightWidth: j,
      borderTopWidth: j,
      fontSize: {
        "xx-small": "60%",
        "x-small": "75%",
        small: "89%",
        medium: "100%",
        large: "120%",
        "x-large": "150%",
        "xx-large": "200%"
      },
      fontWeight: {
        normal: "400",
        bold: "700"
      },
      outlineWidth: j,
      textShadow: {
        none: "0px 0px 0px transparent"
      },
      boxShadow: {
        none: "0px 0px 0px 0px transparent"
      }
    };
    a.convertToArrayForm = f, a.normalizeKeyframes = g;
  }(c), function (a) {
    var b = {};
    a.isDeprecated = function (a, c, d, e) {
      var f = e ? "are" : "is",
          g = new Date(),
          h = new Date(c);
      return h.setMonth(h.getMonth() + 3), !(g < h && (a in b || console.warn("Web Animations: " + a + " " + f + " deprecated and will stop working on " + h.toDateString() + ". " + d), b[a] = !0, 1));
    }, a.deprecated = function (b, c, d, e) {
      var f = e ? "are" : "is";
      if (a.isDeprecated(b, c, d, e)) throw new Error(b + " " + f + " no longer supported. " + d);
    };
  }(c), function () {
    if (document.documentElement.animate) {
      var a = document.documentElement.animate([], 0),
          b = !0;
      if (a && (b = !1, "play|currentTime|pause|reverse|playbackRate|cancel|finish|startTime|playState".split("|").forEach(function (c) {
        void 0 === a[c] && (b = !0);
      })), !b) return;
    }

    !function (a, b, c) {
      function d(a) {
        for (var b = {}, c = 0; c < a.length; c++) for (var d in a[c]) if ("offset" != d && "easing" != d && "composite" != d) {
          var e = {
            offset: a[c].offset,
            easing: a[c].easing,
            value: a[c][d]
          };
          b[d] = b[d] || [], b[d].push(e);
        }

        for (var f in b) {
          var g = b[f];
          if (0 != g[0].offset || 1 != g[g.length - 1].offset) throw {
            type: DOMException.NOT_SUPPORTED_ERR,
            name: "NotSupportedError",
            message: "Partial keyframes are not supported"
          };
        }

        return b;
      }

      function e(c) {
        var d = [];

        for (var e in c) for (var f = c[e], g = 0; g < f.length - 1; g++) {
          var h = g,
              i = g + 1,
              j = f[h].offset,
              k = f[i].offset,
              l = j,
              m = k;
          0 == g && (l = -1 / 0, 0 == k && (i = h)), g == f.length - 2 && (m = 1 / 0, 1 == j && (h = i)), d.push({
            applyFrom: l,
            applyTo: m,
            startOffset: f[h].offset,
            endOffset: f[i].offset,
            easingFunction: a.parseEasingFunction(f[h].easing),
            property: e,
            interpolation: b.propertyInterpolation(e, f[h].value, f[i].value)
          });
        }

        return d.sort(function (a, b) {
          return a.startOffset - b.startOffset;
        }), d;
      }

      b.convertEffectInput = function (c) {
        var f = a.normalizeKeyframes(c),
            g = d(f),
            h = e(g);
        return function (a, c) {
          if (null != c) h.filter(function (a) {
            return c >= a.applyFrom && c < a.applyTo;
          }).forEach(function (d) {
            var e = c - d.startOffset,
                f = d.endOffset - d.startOffset,
                g = 0 == f ? 0 : d.easingFunction(e / f);
            b.apply(a, d.property, d.interpolation(g));
          });else for (var d in g) "offset" != d && "easing" != d && "composite" != d && b.clear(a, d);
        };
      };
    }(c, d), function (a, b, c) {
      function d(a) {
        return a.replace(/-(.)/g, function (a, b) {
          return b.toUpperCase();
        });
      }

      function e(a, b, c) {
        h[c] = h[c] || [], h[c].push([a, b]);
      }

      function f(a, b, c) {
        for (var f = 0; f < c.length; f++) {
          e(a, b, d(c[f]));
        }
      }

      function g(c, e, f) {
        var g = c;
        /-/.test(c) && !a.isDeprecated("Hyphenated property names", "2016-03-22", "Use camelCase instead.", !0) && (g = d(c)), "initial" != e && "initial" != f || ("initial" == e && (e = i[g]), "initial" == f && (f = i[g]));

        for (var j = e == f ? [] : h[g], k = 0; j && k < j.length; k++) {
          var l = j[k][0](e),
              m = j[k][0](f);

          if (void 0 !== l && void 0 !== m) {
            var n = j[k][1](l, m);

            if (n) {
              var o = b.Interpolation.apply(null, n);
              return function (a) {
                return 0 == a ? e : 1 == a ? f : o(a);
              };
            }
          }
        }

        return b.Interpolation(!1, !0, function (a) {
          return a ? f : e;
        });
      }

      var h = {};
      b.addPropertiesHandler = f;
      var i = {
        backgroundColor: "transparent",
        backgroundPosition: "0% 0%",
        borderBottomColor: "currentColor",
        borderBottomLeftRadius: "0px",
        borderBottomRightRadius: "0px",
        borderBottomWidth: "3px",
        borderLeftColor: "currentColor",
        borderLeftWidth: "3px",
        borderRightColor: "currentColor",
        borderRightWidth: "3px",
        borderSpacing: "2px",
        borderTopColor: "currentColor",
        borderTopLeftRadius: "0px",
        borderTopRightRadius: "0px",
        borderTopWidth: "3px",
        bottom: "auto",
        clip: "rect(0px, 0px, 0px, 0px)",
        color: "black",
        fontSize: "100%",
        fontWeight: "400",
        height: "auto",
        left: "auto",
        letterSpacing: "normal",
        lineHeight: "120%",
        marginBottom: "0px",
        marginLeft: "0px",
        marginRight: "0px",
        marginTop: "0px",
        maxHeight: "none",
        maxWidth: "none",
        minHeight: "0px",
        minWidth: "0px",
        opacity: "1.0",
        outlineColor: "invert",
        outlineOffset: "0px",
        outlineWidth: "3px",
        paddingBottom: "0px",
        paddingLeft: "0px",
        paddingRight: "0px",
        paddingTop: "0px",
        right: "auto",
        strokeDasharray: "none",
        strokeDashoffset: "0px",
        textIndent: "0px",
        textShadow: "0px 0px 0px transparent",
        top: "auto",
        transform: "",
        verticalAlign: "0px",
        visibility: "visible",
        width: "auto",
        wordSpacing: "normal",
        zIndex: "auto"
      };
      b.propertyInterpolation = g;
    }(c, d), function (a, b, c) {
      function d(b) {
        var c = a.calculateActiveDuration(b),
            d = function (d) {
          return a.calculateIterationProgress(c, d, b);
        };

        return d._totalDuration = b.delay + c + b.endDelay, d;
      }

      b.KeyframeEffect = function (c, e, f, g) {
        var h,
            i = d(a.normalizeTimingInput(f)),
            j = b.convertEffectInput(e),
            k = function () {
          j(c, h);
        };

        return k._update = function (a) {
          return null !== (h = i(a));
        }, k._clear = function () {
          j(c, null);
        }, k._hasSameTarget = function (a) {
          return c === a;
        }, k._target = c, k._totalDuration = i._totalDuration, k._id = g, k;
      };
    }(c, d), function (a, b) {
      a.apply = function (b, c, d) {
        b.style[a.propertyName(c)] = d;
      }, a.clear = function (b, c) {
        b.style[a.propertyName(c)] = "";
      };
    }(d), function (a) {
      window.Element.prototype.animate = function (b, c) {
        var d = "";
        return c && c.id && (d = c.id), a.timeline._play(a.KeyframeEffect(this, b, c, d));
      };
    }(d), function (a, b) {
      function c(a, b, d) {
        if ("number" == typeof a && "number" == typeof b) return a * (1 - d) + b * d;
        if ("boolean" == typeof a && "boolean" == typeof b) return d < .5 ? a : b;

        if (a.length == b.length) {
          for (var e = [], f = 0; f < a.length; f++) e.push(c(a[f], b[f], d));

          return e;
        }

        throw "Mismatched interpolation arguments " + a + ":" + b;
      }

      a.Interpolation = function (a, b, d) {
        return function (e) {
          return d(c(a, b, e));
        };
      };
    }(d), function (a, b, c) {
      a.sequenceNumber = 0;

      var d = function (a, b, c) {
        this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "finish", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
      };

      b.Animation = function (b) {
        this.id = "", b && b._id && (this.id = b._id), this._sequenceNumber = a.sequenceNumber++, this._currentTime = 0, this._startTime = null, this._paused = !1, this._playbackRate = 1, this._inTimeline = !0, this._finishedFlag = !0, this.onfinish = null, this._finishHandlers = [], this._effect = b, this._inEffect = this._effect._update(0), this._idle = !0, this._currentTimePending = !1;
      }, b.Animation.prototype = {
        _ensureAlive: function () {
          this.playbackRate < 0 && 0 === this.currentTime ? this._inEffect = this._effect._update(-1) : this._inEffect = this._effect._update(this.currentTime), this._inTimeline || !this._inEffect && this._finishedFlag || (this._inTimeline = !0, b.timeline._animations.push(this));
        },
        _tickCurrentTime: function (a, b) {
          a != this._currentTime && (this._currentTime = a, this._isFinished && !b && (this._currentTime = this._playbackRate > 0 ? this._totalDuration : 0), this._ensureAlive());
        },

        get currentTime() {
          return this._idle || this._currentTimePending ? null : this._currentTime;
        },

        set currentTime(a) {
          a = +a, isNaN(a) || (b.restart(), this._paused || null == this._startTime || (this._startTime = this._timeline.currentTime - a / this._playbackRate), this._currentTimePending = !1, this._currentTime != a && (this._idle && (this._idle = !1, this._paused = !0), this._tickCurrentTime(a, !0), b.applyDirtiedAnimation(this)));
        },

        get startTime() {
          return this._startTime;
        },

        set startTime(a) {
          a = +a, isNaN(a) || this._paused || this._idle || (this._startTime = a, this._tickCurrentTime((this._timeline.currentTime - this._startTime) * this.playbackRate), b.applyDirtiedAnimation(this));
        },

        get playbackRate() {
          return this._playbackRate;
        },

        set playbackRate(a) {
          if (a != this._playbackRate) {
            var c = this.currentTime;
            this._playbackRate = a, this._startTime = null, "paused" != this.playState && "idle" != this.playState && (this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this)), null != c && (this.currentTime = c);
          }
        },

        get _isFinished() {
          return !this._idle && (this._playbackRate > 0 && this._currentTime >= this._totalDuration || this._playbackRate < 0 && this._currentTime <= 0);
        },

        get _totalDuration() {
          return this._effect._totalDuration;
        },

        get playState() {
          return this._idle ? "idle" : null == this._startTime && !this._paused && 0 != this.playbackRate || this._currentTimePending ? "pending" : this._paused ? "paused" : this._isFinished ? "finished" : "running";
        },

        _rewind: function () {
          if (this._playbackRate >= 0) this._currentTime = 0;else {
            if (!(this._totalDuration < 1 / 0)) throw new DOMException("Unable to rewind negative playback rate animation with infinite duration", "InvalidStateError");
            this._currentTime = this._totalDuration;
          }
        },
        play: function () {
          this._paused = !1, (this._isFinished || this._idle) && (this._rewind(), this._startTime = null), this._finishedFlag = !1, this._idle = !1, this._ensureAlive(), b.applyDirtiedAnimation(this);
        },
        pause: function () {
          this._isFinished || this._paused || this._idle ? this._idle && (this._rewind(), this._idle = !1) : this._currentTimePending = !0, this._startTime = null, this._paused = !0;
        },
        finish: function () {
          this._idle || (this.currentTime = this._playbackRate > 0 ? this._totalDuration : 0, this._startTime = this._totalDuration - this.currentTime, this._currentTimePending = !1, b.applyDirtiedAnimation(this));
        },
        cancel: function () {
          this._inEffect && (this._inEffect = !1, this._idle = !0, this._paused = !1, this._isFinished = !0, this._finishedFlag = !0, this._currentTime = 0, this._startTime = null, this._effect._update(null), b.applyDirtiedAnimation(this));
        },
        reverse: function () {
          this.playbackRate *= -1, this.play();
        },
        addEventListener: function (a, b) {
          "function" == typeof b && "finish" == a && this._finishHandlers.push(b);
        },
        removeEventListener: function (a, b) {
          if ("finish" == a) {
            var c = this._finishHandlers.indexOf(b);

            c >= 0 && this._finishHandlers.splice(c, 1);
          }
        },
        _fireEvents: function (a) {
          if (this._isFinished) {
            if (!this._finishedFlag) {
              var b = new d(this, this._currentTime, a),
                  c = this._finishHandlers.concat(this.onfinish ? [this.onfinish] : []);

              setTimeout(function () {
                c.forEach(function (a) {
                  a.call(b.target, b);
                });
              }, 0), this._finishedFlag = !0;
            }
          } else this._finishedFlag = !1;
        },
        _tick: function (a, b) {
          this._idle || this._paused || (null == this._startTime ? b && (this.startTime = a - this._currentTime / this.playbackRate) : this._isFinished || this._tickCurrentTime((a - this._startTime) * this.playbackRate)), b && (this._currentTimePending = !1, this._fireEvents(a));
        },

        get _needsTick() {
          return this.playState in {
            pending: 1,
            running: 1
          } || !this._finishedFlag;
        },

        _targetAnimations: function () {
          var a = this._effect._target;
          return a._activeAnimations || (a._activeAnimations = []), a._activeAnimations;
        },
        _markTarget: function () {
          var a = this._targetAnimations();

          -1 === a.indexOf(this) && a.push(this);
        },
        _unmarkTarget: function () {
          var a = this._targetAnimations(),
              b = a.indexOf(this);

          -1 !== b && a.splice(b, 1);
        }
      };
    }(c, d), function (a, b, c) {
      function d(a) {
        var b = j;
        j = [], a < q.currentTime && (a = q.currentTime), q._animations.sort(e), q._animations = h(a, !0, q._animations)[0], b.forEach(function (b) {
          b[1](a);
        }), g(), l = void 0;
      }

      function e(a, b) {
        return a._sequenceNumber - b._sequenceNumber;
      }

      function f() {
        this._animations = [], this.currentTime = window.performance && performance.now ? performance.now() : 0;
      }

      function g() {
        o.forEach(function (a) {
          a();
        }), o.length = 0;
      }

      function h(a, c, d) {
        p = !0, n = !1, b.timeline.currentTime = a, m = !1;
        var e = [],
            f = [],
            g = [],
            h = [];
        return d.forEach(function (b) {
          b._tick(a, c), b._inEffect ? (f.push(b._effect), b._markTarget()) : (e.push(b._effect), b._unmarkTarget()), b._needsTick && (m = !0);
          var d = b._inEffect || b._needsTick;
          b._inTimeline = d, d ? g.push(b) : h.push(b);
        }), o.push.apply(o, e), o.push.apply(o, f), m && requestAnimationFrame(function () {}), p = !1, [g, h];
      }

      var i = window.requestAnimationFrame,
          j = [],
          k = 0;
      window.requestAnimationFrame = function (a) {
        var b = k++;
        return 0 == j.length && i(d), j.push([b, a]), b;
      }, window.cancelAnimationFrame = function (a) {
        j.forEach(function (b) {
          b[0] == a && (b[1] = function () {});
        });
      }, f.prototype = {
        _play: function (c) {
          c._timing = a.normalizeTimingInput(c.timing);
          var d = new b.Animation(c);
          return d._idle = !1, d._timeline = this, this._animations.push(d), b.restart(), b.applyDirtiedAnimation(d), d;
        }
      };
      var l = void 0,
          m = !1,
          n = !1;
      b.restart = function () {
        return m || (m = !0, requestAnimationFrame(function () {}), n = !0), n;
      }, b.applyDirtiedAnimation = function (a) {
        if (!p) {
          a._markTarget();

          var c = a._targetAnimations();

          c.sort(e), h(b.timeline.currentTime, !1, c.slice())[1].forEach(function (a) {
            var b = q._animations.indexOf(a);

            -1 !== b && q._animations.splice(b, 1);
          }), g();
        }
      };
      var o = [],
          p = !1,
          q = new f();
      b.timeline = q;
    }(c, d), function (a) {
      function b(a, b) {
        var c = a.exec(b);
        if (c) return c = a.ignoreCase ? c[0].toLowerCase() : c[0], [c, b.substr(c.length)];
      }

      function c(a, b) {
        b = b.replace(/^\s*/, "");
        var c = a(b);
        if (c) return [c[0], c[1].replace(/^\s*/, "")];
      }

      function d(a, d, e) {
        a = c.bind(null, a);

        for (var f = [];;) {
          var g = a(e);
          if (!g) return [f, e];
          if (f.push(g[0]), e = g[1], !(g = b(d, e)) || "" == g[1]) return [f, e];
          e = g[1];
        }
      }

      function e(a, b) {
        for (var c = 0, d = 0; d < b.length && (!/\s|,/.test(b[d]) || 0 != c); d++) if ("(" == b[d]) c++;else if (")" == b[d] && (c--, 0 == c && d++, c <= 0)) break;

        var e = a(b.substr(0, d));
        return void 0 == e ? void 0 : [e, b.substr(d)];
      }

      function f(a, b) {
        for (var c = a, d = b; c && d;) c > d ? c %= d : d %= c;

        return c = a * b / (c + d);
      }

      function g(a) {
        return function (b) {
          var c = a(b);
          return c && (c[0] = void 0), c;
        };
      }

      function h(a, b) {
        return function (c) {
          return a(c) || [b, c];
        };
      }

      function i(b, c) {
        for (var d = [], e = 0; e < b.length; e++) {
          var f = a.consumeTrimmed(b[e], c);
          if (!f || "" == f[0]) return;
          void 0 !== f[0] && d.push(f[0]), c = f[1];
        }

        if ("" == c) return d;
      }

      function j(a, b, c, d, e) {
        for (var g = [], h = [], i = [], j = f(d.length, e.length), k = 0; k < j; k++) {
          var l = b(d[k % d.length], e[k % e.length]);
          if (!l) return;
          g.push(l[0]), h.push(l[1]), i.push(l[2]);
        }

        return [g, h, function (b) {
          var d = b.map(function (a, b) {
            return i[b](a);
          }).join(c);
          return a ? a(d) : d;
        }];
      }

      function k(a, b, c) {
        for (var d = [], e = [], f = [], g = 0, h = 0; h < c.length; h++) if ("function" == typeof c[h]) {
          var i = c[h](a[g], b[g++]);
          d.push(i[0]), e.push(i[1]), f.push(i[2]);
        } else !function (a) {
          d.push(!1), e.push(!1), f.push(function () {
            return c[a];
          });
        }(h);

        return [d, e, function (a) {
          for (var b = "", c = 0; c < a.length; c++) b += f[c](a[c]);

          return b;
        }];
      }

      a.consumeToken = b, a.consumeTrimmed = c, a.consumeRepeated = d, a.consumeParenthesised = e, a.ignore = g, a.optional = h, a.consumeList = i, a.mergeNestedRepeated = j.bind(null, null), a.mergeWrappedNestedRepeated = j, a.mergeList = k;
    }(d), function (a) {
      function b(b) {
        function c(b) {
          var c = a.consumeToken(/^inset/i, b);
          if (c) return d.inset = !0, c;
          var c = a.consumeLengthOrPercent(b);
          if (c) return d.lengths.push(c[0]), c;
          var c = a.consumeColor(b);
          return c ? (d.color = c[0], c) : void 0;
        }

        var d = {
          inset: !1,
          lengths: [],
          color: null
        },
            e = a.consumeRepeated(c, /^/, b);
        if (e && e[0].length) return [d, e[1]];
      }

      function c(c) {
        var d = a.consumeRepeated(b, /^,/, c);
        if (d && "" == d[1]) return d[0];
      }

      function d(b, c) {
        for (; b.lengths.length < Math.max(b.lengths.length, c.lengths.length);) b.lengths.push({
          px: 0
        });

        for (; c.lengths.length < Math.max(b.lengths.length, c.lengths.length);) c.lengths.push({
          px: 0
        });

        if (b.inset == c.inset && !!b.color == !!c.color) {
          for (var d, e = [], f = [[], 0], g = [[], 0], h = 0; h < b.lengths.length; h++) {
            var i = a.mergeDimensions(b.lengths[h], c.lengths[h], 2 == h);
            f[0].push(i[0]), g[0].push(i[1]), e.push(i[2]);
          }

          if (b.color && c.color) {
            var j = a.mergeColors(b.color, c.color);
            f[1] = j[0], g[1] = j[1], d = j[2];
          }

          return [f, g, function (a) {
            for (var c = b.inset ? "inset " : " ", f = 0; f < e.length; f++) c += e[f](a[0][f]) + " ";

            return d && (c += d(a[1])), c;
          }];
        }
      }

      function e(b, c, d, e) {
        function f(a) {
          return {
            inset: a,
            color: [0, 0, 0, 0],
            lengths: [{
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }, {
              px: 0
            }]
          };
        }

        for (var g = [], h = [], i = 0; i < d.length || i < e.length; i++) {
          var j = d[i] || f(e[i].inset),
              k = e[i] || f(d[i].inset);
          g.push(j), h.push(k);
        }

        return a.mergeNestedRepeated(b, c, g, h);
      }

      var f = e.bind(null, d, ", ");
      a.addPropertiesHandler(c, f, ["box-shadow", "text-shadow"]);
    }(d), function (a, b) {
      function c(a) {
        return a.toFixed(3).replace(/0+$/, "").replace(/\.$/, "");
      }

      function d(a, b, c) {
        return Math.min(b, Math.max(a, c));
      }

      function e(a) {
        if (/^\s*[-+]?(\d*\.)?\d+\s*$/.test(a)) return Number(a);
      }

      function f(a, b) {
        return [a, b, c];
      }

      function g(a, b) {
        if (0 != a) return i(0, 1 / 0)(a, b);
      }

      function h(a, b) {
        return [a, b, function (a) {
          return Math.round(d(1, 1 / 0, a));
        }];
      }

      function i(a, b) {
        return function (e, f) {
          return [e, f, function (e) {
            return c(d(a, b, e));
          }];
        };
      }

      function j(a) {
        var b = a.trim().split(/\s*[\s,]\s*/);

        if (0 !== b.length) {
          for (var c = [], d = 0; d < b.length; d++) {
            var f = e(b[d]);
            if (void 0 === f) return;
            c.push(f);
          }

          return c;
        }
      }

      function k(a, b) {
        if (a.length == b.length) return [a, b, function (a) {
          return a.map(c).join(" ");
        }];
      }

      function l(a, b) {
        return [a, b, Math.round];
      }

      a.clamp = d, a.addPropertiesHandler(j, k, ["stroke-dasharray"]), a.addPropertiesHandler(e, i(0, 1 / 0), ["border-image-width", "line-height"]), a.addPropertiesHandler(e, i(0, 1), ["opacity", "shape-image-threshold"]), a.addPropertiesHandler(e, g, ["flex-grow", "flex-shrink"]), a.addPropertiesHandler(e, h, ["orphans", "widows"]), a.addPropertiesHandler(e, l, ["z-index"]), a.parseNumber = e, a.parseNumberList = j, a.mergeNumbers = f, a.numberToString = c;
    }(d), function (a, b) {
      function c(a, b) {
        if ("visible" == a || "visible" == b) return [0, 1, function (c) {
          return c <= 0 ? a : c >= 1 ? b : "visible";
        }];
      }

      a.addPropertiesHandler(String, c, ["visibility"]);
    }(d), function (a, b) {
      function c(a) {
        a = a.trim(), f.fillStyle = "#000", f.fillStyle = a;
        var b = f.fillStyle;

        if (f.fillStyle = "#fff", f.fillStyle = a, b == f.fillStyle) {
          f.fillRect(0, 0, 1, 1);
          var c = f.getImageData(0, 0, 1, 1).data;
          f.clearRect(0, 0, 1, 1);
          var d = c[3] / 255;
          return [c[0] * d, c[1] * d, c[2] * d, d];
        }
      }

      function d(b, c) {
        return [b, c, function (b) {
          function c(a) {
            return Math.max(0, Math.min(255, a));
          }

          if (b[3]) for (var d = 0; d < 3; d++) b[d] = Math.round(c(b[d] / b[3]));
          return b[3] = a.numberToString(a.clamp(0, 1, b[3])), "rgba(" + b.join(",") + ")";
        }];
      }

      var e = document.createElementNS("http://www.w3.org/1999/xhtml", "canvas");
      e.width = e.height = 1;
      var f = e.getContext("2d");
      a.addPropertiesHandler(c, d, ["background-color", "border-bottom-color", "border-left-color", "border-right-color", "border-top-color", "color", "fill", "flood-color", "lighting-color", "outline-color", "stop-color", "stroke", "text-decoration-color"]), a.consumeColor = a.consumeParenthesised.bind(null, c), a.mergeColors = d;
    }(d), function (a, b) {
      function c(a) {
        function b() {
          var b = h.exec(a);
          g = b ? b[0] : void 0;
        }

        function c() {
          var a = Number(g);
          return b(), a;
        }

        function d() {
          if ("(" !== g) return c();
          b();
          var a = f();
          return ")" !== g ? NaN : (b(), a);
        }

        function e() {
          for (var a = d(); "*" === g || "/" === g;) {
            var c = g;
            b();
            var e = d();
            "*" === c ? a *= e : a /= e;
          }

          return a;
        }

        function f() {
          for (var a = e(); "+" === g || "-" === g;) {
            var c = g;
            b();
            var d = e();
            "+" === c ? a += d : a -= d;
          }

          return a;
        }

        var g,
            h = /([\+\-\w\.]+|[\(\)\*\/])/g;
        return b(), f();
      }

      function d(a, b) {
        if ("0" == (b = b.trim().toLowerCase()) && "px".search(a) >= 0) return {
          px: 0
        };

        if (/^[^(]*$|^calc/.test(b)) {
          b = b.replace(/calc\(/g, "(");
          var d = {};
          b = b.replace(a, function (a) {
            return d[a] = null, "U" + a;
          });

          for (var e = "U(" + a.source + ")", f = b.replace(/[-+]?(\d*\.)?\d+([Ee][-+]?\d+)?/g, "N").replace(new RegExp("N" + e, "g"), "D").replace(/\s[+-]\s/g, "O").replace(/\s/g, ""), g = [/N\*(D)/g, /(N|D)[*\/]N/g, /(N|D)O\1/g, /\((N|D)\)/g], h = 0; h < g.length;) g[h].test(f) ? (f = f.replace(g[h], "$1"), h = 0) : h++;

          if ("D" == f) {
            for (var i in d) {
              var j = c(b.replace(new RegExp("U" + i, "g"), "").replace(new RegExp(e, "g"), "*0"));
              if (!isFinite(j)) return;
              d[i] = j;
            }

            return d;
          }
        }
      }

      function e(a, b) {
        return f(a, b, !0);
      }

      function f(b, c, d) {
        var e,
            f = [];

        for (e in b) f.push(e);

        for (e in c) f.indexOf(e) < 0 && f.push(e);

        return b = f.map(function (a) {
          return b[a] || 0;
        }), c = f.map(function (a) {
          return c[a] || 0;
        }), [b, c, function (b) {
          var c = b.map(function (c, e) {
            return 1 == b.length && d && (c = Math.max(c, 0)), a.numberToString(c) + f[e];
          }).join(" + ");
          return b.length > 1 ? "calc(" + c + ")" : c;
        }];
      }

      var g = "px|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc",
          h = d.bind(null, new RegExp(g, "g")),
          i = d.bind(null, new RegExp(g + "|%", "g")),
          j = d.bind(null, /deg|rad|grad|turn/g);
      a.parseLength = h, a.parseLengthOrPercent = i, a.consumeLengthOrPercent = a.consumeParenthesised.bind(null, i), a.parseAngle = j, a.mergeDimensions = f;
      var k = a.consumeParenthesised.bind(null, h),
          l = a.consumeRepeated.bind(void 0, k, /^/),
          m = a.consumeRepeated.bind(void 0, l, /^,/);
      a.consumeSizePairList = m;

      var n = function (a) {
        var b = m(a);
        if (b && "" == b[1]) return b[0];
      },
          o = a.mergeNestedRepeated.bind(void 0, e, " "),
          p = a.mergeNestedRepeated.bind(void 0, o, ",");

      a.mergeNonNegativeSizePair = o, a.addPropertiesHandler(n, p, ["background-size"]), a.addPropertiesHandler(i, e, ["border-bottom-width", "border-image-width", "border-left-width", "border-right-width", "border-top-width", "flex-basis", "font-size", "height", "line-height", "max-height", "max-width", "outline-width", "width"]), a.addPropertiesHandler(i, f, ["border-bottom-left-radius", "border-bottom-right-radius", "border-top-left-radius", "border-top-right-radius", "bottom", "left", "letter-spacing", "margin-bottom", "margin-left", "margin-right", "margin-top", "min-height", "min-width", "outline-offset", "padding-bottom", "padding-left", "padding-right", "padding-top", "perspective", "right", "shape-margin", "stroke-dashoffset", "text-indent", "top", "vertical-align", "word-spacing"]);
    }(d), function (a, b) {
      function c(b) {
        return a.consumeLengthOrPercent(b) || a.consumeToken(/^auto/, b);
      }

      function d(b) {
        var d = a.consumeList([a.ignore(a.consumeToken.bind(null, /^rect/)), a.ignore(a.consumeToken.bind(null, /^\(/)), a.consumeRepeated.bind(null, c, /^,/), a.ignore(a.consumeToken.bind(null, /^\)/))], b);
        if (d && 4 == d[0].length) return d[0];
      }

      function e(b, c) {
        return "auto" == b || "auto" == c ? [!0, !1, function (d) {
          var e = d ? b : c;
          if ("auto" == e) return "auto";
          var f = a.mergeDimensions(e, e);
          return f[2](f[0]);
        }] : a.mergeDimensions(b, c);
      }

      function f(a) {
        return "rect(" + a + ")";
      }

      var g = a.mergeWrappedNestedRepeated.bind(null, f, e, ", ");
      a.parseBox = d, a.mergeBoxes = g, a.addPropertiesHandler(d, g, ["clip"]);
    }(d), function (a, b) {
      function c(a) {
        return function (b) {
          var c = 0;
          return a.map(function (a) {
            return a === k ? b[c++] : a;
          });
        };
      }

      function d(a) {
        return a;
      }

      function e(b) {
        if ("none" == (b = b.toLowerCase().trim())) return [];

        for (var c, d = /\s*(\w+)\(([^)]*)\)/g, e = [], f = 0; c = d.exec(b);) {
          if (c.index != f) return;
          f = c.index + c[0].length;
          var g = c[1],
              h = n[g];
          if (!h) return;
          var i = c[2].split(","),
              j = h[0];
          if (j.length < i.length) return;

          for (var k = [], o = 0; o < j.length; o++) {
            var p,
                q = i[o],
                r = j[o];
            if (void 0 === (p = q ? {
              A: function (b) {
                return "0" == b.trim() ? m : a.parseAngle(b);
              },
              N: a.parseNumber,
              T: a.parseLengthOrPercent,
              L: a.parseLength
            }[r.toUpperCase()](q) : {
              a: m,
              n: k[0],
              t: l
            }[r])) return;
            k.push(p);
          }

          if (e.push({
            t: g,
            d: k
          }), d.lastIndex == b.length) return e;
        }
      }

      function f(a) {
        return a.toFixed(6).replace(".000000", "");
      }

      function g(b, c) {
        if (b.decompositionPair !== c) {
          b.decompositionPair = c;
          var d = a.makeMatrixDecomposition(b);
        }

        if (c.decompositionPair !== b) {
          c.decompositionPair = b;
          var e = a.makeMatrixDecomposition(c);
        }

        return null == d[0] || null == e[0] ? [[!1], [!0], function (a) {
          return a ? c[0].d : b[0].d;
        }] : (d[0].push(0), e[0].push(1), [d, e, function (b) {
          var c = a.quat(d[0][3], e[0][3], b[5]);
          return a.composeMatrix(b[0], b[1], b[2], c, b[4]).map(f).join(",");
        }]);
      }

      function h(a) {
        return a.replace(/[xy]/, "");
      }

      function i(a) {
        return a.replace(/(x|y|z|3d)?$/, "3d");
      }

      function j(b, c) {
        var d = a.makeMatrixDecomposition && !0,
            e = !1;

        if (!b.length || !c.length) {
          b.length || (e = !0, b = c, c = []);

          for (var f = 0; f < b.length; f++) {
            var j = b[f].t,
                k = b[f].d,
                l = "scale" == j.substr(0, 5) ? 1 : 0;
            c.push({
              t: j,
              d: k.map(function (a) {
                if ("number" == typeof a) return l;
                var b = {};

                for (var c in a) b[c] = l;

                return b;
              })
            });
          }
        }

        var m = function (a, b) {
          return "perspective" == a && "perspective" == b || ("matrix" == a || "matrix3d" == a) && ("matrix" == b || "matrix3d" == b);
        },
            o = [],
            p = [],
            q = [];

        if (b.length != c.length) {
          if (!d) return;
          var r = g(b, c);
          o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];
        } else for (var f = 0; f < b.length; f++) {
          var j,
              s = b[f].t,
              t = c[f].t,
              u = b[f].d,
              v = c[f].d,
              w = n[s],
              x = n[t];

          if (m(s, t)) {
            if (!d) return;
            var r = g([b[f]], [c[f]]);
            o.push(r[0]), p.push(r[1]), q.push(["matrix", [r[2]]]);
          } else {
            if (s == t) j = s;else if (w[2] && x[2] && h(s) == h(t)) j = h(s), u = w[2](u), v = x[2](v);else {
              if (!w[1] || !x[1] || i(s) != i(t)) {
                if (!d) return;
                var r = g(b, c);
                o = [r[0]], p = [r[1]], q = [["matrix", [r[2]]]];
                break;
              }

              j = i(s), u = w[1](u), v = x[1](v);
            }

            for (var y = [], z = [], A = [], B = 0; B < u.length; B++) {
              var C = "number" == typeof u[B] ? a.mergeNumbers : a.mergeDimensions,
                  r = C(u[B], v[B]);
              y[B] = r[0], z[B] = r[1], A.push(r[2]);
            }

            o.push(y), p.push(z), q.push([j, A]);
          }
        }

        if (e) {
          var D = o;
          o = p, p = D;
        }

        return [o, p, function (a) {
          return a.map(function (a, b) {
            var c = a.map(function (a, c) {
              return q[b][1][c](a);
            }).join(",");
            return "matrix" == q[b][0] && 16 == c.split(",").length && (q[b][0] = "matrix3d"), q[b][0] + "(" + c + ")";
          }).join(" ");
        }];
      }

      var k = null,
          l = {
        px: 0
      },
          m = {
        deg: 0
      },
          n = {
        matrix: ["NNNNNN", [k, k, 0, 0, k, k, 0, 0, 0, 0, 1, 0, k, k, 0, 1], d],
        matrix3d: ["NNNNNNNNNNNNNNNN", d],
        rotate: ["A"],
        rotatex: ["A"],
        rotatey: ["A"],
        rotatez: ["A"],
        rotate3d: ["NNNA"],
        perspective: ["L"],
        scale: ["Nn", c([k, k, 1]), d],
        scalex: ["N", c([k, 1, 1]), c([k, 1])],
        scaley: ["N", c([1, k, 1]), c([1, k])],
        scalez: ["N", c([1, 1, k])],
        scale3d: ["NNN", d],
        skew: ["Aa", null, d],
        skewx: ["A", null, c([k, m])],
        skewy: ["A", null, c([m, k])],
        translate: ["Tt", c([k, k, l]), d],
        translatex: ["T", c([k, l, l]), c([k, l])],
        translatey: ["T", c([l, k, l]), c([l, k])],
        translatez: ["L", c([l, l, k])],
        translate3d: ["TTL", d]
      };
      a.addPropertiesHandler(e, j, ["transform"]), a.transformToSvgMatrix = function (b) {
        var c = a.transformListToMatrix(e(b));
        return "matrix(" + f(c[0]) + " " + f(c[1]) + " " + f(c[4]) + " " + f(c[5]) + " " + f(c[12]) + " " + f(c[13]) + ")";
      };
    }(d), function (a, b) {
      function c(a, b) {
        b.concat([a]).forEach(function (b) {
          b in document.documentElement.style && (d[a] = b), e[b] = a;
        });
      }

      var d = {},
          e = {};
      c("transform", ["webkitTransform", "msTransform"]), c("transformOrigin", ["webkitTransformOrigin"]), c("perspective", ["webkitPerspective"]), c("perspectiveOrigin", ["webkitPerspectiveOrigin"]), a.propertyName = function (a) {
        return d[a] || a;
      }, a.unprefixedPropertyName = function (a) {
        return e[a] || a;
      };
    }(d);
  }(), function () {
    if (void 0 === document.createElement("div").animate([]).oncancel) {
      var a;
      if (window.performance && performance.now) var a = function () {
        return performance.now();
      };else var a = function () {
        return Date.now();
      };

      var b = function (a, b, c) {
        this.target = a, this.currentTime = b, this.timelineTime = c, this.type = "cancel", this.bubbles = !1, this.cancelable = !1, this.currentTarget = a, this.defaultPrevented = !1, this.eventPhase = Event.AT_TARGET, this.timeStamp = Date.now();
      },
          c = window.Element.prototype.animate;

      window.Element.prototype.animate = function (d, e) {
        var f = c.call(this, d, e);
        f._cancelHandlers = [], f.oncancel = null;
        var g = f.cancel;

        f.cancel = function () {
          g.call(this);

          var c = new b(this, null, a()),
              d = this._cancelHandlers.concat(this.oncancel ? [this.oncancel] : []);

          setTimeout(function () {
            d.forEach(function (a) {
              a.call(c.target, c);
            });
          }, 0);
        };

        var h = f.addEventListener;

        f.addEventListener = function (a, b) {
          "function" == typeof b && "cancel" == a ? this._cancelHandlers.push(b) : h.call(this, a, b);
        };

        var i = f.removeEventListener;
        return f.removeEventListener = function (a, b) {
          if ("cancel" == a) {
            var c = this._cancelHandlers.indexOf(b);

            c >= 0 && this._cancelHandlers.splice(c, 1);
          } else i.call(this, a, b);
        }, f;
      };
    }
  }(), function (a) {
    var b = document.documentElement,
        c = null,
        d = !1;

    try {
      var e = getComputedStyle(b).getPropertyValue("opacity"),
          f = "0" == e ? "1" : "0";
      c = b.animate({
        opacity: [f, f]
      }, {
        duration: 1
      }), c.currentTime = 0, d = getComputedStyle(b).getPropertyValue("opacity") == f;
    } catch (a) {} finally {
      c && c.cancel();
    }

    if (!d) {
      var g = window.Element.prototype.animate;

      window.Element.prototype.animate = function (b, c) {
        return window.Symbol && Symbol.iterator && Array.prototype.from && b[Symbol.iterator] && (b = Array.from(b)), Array.isArray(b) || null === b || (b = a.convertToArrayForm(b)), g.call(this, b, c);
      };
    }
  }(c), function (a, b, c) {
    function d(a) {
      var c = b.timeline;
      c.currentTime = a, c._discardAnimations(), 0 == c._animations.length ? f = !1 : requestAnimationFrame(d);
    }

    var e = window.requestAnimationFrame;
    window.requestAnimationFrame = function (a) {
      return e(function (c) {
        b.timeline._updateAnimationsPromises(), a(c), b.timeline._updateAnimationsPromises();
      });
    }, b.AnimationTimeline = function () {
      this._animations = [], this.currentTime = void 0;
    }, b.AnimationTimeline.prototype = {
      getAnimations: function () {
        return this._discardAnimations(), this._animations.slice();
      },
      _updateAnimationsPromises: function () {
        b.animationsWithPromises = b.animationsWithPromises.filter(function (a) {
          return a._updatePromises();
        });
      },
      _discardAnimations: function () {
        this._updateAnimationsPromises(), this._animations = this._animations.filter(function (a) {
          return "finished" != a.playState && "idle" != a.playState;
        });
      },
      _play: function (a) {
        var c = new b.Animation(a, this);
        return this._animations.push(c), b.restartWebAnimationsNextTick(), c._updatePromises(), c._animation.play(), c._updatePromises(), c;
      },
      play: function (a) {
        return a && a.remove(), this._play(a);
      }
    };
    var f = !1;

    b.restartWebAnimationsNextTick = function () {
      f || (f = !0, requestAnimationFrame(d));
    };

    var g = new b.AnimationTimeline();
    b.timeline = g;

    try {
      Object.defineProperty(window.document, "timeline", {
        configurable: !0,
        get: function () {
          return g;
        }
      });
    } catch (a) {}

    try {
      window.document.timeline = g;
    } catch (a) {}
  }(0, e), function (a, b, c) {
    b.animationsWithPromises = [], b.Animation = function (b, c) {
      if (this.id = "", b && b._id && (this.id = b._id), this.effect = b, b && (b._animation = this), !c) throw new Error("Animation with null timeline is not supported");
      this._timeline = c, this._sequenceNumber = a.sequenceNumber++, this._holdTime = 0, this._paused = !1, this._isGroup = !1, this._animation = null, this._childAnimations = [], this._callback = null, this._oldPlayState = "idle", this._rebuildUnderlyingAnimation(), this._animation.cancel(), this._updatePromises();
    }, b.Animation.prototype = {
      _updatePromises: function () {
        var a = this._oldPlayState,
            b = this.playState;
        return this._readyPromise && b !== a && ("idle" == b ? (this._rejectReadyPromise(), this._readyPromise = void 0) : "pending" == a ? this._resolveReadyPromise() : "pending" == b && (this._readyPromise = void 0)), this._finishedPromise && b !== a && ("idle" == b ? (this._rejectFinishedPromise(), this._finishedPromise = void 0) : "finished" == b ? this._resolveFinishedPromise() : "finished" == a && (this._finishedPromise = void 0)), this._oldPlayState = this.playState, this._readyPromise || this._finishedPromise;
      },
      _rebuildUnderlyingAnimation: function () {
        this._updatePromises();

        var a,
            c,
            d,
            e,
            f = !!this._animation;
        f && (a = this.playbackRate, c = this._paused, d = this.startTime, e = this.currentTime, this._animation.cancel(), this._animation._wrapper = null, this._animation = null), (!this.effect || this.effect instanceof window.KeyframeEffect) && (this._animation = b.newUnderlyingAnimationForKeyframeEffect(this.effect), b.bindAnimationForKeyframeEffect(this)), (this.effect instanceof window.SequenceEffect || this.effect instanceof window.GroupEffect) && (this._animation = b.newUnderlyingAnimationForGroup(this.effect), b.bindAnimationForGroup(this)), this.effect && this.effect._onsample && b.bindAnimationForCustomEffect(this), f && (1 != a && (this.playbackRate = a), null !== d ? this.startTime = d : null !== e ? this.currentTime = e : null !== this._holdTime && (this.currentTime = this._holdTime), c && this.pause()), this._updatePromises();
      },
      _updateChildren: function () {
        if (this.effect && "idle" != this.playState) {
          var a = this.effect._timing.delay;

          this._childAnimations.forEach(function (c) {
            this._arrangeChildren(c, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c.effect));
          }.bind(this));
        }
      },
      _setExternalAnimation: function (a) {
        if (this.effect && this._isGroup) for (var b = 0; b < this.effect.children.length; b++) this.effect.children[b]._animation = a, this._childAnimations[b]._setExternalAnimation(a);
      },
      _constructChildAnimations: function () {
        if (this.effect && this._isGroup) {
          var a = this.effect._timing.delay;
          this._removeChildAnimations(), this.effect.children.forEach(function (c) {
            var d = b.timeline._play(c);

            this._childAnimations.push(d), d.playbackRate = this.playbackRate, this._paused && d.pause(), c._animation = this.effect._animation, this._arrangeChildren(d, a), this.effect instanceof window.SequenceEffect && (a += b.groupChildDuration(c));
          }.bind(this));
        }
      },
      _arrangeChildren: function (a, b) {
        null === this.startTime ? a.currentTime = this.currentTime - b / this.playbackRate : a.startTime !== this.startTime + b / this.playbackRate && (a.startTime = this.startTime + b / this.playbackRate);
      },

      get timeline() {
        return this._timeline;
      },

      get playState() {
        return this._animation ? this._animation.playState : "idle";
      },

      get finished() {
        return window.Promise ? (this._finishedPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._finishedPromise = new Promise(function (a, b) {
          this._resolveFinishedPromise = function () {
            a(this);
          }, this._rejectFinishedPromise = function () {
            b({
              type: DOMException.ABORT_ERR,
              name: "AbortError"
            });
          };
        }.bind(this)), "finished" == this.playState && this._resolveFinishedPromise()), this._finishedPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
      },

      get ready() {
        return window.Promise ? (this._readyPromise || (-1 == b.animationsWithPromises.indexOf(this) && b.animationsWithPromises.push(this), this._readyPromise = new Promise(function (a, b) {
          this._resolveReadyPromise = function () {
            a(this);
          }, this._rejectReadyPromise = function () {
            b({
              type: DOMException.ABORT_ERR,
              name: "AbortError"
            });
          };
        }.bind(this)), "pending" !== this.playState && this._resolveReadyPromise()), this._readyPromise) : (console.warn("Animation Promises require JavaScript Promise constructor"), null);
      },

      get onfinish() {
        return this._animation.onfinish;
      },

      set onfinish(a) {
        this._animation.onfinish = "function" == typeof a ? function (b) {
          b.target = this, a.call(this, b);
        }.bind(this) : a;
      },

      get oncancel() {
        return this._animation.oncancel;
      },

      set oncancel(a) {
        this._animation.oncancel = "function" == typeof a ? function (b) {
          b.target = this, a.call(this, b);
        }.bind(this) : a;
      },

      get currentTime() {
        this._updatePromises();

        var a = this._animation.currentTime;
        return this._updatePromises(), a;
      },

      set currentTime(a) {
        this._updatePromises(), this._animation.currentTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
          b.currentTime = a - c;
        }), this._updatePromises();
      },

      get startTime() {
        return this._animation.startTime;
      },

      set startTime(a) {
        this._updatePromises(), this._animation.startTime = isFinite(a) ? a : Math.sign(a) * Number.MAX_VALUE, this._register(), this._forEachChild(function (b, c) {
          b.startTime = a + c;
        }), this._updatePromises();
      },

      get playbackRate() {
        return this._animation.playbackRate;
      },

      set playbackRate(a) {
        this._updatePromises();

        var b = this.currentTime;
        this._animation.playbackRate = a, this._forEachChild(function (b) {
          b.playbackRate = a;
        }), null !== b && (this.currentTime = b), this._updatePromises();
      },

      play: function () {
        this._updatePromises(), this._paused = !1, this._animation.play(), -1 == this._timeline._animations.indexOf(this) && this._timeline._animations.push(this), this._register(), b.awaitStartTime(this), this._forEachChild(function (a) {
          var b = a.currentTime;
          a.play(), a.currentTime = b;
        }), this._updatePromises();
      },
      pause: function () {
        this._updatePromises(), this.currentTime && (this._holdTime = this.currentTime), this._animation.pause(), this._register(), this._forEachChild(function (a) {
          a.pause();
        }), this._paused = !0, this._updatePromises();
      },
      finish: function () {
        this._updatePromises(), this._animation.finish(), this._register(), this._updatePromises();
      },
      cancel: function () {
        this._updatePromises(), this._animation.cancel(), this._register(), this._removeChildAnimations(), this._updatePromises();
      },
      reverse: function () {
        this._updatePromises();

        var a = this.currentTime;
        this._animation.reverse(), this._forEachChild(function (a) {
          a.reverse();
        }), null !== a && (this.currentTime = a), this._updatePromises();
      },
      addEventListener: function (a, b) {
        var c = b;
        "function" == typeof b && (c = function (a) {
          a.target = this, b.call(this, a);
        }.bind(this), b._wrapper = c), this._animation.addEventListener(a, c);
      },
      removeEventListener: function (a, b) {
        this._animation.removeEventListener(a, b && b._wrapper || b);
      },
      _removeChildAnimations: function () {
        for (; this._childAnimations.length;) this._childAnimations.pop().cancel();
      },
      _forEachChild: function (b) {
        var c = 0;

        if (this.effect.children && this._childAnimations.length < this.effect.children.length && this._constructChildAnimations(), this._childAnimations.forEach(function (a) {
          b.call(this, a, c), this.effect instanceof window.SequenceEffect && (c += a.effect.activeDuration);
        }.bind(this)), "pending" != this.playState) {
          var d = this.effect._timing,
              e = this.currentTime;
          null !== e && (e = a.calculateIterationProgress(a.calculateActiveDuration(d), e, d)), (null == e || isNaN(e)) && this._removeChildAnimations();
        }
      }
    }, window.Animation = b.Animation;
  }(c, e), function (a, b, c) {
    function d(b) {
      this._frames = a.normalizeKeyframes(b);
    }

    function e() {
      for (var a = !1; i.length;) i.shift()._updateChildren(), a = !0;

      return a;
    }

    var f = function (a) {
      if (a._animation = void 0, a instanceof window.SequenceEffect || a instanceof window.GroupEffect) for (var b = 0; b < a.children.length; b++) f(a.children[b]);
    };

    b.removeMulti = function (a) {
      for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c];
        d._parent ? (-1 == b.indexOf(d._parent) && b.push(d._parent), d._parent.children.splice(d._parent.children.indexOf(d), 1), d._parent = null, f(d)) : d._animation && d._animation.effect == d && (d._animation.cancel(), d._animation.effect = new KeyframeEffect(null, []), d._animation._callback && (d._animation._callback._animation = null), d._animation._rebuildUnderlyingAnimation(), f(d));
      }

      for (c = 0; c < b.length; c++) b[c]._rebuild();
    }, b.KeyframeEffect = function (b, c, e, f) {
      return this.target = b, this._parent = null, e = a.numericTimingToObject(e), this._timingInput = a.cloneTimingInput(e), this._timing = a.normalizeTimingInput(e), this.timing = a.makeTiming(e, !1, this), this.timing._effect = this, "function" == typeof c ? (a.deprecated("Custom KeyframeEffect", "2015-06-22", "Use KeyframeEffect.onsample instead."), this._normalizedKeyframes = c) : this._normalizedKeyframes = new d(c), this._keyframes = c, this.activeDuration = a.calculateActiveDuration(this._timing), this._id = f, this;
    }, b.KeyframeEffect.prototype = {
      getFrames: function () {
        return "function" == typeof this._normalizedKeyframes ? this._normalizedKeyframes : this._normalizedKeyframes._frames;
      },

      set onsample(a) {
        if ("function" == typeof this.getFrames()) throw new Error("Setting onsample on custom effect KeyframeEffect is not supported.");
        this._onsample = a, this._animation && this._animation._rebuildUnderlyingAnimation();
      },

      get parent() {
        return this._parent;
      },

      clone: function () {
        if ("function" == typeof this.getFrames()) throw new Error("Cloning custom effects is not supported.");
        var b = new KeyframeEffect(this.target, [], a.cloneTimingInput(this._timingInput), this._id);
        return b._normalizedKeyframes = this._normalizedKeyframes, b._keyframes = this._keyframes, b;
      },
      remove: function () {
        b.removeMulti([this]);
      }
    };
    var g = Element.prototype.animate;

    Element.prototype.animate = function (a, c) {
      var d = "";
      return c && c.id && (d = c.id), b.timeline._play(new b.KeyframeEffect(this, a, c, d));
    };

    var h = document.createElementNS("http://www.w3.org/1999/xhtml", "div");
    b.newUnderlyingAnimationForKeyframeEffect = function (a) {
      if (a) {
        var b = a.target || h,
            c = a._keyframes;
        "function" == typeof c && (c = []);
        var d = a._timingInput;
        d.id = a._id;
      } else var b = h,
          c = [],
          d = 0;

      return g.apply(b, [c, d]);
    }, b.bindAnimationForKeyframeEffect = function (a) {
      a.effect && "function" == typeof a.effect._normalizedKeyframes && b.bindAnimationForCustomEffect(a);
    };
    var i = [];

    b.awaitStartTime = function (a) {
      null === a.startTime && a._isGroup && (0 == i.length && requestAnimationFrame(e), i.push(a));
    };

    var j = window.getComputedStyle;
    Object.defineProperty(window, "getComputedStyle", {
      configurable: !0,
      enumerable: !0,
      value: function () {
        b.timeline._updateAnimationsPromises();

        var a = j.apply(this, arguments);
        return e() && (a = j.apply(this, arguments)), b.timeline._updateAnimationsPromises(), a;
      }
    }), window.KeyframeEffect = b.KeyframeEffect, window.Element.prototype.getAnimations = function () {
      return document.timeline.getAnimations().filter(function (a) {
        return null !== a.effect && a.effect.target == this;
      }.bind(this));
    };
  }(c, e), function (a, b, c) {
    function d(a) {
      a._registered || (a._registered = !0, g.push(a), h || (h = !0, requestAnimationFrame(e)));
    }

    function e(a) {
      var b = g;
      g = [], b.sort(function (a, b) {
        return a._sequenceNumber - b._sequenceNumber;
      }), b = b.filter(function (a) {
        a();
        var b = a._animation ? a._animation.playState : "idle";
        return "running" != b && "pending" != b && (a._registered = !1), a._registered;
      }), g.push.apply(g, b), g.length ? (h = !0, requestAnimationFrame(e)) : h = !1;
    }

    var f = (document.createElementNS("http://www.w3.org/1999/xhtml", "div"), 0);

    b.bindAnimationForCustomEffect = function (b) {
      var c,
          e = b.effect.target,
          g = "function" == typeof b.effect.getFrames();
      c = g ? b.effect.getFrames() : b.effect._onsample;
      var h = b.effect.timing,
          i = null;
      h = a.normalizeTimingInput(h);

      var j = function () {
        var d = j._animation ? j._animation.currentTime : null;
        null !== d && (d = a.calculateIterationProgress(a.calculateActiveDuration(h), d, h), isNaN(d) && (d = null)), d !== i && (g ? c(d, e, b.effect) : c(d, b.effect, b.effect._animation)), i = d;
      };

      j._animation = b, j._registered = !1, j._sequenceNumber = f++, b._callback = j, d(j);
    };

    var g = [],
        h = !1;

    b.Animation.prototype._register = function () {
      this._callback && d(this._callback);
    };
  }(c, e), function (a, b, c) {
    function d(a) {
      return a._timing.delay + a.activeDuration + a._timing.endDelay;
    }

    function e(b, c, d) {
      this._id = d, this._parent = null, this.children = b || [], this._reparent(this.children), c = a.numericTimingToObject(c), this._timingInput = a.cloneTimingInput(c), this._timing = a.normalizeTimingInput(c, !0), this.timing = a.makeTiming(c, !0, this), this.timing._effect = this, "auto" === this._timing.duration && (this._timing.duration = this.activeDuration);
    }

    window.SequenceEffect = function () {
      e.apply(this, arguments);
    }, window.GroupEffect = function () {
      e.apply(this, arguments);
    }, e.prototype = {
      _isAncestor: function (a) {
        for (var b = this; null !== b;) {
          if (b == a) return !0;
          b = b._parent;
        }

        return !1;
      },
      _rebuild: function () {
        for (var a = this; a;) "auto" === a.timing.duration && (a._timing.duration = a.activeDuration), a = a._parent;

        this._animation && this._animation._rebuildUnderlyingAnimation();
      },
      _reparent: function (a) {
        b.removeMulti(a);

        for (var c = 0; c < a.length; c++) a[c]._parent = this;
      },
      _putChild: function (a, b) {
        for (var c = b ? "Cannot append an ancestor or self" : "Cannot prepend an ancestor or self", d = 0; d < a.length; d++) if (this._isAncestor(a[d])) throw {
          type: DOMException.HIERARCHY_REQUEST_ERR,
          name: "HierarchyRequestError",
          message: c
        };

        for (var d = 0; d < a.length; d++) b ? this.children.push(a[d]) : this.children.unshift(a[d]);

        this._reparent(a), this._rebuild();
      },
      append: function () {
        this._putChild(arguments, !0);
      },
      prepend: function () {
        this._putChild(arguments, !1);
      },

      get parent() {
        return this._parent;
      },

      get firstChild() {
        return this.children.length ? this.children[0] : null;
      },

      get lastChild() {
        return this.children.length ? this.children[this.children.length - 1] : null;
      },

      clone: function () {
        for (var b = a.cloneTimingInput(this._timingInput), c = [], d = 0; d < this.children.length; d++) c.push(this.children[d].clone());

        return this instanceof GroupEffect ? new GroupEffect(c, b) : new SequenceEffect(c, b);
      },
      remove: function () {
        b.removeMulti([this]);
      }
    }, window.SequenceEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.SequenceEffect.prototype, "activeDuration", {
      get: function () {
        var a = 0;
        return this.children.forEach(function (b) {
          a += d(b);
        }), Math.max(a, 0);
      }
    }), window.GroupEffect.prototype = Object.create(e.prototype), Object.defineProperty(window.GroupEffect.prototype, "activeDuration", {
      get: function () {
        var a = 0;
        return this.children.forEach(function (b) {
          a = Math.max(a, d(b));
        }), a;
      }
    }), b.newUnderlyingAnimationForGroup = function (c) {
      var d,
          e = null,
          f = function (b) {
        var c = d._wrapper;
        if (c && "pending" != c.playState && c.effect) return null == b ? void c._removeChildAnimations() : 0 == b && c.playbackRate < 0 && (e || (e = a.normalizeTimingInput(c.effect.timing)), b = a.calculateIterationProgress(a.calculateActiveDuration(e), -1, e), isNaN(b) || null == b) ? (c._forEachChild(function (a) {
          a.currentTime = -1;
        }), void c._removeChildAnimations()) : void 0;
      },
          g = new KeyframeEffect(null, [], c._timing, c._id);

      return g.onsample = f, d = b.timeline._play(g);
    }, b.bindAnimationForGroup = function (a) {
      a._animation._wrapper = a, a._isGroup = !0, b.awaitStartTime(a), a._constructChildAnimations(), a._setExternalAnimation(a);
    }, b.groupChildDuration = d;
  }(c, e), b.true = a;
}({}, function () {
  return this;
}());

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35wb2x5ZmlsbC13ZWItYW5pbWF0aW9ucy1uZXh0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy9zY29wZS5qcyIsIndlYnBhY2s6Ly8vc3JjL3RpbWluZy11dGlsaXRpZXMuanMiLCJ3ZWJwYWNrOi8vL3NyYy9ub3JtYWxpemUta2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy9zcmMvZGVwcmVjYXRpb24uanMiLCJ3ZWJwYWNrOi8vL3NyYy93ZWItYW5pbWF0aW9ucy1ib251cy1jYW5jZWwtZXZlbnRzLmpzIiwid2VicGFjazovLy9zcmMvd2ViLWFuaW1hdGlvbnMtYm9udXMtb2JqZWN0LWZvcm0ta2V5ZnJhbWVzLmpzIiwid2VicGFjazovLy9zcmMvdGltZWxpbmUuanMiLCJ3ZWJwYWNrOi8vL3NyYy93ZWItYW5pbWF0aW9ucy1uZXh0LWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vc3JjL2tleWZyYW1lLWVmZmVjdC1jb25zdHJ1Y3Rvci5qcyIsIndlYnBhY2s6Ly8vc3JjL2VmZmVjdC1jYWxsYmFjay5qcyIsIndlYnBhY2s6Ly8vc3JjL2dyb3VwLWNvbnN0cnVjdG9ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBDb3B5cmlnaHQgMjAxNCBHb29nbGUgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuLy9cbi8vIExpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4vLyB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuXG4vLyAgICAgWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4vL1xuLy8gaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4vL1xuLy8gVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZVxuLy8gZGlzdHJpYnV0ZWQgdW5kZXIgdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLFxuLy8gV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuXG4vLyAgICAgU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuLy8gbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG5cbiFmdW5jdGlvbihhLGIpe3ZhciBjPXt9LGQ9e30sZT17fTshZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe2lmKFwibnVtYmVyXCI9PXR5cGVvZiBhKXJldHVybiBhO3ZhciBiPXt9O2Zvcih2YXIgYyBpbiBhKWJbY109YVtjXTtyZXR1cm4gYn1mdW5jdGlvbiBkKCl7dGhpcy5fZGVsYXk9MCx0aGlzLl9lbmREZWxheT0wLHRoaXMuX2ZpbGw9XCJub25lXCIsdGhpcy5faXRlcmF0aW9uU3RhcnQ9MCx0aGlzLl9pdGVyYXRpb25zPTEsdGhpcy5fZHVyYXRpb249MCx0aGlzLl9wbGF5YmFja1JhdGU9MSx0aGlzLl9kaXJlY3Rpb249XCJub3JtYWxcIix0aGlzLl9lYXNpbmc9XCJsaW5lYXJcIix0aGlzLl9lYXNpbmdGdW5jdGlvbj14fWZ1bmN0aW9uIGUoKXtyZXR1cm4gYS5pc0RlcHJlY2F0ZWQoXCJJbnZhbGlkIHRpbWluZyBpbnB1dHNcIixcIjIwMTYtMDMtMDJcIixcIlR5cGVFcnJvciBleGNlcHRpb25zIHdpbGwgYmUgdGhyb3duIGluc3RlYWQuXCIsITApfWZ1bmN0aW9uIGYoYixjLGUpe3ZhciBmPW5ldyBkO3JldHVybiBjJiYoZi5maWxsPVwiYm90aFwiLGYuZHVyYXRpb249XCJhdXRvXCIpLFwibnVtYmVyXCIhPXR5cGVvZiBifHxpc05hTihiKT92b2lkIDAhPT1iJiZPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyhiKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe2lmKFwiYXV0b1wiIT1iW2NdKXtpZigoXCJudW1iZXJcIj09dHlwZW9mIGZbY118fFwiZHVyYXRpb25cIj09YykmJihcIm51bWJlclwiIT10eXBlb2YgYltjXXx8aXNOYU4oYltjXSkpKXJldHVybjtpZihcImZpbGxcIj09YyYmLTE9PXYuaW5kZXhPZihiW2NdKSlyZXR1cm47aWYoXCJkaXJlY3Rpb25cIj09YyYmLTE9PXcuaW5kZXhPZihiW2NdKSlyZXR1cm47aWYoXCJwbGF5YmFja1JhdGVcIj09YyYmMSE9PWJbY10mJmEuaXNEZXByZWNhdGVkKFwiQW5pbWF0aW9uRWZmZWN0VGltaW5nLnBsYXliYWNrUmF0ZVwiLFwiMjAxNC0xMS0yOFwiLFwiVXNlIEFuaW1hdGlvbi5wbGF5YmFja1JhdGUgaW5zdGVhZC5cIikpcmV0dXJuO2ZbY109YltjXX19KTpmLmR1cmF0aW9uPWIsZn1mdW5jdGlvbiBnKGEpe3JldHVyblwibnVtYmVyXCI9PXR5cGVvZiBhJiYoYT1pc05hTihhKT97ZHVyYXRpb246MH06e2R1cmF0aW9uOmF9KSxhfWZ1bmN0aW9uIGgoYixjKXtyZXR1cm4gYj1hLm51bWVyaWNUaW1pbmdUb09iamVjdChiKSxmKGIsYyl9ZnVuY3Rpb24gaShhLGIsYyxkKXtyZXR1cm4gYTwwfHxhPjF8fGM8MHx8Yz4xP3g6ZnVuY3Rpb24oZSl7ZnVuY3Rpb24gZihhLGIsYyl7cmV0dXJuIDMqYSooMS1jKSooMS1jKSpjKzMqYiooMS1jKSpjKmMrYypjKmN9aWYoZTw9MCl7dmFyIGc9MDtyZXR1cm4gYT4wP2c9Yi9hOiFiJiZjPjAmJihnPWQvYyksZyplfWlmKGU+PTEpe3ZhciBoPTA7cmV0dXJuIGM8MT9oPShkLTEpLyhjLTEpOjE9PWMmJmE8MSYmKGg9KGItMSkvKGEtMSkpLDEraCooZS0xKX1mb3IodmFyIGk9MCxqPTE7aTxqOyl7dmFyIGs9KGkraikvMixsPWYoYSxjLGspO2lmKE1hdGguYWJzKGUtbCk8MWUtNSlyZXR1cm4gZihiLGQsayk7bDxlP2k9azpqPWt9cmV0dXJuIGYoYixkLGspfX1mdW5jdGlvbiBqKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMpe2lmKGM+PTEpcmV0dXJuIDE7dmFyIGQ9MS9hO3JldHVybihjKz1iKmQpLWMlZH19ZnVuY3Rpb24gayhhKXtDfHwoQz1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpLnN0eWxlKSxDLmFuaW1hdGlvblRpbWluZ0Z1bmN0aW9uPVwiXCIsQy5hbmltYXRpb25UaW1pbmdGdW5jdGlvbj1hO3ZhciBiPUMuYW5pbWF0aW9uVGltaW5nRnVuY3Rpb247aWYoXCJcIj09YiYmZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoYStcIiBpcyBub3QgYSB2YWxpZCB2YWx1ZSBmb3IgZWFzaW5nXCIpO3JldHVybiBifWZ1bmN0aW9uIGwoYSl7aWYoXCJsaW5lYXJcIj09YSlyZXR1cm4geDt2YXIgYj1FLmV4ZWMoYSk7aWYoYilyZXR1cm4gaS5hcHBseSh0aGlzLGIuc2xpY2UoMSkubWFwKE51bWJlcikpO3ZhciBjPUYuZXhlYyhhKTtyZXR1cm4gYz9qKE51bWJlcihjWzFdKSx7c3RhcnQ6eSxtaWRkbGU6eixlbmQ6QX1bY1syXV0pOkJbYV18fHh9ZnVuY3Rpb24gbShhKXtyZXR1cm4gTWF0aC5hYnMobihhKS9hLnBsYXliYWNrUmF0ZSl9ZnVuY3Rpb24gbihhKXtyZXR1cm4gMD09PWEuZHVyYXRpb258fDA9PT1hLml0ZXJhdGlvbnM/MDphLmR1cmF0aW9uKmEuaXRlcmF0aW9uc31mdW5jdGlvbiBvKGEsYixjKXtpZihudWxsPT1iKXJldHVybiBHO3ZhciBkPWMuZGVsYXkrYStjLmVuZERlbGF5O3JldHVybiBiPE1hdGgubWluKGMuZGVsYXksZCk/SDpiPj1NYXRoLm1pbihjLmRlbGF5K2EsZCk/STpKfWZ1bmN0aW9uIHAoYSxiLGMsZCxlKXtzd2l0Y2goZCl7Y2FzZSBIOnJldHVyblwiYmFja3dhcmRzXCI9PWJ8fFwiYm90aFwiPT1iPzA6bnVsbDtjYXNlIEo6cmV0dXJuIGMtZTtjYXNlIEk6cmV0dXJuXCJmb3J3YXJkc1wiPT1ifHxcImJvdGhcIj09Yj9hOm51bGw7Y2FzZSBHOnJldHVybiBudWxsfX1mdW5jdGlvbiBxKGEsYixjLGQsZSl7dmFyIGY9ZTtyZXR1cm4gMD09PWE/YiE9PUgmJihmKz1jKTpmKz1kL2EsZn1mdW5jdGlvbiByKGEsYixjLGQsZSxmKXt2YXIgZz1hPT09MS8wP2IlMTphJTE7cmV0dXJuIDAhPT1nfHxjIT09SXx8MD09PWR8fDA9PT1lJiYwIT09Znx8KGc9MSksZ31mdW5jdGlvbiBzKGEsYixjLGQpe3JldHVybiBhPT09SSYmYj09PTEvMD8xLzA6MT09PWM/TWF0aC5mbG9vcihkKS0xOk1hdGguZmxvb3IoZCl9ZnVuY3Rpb24gdChhLGIsYyl7dmFyIGQ9YTtpZihcIm5vcm1hbFwiIT09YSYmXCJyZXZlcnNlXCIhPT1hKXt2YXIgZT1iO1wiYWx0ZXJuYXRlLXJldmVyc2VcIj09PWEmJihlKz0xKSxkPVwibm9ybWFsXCIsZSE9PTEvMCYmZSUyIT0wJiYoZD1cInJldmVyc2VcIil9cmV0dXJuXCJub3JtYWxcIj09PWQ/YzoxLWN9ZnVuY3Rpb24gdShhLGIsYyl7dmFyIGQ9byhhLGIsYyksZT1wKGEsYy5maWxsLGIsZCxjLmRlbGF5KTtpZihudWxsPT09ZSlyZXR1cm4gbnVsbDt2YXIgZj1xKGMuZHVyYXRpb24sZCxjLml0ZXJhdGlvbnMsZSxjLml0ZXJhdGlvblN0YXJ0KSxnPXIoZixjLml0ZXJhdGlvblN0YXJ0LGQsYy5pdGVyYXRpb25zLGUsYy5kdXJhdGlvbiksaD1zKGQsYy5pdGVyYXRpb25zLGcsZiksaT10KGMuZGlyZWN0aW9uLGgsZyk7cmV0dXJuIGMuX2Vhc2luZ0Z1bmN0aW9uKGkpfXZhciB2PVwiYmFja3dhcmRzfGZvcndhcmRzfGJvdGh8bm9uZVwiLnNwbGl0KFwifFwiKSx3PVwicmV2ZXJzZXxhbHRlcm5hdGV8YWx0ZXJuYXRlLXJldmVyc2VcIi5zcGxpdChcInxcIikseD1mdW5jdGlvbihhKXtyZXR1cm4gYX07ZC5wcm90b3R5cGU9e19zZXRNZW1iZXI6ZnVuY3Rpb24oYixjKXt0aGlzW1wiX1wiK2JdPWMsdGhpcy5fZWZmZWN0JiYodGhpcy5fZWZmZWN0Ll90aW1pbmdJbnB1dFtiXT1jLHRoaXMuX2VmZmVjdC5fdGltaW5nPWEubm9ybWFsaXplVGltaW5nSW5wdXQodGhpcy5fZWZmZWN0Ll90aW1pbmdJbnB1dCksdGhpcy5fZWZmZWN0LmFjdGl2ZUR1cmF0aW9uPWEuY2FsY3VsYXRlQWN0aXZlRHVyYXRpb24odGhpcy5fZWZmZWN0Ll90aW1pbmcpLHRoaXMuX2VmZmVjdC5fYW5pbWF0aW9uJiZ0aGlzLl9lZmZlY3QuX2FuaW1hdGlvbi5fcmVidWlsZFVuZGVybHlpbmdBbmltYXRpb24oKSl9LGdldCBwbGF5YmFja1JhdGUoKXtyZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlfSxzZXQgZGVsYXkoYSl7dGhpcy5fc2V0TWVtYmVyKFwiZGVsYXlcIixhKX0sZ2V0IGRlbGF5KCl7cmV0dXJuIHRoaXMuX2RlbGF5fSxzZXQgZW5kRGVsYXkoYSl7dGhpcy5fc2V0TWVtYmVyKFwiZW5kRGVsYXlcIixhKX0sZ2V0IGVuZERlbGF5KCl7cmV0dXJuIHRoaXMuX2VuZERlbGF5fSxzZXQgZmlsbChhKXt0aGlzLl9zZXRNZW1iZXIoXCJmaWxsXCIsYSl9LGdldCBmaWxsKCl7cmV0dXJuIHRoaXMuX2ZpbGx9LHNldCBpdGVyYXRpb25TdGFydChhKXtpZigoaXNOYU4oYSl8fGE8MCkmJmUoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiaXRlcmF0aW9uU3RhcnQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIsIHJlY2VpdmVkOiBcIit0aW1pbmcuaXRlcmF0aW9uU3RhcnQpO3RoaXMuX3NldE1lbWJlcihcIml0ZXJhdGlvblN0YXJ0XCIsYSl9LGdldCBpdGVyYXRpb25TdGFydCgpe3JldHVybiB0aGlzLl9pdGVyYXRpb25TdGFydH0sc2V0IGR1cmF0aW9uKGEpe2lmKFwiYXV0b1wiIT1hJiYoaXNOYU4oYSl8fGE8MCkmJmUoKSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiZHVyYXRpb24gbXVzdCBiZSBub24tbmVnYXRpdmUgb3IgYXV0bywgcmVjZWl2ZWQ6IFwiK2EpO3RoaXMuX3NldE1lbWJlcihcImR1cmF0aW9uXCIsYSl9LGdldCBkdXJhdGlvbigpe3JldHVybiB0aGlzLl9kdXJhdGlvbn0sc2V0IGRpcmVjdGlvbihhKXt0aGlzLl9zZXRNZW1iZXIoXCJkaXJlY3Rpb25cIixhKX0sZ2V0IGRpcmVjdGlvbigpe3JldHVybiB0aGlzLl9kaXJlY3Rpb259LHNldCBlYXNpbmcoYSl7dGhpcy5fZWFzaW5nRnVuY3Rpb249bChrKGEpKSx0aGlzLl9zZXRNZW1iZXIoXCJlYXNpbmdcIixhKX0sZ2V0IGVhc2luZygpe3JldHVybiB0aGlzLl9lYXNpbmd9LHNldCBpdGVyYXRpb25zKGEpe2lmKChpc05hTihhKXx8YTwwKSYmZSgpKXRocm93IG5ldyBUeXBlRXJyb3IoXCJpdGVyYXRpb25zIG11c3QgYmUgbm9uLW5lZ2F0aXZlLCByZWNlaXZlZDogXCIrYSk7dGhpcy5fc2V0TWVtYmVyKFwiaXRlcmF0aW9uc1wiLGEpfSxnZXQgaXRlcmF0aW9ucygpe3JldHVybiB0aGlzLl9pdGVyYXRpb25zfX07dmFyIHk9MSx6PS41LEE9MCxCPXtlYXNlOmkoLjI1LC4xLC4yNSwxKSxcImVhc2UtaW5cIjppKC40MiwwLDEsMSksXCJlYXNlLW91dFwiOmkoMCwwLC41OCwxKSxcImVhc2UtaW4tb3V0XCI6aSguNDIsMCwuNTgsMSksXCJzdGVwLXN0YXJ0XCI6aigxLHkpLFwic3RlcC1taWRkbGVcIjpqKDEseiksXCJzdGVwLWVuZFwiOmooMSxBKX0sQz1udWxsLEQ9XCJcXFxccyooLT9cXFxcZCtcXFxcLj9cXFxcZCp8LT9cXFxcLlxcXFxkKylcXFxccypcIixFPW5ldyBSZWdFeHAoXCJjdWJpYy1iZXppZXJcXFxcKFwiK0QrXCIsXCIrRCtcIixcIitEK1wiLFwiK0QrXCJcXFxcKVwiKSxGPS9zdGVwc1xcKFxccyooXFxkKylcXHMqLFxccyooc3RhcnR8bWlkZGxlfGVuZClcXHMqXFwpLyxHPTAsSD0xLEk9MixKPTM7YS5jbG9uZVRpbWluZ0lucHV0PWMsYS5tYWtlVGltaW5nPWYsYS5udW1lcmljVGltaW5nVG9PYmplY3Q9ZyxhLm5vcm1hbGl6ZVRpbWluZ0lucHV0PWgsYS5jYWxjdWxhdGVBY3RpdmVEdXJhdGlvbj1tLGEuY2FsY3VsYXRlSXRlcmF0aW9uUHJvZ3Jlc3M9dSxhLmNhbGN1bGF0ZVBoYXNlPW8sYS5ub3JtYWxpemVFYXNpbmc9ayxhLnBhcnNlRWFzaW5nRnVuY3Rpb249bH0oYyksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYil7cmV0dXJuIGEgaW4gaz9rW2FdW2JdfHxiOmJ9ZnVuY3Rpb24gZChhKXtyZXR1cm5cImRpc3BsYXlcIj09PWF8fDA9PT1hLmxhc3RJbmRleE9mKFwiYW5pbWF0aW9uXCIsMCl8fDA9PT1hLmxhc3RJbmRleE9mKFwidHJhbnNpdGlvblwiLDApfWZ1bmN0aW9uIGUoYSxiLGUpe2lmKCFkKGEpKXt2YXIgZj1oW2FdO2lmKGYpe2kuc3R5bGVbYV09Yjtmb3IodmFyIGcgaW4gZil7dmFyIGo9ZltnXSxrPWkuc3R5bGVbal07ZVtqXT1jKGosayl9fWVsc2UgZVthXT1jKGEsYil9fWZ1bmN0aW9uIGYoYSl7dmFyIGI9W107Zm9yKHZhciBjIGluIGEpaWYoIShjIGluW1wiZWFzaW5nXCIsXCJvZmZzZXRcIixcImNvbXBvc2l0ZVwiXSkpe3ZhciBkPWFbY107QXJyYXkuaXNBcnJheShkKXx8KGQ9W2RdKTtmb3IodmFyIGUsZj1kLmxlbmd0aCxnPTA7ZzxmO2crKyllPXt9LGUub2Zmc2V0PVwib2Zmc2V0XCJpbiBhP2Eub2Zmc2V0OjE9PWY/MTpnLyhmLTEpLFwiZWFzaW5nXCJpbiBhJiYoZS5lYXNpbmc9YS5lYXNpbmcpLFwiY29tcG9zaXRlXCJpbiBhJiYoZS5jb21wb3NpdGU9YS5jb21wb3NpdGUpLGVbY109ZFtnXSxiLnB1c2goZSl9cmV0dXJuIGIuc29ydChmdW5jdGlvbihhLGIpe3JldHVybiBhLm9mZnNldC1iLm9mZnNldH0pLGJ9ZnVuY3Rpb24gZyhiKXtmdW5jdGlvbiBjKCl7dmFyIGE9ZC5sZW5ndGg7bnVsbD09ZFthLTFdLm9mZnNldCYmKGRbYS0xXS5vZmZzZXQ9MSksYT4xJiZudWxsPT1kWzBdLm9mZnNldCYmKGRbMF0ub2Zmc2V0PTApO2Zvcih2YXIgYj0wLGM9ZFswXS5vZmZzZXQsZT0xO2U8YTtlKyspe3ZhciBmPWRbZV0ub2Zmc2V0O2lmKG51bGwhPWYpe2Zvcih2YXIgZz0xO2c8ZS1iO2crKylkW2IrZ10ub2Zmc2V0PWMrKGYtYykqZy8oZS1iKTtiPWUsYz1mfX19aWYobnVsbD09YilyZXR1cm5bXTt3aW5kb3cuU3ltYm9sJiZTeW1ib2wuaXRlcmF0b3ImJkFycmF5LnByb3RvdHlwZS5mcm9tJiZiW1N5bWJvbC5pdGVyYXRvcl0mJihiPUFycmF5LmZyb20oYikpLEFycmF5LmlzQXJyYXkoYil8fChiPWYoYikpO2Zvcih2YXIgZD1iLm1hcChmdW5jdGlvbihiKXt2YXIgYz17fTtmb3IodmFyIGQgaW4gYil7dmFyIGY9YltkXTtpZihcIm9mZnNldFwiPT1kKXtpZihudWxsIT1mKXtpZihmPU51bWJlcihmKSwhaXNGaW5pdGUoZikpdGhyb3cgbmV3IFR5cGVFcnJvcihcIktleWZyYW1lIG9mZnNldHMgbXVzdCBiZSBudW1iZXJzLlwiKTtpZihmPDB8fGY+MSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiS2V5ZnJhbWUgb2Zmc2V0cyBtdXN0IGJlIGJldHdlZW4gMCBhbmQgMS5cIil9fWVsc2UgaWYoXCJjb21wb3NpdGVcIj09ZCl7aWYoXCJhZGRcIj09Znx8XCJhY2N1bXVsYXRlXCI9PWYpdGhyb3d7dHlwZTpET01FeGNlcHRpb24uTk9UX1NVUFBPUlRFRF9FUlIsbmFtZTpcIk5vdFN1cHBvcnRlZEVycm9yXCIsbWVzc2FnZTpcImFkZCBjb21wb3NpdGluZyBpcyBub3Qgc3VwcG9ydGVkXCJ9O2lmKFwicmVwbGFjZVwiIT1mKXRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGNvbXBvc2l0ZSBtb2RlIFwiK2YrXCIuXCIpfWVsc2UgZj1cImVhc2luZ1wiPT1kP2Eubm9ybWFsaXplRWFzaW5nKGYpOlwiXCIrZjtlKGQsZixjKX1yZXR1cm4gdm9pZCAwPT1jLm9mZnNldCYmKGMub2Zmc2V0PW51bGwpLHZvaWQgMD09Yy5lYXNpbmcmJihjLmVhc2luZz1cImxpbmVhclwiKSxjfSksZz0hMCxoPS0xLzAsaT0wO2k8ZC5sZW5ndGg7aSsrKXt2YXIgaj1kW2ldLm9mZnNldDtpZihudWxsIT1qKXtpZihqPGgpdGhyb3cgbmV3IFR5cGVFcnJvcihcIktleWZyYW1lcyBhcmUgbm90IGxvb3NlbHkgc29ydGVkIGJ5IG9mZnNldC4gU29ydCBvciBzcGVjaWZ5IG9mZnNldHMuXCIpO2g9an1lbHNlIGc9ITF9cmV0dXJuIGQ9ZC5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGEub2Zmc2V0Pj0wJiZhLm9mZnNldDw9MX0pLGd8fGMoKSxkfXZhciBoPXtiYWNrZ3JvdW5kOltcImJhY2tncm91bmRJbWFnZVwiLFwiYmFja2dyb3VuZFBvc2l0aW9uXCIsXCJiYWNrZ3JvdW5kU2l6ZVwiLFwiYmFja2dyb3VuZFJlcGVhdFwiLFwiYmFja2dyb3VuZEF0dGFjaG1lbnRcIixcImJhY2tncm91bmRPcmlnaW5cIixcImJhY2tncm91bmRDbGlwXCIsXCJiYWNrZ3JvdW5kQ29sb3JcIl0sYm9yZGVyOltcImJvcmRlclRvcENvbG9yXCIsXCJib3JkZXJUb3BTdHlsZVwiLFwiYm9yZGVyVG9wV2lkdGhcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlclJpZ2h0U3R5bGVcIixcImJvcmRlclJpZ2h0V2lkdGhcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJCb3R0b21TdHlsZVwiLFwiYm9yZGVyQm90dG9tV2lkdGhcIixcImJvcmRlckxlZnRDb2xvclwiLFwiYm9yZGVyTGVmdFN0eWxlXCIsXCJib3JkZXJMZWZ0V2lkdGhcIl0sYm9yZGVyQm90dG9tOltcImJvcmRlckJvdHRvbVdpZHRoXCIsXCJib3JkZXJCb3R0b21TdHlsZVwiLFwiYm9yZGVyQm90dG9tQ29sb3JcIl0sYm9yZGVyQ29sb3I6W1wiYm9yZGVyVG9wQ29sb3JcIixcImJvcmRlclJpZ2h0Q29sb3JcIixcImJvcmRlckJvdHRvbUNvbG9yXCIsXCJib3JkZXJMZWZ0Q29sb3JcIl0sYm9yZGVyTGVmdDpbXCJib3JkZXJMZWZ0V2lkdGhcIixcImJvcmRlckxlZnRTdHlsZVwiLFwiYm9yZGVyTGVmdENvbG9yXCJdLGJvcmRlclJhZGl1czpbXCJib3JkZXJUb3BMZWZ0UmFkaXVzXCIsXCJib3JkZXJUb3BSaWdodFJhZGl1c1wiLFwiYm9yZGVyQm90dG9tUmlnaHRSYWRpdXNcIixcImJvcmRlckJvdHRvbUxlZnRSYWRpdXNcIl0sYm9yZGVyUmlnaHQ6W1wiYm9yZGVyUmlnaHRXaWR0aFwiLFwiYm9yZGVyUmlnaHRTdHlsZVwiLFwiYm9yZGVyUmlnaHRDb2xvclwiXSxib3JkZXJUb3A6W1wiYm9yZGVyVG9wV2lkdGhcIixcImJvcmRlclRvcFN0eWxlXCIsXCJib3JkZXJUb3BDb2xvclwiXSxib3JkZXJXaWR0aDpbXCJib3JkZXJUb3BXaWR0aFwiLFwiYm9yZGVyUmlnaHRXaWR0aFwiLFwiYm9yZGVyQm90dG9tV2lkdGhcIixcImJvcmRlckxlZnRXaWR0aFwiXSxmbGV4OltcImZsZXhHcm93XCIsXCJmbGV4U2hyaW5rXCIsXCJmbGV4QmFzaXNcIl0sZm9udDpbXCJmb250RmFtaWx5XCIsXCJmb250U2l6ZVwiLFwiZm9udFN0eWxlXCIsXCJmb250VmFyaWFudFwiLFwiZm9udFdlaWdodFwiLFwibGluZUhlaWdodFwiXSxtYXJnaW46W1wibWFyZ2luVG9wXCIsXCJtYXJnaW5SaWdodFwiLFwibWFyZ2luQm90dG9tXCIsXCJtYXJnaW5MZWZ0XCJdLG91dGxpbmU6W1wib3V0bGluZUNvbG9yXCIsXCJvdXRsaW5lU3R5bGVcIixcIm91dGxpbmVXaWR0aFwiXSxwYWRkaW5nOltcInBhZGRpbmdUb3BcIixcInBhZGRpbmdSaWdodFwiLFwicGFkZGluZ0JvdHRvbVwiLFwicGFkZGluZ0xlZnRcIl19LGk9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFwiZGl2XCIpLGo9e3RoaW46XCIxcHhcIixtZWRpdW06XCIzcHhcIix0aGljazpcIjVweFwifSxrPXtib3JkZXJCb3R0b21XaWR0aDpqLGJvcmRlckxlZnRXaWR0aDpqLGJvcmRlclJpZ2h0V2lkdGg6aixib3JkZXJUb3BXaWR0aDpqLGZvbnRTaXplOntcInh4LXNtYWxsXCI6XCI2MCVcIixcIngtc21hbGxcIjpcIjc1JVwiLHNtYWxsOlwiODklXCIsbWVkaXVtOlwiMTAwJVwiLGxhcmdlOlwiMTIwJVwiLFwieC1sYXJnZVwiOlwiMTUwJVwiLFwieHgtbGFyZ2VcIjpcIjIwMCVcIn0sZm9udFdlaWdodDp7bm9ybWFsOlwiNDAwXCIsYm9sZDpcIjcwMFwifSxvdXRsaW5lV2lkdGg6aix0ZXh0U2hhZG93Ontub25lOlwiMHB4IDBweCAwcHggdHJhbnNwYXJlbnRcIn0sYm94U2hhZG93Ontub25lOlwiMHB4IDBweCAwcHggMHB4IHRyYW5zcGFyZW50XCJ9fTthLmNvbnZlcnRUb0FycmF5Rm9ybT1mLGEubm9ybWFsaXplS2V5ZnJhbWVzPWd9KGMpLGZ1bmN0aW9uKGEpe3ZhciBiPXt9O2EuaXNEZXByZWNhdGVkPWZ1bmN0aW9uKGEsYyxkLGUpe3ZhciBmPWU/XCJhcmVcIjpcImlzXCIsZz1uZXcgRGF0ZSxoPW5ldyBEYXRlKGMpO3JldHVybiBoLnNldE1vbnRoKGguZ2V0TW9udGgoKSszKSwhKGc8aCYmKGEgaW4gYnx8Y29uc29sZS53YXJuKFwiV2ViIEFuaW1hdGlvbnM6IFwiK2ErXCIgXCIrZitcIiBkZXByZWNhdGVkIGFuZCB3aWxsIHN0b3Agd29ya2luZyBvbiBcIitoLnRvRGF0ZVN0cmluZygpK1wiLiBcIitkKSxiW2FdPSEwLDEpKX0sYS5kZXByZWNhdGVkPWZ1bmN0aW9uKGIsYyxkLGUpe3ZhciBmPWU/XCJhcmVcIjpcImlzXCI7aWYoYS5pc0RlcHJlY2F0ZWQoYixjLGQsZSkpdGhyb3cgbmV3IEVycm9yKGIrXCIgXCIrZitcIiBubyBsb25nZXIgc3VwcG9ydGVkLiBcIitkKX19KGMpLGZ1bmN0aW9uKCl7aWYoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFuaW1hdGUpe3ZhciBhPWRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hbmltYXRlKFtdLDApLGI9ITA7aWYoYSYmKGI9ITEsXCJwbGF5fGN1cnJlbnRUaW1lfHBhdXNlfHJldmVyc2V8cGxheWJhY2tSYXRlfGNhbmNlbHxmaW5pc2h8c3RhcnRUaW1lfHBsYXlTdGF0ZVwiLnNwbGl0KFwifFwiKS5mb3JFYWNoKGZ1bmN0aW9uKGMpe3ZvaWQgMD09PWFbY10mJihiPSEwKX0pKSwhYilyZXR1cm59IWZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe2Zvcih2YXIgYj17fSxjPTA7YzxhLmxlbmd0aDtjKyspZm9yKHZhciBkIGluIGFbY10paWYoXCJvZmZzZXRcIiE9ZCYmXCJlYXNpbmdcIiE9ZCYmXCJjb21wb3NpdGVcIiE9ZCl7dmFyIGU9e29mZnNldDphW2NdLm9mZnNldCxlYXNpbmc6YVtjXS5lYXNpbmcsdmFsdWU6YVtjXVtkXX07YltkXT1iW2RdfHxbXSxiW2RdLnB1c2goZSl9Zm9yKHZhciBmIGluIGIpe3ZhciBnPWJbZl07aWYoMCE9Z1swXS5vZmZzZXR8fDEhPWdbZy5sZW5ndGgtMV0ub2Zmc2V0KXRocm93e3R5cGU6RE9NRXhjZXB0aW9uLk5PVF9TVVBQT1JURURfRVJSLG5hbWU6XCJOb3RTdXBwb3J0ZWRFcnJvclwiLG1lc3NhZ2U6XCJQYXJ0aWFsIGtleWZyYW1lcyBhcmUgbm90IHN1cHBvcnRlZFwifX1yZXR1cm4gYn1mdW5jdGlvbiBlKGMpe3ZhciBkPVtdO2Zvcih2YXIgZSBpbiBjKWZvcih2YXIgZj1jW2VdLGc9MDtnPGYubGVuZ3RoLTE7ZysrKXt2YXIgaD1nLGk9ZysxLGo9ZltoXS5vZmZzZXQsaz1mW2ldLm9mZnNldCxsPWosbT1rOzA9PWcmJihsPS0xLzAsMD09ayYmKGk9aCkpLGc9PWYubGVuZ3RoLTImJihtPTEvMCwxPT1qJiYoaD1pKSksZC5wdXNoKHthcHBseUZyb206bCxhcHBseVRvOm0sc3RhcnRPZmZzZXQ6ZltoXS5vZmZzZXQsZW5kT2Zmc2V0OmZbaV0ub2Zmc2V0LGVhc2luZ0Z1bmN0aW9uOmEucGFyc2VFYXNpbmdGdW5jdGlvbihmW2hdLmVhc2luZykscHJvcGVydHk6ZSxpbnRlcnBvbGF0aW9uOmIucHJvcGVydHlJbnRlcnBvbGF0aW9uKGUsZltoXS52YWx1ZSxmW2ldLnZhbHVlKX0pfXJldHVybiBkLnNvcnQoZnVuY3Rpb24oYSxiKXtyZXR1cm4gYS5zdGFydE9mZnNldC1iLnN0YXJ0T2Zmc2V0fSksZH1iLmNvbnZlcnRFZmZlY3RJbnB1dD1mdW5jdGlvbihjKXt2YXIgZj1hLm5vcm1hbGl6ZUtleWZyYW1lcyhjKSxnPWQoZiksaD1lKGcpO3JldHVybiBmdW5jdGlvbihhLGMpe2lmKG51bGwhPWMpaC5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGM+PWEuYXBwbHlGcm9tJiZjPGEuYXBwbHlUb30pLmZvckVhY2goZnVuY3Rpb24oZCl7dmFyIGU9Yy1kLnN0YXJ0T2Zmc2V0LGY9ZC5lbmRPZmZzZXQtZC5zdGFydE9mZnNldCxnPTA9PWY/MDpkLmVhc2luZ0Z1bmN0aW9uKGUvZik7Yi5hcHBseShhLGQucHJvcGVydHksZC5pbnRlcnBvbGF0aW9uKGcpKX0pO2Vsc2UgZm9yKHZhciBkIGluIGcpXCJvZmZzZXRcIiE9ZCYmXCJlYXNpbmdcIiE9ZCYmXCJjb21wb3NpdGVcIiE9ZCYmYi5jbGVhcihhLGQpfX19KGMsZCksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7cmV0dXJuIGEucmVwbGFjZSgvLSguKS9nLGZ1bmN0aW9uKGEsYil7cmV0dXJuIGIudG9VcHBlckNhc2UoKX0pfWZ1bmN0aW9uIGUoYSxiLGMpe2hbY109aFtjXXx8W10saFtjXS5wdXNoKFthLGJdKX1mdW5jdGlvbiBmKGEsYixjKXtmb3IodmFyIGY9MDtmPGMubGVuZ3RoO2YrKyl7ZShhLGIsZChjW2ZdKSl9fWZ1bmN0aW9uIGcoYyxlLGYpe3ZhciBnPWM7Ly0vLnRlc3QoYykmJiFhLmlzRGVwcmVjYXRlZChcIkh5cGhlbmF0ZWQgcHJvcGVydHkgbmFtZXNcIixcIjIwMTYtMDMtMjJcIixcIlVzZSBjYW1lbENhc2UgaW5zdGVhZC5cIiwhMCkmJihnPWQoYykpLFwiaW5pdGlhbFwiIT1lJiZcImluaXRpYWxcIiE9Znx8KFwiaW5pdGlhbFwiPT1lJiYoZT1pW2ddKSxcImluaXRpYWxcIj09ZiYmKGY9aVtnXSkpO2Zvcih2YXIgaj1lPT1mP1tdOmhbZ10saz0wO2omJms8ai5sZW5ndGg7aysrKXt2YXIgbD1qW2tdWzBdKGUpLG09altrXVswXShmKTtpZih2b2lkIDAhPT1sJiZ2b2lkIDAhPT1tKXt2YXIgbj1qW2tdWzFdKGwsbSk7aWYobil7dmFyIG89Yi5JbnRlcnBvbGF0aW9uLmFwcGx5KG51bGwsbik7cmV0dXJuIGZ1bmN0aW9uKGEpe3JldHVybiAwPT1hP2U6MT09YT9mOm8oYSl9fX19cmV0dXJuIGIuSW50ZXJwb2xhdGlvbighMSwhMCxmdW5jdGlvbihhKXtyZXR1cm4gYT9mOmV9KX12YXIgaD17fTtiLmFkZFByb3BlcnRpZXNIYW5kbGVyPWY7dmFyIGk9e2JhY2tncm91bmRDb2xvcjpcInRyYW5zcGFyZW50XCIsYmFja2dyb3VuZFBvc2l0aW9uOlwiMCUgMCVcIixib3JkZXJCb3R0b21Db2xvcjpcImN1cnJlbnRDb2xvclwiLGJvcmRlckJvdHRvbUxlZnRSYWRpdXM6XCIwcHhcIixib3JkZXJCb3R0b21SaWdodFJhZGl1czpcIjBweFwiLGJvcmRlckJvdHRvbVdpZHRoOlwiM3B4XCIsYm9yZGVyTGVmdENvbG9yOlwiY3VycmVudENvbG9yXCIsYm9yZGVyTGVmdFdpZHRoOlwiM3B4XCIsYm9yZGVyUmlnaHRDb2xvcjpcImN1cnJlbnRDb2xvclwiLGJvcmRlclJpZ2h0V2lkdGg6XCIzcHhcIixib3JkZXJTcGFjaW5nOlwiMnB4XCIsYm9yZGVyVG9wQ29sb3I6XCJjdXJyZW50Q29sb3JcIixib3JkZXJUb3BMZWZ0UmFkaXVzOlwiMHB4XCIsYm9yZGVyVG9wUmlnaHRSYWRpdXM6XCIwcHhcIixib3JkZXJUb3BXaWR0aDpcIjNweFwiLGJvdHRvbTpcImF1dG9cIixjbGlwOlwicmVjdCgwcHgsIDBweCwgMHB4LCAwcHgpXCIsY29sb3I6XCJibGFja1wiLGZvbnRTaXplOlwiMTAwJVwiLGZvbnRXZWlnaHQ6XCI0MDBcIixoZWlnaHQ6XCJhdXRvXCIsbGVmdDpcImF1dG9cIixsZXR0ZXJTcGFjaW5nOlwibm9ybWFsXCIsbGluZUhlaWdodDpcIjEyMCVcIixtYXJnaW5Cb3R0b206XCIwcHhcIixtYXJnaW5MZWZ0OlwiMHB4XCIsbWFyZ2luUmlnaHQ6XCIwcHhcIixtYXJnaW5Ub3A6XCIwcHhcIixtYXhIZWlnaHQ6XCJub25lXCIsbWF4V2lkdGg6XCJub25lXCIsbWluSGVpZ2h0OlwiMHB4XCIsbWluV2lkdGg6XCIwcHhcIixvcGFjaXR5OlwiMS4wXCIsb3V0bGluZUNvbG9yOlwiaW52ZXJ0XCIsb3V0bGluZU9mZnNldDpcIjBweFwiLG91dGxpbmVXaWR0aDpcIjNweFwiLHBhZGRpbmdCb3R0b206XCIwcHhcIixwYWRkaW5nTGVmdDpcIjBweFwiLHBhZGRpbmdSaWdodDpcIjBweFwiLHBhZGRpbmdUb3A6XCIwcHhcIixyaWdodDpcImF1dG9cIixzdHJva2VEYXNoYXJyYXk6XCJub25lXCIsc3Ryb2tlRGFzaG9mZnNldDpcIjBweFwiLHRleHRJbmRlbnQ6XCIwcHhcIix0ZXh0U2hhZG93OlwiMHB4IDBweCAwcHggdHJhbnNwYXJlbnRcIix0b3A6XCJhdXRvXCIsdHJhbnNmb3JtOlwiXCIsdmVydGljYWxBbGlnbjpcIjBweFwiLHZpc2liaWxpdHk6XCJ2aXNpYmxlXCIsd2lkdGg6XCJhdXRvXCIsd29yZFNwYWNpbmc6XCJub3JtYWxcIix6SW5kZXg6XCJhdXRvXCJ9O2IucHJvcGVydHlJbnRlcnBvbGF0aW9uPWd9KGMsZCksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYil7dmFyIGM9YS5jYWxjdWxhdGVBY3RpdmVEdXJhdGlvbihiKSxkPWZ1bmN0aW9uKGQpe3JldHVybiBhLmNhbGN1bGF0ZUl0ZXJhdGlvblByb2dyZXNzKGMsZCxiKX07cmV0dXJuIGQuX3RvdGFsRHVyYXRpb249Yi5kZWxheStjK2IuZW5kRGVsYXksZH1iLktleWZyYW1lRWZmZWN0PWZ1bmN0aW9uKGMsZSxmLGcpe3ZhciBoLGk9ZChhLm5vcm1hbGl6ZVRpbWluZ0lucHV0KGYpKSxqPWIuY29udmVydEVmZmVjdElucHV0KGUpLGs9ZnVuY3Rpb24oKXtqKGMsaCl9O3JldHVybiBrLl91cGRhdGU9ZnVuY3Rpb24oYSl7cmV0dXJuIG51bGwhPT0oaD1pKGEpKX0say5fY2xlYXI9ZnVuY3Rpb24oKXtqKGMsbnVsbCl9LGsuX2hhc1NhbWVUYXJnZXQ9ZnVuY3Rpb24oYSl7cmV0dXJuIGM9PT1hfSxrLl90YXJnZXQ9YyxrLl90b3RhbER1cmF0aW9uPWkuX3RvdGFsRHVyYXRpb24say5faWQ9ZyxrfX0oYyxkKSxmdW5jdGlvbihhLGIpe2EuYXBwbHk9ZnVuY3Rpb24oYixjLGQpe2Iuc3R5bGVbYS5wcm9wZXJ0eU5hbWUoYyldPWR9LGEuY2xlYXI9ZnVuY3Rpb24oYixjKXtiLnN0eWxlW2EucHJvcGVydHlOYW1lKGMpXT1cIlwifX0oZCksZnVuY3Rpb24oYSl7d2luZG93LkVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGU9ZnVuY3Rpb24oYixjKXt2YXIgZD1cIlwiO3JldHVybiBjJiZjLmlkJiYoZD1jLmlkKSxhLnRpbWVsaW5lLl9wbGF5KGEuS2V5ZnJhbWVFZmZlY3QodGhpcyxiLGMsZCkpfX0oZCksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEsYixkKXtpZihcIm51bWJlclwiPT10eXBlb2YgYSYmXCJudW1iZXJcIj09dHlwZW9mIGIpcmV0dXJuIGEqKDEtZCkrYipkO2lmKFwiYm9vbGVhblwiPT10eXBlb2YgYSYmXCJib29sZWFuXCI9PXR5cGVvZiBiKXJldHVybiBkPC41P2E6YjtpZihhLmxlbmd0aD09Yi5sZW5ndGgpe2Zvcih2YXIgZT1bXSxmPTA7ZjxhLmxlbmd0aDtmKyspZS5wdXNoKGMoYVtmXSxiW2ZdLGQpKTtyZXR1cm4gZX10aHJvd1wiTWlzbWF0Y2hlZCBpbnRlcnBvbGF0aW9uIGFyZ3VtZW50cyBcIithK1wiOlwiK2J9YS5JbnRlcnBvbGF0aW9uPWZ1bmN0aW9uKGEsYixkKXtyZXR1cm4gZnVuY3Rpb24oZSl7cmV0dXJuIGQoYyhhLGIsZSkpfX19KGQpLGZ1bmN0aW9uKGEsYixjKXthLnNlcXVlbmNlTnVtYmVyPTA7dmFyIGQ9ZnVuY3Rpb24oYSxiLGMpe3RoaXMudGFyZ2V0PWEsdGhpcy5jdXJyZW50VGltZT1iLHRoaXMudGltZWxpbmVUaW1lPWMsdGhpcy50eXBlPVwiZmluaXNoXCIsdGhpcy5idWJibGVzPSExLHRoaXMuY2FuY2VsYWJsZT0hMSx0aGlzLmN1cnJlbnRUYXJnZXQ9YSx0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITEsdGhpcy5ldmVudFBoYXNlPUV2ZW50LkFUX1RBUkdFVCx0aGlzLnRpbWVTdGFtcD1EYXRlLm5vdygpfTtiLkFuaW1hdGlvbj1mdW5jdGlvbihiKXt0aGlzLmlkPVwiXCIsYiYmYi5faWQmJih0aGlzLmlkPWIuX2lkKSx0aGlzLl9zZXF1ZW5jZU51bWJlcj1hLnNlcXVlbmNlTnVtYmVyKyssdGhpcy5fY3VycmVudFRpbWU9MCx0aGlzLl9zdGFydFRpbWU9bnVsbCx0aGlzLl9wYXVzZWQ9ITEsdGhpcy5fcGxheWJhY2tSYXRlPTEsdGhpcy5faW5UaW1lbGluZT0hMCx0aGlzLl9maW5pc2hlZEZsYWc9ITAsdGhpcy5vbmZpbmlzaD1udWxsLHRoaXMuX2ZpbmlzaEhhbmRsZXJzPVtdLHRoaXMuX2VmZmVjdD1iLHRoaXMuX2luRWZmZWN0PXRoaXMuX2VmZmVjdC5fdXBkYXRlKDApLHRoaXMuX2lkbGU9ITAsdGhpcy5fY3VycmVudFRpbWVQZW5kaW5nPSExfSxiLkFuaW1hdGlvbi5wcm90b3R5cGU9e19lbnN1cmVBbGl2ZTpmdW5jdGlvbigpe3RoaXMucGxheWJhY2tSYXRlPDAmJjA9PT10aGlzLmN1cnJlbnRUaW1lP3RoaXMuX2luRWZmZWN0PXRoaXMuX2VmZmVjdC5fdXBkYXRlKC0xKTp0aGlzLl9pbkVmZmVjdD10aGlzLl9lZmZlY3QuX3VwZGF0ZSh0aGlzLmN1cnJlbnRUaW1lKSx0aGlzLl9pblRpbWVsaW5lfHwhdGhpcy5faW5FZmZlY3QmJnRoaXMuX2ZpbmlzaGVkRmxhZ3x8KHRoaXMuX2luVGltZWxpbmU9ITAsYi50aW1lbGluZS5fYW5pbWF0aW9ucy5wdXNoKHRoaXMpKX0sX3RpY2tDdXJyZW50VGltZTpmdW5jdGlvbihhLGIpe2EhPXRoaXMuX2N1cnJlbnRUaW1lJiYodGhpcy5fY3VycmVudFRpbWU9YSx0aGlzLl9pc0ZpbmlzaGVkJiYhYiYmKHRoaXMuX2N1cnJlbnRUaW1lPXRoaXMuX3BsYXliYWNrUmF0ZT4wP3RoaXMuX3RvdGFsRHVyYXRpb246MCksdGhpcy5fZW5zdXJlQWxpdmUoKSl9LGdldCBjdXJyZW50VGltZSgpe3JldHVybiB0aGlzLl9pZGxlfHx0aGlzLl9jdXJyZW50VGltZVBlbmRpbmc/bnVsbDp0aGlzLl9jdXJyZW50VGltZX0sc2V0IGN1cnJlbnRUaW1lKGEpe2E9K2EsaXNOYU4oYSl8fChiLnJlc3RhcnQoKSx0aGlzLl9wYXVzZWR8fG51bGw9PXRoaXMuX3N0YXJ0VGltZXx8KHRoaXMuX3N0YXJ0VGltZT10aGlzLl90aW1lbGluZS5jdXJyZW50VGltZS1hL3RoaXMuX3BsYXliYWNrUmF0ZSksdGhpcy5fY3VycmVudFRpbWVQZW5kaW5nPSExLHRoaXMuX2N1cnJlbnRUaW1lIT1hJiYodGhpcy5faWRsZSYmKHRoaXMuX2lkbGU9ITEsdGhpcy5fcGF1c2VkPSEwKSx0aGlzLl90aWNrQ3VycmVudFRpbWUoYSwhMCksYi5hcHBseURpcnRpZWRBbmltYXRpb24odGhpcykpKX0sZ2V0IHN0YXJ0VGltZSgpe3JldHVybiB0aGlzLl9zdGFydFRpbWV9LHNldCBzdGFydFRpbWUoYSl7YT0rYSxpc05hTihhKXx8dGhpcy5fcGF1c2VkfHx0aGlzLl9pZGxlfHwodGhpcy5fc3RhcnRUaW1lPWEsdGhpcy5fdGlja0N1cnJlbnRUaW1lKCh0aGlzLl90aW1lbGluZS5jdXJyZW50VGltZS10aGlzLl9zdGFydFRpbWUpKnRoaXMucGxheWJhY2tSYXRlKSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbih0aGlzKSl9LGdldCBwbGF5YmFja1JhdGUoKXtyZXR1cm4gdGhpcy5fcGxheWJhY2tSYXRlfSxzZXQgcGxheWJhY2tSYXRlKGEpe2lmKGEhPXRoaXMuX3BsYXliYWNrUmF0ZSl7dmFyIGM9dGhpcy5jdXJyZW50VGltZTt0aGlzLl9wbGF5YmFja1JhdGU9YSx0aGlzLl9zdGFydFRpbWU9bnVsbCxcInBhdXNlZFwiIT10aGlzLnBsYXlTdGF0ZSYmXCJpZGxlXCIhPXRoaXMucGxheVN0YXRlJiYodGhpcy5fZmluaXNoZWRGbGFnPSExLHRoaXMuX2lkbGU9ITEsdGhpcy5fZW5zdXJlQWxpdmUoKSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbih0aGlzKSksbnVsbCE9YyYmKHRoaXMuY3VycmVudFRpbWU9Yyl9fSxnZXQgX2lzRmluaXNoZWQoKXtyZXR1cm4hdGhpcy5faWRsZSYmKHRoaXMuX3BsYXliYWNrUmF0ZT4wJiZ0aGlzLl9jdXJyZW50VGltZT49dGhpcy5fdG90YWxEdXJhdGlvbnx8dGhpcy5fcGxheWJhY2tSYXRlPDAmJnRoaXMuX2N1cnJlbnRUaW1lPD0wKX0sZ2V0IF90b3RhbER1cmF0aW9uKCl7cmV0dXJuIHRoaXMuX2VmZmVjdC5fdG90YWxEdXJhdGlvbn0sZ2V0IHBsYXlTdGF0ZSgpe3JldHVybiB0aGlzLl9pZGxlP1wiaWRsZVwiOm51bGw9PXRoaXMuX3N0YXJ0VGltZSYmIXRoaXMuX3BhdXNlZCYmMCE9dGhpcy5wbGF5YmFja1JhdGV8fHRoaXMuX2N1cnJlbnRUaW1lUGVuZGluZz9cInBlbmRpbmdcIjp0aGlzLl9wYXVzZWQ/XCJwYXVzZWRcIjp0aGlzLl9pc0ZpbmlzaGVkP1wiZmluaXNoZWRcIjpcInJ1bm5pbmdcIn0sX3Jld2luZDpmdW5jdGlvbigpe2lmKHRoaXMuX3BsYXliYWNrUmF0ZT49MCl0aGlzLl9jdXJyZW50VGltZT0wO2Vsc2V7aWYoISh0aGlzLl90b3RhbER1cmF0aW9uPDEvMCkpdGhyb3cgbmV3IERPTUV4Y2VwdGlvbihcIlVuYWJsZSB0byByZXdpbmQgbmVnYXRpdmUgcGxheWJhY2sgcmF0ZSBhbmltYXRpb24gd2l0aCBpbmZpbml0ZSBkdXJhdGlvblwiLFwiSW52YWxpZFN0YXRlRXJyb3JcIik7dGhpcy5fY3VycmVudFRpbWU9dGhpcy5fdG90YWxEdXJhdGlvbn19LHBsYXk6ZnVuY3Rpb24oKXt0aGlzLl9wYXVzZWQ9ITEsKHRoaXMuX2lzRmluaXNoZWR8fHRoaXMuX2lkbGUpJiYodGhpcy5fcmV3aW5kKCksdGhpcy5fc3RhcnRUaW1lPW51bGwpLHRoaXMuX2ZpbmlzaGVkRmxhZz0hMSx0aGlzLl9pZGxlPSExLHRoaXMuX2Vuc3VyZUFsaXZlKCksYi5hcHBseURpcnRpZWRBbmltYXRpb24odGhpcyl9LHBhdXNlOmZ1bmN0aW9uKCl7dGhpcy5faXNGaW5pc2hlZHx8dGhpcy5fcGF1c2VkfHx0aGlzLl9pZGxlP3RoaXMuX2lkbGUmJih0aGlzLl9yZXdpbmQoKSx0aGlzLl9pZGxlPSExKTp0aGlzLl9jdXJyZW50VGltZVBlbmRpbmc9ITAsdGhpcy5fc3RhcnRUaW1lPW51bGwsdGhpcy5fcGF1c2VkPSEwfSxmaW5pc2g6ZnVuY3Rpb24oKXt0aGlzLl9pZGxlfHwodGhpcy5jdXJyZW50VGltZT10aGlzLl9wbGF5YmFja1JhdGU+MD90aGlzLl90b3RhbER1cmF0aW9uOjAsdGhpcy5fc3RhcnRUaW1lPXRoaXMuX3RvdGFsRHVyYXRpb24tdGhpcy5jdXJyZW50VGltZSx0aGlzLl9jdXJyZW50VGltZVBlbmRpbmc9ITEsYi5hcHBseURpcnRpZWRBbmltYXRpb24odGhpcykpfSxjYW5jZWw6ZnVuY3Rpb24oKXt0aGlzLl9pbkVmZmVjdCYmKHRoaXMuX2luRWZmZWN0PSExLHRoaXMuX2lkbGU9ITAsdGhpcy5fcGF1c2VkPSExLHRoaXMuX2lzRmluaXNoZWQ9ITAsdGhpcy5fZmluaXNoZWRGbGFnPSEwLHRoaXMuX2N1cnJlbnRUaW1lPTAsdGhpcy5fc3RhcnRUaW1lPW51bGwsdGhpcy5fZWZmZWN0Ll91cGRhdGUobnVsbCksYi5hcHBseURpcnRpZWRBbmltYXRpb24odGhpcykpfSxyZXZlcnNlOmZ1bmN0aW9uKCl7dGhpcy5wbGF5YmFja1JhdGUqPS0xLHRoaXMucGxheSgpfSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmXCJmaW5pc2hcIj09YSYmdGhpcy5fZmluaXNoSGFuZGxlcnMucHVzaChiKX0scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIpe2lmKFwiZmluaXNoXCI9PWEpe3ZhciBjPXRoaXMuX2ZpbmlzaEhhbmRsZXJzLmluZGV4T2YoYik7Yz49MCYmdGhpcy5fZmluaXNoSGFuZGxlcnMuc3BsaWNlKGMsMSl9fSxfZmlyZUV2ZW50czpmdW5jdGlvbihhKXtpZih0aGlzLl9pc0ZpbmlzaGVkKXtpZighdGhpcy5fZmluaXNoZWRGbGFnKXt2YXIgYj1uZXcgZCh0aGlzLHRoaXMuX2N1cnJlbnRUaW1lLGEpLGM9dGhpcy5fZmluaXNoSGFuZGxlcnMuY29uY2F0KHRoaXMub25maW5pc2g/W3RoaXMub25maW5pc2hdOltdKTtzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yy5mb3JFYWNoKGZ1bmN0aW9uKGEpe2EuY2FsbChiLnRhcmdldCxiKX0pfSwwKSx0aGlzLl9maW5pc2hlZEZsYWc9ITB9fWVsc2UgdGhpcy5fZmluaXNoZWRGbGFnPSExfSxfdGljazpmdW5jdGlvbihhLGIpe3RoaXMuX2lkbGV8fHRoaXMuX3BhdXNlZHx8KG51bGw9PXRoaXMuX3N0YXJ0VGltZT9iJiYodGhpcy5zdGFydFRpbWU9YS10aGlzLl9jdXJyZW50VGltZS90aGlzLnBsYXliYWNrUmF0ZSk6dGhpcy5faXNGaW5pc2hlZHx8dGhpcy5fdGlja0N1cnJlbnRUaW1lKChhLXRoaXMuX3N0YXJ0VGltZSkqdGhpcy5wbGF5YmFja1JhdGUpKSxiJiYodGhpcy5fY3VycmVudFRpbWVQZW5kaW5nPSExLHRoaXMuX2ZpcmVFdmVudHMoYSkpfSxnZXQgX25lZWRzVGljaygpe3JldHVybiB0aGlzLnBsYXlTdGF0ZSBpbntwZW5kaW5nOjEscnVubmluZzoxfXx8IXRoaXMuX2ZpbmlzaGVkRmxhZ30sX3RhcmdldEFuaW1hdGlvbnM6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl9lZmZlY3QuX3RhcmdldDtyZXR1cm4gYS5fYWN0aXZlQW5pbWF0aW9uc3x8KGEuX2FjdGl2ZUFuaW1hdGlvbnM9W10pLGEuX2FjdGl2ZUFuaW1hdGlvbnN9LF9tYXJrVGFyZ2V0OmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fdGFyZ2V0QW5pbWF0aW9ucygpOy0xPT09YS5pbmRleE9mKHRoaXMpJiZhLnB1c2godGhpcyl9LF91bm1hcmtUYXJnZXQ6ZnVuY3Rpb24oKXt2YXIgYT10aGlzLl90YXJnZXRBbmltYXRpb25zKCksYj1hLmluZGV4T2YodGhpcyk7LTEhPT1iJiZhLnNwbGljZShiLDEpfX19KGMsZCksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYSl7dmFyIGI9ajtqPVtdLGE8cS5jdXJyZW50VGltZSYmKGE9cS5jdXJyZW50VGltZSkscS5fYW5pbWF0aW9ucy5zb3J0KGUpLHEuX2FuaW1hdGlvbnM9aChhLCEwLHEuX2FuaW1hdGlvbnMpWzBdLGIuZm9yRWFjaChmdW5jdGlvbihiKXtiWzFdKGEpfSksZygpLGw9dm9pZCAwfWZ1bmN0aW9uIGUoYSxiKXtyZXR1cm4gYS5fc2VxdWVuY2VOdW1iZXItYi5fc2VxdWVuY2VOdW1iZXJ9ZnVuY3Rpb24gZigpe3RoaXMuX2FuaW1hdGlvbnM9W10sdGhpcy5jdXJyZW50VGltZT13aW5kb3cucGVyZm9ybWFuY2UmJnBlcmZvcm1hbmNlLm5vdz9wZXJmb3JtYW5jZS5ub3coKTowfWZ1bmN0aW9uIGcoKXtvLmZvckVhY2goZnVuY3Rpb24oYSl7YSgpfSksby5sZW5ndGg9MH1mdW5jdGlvbiBoKGEsYyxkKXtwPSEwLG49ITEsYi50aW1lbGluZS5jdXJyZW50VGltZT1hLG09ITE7dmFyIGU9W10sZj1bXSxnPVtdLGg9W107cmV0dXJuIGQuZm9yRWFjaChmdW5jdGlvbihiKXtiLl90aWNrKGEsYyksYi5faW5FZmZlY3Q/KGYucHVzaChiLl9lZmZlY3QpLGIuX21hcmtUYXJnZXQoKSk6KGUucHVzaChiLl9lZmZlY3QpLGIuX3VubWFya1RhcmdldCgpKSxiLl9uZWVkc1RpY2smJihtPSEwKTt2YXIgZD1iLl9pbkVmZmVjdHx8Yi5fbmVlZHNUaWNrO2IuX2luVGltZWxpbmU9ZCxkP2cucHVzaChiKTpoLnB1c2goYil9KSxvLnB1c2guYXBwbHkobyxlKSxvLnB1c2guYXBwbHkobyxmKSxtJiZyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt9KSxwPSExLFtnLGhdfXZhciBpPXdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsaj1bXSxrPTA7d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZT1mdW5jdGlvbihhKXt2YXIgYj1rKys7cmV0dXJuIDA9PWoubGVuZ3RoJiZpKGQpLGoucHVzaChbYixhXSksYn0sd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe2ouZm9yRWFjaChmdW5jdGlvbihiKXtiWzBdPT1hJiYoYlsxXT1mdW5jdGlvbigpe30pfSl9LGYucHJvdG90eXBlPXtfcGxheTpmdW5jdGlvbihjKXtjLl90aW1pbmc9YS5ub3JtYWxpemVUaW1pbmdJbnB1dChjLnRpbWluZyk7dmFyIGQ9bmV3IGIuQW5pbWF0aW9uKGMpO3JldHVybiBkLl9pZGxlPSExLGQuX3RpbWVsaW5lPXRoaXMsdGhpcy5fYW5pbWF0aW9ucy5wdXNoKGQpLGIucmVzdGFydCgpLGIuYXBwbHlEaXJ0aWVkQW5pbWF0aW9uKGQpLGR9fTt2YXIgbD12b2lkIDAsbT0hMSxuPSExO2IucmVzdGFydD1mdW5jdGlvbigpe3JldHVybiBtfHwobT0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZnVuY3Rpb24oKXt9KSxuPSEwKSxufSxiLmFwcGx5RGlydGllZEFuaW1hdGlvbj1mdW5jdGlvbihhKXtpZighcCl7YS5fbWFya1RhcmdldCgpO3ZhciBjPWEuX3RhcmdldEFuaW1hdGlvbnMoKTtjLnNvcnQoZSksaChiLnRpbWVsaW5lLmN1cnJlbnRUaW1lLCExLGMuc2xpY2UoKSlbMV0uZm9yRWFjaChmdW5jdGlvbihhKXt2YXIgYj1xLl9hbmltYXRpb25zLmluZGV4T2YoYSk7LTEhPT1iJiZxLl9hbmltYXRpb25zLnNwbGljZShiLDEpfSksZygpfX07dmFyIG89W10scD0hMSxxPW5ldyBmO2IudGltZWxpbmU9cX0oYyxkKSxmdW5jdGlvbihhKXtmdW5jdGlvbiBiKGEsYil7dmFyIGM9YS5leGVjKGIpO2lmKGMpcmV0dXJuIGM9YS5pZ25vcmVDYXNlP2NbMF0udG9Mb3dlckNhc2UoKTpjWzBdLFtjLGIuc3Vic3RyKGMubGVuZ3RoKV19ZnVuY3Rpb24gYyhhLGIpe2I9Yi5yZXBsYWNlKC9eXFxzKi8sXCJcIik7dmFyIGM9YShiKTtpZihjKXJldHVybltjWzBdLGNbMV0ucmVwbGFjZSgvXlxccyovLFwiXCIpXX1mdW5jdGlvbiBkKGEsZCxlKXthPWMuYmluZChudWxsLGEpO2Zvcih2YXIgZj1bXTs7KXt2YXIgZz1hKGUpO2lmKCFnKXJldHVybltmLGVdO2lmKGYucHVzaChnWzBdKSxlPWdbMV0sIShnPWIoZCxlKSl8fFwiXCI9PWdbMV0pcmV0dXJuW2YsZV07ZT1nWzFdfX1mdW5jdGlvbiBlKGEsYil7Zm9yKHZhciBjPTAsZD0wO2Q8Yi5sZW5ndGgmJighL1xcc3wsLy50ZXN0KGJbZF0pfHwwIT1jKTtkKyspaWYoXCIoXCI9PWJbZF0pYysrO2Vsc2UgaWYoXCIpXCI9PWJbZF0mJihjLS0sMD09YyYmZCsrLGM8PTApKWJyZWFrO3ZhciBlPWEoYi5zdWJzdHIoMCxkKSk7cmV0dXJuIHZvaWQgMD09ZT92b2lkIDA6W2UsYi5zdWJzdHIoZCldfWZ1bmN0aW9uIGYoYSxiKXtmb3IodmFyIGM9YSxkPWI7YyYmZDspYz5kP2MlPWQ6ZCU9YztyZXR1cm4gYz1hKmIvKGMrZCl9ZnVuY3Rpb24gZyhhKXtyZXR1cm4gZnVuY3Rpb24oYil7dmFyIGM9YShiKTtyZXR1cm4gYyYmKGNbMF09dm9pZCAwKSxjfX1mdW5jdGlvbiBoKGEsYil7cmV0dXJuIGZ1bmN0aW9uKGMpe3JldHVybiBhKGMpfHxbYixjXX19ZnVuY3Rpb24gaShiLGMpe2Zvcih2YXIgZD1bXSxlPTA7ZTxiLmxlbmd0aDtlKyspe3ZhciBmPWEuY29uc3VtZVRyaW1tZWQoYltlXSxjKTtpZighZnx8XCJcIj09ZlswXSlyZXR1cm47dm9pZCAwIT09ZlswXSYmZC5wdXNoKGZbMF0pLGM9ZlsxXX1pZihcIlwiPT1jKXJldHVybiBkfWZ1bmN0aW9uIGooYSxiLGMsZCxlKXtmb3IodmFyIGc9W10saD1bXSxpPVtdLGo9ZihkLmxlbmd0aCxlLmxlbmd0aCksaz0wO2s8ajtrKyspe3ZhciBsPWIoZFtrJWQubGVuZ3RoXSxlW2slZS5sZW5ndGhdKTtpZighbClyZXR1cm47Zy5wdXNoKGxbMF0pLGgucHVzaChsWzFdKSxpLnB1c2gobFsyXSl9cmV0dXJuW2csaCxmdW5jdGlvbihiKXt2YXIgZD1iLm1hcChmdW5jdGlvbihhLGIpe3JldHVybiBpW2JdKGEpfSkuam9pbihjKTtyZXR1cm4gYT9hKGQpOmR9XX1mdW5jdGlvbiBrKGEsYixjKXtmb3IodmFyIGQ9W10sZT1bXSxmPVtdLGc9MCxoPTA7aDxjLmxlbmd0aDtoKyspaWYoXCJmdW5jdGlvblwiPT10eXBlb2YgY1toXSl7dmFyIGk9Y1toXShhW2ddLGJbZysrXSk7ZC5wdXNoKGlbMF0pLGUucHVzaChpWzFdKSxmLnB1c2goaVsyXSl9ZWxzZSFmdW5jdGlvbihhKXtkLnB1c2goITEpLGUucHVzaCghMSksZi5wdXNoKGZ1bmN0aW9uKCl7cmV0dXJuIGNbYV19KX0oaCk7cmV0dXJuW2QsZSxmdW5jdGlvbihhKXtmb3IodmFyIGI9XCJcIixjPTA7YzxhLmxlbmd0aDtjKyspYis9ZltjXShhW2NdKTtyZXR1cm4gYn1dfWEuY29uc3VtZVRva2VuPWIsYS5jb25zdW1lVHJpbW1lZD1jLGEuY29uc3VtZVJlcGVhdGVkPWQsYS5jb25zdW1lUGFyZW50aGVzaXNlZD1lLGEuaWdub3JlPWcsYS5vcHRpb25hbD1oLGEuY29uc3VtZUxpc3Q9aSxhLm1lcmdlTmVzdGVkUmVwZWF0ZWQ9ai5iaW5kKG51bGwsbnVsbCksYS5tZXJnZVdyYXBwZWROZXN0ZWRSZXBlYXRlZD1qLGEubWVyZ2VMaXN0PWt9KGQpLGZ1bmN0aW9uKGEpe2Z1bmN0aW9uIGIoYil7ZnVuY3Rpb24gYyhiKXt2YXIgYz1hLmNvbnN1bWVUb2tlbigvXmluc2V0L2ksYik7aWYoYylyZXR1cm4gZC5pbnNldD0hMCxjO3ZhciBjPWEuY29uc3VtZUxlbmd0aE9yUGVyY2VudChiKTtpZihjKXJldHVybiBkLmxlbmd0aHMucHVzaChjWzBdKSxjO3ZhciBjPWEuY29uc3VtZUNvbG9yKGIpO3JldHVybiBjPyhkLmNvbG9yPWNbMF0sYyk6dm9pZCAwfXZhciBkPXtpbnNldDohMSxsZW5ndGhzOltdLGNvbG9yOm51bGx9LGU9YS5jb25zdW1lUmVwZWF0ZWQoYywvXi8sYik7aWYoZSYmZVswXS5sZW5ndGgpcmV0dXJuW2QsZVsxXV19ZnVuY3Rpb24gYyhjKXt2YXIgZD1hLmNvbnN1bWVSZXBlYXRlZChiLC9eLC8sYyk7aWYoZCYmXCJcIj09ZFsxXSlyZXR1cm4gZFswXX1mdW5jdGlvbiBkKGIsYyl7Zm9yKDtiLmxlbmd0aHMubGVuZ3RoPE1hdGgubWF4KGIubGVuZ3Rocy5sZW5ndGgsYy5sZW5ndGhzLmxlbmd0aCk7KWIubGVuZ3Rocy5wdXNoKHtweDowfSk7Zm9yKDtjLmxlbmd0aHMubGVuZ3RoPE1hdGgubWF4KGIubGVuZ3Rocy5sZW5ndGgsYy5sZW5ndGhzLmxlbmd0aCk7KWMubGVuZ3Rocy5wdXNoKHtweDowfSk7aWYoYi5pbnNldD09Yy5pbnNldCYmISFiLmNvbG9yPT0hIWMuY29sb3Ipe2Zvcih2YXIgZCxlPVtdLGY9W1tdLDBdLGc9W1tdLDBdLGg9MDtoPGIubGVuZ3Rocy5sZW5ndGg7aCsrKXt2YXIgaT1hLm1lcmdlRGltZW5zaW9ucyhiLmxlbmd0aHNbaF0sYy5sZW5ndGhzW2hdLDI9PWgpO2ZbMF0ucHVzaChpWzBdKSxnWzBdLnB1c2goaVsxXSksZS5wdXNoKGlbMl0pfWlmKGIuY29sb3ImJmMuY29sb3Ipe3ZhciBqPWEubWVyZ2VDb2xvcnMoYi5jb2xvcixjLmNvbG9yKTtmWzFdPWpbMF0sZ1sxXT1qWzFdLGQ9alsyXX1yZXR1cm5bZixnLGZ1bmN0aW9uKGEpe2Zvcih2YXIgYz1iLmluc2V0P1wiaW5zZXQgXCI6XCIgXCIsZj0wO2Y8ZS5sZW5ndGg7ZisrKWMrPWVbZl0oYVswXVtmXSkrXCIgXCI7cmV0dXJuIGQmJihjKz1kKGFbMV0pKSxjfV19fWZ1bmN0aW9uIGUoYixjLGQsZSl7ZnVuY3Rpb24gZihhKXtyZXR1cm57aW5zZXQ6YSxjb2xvcjpbMCwwLDAsMF0sbGVuZ3Roczpbe3B4OjB9LHtweDowfSx7cHg6MH0se3B4OjB9XX19Zm9yKHZhciBnPVtdLGg9W10saT0wO2k8ZC5sZW5ndGh8fGk8ZS5sZW5ndGg7aSsrKXt2YXIgaj1kW2ldfHxmKGVbaV0uaW5zZXQpLGs9ZVtpXXx8ZihkW2ldLmluc2V0KTtnLnB1c2goaiksaC5wdXNoKGspfXJldHVybiBhLm1lcmdlTmVzdGVkUmVwZWF0ZWQoYixjLGcsaCl9dmFyIGY9ZS5iaW5kKG51bGwsZCxcIiwgXCIpO2EuYWRkUHJvcGVydGllc0hhbmRsZXIoYyxmLFtcImJveC1zaGFkb3dcIixcInRleHQtc2hhZG93XCJdKX0oZCksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe3JldHVybiBhLnRvRml4ZWQoMykucmVwbGFjZSgvMCskLyxcIlwiKS5yZXBsYWNlKC9cXC4kLyxcIlwiKX1mdW5jdGlvbiBkKGEsYixjKXtyZXR1cm4gTWF0aC5taW4oYixNYXRoLm1heChhLGMpKX1mdW5jdGlvbiBlKGEpe2lmKC9eXFxzKlstK10/KFxcZCpcXC4pP1xcZCtcXHMqJC8udGVzdChhKSlyZXR1cm4gTnVtYmVyKGEpfWZ1bmN0aW9uIGYoYSxiKXtyZXR1cm5bYSxiLGNdfWZ1bmN0aW9uIGcoYSxiKXtpZigwIT1hKXJldHVybiBpKDAsMS8wKShhLGIpfWZ1bmN0aW9uIGgoYSxiKXtyZXR1cm5bYSxiLGZ1bmN0aW9uKGEpe3JldHVybiBNYXRoLnJvdW5kKGQoMSwxLzAsYSkpfV19ZnVuY3Rpb24gaShhLGIpe3JldHVybiBmdW5jdGlvbihlLGYpe3JldHVybltlLGYsZnVuY3Rpb24oZSl7cmV0dXJuIGMoZChhLGIsZSkpfV19fWZ1bmN0aW9uIGooYSl7dmFyIGI9YS50cmltKCkuc3BsaXQoL1xccypbXFxzLF1cXHMqLyk7aWYoMCE9PWIubGVuZ3RoKXtmb3IodmFyIGM9W10sZD0wO2Q8Yi5sZW5ndGg7ZCsrKXt2YXIgZj1lKGJbZF0pO2lmKHZvaWQgMD09PWYpcmV0dXJuO2MucHVzaChmKX1yZXR1cm4gY319ZnVuY3Rpb24gayhhLGIpe2lmKGEubGVuZ3RoPT1iLmxlbmd0aClyZXR1cm5bYSxiLGZ1bmN0aW9uKGEpe3JldHVybiBhLm1hcChjKS5qb2luKFwiIFwiKX1dfWZ1bmN0aW9uIGwoYSxiKXtyZXR1cm5bYSxiLE1hdGgucm91bmRdfWEuY2xhbXA9ZCxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGosayxbXCJzdHJva2UtZGFzaGFycmF5XCJdKSxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGUsaSgwLDEvMCksW1wiYm9yZGVyLWltYWdlLXdpZHRoXCIsXCJsaW5lLWhlaWdodFwiXSksYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihlLGkoMCwxKSxbXCJvcGFjaXR5XCIsXCJzaGFwZS1pbWFnZS10aHJlc2hvbGRcIl0pLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoZSxnLFtcImZsZXgtZ3Jvd1wiLFwiZmxleC1zaHJpbmtcIl0pLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoZSxoLFtcIm9ycGhhbnNcIixcIndpZG93c1wiXSksYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihlLGwsW1wiei1pbmRleFwiXSksYS5wYXJzZU51bWJlcj1lLGEucGFyc2VOdW1iZXJMaXN0PWosYS5tZXJnZU51bWJlcnM9ZixhLm51bWJlclRvU3RyaW5nPWN9KGQpLGZ1bmN0aW9uKGEsYil7ZnVuY3Rpb24gYyhhLGIpe2lmKFwidmlzaWJsZVwiPT1hfHxcInZpc2libGVcIj09YilyZXR1cm5bMCwxLGZ1bmN0aW9uKGMpe3JldHVybiBjPD0wP2E6Yz49MT9iOlwidmlzaWJsZVwifV19YS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihTdHJpbmcsYyxbXCJ2aXNpYmlsaXR5XCJdKX0oZCksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGEpe2E9YS50cmltKCksZi5maWxsU3R5bGU9XCIjMDAwXCIsZi5maWxsU3R5bGU9YTt2YXIgYj1mLmZpbGxTdHlsZTtpZihmLmZpbGxTdHlsZT1cIiNmZmZcIixmLmZpbGxTdHlsZT1hLGI9PWYuZmlsbFN0eWxlKXtmLmZpbGxSZWN0KDAsMCwxLDEpO3ZhciBjPWYuZ2V0SW1hZ2VEYXRhKDAsMCwxLDEpLmRhdGE7Zi5jbGVhclJlY3QoMCwwLDEsMSk7dmFyIGQ9Y1szXS8yNTU7cmV0dXJuW2NbMF0qZCxjWzFdKmQsY1syXSpkLGRdfX1mdW5jdGlvbiBkKGIsYyl7cmV0dXJuW2IsYyxmdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEpe3JldHVybiBNYXRoLm1heCgwLE1hdGgubWluKDI1NSxhKSl9aWYoYlszXSlmb3IodmFyIGQ9MDtkPDM7ZCsrKWJbZF09TWF0aC5yb3VuZChjKGJbZF0vYlszXSkpO3JldHVybiBiWzNdPWEubnVtYmVyVG9TdHJpbmcoYS5jbGFtcCgwLDEsYlszXSkpLFwicmdiYShcIitiLmpvaW4oXCIsXCIpK1wiKVwifV19dmFyIGU9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFwiY2FudmFzXCIpO2Uud2lkdGg9ZS5oZWlnaHQ9MTt2YXIgZj1lLmdldENvbnRleHQoXCIyZFwiKTthLmFkZFByb3BlcnRpZXNIYW5kbGVyKGMsZCxbXCJiYWNrZ3JvdW5kLWNvbG9yXCIsXCJib3JkZXItYm90dG9tLWNvbG9yXCIsXCJib3JkZXItbGVmdC1jb2xvclwiLFwiYm9yZGVyLXJpZ2h0LWNvbG9yXCIsXCJib3JkZXItdG9wLWNvbG9yXCIsXCJjb2xvclwiLFwiZmlsbFwiLFwiZmxvb2QtY29sb3JcIixcImxpZ2h0aW5nLWNvbG9yXCIsXCJvdXRsaW5lLWNvbG9yXCIsXCJzdG9wLWNvbG9yXCIsXCJzdHJva2VcIixcInRleHQtZGVjb3JhdGlvbi1jb2xvclwiXSksYS5jb25zdW1lQ29sb3I9YS5jb25zdW1lUGFyZW50aGVzaXNlZC5iaW5kKG51bGwsYyksYS5tZXJnZUNvbG9ycz1kfShkKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7ZnVuY3Rpb24gYigpe3ZhciBiPWguZXhlYyhhKTtnPWI/YlswXTp2b2lkIDB9ZnVuY3Rpb24gYygpe3ZhciBhPU51bWJlcihnKTtyZXR1cm4gYigpLGF9ZnVuY3Rpb24gZCgpe2lmKFwiKFwiIT09ZylyZXR1cm4gYygpO2IoKTt2YXIgYT1mKCk7cmV0dXJuXCIpXCIhPT1nP05hTjooYigpLGEpfWZ1bmN0aW9uIGUoKXtmb3IodmFyIGE9ZCgpO1wiKlwiPT09Z3x8XCIvXCI9PT1nOyl7dmFyIGM9ZztiKCk7dmFyIGU9ZCgpO1wiKlwiPT09Yz9hKj1lOmEvPWV9cmV0dXJuIGF9ZnVuY3Rpb24gZigpe2Zvcih2YXIgYT1lKCk7XCIrXCI9PT1nfHxcIi1cIj09PWc7KXt2YXIgYz1nO2IoKTt2YXIgZD1lKCk7XCIrXCI9PT1jP2ErPWQ6YS09ZH1yZXR1cm4gYX12YXIgZyxoPS8oW1xcK1xcLVxcd1xcLl0rfFtcXChcXClcXCpcXC9dKS9nO3JldHVybiBiKCksZigpfWZ1bmN0aW9uIGQoYSxiKXtpZihcIjBcIj09KGI9Yi50cmltKCkudG9Mb3dlckNhc2UoKSkmJlwicHhcIi5zZWFyY2goYSk+PTApcmV0dXJue3B4OjB9O2lmKC9eW14oXSokfF5jYWxjLy50ZXN0KGIpKXtiPWIucmVwbGFjZSgvY2FsY1xcKC9nLFwiKFwiKTt2YXIgZD17fTtiPWIucmVwbGFjZShhLGZ1bmN0aW9uKGEpe3JldHVybiBkW2FdPW51bGwsXCJVXCIrYX0pO2Zvcih2YXIgZT1cIlUoXCIrYS5zb3VyY2UrXCIpXCIsZj1iLnJlcGxhY2UoL1stK10/KFxcZCpcXC4pP1xcZCsoW0VlXVstK10/XFxkKyk/L2csXCJOXCIpLnJlcGxhY2UobmV3IFJlZ0V4cChcIk5cIitlLFwiZ1wiKSxcIkRcIikucmVwbGFjZSgvXFxzWystXVxccy9nLFwiT1wiKS5yZXBsYWNlKC9cXHMvZyxcIlwiKSxnPVsvTlxcKihEKS9nLC8oTnxEKVsqXFwvXU4vZywvKE58RClPXFwxL2csL1xcKChOfEQpXFwpL2ddLGg9MDtoPGcubGVuZ3RoOylnW2hdLnRlc3QoZik/KGY9Zi5yZXBsYWNlKGdbaF0sXCIkMVwiKSxoPTApOmgrKztpZihcIkRcIj09Zil7Zm9yKHZhciBpIGluIGQpe3ZhciBqPWMoYi5yZXBsYWNlKG5ldyBSZWdFeHAoXCJVXCIraSxcImdcIiksXCJcIikucmVwbGFjZShuZXcgUmVnRXhwKGUsXCJnXCIpLFwiKjBcIikpO2lmKCFpc0Zpbml0ZShqKSlyZXR1cm47ZFtpXT1qfXJldHVybiBkfX19ZnVuY3Rpb24gZShhLGIpe3JldHVybiBmKGEsYiwhMCl9ZnVuY3Rpb24gZihiLGMsZCl7dmFyIGUsZj1bXTtmb3IoZSBpbiBiKWYucHVzaChlKTtmb3IoZSBpbiBjKWYuaW5kZXhPZihlKTwwJiZmLnB1c2goZSk7cmV0dXJuIGI9Zi5tYXAoZnVuY3Rpb24oYSl7cmV0dXJuIGJbYV18fDB9KSxjPWYubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBjW2FdfHwwfSksW2IsYyxmdW5jdGlvbihiKXt2YXIgYz1iLm1hcChmdW5jdGlvbihjLGUpe3JldHVybiAxPT1iLmxlbmd0aCYmZCYmKGM9TWF0aC5tYXgoYywwKSksYS5udW1iZXJUb1N0cmluZyhjKStmW2VdfSkuam9pbihcIiArIFwiKTtyZXR1cm4gYi5sZW5ndGg+MT9cImNhbGMoXCIrYytcIilcIjpjfV19dmFyIGc9XCJweHxlbXxleHxjaHxyZW18dnd8dmh8dm1pbnx2bWF4fGNtfG1tfGlufHB0fHBjXCIsaD1kLmJpbmQobnVsbCxuZXcgUmVnRXhwKGcsXCJnXCIpKSxpPWQuYmluZChudWxsLG5ldyBSZWdFeHAoZytcInwlXCIsXCJnXCIpKSxqPWQuYmluZChudWxsLC9kZWd8cmFkfGdyYWR8dHVybi9nKTthLnBhcnNlTGVuZ3RoPWgsYS5wYXJzZUxlbmd0aE9yUGVyY2VudD1pLGEuY29uc3VtZUxlbmd0aE9yUGVyY2VudD1hLmNvbnN1bWVQYXJlbnRoZXNpc2VkLmJpbmQobnVsbCxpKSxhLnBhcnNlQW5nbGU9aixhLm1lcmdlRGltZW5zaW9ucz1mO3ZhciBrPWEuY29uc3VtZVBhcmVudGhlc2lzZWQuYmluZChudWxsLGgpLGw9YS5jb25zdW1lUmVwZWF0ZWQuYmluZCh2b2lkIDAsaywvXi8pLG09YS5jb25zdW1lUmVwZWF0ZWQuYmluZCh2b2lkIDAsbCwvXiwvKTthLmNvbnN1bWVTaXplUGFpckxpc3Q9bTt2YXIgbj1mdW5jdGlvbihhKXt2YXIgYj1tKGEpO2lmKGImJlwiXCI9PWJbMV0pcmV0dXJuIGJbMF19LG89YS5tZXJnZU5lc3RlZFJlcGVhdGVkLmJpbmQodm9pZCAwLGUsXCIgXCIpLHA9YS5tZXJnZU5lc3RlZFJlcGVhdGVkLmJpbmQodm9pZCAwLG8sXCIsXCIpO2EubWVyZ2VOb25OZWdhdGl2ZVNpemVQYWlyPW8sYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihuLHAsW1wiYmFja2dyb3VuZC1zaXplXCJdKSxhLmFkZFByb3BlcnRpZXNIYW5kbGVyKGksZSxbXCJib3JkZXItYm90dG9tLXdpZHRoXCIsXCJib3JkZXItaW1hZ2Utd2lkdGhcIixcImJvcmRlci1sZWZ0LXdpZHRoXCIsXCJib3JkZXItcmlnaHQtd2lkdGhcIixcImJvcmRlci10b3Atd2lkdGhcIixcImZsZXgtYmFzaXNcIixcImZvbnQtc2l6ZVwiLFwiaGVpZ2h0XCIsXCJsaW5lLWhlaWdodFwiLFwibWF4LWhlaWdodFwiLFwibWF4LXdpZHRoXCIsXCJvdXRsaW5lLXdpZHRoXCIsXCJ3aWR0aFwiXSksYS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihpLGYsW1wiYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1c1wiLFwiYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXNcIixcImJvcmRlci10b3AtbGVmdC1yYWRpdXNcIixcImJvcmRlci10b3AtcmlnaHQtcmFkaXVzXCIsXCJib3R0b21cIixcImxlZnRcIixcImxldHRlci1zcGFjaW5nXCIsXCJtYXJnaW4tYm90dG9tXCIsXCJtYXJnaW4tbGVmdFwiLFwibWFyZ2luLXJpZ2h0XCIsXCJtYXJnaW4tdG9wXCIsXCJtaW4taGVpZ2h0XCIsXCJtaW4td2lkdGhcIixcIm91dGxpbmUtb2Zmc2V0XCIsXCJwYWRkaW5nLWJvdHRvbVwiLFwicGFkZGluZy1sZWZ0XCIsXCJwYWRkaW5nLXJpZ2h0XCIsXCJwYWRkaW5nLXRvcFwiLFwicGVyc3BlY3RpdmVcIixcInJpZ2h0XCIsXCJzaGFwZS1tYXJnaW5cIixcInN0cm9rZS1kYXNob2Zmc2V0XCIsXCJ0ZXh0LWluZGVudFwiLFwidG9wXCIsXCJ2ZXJ0aWNhbC1hbGlnblwiLFwid29yZC1zcGFjaW5nXCJdKX0oZCksZnVuY3Rpb24oYSxiKXtmdW5jdGlvbiBjKGIpe3JldHVybiBhLmNvbnN1bWVMZW5ndGhPclBlcmNlbnQoYil8fGEuY29uc3VtZVRva2VuKC9eYXV0by8sYil9ZnVuY3Rpb24gZChiKXt2YXIgZD1hLmNvbnN1bWVMaXN0KFthLmlnbm9yZShhLmNvbnN1bWVUb2tlbi5iaW5kKG51bGwsL15yZWN0LykpLGEuaWdub3JlKGEuY29uc3VtZVRva2VuLmJpbmQobnVsbCwvXlxcKC8pKSxhLmNvbnN1bWVSZXBlYXRlZC5iaW5kKG51bGwsYywvXiwvKSxhLmlnbm9yZShhLmNvbnN1bWVUb2tlbi5iaW5kKG51bGwsL15cXCkvKSldLGIpO2lmKGQmJjQ9PWRbMF0ubGVuZ3RoKXJldHVybiBkWzBdfWZ1bmN0aW9uIGUoYixjKXtyZXR1cm5cImF1dG9cIj09Ynx8XCJhdXRvXCI9PWM/WyEwLCExLGZ1bmN0aW9uKGQpe3ZhciBlPWQ/YjpjO2lmKFwiYXV0b1wiPT1lKXJldHVyblwiYXV0b1wiO3ZhciBmPWEubWVyZ2VEaW1lbnNpb25zKGUsZSk7cmV0dXJuIGZbMl0oZlswXSl9XTphLm1lcmdlRGltZW5zaW9ucyhiLGMpfWZ1bmN0aW9uIGYoYSl7cmV0dXJuXCJyZWN0KFwiK2ErXCIpXCJ9dmFyIGc9YS5tZXJnZVdyYXBwZWROZXN0ZWRSZXBlYXRlZC5iaW5kKG51bGwsZixlLFwiLCBcIik7YS5wYXJzZUJveD1kLGEubWVyZ2VCb3hlcz1nLGEuYWRkUHJvcGVydGllc0hhbmRsZXIoZCxnLFtcImNsaXBcIl0pfShkKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSl7cmV0dXJuIGZ1bmN0aW9uKGIpe3ZhciBjPTA7cmV0dXJuIGEubWFwKGZ1bmN0aW9uKGEpe3JldHVybiBhPT09az9iW2MrK106YX0pfX1mdW5jdGlvbiBkKGEpe3JldHVybiBhfWZ1bmN0aW9uIGUoYil7aWYoXCJub25lXCI9PShiPWIudG9Mb3dlckNhc2UoKS50cmltKCkpKXJldHVybltdO2Zvcih2YXIgYyxkPS9cXHMqKFxcdyspXFwoKFteKV0qKVxcKS9nLGU9W10sZj0wO2M9ZC5leGVjKGIpOyl7aWYoYy5pbmRleCE9ZilyZXR1cm47Zj1jLmluZGV4K2NbMF0ubGVuZ3RoO3ZhciBnPWNbMV0saD1uW2ddO2lmKCFoKXJldHVybjt2YXIgaT1jWzJdLnNwbGl0KFwiLFwiKSxqPWhbMF07aWYoai5sZW5ndGg8aS5sZW5ndGgpcmV0dXJuO2Zvcih2YXIgaz1bXSxvPTA7bzxqLmxlbmd0aDtvKyspe3ZhciBwLHE9aVtvXSxyPWpbb107aWYodm9pZCAwPT09KHA9cT97QTpmdW5jdGlvbihiKXtyZXR1cm5cIjBcIj09Yi50cmltKCk/bTphLnBhcnNlQW5nbGUoYil9LE46YS5wYXJzZU51bWJlcixUOmEucGFyc2VMZW5ndGhPclBlcmNlbnQsTDphLnBhcnNlTGVuZ3RofVtyLnRvVXBwZXJDYXNlKCldKHEpOnthOm0sbjprWzBdLHQ6bH1bcl0pKXJldHVybjtrLnB1c2gocCl9aWYoZS5wdXNoKHt0OmcsZDprfSksZC5sYXN0SW5kZXg9PWIubGVuZ3RoKXJldHVybiBlfX1mdW5jdGlvbiBmKGEpe3JldHVybiBhLnRvRml4ZWQoNikucmVwbGFjZShcIi4wMDAwMDBcIixcIlwiKX1mdW5jdGlvbiBnKGIsYyl7aWYoYi5kZWNvbXBvc2l0aW9uUGFpciE9PWMpe2IuZGVjb21wb3NpdGlvblBhaXI9Yzt2YXIgZD1hLm1ha2VNYXRyaXhEZWNvbXBvc2l0aW9uKGIpfWlmKGMuZGVjb21wb3NpdGlvblBhaXIhPT1iKXtjLmRlY29tcG9zaXRpb25QYWlyPWI7dmFyIGU9YS5tYWtlTWF0cml4RGVjb21wb3NpdGlvbihjKX1yZXR1cm4gbnVsbD09ZFswXXx8bnVsbD09ZVswXT9bWyExXSxbITBdLGZ1bmN0aW9uKGEpe3JldHVybiBhP2NbMF0uZDpiWzBdLmR9XTooZFswXS5wdXNoKDApLGVbMF0ucHVzaCgxKSxbZCxlLGZ1bmN0aW9uKGIpe3ZhciBjPWEucXVhdChkWzBdWzNdLGVbMF1bM10sYls1XSk7cmV0dXJuIGEuY29tcG9zZU1hdHJpeChiWzBdLGJbMV0sYlsyXSxjLGJbNF0pLm1hcChmKS5qb2luKFwiLFwiKX1dKX1mdW5jdGlvbiBoKGEpe3JldHVybiBhLnJlcGxhY2UoL1t4eV0vLFwiXCIpfWZ1bmN0aW9uIGkoYSl7cmV0dXJuIGEucmVwbGFjZSgvKHh8eXx6fDNkKT8kLyxcIjNkXCIpfWZ1bmN0aW9uIGooYixjKXt2YXIgZD1hLm1ha2VNYXRyaXhEZWNvbXBvc2l0aW9uJiYhMCxlPSExO2lmKCFiLmxlbmd0aHx8IWMubGVuZ3RoKXtiLmxlbmd0aHx8KGU9ITAsYj1jLGM9W10pO2Zvcih2YXIgZj0wO2Y8Yi5sZW5ndGg7ZisrKXt2YXIgaj1iW2ZdLnQsaz1iW2ZdLmQsbD1cInNjYWxlXCI9PWouc3Vic3RyKDAsNSk/MTowO2MucHVzaCh7dDpqLGQ6ay5tYXAoZnVuY3Rpb24oYSl7aWYoXCJudW1iZXJcIj09dHlwZW9mIGEpcmV0dXJuIGw7dmFyIGI9e307Zm9yKHZhciBjIGluIGEpYltjXT1sO3JldHVybiBifSl9KX19dmFyIG09ZnVuY3Rpb24oYSxiKXtyZXR1cm5cInBlcnNwZWN0aXZlXCI9PWEmJlwicGVyc3BlY3RpdmVcIj09Ynx8KFwibWF0cml4XCI9PWF8fFwibWF0cml4M2RcIj09YSkmJihcIm1hdHJpeFwiPT1ifHxcIm1hdHJpeDNkXCI9PWIpfSxvPVtdLHA9W10scT1bXTtpZihiLmxlbmd0aCE9Yy5sZW5ndGgpe2lmKCFkKXJldHVybjt2YXIgcj1nKGIsYyk7bz1bclswXV0scD1bclsxXV0scT1bW1wibWF0cml4XCIsW3JbMl1dXV19ZWxzZSBmb3IodmFyIGY9MDtmPGIubGVuZ3RoO2YrKyl7dmFyIGoscz1iW2ZdLnQsdD1jW2ZdLnQsdT1iW2ZdLmQsdj1jW2ZdLmQsdz1uW3NdLHg9blt0XTtpZihtKHMsdCkpe2lmKCFkKXJldHVybjt2YXIgcj1nKFtiW2ZdXSxbY1tmXV0pO28ucHVzaChyWzBdKSxwLnB1c2goclsxXSkscS5wdXNoKFtcIm1hdHJpeFwiLFtyWzJdXV0pfWVsc2V7aWYocz09dClqPXM7ZWxzZSBpZih3WzJdJiZ4WzJdJiZoKHMpPT1oKHQpKWo9aChzKSx1PXdbMl0odSksdj14WzJdKHYpO2Vsc2V7aWYoIXdbMV18fCF4WzFdfHxpKHMpIT1pKHQpKXtpZighZClyZXR1cm47dmFyIHI9ZyhiLGMpO289W3JbMF1dLHA9W3JbMV1dLHE9W1tcIm1hdHJpeFwiLFtyWzJdXV1dO2JyZWFrfWo9aShzKSx1PXdbMV0odSksdj14WzFdKHYpfWZvcih2YXIgeT1bXSx6PVtdLEE9W10sQj0wO0I8dS5sZW5ndGg7QisrKXt2YXIgQz1cIm51bWJlclwiPT10eXBlb2YgdVtCXT9hLm1lcmdlTnVtYmVyczphLm1lcmdlRGltZW5zaW9ucyxyPUModVtCXSx2W0JdKTt5W0JdPXJbMF0seltCXT1yWzFdLEEucHVzaChyWzJdKX1vLnB1c2goeSkscC5wdXNoKHopLHEucHVzaChbaixBXSl9fWlmKGUpe3ZhciBEPW87bz1wLHA9RH1yZXR1cm5bbyxwLGZ1bmN0aW9uKGEpe3JldHVybiBhLm1hcChmdW5jdGlvbihhLGIpe3ZhciBjPWEubWFwKGZ1bmN0aW9uKGEsYyl7cmV0dXJuIHFbYl1bMV1bY10oYSl9KS5qb2luKFwiLFwiKTtyZXR1cm5cIm1hdHJpeFwiPT1xW2JdWzBdJiYxNj09Yy5zcGxpdChcIixcIikubGVuZ3RoJiYocVtiXVswXT1cIm1hdHJpeDNkXCIpLHFbYl1bMF0rXCIoXCIrYytcIilcIn0pLmpvaW4oXCIgXCIpfV19dmFyIGs9bnVsbCxsPXtweDowfSxtPXtkZWc6MH0sbj17bWF0cml4OltcIk5OTk5OTlwiLFtrLGssMCwwLGssaywwLDAsMCwwLDEsMCxrLGssMCwxXSxkXSxtYXRyaXgzZDpbXCJOTk5OTk5OTk5OTk5OTk5OXCIsZF0scm90YXRlOltcIkFcIl0scm90YXRleDpbXCJBXCJdLHJvdGF0ZXk6W1wiQVwiXSxyb3RhdGV6OltcIkFcIl0scm90YXRlM2Q6W1wiTk5OQVwiXSxwZXJzcGVjdGl2ZTpbXCJMXCJdLHNjYWxlOltcIk5uXCIsYyhbayxrLDFdKSxkXSxzY2FsZXg6W1wiTlwiLGMoW2ssMSwxXSksYyhbaywxXSldLHNjYWxleTpbXCJOXCIsYyhbMSxrLDFdKSxjKFsxLGtdKV0sc2NhbGV6OltcIk5cIixjKFsxLDEsa10pXSxzY2FsZTNkOltcIk5OTlwiLGRdLHNrZXc6W1wiQWFcIixudWxsLGRdLHNrZXd4OltcIkFcIixudWxsLGMoW2ssbV0pXSxza2V3eTpbXCJBXCIsbnVsbCxjKFttLGtdKV0sdHJhbnNsYXRlOltcIlR0XCIsYyhbayxrLGxdKSxkXSx0cmFuc2xhdGV4OltcIlRcIixjKFtrLGwsbF0pLGMoW2ssbF0pXSx0cmFuc2xhdGV5OltcIlRcIixjKFtsLGssbF0pLGMoW2wsa10pXSx0cmFuc2xhdGV6OltcIkxcIixjKFtsLGwsa10pXSx0cmFuc2xhdGUzZDpbXCJUVExcIixkXX07YS5hZGRQcm9wZXJ0aWVzSGFuZGxlcihlLGosW1widHJhbnNmb3JtXCJdKSxhLnRyYW5zZm9ybVRvU3ZnTWF0cml4PWZ1bmN0aW9uKGIpe3ZhciBjPWEudHJhbnNmb3JtTGlzdFRvTWF0cml4KGUoYikpO3JldHVyblwibWF0cml4KFwiK2YoY1swXSkrXCIgXCIrZihjWzFdKStcIiBcIitmKGNbNF0pK1wiIFwiK2YoY1s1XSkrXCIgXCIrZihjWzEyXSkrXCIgXCIrZihjWzEzXSkrXCIpXCJ9fShkKSxmdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoYSxiKXtiLmNvbmNhdChbYV0pLmZvckVhY2goZnVuY3Rpb24oYil7YiBpbiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUmJihkW2FdPWIpLGVbYl09YX0pfXZhciBkPXt9LGU9e307YyhcInRyYW5zZm9ybVwiLFtcIndlYmtpdFRyYW5zZm9ybVwiLFwibXNUcmFuc2Zvcm1cIl0pLGMoXCJ0cmFuc2Zvcm1PcmlnaW5cIixbXCJ3ZWJraXRUcmFuc2Zvcm1PcmlnaW5cIl0pLGMoXCJwZXJzcGVjdGl2ZVwiLFtcIndlYmtpdFBlcnNwZWN0aXZlXCJdKSxjKFwicGVyc3BlY3RpdmVPcmlnaW5cIixbXCJ3ZWJraXRQZXJzcGVjdGl2ZU9yaWdpblwiXSksYS5wcm9wZXJ0eU5hbWU9ZnVuY3Rpb24oYSl7cmV0dXJuIGRbYV18fGF9LGEudW5wcmVmaXhlZFByb3BlcnR5TmFtZT1mdW5jdGlvbihhKXtyZXR1cm4gZVthXXx8YX19KGQpfSgpLGZ1bmN0aW9uKCl7aWYodm9pZCAwPT09ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKS5hbmltYXRlKFtdKS5vbmNhbmNlbCl7dmFyIGE7aWYod2luZG93LnBlcmZvcm1hbmNlJiZwZXJmb3JtYW5jZS5ub3cpdmFyIGE9ZnVuY3Rpb24oKXtyZXR1cm4gcGVyZm9ybWFuY2Uubm93KCl9O2Vsc2UgdmFyIGE9ZnVuY3Rpb24oKXtyZXR1cm4gRGF0ZS5ub3coKX07dmFyIGI9ZnVuY3Rpb24oYSxiLGMpe3RoaXMudGFyZ2V0PWEsdGhpcy5jdXJyZW50VGltZT1iLHRoaXMudGltZWxpbmVUaW1lPWMsdGhpcy50eXBlPVwiY2FuY2VsXCIsdGhpcy5idWJibGVzPSExLHRoaXMuY2FuY2VsYWJsZT0hMSx0aGlzLmN1cnJlbnRUYXJnZXQ9YSx0aGlzLmRlZmF1bHRQcmV2ZW50ZWQ9ITEsdGhpcy5ldmVudFBoYXNlPUV2ZW50LkFUX1RBUkdFVCx0aGlzLnRpbWVTdGFtcD1EYXRlLm5vdygpfSxjPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hbmltYXRlO3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hbmltYXRlPWZ1bmN0aW9uKGQsZSl7dmFyIGY9Yy5jYWxsKHRoaXMsZCxlKTtmLl9jYW5jZWxIYW5kbGVycz1bXSxmLm9uY2FuY2VsPW51bGw7dmFyIGc9Zi5jYW5jZWw7Zi5jYW5jZWw9ZnVuY3Rpb24oKXtnLmNhbGwodGhpcyk7dmFyIGM9bmV3IGIodGhpcyxudWxsLGEoKSksZD10aGlzLl9jYW5jZWxIYW5kbGVycy5jb25jYXQodGhpcy5vbmNhbmNlbD9bdGhpcy5vbmNhbmNlbF06W10pO3NldFRpbWVvdXQoZnVuY3Rpb24oKXtkLmZvckVhY2goZnVuY3Rpb24oYSl7YS5jYWxsKGMudGFyZ2V0LGMpfSl9LDApfTt2YXIgaD1mLmFkZEV2ZW50TGlzdGVuZXI7Zi5hZGRFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYil7XCJmdW5jdGlvblwiPT10eXBlb2YgYiYmXCJjYW5jZWxcIj09YT90aGlzLl9jYW5jZWxIYW5kbGVycy5wdXNoKGIpOmguY2FsbCh0aGlzLGEsYil9O3ZhciBpPWYucmVtb3ZlRXZlbnRMaXN0ZW5lcjtyZXR1cm4gZi5yZW1vdmVFdmVudExpc3RlbmVyPWZ1bmN0aW9uKGEsYil7aWYoXCJjYW5jZWxcIj09YSl7dmFyIGM9dGhpcy5fY2FuY2VsSGFuZGxlcnMuaW5kZXhPZihiKTtjPj0wJiZ0aGlzLl9jYW5jZWxIYW5kbGVycy5zcGxpY2UoYywxKX1lbHNlIGkuY2FsbCh0aGlzLGEsYil9LGZ9fX0oKSxmdW5jdGlvbihhKXt2YXIgYj1kb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsYz1udWxsLGQ9ITE7dHJ5e3ZhciBlPWdldENvbXB1dGVkU3R5bGUoYikuZ2V0UHJvcGVydHlWYWx1ZShcIm9wYWNpdHlcIiksZj1cIjBcIj09ZT9cIjFcIjpcIjBcIjtjPWIuYW5pbWF0ZSh7b3BhY2l0eTpbZixmXX0se2R1cmF0aW9uOjF9KSxjLmN1cnJlbnRUaW1lPTAsZD1nZXRDb21wdXRlZFN0eWxlKGIpLmdldFByb3BlcnR5VmFsdWUoXCJvcGFjaXR5XCIpPT1mfWNhdGNoKGEpe31maW5hbGx5e2MmJmMuY2FuY2VsKCl9aWYoIWQpe3ZhciBnPXdpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hbmltYXRlO3dpbmRvdy5FbGVtZW50LnByb3RvdHlwZS5hbmltYXRlPWZ1bmN0aW9uKGIsYyl7cmV0dXJuIHdpbmRvdy5TeW1ib2wmJlN5bWJvbC5pdGVyYXRvciYmQXJyYXkucHJvdG90eXBlLmZyb20mJmJbU3ltYm9sLml0ZXJhdG9yXSYmKGI9QXJyYXkuZnJvbShiKSksQXJyYXkuaXNBcnJheShiKXx8bnVsbD09PWJ8fChiPWEuY29udmVydFRvQXJyYXlGb3JtKGIpKSxnLmNhbGwodGhpcyxiLGMpfX19KGMpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3ZhciBjPWIudGltZWxpbmU7Yy5jdXJyZW50VGltZT1hLGMuX2Rpc2NhcmRBbmltYXRpb25zKCksMD09Yy5fYW5pbWF0aW9ucy5sZW5ndGg/Zj0hMTpyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZCl9dmFyIGU9d2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZTt3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lPWZ1bmN0aW9uKGEpe3JldHVybiBlKGZ1bmN0aW9uKGMpe2IudGltZWxpbmUuX3VwZGF0ZUFuaW1hdGlvbnNQcm9taXNlcygpLGEoYyksYi50aW1lbGluZS5fdXBkYXRlQW5pbWF0aW9uc1Byb21pc2VzKCl9KX0sYi5BbmltYXRpb25UaW1lbGluZT1mdW5jdGlvbigpe3RoaXMuX2FuaW1hdGlvbnM9W10sdGhpcy5jdXJyZW50VGltZT12b2lkIDB9LGIuQW5pbWF0aW9uVGltZWxpbmUucHJvdG90eXBlPXtnZXRBbmltYXRpb25zOmZ1bmN0aW9uKCl7cmV0dXJuIHRoaXMuX2Rpc2NhcmRBbmltYXRpb25zKCksdGhpcy5fYW5pbWF0aW9ucy5zbGljZSgpfSxfdXBkYXRlQW5pbWF0aW9uc1Byb21pc2VzOmZ1bmN0aW9uKCl7Yi5hbmltYXRpb25zV2l0aFByb21pc2VzPWIuYW5pbWF0aW9uc1dpdGhQcm9taXNlcy5maWx0ZXIoZnVuY3Rpb24oYSl7cmV0dXJuIGEuX3VwZGF0ZVByb21pc2VzKCl9KX0sX2Rpc2NhcmRBbmltYXRpb25zOmZ1bmN0aW9uKCl7dGhpcy5fdXBkYXRlQW5pbWF0aW9uc1Byb21pc2VzKCksdGhpcy5fYW5pbWF0aW9ucz10aGlzLl9hbmltYXRpb25zLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm5cImZpbmlzaGVkXCIhPWEucGxheVN0YXRlJiZcImlkbGVcIiE9YS5wbGF5U3RhdGV9KX0sX3BsYXk6ZnVuY3Rpb24oYSl7dmFyIGM9bmV3IGIuQW5pbWF0aW9uKGEsdGhpcyk7cmV0dXJuIHRoaXMuX2FuaW1hdGlvbnMucHVzaChjKSxiLnJlc3RhcnRXZWJBbmltYXRpb25zTmV4dFRpY2soKSxjLl91cGRhdGVQcm9taXNlcygpLGMuX2FuaW1hdGlvbi5wbGF5KCksYy5fdXBkYXRlUHJvbWlzZXMoKSxjfSxwbGF5OmZ1bmN0aW9uKGEpe3JldHVybiBhJiZhLnJlbW92ZSgpLHRoaXMuX3BsYXkoYSl9fTt2YXIgZj0hMTtiLnJlc3RhcnRXZWJBbmltYXRpb25zTmV4dFRpY2s9ZnVuY3Rpb24oKXtmfHwoZj0hMCxyZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZCkpfTt2YXIgZz1uZXcgYi5BbmltYXRpb25UaW1lbGluZTtiLnRpbWVsaW5lPWc7dHJ5e09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuZG9jdW1lbnQsXCJ0aW1lbGluZVwiLHtjb25maWd1cmFibGU6ITAsZ2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGd9fSl9Y2F0Y2goYSl7fXRyeXt3aW5kb3cuZG9jdW1lbnQudGltZWxpbmU9Z31jYXRjaChhKXt9fSgwLGUpLGZ1bmN0aW9uKGEsYixjKXtiLmFuaW1hdGlvbnNXaXRoUHJvbWlzZXM9W10sYi5BbmltYXRpb249ZnVuY3Rpb24oYixjKXtpZih0aGlzLmlkPVwiXCIsYiYmYi5faWQmJih0aGlzLmlkPWIuX2lkKSx0aGlzLmVmZmVjdD1iLGImJihiLl9hbmltYXRpb249dGhpcyksIWMpdGhyb3cgbmV3IEVycm9yKFwiQW5pbWF0aW9uIHdpdGggbnVsbCB0aW1lbGluZSBpcyBub3Qgc3VwcG9ydGVkXCIpO3RoaXMuX3RpbWVsaW5lPWMsdGhpcy5fc2VxdWVuY2VOdW1iZXI9YS5zZXF1ZW5jZU51bWJlcisrLHRoaXMuX2hvbGRUaW1lPTAsdGhpcy5fcGF1c2VkPSExLHRoaXMuX2lzR3JvdXA9ITEsdGhpcy5fYW5pbWF0aW9uPW51bGwsdGhpcy5fY2hpbGRBbmltYXRpb25zPVtdLHRoaXMuX2NhbGxiYWNrPW51bGwsdGhpcy5fb2xkUGxheVN0YXRlPVwiaWRsZVwiLHRoaXMuX3JlYnVpbGRVbmRlcmx5aW5nQW5pbWF0aW9uKCksdGhpcy5fYW5pbWF0aW9uLmNhbmNlbCgpLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LGIuQW5pbWF0aW9uLnByb3RvdHlwZT17X3VwZGF0ZVByb21pc2VzOmZ1bmN0aW9uKCl7dmFyIGE9dGhpcy5fb2xkUGxheVN0YXRlLGI9dGhpcy5wbGF5U3RhdGU7cmV0dXJuIHRoaXMuX3JlYWR5UHJvbWlzZSYmYiE9PWEmJihcImlkbGVcIj09Yj8odGhpcy5fcmVqZWN0UmVhZHlQcm9taXNlKCksdGhpcy5fcmVhZHlQcm9taXNlPXZvaWQgMCk6XCJwZW5kaW5nXCI9PWE/dGhpcy5fcmVzb2x2ZVJlYWR5UHJvbWlzZSgpOlwicGVuZGluZ1wiPT1iJiYodGhpcy5fcmVhZHlQcm9taXNlPXZvaWQgMCkpLHRoaXMuX2ZpbmlzaGVkUHJvbWlzZSYmYiE9PWEmJihcImlkbGVcIj09Yj8odGhpcy5fcmVqZWN0RmluaXNoZWRQcm9taXNlKCksdGhpcy5fZmluaXNoZWRQcm9taXNlPXZvaWQgMCk6XCJmaW5pc2hlZFwiPT1iP3RoaXMuX3Jlc29sdmVGaW5pc2hlZFByb21pc2UoKTpcImZpbmlzaGVkXCI9PWEmJih0aGlzLl9maW5pc2hlZFByb21pc2U9dm9pZCAwKSksdGhpcy5fb2xkUGxheVN0YXRlPXRoaXMucGxheVN0YXRlLHRoaXMuX3JlYWR5UHJvbWlzZXx8dGhpcy5fZmluaXNoZWRQcm9taXNlfSxfcmVidWlsZFVuZGVybHlpbmdBbmltYXRpb246ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVQcm9taXNlcygpO3ZhciBhLGMsZCxlLGY9ISF0aGlzLl9hbmltYXRpb247ZiYmKGE9dGhpcy5wbGF5YmFja1JhdGUsYz10aGlzLl9wYXVzZWQsZD10aGlzLnN0YXJ0VGltZSxlPXRoaXMuY3VycmVudFRpbWUsdGhpcy5fYW5pbWF0aW9uLmNhbmNlbCgpLHRoaXMuX2FuaW1hdGlvbi5fd3JhcHBlcj1udWxsLHRoaXMuX2FuaW1hdGlvbj1udWxsKSwoIXRoaXMuZWZmZWN0fHx0aGlzLmVmZmVjdCBpbnN0YW5jZW9mIHdpbmRvdy5LZXlmcmFtZUVmZmVjdCkmJih0aGlzLl9hbmltYXRpb249Yi5uZXdVbmRlcmx5aW5nQW5pbWF0aW9uRm9yS2V5ZnJhbWVFZmZlY3QodGhpcy5lZmZlY3QpLGIuYmluZEFuaW1hdGlvbkZvcktleWZyYW1lRWZmZWN0KHRoaXMpKSwodGhpcy5lZmZlY3QgaW5zdGFuY2VvZiB3aW5kb3cuU2VxdWVuY2VFZmZlY3R8fHRoaXMuZWZmZWN0IGluc3RhbmNlb2Ygd2luZG93Lkdyb3VwRWZmZWN0KSYmKHRoaXMuX2FuaW1hdGlvbj1iLm5ld1VuZGVybHlpbmdBbmltYXRpb25Gb3JHcm91cCh0aGlzLmVmZmVjdCksYi5iaW5kQW5pbWF0aW9uRm9yR3JvdXAodGhpcykpLHRoaXMuZWZmZWN0JiZ0aGlzLmVmZmVjdC5fb25zYW1wbGUmJmIuYmluZEFuaW1hdGlvbkZvckN1c3RvbUVmZmVjdCh0aGlzKSxmJiYoMSE9YSYmKHRoaXMucGxheWJhY2tSYXRlPWEpLG51bGwhPT1kP3RoaXMuc3RhcnRUaW1lPWQ6bnVsbCE9PWU/dGhpcy5jdXJyZW50VGltZT1lOm51bGwhPT10aGlzLl9ob2xkVGltZSYmKHRoaXMuY3VycmVudFRpbWU9dGhpcy5faG9sZFRpbWUpLGMmJnRoaXMucGF1c2UoKSksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0sX3VwZGF0ZUNoaWxkcmVuOmZ1bmN0aW9uKCl7aWYodGhpcy5lZmZlY3QmJlwiaWRsZVwiIT10aGlzLnBsYXlTdGF0ZSl7dmFyIGE9dGhpcy5lZmZlY3QuX3RpbWluZy5kZWxheTt0aGlzLl9jaGlsZEFuaW1hdGlvbnMuZm9yRWFjaChmdW5jdGlvbihjKXt0aGlzLl9hcnJhbmdlQ2hpbGRyZW4oYyxhKSx0aGlzLmVmZmVjdCBpbnN0YW5jZW9mIHdpbmRvdy5TZXF1ZW5jZUVmZmVjdCYmKGErPWIuZ3JvdXBDaGlsZER1cmF0aW9uKGMuZWZmZWN0KSl9LmJpbmQodGhpcykpfX0sX3NldEV4dGVybmFsQW5pbWF0aW9uOmZ1bmN0aW9uKGEpe2lmKHRoaXMuZWZmZWN0JiZ0aGlzLl9pc0dyb3VwKWZvcih2YXIgYj0wO2I8dGhpcy5lZmZlY3QuY2hpbGRyZW4ubGVuZ3RoO2IrKyl0aGlzLmVmZmVjdC5jaGlsZHJlbltiXS5fYW5pbWF0aW9uPWEsdGhpcy5fY2hpbGRBbmltYXRpb25zW2JdLl9zZXRFeHRlcm5hbEFuaW1hdGlvbihhKX0sX2NvbnN0cnVjdENoaWxkQW5pbWF0aW9uczpmdW5jdGlvbigpe2lmKHRoaXMuZWZmZWN0JiZ0aGlzLl9pc0dyb3VwKXt2YXIgYT10aGlzLmVmZmVjdC5fdGltaW5nLmRlbGF5O3RoaXMuX3JlbW92ZUNoaWxkQW5pbWF0aW9ucygpLHRoaXMuZWZmZWN0LmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYyl7dmFyIGQ9Yi50aW1lbGluZS5fcGxheShjKTt0aGlzLl9jaGlsZEFuaW1hdGlvbnMucHVzaChkKSxkLnBsYXliYWNrUmF0ZT10aGlzLnBsYXliYWNrUmF0ZSx0aGlzLl9wYXVzZWQmJmQucGF1c2UoKSxjLl9hbmltYXRpb249dGhpcy5lZmZlY3QuX2FuaW1hdGlvbix0aGlzLl9hcnJhbmdlQ2hpbGRyZW4oZCxhKSx0aGlzLmVmZmVjdCBpbnN0YW5jZW9mIHdpbmRvdy5TZXF1ZW5jZUVmZmVjdCYmKGErPWIuZ3JvdXBDaGlsZER1cmF0aW9uKGMpKX0uYmluZCh0aGlzKSl9fSxfYXJyYW5nZUNoaWxkcmVuOmZ1bmN0aW9uKGEsYil7bnVsbD09PXRoaXMuc3RhcnRUaW1lP2EuY3VycmVudFRpbWU9dGhpcy5jdXJyZW50VGltZS1iL3RoaXMucGxheWJhY2tSYXRlOmEuc3RhcnRUaW1lIT09dGhpcy5zdGFydFRpbWUrYi90aGlzLnBsYXliYWNrUmF0ZSYmKGEuc3RhcnRUaW1lPXRoaXMuc3RhcnRUaW1lK2IvdGhpcy5wbGF5YmFja1JhdGUpfSxnZXQgdGltZWxpbmUoKXtyZXR1cm4gdGhpcy5fdGltZWxpbmV9LGdldCBwbGF5U3RhdGUoKXtyZXR1cm4gdGhpcy5fYW5pbWF0aW9uP3RoaXMuX2FuaW1hdGlvbi5wbGF5U3RhdGU6XCJpZGxlXCJ9LGdldCBmaW5pc2hlZCgpe3JldHVybiB3aW5kb3cuUHJvbWlzZT8odGhpcy5fZmluaXNoZWRQcm9taXNlfHwoLTE9PWIuYW5pbWF0aW9uc1dpdGhQcm9taXNlcy5pbmRleE9mKHRoaXMpJiZiLmFuaW1hdGlvbnNXaXRoUHJvbWlzZXMucHVzaCh0aGlzKSx0aGlzLl9maW5pc2hlZFByb21pc2U9bmV3IFByb21pc2UoZnVuY3Rpb24oYSxiKXt0aGlzLl9yZXNvbHZlRmluaXNoZWRQcm9taXNlPWZ1bmN0aW9uKCl7YSh0aGlzKX0sdGhpcy5fcmVqZWN0RmluaXNoZWRQcm9taXNlPWZ1bmN0aW9uKCl7Yih7dHlwZTpET01FeGNlcHRpb24uQUJPUlRfRVJSLG5hbWU6XCJBYm9ydEVycm9yXCJ9KX19LmJpbmQodGhpcykpLFwiZmluaXNoZWRcIj09dGhpcy5wbGF5U3RhdGUmJnRoaXMuX3Jlc29sdmVGaW5pc2hlZFByb21pc2UoKSksdGhpcy5fZmluaXNoZWRQcm9taXNlKTooY29uc29sZS53YXJuKFwiQW5pbWF0aW9uIFByb21pc2VzIHJlcXVpcmUgSmF2YVNjcmlwdCBQcm9taXNlIGNvbnN0cnVjdG9yXCIpLG51bGwpfSxnZXQgcmVhZHkoKXtyZXR1cm4gd2luZG93LlByb21pc2U/KHRoaXMuX3JlYWR5UHJvbWlzZXx8KC0xPT1iLmFuaW1hdGlvbnNXaXRoUHJvbWlzZXMuaW5kZXhPZih0aGlzKSYmYi5hbmltYXRpb25zV2l0aFByb21pc2VzLnB1c2godGhpcyksdGhpcy5fcmVhZHlQcm9taXNlPW5ldyBQcm9taXNlKGZ1bmN0aW9uKGEsYil7dGhpcy5fcmVzb2x2ZVJlYWR5UHJvbWlzZT1mdW5jdGlvbigpe2EodGhpcyl9LHRoaXMuX3JlamVjdFJlYWR5UHJvbWlzZT1mdW5jdGlvbigpe2Ioe3R5cGU6RE9NRXhjZXB0aW9uLkFCT1JUX0VSUixuYW1lOlwiQWJvcnRFcnJvclwifSl9fS5iaW5kKHRoaXMpKSxcInBlbmRpbmdcIiE9PXRoaXMucGxheVN0YXRlJiZ0aGlzLl9yZXNvbHZlUmVhZHlQcm9taXNlKCkpLHRoaXMuX3JlYWR5UHJvbWlzZSk6KGNvbnNvbGUud2FybihcIkFuaW1hdGlvbiBQcm9taXNlcyByZXF1aXJlIEphdmFTY3JpcHQgUHJvbWlzZSBjb25zdHJ1Y3RvclwiKSxudWxsKX0sZ2V0IG9uZmluaXNoKCl7cmV0dXJuIHRoaXMuX2FuaW1hdGlvbi5vbmZpbmlzaH0sc2V0IG9uZmluaXNoKGEpe3RoaXMuX2FuaW1hdGlvbi5vbmZpbmlzaD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2Z1bmN0aW9uKGIpe2IudGFyZ2V0PXRoaXMsYS5jYWxsKHRoaXMsYil9LmJpbmQodGhpcyk6YX0sZ2V0IG9uY2FuY2VsKCl7cmV0dXJuIHRoaXMuX2FuaW1hdGlvbi5vbmNhbmNlbH0sc2V0IG9uY2FuY2VsKGEpe3RoaXMuX2FuaW1hdGlvbi5vbmNhbmNlbD1cImZ1bmN0aW9uXCI9PXR5cGVvZiBhP2Z1bmN0aW9uKGIpe2IudGFyZ2V0PXRoaXMsYS5jYWxsKHRoaXMsYil9LmJpbmQodGhpcyk6YX0sZ2V0IGN1cnJlbnRUaW1lKCl7dGhpcy5fdXBkYXRlUHJvbWlzZXMoKTt2YXIgYT10aGlzLl9hbmltYXRpb24uY3VycmVudFRpbWU7cmV0dXJuIHRoaXMuX3VwZGF0ZVByb21pc2VzKCksYX0sc2V0IGN1cnJlbnRUaW1lKGEpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCksdGhpcy5fYW5pbWF0aW9uLmN1cnJlbnRUaW1lPWlzRmluaXRlKGEpP2E6TWF0aC5zaWduKGEpKk51bWJlci5NQVhfVkFMVUUsdGhpcy5fcmVnaXN0ZXIoKSx0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24oYixjKXtiLmN1cnJlbnRUaW1lPWEtY30pLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LGdldCBzdGFydFRpbWUoKXtyZXR1cm4gdGhpcy5fYW5pbWF0aW9uLnN0YXJ0VGltZX0sc2V0IHN0YXJ0VGltZShhKXt0aGlzLl91cGRhdGVQcm9taXNlcygpLHRoaXMuX2FuaW1hdGlvbi5zdGFydFRpbWU9aXNGaW5pdGUoYSk/YTpNYXRoLnNpZ24oYSkqTnVtYmVyLk1BWF9WQUxVRSx0aGlzLl9yZWdpc3RlcigpLHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbihiLGMpe2Iuc3RhcnRUaW1lPWErY30pLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LGdldCBwbGF5YmFja1JhdGUoKXtyZXR1cm4gdGhpcy5fYW5pbWF0aW9uLnBsYXliYWNrUmF0ZX0sc2V0IHBsYXliYWNrUmF0ZShhKXt0aGlzLl91cGRhdGVQcm9taXNlcygpO3ZhciBiPXRoaXMuY3VycmVudFRpbWU7dGhpcy5fYW5pbWF0aW9uLnBsYXliYWNrUmF0ZT1hLHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbihiKXtiLnBsYXliYWNrUmF0ZT1hfSksbnVsbCE9PWImJih0aGlzLmN1cnJlbnRUaW1lPWIpLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LHBsYXk6ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVQcm9taXNlcygpLHRoaXMuX3BhdXNlZD0hMSx0aGlzLl9hbmltYXRpb24ucGxheSgpLC0xPT10aGlzLl90aW1lbGluZS5fYW5pbWF0aW9ucy5pbmRleE9mKHRoaXMpJiZ0aGlzLl90aW1lbGluZS5fYW5pbWF0aW9ucy5wdXNoKHRoaXMpLHRoaXMuX3JlZ2lzdGVyKCksYi5hd2FpdFN0YXJ0VGltZSh0aGlzKSx0aGlzLl9mb3JFYWNoQ2hpbGQoZnVuY3Rpb24oYSl7dmFyIGI9YS5jdXJyZW50VGltZTthLnBsYXkoKSxhLmN1cnJlbnRUaW1lPWJ9KSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxwYXVzZTpmdW5jdGlvbigpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCksdGhpcy5jdXJyZW50VGltZSYmKHRoaXMuX2hvbGRUaW1lPXRoaXMuY3VycmVudFRpbWUpLHRoaXMuX2FuaW1hdGlvbi5wYXVzZSgpLHRoaXMuX3JlZ2lzdGVyKCksdGhpcy5fZm9yRWFjaENoaWxkKGZ1bmN0aW9uKGEpe2EucGF1c2UoKX0pLHRoaXMuX3BhdXNlZD0hMCx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxmaW5pc2g6ZnVuY3Rpb24oKXt0aGlzLl91cGRhdGVQcm9taXNlcygpLHRoaXMuX2FuaW1hdGlvbi5maW5pc2goKSx0aGlzLl9yZWdpc3RlcigpLHRoaXMuX3VwZGF0ZVByb21pc2VzKCl9LGNhbmNlbDpmdW5jdGlvbigpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCksdGhpcy5fYW5pbWF0aW9uLmNhbmNlbCgpLHRoaXMuX3JlZ2lzdGVyKCksdGhpcy5fcmVtb3ZlQ2hpbGRBbmltYXRpb25zKCksdGhpcy5fdXBkYXRlUHJvbWlzZXMoKX0scmV2ZXJzZTpmdW5jdGlvbigpe3RoaXMuX3VwZGF0ZVByb21pc2VzKCk7dmFyIGE9dGhpcy5jdXJyZW50VGltZTt0aGlzLl9hbmltYXRpb24ucmV2ZXJzZSgpLHRoaXMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbihhKXthLnJldmVyc2UoKX0pLG51bGwhPT1hJiYodGhpcy5jdXJyZW50VGltZT1hKSx0aGlzLl91cGRhdGVQcm9taXNlcygpfSxhZGRFdmVudExpc3RlbmVyOmZ1bmN0aW9uKGEsYil7dmFyIGM9YjtcImZ1bmN0aW9uXCI9PXR5cGVvZiBiJiYoYz1mdW5jdGlvbihhKXthLnRhcmdldD10aGlzLGIuY2FsbCh0aGlzLGEpfS5iaW5kKHRoaXMpLGIuX3dyYXBwZXI9YyksdGhpcy5fYW5pbWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoYSxjKX0scmVtb3ZlRXZlbnRMaXN0ZW5lcjpmdW5jdGlvbihhLGIpe3RoaXMuX2FuaW1hdGlvbi5yZW1vdmVFdmVudExpc3RlbmVyKGEsYiYmYi5fd3JhcHBlcnx8Yil9LF9yZW1vdmVDaGlsZEFuaW1hdGlvbnM6ZnVuY3Rpb24oKXtmb3IoO3RoaXMuX2NoaWxkQW5pbWF0aW9ucy5sZW5ndGg7KXRoaXMuX2NoaWxkQW5pbWF0aW9ucy5wb3AoKS5jYW5jZWwoKX0sX2ZvckVhY2hDaGlsZDpmdW5jdGlvbihiKXt2YXIgYz0wO2lmKHRoaXMuZWZmZWN0LmNoaWxkcmVuJiZ0aGlzLl9jaGlsZEFuaW1hdGlvbnMubGVuZ3RoPHRoaXMuZWZmZWN0LmNoaWxkcmVuLmxlbmd0aCYmdGhpcy5fY29uc3RydWN0Q2hpbGRBbmltYXRpb25zKCksdGhpcy5fY2hpbGRBbmltYXRpb25zLmZvckVhY2goZnVuY3Rpb24oYSl7Yi5jYWxsKHRoaXMsYSxjKSx0aGlzLmVmZmVjdCBpbnN0YW5jZW9mIHdpbmRvdy5TZXF1ZW5jZUVmZmVjdCYmKGMrPWEuZWZmZWN0LmFjdGl2ZUR1cmF0aW9uKX0uYmluZCh0aGlzKSksXCJwZW5kaW5nXCIhPXRoaXMucGxheVN0YXRlKXt2YXIgZD10aGlzLmVmZmVjdC5fdGltaW5nLGU9dGhpcy5jdXJyZW50VGltZTtudWxsIT09ZSYmKGU9YS5jYWxjdWxhdGVJdGVyYXRpb25Qcm9ncmVzcyhhLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uKGQpLGUsZCkpLChudWxsPT1lfHxpc05hTihlKSkmJnRoaXMuX3JlbW92ZUNoaWxkQW5pbWF0aW9ucygpfX19LHdpbmRvdy5BbmltYXRpb249Yi5BbmltYXRpb259KGMsZSksZnVuY3Rpb24oYSxiLGMpe2Z1bmN0aW9uIGQoYil7dGhpcy5fZnJhbWVzPWEubm9ybWFsaXplS2V5ZnJhbWVzKGIpfWZ1bmN0aW9uIGUoKXtmb3IodmFyIGE9ITE7aS5sZW5ndGg7KWkuc2hpZnQoKS5fdXBkYXRlQ2hpbGRyZW4oKSxhPSEwO3JldHVybiBhfXZhciBmPWZ1bmN0aW9uKGEpe2lmKGEuX2FuaW1hdGlvbj12b2lkIDAsYSBpbnN0YW5jZW9mIHdpbmRvdy5TZXF1ZW5jZUVmZmVjdHx8YSBpbnN0YW5jZW9mIHdpbmRvdy5Hcm91cEVmZmVjdClmb3IodmFyIGI9MDtiPGEuY2hpbGRyZW4ubGVuZ3RoO2IrKylmKGEuY2hpbGRyZW5bYl0pfTtiLnJlbW92ZU11bHRpPWZ1bmN0aW9uKGEpe2Zvcih2YXIgYj1bXSxjPTA7YzxhLmxlbmd0aDtjKyspe3ZhciBkPWFbY107ZC5fcGFyZW50PygtMT09Yi5pbmRleE9mKGQuX3BhcmVudCkmJmIucHVzaChkLl9wYXJlbnQpLGQuX3BhcmVudC5jaGlsZHJlbi5zcGxpY2UoZC5fcGFyZW50LmNoaWxkcmVuLmluZGV4T2YoZCksMSksZC5fcGFyZW50PW51bGwsZihkKSk6ZC5fYW5pbWF0aW9uJiZkLl9hbmltYXRpb24uZWZmZWN0PT1kJiYoZC5fYW5pbWF0aW9uLmNhbmNlbCgpLGQuX2FuaW1hdGlvbi5lZmZlY3Q9bmV3IEtleWZyYW1lRWZmZWN0KG51bGwsW10pLGQuX2FuaW1hdGlvbi5fY2FsbGJhY2smJihkLl9hbmltYXRpb24uX2NhbGxiYWNrLl9hbmltYXRpb249bnVsbCksZC5fYW5pbWF0aW9uLl9yZWJ1aWxkVW5kZXJseWluZ0FuaW1hdGlvbigpLGYoZCkpfWZvcihjPTA7YzxiLmxlbmd0aDtjKyspYltjXS5fcmVidWlsZCgpfSxiLktleWZyYW1lRWZmZWN0PWZ1bmN0aW9uKGIsYyxlLGYpe3JldHVybiB0aGlzLnRhcmdldD1iLHRoaXMuX3BhcmVudD1udWxsLGU9YS5udW1lcmljVGltaW5nVG9PYmplY3QoZSksdGhpcy5fdGltaW5nSW5wdXQ9YS5jbG9uZVRpbWluZ0lucHV0KGUpLHRoaXMuX3RpbWluZz1hLm5vcm1hbGl6ZVRpbWluZ0lucHV0KGUpLHRoaXMudGltaW5nPWEubWFrZVRpbWluZyhlLCExLHRoaXMpLHRoaXMudGltaW5nLl9lZmZlY3Q9dGhpcyxcImZ1bmN0aW9uXCI9PXR5cGVvZiBjPyhhLmRlcHJlY2F0ZWQoXCJDdXN0b20gS2V5ZnJhbWVFZmZlY3RcIixcIjIwMTUtMDYtMjJcIixcIlVzZSBLZXlmcmFtZUVmZmVjdC5vbnNhbXBsZSBpbnN0ZWFkLlwiKSx0aGlzLl9ub3JtYWxpemVkS2V5ZnJhbWVzPWMpOnRoaXMuX25vcm1hbGl6ZWRLZXlmcmFtZXM9bmV3IGQoYyksdGhpcy5fa2V5ZnJhbWVzPWMsdGhpcy5hY3RpdmVEdXJhdGlvbj1hLmNhbGN1bGF0ZUFjdGl2ZUR1cmF0aW9uKHRoaXMuX3RpbWluZyksdGhpcy5faWQ9Zix0aGlzfSxiLktleWZyYW1lRWZmZWN0LnByb3RvdHlwZT17Z2V0RnJhbWVzOmZ1bmN0aW9uKCl7cmV0dXJuXCJmdW5jdGlvblwiPT10eXBlb2YgdGhpcy5fbm9ybWFsaXplZEtleWZyYW1lcz90aGlzLl9ub3JtYWxpemVkS2V5ZnJhbWVzOnRoaXMuX25vcm1hbGl6ZWRLZXlmcmFtZXMuX2ZyYW1lc30sc2V0IG9uc2FtcGxlKGEpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuZ2V0RnJhbWVzKCkpdGhyb3cgbmV3IEVycm9yKFwiU2V0dGluZyBvbnNhbXBsZSBvbiBjdXN0b20gZWZmZWN0IEtleWZyYW1lRWZmZWN0IGlzIG5vdCBzdXBwb3J0ZWQuXCIpO3RoaXMuX29uc2FtcGxlPWEsdGhpcy5fYW5pbWF0aW9uJiZ0aGlzLl9hbmltYXRpb24uX3JlYnVpbGRVbmRlcmx5aW5nQW5pbWF0aW9uKCl9LGdldCBwYXJlbnQoKXtyZXR1cm4gdGhpcy5fcGFyZW50fSxjbG9uZTpmdW5jdGlvbigpe2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXMuZ2V0RnJhbWVzKCkpdGhyb3cgbmV3IEVycm9yKFwiQ2xvbmluZyBjdXN0b20gZWZmZWN0cyBpcyBub3Qgc3VwcG9ydGVkLlwiKTt2YXIgYj1uZXcgS2V5ZnJhbWVFZmZlY3QodGhpcy50YXJnZXQsW10sYS5jbG9uZVRpbWluZ0lucHV0KHRoaXMuX3RpbWluZ0lucHV0KSx0aGlzLl9pZCk7cmV0dXJuIGIuX25vcm1hbGl6ZWRLZXlmcmFtZXM9dGhpcy5fbm9ybWFsaXplZEtleWZyYW1lcyxiLl9rZXlmcmFtZXM9dGhpcy5fa2V5ZnJhbWVzLGJ9LHJlbW92ZTpmdW5jdGlvbigpe2IucmVtb3ZlTXVsdGkoW3RoaXNdKX19O3ZhciBnPUVsZW1lbnQucHJvdG90eXBlLmFuaW1hdGU7RWxlbWVudC5wcm90b3R5cGUuYW5pbWF0ZT1mdW5jdGlvbihhLGMpe3ZhciBkPVwiXCI7cmV0dXJuIGMmJmMuaWQmJihkPWMuaWQpLGIudGltZWxpbmUuX3BsYXkobmV3IGIuS2V5ZnJhbWVFZmZlY3QodGhpcyxhLGMsZCkpfTt2YXIgaD1kb2N1bWVudC5jcmVhdGVFbGVtZW50TlMoXCJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hodG1sXCIsXCJkaXZcIik7Yi5uZXdVbmRlcmx5aW5nQW5pbWF0aW9uRm9yS2V5ZnJhbWVFZmZlY3Q9ZnVuY3Rpb24oYSl7aWYoYSl7dmFyIGI9YS50YXJnZXR8fGgsYz1hLl9rZXlmcmFtZXM7XCJmdW5jdGlvblwiPT10eXBlb2YgYyYmKGM9W10pO3ZhciBkPWEuX3RpbWluZ0lucHV0O2QuaWQ9YS5faWR9ZWxzZSB2YXIgYj1oLGM9W10sZD0wO3JldHVybiBnLmFwcGx5KGIsW2MsZF0pfSxiLmJpbmRBbmltYXRpb25Gb3JLZXlmcmFtZUVmZmVjdD1mdW5jdGlvbihhKXthLmVmZmVjdCYmXCJmdW5jdGlvblwiPT10eXBlb2YgYS5lZmZlY3QuX25vcm1hbGl6ZWRLZXlmcmFtZXMmJmIuYmluZEFuaW1hdGlvbkZvckN1c3RvbUVmZmVjdChhKX07dmFyIGk9W107Yi5hd2FpdFN0YXJ0VGltZT1mdW5jdGlvbihhKXtudWxsPT09YS5zdGFydFRpbWUmJmEuX2lzR3JvdXAmJigwPT1pLmxlbmd0aCYmcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpLGkucHVzaChhKSl9O3ZhciBqPXdpbmRvdy5nZXRDb21wdXRlZFN0eWxlO09iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3csXCJnZXRDb21wdXRlZFN0eWxlXCIse2NvbmZpZ3VyYWJsZTohMCxlbnVtZXJhYmxlOiEwLHZhbHVlOmZ1bmN0aW9uKCl7Yi50aW1lbGluZS5fdXBkYXRlQW5pbWF0aW9uc1Byb21pc2VzKCk7dmFyIGE9ai5hcHBseSh0aGlzLGFyZ3VtZW50cyk7cmV0dXJuIGUoKSYmKGE9ai5hcHBseSh0aGlzLGFyZ3VtZW50cykpLGIudGltZWxpbmUuX3VwZGF0ZUFuaW1hdGlvbnNQcm9taXNlcygpLGF9fSksd2luZG93LktleWZyYW1lRWZmZWN0PWIuS2V5ZnJhbWVFZmZlY3Qsd2luZG93LkVsZW1lbnQucHJvdG90eXBlLmdldEFuaW1hdGlvbnM9ZnVuY3Rpb24oKXtyZXR1cm4gZG9jdW1lbnQudGltZWxpbmUuZ2V0QW5pbWF0aW9ucygpLmZpbHRlcihmdW5jdGlvbihhKXtyZXR1cm4gbnVsbCE9PWEuZWZmZWN0JiZhLmVmZmVjdC50YXJnZXQ9PXRoaXN9LmJpbmQodGhpcykpfX0oYyxlKSxmdW5jdGlvbihhLGIsYyl7ZnVuY3Rpb24gZChhKXthLl9yZWdpc3RlcmVkfHwoYS5fcmVnaXN0ZXJlZD0hMCxnLnB1c2goYSksaHx8KGg9ITAscmVxdWVzdEFuaW1hdGlvbkZyYW1lKGUpKSl9ZnVuY3Rpb24gZShhKXt2YXIgYj1nO2c9W10sYi5zb3J0KGZ1bmN0aW9uKGEsYil7cmV0dXJuIGEuX3NlcXVlbmNlTnVtYmVyLWIuX3NlcXVlbmNlTnVtYmVyfSksYj1iLmZpbHRlcihmdW5jdGlvbihhKXthKCk7dmFyIGI9YS5fYW5pbWF0aW9uP2EuX2FuaW1hdGlvbi5wbGF5U3RhdGU6XCJpZGxlXCI7cmV0dXJuXCJydW5uaW5nXCIhPWImJlwicGVuZGluZ1wiIT1iJiYoYS5fcmVnaXN0ZXJlZD0hMSksYS5fcmVnaXN0ZXJlZH0pLGcucHVzaC5hcHBseShnLGIpLGcubGVuZ3RoPyhoPSEwLHJlcXVlc3RBbmltYXRpb25GcmFtZShlKSk6aD0hMX12YXIgZj0oZG9jdW1lbnQuY3JlYXRlRWxlbWVudE5TKFwiaHR0cDovL3d3dy53My5vcmcvMTk5OS94aHRtbFwiLFwiZGl2XCIpLDApO2IuYmluZEFuaW1hdGlvbkZvckN1c3RvbUVmZmVjdD1mdW5jdGlvbihiKXt2YXIgYyxlPWIuZWZmZWN0LnRhcmdldCxnPVwiZnVuY3Rpb25cIj09dHlwZW9mIGIuZWZmZWN0LmdldEZyYW1lcygpO2M9Zz9iLmVmZmVjdC5nZXRGcmFtZXMoKTpiLmVmZmVjdC5fb25zYW1wbGU7dmFyIGg9Yi5lZmZlY3QudGltaW5nLGk9bnVsbDtoPWEubm9ybWFsaXplVGltaW5nSW5wdXQoaCk7dmFyIGo9ZnVuY3Rpb24oKXt2YXIgZD1qLl9hbmltYXRpb24/ai5fYW5pbWF0aW9uLmN1cnJlbnRUaW1lOm51bGw7bnVsbCE9PWQmJihkPWEuY2FsY3VsYXRlSXRlcmF0aW9uUHJvZ3Jlc3MoYS5jYWxjdWxhdGVBY3RpdmVEdXJhdGlvbihoKSxkLGgpLGlzTmFOKGQpJiYoZD1udWxsKSksZCE9PWkmJihnP2MoZCxlLGIuZWZmZWN0KTpjKGQsYi5lZmZlY3QsYi5lZmZlY3QuX2FuaW1hdGlvbikpLGk9ZH07ai5fYW5pbWF0aW9uPWIsai5fcmVnaXN0ZXJlZD0hMSxqLl9zZXF1ZW5jZU51bWJlcj1mKyssYi5fY2FsbGJhY2s9aixkKGopfTt2YXIgZz1bXSxoPSExO2IuQW5pbWF0aW9uLnByb3RvdHlwZS5fcmVnaXN0ZXI9ZnVuY3Rpb24oKXt0aGlzLl9jYWxsYmFjayYmZCh0aGlzLl9jYWxsYmFjayl9fShjLGUpLGZ1bmN0aW9uKGEsYixjKXtmdW5jdGlvbiBkKGEpe3JldHVybiBhLl90aW1pbmcuZGVsYXkrYS5hY3RpdmVEdXJhdGlvbithLl90aW1pbmcuZW5kRGVsYXl9ZnVuY3Rpb24gZShiLGMsZCl7dGhpcy5faWQ9ZCx0aGlzLl9wYXJlbnQ9bnVsbCx0aGlzLmNoaWxkcmVuPWJ8fFtdLHRoaXMuX3JlcGFyZW50KHRoaXMuY2hpbGRyZW4pLGM9YS5udW1lcmljVGltaW5nVG9PYmplY3QoYyksdGhpcy5fdGltaW5nSW5wdXQ9YS5jbG9uZVRpbWluZ0lucHV0KGMpLHRoaXMuX3RpbWluZz1hLm5vcm1hbGl6ZVRpbWluZ0lucHV0KGMsITApLHRoaXMudGltaW5nPWEubWFrZVRpbWluZyhjLCEwLHRoaXMpLHRoaXMudGltaW5nLl9lZmZlY3Q9dGhpcyxcImF1dG9cIj09PXRoaXMuX3RpbWluZy5kdXJhdGlvbiYmKHRoaXMuX3RpbWluZy5kdXJhdGlvbj10aGlzLmFjdGl2ZUR1cmF0aW9uKX13aW5kb3cuU2VxdWVuY2VFZmZlY3Q9ZnVuY3Rpb24oKXtlLmFwcGx5KHRoaXMsYXJndW1lbnRzKX0sd2luZG93Lkdyb3VwRWZmZWN0PWZ1bmN0aW9uKCl7ZS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9LGUucHJvdG90eXBlPXtfaXNBbmNlc3RvcjpmdW5jdGlvbihhKXtmb3IodmFyIGI9dGhpcztudWxsIT09Yjspe2lmKGI9PWEpcmV0dXJuITA7Yj1iLl9wYXJlbnR9cmV0dXJuITF9LF9yZWJ1aWxkOmZ1bmN0aW9uKCl7Zm9yKHZhciBhPXRoaXM7YTspXCJhdXRvXCI9PT1hLnRpbWluZy5kdXJhdGlvbiYmKGEuX3RpbWluZy5kdXJhdGlvbj1hLmFjdGl2ZUR1cmF0aW9uKSxhPWEuX3BhcmVudDt0aGlzLl9hbmltYXRpb24mJnRoaXMuX2FuaW1hdGlvbi5fcmVidWlsZFVuZGVybHlpbmdBbmltYXRpb24oKX0sX3JlcGFyZW50OmZ1bmN0aW9uKGEpe2IucmVtb3ZlTXVsdGkoYSk7Zm9yKHZhciBjPTA7YzxhLmxlbmd0aDtjKyspYVtjXS5fcGFyZW50PXRoaXN9LF9wdXRDaGlsZDpmdW5jdGlvbihhLGIpe2Zvcih2YXIgYz1iP1wiQ2Fubm90IGFwcGVuZCBhbiBhbmNlc3RvciBvciBzZWxmXCI6XCJDYW5ub3QgcHJlcGVuZCBhbiBhbmNlc3RvciBvciBzZWxmXCIsZD0wO2Q8YS5sZW5ndGg7ZCsrKWlmKHRoaXMuX2lzQW5jZXN0b3IoYVtkXSkpdGhyb3d7dHlwZTpET01FeGNlcHRpb24uSElFUkFSQ0hZX1JFUVVFU1RfRVJSLG5hbWU6XCJIaWVyYXJjaHlSZXF1ZXN0RXJyb3JcIixtZXNzYWdlOmN9O2Zvcih2YXIgZD0wO2Q8YS5sZW5ndGg7ZCsrKWI/dGhpcy5jaGlsZHJlbi5wdXNoKGFbZF0pOnRoaXMuY2hpbGRyZW4udW5zaGlmdChhW2RdKTt0aGlzLl9yZXBhcmVudChhKSx0aGlzLl9yZWJ1aWxkKCl9LGFwcGVuZDpmdW5jdGlvbigpe3RoaXMuX3B1dENoaWxkKGFyZ3VtZW50cywhMCl9LHByZXBlbmQ6ZnVuY3Rpb24oKXt0aGlzLl9wdXRDaGlsZChhcmd1bWVudHMsITEpfSxnZXQgcGFyZW50KCl7cmV0dXJuIHRoaXMuX3BhcmVudH0sZ2V0IGZpcnN0Q2hpbGQoKXtyZXR1cm4gdGhpcy5jaGlsZHJlbi5sZW5ndGg/dGhpcy5jaGlsZHJlblswXTpudWxsfSxnZXQgbGFzdENoaWxkKCl7cmV0dXJuIHRoaXMuY2hpbGRyZW4ubGVuZ3RoP3RoaXMuY2hpbGRyZW5bdGhpcy5jaGlsZHJlbi5sZW5ndGgtMV06bnVsbH0sY2xvbmU6ZnVuY3Rpb24oKXtmb3IodmFyIGI9YS5jbG9uZVRpbWluZ0lucHV0KHRoaXMuX3RpbWluZ0lucHV0KSxjPVtdLGQ9MDtkPHRoaXMuY2hpbGRyZW4ubGVuZ3RoO2QrKyljLnB1c2godGhpcy5jaGlsZHJlbltkXS5jbG9uZSgpKTtyZXR1cm4gdGhpcyBpbnN0YW5jZW9mIEdyb3VwRWZmZWN0P25ldyBHcm91cEVmZmVjdChjLGIpOm5ldyBTZXF1ZW5jZUVmZmVjdChjLGIpfSxyZW1vdmU6ZnVuY3Rpb24oKXtiLnJlbW92ZU11bHRpKFt0aGlzXSl9fSx3aW5kb3cuU2VxdWVuY2VFZmZlY3QucHJvdG90eXBlPU9iamVjdC5jcmVhdGUoZS5wcm90b3R5cGUpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh3aW5kb3cuU2VxdWVuY2VFZmZlY3QucHJvdG90eXBlLFwiYWN0aXZlRHVyYXRpb25cIix7Z2V0OmZ1bmN0aW9uKCl7dmFyIGE9MDtyZXR1cm4gdGhpcy5jaGlsZHJlbi5mb3JFYWNoKGZ1bmN0aW9uKGIpe2ErPWQoYil9KSxNYXRoLm1heChhLDApfX0pLHdpbmRvdy5Hcm91cEVmZmVjdC5wcm90b3R5cGU9T2JqZWN0LmNyZWF0ZShlLnByb3RvdHlwZSksT2JqZWN0LmRlZmluZVByb3BlcnR5KHdpbmRvdy5Hcm91cEVmZmVjdC5wcm90b3R5cGUsXCJhY3RpdmVEdXJhdGlvblwiLHtnZXQ6ZnVuY3Rpb24oKXt2YXIgYT0wO3JldHVybiB0aGlzLmNoaWxkcmVuLmZvckVhY2goZnVuY3Rpb24oYil7YT1NYXRoLm1heChhLGQoYikpfSksYX19KSxiLm5ld1VuZGVybHlpbmdBbmltYXRpb25Gb3JHcm91cD1mdW5jdGlvbihjKXt2YXIgZCxlPW51bGwsZj1mdW5jdGlvbihiKXt2YXIgYz1kLl93cmFwcGVyO2lmKGMmJlwicGVuZGluZ1wiIT1jLnBsYXlTdGF0ZSYmYy5lZmZlY3QpcmV0dXJuIG51bGw9PWI/dm9pZCBjLl9yZW1vdmVDaGlsZEFuaW1hdGlvbnMoKTowPT1iJiZjLnBsYXliYWNrUmF0ZTwwJiYoZXx8KGU9YS5ub3JtYWxpemVUaW1pbmdJbnB1dChjLmVmZmVjdC50aW1pbmcpKSxiPWEuY2FsY3VsYXRlSXRlcmF0aW9uUHJvZ3Jlc3MoYS5jYWxjdWxhdGVBY3RpdmVEdXJhdGlvbihlKSwtMSxlKSxpc05hTihiKXx8bnVsbD09Yik/KGMuX2ZvckVhY2hDaGlsZChmdW5jdGlvbihhKXthLmN1cnJlbnRUaW1lPS0xfSksdm9pZCBjLl9yZW1vdmVDaGlsZEFuaW1hdGlvbnMoKSk6dm9pZCAwfSxnPW5ldyBLZXlmcmFtZUVmZmVjdChudWxsLFtdLGMuX3RpbWluZyxjLl9pZCk7cmV0dXJuIGcub25zYW1wbGU9ZixkPWIudGltZWxpbmUuX3BsYXkoZyl9LGIuYmluZEFuaW1hdGlvbkZvckdyb3VwPWZ1bmN0aW9uKGEpe2EuX2FuaW1hdGlvbi5fd3JhcHBlcj1hLGEuX2lzR3JvdXA9ITAsYi5hd2FpdFN0YXJ0VGltZShhKSxhLl9jb25zdHJ1Y3RDaGlsZEFuaW1hdGlvbnMoKSxhLl9zZXRFeHRlcm5hbEFuaW1hdGlvbihhKX0sYi5ncm91cENoaWxkRHVyYXRpb249ZH0oYyxlKSxiLnRydWU9YX0oe30sZnVuY3Rpb24oKXtyZXR1cm4gdGhpc30oKSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD13ZWItYW5pbWF0aW9ucy1uZXh0LWxpdGUubWluLmpzLm1hcCIsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbF0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQ0lBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFZQTtBQUNBO0FBREE7QUFDQTtBQThFQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUtBO0FBR0E7QUFHQTtBQUdBO0FBQUE7QUFBQTtBQU9BO0FBQ0E7QUFEQTtBQVFBO0FBTEE7QUFEQTtBQUdBO0FBRkE7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBd0JBO0FBQUE7QUFwQkE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBR0E7QUFHQTtBQU1BO0FBQ0E7QUFEQTtBQUFBO0FBUUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFBQTtBQW1CQTtBQUNBO0FBREE7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQVdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQURBO0FBRUE7QUFXQTtBQUNBO0FBREE7QUFFQTtBQUlBO0FBQ0E7QUFVQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFaQTtBQWdCQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBVUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQU9BO0FBQ0E7QUFEQTtBQUVBO0FBU0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFEQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUExWEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUVBO0FBOEJBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQXhFQTtBQW1LQTtBQUFBO0FBQUE7QUFBQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVBBO0FBZkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTBMQTtBQVFBO0FDcFFBO0FBQ0E7QUFNQTtBQUNBO0FBREE7QUFFQTtBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBSUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBS0E7QUF5QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFEQTtBQXFFQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQW5GQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBK0NBO0FBdENBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFNQTtBQUNBO0FBREE7QUFBQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFBQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUE5UUE7QUFDQTtBQURBO0FBQ0E7QUFVQTtBQWNBO0FBS0E7QUFNQTtBQUtBO0FBTUE7QUFLQTtBQUtBO0FBTUE7QUFLQTtBQVFBO0FBTUE7QUFLQTtBQXZGQTtBQUFBO0FBQUE7QUFrR0E7QUFDQTtBQUNBO0FBSEE7QUFqR0E7QUF3R0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBdEJBO0FBbU1BO0FBQ0E7QUMxU0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUdBO0FBTUE7QUFRQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUM5QkE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFVQTtBQVhBO0FBQ0E7QUFjQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBSUE7QUFBQTtBQUFBO0FDbERBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQVNBO0FBQUE7QUFBQTtBQ2lCQTtBQUNBO0FBQ0E7QUEvREE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUtBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQVVBO0FBRUE7QUFDQTtBQUdBO0FBbENBO0FBc0NBO0FBQ0E7QUFDQTtBQUNBO0FBZ0JBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQ25GQTtBQVdBO0FBR0E7QUFZQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBcUJBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUtBO0FBb0NBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFTQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFDQTtBQW9CQTtBQUNBO0FBVUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBWkE7QUFDQTtBQW9CQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQU9BO0FBQUE7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUxBO0FBRUE7QUFLQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBeFVBO0FBNFVBO0FDclVBO0FBQ0E7QUFvR0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUlBO0FBL0lBO0FBQ0E7QUFEQTtBQUVBO0FBT0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBaUJBO0FBQ0E7QUFEQTtBQUNBO0FBU0E7QUFrQkE7QUFJQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUE1QkE7QUFnQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFHQTtBQUFBO0FBS0E7QUFLQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQVRBO0FBZUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQ3pIQTtBQUNBO0FBVUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFHQTtBQUNBO0FBR0E7QUFBQTtBQWpFQTtBQUNBO0FBREE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBSUE7QUFJQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQWlCQTtBQUNBO0FBREE7QUFPQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBbUNBO0FBQ0E7QUFDQTtBQUFBO0FDOUVBO0FBQ0E7QUFHQTtBQUNBO0FBREE7QUFDQTtBQWVBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFJQTtBQUFBO0FBSUE7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFBQTtBQUVBO0FBR0E7QUFDQTtBQUtBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQXpFQTtBQWtGQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFQQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFQQTtBQVlBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUF5QkE7QUFBQTtBQUVBO0FBL0JBO0FBQ0E7QUFxQ0E7QUFDQTtBQUtBO0FBSUE7QUFHQTtBVnZMQTtBQUNBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==