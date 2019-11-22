(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~52aa5c35"],{

/***/ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js ***!
  \***************************************************************************/
/*! exports provided: DisableUpgradeMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisableUpgradeMixin", function() { return DisableUpgradeMixin; });
/* harmony import */ var _element_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./element-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/element-mixin.js");
/* harmony import */ var _utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/mixin.js */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
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

/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/


var DISABLED_ATTR = 'disable-upgrade';
/**
 * Element class mixin that allows the element to boot up in a non-enabled
 * state when the `disable-upgrade` attribute is present. This mixin is
 * designed to be used with element classes like PolymerElement that perform
 * initial startup work when they are first connected. When the
 * `disable-upgrade` attribute is removed, if the element is connected, it
 * boots up and "enables" as it otherwise would; if it is not connected, the
 * element boots up when it is next connected.
 *
 * Using `disable-upgrade` with PolymerElement prevents any data propagation
 * to the element, any element DOM from stamping, or any work done in
 * connected/disconnctedCallback from occuring, but it does not prevent work
 * done in the element constructor.
 *
 * Note, this mixin must be applied on top of any element class that
 * itself implements a `connectedCallback` so that it can control the work
 * done in `connectedCallback`. For example,
 *
 *     MyClass = DisableUpgradeMixin(class extends BaseClass {...});
 *
 * @mixinFunction
 * @polymer
 * @appliesMixin ElementMixin
 */

var DisableUpgradeMixin = Object(_utils_mixin_js__WEBPACK_IMPORTED_MODULE_1__["dedupingMixin"])(function (base) {
  /**
   * @constructor
   * @extends {base}
   * @implements {Polymer_ElementMixin}
   * @private
   */
  var superClass = Object(_element_mixin_js__WEBPACK_IMPORTED_MODULE_0__["ElementMixin"])(base);
  /**
   * @polymer
   * @mixinClass
   * @implements {Polymer_DisableUpgradeMixin}
   */

  var DisableUpgradeClass =
  /*#__PURE__*/
  function (_superClass) {
    _inherits(DisableUpgradeClass, _superClass);

    function DisableUpgradeClass() {
      _classCallCheck(this, DisableUpgradeClass);

      return _possibleConstructorReturn(this, _getPrototypeOf(DisableUpgradeClass).apply(this, arguments));
    }

    _createClass(DisableUpgradeClass, [{
      key: "attributeChangedCallback",

      /** @override */
      value: function attributeChangedCallback(name, old, value, namespace) {
        if (name == DISABLED_ATTR) {
          if (!this.__dataEnabled && value == null && this.isConnected) {
            _get(_getPrototypeOf(DisableUpgradeClass.prototype), "connectedCallback", this).call(this);
          }
        } else {
          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "attributeChangedCallback", this).call(this, name, old, value, namespace);
        }
      }
      /*
        NOTE: cannot gate on attribute because this is called before
        attributes are delivered. Therefore, we stub this out and
        call `super._initializeProperties()` manually.
      */

      /** @override */

    }, {
      key: "_initializeProperties",
      value: function _initializeProperties() {} // prevent user code in connected from running

      /** @override */

    }, {
      key: "connectedCallback",
      value: function connectedCallback() {
        if (this.__dataEnabled || !this.hasAttribute(DISABLED_ATTR)) {
          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "connectedCallback", this).call(this);
        }
      } // prevent element from turning on properties

      /** @override */

    }, {
      key: "_enableProperties",
      value: function _enableProperties() {
        if (!this.hasAttribute(DISABLED_ATTR)) {
          if (!this.__dataEnabled) {
            _get(_getPrototypeOf(DisableUpgradeClass.prototype), "_initializeProperties", this).call(this);
          }

          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "_enableProperties", this).call(this);
        }
      } // only go if "enabled"

      /** @override */

    }, {
      key: "disconnectedCallback",
      value: function disconnectedCallback() {
        if (this.__dataEnabled) {
          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "disconnectedCallback", this).call(this);
        }
      }
    }], [{
      key: "observedAttributes",

      /** @override */
      get: function get() {
        return _get(_getPrototypeOf(DisableUpgradeClass), "observedAttributes", this).concat(DISABLED_ATTR);
      }
    }]);

    return DisableUpgradeClass;
  }(superClass);

  return DisableUpgradeClass;
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/color.js":
/*!**************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/color.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"material-color-light\">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n        --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n        --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n        /* Primary colors */\n        --material-primary-color: var(--primary-color, #6200ee);\n        --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n        --material-primary-text-color: var(--material-primary-color);\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #b00020);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--light-theme-background-color, #fff);\n        --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n        --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n        /* Divider colors */\n        --material-divider-color: rgba(0, 0, 0, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: initial;\n        --_material-text-field-input-line-opacity: initial;\n        --_material-text-field-input-line-hover-opacity: initial;\n        --_material-text-field-focused-label-opacity: initial;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: initial;\n        --_material-button-outline-color: initial;\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: initial;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: initial;\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      [theme~=\"dark\"] {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n\n      a {\n        color: inherit;\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"material-color-dark\">\n  <template>\n    <style>\n      :host,\n      #host-fix {\n        /* Text colors */\n        --material-body-text-color: var(--dark-theme-text-color, rgba(255, 255, 255, 1));\n        --material-secondary-text-color: var(--dark-theme-secondary-color, rgba(255, 255, 255, 0.7));\n        --material-disabled-text-color: var(--dark-theme-disabled-color, rgba(255, 255, 255, 0.5));\n\n        /* Primary colors */\n        --material-primary-color: var(--light-primary-color, #7e3ff2);\n        --material-primary-text-color: #b794f6;\n\n        /* Error colors */\n        --material-error-color: var(--error-color, #de2839);\n        --material-error-text-color: var(--material-error-color);\n\n        /* Background colors */\n        --material-background-color: var(--dark-theme-background-color, #303030);\n        --material-secondary-background-color: var(--dark-theme-secondary-background-color, #3b3b3b);\n        --material-disabled-color: rgba(255, 255, 255, 0.3);\n\n        /* Divider colors */\n        --material-divider-color: rgba(255, 255, 255, 0.12);\n\n        /* Undocumented internal properties (prefixed with three dashes) */\n\n        /* Text field tweaks */\n        --_material-text-field-input-line-background-color: #fff;\n        --_material-text-field-input-line-opacity: 0.7;\n        --_material-text-field-input-line-hover-opacity: 1;\n        --_material-text-field-focused-label-opacity: 1;\n\n        /* Button tweaks */\n        --_material-button-raised-background-color: rgba(255, 255, 255, 0.08);\n        --_material-button-outline-color: rgba(255, 255, 255, 0.2);\n\n        /* Grid tweaks */\n        --_material-grid-row-hover-background-color: rgba(255, 255, 255, 0.08);\n        --_material-grid-row-selected-overlay-opacity: 0.16;\n\n        /* Split layout tweaks */\n        --_material-split-layout-splitter-background-color: rgba(255, 255, 255, 0.8);\n\n        background-color: var(--material-background-color);\n        color: var(--material-body-text-color);\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    :root {\n      /* Text colors */\n      --material-body-text-color: var(--light-theme-text-color, rgba(0, 0, 0, 0.87));\n      --material-secondary-text-color: var(--light-theme-secondary-color, rgba(0, 0, 0, 0.54));\n      --material-disabled-text-color: var(--light-theme-disabled-color, rgba(0, 0, 0, 0.38));\n\n      /* Primary colors */\n      --material-primary-color: var(--primary-color, #6200ee);\n      --material-primary-contrast-color: var(--dark-theme-base-color, #fff);\n      --material-primary-text-color: var(--material-primary-color);\n\n      /* Error colors */\n      --material-error-color: var(--error-color, #b00020);\n      --material-error-text-color: var(--material-error-color);\n\n      /* Background colors */\n      --material-background-color: var(--light-theme-background-color, #fff);\n      --material-secondary-background-color: var(--light-theme-secondary-background-color, #f5f5f5);\n      --material-disabled-color: rgba(0, 0, 0, 0.26);\n\n      /* Divider colors */\n      --material-divider-color: rgba(0, 0, 0, 0.12);\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/font-icons.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    @font-face {\n      font-family: 'material-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAjAAAsAAAAADZQAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAARAAAAFZSk09oY21hcAAAAYgAAACNAAACNOuCXH5nbHlmAAACGAAABDwAAAXsdK8UGGhlYWQAAAZUAAAAMAAAADYX9T2IaGhlYQAABoQAAAAgAAAAJBGyCLpobXR4AAAGpAAAABQAAABAjXoAAGxvY2EAAAa4AAAAIgAAACIKMgjUbWF4cAAABtwAAAAfAAAAIAEeAFRuYW1lAAAG/AAAATQAAAJe3l764XBvc3QAAAgwAAAAjwAAAMqJEjDWeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYOS4wTiBgZWBgYGfbQIDA2MAhGZpYChlymZgYGJgZWbACgLSXFMYHF4xvuJnv/CvgOEG+wXG6UBhRpAcAMyUDJN4nO2R2Q0DIQxEHwt7HzSSGlJQvlJkqqGJjYdJGbH0PPJgELKBEcjBIyiQ3iQUr3BT9zNb9wvP3lPkt3rfkZNy1KXnIXpLvDgxs7DGvZ2Dk4saxxP/OHr+/KqqCZo+08EgzUa7acVoym002lubDNLZIF0M0tUg3Yz22XaD9DD6XTsN0ssgrYb6BZEQJiUAAAB4nH1UbUhbVxg+77259yZMJbfko7DhbnJtrjYuWfNxsx9qBFu32ljHWqWO6VD6MW1G4uYPsfSDdQOHXOuPrtYfKytKJziYEJkQZLQ/BqHCpsUfghZX1jHBjBUWWqfes51zE1dloyfJyXvOed5znvO+z3sQINKEeb4WmRECBURZBAGEeU1fyOgPhliJlTT9geneVpTxD23/jPbinSAGRYgADGuMP8P4CILgGd9W1HRPXyDeiEEIL5pvCnH0MnqVeMhh2e4iP9ldAnbRVgpBV6AGwmLIB6xLdAnzpzPb+zOn1fdU8uVr8/9/3eVr+fEMacZg1+LGBmfLczKHuNuIQ8gCggUU9lP8/hDjN01pcBluk8sQK4/jOa6P4kCxEOI8p+kTzCkNq6Z1YukTGswVcLUFHNnOCeyaBvexqjGnuD4Nh3GYWIVYxLkV9FJ+PwqluwpxcqK+QGJidIyfDLkm0hnW8wXiziL09xskPma0Hx1CEbKPW+CRwFudDuR0SBEVRVSr4kGKh3UrPlA81kgNRFTJWQpOh1UoAYFnZZoC07dz6RRejx0/HgN7Kg0j6RTYY01NMbyeSs+NXR9+WB2NVj8cvg71z+2eG0zxMVwjmAksO53G3elpnKVOYJtOw430NNhiTRsb//HDacPmbPoE/uEC0OsbMRtn12jGLQwzCznIsWu4CHJ77vgKkl50RzkcDMti0DQ1939M8izPUSG8mPJmWSZDEkSaieivy7IqzKMSdABVoTcROsDLEj1N3RehuQLebjOiGQxEFF52Kx7FEw5FLKCGQ0bEZbegqEGJkuUZMh0MOB1Oh93G/7b4GOdy63i0veruJSwMmlcGN1vLvQdHOs8kzndOFxW3xhoqK8HUiX9SvRV09mLy91+eQdGfWTjXHv1R/xJfktwGqL2x+yx8/McoWD6AjcFnZYPc153nE2c6Ryq85Sl4zdsQay0u1jNwKHmRzh70qtl3u85i7clXOAsfwVW+0tvQ2Ooy9ERqYZsvQfuQQu5biPW/gS4oyUOFpFIdOaiMeKIiN+1tdBygKyGKMU09XV3CMy0tcHRpFbKrS3C0pQXPLK0+HejtqTt8uK6nF6w71sA79XXlFRXldfXjOwZf0tGGJ5eX8WRbR0cbNC8vQ3Nbx1bpXkf8hFqstMfVMNCuGiO6AhFYyRTjVjYHmFm06y3ykQGhKxn1YN3JJkmwTCfkfOWEjMqhyQOXyP+auJaXcVU0WkUkPTYzdutR5XzFRLL3Sn8ifsfn9/vuxBO5RPcJ/D0zyzUn9mqfCE78pve7QKgAox6v+05SLKXF0M7SQbiVIW+enaEkyod+djTnMoIdNqINInkByStyzd3dNXorNXT18v3oFxf6j7xlHNHP2YygR6u74noXTuJFo8QeTw5+3vh2MDDTZz154spnN/PcjXx8kvyw7gh+hJMwDDlc9A+3XcsFeJxjYGRgYADi5PtWjvH8Nl8ZuDkTgCIM16srKhH0v0zO++wXgFwOBiaQKAA6hAuJeJxjYGRgYL/wr4CBgcuKgeH/f877DEARFCAAAIewBYJ4nGNgYGDgTCAOc1lhigEAvMIGAwAAAAAAGAAwAGIAdgCKAJ4AwAEkATIBcAHoAlACXgKsAvYAAHicY2BkYGAQYPBgYGEAASYg5gJCBob/YD4DABFeAXMAeJx9kL1uwjAUhU8gUJVIVaWqnRgsVepSEX5G1BkkRgb2EBwIcuLIMUi8QR+kT9CH6NgH6VP0xHiBAVtyvvvdc50oAB7xgwDNCvDgzma1cMfqzG3Ss+eQ/Oq5gwhjz136D889vGPhOcITDrwhCO9p+vj03GL+y3Ob/ttzSP713MEL/jx30Q/guYdV0Pcc4S0wRWKlyRM1yFNd1ku5PajkSl5WK2nqXJdiHI8uG3NZSkOzEeuTqI/bibWZyIwuxEyXViqlRWX0XqY23llbTYfDzPs41QUKJLCQMMhJCgM+U2iUqLGk3/JfKHbMzeSt3sr5mqapBf9/jNHNiTl96XrnzIZTa5x41jjyiya0FhnrjBnNuwRmbrZJK25NU7nenialj7FzUxWmGHJnV/nYvb34BzHZcLZ4nG2MQQ6CMBREO0ARtSjuvASHqu1XCD+0+YKE20tD3DmLmbxk8lSm9tzV/zTIkKOARokDKhxxwhkGNS64osFNXaxIWFoflnGx4s2Oc0xQOcs0eivadeQGs/VHwtgyPaf6B9K/ukk7pnTj4IbKS4jJp2lziaGVWt+/7YPJ5xsUke1aCnGwvpxjGqW+tN8xfgA=) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --material-icons-arrow-downward: \"\\ea01\";\n      --material-icons-arrow-upward: \"\\ea02\";\n      --material-icons-calendar: \"\\ea03\";\n      --material-icons-check: \"\\ea04\";\n      --material-icons-chevron-left: \"\\ea05\";\n      --material-icons-chevron-right: \"\\ea06\";\n      --material-icons-clear: \"\\ea07\";\n      --material-icons-clock: \"\\ea08\";\n      --material-icons-dropdown: \"\\ea09\";\n      --material-icons-error: \"\\ea0a\";\n      --material-icons-eye-disabled: \"\\ea0b\";\n      --material-icons-eye: \"\\ea0c\";\n      --material-icons-play: \"\\ea0d\";\n      --material-icons-reload: \"\\ea0e\";\n      --material-icons-upload: \"\\ea0f\";\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);
/* NOTICE: Generated with 'gulp icons' */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/font-roboto.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/font-roboto.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var font = 'https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,300,300italic,400italic,500,500italic,700,700italic';
var link = document.createElement('link');
link.rel = 'stylesheet';
link.type = 'text/css';
link.crossOrigin = 'anonymous';
link.href = font;
document.head.appendChild(link);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _shadow_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shadow.js */ "./node_modules/@vaadin/vaadin-material-styles/shadow.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"material-overlay\">\n  <template>\n    <style>\n      :host {\n        top: 16px;\n        right: 16px;\n        /* TODO (@jouni): remove unnecessary multiplication after https://github.com/vaadin/vaadin-overlay/issues/90 is fixed */\n        bottom: calc(1px * var(--vaadin-overlay-viewport-bottom) + 16px);\n        left: 16px;\n      }\n\n      [part=\"overlay\"] {\n        background-color: var(--material-background-color);\n        border-radius: 4px;\n        box-shadow: var(--material-shadow-elevation-4dp);\n        color: var(--material-body-text-color);\n        font-family: var(--material-font-family);\n        font-size: var(--material-body-font-size);\n        font-weight: 400;\n      }\n\n      [part=\"content\"] {\n        padding: 8px 0;\n      }\n\n      [part=\"backdrop\"] {\n        opacity: 0.2;\n        animation: 0.2s vaadin-overlay-backdrop-enter;\n        will-change: opacity;\n      }\n\n      @keyframes vaadin-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/shadow.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/shadow.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style is=\"custom-style\">\n    html {\n      /* from http://codepen.io/shyndman/pen/c5394ddf2e8b2a5c9185904b57421cdb */\n      --material-shadow-elevation-2dp: 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12), 0 3px 1px -2px rgba(0, 0, 0, 0.2);\n      --material-shadow-elevation-3dp: 0 3px 4px 0 rgba(0, 0, 0, 0.14), 0 1px 8px 0 rgba(0, 0, 0, 0.12), 0 3px 3px -2px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-4dp: 0 4px 5px 0 rgba(0, 0, 0, 0.14), 0 1px 10px 0 rgba(0, 0, 0, 0.12), 0 2px 4px -1px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-6dp: 0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12), 0 3px 5px -1px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-8dp: 0 8px 10px 1px rgba(0, 0, 0, 0.14), 0 3px 14px 2px rgba(0, 0, 0, 0.12), 0 5px 5px -3px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-12dp: 0 12px 16px 1px rgba(0, 0, 0, 0.14), 0 4px 22px 3px rgba(0, 0, 0, 0.12), 0 6px 7px -4px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-16dp: 0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.4);\n      --material-shadow-elevation-24dp: 0 24px 38px 3px rgba(0, 0, 0, 0.14), 0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.4);\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/typography.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/typography.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-material-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _font_roboto_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./font-roboto.js */ "./node_modules/@vaadin/vaadin-material-styles/font-roboto.js");
/* harmony import */ var _font_roboto_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_font_roboto_js__WEBPACK_IMPORTED_MODULE_4__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["<custom-style>\n  <style>\n    html {\n      /* Font family */\n      --material-font-family: 'Roboto', sans-serif;\n\n      /* Font sizes */\n      --material-h1-font-size: 6rem;\n      --material-h2-font-size: 3.75rem;\n      --material-h3-font-size: 3rem;\n      --material-h4-font-size: 2.125rem;\n      --material-h5-font-size: 1.5rem;\n      --material-h6-font-size: 1.25rem;\n      --material-body-font-size: 1rem;\n      --material-small-font-size: 0.875rem;\n      --material-button-font-size: 0.875rem;\n      --material-caption-font-size: 0.75rem;\n\n      /* Icon size */\n      --material-icon-font-size: 20px;\n    }\n  </style>\n</custom-style><dom-module id=\"material-typography\">\n  <template>\n    <style>\n      body {\n        font-family: var(--material-font-family);\n        font-size: var(--material-body-font-size);\n        line-height: 1.4;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: inherit;\n        line-height: 1.1;\n        margin-top: 1.5em;\n      }\n\n      h1 {\n        font-size: var(--material-h3-font-size);\n        font-weight: 300;\n        letter-spacing: -0.015em;\n        margin-bottom: 1em;\n        text-indent: -0.07em;\n      }\n\n      h2 {\n        font-size: var(--material-h4-font-size);\n        font-weight: 300;\n        letter-spacing: -0.01em;\n        margin-bottom: 0.75em;\n        text-indent: -0.07em;\n      }\n\n      h3 {\n        font-size: var(--material-h5-font-size);\n        font-weight: 400;\n        margin-bottom: 0.75em;\n        text-indent: -0.05em;\n      }\n\n      h4 {\n        font-size: var(--material-h6-font-size);\n        font-weight: 400;\n        letter-spacing: 0.01em;\n        margin-bottom: 0.75em;\n        text-indent: -0.05em;\n      }\n\n      h5 {\n        font-size: var(--material-body-font-size);\n        font-weight: 500;\n        margin-bottom: 0.5em;\n        text-indent: -0.025em;\n      }\n\n      h6 {\n        font-size: var(--material-small-font-size);\n        font-weight: 500;\n        letter-spacing: 0.01em;\n        margin-bottom: 0.25em;\n        text-indent: -0.025em;\n      }\n\n      a,\n      b,\n      strong {\n        font-weight: 500;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/version.js":
/*!****************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/version.js ***!
  \****************************************************************/
/*! exports provided: Material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Material", function() { return Material; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var Material =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Material, _HTMLElement);

  function Material() {
    _classCallCheck(this, Material);

    return _possibleConstructorReturn(this, _getPrototypeOf(Material).apply(this, arguments));
  }

  _createClass(Material, null, [{
    key: "version",
    get: function get() {
      return '1.2.3';
    }
  }]);

  return Material;
}(_wrapNativeSuper(HTMLElement));

customElements.define('vaadin-material-styles', Material);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js ***!
  \*****************************************************************************/
/*! exports provided: FocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FocusablesHelper", function() { return FocusablesHelper; });
var p = Element.prototype;
var matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
/**
 * `Polymer.IronFocusablesHelper` relies on some Polymer-specific legacy API,
 * especially the `root` property which does not exist for native shadow DOM.
 * That's why we have this helper here.
 * See https://github.com/PolymerElements/iron-overlay-behavior/issues/282
 */

var FocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the children,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function isFocusable(element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html
    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    } // Elements that can be focused even if they have [disabled] attribute.


    return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function isTabbable(element) {
    return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function _normalizedTabIndex(element) {
    if (this.isFocusable(element)) {
      var tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }

    return -1;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result` if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = this._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distribution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distribution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>


    var children;

    if (element.localName === 'slot') {
      children = element.assignedNodes({
        flatten: true
      });
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = (element.shadowRoot || element).children;
    }

    if (children) {
      for (var i = 0; i < children.length; i++) {
        // Ensure method is always invoked to collect tabbable children.
        needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
      }
    }

    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function _isVisible(element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    var style = element.style;

    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return style.visibility !== 'hidden' && style.display !== 'none';
    }

    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function _sortByTabIndex(tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    var len = tabbables.length;

    if (len < 2) {
      return tabbables;
    }

    var pivot = Math.ceil(len / 2);

    var left = this._sortByTabIndex(tabbables.slice(0, pivot));

    var right = this._sortByTabIndex(tabbables.slice(pivot));

    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function _mergeSortByTabIndex(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function _hasLowerTabOrder(a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    var ati = Math.max(a.tabIndex, 0);
    var bti = Math.max(b.tabIndex, 0);
    return ati === 0 || bti === 0 ? bti > ati : ati > bti;
  }
};


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay-position-mixin.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay-position-mixin.js ***!
  \**********************************************************************************/
/*! exports provided: PositionMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PositionMixin", function() { return PositionMixin; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */
var PositionMixin = function PositionMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(PositionMixin, _superClass);

      _createClass(PositionMixin, null, [{
        key: "properties",
        get: function get() {
          return {
            /**
             * The element next to which this overlay should be aligned.
             * The position of the overlay relative to the positionTarget can be adjusted
             * with properties `horizontalAlign`, `verticalAlign`, `noHorizontalOverlap`
             * and `noVerticalOverlap`.
             */
            positionTarget: {
              type: Object,
              value: null
            },

            /**
             * When `positionTarget` is set, this property defines whether to align the overlay's
             * left or right side to the target element by default.
             * Possible values are `start` and `end`.
             * RTL is taken into account when interpreting the value.
             * The overlay is automatically flipped to the opposite side when it doesn't fit into
             * the default side defined by this property.
             */
            horizontalAlign: {
              type: String,
              value: 'start'
            },

            /**
             * When `positionTarget` is set, this property defines whether to align the overlay's
             * top or bottom side to the target element by default.
             * Possible values are `top` and `bottom`.
             * The overlay is automatically flipped to the opposite side when it doesn't fit into
             * the default side defined by this property.
             */
            verticalAlign: {
              type: String,
              value: 'top'
            },

            /**
             * When `positionTarget` is set, this property defines whether the overlay should overlap
             * the target element in the x-axis, or be positioned right next to it.
             */
            noHorizontalOverlap: {
              type: Boolean,
              value: false
            },

            /**
             * When `positionTarget` is set, this property defines whether the overlay should overlap
             * the target element in the y-axis, or be positioned right above/below it.
             */
            noVerticalOverlap: {
              type: Boolean,
              value: false
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ["__positionSettingsChanged(positionTarget, horizontalAlign, verticalAlign,\n      noHorizontalOverlap, noVerticalOverlap)"];
        }
      }]);

      function PositionMixin() {
        var _this;

        _classCallCheck(this, PositionMixin);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(PositionMixin).call(this));

        var boundUpdatePosition = _this._updatePosition.bind(_assertThisInitialized(_this));

        _this.addEventListener('opened-changed', function (e) {
          var func = e.detail.value ? 'addEventListener' : 'removeEventListener';
          window[func]('scroll', boundUpdatePosition);
          window[func]('resize', boundUpdatePosition);

          if (e.detail.value) {
            _this._updatePosition();
          }
        });

        return _this;
      }

      _createClass(PositionMixin, [{
        key: "__positionSettingsChanged",
        value: function __positionSettingsChanged() {
          this._updatePosition();
        }
      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          var _this2 = this;

          if (!this.positionTarget) {
            return;
          }

          var computedStyle = getComputedStyle(this);

          if (!this.__margins) {
            this.__margins = {};
            ['top', 'bottom', 'left', 'right'].forEach(function (propName) {
              _this2.__margins[propName] = parseInt(computedStyle[propName], 10);
            });
          }

          var rtl = computedStyle.direction === 'rtl';
          var targetRect = this.positionTarget.getBoundingClientRect();

          var horizontalProps = this.__calculateHorizontalPosition(targetRect, rtl);

          var verticalProps = this.__calculateVerticalPosition(targetRect);

          var positionProps = Object.assign({}, horizontalProps, verticalProps);

          this.__doSetPosition(positionProps, rtl);
        }
      }, {
        key: "__calculateHorizontalPosition",
        value: function __calculateHorizontalPosition(targetRect, rtl) {
          var propNames = {
            start: 'left',
            end: 'right'
          }; // Using previous size to fix a case where window resize may cause the overlay to be squeezed
          // smaller than its current space before the fit-calculations.

          var contentWidth = Math.max(this.__oldContentWidth || 0, this.$.overlay.offsetWidth);
          this.__oldContentWidth = this.$.overlay.offsetWidth;
          var viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
          var defaultAlignLeft = !rtl && this.horizontalAlign === 'start' || rtl && this.horizontalAlign === 'end';
          var currentAlignLeft = !!this.style.left;
          return PositionMixin.__calculatePositionInOneDimension(targetRect, contentWidth, viewportWidth, this.__margins, defaultAlignLeft, currentAlignLeft, this.noHorizontalOverlap, propNames);
        }
      }, {
        key: "__calculateVerticalPosition",
        value: function __calculateVerticalPosition(targetRect) {
          var propNames = {
            start: 'top',
            end: 'bottom'
          }; // Using previous size to fix a case where window resize may cause the overlay to be squeezed
          // smaller than its current space before the fit-calculations.

          var contentHeight = Math.max(this.__oldContentHeight || 0, this.$.overlay.offsetHeight);
          this.__oldContentHeight = this.$.overlay.offsetHeight;
          var viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
          var defaultAlignTop = this.verticalAlign === 'top';
          var currentAlignTop = !!this.style.top;
          return PositionMixin.__calculatePositionInOneDimension(targetRect, contentHeight, viewportHeight, this.__margins, defaultAlignTop, currentAlignTop, this.noVerticalOverlap, propNames);
        }
        /**
         * Returns an object with CSS position properties to set,
         * e.g. { top: "100px", bottom: "" }
         */

      }, {
        key: "__doSetPosition",
        value: function __doSetPosition(cssProps, rtl) {
          Object.assign(this.style, cssProps);
          var alignStart = !rtl && cssProps.left || rtl && cssProps.right;
          this.style.alignItems = alignStart ? 'flex-start' : 'flex-end';
          this.style.justifyContent = cssProps.top ? 'flex-start' : 'flex-end';
        }
      }], [{
        key: "__calculatePositionInOneDimension",
        value: function __calculatePositionInOneDimension(targetRect, contentSize, viewportSize, margins, defaultAlignStart, currentAlignStart, noOverlap, propNames) {
          var spaceForStartAlignment = viewportSize - targetRect[noOverlap ? propNames.end : propNames.start] - margins[propNames.end];
          var spaceForEndAlignment = targetRect[noOverlap ? propNames.start : propNames.end] - margins[propNames.start];
          var spaceForDefaultAlignment = defaultAlignStart ? spaceForStartAlignment : spaceForEndAlignment;
          var spaceForOtherAlignment = defaultAlignStart ? spaceForEndAlignment : spaceForStartAlignment;
          var shouldGoToDefaultSide = spaceForDefaultAlignment > spaceForOtherAlignment || spaceForDefaultAlignment > contentSize;
          var shouldAlignStart = defaultAlignStart === shouldGoToDefaultSide;
          var cssPropNameToSet = shouldAlignStart ? propNames.start : propNames.end;
          var cssPropNameToClear = shouldAlignStart ? propNames.end : propNames.start;
          var cssPropValueToSet = (shouldAlignStart ? targetRect[noOverlap ? propNames.end : propNames.start] : viewportSize - targetRect[noOverlap ? propNames.start : propNames.end]) + 'px';
          var props = {};
          props[cssPropNameToSet] = cssPropValueToSet;
          props[cssPropNameToClear] = '';
          return props;
        }
      }]);

      return PositionMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js ***!
  \*******************************************************************/
/*! exports provided: OverlayElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayElement", function() { return OverlayElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-focusables-helper.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-focusables-helper.js");
/* harmony import */ var _vaadin_overlay_position_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-overlay-position-mixin.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay-position-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        z-index: 200;\n        position: fixed;\n\n        /*\n          Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part.\n        */\n\n        /*\n          Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport.\n        */\n        top: 0;\n        right: 0;\n        bottom: var(--vaadin-overlay-viewport-bottom);\n        left: 0;\n\n        /* Use flexbox alignment for the overlay part. */\n        display: flex;\n        flex-direction: column; /* makes dropdowns sizing easier */\n        /* Align to center by default. */\n        align-items: center;\n        justify-content: center;\n\n        /* Allow centering when max-width/max-height applies. */\n        margin: auto;\n\n        /* The host is not clickable, only the overlay part is. */\n        pointer-events: none;\n\n        /* Remove tap highlight on touch devices. */\n        -webkit-tap-highlight-color: transparent;\n\n        /* CSS API for host */\n        --vaadin-overlay-viewport-bottom: 0;\n      }\n\n      :host([hidden]),\n      :host(:not([opened]):not([closing])) {\n        display: none !important;\n      }\n\n      [part=\"overlay\"] {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n        pointer-events: auto;\n\n        /* Prevent overflowing the host in MSIE 11 */\n        max-width: 100%;\n        box-sizing: border-box;\n\n        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n      }\n\n      [part=\"backdrop\"] {\n        z-index: -1;\n        content: \"\";\n        background: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: auto;\n      }\n    </style>\n\n    <div id=\"backdrop\" part=\"backdrop\" hidden$=\"{{!withBackdrop}}\"></div>\n    <div part=\"overlay\" id=\"overlay\" tabindex=\"0\">\n      <div part=\"content\" id=\"content\">\n        <slot></slot>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        z-index: 200;\n        position: fixed;\n\n        /*\n          Despite of what the names say, <vaadin-overlay> is just a container\n          for position/sizing/alignment. The actual overlay is the overlay part.\n        */\n\n        /*\n          Default position constraints: the entire viewport. Note: themes can\n          override this to introduce gaps between the overlay and the viewport.\n        */\n        top: 0;\n        right: 0;\n        bottom: var(--vaadin-overlay-viewport-bottom);\n        left: 0;\n\n        /* Use flexbox alignment for the overlay part. */\n        display: flex;\n        flex-direction: column; /* makes dropdowns sizing easier */\n        /* Align to center by default. */\n        align-items: center;\n        justify-content: center;\n\n        /* Allow centering when max-width/max-height applies. */\n        margin: auto;\n\n        /* The host is not clickable, only the overlay part is. */\n        pointer-events: none;\n\n        /* Remove tap highlight on touch devices. */\n        -webkit-tap-highlight-color: transparent;\n\n        /* CSS API for host */\n        --vaadin-overlay-viewport-bottom: 0;\n      }\n\n      :host([hidden]),\n      :host(:not([opened]):not([closing])) {\n        display: none !important;\n      }\n\n      [part=\"overlay\"] {\n        -webkit-overflow-scrolling: touch;\n        overflow: auto;\n        pointer-events: auto;\n\n        /* Prevent overflowing the host in MSIE 11 */\n        max-width: 100%;\n        box-sizing: border-box;\n\n        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */\n      }\n\n      [part=\"backdrop\"] {\n        z-index: -1;\n        content: \"\";\n        background: rgba(0, 0, 0, 0.5);\n        position: fixed;\n        top: 0;\n        left: 0;\n        bottom: 0;\n        right: 0;\n        pointer-events: auto;\n      }\n    </style>\n\n    <div id=\"backdrop\" part=\"backdrop\" hidden\\$=\"{{!withBackdrop}}\"></div>\n    <div part=\"overlay\" id=\"overlay\" tabindex=\"0\">\n      <div part=\"content\" id=\"content\">\n        <slot></slot>\n      </div>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _wrapNativeSuper(Class) { var _cache = typeof Map === "function" ? new Map() : undefined; _wrapNativeSuper = function _wrapNativeSuper(Class) { if (Class === null || !_isNativeFunction(Class)) return Class; if (typeof Class !== "function") { throw new TypeError("Super expression must either be null or a function"); } if (typeof _cache !== "undefined") { if (_cache.has(Class)) return _cache.get(Class); _cache.set(Class, Wrapper); } function Wrapper() { return _construct(Class, arguments, _getPrototypeOf(this).constructor); } Wrapper.prototype = Object.create(Class.prototype, { constructor: { value: Wrapper, enumerable: false, writable: true, configurable: true } }); return _setPrototypeOf(Wrapper, Class); }; return _wrapNativeSuper(Class); }

function isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _construct(Parent, args, Class) { if (isNativeReflectConstruct()) { _construct = Reflect.construct; } else { _construct = function _construct(Parent, args, Class) { var a = [null]; a.push.apply(a, args); var Constructor = Function.bind.apply(Parent, a); var instance = new Constructor(); if (Class) _setPrototypeOf(instance, Class.prototype); return instance; }; } return _construct.apply(null, arguments); }

function _isNativeFunction(fn) { return Function.toString.call(fn).indexOf("[native code]") !== -1; }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








var overlayContentCounter = 0;
var overlayContentCache = {};

var createOverlayContent = function createOverlayContent(cssText) {
  var is = overlayContentCache[cssText] || processOverlayStyles(cssText);
  return document.createElement(is);
};

var processOverlayStyles = function processOverlayStyles(cssText) {
  overlayContentCounter++;
  var is = "vaadin-overlay-content-".concat(overlayContentCounter);
  var styledTemplate = document.createElement('template');
  var style = document.createElement('style');
  style.textContent = ':host { display: block; }' + cssText;
  styledTemplate.content.appendChild(style);

  if (window.ShadyCSS) {
    window.ShadyCSS.prepareTemplate(styledTemplate, is);
  } // NOTE(platosha): Have to use an awkward IIFE returning class here
  // to prevent this class from showing up in analysis.json & API docs.

  /** @private */


  var klass = function () {
    return (
      /*#__PURE__*/
      function (_HTMLElement) {
        _inherits(_class, _HTMLElement);

        _createClass(_class, null, [{
          key: "is",
          get: function get() {
            return is;
          }
        }]);

        function _class() {
          var _this;

          _classCallCheck(this, _class);

          _this = _possibleConstructorReturn(this, _getPrototypeOf(_class).call(this));

          if (!_this.shadowRoot) {
            _this.attachShadow({
              mode: 'open'
            });

            _this.shadowRoot.appendChild(document.importNode(styledTemplate.content, true));
          }

          return _this;
        }

        _createClass(_class, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            if (window.ShadyCSS) {
              window.ShadyCSS.styleElement(this);
            }
          }
        }]);

        return _class;
      }(_wrapNativeSuper(HTMLElement))
    );
  }();

  customElements.define(klass.is, klass);
  overlayContentCache[cssText] = is;
  return is;
};
/**
 *
 * `<vaadin-overlay>` is a Web Component for creating overlays. The content of the overlay
 * can be populated in two ways: imperatively by using renderer callback function and
 * declaratively by using Polymer's Templates.
 *
 * ### Rendering
 *
 * By default, the overlay uses the content provided by using the renderer callback function.
 *
 * The renderer function provides `root`, `owner`, `model` arguments when applicable.
 * Generate DOM content by using `model` object properties if needed, append it to the `root`
 * element and control the state of the host element by accessing `owner`. Before generating new
 * content, users are able to check if there is already content in `root` for reusing it.
 *
 * ```html
 * <vaadin-overlay id="overlay"></vaadin-overlay>
 * ```
 * ```js
 * const overlay = document.querySelector('#overlay');
 * overlay.renderer = function(root) {
 *  root.textContent = "Overlay content";
 * };
 * ```
 *
 * Renderer is called on the opening of the overlay and each time the related model is updated.
 * DOM generated during the renderer call can be reused
 * in the next renderer call and will be provided with the `root` argument.
 * On first call it will be empty.
 *
 * **NOTE:** when the renderer property is defined, the `<template>` content is not used.
 *
 * ### Templating
 *
 * Alternatively, the content can be provided with Polymer Template.
 * Overlay finds the first child template and uses that in case renderer callback function
 * is not provided. You can also set a custom template using the `template` property.
 *
 * After the content from the template is stamped, the `content` property
 * points to the content container.
 *
 * The overlay provides `forwardHostProp` when calling
 * `Polymer.Templatize.templatize` for the template, so that the bindings
 * from the parent scope propagate to the content.  You can also pass
 * custom `instanceProps` object using the `instanceProps` property.
 *
 * ```html
 * <vaadin-overlay>
 *   <template>Overlay content</template>
 * </vaadin-overlay>
 * ```
 *
 * **NOTE:** when using `instanceProps`: because of the Polymer limitation,
 * every template can only be templatized once, so it is important
 * to set `instanceProps` before the `template` is assigned to the overlay.
 *
 * ### Styling
 *
 * To style the overlay content, use styles in the parent scope:
 *
 * - If the overlay is used in a component, then the component styles
 *   apply the overlay content.
 * - If the overlay is used in the global DOM scope, then global styles
 *   apply to the overlay content.
 *
 * See examples for styling the overlay content in the live demos.
 *
 * The following Shadow DOM parts are available for styling the overlay component itself:
 *
 * Part name  | Description
 * -----------|---------------------------------------------------------|
 * `backdrop` | Backdrop of the overlay
 * `overlay`  | Container for position/sizing/alignment of the content
 * `content`  | Content of the overlay
 *
 * The following state attributes are available for styling:
 *
 * Attribute | Description | Part
 * ---|---|---
 * `opening` | Applied just after the overlay is attached to the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 * `closing` | Applied just before the overlay is detached from the DOM. You can apply a CSS @keyframe animation for this state. | `:host`
 *
 * The following custom CSS properties are available for styling:
 *
 * Custom CSS property | Description | Default value
 * ---|---|---
 * `--vaadin-overlay-viewport-bottom` | Bottom offset of the visible viewport area | `0` or detected offset
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.Overlay.PositionMixin
 * @demo demo/index.html
 */


var OverlayElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(OverlayElement, _ThemableMixin);

  _createClass(OverlayElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-overlay';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        opened: {
          type: Boolean,
          notify: true,
          observer: '_openedChanged',
          reflectToAttribute: true
        },

        /**
         * Owner element passed with renderer function
         */
        owner: Element,

        /**
         * Custom function for rendering the content of the overlay.
         * Receives three arguments:
         *
         * - `root` The root container DOM element. Append your content to it.
         * - `owner` The host element of the renderer function.
         * - `model` The object with the properties related with rendering.
         */
        renderer: Function,

        /**
         * The template of the overlay content.
         */
        template: {
          type: Object,
          notify: true
        },

        /**
         * Optional argument for `Polymer.Templatize.templatize`.
         */
        instanceProps: {
          type: Object
        },

        /**
         * References the content container after the template is stamped.
         */
        content: {
          type: Object,
          notify: true
        },
        withBackdrop: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * Object with properties that is passed to `renderer` function
         */
        model: Object,

        /**
         * When true the overlay won't disable the main content, showing
         * it doesn’t change the functionality of the user interface.
         */
        modeless: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          observer: '_modelessChanged'
        },

        /**
         * When set to true, the overlay is hidden. This also closes the overlay
         * immediately in case there is a closing animation in progress.
         */
        hidden: {
          type: Boolean,
          reflectToAttribute: true,
          observer: '_hiddenChanged'
        },

        /**
         * When true move focus to the first focusable element in the overlay,
         * or to the overlay if there are no focusable elements.
         */
        focusTrap: {
          type: Boolean,
          value: false
        },

        /**
         * Set to true to enable restoring of focus when overlay is closed.
         */
        restoreFocusOnClose: {
          type: Boolean,
          value: false
        },
        _mouseDownInside: {
          type: Boolean
        },
        _mouseUpInside: {
          type: Boolean
        },
        _instance: {
          type: Object
        },
        _originalContentPart: Object,
        _contentNodes: Array,
        _oldOwner: Element,
        _oldModel: Object,
        _oldTemplate: Object,
        _oldInstanceProps: Object,
        _oldRenderer: Object,
        _oldOpened: Boolean
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)'];
    }
  }]);

  function OverlayElement() {
    var _this2;

    _classCallCheck(this, OverlayElement);

    _this2 = _possibleConstructorReturn(this, _getPrototypeOf(OverlayElement).call(this));
    _this2._boundMouseDownListener = _this2._mouseDownListener.bind(_assertThisInitialized(_this2));
    _this2._boundMouseUpListener = _this2._mouseUpListener.bind(_assertThisInitialized(_this2));
    _this2._boundOutsideClickListener = _this2._outsideClickListener.bind(_assertThisInitialized(_this2));
    _this2._boundKeydownListener = _this2._keydownListener.bind(_assertThisInitialized(_this2));
    _this2._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__["FlattenedNodesObserver"](_assertThisInitialized(_this2), function (info) {
      _this2._setTemplateFromNodes(info.addedNodes);
    }); // Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.

    _this2._boundIronOverlayCanceledListener = _this2._ironOverlayCanceled.bind(_assertThisInitialized(_this2));

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      _this2._boundIosResizeListener = function () {
        return _this2._detectIosNavbar();
      };
    }

    return _this2;
  }

  _createClass(OverlayElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(OverlayElement.prototype), "ready", this).call(this);

      this._observer.flush(); // Need to add dummy click listeners to this and the backdrop or else
      // the document click event listener (_outsideClickListener) may never
      // get invoked on iOS Safari (reproducible in <vaadin-dialog>
      // and <vaadin-context-menu>).


      this.addEventListener('click', function () {});
      this.$.backdrop.addEventListener('click', function () {});
    }
  }, {
    key: "_detectIosNavbar",
    value: function _detectIosNavbar() {
      if (!this.opened) {
        return;
      }

      var innerHeight = window.innerHeight;
      var innerWidth = window.innerWidth;
      var landscape = innerWidth > innerHeight;
      var clientHeight = document.documentElement.clientHeight;

      if (landscape && clientHeight > innerHeight) {
        this.style.setProperty('--vaadin-overlay-viewport-bottom', clientHeight - innerHeight + 'px');
      } else {
        this.style.setProperty('--vaadin-overlay-viewport-bottom', '0');
      }
    }
  }, {
    key: "_setTemplateFromNodes",
    value: function _setTemplateFromNodes(nodes) {
      this.template = nodes.filter(function (node) {
        return node.localName && node.localName === 'template';
      })[0] || this.template;
    }
    /**
     * @event vaadin-overlay-close
     * fired before the `vaadin-overlay` will be closed. If canceled the closing of the overlay is canceled as well.
     */

  }, {
    key: "close",
    value: function close(sourceEvent) {
      var evt = new CustomEvent('vaadin-overlay-close', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: sourceEvent
        }
      });
      this.dispatchEvent(evt);

      if (!evt.defaultPrevented) {
        this.opened = false;
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(OverlayElement.prototype), "connectedCallback", this).call(this);

      if (this._boundIosResizeListener) {
        this._detectIosNavbar();

        window.addEventListener('resize', this._boundIosResizeListener);
      }
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(OverlayElement.prototype), "disconnectedCallback", this).call(this);

      this._boundIosResizeListener && window.removeEventListener('resize', this._boundIosResizeListener);
    }
  }, {
    key: "_ironOverlayCanceled",
    value: function _ironOverlayCanceled(event) {
      event.preventDefault();
    }
  }, {
    key: "_mouseDownListener",
    value: function _mouseDownListener(event) {
      this._mouseDownInside = event.composedPath().indexOf(this.$.overlay) >= 0;
    }
  }, {
    key: "_mouseUpListener",
    value: function _mouseUpListener(event) {
      this._mouseUpInside = event.composedPath().indexOf(this.$.overlay) >= 0;
    }
    /**
     * We need to listen on 'click' / 'tap' event and capture it and close the overlay before
     * propagating the event to the listener in the button. Otherwise, if the clicked button would call
     * open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4
     *
     * @event vaadin-overlay-outside-click
     * fired before the `vaadin-overlay` will be closed on outside click. If canceled the closing of the overlay is canceled as well.
     */

  }, {
    key: "_outsideClickListener",
    value: function _outsideClickListener(event) {
      if (event.composedPath().indexOf(this.$.overlay) !== -1 || this._mouseDownInside || this._mouseUpInside) {
        this._mouseDownInside = false;
        this._mouseUpInside = false;
        return;
      }

      if (!this._last) {
        return;
      }

      var evt = new CustomEvent('vaadin-overlay-outside-click', {
        bubbles: true,
        cancelable: true,
        detail: {
          sourceEvent: event
        }
      });
      this.dispatchEvent(evt);

      if (this.opened && !evt.defaultPrevented) {
        this.close(event);
      }
    }
    /**
     * @event vaadin-overlay-escape-press
     * fired before the `vaadin-overlay` will be closed on ESC button press. If canceled the closing of the overlay is canceled as well.
     */

  }, {
    key: "_keydownListener",
    value: function _keydownListener(event) {
      if (!this._last) {
        return;
      } // TAB


      if (event.key === 'Tab' && this.focusTrap && !event.defaultPrevented) {
        // if only tab key is pressed, cycle forward, else cycle backwards.
        this._cycleTab(event.shiftKey ? -1 : 1);

        event.preventDefault(); // ESC
      } else if (event.key === 'Escape' || event.key === 'Esc') {
        var evt = new CustomEvent('vaadin-overlay-escape-press', {
          bubbles: true,
          cancelable: true,
          detail: {
            sourceEvent: event
          }
        });
        this.dispatchEvent(evt);

        if (this.opened && !evt.defaultPrevented) {
          this.close(event);
        }
      }
    }
  }, {
    key: "_ensureTemplatized",
    value: function _ensureTemplatized() {
      this._setTemplateFromNodes(Array.from(this.children));
    }
    /**
     * @event vaadin-overlay-open
     * fired after the `vaadin-overlay` is opened.
     */

  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, wasOpened) {
      var _this3 = this;

      if (!this._instance) {
        this._ensureTemplatized();
      }

      if (opened) {
        // Store focused node.
        this.__restoreFocusNode = this._getActiveElement();

        this._animatedOpening();

        Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__["afterNextRender"])(this, function () {
          if (_this3.focusTrap && !_this3.contains(document._activeElement || document.activeElement)) {
            _this3._cycleTab(0, 0);
          }

          var evt = new CustomEvent('vaadin-overlay-open', {
            bubbles: true
          });

          _this3.dispatchEvent(evt);
        });

        if (!this.modeless) {
          this._addGlobalListeners();
        }
      } else if (wasOpened) {
        this._animatedClosing();

        if (!this.modeless) {
          this._removeGlobalListeners();
        }
      }
    }
  }, {
    key: "_hiddenChanged",
    value: function _hiddenChanged(hidden) {
      if (hidden && this.hasAttribute('closing')) {
        this._flushAnimation('closing');
      }
    }
  }, {
    key: "_shouldAnimate",
    value: function _shouldAnimate() {
      var name = getComputedStyle(this).getPropertyValue('animation-name');
      var hidden = getComputedStyle(this).getPropertyValue('display') === 'none';
      return !hidden && name && name != 'none';
    }
  }, {
    key: "_enqueueAnimation",
    value: function _enqueueAnimation(type, callback) {
      var _this4 = this;

      var handler = "__".concat(type, "Handler");

      var listener = function listener() {
        callback();

        _this4.removeEventListener('animationend', listener);

        delete _this4[handler];
      };

      this[handler] = listener;
      this.addEventListener('animationend', listener);
    }
  }, {
    key: "_flushAnimation",
    value: function _flushAnimation(type) {
      var handler = "__".concat(type, "Handler");

      if (typeof this[handler] === 'function') {
        this[handler]();
      }
    }
  }, {
    key: "_animatedOpening",
    value: function _animatedOpening() {
      var _this5 = this;

      if (this.parentNode === document.body && this.hasAttribute('closing')) {
        this._flushAnimation('closing');
      }

      this._attachOverlay();

      this.setAttribute('opening', '');

      var finishOpening = function finishOpening() {
        _this5.removeAttribute('opening');

        document.addEventListener('iron-overlay-canceled', _this5._boundIronOverlayCanceledListener);

        if (!_this5.modeless) {
          _this5._enterModalState();
        }
      };

      if (this._shouldAnimate()) {
        this._enqueueAnimation('opening', finishOpening);
      } else {
        finishOpening();
      }
    }
  }, {
    key: "_attachOverlay",
    value: function _attachOverlay() {
      this._placeholder = document.createComment('vaadin-overlay-placeholder');
      this.parentNode.insertBefore(this._placeholder, this);
      document.body.appendChild(this);
    }
  }, {
    key: "_animatedClosing",
    value: function _animatedClosing() {
      var _this6 = this;

      if (this.hasAttribute('opening')) {
        this._flushAnimation('opening');
      }

      if (this._placeholder) {
        this.setAttribute('closing', '');

        var finishClosing = function finishClosing() {
          _this6.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

          _this6._exitModalState();

          document.removeEventListener('iron-overlay-canceled', _this6._boundIronOverlayCanceledListener);

          _this6._detachOverlay();

          _this6.removeAttribute('closing');

          if (_this6.restoreFocusOnClose && _this6.__restoreFocusNode) {
            // If the activeElement is `<body>` or inside the overlay,
            // we are allowed to restore the focus. In all the other
            // cases focus might have been moved elsewhere by another
            // component or by the user interaction (e.g. click on a
            // button outside the overlay).
            var activeElement = _this6._getActiveElement();

            if (activeElement === document.body || _this6._deepContains(activeElement)) {
              _this6.__restoreFocusNode.focus();
            }

            _this6.__restoreFocusNode = null;
          }
        };

        if (this._shouldAnimate()) {
          this._enqueueAnimation('closing', finishClosing);
        } else {
          finishClosing();
        }
      }
    }
  }, {
    key: "_detachOverlay",
    value: function _detachOverlay() {
      this._placeholder.parentNode.insertBefore(this, this._placeholder);

      this._placeholder.parentNode.removeChild(this._placeholder);
    }
    /**
     * Returns all attached overlays.
     */

  }, {
    key: "_modelessChanged",
    value: function _modelessChanged(modeless) {
      if (!modeless) {
        if (this.opened) {
          this._addGlobalListeners();

          this._enterModalState();
        }
      } else {
        this._removeGlobalListeners();

        this._exitModalState();
      }
    }
  }, {
    key: "_addGlobalListeners",
    value: function _addGlobalListeners() {
      document.addEventListener('mousedown', this._boundMouseDownListener);
      document.addEventListener('mouseup', this._boundMouseUpListener); // Firefox leaks click to document on contextmenu even if prevented
      // https://bugzilla.mozilla.org/show_bug.cgi?id=990614

      document.documentElement.addEventListener('click', this._boundOutsideClickListener, true);
      document.addEventListener('keydown', this._boundKeydownListener);
    }
  }, {
    key: "_enterModalState",
    value: function _enterModalState() {
      var _this7 = this;

      if (document.body.style.pointerEvents !== 'none') {
        // Set body pointer-events to 'none' to disable mouse interactions with
        // other document nodes.
        this._previousDocumentPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = 'none';
      } // Disable pointer events in other attached overlays


      OverlayElement.__attachedInstances.forEach(function (el) {
        if (el !== _this7 && !el.hasAttribute('opening') && !el.hasAttribute('closing')) {
          el.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents = 'none';
        }
      });
    }
  }, {
    key: "_removeGlobalListeners",
    value: function _removeGlobalListeners() {
      document.removeEventListener('mousedown', this._boundMouseDownListener);
      document.removeEventListener('mouseup', this._boundMouseUpListener);
      document.documentElement.removeEventListener('click', this._boundOutsideClickListener, true);
      document.removeEventListener('keydown', this._boundKeydownListener);
    }
  }, {
    key: "_exitModalState",
    value: function _exitModalState() {
      if (this._previousDocumentPointerEvents !== undefined) {
        // Restore body pointer-events
        document.body.style.pointerEvents = this._previousDocumentPointerEvents;
        delete this._previousDocumentPointerEvents;
      } // Restore pointer events in the previous overlay(s)


      var instances = OverlayElement.__attachedInstances;
      var el; // Use instances.pop() to ensure the reverse order

      while (el = instances.pop()) {
        if (el === this) {
          // Skip the current instance
          continue;
        }

        el.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

        if (!el.modeless) {
          // Stop after the last modal
          break;
        }
      }
    }
  }, {
    key: "_removeOldContent",
    value: function _removeOldContent() {
      var _this8 = this;

      if (!this.content || !this._contentNodes) {
        return;
      }

      this._observer.disconnect();

      this._contentNodes.forEach(function (node) {
        if (node.parentNode === _this8.content) {
          _this8.content.removeChild(node);
        }
      });

      if (this._originalContentPart) {
        // Restore the original <div part="content">
        this.$.content.parentNode.replaceChild(this._originalContentPart, this.$.content);
        this.$.content = this._originalContentPart;
        this._originalContentPart = undefined;
      }

      this._observer.connect();

      this._contentNodes = undefined;
      this.content = undefined;
    }
  }, {
    key: "_stampOverlayTemplate",
    value: function _stampOverlayTemplate(template, instanceProps) {
      this._removeOldContent();

      if (!template._Templatizer) {
        template._Templatizer = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_1__["templatize"])(template, this, {
          instanceProps: instanceProps,
          forwardHostProp: function forwardHostProp(prop, value) {
            if (this._instance) {
              this._instance.forwardHostProp(prop, value);
            }
          }
        });
      }

      this._instance = new template._Templatizer({});
      this._contentNodes = Array.from(this._instance.root.childNodes);
      var templateRoot = template._templateRoot || (template._templateRoot = template.getRootNode());

      var _isScoped = templateRoot !== document;

      if (_isScoped) {
        var isShady = window.ShadyCSS && !window.ShadyCSS.nativeShadow;

        if (!this.$.content.shadowRoot) {
          this.$.content.attachShadow({
            mode: 'open'
          });
        }

        var scopeCssText = Array.from(templateRoot.querySelectorAll('style')).reduce(function (result, style) {
          return result + style.textContent;
        }, '');

        if (isShady) {
          // NOTE(platosha): ShadyCSS removes <style>’s from templates, so
          // we have to use these protected APIs to get their contents back
          var styleInfo = window.ShadyCSS.ScopingShim._styleInfoForNode(templateRoot.host);

          if (styleInfo) {
            scopeCssText += styleInfo._getStyleRules().parsedCssText;
            scopeCssText += '}';
          }
        } // The overlay root’s :host styles should not apply inside the overlay


        scopeCssText = scopeCssText.replace(/:host/g, ':host-nomatch');

        if (scopeCssText) {
          if (isShady) {
            // ShadyDOM: replace the <div part="content"> with a generated
            // styled custom element
            var contentPart = createOverlayContent(scopeCssText);
            contentPart.id = 'content';
            contentPart.setAttribute('part', 'content');
            this.$.content.parentNode.replaceChild(contentPart, this.$.content); // NOTE(platosha): carry the style scope of the content part

            contentPart.className = this.$.content.className;
            this._originalContentPart = this.$.content;
            this.$.content = contentPart;
          } else {
            // Shadow DOM: append a style to the content shadowRoot
            var style = document.createElement('style');
            style.textContent = scopeCssText;
            this.$.content.shadowRoot.appendChild(style);

            this._contentNodes.unshift(style);
          }
        }

        this.$.content.shadowRoot.appendChild(this._instance.root);
        this.content = this.$.content.shadowRoot;
      } else {
        this.appendChild(this._instance.root);
        this.content = this;
      }
    }
  }, {
    key: "_removeNewRendererOrTemplate",
    value: function _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
      if (template !== oldTemplate) {
        this.template = undefined;
      } else if (renderer !== oldRenderer) {
        this.renderer = undefined;
      }
    }
    /**
     * Manually invoke existing renderer.
     */

  }, {
    key: "render",
    value: function render() {
      if (this.renderer) {
        this.renderer.call(this.owner, this.content, this.owner, this.model);
      }
    }
  }, {
    key: "_templateOrRendererChanged",
    value: function _templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened) {
      if (template && renderer) {
        this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

        throw new Error('You should only use either a renderer or a template for overlay content');
      }

      var ownerOrModelChanged = this._oldOwner !== owner || this._oldModel !== model;
      this._oldModel = model;
      this._oldOwner = owner;
      var templateOrInstancePropsChanged = this._oldInstanceProps !== instanceProps || this._oldTemplate !== template;
      this._oldInstanceProps = instanceProps;
      this._oldTemplate = template;
      var rendererChanged = this._oldRenderer !== renderer;
      this._oldRenderer = renderer;
      var openedChanged = this._oldOpened !== opened;
      this._oldOpened = opened;

      if (template && templateOrInstancePropsChanged) {
        this._stampOverlayTemplate(template, instanceProps);
      } else if (renderer && (rendererChanged || openedChanged || ownerOrModelChanged)) {
        this.content = this;

        if (rendererChanged) {
          while (this.content.firstChild) {
            this.content.removeChild(this.content.firstChild);
          }
        }

        if (opened) {
          this.render();
        }
      }
    }
  }, {
    key: "_isFocused",
    value: function _isFocused(element) {
      return element && element.getRootNode().activeElement === element;
    }
  }, {
    key: "_focusedIndex",
    value: function _focusedIndex(elements) {
      elements = elements || this._getFocusableElements();
      return elements.indexOf(elements.filter(this._isFocused).pop());
    }
  }, {
    key: "_cycleTab",
    value: function _cycleTab(increment, index) {
      var focusableElements = this._getFocusableElements();

      if (index === undefined) {
        index = this._focusedIndex(focusableElements);
      }

      index += increment; // rollover to first item

      if (index >= focusableElements.length) {
        index = 0; // go to last item
      } else if (index < 0) {
        index = focusableElements.length - 1;
      }

      focusableElements[index].focus();
    }
  }, {
    key: "_getFocusableElements",
    value: function _getFocusableElements() {
      // collect all focusable elements
      return _vaadin_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__["FocusablesHelper"].getTabbableNodes(this.$.overlay);
    }
  }, {
    key: "_getActiveElement",
    value: function _getActiveElement() {
      var active = document._activeElement || document.activeElement; // document.activeElement can be null
      // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
      // In IE 11, it can also be an object when operating in iframes
      // or document.documentElement (when overlay closed on outside click).
      // In these cases, default it to document.body.

      if (!active || active === document.documentElement || active instanceof Element === false) {
        active = document.body;
      }

      while (active.shadowRoot && active.shadowRoot.activeElement) {
        active = active.shadowRoot.activeElement;
      }

      return active;
    }
  }, {
    key: "_deepContains",
    value: function _deepContains(node) {
      if (this.contains(node)) {
        return true;
      }

      var n = node;
      var doc = node.ownerDocument; // walk from node to `this` or `document`

      while (n && n !== doc && n !== this) {
        n = n.parentNode || n.host;
      }

      return n === this;
    }
  }, {
    key: "_last",

    /**
     * returns true if this is the last one in the opened overlays stack
     */
    get: function get() {
      return this === OverlayElement.__attachedInstances.pop();
    }
  }], [{
    key: "__attachedInstances",
    get: function get() {
      return Array.from(document.body.children).filter(function (el) {
        return el instanceof OverlayElement;
      });
    }
  }]);

  return OverlayElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(Object(_vaadin_overlay_position_mixin_js__WEBPACK_IMPORTED_MODULE_6__["PositionMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(OverlayElement.is, OverlayElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: ThemableMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemableMixin", function() { return ThemableMixin; });
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");
/* harmony import */ var _vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
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



/**
 * @polymerMixin
 * @mixes Vaadin.ThemePropertyMixin
 */

var ThemableMixin = function ThemableMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_ThemePropertyMixin) {
      _inherits(VaadinThemableMixin, _ThemePropertyMixin);

      function VaadinThemableMixin() {
        _classCallCheck(this, VaadinThemableMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinThemableMixin).apply(this, arguments));
      }

      _createClass(VaadinThemableMixin, null, [{
        key: "finalize",

        /** @protected */
        value: function finalize() {
          var _this = this;

          _get(_getPrototypeOf(VaadinThemableMixin), "finalize", this).call(this);

          var template = this.prototype._template;
          var hasOwnTemplate = this.template && this.template.parentElement && this.template.parentElement.id === this.is;

          var inheritedTemplate = Object.getPrototypeOf(this.prototype)._template;

          if (inheritedTemplate && !hasOwnTemplate) {
            // The element doesn't define its own template -> include the theme modules from the inherited template
            Array.from(inheritedTemplate.content.querySelectorAll('style[include]')).forEach(function (s) {
              _this._includeStyle(s.getAttribute('include'), template);
            });
          }

          this._includeMatchingThemes(template);
        }
        /** @protected */

      }, {
        key: "_includeMatchingThemes",
        value: function _includeMatchingThemes(template) {
          var _this2 = this;

          var domModule = _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_0__["DomModule"];
          var modules = domModule.prototype.modules;
          var hasThemes = false;
          var defaultModuleName = this.is + '-default-theme';
          Object.keys(modules).sort(function (moduleNameA, moduleNameB) {
            var vaadinA = moduleNameA.indexOf('vaadin-') === 0;
            var vaadinB = moduleNameB.indexOf('vaadin-') === 0;
            var vaadinThemePrefixes = ['lumo-', 'material-'];
            var vaadinThemeA = vaadinThemePrefixes.filter(function (prefix) {
              return moduleNameA.indexOf(prefix) === 0;
            }).length > 0;
            var vaadinThemeB = vaadinThemePrefixes.filter(function (prefix) {
              return moduleNameB.indexOf(prefix) === 0;
            }).length > 0;

            if (vaadinA !== vaadinB) {
              // Include vaadin core styles first
              return vaadinA ? -1 : 1;
            } else if (vaadinThemeA !== vaadinThemeB) {
              // Include vaadin theme styles after that
              return vaadinThemeA ? -1 : 1;
            } else {
              // Lastly include custom styles so they override all vaadin styles
              return 0;
            }
          }).forEach(function (moduleName) {
            if (moduleName !== defaultModuleName) {
              var themeFor = modules[moduleName].getAttribute('theme-for');

              if (themeFor) {
                themeFor.split(' ').forEach(function (themeForToken) {
                  if (new RegExp('^' + themeForToken.split('*').join('.*') + '$').test(_this2.is)) {
                    hasThemes = true;

                    _this2._includeStyle(moduleName, template);
                  }
                });
              }
            }
          });

          if (!hasThemes && modules[defaultModuleName]) {
            // No theme modules found, include the default module if it exists
            this._includeStyle(defaultModuleName, template);
          }
        }
        /** @private */

      }, {
        key: "_includeStyle",
        value: function _includeStyle(moduleName, template) {
          if (template && !template.content.querySelector("style[include=\"".concat(moduleName, "\"]"))) {
            var styleEl = document.createElement('style');
            styleEl.setAttribute('include', moduleName);
            template.content.appendChild(styleEl);
          }
        }
      }]);

      return VaadinThemableMixin;
    }(Object(_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemePropertyMixin"])(superClass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js ***!
  \***********************************************************************************/
/*! exports provided: ThemePropertyMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThemePropertyMixin", function() { return ThemePropertyMixin; });
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

/**
 * @polymerMixin
 */
var ThemePropertyMixin = function ThemePropertyMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinThemePropertyMixin, _superClass);

      function VaadinThemePropertyMixin() {
        _classCallCheck(this, VaadinThemePropertyMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinThemePropertyMixin).apply(this, arguments));
      }

      _createClass(VaadinThemePropertyMixin, [{
        key: "attributeChangedCallback",

        /** @protected */
        value: function attributeChangedCallback(name, oldValue, newValue) {
          _get(_getPrototypeOf(VaadinThemePropertyMixin.prototype), "attributeChangedCallback", this).call(this, name, oldValue, newValue);

          if (name === 'theme') {
            this._setTheme(newValue);
          }
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Helper property with theme attribute value facilitating propagation
             * in shadow DOM.
             *
             * Enables the component implementation to propagate the `theme`
             * attribute value to the subcomponents in Shadow DOM by binding
             * the subcomponent’s "theme" attribute to the `theme` property of
             * the host.
             *
             * **NOTE:** Extending the mixin only provides the property for binding,
             * and does not make the propagation alone.
             *
             * See [Theme Attribute and Subcomponents](https://github.com/vaadin/vaadin-themable-mixin/wiki/5.-Theme-Attribute-and-Subcomponents).
             * page for more information.
             *
             * @protected
             */
            theme: {
              type: String,
              readOnly: true
            }
          };
        }
      }]);

      return VaadinThemePropertyMixin;
    }(superClass)
  );
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktYWxhcm0tcGFuZWwtY2FyZC1lZGl0b3J+aHVpLWRpYWxvZy1lZGl0LXZpZXd+aHVpLWVudGl0aWVzLWNhcmQtZWRpdG9yfmh1aS1lbnRpdHktYnV0dG9uLX41MmFhNWMzNS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZGlzYWJsZS11cGdyYWRlLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9mb250LWljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvZm9udC1yb2JvdG8uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9taXhpbnMvb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3NoYWRvdy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy92ZXJzaW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1vdmVybGF5L3NyYy92YWFkaW4tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvc3JjL3ZhYWRpbi1vdmVybGF5LXBvc2l0aW9uLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1vdmVybGF5L3NyYy92YWFkaW4tb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWUtcHJvcGVydHktbWl4aW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmUgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHRcbkNvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzIHBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvXG5zdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50IGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCB7IEVsZW1lbnRNaXhpbiB9IGZyb20gJy4vZWxlbWVudC1taXhpbi5qcyc7XG5cbmltcG9ydCB7IGRlZHVwaW5nTWl4aW4gfSBmcm9tICcuLi91dGlscy9taXhpbi5qcyc7XG5cbmNvbnN0IERJU0FCTEVEX0FUVFIgPSAnZGlzYWJsZS11cGdyYWRlJztcblxuLyoqXG4gKiBFbGVtZW50IGNsYXNzIG1peGluIHRoYXQgYWxsb3dzIHRoZSBlbGVtZW50IHRvIGJvb3QgdXAgaW4gYSBub24tZW5hYmxlZFxuICogc3RhdGUgd2hlbiB0aGUgYGRpc2FibGUtdXBncmFkZWAgYXR0cmlidXRlIGlzIHByZXNlbnQuIFRoaXMgbWl4aW4gaXNcbiAqIGRlc2lnbmVkIHRvIGJlIHVzZWQgd2l0aCBlbGVtZW50IGNsYXNzZXMgbGlrZSBQb2x5bWVyRWxlbWVudCB0aGF0IHBlcmZvcm1cbiAqIGluaXRpYWwgc3RhcnR1cCB3b3JrIHdoZW4gdGhleSBhcmUgZmlyc3QgY29ubmVjdGVkLiBXaGVuIHRoZVxuICogYGRpc2FibGUtdXBncmFkZWAgYXR0cmlidXRlIGlzIHJlbW92ZWQsIGlmIHRoZSBlbGVtZW50IGlzIGNvbm5lY3RlZCwgaXRcbiAqIGJvb3RzIHVwIGFuZCBcImVuYWJsZXNcIiBhcyBpdCBvdGhlcndpc2Ugd291bGQ7IGlmIGl0IGlzIG5vdCBjb25uZWN0ZWQsIHRoZVxuICogZWxlbWVudCBib290cyB1cCB3aGVuIGl0IGlzIG5leHQgY29ubmVjdGVkLlxuICpcbiAqIFVzaW5nIGBkaXNhYmxlLXVwZ3JhZGVgIHdpdGggUG9seW1lckVsZW1lbnQgcHJldmVudHMgYW55IGRhdGEgcHJvcGFnYXRpb25cbiAqIHRvIHRoZSBlbGVtZW50LCBhbnkgZWxlbWVudCBET00gZnJvbSBzdGFtcGluZywgb3IgYW55IHdvcmsgZG9uZSBpblxuICogY29ubmVjdGVkL2Rpc2Nvbm5jdGVkQ2FsbGJhY2sgZnJvbSBvY2N1cmluZywgYnV0IGl0IGRvZXMgbm90IHByZXZlbnQgd29ya1xuICogZG9uZSBpbiB0aGUgZWxlbWVudCBjb25zdHJ1Y3Rvci5cbiAqXG4gKiBOb3RlLCB0aGlzIG1peGluIG11c3QgYmUgYXBwbGllZCBvbiB0b3Agb2YgYW55IGVsZW1lbnQgY2xhc3MgdGhhdFxuICogaXRzZWxmIGltcGxlbWVudHMgYSBgY29ubmVjdGVkQ2FsbGJhY2tgIHNvIHRoYXQgaXQgY2FuIGNvbnRyb2wgdGhlIHdvcmtcbiAqIGRvbmUgaW4gYGNvbm5lY3RlZENhbGxiYWNrYC4gRm9yIGV4YW1wbGUsXG4gKlxuICogICAgIE15Q2xhc3MgPSBEaXNhYmxlVXBncmFkZU1peGluKGNsYXNzIGV4dGVuZHMgQmFzZUNsYXNzIHsuLi59KTtcbiAqXG4gKiBAbWl4aW5GdW5jdGlvblxuICogQHBvbHltZXJcbiAqIEBhcHBsaWVzTWl4aW4gRWxlbWVudE1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBEaXNhYmxlVXBncmFkZU1peGluID0gZGVkdXBpbmdNaXhpbigoYmFzZSkgPT4ge1xuXG4gIC8qKlxuICAgKiBAY29uc3RydWN0b3JcbiAgICogQGV4dGVuZHMge2Jhc2V9XG4gICAqIEBpbXBsZW1lbnRzIHtQb2x5bWVyX0VsZW1lbnRNaXhpbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGNvbnN0IHN1cGVyQ2xhc3MgPSBFbGVtZW50TWl4aW4oYmFzZSk7XG5cbiAgLyoqXG4gICAqIEBwb2x5bWVyXG4gICAqIEBtaXhpbkNsYXNzXG4gICAqIEBpbXBsZW1lbnRzIHtQb2x5bWVyX0Rpc2FibGVVcGdyYWRlTWl4aW59XG4gICAqL1xuICBjbGFzcyBEaXNhYmxlVXBncmFkZUNsYXNzIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgICByZXR1cm4gc3VwZXIub2JzZXJ2ZWRBdHRyaWJ1dGVzLmNvbmNhdChESVNBQkxFRF9BVFRSKTtcbiAgICB9XG5cbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZCwgdmFsdWUsIG5hbWVzcGFjZSkge1xuICAgICAgaWYgKG5hbWUgPT0gRElTQUJMRURfQVRUUikge1xuICAgICAgICBpZiAoIXRoaXMuX19kYXRhRW5hYmxlZCAmJiB2YWx1ZSA9PSBudWxsICYmIHRoaXMuaXNDb25uZWN0ZWQpIHtcbiAgICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkLCB2YWx1ZSwgbmFtZXNwYWNlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvKlxuICAgICAgTk9URTogY2Fubm90IGdhdGUgb24gYXR0cmlidXRlIGJlY2F1c2UgdGhpcyBpcyBjYWxsZWQgYmVmb3JlXG4gICAgICBhdHRyaWJ1dGVzIGFyZSBkZWxpdmVyZWQuIFRoZXJlZm9yZSwgd2Ugc3R1YiB0aGlzIG91dCBhbmRcbiAgICAgIGNhbGwgYHN1cGVyLl9pbml0aWFsaXplUHJvcGVydGllcygpYCBtYW51YWxseS5cbiAgICAqL1xuICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIF9pbml0aWFsaXplUHJvcGVydGllcygpIHt9XG5cbiAgICAvLyBwcmV2ZW50IHVzZXIgY29kZSBpbiBjb25uZWN0ZWQgZnJvbSBydW5uaW5nXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHRoaXMuX19kYXRhRW5hYmxlZCB8fCAhdGhpcy5oYXNBdHRyaWJ1dGUoRElTQUJMRURfQVRUUikpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBwcmV2ZW50IGVsZW1lbnQgZnJvbSB0dXJuaW5nIG9uIHByb3BlcnRpZXNcbiAgICAvKiogQG92ZXJyaWRlICovXG4gICAgX2VuYWJsZVByb3BlcnRpZXMoKSB7XG4gICAgICBpZiAoIXRoaXMuaGFzQXR0cmlidXRlKERJU0FCTEVEX0FUVFIpKSB7XG4gICAgICAgIGlmICghdGhpcy5fX2RhdGFFbmFibGVkKSB7XG4gICAgICAgICAgc3VwZXIuX2luaXRpYWxpemVQcm9wZXJ0aWVzKCk7XG4gICAgICAgIH1cbiAgICAgICAgc3VwZXIuX2VuYWJsZVByb3BlcnRpZXMoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBvbmx5IGdvIGlmIFwiZW5hYmxlZFwiXG4gICAgLyoqIEBvdmVycmlkZSAqL1xuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgaWYgKHRoaXMuX19kYXRhRW5hYmxlZCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgfVxuICAgIH1cblxuICB9XG5cbiAgcmV0dXJuIERpc2FibGVVcGdyYWRlQ2xhc3M7XG5cbn0pO1xuIiwiaW1wb3J0ICcuL3ZlcnNpb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9jdXN0b20tc3R5bGUuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tbW9kdWxlLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWNvbG9yLWxpZ2h0XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCxcbiAgICAgICNob3N0LWZpeCB7XG4gICAgICAgIC8qIFRleHQgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yOiB2YXIoLS1saWdodC10aGVtZS10ZXh0LWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuODcpKTtcbiAgICAgICAgLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUtc2Vjb25kYXJ5LWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuNTQpKTtcbiAgICAgICAgLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB2YXIoLS1saWdodC10aGVtZS1kaXNhYmxlZC1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjM4KSk7XG5cbiAgICAgICAgLyogUHJpbWFyeSBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yLCAjNjIwMGVlKTtcbiAgICAgICAgLS1tYXRlcmlhbC1wcmltYXJ5LWNvbnRyYXN0LWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLWJhc2UtY29sb3IsICNmZmYpO1xuICAgICAgICAtLW1hdGVyaWFsLXByaW1hcnktdGV4dC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgICAgLyogRXJyb3IgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtZXJyb3ItY29sb3I6IHZhcigtLWVycm9yLWNvbG9yLCAjYjAwMDIwKTtcbiAgICAgICAgLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci1jb2xvcik7XG5cbiAgICAgICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1saWdodC10aGVtZS1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKTtcbiAgICAgICAgLS1tYXRlcmlhbC1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsICNmNWY1ZjUpO1xuICAgICAgICAtLW1hdGVyaWFsLWRpc2FibGVkLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMjYpO1xuXG4gICAgICAgIC8qIERpdmlkZXIgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtZGl2aWRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcblxuICAgICAgICAvKiBVbmRvY3VtZW50ZWQgaW50ZXJuYWwgcHJvcGVydGllcyAocHJlZml4ZWQgd2l0aCB0aHJlZSBkYXNoZXMpICovXG5cbiAgICAgICAgLyogVGV4dCBmaWVsZCB0d2Vha3MgKi9cbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1vcGFjaXR5OiBpbml0aWFsO1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWlucHV0LWxpbmUtaG92ZXItb3BhY2l0eTogaW5pdGlhbDtcbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1mb2N1c2VkLWxhYmVsLW9wYWNpdHk6IGluaXRpYWw7XG5cbiAgICAgICAgLyogQnV0dG9uIHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC1idXR0b24tcmFpc2VkLWJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG4gICAgICAgIC0tX21hdGVyaWFsLWJ1dHRvbi1vdXRsaW5lLWNvbG9yOiBpbml0aWFsO1xuXG4gICAgICAgIC8qIEdyaWQgdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLWdyaWQtcm93LWhvdmVyLWJhY2tncm91bmQtY29sb3I6IGluaXRpYWw7XG5cbiAgICAgICAgLyogU3BsaXQgbGF5b3V0IHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC1zcGxpdC1sYXlvdXQtc3BsaXR0ZXItYmFja2dyb3VuZC1jb2xvcjogaW5pdGlhbDtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFt0aGVtZX49XCJkYXJrXCJdIHtcbiAgICAgICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtdGV4dC1jb2xvciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAxKSk7XG4gICAgICAgIC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtc2Vjb25kYXJ5LWNvbG9yLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNykpO1xuICAgICAgICAtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtZGlzYWJsZWQtY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KSk7XG5cbiAgICAgICAgLyogUHJpbWFyeSBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yOiB2YXIoLS1saWdodC1wcmltYXJ5LWNvbG9yLCAjN2UzZmYyKTtcbiAgICAgICAgLS1tYXRlcmlhbC1wcmltYXJ5LXRleHQtY29sb3I6ICNiNzk0ZjY7XG5cbiAgICAgICAgLyogRXJyb3IgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtZXJyb3ItY29sb3I6IHZhcigtLWVycm9yLWNvbG9yLCAjZGUyODM5KTtcbiAgICAgICAgLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci1jb2xvcik7XG5cbiAgICAgICAgLyogQmFja2dyb3VuZCBjb2xvcnMgKi9cbiAgICAgICAgLS1tYXRlcmlhbC1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLWJhY2tncm91bmQtY29sb3IsICMzMDMwMzApO1xuICAgICAgICAtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yLCAjM2IzYjNiKTtcbiAgICAgICAgLS1tYXRlcmlhbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xuXG4gICAgICAgIC8qIERpdmlkZXIgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtZGl2aWRlci1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEyKTtcblxuICAgICAgICAvKiBVbmRvY3VtZW50ZWQgaW50ZXJuYWwgcHJvcGVydGllcyAocHJlZml4ZWQgd2l0aCB0aHJlZSBkYXNoZXMpICovXG5cbiAgICAgICAgLyogVGV4dCBmaWVsZCB0d2Vha3MgKi9cbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWJhY2tncm91bmQtY29sb3I6ICNmZmY7XG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1vcGFjaXR5OiAwLjc7XG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1ob3Zlci1vcGFjaXR5OiAxO1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWZvY3VzZWQtbGFiZWwtb3BhY2l0eTogMTtcblxuICAgICAgICAvKiBCdXR0b24gdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLWJ1dHRvbi1yYWlzZWQtYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgICAgLS1fbWF0ZXJpYWwtYnV0dG9uLW91dGxpbmUtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblxuICAgICAgICAvKiBHcmlkIHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC1ncmlkLXJvdy1ob3Zlci1iYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMDgpO1xuICAgICAgICAtLV9tYXRlcmlhbC1ncmlkLXJvdy1zZWxlY3RlZC1vdmVybGF5LW9wYWNpdHk6IDAuMTY7XG5cbiAgICAgICAgLyogU3BsaXQgbGF5b3V0IHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC1zcGxpdC1sYXlvdXQtc3BsaXR0ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjgpO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgYSB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+PGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1jb2xvci1kYXJrXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCxcbiAgICAgICNob3N0LWZpeCB7XG4gICAgICAgIC8qIFRleHQgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLXRleHQtY29sb3IsIHJnYmEoMjU1LCAyNTUsIDI1NSwgMSkpO1xuICAgICAgICAtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLXNlY29uZGFyeS1jb2xvciwgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpKTtcbiAgICAgICAgLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yOiB2YXIoLS1kYXJrLXRoZW1lLWRpc2FibGVkLWNvbG9yLCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSkpO1xuXG4gICAgICAgIC8qIFByaW1hcnkgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcjogdmFyKC0tbGlnaHQtcHJpbWFyeS1jb2xvciwgIzdlM2ZmMik7XG4gICAgICAgIC0tbWF0ZXJpYWwtcHJpbWFyeS10ZXh0LWNvbG9yOiAjYjc5NGY2O1xuXG4gICAgICAgIC8qIEVycm9yIGNvbG9ycyAqL1xuICAgICAgICAtLW1hdGVyaWFsLWVycm9yLWNvbG9yOiB2YXIoLS1lcnJvci1jb2xvciwgI2RlMjgzOSk7XG4gICAgICAgIC0tbWF0ZXJpYWwtZXJyb3ItdGV4dC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtZXJyb3ItY29sb3IpO1xuXG4gICAgICAgIC8qIEJhY2tncm91bmQgY29sb3JzICovXG4gICAgICAgIC0tbWF0ZXJpYWwtYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aGVtZS1iYWNrZ3JvdW5kLWNvbG9yLCAjMzAzMDMwKTtcbiAgICAgICAgLS1tYXRlcmlhbC1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tZGFyay10aGVtZS1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvciwgIzNiM2IzYik7XG4gICAgICAgIC0tbWF0ZXJpYWwtZGlzYWJsZWQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4zKTtcblxuICAgICAgICAvKiBEaXZpZGVyIGNvbG9ycyAqL1xuICAgICAgICAtLW1hdGVyaWFsLWRpdmlkZXItY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xMik7XG5cbiAgICAgICAgLyogVW5kb2N1bWVudGVkIGludGVybmFsIHByb3BlcnRpZXMgKHByZWZpeGVkIHdpdGggdGhyZWUgZGFzaGVzKSAqL1xuXG4gICAgICAgIC8qIFRleHQgZmllbGQgdHdlYWtzICovXG4gICAgICAgIC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1iYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWlucHV0LWxpbmUtb3BhY2l0eTogMC43O1xuICAgICAgICAtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWlucHV0LWxpbmUtaG92ZXItb3BhY2l0eTogMTtcbiAgICAgICAgLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1mb2N1c2VkLWxhYmVsLW9wYWNpdHk6IDE7XG5cbiAgICAgICAgLyogQnV0dG9uIHR3ZWFrcyAqL1xuICAgICAgICAtLV9tYXRlcmlhbC1idXR0b24tcmFpc2VkLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4wOCk7XG4gICAgICAgIC0tX21hdGVyaWFsLWJ1dHRvbi1vdXRsaW5lLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cbiAgICAgICAgLyogR3JpZCB0d2Vha3MgKi9cbiAgICAgICAgLS1fbWF0ZXJpYWwtZ3JpZC1yb3ctaG92ZXItYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA4KTtcbiAgICAgICAgLS1fbWF0ZXJpYWwtZ3JpZC1yb3ctc2VsZWN0ZWQtb3ZlcmxheS1vcGFjaXR5OiAwLjE2O1xuXG4gICAgICAgIC8qIFNwbGl0IGxheW91dCB0d2Vha3MgKi9cbiAgICAgICAgLS1fbWF0ZXJpYWwtc3BsaXQtbGF5b3V0LXNwbGl0dGVyLWJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC44KTtcblxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT48Y3VzdG9tLXN0eWxlPlxuICA8c3R5bGU+XG4gICAgOnJvb3Qge1xuICAgICAgLyogVGV4dCBjb2xvcnMgKi9cbiAgICAgIC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yOiB2YXIoLS1saWdodC10aGVtZS10ZXh0LWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuODcpKTtcbiAgICAgIC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3I6IHZhcigtLWxpZ2h0LXRoZW1lLXNlY29uZGFyeS1jb2xvciwgcmdiYSgwLCAwLCAwLCAwLjU0KSk7XG4gICAgICAtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3I6IHZhcigtLWxpZ2h0LXRoZW1lLWRpc2FibGVkLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuMzgpKTtcblxuICAgICAgLyogUHJpbWFyeSBjb2xvcnMgKi9cbiAgICAgIC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcjogdmFyKC0tcHJpbWFyeS1jb2xvciwgIzYyMDBlZSk7XG4gICAgICAtLW1hdGVyaWFsLXByaW1hcnktY29udHJhc3QtY29sb3I6IHZhcigtLWRhcmstdGhlbWUtYmFzZS1jb2xvciwgI2ZmZik7XG4gICAgICAtLW1hdGVyaWFsLXByaW1hcnktdGV4dC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcik7XG5cbiAgICAgIC8qIEVycm9yIGNvbG9ycyAqL1xuICAgICAgLS1tYXRlcmlhbC1lcnJvci1jb2xvcjogdmFyKC0tZXJyb3ItY29sb3IsICNiMDAwMjApO1xuICAgICAgLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci1jb2xvcik7XG5cbiAgICAgIC8qIEJhY2tncm91bmQgY29sb3JzICovXG4gICAgICAtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXRoZW1lLWJhY2tncm91bmQtY29sb3IsICNmZmYpO1xuICAgICAgLS1tYXRlcmlhbC1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbGlnaHQtdGhlbWUtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IsICNmNWY1ZjUpO1xuICAgICAgLS1tYXRlcmlhbC1kaXNhYmxlZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjI2KTtcblxuICAgICAgLyogRGl2aWRlciBjb2xvcnMgKi9cbiAgICAgIC0tbWF0ZXJpYWwtZGl2aWRlci1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2N1c3RvbS1zdHlsZS5qcyc7XG5pbXBvcnQgJy4vdmVyc2lvbi5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGN1c3RvbS1zdHlsZT5cbiAgPHN0eWxlPlxuICAgIEBmb250LWZhY2Uge1xuICAgICAgZm9udC1mYW1pbHk6ICdtYXRlcmlhbC1pY29ucyc7XG4gICAgICBzcmM6IHVybChkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxkMDlHUmdBQkFBQUFBQWpBQUFzQUFBQUFEWlFBQVFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkhVMVZDQUFBQkNBQUFBRHNBQUFCVUlJc2xlazlUTHpJQUFBRkVBQUFBUkFBQUFGWlNrMDlvWTIxaGNBQUFBWWdBQUFDTkFBQUNOT3VDWEg1bmJIbG1BQUFDR0FBQUJEd0FBQVhzZEs4VUdHaGxZV1FBQUFaVUFBQUFNQUFBQURZWDlUMklhR2hsWVFBQUJvUUFBQUFnQUFBQUpCR3lDTHBvYlhSNEFBQUdwQUFBQUJRQUFBQkFqWG9BQUd4dlkyRUFBQWE0QUFBQUlnQUFBQ0lLTWdqVWJXRjRjQUFBQnR3QUFBQWZBQUFBSUFFZUFGUnVZVzFsQUFBRy9BQUFBVFFBQUFKZTNsNzY0WEJ2YzNRQUFBZ3dBQUFBandBQUFNcUpFakRXZUp4allHUmdZT0JpTUdDd1kyQnljZk1KWWVETFNTekpZNUJpWUdHQUFKQThNcHN4SnpNOWtZRUR4Z1BLc1lCcERpQm1nNGdDQUNZN0JVZ0FlSnhqWU9TNHdUaUJnWldCZ1lHZmJRSURBMk1BaEdacFlDaGx5bVpnWUdKZ1pXYkFDZ0xTWEZNWUhGNHh2dUpudi9DdmdPRUcrd1hHNlVCaFJwQWNBTXlVREpONG5PMlIyUTBESVF4RUh3dDdIelNTR2xKUXZsSmtxcUdKallkSkdiSDBQUEpnRUxLQkVjakJJeWlRM2lRVXIzQlQ5ek5iOXd2UDNsUGt0M3Jma1pOeTFLWG5JWHBMdkRneHM3REd2WjJEazRzYXh4UC9PSHIrL0txcUNabyswOEVnelVhN2FjVm95bTAwMmx1YkROTFpJRjBNMHRVZzNZejIyWGFEOURENlhUc04wc3NnclliNkJaRVFKaVVBQUFCNG5IMVViVWhiVnhnKzc3MjU5eVpNSmJma283RGhibkp0cmpZdVdmTnhzeDlxQkZ1MzJsakhXcVdPNlZENk1XMUc0dVlQc2ZTRGRRT0hYT3VQcnRZZkt5dEtKemlZRUprUVpMUS9CcUhDcHNVZmdoWlgxakhCakJVV1dxZmVzNTF6RTFkbG95Zkp5WHZPZWQ1em52Tyt6M3NRSU5LRWViNFdtUkVDQlVSWkJBR0VlVTFmeU9nUGhsaUpsVFQ5Z2VuZVZwVHhEMjMvalBiaW5TQUdSWWdBREd1TVA4UDRDSUxnR2Q5VzFIUlBYeURlaUVFSUw1cHZDbkgwTW5xVmVNaGgyZTRpUDlsZEFuYlJWZ3BCVjZBR3dtTElCNnhMZEFuenB6UGIrek9uMWZkVTh1VnI4LzkvM2VWcitmRU1hY1pnMStMR0JtZkxjektIdU51SVE4Z0NnZ1VVOWxQOC9oRGpOMDFwY0JsdWs4c1FLNC9qT2E2UDRrQ3hFT0k4cCtrVHpDa05xNloxWXVrVEdzd1ZjTFVGSE5uT0NleWFCdmV4cWpHbnVENE5oM0dZV0lWWXhMa1Y5RkorUHdxbHV3cHhjcUsrUUdKaWRJeWZETGttMGhuVzh3WGl6aUwwOXhza1BtYTBIeDFDRWJLUFcrQ1J3RnVkRHVSMFNCRVZSVlNyNGtHS2gzVXJQbEE4MWtnTlJGVEpXUXBPaDFVb0FZRm5aWm9DMDdkejZSUmVqeDAvSGdON0tnMGo2UlRZWTAxTk1ieWVTcytOWFI5K1dCMk5Wajhjdmc3MXorMmVHMHp4TVZ3am1Ba3NPNTNHM2VscG5LVk9ZSnRPdzQzME5OaGlUUnNiLy9IRGFjUG1iUG9FL3VFQzBPc2JNUnRuMTJqR0xRd3pDem5Jc1d1NENISjc3dmdLa2w1MFJ6a2NETXRpMERRMTkzOU04aXpQVVNHOG1QSm1XU1pERWtTYWllaXZ5N0lxektNU2RBQlZvVGNST3NETEVqMU4zUmVodVFMZWJqT2lHUXhFRkY1Mkt4N0ZFdzVGTEtDR1EwYkVaYmVncUVHSmt1VVpNaDBNT0IxT2g5M0cvN2I0R09keTYzaTB2ZXJ1SlN3TW1sY0dOMXZMdlFkSE9zOGt6bmRPRnhXM3hob3FLOEhVaVg5U3ZSVjA5bUx5OTErZVFkR2ZXVGpYSHYxUi94SmZrdHdHcUwyeCt5eDgvTWNvV0Q2QWpjRm5aWVBjMTUzbkUyYzZSeXE4NVNsNHpkc1FheTB1MWpOd0tIbVJ6aDcwcXRsM3U4NWk3Y2xYT0FzZndWVyswdHZRMk9veTlFUnFZWnN2UWZ1UVF1NWJpUFcvZ1M0b3lVT0ZwRklkT2FpTWVLSWlOKzF0ZEJ5Z0t5R0tNVTA5WFYzQ015MHRjSFJwRmJLclMzQzBwUVhQTEswK0hlanRxVHQ4dUs2bkY2dzcxc0E3OVhYbEZSWGxkZlhqT3daZjB0R0dKNWVYOFdSYlIwY2JOQzh2UTNOYngxYnBYa2Y4aEZxc3RNZlZNTkN1R2lPNkFoRll5UlRqVmpZSG1GbTA2eTN5a1FHaEt4bjFZTjNKSmttd1RDZmtmT1dFak1xaHlRT1h5UCthdUphWGNWVTBXa1VrUFRZemR1dFI1WHpGUkxMM1NuOGlmc2ZuOS92dXhCTzVSUGNKL0Qwenl6VW45bXFmQ0U3OHB2ZTdRS2dBb3g2diswNVNMS1hGME03U1FiaVZJVytlbmFFa3lvZCtkalRuTW9JZE5xSU5JbmtCeVN0eXpkM2ROWG9yTlhUMTh2M29GeGY2ajd4bEhOSFAyWXlnUjZ1NzRub1hUdUpGbzhRZVR3NSszdmgyTUREVFp6MTU0c3BuTi9QY2pYeDhrdnl3N2doK2hKTXdERGxjOUErM1hjc0ZlSnhqWUdSZ1lBRGk1UHRXanZIOE5sOFp1RGtUZ0NJTTE2c3JLaEgwdjB6Tysrd1hnRndPQmlhUUtBQTZoQXVKZUp4allHUmdZTC93cjRDQmdjdUtnZUgvZjg3N0RFQVJGQ0FBQUlld0JZSjRuR05nWUdEZ1RDQU9jMWxoaWdFQXZNSUdBd0FBQUFBQUdBQXdBR0lBZGdDS0FKNEF3QUVrQVRJQmNBSG9BbEFDWGdLc0F2WUFBSGljWTJCa1lHQVFZUEJnWUdFQUFTWWc1Z0pDQm9iL1lENERBQkZlQVhNQWVKeDlrTDF1d2pBVWhVOGdVSlZJVmFXcW5SZ3NWZXBTRVg1RzFCa2tSZ2IyRUJ3SWN1TElNVWk4UVIra1Q5Q0g2TmdINlZQMHhIaUJBVnR5dnZ2ZGM1MG9BQjd4Z3dETkN2RGd6bWExY01mcXpHM1NzK2VRL09xNWd3aGp6MTM2RDg4OXZHUGhPY0lURHJ3aENPOXArdmowM0dMK3kzT2IvdHR6U1A3MTNNRUwvangzMFEvZ3VZZFYwUGNjNFMwd1JXS2x5Uk0xeUZOZDFrdTVQYWprU2w1V0sybnFYSmRpSEk4dUczTlpTa096RWV1VHFJL2JpYldaeUl3dXhFeVhWaXFsUldYMFhxWTIzbGxiVFlmRHpQczQxUVVLSkxDUU1NaEpDZ00rVTJpVXFMR2szL0pmS0hiTXplU3Qzc3I1bXFhcEJmOS9qTkhOaVRsOTZYcm56SVpUYTV4NDFqanlpeWEwRmhucmpCbk51d1JtYnJaSksyNU5VN25lbmlhbGo3RnpVeFdtR0hKblYvbll2YjM0QnpIWmNMWjRuRzJNUVE2Q01CUkVPMEFSdFNqdXZBU0hxdTFYQ0QrMCtZS0UyMHREM0RtTG1ieGs4bFNtOXR6Vi96VElrS09BUm9rREtoeHh3aGtHTlM2NG9zRk5YYXhJV0ZvZmxuR3g0czJPYzB4UU9jczBlaXZhZGVRR3MvVkh3dGd5UGFmNkI5Sy91a2s3cG5UajRJYktTNGpKcDJsemlhR1ZXdCsvN1lQSjV4c1VrZTFhQ25Hd3ZweGpHcVcrdE44eGZnQT0pIGZvcm1hdCgnd29mZicpO1xuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICB9XG5cbiAgICBodG1sIHtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtYXJyb3ctZG93bndhcmQ6IFwiXFxcXGVhMDFcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtYXJyb3ctdXB3YXJkOiBcIlxcXFxlYTAyXCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWNhbGVuZGFyOiBcIlxcXFxlYTAzXCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWNoZWNrOiBcIlxcXFxlYTA0XCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWNoZXZyb24tbGVmdDogXCJcXFxcZWEwNVwiO1xuICAgICAgLS1tYXRlcmlhbC1pY29ucy1jaGV2cm9uLXJpZ2h0OiBcIlxcXFxlYTA2XCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWNsZWFyOiBcIlxcXFxlYTA3XCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWNsb2NrOiBcIlxcXFxlYTA4XCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWRyb3Bkb3duOiBcIlxcXFxlYTA5XCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWVycm9yOiBcIlxcXFxlYTBhXCI7XG4gICAgICAtLW1hdGVyaWFsLWljb25zLWV5ZS1kaXNhYmxlZDogXCJcXFxcZWEwYlwiO1xuICAgICAgLS1tYXRlcmlhbC1pY29ucy1leWU6IFwiXFxcXGVhMGNcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtcGxheTogXCJcXFxcZWEwZFwiO1xuICAgICAgLS1tYXRlcmlhbC1pY29ucy1yZWxvYWQ6IFwiXFxcXGVhMGVcIjtcbiAgICAgIC0tbWF0ZXJpYWwtaWNvbnMtdXBsb2FkOiBcIlxcXFxlYTBmXCI7XG4gICAgfVxuICA8L3N0eWxlPlxuPC9jdXN0b20tc3R5bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuXG4vKiBOT1RJQ0U6IEdlbmVyYXRlZCB3aXRoICdndWxwIGljb25zJyAqL1xuLypcbiAgRklYTUUocG9seW1lci1tb2R1bGl6ZXIpOiB0aGUgYWJvdmUgY29tbWVudHMgd2VyZSBleHRyYWN0ZWRcbiAgZnJvbSBIVE1MIGFuZCBtYXkgYmUgb3V0IG9mIHBsYWNlIGhlcmUuIFJldmlldyB0aGVtIGFuZFxuICB0aGVuIGRlbGV0ZSB0aGlzIGNvbW1lbnQhXG4qL1xuO1xuIiwiY29uc3QgZm9udCA9ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NDAwLDcwMHxSb2JvdG86NDAwLDMwMCwzMDBpdGFsaWMsNDAwaXRhbGljLDUwMCw1MDBpdGFsaWMsNzAwLDcwMGl0YWxpYyc7XG5jb25zdCBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpO1xubGluay5yZWwgPSAnc3R5bGVzaGVldCc7XG5saW5rLnR5cGUgPSAndGV4dC9jc3MnO1xubGluay5jcm9zc09yaWdpbiA9ICdhbm9ueW1vdXMnO1xubGluay5ocmVmID0gZm9udDtcbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGluayk7XG4iLCJpbXBvcnQgJy4uL2NvbG9yLmpzJztcbmltcG9ydCAnLi4vdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJy4uL3NoYWRvdy5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHRvcDogMTZweDtcbiAgICAgICAgcmlnaHQ6IDE2cHg7XG4gICAgICAgIC8qIFRPRE8gKEBqb3VuaSk6IHJlbW92ZSB1bm5lY2Vzc2FyeSBtdWx0aXBsaWNhdGlvbiBhZnRlciBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi1vdmVybGF5L2lzc3Vlcy85MCBpcyBmaXhlZCAqL1xuICAgICAgICBib3R0b206IGNhbGMoMXB4ICogdmFyKC0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tKSArIDE2cHgpO1xuICAgICAgICBsZWZ0OiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTRkcCk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3IpO1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbWF0ZXJpYWwtZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjb250ZW50XCJdIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiYmFja2Ryb3BcIl0ge1xuICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIGFuaW1hdGlvbjogMC4ycyB2YWFkaW4tb3ZlcmxheS1iYWNrZHJvcC1lbnRlcjtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IG9wYWNpdHk7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgdmFhZGluLW92ZXJsYXktYmFja2Ryb3AtZW50ZXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZlcnNpb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9jdXN0b20tc3R5bGUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxjdXN0b20tc3R5bGU+XG4gIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgIGh0bWwge1xuICAgICAgLyogZnJvbSBodHRwOi8vY29kZXBlbi5pby9zaHluZG1hbi9wZW4vYzUzOTRkZGYyZThiMmE1YzkxODU5MDRiNTc0MjFjZGIgKi9cbiAgICAgIC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi0yZHA6IDAgMnB4IDJweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDFweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi0zZHA6IDAgM3B4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDNweCAtMnB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi00ZHA6IDAgNHB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgMXB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDJweCA0cHggLTFweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4gICAgICAtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tNmRwOiAwIDZweCAxMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCAxcHggMThweCAwIHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgM3B4IDVweCAtMXB4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi04ZHA6IDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksIDAgM3B4IDE0cHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksIDAgNXB4IDVweCAtM3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICAgIC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi0xMmRwOiAwIDEycHggMTZweCAxcHggcmdiYSgwLCAwLCAwLCAwLjE0KSwgMCA0cHggMjJweCAzcHggcmdiYSgwLCAwLCAwLCAwLjEyKSwgMCA2cHggN3B4IC00cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTE2ZHA6IDAgMTZweCAyNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDZweCAzMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDhweCAxMHB4IC01cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuICAgICAgLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTI0ZHA6IDAgMjRweCAzOHB4IDNweCByZ2JhKDAsIDAsIDAsIDAuMTQpLCAwIDlweCA0NnB4IDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLCAwIDExcHggMTVweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC40KTtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmVyc2lvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2N1c3RvbS1zdHlsZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1tb2R1bGUuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGN1c3RvbS1zdHlsZT5cbiAgPHN0eWxlPlxuICAgIGh0bWwge1xuICAgICAgLyogRm9udCBmYW1pbHkgKi9cbiAgICAgIC0tbWF0ZXJpYWwtZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xuXG4gICAgICAvKiBGb250IHNpemVzICovXG4gICAgICAtLW1hdGVyaWFsLWgxLWZvbnQtc2l6ZTogNnJlbTtcbiAgICAgIC0tbWF0ZXJpYWwtaDItZm9udC1zaXplOiAzLjc1cmVtO1xuICAgICAgLS1tYXRlcmlhbC1oMy1mb250LXNpemU6IDNyZW07XG4gICAgICAtLW1hdGVyaWFsLWg0LWZvbnQtc2l6ZTogMi4xMjVyZW07XG4gICAgICAtLW1hdGVyaWFsLWg1LWZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgLS1tYXRlcmlhbC1oNi1mb250LXNpemU6IDEuMjVyZW07XG4gICAgICAtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplOiAxcmVtO1xuICAgICAgLS1tYXRlcmlhbC1zbWFsbC1mb250LXNpemU6IDAuODc1cmVtO1xuICAgICAgLS1tYXRlcmlhbC1idXR0b24tZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgICAgIC0tbWF0ZXJpYWwtY2FwdGlvbi1mb250LXNpemU6IDAuNzVyZW07XG5cbiAgICAgIC8qIEljb24gc2l6ZSAqL1xuICAgICAgLS1tYXRlcmlhbC1pY29uLWZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2N1c3RvbS1zdHlsZT48ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLXR5cG9ncmFwaHlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIGJvZHkge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbWF0ZXJpYWwtZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgIH1cblxuICAgICAgaDEsXG4gICAgICBoMixcbiAgICAgIGgzLFxuICAgICAgaDQsXG4gICAgICBoNSxcbiAgICAgIGg2IHtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE7XG4gICAgICAgIG1hcmdpbi10b3A6IDEuNWVtO1xuICAgICAgfVxuXG4gICAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtaDMtZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxNWVtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgICAgIHRleHQtaW5kZW50OiAtMC4wN2VtO1xuICAgICAgfVxuXG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtaDQtZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjAxZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuNzVlbTtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC0wLjA3ZW07XG4gICAgICB9XG5cbiAgICAgIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1oNS1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjc1ZW07XG4gICAgICAgIHRleHQtaW5kZW50OiAtMC4wNWVtO1xuICAgICAgfVxuXG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtaDYtZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDFlbTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC43NWVtO1xuICAgICAgICB0ZXh0LWluZGVudDogLTAuMDVlbTtcbiAgICAgIH1cblxuICAgICAgaDUge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplKTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgICAgIHRleHQtaW5kZW50OiAtMC4wMjVlbTtcbiAgICAgIH1cblxuICAgICAgaDYge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLXNtYWxsLWZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjAxZW07XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDAuMjVlbTtcbiAgICAgICAgdGV4dC1pbmRlbnQ6IC0wLjAyNWVtO1xuICAgICAgfVxuXG4gICAgICBhLFxuICAgICAgYixcbiAgICAgIHN0cm9uZyB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG5cbmltcG9ydCAnLi9mb250LXJvYm90by5qcyc7XG4iLCJjbGFzcyBNYXRlcmlhbCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiAnMS4yLjMnO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgndmFhZGluLW1hdGVyaWFsLXN0eWxlcycsIE1hdGVyaWFsKTtcblxuZXhwb3J0IHsgTWF0ZXJpYWwgfTtcbiIsImNvbnN0IHAgPSBFbGVtZW50LnByb3RvdHlwZTtcbmNvbnN0IG1hdGNoZXMgPSBwLm1hdGNoZXMgfHwgcC5tYXRjaGVzU2VsZWN0b3IgfHwgcC5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcbiAgcC5tc01hdGNoZXNTZWxlY3RvciB8fCBwLm9NYXRjaGVzU2VsZWN0b3IgfHwgcC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbi8qKlxuICogYFBvbHltZXIuSXJvbkZvY3VzYWJsZXNIZWxwZXJgIHJlbGllcyBvbiBzb21lIFBvbHltZXItc3BlY2lmaWMgbGVnYWN5IEFQSSxcbiAqIGVzcGVjaWFsbHkgdGhlIGByb290YCBwcm9wZXJ0eSB3aGljaCBkb2VzIG5vdCBleGlzdCBmb3IgbmF0aXZlIHNoYWRvdyBET00uXG4gKiBUaGF0J3Mgd2h5IHdlIGhhdmUgdGhpcyBoZWxwZXIgaGVyZS5cbiAqIFNlZSBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pc3N1ZXMvMjgyXG4gKi9cbmNvbnN0IEZvY3VzYWJsZXNIZWxwZXIgPSB7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBzb3J0ZWQgYXJyYXkgb2YgdGFiYmFibGUgbm9kZXMsIGluY2x1ZGluZyB0aGUgcm9vdCBub2RlLlxuICAgKiBJdCBzZWFyY2hlcyB0aGUgdGFiYmFibGUgbm9kZXMgaW4gdGhlIGxpZ2h0IGFuZCBzaGFkb3cgZG9tIG9mIHRoZSBjaGlsZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xuICAgIC8vIElmIHRoZXJlIGlzIGF0IGxlYXN0IG9uZSBlbGVtZW50IHdpdGggdGFiaW5kZXggPiAwLCB3ZSBuZWVkIHRvIHNvcnRcbiAgICAvLyB0aGUgZmluYWwgYXJyYXkgYnkgdGFiaW5kZXguXG4gICAgY29uc3QgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIGEgZWxlbWVudCBpcyBmb2N1c2FibGUuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZvY3VzYWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIC8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYwMDE5NC80MjI4NzAzOlxuICAgIC8vIFRoZXJlIGlzbid0IGEgZGVmaW5pdGUgbGlzdCwgaXQncyB1cCB0byB0aGUgYnJvd3Nlci4gVGhlIG9ubHlcbiAgICAvLyBzdGFuZGFyZCB3ZSBoYXZlIGlzIERPTSBMZXZlbCAyIEhUTUxcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItSFRNTC9odG1sLmh0bWwsIGFjY29yZGluZyB0byB3aGljaCB0aGVcbiAgICAvLyBvbmx5IGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGZvY3VzKCkgbWV0aG9kIGFyZSBIVE1MSW5wdXRFbGVtZW50LFxuICAgIC8vIEhUTUxTZWxlY3RFbGVtZW50LCBIVE1MVGV4dEFyZWFFbGVtZW50IGFuZCBIVE1MQW5jaG9yRWxlbWVudC4gVGhpc1xuICAgIC8vIG5vdGFibHkgb21pdHMgSFRNTEJ1dHRvbkVsZW1lbnQgYW5kIEhUTUxBcmVhRWxlbWVudC4gUmVmZXJyaW5nIHRvIHRoZXNlXG4gICAgLy8gdGVzdHMgd2l0aCB0YWJiYWJsZXMgaW4gZGlmZmVyZW50IGJyb3dzZXJzXG4gICAgLy8gaHR0cDovL2FsbHlqcy5pby9kYXRhLXRhYmxlcy9mb2N1c2FibGUuaHRtbFxuXG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW5ub3QgYmUgZm9jdXNlZCBpZiB0aGV5IGhhdmUgW2Rpc2FibGVkXSBhdHRyaWJ1dGUuXG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb2JqZWN0JykpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICB9XG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW4gYmUgZm9jdXNlZCBldmVuIGlmIHRoZXkgaGF2ZSBbZGlzYWJsZWRdIGF0dHJpYnV0ZS5cbiAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKGVsZW1lbnQsICdhW2hyZWZdLCBhcmVhW2hyZWZdLCBpZnJhbWUsIFt0YWJpbmRleF0sIFtjb250ZW50RWRpdGFibGVdJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgYSBlbGVtZW50IGlzIHRhYmJhYmxlLiBUbyBiZSB0YWJiYWJsZSwgYSBlbGVtZW50IG11c3QgYmVcbiAgICogZm9jdXNhYmxlLCB2aXNpYmxlLCBhbmQgd2l0aCBhIHRhYmluZGV4ICE9PSAtMS5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGlzVGFiYmFibGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdGhpcy5pc0ZvY3VzYWJsZShlbGVtZW50KSAmJlxuICAgICAgICBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJzpub3QoW3RhYmluZGV4PVwiLTFcIl0pJykgJiZcbiAgICAgICAgdGhpcy5faXNWaXNpYmxlKGVsZW1lbnQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBub3JtYWxpemVkIGVsZW1lbnQgdGFiaW5kZXguIElmIG5vdCBmb2N1c2FibGUsIHJldHVybnMgLTEuXG4gICAqIEl0IGNoZWNrcyBmb3IgdGhlIGF0dHJpYnV0ZSBcInRhYmluZGV4XCIgaW5zdGVhZCBvZiB0aGUgZWxlbWVudCBwcm9wZXJ0eVxuICAgKiBgdGFiSW5kZXhgIHNpbmNlIGJyb3dzZXJzIGFzc2lnbiBkaWZmZXJlbnQgdmFsdWVzIHRvIGl0LlxuICAgKiBlLmcuIGluIEZpcmVmb3ggYDxkaXYgY29udGVudGVkaXRhYmxlPmAgaGFzIGB0YWJJbmRleCA9IC0xYFxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHshbnVtYmVyfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX25vcm1hbGl6ZWRUYWJJbmRleDogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIGlmICh0aGlzLmlzRm9jdXNhYmxlKGVsZW1lbnQpKSB7XG4gICAgICBjb25zdCB0YWJJbmRleCA9IGVsZW1lbnQuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpIHx8IDA7XG4gICAgICByZXR1cm4gTnVtYmVyKHRhYkluZGV4KTtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAobm9kZS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUgfHwgIXRoaXMuX2lzVmlzaWJsZShub2RlKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICBjb25zdCB0YWJJbmRleCA9IHRoaXMuX25vcm1hbGl6ZWRUYWJJbmRleChlbGVtZW50KTtcbiAgICBsZXQgbmVlZHNTb3J0ID0gdGFiSW5kZXggPiAwO1xuICAgIGlmICh0YWJJbmRleCA+PSAwKSB7XG4gICAgICByZXN1bHQucHVzaChlbGVtZW50KTtcbiAgICB9XG5cbiAgICAvLyBJbiBTaGFkb3dET00gdjEsIHRhYiBvcmRlciBpcyBhZmZlY3RlZCBieSB0aGUgb3JkZXIgb2YgZGlzdHJpYnV0aW9uLlxuICAgIC8vIEUuZy4gZ2V0VGFiYmFibGVOb2Rlcygjcm9vdCkgaW4gU2hhZG93RE9NIHYxIHNob3VsZCByZXR1cm4gWyNBLCAjQl07XG4gICAgLy8gaW4gU2hhZG93RE9NIHYwIHRhYiBvcmRlciBpcyBub3QgYWZmZWN0ZWQgYnkgdGhlIGRpc3RyaWJ1dGlvbiBvcmRlcixcbiAgICAvLyBpbiBmYWN0IGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIHJldHVybnMgWyNCLCAjQV0uXG4gICAgLy8gIDxkaXYgaWQ9XCJyb290XCI+XG4gICAgLy8gICA8IS0tIHNoYWRvdyAtLT5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImFcIj5cbiAgICAvLyAgICAgPHNsb3QgbmFtZT1cImJcIj5cbiAgICAvLyAgIDwhLS0gL3NoYWRvdyAtLT5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkFcIiBzbG90PVwiYVwiPlxuICAgIC8vICAgPGlucHV0IGlkPVwiQlwiIHNsb3Q9XCJiXCIgdGFiaW5kZXg9XCIxXCI+XG4gICAgLy8gIDwvZGl2PlxuICAgIGxldCBjaGlsZHJlbjtcbiAgICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgPT09ICdzbG90Jykge1xuICAgICAgY2hpbGRyZW4gPSBlbGVtZW50LmFzc2lnbmVkTm9kZXMoe2ZsYXR0ZW46IHRydWV9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIGNoaWxkcmVuID0gKGVsZW1lbnQuc2hhZG93Um9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICB9XG4gICAgaWYgKGNoaWxkcmVuKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIEVuc3VyZSBtZXRob2QgaXMgYWx3YXlzIGludm9rZWQgdG8gY29sbGVjdCB0YWJiYWJsZSBjaGlsZHJlbi5cbiAgICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGhhcyBgdmlzaWJpbGl0eTogaGlkZGVuYCBvciBgZGlzcGxheTogbm9uZWBcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9pc1Zpc2libGU6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAvLyBDaGVjayBpbmxpbmUgc3R5bGUgZmlyc3QgdG8gc2F2ZSBhIHJlLWZsb3cuIElmIGxvb2tzIGdvb2QsIGNoZWNrIGFsc29cbiAgICAvLyBjb21wdXRlZCBzdHlsZS5cbiAgICBsZXQgc3R5bGUgPSBlbGVtZW50LnN0eWxlO1xuICAgIGlmIChzdHlsZS52aXNpYmlsaXR5ICE9PSAnaGlkZGVuJyAmJiBzdHlsZS5kaXNwbGF5ICE9PSAnbm9uZScpIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCk7XG4gICAgICByZXR1cm4gKHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmIHN0eWxlLmRpc3BsYXkgIT09ICdub25lJyk7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogU29ydHMgYW4gYXJyYXkgb2YgdGFiYmFibGUgZWxlbWVudHMgYnkgdGFiaW5kZXguIFJldHVybnMgYSBuZXcgYXJyYXkuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHRhYmJhYmxlc1xuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zb3J0QnlUYWJJbmRleDogZnVuY3Rpb24odGFiYmFibGVzKSB7XG4gICAgLy8gSW1wbGVtZW50IGEgbWVyZ2Ugc29ydCBhcyBBcnJheS5wcm90b3R5cGUuc29ydCBkb2VzIGEgbm9uLXN0YWJsZSBzb3J0XG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvc29ydFxuICAgIGNvbnN0IGxlbiA9IHRhYmJhYmxlcy5sZW5ndGg7XG4gICAgaWYgKGxlbiA8IDIpIHtcbiAgICAgIHJldHVybiB0YWJiYWJsZXM7XG4gICAgfVxuICAgIGNvbnN0IHBpdm90ID0gTWF0aC5jZWlsKGxlbiAvIDIpO1xuICAgIGNvbnN0IGxlZnQgPSB0aGlzLl9zb3J0QnlUYWJJbmRleCh0YWJiYWJsZXMuc2xpY2UoMCwgcGl2b3QpKTtcbiAgICBjb25zdCByaWdodCA9IHRoaXMuX3NvcnRCeVRhYkluZGV4KHRhYmJhYmxlcy5zbGljZShwaXZvdCkpO1xuICAgIHJldHVybiB0aGlzLl9tZXJnZVNvcnRCeVRhYkluZGV4KGxlZnQsIHJpZ2h0KTtcbiAgfSxcblxuICAvKipcbiAgICogTWVyZ2Ugc29ydCBpdGVyYXRvciwgbWVyZ2VzIHRoZSB0d28gYXJyYXlzIGludG8gb25lLCBzb3J0ZWQgYnkgdGFiIGluZGV4LlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSBsZWZ0XG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJpZ2h0XG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21lcmdlU29ydEJ5VGFiSW5kZXg6IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgY29uc3QgcmVzdWx0ID0gW107XG4gICAgd2hpbGUgKChsZWZ0Lmxlbmd0aCA+IDApICYmIChyaWdodC5sZW5ndGggPiAwKSkge1xuICAgICAgaWYgKHRoaXMuX2hhc0xvd2VyVGFiT3JkZXIobGVmdFswXSwgcmlnaHRbMF0pKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKHJpZ2h0LnNoaWZ0KCkpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0LnB1c2gobGVmdC5zaGlmdCgpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gcmVzdWx0LmNvbmNhdChsZWZ0LCByaWdodCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgaWYgZWxlbWVudCBgYWAgaGFzIGxvd2VyIHRhYiBvcmRlciBjb21wYXJlZCB0byBlbGVtZW50IGBiYFxuICAgKiAoYm90aCBlbGVtZW50cyBhcmUgYXNzdW1lZCB0byBiZSBmb2N1c2FibGUgYW5kIHRhYmJhYmxlKS5cbiAgICogRWxlbWVudHMgd2l0aCB0YWJpbmRleCA9IDAgaGF2ZSBsb3dlciB0YWIgb3JkZXIgY29tcGFyZWQgdG8gZWxlbWVudHNcbiAgICogd2l0aCB0YWJpbmRleCA+IDAuXG4gICAqIElmIGJvdGggaGF2ZSBzYW1lIHRhYmluZGV4LCBpdCByZXR1cm5zIGZhbHNlLlxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gYVxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gYlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2hhc0xvd2VyVGFiT3JkZXI6IGZ1bmN0aW9uKGEsIGIpIHtcbiAgICAvLyBOb3JtYWxpemUgdGFiSW5kZXhlc1xuICAgIC8vIGUuZy4gaW4gRmlyZWZveCBgPGRpdiBjb250ZW50ZWRpdGFibGU+YCBoYXMgYHRhYkluZGV4ID0gLTFgXG4gICAgY29uc3QgYXRpID0gTWF0aC5tYXgoYS50YWJJbmRleCwgMCk7XG4gICAgY29uc3QgYnRpID0gTWF0aC5tYXgoYi50YWJJbmRleCwgMCk7XG4gICAgcmV0dXJuIChhdGkgPT09IDAgfHwgYnRpID09PSAwKSA/IGJ0aSA+IGF0aSA6IGF0aSA+IGJ0aTtcbiAgfVxufTtcblxuZXhwb3J0IHsgRm9jdXNhYmxlc0hlbHBlciB9O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE5IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuLyoqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBQb3NpdGlvbk1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBQb3NpdGlvbk1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVsZW1lbnQgbmV4dCB0byB3aGljaCB0aGlzIG92ZXJsYXkgc2hvdWxkIGJlIGFsaWduZWQuXG4gICAgICAgKiBUaGUgcG9zaXRpb24gb2YgdGhlIG92ZXJsYXkgcmVsYXRpdmUgdG8gdGhlIHBvc2l0aW9uVGFyZ2V0IGNhbiBiZSBhZGp1c3RlZFxuICAgICAgICogd2l0aCBwcm9wZXJ0aWVzIGBob3Jpem9udGFsQWxpZ25gLCBgdmVydGljYWxBbGlnbmAsIGBub0hvcml6b250YWxPdmVybGFwYFxuICAgICAgICogYW5kIGBub1ZlcnRpY2FsT3ZlcmxhcGAuXG4gICAgICAgKi9cbiAgICAgIHBvc2l0aW9uVGFyZ2V0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBgcG9zaXRpb25UYXJnZXRgIGlzIHNldCwgdGhpcyBwcm9wZXJ0eSBkZWZpbmVzIHdoZXRoZXIgdG8gYWxpZ24gdGhlIG92ZXJsYXknc1xuICAgICAgICogbGVmdCBvciByaWdodCBzaWRlIHRvIHRoZSB0YXJnZXQgZWxlbWVudCBieSBkZWZhdWx0LlxuICAgICAgICogUG9zc2libGUgdmFsdWVzIGFyZSBgc3RhcnRgIGFuZCBgZW5kYC5cbiAgICAgICAqIFJUTCBpcyB0YWtlbiBpbnRvIGFjY291bnQgd2hlbiBpbnRlcnByZXRpbmcgdGhlIHZhbHVlLlxuICAgICAgICogVGhlIG92ZXJsYXkgaXMgYXV0b21hdGljYWxseSBmbGlwcGVkIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIHdoZW4gaXQgZG9lc24ndCBmaXQgaW50b1xuICAgICAgICogdGhlIGRlZmF1bHQgc2lkZSBkZWZpbmVkIGJ5IHRoaXMgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIGhvcml6b250YWxBbGlnbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnc3RhcnQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYHBvc2l0aW9uVGFyZ2V0YCBpcyBzZXQsIHRoaXMgcHJvcGVydHkgZGVmaW5lcyB3aGV0aGVyIHRvIGFsaWduIHRoZSBvdmVybGF5J3NcbiAgICAgICAqIHRvcCBvciBib3R0b20gc2lkZSB0byB0aGUgdGFyZ2V0IGVsZW1lbnQgYnkgZGVmYXVsdC5cbiAgICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmUgYHRvcGAgYW5kIGBib3R0b21gLlxuICAgICAgICogVGhlIG92ZXJsYXkgaXMgYXV0b21hdGljYWxseSBmbGlwcGVkIHRvIHRoZSBvcHBvc2l0ZSBzaWRlIHdoZW4gaXQgZG9lc24ndCBmaXQgaW50b1xuICAgICAgICogdGhlIGRlZmF1bHQgc2lkZSBkZWZpbmVkIGJ5IHRoaXMgcHJvcGVydHkuXG4gICAgICAgKi9cbiAgICAgIHZlcnRpY2FsQWxpZ246IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ3RvcCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBgcG9zaXRpb25UYXJnZXRgIGlzIHNldCwgdGhpcyBwcm9wZXJ0eSBkZWZpbmVzIHdoZXRoZXIgdGhlIG92ZXJsYXkgc2hvdWxkIG92ZXJsYXBcbiAgICAgICAqIHRoZSB0YXJnZXQgZWxlbWVudCBpbiB0aGUgeC1heGlzLCBvciBiZSBwb3NpdGlvbmVkIHJpZ2h0IG5leHQgdG8gaXQuXG4gICAgICAgKi9cbiAgICAgIG5vSG9yaXpvbnRhbE92ZXJsYXA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gYHBvc2l0aW9uVGFyZ2V0YCBpcyBzZXQsIHRoaXMgcHJvcGVydHkgZGVmaW5lcyB3aGV0aGVyIHRoZSBvdmVybGF5IHNob3VsZCBvdmVybGFwXG4gICAgICAgKiB0aGUgdGFyZ2V0IGVsZW1lbnQgaW4gdGhlIHktYXhpcywgb3IgYmUgcG9zaXRpb25lZCByaWdodCBhYm92ZS9iZWxvdyBpdC5cbiAgICAgICAqL1xuICAgICAgbm9WZXJ0aWNhbE92ZXJsYXA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW2BfX3Bvc2l0aW9uU2V0dGluZ3NDaGFuZ2VkKHBvc2l0aW9uVGFyZ2V0LCBob3Jpem9udGFsQWxpZ24sIHZlcnRpY2FsQWxpZ24sXG4gICAgICBub0hvcml6b250YWxPdmVybGFwLCBub1ZlcnRpY2FsT3ZlcmxhcClgXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICBjb25zdCBib3VuZFVwZGF0ZVBvc2l0aW9uID0gdGhpcy5fdXBkYXRlUG9zaXRpb24uYmluZCh0aGlzKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignb3BlbmVkLWNoYW5nZWQnLCBlID0+IHtcbiAgICAgIGNvbnN0IGZ1bmMgPSBlLmRldGFpbC52YWx1ZSA/ICdhZGRFdmVudExpc3RlbmVyJyA6ICdyZW1vdmVFdmVudExpc3RlbmVyJztcbiAgICAgIHdpbmRvd1tmdW5jXSgnc2Nyb2xsJywgYm91bmRVcGRhdGVQb3NpdGlvbik7XG4gICAgICB3aW5kb3dbZnVuY10oJ3Jlc2l6ZScsIGJvdW5kVXBkYXRlUG9zaXRpb24pO1xuXG4gICAgICBpZiAoZS5kZXRhaWwudmFsdWUpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9fcG9zaXRpb25TZXR0aW5nc0NoYW5nZWQoKSB7XG4gICAgdGhpcy5fdXBkYXRlUG9zaXRpb24oKTtcbiAgfVxuXG4gIF91cGRhdGVQb3NpdGlvbigpIHtcbiAgICBpZiAoIXRoaXMucG9zaXRpb25UYXJnZXQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgY29tcHV0ZWRTdHlsZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcyk7XG4gICAgaWYgKCF0aGlzLl9fbWFyZ2lucykge1xuICAgICAgdGhpcy5fX21hcmdpbnMgPSB7fTtcbiAgICAgIFsndG9wJywgJ2JvdHRvbScsICdsZWZ0JywgJ3JpZ2h0J10uZm9yRWFjaChwcm9wTmFtZSA9PiB7XG4gICAgICAgIHRoaXMuX19tYXJnaW5zW3Byb3BOYW1lXSA9IHBhcnNlSW50KGNvbXB1dGVkU3R5bGVbcHJvcE5hbWVdLCAxMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgY29uc3QgcnRsID0gY29tcHV0ZWRTdHlsZS5kaXJlY3Rpb24gPT09ICdydGwnO1xuXG4gICAgY29uc3QgdGFyZ2V0UmVjdCA9IHRoaXMucG9zaXRpb25UYXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cbiAgICBjb25zdCBob3Jpem9udGFsUHJvcHMgPSB0aGlzLl9fY2FsY3VsYXRlSG9yaXpvbnRhbFBvc2l0aW9uKHRhcmdldFJlY3QsIHJ0bCk7XG4gICAgY29uc3QgdmVydGljYWxQcm9wcyA9IHRoaXMuX19jYWxjdWxhdGVWZXJ0aWNhbFBvc2l0aW9uKHRhcmdldFJlY3QpO1xuXG4gICAgY29uc3QgcG9zaXRpb25Qcm9wcyA9IE9iamVjdC5hc3NpZ24oe30sIGhvcml6b250YWxQcm9wcywgdmVydGljYWxQcm9wcyk7XG4gICAgdGhpcy5fX2RvU2V0UG9zaXRpb24ocG9zaXRpb25Qcm9wcywgcnRsKTtcbiAgfVxuXG4gIF9fY2FsY3VsYXRlSG9yaXpvbnRhbFBvc2l0aW9uKHRhcmdldFJlY3QsIHJ0bCkge1xuICAgIGNvbnN0IHByb3BOYW1lcyA9IHtcbiAgICAgIHN0YXJ0OiAnbGVmdCcsXG4gICAgICBlbmQ6ICdyaWdodCdcbiAgICB9O1xuXG4gICAgLy8gVXNpbmcgcHJldmlvdXMgc2l6ZSB0byBmaXggYSBjYXNlIHdoZXJlIHdpbmRvdyByZXNpemUgbWF5IGNhdXNlIHRoZSBvdmVybGF5IHRvIGJlIHNxdWVlemVkXG4gICAgLy8gc21hbGxlciB0aGFuIGl0cyBjdXJyZW50IHNwYWNlIGJlZm9yZSB0aGUgZml0LWNhbGN1bGF0aW9ucy5cbiAgICBjb25zdCBjb250ZW50V2lkdGggPSBNYXRoLm1heCgodGhpcy5fX29sZENvbnRlbnRXaWR0aCB8fCAwKSwgdGhpcy4kLm92ZXJsYXkub2Zmc2V0V2lkdGgpO1xuICAgIHRoaXMuX19vbGRDb250ZW50V2lkdGggPSB0aGlzLiQub3ZlcmxheS5vZmZzZXRXaWR0aDtcblxuICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICBjb25zdCBkZWZhdWx0QWxpZ25MZWZ0ID0gKCFydGwgJiYgdGhpcy5ob3Jpem9udGFsQWxpZ24gPT09ICdzdGFydCcpIHx8IChydGwgJiYgdGhpcy5ob3Jpem9udGFsQWxpZ24gPT09ICdlbmQnKTtcbiAgICBjb25zdCBjdXJyZW50QWxpZ25MZWZ0ID0gISF0aGlzLnN0eWxlLmxlZnQ7XG4gICAgcmV0dXJuIFBvc2l0aW9uTWl4aW4uX19jYWxjdWxhdGVQb3NpdGlvbkluT25lRGltZW5zaW9uKHRhcmdldFJlY3QsIGNvbnRlbnRXaWR0aCxcbiAgICAgIHZpZXdwb3J0V2lkdGgsIHRoaXMuX19tYXJnaW5zLCBkZWZhdWx0QWxpZ25MZWZ0LCBjdXJyZW50QWxpZ25MZWZ0LCB0aGlzLm5vSG9yaXpvbnRhbE92ZXJsYXAsIHByb3BOYW1lcyk7XG4gIH1cblxuICBfX2NhbGN1bGF0ZVZlcnRpY2FsUG9zaXRpb24odGFyZ2V0UmVjdCkge1xuICAgIGNvbnN0IHByb3BOYW1lcyA9IHtcbiAgICAgIHN0YXJ0OiAndG9wJyxcbiAgICAgIGVuZDogJ2JvdHRvbSdcbiAgICB9O1xuXG4gICAgLy8gVXNpbmcgcHJldmlvdXMgc2l6ZSB0byBmaXggYSBjYXNlIHdoZXJlIHdpbmRvdyByZXNpemUgbWF5IGNhdXNlIHRoZSBvdmVybGF5IHRvIGJlIHNxdWVlemVkXG4gICAgLy8gc21hbGxlciB0aGFuIGl0cyBjdXJyZW50IHNwYWNlIGJlZm9yZSB0aGUgZml0LWNhbGN1bGF0aW9ucy5cbiAgICBjb25zdCBjb250ZW50SGVpZ2h0ID0gTWF0aC5tYXgoKHRoaXMuX19vbGRDb250ZW50SGVpZ2h0IHx8IDApLCB0aGlzLiQub3ZlcmxheS5vZmZzZXRIZWlnaHQpO1xuICAgIHRoaXMuX19vbGRDb250ZW50SGVpZ2h0ID0gdGhpcy4kLm92ZXJsYXkub2Zmc2V0SGVpZ2h0O1xuXG4gICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgIGNvbnN0IGRlZmF1bHRBbGlnblRvcCA9IHRoaXMudmVydGljYWxBbGlnbiA9PT0gJ3RvcCc7XG4gICAgY29uc3QgY3VycmVudEFsaWduVG9wID0gISF0aGlzLnN0eWxlLnRvcDtcbiAgICByZXR1cm4gUG9zaXRpb25NaXhpbi5fX2NhbGN1bGF0ZVBvc2l0aW9uSW5PbmVEaW1lbnNpb24odGFyZ2V0UmVjdCwgY29udGVudEhlaWdodCxcbiAgICAgIHZpZXdwb3J0SGVpZ2h0LCB0aGlzLl9fbWFyZ2lucywgZGVmYXVsdEFsaWduVG9wLCBjdXJyZW50QWxpZ25Ub3AsIHRoaXMubm9WZXJ0aWNhbE92ZXJsYXAsIHByb3BOYW1lcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbiBvYmplY3Qgd2l0aCBDU1MgcG9zaXRpb24gcHJvcGVydGllcyB0byBzZXQsXG4gICAqIGUuZy4geyB0b3A6IFwiMTAwcHhcIiwgYm90dG9tOiBcIlwiIH1cbiAgICovXG4gIHN0YXRpYyBfX2NhbGN1bGF0ZVBvc2l0aW9uSW5PbmVEaW1lbnNpb24odGFyZ2V0UmVjdCwgY29udGVudFNpemUsIHZpZXdwb3J0U2l6ZSwgbWFyZ2lucyxcbiAgICBkZWZhdWx0QWxpZ25TdGFydCwgY3VycmVudEFsaWduU3RhcnQsIG5vT3ZlcmxhcCwgcHJvcE5hbWVzKSB7XG5cbiAgICBjb25zdCBzcGFjZUZvclN0YXJ0QWxpZ25tZW50ID0gdmlld3BvcnRTaXplIC0gdGFyZ2V0UmVjdFtub092ZXJsYXAgPyBwcm9wTmFtZXMuZW5kIDogcHJvcE5hbWVzLnN0YXJ0XSAtIG1hcmdpbnNbcHJvcE5hbWVzLmVuZF07XG4gICAgY29uc3Qgc3BhY2VGb3JFbmRBbGlnbm1lbnQgPSB0YXJnZXRSZWN0W25vT3ZlcmxhcCA/IHByb3BOYW1lcy5zdGFydCA6IHByb3BOYW1lcy5lbmRdIC0gbWFyZ2luc1twcm9wTmFtZXMuc3RhcnRdO1xuXG4gICAgY29uc3Qgc3BhY2VGb3JEZWZhdWx0QWxpZ25tZW50ID0gZGVmYXVsdEFsaWduU3RhcnQgPyBzcGFjZUZvclN0YXJ0QWxpZ25tZW50IDogc3BhY2VGb3JFbmRBbGlnbm1lbnQ7XG4gICAgY29uc3Qgc3BhY2VGb3JPdGhlckFsaWdubWVudCA9IGRlZmF1bHRBbGlnblN0YXJ0ID8gc3BhY2VGb3JFbmRBbGlnbm1lbnQgOiBzcGFjZUZvclN0YXJ0QWxpZ25tZW50O1xuXG4gICAgY29uc3Qgc2hvdWxkR29Ub0RlZmF1bHRTaWRlID0gc3BhY2VGb3JEZWZhdWx0QWxpZ25tZW50ID4gc3BhY2VGb3JPdGhlckFsaWdubWVudCB8fCBzcGFjZUZvckRlZmF1bHRBbGlnbm1lbnQgPiBjb250ZW50U2l6ZTtcblxuICAgIGNvbnN0IHNob3VsZEFsaWduU3RhcnQgPSBkZWZhdWx0QWxpZ25TdGFydCA9PT0gc2hvdWxkR29Ub0RlZmF1bHRTaWRlO1xuXG4gICAgY29uc3QgY3NzUHJvcE5hbWVUb1NldCA9IHNob3VsZEFsaWduU3RhcnQgPyBwcm9wTmFtZXMuc3RhcnQgOiBwcm9wTmFtZXMuZW5kO1xuICAgIGNvbnN0IGNzc1Byb3BOYW1lVG9DbGVhciA9IHNob3VsZEFsaWduU3RhcnQgPyBwcm9wTmFtZXMuZW5kIDogcHJvcE5hbWVzLnN0YXJ0O1xuXG4gICAgY29uc3QgY3NzUHJvcFZhbHVlVG9TZXQgPSAoc2hvdWxkQWxpZ25TdGFydCA/XG4gICAgICB0YXJnZXRSZWN0W25vT3ZlcmxhcCA/IHByb3BOYW1lcy5lbmQgOiBwcm9wTmFtZXMuc3RhcnRdIDpcbiAgICAgIHZpZXdwb3J0U2l6ZSAtIHRhcmdldFJlY3Rbbm9PdmVybGFwID8gcHJvcE5hbWVzLnN0YXJ0IDogcHJvcE5hbWVzLmVuZF1cbiAgICApICsgJ3B4JztcblxuICAgIGNvbnN0IHByb3BzID0ge307XG4gICAgcHJvcHNbY3NzUHJvcE5hbWVUb1NldF0gPSBjc3NQcm9wVmFsdWVUb1NldDtcbiAgICBwcm9wc1tjc3NQcm9wTmFtZVRvQ2xlYXJdID0gJyc7XG4gICAgcmV0dXJuIHByb3BzO1xuICB9XG5cbiAgX19kb1NldFBvc2l0aW9uKGNzc1Byb3BzLCBydGwpIHtcbiAgICBPYmplY3QuYXNzaWduKHRoaXMuc3R5bGUsIGNzc1Byb3BzKTtcblxuICAgIGNvbnN0IGFsaWduU3RhcnQgPSAoIXJ0bCAmJiBjc3NQcm9wcy5sZWZ0KSB8fCAocnRsICYmIGNzc1Byb3BzLnJpZ2h0KTtcbiAgICB0aGlzLnN0eWxlLmFsaWduSXRlbXMgPSBhbGlnblN0YXJ0ID8gJ2ZsZXgtc3RhcnQnIDogJ2ZsZXgtZW5kJztcblxuICAgIHRoaXMuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBjc3NQcm9wcy50b3AgPyAnZmxleC1zdGFydCcgOiAnZmxleC1lbmQnO1xuICB9XG5cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgdGVtcGxhdGl6ZSB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3RlbXBsYXRpemUuanMnO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5pbXBvcnQgeyBGbGF0dGVuZWROb2Rlc09ic2VydmVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZmxhdHRlbmVkLW5vZGVzLW9ic2VydmVyLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gJy4vdmFhZGluLWZvY3VzYWJsZXMtaGVscGVyLmpzJztcbmltcG9ydCB7IFBvc2l0aW9uTWl4aW4gfSBmcm9tICcuL3ZhYWRpbi1vdmVybGF5LXBvc2l0aW9uLW1peGluLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5sZXQgb3ZlcmxheUNvbnRlbnRDb3VudGVyID0gMDtcbmNvbnN0IG92ZXJsYXlDb250ZW50Q2FjaGUgPSB7fTtcblxuY29uc3QgY3JlYXRlT3ZlcmxheUNvbnRlbnQgPSAoY3NzVGV4dCkgPT4ge1xuICBjb25zdCBpcyA9IG92ZXJsYXlDb250ZW50Q2FjaGVbY3NzVGV4dF0gfHwgcHJvY2Vzc092ZXJsYXlTdHlsZXMoY3NzVGV4dCk7XG4gIHJldHVybiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGlzKTtcbn07XG5cbmNvbnN0IHByb2Nlc3NPdmVybGF5U3R5bGVzID0gKGNzc1RleHQpID0+IHtcbiAgb3ZlcmxheUNvbnRlbnRDb3VudGVyKys7XG4gIGNvbnN0IGlzID0gYHZhYWRpbi1vdmVybGF5LWNvbnRlbnQtJHtvdmVybGF5Q29udGVudENvdW50ZXJ9YDtcblxuICBjb25zdCBzdHlsZWRUZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4gIGNvbnN0IHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgc3R5bGUudGV4dENvbnRlbnQgPSAnOmhvc3QgeyBkaXNwbGF5OiBibG9jazsgfScgKyBjc3NUZXh0O1xuICBzdHlsZWRUZW1wbGF0ZS5jb250ZW50LmFwcGVuZENoaWxkKHN0eWxlKTtcblxuICBpZiAod2luZG93LlNoYWR5Q1NTKSB7XG4gICAgd2luZG93LlNoYWR5Q1NTLnByZXBhcmVUZW1wbGF0ZShzdHlsZWRUZW1wbGF0ZSwgaXMpO1xuICB9XG5cbiAgLy8gTk9URShwbGF0b3NoYSk6IEhhdmUgdG8gdXNlIGFuIGF3a3dhcmQgSUlGRSByZXR1cm5pbmcgY2xhc3MgaGVyZVxuICAvLyB0byBwcmV2ZW50IHRoaXMgY2xhc3MgZnJvbSBzaG93aW5nIHVwIGluIGFuYWx5c2lzLmpzb24gJiBBUEkgZG9jcy5cbiAgLyoqIEBwcml2YXRlICovXG4gIGNvbnN0IGtsYXNzID0gKCgpID0+IGNsYXNzIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgICByZXR1cm4gaXM7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICBzdXBlcigpO1xuXG4gICAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgICB0aGlzLmF0dGFjaFNoYWRvdyh7bW9kZTogJ29wZW4nfSk7XG4gICAgICAgIHRoaXMuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChkb2N1bWVudC5pbXBvcnROb2RlKHN0eWxlZFRlbXBsYXRlLmNvbnRlbnQsIHRydWUpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgIGlmICh3aW5kb3cuU2hhZHlDU1MpIHtcbiAgICAgICAgd2luZG93LlNoYWR5Q1NTLnN0eWxlRWxlbWVudCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0pKCk7XG5cbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKGtsYXNzLmlzLCBrbGFzcyk7XG5cbiAgb3ZlcmxheUNvbnRlbnRDYWNoZVtjc3NUZXh0XSA9IGlzO1xuICByZXR1cm4gaXM7XG59O1xuXG4vKipcbiAqXG4gKiBgPHZhYWRpbi1vdmVybGF5PmAgaXMgYSBXZWIgQ29tcG9uZW50IGZvciBjcmVhdGluZyBvdmVybGF5cy4gVGhlIGNvbnRlbnQgb2YgdGhlIG92ZXJsYXlcbiAqIGNhbiBiZSBwb3B1bGF0ZWQgaW4gdHdvIHdheXM6IGltcGVyYXRpdmVseSBieSB1c2luZyByZW5kZXJlciBjYWxsYmFjayBmdW5jdGlvbiBhbmRcbiAqIGRlY2xhcmF0aXZlbHkgYnkgdXNpbmcgUG9seW1lcidzIFRlbXBsYXRlcy5cbiAqXG4gKiAjIyMgUmVuZGVyaW5nXG4gKlxuICogQnkgZGVmYXVsdCwgdGhlIG92ZXJsYXkgdXNlcyB0aGUgY29udGVudCBwcm92aWRlZCBieSB1c2luZyB0aGUgcmVuZGVyZXIgY2FsbGJhY2sgZnVuY3Rpb24uXG4gKlxuICogVGhlIHJlbmRlcmVyIGZ1bmN0aW9uIHByb3ZpZGVzIGByb290YCwgYG93bmVyYCwgYG1vZGVsYCBhcmd1bWVudHMgd2hlbiBhcHBsaWNhYmxlLlxuICogR2VuZXJhdGUgRE9NIGNvbnRlbnQgYnkgdXNpbmcgYG1vZGVsYCBvYmplY3QgcHJvcGVydGllcyBpZiBuZWVkZWQsIGFwcGVuZCBpdCB0byB0aGUgYHJvb3RgXG4gKiBlbGVtZW50IGFuZCBjb250cm9sIHRoZSBzdGF0ZSBvZiB0aGUgaG9zdCBlbGVtZW50IGJ5IGFjY2Vzc2luZyBgb3duZXJgLiBCZWZvcmUgZ2VuZXJhdGluZyBuZXdcbiAqIGNvbnRlbnQsIHVzZXJzIGFyZSBhYmxlIHRvIGNoZWNrIGlmIHRoZXJlIGlzIGFscmVhZHkgY29udGVudCBpbiBgcm9vdGAgZm9yIHJldXNpbmcgaXQuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1vdmVybGF5IGlkPVwib3ZlcmxheVwiPjwvdmFhZGluLW92ZXJsYXk+XG4gKiBgYGBcbiAqIGBgYGpzXG4gKiBjb25zdCBvdmVybGF5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKTtcbiAqIG92ZXJsYXkucmVuZGVyZXIgPSBmdW5jdGlvbihyb290KSB7XG4gKiAgcm9vdC50ZXh0Q29udGVudCA9IFwiT3ZlcmxheSBjb250ZW50XCI7XG4gKiB9O1xuICogYGBgXG4gKlxuICogUmVuZGVyZXIgaXMgY2FsbGVkIG9uIHRoZSBvcGVuaW5nIG9mIHRoZSBvdmVybGF5IGFuZCBlYWNoIHRpbWUgdGhlIHJlbGF0ZWQgbW9kZWwgaXMgdXBkYXRlZC5cbiAqIERPTSBnZW5lcmF0ZWQgZHVyaW5nIHRoZSByZW5kZXJlciBjYWxsIGNhbiBiZSByZXVzZWRcbiAqIGluIHRoZSBuZXh0IHJlbmRlcmVyIGNhbGwgYW5kIHdpbGwgYmUgcHJvdmlkZWQgd2l0aCB0aGUgYHJvb3RgIGFyZ3VtZW50LlxuICogT24gZmlyc3QgY2FsbCBpdCB3aWxsIGJlIGVtcHR5LlxuICpcbiAqICoqTk9URToqKiB3aGVuIHRoZSByZW5kZXJlciBwcm9wZXJ0eSBpcyBkZWZpbmVkLCB0aGUgYDx0ZW1wbGF0ZT5gIGNvbnRlbnQgaXMgbm90IHVzZWQuXG4gKlxuICogIyMjIFRlbXBsYXRpbmdcbiAqXG4gKiBBbHRlcm5hdGl2ZWx5LCB0aGUgY29udGVudCBjYW4gYmUgcHJvdmlkZWQgd2l0aCBQb2x5bWVyIFRlbXBsYXRlLlxuICogT3ZlcmxheSBmaW5kcyB0aGUgZmlyc3QgY2hpbGQgdGVtcGxhdGUgYW5kIHVzZXMgdGhhdCBpbiBjYXNlIHJlbmRlcmVyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gKiBpcyBub3QgcHJvdmlkZWQuIFlvdSBjYW4gYWxzbyBzZXQgYSBjdXN0b20gdGVtcGxhdGUgdXNpbmcgdGhlIGB0ZW1wbGF0ZWAgcHJvcGVydHkuXG4gKlxuICogQWZ0ZXIgdGhlIGNvbnRlbnQgZnJvbSB0aGUgdGVtcGxhdGUgaXMgc3RhbXBlZCwgdGhlIGBjb250ZW50YCBwcm9wZXJ0eVxuICogcG9pbnRzIHRvIHRoZSBjb250ZW50IGNvbnRhaW5lci5cbiAqXG4gKiBUaGUgb3ZlcmxheSBwcm92aWRlcyBgZm9yd2FyZEhvc3RQcm9wYCB3aGVuIGNhbGxpbmdcbiAqIGBQb2x5bWVyLlRlbXBsYXRpemUudGVtcGxhdGl6ZWAgZm9yIHRoZSB0ZW1wbGF0ZSwgc28gdGhhdCB0aGUgYmluZGluZ3NcbiAqIGZyb20gdGhlIHBhcmVudCBzY29wZSBwcm9wYWdhdGUgdG8gdGhlIGNvbnRlbnQuICBZb3UgY2FuIGFsc28gcGFzc1xuICogY3VzdG9tIGBpbnN0YW5jZVByb3BzYCBvYmplY3QgdXNpbmcgdGhlIGBpbnN0YW5jZVByb3BzYCBwcm9wZXJ0eS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLW92ZXJsYXk+XG4gKiAgIDx0ZW1wbGF0ZT5PdmVybGF5IGNvbnRlbnQ8L3RlbXBsYXRlPlxuICogPC92YWFkaW4tb3ZlcmxheT5cbiAqIGBgYFxuICpcbiAqICoqTk9URToqKiB3aGVuIHVzaW5nIGBpbnN0YW5jZVByb3BzYDogYmVjYXVzZSBvZiB0aGUgUG9seW1lciBsaW1pdGF0aW9uLFxuICogZXZlcnkgdGVtcGxhdGUgY2FuIG9ubHkgYmUgdGVtcGxhdGl6ZWQgb25jZSwgc28gaXQgaXMgaW1wb3J0YW50XG4gKiB0byBzZXQgYGluc3RhbmNlUHJvcHNgIGJlZm9yZSB0aGUgYHRlbXBsYXRlYCBpcyBhc3NpZ25lZCB0byB0aGUgb3ZlcmxheS5cbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFRvIHN0eWxlIHRoZSBvdmVybGF5IGNvbnRlbnQsIHVzZSBzdHlsZXMgaW4gdGhlIHBhcmVudCBzY29wZTpcbiAqXG4gKiAtIElmIHRoZSBvdmVybGF5IGlzIHVzZWQgaW4gYSBjb21wb25lbnQsIHRoZW4gdGhlIGNvbXBvbmVudCBzdHlsZXNcbiAqICAgYXBwbHkgdGhlIG92ZXJsYXkgY29udGVudC5cbiAqIC0gSWYgdGhlIG92ZXJsYXkgaXMgdXNlZCBpbiB0aGUgZ2xvYmFsIERPTSBzY29wZSwgdGhlbiBnbG9iYWwgc3R5bGVzXG4gKiAgIGFwcGx5IHRvIHRoZSBvdmVybGF5IGNvbnRlbnQuXG4gKlxuICogU2VlIGV4YW1wbGVzIGZvciBzdHlsaW5nIHRoZSBvdmVybGF5IGNvbnRlbnQgaW4gdGhlIGxpdmUgZGVtb3MuXG4gKlxuICogVGhlIGZvbGxvd2luZyBTaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmcgdGhlIG92ZXJsYXkgY29tcG9uZW50IGl0c2VsZjpcbiAqXG4gKiBQYXJ0IG5hbWUgIHwgRGVzY3JpcHRpb25cbiAqIC0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXxcbiAqIGBiYWNrZHJvcGAgfCBCYWNrZHJvcCBvZiB0aGUgb3ZlcmxheVxuICogYG92ZXJsYXlgICB8IENvbnRhaW5lciBmb3IgcG9zaXRpb24vc2l6aW5nL2FsaWdubWVudCBvZiB0aGUgY29udGVudFxuICogYGNvbnRlbnRgICB8IENvbnRlbnQgb2YgdGhlIG92ZXJsYXlcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgfCBEZXNjcmlwdGlvbiB8IFBhcnRcbiAqIC0tLXwtLS18LS0tXG4gKiBgb3BlbmluZ2AgfCBBcHBsaWVkIGp1c3QgYWZ0ZXIgdGhlIG92ZXJsYXkgaXMgYXR0YWNoZWQgdG8gdGhlIERPTS4gWW91IGNhbiBhcHBseSBhIENTUyBAa2V5ZnJhbWUgYW5pbWF0aW9uIGZvciB0aGlzIHN0YXRlLiB8IGA6aG9zdGBcbiAqIGBjbG9zaW5nYCB8IEFwcGxpZWQganVzdCBiZWZvcmUgdGhlIG92ZXJsYXkgaXMgZGV0YWNoZWQgZnJvbSB0aGUgRE9NLiBZb3UgY2FuIGFwcGx5IGEgQ1NTIEBrZXlmcmFtZSBhbmltYXRpb24gZm9yIHRoaXMgc3RhdGUuIHwgYDpob3N0YFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgY3VzdG9tIENTUyBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogQ3VzdG9tIENTUyBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdCB2YWx1ZVxuICogLS0tfC0tLXwtLS1cbiAqIGAtLXZhYWRpbi1vdmVybGF5LXZpZXdwb3J0LWJvdHRvbWAgfCBCb3R0b20gb2Zmc2V0IG9mIHRoZSB2aXNpYmxlIHZpZXdwb3J0IGFyZWEgfCBgMGAgb3IgZGV0ZWN0ZWQgb2Zmc2V0XG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAbWl4ZXMgVmFhZGluLk92ZXJsYXkuUG9zaXRpb25NaXhpblxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKi9cbmNsYXNzIE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgVGhlbWFibGVNaXhpbihcbiAgUG9zaXRpb25NaXhpbihcbiAgICBQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgRGVzcGl0ZSBvZiB3aGF0IHRoZSBuYW1lcyBzYXksIDx2YWFkaW4tb3ZlcmxheT4gaXMganVzdCBhIGNvbnRhaW5lclxuICAgICAgICAgIGZvciBwb3NpdGlvbi9zaXppbmcvYWxpZ25tZW50LiBUaGUgYWN0dWFsIG92ZXJsYXkgaXMgdGhlIG92ZXJsYXkgcGFydC5cbiAgICAgICAgKi9cblxuICAgICAgICAvKlxuICAgICAgICAgIERlZmF1bHQgcG9zaXRpb24gY29uc3RyYWludHM6IHRoZSBlbnRpcmUgdmlld3BvcnQuIE5vdGU6IHRoZW1lcyBjYW5cbiAgICAgICAgICBvdmVycmlkZSB0aGlzIHRvIGludHJvZHVjZSBnYXBzIGJldHdlZW4gdGhlIG92ZXJsYXkgYW5kIHRoZSB2aWV3cG9ydC5cbiAgICAgICAgKi9cbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiB2YXIoLS12YWFkaW4tb3ZlcmxheS12aWV3cG9ydC1ib3R0b20pO1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIC8qIFVzZSBmbGV4Ym94IGFsaWdubWVudCBmb3IgdGhlIG92ZXJsYXkgcGFydC4gKi9cbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgLyogbWFrZXMgZHJvcGRvd25zIHNpemluZyBlYXNpZXIgKi9cbiAgICAgICAgLyogQWxpZ24gdG8gY2VudGVyIGJ5IGRlZmF1bHQuICovXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG4gICAgICAgIC8qIEFsbG93IGNlbnRlcmluZyB3aGVuIG1heC13aWR0aC9tYXgtaGVpZ2h0IGFwcGxpZXMuICovXG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICAvKiBUaGUgaG9zdCBpcyBub3QgY2xpY2thYmxlLCBvbmx5IHRoZSBvdmVybGF5IHBhcnQgaXMuICovXG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuXG4gICAgICAgIC8qIFJlbW92ZSB0YXAgaGlnaGxpZ2h0IG9uIHRvdWNoIGRldmljZXMuICovXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgLyogQ1NTIEFQSSBmb3IgaG9zdCAqL1xuICAgICAgICAtLXZhYWRpbi1vdmVybGF5LXZpZXdwb3J0LWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pLFxuICAgICAgOmhvc3QoOm5vdChbb3BlbmVkXSk6bm90KFtjbG9zaW5nXSkpIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgIG92ZXJmbG93OiBhdXRvO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcblxuICAgICAgICAvKiBQcmV2ZW50IG92ZXJmbG93aW5nIHRoZSBob3N0IGluIE1TSUUgMTEgKi9cbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogaW5pdGlhbDsgLyogcmVlbmFibGUgdGFwIGhpZ2hsaWdodCBpbnNpZGUgKi9cbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJiYWNrZHJvcFwiXSB7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cImJhY2tkcm9wXCIgcGFydD1cImJhY2tkcm9wXCIgaGlkZGVuXFwkPVwie3shd2l0aEJhY2tkcm9wfX1cIj48L2Rpdj5cbiAgICA8ZGl2IHBhcnQ9XCJvdmVybGF5XCIgaWQ9XCJvdmVybGF5XCIgdGFiaW5kZXg9XCIwXCI+XG4gICAgICA8ZGl2IHBhcnQ9XCJjb250ZW50XCIgaWQ9XCJjb250ZW50XCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tb3ZlcmxheSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT3duZXIgZWxlbWVudCBwYXNzZWQgd2l0aCByZW5kZXJlciBmdW5jdGlvblxuICAgICAgICovXG4gICAgICBvd25lcjogRWxlbWVudCxcblxuICAgICAgLyoqXG4gICAgICAgKiBDdXN0b20gZnVuY3Rpb24gZm9yIHJlbmRlcmluZyB0aGUgY29udGVudCBvZiB0aGUgb3ZlcmxheS5cbiAgICAgICAqIFJlY2VpdmVzIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAqXG4gICAgICAgKiAtIGByb290YCBUaGUgcm9vdCBjb250YWluZXIgRE9NIGVsZW1lbnQuIEFwcGVuZCB5b3VyIGNvbnRlbnQgdG8gaXQuXG4gICAgICAgKiAtIGBvd25lcmAgVGhlIGhvc3QgZWxlbWVudCBvZiB0aGUgcmVuZGVyZXIgZnVuY3Rpb24uXG4gICAgICAgKiAtIGBtb2RlbGAgVGhlIG9iamVjdCB3aXRoIHRoZSBwcm9wZXJ0aWVzIHJlbGF0ZWQgd2l0aCByZW5kZXJpbmcuXG4gICAgICAgKi9cbiAgICAgIHJlbmRlcmVyOiBGdW5jdGlvbixcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdGVtcGxhdGUgb2YgdGhlIG92ZXJsYXkgY29udGVudC5cbiAgICAgICAqL1xuICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT3B0aW9uYWwgYXJndW1lbnQgZm9yIGBQb2x5bWVyLlRlbXBsYXRpemUudGVtcGxhdGl6ZWAuXG4gICAgICAgKi9cbiAgICAgIGluc3RhbmNlUHJvcHM6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFJlZmVyZW5jZXMgdGhlIGNvbnRlbnQgY29udGFpbmVyIGFmdGVyIHRoZSB0ZW1wbGF0ZSBpcyBzdGFtcGVkLlxuICAgICAgICovXG4gICAgICBjb250ZW50OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICB3aXRoQmFja2Ryb3A6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT2JqZWN0IHdpdGggcHJvcGVydGllcyB0aGF0IGlzIHBhc3NlZCB0byBgcmVuZGVyZXJgIGZ1bmN0aW9uXG4gICAgICAgKi9cbiAgICAgIG1vZGVsOiBPYmplY3QsXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiB0cnVlIHRoZSBvdmVybGF5IHdvbid0IGRpc2FibGUgdGhlIG1haW4gY29udGVudCwgc2hvd2luZ1xuICAgICAgICogaXQgZG9lc27igJl0IGNoYW5nZSB0aGUgZnVuY3Rpb25hbGl0eSBvZiB0aGUgdXNlciBpbnRlcmZhY2UuXG4gICAgICAgKi9cbiAgICAgIG1vZGVsZXNzOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19tb2RlbGVzc0NoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gc2V0IHRvIHRydWUsIHRoZSBvdmVybGF5IGlzIGhpZGRlbi4gVGhpcyBhbHNvIGNsb3NlcyB0aGUgb3ZlcmxheVxuICAgICAgICogaW1tZWRpYXRlbHkgaW4gY2FzZSB0aGVyZSBpcyBhIGNsb3NpbmcgYW5pbWF0aW9uIGluIHByb2dyZXNzLlxuICAgICAgICovXG4gICAgICBoaWRkZW46IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19oaWRkZW5DaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHRydWUgbW92ZSBmb2N1cyB0byB0aGUgZmlyc3QgZm9jdXNhYmxlIGVsZW1lbnQgaW4gdGhlIG92ZXJsYXksXG4gICAgICAgKiBvciB0byB0aGUgb3ZlcmxheSBpZiB0aGVyZSBhcmUgbm8gZm9jdXNhYmxlIGVsZW1lbnRzLlxuICAgICAgICovXG4gICAgICBmb2N1c1RyYXA6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGVuYWJsZSByZXN0b3Jpbmcgb2YgZm9jdXMgd2hlbiBvdmVybGF5IGlzIGNsb3NlZC5cbiAgICAgICAqL1xuICAgICAgcmVzdG9yZUZvY3VzT25DbG9zZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICB9LFxuXG4gICAgICBfbW91c2VEb3duSW5zaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9tb3VzZVVwSW5zaWRlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9pbnN0YW5jZToge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIF9vcmlnaW5hbENvbnRlbnRQYXJ0OiBPYmplY3QsXG5cbiAgICAgIF9jb250ZW50Tm9kZXM6IEFycmF5LFxuXG4gICAgICBfb2xkT3duZXI6IEVsZW1lbnQsXG5cbiAgICAgIF9vbGRNb2RlbDogT2JqZWN0LFxuXG4gICAgICBfb2xkVGVtcGxhdGU6IE9iamVjdCxcblxuICAgICAgX29sZEluc3RhbmNlUHJvcHM6IE9iamVjdCxcblxuICAgICAgX29sZFJlbmRlcmVyOiBPYmplY3QsXG5cbiAgICAgIF9vbGRPcGVuZWQ6IEJvb2xlYW5cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfdGVtcGxhdGVPclJlbmRlcmVyQ2hhbmdlZCh0ZW1wbGF0ZSwgcmVuZGVyZXIsIG93bmVyLCBtb2RlbCwgaW5zdGFuY2VQcm9wcywgb3BlbmVkKSdcbiAgICBdO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ib3VuZE1vdXNlRG93bkxpc3RlbmVyID0gdGhpcy5fbW91c2VEb3duTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE1vdXNlVXBMaXN0ZW5lciA9IHRoaXMuX21vdXNlVXBMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIgPSB0aGlzLl9vdXRzaWRlQ2xpY2tMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyID0gdGhpcy5fa2V5ZG93bkxpc3RlbmVyLmJpbmQodGhpcyk7XG5cbiAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBGbGF0dGVuZWROb2Rlc09ic2VydmVyKHRoaXMsIGluZm8gPT4ge1xuICAgICAgdGhpcy5fc2V0VGVtcGxhdGVGcm9tTm9kZXMoaW5mby5hZGRlZE5vZGVzKTtcbiAgICB9KTtcblxuICAgIC8vIExpc3RlbmVyIGZvciBwcmV2ZW50aW5nIGNsb3Npbmcgb2YgdGhlIHBhcGVyLWRpYWxvZyBhbmQgYWxsIGNvbXBvbmVudHMgZXh0ZW5kaW5nIGBpcm9uLW92ZXJsYXktYmVoYXZpb3JgLlxuICAgIHRoaXMuX2JvdW5kSXJvbk92ZXJsYXlDYW5jZWxlZExpc3RlbmVyID0gdGhpcy5faXJvbk92ZXJsYXlDYW5jZWxlZC5iaW5kKHRoaXMpO1xuXG4gICAgaWYgKC9pUGFkfGlQaG9uZXxpUG9kLy50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyID0gKCkgPT4gdGhpcy5fZGV0ZWN0SW9zTmF2YmFyKCk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIHRoaXMuX29ic2VydmVyLmZsdXNoKCk7XG5cbiAgICAvLyBOZWVkIHRvIGFkZCBkdW1teSBjbGljayBsaXN0ZW5lcnMgdG8gdGhpcyBhbmQgdGhlIGJhY2tkcm9wIG9yIGVsc2VcbiAgICAvLyB0aGUgZG9jdW1lbnQgY2xpY2sgZXZlbnQgbGlzdGVuZXIgKF9vdXRzaWRlQ2xpY2tMaXN0ZW5lcikgbWF5IG5ldmVyXG4gICAgLy8gZ2V0IGludm9rZWQgb24gaU9TIFNhZmFyaSAocmVwcm9kdWNpYmxlIGluIDx2YWFkaW4tZGlhbG9nPlxuICAgIC8vIGFuZCA8dmFhZGluLWNvbnRleHQtbWVudT4pLlxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7fSk7XG4gICAgdGhpcy4kLmJhY2tkcm9wLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge30pO1xuICB9XG5cbiAgX2RldGVjdElvc05hdmJhcigpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgaW5uZXJIZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgY29uc3QgaW5uZXJXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuXG4gICAgY29uc3QgbGFuZHNjYXBlID0gaW5uZXJXaWR0aCA+IGlubmVySGVpZ2h0O1xuXG4gICAgY29uc3QgY2xpZW50SGVpZ2h0ID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodDtcblxuICAgIGlmIChsYW5kc2NhcGUgJiYgY2xpZW50SGVpZ2h0ID4gaW5uZXJIZWlnaHQpIHtcbiAgICAgIHRoaXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tJywgY2xpZW50SGVpZ2h0IC0gaW5uZXJIZWlnaHQgKyAncHgnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS12YWFkaW4tb3ZlcmxheS12aWV3cG9ydC1ib3R0b20nLCAnMCcpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRUZW1wbGF0ZUZyb21Ob2Rlcyhub2Rlcykge1xuICAgIHRoaXMudGVtcGxhdGUgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLmxvY2FsTmFtZSAmJiBub2RlLmxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJylbMF0gfHwgdGhpcy50ZW1wbGF0ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgdmFhZGluLW92ZXJsYXktY2xvc2VcbiAgICogZmlyZWQgYmVmb3JlIHRoZSBgdmFhZGluLW92ZXJsYXlgIHdpbGwgYmUgY2xvc2VkLiBJZiBjYW5jZWxlZCB0aGUgY2xvc2luZyBvZiB0aGUgb3ZlcmxheSBpcyBjYW5jZWxlZCBhcyB3ZWxsLlxuICAgKi9cbiAgY2xvc2Uoc291cmNlRXZlbnQpIHtcbiAgICB2YXIgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tb3ZlcmxheS1jbG9zZScsIHtidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlLCBkZXRhaWw6IHtzb3VyY2VFdmVudDogc291cmNlRXZlbnR9fSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2dCk7XG4gICAgaWYgKCFldnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgICB9XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgaWYgKHRoaXMuX2JvdW5kSW9zUmVzaXplTGlzdGVuZXIpIHtcbiAgICAgIHRoaXMuX2RldGVjdElvc05hdmJhcigpO1xuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2JvdW5kSW9zUmVzaXplTGlzdGVuZXIpO1xuICAgIH1cbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICB0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyICYmIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9ib3VuZElvc1Jlc2l6ZUxpc3RlbmVyKTtcbiAgfVxuXG4gIF9pcm9uT3ZlcmxheUNhbmNlbGVkKGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIF9tb3VzZURvd25MaXN0ZW5lcihldmVudCkge1xuICAgIHRoaXMuX21vdXNlRG93bkluc2lkZSA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLm92ZXJsYXkpID49IDA7XG4gIH1cblxuICBfbW91c2VVcExpc3RlbmVyKGV2ZW50KSB7XG4gICAgdGhpcy5fbW91c2VVcEluc2lkZSA9IGV2ZW50LmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLm92ZXJsYXkpID49IDA7XG4gIH1cblxuICAvKipcbiAgICogV2UgbmVlZCB0byBsaXN0ZW4gb24gJ2NsaWNrJyAvICd0YXAnIGV2ZW50IGFuZCBjYXB0dXJlIGl0IGFuZCBjbG9zZSB0aGUgb3ZlcmxheSBiZWZvcmVcbiAgICogcHJvcGFnYXRpbmcgdGhlIGV2ZW50IHRvIHRoZSBsaXN0ZW5lciBpbiB0aGUgYnV0dG9uLiBPdGhlcndpc2UsIGlmIHRoZSBjbGlja2VkIGJ1dHRvbiB3b3VsZCBjYWxsXG4gICAqIG9wZW4oKSwgdGhpcyB3b3VsZCBoYXBwZW46IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Wjg2Vl9JQ1VDRDRcbiAgICpcbiAgICogQGV2ZW50IHZhYWRpbi1vdmVybGF5LW91dHNpZGUtY2xpY2tcbiAgICogZmlyZWQgYmVmb3JlIHRoZSBgdmFhZGluLW92ZXJsYXlgIHdpbGwgYmUgY2xvc2VkIG9uIG91dHNpZGUgY2xpY2suIElmIGNhbmNlbGVkIHRoZSBjbG9zaW5nIG9mIHRoZSBvdmVybGF5IGlzIGNhbmNlbGVkIGFzIHdlbGwuXG4gICAqL1xuICBfb3V0c2lkZUNsaWNrTGlzdGVuZXIoZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLiQub3ZlcmxheSkgIT09IC0xIHx8XG4gICAgICAgIHRoaXMuX21vdXNlRG93bkluc2lkZSB8fCB0aGlzLl9tb3VzZVVwSW5zaWRlKSB7XG4gICAgICB0aGlzLl9tb3VzZURvd25JbnNpZGUgPSBmYWxzZTtcbiAgICAgIHRoaXMuX21vdXNlVXBJbnNpZGUgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9sYXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tb3ZlcmxheS1vdXRzaWRlLWNsaWNrJywge2J1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGRldGFpbDoge3NvdXJjZUV2ZW50OiBldmVudH19KTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQoZXZ0KTtcblxuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoZXZlbnQpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAZXZlbnQgdmFhZGluLW92ZXJsYXktZXNjYXBlLXByZXNzXG4gICAqIGZpcmVkIGJlZm9yZSB0aGUgYHZhYWRpbi1vdmVybGF5YCB3aWxsIGJlIGNsb3NlZCBvbiBFU0MgYnV0dG9uIHByZXNzLiBJZiBjYW5jZWxlZCB0aGUgY2xvc2luZyBvZiB0aGUgb3ZlcmxheSBpcyBjYW5jZWxlZCBhcyB3ZWxsLlxuICAgKi9cbiAgX2tleWRvd25MaXN0ZW5lcihldmVudCkge1xuICAgIGlmICghdGhpcy5fbGFzdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIFRBQlxuICAgIGlmIChldmVudC5rZXkgPT09ICdUYWInICYmIHRoaXMuZm9jdXNUcmFwICYmICFldmVudC5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAvLyBpZiBvbmx5IHRhYiBrZXkgaXMgcHJlc3NlZCwgY3ljbGUgZm9yd2FyZCwgZWxzZSBjeWNsZSBiYWNrd2FyZHMuXG4gICAgICB0aGlzLl9jeWNsZVRhYihldmVudC5zaGlmdEtleSA/IC0xIDogMSk7XG5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBFU0NcbiAgICB9IGVsc2UgaWYgKGV2ZW50LmtleSA9PT0gJ0VzY2FwZScgfHwgZXZlbnQua2V5ID09PSAnRXNjJykge1xuICAgICAgY29uc3QgZXZ0ID0gbmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tb3ZlcmxheS1lc2NhcGUtcHJlc3MnLCB7YnViYmxlczogdHJ1ZSwgY2FuY2VsYWJsZTogdHJ1ZSwgZGV0YWlsOiB7c291cmNlRXZlbnQ6IGV2ZW50fX0pO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cbiAgICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhZXZ0LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgICAgdGhpcy5jbG9zZShldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2Vuc3VyZVRlbXBsYXRpemVkKCkge1xuICAgIHRoaXMuX3NldFRlbXBsYXRlRnJvbU5vZGVzKEFycmF5LmZyb20odGhpcy5jaGlsZHJlbikpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBldmVudCB2YWFkaW4tb3ZlcmxheS1vcGVuXG4gICAqIGZpcmVkIGFmdGVyIHRoZSBgdmFhZGluLW92ZXJsYXlgIGlzIG9wZW5lZC5cbiAgICovXG4gIF9vcGVuZWRDaGFuZ2VkKG9wZW5lZCwgd2FzT3BlbmVkKSB7XG4gICAgaWYgKCF0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgdGhpcy5fZW5zdXJlVGVtcGxhdGl6ZWQoKTtcbiAgICB9XG5cbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICAvLyBTdG9yZSBmb2N1c2VkIG5vZGUuXG4gICAgICB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZSA9IHRoaXMuX2dldEFjdGl2ZUVsZW1lbnQoKTtcbiAgICAgIHRoaXMuX2FuaW1hdGVkT3BlbmluZygpO1xuXG4gICAgICBhZnRlck5leHRSZW5kZXIodGhpcywgKCkgPT4ge1xuICAgICAgICBpZiAodGhpcy5mb2N1c1RyYXAgJiYgIXRoaXMuY29udGFpbnMoZG9jdW1lbnQuX2FjdGl2ZUVsZW1lbnQgfHwgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9jeWNsZVRhYigwLCAwKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV2dCA9IG5ldyBDdXN0b21FdmVudCgndmFhZGluLW92ZXJsYXktb3BlbicsIHtidWJibGVzOiB0cnVlfSk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChldnQpO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdGhpcy5tb2RlbGVzcykge1xuICAgICAgICB0aGlzLl9hZGRHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHdhc09wZW5lZCkge1xuICAgICAgdGhpcy5fYW5pbWF0ZWRDbG9zaW5nKCk7XG5cbiAgICAgIGlmICghdGhpcy5tb2RlbGVzcykge1xuICAgICAgICB0aGlzLl9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfaGlkZGVuQ2hhbmdlZChoaWRkZW4pIHtcbiAgICBpZiAoaGlkZGVuICYmIHRoaXMuaGFzQXR0cmlidXRlKCdjbG9zaW5nJykpIHtcbiAgICAgIHRoaXMuX2ZsdXNoQW5pbWF0aW9uKCdjbG9zaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgX3Nob3VsZEFuaW1hdGUoKSB7XG4gICAgY29uc3QgbmFtZSA9IGdldENvbXB1dGVkU3R5bGUodGhpcykuZ2V0UHJvcGVydHlWYWx1ZSgnYW5pbWF0aW9uLW5hbWUnKTtcbiAgICBjb25zdCBoaWRkZW4gPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLmdldFByb3BlcnR5VmFsdWUoJ2Rpc3BsYXknKSA9PT0gJ25vbmUnO1xuICAgIHJldHVybiAhaGlkZGVuICYmIG5hbWUgJiYgbmFtZSAhPSAnbm9uZSc7XG4gIH1cblxuICBfZW5xdWV1ZUFuaW1hdGlvbih0eXBlLCBjYWxsYmFjaykge1xuICAgIGNvbnN0IGhhbmRsZXIgPSBgX18ke3R5cGV9SGFuZGxlcmA7XG4gICAgY29uc3QgbGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICBjYWxsYmFjaygpO1xuICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdhbmltYXRpb25lbmQnLCBsaXN0ZW5lcik7XG4gICAgICBkZWxldGUgdGhpc1toYW5kbGVyXTtcbiAgICB9O1xuICAgIHRoaXNbaGFuZGxlcl0gPSBsaXN0ZW5lcjtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2FuaW1hdGlvbmVuZCcsIGxpc3RlbmVyKTtcbiAgfVxuXG4gIF9mbHVzaEFuaW1hdGlvbih0eXBlKSB7XG4gICAgY29uc3QgaGFuZGxlciA9IGBfXyR7dHlwZX1IYW5kbGVyYDtcbiAgICBpZiAodHlwZW9mIHRoaXNbaGFuZGxlcl0gPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRoaXNbaGFuZGxlcl0oKTtcbiAgICB9XG4gIH1cblxuICBfYW5pbWF0ZWRPcGVuaW5nKCkge1xuICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT09IGRvY3VtZW50LmJvZHkgJiYgdGhpcy5oYXNBdHRyaWJ1dGUoJ2Nsb3NpbmcnKSkge1xuICAgICAgdGhpcy5fZmx1c2hBbmltYXRpb24oJ2Nsb3NpbmcnKTtcbiAgICB9XG4gICAgdGhpcy5fYXR0YWNoT3ZlcmxheSgpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdvcGVuaW5nJywgJycpO1xuXG4gICAgY29uc3QgZmluaXNoT3BlbmluZyA9ICgpID0+IHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdvcGVuaW5nJyk7XG4gICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdpcm9uLW92ZXJsYXktY2FuY2VsZWQnLCB0aGlzLl9ib3VuZElyb25PdmVybGF5Q2FuY2VsZWRMaXN0ZW5lcik7XG5cbiAgICAgIGlmICghdGhpcy5tb2RlbGVzcykge1xuICAgICAgICB0aGlzLl9lbnRlck1vZGFsU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgaWYgKHRoaXMuX3Nob3VsZEFuaW1hdGUoKSkge1xuICAgICAgdGhpcy5fZW5xdWV1ZUFuaW1hdGlvbignb3BlbmluZycsIGZpbmlzaE9wZW5pbmcpO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaW5pc2hPcGVuaW5nKCk7XG4gICAgfVxuICB9XG5cbiAgX2F0dGFjaE92ZXJsYXkoKSB7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIgPSBkb2N1bWVudC5jcmVhdGVDb21tZW50KCd2YWFkaW4tb3ZlcmxheS1wbGFjZWhvbGRlcicpO1xuICAgIHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUodGhpcy5fcGxhY2Vob2xkZXIsIHRoaXMpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGhpcyk7XG4gIH1cblxuICBfYW5pbWF0ZWRDbG9zaW5nKCkge1xuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnb3BlbmluZycpKSB7XG4gICAgICB0aGlzLl9mbHVzaEFuaW1hdGlvbignb3BlbmluZycpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGxhY2Vob2xkZXIpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdjbG9zaW5nJywgJycpO1xuXG4gICAgICBjb25zdCBmaW5pc2hDbG9zaW5nID0gKCkgPT4ge1xuICAgICAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW3BhcnQ9XCJvdmVybGF5XCJdJykuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3BvaW50ZXItZXZlbnRzJyk7XG5cbiAgICAgICAgdGhpcy5fZXhpdE1vZGFsU3RhdGUoKTtcblxuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdpcm9uLW92ZXJsYXktY2FuY2VsZWQnLCB0aGlzLl9ib3VuZElyb25PdmVybGF5Q2FuY2VsZWRMaXN0ZW5lcik7XG4gICAgICAgIHRoaXMuX2RldGFjaE92ZXJsYXkoKTtcbiAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2Nsb3NpbmcnKTtcblxuICAgICAgICBpZiAodGhpcy5yZXN0b3JlRm9jdXNPbkNsb3NlICYmIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlKSB7XG4gICAgICAgICAgLy8gSWYgdGhlIGFjdGl2ZUVsZW1lbnQgaXMgYDxib2R5PmAgb3IgaW5zaWRlIHRoZSBvdmVybGF5LFxuICAgICAgICAgIC8vIHdlIGFyZSBhbGxvd2VkIHRvIHJlc3RvcmUgdGhlIGZvY3VzLiBJbiBhbGwgdGhlIG90aGVyXG4gICAgICAgICAgLy8gY2FzZXMgZm9jdXMgbWlnaHQgaGF2ZSBiZWVuIG1vdmVkIGVsc2V3aGVyZSBieSBhbm90aGVyXG4gICAgICAgICAgLy8gY29tcG9uZW50IG9yIGJ5IHRoZSB1c2VyIGludGVyYWN0aW9uIChlLmcuIGNsaWNrIG9uIGFcbiAgICAgICAgICAvLyBidXR0b24gb3V0c2lkZSB0aGUgb3ZlcmxheSkuXG4gICAgICAgICAgY29uc3QgYWN0aXZlRWxlbWVudCA9IHRoaXMuX2dldEFjdGl2ZUVsZW1lbnQoKTtcblxuICAgICAgICAgIGlmIChhY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5ib2R5IHx8IHRoaXMuX2RlZXBDb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9O1xuXG4gICAgICBpZiAodGhpcy5fc2hvdWxkQW5pbWF0ZSgpKSB7XG4gICAgICAgIHRoaXMuX2VucXVldWVBbmltYXRpb24oJ2Nsb3NpbmcnLCBmaW5pc2hDbG9zaW5nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZpbmlzaENsb3NpbmcoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZGV0YWNoT3ZlcmxheSgpIHtcbiAgICB0aGlzLl9wbGFjZWhvbGRlci5wYXJlbnROb2RlLmluc2VydEJlZm9yZSh0aGlzLCB0aGlzLl9wbGFjZWhvbGRlcik7XG4gICAgdGhpcy5fcGxhY2Vob2xkZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLl9wbGFjZWhvbGRlcik7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhbGwgYXR0YWNoZWQgb3ZlcmxheXMuXG4gICAqL1xuICBzdGF0aWMgZ2V0IF9fYXR0YWNoZWRJbnN0YW5jZXMoKSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oZG9jdW1lbnQuYm9keS5jaGlsZHJlbikuZmlsdGVyKGVsID0+IGVsIGluc3RhbmNlb2YgT3ZlcmxheUVsZW1lbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIHJldHVybnMgdHJ1ZSBpZiB0aGlzIGlzIHRoZSBsYXN0IG9uZSBpbiB0aGUgb3BlbmVkIG92ZXJsYXlzIHN0YWNrXG4gICAqL1xuICBnZXQgX2xhc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMgPT09IE92ZXJsYXlFbGVtZW50Ll9fYXR0YWNoZWRJbnN0YW5jZXMucG9wKCk7XG4gIH1cblxuICBfbW9kZWxlc3NDaGFuZ2VkKG1vZGVsZXNzKSB7XG4gICAgaWYgKCFtb2RlbGVzcykge1xuICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgIHRoaXMuX2FkZEdsb2JhbExpc3RlbmVycygpO1xuICAgICAgICB0aGlzLl9lbnRlck1vZGFsU3RhdGUoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVtb3ZlR2xvYmFsTGlzdGVuZXJzKCk7XG4gICAgICB0aGlzLl9leGl0TW9kYWxTdGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIF9hZGRHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fYm91bmRNb3VzZURvd25MaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2JvdW5kTW91c2VVcExpc3RlbmVyKTtcbiAgICAvLyBGaXJlZm94IGxlYWtzIGNsaWNrIHRvIGRvY3VtZW50IG9uIGNvbnRleHRtZW51IGV2ZW4gaWYgcHJldmVudGVkXG4gICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9OTkwNjE0XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRPdXRzaWRlQ2xpY2tMaXN0ZW5lciwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyKTtcbiAgfVxuXG4gIF9lbnRlck1vZGFsU3RhdGUoKSB7XG4gICAgaWYgKGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyAhPT0gJ25vbmUnKSB7XG4gICAgICAvLyBTZXQgYm9keSBwb2ludGVyLWV2ZW50cyB0byAnbm9uZScgdG8gZGlzYWJsZSBtb3VzZSBpbnRlcmFjdGlvbnMgd2l0aFxuICAgICAgLy8gb3RoZXIgZG9jdW1lbnQgbm9kZXMuXG4gICAgICB0aGlzLl9wcmV2aW91c0RvY3VtZW50UG9pbnRlckV2ZW50cyA9IGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cztcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICB9XG5cbiAgICAvLyBEaXNhYmxlIHBvaW50ZXIgZXZlbnRzIGluIG90aGVyIGF0dGFjaGVkIG92ZXJsYXlzXG4gICAgT3ZlcmxheUVsZW1lbnQuX19hdHRhY2hlZEluc3RhbmNlcy5mb3JFYWNoKGVsID0+IHtcbiAgICAgIGlmIChlbCAhPT0gdGhpcyAmJiAhZWwuaGFzQXR0cmlidXRlKCdvcGVuaW5nJykgJiYgIWVsLmhhc0F0dHJpYnV0ZSgnY2xvc2luZycpKSB7XG4gICAgICAgIGVsLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW3BhcnQ9XCJvdmVybGF5XCJdJykuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9yZW1vdmVHbG9iYWxMaXN0ZW5lcnMoKSB7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5fYm91bmRNb3VzZURvd25MaXN0ZW5lcik7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIHRoaXMuX2JvdW5kTW91c2VVcExpc3RlbmVyKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyLCB0cnVlKTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fYm91bmRLZXlkb3duTGlzdGVuZXIpO1xuICB9XG5cbiAgX2V4aXRNb2RhbFN0YXRlKCkge1xuICAgIGlmICh0aGlzLl9wcmV2aW91c0RvY3VtZW50UG9pbnRlckV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyBSZXN0b3JlIGJvZHkgcG9pbnRlci1ldmVudHNcbiAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9pbnRlckV2ZW50cyA9IHRoaXMuX3ByZXZpb3VzRG9jdW1lbnRQb2ludGVyRXZlbnRzO1xuICAgICAgZGVsZXRlIHRoaXMuX3ByZXZpb3VzRG9jdW1lbnRQb2ludGVyRXZlbnRzO1xuICAgIH1cblxuICAgIC8vIFJlc3RvcmUgcG9pbnRlciBldmVudHMgaW4gdGhlIHByZXZpb3VzIG92ZXJsYXkocylcbiAgICBjb25zdCBpbnN0YW5jZXMgPSBPdmVybGF5RWxlbWVudC5fX2F0dGFjaGVkSW5zdGFuY2VzO1xuICAgIGxldCBlbDtcbiAgICAvLyBVc2UgaW5zdGFuY2VzLnBvcCgpIHRvIGVuc3VyZSB0aGUgcmV2ZXJzZSBvcmRlclxuICAgIHdoaWxlIChlbCA9IGluc3RhbmNlcy5wb3AoKSkge1xuICAgICAgaWYgKGVsID09PSB0aGlzKSB7XG4gICAgICAgIC8vIFNraXAgdGhlIGN1cnJlbnQgaW5zdGFuY2VcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBlbC5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwib3ZlcmxheVwiXScpLnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb2ludGVyLWV2ZW50cycpO1xuICAgICAgaWYgKCFlbC5tb2RlbGVzcykge1xuICAgICAgICAvLyBTdG9wIGFmdGVyIHRoZSBsYXN0IG1vZGFsXG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9yZW1vdmVPbGRDb250ZW50KCkge1xuICAgIGlmICghdGhpcy5jb250ZW50IHx8ICF0aGlzLl9jb250ZW50Tm9kZXMpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9vYnNlcnZlci5kaXNjb25uZWN0KCk7XG5cbiAgICB0aGlzLl9jb250ZW50Tm9kZXMuZm9yRWFjaChub2RlID0+IHtcbiAgICAgIGlmIChub2RlLnBhcmVudE5vZGUgPT09IHRoaXMuY29udGVudCkge1xuICAgICAgICB0aGlzLmNvbnRlbnQucmVtb3ZlQ2hpbGQobm9kZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fb3JpZ2luYWxDb250ZW50UGFydCkge1xuICAgICAgLy8gUmVzdG9yZSB0aGUgb3JpZ2luYWwgPGRpdiBwYXJ0PVwiY29udGVudFwiPlxuICAgICAgdGhpcy4kLmNvbnRlbnQucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQodGhpcy5fb3JpZ2luYWxDb250ZW50UGFydCwgdGhpcy4kLmNvbnRlbnQpO1xuICAgICAgdGhpcy4kLmNvbnRlbnQgPSB0aGlzLl9vcmlnaW5hbENvbnRlbnRQYXJ0O1xuICAgICAgdGhpcy5fb3JpZ2luYWxDb250ZW50UGFydCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICB0aGlzLl9vYnNlcnZlci5jb25uZWN0KCk7XG5cbiAgICB0aGlzLl9jb250ZW50Tm9kZXMgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5jb250ZW50ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX3N0YW1wT3ZlcmxheVRlbXBsYXRlKHRlbXBsYXRlLCBpbnN0YW5jZVByb3BzKSB7XG4gICAgdGhpcy5fcmVtb3ZlT2xkQ29udGVudCgpO1xuXG4gICAgaWYgKCF0ZW1wbGF0ZS5fVGVtcGxhdGl6ZXIpIHtcbiAgICAgIHRlbXBsYXRlLl9UZW1wbGF0aXplciA9IHRlbXBsYXRpemUodGVtcGxhdGUsIHRoaXMsIHtcbiAgICAgICAgaW5zdGFuY2VQcm9wczogaW5zdGFuY2VQcm9wcyxcbiAgICAgICAgZm9yd2FyZEhvc3RQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgICAgIGlmICh0aGlzLl9pbnN0YW5jZSkge1xuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2UuZm9yd2FyZEhvc3RQcm9wKHByb3AsIHZhbHVlKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHRoaXMuX2luc3RhbmNlID0gbmV3IHRlbXBsYXRlLl9UZW1wbGF0aXplcih7fSk7XG4gICAgdGhpcy5fY29udGVudE5vZGVzID0gQXJyYXkuZnJvbSh0aGlzLl9pbnN0YW5jZS5yb290LmNoaWxkTm9kZXMpO1xuXG4gICAgY29uc3QgdGVtcGxhdGVSb290ID0gdGVtcGxhdGUuX3RlbXBsYXRlUm9vdCB8fCAodGVtcGxhdGUuX3RlbXBsYXRlUm9vdCA9IHRlbXBsYXRlLmdldFJvb3ROb2RlKCkpO1xuICAgIGNvbnN0IF9pc1Njb3BlZCA9IHRlbXBsYXRlUm9vdCAhPT0gZG9jdW1lbnQ7XG5cbiAgICBpZiAoX2lzU2NvcGVkKSB7XG4gICAgICBjb25zdCBpc1NoYWR5ID0gd2luZG93LlNoYWR5Q1NTICYmICF3aW5kb3cuU2hhZHlDU1MubmF0aXZlU2hhZG93O1xuXG4gICAgICBpZiAoIXRoaXMuJC5jb250ZW50LnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGhpcy4kLmNvbnRlbnQuYXR0YWNoU2hhZG93KHttb2RlOiAnb3Blbid9KTtcbiAgICAgIH1cblxuICAgICAgbGV0IHNjb3BlQ3NzVGV4dCA9IEFycmF5LmZyb20odGVtcGxhdGVSb290LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlJykpXG4gICAgICAgIC5yZWR1Y2UoKHJlc3VsdCwgc3R5bGUpID0+IHJlc3VsdCArIHN0eWxlLnRleHRDb250ZW50LCAnJyk7XG5cbiAgICAgIGlmIChpc1NoYWR5KSB7XG4gICAgICAgIC8vIE5PVEUocGxhdG9zaGEpOiBTaGFkeUNTUyByZW1vdmVzIDxzdHlsZT7igJlzIGZyb20gdGVtcGxhdGVzLCBzb1xuICAgICAgICAvLyB3ZSBoYXZlIHRvIHVzZSB0aGVzZSBwcm90ZWN0ZWQgQVBJcyB0byBnZXQgdGhlaXIgY29udGVudHMgYmFja1xuICAgICAgICBjb25zdCBzdHlsZUluZm8gPSB3aW5kb3cuU2hhZHlDU1MuU2NvcGluZ1NoaW1cbiAgICAgICAgICAuX3N0eWxlSW5mb0Zvck5vZGUodGVtcGxhdGVSb290Lmhvc3QpO1xuICAgICAgICBpZiAoc3R5bGVJbmZvKSB7XG4gICAgICAgICAgc2NvcGVDc3NUZXh0ICs9IHN0eWxlSW5mby5fZ2V0U3R5bGVSdWxlcygpLnBhcnNlZENzc1RleHQ7XG4gICAgICAgICAgc2NvcGVDc3NUZXh0ICs9ICd9JztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAvLyBUaGUgb3ZlcmxheSByb2904oCZcyA6aG9zdCBzdHlsZXMgc2hvdWxkIG5vdCBhcHBseSBpbnNpZGUgdGhlIG92ZXJsYXlcbiAgICAgIHNjb3BlQ3NzVGV4dCA9IHNjb3BlQ3NzVGV4dC5yZXBsYWNlKC86aG9zdC9nLCAnOmhvc3Qtbm9tYXRjaCcpO1xuXG4gICAgICBpZiAoc2NvcGVDc3NUZXh0KSB7XG4gICAgICAgIGlmIChpc1NoYWR5KSB7XG4gICAgICAgICAgLy8gU2hhZHlET006IHJlcGxhY2UgdGhlIDxkaXYgcGFydD1cImNvbnRlbnRcIj4gd2l0aCBhIGdlbmVyYXRlZFxuICAgICAgICAgIC8vIHN0eWxlZCBjdXN0b20gZWxlbWVudFxuICAgICAgICAgIGNvbnN0IGNvbnRlbnRQYXJ0ID0gY3JlYXRlT3ZlcmxheUNvbnRlbnQoc2NvcGVDc3NUZXh0KTtcbiAgICAgICAgICBjb250ZW50UGFydC5pZCA9ICdjb250ZW50JztcbiAgICAgICAgICBjb250ZW50UGFydC5zZXRBdHRyaWJ1dGUoJ3BhcnQnLCAnY29udGVudCcpO1xuICAgICAgICAgIHRoaXMuJC5jb250ZW50LnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKGNvbnRlbnRQYXJ0LCB0aGlzLiQuY29udGVudCk7XG4gICAgICAgICAgLy8gTk9URShwbGF0b3NoYSk6IGNhcnJ5IHRoZSBzdHlsZSBzY29wZSBvZiB0aGUgY29udGVudCBwYXJ0XG4gICAgICAgICAgY29udGVudFBhcnQuY2xhc3NOYW1lID0gdGhpcy4kLmNvbnRlbnQuY2xhc3NOYW1lO1xuICAgICAgICAgIHRoaXMuX29yaWdpbmFsQ29udGVudFBhcnQgPSB0aGlzLiQuY29udGVudDtcbiAgICAgICAgICB0aGlzLiQuY29udGVudCA9IGNvbnRlbnRQYXJ0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFNoYWRvdyBET006IGFwcGVuZCBhIHN0eWxlIHRvIHRoZSBjb250ZW50IHNoYWRvd1Jvb3RcbiAgICAgICAgICBjb25zdCBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gICAgICAgICAgc3R5bGUudGV4dENvbnRlbnQgPSBzY29wZUNzc1RleHQ7XG4gICAgICAgICAgdGhpcy4kLmNvbnRlbnQuc2hhZG93Um9vdC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gICAgICAgICAgdGhpcy5fY29udGVudE5vZGVzLnVuc2hpZnQoc3R5bGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuJC5jb250ZW50LnNoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5faW5zdGFuY2Uucm9vdCk7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLiQuY29udGVudC5zaGFkb3dSb290O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmFwcGVuZENoaWxkKHRoaXMuX2luc3RhbmNlLnJvb3QpO1xuICAgICAgdGhpcy5jb250ZW50ID0gdGhpcztcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlTmV3UmVuZGVyZXJPclRlbXBsYXRlKHRlbXBsYXRlLCBvbGRUZW1wbGF0ZSwgcmVuZGVyZXIsIG9sZFJlbmRlcmVyKSB7XG4gICAgaWYgKHRlbXBsYXRlICE9PSBvbGRUZW1wbGF0ZSkge1xuICAgICAgdGhpcy50ZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHJlbmRlcmVyICE9PSBvbGRSZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogTWFudWFsbHkgaW52b2tlIGV4aXN0aW5nIHJlbmRlcmVyLlxuICAgKi9cbiAgcmVuZGVyKCkge1xuICAgIGlmICh0aGlzLnJlbmRlcmVyKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLmNhbGwodGhpcy5vd25lciwgdGhpcy5jb250ZW50LCB0aGlzLm93bmVyLCB0aGlzLm1vZGVsKTtcbiAgICB9XG4gIH1cblxuICBfdGVtcGxhdGVPclJlbmRlcmVyQ2hhbmdlZCh0ZW1wbGF0ZSwgcmVuZGVyZXIsIG93bmVyLCBtb2RlbCwgaW5zdGFuY2VQcm9wcywgb3BlbmVkKSB7XG4gICAgaWYgKHRlbXBsYXRlICYmIHJlbmRlcmVyKSB7XG4gICAgICB0aGlzLl9yZW1vdmVOZXdSZW5kZXJlck9yVGVtcGxhdGUodGVtcGxhdGUsIHRoaXMuX29sZFRlbXBsYXRlLCByZW5kZXJlciwgdGhpcy5fb2xkUmVuZGVyZXIpO1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdZb3Ugc2hvdWxkIG9ubHkgdXNlIGVpdGhlciBhIHJlbmRlcmVyIG9yIGEgdGVtcGxhdGUgZm9yIG92ZXJsYXkgY29udGVudCcpO1xuICAgIH1cblxuICAgIGNvbnN0IG93bmVyT3JNb2RlbENoYW5nZWQgPSAodGhpcy5fb2xkT3duZXIgIT09IG93bmVyIHx8IHRoaXMuX29sZE1vZGVsICE9PSBtb2RlbCk7XG4gICAgdGhpcy5fb2xkTW9kZWwgPSBtb2RlbDtcbiAgICB0aGlzLl9vbGRPd25lciA9IG93bmVyO1xuXG4gICAgY29uc3QgdGVtcGxhdGVPckluc3RhbmNlUHJvcHNDaGFuZ2VkID0gKHRoaXMuX29sZEluc3RhbmNlUHJvcHMgIT09IGluc3RhbmNlUHJvcHMgfHwgdGhpcy5fb2xkVGVtcGxhdGUgIT09IHRlbXBsYXRlKTtcbiAgICB0aGlzLl9vbGRJbnN0YW5jZVByb3BzID0gaW5zdGFuY2VQcm9wcztcbiAgICB0aGlzLl9vbGRUZW1wbGF0ZSA9IHRlbXBsYXRlO1xuXG4gICAgY29uc3QgcmVuZGVyZXJDaGFuZ2VkID0gdGhpcy5fb2xkUmVuZGVyZXIgIT09IHJlbmRlcmVyO1xuICAgIHRoaXMuX29sZFJlbmRlcmVyID0gcmVuZGVyZXI7XG5cbiAgICBjb25zdCBvcGVuZWRDaGFuZ2VkID0gdGhpcy5fb2xkT3BlbmVkICE9PSBvcGVuZWQ7XG4gICAgdGhpcy5fb2xkT3BlbmVkID0gb3BlbmVkO1xuXG4gICAgaWYgKHRlbXBsYXRlICYmIHRlbXBsYXRlT3JJbnN0YW5jZVByb3BzQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fc3RhbXBPdmVybGF5VGVtcGxhdGUodGVtcGxhdGUsIGluc3RhbmNlUHJvcHMpO1xuICAgIH0gZWxzZSBpZiAocmVuZGVyZXIgJiYgKHJlbmRlcmVyQ2hhbmdlZCB8fCBvcGVuZWRDaGFuZ2VkIHx8IG93bmVyT3JNb2RlbENoYW5nZWQpKSB7XG4gICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzO1xuXG4gICAgICBpZiAocmVuZGVyZXJDaGFuZ2VkKSB7XG4gICAgICAgIHdoaWxlICh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICAgIHRoaXMuY29udGVudC5yZW1vdmVDaGlsZCh0aGlzLmNvbnRlbnQuZmlyc3RDaGlsZCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9wZW5lZCkge1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pc0ZvY3VzZWQoZWxlbWVudCkge1xuICAgIHJldHVybiBlbGVtZW50ICYmIGVsZW1lbnQuZ2V0Um9vdE5vZGUoKS5hY3RpdmVFbGVtZW50ID09PSBlbGVtZW50O1xuICB9XG5cbiAgX2ZvY3VzZWRJbmRleChlbGVtZW50cykge1xuICAgIGVsZW1lbnRzID0gZWxlbWVudHMgfHwgdGhpcy5fZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcbiAgICByZXR1cm4gZWxlbWVudHMuaW5kZXhPZihlbGVtZW50cy5maWx0ZXIodGhpcy5faXNGb2N1c2VkKS5wb3AoKSk7XG4gIH1cblxuICBfY3ljbGVUYWIoaW5jcmVtZW50LCBpbmRleCkge1xuICAgIGNvbnN0IGZvY3VzYWJsZUVsZW1lbnRzID0gdGhpcy5fZ2V0Rm9jdXNhYmxlRWxlbWVudHMoKTtcblxuICAgIGlmIChpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9IHRoaXMuX2ZvY3VzZWRJbmRleChmb2N1c2FibGVFbGVtZW50cyk7XG4gICAgfVxuXG4gICAgaW5kZXggKz0gaW5jcmVtZW50O1xuXG4gICAgLy8gcm9sbG92ZXIgdG8gZmlyc3QgaXRlbVxuICAgIGlmIChpbmRleCA+PSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgIGluZGV4ID0gMDtcbiAgICAvLyBnbyB0byBsYXN0IGl0ZW1cbiAgICB9IGVsc2UgaWYgKGluZGV4IDwgMCkge1xuICAgICAgaW5kZXggPSBmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggLSAxO1xuICAgIH1cblxuICAgIGZvY3VzYWJsZUVsZW1lbnRzW2luZGV4XS5mb2N1cygpO1xuICB9XG5cbiAgX2dldEZvY3VzYWJsZUVsZW1lbnRzKCkge1xuICAgIC8vIGNvbGxlY3QgYWxsIGZvY3VzYWJsZSBlbGVtZW50c1xuICAgIHJldHVybiBGb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcy4kLm92ZXJsYXkpO1xuICB9XG5cbiAgX2dldEFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgbGV0IGFjdGl2ZSA9IGRvY3VtZW50Ll9hY3RpdmVFbGVtZW50IHx8IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgLy8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gYmUgbnVsbFxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9hY3RpdmVFbGVtZW50XG4gICAgLy8gSW4gSUUgMTEsIGl0IGNhbiBhbHNvIGJlIGFuIG9iamVjdCB3aGVuIG9wZXJhdGluZyBpbiBpZnJhbWVzXG4gICAgLy8gb3IgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50ICh3aGVuIG92ZXJsYXkgY2xvc2VkIG9uIG91dHNpZGUgY2xpY2spLlxuICAgIC8vIEluIHRoZXNlIGNhc2VzLCBkZWZhdWx0IGl0IHRvIGRvY3VtZW50LmJvZHkuXG4gICAgaWYgKCFhY3RpdmUgfHwgYWN0aXZlID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgYWN0aXZlIGluc3RhbmNlb2YgRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuICAgIHdoaWxlIChhY3RpdmUuc2hhZG93Um9vdCAmJiBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSB7XG4gICAgICBhY3RpdmUgPSBhY3RpdmUuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gYWN0aXZlO1xuICB9XG5cbiAgX2RlZXBDb250YWlucyhub2RlKSB7XG4gICAgaWYgKHRoaXMuY29udGFpbnMobm9kZSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBsZXQgbiA9IG5vZGU7XG4gICAgY29uc3QgZG9jID0gbm9kZS5vd25lckRvY3VtZW50O1xuICAgIC8vIHdhbGsgZnJvbSBub2RlIHRvIGB0aGlzYCBvciBgZG9jdW1lbnRgXG4gICAgd2hpbGUgKG4gJiYgbiAhPT0gZG9jICYmIG4gIT09IHRoaXMpIHtcbiAgICAgIG4gPSBuLnBhcmVudE5vZGUgfHwgbi5ob3N0O1xuICAgIH1cbiAgICByZXR1cm4gbiA9PT0gdGhpcztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoT3ZlcmxheUVsZW1lbnQuaXMsIE92ZXJsYXlFbGVtZW50KTtcbmV4cG9ydCB7IE92ZXJsYXlFbGVtZW50IH07XG4iLCJpbXBvcnQgeyBEb21Nb2R1bGUgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tbW9kdWxlLmpzJztcbmltcG9ydCB7IFRoZW1lUHJvcGVydHlNaXhpbiB9IGZyb20gJy4vdmFhZGluLXRoZW1lLXByb3BlcnR5LW1peGluLmpzJztcblxuLyoqXG4gKiBAcG9seW1lck1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1lUHJvcGVydHlNaXhpblxuICovXG5leHBvcnQgY29uc3QgVGhlbWFibGVNaXhpbiA9IHN1cGVyQ2xhc3MgPT4gY2xhc3MgVmFhZGluVGhlbWFibGVNaXhpbiBleHRlbmRzIFRoZW1lUHJvcGVydHlNaXhpbihzdXBlckNsYXNzKSB7XG5cbiAgLyoqIEBwcm90ZWN0ZWQgKi9cbiAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgIHN1cGVyLmZpbmFsaXplKCk7XG5cbiAgICBjb25zdCB0ZW1wbGF0ZSA9IHRoaXMucHJvdG90eXBlLl90ZW1wbGF0ZTtcblxuICAgIGNvbnN0IGhhc093blRlbXBsYXRlID0gdGhpcy50ZW1wbGF0ZSAmJiB0aGlzLnRlbXBsYXRlLnBhcmVudEVsZW1lbnQgJiYgdGhpcy50ZW1wbGF0ZS5wYXJlbnRFbGVtZW50LmlkID09PSB0aGlzLmlzO1xuICAgIGNvbnN0IGluaGVyaXRlZFRlbXBsYXRlID0gT2JqZWN0LmdldFByb3RvdHlwZU9mKHRoaXMucHJvdG90eXBlKS5fdGVtcGxhdGU7XG4gICAgaWYgKGluaGVyaXRlZFRlbXBsYXRlICYmICFoYXNPd25UZW1wbGF0ZSkge1xuICAgICAgLy8gVGhlIGVsZW1lbnQgZG9lc24ndCBkZWZpbmUgaXRzIG93biB0ZW1wbGF0ZSAtPiBpbmNsdWRlIHRoZSB0aGVtZSBtb2R1bGVzIGZyb20gdGhlIGluaGVyaXRlZCB0ZW1wbGF0ZVxuICAgICAgQXJyYXkuZnJvbShpbmhlcml0ZWRUZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ3N0eWxlW2luY2x1ZGVdJykpLmZvckVhY2gocyA9PiB7XG4gICAgICAgIHRoaXMuX2luY2x1ZGVTdHlsZShzLmdldEF0dHJpYnV0ZSgnaW5jbHVkZScpLCB0ZW1wbGF0ZSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9pbmNsdWRlTWF0Y2hpbmdUaGVtZXModGVtcGxhdGUpO1xuICB9XG5cbiAgLyoqIEBwcm90ZWN0ZWQgKi9cbiAgc3RhdGljIF9pbmNsdWRlTWF0Y2hpbmdUaGVtZXModGVtcGxhdGUpIHtcbiAgICBjb25zdCBkb21Nb2R1bGUgPSBEb21Nb2R1bGU7XG4gICAgY29uc3QgbW9kdWxlcyA9IGRvbU1vZHVsZS5wcm90b3R5cGUubW9kdWxlcztcblxuICAgIGxldCBoYXNUaGVtZXMgPSBmYWxzZTtcbiAgICBjb25zdCBkZWZhdWx0TW9kdWxlTmFtZSA9IHRoaXMuaXMgKyAnLWRlZmF1bHQtdGhlbWUnO1xuXG4gICAgT2JqZWN0LmtleXMobW9kdWxlcylcbiAgICAgIC5zb3J0KChtb2R1bGVOYW1lQSwgbW9kdWxlTmFtZUIpID0+IHtcbiAgICAgICAgY29uc3QgdmFhZGluQSA9IG1vZHVsZU5hbWVBLmluZGV4T2YoJ3ZhYWRpbi0nKSA9PT0gMDtcbiAgICAgICAgY29uc3QgdmFhZGluQiA9IG1vZHVsZU5hbWVCLmluZGV4T2YoJ3ZhYWRpbi0nKSA9PT0gMDtcblxuICAgICAgICBjb25zdCB2YWFkaW5UaGVtZVByZWZpeGVzID0gWydsdW1vLScsICdtYXRlcmlhbC0nXTtcbiAgICAgICAgY29uc3QgdmFhZGluVGhlbWVBID0gdmFhZGluVGhlbWVQcmVmaXhlcy5maWx0ZXIocHJlZml4ID0+IG1vZHVsZU5hbWVBLmluZGV4T2YocHJlZml4KSA9PT0gMCkubGVuZ3RoID4gMDtcbiAgICAgICAgY29uc3QgdmFhZGluVGhlbWVCID0gdmFhZGluVGhlbWVQcmVmaXhlcy5maWx0ZXIocHJlZml4ID0+IG1vZHVsZU5hbWVCLmluZGV4T2YocHJlZml4KSA9PT0gMCkubGVuZ3RoID4gMDtcblxuICAgICAgICBpZiAodmFhZGluQSAhPT0gdmFhZGluQikge1xuICAgICAgICAgIC8vIEluY2x1ZGUgdmFhZGluIGNvcmUgc3R5bGVzIGZpcnN0XG4gICAgICAgICAgcmV0dXJuIHZhYWRpbkEgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSBpZiAodmFhZGluVGhlbWVBICE9PSB2YWFkaW5UaGVtZUIpIHtcbiAgICAgICAgICAvLyBJbmNsdWRlIHZhYWRpbiB0aGVtZSBzdHlsZXMgYWZ0ZXIgdGhhdFxuICAgICAgICAgIHJldHVybiB2YWFkaW5UaGVtZUEgPyAtMSA6IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gTGFzdGx5IGluY2x1ZGUgY3VzdG9tIHN0eWxlcyBzbyB0aGV5IG92ZXJyaWRlIGFsbCB2YWFkaW4gc3R5bGVzXG4gICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuZm9yRWFjaChtb2R1bGVOYW1lID0+IHtcbiAgICAgICAgaWYgKG1vZHVsZU5hbWUgIT09IGRlZmF1bHRNb2R1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgdGhlbWVGb3IgPSBtb2R1bGVzW21vZHVsZU5hbWVdLmdldEF0dHJpYnV0ZSgndGhlbWUtZm9yJyk7XG4gICAgICAgICAgaWYgKHRoZW1lRm9yKSB7XG4gICAgICAgICAgICB0aGVtZUZvci5zcGxpdCgnICcpLmZvckVhY2godGhlbWVGb3JUb2tlbiA9PiB7XG4gICAgICAgICAgICAgIGlmIChuZXcgUmVnRXhwKCdeJyArIHRoZW1lRm9yVG9rZW4uc3BsaXQoJyonKS5qb2luKCcuKicpICsgJyQnKS50ZXN0KHRoaXMuaXMpKSB7XG4gICAgICAgICAgICAgICAgaGFzVGhlbWVzID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmNsdWRlU3R5bGUobW9kdWxlTmFtZSwgdGVtcGxhdGUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgaWYgKCFoYXNUaGVtZXMgJiYgbW9kdWxlc1tkZWZhdWx0TW9kdWxlTmFtZV0pIHtcbiAgICAgIC8vIE5vIHRoZW1lIG1vZHVsZXMgZm91bmQsIGluY2x1ZGUgdGhlIGRlZmF1bHQgbW9kdWxlIGlmIGl0IGV4aXN0c1xuICAgICAgdGhpcy5faW5jbHVkZVN0eWxlKGRlZmF1bHRNb2R1bGVOYW1lLCB0ZW1wbGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgLyoqIEBwcml2YXRlICovXG4gIHN0YXRpYyBfaW5jbHVkZVN0eWxlKG1vZHVsZU5hbWUsIHRlbXBsYXRlKSB7XG4gICAgaWYgKHRlbXBsYXRlICYmICF0ZW1wbGF0ZS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoYHN0eWxlW2luY2x1ZGU9XCIke21vZHVsZU5hbWV9XCJdYCkpIHtcbiAgICAgIGNvbnN0IHN0eWxlRWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICAgICAgc3R5bGVFbC5zZXRBdHRyaWJ1dGUoJ2luY2x1ZGUnLCBtb2R1bGVOYW1lKTtcbiAgICAgIHRlbXBsYXRlLmNvbnRlbnQuYXBwZW5kQ2hpbGQoc3R5bGVFbCk7XG4gICAgfVxuICB9XG5cbn07XG4iLCIvKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IFRoZW1lUHJvcGVydHlNaXhpbiA9IHN1cGVyQ2xhc3MgPT4gY2xhc3MgVmFhZGluVGhlbWVQcm9wZXJ0eU1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBIZWxwZXIgcHJvcGVydHkgd2l0aCB0aGVtZSBhdHRyaWJ1dGUgdmFsdWUgZmFjaWxpdGF0aW5nIHByb3BhZ2F0aW9uXG4gICAgICAgKiBpbiBzaGFkb3cgRE9NLlxuICAgICAgICpcbiAgICAgICAqIEVuYWJsZXMgdGhlIGNvbXBvbmVudCBpbXBsZW1lbnRhdGlvbiB0byBwcm9wYWdhdGUgdGhlIGB0aGVtZWBcbiAgICAgICAqIGF0dHJpYnV0ZSB2YWx1ZSB0byB0aGUgc3ViY29tcG9uZW50cyBpbiBTaGFkb3cgRE9NIGJ5IGJpbmRpbmdcbiAgICAgICAqIHRoZSBzdWJjb21wb25lbnTigJlzIFwidGhlbWVcIiBhdHRyaWJ1dGUgdG8gdGhlIGB0aGVtZWAgcHJvcGVydHkgb2ZcbiAgICAgICAqIHRoZSBob3N0LlxuICAgICAgICpcbiAgICAgICAqICoqTk9URToqKiBFeHRlbmRpbmcgdGhlIG1peGluIG9ubHkgcHJvdmlkZXMgdGhlIHByb3BlcnR5IGZvciBiaW5kaW5nLFxuICAgICAgICogYW5kIGRvZXMgbm90IG1ha2UgdGhlIHByb3BhZ2F0aW9uIGFsb25lLlxuICAgICAgICpcbiAgICAgICAqIFNlZSBbVGhlbWUgQXR0cmlidXRlIGFuZCBTdWJjb21wb25lbnRzXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi93aWtpLzUuLVRoZW1lLUF0dHJpYnV0ZS1hbmQtU3ViY29tcG9uZW50cykuXG4gICAgICAgKiBwYWdlIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAgICpcbiAgICAgICAqIEBwcm90ZWN0ZWRcbiAgICAgICAqL1xuICAgICAgdGhlbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICByZWFkT25seTogdHJ1ZVxuICAgICAgfVxuICAgIH07XG4gIH1cblxuICAvKiogQHByb3RlY3RlZCAqL1xuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG5cbiAgICBpZiAobmFtZSA9PT0gJ3RoZW1lJykge1xuICAgICAgdGhpcy5fc2V0VGhlbWUobmV3VmFsdWUpO1xuICAgIH1cbiAgfVxufTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7OztBQVNBO0FBRUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0JBO0FBRUE7Ozs7OztBQU1BO0FBRUE7Ozs7OztBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFxQkE7QUF0QkE7QUF3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTtBQUNBO0FBdkNBO0FBQUE7QUFBQTtBQUNBO0FBeUNBO0FBQ0E7QUEzQ0E7QUFBQTtBQUFBO0FBNENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBbkRBO0FBQUE7QUFBQTtBQW9EQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBOURBO0FBQUE7QUFBQTtBQStEQTtBQUNBO0FBQ0E7QUFDQTtBQWxFQTtBQUFBO0FBQ0E7QUFnQkE7QUFqQkE7QUFtQkE7QUFDQTtBQXBCQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBcUVBO0FBRUE7Ozs7Ozs7Ozs7OztBQy9HQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFpTEE7Ozs7Ozs7Ozs7OztBQ3RMQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQTZCQTtBQUVBO0FBQ0E7QUFBQTs7Ozs7O0FBS0E7Ozs7Ozs7Ozs7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF3Q0E7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQWdCQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBb0dBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pHQTs7Ozs7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTs7OztBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUNBO0FBR0E7Ozs7Ozs7QUFNQTtBQUVBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7Ozs7QUFLQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBR0E7QUFFQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBbkRBO0FBd0RBO0FBM0RBO0FBQUE7QUFBQTtBQTZEQTtBQUVBO0FBL0RBO0FBQ0E7QUFnRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQTtBQWNBO0FBQ0E7QUFoRkE7QUFBQTtBQUFBO0FBa0ZBO0FBQ0E7QUFuRkE7QUFBQTtBQUFBO0FBcUZBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF6R0E7QUFBQTtBQUFBO0FBNEdBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBM0hBO0FBQUE7QUFBQTtBQThIQTtBQUNBO0FBQ0E7QUFGQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7OztBQS9JQTtBQUFBO0FBQUE7QUErS0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQXJMQTtBQUFBO0FBQUE7QUFzSkE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVLQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFJQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFQQTtBQU9BO0FBQ0E7QUFiQTtBQUFBO0FBQUE7QUFlQTtBQUNBO0FBQ0E7QUFDQTtBQWxCQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQW9CQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK0ZBOzs7Ozs7O0FBR0E7QUFDQTtBQTZFQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFFQTtBQXpIQTtBQTJIQTs7O0FBRUE7QUFDQTtBQUdBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQWpCQTtBQWlCQTtBQUNBOzs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBalNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQVRBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7Ozs7QUFsZ0JBO0FBQ0E7QUF1eUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4OEJBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXJCQTtBQUFBO0FBQUE7QUFxQkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXJFQTtBQUFBO0FBQUE7QUFzRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0VBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQTBCQTtBQTNCQTtBQTZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQkE7QUFDQTtBQUNBO0FBRkE7QUFsQkE7QUF1QkE7QUF6QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=