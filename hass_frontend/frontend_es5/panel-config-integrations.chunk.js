(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-integrations"],{

/***/ "./node_modules/@polymer/paper-item/paper-icon-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-icon-item.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"paper-item-shared-styles\"></style>\n    <style>\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n        @apply --paper-icon-item;\n      }\n\n      .content-icon {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n\n        width: var(--paper-item-icon-width, 56px);\n        @apply --paper-item-icon;\n      }\n    </style>\n\n    <div id=\"contentIcon\" class=\"content-icon\">\n      <slot name=\"item-icon\"></slot>\n    </div>\n    <slot></slot>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
`<paper-icon-item>` is a convenience element to make an item with icon. It is an
interactive list item with a fixed-width icon area, according to Material
Design. This is useful if the icons are of varying widths, but you want the item
bodies to line up. Use this like a `<paper-item>`. The child node with the slot
name `item-icon` is placed in the icon area.

    <paper-icon-item>
      <iron-icon icon="favorite" slot="item-icon"></iron-icon>
      Favorite
    </paper-icon-item>
    <paper-icon-item>
      <div class="avatar" slot="item-icon"></div>
      Avatar
    </paper-icon-item>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-icon-width` | Width of the icon area | `56px`
`--paper-item-icon` | Mixin applied to the icon area | `{}`
`--paper-icon-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-icon-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperItemBehavior"]]
});

/***/ }),

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        overflow: hidden; /* needed for text-overflow: ellipsis to work on ff */\n        @apply --layout-vertical;\n        @apply --layout-center-justified;\n        @apply --layout-flex;\n      }\n\n      :host([two-line]) {\n        min-height: var(--paper-item-body-two-line-min-height, 72px);\n      }\n\n      :host([three-line]) {\n        min-height: var(--paper-item-body-three-line-min-height, 88px);\n      }\n\n      :host > ::slotted(*) {\n        overflow: hidden;\n        text-overflow: ellipsis;\n        white-space: nowrap;\n      }\n\n      :host > ::slotted([secondary]) {\n        @apply --paper-font-body1;\n\n        color: var(--paper-item-body-secondary-color, var(--secondary-text-color));\n\n        @apply --paper-item-body-secondary;\n      }\n    </style>\n\n    <slot></slot>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-item-body'
});

/***/ }),

/***/ "./src/common/string/compare.ts":
/*!**************************************!*\
  !*** ./src/common/string/compare.ts ***!
  \**************************************/
/*! exports provided: compare, caseInsensitiveCompare */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "compare", function() { return compare; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "caseInsensitiveCompare", function() { return caseInsensitiveCompare; });
var compare = function compare(a, b) {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
var caseInsensitiveCompare = function caseInsensitiveCompare(a, b) {
  return compare(a.toLowerCase(), b.toLowerCase());
};

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

/***/ "./src/data/area_registry.ts":
/*!***********************************!*\
  !*** ./src/data/area_registry.ts ***!
  \***********************************/
/*! exports provided: createAreaRegistryEntry, updateAreaRegistryEntry, deleteAreaRegistryEntry, subscribeAreaRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAreaRegistryEntry", function() { return createAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateAreaRegistryEntry", function() { return updateAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAreaRegistryEntry", function() { return deleteAreaRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeAreaRegistry", function() { return subscribeAreaRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");



var createAreaRegistryEntry = function createAreaRegistryEntry(hass, values) {
  return hass.callWS(Object.assign({
    type: "config/area_registry/create"
  }, values));
};
var updateAreaRegistryEntry = function updateAreaRegistryEntry(hass, areaId, updates) {
  return hass.callWS(Object.assign({
    type: "config/area_registry/update",
    area_id: areaId
  }, updates));
};
var deleteAreaRegistryEntry = function deleteAreaRegistryEntry(hass, areaId) {
  return hass.callWS({
    type: "config/area_registry/delete",
    area_id: areaId
  });
};

var fetchAreaRegistry = function fetchAreaRegistry(conn) {
  return conn.sendMessagePromise({
    type: "config/area_registry/list"
  }).then(function (areas) {
    return areas.sort(function (ent1, ent2) {
      return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name);
    });
  });
};

var subscribeAreaRegistryUpdates = function subscribeAreaRegistryUpdates(conn, store) {
  return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(function () {
    return fetchAreaRegistry(conn).then(function (areas) {
      return store.setState(areas, true);
    });
  }, 500, true), "area_registry_updated");
};

var subscribeAreaRegistry = function subscribeAreaRegistry(conn, onChange) {
  return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);
};

/***/ }),

/***/ "./src/data/config_entries.ts":
/*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
/*! exports provided: createConfigFlow, fetchConfigFlow, handleConfigFlowStep, deleteConfigFlow, getConfigFlowsInProgress, getConfigFlowHandlers, subscribeConfigFlowInProgress, getConfigEntries, localizeConfigFlowTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfigFlow", function() { return createConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFlow", function() { return fetchConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfigFlowStep", function() { return handleConfigFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigFlow", function() { return deleteConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowsInProgress", function() { return getConfigFlowsInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowHandlers", function() { return getConfigFlowHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfigFlowInProgress", function() { return subscribeConfigFlowInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntries", function() { return getConfigEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeConfigFlowTitle", function() { return localizeConfigFlowTitle; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");


var createConfigFlow = function createConfigFlow(hass, handler) {
  return hass.callApi("POST", "config/config_entries/flow", {
    handler: handler
  });
};
var fetchConfigFlow = function fetchConfigFlow(hass, flowId) {
  return hass.callApi("GET", "config/config_entries/flow/".concat(flowId));
};
var handleConfigFlowStep = function handleConfigFlowStep(hass, flowId, data) {
  return hass.callApi("POST", "config/config_entries/flow/".concat(flowId), data);
};
var deleteConfigFlow = function deleteConfigFlow(hass, flowId) {
  return hass.callApi("DELETE", "config/config_entries/flow/".concat(flowId));
};
var getConfigFlowsInProgress = function getConfigFlowsInProgress(hass) {
  return hass.callApi("GET", "config/config_entries/flow");
};
var getConfigFlowHandlers = function getConfigFlowHandlers(hass) {
  return hass.callApi("GET", "config/config_entries/flow_handlers");
};

var fetchConfigFlowInProgress = function fetchConfigFlowInProgress(conn) {
  return conn.sendMessagePromise({
    type: "config/entity_registry/list"
  });
};

var subscribeConfigFlowInProgressUpdates = function subscribeConfigFlowInProgressUpdates(conn, store) {
  return Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(conn.subscribeEvents(function () {
    return fetchConfigFlowInProgress(conn).then(function (flows) {
      return store.setState(flows, true);
    });
  }, 500, true), "config_entry_discovered");
};

var subscribeConfigFlowInProgress = function subscribeConfigFlowInProgress(hass, onChange) {
  return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates, hass.connection, onChange);
};
var getConfigEntries = function getConfigEntries(hass) {
  return hass.callApi("GET", "config/config_entries/entry");
};
var localizeConfigFlowTitle = function localizeConfigFlowTitle(localize, flow) {
  var placeholders = flow.context.title_placeholders || {};
  var placeholderKeys = Object.keys(placeholders);

  if (placeholderKeys.length === 0) {
    return localize("component.".concat(flow.handler, ".config.title"));
  }

  var args = [];
  placeholderKeys.forEach(function (key) {
    args.push(key);
    args.push(placeholders[key]);
  });
  return localize.apply(void 0, ["component.".concat(flow.handler, ".config.flow_title")].concat(args));
};

/***/ }),

/***/ "./src/data/device_registry.ts":
/*!*************************************!*\
  !*** ./src/data/device_registry.ts ***!
  \*************************************/
/*! exports provided: updateDeviceRegistryEntry, subscribeDeviceRegistry */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateDeviceRegistryEntry", function() { return updateDeviceRegistryEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeDeviceRegistry", function() { return subscribeDeviceRegistry; });
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");


var updateDeviceRegistryEntry = function updateDeviceRegistryEntry(hass, deviceId, updates) {
  return hass.callWS(Object.assign({
    type: "config/device_registry/update",
    device_id: deviceId
  }, updates));
};

var fetchDeviceRegistry = function fetchDeviceRegistry(conn) {
  return conn.sendMessagePromise({
    type: "config/device_registry/list"
  });
};

var subscribeDeviceRegistryUpdates = function subscribeDeviceRegistryUpdates(conn, store) {
  return conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
    return fetchDeviceRegistry(conn).then(function (devices) {
      return store.setState(devices, true);
    });
  }, 500, true), "device_registry_updated");
};

var subscribeDeviceRegistry = function subscribeDeviceRegistry(conn, onChange) {
  return Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);
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

/***/ "./src/dialogs/config-flow/show-dialog-config-flow.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-config-flow.ts ***!
  \************************************************************/
/*! exports provided: loadConfigFlowDialog, showConfigFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadConfigFlowDialog", function() { return loadConfigFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showConfigFlowDialog", function() { return showConfigFlowDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadConfigFlowDialog = function loadConfigFlowDialog() {
  return Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-calendar~panel-config-cus~ab938ece"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-kiosk~panel-lovelace~pane~abfacb2f"), __webpack_require__.e("vendors~dialog-config-flow~panel-config-automation~panel-config-cloud~panel-config-integrations~pane~9cfecaa0"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~onboarding-core-config"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-config-flow */ "./src/dialogs/config-flow/dialog-config-flow.ts"));
};
var showConfigFlowDialog = function showConfigFlowDialog(element, dialogParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-config-flow",
    dialogImport: loadConfigFlowDialog,
    dialogParams: dialogParams
  });
};

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }


 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

var EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "fire",

        /**
        * Dispatches a custom event with an optional detail value.
        *
        * @param {string} type Name of event type.
        * @param {*=} detail Detail value containing event-specific
        *   payload.
        * @param {{ bubbles: (boolean|undefined),
                 cancelable: (boolean|undefined),
                  composed: (boolean|undefined) }=}
        *  options Object specifying options.  These may include:
        *  `bubbles` (boolean, defaults to `true`),
        *  `cancelable` (boolean, defaults to false), and
        *  `node` on which to fire the event (HTMLElement, defaults to `this`).
        * @return {Event} The new event that was fired.
        */
        value: function fire(type, detail, options) {
          options = options || {};
          return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
        }
      }]);

      return _class;
    }(superClass)
  );
});

/***/ }),

/***/ "./src/panels/config/integrations/ha-ce-entities-card.js":
/*!***************************************************************!*\
  !*** ./src/panels/config/integrations/ha-ce-entities-card.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/entity_registry */ "./src/data/entity_registry.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-card {\n          flex: 1 0 100%;\n          padding-bottom: 8px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n      </style>\n      <ha-card header=\"[[heading]]\">\n        <template is=\"dom-repeat\" items=\"[[entities]]\" as=\"entity\">\n          <paper-icon-item on-click=\"_openMoreInfo\">\n            <state-badge\n              state-obj=\"[[_computeStateObj(entity, hass)]]\"\n              slot=\"item-icon\"\n            ></state-badge>\n            <paper-item-body>\n              <div class=\"name\">[[_computeEntityName(entity, hass)]]</div>\n              <div class=\"secondary entity-id\">[[entity.entity_id]]</div>\n            </paper-item-body>\n          </paper-icon-item>\n        </template>\n      </ha-card>\n    "]);

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
 * @appliesMixin LocalizeMixIn
 * @appliesMixin EventsMixin
 */

var HaCeEntitiesCard =
/*#__PURE__*/
function (_LocalizeMixIn) {
  _inherits(HaCeEntitiesCard, _LocalizeMixIn);

  function HaCeEntitiesCard() {
    _classCallCheck(this, HaCeEntitiesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCeEntitiesCard).apply(this, arguments));
  }

  _createClass(HaCeEntitiesCard, [{
    key: "_computeStateObj",
    value: function _computeStateObj(entity, hass) {
      return hass.states[entity.entity_id];
    }
  }, {
    key: "_computeEntityName",
    value: function _computeEntityName(entity, hass) {
      return Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_9__["computeEntityRegistryName"])(hass, entity) || "(".concat(this.localize("ui.panel.config.integrations.config_entry.entity_unavailable"), ")");
    }
  }, {
    key: "_openMoreInfo",
    value: function _openMoreInfo(ev) {
      this.fire("hass-more-info", {
        entityId: ev.model.entity.entity_id
      });
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
        heading: String,
        entities: Array,
        hass: Object
      };
    }
  }]);

  return HaCeEntitiesCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])));

customElements.define("ha-ce-entities-card", HaCeEntitiesCard);

/***/ }),

/***/ "./src/panels/config/integrations/ha-config-entries-dashboard.js":
/*!***********************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-entries-dashboard.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_entity_ha_state_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/entity/ha-state-icon */ "./src/components/entity/ha-state-icon.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_icon_next__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../components/ha-icon-next */ "./src/components/ha-icon-next.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../../data/config_entries */ "./src/data/config_entries.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex ha-style\">\n        ha-card {\n          overflow: hidden;\n        }\n        mwc-button {\n          top: 3px;\n          margin-right: -0.57em;\n        }\n        .config-entry-row {\n          display: flex;\n          padding: 0 16px;\n        }\n        ha-state-icon {\n          cursor: pointer;\n        }\n        .configured a {\n          color: var(--primary-text-color);\n          text-decoration: none;\n        }\n        paper-fab {\n          position: fixed;\n          bottom: 16px;\n          right: 16px;\n          z-index: 1;\n        }\n\n        paper-fab[is-wide] {\n          bottom: 24px;\n          right: 24px;\n        }\n\n        paper-fab[rtl] {\n          right: auto;\n          left: 16px;\n        }\n\n        paper-fab[rtl][is-wide] {\n          bottom: 24px;\n          right: auto;\n          left: 24px;\n        }\n      </style>\n\n      <hass-subpage\n        header=\"[[localize('ui.panel.config.integrations.caption')]]\"\n      >\n        <template is=\"dom-if\" if=\"[[progress.length]]\">\n          <ha-config-section>\n            <span slot=\"header\"\n              >[[localize('ui.panel.config.integrations.discovered')]]</span\n            >\n            <ha-card>\n              <template is=\"dom-repeat\" items=\"[[progress]]\">\n                <div class=\"config-entry-row\">\n                  <paper-item-body>\n                    [[_computeActiveFlowTitle(localize, item)]]\n                  </paper-item-body>\n                  <mwc-button on-click=\"_continueFlow\"\n                    >[[localize('ui.panel.config.integrations.configure')]]</mwc-button\n                  >\n                </div>\n              </template>\n            </ha-card>\n          </ha-config-section>\n        </template>\n\n        <ha-config-section class=\"configured\">\n          <span slot=\"header\"\n            >[[localize('ui.panel.config.integrations.configured')]]</span\n          >\n          <ha-card>\n            <template is=\"dom-if\" if=\"[[!entries.length]]\">\n              <div class=\"config-entry-row\">\n                <paper-item-body two-line>\n                  <div>[[localize('ui.panel.config.integrations.none')]]</div>\n                </paper-item-body>\n              </div>\n            </template>\n            <template is=\"dom-repeat\" items=\"[[entries]]\">\n              <a href=\"/config/integrations/[[item.entry_id]]\">\n                <paper-item>\n                  <paper-item-body two-line>\n                    <div>\n                      [[_computeIntegrationTitle(localize, item.domain)]]:\n                      [[item.title]]\n                    </div>\n                    <div secondary>\n                      <template\n                        is=\"dom-repeat\"\n                        items=\"[[_computeConfigEntryEntities(hass, item, entities)]]\"\n                      >\n                        <span>\n                          <ha-state-icon\n                            state-obj=\"[[item]]\"\n                            on-click=\"_handleMoreInfo\"\n                          ></ha-state-icon>\n                          <paper-tooltip position=\"bottom\"\n                            >[[_computeStateName(item)]]</paper-tooltip\n                          >\n                        </span>\n                      </template>\n                    </div>\n                  </paper-item-body>\n                  <ha-icon-next></ha-icon-next>\n                </paper-item>\n              </a>\n            </template>\n          </ha-card>\n        </ha-config-section>\n\n        <paper-fab\n          icon=\"hass:plus\"\n          title=\"[[localize('ui.panel.config.integrations.new')]]\"\n          on-click=\"_createFlow\"\n          is-wide$=\"[[isWide]]\"\n          rtl$=\"[[rtl]]\"\n        ></paper-fab>\n      </hass-subpage>\n    "]);

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






















/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaConfigManagerDashboard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaConfigManagerDashboard, _LocalizeMixin);

  function HaConfigManagerDashboard() {
    _classCallCheck(this, HaConfigManagerDashboard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigManagerDashboard).apply(this, arguments));
  }

  _createClass(HaConfigManagerDashboard, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(HaConfigManagerDashboard.prototype), "connectedCallback", this).call(this);

      Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__["loadConfigFlowDialog"])();
    }
  }, {
    key: "_createFlow",
    value: function _createFlow() {
      var _this = this;

      Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__["showConfigFlowDialog"])(this, {
        dialogClosedCallback: function dialogClosedCallback() {
          return _this.fire("hass-reload-entries");
        }
      });
    }
  }, {
    key: "_continueFlow",
    value: function _continueFlow(ev) {
      var _this2 = this;

      Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__["showConfigFlowDialog"])(this, {
        continueFlowId: ev.model.item.flow_id,
        dialogClosedCallback: function dialogClosedCallback() {
          return _this2.fire("hass-reload-entries");
        }
      });
    }
  }, {
    key: "_computeIntegrationTitle",
    value: function _computeIntegrationTitle(localize, integration) {
      return localize("component.".concat(integration, ".config.title"));
    }
  }, {
    key: "_computeActiveFlowTitle",
    value: function _computeActiveFlowTitle(localize, flow) {
      return Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_20__["localizeConfigFlowTitle"])(localize, flow);
    }
  }, {
    key: "_computeConfigEntryEntities",
    value: function _computeConfigEntryEntities(hass, configEntry, entities) {
      if (!entities) {
        return [];
      }

      var states = [];
      entities.forEach(function (entity) {
        if (entity.config_entry_id === configEntry.entry_id && entity.entity_id in hass.states) {
          states.push(hass.states[entity.entity_id]);
        }
      });
      return states;
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_18__["default"])(stateObj);
    }
  }, {
    key: "_handleMoreInfo",
    value: function _handleMoreInfo(ev) {
      this.fire("hass-more-info", {
        entityId: ev.model.item.entity_id
      });
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        isWide: Boolean,

        /**
         * Existing entries.
         */
        entries: Array,

        /**
         * Entity Registry entries.
         */
        entities: Array,

        /**
         * Current flows that are in progress and have not been started by a user.
         * For example, can be discovered devices that require more config.
         */
        progress: Array,
        handlers: Array,
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return HaConfigManagerDashboard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"])));

customElements.define("ha-config-entries-dashboard", HaConfigManagerDashboard);

/***/ }),

/***/ "./src/panels/config/integrations/ha-config-entry-page.js":
/*!****************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-entry-page.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _ha_device_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-device-card */ "./src/panels/config/integrations/ha-device-card.js");
/* harmony import */ var _ha_ce_entities_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-ce-entities-card */ "./src/panels/config/integrations/ha-ce-entities-card.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .content {\n          display: flex;\n          flex-wrap: wrap;\n          padding: 4px;\n          justify-content: center;\n        }\n        .card {\n          box-sizing: border-box;\n          display: flex;\n          flex: 1 0 300px;\n          min-width: 0;\n          max-width: 500px;\n          padding: 8px;\n        }\n      </style>\n      <hass-subpage header=\"[[configEntry.title]]\">\n        <paper-icon-button\n          slot=\"toolbar-icon\"\n          icon=\"hass:delete\"\n          on-click=\"_removeEntry\"\n        ></paper-icon-button>\n        <div class=\"content\">\n          <template\n            is=\"dom-if\"\n            if=\"[[_computeIsEmpty(_configEntryDevices, _noDeviceEntities)]]\"\n          >\n            <p>\n              [[localize('ui.panel.config.integrations.config_entry.no_devices')]]\n            </p>\n          </template>\n          <template is=\"dom-repeat\" items=\"[[_configEntryDevices]]\" as=\"device\">\n            <ha-device-card\n              class=\"card\"\n              hass=\"[[hass]]\"\n              areas=\"[[areas]]\"\n              devices=\"[[devices]]\"\n              device=\"[[device]]\"\n              entities=\"[[entities]]\"\n              narrow=\"[[narrow]]\"\n            ></ha-device-card>\n          </template>\n          <template is=\"dom-if\" if=\"[[_noDeviceEntities.length]]\">\n            <ha-ce-entities-card\n              class=\"card\"\n              heading=\"[[localize('ui.panel.config.integrations.config_entry.no_device')]]\"\n              entities=\"[[_noDeviceEntities]]\"\n              hass=\"[[hass]]\"\n              narrow=\"[[narrow]]\"\n            ></ha-ce-entities-card>\n          </template>\n        </div>\n      </hass-subpage>\n    "]);

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












var HaConfigEntryPage =
/*#__PURE__*/
function (_NavigateMixin) {
  _inherits(HaConfigEntryPage, _NavigateMixin);

  function HaConfigEntryPage() {
    _classCallCheck(this, HaConfigEntryPage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigEntryPage).apply(this, arguments));
  }

  _createClass(HaConfigEntryPage, [{
    key: "_computeConfigEntryDevices",
    value: function _computeConfigEntryDevices(configEntry, devices) {
      if (!devices) return [];
      return devices.filter(function (device) {
        return device.config_entries.includes(configEntry.entry_id);
      }).sort(function (dev1, dev2) {
        return !!dev1.hub_device_id - !!dev2.hub_device_id || Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(dev1.name, dev2.name);
      });
    }
  }, {
    key: "_computeNoDeviceEntities",
    value: function _computeNoDeviceEntities(configEntry, entities) {
      if (!entities) return [];
      return entities.filter(function (ent) {
        return !ent.device_id && ent.config_entry_id === configEntry.entry_id;
      });
    }
  }, {
    key: "_computeIsEmpty",
    value: function _computeIsEmpty(configEntryDevices, noDeviceEntities) {
      return configEntryDevices.length === 0 && noDeviceEntities.length === 0;
    }
  }, {
    key: "_removeEntry",
    value: function _removeEntry() {
      var _this = this;

      if (!confirm(this.localize("ui.panel.config.integrations.config_entry.delete_confirm"))) return;
      var entryId = this.configEntry.entry_id;
      this.hass.callApi("delete", "config/config_entries/entry/".concat(entryId)).then(function (result) {
        _this.fire("hass-reload-entries");

        if (result.require_restart) {
          alert(_this.localize("ui.panel.config.integrations.config_entry.restart_confirm"));
        }

        _this.navigate("/config/integrations/dashboard", true);
      });
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
        isWide: Boolean,
        narrow: Boolean,
        configEntry: {
          type: Object,
          value: null
        },
        _configEntryDevices: {
          type: Array,
          computed: "_computeConfigEntryDevices(configEntry, devices)"
        },

        /**
         * All entity registry entries for this config entry that do not belong
         * to a device.
         */
        _noDeviceEntities: {
          type: Array,
          computed: "_computeNoDeviceEntities(configEntry, entities)"
        },

        /**
         * Area registry entries
         */
        areas: Array,

        /**
         * Device registry entries
         */
        devices: Array,

        /**
         * Existing entries.
         */
        entries: Array,

        /**
         * Entity Registry entries.
         */
        entities: Array
      };
    }
  }]);

  return HaConfigEntryPage;
}(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]))));

customElements.define("ha-config-entry-page", HaConfigEntryPage);

/***/ }),

/***/ "./src/panels/config/integrations/ha-config-integrations.js":
/*!******************************************************************!*\
  !*** ./src/panels/config/integrations/ha-config-integrations.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _ha_config_entries_dashboard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-config-entries-dashboard */ "./src/panels/config/integrations/ha-config-entries-dashboard.js");
/* harmony import */ var _ha_config_entry_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-config-entry-page */ "./src/panels/config/integrations/ha-config-entry-page.js");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <app-route\n        route=\"[[route]]\"\n        pattern=\"/:page\"\n        data=\"{{_routeData}}\"\n        tail=\"{{_routeTail}}\"\n      ></app-route>\n\n      <template is=\"dom-if\" if=\"[[_configEntry]]\">\n        <ha-config-entry-page\n          hass=\"[[hass]]\"\n          config-entry=\"[[_configEntry]]\"\n          areas=\"[[_areas]]\"\n          entries=\"[[_entries]]\"\n          entities=\"[[_entities]]\"\n          devices=\"[[_devices]]\"\n          narrow=\"[[narrow]]\"\n        ></ha-config-entry-page>\n      </template>\n      <template is=\"dom-if\" if=\"[[!_configEntry]]\">\n        <ha-config-entries-dashboard\n          hass=\"[[hass]]\"\n          entries=\"[[_entries]]\"\n          entities=\"[[_entities]]\"\n          handlers=\"[[_handlers]]\"\n          progress=\"[[_progress]]\"\n        ></ha-config-entries-dashboard>\n      </template>\n    "]);

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












var HaConfigIntegrations =
/*#__PURE__*/
function (_NavigateMixin) {
  _inherits(HaConfigIntegrations, _NavigateMixin);

  function HaConfigIntegrations() {
    _classCallCheck(this, HaConfigIntegrations);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaConfigIntegrations).apply(this, arguments));
  }

  _createClass(HaConfigIntegrations, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaConfigIntegrations.prototype), "ready", this).call(this);

      this.addEventListener("hass-reload-entries", function () {
        return _this._loadData();
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(HaConfigIntegrations.prototype), "connectedCallback", this).call(this);

      this._loadData();

      this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeAreaRegistry"])(this.hass.connection, function (areas) {
        _this2._areas = areas;
      });
      this.hass.connection.subscribeEvents(function () {
        _this2._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(_this2._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(500), function () {
          return _this2._loadData();
        });
      }, "config_entry_discovered").then(function (unsub) {
        _this2._unsubEvents = unsub;
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaConfigIntegrations.prototype), "disconnectedCallback", this).call(this);

      if (this._unsubEvents) this._unsubEvents();
      if (this._unsubAreas) this._unsubAreas();
    }
  }, {
    key: "_loadData",
    value: function _loadData() {
      var _this3 = this;

      this.hass.callApi("get", "config/config_entries/entry").then(function (entries) {
        _this3._entries = entries.sort(function (conf1, conf2) {
          return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(conf1.title, conf2.title);
        });
      });
      this.hass.callApi("get", "config/config_entries/flow").then(function (progress) {
        _this3._progress = progress;
      });
      this.hass.callApi("get", "config/config_entries/flow_handlers").then(function (handlers) {
        _this3._handlers = handlers;
      });
      this.hass.callWS({
        type: "config/entity_registry/list"
      }).then(function (entities) {
        _this3._entities = entities;
      });
      this.hass.callWS({
        type: "config/device_registry/list"
      }).then(function (devices) {
        _this3._devices = devices;
      });
    }
  }, {
    key: "_computeConfigEntry",
    value: function _computeConfigEntry(routeData, entries) {
      return !!entries && !!routeData && entries.find(function (ent) {
        return ent.entry_id === routeData.page;
      });
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
        isWide: Boolean,
        narrow: Boolean,
        route: Object,
        _configEntry: {
          type: Object,
          computed: "_computeConfigEntry(_routeData, _entries)"
        },

        /**
         * Existing entries.
         */
        _entries: Array,

        /**
         * Entity Registry entries.
         */
        _entities: Array,

        /**
         * Device Registry entries.
         */
        _devices: Array,

        /**
         * Area Registry entries.
         */
        _areas: Array,

        /**
         * Current flows that are in progress and have not been started by a user.
         * For example, can be discovered devices that require more config.
         */
        _progress: Array,
        _handlers: Array,
        _routeData: Object,
        _routeTail: Object
      };
    }
  }]);

  return HaConfigIntegrations;
}(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-config-integrations", HaConfigIntegrations);

/***/ }),

/***/ "./src/panels/config/integrations/ha-device-card.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/integrations/ha-device-card.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_icon_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-icon-item */ "./node_modules/@polymer/paper-item/paper-icon-item.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _components_entity_state_badge__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/entity/state-badge */ "./src/components/entity/state-badge.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _data_device_registry__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../data/device_registry */ "./src/data/device_registry.ts");
/* harmony import */ var _data_area_registry__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../data/area_registry */ "./src/data/area_registry.ts");
/* harmony import */ var _show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./show-dialog-device-registry-detail */ "./src/panels/config/integrations/show-dialog-device-registry-detail.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host(:not([narrow])) .device-entities {\n          max-height: 225px;\n          overflow: auto;\n        }\n        ha-card {\n          flex: 1 0 100%;\n          padding-bottom: 10px;\n          min-width: 0;\n        }\n        .card-header {\n          display: flex;\n          justify-content: space-between;\n        }\n        .card-header .name {\n          width: 90%;\n        }\n        .device {\n          width: 30%;\n        }\n        .device .name {\n          font-weight: bold;\n        }\n        .device .model,\n        .device .manuf,\n        .device .area {\n          color: var(--secondary-text-color);\n        }\n        .area .extra-info .name {\n          color: var(--primary-text-color);\n        }\n        .extra-info {\n          margin-top: 8px;\n        }\n        paper-icon-item {\n          cursor: pointer;\n          padding-top: 4px;\n          padding-bottom: 4px;\n        }\n        .manuf,\n        .entity-id,\n        .area {\n          color: var(--secondary-text-color);\n        }\n      </style>\n      <ha-card>\n        <div class=\"card-header\">\n          <div class=\"name\">[[_deviceName(device)]]</div>\n          <paper-icon-button\n            icon=\"hass:settings\"\n            on-click=\"_gotoSettings\"\n          ></paper-icon-button>\n        </div>\n        <div class=\"card-content\">\n          <div class=\"info\">\n            <div class=\"model\">[[device.model]]</div>\n            <div class=\"manuf\">\n              [[localize('ui.panel.config.integrations.config_entry.manuf',\n              'manufacturer', device.manufacturer)]]\n            </div>\n            <template is=\"dom-if\" if=\"[[device.area_id]]\">\n              <div class=\"area\">\n                <div class=\"extra-info\">\n                  [[localize('ui.panel.config.integrations.device_registry.area')]]\n                  <span class=\"name\">{{_computeArea(areas, device)}}</span>\n                </div>\n              </div>\n            </template>\n          </div>\n          <template is=\"dom-if\" if=\"[[device.hub_device_id]]\">\n            <div class=\"extra-info\">\n              [[localize('ui.panel.config.integrations.config_entry.hub')]]\n              <span class=\"hub\"\n                >[[_computeDeviceName(devices, device.hub_device_id)]]</span\n              >\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[device.sw_version]]\">\n            <div class=\"extra-info\">\n              [[localize('ui.panel.config.integrations.config_entry.firmware',\n              'version', device.sw_version)]]\n            </div>\n          </template>\n        </div>\n\n        <div class=\"device-entities\">\n          <template\n            is=\"dom-repeat\"\n            items=\"[[_computeDeviceEntities(hass, device, entities)]]\"\n            as=\"entity\"\n          >\n            <paper-icon-item on-click=\"_openMoreInfo\">\n              <state-badge\n                state-obj=\"[[_computeStateObj(entity, hass)]]\"\n                slot=\"item-icon\"\n              ></state-badge>\n              <paper-item-body>\n                <div class=\"name\">[[_computeEntityName(entity, hass)]]</div>\n                <div class=\"secondary entity-id\">[[entity.entity_id]]</div>\n              </paper-item-body>\n            </paper-icon-item>\n          </template>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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



















function computeEntityName(hass, entity) {
  if (entity.name) return entity.name;
  var state = hass.states[entity.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["default"])(state) : null;
}
/*
 * @appliesMixin EventsMixin
 */


var HaDeviceCard =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaDeviceCard, _EventsMixin);

  function HaDeviceCard() {
    _classCallCheck(this, HaDeviceCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaDeviceCard).apply(this, arguments));
  }

  _createClass(HaDeviceCard, [{
    key: "firstUpdated",
    value: function firstUpdated(changedProps) {
      _get(_getPrototypeOf(HaDeviceCard.prototype), "firstUpdated", this).call(this, changedProps);

      Object(_show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__["loadDeviceRegistryDetailDialog"])();
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(HaDeviceCard.prototype), "connectedCallback", this).call(this);

      this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_15__["subscribeAreaRegistry"])(this.hass.connection, function (areas) {
        _this._areas = areas;
      });
      this._unsubDevices = Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_14__["subscribeDeviceRegistry"])(this.hass.connection, function (devices) {
        _this.devices = devices;
        _this.device = devices.find(function (device) {
          return device.id === _this.device.id;
        });
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaDeviceCard.prototype), "disconnectedCallback", this).call(this);

      if (this._unsubAreas) {
        this._unsubAreas();
      }

      if (this._unsubDevices) {
        this._unsubDevices();
      }
    }
  }, {
    key: "_computeArea",
    value: function _computeArea(areas, device) {
      if (!areas || !device || !device.area_id) {
        return "No Area";
      } // +1 because of "No Area" entry


      return areas.find(function (area) {
        return area.area_id === device.area_id;
      }).name;
    }
  }, {
    key: "_computeChildDevices",
    value: function _computeChildDevices(device, devices) {
      return devices.filter(function (dev) {
        return dev.hub_device_id === device.id;
      }).sort(function (dev1, dev2) {
        return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_13__["compare"])(dev1.name, dev2.name);
      });
    }
  }, {
    key: "_computeDeviceEntities",
    value: function _computeDeviceEntities(hass, device, entities) {
      return entities.filter(function (entity) {
        return entity.device_id === device.id;
      }).sort(function (ent1, ent2) {
        return Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_13__["compare"])(computeEntityName(hass, ent1) || "zzz".concat(ent1.entity_id), computeEntityName(hass, ent2) || "zzz".concat(ent2.entity_id));
      });
    }
  }, {
    key: "_computeStateObj",
    value: function _computeStateObj(entity, hass) {
      return hass.states[entity.entity_id];
    }
  }, {
    key: "_computeEntityName",
    value: function _computeEntityName(entity, hass) {
      return computeEntityName(hass, entity) || "(".concat(this.localize("ui.panel.config.integrations.config_entry.entity_unavailable"), ")");
    }
  }, {
    key: "_deviceName",
    value: function _deviceName(device) {
      return device.name_by_user || device.name;
    }
  }, {
    key: "_computeDeviceName",
    value: function _computeDeviceName(devices, deviceId) {
      var device = devices.find(function (dev) {
        return dev.id === deviceId;
      });
      return device ? this._deviceName(device) : "(".concat(this.localize("ui.panel.config.integrations.config_entry.device_unavailable"), ")");
    }
  }, {
    key: "_gotoSettings",
    value: function _gotoSettings() {
      var _this2 = this;

      var device = this.device;
      Object(_show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__["showDeviceRegistryDetailDialog"])(this, {
        device: device,
        updateEntry: function () {
          var _updateEntry = _asyncToGenerator(
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee(updates) {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_14__["updateDeviceRegistryEntry"])(_this2.hass, device.id, updates);

                  case 2:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee);
          }));

          function updateEntry(_x) {
            return _updateEntry.apply(this, arguments);
          }

          return updateEntry;
        }()
      });
    }
  }, {
    key: "_openMoreInfo",
    value: function _openMoreInfo(ev) {
      this.fire("hass-more-info", {
        entityId: ev.model.entity.entity_id
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        device: Object,
        devices: Array,
        areas: Array,
        entities: Array,
        hass: Object,
        narrow: {
          type: Boolean,
          reflectToAttribute: true
        },
        _childDevices: {
          type: Array,
          computed: "_computeChildDevices(device, devices)"
        }
      };
    }
  }]);

  return HaDeviceCard;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])));

customElements.define("ha-device-card", HaDeviceCard);

/***/ }),

/***/ "./src/panels/config/integrations/show-dialog-device-registry-detail.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/config/integrations/show-dialog-device-registry-detail.ts ***!
  \******************************************************************************/
/*! exports provided: loadDeviceRegistryDetailDialog, showDeviceRegistryDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDeviceRegistryDetailDialog", function() { return loadDeviceRegistryDetailDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showDeviceRegistryDetailDialog", function() { return showDeviceRegistryDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

var loadDeviceRegistryDetailDialog = function loadDeviceRegistryDetailDialog() {
  return Promise.all(/*! import() | device-registry-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("device-registry-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-device-registry-detail */ "./src/panels/config/integrations/dialog-device-registry-detail.ts"));
};
var showDeviceRegistryDetailDialog = function showDeviceRegistryDetailDialog(element, deviceRegistryDetailParams) {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-device-registry-detail",
    dialogImport: loadDeviceRegistryDetailDialog,
    dialogParams: deviceRegistryDetailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=panel-config-integrations.chunk.js.map