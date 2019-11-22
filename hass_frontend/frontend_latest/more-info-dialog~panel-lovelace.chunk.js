(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["more-info-dialog~panel-lovelace"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: isComponentLoaded */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isComponentLoaded", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
const isComponentLoaded = (hass, component) => hass && hass.config.components.indexOf(component) !== -1;

/***/ }),

/***/ "./src/common/datetime/duration_to_seconds.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/duration_to_seconds.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return durationToSeconds; });
function durationToSeconds(duration) {
  const parts = duration.split(":").map(Number);
  return parts[0] * 3600 + parts[1] * 60 + parts[2];
}

/***/ }),

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

/***/ "./src/common/datetime/relative_time.ts":
/*!**********************************************!*\
  !*** ./src/common/datetime/relative_time.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return relativeTime; });
/**
 * Calculate a string representing a date object as relative time from now.
 *
 * Example output: 5 minutes ago, in 3 days.
 */
const tests = [60, 60, 24, 7];
const langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize, options = {}) {
  const compareTime = options.compareTime || new Date();
  let delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
  const tense = delta >= 0 ? "past" : "future";
  delta = Math.abs(delta);
  let timeDesc;

  for (let i = 0; i < tests.length; i++) {
    if (delta < tests[i]) {
      delta = Math.floor(delta);
      timeDesc = localize(`ui.components.relative_time.duration.${langKey[i]}`, "count", delta);
      break;
    }

    delta /= tests[i];
  }

  if (timeDesc === undefined) {
    delta = Math.floor(delta);
    timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
  }

  return options.includeTense === false ? timeDesc : localize(`ui.components.relative_time.${tense}`, "time", timeDesc);
}

/***/ }),

/***/ "./src/common/datetime/seconds_to_duration.ts":
/*!****************************************************!*\
  !*** ./src/common/datetime/seconds_to_duration.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return secondsToDuration; });
const leftPad = num => num < 10 ? `0${num}` : num;

function secondsToDuration(d) {
  const h = Math.floor(d / 3600);
  const m = Math.floor(d % 3600 / 60);
  const s = Math.floor(d % 3600 % 60);

  if (h > 0) {
    return `${h}:${leftPad(m)}:${leftPad(s)}`;
  }

  if (m > 0) {
    return `${m}:${leftPad(s)}`;
  }

  if (s > 0) {
    return "" + s;
  }

  return null;
}

/***/ }),

/***/ "./src/common/dom/stop_propagation.ts":
/*!********************************************!*\
  !*** ./src/common/dom/stop_propagation.ts ***!
  \********************************************/
/*! exports provided: stopPropagation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stopPropagation", function() { return stopPropagation; });
const stopPropagation = ev => ev.stopPropagation();

/***/ }),

/***/ "./src/common/entity/compute_state_display.ts":
/*!****************************************************!*\
  !*** ./src/common/entity/compute_state_display.ts ***!
  \****************************************************/
/*! exports provided: computeStateDisplay */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeStateDisplay", function() { return computeStateDisplay; });
/* harmony import */ var _compute_state_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _datetime_format_date_time__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _datetime_format_date__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../datetime/format_date */ "./src/common/datetime/format_date.ts");
/* harmony import */ var _datetime_format_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../datetime/format_time */ "./src/common/datetime/format_time.ts");




const computeStateDisplay = (localize, stateObj, language) => {
  let display;
  const domain = Object(_compute_state_domain__WEBPACK_IMPORTED_MODULE_0__["computeStateDomain"])(stateObj);

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
};

/***/ }),

/***/ "./src/common/entity/supports-feature.ts":
/*!***********************************************!*\
  !*** ./src/common/entity/supports-feature.ts ***!
  \***********************************************/
/*! exports provided: supportsFeature */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsFeature", function() { return supportsFeature; });
const supportsFeature = (stateObj, feature) => {
  // tslint:disable-next-line:no-bitwise
  return (stateObj.attributes.supported_features & feature) !== 0;
};

/***/ }),

/***/ "./src/common/entity/timer_time_remaining.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/timer_time_remaining.ts ***!
  \***************************************************/
/*! exports provided: timerTimeRemaining */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timerTimeRemaining", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

const timerTimeRemaining = stateObj => {
  let timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    const now = new Date().getTime();
    const madeActive = new Date(stateObj.last_changed).getTime();
    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
  }

  return timeRemaining;
};

/***/ }),

/***/ "./src/common/util/time-cache-function-promise.ts":
/*!********************************************************!*\
  !*** ./src/common/util/time-cache-function-promise.ts ***!
  \********************************************************/
/*! exports provided: timeCachePromiseFunc */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timeCachePromiseFunc", function() { return timeCachePromiseFunc; });
const timeCachePromiseFunc = async (cacheKey, cacheTime, func, hass, entityId, ...args) => {
  let cache = hass[cacheKey];

  if (!cache) {
    cache = hass[cacheKey] = {};
  }

  const lastResult = cache[entityId];

  if (lastResult) {
    return lastResult;
  }

  const result = func(hass, entityId, ...args);
  cache[entityId] = result;
  result.then( // When successful, set timer to clear cache
  () => setTimeout(() => {
    cache[entityId] = undefined;
  }, cacheTime), // On failure, clear cache right away
  () => {
    cache[entityId] = undefined;
  });
  return result;
};

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
      scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
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

/***/ "./src/components/entity/ha-entity-toggle.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-toggle.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _ha_switch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../ha-switch */ "./src/components/ha-switch.ts");
function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function () { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function (O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function (F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function (receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function (elements, decorators) { var newElements = []; var finishers = []; var placements = { static: [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function (element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function (element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function (elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function (element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function (elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function (elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function (elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function (elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function (obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function (constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function (obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def.static ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function (other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }









const isOn = stateObj => stateObj !== undefined && !_common_const__WEBPACK_IMPORTED_MODULE_1__["STATES_OFF"].includes(stateObj.state);

let HaEntityToggle = _decorate(null, function (_initialize, _LitElement) {
  class HaEntityToggle extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaEntityToggle,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_2__["property"])()],
      key: "_isOn",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: // hass is not a property so that we only re-render on stateObj changes
      function render() {
        if (!this.stateObj) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
        <ha-switch disabled></ha-switch>
      `;
        }

        if (this.stateObj.attributes.assumed_state) {
          return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
        <paper-icon-button
          aria-label=${`Turn ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(this.stateObj)} off`}
          icon="hass:flash-off"
          @click=${this._turnOff}
          ?state-active=${!this._isOn}
        ></paper-icon-button>
        <paper-icon-button
          aria-label=${`Turn ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(this.stateObj)} on`}
          icon="hass:flash"
          @click=${this._turnOn}
          ?state-active=${this._isOn}
        ></paper-icon-button>
      `;
        }

        return lit_element__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <ha-switch
        aria-label=${`Toggle ${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["computeStateName"])(this.stateObj)} ${this._isOn ? "off" : "on"}`}
        .checked=${this._isOn}
        @change=${this._toggleChanged}
      ></ha-switch>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaEntityToggle.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("click", ev => ev.stopPropagation());
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (changedProps.has("stateObj")) {
          this._isOn = isOn(this.stateObj);
        }
      }
    }, {
      kind: "method",
      key: "_toggleChanged",
      value: function _toggleChanged(ev) {
        const newVal = ev.target.checked;

        if (newVal !== this._isOn) {
          this._callService(newVal);
        }
      }
    }, {
      kind: "method",
      key: "_turnOn",
      value: function _turnOn() {
        this._callService(true);
      }
    }, {
      kind: "method",
      key: "_turnOff",
      value: function _turnOff() {
        this._callService(false);
      } // We will force a re-render after a successful call to re-sync the toggle
      // with the state. It will be out of sync if our service call did not
      // result in the entity to be turned on. Since the state is not changing,
      // the resync is not called automatic.

    }, {
      kind: "method",
      key: "_callService",
      value: async function _callService(turnOn) {
        if (!this.hass || !this.stateObj) {
          return;
        }

        Object(_data_haptics__WEBPACK_IMPORTED_MODULE_3__["forwardHaptic"])("light");
        const stateDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["computeStateDomain"])(this.stateObj);
        let serviceDomain;
        let service;

        if (stateDomain === "lock") {
          serviceDomain = "lock";
          service = turnOn ? "unlock" : "lock";
        } else if (stateDomain === "cover") {
          serviceDomain = "cover";
          service = turnOn ? "open_cover" : "close_cover";
        } else if (stateDomain === "group") {
          serviceDomain = "homeassistant";
          service = turnOn ? "turn_on" : "turn_off";
        } else {
          serviceDomain = stateDomain;
          service = turnOn ? "turn_on" : "turn_off";
        }

        const currentState = this.stateObj; // Optimistic update.

        this._isOn = turnOn;
        await this.hass.callService(serviceDomain, service, {
          entity_id: this.stateObj.entity_id
        });
        setTimeout(async () => {
          // If after 2 seconds we have not received a state update
          // reset the switch to it's original state.
          if (this.stateObj === currentState) {
            this._isOn = isOn(this.stateObj);
          }
        }, 2000);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_2__["css"]`
      :host {
        white-space: nowrap;
        min-width: 38px;
      }
      paper-icon-button {
        color: var(
          --paper-icon-button-inactive-color,
          var(--primary-text-color)
        );
        transition: color 0.5s;
      }
      paper-icon-button[state-active] {
        color: var(--paper-icon-button-active-color, var(--primary-color));
      }
      ha-switch {
        padding: 13px 5px;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_2__["LitElement"]);

customElements.define("ha-entity-toggle", HaEntityToggle);

/***/ }),

/***/ "./src/components/ha-climate-state.js":
/*!********************************************!*\
  !*** ./src/components/ha-climate-state.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_climate__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/climate */ "./src/data/climate.ts");




/*
 * @appliesMixin LocalizeMixin
 */

class HaClimateState extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          flex-direction: column;
          justify-content: center;
          white-space: nowrap;
        }

        .target {
          color: var(--primary-text-color);
        }

        .current {
          color: var(--secondary-text-color);
        }

        .state-label {
          font-weight: bold;
          text-transform: capitalize;
        }

        .unit {
          display: inline-block;
          direction: ltr;
        }
      </style>

      <div class="target">
        <template is="dom-if" if="[[_hasKnownState(stateObj.state)]]">
          <span class="state-label">
            [[_localizeState(localize, stateObj)]]
            <template is="dom-if" if="[[_renderPreset(stateObj.attributes)]]">
              - [[_localizePreset(localize, stateObj.attributes.preset_mode)]]
            </template>
          </span>
        </template>
        <div class="unit">[[computeTarget(hass, stateObj)]]</div>
      </div>

      <template is="dom-if" if="[[currentStatus]]">
        <div class="current">
          [[localize('ui.card.climate.currently')]]:
          <div class="unit">[[currentStatus]]</div>
        </div>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      stateObj: Object,
      currentStatus: {
        type: String,
        computed: "computeCurrentStatus(hass, stateObj)"
      }
    };
  }

  computeCurrentStatus(hass, stateObj) {
    if (!hass || !stateObj) return null;

    if (stateObj.attributes.current_temperature != null) {
      return `${stateObj.attributes.current_temperature} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.current_humidity != null) {
      return `${stateObj.attributes.current_humidity} %`;
    }

    return null;
  }

  computeTarget(hass, stateObj) {
    if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

    if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
      return `${stateObj.attributes.target_temp_low}-${stateObj.attributes.target_temp_high} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.temperature != null) {
      return `${stateObj.attributes.temperature} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
      return `${stateObj.attributes.target_humidity_low}-${stateObj.attributes.target_humidity_high}%`;
    }

    if (stateObj.attributes.humidity != null) {
      return `${stateObj.attributes.humidity} %`;
    }

    return "";
  }

  _hasKnownState(state) {
    return state !== "unknown";
  }

  _localizeState(localize, stateObj) {
    const stateString = localize(`state.climate.${stateObj.state}`);
    return stateObj.attributes.hvac_action ? `${localize(`state_attributes.climate.hvac_action.${stateObj.attributes.hvac_action}`)} (${stateString})` : stateString;
  }

  _localizePreset(localize, preset) {
    return localize(`state_attributes.climate.preset_mode.${preset}`) || preset;
  }

  _renderPreset(attributes) {
    return attributes.preset_mode && attributes.preset_mode !== _data_climate__WEBPACK_IMPORTED_MODULE_3__["CLIMATE_PRESET_NONE"];
  }

}

customElements.define("ha-climate-state", HaClimateState);

/***/ }),

/***/ "./src/components/ha-cover-controls.js":
/*!*********************************************!*\
  !*** ./src/components/ha-cover-controls.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");





class HaCoverControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        .state {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>

      <div class="state">
        <paper-icon-button
          aria-label="Open cover"
          icon="hass:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Stop the cover from moving"
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
          aria-label="Close cover"
          icon="hass:arrow-down"
          on-click="onCloseTap"
          invisible$="[[!entityObj.supportsClose]]"
          disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)"
      }
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](hass, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
  }

  onOpenTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCover();
  }

  onCloseTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCover();
  }

  onStopTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCover();
  }

}

customElements.define("ha-cover-controls", HaCoverControls);

/***/ }),

/***/ "./src/components/ha-cover-tilt-controls.js":
/*!**************************************************!*\
  !*** ./src/components/ha-cover-tilt-controls.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/cover-model */ "./src/util/cover-model.js");






class HaCoverTiltControls extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style include="iron-flex"></style>
      <style>
        :host {
          white-space: nowrap;
        }
        [invisible] {
          visibility: hidden !important;
        }
      </style>
      <paper-icon-button
        aria-label="Open cover tilt"
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Stop cover from moving"
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
        aria-label="Close cover tilt"
        icon="hass:arrow-bottom-left"
        on-click="onCloseTiltTap"
        title="Close tilt"
        invisible$="[[!entityObj.supportsCloseTilt]]"
        disabled="[[computeClosedDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      stateObj: {
        type: Object
      },
      entityObj: {
        type: Object,
        computed: "computeEntityObj(hass, stateObj)"
      }
    };
  }

  computeEntityObj(hass, stateObj) {
    return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
  }

  computeOpenDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyOpenTilt && !assumedState;
  }

  computeClosedDisabled(stateObj, entityObj) {
    var assumedState = stateObj.attributes.assumed_state === true;
    return entityObj.isFullyClosedTilt && !assumedState;
  }

  onOpenTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.openCoverTilt();
  }

  onCloseTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.closeCoverTilt();
  }

  onStopTiltTap(ev) {
    ev.stopPropagation();
    this.entityObj.stopCoverTilt();
  }

}

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

/***/ }),

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

class HaPaperDropdownClass extends paperDropdownClass {
  ready() {
    super.ready(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      if (window.getComputedStyle(this).direction === "rtl") {
        this.style.textAlign = "right";
      }
    }, 100);
  }

}
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

/***/ }),

/***/ "./src/components/ha-relative-time.js":
/*!********************************************!*\
  !*** ./src/components/ha-relative-time.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/datetime/relative_time */ "./src/common/datetime/relative_time.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");




/*
 * @appliesMixin LocalizeMixin
 */

class HaRelativeTime extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get properties() {
    return {
      hass: Object,
      datetime: {
        type: String,
        observer: "datetimeChanged"
      },
      datetimeObj: {
        type: Object,
        observer: "datetimeObjChanged"
      },
      parsedDateTime: Object
    };
  }

  constructor() {
    super();
    this.updateRelative = this.updateRelative.bind(this);
  }

  connectedCallback() {
    super.connectedCallback(); // update every 60 seconds

    this.updateInterval = setInterval(this.updateRelative, 60000);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    clearInterval(this.updateInterval);
  }

  datetimeChanged(newVal) {
    this.parsedDateTime = newVal ? new Date(newVal) : null;
    this.updateRelative();
  }

  datetimeObjChanged(newVal) {
    this.parsedDateTime = newVal;
    this.updateRelative();
  }

  updateRelative() {
    const root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

    if (!this.parsedDateTime) {
      root.innerHTML = this.localize("ui.components.relative_time.never");
    } else {
      root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
    }
  }

}

customElements.define("ha-relative-time", HaRelativeTime);

/***/ }),

/***/ "./src/components/ha-slider.js":
/*!*************************************!*\
  !*** ./src/components/ha-slider.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");

const PaperSliderClass = customElements.get("paper-slider");
let subTemplate;

class HaSlider extends PaperSliderClass {
  static get template() {
    if (!subTemplate) {
      subTemplate = PaperSliderClass.template.cloneNode(true);
      const superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

      superStyle.appendChild(document.createTextNode(`
          :host([dir="rtl"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {
            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            transform: scale(1) translate(0, -17px) scaleX(-1) !important;
            }
        `));
    }

    return subTemplate;
  }

  _calcStep(value) {
    if (!this.step) {
      return parseFloat(value);
    }

    const numSteps = Math.round((value - this.min) / this.step);
    const stepStr = this.step.toString();
    const stepPointAt = stepStr.indexOf(".");

    if (stepPointAt !== -1) {
      /**
       * For small values of this.step, if we calculate the step using
       * For non-integer values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can round with the decimal precision of `step`
       */
      const precision = 10 ** (stepStr.length - stepPointAt - 1);
      return Math.round((numSteps * this.step + this.min) * precision) / precision;
    }

    return numSteps * this.step + this.min;
  }

}

customElements.define("ha-slider", HaSlider);

/***/ }),

/***/ "./src/components/paper-time-input.js":
/*!********************************************!*\
  !*** ./src/components/paper-time-input.js ***!
  \********************************************/
/*! exports provided: PaperTimeInput */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperTimeInput", function() { return PaperTimeInput; });
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
Adapted from paper-time-input from
https://github.com/ryanburns23/paper-time-input
MIT Licensed. Copyright (c) 2017 Ryan Burns

`<paper-time-input>` Polymer element to accept a time with paper-input & paper-dropdown-menu
Inspired by the time input in google forms

### Styling

`<paper-time-input>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-time-input-dropdown-ripple-color` | dropdown ripple color | `--primary-color`
`--paper-time-input-cotnainer` | Mixin applied to the inputs | `{}`
`--paper-time-dropdown-input-cotnainer` | Mixin applied to the dropdown input | `{}`
*/






class PaperTimeInput extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style>
        :host {
          display: block;
          @apply --paper-font-common-base;
        }

        paper-input {
          width: 30px;
          text-align: center;
          --paper-input-container-input: {
            /* Damn you firefox
             * Needed to hide spin num in firefox
             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box
             */
            -moz-appearance: textfield;
            @apply --paper-time-input-cotnainer;
          }
          --paper-input-container-input-webkit-spinner: {
            -webkit-appearance: none;
            margin: 0;
            display: none;
          }
          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;
        }

        paper-dropdown-menu {
          width: 55px;
          padding: 0;
          /* Force ripple to use the whole container */
          --paper-dropdown-menu-ripple: {
            color: var(
              --paper-time-input-dropdown-ripple-color,
              var(--primary-color)
            );
          }
          --paper-input-container-input: {
            @apply --paper-font-button;
            text-align: center;
            padding-left: 5px;
            @apply --paper-time-dropdown-input-cotnainer;
          }
          --paper-input-container-underline: {
            border-color: transparent;
          }
          --paper-input-container-underline-focus: {
            border-color: transparent;
          }
        }

        paper-item {
          cursor: pointer;
          text-align: center;
          font-size: 14px;
        }

        paper-listbox {
          padding: 0;
        }

        label {
          @apply --paper-font-caption;
          color: var(
            --paper-input-container-color,
            var(--secondary-text-color)
          );
        }

        .time-input-wrap {
          @apply --layout-horizontal;
          @apply --layout-no-wrap;
        }

        [hidden] {
          display: none !important;
        }
      </style>

      <label hidden$="[[hideLabel]]">[[label]]</label>
      <div class="time-input-wrap">
        <!-- Hour Input -->
        <paper-input
          id="hour"
          type="number"
          value="{{hour}}"
          label="[[hourLabel]]"
          on-change="_shouldFormatHour"
          on-focus="_onFocus"
          required
          prevent-invalid-input
          auto-validate="[[autoValidate]]"
          maxlength="2"
          max="[[_computeHourMax(format)]]"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span suffix="" slot="suffix">:</span>
        </paper-input>

        <!-- Min Input -->
        <paper-input
          id="min"
          type="number"
          value="{{min}}"
          label="[[minLabel]]"
          on-change="_formatMin"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
        >
          <span hidden$="[[!enableSecond]]" suffix slot="suffix">:</span>
        </paper-input>

        <!-- Sec Input -->
        <paper-input
          id="sec"
          type="number"
          value="{{sec}}"
          label="[[secLabel]]"
          on-change="_formatSec"
          on-focus="_onFocus"
          required
          auto-validate="[[autoValidate]]"
          prevent-invalid-input
          maxlength="2"
          max="59"
          min="0"
          no-label-float$="[[!floatInputLabels]]"
          always-float-label$="[[alwaysFloatInputLabels]]"
          disabled="[[disabled]]"
          hidden$="[[!enableSecond]]"
        >
        </paper-input>

        <!-- Dropdown Menu -->
        <paper-dropdown-menu
          id="dropdown"
          required=""
          hidden$="[[_equal(format, 24)]]"
          no-label-float=""
          disabled="[[disabled]]"
        >
          <paper-listbox
            attr-for-selected="name"
            selected="{{amPm}}"
            slot="dropdown-content"
          >
            <paper-item name="AM">AM</paper-item>
            <paper-item name="PM">PM</paper-item>
          </paper-listbox>
        </paper-dropdown-menu>
      </div>
    `;
  }

  static get properties() {
    return {
      /**
       * Label for the input
       */
      label: {
        type: String,
        value: "Time"
      },

      /**
       * auto validate time inputs
       */
      autoValidate: {
        type: Boolean,
        value: true
      },

      /**
       * hides the label
       */
      hideLabel: {
        type: Boolean,
        value: false
      },

      /**
       * float the input labels
       */
      floatInputLabels: {
        type: Boolean,
        value: false
      },

      /**
       * always float the input labels
       */
      alwaysFloatInputLabels: {
        type: Boolean,
        value: false
      },

      /**
       * 12 or 24 hr format
       */
      format: {
        type: Number,
        value: 12
      },

      /**
       * disables the inputs
       */
      disabled: {
        type: Boolean,
        value: false
      },

      /**
       * hour
       */
      hour: {
        type: String,
        notify: true
      },

      /**
       * minute
       */
      min: {
        type: String,
        notify: true
      },

      /**
       * second
       */
      sec: {
        type: String,
        notify: true
      },

      /**
       * Suffix for the hour input
       */
      hourLabel: {
        type: String,
        value: ""
      },

      /**
       * Suffix for the min input
       */
      minLabel: {
        type: String,
        value: ":"
      },

      /**
       * Suffix for the sec input
       */
      secLabel: {
        type: String,
        value: ""
      },

      /**
       * show the sec field
       */
      enableSecond: {
        type: Boolean,
        value: false
      },

      /**
       * limit hours input
       */
      noHoursLimit: {
        type: Boolean,
        value: false
      },

      /**
       * AM or PM
       */
      amPm: {
        type: String,
        notify: true,
        value: "AM"
      },

      /**
       * Formatted time string
       */
      value: {
        type: String,
        notify: true,
        readOnly: true,
        computed: "_computeTime(min, hour, sec, amPm)"
      }
    };
  }
  /**
   * Validate the inputs
   * @return {boolean}
   */


  validate() {
    var valid = true; // Validate hour & min fields

    if (!this.$.hour.validate() | !this.$.min.validate()) {
      valid = false;
    } // Validate second field


    if (this.enableSecond && !this.$.sec.validate()) {
      valid = false;
    } // Validate AM PM if 12 hour time


    if (this.format === 12 && !this.$.dropdown.validate()) {
      valid = false;
    }

    return valid;
  }
  /**
   * Create time string
   */


  _computeTime(min, hour, sec, amPm) {
    let str;

    if (hour || min || sec && this.enableSecond) {
      hour = hour || "00";
      min = min || "00";
      sec = sec || "00";
      str = hour + ":" + min; // add sec field

      if (this.enableSecond && sec) {
        str = str + ":" + sec;
      } // No ampm on 24 hr time


      if (this.format === 12) {
        str = str + " " + amPm;
      }
    }

    return str;
  }

  _onFocus(ev) {
    ev.target.inputElement.inputElement.select();
  }
  /**
   * Format sec
   */


  _formatSec() {
    if (this.sec.toString().length === 1) {
      this.sec = this.sec.toString().padStart(2, "0");
    }
  }
  /**
   * Format min
   */


  _formatMin() {
    if (this.min.toString().length === 1) {
      this.min = this.min.toString().padStart(2, "0");
    }
  }
  /**
   * Format hour
   */


  _shouldFormatHour() {
    if (this.format === 24 && this.hour.toString().length === 1) {
      this.hour = this.hour.toString().padStart(2, "0");
    }
  }
  /**
   * 24 hour format has a max hr of 23
   */


  _computeHourMax(format) {
    if (this.noHoursLimit) {
      return null;
    }

    if (format === 12) {
      return format;
    }

    return 23;
  }

  _equal(n1, n2) {
    return n1 === n2;
  }

}
customElements.define("paper-time-input", PaperTimeInput);

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
        const hasHvacAction = states.states.some(state => state.attributes && state.attributes.hvac_action);
        const isHeating = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "heating" : state => state.state === "heat";
        const isCooling = domain === "climate" && hasHvacAction ? state => state.attributes.hvac_action === "cooling" : state => state.state === "cool";
        const hasHeat = states.states.some(isHeating);
        const hasCool = states.states.some(isCooling); // We differentiate between thermostats that have a target temperature
        // range versus ones that have just a target temperature
        // Using step chart by step-before so manually interpolation not needed.

        const hasTargetRange = states.states.some(state => state.attributes && state.attributes.target_temp_high !== state.attributes.target_temp_low);
        addColumn(`${this.hass.localize("ui.card.climate.current_temperature", "name", name)}`, true);

        if (hasHeat) {
          addColumn(`${this.hass.localize("ui.card.climate.heating", "name", name)}`, true, true); // The "heating" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasCool) {
          addColumn(`${this.hass.localize("ui.card.climate.cooling", "name", name)}`, true, true); // The "cooling" series uses steppedArea to shade the area below the current
          // temperature when the thermostat is calling for heat.
        }

        if (hasTargetRange) {
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.hass.localize("ui.card.climate.high"))}`, true);
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_mode", "name", name, "mode", this.hass.localize("ui.card.climate.low"))}`, true);
        } else {
          addColumn(`${this.hass.localize("ui.card.climate.target_temperature_entity", "name", name)}`, true);
        }

        states.states.forEach(state => {
          if (!state.attributes) return;
          const curTemp = safeParseFloat(state.attributes.current_temperature);
          const series = [curTemp];

          if (hasHeat) {
            series.push(isHeating(state) ? curTemp : null);
          }

          if (hasCool) {
            series.push(isCooling(state) ? curTemp : null);
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

/***/ "./src/data/camera.ts":
/*!****************************!*\
  !*** ./src/data/camera.ts ***!
  \****************************/
/*! exports provided: CAMERA_SUPPORT_ON_OFF, CAMERA_SUPPORT_STREAM, computeMJPEGStreamUrl, fetchThumbnailUrlWithCache, fetchThumbnailUrl, fetchThumbnail, fetchStreamUrl, fetchCameraPrefs, updateCameraPrefs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_ON_OFF", function() { return CAMERA_SUPPORT_ON_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CAMERA_SUPPORT_STREAM", function() { return CAMERA_SUPPORT_STREAM; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeMJPEGStreamUrl", function() { return computeMJPEGStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrlWithCache", function() { return fetchThumbnailUrlWithCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnailUrl", function() { return fetchThumbnailUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchThumbnail", function() { return fetchThumbnail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchStreamUrl", function() { return fetchStreamUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchCameraPrefs", function() { return fetchCameraPrefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateCameraPrefs", function() { return updateCameraPrefs; });
/* harmony import */ var _common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/time-cache-function-promise */ "./src/common/util/time-cache-function-promise.ts");
/* harmony import */ var _auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth */ "./src/data/auth.ts");


const CAMERA_SUPPORT_ON_OFF = 1;
const CAMERA_SUPPORT_STREAM = 2;
const computeMJPEGStreamUrl = entity => `/api/camera_proxy_stream/${entity.entity_id}?token=${entity.attributes.access_token}`;
const fetchThumbnailUrlWithCache = (hass, entityId) => Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
const fetchThumbnailUrl = async (hass, entityId) => {
  const path = await Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, `/api/camera_proxy/${entityId}`);
  return hass.hassUrl(path.path);
};
const fetchThumbnail = (hass, entityId) => {
  // tslint:disable-next-line: no-console
  console.warn("This method has been deprecated.");
  return hass.callWS({
    type: "camera_thumbnail",
    entity_id: entityId
  });
};
const fetchStreamUrl = async (hass, entityId, format) => {
  const data = {
    type: "camera/stream",
    entity_id: entityId
  };

  if (format) {
    // @ts-ignore
    data.format = format;
  }

  const stream = await hass.callWS(data);
  stream.url = hass.hassUrl(stream.url);
  return stream;
};
const fetchCameraPrefs = (hass, entityId) => hass.callWS({
  type: "camera/get_prefs",
  entity_id: entityId
});
const updateCameraPrefs = (hass, entityId, prefs) => hass.callWS(Object.assign({
  type: "camera/update_prefs",
  entity_id: entityId
}, prefs));

/***/ }),

/***/ "./src/data/climate.ts":
/*!*****************************!*\
  !*** ./src/data/climate.ts ***!
  \*****************************/
/*! exports provided: CLIMATE_PRESET_NONE, CLIMATE_SUPPORT_TARGET_TEMPERATURE, CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE, CLIMATE_SUPPORT_TARGET_HUMIDITY, CLIMATE_SUPPORT_FAN_MODE, CLIMATE_SUPPORT_PRESET_MODE, CLIMATE_SUPPORT_SWING_MODE, CLIMATE_SUPPORT_AUX_HEAT, compareClimateHvacModes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_PRESET_NONE", function() { return CLIMATE_PRESET_NONE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE", function() { return CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_TARGET_HUMIDITY", function() { return CLIMATE_SUPPORT_TARGET_HUMIDITY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_FAN_MODE", function() { return CLIMATE_SUPPORT_FAN_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_PRESET_MODE", function() { return CLIMATE_SUPPORT_PRESET_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_SWING_MODE", function() { return CLIMATE_SUPPORT_SWING_MODE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIMATE_SUPPORT_AUX_HEAT", function() { return CLIMATE_SUPPORT_AUX_HEAT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compareClimateHvacModes", function() { return compareClimateHvacModes; });
const CLIMATE_PRESET_NONE = "none";
const CLIMATE_SUPPORT_TARGET_TEMPERATURE = 1;
const CLIMATE_SUPPORT_TARGET_TEMPERATURE_RANGE = 2;
const CLIMATE_SUPPORT_TARGET_HUMIDITY = 4;
const CLIMATE_SUPPORT_FAN_MODE = 8;
const CLIMATE_SUPPORT_PRESET_MODE = 16;
const CLIMATE_SUPPORT_SWING_MODE = 32;
const CLIMATE_SUPPORT_AUX_HEAT = 64;
const hvacModeOrdering = {
  auto: 1,
  heat_cool: 2,
  heat: 3,
  cool: 4,
  dry: 5,
  fan_only: 6,
  off: 7
};
const compareClimateHvacModes = (mode1, mode2) => hvacModeOrdering[mode1] - hvacModeOrdering[mode2];

/***/ }),

/***/ "./src/data/entity_registry.ts":
/*!*************************************!*\
  !*** ./src/data/entity_registry.ts ***!
  \*************************************/
/*! exports provided: computeEntityRegistryName, updateEntityRegistryEntry, removeEntityRegistryEntry, subscribeEntityRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "computeEntityRegistryName", function() { return computeEntityRegistryName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateEntityRegistryEntry", function() { return updateEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEntityRegistryEntry", function() { return removeEntityRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeEntityRegistry", function() { return subscribeEntityRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



const computeEntityRegistryName = (hass, entry) => {
  if (entry.name) {
    return entry.name;
  }

  const state = hass.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["computeStateName"])(state) : null;
};
const updateEntityRegistryEntry = (hass, entityId, updates) => hass.callWS(Object.assign({
  type: "config/entity_registry/update",
  entity_id: entityId
}, updates));
const removeEntityRegistryEntry = (hass, entityId) => hass.callWS({
  type: "config/entity_registry/remove",
  entity_id: entityId
});

const fetchEntityRegistry = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeEntityRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchEntityRegistry(conn).then(entities => store.setState(entities, true)), 500, true), "entity_registry_updated");

const subscribeEntityRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);

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
const LINE_ATTRIBUTES_TO_KEEP = ["temperature", "current_temperature", "target_temp_low", "target_temp_high", "hvac_action"];
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
      state_localize: Object(_common_entity_compute_state_display__WEBPACK_IMPORTED_MODULE_2__["computeStateDisplay"])(localize, state, language),
      state: state.state,
      last_changed: state.last_changed
    });
  }

  return {
    name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(states[0]),
    entity_id: states[0].entity_id,
    data
  };
};

const processLineChartEntities = (unit, entities) => {
  const data = [];

  for (const states of entities) {
    const last = states[states.length - 1];
    const domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(last);
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
      name: Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["computeStateName"])(last),
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
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "climate") {
      unit = hass.config.unit_system.temperature;
    } else if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_1__["computeStateDomain"])(stateInfo[0]) === "water_heater") {
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

/***/ "./src/data/input-select.ts":
/*!**********************************!*\
  !*** ./src/data/input-select.ts ***!
  \**********************************/
/*! exports provided: setInputSelectOption */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setInputSelectOption", function() { return setInputSelectOption; });
const setInputSelectOption = (hass, entity, option) => hass.callService("input_select", "select_option", {
  option,
  entity_id: entity
});

/***/ }),

/***/ "./src/data/scene.ts":
/*!***************************!*\
  !*** ./src/data/scene.ts ***!
  \***************************/
/*! exports provided: SCENE_IGNORED_DOMAINS, SCENE_SAVED_ATTRIBUTES, activateScene, applyScene, getSceneConfig, saveScene, deleteScene */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_IGNORED_DOMAINS", function() { return SCENE_IGNORED_DOMAINS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SCENE_SAVED_ATTRIBUTES", function() { return SCENE_SAVED_ATTRIBUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "activateScene", function() { return activateScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyScene", function() { return applyScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSceneConfig", function() { return getSceneConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveScene", function() { return saveScene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteScene", function() { return deleteScene; });
const SCENE_IGNORED_DOMAINS = ["sensor", "binary_sensor", "device_tracker", "person", "persistent_notification", "configuration", "image_processing", "sun", "weather", "zone"];
const SCENE_SAVED_ATTRIBUTES = {
  light: ["brightness", "color_temp", "effect", "rgb_color", "xy_color", "hs_color"],
  media_player: ["is_volume_muted", "volume_level", "sound_mode", "source", "media_content_id", "media_content_type"],
  climate: ["target_temperature", "target_temperature_high", "target_temperature_low", "target_humidity", "fan_mode", "swing_mode", "hvac_mode", "preset_mode"],
  vacuum: ["cleaning_mode"],
  fan: ["speed", "current_direction"],
  water_heather: ["temperature", "operation_mode"]
};
const activateScene = (hass, entityId) => hass.callService("scene", "turn_on", {
  entity_id: entityId
});
const applyScene = (hass, entities) => hass.callService("scene", "apply", {
  entities
});
const getSceneConfig = (hass, sceneId) => hass.callApi("GET", `config/scene/config/${sceneId}`);
const saveScene = (hass, sceneId, config) => hass.callApi("POST", `config/scene/config/${sceneId}`, config);
const deleteScene = (hass, id) => hass.callApi("DELETE", `config/scene/config/${id}`);

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

/***/ }),

/***/ "./src/util/cover-model.js":
/*!*********************************!*\
  !*** ./src/util/cover-model.js ***!
  \*********************************/
/*! exports provided: default, supportsOpen, supportsClose, supportsSetPosition, supportsStop, supportsOpenTilt, supportsCloseTilt, supportsStopTilt, supportsSetTiltPosition, isTiltOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CoverEntity; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpen", function() { return supportsOpen; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsClose", function() { return supportsClose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetPosition", function() { return supportsSetPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStop", function() { return supportsStop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsOpenTilt", function() { return supportsOpenTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsCloseTilt", function() { return supportsCloseTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsStopTilt", function() { return supportsStopTilt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "supportsSetTiltPosition", function() { return supportsSetTiltPosition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isTiltOnly", function() { return isTiltOnly; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");

/* eslint-enable no-bitwise */

class CoverEntity {
  constructor(hass, stateObj) {
    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isFullyOpen() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 100;
    }

    return this.stateObj.state === "open";
  }

  get isFullyClosed() {
    if (this._attr.current_position !== undefined) {
      return this._attr.current_position === 0;
    }

    return this.stateObj.state === "closed";
  }

  get isFullyOpenTilt() {
    return this._attr.current_tilt_position === 100;
  }

  get isFullyClosedTilt() {
    return this._attr.current_tilt_position === 0;
  }

  get isOpening() {
    return this.stateObj.state === "opening";
  }

  get isClosing() {
    return this.stateObj.state === "closing";
  }

  get supportsOpen() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsClose() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
  }

  get supportsSetPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsStop() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsOpenTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsCloseTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsStopTilt() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
  }

  get supportsSetTiltPosition() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get isTiltOnly() {
    const supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
    const supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
    return supportsTilt && !supportsCover;
  }

  openCover() {
    this.callService("open_cover");
  }

  closeCover() {
    this.callService("close_cover");
  }

  stopCover() {
    this.callService("stop_cover");
  }

  openCoverTilt() {
    this.callService("open_cover_tilt");
  }

  closeCoverTilt() {
    this.callService("close_cover_tilt");
  }

  stopCoverTilt() {
    this.callService("stop_cover_tilt");
  }

  setCoverPosition(position) {
    this.callService("set_cover_position", {
      position
    });
  }

  setCoverTiltPosition(tiltPosition) {
    this.callService("set_cover_tilt_position", {
      tilt_position: tiltPosition
    });
  } // helper method


  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.hass.callService("cover", service, data);
  }

}
const supportsOpen = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
const supportsClose = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
const supportsSetPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
const supportsStop = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
const supportsOpenTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
const supportsCloseTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
const supportsStopTilt = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
const supportsSetTiltPosition = stateObj => Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
function isTiltOnly(stateObj) {
  const supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  const supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
  return supportsTilt && !supportsCover;
}

/***/ }),

/***/ "./src/util/hass-media-player-model.js":
/*!*********************************************!*\
  !*** ./src/util/hass-media-player-model.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MediaPlayerEntity; });
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");

class MediaPlayerEntity {
  constructor(hass, stateObj) {
    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  get isOff() {
    return this.stateObj.state === "off";
  }

  get isIdle() {
    return this.stateObj.state === "idle";
  }

  get isMuted() {
    return this._attr.is_volume_muted;
  }

  get isPaused() {
    return this.stateObj.state === "paused";
  }

  get isPlaying() {
    return this.stateObj.state === "playing";
  }

  get isMusic() {
    return this._attr.media_content_type === "music";
  }

  get isTVShow() {
    return this._attr.media_content_type === "tvshow";
  }

  get hasMediaControl() {
    return ["playing", "paused", "unknown", "on"].indexOf(this.stateObj.state) !== -1;
  }

  get volumeSliderValue() {
    return this._attr.volume_level * 100;
  }

  get showProgress() {
    return (this.isPlaying || this.isPaused) && "media_duration" in this.stateObj.attributes && "media_position" in this.stateObj.attributes && "media_position_updated_at" in this.stateObj.attributes;
  }

  get currentProgress() {
    var progress = this._attr.media_position;

    if (this.isPlaying) {
      progress += (Date.now() - new Date(this._attr.media_position_updated_at).getTime()) / 1000.0;
    }

    return progress;
  }

  get supportsPause() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
  }

  get supportsVolumeSet() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
  }

  get supportsVolumeMute() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
  }

  get supportsPreviousTrack() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
  }

  get supportsNextTrack() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
  }

  get supportsTurnOn() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
  }

  get supportsTurnOff() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 256);
  }

  get supportsPlayMedia() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 512);
  }

  get supportsVolumeButtons() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1024);
  }

  get supportsSelectSource() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2048);
  }

  get supportsSelectSoundMode() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 65536);
  }

  get supportsPlay() {
    return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16384);
  }

  get primaryTitle() {
    return this._attr.media_title;
  }

  get secondaryTitle() {
    if (this.isMusic) {
      return this._attr.media_artist;
    }

    if (this.isTVShow) {
      var text = this._attr.media_series_title;

      if (this._attr.media_season) {
        text += " S" + this._attr.media_season;

        if (this._attr.media_episode) {
          text += "E" + this._attr.media_episode;
        }
      }

      return text;
    }

    if (this._attr.app_name) {
      return this._attr.app_name;
    }

    return "";
  }

  get source() {
    return this._attr.source;
  }

  get sourceList() {
    return this._attr.source_list;
  }

  get soundMode() {
    return this._attr.sound_mode;
  }

  get soundModeList() {
    return this._attr.sound_mode_list;
  }

  mediaPlayPause() {
    this.callService("media_play_pause");
  }

  nextTrack() {
    this.callService("media_next_track");
  }

  playbackControl() {
    this.callService("media_play_pause");
  }

  previousTrack() {
    this.callService("media_previous_track");
  }

  setVolume(volume) {
    this.callService("volume_set", {
      volume_level: volume
    });
  }

  togglePower() {
    if (this.isOff) {
      this.turnOn();
    } else {
      this.turnOff();
    }
  }

  turnOff() {
    this.callService("turn_off");
  }

  turnOn() {
    this.callService("turn_on");
  }

  volumeDown() {
    this.callService("volume_down");
  }

  volumeMute(mute) {
    if (!this.supportsVolumeMute) {
      throw new Error("Muting volume not supported");
    }

    this.callService("volume_mute", {
      is_volume_muted: mute
    });
  }

  volumeUp() {
    this.callService("volume_up");
  }

  selectSource(source) {
    this.callService("select_source", {
      source
    });
  }

  selectSoundMode(soundMode) {
    this.callService("select_sound_mode", {
      sound_mode: soundMode
    });
  } // helper method


  callService(service, data = {}) {
    data.entity_id = this.stateObj.entity_id;
    this.hass.callService("media_player", service, data);
  }

}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vY29uZmlnL2lzX2NvbXBvbmVudF9sb2FkZWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9kdXJhdGlvbl90b19zZWNvbmRzLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X2RhdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvZm9ybWF0X3RpbWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZGF0ZXRpbWUvc2Vjb25kc190b19kdXJhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2RvbS9zdG9wX3Byb3BhZ2F0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vZW50aXR5L3RpbWVyX3RpbWVfcmVtYWluaW5nLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L2hhLWNoYXJ0LWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZW50aXR5L2hhLWVudGl0eS10b2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtY2xpbWF0ZS1zdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci1jb250cm9scy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1jb3Zlci10aWx0LWNvbnRyb2xzLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL2hhLXBhcGVyLWRyb3Bkb3duLW1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvaGEtcmVsYXRpdmUtdGltZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvcGFwZXItdGltZS1pbnB1dC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9zdGF0ZS1oaXN0b3J5LWNoYXJ0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9hdXRoLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhY2hlZC1oaXN0b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NhbWVyYS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jbGltYXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2VudGl0eV9yZWdpc3RyeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9oYS1zdGF0ZS1oaXN0b3J5LWRhdGEuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvaGlzdG9yeS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9pbnB1dC1zZWxlY3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvc2NlbmUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL21peGlucy9sb2NhbGl6ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9jb3Zlci1tb2RlbC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbC9oYXNzLW1lZGlhLXBsYXllci1tb2RlbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbi8qKiBSZXR1cm4gaWYgYSBjb21wb25lbnQgaXMgbG9hZGVkLiAqL1xuZXhwb3J0IGNvbnN0IGlzQ29tcG9uZW50TG9hZGVkID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBjb21wb25lbnQ6IHN0cmluZ1xuKTogYm9vbGVhbiA9PiBoYXNzICYmIGhhc3MuY29uZmlnLmNvbXBvbmVudHMuaW5kZXhPZihjb21wb25lbnQpICE9PSAtMTtcbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGR1cmF0aW9uVG9TZWNvbmRzKGR1cmF0aW9uOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBwYXJ0cyA9IGR1cmF0aW9uLnNwbGl0KFwiOlwiKS5tYXAoTnVtYmVyKTtcbiAgcmV0dXJuIHBhcnRzWzBdICogMzYwMCArIHBhcnRzWzFdICogNjAgKyBwYXJ0c1syXTtcbn1cbiIsImltcG9ydCBmZWNoYSBmcm9tIFwiZmVjaGFcIjtcblxuLy8gQ2hlY2sgZm9yIHN1cHBvcnQgb2YgbmF0aXZlIGxvY2FsZSBzdHJpbmcgb3B0aW9uc1xuZnVuY3Rpb24gdG9Mb2NhbGVEYXRlU3RyaW5nU3VwcG9ydHNPcHRpb25zKCkge1xuICB0cnkge1xuICAgIG5ldyBEYXRlKCkudG9Mb2NhbGVEYXRlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlRGF0ZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpXG4gID8gKGRhdGVPYmo6IERhdGUsIGxvY2FsZXM6IHN0cmluZykgPT5cbiAgICAgIGRhdGVPYmoudG9Mb2NhbGVEYXRlU3RyaW5nKGxvY2FsZXMsIHtcbiAgICAgICAgeWVhcjogXCJudW1lcmljXCIsXG4gICAgICAgIG1vbnRoOiBcImxvbmdcIixcbiAgICAgICAgZGF5OiBcIm51bWVyaWNcIixcbiAgICAgIH0pXG4gIDogKGRhdGVPYmo6IERhdGUpID0+IGZlY2hhLmZvcm1hdChkYXRlT2JqLCBcIm1lZGl1bURhdGVcIikpO1xuIiwiaW1wb3J0IGZlY2hhIGZyb20gXCJmZWNoYVwiO1xuXG4vLyBDaGVjayBmb3Igc3VwcG9ydCBvZiBuYXRpdmUgbG9jYWxlIHN0cmluZyBvcHRpb25zXG5mdW5jdGlvbiB0b0xvY2FsZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlU3RyaW5nKFwiaVwiKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlLm5hbWUgPT09IFwiUmFuZ2VFcnJvclwiO1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgKHRvTG9jYWxlU3RyaW5nU3VwcG9ydHNPcHRpb25zKClcbiAgPyAoZGF0ZU9iajogRGF0ZSwgbG9jYWxlczogc3RyaW5nKSA9PlxuICAgICAgZGF0ZU9iai50b0xvY2FsZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIHllYXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtb250aDogXCJsb25nXCIsXG4gICAgICAgIGRheTogXCJudW1lcmljXCIsXG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwiaGFEYXRlVGltZVwiKSk7XG4iLCJpbXBvcnQgZmVjaGEgZnJvbSBcImZlY2hhXCI7XG5cbi8vIENoZWNrIGZvciBzdXBwb3J0IG9mIG5hdGl2ZSBsb2NhbGUgc3RyaW5nIG9wdGlvbnNcbmZ1bmN0aW9uIHRvTG9jYWxlVGltZVN0cmluZ1N1cHBvcnRzT3B0aW9ucygpIHtcbiAgdHJ5IHtcbiAgICBuZXcgRGF0ZSgpLnRvTG9jYWxlVGltZVN0cmluZyhcImlcIik7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gZS5uYW1lID09PSBcIlJhbmdlRXJyb3JcIjtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmV4cG9ydCBkZWZhdWx0ICh0b0xvY2FsZVRpbWVTdHJpbmdTdXBwb3J0c09wdGlvbnMoKVxuICA/IChkYXRlT2JqOiBEYXRlLCBsb2NhbGVzOiBzdHJpbmcpID0+XG4gICAgICBkYXRlT2JqLnRvTG9jYWxlVGltZVN0cmluZyhsb2NhbGVzLCB7XG4gICAgICAgIGhvdXI6IFwibnVtZXJpY1wiLFxuICAgICAgICBtaW51dGU6IFwiMi1kaWdpdFwiLFxuICAgICAgfSlcbiAgOiAoZGF0ZU9iajogRGF0ZSkgPT4gZmVjaGEuZm9ybWF0KGRhdGVPYmosIFwic2hvcnRUaW1lXCIpKTtcbiIsImltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuLyoqXG4gKiBDYWxjdWxhdGUgYSBzdHJpbmcgcmVwcmVzZW50aW5nIGEgZGF0ZSBvYmplY3QgYXMgcmVsYXRpdmUgdGltZSBmcm9tIG5vdy5cbiAqXG4gKiBFeGFtcGxlIG91dHB1dDogNSBtaW51dGVzIGFnbywgaW4gMyBkYXlzLlxuICovXG5jb25zdCB0ZXN0cyA9IFs2MCwgNjAsIDI0LCA3XTtcbmNvbnN0IGxhbmdLZXkgPSBbXCJzZWNvbmRcIiwgXCJtaW51dGVcIiwgXCJob3VyXCIsIFwiZGF5XCJdO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWxhdGl2ZVRpbWUoXG4gIGRhdGVPYmo6IERhdGUsXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIG9wdGlvbnM6IHtcbiAgICBjb21wYXJlVGltZT86IERhdGU7XG4gICAgaW5jbHVkZVRlbnNlPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcge1xuICBjb25zdCBjb21wYXJlVGltZSA9IG9wdGlvbnMuY29tcGFyZVRpbWUgfHwgbmV3IERhdGUoKTtcbiAgbGV0IGRlbHRhID0gKGNvbXBhcmVUaW1lLmdldFRpbWUoKSAtIGRhdGVPYmouZ2V0VGltZSgpKSAvIDEwMDA7XG4gIGNvbnN0IHRlbnNlID0gZGVsdGEgPj0gMCA/IFwicGFzdFwiIDogXCJmdXR1cmVcIjtcbiAgZGVsdGEgPSBNYXRoLmFicyhkZWx0YSk7XG5cbiAgbGV0IHRpbWVEZXNjO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgdGVzdHMubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoZGVsdGEgPCB0ZXN0c1tpXSkge1xuICAgICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICAgIHRpbWVEZXNjID0gbG9jYWxpemUoXG4gICAgICAgIGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24uJHtsYW5nS2V5W2ldfWAsXG4gICAgICAgIFwiY291bnRcIixcbiAgICAgICAgZGVsdGFcbiAgICAgICk7XG4gICAgICBicmVhaztcbiAgICB9XG5cbiAgICBkZWx0YSAvPSB0ZXN0c1tpXTtcbiAgfVxuXG4gIGlmICh0aW1lRGVzYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhKTtcbiAgICB0aW1lRGVzYyA9IGxvY2FsaXplKFxuICAgICAgXCJ1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuZHVyYXRpb24ud2Vla1wiLFxuICAgICAgXCJjb3VudFwiLFxuICAgICAgZGVsdGFcbiAgICApO1xuICB9XG5cbiAgcmV0dXJuIG9wdGlvbnMuaW5jbHVkZVRlbnNlID09PSBmYWxzZVxuICAgID8gdGltZURlc2NcbiAgICA6IGxvY2FsaXplKGB1aS5jb21wb25lbnRzLnJlbGF0aXZlX3RpbWUuJHt0ZW5zZX1gLCBcInRpbWVcIiwgdGltZURlc2MpO1xufVxuIiwiY29uc3QgbGVmdFBhZCA9IChudW06IG51bWJlcikgPT4gKG51bSA8IDEwID8gYDAke251bX1gIDogbnVtKTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Vjb25kc1RvRHVyYXRpb24oZDogbnVtYmVyKSB7XG4gIGNvbnN0IGggPSBNYXRoLmZsb29yKGQgLyAzNjAwKTtcbiAgY29uc3QgbSA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAvIDYwKTtcbiAgY29uc3QgcyA9IE1hdGguZmxvb3IoKGQgJSAzNjAwKSAlIDYwKTtcblxuICBpZiAoaCA+IDApIHtcbiAgICByZXR1cm4gYCR7aH06JHtsZWZ0UGFkKG0pfToke2xlZnRQYWQocyl9YDtcbiAgfVxuICBpZiAobSA+IDApIHtcbiAgICByZXR1cm4gYCR7bX06JHtsZWZ0UGFkKHMpfWA7XG4gIH1cbiAgaWYgKHMgPiAwKSB7XG4gICAgcmV0dXJuIFwiXCIgKyBzO1xuICB9XG4gIHJldHVybiBudWxsO1xufVxuIiwiZXhwb3J0IGNvbnN0IHN0b3BQcm9wYWdhdGlvbiA9IChldikgPT4gZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4vY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCBmb3JtYXREYXRlVGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X2RhdGVfdGltZVwiO1xuaW1wb3J0IGZvcm1hdERhdGUgZnJvbSBcIi4uL2RhdGV0aW1lL2Zvcm1hdF9kYXRlXCI7XG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiLi4vZGF0ZXRpbWUvZm9ybWF0X3RpbWVcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVTdGF0ZURpc3BsYXkgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIHN0YXRlT2JqOiBIYXNzRW50aXR5LFxuICBsYW5ndWFnZTogc3RyaW5nXG4pOiBzdHJpbmcgPT4ge1xuICBsZXQgZGlzcGxheTogc3RyaW5nIHwgdW5kZWZpbmVkO1xuICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4oc3RhdGVPYmopO1xuXG4gIGlmIChkb21haW4gPT09IFwiYmluYXJ5X3NlbnNvclwiKSB7XG4gICAgLy8gVHJ5IGRldmljZSBjbGFzcyB0cmFuc2xhdGlvbiwgdGhlbiBkZWZhdWx0IGJpbmFyeSBzZW5zb3IgdHJhbnNsYXRpb25cbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5kZXZpY2VfY2xhc3MpIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShcbiAgICAgICAgYHN0YXRlLiR7ZG9tYWlufS4ke3N0YXRlT2JqLmF0dHJpYnV0ZXMuZGV2aWNlX2NsYXNzfS4ke3N0YXRlT2JqLnN0YXRlfWBcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCFkaXNwbGF5KSB7XG4gICAgICBkaXNwbGF5ID0gbG9jYWxpemUoYHN0YXRlLiR7ZG9tYWlufS5kZWZhdWx0LiR7c3RhdGVPYmouc3RhdGV9YCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKFxuICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudW5pdF9vZl9tZWFzdXJlbWVudCAmJlxuICAgICFbXCJ1bmtub3duXCIsIFwidW5hdmFpbGFibGVcIl0uaW5jbHVkZXMoc3RhdGVPYmouc3RhdGUpXG4gICkge1xuICAgIGRpc3BsYXkgPSBzdGF0ZU9iai5zdGF0ZSArIFwiIFwiICsgc3RhdGVPYmouYXR0cmlidXRlcy51bml0X29mX21lYXN1cmVtZW50O1xuICB9IGVsc2UgaWYgKGRvbWFpbiA9PT0gXCJpbnB1dF9kYXRldGltZVwiKSB7XG4gICAgbGV0IGRhdGU6IERhdGU7XG4gICAgaWYgKCFzdGF0ZU9iai5hdHRyaWJ1dGVzLmhhc190aW1lKSB7XG4gICAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMueWVhcixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5tb250aCAtIDEsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuZGF5XG4gICAgICApO1xuICAgICAgZGlzcGxheSA9IGZvcm1hdERhdGUoZGF0ZSwgbGFuZ3VhZ2UpO1xuICAgIH0gZWxzZSBpZiAoIXN0YXRlT2JqLmF0dHJpYnV0ZXMuaGFzX2RhdGUpIHtcbiAgICAgIGNvbnN0IG5vdyA9IG5ldyBEYXRlKCk7XG4gICAgICBkYXRlID0gbmV3IERhdGUoXG4gICAgICAgIC8vIER1ZSB0byBidWdzLmNocm9taXVtLm9yZy9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9Nzk3NTQ4XG4gICAgICAgIC8vIGRvbid0IHVzZSBhcnRpZmljaWFsIDE5NzAgeWVhci5cbiAgICAgICAgbm93LmdldEZ1bGxZZWFyKCksXG4gICAgICAgIG5vdy5nZXRNb250aCgpLFxuICAgICAgICBub3cuZ2V0RGF5KCksXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaG91cixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5taW51dGVcbiAgICAgICk7XG4gICAgICBkaXNwbGF5ID0gZm9ybWF0VGltZShkYXRlLCBsYW5ndWFnZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGUgPSBuZXcgRGF0ZShcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy55ZWFyLFxuICAgICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLm1vbnRoIC0gMSxcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5kYXksXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaG91cixcbiAgICAgICAgc3RhdGVPYmouYXR0cmlidXRlcy5taW51dGVcbiAgICAgICk7XG4gICAgICBkaXNwbGF5ID0gZm9ybWF0RGF0ZVRpbWUoZGF0ZSwgbGFuZ3VhZ2UpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChkb21haW4gPT09IFwiendhdmVcIikge1xuICAgIGlmIChbXCJpbml0aWFsaXppbmdcIiwgXCJkZWFkXCJdLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKSkge1xuICAgICAgZGlzcGxheSA9IGxvY2FsaXplKFxuICAgICAgICBgc3RhdGUuendhdmUucXVlcnlfc3RhZ2UuJHtzdGF0ZU9iai5zdGF0ZX1gLFxuICAgICAgICBcInF1ZXJ5X3N0YWdlXCIsXG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMucXVlcnlfc3RhZ2VcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRpc3BsYXkgPSBsb2NhbGl6ZShgc3RhdGUuendhdmUuZGVmYXVsdC4ke3N0YXRlT2JqLnN0YXRlfWApO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBkaXNwbGF5ID0gbG9jYWxpemUoYHN0YXRlLiR7ZG9tYWlufS4ke3N0YXRlT2JqLnN0YXRlfWApO1xuICB9XG5cbiAgLy8gRmFsbCBiYWNrIHRvIGRlZmF1bHQsIGNvbXBvbmVudCBiYWNrZW5kIHRyYW5zbGF0aW9uLCBvciByYXcgc3RhdGUgaWYgbm90aGluZyBlbHNlIG1hdGNoZXMuXG4gIGlmICghZGlzcGxheSkge1xuICAgIGRpc3BsYXkgPVxuICAgICAgbG9jYWxpemUoYHN0YXRlLmRlZmF1bHQuJHtzdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgbG9jYWxpemUoYGNvbXBvbmVudC4ke2RvbWFpbn0uc3RhdGUuJHtzdGF0ZU9iai5zdGF0ZX1gKSB8fFxuICAgICAgc3RhdGVPYmouc3RhdGU7XG4gIH1cblxuICByZXR1cm4gZGlzcGxheTtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNGZWF0dXJlID0gKFxuICBzdGF0ZU9iajogSGFzc0VudGl0eSxcbiAgZmVhdHVyZTogbnVtYmVyXG4pOiBib29sZWFuID0+IHtcbiAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWJpdHdpc2VcbiAgcmV0dXJuIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnN1cHBvcnRlZF9mZWF0dXJlcyEgJiBmZWF0dXJlKSAhPT0gMDtcbn07XG4iLCJpbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IGR1cmF0aW9uVG9TZWNvbmRzIGZyb20gXCIuLi9kYXRldGltZS9kdXJhdGlvbl90b19zZWNvbmRzXCI7XG5cbmV4cG9ydCBjb25zdCB0aW1lclRpbWVSZW1haW5pbmcgPSAoc3RhdGVPYmo6IEhhc3NFbnRpdHkpID0+IHtcbiAgbGV0IHRpbWVSZW1haW5pbmcgPSBkdXJhdGlvblRvU2Vjb25kcyhzdGF0ZU9iai5hdHRyaWJ1dGVzLnJlbWFpbmluZyk7XG5cbiAgaWYgKHN0YXRlT2JqLnN0YXRlID09PSBcImFjdGl2ZVwiKSB7XG4gICAgY29uc3Qgbm93ID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgY29uc3QgbWFkZUFjdGl2ZSA9IG5ldyBEYXRlKHN0YXRlT2JqLmxhc3RfY2hhbmdlZCkuZ2V0VGltZSgpO1xuICAgIHRpbWVSZW1haW5pbmcgPSBNYXRoLm1heCh0aW1lUmVtYWluaW5nIC0gKG5vdyAtIG1hZGVBY3RpdmUpIC8gMTAwMCwgMCk7XG4gIH1cblxuICByZXR1cm4gdGltZVJlbWFpbmluZztcbn07XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmludGVyZmFjZSBSZXN1bHRDYWNoZTxUPiB7XG4gIFtlbnRpdHlJZDogc3RyaW5nXTogUHJvbWlzZTxUPiB8IHVuZGVmaW5lZDtcbn1cblxuZXhwb3J0IGNvbnN0IHRpbWVDYWNoZVByb21pc2VGdW5jID0gYXN5bmMgPFQ+KFxuICBjYWNoZUtleTogc3RyaW5nLFxuICBjYWNoZVRpbWU6IG51bWJlcixcbiAgZnVuYzogKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgZW50aXR5SWQ6IHN0cmluZyxcbiAgICAuLi5hcmdzOiB1bmtub3duW11cbiAgKSA9PiBQcm9taXNlPFQ+LFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICAuLi5hcmdzOiB1bmtub3duW11cbik6IFByb21pc2U8VD4gPT4ge1xuICBsZXQgY2FjaGU6IFJlc3VsdENhY2hlPFQ+IHwgdW5kZWZpbmVkID0gKGhhc3MgYXMgYW55KVtjYWNoZUtleV07XG5cbiAgaWYgKCFjYWNoZSkge1xuICAgIGNhY2hlID0gaGFzc1tjYWNoZUtleV0gPSB7fTtcbiAgfVxuXG4gIGNvbnN0IGxhc3RSZXN1bHQgPSBjYWNoZVtlbnRpdHlJZF07XG5cbiAgaWYgKGxhc3RSZXN1bHQpIHtcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfVxuXG4gIGNvbnN0IHJlc3VsdCA9IGZ1bmMoaGFzcywgZW50aXR5SWQsIC4uLmFyZ3MpO1xuICBjYWNoZVtlbnRpdHlJZF0gPSByZXN1bHQ7XG5cbiAgcmVzdWx0LnRoZW4oXG4gICAgLy8gV2hlbiBzdWNjZXNzZnVsLCBzZXQgdGltZXIgdG8gY2xlYXIgY2FjaGVcbiAgICAoKSA9PlxuICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNhY2hlIVtlbnRpdHlJZF0gPSB1bmRlZmluZWQ7XG4gICAgICB9LCBjYWNoZVRpbWUpLFxuICAgIC8vIE9uIGZhaWx1cmUsIGNsZWFyIGNhY2hlIHJpZ2h0IGF3YXlcbiAgICAoKSA9PiB7XG4gICAgICBjYWNoZSFbZW50aXR5SWRdID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgKTtcblxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsImltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3JcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IHRpbWVPdXQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmNcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuXG5pbXBvcnQgZm9ybWF0VGltZSBmcm9tIFwiLi4vLi4vY29tbW9uL2RhdGV0aW1lL2Zvcm1hdF90aW1lXCI7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbi8qIGdsb2JhbCBDaGFydCBtb21lbnQgQ29sb3IgKi9cblxubGV0IHNjcmlwdHNMb2FkZWQgPSBudWxsO1xuXG5jbGFzcyBIYUNoYXJ0QmFzZSBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICBbSXJvblJlc2l6YWJsZUJlaGF2aW9yXSxcbiAgUG9seW1lckVsZW1lbnRcbikge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0SGVhZGVyIHtcbiAgICAgICAgICBwYWRkaW5nOiA2cHggMCAwIDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydEhlYWRlciA+IGRpdiB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IHRvcDtcbiAgICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIgPiBkaXYuY2hhcnRUaXRsZSB7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgICBmbGV4OiAwIDAgMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDMwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRIZWFkZXIgPiBkaXYuY2hhcnRMZWdlbmQge1xuICAgICAgICAgIGZsZXg6IDEgMTtcbiAgICAgICAgICBtaW4td2lkdGg6IDcwJTtcbiAgICAgICAgfVxuICAgICAgICA6cm9vdCB7XG4gICAgICAgICAgdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRUb29sdGlwIHtcbiAgICAgICAgICBmb250LXNpemU6IDkwJTtcbiAgICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDgwLCA4MCwgODAsIDAuOSk7XG4gICAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAxMnB4KTtcbiAgICAgICAgICB6LWluZGV4OiAxMDAwO1xuICAgICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTVzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICAgIDpob3N0KFtydGxdKSAuY2hhcnRUb29sdGlwIHtcbiAgICAgICAgICBkaXJlY3Rpb246IHJ0bDtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRMZWdlbmQgdWwsXG4gICAgICAgIC5jaGFydFRvb2x0aXAgdWwge1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwYWRkaW5nOiAwIDBweDtcbiAgICAgICAgICBtYXJnaW46IDVweCAwIDAgMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAuY2hhcnRUb29sdGlwIGxpIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogcHJlLWxpbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmNoYXJ0VG9vbHRpcCAudGl0bGUge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIHBhZGRpbmc6IDAgNnB4O1xuICAgICAgICAgIG1heC13aWR0aDogNDklO1xuICAgICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBsaTpudGgtY2hpbGQob2RkKTpsYXN0LW9mLXR5cGUge1xuICAgICAgICAgIC8qIE1ha2UgbGFzdCBpdGVtIHRha2UgZnVsbCB3aWR0aCBpZiBpdCBpcyBvZGQtbnVtYmVyZWQuICovXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBsaVtkYXRhLWhpZGRlbl0ge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICB9XG4gICAgICAgIC5jaGFydExlZ2VuZCBlbSxcbiAgICAgICAgLmNoYXJ0VG9vbHRpcCBlbSB7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBoZWlnaHQ6IDEwcHg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0cHg7XG4gICAgICAgICAgd2lkdGg6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgICAgOmhvc3QoW3J0bF0pIC5jaGFydFRvb2x0aXAgZW0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogaW5oZXJpdDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgICAgICB9XG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW3VuaXRdXVwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRIZWFkZXJcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2hhcnRUaXRsZVwiPltbdW5pdF1dPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNoYXJ0TGVnZW5kXCI+XG4gICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbWV0YXNdXVwiPlxuICAgICAgICAgICAgICAgIDxsaSBvbi1jbGljaz1cIl9sZWdlbmRDbGlja1wiIGRhdGEtaGlkZGVuJD1cIltbaXRlbS5oaWRkZW5dXVwiPlxuICAgICAgICAgICAgICAgICAgPGVtIHN0eWxlJD1cImJhY2tncm91bmQtY29sb3I6W1tpdGVtLmJnQ29sb3JdXVwiPjwvZW0+XG4gICAgICAgICAgICAgICAgICBbW2l0ZW0ubGFiZWxdXVxuICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8ZGl2IGlkPVwiY2hhcnRUYXJnZXRcIiBzdHlsZT1cImhlaWdodDo0MHB4OyB3aWR0aDoxMDAlXCI+XG4gICAgICAgIDxjYW52YXMgaWQ9XCJjaGFydENhbnZhc1wiPjwvY2FudmFzPlxuICAgICAgICA8ZGl2XG4gICAgICAgICAgY2xhc3MkPVwiY2hhcnRUb29sdGlwIFtbdG9vbHRpcC55QWxpZ25dXVwiXG4gICAgICAgICAgc3R5bGUkPVwib3BhY2l0eTpbW3Rvb2x0aXAub3BhY2l0eV1dOyB0b3A6W1t0b29sdGlwLnRvcF1dOyBsZWZ0OltbdG9vbHRpcC5sZWZ0XV07IHBhZGRpbmc6W1t0b29sdGlwLnlQYWRkaW5nXV1weCBbW3Rvb2x0aXAueFBhZGRpbmddXXB4XCJcbiAgICAgICAgPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPltbdG9vbHRpcC50aXRsZV1dPC9kaXY+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1t0b29sdGlwLmxpbmVzXV1cIj5cbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8ZW0gc3R5bGUkPVwiYmFja2dyb3VuZC1jb2xvcjpbW2l0ZW0uYmdDb2xvcl1dXCI+PC9lbVxuICAgICAgICAgICAgICAgICAgPltbaXRlbS50ZXh0XV1cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICAgICAgPC91bD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgZ2V0IGNoYXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9jaGFydDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGF0YTogT2JqZWN0LFxuICAgICAgaWRlbnRpZmllcjogU3RyaW5nLFxuICAgICAgcmVuZGVyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIG1ldGFzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICB2YWx1ZTogKCkgPT4gW10sXG4gICAgICB9LFxuICAgICAgdG9vbHRpcDoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiAoKSA9PiAoe1xuICAgICAgICAgIG9wYWNpdHk6IFwiMFwiLFxuICAgICAgICAgIGxlZnQ6IFwiMFwiLFxuICAgICAgICAgIHRvcDogXCIwXCIsXG4gICAgICAgICAgeFBhZGRpbmc6IFwiNVwiLFxuICAgICAgICAgIHlQYWRkaW5nOiBcIjNcIixcbiAgICAgICAgfSksXG4gICAgICB9LFxuICAgICAgdW5pdDogT2JqZWN0LFxuICAgICAgcnRsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXCJvblByb3BzQ2hhbmdlKGRhdGEpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLm9uUHJvcHNDaGFuZ2UoKTtcbiAgICB0aGlzLl9yZXNpemVMaXN0ZW5lciA9ICgpID0+IHtcbiAgICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgICAgdGhpcy5fZGVib3VuY2VyLFxuICAgICAgICB0aW1lT3V0LmFmdGVyKDEwKSxcbiAgICAgICAgKCkgPT4ge1xuICAgICAgICAgIGlmICh0aGlzLl9pc0F0dGFjaGVkKSB7XG4gICAgICAgICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH07XG5cbiAgICBpZiAodHlwZW9mIFJlc2l6ZU9ic2VydmVyID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIHRoaXMucmVzaXplT2JzZXJ2ZXIgPSBuZXcgUmVzaXplT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9yZXNpemVMaXN0ZW5lcigpO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci5vYnNlcnZlKHRoaXMuJC5jaGFydFRhcmdldCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcihcImlyb24tcmVzaXplXCIsIHRoaXMuX3Jlc2l6ZUxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICBpZiAoc2NyaXB0c0xvYWRlZCA9PT0gbnVsbCkge1xuICAgICAgc2NyaXB0c0xvYWRlZCA9IGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImxvYWRfY2hhcnRcIiAqLyBcIi4uLy4uL3Jlc291cmNlcy9oYS1jaGFydC1zY3JpcHRzLmpzXCIpO1xuICAgIH1cbiAgICBzY3JpcHRzTG9hZGVkLnRoZW4oKENoYXJ0TW9kdWxlKSA9PiB7XG4gICAgICB0aGlzLkNoYXJ0Q2xhc3MgPSBDaGFydE1vZHVsZS5kZWZhdWx0O1xuICAgICAgdGhpcy5vblByb3BzQ2hhbmdlKCk7XG4gICAgfSk7XG4gIH1cblxuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSBmYWxzZTtcbiAgICBpZiAodGhpcy5yZXNpemVPYnNlcnZlcikge1xuICAgICAgdGhpcy5yZXNpemVPYnNlcnZlci51bm9ic2VydmUodGhpcy4kLmNoYXJ0VGFyZ2V0KTtcbiAgICB9XG5cbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJpcm9uLXJlc2l6ZVwiLCB0aGlzLl9yZXNpemVMaXN0ZW5lcik7XG5cbiAgICBpZiAodGhpcy5fcmVzaXplVGltZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgY2xlYXJJbnRlcnZhbCh0aGlzLl9yZXNpemVUaW1lcik7XG4gICAgICB0aGlzLl9yZXNpemVUaW1lciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBvblByb3BzQ2hhbmdlKCkge1xuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCB8fCAhdGhpcy5DaGFydENsYXNzIHx8ICF0aGlzLmRhdGEpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIF9jdXN0b21Ub29sdGlwcyh0b29sdGlwKSB7XG4gICAgLy8gSGlkZSBpZiBubyB0b29sdGlwXG4gICAgaWYgKHRvb2x0aXAub3BhY2l0eSA9PT0gMCkge1xuICAgICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcIm9wYWNpdHlcIl0sIDApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBTZXQgY2FyZXQgUG9zaXRpb25cbiAgICBpZiAodG9vbHRpcC55QWxpZ24pIHtcbiAgICAgIHRoaXMuc2V0KFtcInRvb2x0aXBcIiwgXCJ5QWxpZ25cIl0sIHRvb2x0aXAueUFsaWduKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXQoW1widG9vbHRpcFwiLCBcInlBbGlnblwiXSwgXCJuby10cmFuc2Zvcm1cIik7XG4gICAgfVxuXG4gICAgY29uc3QgdGl0bGUgPSB0b29sdGlwLnRpdGxlID8gdG9vbHRpcC50aXRsZVswXSB8fCBcIlwiIDogXCJcIjtcbiAgICB0aGlzLnNldChbXCJ0b29sdGlwXCIsIFwidGl0bGVcIl0sIHRpdGxlKTtcblxuICAgIGNvbnN0IGJvZHlMaW5lcyA9IHRvb2x0aXAuYm9keS5tYXAoKG4pID0+IG4ubGluZXMpO1xuXG4gICAgLy8gU2V0IFRleHRcbiAgICBpZiAodG9vbHRpcC5ib2R5KSB7XG4gICAgICB0aGlzLnNldChcbiAgICAgICAgW1widG9vbHRpcFwiLCBcImxpbmVzXCJdLFxuICAgICAgICBib2R5TGluZXMubWFwKChib2R5LCBpKSA9PiB7XG4gICAgICAgICAgY29uc3QgY29sb3JzID0gdG9vbHRpcC5sYWJlbENvbG9yc1tpXTtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgY29sb3I6IGNvbG9ycy5ib3JkZXJDb2xvcixcbiAgICAgICAgICAgIGJnQ29sb3I6IGNvbG9ycy5iYWNrZ3JvdW5kQ29sb3IsXG4gICAgICAgICAgICB0ZXh0OiBib2R5LmpvaW4oXCJcXG5cIiksXG4gICAgICAgICAgfTtcbiAgICAgICAgfSlcbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnN0IHBhcmVudFdpZHRoID0gdGhpcy4kLmNoYXJ0VGFyZ2V0LmNsaWVudFdpZHRoO1xuICAgIGxldCBwb3NpdGlvblggPSB0b29sdGlwLmNhcmV0WDtcbiAgICBjb25zdCBwb3NpdGlvblkgPSB0aGlzLl9jaGFydC5jYW52YXMub2Zmc2V0VG9wICsgdG9vbHRpcC5jYXJldFk7XG4gICAgaWYgKHRvb2x0aXAuY2FyZXRYICsgMTAwID4gcGFyZW50V2lkdGgpIHtcbiAgICAgIHBvc2l0aW9uWCA9IHBhcmVudFdpZHRoIC0gMTAwO1xuICAgIH0gZWxzZSBpZiAodG9vbHRpcC5jYXJldFggPCAxMDApIHtcbiAgICAgIHBvc2l0aW9uWCA9IDEwMDtcbiAgICB9XG4gICAgcG9zaXRpb25YICs9IHRoaXMuX2NoYXJ0LmNhbnZhcy5vZmZzZXRMZWZ0O1xuICAgIC8vIERpc3BsYXksIHBvc2l0aW9uLCBhbmQgc2V0IHN0eWxlcyBmb3IgZm9udFxuICAgIHRoaXMudG9vbHRpcCA9IHtcbiAgICAgIC4uLnRoaXMudG9vbHRpcCxcbiAgICAgIG9wYWNpdHk6IDEsXG4gICAgICBsZWZ0OiBgJHtwb3NpdGlvblh9cHhgLFxuICAgICAgdG9wOiBgJHtwb3NpdGlvbll9cHhgLFxuICAgIH07XG4gIH1cblxuICBfbGVnZW5kQ2xpY2soZXZlbnQpIHtcbiAgICBldmVudCA9IGV2ZW50IHx8IHdpbmRvdy5ldmVudDtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBsZXQgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0IHx8IGV2ZW50LnNyY0VsZW1lbnQ7XG4gICAgd2hpbGUgKHRhcmdldC5ub2RlTmFtZSAhPT0gXCJMSVwiKSB7XG4gICAgICAvLyB1c2VyIGNsaWNrZWQgY2hpbGQsIGZpbmQgcGFyZW50IExJXG4gICAgICB0YXJnZXQgPSB0YXJnZXQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgY29uc3QgaW5kZXggPSBldmVudC5tb2RlbC5pdGVtc0luZGV4O1xuXG4gICAgY29uc3QgbWV0YSA9IHRoaXMuX2NoYXJ0LmdldERhdGFzZXRNZXRhKGluZGV4KTtcbiAgICBtZXRhLmhpZGRlbiA9XG4gICAgICBtZXRhLmhpZGRlbiA9PT0gbnVsbCA/ICF0aGlzLl9jaGFydC5kYXRhLmRhdGFzZXRzW2luZGV4XS5oaWRkZW4gOiBudWxsO1xuICAgIHRoaXMuc2V0KFxuICAgICAgW1wibWV0YXNcIiwgaW5kZXgsIFwiaGlkZGVuXCJdLFxuICAgICAgdGhpcy5fY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpbmRleCkgPyBudWxsIDogXCJoaWRkZW5cIlxuICAgICk7XG4gICAgdGhpcy5fY2hhcnQudXBkYXRlKCk7XG4gIH1cblxuICBfZHJhd0xlZ2VuZCgpIHtcbiAgICBjb25zdCBjaGFydCA9IHRoaXMuX2NoYXJ0O1xuICAgIC8vIE5ldyBkYXRhIGZvciBvbGQgZ3JhcGguIEtlZXAgbWV0YWRhdGEuXG4gICAgY29uc3QgcHJlc2VydmVWaXNpYmlsaXR5ID1cbiAgICAgIHRoaXMuX29sZElkZW50aWZpZXIgJiYgdGhpcy5pZGVudGlmaWVyID09PSB0aGlzLl9vbGRJZGVudGlmaWVyO1xuICAgIHRoaXMuX29sZElkZW50aWZpZXIgPSB0aGlzLmlkZW50aWZpZXI7XG4gICAgdGhpcy5zZXQoXG4gICAgICBcIm1ldGFzXCIsXG4gICAgICB0aGlzLl9jaGFydC5kYXRhLmRhdGFzZXRzLm1hcCgoeCwgaSkgPT4gKHtcbiAgICAgICAgbGFiZWw6IHgubGFiZWwsXG4gICAgICAgIGNvbG9yOiB4LmNvbG9yLFxuICAgICAgICBiZ0NvbG9yOiB4LmJhY2tncm91bmRDb2xvcixcbiAgICAgICAgaGlkZGVuOlxuICAgICAgICAgIHByZXNlcnZlVmlzaWJpbGl0eSAmJiBpIDwgdGhpcy5tZXRhcy5sZW5ndGhcbiAgICAgICAgICAgID8gdGhpcy5tZXRhc1tpXS5oaWRkZW5cbiAgICAgICAgICAgIDogIWNoYXJ0LmlzRGF0YXNldFZpc2libGUoaSksXG4gICAgICB9KSlcbiAgICApO1xuICAgIGxldCB1cGRhdGVOZWVkZWQgPSBmYWxzZTtcbiAgICBpZiAocHJlc2VydmVWaXNpYmlsaXR5KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubWV0YXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY29uc3QgbWV0YSA9IGNoYXJ0LmdldERhdGFzZXRNZXRhKGkpO1xuICAgICAgICBpZiAoISFtZXRhLmhpZGRlbiAhPT0gISF0aGlzLm1ldGFzW2ldLmhpZGRlbikgdXBkYXRlTmVlZGVkID0gdHJ1ZTtcbiAgICAgICAgbWV0YS5oaWRkZW4gPSB0aGlzLm1ldGFzW2ldLmhpZGRlbiA/IHRydWUgOiBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodXBkYXRlTmVlZGVkKSB7XG4gICAgICBjaGFydC51cGRhdGUoKTtcbiAgICB9XG4gICAgdGhpcy51bml0ID0gdGhpcy5kYXRhLnVuaXQ7XG4gIH1cblxuICBfZm9ybWF0VGlja1ZhbHVlKHZhbHVlLCBpbmRleCwgdmFsdWVzKSB7XG4gICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHZhbHVlc1tpbmRleF0udmFsdWUpO1xuICAgIHJldHVybiBmb3JtYXRUaW1lKGRhdGUpO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IGRhdGEgPSB0aGlzLmRhdGEuZGF0YTtcbiAgICBjb25zdCBjdHggPSB0aGlzLiQuY2hhcnRDYW52YXM7XG5cbiAgICBpZiAoKCFkYXRhLmRhdGFzZXRzIHx8ICFkYXRhLmRhdGFzZXRzLmxlbmd0aCkgJiYgIXRoaXMuX2NoYXJ0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmRhdGEudHlwZSAhPT0gXCJ0aW1lbGluZVwiICYmIGRhdGEuZGF0YXNldHMubGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgY250ID0gZGF0YS5kYXRhc2V0cy5sZW5ndGg7XG4gICAgICBjb25zdCBjb2xvcnMgPSB0aGlzLmNvbnN0cnVjdG9yLmdldENvbG9yTGlzdChjbnQpO1xuICAgICAgZm9yIChsZXQgbG9vcEkgPSAwOyBsb29wSSA8IGNudDsgbG9vcEkrKykge1xuICAgICAgICBkYXRhLmRhdGFzZXRzW2xvb3BJXS5ib3JkZXJDb2xvciA9IGNvbG9yc1tsb29wSV0ucmdiU3RyaW5nKCk7XG4gICAgICAgIGRhdGEuZGF0YXNldHNbbG9vcEldLmJhY2tncm91bmRDb2xvciA9IGNvbG9yc1tsb29wSV1cbiAgICAgICAgICAuYWxwaGEoMC42KVxuICAgICAgICAgIC5yZ2JhU3RyaW5nKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2NoYXJ0KSB7XG4gICAgICB0aGlzLl9jdXN0b21Ub29sdGlwcyh7IG9wYWNpdHk6IDAgfSk7XG4gICAgICB0aGlzLl9jaGFydC5kYXRhID0gZGF0YTtcbiAgICAgIHRoaXMuX2NoYXJ0LnVwZGF0ZSh7IGR1cmF0aW9uOiAwIH0pO1xuICAgICAgaWYgKHRoaXMuaXNUaW1lbGluZSkge1xuICAgICAgICB0aGlzLl9jaGFydC5vcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMuZGlzcGxheSA9IGRhdGEubGVuZ3RoID4gMTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kYXRhLmxlZ2VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9kcmF3TGVnZW5kKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICghZGF0YS5kYXRhc2V0cykge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLl9jdXN0b21Ub29sdGlwcyh7IG9wYWNpdHk6IDAgfSk7XG4gICAgICBjb25zdCBwbHVnaW5zID0gW3sgYWZ0ZXJSZW5kZXI6ICgpID0+IHRoaXMuX3NldFJlbmRlcmVkKHRydWUpIH1dO1xuICAgICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAgIHJlc3BvbnNpdmU6IHRydWUsXG4gICAgICAgIG1haW50YWluQXNwZWN0UmF0aW86IGZhbHNlLFxuICAgICAgICBhbmltYXRpb246IHtcbiAgICAgICAgICBkdXJhdGlvbjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBhbmltYXRpb25EdXJhdGlvbjogMCxcbiAgICAgICAgfSxcbiAgICAgICAgcmVzcG9uc2l2ZUFuaW1hdGlvbkR1cmF0aW9uOiAwLFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIGVuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgIGN1c3RvbTogdGhpcy5fY3VzdG9tVG9vbHRpcHMuYmluZCh0aGlzKSxcbiAgICAgICAgfSxcbiAgICAgICAgbGVnZW5kOiB7XG4gICAgICAgICAgZGlzcGxheTogZmFsc2UsXG4gICAgICAgIH0sXG4gICAgICAgIGxpbmU6IHtcbiAgICAgICAgICBzcGFuR2FwczogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgICAgZWxlbWVudHM6IHtcbiAgICAgICAgICBmb250OiBcIjEycHggJ1JvYm90bycsICdzYW5zLXNlcmlmJ1wiLFxuICAgICAgICB9LFxuICAgICAgICB0aWNrczoge1xuICAgICAgICAgIGZvbnRGYW1pbHk6IFwiJ1JvYm90bycsICdzYW5zLXNlcmlmJ1wiLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICAgIG9wdGlvbnMgPSBDaGFydC5oZWxwZXJzLm1lcmdlKG9wdGlvbnMsIHRoaXMuZGF0YS5vcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuc2NhbGVzLnhBeGVzWzBdLnRpY2tzLmNhbGxiYWNrID0gdGhpcy5fZm9ybWF0VGlja1ZhbHVlO1xuICAgICAgaWYgKHRoaXMuZGF0YS50eXBlID09PSBcInRpbWVsaW5lXCIpIHtcbiAgICAgICAgdGhpcy5zZXQoXCJpc1RpbWVsaW5lXCIsIHRydWUpO1xuICAgICAgICBpZiAodGhpcy5kYXRhLmNvbG9ycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgdGhpcy5fY29sb3JGdW5jID0gdGhpcy5jb25zdHJ1Y3Rvci5nZXRDb2xvckdlbmVyYXRvcihcbiAgICAgICAgICAgIHRoaXMuZGF0YS5jb2xvcnMuc3RhdGljQ29sb3JzLFxuICAgICAgICAgICAgdGhpcy5kYXRhLmNvbG9ycy5zdGF0aWNDb2xvckluZGV4XG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY29sb3JGdW5jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvcHRpb25zLmVsZW1lbnRzLmNvbG9yRnVuY3Rpb24gPSB0aGlzLl9jb2xvckZ1bmM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGRhdGEuZGF0YXNldHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgaWYgKG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS50aWNrcy5kaXNwbGF5ID0gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbnMuc2NhbGVzLnlBeGVzWzBdLnRpY2tzID0geyBkaXNwbGF5OiBmYWxzZSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAob3B0aW9ucy5zY2FsZXMueUF4ZXNbMF0uZ3JpZExpbmVzKSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMuZGlzcGxheSA9IGZhbHNlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBvcHRpb25zLnNjYWxlcy55QXhlc1swXS5ncmlkTGluZXMgPSB7IGRpc3BsYXk6IGZhbHNlIH07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuJC5jaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjUwcHhcIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5jaGFydFRhcmdldC5zdHlsZS5oZWlnaHQgPSBcIjE2MHB4XCI7XG4gICAgICB9XG4gICAgICBjb25zdCBjaGFydERhdGEgPSB7XG4gICAgICAgIHR5cGU6IHRoaXMuZGF0YS50eXBlLFxuICAgICAgICBkYXRhOiB0aGlzLmRhdGEuZGF0YSxcbiAgICAgICAgb3B0aW9uczogb3B0aW9ucyxcbiAgICAgICAgcGx1Z2luczogcGx1Z2lucyxcbiAgICAgIH07XG4gICAgICAvLyBBc3luYyByZXNpemUgYWZ0ZXIgZG9tIHVwZGF0ZVxuICAgICAgdGhpcy5fY2hhcnQgPSBuZXcgdGhpcy5DaGFydENsYXNzKGN0eCwgY2hhcnREYXRhKTtcbiAgICAgIGlmICh0aGlzLmlzVGltZWxpbmUgIT09IHRydWUgJiYgdGhpcy5kYXRhLmxlZ2VuZCA9PT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLl9kcmF3TGVnZW5kKCk7XG4gICAgICB9XG4gICAgICB0aGlzLnJlc2l6ZUNoYXJ0KCk7XG4gICAgfVxuICB9XG5cbiAgcmVzaXplQ2hhcnQoKSB7XG4gICAgaWYgKCF0aGlzLl9jaGFydCkgcmV0dXJuO1xuICAgIC8vIENoYXJ0IG5vdCByZWFkeVxuICAgIGlmICh0aGlzLl9yZXNpemVUaW1lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLl9yZXNpemVUaW1lciA9IHNldEludGVydmFsKHRoaXMucmVzaXplQ2hhcnQuYmluZCh0aGlzKSwgMTApO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNsZWFySW50ZXJ2YWwodGhpcy5fcmVzaXplVGltZXIpO1xuICAgIHRoaXMuX3Jlc2l6ZVRpbWVyID0gdW5kZWZpbmVkO1xuXG4gICAgdGhpcy5fcmVzaXplQ2hhcnQoKTtcbiAgfVxuXG4gIF9yZXNpemVDaGFydCgpIHtcbiAgICBjb25zdCBjaGFydFRhcmdldCA9IHRoaXMuJC5jaGFydFRhcmdldDtcblxuICAgIGNvbnN0IG9wdGlvbnMgPSB0aGlzLmRhdGE7XG4gICAgY29uc3QgZGF0YSA9IG9wdGlvbnMuZGF0YTtcblxuICAgIGlmIChkYXRhLmRhdGFzZXRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5pc1RpbWVsaW5lKSB7XG4gICAgICB0aGlzLl9jaGFydC5yZXNpemUoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBSZWNhbGN1bGF0ZSBjaGFydCBoZWlnaHQgZm9yIFRpbWVsaW5lIGNoYXJ0XG4gICAgY29uc3QgYXJlYVRvcCA9IHRoaXMuX2NoYXJ0LmNoYXJ0QXJlYS50b3A7XG4gICAgY29uc3QgYXJlYUJvdCA9IHRoaXMuX2NoYXJ0LmNoYXJ0QXJlYS5ib3R0b207XG4gICAgY29uc3QgaGVpZ2h0MSA9IHRoaXMuX2NoYXJ0LmNhbnZhcy5jbGllbnRIZWlnaHQ7XG4gICAgaWYgKGFyZWFCb3QgPiAwKSB7XG4gICAgICB0aGlzLl9heGlzSGVpZ2h0ID0gaGVpZ2h0MSAtIGFyZWFCb3QgKyBhcmVhVG9wO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fYXhpc0hlaWdodCkge1xuICAgICAgY2hhcnRUYXJnZXQuc3R5bGUuaGVpZ2h0ID0gXCI1MHB4XCI7XG4gICAgICB0aGlzLl9jaGFydC5yZXNpemUoKTtcbiAgICAgIHRoaXMucmVzaXplQ2hhcnQoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2F4aXNIZWlnaHQpIHtcbiAgICAgIGNvbnN0IGNudCA9IGRhdGEuZGF0YXNldHMubGVuZ3RoO1xuICAgICAgY29uc3QgdGFyZ2V0SGVpZ2h0ID0gMzAgKiBjbnQgKyB0aGlzLl9heGlzSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgaWYgKGNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCAhPT0gdGFyZ2V0SGVpZ2h0KSB7XG4gICAgICAgIGNoYXJ0VGFyZ2V0LnN0eWxlLmhlaWdodCA9IHRhcmdldEhlaWdodDtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2NoYXJ0LnJlc2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gIC8vIEdldCBIU0wgZGlzdHJpYnV0ZWQgY29sb3IgbGlzdFxuICBzdGF0aWMgZ2V0Q29sb3JMaXN0KGNvdW50KSB7XG4gICAgbGV0IHByb2Nlc3NMID0gZmFsc2U7XG4gICAgaWYgKGNvdW50ID4gMTApIHtcbiAgICAgIHByb2Nlc3NMID0gdHJ1ZTtcbiAgICAgIGNvdW50ID0gTWF0aC5jZWlsKGNvdW50IC8gMik7XG4gICAgfVxuICAgIGNvbnN0IGgxID0gMzYwIC8gY291bnQ7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgZm9yIChsZXQgbG9vcEkgPSAwOyBsb29wSSA8IGNvdW50OyBsb29wSSsrKSB7XG4gICAgICByZXN1bHRbbG9vcEldID0gQ29sb3IoKS5oc2woaDEgKiBsb29wSSwgODAsIDM4KTtcbiAgICAgIGlmIChwcm9jZXNzTCkge1xuICAgICAgICByZXN1bHRbbG9vcEkgKyBjb3VudF0gPSBDb2xvcigpLmhzbChoMSAqIGxvb3BJLCA4MCwgNjIpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgc3RhdGljIGdldENvbG9yR2VuZXJhdG9yKHN0YXRpY0NvbG9ycywgc3RhcnRJbmRleCkge1xuICAgIC8vIEtub3duIGNvbG9ycyBmb3Igc3RhdGljIGRhdGEsXG4gICAgLy8gc2hvdWxkIGFkZCBmb3IgdmVyeSBjb21tb24gc3RhdGUgc3RyaW5nIG1hbnVhbGx5LlxuICAgIC8vIFBhbGV0dGUgbW9kaWZpZWQgZnJvbSBodHRwOi8vZ29vZ2xlLmdpdGh1Yi5pby9wYWxldHRlLmpzLyBtcG42NSwgQXBhY2hlIDIuMFxuICAgIGNvbnN0IHBhbGV0dGUgPSBbXG4gICAgICBcImZmMDAyOVwiLFxuICAgICAgXCI2NmE2MWVcIixcbiAgICAgIFwiMzc3ZWI4XCIsXG4gICAgICBcIjk4NGVhM1wiLFxuICAgICAgXCIwMGQyZDVcIixcbiAgICAgIFwiZmY3ZjAwXCIsXG4gICAgICBcImFmOGQwMFwiLFxuICAgICAgXCI3ZjgwY2RcIixcbiAgICAgIFwiYjNlOTAwXCIsXG4gICAgICBcImM0MmU2MFwiLFxuICAgICAgXCJhNjU2MjhcIixcbiAgICAgIFwiZjc4MWJmXCIsXG4gICAgICBcIjhkZDNjN1wiLFxuICAgICAgXCJiZWJhZGFcIixcbiAgICAgIFwiZmI4MDcyXCIsXG4gICAgICBcIjgwYjFkM1wiLFxuICAgICAgXCJmZGI0NjJcIixcbiAgICAgIFwiZmNjZGU1XCIsXG4gICAgICBcImJjODBiZFwiLFxuICAgICAgXCJmZmVkNmZcIixcbiAgICAgIFwiYzRlYWZmXCIsXG4gICAgICBcImNmOGMwMFwiLFxuICAgICAgXCIxYjllNzdcIixcbiAgICAgIFwiZDk1ZjAyXCIsXG4gICAgICBcImU3Mjk4YVwiLFxuICAgICAgXCJlNmFiMDJcIixcbiAgICAgIFwiYTY3NjFkXCIsXG4gICAgICBcIjAwOTdmZlwiLFxuICAgICAgXCIwMGQwNjdcIixcbiAgICAgIFwiZjQzNjAwXCIsXG4gICAgICBcIjRiYTkzYlwiLFxuICAgICAgXCI1Nzc5YmJcIixcbiAgICAgIFwiOTI3YWNjXCIsXG4gICAgICBcIjk3ZWUzZlwiLFxuICAgICAgXCJiZjM5NDdcIixcbiAgICAgIFwiOWY1YjAwXCIsXG4gICAgICBcImY0ODc1OFwiLFxuICAgICAgXCI4Y2FlZDZcIixcbiAgICAgIFwiZjJiOTRmXCIsXG4gICAgICBcImVmZjI2ZVwiLFxuICAgICAgXCJlNDM4NzJcIixcbiAgICAgIFwiZDliMTAwXCIsXG4gICAgICBcIjlkN2EwMFwiLFxuICAgICAgXCI2OThjZmZcIixcbiAgICAgIFwiZDlkOWQ5XCIsXG4gICAgICBcIjAwZDI3ZVwiLFxuICAgICAgXCJkMDY4MDBcIixcbiAgICAgIFwiMDA5ZjgyXCIsXG4gICAgICBcImM0OTIwMFwiLFxuICAgICAgXCJjYmU4ZmZcIixcbiAgICAgIFwiZmVjZGRmXCIsXG4gICAgICBcImMyN2ViNlwiLFxuICAgICAgXCI4Y2QyY2VcIixcbiAgICAgIFwiYzRiOGQ5XCIsXG4gICAgICBcImY4ODNiMFwiLFxuICAgICAgXCJhNDkxMDBcIixcbiAgICAgIFwiZjQ4ODAwXCIsXG4gICAgICBcIjI3ZDBkZlwiLFxuICAgICAgXCJhMDRhOWJcIixcbiAgICBdO1xuICAgIGZ1bmN0aW9uIGdldENvbG9ySW5kZXgoaWR4KSB7XG4gICAgICAvLyBSZXVzZSB0aGUgY29sb3IgaWYgaW5kZXggdG9vIGxhcmdlLlxuICAgICAgcmV0dXJuIENvbG9yKFwiI1wiICsgcGFsZXR0ZVtpZHggJSBwYWxldHRlLmxlbmd0aF0pO1xuICAgIH1cbiAgICBjb25zdCBjb2xvckRpY3QgPSB7fTtcbiAgICBsZXQgY29sb3JJbmRleCA9IDA7XG4gICAgaWYgKHN0YXJ0SW5kZXggPiAwKSBjb2xvckluZGV4ID0gc3RhcnRJbmRleDtcbiAgICBpZiAoc3RhdGljQ29sb3JzKSB7XG4gICAgICBPYmplY3Qua2V5cyhzdGF0aWNDb2xvcnMpLmZvckVhY2goKGMpID0+IHtcbiAgICAgICAgY29uc3QgYzEgPSBzdGF0aWNDb2xvcnNbY107XG4gICAgICAgIGlmIChpc0Zpbml0ZShjMSkpIHtcbiAgICAgICAgICBjb2xvckRpY3RbYy50b0xvd2VyQ2FzZSgpXSA9IGdldENvbG9ySW5kZXgoYzEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbG9yRGljdFtjLnRvTG93ZXJDYXNlKCldID0gQ29sb3Ioc3RhdGljQ29sb3JzW2NdKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIC8vIEN1c3RvbSBjb2xvciBhc3NpZ25cbiAgICBmdW5jdGlvbiBnZXRDb2xvcihfXywgZGF0YSkge1xuICAgICAgbGV0IHJldDtcbiAgICAgIGNvbnN0IG5hbWUgPSBkYXRhWzNdO1xuICAgICAgaWYgKG5hbWUgPT09IG51bGwpIHJldHVybiBDb2xvcigpLmhzbCgwLCA0MCwgMzgpO1xuICAgICAgaWYgKG5hbWUgPT09IHVuZGVmaW5lZCkgcmV0dXJuIENvbG9yKCkuaHNsKDEyMCwgNDAsIDM4KTtcbiAgICAgIGNvbnN0IG5hbWUxID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgaWYgKHJldCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldCA9IGNvbG9yRGljdFtuYW1lMV07XG4gICAgICB9XG4gICAgICBpZiAocmV0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0ID0gZ2V0Q29sb3JJbmRleChjb2xvckluZGV4KTtcbiAgICAgICAgY29sb3JJbmRleCsrO1xuICAgICAgICBjb2xvckRpY3RbbmFtZTFdID0gcmV0O1xuICAgICAgfVxuICAgICAgcmV0dXJuIHJldDtcbiAgICB9XG4gICAgcmV0dXJuIGdldENvbG9yO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1jaGFydC1iYXNlXCIsIEhhQ2hhcnRCYXNlKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWljb24tYnV0dG9uL3BhcGVyLWljb24tYnV0dG9uXCI7XG5cbmltcG9ydCB7IFNUQVRFU19PRkYgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2NvbnN0XCI7XG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBUZW1wbGF0ZVJlc3VsdCxcbiAgaHRtbCxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIHByb3BlcnR5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgZm9yd2FyZEhhcHRpYyB9IGZyb20gXCIuLi8uLi9kYXRhL2hhcHRpY3NcIjtcblxuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IGNvbXB1dGVTdGF0ZU5hbWUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2VudGl0eS9jb21wdXRlX3N0YXRlX25hbWVcIjtcblxuaW1wb3J0IFwiLi4vaGEtc3dpdGNoXCI7XG5cbmNvbnN0IGlzT24gPSAoc3RhdGVPYmo/OiBIYXNzRW50aXR5KSA9PlxuICBzdGF0ZU9iaiAhPT0gdW5kZWZpbmVkICYmICFTVEFURVNfT0ZGLmluY2x1ZGVzKHN0YXRlT2JqLnN0YXRlKTtcblxuY2xhc3MgSGFFbnRpdHlUb2dnbGUgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgLy8gaGFzcyBpcyBub3QgYSBwcm9wZXJ0eSBzbyB0aGF0IHdlIG9ubHkgcmUtcmVuZGVyIG9uIHN0YXRlT2JqIGNoYW5nZXNcbiAgcHVibGljIGhhc3M/OiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgc3RhdGVPYmo/OiBIYXNzRW50aXR5O1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9pc09uOiBib29sZWFuID0gZmFsc2U7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIGlmICghdGhpcy5zdGF0ZU9iaikge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxoYS1zd2l0Y2ggZGlzYWJsZWQ+PC9oYS1zd2l0Y2g+XG4gICAgICBgO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSkge1xuICAgICAgcmV0dXJuIGh0bWxgXG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9JHtgVHVybiAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9IG9mZmB9XG4gICAgICAgICAgaWNvbj1cImhhc3M6Zmxhc2gtb2ZmXCJcbiAgICAgICAgICBAY2xpY2s9JHt0aGlzLl90dXJuT2ZmfVxuICAgICAgICAgID9zdGF0ZS1hY3RpdmU9JHshdGhpcy5faXNPbn1cbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9JHtgVHVybiAke2NvbXB1dGVTdGF0ZU5hbWUodGhpcy5zdGF0ZU9iail9IG9uYH1cbiAgICAgICAgICBpY29uPVwiaGFzczpmbGFzaFwiXG4gICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdHVybk9ufVxuICAgICAgICAgID9zdGF0ZS1hY3RpdmU9JHt0aGlzLl9pc09ufVxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIGA7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8aGEtc3dpdGNoXG4gICAgICAgIGFyaWEtbGFiZWw9JHtgVG9nZ2xlICR7Y29tcHV0ZVN0YXRlTmFtZSh0aGlzLnN0YXRlT2JqKX0gJHtcbiAgICAgICAgICB0aGlzLl9pc09uID8gXCJvZmZcIiA6IFwib25cIlxuICAgICAgICB9YH1cbiAgICAgICAgLmNoZWNrZWQ9JHt0aGlzLl9pc09ufVxuICAgICAgICBAY2hhbmdlPSR7dGhpcy5fdG9nZ2xlQ2hhbmdlZH1cbiAgICAgID48L2hhLXN3aXRjaD5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHMpIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoZXYpID0+IGV2LnN0b3BQcm9wYWdhdGlvbigpKTtcbiAgfVxuXG4gIHByb3RlY3RlZCB1cGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBpZiAoY2hhbmdlZFByb3BzLmhhcyhcInN0YXRlT2JqXCIpKSB7XG4gICAgICB0aGlzLl9pc09uID0gaXNPbih0aGlzLnN0YXRlT2JqKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF90b2dnbGVDaGFuZ2VkKGV2KSB7XG4gICAgY29uc3QgbmV3VmFsID0gZXYudGFyZ2V0LmNoZWNrZWQ7XG5cbiAgICBpZiAobmV3VmFsICE9PSB0aGlzLl9pc09uKSB7XG4gICAgICB0aGlzLl9jYWxsU2VydmljZShuZXdWYWwpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX3R1cm5PbigpIHtcbiAgICB0aGlzLl9jYWxsU2VydmljZSh0cnVlKTtcbiAgfVxuXG4gIHByaXZhdGUgX3R1cm5PZmYoKSB7XG4gICAgdGhpcy5fY2FsbFNlcnZpY2UoZmFsc2UpO1xuICB9XG5cbiAgLy8gV2Ugd2lsbCBmb3JjZSBhIHJlLXJlbmRlciBhZnRlciBhIHN1Y2Nlc3NmdWwgY2FsbCB0byByZS1zeW5jIHRoZSB0b2dnbGVcbiAgLy8gd2l0aCB0aGUgc3RhdGUuIEl0IHdpbGwgYmUgb3V0IG9mIHN5bmMgaWYgb3VyIHNlcnZpY2UgY2FsbCBkaWQgbm90XG4gIC8vIHJlc3VsdCBpbiB0aGUgZW50aXR5IHRvIGJlIHR1cm5lZCBvbi4gU2luY2UgdGhlIHN0YXRlIGlzIG5vdCBjaGFuZ2luZyxcbiAgLy8gdGhlIHJlc3luYyBpcyBub3QgY2FsbGVkIGF1dG9tYXRpYy5cbiAgcHJpdmF0ZSBhc3luYyBfY2FsbFNlcnZpY2UodHVybk9uKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgaWYgKCF0aGlzLmhhc3MgfHwgIXRoaXMuc3RhdGVPYmopIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZm9yd2FyZEhhcHRpYyhcImxpZ2h0XCIpO1xuICAgIGNvbnN0IHN0YXRlRG9tYWluID0gY29tcHV0ZVN0YXRlRG9tYWluKHRoaXMuc3RhdGVPYmopO1xuICAgIGxldCBzZXJ2aWNlRG9tYWluO1xuICAgIGxldCBzZXJ2aWNlO1xuXG4gICAgaWYgKHN0YXRlRG9tYWluID09PSBcImxvY2tcIikge1xuICAgICAgc2VydmljZURvbWFpbiA9IFwibG9ja1wiO1xuICAgICAgc2VydmljZSA9IHR1cm5PbiA/IFwidW5sb2NrXCIgOiBcImxvY2tcIjtcbiAgICB9IGVsc2UgaWYgKHN0YXRlRG9tYWluID09PSBcImNvdmVyXCIpIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBcImNvdmVyXCI7XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJvcGVuX2NvdmVyXCIgOiBcImNsb3NlX2NvdmVyXCI7XG4gICAgfSBlbHNlIGlmIChzdGF0ZURvbWFpbiA9PT0gXCJncm91cFwiKSB7XG4gICAgICBzZXJ2aWNlRG9tYWluID0gXCJob21lYXNzaXN0YW50XCI7XG4gICAgICBzZXJ2aWNlID0gdHVybk9uID8gXCJ0dXJuX29uXCIgOiBcInR1cm5fb2ZmXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHNlcnZpY2VEb21haW4gPSBzdGF0ZURvbWFpbjtcbiAgICAgIHNlcnZpY2UgPSB0dXJuT24gPyBcInR1cm5fb25cIiA6IFwidHVybl9vZmZcIjtcbiAgICB9XG5cbiAgICBjb25zdCBjdXJyZW50U3RhdGUgPSB0aGlzLnN0YXRlT2JqO1xuXG4gICAgLy8gT3B0aW1pc3RpYyB1cGRhdGUuXG4gICAgdGhpcy5faXNPbiA9IHR1cm5PbjtcblxuICAgIGF3YWl0IHRoaXMuaGFzcy5jYWxsU2VydmljZShzZXJ2aWNlRG9tYWluLCBzZXJ2aWNlLCB7XG4gICAgICBlbnRpdHlfaWQ6IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkLFxuICAgIH0pO1xuXG4gICAgc2V0VGltZW91dChhc3luYyAoKSA9PiB7XG4gICAgICAvLyBJZiBhZnRlciAyIHNlY29uZHMgd2UgaGF2ZSBub3QgcmVjZWl2ZWQgYSBzdGF0ZSB1cGRhdGVcbiAgICAgIC8vIHJlc2V0IHRoZSBzd2l0Y2ggdG8gaXQncyBvcmlnaW5hbCBzdGF0ZS5cbiAgICAgIGlmICh0aGlzLnN0YXRlT2JqID09PSBjdXJyZW50U3RhdGUpIHtcbiAgICAgICAgdGhpcy5faXNPbiA9IGlzT24odGhpcy5zdGF0ZU9iaik7XG4gICAgICB9XG4gICAgfSwgMjAwMCk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG1pbi13aWR0aDogMzhweDtcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uIHtcbiAgICAgICAgY29sb3I6IHZhcihcbiAgICAgICAgICAtLXBhcGVyLWljb24tYnV0dG9uLWluYWN0aXZlLWNvbG9yLFxuICAgICAgICAgIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcilcbiAgICAgICAgKTtcbiAgICAgICAgdHJhbnNpdGlvbjogY29sb3IgMC41cztcbiAgICAgIH1cbiAgICAgIHBhcGVyLWljb24tYnV0dG9uW3N0YXRlLWFjdGl2ZV0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaWNvbi1idXR0b24tYWN0aXZlLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gICAgICB9XG4gICAgICBoYS1zd2l0Y2gge1xuICAgICAgICBwYWRkaW5nOiAxM3B4IDVweDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWVudGl0eS10b2dnbGVcIiwgSGFFbnRpdHlUb2dnbGUpO1xuIiwiaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IExvY2FsaXplTWl4aW4gZnJvbSBcIi4uL21peGlucy9sb2NhbGl6ZS1taXhpblwiO1xuaW1wb3J0IHsgQ0xJTUFURV9QUkVTRVRfTk9ORSB9IGZyb20gXCIuLi9kYXRhL2NsaW1hdGVcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYUNsaW1hdGVTdGF0ZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhcmdldCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIH1cblxuICAgICAgICAuY3VycmVudCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zdGF0ZS1sYWJlbCB7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIH1cblxuICAgICAgICAudW5pdCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8ZGl2IGNsYXNzPVwidGFyZ2V0XCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tfaGFzS25vd25TdGF0ZShzdGF0ZU9iai5zdGF0ZSldXVwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdGUtbGFiZWxcIj5cbiAgICAgICAgICAgIFtbX2xvY2FsaXplU3RhdGUobG9jYWxpemUsIHN0YXRlT2JqKV1dXG4gICAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbX3JlbmRlclByZXNldChzdGF0ZU9iai5hdHRyaWJ1dGVzKV1dXCI+XG4gICAgICAgICAgICAgIC0gW1tfbG9jYWxpemVQcmVzZXQobG9jYWxpemUsIHN0YXRlT2JqLmF0dHJpYnV0ZXMucHJlc2V0X21vZGUpXV1cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwidW5pdFwiPltbY29tcHV0ZVRhcmdldChoYXNzLCBzdGF0ZU9iaildXTwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tjdXJyZW50U3RhdHVzXV1cIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImN1cnJlbnRcIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jYXJkLmNsaW1hdGUuY3VycmVudGx5JyldXTpcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidW5pdFwiPltbY3VycmVudFN0YXR1c11dPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBzdGF0ZU9iajogT2JqZWN0LFxuICAgICAgY3VycmVudFN0YXR1czoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVDdXJyZW50U3RhdHVzKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUN1cnJlbnRTdGF0dXMoaGFzcywgc3RhdGVPYmopIHtcbiAgICBpZiAoIWhhc3MgfHwgIXN0YXRlT2JqKSByZXR1cm4gbnVsbDtcbiAgICBpZiAoc3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X3RlbXBlcmF0dXJlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLmN1cnJlbnRfdGVtcGVyYXR1cmV9ICR7XG4gICAgICAgIGhhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlXG4gICAgICB9YDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuY3VycmVudF9odW1pZGl0eSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy5jdXJyZW50X2h1bWlkaXR5fSAlYDtcbiAgICB9XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cblxuICBjb21wdXRlVGFyZ2V0KGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgaWYgKCFoYXNzIHx8ICFzdGF0ZU9iaikgcmV0dXJuIG51bGw7XG4gICAgLy8gV2UncmUgdXNpbmcgXCIhPSBudWxsXCIgb24gcHVycG9zZSBzbyB0aGF0IHdlIG1hdGNoIGJvdGggbnVsbCBhbmQgdW5kZWZpbmVkLlxuICAgIGlmIChcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93ICE9IG51bGwgJiZcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaCAhPSBudWxsXG4gICAgKSB7XG4gICAgICByZXR1cm4gYCR7c3RhdGVPYmouYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3d9LSR7XG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfaGlnaFxuICAgICAgfSAke2hhc3MuY29uZmlnLnVuaXRfc3lzdGVtLnRlbXBlcmF0dXJlfWA7XG4gICAgfVxuICAgIGlmIChzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlICE9IG51bGwpIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRlbXBlcmF0dXJlfSAke1xuICAgICAgICBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZVxuICAgICAgfWA7XG4gICAgfVxuICAgIGlmIChcbiAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2xvdyAhPSBudWxsICYmXG4gICAgICBzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9oaWdoICE9IG51bGxcbiAgICApIHtcbiAgICAgIHJldHVybiBgJHtzdGF0ZU9iai5hdHRyaWJ1dGVzLnRhcmdldF9odW1pZGl0eV9sb3d9LSR7XG4gICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMudGFyZ2V0X2h1bWlkaXR5X2hpZ2hcbiAgICAgIH0lYDtcbiAgICB9XG4gICAgaWYgKHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHkgIT0gbnVsbCkge1xuICAgICAgcmV0dXJuIGAke3N0YXRlT2JqLmF0dHJpYnV0ZXMuaHVtaWRpdHl9ICVgO1xuICAgIH1cblxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgX2hhc0tub3duU3RhdGUoc3RhdGUpIHtcbiAgICByZXR1cm4gc3RhdGUgIT09IFwidW5rbm93blwiO1xuICB9XG5cbiAgX2xvY2FsaXplU3RhdGUobG9jYWxpemUsIHN0YXRlT2JqKSB7XG4gICAgY29uc3Qgc3RhdGVTdHJpbmcgPSBsb2NhbGl6ZShgc3RhdGUuY2xpbWF0ZS4ke3N0YXRlT2JqLnN0YXRlfWApO1xuICAgIHJldHVybiBzdGF0ZU9iai5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uXG4gICAgICA/IGAke2xvY2FsaXplKFxuICAgICAgICAgIGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUuaHZhY19hY3Rpb24uJHtcbiAgICAgICAgICAgIHN0YXRlT2JqLmF0dHJpYnV0ZXMuaHZhY19hY3Rpb25cbiAgICAgICAgICB9YFxuICAgICAgICApfSAoJHtzdGF0ZVN0cmluZ30pYFxuICAgICAgOiBzdGF0ZVN0cmluZztcbiAgfVxuXG4gIF9sb2NhbGl6ZVByZXNldChsb2NhbGl6ZSwgcHJlc2V0KSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBzdGF0ZV9hdHRyaWJ1dGVzLmNsaW1hdGUucHJlc2V0X21vZGUuJHtwcmVzZXR9YCkgfHwgcHJlc2V0O1xuICB9XG5cbiAgX3JlbmRlclByZXNldChhdHRyaWJ1dGVzKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIGF0dHJpYnV0ZXMucHJlc2V0X21vZGUgJiYgYXR0cmlidXRlcy5wcmVzZXRfbW9kZSAhPT0gQ0xJTUFURV9QUkVTRVRfTk9ORVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNsaW1hdGUtc3RhdGVcIiwgSGFDbGltYXRlU3RhdGUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5jbGFzcyBIYUNvdmVyQ29udHJvbHMgZXh0ZW5kcyBQb2x5bWVyRWxlbWVudCB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIC5zdGF0ZSB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJzdGF0ZVwiPlxuICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICBhcmlhLWxhYmVsPVwiT3BlbiBjb3ZlclwiXG4gICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctdXBcIlxuICAgICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGFwXCJcbiAgICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzT3Blbl1dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgIGFyaWEtbGFiZWw9XCJTdG9wIHRoZSBjb3ZlciBmcm9tIG1vdmluZ1wiXG4gICAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgICAgb24tY2xpY2s9XCJvblN0b3BUYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTdG9wXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIGNvdmVyXCJcbiAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy1kb3duXCJcbiAgICAgICAgICBvbi1jbGljaz1cIm9uQ2xvc2VUYXBcIlxuICAgICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNDbG9zZV1dXCJcbiAgICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIHN0YXRlT2JqOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBlbnRpdHlPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBjb21wdXRlZDogXCJjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgY29tcHV0ZUVudGl0eU9iaihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHJldHVybiBuZXcgQ292ZXJFbnRpdHkoaGFzcywgc3RhdGVPYmopO1xuICB9XG5cbiAgY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKSB7XG4gICAgdmFyIGFzc3VtZWRTdGF0ZSA9IHN0YXRlT2JqLmF0dHJpYnV0ZXMuYXNzdW1lZF9zdGF0ZSA9PT0gdHJ1ZTtcbiAgICByZXR1cm4gKGVudGl0eU9iai5pc0Z1bGx5T3BlbiB8fCBlbnRpdHlPYmouaXNPcGVuaW5nKSAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiAoZW50aXR5T2JqLmlzRnVsbHlDbG9zZWQgfHwgZW50aXR5T2JqLmlzQ2xvc2luZykgJiYgIWFzc3VtZWRTdGF0ZTtcbiAgfVxuXG4gIG9uT3BlblRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLm9wZW5Db3ZlcigpO1xuICB9XG5cbiAgb25DbG9zZVRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLmNsb3NlQ292ZXIoKTtcbiAgfVxuXG4gIG9uU3RvcFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLnN0b3BDb3ZlcigpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLWNvdmVyLWNvbnRyb2xzXCIsIEhhQ292ZXJDb250cm9scyk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQtY2xhc3Nlc1wiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b25cIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBDb3ZlckVudGl0eSBmcm9tIFwiLi4vdXRpbC9jb3Zlci1tb2RlbFwiO1xuXG5jbGFzcyBIYUNvdmVyVGlsdENvbnRyb2xzIGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlIGluY2x1ZGU9XCJpcm9uLWZsZXhcIj48L3N0eWxlPlxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgfVxuICAgICAgICBbaW52aXNpYmxlXSB7XG4gICAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuICFpbXBvcnRhbnQ7XG4gICAgICAgIH1cbiAgICAgIDwvc3R5bGU+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIk9wZW4gY292ZXIgdGlsdFwiXG4gICAgICAgIGljb249XCJoYXNzOmFycm93LXRvcC1yaWdodFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25PcGVuVGlsdFRhcFwiXG4gICAgICAgIHRpdGxlPVwiT3BlbiB0aWx0XCJcbiAgICAgICAgaW52aXNpYmxlJD1cIltbIWVudGl0eU9iai5zdXBwb3J0c09wZW5UaWx0XV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZU9wZW5EaXNhYmxlZChzdGF0ZU9iaiwgZW50aXR5T2JqKV1dXCJcbiAgICAgID48L3BhcGVyLWljb24tYnV0dG9uPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uXG4gICAgICAgIGFyaWEtbGFiZWw9XCJTdG9wIGNvdmVyIGZyb20gbW92aW5nXCJcbiAgICAgICAgaWNvbj1cImhhc3M6c3RvcFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25TdG9wVGlsdFRhcFwiXG4gICAgICAgIGludmlzaWJsZSQ9XCJbWyFlbnRpdHlPYmouc3VwcG9ydHNTdG9wVGlsdF1dXCJcbiAgICAgICAgdGl0bGU9XCJTdG9wIHRpbHRcIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgYXJpYS1sYWJlbD1cIkNsb3NlIGNvdmVyIHRpbHRcIlxuICAgICAgICBpY29uPVwiaGFzczphcnJvdy1ib3R0b20tbGVmdFwiXG4gICAgICAgIG9uLWNsaWNrPVwib25DbG9zZVRpbHRUYXBcIlxuICAgICAgICB0aXRsZT1cIkNsb3NlIHRpbHRcIlxuICAgICAgICBpbnZpc2libGUkPVwiW1shZW50aXR5T2JqLnN1cHBvcnRzQ2xvc2VUaWx0XV1cIlxuICAgICAgICBkaXNhYmxlZD1cIltbY29tcHV0ZUNsb3NlZERpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopXV1cIlxuICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuICAgICAgc3RhdGVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgfSxcbiAgICAgIGVudGl0eU9iajoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIGNvbXB1dGVkOiBcImNvbXB1dGVFbnRpdHlPYmooaGFzcywgc3RhdGVPYmopXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBjb21wdXRlRW50aXR5T2JqKGhhc3MsIHN0YXRlT2JqKSB7XG4gICAgcmV0dXJuIG5ldyBDb3ZlckVudGl0eShoYXNzLCBzdGF0ZU9iaik7XG4gIH1cblxuICBjb21wdXRlT3BlbkRpc2FibGVkKHN0YXRlT2JqLCBlbnRpdHlPYmopIHtcbiAgICB2YXIgYXNzdW1lZFN0YXRlID0gc3RhdGVPYmouYXR0cmlidXRlcy5hc3N1bWVkX3N0YXRlID09PSB0cnVlO1xuICAgIHJldHVybiBlbnRpdHlPYmouaXNGdWxseU9wZW5UaWx0ICYmICFhc3N1bWVkU3RhdGU7XG4gIH1cblxuICBjb21wdXRlQ2xvc2VkRGlzYWJsZWQoc3RhdGVPYmosIGVudGl0eU9iaikge1xuICAgIHZhciBhc3N1bWVkU3RhdGUgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzLmFzc3VtZWRfc3RhdGUgPT09IHRydWU7XG4gICAgcmV0dXJuIGVudGl0eU9iai5pc0Z1bGx5Q2xvc2VkVGlsdCAmJiAhYXNzdW1lZFN0YXRlO1xuICB9XG5cbiAgb25PcGVuVGlsdFRhcChldikge1xuICAgIGV2LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXMuZW50aXR5T2JqLm9wZW5Db3ZlclRpbHQoKTtcbiAgfVxuXG4gIG9uQ2xvc2VUaWx0VGFwKGV2KSB7XG4gICAgZXYuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpcy5lbnRpdHlPYmouY2xvc2VDb3ZlclRpbHQoKTtcbiAgfVxuXG4gIG9uU3RvcFRpbHRUYXAoZXYpIHtcbiAgICBldi5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLmVudGl0eU9iai5zdG9wQ292ZXJUaWx0KCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtY292ZXItdGlsdC1jb250cm9sc1wiLCBIYUNvdmVyVGlsdENvbnRyb2xzKTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudVwiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lclwiO1xuaW1wb3J0IHsgQ29uc3RydWN0b3IgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuY29uc3QgcGFwZXJEcm9wZG93bkNsYXNzID0gY3VzdG9tRWxlbWVudHMuZ2V0KFxuICBcInBhcGVyLWRyb3Bkb3duLW1lbnVcIlxuKSBhcyBDb25zdHJ1Y3RvcjxQb2x5bWVyRWxlbWVudD47XG5cbi8vIHBhdGNoZXMgcGFwZXIgZHJvcCBkb3duIHRvIHByb3Blcmx5IHN1cHBvcnQgUlRMIC0gaHR0cHM6Ly9naXRodWIuY29tL1BvbHltZXJFbGVtZW50cy9wYXBlci1kcm9wZG93bi1tZW51L2lzc3Vlcy8xODNcbmV4cG9ydCBjbGFzcyBIYVBhcGVyRHJvcGRvd25DbGFzcyBleHRlbmRzIHBhcGVyRHJvcGRvd25DbGFzcyB7XG4gIHB1YmxpYyByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIC8vIHdhaXQgdG8gY2hlY2sgZm9yIGRpcmVjdGlvbiBzaW5jZSBvdGhlcndpc2UgZGlyZWN0aW9uIGlzIHdyb25nIGV2ZW4gdGhvdWdoIHRvcCBsZXZlbCBpcyBSVExcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT09IFwicnRsXCIpIHtcbiAgICAgICAgdGhpcy5zdHlsZS50ZXh0QWxpZ24gPSBcInJpZ2h0XCI7XG4gICAgICB9XG4gICAgfSwgMTAwKTtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtcGFwZXItZHJvcGRvd24tbWVudVwiOiBIYVBhcGVyRHJvcGRvd25DbGFzcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1wYXBlci1kcm9wZG93bi1tZW51XCIsIEhhUGFwZXJEcm9wZG93bkNsYXNzKTtcbiIsImltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb21cIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCByZWxhdGl2ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9yZWxhdGl2ZV90aW1lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVJlbGF0aXZlVGltZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiBPYmplY3QsXG4gICAgICBkYXRldGltZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiBcImRhdGV0aW1lQ2hhbmdlZFwiLFxuICAgICAgfSxcblxuICAgICAgZGF0ZXRpbWVPYmo6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRldGltZU9iakNoYW5nZWRcIixcbiAgICAgIH0sXG5cbiAgICAgIHBhcnNlZERhdGVUaW1lOiBPYmplY3QsXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSA9IHRoaXMudXBkYXRlUmVsYXRpdmUuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgLy8gdXBkYXRlIGV2ZXJ5IDYwIHNlY29uZHNcbiAgICB0aGlzLnVwZGF0ZUludGVydmFsID0gc2V0SW50ZXJ2YWwodGhpcy51cGRhdGVSZWxhdGl2ZSwgNjAwMDApO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBjbGVhckludGVydmFsKHRoaXMudXBkYXRlSW50ZXJ2YWwpO1xuICB9XG5cbiAgZGF0ZXRpbWVDaGFuZ2VkKG5ld1ZhbCkge1xuICAgIHRoaXMucGFyc2VkRGF0ZVRpbWUgPSBuZXdWYWwgPyBuZXcgRGF0ZShuZXdWYWwpIDogbnVsbDtcblxuICAgIHRoaXMudXBkYXRlUmVsYXRpdmUoKTtcbiAgfVxuXG4gIGRhdGV0aW1lT2JqQ2hhbmdlZChuZXdWYWwpIHtcbiAgICB0aGlzLnBhcnNlZERhdGVUaW1lID0gbmV3VmFsO1xuXG4gICAgdGhpcy51cGRhdGVSZWxhdGl2ZSgpO1xuICB9XG5cbiAgdXBkYXRlUmVsYXRpdmUoKSB7XG4gICAgY29uc3Qgcm9vdCA9IGRvbSh0aGlzKTtcbiAgICBpZiAoIXRoaXMucGFyc2VkRGF0ZVRpbWUpIHtcbiAgICAgIHJvb3QuaW5uZXJIVE1MID0gdGhpcy5sb2NhbGl6ZShcInVpLmNvbXBvbmVudHMucmVsYXRpdmVfdGltZS5uZXZlclwiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcm9vdC5pbm5lckhUTUwgPSByZWxhdGl2ZVRpbWUodGhpcy5wYXJzZWREYXRlVGltZSwgdGhpcy5sb2NhbGl6ZSk7XG4gICAgfVxuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXJlbGF0aXZlLXRpbWVcIiwgSGFSZWxhdGl2ZVRpbWUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc2xpZGVyXCI7XG5cbmNvbnN0IFBhcGVyU2xpZGVyQ2xhc3MgPSBjdXN0b21FbGVtZW50cy5nZXQoXCJwYXBlci1zbGlkZXJcIik7XG5sZXQgc3ViVGVtcGxhdGU7XG5cbmNsYXNzIEhhU2xpZGVyIGV4dGVuZHMgUGFwZXJTbGlkZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgaWYgKCFzdWJUZW1wbGF0ZSkge1xuICAgICAgc3ViVGVtcGxhdGUgPSBQYXBlclNsaWRlckNsYXNzLnRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcblxuICAgICAgY29uc3Qgc3VwZXJTdHlsZSA9IHN1YlRlbXBsYXRlLmNvbnRlbnQucXVlcnlTZWxlY3RvcihcInN0eWxlXCIpO1xuXG4gICAgICAvLyBhcHBlbmQgc3R5bGUgdG8gYWRkIG1pcnJvcmluZyBvZiBwaW4gaW4gUlRMXG4gICAgICBzdXBlclN0eWxlLmFwcGVuZENoaWxkKFxuICAgICAgICBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShgXG4gICAgICAgICAgOmhvc3QoW2Rpcj1cInJ0bFwiXSkgI3NsaWRlckNvbnRhaW5lci5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjphZnRlciB7XG4gICAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlKDAsIC0xN3B4KSBzY2FsZVgoLTEpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCkgc2NhbGVYKC0xKSAhaW1wb3J0YW50O1xuICAgICAgICAgICAgfVxuICAgICAgICBgKVxuICAgICAgKTtcbiAgICB9XG4gICAgcmV0dXJuIHN1YlRlbXBsYXRlO1xuICB9XG5cbiAgX2NhbGNTdGVwKHZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLnN0ZXApIHtcbiAgICAgIHJldHVybiBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1TdGVwcyA9IE1hdGgucm91bmQoKHZhbHVlIC0gdGhpcy5taW4pIC8gdGhpcy5zdGVwKTtcbiAgICBjb25zdCBzdGVwU3RyID0gdGhpcy5zdGVwLnRvU3RyaW5nKCk7XG4gICAgY29uc3Qgc3RlcFBvaW50QXQgPSBzdGVwU3RyLmluZGV4T2YoXCIuXCIpO1xuICAgIGlmIChzdGVwUG9pbnRBdCAhPT0gLTEpIHtcbiAgICAgIC8qKlxuICAgICAgICogRm9yIHNtYWxsIHZhbHVlcyBvZiB0aGlzLnN0ZXAsIGlmIHdlIGNhbGN1bGF0ZSB0aGUgc3RlcCB1c2luZ1xuICAgICAgICogRm9yIG5vbi1pbnRlZ2VyIHZhbHVlcyBvZiB0aGlzLnN0ZXAsIGlmIHdlIGNhbGN1bGF0ZSB0aGUgc3RlcCB1c2luZ1xuICAgICAgICogYE1hdGgucm91bmQodmFsdWUgLyBzdGVwKSAqIHN0ZXBgIHdlIG1heSBoaXQgYSBwcmVjaXNpb24gcG9pbnQgaXNzdWVcbiAgICAgICAqIGVnLiAwLjEgKiAwLjIgPSAgMC4wMjAwMDAwMDAwMDAwMDAwMDRcbiAgICAgICAqIGh0dHA6Ly9kb2NzLm9yYWNsZS5jb20vY2QvRTE5OTU3LTAxLzgwNi0zNTY4L25jZ19nb2xkYmVyZy5odG1sXG4gICAgICAgKlxuICAgICAgICogYXMgYSB3b3JrIGFyb3VuZCB3ZSBjYW4gcm91bmQgd2l0aCB0aGUgZGVjaW1hbCBwcmVjaXNpb24gb2YgYHN0ZXBgXG4gICAgICAgKi9cbiAgICAgIGNvbnN0IHByZWNpc2lvbiA9IDEwICoqIChzdGVwU3RyLmxlbmd0aCAtIHN0ZXBQb2ludEF0IC0gMSk7XG4gICAgICByZXR1cm4gKFxuICAgICAgICBNYXRoLnJvdW5kKChudW1TdGVwcyAqIHRoaXMuc3RlcCArIHRoaXMubWluKSAqIHByZWNpc2lvbikgLyBwcmVjaXNpb25cbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIG51bVN0ZXBzICogdGhpcy5zdGVwICsgdGhpcy5taW47XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXNsaWRlclwiLCBIYVNsaWRlcik7XG4iLCIvKipcbkFkYXB0ZWQgZnJvbSBwYXBlci10aW1lLWlucHV0IGZyb21cbmh0dHBzOi8vZ2l0aHViLmNvbS9yeWFuYnVybnMyMy9wYXBlci10aW1lLWlucHV0XG5NSVQgTGljZW5zZWQuIENvcHlyaWdodCAoYykgMjAxNyBSeWFuIEJ1cm5zXG5cbmA8cGFwZXItdGltZS1pbnB1dD5gIFBvbHltZXIgZWxlbWVudCB0byBhY2NlcHQgYSB0aW1lIHdpdGggcGFwZXItaW5wdXQgJiBwYXBlci1kcm9wZG93bi1tZW51XG5JbnNwaXJlZCBieSB0aGUgdGltZSBpbnB1dCBpbiBnb29nbGUgZm9ybXNcblxuIyMjIFN0eWxpbmdcblxuYDxwYXBlci10aW1lLWlucHV0PmAgcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci10aW1lLWlucHV0LWRyb3Bkb3duLXJpcHBsZS1jb2xvcmAgfCBkcm9wZG93biByaXBwbGUgY29sb3IgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItdGltZS1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW5wdXRzIHwgYHt9YFxuYC0tcGFwZXItdGltZS1kcm9wZG93bi1pbnB1dC1jb3RuYWluZXJgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgZHJvcGRvd24gaW5wdXQgfCBge31gXG4qL1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItaXRlbS9wYXBlci1pdGVtXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnVcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmV4cG9ydCBjbGFzcyBQYXBlclRpbWVJbnB1dCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pbnB1dCB7XG4gICAgICAgICAgd2lkdGg6IDMwcHg7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgICAgICAvKiBEYW1uIHlvdSBmaXJlZm94XG4gICAgICAgICAgICAgKiBOZWVkZWQgdG8gaGlkZSBzcGluIG51bSBpbiBmaXJlZm94XG4gICAgICAgICAgICAgKiBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzM3OTA5MzUvY2FuLWktaGlkZS10aGUtaHRtbDUtbnVtYmVyLWlucHV0LXMtc3Bpbi1ib3hcbiAgICAgICAgICAgICAqL1xuICAgICAgICAgICAgLW1vei1hcHBlYXJhbmNlOiB0ZXh0ZmllbGQ7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQtd2Via2l0LXNwaW5uZXI6IHtcbiAgICAgICAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgfVxuICAgICAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLXNoYXJlZC1pbnB1dC1zdHlsZV8tXy13ZWJraXQtYXBwZWFyYW5jZTogdGV4dGZpZWxkO1xuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItZHJvcGRvd24tbWVudSB7XG4gICAgICAgICAgd2lkdGg6IDU1cHg7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICAvKiBGb3JjZSByaXBwbGUgdG8gdXNlIHRoZSB3aG9sZSBjb250YWluZXIgKi9cbiAgICAgICAgICAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtcmlwcGxlOiB7XG4gICAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgICAtLXBhcGVyLXRpbWUtaW5wdXQtZHJvcGRvd24tcmlwcGxlLWNvbG9yLFxuICAgICAgICAgICAgICB2YXIoLS1wcmltYXJ5LWNvbG9yKVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYnV0dG9uO1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gICAgICAgICAgICBAYXBwbHkgLS1wYXBlci10aW1lLWRyb3Bkb3duLWlucHV0LWNvdG5haW5lcjtcbiAgICAgICAgICB9XG4gICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItdW5kZXJsaW5lOiB7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICAtLXBhcGVyLWlucHV0LWNvbnRhaW5lci11bmRlcmxpbmUtZm9jdXM6IHtcbiAgICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcGFwZXItaXRlbSB7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1saXN0Ym94IHtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgbGFiZWwge1xuICAgICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY2FwdGlvbjtcbiAgICAgICAgICBjb2xvcjogdmFyKFxuICAgICAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItY29sb3IsXG4gICAgICAgICAgICB2YXIoLS1zZWNvbmRhcnktdGV4dC1jb2xvcilcbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRpbWUtaW5wdXQtd3JhcCB7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgICAgQGFwcGx5IC0tbGF5b3V0LW5vLXdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICBbaGlkZGVuXSB7XG4gICAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuXG4gICAgICA8bGFiZWwgaGlkZGVuJD1cIltbaGlkZUxhYmVsXV1cIj5bW2xhYmVsXV08L2xhYmVsPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbWUtaW5wdXQtd3JhcFwiPlxuICAgICAgICA8IS0tIEhvdXIgSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwiaG91clwiXG4gICAgICAgICAgdHlwZT1cIm51bWJlclwiXG4gICAgICAgICAgdmFsdWU9XCJ7e2hvdXJ9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW2hvdXJMYWJlbF1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJfc2hvdWxkRm9ybWF0SG91clwiXG4gICAgICAgICAgb24tZm9jdXM9XCJfb25Gb2N1c1wiXG4gICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXRcbiAgICAgICAgICBhdXRvLXZhbGlkYXRlPVwiW1thdXRvVmFsaWRhdGVdXVwiXG4gICAgICAgICAgbWF4bGVuZ3RoPVwiMlwiXG4gICAgICAgICAgbWF4PVwiW1tfY29tcHV0ZUhvdXJNYXgoZm9ybWF0KV1dXCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdCQ9XCJbWyFmbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbCQ9XCJbW2Fsd2F5c0Zsb2F0SW5wdXRMYWJlbHNdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHNwYW4gc3VmZml4PVwiXCIgc2xvdD1cInN1ZmZpeFwiPjo8L3NwYW4+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG5cbiAgICAgICAgPCEtLSBNaW4gSW5wdXQgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGlkPVwibWluXCJcbiAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcbiAgICAgICAgICB2YWx1ZT1cInt7bWlufX1cIlxuICAgICAgICAgIGxhYmVsPVwiW1ttaW5MYWJlbF1dXCJcbiAgICAgICAgICBvbi1jaGFuZ2U9XCJfZm9ybWF0TWluXCJcbiAgICAgICAgICBvbi1mb2N1cz1cIl9vbkZvY3VzXCJcbiAgICAgICAgICByZXF1aXJlZFxuICAgICAgICAgIGF1dG8tdmFsaWRhdGU9XCJbW2F1dG9WYWxpZGF0ZV1dXCJcbiAgICAgICAgICBwcmV2ZW50LWludmFsaWQtaW5wdXRcbiAgICAgICAgICBtYXhsZW5ndGg9XCIyXCJcbiAgICAgICAgICBtYXg9XCI1OVwiXG4gICAgICAgICAgbWluPVwiMFwiXG4gICAgICAgICAgbm8tbGFiZWwtZmxvYXQkPVwiW1shZmxvYXRJbnB1dExhYmVsc11dXCJcbiAgICAgICAgICBhbHdheXMtZmxvYXQtbGFiZWwkPVwiW1thbHdheXNGbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCJcbiAgICAgICAgPlxuICAgICAgICAgIDxzcGFuIGhpZGRlbiQ9XCJbWyFlbmFibGVTZWNvbmRdXVwiIHN1ZmZpeCBzbG90PVwic3VmZml4XCI+Ojwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8IS0tIFNlYyBJbnB1dCAtLT5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgaWQ9XCJzZWNcIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIHZhbHVlPVwie3tzZWN9fVwiXG4gICAgICAgICAgbGFiZWw9XCJbW3NlY0xhYmVsXV1cIlxuICAgICAgICAgIG9uLWNoYW5nZT1cIl9mb3JtYXRTZWNcIlxuICAgICAgICAgIG9uLWZvY3VzPVwiX29uRm9jdXNcIlxuICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgYXV0by12YWxpZGF0ZT1cIltbYXV0b1ZhbGlkYXRlXV1cIlxuICAgICAgICAgIHByZXZlbnQtaW52YWxpZC1pbnB1dFxuICAgICAgICAgIG1heGxlbmd0aD1cIjJcIlxuICAgICAgICAgIG1heD1cIjU5XCJcbiAgICAgICAgICBtaW49XCIwXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdCQ9XCJbWyFmbG9hdElucHV0TGFiZWxzXV1cIlxuICAgICAgICAgIGFsd2F5cy1mbG9hdC1sYWJlbCQ9XCJbW2Fsd2F5c0Zsb2F0SW5wdXRMYWJlbHNdXVwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbWyFlbmFibGVTZWNvbmRdXVwiXG4gICAgICAgID5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cblxuICAgICAgICA8IS0tIERyb3Bkb3duIE1lbnUgLS0+XG4gICAgICAgIDxwYXBlci1kcm9wZG93bi1tZW51XG4gICAgICAgICAgaWQ9XCJkcm9wZG93blwiXG4gICAgICAgICAgcmVxdWlyZWQ9XCJcIlxuICAgICAgICAgIGhpZGRlbiQ9XCJbW19lcXVhbChmb3JtYXQsIDI0KV1dXCJcbiAgICAgICAgICBuby1sYWJlbC1mbG9hdD1cIlwiXG4gICAgICAgICAgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIlxuICAgICAgICA+XG4gICAgICAgICAgPHBhcGVyLWxpc3Rib3hcbiAgICAgICAgICAgIGF0dHItZm9yLXNlbGVjdGVkPVwibmFtZVwiXG4gICAgICAgICAgICBzZWxlY3RlZD1cInt7YW1QbX19XCJcbiAgICAgICAgICAgIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCJcbiAgICAgICAgICA+XG4gICAgICAgICAgICA8cGFwZXItaXRlbSBuYW1lPVwiQU1cIj5BTTwvcGFwZXItaXRlbT5cbiAgICAgICAgICAgIDxwYXBlci1pdGVtIG5hbWU9XCJQTVwiPlBNPC9wYXBlci1pdGVtPlxuICAgICAgICAgIDwvcGFwZXItbGlzdGJveD5cbiAgICAgICAgPC9wYXBlci1kcm9wZG93bi1tZW51PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBMYWJlbCBmb3IgdGhlIGlucHV0XG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6IFwiVGltZVwiLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogYXV0byB2YWxpZGF0ZSB0aW1lIGlucHV0c1xuICAgICAgICovXG4gICAgICBhdXRvVmFsaWRhdGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IHRydWUsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBoaWRlcyB0aGUgbGFiZWxcbiAgICAgICAqL1xuICAgICAgaGlkZUxhYmVsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGZsb2F0IHRoZSBpbnB1dCBsYWJlbHNcbiAgICAgICAqL1xuICAgICAgZmxvYXRJbnB1dExhYmVsczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBhbHdheXMgZmxvYXQgdGhlIGlucHV0IGxhYmVsc1xuICAgICAgICovXG4gICAgICBhbHdheXNGbG9hdElucHV0TGFiZWxzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIDEyIG9yIDI0IGhyIGZvcm1hdFxuICAgICAgICovXG4gICAgICBmb3JtYXQ6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMTIsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBkaXNhYmxlcyB0aGUgaW5wdXRzXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIGhvdXJcbiAgICAgICAqL1xuICAgICAgaG91cjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIG1pbnV0ZVxuICAgICAgICovXG4gICAgICBtaW46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBzZWNvbmRcbiAgICAgICAqL1xuICAgICAgc2VjOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogU3VmZml4IGZvciB0aGUgaG91ciBpbnB1dFxuICAgICAgICovXG4gICAgICBob3VyTGFiZWw6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogXCJcIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFN1ZmZpeCBmb3IgdGhlIG1pbiBpbnB1dFxuICAgICAgICovXG4gICAgICBtaW5MYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIjpcIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIFN1ZmZpeCBmb3IgdGhlIHNlYyBpbnB1dFxuICAgICAgICovXG4gICAgICBzZWNMYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiBcIlwiLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogc2hvdyB0aGUgc2VjIGZpZWxkXG4gICAgICAgKi9cbiAgICAgIGVuYWJsZVNlY29uZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuICAgICAgLyoqXG4gICAgICAgKiBsaW1pdCBob3VycyBpbnB1dFxuICAgICAgICovXG4gICAgICBub0hvdXJzTGltaXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgfSxcbiAgICAgIC8qKlxuICAgICAgICogQU0gb3IgUE1cbiAgICAgICAqL1xuICAgICAgYW1QbToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IFwiQU1cIixcbiAgICAgIH0sXG4gICAgICAvKipcbiAgICAgICAqIEZvcm1hdHRlZCB0aW1lIHN0cmluZ1xuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIGNvbXB1dGVkOiBcIl9jb21wdXRlVGltZShtaW4sIGhvdXIsIHNlYywgYW1QbSlcIixcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGUgaW5wdXRzXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICB2YWxpZGF0ZSgpIHtcbiAgICB2YXIgdmFsaWQgPSB0cnVlO1xuICAgIC8vIFZhbGlkYXRlIGhvdXIgJiBtaW4gZmllbGRzXG4gICAgaWYgKCF0aGlzLiQuaG91ci52YWxpZGF0ZSgpIHwgIXRoaXMuJC5taW4udmFsaWRhdGUoKSkge1xuICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICB9XG4gICAgLy8gVmFsaWRhdGUgc2Vjb25kIGZpZWxkXG4gICAgaWYgKHRoaXMuZW5hYmxlU2Vjb25kICYmICF0aGlzLiQuc2VjLnZhbGlkYXRlKCkpIHtcbiAgICAgIHZhbGlkID0gZmFsc2U7XG4gICAgfVxuICAgIC8vIFZhbGlkYXRlIEFNIFBNIGlmIDEyIGhvdXIgdGltZVxuICAgIGlmICh0aGlzLmZvcm1hdCA9PT0gMTIgJiYgIXRoaXMuJC5kcm9wZG93bi52YWxpZGF0ZSgpKSB7XG4gICAgICB2YWxpZCA9IGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWQ7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlIHRpbWUgc3RyaW5nXG4gICAqL1xuICBfY29tcHV0ZVRpbWUobWluLCBob3VyLCBzZWMsIGFtUG0pIHtcbiAgICBsZXQgc3RyO1xuICAgIGlmIChob3VyIHx8IG1pbiB8fCAoc2VjICYmIHRoaXMuZW5hYmxlU2Vjb25kKSkge1xuICAgICAgaG91ciA9IGhvdXIgfHwgXCIwMFwiO1xuICAgICAgbWluID0gbWluIHx8IFwiMDBcIjtcbiAgICAgIHNlYyA9IHNlYyB8fCBcIjAwXCI7XG4gICAgICBzdHIgPSBob3VyICsgXCI6XCIgKyBtaW47XG4gICAgICAvLyBhZGQgc2VjIGZpZWxkXG4gICAgICBpZiAodGhpcy5lbmFibGVTZWNvbmQgJiYgc2VjKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIFwiOlwiICsgc2VjO1xuICAgICAgfVxuICAgICAgLy8gTm8gYW1wbSBvbiAyNCBociB0aW1lXG4gICAgICBpZiAodGhpcy5mb3JtYXQgPT09IDEyKSB7XG4gICAgICAgIHN0ciA9IHN0ciArIFwiIFwiICsgYW1QbTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gc3RyO1xuICB9XG5cbiAgX29uRm9jdXMoZXYpIHtcbiAgICBldi50YXJnZXQuaW5wdXRFbGVtZW50LmlucHV0RWxlbWVudC5zZWxlY3QoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb3JtYXQgc2VjXG4gICAqL1xuICBfZm9ybWF0U2VjKCkge1xuICAgIGlmICh0aGlzLnNlYy50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5zZWMgPSB0aGlzLnNlYy50b1N0cmluZygpLnBhZFN0YXJ0KDIsIFwiMFwiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IG1pblxuICAgKi9cbiAgX2Zvcm1hdE1pbigpIHtcbiAgICBpZiAodGhpcy5taW4udG9TdHJpbmcoKS5sZW5ndGggPT09IDEpIHtcbiAgICAgIHRoaXMubWluID0gdGhpcy5taW4udG9TdHJpbmcoKS5wYWRTdGFydCgyLCBcIjBcIik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZvcm1hdCBob3VyXG4gICAqL1xuICBfc2hvdWxkRm9ybWF0SG91cigpIHtcbiAgICBpZiAodGhpcy5mb3JtYXQgPT09IDI0ICYmIHRoaXMuaG91ci50b1N0cmluZygpLmxlbmd0aCA9PT0gMSkge1xuICAgICAgdGhpcy5ob3VyID0gdGhpcy5ob3VyLnRvU3RyaW5nKCkucGFkU3RhcnQoMiwgXCIwXCIpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiAyNCBob3VyIGZvcm1hdCBoYXMgYSBtYXggaHIgb2YgMjNcbiAgICovXG4gIF9jb21wdXRlSG91ck1heChmb3JtYXQpIHtcbiAgICBpZiAodGhpcy5ub0hvdXJzTGltaXQpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoZm9ybWF0ID09PSAxMikge1xuICAgICAgcmV0dXJuIGZvcm1hdDtcbiAgICB9XG4gICAgcmV0dXJuIDIzO1xuICB9XG5cbiAgX2VxdWFsKG4xLCBuMikge1xuICAgIHJldHVybiBuMSA9PT0gbjI7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwicGFwZXItdGltZS1pbnB1dFwiLCBQYXBlclRpbWVJbnB1dCk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZVwiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZ1wiO1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnRcIjtcblxuaW1wb3J0IFwiLi9lbnRpdHkvaGEtY2hhcnQtYmFzZVwiO1xuXG5pbXBvcnQgTG9jYWxpemVNaXhpbiBmcm9tIFwiLi4vbWl4aW5zL2xvY2FsaXplLW1peGluXCI7XG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0TGluZSBleHRlbmRzIExvY2FsaXplTWl4aW4oUG9seW1lckVsZW1lbnQpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzdHlsZT5cbiAgICAgICAgOmhvc3Qge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgICAgaGVpZ2h0OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IGhlaWdodCAwLjNzIGVhc2UtaW4tb3V0O1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNoYXJ0LWJhc2VcbiAgICAgICAgaWQ9XCJjaGFydFwiXG4gICAgICAgIGRhdGE9XCJbW2NoYXJ0RGF0YV1dXCJcbiAgICAgICAgaWRlbnRpZmllcj1cIltbaWRlbnRpZmllcl1dXCJcbiAgICAgICAgcmVuZGVyZWQ9XCJ7e3JlbmRlcmVkfX1cIlxuICAgICAgPjwvaGEtY2hhcnQtYmFzZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBjaGFydERhdGE6IE9iamVjdCxcbiAgICAgIGRhdGE6IE9iamVjdCxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG4gICAgICB1bml0OiBTdHJpbmcsXG4gICAgICBpZGVudGlmaWVyOiBTdHJpbmcsXG5cbiAgICAgIGlzU2luZ2xlRGV2aWNlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIH0sXG5cbiAgICAgIGVuZFRpbWU6IE9iamVjdCxcbiAgICAgIHJlbmRlcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgb2JzZXJ2ZXI6IFwiX29uUmVuZGVyZWRDaGFuZ2VkXCIsXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1wiZGF0YUNoYW5nZWQoZGF0YSwgZW5kVGltZSwgaXNTaW5nbGVEZXZpY2UpXCJdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9pc0F0dGFjaGVkID0gdHJ1ZTtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZGF0YUNoYW5nZWQoKSB7XG4gICAgdGhpcy5kcmF3Q2hhcnQoKTtcbiAgfVxuXG4gIF9vblJlbmRlcmVkQ2hhbmdlZChyZW5kZXJlZCkge1xuICAgIGlmIChyZW5kZXJlZCkgdGhpcy5hbmltYXRlSGVpZ2h0KCk7XG4gIH1cblxuICBhbmltYXRlSGVpZ2h0KCkge1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PlxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5zdHlsZS5oZWlnaHQgPSB0aGlzLiQuY2hhcnQuc2Nyb2xsSGVpZ2h0ICsgXCJweFwiO1xuICAgICAgfSlcbiAgICApO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IHVuaXQgPSB0aGlzLnVuaXQ7XG4gICAgY29uc3QgZGV2aWNlU3RhdGVzID0gdGhpcy5kYXRhO1xuICAgIGNvbnN0IGRhdGFzZXRzID0gW107XG4gICAgbGV0IGVuZFRpbWU7XG5cbiAgICBpZiAoIXRoaXMuX2lzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZGV2aWNlU3RhdGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHNhZmVQYXJzZUZsb2F0KHZhbHVlKSB7XG4gICAgICBjb25zdCBwYXJzZWQgPSBwYXJzZUZsb2F0KHZhbHVlKTtcbiAgICAgIHJldHVybiBpc0Zpbml0ZShwYXJzZWQpID8gcGFyc2VkIDogbnVsbDtcbiAgICB9XG5cbiAgICBlbmRUaW1lID1cbiAgICAgIHRoaXMuZW5kVGltZSB8fFxuICAgICAgLy8gR2V0IHRoZSBoaWdoZXN0IGRhdGUgZnJvbSB0aGUgbGFzdCBkYXRlIG9mIGVhY2ggZGV2aWNlXG4gICAgICBuZXcgRGF0ZShcbiAgICAgICAgTWF0aC5tYXguYXBwbHkoXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgICBkZXZpY2VTdGF0ZXMubWFwKFxuICAgICAgICAgICAgKGRldlN0cykgPT5cbiAgICAgICAgICAgICAgbmV3IERhdGUoZGV2U3RzLnN0YXRlc1tkZXZTdHMuc3RhdGVzLmxlbmd0aCAtIDFdLmxhc3RfY2hhbmdlZClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICk7XG4gICAgaWYgKGVuZFRpbWUgPiBuZXcgRGF0ZSgpKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXMgfHwge307XG4gICAgZGV2aWNlU3RhdGVzLmZvckVhY2goKHN0YXRlcykgPT4ge1xuICAgICAgY29uc3QgZG9tYWluID0gc3RhdGVzLmRvbWFpbjtcbiAgICAgIGNvbnN0IG5hbWUgPSBuYW1lc1tzdGF0ZXMuZW50aXR5X2lkXSB8fCBzdGF0ZXMubmFtZTtcbiAgICAgIC8vIGFycmF5IGNvbnRhaW5pbmcgW3ZhbHVlMSwgdmFsdWUyLCBldGNdXG4gICAgICBsZXQgcHJldlZhbHVlcztcbiAgICAgIGNvbnN0IGRhdGEgPSBbXTtcblxuICAgICAgZnVuY3Rpb24gcHVzaERhdGEodGltZXN0YW1wLCBkYXRhdmFsdWVzKSB7XG4gICAgICAgIGlmICghZGF0YXZhbHVlcykgcmV0dXJuO1xuICAgICAgICBpZiAodGltZXN0YW1wID4gZW5kVGltZSkge1xuICAgICAgICAgIC8vIERyb3AgZGF0YXBvaW50cyB0aGF0IGFyZSBhZnRlciB0aGUgcmVxdWVzdGVkIGVuZFRpbWUuIFRoaXMgY291bGQgaGFwcGVuIGlmXG4gICAgICAgICAgLy8gZW5kVGltZSBpcyBcIm5vd1wiIGFuZCBjbGllbnQgdGltZSBpcyBub3QgaW4gc3luYyB3aXRoIHNlcnZlciB0aW1lLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLmZvckVhY2goKGQsIGkpID0+IHtcbiAgICAgICAgICBkLmRhdGEucHVzaCh7IHg6IHRpbWVzdGFtcCwgeTogZGF0YXZhbHVlc1tpXSB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHByZXZWYWx1ZXMgPSBkYXRhdmFsdWVzO1xuICAgICAgfVxuXG4gICAgICBmdW5jdGlvbiBhZGRDb2x1bW4obmFtZVksIHN0ZXAsIGZpbGwpIHtcbiAgICAgICAgbGV0IGRhdGFGaWxsID0gZmFsc2U7XG4gICAgICAgIGxldCBkYXRhU3RlcCA9IGZhbHNlO1xuICAgICAgICBpZiAoZmlsbCkge1xuICAgICAgICAgIGRhdGFGaWxsID0gXCJvcmlnaW5cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RlcCkge1xuICAgICAgICAgIGRhdGFTdGVwID0gXCJiZWZvcmVcIjtcbiAgICAgICAgfVxuICAgICAgICBkYXRhLnB1c2goe1xuICAgICAgICAgIGxhYmVsOiBuYW1lWSxcbiAgICAgICAgICBmaWxsOiBkYXRhRmlsbCxcbiAgICAgICAgICBzdGVwcGVkTGluZTogZGF0YVN0ZXAsXG4gICAgICAgICAgcG9pbnRSYWRpdXM6IDAsXG4gICAgICAgICAgZGF0YTogW10sXG4gICAgICAgICAgdW5pdFRleHQ6IHVuaXQsXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIGRvbWFpbiA9PT0gXCJ0aGVybW9zdGF0XCIgfHxcbiAgICAgICAgZG9tYWluID09PSBcImNsaW1hdGVcIiB8fFxuICAgICAgICBkb21haW4gPT09IFwid2F0ZXJfaGVhdGVyXCJcbiAgICAgICkge1xuICAgICAgICBjb25zdCBoYXNIdmFjQWN0aW9uID0gc3RhdGVzLnN0YXRlcy5zb21lKFxuICAgICAgICAgIChzdGF0ZSkgPT4gc3RhdGUuYXR0cmlidXRlcyAmJiBzdGF0ZS5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgY29uc3QgaXNIZWF0aW5nID1cbiAgICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiICYmIGhhc0h2YWNBY3Rpb25cbiAgICAgICAgICAgID8gKHN0YXRlKSA9PiBzdGF0ZS5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uID09PSBcImhlYXRpbmdcIlxuICAgICAgICAgICAgOiAoc3RhdGUpID0+IHN0YXRlLnN0YXRlID09PSBcImhlYXRcIjtcbiAgICAgICAgY29uc3QgaXNDb29saW5nID1cbiAgICAgICAgICBkb21haW4gPT09IFwiY2xpbWF0ZVwiICYmIGhhc0h2YWNBY3Rpb25cbiAgICAgICAgICAgID8gKHN0YXRlKSA9PiBzdGF0ZS5hdHRyaWJ1dGVzLmh2YWNfYWN0aW9uID09PSBcImNvb2xpbmdcIlxuICAgICAgICAgICAgOiAoc3RhdGUpID0+IHN0YXRlLnN0YXRlID09PSBcImNvb2xcIjtcblxuICAgICAgICBjb25zdCBoYXNIZWF0ID0gc3RhdGVzLnN0YXRlcy5zb21lKGlzSGVhdGluZyk7XG4gICAgICAgIGNvbnN0IGhhc0Nvb2wgPSBzdGF0ZXMuc3RhdGVzLnNvbWUoaXNDb29saW5nKTtcbiAgICAgICAgLy8gV2UgZGlmZmVyZW50aWF0ZSBiZXR3ZWVuIHRoZXJtb3N0YXRzIHRoYXQgaGF2ZSBhIHRhcmdldCB0ZW1wZXJhdHVyZVxuICAgICAgICAvLyByYW5nZSB2ZXJzdXMgb25lcyB0aGF0IGhhdmUganVzdCBhIHRhcmdldCB0ZW1wZXJhdHVyZVxuXG4gICAgICAgIC8vIFVzaW5nIHN0ZXAgY2hhcnQgYnkgc3RlcC1iZWZvcmUgc28gbWFudWFsbHkgaW50ZXJwb2xhdGlvbiBub3QgbmVlZGVkLlxuICAgICAgICBjb25zdCBoYXNUYXJnZXRSYW5nZSA9IHN0YXRlcy5zdGF0ZXMuc29tZShcbiAgICAgICAgICAoc3RhdGUpID0+XG4gICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzICYmXG4gICAgICAgICAgICBzdGF0ZS5hdHRyaWJ1dGVzLnRhcmdldF90ZW1wX2hpZ2ggIT09XG4gICAgICAgICAgICAgIHN0YXRlLmF0dHJpYnV0ZXMudGFyZ2V0X3RlbXBfbG93XG4gICAgICAgICk7XG5cbiAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgIGAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkuY2FyZC5jbGltYXRlLmN1cnJlbnRfdGVtcGVyYXR1cmVcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgbmFtZVxuICAgICAgICAgICl9YCxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICk7XG4gICAgICAgIGlmIChoYXNIZWF0KSB7XG4gICAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmhlYXRpbmdcIiwgXCJuYW1lXCIsIG5hbWUpfWAsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gVGhlIFwiaGVhdGluZ1wiIHNlcmllcyB1c2VzIHN0ZXBwZWRBcmVhIHRvIHNoYWRlIHRoZSBhcmVhIGJlbG93IHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gdGVtcGVyYXR1cmUgd2hlbiB0aGUgdGhlcm1vc3RhdCBpcyBjYWxsaW5nIGZvciBoZWF0LlxuICAgICAgICB9XG4gICAgICAgIGlmIChoYXNDb29sKSB7XG4gICAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmNvb2xpbmdcIiwgXCJuYW1lXCIsIG5hbWUpfWAsXG4gICAgICAgICAgICB0cnVlLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgICAgLy8gVGhlIFwiY29vbGluZ1wiIHNlcmllcyB1c2VzIHN0ZXBwZWRBcmVhIHRvIHNoYWRlIHRoZSBhcmVhIGJlbG93IHRoZSBjdXJyZW50XG4gICAgICAgICAgLy8gdGVtcGVyYXR1cmUgd2hlbiB0aGUgdGhlcm1vc3RhdCBpcyBjYWxsaW5nIGZvciBoZWF0LlxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGhhc1RhcmdldFJhbmdlKSB7XG4gICAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmNhcmQuY2xpbWF0ZS50YXJnZXRfdGVtcGVyYXR1cmVfbW9kZVwiLFxuICAgICAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgXCJtb2RlXCIsXG4gICAgICAgICAgICAgIHRoaXMuaGFzcy5sb2NhbGl6ZShcInVpLmNhcmQuY2xpbWF0ZS5oaWdoXCIpXG4gICAgICAgICAgICApfWAsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgICBhZGRDb2x1bW4oXG4gICAgICAgICAgICBgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgIFwidWkuY2FyZC5jbGltYXRlLnRhcmdldF90ZW1wZXJhdHVyZV9tb2RlXCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICBcIm1vZGVcIixcbiAgICAgICAgICAgICAgdGhpcy5oYXNzLmxvY2FsaXplKFwidWkuY2FyZC5jbGltYXRlLmxvd1wiKVxuICAgICAgICAgICAgKX1gLFxuICAgICAgICAgICAgdHJ1ZVxuICAgICAgICAgICk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgYWRkQ29sdW1uKFxuICAgICAgICAgICAgYCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLmNhcmQuY2xpbWF0ZS50YXJnZXRfdGVtcGVyYXR1cmVfZW50aXR5XCIsXG4gICAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgICBuYW1lXG4gICAgICAgICAgICApfWAsXG4gICAgICAgICAgICB0cnVlXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHN0YXRlcy5zdGF0ZXMuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgICBpZiAoIXN0YXRlLmF0dHJpYnV0ZXMpIHJldHVybjtcbiAgICAgICAgICBjb25zdCBjdXJUZW1wID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy5jdXJyZW50X3RlbXBlcmF0dXJlKTtcbiAgICAgICAgICBjb25zdCBzZXJpZXMgPSBbY3VyVGVtcF07XG4gICAgICAgICAgaWYgKGhhc0hlYXQpIHtcbiAgICAgICAgICAgIHNlcmllcy5wdXNoKGlzSGVhdGluZyhzdGF0ZSkgPyBjdXJUZW1wIDogbnVsbCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYXNDb29sKSB7XG4gICAgICAgICAgICBzZXJpZXMucHVzaChpc0Nvb2xpbmcoc3RhdGUpID8gY3VyVGVtcCA6IG51bGwpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFzVGFyZ2V0UmFuZ2UpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldEhpZ2ggPSBzYWZlUGFyc2VGbG9hdChcbiAgICAgICAgICAgICAgc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9oaWdoXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0TG93ID0gc2FmZVBhcnNlRmxvYXQoc3RhdGUuYXR0cmlidXRlcy50YXJnZXRfdGVtcF9sb3cpO1xuICAgICAgICAgICAgc2VyaWVzLnB1c2godGFyZ2V0SGlnaCwgdGFyZ2V0TG93KTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCksIHNlcmllcyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHNhZmVQYXJzZUZsb2F0KHN0YXRlLmF0dHJpYnV0ZXMudGVtcGVyYXR1cmUpO1xuICAgICAgICAgICAgc2VyaWVzLnB1c2godGFyZ2V0KTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCksIHNlcmllcyk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE9ubHkgZGlzYWJsZSBpbnRlcnBvbGF0aW9uIGZvciBzZW5zb3JzXG4gICAgICAgIGNvbnN0IGlzU3RlcCA9IGRvbWFpbiA9PT0gXCJzZW5zb3JcIjtcbiAgICAgICAgYWRkQ29sdW1uKG5hbWUsIGlzU3RlcCk7XG5cbiAgICAgICAgbGV0IGxhc3RWYWx1ZSA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0RGF0ZSA9IG51bGw7XG4gICAgICAgIGxldCBsYXN0TnVsbERhdGUgPSBudWxsO1xuXG4gICAgICAgIC8vIFByb2Nlc3MgY2hhcnQgZGF0YS5cbiAgICAgICAgLy8gV2hlbiBzdGF0ZSBpcyBgdW5rbm93bmAsIGNhbGN1bGF0ZSB0aGUgdmFsdWUgYW5kIGJyZWFrIHRoZSBsaW5lLlxuICAgICAgICBzdGF0ZXMuc3RhdGVzLmZvckVhY2goKHN0YXRlKSA9PiB7XG4gICAgICAgICAgY29uc3QgdmFsdWUgPSBzYWZlUGFyc2VGbG9hdChzdGF0ZS5zdGF0ZSk7XG4gICAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgICAgaWYgKHZhbHVlICE9PSBudWxsICYmIGxhc3ROdWxsRGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZGF0ZVRpbWUgPSBkYXRlLmdldFRpbWUoKTtcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROdWxsRGF0ZVRpbWUgPSBsYXN0TnVsbERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgbGFzdERhdGVUaW1lID0gbGFzdERhdGUuZ2V0VGltZSgpO1xuICAgICAgICAgICAgY29uc3QgdG1wVmFsdWUgPVxuICAgICAgICAgICAgICAodmFsdWUgLSBsYXN0VmFsdWUpICpcbiAgICAgICAgICAgICAgICAoKGxhc3ROdWxsRGF0ZVRpbWUgLSBsYXN0RGF0ZVRpbWUpIC9cbiAgICAgICAgICAgICAgICAgIChkYXRlVGltZSAtIGxhc3REYXRlVGltZSkpICtcbiAgICAgICAgICAgICAgbGFzdFZhbHVlO1xuICAgICAgICAgICAgcHVzaERhdGEobGFzdE51bGxEYXRlLCBbdG1wVmFsdWVdKTtcbiAgICAgICAgICAgIHB1c2hEYXRhKG5ldyBEYXRlKGxhc3ROdWxsRGF0ZVRpbWUgKyAxKSwgW251bGxdKTtcbiAgICAgICAgICAgIHB1c2hEYXRhKGRhdGUsIFt2YWx1ZV0pO1xuICAgICAgICAgICAgbGFzdERhdGUgPSBkYXRlO1xuICAgICAgICAgICAgbGFzdFZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICBsYXN0TnVsbERhdGUgPSBudWxsO1xuICAgICAgICAgIH0gZWxzZSBpZiAodmFsdWUgIT09IG51bGwgJiYgbGFzdE51bGxEYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICBwdXNoRGF0YShkYXRlLCBbdmFsdWVdKTtcbiAgICAgICAgICAgIGxhc3REYXRlID0gZGF0ZTtcbiAgICAgICAgICAgIGxhc3RWYWx1ZSA9IHZhbHVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgICAgICB2YWx1ZSA9PT0gbnVsbCAmJlxuICAgICAgICAgICAgbGFzdE51bGxEYXRlID09PSBudWxsICYmXG4gICAgICAgICAgICBsYXN0VmFsdWUgIT09IG51bGxcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIGxhc3ROdWxsRGF0ZSA9IGRhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgLy8gQWRkIGFuIGVudHJ5IGZvciBmaW5hbCB2YWx1ZXNcbiAgICAgIHB1c2hEYXRhKGVuZFRpbWUsIHByZXZWYWx1ZXMsIGZhbHNlKTtcblxuICAgICAgLy8gQ29uY2F0IHR3byBhcnJheXNcbiAgICAgIEFycmF5LnByb3RvdHlwZS5wdXNoLmFwcGx5KGRhdGFzZXRzLCBkYXRhKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdFRvb2x0aXBUaXRsZSA9IChpdGVtcywgZGF0YSkgPT4ge1xuICAgICAgY29uc3QgaXRlbSA9IGl0ZW1zWzBdO1xuICAgICAgY29uc3QgZGF0ZSA9IGRhdGEuZGF0YXNldHNbaXRlbS5kYXRhc2V0SW5kZXhdLmRhdGFbaXRlbS5pbmRleF0ueDtcblxuICAgICAgcmV0dXJuIGZvcm1hdERhdGVUaW1lKGRhdGUsIHRoaXMuaGFzcy5sYW5ndWFnZSk7XG4gICAgfTtcblxuICAgIGNvbnN0IGNoYXJ0T3B0aW9ucyA9IHtcbiAgICAgIHR5cGU6IFwibGluZVwiLFxuICAgICAgdW5pdDogdW5pdCxcbiAgICAgIGxlZ2VuZDogIXRoaXMuaXNTaW5nbGVEZXZpY2UsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIHNjYWxlczoge1xuICAgICAgICAgIHhBeGVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHR5cGU6IFwidGltZVwiLFxuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1ham9yOiB7XG4gICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdGlja3M6IHtcbiAgICAgICAgICAgICAgICBtYXhUaWNrc0xpbWl0OiA3LFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIG1vZGU6IFwibmVhcmVhY2hcIixcbiAgICAgICAgICBjYWxsYmFja3M6IHtcbiAgICAgICAgICAgIHRpdGxlOiBmb3JtYXRUb29sdGlwVGl0bGUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgaG92ZXI6IHtcbiAgICAgICAgICBtb2RlOiBcIm5lYXJlYWNoXCIsXG4gICAgICAgIH0sXG4gICAgICAgIGxheW91dDoge1xuICAgICAgICAgIHBhZGRpbmc6IHtcbiAgICAgICAgICAgIHRvcDogNSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBlbGVtZW50czoge1xuICAgICAgICAgIGxpbmU6IHtcbiAgICAgICAgICAgIHRlbnNpb246IDAuMSxcbiAgICAgICAgICAgIHBvaW50UmFkaXVzOiAwLFxuICAgICAgICAgICAgYm9yZGVyV2lkdGg6IDEuNSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBvaW50OiB7XG4gICAgICAgICAgICBoaXRSYWRpdXM6IDUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgcGx1Z2luczoge1xuICAgICAgICAgIGZpbGxlcjoge1xuICAgICAgICAgICAgcHJvcGFnYXRlOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgICAgZGF0YToge1xuICAgICAgICBsYWJlbHM6IFtdLFxuICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICB9LFxuICAgIH07XG4gICAgdGhpcy5jaGFydERhdGEgPSBjaGFydE9wdGlvbnM7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiLCBTdGF0ZUhpc3RvcnlDaGFydExpbmUpO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IGh0bWwgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWdcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IFwiLi9lbnRpdHkvaGEtY2hhcnQtYmFzZVwiO1xuXG5pbXBvcnQgZm9ybWF0RGF0ZVRpbWUgZnJvbSBcIi4uL2NvbW1vbi9kYXRldGltZS9mb3JtYXRfZGF0ZV90aW1lXCI7XG5pbXBvcnQgeyBjb21wdXRlUlRMIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2NvbXB1dGVfcnRsXCI7XG5cbmNsYXNzIFN0YXRlSGlzdG9yeUNoYXJ0VGltZWxpbmUgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcyBlYXNlLWluLW91dDtcbiAgICAgICAgfVxuICAgICAgICA6aG9zdChbcmVuZGVyZWRdKSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGhhLWNoYXJ0LWJhc2Uge1xuICAgICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLWNoYXJ0LWJhc2VcbiAgICAgICAgZGF0YT1cIltbY2hhcnREYXRhXV1cIlxuICAgICAgICByZW5kZXJlZD1cInt7cmVuZGVyZWR9fVwiXG4gICAgICAgIHJ0bD1cInt7cnRsfX1cIlxuICAgICAgPjwvaGEtY2hhcnQtYmFzZT5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICBoYXNzOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIH0sXG4gICAgICBjaGFydERhdGE6IE9iamVjdCxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogXCJkYXRhQ2hhbmdlZFwiLFxuICAgICAgfSxcbiAgICAgIG5hbWVzOiBPYmplY3QsXG4gICAgICBub1NpbmdsZTogQm9vbGVhbixcbiAgICAgIGVuZFRpbWU6IERhdGUsXG4gICAgICByZW5kZXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgICBydGw6IHtcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogXCJfY29tcHV0ZVJUTChoYXNzKVwiLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcImRhdGFDaGFuZ2VkKGRhdGEsIGVuZFRpbWUsIGxvY2FsaXplLCBsYW5ndWFnZSlcIl07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2lzQXR0YWNoZWQgPSB0cnVlO1xuICAgIHRoaXMuZHJhd0NoYXJ0KCk7XG4gIH1cblxuICBkYXRhQ2hhbmdlZCgpIHtcbiAgICB0aGlzLmRyYXdDaGFydCgpO1xuICB9XG5cbiAgZHJhd0NoYXJ0KCkge1xuICAgIGNvbnN0IHN0YXRpY0NvbG9ycyA9IHtcbiAgICAgIG9uOiAxLFxuICAgICAgb2ZmOiAwLFxuICAgICAgdW5hdmFpbGFibGU6IFwiI2EwYTBhMFwiLFxuICAgICAgdW5rbm93bjogXCIjNjA2MDYwXCIsXG4gICAgICBpZGxlOiAyLFxuICAgIH07XG4gICAgbGV0IHN0YXRlSGlzdG9yeSA9IHRoaXMuZGF0YTtcblxuICAgIGlmICghdGhpcy5faXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghc3RhdGVIaXN0b3J5KSB7XG4gICAgICBzdGF0ZUhpc3RvcnkgPSBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShcbiAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgIChtaW5UaW1lLCBzdGF0ZUluZm8pID0+XG4gICAgICAgICAgTWF0aC5taW4obWluVGltZSwgbmV3IERhdGUoc3RhdGVJbmZvLmRhdGFbMF0ubGFzdF9jaGFuZ2VkKSksXG4gICAgICAgIG5ldyBEYXRlKClcbiAgICAgIClcbiAgICApO1xuXG4gICAgLy8gZW5kIHRpbWUgaXMgTWF0aC5tYXgoc3RhcnRUaW1lLCBsYXN0X2V2ZW50KVxuICAgIGxldCBlbmRUaW1lID1cbiAgICAgIHRoaXMuZW5kVGltZSB8fFxuICAgICAgbmV3IERhdGUoXG4gICAgICAgIHN0YXRlSGlzdG9yeS5yZWR1Y2UoXG4gICAgICAgICAgKG1heFRpbWUsIHN0YXRlSW5mbykgPT5cbiAgICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICBtYXhUaW1lLFxuICAgICAgICAgICAgICBuZXcgRGF0ZShzdGF0ZUluZm8uZGF0YVtzdGF0ZUluZm8uZGF0YS5sZW5ndGggLSAxXS5sYXN0X2NoYW5nZWQpXG4gICAgICAgICAgICApLFxuICAgICAgICAgIHN0YXJ0VGltZVxuICAgICAgICApXG4gICAgICApO1xuXG4gICAgaWYgKGVuZFRpbWUgPiBuZXcgRGF0ZSgpKSB7XG4gICAgICBlbmRUaW1lID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICBjb25zdCBsYWJlbHMgPSBbXTtcbiAgICBjb25zdCBkYXRhc2V0cyA9IFtdO1xuICAgIC8vIHN0YXRlSGlzdG9yeSBpcyBhIGxpc3Qgb2YgbGlzdHMgb2Ygc29ydGVkIHN0YXRlIG9iamVjdHNcbiAgICBjb25zdCBuYW1lcyA9IHRoaXMubmFtZXMgfHwge307XG4gICAgc3RhdGVIaXN0b3J5LmZvckVhY2goKHN0YXRlSW5mbykgPT4ge1xuICAgICAgbGV0IG5ld0xhc3RDaGFuZ2VkO1xuICAgICAgbGV0IHByZXZTdGF0ZSA9IG51bGw7XG4gICAgICBsZXQgbG9jU3RhdGUgPSBudWxsO1xuICAgICAgbGV0IHByZXZMYXN0Q2hhbmdlZCA9IHN0YXJ0VGltZTtcbiAgICAgIGNvbnN0IGVudGl0eURpc3BsYXkgPSBuYW1lc1tzdGF0ZUluZm8uZW50aXR5X2lkXSB8fCBzdGF0ZUluZm8ubmFtZTtcblxuICAgICAgY29uc3QgZGF0YVJvdyA9IFtdO1xuICAgICAgc3RhdGVJbmZvLmRhdGEuZm9yRWFjaCgoc3RhdGUpID0+IHtcbiAgICAgICAgbGV0IG5ld1N0YXRlID0gc3RhdGUuc3RhdGU7XG4gICAgICAgIGNvbnN0IHRpbWVTdGFtcCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG4gICAgICAgIGlmIChuZXdTdGF0ZSA9PT0gdW5kZWZpbmVkIHx8IG5ld1N0YXRlID09PSBcIlwiKSB7XG4gICAgICAgICAgbmV3U3RhdGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aW1lU3RhbXAgPiBlbmRUaW1lKSB7XG4gICAgICAgICAgLy8gRHJvcCBkYXRhcG9pbnRzIHRoYXQgYXJlIGFmdGVyIHRoZSByZXF1ZXN0ZWQgZW5kVGltZS4gVGhpcyBjb3VsZCBoYXBwZW4gaWZcbiAgICAgICAgICAvLyBlbmRUaW1lIGlzICdub3cnIGFuZCBjbGllbnQgdGltZSBpcyBub3QgaW4gc3luYyB3aXRoIHNlcnZlciB0aW1lLlxuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAocHJldlN0YXRlICE9PSBudWxsICYmIG5ld1N0YXRlICE9PSBwcmV2U3RhdGUpIHtcbiAgICAgICAgICBuZXdMYXN0Q2hhbmdlZCA9IG5ldyBEYXRlKHN0YXRlLmxhc3RfY2hhbmdlZCk7XG5cbiAgICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgbmV3TGFzdENoYW5nZWQsIGxvY1N0YXRlLCBwcmV2U3RhdGVdKTtcblxuICAgICAgICAgIHByZXZTdGF0ZSA9IG5ld1N0YXRlO1xuICAgICAgICAgIGxvY1N0YXRlID0gc3RhdGUuc3RhdGVfbG9jYWxpemU7XG4gICAgICAgICAgcHJldkxhc3RDaGFuZ2VkID0gbmV3TGFzdENoYW5nZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAocHJldlN0YXRlID09PSBudWxsKSB7XG4gICAgICAgICAgcHJldlN0YXRlID0gbmV3U3RhdGU7XG4gICAgICAgICAgbG9jU3RhdGUgPSBzdGF0ZS5zdGF0ZV9sb2NhbGl6ZTtcbiAgICAgICAgICBwcmV2TGFzdENoYW5nZWQgPSBuZXcgRGF0ZShzdGF0ZS5sYXN0X2NoYW5nZWQpO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgaWYgKHByZXZTdGF0ZSAhPT0gbnVsbCkge1xuICAgICAgICBkYXRhUm93LnB1c2goW3ByZXZMYXN0Q2hhbmdlZCwgZW5kVGltZSwgbG9jU3RhdGUsIHByZXZTdGF0ZV0pO1xuICAgICAgfVxuICAgICAgZGF0YXNldHMucHVzaCh7IGRhdGE6IGRhdGFSb3cgfSk7XG4gICAgICBsYWJlbHMucHVzaChlbnRpdHlEaXNwbGF5KTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGZvcm1hdFRvb2x0aXBMYWJlbCA9IChpdGVtLCBkYXRhKSA9PiB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBkYXRhLmRhdGFzZXRzW2l0ZW0uZGF0YXNldEluZGV4XS5kYXRhW2l0ZW0uaW5kZXhdO1xuXG4gICAgICBjb25zdCBzdGFydCA9IGZvcm1hdERhdGVUaW1lKHZhbHVlc1swXSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICAgIGNvbnN0IGVuZCA9IGZvcm1hdERhdGVUaW1lKHZhbHVlc1sxXSwgdGhpcy5oYXNzLmxhbmd1YWdlKTtcbiAgICAgIGNvbnN0IHN0YXRlID0gdmFsdWVzWzJdO1xuXG4gICAgICByZXR1cm4gW3N0YXRlLCBzdGFydCwgZW5kXTtcbiAgICB9O1xuXG4gICAgY29uc3QgY2hhcnRPcHRpb25zID0ge1xuICAgICAgdHlwZTogXCJ0aW1lbGluZVwiLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICB0b29sdGlwczoge1xuICAgICAgICAgIGNhbGxiYWNrczoge1xuICAgICAgICAgICAgbGFiZWw6IGZvcm1hdFRvb2x0aXBMYWJlbCxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzY2FsZXM6IHtcbiAgICAgICAgICB4QXhlczogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB0aWNrczoge1xuICAgICAgICAgICAgICAgIG1ham9yOiB7XG4gICAgICAgICAgICAgICAgICBmb250U3R5bGU6IFwiYm9sZFwiLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgeUF4ZXM6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgYWZ0ZXJTZXREaW1lbnNpb25zOiAoeWF4ZSkgPT4ge1xuICAgICAgICAgICAgICAgIHlheGUubWF4V2lkdGggPSB5YXhlLmNoYXJ0LndpZHRoICogMC4xODtcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuX2NvbXB1dGVSVEwgPyBcInJpZ2h0XCIgOiBcImxlZnRcIixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGxhYmVsczogbGFiZWxzLFxuICAgICAgICBkYXRhc2V0czogZGF0YXNldHMsXG4gICAgICB9LFxuICAgICAgY29sb3JzOiB7XG4gICAgICAgIHN0YXRpY0NvbG9yczogc3RhdGljQ29sb3JzLFxuICAgICAgICBzdGF0aWNDb2xvckluZGV4OiAzLFxuICAgICAgfSxcbiAgICB9O1xuICAgIHRoaXMuY2hhcnREYXRhID0gY2hhcnRPcHRpb25zO1xuICB9XG5cbiAgX2NvbXB1dGVSVEwoaGFzcykge1xuICAgIHJldHVybiBjb21wdXRlUlRMKGhhc3MpO1xuICB9XG59XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXG4gIFwic3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZVwiLFxuICBTdGF0ZUhpc3RvcnlDaGFydFRpbWVsaW5lXG4pO1xuIiwiaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItc3Bpbm5lci9wYXBlci1zcGlubmVyXCI7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnXCI7XG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudFwiO1xuXG5pbXBvcnQgXCIuL3N0YXRlLWhpc3RvcnktY2hhcnQtbGluZVwiO1xuaW1wb3J0IFwiLi9zdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuY2xhc3MgU3RhdGVIaXN0b3J5Q2hhcnRzIGV4dGVuZHMgTG9jYWxpemVNaXhpbihQb2x5bWVyRWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHN0eWxlPlxuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgLyogaGVpZ2h0IG9mIHNpbmdsZSB0aW1lbGluZSBjaGFydCA9IDU4cHggKi9cbiAgICAgICAgICBtaW4taGVpZ2h0OiA1OHB4O1xuICAgICAgICB9XG4gICAgICAgIC5pbmZvIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDU4cHg7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgPC9zdHlsZT5cbiAgICAgIDx0ZW1wbGF0ZVxuICAgICAgICBpcz1cImRvbS1pZlwiXG4gICAgICAgIGNsYXNzPVwiaW5mb1wiXG4gICAgICAgIGlmPVwiW1tfY29tcHV0ZUlzTG9hZGluZyhpc0xvYWRpbmdEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLmxvYWRpbmdfaGlzdG9yeScpXV1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgICA8dGVtcGxhdGVcbiAgICAgICAgaXM9XCJkb20taWZcIlxuICAgICAgICBjbGFzcz1cImluZm9cIlxuICAgICAgICBpZj1cIltbX2NvbXB1dGVJc0VtcHR5KGlzTG9hZGluZ0RhdGEsIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm9cIj5cbiAgICAgICAgICBbW2xvY2FsaXplKCd1aS5jb21wb25lbnRzLmhpc3RvcnlfY2hhcnRzLm5vX2hpc3RvcnlfZm91bmQnKV1dXG4gICAgICAgIDwvZGl2PlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2hpc3RvcnlEYXRhLnRpbWVsaW5lLmxlbmd0aF1dXCI+XG4gICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0LXRpbWVsaW5lXG4gICAgICAgICAgaGFzcz1cIltbaGFzc11dXCJcbiAgICAgICAgICBkYXRhPVwiW1toaXN0b3J5RGF0YS50aW1lbGluZV1dXCJcbiAgICAgICAgICBlbmQtdGltZT1cIltbX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3csIGhpc3RvcnlEYXRhKV1dXCJcbiAgICAgICAgICBuby1zaW5nbGU9XCJbW25vU2luZ2xlXV1cIlxuICAgICAgICAgIG5hbWVzPVwiW1tuYW1lc11dXCJcbiAgICAgICAgPjwvc3RhdGUtaGlzdG9yeS1jaGFydC10aW1lbGluZT5cbiAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbaGlzdG9yeURhdGEubGluZV1dXCI+XG4gICAgICAgIDxzdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmVcbiAgICAgICAgICBoYXNzPVwiW1toYXNzXV1cIlxuICAgICAgICAgIHVuaXQ9XCJbW2l0ZW0udW5pdF1dXCJcbiAgICAgICAgICBkYXRhPVwiW1tpdGVtLmRhdGFdXVwiXG4gICAgICAgICAgaWRlbnRpZmllcj1cIltbaXRlbS5pZGVudGlmaWVyXV1cIlxuICAgICAgICAgIGlzLXNpbmdsZS1kZXZpY2U9XCJbW19jb21wdXRlSXNTaW5nbGVMaW5lQ2hhcnQoaXRlbS5kYXRhLCBub1NpbmdsZSldXVwiXG4gICAgICAgICAgZW5kLXRpbWU9XCJbW19jb21wdXRlRW5kVGltZShlbmRUaW1lLCB1cFRvTm93LCBoaXN0b3J5RGF0YSldXVwiXG4gICAgICAgICAgbmFtZXM9XCJbW25hbWVzXV1cIlxuICAgICAgICA+PC9zdGF0ZS1oaXN0b3J5LWNoYXJ0LWxpbmU+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIGA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGhhc3M6IE9iamVjdCxcbiAgICAgIGhpc3RvcnlEYXRhOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICB9LFxuICAgICAgbmFtZXM6IE9iamVjdCxcblxuICAgICAgaXNMb2FkaW5nRGF0YTogQm9vbGVhbixcblxuICAgICAgZW5kVGltZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB9LFxuXG4gICAgICB1cFRvTm93OiBCb29sZWFuLFxuICAgICAgbm9TaW5nbGU6IEJvb2xlYW4sXG4gICAgfTtcbiAgfVxuXG4gIF9jb21wdXRlSXNTaW5nbGVMaW5lQ2hhcnQoZGF0YSwgbm9TaW5nbGUpIHtcbiAgICByZXR1cm4gIW5vU2luZ2xlICYmIGRhdGEgJiYgZGF0YS5sZW5ndGggPT09IDE7XG4gIH1cblxuICBfY29tcHV0ZUlzRW1wdHkoaXNMb2FkaW5nRGF0YSwgaGlzdG9yeURhdGEpIHtcbiAgICBjb25zdCBoaXN0b3J5RGF0YUVtcHR5ID1cbiAgICAgICFoaXN0b3J5RGF0YSB8fFxuICAgICAgIWhpc3RvcnlEYXRhLnRpbWVsaW5lIHx8XG4gICAgICAhaGlzdG9yeURhdGEubGluZSB8fFxuICAgICAgKGhpc3RvcnlEYXRhLnRpbWVsaW5lLmxlbmd0aCA9PT0gMCAmJiBoaXN0b3J5RGF0YS5saW5lLmxlbmd0aCA9PT0gMCk7XG4gICAgcmV0dXJuICFpc0xvYWRpbmdEYXRhICYmIGhpc3RvcnlEYXRhRW1wdHk7XG4gIH1cblxuICBfY29tcHV0ZUlzTG9hZGluZyhpc0xvYWRpbmcpIHtcbiAgICByZXR1cm4gaXNMb2FkaW5nICYmICF0aGlzLmhpc3RvcnlEYXRhO1xuICB9XG5cbiAgX2NvbXB1dGVFbmRUaW1lKGVuZFRpbWUsIHVwVG9Ob3cpIHtcbiAgICAvLyBXZSBkb24ndCByZWFsbHkgY2FyZSBhYm91dCB0aGUgdmFsdWUgb2YgaGlzdG9yeURhdGEsIGJ1dCBpZiBpdCBjaGFuZ2Ugd2Ugd2FudCB0byB1cGRhdGVcbiAgICAvLyBlbmRUaW1lLlxuICAgIHJldHVybiB1cFRvTm93ID8gbmV3IERhdGUoKSA6IGVuZFRpbWU7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcInN0YXRlLWhpc3RvcnktY2hhcnRzXCIsIFN0YXRlSGlzdG9yeUNoYXJ0cyk7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aFByb3ZpZGVyIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpZDogc3RyaW5nO1xuICB0eXBlOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ3JlZGVudGlhbCB7XG4gIHR5cGU6IHN0cmluZztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduZWRQYXRoIHtcbiAgcGF0aDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgaGFzc1VybCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vJHtsb2NhdGlvbi5ob3N0fWA7XG5cbmV4cG9ydCBjb25zdCBnZXRTaWduZWRQYXRoID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBwYXRoOiBzdHJpbmdcbik6IFByb21pc2U8U2lnbmVkUGF0aD4gPT4gaGFzcy5jYWxsV1MoeyB0eXBlOiBcImF1dGgvc2lnbl9wYXRoXCIsIHBhdGggfSk7XG5cbmV4cG9ydCBjb25zdCBmZXRjaEF1dGhQcm92aWRlcnMgPSAoKSA9PlxuICBmZXRjaChcIi9hdXRoL3Byb3ZpZGVyc1wiLCB7XG4gICAgY3JlZGVudGlhbHM6IFwic2FtZS1vcmlnaW5cIixcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBjb21wdXRlSGlzdG9yeSxcbiAgZmV0Y2hSZWNlbnQsXG4gIEhpc3RvcnlSZXN1bHQsXG4gIFRpbWVsaW5lRW50aXR5LFxuICBMaW5lQ2hhcnRVbml0LFxufSBmcm9tIFwiLi9oaXN0b3J5XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBIYXNzRW50aXR5IH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuaW50ZXJmYWNlIENhY2hlQ29uZmlnIHtcbiAgcmVmcmVzaDogbnVtYmVyO1xuICBjYWNoZUtleTogc3RyaW5nO1xuICBob3Vyc1RvU2hvdzogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2FjaGVkUmVzdWx0cyB7XG4gIHByb206IFByb21pc2U8SGlzdG9yeVJlc3VsdD47XG4gIHN0YXJ0VGltZTogRGF0ZTtcbiAgZW5kVGltZTogRGF0ZTtcbiAgbGFuZ3VhZ2U6IHN0cmluZztcbiAgZGF0YTogSGlzdG9yeVJlc3VsdDtcbn1cblxuLy8gVGhpcyBpcyBhIGRpZmZlcmVudCBpbnRlcmZhY2UsIGEgZGlmZmVyZW50IGNhY2hlIDooXG5pbnRlcmZhY2UgUmVjZW50Q2FjaGVSZXN1bHRzIHtcbiAgY3JlYXRlZDogbnVtYmVyO1xuICBsYW5ndWFnZTogc3RyaW5nO1xuICBkYXRhOiBQcm9taXNlPEhpc3RvcnlSZXN1bHQ+O1xufVxuXG5jb25zdCBSRUNFTlRfVEhSRVNIT0xEID0gNjAwMDA7IC8vIDEgbWludXRlXG5jb25zdCBSRUNFTlRfQ0FDSEU6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBSZWNlbnRDYWNoZVJlc3VsdHMgfSA9IHt9O1xuY29uc3Qgc3RhdGVIaXN0b3J5Q2FjaGU6IHsgW2NhY2hlS2V5OiBzdHJpbmddOiBDYWNoZWRSZXN1bHRzIH0gPSB7fTtcblxuLy8gQ2FjaGVkIHR5cGUgMSB1bmN0aW9uLiBXaXRob3V0IGNhY2hlIGNvbmZpZy5cbmV4cG9ydCBjb25zdCBnZXRSZWNlbnQgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZSxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IGNhY2hlS2V5ID0gZW50aXR5SWQ7XG4gIGNvbnN0IGNhY2hlID0gUkVDRU5UX0NBQ0hFW2NhY2hlS2V5XTtcblxuICBpZiAoXG4gICAgY2FjaGUgJiZcbiAgICBEYXRlLm5vdygpIC0gY2FjaGUuY3JlYXRlZCA8IFJFQ0VOVF9USFJFU0hPTEQgJiZcbiAgICBjYWNoZS5sYW5ndWFnZSA9PT0gbGFuZ3VhZ2VcbiAgKSB7XG4gICAgcmV0dXJuIGNhY2hlLmRhdGE7XG4gIH1cblxuICBjb25zdCBwcm9tID0gZmV0Y2hSZWNlbnQoaGFzcywgZW50aXR5SWQsIHN0YXJ0VGltZSwgZW5kVGltZSkudGhlbihcbiAgICAoc3RhdGVIaXN0b3J5KSA9PiBjb21wdXRlSGlzdG9yeShoYXNzLCBzdGF0ZUhpc3RvcnksIGxvY2FsaXplLCBsYW5ndWFnZSksXG4gICAgKGVycikgPT4ge1xuICAgICAgZGVsZXRlIFJFQ0VOVF9DQUNIRVtlbnRpdHlJZF07XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICApO1xuXG4gIFJFQ0VOVF9DQUNIRVtjYWNoZUtleV0gPSB7XG4gICAgY3JlYXRlZDogRGF0ZS5ub3coKSxcbiAgICBsYW5ndWFnZSxcbiAgICBkYXRhOiBwcm9tLFxuICB9O1xuICByZXR1cm4gcHJvbTtcbn07XG5cbi8vIENhY2hlIHR5cGUgMiBmdW5jdGlvbmFsaXR5XG5mdW5jdGlvbiBnZXRFbXB0eUNhY2hlKFxuICBsYW5ndWFnZTogc3RyaW5nLFxuICBzdGFydFRpbWU6IERhdGUsXG4gIGVuZFRpbWU6IERhdGVcbik6IENhY2hlZFJlc3VsdHMge1xuICByZXR1cm4ge1xuICAgIHByb206IFByb21pc2UucmVzb2x2ZSh7IGxpbmU6IFtdLCB0aW1lbGluZTogW10gfSksXG4gICAgbGFuZ3VhZ2UsXG4gICAgc3RhcnRUaW1lLFxuICAgIGVuZFRpbWUsXG4gICAgZGF0YTogeyBsaW5lOiBbXSwgdGltZWxpbmU6IFtdIH0sXG4gIH07XG59XG5cbmV4cG9ydCBjb25zdCBnZXRSZWNlbnRXaXRoQ2FjaGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIGNhY2hlQ29uZmlnOiBDYWNoZUNvbmZpZyxcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZ1xuKSA9PiB7XG4gIGNvbnN0IGNhY2hlS2V5ID0gY2FjaGVDb25maWcuY2FjaGVLZXk7XG4gIGNvbnN0IGVuZFRpbWUgPSBuZXcgRGF0ZSgpO1xuICBjb25zdCBzdGFydFRpbWUgPSBuZXcgRGF0ZShlbmRUaW1lKTtcbiAgc3RhcnRUaW1lLnNldEhvdXJzKHN0YXJ0VGltZS5nZXRIb3VycygpIC0gY2FjaGVDb25maWcuaG91cnNUb1Nob3cpO1xuICBsZXQgdG9GZXRjaFN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgbGV0IGFwcGVuZGluZ1RvQ2FjaGUgPSBmYWxzZTtcblxuICBsZXQgY2FjaGUgPSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV07XG4gIGlmIChcbiAgICBjYWNoZSAmJlxuICAgIHRvRmV0Y2hTdGFydFRpbWUgPj0gY2FjaGUuc3RhcnRUaW1lICYmXG4gICAgdG9GZXRjaFN0YXJ0VGltZSA8PSBjYWNoZS5lbmRUaW1lICYmXG4gICAgY2FjaGUubGFuZ3VhZ2UgPT09IGxhbmd1YWdlXG4gICkge1xuICAgIHRvRmV0Y2hTdGFydFRpbWUgPSBjYWNoZS5lbmRUaW1lO1xuICAgIGFwcGVuZGluZ1RvQ2FjaGUgPSB0cnVlO1xuICAgIC8vIFRoaXMgcHJldHR5IG11Y2ggbmV2ZXIgaGFwcGVucyBhcyBlbmRUaW1lIGlzIHVzdWFsbHkgc2V0IHRvIG5vd1xuICAgIGlmIChlbmRUaW1lIDw9IGNhY2hlLmVuZFRpbWUpIHtcbiAgICAgIHJldHVybiBjYWNoZS5wcm9tO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBjYWNoZSA9IHN0YXRlSGlzdG9yeUNhY2hlW2NhY2hlS2V5XSA9IGdldEVtcHR5Q2FjaGUoXG4gICAgICBsYW5ndWFnZSxcbiAgICAgIHN0YXJ0VGltZSxcbiAgICAgIGVuZFRpbWVcbiAgICApO1xuICB9XG5cbiAgY29uc3QgY3VyQ2FjaGVQcm9tID0gY2FjaGUucHJvbTtcblxuICBjb25zdCBnZW5Qcm9tID0gYXN5bmMgKCkgPT4ge1xuICAgIGxldCBmZXRjaGVkSGlzdG9yeTogSGFzc0VudGl0eVtdW107XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzdWx0cyA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgY3VyQ2FjaGVQcm9tLFxuICAgICAgICBmZXRjaFJlY2VudChcbiAgICAgICAgICBoYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIHRvRmV0Y2hTdGFydFRpbWUsXG4gICAgICAgICAgZW5kVGltZSxcbiAgICAgICAgICBhcHBlbmRpbmdUb0NhY2hlXG4gICAgICAgICksXG4gICAgICBdKTtcbiAgICAgIGZldGNoZWRIaXN0b3J5ID0gcmVzdWx0c1sxXTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIGRlbGV0ZSBzdGF0ZUhpc3RvcnlDYWNoZVtjYWNoZUtleV07XG4gICAgICB0aHJvdyBlcnI7XG4gICAgfVxuICAgIGNvbnN0IHN0YXRlSGlzdG9yeSA9IGNvbXB1dGVIaXN0b3J5KFxuICAgICAgaGFzcyxcbiAgICAgIGZldGNoZWRIaXN0b3J5LFxuICAgICAgbG9jYWxpemUsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gICAgaWYgKGFwcGVuZGluZ1RvQ2FjaGUpIHtcbiAgICAgIG1lcmdlTGluZShzdGF0ZUhpc3RvcnkubGluZSwgY2FjaGUuZGF0YS5saW5lKTtcbiAgICAgIG1lcmdlVGltZWxpbmUoc3RhdGVIaXN0b3J5LnRpbWVsaW5lLCBjYWNoZS5kYXRhLnRpbWVsaW5lKTtcbiAgICAgIHBydW5lU3RhcnRUaW1lKHN0YXJ0VGltZSwgY2FjaGUuZGF0YSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlLmRhdGEgPSBzdGF0ZUhpc3Rvcnk7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZS5kYXRhO1xuICB9O1xuXG4gIGNhY2hlLnByb20gPSBnZW5Qcm9tKCk7XG4gIGNhY2hlLnN0YXJ0VGltZSA9IHN0YXJ0VGltZTtcbiAgY2FjaGUuZW5kVGltZSA9IGVuZFRpbWU7XG4gIHJldHVybiBjYWNoZS5wcm9tO1xufTtcblxuY29uc3QgbWVyZ2VMaW5lID0gKFxuICBoaXN0b3J5TGluZXM6IExpbmVDaGFydFVuaXRbXSxcbiAgY2FjaGVMaW5lczogTGluZUNoYXJ0VW5pdFtdXG4pID0+IHtcbiAgaGlzdG9yeUxpbmVzLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBjb25zdCB1bml0ID0gbGluZS51bml0O1xuICAgIGNvbnN0IG9sZExpbmUgPSBjYWNoZUxpbmVzLmZpbmQoKGNhY2hlTGluZSkgPT4gY2FjaGVMaW5lLnVuaXQgPT09IHVuaXQpO1xuICAgIGlmIChvbGRMaW5lKSB7XG4gICAgICBsaW5lLmRhdGEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICAgIGNvbnN0IG9sZEVudGl0eSA9IG9sZExpbmUuZGF0YS5maW5kKFxuICAgICAgICAgIChjYWNoZUVudGl0eSkgPT4gZW50aXR5LmVudGl0eV9pZCA9PT0gY2FjaGVFbnRpdHkuZW50aXR5X2lkXG4gICAgICAgICk7XG4gICAgICAgIGlmIChvbGRFbnRpdHkpIHtcbiAgICAgICAgICBvbGRFbnRpdHkuc3RhdGVzID0gb2xkRW50aXR5LnN0YXRlcy5jb25jYXQoZW50aXR5LnN0YXRlcyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2xkTGluZS5kYXRhLnB1c2goZW50aXR5KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNhY2hlTGluZXMucHVzaChsaW5lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgbWVyZ2VUaW1lbGluZSA9IChcbiAgaGlzdG9yeVRpbWVsaW5lczogVGltZWxpbmVFbnRpdHlbXSxcbiAgY2FjaGVUaW1lbGluZXM6IFRpbWVsaW5lRW50aXR5W11cbikgPT4ge1xuICBoaXN0b3J5VGltZWxpbmVzLmZvckVhY2goKHRpbWVsaW5lKSA9PiB7XG4gICAgY29uc3Qgb2xkVGltZWxpbmUgPSBjYWNoZVRpbWVsaW5lcy5maW5kKFxuICAgICAgKGNhY2hlVGltZWxpbmUpID0+IGNhY2hlVGltZWxpbmUuZW50aXR5X2lkID09PSB0aW1lbGluZS5lbnRpdHlfaWRcbiAgICApO1xuICAgIGlmIChvbGRUaW1lbGluZSkge1xuICAgICAgb2xkVGltZWxpbmUuZGF0YSA9IG9sZFRpbWVsaW5lLmRhdGEuY29uY2F0KHRpbWVsaW5lLmRhdGEpO1xuICAgIH0gZWxzZSB7XG4gICAgICBjYWNoZVRpbWVsaW5lcy5wdXNoKHRpbWVsaW5lKTtcbiAgICB9XG4gIH0pO1xufTtcblxuY29uc3QgcHJ1bmVBcnJheSA9IChvcmlnaW5hbFN0YXJ0VGltZTogRGF0ZSwgYXJyKSA9PiB7XG4gIGlmIChhcnIubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICBjb25zdCBjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPSBhcnIuZmluZEluZGV4KFxuICAgIChzdGF0ZSkgPT4gbmV3IERhdGUoc3RhdGUubGFzdF9jaGFuZ2VkKSA+IG9yaWdpbmFsU3RhcnRUaW1lXG4gICk7XG4gIGlmIChjaGFuZ2VkQWZ0ZXJTdGFydFRpbWUgPT09IDApIHtcbiAgICAvLyBJZiBhbGwgY2hhbmdlcyBoYXBwZW5lZCBhZnRlciBvcmlnaW5hbFN0YXJ0VGltZSB0aGVuIHdlIGFyZSBkb25lLlxuICAgIHJldHVybiBhcnI7XG4gIH1cblxuICAvLyBJZiBhbGwgY2hhbmdlcyBoYXBwZW5lZCBhdCBvciBiZWZvcmUgb3JpZ2luYWxTdGFydFRpbWUuIFVzZSBsYXN0IGluZGV4LlxuICBjb25zdCB1cGRhdGVJbmRleCA9XG4gICAgY2hhbmdlZEFmdGVyU3RhcnRUaW1lID09PSAtMSA/IGFyci5sZW5ndGggLSAxIDogY2hhbmdlZEFmdGVyU3RhcnRUaW1lIC0gMTtcbiAgYXJyW3VwZGF0ZUluZGV4XS5sYXN0X2NoYW5nZWQgPSBvcmlnaW5hbFN0YXJ0VGltZTtcbiAgcmV0dXJuIGFyci5zbGljZSh1cGRhdGVJbmRleCk7XG59O1xuXG5jb25zdCBwcnVuZVN0YXJ0VGltZSA9IChvcmlnaW5hbFN0YXJ0VGltZTogRGF0ZSwgY2FjaGVEYXRhOiBIaXN0b3J5UmVzdWx0KSA9PiB7XG4gIGNhY2hlRGF0YS5saW5lLmZvckVhY2goKGxpbmUpID0+IHtcbiAgICBsaW5lLmRhdGEuZm9yRWFjaCgoZW50aXR5KSA9PiB7XG4gICAgICBlbnRpdHkuc3RhdGVzID0gcHJ1bmVBcnJheShvcmlnaW5hbFN0YXJ0VGltZSwgZW50aXR5LnN0YXRlcyk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGNhY2hlRGF0YS50aW1lbGluZS5mb3JFYWNoKCh0aW1lbGluZSkgPT4ge1xuICAgIHRpbWVsaW5lLmRhdGEgPSBwcnVuZUFycmF5KG9yaWdpbmFsU3RhcnRUaW1lLCB0aW1lbGluZS5kYXRhKTtcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgQ2FtZXJhRW50aXR5IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyB0aW1lQ2FjaGVQcm9taXNlRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdXRpbC90aW1lLWNhY2hlLWZ1bmN0aW9uLXByb21pc2VcIjtcbmltcG9ydCB7IGdldFNpZ25lZFBhdGggfSBmcm9tIFwiLi9hdXRoXCI7XG5cbmV4cG9ydCBjb25zdCBDQU1FUkFfU1VQUE9SVF9PTl9PRkYgPSAxO1xuZXhwb3J0IGNvbnN0IENBTUVSQV9TVVBQT1JUX1NUUkVBTSA9IDI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ2FtZXJhUHJlZmVyZW5jZXMge1xuICBwcmVsb2FkX3N0cmVhbTogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYW1lcmFUaHVtYm5haWwge1xuICBjb250ZW50X3R5cGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFN0cmVhbSB7XG4gIHVybDogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3QgY29tcHV0ZU1KUEVHU3RyZWFtVXJsID0gKGVudGl0eTogQ2FtZXJhRW50aXR5KSA9PlxuICBgL2FwaS9jYW1lcmFfcHJveHlfc3RyZWFtLyR7ZW50aXR5LmVudGl0eV9pZH0/dG9rZW49JHtcbiAgICBlbnRpdHkuYXR0cmlidXRlcy5hY2Nlc3NfdG9rZW5cbiAgfWA7XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbFVybFdpdGhDYWNoZSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZ1xuKSA9PlxuICB0aW1lQ2FjaGVQcm9taXNlRnVuYyhcbiAgICBcIl9jYW1lcmFUbWJVcmxcIixcbiAgICA5MDAwLFxuICAgIGZldGNoVGh1bWJuYWlsVXJsLFxuICAgIGhhc3MsXG4gICAgZW50aXR5SWRcbiAgKTtcblxuZXhwb3J0IGNvbnN0IGZldGNoVGh1bWJuYWlsVXJsID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pID0+IHtcbiAgY29uc3QgcGF0aCA9IGF3YWl0IGdldFNpZ25lZFBhdGgoaGFzcywgYC9hcGkvY2FtZXJhX3Byb3h5LyR7ZW50aXR5SWR9YCk7XG4gIHJldHVybiBoYXNzLmhhc3NVcmwocGF0aC5wYXRoKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaFRodW1ibmFpbCA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PiB7XG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tY29uc29sZVxuICBjb25zb2xlLndhcm4oXCJUaGlzIG1ldGhvZCBoYXMgYmVlbiBkZXByZWNhdGVkLlwiKTtcbiAgcmV0dXJuIGhhc3MuY2FsbFdTPENhbWVyYVRodW1ibmFpbD4oe1xuICAgIHR5cGU6IFwiY2FtZXJhX3RodW1ibmFpbFwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IGZldGNoU3RyZWFtVXJsID0gYXN5bmMgKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nLFxuICBmb3JtYXQ/OiBcImhsc1wiXG4pID0+IHtcbiAgY29uc3QgZGF0YSA9IHtcbiAgICB0eXBlOiBcImNhbWVyYS9zdHJlYW1cIixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eUlkLFxuICB9O1xuICBpZiAoZm9ybWF0KSB7XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIGRhdGEuZm9ybWF0ID0gZm9ybWF0O1xuICB9XG4gIGNvbnN0IHN0cmVhbSA9IGF3YWl0IGhhc3MuY2FsbFdTPFN0cmVhbT4oZGF0YSk7XG4gIHN0cmVhbS51cmwgPSBoYXNzLmhhc3NVcmwoc3RyZWFtLnVybCk7XG4gIHJldHVybiBzdHJlYW07XG59O1xuXG5leHBvcnQgY29uc3QgZmV0Y2hDYW1lcmFQcmVmcyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBlbnRpdHlJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxXUzxDYW1lcmFQcmVmZXJlbmNlcz4oe1xuICAgIHR5cGU6IFwiY2FtZXJhL2dldF9wcmVmc1wiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gIH0pO1xuXG5leHBvcnQgY29uc3QgdXBkYXRlQ2FtZXJhUHJlZnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmcsXG4gIHByZWZzOiB7XG4gICAgcHJlbG9hZF9zdHJlYW0/OiBib29sZWFuO1xuICB9XG4pID0+XG4gIGhhc3MuY2FsbFdTPENhbWVyYVByZWZlcmVuY2VzPih7XG4gICAgdHlwZTogXCJjYW1lcmEvdXBkYXRlX3ByZWZzXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgICAuLi5wcmVmcyxcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IHR5cGUgSHZhY01vZGUgPVxuICB8IFwib2ZmXCJcbiAgfCBcImhlYXRcIlxuICB8IFwiY29vbFwiXG4gIHwgXCJoZWF0X2Nvb2xcIlxuICB8IFwiYXV0b1wiXG4gIHwgXCJkcnlcIlxuICB8IFwiZmFuX29ubHlcIjtcblxuZXhwb3J0IGNvbnN0IENMSU1BVEVfUFJFU0VUX05PTkUgPSBcIm5vbmVcIjtcblxuZXhwb3J0IHR5cGUgSHZhY0FjdGlvbiA9IFwib2ZmXCIgfCBcImhlYXRpbmdcIiB8IFwiY29vbGluZ1wiIHwgXCJkcnlpbmdcIiB8IFwiaWRsZVwiO1xuXG5leHBvcnQgdHlwZSBDbGltYXRlRW50aXR5ID0gSGFzc0VudGl0eUJhc2UgJiB7XG4gIGF0dHJpYnV0ZXM6IEhhc3NFbnRpdHlBdHRyaWJ1dGVCYXNlICYge1xuICAgIGh2YWNfbW9kZTogSHZhY01vZGU7XG4gICAgaHZhY19tb2RlczogSHZhY01vZGVbXTtcbiAgICBodmFjX2FjdGlvbj86IEh2YWNBY3Rpb247XG4gICAgY3VycmVudF90ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIG1pbl90ZW1wOiBudW1iZXI7XG4gICAgbWF4X3RlbXA6IG51bWJlcjtcbiAgICB0ZW1wZXJhdHVyZTogbnVtYmVyO1xuICAgIHRhcmdldF90ZW1wX3N0ZXA/OiBudW1iZXI7XG4gICAgdGFyZ2V0X3RlbXBfaGlnaD86IG51bWJlcjtcbiAgICB0YXJnZXRfdGVtcF9sb3c/OiBudW1iZXI7XG4gICAgaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgY3VycmVudF9odW1pZGl0eT86IG51bWJlcjtcbiAgICB0YXJnZXRfaHVtaWRpdHlfbG93PzogbnVtYmVyO1xuICAgIHRhcmdldF9odW1pZGl0eV9oaWdoPzogbnVtYmVyO1xuICAgIG1pbl9odW1pZGl0eT86IG51bWJlcjtcbiAgICBtYXhfaHVtaWRpdHk/OiBudW1iZXI7XG4gICAgZmFuX21vZGU/OiBzdHJpbmc7XG4gICAgZmFuX21vZGVzPzogc3RyaW5nW107XG4gICAgcHJlc2V0X21vZGU/OiBzdHJpbmc7XG4gICAgcHJlc2V0X21vZGVzPzogc3RyaW5nW107XG4gICAgc3dpbmdfbW9kZT86IHN0cmluZztcbiAgICBzd2luZ19tb2Rlcz86IHN0cmluZ1tdO1xuICAgIGF1eF9oZWF0PzogXCJvblwiIHwgXCJvZmZcIjtcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFID0gMTtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX1RFTVBFUkFUVVJFX1JBTkdFID0gMjtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfVEFSR0VUX0hVTUlESVRZID0gNDtcbmV4cG9ydCBjb25zdCBDTElNQVRFX1NVUFBPUlRfRkFOX01PREUgPSA4O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9QUkVTRVRfTU9ERSA9IDE2O1xuZXhwb3J0IGNvbnN0IENMSU1BVEVfU1VQUE9SVF9TV0lOR19NT0RFID0gMzI7XG5leHBvcnQgY29uc3QgQ0xJTUFURV9TVVBQT1JUX0FVWF9IRUFUID0gNjQ7XG5cbmNvbnN0IGh2YWNNb2RlT3JkZXJpbmc6IHsgW2tleSBpbiBIdmFjTW9kZV06IG51bWJlciB9ID0ge1xuICBhdXRvOiAxLFxuICBoZWF0X2Nvb2w6IDIsXG4gIGhlYXQ6IDMsXG4gIGNvb2w6IDQsXG4gIGRyeTogNSxcbiAgZmFuX29ubHk6IDYsXG4gIG9mZjogNyxcbn07XG5cbmV4cG9ydCBjb25zdCBjb21wYXJlQ2xpbWF0ZUh2YWNNb2RlcyA9IChtb2RlMTogSHZhY01vZGUsIG1vZGUyOiBIdmFjTW9kZSkgPT5cbiAgaHZhY01vZGVPcmRlcmluZ1ttb2RlMV0gLSBodmFjTW9kZU9yZGVyaW5nW21vZGUyXTtcbiIsImltcG9ydCB7IGNyZWF0ZUNvbGxlY3Rpb24sIENvbm5lY3Rpb24gfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBjb21wdXRlU3RhdGVOYW1lIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9uYW1lXCI7XG5pbXBvcnQgeyBkZWJvdW5jZSB9IGZyb20gXCIuLi9jb21tb24vdXRpbC9kZWJvdW5jZVwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEVudGl0eVJlZ2lzdHJ5RW50cnkge1xuICBlbnRpdHlfaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBwbGF0Zm9ybTogc3RyaW5nO1xuICBjb25maWdfZW50cnlfaWQ/OiBzdHJpbmc7XG4gIGRldmljZV9pZD86IHN0cmluZztcbiAgZGlzYWJsZWRfYnk6IHN0cmluZyB8IG51bGw7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRW50aXR5UmVnaXN0cnlFbnRyeVVwZGF0ZVBhcmFtcyB7XG4gIG5hbWU/OiBzdHJpbmcgfCBudWxsO1xuICBkaXNhYmxlZF9ieT86IHN0cmluZyB8IG51bGw7XG4gIG5ld19lbnRpdHlfaWQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBjb21wdXRlRW50aXR5UmVnaXN0cnlOYW1lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRyeTogRW50aXR5UmVnaXN0cnlFbnRyeVxuKTogc3RyaW5nIHwgbnVsbCA9PiB7XG4gIGlmIChlbnRyeS5uYW1lKSB7XG4gICAgcmV0dXJuIGVudHJ5Lm5hbWU7XG4gIH1cbiAgY29uc3Qgc3RhdGUgPSBoYXNzLnN0YXRlc1tlbnRyeS5lbnRpdHlfaWRdO1xuICByZXR1cm4gc3RhdGUgPyBjb21wdXRlU3RhdGVOYW1lKHN0YXRlKSA6IG51bGw7XG59O1xuXG5leHBvcnQgY29uc3QgdXBkYXRlRW50aXR5UmVnaXN0cnlFbnRyeSA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZW50aXR5SWQ6IHN0cmluZyxcbiAgdXBkYXRlczogUGFydGlhbDxFbnRpdHlSZWdpc3RyeUVudHJ5VXBkYXRlUGFyYW1zPlxuKTogUHJvbWlzZTxFbnRpdHlSZWdpc3RyeUVudHJ5PiA9PlxuICBoYXNzLmNhbGxXUzxFbnRpdHlSZWdpc3RyeUVudHJ5Pih7XG4gICAgdHlwZTogXCJjb25maWcvZW50aXR5X3JlZ2lzdHJ5L3VwZGF0ZVwiLFxuICAgIGVudGl0eV9pZDogZW50aXR5SWQsXG4gICAgLi4udXBkYXRlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCByZW1vdmVFbnRpdHlSZWdpc3RyeUVudHJ5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHlJZDogc3RyaW5nXG4pOiBQcm9taXNlPHZvaWQ+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbmZpZy9lbnRpdHlfcmVnaXN0cnkvcmVtb3ZlXCIsXG4gICAgZW50aXR5X2lkOiBlbnRpdHlJZCxcbiAgfSk7XG5cbmNvbnN0IGZldGNoRW50aXR5UmVnaXN0cnkgPSAoY29ubikgPT5cbiAgY29ubi5zZW5kTWVzc2FnZVByb21pc2Uoe1xuICAgIHR5cGU6IFwiY29uZmlnL2VudGl0eV9yZWdpc3RyeS9saXN0XCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVFbnRpdHlSZWdpc3RyeVVwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hFbnRpdHlSZWdpc3RyeShjb25uKS50aGVuKChlbnRpdGllcykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShlbnRpdGllcywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiZW50aXR5X3JlZ2lzdHJ5X3VwZGF0ZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3Qgc3Vic2NyaWJlRW50aXR5UmVnaXN0cnkgPSAoXG4gIGNvbm46IENvbm5lY3Rpb24sXG4gIG9uQ2hhbmdlOiAoZW50aXRpZXM6IEVudGl0eVJlZ2lzdHJ5RW50cnlbXSkgPT4gdm9pZFxuKSA9PlxuICBjcmVhdGVDb2xsZWN0aW9uPEVudGl0eVJlZ2lzdHJ5RW50cnlbXT4oXG4gICAgXCJfZW50aXR5UmVnaXN0cnlcIixcbiAgICBmZXRjaEVudGl0eVJlZ2lzdHJ5LFxuICAgIHN1YnNjcmliZUVudGl0eVJlZ2lzdHJ5VXBkYXRlcyxcbiAgICBjb25uLFxuICAgIG9uQ2hhbmdlXG4gICk7XG4iLCJpbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jXCI7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tIFwiQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2VcIjtcbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50XCI7XG5cbmltcG9ydCBMb2NhbGl6ZU1peGluIGZyb20gXCIuLi9taXhpbnMvbG9jYWxpemUtbWl4aW5cIjtcblxuaW1wb3J0IHsgY29tcHV0ZUhpc3RvcnksIGZldGNoRGF0ZSB9IGZyb20gXCIuL2hpc3RvcnlcIjtcbmltcG9ydCB7IGdldFJlY2VudCwgZ2V0UmVjZW50V2l0aENhY2hlIH0gZnJvbSBcIi4vY2FjaGVkLWhpc3RvcnlcIjtcblxuLypcbiAqIEBhcHBsaWVzTWl4aW4gTG9jYWxpemVNaXhpblxuICovXG5jbGFzcyBIYVN0YXRlSGlzdG9yeURhdGEgZXh0ZW5kcyBMb2NhbGl6ZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaGFzczoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG9ic2VydmVyOiBcImhhc3NDaGFuZ2VkXCIsXG4gICAgICB9LFxuXG4gICAgICBmaWx0ZXJUeXBlOiBTdHJpbmcsXG5cbiAgICAgIGNhY2hlQ29uZmlnOiBPYmplY3QsXG5cbiAgICAgIHN0YXJ0VGltZTogRGF0ZSxcbiAgICAgIGVuZFRpbWU6IERhdGUsXG5cbiAgICAgIGVudGl0eUlkOiBTdHJpbmcsXG5cbiAgICAgIGlzTG9hZGluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogdHJ1ZSxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG5cbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogbnVsbCxcbiAgICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICBcImZpbHRlckNoYW5nZWREZWJvdW5jZXIoZmlsdGVyVHlwZSwgZW50aXR5SWQsIHN0YXJ0VGltZSwgZW5kVGltZSwgY2FjaGVDb25maWcsIGxvY2FsaXplKVwiLFxuICAgIF07XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuZmlsdGVyQ2hhbmdlZERlYm91bmNlcihcbiAgICAgIHRoaXMuZmlsdGVyVHlwZSxcbiAgICAgIHRoaXMuZW50aXR5SWQsXG4gICAgICB0aGlzLnN0YXJ0VGltZSxcbiAgICAgIHRoaXMuZW5kVGltZSxcbiAgICAgIHRoaXMuY2FjaGVDb25maWcsXG4gICAgICB0aGlzLmxvY2FsaXplXG4gICAgKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIGlmICh0aGlzLl9yZWZyZXNoVGltZW91dElkKSB7XG4gICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbCh0aGlzLl9yZWZyZXNoVGltZW91dElkKTtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSBudWxsO1xuICAgIH1cbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICB9XG5cbiAgaGFzc0NoYW5nZWQobmV3SGFzcywgb2xkSGFzcykge1xuICAgIGlmICghb2xkSGFzcyAmJiAhdGhpcy5fbWFkZUZpcnN0Q2FsbCkge1xuICAgICAgdGhpcy5maWx0ZXJDaGFuZ2VkRGVib3VuY2VyKFxuICAgICAgICB0aGlzLmZpbHRlclR5cGUsXG4gICAgICAgIHRoaXMuZW50aXR5SWQsXG4gICAgICAgIHRoaXMuc3RhcnRUaW1lLFxuICAgICAgICB0aGlzLmVuZFRpbWUsXG4gICAgICAgIHRoaXMuY2FjaGVDb25maWcsXG4gICAgICAgIHRoaXMubG9jYWxpemVcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgZmlsdGVyQ2hhbmdlZERlYm91bmNlciguLi5hcmdzKSB7XG4gICAgdGhpcy5fZGVib3VuY2VGaWx0ZXJDaGFuZ2VkID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgdGhpcy5fZGVib3VuY2VGaWx0ZXJDaGFuZ2VkLFxuICAgICAgdGltZU91dC5hZnRlcigwKSxcbiAgICAgICgpID0+IHtcbiAgICAgICAgdGhpcy5maWx0ZXJDaGFuZ2VkKC4uLmFyZ3MpO1xuICAgICAgfVxuICAgICk7XG4gIH1cblxuICBmaWx0ZXJDaGFuZ2VkKFxuICAgIGZpbHRlclR5cGUsXG4gICAgZW50aXR5SWQsXG4gICAgc3RhcnRUaW1lLFxuICAgIGVuZFRpbWUsXG4gICAgY2FjaGVDb25maWcsXG4gICAgbG9jYWxpemVcbiAgKSB7XG4gICAgaWYgKCF0aGlzLmhhc3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhY2hlQ29uZmlnICYmICFjYWNoZUNvbmZpZy5jYWNoZUtleSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWxvY2FsaXplKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hZGVGaXJzdENhbGwgPSB0cnVlO1xuICAgIGNvbnN0IGxhbmd1YWdlID0gdGhpcy5oYXNzLmxhbmd1YWdlO1xuICAgIGxldCBkYXRhO1xuXG4gICAgaWYgKGZpbHRlclR5cGUgPT09IFwiZGF0ZVwiKSB7XG4gICAgICBpZiAoIXN0YXJ0VGltZSB8fCAhZW5kVGltZSkgcmV0dXJuO1xuXG4gICAgICBkYXRhID0gZmV0Y2hEYXRlKHRoaXMuaGFzcywgc3RhcnRUaW1lLCBlbmRUaW1lKS50aGVuKChkYXRlSGlzdG9yeSkgPT5cbiAgICAgICAgY29tcHV0ZUhpc3RvcnkodGhpcy5oYXNzLCBkYXRlSGlzdG9yeSwgbG9jYWxpemUsIGxhbmd1YWdlKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKGZpbHRlclR5cGUgPT09IFwicmVjZW50LWVudGl0eVwiKSB7XG4gICAgICBpZiAoIWVudGl0eUlkKSByZXR1cm47XG4gICAgICBpZiAoY2FjaGVDb25maWcpIHtcbiAgICAgICAgZGF0YSA9IHRoaXMuZ2V0UmVjZW50V2l0aENhY2hlUmVmcmVzaChcbiAgICAgICAgICBlbnRpdHlJZCxcbiAgICAgICAgICBjYWNoZUNvbmZpZyxcbiAgICAgICAgICBsb2NhbGl6ZSxcbiAgICAgICAgICBsYW5ndWFnZVxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZGF0YSA9IGdldFJlY2VudChcbiAgICAgICAgICB0aGlzLmhhc3MsXG4gICAgICAgICAgZW50aXR5SWQsXG4gICAgICAgICAgc3RhcnRUaW1lLFxuICAgICAgICAgIGVuZFRpbWUsXG4gICAgICAgICAgbG9jYWxpemUsXG4gICAgICAgICAgbGFuZ3VhZ2VcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9zZXRJc0xvYWRpbmcodHJ1ZSk7XG5cbiAgICBkYXRhLnRoZW4oKHN0YXRlSGlzdG9yeSkgPT4ge1xuICAgICAgdGhpcy5fc2V0RGF0YShzdGF0ZUhpc3RvcnkpO1xuICAgICAgdGhpcy5fc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldFJlY2VudFdpdGhDYWNoZVJlZnJlc2goZW50aXR5SWQsIGNhY2hlQ29uZmlnLCBsb2NhbGl6ZSwgbGFuZ3VhZ2UpIHtcbiAgICBpZiAodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCkge1xuICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwodGhpcy5fcmVmcmVzaFRpbWVvdXRJZCk7XG4gICAgICB0aGlzLl9yZWZyZXNoVGltZW91dElkID0gbnVsbDtcbiAgICB9XG4gICAgaWYgKGNhY2hlQ29uZmlnLnJlZnJlc2gpIHtcbiAgICAgIHRoaXMuX3JlZnJlc2hUaW1lb3V0SWQgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICBnZXRSZWNlbnRXaXRoQ2FjaGUoXG4gICAgICAgICAgdGhpcy5oYXNzLFxuICAgICAgICAgIGVudGl0eUlkLFxuICAgICAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgICAgIGxvY2FsaXplLFxuICAgICAgICAgIGxhbmd1YWdlXG4gICAgICAgICkudGhlbigoc3RhdGVIaXN0b3J5KSA9PiB7XG4gICAgICAgICAgdGhpcy5fc2V0RGF0YSh7IC4uLnN0YXRlSGlzdG9yeSB9KTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBjYWNoZUNvbmZpZy5yZWZyZXNoICogMTAwMCk7XG4gICAgfVxuICAgIHJldHVybiBnZXRSZWNlbnRXaXRoQ2FjaGUoXG4gICAgICB0aGlzLmhhc3MsXG4gICAgICBlbnRpdHlJZCxcbiAgICAgIGNhY2hlQ29uZmlnLFxuICAgICAgbG9jYWxpemUsXG4gICAgICBsYW5ndWFnZVxuICAgICk7XG4gIH1cbn1cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImhhLXN0YXRlLWhpc3RvcnktZGF0YVwiLCBIYVN0YXRlSGlzdG9yeURhdGEpO1xuIiwiaW1wb3J0IHsgY29tcHV0ZVN0YXRlTmFtZSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfbmFtZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRG9tYWluIH0gZnJvbSBcIi4uL2NvbW1vbi9lbnRpdHkvY29tcHV0ZV9zdGF0ZV9kb21haW5cIjtcbmltcG9ydCB7IEhhc3NFbnRpdHkgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQgeyBMb2NhbGl6ZUZ1bmMgfSBmcm9tIFwiLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHsgY29tcHV0ZVN0YXRlRGlzcGxheSB9IGZyb20gXCIuLi9jb21tb24vZW50aXR5L2NvbXB1dGVfc3RhdGVfZGlzcGxheVwiO1xuXG5jb25zdCBET01BSU5TX1VTRV9MQVNUX1VQREFURUQgPSBbXCJjbGltYXRlXCIsIFwid2F0ZXJfaGVhdGVyXCJdO1xuY29uc3QgTElORV9BVFRSSUJVVEVTX1RPX0tFRVAgPSBbXG4gIFwidGVtcGVyYXR1cmVcIixcbiAgXCJjdXJyZW50X3RlbXBlcmF0dXJlXCIsXG4gIFwidGFyZ2V0X3RlbXBfbG93XCIsXG4gIFwidGFyZ2V0X3RlbXBfaGlnaFwiLFxuICBcImh2YWNfYWN0aW9uXCIsXG5dO1xuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydFN0YXRlIHtcbiAgc3RhdGU6IHN0cmluZztcbiAgbGFzdF9jaGFuZ2VkOiBzdHJpbmc7XG4gIGF0dHJpYnV0ZXM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIExpbmVDaGFydEVudGl0eSB7XG4gIGRvbWFpbjogc3RyaW5nO1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBzdGF0ZXM6IExpbmVDaGFydFN0YXRlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgTGluZUNoYXJ0VW5pdCB7XG4gIHVuaXQ6IHN0cmluZztcbiAgaWRlbnRpZmllcjogc3RyaW5nO1xuICBkYXRhOiBMaW5lQ2hhcnRFbnRpdHlbXTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBUaW1lbGluZVN0YXRlIHtcbiAgc3RhdGVfbG9jYWxpemU6IHN0cmluZztcbiAgc3RhdGU6IHN0cmluZztcbiAgbGFzdF9jaGFuZ2VkOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVGltZWxpbmVFbnRpdHkge1xuICBuYW1lOiBzdHJpbmc7XG4gIGVudGl0eV9pZDogc3RyaW5nO1xuICBkYXRhOiBUaW1lbGluZVN0YXRlW107XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGlzdG9yeVJlc3VsdCB7XG4gIGxpbmU6IExpbmVDaGFydFVuaXRbXTtcbiAgdGltZWxpbmU6IFRpbWVsaW5lRW50aXR5W107XG59XG5cbmV4cG9ydCBjb25zdCBmZXRjaFJlY2VudCA9IChcbiAgaGFzcyxcbiAgZW50aXR5SWQsXG4gIHN0YXJ0VGltZSxcbiAgZW5kVGltZSxcbiAgc2tpcEluaXRpYWxTdGF0ZSA9IGZhbHNlXG4pOiBQcm9taXNlPEhhc3NFbnRpdHlbXVtdPiA9PiB7XG4gIGxldCB1cmwgPSBcImhpc3RvcnkvcGVyaW9kXCI7XG4gIGlmIChzdGFydFRpbWUpIHtcbiAgICB1cmwgKz0gXCIvXCIgKyBzdGFydFRpbWUudG9JU09TdHJpbmcoKTtcbiAgfVxuICB1cmwgKz0gXCI/ZmlsdGVyX2VudGl0eV9pZD1cIiArIGVudGl0eUlkO1xuICBpZiAoZW5kVGltZSkge1xuICAgIHVybCArPSBcIiZlbmRfdGltZT1cIiArIGVuZFRpbWUudG9JU09TdHJpbmcoKTtcbiAgfVxuICBpZiAoc2tpcEluaXRpYWxTdGF0ZSkge1xuICAgIHVybCArPSBcIiZza2lwX2luaXRpYWxfc3RhdGVcIjtcbiAgfVxuXG4gIHJldHVybiBoYXNzLmNhbGxBcGkoXCJHRVRcIiwgdXJsKTtcbn07XG5cbmV4cG9ydCBjb25zdCBmZXRjaERhdGUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHN0YXJ0VGltZTogRGF0ZSxcbiAgZW5kVGltZTogRGF0ZVxuKTogUHJvbWlzZTxIYXNzRW50aXR5W11bXT4gPT4ge1xuICByZXR1cm4gaGFzcy5jYWxsQXBpKFxuICAgIFwiR0VUXCIsXG4gICAgYGhpc3RvcnkvcGVyaW9kLyR7c3RhcnRUaW1lLnRvSVNPU3RyaW5nKCl9P2VuZF90aW1lPSR7ZW5kVGltZS50b0lTT1N0cmluZygpfWBcbiAgKTtcbn07XG5cbmNvbnN0IGVxdWFsU3RhdGUgPSAob2JqMTogTGluZUNoYXJ0U3RhdGUsIG9iajI6IExpbmVDaGFydFN0YXRlKSA9PlxuICBvYmoxLnN0YXRlID09PSBvYmoyLnN0YXRlICYmXG4gIC8vIFRoZXkgZWl0aGVyIGJvdGggaGF2ZSBhbiBhdHRyaWJ1dGVzIG9iamVjdCBvciBub3RcbiAgKCFvYmoxLmF0dHJpYnV0ZXMgfHxcbiAgICBMSU5FX0FUVFJJQlVURVNfVE9fS0VFUC5ldmVyeShcbiAgICAgIChhdHRyKSA9PiBvYmoxLmF0dHJpYnV0ZXMhW2F0dHJdID09PSBvYmoyLmF0dHJpYnV0ZXMhW2F0dHJdXG4gICAgKSk7XG5cbmNvbnN0IHByb2Nlc3NUaW1lbGluZUVudGl0eSA9IChcbiAgbG9jYWxpemU6IExvY2FsaXplRnVuYyxcbiAgbGFuZ3VhZ2U6IHN0cmluZyxcbiAgc3RhdGVzOiBIYXNzRW50aXR5W11cbik6IFRpbWVsaW5lRW50aXR5ID0+IHtcbiAgY29uc3QgZGF0YTogVGltZWxpbmVTdGF0ZVtdID0gW107XG5cbiAgZm9yIChjb25zdCBzdGF0ZSBvZiBzdGF0ZXMpIHtcbiAgICBpZiAoZGF0YS5sZW5ndGggPiAwICYmIHN0YXRlLnN0YXRlID09PSBkYXRhW2RhdGEubGVuZ3RoIC0gMV0uc3RhdGUpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGRhdGEucHVzaCh7XG4gICAgICBzdGF0ZV9sb2NhbGl6ZTogY29tcHV0ZVN0YXRlRGlzcGxheShsb2NhbGl6ZSwgc3RhdGUsIGxhbmd1YWdlKSxcbiAgICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZSxcbiAgICAgIGxhc3RfY2hhbmdlZDogc3RhdGUubGFzdF9jaGFuZ2VkLFxuICAgIH0pO1xuICB9XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBjb21wdXRlU3RhdGVOYW1lKHN0YXRlc1swXSksXG4gICAgZW50aXR5X2lkOiBzdGF0ZXNbMF0uZW50aXR5X2lkLFxuICAgIGRhdGEsXG4gIH07XG59O1xuXG5jb25zdCBwcm9jZXNzTGluZUNoYXJ0RW50aXRpZXMgPSAoXG4gIHVuaXQsXG4gIGVudGl0aWVzOiBIYXNzRW50aXR5W11bXVxuKTogTGluZUNoYXJ0VW5pdCA9PiB7XG4gIGNvbnN0IGRhdGE6IExpbmVDaGFydEVudGl0eVtdID0gW107XG5cbiAgZm9yIChjb25zdCBzdGF0ZXMgb2YgZW50aXRpZXMpIHtcbiAgICBjb25zdCBsYXN0OiBIYXNzRW50aXR5ID0gc3RhdGVzW3N0YXRlcy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBkb21haW4gPSBjb21wdXRlU3RhdGVEb21haW4obGFzdCk7XG4gICAgY29uc3QgcHJvY2Vzc2VkU3RhdGVzOiBMaW5lQ2hhcnRTdGF0ZVtdID0gW107XG5cbiAgICBmb3IgKGNvbnN0IHN0YXRlIG9mIHN0YXRlcykge1xuICAgICAgbGV0IHByb2Nlc3NlZFN0YXRlOiBMaW5lQ2hhcnRTdGF0ZTtcblxuICAgICAgaWYgKERPTUFJTlNfVVNFX0xBU1RfVVBEQVRFRC5pbmNsdWRlcyhkb21haW4pKSB7XG4gICAgICAgIHByb2Nlc3NlZFN0YXRlID0ge1xuICAgICAgICAgIHN0YXRlOiBzdGF0ZS5zdGF0ZSxcbiAgICAgICAgICBsYXN0X2NoYW5nZWQ6IHN0YXRlLmxhc3RfdXBkYXRlZCxcbiAgICAgICAgICBhdHRyaWJ1dGVzOiB7fSxcbiAgICAgICAgfTtcblxuICAgICAgICBmb3IgKGNvbnN0IGF0dHIgb2YgTElORV9BVFRSSUJVVEVTX1RPX0tFRVApIHtcbiAgICAgICAgICBpZiAoYXR0ciBpbiBzdGF0ZS5hdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICBwcm9jZXNzZWRTdGF0ZS5hdHRyaWJ1dGVzIVthdHRyXSA9IHN0YXRlLmF0dHJpYnV0ZXNbYXR0cl07XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBwcm9jZXNzZWRTdGF0ZSA9IHN0YXRlO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHByb2Nlc3NlZFN0YXRlcy5sZW5ndGggPiAxICYmXG4gICAgICAgIGVxdWFsU3RhdGUoXG4gICAgICAgICAgcHJvY2Vzc2VkU3RhdGUsXG4gICAgICAgICAgcHJvY2Vzc2VkU3RhdGVzW3Byb2Nlc3NlZFN0YXRlcy5sZW5ndGggLSAxXVxuICAgICAgICApICYmXG4gICAgICAgIGVxdWFsU3RhdGUocHJvY2Vzc2VkU3RhdGUsIHByb2Nlc3NlZFN0YXRlc1twcm9jZXNzZWRTdGF0ZXMubGVuZ3RoIC0gMl0pXG4gICAgICApIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIHByb2Nlc3NlZFN0YXRlcy5wdXNoKHByb2Nlc3NlZFN0YXRlKTtcbiAgICB9XG5cbiAgICBkYXRhLnB1c2goe1xuICAgICAgZG9tYWluLFxuICAgICAgbmFtZTogY29tcHV0ZVN0YXRlTmFtZShsYXN0KSxcbiAgICAgIGVudGl0eV9pZDogbGFzdC5lbnRpdHlfaWQsXG4gICAgICBzdGF0ZXM6IHByb2Nlc3NlZFN0YXRlcyxcbiAgICB9KTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgdW5pdCxcbiAgICBpZGVudGlmaWVyOiBlbnRpdGllcy5tYXAoKHN0YXRlcykgPT4gc3RhdGVzWzBdLmVudGl0eV9pZCkuam9pbihcIlwiKSxcbiAgICBkYXRhLFxuICB9O1xufTtcblxuZXhwb3J0IGNvbnN0IGNvbXB1dGVIaXN0b3J5ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBzdGF0ZUhpc3Rvcnk6IEhhc3NFbnRpdHlbXVtdLFxuICBsb2NhbGl6ZTogTG9jYWxpemVGdW5jLFxuICBsYW5ndWFnZTogc3RyaW5nXG4pOiBIaXN0b3J5UmVzdWx0ID0+IHtcbiAgY29uc3QgbGluZUNoYXJ0RGV2aWNlczogeyBbdW5pdDogc3RyaW5nXTogSGFzc0VudGl0eVtdW10gfSA9IHt9O1xuICBjb25zdCB0aW1lbGluZURldmljZXM6IFRpbWVsaW5lRW50aXR5W10gPSBbXTtcbiAgaWYgKCFzdGF0ZUhpc3RvcnkpIHtcbiAgICByZXR1cm4geyBsaW5lOiBbXSwgdGltZWxpbmU6IFtdIH07XG4gIH1cblxuICBzdGF0ZUhpc3RvcnkuZm9yRWFjaCgoc3RhdGVJbmZvKSA9PiB7XG4gICAgaWYgKHN0YXRlSW5mby5sZW5ndGggPT09IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBjb25zdCBzdGF0ZVdpdGhVbml0ID0gc3RhdGVJbmZvLmZpbmQoXG4gICAgICAoc3RhdGUpID0+IFwidW5pdF9vZl9tZWFzdXJlbWVudFwiIGluIHN0YXRlLmF0dHJpYnV0ZXNcbiAgICApO1xuXG4gICAgbGV0IHVuaXQ6IHN0cmluZyB8IHVuZGVmaW5lZDtcblxuICAgIGlmIChzdGF0ZVdpdGhVbml0KSB7XG4gICAgICB1bml0ID0gc3RhdGVXaXRoVW5pdC5hdHRyaWJ1dGVzLnVuaXRfb2ZfbWVhc3VyZW1lbnQ7XG4gICAgfSBlbHNlIGlmIChjb21wdXRlU3RhdGVEb21haW4oc3RhdGVJbmZvWzBdKSA9PT0gXCJjbGltYXRlXCIpIHtcbiAgICAgIHVuaXQgPSBoYXNzLmNvbmZpZy51bml0X3N5c3RlbS50ZW1wZXJhdHVyZTtcbiAgICB9IGVsc2UgaWYgKGNvbXB1dGVTdGF0ZURvbWFpbihzdGF0ZUluZm9bMF0pID09PSBcIndhdGVyX2hlYXRlclwiKSB7XG4gICAgICB1bml0ID0gaGFzcy5jb25maWcudW5pdF9zeXN0ZW0udGVtcGVyYXR1cmU7XG4gICAgfVxuXG4gICAgaWYgKCF1bml0KSB7XG4gICAgICB0aW1lbGluZURldmljZXMucHVzaChcbiAgICAgICAgcHJvY2Vzc1RpbWVsaW5lRW50aXR5KGxvY2FsaXplLCBsYW5ndWFnZSwgc3RhdGVJbmZvKVxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHVuaXQgaW4gbGluZUNoYXJ0RGV2aWNlcykge1xuICAgICAgbGluZUNoYXJ0RGV2aWNlc1t1bml0XS5wdXNoKHN0YXRlSW5mbyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxpbmVDaGFydERldmljZXNbdW5pdF0gPSBbc3RhdGVJbmZvXTtcbiAgICB9XG4gIH0pO1xuXG4gIGNvbnN0IHVuaXRTdGF0ZXMgPSBPYmplY3Qua2V5cyhsaW5lQ2hhcnREZXZpY2VzKS5tYXAoKHVuaXQpID0+XG4gICAgcHJvY2Vzc0xpbmVDaGFydEVudGl0aWVzKHVuaXQsIGxpbmVDaGFydERldmljZXNbdW5pdF0pXG4gICk7XG5cbiAgcmV0dXJuIHsgbGluZTogdW5pdFN0YXRlcywgdGltZWxpbmU6IHRpbWVsaW5lRGV2aWNlcyB9O1xufTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcblxuZXhwb3J0IGNvbnN0IHNldElucHV0U2VsZWN0T3B0aW9uID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdHk6IHN0cmluZyxcbiAgb3B0aW9uOiBzdHJpbmdcbikgPT5cbiAgaGFzcy5jYWxsU2VydmljZShcImlucHV0X3NlbGVjdFwiLCBcInNlbGVjdF9vcHRpb25cIiwge1xuICAgIG9wdGlvbixcbiAgICBlbnRpdHlfaWQ6IGVudGl0eSxcbiAgfSk7XG4iLCJpbXBvcnQge1xuICBIYXNzRW50aXR5QmFzZSxcbiAgSGFzc0VudGl0eUF0dHJpYnV0ZUJhc2UsXG59IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCwgU2VydmljZUNhbGxSZXNwb25zZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5leHBvcnQgY29uc3QgU0NFTkVfSUdOT1JFRF9ET01BSU5TID0gW1xuICBcInNlbnNvclwiLFxuICBcImJpbmFyeV9zZW5zb3JcIixcbiAgXCJkZXZpY2VfdHJhY2tlclwiLFxuICBcInBlcnNvblwiLFxuICBcInBlcnNpc3RlbnRfbm90aWZpY2F0aW9uXCIsXG4gIFwiY29uZmlndXJhdGlvblwiLFxuICBcImltYWdlX3Byb2Nlc3NpbmdcIixcbiAgXCJzdW5cIixcbiAgXCJ3ZWF0aGVyXCIsXG4gIFwiem9uZVwiLFxuXTtcblxuZXhwb3J0IGNvbnN0IFNDRU5FX1NBVkVEX0FUVFJJQlVURVMgPSB7XG4gIGxpZ2h0OiBbXG4gICAgXCJicmlnaHRuZXNzXCIsXG4gICAgXCJjb2xvcl90ZW1wXCIsXG4gICAgXCJlZmZlY3RcIixcbiAgICBcInJnYl9jb2xvclwiLFxuICAgIFwieHlfY29sb3JcIixcbiAgICBcImhzX2NvbG9yXCIsXG4gIF0sXG4gIG1lZGlhX3BsYXllcjogW1xuICAgIFwiaXNfdm9sdW1lX211dGVkXCIsXG4gICAgXCJ2b2x1bWVfbGV2ZWxcIixcbiAgICBcInNvdW5kX21vZGVcIixcbiAgICBcInNvdXJjZVwiLFxuICAgIFwibWVkaWFfY29udGVudF9pZFwiLFxuICAgIFwibWVkaWFfY29udGVudF90eXBlXCIsXG4gIF0sXG4gIGNsaW1hdGU6IFtcbiAgICBcInRhcmdldF90ZW1wZXJhdHVyZVwiLFxuICAgIFwidGFyZ2V0X3RlbXBlcmF0dXJlX2hpZ2hcIixcbiAgICBcInRhcmdldF90ZW1wZXJhdHVyZV9sb3dcIixcbiAgICBcInRhcmdldF9odW1pZGl0eVwiLFxuICAgIFwiZmFuX21vZGVcIixcbiAgICBcInN3aW5nX21vZGVcIixcbiAgICBcImh2YWNfbW9kZVwiLFxuICAgIFwicHJlc2V0X21vZGVcIixcbiAgXSxcbiAgdmFjdXVtOiBbXCJjbGVhbmluZ19tb2RlXCJdLFxuICBmYW46IFtcInNwZWVkXCIsIFwiY3VycmVudF9kaXJlY3Rpb25cIl0sXG4gIHdhdGVyX2hlYXRoZXI6IFtcInRlbXBlcmF0dXJlXCIsIFwib3BlcmF0aW9uX21vZGVcIl0sXG59O1xuXG5leHBvcnQgaW50ZXJmYWNlIFNjZW5lRW50aXR5IGV4dGVuZHMgSGFzc0VudGl0eUJhc2Uge1xuICBhdHRyaWJ1dGVzOiBIYXNzRW50aXR5QXR0cmlidXRlQmFzZSAmIHsgaWQ/OiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBTY2VuZUNvbmZpZyB7XG4gIG5hbWU6IHN0cmluZztcbiAgZW50aXRpZXM6IFNjZW5lRW50aXRpZXM7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2NlbmVFbnRpdGllcyB7XG4gIFtlbnRpdHlJZDogc3RyaW5nXTogc3RyaW5nIHwgeyBzdGF0ZTogc3RyaW5nOyBba2V5OiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGNvbnN0IGFjdGl2YXRlU2NlbmUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGVudGl0eUlkOiBzdHJpbmdcbik6IFByb21pc2U8U2VydmljZUNhbGxSZXNwb25zZT4gPT5cbiAgaGFzcy5jYWxsU2VydmljZShcInNjZW5lXCIsIFwidHVybl9vblwiLCB7IGVudGl0eV9pZDogZW50aXR5SWQgfSk7XG5cbmV4cG9ydCBjb25zdCBhcHBseVNjZW5lID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBlbnRpdGllczogU2NlbmVFbnRpdGllc1xuKTogUHJvbWlzZTxTZXJ2aWNlQ2FsbFJlc3BvbnNlPiA9PlxuICBoYXNzLmNhbGxTZXJ2aWNlKFwic2NlbmVcIiwgXCJhcHBseVwiLCB7IGVudGl0aWVzIH0pO1xuXG5leHBvcnQgY29uc3QgZ2V0U2NlbmVDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHNjZW5lSWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxTY2VuZUNvbmZpZz4gPT5cbiAgaGFzcy5jYWxsQXBpPFNjZW5lQ29uZmlnPihcIkdFVFwiLCBgY29uZmlnL3NjZW5lL2NvbmZpZy8ke3NjZW5lSWR9YCk7XG5cbmV4cG9ydCBjb25zdCBzYXZlU2NlbmUgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHNjZW5lSWQ6IHN0cmluZyxcbiAgY29uZmlnOiBTY2VuZUNvbmZpZ1xuKSA9PiBoYXNzLmNhbGxBcGkoXCJQT1NUXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7c2NlbmVJZH1gLCBjb25maWcpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlU2NlbmUgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpKFwiREVMRVRFXCIsIGBjb25maWcvc2NlbmUvY29uZmlnLyR7aWR9YCk7XG4iLCJpbXBvcnQgeyBkZWR1cGluZ01peGluIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL21peGluXCI7XG4vKipcbiAqIFBvbHltZXIgTWl4aW4gdG8gZW5hYmxlIGEgbG9jYWxpemUgZnVuY3Rpb24gcG93ZXJlZCBieSBsYW5ndWFnZS9yZXNvdXJjZXMgZnJvbSBoYXNzIG9iamVjdC5cbiAqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGRlZHVwaW5nTWl4aW4oXG4gIChzdXBlckNsYXNzKSA9PlxuICAgIGNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gICAgICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgaGFzczogT2JqZWN0LFxuXG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogVHJhbnNsYXRlcyBhIHN0cmluZyB0byB0aGUgY3VycmVudCBgbGFuZ3VhZ2VgLiBBbnkgcGFyYW1ldGVycyB0byB0aGVcbiAgICAgICAgICAgKiBzdHJpbmcgc2hvdWxkIGJlIHBhc3NlZCBpbiBvcmRlciwgYXMgZm9sbG93czpcbiAgICAgICAgICAgKiBgbG9jYWxpemUoc3RyaW5nS2V5LCBwYXJhbTFOYW1lLCBwYXJhbTFWYWx1ZSwgcGFyYW0yTmFtZSwgcGFyYW0yVmFsdWUpYFxuICAgICAgICAgICAqL1xuICAgICAgICAgIGxvY2FsaXplOiB7XG4gICAgICAgICAgICB0eXBlOiBGdW5jdGlvbixcbiAgICAgICAgICAgIGNvbXB1dGVkOiBcIl9fY29tcHV0ZUxvY2FsaXplKGhhc3MubG9jYWxpemUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgX19jb21wdXRlTG9jYWxpemUobG9jYWxpemUpIHtcbiAgICAgICAgcmV0dXJuIGxvY2FsaXplO1xuICAgICAgfVxuICAgIH1cbik7XG4iLCJpbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbi8qIGVzbGludC1lbmFibGUgbm8tYml0d2lzZSAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ292ZXJFbnRpdHkge1xuICBjb25zdHJ1Y3RvcihoYXNzLCBzdGF0ZU9iaikge1xuICAgIHRoaXMuaGFzcyA9IGhhc3M7XG4gICAgdGhpcy5zdGF0ZU9iaiA9IHN0YXRlT2JqO1xuICAgIHRoaXMuX2F0dHIgPSBzdGF0ZU9iai5hdHRyaWJ1dGVzO1xuICAgIHRoaXMuX2ZlYXQgPSB0aGlzLl9hdHRyLnN1cHBvcnRlZF9mZWF0dXJlcztcbiAgfVxuXG4gIGdldCBpc0Z1bGx5T3BlbigpIHtcbiAgICBpZiAodGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLmN1cnJlbnRfcG9zaXRpb24gPT09IDEwMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib3BlblwiO1xuICB9XG5cbiAgZ2V0IGlzRnVsbHlDbG9zZWQoKSB7XG4gICAgaWYgKHRoaXMuX2F0dHIuY3VycmVudF9wb3NpdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdGhpcy5fYXR0ci5jdXJyZW50X3Bvc2l0aW9uID09PSAwO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJjbG9zZWRcIjtcbiAgfVxuXG4gIGdldCBpc0Z1bGx5T3BlblRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF90aWx0X3Bvc2l0aW9uID09PSAxMDA7XG4gIH1cblxuICBnZXQgaXNGdWxseUNsb3NlZFRpbHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuY3VycmVudF90aWx0X3Bvc2l0aW9uID09PSAwO1xuICB9XG5cbiAgZ2V0IGlzT3BlbmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJvcGVuaW5nXCI7XG4gIH1cblxuICBnZXQgaXNDbG9zaW5nKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcImNsb3NpbmdcIjtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c09wZW4oKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c0Nsb3NlKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZXRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzU3RvcCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzT3BlblRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNDbG9zZVRpbHQoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAzMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTdG9wVGlsdCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDY0KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NldFRpbHRQb3NpdGlvbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEyOCk7XG4gIH1cblxuICBnZXQgaXNUaWx0T25seSgpIHtcbiAgICBjb25zdCBzdXBwb3J0c0NvdmVyID1cbiAgICAgIHRoaXMuc3VwcG9ydHNPcGVuIHx8IHRoaXMuc3VwcG9ydHNDbG9zZSB8fCB0aGlzLnN1cHBvcnRzU3RvcDtcbiAgICBjb25zdCBzdXBwb3J0c1RpbHQgPVxuICAgICAgdGhpcy5zdXBwb3J0c09wZW5UaWx0IHx8IHRoaXMuc3VwcG9ydHNDbG9zZVRpbHQgfHwgdGhpcy5zdXBwb3J0c1N0b3BUaWx0O1xuICAgIHJldHVybiBzdXBwb3J0c1RpbHQgJiYgIXN1cHBvcnRzQ292ZXI7XG4gIH1cblxuICBvcGVuQ292ZXIoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm9wZW5fY292ZXJcIik7XG4gIH1cblxuICBjbG9zZUNvdmVyKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJjbG9zZV9jb3ZlclwiKTtcbiAgfVxuXG4gIHN0b3BDb3ZlcigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic3RvcF9jb3ZlclwiKTtcbiAgfVxuXG4gIG9wZW5Db3ZlclRpbHQoKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcIm9wZW5fY292ZXJfdGlsdFwiKTtcbiAgfVxuXG4gIGNsb3NlQ292ZXJUaWx0KCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJjbG9zZV9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgc3RvcENvdmVyVGlsdCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwic3RvcF9jb3Zlcl90aWx0XCIpO1xuICB9XG5cbiAgc2V0Q292ZXJQb3NpdGlvbihwb3NpdGlvbikge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZXRfY292ZXJfcG9zaXRpb25cIiwgeyBwb3NpdGlvbiB9KTtcbiAgfVxuXG4gIHNldENvdmVyVGlsdFBvc2l0aW9uKHRpbHRQb3NpdGlvbikge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZXRfY292ZXJfdGlsdF9wb3NpdGlvblwiLCB7XG4gICAgICB0aWx0X3Bvc2l0aW9uOiB0aWx0UG9zaXRpb24sXG4gICAgfSk7XG4gIH1cblxuICAvLyBoZWxwZXIgbWV0aG9kXG5cbiAgY2FsbFNlcnZpY2Uoc2VydmljZSwgZGF0YSA9IHt9KSB7XG4gICAgZGF0YS5lbnRpdHlfaWQgPSB0aGlzLnN0YXRlT2JqLmVudGl0eV9pZDtcbiAgICB0aGlzLmhhc3MuY2FsbFNlcnZpY2UoXCJjb3ZlclwiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNPcGVuID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDEpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNDbG9zZSA9IChzdGF0ZU9iaikgPT4gc3VwcG9ydHNGZWF0dXJlKHN0YXRlT2JqLCAyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU2V0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c1N0b3AgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgOCk7XG5cbmV4cG9ydCBjb25zdCBzdXBwb3J0c09wZW5UaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDE2KTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzQ2xvc2VUaWx0ID0gKHN0YXRlT2JqKSA9PiBzdXBwb3J0c0ZlYXR1cmUoc3RhdGVPYmosIDMyKTtcblxuZXhwb3J0IGNvbnN0IHN1cHBvcnRzU3RvcFRpbHQgPSAoc3RhdGVPYmopID0+IHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgNjQpO1xuXG5leHBvcnQgY29uc3Qgc3VwcG9ydHNTZXRUaWx0UG9zaXRpb24gPSAoc3RhdGVPYmopID0+XG4gIHN1cHBvcnRzRmVhdHVyZShzdGF0ZU9iaiwgMTI4KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzVGlsdE9ubHkoc3RhdGVPYmopIHtcbiAgY29uc3Qgc3VwcG9ydHNDb3ZlciA9XG4gICAgc3VwcG9ydHNPcGVuKHN0YXRlT2JqKSB8fCBzdXBwb3J0c0Nsb3NlKHN0YXRlT2JqKSB8fCBzdXBwb3J0c1N0b3Aoc3RhdGVPYmopO1xuICBjb25zdCBzdXBwb3J0c1RpbHQgPVxuICAgIHN1cHBvcnRzT3BlblRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNDbG9zZVRpbHQoc3RhdGVPYmopIHx8XG4gICAgc3VwcG9ydHNTdG9wVGlsdChzdGF0ZU9iaik7XG4gIHJldHVybiBzdXBwb3J0c1RpbHQgJiYgIXN1cHBvcnRzQ292ZXI7XG59XG4iLCJpbXBvcnQgeyBzdXBwb3J0c0ZlYXR1cmUgfSBmcm9tIFwiLi4vY29tbW9uL2VudGl0eS9zdXBwb3J0cy1mZWF0dXJlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1lZGlhUGxheWVyRW50aXR5IHtcbiAgY29uc3RydWN0b3IoaGFzcywgc3RhdGVPYmopIHtcbiAgICB0aGlzLmhhc3MgPSBoYXNzO1xuICAgIHRoaXMuc3RhdGVPYmogPSBzdGF0ZU9iajtcbiAgICB0aGlzLl9hdHRyID0gc3RhdGVPYmouYXR0cmlidXRlcztcbiAgICB0aGlzLl9mZWF0ID0gdGhpcy5fYXR0ci5zdXBwb3J0ZWRfZmVhdHVyZXM7XG4gIH1cblxuICBnZXQgaXNPZmYoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwib2ZmXCI7XG4gIH1cblxuICBnZXQgaXNJZGxlKCkge1xuICAgIHJldHVybiB0aGlzLnN0YXRlT2JqLnN0YXRlID09PSBcImlkbGVcIjtcbiAgfVxuXG4gIGdldCBpc011dGVkKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLmlzX3ZvbHVtZV9tdXRlZDtcbiAgfVxuXG4gIGdldCBpc1BhdXNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5zdGF0ZU9iai5zdGF0ZSA9PT0gXCJwYXVzZWRcIjtcbiAgfVxuXG4gIGdldCBpc1BsYXlpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMuc3RhdGVPYmouc3RhdGUgPT09IFwicGxheWluZ1wiO1xuICB9XG5cbiAgZ2V0IGlzTXVzaWMoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfY29udGVudF90eXBlID09PSBcIm11c2ljXCI7XG4gIH1cblxuICBnZXQgaXNUVlNob3coKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIubWVkaWFfY29udGVudF90eXBlID09PSBcInR2c2hvd1wiO1xuICB9XG5cbiAgZ2V0IGhhc01lZGlhQ29udHJvbCgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgW1wicGxheWluZ1wiLCBcInBhdXNlZFwiLCBcInVua25vd25cIiwgXCJvblwiXS5pbmRleE9mKHRoaXMuc3RhdGVPYmouc3RhdGUpICE9PSAtMVxuICAgICk7XG4gIH1cblxuICBnZXQgdm9sdW1lU2xpZGVyVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIudm9sdW1lX2xldmVsICogMTAwO1xuICB9XG5cbiAgZ2V0IHNob3dQcm9ncmVzcygpIHtcbiAgICByZXR1cm4gKFxuICAgICAgKHRoaXMuaXNQbGF5aW5nIHx8IHRoaXMuaXNQYXVzZWQpICYmXG4gICAgICBcIm1lZGlhX2R1cmF0aW9uXCIgaW4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICBcIm1lZGlhX3Bvc2l0aW9uXCIgaW4gdGhpcy5zdGF0ZU9iai5hdHRyaWJ1dGVzICYmXG4gICAgICBcIm1lZGlhX3Bvc2l0aW9uX3VwZGF0ZWRfYXRcIiBpbiB0aGlzLnN0YXRlT2JqLmF0dHJpYnV0ZXNcbiAgICApO1xuICB9XG5cbiAgZ2V0IGN1cnJlbnRQcm9ncmVzcygpIHtcbiAgICB2YXIgcHJvZ3Jlc3MgPSB0aGlzLl9hdHRyLm1lZGlhX3Bvc2l0aW9uO1xuICAgIGlmICh0aGlzLmlzUGxheWluZykge1xuICAgICAgcHJvZ3Jlc3MgKz1cbiAgICAgICAgKERhdGUubm93KCkgLVxuICAgICAgICAgIG5ldyBEYXRlKHRoaXMuX2F0dHIubWVkaWFfcG9zaXRpb25fdXBkYXRlZF9hdCkuZ2V0VGltZSgpKSAvXG4gICAgICAgIDEwMDAuMDtcbiAgICB9XG4gICAgcmV0dXJuIHByb2dyZXNzO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUGF1c2UoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1ZvbHVtZVNldCgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDQpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzVm9sdW1lTXV0ZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDgpO1xuICB9XG5cbiAgZ2V0IHN1cHBvcnRzUHJldmlvdXNUcmFjaygpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDE2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c05leHRUcmFjaygpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDMyKTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1R1cm5PbigpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDEyOCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNUdXJuT2ZmKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMjU2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1BsYXlNZWRpYSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDUxMik7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNWb2x1bWVCdXR0b25zKCkge1xuICAgIHJldHVybiBzdXBwb3J0c0ZlYXR1cmUodGhpcy5zdGF0ZU9iaiwgMTAyNCk7XG4gIH1cblxuICBnZXQgc3VwcG9ydHNTZWxlY3RTb3VyY2UoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAyMDQ4KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1NlbGVjdFNvdW5kTW9kZSgpIHtcbiAgICByZXR1cm4gc3VwcG9ydHNGZWF0dXJlKHRoaXMuc3RhdGVPYmosIDY1NTM2KTtcbiAgfVxuXG4gIGdldCBzdXBwb3J0c1BsYXkoKSB7XG4gICAgcmV0dXJuIHN1cHBvcnRzRmVhdHVyZSh0aGlzLnN0YXRlT2JqLCAxNjM4NCk7XG4gIH1cblxuICBnZXQgcHJpbWFyeVRpdGxlKCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX3RpdGxlO1xuICB9XG5cbiAgZ2V0IHNlY29uZGFyeVRpdGxlKCkge1xuICAgIGlmICh0aGlzLmlzTXVzaWMpIHtcbiAgICAgIHJldHVybiB0aGlzLl9hdHRyLm1lZGlhX2FydGlzdDtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNUVlNob3cpIHtcbiAgICAgIHZhciB0ZXh0ID0gdGhpcy5fYXR0ci5tZWRpYV9zZXJpZXNfdGl0bGU7XG5cbiAgICAgIGlmICh0aGlzLl9hdHRyLm1lZGlhX3NlYXNvbikge1xuICAgICAgICB0ZXh0ICs9IFwiIFNcIiArIHRoaXMuX2F0dHIubWVkaWFfc2Vhc29uO1xuXG4gICAgICAgIGlmICh0aGlzLl9hdHRyLm1lZGlhX2VwaXNvZGUpIHtcbiAgICAgICAgICB0ZXh0ICs9IFwiRVwiICsgdGhpcy5fYXR0ci5tZWRpYV9lcGlzb2RlO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0ZXh0O1xuICAgIH1cbiAgICBpZiAodGhpcy5fYXR0ci5hcHBfbmFtZSkge1xuICAgICAgcmV0dXJuIHRoaXMuX2F0dHIuYXBwX25hbWU7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG5cbiAgZ2V0IHNvdXJjZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VyY2U7XG4gIH1cblxuICBnZXQgc291cmNlTGlzdCgpIHtcbiAgICByZXR1cm4gdGhpcy5fYXR0ci5zb3VyY2VfbGlzdDtcbiAgfVxuXG4gIGdldCBzb3VuZE1vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2F0dHIuc291bmRfbW9kZTtcbiAgfVxuXG4gIGdldCBzb3VuZE1vZGVMaXN0KCkge1xuICAgIHJldHVybiB0aGlzLl9hdHRyLnNvdW5kX21vZGVfbGlzdDtcbiAgfVxuXG4gIG1lZGlhUGxheVBhdXNlKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9wbGF5X3BhdXNlXCIpO1xuICB9XG5cbiAgbmV4dFRyYWNrKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9uZXh0X3RyYWNrXCIpO1xuICB9XG5cbiAgcGxheWJhY2tDb250cm9sKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJtZWRpYV9wbGF5X3BhdXNlXCIpO1xuICB9XG5cbiAgcHJldmlvdXNUcmFjaygpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwibWVkaWFfcHJldmlvdXNfdHJhY2tcIik7XG4gIH1cblxuICBzZXRWb2x1bWUodm9sdW1lKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV9zZXRcIiwgeyB2b2x1bWVfbGV2ZWw6IHZvbHVtZSB9KTtcbiAgfVxuXG4gIHRvZ2dsZVBvd2VyKCkge1xuICAgIGlmICh0aGlzLmlzT2ZmKSB7XG4gICAgICB0aGlzLnR1cm5PbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnR1cm5PZmYoKTtcbiAgICB9XG4gIH1cblxuICB0dXJuT2ZmKCkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJ0dXJuX29mZlwiKTtcbiAgfVxuXG4gIHR1cm5PbigpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidHVybl9vblwiKTtcbiAgfVxuXG4gIHZvbHVtZURvd24oKSB7XG4gICAgdGhpcy5jYWxsU2VydmljZShcInZvbHVtZV9kb3duXCIpO1xuICB9XG5cbiAgdm9sdW1lTXV0ZShtdXRlKSB7XG4gICAgaWYgKCF0aGlzLnN1cHBvcnRzVm9sdW1lTXV0ZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTXV0aW5nIHZvbHVtZSBub3Qgc3VwcG9ydGVkXCIpO1xuICAgIH1cbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX211dGVcIiwgeyBpc192b2x1bWVfbXV0ZWQ6IG11dGUgfSk7XG4gIH1cblxuICB2b2x1bWVVcCgpIHtcbiAgICB0aGlzLmNhbGxTZXJ2aWNlKFwidm9sdW1lX3VwXCIpO1xuICB9XG5cbiAgc2VsZWN0U291cmNlKHNvdXJjZSkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZWxlY3Rfc291cmNlXCIsIHsgc291cmNlIH0pO1xuICB9XG5cbiAgc2VsZWN0U291bmRNb2RlKHNvdW5kTW9kZSkge1xuICAgIHRoaXMuY2FsbFNlcnZpY2UoXCJzZWxlY3Rfc291bmRfbW9kZVwiLCB7IHNvdW5kX21vZGU6IHNvdW5kTW9kZSB9KTtcbiAgfVxuXG4gIC8vIGhlbHBlciBtZXRob2RcblxuICBjYWxsU2VydmljZShzZXJ2aWNlLCBkYXRhID0ge30pIHtcbiAgICBkYXRhLmVudGl0eV9pZCA9IHRoaXMuc3RhdGVPYmouZW50aXR5X2lkO1xuICAgIHRoaXMuaGFzcy5jYWxsU2VydmljZShcIm1lZGlhX3BsYXllclwiLCBzZXJ2aWNlLCBkYXRhKTtcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0hBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDSEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBSEE7Ozs7Ozs7Ozs7OztBQ2RBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTs7Ozs7Ozs7Ozs7O0FDZEE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUZBOzs7Ozs7Ozs7Ozs7QUNaQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFHQTs7Ozs7Ozs7Ozs7O0FDbkRBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2pCQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuRkE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNQQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1BBO0FBQUE7QUFBQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQzlDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0lBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFGQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUF4QkE7QUE2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3UUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBdkJBO0FBMkJBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBNERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXptQkE7QUFDQTtBQXltQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNuQkE7QUFFQTtBQUNBO0FBV0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7Ozs7OztBQUdBOzs7OztBQUNBOzs7O0FBQUE7Ozs7OztBQUhBO0FBS0E7QUFDQTtBQUNBOztBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTs7QUFYQTtBQWNBO0FBQ0E7QUFDQTs7QUFFQTtBQUdBO0FBQ0E7O0FBTkE7QUFTQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFtQkE7OztBQXJJQTtBQUNBO0FBdUlBOzs7Ozs7Ozs7Ozs7QUNoS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQStDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUhBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFJQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFsSUE7QUFDQTtBQWtJQTs7Ozs7Ozs7Ozs7O0FDNUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBaUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaEZBO0FBQ0E7QUFpRkE7Ozs7Ozs7Ozs7OztBQ3hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFQQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakZBO0FBQ0E7QUFrRkE7Ozs7Ozs7Ozs7OztBQzFGQTtBQUFBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFrQkE7Ozs7Ozs7Ozs7OztBQzNCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBRUE7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBWkE7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdERBO0FBQ0E7QUF1REE7Ozs7Ozs7Ozs7OztBQ2xFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7QUFDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlDQTtBQUNBO0FBOENBOzs7Ozs7Ozs7Ozs7QUNwREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBa0tBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFySEE7QUE0SEE7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBaFlBO0FBa1lBOzs7Ozs7Ozs7Ozs7QUMzWkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFnQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFiQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUNBO0FBS0E7QUFJQTtBQUlBO0FBS0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBT0E7QUFDQTtBQU9BO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVVBO0FBVUE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBRkE7QUFTQTtBQUVBO0FBQ0E7QUFEQTtBQURBO0FBWkE7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUZBO0FBTUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFEQTtBQU5BO0FBVUE7QUFDQTtBQUNBO0FBREE7QUFEQTtBQTVDQTtBQWtEQTtBQUNBO0FBQ0E7QUFGQTtBQXREQTtBQTJEQTtBQUNBO0FBQ0E7QUF0WEE7QUFDQTtBQXNYQTs7Ozs7Ozs7Ozs7O0FDaFlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQWpCQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFEQTtBQUtBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQURBO0FBREE7QUFRQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFYQTtBQU5BO0FBMEJBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFoQ0E7QUFxQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5TUE7QUFDQTtBQThNQTs7Ozs7Ozs7Ozs7O0FDMU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBckdBO0FBQ0E7QUFxR0E7Ozs7Ozs7Ozs7OztBQy9GQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFHQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBREE7Ozs7Ozs7Ozs7OztBQ3hCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZ0NBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN6T0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFlQTtBQUtBO0FBWUE7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRkE7QUFLQTtBQVFBO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDdkVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFnQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEE7QUFVQTs7Ozs7Ozs7Ozs7O0FDaEVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFpQkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBTUE7QUFDQTtBQUZBO0FBTUE7QUFLQTtBQUNBO0FBRkE7QUFDQTtBQUlBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBOzs7Ozs7Ozs7Ozs7QUNyRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXRCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFNQTtBQUNBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQU9BO0FBQ0E7QUFyS0E7QUFDQTtBQXFLQTs7Ozs7Ozs7Ozs7O0FDbExBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQTRDQTtBQU9BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFJQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBSUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7OztBQy9OQTtBQUFBO0FBQUE7QUFNQTtBQUNBO0FBRkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWFBO0FBQ0E7QUFRQTtBQVFBO0FBVUE7QUFDQTtBQUNBO0FBN0JBO0FBNkNBO0FBSUE7QUFBQTtBQUVBO0FBSUE7QUFBQTtBQUVBO0FBTUE7QUFNQTs7Ozs7Ozs7Ozs7O0FDekZBO0FBQUE7QUFBQTtBQUNBOzs7Ozs7QUFLQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXBCQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdEhBO0FBd0hBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFHQTtBQUNBO0FBRUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNwSkE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlOQTs7OztBIiwic291cmNlUm9vdCI6IiJ9