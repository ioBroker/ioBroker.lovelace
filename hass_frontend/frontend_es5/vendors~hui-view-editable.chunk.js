(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~hui-view-editable"],{

/***/ "./node_modules/@polymer/paper-behaviors/paper-button-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-button-behavior.js ***!
  \************************************************************************/
/*! exports provided: PaperButtonBehaviorImpl, PaperButtonBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperButtonBehaviorImpl", function() { return PaperButtonBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperButtonBehavior", function() { return PaperButtonBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
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




/** @polymerBehavior PaperButtonBehavior */

var PaperButtonBehaviorImpl = {
  properties: {
    /**
     * The z-depth of this element, from 0-5. Setting to 0 will remove the
     * shadow, and each increasing number greater than 0 will be "deeper"
     * than the last.
     *
     * @attribute elevation
     * @type number
     * @default 1
     */
    elevation: {
      type: Number,
      reflectToAttribute: true,
      readOnly: true
    }
  },
  observers: ['_calculateElevation(focused, disabled, active, pressed, receivedFocusFromKeyboard)', '_computeKeyboardClass(receivedFocusFromKeyboard)'],
  hostAttributes: {
    role: 'button',
    tabindex: '0',
    animated: true
  },
  _calculateElevation: function _calculateElevation() {
    var e = 1;

    if (this.disabled) {
      e = 0;
    } else if (this.active || this.pressed) {
      e = 4;
    } else if (this.receivedFocusFromKeyboard) {
      e = 3;
    }

    this._setElevation(e);
  },
  _computeKeyboardClass: function _computeKeyboardClass(receivedFocusFromKeyboard) {
    this.toggleClass('keyboard-focus', receivedFocusFromKeyboard);
  },

  /**
   * In addition to `IronButtonState` behavior, when space key goes down,
   * create a ripple down effect.
   *
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function _spaceKeyDownHandler(event) {
    _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonStateImpl"]._spaceKeyDownHandler.call(this, event); // Ensure that there is at most one ripple when the space key is held down.


    if (this.hasRipple() && this.getRipple().ripples.length < 1) {
      this._ripple.uiDownAction();
    }
  },

  /**
   * In addition to `IronButtonState` behavior, when space key goes up,
   * create a ripple up effect.
   *
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function _spaceKeyUpHandler(event) {
    _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonStateImpl"]._spaceKeyUpHandler.call(this, event);

    if (this.hasRipple()) {
      this._ripple.uiUpAction();
    }
  }
};
/** @polymerBehavior */

var PaperButtonBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"], PaperButtonBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-fab/paper-fab.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/paper-fab/paper-fab.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles.js */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-button-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-button-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style include=\"paper-material-styles\">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value `transparent`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id=\"icon\" hidden$=\"{{!_computeIsIconFab(icon, src)}}\" src=\"[[src]]\" icon=\"[[icon]]\"></iron-icon>\n  <span hidden$=\"{{_computeIsIconFab(icon, src)}}\">{{label}}</span>\n"], ["\n  <style include=\"paper-material-styles\">\n    :host {\n      @apply --layout-vertical;\n      @apply --layout-center-center;\n\n      background: var(--paper-fab-background, var(--accent-color));\n      border-radius: 50%;\n      box-sizing: border-box;\n      color: var(--text-primary-color);\n      cursor: pointer;\n      height: 56px;\n      min-width: 0;\n      outline: none;\n      padding: 16px;\n      position: relative;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      -webkit-user-select: none;\n      user-select: none;\n      width: 56px;\n      z-index: 0;\n\n      /* NOTE: Both values are needed, since some phones require the value \\`transparent\\`. */\n      -webkit-tap-highlight-color: rgba(0,0,0,0);\n      -webkit-tap-highlight-color: transparent;\n\n      @apply --paper-fab;\n    }\n\n    [hidden] {\n      display: none !important;\n    }\n\n    :host([mini]) {\n      width: 40px;\n      height: 40px;\n      padding: 8px;\n\n      @apply --paper-fab-mini;\n    }\n\n    :host([disabled]) {\n      color: var(--paper-fab-disabled-text, var(--paper-grey-500));\n      background: var(--paper-fab-disabled-background, var(--paper-grey-300));\n\n      @apply --paper-fab-disabled;\n    }\n\n    iron-icon {\n      @apply --paper-fab-iron-icon;\n    }\n\n    span {\n      width: 100%;\n      white-space: nowrap;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      text-align: center;\n\n      @apply --paper-fab-label;\n    }\n\n    :host(.keyboard-focus) {\n      background: var(--paper-fab-keyboard-focus-background, var(--paper-pink-900));\n    }\n\n    :host([elevation=\"1\"]) {\n      @apply --paper-material-elevation-1;\n    }\n\n    :host([elevation=\"2\"]) {\n      @apply --paper-material-elevation-2;\n    }\n\n    :host([elevation=\"3\"]) {\n      @apply --paper-material-elevation-3;\n    }\n\n    :host([elevation=\"4\"]) {\n      @apply --paper-material-elevation-4;\n    }\n\n    :host([elevation=\"5\"]) {\n      @apply --paper-material-elevation-5;\n    }\n  </style>\n\n  <iron-icon id=\"icon\" hidden\\$=\"{{!_computeIsIconFab(icon, src)}}\" src=\"[[src]]\" icon=\"[[icon]]\"></iron-icon>\n  <span hidden\\$=\"{{_computeIsIconFab(icon, src)}}\">{{label}}</span>\n"]);

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









var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_8__["html"])(_templateObject());
template.setAttribute('strip-whitespace', '');
/**
Material design: [Floating Action
Button](https://www.google.com/design/spec/components/buttons-floating-action-button.html)

`paper-fab` is a floating action button. It contains an image placed in the
center and comes in two sizes: regular size and a smaller size by applying the
attribute `mini`. When the user touches the button, a ripple effect emanates
from the center of the button.

You may import `iron-icons` to use with this element, or provide a URL to a
custom icon. See `iron-iconset` for more information about how to use a custom
icon set.

Example:

    <script type="module">
      import '@polymer/iron-icons/iron-icons.js';
    </script>

    <paper-fab icon="add"></paper-fab>
    <paper-fab mini icon="favorite"></paper-fab>
    <paper-fab src="star.png"></paper-fab>


### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-fab-background` | The background color of the button | `--accent-color`
`--paper-fab-keyboard-focus-background` | The background color of the button when focused | `--paper-pink-900`
`--paper-fab-disabled-background` | The background color of the button when it's disabled | `--paper-grey-300`
`--paper-fab-disabled-text` | The text color of the button when it's disabled | `--paper-grey-500`
`--paper-fab` | Mixin applied to the button | `{}`
`--paper-fab-mini` | Mixin applied to a mini button | `{}`
`--paper-fab-disabled` | Mixin applied to a disabled button | `{}`
`--paper-fab-iron-icon` | Mixin applied to the iron-icon within the button | `{}`
`--paper-fab-label` | Mixin applied to the label within the button | `{}`

@group Paper Elements
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_7__["Polymer"])({
  _template: template,
  is: 'paper-fab',
  behaviors: [_polymer_paper_behaviors_paper_button_behavior_js__WEBPACK_IMPORTED_MODULE_6__["PaperButtonBehavior"]],
  properties: {
    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */
    src: {
      type: String,
      value: ''
    },

    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */
    icon: {
      type: String,
      value: ''
    },

    /**
     * Set this to true to style this is a "mini" FAB.
     */
    mini: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * The label displayed in the badge. The label is centered, and ideally
     * should have very few characters.
     */
    label: {
      type: String,
      observer: '_labelChanged'
    }
  },
  _labelChanged: function _labelChanged() {
    this.setAttribute('aria-label', this.label);
  },
  _computeIsIconFab: function _computeIsIconFab(icon, src) {
    return icon.length > 0 || src.length > 0;
  }
});

/***/ })

}]);
//# sourceMappingURL=vendors~hui-view-editable.chunk.js.map