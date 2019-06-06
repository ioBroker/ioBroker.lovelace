(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog~panel-lovelace"],{

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
  var parts = duration.split(":").map(Number);
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
var tests = [60, 60, 24, 7];
var langKey = ["second", "minute", "hour", "day"];
function relativeTime(dateObj, localize) {
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  var compareTime = options.compareTime || new Date();
  var delta = (compareTime.getTime() - dateObj.getTime()) / 1000;
  var tense = delta >= 0 ? "past" : "future";
  delta = Math.abs(delta);
  var timeDesc;

  for (var i = 0; i < tests.length; i++) {
    if (delta < tests[i]) {
      delta = Math.floor(delta);
      timeDesc = localize("ui.components.relative_time.duration.".concat(langKey[i]), "count", delta);
      break;
    }

    delta /= tests[i];
  }

  if (timeDesc === undefined) {
    delta = Math.floor(delta);
    timeDesc = localize("ui.components.relative_time.duration.week", "count", delta);
  }

  return options.includeTense === false ? timeDesc : localize("ui.components.relative_time.".concat(tense), "time", timeDesc);
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
var leftPad = function leftPad(num) {
  return num < 10 ? "0".concat(num) : num;
};

function secondsToDuration(d) {
  var h = Math.floor(d / 3600);
  var m = Math.floor(d % 3600 / 60);
  var s = Math.floor(d % 3600 % 60);

  if (h > 0) {
    return "".concat(h, ":").concat(leftPad(m), ":").concat(leftPad(s));
  }

  if (m > 0) {
    return "".concat(m, ":").concat(leftPad(s));
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
var stopPropagation = function stopPropagation(ev) {
  return ev.stopPropagation();
};

/***/ }),

/***/ "./src/common/entity/binary_sensor_icon.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/binary_sensor_icon.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return binarySensorIcon; });
/** Return an icon representing a binary sensor state. */
function binarySensorIcon(state) {
  var activated = state.state && state.state === "off";

  switch (state.attributes.device_class) {
    case "battery":
      return activated ? "hass:battery" : "hass:battery-outline";

    case "cold":
      return activated ? "hass:thermometer" : "hass:snowflake";

    case "connectivity":
      return activated ? "hass:server-network-off" : "hass:server-network";

    case "door":
      return activated ? "hass:door-closed" : "hass:door-open";

    case "garage_door":
      return activated ? "hass:garage" : "hass:garage-open";

    case "gas":
    case "power":
    case "problem":
    case "safety":
    case "smoke":
      return activated ? "hass:shield-check" : "hass:alert";

    case "heat":
      return activated ? "hass:thermometer" : "hass:fire";

    case "light":
      return activated ? "hass:brightness-5" : "hass:brightness-7";

    case "lock":
      return activated ? "hass:lock" : "hass:lock-open";

    case "moisture":
      return activated ? "hass:water-off" : "hass:water";

    case "motion":
      return activated ? "hass:walk" : "hass:run";

    case "occupancy":
      return activated ? "hass:home-outline" : "hass:home";

    case "opening":
      return activated ? "hass:square" : "hass:square-outline";

    case "plug":
      return activated ? "hass:power-plug-off" : "hass:power-plug";

    case "presence":
      return activated ? "hass:home-outline" : "hass:home";

    case "sound":
      return activated ? "hass:music-note-off" : "hass:music-note";

    case "vibration":
      return activated ? "hass:crop-portrait" : "hass:vibrate";

    case "window":
      return activated ? "hass:window-closed" : "hass:window-open";

    default:
      return activated ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";
  }
}

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

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

function computeStateDomain(stateObj) {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id);
}

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

/* harmony default export */ __webpack_exports__["default"] = (function (stateObj) {
  return stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "";
});

/***/ }),

/***/ "./src/common/entity/cover_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/cover_icon.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return coverIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing a cover state. */

function coverIcon(state) {
  var open = state.state !== "closed";

  switch (state.attributes.device_class) {
    case "garage":
      return open ? "hass:garage-open" : "hass:garage";

    default:
      return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["default"])("cover", state.state);
  }
}

/***/ }),

/***/ "./src/common/entity/domain_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/domain_icon.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return domainIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/**
 * Return the icon to be used for a domain.
 *
 * Optionally pass in a state to influence the domain icon.
 */

var fixedIcons = {
  alert: "hass:alert",
  automation: "hass:playlist-play",
  calendar: "hass:calendar",
  camera: "hass:video",
  climate: "hass:thermostat",
  configurator: "hass:settings",
  conversation: "hass:text-to-speech",
  device_tracker: "hass:account",
  fan: "hass:fan",
  group: "hass:google-circles-communities",
  history_graph: "hass:chart-line",
  homeassistant: "hass:home-assistant",
  homekit: "hass:home-automation",
  image_processing: "hass:image-filter-frames",
  input_boolean: "hass:drawing",
  input_datetime: "hass:calendar-clock",
  input_number: "hass:ray-vertex",
  input_select: "hass:format-list-bulleted",
  input_text: "hass:textbox",
  light: "hass:lightbulb",
  mailbox: "hass:mailbox",
  notify: "hass:comment-alert",
  person: "hass:account",
  plant: "hass:flower",
  proximity: "hass:apple-safari",
  remote: "hass:remote",
  scene: "hass:google-pages",
  script: "hass:file-document",
  sensor: "hass:eye",
  simple_alarm: "hass:bell",
  sun: "hass:white-balance-sunny",
  "switch": "hass:flash",
  timer: "hass:timer",
  updater: "hass:cloud-upload",
  vacuum: "hass:robot-vacuum",
  water_heater: "hass:thermometer",
  weblink: "hass:open-in-new"
};
function domainIcon(domain, state) {
  if (domain in fixedIcons) {
    return fixedIcons[domain];
  }

  switch (domain) {
    case "alarm_control_panel":
      switch (state) {
        case "armed_home":
          return "hass:bell-plus";

        case "armed_night":
          return "hass:bell-sleep";

        case "disarmed":
          return "hass:bell-outline";

        case "triggered":
          return "hass:bell-ring";

        default:
          return "hass:bell";
      }

    case "binary_sensor":
      return state && state === "off" ? "hass:radiobox-blank" : "hass:checkbox-marked-circle";

    case "cover":
      return state === "closed" ? "hass:window-closed" : "hass:window-open";

    case "lock":
      return state && state === "unlocked" ? "hass:lock-open" : "hass:lock";

    case "media_player":
      return state && state !== "off" && state !== "idle" ? "hass:cast-connected" : "hass:cast";

    case "zwave":
      switch (state) {
        case "dead":
          return "hass:emoticon-dead";

        case "sleeping":
          return "hass:sleep";

        case "initializing":
          return "hass:timer-sand";

        default:
          return "hass:z-wave";
      }

    default:
      // tslint:disable-next-line
      console.warn("Unable to find icon for domain " + domain + " (" + state + ")");
      return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
  }
}

/***/ }),

/***/ "./src/common/entity/input_dateteime_icon.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/input_dateteime_icon.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return inputDateTimeIcon; });
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing an input datetime state. */

function inputDateTimeIcon(state) {
  if (!state.attributes.has_date) {
    return "hass:clock";
  }

  if (!state.attributes.has_time) {
    return "hass:calendar";
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_0__["default"])("input_datetime");
}

/***/ }),

/***/ "./src/common/entity/sensor_icon.ts":
/*!******************************************!*\
  !*** ./src/common/entity/sensor_icon.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sensorIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/** Return an icon representing a sensor state. */


var fixedDeviceClassIcons = {
  humidity: "hass:water-percent",
  illuminance: "hass:brightness-5",
  temperature: "hass:thermometer",
  pressure: "hass:gauge",
  power: "hass:flash",
  signal_strength: "hass:wifi"
};
function sensorIcon(state) {
  var dclass = state.attributes.device_class;

  if (dclass && dclass in fixedDeviceClassIcons) {
    return fixedDeviceClassIcons[dclass];
  }

  if (dclass === "battery") {
    var battery = Number(state.state);

    if (isNaN(battery)) {
      return "hass:battery-unknown";
    }

    var batteryRound = Math.round(battery / 10) * 10;

    if (batteryRound >= 100) {
      return "hass:battery";
    }

    if (batteryRound <= 0) {
      return "hass:battery-alert";
    } // Will return one of the following icons: (listed so extractor picks up)
    // hass:battery-10
    // hass:battery-20
    // hass:battery-30
    // hass:battery-40
    // hass:battery-50
    // hass:battery-60
    // hass:battery-70
    // hass:battery-80
    // hass:battery-90
    // We obscure 'hass' in iconname so this name does not get picked up


    return "hass".concat(":battery-", batteryRound);
  }

  var unit = state.attributes.unit_of_measurement;

  if (unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_C"] || unit === _const__WEBPACK_IMPORTED_MODULE_0__["UNIT_F"]) {
    return "hass:thermometer";
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_1__["default"])("sensor");
}

/***/ }),

/***/ "./src/common/entity/state_icon.ts":
/*!*****************************************!*\
  !*** ./src/common/entity/state_icon.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return stateIcon; });
/* harmony import */ var _const__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../const */ "./src/common/const.ts");
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _domain_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domain_icon */ "./src/common/entity/domain_icon.ts");
/* harmony import */ var _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./binary_sensor_icon */ "./src/common/entity/binary_sensor_icon.ts");
/* harmony import */ var _cover_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./cover_icon */ "./src/common/entity/cover_icon.ts");
/* harmony import */ var _sensor_icon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sensor_icon */ "./src/common/entity/sensor_icon.ts");
/* harmony import */ var _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./input_dateteime_icon */ "./src/common/entity/input_dateteime_icon.ts");
/** Return an icon representing a state. */







var domainIcons = {
  binary_sensor: _binary_sensor_icon__WEBPACK_IMPORTED_MODULE_3__["default"],
  cover: _cover_icon__WEBPACK_IMPORTED_MODULE_4__["default"],
  sensor: _sensor_icon__WEBPACK_IMPORTED_MODULE_5__["default"],
  input_datetime: _input_dateteime_icon__WEBPACK_IMPORTED_MODULE_6__["default"]
};
function stateIcon(state) {
  if (!state) {
    return _const__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_DOMAIN_ICON"];
  }

  if (state.attributes.icon) {
    return state.attributes.icon;
  }

  var domain = Object(_compute_domain__WEBPACK_IMPORTED_MODULE_1__["default"])(state.entity_id);

  if (domain in domainIcons) {
    return domainIcons[domain](state);
  }

  return Object(_domain_icon__WEBPACK_IMPORTED_MODULE_2__["default"])(domain, state.state);
}

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
var supportsFeature = function supportsFeature(stateObj, feature) {
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
  var timeRemaining = Object(_datetime_duration_to_seconds__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.attributes.remaining);

  if (stateObj.state === "active") {
    var now = new Date().getTime();
    var madeActive = new Date(stateObj.last_changed).getTime();
    timeRemaining = Math.max(timeRemaining - (now - madeActive) / 1000, 0);
  }

  return timeRemaining;
}

/***/ }),

/***/ "./src/common/util/debounce.ts":
/*!*************************************!*\
  !*** ./src/common/util/debounce.ts ***!
  \*************************************/
/*! exports provided: debounce */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "debounce", function() { return debounce; });
// From: https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
// tslint:disable-next-line: ban-types
var debounce = function debounce(func, wait) {
  var immediate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  var timeout; // @ts-ignore

  return function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    // tslint:disable:no-this-assignment
    // @ts-ignore
    var context = this;

    var later = function later() {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
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
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var timeCachePromiseFunc =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  regeneratorRuntime.mark(function _callee(cacheKey, cacheTime, func, hass, entityId) {
    var _len,
        args,
        _key,
        cache,
        lastResult,
        result,
        _args = arguments;

    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            for (_len = _args.length, args = new Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
              args[_key - 5] = _args[_key];
            }

            cache = hass[cacheKey];

            if (!cache) {
              cache = hass[cacheKey] = {};
            }

            lastResult = cache[entityId];

            if (!lastResult) {
              _context.next = 6;
              break;
            }

            return _context.abrupt("return", lastResult);

          case 6:
            result = func.apply(void 0, [hass, entityId].concat(args));
            cache[entityId] = result;
            result.then( // When successful, set timer to clear cache
            function () {
              return setTimeout(function () {
                cache[entityId] = undefined;
              }, cacheTime);
            }, // On failure, clear cache right away
            function () {
              cache[entityId] = undefined;
            });
            return _context.abrupt("return", result);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function timeCachePromiseFunc(_x, _x2, _x3, _x4, _x5) {
    return _ref.apply(this, arguments);
  };
}();

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
        scriptsLoaded = Promise.all(/*! import() | load_chart */[__webpack_require__.e("vendors~load_chart"), __webpack_require__.e("load_chart")]).then(__webpack_require__.bind(null, /*! ../../resources/ha-chart-scripts.js */ "./src/resources/ha-chart-scripts.js"));
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

/***/ "./src/components/entity/ha-entity-toggle.ts":
/*!***************************************************!*\
  !*** ./src/components/entity/ha-entity-toggle.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_haptics__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../data/haptics */ "./src/data/haptics.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        white-space: nowrap;\n        min-width: 38px;\n      }\n      paper-icon-button {\n        color: var(\n          --paper-icon-button-inactive-color,\n          var(--primary-text-color)\n        );\n        transition: color 0.5s;\n      }\n      paper-icon-button[state-active] {\n        color: var(--paper-icon-button-active-color, var(--primary-color));\n      }\n      paper-toggle-button {\n        cursor: pointer;\n        --paper-toggle-button-label-spacing: 0;\n        padding: 13px 5px;\n        margin: -4px -5px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      <paper-toggle-button\n        .checked=", "\n        @change=", "\n      ></paper-toggle-button>\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        <paper-icon-button\n          icon=\"hass:flash-off\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n        <paper-icon-button\n          icon=\"hass:flash\"\n          @click=", "\n          ?state-active=", "\n        ></paper-icon-button>\n      "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n        <paper-toggle-button disabled></paper-toggle-button>\n      "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }








var isOn = function isOn(stateObj) {
  return stateObj !== undefined && !_common_const__WEBPACK_IMPORTED_MODULE_2__["STATES_OFF"].includes(stateObj.state);
};

var HaEntityToggle = _decorate(null, function (_initialize, _LitElement) {
  var HaEntityToggle =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaEntityToggle, _LitElement2);

    function HaEntityToggle() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaEntityToggle);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaEntityToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaEntityToggle;
  }(_LitElement);

  return {
    F: HaEntityToggle,
    d: [{
      kind: "field",
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_isOn",
      value: function value() {
        return false;
      }
    }, {
      kind: "method",
      key: "render",
      value: // hass is not a property so that we only re-render on stateObj changes
      function render() {
        if (!this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
        }

        if (this.stateObj.attributes.assumed_state) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2(), this._turnOff, !this._isOn, this._turnOn, this._isOn);
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject3(), this._isOn, this._toggleChanged);
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaEntityToggle.prototype), "firstUpdated", this).call(this, changedProps);

        this.addEventListener("click", function (ev) {
          return ev.stopPropagation();
        });
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
        var newVal = ev.target.checked;

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
      value: function () {
        var _callService2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(turnOn) {
          var _this2 = this;

          var stateDomain, serviceDomain, service, currentState;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  if (!(!this.hass || !this.stateObj)) {
                    _context2.next = 2;
                    break;
                  }

                  return _context2.abrupt("return");

                case 2:
                  Object(_data_haptics__WEBPACK_IMPORTED_MODULE_5__["forwardHaptic"])("light");
                  stateDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_3__["default"])(this.stateObj);

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

                  currentState = this.stateObj; // Optimistic update.

                  this._isOn = turnOn;
                  _context2.next = 9;
                  return this.hass.callService(serviceDomain, service, {
                    entity_id: this.stateObj.entity_id
                  });

                case 9:
                  setTimeout(
                  /*#__PURE__*/
                  _asyncToGenerator(
                  /*#__PURE__*/
                  regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_context) {
                      while (1) {
                        switch (_context.prev = _context.next) {
                          case 0:
                            // If after 2 seconds we have not received a state update
                            // reset the switch to it's original state.
                            if (_this2.stateObj === currentState) {
                              _this2._isOn = isOn(_this2.stateObj);
                            }

                          case 1:
                          case "end":
                            return _context.stop();
                        }
                      }
                    }, _callee);
                  })), 2000);

                case 10:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        function _callService(_x) {
          return _callService2.apply(this, arguments);
        }

        return _callService;
      }()
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject4());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

customElements.define("ha-entity-toggle", HaEntityToggle);

/***/ }),

/***/ "./src/components/entity/state-badge.ts":
/*!**********************************************!*\
  !*** ./src/components/entity/state-badge.ts ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../common/entity/state_icon */ "./src/common/entity/state_icon.ts");
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n      :host {\n        position: relative;\n        display: inline-block;\n        width: 40px;\n        color: var(--paper-item-icon-color, #44739e);\n        border-radius: 50%;\n        height: 40px;\n        text-align: center;\n        background-size: cover;\n        line-height: 40px;\n      }\n\n      ha-icon {\n        transition: color 0.3s ease-in-out, filter 0.3s ease-in-out;\n      }\n\n      /* Color the icon if light or sun is on */\n      ha-icon[data-domain=\"light\"][data-state=\"on\"],\n      ha-icon[data-domain=\"switch\"][data-state=\"on\"],\n      ha-icon[data-domain=\"binary_sensor\"][data-state=\"on\"],\n      ha-icon[data-domain=\"fan\"][data-state=\"on\"],\n      ha-icon[data-domain=\"sun\"][data-state=\"above_horizon\"] {\n        color: var(--paper-item-icon-active-color, #fdd835);\n      }\n\n      /* Color the icon if unavailable */\n      ha-icon[data-state=\"unavailable\"] {\n        color: var(--state-icon-unavailable-color);\n      }\n    "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-icon\n        id=\"icon\"\n        data-domain=", "\n        data-state=", "\n        .icon=", "\n      ></ha-icon>\n    "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral([""]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var StateBadge = _decorate(null, function (_initialize, _LitElement) {
  var StateBadge =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(StateBadge, _LitElement2);

    function StateBadge() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, StateBadge);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(StateBadge)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return StateBadge;
  }(_LitElement);

  return {
    F: StateBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "overrideIcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["query"])("ha-icon")],
      key: "_icon",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var stateObj = this.stateObj;

        if (!stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_2__["default"])(stateObj), stateObj.state, this.overrideIcon || Object(_common_entity_state_icon__WEBPACK_IMPORTED_MODULE_3__["default"])(stateObj));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (!changedProps.has("stateObj") || !this.stateObj) {
          return;
        }

        var stateObj = this.stateObj;
        var iconStyle = {
          color: "",
          filter: ""
        };
        var hostStyle = {
          backgroundImage: ""
        };

        if (stateObj) {
          // hide icon if we have entity picture
          if (stateObj.attributes.entity_picture && !this.overrideIcon) {
            hostStyle.backgroundImage = "url(" + stateObj.attributes.entity_picture + ")";
            iconStyle.display = "none";
          } else {
            if (stateObj.attributes.hs_color) {
              var hue = stateObj.attributes.hs_color[0];
              var sat = stateObj.attributes.hs_color[1];

              if (sat > 10) {
                iconStyle.color = "hsl(".concat(hue, ", 100%, ").concat(100 - sat / 2, "%)");
              }
            }

            if (stateObj.attributes.brightness) {
              var brightness = stateObj.attributes.brightness;

              if (typeof brightness !== "number") {
                var errorMessage = "Type error: state-badge expected number, but type of ".concat(stateObj.entity_id, ".attributes.brightness is ").concat(_typeof(brightness), " (").concat(brightness, ")"); // tslint:disable-next-line

                console.warn(errorMessage);
              } // lowest brighntess will be around 50% (that's pretty dark)


              iconStyle.filter = "brightness(".concat((brightness + 245) / 5, "%)");
            }
          }
        }

        Object.assign(this._icon.style, iconStyle);
        Object.assign(this.style, hostStyle);
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject3());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("state-badge", StateBadge);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: flex;\n          flex-direction: column;\n          justify-content: center;\n          white-space: nowrap;\n        }\n\n        .target {\n          color: var(--primary-text-color);\n        }\n\n        .current {\n          color: var(--secondary-text-color);\n        }\n\n        .state-label {\n          font-weight: bold;\n          text-transform: capitalize;\n        }\n\n        .unit {\n          display: inline-block;\n          direction: ltr;\n        }\n      </style>\n\n      <div class=\"target\">\n        <template is=\"dom-if\" if=\"[[_hasKnownState(stateObj.state)]]\">\n          <span class=\"state-label\"> [[_localizeState(stateObj.state)]] </span>\n        </template>\n        <div class=\"unit\">[[computeTarget(hass, stateObj)]]</div>\n      </div>\n\n      <template is=\"dom-if\" if=\"[[currentStatus]]\">\n        <div class=\"current\">\n          [[localize('ui.card.climate.currently')]]:\n          <div class=\"unit\">[[currentStatus]]</div>\n        </div>\n      </template>\n    "]);

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




/*
 * @appliesMixin LocalizeMixin
 */

var HaClimateState =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaClimateState, _LocalizeMixin);

  function HaClimateState() {
    _classCallCheck(this, HaClimateState);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaClimateState).apply(this, arguments));
  }

  _createClass(HaClimateState, [{
    key: "computeCurrentStatus",
    value: function computeCurrentStatus(hass, stateObj) {
      if (!hass || !stateObj) return null;

      if (stateObj.attributes.current_temperature != null) {
        return "".concat(stateObj.attributes.current_temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.current_humidity != null) {
        return "".concat(stateObj.attributes.current_humidity, " %");
      }

      return null;
    }
  }, {
    key: "computeTarget",
    value: function computeTarget(hass, stateObj) {
      if (!hass || !stateObj) return null; // We're using "!= null" on purpose so that we match both null and undefined.

      if (stateObj.attributes.target_temp_low != null && stateObj.attributes.target_temp_high != null) {
        return "".concat(stateObj.attributes.target_temp_low, " - ").concat(stateObj.attributes.target_temp_high, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.temperature != null) {
        return "".concat(stateObj.attributes.temperature, " ").concat(hass.config.unit_system.temperature);
      }

      if (stateObj.attributes.target_humidity_low != null && stateObj.attributes.target_humidity_high != null) {
        return "".concat(stateObj.attributes.target_humidity_low, " - ").concat(stateObj.attributes.target_humidity_high, " %");
      }

      if (stateObj.attributes.humidity != null) {
        return "".concat(stateObj.attributes.humidity, " %");
      }

      return "";
    }
  }, {
    key: "_hasKnownState",
    value: function _hasKnownState(state) {
      return state !== "unknown";
    }
  }, {
    key: "_localizeState",
    value: function _localizeState(state) {
      return this.localize("state.climate.".concat(state)) || state;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        currentStatus: {
          type: String,
          computed: "computeCurrentStatus(hass, stateObj)"
        }
      };
    }
  }]);

  return HaClimateState;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .state {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n\n      <div class=\"state\">\n        <paper-icon-button\n          icon=\"hass:arrow-up\"\n          on-click=\"onOpenTap\"\n          invisible$=\"[[!entityObj.supportsOpen]]\"\n          disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          icon=\"hass:stop\"\n          on-click=\"onStopTap\"\n          invisible$=\"[[!entityObj.supportsStop]]\"\n        ></paper-icon-button>\n        <paper-icon-button\n          icon=\"hass:arrow-down\"\n          on-click=\"onCloseTap\"\n          invisible$=\"[[!entityObj.supportsClose]]\"\n          disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n        ></paper-icon-button>\n      </div>\n    "]);

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






var HaCoverControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverControls, _PolymerElement);

  function HaCoverControls() {
    _classCallCheck(this, HaCoverControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverControls).apply(this, arguments));
  }

  _createClass(HaCoverControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_3__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyOpen || entityObj.isOpening) && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return (entityObj.isFullyClosed || entityObj.isClosing) && !assumedState;
    }
  }, {
    key: "onOpenTap",
    value: function onOpenTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCover();
    }
  }, {
    key: "onCloseTap",
    value: function onCloseTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCover();
    }
  }, {
    key: "onStopTap",
    value: function onStopTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCover();
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
        stateObj: {
          type: Object
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        }
      };
    }
  }]);

  return HaCoverControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          white-space: nowrap;\n        }\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <paper-icon-button\n        icon=\"hass:arrow-top-right\"\n        on-click=\"onOpenTiltTap\"\n        title=\"Open tilt\"\n        invisible$=\"[[!entityObj.supportsOpenTilt]]\"\n        disabled=\"[[computeOpenDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon=\"hass:stop\"\n        on-click=\"onStopTiltTap\"\n        invisible$=\"[[!entityObj.supportsStopTilt]]\"\n        title=\"Stop tilt\"\n      ></paper-icon-button>\n      <paper-icon-button\n        icon=\"hass:arrow-bottom-left\"\n        on-click=\"onCloseTiltTap\"\n        title=\"Close tilt\"\n        invisible$=\"[[!entityObj.supportsCloseTilt]]\"\n        disabled=\"[[computeClosedDisabled(stateObj, entityObj)]]\"\n      ></paper-icon-button>\n    "]);

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







var HaCoverTiltControls =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCoverTiltControls, _PolymerElement);

  function HaCoverTiltControls() {
    _classCallCheck(this, HaCoverTiltControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCoverTiltControls).apply(this, arguments));
  }

  _createClass(HaCoverTiltControls, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_4__["default"](hass, stateObj);
    }
  }, {
    key: "computeOpenDisabled",
    value: function computeOpenDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyOpenTilt && !assumedState;
    }
  }, {
    key: "computeClosedDisabled",
    value: function computeClosedDisabled(stateObj, entityObj) {
      var assumedState = stateObj.attributes.assumed_state === true;
      return entityObj.isFullyClosedTilt && !assumedState;
    }
  }, {
    key: "onOpenTiltTap",
    value: function onOpenTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.openCoverTilt();
    }
  }, {
    key: "onCloseTiltTap",
    value: function onCloseTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.closeCoverTilt();
    }
  }, {
    key: "onStopTiltTap",
    value: function onStopTiltTap(ev) {
      ev.stopPropagation();
      this.entityObj.stopCoverTilt();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
  }]);

  return HaCoverTiltControls;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("ha-cover-tilt-controls", HaCoverTiltControls);

/***/ }),

/***/ "./src/components/ha-icon.ts":
/*!***********************************!*\
  !*** ./src/components/ha-icon.ts ***!
  \***********************************/
/*! exports provided: HaIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIcon", function() { return HaIcon; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
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

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

var ironIconClass = customElements.get("iron-icon");
var loaded = false;
var HaIcon =
/*#__PURE__*/
function (_ironIconClass) {
  _inherits(HaIcon, _ironIconClass);

  function HaIcon() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HaIcon);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaIcon)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "_iconsetName", void 0);

    return _this;
  }

  _createClass(HaIcon, [{
    key: "listen",
    value: function listen(node, eventName, methodName) {
      _get(_getPrototypeOf(HaIcon.prototype), "listen", this).call(this, node, eventName, methodName);

      if (!loaded && this._iconsetName === "mdi") {
        loaded = true;
        __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
      }
    }
  }]);

  return HaIcon;
}(ironIconClass);
customElements.define("ha-icon", HaIcon);

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


var paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

var HaPaperDropdownClass =
/*#__PURE__*/
function (_paperDropdownClass) {
  _inherits(HaPaperDropdownClass, _paperDropdownClass);

  function HaPaperDropdownClass() {
    _classCallCheck(this, HaPaperDropdownClass);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperDropdownClass).apply(this, arguments));
  }

  _createClass(HaPaperDropdownClass, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaPaperDropdownClass.prototype), "ready", this).call(this); // wait to check for direction since otherwise direction is wrong even though top level is RTL


      setTimeout(function () {
        if (window.getComputedStyle(_this).direction === "rtl") {
          _this.style.textAlign = "right";
        }
      }, 100);
    }
  }]);

  return HaPaperDropdownClass;
}(paperDropdownClass);
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin LocalizeMixin
 */

var HaRelativeTime =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaRelativeTime, _LocalizeMixin);

  _createClass(HaRelativeTime, null, [{
    key: "properties",
    get: function get() {
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
  }]);

  function HaRelativeTime() {
    var _this;

    _classCallCheck(this, HaRelativeTime);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaRelativeTime).call(this));
    _this.updateRelative = _this.updateRelative.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HaRelativeTime, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "connectedCallback", this).call(this); // update every 60 seconds


      this.updateInterval = setInterval(this.updateRelative, 60000);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaRelativeTime.prototype), "disconnectedCallback", this).call(this);

      clearInterval(this.updateInterval);
    }
  }, {
    key: "datetimeChanged",
    value: function datetimeChanged(newVal) {
      this.parsedDateTime = newVal ? new Date(newVal) : null;
      this.updateRelative();
    }
  }, {
    key: "datetimeObjChanged",
    value: function datetimeObjChanged(newVal) {
      this.parsedDateTime = newVal;
      this.updateRelative();
    }
  }, {
    key: "updateRelative",
    value: function updateRelative() {
      var root = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this);

      if (!this.parsedDateTime) {
        root.innerHTML = this.localize("ui.components.relative_time.never");
      } else {
        root.innerHTML = Object(_common_datetime_relative_time__WEBPACK_IMPORTED_MODULE_2__["default"])(this.parsedDateTime, this.localize);
      }
    }
  }]);

  return HaRelativeTime;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


var PaperSliderClass = customElements.get("paper-slider");
var subTemplate;

var HaSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaSlider, _PaperSliderClass);

  function HaSlider() {
    _classCallCheck(this, HaSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaSlider).apply(this, arguments));
  }

  _createClass(HaSlider, [{
    key: "_calcStep",
    value: function _calcStep(value) {
      if (!this.step) {
        return parseFloat(value);
      }

      var numSteps = Math.round((value - this.min) / this.step);
      var stepStr = this.step.toString();
      var stepPointAt = stepStr.indexOf(".");

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
        var precision = Math.pow(10, stepStr.length - stepPointAt - 1);
        return Math.round((numSteps * this.step + this.min) * precision) / precision;
      }

      return numSteps * this.step + this.min;
    }
  }], [{
    key: "template",
    get: function get() {
      if (!subTemplate) {
        subTemplate = PaperSliderClass.template.cloneNode(true);
        var superStyle = subTemplate.content.querySelector("style"); // append style to add mirroring of pin in RTL

        superStyle.appendChild(document.createTextNode("\n          :host([dir=\"rtl\"]) #sliderContainer.pin.expand > .slider-knob > .slider-knob-inner::after {\n            -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n            }\n        "));
      }

      return subTemplate;
    }
  }]);

  return HaSlider;
}(PaperSliderClass);

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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          @apply --paper-font-common-base;\n        }\n\n        paper-input {\n          width: 30px;\n          text-align: center;\n          --paper-input-container-input: {\n            /* Damn you firefox\n             * Needed to hide spin num in firefox\n             * http://stackoverflow.com/questions/3790935/can-i-hide-the-html5-number-input-s-spin-box\n             */\n            -moz-appearance: textfield;\n            @apply --paper-time-input-cotnainer;\n          }\n          --paper-input-container-input-webkit-spinner: {\n            -webkit-appearance: none;\n            margin: 0;\n            display: none;\n          }\n          --paper-input-container-shared-input-style_-_-webkit-appearance: textfield;\n        }\n\n        paper-dropdown-menu {\n          width: 55px;\n          padding: 0;\n          /* Force ripple to use the whole container */\n          --paper-dropdown-menu-ripple: {\n            color: var(\n              --paper-time-input-dropdown-ripple-color,\n              var(--primary-color)\n            );\n          }\n          --paper-input-container-input: {\n            @apply --paper-font-button;\n            text-align: center;\n            padding-left: 5px;\n            @apply --paper-time-dropdown-input-cotnainer;\n          }\n          --paper-input-container-underline: {\n            border-color: transparent;\n          }\n          --paper-input-container-underline-focus: {\n            border-color: transparent;\n          }\n        }\n\n        paper-item {\n          cursor: pointer;\n          text-align: center;\n          font-size: 14px;\n        }\n\n        paper-listbox {\n          padding: 0;\n        }\n\n        label {\n          @apply --paper-font-caption;\n        }\n\n        .time-input-wrap {\n          @apply --layout-horizontal;\n          @apply --layout-no-wrap;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n      </style>\n\n      <label hidden$=\"[[hideLabel]]\">[[label]]</label>\n      <div class=\"time-input-wrap\">\n        <!-- Hour Input -->\n        <paper-input\n          id=\"hour\"\n          type=\"number\"\n          value=\"{{hour}}\"\n          on-change=\"_shouldFormatHour\"\n          required=\"\"\n          auto-validate=\"[[autoValidate]]\"\n          prevent-invalid-input=\"\"\n          maxlength=\"2\"\n          max=\"[[_computeHourMax(format)]]\"\n          min=\"0\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n          <span suffix=\"\" slot=\"suffix\">:</span>\n        </paper-input>\n\n        <!-- Min Input -->\n        <paper-input\n          id=\"min\"\n          type=\"number\"\n          value=\"{{min}}\"\n          on-change=\"_formatMin\"\n          required=\"\"\n          auto-validate=\"[[autoValidate]]\"\n          prevent-invalid-input=\"\"\n          maxlength=\"2\"\n          max=\"59\"\n          min=\"0\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n        </paper-input>\n\n        <!-- Dropdown Menu -->\n        <paper-dropdown-menu\n          id=\"dropdown\"\n          required=\"\"\n          hidden$=\"[[_equal(format, 24)]]\"\n          no-label-float=\"\"\n          disabled=\"[[disabled]]\"\n        >\n          <paper-listbox\n            attr-for-selected=\"name\"\n            selected=\"{{amPm}}\"\n            slot=\"dropdown-content\"\n          >\n            <paper-item name=\"AM\">AM</paper-item>\n            <paper-item name=\"PM\">PM</paper-item>\n          </paper-listbox>\n        </paper-dropdown-menu>\n      </div>\n    "]);

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






var PaperTimeInput =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(PaperTimeInput, _PolymerElement);

  function PaperTimeInput() {
    _classCallCheck(this, PaperTimeInput);

    return _possibleConstructorReturn(this, _getPrototypeOf(PaperTimeInput).apply(this, arguments));
  }

  _createClass(PaperTimeInput, [{
    key: "validate",

    /**
     * Validate the inputs
     * @return {boolean}
     */
    value: function validate() {
      var valid = true; // Validate hour & min fields

      if (!this.$.hour.validate() | !this.$.min.validate()) {
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

  }, {
    key: "_computeTime",
    value: function _computeTime(min, hour, amPm) {
      if (hour && min) {
        // No ampm on 24 hr time
        if (this.format === 24) {
          amPm = "";
        }

        return hour + ":" + min + " " + amPm;
      }

      return undefined;
    }
    /**
     * Format min
     */

  }, {
    key: "_formatMin",
    value: function _formatMin() {
      if (this.min.toString().length === 1) {
        this.min = this.min < 10 ? "0" + this.min : this.min;
      }
    }
    /**
     * Hour needs a leading zero in 24hr format
     */

  }, {
    key: "_shouldFormatHour",
    value: function _shouldFormatHour() {
      if (this.format === 24 && this.hour.toString().length === 1) {
        this.hour = this.hour < 10 ? "0" + this.hour : this.hour;
      }
    }
    /**
     * 24 hour format has a max hr of 23
     */

  }, {
    key: "_computeHourMax",
    value: function _computeHourMax(format) {
      if (format === 12) {
        return format;
      }

      return 23;
    }
  }, {
    key: "_equal",
    value: function _equal(n1, n2) {
      return n1 === n2;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
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
          computed: "_computeTime(min, hour, amPm)"
        }
      };
    }
  }]);

  return PaperTimeInput;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"]);
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
var hassUrl = "".concat(location.protocol, "//").concat(location.host);
var getSignedPath = function getSignedPath(hass, path) {
  return hass.callWS({
    type: "auth/sign_path",
    path: path
  });
};
var fetchAuthProviders = function fetchAuthProviders() {
  return fetch("/auth/providers", {
    credentials: "same-origin"
  });
};

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


var CAMERA_SUPPORT_ON_OFF = 1;
var CAMERA_SUPPORT_STREAM = 2;
var computeMJPEGStreamUrl = function computeMJPEGStreamUrl(entity) {
  return "/api/camera_proxy_stream/".concat(entity.entity_id, "?token=").concat(entity.attributes.access_token);
};
var fetchThumbnailUrlWithCache = function fetchThumbnailUrlWithCache(hass, entityId) {
  return Object(_common_util_time_cache_function_promise__WEBPACK_IMPORTED_MODULE_0__["timeCachePromiseFunc"])("_cameraTmbUrl", 9000, fetchThumbnailUrl, hass, entityId);
};
var fetchThumbnailUrl = function fetchThumbnailUrl(hass, entityId) {
  return Object(_auth__WEBPACK_IMPORTED_MODULE_1__["getSignedPath"])(hass, "/api/camera_proxy/".concat(entityId)).then(function (_ref) {
    var path = _ref.path;
    return path;
  });
};
var fetchThumbnail = function fetchThumbnail(hass, entityId) {
  // tslint:disable-next-line: no-console
  console.warn("This method has been deprecated.");
  return hass.callWS({
    type: "camera_thumbnail",
    entity_id: entityId
  });
};
var fetchStreamUrl = function fetchStreamUrl(hass, entityId, format) {
  var data = {
    type: "camera/stream",
    entity_id: entityId
  };

  if (format) {
    // @ts-ignore
    data.format = format;
  }

  return hass.callWS(data);
};
var fetchCameraPrefs = function fetchCameraPrefs(hass, entityId) {
  return hass.callWS({
    type: "camera/get_prefs",
    entity_id: entityId
  });
};
var updateCameraPrefs = function updateCameraPrefs(hass, entityId, prefs) {
  return hass.callWS(Object.assign({
    type: "camera/update_prefs",
    entity_id: entityId
  }, prefs));
};

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



var computeEntityRegistryName = function computeEntityRegistryName(hass, entry) {
  if (entry.name) {
    return entry.name;
  }

  var state = hass.states[entry.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["default"])(state) : null;
};
var updateEntityRegistryEntry = function updateEntityRegistryEntry(hass, entityId, updates) {
  return hass.callWS(Object.assign({
    type: "config/entity_registry/update",
    entity_id: entityId
  }, updates));
};
var removeEntityRegistryEntry = function removeEntityRegistryEntry(hass, entityId) {
  return hass.callWS({
    type: "config/entity_registry/remove",
    entity_id: entityId
  });
};

var fetchEntityRegistry = function fetchEntityRegistry(conn) {
  return conn.sendMessagePromise({
    type: "config/entity_registry/list"
  });
};

var subscribeEntityRegistryUpdates = function subscribeEntityRegistryUpdates(conn, store) {
  return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
    return fetchEntityRegistry(conn).then(function (entities) {
      return store.setState(entities, true);
    });
  }, 500, true), "entity_registry_updated");
};

var subscribeEntityRegistry = function subscribeEntityRegistry(conn, onChange) {
  return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_entityRegistry", fetchEntityRegistry, subscribeEntityRegistryUpdates, conn, onChange);
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
var setInputSelectOption = function setInputSelectOption(hass, entity, option) {
  return hass.callService("input_select", "select_option", {
    option: option,
    entity_id: entity
  });
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
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "__computeLocalize",
        value: function __computeLocalize(localize) {
          return localize;
        }
      }], [{
        key: "properties",
        get: function get() {
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
      }]);

      return _class;
    }(superClass)
  );
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


/* eslint-enable no-bitwise */

var CoverEntity =
/*#__PURE__*/
function () {
  function CoverEntity(hass, stateObj) {
    _classCallCheck(this, CoverEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(CoverEntity, [{
    key: "openCover",
    value: function openCover() {
      this.callService("open_cover");
    }
  }, {
    key: "closeCover",
    value: function closeCover() {
      this.callService("close_cover");
    }
  }, {
    key: "stopCover",
    value: function stopCover() {
      this.callService("stop_cover");
    }
  }, {
    key: "openCoverTilt",
    value: function openCoverTilt() {
      this.callService("open_cover_tilt");
    }
  }, {
    key: "closeCoverTilt",
    value: function closeCoverTilt() {
      this.callService("close_cover_tilt");
    }
  }, {
    key: "stopCoverTilt",
    value: function stopCoverTilt() {
      this.callService("stop_cover_tilt");
    }
  }, {
    key: "setCoverPosition",
    value: function setCoverPosition(position) {
      this.callService("set_cover_position", {
        position: position
      });
    }
  }, {
    key: "setCoverTiltPosition",
    value: function setCoverTiltPosition(tiltPosition) {
      this.callService("set_cover_tilt_position", {
        tilt_position: tiltPosition
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("cover", service, data);
    }
  }, {
    key: "isFullyOpen",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 100;
      }

      return this.stateObj.state === "open";
    }
  }, {
    key: "isFullyClosed",
    get: function get() {
      if (this._attr.current_position !== undefined) {
        return this._attr.current_position === 0;
      }

      return this.stateObj.state === "closed";
    }
  }, {
    key: "isFullyOpenTilt",
    get: function get() {
      return this._attr.current_tilt_position === 100;
    }
  }, {
    key: "isFullyClosedTilt",
    get: function get() {
      return this._attr.current_tilt_position === 0;
    }
  }, {
    key: "isOpening",
    get: function get() {
      return this.stateObj.state === "opening";
    }
  }, {
    key: "isClosing",
    get: function get() {
      return this.stateObj.state === "closing";
    }
  }, {
    key: "supportsOpen",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsClose",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2);
    }
  }, {
    key: "supportsSetPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsStop",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsOpenTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsCloseTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsStopTilt",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 64);
    }
  }, {
    key: "supportsSetTiltPosition",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "isTiltOnly",
    get: function get() {
      var supportsCover = this.supportsOpen || this.supportsClose || this.supportsStop;
      var supportsTilt = this.supportsOpenTilt || this.supportsCloseTilt || this.supportsStopTilt;
      return supportsTilt && !supportsCover;
    }
  }]);

  return CoverEntity;
}();


var supportsOpen = function supportsOpen(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 1);
};
var supportsClose = function supportsClose(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 2);
};
var supportsSetPosition = function supportsSetPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 4);
};
var supportsStop = function supportsStop(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 8);
};
var supportsOpenTilt = function supportsOpenTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 16);
};
var supportsCloseTilt = function supportsCloseTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 32);
};
var supportsStopTilt = function supportsStopTilt(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 64);
};
var supportsSetTiltPosition = function supportsSetTiltPosition(stateObj) {
  return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, 128);
};
function isTiltOnly(stateObj) {
  var supportsCover = supportsOpen(stateObj) || supportsClose(stateObj) || supportsStop(stateObj);
  var supportsTilt = supportsOpenTilt(stateObj) || supportsCloseTilt(stateObj) || supportsStopTilt(stateObj);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var MediaPlayerEntity =
/*#__PURE__*/
function () {
  function MediaPlayerEntity(hass, stateObj) {
    _classCallCheck(this, MediaPlayerEntity);

    this.hass = hass;
    this.stateObj = stateObj;
    this._attr = stateObj.attributes;
    this._feat = this._attr.supported_features;
  }

  _createClass(MediaPlayerEntity, [{
    key: "mediaPlayPause",
    value: function mediaPlayPause() {
      this.callService("media_play_pause");
    }
  }, {
    key: "nextTrack",
    value: function nextTrack() {
      this.callService("media_next_track");
    }
  }, {
    key: "playbackControl",
    value: function playbackControl() {
      this.callService("media_play_pause");
    }
  }, {
    key: "previousTrack",
    value: function previousTrack() {
      this.callService("media_previous_track");
    }
  }, {
    key: "setVolume",
    value: function setVolume(volume) {
      this.callService("volume_set", {
        volume_level: volume
      });
    }
  }, {
    key: "togglePower",
    value: function togglePower() {
      if (this.isOff) {
        this.turnOn();
      } else {
        this.turnOff();
      }
    }
  }, {
    key: "turnOff",
    value: function turnOff() {
      this.callService("turn_off");
    }
  }, {
    key: "turnOn",
    value: function turnOn() {
      this.callService("turn_on");
    }
  }, {
    key: "volumeDown",
    value: function volumeDown() {
      this.callService("volume_down");
    }
  }, {
    key: "volumeMute",
    value: function volumeMute(mute) {
      if (!this.supportsVolumeMute) {
        throw new Error("Muting volume not supported");
      }

      this.callService("volume_mute", {
        is_volume_muted: mute
      });
    }
  }, {
    key: "volumeUp",
    value: function volumeUp() {
      this.callService("volume_up");
    }
  }, {
    key: "selectSource",
    value: function selectSource(source) {
      this.callService("select_source", {
        source: source
      });
    }
  }, {
    key: "selectSoundMode",
    value: function selectSoundMode(soundMode) {
      this.callService("select_sound_mode", {
        sound_mode: soundMode
      });
    } // helper method

  }, {
    key: "callService",
    value: function callService(service) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      data.entity_id = this.stateObj.entity_id;
      this.hass.callService("media_player", service, data);
    }
  }, {
    key: "isOff",
    get: function get() {
      return this.stateObj.state === "off";
    }
  }, {
    key: "isIdle",
    get: function get() {
      return this.stateObj.state === "idle";
    }
  }, {
    key: "isMuted",
    get: function get() {
      return this._attr.is_volume_muted;
    }
  }, {
    key: "isPaused",
    get: function get() {
      return this.stateObj.state === "paused";
    }
  }, {
    key: "isPlaying",
    get: function get() {
      return this.stateObj.state === "playing";
    }
  }, {
    key: "isMusic",
    get: function get() {
      return this._attr.media_content_type === "music";
    }
  }, {
    key: "isTVShow",
    get: function get() {
      return this._attr.media_content_type === "tvshow";
    }
  }, {
    key: "hasMediaControl",
    get: function get() {
      return ["playing", "paused", "unknown", "on"].indexOf(this.stateObj.state) !== -1;
    }
  }, {
    key: "volumeSliderValue",
    get: function get() {
      return this._attr.volume_level * 100;
    }
  }, {
    key: "showProgress",
    get: function get() {
      return (this.isPlaying || this.isPaused) && "media_duration" in this.stateObj.attributes && "media_position" in this.stateObj.attributes && "media_position_updated_at" in this.stateObj.attributes;
    }
  }, {
    key: "currentProgress",
    get: function get() {
      var progress = this._attr.media_position;

      if (this.isPlaying) {
        progress += (Date.now() - new Date(this._attr.media_position_updated_at).getTime()) / 1000.0;
      }

      return progress;
    }
  }, {
    key: "supportsPause",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1);
    }
  }, {
    key: "supportsVolumeSet",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 4);
    }
  }, {
    key: "supportsVolumeMute",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 8);
    }
  }, {
    key: "supportsPreviousTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16);
    }
  }, {
    key: "supportsNextTrack",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 32);
    }
  }, {
    key: "supportsTurnOn",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 128);
    }
  }, {
    key: "supportsTurnOff",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 256);
    }
  }, {
    key: "supportsPlayMedia",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 512);
    }
  }, {
    key: "supportsVolumeButtons",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 1024);
    }
  }, {
    key: "supportsSelectSource",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 2048);
    }
  }, {
    key: "supportsSelectSoundMode",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 65536);
    }
  }, {
    key: "supportsPlay",
    get: function get() {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(this.stateObj, 16384);
    }
  }, {
    key: "primaryTitle",
    get: function get() {
      return this._attr.media_title;
    }
  }, {
    key: "secondaryTitle",
    get: function get() {
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
  }, {
    key: "source",
    get: function get() {
      return this._attr.source;
    }
  }, {
    key: "sourceList",
    get: function get() {
      return this._attr.source_list;
    }
  }, {
    key: "soundMode",
    get: function get() {
      return this._attr.sound_mode;
    }
  }, {
    key: "soundModeList",
    get: function get() {
      return this._attr.sound_mode_list;
    }
  }]);

  return MediaPlayerEntity;
}();



/***/ })

}]);
//# sourceMappingURL=more-info-dialog~panel-lovelace.chunk.js.map