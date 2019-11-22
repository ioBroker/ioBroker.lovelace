(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~more-info-dialog"],{

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

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
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
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>

      :host {
        display: block;
        @apply --layout-relative;
      }

      :host(.is-scrolled:not(:first-child))::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        background: var(--divider-color);
      }

      .scrollable {
        padding: 0 24px;

        @apply --layout-scroll;
        @apply --paper-dialog-scrollable;
      }

      .fit {
        @apply --layout-fit;
      }
    </style>

    <div id="scrollable" class="scrollable" on-scroll="updateScrollState">
      <slot></slot>
    </div>
`,
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function () {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function () {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function () {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function () {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-light.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _paper_dropdown_menu_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-dropdown-menu-icons.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js");
/* harmony import */ var _paper_dropdown_menu_shared_styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-dropdown-menu-shared-styles.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-ripple-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-ripple-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
















/**
Material design: [Dropdown
menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

This is a faster, lighter version of `paper-dropdown-menu`, that does not
use a `<paper-input>` internally. Use this element if you're concerned about
the performance of this element, i.e., if you plan on using many dropdowns on
the same page. Note that this element has a slightly different styling API
than `paper-dropdown-menu`.

`paper-dropdown-menu-light` is similar to a native browser select element.
`paper-dropdown-menu-light` works with selectable content. The currently
selected item is displayed in the control. If no item is selected, the `label`
is displayed instead.

Example:

    <paper-dropdown-menu-light label="Your favourite pastry">
      <paper-listbox slot="dropdown-content">
        <paper-item>Croissant</paper-item>
        <paper-item>Donut</paper-item>
        <paper-item>Financier</paper-item>
        <paper-item>Madeleine</paper-item>
      </paper-listbox>
    </paper-dropdown-menu-light>

This example renders a dropdown menu with 4 options.

The child element with the slot `dropdown-content` is used as the dropdown
menu. This can be a [`paper-listbox`](paper-listbox), or any other or
element that acts like an [`iron-selector`](iron-selector).

Specifically, the menu child must fire an
[`iron-select`](iron-selector#event-iron-select) event when one of its
children is selected, and an
[`iron-deselect`](iron-selector#event-iron-deselect) event when a child is
deselected. The selected or deselected item must be passed as the event's
`detail.item` property.

Applications can listen for the `iron-select` and `iron-deselect` events
to react when options are selected and deselected.

### Styling

The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dropdown-menu` | A mixin that is applied to the element host | `{}`
`--paper-dropdown-menu-disabled` | A mixin that is applied to the element host when disabled | `{}`
`--paper-dropdown-menu-ripple` | A mixin that is applied to the internal ripple | `{}`
`--paper-dropdown-menu-button` | A mixin that is applied to the internal menu button | `{}`
`--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`
`--paper-dropdown-menu-disabled-opacity` | The opacity of the dropdown when disabled  | `0.33`
`--paper-dropdown-menu-color` | The color of the input/label/underline when the dropdown is unfocused | `--primary-text-color`
`--paper-dropdown-menu-focus-color` | The color of the label/underline when the dropdown is focused  | `--primary-color`
`--paper-dropdown-error-color` | The color of the label/underline when the dropdown is invalid  | `--error-color`
`--paper-dropdown-menu-label` | Mixin applied to the label | `{}`
`--paper-dropdown-menu-input` | Mixin appled to the input | `{}`

Note that in this element, the underline is just the bottom border of the
"input". To style it:

    <style is=custom-style>
      paper-dropdown-menu-light.custom {
        --paper-dropdown-menu-input: {
          border-bottom: 2px dashed lavender;
        };
    </style>

@group Paper Elements
@element paper-dropdown-menu-light
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_12__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_15__["html"]`
    <style include="paper-dropdown-menu-shared-styles">
      :host(:focus) {
        outline: none;
      }

      :host {
        width: 200px;  /* Default size of an <input> */
      }

      /**
       * All of these styles below are for styling the fake-input display
       */
      [slot="dropdown-trigger"] {
        box-sizing: border-box;
        position: relative;
        width: 100%;
        padding: 16px 0 8px 0;
      }

      :host([disabled]) [slot="dropdown-trigger"] {
        pointer-events: none;
        opacity: var(--paper-dropdown-menu-disabled-opacity, 0.33);
      }

      :host([no-label-float]) [slot="dropdown-trigger"] {
        padding-top: 8px;   /* If there's no label, we need less space up top. */
      }

      #input {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        line-height: 1.5;
        border-bottom: 1px solid var(--paper-dropdown-menu-color, var(--secondary-text-color));
        color: var(--paper-dropdown-menu-color, var(--primary-text-color));
        width: 100%;
        box-sizing: border-box;
        padding: 12px 20px 0 0;   /* Right padding so that text doesn't overlap the icon */
        outline: none;
        @apply --paper-dropdown-menu-input;
      }

      #input:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([disabled]) #input {
        border-bottom: 1px dashed var(--paper-dropdown-menu-color, var(--secondary-text-color));
      }

      :host([invalid]) #input {
        border-bottom: 2px solid var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) #input {
        padding-top: 0;   /* If there's no label, we need less space up top. */
      }

      label {
        @apply --paper-font-subhead;
        @apply --paper-font-common-nowrap;
        display: block;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        /**
         * The container has a 16px top padding, and there's 12px of padding
         * between the input and the label (from the input's padding-top)
         */
        top: 28px;
        box-sizing: border-box;
        width: 100%;
        padding-right: 20px;    /* Right padding so that text doesn't overlap the icon */
        text-align: left;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        color: var(--paper-dropdown-menu-color, var(--secondary-text-color));
        @apply --paper-dropdown-menu-label;
      }

      label:dir(rtl) {
        padding-right: 0px;
        padding-left: 20px;
      }

      :host([no-label-float]) label {
        top: 8px;
        /* Since the label doesn't need to float, remove the animation duration
        which slows down visibility changes (i.e. when a selection is made) */
        transition-duration: 0s;
      }

      label.label-is-floating {
        font-size: 12px;
        top: 8px;
      }

      label.label-is-hidden {
        visibility: hidden;
      }

      :host([focused]) label.label-is-floating {
        color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
      }

      :host([invalid]) label.label-is-floating {
        color: var(--paper-dropdown-error-color, var(--error-color));
      }

      /**
       * Sets up the focused underline. It's initially hidden, and becomes
       * visible when it's focused.
       */
      label:after {
        background-color: var(--paper-dropdown-menu-focus-color, var(--primary-color));
        bottom: 7px;    /* The container has an 8px bottom padding */
        content: '';
        height: 2px;
        left: 45%;
        position: absolute;
        transition-duration: .2s;
        transition-timing-function: cubic-bezier(.4,0,.2,1);
        visibility: hidden;
        width: 8px;
        z-index: 10;
      }

      :host([invalid]) label:after {
        background-color: var(--paper-dropdown-error-color, var(--error-color));
      }

      :host([no-label-float]) label:after {
        bottom: 7px;    /* The container has a 8px bottom padding */
      }

      :host([focused]:not([disabled])) label:after {
        left: 0;
        visibility: visible;
        width: 100%;
      }

      iron-icon {
        position: absolute;
        right: 0px;
        bottom: 8px;    /* The container has an 8px bottom padding */
        @apply --paper-font-subhead;
        color: var(--disabled-text-color);
        @apply --paper-dropdown-menu-icon;
      }

      iron-icon:dir(rtl) {
        left: 0;
        right: auto;
      }

      :host([no-label-float]) iron-icon {
        margin-top: 0px;
      }

      .error {
        display: inline-block;
        visibility: hidden;
        color: var(--paper-dropdown-error-color, var(--error-color));
        @apply --paper-font-caption;
        position: absolute;
        left:0;
        right:0;
        bottom: -12px;
      }

      :host([invalid]) .error {
        visibility: visible;
      }
    </style>

    <!-- this div fulfills an a11y requirement for combobox, do not remove -->
    <span role="button"></span>
    <paper-menu-button id="menuButton" vertical-align="[[verticalAlign]]" horizontal-align="[[horizontalAlign]]" vertical-offset="[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]" disabled="[[disabled]]" no-animations="[[noAnimations]]" on-iron-select="_onIronSelect" on-iron-deselect="_onIronDeselect" opened="{{opened}}" close-on-activate allow-outside-scroll="[[allowOutsideScroll]]">
      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->
      <div class="dropdown-trigger" slot="dropdown-trigger">
        <label class\$="[[_computeLabelClass(noLabelFloat,alwaysFloatLabel,hasContent)]]">
          [[label]]
        </label>
        <div id="input" tabindex="-1">&nbsp;</div>
        <iron-icon icon="paper-dropdown-menu:arrow-drop-down"></iron-icon>
        <span class="error">[[errorMessage]]</span>
      </div>
      <slot id="content" name="dropdown-content" slot="dropdown-content"></slot>
    </paper-menu-button>
`,
  is: 'paper-dropdown-menu-light',
  behaviors: [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_7__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__["IronControlState"], _polymer_paper_behaviors_paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_11__["PaperRippleBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_9__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_10__["IronValidatableBehavior"]],
  properties: {
    /**
     * The derived "label" of the currently selected item. This value
     * is the `label` property on the selected item if set, or else the
     * trimmed text content of the selected item.
     */
    selectedItemLabel: {
      type: String,
      notify: true,
      readOnly: true
    },

    /**
     * The last selected item. An item is selected if the dropdown menu has
     * a child with class `dropdown-content`, and that child triggers an
     * `iron-select` event with the selected `item` in the `detail`.
     *
     * @type {?Object}
     */
    selectedItem: {
      type: Object,
      notify: true,
      readOnly: true
    },

    /**
     * The value for this element that will be used when submitting in
     * a form. It reflects the value of `selectedItemLabel`. If set directly,
     * it will not update the `selectedItemLabel` value.
     */
    value: {
      type: String,
      notify: true,
      observer: '_valueChanged'
    },

    /**
     * The label for the dropdown.
     */
    label: {
      type: String
    },

    /**
     * The placeholder for the dropdown.
     */
    placeholder: {
      type: String
    },

    /**
     * True if the dropdown is open. Otherwise, false.
     */
    opened: {
      type: Boolean,
      notify: true,
      value: false,
      observer: '_openedChanged'
    },

    /**
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     */
    allowOutsideScroll: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable the floating label. Bind this to the
     * `<paper-input-container>`'s `noLabelFloat` property.
     */
    noLabelFloat: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * Set to true to always float the label. Bind this to the
     * `<paper-input-container>`'s `alwaysFloatLabel` property.
     */
    alwaysFloatLabel: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable animations when opening and closing the
     * dropdown.
     */
    noAnimations: {
      type: Boolean,
      value: false
    },

    /**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: {
      type: String,
      value: 'right'
    },

    /**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: {
      type: String,
      value: 'top'
    },

    /**
     * Overrides the vertical offset computed in
     * _computeMenuVerticalOffset.
     */
    verticalOffset: Number,
    hasContent: {
      type: Boolean,
      readOnly: true
    }
  },
  listeners: {
    'tap': '_onTap'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'up down': 'open',
    'esc': 'close'
  },
  hostAttributes: {
    tabindex: 0,
    role: 'combobox',
    'aria-autocomplete': 'none',
    'aria-haspopup': 'true'
  },
  observers: ['_selectedItemChanged(selectedItem)'],
  attached: function () {
    // NOTE(cdata): Due to timing, a preselected value in a `IronSelectable`
    // child will cause an `iron-select` event to fire while the element is
    // still in a `DocumentFragment`. This has the effect of causing
    // handlers not to fire. So, we double check this value on attached:
    var contentElement = this.contentElement;

    if (contentElement && contentElement.selectedItem) {
      this._setSelectedItem(contentElement.selectedItem);
    }
  },

  /**
   * The content element that is contained by the dropdown menu, if any.
   */
  get contentElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_13__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  /**
   * Show the dropdown content.
   */
  open: function () {
    this.$.menuButton.open();
  },

  /**
   * Hide the dropdown content.
   */
  close: function () {
    this.$.menuButton.close();
  },

  /**
   * A handler that is called when `iron-select` is fired.
   *
   * @param {CustomEvent} event An `iron-select` event.
   */
  _onIronSelect: function (event) {
    this._setSelectedItem(event.detail.item);
  },

  /**
   * A handler that is called when `iron-deselect` is fired.
   *
   * @param {CustomEvent} event An `iron-deselect` event.
   */
  _onIronDeselect: function (event) {
    this._setSelectedItem(null);
  },

  /**
   * A handler that is called when the dropdown is tapped.
   *
   * @param {CustomEvent} event A tap event.
   */
  _onTap: function (event) {
    if (_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_14__["findOriginalTarget"](event) === this) {
      this.open();
    }
  },

  /**
   * Compute the label for the dropdown given a selected item.
   *
   * @param {Element} selectedItem A selected Element item, with an
   * optional `label` property.
   */
  _selectedItemChanged: function (selectedItem) {
    var value = '';

    if (!selectedItem) {
      value = '';
    } else {
      value = selectedItem.label || selectedItem.getAttribute('label') || selectedItem.textContent.trim();
    }

    this.value = value;

    this._setSelectedItemLabel(value);
  },

  /**
   * Compute the vertical offset of the menu based on the value of
   * `noLabelFloat`.
   *
   * @param {boolean} noLabelFloat True if the label should not float
   * @param {number=} opt_verticalOffset Optional offset from the user
   * above the input, otherwise false.
   */
  _computeMenuVerticalOffset: function (noLabelFloat, opt_verticalOffset) {
    // Override offset if it's passed from the user.
    if (opt_verticalOffset) {
      return opt_verticalOffset;
    } // NOTE(cdata): These numbers are somewhat magical because they are
    // derived from the metrics of elements internal to `paper-input`'s
    // template. The metrics will change depending on whether or not the
    // input has a floating label.


    return noLabelFloat ? -4 : 8;
  },

  /**
   * Returns false if the element is required and does not have a selection,
   * and true otherwise.
   * @param {*=} _value Ignored.
   * @return {boolean} true if `required` is false, or if `required` is true
   * and the element has a valid selection.
   */
  _getValidity: function (_value) {
    return this.disabled || !this.required || this.required && !!this.value;
  },
  _openedChanged: function () {
    var openState = this.opened ? 'true' : 'false';
    var e = this.contentElement;

    if (e) {
      e.setAttribute('aria-expanded', openState);
    }
  },
  _computeLabelClass: function (noLabelFloat, alwaysFloatLabel, hasContent) {
    var cls = '';

    if (noLabelFloat === true) {
      return hasContent ? 'label-is-hidden' : '';
    }

    if (hasContent || alwaysFloatLabel === true) {
      cls += ' label-is-floating';
    }

    return cls;
  },
  _valueChanged: function () {
    // Only update if it's actually different.
    if (this.$.input && this.$.input.textContent !== this.value) {
      this.$.input.textContent = this.value;
    }

    this._setHasContent(!!this.value);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-icon-button/paper-icon-button.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-behaviors/paper-inky-focus-behavior.js */ "./node_modules/@polymer/paper-behaviors/paper-inky-focus-behavior.js");
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
Material design: [Icon
toggles](https://www.google.com/design/spec/components/buttons.html#buttons-toggle-buttons)

`paper-icon-button` is a button with an image placed at the center. When the
user touches the button, a ripple effect emanates from the center of the button.

`paper-icon-button` does not include a default icon set. To use icons from the
default set, include `PolymerElements/iron-icons/iron-icons.html`, and use the
`icon` attribute to specify which icon from the icon set to use.

    <paper-icon-button icon="menu"></paper-icon-button>

See [`iron-iconset`](iron-iconset) for more information about
how to use a custom icon set.

Example:

    <script type="module">
      import '@polymer/iron-icons/iron-icons.js';
    </script>

    <paper-icon-button icon="favorite"></paper-icon-button>
    <paper-icon-button src="star.png"></paper-icon-button>

To use `paper-icon-button` as a link, wrap it in an anchor tag. Since
`paper-icon-button` will already receive focus, you may want to prevent the
anchor tag from receiving focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org" tabindex="-1">
      <paper-icon-button icon="polymer"></paper-icon-button>
    </a>

### Styling

Style the button with CSS as you would a normal DOM element. If you are using
the icons provided by `iron-icons`, they will inherit the foreground color of
the button.

    /* make a red "favorite" button *\/
    <paper-icon-button icon="favorite" style="color: red;"></paper-icon-button>

By default, the ripple is the same color as the foreground at 25% opacity. You
may customize the color using the `--paper-icon-button-ink-color` custom
property.

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-icon-button-disabled-text` | The color of the disabled button | `--disabled-text-color`
`--paper-icon-button-ink-color` | Selected/focus ripple color | `--primary-text-color`
`--paper-icon-button` | Mixin for a button | `{}`
`--paper-icon-button-disabled` | Mixin for a disabled button | `{}`
`--paper-icon-button-hover` | Mixin for button on hover | `{}`

@group Paper Elements
@element paper-icon-button
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  is: 'paper-icon-button',
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        padding: 8px;
        outline: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: pointer;
        z-index: 0;
        line-height: 1;

        width: 40px;
        height: 40px;

        /*
          NOTE: Both values are needed, since some phones require the value to
          be \`transparent\`.
        */
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-tap-highlight-color: transparent;

        /* Because of polymer/2558, this style has lower specificity than * */
        box-sizing: border-box !important;

        @apply --paper-icon-button;
      }

      :host #ink {
        color: var(--paper-icon-button-ink-color, var(--primary-text-color));
        opacity: 0.6;
      }

      :host([disabled]) {
        color: var(--paper-icon-button-disabled-text, var(--disabled-text-color));
        pointer-events: none;
        cursor: auto;

        @apply --paper-icon-button-disabled;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host(:hover) {
        @apply --paper-icon-button-hover;
      }

      iron-icon {
        --iron-icon-width: 100%;
        --iron-icon-height: 100%;
      }
    </style>

    <iron-icon id="icon" src="[[src]]" icon="[[icon]]"
               alt$="[[alt]]"></iron-icon>
  `,
  hostAttributes: {
    role: 'button',
    tabindex: '0'
  },
  behaviors: [_polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperInkyFocusBehavior"]],
  registered: function () {
    this._template.setAttribute('strip-whitespace', '');
  },
  properties: {
    /**
     * The URL of an image for the icon. If the src property is specified,
     * the icon property should not be.
     */
    src: {
      type: String
    },

    /**
     * Specifies the icon name or index in the set of icons available in
     * the icon's icon set. If the icon property is specified,
     * the src property should not be.
     */
    icon: {
      type: String
    },

    /**
     * Specifies the alternate text for the button, for accessibility.
     */
    alt: {
      type: String,
      observer: '_altChanged'
    }
  },
  _altChanged: function (newValue, oldValue) {
    var label = this.getAttribute('aria-label'); // Don't stomp over a user-set aria-label.

    if (!label || oldValue == label) {
      this.setAttribute('aria-label', newValue);
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+bW9yZS1pbmZvLWRpYWxvZy5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItaW5reS1mb2N1cy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItYmVoYXZpb3JzL3BhcGVyLXJpcHBsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRyb3Bkb3duLW1lbnUvcGFwZXItZHJvcGRvd24tbWVudS1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItaWNvbi1idXR0b24vcGFwZXItaWNvbi1idXR0b24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG5pbXBvcnQge1BhcGVyUmlwcGxlQmVoYXZpb3J9IGZyb20gJy4vcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcblxuLyoqXG4gKiBgUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcmAgaW1wbGVtZW50cyBhIHJpcHBsZSB3aGVuIHRoZSBlbGVtZW50IGhhcyBrZXlib2FyZFxuICogZm9jdXMuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvciBQYXBlcklua3lGb2N1c0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlcklua3lGb2N1c0JlaGF2aW9ySW1wbCA9IHtcbiAgb2JzZXJ2ZXJzOiBbJ19mb2N1c2VkQ2hhbmdlZChyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSddLFxuXG4gIF9mb2N1c2VkQ2hhbmdlZDogZnVuY3Rpb24ocmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZCkge1xuICAgIGlmIChyZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKSB7XG4gICAgICB0aGlzLmVuc3VyZVJpcHBsZSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5oYXNSaXBwbGUoKSkge1xuICAgICAgdGhpcy5fcmlwcGxlLmhvbGREb3duID0gcmVjZWl2ZWRGb2N1c0Zyb21LZXlib2FyZDtcbiAgICB9XG4gIH0sXG5cbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHJpcHBsZSA9IFBhcGVyUmlwcGxlQmVoYXZpb3IuX2NyZWF0ZVJpcHBsZSgpO1xuICAgIHJpcHBsZS5pZCA9ICdpbmsnO1xuICAgIHJpcHBsZS5zZXRBdHRyaWJ1dGUoJ2NlbnRlcicsICcnKTtcbiAgICByaXBwbGUuY2xhc3NMaXN0LmFkZCgnY2lyY2xlJyk7XG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlcklua3lGb2N1c0JlaGF2aW9yID0gW1xuICBJcm9uQnV0dG9uU3RhdGUsXG4gIElyb25Db250cm9sU3RhdGUsXG4gIFBhcGVyUmlwcGxlQmVoYXZpb3IsXG4gIFBhcGVySW5reUZvY3VzQmVoYXZpb3JJbXBsXG5dO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1yaXBwbGUvcGFwZXItcmlwcGxlLmpzJztcblxuaW1wb3J0IHtJcm9uQnV0dG9uU3RhdGVJbXBsfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxuLyoqXG4gKiBgUGFwZXJSaXBwbGVCZWhhdmlvcmAgZHluYW1pY2FsbHkgaW1wbGVtZW50cyBhIHJpcHBsZSB3aGVuIHRoZSBlbGVtZW50IGhhc1xuICogZm9jdXMgdmlhIHBvaW50ZXIgb3Iga2V5Ym9hcmQuXG4gKlxuICogTk9URTogVGhpcyBiZWhhdmlvciBpcyBpbnRlbmRlZCB0byBiZSB1c2VkIGluIGNvbmp1bmN0aW9uIHdpdGggYW5kIGFmdGVyXG4gKiBgSXJvbkJ1dHRvblN0YXRlYCBhbmQgYElyb25Db250cm9sU3RhdGVgLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJSaXBwbGVCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJSaXBwbGVCZWhhdmlvciA9IHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBlbGVtZW50IHdpbGwgbm90IHByb2R1Y2UgYSByaXBwbGUgZWZmZWN0IHdoZW4gaW50ZXJhY3RlZFxuICAgICAqIHdpdGggdmlhIHRoZSBwb2ludGVyLlxuICAgICAqL1xuICAgIG5vaW5rOiB7dHlwZTogQm9vbGVhbiwgb2JzZXJ2ZXI6ICdfbm9pbmtDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7RWxlbWVudHx1bmRlZmluZWR9XG4gICAgICovXG4gICAgX3JpcHBsZUNvbnRhaW5lcjoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyBhIGA8cGFwZXItcmlwcGxlPmAgZWxlbWVudCBpcyBhdmFpbGFibGUgd2hlbiB0aGUgZWxlbWVudCBpc1xuICAgKiBmb2N1c2VkLlxuICAgKi9cbiAgX2J1dHRvblN0YXRlQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZm9jdXNlZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEluIGFkZGl0aW9uIHRvIHRoZSBmdW5jdGlvbmFsaXR5IHByb3ZpZGVkIGluIGBJcm9uQnV0dG9uU3RhdGVgLCBlbnN1cmVzXG4gICAqIGEgcmlwcGxlIGVmZmVjdCBpcyBjcmVhdGVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgaW4gYSBgcHJlc3NlZGAgc3RhdGUuXG4gICAqL1xuICBfZG93bkhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvbkJ1dHRvblN0YXRlSW1wbC5fZG93bkhhbmRsZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgaWYgKHRoaXMucHJlc3NlZCkge1xuICAgICAgdGhpcy5lbnN1cmVSaXBwbGUoZXZlbnQpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyB0aGlzIGVsZW1lbnQgY29udGFpbnMgYSByaXBwbGUgZWZmZWN0LiBGb3Igc3RhcnR1cCBlZmZpY2llbmN5XG4gICAqIHRoZSByaXBwbGUgZWZmZWN0IGlzIGR5bmFtaWNhbGx5IG9uIGRlbWFuZCB3aGVuIG5lZWRlZC5cbiAgICogQHBhcmFtIHshRXZlbnQ9fSBvcHRUcmlnZ2VyaW5nRXZlbnQgKG9wdGlvbmFsKSBldmVudCB0aGF0IHRyaWdnZXJlZCB0aGVcbiAgICogcmlwcGxlLlxuICAgKi9cbiAgZW5zdXJlUmlwcGxlOiBmdW5jdGlvbihvcHRUcmlnZ2VyaW5nRXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZSA9IHRoaXMuX2NyZWF0ZVJpcHBsZSgpO1xuICAgICAgdGhpcy5fcmlwcGxlLm5vaW5rID0gdGhpcy5ub2luaztcbiAgICAgIHZhciByaXBwbGVDb250YWluZXIgPSB0aGlzLl9yaXBwbGVDb250YWluZXIgfHwgdGhpcy5yb290O1xuICAgICAgaWYgKHJpcHBsZUNvbnRhaW5lcikge1xuICAgICAgICBkb20ocmlwcGxlQ29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLl9yaXBwbGUpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdFRyaWdnZXJpbmdFdmVudCkge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgZXZlbnQgaGFwcGVuZWQgaW5zaWRlIG9mIHRoZSByaXBwbGUgY29udGFpbmVyXG4gICAgICAgIC8vIEZhbGwgYmFjayB0byBob3N0IGluc3RlYWQgb2YgdGhlIHJvb3QgYmVjYXVzZSBkaXN0cmlidXRlZCB0ZXh0XG4gICAgICAgIC8vIG5vZGVzIGFyZSBub3QgdmFsaWQgZXZlbnQgdGFyZ2V0c1xuICAgICAgICB2YXIgZG9tQ29udGFpbmVyID0gZG9tKHRoaXMuX3JpcHBsZUNvbnRhaW5lciB8fCB0aGlzKTtcbiAgICAgICAgdmFyIHRhcmdldCA9IGRvbShvcHRUcmlnZ2VyaW5nRXZlbnQpLnJvb3RUYXJnZXQ7XG4gICAgICAgIGlmIChkb21Db250YWluZXIuZGVlcENvbnRhaW5zKC8qKiBAdHlwZSB7Tm9kZX0gKi8gKHRhcmdldCkpKSB7XG4gICAgICAgICAgdGhpcy5fcmlwcGxlLnVpRG93bkFjdGlvbihvcHRUcmlnZ2VyaW5nRXZlbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBgPHBhcGVyLXJpcHBsZT5gIGVsZW1lbnQgdXNlZCBieSB0aGlzIGVsZW1lbnQgdG8gY3JlYXRlXG4gICAqIHJpcHBsZSBlZmZlY3RzLiBUaGUgZWxlbWVudCdzIHJpcHBsZSBpcyBjcmVhdGVkIG9uIGRlbWFuZCwgd2hlblxuICAgKiBuZWNlc3NhcnksIGFuZCBjYWxsaW5nIHRoaXMgbWV0aG9kIHdpbGwgZm9yY2UgdGhlXG4gICAqIHJpcHBsZSB0byBiZSBjcmVhdGVkLlxuICAgKi9cbiAgZ2V0UmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmVuc3VyZVJpcHBsZSgpO1xuICAgIHJldHVybiB0aGlzLl9yaXBwbGU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGlzIGVsZW1lbnQgY3VycmVudGx5IGNvbnRhaW5zIGEgcmlwcGxlIGVmZmVjdC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIGhhc1JpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4odGhpcy5fcmlwcGxlKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlIHRoZSBlbGVtZW50J3MgcmlwcGxlIGVmZmVjdCB2aWEgY3JlYXRpbmcgYSBgPHBhcGVyLXJpcHBsZT5gLlxuICAgKiBPdmVycmlkZSB0aGlzIG1ldGhvZCB0byBjdXN0b21pemUgdGhlIHJpcHBsZSBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshUGFwZXJSaXBwbGVFbGVtZW50fSBSZXR1cm5zIGEgYDxwYXBlci1yaXBwbGU+YCBlbGVtZW50LlxuICAgKi9cbiAgX2NyZWF0ZVJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFQYXBlclJpcHBsZUVsZW1lbnR9ICovIChcbiAgICAgICAgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncGFwZXItcmlwcGxlJykpO1xuICAgIHJldHVybiBlbGVtZW50O1xuICB9LFxuXG4gIF9ub2lua0NoYW5nZWQ6IGZ1bmN0aW9uKG5vaW5rKSB7XG4gICAgaWYgKHRoaXMuaGFzUmlwcGxlKCkpIHtcbiAgICAgIHRoaXMuX3JpcHBsZS5ub2luayA9IG5vaW5rO1xuICAgIH1cbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3JJbXBsfSBmcm9tICdAcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0RpYWxvZ3NdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9kaWFsb2dzLmh0bWwpXG5cbmBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaW1wbGVtZW50cyBhIHNjcm9sbGluZyBhcmVhIHVzZWQgaW4gYSBNYXRlcmlhbCBEZXNpZ25cbmRpYWxvZy4gSXQgc2hvd3MgYSBkaXZpZGVyIGF0IHRoZSB0b3AgYW5kL29yIGJvdHRvbSBpbmRpY2F0aW5nIG1vcmUgY29udGVudCxcbmRlcGVuZGluZyBvbiBzY3JvbGwgcG9zaXRpb24uIFVzZSB0aGlzIHRvZ2V0aGVyIHdpdGggZWxlbWVudHMgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYC5cblxuICAgIDxwYXBlci1kaWFsb2ctaW1wbD5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgPC9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbkl0IHNob3dzIGEgdG9wIGRpdmlkZXIgYWZ0ZXIgc2Nyb2xsaW5nIGlmIGl0IGlzIG5vdCB0aGUgZmlyc3QgY2hpbGQgaW4gaXRzXG5wYXJlbnQgY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBhYm92ZS4gSXQgc2hvd3MgYSBib3R0b21cbmRpdmlkZXIgaWYgaXQgaXMgc2Nyb2xsYWJsZSBhbmQgaXQgaXMgbm90IHRoZSBsYXN0IGNoaWxkIGluIGl0cyBwYXJlbnRcbmNvbnRhaW5lciwgaW5kaWNhdGluZyB0aGVyZSBpcyBtb3JlIGNvbnRlbnQgYmVsb3cuIFRoZSBib3R0b20gZGl2aWRlciBpcyBoaWRkZW5cbmlmIGl0IGlzIHNjcm9sbGVkIHRvIHRoZSBib3R0b20uXG5cbklmIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgaXMgbm90IGEgZGlyZWN0IGNoaWxkIG9mIHRoZSBlbGVtZW50IGltcGxlbWVudGluZ1xuYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAsIHJlbWVtYmVyIHRvIHNldCB0aGUgYGRpYWxvZ0VsZW1lbnRgOlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsIGlkPVwibXlEaWFsb2dcIj5cbiAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgPGRpdiBjbGFzcz1cIm15LWNvbnRlbnQtd3JhcHBlclwiPlxuICAgICAgICA8aDQ+U3ViLWhlYWRlcjwvaDQ+XG4gICAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgICBMb3JlbSBpcHN1bS4uLlxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uPk9LPC9wYXBlci1idXR0b24+XG4gICAgICA8L2Rpdj5cbiAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gICAgPHNjcmlwdD5cbiAgICAgIHZhciBzY3JvbGxhYmxlID1cblBvbHltZXIuZG9tKG15RGlhbG9nKS5xdWVyeVNlbGVjdG9yKCdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScpO1xuICAgICAgc2Nyb2xsYWJsZS5kaWFsb2dFbGVtZW50ID0gbXlEaWFsb2c7XG4gICAgPC9zY3JpcHQ+XG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgIHwgTWl4aW4gZm9yIHRoZSBzY3JvbGxhYmxlIGNvbnRlbnQgfCB7fVxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1yZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlzLXNjcm9sbGVkOm5vdCg6Zmlyc3QtY2hpbGQpKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguY2FuLXNjcm9sbDpub3QoLnNjcm9sbGVkLXRvLWJvdHRvbSk6bm90KDpsYXN0LWNoaWxkKSk6OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAuc2Nyb2xsYWJsZSB7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtc2Nyb2xsO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxhYmxlXCIgY2xhc3M9XCJzY3JvbGxhYmxlXCIgb24tc2Nyb2xsPVwidXBkYXRlU2Nyb2xsU3RhdGVcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIGRpYWxvZyBlbGVtZW50IHRoYXQgaW1wbGVtZW50cyBgUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYFxuICAgICAqIGNvbnRhaW5pbmcgdGhpcyBlbGVtZW50LlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBkaWFsb2dFbGVtZW50OiB7dHlwZTogT2JqZWN0fVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKi9cbiAgZ2V0IHNjcm9sbFRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnNjcm9sbGFibGU7XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbm8tcGFkZGluZycpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9lbnN1cmVUYXJnZXQoKTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGVTY3JvbGxTdGF0ZS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICB1cGRhdGVTY3JvbGxTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy50b2dnbGVDbGFzcygnaXMtc2Nyb2xsZWQnLCB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPiAwKTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnY2FuLXNjcm9sbCcsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA8IHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbEhlaWdodCk7XG4gICAgdGhpcy50b2dnbGVDbGFzcyhcbiAgICAgICAgJ3Njcm9sbGVkLXRvLWJvdHRvbScsXG4gICAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCArIHRoaXMuc2Nyb2xsVGFyZ2V0Lm9mZnNldEhlaWdodCA+PVxuICAgICAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgfSxcblxuICBfZW5zdXJlVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICAvLyBSZWFkIHBhcmVudEVsZW1lbnQgaW5zdGVhZCBvZiBwYXJlbnROb2RlIGluIG9yZGVyIHRvIHNraXAgc2hhZG93Um9vdHMuXG4gICAgdGhpcy5kaWFsb2dFbGVtZW50ID0gdGhpcy5kaWFsb2dFbGVtZW50IHx8IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAvLyBDaGVjayBpZiBkaWFsb2cgaW1wbGVtZW50cyBwYXBlci1kaWFsb2ctYmVoYXZpb3IuIElmIG5vdCwgZml0XG4gICAgLy8gc2Nyb2xsVGFyZ2V0IHRvIGhvc3QuXG4gICAgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCAmJiB0aGlzLmRpYWxvZ0VsZW1lbnQuYmVoYXZpb3JzICYmXG4gICAgICAgIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMuaW5kZXhPZihQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCkgPj0gMCkge1xuICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LnNpemluZ1RhcmdldCA9IHRoaXMuc2Nyb2xsVGFyZ2V0O1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnZml0Jyk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmRpYWxvZ0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuc2Nyb2xsVGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2ZpdCcpO1xuICAgIH1cbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pY29uL2lyb24taWNvbi5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbnMuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWRyb3Bkb3duLW1lbnUtc2hhcmVkLXN0eWxlcy5qcyc7XG5cbmltcG9ydCB7SXJvbkJ1dHRvblN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWJ1dHRvbi1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5pbXBvcnQge0lyb25Gb3JtRWxlbWVudEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci9pcm9uLWZvcm0tZWxlbWVudC1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25WYWxpZGF0YWJsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yL2lyb24tdmFsaWRhdGFibGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQYXBlclJpcHBsZUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wYXBlci1iZWhhdmlvcnMvcGFwZXItcmlwcGxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQgKiBhcyBnZXN0dXJlcyBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9nZXN0dXJlcy5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtEcm9wZG93blxubWVudXNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9idXR0b25zLmh0bWwjYnV0dG9ucy1kcm9wZG93bi1idXR0b25zKVxuXG5UaGlzIGlzIGEgZmFzdGVyLCBsaWdodGVyIHZlcnNpb24gb2YgYHBhcGVyLWRyb3Bkb3duLW1lbnVgLCB0aGF0IGRvZXMgbm90XG51c2UgYSBgPHBhcGVyLWlucHV0PmAgaW50ZXJuYWxseS4gVXNlIHRoaXMgZWxlbWVudCBpZiB5b3UncmUgY29uY2VybmVkIGFib3V0XG50aGUgcGVyZm9ybWFuY2Ugb2YgdGhpcyBlbGVtZW50LCBpLmUuLCBpZiB5b3UgcGxhbiBvbiB1c2luZyBtYW55IGRyb3Bkb3ducyBvblxudGhlIHNhbWUgcGFnZS4gTm90ZSB0aGF0IHRoaXMgZWxlbWVudCBoYXMgYSBzbGlnaHRseSBkaWZmZXJlbnQgc3R5bGluZyBBUElcbnRoYW4gYHBhcGVyLWRyb3Bkb3duLW1lbnVgLlxuXG5gcGFwZXItZHJvcGRvd24tbWVudS1saWdodGAgaXMgc2ltaWxhciB0byBhIG5hdGl2ZSBicm93c2VyIHNlbGVjdCBlbGVtZW50LlxuYHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRgIHdvcmtzIHdpdGggc2VsZWN0YWJsZSBjb250ZW50LiBUaGUgY3VycmVudGx5XG5zZWxlY3RlZCBpdGVtIGlzIGRpc3BsYXllZCBpbiB0aGUgY29udHJvbC4gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgdGhlIGBsYWJlbGBcbmlzIGRpc3BsYXllZCBpbnN0ZWFkLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQgbGFiZWw9XCJZb3VyIGZhdm91cml0ZSBwYXN0cnlcIj5cbiAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgIDxwYXBlci1pdGVtPkNyb2lzc2FudDwvcGFwZXItaXRlbT5cbiAgICAgICAgPHBhcGVyLWl0ZW0+RG9udXQ8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPkZpbmFuY2llcjwvcGFwZXItaXRlbT5cbiAgICAgICAgPHBhcGVyLWl0ZW0+TWFkZWxlaW5lPC9wYXBlci1pdGVtPlxuICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgIDwvcGFwZXItZHJvcGRvd24tbWVudS1saWdodD5cblxuVGhpcyBleGFtcGxlIHJlbmRlcnMgYSBkcm9wZG93biBtZW51IHdpdGggNCBvcHRpb25zLlxuXG5UaGUgY2hpbGQgZWxlbWVudCB3aXRoIHRoZSBzbG90IGBkcm9wZG93bi1jb250ZW50YCBpcyB1c2VkIGFzIHRoZSBkcm9wZG93blxubWVudS4gVGhpcyBjYW4gYmUgYSBbYHBhcGVyLWxpc3Rib3hgXShwYXBlci1saXN0Ym94KSwgb3IgYW55IG90aGVyIG9yXG5lbGVtZW50IHRoYXQgYWN0cyBsaWtlIGFuIFtgaXJvbi1zZWxlY3RvcmBdKGlyb24tc2VsZWN0b3IpLlxuXG5TcGVjaWZpY2FsbHksIHRoZSBtZW51IGNoaWxkIG11c3QgZmlyZSBhblxuW2Bpcm9uLXNlbGVjdGBdKGlyb24tc2VsZWN0b3IjZXZlbnQtaXJvbi1zZWxlY3QpIGV2ZW50IHdoZW4gb25lIG9mIGl0c1xuY2hpbGRyZW4gaXMgc2VsZWN0ZWQsIGFuZCBhblxuW2Bpcm9uLWRlc2VsZWN0YF0oaXJvbi1zZWxlY3RvciNldmVudC1pcm9uLWRlc2VsZWN0KSBldmVudCB3aGVuIGEgY2hpbGQgaXNcbmRlc2VsZWN0ZWQuIFRoZSBzZWxlY3RlZCBvciBkZXNlbGVjdGVkIGl0ZW0gbXVzdCBiZSBwYXNzZWQgYXMgdGhlIGV2ZW50J3NcbmBkZXRhaWwuaXRlbWAgcHJvcGVydHkuXG5cbkFwcGxpY2F0aW9ucyBjYW4gbGlzdGVuIGZvciB0aGUgYGlyb24tc2VsZWN0YCBhbmQgYGlyb24tZGVzZWxlY3RgIGV2ZW50c1xudG8gcmVhY3Qgd2hlbiBvcHRpb25zIGFyZSBzZWxlY3RlZCBhbmQgZGVzZWxlY3RlZC5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhbHNvIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZHJvcGRvd24tbWVudWAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgZWxlbWVudCBob3N0IHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1kaXNhYmxlZGAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgZWxlbWVudCBob3N0IHdoZW4gZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LXJpcHBsZWAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgcmlwcGxlIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1idXR0b25gIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIG1lbnUgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1pY29uYCB8IEEgbWl4aW4gdGhhdCBpcyBhcHBsaWVkIHRvIHRoZSBpbnRlcm5hbCBpY29uIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1kaXNhYmxlZC1vcGFjaXR5YCB8IFRoZSBvcGFjaXR5IG9mIHRoZSBkcm9wZG93biB3aGVuIGRpc2FibGVkICB8IGAwLjMzYFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1jb2xvcmAgfCBUaGUgY29sb3Igb2YgdGhlIGlucHV0L2xhYmVsL3VuZGVybGluZSB3aGVuIHRoZSBkcm9wZG93biBpcyB1bmZvY3VzZWQgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LWZvY3VzLWNvbG9yYCB8IFRoZSBjb2xvciBvZiB0aGUgbGFiZWwvdW5kZXJsaW5lIHdoZW4gdGhlIGRyb3Bkb3duIGlzIGZvY3VzZWQgIHwgYC0tcHJpbWFyeS1jb2xvcmBcbmAtLXBhcGVyLWRyb3Bkb3duLWVycm9yLWNvbG9yYCB8IFRoZSBjb2xvciBvZiB0aGUgbGFiZWwvdW5kZXJsaW5lIHdoZW4gdGhlIGRyb3Bkb3duIGlzIGludmFsaWQgIHwgYC0tZXJyb3ItY29sb3JgXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LWxhYmVsYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGxhYmVsIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dGAgfCBNaXhpbiBhcHBsZWQgdG8gdGhlIGlucHV0IHwgYHt9YFxuXG5Ob3RlIHRoYXQgaW4gdGhpcyBlbGVtZW50LCB0aGUgdW5kZXJsaW5lIGlzIGp1c3QgdGhlIGJvdHRvbSBib3JkZXIgb2YgdGhlXG5cImlucHV0XCIuIFRvIHN0eWxlIGl0OlxuXG4gICAgPHN0eWxlIGlzPWN1c3RvbS1zdHlsZT5cbiAgICAgIHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHQuY3VzdG9tIHtcbiAgICAgICAgLS1wYXBlci1kcm9wZG93bi1tZW51LWlucHV0OiB7XG4gICAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IGRhc2hlZCBsYXZlbmRlcjtcbiAgICAgICAgfTtcbiAgICA8L3N0eWxlPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWRyb3Bkb3duLW1lbnUtbGlnaHRcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgIDpob3N0KDpmb2N1cykge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIHdpZHRoOiAyMDBweDsgIC8qIERlZmF1bHQgc2l6ZSBvZiBhbiA8aW5wdXQ+ICovXG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogQWxsIG9mIHRoZXNlIHN0eWxlcyBiZWxvdyBhcmUgZm9yIHN0eWxpbmcgdGhlIGZha2UtaW5wdXQgZGlzcGxheVxuICAgICAgICovXG4gICAgICBbc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIl0ge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDAgOHB4IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiXSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci1kcm9wZG93bi1tZW51LWRpc2FibGVkLW9wYWNpdHksIDAuMzMpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm8tbGFiZWwtZmxvYXRdKSBbc2xvdD1cImRyb3Bkb3duLXRyaWdnZXJcIl0ge1xuICAgICAgICBwYWRkaW5nLXRvcDogOHB4OyAgIC8qIElmIHRoZXJlJ3Mgbm8gbGFiZWwsIHdlIG5lZWQgbGVzcyBzcGFjZSB1cCB0b3AuICovXG4gICAgICB9XG5cbiAgICAgICNpbnB1dCB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tbm93cmFwO1xuICAgICAgICBsaW5lLWhlaWdodDogMS41O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0tcGFwZXItZHJvcGRvd24tbWVudS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRyb3Bkb3duLW1lbnUtY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZzogMTJweCAyMHB4IDAgMDsgICAvKiBSaWdodCBwYWRkaW5nIHNvIHRoYXQgdGV4dCBkb2Vzbid0IG92ZXJsYXAgdGhlIGljb24gKi9cbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dDtcbiAgICAgIH1cblxuICAgICAgI2lucHV0OmRpcihydGwpIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pICNpbnB1dCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgdmFyKC0tcGFwZXItZHJvcGRvd24tbWVudS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSAjaW5wdXQge1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tcGFwZXItZHJvcGRvd24tZXJyb3ItY29sb3IsIHZhcigtLWVycm9yLWNvbG9yKSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pICNpbnB1dCB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwOyAgIC8qIElmIHRoZXJlJ3Mgbm8gbGFiZWwsIHdlIG5lZWQgbGVzcyBzcGFjZSB1cCB0b3AuICovXG4gICAgICB9XG5cbiAgICAgIGxhYmVsIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LWNvbW1vbi1ub3dyYXA7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBUaGUgY29udGFpbmVyIGhhcyBhIDE2cHggdG9wIHBhZGRpbmcsIGFuZCB0aGVyZSdzIDEycHggb2YgcGFkZGluZ1xuICAgICAgICAgKiBiZXR3ZWVuIHRoZSBpbnB1dCBhbmQgdGhlIGxhYmVsIChmcm9tIHRoZSBpbnB1dCdzIHBhZGRpbmctdG9wKVxuICAgICAgICAgKi9cbiAgICAgICAgdG9wOiAyOHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMjBweDsgICAgLyogUmlnaHQgcGFkZGluZyBzbyB0aGF0IHRleHQgZG9lc24ndCBvdmVybGFwIHRoZSBpY29uICovXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IC4ycztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllciguNCwwLC4yLDEpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZHJvcGRvd24tbWVudS1jb2xvciwgdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1sYWJlbDtcbiAgICAgIH1cblxuICAgICAgbGFiZWw6ZGlyKHJ0bCkge1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25vLWxhYmVsLWZsb2F0XSkgbGFiZWwge1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgLyogU2luY2UgdGhlIGxhYmVsIGRvZXNuJ3QgbmVlZCB0byBmbG9hdCwgcmVtb3ZlIHRoZSBhbmltYXRpb24gZHVyYXRpb25cbiAgICAgICAgd2hpY2ggc2xvd3MgZG93biB2aXNpYmlsaXR5IGNoYW5nZXMgKGkuZS4gd2hlbiBhIHNlbGVjdGlvbiBpcyBtYWRlKSAqL1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwcztcbiAgICAgIH1cblxuICAgICAgbGFiZWwubGFiZWwtaXMtZmxvYXRpbmcge1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIHRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICBsYWJlbC5sYWJlbC1pcy1oaWRkZW4ge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgbGFiZWwubGFiZWwtaXMtZmxvYXRpbmcge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZHJvcGRvd24tbWVudS1mb2N1cy1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW52YWxpZF0pIGxhYmVsLmxhYmVsLWlzLWZsb2F0aW5nIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRyb3Bkb3duLWVycm9yLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICAvKipcbiAgICAgICAqIFNldHMgdXAgdGhlIGZvY3VzZWQgdW5kZXJsaW5lLiBJdCdzIGluaXRpYWxseSBoaWRkZW4sIGFuZCBiZWNvbWVzXG4gICAgICAgKiB2aXNpYmxlIHdoZW4gaXQncyBmb2N1c2VkLlxuICAgICAgICovXG4gICAgICBsYWJlbDphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWRyb3Bkb3duLW1lbnUtZm9jdXMtY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcbiAgICAgICAgYm90dG9tOiA3cHg7ICAgIC8qIFRoZSBjb250YWluZXIgaGFzIGFuIDhweCBib3R0b20gcGFkZGluZyAqL1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGxlZnQ6IDQ1JTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMnM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoLjQsMCwuMiwxKTtcbiAgICAgICAgdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICB3aWR0aDogOHB4O1xuICAgICAgICB6LWluZGV4OiAxMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSBsYWJlbDphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLWRyb3Bkb3duLWVycm9yLWNvbG9yLCB2YXIoLS1lcnJvci1jb2xvcikpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbbm8tbGFiZWwtZmxvYXRdKSBsYWJlbDphZnRlciB7XG4gICAgICAgIGJvdHRvbTogN3B4OyAgICAvKiBUaGUgY29udGFpbmVyIGhhcyBhIDhweCBib3R0b20gcGFkZGluZyAqL1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF06bm90KFtkaXNhYmxlZF0pKSBsYWJlbDphZnRlciB7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBpcm9uLWljb24ge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwcHg7XG4gICAgICAgIGJvdHRvbTogOHB4OyAgICAvKiBUaGUgY29udGFpbmVyIGhhcyBhbiA4cHggYm90dG9tIHBhZGRpbmcgKi9cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1zdWJoZWFkO1xuICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnUtaWNvbjtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uOmRpcihydGwpIHtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby1sYWJlbC1mbG9hdF0pIGlyb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cblxuICAgICAgLmVycm9yIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kcm9wZG93bi1lcnJvci1jb2xvciwgdmFyKC0tZXJyb3ItY29sb3IpKTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jYXB0aW9uO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGxlZnQ6MDtcbiAgICAgICAgcmlnaHQ6MDtcbiAgICAgICAgYm90dG9tOiAtMTJweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSAuZXJyb3Ige1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8IS0tIHRoaXMgZGl2IGZ1bGZpbGxzIGFuIGExMXkgcmVxdWlyZW1lbnQgZm9yIGNvbWJvYm94LCBkbyBub3QgcmVtb3ZlIC0tPlxuICAgIDxzcGFuIHJvbGU9XCJidXR0b25cIj48L3NwYW4+XG4gICAgPHBhcGVyLW1lbnUtYnV0dG9uIGlkPVwibWVudUJ1dHRvblwiIHZlcnRpY2FsLWFsaWduPVwiW1t2ZXJ0aWNhbEFsaWduXV1cIiBob3Jpem9udGFsLWFsaWduPVwiW1tob3Jpem9udGFsQWxpZ25dXVwiIHZlcnRpY2FsLW9mZnNldD1cIltbX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQobm9MYWJlbEZsb2F0LCB2ZXJ0aWNhbE9mZnNldCldXVwiIGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCIgbm8tYW5pbWF0aW9ucz1cIltbbm9BbmltYXRpb25zXV1cIiBvbi1pcm9uLXNlbGVjdD1cIl9vbklyb25TZWxlY3RcIiBvbi1pcm9uLWRlc2VsZWN0PVwiX29uSXJvbkRlc2VsZWN0XCIgb3BlbmVkPVwie3tvcGVuZWR9fVwiIGNsb3NlLW9uLWFjdGl2YXRlIGFsbG93LW91dHNpZGUtc2Nyb2xsPVwiW1thbGxvd091dHNpZGVTY3JvbGxdXVwiPlxuICAgICAgPCEtLSBzdXBwb3J0IGh5YnJpZCBtb2RlOiB1c2VyIG1pZ2h0IGJlIHVzaW5nIHBhcGVyLW1lbnUtYnV0dG9uIDEueCB3aGljaCBkaXN0cmlidXRlcyB2aWEgPGNvbnRlbnQ+IC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImRyb3Bkb3duLXRyaWdnZXJcIiBzbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiPlxuICAgICAgICA8bGFiZWwgY2xhc3NcXCQ9XCJbW19jb21wdXRlTGFiZWxDbGFzcyhub0xhYmVsRmxvYXQsYWx3YXlzRmxvYXRMYWJlbCxoYXNDb250ZW50KV1dXCI+XG4gICAgICAgICAgW1tsYWJlbF1dXG4gICAgICAgIDwvbGFiZWw+XG4gICAgICAgIDxkaXYgaWQ9XCJpbnB1dFwiIHRhYmluZGV4PVwiLTFcIj4mbmJzcDs8L2Rpdj5cbiAgICAgICAgPGlyb24taWNvbiBpY29uPVwicGFwZXItZHJvcGRvd24tbWVudTphcnJvdy1kcm9wLWRvd25cIj48L2lyb24taWNvbj5cbiAgICAgICAgPHNwYW4gY2xhc3M9XCJlcnJvclwiPltbZXJyb3JNZXNzYWdlXV08L3NwYW4+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzbG90IGlkPVwiY29udGVudFwiIG5hbWU9XCJkcm9wZG93bi1jb250ZW50XCIgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj48L3Nsb3Q+XG4gICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kcm9wZG93bi1tZW51LWxpZ2h0JyxcblxuICBiZWhhdmlvcnM6IFtcbiAgICBJcm9uQnV0dG9uU3RhdGUsXG4gICAgSXJvbkNvbnRyb2xTdGF0ZSxcbiAgICBQYXBlclJpcHBsZUJlaGF2aW9yLFxuICAgIElyb25Gb3JtRWxlbWVudEJlaGF2aW9yLFxuICAgIElyb25WYWxpZGF0YWJsZUJlaGF2aW9yXG4gIF0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBkZXJpdmVkIFwibGFiZWxcIiBvZiB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0uIFRoaXMgdmFsdWVcbiAgICAgKiBpcyB0aGUgYGxhYmVsYCBwcm9wZXJ0eSBvbiB0aGUgc2VsZWN0ZWQgaXRlbSBpZiBzZXQsIG9yIGVsc2UgdGhlXG4gICAgICogdHJpbW1lZCB0ZXh0IGNvbnRlbnQgb2YgdGhlIHNlbGVjdGVkIGl0ZW0uXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtTGFiZWw6IHt0eXBlOiBTdHJpbmcsIG5vdGlmeTogdHJ1ZSwgcmVhZE9ubHk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGxhc3Qgc2VsZWN0ZWQgaXRlbS4gQW4gaXRlbSBpcyBzZWxlY3RlZCBpZiB0aGUgZHJvcGRvd24gbWVudSBoYXNcbiAgICAgKiBhIGNoaWxkIHdpdGggY2xhc3MgYGRyb3Bkb3duLWNvbnRlbnRgLCBhbmQgdGhhdCBjaGlsZCB0cmlnZ2VycyBhblxuICAgICAqIGBpcm9uLXNlbGVjdGAgZXZlbnQgd2l0aCB0aGUgc2VsZWN0ZWQgYGl0ZW1gIGluIHRoZSBgZGV0YWlsYC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHs/T2JqZWN0fVxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbToge3R5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlLCByZWFkT25seTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIHN1Ym1pdHRpbmcgaW5cbiAgICAgKiBhIGZvcm0uIEl0IHJlZmxlY3RzIHRoZSB2YWx1ZSBvZiBgc2VsZWN0ZWRJdGVtTGFiZWxgLiBJZiBzZXQgZGlyZWN0bHksXG4gICAgICogaXQgd2lsbCBub3QgdXBkYXRlIHRoZSBgc2VsZWN0ZWRJdGVtTGFiZWxgIHZhbHVlLlxuICAgICAqL1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICBvYnNlcnZlcjogJ192YWx1ZUNoYW5nZWQnLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGFiZWwgZm9yIHRoZSBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBsYWJlbDoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgcGxhY2Vob2xkZXIgZm9yIHRoZSBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBwbGFjZWhvbGRlcjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBkcm9wZG93biBpcyBvcGVuLiBPdGhlcndpc2UsIGZhbHNlLlxuICAgICAqL1xuICAgIG9wZW5lZDpcbiAgICAgICAge3R5cGU6IEJvb2xlYW4sIG5vdGlmeTogdHJ1ZSwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgZHJvcGRvd24gd2lsbCBjb25zdHJhaW4gc2Nyb2xsaW5nIG9uIHRoZSBwYWdlXG4gICAgICogdG8gaXRzZWxmIHdoZW4gb3BlbmVkLlxuICAgICAqIFNldCB0byB0cnVlIGluIG9yZGVyIHRvIHByZXZlbnQgc2Nyb2xsIGZyb20gYmVpbmcgY29uc3RyYWluZWRcbiAgICAgKiB0byB0aGUgZHJvcGRvd24gd2hlbiBpdCBvcGVucy5cbiAgICAgKi9cbiAgICBhbGxvd091dHNpZGVTY3JvbGw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIEJpbmQgdGhpcyB0byB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYG5vTGFiZWxGbG9hdGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbm9MYWJlbEZsb2F0OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBsYWJlbC4gQmluZCB0aGlzIHRvIHRoZVxuICAgICAqIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgYWx3YXlzRmxvYXRMYWJlbGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgYWx3YXlzRmxvYXRMYWJlbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGFuaW1hdGlvbnMgd2hlbiBvcGVuaW5nIGFuZCBjbG9zaW5nIHRoZVxuICAgICAqIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIG5vQW5pbWF0aW9uczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgbWVudSBkcm9wZG93blxuICAgICAqIGhvcml6b250YWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAncmlnaHQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBtZW51IGRyb3Bkb3duXG4gICAgICogdmVydGljYWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3RvcCd9LFxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIHRoZSB2ZXJ0aWNhbCBvZmZzZXQgY29tcHV0ZWQgaW5cbiAgICAgKiBfY29tcHV0ZU1lbnVWZXJ0aWNhbE9mZnNldC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE9mZnNldDogTnVtYmVyLFxuXG4gICAgaGFzQ29udGVudDoge3R5cGU6IEJvb2xlYW4sIHJlYWRPbmx5OiB0cnVlfVxuICB9LFxuXG4gIGxpc3RlbmVyczogeyd0YXAnOiAnX29uVGFwJ30sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHsndXAgZG93bic6ICdvcGVuJywgJ2VzYyc6ICdjbG9zZSd9LFxuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgdGFiaW5kZXg6IDAsXG4gICAgcm9sZTogJ2NvbWJvYm94JyxcbiAgICAnYXJpYS1hdXRvY29tcGxldGUnOiAnbm9uZScsXG4gICAgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZSdcbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX3NlbGVjdGVkSXRlbUNoYW5nZWQoc2VsZWN0ZWRJdGVtKSddLFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBOT1RFKGNkYXRhKTogRHVlIHRvIHRpbWluZywgYSBwcmVzZWxlY3RlZCB2YWx1ZSBpbiBhIGBJcm9uU2VsZWN0YWJsZWBcbiAgICAvLyBjaGlsZCB3aWxsIGNhdXNlIGFuIGBpcm9uLXNlbGVjdGAgZXZlbnQgdG8gZmlyZSB3aGlsZSB0aGUgZWxlbWVudCBpc1xuICAgIC8vIHN0aWxsIGluIGEgYERvY3VtZW50RnJhZ21lbnRgLiBUaGlzIGhhcyB0aGUgZWZmZWN0IG9mIGNhdXNpbmdcbiAgICAvLyBoYW5kbGVycyBub3QgdG8gZmlyZS4gU28sIHdlIGRvdWJsZSBjaGVjayB0aGlzIHZhbHVlIG9uIGF0dGFjaGVkOlxuICAgIHZhciBjb250ZW50RWxlbWVudCA9IHRoaXMuY29udGVudEVsZW1lbnQ7XG4gICAgaWYgKGNvbnRlbnRFbGVtZW50ICYmIGNvbnRlbnRFbGVtZW50LnNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtKGNvbnRlbnRFbGVtZW50LnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBlbGVtZW50IHRoYXQgaXMgY29udGFpbmVkIGJ5IHRoZSBkcm9wZG93biBtZW51LCBpZiBhbnkuXG4gICAqL1xuICBnZXQgY29udGVudEVsZW1lbnQoKSB7XG4gICAgLy8gUG9seW1lciAyLnggcmV0dXJucyBzbG90LmFzc2lnbmVkTm9kZXMgd2hpY2ggY2FuIGNvbnRhaW4gdGV4dCBub2Rlcy5cbiAgICB2YXIgbm9kZXMgPSBkb20odGhpcy4kLmNvbnRlbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IG5vZGVzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgaWYgKG5vZGVzW2ldLm5vZGVUeXBlID09PSBOb2RlLkVMRU1FTlRfTk9ERSkge1xuICAgICAgICByZXR1cm4gbm9kZXNbaV07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93IHRoZSBkcm9wZG93biBjb250ZW50LlxuICAgKi9cbiAgb3BlbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kLm1lbnVCdXR0b24ub3BlbigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBkcm9wZG93biBjb250ZW50LlxuICAgKi9cbiAgY2xvc2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5tZW51QnV0dG9uLmNsb3NlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGBpcm9uLXNlbGVjdGAgaXMgZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEFuIGBpcm9uLXNlbGVjdGAgZXZlbnQuXG4gICAqL1xuICBfb25Jcm9uU2VsZWN0OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShldmVudC5kZXRhaWwuaXRlbSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGBpcm9uLWRlc2VsZWN0YCBpcyBmaXJlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQW4gYGlyb24tZGVzZWxlY3RgIGV2ZW50LlxuICAgKi9cbiAgX29uSXJvbkRlc2VsZWN0OiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShudWxsKTtcbiAgfSxcblxuICAvKipcbiAgICogQSBoYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIGRyb3Bkb3duIGlzIHRhcHBlZC5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQSB0YXAgZXZlbnQuXG4gICAqL1xuICBfb25UYXA6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGdlc3R1cmVzLmZpbmRPcmlnaW5hbFRhcmdldChldmVudCkgPT09IHRoaXMpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ29tcHV0ZSB0aGUgbGFiZWwgZm9yIHRoZSBkcm9wZG93biBnaXZlbiBhIHNlbGVjdGVkIGl0ZW0uXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gc2VsZWN0ZWRJdGVtIEEgc2VsZWN0ZWQgRWxlbWVudCBpdGVtLCB3aXRoIGFuXG4gICAqIG9wdGlvbmFsIGBsYWJlbGAgcHJvcGVydHkuXG4gICAqL1xuICBfc2VsZWN0ZWRJdGVtQ2hhbmdlZDogZnVuY3Rpb24oc2VsZWN0ZWRJdGVtKSB7XG4gICAgdmFyIHZhbHVlID0gJyc7XG4gICAgaWYgKCFzZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHZhbHVlID0gJyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhbHVlID0gc2VsZWN0ZWRJdGVtLmxhYmVsIHx8IHNlbGVjdGVkSXRlbS5nZXRBdHRyaWJ1dGUoJ2xhYmVsJykgfHxcbiAgICAgICAgICBzZWxlY3RlZEl0ZW0udGV4dENvbnRlbnQudHJpbSgpO1xuICAgIH1cblxuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW1MYWJlbCh2YWx1ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIHZlcnRpY2FsIG9mZnNldCBvZiB0aGUgbWVudSBiYXNlZCBvbiB0aGUgdmFsdWUgb2ZcbiAgICogYG5vTGFiZWxGbG9hdGAuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gbm9MYWJlbEZsb2F0IFRydWUgaWYgdGhlIGxhYmVsIHNob3VsZCBub3QgZmxvYXRcbiAgICogQHBhcmFtIHtudW1iZXI9fSBvcHRfdmVydGljYWxPZmZzZXQgT3B0aW9uYWwgb2Zmc2V0IGZyb20gdGhlIHVzZXJcbiAgICogYWJvdmUgdGhlIGlucHV0LCBvdGhlcndpc2UgZmFsc2UuXG4gICAqL1xuICBfY29tcHV0ZU1lbnVWZXJ0aWNhbE9mZnNldDogZnVuY3Rpb24obm9MYWJlbEZsb2F0LCBvcHRfdmVydGljYWxPZmZzZXQpIHtcbiAgICAvLyBPdmVycmlkZSBvZmZzZXQgaWYgaXQncyBwYXNzZWQgZnJvbSB0aGUgdXNlci5cbiAgICBpZiAob3B0X3ZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgICByZXR1cm4gb3B0X3ZlcnRpY2FsT2Zmc2V0O1xuICAgIH1cblxuICAgIC8vIE5PVEUoY2RhdGEpOiBUaGVzZSBudW1iZXJzIGFyZSBzb21ld2hhdCBtYWdpY2FsIGJlY2F1c2UgdGhleSBhcmVcbiAgICAvLyBkZXJpdmVkIGZyb20gdGhlIG1ldHJpY3Mgb2YgZWxlbWVudHMgaW50ZXJuYWwgdG8gYHBhcGVyLWlucHV0YCdzXG4gICAgLy8gdGVtcGxhdGUuIFRoZSBtZXRyaWNzIHdpbGwgY2hhbmdlIGRlcGVuZGluZyBvbiB3aGV0aGVyIG9yIG5vdCB0aGVcbiAgICAvLyBpbnB1dCBoYXMgYSBmbG9hdGluZyBsYWJlbC5cbiAgICByZXR1cm4gbm9MYWJlbEZsb2F0ID8gLTQgOiA4O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGZhbHNlIGlmIHRoZSBlbGVtZW50IGlzIHJlcXVpcmVkIGFuZCBkb2VzIG5vdCBoYXZlIGEgc2VsZWN0aW9uLFxuICAgKiBhbmQgdHJ1ZSBvdGhlcndpc2UuXG4gICAqIEBwYXJhbSB7Kj19IF92YWx1ZSBJZ25vcmVkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSB0cnVlIGlmIGByZXF1aXJlZGAgaXMgZmFsc2UsIG9yIGlmIGByZXF1aXJlZGAgaXMgdHJ1ZVxuICAgKiBhbmQgdGhlIGVsZW1lbnQgaGFzIGEgdmFsaWQgc2VsZWN0aW9uLlxuICAgKi9cbiAgX2dldFZhbGlkaXR5OiBmdW5jdGlvbihfdmFsdWUpIHtcbiAgICByZXR1cm4gdGhpcy5kaXNhYmxlZCB8fCAhdGhpcy5yZXF1aXJlZCB8fCAodGhpcy5yZXF1aXJlZCAmJiAhIXRoaXMudmFsdWUpO1xuICB9LFxuXG4gIF9vcGVuZWRDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3BlblN0YXRlID0gdGhpcy5vcGVuZWQgPyAndHJ1ZScgOiAnZmFsc2UnO1xuICAgIHZhciBlID0gdGhpcy5jb250ZW50RWxlbWVudDtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zZXRBdHRyaWJ1dGUoJ2FyaWEtZXhwYW5kZWQnLCBvcGVuU3RhdGUpO1xuICAgIH1cbiAgfSxcblxuICBfY29tcHV0ZUxhYmVsQ2xhc3M6IGZ1bmN0aW9uKG5vTGFiZWxGbG9hdCwgYWx3YXlzRmxvYXRMYWJlbCwgaGFzQ29udGVudCkge1xuICAgIHZhciBjbHMgPSAnJztcbiAgICBpZiAobm9MYWJlbEZsb2F0ID09PSB0cnVlKSB7XG4gICAgICByZXR1cm4gaGFzQ29udGVudCA/ICdsYWJlbC1pcy1oaWRkZW4nIDogJyc7XG4gICAgfVxuXG4gICAgaWYgKGhhc0NvbnRlbnQgfHwgYWx3YXlzRmxvYXRMYWJlbCA9PT0gdHJ1ZSkge1xuICAgICAgY2xzICs9ICcgbGFiZWwtaXMtZmxvYXRpbmcnO1xuICAgIH1cbiAgICByZXR1cm4gY2xzO1xuICB9LFxuXG4gIF92YWx1ZUNoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE9ubHkgdXBkYXRlIGlmIGl0J3MgYWN0dWFsbHkgZGlmZmVyZW50LlxuICAgIGlmICh0aGlzLiQuaW5wdXQgJiYgdGhpcy4kLmlucHV0LnRleHRDb250ZW50ICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLiQuaW5wdXQudGV4dENvbnRlbnQgPSB0aGlzLnZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9zZXRIYXNDb250ZW50KCEhdGhpcy52YWx1ZSk7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuXG5pbXBvcnQge1BhcGVySW5reUZvY3VzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWJlaGF2aW9ycy9wYXBlci1pbmt5LWZvY3VzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbSWNvblxudG9nZ2xlc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2J1dHRvbnMuaHRtbCNidXR0b25zLXRvZ2dsZS1idXR0b25zKVxuXG5gcGFwZXItaWNvbi1idXR0b25gIGlzIGEgYnV0dG9uIHdpdGggYW4gaW1hZ2UgcGxhY2VkIGF0IHRoZSBjZW50ZXIuIFdoZW4gdGhlXG51c2VyIHRvdWNoZXMgdGhlIGJ1dHRvbiwgYSByaXBwbGUgZWZmZWN0IGVtYW5hdGVzIGZyb20gdGhlIGNlbnRlciBvZiB0aGUgYnV0dG9uLlxuXG5gcGFwZXItaWNvbi1idXR0b25gIGRvZXMgbm90IGluY2x1ZGUgYSBkZWZhdWx0IGljb24gc2V0LiBUbyB1c2UgaWNvbnMgZnJvbSB0aGVcbmRlZmF1bHQgc2V0LCBpbmNsdWRlIGBQb2x5bWVyRWxlbWVudHMvaXJvbi1pY29ucy9pcm9uLWljb25zLmh0bWxgLCBhbmQgdXNlIHRoZVxuYGljb25gIGF0dHJpYnV0ZSB0byBzcGVjaWZ5IHdoaWNoIGljb24gZnJvbSB0aGUgaWNvbiBzZXQgdG8gdXNlLlxuXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJtZW51XCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cblxuU2VlIFtgaXJvbi1pY29uc2V0YF0oaXJvbi1pY29uc2V0KSBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dFxuaG93IHRvIHVzZSBhIGN1c3RvbSBpY29uIHNldC5cblxuRXhhbXBsZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanMnO1xuICAgIDwvc2NyaXB0PlxuXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJmYXZvcml0ZVwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgPHBhcGVyLWljb24tYnV0dG9uIHNyYz1cInN0YXIucG5nXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cblxuVG8gdXNlIGBwYXBlci1pY29uLWJ1dHRvbmAgYXMgYSBsaW5rLCB3cmFwIGl0IGluIGFuIGFuY2hvciB0YWcuIFNpbmNlXG5gcGFwZXItaWNvbi1idXR0b25gIHdpbGwgYWxyZWFkeSByZWNlaXZlIGZvY3VzLCB5b3UgbWF5IHdhbnQgdG8gcHJldmVudCB0aGVcbmFuY2hvciB0YWcgZnJvbSByZWNlaXZpbmcgZm9jdXMgYXMgd2VsbCBieSBzZXR0aW5nIGl0cyB0YWJpbmRleCB0byAtMS5cblxuICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5wb2x5bWVyLXByb2plY3Qub3JnXCIgdGFiaW5kZXg9XCItMVwiPlxuICAgICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJwb2x5bWVyXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgICA8L2E+XG5cbiMjIyBTdHlsaW5nXG5cblN0eWxlIHRoZSBidXR0b24gd2l0aCBDU1MgYXMgeW91IHdvdWxkIGEgbm9ybWFsIERPTSBlbGVtZW50LiBJZiB5b3UgYXJlIHVzaW5nXG50aGUgaWNvbnMgcHJvdmlkZWQgYnkgYGlyb24taWNvbnNgLCB0aGV5IHdpbGwgaW5oZXJpdCB0aGUgZm9yZWdyb3VuZCBjb2xvciBvZlxudGhlIGJ1dHRvbi5cblxuICAgIC8qIG1ha2UgYSByZWQgXCJmYXZvcml0ZVwiIGJ1dHRvbiAqXFwvXG4gICAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJmYXZvcml0ZVwiIHN0eWxlPVwiY29sb3I6IHJlZDtcIj48L3BhcGVyLWljb24tYnV0dG9uPlxuXG5CeSBkZWZhdWx0LCB0aGUgcmlwcGxlIGlzIHRoZSBzYW1lIGNvbG9yIGFzIHRoZSBmb3JlZ3JvdW5kIGF0IDI1JSBvcGFjaXR5LiBZb3Vcbm1heSBjdXN0b21pemUgdGhlIGNvbG9yIHVzaW5nIHRoZSBgLS1wYXBlci1pY29uLWJ1dHRvbi1pbmstY29sb3JgIGN1c3RvbVxucHJvcGVydHkuXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1pY29uLWJ1dHRvbi1kaXNhYmxlZC10ZXh0YCB8IFRoZSBjb2xvciBvZiB0aGUgZGlzYWJsZWQgYnV0dG9uIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWljb24tYnV0dG9uLWluay1jb2xvcmAgfCBTZWxlY3RlZC9mb2N1cyByaXBwbGUgY29sb3IgfCBgLS1wcmltYXJ5LXRleHQtY29sb3JgXG5gLS1wYXBlci1pY29uLWJ1dHRvbmAgfCBNaXhpbiBmb3IgYSBidXR0b24gfCBge31gXG5gLS1wYXBlci1pY29uLWJ1dHRvbi1kaXNhYmxlZGAgfCBNaXhpbiBmb3IgYSBkaXNhYmxlZCBidXR0b24gfCBge31gXG5gLS1wYXBlci1pY29uLWJ1dHRvbi1ob3ZlcmAgfCBNaXhpbiBmb3IgYnV0dG9uIG9uIGhvdmVyIHwgYHt9YFxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWljb24tYnV0dG9uXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1pY29uLWJ1dHRvbicsXG5cbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB6LWluZGV4OiAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcblxuICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuXG4gICAgICAgIC8qXG4gICAgICAgICAgTk9URTogQm90aCB2YWx1ZXMgYXJlIG5lZWRlZCwgc2luY2Ugc29tZSBwaG9uZXMgcmVxdWlyZSB0aGUgdmFsdWUgdG9cbiAgICAgICAgICBiZSBcXGB0cmFuc3BhcmVudFxcYC5cbiAgICAgICAgKi9cbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiByZ2JhKDAsIDAsIDAsIDApO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgICAgIC8qIEJlY2F1c2Ugb2YgcG9seW1lci8yNTU4LCB0aGlzIHN0eWxlIGhhcyBsb3dlciBzcGVjaWZpY2l0eSB0aGFuICogKi9cbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24tYnV0dG9uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCAjaW5rIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWljb24tYnV0dG9uLWluay1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG4gICAgICAgIG9wYWNpdHk6IDAuNjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItaWNvbi1idXR0b24tZGlzYWJsZWQtdGV4dCwgdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcikpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgY3Vyc29yOiBhdXRvO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWljb24tYnV0dG9uLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3Zlcikge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1pY29uLWJ1dHRvbi1ob3ZlcjtcbiAgICAgIH1cblxuICAgICAgaXJvbi1pY29uIHtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDEwMCU7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGlyb24taWNvbiBpZD1cImljb25cIiBzcmM9XCJbW3NyY11dXCIgaWNvbj1cIltbaWNvbl1dXCJcbiAgICAgICAgICAgICAgIGFsdCQ9XCJbW2FsdF1dXCI+PC9pcm9uLWljb24+XG4gIGAsXG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnYnV0dG9uJywgdGFiaW5kZXg6ICcwJ30sXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJJbmt5Rm9jdXNCZWhhdmlvcl0sXG5cbiAgcmVnaXN0ZXJlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdGVtcGxhdGUuc2V0QXR0cmlidXRlKCdzdHJpcC13aGl0ZXNwYWNlJywgJycpO1xuICB9LFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgVVJMIG9mIGFuIGltYWdlIGZvciB0aGUgaWNvbi4gSWYgdGhlIHNyYyBwcm9wZXJ0eSBpcyBzcGVjaWZpZWQsXG4gICAgICogdGhlIGljb24gcHJvcGVydHkgc2hvdWxkIG5vdCBiZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBpY29uIG5hbWUgb3IgaW5kZXggaW4gdGhlIHNldCBvZiBpY29ucyBhdmFpbGFibGUgaW5cbiAgICAgKiB0aGUgaWNvbidzIGljb24gc2V0LiBJZiB0aGUgaWNvbiBwcm9wZXJ0eSBpcyBzcGVjaWZpZWQsXG4gICAgICogdGhlIHNyYyBwcm9wZXJ0eSBzaG91bGQgbm90IGJlLlxuICAgICAqL1xuICAgIGljb246IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogU3BlY2lmaWVzIHRoZSBhbHRlcm5hdGUgdGV4dCBmb3IgdGhlIGJ1dHRvbiwgZm9yIGFjY2Vzc2liaWxpdHkuXG4gICAgICovXG4gICAgYWx0OiB7dHlwZTogU3RyaW5nLCBvYnNlcnZlcjogJ19hbHRDaGFuZ2VkJ31cbiAgfSxcblxuICBfYWx0Q2hhbmdlZDogZnVuY3Rpb24obmV3VmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdmFyIGxhYmVsID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKTtcblxuICAgIC8vIERvbid0IHN0b21wIG92ZXIgYSB1c2VyLXNldCBhcmlhLWxhYmVsLlxuICAgIGlmICghbGFiZWwgfHwgb2xkVmFsdWUgPT0gbGFiZWwpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgbmV3VmFsdWUpO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEJBO0FBcUJBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBO0FBVkE7QUFDQTtBQWNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbEdBOzs7Ozs7Ozs7Ozs7QUN6QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUEyREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBOENBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFQQTtBQUNBO0FBVUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMEVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFrTUE7QUFFQTtBQVFBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBeEZBO0FBMkZBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBdmNBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNERBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSEE7QUFpRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBakJBO0FBb0JBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBcEdBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=