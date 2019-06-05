(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~more-info-dialog~panel-history~panel-logbook"],{

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _paper_spinner_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-spinner-styles.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-spinner-behavior.js */ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style include=\"paper-spinner-styles\"></style>\n\n  <div id=\"spinnerContainer\" class-name=\"[[__computeContainerClasses(active, __coolingDown)]]\" on-animationend=\"__reset\" on-webkit-animation-end=\"__reset\">\n    <div class=\"spinner-layer layer-1\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-2\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-3\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n\n    <div class=\"spinner-layer layer-4\">\n      <div class=\"circle-clipper left\">\n        <div class=\"circle\"></div>\n      </div>\n      <div class=\"circle-clipper right\">\n        <div class=\"circle\"></div>\n      </div>\n    </div>\n  </div>\n"]);

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






var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
template.setAttribute('strip-whitespace', '');
/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

Element providing a multiple color material design circular spinner.

    <paper-spinner active></paper-spinner>

The default spinner cycles between four layers of colors; by default they are
blue, red, yellow and green. It can be customized to cycle between four
different colors. Use <paper-spinner-lite> for single color spinners.

### Accessibility

Alt attribute should be set to provide adequate context for accessibility. If
not provided, it defaults to 'loading'. Empty alt can be provided to mark the
element as decorative if alternative content is provided in another form (e.g. a
text block following the spinner).

    <paper-spinner alt="Loading contacts list" active></paper-spinner>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-spinner-layer-1-color` | Color of the first spinner rotation | `--google-blue-500`
`--paper-spinner-layer-2-color` | Color of the second spinner rotation | `--google-red-500`
`--paper-spinner-layer-3-color` | Color of the third spinner rotation | `--google-yellow-500`
`--paper-spinner-layer-4-color` | Color of the fourth spinner rotation | `--google-green-500`
`--paper-spinner-stroke-width` | The width of the spinner stroke | 3px

@group Paper Elements
@element paper-spinner
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: template,
  is: 'paper-spinner',
  behaviors: [_paper_spinner_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperSpinnerBehavior"]]
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/src/vaadin-button.js ***!
  \*****************************************************************/
/*! exports provided: ButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonElement", function() { return ButtonElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"]);

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
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * `<vaadin-button>` is a Web Component providing an accessible and customizable button.
 *
 * ```html
 * <vaadin-button>
 * </vaadin-button>
 * ```
 *
 * ```js
 * document.querySelector('vaadin-button').addEventListener('click', () => alert('Hello World!'));
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label (text) inside the button
 * `prefix` | A slot for e.g. an icon before the label
 * `suffix` | A slot for e.g. an icon after the label
 *
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `active` | Set when the button is pressed down, either with mouse, touch or the keyboard.
 * `disabled` | Set when the button is disabled.
 * `focus-ring` | Set when the button is focused using the keyboard.
 * `focused` | Set when the button is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

var ButtonElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(ButtonElement, _ElementMixin);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonElement).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ButtonElement.prototype), "ready", this).call(this); // Leaving default role in the native button, makes navigation announcement
      // being different when using focus navigation (tab) versus using normal
      // navigation (arrows). The first way announces the label on a button
      // since the focus is moved programmatically, and the second on a group.


      this.setAttribute('role', 'button');
      this.$.button.setAttribute('role', 'presentation');

      this._addActiveListeners();
    }
    /**
     * @protected
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ButtonElement.prototype), "disconnectedCallback", this).call(this); // `active` state is preserved when the element is disconnected between keydown and keyup events.
      // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.


      if (this.hasAttribute('active')) {
        this.removeAttribute('active');
      }
    }
  }, {
    key: "_addActiveListeners",
    value: function _addActiveListeners() {
      var _this = this;

      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'down', function () {
        return !_this.disabled && _this.setAttribute('active', '');
      });
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'up', function () {
        return _this.removeAttribute('active');
      });
      this.addEventListener('keydown', function (e) {
        return !_this.disabled && [13, 32].indexOf(e.keyCode) >= 0 && _this.setAttribute('active', '');
      });
      this.addEventListener('keyup', function () {
        return _this.removeAttribute('active');
      });
      this.addEventListener('blur', function () {
        return _this.removeAttribute('active');
      });
    }
    /**
     * @protected
     */

  }, {
    key: "focusElement",
    get: function get() {
      return this.$.button;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-button';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.2.0';
    }
  }]);

  return ButtonElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

customElements.define(ButtonElement.is, ButtonElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-button\" theme-for=\"vaadin-button\">\n  <template>\n    <style>\n      :host {\n        /* Sizing */\n        --lumo-button-size: var(--lumo-size-m);\n        min-width: calc(var(--lumo-button-size) * 2);\n        height: var(--lumo-button-size);\n        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);\n        margin: var(--lumo-space-xs) 0;\n        box-sizing: border-box;\n        /* Style */\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 500;\n        color: var(--_lumo-button-color, var(--lumo-primary-text-color));\n        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));\n        border-radius: var(--lumo-border-radius);\n        cursor: default;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Set only for the internal parts so we don\u2019t affect the host vertical alignment */\n      [part=\"label\"],\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      [part=\"label\"] {\n        padding: calc(var(--lumo-button-size) / 6) 0;\n      }\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-button-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"large\"]) {\n        font-size: var(--lumo-font-size-l);\n        --lumo-button-size: var(--lumo-size-l);\n      }\n\n      /* This needs to be the last selector for it to take priority */\n      :host([disabled][disabled]) {\n        pointer-events: none;\n        color: var(--lumo-disabled-text-color);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* For interaction states */\n      :host::before,\n      :host::after {\n        content: \"\";\n        /* We rely on the host always being relative */\n        position: absolute;\n        z-index: 1;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        background-color: currentColor;\n        border-radius: inherit;\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n      }\n\n      /* Hover */\n\n      :host(:hover)::before {\n        opacity: 0.05;\n      }\n\n      /* Disable hover for touch devices */\n      @media (pointer: coarse) {\n        :host(:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      /* Active */\n\n      :host::after {\n        transition: opacity 1.4s, transform 0.1s;\n        filter: blur(8px);\n      }\n\n      :host([active])::before {\n        opacity: 0.1;\n        transition-duration: 0s;\n      }\n\n      :host([active])::after {\n        opacity: 0.1;\n        transition-duration: 0s, 0s;\n        transform: scale(0);\n      }\n\n      /* Keyboard focus */\n\n      :host([focus-ring]) {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Types (primary, tertiary, tertiary-inline */\n\n      :host([theme~=\"tertiary\"]),\n      :host([theme~=\"tertiary-inline\"]) {\n        background-color: transparent !important;\n        transition: opacity 0.2s;\n        min-width: 0;\n      }\n\n      :host([theme~=\"tertiary\"])::before,\n      :host([theme~=\"tertiary-inline\"])::before {\n        display: none;\n      }\n\n      :host([theme~=\"tertiary\"]) {\n        padding: 0 calc(var(--lumo-button-size) / 6);\n      }\n\n      @media (hover: hover) {\n        :host([theme*=\"tertiary\"]:not([active]):hover) {\n          opacity: 0.8;\n        }\n      }\n\n      :host([theme~=\"tertiary\"][active]),\n      :host([theme~=\"tertiary-inline\"][active]) {\n        opacity: 0.5;\n        transition-duration: 0s;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) {\n        margin: 0;\n        height: auto;\n        padding: 0;\n        line-height: inherit;\n        font-size: inherit;\n      }\n\n      :host([theme~=\"tertiary-inline\"]) [part=\"label\"] {\n        padding: 0;\n        overflow: visible;\n        line-height: inherit;\n      }\n\n      :host([theme~=\"primary\"]) {\n        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));\n        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));\n        font-weight: 600;\n        min-width: calc(var(--lumo-button-size) * 2.5);\n      }\n\n      :host([theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-primary-color-50pct);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      :host([theme~=\"primary\"]:hover)::before {\n        opacity: 0.1;\n      }\n\n      :host([theme~=\"primary\"][active])::before {\n        background-color: var(--lumo-shade-20pct);\n      }\n\n      @media (pointer: coarse) {\n        :host([theme~=\"primary\"][active])::before {\n          background-color: var(--lumo-shade-60pct);\n        }\n\n        :host([theme~=\"primary\"]:not([active]):hover)::before {\n          opacity: 0;\n        }\n      }\n\n      :host([theme~=\"primary\"][active])::after {\n        opacity: 0.2;\n      }\n\n      /* Colors (success, error, contrast) */\n\n      :host([theme~=\"success\"]) {\n        color: var(--lumo-success-text-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-success-color);\n        color: var(--lumo-success-contrast-color);\n      }\n\n      :host([theme~=\"success\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-success-color-50pct);\n      }\n\n      :host([theme~=\"error\"]) {\n        color: var(--lumo-error-text-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-error-color);\n        color: var(--lumo-error-contrast-color);\n      }\n\n      :host([theme~=\"error\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([theme~=\"contrast\"]) {\n        color: var(--lumo-contrast);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"]) {\n        background-color: var(--lumo-contrast);\n        color: var(--lumo-base-color);\n      }\n\n      :host([theme~=\"contrast\"][theme~=\"primary\"][disabled]) {\n        background-color: var(--lumo-contrast-50pct);\n      }\n\n      /* Icons */\n\n      [part] ::slotted(iron-icon) {\n        display: inline-block;\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"prefix\"] {\n        margin-left: -0.25em;\n        margin-right: 0.25em;\n      }\n\n      [part=\"suffix\"] {\n        margin-left: 0.25em;\n        margin-right: -0.25em;\n      }\n\n      /* Icon-only */\n\n      :host([theme~=\"icon\"]) {\n        min-width: var(--lumo-button-size);\n        padding-left: calc(var(--lumo-button-size) / 4);\n        padding-right: calc(var(--lumo-button-size) / 4);\n      }\n\n      :host([theme~=\"icon\"]) [part=\"prefix\"],\n      :host([theme~=\"icon\"]) [part=\"suffix\"] {\n        margin-left: 0;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-button-styles.js */ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button-styles.js");
/* harmony import */ var _src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js ***!
  \***************************************************************************************/
/*! exports provided: ControlStateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStateMixin", function() { return ControlStateMixin; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
 * No need to expose these properties in the API docs.
 * @polymerMixin
 */
var TabIndexMixin = function TabIndexMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinTabIndexMixin, _superClass);

      function VaadinTabIndexMixin() {
        _classCallCheck(this, VaadinTabIndexMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinTabIndexMixin).apply(this, arguments));
      }

      _createClass(VaadinTabIndexMixin, null, [{
        key: "properties",
        get: function get() {
          var properties = {
            /**
             * Internal property needed to listen to `tabindex` attribute changes.
             *
             * For changing the tabindex of this component use the native `tabIndex` property.
             * @private
             */
            tabindex: {
              type: Number,
              value: 0,
              reflectToAttribute: true,
              observer: '_tabindexChanged'
            }
          };

          if (window.ShadyDOM) {
            // ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
            properties['tabIndex'] = properties.tabindex;
          }

          return properties;
        }
      }]);

      return VaadinTabIndexMixin;
    }(superClass)
  );
};
/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 * @polymerMixin
 */


var ControlStateMixin = function ControlStateMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_TabIndexMixin) {
      _inherits(VaadinControlStateMixin, _TabIndexMixin);

      function VaadinControlStateMixin() {
        _classCallCheck(this, VaadinControlStateMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinControlStateMixin).apply(this, arguments));
      }

      _createClass(VaadinControlStateMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          this.addEventListener('focusin', function (e) {
            if (e.composedPath()[0] === _this) {
              _this._focus(e);
            } else if (e.composedPath().indexOf(_this.focusElement) !== -1 && !_this.disabled) {
              _this._setFocused(true);
            }
          });
          this.addEventListener('focusout', function (e) {
            return _this._setFocused(false);
          }); // In super.ready() other 'focusin' and 'focusout' listeners might be
          // added, so we call it after our own ones to ensure they execute first.
          // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
          // input field on iOS after “Done” is pressed.

          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "ready", this).call(this); // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
          // where focusout event does not go out of shady DOM because composed property in the event is not true


          var ensureEventComposed = function ensureEventComposed(e) {
            if (!e.composed) {
              e.target.dispatchEvent(new CustomEvent(e.type, {
                bubbles: true,
                composed: true,
                cancelable: false
              }));
            }
          };

          this.shadowRoot.addEventListener('focusin', ensureEventComposed);
          this.shadowRoot.addEventListener('focusout', ensureEventComposed);
          this.addEventListener('keydown', function (e) {
            if (!e.defaultPrevented && e.keyCode === 9) {
              if (e.shiftKey) {
                // Flag is checked in _focus event handler.
                _this._isShiftTabbing = true;
                HTMLElement.prototype.focus.apply(_this);

                _this._setFocused(false); // Event handling in IE is asynchronous and the flag is removed asynchronously as well


                setTimeout(function () {
                  return _this._isShiftTabbing = false;
                }, 0);
              } else {
                // Workaround for FF63-65 bug that causes the focus to get lost when
                // blurring a slotted component with focusable shadow root content
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
                // TODO: Remove when safe
                var firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);

                if (firefox && parseFloat(firefox[1]) >= 63 && parseFloat(firefox[1]) < 66 && _this.parentNode && _this.nextSibling) {
                  var fakeTarget = document.createElement('input');
                  fakeTarget.style.position = 'absolute';
                  fakeTarget.style.opacity = 0;
                  fakeTarget.tabIndex = _this.tabIndex;

                  _this.parentNode.insertBefore(fakeTarget, _this.nextSibling);

                  fakeTarget.focus();
                  fakeTarget.addEventListener('focusout', function () {
                    return _this.parentNode.removeChild(fakeTarget);
                  });
                }
              }
            }
          });

          if (this.autofocus && !this.focused && !this.disabled) {
            window.requestAnimationFrame(function () {
              _this._focus();

              _this._setFocused(true);

              _this.setAttribute('focus-ring', '');
            });
          }

          this._boundKeydownListener = this._bodyKeydownListener.bind(this);
          this._boundKeyupListener = this._bodyKeyupListener.bind(this);
        }
        /**
         * @protected
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "connectedCallback", this).call(this);

          document.body.addEventListener('keydown', this._boundKeydownListener, true);
          document.body.addEventListener('keyup', this._boundKeyupListener, true);
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "disconnectedCallback", this).call(this);

          document.body.removeEventListener('keydown', this._boundKeydownListener, true);
          document.body.removeEventListener('keyup', this._boundKeyupListener, true); // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
          // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

          if (this.hasAttribute('focused')) {
            this._setFocused(false);
          }
        }
      }, {
        key: "_setFocused",
        value: function _setFocused(focused) {
          if (focused) {
            this.setAttribute('focused', '');
          } else {
            this.removeAttribute('focused');
          } // focus-ring is true when the element was focused from the keyboard.
          // Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI


          if (focused && this._tabPressed) {
            this.setAttribute('focus-ring', '');
          } else {
            this.removeAttribute('focus-ring');
          }
        }
      }, {
        key: "_bodyKeydownListener",
        value: function _bodyKeydownListener(e) {
          this._tabPressed = e.keyCode === 9;
        }
      }, {
        key: "_bodyKeyupListener",
        value: function _bodyKeyupListener() {
          this._tabPressed = false;
        }
        /**
         * Any element extending this mixin is required to implement this getter.
         * It returns the actual focusable element in the component.
         */

      }, {
        key: "_focus",
        value: function _focus(e) {
          if (this._isShiftTabbing) {
            return;
          }

          this.focusElement.focus();

          this._setFocused(true);
        }
        /**
         * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
         * @private
         */

      }, {
        key: "focus",
        value: function focus() {
          if (!this.focusElement || this.disabled) {
            return;
          }

          this.focusElement.focus();

          this._setFocused(true);
        }
        /**
         * Native bluring in the host element does nothing because it does not have the focus.
         * In chrome it works, but not in FF.
         * @private
         */

      }, {
        key: "blur",
        value: function blur() {
          this.focusElement.blur();

          this._setFocused(false);
        }
      }, {
        key: "_disabledChanged",
        value: function _disabledChanged(disabled) {
          this.focusElement.disabled = disabled;

          if (disabled) {
            this.blur();
            this._previousTabIndex = this.tabindex;
            this.tabindex = -1;
            this.setAttribute('aria-disabled', 'true');
          } else {
            if (typeof this._previousTabIndex !== 'undefined') {
              this.tabindex = this._previousTabIndex;
            }

            this.removeAttribute('aria-disabled');
          }
        }
      }, {
        key: "_tabindexChanged",
        value: function _tabindexChanged(tabindex) {
          if (tabindex !== undefined) {
            this.focusElement.tabIndex = tabindex;
          }

          if (this.disabled && this.tabindex) {
            // If tabindex attribute was changed while checkbox was disabled
            if (this.tabindex !== -1) {
              this._previousTabIndex = this.tabindex;
            }

            this.tabindex = tabindex = undefined;
          }

          if (window.ShadyDOM) {
            this.setProperties({
              tabIndex: tabindex,
              tabindex: tabindex
            });
          }
        }
        /**
         * @protected
         */

      }, {
        key: "click",
        value: function click() {
          if (!this.disabled) {
            _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "click", this).call(this);
          }
        }
      }, {
        key: "focusElement",
        get: function get() {
          window.console.warn("Please implement the 'focusElement' property in <".concat(this.localName, ">"));
          return this;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Specify that this control should have input focus when the page loads.
             */
            autofocus: {
              type: Boolean
            },

            /**
             * Stores the previous value of tabindex attribute of the disabled element
             */
            _previousTabIndex: {
              type: Number
            },

            /**
             * If true, the user cannot interact with this element.
             */
            disabled: {
              type: Boolean,
              observer: '_disabledChanged',
              reflectToAttribute: true
            },
            _isShiftTabbing: {
              type: Boolean
            }
          };
        }
      }]);

      return VaadinControlStateMixin;
    }(TabIndexMixin(superClass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js ***!
  \**********************************************************************************/
/*! exports provided: DatePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerHelper", function() { return DatePickerHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var DatePickerHelper =
/*#__PURE__*/
function () {
  function VaadinDatePickerHelper() {
    _classCallCheck(this, VaadinDatePickerHelper);
  }

  _createClass(VaadinDatePickerHelper, null, [{
    key: "_getISOWeekNumber",

    /**
     * Get ISO 8601 week number for the given date.
     *
     * @param {Date} Date object
     * @return {Number} Week number
     */
    value: function _getISOWeekNumber(date) {
      // Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
      var dayOfWeek = date.getDay(); // 0 == sunday
      // ISO 8601 use weeks that start on monday so we use
      // mon=1,tue=2,...sun=7;

      if (dayOfWeek === 0) {
        dayOfWeek = 7;
      } // Find nearest thursday (defines the week in ISO 8601). The week number
      // for the nearest thursday is the same as for the target date.


      var nearestThursdayDiff = 4 - dayOfWeek; // 4 is thursday

      var nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1000);
      var firstOfJanuary = new Date(0, 0);
      firstOfJanuary.setFullYear(nearestThursday.getFullYear());
      var timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime(); // Rounding the result, as the division doesn't result in an integer
      // when the given date is inside daylight saving time period.

      var daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1000));
      return Math.floor(daysSinceFirstOfJanuary / 7 + 1);
    }
    /**
     * Check if two dates are equal.
     *
     * @param {Date} date1
     * @param {Date} date2
     * @return {Boolean} True if the given date objects refer to the same date
     */

  }, {
    key: "_dateEquals",
    value: function _dateEquals(date1, date2) {
      return date1 instanceof Date && date2 instanceof Date && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    }
    /**
     * Check if the given date is in the range of allowed dates.
     *
     * @param {Date} date The date to check
     * @param {Date} min Range start
     * @param {Date} max Range end
     * @return {Boolean} True if the date is in the range
     */

  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return (!min || date >= min) && (!max || date <= max);
    }
    /**
     * Get closest date from array of dates.
     *
     * @param {Date} date The date to compare dates with
     * @param {Array} dates Array of date objects
     * @return {Date} Closest date
     */

  }, {
    key: "_getClosestDate",
    value: function _getClosestDate(date, dates) {
      return dates.filter(function (date) {
        return date !== undefined;
      }).reduce(function (closestDate, candidate) {
        if (!candidate) {
          return closestDate;
        }

        if (!closestDate) {
          return candidate;
        }

        var candidateDiff = Math.abs(date.getTime() - candidate.getTime());
        var closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
        return candidateDiff < closestDateDiff ? candidate : closestDate;
      });
    }
    /**
     * Extracts the basic component parts of a date (day, month and year)
     * to the expected format.
     */

  }, {
    key: "_extractDateParts",
    value: function _extractDateParts(date) {
      return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    }
  }]);

  return VaadinDatePickerHelper;
}();

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js ***!
  \*********************************************************************************/
/*! exports provided: DatePickerMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerMixin", function() { return DatePickerMixin; });
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * @polymerMixin
 */

var DatePickerMixin = function DatePickerMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_mixinBehaviors) {
      _inherits(VaadinDatePickerMixin, _mixinBehaviors);

      function VaadinDatePickerMixin() {
        _classCallCheck(this, VaadinDatePickerMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinDatePickerMixin).apply(this, arguments));
      }

      _createClass(VaadinDatePickerMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinDatePickerMixin.prototype), "ready", this).call(this);

          this._boundOnScroll = this._onScroll.bind(this);
          this._boundFocus = this._focus.bind(this);
          this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(this);
          Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__["addListener"])(this, 'tap', this.open);
          this.addEventListener('touchend', this._preventDefault.bind(this));
          this.addEventListener('keydown', this._onKeydown.bind(this));
          this.addEventListener('input', this._onUserInput.bind(this));
          this.addEventListener('focus', function (e) {
            return _this._noInput && e.target.blur();
          });
        }
      }, {
        key: "_initOverlay",
        value: function _initOverlay() {
          var _this2 = this;

          this.$.overlay.removeAttribute('disable-upgrade');
          this._overlayInitialized = true;
          this.$.overlay.addEventListener('opened-changed', function (e) {
            return _this2.opened = e.detail.value;
          });

          this._overlayContent.addEventListener('close', this._close.bind(this));

          this._overlayContent.addEventListener('focus-input', this._focusAndSelect.bind(this));

          this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._boundFocus); // Keep focus attribute in focusElement for styling

          this._overlayContent.addEventListener('focus', function () {
            return _this2.focusElement._setFocused(true);
          });

          this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinDatePickerMixin.prototype), "disconnectedCallback", this).call(this);

          if (this._overlayInitialized) {
            this.$.overlay.removeEventListener('vaadin-overlay-escape-press', this._boundFocus);
          }

          this.opened = false;
        }
        /**
         * Opens the dropdown.
         */

      }, {
        key: "open",
        value: function open() {
          if (!this.disabled && !this.readonly) {
            this.opened = true;
          }
        }
      }, {
        key: "_close",
        value: function _close(e) {
          if (e) {
            e.stopPropagation();
          }

          this._focus();

          this.close();
        }
        /**
         * Closes the dropdown.
         */

      }, {
        key: "close",
        value: function close() {
          if (this._overlayInitialized) {
            this.$.overlay.close();
          }
        }
      }, {
        key: "_parseDate",
        value: function _parseDate(str) {
          // Parsing with RegExp to ensure correct format
          var parts = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);

          if (!parts) {
            return;
          }

          var date = new Date(0, 0); // Wrong date (1900-01-01), but with midnight in local time

          date.setFullYear(parseInt(parts[1], 10));
          date.setMonth(parseInt(parts[2], 10) - 1);
          date.setDate(parseInt(parts[3], 10));
          return date;
        }
      }, {
        key: "_isNoInput",
        value: function _isNoInput(fullscreen, ios, i18n) {
          return !this._inputElement || fullscreen || ios || !i18n.parseDate;
        }
      }, {
        key: "_formatISO",
        value: function _formatISO(date) {
          if (!(date instanceof Date)) {
            return '';
          }

          var pad = function pad(num) {
            var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00';
            return (fmt + num).substr((fmt + num).length - fmt.length);
          };

          var yearSign = '';
          var yearFmt = '0000';
          var yearAbs = date.getFullYear();

          if (yearAbs < 0) {
            yearAbs = -yearAbs;
            yearSign = '-';
            yearFmt = '000000';
          } else if (date.getFullYear() >= 10000) {
            yearSign = '+';
            yearFmt = '000000';
          }

          var year = yearSign + pad(yearAbs, yearFmt);
          var month = pad(date.getMonth() + 1);
          var day = pad(date.getDate());
          return [year, month, day].join('-');
        }
      }, {
        key: "_openedChanged",
        value: function _openedChanged(opened) {
          if (opened && !this._overlayInitialized) {
            this._initOverlay();
          }

          if (this._overlayInitialized) {
            this.$.overlay.opened = opened;
          }

          if (opened) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_selectedDateChanged",
        value: function _selectedDateChanged(selectedDate, formatDate) {
          if (selectedDate === undefined || formatDate === undefined) {
            return;
          }

          if (this.__userInputOccurred) {
            this.__dispatchChange = true;
          }

          var inputValue = selectedDate && formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(selectedDate));

          var value = this._formatISO(selectedDate);

          if (value !== this.value) {
            this.validate(inputValue);
            this.value = value;
          }

          this.__userInputOccurred = false;
          this.__dispatchChange = false;
          this._focusedDate = selectedDate;
          this._inputValue = selectedDate ? inputValue : '';
        }
      }, {
        key: "_focusedDateChanged",
        value: function _focusedDateChanged(focusedDate, formatDate) {
          if (focusedDate === undefined || formatDate === undefined) {
            return;
          }

          this.__userInputOccurred = true;

          if (!this._ignoreFocusedDateChange && !this._noInput) {
            this._inputValue = focusedDate ? formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(focusedDate)) : '';
          }
        }
      }, {
        key: "_updateHasValue",
        value: function _updateHasValue(value) {
          if (value) {
            this.setAttribute('has-value', '');
          } else {
            this.removeAttribute('has-value');
          }
        }
      }, {
        key: "__getOverlayTheme",
        value: function __getOverlayTheme(theme, overlayInitialized) {
          if (overlayInitialized) {
            return theme;
          }
        }
      }, {
        key: "_handleDateChange",
        value: function _handleDateChange(property, value, oldValue) {
          if (!value) {
            this[property] = '';
            return;
          }

          var date = this._parseDate(value);

          if (!date) {
            this.value = oldValue;
            return;
          }

          if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(this[property], date)) {
            this[property] = date;
          }
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(value, oldValue) {
          if (this.__dispatchChange) {
            this.dispatchEvent(new CustomEvent('change', {
              bubbles: true
            }));
          }

          this._handleDateChange('_selectedDate', value, oldValue);
        }
      }, {
        key: "_minChanged",
        value: function _minChanged(value, oldValue) {
          this._handleDateChange('_minDate', value, oldValue);
        }
      }, {
        key: "_maxChanged",
        value: function _maxChanged(value, oldValue) {
          this._handleDateChange('_maxDate', value, oldValue);
        }
      }, {
        key: "_updateAlignmentAndPosition",
        value: function _updateAlignmentAndPosition() {
          if (!this._overlayInitialized) {
            return;
          }

          if (!this._fullscreen) {
            var inputRect = this._inputElement.getBoundingClientRect();

            var bottomAlign = inputRect.top > window.innerHeight / 2;
            var rightAlign = inputRect.left + this.clientWidth / 2 > window.innerWidth / 2;

            if (rightAlign) {
              var viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
              this.$.overlay.setAttribute('right-aligned', '');
              this.$.overlay.style.removeProperty('left');
              this.$.overlay.style.right = viewportWidth - inputRect.right + 'px';
            } else {
              this.$.overlay.removeAttribute('right-aligned');
              this.$.overlay.style.removeProperty('right');
              this.$.overlay.style.left = inputRect.left + 'px';
            }

            if (bottomAlign) {
              var viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
              this.$.overlay.setAttribute('bottom-aligned', '');
              this.$.overlay.style.removeProperty('top');
              this.$.overlay.style.bottom = viewportHeight - inputRect.top + 'px';
            } else {
              this.$.overlay.removeAttribute('bottom-aligned');
              this.$.overlay.style.removeProperty('bottom');
              this.$.overlay.style.top = inputRect.bottom + 'px';
            }
          }

          this.$.overlay.setAttribute('dir', getComputedStyle(this._inputElement).getPropertyValue('direction'));

          this._overlayContent._repositionYearScroller();
        }
      }, {
        key: "_fullscreenChanged",
        value: function _fullscreenChanged() {
          if (this._overlayInitialized && this.$.overlay.opened) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_onOverlayOpened",
        value: function _onOverlayOpened() {
          this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring');

          var parsedInitialPosition = this._parseDate(this.initialPosition);

          var initialPosition = this._selectedDate || this._overlayContent.initialPosition || parsedInitialPosition || new Date();

          if (parsedInitialPosition || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(initialPosition, this._minDate, this._maxDate)) {
            this._overlayContent.initialPosition = initialPosition;
          } else {
            this._overlayContent.initialPosition = _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._getClosestDate(initialPosition, [this._minDate, this._maxDate]);
          }

          this._overlayContent.scrollToDate(this._overlayContent.focusedDate || this._overlayContent.initialPosition); // Have a default focused date


          this._ignoreFocusedDateChange = true;
          this._overlayContent.focusedDate = this._overlayContent.focusedDate || this._overlayContent.initialPosition;
          this._ignoreFocusedDateChange = false;
          window.addEventListener('scroll', this._boundOnScroll, true);
          this.addEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

          if (this._webkitOverflowScroll) {
            this._touchPrevented = this._preventWebkitOverflowScrollingTouch(this.parentElement);
          }

          if (this._focusOverlayOnOpen) {
            this._overlayContent.focus();

            this._focusOverlayOnOpen = false;
          } else {
            this._focus();
          }

          if (this._noInput && this.focusElement) {
            this.focusElement.blur();
          }

          this.updateStyles();
          this._ignoreAnnounce = false;
        } // A hack needed for iOS to prevent dropdown from being clipped in an
        // ancestor container with -webkit-overflow-scrolling: touch;

      }, {
        key: "_preventWebkitOverflowScrollingTouch",
        value: function _preventWebkitOverflowScrollingTouch(element) {
          var result = [];

          while (element) {
            if (window.getComputedStyle(element).webkitOverflowScrolling === 'touch') {
              var oldInlineValue = element.style.webkitOverflowScrolling;
              element.style.webkitOverflowScrolling = 'auto';
              result.push({
                element: element,
                oldInlineValue: oldInlineValue
              });
            }

            element = element.parentElement;
          }

          return result;
        }
      }, {
        key: "_onOverlayClosed",
        value: function _onOverlayClosed() {
          this._ignoreAnnounce = true;
          window.removeEventListener('scroll', this._boundOnScroll, true);
          this.removeEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

          if (this._touchPrevented) {
            this._touchPrevented.forEach(function (prevented) {
              return prevented.element.style.webkitOverflowScrolling = prevented.oldInlineValue;
            });

            this._touchPrevented = [];
          }

          this.updateStyles(); // Select the parsed input or focused date

          this._ignoreFocusedDateChange = true;

          if (this.i18n.parseDate) {
            var inputValue = this._inputValue || '';
            var dateObject = this.i18n.parseDate(inputValue);

            var parsedDate = dateObject && this._parseDate("".concat(dateObject.year, "-").concat(dateObject.month + 1, "-").concat(dateObject.day));

            if (this._isValidDate(parsedDate)) {
              this._selectedDate = parsedDate;
            } else {
              this._selectedDate = null;
              this._inputValue = inputValue;
            }
          } else if (this._focusedDate) {
            this._selectedDate = this._focusedDate;
          }

          this._ignoreFocusedDateChange = false;

          if (this._nativeInput && this._nativeInput.selectionStart) {
            this._nativeInput.selectionStart = this._nativeInput.selectionEnd;
          }

          this.validate();
        }
        /**
         * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
         *
         * @param {string} value Value to validate. Optional, defaults to user's input value.
         * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
         */

      }, {
        key: "validate",
        value: function validate(value) {
          // reset invalid state on the underlying text field
          this.invalid = false;
          value = value !== undefined ? value : this._inputValue;
          return !(this.invalid = !this.checkValidity(value));
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         *
         * Override the `checkValidity` method for custom validations.
         *
         * @param {string} value Value to validate. Optional, defaults to the selected date.
         * @return {boolean} True if the value is valid
         */

      }, {
        key: "checkValidity",
        value: function checkValidity(value) {
          var inputValid = !value || this._selectedDate && value === this.i18n.formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(this._selectedDate));

          var minMaxValid = !this._selectedDate || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(this._selectedDate, this._minDate, this._maxDate);

          var inputValidity = true;

          if (this._inputElement) {
            if (this._inputElement.checkValidity) {
              // vaadin native input elements have the checkValidity method
              inputValidity = this._inputElement.checkValidity(value);
            } else if (this._inputElement.validate) {
              // iron-form-elements have the validate API
              inputValidity = this._inputElement.validate(value);
            }
          }

          return inputValid && minMaxValid && inputValidity;
        }
      }, {
        key: "_onScroll",
        value: function _onScroll(e) {
          if (e.target === window || !this._overlayContent.contains(e.target)) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_focus",
        value: function _focus() {
          if (this._noInput) {
            this._overlayInitialized && this._overlayContent.focus();
          } else {
            this._inputElement.focus();
          }
        }
      }, {
        key: "_focusAndSelect",
        value: function _focusAndSelect() {
          this._focus();

          this._setSelectionRange(0, this._inputValue.length);
        }
      }, {
        key: "_setSelectionRange",
        value: function _setSelectionRange(a, b) {
          if (this._nativeInput && this._nativeInput.setSelectionRange) {
            this._nativeInput.setSelectionRange(a, b);
          }
        }
      }, {
        key: "_preventDefault",
        value: function _preventDefault(e) {
          e.preventDefault();
        }
        /**
         * Keyboard Navigation
         */

      }, {
        key: "_eventKey",
        value: function _eventKey(e) {
          var keys = ['down', 'up', 'enter', 'esc', 'tab'];

          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];

            if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
              return k;
            }
          }
        }
      }, {
        key: "_isValidDate",
        value: function _isValidDate(d) {
          return d && !isNaN(d.getTime());
        }
      }, {
        key: "_onKeydown",
        value: function _onKeydown(e) {
          if (this._noInput) {
            // The input element cannot be readonly as it would conflict with
            // the required attribute. Both are not allowed on an input element.
            // Therefore we prevent default on most keydown events.
            var allowedKeys = [9 // tab
            ];

            if (allowedKeys.indexOf(e.keyCode) === -1) {
              e.preventDefault();
            }
          }

          switch (this._eventKey(e)) {
            case 'down':
            case 'up':
              // prevent scrolling the page with arrows
              e.preventDefault();

              if (this.opened) {
                this._overlayContent.focus();

                this._overlayContent._onKeydown(e);
              } else {
                this._focusOverlayOnOpen = true;
                this.open();
              }

              break;

            case 'enter':
              {
                var dateObject = this.i18n.parseDate(this._inputValue);

                var parsedDate = dateObject && this._parseDate(dateObject.year + '-' + (dateObject.month + 1) + '-' + dateObject.day);

                if (this._overlayContent.focusedDate && this._isValidDate(parsedDate)) {
                  this._selectedDate = this._overlayContent.focusedDate;
                }

                this.close();
                break;
              }

            case 'esc':
              this._focusedDate = this._selectedDate;

              this._close();

              break;

            case 'tab':
              if (this.opened) {
                e.preventDefault(); // Clear the selection range (remains visible on IE)

                this._setSelectionRange(0, 0);

                if (e.shiftKey) {
                  this._overlayContent.focusCancel();
                } else {
                  this._overlayContent.focus();

                  this._overlayContent.revealDate(this._focusedDate);
                }
              }

              break;
          }
        }
      }, {
        key: "_validateInput",
        value: function _validateInput(date, min, max) {
          if (date && (min || max)) {
            this.invalid = !_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(date, min, max);
          }
        }
      }, {
        key: "_onUserInput",
        value: function _onUserInput(e) {
          if (!this.opened) {
            this.open();
          }

          this._userInputValueChanged();
        }
      }, {
        key: "_userInputValueChanged",
        value: function _userInputValueChanged(value) {
          if (this.opened && this._inputValue) {
            var dateObject = this.i18n.parseDate && this.i18n.parseDate(this._inputValue);

            var parsedDate = dateObject && this._parseDate("".concat(dateObject.year, "-").concat(dateObject.month + 1, "-").concat(dateObject.day));

            if (this._isValidDate(parsedDate)) {
              this._ignoreFocusedDateChange = true;

              if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(parsedDate, this._focusedDate)) {
                this._focusedDate = parsedDate;
              }

              this._ignoreFocusedDateChange = false;
            }
          }
        }
      }, {
        key: "_announceFocusedDate",
        value: function _announceFocusedDate(_focusedDate, opened, _ignoreAnnounce) {
          if (opened && !_ignoreAnnounce) {
            this._overlayContent.announceFocusedDate();
          }
        }
      }, {
        key: "_inputElement",
        get: function get() {
          return this._input();
        }
      }, {
        key: "_nativeInput",
        get: function get() {
          if (this._inputElement) {
            // vaadin-text-field's input is focusElement
            // iron-input's input is inputElement
            return this._inputElement.focusElement ? this._inputElement.focusElement : this._inputElement.inputElement ? this._inputElement.inputElement : window.unwrap ? window.unwrap(this._inputElement) : this._inputElement;
          }
        }
      }, {
        key: "_overlayContent",
        get: function get() {
          return this.$.overlay.content.querySelector('#overlay-content');
        }
        /**
         * Fired when the user commits a value change.
         *
         * @event change
         */

      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * The current selected date.
             */
            _selectedDate: {
              type: Date
            },
            _focusedDate: Date,

            /**
             * The value for this element.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            value: {
              type: String,
              observer: '_valueChanged',
              notify: true,
              value: ''
            },

            /**
             * Set to true to mark the input as required.
             */
            required: {
              type: Boolean,
              value: false
            },

            /**
             * The name of this element.
             */
            name: {
              type: String
            },

            /**
             * Date which should be visible when there is no value selected.
             *
             * The same date formats as for the `value` property are supported.
             */
            initialPosition: String,

            /**
             * The label for this element.
             */
            label: String,

            /**
             * Set true to open the date selector overlay.
             */
            opened: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              observer: '_openedChanged'
            },

            /**
             * Set true to display ISO-8601 week numbers in the calendar. Notice that
             * displaying week numbers is only supported when `i18n.firstDayOfWeek`
             * is 1 (Monday).
             */
            showWeekNumbers: {
              type: Boolean
            },
            _fullscreen: {
              value: false,
              observer: '_fullscreenChanged'
            },
            _fullscreenMediaQuery: {
              value: '(max-width: 420px), (max-height: 420px)'
            },
            // An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
            // 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
            _touchPrevented: Array,

            /**
             * The object used to localize this component.
             * To change the default localization, replace the entire
             * _i18n_ object or just the property you want to modify.
             *
             * The object has the following JSON structure and default values:
                 {
                  // An array with the full names of months starting
                  // with January.
                  monthNames: [
                    'January', 'February', 'March', 'April', 'May',
                    'June', 'July', 'August', 'September',
                    'October', 'November', 'December'
                  ],
                   // An array of weekday names starting with Sunday. Used
                  // in screen reader announcements.
                  weekdays: [
                    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday'
                  ],
                   // An array of short weekday names starting with Sunday.
                  // Displayed in the calendar.
                  weekdaysShort: [
                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                  ],
                   // An integer indicating the first day of the week
                  // (0 = Sunday, 1 = Monday, etc.).
                  firstDayOfWeek: 0,
                   // Used in screen reader announcements along with week
                  // numbers, if they are displayed.
                  week: 'Week',
                   // Translation of the Calendar icon button title.
                  calendar: 'Calendar',
                   // Translation of the Clear icon button title.
                  clear: 'Clear',
                   // Translation of the Today shortcut button text.
                  today: 'Today',
                   // Translation of the Cancel button text.
                  cancel: 'Cancel',
                   // A function to format given `Object` as
                  // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
                  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
                  formatDate: d => {
                    // returns a string representation of the given
                    // object in 'MM/DD/YYYY' -format
                  },
                   // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
                  // Must properly parse (at least) text formatted by `formatDate`.
                  // Setting the property to null will disable keyboard input feature.
                  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
                  parseDate: text => {
                    // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
                    // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
                  }
                   // A function to format given `monthName` and
                  // `fullYear` integer as calendar title string.
                  formatTitle: (monthName, fullYear) => {
                    return monthName + ' ' + fullYear;
                  }
                }
              *
             * @default {English/US}
             */
            i18n: {
              type: Object,
              value: function value() {
                return {
                  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                  firstDayOfWeek: 0,
                  week: 'Week',
                  calendar: 'Calendar',
                  clear: 'Clear',
                  today: 'Today',
                  cancel: 'Cancel',
                  formatDate: function formatDate(d) {
                    var yearStr = String(d.year).replace(/\d+/, function (y) {
                      return '0000'.substr(y.length) + y;
                    });
                    return [d.month + 1, d.day, yearStr].join('/');
                  },
                  parseDate: function parseDate(text) {
                    var parts = text.split('/');
                    var today = new Date();
                    var date,
                        month = today.getMonth(),
                        year = today.getFullYear();

                    if (parts.length === 3) {
                      year = parseInt(parts[2]);

                      if (parts[2].length < 3 && year >= 0) {
                        year += year < 50 ? 2000 : 1900;
                      }

                      month = parseInt(parts[0]) - 1;
                      date = parseInt(parts[1]);
                    } else if (parts.length === 2) {
                      month = parseInt(parts[0]) - 1;
                      date = parseInt(parts[1]);
                    } else if (parts.length === 1) {
                      date = parseInt(parts[0]);
                    }

                    if (date !== undefined) {
                      return {
                        day: date,
                        month: month,
                        year: year
                      };
                    }
                  },
                  formatTitle: function formatTitle(monthName, fullYear) {
                    return monthName + ' ' + fullYear;
                  }
                };
              }
            },

            /**
             * The earliest date that can be selected. All earlier dates will be disabled.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            min: {
              type: String,
              observer: '_minChanged'
            },

            /**
             * The latest date that can be selected. All later dates will be disabled.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            max: {
              type: String,
              observer: '_maxChanged'
            },

            /**
             * The earliest date that can be selected. All earlier dates will be disabled.
             */
            _minDate: {
              type: Date,
              // null does not work here because minimizer passes undefined to overlay (#351)
              value: ''
            },

            /**
             * The latest date that can be selected. All later dates will be disabled.
             */
            _maxDate: {
              type: Date,
              value: ''
            },
            _noInput: {
              type: Boolean,
              computed: '_isNoInput(_fullscreen, _ios, i18n, i18n.*)'
            },
            _ios: {
              type: Boolean,
              value: navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)
            },
            _webkitOverflowScroll: {
              type: Boolean,
              value: document.createElement('div').style.webkitOverflowScrolling === ''
            },
            _ignoreAnnounce: {
              value: true
            },
            _focusOverlayOnOpen: Boolean,
            _overlayInitialized: Boolean
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_updateHasValue(value)', '_validateInput(_selectedDate, _minDate, _maxDate)', '_selectedDateChanged(_selectedDate, i18n.formatDate)', '_focusedDateChanged(_focusedDate, i18n.formatDate)', '_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)'];
        }
      }]);

      return VaadinDatePickerMixin;
    }(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], subclass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _vaadin_vaadin_button_src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js");
/* harmony import */ var _vaadin_infinite_scroller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-infinite-scroller.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused$=\"[[_focused]]\" part=\"month\" theme$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current$=\"[[_isCurrentYear(index)]]\" selected$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"], ["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop\\$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear\\$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop\\$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop\\$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused\\$=\"[[_focused]]\" part=\"month\" theme\\$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current\\$=\"[[_isCurrentYear(index)]]\" selected\\$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"]);

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
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
















/**
 * @memberof Vaadin
 * @private
 */

var DatePickerOverlayContentElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(DatePickerOverlayContentElement, _ThemableMixin);

  function DatePickerOverlayContentElement() {
    _classCallCheck(this, DatePickerOverlayContentElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerOverlayContentElement).apply(this, arguments));
  }

  _createClass(DatePickerOverlayContentElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(DatePickerOverlayContentElement.prototype), "ready", this).call(this);

      this.setAttribute('tabindex', 0);
      this.addEventListener('keydown', this._onKeydown.bind(this));
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["addListener"])(this, 'tap', this._stopPropagation);
      this.addEventListener('focus', this._onOverlayFocus.bind(this));
      this.addEventListener('blur', this._onOverlayBlur.bind(this));
    }
    /**
     * Fired when the scroller reaches the target scrolling position.
     * @event scroll-animation-finished
     * @param {Number} detail.position new position
     * @param {Number} detail.oldPosition old position
     */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(DatePickerOverlayContentElement.prototype), "connectedCallback", this).call(this);

      this._closeYearScroller();

      this._toggleAnimateClass(true);

      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["setTouchAction"])(this.$.scrollers, 'pan-y');
      _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability();
    }
  }, {
    key: "announceFocusedDate",
    value: function announceFocusedDate() {
      var focusedDate = this._currentlyFocusedDate();

      var announce = [];

      if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, new Date())) {
        announce.push(this.i18n.today);
      }

      announce = announce.concat([this.i18n.weekdays[focusedDate.getDay()], focusedDate.getDate(), this.i18n.monthNames[focusedDate.getMonth()], focusedDate.getFullYear()]);

      if (this.showWeekNumbers && this.i18n.firstDayOfWeek === 1) {
        announce.push(this.i18n.week);
        announce.push(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getISOWeekNumber(focusedDate));
      }

      this.dispatchEvent(new CustomEvent('iron-announce', {
        bubbles: true,
        composed: true,
        detail: {
          text: announce.join(' ')
        }
      }));
      return;
    }
    /**
     * Focuses the cancel button
     */

  }, {
    key: "focusCancel",
    value: function focusCancel() {
      this.$.cancelButton.focus();
    }
    /**
     * Scrolls the list to the given Date.
     */

  }, {
    key: "scrollToDate",
    value: function scrollToDate(date, animate) {
      this._scrollToPosition(this._differenceInMonths(date, this._originDate), animate);
    }
  }, {
    key: "_focusedDateChanged",
    value: function _focusedDateChanged(focusedDate) {
      this.revealDate(focusedDate);
    }
  }, {
    key: "_isCurrentYear",
    value: function _isCurrentYear(yearsFromNow) {
      return yearsFromNow === 0;
    }
  }, {
    key: "_isSelectedYear",
    value: function _isSelectedYear(yearsFromNow, selectedDate) {
      if (selectedDate) {
        return selectedDate.getFullYear() === this._originDate.getFullYear() + yearsFromNow;
      }
    }
    /**
     * Scrolls the month and year scrollers enough to reveal the given date.
     */

  }, {
    key: "revealDate",
    value: function revealDate(date) {
      if (date) {
        var diff = this._differenceInMonths(date, this._originDate);

        var scrolledAboveViewport = this.$.monthScroller.position > diff;
        var visibleItems = this.$.monthScroller.clientHeight / this.$.monthScroller.itemHeight;
        var scrolledBelowViewport = this.$.monthScroller.position + visibleItems - 1 < diff;

        if (scrolledAboveViewport) {
          this._scrollToPosition(diff, true);
        } else if (scrolledBelowViewport) {
          this._scrollToPosition(diff - visibleItems + 1, true);
        }
      }
    }
  }, {
    key: "_onOverlayFocus",
    value: function _onOverlayFocus() {
      this._focused = true;
    }
  }, {
    key: "_onOverlayBlur",
    value: function _onOverlayBlur() {
      this._focused = false;
    }
  }, {
    key: "_initialPositionChanged",
    value: function _initialPositionChanged(initialPosition) {
      this.scrollToDate(initialPosition);
    }
  }, {
    key: "_repositionYearScroller",
    value: function _repositionYearScroller() {
      this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
      this.$.yearScroller.position = (this.$.monthScroller.position + this._originDate.getMonth()) / 12;
    }
  }, {
    key: "_repositionMonthScroller",
    value: function _repositionMonthScroller() {
      this.$.monthScroller.position = this.$.yearScroller.position * 12 - this._originDate.getMonth();
      this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
    }
  }, {
    key: "_onMonthScroll",
    value: function _onMonthScroll() {
      this._repositionYearScroller();

      this._doIgnoreTaps();
    }
  }, {
    key: "_onYearScroll",
    value: function _onYearScroll() {
      this._repositionMonthScroller();

      this._doIgnoreTaps();
    }
  }, {
    key: "_onYearScrollTouchStart",
    value: function _onYearScrollTouchStart() {
      var _this = this;

      this._notTapping = false;
      setTimeout(function () {
        return _this._notTapping = true;
      }, 300);

      this._repositionMonthScroller();
    }
  }, {
    key: "_onMonthScrollTouchStart",
    value: function _onMonthScrollTouchStart() {
      this._repositionYearScroller();
    }
  }, {
    key: "_doIgnoreTaps",
    value: function _doIgnoreTaps() {
      var _this2 = this;

      this._ignoreTaps = true;
      this._debouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__["timeOut"].after(300), function () {
        return _this2._ignoreTaps = false;
      });
    }
  }, {
    key: "_formatDisplayed",
    value: function _formatDisplayed(date, formatDate, label) {
      if (date) {
        return formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._extractDateParts(date));
      } else {
        return label;
      }
    }
  }, {
    key: "_onTodayTap",
    value: function _onTodayTap() {
      var today = new Date();

      if (Math.abs(this.$.monthScroller.position - this._differenceInMonths(today, this._originDate)) < 0.001) {
        // Select today only if the month scroller is positioned approximately
        // at the beginning of the current month
        this.selectedDate = today;

        this._close();
      } else {
        this._scrollToCurrentMonth();
      }
    }
  }, {
    key: "_scrollToCurrentMonth",
    value: function _scrollToCurrentMonth() {
      if (this.focusedDate) {
        this.focusedDate = new Date();
      }

      this.scrollToDate(new Date(), true);
    }
  }, {
    key: "_showClear",
    value: function _showClear(selectedDate) {
      return !!selectedDate;
    }
  }, {
    key: "_onYearTap",
    value: function _onYearTap(e) {
      if (!this._ignoreTaps && !this._notTapping) {
        var scrollDelta = e.detail.y - (this.$.yearScroller.getBoundingClientRect().top + this.$.yearScroller.clientHeight / 2);
        var yearDelta = scrollDelta / this.$.yearScroller.itemHeight;

        this._scrollToPosition(this.$.monthScroller.position + yearDelta * 12, true);
      }
    }
  }, {
    key: "_scrollToPosition",
    value: function _scrollToPosition(targetPosition, animate) {
      var _this3 = this;

      if (this._targetPosition !== undefined) {
        this._targetPosition = targetPosition;
        return;
      }

      if (!animate) {
        this.$.monthScroller.position = targetPosition;
        this._targetPosition = undefined;

        this._repositionYearScroller();

        return;
      }

      this._targetPosition = targetPosition; // http://gizma.com/easing/

      var easingFunction = function easingFunction(t, b, c, d) {
        t /= d / 2;

        if (t < 1) {
          return c / 2 * t * t + b;
        }

        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var duration = animate ? 300 : 0;
      var start = 0;
      var initialPosition = this.$.monthScroller.position;

      var smoothScroll = function smoothScroll(timestamp) {
        start = start || timestamp;
        var currentTime = timestamp - start;

        if (currentTime < duration) {
          var currentPos = easingFunction(currentTime, initialPosition, _this3._targetPosition - initialPosition, duration);
          _this3.$.monthScroller.position = currentPos;
          window.requestAnimationFrame(smoothScroll);
        } else {
          _this3.dispatchEvent(new CustomEvent('scroll-animation-finished', {
            bubbles: true,
            composed: true,
            detail: {
              position: _this3._targetPosition,
              oldPosition: initialPosition
            }
          }));

          _this3.$.monthScroller.position = _this3._targetPosition;
          _this3._targetPosition = undefined;
        }

        setTimeout(_this3._repositionYearScroller.bind(_this3), 1);
      }; // Start the animation.


      window.requestAnimationFrame(smoothScroll);
    }
  }, {
    key: "_limit",
    value: function _limit(value, range) {
      return Math.min(range.max, Math.max(range.min, value));
    }
  }, {
    key: "_handleTrack",
    value: function _handleTrack(e) {
      // Check if horizontal movement threshold (dx) not exceeded or
      // scrolling fast vertically (ddy).
      if (Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10) {
        return;
      } // If we're flinging quickly -> start animating already.


      if (Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3) {
        this._toggleAnimateClass(true);
      }

      var newTranslateX = this._translateX + e.detail.ddx;
      this._translateX = this._limit(newTranslateX, {
        min: 0,
        max: this._yearScrollerWidth
      });
    }
  }, {
    key: "_track",
    value: function _track(e) {
      if (this._desktopMode) {
        // No need to track for swipe gestures on desktop.
        return;
      }

      switch (e.detail.state) {
        case 'start':
          this._toggleAnimateClass(false);

          break;

        case 'track':
          this._handleTrack(e);

          break;

        case 'end':
          this._toggleAnimateClass(true);

          if (this._translateX >= this._yearScrollerWidth / 2) {
            this._closeYearScroller();
          } else {
            this._openYearScroller();
          }

          break;
      }
    }
  }, {
    key: "_toggleAnimateClass",
    value: function _toggleAnimateClass(enable) {
      if (enable) {
        this.classList.add('animate');
      } else {
        this.classList.remove('animate');
      }
    }
  }, {
    key: "_toggleYearScroller",
    value: function _toggleYearScroller() {
      this._isYearScrollerVisible() ? this._closeYearScroller() : this._openYearScroller();
    }
  }, {
    key: "_openYearScroller",
    value: function _openYearScroller() {
      this._translateX = 0;
      this.setAttribute('years-visible', '');
    }
  }, {
    key: "_closeYearScroller",
    value: function _closeYearScroller() {
      this.removeAttribute('years-visible');
      this._translateX = this._yearScrollerWidth;
    }
  }, {
    key: "_isYearScrollerVisible",
    value: function _isYearScrollerVisible() {
      return this._translateX < this._yearScrollerWidth / 2;
    }
  }, {
    key: "_translateXChanged",
    value: function _translateXChanged(x) {
      if (!this._desktopMode) {
        this.$.monthScroller.style.transform = 'translateX(' + (x - this._yearScrollerWidth) + 'px)';
        this.$.yearScroller.style.transform = 'translateX(' + x + 'px)';
      }
    }
  }, {
    key: "_yearAfterXYears",
    value: function _yearAfterXYears(index) {
      var result = new Date(this._originDate);
      result.setFullYear(parseInt(index) + this._originDate.getFullYear());
      return result.getFullYear();
    }
  }, {
    key: "_yearAfterXMonths",
    value: function _yearAfterXMonths(months) {
      return this._dateAfterXMonths(months).getFullYear();
    }
  }, {
    key: "_dateAfterXMonths",
    value: function _dateAfterXMonths(months) {
      var result = new Date(this._originDate);
      result.setDate(1);
      result.setMonth(parseInt(months) + this._originDate.getMonth());
      return result;
    }
  }, {
    key: "_differenceInMonths",
    value: function _differenceInMonths(date1, date2) {
      var months = (date1.getFullYear() - date2.getFullYear()) * 12;
      return months - date2.getMonth() + date1.getMonth();
    }
  }, {
    key: "_differenceInYears",
    value: function _differenceInYears(date1, date2) {
      return this._differenceInMonths(date1, date2) / 12;
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.selectedDate = '';
    }
  }, {
    key: "_close",
    value: function _close() {
      var overlayContent = this.getRootNode().host;
      var overlay = overlayContent ? overlayContent.getRootNode().host : null;

      if (overlay) {
        overlay.opened = false;
      }

      this.dispatchEvent(new CustomEvent('close', {
        bubbles: true,
        composed: true
      }));
    }
  }, {
    key: "_cancel",
    value: function _cancel() {
      this.focusedDate = this.selectedDate;

      this._close();
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      e.preventDefault();
    }
    /**
     * Keyboard Navigation
     */

  }, {
    key: "_eventKey",
    value: function _eventKey(e) {
      var keys = ['down', 'up', 'right', 'left', 'enter', 'space', 'home', 'end', 'pageup', 'pagedown', 'tab', 'esc'];

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];

        if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
          return k;
        }
      }
    }
  }, {
    key: "_onKeydown",
    value: function _onKeydown(e) {
      var _this4 = this;

      var focus = this._currentlyFocusedDate(); // Cannot use (today/cancel).focused flag because vaadin-text-field removes it
      // previously in the keydown event.


      var isToday = e.composedPath().indexOf(this.$.todayButton) >= 0;
      var isCancel = e.composedPath().indexOf(this.$.cancelButton) >= 0;
      var isScroller = !isToday && !isCancel;

      var eventKey = this._eventKey(e);

      if (eventKey === 'tab') {
        // We handle tabs here and don't want to bubble up.
        e.stopPropagation();
        var isFullscreen = this.hasAttribute('fullscreen');
        var isShift = e.shiftKey;

        if (isFullscreen) {
          e.preventDefault();
        } else if (isShift && isScroller || !isShift && isCancel) {
          // Return focus back to the input field
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('focus-input', {
            bubbles: true,
            composed: true
          }));
        } else if (isShift && isToday) {
          // Browser returns focus back to the scrollable area. We need to set
          // the focused flag, and move the scroll to focused date.
          this._focused = true;
          setTimeout(function () {
            return _this4.revealDate(_this4.focusedDate);
          }, 1);
        } else {
          // Browser moves the focus out of the scroller, hence focused flag must
          // set to false.
          this._focused = false;
        }
      } else if (eventKey) {
        e.preventDefault();
        e.stopPropagation();

        switch (eventKey) {
          case 'down':
            this._moveFocusByDays(7);

            this.focus();
            break;

          case 'up':
            this._moveFocusByDays(-7);

            this.focus();
            break;

          case 'right':
            if (isScroller) {
              this._moveFocusByDays(1);
            }

            break;

          case 'left':
            if (isScroller) {
              this._moveFocusByDays(-1);
            }

            break;

          case 'enter':
            if (isScroller || isCancel) {
              this._close();
            } else if (isToday) {
              this._onTodayTap();
            }

            break;

          case 'space':
            if (isCancel) {
              this._close();
            } else if (isToday) {
              this._onTodayTap();
            } else {
              var focusedDate = this.focusedDate;

              if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, this.selectedDate)) {
                this.selectedDate = '';
                this.focusedDate = focusedDate;
              } else {
                this.selectedDate = focusedDate;
              }
            }

            break;

          case 'home':
            this._moveFocusInsideMonth(focus, 'minDate');

            break;

          case 'end':
            this._moveFocusInsideMonth(focus, 'maxDate');

            break;

          case 'pagedown':
            this._moveFocusByMonths(e.shiftKey ? 12 : 1);

            break;

          case 'pageup':
            this._moveFocusByMonths(e.shiftKey ? -12 : -1);

            break;

          case 'esc':
            this._cancel();

            break;
        }
      }
    }
  }, {
    key: "_currentlyFocusedDate",
    value: function _currentlyFocusedDate() {
      return this.focusedDate || this.selectedDate || this.initialPosition || new Date();
    }
  }, {
    key: "_focusDate",
    value: function _focusDate(dateToFocus) {
      this.focusedDate = dateToFocus;
      this._focusedMonthDate = dateToFocus.getDate();
    }
  }, {
    key: "_focusClosestDate",
    value: function _focusClosestDate(focus) {
      this._focusDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getClosestDate(focus, [this.minDate, this.maxDate]));
    }
  }, {
    key: "_moveFocusByDays",
    value: function _moveFocusByDays(days) {
      var focus = this._currentlyFocusedDate();

      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focus.getFullYear());
      dateToFocus.setMonth(focus.getMonth());
      dateToFocus.setDate(focus.getDate() + days);

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this._focusDate(dateToFocus);
      } else {
        if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
          // Move to min or max date
          if (days > 0) {
            // down or right
            this._focusDate(this.maxDate);
          } else {
            // up or left
            this._focusDate(this.minDate);
          }
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focus);
        }
      }
    }
  }, {
    key: "_moveFocusByMonths",
    value: function _moveFocusByMonths(months) {
      var focus = this._currentlyFocusedDate();

      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focus.getFullYear());
      dateToFocus.setMonth(focus.getMonth() + months);
      var targetMonth = dateToFocus.getMonth();
      dateToFocus.setDate(this._focusedMonthDate || (this._focusedMonthDate = focus.getDate()));

      if (dateToFocus.getMonth() !== targetMonth) {
        dateToFocus.setDate(0);
      }

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this.focusedDate = dateToFocus;
      } else {
        if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
          // Move to min or max date
          if (months > 0) {
            // pagedown
            this._focusDate(this.maxDate);
          } else {
            // pageup
            this._focusDate(this.minDate);
          }
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focus);
        }
      }
    }
  }, {
    key: "_moveFocusInsideMonth",
    value: function _moveFocusInsideMonth(focusedDate, property) {
      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focusedDate.getFullYear());

      if (property === 'minDate') {
        dateToFocus.setMonth(focusedDate.getMonth());
        dateToFocus.setDate(1);
      } else {
        dateToFocus.setMonth(focusedDate.getMonth() + 1);
        dateToFocus.setDate(0);
      }

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this._focusDate(dateToFocus);
      } else {
        if (this._dateAllowed(focusedDate, this.minDate, this.maxDate)) {
          // Move to minDate or maxDate
          this._focusDate(this[property]);
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focusedDate);
        }
      }
    }
  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return (!min || date >= min) && (!max || date <= max);
    }
  }, {
    key: "_isTodayAllowed",
    value: function _isTodayAllowed(min, max) {
      var today = new Date();
      var todayMidnight = new Date(0, 0);
      todayMidnight.setFullYear(today.getFullYear());
      todayMidnight.setMonth(today.getMonth());
      todayMidnight.setDate(today.getDate());
      return this._dateAllowed(todayMidnight, min, max);
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(e) {
      e.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-date-picker-overlay-content';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * The value for this element.
         */
        selectedDate: {
          type: Date,
          notify: true
        },

        /**
         * Date value which is focused using keyboard.
         */
        focusedDate: {
          type: Date,
          notify: true,
          observer: '_focusedDateChanged'
        },
        _focusedMonthDate: Number,

        /**
         * Date which should be visible when there is no value selected.
         */
        initialPosition: {
          type: Date,
          observer: '_initialPositionChanged'
        },
        _originDate: {
          value: new Date()
        },
        _visibleMonthIndex: Number,
        _desktopMode: Boolean,
        _translateX: {
          observer: '_translateXChanged'
        },
        _yearScrollerWidth: {
          value: 50
        },
        i18n: {
          type: Object
        },
        showWeekNumbers: {
          type: Boolean
        },
        _ignoreTaps: Boolean,
        _notTapping: Boolean,

        /**
         * The earliest date that can be selected. All earlier dates will be disabled.
         */
        minDate: Date,

        /**
         * The latest date that can be selected. All later dates will be disabled.
         */
        maxDate: Date,
        _focused: Boolean,

        /**
         * Input label
         */
        label: String
      };
    }
  }]);

  return DatePickerOverlayContentElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ThemePropertyMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))));

customElements.define(DatePickerOverlayContentElement.is, DatePickerOverlayContentElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js");
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
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/


/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-date-picker-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @extends Vaadin.OverlayElement
 * @memberof Vaadin
 * @private
 */

var DatePickerOverlayElement =
/*#__PURE__*/
function (_DisableUpgradeMixin) {
  _inherits(DatePickerOverlayElement, _DisableUpgradeMixin);

  function DatePickerOverlayElement() {
    _classCallCheck(this, DatePickerOverlayElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerOverlayElement).apply(this, arguments));
  }

  _createClass(DatePickerOverlayElement, null, [{
    key: "is",
    get: function get() {
      return 'vaadin-date-picker-overlay';
    }
  }]);

  return DatePickerOverlayElement;
}(Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__["OverlayElement"]));

customElements.define(DatePickerOverlayElement.is, DatePickerOverlayElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");

var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"vaadin-date-picker-overlay-styles\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir=\"rtl\"]) {\n        align-items: flex-start;\n      }\n\n      [part=\"overlay\"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~=\"content\"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js ***!
  \***************************************************************************/
/*! exports provided: DatePickerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerElement", function() { return DatePickerElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js");
/* harmony import */ var _vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-date-picker-mixin.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part=\"clear-button\"],\n      :host([readonly]) [part=\"clear-button\"],\n      :host(:not([has-value])) [part=\"clear-button\"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" aria-label$=\"[[label]]\" part=\"text-field\" theme$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"clear-button\" slot=\"suffix\" on-touchend=\"_clearTouchend\" on-click=\"_clear\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label$=\"[[i18n.calendar]]\" aria-expanded$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen$=\"[[_fullscreen]]\" theme$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n\n      :host([disabled]) [part=\"clear-button\"],\n      :host([readonly]) [part=\"clear-button\"],\n      :host(:not([has-value])) [part=\"clear-button\"] {\n        display: none;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" aria-label\\$=\"[[label]]\" part=\"text-field\" theme\\$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"clear-button\" slot=\"suffix\" on-touchend=\"_clearTouchend\" on-click=\"_clear\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label\\$=\"[[i18n.calendar]]\" aria-expanded\\$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen\\$=\"[[_fullscreen]]\" theme\\$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen\\$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme\\$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"]);

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
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/














/**
 *
 * `<vaadin-date-picker>` is a date selection field which includes a scrollable
 * month calendar view.
 * ```html
 * <vaadin-date-picker label="Birthday"></vaadin-date-picker>
 * ```
 * ```js
 * datePicker.value = '2016-03-02';
 * ```
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description | Theme for Element
 * ----------------|----------------|----------------
 * `text-field` | Input element | vaadin-date-picker
 * `clear-button` | Clear button | vaadin-date-picker
 * `toggle-button` | Toggle button | vaadin-date-picker
 * `overlay-content` | The overlay element | vaadin-date-picker
 * `overlay-header` | Fullscreen mode header | vaadin-date-picker-overlay-content
 * `label` | Fullscreen mode value/label | vaadin-date-picker-overlay-content
 * `clear-button` | Fullscreen mode clear button | vaadin-date-picker-overlay-content
 * `toggle-button` | Fullscreen mode toggle button | vaadin-date-picker-overlay-content
 * `years-toggle-button` | Fullscreen mode years scroller toggle | vaadin-date-picker-overlay-content
 * `months` | Months scroller | vaadin-date-picker-overlay-content
 * `years` | Years scroller | vaadin-date-picker-overlay-content
 * `toolbar` | Footer bar with buttons | vaadin-date-picker-overlay-content
 * `today-button` | Today button | vaadin-date-picker-overlay-content
 * `cancel-button` | Cancel button | vaadin-date-picker-overlay-content
 * `month` | Month calendar | vaadin-date-picker-overlay-content
 * `year-number` | Year number | vaadin-date-picker-overlay-content
 * `year-separator` | Year separator | vaadin-date-picker-overlay-content
 * `month-header` | Month title | vaadin-month-calendar
 * `weekdays` | Weekday container | vaadin-month-calendar
 * `weekday` | Weekday element | vaadin-month-calendar
 * `week-numbers` | Week numbers container | vaadin-month-calendar
 * `week-number` | Week number element | vaadin-month-calendar
 * `date` | Date element | vaadin-month-calendar
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `invalid` | Set when the element is invalid | :host
 * `opened` | Set when the date selector overlay is opened | :host
 * `readonly` | Set when the element is readonly | :host
 * `disabled` | Set when the element is disabled | :host
 * `today` | Set on the date corresponding to the current day | date
 * `focused` | Set on the focused date | date
 * `disabled` | Set on the date out of the allowed range | date
 * `selected` | Set on the selected date | date
 *
 * If you want to replace the default input field with a custom implementation, you should use the
 * [`<vaadin-date-picker-light>`](#vaadin-date-picker-light) element.
 *
 * In addition to `<vaadin-date-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-date-picker-overlay>`
 * - `<vaadin-date-picker-overlay-content>`
 * - `<vaadin-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin-date-picker>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @mixes Vaadin.DatePickerMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

var DatePickerElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(DatePickerElement, _ElementMixin);

  function DatePickerElement() {
    _classCallCheck(this, DatePickerElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerElement).apply(this, arguments));
  }

  _createClass(DatePickerElement, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(DatePickerElement.prototype), "ready", this).call(this); // In order to have synchronized invalid property, we need to use the same validate logic.


      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__["afterNextRender"])(this, function () {
        return _this._inputElement.validate = function () {};
      });
    }
  }, {
    key: "_onVaadinOverlayClose",
    value: function _onVaadinOverlayClose(e) {
      if (this._openedWithFocusRing && this.hasAttribute('focused')) {
        this.focusElement.setAttribute('focus-ring', '');
      } else if (!this.hasAttribute('focused')) {
        this.focusElement.blur();
      }

      if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().indexOf(this) !== -1) {
        e.preventDefault();
      }
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.__dispatchChange = true;
      this.value = '';
      this.validate();
      this.focus();
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["prevent"])('tap');
      this.__dispatchChange = false;
    }
  }, {
    key: "_clearTouchend",
    value: function _clearTouchend(e) {
      this._clear();

      e.preventDefault();
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["prevent"])('tap');
    }
  }, {
    key: "_toggle",
    value: function _toggle(e) {
      e.stopPropagation();
      this[this._overlayInitialized && this.$.overlay.opened ? 'close' : 'open']();
    }
  }, {
    key: "_input",
    value: function _input() {
      return this.$.input;
    }
  }, {
    key: "_getAriaExpanded",
    value: function _getAriaExpanded(opened) {
      return Boolean(opened).toString();
    }
    /**
     * Focussable element used by vaadin-control-state-mixin
     */

  }, {
    key: "_inputValue",
    set: function set(value) {
      this._inputElement.value = value;
    },
    get: function get() {
      return this._inputElement.value;
    }
  }, {
    key: "focusElement",
    get: function get() {
      return this._input() || this;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-date-picker';
    }
  }, {
    key: "version",
    get: function get() {
      return '3.3.4';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Set to true to disable this element.
         */
        disabled: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * The error message to display when the input is invalid.
         */
        errorMessage: String,

        /**
         * A placeholder string in addition to the label. If this is set, the label will always float.
         */
        placeholder: String,

        /**
         * Set to true to make this element read-only.
         */
        readonly: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * This property is set to true when the control value invalid.
         */
        invalid: {
          type: Boolean,
          reflectToAttribute: true,
          notify: true,
          value: false
        },
        _userInputValue: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_userInputValueChanged(_userInputValue)'];
    }
  }]);

  return DatePickerElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DatePickerMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))))));

customElements.define(DatePickerElement.is, DatePickerElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        height: 500px;\n      }\n\n      #scroller {\n        position: relative;\n        height: 100%;\n        overflow: auto;\n        outline: none;\n        margin-right: -40px;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: none;\n        overflow-x: hidden;\n      }\n\n      #scroller.notouchscroll {\n        -webkit-overflow-scrolling: auto;\n      }\n\n      #scroller::-webkit-scrollbar {\n        display: none;\n      }\n\n      .buffer {\n        position: absolute;\n        width: var(--vaadin-infinite-scroller-buffer-width, 100%);\n        box-sizing: border-box;\n        padding-right: 40px;\n        top: var(--vaadin-infinite-scroller-buffer-offset, 0);\n        animation: fadein 0.2s;\n      }\n\n      @keyframes fadein {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n    </style>\n\n    <div id=\"scroller\" on-scroll=\"_scroll\">\n      <div class=\"buffer\"></div>\n      <div class=\"buffer\"></div>\n      <div id=\"fullHeight\"></div>\n    </div>\n"]);

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
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * @memberof Vaadin
 * @private
 */

var InfiniteScrollerElement =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(InfiniteScrollerElement, _PolymerElement);

  function InfiniteScrollerElement() {
    _classCallCheck(this, InfiniteScrollerElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfiniteScrollerElement).apply(this, arguments));
  }

  _createClass(InfiniteScrollerElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(InfiniteScrollerElement.prototype), "ready", this).call(this);

      this._buffers = Array.prototype.slice.call(this.root.querySelectorAll('.buffer'));
      this.$.fullHeight.style.height = this._initialScroll * 2 + 'px';
      var tpl = this.querySelector('template');
      this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__["templatize"])(tpl, this, {
        forwardHostProp: function forwardHostProp(prop, value) {
          if (prop !== 'index') {
            this._buffers.forEach(function (buffer) {
              [].forEach.call(buffer.children, function (insertionPoint) {
                insertionPoint._itemWrapper.instance[prop] = value;
              });
            });
          }
        }
      }); // Firefox interprets elements with overflow:auto as focusable
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739

      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      if (isFirefox) {
        this.$.scroller.tabIndex = -1;
      }
    }
  }, {
    key: "_activated",
    value: function _activated(active) {
      if (active && !this._initialized) {
        this._createPool();

        this._initialized = true;
      }
    }
  }, {
    key: "_finishInit",
    value: function _finishInit() {
      var _this = this;

      if (!this._initDone) {
        // Once the first set of items start fading in, stamp the rest
        this._buffers.forEach(function (buffer) {
          [].forEach.call(buffer.children, function (insertionPoint) {
            return _this._ensureStampedInstance(insertionPoint._itemWrapper);
          });
        }, this);

        if (!this._buffers[0].translateY) {
          this._reset();
        }

        this._initDone = true;
      }
    }
  }, {
    key: "_translateBuffer",
    value: function _translateBuffer(up) {
      var index = up ? 1 : 0;
      this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
      this._buffers[index].style.transform = 'translate3d(0, ' + this._buffers[index].translateY + 'px, 0)';
      this._buffers[index].updated = false;

      this._buffers.reverse();
    }
  }, {
    key: "_scroll",
    value: function _scroll() {
      var _this2 = this;

      if (this._scrollDisabled) {
        return;
      }

      var scrollTop = this.$.scroller.scrollTop;

      if (scrollTop < this._bufferHeight || scrollTop > this._initialScroll * 2 - this._bufferHeight) {
        // Scrolled near the end/beginning of the scrollable area -> reset.
        this._initialIndex = ~~this.position;

        this._reset();
      } // Check if we scrolled enough to translate the buffer positions.


      var bufferOffset = this.root.querySelector('.buffer').offsetTop;
      var upperThresholdReached = scrollTop > this._buffers[1].translateY + this.itemHeight + bufferOffset;
      var lowerThresholdReached = scrollTop < this._buffers[0].translateY + this.itemHeight + bufferOffset;

      if (upperThresholdReached || lowerThresholdReached) {
        this._translateBuffer(lowerThresholdReached);

        this._updateClones();
      }

      if (!this._preventScrollEvent) {
        this.dispatchEvent(new CustomEvent('custom-scroll', {
          bubbles: false,
          composed: true
        }));
        this._mayHaveMomentum = true;
      }

      this._preventScrollEvent = false;
      this._debouncerScrollFinish = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerScrollFinish, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), function () {
        var scrollerRect = _this2.$.scroller.getBoundingClientRect();

        if (!_this2._isVisible(_this2._buffers[0], scrollerRect) && !_this2._isVisible(_this2._buffers[1], scrollerRect)) {
          _this2.position = _this2.position;
        }
      });
    }
    /**
     * Current scroller position as index. Can be a fractional number.
     *
     * @type {Number}
     */

  }, {
    key: "_reset",
    value: function _reset() {
      var _this3 = this;

      this._scrollDisabled = true;
      this.$.scroller.scrollTop = this._initialScroll;
      this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
      this._buffers[1].translateY = this._initialScroll;

      this._buffers.forEach(function (buffer) {
        buffer.style.transform = 'translate3d(0, ' + buffer.translateY + 'px, 0)';
      });

      this._buffers[0].updated = this._buffers[1].updated = false;

      this._updateClones(true);

      this._debouncerUpdateClones = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerUpdateClones, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), function () {
        _this3._buffers[0].updated = _this3._buffers[1].updated = false;

        _this3._updateClones();
      });
      this._scrollDisabled = false;
    }
  }, {
    key: "_createPool",
    value: function _createPool() {
      var _this4 = this;

      var container = this.getBoundingClientRect();

      this._buffers.forEach(function (buffer) {
        var _loop = function _loop() {
          var itemWrapper = document.createElement('div');
          itemWrapper.style.height = _this4.itemHeight + 'px';
          itemWrapper.instance = {};
          var contentId = InfiniteScrollerElement._contentIndex = InfiniteScrollerElement._contentIndex + 1 || 0;
          var slotName = 'vaadin-infinite-scroller-item-content-' + contentId;
          var insertionPoint = document.createElement('slot');
          insertionPoint.setAttribute('name', slotName);
          insertionPoint._itemWrapper = itemWrapper;
          buffer.appendChild(insertionPoint);
          itemWrapper.setAttribute('slot', slotName);

          _this4.appendChild(itemWrapper); // This is needed by IE


          Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__["flush"])();
          setTimeout(function () {
            // Only stamp the visible instances first
            if (_this4._isVisible(itemWrapper, container)) {
              _this4._ensureStampedInstance(itemWrapper);
            }
          }, 1); // Wait for first reset
        };

        for (var i = 0; i < _this4.bufferSize; i++) {
          _loop();
        }
      }, this);

      setTimeout(function () {
        Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(_this4, _this4._finishInit.bind(_this4));
      }, 1);
    }
  }, {
    key: "_ensureStampedInstance",
    value: function _ensureStampedInstance(itemWrapper) {
      if (itemWrapper.firstElementChild) {
        return;
      }

      var tmpInstance = itemWrapper.instance;
      itemWrapper.instance = new this._TemplateClass({});
      itemWrapper.appendChild(itemWrapper.instance.root);
      Object.keys(tmpInstance).forEach(function (prop) {
        itemWrapper.instance.set(prop, tmpInstance[prop]);
      });
    }
  }, {
    key: "_updateClones",
    value: function _updateClones(viewPortOnly) {
      var _this5 = this;

      this._firstIndex = ~~((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
      var scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : undefined;

      this._buffers.forEach(function (buffer, bufferIndex) {
        if (!buffer.updated) {
          var firstIndex = _this5._firstIndex + _this5.bufferSize * bufferIndex;
          [].forEach.call(buffer.children, function (insertionPoint, index) {
            var itemWrapper = insertionPoint._itemWrapper;

            if (!viewPortOnly || _this5._isVisible(itemWrapper, scrollerRect)) {
              itemWrapper.instance.index = firstIndex + index;
            }
          });
          buffer.updated = true;
        }
      }, this);
    }
  }, {
    key: "_isVisible",
    value: function _isVisible(element, container) {
      var rect = element.getBoundingClientRect();
      return rect.bottom > container.top && rect.top < container.bottom;
    }
  }, {
    key: "position",
    set: function set(index) {
      var _this6 = this;

      this._preventScrollEvent = true;

      if (index > this._firstIndex && index < this._firstIndex + this.bufferSize * 2) {
        this.$.scroller.scrollTop = this.itemHeight * (index - this._firstIndex) + this._buffers[0].translateY;
      } else {
        this._initialIndex = ~~index;

        this._reset();

        this._scrollDisabled = true;
        this.$.scroller.scrollTop += index % 1 * this.itemHeight;
        this._scrollDisabled = false;
      }

      if (this._mayHaveMomentum) {
        // Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
        this.$.scroller.classList.add('notouchscroll');
        this._mayHaveMomentum = false;
        setTimeout(function () {
          // Restore -webkit-overflow-scrolling: touch; after a small delay.
          _this6.$.scroller.classList.remove('notouchscroll');
        }, 10);
      }
    }
    /**
     * @private
     */
    ,
    get: function get() {
      return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
    }
  }, {
    key: "itemHeight",
    get: function get() {
      if (!this._itemHeightVal) {
        if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
          this.updateStyles();
        }

        var itemHeight = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-infinite-scroller-item-height') : getComputedStyle(this).getPropertyValue('--vaadin-infinite-scroller-item-height'); // Use background-position temp inline style for unit conversion

        var tmpStyleProp = 'background-position';
        this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
        var itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
        this.$.fullHeight.style.removeProperty(tmpStyleProp);
        this._itemHeightVal = parseFloat(itemHeightPx);
      }

      return this._itemHeightVal;
    }
  }, {
    key: "_bufferHeight",
    get: function get() {
      return this.itemHeight * this.bufferSize;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-infinite-scroller';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Count of individual items in each buffer.
         * The scroller has 2 buffers altogether so bufferSize of 20
         * will result in 40 buffered DOM items in total.
         * Changing after initialization not supported.
         */
        bufferSize: {
          type: Number,
          value: 20
        },

        /**
         * The amount of initial scroll top. Needed in order for the
         * user to be able to scroll backwards.
         */
        _initialScroll: {
          value: 500000
        },

        /**
         * The index/position mapped at _initialScroll point.
         */
        _initialIndex: {
          value: 0
        },
        _buffers: Array,
        _preventScrollEvent: Boolean,
        _mayHaveMomentum: Boolean,
        _initialized: Boolean,
        active: {
          type: Boolean,
          observer: '_activated'
        }
      };
    }
  }]);

  return InfiniteScrollerElement;
}(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

customElements.define(InfiniteScrollerElement.is, InfiniteScrollerElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_repeat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js */ "./node_modules/@polymer/polymer/lib/elements/dom-repeat.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today$=\"[[_isToday(item)]]\" selected$=\"[[_dateEquals(item, selectedDate)]]\" focused$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role$=\"[[_getRole(item)]]\" aria-label$=\"[[_getAriaLabel(item)]]\" aria-disabled$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label\\$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label\\$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today\\$=\"[[_isToday(item)]]\" selected\\$=\"[[_dateEquals(item, selectedDate)]]\" focused\\$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled\\$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role\\$=\"[[_getRole(item)]]\" aria-label\\$=\"[[_getAriaLabel(item)]]\" aria-disabled\\$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"]);

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * @memberof Vaadin
 * @private
 */

var MonthCalendarElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(MonthCalendarElement, _ThemableMixin);

  function MonthCalendarElement() {
    _classCallCheck(this, MonthCalendarElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(MonthCalendarElement).apply(this, arguments));
  }

  _createClass(MonthCalendarElement, [{
    key: "_dateEquals",
    value: function _dateEquals(date1, date2) {
      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateEquals(date1, date2);
    }
  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateAllowed(date, min, max);
    }
    /* Returns true if all the dates in the month are out of the allowed range */

  }, {
    key: "_isDisabled",
    value: function _isDisabled(month, minDate, maxDate) {
      // First day of the month
      var firstDate = new Date(0, 0);
      firstDate.setFullYear(month.getFullYear());
      firstDate.setMonth(month.getMonth());
      firstDate.setDate(1); // Last day of the month

      var lastDate = new Date(0, 0);
      lastDate.setFullYear(month.getFullYear());
      lastDate.setMonth(month.getMonth() + 1);
      lastDate.setDate(-1);

      if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth() && minDate.getMonth() === month.getMonth() && maxDate.getDate() - minDate.getDate() >= 0) {
        return false;
      }

      return !this._dateAllowed(firstDate, minDate, maxDate) && !this._dateAllowed(lastDate, minDate, maxDate);
    }
  }, {
    key: "_getTitle",
    value: function _getTitle(month, monthNames) {
      if (month === undefined || monthNames === undefined) {
        return;
      }

      return this.i18n.formatTitle(monthNames[month.getMonth()], month.getFullYear());
    }
  }, {
    key: "_onMonthGridTouchStart",
    value: function _onMonthGridTouchStart() {
      var _this = this;

      this._notTapping = false;
      setTimeout(function () {
        return _this._notTapping = true;
      }, 300);
    }
  }, {
    key: "_dateAdd",
    value: function _dateAdd(date, delta) {
      date.setDate(date.getDate() + delta);
    }
  }, {
    key: "_applyFirstDayOfWeek",
    value: function _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
      if (weekDayNames === undefined || firstDayOfWeek === undefined) {
        return;
      }

      return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
    }
  }, {
    key: "_getWeekDayNames",
    value: function _getWeekDayNames(weekDayNames, weekDayNamesShort, showWeekNumbers, firstDayOfWeek) {
      if (weekDayNames === undefined || weekDayNamesShort === undefined || showWeekNumbers === undefined || firstDayOfWeek === undefined) {
        return;
      }

      weekDayNames = this._applyFirstDayOfWeek(weekDayNames, firstDayOfWeek);
      weekDayNamesShort = this._applyFirstDayOfWeek(weekDayNamesShort, firstDayOfWeek);
      weekDayNames = weekDayNames.map(function (day, index) {
        return {
          weekDay: day,
          weekDayShort: weekDayNamesShort[index]
        };
      });
      return weekDayNames;
    }
  }, {
    key: "_getDate",
    value: function _getDate(date) {
      return date ? date.getDate() : '';
    }
  }, {
    key: "_showWeekNumbersChanged",
    value: function _showWeekNumbersChanged(showWeekNumbers, firstDayOfWeek) {
      if (showWeekNumbers && firstDayOfWeek === 1) {
        this.setAttribute('week-numbers', '');
      } else {
        this.removeAttribute('week-numbers');
      }
    }
  }, {
    key: "_showWeekSeparator",
    value: function _showWeekSeparator(showWeekNumbers, firstDayOfWeek) {
      // Currently only supported for locales that start the week on Monday.
      return showWeekNumbers && firstDayOfWeek === 1;
    }
  }, {
    key: "_isToday",
    value: function _isToday(date) {
      return this._dateEquals(new Date(), date);
    }
  }, {
    key: "_getDays",
    value: function _getDays(month, firstDayOfWeek) {
      if (month === undefined || firstDayOfWeek === undefined) {
        return;
      } // First day of the month (at midnight).


      var date = new Date(0, 0);
      date.setFullYear(month.getFullYear());
      date.setMonth(month.getMonth());
      date.setDate(1); // Rewind to first day of the week.

      while (date.getDay() !== firstDayOfWeek) {
        this._dateAdd(date, -1);
      }

      var days = [];
      var startMonth = date.getMonth();
      var targetMonth = month.getMonth();

      while (date.getMonth() === targetMonth || date.getMonth() === startMonth) {
        days.push(date.getMonth() === targetMonth ? new Date(date.getTime()) : null); // Advance to next day.

        this._dateAdd(date, 1);
      }

      return days;
    }
  }, {
    key: "_getWeekNumber",
    value: function _getWeekNumber(date, days) {
      if (date === undefined || days === undefined) {
        return;
      }

      if (!date) {
        // Get the first non-null date from the days array.
        date = days.reduce(function (acc, d) {
          return !acc && d ? d : acc;
        });
      }

      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._getISOWeekNumber(date);
    }
  }, {
    key: "_getWeekNumbers",
    value: function _getWeekNumbers(dates) {
      var _this2 = this;

      return dates.map(function (date) {
        return _this2._getWeekNumber(date, dates);
      }).filter(function (week, index, arr) {
        return arr.indexOf(week) === index;
      });
    }
  }, {
    key: "_handleTap",
    value: function _handleTap(e) {
      if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute('disabled')) {
        this.selectedDate = e.target.date;
        this.dispatchEvent(new CustomEvent('date-tap', {
          bubbles: true,
          composed: true
        }));
      }
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: "_getRole",
    value: function _getRole(date) {
      return date ? 'button' : 'presentation';
    }
  }, {
    key: "_getAriaLabel",
    value: function _getAriaLabel(date) {
      if (!date) {
        return '';
      }

      var ariaLabel = this._getDate(date) + ' ' + this.i18n.monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + this.i18n.weekdays[date.getDay()];

      if (this._isToday(date)) {
        ariaLabel += ', ' + this.i18n.today;
      }

      return ariaLabel;
    }
  }, {
    key: "_getAriaDisabled",
    value: function _getAriaDisabled(date, min, max) {
      if (date === undefined || min === undefined || max === undefined) {
        return;
      }

      return this._dateAllowed(date, min, max) ? 'false' : 'true';
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-month-calendar';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * A `Date` object defining the month to be displayed. Only year and
         * month properties are actually used.
         */
        month: {
          type: Date,
          value: new Date()
        },

        /**
         * A `Date` object for the currently selected date.
         */
        selectedDate: {
          type: Date,
          notify: true
        },

        /**
         * A `Date` object for the currently focused date.
         */
        focusedDate: Date,
        showWeekNumbers: {
          type: Boolean,
          value: false
        },
        i18n: {
          type: Object
        },

        /**
         * Flag stating whether taps on the component should be ignored.
         */
        ignoreTaps: Boolean,
        _notTapping: Boolean,

        /**
         * The earliest date that can be selected. All earlier dates will be disabled.
         */
        minDate: {
          type: Date,
          value: null
        },

        /**
         * The latest date that can be selected. All later dates will be disabled.
         */
        maxDate: {
          type: Date,
          value: null
        },
        _days: {
          type: Array,
          computed: '_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)'
        },
        disabled: {
          type: Boolean,
          reflectToAttribute: true,
          computed: '_isDisabled(month, minDate, maxDate)'
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)'];
    }
  }]);

  return MonthCalendarElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(MonthCalendarElement.is, MonthCalendarElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js ***!
  \*********************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_button_theme_lumo_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/theme/lumo/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/theme/lumo/vaadin-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker-overlay-content\" theme-for=\"vaadin-date-picker-overlay-content\">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part=\"months\"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part=\"years\"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part=\"years\"]:hover [part=\"year-number\"],\n      [part=\"years\"]:hover [part=\"year-separator\"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part=\"months\"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part=\"years\"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part=\"years\"] [part=\"year-separator\"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: \"\u2022\";\n      }\n\n      /* Current year */\n\n      [part=\"years\"] [part=\"year-number\"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part=\"toolbar\"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part=\"toolbar\"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the \"tertiary\" theme from here instead of copying those styles */\n      [part=\"toolbar\"] [part$=\"button\"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part=\"toolbar\"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part=\"overlay-header\"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part=\"toggle-button\"],\n      :host([fullscreen]) [part=\"clear-button\"],\n      [part=\"overlay-header\"] [part=\"label\"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part=\"years-toggle-button\"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part=\"years-toggle-button\"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"years-toggle-button\"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part=\"years\"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part=\"toolbar\"],\n        [part=\"months\"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part=\"years\"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part=\"months\"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"], ["<dom-module id=\"lumo-date-picker-overlay-content\" theme-for=\"vaadin-date-picker-overlay-content\">\n  <template>\n    <style>\n      :host {\n        position: relative;\n        background-color: transparent;\n        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */\n        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n        background-size: 57px 100%;\n        background-position: top right;\n        background-repeat: no-repeat;\n        cursor: default;\n      }\n\n      /* Month scroller */\n\n      [part=\"months\"] {\n        /* Month calendar height:\n              header height + margin-bottom\n            + weekdays height + margin-bottom\n            + date cell heights\n            + small margin between month calendars\n        */\n        --vaadin-infinite-scroller-item-height:\n          calc(\n              var(--lumo-font-size-l) + var(--lumo-space-m)\n            + var(--lumo-font-size-xs) + var(--lumo-space-s)\n            + var(--lumo-size-m) * 6\n            + var(--lumo-space-s)\n          );\n        --vaadin-infinite-scroller-buffer-offset: 20%;\n        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);\n        position: relative;\n        margin-right: 57px;\n      }\n\n      /* Year scroller */\n\n      [part=\"years\"] {\n        /* TODO get rid of fixed magic number */\n        --vaadin-infinite-scroller-buffer-width: 97px;\n        width: 57px;\n        height: auto;\n        top: 0;\n        bottom: 0;\n        font-size: var(--lumo-font-size-s);\n        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);\n        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        opacity: 0.5;\n        transition: 0.2s opacity;\n      }\n\n      [part=\"years\"]:hover [part=\"year-number\"],\n      [part=\"years\"]:hover [part=\"year-separator\"] {\n        opacity: 1;\n      }\n\n      /* TODO unsupported selector */\n      #scrollers {\n        position: static;\n        display: block;\n      }\n\n      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the\n       * width of the year scroller */\n      #scrollers[desktop] [part=\"months\"] {\n        right: auto;\n      }\n\n      /* Year scroller position indicator */\n      [part=\"years\"]::before {\n        border: none;\n        width: 1em;\n        height: 1em;\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        transform: translate(-75%, -50%) rotate(45deg);\n        border-top-right-radius: calc(var(--lumo-border-radius) / 2);\n        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);\n        z-index: 1;\n      }\n\n      [part=\"year-number\"],\n      [part=\"year-separator\"] {\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        height: 50%;\n        transform: translateY(-50%);\n      }\n\n      [part=\"years\"] [part=\"year-separator\"]::after {\n        color: var(--lumo-disabled-text-color);\n        content: \"\u2022\";\n      }\n\n      /* Current year */\n\n      [part=\"years\"] [part=\"year-number\"][current] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Toolbar (footer) */\n\n      [part=\"toolbar\"] {\n        padding: var(--lumo-space-s);\n        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);\n        border-bottom-left-radius: var(--lumo-border-radius);\n        margin-right: 57px;\n      }\n\n      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {\n        [part=\"toolbar\"] {\n          box-shadow: none;\n        }\n      }\n\n      /* Today and Cancel buttons */\n\n      /* TODO: Would be great if I could apply the \"tertiary\" theme from here instead of copying those styles */\n      [part=\"toolbar\"] [part\\$=\"button\"] {\n        background-color: transparent;\n        margin: 0;\n        min-width: 0;\n        padding: 0 0.75em;\n      }\n\n      /* Narrow viewport mode (fullscreen) */\n\n      :host([fullscreen]) [part=\"toolbar\"] {\n        order: -1;\n        background-color: var(--lumo-base-color);\n      }\n\n      :host([fullscreen]) [part=\"overlay-header\"] {\n        order: -2;\n        height: var(--lumo-size-m);\n        padding: var(--lumo-space-s);\n        position: absolute;\n        left: 0;\n        right: 0;\n        justify-content: center;\n      }\n\n      :host([fullscreen]) [part=\"toggle-button\"],\n      :host([fullscreen]) [part=\"clear-button\"],\n      [part=\"overlay-header\"] [part=\"label\"] {\n        display: none;\n      }\n\n      /* Very narrow screen (year scroller initially hidden) */\n\n      [part=\"years-toggle-button\"] {\n        position: relative;\n        right: auto;\n        display: flex;\n        align-items: center;\n        height: var(--lumo-size-s);\n        padding: 0 0.5em;\n        border-radius: var(--lumo-border-radius);\n        z-index: 3;\n        color: var(--lumo-primary-text-color);\n        font-weight: 500;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host([years-visible]) [part=\"years-toggle-button\"] {\n        background-color: var(--lumo-primary-color);\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"years-toggle-button\"]::before {\n        content: none;\n      }\n\n      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */\n      @media screen and (max-width: 374px) {\n        :host {\n          background-image: none;\n        }\n\n        [part=\"years\"] {\n          background-color: var(--lumo-shade-5pct);\n        }\n\n        [part=\"toolbar\"],\n        [part=\"months\"] {\n          margin-right: 0;\n        }\n\n        /* TODO make date-picker adapt to the width of the years part */\n        [part=\"years\"] {\n          --vaadin-infinite-scroller-buffer-width: 90px;\n          width: 50px;\n        }\n\n        :host([years-visible]) [part=\"months\"] {\n          padding-left: 50px;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js":
/*!*************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js ***!
  \*************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/menu-overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker-overlay\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style include=\"lumo-menu-overlay\">\n      [part=\"overlay\"] {\n        /*\n        Width:\n            date cell widths\n          + month calendar side padding\n          + year scroller width\n        */\n        width:\n          calc(\n              var(--lumo-size-m) * 7\n            + var(--lumo-space-xs) * 2\n            + 57px\n          );\n        height: 100%;\n        max-height: calc(var(--lumo-size-m) * 14);\n        overflow: hidden;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [part=\"content\"] {\n        padding: 0;\n        height: 100%;\n        overflow: hidden;\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      @media (max-width: 420px), (max-height: 420px) {\n        [part=\"overlay\"] {\n          width: 100vw;\n          height: 70vh;\n          max-height: 70vh;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js");
/* harmony import */ var _vaadin_vaadin_text_field_theme_lumo_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-date-picker\" theme-for=\"vaadin-date-picker\">\n  <template>\n    <style include=\"lumo-field-button\">\n      :host {\n        outline: none;\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: var(--lumo-icons-calendar);\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-styles.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-overlay-content-styles.js");
/* harmony import */ var _vaadin_month_calendar_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-month-calendar-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker-styles.js");
/* harmony import */ var _src_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/vaadin-date-picker.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js");






/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js":
/*!********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-month-calendar-styles.js ***!
  \********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-month-calendar\" theme-for=\"vaadin-month-calendar\">\n  <template>\n    <style>\n      :host {\n        -moz-user-select: none;\n        -ms-user-select: none;\n        -webkit-user-select: none;\n        -webkit-tap-highlight-color: transparent;\n        user-select: none;\n        font-size: var(--lumo-font-size-m);\n        color: var(--lumo-body-text-color);\n        text-align: center;\n        padding: 0 var(--lumo-space-xs);\n      }\n\n      /* Month header */\n\n      [part=\"month-header\"] {\n        color: var(--lumo-header-text-color);\n        font-size: var(--lumo-font-size-l);\n        line-height: 1;\n        font-weight: 500;\n        margin-bottom: var(--lumo-space-m);\n      }\n\n      /* Week days and numbers */\n\n      [part=\"weekdays\"],\n      [part=\"weekday\"],\n      [part=\"week-numbers\"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: 1;\n        color: var(--lumo-tertiary-text-color);\n      }\n\n      [part=\"weekdays\"] {\n        margin-bottom: var(--lumo-space-s);\n      }\n\n      /* TODO should have part=\"week-number\" for the cell in weekdays-container */\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: var(--lumo-size-xs);\n      }\n\n      /* Date and week number cells */\n\n      [part=\"date\"],\n      [part=\"week-number\"] {\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        height: var(--lumo-size-m);\n        position: relative;\n      }\n\n      [part=\"date\"] {\n        transition: color 0.1s;\n      }\n\n      /* Today date */\n\n      [part=\"date\"][today] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      /* Focused date */\n\n      [part=\"date\"]::before {\n        content: \"\";\n        position: absolute;\n        z-index: -1;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        min-width: 2em;\n        min-height: 2em;\n        width: 80%;\n        height: 80%;\n        max-height: 100%;\n        max-width: 100%;\n        border-radius: var(--lumo-border-radius);\n      }\n\n      [part=\"date\"][focused]::before {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      :host(:not([focused])) [part=\"date\"][focused]::before {\n        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;\n      }\n\n      @keyframes vaadin-date-picker-month-calendar-focus-date {\n        50% {\n          box-shadow: 0 0 0 2px transparent;\n        }\n      }\n\n      /* TODO should not rely on the role attribute */\n      [part=\"date\"][role=\"button\"]:not([disabled]):not([selected]):hover::before {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      [part=\"date\"][selected] {\n        color: var(--lumo-primary-contrast-color);\n      }\n\n      [part=\"date\"][selected]::before {\n        background-color: var(--lumo-primary-color);\n      }\n\n      [part=\"date\"][disabled] {\n        color: var(--lumo-disabled-text-color);\n      }\n\n      @media (pointer: coarse) {\n        [part=\"date\"]:hover:not([selected])::before,\n        [part=\"date\"][focused]:not([selected])::before {\n          display: none;\n        }\n\n        [part=\"date\"][role=\"button\"]:not([disabled]):active::before {\n          display: block;\n        }\n\n        [part=\"date\"][selected]::before {\n          box-shadow: none;\n        }\n      }\n\n      /* Disabled */\n\n      :host([disabled]) * {\n        color: var(--lumo-disabled-text-color) !important;\n      }\n    </style>\n  </template>\n</dom-module><custom-style>\n  <style>\n    @keyframes vaadin-date-picker-month-calendar-focus-date {\n      50% {\n        box-shadow: 0 0 0 2px transparent;\n      }\n    }\n  </style>\n</custom-style>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/vaadin-date-picker.js ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-date-picker.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/lumo/vaadin-date-picker.js");


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js ***!
  \***************************************************************************************************/
/*! exports provided: runIfDevelopmentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runIfDevelopmentMode", function() { return runIfDevelopmentMode; });
var DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;

function isMinified() {
  function test() {
    /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/
    return true;
  }

  return uncommentAndRun(test);
}

function isDevelopmentMode() {
  try {
    return isForcedDevelopmentMode() || isLocalhost() && !isMinified() && !isFlowProductionMode();
  } catch (e) {
    // Some error in this code, assume production so no further actions will be taken
    return false;
  }
}

function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}

function isLocalhost() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}

function isFlowProductionMode() {
  if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
    var productionModeApps = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
      return window.Vaadin.Flow.clients[key];
    }).filter(function (client) {
      return client.productionMode;
    });

    if (productionModeApps.length > 0) {
      return true;
    }
  }

  return false;
}

function uncommentAndRun(callback, args) {
  if (typeof callback !== 'function') {
    return;
  }

  var match = DEV_MODE_CODE_REGEXP.exec(callback.toString());

  if (match) {
    try {
      // requires CSP: script-src 'unsafe-eval'
      callback = new Function(match[1]);
    } catch (e) {
      // eat the exception
      console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
  }

  return callback(args);
} // A guard against polymer-modulizer removing the window.Vaadin
// initialization above.


window['Vaadin'] = window['Vaadin'] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */

var runIfDevelopmentMode = function runIfDevelopmentMode(callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};

if (window.Vaadin.developmentMode === undefined) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js ***!
  \***************************************************************************/
/*! exports provided: ElementMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMixin", function() { return ElementMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js");
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






if (!window.Vaadin) {
  window['Vaadin'] = {};
}
/**
 * Array of Vaadin custom element classes that have been finalized.
 */


window['Vaadin'].registrations = window.Vaadin.registrations || []; // Use the hack to prevent polymer-modulizer from converting to exports

window['Vaadin'].developmentModeCallback = window.Vaadin.developmentModeCallback || {};

window['Vaadin'].developmentModeCallback['vaadin-usage-statistics'] = function () {
  if (_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"]) {
    Object(_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"])();
  }
};

var statsJob;
/**
 * @polymerMixin
 */

var ElementMixin = function ElementMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinElementMixin, _superClass);

      function VaadinElementMixin() {
        _classCallCheck(this, VaadinElementMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinElementMixin).apply(this, arguments));
      }

      _createClass(VaadinElementMixin, [{
        key: "ready",
        value: function ready() {
          _get(_getPrototypeOf(VaadinElementMixin.prototype), "ready", this).call(this);

          if (document.doctype === null) {
            console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
          }
        }
      }], [{
        key: "_finalizeClass",

        /** @protected */
        value: function _finalizeClass() {
          _get(_getPrototypeOf(VaadinElementMixin), "_finalizeClass", this).call(this); // Registers a class prototype for telemetry purposes.


          if (this.is) {
            window.Vaadin.registrations.push(this);

            if (window.Vaadin.developmentModeCallback) {
              statsJob = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(statsJob, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["idlePeriod"], function () {
                window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
              });
              Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["enqueueDebouncer"])(statsJob);
            }
          }
        }
      }]);

      return VaadinElementMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _sizing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-field-button\">\n  <template>\n    <style>\n      [part$=\"button\"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$=\"button\"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$=\"button\"],\n      :host([readonly]) [part$=\"button\"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$=\"button\"]::before {\n        font-family: \"lumo-icons\";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-required-field\">\n  <template>\n    <style>\n      [part=\"label\"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part=\"label\"] {\n        padding-right: 1em;\n      }\n\n      [part=\"label\"]::after {\n        content: var(--lumo-required-field-indicator, \"\u2022\");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part=\"label\"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part=\"label\"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part=\"error-message\"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn\u2019t reserve space when there\u2019s no error message */\n      [part=\"error-message\"]:not(:empty)::before,\n      [part=\"error-message\"]:not(:empty)::after {\n        content: \"\";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part=\"error-message\"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js ***!
  \*******************************************************************************/
/*! exports provided: TextFieldMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldMixin", function() { return TextFieldMixin; });
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
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
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"vaadin-text-field-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: \"\\2003\";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"input-field\"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part=\"input-field\"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part=\"input-field\"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part=\"input-field\"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part=\"value\"]::-ms-clear,\n      [part=\"input-field\"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part=\"clear-button\"] {\n        cursor: default;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: \"\u2715\";\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);
var HOST_PROPS = {
  "default": ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title'],
  accessible: ['disabled', 'readonly', 'required', 'invalid']
};
var PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};
/**
 * @polymerMixin
 * @mixes Vaadin.ControlStateMixin
 */

var TextFieldMixin = function TextFieldMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_ControlStateMixin) {
      _inherits(VaadinTextFieldMixin, _ControlStateMixin);

      function VaadinTextFieldMixin() {
        _classCallCheck(this, VaadinTextFieldMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinTextFieldMixin).apply(this, arguments));
      }

      _createClass(VaadinTextFieldMixin, [{
        key: "_onInput",
        value: function _onInput(e) {
          var _this = this;

          if (this.__preventInput) {
            e.stopImmediatePropagation();
            this.__preventInput = false;
            return;
          }

          if (this.preventInvalidInput) {
            var input = this.inputElement;

            if (input.value.length > 0 && !this.checkValidity()) {
              input.value = this.value || ''; // add input-prevented attribute for 200ms

              this.setAttribute('input-prevented', '');
              this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._inputDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(200), function () {
                _this.removeAttribute('input-prevented');
              });
              return;
            }
          }

          if (!e.__fromClearButton) {
            this.__userInput = true;
          }

          this.value = e.target.value;
        } // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
        // of the clear button instead of setting display property for it depending on state.

      }, {
        key: "_stateChanged",
        value: function _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
          if (!disabled && !readonly && clearButtonVisible && hasValue) {
            this.$.clearButton.removeAttribute('hidden');
          } else {
            this.$.clearButton.setAttribute('hidden', true);
          }
        }
      }, {
        key: "_onChange",
        value: function _onChange(e) {
          if (this._valueClearing) {
            return;
          } // In the Shadow DOM, the `change` event is not leaked into the
          // ancestor tree, so we must do this manually.


          var changeEvent = new CustomEvent('change', {
            detail: {
              sourceEvent: e
            },
            bubbles: e.bubbles,
            cancelable: e.cancelable
          });
          this.dispatchEvent(changeEvent);
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(newVal, oldVal) {
          // setting initial value to empty string, skip validation
          if (newVal === '' && oldVal === undefined) {
            return;
          }

          if (newVal !== '' && newVal != null) {
            this.hasValue = true;
          } else {
            this.hasValue = false;
          }

          if (this.__userInput) {
            this.__userInput = false;
            return;
          } else if (newVal !== undefined) {
            this.inputElement.value = newVal;
          } else {
            this.value = this.inputElement.value = '';
          }

          if (this.invalid) {
            this.validate();
          }
        }
      }, {
        key: "_labelChanged",
        value: function _labelChanged(label) {
          if (label !== '' && label != null) {
            this.setAttribute('has-label', '');
          } else {
            this.removeAttribute('has-label');
          }
        }
      }, {
        key: "_onSlotChange",
        value: function _onSlotChange() {
          var _this2 = this;

          var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          if (this.value) {
            this.inputElement.value = this.value;
            this.validate();
          }

          if (slotted && !this._slottedInput) {
            this._validateSlottedValue(slotted);

            this._addInputListeners(slotted);

            this._addIEListeners(slotted);

            this._slottedInput = slotted;
          } else if (!slotted && this._slottedInput) {
            this._removeInputListeners(this._slottedInput);

            this._removeIEListeners(this._slottedInput);

            this._slottedInput = undefined;
          }

          Object.keys(PROP_TYPE).map(function (key) {
            return PROP_TYPE[key];
          }).forEach(function (type) {
            return _this2._propagateHostAttributes(HOST_PROPS[type].map(function (attr) {
              return _this2[attr];
            }), type);
          });
        }
      }, {
        key: "_hostPropsChanged",
        value: function _hostPropsChanged() {
          for (var _len = arguments.length, attributesValues = new Array(_len), _key = 0; _key < _len; _key++) {
            attributesValues[_key] = arguments[_key];
          }

          this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
        }
      }, {
        key: "_hostAccessiblePropsChanged",
        value: function _hostAccessiblePropsChanged() {
          for (var _len2 = arguments.length, attributesValues = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            attributesValues[_key2] = arguments[_key2];
          }

          this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
        }
      }, {
        key: "_validateSlottedValue",
        value: function _validateSlottedValue(slotted) {
          if (slotted.value !== this.value) {
            console.warn('Please define value on the vaadin-text-field component!');
            slotted.value = '';
          }
        }
      }, {
        key: "_propagateHostAttributes",
        value: function _propagateHostAttributes(attributesValues, type) {
          var _this3 = this;

          var input = this.inputElement;
          var attributeNames = HOST_PROPS[type];

          if (type === 'accessible') {
            attributeNames.forEach(function (attr, index) {
              _this3._setOrToggleAttribute(attr, attributesValues[index], input);

              _this3._setOrToggleAttribute("aria-".concat(attr), attributesValues[index], input);
            });
          } else {
            attributeNames.forEach(function (attr, index) {
              _this3._setOrToggleAttribute(attr, attributesValues[index], input);
            });
          }
        }
      }, {
        key: "_setOrToggleAttribute",
        value: function _setOrToggleAttribute(name, value, node) {
          if (!name || !node) {
            return;
          }

          if (value) {
            node.setAttribute(name, typeof value === 'boolean' ? '' : value);
          } else {
            node.removeAttribute(name);
          }
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         * @returns {boolean}
         */

      }, {
        key: "checkValidity",
        value: function checkValidity() {
          if (this.required || this.pattern || this.maxlength || this.minlength) {
            return this.inputElement.checkValidity();
          } else {
            return !this.invalid;
          }
        }
      }, {
        key: "_addInputListeners",
        value: function _addInputListeners(node) {
          node.addEventListener('input', this._boundOnInput);
          node.addEventListener('change', this._boundOnChange);
          node.addEventListener('blur', this._boundOnBlur);
          node.addEventListener('focus', this._boundOnFocus);
        }
      }, {
        key: "_removeInputListeners",
        value: function _removeInputListeners(node) {
          node.removeEventListener('input', this._boundOnInput);
          node.removeEventListener('change', this._boundOnChange);
          node.removeEventListener('blur', this._boundOnBlur);
          node.removeEventListener('focus', this._boundOnFocus);
        }
      }, {
        key: "ready",
        value: function ready() {
          var _this4 = this;

          _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "ready", this).call(this);

          this._boundOnInput = this._onInput.bind(this);
          this._boundOnChange = this._onChange.bind(this);
          this._boundOnBlur = this._onBlur.bind(this);
          this._boundOnFocus = this._onFocus.bind(this);
          var defaultInput = this.shadowRoot.querySelector('[part="value"]');
          this._slottedInput = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          this._addInputListeners(defaultInput);

          this._addIEListeners(defaultInput);

          if (this._slottedInput) {
            this._addIEListeners(this._slottedInput);

            this._addInputListeners(this._slottedInput);
          }

          this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener('slotchange', this._onSlotChange.bind(this));

          if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
            this.updateStyles();
          }

          this.$.clearButton.addEventListener('mousedown', function () {
            return _this4._valueClearing = true;
          });
          this.$.clearButton.addEventListener('mouseleave', function () {
            return _this4._valueClearing = false;
          });
          this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
          this.addEventListener('keydown', this._onKeyDown.bind(this));
          var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
          this._errorId = "".concat(this.constructor.is, "-error-").concat(uniqueId);
          this._labelId = "".concat(this.constructor.is, "-label-").concat(uniqueId);
        }
        /**
         * Returns true if `value` is valid.
         * `<iron-form>` uses this to check the validity or all its elements.
         *
         * @return {boolean} True if the value is valid.
         */

      }, {
        key: "validate",
        value: function validate() {
          return !(this.invalid = !this.checkValidity());
        }
      }, {
        key: "clear",
        value: function clear() {
          this.value = '';
        }
      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.validate();
        }
      }, {
        key: "_onFocus",
        value: function _onFocus() {
          var _this5 = this;

          if (this.autoselect) {
            this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

            setTimeout(function () {
              _this5.inputElement.setSelectionRange(0, 9999);
            });
          }
        }
      }, {
        key: "_onClearButtonClick",
        value: function _onClearButtonClick(e) {
          e.preventDefault(); // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.

          this.inputElement.focus();
          this.clear();
          this._valueClearing = false;

          if (navigator.userAgent.match(/Trident/)) {
            // Disable IE input" event prevention here, we want the input event from
            // below to propagate normally.
            this.__preventInput = false;
          }

          var inputEvent = new Event('input', {
            bubbles: true,
            composed: true
          });
          inputEvent.__fromClearButton = true;
          var changeEvent = new Event('change', {
            bubbles: !this._slottedInput
          });
          changeEvent.__fromClearButton = true;
          this.inputElement.dispatchEvent(inputEvent);
          this.inputElement.dispatchEvent(changeEvent);
        }
      }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
          if (e.keyCode === 27 && this.clearButtonVisible) {
            this.clear();
          }
        }
      }, {
        key: "_addIEListeners",
        value: function _addIEListeners(node) {
          var _this6 = this;

          /* istanbul ignore if */
          if (navigator.userAgent.match(/Trident/)) {
            // IE11 dispatches `input` event in following cases:
            // - focus or blur, when placeholder attribute is set
            // - placeholder attribute value changed
            // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
            this._shouldPreventInput = function () {
              _this6.__preventInput = true;
              requestAnimationFrame(function () {
                _this6.__preventInput = false;
              });
            };

            node.addEventListener('focusin', this._shouldPreventInput);
            node.addEventListener('focusout', this._shouldPreventInput);

            this._createPropertyObserver('placeholder', this._shouldPreventInput);
          }
        }
      }, {
        key: "_removeIEListeners",
        value: function _removeIEListeners(node) {
          /* istanbul ignore if */
          if (navigator.userAgent.match(/Trident/)) {
            node.removeEventListener('focusin', this._shouldPreventInput);
            node.removeEventListener('focusout', this._shouldPreventInput);
          }
        }
      }, {
        key: "_getActiveErrorId",
        value: function _getActiveErrorId(invalid, errorMessage, errorId) {
          this._setOrToggleAttribute('aria-describedby', errorMessage && invalid ? errorId : undefined, this.inputElement);
        }
      }, {
        key: "_getActiveLabelId",
        value: function _getActiveLabelId(label, labelId) {
          this._setOrToggleAttribute('aria-labelledby', label ? labelId : undefined, this.inputElement);
        }
      }, {
        key: "_getErrorMessageAriaHidden",
        value: function _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
          return (!(errorMessage && invalid ? errorId : undefined)).toString();
        }
        /**
         * @protected
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(prop, oldVal, newVal) {
          _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "attributeChangedCallback", this).call(this, prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

          /* istanbul ignore if */


          if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
            this.updateStyles();
          } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
          // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          /* istanbul ignore if */

          if (isSafari && this.root) {
            var WEBKIT_PROPERTY = '-webkit-backface-visibility';
            this.root.querySelectorAll('*').forEach(function (el) {
              el.style[WEBKIT_PROPERTY] = 'visible';
              el.style[WEBKIT_PROPERTY] = '';
            });
          }
        }
        /**
         * Fired when the user commits a value change.
         *
         * @event change
         */

        /**
         * Fired when the value is changed by the user: on every typing keystroke,
         * and the value is cleared using the clear button.
         *
         * @event input
         */

      }, {
        key: "focusElement",
        get: function get() {
          if (!this.shadowRoot) {
            return;
          }

          var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          if (slotted) {
            return slotted;
          }

          return this.shadowRoot.querySelector('[part="value"]');
        }
        /**
         * @private
         */

      }, {
        key: "inputElement",
        get: function get() {
          return this.focusElement;
        }
      }, {
        key: "_slottedTagName",
        get: function get() {
          return 'input';
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Whether the value of the control can be automatically completed by the browser.
             * List of available options at:
             * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
             */
            autocomplete: {
              type: String
            },

            /**
             * This is a property supported by Safari that is used to control whether
             * autocorrection should be enabled when the user is entering/editing the text.
             * Possible values are:
             * on: Enable autocorrection.
             * off: Disable autocorrection.
             */
            autocorrect: {
              type: String
            },

            /**
             * This is a property supported by Safari and Chrome that is used to control whether
             * autocapitalization should be enabled when the user is entering/editing the text.
             * Possible values are:
             * characters: Characters capitalization.
             * words: Words capitalization.
             * sentences: Sentences capitalization.
             * none: No capitalization.
             */
            autocapitalize: {
              type: String
            },

            /**
             * Specify that the value should be automatically selected when the field gains focus.
             */
            autoselect: {
              type: Boolean,
              value: false
            },

            /**
             * Set to true to display the clear icon which clears the input.
             */
            clearButtonVisible: {
              type: Boolean,
              value: false
            },

            /**
             * Error to show when the input value is invalid.
             */
            errorMessage: {
              type: String,
              value: ''
            },

            /**
             * Object with translated strings used for localization. Has
             * the following structure and default values:
             *
             * ```
             * {
             *   // Translation of the clear icon button accessible label
             *   clear: 'Clear'
             * }
             * ```
             */
            i18n: {
              type: Object,
              value: function value() {
                return {
                  clear: 'Clear'
                };
              }
            },

            /**
             * String used for the label element.
             */
            label: {
              type: String,
              value: '',
              observer: '_labelChanged'
            },

            /**
             * Maximum number of characters (in Unicode code points) that the user can enter.
             */
            maxlength: {
              type: Number
            },

            /**
             * Minimum number of characters (in Unicode code points) that the user can enter.
             */
            minlength: {
              type: Number
            },

            /**
             * The name of the control, which is submitted with the form data.
             */
            name: {
              type: String
            },

            /**
             * A hint to the user of what can be entered in the control.
             */
            placeholder: {
              type: String
            },

            /**
             * This attribute indicates that the user cannot modify the value of the control.
             */
            readonly: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * Specifies that the user must fill in a value.
             */
            required: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * The initial value of the control.
             * It can be used for two-way data binding.
             */
            value: {
              type: String,
              value: '',
              observer: '_valueChanged',
              notify: true
            },

            /**
             * This property is set to true when the control value is invalid.
             */
            invalid: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              value: false
            },

            /**
             * Specifies that the text field has value.
             */
            hasValue: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * When set to true, user is prevented from typing a value that
             * conflicts with the given `pattern`.
             */
            preventInvalidInput: {
              type: Boolean
            },
            _labelId: {
              type: String
            },
            _errorId: {
              type: String
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS["default"].join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId)', '_getActiveLabelId(label, _labelId)'];
        }
      }]);

      return VaadinTextFieldMixin;
    }(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ControlStateMixin"])(subclass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js ***!
  \*************************************************************************/
/*! exports provided: TextFieldElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldElement", function() { return TextFieldElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field-mixin.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"], ["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);

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

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * `<vaadin-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <vaadin-text-field label="First Name">
 * </vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.TextFieldMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

var TextFieldElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(TextFieldElement, _ElementMixin);

  function TextFieldElement() {
    _classCallCheck(this, TextFieldElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextFieldElement).apply(this, arguments));
  }

  _createClass(TextFieldElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-text-field';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.4.4';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Identifies a list of pre-defined options to suggest to the user.
         * The value must be the id of a <datalist> element in the same document.
         */
        list: {
          type: String
        },

        /**
         * A regular expression that the value is checked against.
         * The pattern must match the entire value, not just some subset.
         */
        pattern: {
          type: String
        },

        /**
         * Message to show to the user when validation fails.
         */
        title: {
          type: String
        }
      };
    }
  }]);

  return TextFieldElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))));

customElements.define(TextFieldElement.is, TextFieldElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js ***!
  \***************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_required_field_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/required-field.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/required-field.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/field-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      [part=\"input-field\"] ::slotted(input):focus,\n      [part=\"input-field\"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in `mask-image` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"], ["<dom-module id=\"lumo-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"lumo-required-field lumo-field-button\">\n      :host {\n        --lumo-text-field-size: var(--lumo-size-m);\n        color: var(--lumo-body-text-color);\n        font-size: var(--lumo-font-size-m);\n        font-family: var(--lumo-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n        padding: var(--lumo-space-xs) 0;\n      }\n\n      :host::before {\n        height: var(--lumo-text-field-size);\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: center;\n      }\n\n      :host([focused]:not([readonly])) [part=\"label\"] {\n        color: var(--lumo-primary-text-color);\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        cursor: inherit;\n        min-height: var(--lumo-text-field-size);\n        padding: 0 0.25em;\n        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);\n        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);\n      }\n\n      [part=\"value\"]:focus,\n      [part=\"input-field\"] ::slotted(input):focus,\n      [part=\"input-field\"] ::slotted(textarea):focus {\n        -webkit-mask-image: none;\n        mask-image: none;\n      }\n\n      /*\n        TODO: CSS custom property in \\`mask-image\\` causes crash in Edge\n        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/\n      */\n      @-moz-document url-prefix() {\n        [part=\"value\"],\n        [part=\"input-field\"] ::slotted(input),\n        [part=\"input-field\"] ::slotted(textarea),\n        [part=\"input-field\"] ::slotted([part=\"value\"]) {\n          mask-image: var(--_lumo-text-field-overflow-mask-image);\n        }\n      }\n\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: inherit;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.05s;\n        opacity: 0.5;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: inherit;\n        transition: opacity 0.175s 0.1s;\n        opacity: 0.5;\n      }\n\n      [part=\"input-field\"] {\n        border-radius: var(--lumo-border-radius);\n        background-color: var(--lumo-contrast-10pct);\n        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);\n        font-weight: 500;\n        line-height: 1;\n        position: relative;\n        cursor: text;\n        box-sizing: border-box;\n      }\n\n      /* Used for hover and activation effects */\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        border-radius: inherit;\n        pointer-events: none;\n        background-color: var(--lumo-contrast-50pct);\n        opacity: 0;\n        transition: transform 0.15s, opacity 0.2s;\n        transform-origin: 100% 0;\n      }\n\n      /* Hover */\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n        color: var(--lumo-body-text-color);\n      }\n\n      :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n        opacity: 0.1;\n      }\n\n      /* Touch device adjustment */\n      @media (pointer: coarse) {\n        :host(:hover:not([readonly]):not([focused])) [part=\"label\"] {\n          color: var(--lumo-secondary-text-color);\n        }\n\n        :host(:hover:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0;\n        }\n\n        :host(:active:not([readonly]):not([focused])) [part=\"input-field\"]::after {\n          opacity: 0.2;\n        }\n      }\n\n      /* Trigger when not focusing using the keyboard */\n      :host([focused]:not([focus-ring]):not([readonly])) [part=\"input-field\"]::after {\n        transform: scaleX(0);\n        transition-duration: 0.15s, 1s;\n      }\n\n      /* Focus-ring */\n\n      :host([focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      /* Read-only and disabled */\n      :host([readonly]) [part=\"value\"]::-webkit-input-placeholder,\n      :host([disabled]) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]:-ms-input-placeholder,\n      :host([disabled]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::-moz-placeholder,\n      :host([disabled]) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n      }\n\n      :host([readonly]) [part=\"value\"]::placeholder,\n      :host([disabled]) [part=\"value\"]::placeholder {\n        opacity: 0;\n      }\n\n      /* Read-only */\n\n      :host([readonly]) [part=\"input-field\"] {\n        color: var(--lumo-secondary-text-color);\n        background-color: transparent;\n        cursor: default;\n      }\n\n      :host([readonly]) [part=\"input-field\"]::after {\n        background-color: transparent;\n        opacity: 1;\n        border: 1px dashed var(--lumo-contrast-30pct);\n      }\n\n      /* Disabled style */\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(*) {\n        color: var(--lumo-disabled-text-color);\n        -webkit-text-fill-color: var(--lumo-disabled-text-color);\n      }\n\n      /* Invalid style */\n\n      :host([invalid]) [part=\"input-field\"] {\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--lumo-error-color-50pct);\n      }\n\n      :host([invalid][focus-ring]) [part=\"input-field\"] {\n        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--lumo-error-text-color);\n      }\n\n      /* Small theme */\n\n      :host([theme~=\"small\"]) {\n        font-size: var(--lumo-font-size-s);\n        --lumo-text-field-size: var(--lumo-size-s);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"label\"] {\n        font-size: var(--lumo-font-size-xs);\n      }\n\n      :host([theme~=\"small\"][has-label]) [part=\"error-message\"] {\n        font-size: var(--lumo-font-size-xxs);\n      }\n\n      /* Text align */\n\n      :host([theme~=\"align-center\"]) [part=\"value\"] {\n        text-align: center;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      :host([theme~=\"align-right\"]) [part=\"value\"] {\n        text-align: right;\n        --_lumo-text-field-overflow-mask-image: none;\n      }\n\n      @-moz-document url-prefix() {\n        /* Firefox is smart enough to align overflowing text to right */\n        :host([theme~=\"align-right\"]) [part=\"value\"] {\n          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);\n        }\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {\n        color: var(--lumo-secondary-text-color);\n        font-weight: 400;\n      }\n\n      /* Slotted icons */\n\n      [part=\"input-field\"] ::slotted(iron-icon) {\n        color: var(--lumo-contrast-60pct);\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n\n      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */\n      [part=\"input-field\"] ::slotted(iron-icon[icon^=\"vaadin:\"]) {\n        padding: 0.25em;\n        box-sizing: border-box !important;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--lumo-icons-cross);\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_text_field_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-text-field-styles.js */ "./node_modules/@vaadin/vaadin-text-field/theme/lumo/vaadin-text-field-styles.js");
/* harmony import */ var _src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js ***!
  \*********************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return usageStatistics; });
/* harmony import */ var _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js */ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js");
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

/*

This script gathers usage statistics from the application running in development mode.

Statistics gathering is automatically disabled and excluded from production builds.

For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.

*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/


function maybeGatherAndSendStats() {
  /** vaadin-dev-mode:start
  (function () {
  'use strict';
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
  } : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
  };
  var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
   return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
  }();
  var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
  };
  var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);
     this.now = new Date().getTime();
    this.logger = logger;
  }
   createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }
           jQuery.toString = function () {
            return _jQuery.toString();
          };
           return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { "version": version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];
       types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });
       var previousStats = JSON.stringify(storedStats);
       this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);
       var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { "firstUsed": now };
          }
          // Discards any previously logged version numebr
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });
       var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
  }();
  var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);
     this.key = key;
  }
   createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });
       return empty;
    }
  }]);
  return StatisticsStorage;
  }();
  var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);
     this.url = url;
    this.logger = logger;
  }
   createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;
       if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);
       var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
  }();
  var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);
     this.id = id;
  }
   createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
  }();
  var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);
     this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;
     this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }
   createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;
       if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return Math.random() <= 0.05;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
       if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }
       if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }
       this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);
       // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.0.1';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
  }();
  try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
  }
  }());
   vaadin-dev-mode:end **/
}

var usageStatistics = function usageStatistics() {
  if (typeof _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"] === 'function') {
    return Object(_vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"])(maybeGatherAndSendStats);
  }
};

/***/ })

}]);
//# sourceMappingURL=vendors~more-info-dialog~panel-history~panel-logbook.chunk.js.map