(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog~panel-history~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/common/datetime/format_date.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_date.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleDateStringSupportsOptions() {
  try {
    new Date().toLocaleDateString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleDateStringSupportsOptions() ? function (dateObj, locales) {
  return dateObj.toLocaleDateString(locales, {
    year: "numeric",
    month: "long",
    day: "numeric"
  });
} : function (dateObj) {
  return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumDate");
});

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

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions() ? function (dateObj, locales) {
  return dateObj.toLocaleTimeString(locales, {
    hour: "numeric",
    minute: "2-digit"
  });
} : function (dateObj) {
  return fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime");
});

/***/ }),

/***/ "./src/common/entity/compute_state_display.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime/format_time */ "./src/common/datetime/format_time.ts");




/* harmony default export */ __webpack_exports__["default"] = (function (localize, stateObj, language) {
  var display;
  var domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj);

  if (domain === "binary_sensor") {
    // Try device class translation, then default binary sensor translation
    if (stateObj.attributes.device_class) {
      display = localize("state.".concat(domain, ".").concat(stateObj.attributes.device_class, ".").concat(stateObj.state));
    }

    if (!display) {
      display = localize("state.".concat(domain, ".default.").concat(stateObj.state));
    }
  } else if (stateObj.attributes.unit_of_measurement && !["unknown", "unavailable"].includes(stateObj.state)) {
    display = stateObj.state + " " + stateObj.attributes.unit_of_measurement;
  } else if (domain === "input_datetime") {
    var date;

    if (!stateObj.attributes.has_time) {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
      display = Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"])(date, language);
    } else if (!stateObj.attributes.has_date) {
      var now = new Date();
      date = new Date( // Due to bugs.chromium.org/p/chromium/issues/detail?id=797548
      // don't use artificial 1970 year.
      now.getFullYear(), now.getMonth(), now.getDay(), stateObj.attributes.hour, stateObj.attributes.minute);
      display = Object(_datetime_format_time__WEBPACK_IMPORTED_MODULE_3__["default"])(date, language);
    } else {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day, stateObj.attributes.hour, stateObj.attributes.minute);
      display = Object(_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__["default"])(date, language);
    }
  } else if (domain === "zwave") {
    if (["initializing", "dead"].includes(stateObj.state)) {
      display = localize("state.zwave.query_stage.".concat(stateObj.state), "query_stage", stateObj.attributes.query_stage);
    } else {
      display = localize("state.zwave.default.".concat(stateObj.state));
    }
  } else {
    display = localize("state.".concat(domain, ".").concat(stateObj.state));
  } // Fall back to default, component backend translation, or raw state if nothing else matches.


  if (!display) {
    display = localize("state.default.".concat(stateObj.state)) || localize("component.".concat(domain, ".state.").concat(stateObj.state)) || stateObj.state;
  }

  return display;
});

/***/ }),

/***/ "./src/components/entity/ha-chart-base.js":
/*!************************************************!*\
  !*** ./src/components/entity/ha-chart-base.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n        .chartHeader {\n          padding: 6px 0 0 0;\n          width: 100%;\n          display: flex;\n          flex-direction: row;\n        }\n        .chartHeader > div {\n          vertical-align: top;\n          padding: 0 8px;\n        }\n        .chartHeader > div.chartTitle {\n          padding-top: 8px;\n          flex: 0 0 0;\n          max-width: 30%;\n        }\n        .chartHeader > div.chartLegend {\n          flex: 1 1;\n          min-width: 70%;\n        }\n        :root {\n          user-select: none;\n          -moz-user-select: none;\n          -webkit-user-select: none;\n          -ms-user-select: none;\n        }\n        .chartTooltip {\n          font-size: 90%;\n          opacity: 1;\n          position: absolute;\n          background: rgba(80, 80, 80, 0.9);\n          color: white;\n          border-radius: 3px;\n          pointer-events: none;\n          transform: translate(-50%, 12px);\n          z-index: 1000;\n          width: 200px;\n          transition: opacity 0.15s ease-in-out;\n        }\n        :host([rtl]) .chartTooltip {\n          direction: rtl;\n        }\n        .chartLegend ul,\n        .chartTooltip ul {\n          display: inline-block;\n          padding: 0 0px;\n          margin: 5px 0 0 0;\n          width: 100%;\n        }\n        .chartTooltip li {\n          display: block;\n          white-space: pre-line;\n        }\n        .chartTooltip .title {\n          text-align: center;\n          font-weight: 500;\n        }\n        .chartLegend li {\n          display: inline-block;\n          padding: 0 6px;\n          max-width: 49%;\n          text-overflow: ellipsis;\n          white-space: nowrap;\n          overflow: hidden;\n          box-sizing: border-box;\n        }\n        .chartLegend li:nth-child(odd):last-of-type {\n          /* Make last item take full width if it is odd-numbered. */\n          max-width: 100%;\n        }\n        .chartLegend li[data-hidden] {\n          text-decoration: line-through;\n        }\n        .chartLegend em,\n        .chartTooltip em {\n          border-radius: 5px;\n          display: inline-block;\n          height: 10px;\n          margin-right: 4px;\n          width: 10px;\n        }\n        :host([rtl]) .chartTooltip em {\n          margin-right: inherit;\n          margin-left: 4px;\n        }\n        paper-icon-button {\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template is=\"dom-if\" if=\"[[unit]]\">\n        <div class=\"chartHeader\">\n          <div class=\"chartTitle\">[[unit]]</div>\n          <div class=\"chartLegend\">\n            <ul>\n              <template is=\"dom-repeat\" items=\"[[metas]]\">\n                <li on-click=\"_legendClick\" data-hidden$=\"[[item.hidden]]\">\n                  <em style$=\"background-color:[[item.bgColor]]\"></em>\n                  [[item.label]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </template>\n      <div id=\"chartTarget\" style=\"height:40px; width:100%\">\n        <canvas id=\"chartCanvas\"></canvas>\n        <div\n          class$=\"chartTooltip [[tooltip.yAlign]]\"\n          style$=\"opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px\"\n        >\n          <div class=\"title\">[[tooltip.title]]</div>\n          <div>\n            <ul>\n              <template is=\"dom-repeat\" items=\"[[tooltip.lines]]\">\n                <li>\n                  <em style$=\"background-color:[[item.bgColor]]\"></em\n                  >[[item.text]]\n                </li>\n              </template>\n            </ul>\n          </div>\n        </div>\n      </div>\n    "]);

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








 // eslint-disable-next-line no-unused-vars

/* global Chart moment Color */

var scriptsLoaded = null;

var HaChartBase =
/*#__PURE__*/
function (_mixinBehaviors) {
  _inherits(HaChartBase, _mixinBehaviors);

  function HaChartBase() {
    _classCallCheck(this, HaChartBase);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaChartBase).apply(this, arguments));
  }

  _createClass(HaChartBase, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaChartBase.prototype), "connectedCallback", this).call(this);

      this._isAttached = true;
      this.onPropsChange();

      this._resizeListener = function () {
        _this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(_this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(10), function () {
          if (_this._isAttached) {
            _this.resizeChart();
          }
        });
      };

      if (typeof ResizeObserver === "function") {
        this.resizeObserver = new ResizeObserver(function (entries) {
          entries.forEach(function () {
            _this._resizeListener();
          });
        });
        this.resizeObserver.observe(this.$.chartTarget);
      } else {
        this.addEventListener("iron-resize", this._resizeListener);
      }

      if (scriptsLoaded === null) {
        scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart~panel-calendar"), __webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
      }

      scriptsLoaded.then(function (ChartModule) {
        _this.ChartClass = ChartModule["default"];

        _this.onPropsChange();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaChartBase.prototype), "disconnectedCallback", this).call(this);

      this._isAttached = false;

      if (this.resizeObserver) {
        this.resizeObserver.unobserve(this.$.chartTarget);
      }

      this.removeEventListener("iron-resize", this._resizeListener);

      if (this._resizeTimer !== undefined) {
        clearInterval(this._resizeTimer);
        this._resizeTimer = undefined;
      }
    }
  }, {
    key: "onPropsChange",
    value: function onPropsChange() {
      if (!this._isAttached || !this.ChartClass || !this.data) {
        return;
      }

      this.drawChart();
    }
  }, {
    key: "_customTooltips",
    value: function _customTooltips(tooltip) {
      // Hide if no tooltip
      if (tooltip.opacity === 0) {
        this.set(["tooltip", "opacity"], 0);
        return;
      } // Set caret Position


      if (tooltip.yAlign) {
        this.set(["tooltip", "yAlign"], tooltip.yAlign);
      } else {
        this.set(["tooltip", "yAlign"], "no-transform");
      }

      var title = tooltip.title ? tooltip.title[0] || "" : "";
      this.set(["tooltip", "title"], title);
      var bodyLines = tooltip.body.map(function (n) {
        return n.lines;
      }); // Set Text

      if (tooltip.body) {
        this.set(["tooltip", "lines"], bodyLines.map(function (body, i) {
          var colors = tooltip.labelColors[i];
          return {
            color: colors.borderColor,
            bgColor: colors.backgroundColor,
            text: body.join("\n")
          };
        }));
      }

      var parentWidth = this.$.chartTarget.clientWidth;
      var positionX = tooltip.caretX;
      var positionY = this._chart.canvas.offsetTop + tooltip.caretY;

      if (tooltip.caretX + 100 > parentWidth) {
        positionX = parentWidth - 100;
      } else if (tooltip.caretX < 100) {
        positionX = 100;
      }

      positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

      this.tooltip = Object.assign({}, this.tooltip, {
        opacity: 1,
        left: "".concat(positionX, "px"),
        top: "".concat(positionY, "px")
      });
    }
  }, {
    key: "_legendClick",
    value: function _legendClick(event) {
      event = event || window.event;
      event.stopPropagation();
      var target = event.target || event.srcElement;

      while (target.nodeName !== "LI") {
        // user clicked child, find parent LI
        target = target.parentElement;
      }

      var index = event.model.itemsIndex;

      var meta = this._chart.getDatasetMeta(index);

      meta.hidden = meta.hidden === null ? !this._chart.data.datasets[index].hidden : null;
      this.set(["metas", index, "hidden"], this._chart.isDatasetVisible(index) ? null : "hidden");

      this._chart.update();
    }
  }, {
    key: "_drawLegend",
    value: function _drawLegend() {
      var _this2 = this;

      var chart = this._chart; // New data for old graph. Keep metadata.

      var preserveVisibility = this._oldIdentifier && this.identifier === this._oldIdentifier;
      this._oldIdentifier = this.identifier;
      this.set("metas", this._chart.data.datasets.map(function (x, i) {
        return {
          label: x.label,
          color: x.color,
          bgColor: x.backgroundColor,
          hidden: preserveVisibility && i < _this2.metas.length ? _this2.metas[i].hidden : !chart.isDatasetVisible(i)
        };
      }));
      var updateNeeded = false;

      if (preserveVisibility) {
        for (var i = 0; i < this.metas.length; i++) {
          var meta = chart.getDatasetMeta(i);
          if (!!meta.hidden !== !!this.metas[i].hidden) updateNeeded = true;
          meta.hidden = this.metas[i].hidden ? true : null;
        }
      }

      if (updateNeeded) {
        chart.update();
      }

      this.unit = this.data.unit;
    }
  }, {
    key: "_formatTickValue",
    value: function _formatTickValue(value, index, values) {
      if (values.length === 0) {
        return value;
      }

      var date = new Date(values[index].value);
      return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__["default"])(date);
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this3 = this;

      var data = this.data.data;
      var ctx = this.$.chartCanvas;

      if ((!data.datasets || !data.datasets.length) && !this._chart) {
        return;
      }

      if (this.data.type !== "timeline" && data.datasets.length > 0) {
        var cnt = data.datasets.length;
        var colors = this.constructor.getColorList(cnt);

        for (var loopI = 0; loopI < cnt; loopI++) {
          data.datasets[loopI].borderColor = colors[loopI].rgbString();
          data.datasets[loopI].backgroundColor = colors[loopI].alpha(0.6).rgbaString();
        }
      }

      if (this._chart) {
        this._customTooltips({
          opacity: 0
        });

        this._chart.data = data;

        this._chart.update({
          duration: 0
        });

        if (this.isTimeline) {
          this._chart.options.scales.yAxes[0].gridLines.display = data.length > 1;
        } else if (this.data.legend === true) {
          this._drawLegend();
        }

        this.resizeChart();
      } else {
        if (!data.datasets) {
          return;
        }

        this._customTooltips({
          opacity: 0
        });

        var plugins = [{
          afterRender: function afterRender() {
            return _this3._setRendered(true);
          }
        }];
        var options = {
          responsive: true,
          maintainAspectRatio: false,
          animation: {
            duration: 0
          },
          hover: {
            animationDuration: 0
          },
          responsiveAnimationDuration: 0,
          tooltips: {
            enabled: false,
            custom: this._customTooltips.bind(this)
          },
          legend: {
            display: false
          },
          line: {
            spanGaps: true
          },
          elements: {
            font: "12px 'Roboto', 'sans-serif'"
          },
          ticks: {
            fontFamily: "'Roboto', 'sans-serif'"
          }
        };
        options = Chart.helpers.merge(options, this.data.options);
        options.scales.xAxes[0].ticks.callback = this._formatTickValue;

        if (this.data.type === "timeline") {
          this.set("isTimeline", true);

          if (this.data.colors !== undefined) {
            this._colorFunc = this.constructor.getColorGenerator(this.data.colors.staticColors, this.data.colors.staticColorIndex);
          }

          if (this._colorFunc !== undefined) {
            options.elements.colorFunction = this._colorFunc;
          }

          if (data.datasets.length === 1) {
            if (options.scales.yAxes[0].ticks) {
              options.scales.yAxes[0].ticks.display = false;
            } else {
              options.scales.yAxes[0].ticks = {
                display: false
              };
            }

            if (options.scales.yAxes[0].gridLines) {
              options.scales.yAxes[0].gridLines.display = false;
            } else {
              options.scales.yAxes[0].gridLines = {
                display: false
              };
            }
          }

          this.$.chartTarget.style.height = "50px";
        } else {
          this.$.chartTarget.style.height = "160px";
        }

        var chartData = {
          type: this.data.type,
          data: this.data.data,
          options: options,
          plugins: plugins
        }; // Async resize after dom update

        this._chart = new this.ChartClass(ctx, chartData);

        if (this.isTimeline !== true && this.data.legend === true) {
          this._drawLegend();
        }

        this.resizeChart();
      }
    }
  }, {
    key: "resizeChart",
    value: function resizeChart() {
      if (!this._chart) return; // Chart not ready

      if (this._resizeTimer === undefined) {
        this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
        return;
      }

      clearInterval(this._resizeTimer);
      this._resizeTimer = undefined;

      this._resizeChart();
    }
  }, {
    key: "_resizeChart",
    value: function _resizeChart() {
      var chartTarget = this.$.chartTarget;
      var options = this.data;
      var data = options.data;

      if (data.datasets.length === 0) {
        return;
      }

      if (!this.isTimeline) {
        this._chart.resize();

        return;
      } // Recalculate chart height for Timeline chart


      var areaTop = this._chart.chartArea.top;
      var areaBot = this._chart.chartArea.bottom;
      var height1 = this._chart.canvas.clientHeight;

      if (areaBot > 0) {
        this._axisHeight = height1 - areaBot + areaTop;
      }

      if (!this._axisHeight) {
        chartTarget.style.height = "50px";

        this._chart.resize();

        this.resizeChart();
        return;
      }

      if (this._axisHeight) {
        var cnt = data.datasets.length;
        var targetHeight = 30 * cnt + this._axisHeight + "px";

        if (chartTarget.style.height !== targetHeight) {
          chartTarget.style.height = targetHeight;
        }

        this._chart.resize();
      }
    } // Get HSL distributed color list

  }, {
    key: "chart",
    get: function get() {
      return this._chart;
    }
  }], [{
    key: "getColorList",
    value: function getColorList(count) {
      var processL = false;

      if (count > 10) {
        processL = true;
        count = Math.ceil(count / 2);
      }

      var h1 = 360 / count;
      var result = [];

      for (var loopI = 0; loopI < count; loopI++) {
        result[loopI] = Color().hsl(h1 * loopI, 80, 38);

        if (processL) {
          result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
        }
      }

      return result;
    }
  }, {
    key: "getColorGenerator",
    value: function getColorGenerator(staticColors, startIndex) {
      // Known colors for static data,
      // should add for very common state string manually.
      // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
      var palette = ["ff0029", "66a61e", "377eb8", "984ea3", "00d2d5", "ff7f00", "af8d00", "7f80cd", "b3e900", "c42e60", "a65628", "f781bf", "8dd3c7", "bebada", "fb8072", "80b1d3", "fdb462", "fccde5", "bc80bd", "ffed6f", "c4eaff", "cf8c00", "1b9e77", "d95f02", "e7298a", "e6ab02", "a6761d", "0097ff", "00d067", "f43600", "4ba93b", "5779bb", "927acc", "97ee3f", "bf3947", "9f5b00", "f48758", "8caed6", "f2b94f", "eff26e", "e43872", "d9b100", "9d7a00", "698cff", "d9d9d9", "00d27e", "d06800", "009f82", "c49200", "cbe8ff", "fecddf", "c27eb6", "8cd2ce", "c4b8d9", "f883b0", "a49100", "f48800", "27d0df", "a04a9b"];

      function getColorIndex(idx) {
        // Reuse the color if index too large.
        return Color("#" + palette[idx % palette.length]);
      }

      var colorDict = {};
      var colorIndex = 0;
      if (startIndex > 0) colorIndex = startIndex;

      if (staticColors) {
        Object.keys(staticColors).forEach(function (c) {
          var c1 = staticColors[c];

          if (isFinite(c1)) {
            colorDict[c.toLowerCase()] = getColorIndex(c1);
          } else {
            colorDict[c.toLowerCase()] = Color(staticColors[c]);
          }
        });
      } // Custom color assign


      function getColor(__, data) {
        var ret;
        var name = data[3];
        if (name === null) return Color().hsl(0, 40, 38);
        if (name === undefined) return Color().hsl(120, 40, 38);
        var name1 = name.toLowerCase();

        if (ret === undefined) {
          ret = colorDict[name1];
        }

        if (ret === undefined) {
          ret = getColorIndex(colorIndex);
          colorIndex++;
          colorDict[name1] = ret;
        }

        return ret;
      }

      return getColor;
    }
  }, {
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        data: Object,
        identifier: String,
        rendered: {
          type: Boolean,
          notify: true,
          value: false,
          readOnly: true
        },
        metas: {
          type: Array,
          value: function value() {
            return [];
          }
        },
        tooltip: {
          type: Object,
          value: function value() {
            return {
              opacity: "0",
              left: "0",
              top: "0",
              xPadding: "5",
              yPadding: "3"
            };
          }
        },
        unit: Object,
        rtl: {
          type: Boolean,
          reflectToAttribute: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["onPropsChange(data)"];
    }
  }]);

  return HaChartBase;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define("ha-chart-base", HaChartBase);

/***/ }),

/***/ "./src/components/state-history-chart-line.js":
/*!****************************************************!*\
  !*** ./src/components/state-history-chart-line.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          overflow: hidden;\n          height: 0;\n          transition: height 0.3s ease-in-out;\n        }\n      </style>\n      <ha-chart-base\n        id=\"chart\"\n        data=\"[[chartData]]\"\n        identifier=\"[[identifier]]\"\n        rendered=\"{{rendered}}\"\n      ></ha-chart-base>\n    "]);

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








var StateHistoryChartLine =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateHistoryChartLine, _LocalizeMixin);

  function StateHistoryChartLine() {
    _classCallCheck(this, StateHistoryChartLine);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateHistoryChartLine).apply(this, arguments));
  }

  _createClass(StateHistoryChartLine, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateHistoryChartLine.prototype), "connectedCallback", this).call(this);

      this._isAttached = true;
      this.drawChart();
    }
  }, {
    key: "dataChanged",
    value: function dataChanged() {
      this.drawChart();
    }
  }, {
    key: "_onRenderedChanged",
    value: function _onRenderedChanged(rendered) {
      if (rendered) this.animateHeight();
    }
  }, {
    key: "animateHeight",
    value: function animateHeight() {
      var _this = this;

      requestAnimationFrame(function () {
        return requestAnimationFrame(function () {
          _this.style.height = _this.$.chart.scrollHeight + "px";
        });
      });
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this2 = this;

      var unit = this.unit;
      var deviceStates = this.data;
      var datasets = [];
      var endTime;

      if (!this._isAttached) {
        return;
      }

      if (deviceStates.length === 0) {
        return;
      }

      function safeParseFloat(value) {
        var parsed = parseFloat(value);
        return isFinite(parsed) ? parsed : null;
      }

      endTime = this.endTime || // Get the highest date from the last date of each device
      new Date(Math.max.apply(null, deviceStates.map(function (devSts) {
        return new Date(devSts.states[devSts.states.length - 1].last_changed);
      })));

      if (endTime > new Date()) {
        endTime = new Date();
      }

      var names = this.names || {};
      deviceStates.forEach(function (states) {
        var domain = states.domain;
        var name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

        var prevValues;
        var data = [];

        function pushData(timestamp, datavalues) {
          if (!datavalues) return;

          if (timestamp > endTime) {
            // Drop datapoints that are after the requested endTime. This could happen if
            // endTime is "now" and client time is not in sync with server time.
            return;
          }

          data.forEach(function (d, i) {
            d.data.push({
              x: timestamp,
              y: datavalues[i]
            });
          });
          prevValues = datavalues;
        }

        function addColumn(nameY, step, fill) {
          var dataFill = false;
          var dataStep = false;

          if (fill) {
            dataFill = "origin";
          }

          if (step) {
            dataStep = "before";
          }

          data.push({
            label: nameY,
            fill: dataFill,
            steppedLine: dataStep,
            pointRadius: 0,
            data: [],
            unitText: unit
          });
        }

        if (domain === "thermostat" || domain === "climate" || domain === "water_heater") {
          // We differentiate between thermostats that have a target temperature
          // range versus ones that have just a target temperature
          // Using step chart by step-before so manually interpolation not needed.
          var hasTargetRange = states.states.some(function (state) {
            return state.attributes && state.attributes.target_temp_high !== state.attributes.target_temp_low;
          });
          var hasHeat = states.states.some(function (state) {
            return state.state === "heat";
          });
          var hasCool = states.states.some(function (state) {
            return state.state === "cool";
          });
          addColumn(name + " current temperature", true);

          if (hasHeat) {
            addColumn(name + " heating", true, true); // The "heating" series uses steppedArea to shade the area below the current
            // temperature when the thermostat is calling for heat.
          }

          if (hasCool) {
            addColumn(name + " cooling", true, true); // The "cooling" series uses steppedArea to shade the area below the current
            // temperature when the thermostat is calling for heat.
          }

          if (hasTargetRange) {
            addColumn(name + " target temperature high", true);
            addColumn(name + " target temperature low", true);
          } else {
            addColumn(name + " target temperature", true);
          }

          states.states.forEach(function (state) {
            if (!state.attributes) return;
            var curTemp = safeParseFloat(state.attributes.current_temperature);
            var series = [curTemp];

            if (hasHeat) {
              series.push(state.state === "heat" ? curTemp : null);
            }

            if (hasCool) {
              series.push(state.state === "cool" ? curTemp : null);
            }

            if (hasTargetRange) {
              var targetHigh = safeParseFloat(state.attributes.target_temp_high);
              var targetLow = safeParseFloat(state.attributes.target_temp_low);
              series.push(targetHigh, targetLow);
              pushData(new Date(state.last_changed), series);
            } else {
              var target = safeParseFloat(state.attributes.temperature);
              series.push(target);
              pushData(new Date(state.last_changed), series);
            }
          });
        } else {
          // Only disable interpolation for sensors
          var isStep = domain === "sensor";
          addColumn(name, isStep);
          var lastValue = null;
          var lastDate = null;
          var lastNullDate = null; // Process chart data.
          // When state is `unknown`, calculate the value and break the line.

          states.states.forEach(function (state) {
            var value = safeParseFloat(state.state);
            var date = new Date(state.last_changed);

            if (value !== null && lastNullDate !== null) {
              var dateTime = date.getTime();
              var lastNullDateTime = lastNullDate.getTime();
              var lastDateTime = lastDate.getTime();
              var tmpValue = (value - lastValue) * ((lastNullDateTime - lastDateTime) / (dateTime - lastDateTime)) + lastValue;
              pushData(lastNullDate, [tmpValue]);
              pushData(new Date(lastNullDateTime + 1), [null]);
              pushData(date, [value]);
              lastDate = date;
              lastValue = value;
              lastNullDate = null;
            } else if (value !== null && lastNullDate === null) {
              pushData(date, [value]);
              lastDate = date;
              lastValue = value;
            } else if (value === null && lastNullDate === null && lastValue !== null) {
              lastNullDate = date;
            }
          });
        } // Add an entry for final values


        pushData(endTime, prevValues, false); // Concat two arrays

        Array.prototype.push.apply(datasets, data);
      });

      var formatTooltipTitle = function formatTooltipTitle(items, data) {
        var item = items[0];
        var date = data.datasets[item.datasetIndex].data[item.index].x;
        return Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(date, _this2.hass.language);
      };

      var chartOptions = {
        type: "line",
        unit: unit,
        legend: !this.isSingleDevice,
        options: {
          scales: {
            xAxes: [{
              type: "time",
              ticks: {
                major: {
                  fontStyle: "bold"
                }
              }
            }],
            yAxes: [{
              ticks: {
                maxTicksLimit: 7
              }
            }]
          },
          tooltips: {
            mode: "neareach",
            callbacks: {
              title: formatTooltipTitle
            }
          },
          hover: {
            mode: "neareach"
          },
          layout: {
            padding: {
              top: 5
            }
          },
          elements: {
            line: {
              tension: 0.1,
              pointRadius: 0,
              borderWidth: 1.5
            },
            point: {
              hitRadius: 5
            }
          },
          plugins: {
            filler: {
              propagate: true
            }
          }
        },
        data: {
          labels: [],
          datasets: datasets
        }
      };
      this.chartData = chartOptions;
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
        chartData: Object,
        data: Object,
        names: Object,
        unit: String,
        identifier: String,
        isSingleDevice: {
          type: Boolean,
          value: false
        },
        endTime: Object,
        rendered: {
          type: Boolean,
          value: false,
          observer: "_onRenderedChanged"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["dataChanged(data, endTime, isSingleDevice)"];
    }
  }]);

  return StateHistoryChartLine;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-history-chart-line", StateHistoryChartLine);

/***/ }),

/***/ "./src/components/state-history-chart-timeline.js":
/*!********************************************************!*\
  !*** ./src/components/state-history-chart-timeline.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _entity_ha_chart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./entity/ha-chart-base */ "./src/components/entity/ha-chart-base.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          opacity: 0;\n          transition: opacity 0.3s ease-in-out;\n        }\n        :host([rendered]) {\n          opacity: 1;\n        }\n\n        ha-chart-base {\n          direction: ltr;\n        }\n      </style>\n      <ha-chart-base\n        data=\"[[chartData]]\"\n        rendered=\"{{rendered}}\"\n        rtl=\"{{rtl}}\"\n      ></ha-chart-base>\n    "]);

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









var StateHistoryChartTimeline =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateHistoryChartTimeline, _LocalizeMixin);

  function StateHistoryChartTimeline() {
    _classCallCheck(this, StateHistoryChartTimeline);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateHistoryChartTimeline).apply(this, arguments));
  }

  _createClass(StateHistoryChartTimeline, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(StateHistoryChartTimeline.prototype), "connectedCallback", this).call(this);

      this._isAttached = true;
      this.drawChart();
    }
  }, {
    key: "dataChanged",
    value: function dataChanged() {
      this.drawChart();
    }
  }, {
    key: "drawChart",
    value: function drawChart() {
      var _this = this;

      var staticColors = {
        on: 1,
        off: 0,
        unavailable: "#a0a0a0",
        unknown: "#606060",
        idle: 2
      };
      var stateHistory = this.data;

      if (!this._isAttached) {
        return;
      }

      if (!stateHistory) {
        stateHistory = [];
      }

      var startTime = new Date(stateHistory.reduce(function (minTime, stateInfo) {
        return Math.min(minTime, new Date(stateInfo.data[0].last_changed));
      }, new Date())); // end time is Math.max(startTime, last_event)

      var endTime = this.endTime || new Date(stateHistory.reduce(function (maxTime, stateInfo) {
        return Math.max(maxTime, new Date(stateInfo.data[stateInfo.data.length - 1].last_changed));
      }, startTime));

      if (endTime > new Date()) {
        endTime = new Date();
      }

      var labels = [];
      var datasets = []; // stateHistory is a list of lists of sorted state objects

      var names = this.names || {};
      stateHistory.forEach(function (stateInfo) {
        var newLastChanged;
        var prevState = null;
        var locState = null;
        var prevLastChanged = startTime;
        var entityDisplay = names[stateInfo.entity_id] || stateInfo.name;
        var dataRow = [];
        stateInfo.data.forEach(function (state) {
          var newState = state.state;
          var timeStamp = new Date(state.last_changed);

          if (newState === undefined || newState === "") {
            newState = null;
          }

          if (timeStamp > endTime) {
            // Drop datapoints that are after the requested endTime. This could happen if
            // endTime is 'now' and client time is not in sync with server time.
            return;
          }

          if (prevState !== null && newState !== prevState) {
            newLastChanged = new Date(state.last_changed);
            dataRow.push([prevLastChanged, newLastChanged, locState, prevState]);
            prevState = newState;
            locState = state.state_localize;
            prevLastChanged = newLastChanged;
          } else if (prevState === null) {
            prevState = newState;
            locState = state.state_localize;
            prevLastChanged = new Date(state.last_changed);
          }
        });

        if (prevState !== null) {
          dataRow.push([prevLastChanged, endTime, locState, prevState]);
        }

        datasets.push({
          data: dataRow
        });
        labels.push(entityDisplay);
      });

      var formatTooltipLabel = function formatTooltipLabel(item, data) {
        var values = data.datasets[item.datasetIndex].data[item.index];
        var start = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[0], _this.hass.language);
        var end = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[1], _this.hass.language);
        var state = values[2];
        return [state, start, end];
      };

      var chartOptions = {
        type: "timeline",
        options: {
          tooltips: {
            callbacks: {
              label: formatTooltipLabel
            }
          },
          scales: {
            xAxes: [{
              ticks: {
                major: {
                  fontStyle: "bold"
                }
              }
            }],
            yAxes: [{
              afterSetDimensions: function afterSetDimensions(yaxe) {
                yaxe.maxWidth = yaxe.chart.width * 0.18;
              },
              position: this._computeRTL ? "right" : "left"
            }]
          }
        },
        data: {
          labels: labels,
          datasets: datasets
        },
        colors: {
          staticColors: staticColors,
          staticColorIndex: 3
        }
      };
      this.chartData = chartOptions;
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(hass);
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
          type: Object
        },
        chartData: Object,
        data: {
          type: Object,
          observer: "dataChanged"
        },
        names: Object,
        noSingle: Boolean,
        endTime: Date,
        rendered: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },
        rtl: {
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["dataChanged(data, endTime, localize, language)"];
    }
  }]);

  return StateHistoryChartTimeline;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-history-chart-timeline", StateHistoryChartTimeline);

/***/ }),

/***/ "./src/components/state-history-charts.js":
/*!************************************************!*\
  !*** ./src/components/state-history-charts.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_history_chart_line__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./state-history-chart-line */ "./src/components/state-history-chart-line.js");
/* harmony import */ var _state_history_chart_timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state-history-chart-timeline */ "./src/components/state-history-chart-timeline.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          /* height of single timeline chart = 58px */\n          min-height: 58px;\n        }\n        .info {\n          text-align: center;\n          line-height: 58px;\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <template\n        is=\"dom-if\"\n        class=\"info\"\n        if=\"[[_computeIsLoading(isLoadingData)]]\"\n      >\n        <div class=\"info\">\n          [[localize('ui.components.history_charts.loading_history')]]\n        </div>\n      </template>\n\n      <template\n        is=\"dom-if\"\n        class=\"info\"\n        if=\"[[_computeIsEmpty(isLoadingData, historyData)]]\"\n      >\n        <div class=\"info\">\n          [[localize('ui.components.history_charts.no_history_found')]]\n        </div>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[historyData.timeline.length]]\">\n        <state-history-chart-timeline\n          hass=\"[[hass]]\"\n          data=\"[[historyData.timeline]]\"\n          end-time=\"[[_computeEndTime(endTime, upToNow, historyData)]]\"\n          no-single=\"[[noSingle]]\"\n          names=\"[[names]]\"\n        ></state-history-chart-timeline>\n      </template>\n\n      <template is=\"dom-repeat\" items=\"[[historyData.line]]\">\n        <state-history-chart-line\n          hass=\"[[hass]]\"\n          unit=\"[[item.unit]]\"\n          data=\"[[item.data]]\"\n          identifier=\"[[item.identifier]]\"\n          is-single-device=\"[[_computeIsSingleLineChart(item.data, noSingle)]]\"\n          end-time=\"[[_computeEndTime(endTime, upToNow, historyData)]]\"\n          names=\"[[names]]\"\n        ></state-history-chart-line>\n      </template>\n    "]);

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








var StateHistoryCharts =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(StateHistoryCharts, _LocalizeMixin);

  function StateHistoryCharts() {
    _classCallCheck(this, StateHistoryCharts);

    return _possibleConstructorReturn(this, _getPrototypeOf(StateHistoryCharts).apply(this, arguments));
  }

  _createClass(StateHistoryCharts, [{
    key: "_computeIsSingleLineChart",
    value: function _computeIsSingleLineChart(data, noSingle) {
      return !noSingle && data && data.length === 1;
    }
  }, {
    key: "_computeIsEmpty",
    value: function _computeIsEmpty(isLoadingData, historyData) {
      var historyDataEmpty = !historyData || !historyData.timeline || !historyData.line || historyData.timeline.length === 0 && historyData.line.length === 0;
      return !isLoadingData && historyDataEmpty;
    }
  }, {
    key: "_computeIsLoading",
    value: function _computeIsLoading(isLoading) {
      return isLoading && !this.historyData;
    }
  }, {
    key: "_computeEndTime",
    value: function _computeEndTime(endTime, upToNow) {
      // We don't really care about the value of historyData, but if it change we want to update
      // endTime.
      return upToNow ? new Date() : endTime;
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
        historyData: {
          type: Object,
          value: null
        },
        names: Object,
        isLoadingData: Boolean,
        endTime: {
          type: Object
        },
        upToNow: Boolean,
        noSingle: Boolean
      };
    }
  }]);

  return StateHistoryCharts;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("state-history-charts", StateHistoryCharts);

/***/ }),

/***/ "./src/data/cached-history.ts":
/*!************************************!*\
  !*** ./src/data/cached-history.ts ***!
  \************************************/
/*! exports provided: getRecent, getRecentWithCache */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecent", function() { return getRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getRecentWithCache", function() { return getRecentWithCache; });
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }


var RECENT_THRESHOLD = 60000; // 1 minute

var RECENT_CACHE = {};
var stateHistoryCache = {}; // Cached type 1 unction. Without cache config.

var getRecent = function getRecent(hass, entityId, startTime, endTime, localize, language) {
  var cacheKey = entityId;
  var cache = RECENT_CACHE[cacheKey];

  if (cache && Date.now() - cache.created < RECENT_THRESHOLD && cache.language === language) {
    return cache.data;
  }

  var prom = Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, startTime, endTime).then(function (stateHistory) {
    return Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, stateHistory, localize, language);
  }, function (err) {
    delete RECENT_CACHE[entityId];
    throw err;
  });
  RECENT_CACHE[cacheKey] = {
    created: Date.now(),
    language: language,
    data: prom
  };
  return prom;
}; // Cache type 2 functionality

function getEmptyCache(language, startTime, endTime) {
  return {
    prom: Promise.resolve({
      line: [],
      timeline: []
    }),
    language: language,
    startTime: startTime,
    endTime: endTime,
    data: {
      line: [],
      timeline: []
    }
  };
}

var getRecentWithCache = function getRecentWithCache(hass, entityId, cacheConfig, localize, language) {
  var cacheKey = cacheConfig.cacheKey;
  var endTime = new Date();
  var startTime = new Date(endTime);
  startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
  var toFetchStartTime = startTime;
  var appendingToCache = false;
  var cache = stateHistoryCache[cacheKey];

  if (cache && toFetchStartTime >= cache.startTime && toFetchStartTime <= cache.endTime && cache.language === language) {
    toFetchStartTime = cache.endTime;
    appendingToCache = true; // This pretty much never happens as endTime is usually set to now

    if (endTime <= cache.endTime) {
      return cache.prom;
    }
  } else {
    cache = stateHistoryCache[cacheKey] = getEmptyCache(language, startTime, endTime);
  }

  var curCacheProm = cache.prom;

  var genProm =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee() {
      var fetchedHistory, results, stateHistory;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return Promise.all([curCacheProm, Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, toFetchStartTime, endTime, appendingToCache)]);

            case 3:
              results = _context.sent;
              fetchedHistory = results[1];
              _context.next = 11;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);
              delete stateHistoryCache[cacheKey];
              throw _context.t0;

            case 11:
              stateHistory = Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, fetchedHistory, localize, language);

              if (appendingToCache) {
                mergeLine(stateHistory.line, cache.data.line);
                mergeTimeline(stateHistory.timeline, cache.data.timeline);
                pruneStartTime(startTime, cache.data);
              } else {
                cache.data = stateHistory;
              }

              return _context.abrupt("return", cache.data);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 7]]);
    }));

    return function genProm() {
      return _ref.apply(this, arguments);
    };
  }();

  cache.prom = genProm();
  cache.startTime = startTime;
  cache.endTime = endTime;
  return cache.prom;
};

var mergeLine = function mergeLine(historyLines, cacheLines) {
  historyLines.forEach(function (line) {
    var unit = line.unit;
    var oldLine = cacheLines.find(function (cacheLine) {
      return cacheLine.unit === unit;
    });

    if (oldLine) {
      line.data.forEach(function (entity) {
        var oldEntity = oldLine.data.find(function (cacheEntity) {
          return entity.entity_id === cacheEntity.entity_id;
        });

        if (oldEntity) {
          oldEntity.states = oldEntity.states.concat(entity.states);
        } else {
          oldLine.data.push(entity);
        }
      });
    } else {
      cacheLines.push(line);
    }
  });
};

var mergeTimeline = function mergeTimeline(historyTimelines, cacheTimelines) {
  historyTimelines.forEach(function (timeline) {
    var oldTimeline = cacheTimelines.find(function (cacheTimeline) {
      return cacheTimeline.entity_id === timeline.entity_id;
    });

    if (oldTimeline) {
      oldTimeline.data = oldTimeline.data.concat(timeline.data);
    } else {
      cacheTimelines.push(timeline);
    }
  });
};

var pruneArray = function pruneArray(originalStartTime, arr) {
  if (arr.length === 0) {
    return arr;
  }

  var changedAfterStartTime = arr.findIndex(function (state) {
    return new Date(state.last_changed) > originalStartTime;
  });

  if (changedAfterStartTime === 0) {
    // If all changes happened after originalStartTime then we are done.
    return arr;
  } // If all changes happened at or before originalStartTime. Use last index.


  var updateIndex = changedAfterStartTime === -1 ? arr.length - 1 : changedAfterStartTime - 1;
  arr[updateIndex].last_changed = originalStartTime;
  return arr.slice(updateIndex);
};

var pruneStartTime = function pruneStartTime(originalStartTime, cacheData) {
  cacheData.line.forEach(function (line) {
    line.data.forEach(function (entity) {
      entity.states = pruneArray(originalStartTime, entity.states);
    });
  });
  cacheData.timeline.forEach(function (timeline) {
    timeline.data = pruneArray(originalStartTime, timeline.data);
  });
};

/***/ }),

/***/ "./src/data/ha-state-history-data.js":
/*!*******************************************!*\
  !*** ./src/data/ha-state-history-data.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _history__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./history */ "./src/data/history.ts");
/* harmony import */ var _cached_history__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./cached-history */ "./src/data/cached-history.ts");
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







/*
 * @appliesMixin LocalizeMixin
 */

var HaStateHistoryData =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaStateHistoryData, _LocalizeMixin);

  function HaStateHistoryData() {
    _classCallCheck(this, HaStateHistoryData);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaStateHistoryData).apply(this, arguments));
  }

  _createClass(HaStateHistoryData, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaStateHistoryData.prototype), "connectedCallback", this).call(this);

      this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      if (this._refreshTimeoutId) {
        window.clearInterval(this._refreshTimeoutId);
        this._refreshTimeoutId = null;
      }

      _get(_getPrototypeOf(HaStateHistoryData.prototype), "disconnectedCallback", this).call(this);
    }
  }, {
    key: "hassChanged",
    value: function hassChanged(newHass, oldHass) {
      if (!oldHass && !this._madeFirstCall) {
        this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
      }
    }
  }, {
    key: "filterChangedDebouncer",
    value: function filterChangedDebouncer() {
      var _this = this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._debounceFilterChanged, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(0), function () {
        _this.filterChanged.apply(_this, args);
      });
    }
  }, {
    key: "filterChanged",
    value: function filterChanged(filterType, entityId, startTime, endTime, cacheConfig, localize) {
      var _this2 = this;

      if (!this.hass) {
        return;
      }

      if (cacheConfig && !cacheConfig.cacheKey) {
        return;
      }

      if (!localize) {
        return;
      }

      this._madeFirstCall = true;
      var language = this.hass.language;
      var data;

      if (filterType === "date") {
        if (!startTime || !endTime) return;
        data = Object(_history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"])(this.hass, startTime, endTime).then(function (dateHistory) {
          return Object(_history__WEBPACK_IMPORTED_MODULE_4__["computeHistory"])(_this2.hass, dateHistory, localize, language);
        });
      } else if (filterType === "recent-entity") {
        if (!entityId) return;

        if (cacheConfig) {
          data = this.getRecentWithCacheRefresh(entityId, cacheConfig, localize, language);
        } else {
          data = Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecent"])(this.hass, entityId, startTime, endTime, localize, language);
        }
      } else {
        return;
      }

      this._setIsLoading(true);

      data.then(function (stateHistory) {
        _this2._setData(stateHistory);

        _this2._setIsLoading(false);
      });
    }
  }, {
    key: "getRecentWithCacheRefresh",
    value: function getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
      var _this3 = this;

      if (this._refreshTimeoutId) {
        window.clearInterval(this._refreshTimeoutId);
        this._refreshTimeoutId = null;
      }

      if (cacheConfig.refresh) {
        this._refreshTimeoutId = window.setInterval(function () {
          Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(_this3.hass, entityId, cacheConfig, localize, language).then(function (stateHistory) {
            _this3._setData(Object.assign({}, stateHistory));
          });
        }, cacheConfig.refresh * 1000);
      }

      return Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object,
          observer: "hassChanged"
        },
        filterType: String,
        cacheConfig: Object,
        startTime: Date,
        endTime: Date,
        entityId: String,
        isLoading: {
          type: Boolean,
          value: true,
          readOnly: true,
          notify: true
        },
        data: {
          type: Object,
          value: null,
          readOnly: true,
          notify: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"];
    }
  }]);

  return HaStateHistoryData;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-state-history-data", HaStateHistoryData);

/***/ }),

/***/ "./src/data/history.ts":
/*!*****************************!*\
  !*** ./src/data/history.ts ***!
  \*****************************/
/*! exports provided: fetchRecent, fetchDate, computeHistory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecent", function() { return fetchRecent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchDate", function() { return fetchDate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeHistory", function() { return computeHistory; });
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/entity/compute_state_display */ "./src/common/entity/compute_state_display.ts");



var DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
var LINE_ATTRIBUTES_TO_KEEP = ["temperature", "current_temperature", "target_temp_low", "target_temp_high"];
var fetchRecent = function fetchRecent(hass, entityId, startTime, endTime) {
  var skipInitialState = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  var url = "history/period";

  if (startTime) {
    url += "/" + startTime.toISOString();
  }

  url += "?filter_entity_id=" + entityId;

  if (endTime) {
    url += "&end_time=" + endTime.toISOString();
  }

  if (skipInitialState) {
    url += "&skip_initial_state";
  }

  return hass.callApi("GET", url);
};
var fetchDate = function fetchDate(hass, startTime, endTime) {
  return hass.callApi("GET", "history/period/".concat(startTime.toISOString(), "?end_time=").concat(endTime.toISOString()));
};

var equalState = function equalState(obj1, obj2) {
  return obj1.state === obj2.state && ( // They either both have an attributes object or not
  !obj1.attributes || LINE_ATTRIBUTES_TO_KEEP.every(function (attr) {
    return obj1.attributes[attr] === obj2.attributes[attr];
  }));
};

var processTimelineEntity = function processTimelineEntity(localize, language, states) {
  var data = [];
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = states[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var state = _step.value;

      if (data.length > 0 && state.state === data[data.length - 1].state) {
        continue;
      }

      data.push({
        state_localize: Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__["default"])(localize, state, language),
        state: state.state,
        last_changed: state.last_changed
      });
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

  return {
    name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(states[0]),
    entity_id: states[0].entity_id,
    data: data
  };
};

var processLineChartEntities = function processLineChartEntities(unit, entities) {
  var data = [];
  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = entities[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var states = _step2.value;
      var last = states[states.length - 1];
      var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(last);
      var processedStates = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = states[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var state = _step3.value;
          var processedState = void 0;

          if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
            processedState = {
              state: state.state,
              last_changed: state.last_updated,
              attributes: {}
            };

            for (var _i = 0, _LINE_ATTRIBUTES_TO_K = LINE_ATTRIBUTES_TO_KEEP; _i < _LINE_ATTRIBUTES_TO_K.length; _i++) {
              var attr = _LINE_ATTRIBUTES_TO_K[_i];

              if (attr in state.attributes) {
                processedState.attributes[attr] = state.attributes[attr];
              }
            }
          } else {
            processedState = state;
          }

          if (processedStates.length > 1 && equalState(processedState, processedStates[processedStates.length - 1]) && equalState(processedState, processedStates[processedStates.length - 2])) {
            continue;
          }

          processedStates.push(processedState);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
            _iterator3["return"]();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      data.push({
        domain: domain,
        name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(last),
        entity_id: last.entity_id,
        states: processedStates
      });
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
        _iterator2["return"]();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return {
    unit: unit,
    identifier: entities.map(function (states) {
      return states[0].entity_id;
    }).join(""),
    data: data
  };
};

var computeHistory = function computeHistory(hass, stateHistory, localize, language) {
  var lineChartDevices = {};
  var timelineDevices = [];

  if (!stateHistory) {
    return {
      line: [],
      timeline: []
    };
  }

  stateHistory.forEach(function (stateInfo) {
    if (stateInfo.length === 0) {
      return;
    }

    var stateWithUnit = stateInfo.find(function (state) {
      return "unit_of_measurement" in state.attributes;
    });
    var unit;

    if (stateWithUnit) {
      unit = stateWithUnit.attributes.unit_of_measurement;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateInfo[0]) === "climate") {
      unit = hass.config.unit_system.temperature;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(stateInfo[0]) === "water_heater") {
      unit = hass.config.unit_system.temperature;
    }

    if (!unit) {
      timelineDevices.push(processTimelineEntity(localize, language, stateInfo));
    } else if (unit in lineChartDevices) {
      lineChartDevices[unit].push(stateInfo);
    } else {
      lineChartDevices[unit] = [stateInfo];
    }
  });
  var unitStates = Object.keys(lineChartDevices).map(function (unit) {
    return processLineChartEntities(unit, lineChartDevices[unit]);
  });
  return {
    line: unitStates,
    timeline: timelineDevices
  };
};

/***/ })

}]);
//# sourceMappingURL=more-info-dialog~panel-history~panel-kiosk~panel-lovelace~panel-states.chunk.js.map