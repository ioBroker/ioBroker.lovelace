(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~60eddf8d"],{

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
 * @fileoverview
 * @suppress {checkPrototypalTypes}
 * @license Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt The complete set of authors may be found
 * at http://polymer.github.io/AUTHORS.txt The complete set of contributors may
 * be found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by
 * Google as part of the polymer project is also subject to an additional IP
 * rights grant found at http://polymer.github.io/PATENTS.txt
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
   * @implements {Polymer_ElementMixin}
   * @extends {HTMLElement}
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

      /**
       * @override
       * @param {string} name Attribute name.
       * @param {?string} old The previous value for the attribute.
       * @param {?string} value The new value for the attribute.
       * @param {?string=} namespace The XML namespace for the attribute.
       * @return {undefined}
       */
      value: function attributeChangedCallback(name, old, value, namespace) {
        if (name == DISABLED_ATTR) {
          if (!this.__dataEnabled && value == null && this.isConnected) {
            _get(_getPrototypeOf(DisableUpgradeClass.prototype), "connectedCallback", this).call(this);
          }
        } else {
          _get(_getPrototypeOf(DisableUpgradeClass.prototype), "attributeChangedCallback", this).call(this, name, old, value,
          /** @type {null|string} */
          namespace);
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

      /**
       * @suppress {missingProperties} go/missingfnprops
       */
      get: function get() {
        return _get(_getPrototypeOf(DisableUpgradeClass), "observedAttributes", this).concat(DISABLED_ATTR);
      }
    }]);

    return DisableUpgradeClass;
  }(superClass);

  return DisableUpgradeClass;
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/color.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/color.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id=\"lumo-color\">\n  <template>\n    <style>\n      [theme~=\"dark\"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~=\"dark\"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-color-legacy\">\n  <template>\n    <style include=\"lumo-color\">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);
/* Only needed for IE11 when you want to use the dark palette inside the light palette */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    @font-face {\n      font-family: 'lumo-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,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) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: \"\\ea01\";\n      --lumo-icons-align-left: \"\\ea02\";\n      --lumo-icons-align-right: \"\\ea03\";\n      --lumo-icons-angle-down: \"\\ea04\";\n      --lumo-icons-angle-left: \"\\ea05\";\n      --lumo-icons-angle-right: \"\\ea06\";\n      --lumo-icons-angle-up: \"\\ea07\";\n      --lumo-icons-arrow-down: \"\\ea08\";\n      --lumo-icons-arrow-left: \"\\ea09\";\n      --lumo-icons-arrow-right: \"\\ea0a\";\n      --lumo-icons-arrow-up: \"\\ea0b\";\n      --lumo-icons-bar-chart: \"\\ea0c\";\n      --lumo-icons-bell: \"\\ea0d\";\n      --lumo-icons-calendar: \"\\ea0e\";\n      --lumo-icons-checkmark: \"\\ea0f\";\n      --lumo-icons-chevron-down: \"\\ea10\";\n      --lumo-icons-chevron-left: \"\\ea11\";\n      --lumo-icons-chevron-right: \"\\ea12\";\n      --lumo-icons-chevron-up: \"\\ea13\";\n      --lumo-icons-clock: \"\\ea14\";\n      --lumo-icons-cog: \"\\ea15\";\n      --lumo-icons-cross: \"\\ea16\";\n      --lumo-icons-download: \"\\ea17\";\n      --lumo-icons-dropdown: \"\\ea18\";\n      --lumo-icons-edit: \"\\ea19\";\n      --lumo-icons-error: \"\\ea1a\";\n      --lumo-icons-eye: \"\\ea1b\";\n      --lumo-icons-eye-disabled: \"\\ea1c\";\n      --lumo-icons-menu: \"\\ea1d\";\n      --lumo-icons-minus: \"\\ea1e\";\n      --lumo-icons-ordered-list: \"\\ea1f\";\n      --lumo-icons-phone: \"\\ea20\";\n      --lumo-icons-photo: \"\\ea21\";\n      --lumo-icons-play: \"\\ea22\";\n      --lumo-icons-plus: \"\\ea23\";\n      --lumo-icons-redo: \"\\ea24\";\n      --lumo-icons-reload: \"\\ea25\";\n      --lumo-icons-search: \"\\ea26\";\n      --lumo-icons-undo: \"\\ea27\";\n      --lumo-icons-unordered-list: \"\\ea28\";\n      --lumo-icons-upload: \"\\ea29\";\n      --lumo-icons-user: \"\\ea2a\";\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);
/* NOTICE: Generated with 'gulp icons' */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-menu-overlay-core\">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part=\"overlay\"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part=\"overlay\"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part=\"overlay\"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id=\"lumo-menu-overlay\">\n  <template>\n    <style include=\"lumo-overlay lumo-menu-overlay-core\">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part=\"overlay\"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part=\"content\"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part=\"backdrop\"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part=\"overlay\"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part=\"backdrop\"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part=\"overlay\"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);
/* Split as a separate module because combo box can only use the "fullscreen" styles */

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/

;

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-overlay\">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part=\"overlay\"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part=\"content\"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part=\"backdrop\"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part=\"backdrop\"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js":
/*!***********************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/sizing.js ***!
  \***********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js":
/*!************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/spacing.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/style.js":
/*!**********************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/style.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js":
/*!***************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/typography.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _version_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./version.js */ "./node_modules/@vaadin/vaadin-lumo-styles/version.js");
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_module_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-module.js */ "./node_modules/@polymer/polymer/lib/elements/dom-module.js");



var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, \"Roboto\", \"Segoe UI\", Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id=\"lumo-typography\">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can\u2019t combine with the above selector because that doesn\u2019t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~=\"font-size-s\"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~=\"font-size-xs\"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/version.js":
/*!************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/version.js ***!
  \************************************************************/
/*! exports provided: Lumo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Lumo", function() { return Lumo; });
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

var Lumo =
/*#__PURE__*/
function (_HTMLElement) {
  _inherits(Lumo, _HTMLElement);

  function Lumo() {
    _classCallCheck(this, Lumo);

    return _possibleConstructorReturn(this, _getPrototypeOf(Lumo).apply(this, arguments));
  }

  _createClass(Lumo, null, [{
    key: "version",
    get: function get() {
      return '1.5.0';
    }
  }]);

  return Lumo;
}(_wrapNativeSuper(HTMLElement));

customElements.define('vaadin-lumo-styles', Lumo);


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

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
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
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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

        function _class() {
          _classCallCheck(this, _class);

          return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
        }

        _createClass(_class, [{
          key: "connectedCallback",
          value: function connectedCallback() {
            if (window.ShadyCSS) {
              window.ShadyCSS.styleElement(this);
            }

            if (!this.shadowRoot) {
              this.attachShadow({
                mode: 'open'
              });
              this.shadowRoot.appendChild(document.importNode(styledTemplate.content, true));
            }
          }
        }], [{
          key: "is",
          get: function get() {
            return is;
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
 * @demo demo/index.html
 */


var OverlayElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(OverlayElement, _ThemableMixin);

  _createClass(OverlayElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
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
    var _this;

    _classCallCheck(this, OverlayElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(OverlayElement).call(this));
    _this._boundMouseDownListener = _this._mouseDownListener.bind(_assertThisInitialized(_this));
    _this._boundMouseUpListener = _this._mouseUpListener.bind(_assertThisInitialized(_this));
    _this._boundOutsideClickListener = _this._outsideClickListener.bind(_assertThisInitialized(_this));
    _this._boundKeydownListener = _this._keydownListener.bind(_assertThisInitialized(_this));
    _this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_3__["FlattenedNodesObserver"](_assertThisInitialized(_this), function (info) {
      _this._setTemplateFromNodes(info.addedNodes);
    }); // Listener for preventing closing of the paper-dialog and all components extending `iron-overlay-behavior`.

    _this._boundIronOverlayCanceledListener = _this._ironOverlayCanceled.bind(_assertThisInitialized(_this));

    if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
      _this._boundIosResizeListener = function () {
        return _this._detectIosNavbar();
      };
    }

    return _this;
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


      if (event.key === 'Tab' && this.focusTrap) {
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
      var _this2 = this;

      if (!this._instance) {
        this._ensureTemplatized();
      }

      if (opened) {
        // Store focused node.
        this.__restoreFocusNode = this._getActiveElement();

        this._animatedOpening();

        Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_2__["afterNextRender"])(this, function () {
          if (_this2.focusTrap && !_this2.contains(document._activeElement || document.activeElement)) {
            _this2._cycleTab(0, 0);
          }

          var evt = new CustomEvent('vaadin-overlay-open', {
            bubbles: true
          });

          _this2.dispatchEvent(evt);
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
      var _this3 = this;

      var handler = "__".concat(type, "Handler");

      var listener = function listener() {
        callback();

        _this3.removeEventListener('animationend', listener);

        delete _this3[handler];
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
      var _this4 = this;

      if (this.parentNode === document.body && this.hasAttribute('closing')) {
        this._flushAnimation('closing');
      }

      this._attachOverlay();

      this.setAttribute('opening', '');

      var finishOpening = function finishOpening() {
        _this4.removeAttribute('opening');

        document.addEventListener('iron-overlay-canceled', _this4._boundIronOverlayCanceledListener);

        if (!_this4.modeless) {
          _this4._enterModalState();
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
      var _this5 = this;

      if (this.hasAttribute('opening')) {
        this._flushAnimation('opening');
      }

      if (this._placeholder) {
        this.setAttribute('closing', '');

        var finishClosing = function finishClosing() {
          _this5.shadowRoot.querySelector('[part="overlay"]').style.removeProperty('pointer-events');

          _this5._exitModalState();

          document.removeEventListener('iron-overlay-canceled', _this5._boundIronOverlayCanceledListener);

          _this5._detachOverlay();

          _this5.removeAttribute('closing');

          if (_this5.restoreFocusOnClose && _this5.__restoreFocusNode) {
            // If the activeElement is `<body>` or inside the overlay,
            // we are allowed to restore the focus. In all the other
            // cases focus might have been moved elsewhere by another
            // component or by the user interaction (e.g. click on a
            // button outside the overlay).
            var activeElement = _this5._getActiveElement();

            if (activeElement === document.body || _this5._deepContains(activeElement)) {
              _this5.__restoreFocusNode.focus();
            }

            _this5.__restoreFocusNode = null;
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
      var _this6 = this;

      if (document.body.style.pointerEvents !== 'none') {
        // Set body pointer-events to 'none' to disable mouse interactions with
        // other document nodes.
        this._previousDocumentPointerEvents = document.body.style.pointerEvents;
        document.body.style.pointerEvents = 'none';
      } // Disable pointer events in other attached overlays


      OverlayElement.__attachedInstances.forEach(function (el) {
        if (el !== _this6 && !el.hasAttribute('opening') && !el.hasAttribute('closing')) {
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
      var _this7 = this;

      if (!this.content || !this._contentNodes) {
        return;
      }

      this._observer.disconnect();

      this._contentNodes.forEach(function (node) {
        if (node.parentNode === _this7.content) {
          _this7.content.removeChild(node);
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
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

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
             * in shadow DOM. Allows using `theme$="[[theme]]"` in the template.
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
//# sourceMappingURL=vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~60eddf8d.chunk.js.map