(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow"],{

/***/ "./node_modules/@polymer/paper-item/paper-item-body.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-body.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






/*
Use `<paper-item-body>` in a `<paper-item>` or `<paper-icon-item>` to make two-
or three- line items. It is a flex item that is a vertical flexbox.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
    </paper-item>

The child elements with the `secondary` attribute is given secondary text
styling.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-body-two-line-min-height` | Minimum height of a two-line item | `72px`
`--paper-item-body-three-line-min-height` | Minimum height of a three-line item | `88px`
`--paper-item-body-secondary-color` | Foreground color for the `secondary` area | `--secondary-text-color`
`--paper-item-body-secondary` | Mixin applied to the `secondary` area | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */
        @apply --layout-vertical;
        @apply --layout-center-justified;
        @apply --layout-flex;
      }

      :host([two-line]) {
        min-height: var(--paper-item-body-two-line-min-height, 72px);
      }

      :host([three-line]) {
        min-height: var(--paper-item-body-three-line-min-height, 88px);
      }

      :host > ::slotted(*) {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }

      :host > ::slotted([secondary]) {
        @apply --paper-font-body1;

        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));

        @apply --paper-item-body-secondary;
      }
    </style>

    <slot></slot>
`,
  is: 'paper-item-body'
});

/***/ }),

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner-lite.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner-lite.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/






const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
  <style include="paper-spinner-styles"></style>

  <div id="spinnerContainer" class-name="[[__computeContainerClasses(active, __coolingDown)]]" on-animationend="__reset" on-webkit-animation-end="__reset">
    <div class="spinner-layer">
      <div class="circle-clipper left">
        <div class="circle"></div>
      </div>
      <div class="circle-clipper right">
        <div class="circle"></div>
      </div>
    </div>
  </div>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a single color material design circular spinner.

    <paper-spinner-lite active></paper-spinner-lite>

The default spinner is blue. It can be customized to be a different color.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner-lite alt="Loading contacts list" active></paper-spinner-lite>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-color` | Color of the spinner | `--google-blue-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner-lite
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner-lite',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./node_modules/fuse.js/dist/fuse.js":
/*!*******************************************!*\
  !*** ./node_modules/fuse.js/dist/fuse.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*!
 * Fuse.js v3.4.5 - Lightweight fuzzy-search (http://fusejs.io)
 * 
 * Copyright (c) 2012-2017 Kirollos Risk (http://kiro.me)
 * All Rights Reserved. Apache Software License 2.0
 * 
 * http://www.apache.org/licenses/LICENSE-2.0
 */
!function (e, t) {
   true ? module.exports = t() : undefined;
}(this, function () {
  return function (e) {
    var t = {};

    function n(r) {
      if (t[r]) return t[r].exports;
      var o = t[r] = {
        i: r,
        l: !1,
        exports: {}
      };
      return e[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports;
    }

    return n.m = e, n.c = t, n.d = function (e, t, r) {
      n.o(e, t) || Object.defineProperty(e, t, {
        enumerable: !0,
        get: r
      });
    }, n.r = function (e) {
      "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
      }), Object.defineProperty(e, "__esModule", {
        value: !0
      });
    }, n.t = function (e, t) {
      if (1 & t && (e = n(e)), 8 & t) return e;
      if (4 & t && "object" == typeof e && e && e.__esModule) return e;
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, "default", {
        enumerable: !0,
        value: e
      }), 2 & t && "string" != typeof e) for (var o in e) n.d(r, o, function (t) {
        return e[t];
      }.bind(null, o));
      return r;
    }, n.n = function (e) {
      var t = e && e.__esModule ? function () {
        return e.default;
      } : function () {
        return e;
      };
      return n.d(t, "a", t), t;
    }, n.o = function (e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }, n.p = "", n(n.s = 1);
  }([function (e, t) {
    e.exports = function (e) {
      return Array.isArray ? Array.isArray(e) : "[object Array]" === Object.prototype.toString.call(e);
    };
  }, function (e, t, n) {
    function r(e) {
      return (r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
        return typeof e;
      } : function (e) {
        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(e);
    }

    function o(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var i = n(2),
        a = n(8),
        s = n(0),
        c = function () {
      function e(t, n) {
        var r = n.location,
            o = void 0 === r ? 0 : r,
            i = n.distance,
            s = void 0 === i ? 100 : i,
            c = n.threshold,
            h = void 0 === c ? .6 : c,
            l = n.maxPatternLength,
            u = void 0 === l ? 32 : l,
            f = n.caseSensitive,
            d = void 0 !== f && f,
            v = n.tokenSeparator,
            p = void 0 === v ? / +/g : v,
            g = n.findAllMatches,
            y = void 0 !== g && g,
            m = n.minMatchCharLength,
            k = void 0 === m ? 1 : m,
            S = n.id,
            x = void 0 === S ? null : S,
            b = n.keys,
            M = void 0 === b ? [] : b,
            _ = n.shouldSort,
            L = void 0 === _ || _,
            w = n.getFn,
            A = void 0 === w ? a : w,
            C = n.sortFn,
            I = void 0 === C ? function (e, t) {
          return e.score - t.score;
        } : C,
            O = n.tokenize,
            j = void 0 !== O && O,
            P = n.matchAllTokens,
            F = void 0 !== P && P,
            T = n.includeMatches,
            z = void 0 !== T && T,
            E = n.includeScore,
            K = void 0 !== E && E,
            $ = n.verbose,
            J = void 0 !== $ && $;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.options = {
          location: o,
          distance: s,
          threshold: h,
          maxPatternLength: u,
          isCaseSensitive: d,
          tokenSeparator: p,
          findAllMatches: y,
          minMatchCharLength: k,
          id: x,
          keys: M,
          includeMatches: z,
          includeScore: K,
          shouldSort: L,
          getFn: A,
          sortFn: I,
          verbose: J,
          tokenize: j,
          matchAllTokens: F
        }, this.setCollection(t);
      }

      var t, n, c;
      return t = e, (n = [{
        key: "setCollection",
        value: function (e) {
          return this.list = e, e;
        }
      }, {
        key: "search",
        value: function (e) {
          var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
            limit: !1
          };

          this._log('---------\nSearch pattern: "'.concat(e, '"'));

          var n = this._prepareSearchers(e),
              r = n.tokenSearchers,
              o = n.fullSearcher,
              i = this._search(r, o),
              a = i.weights,
              s = i.results;

          return this._computeScore(a, s), this.options.shouldSort && this._sort(s), t.limit && "number" == typeof t.limit && (s = s.slice(0, t.limit)), this._format(s);
        }
      }, {
        key: "_prepareSearchers",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "",
              t = [];
          if (this.options.tokenize) for (var n = e.split(this.options.tokenSeparator), r = 0, o = n.length; r < o; r += 1) t.push(new i(n[r], this.options));
          return {
            tokenSearchers: t,
            fullSearcher: new i(e, this.options)
          };
        }
      }, {
        key: "_search",
        value: function () {
          var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [],
              t = arguments.length > 1 ? arguments[1] : void 0,
              n = this.list,
              r = {},
              o = [];

          if ("string" == typeof n[0]) {
            for (var i = 0, a = n.length; i < a; i += 1) this._analyze({
              key: "",
              value: n[i],
              record: i,
              index: i
            }, {
              resultMap: r,
              results: o,
              tokenSearchers: e,
              fullSearcher: t
            });

            return {
              weights: null,
              results: o
            };
          }

          for (var s = {}, c = 0, h = n.length; c < h; c += 1) for (var l = n[c], u = 0, f = this.options.keys.length; u < f; u += 1) {
            var d = this.options.keys[u];

            if ("string" != typeof d) {
              if (s[d.name] = {
                weight: 1 - d.weight || 1
              }, d.weight <= 0 || d.weight > 1) throw new Error("Key weight has to be > 0 and <= 1");
              d = d.name;
            } else s[d] = {
              weight: 1
            };

            this._analyze({
              key: d,
              value: this.options.getFn(l, d),
              record: l,
              index: c
            }, {
              resultMap: r,
              results: o,
              tokenSearchers: e,
              fullSearcher: t
            });
          }

          return {
            weights: s,
            results: o
          };
        }
      }, {
        key: "_analyze",
        value: function (e, t) {
          var n = e.key,
              r = e.arrayIndex,
              o = void 0 === r ? -1 : r,
              i = e.value,
              a = e.record,
              c = e.index,
              h = t.tokenSearchers,
              l = void 0 === h ? [] : h,
              u = t.fullSearcher,
              f = void 0 === u ? [] : u,
              d = t.resultMap,
              v = void 0 === d ? {} : d,
              p = t.results,
              g = void 0 === p ? [] : p;

          if (null != i) {
            var y = !1,
                m = -1,
                k = 0;

            if ("string" == typeof i) {
              this._log("\nKey: ".concat("" === n ? "-" : n));

              var S = f.search(i);

              if (this._log('Full text: "'.concat(i, '", score: ').concat(S.score)), this.options.tokenize) {
                for (var x = i.split(this.options.tokenSeparator), b = [], M = 0; M < l.length; M += 1) {
                  var _ = l[M];

                  this._log('\nPattern: "'.concat(_.pattern, '"'));

                  for (var L = !1, w = 0; w < x.length; w += 1) {
                    var A = x[w],
                        C = _.search(A),
                        I = {};

                    C.isMatch ? (I[A] = C.score, y = !0, L = !0, b.push(C.score)) : (I[A] = 1, this.options.matchAllTokens || b.push(1)), this._log('Token: "'.concat(A, '", score: ').concat(I[A]));
                  }

                  L && (k += 1);
                }

                m = b[0];

                for (var O = b.length, j = 1; j < O; j += 1) m += b[j];

                m /= O, this._log("Token score average:", m);
              }

              var P = S.score;
              m > -1 && (P = (P + m) / 2), this._log("Score average:", P);
              var F = !this.options.tokenize || !this.options.matchAllTokens || k >= l.length;

              if (this._log("\nCheck Matches: ".concat(F)), (y || S.isMatch) && F) {
                var T = v[c];
                T ? T.output.push({
                  key: n,
                  arrayIndex: o,
                  value: i,
                  score: P,
                  matchedIndices: S.matchedIndices
                }) : (v[c] = {
                  item: a,
                  output: [{
                    key: n,
                    arrayIndex: o,
                    value: i,
                    score: P,
                    matchedIndices: S.matchedIndices
                  }]
                }, g.push(v[c]));
              }
            } else if (s(i)) for (var z = 0, E = i.length; z < E; z += 1) this._analyze({
              key: n,
              arrayIndex: z,
              value: i[z],
              record: a,
              index: c
            }, {
              resultMap: v,
              results: g,
              tokenSearchers: l,
              fullSearcher: f
            });
          }
        }
      }, {
        key: "_computeScore",
        value: function (e, t) {
          this._log("\n\nComputing score:\n");

          for (var n = 0, r = t.length; n < r; n += 1) {
            for (var o = t[n].output, i = o.length, a = 1, s = 1, c = 0; c < i; c += 1) {
              var h = e ? e[o[c].key].weight : 1,
                  l = (1 === h ? o[c].score : o[c].score || .001) * h;
              1 !== h ? s = Math.min(s, l) : (o[c].nScore = l, a *= l);
            }

            t[n].score = 1 === s ? a : s, this._log(t[n]);
          }
        }
      }, {
        key: "_sort",
        value: function (e) {
          this._log("\n\nSorting...."), e.sort(this.options.sortFn);
        }
      }, {
        key: "_format",
        value: function (e) {
          var t = [];

          if (this.options.verbose) {
            var n = [];
            this._log("\n\nOutput:\n\n", JSON.stringify(e, function (e, t) {
              if ("object" === r(t) && null !== t) {
                if (-1 !== n.indexOf(t)) return;
                n.push(t);
              }

              return t;
            })), n = null;
          }

          var o = [];
          this.options.includeMatches && o.push(function (e, t) {
            var n = e.output;
            t.matches = [];

            for (var r = 0, o = n.length; r < o; r += 1) {
              var i = n[r];

              if (0 !== i.matchedIndices.length) {
                var a = {
                  indices: i.matchedIndices,
                  value: i.value
                };
                i.key && (a.key = i.key), i.hasOwnProperty("arrayIndex") && i.arrayIndex > -1 && (a.arrayIndex = i.arrayIndex), t.matches.push(a);
              }
            }
          }), this.options.includeScore && o.push(function (e, t) {
            t.score = e.score;
          });

          for (var i = 0, a = e.length; i < a; i += 1) {
            var s = e[i];

            if (this.options.id && (s.item = this.options.getFn(s.item, this.options.id)[0]), o.length) {
              for (var c = {
                item: s.item
              }, h = 0, l = o.length; h < l; h += 1) o[h](s, c);

              t.push(c);
            } else t.push(s.item);
          }

          return t;
        }
      }, {
        key: "_log",
        value: function () {
          var e;
          this.options.verbose && (e = console).log.apply(e, arguments);
        }
      }]) && o(t.prototype, n), c && o(t, c), e;
    }();

    e.exports = c;
  }, function (e, t, n) {
    function r(e, t) {
      for (var n = 0; n < t.length; n++) {
        var r = t[n];
        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
      }
    }

    var o = n(3),
        i = n(4),
        a = n(7),
        s = function () {
      function e(t, n) {
        var r = n.location,
            o = void 0 === r ? 0 : r,
            i = n.distance,
            s = void 0 === i ? 100 : i,
            c = n.threshold,
            h = void 0 === c ? .6 : c,
            l = n.maxPatternLength,
            u = void 0 === l ? 32 : l,
            f = n.isCaseSensitive,
            d = void 0 !== f && f,
            v = n.tokenSeparator,
            p = void 0 === v ? / +/g : v,
            g = n.findAllMatches,
            y = void 0 !== g && g,
            m = n.minMatchCharLength,
            k = void 0 === m ? 1 : m;
        !function (e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function");
        }(this, e), this.options = {
          location: o,
          distance: s,
          threshold: h,
          maxPatternLength: u,
          isCaseSensitive: d,
          tokenSeparator: p,
          findAllMatches: y,
          minMatchCharLength: k
        }, this.pattern = this.options.isCaseSensitive ? t : t.toLowerCase(), this.pattern.length <= u && (this.patternAlphabet = a(this.pattern));
      }

      var t, n, s;
      return t = e, (n = [{
        key: "search",
        value: function (e) {
          if (this.options.isCaseSensitive || (e = e.toLowerCase()), this.pattern === e) return {
            isMatch: !0,
            score: 0,
            matchedIndices: [[0, e.length - 1]]
          };
          var t = this.options,
              n = t.maxPatternLength,
              r = t.tokenSeparator;
          if (this.pattern.length > n) return o(e, this.pattern, r);
          var a = this.options,
              s = a.location,
              c = a.distance,
              h = a.threshold,
              l = a.findAllMatches,
              u = a.minMatchCharLength;
          return i(e, this.pattern, this.patternAlphabet, {
            location: s,
            distance: c,
            threshold: h,
            findAllMatches: l,
            minMatchCharLength: u
          });
        }
      }]) && r(t.prototype, n), s && r(t, s), e;
    }();

    e.exports = s;
  }, function (e, t) {
    var n = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;

    e.exports = function (e, t) {
      var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : / +/g,
          o = new RegExp(t.replace(n, "\\$&").replace(r, "|")),
          i = e.match(o),
          a = !!i,
          s = [];
      if (a) for (var c = 0, h = i.length; c < h; c += 1) {
        var l = i[c];
        s.push([e.indexOf(l), l.length - 1]);
      }
      return {
        score: a ? .5 : 1,
        isMatch: a,
        matchedIndices: s
      };
    };
  }, function (e, t, n) {
    var r = n(5),
        o = n(6);

    e.exports = function (e, t, n, i) {
      for (var a = i.location, s = void 0 === a ? 0 : a, c = i.distance, h = void 0 === c ? 100 : c, l = i.threshold, u = void 0 === l ? .6 : l, f = i.findAllMatches, d = void 0 !== f && f, v = i.minMatchCharLength, p = void 0 === v ? 1 : v, g = s, y = e.length, m = u, k = e.indexOf(t, g), S = t.length, x = [], b = 0; b < y; b += 1) x[b] = 0;

      if (-1 !== k) {
        var M = r(t, {
          errors: 0,
          currentLocation: k,
          expectedLocation: g,
          distance: h
        });

        if (m = Math.min(M, m), -1 !== (k = e.lastIndexOf(t, g + S))) {
          var _ = r(t, {
            errors: 0,
            currentLocation: k,
            expectedLocation: g,
            distance: h
          });

          m = Math.min(_, m);
        }
      }

      k = -1;

      for (var L = [], w = 1, A = S + y, C = 1 << S - 1, I = 0; I < S; I += 1) {
        for (var O = 0, j = A; O < j;) {
          r(t, {
            errors: I,
            currentLocation: g + j,
            expectedLocation: g,
            distance: h
          }) <= m ? O = j : A = j, j = Math.floor((A - O) / 2 + O);
        }

        A = j;
        var P = Math.max(1, g - j + 1),
            F = d ? y : Math.min(g + j, y) + S,
            T = Array(F + 2);
        T[F + 1] = (1 << I) - 1;

        for (var z = F; z >= P; z -= 1) {
          var E = z - 1,
              K = n[e.charAt(E)];

          if (K && (x[E] = 1), T[z] = (T[z + 1] << 1 | 1) & K, 0 !== I && (T[z] |= (L[z + 1] | L[z]) << 1 | 1 | L[z + 1]), T[z] & C && (w = r(t, {
            errors: I,
            currentLocation: E,
            expectedLocation: g,
            distance: h
          })) <= m) {
            if (m = w, (k = E) <= g) break;
            P = Math.max(1, 2 * g - k);
          }
        }

        if (r(t, {
          errors: I + 1,
          currentLocation: g,
          expectedLocation: g,
          distance: h
        }) > m) break;
        L = T;
      }

      return {
        isMatch: k >= 0,
        score: 0 === w ? .001 : w,
        matchedIndices: o(x, p)
      };
    };
  }, function (e, t) {
    e.exports = function (e, t) {
      var n = t.errors,
          r = void 0 === n ? 0 : n,
          o = t.currentLocation,
          i = void 0 === o ? 0 : o,
          a = t.expectedLocation,
          s = void 0 === a ? 0 : a,
          c = t.distance,
          h = void 0 === c ? 100 : c,
          l = r / e.length,
          u = Math.abs(s - i);
      return h ? l + u / h : u ? 1 : l;
    };
  }, function (e, t) {
    e.exports = function () {
      for (var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [], t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1, n = [], r = -1, o = -1, i = 0, a = e.length; i < a; i += 1) {
        var s = e[i];
        s && -1 === r ? r = i : s || -1 === r || ((o = i - 1) - r + 1 >= t && n.push([r, o]), r = -1);
      }

      return e[i - 1] && i - r >= t && n.push([r, i - 1]), n;
    };
  }, function (e, t) {
    e.exports = function (e) {
      for (var t = {}, n = e.length, r = 0; r < n; r += 1) t[e.charAt(r)] = 0;

      for (var o = 0; o < n; o += 1) t[e.charAt(o)] |= 1 << n - o - 1;

      return t;
    };
  }, function (e, t, n) {
    var r = n(0);

    e.exports = function (e, t) {
      return function e(t, n, o) {
        if (n) {
          var i = n.indexOf("."),
              a = n,
              s = null;
          -1 !== i && (a = n.slice(0, i), s = n.slice(i + 1));
          var c = t[a];
          if (null != c) if (s || "string" != typeof c && "number" != typeof c) {
            if (r(c)) for (var h = 0, l = c.length; h < l; h += 1) e(c[h], s, o);else s && e(c, s, o);
          } else o.push(c.toString());
        } else o.push(t);

        return o;
      }(e, t, []);
    };
  }]);
});

/***/ }),

/***/ "./node_modules/lit-html/directives/style-map.js":
/*!*******************************************************!*\
  !*** ./node_modules/lit-html/directives/style-map.js ***!
  \*******************************************************/
/*! exports provided: styleMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styleMap", function() { return styleMap; });
/* harmony import */ var _lit_html_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lit-html.js */ "./node_modules/lit-html/lit-html.js");
/**
 * @license
 * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */

/**
 * Stores the StyleInfo object applied to a given AttributePart.
 * Used to unset existing values when a new StyleInfo object is applied.
 */

const styleMapCache = new WeakMap();
/**
 * A directive that applies CSS properties to an element.
 *
 * `styleMap` can only be used in the `style` attribute and must be the only
 * expression in the attribute. It takes the property names in the `styleInfo`
 * object and adds the property values as CSS propertes. Property names with
 * dashes (`-`) are assumed to be valid CSS property names and set on the
 * element's style object using `setProperty()`. Names without dashes are
 * assumed to be camelCased JavaScript property names and set on the element's
 * style object using property assignment, allowing the style object to
 * translate JavaScript-style names to CSS property names.
 *
 * For example `styleMap({backgroundColor: 'red', 'border-top': '5px', '--size':
 * '0'})` sets the `background-color`, `border-top` and `--size` properties.
 *
 * @param styleInfo {StyleInfo}
 */

const styleMap = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(styleInfo => part => {
  if (!(part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) || part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["PropertyPart"] || part.committer.name !== 'style' || part.committer.parts.length > 1) {
    throw new Error('The `styleMap` directive must be used in the style attribute ' + 'and must be the only part in the attribute.');
  }

  const {
    committer
  } = part;
  const {
    style
  } = committer.element; // Handle static styles the first time we see a Part

  if (!styleMapCache.has(part)) {
    style.cssText = committer.strings.join(' ');
  } // Remove old properties that no longer exist in styleInfo


  const oldInfo = styleMapCache.get(part);

  for (const name in oldInfo) {
    if (!(name in styleInfo)) {
      if (name.indexOf('-') === -1) {
        // tslint:disable-next-line:no-any
        style[name] = null;
      } else {
        style.removeProperty(name);
      }
    }
  } // Add or update properties


  for (const name in styleInfo) {
    if (name.indexOf('-') === -1) {
      // tslint:disable-next-line:no-any
      style[name] = styleInfo[name];
    } else {
      style.setProperty(name, styleInfo[name]);
    }
  }

  styleMapCache.set(part, styleInfo);
});

/***/ }),

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function index(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtLWJvZHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1saXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9mdXNlLmpzL2Rpc3QvZnVzZS5qcyIsIndlYnBhY2s6Ly8vLi4vc3JjL2RpcmVjdGl2ZXMvc3R5bGUtbWFwLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuVXNlIGA8cGFwZXItaXRlbS1ib2R5PmAgaW4gYSBgPHBhcGVyLWl0ZW0+YCBvciBgPHBhcGVyLWljb24taXRlbT5gIHRvIG1ha2UgdHdvLVxub3IgdGhyZWUtIGxpbmUgaXRlbXMuIEl0IGlzIGEgZmxleCBpdGVtIHRoYXQgaXMgYSB2ZXJ0aWNhbCBmbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+XG4gICAgICA8cGFwZXItaXRlbS1ib2R5IHR3by1saW5lPlxuICAgICAgICA8ZGl2PlNob3cgeW91ciBzdGF0dXM8L2Rpdj5cbiAgICAgICAgPGRpdiBzZWNvbmRhcnk+WW91ciBzdGF0dXMgaXMgdmlzaWJsZSB0byBldmVyeW9uZTwvZGl2PlxuICAgICAgPC9wYXBlci1pdGVtLWJvZHk+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5UaGUgY2hpbGQgZWxlbWVudHMgd2l0aCB0aGUgYHNlY29uZGFyeWAgYXR0cmlidXRlIGlzIGdpdmVuIHNlY29uZGFyeSB0ZXh0XG5zdHlsaW5nLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItaXRlbS1ib2R5LXR3by1saW5lLW1pbi1oZWlnaHRgIHwgTWluaW11bSBoZWlnaHQgb2YgYSB0d28tbGluZSBpdGVtIHwgYDcycHhgXG5gLS1wYXBlci1pdGVtLWJvZHktdGhyZWUtbGluZS1taW4taGVpZ2h0YCB8IE1pbmltdW0gaGVpZ2h0IG9mIGEgdGhyZWUtbGluZSBpdGVtIHwgYDg4cHhgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yYCB8IEZvcmVncm91bmQgY29sb3IgZm9yIHRoZSBgc2Vjb25kYXJ5YCBhcmVhIHwgYC0tc2Vjb25kYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGBzZWNvbmRhcnlgIGFyZWEgfCBge31gXG5cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjsgLyogbmVlZGVkIGZvciB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcyB0byB3b3JrIG9uIGZmICovXG4gICAgICAgIEBhcHBseSAtLWxheW91dC12ZXJ0aWNhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1qdXN0aWZpZWQ7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdHdvLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10d28tbGluZS1taW4taGVpZ2h0LCA3MnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RocmVlLWxpbmVdKSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tYm9keS10aHJlZS1saW5lLW1pbi1oZWlnaHQsIDg4cHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChbc2Vjb25kYXJ5XSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWJvZHkxO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1pdGVtLWJvZHktc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWl0ZW0tYm9keS1zZWNvbmRhcnk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1pdGVtLWJvZHknXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnLi9wYXBlci1zcGlubmVyLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmltcG9ydCB7UGFwZXJTcGlubmVyQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItc3Bpbm5lci1iZWhhdmlvci5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNwaW5uZXJDb250YWluZXJcIiBjbGFzcy1uYW1lPVwiW1tfX2NvbXB1dGVDb250YWluZXJDbGFzc2VzKGFjdGl2ZSwgX19jb29saW5nRG93bildXVwiIG9uLWFuaW1hdGlvbmVuZD1cIl9fcmVzZXRcIiBvbi13ZWJraXQtYW5pbWF0aW9uLWVuZD1cIl9fcmVzZXRcIj5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllclwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuYDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtQcm9ncmVzcyAmXG5hY3Rpdml0eV0oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3Byb2dyZXNzLWFjdGl2aXR5Lmh0bWwpXG5cbkVsZW1lbnQgcHJvdmlkaW5nIGEgc2luZ2xlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXItbGl0ZSBhY3RpdmU+PC9wYXBlci1zcGlubmVyLWxpdGU+XG5cblRoZSBkZWZhdWx0IHNwaW5uZXIgaXMgYmx1ZS4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gYmUgYSBkaWZmZXJlbnQgY29sb3IuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkFsdCBhdHRyaWJ1dGUgc2hvdWxkIGJlIHNldCB0byBwcm92aWRlIGFkZXF1YXRlIGNvbnRleHQgZm9yIGFjY2Vzc2liaWxpdHkuIElmXG5ub3QgcHJvdmlkZWQsIGl0IGRlZmF1bHRzIHRvICdsb2FkaW5nJy4gRW1wdHkgYWx0IGNhbiBiZSBwcm92aWRlZCB0byBtYXJrIHRoZVxuZWxlbWVudCBhcyBkZWNvcmF0aXZlIGlmIGFsdGVybmF0aXZlIGNvbnRlbnQgaXMgcHJvdmlkZWQgaW4gYW5vdGhlciBmb3JtIChlLmcuIGFcbnRleHQgYmxvY2sgZm9sbG93aW5nIHRoZSBzcGlubmVyKS5cblxuICAgIDxwYXBlci1zcGlubmVyLWxpdGUgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lci1saXRlPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc3Bpbm5lci1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc3Bpbm5lciB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItc3Ryb2tlLXdpZHRoYCB8IFRoZSB3aWR0aCBvZiB0aGUgc3Bpbm5lciBzdHJva2UgfCAzcHhcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1zcGlubmVyLWxpdGVcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiB0ZW1wbGF0ZSxcblxuICBpczogJ3BhcGVyLXNwaW5uZXItbGl0ZScsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiIsIi8qIVxuICogRnVzZS5qcyB2My40LjUgLSBMaWdodHdlaWdodCBmdXp6eS1zZWFyY2ggKGh0dHA6Ly9mdXNlanMuaW8pXG4gKiBcbiAqIENvcHlyaWdodCAoYykgMjAxMi0yMDE3IEtpcm9sbG9zIFJpc2sgKGh0dHA6Ly9raXJvLm1lKVxuICogQWxsIFJpZ2h0cyBSZXNlcnZlZC4gQXBhY2hlIFNvZnR3YXJlIExpY2Vuc2UgMi4wXG4gKiBcbiAqIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICovXG4hZnVuY3Rpb24oZSx0KXtcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cyYmXCJvYmplY3RcIj09dHlwZW9mIG1vZHVsZT9tb2R1bGUuZXhwb3J0cz10KCk6XCJmdW5jdGlvblwiPT10eXBlb2YgZGVmaW5lJiZkZWZpbmUuYW1kP2RlZmluZShcIkZ1c2VcIixbXSx0KTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9leHBvcnRzLkZ1c2U9dCgpOmUuRnVzZT10KCl9KHRoaXMsZnVuY3Rpb24oKXtyZXR1cm4gZnVuY3Rpb24oZSl7dmFyIHQ9e307ZnVuY3Rpb24gbihyKXtpZih0W3JdKXJldHVybiB0W3JdLmV4cG9ydHM7dmFyIG89dFtyXT17aTpyLGw6ITEsZXhwb3J0czp7fX07cmV0dXJuIGVbcl0uY2FsbChvLmV4cG9ydHMsbyxvLmV4cG9ydHMsbiksby5sPSEwLG8uZXhwb3J0c31yZXR1cm4gbi5tPWUsbi5jPXQsbi5kPWZ1bmN0aW9uKGUsdCxyKXtuLm8oZSx0KXx8T2JqZWN0LmRlZmluZVByb3BlcnR5KGUsdCx7ZW51bWVyYWJsZTohMCxnZXQ6cn0pfSxuLnI9ZnVuY3Rpb24oZSl7XCJ1bmRlZmluZWRcIiE9dHlwZW9mIFN5bWJvbCYmU3ltYm9sLnRvU3RyaW5nVGFnJiZPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxTeW1ib2wudG9TdHJpbmdUYWcse3ZhbHVlOlwiTW9kdWxlXCJ9KSxPYmplY3QuZGVmaW5lUHJvcGVydHkoZSxcIl9fZXNNb2R1bGVcIix7dmFsdWU6ITB9KX0sbi50PWZ1bmN0aW9uKGUsdCl7aWYoMSZ0JiYoZT1uKGUpKSw4JnQpcmV0dXJuIGU7aWYoNCZ0JiZcIm9iamVjdFwiPT10eXBlb2YgZSYmZSYmZS5fX2VzTW9kdWxlKXJldHVybiBlO3ZhciByPU9iamVjdC5jcmVhdGUobnVsbCk7aWYobi5yKHIpLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiZGVmYXVsdFwiLHtlbnVtZXJhYmxlOiEwLHZhbHVlOmV9KSwyJnQmJlwic3RyaW5nXCIhPXR5cGVvZiBlKWZvcih2YXIgbyBpbiBlKW4uZChyLG8sZnVuY3Rpb24odCl7cmV0dXJuIGVbdF19LmJpbmQobnVsbCxvKSk7cmV0dXJuIHJ9LG4ubj1mdW5jdGlvbihlKXt2YXIgdD1lJiZlLl9fZXNNb2R1bGU/ZnVuY3Rpb24oKXtyZXR1cm4gZS5kZWZhdWx0fTpmdW5jdGlvbigpe3JldHVybiBlfTtyZXR1cm4gbi5kKHQsXCJhXCIsdCksdH0sbi5vPWZ1bmN0aW9uKGUsdCl7cmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChlLHQpfSxuLnA9XCJcIixuKG4ucz0xKX0oW2Z1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUpe3JldHVybiBBcnJheS5pc0FycmF5P0FycmF5LmlzQXJyYXkoZSk6XCJbb2JqZWN0IEFycmF5XVwiPT09T2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGUpfX0sZnVuY3Rpb24oZSx0LG4pe2Z1bmN0aW9uIHIoZSl7cmV0dXJuKHI9XCJmdW5jdGlvblwiPT10eXBlb2YgU3ltYm9sJiZcInN5bWJvbFwiPT10eXBlb2YgU3ltYm9sLml0ZXJhdG9yP2Z1bmN0aW9uKGUpe3JldHVybiB0eXBlb2YgZX06ZnVuY3Rpb24oZSl7cmV0dXJuIGUmJlwiZnVuY3Rpb25cIj09dHlwZW9mIFN5bWJvbCYmZS5jb25zdHJ1Y3Rvcj09PVN5bWJvbCYmZSE9PVN5bWJvbC5wcm90b3R5cGU/XCJzeW1ib2xcIjp0eXBlb2YgZX0pKGUpfWZ1bmN0aW9uIG8oZSx0KXtmb3IodmFyIG49MDtuPHQubGVuZ3RoO24rKyl7dmFyIHI9dFtuXTtyLmVudW1lcmFibGU9ci5lbnVtZXJhYmxlfHwhMSxyLmNvbmZpZ3VyYWJsZT0hMCxcInZhbHVlXCJpbiByJiYoci53cml0YWJsZT0hMCksT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsci5rZXkscil9fXZhciBpPW4oMiksYT1uKDgpLHM9bigwKSxjPWZ1bmN0aW9uKCl7ZnVuY3Rpb24gZSh0LG4pe3ZhciByPW4ubG9jYXRpb24sbz12b2lkIDA9PT1yPzA6cixpPW4uZGlzdGFuY2Uscz12b2lkIDA9PT1pPzEwMDppLGM9bi50aHJlc2hvbGQsaD12b2lkIDA9PT1jPy42OmMsbD1uLm1heFBhdHRlcm5MZW5ndGgsdT12b2lkIDA9PT1sPzMyOmwsZj1uLmNhc2VTZW5zaXRpdmUsZD12b2lkIDAhPT1mJiZmLHY9bi50b2tlblNlcGFyYXRvcixwPXZvaWQgMD09PXY/LyArL2c6dixnPW4uZmluZEFsbE1hdGNoZXMseT12b2lkIDAhPT1nJiZnLG09bi5taW5NYXRjaENoYXJMZW5ndGgsaz12b2lkIDA9PT1tPzE6bSxTPW4uaWQseD12b2lkIDA9PT1TP251bGw6UyxiPW4ua2V5cyxNPXZvaWQgMD09PWI/W106YixfPW4uc2hvdWxkU29ydCxMPXZvaWQgMD09PV98fF8sdz1uLmdldEZuLEE9dm9pZCAwPT09dz9hOncsQz1uLnNvcnRGbixJPXZvaWQgMD09PUM/ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZS5zY29yZS10LnNjb3JlfTpDLE89bi50b2tlbml6ZSxqPXZvaWQgMCE9PU8mJk8sUD1uLm1hdGNoQWxsVG9rZW5zLEY9dm9pZCAwIT09UCYmUCxUPW4uaW5jbHVkZU1hdGNoZXMsej12b2lkIDAhPT1UJiZULEU9bi5pbmNsdWRlU2NvcmUsSz12b2lkIDAhPT1FJiZFLCQ9bi52ZXJib3NlLEo9dm9pZCAwIT09JCYmJDshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMub3B0aW9ucz17bG9jYXRpb246byxkaXN0YW5jZTpzLHRocmVzaG9sZDpoLG1heFBhdHRlcm5MZW5ndGg6dSxpc0Nhc2VTZW5zaXRpdmU6ZCx0b2tlblNlcGFyYXRvcjpwLGZpbmRBbGxNYXRjaGVzOnksbWluTWF0Y2hDaGFyTGVuZ3RoOmssaWQ6eCxrZXlzOk0saW5jbHVkZU1hdGNoZXM6eixpbmNsdWRlU2NvcmU6SyxzaG91bGRTb3J0OkwsZ2V0Rm46QSxzb3J0Rm46SSx2ZXJib3NlOkosdG9rZW5pemU6aixtYXRjaEFsbFRva2VuczpGfSx0aGlzLnNldENvbGxlY3Rpb24odCl9dmFyIHQsbixjO3JldHVybiB0PWUsKG49W3trZXk6XCJzZXRDb2xsZWN0aW9uXCIsdmFsdWU6ZnVuY3Rpb24oZSl7cmV0dXJuIHRoaXMubGlzdD1lLGV9fSx7a2V5Olwic2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9YXJndW1lbnRzLmxlbmd0aD4xJiZ2b2lkIDAhPT1hcmd1bWVudHNbMV0/YXJndW1lbnRzWzFdOntsaW1pdDohMX07dGhpcy5fbG9nKCctLS0tLS0tLS1cXG5TZWFyY2ggcGF0dGVybjogXCInLmNvbmNhdChlLCdcIicpKTt2YXIgbj10aGlzLl9wcmVwYXJlU2VhcmNoZXJzKGUpLHI9bi50b2tlblNlYXJjaGVycyxvPW4uZnVsbFNlYXJjaGVyLGk9dGhpcy5fc2VhcmNoKHIsbyksYT1pLndlaWdodHMscz1pLnJlc3VsdHM7cmV0dXJuIHRoaXMuX2NvbXB1dGVTY29yZShhLHMpLHRoaXMub3B0aW9ucy5zaG91bGRTb3J0JiZ0aGlzLl9zb3J0KHMpLHQubGltaXQmJlwibnVtYmVyXCI9PXR5cGVvZiB0LmxpbWl0JiYocz1zLnNsaWNlKDAsdC5saW1pdCkpLHRoaXMuX2Zvcm1hdChzKX19LHtrZXk6XCJfcHJlcGFyZVNlYXJjaGVyc1wiLHZhbHVlOmZ1bmN0aW9uKCl7dmFyIGU9YXJndW1lbnRzLmxlbmd0aD4wJiZ2b2lkIDAhPT1hcmd1bWVudHNbMF0/YXJndW1lbnRzWzBdOlwiXCIsdD1bXTtpZih0aGlzLm9wdGlvbnMudG9rZW5pemUpZm9yKHZhciBuPWUuc3BsaXQodGhpcy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKSxyPTAsbz1uLmxlbmd0aDtyPG87cis9MSl0LnB1c2gobmV3IGkobltyXSx0aGlzLm9wdGlvbnMpKTtyZXR1cm57dG9rZW5TZWFyY2hlcnM6dCxmdWxsU2VhcmNoZXI6bmV3IGkoZSx0aGlzLm9wdGlvbnMpfX19LHtrZXk6XCJfc2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10sdD1hcmd1bWVudHMubGVuZ3RoPjE/YXJndW1lbnRzWzFdOnZvaWQgMCxuPXRoaXMubGlzdCxyPXt9LG89W107aWYoXCJzdHJpbmdcIj09dHlwZW9mIG5bMF0pe2Zvcih2YXIgaT0wLGE9bi5sZW5ndGg7aTxhO2krPTEpdGhpcy5fYW5hbHl6ZSh7a2V5OlwiXCIsdmFsdWU6bltpXSxyZWNvcmQ6aSxpbmRleDppfSx7cmVzdWx0TWFwOnIscmVzdWx0czpvLHRva2VuU2VhcmNoZXJzOmUsZnVsbFNlYXJjaGVyOnR9KTtyZXR1cm57d2VpZ2h0czpudWxsLHJlc3VsdHM6b319Zm9yKHZhciBzPXt9LGM9MCxoPW4ubGVuZ3RoO2M8aDtjKz0xKWZvcih2YXIgbD1uW2NdLHU9MCxmPXRoaXMub3B0aW9ucy5rZXlzLmxlbmd0aDt1PGY7dSs9MSl7dmFyIGQ9dGhpcy5vcHRpb25zLmtleXNbdV07aWYoXCJzdHJpbmdcIiE9dHlwZW9mIGQpe2lmKHNbZC5uYW1lXT17d2VpZ2h0OjEtZC53ZWlnaHR8fDF9LGQud2VpZ2h0PD0wfHxkLndlaWdodD4xKXRocm93IG5ldyBFcnJvcihcIktleSB3ZWlnaHQgaGFzIHRvIGJlID4gMCBhbmQgPD0gMVwiKTtkPWQubmFtZX1lbHNlIHNbZF09e3dlaWdodDoxfTt0aGlzLl9hbmFseXplKHtrZXk6ZCx2YWx1ZTp0aGlzLm9wdGlvbnMuZ2V0Rm4obCxkKSxyZWNvcmQ6bCxpbmRleDpjfSx7cmVzdWx0TWFwOnIscmVzdWx0czpvLHRva2VuU2VhcmNoZXJzOmUsZnVsbFNlYXJjaGVyOnR9KX1yZXR1cm57d2VpZ2h0czpzLHJlc3VsdHM6b319fSx7a2V5OlwiX2FuYWx5emVcIix2YWx1ZTpmdW5jdGlvbihlLHQpe3ZhciBuPWUua2V5LHI9ZS5hcnJheUluZGV4LG89dm9pZCAwPT09cj8tMTpyLGk9ZS52YWx1ZSxhPWUucmVjb3JkLGM9ZS5pbmRleCxoPXQudG9rZW5TZWFyY2hlcnMsbD12b2lkIDA9PT1oP1tdOmgsdT10LmZ1bGxTZWFyY2hlcixmPXZvaWQgMD09PXU/W106dSxkPXQucmVzdWx0TWFwLHY9dm9pZCAwPT09ZD97fTpkLHA9dC5yZXN1bHRzLGc9dm9pZCAwPT09cD9bXTpwO2lmKG51bGwhPWkpe3ZhciB5PSExLG09LTEsaz0wO2lmKFwic3RyaW5nXCI9PXR5cGVvZiBpKXt0aGlzLl9sb2coXCJcXG5LZXk6IFwiLmNvbmNhdChcIlwiPT09bj9cIi1cIjpuKSk7dmFyIFM9Zi5zZWFyY2goaSk7aWYodGhpcy5fbG9nKCdGdWxsIHRleHQ6IFwiJy5jb25jYXQoaSwnXCIsIHNjb3JlOiAnKS5jb25jYXQoUy5zY29yZSkpLHRoaXMub3B0aW9ucy50b2tlbml6ZSl7Zm9yKHZhciB4PWkuc3BsaXQodGhpcy5vcHRpb25zLnRva2VuU2VwYXJhdG9yKSxiPVtdLE09MDtNPGwubGVuZ3RoO00rPTEpe3ZhciBfPWxbTV07dGhpcy5fbG9nKCdcXG5QYXR0ZXJuOiBcIicuY29uY2F0KF8ucGF0dGVybiwnXCInKSk7Zm9yKHZhciBMPSExLHc9MDt3PHgubGVuZ3RoO3crPTEpe3ZhciBBPXhbd10sQz1fLnNlYXJjaChBKSxJPXt9O0MuaXNNYXRjaD8oSVtBXT1DLnNjb3JlLHk9ITAsTD0hMCxiLnB1c2goQy5zY29yZSkpOihJW0FdPTEsdGhpcy5vcHRpb25zLm1hdGNoQWxsVG9rZW5zfHxiLnB1c2goMSkpLHRoaXMuX2xvZygnVG9rZW46IFwiJy5jb25jYXQoQSwnXCIsIHNjb3JlOiAnKS5jb25jYXQoSVtBXSkpfUwmJihrKz0xKX1tPWJbMF07Zm9yKHZhciBPPWIubGVuZ3RoLGo9MTtqPE87ais9MSltKz1iW2pdO20vPU8sdGhpcy5fbG9nKFwiVG9rZW4gc2NvcmUgYXZlcmFnZTpcIixtKX12YXIgUD1TLnNjb3JlO20+LTEmJihQPShQK20pLzIpLHRoaXMuX2xvZyhcIlNjb3JlIGF2ZXJhZ2U6XCIsUCk7dmFyIEY9IXRoaXMub3B0aW9ucy50b2tlbml6ZXx8IXRoaXMub3B0aW9ucy5tYXRjaEFsbFRva2Vuc3x8az49bC5sZW5ndGg7aWYodGhpcy5fbG9nKFwiXFxuQ2hlY2sgTWF0Y2hlczogXCIuY29uY2F0KEYpKSwoeXx8Uy5pc01hdGNoKSYmRil7dmFyIFQ9dltjXTtUP1Qub3V0cHV0LnB1c2goe2tleTpuLGFycmF5SW5kZXg6byx2YWx1ZTppLHNjb3JlOlAsbWF0Y2hlZEluZGljZXM6Uy5tYXRjaGVkSW5kaWNlc30pOih2W2NdPXtpdGVtOmEsb3V0cHV0Olt7a2V5Om4sYXJyYXlJbmRleDpvLHZhbHVlOmksc2NvcmU6UCxtYXRjaGVkSW5kaWNlczpTLm1hdGNoZWRJbmRpY2VzfV19LGcucHVzaCh2W2NdKSl9fWVsc2UgaWYocyhpKSlmb3IodmFyIHo9MCxFPWkubGVuZ3RoO3o8RTt6Kz0xKXRoaXMuX2FuYWx5emUoe2tleTpuLGFycmF5SW5kZXg6eix2YWx1ZTppW3pdLHJlY29yZDphLGluZGV4OmN9LHtyZXN1bHRNYXA6dixyZXN1bHRzOmcsdG9rZW5TZWFyY2hlcnM6bCxmdWxsU2VhcmNoZXI6Zn0pfX19LHtrZXk6XCJfY29tcHV0ZVNjb3JlXCIsdmFsdWU6ZnVuY3Rpb24oZSx0KXt0aGlzLl9sb2coXCJcXG5cXG5Db21wdXRpbmcgc2NvcmU6XFxuXCIpO2Zvcih2YXIgbj0wLHI9dC5sZW5ndGg7bjxyO24rPTEpe2Zvcih2YXIgbz10W25dLm91dHB1dCxpPW8ubGVuZ3RoLGE9MSxzPTEsYz0wO2M8aTtjKz0xKXt2YXIgaD1lP2Vbb1tjXS5rZXldLndlaWdodDoxLGw9KDE9PT1oP29bY10uc2NvcmU6b1tjXS5zY29yZXx8LjAwMSkqaDsxIT09aD9zPU1hdGgubWluKHMsbCk6KG9bY10ublNjb3JlPWwsYSo9bCl9dFtuXS5zY29yZT0xPT09cz9hOnMsdGhpcy5fbG9nKHRbbl0pfX19LHtrZXk6XCJfc29ydFwiLHZhbHVlOmZ1bmN0aW9uKGUpe3RoaXMuX2xvZyhcIlxcblxcblNvcnRpbmcuLi4uXCIpLGUuc29ydCh0aGlzLm9wdGlvbnMuc29ydEZuKX19LHtrZXk6XCJfZm9ybWF0XCIsdmFsdWU6ZnVuY3Rpb24oZSl7dmFyIHQ9W107aWYodGhpcy5vcHRpb25zLnZlcmJvc2Upe3ZhciBuPVtdO3RoaXMuX2xvZyhcIlxcblxcbk91dHB1dDpcXG5cXG5cIixKU09OLnN0cmluZ2lmeShlLGZ1bmN0aW9uKGUsdCl7aWYoXCJvYmplY3RcIj09PXIodCkmJm51bGwhPT10KXtpZigtMSE9PW4uaW5kZXhPZih0KSlyZXR1cm47bi5wdXNoKHQpfXJldHVybiB0fSkpLG49bnVsbH12YXIgbz1bXTt0aGlzLm9wdGlvbnMuaW5jbHVkZU1hdGNoZXMmJm8ucHVzaChmdW5jdGlvbihlLHQpe3ZhciBuPWUub3V0cHV0O3QubWF0Y2hlcz1bXTtmb3IodmFyIHI9MCxvPW4ubGVuZ3RoO3I8bztyKz0xKXt2YXIgaT1uW3JdO2lmKDAhPT1pLm1hdGNoZWRJbmRpY2VzLmxlbmd0aCl7dmFyIGE9e2luZGljZXM6aS5tYXRjaGVkSW5kaWNlcyx2YWx1ZTppLnZhbHVlfTtpLmtleSYmKGEua2V5PWkua2V5KSxpLmhhc093blByb3BlcnR5KFwiYXJyYXlJbmRleFwiKSYmaS5hcnJheUluZGV4Pi0xJiYoYS5hcnJheUluZGV4PWkuYXJyYXlJbmRleCksdC5tYXRjaGVzLnB1c2goYSl9fX0pLHRoaXMub3B0aW9ucy5pbmNsdWRlU2NvcmUmJm8ucHVzaChmdW5jdGlvbihlLHQpe3Quc2NvcmU9ZS5zY29yZX0pO2Zvcih2YXIgaT0wLGE9ZS5sZW5ndGg7aTxhO2krPTEpe3ZhciBzPWVbaV07aWYodGhpcy5vcHRpb25zLmlkJiYocy5pdGVtPXRoaXMub3B0aW9ucy5nZXRGbihzLml0ZW0sdGhpcy5vcHRpb25zLmlkKVswXSksby5sZW5ndGgpe2Zvcih2YXIgYz17aXRlbTpzLml0ZW19LGg9MCxsPW8ubGVuZ3RoO2g8bDtoKz0xKW9baF0ocyxjKTt0LnB1c2goYyl9ZWxzZSB0LnB1c2gocy5pdGVtKX1yZXR1cm4gdH19LHtrZXk6XCJfbG9nXCIsdmFsdWU6ZnVuY3Rpb24oKXt2YXIgZTt0aGlzLm9wdGlvbnMudmVyYm9zZSYmKGU9Y29uc29sZSkubG9nLmFwcGx5KGUsYXJndW1lbnRzKX19XSkmJm8odC5wcm90b3R5cGUsbiksYyYmbyh0LGMpLGV9KCk7ZS5leHBvcnRzPWN9LGZ1bmN0aW9uKGUsdCxuKXtmdW5jdGlvbiByKGUsdCl7Zm9yKHZhciBuPTA7bjx0Lmxlbmd0aDtuKyspe3ZhciByPXRbbl07ci5lbnVtZXJhYmxlPXIuZW51bWVyYWJsZXx8ITEsci5jb25maWd1cmFibGU9ITAsXCJ2YWx1ZVwiaW4gciYmKHIud3JpdGFibGU9ITApLE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLHIua2V5LHIpfX12YXIgbz1uKDMpLGk9big0KSxhPW4oNykscz1mdW5jdGlvbigpe2Z1bmN0aW9uIGUodCxuKXt2YXIgcj1uLmxvY2F0aW9uLG89dm9pZCAwPT09cj8wOnIsaT1uLmRpc3RhbmNlLHM9dm9pZCAwPT09aT8xMDA6aSxjPW4udGhyZXNob2xkLGg9dm9pZCAwPT09Yz8uNjpjLGw9bi5tYXhQYXR0ZXJuTGVuZ3RoLHU9dm9pZCAwPT09bD8zMjpsLGY9bi5pc0Nhc2VTZW5zaXRpdmUsZD12b2lkIDAhPT1mJiZmLHY9bi50b2tlblNlcGFyYXRvcixwPXZvaWQgMD09PXY/LyArL2c6dixnPW4uZmluZEFsbE1hdGNoZXMseT12b2lkIDAhPT1nJiZnLG09bi5taW5NYXRjaENoYXJMZW5ndGgsaz12b2lkIDA9PT1tPzE6bTshZnVuY3Rpb24oZSx0KXtpZighKGUgaW5zdGFuY2VvZiB0KSl0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpfSh0aGlzLGUpLHRoaXMub3B0aW9ucz17bG9jYXRpb246byxkaXN0YW5jZTpzLHRocmVzaG9sZDpoLG1heFBhdHRlcm5MZW5ndGg6dSxpc0Nhc2VTZW5zaXRpdmU6ZCx0b2tlblNlcGFyYXRvcjpwLGZpbmRBbGxNYXRjaGVzOnksbWluTWF0Y2hDaGFyTGVuZ3RoOmt9LHRoaXMucGF0dGVybj10aGlzLm9wdGlvbnMuaXNDYXNlU2Vuc2l0aXZlP3Q6dC50b0xvd2VyQ2FzZSgpLHRoaXMucGF0dGVybi5sZW5ndGg8PXUmJih0aGlzLnBhdHRlcm5BbHBoYWJldD1hKHRoaXMucGF0dGVybikpfXZhciB0LG4scztyZXR1cm4gdD1lLChuPVt7a2V5Olwic2VhcmNoXCIsdmFsdWU6ZnVuY3Rpb24oZSl7aWYodGhpcy5vcHRpb25zLmlzQ2FzZVNlbnNpdGl2ZXx8KGU9ZS50b0xvd2VyQ2FzZSgpKSx0aGlzLnBhdHRlcm49PT1lKXJldHVybntpc01hdGNoOiEwLHNjb3JlOjAsbWF0Y2hlZEluZGljZXM6W1swLGUubGVuZ3RoLTFdXX07dmFyIHQ9dGhpcy5vcHRpb25zLG49dC5tYXhQYXR0ZXJuTGVuZ3RoLHI9dC50b2tlblNlcGFyYXRvcjtpZih0aGlzLnBhdHRlcm4ubGVuZ3RoPm4pcmV0dXJuIG8oZSx0aGlzLnBhdHRlcm4scik7dmFyIGE9dGhpcy5vcHRpb25zLHM9YS5sb2NhdGlvbixjPWEuZGlzdGFuY2UsaD1hLnRocmVzaG9sZCxsPWEuZmluZEFsbE1hdGNoZXMsdT1hLm1pbk1hdGNoQ2hhckxlbmd0aDtyZXR1cm4gaShlLHRoaXMucGF0dGVybix0aGlzLnBhdHRlcm5BbHBoYWJldCx7bG9jYXRpb246cyxkaXN0YW5jZTpjLHRocmVzaG9sZDpoLGZpbmRBbGxNYXRjaGVzOmwsbWluTWF0Y2hDaGFyTGVuZ3RoOnV9KX19XSkmJnIodC5wcm90b3R5cGUsbikscyYmcih0LHMpLGV9KCk7ZS5leHBvcnRzPXN9LGZ1bmN0aW9uKGUsdCl7dmFyIG49L1tcXC1cXFtcXF1cXC9cXHtcXH1cXChcXClcXCpcXCtcXD9cXC5cXFxcXFxeXFwkXFx8XS9nO2UuZXhwb3J0cz1mdW5jdGlvbihlLHQpe3ZhciByPWFyZ3VtZW50cy5sZW5ndGg+MiYmdm9pZCAwIT09YXJndW1lbnRzWzJdP2FyZ3VtZW50c1syXTovICsvZyxvPW5ldyBSZWdFeHAodC5yZXBsYWNlKG4sXCJcXFxcJCZcIikucmVwbGFjZShyLFwifFwiKSksaT1lLm1hdGNoKG8pLGE9ISFpLHM9W107aWYoYSlmb3IodmFyIGM9MCxoPWkubGVuZ3RoO2M8aDtjKz0xKXt2YXIgbD1pW2NdO3MucHVzaChbZS5pbmRleE9mKGwpLGwubGVuZ3RoLTFdKX1yZXR1cm57c2NvcmU6YT8uNToxLGlzTWF0Y2g6YSxtYXRjaGVkSW5kaWNlczpzfX19LGZ1bmN0aW9uKGUsdCxuKXt2YXIgcj1uKDUpLG89big2KTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0LG4saSl7Zm9yKHZhciBhPWkubG9jYXRpb24scz12b2lkIDA9PT1hPzA6YSxjPWkuZGlzdGFuY2UsaD12b2lkIDA9PT1jPzEwMDpjLGw9aS50aHJlc2hvbGQsdT12b2lkIDA9PT1sPy42OmwsZj1pLmZpbmRBbGxNYXRjaGVzLGQ9dm9pZCAwIT09ZiYmZix2PWkubWluTWF0Y2hDaGFyTGVuZ3RoLHA9dm9pZCAwPT09dj8xOnYsZz1zLHk9ZS5sZW5ndGgsbT11LGs9ZS5pbmRleE9mKHQsZyksUz10Lmxlbmd0aCx4PVtdLGI9MDtiPHk7Yis9MSl4W2JdPTA7aWYoLTEhPT1rKXt2YXIgTT1yKHQse2Vycm9yczowLGN1cnJlbnRMb2NhdGlvbjprLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk7aWYobT1NYXRoLm1pbihNLG0pLC0xIT09KGs9ZS5sYXN0SW5kZXhPZih0LGcrUykpKXt2YXIgXz1yKHQse2Vycm9yczowLGN1cnJlbnRMb2NhdGlvbjprLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk7bT1NYXRoLm1pbihfLG0pfX1rPS0xO2Zvcih2YXIgTD1bXSx3PTEsQT1TK3ksQz0xPDxTLTEsST0wO0k8UztJKz0xKXtmb3IodmFyIE89MCxqPUE7TzxqOyl7cih0LHtlcnJvcnM6SSxjdXJyZW50TG9jYXRpb246ZytqLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk8PW0/Tz1qOkE9aixqPU1hdGguZmxvb3IoKEEtTykvMitPKX1BPWo7dmFyIFA9TWF0aC5tYXgoMSxnLWorMSksRj1kP3k6TWF0aC5taW4oZytqLHkpK1MsVD1BcnJheShGKzIpO1RbRisxXT0oMTw8SSktMTtmb3IodmFyIHo9Rjt6Pj1QO3otPTEpe3ZhciBFPXotMSxLPW5bZS5jaGFyQXQoRSldO2lmKEsmJih4W0VdPTEpLFRbel09KFRbeisxXTw8MXwxKSZLLDAhPT1JJiYoVFt6XXw9KExbeisxXXxMW3pdKTw8MXwxfExbeisxXSksVFt6XSZDJiYodz1yKHQse2Vycm9yczpJLGN1cnJlbnRMb2NhdGlvbjpFLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSkpPD1tKXtpZihtPXcsKGs9RSk8PWcpYnJlYWs7UD1NYXRoLm1heCgxLDIqZy1rKX19aWYocih0LHtlcnJvcnM6SSsxLGN1cnJlbnRMb2NhdGlvbjpnLGV4cGVjdGVkTG9jYXRpb246ZyxkaXN0YW5jZTpofSk+bSlicmVhaztMPVR9cmV0dXJue2lzTWF0Y2g6az49MCxzY29yZTowPT09dz8uMDAxOncsbWF0Y2hlZEluZGljZXM6byh4LHApfX19LGZ1bmN0aW9uKGUsdCl7ZS5leHBvcnRzPWZ1bmN0aW9uKGUsdCl7dmFyIG49dC5lcnJvcnMscj12b2lkIDA9PT1uPzA6bixvPXQuY3VycmVudExvY2F0aW9uLGk9dm9pZCAwPT09bz8wOm8sYT10LmV4cGVjdGVkTG9jYXRpb24scz12b2lkIDA9PT1hPzA6YSxjPXQuZGlzdGFuY2UsaD12b2lkIDA9PT1jPzEwMDpjLGw9ci9lLmxlbmd0aCx1PU1hdGguYWJzKHMtaSk7cmV0dXJuIGg/bCt1L2g6dT8xOmx9fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbigpe2Zvcih2YXIgZT1hcmd1bWVudHMubGVuZ3RoPjAmJnZvaWQgMCE9PWFyZ3VtZW50c1swXT9hcmd1bWVudHNbMF06W10sdD1hcmd1bWVudHMubGVuZ3RoPjEmJnZvaWQgMCE9PWFyZ3VtZW50c1sxXT9hcmd1bWVudHNbMV06MSxuPVtdLHI9LTEsbz0tMSxpPTAsYT1lLmxlbmd0aDtpPGE7aSs9MSl7dmFyIHM9ZVtpXTtzJiYtMT09PXI/cj1pOnN8fC0xPT09cnx8KChvPWktMSktcisxPj10JiZuLnB1c2goW3Isb10pLHI9LTEpfXJldHVybiBlW2ktMV0mJmktcj49dCYmbi5wdXNoKFtyLGktMV0pLG59fSxmdW5jdGlvbihlLHQpe2UuZXhwb3J0cz1mdW5jdGlvbihlKXtmb3IodmFyIHQ9e30sbj1lLmxlbmd0aCxyPTA7cjxuO3IrPTEpdFtlLmNoYXJBdChyKV09MDtmb3IodmFyIG89MDtvPG47bys9MSl0W2UuY2hhckF0KG8pXXw9MTw8bi1vLTE7cmV0dXJuIHR9fSxmdW5jdGlvbihlLHQsbil7dmFyIHI9bigwKTtlLmV4cG9ydHM9ZnVuY3Rpb24oZSx0KXtyZXR1cm4gZnVuY3Rpb24gZSh0LG4sbyl7aWYobil7dmFyIGk9bi5pbmRleE9mKFwiLlwiKSxhPW4scz1udWxsOy0xIT09aSYmKGE9bi5zbGljZSgwLGkpLHM9bi5zbGljZShpKzEpKTt2YXIgYz10W2FdO2lmKG51bGwhPWMpaWYoc3x8XCJzdHJpbmdcIiE9dHlwZW9mIGMmJlwibnVtYmVyXCIhPXR5cGVvZiBjKWlmKHIoYykpZm9yKHZhciBoPTAsbD1jLmxlbmd0aDtoPGw7aCs9MSllKGNbaF0scyxvKTtlbHNlIHMmJmUoYyxzLG8pO2Vsc2Ugby5wdXNoKGMudG9TdHJpbmcoKSl9ZWxzZSBvLnB1c2godCk7cmV0dXJuIG99KGUsdCxbXSl9fV0pfSk7IiwiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IChjKSAyMDE4IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqIFRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG4gKiBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcbiAqIFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdFxuICogaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbiAqIENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG4gKiBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0XG4gKiBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiAqL1xuXG5pbXBvcnQge0F0dHJpYnV0ZVBhcnQsIGRpcmVjdGl2ZSwgUGFydCwgUHJvcGVydHlQYXJ0fSBmcm9tICcuLi9saXQtaHRtbC5qcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3R5bGVJbmZvIHtcbiAgcmVhZG9ubHkgW25hbWU6IHN0cmluZ106IHN0cmluZztcbn1cblxuLyoqXG4gKiBTdG9yZXMgdGhlIFN0eWxlSW5mbyBvYmplY3QgYXBwbGllZCB0byBhIGdpdmVuIEF0dHJpYnV0ZVBhcnQuXG4gKiBVc2VkIHRvIHVuc2V0IGV4aXN0aW5nIHZhbHVlcyB3aGVuIGEgbmV3IFN0eWxlSW5mbyBvYmplY3QgaXMgYXBwbGllZC5cbiAqL1xuY29uc3Qgc3R5bGVNYXBDYWNoZSA9IG5ldyBXZWFrTWFwPEF0dHJpYnV0ZVBhcnQsIFN0eWxlSW5mbz4oKTtcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGFwcGxpZXMgQ1NTIHByb3BlcnRpZXMgdG8gYW4gZWxlbWVudC5cbiAqXG4gKiBgc3R5bGVNYXBgIGNhbiBvbmx5IGJlIHVzZWQgaW4gdGhlIGBzdHlsZWAgYXR0cmlidXRlIGFuZCBtdXN0IGJlIHRoZSBvbmx5XG4gKiBleHByZXNzaW9uIGluIHRoZSBhdHRyaWJ1dGUuIEl0IHRha2VzIHRoZSBwcm9wZXJ0eSBuYW1lcyBpbiB0aGUgYHN0eWxlSW5mb2BcbiAqIG9iamVjdCBhbmQgYWRkcyB0aGUgcHJvcGVydHkgdmFsdWVzIGFzIENTUyBwcm9wZXJ0ZXMuIFByb3BlcnR5IG5hbWVzIHdpdGhcbiAqIGRhc2hlcyAoYC1gKSBhcmUgYXNzdW1lZCB0byBiZSB2YWxpZCBDU1MgcHJvcGVydHkgbmFtZXMgYW5kIHNldCBvbiB0aGVcbiAqIGVsZW1lbnQncyBzdHlsZSBvYmplY3QgdXNpbmcgYHNldFByb3BlcnR5KClgLiBOYW1lcyB3aXRob3V0IGRhc2hlcyBhcmVcbiAqIGFzc3VtZWQgdG8gYmUgY2FtZWxDYXNlZCBKYXZhU2NyaXB0IHByb3BlcnR5IG5hbWVzIGFuZCBzZXQgb24gdGhlIGVsZW1lbnQnc1xuICogc3R5bGUgb2JqZWN0IHVzaW5nIHByb3BlcnR5IGFzc2lnbm1lbnQsIGFsbG93aW5nIHRoZSBzdHlsZSBvYmplY3QgdG9cbiAqIHRyYW5zbGF0ZSBKYXZhU2NyaXB0LXN0eWxlIG5hbWVzIHRvIENTUyBwcm9wZXJ0eSBuYW1lcy5cbiAqXG4gKiBGb3IgZXhhbXBsZSBgc3R5bGVNYXAoe2JhY2tncm91bmRDb2xvcjogJ3JlZCcsICdib3JkZXItdG9wJzogJzVweCcsICctLXNpemUnOlxuICogJzAnfSlgIHNldHMgdGhlIGBiYWNrZ3JvdW5kLWNvbG9yYCwgYGJvcmRlci10b3BgIGFuZCBgLS1zaXplYCBwcm9wZXJ0aWVzLlxuICpcbiAqIEBwYXJhbSBzdHlsZUluZm8ge1N0eWxlSW5mb31cbiAqL1xuZXhwb3J0IGNvbnN0IHN0eWxlTWFwID0gZGlyZWN0aXZlKChzdHlsZUluZm86IFN0eWxlSW5mbykgPT4gKHBhcnQ6IFBhcnQpID0+IHtcbiAgaWYgKCEocGFydCBpbnN0YW5jZW9mIEF0dHJpYnV0ZVBhcnQpIHx8IChwYXJ0IGluc3RhbmNlb2YgUHJvcGVydHlQYXJ0KSB8fFxuICAgICAgcGFydC5jb21taXR0ZXIubmFtZSAhPT0gJ3N0eWxlJyB8fCBwYXJ0LmNvbW1pdHRlci5wYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnVGhlIGBzdHlsZU1hcGAgZGlyZWN0aXZlIG11c3QgYmUgdXNlZCBpbiB0aGUgc3R5bGUgYXR0cmlidXRlICcgK1xuICAgICAgICAnYW5kIG11c3QgYmUgdGhlIG9ubHkgcGFydCBpbiB0aGUgYXR0cmlidXRlLicpO1xuICB9XG5cbiAgY29uc3Qge2NvbW1pdHRlcn0gPSBwYXJ0O1xuICBjb25zdCB7c3R5bGV9ID0gY29tbWl0dGVyLmVsZW1lbnQgYXMgSFRNTEVsZW1lbnQ7XG5cbiAgLy8gSGFuZGxlIHN0YXRpYyBzdHlsZXMgdGhlIGZpcnN0IHRpbWUgd2Ugc2VlIGEgUGFydFxuICBpZiAoIXN0eWxlTWFwQ2FjaGUuaGFzKHBhcnQpKSB7XG4gICAgc3R5bGUuY3NzVGV4dCA9IGNvbW1pdHRlci5zdHJpbmdzLmpvaW4oJyAnKTtcbiAgfVxuXG4gIC8vIFJlbW92ZSBvbGQgcHJvcGVydGllcyB0aGF0IG5vIGxvbmdlciBleGlzdCBpbiBzdHlsZUluZm9cbiAgY29uc3Qgb2xkSW5mbyA9IHN0eWxlTWFwQ2FjaGUuZ2V0KHBhcnQpO1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gb2xkSW5mbykge1xuICAgIGlmICghKG5hbWUgaW4gc3R5bGVJbmZvKSkge1xuICAgICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6bm8tYW55XG4gICAgICAgIChzdHlsZSBhcyBhbnkpW25hbWVdID0gbnVsbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN0eWxlLnJlbW92ZVByb3BlcnR5KG5hbWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8vIEFkZCBvciB1cGRhdGUgcHJvcGVydGllc1xuICBmb3IgKGNvbnN0IG5hbWUgaW4gc3R5bGVJbmZvKSB7XG4gICAgaWYgKG5hbWUuaW5kZXhPZignLScpID09PSAtMSkge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWFueVxuICAgICAgKHN0eWxlIGFzIGFueSlbbmFtZV0gPSBzdHlsZUluZm9bbmFtZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLnNldFByb3BlcnR5KG5hbWUsIHN0eWxlSW5mb1tuYW1lXSk7XG4gICAgfVxuICB9XG4gIHN0eWxlTWFwQ2FjaGUuc2V0KHBhcnQsIHN0eWxlSW5mbyk7XG59KTtcbiIsImZ1bmN0aW9uIGFyZUlucHV0c0VxdWFsKG5ld0lucHV0cywgbGFzdElucHV0cykge1xuICBpZiAobmV3SW5wdXRzLmxlbmd0aCAhPT0gbGFzdElucHV0cy5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBmb3IgKHZhciBpID0gMDsgaSA8IG5ld0lucHV0cy5sZW5ndGg7IGkrKykge1xuICAgIGlmIChuZXdJbnB1dHNbaV0gIT09IGxhc3RJbnB1dHNbaV0pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gaW5kZXggKHJlc3VsdEZuLCBpc0VxdWFsKSB7XG4gIGlmIChpc0VxdWFsID09PSB2b2lkIDApIHtcbiAgICBpc0VxdWFsID0gYXJlSW5wdXRzRXF1YWw7XG4gIH1cblxuICB2YXIgbGFzdFRoaXM7XG4gIHZhciBsYXN0QXJncyA9IFtdO1xuICB2YXIgbGFzdFJlc3VsdDtcbiAgdmFyIGNhbGxlZE9uY2UgPSBmYWxzZTtcblxuICB2YXIgcmVzdWx0ID0gZnVuY3Rpb24gcmVzdWx0KCkge1xuICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBuZXdBcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgbmV3QXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICB9XG5cbiAgICBpZiAoY2FsbGVkT25jZSAmJiBsYXN0VGhpcyA9PT0gdGhpcyAmJiBpc0VxdWFsKG5ld0FyZ3MsIGxhc3RBcmdzKSkge1xuICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgfVxuXG4gICAgbGFzdFJlc3VsdCA9IHJlc3VsdEZuLmFwcGx5KHRoaXMsIG5ld0FyZ3MpO1xuICAgIGNhbGxlZE9uY2UgPSB0cnVlO1xuICAgIGxhc3RUaGlzID0gdGhpcztcbiAgICBsYXN0QXJncyA9IG5ld0FyZ3M7XG4gICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5kZXg7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQW9DQTtBQXBDQTs7Ozs7Ozs7Ozs7O0FDNUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBQUE7QUFjQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUNBO0FBQ0E7QUFFQTtBQUVBO0FBTEE7Ozs7Ozs7Ozs7O0FDcEVBOzs7Ozs7OztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUFjQTtBQU1BOzs7OztBQUlBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlCQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==