(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog~panel-kiosk~panel-lovelace~panel-states"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
  return hass && hass.config.components.indexOf(component) !== -1;
}

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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return timerTimeRemaining; });
/* harmony import */ var _datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../datetime/duration_to_seconds */ "./src/common/datetime/duration_to_seconds.ts");

function timerTimeRemaining(stateObj) {
  let timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    const now = new Date().getTime();
    const madeActive = new Date(stateObj.last_changed).getTime();
    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
  }

  return timeRemaining;
}

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
          <span class="state-label"> [[_localizeState(stateObj.state)]] </span>
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
      return `${stateObj.attributes.target_temp_low} - ${stateObj.attributes.target_temp_high} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.temperature != null) {
      return `${stateObj.attributes.temperature} ${hass.config.unit_system.temperature}`;
    }

    if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
      return `${stateObj.attributes.target_humidity_low} - ${stateObj.attributes.target_humidity_high} %`;
    }

    if (stateObj.attributes.humidity != null) {
      return `${stateObj.attributes.humidity} %`;
    }

    return "";
  }

  _hasKnownState(state) {
    return state !== "unknown";
  }

  _localizeState(state) {
    return this.localize(`state.climate.${state}`) || state;
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
          icon="hass:arrow-up"
          on-click="onOpenTap"
          invisible$="[[!entityObj.supportsOpen]]"
          disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
        ></paper-icon-button>
        <paper-icon-button
          icon="hass:stop"
          on-click="onStopTap"
          invisible$="[[!entityObj.supportsStop]]"
        ></paper-icon-button>
        <paper-icon-button
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
        icon="hass:arrow-top-right"
        on-click="onOpenTiltTap"
        title="Open tilt"
        invisible$="[[!entityObj.supportsOpenTilt]]"
        disabled="[[computeOpenDisabled(stateObj, entityObj)]]"
      ></paper-icon-button>
      <paper-icon-button
        icon="hass:stop"
        on-click="onStopTiltTap"
        invisible$="[[!entityObj.supportsStopTilt]]"
        title="Stop tilt"
      ></paper-icon-button>
      <paper-icon-button
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

/***/ "./src/components/ha-markdown.js":
/*!***************************************!*\
  !*** ./src/components/ha-markdown.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");


let loaded = null;
/**
 * White list allowed svg tag.
 * Only put in the tag used in QR code, can be extend in future.
 */

const svgWhiteList = ["svg", "path"];
/*
 * @appliesMixin EventsMixin
 */

class HaMarkdown extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get properties() {
    return {
      content: {
        type: String,
        observer: "_render"
      },
      allowSvg: {
        type: Boolean,
        value: false
      }
    };
  }

  connectedCallback() {
    super.connectedCallback(); // 0 = not loaded, 1 = success, 2 = error

    this._scriptLoaded = 0;
    this._renderScheduled = false;

    this._resize = () => this.fire("iron-resize");

    if (!loaded) {
      loaded = Promise.all(/*! import() | load_markdown */[__webpack_require__.e("vendors~load_markdown"), __webpack_require__.e("load_markdown")]).then(__webpack_require__.bind(null, /*! ../resources/load_markdown */ "./src/resources/load_markdown.js"));
    }

    loaded.then(({
      marked,
      filterXSS
    }) => {
      this.marked = marked;
      this.filterXSS = filterXSS;
      this._scriptLoaded = 1;
    }, () => {
      this._scriptLoaded = 2;
    }).then(() => this._render());
  }

  _render() {
    if (this._scriptLoaded === 0 || this._renderScheduled) return;
    this._renderScheduled = true; // debounce it to next microtask.

    Promise.resolve().then(() => {
      this._renderScheduled = false;

      if (this._scriptLoaded === 1) {
        this.innerHTML = this.filterXSS(this.marked(this.content, {
          gfm: true,
          tables: true,
          breaks: true
        }), {
          onIgnoreTag: this.allowSvg ? (tag, html) => svgWhiteList.indexOf(tag) >= 0 ? html : null : null
        });

        this._resize();

        const walker = document.createTreeWalker(this, 1
        /* SHOW_ELEMENT */
        , null, false);

        while (walker.nextNode()) {
          const node = walker.currentNode; // Open external links in a new window

          if (node.tagName === "A" && node.host !== document.location.host) {
            node.target = "_blank"; // Fire a resize event when images loaded to notify content resized
          } else if (node.tagName === "IMG") {
            node.addEventListener("load", this._resize);
          }
        }
      } else if (this._scriptLoaded === 2) {
        this.innerText = this.content;
      }
    });
  }

}

customElements.define("ha-markdown", HaMarkdown);

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
const fetchThumbnailUrl = (hass, entityId) => Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, `/api/camera_proxy/${entityId}`).then(({
  path
}) => path);
const fetchThumbnail = (hass, entityId) => {
  // tslint:disable-next-line: no-console
  console.warn("This method has been deprecated.");
  return hass.callWS({
    type: "camera_thumbnail",
    entity_id: entityId
  });
};
const fetchStreamUrl = (hass, entityId, format) => {
  const data = {
    type: "camera/stream",
    entity_id: entityId
  };

  if (format) {
    // @ts-ignore
    data.format = format;
  }

  return hass.callWS(data);
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
//# sourceMappingURL=more-info-dialog~panel-kiosk~panel-lovelace~panel-states.chunk.js.map