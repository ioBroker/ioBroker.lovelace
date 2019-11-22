(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["hui-view-editable"],{

/***/ "./src/panels/lovelace/components/hui-card-options.ts":
/*!************************************************************!*\
  !*** ./src/panels/lovelace/components/hui-card-options.ts ***!
  \************************************************************/
/*! exports provided: HuiCardOptions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HuiCardOptions", function() { return HuiCardOptions; });
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../editor/card-editor/show-edit-card-dialog */ "./src/panels/lovelace/editor/card-editor/show-edit-card-dialog.ts");
/* harmony import */ var _editor_delete_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../editor/delete-card */ "./src/panels/lovelace/editor/delete-card.ts");
/* harmony import */ var _editor_config_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../editor/config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../editor/card-editor/show-move-card-view-dialog */ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts");
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










let HuiCardOptions = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("hui-card-options")], function (_initialize, _LitElement) {
  class HuiCardOptions extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: HuiCardOptions,
    d: [{
      kind: "field",
      key: "cardConfig",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "lovelace",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "path",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <slot></slot>
      <div class="options">
        <div class="primary-actions">
          <mwc-button @click="${this._editCard}"
            >${this.hass.localize("ui.panel.lovelace.editor.edit_card.edit")}</mwc-button
          >
        </div>
        <div class="secondary-actions">
          <paper-icon-button
            title="Move card down"
            class="move-arrow"
            icon="hass:arrow-down"
            @click="${this._cardDown}"
            ?disabled="${this.lovelace.config.views[this.path[0]].cards.length === this.path[1] + 1}"
          ></paper-icon-button>
          <paper-icon-button
            title="Move card up"
            class="move-arrow"
            icon="hass:arrow-up"
            @click="${this._cardUp}"
            ?disabled="${this.path[1] === 0}"
          ></paper-icon-button>
          <paper-menu-button
            horizontal-align="right"
            vertical-align="bottom"
            vertical-offset="40"
          >
            <paper-icon-button
              icon="hass:dots-vertical"
              slot="dropdown-trigger"
              aria-label=${this.hass.localize("ui.panel.lovelace.editor.edit_card.options")}
            ></paper-icon-button>
            <paper-listbox slot="dropdown-content">
              <paper-item @click="${this._moveCard}">
                ${this.hass.localize("ui.panel.lovelace.editor.edit_card.move")}</paper-item
              >
              <paper-item .class="delete-item" @click="${this._deleteCard}">
                ${this.hass.localize("ui.panel.lovelace.editor.edit_card.delete")}</paper-item
              >
            </paper-listbox>
          </paper-menu-button>
        </div>
      </div>
    `;
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      div.options {
        border-top: 1px solid #e8e8e8;
        padding: 5px 8px;
        background: var(--paper-card-background-color, white);
        box-shadow: rgba(0, 0, 0, 0.14) 0px 2px 2px 0px,
          rgba(0, 0, 0, 0.12) 0px 1px 5px -4px,
          rgba(0, 0, 0, 0.2) 0px 3px 1px -2px;
        display: flex;
      }

      div.options .primary-actions {
        flex: 1;
        margin: auto;
      }

      div.options .secondary-actions {
        flex: 4;
        text-align: right;
      }

      paper-icon-button {
        color: var(--primary-text-color);
      }

      paper-icon-button.move-arrow[disabled] {
        color: var(--disabled-text-color);
      }

      paper-menu-button {
        color: var(--secondary-text-color);
        padding: 0;
      }

      paper-item.header {
        color: var(--primary-text-color);
        text-transform: uppercase;
        font-weight: 500;
        font-size: 14px;
      }

      paper-item {
        cursor: pointer;
      }

      paper-item.delete-item {
        color: var(--google-red-500);
      }
    `;
      }
    }, {
      kind: "method",
      key: "_editCard",
      value: function _editCard() {
        Object(_editor_card_editor_show_edit_card_dialog__WEBPACK_IMPORTED_MODULE_5__["showEditCardDialog"])(this, {
          lovelace: this.lovelace,
          path: this.path
        });
      }
    }, {
      kind: "method",
      key: "_cardUp",
      value: function _cardUp() {
        const lovelace = this.lovelace;
        const path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_7__["swapCard"])(lovelace.config, path, [path[0], path[1] - 1]));
      }
    }, {
      kind: "method",
      key: "_cardDown",
      value: function _cardDown() {
        const lovelace = this.lovelace;
        const path = this.path;
        lovelace.saveConfig(Object(_editor_config_util__WEBPACK_IMPORTED_MODULE_7__["swapCard"])(lovelace.config, path, [path[0], path[1] + 1]));
      }
    }, {
      kind: "method",
      key: "_moveCard",
      value: function _moveCard() {
        Object(_editor_card_editor_show_move_card_view_dialog__WEBPACK_IMPORTED_MODULE_8__["showMoveCardViewDialog"])(this, {
          path: this.path,
          lovelace: this.lovelace
        });
      }
    }, {
      kind: "method",
      key: "_deleteCard",
      value: function _deleteCard() {
        Object(_editor_delete_card__WEBPACK_IMPORTED_MODULE_6__["confDeleteCard"])(this, this.hass, this.lovelace, this.path);
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts":
/*!******************************************************************************!*\
  !*** ./src/panels/lovelace/editor/card-editor/show-move-card-view-dialog.ts ***!
  \******************************************************************************/
/*! exports provided: showMoveCardViewDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMoveCardViewDialog", function() { return showMoveCardViewDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;

const registerEditCardDialog = element => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
  dialogShowEvent: "show-move-card-view",
  dialogTag: "hui-dialog-move-card-view",
  dialogImport: () => Promise.all(/*! import() | hui-dialog-move-card-view */[__webpack_require__.e("vendors~confirmation~dialog-config-flow~dialog-zha-device-info~hui-dialog-edit-card~hui-dialog-edit-~ae2d1c3e"), __webpack_require__.e("hui-dialog-move-card-view~hui-dialog-select-view"), __webpack_require__.e("hui-dialog-move-card-view")]).then(__webpack_require__.bind(null, /*! ./hui-dialog-move-card-view */ "./src/panels/lovelace/editor/card-editor/hui-dialog-move-card-view.ts"))
});

const showMoveCardViewDialog = (element, moveCardViewDialogParams) => {
  if (!registeredDialog) {
    registeredDialog = true;
    registerEditCardDialog(element);
  }

  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "show-move-card-view", moveCardViewDialogParams);
};

/***/ }),

/***/ "./src/panels/lovelace/editor/delete-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/lovelace/editor/delete-card.ts ***!
  \***************************************************/
/*! exports provided: confDeleteCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "confDeleteCard", function() { return confDeleteCard; });
/* harmony import */ var _config_util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config-util */ "./src/panels/lovelace/editor/config-util.ts");
/* harmony import */ var _dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../dialogs/confirmation/show-dialog-confirmation */ "./src/dialogs/confirmation/show-dialog-confirmation.ts");


async function confDeleteCard(element, hass, lovelace, path) {
  Object(_dialogs_confirmation_show_dialog_confirmation__WEBPACK_IMPORTED_MODULE_1__["showConfirmationDialog"])(element, {
    text: hass.localize("ui.panel.lovelace.cards.confirm_delete"),
    confirm: async () => {
      try {
        await lovelace.saveConfig(Object(_config_util__WEBPACK_IMPORTED_MODULE_0__["deleteCard"])(lovelace.config, path));
      } catch (err) {
        alert(`Deleting failed: ${err.message}`);
      }
    }
  });
}

/***/ }),

/***/ "./src/panels/lovelace/views/hui-view-editable.ts":
/*!********************************************************!*\
  !*** ./src/panels/lovelace/views/hui-view-editable.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_hui_card_options__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/hui-card-options */ "./src/panels/lovelace/components/hui-card-options.ts");
/* harmony import */ var _components_ha_fab__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/ha-fab */ "./src/components/ha-fab.ts");
// hui-view dependencies for when in edit mode.



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaHVpLXZpZXctZWRpdGFibGUuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL2VkaXRvci9kZWxldGUtY2FyZC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvcGFuZWxzL2xvdmVsYWNlL3ZpZXdzL2h1aS12aWV3LWVkaXRhYmxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIGh0bWwsXG4gIExpdEVsZW1lbnQsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHByb3BlcnR5LFxuICBjc3MsXG4gIENTU1Jlc3VsdCxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IFwiQG1hdGVyaWFsL213Yy1idXR0b25cIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItbGlzdGJveC9wYXBlci1saXN0Ym94XCI7XG5cbmltcG9ydCB7IHNob3dFZGl0Q2FyZERpYWxvZyB9IGZyb20gXCIuLi9lZGl0b3IvY2FyZC1lZGl0b3Ivc2hvdy1lZGl0LWNhcmQtZGlhbG9nXCI7XG5pbXBvcnQgeyBjb25mRGVsZXRlQ2FyZCB9IGZyb20gXCIuLi9lZGl0b3IvZGVsZXRlLWNhcmRcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IExvdmVsYWNlQ2FyZENvbmZpZyB9IGZyb20gXCIuLi8uLi8uLi9kYXRhL2xvdmVsYWNlXCI7XG5pbXBvcnQgeyBMb3ZlbGFjZSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgc3dhcENhcmQgfSBmcm9tIFwiLi4vZWRpdG9yL2NvbmZpZy11dGlsXCI7XG5pbXBvcnQgeyBzaG93TW92ZUNhcmRWaWV3RGlhbG9nIH0gZnJvbSBcIi4uL2VkaXRvci9jYXJkLWVkaXRvci9zaG93LW1vdmUtY2FyZC12aWV3LWRpYWxvZ1wiO1xuXG5AY3VzdG9tRWxlbWVudChcImh1aS1jYXJkLW9wdGlvbnNcIilcbmV4cG9ydCBjbGFzcyBIdWlDYXJkT3B0aW9ucyBleHRlbmRzIExpdEVsZW1lbnQge1xuICBwdWJsaWMgY2FyZENvbmZpZz86IExvdmVsYWNlQ2FyZENvbmZpZztcblxuICBAcHJvcGVydHkoKSBwdWJsaWMgaGFzcz86IEhvbWVBc3Npc3RhbnQ7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIGxvdmVsYWNlPzogTG92ZWxhY2U7XG5cbiAgQHByb3BlcnR5KCkgcHVibGljIHBhdGg/OiBbbnVtYmVyLCBudW1iZXJdO1xuXG4gIHByb3RlY3RlZCByZW5kZXIoKTogVGVtcGxhdGVSZXN1bHQgfCB2b2lkIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDxkaXYgY2xhc3M9XCJvcHRpb25zXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJwcmltYXJ5LWFjdGlvbnNcIj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9XCIke3RoaXMuX2VkaXRDYXJkfVwiXG4gICAgICAgICAgICA+JHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQuZWRpdFwiXG4gICAgICAgICAgICApfTwvbXdjLWJ1dHRvblxuICAgICAgICAgID5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnktYWN0aW9uc1wiPlxuICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgdGl0bGU9XCJNb3ZlIGNhcmQgZG93blwiXG4gICAgICAgICAgICBjbGFzcz1cIm1vdmUtYXJyb3dcIlxuICAgICAgICAgICAgaWNvbj1cImhhc3M6YXJyb3ctZG93blwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NhcmREb3dufVwiXG4gICAgICAgICAgICA/ZGlzYWJsZWQ9XCIke3RoaXMubG92ZWxhY2UhLmNvbmZpZy52aWV3c1t0aGlzLnBhdGghWzBdXS5jYXJkcyFcbiAgICAgICAgICAgICAgLmxlbmd0aCA9PT1cbiAgICAgICAgICAgICAgdGhpcy5wYXRoIVsxXSArIDF9XCJcbiAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICA8cGFwZXItaWNvbi1idXR0b25cbiAgICAgICAgICAgIHRpdGxlPVwiTW92ZSBjYXJkIHVwXCJcbiAgICAgICAgICAgIGNsYXNzPVwibW92ZS1hcnJvd1wiXG4gICAgICAgICAgICBpY29uPVwiaGFzczphcnJvdy11cFwiXG4gICAgICAgICAgICBAY2xpY2s9XCIke3RoaXMuX2NhcmRVcH1cIlxuICAgICAgICAgICAgP2Rpc2FibGVkPVwiJHt0aGlzLnBhdGghWzFdID09PSAwfVwiXG4gICAgICAgICAgPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLW1lbnUtYnV0dG9uXG4gICAgICAgICAgICBob3Jpem9udGFsLWFsaWduPVwicmlnaHRcIlxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ249XCJib3R0b21cIlxuICAgICAgICAgICAgdmVydGljYWwtb2Zmc2V0PVwiNDBcIlxuICAgICAgICAgID5cbiAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICBpY29uPVwiaGFzczpkb3RzLXZlcnRpY2FsXCJcbiAgICAgICAgICAgICAgc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIlxuICAgICAgICAgICAgICBhcmlhLWxhYmVsPSR7dGhpcy5oYXNzIS5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmxvdmVsYWNlLmVkaXRvci5lZGl0X2NhcmQub3B0aW9uc1wiXG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICA+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICAgICAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxwYXBlci1pdGVtIEBjbGljaz1cIiR7dGhpcy5fbW92ZUNhcmR9XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLm1vdmVcIlxuICAgICAgICAgICAgICAgICl9PC9wYXBlci1pdGVtXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPHBhcGVyLWl0ZW0gLmNsYXNzPVwiZGVsZXRlLWl0ZW1cIiBAY2xpY2s9XCIke3RoaXMuX2RlbGV0ZUNhcmR9XCI+XG4gICAgICAgICAgICAgICAgJHt0aGlzLmhhc3MhLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5sb3ZlbGFjZS5lZGl0b3IuZWRpdF9jYXJkLmRlbGV0ZVwiXG4gICAgICAgICAgICAgICAgKX08L3BhcGVyLWl0ZW1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgICAgICAgIDwvcGFwZXItbWVudS1idXR0b24+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgc3R5bGVzKCk6IENTU1Jlc3VsdCB7XG4gICAgcmV0dXJuIGNzc2BcbiAgICAgIGRpdi5vcHRpb25zIHtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOGU4ZTg7XG4gICAgICAgIHBhZGRpbmc6IDVweCA4cHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvciwgd2hpdGUpO1xuICAgICAgICBib3gtc2hhZG93OiByZ2JhKDAsIDAsIDAsIDAuMTQpIDBweCAycHggMnB4IDBweCxcbiAgICAgICAgICByZ2JhKDAsIDAsIDAsIDAuMTIpIDBweCAxcHggNXB4IC00cHgsXG4gICAgICAgICAgcmdiYSgwLCAwLCAwLCAwLjIpIDBweCAzcHggMXB4IC0ycHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIGRpdi5vcHRpb25zIC5wcmltYXJ5LWFjdGlvbnMge1xuICAgICAgICBmbGV4OiAxO1xuICAgICAgICBtYXJnaW46IGF1dG87XG4gICAgICB9XG5cbiAgICAgIGRpdi5vcHRpb25zIC5zZWNvbmRhcnktYWN0aW9ucyB7XG4gICAgICAgIGZsZXg6IDQ7XG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pY29uLWJ1dHRvbi5tb3ZlLWFycm93W2Rpc2FibGVkXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbWVudS1idXR0b24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBwYXBlci1pdGVtLmhlYWRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0ge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLWl0ZW0uZGVsZXRlLWl0ZW0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZ29vZ2xlLXJlZC01MDApO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBwcml2YXRlIF9lZGl0Q2FyZCgpOiB2b2lkIHtcbiAgICBzaG93RWRpdENhcmREaWFsb2codGhpcywge1xuICAgICAgbG92ZWxhY2U6IHRoaXMubG92ZWxhY2UhLFxuICAgICAgcGF0aDogdGhpcy5wYXRoISxcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmRVcCgpOiB2b2lkIHtcbiAgICBjb25zdCBsb3ZlbGFjZSA9IHRoaXMubG92ZWxhY2UhO1xuICAgIGNvbnN0IHBhdGggPSB0aGlzLnBhdGghO1xuICAgIGxvdmVsYWNlLnNhdmVDb25maWcoXG4gICAgICBzd2FwQ2FyZChsb3ZlbGFjZS5jb25maWcsIHBhdGgsIFtwYXRoWzBdLCBwYXRoWzFdIC0gMV0pXG4gICAgKTtcbiAgfVxuXG4gIHByaXZhdGUgX2NhcmREb3duKCk6IHZvaWQge1xuICAgIGNvbnN0IGxvdmVsYWNlID0gdGhpcy5sb3ZlbGFjZSE7XG4gICAgY29uc3QgcGF0aCA9IHRoaXMucGF0aCE7XG4gICAgbG92ZWxhY2Uuc2F2ZUNvbmZpZyhcbiAgICAgIHN3YXBDYXJkKGxvdmVsYWNlLmNvbmZpZywgcGF0aCwgW3BhdGhbMF0sIHBhdGhbMV0gKyAxXSlcbiAgICApO1xuICB9XG5cbiAgcHJpdmF0ZSBfbW92ZUNhcmQoKTogdm9pZCB7XG4gICAgc2hvd01vdmVDYXJkVmlld0RpYWxvZyh0aGlzLCB7XG4gICAgICBwYXRoOiB0aGlzLnBhdGghLFxuICAgICAgbG92ZWxhY2U6IHRoaXMubG92ZWxhY2UhLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVsZXRlQ2FyZCgpOiB2b2lkIHtcbiAgICBjb25mRGVsZXRlQ2FyZCh0aGlzLCB0aGlzLmhhc3MhLCB0aGlzLmxvdmVsYWNlISwgdGhpcy5wYXRoISk7XG4gIH1cbn1cblxuZGVjbGFyZSBnbG9iYWwge1xuICBpbnRlcmZhY2UgSFRNTEVsZW1lbnRUYWdOYW1lTWFwIHtcbiAgICBcImh1aS1jYXJkLW9wdGlvbnNcIjogSHVpQ2FyZE9wdGlvbnM7XG4gIH1cbn1cbiIsImltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi8uLi8uLi8uLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvdmVsYWNlIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgLy8gZm9yIGZpcmUgZXZlbnRcbiAgaW50ZXJmYWNlIEhBU1NEb21FdmVudHMge1xuICAgIFwic2hvdy1tb3ZlLWNhcmQtdmlld1wiOiBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXM7XG4gIH1cbn1cblxubGV0IHJlZ2lzdGVyZWREaWFsb2cgPSBmYWxzZTtcblxuZXhwb3J0IGludGVyZmFjZSBNb3ZlQ2FyZFZpZXdEaWFsb2dQYXJhbXMge1xuICBwYXRoOiBbbnVtYmVyLCBudW1iZXJdO1xuICBsb3ZlbGFjZTogTG92ZWxhY2U7XG59XG5cbmNvbnN0IHJlZ2lzdGVyRWRpdENhcmREaWFsb2cgPSAoZWxlbWVudDogSFRNTEVsZW1lbnQpOiBFdmVudCA9PlxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJyZWdpc3Rlci1kaWFsb2dcIiwge1xuICAgIGRpYWxvZ1Nob3dFdmVudDogXCJzaG93LW1vdmUtY2FyZC12aWV3XCIsXG4gICAgZGlhbG9nVGFnOiBcImh1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIixcbiAgICBkaWFsb2dJbXBvcnQ6ICgpID0+XG4gICAgICBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJodWktZGlhbG9nLW1vdmUtY2FyZC12aWV3XCIgKi8gXCIuL2h1aS1kaWFsb2ctbW92ZS1jYXJkLXZpZXdcIiksXG4gIH0pO1xuXG5leHBvcnQgY29uc3Qgc2hvd01vdmVDYXJkVmlld0RpYWxvZyA9IChcbiAgZWxlbWVudDogSFRNTEVsZW1lbnQsXG4gIG1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtczogTW92ZUNhcmRWaWV3RGlhbG9nUGFyYW1zXG4pOiB2b2lkID0+IHtcbiAgaWYgKCFyZWdpc3RlcmVkRGlhbG9nKSB7XG4gICAgcmVnaXN0ZXJlZERpYWxvZyA9IHRydWU7XG4gICAgcmVnaXN0ZXJFZGl0Q2FyZERpYWxvZyhlbGVtZW50KTtcbiAgfVxuICBmaXJlRXZlbnQoZWxlbWVudCwgXCJzaG93LW1vdmUtY2FyZC12aWV3XCIsIG1vdmVDYXJkVmlld0RpYWxvZ1BhcmFtcyk7XG59O1xuIiwiaW1wb3J0IHsgTG92ZWxhY2UgfSBmcm9tIFwiLi4vdHlwZXNcIjtcbmltcG9ydCB7IGRlbGV0ZUNhcmQgfSBmcm9tIFwiLi9jb25maWctdXRpbFwiO1xuaW1wb3J0IHsgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyB9IGZyb20gXCIuLi8uLi8uLi9kaWFsb2dzL2NvbmZpcm1hdGlvbi9zaG93LWRpYWxvZy1jb25maXJtYXRpb25cIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vdHlwZXNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbmZEZWxldGVDYXJkKFxuICBlbGVtZW50OiBIVE1MRWxlbWVudCxcbiAgaGFzczogSG9tZUFzc2lzdGFudCxcbiAgbG92ZWxhY2U6IExvdmVsYWNlLFxuICBwYXRoOiBbbnVtYmVyLCBudW1iZXJdXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgc2hvd0NvbmZpcm1hdGlvbkRpYWxvZyhlbGVtZW50LCB7XG4gICAgdGV4dDogaGFzcy5sb2NhbGl6ZShcInVpLnBhbmVsLmxvdmVsYWNlLmNhcmRzLmNvbmZpcm1fZGVsZXRlXCIpLFxuICAgIGNvbmZpcm06IGFzeW5jICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGxvdmVsYWNlLnNhdmVDb25maWcoZGVsZXRlQ2FyZChsb3ZlbGFjZS5jb25maWcsIHBhdGgpKTtcbiAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBhbGVydChgRGVsZXRpbmcgZmFpbGVkOiAke2Vyci5tZXNzYWdlfWApO1xuICAgICAgfVxuICAgIH0sXG4gIH0pO1xufVxuIiwiLy8gaHVpLXZpZXcgZGVwZW5kZW5jaWVzIGZvciB3aGVuIGluIGVkaXQgbW9kZS5cbmltcG9ydCBcIi4uL2NvbXBvbmVudHMvaHVpLWNhcmQtb3B0aW9uc1wiO1xuaW1wb3J0IFwiLi4vLi4vLi4vY29tcG9uZW50cy9oYS1mYWJcIjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFVQTs7OztBQUlBO0FBQ0E7Ozs7Ozs7O0FBVUE7QUFDQTs7Ozs7O0FBUUE7QUFDQTs7Ozs7Ozs7OztBQVVBOzs7QUFLQTtBQUNBOztBQUlBO0FBQ0E7Ozs7OztBQTlDQTtBQXVEQTtBQWpFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWlEQTtBQXJIQTtBQUFBO0FBQUE7QUFBQTtBQXdIQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBNUhBO0FBQUE7QUFBQTtBQUFBO0FBK0hBO0FBQ0E7QUFDQTtBQUdBO0FBcElBO0FBQUE7QUFBQTtBQUFBO0FBdUlBO0FBQ0E7QUFDQTtBQUdBO0FBNUlBO0FBQUE7QUFBQTtBQUFBO0FBK0lBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFuSkE7QUFBQTtBQUFBO0FBQUE7QUFzSkE7QUFDQTtBQXZKQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3ZCQTtBQUFBO0FBQUE7QUFBQTtBQVVBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFDQSxzZUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNqQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVVBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==