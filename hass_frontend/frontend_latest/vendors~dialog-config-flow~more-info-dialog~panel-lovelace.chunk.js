(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~more-info-dialog~panel-lovelace"],{

/***/ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js ***!
  \**********************************************************************************************/
/*! exports provided: IronCheckedElementBehaviorImpl, IronCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehaviorImpl", function() { return IronCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronCheckedElementBehavior", function() { return IronCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
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



/**
 * Use `IronCheckedElementBehavior` to implement a custom element that has a
 * `checked` property, which can be used for validation if the element is also
 * `required`. Element instances implementing this behavior will also be
 * registered for use in an `iron-form` element.
 *
 * @demo demo/index.html
 * @polymerBehavior IronCheckedElementBehavior
 */

const IronCheckedElementBehaviorImpl = {
  properties: {
    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */

    /**
     * Gets or sets the state, `true` is checked and `false` is unchecked.
     */
    checked: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      notify: true,
      observer: '_checkedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: true,
      reflectToAttribute: true
    },

    /* Overriden from IronFormElementBehavior */
    value: {
      type: String,
      value: 'on',
      observer: '_valueChanged'
    }
  },
  observers: ['_requiredChanged(required)'],
  created: function () {
    // Used by `iron-form` to handle the case that an element with this behavior
    // doesn't have a role of 'checkbox' or 'radio', but should still only be
    // included when the form is serialized if `this.checked === true`.
    this._hasIronCheckedElementBehavior = true;
  },

  /**
   * Returns false if the element is required and not checked, and true
   * otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false or if `checked` is true.
   */
  _getValidity: function (_value) {
    return this.disabled || !this.required || this.checked;
  },

  /**
   * Update the aria-required label when `required` is changed.
   */
  _requiredChanged: function () {
    if (this.required) {
      this.setAttribute('aria-required', 'true');
    } else {
      this.removeAttribute('aria-required');
    }
  },

  /**
   * Fire `iron-changed` when the checked state changes.
   */
  _checkedChanged: function () {
    this.active = this.checked;
    this.fire('iron-change');
  },

  /**
   * Reset value to 'on' if it is set to `undefined`.
   */
  _valueChanged: function () {
    if (this.value === undefined || this.value === null) {
      this.value = 'on';
    }
  }
};
/** @polymerBehavior */

const IronCheckedElementBehavior = [_polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronValidatableBehavior"], IronCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/iron-range-behavior/iron-range-behavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/iron-range-behavior/iron-range-behavior.js ***!
  \**************************************************************************/
/*! exports provided: IronRangeBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronRangeBehavior", function() { return IronRangeBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

/**
 * `iron-range-behavior` provides the behavior for something with a minimum to
 * maximum range.
 *
 * @demo demo/index.html
 * @polymerBehavior
 */

const IronRangeBehavior = {
  properties: {
    /**
     * The number that represents the current value.
     */
    value: {
      type: Number,
      value: 0,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * The number that indicates the minimum value of the range.
     */
    min: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * The number that indicates the maximum value of the range.
     */
    max: {
      type: Number,
      value: 100,
      notify: true
    },

    /**
     * Specifies the value granularity of the range's value.
     */
    step: {
      type: Number,
      value: 1,
      notify: true
    },

    /**
     * Returns the ratio of the value.
     */
    ratio: {
      type: Number,
      value: 0,
      readOnly: true,
      notify: true
    }
  },
  observers: ['_update(value, min, max, step)'],
  _calcRatio: function (value) {
    return (this._clampValue(value) - this.min) / (this.max - this.min);
  },
  _clampValue: function (value) {
    return Math.min(this.max, Math.max(this.min, this._calcStep(value)));
  },
  _calcStep: function (value) {
    // polymer/issues/2493
    value = parseFloat(value);

    if (!this.step) {
      return value;
    }

    var numSteps = Math.round((value - this.min) / this.step);

    if (this.step < 1) {
      /**
       * For small values of this.step, if we calculate the step using
       * `Math.round(value / step) * step` we may hit a precision point issue
       * eg. 0.1 * 0.2 =  0.020000000000000004
       * http://docs.oracle.com/cd/E19957-01/806-3568/ncg_goldberg.html
       *
       * as a work around we can divide by the reciprocal of `step`
       */
      return numSteps / (1 / this.step) + this.min;
    } else {
      return numSteps * this.step + this.min;
    }
  },
  _validateValue: function () {
    var v = this._clampValue(this.value);

    this.value = this.oldValue = isNaN(v) ? this.oldValue : v;
    return this.value !== v;
  },
  _update: function () {
    this._validateValue();

    this._setRatio(this._calcRatio(this.value) * 100);
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js ***!
  \*********************************************************************************/
/*! exports provided: PaperCheckedElementBehaviorImpl, PaperCheckedElementBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehaviorImpl", function() { return PaperCheckedElementBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperCheckedElementBehavior", function() { return PaperCheckedElementBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-checked-element-behavior/iron-checked-element-behavior.js */ "./node_modules/@polymer/iron-checked-element-behavior/iron-checked-element-behavior.js");
/* harmony import */ var _paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
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




/**
 * Use `PaperCheckedElementBehavior` to implement a custom element that has a
 * `checked` property similar to `IronCheckedElementBehavior` and is compatible
 * with having a ripple effect.
 * @polymerBehavior PaperCheckedElementBehavior
 */

const PaperCheckedElementBehaviorImpl = {
  /**
   * Synchronizes the element's checked state with its ripple effect.
   */
  _checkedChanged: function () {
    _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehaviorImpl"]._checkedChanged.call(this);

    if (this.hasRipple()) {
      if (this.checked) {
        this._ripple.setAttribute('checked', '');
      } else {
        this._ripple.removeAttribute('checked');
      }
    }
  },

  /**
   * Synchronizes the element's `active` and `checked` state.
   */
  _buttonStateChanged: function () {
    _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._buttonStateChanged.call(this);

    if (this.disabled) {
      return;
    }

    if (this.isAttached) {
      this.checked = this.active;
    }
  }
};
/** @polymerBehavior */

const PaperCheckedElementBehavior = [_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperInkyFocusBehavior"], _polymer_iron_checked_element_behavior_iron_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronCheckedElementBehavior"], PaperCheckedElementBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/paper-checkbox/paper-checkbox.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<style>
  :host {
    display: inline-block;
    white-space: nowrap;
    cursor: pointer;
    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);
    /* -1px is a sentinel for the default and is replaced in \`attached\`. */
    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);
    @apply --paper-font-common-base;
    line-height: 0;
    -webkit-tap-highlight-color: transparent;
  }

  :host([hidden]) {
    display: none !important;
  }

  :host(:focus) {
    outline: none;
  }

  .hidden {
    display: none;
  }

  #checkboxContainer {
    display: inline-block;
    position: relative;
    width: var(--calculated-paper-checkbox-size);
    height: var(--calculated-paper-checkbox-size);
    min-width: var(--calculated-paper-checkbox-size);
    margin: var(--paper-checkbox-margin, initial);
    vertical-align: var(--paper-checkbox-vertical-align, middle);
    background-color: var(--paper-checkbox-unchecked-background-color, transparent);
  }

  #ink {
    position: absolute;

    /* Center the ripple in the checkbox by negative offsetting it by
     * (inkWidth - rippleWidth) / 2 */
    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    width: var(--calculated-paper-checkbox-ink-size);
    height: var(--calculated-paper-checkbox-ink-size);
    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
  }

  #ink:dir(rtl) {
    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);
    left: auto;
  }

  #ink[checked] {
    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));
  }

  #checkbox {
    position: relative;
    box-sizing: border-box;
    height: 100%;
    border: solid 2px;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    border-radius: 2px;
    pointer-events: none;
    -webkit-transition: background-color 140ms, border-color 140ms;
    transition: background-color 140ms, border-color 140ms;

    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);
    transition-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  /* checkbox checked animations */
  #checkbox.checked #checkmark {
    -webkit-animation: checkmark-expand 140ms ease-out forwards;
    animation: checkmark-expand 140ms ease-out forwards;

    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);
    animation-duration: var(--paper-checkbox-animation-duration, 140ms);
  }

  @-webkit-keyframes checkmark-expand {
    0% {
      -webkit-transform: scale(0, 0) rotate(45deg);
    }
    100% {
      -webkit-transform: scale(1, 1) rotate(45deg);
    }
  }

  @keyframes checkmark-expand {
    0% {
      transform: scale(0, 0) rotate(45deg);
    }
    100% {
      transform: scale(1, 1) rotate(45deg);
    }
  }

  #checkbox.checked {
    background-color: var(--paper-checkbox-checked-color, var(--primary-color));
    border-color: var(--paper-checkbox-checked-color, var(--primary-color));
  }

  #checkmark {
    position: absolute;
    width: 36%;
    height: 70%;
    border-style: solid;
    border-top: none;
    border-left: none;
    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));
    border-color: var(--paper-checkbox-checkmark-color, white);
    -webkit-transform-origin: 97% 86%;
    transform-origin: 97% 86%;
    box-sizing: content-box; /* protect against page-level box-sizing */
  }

  #checkmark:dir(rtl) {
    -webkit-transform-origin: 50% 14%;
    transform-origin: 50% 14%;
  }

  /* label */
  #checkboxLabel {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    padding-left: var(--paper-checkbox-label-spacing, 8px);
    white-space: normal;
    line-height: normal;
    color: var(--paper-checkbox-label-color, var(--primary-text-color));
    @apply --paper-checkbox-label;
  }

  :host([checked]) #checkboxLabel {
    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));
    @apply --paper-checkbox-label-checked;
  }

  #checkboxLabel:dir(rtl) {
    padding-right: var(--paper-checkbox-label-spacing, 8px);
    padding-left: 0;
  }

  #checkboxLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #checkbox {
    opacity: 0.5;
    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
  }

  :host([disabled][checked]) #checkbox {
    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #checkboxLabel  {
    opacity: 0.65;
  }

  /* invalid state */
  #checkbox.invalid:not(.checked) {
    border-color: var(--paper-checkbox-error-color, var(--error-color));
  }
</style>

<div id="checkboxContainer">
  <div id="checkbox" class$="[[_computeCheckboxClass(checked, invalid)]]">
    <div id="checkmark" class$="[[_computeCheckmarkClass(checked)]]"></div>
  </div>
</div>

<div id="checkboxLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');
/**
Material design:
[Checkbox](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-checkbox)

`paper-checkbox` is a button that can be either checked or unchecked. User can
tap the checkbox to check or uncheck it. Usually you use checkboxes to allow
user to select multiple options from a set. If you have a single ON/OFF option,
avoid using a single checkbox and use `paper-toggle-button` instead.

Example:

    <paper-checkbox>label</paper-checkbox>

    <paper-checkbox checked> label</paper-checkbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-checkbox-unchecked-background-color` | Checkbox background color when the input is not checked | `transparent`
`--paper-checkbox-unchecked-color` | Checkbox border color when the input is not checked | `--primary-text-color`
`--paper-checkbox-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-checkbox-checked-color` | Checkbox color when the input is checked | `--primary-color`
`--paper-checkbox-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-checkbox-checkmark-color` | Checkmark color | `white`
`--paper-checkbox-label-color` | Label color | `--primary-text-color`
`--paper-checkbox-label-checked-color` | Label color when the input is checked | `--paper-checkbox-label-color`
`--paper-checkbox-label-spacing` | Spacing between the label and the checkbox | `8px`
`--paper-checkbox-label` | Mixin applied to the label | `{}`
`--paper-checkbox-label-checked` | Mixin applied to the label when the input is checked | `{}`
`--paper-checkbox-error-color` | Checkbox color when invalid | `--error-color`
`--paper-checkbox-size` | Size of the checkbox | `18px`
`--paper-checkbox-ink-size` | Size of the ripple | `48px`
`--paper-checkbox-margin` | Margin around the checkbox container | `initial`
`--paper-checkbox-vertical-align` | Vertical alignment of the checkbox container | `middle`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,
  is: 'paper-checkbox',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_2__["PaperCheckedElementBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'checkbox',
    'aria-checked': false,
    tabindex: 0
  },
  properties: {
    /**
     * Fired when the checked state changes due to user interaction.
     *
     * @event change
     */

    /**
     * Fired when the checked state changes.
     *
     * @event iron-change
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-checked'
    }
  },
  attached: function () {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function () {
      var inkSize = this.getComputedStyleValue('--calculated-paper-checkbox-ink-size').trim(); // If unset, compute and set the default `--paper-checkbox-ink-size`.

      if (inkSize === '-1px') {
        var checkboxSizeText = this.getComputedStyleValue('--calculated-paper-checkbox-size').trim();
        var units = 'px';
        var unitsMatches = checkboxSizeText.match(/[A-Za-z]+$/);

        if (unitsMatches !== null) {
          units = unitsMatches[0];
        }

        var checkboxSize = parseFloat(checkboxSizeText);
        var defaultInkSize = 8 / 3 * checkboxSize;

        if (units === 'px') {
          defaultInkSize = Math.floor(defaultInkSize); // The checkbox and ripple need to have the same parity so that their
          // centers align.

          if (defaultInkSize % 2 !== checkboxSize % 2) {
            defaultInkSize++;
          }
        }

        this.updateStyles({
          '--paper-checkbox-ink-size': defaultInkSize + units
        });
      }
    });
  },
  _computeCheckboxClass: function (checked, invalid) {
    var className = '';

    if (checked) {
      className += 'checked ';
    }

    if (invalid) {
      className += 'invalid';
    }

    return className;
  },
  _computeCheckmarkClass: function (checked) {
    return checked ? '' : 'hidden';
  },
  // create ripple inside the checkboxContainer
  _createRipple: function () {
    this._rippleContainer = this.$.checkboxContainer;
    return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperInkyFocusBehaviorImpl"]._createRipple.call(this);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-progress/paper-progress.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/paper-progress/paper-progress.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _polymer_iron_range_behavior_iron_range_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-range-behavior/iron-range-behavior.js */ "./node_modules/@polymer/iron-range-behavior/iron-range-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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






/**
Material design: [Progress &
activity](https://www.google.com/design/spec/components/progress-activity.html)

The progress bars are for situations where the percentage completed can be
determined. They give users a quick sense of how much longer an operation
will take.

Example:

    <paper-progress value="10"></paper-progress>

There is also a secondary progress which is useful for displaying intermediate
progress, such as the buffer level during a streaming playback progress bar.

Example:

    <paper-progress value="10" secondary-progress="30"></paper-progress>

### Styling progress bar:

To change the active progress bar color:

    paper-progress {
       --paper-progress-active-color: #e91e63;
    }

To change the secondary progress bar color:

    paper-progress {
      --paper-progress-secondary-color: #f8bbd0;
    }

To change the progress bar background color:

    paper-progress {
      --paper-progress-container-color: #64ffda;
    }

Add the class `transiting` to a paper-progress to animate the progress bar when
the value changed. You can also customize the transition:

    paper-progress {
      --paper-progress-transition-duration: 0.08s;
      --paper-progress-transition-timing-function: ease;
      --paper-progress-transition-delay: 0s;
    }

To change the duration of the indeterminate cycle:

    paper-progress {
      --paper-progress-indeterminate-cycle-duration: 2s;
    }

The following mixins are available for styling:

Custom property | Description | Default
----------------|-------------|---------
`--paper-progress-container` | Mixin applied to container | `{}`
`--paper-progress-transition-duration` | Duration of the transition | `0.08s`
`--paper-progress-transition-timing-function` | The timing function for the transition | `ease`
`--paper-progress-transition-delay` | delay for the transition | `0s`
`--paper-progress-container-color` | Color of the container | `--google-grey-300`
`--paper-progress-active-color` | The color of the active bar | `--google-green-500`
`--paper-progress-secondary-color` | The color of the secondary bar | `--google-green-100`
`--paper-progress-disabled-active-color` | The color of the active bar if disabled | `--google-grey-500`
`--paper-progress-disabled-secondary-color` | The color of the secondary bar if disabled  | `--google-grey-300`
`--paper-progress-height` | The height of the progress bar | `4px`
`--paper-progress-indeterminate-cycle-duration` | Duration of an indeterminate cycle | `2s`

@group Paper Elements
@element paper-progress
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: block;
        width: 200px;
        position: relative;
        overflow: hidden;
      }

      :host([hidden]), [hidden] {
        display: none !important;
      }

      #progressContainer {
        @apply --paper-progress-container;
        position: relative;
      }

      #progressContainer,
      /* the stripe for the indeterminate animation*/
      .indeterminate::after {
        height: var(--paper-progress-height, 4px);
      }

      #primaryProgress,
      #secondaryProgress,
      .indeterminate::after {
        @apply --layout-fit;
      }

      #progressContainer,
      .indeterminate::after {
        background: var(--paper-progress-container-color, var(--google-grey-300));
      }

      :host(.transiting) #primaryProgress,
      :host(.transiting) #secondaryProgress {
        -webkit-transition-property: -webkit-transform;
        transition-property: transform;

        /* Duration */
        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);
        transition-duration: var(--paper-progress-transition-duration, 0.08s);

        /* Timing function */
        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);
        transition-timing-function: var(--paper-progress-transition-timing-function, ease);

        /* Delay */
        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);
        transition-delay: var(--paper-progress-transition-delay, 0s);
      }

      #primaryProgress,
      #secondaryProgress {
        @apply --layout-fit;
        -webkit-transform-origin: left center;
        transform-origin: left center;
        -webkit-transform: scaleX(0);
        transform: scaleX(0);
        will-change: transform;
      }

      #primaryProgress {
        background: var(--paper-progress-active-color, var(--google-green-500));
      }

      #secondaryProgress {
        background: var(--paper-progress-secondary-color, var(--google-green-100));
      }

      :host([disabled]) #primaryProgress {
        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));
      }

      :host([disabled]) #secondaryProgress {
        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));
      }

      :host(:not([disabled])) #primaryProgress.indeterminate {
        -webkit-transform-origin: right center;
        transform-origin: right center;
        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      :host(:not([disabled])) #primaryProgress.indeterminate::after {
        content: "";
        -webkit-transform-origin: center center;
        transform-origin: center center;

        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;
      }

      @-webkit-keyframes indeterminate-bar {
        0% {
          -webkit-transform: scaleX(1) translateX(-100%);
        }
        50% {
          -webkit-transform: scaleX(1) translateX(0%);
        }
        75% {
          -webkit-transform: scaleX(1) translateX(0%);
          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          -webkit-transform: scaleX(0) translateX(0%);
        }
      }

      @-webkit-keyframes indeterminate-splitter {
        0% {
          -webkit-transform: scaleX(.75) translateX(-125%);
        }
        30% {
          -webkit-transform: scaleX(.75) translateX(-125%);
          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
        100% {
          -webkit-transform: scaleX(.75) translateX(125%);
        }
      }

      @keyframes indeterminate-bar {
        0% {
          transform: scaleX(1) translateX(-100%);
        }
        50% {
          transform: scaleX(1) translateX(0%);
        }
        75% {
          transform: scaleX(1) translateX(0%);
          animation-timing-function: cubic-bezier(.28,.62,.37,.91);
        }
        100% {
          transform: scaleX(0) translateX(0%);
        }
      }

      @keyframes indeterminate-splitter {
        0% {
          transform: scaleX(.75) translateX(-125%);
        }
        30% {
          transform: scaleX(.75) translateX(-125%);
          animation-timing-function: cubic-bezier(.42,0,.6,.8);
        }
        90% {
          transform: scaleX(.75) translateX(125%);
        }
        100% {
          transform: scaleX(.75) translateX(125%);
        }
      }
    </style>

    <div id="progressContainer">
      <div id="secondaryProgress" hidden\$="[[_hideSecondaryProgress(secondaryRatio)]]"></div>
      <div id="primaryProgress"></div>
    </div>
`,
  is: 'paper-progress',
  behaviors: [_polymer_iron_range_behavior_iron_range_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronRangeBehavior"]],
  properties: {
    /**
     * The number that represents the current secondary progress.
     */
    secondaryProgress: {
      type: Number,
      value: 0
    },

    /**
     * The secondary ratio
     */
    secondaryRatio: {
      type: Number,
      value: 0,
      readOnly: true
    },

    /**
     * Use an indeterminate progress indicator.
     */
    indeterminate: {
      type: Boolean,
      value: false,
      observer: '_toggleIndeterminate'
    },

    /**
     * True if the progress is disabled.
     */
    disabled: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_disabledChanged'
    }
  },
  observers: ['_progressChanged(secondaryProgress, value, min, max, indeterminate)'],
  hostAttributes: {
    role: 'progressbar'
  },
  _toggleIndeterminate: function (indeterminate) {
    // If we use attribute/class binding, the animation sometimes doesn't
    // translate properly on Safari 7.1. So instead, we toggle the class here in
    // the update method.
    this.toggleClass('indeterminate', indeterminate, this.$.primaryProgress);
  },
  _transformProgress: function (progress, ratio) {
    var transform = 'scaleX(' + ratio / 100 + ')';
    progress.style.transform = progress.style.webkitTransform = transform;
  },
  _mainRatioChanged: function (ratio) {
    this._transformProgress(this.$.primaryProgress, ratio);
  },
  _progressChanged: function (secondaryProgress, value, min, max, indeterminate) {
    secondaryProgress = this._clampValue(secondaryProgress);
    value = this._clampValue(value);
    var secondaryRatio = this._calcRatio(secondaryProgress) * 100;
    var mainRatio = this._calcRatio(value) * 100;

    this._setSecondaryRatio(secondaryRatio);

    this._transformProgress(this.$.secondaryProgress, secondaryRatio);

    this._transformProgress(this.$.primaryProgress, mainRatio);

    this.secondaryProgress = secondaryProgress;

    if (indeterminate) {
      this.removeAttribute('aria-valuenow');
    } else {
      this.setAttribute('aria-valuenow', value);
    }

    this.setAttribute('aria-valuemin', min);
    this.setAttribute('aria-valuemax', max);
  },
  _disabledChanged: function (disabled) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  },
  _hideSecondaryProgress: function (secondaryRatio) {
    return secondaryRatio === 0;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-slider/paper-slider.js":
/*!************************************************************!*\
  !*** ./node_modules/@polymer/paper-slider/paper-slider.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input.js */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_progress_paper_progress_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-progress/paper-progress.js */ "./node_modules/@polymer/paper-progress/paper-progress.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_range_behavior_iron_range_behavior_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/iron-range-behavior/iron-range-behavior.js */ "./node_modules/@polymer/iron-range-behavior/iron-range-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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











const template = _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_10__["html"]`
  <style>
    :host {
      @apply --layout;
      @apply --layout-justified;
      @apply --layout-center;
      width: 200px;
      cursor: default;
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));
      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));
      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));
      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));
      --calculated-paper-slider-height: var(--paper-slider-height, 2px);
    }

    /* focus shows the ripple */
    :host(:focus) {
      outline: none;
    }

    /**
      * NOTE(keanulee): Though :host-context is not universally supported, some pages
      * still rely on paper-slider being flipped when dir="rtl" is set on body. For full
      * compatibility, dir="rtl" must be explicitly set on paper-slider.
      */
    :dir(rtl) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): This is separate from the rule above because :host-context may
      * not be recognized.
      */
    :host([dir="rtl"]) #sliderContainer {
      -webkit-transform: scaleX(-1);
      transform: scaleX(-1);
    }

    /**
      * NOTE(keanulee): Needed to override the :host-context rule (where supported)
      * to support LTR sliders in RTL pages.
      */
    :host([dir="ltr"]) #sliderContainer {
      -webkit-transform: scaleX(1);
      transform: scaleX(1);
    }

    #sliderContainer {
      position: relative;
      width: 100%;
      height: calc(30px + var(--calculated-paper-slider-height));
      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);
      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);
    }

    #sliderContainer:focus {
      outline: 0;
    }

    #sliderContainer.editable {
      margin-top: 12px;
      margin-bottom: 12px;
    }

    .bar-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
    }

    .ring > .bar-container {
      left: calc(5px + var(--calculated-paper-slider-height)/2);
      transition: left 0.18s ease;
    }

    .ring.expand.dragging > .bar-container {
      transition: none;
    }

    .ring.expand:not(.pin) > .bar-container {
      left: calc(8px + var(--calculated-paper-slider-height)/2);
    }

    #sliderBar {
      padding: 15px 0;
      width: 100%;
      background-color: var(--paper-slider-bar-color, transparent);
      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));
      --paper-progress-height: var(--calculated-paper-slider-height);
    }

    .slider-markers {
      position: absolute;
      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/
      top: 15px;
      height: var(--calculated-paper-slider-height);
      left: 0;
      right: -1px;
      box-sizing: border-box;
      pointer-events: none;
      @apply --layout-horizontal;
    }

    .slider-marker {
      @apply --layout-flex;
    }
    .slider-markers::after,
    .slider-marker::after {
      content: "";
      display: block;
      margin-left: -1px;
      width: 2px;
      height: var(--calculated-paper-slider-height);
      border-radius: 50%;
      background-color: var(--paper-slider-markers-color, #000);
    }

    .slider-knob {
      position: absolute;
      left: 0;
      top: 0;
      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);
      width: calc(30px + var(--calculated-paper-slider-height));
      height: calc(30px + var(--calculated-paper-slider-height));
    }

    .transiting > .slider-knob {
      transition: left 0.08s ease;
    }

    .slider-knob:focus {
      outline: none;
    }

    .slider-knob.dragging {
      transition: none;
    }

    .snaps > .slider-knob.dragging {
      transition: -webkit-transform 0.08s ease;
      transition: transform 0.08s ease;
    }

    .slider-knob-inner {
      margin: 10px;
      width: calc(100% - 20px);
      height: calc(100% - 20px);
      background-color: var(--paper-slider-knob-color, var(--google-blue-700));
      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));
      border-radius: 50%;

      -moz-box-sizing: border-box;
      box-sizing: border-box;

      transition-property: -webkit-transform, background-color, border;
      transition-property: transform, background-color, border;
      transition-duration: 0.18s;
      transition-timing-function: ease;
    }

    .expand:not(.pin) > .slider-knob > .slider-knob-inner {
      -webkit-transform: scale(1.5);
      transform: scale(1.5);
    }

    .ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-color, var(--google-blue-700));
    }

    .pin > .slider-knob > .slider-knob-inner::before {
      content: "";
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -13px;
      width: 26px;
      height: 26px;
      border-radius: 50% 50% 50% 0;

      -webkit-transform: rotate(-45deg) scale(0) translate(0);
      transform: rotate(-45deg) scale(0) translate(0);
    }

    .slider-knob-inner::before,
    .slider-knob-inner::after {
      transition: -webkit-transform .18s ease, background-color .18s ease;
      transition: transform .18s ease, background-color .18s ease;
    }

    .pin.ring > .slider-knob > .slider-knob-inner::before {
      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));
    }

    .pin.expand > .slider-knob > .slider-knob-inner::before {
      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);
      transform: rotate(-45deg) scale(1) translate(17px, -17px);
    }

    .pin > .slider-knob > .slider-knob-inner::after {
      content: attr(value);
      position: absolute;
      top: 0;
      left: 50%;
      margin-left: -16px;
      width: 32px;
      height: 26px;
      text-align: center;
      color: var(--paper-slider-font-color, #fff);
      font-size: 10px;

      -webkit-transform: scale(0) translate(0);
      transform: scale(0) translate(0);
    }

    .pin.expand > .slider-knob > .slider-knob-inner::after {
      -webkit-transform: scale(1) translate(0, -17px);
      transform: scale(1) translate(0, -17px);
    }

    /* paper-input */
    .slider-input {
      width: 50px;
      overflow: hidden;
      --paper-input-container-input: {
        text-align: center;
        @apply --paper-slider-input-container-input;
      };
      @apply --paper-slider-input;
    }

    /* disabled state */
    #sliderContainer.disabled {
      pointer-events: none;
    }

    .disabled > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));
      -webkit-transform: scale3d(0.75, 0.75, 1);
      transform: scale3d(0.75, 0.75, 1);
    }

    .disabled.ring > .slider-knob > .slider-knob-inner {
      background-color: var(--paper-slider-knob-start-color, transparent);
      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));
    }

    paper-ripple {
      color: var(--paper-slider-knob-color, var(--google-blue-700));
    }
  </style>

  <div id="sliderContainer" class\$="[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]">
    <div class="bar-container">
      <paper-progress disabled\$="[[disabled]]" id="sliderBar" aria-hidden="true" min="[[min]]" max="[[max]]" step="[[step]]" value="[[immediateValue]]" secondary-progress="[[secondaryProgress]]" on-down="_bardown" on-up="_resetKnob" on-track="_bartrack" on-tap="_barclick">
      </paper-progress>
    </div>

    <template is="dom-if" if="[[snaps]]">
      <div class="slider-markers">
        <template is="dom-repeat" items="[[markers]]">
          <div class="slider-marker"></div>
        </template>
      </div>
    </template>

    <div id="sliderKnob" class="slider-knob" on-down="_knobdown" on-up="_resetKnob" on-track="_onTrack" on-transitionend="_knobTransitionEnd">
        <div class="slider-knob-inner" value\$="[[immediateValue]]"></div>
    </div>
  </div>

  <template is="dom-if" if="[[editable]]">
    <paper-input id="input" type="number" step="[[step]]" min="[[min]]" max="[[max]]" class="slider-input" disabled\$="[[disabled]]" value="[[immediateValue]]" on-change="_changeValue" on-keydown="_inputKeyDown" no-label-float>
    </paper-input>
  </template>
`;
template.setAttribute('strip-whitespace', '');
/**
Material design:
[Sliders](https://www.google.com/design/spec/components/sliders.html)

`paper-slider` allows user to select a value from a range of values by
moving the slider thumb.  The interactive nature of the slider makes it a
great choice for settings that reflect intensity levels, such as volume,
brightness, or color saturation.

Example:

    <paper-slider></paper-slider>

Use `min` and `max` to specify the slider range.  Default is 0 to 100.

Example:

    <paper-slider min="10" max="200" value="110"></paper-slider>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-slider-container-color` | The background color of the bar | `--paper-grey-400`
`--paper-slider-bar-color` | The background color of the slider | `transparent`
`--paper-slider-active-color` | The progress bar color | `--google-blue-700`
`--paper-slider-secondary-color` | The secondary progress bar color | `--google-blue-300`
`--paper-slider-knob-color` | The knob color | `--google-blue-700`
`--paper-slider-disabled-knob-color` | The disabled knob color | `--paper-grey-400`
`--paper-slider-pin-color` | The pin color | `--google-blue-700`
`--paper-slider-font-color` | The pin's text color | `#fff`
`--paper-slider-markers-color` | The snaps markers color | `#000`
`--paper-slider-disabled-active-color` | The disabled progress bar color | `--paper-grey-400`
`--paper-slider-disabled-secondary-color` | The disabled secondary progress bar color | `--paper-grey-400`
`--paper-slider-knob-start-color` | The fill color of the knob at the far left | `transparent`
`--paper-slider-knob-start-border-color` | The border color of the knob at the far left | `--paper-grey-400`
`--paper-slider-pin-start-color` | The color of the pin at the far left | `--paper-grey-400`
`--paper-slider-height` | Height of the progress bar | `2px`
`--paper-slider-input` | Mixin applied to the input in editable mode | `{}`
`--paper-slider-input-container-input` | Mixin applied to the paper-input-container-input in editable mode | `{}`

@group Paper Elements
@element paper-slider
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_8__["Polymer"])({
  _template: template,
  is: 'paper-slider',
  behaviors: [_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yKeysBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronFormElementBehavior"], _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_7__["PaperInkyFocusBehavior"], _polymer_iron_range_behavior_iron_range_behavior_js__WEBPACK_IMPORTED_MODULE_6__["IronRangeBehavior"]],
  properties: {
    value: {
      type: Number,
      value: 0
    },

    /**
     * If true, the slider thumb snaps to tick marks evenly spaced based
     * on the `step` property value.
     */
    snaps: {
      type: Boolean,
      value: false,
      notify: true
    },

    /**
     * If true, a pin with numeric value label is shown when the slider thumb
     * is pressed. Use for settings for which users need to know the exact
     * value of the setting.
     */
    pin: {
      type: Boolean,
      value: false,
      notify: true
    },

    /**
     * The number that represents the current secondary progress.
     */
    secondaryProgress: {
      type: Number,
      value: 0,
      notify: true,
      observer: '_secondaryProgressChanged'
    },

    /**
     * If true, an input is shown and user can use it to set the slider value.
     */
    editable: {
      type: Boolean,
      value: false
    },

    /**
     * The immediate value of the slider.  This value is updated while the user
     * is dragging the slider.
     */
    immediateValue: {
      type: Number,
      value: 0,
      readOnly: true,
      notify: true
    },

    /**
     * The maximum number of markers
     */
    maxMarkers: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * If true, the knob is expanded
     */
    expand: {
      type: Boolean,
      value: false,
      readOnly: true
    },

    /**
     * If true, a touchmove on the slider bar doesn't drag the slider thunb.
     * Tapping on the slider bar still updates the slider's position
     */
    ignoreBarTouch: {
      type: Boolean,
      value: false
    },

    /**
     * True when the user is dragging the slider.
     */
    dragging: {
      type: Boolean,
      value: false,
      readOnly: true,
      notify: true
    },
    transiting: {
      type: Boolean,
      value: false,
      readOnly: true
    },
    markers: {
      type: Array,
      readOnly: true,
      value: function () {
        return [];
      }
    }
  },
  observers: ['_updateKnob(value, min, max, snaps, step)', '_valueChanged(value)', '_immediateValueChanged(immediateValue)', '_updateMarkers(maxMarkers, min, max, snaps)'],
  hostAttributes: {
    role: 'slider',
    tabindex: 0
  },

  /** @type {!Object} */
  keyBindings: {
    'left': '_leftKey',
    'right': '_rightKey',
    'down pagedown home': '_decrementKey',
    'up pageup end': '_incrementKey'
  },
  ready: function () {
    if (this.ignoreBarTouch) {
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_9__["setTouchAction"])(this.$.sliderBar, 'auto');
    }
  },

  /**
   * Increases value by `step` but not above `max`.
   * @method increment
   */
  increment: function () {
    this.value = this._clampValue(this.value + this.step);
  },

  /**
   * Decreases value by `step` but not below `min`.
   * @method decrement
   */
  decrement: function () {
    this.value = this._clampValue(this.value - this.step);
  },
  _updateKnob: function (value, min, max, snaps, step) {
    this.setAttribute('aria-valuemin', min);
    this.setAttribute('aria-valuemax', max);
    this.setAttribute('aria-valuenow', value);

    this._positionKnob(this._calcRatio(value) * 100);
  },
  _valueChanged: function () {
    this.fire('value-change', {
      composed: true
    });
  },
  _immediateValueChanged: function () {
    if (this.dragging) {
      this.fire('immediate-value-change', {
        composed: true
      });
    } else {
      this.value = this.immediateValue;
    }
  },
  _secondaryProgressChanged: function () {
    this.secondaryProgress = this._clampValue(this.secondaryProgress);
  },
  _expandKnob: function () {
    this._setExpand(true);
  },
  _resetKnob: function () {
    this.cancelDebouncer('expandKnob');

    this._setExpand(false);
  },
  _positionKnob: function (ratio) {
    this._setImmediateValue(this._calcStep(this._calcKnobPosition(ratio)));

    this._setRatio(this._calcRatio(this.immediateValue) * 100);

    this.$.sliderKnob.style.left = this.ratio + '%';

    if (this.dragging) {
      this._knobstartx = this.ratio * this._w / 100;
      this.translate3d(0, 0, 0, this.$.sliderKnob);
    }
  },
  _calcKnobPosition: function (ratio) {
    return (this.max - this.min) * ratio / 100 + this.min;
  },
  _onTrack: function (event) {
    event.stopPropagation();

    switch (event.detail.state) {
      case 'start':
        this._trackStart(event);

        break;

      case 'track':
        this._trackX(event);

        break;

      case 'end':
        this._trackEnd();

        break;
    }
  },
  _trackStart: function (event) {
    this._setTransiting(false);

    this._w = this.$.sliderBar.offsetWidth;
    this._x = this.ratio * this._w / 100;
    this._startx = this._x;
    this._knobstartx = this._startx;
    this._minx = -this._startx;
    this._maxx = this._w - this._startx;
    this.$.sliderKnob.classList.add('dragging');

    this._setDragging(true);
  },
  _trackX: function (event) {
    if (!this.dragging) {
      this._trackStart(event);
    }

    var direction = this._isRTL ? -1 : 1;
    var dx = Math.min(this._maxx, Math.max(this._minx, event.detail.dx * direction));
    this._x = this._startx + dx;

    var immediateValue = this._calcStep(this._calcKnobPosition(this._x / this._w * 100));

    this._setImmediateValue(immediateValue); // update knob's position


    var translateX = this._calcRatio(this.immediateValue) * this._w - this._knobstartx;

    this.translate3d(translateX + 'px', 0, 0, this.$.sliderKnob);
  },
  _trackEnd: function () {
    var s = this.$.sliderKnob.style;
    this.$.sliderKnob.classList.remove('dragging');

    this._setDragging(false);

    this._resetKnob();

    this.value = this.immediateValue;
    s.transform = s.webkitTransform = '';
    this.fire('change', {
      composed: true
    });
  },
  _knobdown: function (event) {
    this._expandKnob(); // cancel selection


    event.preventDefault(); // set the focus manually because we will called prevent default

    this.focus();
  },
  _bartrack: function (event) {
    if (this._allowBarEvent(event)) {
      this._onTrack(event);
    }
  },
  _barclick: function (event) {
    this._w = this.$.sliderBar.offsetWidth;
    var rect = this.$.sliderBar.getBoundingClientRect();
    var ratio = (event.detail.x - rect.left) / this._w * 100;

    if (this._isRTL) {
      ratio = 100 - ratio;
    }

    var prevRatio = this.ratio;

    this._setTransiting(true);

    this._positionKnob(ratio); // if the ratio doesn't change, sliderKnob's animation won't start
    // and `_knobTransitionEnd` won't be called
    // Therefore, we need to manually update the `transiting` state


    if (prevRatio === this.ratio) {
      this._setTransiting(false);
    }

    this.async(function () {
      this.fire('change', {
        composed: true
      });
    }); // cancel selection

    event.preventDefault(); // set the focus manually because we will called prevent default

    this.focus();
  },
  _bardown: function (event) {
    if (this._allowBarEvent(event)) {
      this.debounce('expandKnob', this._expandKnob, 60);

      this._barclick(event);
    }
  },
  _knobTransitionEnd: function (event) {
    if (event.target === this.$.sliderKnob) {
      this._setTransiting(false);
    }
  },
  _updateMarkers: function (maxMarkers, min, max, snaps) {
    if (!snaps) {
      this._setMarkers([]);
    }

    var steps = Math.round((max - min) / this.step);

    if (steps > maxMarkers) {
      steps = maxMarkers;
    }

    if (steps < 0 || !isFinite(steps)) {
      steps = 0;
    }

    this._setMarkers(new Array(steps));
  },
  _mergeClasses: function (classes) {
    return Object.keys(classes).filter(function (className) {
      return classes[className];
    }).join(' ');
  },
  _getClassNames: function () {
    return this._mergeClasses({
      disabled: this.disabled,
      pin: this.pin,
      snaps: this.snaps,
      ring: this.immediateValue <= this.min,
      expand: this.expand,
      dragging: this.dragging,
      transiting: this.transiting,
      editable: this.editable
    });
  },
  _allowBarEvent: function (event) {
    return !this.ignoreBarTouch || event.detail.sourceEvent instanceof MouseEvent;
  },

  get _isRTL() {
    if (this.__isRTL === undefined) {
      this.__isRTL = window.getComputedStyle(this)['direction'] === 'rtl';
    }

    return this.__isRTL;
  },

  _leftKey: function (event) {
    if (this._isRTL) this._incrementKey(event);else this._decrementKey(event);
  },
  _rightKey: function (event) {
    if (this._isRTL) this._decrementKey(event);else this._incrementKey(event);
  },
  _incrementKey: function (event) {
    if (!this.disabled) {
      if (event.detail.key === 'end') {
        this.value = this.max;
      } else {
        this.increment();
      }

      this.fire('change');
      event.preventDefault();
    }
  },
  _decrementKey: function (event) {
    if (!this.disabled) {
      if (event.detail.key === 'home') {
        this.value = this.min;
      } else {
        this.decrement();
      }

      this.fire('change');
      event.preventDefault();
    }
  },
  _changeValue: function (event) {
    this.value = event.target.value;
    this.fire('change', {
      composed: true
    });
  },
  _inputKeyDown: function (event) {
    event.stopPropagation();
  },
  // create the element ripple inside the `sliderKnob`
  _createRipple: function () {
    this._rippleContainer = this.$.sliderKnob;
    return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_7__["PaperInkyFocusBehaviorImpl"]._createRipple.call(this);
  },
  // Hide the ripple when user is not interacting with keyboard.
  // This behavior is different from other ripple-y controls, but is
  // according to spec:
  // https://www.google.com/design/spec/components/sliders.html
  _focusedChanged: function (receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }

    if (this.hasRipple()) {
      // note, ripple must be un-hidden prior to setting `holdDown`
      if (receivedFocusFromKeyboard) {
        this._ripple.style.display = '';
      } else {
        this._ripple.style.display = 'none';
      }

      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  }
  /**
   * Fired when the slider's value changes.
   *
   * @event value-change
   */

  /**
   * Fired when the slider's immediateValue changes. Only occurs while the
   * user is dragging.
   *
   * To detect changes to immediateValue that happen for any input (i.e.
   * dragging, tapping, clicking, etc.) listen for immediate-value-changed
   * instead.
   *
   * @event immediate-value-change
   */

  /**
   * Fired when the slider's value changes due to user interaction.
   *
   * Changes to the slider's value due to changes in an underlying
   * bound variable will not trigger this event.
   *
   * @event change
   */

});

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-wrapper.js":
/*!***********************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-wrapper.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function addMethods(worker, methods) {
  var c = 0;
  var callbacks = {};
  worker.addEventListener('message', function (e) {
    var d = e.data;

    if (d.type !== 'RPC') {
      return;
    }

    if (d.id) {
      var f = callbacks[d.id];

      if (f) {
        delete callbacks[d.id];

        if (d.error) {
          f[1](Object.assign(Error(d.error.message), d.error));
        } else {
          f[0](d.result);
        }
      }
    } else {
      var evt = document.createEvent('Event');
      evt.initEvent(d.method, false, false);
      evt.data = d.params;
      worker.dispatchEvent(evt);
    }
  });
  methods.forEach(function (method) {
    worker[method] = function () {
      var params = [],
          len = arguments.length;

      while (len--) params[len] = arguments[len];

      return new Promise(function (a, b) {
        var id = ++c;
        callbacks[id] = [a, b];
        worker.postMessage({
          type: 'RPC',
          id: id,
          method: method,
          params: params
        });
      });
    };
  });
}

module.exports = addMethods;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+bW9yZS1pbmZvLWRpYWxvZ35wYW5lbC1sb3ZlbGFjZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1yYW5nZS1iZWhhdmlvci9pcm9uLXJhbmdlLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1jaGVja2JveC9wYXBlci1jaGVja2JveC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcHJvZ3Jlc3MvcGFwZXItcHJvZ3Jlc3MuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNsaWRlci9wYXBlci1zbGlkZXIuanMiLCJ3ZWJwYWNrOi8vLy4uL3NyYy9ycGMtd3JhcHBlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5LCB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhbHNvXG4gKiBgcmVxdWlyZWRgLiBFbGVtZW50IGluc3RhbmNlcyBpbXBsZW1lbnRpbmcgdGhpcyBiZWhhdmlvciB3aWxsIGFsc28gYmVcbiAqIHJlZ2lzdGVyZWQgZm9yIHVzZSBpbiBhbiBgaXJvbi1mb3JtYCBlbGVtZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc3RhdGUsIGB0cnVlYCBpcyBjaGVja2VkIGFuZCBgZmFsc2VgIGlzIHVuY2hlY2tlZC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfY2hlY2tlZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gdG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIHdpdGggZWFjaCB0YXAgb3IgcHJlc3NcbiAgICAgKiBvZiB0aGUgc3BhY2ViYXIuXG4gICAgICovXG4gICAgdG9nZ2xlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyogT3ZlcnJpZGVuIGZyb20gSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgKi9cbiAgICB2YWx1ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvbicsIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCd9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19yZXF1aXJlZENoYW5nZWQocmVxdWlyZWQpJ10sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCBieSBgaXJvbi1mb3JtYCB0byBoYW5kbGUgdGhlIGNhc2UgdGhhdCBhbiBlbGVtZW50IHdpdGggdGhpcyBiZWhhdmlvclxuICAgIC8vIGRvZXNuJ3QgaGF2ZSBhIHJvbGUgb2YgJ2NoZWNrYm94JyBvciAncmFkaW8nLCBidXQgc2hvdWxkIHN0aWxsIG9ubHkgYmVcbiAgICAvLyBpbmNsdWRlZCB3aGVuIHRoZSBmb3JtIGlzIHNlcmlhbGl6ZWQgaWYgYHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZWAuXG4gICAgdGhpcy5faGFzSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBub3QgY2hlY2tlZCwgYW5kIHRydWVcbiAgICogb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlIG9yIGlmIGBjaGVja2VkYCBpcyB0cnVlLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmNoZWNrZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYXJpYS1yZXF1aXJlZCBsYWJlbCB3aGVuIGByZXF1aXJlZGAgaXMgY2hhbmdlZC5cbiAgICovXG4gIF9yZXF1aXJlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaXJlIGBpcm9uLWNoYW5nZWRgIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5maXJlKCdpcm9uLWNoYW5nZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldCB2YWx1ZSB0byAnb24nIGlmIGl0IGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAgICovXG4gIF92YWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuLyoqXG4gKiBgaXJvbi1yYW5nZS1iZWhhdmlvcmAgcHJvdmlkZXMgdGhlIGJlaGF2aW9yIGZvciBzb21ldGhpbmcgd2l0aCBhIG1pbmltdW0gdG9cbiAqIG1heGltdW0gcmFuZ2UuXG4gKlxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uUmFuZ2VCZWhhdmlvciA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICAgKi9cbiAgICB2YWx1ZToge3R5cGU6IE51bWJlciwgdmFsdWU6IDAsIG5vdGlmeTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgdGhhdCBpbmRpY2F0ZXMgdGhlIG1pbmltdW0gdmFsdWUgb2YgdGhlIHJhbmdlLlxuICAgICAqL1xuICAgIG1pbjoge3R5cGU6IE51bWJlciwgdmFsdWU6IDAsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIHRoYXQgaW5kaWNhdGVzIHRoZSBtYXhpbXVtIHZhbHVlIG9mIHRoZSByYW5nZS5cbiAgICAgKi9cbiAgICBtYXg6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxMDAsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBTcGVjaWZpZXMgdGhlIHZhbHVlIGdyYW51bGFyaXR5IG9mIHRoZSByYW5nZSdzIHZhbHVlLlxuICAgICAqL1xuICAgIHN0ZXA6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgcmF0aW8gb2YgdGhlIHZhbHVlLlxuICAgICAqL1xuICAgIHJhdGlvOiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMCwgcmVhZE9ubHk6IHRydWUsIG5vdGlmeTogdHJ1ZX0sXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ191cGRhdGUodmFsdWUsIG1pbiwgbWF4LCBzdGVwKSddLFxuXG4gIF9jYWxjUmF0aW86IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgcmV0dXJuICh0aGlzLl9jbGFtcFZhbHVlKHZhbHVlKSAtIHRoaXMubWluKSAvICh0aGlzLm1heCAtIHRoaXMubWluKTtcbiAgfSxcblxuICBfY2xhbXBWYWx1ZTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gTWF0aC5taW4odGhpcy5tYXgsIE1hdGgubWF4KHRoaXMubWluLCB0aGlzLl9jYWxjU3RlcCh2YWx1ZSkpKTtcbiAgfSxcblxuICBfY2FsY1N0ZXA6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gcG9seW1lci9pc3N1ZXMvMjQ5M1xuICAgIHZhbHVlID0gcGFyc2VGbG9hdCh2YWx1ZSk7XG5cbiAgICBpZiAoIXRoaXMuc3RlcCkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIHZhciBudW1TdGVwcyA9IE1hdGgucm91bmQoKHZhbHVlIC0gdGhpcy5taW4pIC8gdGhpcy5zdGVwKTtcbiAgICBpZiAodGhpcy5zdGVwIDwgMSkge1xuICAgICAgLyoqXG4gICAgICAgKiBGb3Igc21hbGwgdmFsdWVzIG9mIHRoaXMuc3RlcCwgaWYgd2UgY2FsY3VsYXRlIHRoZSBzdGVwIHVzaW5nXG4gICAgICAgKiBgTWF0aC5yb3VuZCh2YWx1ZSAvIHN0ZXApICogc3RlcGAgd2UgbWF5IGhpdCBhIHByZWNpc2lvbiBwb2ludCBpc3N1ZVxuICAgICAgICogZWcuIDAuMSAqIDAuMiA9ICAwLjAyMDAwMDAwMDAwMDAwMDAwNFxuICAgICAgICogaHR0cDovL2RvY3Mub3JhY2xlLmNvbS9jZC9FMTk5NTctMDEvODA2LTM1NjgvbmNnX2dvbGRiZXJnLmh0bWxcbiAgICAgICAqXG4gICAgICAgKiBhcyBhIHdvcmsgYXJvdW5kIHdlIGNhbiBkaXZpZGUgYnkgdGhlIHJlY2lwcm9jYWwgb2YgYHN0ZXBgXG4gICAgICAgKi9cbiAgICAgIHJldHVybiBudW1TdGVwcyAvICgxIC8gdGhpcy5zdGVwKSArIHRoaXMubWluO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbnVtU3RlcHMgKiB0aGlzLnN0ZXAgKyB0aGlzLm1pbjtcbiAgICB9XG4gIH0sXG5cbiAgX3ZhbGlkYXRlVmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciB2ID0gdGhpcy5fY2xhbXBWYWx1ZSh0aGlzLnZhbHVlKTtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5vbGRWYWx1ZSA9IGlzTmFOKHYpID8gdGhpcy5vbGRWYWx1ZSA6IHY7XG4gICAgcmV0dXJuIHRoaXMudmFsdWUgIT09IHY7XG4gIH0sXG5cbiAgX3VwZGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdmFsaWRhdGVWYWx1ZSgpO1xuICAgIHRoaXMuX3NldFJhdGlvKHRoaXMuX2NhbGNSYXRpbyh0aGlzLnZhbHVlKSAqIDEwMCk7XG4gIH1cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciwgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci9pcm9uLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyc7XG5cbmltcG9ydCB7UGFwZXJJbmt5Rm9jdXNCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1pbmt5LWZvY3VzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UGFwZXJSaXBwbGVCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1yaXBwbGUtYmVoYXZpb3IuanMnO1xuXG4vKipcbiAqIFVzZSBgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYSBjdXN0b20gZWxlbWVudCB0aGF0IGhhcyBhXG4gKiBgY2hlY2tlZGAgcHJvcGVydHkgc2ltaWxhciB0byBgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JgIGFuZCBpcyBjb21wYXRpYmxlXG4gKiB3aXRoIGhhdmluZyBhIHJpcHBsZSBlZmZlY3QuXG4gKiBAcG9seW1lckJlaGF2aW9yIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbCA9IHtcbiAgLyoqXG4gICAqIFN5bmNocm9uaXplcyB0aGUgZWxlbWVudCdzIGNoZWNrZWQgc3RhdGUgd2l0aCBpdHMgcmlwcGxlIGVmZmVjdC5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsLl9jaGVja2VkQ2hhbmdlZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICBpZiAodGhpcy5jaGVja2VkKSB7XG4gICAgICAgIHRoaXMuX3JpcHBsZS5zZXRBdHRyaWJ1dGUoJ2NoZWNrZWQnLCAnJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9yaXBwbGUucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdGhlIGVsZW1lbnQncyBgYWN0aXZlYCBhbmQgYGNoZWNrZWRgIHN0YXRlLlxuICAgKi9cbiAgX2J1dHRvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgUGFwZXJSaXBwbGVCZWhhdmlvci5fYnV0dG9uU3RhdGVDaGFuZ2VkLmNhbGwodGhpcyk7XG4gICAgaWYgKHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5jaGVja2VkID0gdGhpcy5hY3RpdmU7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvciA9IFtcbiAgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcixcbiAgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IsXG4gIFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGxcbl07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHRcblRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZSBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dFxuQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXMgcGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc29cbnN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnQgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLWNoZWNrZWQtZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHthZnRlck5leHRSZW5kZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3JlbmRlci1zdGF0dXMuanMnO1xuXG5jb25zdCB0ZW1wbGF0ZSA9IGh0bWxgPHN0eWxlPlxuICA6aG9zdCB7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplOiB2YXIoLS1wYXBlci1jaGVja2JveC1zaXplLCAxOHB4KTtcbiAgICAvKiAtMXB4IGlzIGEgc2VudGluZWwgZm9yIHRoZSBkZWZhdWx0IGFuZCBpcyByZXBsYWNlZCBpbiBcXGBhdHRhY2hlZFxcYC4gKi9cbiAgICAtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemU6IHZhcigtLXBhcGVyLWNoZWNrYm94LWluay1zaXplLCAtMXB4KTtcbiAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgIGxpbmUtaGVpZ2h0OiAwO1xuICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIH1cblxuICA6aG9zdChbaGlkZGVuXSkge1xuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgfVxuXG4gIDpob3N0KDpmb2N1cykge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAuaGlkZGVuIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgI2NoZWNrYm94Q29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1zaXplKTtcbiAgICBtaW4td2lkdGg6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSk7XG4gICAgbWFyZ2luOiB2YXIoLS1wYXBlci1jaGVja2JveC1tYXJnaW4sIGluaXRpYWwpO1xuICAgIHZlcnRpY2FsLWFsaWduOiB2YXIoLS1wYXBlci1jaGVja2JveC12ZXJ0aWNhbC1hbGlnbiwgbWlkZGxlKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtYmFja2dyb3VuZC1jb2xvciwgdHJhbnNwYXJlbnQpO1xuICB9XG5cbiAgI2luayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgLyogQ2VudGVyIHRoZSByaXBwbGUgaW4gdGhlIGNoZWNrYm94IGJ5IG5lZ2F0aXZlIG9mZnNldHRpbmcgaXQgYnlcbiAgICAgKiAoaW5rV2lkdGggLSByaXBwbGVXaWR0aCkgLyAyICovXG4gICAgdG9wOiBjYWxjKDBweCAtICh2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKSAtIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpIC8gMik7XG4gICAgbGVmdDogY2FsYygwcHggLSAodmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSkgLSB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpKSAvIDIpO1xuICAgIHdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtaW5rLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtaW5rLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBvcGFjaXR5OiAwLjY7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIH1cblxuICAjaW5rOmRpcihydGwpIHtcbiAgICByaWdodDogY2FsYygwcHggLSAodmFyKC0tY2FsY3VsYXRlZC1wYXBlci1jaGVja2JveC1pbmstc2l6ZSkgLSB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUpKSAvIDIpO1xuICAgIGxlZnQ6IGF1dG87XG4gIH1cblxuICAjaW5rW2NoZWNrZWRdIHtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2tlZC1pbmstY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgfVxuXG4gICNjaGVja2JveCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGJvcmRlcjogc29saWQgMnB4O1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDE0MG1zLCBib3JkZXItY29sb3IgMTQwbXM7XG4gICAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAxNDBtcywgYm9yZGVyLWNvbG9yIDE0MG1zO1xuXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1jaGVja2JveC1hbmltYXRpb24tZHVyYXRpb24sIDE0MG1zKTtcbiAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1jaGVja2JveC1hbmltYXRpb24tZHVyYXRpb24sIDE0MG1zKTtcbiAgfVxuXG4gIC8qIGNoZWNrYm94IGNoZWNrZWQgYW5pbWF0aW9ucyAqL1xuICAjY2hlY2tib3guY2hlY2tlZCAjY2hlY2ttYXJrIHtcbiAgICAtd2Via2l0LWFuaW1hdGlvbjogY2hlY2ttYXJrLWV4cGFuZCAxNDBtcyBlYXNlLW91dCBmb3J3YXJkcztcbiAgICBhbmltYXRpb246IGNoZWNrbWFyay1leHBhbmQgMTQwbXMgZWFzZS1vdXQgZm9yd2FyZHM7XG5cbiAgICAtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItY2hlY2tib3gtYW5pbWF0aW9uLWR1cmF0aW9uLCAxNDBtcyk7XG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1jaGVja2JveC1hbmltYXRpb24tZHVyYXRpb24sIDE0MG1zKTtcbiAgfVxuXG4gIEAtd2Via2l0LWtleWZyYW1lcyBjaGVja21hcmstZXhwYW5kIHtcbiAgICAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMSwgMSkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gIH1cblxuICBAa2V5ZnJhbWVzIGNoZWNrbWFyay1leHBhbmQge1xuICAgIDAlIHtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCwgMCkgcm90YXRlKDQ1ZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEsIDEpIHJvdGF0ZSg0NWRlZyk7XG4gICAgfVxuICB9XG5cbiAgI2NoZWNrYm94LmNoZWNrZWQge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgfVxuXG4gICNjaGVja21hcmsge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMzYlO1xuICAgIGhlaWdodDogNzAlO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXRvcDogbm9uZTtcbiAgICBib3JkZXItbGVmdDogbm9uZTtcbiAgICBib3JkZXItcmlnaHQtd2lkdGg6IGNhbGMoMi8xNSAqIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpO1xuICAgIGJvcmRlci1ib3R0b20td2lkdGg6IGNhbGMoMi8xNSAqIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItY2hlY2tib3gtc2l6ZSkpO1xuICAgIGJvcmRlci1jb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtY2hlY2ttYXJrLWNvbG9yLCB3aGl0ZSk7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiA5NyUgODYlO1xuICAgIHRyYW5zZm9ybS1vcmlnaW46IDk3JSA4NiU7XG4gICAgYm94LXNpemluZzogY29udGVudC1ib3g7IC8qIHByb3RlY3QgYWdhaW5zdCBwYWdlLWxldmVsIGJveC1zaXppbmcgKi9cbiAgfVxuXG4gICNjaGVja21hcms6ZGlyKHJ0bCkge1xuICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogNTAlIDE0JTtcbiAgICB0cmFuc2Zvcm0tb3JpZ2luOiA1MCUgMTQlO1xuICB9XG5cbiAgLyogbGFiZWwgKi9cbiAgI2NoZWNrYm94TGFiZWwge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbiAgICBwYWRkaW5nLWxlZnQ6IHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLXNwYWNpbmcsIDhweCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgQGFwcGx5IC0tcGFwZXItY2hlY2tib3gtbGFiZWw7XG4gIH1cblxuICA6aG9zdChbY2hlY2tlZF0pICNjaGVja2JveExhYmVsIHtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY2hlY2tlZC1jb2xvciwgdmFyKC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpKTtcbiAgICBAYXBwbHkgLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkO1xuICB9XG5cbiAgI2NoZWNrYm94TGFiZWw6ZGlyKHJ0bCkge1xuICAgIHBhZGRpbmctcmlnaHQ6IHZhcigtLXBhcGVyLWNoZWNrYm94LWxhYmVsLXNwYWNpbmcsIDhweCk7XG4gICAgcGFkZGluZy1sZWZ0OiAwO1xuICB9XG5cbiAgI2NoZWNrYm94TGFiZWxbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGRpc2FibGVkIHN0YXRlICovXG5cbiAgOmhvc3QoW2Rpc2FibGVkXSkgI2NoZWNrYm94IHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICB9XG5cbiAgOmhvc3QoW2Rpc2FibGVkXVtjaGVja2VkXSkgI2NoZWNrYm94IHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF0pICNjaGVja2JveExhYmVsICB7XG4gICAgb3BhY2l0eTogMC42NTtcbiAgfVxuXG4gIC8qIGludmFsaWQgc3RhdGUgKi9cbiAgI2NoZWNrYm94LmludmFsaWQ6bm90KC5jaGVja2VkKSB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1jaGVja2JveC1lcnJvci1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBpZD1cImNoZWNrYm94Q29udGFpbmVyXCI+XG4gIDxkaXYgaWQ9XCJjaGVja2JveFwiIGNsYXNzJD1cIltbX2NvbXB1dGVDaGVja2JveENsYXNzKGNoZWNrZWQsIGludmFsaWQpXV1cIj5cbiAgICA8ZGl2IGlkPVwiY2hlY2ttYXJrXCIgY2xhc3MkPVwiW1tfY29tcHV0ZUNoZWNrbWFya0NsYXNzKGNoZWNrZWQpXV1cIj48L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cblxuPGRpdiBpZD1cImNoZWNrYm94TGFiZWxcIj48c2xvdD48L3Nsb3Q+PC9kaXY+YDtcbnRlbXBsYXRlLnNldEF0dHJpYnV0ZSgnc3RyaXAtd2hpdGVzcGFjZScsICcnKTtcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bQ2hlY2tib3hdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzZWxlY3Rpb24tY29udHJvbHMtY2hlY2tib3gpXG5cbmBwYXBlci1jaGVja2JveGAgaXMgYSBidXR0b24gdGhhdCBjYW4gYmUgZWl0aGVyIGNoZWNrZWQgb3IgdW5jaGVja2VkLiBVc2VyIGNhblxudGFwIHRoZSBjaGVja2JveCB0byBjaGVjayBvciB1bmNoZWNrIGl0LiBVc3VhbGx5IHlvdSB1c2UgY2hlY2tib3hlcyB0byBhbGxvd1xudXNlciB0byBzZWxlY3QgbXVsdGlwbGUgb3B0aW9ucyBmcm9tIGEgc2V0LiBJZiB5b3UgaGF2ZSBhIHNpbmdsZSBPTi9PRkYgb3B0aW9uLFxuYXZvaWQgdXNpbmcgYSBzaW5nbGUgY2hlY2tib3ggYW5kIHVzZSBgcGFwZXItdG9nZ2xlLWJ1dHRvbmAgaW5zdGVhZC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1jaGVja2JveD5sYWJlbDwvcGFwZXItY2hlY2tib3g+XG5cbiAgICA8cGFwZXItY2hlY2tib3ggY2hlY2tlZD4gbGFiZWw8L3BhcGVyLWNoZWNrYm94PlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItY2hlY2tib3gtdW5jaGVja2VkLWJhY2tncm91bmQtY29sb3JgIHwgQ2hlY2tib3ggYmFja2dyb3VuZCBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGB0cmFuc3BhcmVudGBcbmAtLXBhcGVyLWNoZWNrYm94LXVuY2hlY2tlZC1jb2xvcmAgfCBDaGVja2JveCBib3JkZXIgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC11bmNoZWNrZWQtaW5rLWNvbG9yYCB8IFNlbGVjdGVkL2ZvY3VzIHJpcHBsZSBjb2xvciB3aGVuIHRoZSBpbnB1dCBpcyBub3QgY2hlY2tlZCB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWNoZWNrZWQtY29sb3JgIHwgQ2hlY2tib3ggY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1jaGVja2VkLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1jaGVja21hcmstY29sb3JgIHwgQ2hlY2ttYXJrIGNvbG9yIHwgYHdoaXRlYFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY29sb3JgIHwgTGFiZWwgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1sYWJlbC1jaGVja2VkLWNvbG9yYCB8IExhYmVsIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wYXBlci1jaGVja2JveC1sYWJlbC1jb2xvcmBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsLXNwYWNpbmdgIHwgU3BhY2luZyBiZXR3ZWVuIHRoZSBsYWJlbCBhbmQgdGhlIGNoZWNrYm94IHwgYDhweGBcbmAtLXBhcGVyLWNoZWNrYm94LWxhYmVsYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItY2hlY2tib3gtbGFiZWwtY2hlY2tlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBsYWJlbCB3aGVuIHRoZSBpbnB1dCBpcyBjaGVja2VkIHwgYHt9YFxuYC0tcGFwZXItY2hlY2tib3gtZXJyb3ItY29sb3JgIHwgQ2hlY2tib3ggY29sb3Igd2hlbiBpbnZhbGlkIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1jaGVja2JveC1zaXplYCB8IFNpemUgb2YgdGhlIGNoZWNrYm94IHwgYDE4cHhgXG5gLS1wYXBlci1jaGVja2JveC1pbmstc2l6ZWAgfCBTaXplIG9mIHRoZSByaXBwbGUgfCBgNDhweGBcbmAtLXBhcGVyLWNoZWNrYm94LW1hcmdpbmAgfCBNYXJnaW4gYXJvdW5kIHRoZSBjaGVja2JveCBjb250YWluZXIgfCBgaW5pdGlhbGBcbmAtLXBhcGVyLWNoZWNrYm94LXZlcnRpY2FsLWFsaWduYCB8IFZlcnRpY2FsIGFsaWdubWVudCBvZiB0aGUgY2hlY2tib3ggY29udGFpbmVyIHwgYG1pZGRsZWBcblxuVGhpcyBlbGVtZW50IGFwcGxpZXMgdGhlIG1peGluIGAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2VgIGJ1dCBkb2VzIG5vdCBpbXBvcnRcbmBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC4gSW4gb3JkZXIgdG8gYXBwbHkgdGhlIGBSb2JvdG9gIGZvbnQgdG8gdGhpc1xuZWxlbWVudCwgbWFrZSBzdXJlIHlvdSd2ZSBpbXBvcnRlZCBgcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuXG5cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItY2hlY2tib3gnLFxuXG4gIGJlaGF2aW9yczogW1BhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcl0sXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2NoZWNrYm94JywgJ2FyaWEtY2hlY2tlZCc6IGZhbHNlLCB0YWJpbmRleDogMH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBpcm9uLWNoYW5nZVxuICAgICAqL1xuICAgIGFyaWFBY3RpdmVBdHRyaWJ1dGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnYXJpYS1jaGVja2VkJ31cbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gV2FpdCB1bnRpbCBzdHlsZXMgaGF2ZSByZXNvbHZlZCB0byBjaGVjayBmb3IgdGhlIGRlZmF1bHQgc2VudGluZWwuXG4gICAgLy8gU2VlIHBvbHltZXIjNDAwOSBmb3IgbW9yZSBkZXRhaWxzLlxuICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCBmdW5jdGlvbigpIHtcbiAgICAgIHZhciBpbmtTaXplID1cbiAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LWluay1zaXplJylcbiAgICAgICAgICAgICAgLnRyaW0oKTtcbiAgICAgIC8vIElmIHVuc2V0LCBjb21wdXRlIGFuZCBzZXQgdGhlIGRlZmF1bHQgYC0tcGFwZXItY2hlY2tib3gtaW5rLXNpemVgLlxuICAgICAgaWYgKGlua1NpemUgPT09ICctMXB4Jykge1xuICAgICAgICB2YXIgY2hlY2tib3hTaXplVGV4dCA9XG4gICAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLWNoZWNrYm94LXNpemUnKVxuICAgICAgICAgICAgICAgIC50cmltKCk7XG5cbiAgICAgICAgdmFyIHVuaXRzID0gJ3B4JztcbiAgICAgICAgdmFyIHVuaXRzTWF0Y2hlcyA9IGNoZWNrYm94U2l6ZVRleHQubWF0Y2goL1tBLVphLXpdKyQvKTtcbiAgICAgICAgaWYgKHVuaXRzTWF0Y2hlcyAhPT0gbnVsbCkge1xuICAgICAgICAgIHVuaXRzID0gdW5pdHNNYXRjaGVzWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNoZWNrYm94U2l6ZSA9IHBhcnNlRmxvYXQoY2hlY2tib3hTaXplVGV4dCk7XG4gICAgICAgIHZhciBkZWZhdWx0SW5rU2l6ZSA9ICg4IC8gMykgKiBjaGVja2JveFNpemU7XG5cbiAgICAgICAgaWYgKHVuaXRzID09PSAncHgnKSB7XG4gICAgICAgICAgZGVmYXVsdElua1NpemUgPSBNYXRoLmZsb29yKGRlZmF1bHRJbmtTaXplKTtcblxuICAgICAgICAgIC8vIFRoZSBjaGVja2JveCBhbmQgcmlwcGxlIG5lZWQgdG8gaGF2ZSB0aGUgc2FtZSBwYXJpdHkgc28gdGhhdCB0aGVpclxuICAgICAgICAgIC8vIGNlbnRlcnMgYWxpZ24uXG4gICAgICAgICAgaWYgKGRlZmF1bHRJbmtTaXplICUgMiAhPT0gY2hlY2tib3hTaXplICUgMikge1xuICAgICAgICAgICAgZGVmYXVsdElua1NpemUrKztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgICAgJy0tcGFwZXItY2hlY2tib3gtaW5rLXNpemUnOiBkZWZhdWx0SW5rU2l6ZSArIHVuaXRzLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcblxuICBfY29tcHV0ZUNoZWNrYm94Q2xhc3M6IGZ1bmN0aW9uKGNoZWNrZWQsIGludmFsaWQpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gJyc7XG4gICAgaWYgKGNoZWNrZWQpIHtcbiAgICAgIGNsYXNzTmFtZSArPSAnY2hlY2tlZCAnO1xuICAgIH1cbiAgICBpZiAoaW52YWxpZCkge1xuICAgICAgY2xhc3NOYW1lICs9ICdpbnZhbGlkJztcbiAgICB9XG4gICAgcmV0dXJuIGNsYXNzTmFtZTtcbiAgfSxcblxuICBfY29tcHV0ZUNoZWNrbWFya0NsYXNzOiBmdW5jdGlvbihjaGVja2VkKSB7XG4gICAgcmV0dXJuIGNoZWNrZWQgPyAnJyA6ICdoaWRkZW4nO1xuICB9LFxuXG4gIC8vIGNyZWF0ZSByaXBwbGUgaW5zaWRlIHRoZSBjaGVja2JveENvbnRhaW5lclxuICBfY3JlYXRlUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLiQuY2hlY2tib3hDb250YWluZXI7XG4gICAgcmV0dXJuIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsLl9jcmVhdGVSaXBwbGUuY2FsbCh0aGlzKTtcbiAgfVxuXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2NvbG9yLmpzJztcblxuaW1wb3J0IHtJcm9uUmFuZ2VCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1yYW5nZS1iZWhhdmlvci9pcm9uLXJhbmdlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5UaGUgcHJvZ3Jlc3MgYmFycyBhcmUgZm9yIHNpdHVhdGlvbnMgd2hlcmUgdGhlIHBlcmNlbnRhZ2UgY29tcGxldGVkIGNhbiBiZVxuZGV0ZXJtaW5lZC4gVGhleSBnaXZlIHVzZXJzIGEgcXVpY2sgc2Vuc2Ugb2YgaG93IG11Y2ggbG9uZ2VyIGFuIG9wZXJhdGlvblxud2lsbCB0YWtlLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXByb2dyZXNzIHZhbHVlPVwiMTBcIj48L3BhcGVyLXByb2dyZXNzPlxuXG5UaGVyZSBpcyBhbHNvIGEgc2Vjb25kYXJ5IHByb2dyZXNzIHdoaWNoIGlzIHVzZWZ1bCBmb3IgZGlzcGxheWluZyBpbnRlcm1lZGlhdGVcbnByb2dyZXNzLCBzdWNoIGFzIHRoZSBidWZmZXIgbGV2ZWwgZHVyaW5nIGEgc3RyZWFtaW5nIHBsYXliYWNrIHByb2dyZXNzIGJhci5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1wcm9ncmVzcyB2YWx1ZT1cIjEwXCIgc2Vjb25kYXJ5LXByb2dyZXNzPVwiMzBcIj48L3BhcGVyLXByb2dyZXNzPlxuXG4jIyMgU3R5bGluZyBwcm9ncmVzcyBiYXI6XG5cblRvIGNoYW5nZSB0aGUgYWN0aXZlIHByb2dyZXNzIGJhciBjb2xvcjpcblxuICAgIHBhcGVyLXByb2dyZXNzIHtcbiAgICAgICAtLXBhcGVyLXByb2dyZXNzLWFjdGl2ZS1jb2xvcjogI2U5MWU2MztcbiAgICB9XG5cblRvIGNoYW5nZSB0aGUgc2Vjb25kYXJ5IHByb2dyZXNzIGJhciBjb2xvcjpcblxuICAgIHBhcGVyLXByb2dyZXNzIHtcbiAgICAgIC0tcGFwZXItcHJvZ3Jlc3Mtc2Vjb25kYXJ5LWNvbG9yOiAjZjhiYmQwO1xuICAgIH1cblxuVG8gY2hhbmdlIHRoZSBwcm9ncmVzcyBiYXIgYmFja2dyb3VuZCBjb2xvcjpcblxuICAgIHBhcGVyLXByb2dyZXNzIHtcbiAgICAgIC0tcGFwZXItcHJvZ3Jlc3MtY29udGFpbmVyLWNvbG9yOiAjNjRmZmRhO1xuICAgIH1cblxuQWRkIHRoZSBjbGFzcyBgdHJhbnNpdGluZ2AgdG8gYSBwYXBlci1wcm9ncmVzcyB0byBhbmltYXRlIHRoZSBwcm9ncmVzcyBiYXIgd2hlblxudGhlIHZhbHVlIGNoYW5nZWQuIFlvdSBjYW4gYWxzbyBjdXN0b21pemUgdGhlIHRyYW5zaXRpb246XG5cbiAgICBwYXBlci1wcm9ncmVzcyB7XG4gICAgICAtLXBhcGVyLXByb2dyZXNzLXRyYW5zaXRpb24tZHVyYXRpb246IDAuMDhzO1xuICAgICAgLS1wYXBlci1wcm9ncmVzcy10cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZTtcbiAgICAgIC0tcGFwZXItcHJvZ3Jlc3MtdHJhbnNpdGlvbi1kZWxheTogMHM7XG4gICAgfVxuXG5UbyBjaGFuZ2UgdGhlIGR1cmF0aW9uIG9mIHRoZSBpbmRldGVybWluYXRlIGN5Y2xlOlxuXG4gICAgcGFwZXItcHJvZ3Jlc3Mge1xuICAgICAgLS1wYXBlci1wcm9ncmVzcy1pbmRldGVybWluYXRlLWN5Y2xlLWR1cmF0aW9uOiAycztcbiAgICB9XG5cblRoZSBmb2xsb3dpbmcgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLVxuYC0tcGFwZXItcHJvZ3Jlc3MtY29udGFpbmVyYCB8IE1peGluIGFwcGxpZWQgdG8gY29udGFpbmVyIHwgYHt9YFxuYC0tcGFwZXItcHJvZ3Jlc3MtdHJhbnNpdGlvbi1kdXJhdGlvbmAgfCBEdXJhdGlvbiBvZiB0aGUgdHJhbnNpdGlvbiB8IGAwLjA4c2BcbmAtLXBhcGVyLXByb2dyZXNzLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uYCB8IFRoZSB0aW1pbmcgZnVuY3Rpb24gZm9yIHRoZSB0cmFuc2l0aW9uIHwgYGVhc2VgXG5gLS1wYXBlci1wcm9ncmVzcy10cmFuc2l0aW9uLWRlbGF5YCB8IGRlbGF5IGZvciB0aGUgdHJhbnNpdGlvbiB8IGAwc2BcbmAtLXBhcGVyLXByb2dyZXNzLWNvbnRhaW5lci1jb2xvcmAgfCBDb2xvciBvZiB0aGUgY29udGFpbmVyIHwgYC0tZ29vZ2xlLWdyZXktMzAwYFxuYC0tcGFwZXItcHJvZ3Jlc3MtYWN0aXZlLWNvbG9yYCB8IFRoZSBjb2xvciBvZiB0aGUgYWN0aXZlIGJhciB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1wcm9ncmVzcy1zZWNvbmRhcnktY29sb3JgIHwgVGhlIGNvbG9yIG9mIHRoZSBzZWNvbmRhcnkgYmFyIHwgYC0tZ29vZ2xlLWdyZWVuLTEwMGBcbmAtLXBhcGVyLXByb2dyZXNzLWRpc2FibGVkLWFjdGl2ZS1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGFjdGl2ZSBiYXIgaWYgZGlzYWJsZWQgfCBgLS1nb29nbGUtZ3JleS01MDBgXG5gLS1wYXBlci1wcm9ncmVzcy1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3JgIHwgVGhlIGNvbG9yIG9mIHRoZSBzZWNvbmRhcnkgYmFyIGlmIGRpc2FibGVkICB8IGAtLWdvb2dsZS1ncmV5LTMwMGBcbmAtLXBhcGVyLXByb2dyZXNzLWhlaWdodGAgfCBUaGUgaGVpZ2h0IG9mIHRoZSBwcm9ncmVzcyBiYXIgfCBgNHB4YFxuYC0tcGFwZXItcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZS1jeWNsZS1kdXJhdGlvbmAgfCBEdXJhdGlvbiBvZiBhbiBpbmRldGVybWluYXRlIGN5Y2xlIHwgYDJzYFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXByb2dyZXNzXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyMDBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSksIFtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAjcHJvZ3Jlc3NDb250YWluZXIge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1wcm9ncmVzcy1jb250YWluZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgI3Byb2dyZXNzQ29udGFpbmVyLFxuICAgICAgLyogdGhlIHN0cmlwZSBmb3IgdGhlIGluZGV0ZXJtaW5hdGUgYW5pbWF0aW9uKi9cbiAgICAgIC5pbmRldGVybWluYXRlOjphZnRlciB7XG4gICAgICAgIGhlaWdodDogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtaGVpZ2h0LCA0cHgpO1xuICAgICAgfVxuXG4gICAgICAjcHJpbWFyeVByb2dyZXNzLFxuICAgICAgI3NlY29uZGFyeVByb2dyZXNzLFxuICAgICAgLmluZGV0ZXJtaW5hdGU6OmFmdGVyIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cblxuICAgICAgI3Byb2dyZXNzQ29udGFpbmVyLFxuICAgICAgLmluZGV0ZXJtaW5hdGU6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtY29udGFpbmVyLWNvbG9yLCB2YXIoLS1nb29nbGUtZ3JleS0zMDApKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLnRyYW5zaXRpbmcpICNwcmltYXJ5UHJvZ3Jlc3MsXG4gICAgICA6aG9zdCgudHJhbnNpdGluZykgI3NlY29uZGFyeVByb2dyZXNzIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybTtcbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xuXG4gICAgICAgIC8qIER1cmF0aW9uICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtdHJhbnNpdGlvbi1kdXJhdGlvbiwgMC4wOHMpO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1wcm9ncmVzcy10cmFuc2l0aW9uLWR1cmF0aW9uLCAwLjA4cyk7XG5cbiAgICAgICAgLyogVGltaW5nIGZ1bmN0aW9uICovXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXBhcGVyLXByb2dyZXNzLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLCBlYXNlKTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IHZhcigtLXBhcGVyLXByb2dyZXNzLXRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uLCBlYXNlKTtcblxuICAgICAgICAvKiBEZWxheSAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb24tZGVsYXk6IHZhcigtLXBhcGVyLXByb2dyZXNzLXRyYW5zaXRpb24tZGVsYXksIDBzKTtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtdHJhbnNpdGlvbi1kZWxheSwgMHMpO1xuICAgICAgfVxuXG4gICAgICAjcHJpbWFyeVByb2dyZXNzLFxuICAgICAgI3NlY29uZGFyeVByb2dyZXNzIHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IGNlbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogbGVmdCBjZW50ZXI7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApO1xuICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgfVxuXG4gICAgICAjcHJpbWFyeVByb2dyZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtYWN0aXZlLWNvbG9yLCB2YXIoLS1nb29nbGUtZ3JlZW4tNTAwKSk7XG4gICAgICB9XG5cbiAgICAgICNzZWNvbmRhcnlQcm9ncmVzcyB7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLXByb2dyZXNzLXNlY29uZGFyeS1jb2xvciwgdmFyKC0tZ29vZ2xlLWdyZWVuLTEwMCkpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSAjcHJpbWFyeVByb2dyZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtZGlzYWJsZWQtYWN0aXZlLWNvbG9yLCB2YXIoLS1nb29nbGUtZ3JleS01MDApKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgI3NlY29uZGFyeVByb2dyZXNzIHtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tcGFwZXItcHJvZ3Jlc3MtZGlzYWJsZWQtc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1nb29nbGUtZ3JleS0zMDApKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKSkgI3ByaW1hcnlQcm9ncmVzcy5pbmRldGVybWluYXRlIHtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOiByaWdodCBjZW50ZXI7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IHJpZ2h0IGNlbnRlcjtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb246IGluZGV0ZXJtaW5hdGUtYmFyIHZhcigtLXBhcGVyLXByb2dyZXNzLWluZGV0ZXJtaW5hdGUtY3ljbGUtZHVyYXRpb24sIDJzKSBsaW5lYXIgaW5maW5pdGU7XG4gICAgICAgIGFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZS1iYXIgdmFyKC0tcGFwZXItcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZS1jeWNsZS1kdXJhdGlvbiwgMnMpIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZGlzYWJsZWRdKSkgI3ByaW1hcnlQcm9ncmVzcy5pbmRldGVybWluYXRlOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlcjtcblxuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogaW5kZXRlcm1pbmF0ZS1zcGxpdHRlciB2YXIoLS1wYXBlci1wcm9ncmVzcy1pbmRldGVybWluYXRlLWN5Y2xlLWR1cmF0aW9uLCAycykgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IGluZGV0ZXJtaW5hdGUtc3BsaXR0ZXIgdmFyKC0tcGFwZXItcHJvZ3Jlc3MtaW5kZXRlcm1pbmF0ZS1jeWNsZS1kdXJhdGlvbiwgMnMpIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUtYmFyIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMSkgdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKDEpIHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICB9XG4gICAgICAgIDc1JSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKSB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjgsLjYyLC4zNywuOTEpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoMCkgdHJhbnNsYXRlWCgwJSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGluZGV0ZXJtaW5hdGUtc3BsaXR0ZXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCguNzUpIHRyYW5zbGF0ZVgoLTEyNSUpO1xuICAgICAgICB9XG4gICAgICAgIDMwJSB7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCguNzUpIHRyYW5zbGF0ZVgoLTEyNSUpO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKC40MiwwLC42LC44KTtcbiAgICAgICAgfVxuICAgICAgICA5MCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLjc1KSB0cmFuc2xhdGVYKDEyNSUpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLjc1KSB0cmFuc2xhdGVYKDEyNSUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1iYXIge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMSkgdHJhbnNsYXRlWCgtMTAwJSk7XG4gICAgICAgIH1cbiAgICAgICAgNTAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgxKSB0cmFuc2xhdGVYKDAlKTtcbiAgICAgICAgfVxuICAgICAgICA3NSUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpIHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguMjgsLjYyLC4zNywuOTEpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDApIHRyYW5zbGF0ZVgoMCUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgaW5kZXRlcm1pbmF0ZS1zcGxpdHRlciB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCguNzUpIHRyYW5zbGF0ZVgoLTEyNSUpO1xuICAgICAgICB9XG4gICAgICAgIDMwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLjc1KSB0cmFuc2xhdGVYKC0xMjUlKTtcbiAgICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQyLDAsLjYsLjgpO1xuICAgICAgICB9XG4gICAgICAgIDkwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLjc1KSB0cmFuc2xhdGVYKDEyNSUpO1xuICAgICAgICB9XG4gICAgICAgIDEwMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC43NSkgdHJhbnNsYXRlWCgxMjUlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwicHJvZ3Jlc3NDb250YWluZXJcIj5cbiAgICAgIDxkaXYgaWQ9XCJzZWNvbmRhcnlQcm9ncmVzc1wiIGhpZGRlblxcJD1cIltbX2hpZGVTZWNvbmRhcnlQcm9ncmVzcyhzZWNvbmRhcnlSYXRpbyldXVwiPjwvZGl2PlxuICAgICAgPGRpdiBpZD1cInByaW1hcnlQcm9ncmVzc1wiPjwvZGl2PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLXByb2dyZXNzJyxcbiAgYmVoYXZpb3JzOiBbSXJvblJhbmdlQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzZWNvbmRhcnkgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWNvbmRhcnkgcmF0aW9cbiAgICAgKi9cbiAgICBzZWNvbmRhcnlSYXRpbzoge3R5cGU6IE51bWJlciwgdmFsdWU6IDAsIHJlYWRPbmx5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFVzZSBhbiBpbmRldGVybWluYXRlIHByb2dyZXNzIGluZGljYXRvci5cbiAgICAgKi9cbiAgICBpbmRldGVybWluYXRlOlxuICAgICAgICB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ190b2dnbGVJbmRldGVybWluYXRlJ30sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBwcm9ncmVzcyBpcyBkaXNhYmxlZC5cbiAgICAgKi9cbiAgICBkaXNhYmxlZDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiAnX2Rpc2FibGVkQ2hhbmdlZCdcbiAgICB9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOlxuICAgICAgWydfcHJvZ3Jlc3NDaGFuZ2VkKHNlY29uZGFyeVByb2dyZXNzLCB2YWx1ZSwgbWluLCBtYXgsIGluZGV0ZXJtaW5hdGUpJ10sXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAncHJvZ3Jlc3NiYXInfSxcblxuICBfdG9nZ2xlSW5kZXRlcm1pbmF0ZTogZnVuY3Rpb24oaW5kZXRlcm1pbmF0ZSkge1xuICAgIC8vIElmIHdlIHVzZSBhdHRyaWJ1dGUvY2xhc3MgYmluZGluZywgdGhlIGFuaW1hdGlvbiBzb21ldGltZXMgZG9lc24ndFxuICAgIC8vIHRyYW5zbGF0ZSBwcm9wZXJseSBvbiBTYWZhcmkgNy4xLiBTbyBpbnN0ZWFkLCB3ZSB0b2dnbGUgdGhlIGNsYXNzIGhlcmUgaW5cbiAgICAvLyB0aGUgdXBkYXRlIG1ldGhvZC5cbiAgICB0aGlzLnRvZ2dsZUNsYXNzKCdpbmRldGVybWluYXRlJywgaW5kZXRlcm1pbmF0ZSwgdGhpcy4kLnByaW1hcnlQcm9ncmVzcyk7XG4gIH0sXG5cbiAgX3RyYW5zZm9ybVByb2dyZXNzOiBmdW5jdGlvbihwcm9ncmVzcywgcmF0aW8pIHtcbiAgICB2YXIgdHJhbnNmb3JtID0gJ3NjYWxlWCgnICsgKHJhdGlvIC8gMTAwKSArICcpJztcbiAgICBwcm9ncmVzcy5zdHlsZS50cmFuc2Zvcm0gPSBwcm9ncmVzcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSB0cmFuc2Zvcm07XG4gIH0sXG5cbiAgX21haW5SYXRpb0NoYW5nZWQ6IGZ1bmN0aW9uKHJhdGlvKSB7XG4gICAgdGhpcy5fdHJhbnNmb3JtUHJvZ3Jlc3ModGhpcy4kLnByaW1hcnlQcm9ncmVzcywgcmF0aW8pO1xuICB9LFxuXG4gIF9wcm9ncmVzc0NoYW5nZWQ6IGZ1bmN0aW9uKFxuICAgICAgc2Vjb25kYXJ5UHJvZ3Jlc3MsIHZhbHVlLCBtaW4sIG1heCwgaW5kZXRlcm1pbmF0ZSkge1xuICAgIHNlY29uZGFyeVByb2dyZXNzID0gdGhpcy5fY2xhbXBWYWx1ZShzZWNvbmRhcnlQcm9ncmVzcyk7XG4gICAgdmFsdWUgPSB0aGlzLl9jbGFtcFZhbHVlKHZhbHVlKTtcblxuICAgIHZhciBzZWNvbmRhcnlSYXRpbyA9IHRoaXMuX2NhbGNSYXRpbyhzZWNvbmRhcnlQcm9ncmVzcykgKiAxMDA7XG4gICAgdmFyIG1haW5SYXRpbyA9IHRoaXMuX2NhbGNSYXRpbyh2YWx1ZSkgKiAxMDA7XG5cbiAgICB0aGlzLl9zZXRTZWNvbmRhcnlSYXRpbyhzZWNvbmRhcnlSYXRpbyk7XG4gICAgdGhpcy5fdHJhbnNmb3JtUHJvZ3Jlc3ModGhpcy4kLnNlY29uZGFyeVByb2dyZXNzLCBzZWNvbmRhcnlSYXRpbyk7XG4gICAgdGhpcy5fdHJhbnNmb3JtUHJvZ3Jlc3ModGhpcy4kLnByaW1hcnlQcm9ncmVzcywgbWFpblJhdGlvKTtcblxuICAgIHRoaXMuc2Vjb25kYXJ5UHJvZ3Jlc3MgPSBzZWNvbmRhcnlQcm9ncmVzcztcblxuICAgIGlmIChpbmRldGVybWluYXRlKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW5vdycsIHZhbHVlKTtcbiAgICB9XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVtaW4nLCBtaW4pO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWF4JywgbWF4KTtcbiAgfSxcblxuICBfZGlzYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihkaXNhYmxlZCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgZGlzYWJsZWQgPyAndHJ1ZScgOiAnZmFsc2UnKTtcbiAgfSxcblxuICBfaGlkZVNlY29uZGFyeVByb2dyZXNzOiBmdW5jdGlvbihzZWNvbmRhcnlSYXRpbykge1xuICAgIHJldHVybiBzZWNvbmRhcnlSYXRpbyA9PT0gMDtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1wcm9ncmVzcy9wYXBlci1wcm9ncmVzcy5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9jb2xvci5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblJhbmdlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmFuZ2UtYmVoYXZpb3IvaXJvbi1yYW5nZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BhcGVySW5reUZvY3VzQmVoYXZpb3IsIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7c2V0VG91Y2hBY3Rpb259IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2dlc3R1cmVzLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIEBhcHBseSAtLWxheW91dDtcbiAgICAgIEBhcHBseSAtLWxheW91dC1qdXN0aWZpZWQ7XG4gICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgd2lkdGg6IDIwMHB4O1xuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcbiAgICAgIC0tcGFwZXItcHJvZ3Jlc3MtYWN0aXZlLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItYWN0aXZlLWNvbG9yLCB2YXIoLS1nb29nbGUtYmx1ZS03MDApKTtcbiAgICAgIC0tcGFwZXItcHJvZ3Jlc3Mtc2Vjb25kYXJ5LWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItc2Vjb25kYXJ5LWNvbG9yLCB2YXIoLS1nb29nbGUtYmx1ZS0zMDApKTtcbiAgICAgIC0tcGFwZXItcHJvZ3Jlc3MtZGlzYWJsZWQtYWN0aXZlLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItZGlzYWJsZWQtYWN0aXZlLWNvbG9yLCB2YXIoLS1wYXBlci1ncmV5LTQwMCkpO1xuICAgICAgLS1wYXBlci1wcm9ncmVzcy1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3IsIHZhcigtLXBhcGVyLWdyZXktNDAwKSk7XG4gICAgICAtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodDogdmFyKC0tcGFwZXItc2xpZGVyLWhlaWdodCwgMnB4KTtcbiAgICB9XG5cbiAgICAvKiBmb2N1cyBzaG93cyB0aGUgcmlwcGxlICovXG4gICAgOmhvc3QoOmZvY3VzKSB7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgKiBOT1RFKGtlYW51bGVlKTogVGhvdWdoIDpob3N0LWNvbnRleHQgaXMgbm90IHVuaXZlcnNhbGx5IHN1cHBvcnRlZCwgc29tZSBwYWdlc1xuICAgICAgKiBzdGlsbCByZWx5IG9uIHBhcGVyLXNsaWRlciBiZWluZyBmbGlwcGVkIHdoZW4gZGlyPVwicnRsXCIgaXMgc2V0IG9uIGJvZHkuIEZvciBmdWxsXG4gICAgICAqIGNvbXBhdGliaWxpdHksIGRpcj1cInJ0bFwiIG11c3QgYmUgZXhwbGljaXRseSBzZXQgb24gcGFwZXItc2xpZGVyLlxuICAgICAgKi9cbiAgICA6ZGlyKHJ0bCkgI3NsaWRlckNvbnRhaW5lciB7XG4gICAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgICogTk9URShrZWFudWxlZSk6IFRoaXMgaXMgc2VwYXJhdGUgZnJvbSB0aGUgcnVsZSBhYm92ZSBiZWNhdXNlIDpob3N0LWNvbnRleHQgbWF5XG4gICAgICAqIG5vdCBiZSByZWNvZ25pemVkLlxuICAgICAgKi9cbiAgICA6aG9zdChbZGlyPVwicnRsXCJdKSAjc2xpZGVyQ29udGFpbmVyIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAgKiBOT1RFKGtlYW51bGVlKTogTmVlZGVkIHRvIG92ZXJyaWRlIHRoZSA6aG9zdC1jb250ZXh0IHJ1bGUgKHdoZXJlIHN1cHBvcnRlZClcbiAgICAgICogdG8gc3VwcG9ydCBMVFIgc2xpZGVycyBpbiBSVEwgcGFnZXMuXG4gICAgICAqL1xuICAgIDpob3N0KFtkaXI9XCJsdHJcIl0pICNzbGlkZXJDb250YWluZXIge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlWCgxKTtcbiAgICAgIHRyYW5zZm9ybTogc2NhbGVYKDEpO1xuICAgIH1cblxuICAgICNzbGlkZXJDb250YWluZXIge1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IGNhbGMoMzBweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkpO1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMTVweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgfVxuXG4gICAgI3NsaWRlckNvbnRhaW5lcjpmb2N1cyB7XG4gICAgICBvdXRsaW5lOiAwO1xuICAgIH1cblxuICAgICNzbGlkZXJDb250YWluZXIuZWRpdGFibGUge1xuICAgICAgbWFyZ2luLXRvcDogMTJweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDEycHg7XG4gICAgfVxuXG4gICAgLmJhci1jb250YWluZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB9XG5cbiAgICAucmluZyA+IC5iYXItY29udGFpbmVyIHtcbiAgICAgIGxlZnQ6IGNhbGMoNXB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KS8yKTtcbiAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4xOHMgZWFzZTtcbiAgICB9XG5cbiAgICAucmluZy5leHBhbmQuZHJhZ2dpbmcgPiAuYmFyLWNvbnRhaW5lciB7XG4gICAgICB0cmFuc2l0aW9uOiBub25lO1xuICAgIH1cblxuICAgIC5yaW5nLmV4cGFuZDpub3QoLnBpbikgPiAuYmFyLWNvbnRhaW5lciB7XG4gICAgICBsZWZ0OiBjYWxjKDhweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgfVxuXG4gICAgI3NsaWRlckJhciB7XG4gICAgICBwYWRkaW5nOiAxNXB4IDA7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1iYXItY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgICAgIC0tcGFwZXItcHJvZ3Jlc3MtY29udGFpbmVyLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItY29udGFpbmVyLWNvbG9yLCB2YXIoLS1wYXBlci1ncmV5LTQwMCkpO1xuICAgICAgLS1wYXBlci1wcm9ncmVzcy1oZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCk7XG4gICAgfVxuXG4gICAgLnNsaWRlci1tYXJrZXJzIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIC8qIHNsaWRlci1rbm9iIGlzIDMwcHggKyB0aGUgc2xpZGVyLWhlaWdodCBzbyB0aGF0IHRoZSBtYXJrZXJzIHNob3VsZCBzdGFydCBhdCBhIG9mZnNldCBvZiAxNXB4Ki9cbiAgICAgIHRvcDogMTVweDtcbiAgICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICByaWdodDogLTFweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgIH1cblxuICAgIC5zbGlkZXItbWFya2VyIHtcbiAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgIH1cbiAgICAuc2xpZGVyLW1hcmtlcnM6OmFmdGVyLFxuICAgIC5zbGlkZXItbWFya2VyOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBtYXJnaW4tbGVmdDogLTFweDtcbiAgICAgIHdpZHRoOiAycHg7XG4gICAgICBoZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCk7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItbWFya2Vycy1jb2xvciwgIzAwMCk7XG4gICAgfVxuXG4gICAgLnNsaWRlci1rbm9iIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygtMTVweCAtIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkvMik7XG4gICAgICB3aWR0aDogY2FsYygzMHB4ICsgdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1zbGlkZXItaGVpZ2h0KSk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMzBweCArIHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItc2xpZGVyLWhlaWdodCkpO1xuICAgIH1cblxuICAgIC50cmFuc2l0aW5nID4gLnNsaWRlci1rbm9iIHtcbiAgICAgIHRyYW5zaXRpb246IGxlZnQgMC4wOHMgZWFzZTtcbiAgICB9XG5cbiAgICAuc2xpZGVyLWtub2I6Zm9jdXMge1xuICAgICAgb3V0bGluZTogbm9uZTtcbiAgICB9XG5cbiAgICAuc2xpZGVyLWtub2IuZHJhZ2dpbmcge1xuICAgICAgdHJhbnNpdGlvbjogbm9uZTtcbiAgICB9XG5cbiAgICAuc25hcHMgPiAuc2xpZGVyLWtub2IuZHJhZ2dpbmcge1xuICAgICAgdHJhbnNpdGlvbjogLXdlYmtpdC10cmFuc2Zvcm0gMC4wOHMgZWFzZTtcbiAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjA4cyBlYXNlO1xuICAgIH1cblxuICAgIC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMjBweCk7XG4gICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHgpO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IsIHZhcigtLWdvb2dsZS1ibHVlLTcwMCkpO1xuICAgICAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3IsIHZhcigtLWdvb2dsZS1ibHVlLTcwMCkpO1xuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuXG4gICAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiAtd2Via2l0LXRyYW5zZm9ybSwgYmFja2dyb3VuZC1jb2xvciwgYm9yZGVyO1xuICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtLCBiYWNrZ3JvdW5kLWNvbG9yLCBib3JkZXI7XG4gICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjE4cztcbiAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlO1xuICAgIH1cblxuICAgIC5leHBhbmQ6bm90KC5waW4pID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyIHtcbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xuICAgIH1cblxuICAgIC5yaW5nID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWNvbG9yLCB0cmFuc3BhcmVudCk7XG4gICAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wYXBlci1zbGlkZXIta25vYi1zdGFydC1ib3JkZXItY29sb3IsIHZhcigtLXBhcGVyLWdyZXktNDAwKSk7XG4gICAgfVxuXG4gICAgLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvciwgdmFyKC0tZ29vZ2xlLWJsdWUtNzAwKSk7XG4gICAgfVxuXG4gICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTEzcHg7XG4gICAgICB3aWR0aDogMjZweDtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJSA1MCUgNTAlIDA7XG5cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICB9XG5cbiAgICAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSxcbiAgICAuc2xpZGVyLWtub2ItaW5uZXI6OmFmdGVyIHtcbiAgICAgIHRyYW5zaXRpb246IC13ZWJraXQtdHJhbnNmb3JtIC4xOHMgZWFzZSwgYmFja2dyb3VuZC1jb2xvciAuMThzIGVhc2U7XG4gICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gLjE4cyBlYXNlLCBiYWNrZ3JvdW5kLWNvbG9yIC4xOHMgZWFzZTtcbiAgICB9XG5cbiAgICAucGluLnJpbmcgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXI6OmJlZm9yZSB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItcGluLXN0YXJ0LWNvbG9yLCB2YXIoLS1wYXBlci1ncmV5LTQwMCkpO1xuICAgIH1cblxuICAgIC5waW4uZXhwYW5kID4gLnNsaWRlci1rbm9iID4gLnNsaWRlci1rbm9iLWlubmVyOjpiZWZvcmUge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgxN3B4LCAtMTdweCk7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHNjYWxlKDEpIHRyYW5zbGF0ZSgxN3B4LCAtMTdweCk7XG4gICAgfVxuXG4gICAgLnBpbiA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogYXR0cih2YWx1ZSk7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICBsZWZ0OiA1MCU7XG4gICAgICBtYXJnaW4tbGVmdDogLTE2cHg7XG4gICAgICB3aWR0aDogMzJweDtcbiAgICAgIGhlaWdodDogMjZweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItZm9udC1jb2xvciwgI2ZmZik7XG4gICAgICBmb250LXNpemU6IDEwcHg7XG5cbiAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgwKSB0cmFuc2xhdGUoMCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZSgwKTtcbiAgICB9XG5cbiAgICAucGluLmV4cGFuZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lcjo6YWZ0ZXIge1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZSgwLCAtMTdweCk7XG4gICAgfVxuXG4gICAgLyogcGFwZXItaW5wdXQgKi9cbiAgICAuc2xpZGVyLWlucHV0IHtcbiAgICAgIHdpZHRoOiA1MHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIC0tcGFwZXItaW5wdXQtY29udGFpbmVyLWlucHV0OiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItc2xpZGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dDtcbiAgICAgIH07XG4gICAgICBAYXBwbHkgLS1wYXBlci1zbGlkZXItaW5wdXQ7XG4gICAgfVxuXG4gICAgLyogZGlzYWJsZWQgc3RhdGUgKi9cbiAgICAjc2xpZGVyQ29udGFpbmVyLmRpc2FibGVkIHtcbiAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIH1cblxuICAgIC5kaXNhYmxlZCA+IC5zbGlkZXIta25vYiA+IC5zbGlkZXIta25vYi1pbm5lciB7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1zbGlkZXItZGlzYWJsZWQta25vYi1jb2xvciwgdmFyKC0tcGFwZXItZ3JleS00MDApKTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhcGVyLXNsaWRlci1kaXNhYmxlZC1rbm9iLWNvbG9yLCB2YXIoLS1wYXBlci1ncmV5LTQwMCkpO1xuICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMC43NSwgMSk7XG4gICAgICB0cmFuc2Zvcm06IHNjYWxlM2QoMC43NSwgMC43NSwgMSk7XG4gICAgfVxuXG4gICAgLmRpc2FibGVkLnJpbmcgPiAuc2xpZGVyLWtub2IgPiAuc2xpZGVyLWtub2ItaW5uZXIge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItc2xpZGVyLWtub2Itc3RhcnQtY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvciwgdmFyKC0tcGFwZXItZ3JleS00MDApKTtcbiAgICB9XG5cbiAgICBwYXBlci1yaXBwbGUge1xuICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXNsaWRlci1rbm9iLWNvbG9yLCB2YXIoLS1nb29nbGUtYmx1ZS03MDApKTtcbiAgICB9XG4gIDwvc3R5bGU+XG5cbiAgPGRpdiBpZD1cInNsaWRlckNvbnRhaW5lclwiIGNsYXNzXFwkPVwiW1tfZ2V0Q2xhc3NOYW1lcyhkaXNhYmxlZCwgcGluLCBzbmFwcywgaW1tZWRpYXRlVmFsdWUsIG1pbiwgZXhwYW5kLCBkcmFnZ2luZywgdHJhbnNpdGluZywgZWRpdGFibGUpXV1cIj5cbiAgICA8ZGl2IGNsYXNzPVwiYmFyLWNvbnRhaW5lclwiPlxuICAgICAgPHBhcGVyLXByb2dyZXNzIGRpc2FibGVkXFwkPVwiW1tkaXNhYmxlZF1dXCIgaWQ9XCJzbGlkZXJCYXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIiBtaW49XCJbW21pbl1dXCIgbWF4PVwiW1ttYXhdXVwiIHN0ZXA9XCJbW3N0ZXBdXVwiIHZhbHVlPVwiW1tpbW1lZGlhdGVWYWx1ZV1dXCIgc2Vjb25kYXJ5LXByb2dyZXNzPVwiW1tzZWNvbmRhcnlQcm9ncmVzc11dXCIgb24tZG93bj1cIl9iYXJkb3duXCIgb24tdXA9XCJfcmVzZXRLbm9iXCIgb24tdHJhY2s9XCJfYmFydHJhY2tcIiBvbi10YXA9XCJfYmFyY2xpY2tcIj5cbiAgICAgIDwvcGFwZXItcHJvZ3Jlc3M+XG4gICAgPC9kaXY+XG5cbiAgICA8dGVtcGxhdGUgaXM9XCJkb20taWZcIiBpZj1cIltbc25hcHNdXVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1tYXJrZXJzXCI+XG4gICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbbWFya2Vyc11dXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1tYXJrZXJcIj48L2Rpdj5cbiAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG5cbiAgICA8ZGl2IGlkPVwic2xpZGVyS25vYlwiIGNsYXNzPVwic2xpZGVyLWtub2JcIiBvbi1kb3duPVwiX2tub2Jkb3duXCIgb24tdXA9XCJfcmVzZXRLbm9iXCIgb24tdHJhY2s9XCJfb25UcmFja1wiIG9uLXRyYW5zaXRpb25lbmQ9XCJfa25vYlRyYW5zaXRpb25FbmRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInNsaWRlci1rbm9iLWlubmVyXCIgdmFsdWVcXCQ9XCJbW2ltbWVkaWF0ZVZhbHVlXV1cIj48L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG5cbiAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2VkaXRhYmxlXV1cIj5cbiAgICA8cGFwZXItaW5wdXQgaWQ9XCJpbnB1dFwiIHR5cGU9XCJudW1iZXJcIiBzdGVwPVwiW1tzdGVwXV1cIiBtaW49XCJbW21pbl1dXCIgbWF4PVwiW1ttYXhdXVwiIGNsYXNzPVwic2xpZGVyLWlucHV0XCIgZGlzYWJsZWRcXCQ9XCJbW2Rpc2FibGVkXV1cIiB2YWx1ZT1cIltbaW1tZWRpYXRlVmFsdWVdXVwiIG9uLWNoYW5nZT1cIl9jaGFuZ2VWYWx1ZVwiIG9uLWtleWRvd249XCJfaW5wdXRLZXlEb3duXCIgbm8tbGFiZWwtZmxvYXQ+XG4gICAgPC9wYXBlci1pbnB1dD5cbiAgPC90ZW1wbGF0ZT5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW1NsaWRlcnNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zbGlkZXJzLmh0bWwpXG5cbmBwYXBlci1zbGlkZXJgIGFsbG93cyB1c2VyIHRvIHNlbGVjdCBhIHZhbHVlIGZyb20gYSByYW5nZSBvZiB2YWx1ZXMgYnlcbm1vdmluZyB0aGUgc2xpZGVyIHRodW1iLiAgVGhlIGludGVyYWN0aXZlIG5hdHVyZSBvZiB0aGUgc2xpZGVyIG1ha2VzIGl0IGFcbmdyZWF0IGNob2ljZSBmb3Igc2V0dGluZ3MgdGhhdCByZWZsZWN0IGludGVuc2l0eSBsZXZlbHMsIHN1Y2ggYXMgdm9sdW1lLFxuYnJpZ2h0bmVzcywgb3IgY29sb3Igc2F0dXJhdGlvbi5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1zbGlkZXI+PC9wYXBlci1zbGlkZXI+XG5cblVzZSBgbWluYCBhbmQgYG1heGAgdG8gc3BlY2lmeSB0aGUgc2xpZGVyIHJhbmdlLiAgRGVmYXVsdCBpcyAwIHRvIDEwMC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1zbGlkZXIgbWluPVwiMTBcIiBtYXg9XCIyMDBcIiB2YWx1ZT1cIjExMFwiPjwvcGFwZXItc2xpZGVyPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItc2xpZGVyLWNvbnRhaW5lci1jb2xvcmAgfCBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgYmFyIHwgYC0tcGFwZXItZ3JleS00MDBgXG5gLS1wYXBlci1zbGlkZXItYmFyLWNvbG9yYCB8IFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBzbGlkZXIgfCBgdHJhbnNwYXJlbnRgXG5gLS1wYXBlci1zbGlkZXItYWN0aXZlLWNvbG9yYCB8IFRoZSBwcm9ncmVzcyBiYXIgY29sb3IgfCBgLS1nb29nbGUtYmx1ZS03MDBgXG5gLS1wYXBlci1zbGlkZXItc2Vjb25kYXJ5LWNvbG9yYCB8IFRoZSBzZWNvbmRhcnkgcHJvZ3Jlc3MgYmFyIGNvbG9yIHwgYC0tZ29vZ2xlLWJsdWUtMzAwYFxuYC0tcGFwZXItc2xpZGVyLWtub2ItY29sb3JgIHwgVGhlIGtub2IgY29sb3IgfCBgLS1nb29nbGUtYmx1ZS03MDBgXG5gLS1wYXBlci1zbGlkZXItZGlzYWJsZWQta25vYi1jb2xvcmAgfCBUaGUgZGlzYWJsZWQga25vYiBjb2xvciB8IGAtLXBhcGVyLWdyZXktNDAwYFxuYC0tcGFwZXItc2xpZGVyLXBpbi1jb2xvcmAgfCBUaGUgcGluIGNvbG9yIHwgYC0tZ29vZ2xlLWJsdWUtNzAwYFxuYC0tcGFwZXItc2xpZGVyLWZvbnQtY29sb3JgIHwgVGhlIHBpbidzIHRleHQgY29sb3IgfCBgI2ZmZmBcbmAtLXBhcGVyLXNsaWRlci1tYXJrZXJzLWNvbG9yYCB8IFRoZSBzbmFwcyBtYXJrZXJzIGNvbG9yIHwgYCMwMDBgXG5gLS1wYXBlci1zbGlkZXItZGlzYWJsZWQtYWN0aXZlLWNvbG9yYCB8IFRoZSBkaXNhYmxlZCBwcm9ncmVzcyBiYXIgY29sb3IgfCBgLS1wYXBlci1ncmV5LTQwMGBcbmAtLXBhcGVyLXNsaWRlci1kaXNhYmxlZC1zZWNvbmRhcnktY29sb3JgIHwgVGhlIGRpc2FibGVkIHNlY29uZGFyeSBwcm9ncmVzcyBiYXIgY29sb3IgfCBgLS1wYXBlci1ncmV5LTQwMGBcbmAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWNvbG9yYCB8IFRoZSBmaWxsIGNvbG9yIG9mIHRoZSBrbm9iIGF0IHRoZSBmYXIgbGVmdCB8IGB0cmFuc3BhcmVudGBcbmAtLXBhcGVyLXNsaWRlci1rbm9iLXN0YXJ0LWJvcmRlci1jb2xvcmAgfCBUaGUgYm9yZGVyIGNvbG9yIG9mIHRoZSBrbm9iIGF0IHRoZSBmYXIgbGVmdCB8IGAtLXBhcGVyLWdyZXktNDAwYFxuYC0tcGFwZXItc2xpZGVyLXBpbi1zdGFydC1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIHBpbiBhdCB0aGUgZmFyIGxlZnQgfCBgLS1wYXBlci1ncmV5LTQwMGBcbmAtLXBhcGVyLXNsaWRlci1oZWlnaHRgIHwgSGVpZ2h0IG9mIHRoZSBwcm9ncmVzcyBiYXIgfCBgMnB4YFxuYC0tcGFwZXItc2xpZGVyLWlucHV0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGlucHV0IGluIGVkaXRhYmxlIG1vZGUgfCBge31gXG5gLS1wYXBlci1zbGlkZXItaW5wdXQtY29udGFpbmVyLWlucHV0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHBhcGVyLWlucHV0LWNvbnRhaW5lci1pbnB1dCBpbiBlZGl0YWJsZSBtb2RlIHwgYHt9YFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXNsaWRlclxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogdGVtcGxhdGUsXG5cbiAgaXM6ICdwYXBlci1zbGlkZXInLFxuXG4gIGJlaGF2aW9yczogW1xuICAgIElyb25BMTF5S2V5c0JlaGF2aW9yLFxuICAgIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yLFxuICAgIFBhcGVySW5reUZvY3VzQmVoYXZpb3IsXG4gICAgSXJvblJhbmdlQmVoYXZpb3JcbiAgXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgdmFsdWU6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgc2xpZGVyIHRodW1iIHNuYXBzIHRvIHRpY2sgbWFya3MgZXZlbmx5IHNwYWNlZCBiYXNlZFxuICAgICAqIG9uIHRoZSBgc3RlcGAgcHJvcGVydHkgdmFsdWUuXG4gICAgICovXG4gICAgc25hcHM6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIGEgcGluIHdpdGggbnVtZXJpYyB2YWx1ZSBsYWJlbCBpcyBzaG93biB3aGVuIHRoZSBzbGlkZXIgdGh1bWJcbiAgICAgKiBpcyBwcmVzc2VkLiBVc2UgZm9yIHNldHRpbmdzIGZvciB3aGljaCB1c2VycyBuZWVkIHRvIGtub3cgdGhlIGV4YWN0XG4gICAgICogdmFsdWUgb2YgdGhlIHNldHRpbmcuXG4gICAgICovXG4gICAgcGluOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbnVtYmVyIHRoYXQgcmVwcmVzZW50cyB0aGUgY3VycmVudCBzZWNvbmRhcnkgcHJvZ3Jlc3MuXG4gICAgICovXG4gICAgc2Vjb25kYXJ5UHJvZ3Jlc3M6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAwLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfc2Vjb25kYXJ5UHJvZ3Jlc3NDaGFuZ2VkJyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgYW4gaW5wdXQgaXMgc2hvd24gYW5kIHVzZXIgY2FuIHVzZSBpdCB0byBzZXQgdGhlIHNsaWRlciB2YWx1ZS5cbiAgICAgKi9cbiAgICBlZGl0YWJsZToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGltbWVkaWF0ZSB2YWx1ZSBvZiB0aGUgc2xpZGVyLiAgVGhpcyB2YWx1ZSBpcyB1cGRhdGVkIHdoaWxlIHRoZSB1c2VyXG4gICAgICogaXMgZHJhZ2dpbmcgdGhlIHNsaWRlci5cbiAgICAgKi9cbiAgICBpbW1lZGlhdGVWYWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDAsXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG1heGltdW0gbnVtYmVyIG9mIG1hcmtlcnNcbiAgICAgKi9cbiAgICBtYXhNYXJrZXJzOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMCxcbiAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGtub2IgaXMgZXhwYW5kZWRcbiAgICAgKi9cbiAgICBleHBhbmQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgYSB0b3VjaG1vdmUgb24gdGhlIHNsaWRlciBiYXIgZG9lc24ndCBkcmFnIHRoZSBzbGlkZXIgdGh1bmIuXG4gICAgICogVGFwcGluZyBvbiB0aGUgc2xpZGVyIGJhciBzdGlsbCB1cGRhdGVzIHRoZSBzbGlkZXIncyBwb3NpdGlvblxuICAgICAqL1xuICAgIGlnbm9yZUJhclRvdWNoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIHdoZW4gdGhlIHVzZXIgaXMgZHJhZ2dpbmcgdGhlIHNsaWRlci5cbiAgICAgKi9cbiAgICBkcmFnZ2luZzoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgIH0sXG5cbiAgICB0cmFuc2l0aW5nOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgfSxcblxuICAgIG1hcmtlcnM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH0sXG4gICAgfSxcbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX3VwZGF0ZUtub2IodmFsdWUsIG1pbiwgbWF4LCBzbmFwcywgc3RlcCknLFxuICAgICdfdmFsdWVDaGFuZ2VkKHZhbHVlKScsXG4gICAgJ19pbW1lZGlhdGVWYWx1ZUNoYW5nZWQoaW1tZWRpYXRlVmFsdWUpJyxcbiAgICAnX3VwZGF0ZU1hcmtlcnMobWF4TWFya2VycywgbWluLCBtYXgsIHNuYXBzKScsXG4gIF0sXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtcbiAgICByb2xlOiAnc2xpZGVyJyxcbiAgICB0YWJpbmRleDogMCxcbiAgfSxcblxuICAvKiogQHR5cGUgeyFPYmplY3R9ICovXG4gIGtleUJpbmRpbmdzOiB7XG4gICAgJ2xlZnQnOiAnX2xlZnRLZXknLFxuICAgICdyaWdodCc6ICdfcmlnaHRLZXknLFxuICAgICdkb3duIHBhZ2Vkb3duIGhvbWUnOiAnX2RlY3JlbWVudEtleScsXG4gICAgJ3VwIHBhZ2V1cCBlbmQnOiAnX2luY3JlbWVudEtleScsXG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlnbm9yZUJhclRvdWNoKSB7XG4gICAgICBzZXRUb3VjaEFjdGlvbih0aGlzLiQuc2xpZGVyQmFyLCAnYXV0bycpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSW5jcmVhc2VzIHZhbHVlIGJ5IGBzdGVwYCBidXQgbm90IGFib3ZlIGBtYXhgLlxuICAgKiBAbWV0aG9kIGluY3JlbWVudFxuICAgKi9cbiAgaW5jcmVtZW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5fY2xhbXBWYWx1ZSh0aGlzLnZhbHVlICsgdGhpcy5zdGVwKTtcbiAgfSxcblxuICAvKipcbiAgICogRGVjcmVhc2VzIHZhbHVlIGJ5IGBzdGVwYCBidXQgbm90IGJlbG93IGBtaW5gLlxuICAgKiBAbWV0aG9kIGRlY3JlbWVudFxuICAgKi9cbiAgZGVjcmVtZW50OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnZhbHVlID0gdGhpcy5fY2xhbXBWYWx1ZSh0aGlzLnZhbHVlIC0gdGhpcy5zdGVwKTtcbiAgfSxcblxuICBfdXBkYXRlS25vYjogZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4LCBzbmFwcywgc3RlcCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLXZhbHVlbWluJywgbWluKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS12YWx1ZW1heCcsIG1heCk7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtdmFsdWVub3cnLCB2YWx1ZSk7XG5cbiAgICB0aGlzLl9wb3NpdGlvbktub2IodGhpcy5fY2FsY1JhdGlvKHZhbHVlKSAqIDEwMCk7XG4gIH0sXG5cbiAgX3ZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5maXJlKCd2YWx1ZS1jaGFuZ2UnLCB7Y29tcG9zZWQ6IHRydWV9KTtcbiAgfSxcblxuICBfaW1tZWRpYXRlVmFsdWVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5maXJlKCdpbW1lZGlhdGUtdmFsdWUtY2hhbmdlJywge2NvbXBvc2VkOiB0cnVlfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmltbWVkaWF0ZVZhbHVlO1xuICAgIH1cbiAgfSxcblxuICBfc2Vjb25kYXJ5UHJvZ3Jlc3NDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnNlY29uZGFyeVByb2dyZXNzID0gdGhpcy5fY2xhbXBWYWx1ZSh0aGlzLnNlY29uZGFyeVByb2dyZXNzKTtcbiAgfSxcblxuICBfZXhwYW5kS25vYjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2V0RXhwYW5kKHRydWUpO1xuICB9LFxuXG4gIF9yZXNldEtub2I6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2FuY2VsRGVib3VuY2VyKCdleHBhbmRLbm9iJyk7XG4gICAgdGhpcy5fc2V0RXhwYW5kKGZhbHNlKTtcbiAgfSxcblxuICBfcG9zaXRpb25Lbm9iOiBmdW5jdGlvbihyYXRpbykge1xuICAgIHRoaXMuX3NldEltbWVkaWF0ZVZhbHVlKHRoaXMuX2NhbGNTdGVwKHRoaXMuX2NhbGNLbm9iUG9zaXRpb24ocmF0aW8pKSk7XG4gICAgdGhpcy5fc2V0UmF0aW8odGhpcy5fY2FsY1JhdGlvKHRoaXMuaW1tZWRpYXRlVmFsdWUpICogMTAwKTtcblxuICAgIHRoaXMuJC5zbGlkZXJLbm9iLnN0eWxlLmxlZnQgPSB0aGlzLnJhdGlvICsgJyUnO1xuICAgIGlmICh0aGlzLmRyYWdnaW5nKSB7XG4gICAgICB0aGlzLl9rbm9ic3RhcnR4ID0gKHRoaXMucmF0aW8gKiB0aGlzLl93KSAvIDEwMDtcbiAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgMCwgMCwgdGhpcy4kLnNsaWRlcktub2IpO1xuICAgIH1cbiAgfSxcblxuICBfY2FsY0tub2JQb3NpdGlvbjogZnVuY3Rpb24ocmF0aW8pIHtcbiAgICByZXR1cm4gKHRoaXMubWF4IC0gdGhpcy5taW4pICogcmF0aW8gLyAxMDAgKyB0aGlzLm1pbjtcbiAgfSxcblxuICBfb25UcmFjazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBzd2l0Y2ggKGV2ZW50LmRldGFpbC5zdGF0ZSkge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICB0aGlzLl90cmFja1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0cmFjayc6XG4gICAgICAgIHRoaXMuX3RyYWNrWChldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgdGhpcy5fdHJhY2tFbmQoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIF90cmFja1N0YXJ0OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3NldFRyYW5zaXRpbmcoZmFsc2UpO1xuICAgIHRoaXMuX3cgPSB0aGlzLiQuc2xpZGVyQmFyLm9mZnNldFdpZHRoO1xuICAgIHRoaXMuX3ggPSB0aGlzLnJhdGlvICogdGhpcy5fdyAvIDEwMDtcbiAgICB0aGlzLl9zdGFydHggPSB0aGlzLl94O1xuICAgIHRoaXMuX2tub2JzdGFydHggPSB0aGlzLl9zdGFydHg7XG4gICAgdGhpcy5fbWlueCA9IC10aGlzLl9zdGFydHg7XG4gICAgdGhpcy5fbWF4eCA9IHRoaXMuX3cgLSB0aGlzLl9zdGFydHg7XG4gICAgdGhpcy4kLnNsaWRlcktub2IuY2xhc3NMaXN0LmFkZCgnZHJhZ2dpbmcnKTtcbiAgICB0aGlzLl9zZXREcmFnZ2luZyh0cnVlKTtcbiAgfSxcblxuICBfdHJhY2tYOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5kcmFnZ2luZykge1xuICAgICAgdGhpcy5fdHJhY2tTdGFydChldmVudCk7XG4gICAgfVxuXG4gICAgdmFyIGRpcmVjdGlvbiA9IHRoaXMuX2lzUlRMID8gLTEgOiAxO1xuICAgIHZhciBkeCA9XG4gICAgICAgIE1hdGgubWluKHRoaXMuX21heHgsIE1hdGgubWF4KHRoaXMuX21pbngsIGV2ZW50LmRldGFpbC5keCAqIGRpcmVjdGlvbikpO1xuICAgIHRoaXMuX3ggPSB0aGlzLl9zdGFydHggKyBkeDtcblxuICAgIHZhciBpbW1lZGlhdGVWYWx1ZSA9XG4gICAgICAgIHRoaXMuX2NhbGNTdGVwKHRoaXMuX2NhbGNLbm9iUG9zaXRpb24odGhpcy5feCAvIHRoaXMuX3cgKiAxMDApKTtcbiAgICB0aGlzLl9zZXRJbW1lZGlhdGVWYWx1ZShpbW1lZGlhdGVWYWx1ZSk7XG5cbiAgICAvLyB1cGRhdGUga25vYidzIHBvc2l0aW9uXG4gICAgdmFyIHRyYW5zbGF0ZVggPVxuICAgICAgICAoKHRoaXMuX2NhbGNSYXRpbyh0aGlzLmltbWVkaWF0ZVZhbHVlKSAqIHRoaXMuX3cpIC0gdGhpcy5fa25vYnN0YXJ0eCk7XG4gICAgdGhpcy50cmFuc2xhdGUzZCh0cmFuc2xhdGVYICsgJ3B4JywgMCwgMCwgdGhpcy4kLnNsaWRlcktub2IpO1xuICB9LFxuXG4gIF90cmFja0VuZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHMgPSB0aGlzLiQuc2xpZGVyS25vYi5zdHlsZTtcblxuICAgIHRoaXMuJC5zbGlkZXJLbm9iLmNsYXNzTGlzdC5yZW1vdmUoJ2RyYWdnaW5nJyk7XG4gICAgdGhpcy5fc2V0RHJhZ2dpbmcoZmFsc2UpO1xuICAgIHRoaXMuX3Jlc2V0S25vYigpO1xuICAgIHRoaXMudmFsdWUgPSB0aGlzLmltbWVkaWF0ZVZhbHVlO1xuXG4gICAgcy50cmFuc2Zvcm0gPSBzLndlYmtpdFRyYW5zZm9ybSA9ICcnO1xuXG4gICAgdGhpcy5maXJlKCdjaGFuZ2UnLCB7Y29tcG9zZWQ6IHRydWV9KTtcbiAgfSxcblxuICBfa25vYmRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fZXhwYW5kS25vYigpO1xuXG4gICAgLy8gY2FuY2VsIHNlbGVjdGlvblxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAvLyBzZXQgdGhlIGZvY3VzIG1hbnVhbGx5IGJlY2F1c2Ugd2Ugd2lsbCBjYWxsZWQgcHJldmVudCBkZWZhdWx0XG4gICAgdGhpcy5mb2N1cygpO1xuICB9LFxuXG4gIF9iYXJ0cmFjazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fYWxsb3dCYXJFdmVudChldmVudCkpIHtcbiAgICAgIHRoaXMuX29uVHJhY2soZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICBfYmFyY2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fdyA9IHRoaXMuJC5zbGlkZXJCYXIub2Zmc2V0V2lkdGg7XG4gICAgdmFyIHJlY3QgPSB0aGlzLiQuc2xpZGVyQmFyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciByYXRpbyA9IChldmVudC5kZXRhaWwueCAtIHJlY3QubGVmdCkgLyB0aGlzLl93ICogMTAwO1xuICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgcmF0aW8gPSAxMDAgLSByYXRpbztcbiAgICB9XG4gICAgdmFyIHByZXZSYXRpbyA9IHRoaXMucmF0aW87XG5cbiAgICB0aGlzLl9zZXRUcmFuc2l0aW5nKHRydWUpO1xuICAgIHRoaXMuX3Bvc2l0aW9uS25vYihyYXRpbyk7XG5cbiAgICAvLyBpZiB0aGUgcmF0aW8gZG9lc24ndCBjaGFuZ2UsIHNsaWRlcktub2IncyBhbmltYXRpb24gd29uJ3Qgc3RhcnRcbiAgICAvLyBhbmQgYF9rbm9iVHJhbnNpdGlvbkVuZGAgd29uJ3QgYmUgY2FsbGVkXG4gICAgLy8gVGhlcmVmb3JlLCB3ZSBuZWVkIHRvIG1hbnVhbGx5IHVwZGF0ZSB0aGUgYHRyYW5zaXRpbmdgIHN0YXRlXG4gICAgaWYgKHByZXZSYXRpbyA9PT0gdGhpcy5yYXRpbykge1xuICAgICAgdGhpcy5fc2V0VHJhbnNpdGluZyhmYWxzZSk7XG4gICAgfVxuXG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuZmlyZSgnY2hhbmdlJywge2NvbXBvc2VkOiB0cnVlfSk7XG4gICAgfSk7XG5cbiAgICAvLyBjYW5jZWwgc2VsZWN0aW9uXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIC8vIHNldCB0aGUgZm9jdXMgbWFudWFsbHkgYmVjYXVzZSB3ZSB3aWxsIGNhbGxlZCBwcmV2ZW50IGRlZmF1bHRcbiAgICB0aGlzLmZvY3VzKCk7XG4gIH0sXG5cbiAgX2JhcmRvd246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2FsbG93QmFyRXZlbnQoZXZlbnQpKSB7XG4gICAgICB0aGlzLmRlYm91bmNlKCdleHBhbmRLbm9iJywgdGhpcy5fZXhwYW5kS25vYiwgNjApO1xuICAgICAgdGhpcy5fYmFyY2xpY2soZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICBfa25vYlRyYW5zaXRpb25FbmQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LnRhcmdldCA9PT0gdGhpcy4kLnNsaWRlcktub2IpIHtcbiAgICAgIHRoaXMuX3NldFRyYW5zaXRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfSxcblxuICBfdXBkYXRlTWFya2VyczogZnVuY3Rpb24obWF4TWFya2VycywgbWluLCBtYXgsIHNuYXBzKSB7XG4gICAgaWYgKCFzbmFwcykge1xuICAgICAgdGhpcy5fc2V0TWFya2VycyhbXSk7XG4gICAgfVxuICAgIHZhciBzdGVwcyA9IE1hdGgucm91bmQoKG1heCAtIG1pbikgLyB0aGlzLnN0ZXApO1xuICAgIGlmIChzdGVwcyA+IG1heE1hcmtlcnMpIHtcbiAgICAgIHN0ZXBzID0gbWF4TWFya2VycztcbiAgICB9XG4gICAgaWYgKHN0ZXBzIDwgMCB8fCAhaXNGaW5pdGUoc3RlcHMpKSB7XG4gICAgICBzdGVwcyA9IDA7XG4gICAgfVxuICAgIHRoaXMuX3NldE1hcmtlcnMobmV3IEFycmF5KHN0ZXBzKSk7XG4gIH0sXG5cbiAgX21lcmdlQ2xhc3NlczogZnVuY3Rpb24oY2xhc3Nlcykge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyhjbGFzc2VzKVxuICAgICAgICAuZmlsdGVyKGZ1bmN0aW9uKGNsYXNzTmFtZSkge1xuICAgICAgICAgIHJldHVybiBjbGFzc2VzW2NsYXNzTmFtZV07XG4gICAgICAgIH0pXG4gICAgICAgIC5qb2luKCcgJyk7XG4gIH0sXG5cbiAgX2dldENsYXNzTmFtZXM6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9tZXJnZUNsYXNzZXMoe1xuICAgICAgZGlzYWJsZWQ6IHRoaXMuZGlzYWJsZWQsXG4gICAgICBwaW46IHRoaXMucGluLFxuICAgICAgc25hcHM6IHRoaXMuc25hcHMsXG4gICAgICByaW5nOiB0aGlzLmltbWVkaWF0ZVZhbHVlIDw9IHRoaXMubWluLFxuICAgICAgZXhwYW5kOiB0aGlzLmV4cGFuZCxcbiAgICAgIGRyYWdnaW5nOiB0aGlzLmRyYWdnaW5nLFxuICAgICAgdHJhbnNpdGluZzogdGhpcy50cmFuc2l0aW5nLFxuICAgICAgZWRpdGFibGU6IHRoaXMuZWRpdGFibGVcbiAgICB9KTtcbiAgfSxcblxuICBfYWxsb3dCYXJFdmVudDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICByZXR1cm4gKFxuICAgICAgICAhdGhpcy5pZ25vcmVCYXJUb3VjaCB8fFxuICAgICAgICAoZXZlbnQuZGV0YWlsLnNvdXJjZUV2ZW50IGluc3RhbmNlb2YgTW91c2VFdmVudCkpXG4gIH0sXG5cbiAgZ2V0IF9pc1JUTCgpIHtcbiAgICBpZiAodGhpcy5fX2lzUlRMID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX19pc1JUTCA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKHRoaXMpWydkaXJlY3Rpb24nXSA9PT0gJ3J0bCc7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9faXNSVEw7XG4gIH0sXG5cbiAgX2xlZnRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUlRMKVxuICAgICAgdGhpcy5faW5jcmVtZW50S2V5KGV2ZW50KTtcbiAgICBlbHNlXG4gICAgICB0aGlzLl9kZWNyZW1lbnRLZXkoZXZlbnQpO1xuICB9LFxuXG4gIF9yaWdodEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5faXNSVEwpXG4gICAgICB0aGlzLl9kZWNyZW1lbnRLZXkoZXZlbnQpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX2luY3JlbWVudEtleShldmVudCk7XG4gIH0sXG5cbiAgX2luY3JlbWVudEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGlmIChldmVudC5kZXRhaWwua2V5ID09PSAnZW5kJykge1xuICAgICAgICB0aGlzLnZhbHVlID0gdGhpcy5tYXg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmluY3JlbWVudCgpO1xuICAgICAgfVxuICAgICAgdGhpcy5maXJlKCdjaGFuZ2UnKTtcbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuXG4gIF9kZWNyZW1lbnRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkKSB7XG4gICAgICBpZiAoZXZlbnQuZGV0YWlsLmtleSA9PT0gJ2hvbWUnKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB0aGlzLm1pbjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuZGVjcmVtZW50KCk7XG4gICAgICB9XG4gICAgICB0aGlzLmZpcmUoJ2NoYW5nZScpO1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0sXG5cbiAgX2NoYW5nZVZhbHVlOiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMudmFsdWUgPSBldmVudC50YXJnZXQudmFsdWU7XG4gICAgdGhpcy5maXJlKCdjaGFuZ2UnLCB7Y29tcG9zZWQ6IHRydWV9KTtcbiAgfSxcblxuICBfaW5wdXRLZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIC8vIGNyZWF0ZSB0aGUgZWxlbWVudCByaXBwbGUgaW5zaWRlIHRoZSBgc2xpZGVyS25vYmBcbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmlwcGxlQ29udGFpbmVyID0gdGhpcy4kLnNsaWRlcktub2I7XG4gICAgcmV0dXJuIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsLl9jcmVhdGVSaXBwbGUuY2FsbCh0aGlzKTtcbiAgfSxcblxuICAvLyBIaWRlIHRoZSByaXBwbGUgd2hlbiB1c2VyIGlzIG5vdCBpbnRlcmFjdGluZyB3aXRoIGtleWJvYXJkLlxuICAvLyBUaGlzIGJlaGF2aW9yIGlzIGRpZmZlcmVudCBmcm9tIG90aGVyIHJpcHBsZS15IGNvbnRyb2xzLCBidXQgaXNcbiAgLy8gYWNjb3JkaW5nIHRvIHNwZWM6XG4gIC8vIGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zbGlkZXJzLmh0bWxcbiAgX2ZvY3VzZWRDaGFuZ2VkOiBmdW5jdGlvbihyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSB7XG4gICAgaWYgKHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQpIHtcbiAgICAgIHRoaXMuZW5zdXJlUmlwcGxlKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmhhc1JpcHBsZSgpKSB7XG4gICAgICAvLyBub3RlLCByaXBwbGUgbXVzdCBiZSB1bi1oaWRkZW4gcHJpb3IgdG8gc2V0dGluZyBgaG9sZERvd25gXG4gICAgICBpZiAocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgICAgICB0aGlzLl9yaXBwbGUuc3R5bGUuZGlzcGxheSA9ICcnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICB9XG4gICAgICB0aGlzLl9yaXBwbGUuaG9sZERvd24gPSByZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkO1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgc2xpZGVyJ3MgdmFsdWUgY2hhbmdlcy5cbiAgICpcbiAgICogQGV2ZW50IHZhbHVlLWNoYW5nZVxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgc2xpZGVyJ3MgaW1tZWRpYXRlVmFsdWUgY2hhbmdlcy4gT25seSBvY2N1cnMgd2hpbGUgdGhlXG4gICAqIHVzZXIgaXMgZHJhZ2dpbmcuXG4gICAqXG4gICAqIFRvIGRldGVjdCBjaGFuZ2VzIHRvIGltbWVkaWF0ZVZhbHVlIHRoYXQgaGFwcGVuIGZvciBhbnkgaW5wdXQgKGkuZS5cbiAgICogZHJhZ2dpbmcsIHRhcHBpbmcsIGNsaWNraW5nLCBldGMuKSBsaXN0ZW4gZm9yIGltbWVkaWF0ZS12YWx1ZS1jaGFuZ2VkXG4gICAqIGluc3RlYWQuXG4gICAqXG4gICAqIEBldmVudCBpbW1lZGlhdGUtdmFsdWUtY2hhbmdlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBzbGlkZXIncyB2YWx1ZSBjaGFuZ2VzIGR1ZSB0byB1c2VyIGludGVyYWN0aW9uLlxuICAgKlxuICAgKiBDaGFuZ2VzIHRvIHRoZSBzbGlkZXIncyB2YWx1ZSBkdWUgdG8gY2hhbmdlcyBpbiBhbiB1bmRlcmx5aW5nXG4gICAqIGJvdW5kIHZhcmlhYmxlIHdpbGwgbm90IHRyaWdnZXIgdGhpcyBldmVudC5cbiAgICpcbiAgICogQGV2ZW50IGNoYW5nZVxuICAgKi9cbn0pO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkTWV0aG9kcyh3b3JrZXIsIG1ldGhvZHMpIHtcblx0bGV0IGMgPSAwO1xuXHRsZXQgY2FsbGJhY2tzID0ge307XG5cdHdvcmtlci5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgKGUpID0+IHtcblx0XHRsZXQgZCA9IGUuZGF0YTtcblx0XHRpZiAoZC50eXBlIT09J1JQQycpIHJldHVybjtcblx0XHRpZiAoZC5pZCkge1xuXHRcdFx0bGV0IGYgPSBjYWxsYmFja3NbZC5pZF07XG5cdFx0XHRpZiAoZikge1xuXHRcdFx0XHRkZWxldGUgY2FsbGJhY2tzW2QuaWRdO1xuXHRcdFx0XHRpZiAoZC5lcnJvcikge1xuXHRcdFx0XHRcdGZbMV0oT2JqZWN0LmFzc2lnbihFcnJvcihkLmVycm9yLm1lc3NhZ2UpLCBkLmVycm9yKSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxzZSB7XG5cdFx0XHRcdFx0ZlswXShkLnJlc3VsdCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZWxzZSB7XG5cdFx0XHRsZXQgZXZ0ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ0V2ZW50Jyk7XG5cdFx0XHRldnQuaW5pdEV2ZW50KGQubWV0aG9kLCBmYWxzZSwgZmFsc2UpO1xuXHRcdFx0ZXZ0LmRhdGEgPSBkLnBhcmFtcztcblx0XHRcdHdvcmtlci5kaXNwYXRjaEV2ZW50KGV2dCk7XG5cdFx0fVxuXHR9KTtcblx0bWV0aG9kcy5mb3JFYWNoKCBtZXRob2QgPT4ge1xuXHRcdHdvcmtlclttZXRob2RdID0gKC4uLnBhcmFtcykgPT4gbmV3IFByb21pc2UoIChhLCBiKSA9PiB7XG5cdFx0XHRsZXQgaWQgPSArK2M7XG5cdFx0XHRjYWxsYmFja3NbaWRdID0gW2EsIGJdO1xuXHRcdFx0d29ya2VyLnBvc3RNZXNzYWdlKHsgdHlwZTogJ1JQQycsIGlkLCBtZXRob2QsIHBhcmFtcyB9KTtcblx0XHR9KTtcblx0fSk7XG59XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekJBO0FBNEJBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzRUE7QUE4RUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUN2R0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7OztBQU9BO0FBRUE7QUFFQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBekJBO0FBNEJBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBekVBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7QUFNQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTtBQTZCQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3JEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUxBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFaQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5GQTs7Ozs7Ozs7Ozs7O0FDclBBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEwRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQXVLQTtBQUNBO0FBRUE7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQXBCQTtBQTRCQTtBQUdBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXhQQTs7Ozs7Ozs7Ozs7O0FDNUZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWtTQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQTtBQUVBO0FBRUE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQW5HQTtBQTRHQTtBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFUQTtBQVdBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBVUE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7Ozs7Ozs7QUFXQTs7Ozs7Ozs7O0FBamRBOzs7Ozs7Ozs7OztBQzFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUlBOzs7QUFSQTtBQWFBO0FBQ0E7QUFDQTtBQUNBOztBQW5CQTtBQXNCQTtBQUNBOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUFBO0FBREE7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==