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

/* harmony default export */ __webpack_exports__["default"] = (toLocaleDateStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleDateString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "mediumDate"));

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

/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));

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

/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime"));

/***/ }),

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeDomain; });
function computeDomain(entityId) {
  return entityId.substr(0, entityId.indexOf("."));
}

/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeObjectId; });
/** Compute the object ID of a state. */
function computeObjectId(entityId) {
  return entityId.substr(entityId.indexOf(".") + 1);
}

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




/* harmony default export */ __webpack_exports__["default"] = ((localize, stateObj, language) => {
  let display;
  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj);

  if (domain === "binary_sensor") {
    // Try device class translation, then default binary sensor translation
    if (stateObj.attributes.device_class) {
      display = localize(`state.${domain}.${stateObj.attributes.device_class}.${stateObj.state}`);
    }

    if (!display) {
      display = localize(`state.${domain}.default.${stateObj.state}`);
    }
  } else if (stateObj.attributes.unit_of_measurement && !["unknown", "unavailable"].includes(stateObj.state)) {
    display = stateObj.state + " " + stateObj.attributes.unit_of_measurement;
  } else if (domain === "input_datetime") {
    let date;

    if (!stateObj.attributes.has_time) {
      date = new Date(stateObj.attributes.year, stateObj.attributes.month - 1, stateObj.attributes.day);
      display = Object(_datetime_format_date__WEBPACK_IMPORTED_MODULE_2__["default"])(date, language);
    } else if (!stateObj.attributes.has_date) {
      const now = new Date();
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
      display = localize(`state.zwave.query_stage.${stateObj.state}`, "query_stage", stateObj.attributes.query_stage);
    } else {
      display = localize(`state.zwave.default.${stateObj.state}`);
    }
  } else {
    display = localize(`state.${domain}.${stateObj.state}`);
  } // Fall back to default, component backend translation, or raw state if nothing else matches.


  if (!display) {
    display = localize(`state.default.${stateObj.state}`) || localize(`component.${domain}.state.${stateObj.state}`) || stateObj.state;
  }

  return display;
});

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

/* harmony default export */ __webpack_exports__["default"] = (stateObj => stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "");

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







 // eslint-disable-next-line no-unused-vars

/* global Chart moment Color */

let scriptsLoaded = null;

class HaChartBase extends Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_6__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        :host {
          display: block;
        }
        .chartHeader {
          padding: 6px 0 0 0;
          width: 100%;
          display: flex;
          flex-direction: row;
        }
        .chartHeader > div {
          vertical-align: top;
          padding: 0 8px;
        }
        .chartHeader > div.chartTitle {
          padding-top: 8px;
          flex: 0 0 0;
          max-width: 30%;
        }
        .chartHeader > div.chartLegend {
          flex: 1 1;
          min-width: 70%;
        }
        :root {
          user-select: none;
          -moz-user-select: none;
          -webkit-user-select: none;
          -ms-user-select: none;
        }
        .chartTooltip {
          font-size: 90%;
          opacity: 1;
          position: absolute;
          background: rgba(80, 80, 80, 0.9);
          color: white;
          border-radius: 3px;
          pointer-events: none;
          transform: translate(-50%, 12px);
          z-index: 1000;
          width: 200px;
          transition: opacity 0.15s ease-in-out;
        }
        :host([rtl]) .chartTooltip {
          direction: rtl;
        }
        .chartLegend ul,
        .chartTooltip ul {
          display: inline-block;
          padding: 0 0px;
          margin: 5px 0 0 0;
          width: 100%;
        }
        .chartTooltip li {
          display: block;
          white-space: pre-line;
        }
        .chartTooltip .title {
          text-align: center;
          font-weight: 500;
        }
        .chartLegend li {
          display: inline-block;
          padding: 0 6px;
          max-width: 49%;
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
          box-sizing: border-box;
        }
        .chartLegend li:nth-child(odd):last-of-type {
          /* Make last item take full width if it is odd-numbered. */
          max-width: 100%;
        }
        .chartLegend li[data-hidden] {
          text-decoration: line-through;
        }
        .chartLegend em,
        .chartTooltip em {
          border-radius: 5px;
          display: inline-block;
          height: 10px;
          margin-right: 4px;
          width: 10px;
        }
        :host([rtl]) .chartTooltip em {
          margin-right: inherit;
          margin-left: 4px;
        }
        paper-icon-button {
          color: var(--secondary-text-color);
        }
      </style>
      <template is="dom-if" if="[[unit]]">
        <div class="chartHeader">
          <div class="chartTitle">[[unit]]</div>
          <div class="chartLegend">
            <ul>
              <template is="dom-repeat" items="[[metas]]">
                <li on-click="_legendClick" data-hidden$="[[item.hidden]]">
                  <em style$="background-color:[[item.bgColor]]"></em>
                  [[item.label]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </template>
      <div id="chartTarget" style="height:40px; width:100%">
        <canvas id="chartCanvas"></canvas>
        <div
          class$="chartTooltip [[tooltip.yAlign]]"
          style$="opacity:[[tooltip.opacity]]; top:[[tooltip.top]]; left:[[tooltip.left]]; padding:[[tooltip.yPadding]]px [[tooltip.xPadding]]px"
        >
          <div class="title">[[tooltip.title]]</div>
          <div>
            <ul>
              <template is="dom-repeat" items="[[tooltip.lines]]">
                <li>
                  <em style$="background-color:[[item.bgColor]]"></em
                  >[[item.text]]
                </li>
              </template>
            </ul>
          </div>
        </div>
      </div>
    `;
  }

  get chart() {
    return this._chart;
  }

  static get properties() {
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
        value: () => []
      },
      tooltip: {
        type: Object,
        value: () => ({
          opacity: "0",
          left: "0",
          top: "0",
          xPadding: "5",
          yPadding: "3"
        })
      },
      unit: Object,
      rtl: {
        type: Boolean,
        reflectToAttribute: true
      }
    };
  }

  static get observers() {
    return ["onPropsChange(data)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.onPropsChange();

    this._resizeListener = () => {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_4__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(10), () => {
        if (this._isAttached) {
          this.resizeChart();
        }
      });
    };

    if (typeof ResizeObserver === "function") {
      this.resizeObserver = new ResizeObserver(entries => {
        entries.forEach(() => {
          this._resizeListener();
        });
      });
      this.resizeObserver.observe(this.$.chartTarget);
    } else {
      this.addEventListener("iron-resize", this._resizeListener);
    }

    if (scriptsLoaded === null) {
      scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart~panel-calendar"), __webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
    }

    scriptsLoaded.then(ChartModule => {
      this.ChartClass = ChartModule.default;
      this.onPropsChange();
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
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

  onPropsChange() {
    if (!this._isAttached || !this.ChartClass || !this.data) {
      return;
    }

    this.drawChart();
  }

  _customTooltips(tooltip) {
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

    const title = tooltip.title ? tooltip.title[0] || "" : "";
    this.set(["tooltip", "title"], title);
    const bodyLines = tooltip.body.map(n => n.lines); // Set Text

    if (tooltip.body) {
      this.set(["tooltip", "lines"], bodyLines.map((body, i) => {
        const colors = tooltip.labelColors[i];
        return {
          color: colors.borderColor,
          bgColor: colors.backgroundColor,
          text: body.join("\n")
        };
      }));
    }

    const parentWidth = this.$.chartTarget.clientWidth;
    let positionX = tooltip.caretX;
    const positionY = this._chart.canvas.offsetTop + tooltip.caretY;

    if (tooltip.caretX + 100 > parentWidth) {
      positionX = parentWidth - 100;
    } else if (tooltip.caretX < 100) {
      positionX = 100;
    }

    positionX += this._chart.canvas.offsetLeft; // Display, position, and set styles for font

    this.tooltip = Object.assign({}, this.tooltip, {
      opacity: 1,
      left: `${positionX}px`,
      top: `${positionY}px`
    });
  }

  _legendClick(event) {
    event = event || window.event;
    event.stopPropagation();
    let target = event.target || event.srcElement;

    while (target.nodeName !== "LI") {
      // user clicked child, find parent LI
      target = target.parentElement;
    }

    const index = event.model.itemsIndex;

    const meta = this._chart.getDatasetMeta(index);

    meta.hidden = meta.hidden === null ? !this._chart.data.datasets[index].hidden : null;
    this.set(["metas", index, "hidden"], this._chart.isDatasetVisible(index) ? null : "hidden");

    this._chart.update();
  }

  _drawLegend() {
    const chart = this._chart; // New data for old graph. Keep metadata.

    const preserveVisibility = this._oldIdentifier && this.identifier === this._oldIdentifier;
    this._oldIdentifier = this.identifier;
    this.set("metas", this._chart.data.datasets.map((x, i) => ({
      label: x.label,
      color: x.color,
      bgColor: x.backgroundColor,
      hidden: preserveVisibility && i < this.metas.length ? this.metas[i].hidden : !chart.isDatasetVisible(i)
    })));
    let updateNeeded = false;

    if (preserveVisibility) {
      for (let i = 0; i < this.metas.length; i++) {
        const meta = chart.getDatasetMeta(i);
        if (!!meta.hidden !== !!this.metas[i].hidden) updateNeeded = true;
        meta.hidden = this.metas[i].hidden ? true : null;
      }
    }

    if (updateNeeded) {
      chart.update();
    }

    this.unit = this.data.unit;
  }

  _formatTickValue(value, index, values) {
    if (values.length === 0) {
      return value;
    }

    const date = new Date(values[index].value);
    return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_7__["default"])(date);
  }

  drawChart() {
    const data = this.data.data;
    const ctx = this.$.chartCanvas;

    if ((!data.datasets || !data.datasets.length) && !this._chart) {
      return;
    }

    if (this.data.type !== "timeline" && data.datasets.length > 0) {
      const cnt = data.datasets.length;
      const colors = this.constructor.getColorList(cnt);

      for (let loopI = 0; loopI < cnt; loopI++) {
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

      const plugins = [{
        afterRender: () => this._setRendered(true)
      }];
      let options = {
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

      const chartData = {
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

  resizeChart() {
    if (!this._chart) return; // Chart not ready

    if (this._resizeTimer === undefined) {
      this._resizeTimer = setInterval(this.resizeChart.bind(this), 10);
      return;
    }

    clearInterval(this._resizeTimer);
    this._resizeTimer = undefined;

    this._resizeChart();
  }

  _resizeChart() {
    const chartTarget = this.$.chartTarget;
    const options = this.data;
    const data = options.data;

    if (data.datasets.length === 0) {
      return;
    }

    if (!this.isTimeline) {
      this._chart.resize();

      return;
    } // Recalculate chart height for Timeline chart


    const areaTop = this._chart.chartArea.top;
    const areaBot = this._chart.chartArea.bottom;
    const height1 = this._chart.canvas.clientHeight;

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
      const cnt = data.datasets.length;
      const targetHeight = 30 * cnt + this._axisHeight + "px";

      if (chartTarget.style.height !== targetHeight) {
        chartTarget.style.height = targetHeight;
      }

      this._chart.resize();
    }
  } // Get HSL distributed color list


  static getColorList(count) {
    let processL = false;

    if (count > 10) {
      processL = true;
      count = Math.ceil(count / 2);
    }

    const h1 = 360 / count;
    const result = [];

    for (let loopI = 0; loopI < count; loopI++) {
      result[loopI] = Color().hsl(h1 * loopI, 80, 38);

      if (processL) {
        result[loopI + count] = Color().hsl(h1 * loopI, 80, 62);
      }
    }

    return result;
  }

  static getColorGenerator(staticColors, startIndex) {
    // Known colors for static data,
    // should add for very common state string manually.
    // Palette modified from http://google.github.io/palette.js/ mpn65, Apache 2.0
    const palette = ["ff0029", "66a61e", "377eb8", "984ea3", "00d2d5", "ff7f00", "af8d00", "7f80cd", "b3e900", "c42e60", "a65628", "f781bf", "8dd3c7", "bebada", "fb8072", "80b1d3", "fdb462", "fccde5", "bc80bd", "ffed6f", "c4eaff", "cf8c00", "1b9e77", "d95f02", "e7298a", "e6ab02", "a6761d", "0097ff", "00d067", "f43600", "4ba93b", "5779bb", "927acc", "97ee3f", "bf3947", "9f5b00", "f48758", "8caed6", "f2b94f", "eff26e", "e43872", "d9b100", "9d7a00", "698cff", "d9d9d9", "00d27e", "d06800", "009f82", "c49200", "cbe8ff", "fecddf", "c27eb6", "8cd2ce", "c4b8d9", "f883b0", "a49100", "f48800", "27d0df", "a04a9b"];

    function getColorIndex(idx) {
      // Reuse the color if index too large.
      return Color("#" + palette[idx % palette.length]);
    }

    const colorDict = {};
    let colorIndex = 0;
    if (startIndex > 0) colorIndex = startIndex;

    if (staticColors) {
      Object.keys(staticColors).forEach(c => {
        const c1 = staticColors[c];

        if (isFinite(c1)) {
          colorDict[c.toLowerCase()] = getColorIndex(c1);
        } else {
          colorDict[c.toLowerCase()] = Color(staticColors[c]);
        }
      });
    } // Custom color assign


    function getColor(__, data) {
      let ret;
      const name = data[3];
      if (name === null) return Color().hsl(0, 40, 38);
      if (name === undefined) return Color().hsl(120, 40, 38);
      const name1 = name.toLowerCase();

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

}

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







class StateHistoryChartLine extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          overflow: hidden;
          height: 0;
          transition: height 0.3s ease-in-out;
        }
      </style>
      <ha-chart-base
        id="chart"
        data="[[chartData]]"
        identifier="[[identifier]]"
        rendered="{{rendered}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
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

  static get observers() {
    return ["dataChanged(data, endTime, isSingleDevice)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  _onRenderedChanged(rendered) {
    if (rendered) this.animateHeight();
  }

  animateHeight() {
    requestAnimationFrame(() => requestAnimationFrame(() => {
      this.style.height = this.$.chart.scrollHeight + "px";
    }));
  }

  drawChart() {
    const unit = this.unit;
    const deviceStates = this.data;
    const datasets = [];
    let endTime;

    if (!this._isAttached) {
      return;
    }

    if (deviceStates.length === 0) {
      return;
    }

    function safeParseFloat(value) {
      const parsed = parseFloat(value);
      return isFinite(parsed) ? parsed : null;
    }

    endTime = this.endTime || // Get the highest date from the last date of each device
    new Date(Math.max.apply(null, deviceStates.map(devSts => new Date(devSts.states[devSts.states.length - 1].last_changed))));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const names = this.names || {};
    deviceStates.forEach(states => {
      const domain = states.domain;
      const name = names[states.entity_id] || states.name; // array containing [value1, value2, etc]

      let prevValues;
      const data = [];

      function pushData(timestamp, datavalues) {
        if (!datavalues) return;

        if (timestamp > endTime) {
          // Drop datapoints that are after the requested endTime. This could happen if
          // endTime is "now" and client time is not in sync with server time.
          return;
        }

        data.forEach((d, i) => {
          d.data.push({
            x: timestamp,
            y: datavalues[i]
          });
        });
        prevValues = datavalues;
      }

      function addColumn(nameY, step, fill) {
        let dataFill = false;
        let dataStep = false;

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
        const hasTargetRange = states.states.some(state => state.attributes && state.attributes.target_temp_high !== state.attributes.target_temp_low);
        const hasHeat = states.states.some(state => state.state === "heat");
        const hasCool = states.states.some(state => state.state === "cool");
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

        states.states.forEach(state => {
          if (!state.attributes) return;
          const curTemp = safeParseFloat(state.attributes.current_temperature);
          const series = [curTemp];

          if (hasHeat) {
            series.push(state.state === "heat" ? curTemp : null);
          }

          if (hasCool) {
            series.push(state.state === "cool" ? curTemp : null);
          }

          if (hasTargetRange) {
            const targetHigh = safeParseFloat(state.attributes.target_temp_high);
            const targetLow = safeParseFloat(state.attributes.target_temp_low);
            series.push(targetHigh, targetLow);
            pushData(new Date(state.last_changed), series);
          } else {
            const target = safeParseFloat(state.attributes.temperature);
            series.push(target);
            pushData(new Date(state.last_changed), series);
          }
        });
      } else {
        // Only disable interpolation for sensors
        const isStep = domain === "sensor";
        addColumn(name, isStep);
        let lastValue = null;
        let lastDate = null;
        let lastNullDate = null; // Process chart data.
        // When state is `unknown`, calculate the value and break the line.

        states.states.forEach(state => {
          const value = safeParseFloat(state.state);
          const date = new Date(state.last_changed);

          if (value !== null && lastNullDate !== null) {
            const dateTime = date.getTime();
            const lastNullDateTime = lastNullDate.getTime();
            const lastDateTime = lastDate.getTime();
            const tmpValue = (value - lastValue) * ((lastNullDateTime - lastDateTime) / (dateTime - lastDateTime)) + lastValue;
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

    const formatTooltipTitle = (items, data) => {
      const item = items[0];
      const date = data.datasets[item.datasetIndex].data[item.index].x;
      return Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(date, this.hass.language);
    };

    const chartOptions = {
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

}

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








class StateHistoryChartTimeline extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          opacity: 0;
          transition: opacity 0.3s ease-in-out;
        }
        :host([rendered]) {
          opacity: 1;
        }

        ha-chart-base {
          direction: ltr;
        }
      </style>
      <ha-chart-base
        data="[[chartData]]"
        rendered="{{rendered}}"
        rtl="{{rtl}}"
      ></ha-chart-base>
    `;
  }

  static get properties() {
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

  static get observers() {
    return ["dataChanged(data, endTime, localize, language)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this._isAttached = true;
    this.drawChart();
  }

  dataChanged() {
    this.drawChart();
  }

  drawChart() {
    const staticColors = {
      on: 1,
      off: 0,
      unavailable: "#a0a0a0",
      unknown: "#606060",
      idle: 2
    };
    let stateHistory = this.data;

    if (!this._isAttached) {
      return;
    }

    if (!stateHistory) {
      stateHistory = [];
    }

    const startTime = new Date(stateHistory.reduce((minTime, stateInfo) => Math.min(minTime, new Date(stateInfo.data[0].last_changed)), new Date())); // end time is Math.max(startTime, last_event)

    let endTime = this.endTime || new Date(stateHistory.reduce((maxTime, stateInfo) => Math.max(maxTime, new Date(stateInfo.data[stateInfo.data.length - 1].last_changed)), startTime));

    if (endTime > new Date()) {
      endTime = new Date();
    }

    const labels = [];
    const datasets = []; // stateHistory is a list of lists of sorted state objects

    const names = this.names || {};
    stateHistory.forEach(stateInfo => {
      let newLastChanged;
      let prevState = null;
      let locState = null;
      let prevLastChanged = startTime;
      const entityDisplay = names[stateInfo.entity_id] || stateInfo.name;
      const dataRow = [];
      stateInfo.data.forEach(state => {
        let newState = state.state;
        const timeStamp = new Date(state.last_changed);

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

    const formatTooltipLabel = (item, data) => {
      const values = data.datasets[item.datasetIndex].data[item.index];
      const start = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[0], this.hass.language);
      const end = Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(values[1], this.hass.language);
      const state = values[2];
      return [state, start, end];
    };

    const chartOptions = {
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
            afterSetDimensions: yaxe => {
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

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_6__["computeRTL"])(hass);
  }

}

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







class StateHistoryCharts extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /* height of single timeline chart = 58px */
          min-height: 58px;
        }
        .info {
          text-align: center;
          line-height: 58px;
          color: var(--secondary-text-color);
        }
      </style>
      <template
        is="dom-if"
        class="info"
        if="[[_computeIsLoading(isLoadingData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.loading_history')]]
        </div>
      </template>

      <template
        is="dom-if"
        class="info"
        if="[[_computeIsEmpty(isLoadingData, historyData)]]"
      >
        <div class="info">
          [[localize('ui.components.history_charts.no_history_found')]]
        </div>
      </template>

      <template is="dom-if" if="[[historyData.timeline.length]]">
        <state-history-chart-timeline
          hass="[[hass]]"
          data="[[historyData.timeline]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          no-single="[[noSingle]]"
          names="[[names]]"
        ></state-history-chart-timeline>
      </template>

      <template is="dom-repeat" items="[[historyData.line]]">
        <state-history-chart-line
          hass="[[hass]]"
          unit="[[item.unit]]"
          data="[[item.data]]"
          identifier="[[item.identifier]]"
          is-single-device="[[_computeIsSingleLineChart(item.data, noSingle)]]"
          end-time="[[_computeEndTime(endTime, upToNow, historyData)]]"
          names="[[names]]"
        ></state-history-chart-line>
      </template>
    `;
  }

  static get properties() {
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

  _computeIsSingleLineChart(data, noSingle) {
    return !noSingle && data && data.length === 1;
  }

  _computeIsEmpty(isLoadingData, historyData) {
    const historyDataEmpty = !historyData || !historyData.timeline || !historyData.line || historyData.timeline.length === 0 && historyData.line.length === 0;
    return !isLoadingData && historyDataEmpty;
  }

  _computeIsLoading(isLoading) {
    return isLoading && !this.historyData;
  }

  _computeEndTime(endTime, upToNow) {
    // We don't really care about the value of historyData, but if it change we want to update
    // endTime.
    return upToNow ? new Date() : endTime;
  }

}

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

const RECENT_THRESHOLD = 60000; // 1 minute

const RECENT_CACHE = {};
const stateHistoryCache = {}; // Cached type 1 unction. Without cache config.

const getRecent = (hass, entityId, startTime, endTime, localize, language) => {
  const cacheKey = entityId;
  const cache = RECENT_CACHE[cacheKey];

  if (cache && Date.now() - cache.created < RECENT_THRESHOLD && cache.language === language) {
    return cache.data;
  }

  const prom = Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, startTime, endTime).then(stateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, stateHistory, localize, language), err => {
    delete RECENT_CACHE[entityId];
    throw err;
  });
  RECENT_CACHE[cacheKey] = {
    created: Date.now(),
    language,
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
    language,
    startTime,
    endTime,
    data: {
      line: [],
      timeline: []
    }
  };
}

const getRecentWithCache = (hass, entityId, cacheConfig, localize, language) => {
  const cacheKey = cacheConfig.cacheKey;
  const endTime = new Date();
  const startTime = new Date(endTime);
  startTime.setHours(startTime.getHours() - cacheConfig.hoursToShow);
  let toFetchStartTime = startTime;
  let appendingToCache = false;
  let cache = stateHistoryCache[cacheKey];

  if (cache && toFetchStartTime >= cache.startTime && toFetchStartTime <= cache.endTime && cache.language === language) {
    toFetchStartTime = cache.endTime;
    appendingToCache = true; // This pretty much never happens as endTime is usually set to now

    if (endTime <= cache.endTime) {
      return cache.prom;
    }
  } else {
    cache = stateHistoryCache[cacheKey] = getEmptyCache(language, startTime, endTime);
  }

  const curCacheProm = cache.prom;

  const genProm = async () => {
    let fetchedHistory;

    try {
      const results = await Promise.all([curCacheProm, Object(_history__WEBPACK_IMPORTED_MODULE_0__["fetchRecent"])(hass, entityId, toFetchStartTime, endTime, appendingToCache)]);
      fetchedHistory = results[1];
    } catch (err) {
      delete stateHistoryCache[cacheKey];
      throw err;
    }

    const stateHistory = Object(_history__WEBPACK_IMPORTED_MODULE_0__["computeHistory"])(hass, fetchedHistory, localize, language);

    if (appendingToCache) {
      mergeLine(stateHistory.line, cache.data.line);
      mergeTimeline(stateHistory.timeline, cache.data.timeline);
      pruneStartTime(startTime, cache.data);
    } else {
      cache.data = stateHistory;
    }

    return cache.data;
  };

  cache.prom = genProm();
  cache.startTime = startTime;
  cache.endTime = endTime;
  return cache.prom;
};

const mergeLine = (historyLines, cacheLines) => {
  historyLines.forEach(line => {
    const unit = line.unit;
    const oldLine = cacheLines.find(cacheLine => cacheLine.unit === unit);

    if (oldLine) {
      line.data.forEach(entity => {
        const oldEntity = oldLine.data.find(cacheEntity => entity.entity_id === cacheEntity.entity_id);

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

const mergeTimeline = (historyTimelines, cacheTimelines) => {
  historyTimelines.forEach(timeline => {
    const oldTimeline = cacheTimelines.find(cacheTimeline => cacheTimeline.entity_id === timeline.entity_id);

    if (oldTimeline) {
      oldTimeline.data = oldTimeline.data.concat(timeline.data);
    } else {
      cacheTimelines.push(timeline);
    }
  });
};

const pruneArray = (originalStartTime, arr) => {
  if (arr.length === 0) {
    return arr;
  }

  const changedAfterStartTime = arr.findIndex(state => new Date(state.last_changed) > originalStartTime);

  if (changedAfterStartTime === 0) {
    // If all changes happened after originalStartTime then we are done.
    return arr;
  } // If all changes happened at or before originalStartTime. Use last index.


  const updateIndex = changedAfterStartTime === -1 ? arr.length - 1 : changedAfterStartTime - 1;
  arr[updateIndex].last_changed = originalStartTime;
  return arr.slice(updateIndex);
};

const pruneStartTime = (originalStartTime, cacheData) => {
  cacheData.line.forEach(line => {
    line.data.forEach(entity => {
      entity.states = pruneArray(originalStartTime, entity.states);
    });
  });
  cacheData.timeline.forEach(timeline => {
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






/*
 * @appliesMixin LocalizeMixin
 */

class HaStateHistoryData extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get properties() {
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

  static get observers() {
    return ["filterChangedDebouncer(filterType, entityId, startTime, endTime, cacheConfig, localize)"];
  }

  connectedCallback() {
    super.connectedCallback();
    this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
  }

  disconnectedCallback() {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    super.disconnectedCallback();
  }

  hassChanged(newHass, oldHass) {
    if (!oldHass && !this._madeFirstCall) {
      this.filterChangedDebouncer(this.filterType, this.entityId, this.startTime, this.endTime, this.cacheConfig, this.localize);
    }
  }

  filterChangedDebouncer(...args) {
    this._debounceFilterChanged = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this._debounceFilterChanged, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(0), () => {
      this.filterChanged(...args);
    });
  }

  filterChanged(filterType, entityId, startTime, endTime, cacheConfig, localize) {
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
    const language = this.hass.language;
    let data;

    if (filterType === "date") {
      if (!startTime || !endTime) return;
      data = Object(_history__WEBPACK_IMPORTED_MODULE_4__["fetchDate"])(this.hass, startTime, endTime).then(dateHistory => Object(_history__WEBPACK_IMPORTED_MODULE_4__["computeHistory"])(this.hass, dateHistory, localize, language));
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

    data.then(stateHistory => {
      this._setData(stateHistory);

      this._setIsLoading(false);
    });
  }

  getRecentWithCacheRefresh(entityId, cacheConfig, localize, language) {
    if (this._refreshTimeoutId) {
      window.clearInterval(this._refreshTimeoutId);
      this._refreshTimeoutId = null;
    }

    if (cacheConfig.refresh) {
      this._refreshTimeoutId = window.setInterval(() => {
        Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language).then(stateHistory => {
          this._setData(Object.assign({}, stateHistory));
        });
      }, cacheConfig.refresh * 1000);
    }

    return Object(_cached_history__WEBPACK_IMPORTED_MODULE_5__["getRecentWithCache"])(this.hass, entityId, cacheConfig, localize, language);
  }

}

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



const DOMAINS_USE_LAST_UPDATED = ["climate", "water_heater"];
const LINE_ATTRIBUTES_TO_KEEP = ["temperature", "current_temperature", "target_temp_low", "target_temp_high"];
const fetchRecent = (hass, entityId, startTime, endTime, skipInitialState = false) => {
  let url = "history/period";

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
const fetchDate = (hass, startTime, endTime) => {
  return hass.callApi("GET", `history/period/${startTime.toISOString()}?end_time=${endTime.toISOString()}`);
};

const equalState = (obj1, obj2) => obj1.state === obj2.state && ( // They either both have an attributes object or not
!obj1.attributes || LINE_ATTRIBUTES_TO_KEEP.every(attr => obj1.attributes[attr] === obj2.attributes[attr]));

const processTimelineEntity = (localize, language, states) => {
  const data = [];

  for (const state of states) {
    if (data.length > 0 && state.state === data[data.length - 1].state) {
      continue;
    }

    data.push({
      state_localize: Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__["default"])(localize, state, language),
      state: state.state,
      last_changed: state.last_changed
    });
  }

  return {
    name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(states[0]),
    entity_id: states[0].entity_id,
    data
  };
};

const processLineChartEntities = (unit, entities) => {
  const data = [];

  for (const states of entities) {
    const last = states[states.length - 1];
    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(last);
    const processedStates = [];

    for (const state of states) {
      let processedState;

      if (DOMAINS_USE_LAST_UPDATED.includes(domain)) {
        processedState = {
          state: state.state,
          last_changed: state.last_updated,
          attributes: {}
        };

        for (const attr of LINE_ATTRIBUTES_TO_KEEP) {
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

    data.push({
      domain,
      name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(last),
      entity_id: last.entity_id,
      states: processedStates
    });
  }

  return {
    unit,
    identifier: entities.map(states => states[0].entity_id).join(""),
    data
  };
};

const computeHistory = (hass, stateHistory, localize, language) => {
  const lineChartDevices = {};
  const timelineDevices = [];

  if (!stateHistory) {
    return {
      line: [],
      timeline: []
    };
  }

  stateHistory.forEach(stateInfo => {
    if (stateInfo.length === 0) {
      return;
    }

    const stateWithUnit = stateInfo.find(state => "unit_of_measurement" in state.attributes);
    let unit;

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
  const unitStates = Object.keys(lineChartDevices).map(unit => processLineChartEntities(unit, lineChartDevices[unit]));
  return {
    line: unitStates,
    timeline: timelineDevices
  };
};

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

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
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

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ })

}]);
//# sourceMappingURL=more-info-dialog~panel-history~panel-kiosk~panel-lovelace~panel-states.chunk.js.map