(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["onboarding-core-config"],{

/***/ "./src/common/dom/setup-leaflet-map.ts":
/*!*********************************************!*\
  !*** ./src/common/dom/setup-leaflet-map.ts ***!
  \*********************************************/
/*! exports provided: setupLeafletMap, createTileLayer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setupLeafletMap", function() { return setupLeafletMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTileLayer", function() { return createTileLayer; });
// Sets up a Leaflet map on the provided DOM element
const setupLeafletMap = async (mapElement, darkMode = false) => {
  if (!mapElement.parentNode) {
    throw new Error("Cannot setup Leaflet map on disconnected element");
  } // tslint:disable-next-line


  const Leaflet = await __webpack_require__.e(/*! import() | leaflet */ "vendors~leaflet").then(__webpack_require__.t.bind(null, /*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js", 7));
  Leaflet.Icon.Default.imagePath = "/static/images/leaflet/images/";
  const map = Leaflet.map(mapElement);
  const style = document.createElement("link");
  style.setAttribute("href", "/static/images/leaflet/leaflet.css");
  style.setAttribute("rel", "stylesheet");
  mapElement.parentNode.appendChild(style);
  map.setView([52.3731339, 4.8903147], 13);
  createTileLayer(Leaflet, darkMode).addTo(map);
  return [map, Leaflet];
};
const createTileLayer = (leaflet, darkMode) => {
  return leaflet.tileLayer(`https://{s}.basemaps.cartocdn.com/${darkMode ? "dark_all" : "light_all"}/{z}/{x}/{y}${leaflet.Browser.retina ? "@2x.png" : ".png"}`, {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: "abcd",
    minZoom: 0,
    maxZoom: 20
  });
};

/***/ }),

/***/ "./src/components/map/ha-location-editor.ts":
/*!**************************************************!*\
  !*** ./src/components/map/ha-location-editor.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../common/dom/setup-leaflet-map */ "./src/common/dom/setup-leaflet-map.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
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





let LocationEditor = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-location-editor")], function (_initialize, _LitElement) {
  class LocationEditor extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: LocationEditor,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "location",
      value: void 0
    }, {
      kind: "field",
      key: "fitZoom",

      value() {
        return 16;
      }

    }, {
      kind: "field",
      key: "_ignoreFitToMap",
      value: void 0
    }, {
      kind: "field",
      key: "Leaflet",
      value: void 0
    }, {
      kind: "field",
      key: "_leafletMap",
      value: void 0
    }, {
      kind: "field",
      key: "_locationMarker",
      value: void 0
    }, {
      kind: "method",
      key: "fitMap",
      value: // tslint:disable-next-line
      function fitMap() {
        if (!this._leafletMap || !this.location) {
          return;
        }

        this._leafletMap.setView(this.location, this.fitZoom);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div id="map"></div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(LocationEditor.prototype), "firstUpdated", this).call(this, changedProps);

        this._initMap();
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(LocationEditor.prototype), "updated", this).call(this, changedProps); // Still loading.


        if (!this.Leaflet) {
          return;
        }

        this._updateMarker();

        if (!this._ignoreFitToMap || this._ignoreFitToMap !== this.location) {
          this.fitMap();
        }

        this._ignoreFitToMap = undefined;
      }
    }, {
      kind: "get",
      key: "_mapEl",
      value: function _mapEl() {
        return this.shadowRoot.querySelector("div");
      }
    }, {
      kind: "method",
      key: "_initMap",
      value: async function _initMap() {
        [this._leafletMap, this.Leaflet] = await Object(_common_dom_setup_leaflet_map__WEBPACK_IMPORTED_MODULE_1__["setupLeafletMap"])(this._mapEl);

        this._leafletMap.addEventListener("click", // @ts-ignore
        ev => this._updateLocation(ev.latlng));

        this._updateMarker();

        this.fitMap();

        this._leafletMap.invalidateSize();
      }
    }, {
      kind: "method",
      key: "_updateLocation",
      value: function _updateLocation(latlng) {
        let longitude = latlng.lng;

        if (Math.abs(longitude) > 180.0) {
          // Normalize longitude if map provides values beyond -180 to +180 degrees.
          longitude = (longitude % 360.0 + 540.0) % 360.0 - 180.0;
        }

        this.location = this._ignoreFitToMap = [latlng.lat, longitude];
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "change", undefined, {
          bubbles: false
        });
      }
    }, {
      kind: "method",
      key: "_updateMarker",
      value: function _updateMarker() {
        if (!this.location) {
          if (this._locationMarker) {
            this._locationMarker.remove();

            this._locationMarker = undefined;
          }

          return;
        }

        if (this._locationMarker) {
          this._locationMarker.setLatLng(this.location);

          return;
        }

        this._locationMarker = this.Leaflet.marker(this.location, {
          draggable: true
        });

        this._locationMarker.addEventListener("dragend", // @ts-ignore
        ev => this._updateLocation(ev.target.getLatLng()));

        this._leafletMap.addLayer(this._locationMarker);
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      :host {
        display: block;
        height: 300px;
      }
      #map {
        height: 100%;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/timezone-datalist.ts":
/*!*********************************************!*\
  !*** ./src/components/timezone-datalist.ts ***!
  \*********************************************/
/*! exports provided: createTimezoneListEl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTimezoneListEl", function() { return createTimezoneListEl; });
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-timezones-json */ "./node_modules/google-timezones-json/index.js");
/* harmony import */ var google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_timezones_json__WEBPACK_IMPORTED_MODULE_0__);

const createTimezoneListEl = () => {
  const list = document.createElement("datalist");
  list.id = "timezones";
  Object.keys(google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a).forEach(key => {
    const option = document.createElement("option");
    option.value = key;
    option.innerHTML = google_timezones_json__WEBPACK_IMPORTED_MODULE_0___default.a[key];
    list.appendChild(option);
  });
  return list;
};

/***/ }),

/***/ "./src/data/core.ts":
/*!**************************!*\
  !*** ./src/data/core.ts ***!
  \**************************/
/*! exports provided: saveCoreConfig, detectCoreConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "saveCoreConfig", function() { return saveCoreConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "detectCoreConfig", function() { return detectCoreConfig; });
const saveCoreConfig = (hass, values) => hass.callWS(Object.assign({
  type: "config/core/update"
}, values));
const detectCoreConfig = hass => hass.callWS({
  type: "config/core/detect"
});

/***/ }),

/***/ "./src/onboarding/onboarding-core-config.ts":
/*!**************************************************!*\
  !*** ./src/onboarding/onboarding-core-config.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _material_mwc_button_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_radio_group_paper_radio_group__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-radio-group/paper-radio-group */ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _data_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/core */ "./src/data/core.ts");
/* harmony import */ var _data_onboarding__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/onboarding */ "./src/data/onboarding.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _components_timezone_datalist__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/timezone-datalist */ "./src/components/timezone-datalist.ts");
/* harmony import */ var _components_map_ha_location_editor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/map/ha-location-editor */ "./src/components/map/ha-location-editor.ts");
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





 // tslint:disable-next-line: no-duplicate-imports






const amsterdam = [52.3731339, 4.8903147];

let OnboardingCoreConfig = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("onboarding-core-config")], function (_initialize, _LitElement) {
  class OnboardingCoreConfig extends _LitElement {
    constructor(...args) {
      super(...args);

      _initialize(this);
    }

  }

  return {
    F: OnboardingCoreConfig,
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
      key: "_working",

      value() {
        return false;
      }

    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_name",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_location",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_elevation",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_unitSystem",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_timeZone",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <p>
        ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro", "name", this.hass.user.name)}
      </p>

      <paper-input
        .label=${this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name")}
        name="name"
        .disabled=${this._working}
        .value=${this._nameValue}
        @value-changed=${this._handleChange}
      ></paper-input>

      <div class="middle-text">
        <p>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location")}
        </p>

        <div class="row">
          <div>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.intro_location_detect")}
          </div>
          <mwc-button @click=${this._detect}>
            ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.button_detect")}
          </mwc-button>
        </div>
      </div>

      <div class="row">
        <ha-location-editor
          class="flex"
          .location=${this._locationValue}
          .fitZoom=${14}
          @change=${this._locationChanged}
        ></ha-location-editor>
      </div>

      <div class="row">
        <paper-input
          class="flex"
          .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.time_zone")}
          name="timeZone"
          list="timezones"
          .disabled=${this._working}
          .value=${this._timeZoneValue}
          @value-changed=${this._handleChange}
        ></paper-input>

        <paper-input
          class="flex"
          .label=${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation")}
          name="elevation"
          type="number"
          .disabled=${this._working}
          .value=${this._elevationValue}
          @value-changed=${this._handleChange}
        >
          <span slot="suffix">
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.elevation_meters")}
          </span>
        </paper-input>
      </div>

      <div class="row">
        <div class="flex">
          ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system")}
        </div>
        <paper-radio-group
          class="flex"
          .selected=${this._unitSystemValue}
          @selected-changed=${this._unitSystemChanged}
        >
          <paper-radio-button name="metric" .disabled=${this._working}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_metric")}
            <div class="secondary">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.metric_example")}
            </div>
          </paper-radio-button>
          <paper-radio-button name="imperial" .disabled=${this._working}>
            ${this.hass.localize("ui.panel.config.core.section.core.core_config.unit_system_imperial")}
            <div class="secondary">
              ${this.hass.localize("ui.panel.config.core.section.core.core_config.imperial_example")}
            </div>
          </paper-radio-button>
        </paper-radio-group>
      </div>

      <div class="footer">
        <mwc-button @click=${this._save} .disabled=${this._working}>
          ${this.onboardingLocalize("ui.panel.page-onboarding.core-config.finish")}
        </mwc-button>
      </div>
    `;
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(OnboardingCoreConfig.prototype), "firstUpdated", this).call(this, changedProps);

        setTimeout(() => this.shadowRoot.querySelector("paper-input").focus(), 100);
        this.addEventListener("keypress", ev => {
          if (ev.keyCode === 13) {
            this._save(ev);
          }
        });
        const input = this.shadowRoot.querySelector("[name=timeZone]");
        input.inputElement.appendChild(Object(_components_timezone_datalist__WEBPACK_IMPORTED_MODULE_8__["createTimezoneListEl"])());
      }
    }, {
      kind: "get",
      key: "_nameValue",
      value: function _nameValue() {
        return this._name !== undefined ? this._name : this.onboardingLocalize("ui.panel.page-onboarding.core-config.location_name_default");
      }
    }, {
      kind: "get",
      key: "_locationValue",
      value: function _locationValue() {
        return this._location || amsterdam;
      }
    }, {
      kind: "get",
      key: "_elevationValue",
      value: function _elevationValue() {
        return this._elevation !== undefined ? this._elevation : 0;
      }
    }, {
      kind: "get",
      key: "_timeZoneValue",
      value: function _timeZoneValue() {
        return this._timeZone;
      }
    }, {
      kind: "get",
      key: "_unitSystemValue",
      value: function _unitSystemValue() {
        return this._unitSystem !== undefined ? this._unitSystem : "metric";
      }
    }, {
      kind: "method",
      key: "_handleChange",
      value: function _handleChange(ev) {
        const target = ev.currentTarget;
        this[`_${target.name}`] = target.value;
      }
    }, {
      kind: "method",
      key: "_locationChanged",
      value: function _locationChanged(ev) {
        this._location = ev.currentTarget.location;
      }
    }, {
      kind: "method",
      key: "_unitSystemChanged",
      value: function _unitSystemChanged(ev) {
        this._unitSystem = ev.detail.value;
      }
    }, {
      kind: "method",
      key: "_detect",
      value: async function _detect() {
        this._working = true;

        try {
          const values = await Object(_data_core__WEBPACK_IMPORTED_MODULE_5__["detectCoreConfig"])(this.hass);

          if (values.latitude && values.longitude) {
            this._location = [Number(values.latitude), Number(values.longitude)];
          }

          if (values.elevation) {
            this._elevation = String(values.elevation);
          }

          if (values.unit_system) {
            this._unitSystem = values.unit_system;
          }

          if (values.time_zone) {
            this._timeZone = values.time_zone;
          }
        } catch (err) {
          alert(`Failed to detect location information: ${err.message}`);
        } finally {
          this._working = false;
        }
      }
    }, {
      kind: "method",
      key: "_save",
      value: async function _save(ev) {
        ev.preventDefault();
        this._working = true;

        try {
          const location = this._locationValue;
          await Object(_data_core__WEBPACK_IMPORTED_MODULE_5__["saveCoreConfig"])(this.hass, {
            location_name: this._nameValue,
            latitude: location[0],
            longitude: location[1],
            elevation: Number(this._elevationValue),
            unit_system: this._unitSystemValue,
            time_zone: this._timeZoneValue || "UTC"
          });
          const result = await Object(_data_onboarding__WEBPACK_IMPORTED_MODULE_6__["onboardCoreConfigStep"])(this.hass);
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_7__["fireEvent"])(this, "onboarding-step", {
            type: "core_config",
            result
          });
        } catch (err) {
          this._working = false;
          alert("FAIL");
        }
      }
    }, {
      kind: "get",
      static: true,
      key: "styles",
      value: function styles() {
        return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .row {
        display: flex;
        flex-direction: row;
        margin: 0 -8px;
        align-items: center;
      }

      .secondary {
        color: var(--secondary-text-color);
      }

      .flex {
        flex: 1;
      }

      .middle-text {
        margin: 24px 0;
      }

      .row > * {
        margin: 0 8px;
      }
      .footer {
        margin-top: 16px;
        text-align: right;
      }
    `;
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoib25ib2FyZGluZy1jb3JlLWNvbmZpZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL21hcC9oYS1sb2NhdGlvbi1lZGl0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvdGltZXpvbmUtZGF0YWxpc3QudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvY29yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvb25ib2FyZGluZy9vbmJvYXJkaW5nLWNvcmUtY29uZmlnLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hcCB9IGZyb20gXCJsZWFmbGV0XCI7XG5cbi8vIFNldHMgdXAgYSBMZWFmbGV0IG1hcCBvbiB0aGUgcHJvdmlkZWQgRE9NIGVsZW1lbnRcbmV4cG9ydCB0eXBlIExlYWZsZXRNb2R1bGVUeXBlID0gdHlwZW9mIGltcG9ydChcImxlYWZsZXRcIik7XG5cbmV4cG9ydCBjb25zdCBzZXR1cExlYWZsZXRNYXAgPSBhc3luYyAoXG4gIG1hcEVsZW1lbnQ6IEhUTUxFbGVtZW50LFxuICBkYXJrTW9kZSA9IGZhbHNlXG4pOiBQcm9taXNlPFtNYXAsIExlYWZsZXRNb2R1bGVUeXBlXT4gPT4ge1xuICBpZiAoIW1hcEVsZW1lbnQucGFyZW50Tm9kZSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhbm5vdCBzZXR1cCBMZWFmbGV0IG1hcCBvbiBkaXNjb25uZWN0ZWQgZWxlbWVudFwiKTtcbiAgfVxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgY29uc3QgTGVhZmxldCA9IChhd2FpdCBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogXCJsZWFmbGV0XCIgKi8gXCJsZWFmbGV0XCIpKSBhcyBMZWFmbGV0TW9kdWxlVHlwZTtcbiAgTGVhZmxldC5JY29uLkRlZmF1bHQuaW1hZ2VQYXRoID0gXCIvc3RhdGljL2ltYWdlcy9sZWFmbGV0L2ltYWdlcy9cIjtcblxuICBjb25zdCBtYXAgPSBMZWFmbGV0Lm1hcChtYXBFbGVtZW50KTtcbiAgY29uc3Qgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcbiAgc3R5bGUuc2V0QXR0cmlidXRlKFwiaHJlZlwiLCBcIi9zdGF0aWMvaW1hZ2VzL2xlYWZsZXQvbGVhZmxldC5jc3NcIik7XG4gIHN0eWxlLnNldEF0dHJpYnV0ZShcInJlbFwiLCBcInN0eWxlc2hlZXRcIik7XG4gIG1hcEVsZW1lbnQucGFyZW50Tm9kZS5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIG1hcC5zZXRWaWV3KFs1Mi4zNzMxMzM5LCA0Ljg5MDMxNDddLCAxMyk7XG4gIGNyZWF0ZVRpbGVMYXllcihMZWFmbGV0LCBkYXJrTW9kZSkuYWRkVG8obWFwKTtcblxuICByZXR1cm4gW21hcCwgTGVhZmxldF07XG59O1xuXG5leHBvcnQgY29uc3QgY3JlYXRlVGlsZUxheWVyID0gKFxuICBsZWFmbGV0OiBMZWFmbGV0TW9kdWxlVHlwZSxcbiAgZGFya01vZGU6IGJvb2xlYW5cbikgPT4ge1xuICByZXR1cm4gbGVhZmxldC50aWxlTGF5ZXIoXG4gICAgYGh0dHBzOi8ve3N9LmJhc2VtYXBzLmNhcnRvY2RuLmNvbS8ke1xuICAgICAgZGFya01vZGUgPyBcImRhcmtfYWxsXCIgOiBcImxpZ2h0X2FsbFwiXG4gICAgfS97en0ve3h9L3t5fSR7bGVhZmxldC5Ccm93c2VyLnJldGluYSA/IFwiQDJ4LnBuZ1wiIDogXCIucG5nXCJ9YCxcbiAgICB7XG4gICAgICBhdHRyaWJ1dGlvbjpcbiAgICAgICAgJyZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly93d3cub3BlbnN0cmVldG1hcC5vcmcvY29weXJpZ2h0XCI+T3BlblN0cmVldE1hcDwvYT4sICZjb3B5OyA8YSBocmVmPVwiaHR0cHM6Ly9jYXJ0by5jb20vYXR0cmlidXRpb25zXCI+Q0FSVE88L2E+JyxcbiAgICAgIHN1YmRvbWFpbnM6IFwiYWJjZFwiLFxuICAgICAgbWluWm9vbTogMCxcbiAgICAgIG1heFpvb206IDIwLFxuICAgIH1cbiAgKTtcbn07XG4iLCJpbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBwcm9wZXJ0eSxcbiAgVGVtcGxhdGVSZXN1bHQsXG4gIGh0bWwsXG4gIENTU1Jlc3VsdCxcbiAgY3NzLFxuICBjdXN0b21FbGVtZW50LFxuICBQcm9wZXJ0eVZhbHVlcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgeyBNYXJrZXIsIE1hcCwgTGVhZmxldE1vdXNlRXZlbnQsIERyYWdFbmRFdmVudCwgTGF0TG5nIH0gZnJvbSBcImxlYWZsZXRcIjtcbmltcG9ydCB7XG4gIHNldHVwTGVhZmxldE1hcCxcbiAgTGVhZmxldE1vZHVsZVR5cGUsXG59IGZyb20gXCIuLi8uLi9jb21tb24vZG9tL3NldHVwLWxlYWZsZXQtbWFwXCI7XG5pbXBvcnQgeyBmaXJlRXZlbnQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9maXJlX2V2ZW50XCI7XG5cbkBjdXN0b21FbGVtZW50KFwiaGEtbG9jYXRpb24tZWRpdG9yXCIpXG5jbGFzcyBMb2NhdGlvbkVkaXRvciBleHRlbmRzIExpdEVsZW1lbnQge1xuICBAcHJvcGVydHkoKSBwdWJsaWMgbG9jYXRpb24/OiBbbnVtYmVyLCBudW1iZXJdO1xuICBwdWJsaWMgZml0Wm9vbSA9IDE2O1xuXG4gIHByaXZhdGUgX2lnbm9yZUZpdFRvTWFwPzogW251bWJlciwgbnVtYmVyXTtcblxuICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgcHJpdmF0ZSBMZWFmbGV0PzogTGVhZmxldE1vZHVsZVR5cGU7XG4gIHByaXZhdGUgX2xlYWZsZXRNYXA/OiBNYXA7XG4gIHByaXZhdGUgX2xvY2F0aW9uTWFya2VyPzogTWFya2VyO1xuXG4gIHB1YmxpYyBmaXRNYXAoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLl9sZWFmbGV0TWFwIHx8ICF0aGlzLmxvY2F0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2xlYWZsZXRNYXAuc2V0Vmlldyh0aGlzLmxvY2F0aW9uLCB0aGlzLmZpdFpvb20pO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPGRpdiBpZD1cIm1hcFwiPjwvZGl2PlxuICAgIGA7XG4gIH1cblxuICBwcm90ZWN0ZWQgZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wczogUHJvcGVydHlWYWx1ZXMpOiB2b2lkIHtcbiAgICBzdXBlci5maXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKTtcbiAgICB0aGlzLl9pbml0TWFwKCk7XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKTogdm9pZCB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuXG4gICAgLy8gU3RpbGwgbG9hZGluZy5cbiAgICBpZiAoIXRoaXMuTGVhZmxldCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3VwZGF0ZU1hcmtlcigpO1xuICAgIGlmICghdGhpcy5faWdub3JlRml0VG9NYXAgfHwgdGhpcy5faWdub3JlRml0VG9NYXAgIT09IHRoaXMubG9jYXRpb24pIHtcbiAgICAgIHRoaXMuZml0TWFwKCk7XG4gICAgfVxuICAgIHRoaXMuX2lnbm9yZUZpdFRvTWFwID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX21hcEVsKCk6IEhUTUxEaXZFbGVtZW50IHtcbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290IS5xdWVyeVNlbGVjdG9yKFwiZGl2XCIpITtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX2luaXRNYXAoKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgW3RoaXMuX2xlYWZsZXRNYXAsIHRoaXMuTGVhZmxldF0gPSBhd2FpdCBzZXR1cExlYWZsZXRNYXAodGhpcy5fbWFwRWwpO1xuICAgIHRoaXMuX2xlYWZsZXRNYXAuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgIFwiY2xpY2tcIixcbiAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgIChldjogTGVhZmxldE1vdXNlRXZlbnQpID0+IHRoaXMuX3VwZGF0ZUxvY2F0aW9uKGV2LmxhdGxuZylcbiAgICApO1xuICAgIHRoaXMuX3VwZGF0ZU1hcmtlcigpO1xuICAgIHRoaXMuZml0TWFwKCk7XG4gICAgdGhpcy5fbGVhZmxldE1hcC5pbnZhbGlkYXRlU2l6ZSgpO1xuICB9XG5cbiAgcHJpdmF0ZSBfdXBkYXRlTG9jYXRpb24obGF0bG5nOiBMYXRMbmcpIHtcbiAgICBsZXQgbG9uZ2l0dWRlID0gbGF0bG5nLmxuZztcbiAgICBpZiAoTWF0aC5hYnMobG9uZ2l0dWRlKSA+IDE4MC4wKSB7XG4gICAgICAvLyBOb3JtYWxpemUgbG9uZ2l0dWRlIGlmIG1hcCBwcm92aWRlcyB2YWx1ZXMgYmV5b25kIC0xODAgdG8gKzE4MCBkZWdyZWVzLlxuICAgICAgbG9uZ2l0dWRlID0gKCgobG9uZ2l0dWRlICUgMzYwLjApICsgNTQwLjApICUgMzYwLjApIC0gMTgwLjA7XG4gICAgfVxuICAgIHRoaXMubG9jYXRpb24gPSB0aGlzLl9pZ25vcmVGaXRUb01hcCA9IFtsYXRsbmcubGF0LCBsb25naXR1ZGVdO1xuICAgIGZpcmVFdmVudCh0aGlzLCBcImNoYW5nZVwiLCB1bmRlZmluZWQsIHsgYnViYmxlczogZmFsc2UgfSk7XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVNYXJrZXIoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmxvY2F0aW9uKSB7XG4gICAgICBpZiAodGhpcy5fbG9jYXRpb25NYXJrZXIpIHtcbiAgICAgICAgdGhpcy5fbG9jYXRpb25NYXJrZXIucmVtb3ZlKCk7XG4gICAgICAgIHRoaXMuX2xvY2F0aW9uTWFya2VyID0gdW5kZWZpbmVkO1xuICAgICAgfVxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9sb2NhdGlvbk1hcmtlcikge1xuICAgICAgdGhpcy5fbG9jYXRpb25NYXJrZXIuc2V0TGF0TG5nKHRoaXMubG9jYXRpb24pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9sb2NhdGlvbk1hcmtlciA9IHRoaXMuTGVhZmxldCEubWFya2VyKHRoaXMubG9jYXRpb24sIHtcbiAgICAgIGRyYWdnYWJsZTogdHJ1ZSxcbiAgICB9KTtcbiAgICB0aGlzLl9sb2NhdGlvbk1hcmtlci5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgXCJkcmFnZW5kXCIsXG4gICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAoZXY6IERyYWdFbmRFdmVudCkgPT4gdGhpcy5fdXBkYXRlTG9jYXRpb24oZXYudGFyZ2V0LmdldExhdExuZygpKVxuICAgICk7XG4gICAgdGhpcy5fbGVhZmxldE1hcCEuYWRkTGF5ZXIodGhpcy5fbG9jYXRpb25NYXJrZXIpO1xuICB9XG5cbiAgc3RhdGljIGdldCBzdHlsZXMoKTogQ1NTUmVzdWx0IHtcbiAgICByZXR1cm4gY3NzYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiAzMDBweDtcbiAgICAgIH1cbiAgICAgICNtYXAge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwiaGEtbG9jYXRpb24tZWRpdG9yXCI6IExvY2F0aW9uRWRpdG9yO1xuICB9XG59XG4iLCJpbXBvcnQgdGltZXpvbmVzIGZyb20gXCJnb29nbGUtdGltZXpvbmVzLWpzb25cIjtcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZVRpbWV6b25lTGlzdEVsID0gKCkgPT4ge1xuICBjb25zdCBsaXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRhdGFsaXN0XCIpO1xuICBsaXN0LmlkID0gXCJ0aW1lem9uZXNcIjtcbiAgT2JqZWN0LmtleXModGltZXpvbmVzKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwib3B0aW9uXCIpO1xuICAgIG9wdGlvbi52YWx1ZSA9IGtleTtcbiAgICBvcHRpb24uaW5uZXJIVE1MID0gdGltZXpvbmVzW2tleV07XG4gICAgbGlzdC5hcHBlbmRDaGlsZChvcHRpb24pO1xuICB9KTtcbiAgcmV0dXJuIGxpc3Q7XG59O1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgSGFzc0NvbmZpZyB9IGZyb20gXCJob21lLWFzc2lzdGFudC1qcy13ZWJzb2NrZXRcIjtcblxuZXhwb3J0IGludGVyZmFjZSBDb25maWdVcGRhdGVWYWx1ZXMge1xuICBsb2NhdGlvbl9uYW1lOiBzdHJpbmc7XG4gIGxhdGl0dWRlOiBudW1iZXI7XG4gIGxvbmdpdHVkZTogbnVtYmVyO1xuICBlbGV2YXRpb246IG51bWJlcjtcbiAgdW5pdF9zeXN0ZW06IFwibWV0cmljXCIgfCBcImltcGVyaWFsXCI7XG4gIHRpbWVfem9uZTogc3RyaW5nO1xufVxuXG5leHBvcnQgY29uc3Qgc2F2ZUNvcmVDb25maWcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlczogUGFydGlhbDxDb25maWdVcGRhdGVWYWx1ZXM+XG4pID0+XG4gIGhhc3MuY2FsbFdTPEhhc3NDb25maWc+KHtcbiAgICB0eXBlOiBcImNvbmZpZy9jb3JlL3VwZGF0ZVwiLFxuICAgIC4uLnZhbHVlcyxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBkZXRlY3RDb3JlQ29uZmlnID0gKGhhc3M6IEhvbWVBc3Npc3RhbnQpID0+XG4gIGhhc3MuY2FsbFdTPFBhcnRpYWw8Q29uZmlnVXBkYXRlVmFsdWVzPj4oe1xuICAgIHR5cGU6IFwiY29uZmlnL2NvcmUvZGV0ZWN0XCIsXG4gIH0pO1xuIiwiaW1wb3J0IHtcbiAgTGl0RWxlbWVudCxcbiAgY3VzdG9tRWxlbWVudCxcbiAgcHJvcGVydHksXG4gIFRlbXBsYXRlUmVzdWx0LFxuICBodG1sLFxuICBDU1NSZXN1bHQsXG4gIGNzcyxcbn0gZnJvbSBcImxpdC1lbGVtZW50XCI7XG5pbXBvcnQgXCJAbWF0ZXJpYWwvbXdjLWJ1dHRvbi9td2MtYnV0dG9uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dFwiO1xuaW1wb3J0IFwiQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXBcIjtcbmltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLXJhZGlvLWJ1dHRvbi9wYXBlci1yYWRpby1idXR0b25cIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogbm8tZHVwbGljYXRlLWltcG9ydHNcbmltcG9ydCB7IFBhcGVySW5wdXRFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLWlucHV0XCI7XG5pbXBvcnQgeyBIb21lQXNzaXN0YW50IH0gZnJvbSBcIi4uL3R5cGVzXCI7XG5pbXBvcnQge1xuICBDb25maWdVcGRhdGVWYWx1ZXMsXG4gIGRldGVjdENvcmVDb25maWcsXG4gIHNhdmVDb3JlQ29uZmlnLFxufSBmcm9tIFwiLi4vZGF0YS9jb3JlXCI7XG5pbXBvcnQgeyBQb2x5bWVyQ2hhbmdlZEV2ZW50IH0gZnJvbSBcIi4uL3BvbHltZXItdHlwZXNcIjtcbmltcG9ydCB7IG9uYm9hcmRDb3JlQ29uZmlnU3RlcCB9IGZyb20gXCIuLi9kYXRhL29uYm9hcmRpbmdcIjtcbmltcG9ydCB7IGZpcmVFdmVudCB9IGZyb20gXCIuLi9jb21tb24vZG9tL2ZpcmVfZXZlbnRcIjtcbmltcG9ydCB7IExvY2FsaXplRnVuYyB9IGZyb20gXCIuLi9jb21tb24vdHJhbnNsYXRpb25zL2xvY2FsaXplXCI7XG5pbXBvcnQgeyBjcmVhdGVUaW1lem9uZUxpc3RFbCB9IGZyb20gXCIuLi9jb21wb25lbnRzL3RpbWV6b25lLWRhdGFsaXN0XCI7XG5pbXBvcnQgXCIuLi9jb21wb25lbnRzL21hcC9oYS1sb2NhdGlvbi1lZGl0b3JcIjtcblxuY29uc3QgYW1zdGVyZGFtID0gWzUyLjM3MzEzMzksIDQuODkwMzE0N107XG5cbkBjdXN0b21FbGVtZW50KFwib25ib2FyZGluZy1jb3JlLWNvbmZpZ1wiKVxuY2xhc3MgT25ib2FyZGluZ0NvcmVDb25maWcgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgb25ib2FyZGluZ0xvY2FsaXplITogTG9jYWxpemVGdW5jO1xuXG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3dvcmtpbmcgPSBmYWxzZTtcblxuICBAcHJvcGVydHkoKSBwcml2YXRlIF9uYW1lITogQ29uZmlnVXBkYXRlVmFsdWVzW1wibG9jYXRpb25fbmFtZVwiXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfbG9jYXRpb24hOiBbbnVtYmVyLCBudW1iZXJdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9lbGV2YXRpb24hOiBzdHJpbmc7XG4gIEBwcm9wZXJ0eSgpIHByaXZhdGUgX3VuaXRTeXN0ZW0hOiBDb25maWdVcGRhdGVWYWx1ZXNbXCJ1bml0X3N5c3RlbVwiXTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfdGltZVpvbmUhOiBzdHJpbmc7XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB8IHZvaWQge1xuICAgIHJldHVybiBodG1sYFxuICAgICAgPHA+XG4gICAgICAgICR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcuaW50cm9cIixcbiAgICAgICAgICBcIm5hbWVcIixcbiAgICAgICAgICB0aGlzLmhhc3MudXNlciEubmFtZVxuICAgICAgICApfVxuICAgICAgPC9wPlxuXG4gICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgLmxhYmVsPSR7dGhpcy5vbmJvYXJkaW5nTG9jYWxpemUoXG4gICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcubG9jYXRpb25fbmFtZVwiXG4gICAgICAgICl9XG4gICAgICAgIG5hbWU9XCJuYW1lXCJcbiAgICAgICAgLmRpc2FibGVkPSR7dGhpcy5fd29ya2luZ31cbiAgICAgICAgLnZhbHVlPSR7dGhpcy5fbmFtZVZhbHVlfVxuICAgICAgICBAdmFsdWUtY2hhbmdlZD0ke3RoaXMuX2hhbmRsZUNoYW5nZX1cbiAgICAgID48L3BhcGVyLWlucHV0PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwibWlkZGxlLXRleHRcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgJHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmNvcmUtY29uZmlnLmludHJvX2xvY2F0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICA8L3A+XG5cbiAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAke3RoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLnBhZ2Utb25ib2FyZGluZy5jb3JlLWNvbmZpZy5pbnRyb19sb2NhdGlvbl9kZXRlY3RcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8bXdjLWJ1dHRvbiBAY2xpY2s9JHt0aGlzLl9kZXRlY3R9PlxuICAgICAgICAgICAgJHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5wYWdlLW9uYm9hcmRpbmcuY29yZS1jb25maWcuYnV0dG9uX2RldGVjdFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvbXdjLWJ1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxuICAgICAgICA8aGEtbG9jYXRpb24tZWRpdG9yXG4gICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAubG9jYXRpb249JHt0aGlzLl9sb2NhdGlvblZhbHVlfVxuICAgICAgICAgIC5maXRab29tPSR7MTR9XG4gICAgICAgICAgQGNoYW5nZT0ke3RoaXMuX2xvY2F0aW9uQ2hhbmdlZH1cbiAgICAgICAgPjwvaGEtbG9jYXRpb24tZWRpdG9yPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cbiAgICAgICAgPHBhcGVyLWlucHV0XG4gICAgICAgICAgY2xhc3M9XCJmbGV4XCJcbiAgICAgICAgICAubGFiZWw9JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy50aW1lX3pvbmVcIlxuICAgICAgICAgICl9XG4gICAgICAgICAgbmFtZT1cInRpbWVab25lXCJcbiAgICAgICAgICBsaXN0PVwidGltZXpvbmVzXCJcbiAgICAgICAgICAuZGlzYWJsZWQ9JHt0aGlzLl93b3JraW5nfVxuICAgICAgICAgIC52YWx1ZT0ke3RoaXMuX3RpbWVab25lVmFsdWV9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVDaGFuZ2V9XG4gICAgICAgID48L3BhcGVyLWlucHV0PlxuXG4gICAgICAgIDxwYXBlci1pbnB1dFxuICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgLmxhYmVsPSR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuZWxldmF0aW9uXCJcbiAgICAgICAgICApfVxuICAgICAgICAgIG5hbWU9XCJlbGV2YXRpb25cIlxuICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxuICAgICAgICAgIC5kaXNhYmxlZD0ke3RoaXMuX3dvcmtpbmd9XG4gICAgICAgICAgLnZhbHVlPSR7dGhpcy5fZWxldmF0aW9uVmFsdWV9XG4gICAgICAgICAgQHZhbHVlLWNoYW5nZWQ9JHt0aGlzLl9oYW5kbGVDaGFuZ2V9XG4gICAgICAgID5cbiAgICAgICAgICA8c3BhbiBzbG90PVwic3VmZml4XCI+XG4gICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcuZWxldmF0aW9uX21ldGVyc1wiXG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4XCI+XG4gICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy51bml0X3N5c3RlbVwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxwYXBlci1yYWRpby1ncm91cFxuICAgICAgICAgIGNsYXNzPVwiZmxleFwiXG4gICAgICAgICAgLnNlbGVjdGVkPSR7dGhpcy5fdW5pdFN5c3RlbVZhbHVlfVxuICAgICAgICAgIEBzZWxlY3RlZC1jaGFuZ2VkPSR7dGhpcy5fdW5pdFN5c3RlbUNoYW5nZWR9XG4gICAgICAgID5cbiAgICAgICAgICA8cGFwZXItcmFkaW8tYnV0dG9uIG5hbWU9XCJtZXRyaWNcIiAuZGlzYWJsZWQ9JHt0aGlzLl93b3JraW5nfT5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy51bml0X3N5c3RlbV9tZXRyaWNcIlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWNvbmRhcnlcIj5cbiAgICAgICAgICAgICAgJHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICAgICAgXCJ1aS5wYW5lbC5jb25maWcuY29yZS5zZWN0aW9uLmNvcmUuY29yZV9jb25maWcubWV0cmljX2V4YW1wbGVcIlxuICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9wYXBlci1yYWRpby1idXR0b24+XG4gICAgICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwiaW1wZXJpYWxcIiAuZGlzYWJsZWQ9JHt0aGlzLl93b3JraW5nfT5cbiAgICAgICAgICAgICR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy51bml0X3N5c3RlbV9pbXBlcmlhbFwiXG4gICAgICAgICAgICApfVxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlY29uZGFyeVwiPlxuICAgICAgICAgICAgICAke3RoaXMuaGFzcy5sb2NhbGl6ZShcbiAgICAgICAgICAgICAgICBcInVpLnBhbmVsLmNvbmZpZy5jb3JlLnNlY3Rpb24uY29yZS5jb3JlX2NvbmZpZy5pbXBlcmlhbF9leGFtcGxlXCJcbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgICA8L3BhcGVyLXJhZGlvLWdyb3VwPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cbiAgICAgICAgPG13Yy1idXR0b24gQGNsaWNrPSR7dGhpcy5fc2F2ZX0gLmRpc2FibGVkPSR7dGhpcy5fd29ya2luZ30+XG4gICAgICAgICAgJHt0aGlzLm9uYm9hcmRpbmdMb2NhbGl6ZShcbiAgICAgICAgICAgIFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmNvcmUtY29uZmlnLmZpbmlzaFwiXG4gICAgICAgICAgKX1cbiAgICAgICAgPC9td2MtYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIHByb3RlY3RlZCBmaXJzdFVwZGF0ZWQoY2hhbmdlZFByb3BzKSB7XG4gICAgc3VwZXIuZmlyc3RVcGRhdGVkKGNoYW5nZWRQcm9wcyk7XG4gICAgc2V0VGltZW91dChcbiAgICAgICgpID0+IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcInBhcGVyLWlucHV0XCIpIS5mb2N1cygpLFxuICAgICAgMTAwXG4gICAgKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlwcmVzc1wiLCAoZXYpID0+IHtcbiAgICAgIGlmIChldi5rZXlDb2RlID09PSAxMykge1xuICAgICAgICB0aGlzLl9zYXZlKGV2KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBjb25zdCBpbnB1dCA9IHRoaXMuc2hhZG93Um9vdCEucXVlcnlTZWxlY3RvcihcbiAgICAgIFwiW25hbWU9dGltZVpvbmVdXCJcbiAgICApIGFzIFBhcGVySW5wdXRFbGVtZW50O1xuICAgIGlucHV0LmlucHV0RWxlbWVudC5hcHBlbmRDaGlsZChjcmVhdGVUaW1lem9uZUxpc3RFbCgpKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF9uYW1lVmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25hbWUgIT09IHVuZGVmaW5lZFxuICAgICAgPyB0aGlzLl9uYW1lXG4gICAgICA6IHRoaXMub25ib2FyZGluZ0xvY2FsaXplKFxuICAgICAgICAgIFwidWkucGFuZWwucGFnZS1vbmJvYXJkaW5nLmNvcmUtY29uZmlnLmxvY2F0aW9uX25hbWVfZGVmYXVsdFwiXG4gICAgICAgICk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfbG9jYXRpb25WYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fbG9jYXRpb24gfHwgYW1zdGVyZGFtO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX2VsZXZhdGlvblZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl9lbGV2YXRpb24gIT09IHVuZGVmaW5lZCA/IHRoaXMuX2VsZXZhdGlvbiA6IDA7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdGltZVpvbmVWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdGltZVpvbmU7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdW5pdFN5c3RlbVZhbHVlKCkge1xuICAgIHJldHVybiB0aGlzLl91bml0U3lzdGVtICE9PSB1bmRlZmluZWQgPyB0aGlzLl91bml0U3lzdGVtIDogXCJtZXRyaWNcIjtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUNoYW5nZShldjogUG9seW1lckNoYW5nZWRFdmVudDxzdHJpbmc+KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXYuY3VycmVudFRhcmdldCBhcyBQYXBlcklucHV0RWxlbWVudDtcbiAgICB0aGlzW2BfJHt0YXJnZXQubmFtZX1gXSA9IHRhcmdldC52YWx1ZTtcbiAgfVxuXG4gIHByaXZhdGUgX2xvY2F0aW9uQ2hhbmdlZChldikge1xuICAgIHRoaXMuX2xvY2F0aW9uID0gZXYuY3VycmVudFRhcmdldC5sb2NhdGlvbjtcbiAgfVxuXG4gIHByaXZhdGUgX3VuaXRTeXN0ZW1DaGFuZ2VkKFxuICAgIGV2OiBQb2x5bWVyQ2hhbmdlZEV2ZW50PENvbmZpZ1VwZGF0ZVZhbHVlc1tcInVuaXRfc3lzdGVtXCJdPlxuICApIHtcbiAgICB0aGlzLl91bml0U3lzdGVtID0gZXYuZGV0YWlsLnZhbHVlO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZGV0ZWN0KCkge1xuICAgIHRoaXMuX3dvcmtpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB2YWx1ZXMgPSBhd2FpdCBkZXRlY3RDb3JlQ29uZmlnKHRoaXMuaGFzcyk7XG4gICAgICBpZiAodmFsdWVzLmxhdGl0dWRlICYmIHZhbHVlcy5sb25naXR1ZGUpIHtcbiAgICAgICAgdGhpcy5fbG9jYXRpb24gPSBbTnVtYmVyKHZhbHVlcy5sYXRpdHVkZSksIE51bWJlcih2YWx1ZXMubG9uZ2l0dWRlKV07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLmVsZXZhdGlvbikge1xuICAgICAgICB0aGlzLl9lbGV2YXRpb24gPSBTdHJpbmcodmFsdWVzLmVsZXZhdGlvbik7XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLnVuaXRfc3lzdGVtKSB7XG4gICAgICAgIHRoaXMuX3VuaXRTeXN0ZW0gPSB2YWx1ZXMudW5pdF9zeXN0ZW07XG4gICAgICB9XG4gICAgICBpZiAodmFsdWVzLnRpbWVfem9uZSkge1xuICAgICAgICB0aGlzLl90aW1lWm9uZSA9IHZhbHVlcy50aW1lX3pvbmU7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBhbGVydChgRmFpbGVkIHRvIGRldGVjdCBsb2NhdGlvbiBpbmZvcm1hdGlvbjogJHtlcnIubWVzc2FnZX1gKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdGhpcy5fd29ya2luZyA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgX3NhdmUoZXYpIHtcbiAgICBldi5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX3dvcmtpbmcgPSB0cnVlO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBsb2NhdGlvbiA9IHRoaXMuX2xvY2F0aW9uVmFsdWU7XG4gICAgICBhd2FpdCBzYXZlQ29yZUNvbmZpZyh0aGlzLmhhc3MsIHtcbiAgICAgICAgbG9jYXRpb25fbmFtZTogdGhpcy5fbmFtZVZhbHVlLFxuICAgICAgICBsYXRpdHVkZTogbG9jYXRpb25bMF0sXG4gICAgICAgIGxvbmdpdHVkZTogbG9jYXRpb25bMV0sXG4gICAgICAgIGVsZXZhdGlvbjogTnVtYmVyKHRoaXMuX2VsZXZhdGlvblZhbHVlKSxcbiAgICAgICAgdW5pdF9zeXN0ZW06IHRoaXMuX3VuaXRTeXN0ZW1WYWx1ZSxcbiAgICAgICAgdGltZV96b25lOiB0aGlzLl90aW1lWm9uZVZhbHVlIHx8IFwiVVRDXCIsXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IG9uYm9hcmRDb3JlQ29uZmlnU3RlcCh0aGlzLmhhc3MpO1xuICAgICAgZmlyZUV2ZW50KHRoaXMsIFwib25ib2FyZGluZy1zdGVwXCIsIHtcbiAgICAgICAgdHlwZTogXCJjb3JlX2NvbmZpZ1wiLFxuICAgICAgICByZXN1bHQsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHRoaXMuX3dvcmtpbmcgPSBmYWxzZTtcbiAgICAgIGFsZXJ0KFwiRkFJTFwiKTtcbiAgICB9XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHQge1xuICAgIHJldHVybiBjc3NgXG4gICAgICAucm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAgbWFyZ2luOiAwIC04cHg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC5zZWNvbmRhcnkge1xuICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuZmxleCB7XG4gICAgICAgIGZsZXg6IDE7XG4gICAgICB9XG5cbiAgICAgIC5taWRkbGUtdGV4dCB7XG4gICAgICAgIG1hcmdpbjogMjRweCAwO1xuICAgICAgfVxuXG4gICAgICAucm93ID4gKiB7XG4gICAgICAgIG1hcmdpbjogMCA4cHg7XG4gICAgICB9XG4gICAgICAuZm9vdGVyIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTZweDtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICB9XG4gICAgYDtcbiAgfVxufVxuXG5kZWNsYXJlIGdsb2JhbCB7XG4gIGludGVyZmFjZSBIVE1MRWxlbWVudFRhZ05hbWVNYXAge1xuICAgIFwib25ib2FyZGluZy1jb3JlLWNvbmZpZ1wiOiBPbmJvYXJkaW5nQ29yZUNvbmZpZztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFJQTtBQUtBO0FBRUE7QUFDQTtBQUNBO0FBTEE7QUFRQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQ0E7QUFXQTtBQUlBO0FBQ0E7QUFFQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFDQTs7QUFEQTs7O0FBQ0E7Ozs7Ozs7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTs7QUFBQTtBQUdBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUVBO0FBQ0E7Ozs7Ozs7O0FBQUE7QUFTQTs7O0FBeEdBOzs7Ozs7Ozs7Ozs7QUNsQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFEQTtBQUtBO0FBRUE7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQ0E7O0FBREE7OztBQUNBOzs7OztBQUNBOzs7OztBQUVBOzs7O0FBQUE7Ozs7O0FBRUE7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7O0FBQ0E7Ozs7OztBQUVBO0FBQ0E7O0FBRUE7Ozs7QUFRQTs7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7Ozs7O0FBT0E7O0FBSUE7QUFDQTs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBOzs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBOzs7Ozs7O0FBU0E7Ozs7QUFNQTtBQUNBOztBQUVBO0FBQ0E7O0FBSUE7OztBQUtBO0FBQ0E7O0FBSUE7Ozs7Ozs7QUFTQTtBQUNBOzs7QUFySEE7QUEySEE7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBS0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUVBO0FBR0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTRCQTs7O0FBOVFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=