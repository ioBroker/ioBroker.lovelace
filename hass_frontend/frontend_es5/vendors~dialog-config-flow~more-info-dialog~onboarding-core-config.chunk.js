(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dialog-config-flow~more-info-dialog~onboarding-core-config"],{

/***/ "./node_modules/@polymer/iron-behaviors/iron-button-state.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/iron-behaviors/iron-button-state.js ***!
  \*******************************************************************/
/*! exports provided: IronButtonStateImpl, IronButtonState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronButtonStateImpl", function() { return IronButtonStateImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronButtonState", function() { return IronButtonState; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_control_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
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
 * @demo demo/index.html
 * @polymerBehavior IronButtonState
 */

var IronButtonStateImpl = {
  properties: {
    /**
     * If true, the user is currently holding down the button.
     */
    pressed: {
      type: Boolean,
      readOnly: true,
      value: false,
      reflectToAttribute: true,
      observer: '_pressedChanged'
    },

    /**
     * If true, the button toggles the active state with each tap or press
     * of the spacebar.
     */
    toggles: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * If true, the button is a toggle and is currently in the active state.
     */
    active: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * True if the element is currently being pressed by a "pointer," which
     * is loosely defined as mouse or touch input (but specifically excluding
     * keyboard input).
     */
    pointerDown: {
      type: Boolean,
      readOnly: true,
      value: false
    },

    /**
     * True if the input device that caused the element to receive focus
     * was a keyboard.
     */
    receivedFocusFromKeyboard: {
      type: Boolean,
      readOnly: true
    },

    /**
     * The aria attribute to be set if the button is a toggle and in the
     * active state.
     */
    ariaActiveAttribute: {
      type: String,
      value: 'aria-pressed',
      observer: '_ariaActiveAttributeChanged'
    }
  },
  listeners: {
    down: '_downHandler',
    up: '_upHandler',
    tap: '_tapHandler'
  },
  observers: ['_focusChanged(focused)', '_activeChanged(active, ariaActiveAttribute)'],

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_asyncClick',
    'space:keydown': '_spaceKeyDownHandler',
    'space:keyup': '_spaceKeyUpHandler'
  },
  _mouseEventRe: /^mouse/,
  _tapHandler: function _tapHandler() {
    if (this.toggles) {
      // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },
  _focusChanged: function _focusChanged(focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },
  _detectKeyboardFocus: function _detectKeyboardFocus(focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },
  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function _userActivate(active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },
  _downHandler: function _downHandler(event) {
    this._setPointerDown(true);

    this._setPressed(true);

    this._setReceivedFocusFromKeyboard(false);
  },
  _upHandler: function _upHandler() {
    this._setPointerDown(false);

    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function _spaceKeyDownHandler(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(keyboardEvent).localTarget; // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.

    if (this.isLightDescendant(
    /** @type {Node} */
    target)) return;
    keyboardEvent.preventDefault();
    keyboardEvent.stopImmediatePropagation();

    this._setPressed(true);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyUpHandler: function _spaceKeyUpHandler(event) {
    var keyboardEvent = event.detail.keyboardEvent;
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(keyboardEvent).localTarget; // Ignore the event if this is coming from a focused light child, since that
    // element will deal with it.

    if (this.isLightDescendant(
    /** @type {Node} */
    target)) return;

    if (this.pressed) {
      this._asyncClick();
    }

    this._setPressed(false);
  },
  // trigger click asynchronously, the asynchrony is useful to allow one
  // event handler to unwind before triggering another event
  _asyncClick: function _asyncClick() {
    this.async(function () {
      this.click();
    }, 1);
  },
  // any of these changes are considered a change to button state
  _pressedChanged: function _pressedChanged(pressed) {
    this._changedButtonState();
  },
  _ariaActiveAttributeChanged: function _ariaActiveAttributeChanged(value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },
  _activeChanged: function _activeChanged(active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute, active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }

    this._changedButtonState();
  },
  _controlStateChanged: function _controlStateChanged() {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },
  // provide hook for follow-on behaviors to react to button-state
  _changedButtonState: function _changedButtonState() {
    if (this._buttonStateChanged) {
      this._buttonStateChanged(); // abstract

    }
  }
};
/** @polymerBehavior */

var IronButtonState = [_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"], IronButtonStateImpl];

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

var PaperInkyFocusBehaviorImpl = {
  observers: ['_focusedChanged(receivedFocusFromKeyboard)'],
  _focusedChanged: function _focusedChanged(receivedFocusFromKeyboard) {
    if (receivedFocusFromKeyboard) {
      this.ensureRipple();
    }

    if (this.hasRipple()) {
      this._ripple.holdDown = receivedFocusFromKeyboard;
    }
  },
  _createRipple: function _createRipple() {
    var ripple = _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"]._createRipple();

    ripple.id = 'ink';
    ripple.setAttribute('center', '');
    ripple.classList.add('circle');
    return ripple;
  }
};
/** @polymerBehavior */

var PaperInkyFocusBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _paper_ripple_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperRippleBehavior"], PaperInkyFocusBehaviorImpl];

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

var PaperRippleBehavior = {
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
  _buttonStateChanged: function _buttonStateChanged() {
    if (this.focused) {
      this.ensureRipple();
    }
  },

  /**
   * In addition to the functionality provided in `IronButtonState`, ensures
   * a ripple effect is created when the element is in a `pressed` state.
   */
  _downHandler: function _downHandler(event) {
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
  ensureRipple: function ensureRipple(optTriggeringEvent) {
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
  getRipple: function getRipple() {
    this.ensureRipple();
    return this._ripple;
  },

  /**
   * Returns true if this element currently contains a ripple effect.
   * @return {boolean}
   */
  hasRipple: function hasRipple() {
    return Boolean(this._ripple);
  },

  /**
   * Create the element's ripple effect via creating a `<paper-ripple>`.
   * Override this method to customize the ripple element.
   * @return {!PaperRippleElement} Returns a `<paper-ripple>` element.
   */
  _createRipple: function _createRipple() {
    var element =
    /** @type {!PaperRippleElement} */
    document.createElement('paper-ripple');
    return element;
  },
  _noinkChanged: function _noinkChanged(noink) {
    if (this.hasRipple()) {
      this._ripple.noink = noink;
    }
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-ripple/paper-ripple.js":
/*!************************************************************!*\
  !*** ./node_modules/@polymer/paper-ripple/paper-ripple.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        position: absolute;\n        border-radius: inherit;\n        overflow: hidden;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n\n        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,\n         * creating a node (with a position:absolute) in the middle of an event\n         * handler \"interrupts\" that event handler (which happens when the\n         * ripple is created on demand) */\n        pointer-events: none;\n      }\n\n      :host([animating]) {\n        /* This resolves a rendering issue in Chrome (as of 40) where the\n           ripple is not properly clipped by its parent (which may have\n           rounded corners). See: http://jsbin.com/temexa/4\n\n           Note: We only apply this style conditionally. Otherwise, the browser\n           will create a new compositing layer for every ripple element on the\n           page, and that would be bad. */\n        -webkit-transform: translate(0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #background,\n      #waves,\n      .wave-container,\n      .wave {\n        pointer-events: none;\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n      }\n\n      #background,\n      .wave {\n        opacity: 0;\n      }\n\n      #waves,\n      .wave {\n        overflow: hidden;\n      }\n\n      .wave-container,\n      .wave {\n        border-radius: 50%;\n      }\n\n      :host(.circle) #background,\n      :host(.circle) #waves {\n        border-radius: 50%;\n      }\n\n      :host(.circle) .wave-container {\n        overflow: hidden;\n      }\n    </style>\n\n    <div id=\"background\"></div>\n    <div id=\"waves\"></div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/





var Utility = {
  distance: function distance(x1, y1, x2, y2) {
    var xDelta = x1 - x2;
    var yDelta = y1 - y2;
    return Math.sqrt(xDelta * xDelta + yDelta * yDelta);
  },
  now: window.performance && window.performance.now ? window.performance.now.bind(window.performance) : Date.now
};
/**
 * @param {HTMLElement} element
 * @constructor
 */

function ElementMetrics(element) {
  this.element = element;
  this.width = this.boundingRect.width;
  this.height = this.boundingRect.height;
  this.size = Math.max(this.width, this.height);
}

ElementMetrics.prototype = {
  get boundingRect() {
    return this.element.getBoundingClientRect();
  },

  furthestCornerDistanceFrom: function furthestCornerDistanceFrom(x, y) {
    var topLeft = Utility.distance(x, y, 0, 0);
    var topRight = Utility.distance(x, y, this.width, 0);
    var bottomLeft = Utility.distance(x, y, 0, this.height);
    var bottomRight = Utility.distance(x, y, this.width, this.height);
    return Math.max(topLeft, topRight, bottomLeft, bottomRight);
  }
};
/**
 * @param {HTMLElement} element
 * @constructor
 */

function Ripple(element) {
  this.element = element;
  this.color = window.getComputedStyle(element).color;
  this.wave = document.createElement('div');
  this.waveContainer = document.createElement('div');
  this.wave.style.backgroundColor = this.color;
  this.wave.classList.add('wave');
  this.waveContainer.classList.add('wave-container');
  Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.waveContainer).appendChild(this.wave);
  this.resetInteractionState();
}

Ripple.MAX_RADIUS = 300;
Ripple.prototype = {
  get recenters() {
    return this.element.recenters;
  },

  get center() {
    return this.element.center;
  },

  get mouseDownElapsed() {
    var elapsed;

    if (!this.mouseDownStart) {
      return 0;
    }

    elapsed = Utility.now() - this.mouseDownStart;

    if (this.mouseUpStart) {
      elapsed -= this.mouseUpElapsed;
    }

    return elapsed;
  },

  get mouseUpElapsed() {
    return this.mouseUpStart ? Utility.now() - this.mouseUpStart : 0;
  },

  get mouseDownElapsedSeconds() {
    return this.mouseDownElapsed / 1000;
  },

  get mouseUpElapsedSeconds() {
    return this.mouseUpElapsed / 1000;
  },

  get mouseInteractionSeconds() {
    return this.mouseDownElapsedSeconds + this.mouseUpElapsedSeconds;
  },

  get initialOpacity() {
    return this.element.initialOpacity;
  },

  get opacityDecayVelocity() {
    return this.element.opacityDecayVelocity;
  },

  get radius() {
    var width2 = this.containerMetrics.width * this.containerMetrics.width;
    var height2 = this.containerMetrics.height * this.containerMetrics.height;
    var waveRadius = Math.min(Math.sqrt(width2 + height2), Ripple.MAX_RADIUS) * 1.1 + 5;
    var duration = 1.1 - 0.2 * (waveRadius / Ripple.MAX_RADIUS);
    var timeNow = this.mouseInteractionSeconds / duration;
    var size = waveRadius * (1 - Math.pow(80, -timeNow));
    return Math.abs(size);
  },

  get opacity() {
    if (!this.mouseUpStart) {
      return this.initialOpacity;
    }

    return Math.max(0, this.initialOpacity - this.mouseUpElapsedSeconds * this.opacityDecayVelocity);
  },

  get outerOpacity() {
    // Linear increase in background opacity, capped at the opacity
    // of the wavefront (waveOpacity).
    var outerOpacity = this.mouseUpElapsedSeconds * 0.3;
    var waveOpacity = this.opacity;
    return Math.max(0, Math.min(outerOpacity, waveOpacity));
  },

  get isOpacityFullyDecayed() {
    return this.opacity < 0.01 && this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS);
  },

  get isRestingAtMaxRadius() {
    return this.opacity >= this.initialOpacity && this.radius >= Math.min(this.maxRadius, Ripple.MAX_RADIUS);
  },

  get isAnimationComplete() {
    return this.mouseUpStart ? this.isOpacityFullyDecayed : this.isRestingAtMaxRadius;
  },

  get translationFraction() {
    return Math.min(1, this.radius / this.containerMetrics.size * 2 / Math.sqrt(2));
  },

  get xNow() {
    if (this.xEnd) {
      return this.xStart + this.translationFraction * (this.xEnd - this.xStart);
    }

    return this.xStart;
  },

  get yNow() {
    if (this.yEnd) {
      return this.yStart + this.translationFraction * (this.yEnd - this.yStart);
    }

    return this.yStart;
  },

  get isMouseDown() {
    return this.mouseDownStart && !this.mouseUpStart;
  },

  resetInteractionState: function resetInteractionState() {
    this.maxRadius = 0;
    this.mouseDownStart = 0;
    this.mouseUpStart = 0;
    this.xStart = 0;
    this.yStart = 0;
    this.xEnd = 0;
    this.yEnd = 0;
    this.slideDistance = 0;
    this.containerMetrics = new ElementMetrics(this.element);
  },
  draw: function draw() {
    var scale;
    var dx;
    var dy;
    this.wave.style.opacity = this.opacity;
    scale = this.radius / (this.containerMetrics.size / 2);
    dx = this.xNow - this.containerMetrics.width / 2;
    dy = this.yNow - this.containerMetrics.height / 2; // 2d transform for safari because of border-radius and overflow:hidden
    // clipping bug. https://bugs.webkit.org/show_bug.cgi?id=98538

    this.waveContainer.style.webkitTransform = 'translate(' + dx + 'px, ' + dy + 'px)';
    this.waveContainer.style.transform = 'translate3d(' + dx + 'px, ' + dy + 'px, 0)';
    this.wave.style.webkitTransform = 'scale(' + scale + ',' + scale + ')';
    this.wave.style.transform = 'scale3d(' + scale + ',' + scale + ',1)';
  },

  /** @param {Event=} event */
  downAction: function downAction(event) {
    var xCenter = this.containerMetrics.width / 2;
    var yCenter = this.containerMetrics.height / 2;
    this.resetInteractionState();
    this.mouseDownStart = Utility.now();

    if (this.center) {
      this.xStart = xCenter;
      this.yStart = yCenter;
      this.slideDistance = Utility.distance(this.xStart, this.yStart, this.xEnd, this.yEnd);
    } else {
      this.xStart = event ? event.detail.x - this.containerMetrics.boundingRect.left : this.containerMetrics.width / 2;
      this.yStart = event ? event.detail.y - this.containerMetrics.boundingRect.top : this.containerMetrics.height / 2;
    }

    if (this.recenters) {
      this.xEnd = xCenter;
      this.yEnd = yCenter;
      this.slideDistance = Utility.distance(this.xStart, this.yStart, this.xEnd, this.yEnd);
    }

    this.maxRadius = this.containerMetrics.furthestCornerDistanceFrom(this.xStart, this.yStart);
    this.waveContainer.style.top = (this.containerMetrics.height - this.containerMetrics.size) / 2 + 'px';
    this.waveContainer.style.left = (this.containerMetrics.width - this.containerMetrics.size) / 2 + 'px';
    this.waveContainer.style.width = this.containerMetrics.size + 'px';
    this.waveContainer.style.height = this.containerMetrics.size + 'px';
  },

  /** @param {Event=} event */
  upAction: function upAction(event) {
    if (!this.isMouseDown) {
      return;
    }

    this.mouseUpStart = Utility.now();
  },
  remove: function remove() {
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.waveContainer.parentNode).removeChild(this.waveContainer);
  }
};
/**
Material design: [Surface
reaction](https://www.google.com/design/spec/animation/responsive-interaction.html#responsive-interaction-surface-reaction)

`paper-ripple` provides a visual effect that other paper elements can
use to simulate a rippling effect emanating from the point of contact.  The
effect can be visualized as a concentric circle with motion.

Example:

    <div style="position:relative">
      <paper-ripple></paper-ripple>
    </div>

Note, it's important that the parent container of the ripple be relative
position, otherwise the ripple will emanate outside of the desired container.

`paper-ripple` listens to "mousedown" and "mouseup" events so it would display
ripple effect when touches on it.  You can also defeat the default behavior and
manually route the down and up actions to the ripple element.  Note that it is
important if you call `downAction()` you will have to make sure to call
`upAction()` so that `paper-ripple` would end the animation loop.

Example:

    <paper-ripple id="ripple" style="pointer-events: none;"></paper-ripple>
    ...
    downAction: function(e) {
      this.$.ripple.downAction(e.detail);
    },
    upAction: function(e) {
      this.$.ripple.upAction();
    }

Styling ripple effect:

  Use CSS color property to style the ripple:

    paper-ripple {
      color: #4285f4;
    }

  Note that CSS color property is inherited so it is not required to set it on
  the `paper-ripple` element directly.

By default, the ripple is centered on the point of contact.  Apply the
`recenters` attribute to have the ripple grow toward the center of its
container.

    <paper-ripple recenters></paper-ripple>

You can also  center the ripple inside its container from the start.

    <paper-ripple center></paper-ripple>

Apply `circle` class to make the rippling effect within a circle.

    <paper-ripple class="circle"></paper-ripple>

@group Paper Elements
@element paper-ripple
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'paper-ripple',
  behaviors: [_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"]],
  properties: {
    /**
     * The initial opacity set on the wave.
     *
     * @attribute initialOpacity
     * @type number
     * @default 0.25
     */
    initialOpacity: {
      type: Number,
      value: 0.25
    },

    /**
     * How fast (opacity per second) the wave fades out.
     *
     * @attribute opacityDecayVelocity
     * @type number
     * @default 0.8
     */
    opacityDecayVelocity: {
      type: Number,
      value: 0.8
    },

    /**
     * If true, ripples will exhibit a gravitational pull towards
     * the center of their container as they fade away.
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */
    recenters: {
      type: Boolean,
      value: false
    },

    /**
     * If true, ripples will center inside its container
     *
     * @attribute recenters
     * @type boolean
     * @default false
     */
    center: {
      type: Boolean,
      value: false
    },

    /**
     * A list of the visual ripples.
     *
     * @attribute ripples
     * @type Array
     * @default []
     */
    ripples: {
      type: Array,
      value: function value() {
        return [];
      }
    },

    /**
     * True when there are visible ripples animating within the
     * element.
     */
    animating: {
      type: Boolean,
      readOnly: true,
      reflectToAttribute: true,
      value: false
    },

    /**
     * If true, the ripple will remain in the "down" state until `holdDown`
     * is set to false again.
     */
    holdDown: {
      type: Boolean,
      value: false,
      observer: '_holdDownChanged'
    },

    /**
     * If true, the ripple will not generate a ripple effect
     * via pointer interaction.
     * Calling ripple's imperative api like `simulatedRipple` will
     * still generate the ripple effect.
     */
    noink: {
      type: Boolean,
      value: false
    },
    _animating: {
      type: Boolean
    },
    _boundAnimate: {
      type: Function,
      value: function value() {
        return this.animate.bind(this);
      }
    }
  },

  get target() {
    return this.keyEventTarget;
  },

  /**
   * @type {!Object}
   */
  keyBindings: {
    'enter:keydown': '_onEnterKeydown',
    'space:keydown': '_onSpaceKeydown',
    'space:keyup': '_onSpaceKeyup'
  },
  attached: function attached() {
    // Set up a11yKeysBehavior to listen to key events on the target,
    // so that space and enter activate the ripple even if the target doesn't
    // handle key events. The key handlers deal with `noink` themselves.
    if (this.parentNode.nodeType == 11) {
      // DOCUMENT_FRAGMENT_NODE
      this.keyEventTarget = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).getOwnerRoot().host;
    } else {
      this.keyEventTarget = this.parentNode;
    }

    var keyEventTarget =
    /** @type {!EventTarget} */
    this.keyEventTarget;
    this.listen(keyEventTarget, 'up', 'uiUpAction');
    this.listen(keyEventTarget, 'down', 'uiDownAction');
  },
  detached: function detached() {
    this.unlisten(this.keyEventTarget, 'up', 'uiUpAction');
    this.unlisten(this.keyEventTarget, 'down', 'uiDownAction');
    this.keyEventTarget = null;
  },

  get shouldKeepAnimating() {
    for (var index = 0; index < this.ripples.length; ++index) {
      if (!this.ripples[index].isAnimationComplete) {
        return true;
      }
    }

    return false;
  },

  simulatedRipple: function simulatedRipple() {
    this.downAction(null); // Please see polymer/polymer#1305

    this.async(function () {
      this.upAction();
    }, 1);
  },

  /**
   * Provokes a ripple down effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */
  uiDownAction: function uiDownAction(event) {
    if (!this.noink) {
      this.downAction(event);
    }
  },

  /**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */
  downAction: function downAction(event) {
    if (this.holdDown && this.ripples.length > 0) {
      return;
    }

    var ripple = this.addRipple();
    ripple.downAction(event);

    if (!this._animating) {
      this._animating = true;
      this.animate();
    }
  },

  /**
   * Provokes a ripple up effect via a UI event,
   * respecting the `noink` property.
   * @param {Event=} event
   */
  uiUpAction: function uiUpAction(event) {
    if (!this.noink) {
      this.upAction(event);
    }
  },

  /**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */
  upAction: function upAction(event) {
    if (this.holdDown) {
      return;
    }

    this.ripples.forEach(function (ripple) {
      ripple.upAction(event);
    });
    this._animating = true;
    this.animate();
  },
  onAnimationComplete: function onAnimationComplete() {
    this._animating = false;
    this.$.background.style.backgroundColor = null;
    this.fire('transitionend');
  },
  addRipple: function addRipple() {
    var ripple = new Ripple(this);
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.waves).appendChild(ripple.waveContainer);
    this.$.background.style.backgroundColor = ripple.color;
    this.ripples.push(ripple);

    this._setAnimating(true);

    return ripple;
  },
  removeRipple: function removeRipple(ripple) {
    var rippleIndex = this.ripples.indexOf(ripple);

    if (rippleIndex < 0) {
      return;
    }

    this.ripples.splice(rippleIndex, 1);
    ripple.remove();

    if (!this.ripples.length) {
      this._setAnimating(false);
    }
  },

  /**
   * Deprecated. Please use animateRipple() instead.
   *
   * This method name conflicts with Element#animate().
   * https://developer.mozilla.org/en-US/docs/Web/API/Element/animate.
   *
   * @suppress {checkTypes}
   */
  animate: function animate() {
    if (!this._animating) {
      return;
    }

    var index;
    var ripple;

    for (index = 0; index < this.ripples.length; ++index) {
      ripple = this.ripples[index];
      ripple.draw();
      this.$.background.style.opacity = ripple.outerOpacity;

      if (ripple.isOpacityFullyDecayed && !ripple.isRestingAtMaxRadius) {
        this.removeRipple(ripple);
      }
    }

    if (!this.shouldKeepAnimating && this.ripples.length === 0) {
      this.onAnimationComplete();
    } else {
      window.requestAnimationFrame(this._boundAnimate);
    }
  },

  /**
   * An alias for animate() whose name does not conflict with the platform
   * Element.animate() method.
   */
  animateRipple: function animateRipple() {
    return this.animate();
  },
  _onEnterKeydown: function _onEnterKeydown() {
    this.uiDownAction();
    this.async(this.uiUpAction, 1);
  },
  _onSpaceKeydown: function _onSpaceKeydown() {
    this.uiDownAction();
  },
  _onSpaceKeyup: function _onSpaceKeyup() {
    this.uiUpAction();
  },
  // note: holdDown does not respect noink since it can be a focus based
  // effect.
  _holdDownChanged: function _holdDownChanged(newVal, oldVal) {
    if (oldVal === undefined) {
      return;
    }

    if (newVal) {
      this.downAction();
    } else {
      this.upAction();
    }
  }
  /**
  Fired when the animation finishes.
  This is useful if you want to wait until
  the ripple animation finishes to perform some action.
   @event transitionend
  @param {{node: Object}} detail Contains the animated node.
  */

});

/***/ })

}]);
//# sourceMappingURL=vendors~dialog-config-flow~more-info-dialog~onboarding-core-config.chunk.js.map