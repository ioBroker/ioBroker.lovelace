(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~onboarding-core-config"],{

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

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js ***!
  \***************************************************************************/
/*! exports provided: IronMenubarBehaviorImpl, IronMenubarBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehaviorImpl", function() { return IronMenubarBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenubarBehavior", function() { return IronMenubarBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
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
 * `IronMenubarBehavior` implements accessible menubar behavior.
 *
 * @polymerBehavior IronMenubarBehavior
 */

const IronMenubarBehaviorImpl = {
  hostAttributes: {
    'role': 'menubar'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'left': '_onLeftKey',
    'right': '_onRightKey'
  },
  _onUpKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },
  _onDownKey: function (event) {
    this.focusedItem.click();
    event.detail.keyboardEvent.preventDefault();
  },

  get _isRTL() {
    return window.getComputedStyle(this)['direction'] === 'rtl';
  },

  _onLeftKey: function (event) {
    if (this._isRTL) {
      this._focusNext();
    } else {
      this._focusPrevious();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onRightKey: function (event) {
    if (this._isRTL) {
      this._focusPrevious();
    } else {
      this._focusNext();
    }

    event.detail.keyboardEvent.preventDefault();
  },
  _onKeydown: function (event) {
    if (this.keyboardEventMatchesKeys(event, 'up down left right esc')) {
      return;
    } // all other keys focus the menu item starting with that character


    this._focusWithKeyboardEvent(event);
  }
};
/** @polymerBehavior */

const IronMenubarBehavior = [_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronMenuBehavior"], IronMenubarBehaviorImpl];

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

/***/ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js ***!
  \****************************************************************************/
/*! exports provided: PaperInkyFocusBehaviorImpl, PaperInkyFocusBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehaviorImpl", function() { return PaperInkyFocusBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperInkyFocusBehavior", function() { return PaperInkyFocusBehavior; });
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




/**
 * `PaperInkyFocusBehavior` implements a ripple when the element has keyboard
 * focus.
 *
 * @polymerBehavior PaperInkyFocusBehavior
 */

const PaperInkyFocusBehaviorImpl = {
  observers: ['_focusedChanged(receivedFocusFromKeyboard)'],
  _focusedChanged: function (receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }

    if (this.hasRipple()) {
      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  },
  _createRipple: function () {
    var ripple = _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._createRipple();

    ripple.id = 'ink';
    ripple.setAttribute('center', '');
    ripple.classList.add('circle');
    return ripple;
  }
};
/** @polymerBehavior */

const PaperInkyFocusBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"], PaperInkyFocusBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js ***!
  \************************************************************************/
/*! exports provided: PaperRippleBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperRippleBehavior", function() { return PaperRippleBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
 * `PaperRippleBehavior` dynamically implements a ripple when the element has
 * focus via pointer or keyboard.
 *
 * NOTE: This behavior is intended to be used in conjunction with and after
 * `IronButtonState` and `IronControlState`.
 *
 * @polymerBehavior PaperRippleBehavior
 */

const PaperRippleBehavior = {
  properties: {
    /**
     * If true, the element will not produce a ripple effect when interacted
     * with via the pointer.
     */
    noink: {
      type: Boolean,
      observer: '_noinkChanged'
    },

    /**
     * @type {Element|undefined}
     */
    _rippleContainer: {
      type: Object
    }
  },

  /**
   * Ensures a `<paper-ripple>` element is available when the element is
   * focused.
   */
  _buttonStateChanged: function () {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function (event) {
    _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_2__["IronButtonStateImpl"]._downHandler.call(this, event);

    if (this.pressed) {
      this.ensureRipple(event);
    }
  },

  /**
   * Ensures this element contains a ripple effect. For startup efficiency
   * the ripple effect is dynamically on demand when needed.
   * @param {!Event=} optTriggeringEvent (optional) event that triggered the
   * ripple.
   */
  ensureRipple: function (optTriggeringEvent) {
    if (!this.hasRipple()) {
      this._ripple = this._createRipple();
      this._ripple.noink = this.noink;
      var rippleContainer = this._rippleContainer || this.root;

      if (rippleContainer) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(rippleContainer).appendChild(this._ripple);
      }

      if (optTriggeringEvent) {
        // Check if the event happened inside of the ripple container
        // Fall back to host instead of the root because distributed text
        // nodes are not valid event targets
        var domContainer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this._rippleContainer || this);
        var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(optTriggeringEvent).rootTarget;

        if (domContainer.deepContains(
        /** @type {Node} */
        target)) {
          this._ripple.uiDownAction(optTriggeringEvent);
        }
      }
    }
  },

  /**
   * Returns the `<paper-ripple>` element used by this element to create
   * ripple effects. The element's ripple is created on demand, when
   * necessary, and calling this method will force the
   * ripple to be created.
   */
  getRipple: function () {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function () {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function () {
    var element =
    /** @type {!PaperRippleElement} */
    document.createElement('paper-ripple');
    return element;
  },
  _noinkChanged: function (noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-button/paper-radio-button.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-checked-element-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-checked-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







const template = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
<style>
  :host {
    display: inline-block;
    line-height: 0;
    white-space: nowrap;
    cursor: pointer;
    @apply --paper-font-common-base;
    --calculated-paper-radio-button-size: var(--paper-radio-button-size, 16px);
    /* -1px is a sentinel for the default and is replace in \`attached\`. */
    --calculated-paper-radio-button-ink-size: var(--paper-radio-button-ink-size, -1px);
  }

  :host(:focus) {
    outline: none;
  }

  #radioContainer {
    @apply --layout-inline;
    @apply --layout-center-center;
    position: relative;
    width: var(--calculated-paper-radio-button-size);
    height: var(--calculated-paper-radio-button-size);
    vertical-align: middle;

    @apply --paper-radio-button-radio-container;
  }

  #ink {
    position: absolute;
    top: 50%;
    left: 50%;
    right: auto;
    width: var(--calculated-paper-radio-button-ink-size);
    height: var(--calculated-paper-radio-button-ink-size);
    color: var(--paper-radio-button-unchecked-ink-color, var(--primary-text-color));
    opacity: 0.6;
    pointer-events: none;
    -webkit-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }

  #ink[checked] {
    color: var(--paper-radio-button-checked-ink-color, var(--primary-color));
  }

  #offRadio, #onRadio {
    position: absolute;
    box-sizing: border-box;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  #offRadio {
    border: 2px solid var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    background-color: var(--paper-radio-button-unchecked-background-color, transparent);
    transition: border-color 0.28s;
  }

  #onRadio {
    background-color: var(--paper-radio-button-checked-color, var(--primary-color));
    -webkit-transform: scale(0);
    transform: scale(0);
    transition: -webkit-transform ease 0.28s;
    transition: transform ease 0.28s;
    will-change: transform;
  }

  :host([checked]) #offRadio {
    border-color: var(--paper-radio-button-checked-color, var(--primary-color));
  }

  :host([checked]) #onRadio {
    -webkit-transform: scale(0.5);
    transform: scale(0.5);
  }

  #radioLabel {
    line-height: normal;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    margin-left: var(--paper-radio-button-label-spacing, 10px);
    white-space: normal;
    color: var(--paper-radio-button-label-color, var(--primary-text-color));

    @apply --paper-radio-button-label;
  }

  :host([checked]) #radioLabel {
    @apply --paper-radio-button-label-checked;
  }

  #radioLabel:dir(rtl) {
    margin-left: 0;
    margin-right: var(--paper-radio-button-label-spacing, 10px);
  }

  #radioLabel[hidden] {
    display: none;
  }

  /* disabled state */

  :host([disabled]) #offRadio {
    border-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled][checked]) #onRadio {
    background-color: var(--paper-radio-button-unchecked-color, var(--primary-text-color));
    opacity: 0.5;
  }

  :host([disabled]) #radioLabel {
    /* slightly darker than the button, so that it's readable */
    opacity: 0.65;
  }
</style>

<div id="radioContainer">
  <div id="offRadio"></div>
  <div id="onRadio"></div>
</div>

<div id="radioLabel"><slot></slot></div>`;
template.setAttribute('strip-whitespace', '');
/**
Material design: [Radio button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-button` is a button that can be either checked or unchecked. The
user can tap the radio button to check or uncheck it.

Use a `<paper-radio-group>` to group a set of radio buttons. When radio buttons
are inside a radio group, exactly one radio button in the group can be checked
at any time.

Example:

    <paper-radio-button></paper-radio-button>
    <paper-radio-button>Item label</paper-radio-button>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-button-unchecked-background-color` | Radio button background color when the input is not checked | `transparent`
`--paper-radio-button-unchecked-color` | Radio button color when the input is not checked | `--primary-text-color`
`--paper-radio-button-unchecked-ink-color` | Selected/focus ripple color when the input is not checked | `--primary-text-color`
`--paper-radio-button-checked-color` | Radio button color when the input is checked | `--primary-color`
`--paper-radio-button-checked-ink-color` | Selected/focus ripple color when the input is checked | `--primary-color`
`--paper-radio-button-size` | Size of the radio button | `16px`
`--paper-radio-button-ink-size` | Size of the ripple | `48px`
`--paper-radio-button-label-color` | Label color | `--primary-text-color`
`--paper-radio-button-label-spacing` | Spacing between the label and the button | `10px`
`--paper-radio-button-radio-container` | A mixin applied to the internal radio container | `{}`
`--paper-radio-button-label` | A mixin applied to the internal label | `{}`
`--paper-radio-button-label-checked` | A mixin applied to the internal label when the radio button is checked | `{}`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-radio-button
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: template,
  is: 'paper-radio-button',
  behaviors: [_polymer_paper_behaviors_paper_checked_element_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperCheckedElementBehavior"]],
  hostAttributes: {
    role: 'radio',
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
  ready: function () {
    this._rippleContainer = this.$.radioContainer;
  },
  attached: function () {
    // Wait until styles have resolved to check for the default sentinel.
    // See polymer#4009 for more details.
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, function () {
      var inkSize = this.getComputedStyleValue('--calculated-paper-radio-button-ink-size').trim(); // If unset, compute and set the default `--paper-radio-button-ink-size`.

      if (inkSize === '-1px') {
        var size = parseFloat(this.getComputedStyleValue('--calculated-paper-radio-button-size').trim());
        var defaultInkSize = Math.floor(3 * size); // The button and ripple need to have the same parity so that their
        // centers align.

        if (defaultInkSize % 2 !== size % 2) {
          defaultInkSize++;
        }

        this.updateStyles({
          '--paper-radio-button-ink-size': defaultInkSize + 'px'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-radio-group/paper-radio-group.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-radio-group/paper-radio-group.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_paper_radio_button_paper_radio_button_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-radio-button/paper-radio-button.js */ "./node_modules/@polymer/paper-radio-button/paper-radio-button.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menubar-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menubar-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
Material design: [Radio
button](https://www.google.com/design/spec/components/selection-controls.html#selection-controls-radio-button)

`paper-radio-group` allows user to select at most one radio button from a set.
Checking one radio button that belongs to a radio group unchecks any
previously checked radio button within the same group. Use
`selected` to get or set the selected radio button.

The <paper-radio-buttons> inside the group must have the `name` attribute
set.

Example:

    <paper-radio-group selected="small">
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

Radio-button-groups can be made optional, and allow zero buttons to be selected:

    <paper-radio-group selected="small" allow-empty-selection>
      <paper-radio-button name="small">Small</paper-radio-button>
      <paper-radio-button name="medium">Medium</paper-radio-button>
      <paper-radio-button name="large">Large</paper-radio-button>
    </paper-radio-group>

See <a href="paper-radio-button">paper-radio-button</a> for more
information about `paper-radio-button`.


Custom property | Description | Default
----------------|-------------|----------
`--paper-radio-group-item-padding` | The padding of the item | `12px`

@group Paper Elements
@element paper-radio-group
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style>
      :host {
        display: inline-block;
      }

      :host ::slotted(*) {
        padding: var(--paper-radio-group-item-padding, 12px);
      }
    </style>

    <slot></slot>
`,
  is: 'paper-radio-group',
  behaviors: [_polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'radiogroup'
  },
  properties: {
    /**
     * Fired when the radio group selection changes.
     *
     * @event paper-radio-group-changed
     */

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    attrForSelected: {
      type: String,
      value: 'name'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectedAttribute: {
      type: String,
      value: 'checked'
    },

    /**
     * Overriden from Polymer.IronSelectableBehavior
     */
    selectable: {
      type: String,
      value: 'paper-radio-button'
    },

    /**
     * If true, radio-buttons can be deselected
     */
    allowEmptySelection: {
      type: Boolean,
      value: false
    }
  },

  /**
   * Selects the given value.
   */
  select: function (value) {
    var newItem = this._valueToItem(value);

    if (newItem && newItem.hasAttribute('disabled')) {
      return;
    }

    if (this.selected) {
      var oldItem = this._valueToItem(this.selected);

      if (this.selected == value) {
        // If deselecting is allowed we'll have to apply an empty selection.
        // Otherwise, we should force the selection to stay and make this
        // action a no-op.
        if (this.allowEmptySelection) {
          value = '';
        } else {
          if (oldItem) oldItem.checked = true;
          return;
        }
      }

      if (oldItem) oldItem.checked = false;
    }

    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_4__["IronSelectableBehavior"].select.apply(this, [value]);
    this.fire('paper-radio-group-changed');
  },
  _activateFocusedItem: function () {
    this._itemActivate(this._valueForItem(this.focusedItem), this.focusedItem);
  },
  _onUpKey: function (event) {
    this._focusPrevious();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onDownKey: function (event) {
    this._focusNext();

    event.preventDefault();

    this._activateFocusedItem();
  },
  _onLeftKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onLeftKey.apply(this, arguments);

    this._activateFocusedItem();
  },
  _onRightKey: function (event) {
    _polymer_iron_menu_behavior_iron_menubar_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronMenubarBehaviorImpl"]._onRightKey.apply(this, arguments);

    this._activateFocusedItem();
  }
});

/***/ }),

/***/ "./node_modules/google-timezones-json/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/google-timezones-json/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./timezones.json */ "./node_modules/google-timezones-json/timezones.json");

/***/ }),

/***/ "./node_modules/google-timezones-json/timezones.json":
/*!***********************************************************!*\
  !*** ./node_modules/google-timezones-json/timezones.json ***!
  \***********************************************************/
/*! exports provided: Pacific/Niue, Pacific/Pago_Pago, Pacific/Honolulu, Pacific/Rarotonga, Pacific/Tahiti, Pacific/Marquesas, America/Anchorage, Pacific/Gambier, America/Los_Angeles, America/Tijuana, America/Vancouver, America/Whitehorse, Pacific/Pitcairn, America/Dawson_Creek, America/Denver, America/Edmonton, America/Hermosillo, America/Mazatlan, America/Phoenix, America/Yellowknife, America/Belize, America/Chicago, America/Costa_Rica, America/El_Salvador, America/Guatemala, America/Managua, America/Mexico_City, America/Regina, America/Tegucigalpa, America/Winnipeg, Pacific/Galapagos, America/Bogota, America/Cancun, America/Cayman, America/Guayaquil, America/Havana, America/Iqaluit, America/Jamaica, America/Lima, America/Nassau, America/New_York, America/Panama, America/Port-au-Prince, America/Rio_Branco, America/Toronto, Pacific/Easter, America/Caracas, America/Asuncion, America/Barbados, America/Boa_Vista, America/Campo_Grande, America/Cuiaba, America/Curacao, America/Grand_Turk, America/Guyana, America/Halifax, America/La_Paz, America/Manaus, America/Martinique, America/Port_of_Spain, America/Porto_Velho, America/Puerto_Rico, America/Santo_Domingo, America/Thule, Atlantic/Bermuda, America/St_Johns, America/Araguaina, America/Argentina/Buenos_Aires, America/Bahia, America/Belem, America/Cayenne, America/Fortaleza, America/Godthab, America/Maceio, America/Miquelon, America/Montevideo, America/Paramaribo, America/Recife, America/Santiago, America/Sao_Paulo, Antarctica/Palmer, Antarctica/Rothera, Atlantic/Stanley, America/Noronha, Atlantic/South_Georgia, America/Scoresbysund, Atlantic/Azores, Atlantic/Cape_Verde, Africa/Abidjan, Africa/Accra, Africa/Bissau, Africa/Casablanca, Africa/El_Aaiun, Africa/Monrovia, America/Danmarkshavn, Atlantic/Canary, Atlantic/Faroe, Atlantic/Reykjavik, Etc/GMT, Europe/Dublin, Europe/Lisbon, Europe/London, Africa/Algiers, Africa/Ceuta, Africa/Lagos, Africa/Ndjamena, Africa/Tunis, Africa/Windhoek, Europe/Amsterdam, Europe/Andorra, Europe/Belgrade, Europe/Berlin, Europe/Brussels, Europe/Budapest, Europe/Copenhagen, Europe/Gibraltar, Europe/Luxembourg, Europe/Madrid, Europe/Malta, Europe/Monaco, Europe/Oslo, Europe/Paris, Europe/Prague, Europe/Rome, Europe/Stockholm, Europe/Tirane, Europe/Vienna, Europe/Warsaw, Europe/Zurich, Africa/Cairo, Africa/Johannesburg, Africa/Maputo, Africa/Tripoli, Asia/Amman, Asia/Beirut, Asia/Damascus, Asia/Gaza, Asia/Jerusalem, Asia/Nicosia, Europe/Athens, Europe/Bucharest, Europe/Chisinau, Europe/Helsinki, Europe/Istanbul, Europe/Kaliningrad, Europe/Kiev, Europe/Riga, Europe/Sofia, Europe/Tallinn, Europe/Vilnius, Africa/Khartoum, Africa/Nairobi, Antarctica/Syowa, Asia/Baghdad, Asia/Qatar, Asia/Riyadh, Europe/Minsk, Europe/Moscow, Asia/Tehran, Asia/Baku, Asia/Dubai, Asia/Tbilisi, Asia/Yerevan, Europe/Samara, Indian/Mahe, Indian/Mauritius, Indian/Reunion, Asia/Kabul, Antarctica/Mawson, Asia/Aqtau, Asia/Aqtobe, Asia/Ashgabat, Asia/Dushanbe, Asia/Karachi, Asia/Tashkent, Asia/Yekaterinburg, Indian/Kerguelen, Indian/Maldives, Asia/Calcutta, Asia/Colombo, Asia/Katmandu, Antarctica/Vostok, Asia/Almaty, Asia/Bishkek, Asia/Dhaka, Asia/Omsk, Asia/Thimphu, Indian/Chagos, Asia/Rangoon, Indian/Cocos, Antarctica/Davis, Asia/Bangkok, Asia/Hovd, Asia/Jakarta, Asia/Krasnoyarsk, Asia/Saigon, Asia/Ho_Chi_Minh, Indian/Christmas, Antarctica/Casey, Asia/Brunei, Asia/Choibalsan, Asia/Hong_Kong, Asia/Irkutsk, Asia/Kuala_Lumpur, Asia/Macau, Asia/Makassar, Asia/Manila, Asia/Shanghai, Asia/Singapore, Asia/Taipei, Asia/Ulaanbaatar, Australia/Perth, Asia/Pyongyang, Asia/Dili, Asia/Jayapura, Asia/Seoul, Asia/Tokyo, Asia/Yakutsk, Pacific/Palau, Australia/Adelaide, Australia/Darwin, Antarctica/DumontDUrville, Asia/Magadan, Asia/Vladivostok, Australia/Brisbane, Australia/Hobart, Australia/Sydney, Pacific/Chuuk, Pacific/Guam, Pacific/Port_Moresby, Pacific/Efate, Pacific/Guadalcanal, Pacific/Kosrae, Pacific/Norfolk, Pacific/Noumea, Pacific/Pohnpei, Asia/Kamchatka, Pacific/Auckland, Pacific/Fiji, Pacific/Funafuti, Pacific/Kwajalein, Pacific/Majuro, Pacific/Nauru, Pacific/Tarawa, Pacific/Wake, Pacific/Wallis, Pacific/Apia, Pacific/Enderbury, Pacific/Fakaofo, Pacific/Tongatapu, Pacific/Kiritimati, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"Pacific/Niue\":\"(GMT-11:00) Niue\",\"Pacific/Pago_Pago\":\"(GMT-11:00) Pago Pago\",\"Pacific/Honolulu\":\"(GMT-10:00) Hawaii Time\",\"Pacific/Rarotonga\":\"(GMT-10:00) Rarotonga\",\"Pacific/Tahiti\":\"(GMT-10:00) Tahiti\",\"Pacific/Marquesas\":\"(GMT-09:30) Marquesas\",\"America/Anchorage\":\"(GMT-09:00) Alaska Time\",\"Pacific/Gambier\":\"(GMT-09:00) Gambier\",\"America/Los_Angeles\":\"(GMT-08:00) Pacific Time\",\"America/Tijuana\":\"(GMT-08:00) Pacific Time - Tijuana\",\"America/Vancouver\":\"(GMT-08:00) Pacific Time - Vancouver\",\"America/Whitehorse\":\"(GMT-08:00) Pacific Time - Whitehorse\",\"Pacific/Pitcairn\":\"(GMT-08:00) Pitcairn\",\"America/Dawson_Creek\":\"(GMT-07:00) Mountain Time - Dawson Creek\",\"America/Denver\":\"(GMT-07:00) Mountain Time\",\"America/Edmonton\":\"(GMT-07:00) Mountain Time - Edmonton\",\"America/Hermosillo\":\"(GMT-07:00) Mountain Time - Hermosillo\",\"America/Mazatlan\":\"(GMT-07:00) Mountain Time - Chihuahua, Mazatlan\",\"America/Phoenix\":\"(GMT-07:00) Mountain Time - Arizona\",\"America/Yellowknife\":\"(GMT-07:00) Mountain Time - Yellowknife\",\"America/Belize\":\"(GMT-06:00) Belize\",\"America/Chicago\":\"(GMT-06:00) Central Time\",\"America/Costa_Rica\":\"(GMT-06:00) Costa Rica\",\"America/El_Salvador\":\"(GMT-06:00) El Salvador\",\"America/Guatemala\":\"(GMT-06:00) Guatemala\",\"America/Managua\":\"(GMT-06:00) Managua\",\"America/Mexico_City\":\"(GMT-06:00) Central Time - Mexico City\",\"America/Regina\":\"(GMT-06:00) Central Time - Regina\",\"America/Tegucigalpa\":\"(GMT-06:00) Central Time - Tegucigalpa\",\"America/Winnipeg\":\"(GMT-06:00) Central Time - Winnipeg\",\"Pacific/Galapagos\":\"(GMT-06:00) Galapagos\",\"America/Bogota\":\"(GMT-05:00) Bogota\",\"America/Cancun\":\"(GMT-05:00) America Cancun\",\"America/Cayman\":\"(GMT-05:00) Cayman\",\"America/Guayaquil\":\"(GMT-05:00) Guayaquil\",\"America/Havana\":\"(GMT-05:00) Havana\",\"America/Iqaluit\":\"(GMT-05:00) Eastern Time - Iqaluit\",\"America/Jamaica\":\"(GMT-05:00) Jamaica\",\"America/Lima\":\"(GMT-05:00) Lima\",\"America/Nassau\":\"(GMT-05:00) Nassau\",\"America/New_York\":\"(GMT-05:00) Eastern Time\",\"America/Panama\":\"(GMT-05:00) Panama\",\"America/Port-au-Prince\":\"(GMT-05:00) Port-au-Prince\",\"America/Rio_Branco\":\"(GMT-05:00) Rio Branco\",\"America/Toronto\":\"(GMT-05:00) Eastern Time - Toronto\",\"Pacific/Easter\":\"(GMT-05:00) Easter Island\",\"America/Caracas\":\"(GMT-04:30) Caracas\",\"America/Asuncion\":\"(GMT-03:00) Asuncion\",\"America/Barbados\":\"(GMT-04:00) Barbados\",\"America/Boa_Vista\":\"(GMT-04:00) Boa Vista\",\"America/Campo_Grande\":\"(GMT-03:00) Campo Grande\",\"America/Cuiaba\":\"(GMT-03:00) Cuiaba\",\"America/Curacao\":\"(GMT-04:00) Curacao\",\"America/Grand_Turk\":\"(GMT-04:00) Grand Turk\",\"America/Guyana\":\"(GMT-04:00) Guyana\",\"America/Halifax\":\"(GMT-04:00) Atlantic Time - Halifax\",\"America/La_Paz\":\"(GMT-04:00) La Paz\",\"America/Manaus\":\"(GMT-04:00) Manaus\",\"America/Martinique\":\"(GMT-04:00) Martinique\",\"America/Port_of_Spain\":\"(GMT-04:00) Port of Spain\",\"America/Porto_Velho\":\"(GMT-04:00) Porto Velho\",\"America/Puerto_Rico\":\"(GMT-04:00) Puerto Rico\",\"America/Santo_Domingo\":\"(GMT-04:00) Santo Domingo\",\"America/Thule\":\"(GMT-04:00) Thule\",\"Atlantic/Bermuda\":\"(GMT-04:00) Bermuda\",\"America/St_Johns\":\"(GMT-03:30) Newfoundland Time - St. Johns\",\"America/Araguaina\":\"(GMT-03:00) Araguaina\",\"America/Argentina/Buenos_Aires\":\"(GMT-03:00) Buenos Aires\",\"America/Bahia\":\"(GMT-03:00) Salvador\",\"America/Belem\":\"(GMT-03:00) Belem\",\"America/Cayenne\":\"(GMT-03:00) Cayenne\",\"America/Fortaleza\":\"(GMT-03:00) Fortaleza\",\"America/Godthab\":\"(GMT-03:00) Godthab\",\"America/Maceio\":\"(GMT-03:00) Maceio\",\"America/Miquelon\":\"(GMT-03:00) Miquelon\",\"America/Montevideo\":\"(GMT-03:00) Montevideo\",\"America/Paramaribo\":\"(GMT-03:00) Paramaribo\",\"America/Recife\":\"(GMT-03:00) Recife\",\"America/Santiago\":\"(GMT-03:00) Santiago\",\"America/Sao_Paulo\":\"(GMT-02:00) Sao Paulo\",\"Antarctica/Palmer\":\"(GMT-03:00) Palmer\",\"Antarctica/Rothera\":\"(GMT-03:00) Rothera\",\"Atlantic/Stanley\":\"(GMT-03:00) Stanley\",\"America/Noronha\":\"(GMT-02:00) Noronha\",\"Atlantic/South_Georgia\":\"(GMT-02:00) South Georgia\",\"America/Scoresbysund\":\"(GMT-01:00) Scoresbysund\",\"Atlantic/Azores\":\"(GMT-01:00) Azores\",\"Atlantic/Cape_Verde\":\"(GMT-01:00) Cape Verde\",\"Africa/Abidjan\":\"(GMT+00:00) Abidjan\",\"Africa/Accra\":\"(GMT+00:00) Accra\",\"Africa/Bissau\":\"(GMT+00:00) Bissau\",\"Africa/Casablanca\":\"(GMT+00:00) Casablanca\",\"Africa/El_Aaiun\":\"(GMT+00:00) El Aaiun\",\"Africa/Monrovia\":\"(GMT+00:00) Monrovia\",\"America/Danmarkshavn\":\"(GMT+00:00) Danmarkshavn\",\"Atlantic/Canary\":\"(GMT+00:00) Canary Islands\",\"Atlantic/Faroe\":\"(GMT+00:00) Faeroe\",\"Atlantic/Reykjavik\":\"(GMT+00:00) Reykjavik\",\"Etc/GMT\":\"(GMT+00:00) GMT (no daylight saving)\",\"Europe/Dublin\":\"(GMT+00:00) Dublin\",\"Europe/Lisbon\":\"(GMT+00:00) Lisbon\",\"Europe/London\":\"(GMT+00:00) London\",\"Africa/Algiers\":\"(GMT+01:00) Algiers\",\"Africa/Ceuta\":\"(GMT+01:00) Ceuta\",\"Africa/Lagos\":\"(GMT+01:00) Lagos\",\"Africa/Ndjamena\":\"(GMT+01:00) Ndjamena\",\"Africa/Tunis\":\"(GMT+01:00) Tunis\",\"Africa/Windhoek\":\"(GMT+02:00) Windhoek\",\"Europe/Amsterdam\":\"(GMT+01:00) Amsterdam\",\"Europe/Andorra\":\"(GMT+01:00) Andorra\",\"Europe/Belgrade\":\"(GMT+01:00) Central European Time - Belgrade\",\"Europe/Berlin\":\"(GMT+01:00) Berlin\",\"Europe/Brussels\":\"(GMT+01:00) Brussels\",\"Europe/Budapest\":\"(GMT+01:00) Budapest\",\"Europe/Copenhagen\":\"(GMT+01:00) Copenhagen\",\"Europe/Gibraltar\":\"(GMT+01:00) Gibraltar\",\"Europe/Luxembourg\":\"(GMT+01:00) Luxembourg\",\"Europe/Madrid\":\"(GMT+01:00) Madrid\",\"Europe/Malta\":\"(GMT+01:00) Malta\",\"Europe/Monaco\":\"(GMT+01:00) Monaco\",\"Europe/Oslo\":\"(GMT+01:00) Oslo\",\"Europe/Paris\":\"(GMT+01:00) Paris\",\"Europe/Prague\":\"(GMT+01:00) Central European Time - Prague\",\"Europe/Rome\":\"(GMT+01:00) Rome\",\"Europe/Stockholm\":\"(GMT+01:00) Stockholm\",\"Europe/Tirane\":\"(GMT+01:00) Tirane\",\"Europe/Vienna\":\"(GMT+01:00) Vienna\",\"Europe/Warsaw\":\"(GMT+01:00) Warsaw\",\"Europe/Zurich\":\"(GMT+01:00) Zurich\",\"Africa/Cairo\":\"(GMT+02:00) Cairo\",\"Africa/Johannesburg\":\"(GMT+02:00) Johannesburg\",\"Africa/Maputo\":\"(GMT+02:00) Maputo\",\"Africa/Tripoli\":\"(GMT+02:00) Tripoli\",\"Asia/Amman\":\"(GMT+02:00) Amman\",\"Asia/Beirut\":\"(GMT+02:00) Beirut\",\"Asia/Damascus\":\"(GMT+02:00) Damascus\",\"Asia/Gaza\":\"(GMT+02:00) Gaza\",\"Asia/Jerusalem\":\"(GMT+02:00) Jerusalem\",\"Asia/Nicosia\":\"(GMT+02:00) Nicosia\",\"Europe/Athens\":\"(GMT+02:00) Athens\",\"Europe/Bucharest\":\"(GMT+02:00) Bucharest\",\"Europe/Chisinau\":\"(GMT+02:00) Chisinau\",\"Europe/Helsinki\":\"(GMT+02:00) Helsinki\",\"Europe/Istanbul\":\"(GMT+02:00) Istanbul\",\"Europe/Kaliningrad\":\"(GMT+02:00) Moscow-01 - Kaliningrad\",\"Europe/Kiev\":\"(GMT+02:00) Kiev\",\"Europe/Riga\":\"(GMT+02:00) Riga\",\"Europe/Sofia\":\"(GMT+02:00) Sofia\",\"Europe/Tallinn\":\"(GMT+02:00) Tallinn\",\"Europe/Vilnius\":\"(GMT+02:00) Vilnius\",\"Africa/Khartoum\":\"(GMT+03:00) Khartoum\",\"Africa/Nairobi\":\"(GMT+03:00) Nairobi\",\"Antarctica/Syowa\":\"(GMT+03:00) Syowa\",\"Asia/Baghdad\":\"(GMT+03:00) Baghdad\",\"Asia/Qatar\":\"(GMT+03:00) Qatar\",\"Asia/Riyadh\":\"(GMT+03:00) Riyadh\",\"Europe/Minsk\":\"(GMT+03:00) Minsk\",\"Europe/Moscow\":\"(GMT+03:00) Moscow+00 - Moscow\",\"Asia/Tehran\":\"(GMT+03:30) Tehran\",\"Asia/Baku\":\"(GMT+04:00) Baku\",\"Asia/Dubai\":\"(GMT+04:00) Dubai\",\"Asia/Tbilisi\":\"(GMT+04:00) Tbilisi\",\"Asia/Yerevan\":\"(GMT+04:00) Yerevan\",\"Europe/Samara\":\"(GMT+04:00) Moscow+01 - Samara\",\"Indian/Mahe\":\"(GMT+04:00) Mahe\",\"Indian/Mauritius\":\"(GMT+04:00) Mauritius\",\"Indian/Reunion\":\"(GMT+04:00) Reunion\",\"Asia/Kabul\":\"(GMT+04:30) Kabul\",\"Antarctica/Mawson\":\"(GMT+05:00) Mawson\",\"Asia/Aqtau\":\"(GMT+05:00) Aqtau\",\"Asia/Aqtobe\":\"(GMT+05:00) Aqtobe\",\"Asia/Ashgabat\":\"(GMT+05:00) Ashgabat\",\"Asia/Dushanbe\":\"(GMT+05:00) Dushanbe\",\"Asia/Karachi\":\"(GMT+05:00) Karachi\",\"Asia/Tashkent\":\"(GMT+05:00) Tashkent\",\"Asia/Yekaterinburg\":\"(GMT+05:00) Moscow+02 - Yekaterinburg\",\"Indian/Kerguelen\":\"(GMT+05:00) Kerguelen\",\"Indian/Maldives\":\"(GMT+05:00) Maldives\",\"Asia/Calcutta\":\"(GMT+05:30) India Standard Time\",\"Asia/Colombo\":\"(GMT+05:30) Colombo\",\"Asia/Katmandu\":\"(GMT+05:45) Katmandu\",\"Antarctica/Vostok\":\"(GMT+06:00) Vostok\",\"Asia/Almaty\":\"(GMT+06:00) Almaty\",\"Asia/Bishkek\":\"(GMT+06:00) Bishkek\",\"Asia/Dhaka\":\"(GMT+06:00) Dhaka\",\"Asia/Omsk\":\"(GMT+06:00) Moscow+03 - Omsk, Novosibirsk\",\"Asia/Thimphu\":\"(GMT+06:00) Thimphu\",\"Indian/Chagos\":\"(GMT+06:00) Chagos\",\"Asia/Rangoon\":\"(GMT+06:30) Rangoon\",\"Indian/Cocos\":\"(GMT+06:30) Cocos\",\"Antarctica/Davis\":\"(GMT+07:00) Davis\",\"Asia/Bangkok\":\"(GMT+07:00) Bangkok\",\"Asia/Hovd\":\"(GMT+07:00) Hovd\",\"Asia/Jakarta\":\"(GMT+07:00) Jakarta\",\"Asia/Krasnoyarsk\":\"(GMT+07:00) Moscow+04 - Krasnoyarsk\",\"Asia/Saigon\":\"(GMT+07:00) Hanoi\",\"Asia/Ho_Chi_Minh\":\"(GMT+07:00) Ho Chi Minh\",\"Indian/Christmas\":\"(GMT+07:00) Christmas\",\"Antarctica/Casey\":\"(GMT+08:00) Casey\",\"Asia/Brunei\":\"(GMT+08:00) Brunei\",\"Asia/Choibalsan\":\"(GMT+08:00) Choibalsan\",\"Asia/Hong_Kong\":\"(GMT+08:00) Hong Kong\",\"Asia/Irkutsk\":\"(GMT+08:00) Moscow+05 - Irkutsk\",\"Asia/Kuala_Lumpur\":\"(GMT+08:00) Kuala Lumpur\",\"Asia/Macau\":\"(GMT+08:00) Macau\",\"Asia/Makassar\":\"(GMT+08:00) Makassar\",\"Asia/Manila\":\"(GMT+08:00) Manila\",\"Asia/Shanghai\":\"(GMT+08:00) China Time - Beijing\",\"Asia/Singapore\":\"(GMT+08:00) Singapore\",\"Asia/Taipei\":\"(GMT+08:00) Taipei\",\"Asia/Ulaanbaatar\":\"(GMT+08:00) Ulaanbaatar\",\"Australia/Perth\":\"(GMT+08:00) Western Time - Perth\",\"Asia/Pyongyang\":\"(GMT+08:30) Pyongyang\",\"Asia/Dili\":\"(GMT+09:00) Dili\",\"Asia/Jayapura\":\"(GMT+09:00) Jayapura\",\"Asia/Seoul\":\"(GMT+09:00) Seoul\",\"Asia/Tokyo\":\"(GMT+09:00) Tokyo\",\"Asia/Yakutsk\":\"(GMT+09:00) Moscow+06 - Yakutsk\",\"Pacific/Palau\":\"(GMT+09:00) Palau\",\"Australia/Adelaide\":\"(GMT+10:30) Central Time - Adelaide\",\"Australia/Darwin\":\"(GMT+09:30) Central Time - Darwin\",\"Antarctica/DumontDUrville\":\"(GMT+10:00) Dumont D'Urville\",\"Asia/Magadan\":\"(GMT+10:00) Moscow+07 - Magadan\",\"Asia/Vladivostok\":\"(GMT+10:00) Moscow+07 - Yuzhno-Sakhalinsk\",\"Australia/Brisbane\":\"(GMT+10:00) Eastern Time - Brisbane\",\"Australia/Hobart\":\"(GMT+11:00) Eastern Time - Hobart\",\"Australia/Sydney\":\"(GMT+11:00) Eastern Time - Melbourne, Sydney\",\"Pacific/Chuuk\":\"(GMT+10:00) Truk\",\"Pacific/Guam\":\"(GMT+10:00) Guam\",\"Pacific/Port_Moresby\":\"(GMT+10:00) Port Moresby\",\"Pacific/Efate\":\"(GMT+11:00) Efate\",\"Pacific/Guadalcanal\":\"(GMT+11:00) Guadalcanal\",\"Pacific/Kosrae\":\"(GMT+11:00) Kosrae\",\"Pacific/Norfolk\":\"(GMT+11:00) Norfolk\",\"Pacific/Noumea\":\"(GMT+11:00) Noumea\",\"Pacific/Pohnpei\":\"(GMT+11:00) Ponape\",\"Asia/Kamchatka\":\"(GMT+12:00) Moscow+09 - Petropavlovsk-Kamchatskiy\",\"Pacific/Auckland\":\"(GMT+13:00) Auckland\",\"Pacific/Fiji\":\"(GMT+13:00) Fiji\",\"Pacific/Funafuti\":\"(GMT+12:00) Funafuti\",\"Pacific/Kwajalein\":\"(GMT+12:00) Kwajalein\",\"Pacific/Majuro\":\"(GMT+12:00) Majuro\",\"Pacific/Nauru\":\"(GMT+12:00) Nauru\",\"Pacific/Tarawa\":\"(GMT+12:00) Tarawa\",\"Pacific/Wake\":\"(GMT+12:00) Wake\",\"Pacific/Wallis\":\"(GMT+12:00) Wallis\",\"Pacific/Apia\":\"(GMT+14:00) Apia\",\"Pacific/Enderbury\":\"(GMT+13:00) Enderbury\",\"Pacific/Fakaofo\":\"(GMT+13:00) Fakaofo\",\"Pacific/Tongatapu\":\"(GMT+13:00) Tongatapu\",\"Pacific/Kiritimati\":\"(GMT+14:00) Kiritimati\"}");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35vbmJvYXJkaW5nLWNvcmUtY29uZmlnLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yL2lyb24tY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW1lbnUtYmVoYXZpb3IvaXJvbi1tZW51YmFyLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItcmFkaW8tZ3JvdXAvcGFwZXItcmFkaW8tZ3JvdXAuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2dvb2dsZS10aW1lem9uZXMtanNvbi9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkZvcm1FbGVtZW50QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yL2lyb24tZm9ybS1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblZhbGlkYXRhYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogVXNlIGBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5LCB3aGljaCBjYW4gYmUgdXNlZCBmb3IgdmFsaWRhdGlvbiBpZiB0aGUgZWxlbWVudCBpcyBhbHNvXG4gKiBgcmVxdWlyZWRgLiBFbGVtZW50IGluc3RhbmNlcyBpbXBsZW1lbnRpbmcgdGhpcyBiZWhhdmlvciB3aWxsIGFsc28gYmVcbiAqIHJlZ2lzdGVyZWQgZm9yIHVzZSBpbiBhbiBgaXJvbi1mb3JtYCBlbGVtZW50LlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uQ2hlY2tlZEVsZW1lbnRCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBGaXJlZCB3aGVuIHRoZSBjaGVja2VkIHN0YXRlIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgaXJvbi1jaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEdldHMgb3Igc2V0cyB0aGUgc3RhdGUsIGB0cnVlYCBpcyBjaGVja2VkIGFuZCBgZmFsc2VgIGlzIHVuY2hlY2tlZC5cbiAgICAgKi9cbiAgICBjaGVja2VkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfY2hlY2tlZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBidXR0b24gdG9nZ2xlcyB0aGUgYWN0aXZlIHN0YXRlIHdpdGggZWFjaCB0YXAgb3IgcHJlc3NcbiAgICAgKiBvZiB0aGUgc3BhY2ViYXIuXG4gICAgICovXG4gICAgdG9nZ2xlczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyogT3ZlcnJpZGVuIGZyb20gSXJvbkZvcm1FbGVtZW50QmVoYXZpb3IgKi9cbiAgICB2YWx1ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdvbicsIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCd9XG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19yZXF1aXJlZENoYW5nZWQocmVxdWlyZWQpJ10sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCBieSBgaXJvbi1mb3JtYCB0byBoYW5kbGUgdGhlIGNhc2UgdGhhdCBhbiBlbGVtZW50IHdpdGggdGhpcyBiZWhhdmlvclxuICAgIC8vIGRvZXNuJ3QgaGF2ZSBhIHJvbGUgb2YgJ2NoZWNrYm94JyBvciAncmFkaW8nLCBidXQgc2hvdWxkIHN0aWxsIG9ubHkgYmVcbiAgICAvLyBpbmNsdWRlZCB3aGVuIHRoZSBmb3JtIGlzIHNlcmlhbGl6ZWQgaWYgYHRoaXMuY2hlY2tlZCA9PT0gdHJ1ZWAuXG4gICAgdGhpcy5faGFzSXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBub3QgY2hlY2tlZCwgYW5kIHRydWVcbiAgICogb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlIG9yIGlmIGBjaGVja2VkYCBpcyB0cnVlLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCB0aGlzLmNoZWNrZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZSB0aGUgYXJpYS1yZXF1aXJlZCBsYWJlbCB3aGVuIGByZXF1aXJlZGAgaXMgY2hhbmdlZC5cbiAgICovXG4gIF9yZXF1aXJlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1yZXF1aXJlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLXJlcXVpcmVkJyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGaXJlIGBpcm9uLWNoYW5nZWRgIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICovXG4gIF9jaGVja2VkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSB0aGlzLmNoZWNrZWQ7XG4gICAgdGhpcy5maXJlKCdpcm9uLWNoYW5nZScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldCB2YWx1ZSB0byAnb24nIGlmIGl0IGlzIHNldCB0byBgdW5kZWZpbmVkYC5cbiAgICovXG4gIF92YWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnZhbHVlID09PSB1bmRlZmluZWQgfHwgdGhpcy52YWx1ZSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy52YWx1ZSA9ICdvbic7XG4gICAgfVxuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yID0gW1xuICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgSXJvblZhbGlkYXRhYmxlQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbFxuXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uTWVudUJlaGF2aW9yfSBmcm9tICcuL2lyb24tbWVudS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYElyb25NZW51YmFyQmVoYXZpb3JgIGltcGxlbWVudHMgYWNjZXNzaWJsZSBtZW51YmFyIGJlaGF2aW9yLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgSXJvbk1lbnViYXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnViYXJCZWhhdmlvckltcGwgPSB7XG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHsncm9sZSc6ICdtZW51YmFyJ30sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHsnbGVmdCc6ICdfb25MZWZ0S2V5JywgJ3JpZ2h0JzogJ19vblJpZ2h0S2V5J30sXG5cbiAgX29uVXBLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5mb2N1c2VkSXRlbS5jbGljaygpO1xuICAgIGV2ZW50LmRldGFpbC5rZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gIH0sXG5cbiAgX29uRG93bktleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLmZvY3VzZWRJdGVtLmNsaWNrKCk7XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBnZXQgX2lzUlRMKCkge1xuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKVsnZGlyZWN0aW9uJ10gPT09ICdydGwnO1xuICB9LFxuXG4gIF9vbkxlZnRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX2lzUlRMKSB7XG4gICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIH1cbiAgICBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIF9vblJpZ2h0S2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgdGhpcy5fZm9jdXNQcmV2aW91cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICB9XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBfb25LZXlkb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhldmVudCwgJ3VwIGRvd24gbGVmdCByaWdodCBlc2MnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGFsbCBvdGhlciBrZXlzIGZvY3VzIHRoZSBtZW51IGl0ZW0gc3RhcnRpbmcgd2l0aCB0aGF0IGNoYXJhY3RlclxuICAgIHRoaXMuX2ZvY3VzV2l0aEtleWJvYXJkRXZlbnQoZXZlbnQpO1xuICB9XG5cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnViYXJCZWhhdmlvciA9IFtJcm9uTWVudUJlaGF2aW9yLCBJcm9uTWVudWJhckJlaGF2aW9ySW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkNoZWNrZWRFbGVtZW50QmVoYXZpb3IsIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbH0gZnJvbSAnQHBvbHltZXIvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1jaGVja2VkLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQge1BhcGVySW5reUZvY3VzQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BhcGVyUmlwcGxlQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBVc2UgYFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGEgY3VzdG9tIGVsZW1lbnQgdGhhdCBoYXMgYVxuICogYGNoZWNrZWRgIHByb3BlcnR5IHNpbWlsYXIgdG8gYElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yYCBhbmQgaXMgY29tcGF0aWJsZVxuICogd2l0aCBoYXZpbmcgYSByaXBwbGUgZWZmZWN0LlxuICogQHBvbHltZXJCZWhhdmlvciBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyQ2hlY2tlZEVsZW1lbnRCZWhhdmlvckltcGwgPSB7XG4gIC8qKlxuICAgKiBTeW5jaHJvbml6ZXMgdGhlIGVsZW1lbnQncyBjaGVja2VkIHN0YXRlIHdpdGggaXRzIHJpcHBsZSBlZmZlY3QuXG4gICAqL1xuICBfY2hlY2tlZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9ySW1wbC5fY2hlY2tlZENoYW5nZWQuY2FsbCh0aGlzKTtcbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgaWYgKHRoaXMuY2hlY2tlZCkge1xuICAgICAgICB0aGlzLl9yaXBwbGUuc2V0QXR0cmlidXRlKCdjaGVja2VkJywgJycpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmlwcGxlLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU3luY2hyb25pemVzIHRoZSBlbGVtZW50J3MgYGFjdGl2ZWAgYW5kIGBjaGVja2VkYCBzdGF0ZS5cbiAgICovXG4gIF9idXR0b25TdGF0ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIFBhcGVyUmlwcGxlQmVoYXZpb3IuX2J1dHRvblN0YXRlQ2hhbmdlZC5jYWxsKHRoaXMpO1xuICAgIGlmICh0aGlzLmRpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHRoaXMuY2hlY2tlZCA9IHRoaXMuYWN0aXZlO1xuICAgIH1cbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3IgPSBbXG4gIFBhcGVySW5reUZvY3VzQmVoYXZpb3IsXG4gIElyb25DaGVja2VkRWxlbWVudEJlaGF2aW9yLFxuICBQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JJbXBsXG5dO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG5pbXBvcnQge1BhcGVyUmlwcGxlQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcmAgaW1wbGVtZW50cyBhIHJpcHBsZSB3aGVuIHRoZSBlbGVtZW50IGhhcyBrZXlib2FyZFxuICogZm9jdXMuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBQYXBlcklua3lGb2N1c0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlcklua3lGb2N1c0JlaGF2aW9ySW1wbCA9IHtcbiAgb2JzZXJ2ZXJzOiBbJ19mb2N1c2VkQ2hhbmdlZChyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSddLFxuXG4gIF9mb2N1c2VkQ2hhbmdlZDogZnVuY3Rpb24ocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgIGlmIChyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSB7XG4gICAgICB0aGlzLmVuc3VyZVJpcHBsZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgdGhpcy5fcmlwcGxlLmhvbGREb3duID0gcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZDtcbiAgICB9XG4gIH0sXG5cbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJpcHBsZSA9IFBhcGVyUmlwcGxlQmVoYXZpb3IuX2NyZWF0ZVJpcHBsZSgpO1xuICAgIHJpcHBsZS5pZCA9ICdpbmsnO1xuICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2NlbnRlcicsICcnKTtcbiAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlcklua3lGb2N1c0JlaGF2aW9yID0gW1xuICBJcm9uQnV0dG9uU3RhdGUsXG4gIElyb25Db250cm9sU3RhdGUsXG4gIFBhcGVyUmlwcGxlQmVoYXZpb3IsXG4gIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsXG5dO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlLmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGVJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gKiBgUGFwZXJSaXBwbGVCZWhhdmlvcmAgZHluYW1pY2FsbHkgaW1wbGVtZW50cyBhIHJpcHBsZSB3aGVuIHRoZSBlbGVtZW50IGhhc1xuICogZm9jdXMgdmlhIHBvaW50ZXIgb3Iga2V5Ym9hcmQuXG4gKlxuICogTk9URTogVGhpcyBiZWhhdmlvciBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYW5kIGFmdGVyXG4gKiBgSXJvbkJ1dHRvblN0YXRlYCBhbmQgYElyb25Db250cm9sU3RhdGVgLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJSaXBwbGVCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJSaXBwbGVCZWhhdmlvciA9IHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgbm90IHByb2R1Y2UgYSByaXBwbGUgZWZmZWN0IHdoZW4gaW50ZXJhY3RlZFxuICAgICAqIHdpdGggdmlhIHRoZSBwb2ludGVyLlxuICAgICAqL1xuICAgIG5vaW5rOiB7dHlwZTogQm9vbGVhbiwgb2JzZXJ2ZXI6ICdfbm9pbmtDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgX3JpcHBsZUNvbnRhaW5lcjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyBhIGA8cGFwZXItcmlwcGxlPmAgZWxlbWVudCBpcyBhdmFpbGFibGUgd2hlbiB0aGUgZWxlbWVudCBpc1xuICAgKiBmb2N1c2VkLlxuICAgKi9cbiAgX2J1dHRvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluIGFkZGl0aW9uIHRvIHRoZSBmdW5jdGlvbmFsaXR5IHByb3ZpZGVkIGluIGBJcm9uQnV0dG9uU3RhdGVgLCBlbnN1cmVzXG4gICAqIGEgcmlwcGxlIGVmZmVjdCBpcyBjcmVhdGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgaW4gYSBgcHJlc3NlZGAgc3RhdGUuXG4gICAqL1xuICBfZG93bkhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbkJ1dHRvblN0YXRlSW1wbC5fZG93bkhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgaWYgKHRoaXMucHJlc3NlZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyB0aGlzIGVsZW1lbnQgY29udGFpbnMgYSByaXBwbGUgZWZmZWN0LiBGb3Igc3RhcnR1cCBlZmZpY2llbmN5XG4gICAqIHRoZSByaXBwbGUgZWZmZWN0IGlzIGR5bmFtaWNhbGx5IG9uIGRlbWFuZCB3aGVuIG5lZWRlZC5cbiAgICogQHBhcmFtIHshRXZlbnQ9fSBvcHRUcmlnZ2VyaW5nRXZlbnQgKG9wdGlvbmFsKSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGVcbiAgICogcmlwcGxlLlxuICAgKi9cbiAgZW5zdXJlUmlwcGxlOiBmdW5jdGlvbihvcHRUcmlnZ2VyaW5nRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZSA9IHRoaXMuX2NyZWF0ZVJpcHBsZSgpO1xuICAgICAgdGhpcy5fcmlwcGxlLm5vaW5rID0gdGhpcy5ub2luaztcbiAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIgfHwgdGhpcy5yb290O1xuICAgICAgaWYgKHJpcHBsZUNvbnRhaW5lcikge1xuICAgICAgICBkb20ocmlwcGxlQ29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLl9yaXBwbGUpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdFRyaWdnZXJpbmdFdmVudCkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZXZlbnQgaGFwcGVuZWQgaW5zaWRlIG9mIHRoZSByaXBwbGUgY29udGFpbmVyXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBob3N0IGluc3RlYWQgb2YgdGhlIHJvb3QgYmVjYXVzZSBkaXN0cmlidXRlZCB0ZXh0XG4gICAgICAgIC8vIG5vZGVzIGFyZSBub3QgdmFsaWQgZXZlbnQgdGFyZ2V0c1xuICAgICAgICB2YXIgZG9tQ29udGFpbmVyID0gZG9tKHRoaXMuX3JpcHBsZUNvbnRhaW5lciB8fCB0aGlzKTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvbShvcHRUcmlnZ2VyaW5nRXZlbnQpLnJvb3RUYXJnZXQ7XG4gICAgICAgIGlmIChkb21Db250YWluZXIuZGVlcENvbnRhaW5zKC8qKiBAdHlwZSB7Tm9kZX0gKi8gKHRhcmdldCkpKSB7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlLnVpRG93bkFjdGlvbihvcHRUcmlnZ2VyaW5nRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgPHBhcGVyLXJpcHBsZT5gIGVsZW1lbnQgdXNlZCBieSB0aGlzIGVsZW1lbnQgdG8gY3JlYXRlXG4gICAqIHJpcHBsZSBlZmZlY3RzLiBUaGUgZWxlbWVudCdzIHJpcHBsZSBpcyBjcmVhdGVkIG9uIGRlbWFuZCwgd2hlblxuICAgKiBuZWNlc3NhcnksIGFuZCBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpbGwgZm9yY2UgdGhlXG4gICAqIHJpcHBsZSB0byBiZSBjcmVhdGVkLlxuICAgKi9cbiAgZ2V0UmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVuc3VyZVJpcHBsZSgpO1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGVsZW1lbnQgY3VycmVudGx5IGNvbnRhaW5zIGEgcmlwcGxlIGVmZmVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc1JpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fcmlwcGxlKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB2aWEgY3JlYXRpbmcgYSBgPHBhcGVyLXJpcHBsZT5gLlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjdXN0b21pemUgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshUGFwZXJSaXBwbGVFbGVtZW50fSBSZXR1cm5zIGEgYDxwYXBlci1yaXBwbGU+YCBlbGVtZW50LlxuICAgKi9cbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFQYXBlclJpcHBsZUVsZW1lbnR9ICovIChcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFwZXItcmlwcGxlJykpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuXG4gIF9ub2lua0NoYW5nZWQ6IGZ1bmN0aW9uKG5vaW5rKSB7XG4gICAgaWYgKHRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5ub2luayA9IG5vaW5rO1xuICAgIH1cbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0XG5UaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dFxuVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlIGZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0XG5Db2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhcyBwYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzb1xuc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudCBmb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UGFwZXJDaGVja2VkRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItY2hlY2tlZC1lbGVtZW50LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge2FmdGVyTmV4dFJlbmRlcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG5cbmNvbnN0IHRlbXBsYXRlID0gaHRtbGBcbjxzdHlsZT5cbiAgOmhvc3Qge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBsaW5lLWhlaWdodDogMDtcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlO1xuICAgIC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24tc2l6ZTogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLXNpemUsIDE2cHgpO1xuICAgIC8qIC0xcHggaXMgYSBzZW50aW5lbCBmb3IgdGhlIGRlZmF1bHQgYW5kIGlzIHJlcGxhY2UgaW4gXFxgYXR0YWNoZWRcXGAuICovXG4gICAgLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1pbmstc2l6ZTogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplLCAtMXB4KTtcbiAgfVxuXG4gIDpob3N0KDpmb2N1cykge1xuICAgIG91dGxpbmU6IG5vbmU7XG4gIH1cblxuICAjcmFkaW9Db250YWluZXIge1xuICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiB2YXIoLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplKTtcbiAgICBoZWlnaHQ6IHZhcigtLWNhbGN1bGF0ZWQtcGFwZXItcmFkaW8tYnV0dG9uLXNpemUpO1xuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG5cbiAgICBAYXBwbHkgLS1wYXBlci1yYWRpby1idXR0b24tcmFkaW8tY29udGFpbmVyO1xuICB9XG5cbiAgI2luayB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogNTAlO1xuICAgIGxlZnQ6IDUwJTtcbiAgICByaWdodDogYXV0bztcbiAgICB3aWR0aDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUpO1xuICAgIGhlaWdodDogdmFyKC0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUpO1xuICAgIGNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgb3BhY2l0eTogMC42O1xuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIH1cblxuICAjaW5rW2NoZWNrZWRdIHtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWNoZWNrZWQtaW5rLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWNvbG9yKSk7XG4gIH1cblxuICAjb2ZmUmFkaW8sICNvblJhZGlvIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICB9XG5cbiAgI29mZlJhZGlvIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWJhY2tncm91bmQtY29sb3IsIHRyYW5zcGFyZW50KTtcbiAgICB0cmFuc2l0aW9uOiBib3JkZXItY29sb3IgMC4yOHM7XG4gIH1cblxuICAjb25SYWRpbyB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcbiAgICB0cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSBlYXNlIDAuMjhzO1xuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSBlYXNlIDAuMjhzO1xuICAgIHdpbGwtY2hhbmdlOiB0cmFuc2Zvcm07XG4gIH1cblxuICA6aG9zdChbY2hlY2tlZF0pICNvZmZSYWRpbyB7XG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICB9XG5cbiAgOmhvc3QoW2NoZWNrZWRdKSAjb25SYWRpbyB7XG4gICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDAuNSk7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICB9XG5cbiAgI3JhZGlvTGFiZWwge1xuICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgIG1hcmdpbi1sZWZ0OiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtc3BhY2luZywgMTBweCk7XG4gICAgd2hpdGUtc3BhY2U6IG5vcm1hbDtcbiAgICBjb2xvcjogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcblxuICAgIEBhcHBseSAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbDtcbiAgfVxuXG4gIDpob3N0KFtjaGVja2VkXSkgI3JhZGlvTGFiZWwge1xuICAgIEBhcHBseSAtLXBhcGVyLXJhZGlvLWJ1dHRvbi1sYWJlbC1jaGVja2VkO1xuICB9XG5cbiAgI3JhZGlvTGFiZWw6ZGlyKHJ0bCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1hcmdpbi1yaWdodDogdmFyKC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsLXNwYWNpbmcsIDEwcHgpO1xuICB9XG5cbiAgI3JhZGlvTGFiZWxbaGlkZGVuXSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC8qIGRpc2FibGVkIHN0YXRlICovXG5cbiAgOmhvc3QoW2Rpc2FibGVkXSkgI29mZlJhZGlvIHtcbiAgICBib3JkZXItY29sb3I6IHZhcigtLXBhcGVyLXJhZGlvLWJ1dHRvbi11bmNoZWNrZWQtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgIG9wYWNpdHk6IDAuNTtcbiAgfVxuXG4gIDpob3N0KFtkaXNhYmxlZF1bY2hlY2tlZF0pICNvblJhZGlvIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWNvbG9yLCB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpKTtcbiAgICBvcGFjaXR5OiAwLjU7XG4gIH1cblxuICA6aG9zdChbZGlzYWJsZWRdKSAjcmFkaW9MYWJlbCB7XG4gICAgLyogc2xpZ2h0bHkgZGFya2VyIHRoYW4gdGhlIGJ1dHRvbiwgc28gdGhhdCBpdCdzIHJlYWRhYmxlICovXG4gICAgb3BhY2l0eTogMC42NTtcbiAgfVxuPC9zdHlsZT5cblxuPGRpdiBpZD1cInJhZGlvQ29udGFpbmVyXCI+XG4gIDxkaXYgaWQ9XCJvZmZSYWRpb1wiPjwvZGl2PlxuICA8ZGl2IGlkPVwib25SYWRpb1wiPjwvZGl2PlxuPC9kaXY+XG5cbjxkaXYgaWQ9XCJyYWRpb0xhYmVsXCI+PHNsb3Q+PC9zbG90PjwvZGl2PmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUmFkaW8gYnV0dG9uXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvc2VsZWN0aW9uLWNvbnRyb2xzLmh0bWwjc2VsZWN0aW9uLWNvbnRyb2xzLXJhZGlvLWJ1dHRvbilcblxuYHBhcGVyLXJhZGlvLWJ1dHRvbmAgaXMgYSBidXR0b24gdGhhdCBjYW4gYmUgZWl0aGVyIGNoZWNrZWQgb3IgdW5jaGVja2VkLiBUaGVcbnVzZXIgY2FuIHRhcCB0aGUgcmFkaW8gYnV0dG9uIHRvIGNoZWNrIG9yIHVuY2hlY2sgaXQuXG5cblVzZSBhIGA8cGFwZXItcmFkaW8tZ3JvdXA+YCB0byBncm91cCBhIHNldCBvZiByYWRpbyBidXR0b25zLiBXaGVuIHJhZGlvIGJ1dHRvbnNcbmFyZSBpbnNpZGUgYSByYWRpbyBncm91cCwgZXhhY3RseSBvbmUgcmFkaW8gYnV0dG9uIGluIHRoZSBncm91cCBjYW4gYmUgY2hlY2tlZFxuYXQgYW55IHRpbWUuXG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItcmFkaW8tYnV0dG9uPjwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgIDxwYXBlci1yYWRpby1idXR0b24+SXRlbSBsYWJlbDwvcGFwZXItcmFkaW8tYnV0dG9uPlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1iYWNrZ3JvdW5kLWNvbG9yYCB8IFJhZGlvIGJ1dHRvbiBiYWNrZ3JvdW5kIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIG5vdCBjaGVja2VkIHwgYHRyYW5zcGFyZW50YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXVuY2hlY2tlZC1jb2xvcmAgfCBSYWRpbyBidXR0b24gY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tdW5jaGVja2VkLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgbm90IGNoZWNrZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1jb2xvcmAgfCBSYWRpbyBidXR0b24gY29sb3Igd2hlbiB0aGUgaW5wdXQgaXMgY2hlY2tlZCB8IGAtLXByaW1hcnktY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tY2hlY2tlZC1pbmstY29sb3JgIHwgU2VsZWN0ZWQvZm9jdXMgcmlwcGxlIGNvbG9yIHdoZW4gdGhlIGlucHV0IGlzIGNoZWNrZWQgfCBgLS1wcmltYXJ5LWNvbG9yYFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLXNpemVgIHwgU2l6ZSBvZiB0aGUgcmFkaW8gYnV0dG9uIHwgYDE2cHhgXG5gLS1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemVgIHwgU2l6ZSBvZiB0aGUgcmlwcGxlIHwgYDQ4cHhgXG5gLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtY29sb3JgIHwgTGFiZWwgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtc3BhY2luZ2AgfCBTcGFjaW5nIGJldHdlZW4gdGhlIGxhYmVsIGFuZCB0aGUgYnV0dG9uIHwgYDEwcHhgXG5gLS1wYXBlci1yYWRpby1idXR0b24tcmFkaW8tY29udGFpbmVyYCB8IEEgbWl4aW4gYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgcmFkaW8gY29udGFpbmVyIHwgYHt9YFxuYC0tcGFwZXItcmFkaW8tYnV0dG9uLWxhYmVsYCB8IEEgbWl4aW4gYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgbGFiZWwgfCBge31gXG5gLS1wYXBlci1yYWRpby1idXR0b24tbGFiZWwtY2hlY2tlZGAgfCBBIG1peGluIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGxhYmVsIHdoZW4gdGhlIHJhZGlvIGJ1dHRvbiBpcyBjaGVja2VkIHwgYHt9YFxuXG5UaGlzIGVsZW1lbnQgYXBwbGllcyB0aGUgbWl4aW4gYC0tcGFwZXItZm9udC1jb21tb24tYmFzZWAgYnV0IGRvZXMgbm90IGltcG9ydFxuYHBhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxgLiBJbiBvcmRlciB0byBhcHBseSB0aGUgYFJvYm90b2AgZm9udCB0byB0aGlzXG5lbGVtZW50LCBtYWtlIHN1cmUgeW91J3ZlIGltcG9ydGVkIGBwYXBlci1zdHlsZXMvdHlwb2dyYXBoeS5odG1sYC5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1yYWRpby1idXR0b25cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItcmFkaW8tYnV0dG9uJyxcblxuICBiZWhhdmlvcnM6IFtQYXBlckNoZWNrZWRFbGVtZW50QmVoYXZpb3JdLFxuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ3JhZGlvJywgJ2FyaWEtY2hlY2tlZCc6IGZhbHNlLCB0YWJpbmRleDogMH0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcyBkdWUgdG8gdXNlciBpbnRlcmFjdGlvbi5cbiAgICAgKlxuICAgICAqIEBldmVudCBjaGFuZ2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEZpcmVkIHdoZW4gdGhlIGNoZWNrZWQgc3RhdGUgY2hhbmdlcy5cbiAgICAgKlxuICAgICAqIEBldmVudCBpcm9uLWNoYW5nZVxuICAgICAqL1xuXG4gICAgYXJpYUFjdGl2ZUF0dHJpYnV0ZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICdhcmlhLWNoZWNrZWQnfVxuICB9LFxuXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yaXBwbGVDb250YWluZXIgPSB0aGlzLiQucmFkaW9Db250YWluZXI7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFdhaXQgdW50aWwgc3R5bGVzIGhhdmUgcmVzb2x2ZWQgdG8gY2hlY2sgZm9yIHRoZSBkZWZhdWx0IHNlbnRpbmVsLlxuICAgIC8vIFNlZSBwb2x5bWVyIzQwMDkgZm9yIG1vcmUgZGV0YWlscy5cbiAgICBhZnRlck5leHRSZW5kZXIodGhpcywgZnVuY3Rpb24oKSB7XG4gICAgICB2YXIgaW5rU2l6ZSA9XG4gICAgICAgICAgdGhpcy5nZXRDb21wdXRlZFN0eWxlVmFsdWUoJy0tY2FsY3VsYXRlZC1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemUnKVxuICAgICAgICAgICAgICAudHJpbSgpO1xuICAgICAgLy8gSWYgdW5zZXQsIGNvbXB1dGUgYW5kIHNldCB0aGUgZGVmYXVsdCBgLS1wYXBlci1yYWRpby1idXR0b24taW5rLXNpemVgLlxuICAgICAgaWYgKGlua1NpemUgPT09ICctMXB4Jykge1xuICAgICAgICB2YXIgc2l6ZSA9IHBhcnNlRmxvYXQoXG4gICAgICAgICAgICB0aGlzLmdldENvbXB1dGVkU3R5bGVWYWx1ZSgnLS1jYWxjdWxhdGVkLXBhcGVyLXJhZGlvLWJ1dHRvbi1zaXplJylcbiAgICAgICAgICAgICAgICAudHJpbSgpKTtcbiAgICAgICAgdmFyIGRlZmF1bHRJbmtTaXplID0gTWF0aC5mbG9vcigzICogc2l6ZSk7XG5cbiAgICAgICAgLy8gVGhlIGJ1dHRvbiBhbmQgcmlwcGxlIG5lZWQgdG8gaGF2ZSB0aGUgc2FtZSBwYXJpdHkgc28gdGhhdCB0aGVpclxuICAgICAgICAvLyBjZW50ZXJzIGFsaWduLlxuICAgICAgICBpZiAoZGVmYXVsdElua1NpemUgJSAyICE9PSBzaXplICUgMikge1xuICAgICAgICAgIGRlZmF1bHRJbmtTaXplKys7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7XG4gICAgICAgICAgJy0tcGFwZXItcmFkaW8tYnV0dG9uLWluay1zaXplJzogZGVmYXVsdElua1NpemUgKyAncHgnLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSxcbn0pXG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItcmFkaW8tYnV0dG9uL3BhcGVyLXJhZGlvLWJ1dHRvbi5qcyc7XG5cbmltcG9ydCB7SXJvbk1lbnViYXJCZWhhdmlvciwgSXJvbk1lbnViYXJCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tbWVudS1iZWhhdmlvci9pcm9uLW1lbnViYXItYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uU2VsZWN0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tc2VsZWN0YWJsZS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1JhZGlvXG5idXR0b25dKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9zZWxlY3Rpb24tY29udHJvbHMuaHRtbCNzZWxlY3Rpb24tY29udHJvbHMtcmFkaW8tYnV0dG9uKVxuXG5gcGFwZXItcmFkaW8tZ3JvdXBgIGFsbG93cyB1c2VyIHRvIHNlbGVjdCBhdCBtb3N0IG9uZSByYWRpbyBidXR0b24gZnJvbSBhIHNldC5cbkNoZWNraW5nIG9uZSByYWRpbyBidXR0b24gdGhhdCBiZWxvbmdzIHRvIGEgcmFkaW8gZ3JvdXAgdW5jaGVja3MgYW55XG5wcmV2aW91c2x5IGNoZWNrZWQgcmFkaW8gYnV0dG9uIHdpdGhpbiB0aGUgc2FtZSBncm91cC4gVXNlXG5gc2VsZWN0ZWRgIHRvIGdldCBvciBzZXQgdGhlIHNlbGVjdGVkIHJhZGlvIGJ1dHRvbi5cblxuVGhlIDxwYXBlci1yYWRpby1idXR0b25zPiBpbnNpZGUgdGhlIGdyb3VwIG11c3QgaGF2ZSB0aGUgYG5hbWVgIGF0dHJpYnV0ZVxuc2V0LlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLXJhZGlvLWdyb3VwIHNlbGVjdGVkPVwic21hbGxcIj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInNtYWxsXCI+U21hbGw8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1lZGl1bVwiPk1lZGl1bTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibGFyZ2VcIj5MYXJnZTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cblJhZGlvLWJ1dHRvbi1ncm91cHMgY2FuIGJlIG1hZGUgb3B0aW9uYWwsIGFuZCBhbGxvdyB6ZXJvIGJ1dHRvbnMgdG8gYmUgc2VsZWN0ZWQ6XG5cbiAgICA8cGFwZXItcmFkaW8tZ3JvdXAgc2VsZWN0ZWQ9XCJzbWFsbFwiIGFsbG93LWVtcHR5LXNlbGVjdGlvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cInNtYWxsXCI+U21hbGw8L3BhcGVyLXJhZGlvLWJ1dHRvbj5cbiAgICAgIDxwYXBlci1yYWRpby1idXR0b24gbmFtZT1cIm1lZGl1bVwiPk1lZGl1bTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgICAgPHBhcGVyLXJhZGlvLWJ1dHRvbiBuYW1lPVwibGFyZ2VcIj5MYXJnZTwvcGFwZXItcmFkaW8tYnV0dG9uPlxuICAgIDwvcGFwZXItcmFkaW8tZ3JvdXA+XG5cblNlZSA8YSBocmVmPVwicGFwZXItcmFkaW8tYnV0dG9uXCI+cGFwZXItcmFkaW8tYnV0dG9uPC9hPiBmb3IgbW9yZVxuaW5mb3JtYXRpb24gYWJvdXQgYHBhcGVyLXJhZGlvLWJ1dHRvbmAuXG5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItcmFkaW8tZ3JvdXAtaXRlbS1wYWRkaW5nYCB8IFRoZSBwYWRkaW5nIG9mIHRoZSBpdGVtIHwgYDEycHhgXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItcmFkaW8tZ3JvdXBcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIHBhZGRpbmc6IHZhcigtLXBhcGVyLXJhZGlvLWdyb3VwLWl0ZW0tcGFkZGluZywgMTJweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1yYWRpby1ncm91cCcsXG4gIGJlaGF2aW9yczogW0lyb25NZW51YmFyQmVoYXZpb3JdLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBob3N0QXR0cmlidXRlczoge1xuICAgIHJvbGU6ICdyYWRpb2dyb3VwJyxcbiAgfSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogRmlyZWQgd2hlbiB0aGUgcmFkaW8gZ3JvdXAgc2VsZWN0aW9uIGNoYW5nZXMuXG4gICAgICpcbiAgICAgKiBAZXZlbnQgcGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVuIGZyb20gUG9seW1lci5Jcm9uU2VsZWN0YWJsZUJlaGF2aW9yXG4gICAgICovXG4gICAgYXR0ckZvclNlbGVjdGVkOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ25hbWUnfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlbiBmcm9tIFBvbHltZXIuSXJvblNlbGVjdGFibGVCZWhhdmlvclxuICAgICAqL1xuICAgIHNlbGVjdGVkQXR0cmlidXRlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2NoZWNrZWQnfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRlbiBmcm9tIFBvbHltZXIuSXJvblNlbGVjdGFibGVCZWhhdmlvclxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAncGFwZXItcmFkaW8tYnV0dG9uJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByYWRpby1idXR0b25zIGNhbiBiZSBkZXNlbGVjdGVkXG4gICAgICovXG4gICAgYWxsb3dFbXB0eVNlbGVjdGlvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX1cbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gdmFsdWUuXG4gICAqL1xuICBzZWxlY3Q6IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgdmFyIG5ld0l0ZW0gPSB0aGlzLl92YWx1ZVRvSXRlbSh2YWx1ZSk7XG4gICAgaWYgKG5ld0l0ZW0gJiYgbmV3SXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zZWxlY3RlZCkge1xuICAgICAgdmFyIG9sZEl0ZW0gPSB0aGlzLl92YWx1ZVRvSXRlbSh0aGlzLnNlbGVjdGVkKTtcblxuICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQgPT0gdmFsdWUpIHtcbiAgICAgICAgLy8gSWYgZGVzZWxlY3RpbmcgaXMgYWxsb3dlZCB3ZSdsbCBoYXZlIHRvIGFwcGx5IGFuIGVtcHR5IHNlbGVjdGlvbi5cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSBzaG91bGQgZm9yY2UgdGhlIHNlbGVjdGlvbiB0byBzdGF5IGFuZCBtYWtlIHRoaXNcbiAgICAgICAgLy8gYWN0aW9uIGEgbm8tb3AuXG4gICAgICAgIGlmICh0aGlzLmFsbG93RW1wdHlTZWxlY3Rpb24pIHtcbiAgICAgICAgICB2YWx1ZSA9ICcnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmIChvbGRJdGVtKVxuICAgICAgICAgICAgb2xkSXRlbS5jaGVja2VkID0gdHJ1ZTtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKG9sZEl0ZW0pXG4gICAgICAgIG9sZEl0ZW0uY2hlY2tlZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIElyb25TZWxlY3RhYmxlQmVoYXZpb3Iuc2VsZWN0LmFwcGx5KHRoaXMsIFt2YWx1ZV0pO1xuICAgIHRoaXMuZmlyZSgncGFwZXItcmFkaW8tZ3JvdXAtY2hhbmdlZCcpO1xuICB9LFxuXG4gIF9hY3RpdmF0ZUZvY3VzZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9pdGVtQWN0aXZhdGUodGhpcy5fdmFsdWVGb3JJdGVtKHRoaXMuZm9jdXNlZEl0ZW0pLCB0aGlzLmZvY3VzZWRJdGVtKTtcbiAgfSxcblxuICBfb25VcEtleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c1ByZXZpb3VzKCk7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzZWRJdGVtKCk7XG4gIH0sXG5cbiAgX29uRG93bktleTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9mb2N1c05leHQoKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuX2FjdGl2YXRlRm9jdXNlZEl0ZW0oKTtcbiAgfSxcblxuICBfb25MZWZ0S2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIElyb25NZW51YmFyQmVoYXZpb3JJbXBsLl9vbkxlZnRLZXkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzZWRJdGVtKCk7XG4gIH0sXG5cbiAgX29uUmlnaHRLZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbk1lbnViYXJCZWhhdmlvckltcGwuX29uUmlnaHRLZXkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB0aGlzLl9hY3RpdmF0ZUZvY3VzZWRJdGVtKCk7XG4gIH1cbn0pO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL3RpbWV6b25lcy5qc29uJyk7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXpCQTtBQTRCQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM0VBO0FBOEVBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDdkdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhEQTtBQW9EQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3hFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMUJBO0FBNkJBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDckRBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFxQkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUM3Q0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7QUFWQTtBQUNBO0FBY0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsR0E7Ozs7Ozs7Ozs7OztBQ3pCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFpSUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7Ozs7QUFNQTs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQWJBO0FBZ0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQXREQTs7Ozs7Ozs7Ozs7O0FDL0xBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBd0NBO0FBQ0E7Ozs7Ozs7Ozs7OztBQURBO0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFJQTtBQUNBOzs7Ozs7QUFNQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUF6QkE7QUFDQTtBQTJCQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1R0E7Ozs7Ozs7Ozs7O0FDM0RBOzs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==