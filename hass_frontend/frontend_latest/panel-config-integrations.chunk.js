(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-integrations"],{

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



const createAreaRegistryEntry = (hass, values) => hass.callWS(Object.assign({
  type: "config/area_registry/create"
}, values));
const updateAreaRegistryEntry = (hass, areaId, updates) => hass.callWS(Object.assign({
  type: "config/area_registry/update",
  area_id: areaId
}, updates));
const deleteAreaRegistryEntry = (hass, areaId) => hass.callWS({
  type: "config/area_registry/delete",
  area_id: areaId
});

const fetchAreaRegistry = conn => conn.sendMessagePromise({
  type: "config/area_registry/list"
}).then(areas => areas.sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_1__["compare"])(ent1.name, ent2.name)));

const subscribeAreaRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_2__["debounce"])(() => fetchAreaRegistry(conn).then(areas => store.setState(areas, true)), 500, true), "area_registry_updated");

const subscribeAreaRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_areaRegistry", fetchAreaRegistry, subscribeAreaRegistryUpdates, conn, onChange);

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


const createConfigFlow = (hass, handler) => hass.callApi("POST", "config/config_entries/flow", {
  handler
});
const fetchConfigFlow = (hass, flowId) => hass.callApi("GET", `config/config_entries/flow/${flowId}`);
const handleConfigFlowStep = (hass, flowId, data) => hass.callApi("POST", `config/config_entries/flow/${flowId}`, data);
const deleteConfigFlow = (hass, flowId) => hass.callApi("DELETE", `config/config_entries/flow/${flowId}`);
const getConfigFlowsInProgress = hass => hass.callApi("GET", "config/config_entries/flow");
const getConfigFlowHandlers = hass => hass.callApi("GET", "config/config_entries/flow_handlers");

const fetchConfigFlowInProgress = conn => conn.sendMessagePromise({
  type: "config/entity_registry/list"
});

const subscribeConfigFlowInProgressUpdates = (conn, store) => Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(conn.subscribeEvents(() => fetchConfigFlowInProgress(conn).then(flows => store.setState(flows, true)), 500, true), "config_entry_discovered");

const subscribeConfigFlowInProgress = (hass, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_configFlowProgress", fetchConfigFlowInProgress, subscribeConfigFlowInProgressUpdates, hass.connection, onChange);
const getConfigEntries = hass => hass.callApi("GET", "config/config_entries/entry");
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


const updateDeviceRegistryEntry = (hass, deviceId, updates) => hass.callWS(Object.assign({
  type: "config/device_registry/update",
  device_id: deviceId
}, updates));

const fetchDeviceRegistry = conn => conn.sendMessagePromise({
  type: "config/device_registry/list"
});

const subscribeDeviceRegistryUpdates = (conn, store) => conn.subscribeEvents(Object(_common_util_debounce__WEBPACK_IMPORTED_MODULE_1__["debounce"])(() => fetchDeviceRegistry(conn).then(devices => store.setState(devices, true)), 500, true), "device_registry_updated");

const subscribeDeviceRegistry = (conn, onChange) => Object(home_assistant_js_websocket__WEBPACK_IMPORTED_MODULE_0__["createCollection"])("_dr", fetchDeviceRegistry, subscribeDeviceRegistryUpdates, conn, onChange);

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
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["default"])(state) : null;
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

const loadConfigFlowDialog = () => Promise.all(/*! import() | dialog-config-flow */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~dialog-config-flow~ha-sidebar~more-info-dialog~onboarding-core-config~panel-calendar~panel-c~e05044eb"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-customize~panel-con~cb9ef179"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-customize~panel-config-integrations~panel-c~e5758c2a"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-calendar~panel-config-cus~ab938ece"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~panel-config-automation~panel-config-script~panel-kiosk~~500bf1bb"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-kiosk~panel-lovelace~pane~abfacb2f"), __webpack_require__.e("vendors~dialog-config-flow~panel-config-automation~panel-config-cloud~panel-config-integrations~pane~9cfecaa0"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog~onboarding-core-config"), __webpack_require__.e("vendors~dialog-config-flow~more-info-dialog"), __webpack_require__.e("vendors~dialog-config-flow"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow"), __webpack_require__.e("dialog-config-flow")]).then(__webpack_require__.bind(null, /*! ./dialog-config-flow */ "./src/dialogs/config-flow/dialog-config-flow.ts"));
const showConfigFlowDialog = (element, dialogParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-config-flow",
    dialogImport: loadConfigFlowDialog,
    dialogParams
  });
};

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










/*
 * @appliesMixin LocalizeMixIn
 * @appliesMixin EventsMixin
 */

class HaCeEntitiesCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        ha-card {
          flex: 1 0 100%;
          padding-bottom: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
      </style>
      <ha-card header="[[heading]]">
        <template is="dom-repeat" items="[[entities]]" as="entity">
          <paper-icon-item on-click="_openMoreInfo">
            <state-badge
              state-obj="[[_computeStateObj(entity, hass)]]"
              slot="item-icon"
            ></state-badge>
            <paper-item-body>
              <div class="name">[[_computeEntityName(entity, hass)]]</div>
              <div class="secondary entity-id">[[entity.entity_id]]</div>
            </paper-item-body>
          </paper-icon-item>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      heading: String,
      entities: Array,
      hass: Object
    };
  }

  _computeStateObj(entity, hass) {
    return hass.states[entity.entity_id];
  }

  _computeEntityName(entity, hass) {
    return Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_9__["computeEntityRegistryName"])(hass, entity) || `(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`;
  }

  _openMoreInfo(ev) {
    this.fire("hass-more-info", {
      entityId: ev.model.entity.entity_id
    });
  }

}

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





















/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class HaConfigManagerDashboard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_17__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_16__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <style include="iron-flex ha-style">
        ha-card {
          overflow: hidden;
        }
        mwc-button {
          top: 3px;
          margin-right: -0.57em;
        }
        .config-entry-row {
          display: flex;
          padding: 0 16px;
        }
        ha-state-icon {
          cursor: pointer;
        }
        .configured a {
          color: var(--primary-text-color);
          text-decoration: none;
        }
        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[rtl] {
          right: auto;
          left: 16px;
        }

        paper-fab[rtl][is-wide] {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      </style>

      <hass-subpage
        header="[[localize('ui.panel.config.integrations.caption')]]"
      >
        <template is="dom-if" if="[[progress.length]]">
          <ha-config-section>
            <span slot="header"
              >[[localize('ui.panel.config.integrations.discovered')]]</span
            >
            <ha-card>
              <template is="dom-repeat" items="[[progress]]">
                <div class="config-entry-row">
                  <paper-item-body>
                    [[_computeActiveFlowTitle(localize, item)]]
                  </paper-item-body>
                  <mwc-button on-click="_continueFlow"
                    >[[localize('ui.panel.config.integrations.configure')]]</mwc-button
                  >
                </div>
              </template>
            </ha-card>
          </ha-config-section>
        </template>

        <ha-config-section class="configured">
          <span slot="header"
            >[[localize('ui.panel.config.integrations.configured')]]</span
          >
          <ha-card>
            <template is="dom-if" if="[[!entries.length]]">
              <div class="config-entry-row">
                <paper-item-body two-line>
                  <div>[[localize('ui.panel.config.integrations.none')]]</div>
                </paper-item-body>
              </div>
            </template>
            <template is="dom-repeat" items="[[entries]]">
              <a href="/config/integrations/[[item.entry_id]]">
                <paper-item>
                  <paper-item-body two-line>
                    <div>
                      [[_computeIntegrationTitle(localize, item.domain)]]:
                      [[item.title]]
                    </div>
                    <div secondary>
                      <template
                        is="dom-repeat"
                        items="[[_computeConfigEntryEntities(hass, item, entities)]]"
                      >
                        <span>
                          <ha-state-icon
                            state-obj="[[item]]"
                            on-click="_handleMoreInfo"
                          ></ha-state-icon>
                          <paper-tooltip position="bottom"
                            >[[_computeStateName(item)]]</paper-tooltip
                          >
                        </span>
                      </template>
                    </div>
                  </paper-item-body>
                  <ha-icon-next></ha-icon-next>
                </paper-item>
              </a>
            </template>
          </ha-card>
        </ha-config-section>

        <paper-fab
          icon="hass:plus"
          title="[[localize('ui.panel.config.integrations.new')]]"
          on-click="_createFlow"
          is-wide$="[[isWide]]"
          rtl$="[[rtl]]"
        ></paper-fab>
      </hass-subpage>
    `;
  }

  static get properties() {
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

  connectedCallback() {
    super.connectedCallback();
    Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__["loadConfigFlowDialog"])();
  }

  _createFlow() {
    Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__["showConfigFlowDialog"])(this, {
      dialogClosedCallback: () => this.fire("hass-reload-entries")
    });
  }

  _continueFlow(ev) {
    Object(_dialogs_config_flow_show_dialog_config_flow__WEBPACK_IMPORTED_MODULE_19__["showConfigFlowDialog"])(this, {
      continueFlowId: ev.model.item.flow_id,
      dialogClosedCallback: () => this.fire("hass-reload-entries")
    });
  }

  _computeIntegrationTitle(localize, integration) {
    return localize(`component.${integration}.config.title`);
  }

  _computeActiveFlowTitle(localize, flow) {
    return Object(_data_config_entries__WEBPACK_IMPORTED_MODULE_20__["localizeConfigFlowTitle"])(localize, flow);
  }

  _computeConfigEntryEntities(hass, configEntry, entities) {
    if (!entities) {
      return [];
    }

    const states = [];
    entities.forEach(entity => {
      if (entity.config_entry_id === configEntry.entry_id && entity.entity_id in hass.states) {
        states.push(hass.states[entity.entity_id]);
      }
    });
    return states;
  }

  _computeStateName(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_18__["default"])(stateObj);
  }

  _handleMoreInfo(ev) {
    this.fire("hass-more-info", {
      entityId: ev.model.item.entity_id
    });
  }

  _computeRTL(hass) {
    return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTL"])(hass);
  }

}

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











class HaConfigEntryPage extends Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        .content {
          display: flex;
          flex-wrap: wrap;
          padding: 4px;
          justify-content: center;
        }
        .card {
          box-sizing: border-box;
          display: flex;
          flex: 1 0 300px;
          min-width: 0;
          max-width: 500px;
          padding: 8px;
        }
      </style>
      <hass-subpage header="[[configEntry.title]]">
        <paper-icon-button
          slot="toolbar-icon"
          icon="hass:delete"
          on-click="_removeEntry"
        ></paper-icon-button>
        <div class="content">
          <template
            is="dom-if"
            if="[[_computeIsEmpty(_configEntryDevices, _noDeviceEntities)]]"
          >
            <p>
              [[localize('ui.panel.config.integrations.config_entry.no_devices')]]
            </p>
          </template>
          <template is="dom-repeat" items="[[_configEntryDevices]]" as="device">
            <ha-device-card
              class="card"
              hass="[[hass]]"
              areas="[[areas]]"
              devices="[[devices]]"
              device="[[device]]"
              entities="[[entities]]"
              narrow="[[narrow]]"
            ></ha-device-card>
          </template>
          <template is="dom-if" if="[[_noDeviceEntities.length]]">
            <ha-ce-entities-card
              class="card"
              heading="[[localize('ui.panel.config.integrations.config_entry.no_device')]]"
              entities="[[_noDeviceEntities]]"
              hass="[[hass]]"
              narrow="[[narrow]]"
            ></ha-ce-entities-card>
          </template>
        </div>
      </hass-subpage>
    `;
  }

  static get properties() {
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

  _computeConfigEntryDevices(configEntry, devices) {
    if (!devices) return [];
    return devices.filter(device => device.config_entries.includes(configEntry.entry_id)).sort((dev1, dev2) => !!dev1.hub_device_id - !!dev2.hub_device_id || Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_4__["compare"])(dev1.name, dev2.name));
  }

  _computeNoDeviceEntities(configEntry, entities) {
    if (!entities) return [];
    return entities.filter(ent => !ent.device_id && ent.config_entry_id === configEntry.entry_id);
  }

  _computeIsEmpty(configEntryDevices, noDeviceEntities) {
    return configEntryDevices.length === 0 && noDeviceEntities.length === 0;
  }

  _removeEntry() {
    if (!confirm(this.localize("ui.panel.config.integrations.config_entry.delete_confirm"))) return;
    const entryId = this.configEntry.entry_id;
    this.hass.callApi("delete", `config/config_entries/entry/${entryId}`).then(result => {
      this.fire("hass-reload-entries");

      if (result.require_restart) {
        alert(this.localize("ui.panel.config.integrations.config_entry.restart_confirm"));
      }

      this.navigate("/config/integrations/dashboard", true);
    });
  }

}

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











class HaConfigIntegrations extends Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <app-route
        route="[[route]]"
        pattern="/:page"
        data="{{_routeData}}"
        tail="{{_routeTail}}"
      ></app-route>

      <template is="dom-if" if="[[_configEntry]]">
        <ha-config-entry-page
          hass="[[hass]]"
          config-entry="[[_configEntry]]"
          areas="[[_areas]]"
          entries="[[_entries]]"
          entities="[[_entities]]"
          devices="[[_devices]]"
          narrow="[[narrow]]"
        ></ha-config-entry-page>
      </template>
      <template is="dom-if" if="[[!_configEntry]]">
        <ha-config-entries-dashboard
          hass="[[hass]]"
          entries="[[_entries]]"
          entities="[[_entities]]"
          handlers="[[_handlers]]"
          progress="[[_progress]]"
        ></ha-config-entries-dashboard>
      </template>
    `;
  }

  static get properties() {
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

  ready() {
    super.ready();
    this.addEventListener("hass-reload-entries", () => this._loadData());
  }

  connectedCallback() {
    super.connectedCallback();

    this._loadData();

    this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_9__["subscribeAreaRegistry"])(this.hass.connection, areas => {
      this._areas = areas;
    });
    this.hass.connection.subscribeEvents(() => {
      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(500), () => this._loadData());
    }, "config_entry_discovered").then(unsub => {
      this._unsubEvents = unsub;
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    if (this._unsubEvents) this._unsubEvents();
    if (this._unsubAreas) this._unsubAreas();
  }

  _loadData() {
    this.hass.callApi("get", "config/config_entries/entry").then(entries => {
      this._entries = entries.sort((conf1, conf2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_8__["compare"])(conf1.title, conf2.title));
    });
    this.hass.callApi("get", "config/config_entries/flow").then(progress => {
      this._progress = progress;
    });
    this.hass.callApi("get", "config/config_entries/flow_handlers").then(handlers => {
      this._handlers = handlers;
    });
    this.hass.callWS({
      type: "config/entity_registry/list"
    }).then(entities => {
      this._entities = entities;
    });
    this.hass.callWS({
      type: "config/device_registry/list"
    }).then(devices => {
      this._devices = devices;
    });
  }

  _computeConfigEntry(routeData, entries) {
    return !!entries && !!routeData && entries.find(ent => ent.entry_id === routeData.page);
  }

}

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


















function computeEntityName(hass, entity) {
  if (entity.name) return entity.name;
  const state = hass.states[entity.entity_id];
  return state ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["default"])(state) : null;
}
/*
 * @appliesMixin EventsMixin
 */


class HaDeviceCard extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__["html"]`
      <style>
        :host(:not([narrow])) .device-entities {
          max-height: 225px;
          overflow: auto;
        }
        ha-card {
          flex: 1 0 100%;
          padding-bottom: 10px;
          min-width: 0;
        }
        .card-header {
          display: flex;
          justify-content: space-between;
        }
        .card-header .name {
          width: 90%;
        }
        .device {
          width: 30%;
        }
        .device .name {
          font-weight: bold;
        }
        .device .model,
        .device .manuf,
        .device .area {
          color: var(--secondary-text-color);
        }
        .area .extra-info .name {
          color: var(--primary-text-color);
        }
        .extra-info {
          margin-top: 8px;
        }
        paper-icon-item {
          cursor: pointer;
          padding-top: 4px;
          padding-bottom: 4px;
        }
        .manuf,
        .entity-id,
        .area {
          color: var(--secondary-text-color);
        }
      </style>
      <ha-card>
        <div class="card-header">
          <div class="name">[[_deviceName(device)]]</div>
          <paper-icon-button
            icon="hass:settings"
            on-click="_gotoSettings"
          ></paper-icon-button>
        </div>
        <div class="card-content">
          <div class="info">
            <div class="model">[[device.model]]</div>
            <div class="manuf">
              [[localize('ui.panel.config.integrations.config_entry.manuf',
              'manufacturer', device.manufacturer)]]
            </div>
            <template is="dom-if" if="[[device.area_id]]">
              <div class="area">
                <div class="extra-info">
                  [[localize('ui.panel.config.integrations.device_registry.area')]]
                  <span class="name">{{_computeArea(areas, device)}}</span>
                </div>
              </div>
            </template>
          </div>
          <template is="dom-if" if="[[device.hub_device_id]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.hub')]]
              <span class="hub"
                >[[_computeDeviceName(devices, device.hub_device_id)]]</span
              >
            </div>
          </template>
          <template is="dom-if" if="[[device.sw_version]]">
            <div class="extra-info">
              [[localize('ui.panel.config.integrations.config_entry.firmware',
              'version', device.sw_version)]]
            </div>
          </template>
        </div>

        <div class="device-entities">
          <template
            is="dom-repeat"
            items="[[_computeDeviceEntities(hass, device, entities)]]"
            as="entity"
          >
            <paper-icon-item on-click="_openMoreInfo">
              <state-badge
                state-obj="[[_computeStateObj(entity, hass)]]"
                slot="item-icon"
              ></state-badge>
              <paper-item-body>
                <div class="name">[[_computeEntityName(entity, hass)]]</div>
                <div class="secondary entity-id">[[entity.entity_id]]</div>
              </paper-item-body>
            </paper-icon-item>
          </template>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
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

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);
    Object(_show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__["loadDeviceRegistryDetailDialog"])();
  }

  connectedCallback() {
    super.connectedCallback();
    this._unsubAreas = Object(_data_area_registry__WEBPACK_IMPORTED_MODULE_15__["subscribeAreaRegistry"])(this.hass.connection, areas => {
      this._areas = areas;
    });
    this._unsubDevices = Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_14__["subscribeDeviceRegistry"])(this.hass.connection, devices => {
      this.devices = devices;
      this.device = devices.find(device => device.id === this.device.id);
    });
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._unsubAreas) {
      this._unsubAreas();
    }

    if (this._unsubDevices) {
      this._unsubDevices();
    }
  }

  _computeArea(areas, device) {
    if (!areas || !device || !device.area_id) {
      return "No Area";
    } // +1 because of "No Area" entry


    return areas.find(area => area.area_id === device.area_id).name;
  }

  _computeChildDevices(device, devices) {
    return devices.filter(dev => dev.hub_device_id === device.id).sort((dev1, dev2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_13__["compare"])(dev1.name, dev2.name));
  }

  _computeDeviceEntities(hass, device, entities) {
    return entities.filter(entity => entity.device_id === device.id).sort((ent1, ent2) => Object(_common_string_compare__WEBPACK_IMPORTED_MODULE_13__["compare"])(computeEntityName(hass, ent1) || `zzz${ent1.entity_id}`, computeEntityName(hass, ent2) || `zzz${ent2.entity_id}`));
  }

  _computeStateObj(entity, hass) {
    return hass.states[entity.entity_id];
  }

  _computeEntityName(entity, hass) {
    return computeEntityName(hass, entity) || `(${this.localize("ui.panel.config.integrations.config_entry.entity_unavailable")})`;
  }

  _deviceName(device) {
    return device.name_by_user || device.name;
  }

  _computeDeviceName(devices, deviceId) {
    const device = devices.find(dev => dev.id === deviceId);
    return device ? this._deviceName(device) : `(${this.localize("ui.panel.config.integrations.config_entry.device_unavailable")})`;
  }

  _gotoSettings() {
    const device = this.device;
    Object(_show_dialog_device_registry_detail__WEBPACK_IMPORTED_MODULE_16__["showDeviceRegistryDetailDialog"])(this, {
      device,
      updateEntry: async updates => {
        await Object(_data_device_registry__WEBPACK_IMPORTED_MODULE_14__["updateDeviceRegistryEntry"])(this.hass, device.id, updates);
      }
    });
  }

  _openMoreInfo(ev) {
    this.fire("hass-more-info", {
      entityId: ev.model.entity.entity_id
    });
  }

}

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

const loadDeviceRegistryDetailDialog = () => Promise.all(/*! import() | device-registry-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("device-registry-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-device-registry-detail */ "./src/panels/config/integrations/dialog-device-registry-detail.ts"));
const showDeviceRegistryDetailDialog = (element, deviceRegistryDetailParams) => {
  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-dialog", {
    dialogTag: "dialog-device-registry-detail",
    dialogImport: loadDeviceRegistryDetailDialog,
    dialogParams: deviceRegistryDetailParams
  });
};

/***/ })

}]);
//# sourceMappingURL=panel-config-integrations.chunk.js.map