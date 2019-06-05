(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-automation"],{

/***/ "./node_modules/lit-html/directives/if-defined.js":
/*!********************************************************!*\
  !*** ./node_modules/lit-html/directives/if-defined.js ***!
  \********************************************************/
/*! exports provided: ifDefined */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ifDefined", function() { return ifDefined; });
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
 * For AttributeParts, sets the attribute if the value is defined and removes
 * the attribute if the value is undefined.
 *
 * For other part types, this directive is a no-op.
 */

const ifDefined = Object(_lit_html_js__WEBPACK_IMPORTED_MODULE_0__["directive"])(value => part => {
  if (value === undefined && part instanceof _lit_html_js__WEBPACK_IMPORTED_MODULE_0__["AttributePart"]) {
    if (value !== part.value) {
      const name = part.committer.name;
      part.committer.element.removeAttribute(name);
    }
  } else {
    part.setValue(value);
  }
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

/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));

/***/ }),

/***/ "./src/data/automation.ts":
/*!********************************!*\
  !*** ./src/data/automation.ts ***!
  \********************************/
/*! exports provided: deleteAutomation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAutomation", function() { return deleteAutomation; });
const deleteAutomation = (hass, id) => hass.callApi("DELETE", `config/automation/config/${id}`);

/***/ }),

/***/ "./src/panels/config/automation/ha-automation-editor.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-editor.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _js_automation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../js/automation */ "./src/panels/config/js/automation.js");
/* harmony import */ var _common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/preact/unmount */ "./src/common/preact/unmount.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _data_automation__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../data/automation */ "./src/data/automation.ts");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/navigate */ "./src/common/navigate.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


















function AutomationEditor(mountEl, props, mergeEl) {
  return Object(preact__WEBPACK_IMPORTED_MODULE_6__["render"])(Object(preact__WEBPACK_IMPORTED_MODULE_6__["h"])(_js_automation__WEBPACK_IMPORTED_MODULE_9__["default"], props), mountEl, mergeEl);
}

class HaAutomationEditor extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  static get properties() {
    return {
      hass: {},
      automation: {},
      creatingNew: {},
      isWide: {},
      _errors: {},
      _dirty: {},
      _config: {}
    };
  }

  constructor() {
    super();

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "automation", void 0);

    _defineProperty(this, "isWide", void 0);

    _defineProperty(this, "creatingNew", void 0);

    _defineProperty(this, "_config", void 0);

    _defineProperty(this, "_dirty", void 0);

    _defineProperty(this, "_rendered", void 0);

    _defineProperty(this, "_errors", void 0);

    this._configChanged = this._configChanged.bind(this);
  }

  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._rendered) {
      Object(_common_preact_unmount__WEBPACK_IMPORTED_MODULE_10__["default"])(this._rendered);
      this._rendered = undefined;
    }
  }

  render() {
    if (!this.hass) {
      return;
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-app-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              @click=${this._backTapped}
            ></ha-paper-icon-button-arrow-prev>
            <div main-title>
              ${this.automation ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_11__["default"])(this.automation) : this.hass.localize("ui.panel.config.automation.editor.default_name")}
            </div>
            ${this.creatingNew ? "" : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <paper-icon-button
                    icon="hass:delete"
                    @click=${this._delete}
                  ></paper-icon-button>
                `}
          </app-toolbar>
        </app-header>

        <div class="content">
          ${this._errors ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="errors">${this._errors}</div>
              ` : ""}
          <div
            id="root"
            class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
      rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass)
    })}"
          ></div>
        </div>
        <paper-fab
          slot="fab"
          ?is-wide="${this.isWide}"
          ?dirty="${this._dirty}"
          icon="hass:content-save"
          .title="${this.hass.localize("ui.panel.config.automation.editor.save")}"
          @click=${this._saveAutomation}
          class="${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_5__["classMap"])({
      rtl: Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(this.hass)
    })}"
        ></paper-fab>
      </ha-app-layout>
    `;
  }

  updated(changedProps) {
    super.updated(changedProps);
    const oldAutomation = changedProps.get("automation");

    if (changedProps.has("automation") && this.automation && this.hass && ( // Only refresh config if we picked a new automation. If same ID, don't fetch it.
    !oldAutomation || oldAutomation.attributes.id !== this.automation.attributes.id)) {
      this.hass.callApi("GET", `config/automation/config/${this.automation.attributes.id}`).then(config => {
        // Normalize data: ensure trigger, action and condition are lists
        // Happens when people copy paste their automations into the config
        for (const key of ["trigger", "condition", "action"]) {
          const value = config[key];

          if (value && !Array.isArray(value)) {
            config[key] = [value];
          }
        }

        this._dirty = false;
        this._config = config;
      }, resp => {
        alert(resp.status_code === 404 ? this.hass.localize("ui.panel.config.automation.editor.load_error_not_editable") : this.hass.localize("ui.panel.config.automation.editor.load_error_unknown", "err_no", resp.status_code));
        history.back();
      });
    }

    if (changedProps.has("creatingNew") && this.creatingNew && this.hass) {
      this._dirty = false;
      this._config = {
        alias: this.hass.localize("ui.panel.config.automation.editor.default_name"),
        trigger: [{
          platform: "state"
        }],
        condition: [],
        action: [{
          service: ""
        }]
      };
    }

    if (changedProps.has("_config") && this.hass) {
      this._rendered = AutomationEditor(this.shadowRoot.querySelector("#root"), {
        automation: this._config,
        onChange: this._configChanged,
        isWide: this.isWide,
        hass: this.hass,
        localize: this.hass.localize
      }, this._rendered);
    }
  }

  _configChanged(config) {
    // onChange gets called a lot during initial rendering causing recursing calls.
    if (!this._rendered) {
      return;
    }

    this._config = config;
    this._errors = undefined;
    this._dirty = true;
  }

  _backTapped() {
    if (this._dirty && !confirm(this.hass.localize("ui.panel.config.automation.editor.unsaved_confirm"))) {
      return;
    }

    history.back();
  }

  async _delete() {
    if (!confirm("Are you sure you want to delete this automation?")) {
      return;
    }

    await Object(_data_automation__WEBPACK_IMPORTED_MODULE_13__["deleteAutomation"])(this.hass, this.automation.attributes.id);
    history.back();
  }

  _saveAutomation() {
    const id = this.creatingNew ? "" + Date.now() : this.automation.attributes.id;
    this.hass.callApi("POST", "config/automation/config/" + id, this._config).then(() => {
      this._dirty = false;

      if (this.creatingNew) {
        Object(_common_navigate__WEBPACK_IMPORTED_MODULE_14__["navigate"])(this, `/config/automation/edit/${id}`, true);
      }
    }, errors => {
      this._errors = errors.body.message;
      throw errors;
    });
  }

  static get styles() {
    return [_resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        ha-card {
          overflow: hidden;
        }
        .errors {
          padding: 20px;
          font-weight: bold;
          color: var(--google-red-500);
        }
        .content {
          padding-bottom: 20px;
        }
        .triggers,
        .script {
          margin-top: -16px;
        }
        .triggers ha-card,
        .script ha-card {
          margin-top: 16px;
        }
        .add-card mwc-button {
          display: block;
          text-align: center;
        }
        .card-menu {
          position: absolute;
          top: 0;
          right: 0;
          z-index: 1;
          color: var(--primary-text-color);
        }
        .rtl .card-menu {
          right: auto;
          left: 0;
        }
        .card-menu paper-item {
          cursor: pointer;
        }
        span[slot="introduction"] a {
          color: var(--primary-color);
        }
        paper-fab {
          position: fixed;
          bottom: 16px;
          right: 16px;
          z-index: 1;
          margin-bottom: -80px;
          transition: margin-bottom 0.3s;
        }

        paper-fab[is-wide] {
          bottom: 24px;
          right: 24px;
        }

        paper-fab[dirty] {
          margin-bottom: 0;
        }

        paper-fab.rtl {
          right: auto;
          left: 16px;
        }

        paper-fab[is-wide].rtl {
          bottom: 24px;
          right: auto;
          left: 24px;
        }
      `];
  }

}

customElements.define("ha-automation-editor", HaAutomationEditor);

/***/ }),

/***/ "./src/panels/config/automation/ha-automation-picker.ts":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-automation-picker.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/if-defined */ "./node_modules/lit-html/directives/if-defined.js");
/* harmony import */ var _polymer_paper_fab_paper_fab__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-fab/paper-fab */ "./node_modules/@polymer/paper-fab/paper-fab.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _layouts_hass_subpage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../layouts/hass-subpage */ "./src/layouts/hass-subpage.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! lit-html/directives/repeat */ "./node_modules/lit-html/directives/repeat.js");
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


















let HaAutomationPicker = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-automation-picker")], function (_initialize, _LitElement) {
  class HaAutomationPicker extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HaAutomationPicker,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "isWide",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "automations",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <hass-subpage
        .header=${this.hass.localize("ui.panel.config.automation.caption")}
      >
        <ha-config-section .isWide=${this.isWide}>
          <div slot="header">
            ${this.hass.localize("ui.panel.config.automation.picker.header")}
          </div>
          <div slot="introduction">
            ${this.hass.localize("ui.panel.config.automation.picker.introduction")}
            <p>
              <a
                href="https://home-assistant.io/docs/automation/editor/"
                target="_blank"
              >
                ${this.hass.localize("ui.panel.config.automation.picker.learn_more")}
              </a>
            </p>
          </div>

          <ha-card
            .heading=${this.hass.localize("ui.panel.config.automation.picker.pick_automation")}
          >
            ${this.automations.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                  <div class="card-content">
                    <p>
                      ${this.hass.localize("ui.panel.config.automation.picker.no_automations")}
                    </p>
                  </div>
                ` : Object(lit_html_directives_repeat__WEBPACK_IMPORTED_MODULE_15__["repeat"])(this.automations, automation => automation.entity_id, automation => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`

                      <div class='automation'>
                        <ha-entity-toggle
                          .hass=${this.hass}
                          .stateObj=${automation}
                        ></ha-entity-toggle>

                        <paper-item-body two-line>
                          <div>${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["default"])(automation)}</div>
                          <div secondary>
                            Last triggered: ${automation.attributes.last_triggered ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_13__["default"])(new Date(automation.attributes.last_triggered), this.hass.language) : "never"}
                          </div>
                        </paper-item-body>
                        <div class='actions'>
                          <paper-icon-button
                            .automation=${automation}
                            @click=${this._showInfo}
                            icon="hass:information-outline"
                          ></paper-icon-button>
                          <a
                            href=${Object(lit_html_directives_if_defined__WEBPACK_IMPORTED_MODULE_1__["ifDefined"])(automation.attributes.id ? `/config/automation/edit/${automation.attributes.id}` : undefined)}
                          >
                            <paper-icon-button
                              icon="hass:pencil"
                              .disabled=${!automation.attributes.id}
                            ></paper-icon-button>
                            ${!automation.attributes.id ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                    <paper-tooltip position="left">
                                      Only automations defined in
                                      automations.yaml are editable.
                                    </paper-tooltip>
                                  ` : ""}
                          </a>
                        </div>
                      </div>
                    </a>
                  `)}
          </ha-card>
        </ha-config-section>

        <a href="/config/automation/new">
          <paper-fab
            slot="fab"
            ?is-wide=${this.isWide}
            icon="hass:plus"
            title=${this.hass.localize("ui.panel.config.automation.picker.add_automation")}
            ?rtl=${Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_11__["computeRTL"])(this.hass)}
          ></paper-fab
        ></a>
      </hass-subpage>
    `;
      }
    }, {
      kind: "method",
      key: "_showInfo",
      value: function _showInfo(ev) {
        const entityId = ev.currentTarget.automation.entity_id;
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_14__["fireEvent"])(this, "hass-more-info", {
          entityId
        });
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_12__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          display: block;
        }

        ha-card {
          margin-bottom: 56px;
        }

        .automation {
          display: flex;
          flex-direction: horizontal;
          align-items: center;
          padding: 0 8px 0 16px;
        }

        .automation a[href] {
          color: var(--primary-text-color);
        }

        ha-entity-toggle {
          margin-right: 16px;
        }

        .actions {
          display: flex;
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

        a {
          color: var(--primary-color);
        }
      `];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/config/automation/ha-config-automation.js":
/*!**************************************************************!*\
  !*** ./src/panels/config/automation/ha-config-automation.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_automation_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-automation-editor */ "./src/panels/config/automation/ha-automation-editor.ts");
/* harmony import */ var _ha_automation_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-automation-picker */ "./src/panels/config/automation/ha-automation-picker.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");







class HaConfigAutomation extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        ha-automation-picker,
        ha-automation-editor {
          height: 100%;
        }
      </style>
      <app-route
        route="[[route]]"
        pattern="/edit/:automation"
        data="{{_routeData}}"
        active="{{_edittingAutomation}}"
      ></app-route>
      <app-route
        route="[[route]]"
        pattern="/new"
        active="{{_creatingNew}}"
      ></app-route>

      <template is="dom-if" if="[[!showEditor]]">
        <ha-automation-picker
          hass="[[hass]]"
          automations="[[automations]]"
          is-wide="[[isWide]]"
        ></ha-automation-picker>
      </template>

      <template is="dom-if" if="[[showEditor]]" restamp="">
        <ha-automation-editor
          hass="[[hass]]"
          automation="[[automation]]"
          is-wide="[[isWide]]"
          creating-new="[[_creatingNew]]"
        ></ha-automation-editor>
      </template>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      route: Object,
      isWide: Boolean,
      _routeData: Object,
      _routeMatches: Boolean,
      _creatingNew: Boolean,
      _edittingAutomation: Boolean,
      automations: {
        type: Array,
        computed: "computeAutomations(hass)"
      },
      automation: {
        type: Object,
        computed: "computeAutomation(automations, _edittingAutomation, _routeData)"
      },
      showEditor: {
        type: Boolean,
        computed: "computeShowEditor(_edittingAutomation, _creatingNew)"
      }
    };
  }

  computeAutomation(automations, edittingAddon, routeData) {
    if (!automations || !edittingAddon) {
      return null;
    }

    for (var i = 0; i < automations.length; i++) {
      if (automations[i].attributes.id === routeData.automation) {
        return automations[i];
      }
    }

    return null;
  }

  computeAutomations(hass) {
    var automations = [];
    Object.keys(hass.states).forEach(function (key) {
      var entity = hass.states[key];

      if (Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_5__["default"])(entity) === "automation") {
        automations.push(entity);
      }
    });
    return automations.sort(function entitySortBy(entityA, entityB) {
      var nameA = (entityA.attributes.alias || entityA.entity_id).toLowerCase();
      var nameB = (entityB.attributes.alias || entityB.entity_id).toLowerCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });
  }

  computeShowEditor(_edittingAutomation, _creatingNew) {
    return _creatingNew || _edittingAutomation;
  }

}

customElements.define("ha-config-automation", HaConfigAutomation);

/***/ }),

/***/ "./src/panels/config/js/automation.js":
/*!********************************************!*\
  !*** ./src/panels/config/js/automation.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Automation; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./trigger/index */ "./src/panels/config/js/trigger/index.js");
/* harmony import */ var _condition_index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./condition/index */ "./src/panels/config/js/condition/index.js");
/* harmony import */ var _script_index__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./script/index */ "./src/panels/config/js/script/index.js");







class Automation extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = this.onChange.bind(this);
    this.triggerChanged = this.triggerChanged.bind(this);
    this.conditionChanged = this.conditionChanged.bind(this);
    this.actionChanged = this.actionChanged.bind(this);
  }

  onChange(ev) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      [ev.target.name]: ev.target.value
    }));
  }

  triggerChanged(trigger) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      trigger
    }));
  }

  conditionChanged(condition) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      condition
    }));
  }

  actionChanged(action) {
    this.props.onChange(Object.assign({}, this.props.automation, {
      action
    }));
  }

  render({
    automation,
    isWide,
    hass,
    localize
  }) {
    const {
      alias,
      trigger,
      condition,
      action
    } = automation;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, alias), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, localize("ui.panel.config.automation.editor.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.alias"),
      name: "alias",
      value: alias,
      "onvalue-changed": this.onChange
    })))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, localize("ui.panel.config.automation.editor.triggers.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.triggers.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      href: "https://home-assistant.io/docs/automation/trigger/",
      target: "_blank"
    }, localize("ui.panel.config.automation.editor.triggers.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_index__WEBPACK_IMPORTED_MODULE_4__["default"], {
      trigger: trigger,
      onChange: this.triggerChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, localize("ui.panel.config.automation.editor.conditions.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.conditions.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      href: "https://home-assistant.io/docs/scripts/conditions/",
      target: "_blank"
    }, localize("ui.panel.config.automation.editor.conditions.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_index__WEBPACK_IMPORTED_MODULE_5__["default"], {
      condition: condition || [],
      onChange: this.conditionChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-config-section", {
      "is-wide": isWide
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "header"
    }, localize("ui.panel.config.automation.editor.actions.header")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("span", {
      slot: "introduction"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("p", null, localize("ui.panel.config.automation.editor.actions.introduction")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("a", {
      href: "https://home-assistant.io/docs/automation/action/",
      target: "_blank"
    }, localize("ui.panel.config.automation.editor.actions.learn_more"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_script_index__WEBPACK_IMPORTED_MODULE_6__["default"], {
      script: action,
      onChange: this.actionChanged,
      hass: hass,
      localize: localize
    })));
  }

}

/***/ }),

/***/ "./src/panels/config/js/condition/condition_row.js":
/*!*********************************************************!*\
  !*** ./src/panels/config/js/condition/condition_row.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConditionRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./condition_edit */ "./src/panels/config/js/condition/condition_edit.js");







class ConditionRow extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    // eslint-disable-next-line
    if (confirm(this.props.localize("ui.panel.config.automation.editor.conditions.delete_confirm"))) {
      this.props.onChange(this.props.index, null);
    }
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-menu"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", {
      "no-animations": true,
      "horizontal-align": "right",
      "horizontal-offset": "-5",
      "vertical-offset": "-5"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", {
      icon: "hass:dots-vertical",
      slot: "dropdown-trigger"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
      slot: "dropdown-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      disabled: true
    }, props.localize("ui.panel.config.automation.editor.conditions.duplicate")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      onTap: this.onDelete
    }, props.localize("ui.panel.config.automation.editor.conditions.delete"))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props)));
  }

}

/***/ }),

/***/ "./src/panels/config/js/condition/index.js":
/*!*************************************************!*\
  !*** ./src/panels/config/js/condition/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Condition; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _condition_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./condition_row */ "./src/panels/config/js/condition/condition_row.js");




class Condition extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.addCondition = this.addCondition.bind(this);
    this.conditionChanged = this.conditionChanged.bind(this);
  }

  addCondition() {
    const condition = this.props.condition.concat({
      condition: "state"
    });
    this.props.onChange(condition);
  }

  conditionChanged(index, newValue) {
    const condition = this.props.condition.concat();

    if (newValue === null) {
      condition.splice(index, 1);
    } else {
      condition[index] = newValue;
    }

    this.props.onChange(condition);
  }

  render({
    condition,
    hass,
    localize
  }) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "triggers"
    }, condition.map((cnd, idx) => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_condition_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
      index: idx,
      condition: cnd,
      onChange: this.conditionChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-actions add-card"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
      onTap: this.addCondition
    }, localize("ui.panel.config.automation.editor.conditions.add")))));
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/event.js":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/event.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EventTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _json_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../json_textarea */ "./src/panels/config/js/json_textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




class EventTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "trigger");
    this.eventDataChanged = this.eventDataChanged.bind(this);
  }
  /* eslint-disable camelcase */


  eventDataChanged(event_data) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event_data
    }));
  }

  render({
    trigger,
    localize
  }) {
    const {
      event_type,
      event_data
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.event.event_type"),
      name: "event_type",
      value: event_type,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_json_textarea__WEBPACK_IMPORTED_MODULE_2__["default"], {
      label: localize("ui.panel.config.automation.editor.triggers.type.event.event_data"),
      value: event_data,
      onChange: this.eventDataChanged
    }));
  }

}
EventTrigger.defaultConfig = {
  event_type: "",
  event_data: {}
};

/***/ }),

/***/ "./src/panels/config/js/trigger/geo_location.js":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/geo_location.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GeolocationTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class GeolocationTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
    this.zonePicked = this.zonePicked.bind(this);
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
  }

  zonePicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      zone: ev.target.value
    }));
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      source,
      zone,
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.source"),
      name: "source",
      value: source,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.triggers.type.geo_location.zone"),
      value: zone,
      onChange: this.zonePicked,
      hass: hass,
      allowCustomEntity: true,
      domainFilter: "zone"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "enter"
    }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.enter")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "leave"
    }, localize("ui.panel.config.automation.editor.triggers.type.geo_location.leave"))));
  }

}
GeolocationTrigger.defaultConfig = {
  source: "",
  zone: "",
  event: "enter"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/homeassistant.js":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/homeassistant.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HassTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");



class HassTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "start"
    }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.start")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "shutdown"
    }, localize("ui.panel.config.automation.editor.triggers.type.homeassistant.shutdown"))));
  }

}
HassTrigger.defaultConfig = {
  event: "start"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/index.js":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Trigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_row__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./trigger_row */ "./src/panels/config/js/trigger/trigger_row.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.js");





class Trigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.addTrigger = this.addTrigger.bind(this);
    this.triggerChanged = this.triggerChanged.bind(this);
  }

  addTrigger() {
    const trigger = this.props.trigger.concat(Object.assign({
      platform: "state"
    }, _state__WEBPACK_IMPORTED_MODULE_4__["default"].defaultConfig));
    this.props.onChange(trigger);
  }

  triggerChanged(index, newValue) {
    const trigger = this.props.trigger.concat();

    if (newValue === null) {
      trigger.splice(index, 1);
    } else {
      trigger[index] = newValue;
    }

    this.props.onChange(trigger);
  }

  render({
    trigger,
    hass,
    localize
  }) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "triggers"
    }, trigger.map((trg, idx) => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_row__WEBPACK_IMPORTED_MODULE_3__["default"], {
      index: idx,
      trigger: trg,
      onChange: this.triggerChanged,
      hass: hass,
      localize: localize
    })), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-actions add-card"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("mwc-button", {
      onTap: this.addTrigger
    }, localize("ui.panel.config.automation.editor.triggers.add")))));
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/mqtt.js":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/mqtt.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MQTTTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class MQTTTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      topic,
      payload
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.topic"),
      name: "topic",
      value: topic,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.mqtt.payload"),
      name: "payload",
      value: payload,
      "onvalue-changed": this.onChange
    }));
  }

}
MQTTTrigger.defaultConfig = {
  topic: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/numeric_state.js":
/*!*******************************************************!*\
  !*** ./src/panels/config/js/trigger/numeric_state.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NumericStateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class NumericStateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
    this.entityPicked = this.entityPicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      entity_id: ev.target.value
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      value_template,
      entity_id,
      below,
      above
    } = trigger;
    let trgFor = trigger.for;

    if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
      // If the trigger was defined using the yaml dict syntax, convert it to
      // the equivalent string format
      let {
        hours = 0,
        minutes = 0,
        seconds = 0
      } = trgFor;
      hours = hours.toString();
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");
      trgFor = `${hours}:${minutes}:${seconds}`;
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.above"),
      name: "above",
      value: above,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.below"),
      name: "below",
      value: below,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.triggers.type.numeric_state.value_template"),
      name: "value_template",
      value: value_template,
      "onvalue-changed": this.onChange,
      dir: "ltr"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.for"),
      name: "for",
      value: trgFor,
      "onvalue-changed": this.onChange
    }));
  }

}
NumericStateTrigger.defaultConfig = {
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/state.js":
/*!***********************************************!*\
  !*** ./src/panels/config/js/trigger/state.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");




class StateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_3__["onChangeEvent"].bind(this, "trigger");
    this.entityPicked = this.entityPicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      entity_id: ev.target.value
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      entity_id,
      to
    } = trigger;
    const trgFrom = trigger.from;
    let trgFor = trigger.for;

    if (trgFor && (trgFor.hours || trgFor.minutes || trgFor.seconds)) {
      // If the trigger was defined using the yaml dict syntax, convert it to
      // the equivalent string format
      let {
        hours = 0,
        minutes = 0,
        seconds = 0
      } = trgFor;
      hours = hours.toString();
      minutes = minutes.toString().padStart(2, "0");
      seconds = seconds.toString().padStart(2, "0");
      trgFor = `${hours}:${minutes}:${seconds}`;
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.from"),
      name: "from",
      value: trgFrom,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.to"),
      name: "to",
      value: to,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.state.for"),
      name: "for",
      value: trgFor,
      "onvalue-changed": this.onChange
    }));
  }

}
StateTrigger.defaultConfig = {
  entity_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/sun.js":
/*!*********************************************!*\
  !*** ./src/panels/config/js/trigger/sun.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SunTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");





class SunTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      offset,
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.sun.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunrise"
    }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunrise")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "sunset"
    }, localize("ui.panel.config.automation.editor.triggers.type.sun.sunset"))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.sun.offset"),
      name: "offset",
      value: offset,
      "onvalue-changed": this.onChange
    }));
  }

}
SunTrigger.defaultConfig = {
  event: "sunrise"
};

/***/ }),

/***/ "./src/panels/config/js/trigger/template.js":
/*!**************************************************!*\
  !*** ./src/panels/config/js/trigger/template.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TemplateTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _components_ha_textarea__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../components/ha-textarea */ "./src/components/ha-textarea.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TemplateTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }

  render({
    trigger,
    localize
  }) {
    /* eslint-disable camelcase */
    const {
      value_template
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-textarea", {
      label: localize("ui.panel.config.automation.editor.triggers.type.template.value_template"),
      name: "value_template",
      value: value_template,
      "onvalue-changed": this.onChange,
      dir: "ltr"
    }));
  }

}
TemplateTrigger.defaultConfig = {
  value_template: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/time.js":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/time.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimeTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TimeTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      at
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time.at"),
      name: "at",
      value: at,
      "onvalue-changed": this.onChange
    }));
  }

}
TimeTrigger.defaultConfig = {
  at: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/time_pattern.js":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/time_pattern.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TimePatternTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class TimePatternTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    localize
  }) {
    const {
      hours,
      minutes,
      seconds
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.hours"),
      name: "hours",
      value: hours,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.minutes"),
      name: "minutes",
      value: minutes,
      "onvalue-changed": this.onChange
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.time_pattern.seconds"),
      name: "seconds",
      value: seconds,
      "onvalue-changed": this.onChange
    }));
  }

}
TimePatternTrigger.defaultConfig = {
  hours: "",
  minutes: "",
  seconds: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_edit.js":
/*!******************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_edit.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerEdit; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu_light__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu-light */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./event */ "./src/panels/config/js/trigger/event.js");
/* harmony import */ var _geo_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./geo_location */ "./src/panels/config/js/trigger/geo_location.js");
/* harmony import */ var _homeassistant__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./homeassistant */ "./src/panels/config/js/trigger/homeassistant.js");
/* harmony import */ var _mqtt__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mqtt */ "./src/panels/config/js/trigger/mqtt.js");
/* harmony import */ var _numeric_state__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./numeric_state */ "./src/panels/config/js/trigger/numeric_state.js");
/* harmony import */ var _time_pattern__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./time_pattern */ "./src/panels/config/js/trigger/time_pattern.js");
/* harmony import */ var _state__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./state */ "./src/panels/config/js/trigger/state.js");
/* harmony import */ var _sun__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sun */ "./src/panels/config/js/trigger/sun.js");
/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./template */ "./src/panels/config/js/trigger/template.js");
/* harmony import */ var _time__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./time */ "./src/panels/config/js/trigger/time.js");
/* harmony import */ var _webhook__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./webhook */ "./src/panels/config/js/trigger/webhook.js");
/* harmony import */ var _zone__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./zone */ "./src/panels/config/js/trigger/zone.js");
















const TYPES = {
  event: _event__WEBPACK_IMPORTED_MODULE_4__["default"],
  state: _state__WEBPACK_IMPORTED_MODULE_10__["default"],
  geo_location: _geo_location__WEBPACK_IMPORTED_MODULE_5__["default"],
  homeassistant: _homeassistant__WEBPACK_IMPORTED_MODULE_6__["default"],
  mqtt: _mqtt__WEBPACK_IMPORTED_MODULE_7__["default"],
  numeric_state: _numeric_state__WEBPACK_IMPORTED_MODULE_8__["default"],
  sun: _sun__WEBPACK_IMPORTED_MODULE_11__["default"],
  template: _template__WEBPACK_IMPORTED_MODULE_12__["default"],
  time: _time__WEBPACK_IMPORTED_MODULE_13__["default"],
  time_pattern: _time_pattern__WEBPACK_IMPORTED_MODULE_9__["default"],
  webhook: _webhook__WEBPACK_IMPORTED_MODULE_14__["default"],
  zone: _zone__WEBPACK_IMPORTED_MODULE_15__["default"]
};
const OPTIONS = Object.keys(TYPES).sort();
class TriggerEdit extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.typeChanged = this.typeChanged.bind(this);
  }

  typeChanged(ev) {
    const type = ev.target.selectedItem.attributes.platform.value;

    if (type !== this.props.trigger.platform) {
      this.props.onChange(this.props.index, Object.assign({
        platform: type
      }, TYPES[type].defaultConfig));
    }
  }

  render({
    index,
    trigger,
    onChange,
    hass,
    localize
  }) {
    const Comp = TYPES[trigger.platform];
    const selected = OPTIONS.indexOf(trigger.platform);

    if (!Comp) {
      return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, localize("ui.panel.config.automation.editor.triggers.unsupported_platform", "platform", trigger.platform), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("pre", null, JSON.stringify(trigger, null, 2)));
    }

    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-dropdown-menu-light", {
      label: localize("ui.panel.config.automation.editor.triggers.type_select"),
      "no-animations": true
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
      slot: "dropdown-content",
      selected: selected,
      "oniron-select": this.typeChanged
    }, OPTIONS.map(opt => Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      platform: opt
    }, localize(`ui.panel.config.automation.editor.triggers.type.${opt}.label`))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(Comp, {
      index: index,
      trigger: trigger,
      onChange: onChange,
      hass: hass,
      localize: localize
    }));
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/trigger_row.js":
/*!*****************************************************!*\
  !*** ./src/panels/config/js/trigger/trigger_row.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TriggerRow; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _trigger_edit__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./trigger_edit */ "./src/panels/config/js/trigger/trigger_edit.js");







class TriggerRow extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onDelete = this.onDelete.bind(this);
  }

  onDelete() {
    // eslint-disable-next-line
    if (confirm(this.props.localize("ui.panel.config.automation.editor.triggers.delete_confirm"))) {
      this.props.onChange(this.props.index, null);
    }
  }

  render(props) {
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-card", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", {
      class: "card-menu"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-menu-button", {
      "no-animations": true,
      "horizontal-align": "right",
      "horizontal-offset": "-5",
      "vertical-offset": "-5"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-icon-button", {
      icon: "hass:dots-vertical",
      slot: "dropdown-trigger"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-listbox", {
      slot: "dropdown-content"
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      disabled: true
    }, props.localize("ui.panel.config.automation.editor.triggers.duplicate")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-item", {
      onTap: this.onDelete
    }, props.localize("ui.panel.config.automation.editor.triggers.delete"))))), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])(_trigger_edit__WEBPACK_IMPORTED_MODULE_6__["default"], props)));
  }

}

/***/ }),

/***/ "./src/panels/config/js/trigger/webhook.js":
/*!*************************************************!*\
  !*** ./src/panels/config/js/trigger/webhook.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return WebhookTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");



class WebhookTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_2__["onChangeEvent"].bind(this, "trigger");
  }

  render({
    trigger,
    localize
  }) {
    const {
      webhook_id: webhookId
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-input", {
      label: localize("ui.panel.config.automation.editor.triggers.type.webhook.webhook_id"),
      name: "webhook_id",
      value: webhookId,
      "onvalue-changed": this.onChange
    }));
  }

}
WebhookTrigger.defaultConfig = {
  webhook_id: ""
};

/***/ }),

/***/ "./src/panels/config/js/trigger/zone.js":
/*!**********************************************!*\
  !*** ./src/panels/config/js/trigger/zone.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ZoneTrigger; });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ "./node_modules/preact/dist/preact.mjs");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _components_entity_ha_entity_picker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../components/entity/ha-entity-picker */ "./src/components/entity/ha-entity-picker.ts");
/* harmony import */ var _common_preact_event__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../../common/preact/event */ "./src/common/preact/event.ts");
/* harmony import */ var _common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../../common/entity/has_location */ "./src/common/entity/has_location.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");








function zoneAndLocationFilter(stateObj) {
  return Object(_common_entity_has_location__WEBPACK_IMPORTED_MODULE_5__["default"])(stateObj) && Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["default"])(stateObj) !== "zone";
}

class ZoneTrigger extends preact__WEBPACK_IMPORTED_MODULE_0__["Component"] {
  constructor() {
    super();
    this.onChange = _common_preact_event__WEBPACK_IMPORTED_MODULE_4__["onChangeEvent"].bind(this, "trigger");
    this.radioGroupPicked = this.radioGroupPicked.bind(this);
    this.entityPicked = this.entityPicked.bind(this);
    this.zonePicked = this.zonePicked.bind(this);
  }

  entityPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      entity_id: ev.target.value
    }));
  }

  zonePicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      zone: ev.target.value
    }));
  }

  radioGroupPicked(ev) {
    this.props.onChange(this.props.index, Object.assign({}, this.props.trigger, {
      event: ev.target.selected
    }));
  }
  /* eslint-disable camelcase */


  render({
    trigger,
    hass,
    localize
  }) {
    const {
      entity_id,
      zone,
      event
    } = trigger;
    return Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("div", null, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.triggers.type.zone.entity"),
      value: entity_id,
      onChange: this.entityPicked,
      hass: hass,
      allowCustomEntity: true,
      entityFilter: zoneAndLocationFilter
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("ha-entity-picker", {
      label: localize("ui.panel.config.automation.editor.triggers.type.zone.zone"),
      value: zone,
      onChange: this.zonePicked,
      hass: hass,
      allowCustomEntity: true,
      domainFilter: "zone"
    }), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("label", {
      id: "eventlabel"
    }, localize("ui.panel.config.automation.editor.triggers.type.zone.event")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-group", {
      selected: event,
      "aria-labelledby": "eventlabel",
      "onpaper-radio-group-changed": this.radioGroupPicked
    }, Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "enter"
    }, localize("ui.panel.config.automation.editor.triggers.type.zone.enter")), Object(preact__WEBPACK_IMPORTED_MODULE_0__["h"])("paper-radio-button", {
      name: "leave"
    }, localize("ui.panel.config.automation.editor.triggers.type.zone.leave"))));
  }

}
ZoneTrigger.defaultConfig = {
  entity_id: "",
  zone: "",
  event: "enter"
};

/***/ })

}]);
//# sourceMappingURL=panel-config-automation.chunk.js.map