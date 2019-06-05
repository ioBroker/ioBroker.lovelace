(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["more-info-dialog"],{

/***/ "./src/common/const.ts":
/*!*****************************!*\
  !*** ./src/common/const.ts ***!
  \*****************************/
/*! exports provided: DEFAULT_DOMAIN_ICON, DEFAULT_PANEL, DOMAINS_WITH_CARD, DOMAINS_WITH_MORE_INFO, DOMAINS_HIDE_MORE_INFO, DOMAINS_MORE_INFO_NO_HISTORY, STATES_OFF, DOMAINS_TOGGLE, UNIT_C, UNIT_F, DEFAULT_VIEW_ENTITY_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_DOMAIN_ICON", function() { return DEFAULT_DOMAIN_ICON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_PANEL", function() { return DEFAULT_PANEL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_CARD", function() { return DOMAINS_WITH_CARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_WITH_MORE_INFO", function() { return DOMAINS_WITH_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_HIDE_MORE_INFO", function() { return DOMAINS_HIDE_MORE_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_MORE_INFO_NO_HISTORY", function() { return DOMAINS_MORE_INFO_NO_HISTORY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATES_OFF", function() { return STATES_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAINS_TOGGLE", function() { return DOMAINS_TOGGLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_C", function() { return UNIT_C; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UNIT_F", function() { return UNIT_F; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DEFAULT_VIEW_ENTITY_ID", function() { return DEFAULT_VIEW_ENTITY_ID; });
/** Constants to be used in the frontend. */
// Constants should be alphabetically sorted by name.
// Arrays with values should be alphabetically sorted if order doesn't matter.
// Each constant should have a description what it is supposed to be used for.

/** Icon to use when no icon specified for domain. */
var DEFAULT_DOMAIN_ICON = "hass:bookmark";
/** Panel to show when no panel is picked. */

var DEFAULT_PANEL = "lovelace";
/** Domains that have a state card. */

var DOMAINS_WITH_CARD = ["climate", "cover", "configurator", "input_select", "input_number", "input_text", "lock", "media_player", "scene", "script", "timer", "vacuum", "water_heater", "weblink"];
/** Domains with separate more info dialog. */

var DOMAINS_WITH_MORE_INFO = ["alarm_control_panel", "automation", "camera", "climate", "configurator", "cover", "fan", "group", "history_graph", "input_datetime", "light", "lock", "media_player", "script", "sun", "updater", "vacuum", "water_heater", "weather"];
/** Domains that show no more info dialog. */

var DOMAINS_HIDE_MORE_INFO = ["input_number", "input_select", "input_text", "scene", "weblink"];
/** Domains that should have the history hidden in the more info dialog. */

var DOMAINS_MORE_INFO_NO_HISTORY = ["camera", "configurator", "history_graph", "scene"];
/** States that we consider "off". */

var STATES_OFF = ["closed", "locked", "off"];
/** Domains where we allow toggle in Lovelace. */

var DOMAINS_TOGGLE = new Set(["fan", "input_boolean", "light", "switch", "group", "automation"]);
/** Temperature units. */

var UNIT_C = "°C";
var UNIT_F = "°F";
/** Entity ID of the default view. */

var DEFAULT_VIEW_ENTITY_ID = "group.default_view";

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

/***/ "./src/common/entity/feature_class_names.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/feature_class_names.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return featureClassNames; });
/* harmony import */ var _supports_feature__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./supports-feature */ "./src/common/entity/supports-feature.ts");
 // Expects classNames to be an object mapping feature-bit -> className

function featureClassNames(stateObj, classNames) {
  if (!stateObj || !stateObj.attributes.supported_features) {
    return "";
  }

  return Object.keys(classNames).map(function (feature) {
    return Object(_supports_feature__WEBPACK_IMPORTED_MODULE_0__["supportsFeature"])(stateObj, Number(feature)) ? classNames[feature] : "";
  }).filter(function (attr) {
    return attr !== "";
  }).join(" ");
}

/***/ }),

/***/ "./src/components/ha-attributes.js":
/*!*****************************************!*\
  !*** ./src/components/ha-attributes.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/hass-attributes-util */ "./src/util/hass-attributes-util.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .data-entry .value {\n          max-width: 200px;\n        }\n        .attribution {\n          color: var(--secondary-text-color);\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"layout vertical\">\n        <template\n          is=\"dom-repeat\"\n          items=\"[[computeDisplayAttributes(stateObj, filtersArray)]]\"\n          as=\"attribute\"\n        >\n          <div class=\"data-entry layout justified horizontal\">\n            <div class=\"key\">[[formatAttribute(attribute)]]</div>\n            <div class=\"value\">\n              [[formatAttributeValue(stateObj, attribute)]]\n            </div>\n          </div>\n        </template>\n        <div class=\"attribution\" hidden$=\"[[!computeAttribution(stateObj)]]\">\n          [[computeAttribution(stateObj)]]\n        </div>\n      </div>\n    "]);

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






var HaAttributes =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaAttributes, _PolymerElement);

  function HaAttributes() {
    _classCallCheck(this, HaAttributes);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaAttributes).apply(this, arguments));
  }

  _createClass(HaAttributes, [{
    key: "computeFiltersArray",
    value: function computeFiltersArray(extraFilters) {
      return Object.keys(_util_hass_attributes_util__WEBPACK_IMPORTED_MODULE_3__["default"].LOGIC_STATE_ATTRIBUTES).concat(extraFilters ? extraFilters.split(",") : []);
    }
  }, {
    key: "computeDisplayAttributes",
    value: function computeDisplayAttributes(stateObj, filtersArray) {
      if (!stateObj) {
        return [];
      }

      return Object.keys(stateObj.attributes).filter(function (key) {
        return filtersArray.indexOf(key) === -1;
      });
    }
  }, {
    key: "formatAttribute",
    value: function formatAttribute(attribute) {
      return attribute.replace(/_/g, " ");
    }
  }, {
    key: "formatAttributeValue",
    value: function formatAttributeValue(stateObj, attribute) {
      var value = stateObj.attributes[attribute];
      if (value === null) return "-";

      if (Array.isArray(value)) {
        return value.join(", ");
      }

      return value instanceof Object ? JSON.stringify(value, null, 2) : value;
    }
  }, {
    key: "computeAttribution",
    value: function computeAttribution(stateObj) {
      return stateObj.attributes.attribution;
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
        stateObj: {
          type: Object
        },
        extraFilters: {
          type: String,
          value: ""
        },
        filtersArray: {
          type: Array,
          computed: "computeFiltersArray(extraFilters)"
        }
      };
    }
  }]);

  return HaAttributes;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("ha-attributes", HaAttributes);

/***/ }),

/***/ "./src/components/ha-camera-stream.ts":
/*!********************************************!*\
  !*** ./src/components/ha-camera-stream.ts ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n      :host,\n      img,\n      video {\n        display: block;\n      }\n\n      img,\n      video {\n        width: 100%;\n      }\n    "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n            <video\n              autoplay\n              muted\n              playsinline\n              ?controls=", "\n              @loadeddata=", "\n            ></video>\n          "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            <img\n              @load=", "\n              .src=", "\n              .alt=", "\n            />\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      ", "\n    "]);

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







var HaCameraStream = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["customElement"])("ha-camera-stream")], function (_initialize, _LitElement) {
  var HaCameraStream =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaCameraStream, _LitElement2);

    function HaCameraStream() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaCameraStream);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaCameraStream)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaCameraStream;
  }(_LitElement);

  return {
    F: HaCameraStream,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])({
        type: Boolean
      })],
      key: "showControls",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_attached",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_forceMJPEG",
      value: function value() {
        return undefined;
      }
    }, {
      kind: "field",
      key: "_hlsPolyfillInstance",
      value: void 0
    }, {
      kind: "method",
      key: "connectedCallback",
      value: // We keep track if we should force MJPEG with a string
      // that way it automatically resets if we change entity.
      function connectedCallback() {
        _get(_getPrototypeOf(HaCameraStream.prototype), "connectedCallback", this).call(this);

        this._attached = true;
      }
    }, {
      kind: "method",
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        _get(_getPrototypeOf(HaCameraStream.prototype), "disconnectedCallback", this).call(this);

        this._attached = false;
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.stateObj || !this._attached) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(),  false || this._shouldRenderMJPEG ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this._elementResized,  false ? undefined : Object(_data_camera__WEBPACK_IMPORTED_MODULE_3__["computeMJPEGStreamUrl"])(this.stateObj), Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_1__["default"])(this.stateObj)) : Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject4(), this.showControls, this._elementResized));
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaCameraStream.prototype), "updated", this).call(this, changedProps);

        var stateObjChanged = changedProps.has("stateObj");
        var attachedChanged = changedProps.has("_attached");
        var oldState = changedProps.get("stateObj");
        var oldEntityId = oldState ? oldState.entity_id : undefined;
        var curEntityId = this.stateObj ? this.stateObj.entity_id : undefined;

        if (!stateObjChanged && !attachedChanged || stateObjChanged && oldEntityId === curEntityId) {
          return;
        } // If we are no longer attached, destroy polyfill.


        if (attachedChanged && !this._attached) {
          this._destroyPolyfill();

          return;
        } // Nothing to do if we are render MJPEG.


        if (this._shouldRenderMJPEG) {
          return;
        } // Tear down existing polyfill, if available


        this._destroyPolyfill();

        if (curEntityId) {
          this._startHls();
        }
      }
    }, {
      kind: "get",
      key: "_shouldRenderMJPEG",
      value: function _shouldRenderMJPEG() {
        return this._forceMJPEG === this.stateObj.entity_id || !this.hass.config.components.includes("stream") || !Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_4__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_3__["CAMERA_SUPPORT_STREAM"]);
      }
    }, {
      kind: "get",
      key: "_videoEl",
      value: function _videoEl() {
        return this.shadowRoot.querySelector("video");
      }
    }, {
      kind: "method",
      key: "_startHls",
      value: function () {
        var _startHls2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          var Hls, hlsSupported, videoEl, _ref, url;

          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return __webpack_require__.e(/*! import() | hls.js */ "vendors~hls.js").then(__webpack_require__.t.bind(null, /*! hls.js */ "./node_modules/hls.js/dist/hls.js", 7));

                case 2:
                  Hls = _context.sent["default"];
                  hlsSupported = Hls.isSupported();
                  videoEl = this._videoEl;

                  if (!hlsSupported) {
                    hlsSupported = videoEl.canPlayType("application/vnd.apple.mpegurl") !== "";
                  }

                  if (hlsSupported) {
                    _context.next = 9;
                    break;
                  }

                  this._forceMJPEG = this.stateObj.entity_id;
                  return _context.abrupt("return");

                case 9:
                  _context.prev = 9;
                  _context.next = 12;
                  return Object(_data_camera__WEBPACK_IMPORTED_MODULE_3__["fetchStreamUrl"])(this.hass, this.stateObj.entity_id);

                case 12:
                  _ref = _context.sent;
                  url = _ref.url;

                  if (Hls.isSupported()) {
                    this._renderHLSPolyfill(videoEl, Hls, url);
                  } else {
                    this._renderHLSNative(videoEl, url);
                  }

                  return _context.abrupt("return");

                case 18:
                  _context.prev = 18;
                  _context.t0 = _context["catch"](9);
                  // Fails if we were unable to get a stream
                  // tslint:disable-next-line
                  console.error(_context.t0);
                  this._forceMJPEG = this.stateObj.entity_id;

                case 22:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[9, 18]]);
        }));

        function _startHls() {
          return _startHls2.apply(this, arguments);
        }

        return _startHls;
      }()
    }, {
      kind: "method",
      key: "_renderHLSNative",
      value: function () {
        var _renderHLSNative2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(videoEl, url) {
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  videoEl.src = url;
                  _context2.next = 3;
                  return new Promise(function (resolve) {
                    return videoEl.addEventListener("loadedmetadata", resolve);
                  });

                case 3:
                  videoEl.play();

                case 4:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2);
        }));

        function _renderHLSNative(_x, _x2) {
          return _renderHLSNative2.apply(this, arguments);
        }

        return _renderHLSNative;
      }()
    }, {
      kind: "method",
      key: "_renderHLSPolyfill",
      value: function () {
        var _renderHLSPolyfill2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee3(videoEl, // tslint:disable-next-line
        Hls, url) {
          var hls;
          return regeneratorRuntime.wrap(function _callee3$(_context3) {
            while (1) {
              switch (_context3.prev = _context3.next) {
                case 0:
                  hls = new Hls();
                  this._hlsPolyfillInstance = hls;
                  hls.attachMedia(videoEl);
                  hls.on(Hls.Events.MEDIA_ATTACHED, function () {
                    hls.loadSource(url);
                  });

                case 4:
                case "end":
                  return _context3.stop();
              }
            }
          }, _callee3, this);
        }));

        function _renderHLSPolyfill(_x3, _x4, _x5) {
          return _renderHLSPolyfill2.apply(this, arguments);
        }

        return _renderHLSPolyfill;
      }()
    }, {
      kind: "method",
      key: "_elementResized",
      value: function _elementResized() {
        Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "iron-resize");
      }
    }, {
      kind: "method",
      key: "_destroyPolyfill",
      value: function _destroyPolyfill() {
        if (this._hlsPolyfillInstance) {
          this._hlsPolyfillInstance.destroy();

          this._hlsPolyfillInstance = undefined;
        }
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject5());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

/***/ }),

/***/ "./src/components/ha-climate-control.js":
/*!**********************************************!*\
  !*** ./src/components/ha-climate-control.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n          direction: ltr;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id=\"target_temperature\">[[value]] [[units]]</div>\n      <div class=\"control-buttons\">\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-up\"\n            on-click=\"incrementValue\"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-down\"\n            on-click=\"decrementValue\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var HaClimateControl =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaClimateControl, _EventsMixin);

  function HaClimateControl() {
    _classCallCheck(this, HaClimateControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaClimateControl).apply(this, arguments));
  }

  _createClass(HaClimateControl, [{
    key: "temperatureStateInFlux",
    value: function temperatureStateInFlux(inFlux) {
      this.$.target_temperature.classList.toggle("in-flux", inFlux);
    }
  }, {
    key: "_round",
    value: function _round(val) {
      // round value to precision derived from step
      // insired by https://github.com/soundar24/roundSlider/blob/master/src/roundslider.js
      var s = this.step.toString().split(".");
      return s[1] ? parseFloat(val.toFixed(s[1].length)) : Math.round(val);
    }
  }, {
    key: "incrementValue",
    value: function incrementValue() {
      var newval = this._round(this.value + this.step);

      if (this.value < this.max) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval <= this.max) {
        // If no initial target_temp
        // this forces control to start
        // from the min configured instead of 0
        if (newval <= this.min) {
          this.value = this.min;
        } else {
          this.value = newval;
        }
      } else {
        this.value = this.max;
      }
    }
  }, {
    key: "decrementValue",
    value: function decrementValue() {
      var newval = this._round(this.value - this.step);

      if (this.value > this.min) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval >= this.min) {
        this.value = newval;
      } else {
        this.value = this.min;
      }
    }
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var _this = this;

      // when the last_changed timestamp is changed,
      // trigger a potential event fire in
      // the future, as long as last changed is far enough in the
      // past.
      if (this.last_changed) {
        window.setTimeout(function () {
          var now = Date.now();

          if (now - _this.last_changed >= 2000) {
            _this.fire("change");

            _this.temperatureStateInFlux(false);

            _this.last_changed = null;
          }
        }, 2010);
      }
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
        value: {
          type: Number,
          observer: "valueChanged"
        },
        units: {
          type: String
        },
        min: {
          type: Number
        },
        max: {
          type: Number
        },
        step: {
          type: Number,
          value: 1
        }
      };
    }
  }]);

  return HaClimateControl;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-climate-control", HaClimateControl);

/***/ }),

/***/ "./src/components/ha-color-picker.js":
/*!*******************************************!*\
  !*** ./src/components/ha-color-picker.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          user-select: none;\n          -webkit-user-select: none;\n        }\n\n        #canvas {\n          position: relative;\n          width: 100%;\n          max-width: 330px;\n        }\n        #canvas > * {\n          display: block;\n        }\n        #interactionLayer {\n          color: white;\n          position: absolute;\n          cursor: crosshair;\n          width: 100%;\n          height: 100%;\n          overflow: visible;\n        }\n        #backgroundLayer {\n          width: 100%;\n          overflow: visible;\n          --wheel-bordercolor: var(--ha-color-picker-wheel-bordercolor, white);\n          --wheel-borderwidth: var(--ha-color-picker-wheel-borderwidth, 3);\n          --wheel-shadow: var(\n            --ha-color-picker-wheel-shadow,\n            rgb(15, 15, 15) 10px 5px 5px 0px\n          );\n        }\n\n        #marker {\n          fill: currentColor;\n          stroke: var(--ha-color-picker-marker-bordercolor, white);\n          stroke-width: var(--ha-color-picker-marker-borderwidth, 3);\n          filter: url(#marker-shadow);\n        }\n        .dragging #marker {\n        }\n\n        #colorTooltip {\n          display: none;\n          fill: currentColor;\n          stroke: var(--ha-color-picker-tooltip-bordercolor, white);\n          stroke-width: var(--ha-color-picker-tooltip-borderwidth, 3);\n        }\n\n        .touch.dragging #colorTooltip {\n          display: inherit;\n        }\n      </style>\n      <div id=\"canvas\">\n        <svg id=\"interactionLayer\">\n          <defs>\n            <filter\n              id=\"marker-shadow\"\n              x=\"-50%\"\n              y=\"-50%\"\n              width=\"200%\"\n              height=\"200%\"\n              filterUnits=\"objectBoundingBox\"\n            >\n              <feOffset\n                result=\"offOut\"\n                in=\"SourceAlpha\"\n                dx=\"2\"\n                dy=\"2\"\n              ></feOffset>\n              <feGaussianBlur\n                result=\"blurOut\"\n                in=\"offOut\"\n                stdDeviation=\"2\"\n              ></feGaussianBlur>\n              <feComponentTransfer in=\"blurOut\" result=\"alphaOut\">\n                <feFuncA type=\"linear\" slope=\"0.3\"></feFuncA>\n              </feComponentTransfer>\n              <feBlend\n                in=\"SourceGraphic\"\n                in2=\"alphaOut\"\n                mode=\"normal\"\n              ></feBlend>\n            </filter>\n          </defs>\n        </svg>\n        <canvas id=\"backgroundLayer\"></canvas>\n      </div>\n    "]);

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




/**
 * Color-picker custom element
 *
 * @appliesMixin EventsMixin
 */

var HaColorPicker =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaColorPicker, _EventsMixin);

  function HaColorPicker() {
    _classCallCheck(this, HaColorPicker);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaColorPicker).apply(this, arguments));
  }

  _createClass(HaColorPicker, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaColorPicker.prototype), "ready", this).call(this);

      this.setupLayers();
      this.drawColorWheel();
      this.drawMarker();
      this.interactionLayer.addEventListener("mousedown", function (ev) {
        return _this.onMouseDown(ev);
      });
      this.interactionLayer.addEventListener("touchstart", function (ev) {
        return _this.onTouchStart(ev);
      });
    } // converts browser coordinates to canvas canvas coordinates
    // origin is wheel center
    // returns {x: X, y: Y} object

  }, {
    key: "convertToCanvasCoordinates",
    value: function convertToCanvasCoordinates(clientX, clientY) {
      var svgPoint = this.interactionLayer.createSVGPoint();
      svgPoint.x = clientX;
      svgPoint.y = clientY;
      var cc = svgPoint.matrixTransform(this.interactionLayer.getScreenCTM().inverse());
      return {
        x: cc.x,
        y: cc.y
      };
    } // Mouse events

  }, {
    key: "onMouseDown",
    value: function onMouseDown(ev) {
      var cc = this.convertToCanvasCoordinates(ev.clientX, ev.clientY); // return if we're not on the wheel

      if (!this.isInWheel(cc.x, cc.y)) {
        return;
      } // a mousedown in wheel is always a color select action


      this.onMouseSelect(ev); // allow dragging

      this.canvas.classList.add("mouse", "dragging");
      this.addEventListener("mousemove", this.onMouseSelect);
      this.addEventListener("mouseup", this.onMouseUp);
    }
  }, {
    key: "onMouseUp",
    value: function onMouseUp() {
      this.canvas.classList.remove("mouse", "dragging");
      this.removeEventListener("mousemove", this.onMouseSelect);
    }
  }, {
    key: "onMouseSelect",
    value: function onMouseSelect(ev) {
      var _this2 = this;

      requestAnimationFrame(function () {
        return _this2.processUserSelect(ev);
      });
    } // Touch events

  }, {
    key: "onTouchStart",
    value: function onTouchStart(ev) {
      var _this3 = this;

      var touch = ev.changedTouches[0];
      var cc = this.convertToCanvasCoordinates(touch.clientX, touch.clientY); // return if we're not on the wheel

      if (!this.isInWheel(cc.x, cc.y)) {
        return;
      }

      if (ev.target === this.marker) {
        // drag marker
        ev.preventDefault();
        this.canvas.classList.add("touch", "dragging");
        this.addEventListener("touchmove", this.onTouchSelect);
        this.addEventListener("touchend", this.onTouchEnd);
        return;
      } // don't fire color selection immediately,
      // wait for touchend and invalidate when we scroll


      this.tapBecameScroll = false;
      this.addEventListener("touchend", this.onTap);
      this.addEventListener("touchmove", function () {
        _this3.tapBecameScroll = true;
      }, {
        passive: true
      });
    }
  }, {
    key: "onTap",
    value: function onTap(ev) {
      if (this.tapBecameScroll) {
        return;
      }

      ev.preventDefault();
      this.onTouchSelect(ev);
    }
  }, {
    key: "onTouchEnd",
    value: function onTouchEnd() {
      this.canvas.classList.remove("touch", "dragging");
      this.removeEventListener("touchmove", this.onTouchSelect);
    }
  }, {
    key: "onTouchSelect",
    value: function onTouchSelect(ev) {
      var _this4 = this;

      requestAnimationFrame(function () {
        return _this4.processUserSelect(ev.changedTouches[0]);
      });
    }
    /*
     * General event/selection handling
     */
    // Process user input to color

  }, {
    key: "processUserSelect",
    value: function processUserSelect(ev) {
      var canvasXY = this.convertToCanvasCoordinates(ev.clientX, ev.clientY);
      var hs = this.getColor(canvasXY.x, canvasXY.y);
      this.onColorSelect(hs);
    } // apply color to marker position and canvas

  }, {
    key: "onColorSelect",
    value: function onColorSelect(hs) {
      var _this5 = this;

      this.setMarkerOnColor(hs); // marker always follows mounse 'raw' hs value (= mouse position)

      if (!this.ignoreSegments) {
        // apply segments if needed
        hs = this.applySegmentFilter(hs);
      } // always apply the new color to the interface / canvas


      this.applyColorToCanvas(hs); // throttling is applied to updating the exposed colors (properties)
      // and firing of events

      if (this.colorSelectIsThrottled) {
        // make sure we apply the last selected color
        // eventually after throttle limit has passed
        clearTimeout(this.ensureFinalSelect);
        this.ensureFinalSelect = setTimeout(function () {
          _this5.fireColorSelected(hs); // do it for the final time

        }, this.throttle);
        return;
      }

      this.fireColorSelected(hs); // do it

      this.colorSelectIsThrottled = true;
      setTimeout(function () {
        _this5.colorSelectIsThrottled = false;
      }, this.throttle);
    } // set color values and fire colorselected event

  }, {
    key: "fireColorSelected",
    value: function fireColorSelected(hs) {
      this.hsColor = hs;
      this.fire("colorselected", {
        hs: {
          h: hs.h,
          s: hs.s
        }
      });
    }
    /*
     * Interface updating
     */
    // set marker position to the given color

  }, {
    key: "setMarkerOnColor",
    value: function setMarkerOnColor(hs) {
      var dist = hs.s * this.radius;
      var theta = (hs.h - 180) / 180 * Math.PI;
      var markerdX = -dist * Math.cos(theta);
      var markerdY = -dist * Math.sin(theta);
      var translateString = "translate(".concat(markerdX, ",").concat(markerdY, ")");
      this.marker.setAttribute("transform", translateString);
      this.tooltip.setAttribute("transform", translateString);
    } // apply given color to interface elements

  }, {
    key: "applyColorToCanvas",
    value: function applyColorToCanvas(hs) {
      // we're not really converting hs to hsl here, but we keep it cheap
      // setting the color on the interactionLayer, the svg elements can inherit
      this.interactionLayer.style.color = "hsl(".concat(hs.h, ", 100%, ").concat(100 - hs.s * 50, "%)");
    }
  }, {
    key: "applyHsColor",
    value: function applyHsColor(hs) {
      // do nothing is we already have the same color
      if (this.hsColor && this.hsColor.h === hs.h && this.hsColor.s === hs.s) {
        return;
      }

      this.setMarkerOnColor(hs); // marker is always set on 'raw' hs position

      if (!this.ignoreSegments) {
        // apply segments if needed
        hs = this.applySegmentFilter(hs);
      }

      this.hsColor = hs; // always apply the new color to the interface / canvas

      this.applyColorToCanvas(hs);
    }
    /*
     * input processing helpers
     */
    // get angle (degrees)

  }, {
    key: "getAngle",
    value: function getAngle(dX, dY) {
      var theta = Math.atan2(-dY, -dX); // radians from the left edge, clockwise = positive

      var angle = theta / Math.PI * 180 + 180; // degrees, clockwise from right

      return angle;
    } // returns true when coordinates are in the colorwheel

  }, {
    key: "isInWheel",
    value: function isInWheel(x, y) {
      return this.getDistance(x, y) <= 1;
    } // returns distance from wheel center, 0 = center, 1 = edge, >1 = outside

  }, {
    key: "getDistance",
    value: function getDistance(dX, dY) {
      return Math.sqrt(dX * dX + dY * dY) / this.radius;
    }
    /*
     * Getting colors
     */

  }, {
    key: "getColor",
    value: function getColor(x, y) {
      var hue = this.getAngle(x, y); // degrees, clockwise from right

      var relativeDistance = this.getDistance(x, y); // edge of radius = 1

      var sat = Math.min(relativeDistance, 1); // Distance from center

      return {
        h: hue,
        s: sat
      };
    }
  }, {
    key: "applySegmentFilter",
    value: function applySegmentFilter(hs) {
      // apply hue segment steps
      if (this.hueSegments) {
        var angleStep = 360 / this.hueSegments;
        var halfAngleStep = angleStep / 2;
        hs.h -= halfAngleStep; // take the 'centered segemnts' into account

        if (hs.h < 0) {
          hs.h += 360;
        } // don't end up below 0


        var rest = hs.h % angleStep;
        hs.h -= rest - angleStep;
      } // apply saturation segment steps


      if (this.saturationSegments) {
        if (this.saturationSegments === 1) {
          hs.s = 1;
        } else {
          var segmentSize = 1 / this.saturationSegments;
          var saturationStep = 1 / (this.saturationSegments - 1);
          var calculatedSat = Math.floor(hs.s / segmentSize) * saturationStep;
          hs.s = Math.min(calculatedSat, 1);
        }
      }

      return hs;
    }
    /*
     * Drawing related stuff
     */

  }, {
    key: "setupLayers",
    value: function setupLayers() {
      this.canvas = this.$.canvas;
      this.backgroundLayer = this.$.backgroundLayer;
      this.interactionLayer = this.$.interactionLayer; // coordinate origin position (center of the wheel)

      this.originX = this.width / 2;
      this.originY = this.originX; // synchronise width/height coordinates

      this.backgroundLayer.width = this.width;
      this.backgroundLayer.height = this.height;
      this.interactionLayer.setAttribute("viewBox", "".concat(-this.originX, " ").concat(-this.originY, " ").concat(this.width, " ").concat(this.height));
    }
  }, {
    key: "drawColorWheel",
    value: function drawColorWheel() {
      /*
       *  Setting up all paremeters
       */
      var shadowColor;
      var shadowOffsetX;
      var shadowOffsetY;
      var shadowBlur;
      var context = this.backgroundLayer.getContext("2d"); // postioning and sizing

      var cX = this.originX;
      var cY = this.originY;
      var radius = this.radius;
      var counterClockwise = false; // styling of the wheel

      var wheelStyle = window.getComputedStyle(this.backgroundLayer, null);
      var borderWidth = parseInt(wheelStyle.getPropertyValue("--wheel-borderwidth"), 10);
      var borderColor = wheelStyle.getPropertyValue("--wheel-bordercolor").trim();
      var wheelShadow = wheelStyle.getPropertyValue("--wheel-shadow").trim(); // extract shadow properties from  CCS variable
      // the shadow should be defined as: "10px 5px 5px 0px COLOR"

      if (wheelShadow !== "none") {
        var values = wheelShadow.split("px ");
        shadowColor = values.pop();
        shadowOffsetX = parseInt(values[0], 10);
        shadowOffsetY = parseInt(values[1], 10);
        shadowBlur = parseInt(values[2], 10) || 0;
      }

      var borderRadius = radius + borderWidth / 2;
      var wheelRadius = radius;
      var shadowRadius = radius + borderWidth;
      /*
       *  Drawing functions
       */

      function drawCircle(hueSegments, saturationSegments) {
        hueSegments = hueSegments || 360; // reset 0 segments to 360

        var angleStep = 360 / hueSegments;
        var halfAngleStep = angleStep / 2; // center segments on color

        for (var angle = 0; angle <= 360; angle += angleStep) {
          var startAngle = (angle - halfAngleStep) * (Math.PI / 180);
          var endAngle = (angle + halfAngleStep + 1) * (Math.PI / 180);
          context.beginPath();
          context.moveTo(cX, cY);
          context.arc(cX, cY, wheelRadius, startAngle, endAngle, counterClockwise);
          context.closePath(); // gradient

          var gradient = context.createRadialGradient(cX, cY, 0, cX, cY, wheelRadius);
          var lightness = 100; // first gradient stop

          gradient.addColorStop(0, "hsl(".concat(angle, ", 100%, ").concat(lightness, "%)")); // segment gradient stops

          if (saturationSegments > 0) {
            var ratioStep = 1 / saturationSegments;
            var ratio = 0;

            for (var stop = 1; stop < saturationSegments; stop += 1) {
              var prevLighness = lightness;
              ratio = stop * ratioStep;
              lightness = 100 - 50 * ratio;
              gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, ").concat(prevLighness, "%)"));
              gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, ").concat(lightness, "%)"));
            }

            gradient.addColorStop(ratio, "hsl(".concat(angle, ", 100%, 50%)"));
          } // last gradient stop


          gradient.addColorStop(1, "hsl(".concat(angle, ", 100%, 50%)"));
          context.fillStyle = gradient;
          context.fill();
        }
      }

      function drawShadow() {
        context.save();
        context.beginPath();
        context.arc(cX, cY, shadowRadius, 0, 2 * Math.PI, false);
        context.shadowColor = shadowColor;
        context.shadowOffsetX = shadowOffsetX;
        context.shadowOffsetY = shadowOffsetY;
        context.shadowBlur = shadowBlur;
        context.fillStyle = "white";
        context.fill();
        context.restore();
      }

      function drawBorder() {
        context.beginPath();
        context.arc(cX, cY, borderRadius, 0, 2 * Math.PI, false);
        context.lineWidth = borderWidth;
        context.strokeStyle = borderColor;
        context.stroke();
      }
      /*
       *   Call the drawing functions
       *   draws the shadow, wheel and border
       */


      if (wheelStyle.shadow !== "none") {
        drawShadow();
      }

      drawCircle(this.hueSegments, this.saturationSegments);

      if (borderWidth > 0) {
        drawBorder();
      }
    }
    /*
     *   Draw the (draggable) marker and tooltip
     *   on the interactionLayer)
     */

  }, {
    key: "drawMarker",
    value: function drawMarker() {
      var svgElement = this.interactionLayer;
      var markerradius = this.radius * 0.08;
      var tooltipradius = this.radius * 0.15;
      var TooltipOffsetY = -(tooltipradius * 3);
      var TooltipOffsetX = 0;
      svgElement.marker = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      svgElement.marker.setAttribute("id", "marker");
      svgElement.marker.setAttribute("r", markerradius);
      this.marker = svgElement.marker;
      svgElement.appendChild(svgElement.marker);
      svgElement.tooltip = document.createElementNS("http://www.w3.org/2000/svg", "circle");
      svgElement.tooltip.setAttribute("id", "colorTooltip");
      svgElement.tooltip.setAttribute("r", tooltipradius);
      svgElement.tooltip.setAttribute("cx", TooltipOffsetX);
      svgElement.tooltip.setAttribute("cy", TooltipOffsetY);
      this.tooltip = svgElement.tooltip;
      svgElement.appendChild(svgElement.tooltip);
    }
  }, {
    key: "segmentationChange",
    value: function segmentationChange() {
      if (this.backgroundLayer) {
        this.drawColorWheel();
      }
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
        hsColor: {
          type: Object
        },
        // use these properties to update the state via attributes
        desiredHsColor: {
          type: Object,
          observer: "applyHsColor"
        },
        // width, height and radius apply to the coordinates of
        // of the canvas.
        // border width are relative to these numbers
        // the onscreen displayed size should be controlled with css
        // and should be the same or smaller
        width: {
          type: Number,
          value: 500
        },
        height: {
          type: Number,
          value: 500
        },
        radius: {
          type: Number,
          value: 225
        },
        // the amount segments for the hue
        // 0 = continuous gradient
        // other than 0 gives 'pie-pieces'
        hueSegments: {
          type: Number,
          value: 0,
          observer: "segmentationChange"
        },
        // the amount segments for the hue
        // 0 = continuous gradient
        // 1 = only fully saturated
        // > 1 = segments from white to fully saturated
        saturationSegments: {
          type: Number,
          value: 0,
          observer: "segmentationChange"
        },
        // set to true to make the segments purely esthetical
        // this allows selection off all collors, also
        // interpolated between the segments
        ignoreSegments: {
          type: Boolean,
          value: false
        },
        // throttle te amount of 'colorselected' events fired
        // value is timeout in milliseconds
        throttle: {
          type: Number,
          value: 500
        }
      };
    }
  }]);

  return HaColorPicker;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_2__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-color-picker", HaColorPicker);

/***/ }),

/***/ "./src/components/ha-labeled-slider.js":
/*!*********************************************!*\
  !*** ./src/components/ha-labeled-slider.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-icon */ "./src/components/ha-icon.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n        }\n\n        .title {\n          margin-bottom: 16px;\n          opacity: var(--dark-primary-opacity);\n        }\n\n        ha-icon {\n          float: left;\n          margin-top: 4px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        ha-paper-slider {\n          background-image: var(--ha-slider-background);\n        }\n      </style>\n\n      <div class=\"title\">[[caption]]</div>\n      <div class=\"extra-container\"><slot name=\"extra\"></slot></div>\n      <div class=\"slider-container\">\n        <ha-icon icon=\"[[icon]]\" hidden$=\"[[!icon]]\"></ha-icon>\n        <ha-paper-slider\n          min=\"[[min]]\"\n          max=\"[[max]]\"\n          step=\"[[step]]\"\n          pin=\"[[pin]]\"\n          disabled=\"[[disabled]]\"\n          disabled=\"[[disabled]]\"\n          value=\"{{value}}\"\n        ></ha-paper-slider>\n      </div>\n    "]);

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






var HaLabeledSlider =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaLabeledSlider, _PolymerElement);

  function HaLabeledSlider() {
    _classCallCheck(this, HaLabeledSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaLabeledSlider).apply(this, arguments));
  }

  _createClass(HaLabeledSlider, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        caption: String,
        disabled: Boolean,
        min: Number,
        max: Number,
        pin: Boolean,
        step: Number,
        extra: {
          type: Boolean,
          value: false
        },
        ignoreBarTouch: {
          type: Boolean,
          value: true
        },
        icon: {
          type: String,
          value: ""
        },
        value: {
          type: Number,
          notify: true
        }
      };
    }
  }]);

  return HaLabeledSlider;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-labeled-slider", HaLabeledSlider);

/***/ }),

/***/ "./src/components/ha-paper-icon-button-arrow-prev.ts":
/*!***********************************************************!*\
  !*** ./src/components/ha-paper-icon-button-arrow-prev.ts ***!
  \***********************************************************/
/*! exports provided: HaPaperIconButtonArrowPrev */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperIconButtonArrowPrev", function() { return HaPaperIconButtonArrowPrev; });
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
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

var paperIconButtonClass = customElements.get("paper-icon-button");
var HaPaperIconButtonArrowPrev =
/*#__PURE__*/
function (_paperIconButtonClass) {
  _inherits(HaPaperIconButtonArrowPrev, _paperIconButtonClass);

  function HaPaperIconButtonArrowPrev() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, HaPaperIconButtonArrowPrev);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaPaperIconButtonArrowPrev)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hassio", void 0);

    return _this;
  }

  _createClass(HaPaperIconButtonArrowPrev, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      this.icon = window.getComputedStyle(this).direction === "ltr" ? this.hassio ? "hassio:arrow-left" : "hass:arrow-left" : this.hassio ? "hassio:arrow-right" : "hass:arrow-right"; // calling super after setting icon to have it consistently show the icon (otherwise not always shown)

      _get(_getPrototypeOf(HaPaperIconButtonArrowPrev.prototype), "connectedCallback", this).call(this);
    }
  }]);

  return HaPaperIconButtonArrowPrev;
}(paperIconButtonClass);
customElements.define("ha-paper-icon-button-arrow-prev", HaPaperIconButtonArrowPrev);

/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");
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
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

var PaperSliderClass = customElements.get("paper-slider");

var HaPaperSlider =
/*#__PURE__*/
function (_PaperSliderClass) {
  _inherits(HaPaperSlider, _PaperSliderClass);

  function HaPaperSlider() {
    _classCallCheck(this, HaPaperSlider);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperSlider).apply(this, arguments));
  }

  _createClass(HaPaperSlider, null, [{
    key: "template",
    get: function get() {
      var tpl = document.createElement("template");
      tpl.innerHTML = PaperSliderClass.template.innerHTML;
      var styleEl = document.createElement("style");
      styleEl.innerHTML = "\n      .pin > .slider-knob > .slider-knob-inner {\n        font-size:  var(--ha-paper-slider-pin-font-size, 10px);\n        line-height: normal;\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::before {\n        top: unset;\n        margin-left: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        width: 2.2em;\n        height: 2.2em;\n\n        -webkit-transform-origin: left bottom;\n        transform-origin: left bottom;\n        -webkit-transform: rotate(-45deg) scale(0) translate(0);\n        transform: rotate(-45deg) scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::before {\n        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);\n        transform: rotate(-45deg) scale(1) translate(7px, -7px);\n      }\n\n      .pin > .slider-knob > .slider-knob-inner::after {\n        top: unset;\n        font-size: unset;\n\n        bottom: calc(15px + var(--calculated-paper-slider-height)/2);\n        left: 50%;\n        margin-left: -1.1em;\n        width: 2.2em;\n        height: 2.1em;\n\n        -webkit-transform-origin: center bottom;\n        transform-origin: center bottom;\n        -webkit-transform: scale(0) translate(0);\n        transform: scale(0) translate(0);\n      }\n\n      .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -10px);\n        transform: scale(1) translate(0, -10px);\n      }\n\n      :host([dir=\"rtl\"]) .pin.expand > .slider-knob > .slider-knob-inner::after {\n        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        transform: scale(1) translate(0, -17px) scaleX(-1) !important;\n        }\n    ";
      tpl.content.appendChild(styleEl);
      return tpl;
    }
  }]);

  return HaPaperSlider;
}(PaperSliderClass);

customElements.define("ha-paper-slider", HaPaperSlider);

/***/ }),

/***/ "./src/components/ha-water_heater-control.js":
/*!***************************************************!*\
  !*** ./src/components/ha-water_heater-control.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        /* local DOM styles go here */\n        :host {\n          @apply --layout-flex;\n          @apply --layout-horizontal;\n          @apply --layout-justified;\n        }\n        .in-flux#target_temperature {\n          color: var(--google-red-500);\n        }\n        #target_temperature {\n          @apply --layout-self-center;\n          font-size: 200%;\n        }\n        .control-buttons {\n          font-size: 200%;\n          text-align: right;\n        }\n        paper-icon-button {\n          height: 48px;\n          width: 48px;\n        }\n      </style>\n\n      <!-- local DOM goes here -->\n      <div id=\"target_temperature\">[[value]] [[units]]</div>\n      <div class=\"control-buttons\">\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-up\"\n            on-click=\"incrementValue\"\n          ></paper-icon-button>\n        </div>\n        <div>\n          <paper-icon-button\n            icon=\"hass:chevron-down\"\n            on-click=\"decrementValue\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var HaWaterHeaterControl =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaWaterHeaterControl, _EventsMixin);

  function HaWaterHeaterControl() {
    _classCallCheck(this, HaWaterHeaterControl);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaWaterHeaterControl).apply(this, arguments));
  }

  _createClass(HaWaterHeaterControl, [{
    key: "temperatureStateInFlux",
    value: function temperatureStateInFlux(inFlux) {
      this.$.target_temperature.classList.toggle("in-flux", inFlux);
    }
  }, {
    key: "incrementValue",
    value: function incrementValue() {
      var newval = this.value + this.step;

      if (this.value < this.max) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval <= this.max) {
        // If no initial target_temp
        // this forces control to start
        // from the min configured instead of 0
        if (newval <= this.min) {
          this.value = this.min;
        } else {
          this.value = newval;
        }
      } else {
        this.value = this.max;
      }
    }
  }, {
    key: "decrementValue",
    value: function decrementValue() {
      var newval = this.value - this.step;

      if (this.value > this.min) {
        this.last_changed = Date.now();
        this.temperatureStateInFlux(true);
      }

      if (newval >= this.min) {
        this.value = newval;
      } else {
        this.value = this.min;
      }
    }
  }, {
    key: "valueChanged",
    value: function valueChanged() {
      var _this = this;

      // when the last_changed timestamp is changed,
      // trigger a potential event fire in
      // the future, as long as last changed is far enough in the
      // past.
      if (this.last_changed) {
        window.setTimeout(function () {
          var now = Date.now();

          if (now - _this.last_changed >= 2000) {
            _this.fire("change");

            _this.temperatureStateInFlux(false);

            _this.last_changed = null;
          }
        }, 2010);
      }
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
        value: {
          type: Number,
          observer: "valueChanged"
        },
        units: {
          type: String
        },
        min: {
          type: Number
        },
        max: {
          type: Number
        },
        step: {
          type: Number,
          value: 1
        }
      };
    }
  }]);

  return HaWaterHeaterControl;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-water_heater-control", HaWaterHeaterControl);

/***/ }),

/***/ "./src/dialogs/ha-more-info-dialog.js":
/*!********************************************!*\
  !*** ./src/dialogs/ha-more-info-dialog.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _more_info_more_info_controls__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info/more-info-controls */ "./src/dialogs/more-info/more-info-controls.js");
/* harmony import */ var _more_info_more_info_settings__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info/more-info-settings */ "./src/dialogs/more-info/more-info-settings.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/dialog-mixin */ "./src/mixins/dialog-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog paper-dialog-shared-styles\">\n        :host {\n          font-size: 14px;\n          width: 365px;\n          border-radius: 2px;\n        }\n\n        more-info-controls,\n        more-info-settings {\n          --more-info-header-background: var(--secondary-background-color);\n          --more-info-header-color: var(--primary-text-color);\n          --ha-more-info-app-toolbar-title: {\n            /* Design guideline states 24px, changed to 16 to align with state info */\n            margin-left: 16px;\n            line-height: 1.3em;\n            max-height: 2.6em;\n            overflow: hidden;\n            /* webkit and blink still support simple multiline text-overflow */\n            display: -webkit-box;\n            -webkit-line-clamp: 2;\n            -webkit-box-orient: vertical;\n            text-overflow: ellipsis;\n          }\n        }\n\n        /* overrule the ha-style-dialog max-height on small screens */\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          more-info-controls,\n          more-info-settings {\n            --more-info-header-background: var(--primary-color);\n            --more-info-header-color: var(--text-primary-color);\n          }\n          :host {\n            width: 100% !important;\n            border-radius: 0px;\n            position: fixed !important;\n            margin: 0;\n          }\n          :host::before {\n            content: \"\";\n            position: fixed;\n            z-index: -1;\n            top: 0px;\n            left: 0px;\n            right: 0px;\n            bottom: 0px;\n            background-color: inherit;\n          }\n        }\n\n        :host([data-domain=\"camera\"]) {\n          width: auto;\n        }\n\n        :host([data-domain=\"history_graph\"]),\n        :host([large]) {\n          width: 90%;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[!_page]]\">\n        <more-info-controls\n          class=\"no-padding\"\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n          dialog-element=\"[[_dialogElement]]\"\n          can-configure=\"[[_registryInfo]]\"\n          large=\"{{large}}\"\n        ></more-info-controls>\n      </template>\n      <template is=\"dom-if\" if='[[_equals(_page, \"settings\")]]'>\n        <more-info-settings\n          class=\"no-padding\"\n          hass=\"[[hass]]\"\n          state-obj=\"[[stateObj]]\"\n          registry-info=\"{{_registryInfo}}\"\n        ></more-info-settings>\n      </template>\n    "]);

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











/*
 * @appliesMixin DialogMixin
 */

var HaMoreInfoDialog =
/*#__PURE__*/
function (_DialogMixin) {
  _inherits(HaMoreInfoDialog, _DialogMixin);

  function HaMoreInfoDialog() {
    _classCallCheck(this, HaMoreInfoDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMoreInfoDialog).apply(this, arguments));
  }

  _createClass(HaMoreInfoDialog, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaMoreInfoDialog.prototype), "ready", this).call(this);

      this._dialogElement = this;
      this.addEventListener("more-info-page", function (ev) {
        _this._page = ev.detail.page;
      });
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj) : "";
    }
  }, {
    key: "_computeStateObj",
    value: function _computeStateObj(hass) {
      return hass.states[hass.moreInfoEntityId] || null;
    }
  }, {
    key: "_stateObjChanged",
    value: function () {
      var _stateObjChanged2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee(newVal, oldVal) {
        var _this2 = this;

        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (newVal) {
                  _context.next = 3;
                  break;
                }

                this.setProperties({
                  opened: false,
                  _page: null,
                  _registryInfo: null,
                  large: false
                });
                return _context.abrupt("return");

              case 3:
                requestAnimationFrame(function () {
                  return requestAnimationFrame(function () {
                    // allow dialog to render content before showing it so it will be
                    // positioned correctly.
                    _this2.opened = true;
                  });
                });

                if (!(!Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_8__["default"])(this.hass, "config") || oldVal && oldVal.entity_id === newVal.entity_id)) {
                  _context.next = 6;
                  break;
                }

                return _context.abrupt("return");

              case 6:
                if (!this.hass.user.is_admin) {
                  _context.next = 17;
                  break;
                }

                _context.prev = 7;
                _context.next = 10;
                return this.hass.callWS({
                  type: "config/entity_registry/get",
                  entity_id: newVal.entity_id
                });

              case 10:
                info = _context.sent;
                this._registryInfo = info;
                _context.next = 17;
                break;

              case 14:
                _context.prev = 14;
                _context.t0 = _context["catch"](7);
                this._registryInfo = null;

              case 17:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[7, 14]]);
      }));

      function _stateObjChanged(_x, _x2) {
        return _stateObjChanged2.apply(this, arguments);
      }

      return _stateObjChanged;
    }()
  }, {
    key: "_dialogOpenChanged",
    value: function _dialogOpenChanged(newVal) {
      if (!newVal && this.stateObj) {
        this.fire("hass-more-info", {
          entityId: null
        });
      }
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_largeChanged",
    value: function _largeChanged() {
      this.notifyResize();
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
        hass: Object,
        stateObj: {
          type: Object,
          computed: "_computeStateObj(hass)",
          observer: "_stateObjChanged"
        },
        large: {
          type: Boolean,
          reflectToAttribute: true,
          observer: "_largeChanged"
        },
        _dialogElement: Object,
        _registryInfo: Object,
        _page: {
          type: String,
          value: null
        },
        dataDomain: {
          computed: "_computeDomain(stateObj)",
          reflectToAttribute: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_dialogOpenChanged(opened)"];
    }
  }]);

  return HaMoreInfoDialog;
}(Object(_mixins_dialog_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("ha-more-info-dialog", HaMoreInfoDialog);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js":
/*!*************************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-alarm_control_panel.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        paper-input {\n          margin: auto;\n          max-width: 200px;\n        }\n        .pad {\n          display: flex;\n          justify-content: center;\n          margin-bottom: 24px;\n        }\n        .pad div {\n          display: flex;\n          flex-direction: column;\n        }\n        .pad mwc-button {\n          width: 80px;\n        }\n        .actions mwc-button {\n          min-width: 160px;\n          margin-bottom: 16px;\n        }\n        mwc-button.disarm {\n          color: var(--google-red-500);\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[_codeFormat]]\">\n        <paper-input\n          label=\"[[localize('ui.card.alarm_control_panel.code')]]\"\n          value=\"{{_enteredCode}}\"\n          type=\"password\"\n          disabled=\"[[!_inputEnabled]]\"\n        ></paper-input>\n\n        <template is=\"dom-if\" if=\"[[_isNumber(_codeFormat)]]\">\n          <div class=\"pad\">\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"1\"\n                raised\n                >1</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"4\"\n                raised\n                >4</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"7\"\n                raised\n                >7</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"2\"\n                raised\n                >2</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"5\"\n                raised\n                >5</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"8\"\n                raised\n                >8</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"0\"\n                raised\n                >0</mwc-button\n              >\n            </div>\n            <div>\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"3\"\n                raised\n                >3</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"6\"\n                raised\n                >6</mwc-button\n              >\n              <mwc-button\n                on-click=\"_digitClicked\"\n                disabled=\"[[!_inputEnabled]]\"\n                data-digit=\"9\"\n                raised\n                >9</mwc-button\n              >\n              <mwc-button\n                on-click=\"_clearEnteredCode\"\n                disabled=\"[[!_inputEnabled]]\"\n                raised\n              >\n                [[localize('ui.card.alarm_control_panel.clear_code')]]\n              </mwc-button>\n            </div>\n          </div>\n        </template>\n      </template>\n\n      <div class=\"layout horizontal center-justified actions\">\n        <template is=\"dom-if\" if=\"[[_disarmVisible]]\">\n          <mwc-button\n            raised\n            class=\"disarm\"\n            on-click=\"_callService\"\n            data-service=\"alarm_disarm\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.disarm')]]\n          </mwc-button>\n        </template>\n        <template is=\"dom-if\" if=\"[[_armVisible]]\">\n          <mwc-button\n            raised\n            on-click=\"_callService\"\n            data-service=\"alarm_arm_home\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.arm_home')]]\n          </mwc-button>\n          <mwc-button\n            raised\n            on-click=\"_callService\"\n            data-service=\"alarm_arm_away\"\n            disabled=\"[[!_codeValid]]\"\n          >\n            [[localize('ui.card.alarm_control_panel.arm_away')]]\n          </mwc-button>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









var MoreInfoAlarmControlPanel =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoAlarmControlPanel, _LocalizeMixin);

  _createClass(MoreInfoAlarmControlPanel, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: {
          type: Object,
          observer: "_stateObjChanged"
        },
        _enteredCode: {
          type: String,
          value: ""
        },
        _codeFormat: {
          type: String,
          value: ""
        },
        _codeValid: {
          type: Boolean,
          computed: "_validateCode(_enteredCode, _codeFormat)"
        },
        _disarmVisible: {
          type: Boolean,
          value: false
        },
        _armVisible: {
          type: Boolean,
          value: false
        },
        _inputEnabled: {
          type: Boolean,
          value: false
        }
      };
    }
  }]);

  function MoreInfoAlarmControlPanel() {
    var _this;

    _classCallCheck(this, MoreInfoAlarmControlPanel);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoAlarmControlPanel).call(this));
    _this._armedStates = ["armed_home", "armed_away", "armed_night", "armed_custom_bypass"];
    return _this;
  }

  _createClass(MoreInfoAlarmControlPanel, [{
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal, oldVal) {
      var _this2 = this;

      if (newVal) {
        var state = newVal.state;
        var props = {
          _codeFormat: newVal.attributes.code_format,
          _armVisible: state === "disarmed",
          _disarmVisible: this._armedStates.includes(state) || state === "pending" || state === "triggered" || state === "arming"
        };
        props._inputEnabled = props._disarmVisible || props._armVisible;
        this.setProperties(props);
      }

      if (oldVal) {
        setTimeout(function () {
          _this2.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "_isNumber",
    value: function _isNumber(format) {
      return format === "Number";
    }
  }, {
    key: "_validateCode",
    value: function _validateCode(code, format) {
      return !format || code.length > 0;
    }
  }, {
    key: "_digitClicked",
    value: function _digitClicked(ev) {
      this._enteredCode += ev.target.getAttribute("data-digit");
    }
  }, {
    key: "_clearEnteredCode",
    value: function _clearEnteredCode() {
      this._enteredCode = "";
    }
  }, {
    key: "_callService",
    value: function _callService(ev) {
      var _this3 = this;

      var service = ev.target.getAttribute("data-service");
      var data = {
        entity_id: this.stateObj.entity_id,
        code: this._enteredCode
      };
      this.hass.callService("alarm_control_panel", service, data).then(function () {
        _this3._enteredCode = "";
      });
    }
  }]);

  return MoreInfoAlarmControlPanel;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("more-info-alarm_control_panel", MoreInfoAlarmControlPanel);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-automation.js":
/*!****************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-automation.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .flex {\n          display: flex;\n          justify-content: space-between;\n        }\n        .actions {\n          margin: 36px 0 8px 0;\n          text-align: right;\n        }\n      </style>\n\n      <div class=\"flex\">\n        <div>[[localize('ui.card.automation.last_triggered')]]:</div>\n        <ha-relative-time\n          hass=\"[[hass]]\"\n          datetime=\"[[stateObj.attributes.last_triggered]]\"\n        ></ha-relative-time>\n      </div>\n\n      <div class=\"actions\">\n        <mwc-button on-click=\"handleTriggerTapped\">\n          [[localize('ui.card.automation.trigger')]]\n        </mwc-button>\n      </div>\n    "]);

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







var MoreInfoAutomation =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoAutomation, _LocalizeMixin);

  function MoreInfoAutomation() {
    _classCallCheck(this, MoreInfoAutomation);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoAutomation).apply(this, arguments));
  }

  _createClass(MoreInfoAutomation, [{
    key: "handleTriggerTapped",
    value: function handleTriggerTapped() {
      this.hass.callService("automation", "trigger", {
        entity_id: this.stateObj.entity_id
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
        stateObj: Object
      };
    }
  }]);

  return MoreInfoAutomation;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-automation", MoreInfoAutomation);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-camera.ts":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-camera.ts ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../data/camera */ "./src/data/camera.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _components_ha_camera_stream__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-camera-stream */ "./src/components/ha-camera-stream.ts");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n      paper-checkbox {\n        position: absolute;\n        top: 0;\n        right: 0;\n        background-color: var(--secondary-background-color);\n        padding: 5px;\n        border-bottom-left-radius: 6px;\n      }\n    "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n            <paper-checkbox\n              .checked=", "\n              @change=", "\n            >\n              Preload stream\n            </paper-checkbox>\n          "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n      <ha-camera-stream\n        .hass=\"", "\"\n        .stateObj=\"", "\"\n        showcontrols\n      ></ha-camera-stream>\n      ", "\n    "]);

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





 // Not duplicate import, it's for typing
// tslint:disable-next-line

var MoreInfoCamera = _decorate(null, function (_initialize, _LitElement) {
  var MoreInfoCamera =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(MoreInfoCamera, _LitElement2);

    function MoreInfoCamera() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, MoreInfoCamera);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoCamera)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return MoreInfoCamera;
  }(_LitElement);

  return {
    F: MoreInfoCamera,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "stateObj",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["property"])()],
      key: "_cameraPrefs",
      value: void 0
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        if (!this.hass || !this.stateObj) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
        }

        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject2(), this.hass, this.stateObj, this._cameraPrefs ? Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject3(), this._cameraPrefs.preload_stream, this._handleCheckboxChanged) : undefined);
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        if (!changedProps.has("stateObj")) {
          return;
        }

        var oldState = changedProps.get("stateObj");
        var oldEntityId = oldState ? oldState.entity_id : undefined;
        var curEntityId = this.stateObj ? this.stateObj.entity_id : undefined; // Same entity, ignore.

        if (curEntityId === oldEntityId) {
          return;
        }

        if (curEntityId && this.hass.config.components.includes("stream") && Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_2__["supportsFeature"])(this.stateObj, _data_camera__WEBPACK_IMPORTED_MODULE_1__["CAMERA_SUPPORT_STREAM"])) {
          // Fetch in background while we set up the video.
          this._fetchCameraPrefs();
        }
      }
    }, {
      kind: "method",
      key: "_fetchCameraPrefs",
      value: function () {
        var _fetchCameraPrefs2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee() {
          return regeneratorRuntime.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return Object(_data_camera__WEBPACK_IMPORTED_MODULE_1__["fetchCameraPrefs"])(this.hass, this.stateObj.entity_id);

                case 2:
                  this._cameraPrefs = _context.sent;

                case 3:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this);
        }));

        function _fetchCameraPrefs() {
          return _fetchCameraPrefs2.apply(this, arguments);
        }

        return _fetchCameraPrefs;
      }()
    }, {
      kind: "method",
      key: "_handleCheckboxChanged",
      value: function () {
        var _handleCheckboxChanged2 = _asyncToGenerator(
        /*#__PURE__*/
        regeneratorRuntime.mark(function _callee2(ev) {
          var checkbox;
          return regeneratorRuntime.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  checkbox = ev.currentTarget;
                  _context2.prev = 1;
                  _context2.next = 4;
                  return Object(_data_camera__WEBPACK_IMPORTED_MODULE_1__["updateCameraPrefs"])(this.hass, this.stateObj.entity_id, {
                    preload_stream: checkbox.checked
                  });

                case 4:
                  this._cameraPrefs = _context2.sent;
                  _context2.next = 11;
                  break;

                case 7:
                  _context2.prev = 7;
                  _context2.t0 = _context2["catch"](1);
                  alert(_context2.t0.message);
                  checkbox.checked = !checkbox.checked;

                case 11:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this, [[1, 7]]);
        }));

        function _handleCheckboxChanged(_x) {
          return _handleCheckboxChanged2.apply(this, arguments);
        }

        return _handleCheckboxChanged;
      }()
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_0__["css"])(_templateObject4());
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"]);

customElements.define("more-info-camera", MoreInfoCamera);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-climate.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-climate.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_climate_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-climate-control */ "./src/components/ha-climate-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          color: var(--primary-text-color);\n        }\n\n        .container-on,\n        .container-away_mode,\n        .container-aux_heat,\n        .container-temperature,\n        .container-humidity,\n        .container-operation_list,\n        .container-fan_list,\n        .container-swing_list {\n          display: none;\n        }\n\n        .has-on .container-on,\n        .has-away_mode .container-away_mode,\n        .has-aux_heat .container-aux_heat,\n        .has-target_temperature .container-temperature,\n        .has-target_temperature_low .container-temperature,\n        .has-target_temperature_high .container-temperature,\n        .has-target_humidity .container-humidity,\n        .has-operation_mode .container-operation_list,\n        .has-fan_mode .container-fan_list,\n        .has-swing_list .container-swing_list,\n        .has-swing_mode .container-swing_list {\n          display: block;\n          margin-bottom: 5px;\n        }\n\n        .container-operation_list iron-icon,\n        .container-fan_list iron-icon,\n        .container-swing_list iron-icon {\n          margin: 22px 16px 0 0;\n        }\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        ha-paper-slider {\n          width: 100%;\n        }\n\n        .container-humidity .single-row {\n            display: flex;\n            height: 50px;\n        }\n\n        .target-humidity {\n          width: 90px;\n          font-size: 200%;\n          margin: auto;\n          direction: ltr;\n        }\n\n        ha-climate-control.range-control-left,\n        ha-climate-control.range-control-right {\n          float: left;\n          width: 46%;\n        }\n        ha-climate-control.range-control-left {\n          margin-right: 4%;\n        }\n        ha-climate-control.range-control-right {\n          margin-left: 4%;\n        }\n\n        .humidity {\n          --paper-slider-active-color: var(--paper-blue-400);\n          --paper-slider-secondary-color: var(--paper-blue-400);\n        }\n\n        .single-row {\n          padding: 8px 0;\n        }\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <template is=\"dom-if\" if=\"[[supportsOn(stateObj)]]\">\n          <div class=\"container-on\">\n            <div class=\"center horizontal layout single-row\">\n              <div class=\"flex\">[[localize('ui.card.climate.on_off')]]</div>\n              <paper-toggle-button\n                checked=\"[[onToggleChecked]]\"\n                on-change=\"onToggleChanged\"\n              >\n              </paper-toggle-button>\n            </div>\n          </div>\n        </template>\n\n        <div class=\"container-temperature\">\n          <div class$=\"[[stateObj.attributes.operation_mode]]\">\n            <div hidden$=\"[[!supportsTemperatureControls(stateObj)]]\">\n              [[localize('ui.card.climate.target_temperature')]]\n            </div>\n            <template is=\"dom-if\" if=\"[[supportsTemperature(stateObj)]]\">\n              <ha-climate-control\n                value=\"[[stateObj.attributes.temperature]]\"\n                units=\"[[hass.config.unit_system.temperature]]\"\n                step=\"[[computeTemperatureStepSize(hass, stateObj)]]\"\n                min=\"[[stateObj.attributes.min_temp]]\"\n                max=\"[[stateObj.attributes.max_temp]]\"\n                on-change=\"targetTemperatureChanged\"\n              >\n              </ha-climate-control>\n            </template>\n            <template is=\"dom-if\" if=\"[[supportsTemperatureRange(stateObj)]]\">\n              <ha-climate-control\n                value=\"[[stateObj.attributes.target_temp_low]]\"\n                units=\"[[hass.config.unit_system.temperature]]\"\n                step=\"[[computeTemperatureStepSize(hass, stateObj)]]\"\n                min=\"[[stateObj.attributes.min_temp]]\"\n                max=\"[[stateObj.attributes.target_temp_high]]\"\n                class=\"range-control-left\"\n                on-change=\"targetTemperatureLowChanged\"\n              >\n              </ha-climate-control>\n              <ha-climate-control\n                value=\"[[stateObj.attributes.target_temp_high]]\"\n                units=\"[[hass.config.unit_system.temperature]]\"\n                step=\"[[computeTemperatureStepSize(hass, stateObj)]]\"\n                min=\"[[stateObj.attributes.target_temp_low]]\"\n                max=\"[[stateObj.attributes.max_temp]]\"\n                class=\"range-control-right\"\n                on-change=\"targetTemperatureHighChanged\"\n              >\n              </ha-climate-control>\n            </template>\n          </div>\n        </div>\n\n        <template is=\"dom-if\" if=\"[[supportsHumidity(stateObj)]]\">\n          <div class=\"container-humidity\">\n            <div>[[localize('ui.card.climate.target_humidity')]]</div>\n            <div class=\"single-row\">\n              <div class=\"target-humidity\">\n                [[stateObj.attributes.humidity]] %\n              </div>\n              <ha-paper-slider\n                class=\"humidity\"\n                min=\"[[stateObj.attributes.min_humidity]]\"\n                max=\"[[stateObj.attributes.max_humidity]]\"\n                secondary-progress=\"[[stateObj.attributes.max_humidity]]\"\n                step=\"1\"\n                pin=\"\"\n                value=\"[[stateObj.attributes.humidity]]\"\n                on-change=\"targetHumiditySliderChanged\"\n                ignore-bar-touch=\"\"\n                dir=\"[[rtl]]\"\n              >\n              </ha-paper-slider>\n            </div>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsOperationMode(stateObj)]]\">\n          <div class=\"container-operation_list\">\n            <div class=\"controls\">\n              <ha-paper-dropdown-menu\n                label-float=\"\"\n                dynamic-align=\"\"\n                label=\"[[localize('ui.card.climate.operation')]]\"\n              >\n                <paper-listbox\n                  slot=\"dropdown-content\"\n                  selected=\"[[stateObj.attributes.operation_mode]]\"\n                  attr-for-selected=\"item-name\"\n                  on-selected-changed=\"handleOperationmodeChanged\"\n                >\n                  <template\n                    is=\"dom-repeat\"\n                    items=\"[[stateObj.attributes.operation_list]]\"\n                  >\n                    <paper-item item-name$=\"[[item]]\"\n                      >[[_localizeOperationMode(localize, item)]]</paper-item\n                    >\n                  </template>\n                </paper-listbox>\n              </ha-paper-dropdown-menu>\n            </div>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsFanMode(stateObj)]]\">\n          <div class=\"container-fan_list\">\n            <ha-paper-dropdown-menu\n              label-float=\"\"\n              dynamic-align=\"\"\n              label=\"[[localize('ui.card.climate.fan_mode')]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"[[stateObj.attributes.fan_mode]]\"\n                attr-for-selected=\"item-name\"\n                on-selected-changed=\"handleFanmodeChanged\"\n              >\n                <template\n                  is=\"dom-repeat\"\n                  items=\"[[stateObj.attributes.fan_list]]\"\n                >\n                  <paper-item item-name$=\"[[item]]\"\n                    >[[_localizeFanMode(localize, item)]]\n                  </paper-item>\n                </template>\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsSwingMode(stateObj)]]\">\n          <div class=\"container-swing_list\">\n            <ha-paper-dropdown-menu\n              label-float=\"\"\n              dynamic-align=\"\"\n              label=\"[[localize('ui.card.climate.swing_mode')]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                selected=\"[[stateObj.attributes.swing_mode]]\"\n                attr-for-selected=\"item-name\"\n                on-selected-changed=\"handleSwingmodeChanged\"\n              >\n                <template\n                  is=\"dom-repeat\"\n                  items=\"[[stateObj.attributes.swing_list]]\"\n                >\n                  <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n                </template>\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsAwayMode(stateObj)]]\">\n          <div class=\"container-away_mode\">\n            <div class=\"center horizontal layout single-row\">\n              <div class=\"flex\">[[localize('ui.card.climate.away_mode')]]</div>\n              <paper-toggle-button\n                checked=\"[[awayToggleChecked]]\"\n                on-change=\"awayToggleChanged\"\n              >\n              </paper-toggle-button>\n            </div>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsAuxHeat(stateObj)]]\">\n          <div class=\"container-aux_heat\">\n            <div class=\"center horizontal layout single-row\">\n              <div class=\"flex\">[[localize('ui.card.climate.aux_heat')]]</div>\n              <paper-toggle-button\n                checked=\"[[auxToggleChecked]]\"\n                on-change=\"auxToggleChanged\"\n              >\n              </paper-toggle-button>\n            </div>\n          </div>\n        </template>\n      </div>\n    "]);

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
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var MoreInfoClimate =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoClimate, _LocalizeMixin);

  function MoreInfoClimate() {
    _classCallCheck(this, MoreInfoClimate);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoClimate).apply(this, arguments));
  }

  _createClass(MoreInfoClimate, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      if (newVal) {
        this.setProperties({
          awayToggleChecked: newVal.attributes.away_mode === "on",
          auxToggleChecked: newVal.attributes.aux_heat === "on",
          onToggleChecked: newVal.state !== "off"
        });
      }

      if (oldVal) {
        this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(500), function () {
          _this.fire("iron-resize");
        });
      }
    }
  }, {
    key: "computeTemperatureStepSize",
    value: function computeTemperatureStepSize(hass, stateObj) {
      if (stateObj.attributes.target_temp_step) {
        return stateObj.attributes.target_temp_step;
      }

      if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
        return 1;
      }

      return 0.5;
    }
  }, {
    key: "supportsTemperatureControls",
    value: function supportsTemperatureControls(stateObj) {
      return this.supportsTemperature(stateObj) || this.supportsTemperatureRange(stateObj);
    }
  }, {
    key: "supportsTemperature",
    value: function supportsTemperature(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 1) && typeof stateObj.attributes.temperature === "number";
    }
  }, {
    key: "supportsTemperatureRange",
    value: function supportsTemperatureRange(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 6) && (typeof stateObj.attributes.target_temp_low === "number" || typeof stateObj.attributes.target_temp_high === "number");
    }
  }, {
    key: "supportsHumidity",
    value: function supportsHumidity(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 8);
    }
  }, {
    key: "supportsFanMode",
    value: function supportsFanMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 64);
    }
  }, {
    key: "supportsOperationMode",
    value: function supportsOperationMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 128);
    }
  }, {
    key: "supportsSwingMode",
    value: function supportsSwingMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 512);
    }
  }, {
    key: "supportsAwayMode",
    value: function supportsAwayMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 1024);
    }
  }, {
    key: "supportsAuxHeat",
    value: function supportsAuxHeat(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 2048);
    }
  }, {
    key: "supportsOn",
    value: function supportsOn(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_13__["supportsFeature"])(stateObj, 4096);
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var _featureClassNames = {
        1: "has-target_temperature",
        2: "has-target_temperature_high",
        4: "has-target_temperature_low",
        8: "has-target_humidity",
        16: "has-target_humidity_high",
        32: "has-target_humidity_low",
        64: "has-fan_mode",
        128: "has-operation_mode",
        256: "has-hold_mode",
        512: "has-swing_mode",
        1024: "has-away_mode",
        2048: "has-aux_heat",
        4096: "has-on"
      };
      var classes = [Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj, ["current_temperature", "current_humidity"]), Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_12__["default"])(stateObj, _featureClassNames)];
      classes.push("more-info-climate");
      return classes.join(" ");
    }
  }, {
    key: "targetTemperatureChanged",
    value: function targetTemperatureChanged(ev) {
      var temperature = ev.target.value;
      if (temperature === this.stateObj.attributes.temperature) return;
      this.callServiceHelper("set_temperature", {
        temperature: temperature
      });
    }
  }, {
    key: "targetTemperatureLowChanged",
    value: function targetTemperatureLowChanged(ev) {
      var targetTempLow = ev.currentTarget.value;
      if (targetTempLow === this.stateObj.attributes.target_temp_low) return;
      this.callServiceHelper("set_temperature", {
        target_temp_low: targetTempLow,
        target_temp_high: this.stateObj.attributes.target_temp_high
      });
    }
  }, {
    key: "targetTemperatureHighChanged",
    value: function targetTemperatureHighChanged(ev) {
      var targetTempHigh = ev.currentTarget.value;
      if (targetTempHigh === this.stateObj.attributes.target_temp_high) return;
      this.callServiceHelper("set_temperature", {
        target_temp_low: this.stateObj.attributes.target_temp_low,
        target_temp_high: targetTempHigh
      });
    }
  }, {
    key: "targetHumiditySliderChanged",
    value: function targetHumiditySliderChanged(ev) {
      var humidity = ev.target.value;
      if (humidity === this.stateObj.attributes.humidity) return;
      this.callServiceHelper("set_humidity", {
        humidity: humidity
      });
    }
  }, {
    key: "awayToggleChanged",
    value: function awayToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.away_mode === "on";
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.callServiceHelper("set_away_mode", {
        away_mode: newVal
      });
    }
  }, {
    key: "auxToggleChanged",
    value: function auxToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.aux_heat === "on";
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.callServiceHelper("set_aux_heat", {
        aux_heat: newVal
      });
    }
  }, {
    key: "onToggleChanged",
    value: function onToggleChanged(ev) {
      var oldVal = this.stateObj.state !== "off";
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.callServiceHelper(newVal ? "turn_on" : "turn_off", {});
    }
  }, {
    key: "handleFanmodeChanged",
    value: function handleFanmodeChanged(ev) {
      var oldVal = this.stateObj.attributes.fan_mode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.callServiceHelper("set_fan_mode", {
        fan_mode: newVal
      });
    }
  }, {
    key: "handleOperationmodeChanged",
    value: function handleOperationmodeChanged(ev) {
      var oldVal = this.stateObj.attributes.operation_mode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.callServiceHelper("set_operation_mode", {
        operation_mode: newVal
      });
    }
  }, {
    key: "handleSwingmodeChanged",
    value: function handleSwingmodeChanged(ev) {
      var oldVal = this.stateObj.attributes.swing_mode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.callServiceHelper("set_swing_mode", {
        swing_mode: newVal
      });
    }
  }, {
    key: "callServiceHelper",
    value: function callServiceHelper(service, data) {
      var _this2 = this;

      // We call stateChanged after a successful call to re-sync the inputs
      // with the state. It will be out of sync if our service call did not
      // result in the entity to be turned on. Since the state is not changing,
      // the resync is not called automatic.

      /* eslint-disable no-param-reassign */
      data.entity_id = this.stateObj.entity_id;
      /* eslint-enable no-param-reassign */

      this.hass.callService("climate", service, data).then(function () {
        _this2.stateObjChanged(_this2.stateObj);
      });
    }
  }, {
    key: "_localizeOperationMode",
    value: function _localizeOperationMode(localize, mode) {
      return localize("state.climate.".concat(mode)) || mode;
    }
  }, {
    key: "_localizeFanMode",
    value: function _localizeFanMode(localize, mode) {
      return localize("state_attributes.climate.fan_mode.".concat(mode)) || mode;
    }
  }, {
    key: "_computeRTLDirection",
    value: function _computeRTLDirection(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_16__["computeRTLDirection"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        awayToggleChecked: Boolean,
        auxToggleChecked: Boolean,
        onToggleChecked: Boolean,
        rtl: {
          type: String,
          value: "ltr",
          computed: "_computeRTLDirection(hass)"
        }
      };
    }
  }]);

  return MoreInfoClimate;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_15__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])));

customElements.define("more-info-climate", MoreInfoClimate);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-configurator.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-configurator.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_input_iron_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-input/iron-input */ "./node_modules/@polymer/iron-input/iron-input.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-markdown */ "./src/components/ha-markdown.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        p {\n          margin: 8px 0;\n        }\n\n        a {\n          color: var(--primary-color);\n        }\n\n        p > img {\n          max-width: 100%;\n        }\n\n        p.center {\n          text-align: center;\n        }\n\n        p.error {\n          color: #c62828;\n        }\n\n        p.submit {\n          text-align: center;\n          height: 41px;\n        }\n\n        paper-spinner {\n          width: 14px;\n          height: 14px;\n          margin-right: 20px;\n        }\n\n        [hidden] {\n          display: none;\n        }\n      </style>\n\n      <div class=\"layout vertical\">\n        <template is=\"dom-if\" if=\"[[isConfigurable]]\">\n          <ha-markdown\n            content=\"[[stateObj.attributes.description]]\"\n          ></ha-markdown>\n\n          <p class=\"error\" hidden$=\"[[!stateObj.attributes.errors]]\">\n            [[stateObj.attributes.errors]]\n          </p>\n\n          <template is=\"dom-repeat\" items=\"[[stateObj.attributes.fields]]\">\n            <paper-input\n              label=\"[[item.name]]\"\n              name=\"[[item.id]]\"\n              type=\"[[item.type]]\"\n              on-change=\"fieldChanged\"\n            ></paper-input>\n          </template>\n\n          <p class=\"submit\" hidden$=\"[[!stateObj.attributes.submit_caption]]\">\n            <mwc-button\n              raised=\"\"\n              disabled=\"[[isConfiguring]]\"\n              on-click=\"submitClicked\"\n            >\n              <paper-spinner\n                active=\"[[isConfiguring]]\"\n                hidden=\"[[!isConfiguring]]\"\n                alt=\"Configuring\"\n              ></paper-spinner>\n              [[stateObj.attributes.submit_caption]]\n            </mwc-button>\n          </p>\n        </template>\n      </div>\n    "]);

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










var MoreInfoConfigurator =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoConfigurator, _PolymerElement);

  function MoreInfoConfigurator() {
    _classCallCheck(this, MoreInfoConfigurator);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoConfigurator).apply(this, arguments));
  }

  _createClass(MoreInfoConfigurator, [{
    key: "computeIsConfigurable",
    value: function computeIsConfigurable(stateObj) {
      return stateObj.state === "configure";
    }
  }, {
    key: "fieldChanged",
    value: function fieldChanged(ev) {
      var el = ev.target;
      this.fieldInput[el.name] = el.value;
    }
  }, {
    key: "submitClicked",
    value: function submitClicked() {
      var data = {
        configure_id: this.stateObj.attributes.configure_id,
        fields: this.fieldInput
      };
      this.isConfiguring = true;
      this.hass.callService("configurator", "configure", data).then(function () {
        this.isConfiguring = false;
      }.bind(this), function () {
        this.isConfiguring = false;
      }.bind(this));
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
        stateObj: {
          type: Object
        },
        action: {
          type: String,
          value: "display"
        },
        isConfigurable: {
          type: Boolean,
          computed: "computeIsConfigurable(stateObj)"
        },
        isConfiguring: {
          type: Boolean,
          value: false
        },
        fieldInput: {
          type: Object,
          value: function value() {
            return {};
          }
        }
      };
    }
  }]);

  return MoreInfoConfigurator;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

customElements.define("more-info-configurator", MoreInfoConfigurator);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-content.ts":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-content.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _more_info_alarm_control_panel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./more-info-alarm_control_panel */ "./src/dialogs/more-info/controls/more-info-alarm_control_panel.js");
/* harmony import */ var _more_info_automation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./more-info-automation */ "./src/dialogs/more-info/controls/more-info-automation.js");
/* harmony import */ var _more_info_camera__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./more-info-camera */ "./src/dialogs/more-info/controls/more-info-camera.ts");
/* harmony import */ var _more_info_climate__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./more-info-climate */ "./src/dialogs/more-info/controls/more-info-climate.js");
/* harmony import */ var _more_info_configurator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./more-info-configurator */ "./src/dialogs/more-info/controls/more-info-configurator.js");
/* harmony import */ var _more_info_cover__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./more-info-cover */ "./src/dialogs/more-info/controls/more-info-cover.js");
/* harmony import */ var _more_info_default__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./more-info-default */ "./src/dialogs/more-info/controls/more-info-default.js");
/* harmony import */ var _more_info_fan__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./more-info-fan */ "./src/dialogs/more-info/controls/more-info-fan.js");
/* harmony import */ var _more_info_group__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./more-info-group */ "./src/dialogs/more-info/controls/more-info-group.js");
/* harmony import */ var _more_info_history_graph__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./more-info-history_graph */ "./src/dialogs/more-info/controls/more-info-history_graph.js");
/* harmony import */ var _more_info_input_datetime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./more-info-input_datetime */ "./src/dialogs/more-info/controls/more-info-input_datetime.js");
/* harmony import */ var _more_info_light__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./more-info-light */ "./src/dialogs/more-info/controls/more-info-light.js");
/* harmony import */ var _more_info_lock__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./more-info-lock */ "./src/dialogs/more-info/controls/more-info-lock.js");
/* harmony import */ var _more_info_media_player__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./more-info-media_player */ "./src/dialogs/more-info/controls/more-info-media_player.js");
/* harmony import */ var _more_info_script__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./more-info-script */ "./src/dialogs/more-info/controls/more-info-script.js");
/* harmony import */ var _more_info_sun__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./more-info-sun */ "./src/dialogs/more-info/controls/more-info-sun.js");
/* harmony import */ var _more_info_updater__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./more-info-updater */ "./src/dialogs/more-info/controls/more-info-updater.js");
/* harmony import */ var _more_info_vacuum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./more-info-vacuum */ "./src/dialogs/more-info/controls/more-info-vacuum.js");
/* harmony import */ var _more_info_water_heater__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./more-info-water_heater */ "./src/dialogs/more-info/controls/more-info-water_heater.js");
/* harmony import */ var _more_info_weather__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./more-info-weather */ "./src/dialogs/more-info/controls/more-info-weather.js");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
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

























var MoreInfoContent =
/*#__PURE__*/
function (_UpdatingElement) {
  _inherits(MoreInfoContent, _UpdatingElement);

  function MoreInfoContent() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, MoreInfoContent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(MoreInfoContent)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "hass", void 0);

    _defineProperty(_assertThisInitialized(_this), "stateObj", void 0);

    _defineProperty(_assertThisInitialized(_this), "_detachedChild", void 0);

    return _this;
  }

  _createClass(MoreInfoContent, [{
    key: "firstUpdated",
    value: function firstUpdated() {
      this.style.position = "relative";
      this.style.display = "block";
    } // This is not a lit element, but an updating element, so we implement update

  }, {
    key: "update",
    value: function update(changedProps) {
      _get(_getPrototypeOf(MoreInfoContent.prototype), "update", this).call(this, changedProps);

      var stateObj = this.stateObj;
      var hass = this.hass;

      if (!stateObj || !hass) {
        if (this.lastChild) {
          this._detachedChild = this.lastChild; // Detach child to prevent it from doing work.

          this.removeChild(this.lastChild);
        }

        return;
      }

      if (this._detachedChild) {
        this.appendChild(this._detachedChild);
        this._detachedChild = undefined;
      }

      var moreInfoType = stateObj.attributes && "custom_ui_more_info" in stateObj.attributes ? stateObj.attributes.custom_ui_more_info : "more-info-" + Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_21__["default"])(stateObj);
      Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_22__["default"])(this, moreInfoType.toUpperCase(), {
        hass: hass,
        stateObj: stateObj
      });
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {},
        stateObj: {}
      };
    }
  }]);

  return MoreInfoContent;
}(lit_element__WEBPACK_IMPORTED_MODULE_0__["UpdatingElement"]);

customElements.define("more-info-content", MoreInfoContent);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-cover.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-cover.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_cover_tilt_controls__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-cover-tilt-controls */ "./src/components/ha-cover-tilt-controls.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _util_cover_model__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../util/cover-model */ "./src/util/cover-model.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .current_position,\n        .tilt {\n          max-height: 0px;\n          overflow: hidden;\n        }\n\n        .has-current_position .current_position,\n        .has-set_tilt_position .tilt,\n        .has-current_tilt_position .tilt {\n          max-height: 208px;\n        }\n\n        [invisible] {\n          visibility: hidden !important;\n        }\n      </style>\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"current_position\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.cover.position')]]\"\n            pin=\"\"\n            value=\"{{coverPositionSliderValue}}\"\n            disabled=\"[[!entityObj.supportsSetPosition]]\"\n            on-change=\"coverPositionSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"tilt\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.cover.tilt_position')]]\"\n            pin=\"\"\n            extra=\"\"\n            value=\"{{coverTiltPositionSliderValue}}\"\n            disabled=\"[[!entityObj.supportsSetTiltPosition]]\"\n            on-change=\"coverTiltPositionSliderChanged\"\n          >\n            <ha-cover-tilt-controls\n              slot=\"extra\"\n              hidden$=\"[[entityObj.isTiltOnly]]\"\n              hass=\"[[hass]]\"\n              state-obj=\"[[stateObj]]\"\n            ></ha-cover-tilt-controls>\n          </ha-labeled-slider>\n        </div>\n      </div>\n    "]);

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











var FEATURE_CLASS_NAMES = {
  128: "has-set_tilt_position"
};

var MoreInfoCover =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoCover, _LocalizeMixin);

  function MoreInfoCover() {
    _classCallCheck(this, MoreInfoCover);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoCover).apply(this, arguments));
  }

  _createClass(MoreInfoCover, [{
    key: "computeEntityObj",
    value: function computeEntityObj(hass, stateObj) {
      return new _util_cover_model__WEBPACK_IMPORTED_MODULE_6__["default"](hass, stateObj);
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      if (newVal) {
        this.setProperties({
          coverPositionSliderValue: newVal.attributes.current_position,
          coverTiltPositionSliderValue: newVal.attributes.current_tilt_position
        });
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = [Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj, ["current_position", "current_tilt_position"]), Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj, FEATURE_CLASS_NAMES)];
      return classes.join(" ");
    }
  }, {
    key: "coverPositionSliderChanged",
    value: function coverPositionSliderChanged(ev) {
      this.entityObj.setCoverPosition(ev.target.value);
    }
  }, {
    key: "coverTiltPositionSliderChanged",
    value: function coverTiltPositionSliderChanged(ev) {
      this.entityObj.setCoverTiltPosition(ev.target.value);
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
        hass: Object,
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        entityObj: {
          type: Object,
          computed: "computeEntityObj(hass, stateObj)"
        },
        coverPositionSliderValue: Number,
        coverTiltPositionSliderValue: Number
      };
    }
  }]);

  return MoreInfoCover;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_9__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("more-info-cover", MoreInfoCover);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-default.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-default.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <ha-attributes state-obj=\"[[stateObj]]\"></ha-attributes>\n    "]);

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





var MoreInfoDefault =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoDefault, _PolymerElement);

  function MoreInfoDefault() {
    _classCallCheck(this, MoreInfoDefault);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoDefault).apply(this, arguments));
  }

  _createClass(MoreInfoDefault, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoDefault;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("more-info-default", MoreInfoDefault);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-fan.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-fan.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .container-speed_list,\n        .container-direction,\n        .container-oscillating {\n          display: none;\n        }\n\n        .has-speed_list .container-speed_list,\n        .has-direction .container-direction,\n        .has-oscillating .container-oscillating {\n          display: block;\n        }\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"container-speed_list\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"[[localize('ui.card.fan.speed')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.speed]]\"\n              on-selected-changed=\"speedChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.speed_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <div class=\"container-oscillating\">\n          <div class=\"center horizontal layout single-row\">\n            <div class=\"flex\">[[localize('ui.card.fan.oscillate')]]</div>\n            <paper-toggle-button\n              checked=\"[[oscillationToggleChecked]]\"\n              on-change=\"oscillationToggleChanged\"\n            >\n            </paper-toggle-button>\n          </div>\n        </div>\n\n        <div class=\"container-direction\">\n          <div class=\"direction\">\n            <div>[[localize('ui.card.fan.direction')]]</div>\n            <paper-icon-button\n              icon=\"hass:rotate-left\"\n              on-click=\"onDirectionLeft\"\n              title=\"Left\"\n              disabled=\"[[computeIsRotatingLeft(stateObj)]]\"\n            ></paper-icon-button>\n            <paper-icon-button\n              icon=\"hass:rotate-right\"\n              on-click=\"onDirectionRight\"\n              title=\"Right\"\n              disabled=\"[[computeIsRotatingRight(stateObj)]]\"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"speed,speed_list,oscillating,direction\"\n      ></ha-attributes>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var MoreInfoFan =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoFan, _LocalizeMixin);

  function MoreInfoFan() {
    _classCallCheck(this, MoreInfoFan);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoFan).apply(this, arguments));
  }

  _createClass(MoreInfoFan, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      if (newVal) {
        this.setProperties({
          oscillationToggleChecked: newVal.attributes.oscillating
        });
      }

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return "more-info-fan " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_9__["default"])(stateObj, ["oscillating", "speed_list", "direction"]);
    }
  }, {
    key: "speedChanged",
    value: function speedChanged(ev) {
      var oldVal = this.stateObj.attributes.speed;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("fan", "turn_on", {
        entity_id: this.stateObj.entity_id,
        speed: newVal
      });
    }
  }, {
    key: "oscillationToggleChanged",
    value: function oscillationToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.oscillating;
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.hass.callService("fan", "oscillate", {
        entity_id: this.stateObj.entity_id,
        oscillating: newVal
      });
    }
  }, {
    key: "onDirectionLeft",
    value: function onDirectionLeft() {
      this.hass.callService("fan", "set_direction", {
        entity_id: this.stateObj.entity_id,
        direction: "reverse"
      });
    }
  }, {
    key: "onDirectionRight",
    value: function onDirectionRight() {
      this.hass.callService("fan", "set_direction", {
        entity_id: this.stateObj.entity_id,
        direction: "forward"
      });
    }
  }, {
    key: "computeIsRotatingLeft",
    value: function computeIsRotatingLeft(stateObj) {
      return stateObj.attributes.direction === "reverse";
    }
  }, {
    key: "computeIsRotatingRight",
    value: function computeIsRotatingRight(stateObj) {
      return stateObj.attributes.direction === "forward";
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
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        oscillationToggleChecked: {
          type: Boolean
        }
      };
    }
  }]);

  return MoreInfoFan;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])));

customElements.define("more-info-fan", MoreInfoFan);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-group.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-group.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .child-card {\n          margin-bottom: 8px;\n        }\n\n        .child-card:last-child {\n          margin-bottom: 0;\n        }\n      </style>\n\n      <div id=\"groupedControlDetails\"></div>\n      <template is=\"dom-repeat\" items=\"[[states]]\" as=\"state\">\n        <div class=\"child-card\">\n          <state-card-content\n            state-obj=\"[[state]]\"\n            hass=\"[[hass]]\"\n          ></state-card-content>\n        </div>\n      </template>\n    "]);

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








var MoreInfoGroup =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoGroup, _PolymerElement);

  function MoreInfoGroup() {
    _classCallCheck(this, MoreInfoGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoGroup).apply(this, arguments));
  }

  _createClass(MoreInfoGroup, [{
    key: "computeStates",
    value: function computeStates(stateObj, hass) {
      var states = [];
      var entIds = stateObj.attributes.entity_id || [];

      for (var i = 0; i < entIds.length; i++) {
        var state = hass.states[entIds[i]];

        if (state) {
          states.push(state);
        }
      }

      return states;
    }
  }, {
    key: "statesChanged",
    value: function statesChanged(stateObj, states) {
      var groupDomainStateObj = false;
      var groupDomain = false;

      if (states && states.length > 0) {
        var baseStateObj = states.find(function (s) {
          return s.state === "on";
        }) || states[0];
        groupDomain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["default"])(baseStateObj); // Groups need to be filtered out or we'll show content of
        // first child above the children of the current group

        if (groupDomain !== "group") {
          groupDomainStateObj = Object.assign({}, baseStateObj, {
            entity_id: stateObj.entity_id,
            attributes: Object.assign({}, baseStateObj.attributes)
          });

          for (var i = 0; i < states.length; i++) {
            if (groupDomain !== Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_4__["default"])(states[i])) {
              groupDomainStateObj = false;
              break;
            }
          }
        }
      }

      if (!groupDomainStateObj) {
        var el = Object(_polymer_polymer_lib_legacy_polymer_dom__WEBPACK_IMPORTED_MODULE_0__["dom"])(this.$.groupedControlDetails);

        if (el.lastChild) {
          el.removeChild(el.lastChild);
        }
      } else {
        Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_5__["default"])(this.$.groupedControlDetails, "MORE-INFO-" + groupDomain.toUpperCase(), {
          stateObj: groupDomainStateObj,
          hass: this.hass
        });
      }
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
        states: {
          type: Array,
          computed: "computeStates(stateObj, hass)"
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["statesChanged(stateObj, states)"];
    }
  }]);

  return MoreInfoGroup;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]);

customElements.define("more-info-group", MoreInfoGroup);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-history_graph.js":
/*!*******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-history_graph.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _cards_ha_history_graph_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../cards/ha-history_graph-card */ "./src/cards/ha-history_graph-card.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          display: block;\n          margin-bottom: 6px;\n        }\n      </style>\n      <ha-history_graph-card\n        hass=\"[[hass]]\"\n        state-obj=\"[[stateObj]]\"\n        in-dialog=\"\"\n      >\n        <ha-attributes state-obj=\"[[stateObj]]\"></ha-attributes>\n      </ha-history_graph-card>\n    "]);

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






var MoreInfoHistoryGraph =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoHistoryGraph, _PolymerElement);

  function MoreInfoHistoryGraph() {
    _classCallCheck(this, MoreInfoHistoryGraph);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoHistoryGraph).apply(this, arguments));
  }

  _createClass(MoreInfoHistoryGraph, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return MoreInfoHistoryGraph;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("more-info-history_graph", MoreInfoHistoryGraph);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-input_datetime.js":
/*!********************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-input_datetime.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_date_picker_vaadin_date_picker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-date-picker/vaadin-date-picker */ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _components_paper_time_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/paper-time-input */ "./src/components/paper-time-input.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <template is=\"dom-if\" if=\"[[doesHaveDate(stateObj)]]\" restamp=\"\">\n          <div>\n            <vaadin-date-picker\n              id=\"dateInput\"\n              on-value-changed=\"dateTimeChanged\"\n              label=\"Date\"\n              value=\"{{selectedDate}}\"\n            ></vaadin-date-picker>\n          </div>\n        </template>\n        <template is=\"dom-if\" if=\"[[doesHaveTime(stateObj)]]\" restamp=\"\">\n          <div>\n            <paper-time-input\n              hour=\"{{selectedHour}}\"\n              min=\"{{selectedMinute}}\"\n              format=\"24\"\n            ></paper-time-input>\n          </div>\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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










var DatetimeInput =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(DatetimeInput, _PolymerElement);

  _createClass(DatetimeInput, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }]);

  function DatetimeInput() {
    var _this;

    _classCallCheck(this, DatetimeInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(DatetimeInput).call(this));
    _this.is_ready = false;
    return _this;
  }

  _createClass(DatetimeInput, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(DatetimeInput.prototype), "ready", this).call(this);

      this.is_ready = true;
    }
    /* Convert the date in the stateObj into a string useable by vaadin-date-picker */

  }, {
    key: "getDateString",
    value: function getDateString(stateObj) {
      if (stateObj.state === "unknown") {
        return "";
      }

      var monthFiller;

      if (stateObj.attributes.month < 10) {
        monthFiller = "0";
      } else {
        monthFiller = "";
      }

      var dayFiller;

      if (stateObj.attributes.day < 10) {
        dayFiller = "0";
      } else {
        dayFiller = "";
      }

      return stateObj.attributes.year + "-" + monthFiller + stateObj.attributes.month + "-" + dayFiller + stateObj.attributes.day;
    }
    /* Should fire when any value was changed *by the user*, not b/c of setting
     * initial values. */

  }, {
    key: "dateTimeChanged",
    value: function dateTimeChanged() {
      // Check if the change is really coming from the user
      if (!this.is_ready) {
        return;
      }

      var changed = false;
      var minuteFiller;
      var serviceData = {
        entity_id: this.stateObj.entity_id
      };

      if (this.stateObj.attributes.has_time) {
        changed |= parseInt(this.selectedMinute) !== this.stateObj.attributes.minute;
        changed |= parseInt(this.selectedHour) !== this.stateObj.attributes.hour;

        if (this.selectedMinute < 10) {
          minuteFiller = "0";
        } else {
          minuteFiller = "";
        }

        var timeStr = this.selectedHour + ":" + minuteFiller + this.selectedMinute;
        serviceData.time = timeStr;
      }

      if (this.stateObj.attributes.has_date) {
        if (this.selectedDate.length === 0) {
          return; // Date was not set
        }

        var dateValInput = new Date(this.selectedDate);
        var dateValState = new Date(this.stateObj.attributes.year, this.stateObj.attributes.month - 1, this.stateObj.attributes.day);
        changed |= dateValState !== dateValInput;
        serviceData.date = this.selectedDate;
      }

      if (changed) {
        this.hass.callService("input_datetime", "set_datetime", serviceData);
      }
    }
  }, {
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      // Set to non-ready s.t. dateTimeChanged does not fire
      this.is_ready = false;

      if (newVal.attributes.has_time) {
        this.selectedHour = newVal.attributes.hour;
        this.selectedMinute = newVal.attributes.minute;
      }

      if (newVal.attributes.has_date) {
        this.selectedDate = this.getDateString(newVal);
      }

      this.is_ready = true;
    }
  }, {
    key: "doesHaveDate",
    value: function doesHaveDate(stateObj) {
      return stateObj.attributes.has_date;
    }
  }, {
    key: "doesHaveTime",
    value: function doesHaveTime(stateObj) {
      return stateObj.attributes.has_time;
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return "more-info-input_datetime " + Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj, ["has_time", "has_date"]);
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        selectedDate: {
          type: String,
          observer: "dateTimeChanged"
        },
        selectedHour: {
          type: Number,
          observer: "dateTimeChanged"
        },
        selectedMinute: {
          type: Number,
          observer: "dateTimeChanged"
        }
      };
    }
  }]);

  return DatetimeInput;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]);

customElements.define("more-info-input_datetime", DatetimeInput);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-light.js":
/*!***********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-light.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_color_picker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-color-picker */ "./src/components/ha-color-picker.js");
/* harmony import */ var _components_ha_labeled_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-labeled-slider */ "./src/components/ha-labeled-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        .effect_list,\n        .brightness,\n        .color_temp,\n        .white_value {\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .color_temp {\n          --ha-slider-background: -webkit-linear-gradient(\n            right,\n            rgb(255, 160, 0) 0%,\n            white 50%,\n            rgb(166, 209, 255) 100%\n          );\n          /* The color temp minimum value shouldn't be rendered differently. It's not \"off\". */\n          --paper-slider-knob-start-border-color: var(--primary-color);\n        }\n\n        .segmentationContainer {\n          position: relative;\n          width: 100%;\n        }\n\n        ha-color-picker {\n          display: block;\n          width: 100%;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          padding: 0px;\n          max-height: 0px;\n          width: 23px;\n          height: 23px;\n          opacity: var(--dark-secondary-opacity);\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-color.is-on .segmentationContainer .segmentationButton {\n          position: absolute;\n          top: 11%;\n          transform: translate(0%, 0%);\n          width: 23px;\n          height: 23px;\n          padding: 0px;\n          opacity: var(--dark-secondary-opacity);\n        }\n\n        .has-effect_list.is-on .effect_list,\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          max-height: 84px;\n        }\n\n        .has-brightness .has-color_temp.is-on,\n        .has-white_value.is-on {\n          margin-top: -16px;\n        }\n\n        .has-brightness .brightness,\n        .has-color_temp.is-on .color_temp,\n        .has-white_value.is-on .white_value {\n          padding-top: 16px;\n        }\n\n        .has-color.is-on .segmentationButton {\n          max-height: 100px;\n          overflow: visible;\n        }\n\n        .has-color.is-on ha-color-picker {\n          max-height: 500px;\n          overflow: visible;\n          --ha-color-picker-wheel-borderwidth: 5;\n          --ha-color-picker-wheel-bordercolor: white;\n          --ha-color-picker-wheel-shadow: none;\n          --ha-color-picker-marker-borderwidth: 2;\n          --ha-color-picker-marker-bordercolor: white;\n        }\n\n        .is-unavailable .control {\n          max-height: 0px;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"control brightness\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.brightness')]]\"\n            icon=\"hass:brightness-5\"\n            min=\"1\"\n            max=\"255\"\n            value=\"{{brightnessSliderValue}}\"\n            on-change=\"brightnessSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"control color_temp\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.color_temperature')]]\"\n            icon=\"hass:thermometer\"\n            min=\"[[stateObj.attributes.min_mireds]]\"\n            max=\"[[stateObj.attributes.max_mireds]]\"\n            value=\"{{ctSliderValue}}\"\n            on-change=\"ctSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n\n        <div class=\"control white_value\">\n          <ha-labeled-slider\n            caption=\"[[localize('ui.card.light.white_value')]]\"\n            icon=\"hass:file-word-box\"\n            max=\"255\"\n            value=\"{{wvSliderValue}}\"\n            on-change=\"wvSliderChanged\"\n          ></ha-labeled-slider>\n        </div>\n        <div class=\"segmentationContainer\">\n          <ha-color-picker\n            class=\"control color\"\n            on-colorselected=\"colorPicked\"\n            desired-hs-color=\"{{colorPickerColor}}\"\n            throttle=\"500\"\n            hue-segments=\"{{hueSegments}}\"\n            saturation-segments=\"{{saturationSegments}}\"\n          >\n          </ha-color-picker>\n          <paper-icon-button\n            icon=\"mdi:palette\"\n            on-click=\"segmentClick\"\n            class=\"control segmentationButton\"\n          ></paper-icon-button>\n        </div>\n\n        <div class=\"control effect_list\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"[[localize('ui.card.light.effect')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.effect]]\"\n              on-selected-changed=\"effectChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.effect_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n\n        <ha-attributes\n          state-obj=\"[[stateObj]]\"\n          extra-filters=\"brightness,color_temp,white_value,effect_list,effect,hs_color,rgb_color,xy_color,min_mireds,max_mireds\"\n        ></ha-attributes>\n      </div>\n    "]);

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













var FEATURE_CLASS_NAMES = {
  1: "has-brightness",
  2: "has-color_temp",
  4: "has-effect_list",
  16: "has-color",
  128: "has-white_value"
};
/*
 * @appliesMixin EventsMixin
 */

var MoreInfoLight =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoLight, _LocalizeMixin);

  function MoreInfoLight() {
    _classCallCheck(this, MoreInfoLight);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoLight).apply(this, arguments));
  }

  _createClass(MoreInfoLight, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      var props = {
        brightnessSliderValue: 0
      };

      if (newVal && newVal.state === "on") {
        props.brightnessSliderValue = newVal.attributes.brightness;
        props.ctSliderValue = newVal.attributes.color_temp;
        props.wvSliderValue = newVal.attributes.white_value;

        if (newVal.attributes.hs_color) {
          props.colorPickerColor = {
            h: newVal.attributes.hs_color[0],
            s: newVal.attributes.hs_color[1] / 100
          };
        }
      }

      this.setProperties(props);

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_9__["default"])(stateObj, FEATURE_CLASS_NAMES)];

      if (stateObj && stateObj.state === "on") {
        classes.push("is-on");
      }

      if (stateObj && stateObj.state === "unavailable") {
        classes.push("is-unavailable");
      }

      return classes.join(" ");
    }
  }, {
    key: "effectChanged",
    value: function effectChanged(ev) {
      var oldVal = this.stateObj.attributes.effect;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        effect: newVal
      });
    }
  }, {
    key: "brightnessSliderChanged",
    value: function brightnessSliderChanged(ev) {
      var bri = parseInt(ev.target.value, 10);
      if (isNaN(bri)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        brightness: bri
      });
    }
  }, {
    key: "ctSliderChanged",
    value: function ctSliderChanged(ev) {
      var ct = parseInt(ev.target.value, 10);
      if (isNaN(ct)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        color_temp: ct
      });
    }
  }, {
    key: "wvSliderChanged",
    value: function wvSliderChanged(ev) {
      var wv = parseInt(ev.target.value, 10);
      if (isNaN(wv)) return;
      this.hass.callService("light", "turn_on", {
        entity_id: this.stateObj.entity_id,
        white_value: wv
      });
    }
  }, {
    key: "segmentClick",
    value: function segmentClick() {
      if (this.hueSegments === 24 && this.saturationSegments === 8) {
        this.setProperties({
          hueSegments: 0,
          saturationSegments: 0
        });
      } else {
        this.setProperties({
          hueSegments: 24,
          saturationSegments: 8
        });
      }
    }
  }, {
    key: "serviceChangeColor",
    value: function serviceChangeColor(hass, entityId, color) {
      hass.callService("light", "turn_on", {
        entity_id: entityId,
        hs_color: [color.h, color.s * 100]
      });
    }
    /**
     * Called when a new color has been picked.
     * should be throttled with the 'throttle=' attribute of the color picker
     */

  }, {
    key: "colorPicked",
    value: function colorPicked(ev) {
      this.serviceChangeColor(this.hass, this.stateObj.entity_id, ev.detail.hs);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        brightnessSliderValue: {
          type: Number,
          value: 0
        },
        ctSliderValue: {
          type: Number,
          value: 0
        },
        wvSliderValue: {
          type: Number,
          value: 0
        },
        hueSegments: {
          type: Number,
          value: 24
        },
        saturationSegments: {
          type: Number,
          value: 8
        },
        colorPickerColor: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoLight;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("more-info-light", MoreInfoLight);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-lock.js":
/*!**********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-lock.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-input {\n          display: inline-block;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[stateObj.attributes.code_format]]\">\n        <paper-input\n          label=\"[[localize('ui.card.lock.code')]]\"\n          value=\"{{enteredCode}}\"\n          pattern=\"[[stateObj.attributes.code_format]]\"\n          type=\"password\"\n        ></paper-input>\n        <mwc-button\n          on-click=\"callService\"\n          data-service=\"unlock\"\n          hidden$=\"[[!isLocked]]\"\n          >[[localize('ui.card.lock.unlock')]]</mwc-button\n        >\n        <mwc-button\n          on-click=\"callService\"\n          data-service=\"lock\"\n          hidden$=\"[[isLocked]]\"\n          >[[localize('ui.card.lock.lock')]]</mwc-button\n        >\n      </template>\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"code_format\"\n      ></ha-attributes>\n    "]);

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

var MoreInfoLock =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoLock, _LocalizeMixin);

  function MoreInfoLock() {
    _classCallCheck(this, MoreInfoLock);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoLock).apply(this, arguments));
  }

  _createClass(MoreInfoLock, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal) {
      if (newVal) {
        this.isLocked = newVal.state === "locked";
      }
    }
  }, {
    key: "callService",
    value: function callService(ev) {
      var service = ev.target.getAttribute("data-service");
      var data = {
        entity_id: this.stateObj.entity_id,
        code: this.enteredCode
      };
      this.hass.callService("lock", service, data);
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
        hass: Object,
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        enteredCode: {
          type: String,
          value: ""
        },
        isLocked: Boolean
      };
    }
  }]);

  return MoreInfoLock;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]));

customElements.define("more-info-lock", MoreInfoLock);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-media_player.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-media_player.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../util/hass-media-player-model */ "./src/util/hass-media-player-model.js");
/* harmony import */ var _common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../common/entity/attribute_class_names */ "./src/common/entity/attribute_class_names.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        .media-state {\n          text-transform: capitalize;\n        }\n\n        paper-icon-button[highlight] {\n          color: var(--accent-color);\n        }\n\n        .volume {\n          margin-bottom: 8px;\n\n          max-height: 0px;\n          overflow: hidden;\n          transition: max-height 0.5s ease-in;\n        }\n\n        .has-volume_level .volume {\n          max-height: 40px;\n        }\n\n        iron-icon.source-input {\n          padding: 7px;\n          margin-top: 15px;\n        }\n\n        ha-paper-dropdown-menu.source-input {\n          margin-left: 10px;\n        }\n\n        [hidden] {\n          display: none !important;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"layout horizontal\">\n          <div class=\"flex\">\n            <paper-icon-button\n              icon=\"hass:power\"\n              highlight$=\"[[playerObj.isOff]]\"\n              on-click=\"handleTogglePower\"\n              hidden$=\"[[computeHidePowerButton(playerObj)]]\"\n            ></paper-icon-button>\n          </div>\n          <div>\n            <template\n              is=\"dom-if\"\n              if=\"[[computeShowPlaybackControls(playerObj)]]\"\n            >\n              <paper-icon-button\n                icon=\"hass:skip-previous\"\n                on-click=\"handlePrevious\"\n                hidden$=\"[[!playerObj.supportsPreviousTrack]]\"\n              ></paper-icon-button>\n              <paper-icon-button\n                icon=\"[[computePlaybackControlIcon(playerObj)]]\"\n                on-click=\"handlePlaybackControl\"\n                hidden$=\"[[!computePlaybackControlIcon(playerObj)]]\"\n                highlight=\"\"\n              ></paper-icon-button>\n              <paper-icon-button\n                icon=\"hass:skip-next\"\n                on-click=\"handleNext\"\n                hidden$=\"[[!playerObj.supportsNextTrack]]\"\n              ></paper-icon-button>\n            </template>\n          </div>\n        </div>\n        <!-- VOLUME -->\n        <div\n          class=\"volume_buttons center horizontal layout\"\n          hidden$=\"[[computeHideVolumeButtons(playerObj)]]\"\n        >\n          <paper-icon-button\n            on-click=\"handleVolumeTap\"\n            icon=\"hass:volume-off\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"volumeDown\"\n            disabled$=\"[[playerObj.isMuted]]\"\n            on-mousedown=\"handleVolumeDown\"\n            on-touchstart=\"handleVolumeDown\"\n            on-touchend=\"handleVolumeTouchEnd\"\n            icon=\"hass:volume-medium\"\n          ></paper-icon-button>\n          <paper-icon-button\n            id=\"volumeUp\"\n            disabled$=\"[[playerObj.isMuted]]\"\n            on-mousedown=\"handleVolumeUp\"\n            on-touchstart=\"handleVolumeUp\"\n            on-touchend=\"handleVolumeTouchEnd\"\n            icon=\"hass:volume-high\"\n          ></paper-icon-button>\n        </div>\n        <div\n          class=\"volume center horizontal layout\"\n          hidden$=\"[[!playerObj.supportsVolumeSet]]\"\n        >\n          <paper-icon-button\n            on-click=\"handleVolumeTap\"\n            hidden$=\"[[playerObj.supportsVolumeButtons]]\"\n            icon=\"[[computeMuteVolumeIcon(playerObj)]]\"\n          ></paper-icon-button>\n          <ha-paper-slider\n            disabled$=\"[[playerObj.isMuted]]\"\n            min=\"0\"\n            max=\"100\"\n            value=\"[[playerObj.volumeSliderValue]]\"\n            on-change=\"volumeSliderChanged\"\n            class=\"flex\"\n            ignore-bar-touch=\"\"\n            dir=\"{{rtl}}\"\n          >\n          </ha-paper-slider>\n        </div>\n        <!-- SOURCE PICKER -->\n        <div\n          class=\"controls layout horizontal justified\"\n          hidden$=\"[[computeHideSelectSource(playerObj)]]\"\n        >\n          <iron-icon class=\"source-input\" icon=\"hass:login-variant\"></iron-icon>\n          <ha-paper-dropdown-menu\n            class=\"flex source-input\"\n            dynamic-align=\"\"\n            label-float=\"\"\n            label=\"[[localize('ui.card.media_player.source')]]\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              attr-for-selected=\"item-name\"\n              selected=\"[[playerObj.source]]\"\n              on-selected-changed=\"handleSourceChanged\"\n            >\n              <template is=\"dom-repeat\" items=\"[[playerObj.sourceList]]\">\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n        </div>\n        <!-- SOUND MODE PICKER -->\n        <template is=\"dom-if\" if=\"[[!computeHideSelectSoundMode(playerObj)]]\">\n          <div class=\"controls layout horizontal justified\">\n            <iron-icon class=\"source-input\" icon=\"hass:music-note\"></iron-icon>\n            <ha-paper-dropdown-menu\n              class=\"flex source-input\"\n              dynamic-align\n              label-float\n              label=\"[[localize('ui.card.media_player.sound_mode')]]\"\n            >\n              <paper-listbox\n                slot=\"dropdown-content\"\n                attr-for-selected=\"item-name\"\n                selected=\"[[playerObj.soundMode]]\"\n                on-selected-changed=\"handleSoundModeChanged\"\n              >\n                <template is=\"dom-repeat\" items=\"[[playerObj.soundModeList]]\">\n                  <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n                </template>\n              </paper-listbox>\n            </ha-paper-dropdown-menu>\n          </div>\n        </template>\n        <!-- TTS -->\n        <div\n          hidden$=\"[[computeHideTTS(ttsLoaded, playerObj)]]\"\n          class=\"layout horizontal end\"\n        >\n          <paper-input\n            id=\"ttsInput\"\n            label=\"[[localize('ui.card.media_player.text_to_speak')]]\"\n            class=\"flex\"\n            value=\"{{ttsMessage}}\"\n            on-keydown=\"ttsCheckForEnter\"\n          ></paper-input>\n          <paper-icon-button\n            icon=\"hass:send\"\n            on-click=\"sendTTS\"\n          ></paper-icon-button>\n        </div>\n      </div>\n    "]);

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
 * @appliesMixin EventsMixin
 */

var MoreInfoMediaPlayer =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoMediaPlayer, _LocalizeMixin);

  function MoreInfoMediaPlayer() {
    _classCallCheck(this, MoreInfoMediaPlayer);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoMediaPlayer).apply(this, arguments));
  }

  _createClass(MoreInfoMediaPlayer, [{
    key: "computePlayerObj",
    value: function computePlayerObj(hass, stateObj) {
      return new _util_hass_media_player_model__WEBPACK_IMPORTED_MODULE_9__["default"](hass, stateObj);
    }
  }, {
    key: "playerObjChanged",
    value: function playerObjChanged(newVal, oldVal) {
      var _this = this;

      if (oldVal) {
        setTimeout(function () {
          _this.fire("iron-resize");
        }, 500);
      }
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      return Object(_common_entity_attribute_class_names__WEBPACK_IMPORTED_MODULE_10__["default"])(stateObj, ["volume_level"]);
    }
  }, {
    key: "computeMuteVolumeIcon",
    value: function computeMuteVolumeIcon(playerObj) {
      return playerObj.isMuted ? "hass:volume-off" : "hass:volume-high";
    }
  }, {
    key: "computeHideVolumeButtons",
    value: function computeHideVolumeButtons(playerObj) {
      return !playerObj.supportsVolumeButtons || playerObj.isOff;
    }
  }, {
    key: "computeShowPlaybackControls",
    value: function computeShowPlaybackControls(playerObj) {
      return !playerObj.isOff && playerObj.hasMediaControl;
    }
  }, {
    key: "computePlaybackControlIcon",
    value: function computePlaybackControlIcon(playerObj) {
      if (playerObj.isPlaying) {
        return playerObj.supportsPause ? "hass:pause" : "hass:stop";
      }

      if (playerObj.hasMediaControl || playerObj.isOff || playerObj.isIdle) {
        if (playerObj.hasMediaControl && playerObj.supportsPause && !playerObj.isPaused) {
          return "hass:play-pause";
        }

        return playerObj.supportsPlay ? "hass:play" : null;
      }

      return "";
    }
  }, {
    key: "computeHidePowerButton",
    value: function computeHidePowerButton(playerObj) {
      return playerObj.isOff ? !playerObj.supportsTurnOn : !playerObj.supportsTurnOff;
    }
  }, {
    key: "computeHideSelectSource",
    value: function computeHideSelectSource(playerObj) {
      return playerObj.isOff || !playerObj.supportsSelectSource || !playerObj.sourceList;
    }
  }, {
    key: "computeHideSelectSoundMode",
    value: function computeHideSelectSoundMode(playerObj) {
      return playerObj.isOff || !playerObj.supportsSelectSoundMode || !playerObj.soundModeList;
    }
  }, {
    key: "computeHideTTS",
    value: function computeHideTTS(ttsLoaded, playerObj) {
      return !ttsLoaded || !playerObj.supportsPlayMedia;
    }
  }, {
    key: "computeTTSLoaded",
    value: function computeTTSLoaded(hass) {
      return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_11__["default"])(hass, "tts");
    }
  }, {
    key: "handleTogglePower",
    value: function handleTogglePower() {
      this.playerObj.togglePower();
    }
  }, {
    key: "handlePrevious",
    value: function handlePrevious() {
      this.playerObj.previousTrack();
    }
  }, {
    key: "handlePlaybackControl",
    value: function handlePlaybackControl() {
      this.playerObj.mediaPlayPause();
    }
  }, {
    key: "handleNext",
    value: function handleNext() {
      this.playerObj.nextTrack();
    }
  }, {
    key: "handleSourceChanged",
    value: function handleSourceChanged(ev) {
      if (!this.playerObj) return;
      var oldVal = this.playerObj.source;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.playerObj.selectSource(newVal);
    }
  }, {
    key: "handleSoundModeChanged",
    value: function handleSoundModeChanged(ev) {
      if (!this.playerObj) return;
      var oldVal = this.playerObj.soundMode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.playerObj.selectSoundMode(newVal);
    }
  }, {
    key: "handleVolumeTap",
    value: function handleVolumeTap() {
      if (!this.playerObj.supportsVolumeMute) {
        return;
      }

      this.playerObj.volumeMute(!this.playerObj.isMuted);
    }
  }, {
    key: "handleVolumeTouchEnd",
    value: function handleVolumeTouchEnd(ev) {
      /* when touch ends, we must prevent this from
       * becoming a mousedown, up, click by emulation */
      ev.preventDefault();
    }
  }, {
    key: "handleVolumeUp",
    value: function handleVolumeUp() {
      var obj = this.$.volumeUp;
      this.handleVolumeWorker("volume_up", obj, true);
    }
  }, {
    key: "handleVolumeDown",
    value: function handleVolumeDown() {
      var obj = this.$.volumeDown;
      this.handleVolumeWorker("volume_down", obj, true);
    }
  }, {
    key: "handleVolumeWorker",
    value: function handleVolumeWorker(service, obj, force) {
      var _this2 = this;

      if (force || obj !== undefined && obj.pointerDown) {
        this.playerObj.callService(service);
        setTimeout(function () {
          return _this2.handleVolumeWorker(service, obj, false);
        }, 500);
      }
    }
  }, {
    key: "volumeSliderChanged",
    value: function volumeSliderChanged(ev) {
      var volPercentage = parseFloat(ev.target.value);
      var volume = volPercentage > 0 ? volPercentage / 100 : 0;
      this.playerObj.setVolume(volume);
    }
  }, {
    key: "ttsCheckForEnter",
    value: function ttsCheckForEnter(ev) {
      if (ev.keyCode === 13) this.sendTTS();
    }
  }, {
    key: "sendTTS",
    value: function sendTTS() {
      var services = this.hass.services.tts;
      var serviceKeys = Object.keys(services).sort();
      var service;
      var i;

      for (i = 0; i < serviceKeys.length; i++) {
        if (serviceKeys[i].indexOf("_say") !== -1) {
          service = serviceKeys[i];
          break;
        }
      }

      if (!service) {
        return;
      }

      this.hass.callService("tts", service, {
        entity_id: this.stateObj.entity_id,
        message: this.ttsMessage
      });
      this.ttsMessage = "";
      this.$.ttsInput.focus();
    }
  }, {
    key: "_computeRTLDirection",
    value: function _computeRTLDirection(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_14__["computeRTLDirection"])(hass);
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
        hass: Object,
        stateObj: Object,
        playerObj: {
          type: Object,
          computed: "computePlayerObj(hass, stateObj)",
          observer: "playerObjChanged"
        },
        ttsLoaded: {
          type: Boolean,
          computed: "computeTTSLoaded(hass)"
        },
        ttsMessage: {
          type: String,
          value: ""
        },
        rtl: {
          type: String,
          computed: "_computeRTLDirection(hass)"
        }
      };
    }
  }]);

  return MoreInfoMediaPlayer;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_13__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_12__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"])));

customElements.define("more-info-media_player", MoreInfoMediaPlayer);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-script.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-script.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n\n      <div class=\"layout vertical\">\n        <div class=\"data-entry layout justified horizontal\">\n          <div class=\"key\">\n            [[localize('ui.dialogs.more_info_control.script.last_action')]]\n          </div>\n          <div class=\"value\">[[stateObj.attributes.last_action]]</div>\n        </div>\n      </div>\n    "]);

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






var MoreInfoScript =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoScript, _LocalizeMixin);

  function MoreInfoScript() {
    _classCallCheck(this, MoreInfoScript);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoScript).apply(this, arguments));
  }

  _createClass(MoreInfoScript, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoScript;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-script", MoreInfoScript);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-sun.js":
/*!*********************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-sun.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_relative_time__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/ha-relative-time */ "./src/components/ha-relative-time.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n\n      <template\n        is=\"dom-repeat\"\n        items=\"[[computeOrder(risingDate, settingDate)]]\"\n      >\n        <div class=\"data-entry layout justified horizontal\">\n          <div class=\"key\">\n            <span>[[itemCaption(item)]]</span>\n            <ha-relative-time\n              hass=\"[[hass]]\"\n              datetime-obj=\"[[itemDate(item)]]\"\n            ></ha-relative-time>\n          </div>\n          <div class=\"value\">[[itemValue(item)]]</div>\n        </div>\n      </template>\n      <div class=\"data-entry layout justified horizontal\">\n        <div class=\"key\">\n          [[localize('ui.dialogs.more_info_control.sun.elevation')]]\n        </div>\n        <div class=\"value\">[[stateObj.attributes.elevation]]</div>\n      </div>\n    "]);

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








var MoreInfoSun =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoSun, _LocalizeMixin);

  function MoreInfoSun() {
    _classCallCheck(this, MoreInfoSun);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoSun).apply(this, arguments));
  }

  _createClass(MoreInfoSun, [{
    key: "computeRising",
    value: function computeRising(stateObj) {
      return new Date(stateObj.attributes.next_rising);
    }
  }, {
    key: "computeSetting",
    value: function computeSetting(stateObj) {
      return new Date(stateObj.attributes.next_setting);
    }
  }, {
    key: "computeOrder",
    value: function computeOrder(risingDate, settingDate) {
      return risingDate > settingDate ? ["set", "ris"] : ["ris", "set"];
    }
  }, {
    key: "itemCaption",
    value: function itemCaption(type) {
      if (type === "ris") {
        return this.localize("ui.dialogs.more_info_control.sun.rising");
      }

      return this.localize("ui.dialogs.more_info_control.sun.setting");
    }
  }, {
    key: "itemDate",
    value: function itemDate(type) {
      return type === "ris" ? this.risingDate : this.settingDate;
    }
  }, {
    key: "itemValue",
    value: function itemValue(type) {
      return Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_5__["default"])(this.itemDate(type), this.hass.language);
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
        stateObj: Object,
        risingDate: {
          type: Object,
          computed: "computeRising(stateObj)"
        },
        settingDate: {
          type: Object,
          computed: "computeSetting(stateObj)"
        }
      };
    }
  }]);

  return MoreInfoSun;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-sun", MoreInfoSun);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-updater.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-updater.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .link {\n          color: #03a9f4;\n        }\n      </style>\n\n      <div>\n        <a\n          class=\"link\"\n          href=\"https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/docs/installation/updating/\"\n          target=\"_blank\"\n          >[[localize('ui.dialogs.more_info_control.updater.title')]]</a\n        >\n      </div>\n    "]);

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





var MoreInfoUpdater =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoUpdater, _LocalizeMixin);

  function MoreInfoUpdater() {
    _classCallCheck(this, MoreInfoUpdater);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoUpdater).apply(this, arguments));
  }

  _createClass(MoreInfoUpdater, [{
    key: "computeReleaseNotes",
    value: function computeReleaseNotes(stateObj) {
      return stateObj.attributes.release_notes || "https://www.home-assistant.io/docs/installation/updating/";
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
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoUpdater;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_2__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("more-info-updater", MoreInfoUpdater);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-vacuum.js":
/*!************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-vacuum.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_attributes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-attributes */ "./src/components/ha-attributes.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-alignment\"></style>\n      <style>\n        :host {\n          @apply --paper-font-body1;\n          line-height: 1.5;\n        }\n\n        .status-subtitle {\n          color: var(--secondary-text-color);\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n      </style>\n\n      <div class=\"horizontal justified layout\">\n        <div hidden$=\"[[!supportsStatus(stateObj)]]\">\n          <span class=\"status-subtitle\">Status: </span\n          ><span><strong>[[stateObj.attributes.status]]</strong></span>\n        </div>\n        <div hidden$=\"[[!supportsBattery(stateObj)]]\">\n          <span\n            ><iron-icon icon=\"[[stateObj.attributes.battery_icon]]\"></iron-icon>\n            [[stateObj.attributes.battery_level]] %</span\n          >\n        </div>\n      </div>\n      <div hidden$=\"[[!supportsCommandBar(stateObj)]]\">\n        <p></p>\n        <div class=\"status-subtitle\">Vacuum cleaner commands:</div>\n        <div class=\"horizontal justified layout\">\n          <template is=\"dom-if\" if=\"[[supportsStart(stateObj)]]\">\n            <div>\n              <paper-icon-button\n                icon=\"hass:play\"\n                on-click=\"onStart\"\n                title=\"Start\"\n              ></paper-icon-button>\n            </div>\n            <div hidden$=\"[[!supportsPause(stateObj)]]\">\n              <paper-icon-button\n                icon=\"hass:pause\"\n                on-click=\"onPause\"\n                title=\"Pause\"\n              ></paper-icon-button>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!supportsStart(stateObj)]]\">\n            <div hidden$=\"[[!supportsPause(stateObj)]]\">\n              <paper-icon-button\n                icon=\"hass:play-pause\"\n                on-click=\"onPlayPause\"\n                title=\"Pause\"\n              ></paper-icon-button>\n            </div>\n          </template>\n\n          <div hidden$=\"[[!supportsStop(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:stop\"\n              on-click=\"onStop\"\n              title=\"Stop\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsCleanSpot(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:broom\"\n              on-click=\"onCleanSpot\"\n              title=\"Clean spot\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsLocate(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:map-marker\"\n              on-click=\"onLocate\"\n              title=\"Locate\"\n            ></paper-icon-button>\n          </div>\n          <div hidden$=\"[[!supportsReturnHome(stateObj)]]\">\n            <paper-icon-button\n              icon=\"hass:home-map-marker\"\n              on-click=\"onReturnHome\"\n              title=\"Return home\"\n            ></paper-icon-button>\n          </div>\n        </div>\n      </div>\n\n      <div hidden$=\"[[!supportsFanSpeed(stateObj)]]\">\n        <div class=\"horizontal justified layout\">\n          <ha-paper-dropdown-menu\n            label-float=\"\"\n            dynamic-align=\"\"\n            label=\"Fan speed\"\n          >\n            <paper-listbox\n              slot=\"dropdown-content\"\n              selected=\"[[stateObj.attributes.fan_speed]]\"\n              on-selected-changed=\"fanSpeedChanged\"\n              attr-for-selected=\"item-name\"\n            >\n              <template\n                is=\"dom-repeat\"\n                items=\"[[stateObj.attributes.fan_speed_list]]\"\n              >\n                <paper-item item-name$=\"[[item]]\">[[item]]</paper-item>\n              </template>\n            </paper-listbox>\n          </ha-paper-dropdown-menu>\n          <div\n            style=\"justify-content: center; align-self: center; padding-top: 1.3em\"\n          >\n            <span\n              ><iron-icon icon=\"hass:fan\"></iron-icon>\n              [[stateObj.attributes.fan_speed]]</span\n            >\n          </div>\n        </div>\n        <p></p>\n      </div>\n      <ha-attributes\n        state-obj=\"[[stateObj]]\"\n        extra-filters=\"fan_speed,fan_speed_list,status,battery_level,battery_icon\"\n      ></ha-attributes>\n    "]);

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












var MoreInfoVacuum =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(MoreInfoVacuum, _PolymerElement);

  function MoreInfoVacuum() {
    _classCallCheck(this, MoreInfoVacuum);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoVacuum).apply(this, arguments));
  }

  _createClass(MoreInfoVacuum, [{
    key: "supportsPause",
    value: function supportsPause(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4);
    }
  }, {
    key: "supportsStop",
    value: function supportsStop(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8);
    }
  }, {
    key: "supportsReturnHome",
    value: function supportsReturnHome(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16);
    }
  }, {
    key: "supportsFanSpeed",
    value: function supportsFanSpeed(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 32);
    }
  }, {
    key: "supportsBattery",
    value: function supportsBattery(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 64);
    }
  }, {
    key: "supportsStatus",
    value: function supportsStatus(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 128);
    }
  }, {
    key: "supportsLocate",
    value: function supportsLocate(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512);
    }
  }, {
    key: "supportsCleanSpot",
    value: function supportsCleanSpot(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024);
    }
  }, {
    key: "supportsStart",
    value: function supportsStart(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
    }
  }, {
    key: "supportsCommandBar",
    value: function supportsCommandBar(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 4) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 16) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 512) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 1024) | Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_9__["supportsFeature"])(stateObj, 8192);
    }
  }, {
    key: "fanSpeedChanged",
    value: function fanSpeedChanged(ev) {
      var oldVal = this.stateObj.attributes.fan_speed;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.hass.callService("vacuum", "set_fan_speed", {
        entity_id: this.stateObj.entity_id,
        fan_speed: newVal
      });
    }
  }, {
    key: "onStop",
    value: function onStop() {
      this.hass.callService("vacuum", "stop", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onPlayPause",
    value: function onPlayPause() {
      this.hass.callService("vacuum", "start_pause", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onPause",
    value: function onPause() {
      this.hass.callService("vacuum", "pause", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onStart",
    value: function onStart() {
      this.hass.callService("vacuum", "start", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onLocate",
    value: function onLocate() {
      this.hass.callService("vacuum", "locate", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onCleanSpot",
    value: function onCleanSpot() {
      this.hass.callService("vacuum", "clean_spot", {
        entity_id: this.stateObj.entity_id
      });
    }
  }, {
    key: "onReturnHome",
    value: function onReturnHome() {
      this.hass.callService("vacuum", "return_to_base", {
        entity_id: this.stateObj.entity_id
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
        hass: {
          type: Object
        },
        inDialog: {
          type: Boolean,
          value: false
        },
        stateObj: {
          type: Object
        }
      };
    }
  }]);

  return MoreInfoVacuum;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_6__["PolymerElement"]);

customElements.define("more-info-vacuum", MoreInfoVacuum);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-water_heater.js":
/*!******************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-water_heater.js ***!
  \******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_water_heater_control__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-water_heater-control */ "./src/components/ha-water_heater-control.js");
/* harmony import */ var _components_ha_paper_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../common/entity/feature_class_names */ "./src/common/entity/feature_class_names.ts");
/* harmony import */ var _common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../common/entity/supports-feature */ "./src/common/entity/supports-feature.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        :host {\n          color: var(--primary-text-color);\n        }\n\n        .container-away_mode,\n        .container-temperature,\n        .container-operation_list,\n\n        .has-away_mode .container-away_mode,\n        .has-target_temperature .container-temperature,\n        .has-operation_mode .container-operation_list,\n\n        .container-operation_list iron-icon,\n\n        ha-paper-dropdown-menu {\n          width: 100%;\n        }\n\n        paper-item {\n          cursor: pointer;\n        }\n\n        ha-paper-slider {\n          width: 100%;\n        }\n\n        ha-water_heater-control.range-control-left,\n        ha-water_heater-control.range-control-right {\n          float: left;\n          width: 46%;\n        }\n        ha-water_heater-control.range-control-left {\n          margin-right: 4%;\n        }\n        ha-water_heater-control.range-control-right {\n          margin-left: 4%;\n        }\n\n        .single-row {\n          padding: 8px 0;\n        }\n        }\n      </style>\n\n      <div class$=\"[[computeClassNames(stateObj)]]\">\n        <div class=\"container-temperature\">\n          <div class$=\"[[stateObj.attributes.operation_mode]]\">\n            <div hidden$=\"[[!supportsTemperatureControls(stateObj)]]\">\n              [[localize('ui.card.water_heater.target_temperature')]]\n            </div>\n            <template is=\"dom-if\" if=\"[[supportsTemperature(stateObj)]]\">\n              <ha-water_heater-control\n                value=\"[[stateObj.attributes.temperature]]\"\n                units=\"[[hass.config.unit_system.temperature]]\"\n                step=\"[[computeTemperatureStepSize(hass, stateObj)]]\"\n                min=\"[[stateObj.attributes.min_temp]]\"\n                max=\"[[stateObj.attributes.max_temp]]\"\n                on-change=\"targetTemperatureChanged\"\n              >\n              </ha-water_heater-control>\n            </template>\n          </div>\n        </div>\n\n        <template is=\"dom-if\" if=\"[[supportsOperationMode(stateObj)]]\">\n          <div class=\"container-operation_list\">\n            <div class=\"controls\">\n              <ha-paper-dropdown-menu\n                label-float=\"\"\n                dynamic-align=\"\"\n                label=\"[[localize('ui.card.water_heater.operation')]]\"\n              >\n                <paper-listbox\n                  slot=\"dropdown-content\"\n                  selected=\"[[stateObj.attributes.operation_mode]]\"\n                  attr-for-selected=\"item-name\"\n                  on-selected-changed=\"handleOperationmodeChanged\"\n                >\n                  <template\n                    is=\"dom-repeat\"\n                    items=\"[[stateObj.attributes.operation_list]]\"\n                  >\n                    <paper-item item-name$=\"[[item]]\"\n                      >[[_localizeOperationMode(localize, item)]]</paper-item\n                    >\n                  </template>\n                </paper-listbox>\n              </ha-paper-dropdown-menu>\n            </div>\n          </div>\n        </template>\n\n        <template is=\"dom-if\" if=\"[[supportsAwayMode(stateObj)]]\">\n          <div class=\"container-away_mode\">\n            <div class=\"center horizontal layout single-row\">\n              <div class=\"flex\">\n                [[localize('ui.card.water_heater.away_mode')]]\n              </div>\n              <paper-toggle-button\n                checked=\"[[awayToggleChecked]]\"\n                on-change=\"awayToggleChanged\"\n              >\n              </paper-toggle-button>\n            </div>\n          </div>\n        </template>\n      </div>\n    "]);

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
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var MoreInfoWaterHeater =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoWaterHeater, _LocalizeMixin);

  function MoreInfoWaterHeater() {
    _classCallCheck(this, MoreInfoWaterHeater);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoWaterHeater).apply(this, arguments));
  }

  _createClass(MoreInfoWaterHeater, [{
    key: "stateObjChanged",
    value: function stateObjChanged(newVal, oldVal) {
      var _this = this;

      if (newVal) {
        this.setProperties({
          awayToggleChecked: newVal.attributes.away_mode === "on"
        });
      }

      if (oldVal) {
        this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_5__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_4__["timeOut"].after(500), function () {
          _this.fire("iron-resize");
        });
      }
    }
  }, {
    key: "computeTemperatureStepSize",
    value: function computeTemperatureStepSize(hass, stateObj) {
      if (stateObj.attributes.target_temp_step) {
        return stateObj.attributes.target_temp_step;
      }

      if (hass.config.unit_system.temperature.indexOf("F") !== -1) {
        return 1;
      }

      return 0.5;
    }
  }, {
    key: "supportsTemperatureControls",
    value: function supportsTemperatureControls(stateObj) {
      return this.supportsTemperature(stateObj);
    }
  }, {
    key: "supportsTemperature",
    value: function supportsTemperature(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__["supportsFeature"])(stateObj, 1) && typeof stateObj.attributes.temperature === "number";
    }
  }, {
    key: "supportsOperationMode",
    value: function supportsOperationMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__["supportsFeature"])(stateObj, 2);
    }
  }, {
    key: "supportsAwayMode",
    value: function supportsAwayMode(stateObj) {
      return Object(_common_entity_supports_feature__WEBPACK_IMPORTED_MODULE_12__["supportsFeature"])(stateObj, 4);
    }
  }, {
    key: "computeClassNames",
    value: function computeClassNames(stateObj) {
      var _featureClassNames = {
        1: "has-target_temperature",
        2: "has-operation_mode",
        4: "has-away_mode"
      };
      var classes = [Object(_common_entity_feature_class_names__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj, _featureClassNames)];
      classes.push("more-info-water_heater");
      return classes.join(" ");
    }
  }, {
    key: "targetTemperatureChanged",
    value: function targetTemperatureChanged(ev) {
      var temperature = ev.target.value;
      if (temperature === this.stateObj.attributes.temperature) return;
      this.callServiceHelper("set_temperature", {
        temperature: temperature
      });
    }
  }, {
    key: "awayToggleChanged",
    value: function awayToggleChanged(ev) {
      var oldVal = this.stateObj.attributes.away_mode === "on";
      var newVal = ev.target.checked;
      if (oldVal === newVal) return;
      this.callServiceHelper("set_away_mode", {
        away_mode: newVal
      });
    }
  }, {
    key: "handleOperationmodeChanged",
    value: function handleOperationmodeChanged(ev) {
      var oldVal = this.stateObj.attributes.operation_mode;
      var newVal = ev.detail.value;
      if (!newVal || oldVal === newVal) return;
      this.callServiceHelper("set_operation_mode", {
        operation_mode: newVal
      });
    }
  }, {
    key: "callServiceHelper",
    value: function callServiceHelper(service, data) {
      var _this2 = this;

      // We call stateChanged after a successful call to re-sync the inputs
      // with the state. It will be out of sync if our service call did not
      // result in the entity to be turned on. Since the state is not changing,
      // the resync is not called automatic.

      /* eslint-disable no-param-reassign */
      data.entity_id = this.stateObj.entity_id;
      /* eslint-enable no-param-reassign */

      this.hass.callService("water_heater", service, data).then(function () {
        _this2.stateObjChanged(_this2.stateObj);
      });
    }
  }, {
    key: "_localizeOperationMode",
    value: function _localizeOperationMode(localize, mode) {
      return localize("state.water_heater.".concat(mode)) || mode;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object
        },
        stateObj: {
          type: Object,
          observer: "stateObjChanged"
        },
        awayToggleChecked: Boolean
      };
    }
  }]);

  return MoreInfoWaterHeater;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_14__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_13__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])));

customElements.define("more-info-water_heater", MoreInfoWaterHeater);

/***/ }),

/***/ "./src/dialogs/more-info/controls/more-info-weather.js":
/*!*************************************************************!*\
  !*** ./src/dialogs/more-info/controls/more-info-weather.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        iron-icon {\n          color: var(--paper-item-icon-color);\n        }\n        .section {\n          margin: 16px 0 8px 0;\n          font-size: 1.2em;\n        }\n\n        .flex {\n          display: flex;\n          height: 32px;\n          align-items: center;\n        }\n\n        .main {\n          flex: 1;\n          margin-left: 24px;\n        }\n\n        .temp,\n        .templow {\n          min-width: 48px;\n          text-align: right;\n        }\n\n        .templow {\n          margin: 0 16px;\n          color: var(--secondary-text-color);\n        }\n\n        .attribution {\n          color: var(--secondary-text-color);\n          text-align: center;\n        }\n      </style>\n\n      <div class=\"flex\">\n        <iron-icon icon=\"hass:thermometer\"></iron-icon>\n        <div class=\"main\">\n          [[localize('ui.card.weather.attributes.temperature')]]\n        </div>\n        <div>\n          [[stateObj.attributes.temperature]] [[getUnit('temperature')]]\n        </div>\n      </div>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.pressure)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:gauge\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.air_pressure')]]\n          </div>\n          <div>\n            [[stateObj.attributes.pressure]] [[getUnit('air_pressure')]]\n          </div>\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.humidity)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:water-percent\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.humidity')]]\n          </div>\n          <div>[[stateObj.attributes.humidity]] %</div>\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.wind_speed)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:weather-windy\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.wind_speed')]]\n          </div>\n          <div>\n            [[getWind(stateObj.attributes.wind_speed,\n            stateObj.attributes.wind_bearing, localize)]]\n          </div>\n        </div>\n      </template>\n      <template is=\"dom-if\" if=\"[[_showValue(stateObj.attributes.visibility)]]\">\n        <div class=\"flex\">\n          <iron-icon icon=\"hass:eye\"></iron-icon>\n          <div class=\"main\">\n            [[localize('ui.card.weather.attributes.visibility')]]\n          </div>\n          <div>[[stateObj.attributes.visibility]] [[getUnit('length')]]</div>\n        </div>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[stateObj.attributes.forecast]]\">\n        <div class=\"section\">[[localize('ui.card.weather.forecast')]]:</div>\n        <template is=\"dom-repeat\" items=\"[[stateObj.attributes.forecast]]\">\n          <div class=\"flex\">\n            <template is=\"dom-if\" if=\"[[_showValue(item.condition)]]\">\n              <iron-icon icon=\"[[getWeatherIcon(item.condition)]]\"></iron-icon>\n            </template>\n            <template is=\"dom-if\" if=\"[[!_showValue(item.templow)]]\">\n              <div class=\"main\">[[computeDateTime(item.datetime)]]</div>\n            </template>\n            <template is=\"dom-if\" if=\"[[_showValue(item.templow)]]\">\n              <div class=\"main\">[[computeDate(item.datetime)]]</div>\n              <div class=\"templow\">\n                [[item.templow]] [[getUnit('temperature')]]\n              </div>\n            </template>\n            <div class=\"temp\">\n              [[item.temperature]] [[getUnit('temperature')]]\n            </div>\n          </div>\n        </template>\n      </template>\n\n      <template is=\"dom-if\" if=\"stateObj.attributes.attribution\">\n        <div class=\"attribution\">[[stateObj.attributes.attribution]]</div>\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





/*
 * @appliesMixin LocalizeMixin
 */

var MoreInfoWeather =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoWeather, _LocalizeMixin);

  _createClass(MoreInfoWeather, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  function MoreInfoWeather() {
    var _this;

    _classCallCheck(this, MoreInfoWeather);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoWeather).call(this));
    _this.cardinalDirections = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW", "N"];
    _this.weatherIcons = {
      "clear-night": "hass:weather-night",
      cloudy: "hass:weather-cloudy",
      fog: "hass:weather-fog",
      hail: "hass:weather-hail",
      lightning: "hass:weather-lightning",
      "lightning-rainy": "hass:weather-lightning-rainy",
      partlycloudy: "hass:weather-partlycloudy",
      pouring: "hass:weather-pouring",
      rainy: "hass:weather-rainy",
      snowy: "hass:weather-snowy",
      "snowy-rainy": "hass:weather-snowy-rainy",
      sunny: "hass:weather-sunny",
      windy: "hass:weather-windy",
      "windy-variant": "hass:weather-windy-variant"
    };
    return _this;
  }

  _createClass(MoreInfoWeather, [{
    key: "computeDate",
    value: function computeDate(data) {
      var date = new Date(data);
      return date.toLocaleDateString(this.hass.language, {
        weekday: "long",
        month: "short",
        day: "numeric"
      });
    }
  }, {
    key: "computeDateTime",
    value: function computeDateTime(data) {
      var date = new Date(data);
      return date.toLocaleDateString(this.hass.language, {
        weekday: "long",
        hour: "numeric"
      });
    }
  }, {
    key: "getUnit",
    value: function getUnit(measure) {
      var lengthUnit = this.hass.config.unit_system.length || "";

      switch (measure) {
        case "air_pressure":
          return lengthUnit === "km" ? "hPa" : "inHg";

        case "length":
          return lengthUnit;

        case "precipitation":
          return lengthUnit === "km" ? "mm" : "in";

        default:
          return this.hass.config.unit_system[measure] || "";
      }
    }
  }, {
    key: "windBearingToText",
    value: function windBearingToText(degree) {
      var degreenum = parseInt(degree);

      if (isFinite(degreenum)) {
        return this.cardinalDirections[((degreenum + 11.25) / 22.5 | 0) % 16];
      }

      return degree;
    }
  }, {
    key: "getWind",
    value: function getWind(speed, bearing, localize) {
      if (bearing != null) {
        var cardinalDirection = this.windBearingToText(bearing);
        return "".concat(speed, " ").concat(this.getUnit("length"), "/h (").concat(localize("ui.card.weather.cardinal_direction.".concat(cardinalDirection.toLowerCase())) || cardinalDirection, ")");
      }

      return "".concat(speed, " ").concat(this.getUnit("length"), "/h");
    }
  }, {
    key: "getWeatherIcon",
    value: function getWeatherIcon(condition) {
      return this.weatherIcons[condition];
    }
  }, {
    key: "_showValue",
    value: function _showValue(item) {
      return typeof item !== "undefined" && item !== null;
    }
  }]);

  return MoreInfoWeather;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_3__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("more-info-weather", MoreInfoWeather);

/***/ }),

/***/ "./src/dialogs/more-info/more-info-controls.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-controls.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_state_history_charts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/state-history-charts */ "./src/components/state-history-charts.js");
/* harmony import */ var _data_ha_state_history_data__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../data/ha-state-history-data */ "./src/data/ha-state-history-data.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _controls_more_info_content__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./controls/more-info-content */ "./src/dialogs/more-info/controls/more-info-content.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _common_const__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../common/const */ "./src/common/const.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/util/compute_rtl */ "./src/common/util/compute_rtl.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog\">\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        state-card-content {\n          display: block;\n          padding: 16px;\n        }\n\n        state-history-charts {\n          max-width: 100%;\n          margin-bottom: 16px;\n        }\n\n        @media all and (min-width: 451px) and (min-height: 501px) {\n          .main-title {\n            pointer-events: auto;\n            cursor: default;\n          }\n        }\n\n        paper-dialog-scrollable {\n          padding-bottom: 16px;\n        }\n\n        :host([domain=\"camera\"]) paper-dialog-scrollable {\n          margin: 0 -24px -21px;\n        }\n\n        :host([rtl]) app-toolbar {\n          direction: rtl;\n          text-align: right;\n        }\n      </style>\n\n      <app-toolbar>\n        <paper-icon-button\n          icon=\"hass:close\"\n          dialog-dismiss=\"\"\n        ></paper-icon-button>\n        <div class=\"main-title\" main-title=\"\" on-click=\"enlarge\">\n          [[_computeStateName(stateObj)]]\n        </div>\n        <template is=\"dom-if\" if=\"[[canConfigure]]\">\n          <paper-icon-button\n            icon=\"hass:settings\"\n            on-click=\"_gotoSettings\"\n          ></paper-icon-button>\n        </template>\n      </app-toolbar>\n\n      <template is=\"dom-if\" if=\"[[_computeShowStateInfo(stateObj)]]\" restamp=\"\">\n        <state-card-content\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n          in-dialog=\"\"\n        ></state-card-content>\n      </template>\n      <paper-dialog-scrollable dialog-element=\"[[dialogElement]]\">\n        <template\n          is=\"dom-if\"\n          if=\"[[_computeShowHistoryComponent(hass, stateObj)]]\"\n          restamp=\"\"\n        >\n          <ha-state-history-data\n            hass=\"[[hass]]\"\n            filter-type=\"recent-entity\"\n            entity-id=\"[[stateObj.entity_id]]\"\n            data=\"{{_stateHistory}}\"\n            is-loading=\"{{_stateHistoryLoading}}\"\n            cache-config=\"[[_cacheConfig]]\"\n          ></ha-state-history-data>\n          <state-history-charts\n            hass=\"[[hass]]\"\n            history-data=\"[[_stateHistory]]\"\n            is-loading-data=\"[[_stateHistoryLoading]]\"\n            up-to-now\n          ></state-history-charts>\n        </template>\n        <more-info-content\n          state-obj=\"[[stateObj]]\"\n          hass=\"[[hass]]\"\n        ></more-info-content>\n      </paper-dialog-scrollable>\n    "]);

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

















var DOMAINS_NO_INFO = ["camera", "configurator", "history_graph"];
/*
 * @appliesMixin EventsMixin
 */

var MoreInfoControls =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(MoreInfoControls, _EventsMixin);

  function MoreInfoControls() {
    _classCallCheck(this, MoreInfoControls);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoControls).apply(this, arguments));
  }

  _createClass(MoreInfoControls, [{
    key: "enlarge",
    value: function enlarge() {
      this.large = !this.large;
    }
  }, {
    key: "_computeShowStateInfo",
    value: function _computeShowStateInfo(stateObj) {
      return !stateObj || !DOMAINS_NO_INFO.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj));
    }
  }, {
    key: "_computeShowHistoryComponent",
    value: function _computeShowHistoryComponent(hass, stateObj) {
      return hass && stateObj && Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_12__["default"])(hass, "history") && !_common_const__WEBPACK_IMPORTED_MODULE_13__["DOMAINS_MORE_INFO_NO_HISTORY"].includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj));
    }
  }, {
    key: "_computeDomain",
    value: function _computeDomain(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_11__["default"])(stateObj) : "";
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return stateObj ? Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_10__["default"])(stateObj) : "";
    }
  }, {
    key: "_stateObjChanged",
    value: function _stateObjChanged(newVal) {
      if (!newVal) {
        return;
      }

      if (this._cacheConfig.cacheKey !== "more_info.".concat(newVal.entity_id)) {
        this._cacheConfig = Object.assign({}, this._cacheConfig, {
          cacheKey: "more_info.".concat(newVal.entity_id)
        });
      }
    }
  }, {
    key: "_gotoSettings",
    value: function _gotoSettings() {
      this.fire("more-info-page", {
        page: "settings"
      });
    }
  }, {
    key: "_computeRTL",
    value: function _computeRTL(hass) {
      return Object(_common_util_compute_rtl__WEBPACK_IMPORTED_MODULE_15__["computeRTL"])(hass);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: {
          type: Object,
          observer: "_stateObjChanged"
        },
        dialogElement: Object,
        canConfigure: Boolean,
        domain: {
          type: String,
          reflectToAttribute: true,
          computed: "_computeDomain(stateObj)"
        },
        _stateHistory: Object,
        _stateHistoryLoading: Boolean,
        large: {
          type: Boolean,
          value: false,
          notify: true
        },
        _cacheConfig: {
          type: Object,
          value: {
            refresh: 60,
            cacheKey: null,
            hoursToShow: 24
          }
        },
        rtl: {
          type: Boolean,
          reflectToAttribute: true,
          computed: "_computeRTL(hass)"
        }
      };
    }
  }]);

  return MoreInfoControls;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_14__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]));

customElements.define("more-info-controls", MoreInfoControls);

/***/ }),

/***/ "./src/dialogs/more-info/more-info-settings.js":
/*!*****************************************************!*\
  !*** ./src/dialogs/more-info/more-info-settings.js ***!
  \*****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/entity/compute_domain */ "./src/common/entity/compute_domain.ts");
/* harmony import */ var _data_entity_registry__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../data/entity_registry */ "./src/data/entity_registry.ts");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        app-toolbar {\n          color: var(--more-info-header-color);\n          background-color: var(--more-info-header-background);\n\n          /* to fit save button */\n          padding-right: 0;\n        }\n\n        app-toolbar [main-title] {\n          @apply --ha-more-info-app-toolbar-title;\n        }\n\n        app-toolbar mwc-button {\n          font-size: 0.8em;\n          margin: 0;\n        }\n\n        .form {\n          padding: 0 24px 24px;\n        }\n      </style>\n\n      <app-toolbar>\n        <ha-paper-icon-button-arrow-prev\n          on-click=\"_backTapped\"\n        ></ha-paper-icon-button-arrow-prev>\n        <div main-title=\"\">[[_computeStateName(stateObj)]]</div>\n        <mwc-button on-click=\"_save\" disabled=\"[[_computeInvalid(_entityId)]]\"\n          >[[localize('ui.dialogs.more_info_settings.save')]]</mwc-button\n        >\n      </app-toolbar>\n\n      <div class=\"form\">\n        <paper-input\n          value=\"{{_name}}\"\n          label=\"[[localize('ui.dialogs.more_info_settings.name')]]\"\n        ></paper-input>\n        <paper-input\n          value=\"{{_entityId}}\"\n          label=\"[[localize('ui.dialogs.more_info_settings.entity_id')]]\"\n          error-message=\"Domain needs to stay the same\"\n          invalid=\"[[_computeInvalid(_entityId)]]\"\n        ></paper-input>\n      </div>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }













/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

var MoreInfoSettings =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(MoreInfoSettings, _LocalizeMixin);

  function MoreInfoSettings() {
    _classCallCheck(this, MoreInfoSettings);

    return _possibleConstructorReturn(this, _getPrototypeOf(MoreInfoSettings).apply(this, arguments));
  }

  _createClass(MoreInfoSettings, [{
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      if (!stateObj) return "";
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj);
    }
  }, {
    key: "_computeInvalid",
    value: function _computeInvalid(entityId) {
      return Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["default"])(this.stateObj.entity_id) !== Object(_common_entity_compute_domain__WEBPACK_IMPORTED_MODULE_9__["default"])(entityId);
    }
  }, {
    key: "_registryInfoChanged",
    value: function _registryInfoChanged(newVal) {
      if (newVal) {
        this.setProperties({
          _name: newVal.name,
          _entityId: newVal.entity_id
        });
      } else {
        this.setProperties({
          _name: "",
          _entityId: ""
        });
      }
    }
  }, {
    key: "_backTapped",
    value: function _backTapped() {
      this.fire("more-info-page", {
        page: null
      });
    }
  }, {
    key: "_save",
    value: function () {
      var _save2 = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        var info;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.prev = 0;
                _context.next = 3;
                return Object(_data_entity_registry__WEBPACK_IMPORTED_MODULE_10__["updateEntityRegistryEntry"])(this.hass, this.stateObj.entity_id, {
                  name: this._name,
                  new_entity_id: this._entityId
                });

              case 3:
                info = _context.sent;
                this.registryInfo = info; // Keep the more info dialog open at the new entity.

                if (this.stateObj.entity_id !== this._entityId) {
                  this.fire("hass-more-info", {
                    entityId: this._entityId
                  });
                }

                _context.next = 11;
                break;

              case 8:
                _context.prev = 8;
                _context.t0 = _context["catch"](0);
                alert("save failed: ".concat(_context.t0.message));

              case 11:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[0, 8]]);
      }));

      function _save() {
        return _save2.apply(this, arguments);
      }

      return _save;
    }()
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        registryInfo: {
          type: Object,
          observer: "_registryInfoChanged",
          notify: true
        },
        _name: String,
        _entityId: String
      };
    }
  }]);

  return MoreInfoSettings;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_7__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_6__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"])));

customElements.define("more-info-settings", MoreInfoSettings);

/***/ }),

/***/ "./src/mixins/dialog-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/dialog-mixin.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./events-mixin */ "./src/mixins/events-mixin.js");
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
 * @polymerMixin
 * @appliesMixin EventsMixin
 * @appliesMixin PaperDialogBehavior
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_mixinBehaviors) {
      _inherits(_class, _mixinBehaviors);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, null, [{
        key: "properties",
        get: function get() {
          return {
            withBackdrop: {
              type: Boolean,
              value: true
            }
          };
        }
      }]);

      return _class;
    }(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_2__["mixinBehaviors"])([_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"], _polymer_paper_dialog_behavior_paper_dialog_behavior__WEBPACK_IMPORTED_MODULE_1__["PaperDialogBehavior"]], superClass))
  );
}));

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

/***/ "./src/util/hass-attributes-util.js":
/*!******************************************!*\
  !*** ./src/util/hass-attributes-util.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var hassAttributeUtil = {};
hassAttributeUtil.DOMAIN_DEVICE_CLASS = {
  binary_sensor: ["battery", "cold", "connectivity", "door", "garage_door", "gas", "heat", "light", "lock", "moisture", "motion", "moving", "occupancy", "opening", "plug", "power", "presence", "problem", "safety", "smoke", "sound", "vibration", "window"],
  cover: ["awning", "blind", "curtain", "damper", "door", "garage", "shade", "shutter", "window"],
  sensor: ["battery", "humidity", "illuminance", "temperature", "pressure", "power", "signal_strength"],
  "switch": ["switch", "outlet"]
};
hassAttributeUtil.UNKNOWN_TYPE = "json";
hassAttributeUtil.ADD_TYPE = "key-value";
hassAttributeUtil.TYPE_TO_TAG = {
  string: "ha-customize-string",
  json: "ha-customize-string",
  icon: "ha-customize-icon",
  "boolean": "ha-customize-boolean",
  array: "ha-customize-array",
  "key-value": "ha-customize-key-value"
}; // Attributes here serve dual purpose:
// 1) Any key of this object won't be shown in more-info window.
// 2) Any key which has value other than undefined will appear in customization
//    config according to its value.

hassAttributeUtil.LOGIC_STATE_ATTRIBUTES = hassAttributeUtil.LOGIC_STATE_ATTRIBUTES || {
  entity_picture: undefined,
  friendly_name: {
    type: "string",
    description: "Name"
  },
  icon: {
    type: "icon"
  },
  emulated_hue: {
    type: "boolean",
    domains: ["emulated_hue"]
  },
  emulated_hue_name: {
    type: "string",
    domains: ["emulated_hue"]
  },
  haaska_hidden: undefined,
  haaska_name: undefined,
  homebridge_hidden: {
    type: "boolean"
  },
  homebridge_name: {
    type: "string"
  },
  supported_features: undefined,
  attribution: undefined,
  custom_ui_more_info: {
    type: "string"
  },
  custom_ui_state_card: {
    type: "string"
  },
  device_class: {
    type: "array",
    options: hassAttributeUtil.DOMAIN_DEVICE_CLASS,
    description: "Device class",
    domains: ["binary_sensor", "cover", "sensor", "switch"]
  },
  hidden: {
    type: "boolean",
    description: "Hide from UI"
  },
  assumed_state: {
    type: "boolean",
    domains: ["switch", "light", "cover", "climate", "fan", "group", "water_heater"]
  },
  initial_state: {
    type: "string",
    domains: ["automation"]
  },
  unit_of_measurement: {
    type: "string"
  }
};
/* harmony default export */ __webpack_exports__["default"] = (hassAttributeUtil);

/***/ })

}]);
//# sourceMappingURL=more-info-dialog.chunk.js.map