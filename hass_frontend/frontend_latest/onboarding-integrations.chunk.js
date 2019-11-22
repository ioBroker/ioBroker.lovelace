(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-integrations"],{

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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






/**

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function (icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function (src) {
    this._updateIcon();
  },
  _usesIconset: function () {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function () {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);

          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }

      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }

      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
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
const compare = (a, b) => {
  if (a < b) {
    return -1;
  }

  if (a > b) {
    return 1;
  }

  return 0;
};
const caseInsensitiveCompare = (a, b) => compare(a.toLowerCase(), b.toLowerCase());

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
const debounce = (func, wait, immediate = false) => {
  let timeout; // @ts-ignore

  return function (...args) {
    // tslint:disable:no-this-assignment
    // @ts-ignore
    const context = this;

    const later = () => {
      timeout = null;

      if (!immediate) {
        func.apply(context, args);
      }
    };

    const callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);

    if (callNow) {
      func.apply(context, args);
    }
  };
};

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
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // Not duplicate, this is for typing.
// tslint:disable-next-line

const ironIconClass = customElements.get("iron-icon");
let loaded = false;
class HaIcon extends ironIconClass {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "_iconsetName", void 0);
  }

  listen(node, eventName, methodName) {
    super.listen(node, eventName, methodName);

    if (!loaded && this._iconsetName === "mdi") {
      loaded = true;
      __webpack_require__.e(/*! import() | mdi-icons */ "mdi-icons").then(__webpack_require__.bind(null, /*! ../resources/mdi-icons */ "./src/resources/mdi-icons.js"));
    }
  }

}
customElements.define("ha-icon", HaIcon);

/***/ }),

/***/ "./src/data/config_entries.ts":
/*!************************************!*\
  !*** ./src/data/config_entries.ts ***!
  \************************************/
/*! exports provided: getConfigEntries, deleteConfigEntry, getConfigEntrySystemOptions, updateConfigEntrySystemOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntries", function() { return getConfigEntries; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigEntry", function() { return deleteConfigEntry; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigEntrySystemOptions", function() { return getConfigEntrySystemOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateConfigEntrySystemOptions", function() { return updateConfigEntrySystemOptions; });
const getConfigEntries = hass => hass.callApi("GET", "config/config_entries/entry");
const deleteConfigEntry = (hass, configEntryId) => hass.callApi("DELETE", `config/config_entries/entry/${configEntryId}`);
const getConfigEntrySystemOptions = (hass, configEntryId) => hass.callWS({
  type: "config_entries/system_options/list",
  entry_id: configEntryId
});
const updateConfigEntrySystemOptions = (hass, configEntryId, params) => hass.callWS(Object.assign({
  type: "config_entries/system_options/update",
  entry_id: configEntryId
}, params));

/***/ }),

/***/ "./src/data/config_flow.ts":
/*!*********************************!*\
  !*** ./src/data/config_flow.ts ***!
  \*********************************/
/*! exports provided: createConfigFlow, fetchConfigFlow, handleConfigFlowStep, deleteConfigFlow, getConfigFlowHandlers, getConfigFlowInProgressCollection, subscribeConfigFlowInProgress, localizeConfigFlowTitle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createConfigFlow", function() { return createConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchConfigFlow", function() { return fetchConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleConfigFlowStep", function() { return handleConfigFlowStep; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteConfigFlow", function() { return deleteConfigFlow; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowHandlers", function() { return getConfigFlowHandlers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getConfigFlowInProgressCollection", function() { return getConfigFlowInProgressCollection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "subscribeConfigFlowInProgress", function() { return subscribeConfigFlowInProgress; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "localizeConfigFlowTitle", function() { return localizeConfigFlowTitle; });
/* harmony import */ var _common_util_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/util/debounce */ "./src/common/util/debounce.ts");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");


const createConfigFlow = (hass, handler) => hass.callApi("POST", "config/config_entries/flow", {
  handler
});
const fetchConfigFlow = (hass, flowId) => hass.callApi("GET", `config/config_entries/flow/${flowId}`);
const handleConfigFlowStep = (hass, flowId, data) => hass.callApi("POST", `config/config_entries/flow/${flowId}`, data);
const deleteConfigFlow = (hass, flowId) => hass.callApi("DELETE", `config/config_entries/flow/${flowId}`);
const getConfigFlowHandlers = hass => hass.callApi("GET", "config/config_entries/flow_handlers");

const fetchConfigFlowInProgress = conn => conn.sendMessagePromise({
  type: "config_entries/flow/progress"
});

const subscribeConfigFlowInProgressUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_0__["debounce"])(() => fetchConfigFlowInProgress(conn).then(flows => store.setState(flows, true)), 500, true), "config_entry_discovered");

const getConfigFlowInProgressCollection = conn => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_1__["getCollection"])(conn, "_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates);
const subscribeConfigFlowInProgress = (hass, onChange) => getConfigFlowInProgressCollection(hass.connection).subscribe(onChange);
const localizeConfigFlowTitle = (localize, flow) => {
  const placeholders = flow.context.title_placeholders || {};
  const placeholderKeys = Object.keys(placeholders);

  if (placeholderKeys.length === 0) {
    return localize(`component.${flow.handler}.config.title`);
  }

  const args = [];
  placeholderKeys.forEach(key => {
    args.push(key);
    args.push(placeholders[key]);
  });
  return localize(`component.${flow.handler}.config.flow_title`, ...args);
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
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../data/config_flow */ "./src/data/config_flow.ts");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_translations_localize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/translations/localize */ "./src/common/translations/localize.ts");
/* harmony import */ var _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./show-dialog-data-entry-flow */ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/string/compare */ "./src/common/string/compare.ts");





const loadConfigFlowDialog = _show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["loadDataEntryFlowDialog"];
const showConfigFlowDialog = (element, dialogParams) => Object(_show_dialog_data_entry_flow__WEBPACK_IMPORTED_MODULE_3__["showFlowDialog"])(element, dialogParams, {
  loadDevicesAndAreas: true,
  getFlowHandlers: hass => Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_0__["getConfigFlowHandlers"])(hass).then(handlers => handlers.sort((handlerA, handlerB) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["caseInsensitiveCompare"])(hass.localize(`component.${handlerA}.config.title`), hass.localize(`component.${handlerB}.config.title`)))),
  createFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["createConfigFlow"],
  fetchFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["fetchConfigFlow"],
  handleFlowStep: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["handleConfigFlowStep"],
  deleteFlow: _data_config_flow__WEBPACK_IMPORTED_MODULE_0__["deleteConfigFlow"],

  renderAbortDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.abort.${step.reason}`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <ha-markdown allowsvg .content=${description}></ha-markdown>
          ` : "";
  },

  renderShowFormStepHeader(hass, step) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.title`);
  },

  renderShowFormStepDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.step.${step.step_id}.description`, step.description_placeholders);
    return description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
            <ha-markdown allowsvg .content=${description}></ha-markdown>
          ` : "";
  },

  renderShowFormStepFieldLabel(hass, step, field) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.data.${field.name}`);
  },

  renderShowFormStepFieldError(hass, step, error) {
    return hass.localize(`component.${step.handler}.config.error.${error}`);
  },

  renderExternalStepHeader(hass, step) {
    return hass.localize(`component.${step.handler}.config.step.${step.step_id}.title`);
  },

  renderExternalStepDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.${step.step_id}.description`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        <p>
          ${hass.localize("ui.panel.config.integrations.config_flow.external_step.description")}
        </p>
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <ha-markdown allowsvg .content=${description}></ha-markdown>
            ` : ""}
      `;
  },

  renderCreateEntryDescription(hass, step) {
    const description = Object(_common_translations_localize__WEBPACK_IMPORTED_MODULE_2__["localizeKey"])(hass.localize, `component.${step.handler}.config.create_entry.${step.description || "default"}`, step.description_placeholders);
    return lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
        ${description ? lit_element__WEBPACK_IMPORTED_MODULE_1__["html"]`
              <ha-markdown allowsvg .content=${description}></ha-markdown>
            ` : ""}
        <p>
          ${hass.localize("ui.panel.config.integrations.config_flow.created_config", "name", step.title)}
        </p>
      `;
  }

});

/***/ }),

/***/ "./src/dialogs/config-flow/show-dialog-data-entry-flow.ts":
/*!****************************************************************!*\
  !*** ./src/dialogs/config-flow/show-dialog-data-entry-flow.ts ***!
  \****************************************************************/
/*! exports provided: loadDataEntryFlowDialog, showFlowDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadDataEntryFlowDialog", function() { return loadDataEntryFlowDialog; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showFlowDialog", function() { return showFlowDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

const loadDataEntryFlowDialog = () => Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e("vendors~confirmation~dialog-config-flow~dialog-zha-device-info~hui-dialog-edit-card~hui-dialog-edit-~ae2d1c3e"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~notification-manager~panel-lovelace"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~panel-lovelace"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-lovelace"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-lovelace"), __webpack_require__.e("vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog"), __webpack_require__.e(1), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e(0), __webpack_require__.e("dialog-config-flow~hui-unused-entities"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-data-entry-flow */ "./src/dialogs/config-flow/dialog-data-entry-flow.ts"));
const showFlowDialog = (element, dialogParams, flowConfig) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-data-entry-flow",
    dialogImport: loadDataEntryFlowDialog,
    dialogParams: Object.assign({}, dialogParams, {
      flowConfig
    })
  });
};

/***/ }),

/***/ "./src/onboarding/integration-badge.ts":
/*!*********************************************!*\
  !*** ./src/onboarding/integration-badge.ts ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
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




let IntegrationBadge = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("integration-badge")], function (_initialize, _LitElement) {
  class IntegrationBadge extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: IntegrationBadge,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "icon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "title",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "badgeIcon",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean,
        reflect: true
      })],
      key: "clickable",

      value() {
        return false;
      }

    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="icon">
        <iron-icon .icon=${this.icon}></iron-icon>
        ${this.badgeIcon ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <ha-icon class="badge" .icon=${this.badgeIcon}></ha-icon>
            ` : ""}
      </div>
      <div class="title">${this.title}</div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: inline-flex;
        flex-direction: column;
        text-align: center;
        color: var(--primary-text-color);
      }

      :host([clickable]) {
        color: var(--primary-text-color);
      }

      .icon {
        position: relative;
        margin: 0 auto 8px;
        height: 40px;
        width: 40px;
        border-radius: 50%;
        border: 1px solid var(--secondary-text-color);
        display: flex;
        align-items: center;
        justify-content: center;
      }

      :host([clickable]) .icon {
        border-color: var(--primary-color);
        border-width: 2px;
      }

      .badge {
        position: absolute;
        color: var(--primary-color);
        bottom: -5px;
        right: -5px;
        background-color: white;
        border-radius: 50%;
        width: 18px;
        display: block;
        height: 18px;
      }

      .title {
        min-height: 2.3em;
        word-break: break-word;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/onboarding/onboarding-integrations.ts":
/*!***************************************************!*\
  !*** ./src/onboarding/onboarding-integrations.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialogs/config-flow/show-dialog-config-flow */ "./src/dialogs/config-flow/show-dialog-config-flow.ts");
/* harmony import */ var _data_config_entries__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/config_entries */ "./src/data/config_entries.ts");
/* harmony import */ var _common_string_compare__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/string/compare */ "./src/common/string/compare.ts");
/* harmony import */ var _integration_badge__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./integration-badge */ "./src/onboarding/integration-badge.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../data/onboarding */ "./src/data/onboarding.ts");
/* harmony import */ var home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! home-assistant-js-websocket */ "./node_modules/home-assistant-js-websocket/dist/haws.es.js");
/* harmony import */ var _data_config_flow__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../data/config_flow */ "./src/data/config_flow.ts");
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












let OnboardingIntegrations = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("onboarding-integrations")], function (_initialize, _LitElement) {
  class OnboardingIntegrations extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OnboardingIntegrations,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "onboardingLocalize",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_entries",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_discovered",
      value: void 0
    }, {
      kind: "field",
      key: "_unsubEvents",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: function connectedCallback() {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "connectedCallback", this).call(this);

        this._unsubEvents = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["subscribeConfigFlowInProgress"])(this.hass, flows => {
          this._discovered = flows;
        });
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "disconnectedCallback", this).call(this);

        if (this._unsubEvents) {
          this._unsubEvents();

          this._unsubEvents = undefined;
        }
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this._entries || !this._discovered) {
          return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
        } // Render discovered and existing entries together sorted by localized title.


        const entries = this._entries.map(entry => {
          const title = this.hass.localize(`component.${entry.domain}.config.title`);
          return [title, lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <integration-badge
              .title=${title}
              icon="hass:check"
            ></integration-badge>
          `];
        });

        const discovered = this._discovered.map(flow => {
          const title = Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["localizeConfigFlowTitle"])(this.hass.localize, flow);
          return [title, lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <button .flowId=${flow.flow_id} @click=${this._continueFlow}>
              <integration-badge
                clickable
                .title=${title}
                icon="hass:plus"
              ></integration-badge>
            </button>
          `];
        });

        const content = [...entries, ...discovered].sort((a, b) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(a[0], b[0])).map(item => item[1]);
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.integration.intro")}
      </p>
      <div class="badges">
        ${content}
        <button @click=${this._createFlow}>
          <integration-badge
            clickable
            title=${this.onboardingLocalize("ui.panel.page-onboarding.integration.more_integrations")}
            icon="hass:dots-horizontal"
          ></integration-badge>
        </button>
      </div>
      <div class="footer">
        <mwc-button @click=${this._finish}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.integration.finish")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OnboardingIntegrations.prototype), "firstUpdated", this).call(this, changedProps);

        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__["loadConfigFlowDialog"])();

        this._loadConfigEntries();
        /* polyfill for paper-dropdown */


        __webpack_require__.e(/*! import() | polyfill-web-animations-next */ "vendors~polyfill-web-animations-next").then(__webpack_require__.t.bind(null, /*! web-animations-js/web-animations-next-lite.min */ "./node_modules/web-animations-js/web-animations-next-lite.min.js", 7));
      }
    }, {
      kind: "method",
      key: "_createFlow",
      value: function _createFlow() {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__["showConfigFlowDialog"])(this, {
          dialogClosedCallback: () => {
            this._loadConfigEntries();

            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["getConfigFlowInProgressCollection"])(this.hass.connection).refresh();
          }
        });
      }
    }, {
      kind: "method",
      key: "_continueFlow",
      value: function _continueFlow(ev) {
        Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_2__["showConfigFlowDialog"])(this, {
          continueFlowId: ev.currentTarget.flowId,
          dialogClosedCallback: () => {
            this._loadConfigEntries();

            Object(_data_config_flow__WEBPACK_IMPORTED_MODULE_9__["getConfigFlowInProgressCollection"])(this.hass.connection).refresh();
          }
        });
      }
    }, {
      kind: "method",
      key: "_loadConfigEntries",
      value: async function _loadConfigEntries() {
        const entries = await Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_3__["getConfigEntries"])(this.hass); // We filter out the config entry for the local weather.
        // It is one that we create automatically and it will confuse the user
        // if it starts showing up during onboarding.

        this._entries = entries.filter(entry => entry.domain !== "met");
      }
    }, {
      kind: "method",
      key: "_finish",
      value: async function _finish() {
        const result = await Object(_data_onboarding__WEBPACK_IMPORTED_MODULE_7__["onboardIntegrationStep"])(this.hass, {
          client_id: Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_8__["genClientId"])()
        });
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_6__["fireEvent"])(this, "onboarding-step", {
          type: "integration",
          result
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .badges {
        margin-top: 24px;
      }
      .badges > * {
        width: 24%;
        min-width: 90px;
        margin-bottom: 24px;
      }
      button {
        display: inline-block;
        cursor: pointer;
        padding: 0;
        border: 0;
        background: 0;
        font: inherit;
      }
      .footer {
        text-align: right;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1pbnRlZ3JhdGlvbnMuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tbW9uL3N0cmluZy9jb21wYXJlLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC9kZWJvdW5jZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9oYS1pY29uLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19lbnRyaWVzLnRzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2NvbmZpZ19mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWNvbmZpZy1mbG93LnRzIiwid2VicGFjazovLy8uL3NyYy9kaWFsb2dzL2NvbmZpZy1mbG93L3Nob3ctZGlhbG9nLWRhdGEtZW50cnktZmxvdy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9pbnRlZ3JhdGlvbi1iYWRnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWludGVncmF0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcblxuVGhlIGBpcm9uLWljb25gIGVsZW1lbnQgZGlzcGxheXMgYW4gaWNvbi4gQnkgZGVmYXVsdCBhbiBpY29uIHJlbmRlcnMgYXMgYSAyNHB4XG5zcXVhcmUuXG5cbkV4YW1wbGUgdXNpbmcgc3JjOlxuXG4gICAgPGlyb24taWNvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG5FeGFtcGxlIHNldHRpbmcgc2l6ZSB0byAzMnB4IHggMzJweDpcblxuICAgIDxpcm9uLWljb24gY2xhc3M9XCJiaWdcIiBzcmM9XCJiaWdfc3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgICAgLmJpZyB7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMzJweDtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuVGhlIGlyb24gZWxlbWVudHMgaW5jbHVkZSBzZXZlcmFsIHNldHMgb2YgaWNvbnMuIFRvIHVzZSB0aGUgZGVmYXVsdCBzZXQgb2Zcbmljb25zLCBpbXBvcnQgYGlyb24taWNvbnMuanNgIGFuZCB1c2UgdGhlIGBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBpY29uOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cIm1lbnVcIj48L2lyb24taWNvbj5cblxuVG8gdXNlIGEgZGlmZmVyZW50IGJ1aWx0LWluIHNldCBvZiBpY29ucywgaW1wb3J0IHRoZSBzcGVjaWZpY1xuYGlyb24taWNvbnMvPGljb25zZXQ+LWljb25zLmpzYCwgYW5kIHNwZWNpZnkgdGhlIGljb24gYXMgYDxpY29uc2V0Pjo8aWNvbj5gLlxuRm9yIGV4YW1wbGUsIHRvIHVzZSBhIGNvbW11bmljYXRpb24gaWNvbiwgeW91IHdvdWxkIHVzZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9jb21tdW5pY2F0aW9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJjb21tdW5pY2F0aW9uOmVtYWlsXCI+PC9pcm9uLWljb24+XG5cbllvdSBjYW4gYWxzbyBjcmVhdGUgY3VzdG9tIGljb24gc2V0cyBvZiBiaXRtYXAgb3IgU1ZHIGljb25zLlxuXG5FeGFtcGxlIG9mIHVzaW5nIGFuIGljb24gbmFtZWQgYGNoZXJyeWAgZnJvbSBhIGN1c3RvbSBpY29uc2V0IHdpdGggdGhlIElEXG5gZnJ1aXRgOlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiZnJ1aXQ6Y2hlcnJ5XCI+PC9pcm9uLWljb24+XG5cblNlZSBgPGlyb24taWNvbnNldD5gIGFuZCBgPGlyb24taWNvbnNldC1zdmc+YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG9cbmNyZWF0ZSBhIGN1c3RvbSBpY29uc2V0LlxuXG5TZWUgdGhlIGBpcm9uLWljb25zYCBkZW1vIHRvIHNlZSB0aGUgaWNvbnMgYXZhaWxhYmxlIGluIHRoZSB2YXJpb3VzIGljb25zZXRzLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIHwge31cbmAtLWlyb24taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWhlaWdodGAgfCBIZWlnaHQgb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1maWxsLWNvbG9yYCB8IEZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgYGN1cnJlbnRjb2xvcmBcbmAtLWlyb24taWNvbi1zdHJva2UtY29sb3JgIHwgU3Ryb2tlIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IG5vbmVcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taWNvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBmaWxsOiB2YXIoLS1pcm9uLWljb24tZmlsbC1jb2xvciwgY3VycmVudGNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yLCBub25lKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWljb24taGVpZ2h0LCAyNHB4KTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1pY29uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5gLFxuXG4gIGlzOiAnaXJvbi1pY29uJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byB1c2UuIFRoZSBuYW1lIHNob3VsZCBiZSBvZiB0aGUgZm9ybTpcbiAgICAgKiBgaWNvbnNldF9uYW1lOmljb25fbmFtZWAuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGhlbWUgdG8gdXNlZCwgaWYgb25lIGlzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiBpY29uc2V0LlxuICAgICAqL1xuICAgIHRoZW1lOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIGlyb24taWNvbiB3aXRob3V0IGFuIGljb25zZXQsIHlvdSBjYW4gc2V0IHRoZSBzcmMgdG8gYmVcbiAgICAgKiB0aGUgVVJMIG9mIGFuIGluZGl2aWR1YWwgaWNvbiBpbWFnZSBmaWxlLiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRha2VcbiAgICAgKiBwcmVjZWRlbmNlIG92ZXIgYSBnaXZlbiBpY29uIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFJcm9uTWV0YX1cbiAgICAgKi9cbiAgICBfbWV0YToge3ZhbHVlOiBCYXNlLmNyZWF0ZSgnaXJvbi1tZXRhJywge3R5cGU6ICdpY29uc2V0J30pfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVJY29uKF9tZXRhLCBpc0F0dGFjaGVkKScsXG4gICAgJ191cGRhdGVJY29uKHRoZW1lLCBpc0F0dGFjaGVkKScsXG4gICAgJ19zcmNDaGFuZ2VkKHNyYywgaXNBdHRhY2hlZCknLFxuICAgICdfaWNvbkNoYW5nZWQoaWNvbiwgaXNBdHRhY2hlZCknXG4gIF0sXG5cbiAgX0RFRkFVTFRfSUNPTlNFVDogJ2ljb25zJyxcblxuICBfaWNvbkNoYW5nZWQ6IGZ1bmN0aW9uKGljb24pIHtcbiAgICB2YXIgcGFydHMgPSAoaWNvbiB8fCAnJykuc3BsaXQoJzonKTtcbiAgICB0aGlzLl9pY29uTmFtZSA9IHBhcnRzLnBvcCgpO1xuICAgIHRoaXMuX2ljb25zZXROYW1lID0gcGFydHMucG9wKCkgfHwgdGhpcy5fREVGQVVMVF9JQ09OU0VUO1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfc3JjQ2hhbmdlZDogZnVuY3Rpb24oc3JjKSB7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF91c2VzSWNvbnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiB8fCAhdGhpcy5zcmM7XG4gIH0sXG5cbiAgLyoqIEBzdXBwcmVzcyB7dmlzaWJpbGl0eX0gKi9cbiAgX3VwZGF0ZUljb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl91c2VzSWNvbnNldCgpKSB7XG4gICAgICBpZiAodGhpcy5faW1nICYmIHRoaXMuX2ltZy5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbSh0aGlzLnJvb3QpLnJlbW92ZUNoaWxkKHRoaXMuX2ltZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faWNvbk5hbWUgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ljb25zZXROYW1lICYmIHRoaXMuX21ldGEpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldCA9IC8qKiBAdHlwZSB7P1BvbHltZXIuSWNvbnNldH0gKi8gKFxuICAgICAgICAgICAgdGhpcy5fbWV0YS5ieUtleSh0aGlzLl9pY29uc2V0TmFtZSkpO1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQuYXBwbHlJY29uKHRoaXMsIHRoaXMuX2ljb25OYW1lLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgIGRvbSh0aGlzLnJvb3QpLmFwcGVuZENoaWxkKHRoaXMuX2ltZyk7XG4gICAgfVxuICB9XG59KTtcbiIsImV4cG9ydCBjb25zdCBjb21wYXJlID0gKGE6IHN0cmluZywgYjogc3RyaW5nKSA9PiB7XG4gIGlmIChhIDwgYikge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICBpZiAoYSA+IGIpIHtcbiAgICByZXR1cm4gMTtcbiAgfVxuXG4gIHJldHVybiAwO1xufTtcblxuZXhwb3J0IGNvbnN0IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgPSAoYTogc3RyaW5nLCBiOiBzdHJpbmcpID0+XG4gIGNvbXBhcmUoYS50b0xvd2VyQ2FzZSgpLCBiLnRvTG93ZXJDYXNlKCkpO1xuIiwiLy8gRnJvbTogaHR0cHM6Ly9kYXZpZHdhbHNoLm5hbWUvamF2YXNjcmlwdC1kZWJvdW5jZS1mdW5jdGlvblxuXG4vLyBSZXR1cm5zIGEgZnVuY3Rpb24sIHRoYXQsIGFzIGxvbmcgYXMgaXQgY29udGludWVzIHRvIGJlIGludm9rZWQsIHdpbGwgbm90XG4vLyBiZSB0cmlnZ2VyZWQuIFRoZSBmdW5jdGlvbiB3aWxsIGJlIGNhbGxlZCBhZnRlciBpdCBzdG9wcyBiZWluZyBjYWxsZWQgZm9yXG4vLyBOIG1pbGxpc2Vjb25kcy4gSWYgYGltbWVkaWF0ZWAgaXMgcGFzc2VkLCB0cmlnZ2VyIHRoZSBmdW5jdGlvbiBvbiB0aGVcbi8vIGxlYWRpbmcgZWRnZSwgaW5zdGVhZCBvZiB0aGUgdHJhaWxpbmcuXG4vLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmU6IGJhbi10eXBlc1xuZXhwb3J0IGNvbnN0IGRlYm91bmNlID0gPFQgZXh0ZW5kcyBGdW5jdGlvbj4oXG4gIGZ1bmM6IFQsXG4gIHdhaXQsXG4gIGltbWVkaWF0ZSA9IGZhbHNlXG4pOiBUID0+IHtcbiAgbGV0IHRpbWVvdXQ7XG4gIC8vIEB0cy1pZ25vcmVcbiAgcmV0dXJuIGZ1bmN0aW9uKC4uLmFyZ3MpIHtcbiAgICAvLyB0c2xpbnQ6ZGlzYWJsZTpuby10aGlzLWFzc2lnbm1lbnRcbiAgICAvLyBAdHMtaWdub3JlXG4gICAgY29uc3QgY29udGV4dCA9IHRoaXM7XG4gICAgY29uc3QgbGF0ZXIgPSAoKSA9PiB7XG4gICAgICB0aW1lb3V0ID0gbnVsbDtcbiAgICAgIGlmICghaW1tZWRpYXRlKSB7XG4gICAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBjYWxsTm93ID0gaW1tZWRpYXRlICYmICF0aW1lb3V0O1xuICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB0aW1lb3V0ID0gc2V0VGltZW91dChsYXRlciwgd2FpdCk7XG4gICAgaWYgKGNhbGxOb3cpIHtcbiAgICAgIGZ1bmMuYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfVxuICB9O1xufTtcbiIsImltcG9ydCB7IENvbnN0cnVjdG9yIH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcbi8vIE5vdCBkdXBsaWNhdGUsIHRoaXMgaXMgZm9yIHR5cGluZy5cbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgSXJvbkljb25FbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb25cIjtcblxuY29uc3QgaXJvbkljb25DbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcImlyb24taWNvblwiKSBhcyBDb25zdHJ1Y3RvcjxcbiAgSXJvbkljb25FbGVtZW50XG4+O1xuXG5sZXQgbG9hZGVkID0gZmFsc2U7XG5cbmV4cG9ydCBjbGFzcyBIYUljb24gZXh0ZW5kcyBpcm9uSWNvbkNsYXNzIHtcbiAgcHJpdmF0ZSBfaWNvbnNldE5hbWU/OiBzdHJpbmc7XG5cbiAgcHVibGljIGxpc3RlbihcbiAgICBub2RlOiBFdmVudFRhcmdldCB8IG51bGwsXG4gICAgZXZlbnROYW1lOiBzdHJpbmcsXG4gICAgbWV0aG9kTmFtZTogc3RyaW5nXG4gICk6IHZvaWQge1xuICAgIHN1cGVyLmxpc3Rlbihub2RlLCBldmVudE5hbWUsIG1ldGhvZE5hbWUpO1xuXG4gICAgaWYgKCFsb2FkZWQgJiYgdGhpcy5faWNvbnNldE5hbWUgPT09IFwibWRpXCIpIHtcbiAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJtZGktaWNvbnNcIiAqLyBcIi4uL3Jlc291cmNlcy9tZGktaWNvbnNcIik7XG4gICAgfVxuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1pY29uXCI6IEhhSWNvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJoYS1pY29uXCIsIEhhSWNvbik7XG4iLCJpbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29uZmlnRW50cnkge1xuICBlbnRyeV9pZDogc3RyaW5nO1xuICBkb21haW46IHN0cmluZztcbiAgdGl0bGU6IHN0cmluZztcbiAgc291cmNlOiBzdHJpbmc7XG4gIHN0YXRlOiBzdHJpbmc7XG4gIGNvbm5lY3Rpb25fY2xhc3M6IHN0cmluZztcbiAgc3VwcG9ydHNfb3B0aW9uczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMge1xuICBkaXNhYmxlX25ld19lbnRpdGllczogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNvbnN0IGdldENvbmZpZ0VudHJpZXMgPSAoaGFzczogSG9tZUFzc2lzdGFudCkgPT5cbiAgaGFzcy5jYWxsQXBpPENvbmZpZ0VudHJ5W10+KFwiR0VUXCIsIFwiY29uZmlnL2NvbmZpZ19lbnRyaWVzL2VudHJ5XCIpO1xuXG5leHBvcnQgY29uc3QgZGVsZXRlQ29uZmlnRW50cnkgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgY29uZmlnRW50cnlJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8e1xuICAgIHJlcXVpcmVfcmVzdGFydDogYm9vbGVhbjtcbiAgfT4oXCJERUxFVEVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9lbnRyeS8ke2NvbmZpZ0VudHJ5SWR9YCk7XG5cbmV4cG9ydCBjb25zdCBnZXRDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZ1xuKSA9PlxuICBoYXNzLmNhbGxXUzxDb25maWdFbnRyeVN5c3RlbU9wdGlvbnM+KHtcbiAgICB0eXBlOiBcImNvbmZpZ19lbnRyaWVzL3N5c3RlbV9vcHRpb25zL2xpc3RcIixcbiAgICBlbnRyeV9pZDogY29uZmlnRW50cnlJZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCB1cGRhdGVDb25maWdFbnRyeVN5c3RlbU9wdGlvbnMgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGNvbmZpZ0VudHJ5SWQ6IHN0cmluZyxcbiAgcGFyYW1zOiBQYXJ0aWFsPENvbmZpZ0VudHJ5U3lzdGVtT3B0aW9ucz5cbikgPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29uZmlnX2VudHJpZXMvc3lzdGVtX29wdGlvbnMvdXBkYXRlXCIsXG4gICAgZW50cnlfaWQ6IGNvbmZpZ0VudHJ5SWQsXG4gICAgLi4ucGFyYW1zLFxuICB9KTtcbiIsImltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IERhdGFFbnRyeUZsb3dTdGVwLCBEYXRhRW50cnlGbG93UHJvZ3Jlc3MgfSBmcm9tIFwiLi9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7IGRlYm91bmNlIH0gZnJvbSBcIi4uL2NvbW1vbi91dGlsL2RlYm91bmNlXCI7XG5pbXBvcnQgeyBnZXRDb2xsZWN0aW9uLCBDb25uZWN0aW9uIH0gZnJvbSBcImhvbWUtYXNzaXN0YW50LWpzLXdlYnNvY2tldFwiO1xuaW1wb3J0IHsgTG9jYWxpemVGdW5jIH0gZnJvbSBcIi4uL2NvbW1vbi90cmFuc2xhdGlvbnMvbG9jYWxpemVcIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNvbmZpZ0Zsb3cgPSAoaGFzczogSG9tZUFzc2lzdGFudCwgaGFuZGxlcjogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGk8RGF0YUVudHJ5Rmxvd1N0ZXA+KFwiUE9TVFwiLCBcImNvbmZpZy9jb25maWdfZW50cmllcy9mbG93XCIsIHtcbiAgICBoYW5kbGVyLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IGZldGNoQ29uZmlnRmxvdyA9IChoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZykgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIkdFVFwiLFxuICAgIGBjb25maWcvY29uZmlnX2VudHJpZXMvZmxvdy8ke2Zsb3dJZH1gXG4gICk7XG5cbmV4cG9ydCBjb25zdCBoYW5kbGVDb25maWdGbG93U3RlcCA9IChcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgZmxvd0lkOiBzdHJpbmcsXG4gIGRhdGE6IHsgW2tleTogc3RyaW5nXTogYW55IH1cbikgPT5cbiAgaGFzcy5jYWxsQXBpPERhdGFFbnRyeUZsb3dTdGVwPihcbiAgICBcIlBPU1RcIixcbiAgICBgY29uZmlnL2NvbmZpZ19lbnRyaWVzL2Zsb3cvJHtmbG93SWR9YCxcbiAgICBkYXRhXG4gICk7XG5cbmV4cG9ydCBjb25zdCBkZWxldGVDb25maWdGbG93ID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKSA9PlxuICBoYXNzLmNhbGxBcGkoXCJERUxFVEVcIiwgYGNvbmZpZy9jb25maWdfZW50cmllcy9mbG93LyR7Zmxvd0lkfWApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbEFwaTxzdHJpbmdbXT4oXCJHRVRcIiwgXCJjb25maWcvY29uZmlnX2VudHJpZXMvZmxvd19oYW5kbGVyc1wiKTtcblxuY29uc3QgZmV0Y2hDb25maWdGbG93SW5Qcm9ncmVzcyA9IChjb25uKSA9PlxuICBjb25uLnNlbmRNZXNzYWdlUHJvbWlzZSh7XG4gICAgdHlwZTogXCJjb25maWdfZW50cmllcy9mbG93L3Byb2dyZXNzXCIsXG4gIH0pO1xuXG5jb25zdCBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzc1VwZGF0ZXMgPSAoY29ubiwgc3RvcmUpID0+XG4gIGNvbm4uc3Vic2NyaWJlRXZlbnRzKFxuICAgIGRlYm91bmNlKFxuICAgICAgKCkgPT5cbiAgICAgICAgZmV0Y2hDb25maWdGbG93SW5Qcm9ncmVzcyhjb25uKS50aGVuKChmbG93cykgPT5cbiAgICAgICAgICBzdG9yZS5zZXRTdGF0ZShmbG93cywgdHJ1ZSlcbiAgICAgICAgKSxcbiAgICAgIDUwMCxcbiAgICAgIHRydWVcbiAgICApLFxuICAgIFwiY29uZmlnX2VudHJ5X2Rpc2NvdmVyZWRcIlxuICApO1xuXG5leHBvcnQgY29uc3QgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uID0gKGNvbm46IENvbm5lY3Rpb24pID0+XG4gIGdldENvbGxlY3Rpb248RGF0YUVudHJ5Rmxvd1Byb2dyZXNzW10+KFxuICAgIGNvbm4sXG4gICAgXCJfY29uZmlnRmxvd1Byb2dyZXNzXCIsXG4gICAgZmV0Y2hDb25maWdGbG93SW5Qcm9ncmVzcyxcbiAgICBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzc1VwZGF0ZXNcbiAgKTtcblxuZXhwb3J0IGNvbnN0IHN1YnNjcmliZUNvbmZpZ0Zsb3dJblByb2dyZXNzID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICBvbkNoYW5nZTogKGZsb3dzOiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXSkgPT4gdm9pZFxuKSA9PiBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24oaGFzcy5jb25uZWN0aW9uKS5zdWJzY3JpYmUob25DaGFuZ2UpO1xuXG5leHBvcnQgY29uc3QgbG9jYWxpemVDb25maWdGbG93VGl0bGUgPSAoXG4gIGxvY2FsaXplOiBMb2NhbGl6ZUZ1bmMsXG4gIGZsb3c6IERhdGFFbnRyeUZsb3dQcm9ncmVzc1xuKSA9PiB7XG4gIGNvbnN0IHBsYWNlaG9sZGVycyA9IGZsb3cuY29udGV4dC50aXRsZV9wbGFjZWhvbGRlcnMgfHwge307XG4gIGNvbnN0IHBsYWNlaG9sZGVyS2V5cyA9IE9iamVjdC5rZXlzKHBsYWNlaG9sZGVycyk7XG4gIGlmIChwbGFjZWhvbGRlcktleXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy50aXRsZWApO1xuICB9XG4gIGNvbnN0IGFyZ3M6IHN0cmluZ1tdID0gW107XG4gIHBsYWNlaG9sZGVyS2V5cy5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBhcmdzLnB1c2goa2V5KTtcbiAgICBhcmdzLnB1c2gocGxhY2Vob2xkZXJzW2tleV0pO1xuICB9KTtcbiAgcmV0dXJuIGxvY2FsaXplKGBjb21wb25lbnQuJHtmbG93LmhhbmRsZXJ9LmNvbmZpZy5mbG93X3RpdGxlYCwgLi4uYXJncyk7XG59O1xuIiwiaW1wb3J0IHtcbiAgZ2V0Q29uZmlnRmxvd0hhbmRsZXJzLFxuICBmZXRjaENvbmZpZ0Zsb3csXG4gIGhhbmRsZUNvbmZpZ0Zsb3dTdGVwLFxuICBkZWxldGVDb25maWdGbG93LFxuICBjcmVhdGVDb25maWdGbG93LFxufSBmcm9tIFwiLi4vLi4vZGF0YS9jb25maWdfZmxvd1wiO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgbG9jYWxpemVLZXkgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3RyYW5zbGF0aW9ucy9sb2NhbGl6ZVwiO1xuaW1wb3J0IHtcbiAgc2hvd0Zsb3dEaWFsb2csXG4gIERhdGFFbnRyeUZsb3dEaWFsb2dQYXJhbXMsXG4gIGxvYWREYXRhRW50cnlGbG93RGlhbG9nLFxufSBmcm9tIFwiLi9zaG93LWRpYWxvZy1kYXRhLWVudHJ5LWZsb3dcIjtcbmltcG9ydCB7IGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3N0cmluZy9jb21wYXJlXCI7XG5cbmV4cG9ydCBjb25zdCBsb2FkQ29uZmlnRmxvd0RpYWxvZyA9IGxvYWREYXRhRW50cnlGbG93RGlhbG9nO1xuXG5leHBvcnQgY29uc3Qgc2hvd0NvbmZpZ0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IE9taXQ8RGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcywgXCJmbG93Q29uZmlnXCI+XG4pOiB2b2lkID0+XG4gIHNob3dGbG93RGlhbG9nKGVsZW1lbnQsIGRpYWxvZ1BhcmFtcywge1xuICAgIGxvYWREZXZpY2VzQW5kQXJlYXM6IHRydWUsXG4gICAgZ2V0Rmxvd0hhbmRsZXJzOiAoaGFzcykgPT5cbiAgICAgIGdldENvbmZpZ0Zsb3dIYW5kbGVycyhoYXNzKS50aGVuKChoYW5kbGVycykgPT5cbiAgICAgICAgaGFuZGxlcnMuc29ydCgoaGFuZGxlckEsIGhhbmRsZXJCKSA9PlxuICAgICAgICAgIGNhc2VJbnNlbnNpdGl2ZUNvbXBhcmUoXG4gICAgICAgICAgICBoYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtoYW5kbGVyQX0uY29uZmlnLnRpdGxlYCksXG4gICAgICAgICAgICBoYXNzLmxvY2FsaXplKGBjb21wb25lbnQuJHtoYW5kbGVyQn0uY29uZmlnLnRpdGxlYClcbiAgICAgICAgICApXG4gICAgICAgIClcbiAgICAgICksXG4gICAgY3JlYXRlRmxvdzogY3JlYXRlQ29uZmlnRmxvdyxcbiAgICBmZXRjaEZsb3c6IGZldGNoQ29uZmlnRmxvdyxcbiAgICBoYW5kbGVGbG93U3RlcDogaGFuZGxlQ29uZmlnRmxvd1N0ZXAsXG4gICAgZGVsZXRlRmxvdzogZGVsZXRlQ29uZmlnRmxvdyxcblxuICAgIHJlbmRlckFib3J0RGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLmFib3J0LiR7c3RlcC5yZWFzb259YCxcbiAgICAgICAgc3RlcC5kZXNjcmlwdGlvbl9wbGFjZWhvbGRlcnNcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtbWFya2Rvd24gYWxsb3dzdmcgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIjtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwSGVhZGVyKGhhc3MsIHN0ZXApIHtcbiAgICAgIHJldHVybiBoYXNzLmxvY2FsaXplKFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0udGl0bGVgXG4gICAgICApO1xuICAgIH0sXG5cbiAgICByZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuc3RlcC4ke3N0ZXAuc3RlcF9pZH0uZGVzY3JpcHRpb25gLFxuICAgICAgICBzdGVwLmRlc2NyaXB0aW9uX3BsYWNlaG9sZGVyc1xuICAgICAgKTtcbiAgICAgIHJldHVybiBkZXNjcmlwdGlvblxuICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICA8aGEtbWFya2Rvd24gYWxsb3dzdmcgLmNvbnRlbnQ9JHtkZXNjcmlwdGlvbn0+PC9oYS1tYXJrZG93bj5cbiAgICAgICAgICBgXG4gICAgICAgIDogXCJcIjtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRMYWJlbChoYXNzLCBzdGVwLCBmaWVsZCkge1xuICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoXG4gICAgICAgIGBjb21wb25lbnQuJHtzdGVwLmhhbmRsZXJ9LmNvbmZpZy5zdGVwLiR7c3RlcC5zdGVwX2lkfS5kYXRhLiR7XG4gICAgICAgICAgZmllbGQubmFtZVxuICAgICAgICB9YFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRFcnJvcihoYXNzLCBzdGVwLCBlcnJvcikge1xuICAgICAgcmV0dXJuIGhhc3MubG9jYWxpemUoYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLmVycm9yLiR7ZXJyb3J9YCk7XG4gICAgfSxcblxuICAgIHJlbmRlckV4dGVybmFsU3RlcEhlYWRlcihoYXNzLCBzdGVwKSB7XG4gICAgICByZXR1cm4gaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLnN0ZXAuJHtzdGVwLnN0ZXBfaWR9LnRpdGxlYFxuICAgICAgKTtcbiAgICB9LFxuXG4gICAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oaGFzcywgc3RlcCkge1xuICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBsb2NhbGl6ZUtleShcbiAgICAgICAgaGFzcy5sb2NhbGl6ZSxcbiAgICAgICAgYGNvbXBvbmVudC4ke3N0ZXAuaGFuZGxlcn0uY29uZmlnLiR7c3RlcC5zdGVwX2lkfS5kZXNjcmlwdGlvbmAsXG4gICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgPHA+XG4gICAgICAgICAgJHtoYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuaW50ZWdyYXRpb25zLmNvbmZpZ19mbG93LmV4dGVybmFsX3N0ZXAuZGVzY3JpcHRpb25cIlxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgICAgJHtkZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgYDtcbiAgICB9LFxuXG4gICAgcmVuZGVyQ3JlYXRlRW50cnlEZXNjcmlwdGlvbihoYXNzLCBzdGVwKSB7XG4gICAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGxvY2FsaXplS2V5KFxuICAgICAgICBoYXNzLmxvY2FsaXplLFxuICAgICAgICBgY29tcG9uZW50LiR7c3RlcC5oYW5kbGVyfS5jb25maWcuY3JlYXRlX2VudHJ5LiR7c3RlcC5kZXNjcmlwdGlvbiB8fFxuICAgICAgICAgIFwiZGVmYXVsdFwifWAsXG4gICAgICAgIHN0ZXAuZGVzY3JpcHRpb25fcGxhY2Vob2xkZXJzXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gaHRtbGBcbiAgICAgICAgJHtkZXNjcmlwdGlvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLW1hcmtkb3duIGFsbG93c3ZnIC5jb250ZW50PSR7ZGVzY3JpcHRpb259PjwvaGEtbWFya2Rvd24+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8cD5cbiAgICAgICAgICAke2hhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5pbnRlZ3JhdGlvbnMuY29uZmlnX2Zsb3cuY3JlYXRlZF9jb25maWdcIixcbiAgICAgICAgICAgIFwibmFtZVwiLFxuICAgICAgICAgICAgc3RlcC50aXRsZVxuICAgICAgICAgICl9XG4gICAgICAgIDwvcD5cbiAgICAgIGA7XG4gICAgfSxcbiAgfSk7XG4iLCJpbXBvcnQgeyBUZW1wbGF0ZVJlc3VsdCB9IGZyb20gXCJsaXQtaHRtbFwiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHtcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeSxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbCxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtLFxuICBEYXRhRW50cnlGbG93U3RlcCxcbiAgRGF0YUVudHJ5Rmxvd1N0ZXBBYm9ydCxcbiAgRmllbGRTY2hlbWEsXG59IGZyb20gXCIuLi8uLi9kYXRhL2RhdGFfZW50cnlfZmxvd1wiO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZsb3dDb25maWcge1xuICBsb2FkRGV2aWNlc0FuZEFyZWFzOiBib29sZWFuO1xuXG4gIGdldEZsb3dIYW5kbGVycz86IChoYXNzOiBIb21lQXNzaXN0YW50KSA9PiBQcm9taXNlPHN0cmluZ1tdPjtcblxuICBjcmVhdGVGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGhhbmRsZXI6IHN0cmluZyk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGZldGNoRmxvdyhoYXNzOiBIb21lQXNzaXN0YW50LCBmbG93SWQ6IHN0cmluZyk6IFByb21pc2U8RGF0YUVudHJ5Rmxvd1N0ZXA+O1xuXG4gIGhhbmRsZUZsb3dTdGVwKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgZmxvd0lkOiBzdHJpbmcsXG4gICAgZGF0YTogeyBba2V5OiBzdHJpbmddOiBhbnkgfVxuICApOiBQcm9taXNlPERhdGFFbnRyeUZsb3dTdGVwPjtcblxuICBkZWxldGVGbG93KGhhc3M6IEhvbWVBc3Npc3RhbnQsIGZsb3dJZDogc3RyaW5nKTogUHJvbWlzZTx1bmtub3duPjtcblxuICByZW5kZXJBYm9ydERlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBBYm9ydFxuICApOiBUZW1wbGF0ZVJlc3VsdCB8IFwiXCI7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwSGVhZGVyKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBGb3JtXG4gICk6IHN0cmluZztcblxuICByZW5kZXJTaG93Rm9ybVN0ZXBEZXNjcmlwdGlvbihcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRm9ybVxuICApOiBUZW1wbGF0ZVJlc3VsdCB8IFwiXCI7XG5cbiAgcmVuZGVyU2hvd0Zvcm1TdGVwRmllbGRMYWJlbChcbiAgICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICAgIHN0ZXA6IERhdGFFbnRyeUZsb3dTdGVwRm9ybSxcbiAgICBmaWVsZDogRmllbGRTY2hlbWFcbiAgKTogc3RyaW5nO1xuXG4gIHJlbmRlclNob3dGb3JtU3RlcEZpZWxkRXJyb3IoXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEZvcm0sXG4gICAgZXJyb3I6IHN0cmluZ1xuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyRXh0ZXJuYWxTdGVwSGVhZGVyKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBFeHRlcm5hbFxuICApOiBzdHJpbmc7XG5cbiAgcmVuZGVyRXh0ZXJuYWxTdGVwRGVzY3JpcHRpb24oXG4gICAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgICBzdGVwOiBEYXRhRW50cnlGbG93U3RlcEV4dGVybmFsXG4gICk6IFRlbXBsYXRlUmVzdWx0IHwgXCJcIjtcblxuICByZW5kZXJDcmVhdGVFbnRyeURlc2NyaXB0aW9uKFxuICAgIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gICAgc3RlcDogRGF0YUVudHJ5Rmxvd1N0ZXBDcmVhdGVFbnRyeVxuICApOiBUZW1wbGF0ZVJlc3VsdCB8IFwiXCI7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcyB7XG4gIHN0YXJ0Rmxvd0hhbmRsZXI/OiBzdHJpbmc7XG4gIGNvbnRpbnVlRmxvd0lkPzogc3RyaW5nO1xuICBkaWFsb2dDbG9zZWRDYWxsYmFjaz86IChwYXJhbXM6IHsgZmxvd0ZpbmlzaGVkOiBib29sZWFuIH0pID0+IHZvaWQ7XG4gIGZsb3dDb25maWc6IEZsb3dDb25maWc7XG4gIHNob3dBZHZhbmNlZD86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBjb25zdCBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyA9ICgpID0+XG4gIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcImRpYWxvZy1jb25maWctZmxvd1wiICovIFwiLi9kaWFsb2ctZGF0YS1lbnRyeS1mbG93XCIpO1xuXG5leHBvcnQgY29uc3Qgc2hvd0Zsb3dEaWFsb2cgPSAoXG4gIGVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkaWFsb2dQYXJhbXM6IE9taXQ8RGF0YUVudHJ5Rmxvd0RpYWxvZ1BhcmFtcywgXCJmbG93Q29uZmlnXCI+LFxuICBmbG93Q29uZmlnOiBGbG93Q29uZmlnXG4pOiB2b2lkID0+IHtcbiAgZmlyZUV2ZW50KGVsZW1lbnQsIFwic2hvdy1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1RhZzogXCJkaWFsb2ctZGF0YS1lbnRyeS1mbG93XCIsXG4gICAgZGlhbG9nSW1wb3J0OiBsb2FkRGF0YUVudHJ5Rmxvd0RpYWxvZyxcbiAgICBkaWFsb2dQYXJhbXM6IHtcbiAgICAgIC4uLmRpYWxvZ1BhcmFtcyxcbiAgICAgIGZsb3dDb25maWcsXG4gICAgfSxcbiAgfSk7XG59O1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL2hhLWljb25cIjtcblxuQGN1c3RvbUVsZW1lbnQoXCJpbnRlZ3JhdGlvbi1iYWRnZVwiKVxuY2xhc3MgSW50ZWdyYXRpb25CYWRnZSBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgaWNvbiE6IHN0cmluZztcbiAgQHByb3BlcnR5KCkgcHVibGljIHRpdGxlITogc3RyaW5nO1xuICBAcHJvcGVydHkoKSBwdWJsaWMgYmFkZ2VJY29uPzogc3RyaW5nO1xuICBAcHJvcGVydHkoeyB0eXBlOiBCb29sZWFuLCByZWZsZWN0OiB0cnVlIH0pIHB1YmxpYyBjbGlja2FibGUgPSBmYWxzZTtcblxuICBwcm90ZWN0ZWQgcmVuZGVyKCk6IFRlbXBsYXRlUmVzdWx0IHwgdm9pZCB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8ZGl2IGNsYXNzPVwiaWNvblwiPlxuICAgICAgICA8aXJvbi1pY29uIC5pY29uPSR7dGhpcy5pY29ufT48L2lyb24taWNvbj5cbiAgICAgICAgJHt0aGlzLmJhZGdlSWNvblxuICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgPGhhLWljb24gY2xhc3M9XCJiYWRnZVwiIC5pY29uPSR7dGhpcy5iYWRnZUljb259PjwvaGEtaWNvbj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICA6IFwiXCJ9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJ0aXRsZVwiPiR7dGhpcy50aXRsZX08L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBjb2xvcjogdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2NsaWNrYWJsZV0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5pY29uIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDAgYXV0byA4cHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2NsaWNrYWJsZV0pIC5pY29uIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAycHg7XG4gICAgICB9XG5cbiAgICAgIC5iYWRnZSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgY29sb3I6IHZhcigtLXByaW1hcnktY29sb3IpO1xuICAgICAgICBib3R0b206IC01cHg7XG4gICAgICAgIHJpZ2h0OiAtNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogMThweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWluLWhlaWdodDogMi4zZW07XG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaW50ZWdyYXRpb24tYmFkZ2VcIjogSW50ZWdyYXRpb25CYWRnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIFByb3BlcnR5VmFsdWVzLFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b24vbXdjLWJ1dHRvblwiO1xuaW1wb3J0IHtcbiAgbG9hZENvbmZpZ0Zsb3dEaWFsb2csXG4gIHNob3dDb25maWdGbG93RGlhbG9nLFxufSBmcm9tIFwiLi4vZGlhbG9ncy9jb25maWctZmxvdy9zaG93LWRpYWxvZy1jb25maWctZmxvd1wiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgZ2V0Q29uZmlnRW50cmllcywgQ29uZmlnRW50cnkgfSBmcm9tIFwiLi4vZGF0YS9jb25maWdfZW50cmllc1wiO1xuaW1wb3J0IHsgY29tcGFyZSB9IGZyb20gXCIuLi9jb21tb24vc3RyaW5nL2NvbXBhcmVcIjtcbmltcG9ydCBcIi4vaW50ZWdyYXRpb24tYmFkZ2VcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5pbXBvcnQgeyBvbmJvYXJkSW50ZWdyYXRpb25TdGVwIH0gZnJvbSBcIi4uL2RhdGEvb25ib2FyZGluZ1wiO1xuaW1wb3J0IHsgZ2VuQ2xpZW50SWQgfSBmcm9tIFwiaG9tZS1hc3Npc3RhbnQtanMtd2Vic29ja2V0XCI7XG5pbXBvcnQgeyBEYXRhRW50cnlGbG93UHJvZ3Jlc3MgfSBmcm9tIFwiLi4vZGF0YS9kYXRhX2VudHJ5X2Zsb3dcIjtcbmltcG9ydCB7XG4gIGxvY2FsaXplQ29uZmlnRmxvd1RpdGxlLFxuICBzdWJzY3JpYmVDb25maWdGbG93SW5Qcm9ncmVzcyxcbiAgZ2V0Q29uZmlnRmxvd0luUHJvZ3Jlc3NDb2xsZWN0aW9uLFxufSBmcm9tIFwiLi4vZGF0YS9jb25maWdfZmxvd1wiO1xuXG5AY3VzdG9tRWxlbWVudChcIm9uYm9hcmRpbmctaW50ZWdyYXRpb25zXCIpXG5jbGFzcyBPbmJvYXJkaW5nSW50ZWdyYXRpb25zIGV4dGVuZHMgTGl0RWxlbWVudCB7XG4gIEBwcm9wZXJ0eSgpIHB1YmxpYyBoYXNzITogSG9tZUFzc2lzdGFudDtcbiAgQHByb3BlcnR5KCkgcHVibGljIG9uYm9hcmRpbmdMb2NhbGl6ZSE6IExvY2FsaXplRnVuYztcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfZW50cmllcz86IENvbmZpZ0VudHJ5W107XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX2Rpc2NvdmVyZWQ/OiBEYXRhRW50cnlGbG93UHJvZ3Jlc3NbXTtcbiAgcHJpdmF0ZSBfdW5zdWJFdmVudHM/OiAoKSA9PiB2b2lkO1xuXG4gIHB1YmxpYyBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gc3Vic2NyaWJlQ29uZmlnRmxvd0luUHJvZ3Jlc3ModGhpcy5oYXNzLCAoZmxvd3MpID0+IHtcbiAgICAgIHRoaXMuX2Rpc2NvdmVyZWQgPSBmbG93cztcbiAgICB9KTtcbiAgfVxuXG4gIHB1YmxpYyBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGlmICh0aGlzLl91bnN1YkV2ZW50cykge1xuICAgICAgdGhpcy5fdW5zdWJFdmVudHMoKTtcbiAgICAgIHRoaXMuX3Vuc3ViRXZlbnRzID0gdW5kZWZpbmVkO1xuICAgIH1cbiAgfVxuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2VudHJpZXMgfHwgIXRoaXMuX2Rpc2NvdmVyZWQpIHtcbiAgICAgIHJldHVybiBodG1sYGA7XG4gICAgfVxuICAgIC8vIFJlbmRlciBkaXNjb3ZlcmVkIGFuZCBleGlzdGluZyBlbnRyaWVzIHRvZ2V0aGVyIHNvcnRlZCBieSBsb2NhbGl6ZWQgdGl0bGUuXG4gICAgY29uc3QgZW50cmllczogQXJyYXk8W3N0cmluZywgVGVtcGxhdGVSZXN1bHRdPiA9IHRoaXMuX2VudHJpZXMubWFwKFxuICAgICAgKGVudHJ5KSA9PiB7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gdGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgIGBjb21wb25lbnQuJHtlbnRyeS5kb21haW59LmNvbmZpZy50aXRsZWBcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICBodG1sYFxuICAgICAgICAgICAgPGludGVncmF0aW9uLWJhZGdlXG4gICAgICAgICAgICAgIC50aXRsZT0ke3RpdGxlfVxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpjaGVja1wiXG4gICAgICAgICAgICA+PC9pbnRlZ3JhdGlvbi1iYWRnZT5cbiAgICAgICAgICBgLFxuICAgICAgICBdO1xuICAgICAgfVxuICAgICk7XG4gICAgY29uc3QgZGlzY292ZXJlZDogQXJyYXk8W3N0cmluZywgVGVtcGxhdGVSZXN1bHRdPiA9IHRoaXMuX2Rpc2NvdmVyZWQubWFwKFxuICAgICAgKGZsb3cpID0+IHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBsb2NhbGl6ZUNvbmZpZ0Zsb3dUaXRsZSh0aGlzLmhhc3MubG9jYWxpemUsIGZsb3cpO1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgIGh0bWxgXG4gICAgICAgICAgICA8YnV0dG9uIC5mbG93SWQ9JHtmbG93LmZsb3dfaWR9IEBjbGljaz0ke3RoaXMuX2NvbnRpbnVlRmxvd30+XG4gICAgICAgICAgICAgIDxpbnRlZ3JhdGlvbi1iYWRnZVxuICAgICAgICAgICAgICAgIGNsaWNrYWJsZVxuICAgICAgICAgICAgICAgIC50aXRsZT0ke3RpdGxlfVxuICAgICAgICAgICAgICAgIGljb249XCJoYXNzOnBsdXNcIlxuICAgICAgICAgICAgICA+PC9pbnRlZ3JhdGlvbi1iYWRnZT5cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIGAsXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgKTtcbiAgICBjb25zdCBjb250ZW50ID0gWy4uLmVudHJpZXMsIC4uLmRpc2NvdmVyZWRdXG4gICAgICAuc29ydCgoYSwgYikgPT4gY29tcGFyZShhWzBdLCBiWzBdKSlcbiAgICAgIC5tYXAoKGl0ZW0pID0+IGl0ZW1bMV0pO1xuXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8cD5cbiAgICAgICAgJHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5pbnRlZ3JhdGlvbi5pbnRyb1wiKX1cbiAgICAgIDwvcD5cbiAgICAgIDxkaXYgY2xhc3M9XCJiYWRnZXNcIj5cbiAgICAgICAgJHtjb250ZW50fVxuICAgICAgICA8YnV0dG9uIEBjbGljaz0ke3RoaXMuX2NyZWF0ZUZsb3d9PlxuICAgICAgICAgIDxpbnRlZ3JhdGlvbi1iYWRnZVxuICAgICAgICAgICAgY2xpY2thYmxlXG4gICAgICAgICAgICB0aXRsZT0ke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5pbnRlZ3JhdGlvbi5tb3JlX2ludGVncmF0aW9uc1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgaWNvbj1cImhhc3M6ZG90cy1ob3Jpem9udGFsXCJcbiAgICAgICAgICA+PC9pbnRlZ3JhdGlvbi1iYWRnZT5cbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fZmluaXNofT5cbiAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuaW50ZWdyYXRpb24uZmluaXNoXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L213Yy1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgbG9hZENvbmZpZ0Zsb3dEaWFsb2coKTtcbiAgICB0aGlzLl9sb2FkQ29uZmlnRW50cmllcygpO1xuICAgIC8qIHBvbHlmaWxsIGZvciBwYXBlci1kcm9wZG93biAqL1xuICAgIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiBcInBvbHlmaWxsLXdlYi1hbmltYXRpb25zLW5leHRcIiAqLyBcIndlYi1hbmltYXRpb25zLWpzL3dlYi1hbmltYXRpb25zLW5leHQtbGl0ZS5taW5cIik7XG4gIH1cblxuICBwcml2YXRlIF9jcmVhdGVGbG93KCkge1xuICAgIHNob3dDb25maWdGbG93RGlhbG9nKHRoaXMsIHtcbiAgICAgIGRpYWxvZ0Nsb3NlZENhbGxiYWNrOiAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2xvYWRDb25maWdFbnRyaWVzKCk7XG4gICAgICAgIGdldENvbmZpZ0Zsb3dJblByb2dyZXNzQ29sbGVjdGlvbih0aGlzLmhhc3MhLmNvbm5lY3Rpb24pLnJlZnJlc2goKTtcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIF9jb250aW51ZUZsb3coZXYpIHtcbiAgICBzaG93Q29uZmlnRmxvd0RpYWxvZyh0aGlzLCB7XG4gICAgICBjb250aW51ZUZsb3dJZDogZXYuY3VycmVudFRhcmdldC5mbG93SWQsXG4gICAgICBkaWFsb2dDbG9zZWRDYWxsYmFjazogKCkgPT4ge1xuICAgICAgICB0aGlzLl9sb2FkQ29uZmlnRW50cmllcygpO1xuICAgICAgICBnZXRDb25maWdGbG93SW5Qcm9ncmVzc0NvbGxlY3Rpb24odGhpcy5oYXNzIS5jb25uZWN0aW9uKS5yZWZyZXNoKCk7XG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfbG9hZENvbmZpZ0VudHJpZXMoKSB7XG4gICAgY29uc3QgZW50cmllcyA9IGF3YWl0IGdldENvbmZpZ0VudHJpZXModGhpcy5oYXNzISk7XG4gICAgLy8gV2UgZmlsdGVyIG91dCB0aGUgY29uZmlnIGVudHJ5IGZvciB0aGUgbG9jYWwgd2VhdGhlci5cbiAgICAvLyBJdCBpcyBvbmUgdGhhdCB3ZSBjcmVhdGUgYXV0b21hdGljYWxseSBhbmQgaXQgd2lsbCBjb25mdXNlIHRoZSB1c2VyXG4gICAgLy8gaWYgaXQgc3RhcnRzIHNob3dpbmcgdXAgZHVyaW5nIG9uYm9hcmRpbmcuXG4gICAgdGhpcy5fZW50cmllcyA9IGVudHJpZXMuZmlsdGVyKChlbnRyeSkgPT4gZW50cnkuZG9tYWluICE9PSBcIm1ldFwiKTtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2ZpbmlzaCgpIHtcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBvbmJvYXJkSW50ZWdyYXRpb25TdGVwKHRoaXMuaGFzcywge1xuICAgICAgY2xpZW50X2lkOiBnZW5DbGllbnRJZCgpLFxuICAgIH0pO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcIm9uYm9hcmRpbmctc3RlcFwiLCB7XG4gICAgICB0eXBlOiBcImludGVncmF0aW9uXCIsXG4gICAgICByZXN1bHQsXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAuYmFkZ2VzIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cbiAgICAgIC5iYWRnZXMgPiAqIHtcbiAgICAgICAgd2lkdGg6IDI0JTtcbiAgICAgICAgbWluLXdpZHRoOiA5MHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuICAgICAgYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYmFja2dyb3VuZDogMDtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgIH1cbiAgICAgIC5mb290ZXIge1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJvbmJvYXJkaW5nLWludGVncmF0aW9uc1wiOiBPbmJvYXJkaW5nSW50ZWdyYXRpb25zO1xuICB9XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBd0JBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUE0QkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FDWEE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzdCQTtBQUVBO0FBQ0E7QUFFQTtBQUlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUtBQUE7QUFDQTtBQUNBO0FBQ0E7QUFmQTtBQXVCQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBS0E7QUFLQTtBQUNBO0FBRkE7QUFLQTtBQU1BO0FBQ0E7QUFGQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFFQTtBQURBO0FBSUE7QUFNQTtBQVdBO0FBR0E7QUFDQTtBQUVBO0FBRUE7QUFEQTtBQUNBO0FBR0E7QUFDQTtBQVlBO0FBUUE7QUFLQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2hGQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUNBO0FBQ0E7QUFLQTtBQUVBO0FBRUE7QUFLQTtBQUNBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUVBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFFQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTs7QUFFQTs7QUFJQTtBQUVBO0FBRkE7QUFOQTtBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUVBO0FBRkE7O0FBTUE7O0FBUEE7QUFjQTtBQUNBO0FBL0dBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQStFQSw4d0NBQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFGQTtBQUhBO0FBUUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoR0E7QUFTQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBOzs7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7O0FBQUE7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUVBO0FBRkE7O0FBTUE7QUFUQTtBQVdBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBOENBOzs7QUFuRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1pBO0FBVUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFNQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFHQTs7QUFJQTs7O0FBSkE7QUFTQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7OztBQUdBOzs7O0FBTkE7QUFZQTtBQUNBO0FBQ0E7QUFJQTs7QUFFQTs7O0FBR0E7QUFDQTs7O0FBR0E7Ozs7OztBQVFBO0FBQ0E7OztBQWxCQTtBQXdCQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUpBO0FBTUE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBTEE7QUFPQTs7OztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUlBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFxQkE7OztBQTdKQTs7OztBIiwic291cmNlUm9vdCI6IiJ9