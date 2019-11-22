(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config~panel-lovelace"],{

/***/ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js":
/*!************************************************************************!*\
  !*** ./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js ***!
  \************************************************************************/
/*! exports provided: IronMenuBehaviorImpl, IronMenuBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehaviorImpl", function() { return IronMenuBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMenuBehavior", function() { return IronMenuBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-selector/iron-multi-selectable.js */ "./node_modules/@polymer/iron-selector/iron-multi-selectable.js");
/* harmony import */ var _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-selector/iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
 * `IronMenuBehavior` implements accessible menu behavior.
 *
 * @demo demo/index.html
 * @polymerBehavior IronMenuBehavior
 */

const IronMenuBehaviorImpl = {
  properties: {
    /**
     * Returns the currently focused item.
     * @type {?Object}
     */
    focusedItem: {
      observer: '_focusedItemChanged',
      readOnly: true,
      type: Object
    },

    /**
     * The attribute to use on menu items to look up the item title. Typing the
     * first letter of an item when the menu is open focuses that item. If
     * unset, `textContent` will be used.
     */
    attrForItemTitle: {
      type: String
    },

    /**
     * @type {boolean}
     */
    disabled: {
      type: Boolean,
      value: false,
      observer: '_disabledChanged'
    }
  },

  /**
   * The list of keys has been taken from
   * https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/getModifierState
   * @private
   */
  _MODIFIER_KEYS: ['Alt', 'AltGraph', 'CapsLock', 'Control', 'Fn', 'FnLock', 'Hyper', 'Meta', 'NumLock', 'OS', 'ScrollLock', 'Shift', 'Super', 'Symbol', 'SymbolLock'],

  /** @private */
  _SEARCH_RESET_TIMEOUT_MS: 1000,

  /** @private */
  _previousTabIndex: 0,
  hostAttributes: {
    'role': 'menu'
  },
  observers: ['_updateMultiselectable(multi)'],
  listeners: {
    'focus': '_onFocus',
    'keydown': '_onKeydown',
    'iron-items-changed': '_onIronItemsChanged'
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'up': '_onUpKey',
    'down': '_onDownKey',
    'esc': '_onEscKey',
    'shift+tab:keydown': '_onShiftTabDown'
  },
  attached: function () {
    this._resetTabindices();
  },

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    // Cancel automatically focusing a default item if the menu received focus
    // through a user action selecting a particular item.
    if (this._defaultFocusAsync) {
      this.cancelAsync(this._defaultFocusAsync);
      this._defaultFocusAsync = null;
    }

    var item = this._valueToItem(value);

    if (item && item.hasAttribute('disabled')) return;

    this._setFocusedItem(item);

    _polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehaviorImpl"].select.apply(this, arguments);
  },

  /**
   * Resets all tabindex attributes to the appropriate value based on the
   * current selection state. The appropriate value is `0` (focusable) for
   * the default selected item, and `-1` (not keyboard focusable) for all
   * other items. Also sets the correct initial values for aria-selected
   * attribute, true for default selected item and false for others.
   */
  _resetTabindices: function () {
    var firstSelectedItem = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem;
    this.items.forEach(function (item) {
      item.setAttribute('tabindex', item === firstSelectedItem ? '0' : '-1');
      item.setAttribute('aria-selected', this._selection.isSelected(item));
    }, this);
  },

  /**
   * Sets appropriate ARIA based on whether or not the menu is meant to be
   * multi-selectable.
   *
   * @param {boolean} multi True if the menu should be multi-selectable.
   */
  _updateMultiselectable: function (multi) {
    if (multi) {
      this.setAttribute('aria-multiselectable', 'true');
    } else {
      this.removeAttribute('aria-multiselectable');
    }
  },

  /**
   * Given a KeyboardEvent, this method will focus the appropriate item in the
   * menu (if there is a relevant item, and it is possible to focus it).
   *
   * @param {KeyboardEvent} event A KeyboardEvent.
   */
  _focusWithKeyboardEvent: function (event) {
    // Make sure that the key pressed is not a modifier key.
    // getModifierState is not being used, as it is not available in Safari
    // earlier than 10.0.2 (https://trac.webkit.org/changeset/206725/webkit)
    if (this._MODIFIER_KEYS.indexOf(event.key) !== -1) return;
    this.cancelDebouncer('_clearSearchText');
    var searchText = this._searchText || '';
    var key = event.key && event.key.length == 1 ? event.key : String.fromCharCode(event.keyCode);
    searchText += key.toLocaleLowerCase();
    var searchLength = searchText.length;

    for (var i = 0, item; item = this.items[i]; i++) {
      if (item.hasAttribute('disabled')) {
        continue;
      }

      var attr = this.attrForItemTitle || 'textContent';
      var title = (item[attr] || item.getAttribute(attr) || '').trim();

      if (title.length < searchLength) {
        continue;
      }

      if (title.slice(0, searchLength).toLocaleLowerCase() == searchText) {
        this._setFocusedItem(item);

        break;
      }
    }

    this._searchText = searchText;
    this.debounce('_clearSearchText', this._clearSearchText, this._SEARCH_RESET_TIMEOUT_MS);
  },
  _clearSearchText: function () {
    this._searchText = '';
  },

  /**
   * Focuses the previous item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusPrevious: function () {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex - i + length) % length];

      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;

        this._setFocusedItem(item); // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.


        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Focuses the next item (relative to the currently focused item) in the
   * menu, disabled items will be skipped.
   * Loop until length + 1 to handle case of single item in menu.
   */
  _focusNext: function () {
    var length = this.items.length;
    var curFocusIndex = Number(this.indexOf(this.focusedItem));

    for (var i = 1; i < length + 1; i++) {
      var item = this.items[(curFocusIndex + i) % length];

      if (!item.hasAttribute('disabled')) {
        var owner = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(item).getOwnerRoot() || document;

        this._setFocusedItem(item); // Focus might not have worked, if the element was hidden or not
        // focusable. In that case, try again.


        if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(owner).activeElement == item) {
          return;
        }
      }
    }
  },

  /**
   * Mutates items in the menu based on provided selection details, so that
   * all items correctly reflect selection state.
   *
   * @param {Element} item An item in the menu.
   * @param {boolean} isSelected True if the item should be shown in a
   * selected state, otherwise false.
   */
  _applySelection: function (item, isSelected) {
    if (isSelected) {
      item.setAttribute('aria-selected', 'true');
    } else {
      item.setAttribute('aria-selected', 'false');
    }

    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._applySelection.apply(this, arguments);
  },

  /**
   * Discretely updates tabindex values among menu items as the focused item
   * changes.
   *
   * @param {Element} focusedItem The element that is currently focused.
   * @param {?Element} old The last element that was considered focused, if
   * applicable.
   */
  _focusedItemChanged: function (focusedItem, old) {
    old && old.setAttribute('tabindex', '-1');

    if (focusedItem && !focusedItem.hasAttribute('disabled') && !this.disabled) {
      focusedItem.setAttribute('tabindex', '0');
      focusedItem.focus();
    }
  },

  /**
   * A handler that responds to mutation changes related to the list of items
   * in the menu.
   *
   * @param {CustomEvent} event An event containing mutation records as its
   * detail.
   */
  _onIronItemsChanged: function (event) {
    if (event.detail.addedNodes.length) {
      this._resetTabindices();
    }
  },

  /**
   * Handler that is called when a shift+tab keypress is detected by the menu.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onShiftTabDown: function (event) {
    var oldTabIndex = this.getAttribute('tabindex');
    IronMenuBehaviorImpl._shiftTabPressed = true;

    this._setFocusedItem(null);

    this.setAttribute('tabindex', '-1');
    this.async(function () {
      this.setAttribute('tabindex', oldTabIndex);
      IronMenuBehaviorImpl._shiftTabPressed = false; // NOTE(cdata): polymer/polymer#1305
    }, 1);
  },

  /**
   * Handler that is called when the menu receives focus.
   *
   * @param {FocusEvent} event A focus event.
   */
  _onFocus: function (event) {
    if (IronMenuBehaviorImpl._shiftTabPressed) {
      // do not focus the menu itself
      return;
    } // Do not focus the selected tab if the deepest target is part of the
    // menu element's local DOM and is focusable.


    var rootTarget =
    /** @type {?HTMLElement} */
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_4__["dom"])(event).rootTarget;

    if (rootTarget !== this && typeof rootTarget.tabIndex !== 'undefined' && !this.isLightDescendant(rootTarget)) {
      return;
    } // clear the cached focus item


    this._defaultFocusAsync = this.async(function () {
      // focus the selected item when the menu receives focus, or the first item
      // if no item is selected
      var firstSelectedItem = this.multi ? this.selectedItems && this.selectedItems[0] : this.selectedItem;

      this._setFocusedItem(null);

      if (firstSelectedItem) {
        this._setFocusedItem(firstSelectedItem);
      } else if (this.items[0]) {
        // We find the first none-disabled item (if one exists)
        this._focusNext();
      }
    });
  },

  /**
   * Handler that is called when the up key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onUpKey: function (event) {
    // up and down arrows moves the focus
    this._focusPrevious();

    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the down key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onDownKey: function (event) {
    this._focusNext();

    event.detail.keyboardEvent.preventDefault();
  },

  /**
   * Handler that is called when the esc key is pressed.
   *
   * @param {CustomEvent} event A key combination event.
   */
  _onEscKey: function (event) {
    var focusedItem = this.focusedItem;

    if (focusedItem) {
      focusedItem.blur();
    }
  },

  /**
   * Handler that is called when a keydown event is detected.
   *
   * @param {KeyboardEvent} event A keyboard event.
   */
  _onKeydown: function (event) {
    if (!this.keyboardEventMatchesKeys(event, 'up down esc')) {
      // all other keys focus the menu item starting with that character
      this._focusWithKeyboardEvent(event);
    }

    event.stopPropagation();
  },
  // override _activateHandler
  _activateHandler: function (event) {
    _polymer_iron_selector_iron_selectable_js__WEBPACK_IMPORTED_MODULE_3__["IronSelectableBehavior"]._activateHandler.call(this, event);

    event.stopPropagation();
  },

  /**
   * Updates this element's tab index when it's enabled/disabled.
   * @param {boolean} disabled
   */
  _disabledChanged: function (disabled) {
    if (disabled) {
      this._previousTabIndex = this.hasAttribute('tabindex') ? this.tabIndex : 0;
      this.removeAttribute('tabindex'); // No tabindex means not tab-able or select-able.
    } else if (!this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', this._previousTabIndex);
    }
  }
};
IronMenuBehaviorImpl._shiftTabPressed = false;
/** @polymerBehavior */

const IronMenuBehavior = [_polymer_iron_selector_iron_multi_selectable_js__WEBPACK_IMPORTED_MODULE_2__["IronMultiSelectableBehavior"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], IronMenuBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-multi-selectable.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-multi-selectable.js ***!
  \**********************************************************************/
/*! exports provided: IronMultiSelectableBehaviorImpl, IronMultiSelectableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehaviorImpl", function() { return IronMultiSelectableBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronMultiSelectableBehavior", function() { return IronMultiSelectableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-selectable.js */ "./node_modules/@polymer/iron-selector/iron-selectable.js");
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
 * @polymerBehavior IronMultiSelectableBehavior
 */

const IronMultiSelectableBehaviorImpl = {
  properties: {
    /**
     * If true, multiple selections are allowed.
     */
    multi: {
      type: Boolean,
      value: false,
      observer: 'multiChanged'
    },

    /**
     * Gets or sets the selected elements. This is used instead of `selected`
     * when `multi` is true.
     */
    selectedValues: {
      type: Array,
      notify: true,
      value: function () {
        return [];
      }
    },

    /**
     * Returns an array of currently selected items.
     */
    selectedItems: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function () {
        return [];
      }
    }
  },
  observers: ['_updateSelected(selectedValues.splices)'],

  /**
   * Selects the given value. If the `multi` property is true, then the selected
   * state of the `value` will be toggled; otherwise the `value` will be
   * selected.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    if (this.multi) {
      this._toggleSelected(value);
    } else {
      this.selected = value;
    }
  },
  multiChanged: function (multi) {
    this._selection.multi = multi;

    this._updateSelected();
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null || this.selectedValues != null && this.selectedValues.length;
  },

  _updateAttrForSelected: function () {
    if (!this.multi) {
      _iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"]._updateAttrForSelected.apply(this);
    } else if (this.selectedItems && this.selectedItems.length > 0) {
      this.selectedValues = this.selectedItems.map(function (selectedItem) {
        return this._indexToValue(this.indexOf(selectedItem));
      }, this).filter(function (unfilteredValue) {
        return unfilteredValue != null;
      }, this);
    }
  },
  _updateSelected: function () {
    if (this.multi) {
      this._selectMulti(this.selectedValues);
    } else {
      this._selectSelected(this.selected);
    }
  },
  _selectMulti: function (values) {
    values = values || [];
    var selectedItems = (this._valuesToItems(values) || []).filter(function (item) {
      return item !== null && item !== undefined;
    }); // clear all but the current selected items

    this._selection.clear(selectedItems); // select only those not selected yet


    for (var i = 0; i < selectedItems.length; i++) {
      this._selection.setItemSelected(selectedItems[i], true);
    } // Check for items, since this array is populated only when attached


    if (this.fallbackSelection && !this._selection.get().length) {
      var fallback = this._valueToItem(this.fallbackSelection);

      if (fallback) {
        this.select(this.fallbackSelection);
      }
    }
  },
  _selectionChange: function () {
    var s = this._selection.get();

    if (this.multi) {
      this._setSelectedItems(s);

      this._setSelectedItem(s.length ? s[0] : null);
    } else {
      if (s !== null && s !== undefined) {
        this._setSelectedItems([s]);

        this._setSelectedItem(s);
      } else {
        this._setSelectedItems([]);

        this._setSelectedItem(null);
      }
    }
  },
  _toggleSelected: function (value) {
    var i = this.selectedValues.indexOf(value);
    var unselected = i < 0;

    if (unselected) {
      this.push('selectedValues', value);
    } else {
      this.splice('selectedValues', i, 1);
    }
  },
  _valuesToItems: function (values) {
    return values == null ? null : values.map(function (value) {
      return this._valueToItem(value);
    }, this);
  }
};
/** @polymerBehavior */

const IronMultiSelectableBehavior = [_iron_selectable_js__WEBPACK_IMPORTED_MODULE_1__["IronSelectableBehavior"], IronMultiSelectableBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-selectable.js":
/*!****************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-selectable.js ***!
  \****************************************************************/
/*! exports provided: IronSelectableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronSelectableBehavior", function() { return IronSelectableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
/* harmony import */ var _iron_selection_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./iron-selection.js */ "./node_modules/@polymer/iron-selector/iron-selection.js");
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
 * @polymerBehavior
 */

const IronSelectableBehavior = {
  /**
   * Fired when iron-selector is activated (selected or deselected).
   * It is fired before the selected items are changed.
   * Cancel the event to abort selection.
   *
   * @event iron-activate
   */

  /**
   * Fired when an item is selected
   *
   * @event iron-select
   */

  /**
   * Fired when an item is deselected
   *
   * @event iron-deselect
   */

  /**
   * Fired when the list of selectable items changes (e.g., items are
   * added or removed). The detail of the event is a mutation record that
   * describes what changed.
   *
   * @event iron-items-changed
   */
  properties: {
    /**
     * If you want to use an attribute value or property of an element for
     * `selected` instead of the index, set this to the name of the attribute
     * or property. Hyphenated values are converted to camel case when used to
     * look up the property of a selectable element. Camel cased values are
     * *not* converted to hyphenated values for attribute lookup. It's
     * recommended that you provide the hyphenated form of the name so that
     * selection works in both cases. (Use `attr-or-property-name` instead of
     * `attrOrPropertyName`.)
     */
    attrForSelected: {
      type: String,
      value: null
    },

    /**
     * Gets or sets the selected element. The default is to use the index of the
     * item.
     * @type {string|number}
     */
    selected: {
      type: String,
      notify: true
    },

    /**
     * Returns the currently selected item.
     *
     * @type {?Object}
     */
    selectedItem: {
      type: Object,
      readOnly: true,
      notify: true
    },

    /**
     * The event that fires from items when they are selected. Selectable
     * will listen for this event from items and update the selection state.
     * Set to empty string to listen to no events.
     */
    activateEvent: {
      type: String,
      value: 'tap',
      observer: '_activateEventChanged'
    },

    /**
     * This is a CSS selector string.  If this is set, only items that match the
     * CSS selector are selectable.
     */
    selectable: String,

    /**
     * The class to set on elements when selected.
     */
    selectedClass: {
      type: String,
      value: 'iron-selected'
    },

    /**
     * The attribute to set on elements when selected.
     */
    selectedAttribute: {
      type: String,
      value: null
    },

    /**
     * Default fallback if the selection based on selected with
     * `attrForSelected` is not found.
     */
    fallbackSelection: {
      type: String,
      value: null
    },

    /**
     * The list of items from which a selection can be made.
     */
    items: {
      type: Array,
      readOnly: true,
      notify: true,
      value: function () {
        return [];
      }
    },

    /**
     * The set of excluded elements where the key is the `localName`
     * of the element that will be ignored from the item list.
     *
     * @default {template: 1}
     */
    _excludedLocalNames: {
      type: Object,
      value: function () {
        return {
          'template': 1,
          'dom-bind': 1,
          'dom-if': 1,
          'dom-repeat': 1
        };
      }
    }
  },
  observers: ['_updateAttrForSelected(attrForSelected)', '_updateSelected(selected)', '_checkFallback(fallbackSelection)'],
  created: function () {
    this._bindFilterItem = this._filterItem.bind(this);
    this._selection = new _iron_selection_js__WEBPACK_IMPORTED_MODULE_3__["IronSelection"](this._applySelection.bind(this));
  },
  attached: function () {
    this._observer = this._observeItems(this);

    this._addListener(this.activateEvent);
  },
  detached: function () {
    if (this._observer) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).unobserveNodes(this._observer);
    }

    this._removeListener(this.activateEvent);
  },

  /**
   * Returns the index of the given item.
   *
   * @method indexOf
   * @param {Object} item
   * @returns Returns the index of the item
   */
  indexOf: function (item) {
    return this.items ? this.items.indexOf(item) : -1;
  },

  /**
   * Selects the given value.
   *
   * @method select
   * @param {string|number} value the value to select.
   */
  select: function (value) {
    this.selected = value;
  },

  /**
   * Selects the previous item.
   *
   * @method selectPrevious
   */
  selectPrevious: function () {
    var length = this.items.length;
    var index = length - 1;

    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) - 1 + length) % length;
    }

    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the next item.
   *
   * @method selectNext
   */
  selectNext: function () {
    var index = 0;

    if (this.selected !== undefined) {
      index = (Number(this._valueToIndex(this.selected)) + 1) % this.items.length;
    }

    this.selected = this._indexToValue(index);
  },

  /**
   * Selects the item at the given index.
   *
   * @method selectIndex
   */
  selectIndex: function (index) {
    this.select(this._indexToValue(index));
  },

  /**
   * Force a synchronous update of the `items` property.
   *
   * NOTE: Consider listening for the `iron-items-changed` event to respond to
   * updates to the set of selectable items after updates to the DOM list and
   * selection state have been made.
   *
   * WARNING: If you are using this method, you should probably consider an
   * alternate approach. Synchronously querying for items is potentially
   * slow for many use cases. The `items` property will update asynchronously
   * on its own to reflect selectable items in the DOM.
   */
  forceSynchronousItemUpdate: function () {
    if (this._observer && typeof this._observer.flush === 'function') {
      // NOTE(bicknellr): `dom.flush` above is no longer sufficient to trigger
      // `observeNodes` callbacks. Polymer 2.x returns an object from
      // `observeNodes` with a `flush` that synchronously gives the callback any
      // pending MutationRecords (retrieved with `takeRecords`). Any case where
      // ShadyDOM flushes were expected to synchronously trigger item updates
      // will now require calling `forceSynchronousItemUpdate`.
      this._observer.flush();
    } else {
      this._updateItems();
    }
  },

  // UNUSED, FOR API COMPATIBILITY
  get _shouldUpdateSelection() {
    return this.selected != null;
  },

  _checkFallback: function () {
    this._updateSelected();
  },
  _addListener: function (eventName) {
    this.listen(this, eventName, '_activateHandler');
  },
  _removeListener: function (eventName) {
    this.unlisten(this, eventName, '_activateHandler');
  },
  _activateEventChanged: function (eventName, old) {
    this._removeListener(old);

    this._addListener(eventName);
  },
  _updateItems: function () {
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).queryDistributedElements(this.selectable || '*');
    nodes = Array.prototype.filter.call(nodes, this._bindFilterItem);

    this._setItems(nodes);
  },
  _updateAttrForSelected: function () {
    if (this.selectedItem) {
      this.selected = this._valueForItem(this.selectedItem);
    }
  },
  _updateSelected: function () {
    this._selectSelected(this.selected);
  },
  _selectSelected: function (selected) {
    if (!this.items) {
      return;
    }

    var item = this._valueToItem(this.selected);

    if (item) {
      this._selection.select(item);
    } else {
      this._selection.clear();
    } // Check for items, since this array is populated only when attached
    // Since Number(0) is falsy, explicitly check for undefined


    if (this.fallbackSelection && this.items.length && this._selection.get() === undefined) {
      this.selected = this.fallbackSelection;
    }
  },
  _filterItem: function (node) {
    return !this._excludedLocalNames[node.localName];
  },
  _valueToItem: function (value) {
    return value == null ? null : this.items[this._valueToIndex(value)];
  },
  _valueToIndex: function (value) {
    if (this.attrForSelected) {
      for (var i = 0, item; item = this.items[i]; i++) {
        if (this._valueForItem(item) == value) {
          return i;
        }
      }
    } else {
      return Number(value);
    }
  },
  _indexToValue: function (index) {
    if (this.attrForSelected) {
      var item = this.items[index];

      if (item) {
        return this._valueForItem(item);
      }
    } else {
      return index;
    }
  },
  _valueForItem: function (item) {
    if (!item) {
      return null;
    }

    if (!this.attrForSelected) {
      var i = this.indexOf(item);
      return i === -1 ? null : i;
    }

    var propValue = item[Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_2__["dashToCamelCase"])(this.attrForSelected)];
    return propValue != undefined ? propValue : item.getAttribute(this.attrForSelected);
  },
  _applySelection: function (item, isSelected) {
    if (this.selectedClass) {
      this.toggleClass(this.selectedClass, isSelected, item);
    }

    if (this.selectedAttribute) {
      this.toggleAttribute(this.selectedAttribute, isSelected, item);
    }

    this._selectionChange();

    this.fire('iron-' + (isSelected ? 'select' : 'deselect'), {
      item: item
    });
  },
  _selectionChange: function () {
    this._setSelectedItem(this._selection.get());
  },
  // observe items change under the given node.
  _observeItems: function (node) {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(node).observeNodes(function (mutation) {
      this._updateItems();

      this._updateSelected(); // Let other interested parties know about the change so that
      // we don't have to recreate mutation observers everywhere.


      this.fire('iron-items-changed', mutation, {
        bubbles: false,
        cancelable: false
      });
    });
  },
  _activateHandler: function (e) {
    var t = e.target;
    var items = this.items;

    while (t && t != this) {
      var i = items.indexOf(t);

      if (i >= 0) {
        var value = this._indexToValue(i);

        this._itemActivate(value, t);

        return;
      }

      t = t.parentNode;
    }
  },
  _itemActivate: function (value, item) {
    if (!this.fire('iron-activate', {
      selected: value,
      item: item
    }, {
      cancelable: true
    }).defaultPrevented) {
      this.select(value);
    }
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-selector/iron-selection.js":
/*!***************************************************************!*\
  !*** ./node_modules/@polymer/iron-selector/iron-selection.js ***!
  \***************************************************************/
/*! exports provided: IronSelection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronSelection", function() { return IronSelection; });
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

class IronSelection {
  /**
   * @param {!Function} selectCallback
   * @suppress {missingProvide}
   */
  constructor(selectCallback) {
    this.selection = [];
    this.selectCallback = selectCallback;
  }
  /**
   * Retrieves the selected item(s).
   *
   * @returns Returns the selected item(s). If the multi property is true,
   * `get` will return an array, otherwise it will return
   * the selected item or undefined if there is no selection.
   */


  get() {
    return this.multi ? this.selection.slice() : this.selection[0];
  }
  /**
   * Clears all the selection except the ones indicated.
   *
   * @param {Array} excludes items to be excluded.
   */


  clear(excludes) {
    this.selection.slice().forEach(function (item) {
      if (!excludes || excludes.indexOf(item) < 0) {
        this.setItemSelected(item, false);
      }
    }, this);
  }
  /**
   * Indicates if a given item is selected.
   *
   * @param {*} item The item whose selection state should be checked.
   * @return {boolean} Returns true if `item` is selected.
   */


  isSelected(item) {
    return this.selection.indexOf(item) >= 0;
  }
  /**
   * Sets the selection state for a given item to either selected or deselected.
   *
   * @param {*} item The item to select.
   * @param {boolean} isSelected True for selected, false for deselected.
   */


  setItemSelected(item, isSelected) {
    if (item != null) {
      if (isSelected !== this.isSelected(item)) {
        // proceed to update selection only if requested state differs from
        // current
        if (isSelected) {
          this.selection.push(item);
        } else {
          var i = this.selection.indexOf(item);

          if (i >= 0) {
            this.selection.splice(i, 1);
          }
        }

        if (this.selectCallback) {
          this.selectCallback(item, isSelected);
        }
      }
    }
  }
  /**
   * Sets the selection state for a given item. If the `multi` property
   * is true, then the selected state of `item` will be toggled; otherwise
   * the `item` will be selected.
   *
   * @param {*} item The item to select.
   */


  select(item) {
    if (this.multi) {
      this.toggle(item);
    } else if (this.get() !== item) {
      this.setItemSelected(this.get(), false);
      this.setItemSelected(item, true);
    }
  }
  /**
   * Toggles the selection state for `item`.
   *
   * @param {*} item The item to toggle.
   */


  toggle(item) {
    this.setItemSelected(item, !this.isSelected(item));
  }

}
;

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nfm9uYm9hcmRpbmctY29yZS1jb25maWd+cGFuZWwtbG92ZWxhY2UuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLW11bHRpLXNlbGVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1zZWxlY3RhYmxlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLXNlbGVjdG9yL2lyb24tc2VsZWN0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uQTExeUtleXNCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3IsIElyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tc2VsZWN0b3IvaXJvbi1tdWx0aS1zZWxlY3RhYmxlLmpzJztcbmltcG9ydCB7SXJvblNlbGVjdGFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1zZWxlY3Rvci9pcm9uLXNlbGVjdGFibGUuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICogYElyb25NZW51QmVoYXZpb3JgIGltcGxlbWVudHMgYWNjZXNzaWJsZSBtZW51IGJlaGF2aW9yLlxuICpcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uTWVudUJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uTWVudUJlaGF2aW9ySW1wbCA9IHtcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtLlxuICAgICAqIEB0eXBlIHs/T2JqZWN0fVxuICAgICAqL1xuICAgIGZvY3VzZWRJdGVtOlxuICAgICAgICB7b2JzZXJ2ZXI6ICdfZm9jdXNlZEl0ZW1DaGFuZ2VkJywgcmVhZE9ubHk6IHRydWUsIHR5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXR0cmlidXRlIHRvIHVzZSBvbiBtZW51IGl0ZW1zIHRvIGxvb2sgdXAgdGhlIGl0ZW0gdGl0bGUuIFR5cGluZyB0aGVcbiAgICAgKiBmaXJzdCBsZXR0ZXIgb2YgYW4gaXRlbSB3aGVuIHRoZSBtZW51IGlzIG9wZW4gZm9jdXNlcyB0aGF0IGl0ZW0uIElmXG4gICAgICogdW5zZXQsIGB0ZXh0Q29udGVudGAgd2lsbCBiZSB1c2VkLlxuICAgICAqL1xuICAgIGF0dHJGb3JJdGVtVGl0bGU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Jvb2xlYW59XG4gICAgICovXG4gICAgZGlzYWJsZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICBvYnNlcnZlcjogJ19kaXNhYmxlZENoYW5nZWQnLFxuICAgIH0sXG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBsaXN0IG9mIGtleXMgaGFzIGJlZW4gdGFrZW4gZnJvbVxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvS2V5Ym9hcmRFdmVudC9nZXRNb2RpZmllclN0YXRlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfTU9ESUZJRVJfS0VZUzogW1xuICAgICdBbHQnLFxuICAgICdBbHRHcmFwaCcsXG4gICAgJ0NhcHNMb2NrJyxcbiAgICAnQ29udHJvbCcsXG4gICAgJ0ZuJyxcbiAgICAnRm5Mb2NrJyxcbiAgICAnSHlwZXInLFxuICAgICdNZXRhJyxcbiAgICAnTnVtTG9jaycsXG4gICAgJ09TJyxcbiAgICAnU2Nyb2xsTG9jaycsXG4gICAgJ1NoaWZ0JyxcbiAgICAnU3VwZXInLFxuICAgICdTeW1ib2wnLFxuICAgICdTeW1ib2xMb2NrJ1xuICBdLFxuXG4gIC8qKiBAcHJpdmF0ZSAqL1xuICBfU0VBUkNIX1JFU0VUX1RJTUVPVVRfTVM6IDEwMDAsXG5cbiAgLyoqIEBwcml2YXRlICovXG4gIF9wcmV2aW91c1RhYkluZGV4OiAwLFxuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7XG4gICAgJ3JvbGUnOiAnbWVudScsXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ191cGRhdGVNdWx0aXNlbGVjdGFibGUobXVsdGkpJ10sXG5cbiAgbGlzdGVuZXJzOiB7XG4gICAgJ2ZvY3VzJzogJ19vbkZvY3VzJyxcbiAgICAna2V5ZG93bic6ICdfb25LZXlkb3duJyxcbiAgICAnaXJvbi1pdGVtcy1jaGFuZ2VkJzogJ19vbklyb25JdGVtc0NoYW5nZWQnXG4gIH0sXG5cbiAgLyoqXG4gICAqIEB0eXBlIHshT2JqZWN0fVxuICAgKi9cbiAga2V5QmluZGluZ3M6IHtcbiAgICAndXAnOiAnX29uVXBLZXknLFxuICAgICdkb3duJzogJ19vbkRvd25LZXknLFxuICAgICdlc2MnOiAnX29uRXNjS2V5JyxcbiAgICAnc2hpZnQrdGFiOmtleWRvd24nOiAnX29uU2hpZnRUYWJEb3duJ1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZXNldFRhYmluZGljZXMoKTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgZ2l2ZW4gdmFsdWUuIElmIHRoZSBgbXVsdGlgIHByb3BlcnR5IGlzIHRydWUsIHRoZW4gdGhlIHNlbGVjdGVkXG4gICAqIHN0YXRlIG9mIHRoZSBgdmFsdWVgIHdpbGwgYmUgdG9nZ2xlZDsgb3RoZXJ3aXNlIHRoZSBgdmFsdWVgIHdpbGwgYmVcbiAgICogc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfG51bWJlcn0gdmFsdWUgdGhlIHZhbHVlIHRvIHNlbGVjdC5cbiAgICovXG4gIHNlbGVjdDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICAvLyBDYW5jZWwgYXV0b21hdGljYWxseSBmb2N1c2luZyBhIGRlZmF1bHQgaXRlbSBpZiB0aGUgbWVudSByZWNlaXZlZCBmb2N1c1xuICAgIC8vIHRocm91Z2ggYSB1c2VyIGFjdGlvbiBzZWxlY3RpbmcgYSBwYXJ0aWN1bGFyIGl0ZW0uXG4gICAgaWYgKHRoaXMuX2RlZmF1bHRGb2N1c0FzeW5jKSB7XG4gICAgICB0aGlzLmNhbmNlbEFzeW5jKHRoaXMuX2RlZmF1bHRGb2N1c0FzeW5jKTtcbiAgICAgIHRoaXMuX2RlZmF1bHRGb2N1c0FzeW5jID0gbnVsbDtcbiAgICB9XG4gICAgdmFyIGl0ZW0gPSB0aGlzLl92YWx1ZVRvSXRlbSh2YWx1ZSk7XG4gICAgaWYgKGl0ZW0gJiYgaXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpXG4gICAgICByZXR1cm47XG4gICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0oaXRlbSk7XG4gICAgSXJvbk11bHRpU2VsZWN0YWJsZUJlaGF2aW9ySW1wbC5zZWxlY3QuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXRzIGFsbCB0YWJpbmRleCBhdHRyaWJ1dGVzIHRvIHRoZSBhcHByb3ByaWF0ZSB2YWx1ZSBiYXNlZCBvbiB0aGVcbiAgICogY3VycmVudCBzZWxlY3Rpb24gc3RhdGUuIFRoZSBhcHByb3ByaWF0ZSB2YWx1ZSBpcyBgMGAgKGZvY3VzYWJsZSkgZm9yXG4gICAqIHRoZSBkZWZhdWx0IHNlbGVjdGVkIGl0ZW0sIGFuZCBgLTFgIChub3Qga2V5Ym9hcmQgZm9jdXNhYmxlKSBmb3IgYWxsXG4gICAqIG90aGVyIGl0ZW1zLiBBbHNvIHNldHMgdGhlIGNvcnJlY3QgaW5pdGlhbCB2YWx1ZXMgZm9yIGFyaWEtc2VsZWN0ZWRcbiAgICogYXR0cmlidXRlLCB0cnVlIGZvciBkZWZhdWx0IHNlbGVjdGVkIGl0ZW0gYW5kIGZhbHNlIGZvciBvdGhlcnMuXG4gICAqL1xuICBfcmVzZXRUYWJpbmRpY2VzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlyc3RTZWxlY3RlZEl0ZW0gPSB0aGlzLm11bHRpID9cbiAgICAgICAgKHRoaXMuc2VsZWN0ZWRJdGVtcyAmJiB0aGlzLnNlbGVjdGVkSXRlbXNbMF0pIDpcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW07XG5cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgaXRlbSA9PT0gZmlyc3RTZWxlY3RlZEl0ZW0gPyAnMCcgOiAnLTEnKTtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgdGhpcy5fc2VsZWN0aW9uLmlzU2VsZWN0ZWQoaXRlbSkpO1xuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGFwcHJvcHJpYXRlIEFSSUEgYmFzZWQgb24gd2hldGhlciBvciBub3QgdGhlIG1lbnUgaXMgbWVhbnQgdG8gYmVcbiAgICogbXVsdGktc2VsZWN0YWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtib29sZWFufSBtdWx0aSBUcnVlIGlmIHRoZSBtZW51IHNob3VsZCBiZSBtdWx0aS1zZWxlY3RhYmxlLlxuICAgKi9cbiAgX3VwZGF0ZU11bHRpc2VsZWN0YWJsZTogZnVuY3Rpb24obXVsdGkpIHtcbiAgICBpZiAobXVsdGkpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLW11bHRpc2VsZWN0YWJsZScpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogR2l2ZW4gYSBLZXlib2FyZEV2ZW50LCB0aGlzIG1ldGhvZCB3aWxsIGZvY3VzIHRoZSBhcHByb3ByaWF0ZSBpdGVtIGluIHRoZVxuICAgKiBtZW51IChpZiB0aGVyZSBpcyBhIHJlbGV2YW50IGl0ZW0sIGFuZCBpdCBpcyBwb3NzaWJsZSB0byBmb2N1cyBpdCkuXG4gICAqXG4gICAqIEBwYXJhbSB7S2V5Ym9hcmRFdmVudH0gZXZlbnQgQSBLZXlib2FyZEV2ZW50LlxuICAgKi9cbiAgX2ZvY3VzV2l0aEtleWJvYXJkRXZlbnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gTWFrZSBzdXJlIHRoYXQgdGhlIGtleSBwcmVzc2VkIGlzIG5vdCBhIG1vZGlmaWVyIGtleS5cbiAgICAvLyBnZXRNb2RpZmllclN0YXRlIGlzIG5vdCBiZWluZyB1c2VkLCBhcyBpdCBpcyBub3QgYXZhaWxhYmxlIGluIFNhZmFyaVxuICAgIC8vIGVhcmxpZXIgdGhhbiAxMC4wLjIgKGh0dHBzOi8vdHJhYy53ZWJraXQub3JnL2NoYW5nZXNldC8yMDY3MjUvd2Via2l0KVxuICAgIGlmICh0aGlzLl9NT0RJRklFUl9LRVlTLmluZGV4T2YoZXZlbnQua2V5KSAhPT0gLTEpXG4gICAgICByZXR1cm47XG5cbiAgICB0aGlzLmNhbmNlbERlYm91bmNlcignX2NsZWFyU2VhcmNoVGV4dCcpO1xuXG4gICAgdmFyIHNlYXJjaFRleHQgPSB0aGlzLl9zZWFyY2hUZXh0IHx8ICcnO1xuICAgIHZhciBrZXkgPSBldmVudC5rZXkgJiYgZXZlbnQua2V5Lmxlbmd0aCA9PSAxID9cbiAgICAgICAgZXZlbnQua2V5IDpcbiAgICAgICAgU3RyaW5nLmZyb21DaGFyQ29kZShldmVudC5rZXlDb2RlKTtcbiAgICBzZWFyY2hUZXh0ICs9IGtleS50b0xvY2FsZUxvd2VyQ2FzZSgpO1xuXG4gICAgdmFyIHNlYXJjaExlbmd0aCA9IHNlYXJjaFRleHQubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDAsIGl0ZW07IGl0ZW0gPSB0aGlzLml0ZW1zW2ldOyBpKyspIHtcbiAgICAgIGlmIChpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgdmFyIGF0dHIgPSB0aGlzLmF0dHJGb3JJdGVtVGl0bGUgfHwgJ3RleHRDb250ZW50JztcbiAgICAgIHZhciB0aXRsZSA9IChpdGVtW2F0dHJdIHx8IGl0ZW0uZ2V0QXR0cmlidXRlKGF0dHIpIHx8ICcnKS50cmltKCk7XG5cbiAgICAgIGlmICh0aXRsZS5sZW5ndGggPCBzZWFyY2hMZW5ndGgpIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aXRsZS5zbGljZSgwLCBzZWFyY2hMZW5ndGgpLnRvTG9jYWxlTG93ZXJDYXNlKCkgPT0gc2VhcmNoVGV4dCkge1xuICAgICAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShpdGVtKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fc2VhcmNoVGV4dCA9IHNlYXJjaFRleHQ7XG4gICAgdGhpcy5kZWJvdW5jZShcbiAgICAgICAgJ19jbGVhclNlYXJjaFRleHQnLFxuICAgICAgICB0aGlzLl9jbGVhclNlYXJjaFRleHQsXG4gICAgICAgIHRoaXMuX1NFQVJDSF9SRVNFVF9USU1FT1VUX01TKTtcbiAgfSxcblxuICBfY2xlYXJTZWFyY2hUZXh0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZWFyY2hUZXh0ID0gJyc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIHByZXZpb3VzIGl0ZW0gKHJlbGF0aXZlIHRvIHRoZSBjdXJyZW50bHkgZm9jdXNlZCBpdGVtKSBpbiB0aGVcbiAgICogbWVudSwgZGlzYWJsZWQgaXRlbXMgd2lsbCBiZSBza2lwcGVkLlxuICAgKiBMb29wIHVudGlsIGxlbmd0aCArIDEgdG8gaGFuZGxlIGNhc2Ugb2Ygc2luZ2xlIGl0ZW0gaW4gbWVudS5cbiAgICovXG4gIF9mb2N1c1ByZXZpb3VzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gdGhpcy5pdGVtcy5sZW5ndGg7XG4gICAgdmFyIGN1ckZvY3VzSW5kZXggPSBOdW1iZXIodGhpcy5pbmRleE9mKHRoaXMuZm9jdXNlZEl0ZW0pKTtcblxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgbGVuZ3RoICsgMTsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IHRoaXMuaXRlbXNbKGN1ckZvY3VzSW5kZXggLSBpICsgbGVuZ3RoKSAlIGxlbmd0aF07XG4gICAgICBpZiAoIWl0ZW0uaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICAgIHZhciBvd25lciA9IGRvbShpdGVtKS5nZXRPd25lclJvb3QoKSB8fCBkb2N1bWVudDtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0oaXRlbSk7XG5cbiAgICAgICAgLy8gRm9jdXMgbWlnaHQgbm90IGhhdmUgd29ya2VkLCBpZiB0aGUgZWxlbWVudCB3YXMgaGlkZGVuIG9yIG5vdFxuICAgICAgICAvLyBmb2N1c2FibGUuIEluIHRoYXQgY2FzZSwgdHJ5IGFnYWluLlxuICAgICAgICBpZiAoZG9tKG93bmVyKS5hY3RpdmVFbGVtZW50ID09IGl0ZW0pIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgdGhlIG5leHQgaXRlbSAocmVsYXRpdmUgdG8gdGhlIGN1cnJlbnRseSBmb2N1c2VkIGl0ZW0pIGluIHRoZVxuICAgKiBtZW51LCBkaXNhYmxlZCBpdGVtcyB3aWxsIGJlIHNraXBwZWQuXG4gICAqIExvb3AgdW50aWwgbGVuZ3RoICsgMSB0byBoYW5kbGUgY2FzZSBvZiBzaW5nbGUgaXRlbSBpbiBtZW51LlxuICAgKi9cbiAgX2ZvY3VzTmV4dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGxlbmd0aCA9IHRoaXMuaXRlbXMubGVuZ3RoO1xuICAgIHZhciBjdXJGb2N1c0luZGV4ID0gTnVtYmVyKHRoaXMuaW5kZXhPZih0aGlzLmZvY3VzZWRJdGVtKSk7XG5cbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGxlbmd0aCArIDE7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zWyhjdXJGb2N1c0luZGV4ICsgaSkgJSBsZW5ndGhdO1xuICAgICAgaWYgKCFpdGVtLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZWQnKSkge1xuICAgICAgICB2YXIgb3duZXIgPSBkb20oaXRlbSkuZ2V0T3duZXJSb290KCkgfHwgZG9jdW1lbnQ7XG4gICAgICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKGl0ZW0pO1xuXG4gICAgICAgIC8vIEZvY3VzIG1pZ2h0IG5vdCBoYXZlIHdvcmtlZCwgaWYgdGhlIGVsZW1lbnQgd2FzIGhpZGRlbiBvciBub3RcbiAgICAgICAgLy8gZm9jdXNhYmxlLiBJbiB0aGF0IGNhc2UsIHRyeSBhZ2Fpbi5cbiAgICAgICAgaWYgKGRvbShvd25lcikuYWN0aXZlRWxlbWVudCA9PSBpdGVtKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBNdXRhdGVzIGl0ZW1zIGluIHRoZSBtZW51IGJhc2VkIG9uIHByb3ZpZGVkIHNlbGVjdGlvbiBkZXRhaWxzLCBzbyB0aGF0XG4gICAqIGFsbCBpdGVtcyBjb3JyZWN0bHkgcmVmbGVjdCBzZWxlY3Rpb24gc3RhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RWxlbWVudH0gaXRlbSBBbiBpdGVtIGluIHRoZSBtZW51LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0ZWQgVHJ1ZSBpZiB0aGUgaXRlbSBzaG91bGQgYmUgc2hvd24gaW4gYVxuICAgKiBzZWxlY3RlZCBzdGF0ZSwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgX2FwcGx5U2VsZWN0aW9uOiBmdW5jdGlvbihpdGVtLCBpc1NlbGVjdGVkKSB7XG4gICAgaWYgKGlzU2VsZWN0ZWQpIHtcbiAgICAgIGl0ZW0uc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaXRlbS5zZXRBdHRyaWJ1dGUoJ2FyaWEtc2VsZWN0ZWQnLCAnZmFsc2UnKTtcbiAgICB9XG4gICAgSXJvblNlbGVjdGFibGVCZWhhdmlvci5fYXBwbHlTZWxlY3Rpb24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfSxcblxuICAvKipcbiAgICogRGlzY3JldGVseSB1cGRhdGVzIHRhYmluZGV4IHZhbHVlcyBhbW9uZyBtZW51IGl0ZW1zIGFzIHRoZSBmb2N1c2VkIGl0ZW1cbiAgICogY2hhbmdlcy5cbiAgICpcbiAgICogQHBhcmFtIHtFbGVtZW50fSBmb2N1c2VkSXRlbSBUaGUgZWxlbWVudCB0aGF0IGlzIGN1cnJlbnRseSBmb2N1c2VkLlxuICAgKiBAcGFyYW0gez9FbGVtZW50fSBvbGQgVGhlIGxhc3QgZWxlbWVudCB0aGF0IHdhcyBjb25zaWRlcmVkIGZvY3VzZWQsIGlmXG4gICAqIGFwcGxpY2FibGUuXG4gICAqL1xuICBfZm9jdXNlZEl0ZW1DaGFuZ2VkOiBmdW5jdGlvbihmb2N1c2VkSXRlbSwgb2xkKSB7XG4gICAgb2xkICYmIG9sZC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJy0xJyk7XG4gICAgaWYgKGZvY3VzZWRJdGVtICYmICFmb2N1c2VkSXRlbS5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykgJiZcbiAgICAgICAgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIGZvY3VzZWRJdGVtLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnMCcpO1xuICAgICAgZm9jdXNlZEl0ZW0uZm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IHJlc3BvbmRzIHRvIG11dGF0aW9uIGNoYW5nZXMgcmVsYXRlZCB0byB0aGUgbGlzdCBvZiBpdGVtc1xuICAgKiBpbiB0aGUgbWVudS5cbiAgICpcbiAgICogQHBhcmFtIHtDdXN0b21FdmVudH0gZXZlbnQgQW4gZXZlbnQgY29udGFpbmluZyBtdXRhdGlvbiByZWNvcmRzIGFzIGl0c1xuICAgKiBkZXRhaWwuXG4gICAqL1xuICBfb25Jcm9uSXRlbXNDaGFuZ2VkOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC5kZXRhaWwuYWRkZWROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3Jlc2V0VGFiaW5kaWNlcygpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIGEgc2hpZnQrdGFiIGtleXByZXNzIGlzIGRldGVjdGVkIGJ5IHRoZSBtZW51LlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICovXG4gIF9vblNoaWZ0VGFiRG93bjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgb2xkVGFiSW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcblxuICAgIElyb25NZW51QmVoYXZpb3JJbXBsLl9zaGlmdFRhYlByZXNzZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5fc2V0Rm9jdXNlZEl0ZW0obnVsbCk7XG5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAnLTEnKTtcblxuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCBvbGRUYWJJbmRleCk7XG4gICAgICBJcm9uTWVudUJlaGF2aW9ySW1wbC5fc2hpZnRUYWJQcmVzc2VkID0gZmFsc2U7XG4gICAgICAvLyBOT1RFKGNkYXRhKTogcG9seW1lci9wb2x5bWVyIzEzMDVcbiAgICB9LCAxKTtcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBtZW51IHJlY2VpdmVzIGZvY3VzLlxuICAgKlxuICAgKiBAcGFyYW0ge0ZvY3VzRXZlbnR9IGV2ZW50IEEgZm9jdXMgZXZlbnQuXG4gICAqL1xuICBfb25Gb2N1czogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoSXJvbk1lbnVCZWhhdmlvckltcGwuX3NoaWZ0VGFiUHJlc3NlZCkge1xuICAgICAgLy8gZG8gbm90IGZvY3VzIHRoZSBtZW51IGl0c2VsZlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIERvIG5vdCBmb2N1cyB0aGUgc2VsZWN0ZWQgdGFiIGlmIHRoZSBkZWVwZXN0IHRhcmdldCBpcyBwYXJ0IG9mIHRoZVxuICAgIC8vIG1lbnUgZWxlbWVudCdzIGxvY2FsIERPTSBhbmQgaXMgZm9jdXNhYmxlLlxuICAgIHZhciByb290VGFyZ2V0ID1cbiAgICAgICAgLyoqIEB0eXBlIHs/SFRNTEVsZW1lbnR9ICovIChkb20oZXZlbnQpLnJvb3RUYXJnZXQpO1xuICAgIGlmIChyb290VGFyZ2V0ICE9PSB0aGlzICYmIHR5cGVvZiByb290VGFyZ2V0LnRhYkluZGV4ICE9PSAndW5kZWZpbmVkJyAmJlxuICAgICAgICAhdGhpcy5pc0xpZ2h0RGVzY2VuZGFudChyb290VGFyZ2V0KSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIGNsZWFyIHRoZSBjYWNoZWQgZm9jdXMgaXRlbVxuICAgIHRoaXMuX2RlZmF1bHRGb2N1c0FzeW5jID0gdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIC8vIGZvY3VzIHRoZSBzZWxlY3RlZCBpdGVtIHdoZW4gdGhlIG1lbnUgcmVjZWl2ZXMgZm9jdXMsIG9yIHRoZSBmaXJzdCBpdGVtXG4gICAgICAvLyBpZiBubyBpdGVtIGlzIHNlbGVjdGVkXG4gICAgICB2YXIgZmlyc3RTZWxlY3RlZEl0ZW0gPSB0aGlzLm11bHRpID9cbiAgICAgICAgICAodGhpcy5zZWxlY3RlZEl0ZW1zICYmIHRoaXMuc2VsZWN0ZWRJdGVtc1swXSkgOlxuICAgICAgICAgIHRoaXMuc2VsZWN0ZWRJdGVtO1xuXG4gICAgICB0aGlzLl9zZXRGb2N1c2VkSXRlbShudWxsKTtcblxuICAgICAgaWYgKGZpcnN0U2VsZWN0ZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuX3NldEZvY3VzZWRJdGVtKGZpcnN0U2VsZWN0ZWRJdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5pdGVtc1swXSkge1xuICAgICAgICAvLyBXZSBmaW5kIHRoZSBmaXJzdCBub25lLWRpc2FibGVkIGl0ZW0gKGlmIG9uZSBleGlzdHMpXG4gICAgICAgIHRoaXMuX2ZvY3VzTmV4dCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gdGhlIHVwIGtleSBpcyBwcmVzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICovXG4gIF9vblVwS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIC8vIHVwIGFuZCBkb3duIGFycm93cyBtb3ZlcyB0aGUgZm9jdXNcbiAgICB0aGlzLl9mb2N1c1ByZXZpb3VzKCk7XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBkb3duIGtleSBpcyBwcmVzc2VkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIGtleSBjb21iaW5hdGlvbiBldmVudC5cbiAgICovXG4gIF9vbkRvd25LZXk6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fZm9jdXNOZXh0KCk7XG4gICAgZXZlbnQuZGV0YWlsLmtleWJvYXJkRXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBlc2Mga2V5IGlzIHByZXNzZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEga2V5IGNvbWJpbmF0aW9uIGV2ZW50LlxuICAgKi9cbiAgX29uRXNjS2V5OiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBmb2N1c2VkSXRlbSA9IHRoaXMuZm9jdXNlZEl0ZW07XG4gICAgaWYgKGZvY3VzZWRJdGVtKSB7XG4gICAgICBmb2N1c2VkSXRlbS5ibHVyKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBIYW5kbGVyIHRoYXQgaXMgY2FsbGVkIHdoZW4gYSBrZXlkb3duIGV2ZW50IGlzIGRldGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0tleWJvYXJkRXZlbnR9IGV2ZW50IEEga2V5Ym9hcmQgZXZlbnQuXG4gICAqL1xuICBfb25LZXlkb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZXZlbnQsICd1cCBkb3duIGVzYycpKSB7XG4gICAgICAvLyBhbGwgb3RoZXIga2V5cyBmb2N1cyB0aGUgbWVudSBpdGVtIHN0YXJ0aW5nIHdpdGggdGhhdCBjaGFyYWN0ZXJcbiAgICAgIHRoaXMuX2ZvY3VzV2l0aEtleWJvYXJkRXZlbnQoZXZlbnQpO1xuICAgIH1cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcblxuICAvLyBvdmVycmlkZSBfYWN0aXZhdGVIYW5kbGVyXG4gIF9hY3RpdmF0ZUhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgSXJvblNlbGVjdGFibGVCZWhhdmlvci5fYWN0aXZhdGVIYW5kbGVyLmNhbGwodGhpcywgZXZlbnQpO1xuICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoaXMgZWxlbWVudCdzIHRhYiBpbmRleCB3aGVuIGl0J3MgZW5hYmxlZC9kaXNhYmxlZC5cbiAgICogQHBhcmFtIHtib29sZWFufSBkaXNhYmxlZFxuICAgKi9cbiAgX2Rpc2FibGVkQ2hhbmdlZDogZnVuY3Rpb24oZGlzYWJsZWQpIHtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuX3ByZXZpb3VzVGFiSW5kZXggPVxuICAgICAgICAgIHRoaXMuaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpID8gdGhpcy50YWJJbmRleCA6IDA7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShcbiAgICAgICAgICAndGFiaW5kZXgnKTsgIC8vIE5vIHRhYmluZGV4IG1lYW5zIG5vdCB0YWItYWJsZSBvciBzZWxlY3QtYWJsZS5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZSgndGFiaW5kZXgnKSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgdGhpcy5fcHJldmlvdXNUYWJJbmRleCk7XG4gICAgfVxuICB9XG59O1xuXG5Jcm9uTWVudUJlaGF2aW9ySW1wbC5fc2hpZnRUYWJQcmVzc2VkID0gZmFsc2U7XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbk1lbnVCZWhhdmlvciA9XG4gICAgW0lyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvciwgSXJvbkExMXlLZXlzQmVoYXZpb3IsIElyb25NZW51QmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uU2VsZWN0YWJsZUJlaGF2aW9yfSBmcm9tICcuL2lyb24tc2VsZWN0YWJsZS5qcyc7XG5cbi8qKlxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uTXVsdGlTZWxlY3RhYmxlQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvckltcGwgPSB7XG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIG11bHRpcGxlIHNlbGVjdGlvbnMgYXJlIGFsbG93ZWQuXG4gICAgICovXG4gICAgbXVsdGk6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG9ic2VydmVyOiAnbXVsdGlDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHNlbGVjdGVkIGVsZW1lbnRzLiBUaGlzIGlzIHVzZWQgaW5zdGVhZCBvZiBgc2VsZWN0ZWRgXG4gICAgICogd2hlbiBgbXVsdGlgIGlzIHRydWUuXG4gICAgICovXG4gICAgc2VsZWN0ZWRWYWx1ZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYW4gYXJyYXkgb2YgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW1zLlxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgcmVhZE9ubHk6IHRydWUsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICAgIH1cbiAgICB9LFxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbJ191cGRhdGVTZWxlY3RlZChzZWxlY3RlZFZhbHVlcy5zcGxpY2VzKSddLFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBnaXZlbiB2YWx1ZS4gSWYgdGhlIGBtdWx0aWAgcHJvcGVydHkgaXMgdHJ1ZSwgdGhlbiB0aGUgc2VsZWN0ZWRcbiAgICogc3RhdGUgb2YgdGhlIGB2YWx1ZWAgd2lsbCBiZSB0b2dnbGVkOyBvdGhlcndpc2UgdGhlIGB2YWx1ZWAgd2lsbCBiZVxuICAgKiBzZWxlY3RlZC5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3RcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2VsZWN0LlxuICAgKi9cbiAgc2VsZWN0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIGlmICh0aGlzLm11bHRpKSB7XG4gICAgICB0aGlzLl90b2dnbGVTZWxlY3RlZCh2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgICB9XG4gIH0sXG5cbiAgbXVsdGlDaGFuZ2VkOiBmdW5jdGlvbihtdWx0aSkge1xuICAgIHRoaXMuX3NlbGVjdGlvbi5tdWx0aSA9IG11bHRpO1xuICAgIHRoaXMuX3VwZGF0ZVNlbGVjdGVkKCk7XG4gIH0sXG5cbiAgLy8gVU5VU0VELCBGT1IgQVBJIENPTVBBVElCSUxJVFlcbiAgZ2V0IF9zaG91bGRVcGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgIT0gbnVsbCB8fFxuICAgICAgICAodGhpcy5zZWxlY3RlZFZhbHVlcyAhPSBudWxsICYmIHRoaXMuc2VsZWN0ZWRWYWx1ZXMubGVuZ3RoKTtcbiAgfSxcblxuICBfdXBkYXRlQXR0ckZvclNlbGVjdGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMubXVsdGkpIHtcbiAgICAgIElyb25TZWxlY3RhYmxlQmVoYXZpb3IuX3VwZGF0ZUF0dHJGb3JTZWxlY3RlZC5hcHBseSh0aGlzKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtcyAmJiB0aGlzLnNlbGVjdGVkSXRlbXMubGVuZ3RoID4gMCkge1xuICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlcyA9XG4gICAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW1zXG4gICAgICAgICAgICAgIC5tYXAoXG4gICAgICAgICAgICAgICAgICBmdW5jdGlvbihzZWxlY3RlZEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luZGV4VG9WYWx1ZSh0aGlzLmluZGV4T2Yoc2VsZWN0ZWRJdGVtKSk7XG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGhpcylcbiAgICAgICAgICAgICAgLmZpbHRlcihmdW5jdGlvbih1bmZpbHRlcmVkVmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5maWx0ZXJlZFZhbHVlICE9IG51bGw7XG4gICAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgIH1cbiAgfSxcblxuICBfdXBkYXRlU2VsZWN0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm11bHRpKSB7XG4gICAgICB0aGlzLl9zZWxlY3RNdWx0aSh0aGlzLnNlbGVjdGVkVmFsdWVzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fc2VsZWN0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZCk7XG4gICAgfVxuICB9LFxuXG4gIF9zZWxlY3RNdWx0aTogZnVuY3Rpb24odmFsdWVzKSB7XG4gICAgdmFsdWVzID0gdmFsdWVzIHx8IFtdO1xuXG4gICAgdmFyIHNlbGVjdGVkSXRlbXMgPVxuICAgICAgICAodGhpcy5fdmFsdWVzVG9JdGVtcyh2YWx1ZXMpIHx8IFtdKS5maWx0ZXIoZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIHJldHVybiBpdGVtICE9PSBudWxsICYmIGl0ZW0gIT09IHVuZGVmaW5lZDtcbiAgICAgICAgfSk7XG5cbiAgICAvLyBjbGVhciBhbGwgYnV0IHRoZSBjdXJyZW50IHNlbGVjdGVkIGl0ZW1zXG4gICAgdGhpcy5fc2VsZWN0aW9uLmNsZWFyKHNlbGVjdGVkSXRlbXMpO1xuXG4gICAgLy8gc2VsZWN0IG9ubHkgdGhvc2Ugbm90IHNlbGVjdGVkIHlldFxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWRJdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fc2VsZWN0aW9uLnNldEl0ZW1TZWxlY3RlZChzZWxlY3RlZEl0ZW1zW2ldLCB0cnVlKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgaXRlbXMsIHNpbmNlIHRoaXMgYXJyYXkgaXMgcG9wdWxhdGVkIG9ubHkgd2hlbiBhdHRhY2hlZFxuICAgIGlmICh0aGlzLmZhbGxiYWNrU2VsZWN0aW9uICYmICF0aGlzLl9zZWxlY3Rpb24uZ2V0KCkubGVuZ3RoKSB7XG4gICAgICB2YXIgZmFsbGJhY2sgPSB0aGlzLl92YWx1ZVRvSXRlbSh0aGlzLmZhbGxiYWNrU2VsZWN0aW9uKTtcbiAgICAgIGlmIChmYWxsYmFjaykge1xuICAgICAgICB0aGlzLnNlbGVjdCh0aGlzLmZhbGxiYWNrU2VsZWN0aW9uKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX3NlbGVjdGlvbkNoYW5nZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIHMgPSB0aGlzLl9zZWxlY3Rpb24uZ2V0KCk7XG4gICAgaWYgKHRoaXMubXVsdGkpIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbXMocyk7XG4gICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0ocy5sZW5ndGggPyBzWzBdIDogbnVsbCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChzICE9PSBudWxsICYmIHMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW1zKFtzXSk7XG4gICAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShzKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbXMoW10pO1xuICAgICAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0obnVsbCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIF90b2dnbGVTZWxlY3RlZDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICB2YXIgaSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZXMuaW5kZXhPZih2YWx1ZSk7XG4gICAgdmFyIHVuc2VsZWN0ZWQgPSBpIDwgMDtcbiAgICBpZiAodW5zZWxlY3RlZCkge1xuICAgICAgdGhpcy5wdXNoKCdzZWxlY3RlZFZhbHVlcycsIHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zcGxpY2UoJ3NlbGVjdGVkVmFsdWVzJywgaSwgMSk7XG4gICAgfVxuICB9LFxuXG4gIF92YWx1ZXNUb0l0ZW1zOiBmdW5jdGlvbih2YWx1ZXMpIHtcbiAgICByZXR1cm4gKHZhbHVlcyA9PSBudWxsKSA/IG51bGwgOiB2YWx1ZXMubWFwKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICByZXR1cm4gdGhpcy5fdmFsdWVUb0l0ZW0odmFsdWUpO1xuICAgIH0sIHRoaXMpO1xuICB9XG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvciA9XG4gICAgW0lyb25TZWxlY3RhYmxlQmVoYXZpb3IsIElyb25NdWx0aVNlbGVjdGFibGVCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7ZGFzaFRvQ2FtZWxDYXNlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9jYXNlLW1hcC5qcyc7XG5cbmltcG9ydCB7SXJvblNlbGVjdGlvbn0gZnJvbSAnLi9pcm9uLXNlbGVjdGlvbi5qcyc7XG5cbi8qKlxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgSXJvblNlbGVjdGFibGVCZWhhdmlvciA9IHtcblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBpcm9uLXNlbGVjdG9yIGlzIGFjdGl2YXRlZCAoc2VsZWN0ZWQgb3IgZGVzZWxlY3RlZCkuXG4gICAqIEl0IGlzIGZpcmVkIGJlZm9yZSB0aGUgc2VsZWN0ZWQgaXRlbXMgYXJlIGNoYW5nZWQuXG4gICAqIENhbmNlbCB0aGUgZXZlbnQgdG8gYWJvcnQgc2VsZWN0aW9uLlxuICAgKlxuICAgKiBAZXZlbnQgaXJvbi1hY3RpdmF0ZVxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBhbiBpdGVtIGlzIHNlbGVjdGVkXG4gICAqXG4gICAqIEBldmVudCBpcm9uLXNlbGVjdFxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBhbiBpdGVtIGlzIGRlc2VsZWN0ZWRcbiAgICpcbiAgICogQGV2ZW50IGlyb24tZGVzZWxlY3RcbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIGxpc3Qgb2Ygc2VsZWN0YWJsZSBpdGVtcyBjaGFuZ2VzIChlLmcuLCBpdGVtcyBhcmVcbiAgICogYWRkZWQgb3IgcmVtb3ZlZCkuIFRoZSBkZXRhaWwgb2YgdGhlIGV2ZW50IGlzIGEgbXV0YXRpb24gcmVjb3JkIHRoYXRcbiAgICogZGVzY3JpYmVzIHdoYXQgY2hhbmdlZC5cbiAgICpcbiAgICogQGV2ZW50IGlyb24taXRlbXMtY2hhbmdlZFxuICAgKi9cblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgYW4gYXR0cmlidXRlIHZhbHVlIG9yIHByb3BlcnR5IG9mIGFuIGVsZW1lbnQgZm9yXG4gICAgICogYHNlbGVjdGVkYCBpbnN0ZWFkIG9mIHRoZSBpbmRleCwgc2V0IHRoaXMgdG8gdGhlIG5hbWUgb2YgdGhlIGF0dHJpYnV0ZVxuICAgICAqIG9yIHByb3BlcnR5LiBIeXBoZW5hdGVkIHZhbHVlcyBhcmUgY29udmVydGVkIHRvIGNhbWVsIGNhc2Ugd2hlbiB1c2VkIHRvXG4gICAgICogbG9vayB1cCB0aGUgcHJvcGVydHkgb2YgYSBzZWxlY3RhYmxlIGVsZW1lbnQuIENhbWVsIGNhc2VkIHZhbHVlcyBhcmVcbiAgICAgKiAqbm90KiBjb252ZXJ0ZWQgdG8gaHlwaGVuYXRlZCB2YWx1ZXMgZm9yIGF0dHJpYnV0ZSBsb29rdXAuIEl0J3NcbiAgICAgKiByZWNvbW1lbmRlZCB0aGF0IHlvdSBwcm92aWRlIHRoZSBoeXBoZW5hdGVkIGZvcm0gb2YgdGhlIG5hbWUgc28gdGhhdFxuICAgICAqIHNlbGVjdGlvbiB3b3JrcyBpbiBib3RoIGNhc2VzLiAoVXNlIGBhdHRyLW9yLXByb3BlcnR5LW5hbWVgIGluc3RlYWQgb2ZcbiAgICAgKiBgYXR0ck9yUHJvcGVydHlOYW1lYC4pXG4gICAgICovXG4gICAgYXR0ckZvclNlbGVjdGVkOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogbnVsbH0sXG5cbiAgICAvKipcbiAgICAgKiBHZXRzIG9yIHNldHMgdGhlIHNlbGVjdGVkIGVsZW1lbnQuIFRoZSBkZWZhdWx0IGlzIHRvIHVzZSB0aGUgaW5kZXggb2YgdGhlXG4gICAgICogaXRlbS5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICBzZWxlY3RlZDoge3R5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLlxuICAgICAqXG4gICAgICogQHR5cGUgez9PYmplY3R9XG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiB7dHlwZTogT2JqZWN0LCByZWFkT25seTogdHJ1ZSwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBldmVudCB0aGF0IGZpcmVzIGZyb20gaXRlbXMgd2hlbiB0aGV5IGFyZSBzZWxlY3RlZC4gU2VsZWN0YWJsZVxuICAgICAqIHdpbGwgbGlzdGVuIGZvciB0aGlzIGV2ZW50IGZyb20gaXRlbXMgYW5kIHVwZGF0ZSB0aGUgc2VsZWN0aW9uIHN0YXRlLlxuICAgICAqIFNldCB0byBlbXB0eSBzdHJpbmcgdG8gbGlzdGVuIHRvIG5vIGV2ZW50cy5cbiAgICAgKi9cbiAgICBhY3RpdmF0ZUV2ZW50OlxuICAgICAgICB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3RhcCcsIG9ic2VydmVyOiAnX2FjdGl2YXRlRXZlbnRDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIGEgQ1NTIHNlbGVjdG9yIHN0cmluZy4gIElmIHRoaXMgaXMgc2V0LCBvbmx5IGl0ZW1zIHRoYXQgbWF0Y2ggdGhlXG4gICAgICogQ1NTIHNlbGVjdG9yIGFyZSBzZWxlY3RhYmxlLlxuICAgICAqL1xuICAgIHNlbGVjdGFibGU6IFN0cmluZyxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjbGFzcyB0byBzZXQgb24gZWxlbWVudHMgd2hlbiBzZWxlY3RlZC5cbiAgICAgKi9cbiAgICBzZWxlY3RlZENsYXNzOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2lyb24tc2VsZWN0ZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBhdHRyaWJ1dGUgdG8gc2V0IG9uIGVsZW1lbnRzIHdoZW4gc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0ZWRBdHRyaWJ1dGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiBudWxsfSxcblxuICAgIC8qKlxuICAgICAqIERlZmF1bHQgZmFsbGJhY2sgaWYgdGhlIHNlbGVjdGlvbiBiYXNlZCBvbiBzZWxlY3RlZCB3aXRoXG4gICAgICogYGF0dHJGb3JTZWxlY3RlZGAgaXMgbm90IGZvdW5kLlxuICAgICAqL1xuICAgIGZhbGxiYWNrU2VsZWN0aW9uOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogbnVsbH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbGlzdCBvZiBpdGVtcyBmcm9tIHdoaWNoIGEgc2VsZWN0aW9uIGNhbiBiZSBtYWRlLlxuICAgICAqL1xuICAgIGl0ZW1zOiB7XG4gICAgICB0eXBlOiBBcnJheSxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBzZXQgb2YgZXhjbHVkZWQgZWxlbWVudHMgd2hlcmUgdGhlIGtleSBpcyB0aGUgYGxvY2FsTmFtZWBcbiAgICAgKiBvZiB0aGUgZWxlbWVudCB0aGF0IHdpbGwgYmUgaWdub3JlZCBmcm9tIHRoZSBpdGVtIGxpc3QuXG4gICAgICpcbiAgICAgKiBAZGVmYXVsdCB7dGVtcGxhdGU6IDF9XG4gICAgICovXG4gICAgX2V4Y2x1ZGVkTG9jYWxOYW1lczoge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICd0ZW1wbGF0ZSc6IDEsXG4gICAgICAgICAgJ2RvbS1iaW5kJzogMSxcbiAgICAgICAgICAnZG9tLWlmJzogMSxcbiAgICAgICAgICAnZG9tLXJlcGVhdCc6IDEsXG4gICAgICAgIH07XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdfdXBkYXRlQXR0ckZvclNlbGVjdGVkKGF0dHJGb3JTZWxlY3RlZCknLFxuICAgICdfdXBkYXRlU2VsZWN0ZWQoc2VsZWN0ZWQpJyxcbiAgICAnX2NoZWNrRmFsbGJhY2soZmFsbGJhY2tTZWxlY3Rpb24pJ1xuICBdLFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2JpbmRGaWx0ZXJJdGVtID0gdGhpcy5fZmlsdGVySXRlbS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX3NlbGVjdGlvbiA9IG5ldyBJcm9uU2VsZWN0aW9uKHRoaXMuX2FwcGx5U2VsZWN0aW9uLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9vYnNlcnZlciA9IHRoaXMuX29ic2VydmVJdGVtcyh0aGlzKTtcbiAgICB0aGlzLl9hZGRMaXN0ZW5lcih0aGlzLmFjdGl2YXRlRXZlbnQpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fb2JzZXJ2ZXIpIHtcbiAgICAgIGRvbSh0aGlzKS51bm9ic2VydmVOb2Rlcyh0aGlzLl9vYnNlcnZlcik7XG4gICAgfVxuICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVyKHRoaXMuYWN0aXZhdGVFdmVudCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIGluZGV4IG9mIHRoZSBnaXZlbiBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIGluZGV4T2ZcbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW1cbiAgICogQHJldHVybnMgUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICovXG4gIGluZGV4T2Y6IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSA6IC0xO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBnaXZlbiB2YWx1ZS5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3RcbiAgICogQHBhcmFtIHtzdHJpbmd8bnVtYmVyfSB2YWx1ZSB0aGUgdmFsdWUgdG8gc2VsZWN0LlxuICAgKi9cbiAgc2VsZWN0OiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHRoaXMuc2VsZWN0ZWQgPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgcHJldmlvdXMgaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCBzZWxlY3RQcmV2aW91c1xuICAgKi9cbiAgc2VsZWN0UHJldmlvdXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBsZW5ndGggPSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB2YXIgaW5kZXggPSBsZW5ndGggLSAxO1xuICAgIGlmICh0aGlzLnNlbGVjdGVkICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGluZGV4ID0gKE51bWJlcih0aGlzLl92YWx1ZVRvSW5kZXgodGhpcy5zZWxlY3RlZCkpIC0gMSArIGxlbmd0aCkgJSBsZW5ndGg7XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWQgPSB0aGlzLl9pbmRleFRvVmFsdWUoaW5kZXgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBuZXh0IGl0ZW0uXG4gICAqXG4gICAqIEBtZXRob2Qgc2VsZWN0TmV4dFxuICAgKi9cbiAgc2VsZWN0TmV4dDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZGV4ID0gMDtcbiAgICBpZiAodGhpcy5zZWxlY3RlZCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpbmRleCA9XG4gICAgICAgICAgKE51bWJlcih0aGlzLl92YWx1ZVRvSW5kZXgodGhpcy5zZWxlY3RlZCkpICsgMSkgJSB0aGlzLml0ZW1zLmxlbmd0aDtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuX2luZGV4VG9WYWx1ZShpbmRleCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdHMgdGhlIGl0ZW0gYXQgdGhlIGdpdmVuIGluZGV4LlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdEluZGV4XG4gICAqL1xuICBzZWxlY3RJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB0aGlzLnNlbGVjdCh0aGlzLl9pbmRleFRvVmFsdWUoaW5kZXgpKTtcbiAgfSxcblxuICAvKipcbiAgICogRm9yY2UgYSBzeW5jaHJvbm91cyB1cGRhdGUgb2YgdGhlIGBpdGVtc2AgcHJvcGVydHkuXG4gICAqXG4gICAqIE5PVEU6IENvbnNpZGVyIGxpc3RlbmluZyBmb3IgdGhlIGBpcm9uLWl0ZW1zLWNoYW5nZWRgIGV2ZW50IHRvIHJlc3BvbmQgdG9cbiAgICogdXBkYXRlcyB0byB0aGUgc2V0IG9mIHNlbGVjdGFibGUgaXRlbXMgYWZ0ZXIgdXBkYXRlcyB0byB0aGUgRE9NIGxpc3QgYW5kXG4gICAqIHNlbGVjdGlvbiBzdGF0ZSBoYXZlIGJlZW4gbWFkZS5cbiAgICpcbiAgICogV0FSTklORzogSWYgeW91IGFyZSB1c2luZyB0aGlzIG1ldGhvZCwgeW91IHNob3VsZCBwcm9iYWJseSBjb25zaWRlciBhblxuICAgKiBhbHRlcm5hdGUgYXBwcm9hY2guIFN5bmNocm9ub3VzbHkgcXVlcnlpbmcgZm9yIGl0ZW1zIGlzIHBvdGVudGlhbGx5XG4gICAqIHNsb3cgZm9yIG1hbnkgdXNlIGNhc2VzLiBUaGUgYGl0ZW1zYCBwcm9wZXJ0eSB3aWxsIHVwZGF0ZSBhc3luY2hyb25vdXNseVxuICAgKiBvbiBpdHMgb3duIHRvIHJlZmxlY3Qgc2VsZWN0YWJsZSBpdGVtcyBpbiB0aGUgRE9NLlxuICAgKi9cbiAgZm9yY2VTeW5jaHJvbm91c0l0ZW1VcGRhdGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9vYnNlcnZlciAmJiB0eXBlb2YgdGhpcy5fb2JzZXJ2ZXIuZmx1c2ggPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIE5PVEUoYmlja25lbGxyKTogYGRvbS5mbHVzaGAgYWJvdmUgaXMgbm8gbG9uZ2VyIHN1ZmZpY2llbnQgdG8gdHJpZ2dlclxuICAgICAgLy8gYG9ic2VydmVOb2Rlc2AgY2FsbGJhY2tzLiBQb2x5bWVyIDIueCByZXR1cm5zIGFuIG9iamVjdCBmcm9tXG4gICAgICAvLyBgb2JzZXJ2ZU5vZGVzYCB3aXRoIGEgYGZsdXNoYCB0aGF0IHN5bmNocm9ub3VzbHkgZ2l2ZXMgdGhlIGNhbGxiYWNrIGFueVxuICAgICAgLy8gcGVuZGluZyBNdXRhdGlvblJlY29yZHMgKHJldHJpZXZlZCB3aXRoIGB0YWtlUmVjb3Jkc2ApLiBBbnkgY2FzZSB3aGVyZVxuICAgICAgLy8gU2hhZHlET00gZmx1c2hlcyB3ZXJlIGV4cGVjdGVkIHRvIHN5bmNocm9ub3VzbHkgdHJpZ2dlciBpdGVtIHVwZGF0ZXNcbiAgICAgIC8vIHdpbGwgbm93IHJlcXVpcmUgY2FsbGluZyBgZm9yY2VTeW5jaHJvbm91c0l0ZW1VcGRhdGVgLlxuICAgICAgdGhpcy5fb2JzZXJ2ZXIuZmx1c2goKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdXBkYXRlSXRlbXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLy8gVU5VU0VELCBGT1IgQVBJIENPTVBBVElCSUxJVFlcbiAgZ2V0IF9zaG91bGRVcGRhdGVTZWxlY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0ZWQgIT0gbnVsbDtcbiAgfSxcblxuICBfY2hlY2tGYWxsYmFjazogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fdXBkYXRlU2VsZWN0ZWQoKTtcbiAgfSxcblxuICBfYWRkTGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMubGlzdGVuKHRoaXMsIGV2ZW50TmFtZSwgJ19hY3RpdmF0ZUhhbmRsZXInKTtcbiAgfSxcblxuICBfcmVtb3ZlTGlzdGVuZXI6IGZ1bmN0aW9uKGV2ZW50TmFtZSkge1xuICAgIHRoaXMudW5saXN0ZW4odGhpcywgZXZlbnROYW1lLCAnX2FjdGl2YXRlSGFuZGxlcicpO1xuICB9LFxuXG4gIF9hY3RpdmF0ZUV2ZW50Q2hhbmdlZDogZnVuY3Rpb24oZXZlbnROYW1lLCBvbGQpIHtcbiAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcihvbGQpO1xuICAgIHRoaXMuX2FkZExpc3RlbmVyKGV2ZW50TmFtZSk7XG4gIH0sXG5cbiAgX3VwZGF0ZUl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbm9kZXMgPSBkb20odGhpcykucXVlcnlEaXN0cmlidXRlZEVsZW1lbnRzKHRoaXMuc2VsZWN0YWJsZSB8fCAnKicpO1xuICAgIG5vZGVzID0gQXJyYXkucHJvdG90eXBlLmZpbHRlci5jYWxsKG5vZGVzLCB0aGlzLl9iaW5kRmlsdGVySXRlbSk7XG4gICAgdGhpcy5fc2V0SXRlbXMobm9kZXMpO1xuICB9LFxuXG4gIF91cGRhdGVBdHRyRm9yU2VsZWN0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuX3ZhbHVlRm9ySXRlbSh0aGlzLnNlbGVjdGVkSXRlbSk7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVTZWxlY3RlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fc2VsZWN0U2VsZWN0ZWQodGhpcy5zZWxlY3RlZCk7XG4gIH0sXG5cbiAgX3NlbGVjdFNlbGVjdGVkOiBmdW5jdGlvbihzZWxlY3RlZCkge1xuICAgIGlmICghdGhpcy5pdGVtcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBpdGVtID0gdGhpcy5fdmFsdWVUb0l0ZW0odGhpcy5zZWxlY3RlZCk7XG4gICAgaWYgKGl0ZW0pIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbi5zZWxlY3QoaXRlbSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3NlbGVjdGlvbi5jbGVhcigpO1xuICAgIH1cbiAgICAvLyBDaGVjayBmb3IgaXRlbXMsIHNpbmNlIHRoaXMgYXJyYXkgaXMgcG9wdWxhdGVkIG9ubHkgd2hlbiBhdHRhY2hlZFxuICAgIC8vIFNpbmNlIE51bWJlcigwKSBpcyBmYWxzeSwgZXhwbGljaXRseSBjaGVjayBmb3IgdW5kZWZpbmVkXG4gICAgaWYgKHRoaXMuZmFsbGJhY2tTZWxlY3Rpb24gJiYgdGhpcy5pdGVtcy5sZW5ndGggJiZcbiAgICAgICAgKHRoaXMuX3NlbGVjdGlvbi5nZXQoKSA9PT0gdW5kZWZpbmVkKSkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IHRoaXMuZmFsbGJhY2tTZWxlY3Rpb247XG4gICAgfVxuICB9LFxuXG4gIF9maWx0ZXJJdGVtOiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuICF0aGlzLl9leGNsdWRlZExvY2FsTmFtZXNbbm9kZS5sb2NhbE5hbWVdO1xuICB9LFxuXG4gIF92YWx1ZVRvSXRlbTogZnVuY3Rpb24odmFsdWUpIHtcbiAgICByZXR1cm4gKHZhbHVlID09IG51bGwpID8gbnVsbCA6IHRoaXMuaXRlbXNbdGhpcy5fdmFsdWVUb0luZGV4KHZhbHVlKV07XG4gIH0sXG5cbiAgX3ZhbHVlVG9JbmRleDogZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAodGhpcy5hdHRyRm9yU2VsZWN0ZWQpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwLCBpdGVtOyBpdGVtID0gdGhpcy5pdGVtc1tpXTsgaSsrKSB7XG4gICAgICAgIGlmICh0aGlzLl92YWx1ZUZvckl0ZW0oaXRlbSkgPT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gTnVtYmVyKHZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgX2luZGV4VG9WYWx1ZTogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAodGhpcy5hdHRyRm9yU2VsZWN0ZWQpIHtcbiAgICAgIHZhciBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XG4gICAgICBpZiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVGb3JJdGVtKGl0ZW0pO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW5kZXg7XG4gICAgfVxuICB9LFxuXG4gIF92YWx1ZUZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuYXR0ckZvclNlbGVjdGVkKSB7XG4gICAgICB2YXIgaSA9IHRoaXMuaW5kZXhPZihpdGVtKTtcbiAgICAgIHJldHVybiBpID09PSAtMSA/IG51bGwgOiBpO1xuICAgIH1cbiAgICB2YXIgcHJvcFZhbHVlID0gaXRlbVtkYXNoVG9DYW1lbENhc2UodGhpcy5hdHRyRm9yU2VsZWN0ZWQpXTtcbiAgICByZXR1cm4gcHJvcFZhbHVlICE9IHVuZGVmaW5lZCA/IHByb3BWYWx1ZSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmdldEF0dHJpYnV0ZSh0aGlzLmF0dHJGb3JTZWxlY3RlZCk7XG4gIH0sXG5cbiAgX2FwcGx5U2VsZWN0aW9uOiBmdW5jdGlvbihpdGVtLCBpc1NlbGVjdGVkKSB7XG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRDbGFzcykge1xuICAgICAgdGhpcy50b2dnbGVDbGFzcyh0aGlzLnNlbGVjdGVkQ2xhc3MsIGlzU2VsZWN0ZWQsIGl0ZW0pO1xuICAgIH1cbiAgICBpZiAodGhpcy5zZWxlY3RlZEF0dHJpYnV0ZSkge1xuICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUodGhpcy5zZWxlY3RlZEF0dHJpYnV0ZSwgaXNTZWxlY3RlZCwgaXRlbSk7XG4gICAgfVxuICAgIHRoaXMuX3NlbGVjdGlvbkNoYW5nZSgpO1xuICAgIHRoaXMuZmlyZSgnaXJvbi0nICsgKGlzU2VsZWN0ZWQgPyAnc2VsZWN0JyA6ICdkZXNlbGVjdCcpLCB7aXRlbTogaXRlbX0pO1xuICB9LFxuXG4gIF9zZWxlY3Rpb25DaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbSh0aGlzLl9zZWxlY3Rpb24uZ2V0KCkpO1xuICB9LFxuXG4gIC8vIG9ic2VydmUgaXRlbXMgY2hhbmdlIHVuZGVyIHRoZSBnaXZlbiBub2RlLlxuICBfb2JzZXJ2ZUl0ZW1zOiBmdW5jdGlvbihub2RlKSB7XG4gICAgcmV0dXJuIGRvbShub2RlKS5vYnNlcnZlTm9kZXMoZnVuY3Rpb24obXV0YXRpb24pIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUl0ZW1zKCk7XG4gICAgICB0aGlzLl91cGRhdGVTZWxlY3RlZCgpO1xuXG4gICAgICAvLyBMZXQgb3RoZXIgaW50ZXJlc3RlZCBwYXJ0aWVzIGtub3cgYWJvdXQgdGhlIGNoYW5nZSBzbyB0aGF0XG4gICAgICAvLyB3ZSBkb24ndCBoYXZlIHRvIHJlY3JlYXRlIG11dGF0aW9uIG9ic2VydmVycyBldmVyeXdoZXJlLlxuICAgICAgdGhpcy5maXJlKFxuICAgICAgICAgICdpcm9uLWl0ZW1zLWNoYW5nZWQnLCBtdXRhdGlvbiwge2J1YmJsZXM6IGZhbHNlLCBjYW5jZWxhYmxlOiBmYWxzZX0pO1xuICAgIH0pO1xuICB9LFxuXG4gIF9hY3RpdmF0ZUhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgdCA9IGUudGFyZ2V0O1xuICAgIHZhciBpdGVtcyA9IHRoaXMuaXRlbXM7XG4gICAgd2hpbGUgKHQgJiYgdCAhPSB0aGlzKSB7XG4gICAgICB2YXIgaSA9IGl0ZW1zLmluZGV4T2YodCk7XG4gICAgICBpZiAoaSA+PSAwKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRoaXMuX2luZGV4VG9WYWx1ZShpKTtcbiAgICAgICAgdGhpcy5faXRlbUFjdGl2YXRlKHZhbHVlLCB0KTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgdCA9IHQucGFyZW50Tm9kZTtcbiAgICB9XG4gIH0sXG5cbiAgX2l0ZW1BY3RpdmF0ZTogZnVuY3Rpb24odmFsdWUsIGl0ZW0pIHtcbiAgICBpZiAoIXRoaXMuZmlyZSgnaXJvbi1hY3RpdmF0ZScsIHtzZWxlY3RlZDogdmFsdWUsIGl0ZW06IGl0ZW19LCB7XG4gICAgICAgICAgICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5zZWxlY3QodmFsdWUpO1xuICAgIH1cbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5leHBvcnQgY2xhc3MgSXJvblNlbGVjdGlvbiB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gc2VsZWN0Q2FsbGJhY2tcbiAgICogQHN1cHByZXNzIHttaXNzaW5nUHJvdmlkZX1cbiAgICovXG4gIGNvbnN0cnVjdG9yKHNlbGVjdENhbGxiYWNrKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24gPSBbXTtcbiAgICB0aGlzLnNlbGVjdENhbGxiYWNrID0gc2VsZWN0Q2FsbGJhY2s7XG4gIH1cblxuICAvKipcbiAgICogUmV0cmlldmVzIHRoZSBzZWxlY3RlZCBpdGVtKHMpLlxuICAgKlxuICAgKiBAcmV0dXJucyBSZXR1cm5zIHRoZSBzZWxlY3RlZCBpdGVtKHMpLiBJZiB0aGUgbXVsdGkgcHJvcGVydHkgaXMgdHJ1ZSxcbiAgICogYGdldGAgd2lsbCByZXR1cm4gYW4gYXJyYXksIG90aGVyd2lzZSBpdCB3aWxsIHJldHVyblxuICAgKiB0aGUgc2VsZWN0ZWQgaXRlbSBvciB1bmRlZmluZWQgaWYgdGhlcmUgaXMgbm8gc2VsZWN0aW9uLlxuICAgKi9cbiAgZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLm11bHRpID8gdGhpcy5zZWxlY3Rpb24uc2xpY2UoKSA6IHRoaXMuc2VsZWN0aW9uWzBdO1xuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyBhbGwgdGhlIHNlbGVjdGlvbiBleGNlcHQgdGhlIG9uZXMgaW5kaWNhdGVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0FycmF5fSBleGNsdWRlcyBpdGVtcyB0byBiZSBleGNsdWRlZC5cbiAgICovXG4gIGNsZWFyKGV4Y2x1ZGVzKSB7XG4gICAgdGhpcy5zZWxlY3Rpb24uc2xpY2UoKS5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgIGlmICghZXhjbHVkZXMgfHwgZXhjbHVkZXMuaW5kZXhPZihpdGVtKSA8IDApIHtcbiAgICAgICAgdGhpcy5zZXRJdGVtU2VsZWN0ZWQoaXRlbSwgZmFsc2UpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEluZGljYXRlcyBpZiBhIGdpdmVuIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSB3aG9zZSBzZWxlY3Rpb24gc3RhdGUgc2hvdWxkIGJlIGNoZWNrZWQuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFJldHVybnMgdHJ1ZSBpZiBgaXRlbWAgaXMgc2VsZWN0ZWQuXG4gICAqL1xuICBpc1NlbGVjdGVkKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5zZWxlY3Rpb24uaW5kZXhPZihpdGVtKSA+PSAwO1xuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSBnaXZlbiBpdGVtIHRvIGVpdGhlciBzZWxlY3RlZCBvciBkZXNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGl0ZW0gVGhlIGl0ZW0gdG8gc2VsZWN0LlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGlzU2VsZWN0ZWQgVHJ1ZSBmb3Igc2VsZWN0ZWQsIGZhbHNlIGZvciBkZXNlbGVjdGVkLlxuICAgKi9cbiAgc2V0SXRlbVNlbGVjdGVkKGl0ZW0sIGlzU2VsZWN0ZWQpIHtcbiAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICBpZiAoaXNTZWxlY3RlZCAhPT0gdGhpcy5pc1NlbGVjdGVkKGl0ZW0pKSB7XG4gICAgICAgIC8vIHByb2NlZWQgdG8gdXBkYXRlIHNlbGVjdGlvbiBvbmx5IGlmIHJlcXVlc3RlZCBzdGF0ZSBkaWZmZXJzIGZyb21cbiAgICAgICAgLy8gY3VycmVudFxuICAgICAgICBpZiAoaXNTZWxlY3RlZCkge1xuICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnB1c2goaXRlbSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdmFyIGkgPSB0aGlzLnNlbGVjdGlvbi5pbmRleE9mKGl0ZW0pO1xuICAgICAgICAgIGlmIChpID49IDApIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0aW9uLnNwbGljZShpLCAxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0Q2FsbGJhY2spIHtcbiAgICAgICAgICB0aGlzLnNlbGVjdENhbGxiYWNrKGl0ZW0sIGlzU2VsZWN0ZWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHNlbGVjdGlvbiBzdGF0ZSBmb3IgYSBnaXZlbiBpdGVtLiBJZiB0aGUgYG11bHRpYCBwcm9wZXJ0eVxuICAgKiBpcyB0cnVlLCB0aGVuIHRoZSBzZWxlY3RlZCBzdGF0ZSBvZiBgaXRlbWAgd2lsbCBiZSB0b2dnbGVkOyBvdGhlcndpc2VcbiAgICogdGhlIGBpdGVtYCB3aWxsIGJlIHNlbGVjdGVkLlxuICAgKlxuICAgKiBAcGFyYW0geyp9IGl0ZW0gVGhlIGl0ZW0gdG8gc2VsZWN0LlxuICAgKi9cbiAgc2VsZWN0KGl0ZW0pIHtcbiAgICBpZiAodGhpcy5tdWx0aSkge1xuICAgICAgdGhpcy50b2dnbGUoaXRlbSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLmdldCgpICE9PSBpdGVtKSB7XG4gICAgICB0aGlzLnNldEl0ZW1TZWxlY3RlZCh0aGlzLmdldCgpLCBmYWxzZSk7XG4gICAgICB0aGlzLnNldEl0ZW1TZWxlY3RlZChpdGVtLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgc2VsZWN0aW9uIHN0YXRlIGZvciBgaXRlbWAuXG4gICAqXG4gICAqIEBwYXJhbSB7Kn0gaXRlbSBUaGUgaXRlbSB0byB0b2dnbGUuXG4gICAqL1xuICB0b2dnbGUoaXRlbSkge1xuICAgIHRoaXMuc2V0SXRlbVNlbGVjdGVkKGl0ZW0sICF0aGlzLmlzU2VsZWN0ZWQoaXRlbSkpO1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFFQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQW5CQTtBQUNBO0FBeUJBOzs7OztBQUtBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUF4WkE7QUEyWkE7QUFFQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ3JiQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBRUE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTEE7QUFDQTtBQU9BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBdEJBO0FBaUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL0lBO0FBa0pBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDcEtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7QUFFQTs7OztBQUdBO0FBRUE7Ozs7Ozs7O0FBUUE7Ozs7OztBQU1BOzs7Ozs7QUFNQTs7Ozs7OztBQVFBO0FBRUE7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQUNBO0FBUUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU1BO0FBVEE7QUE1RUE7QUF5RkE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQXhYQTs7Ozs7Ozs7Ozs7O0FDcEJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQTlGQTtBQThGQTs7OztBIiwic291cmNlUm9vdCI6IiJ9