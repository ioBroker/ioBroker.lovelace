(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lovelace-yaml-editor"],{

/***/ "./src/panels/lovelace/common/structs/is-entity-id.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-entity-id.ts ***!
  \************************************************************/
/*! exports provided: isEntityId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isEntityId", function() { return isEntityId; });
function isEntityId(value) {
  if (typeof value !== "string") {
    return "entity id should be a string";
  }

  if (!value.includes(".")) {
    return "entity id should be in the format 'domain.entity'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/is-icon.ts":
/*!*******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/is-icon.ts ***!
  \*******************************************************/
/*! exports provided: isIcon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIcon", function() { return isIcon; });
function isIcon(value) {
  if (typeof value !== "string") {
    return "icon should be a string";
  }

  if (!value.includes(":")) {
    return "icon should be in the format 'mdi:icon'";
  }

  return true;
}

/***/ }),

/***/ "./src/panels/lovelace/common/structs/struct.ts":
/*!******************************************************!*\
  !*** ./src/panels/lovelace/common/structs/struct.ts ***!
  \******************************************************/
/*! exports provided: struct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "struct", function() { return struct; });
/* harmony import */ var superstruct__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! superstruct */ "./node_modules/superstruct/lib/index.es.js");
/* harmony import */ var _is_entity_id__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./is-entity-id */ "./src/panels/lovelace/common/structs/is-entity-id.ts");
/* harmony import */ var _is_icon__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./is-icon */ "./src/panels/lovelace/common/structs/is-icon.ts");



const struct = Object(superstruct__WEBPACK_IMPORTED_MODULE_0__["superstruct"])({
  types: {
    "entity-id": _is_entity_id__WEBPACK_IMPORTED_MODULE_1__["isEntityId"],
    icon: _is_icon__WEBPACK_IMPORTED_MODULE_2__["isIcon"]
  }
});

/***/ }),

/***/ "./src/panels/lovelace/hui-editor.ts":
/*!*******************************************!*\
  !*** ./src/panels/lovelace/hui-editor.ts ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-yaml */ "./node_modules/js-yaml/index.js");
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_yaml__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./common/structs/struct */ "./src/panels/lovelace/common/structs/struct.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _components_hui_yaml_editor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/hui-yaml-editor */ "./src/panels/lovelace/components/hui-yaml-editor.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













 // This is not a duplicate import, one is for types, one is for element.
// tslint:disable-next-line

const lovelaceStruct = _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].interface({
  title: "string?",
  views: ["object"],
  resources: _common_structs_struct__WEBPACK_IMPORTED_MODULE_9__["struct"].optional(["object"])
});

class LovelaceFullConfigEditor extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "lovelace", void 0);

    _defineProperty(this, "closeEditor", void 0);

    _defineProperty(this, "_saving", void 0);

    _defineProperty(this, "_changed", void 0);

    _defineProperty(this, "_generation", void 0);
  }

  static get properties() {
    return {
      hass: {},
      lovelace: {},
      closeEditor: {},
      _saving: {},
      _changed: {}
    };
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <app-header-layout>
        <app-header>
          <app-toolbar>
            <paper-icon-button
              icon="hass:close"
              @click="${this._closeEditor}"
            ></paper-icon-button>
            <div main-title>
              ${this.hass.localize("ui.panel.lovelace.editor.raw_editor.header")}
            </div>
            <div
              class="save-button
              ${Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_1__["classMap"])({
      saved: this._saving === false || this._changed === true
    })}"
            >
              ${this._changed ? this.hass.localize("ui.panel.lovelace.editor.raw_editor.unsaved_changes") : this.hass.localize("ui.panel.lovelace.editor.raw_editor.saved")}
            </div>
            <mwc-button raised @click="${this._handleSave}"
              >${this.hass.localize("ui.panel.lovelace.editor.raw_editor.save")}</mwc-button
            >
          </app-toolbar>
        </app-header>
        <div class="content">
          <hui-yaml-editor
            .hass="${this.hass}"
            @yaml-changed="${this._yamlChanged}"
            @yaml-save="${this._handleSave}"
          >
          </hui-yaml-editor>
        </div>
      </app-header-layout>
    `;
  }

  firstUpdated() {
    this.yamlEditor.value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeDump(this.lovelace.config);
    this.yamlEditor.codemirror.clearHistory();
    this._generation = this.yamlEditor.codemirror.changeGeneration(true);
  }

  static get styles() {
    return [_resources_styles__WEBPACK_IMPORTED_MODULE_11__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          --code-mirror-height: 100%;
        }

        app-header-layout {
          height: 100vh;
        }

        app-toolbar {
          background-color: var(--dark-background-color, #455a64);
          color: var(--dark-text-color);
        }

        .comments {
          font-size: 16px;
        }

        .content {
          height: calc(100vh - 68px);
        }

        hui-code-editor {
          height: 100%;
        }

        .save-button {
          opacity: 0;
          font-size: 14px;
          padding: 0px 10px;
        }

        .saved {
          opacity: 1;
        }
      `];
  }

  _yamlChanged() {
    if (!this._generation) {
      return;
    }

    this._changed = !this.yamlEditor.codemirror.isClean(this._generation);

    if (this._changed && !window.onbeforeunload) {
      window.onbeforeunload = () => {
        return true;
      };
    } else if (!this._changed && window.onbeforeunload) {
      window.onbeforeunload = null;
    }
  }

  _closeEditor() {
    if (this._changed) {
      if (!confirm("You have unsaved changes, are you sure you want to exit?")) {
        return;
      }
    }

    window.onbeforeunload = null;

    if (this.closeEditor) {
      this.closeEditor();
    }
  }

  async _handleSave() {
    this._saving = true;

    if (this.yamlEditor.hasComments) {
      if (!confirm("Your config contains comment(s), these will not be saved. Do you want to continue?")) {
        return;
      }
    }

    let value;

    try {
      value = js_yaml__WEBPACK_IMPORTED_MODULE_2___default.a.safeLoad(this.yamlEditor.value);
    } catch (err) {
      alert(`Unable to parse YAML: ${err}`);
      this._saving = false;
      return;
    }

    try {
      value = lovelaceStruct(value);
    } catch (err) {
      alert(`Your config is not valid: ${err}`);
      return;
    }

    try {
      await this.lovelace.saveConfig(value);
    } catch (err) {
      alert(`Unable to save YAML: ${err}`);
    }

    this._generation = this.yamlEditor.codemirror.changeGeneration(true);
    window.onbeforeunload = null;
    this._saving = false;
    this._changed = false;
  }

  get yamlEditor() {
    return this.shadowRoot.querySelector("hui-yaml-editor");
  }

}

customElements.define("hui-editor", LovelaceFullConfigEditor);

/***/ })

}]);
//# sourceMappingURL=lovelace-yaml-editor.chunk.js.map