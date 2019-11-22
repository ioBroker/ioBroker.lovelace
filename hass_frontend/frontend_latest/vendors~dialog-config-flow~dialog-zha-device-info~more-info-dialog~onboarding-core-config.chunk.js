(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~onboarding-core-config"],{

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

const IronButtonStateImpl = {
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
  _tapHandler: function () {
    if (this.toggles) {
      // a tap is needed to toggle the active state
      this._userActivate(!this.active);
    } else {
      this.active = false;
    }
  },
  _focusChanged: function (focused) {
    this._detectKeyboardFocus(focused);

    if (!focused) {
      this._setPressed(false);
    }
  },
  _detectKeyboardFocus: function (focused) {
    this._setReceivedFocusFromKeyboard(!this.pointerDown && focused);
  },
  // to emulate native checkbox, (de-)activations from a user interaction fire
  // 'change' events
  _userActivate: function (active) {
    if (this.active !== active) {
      this.active = active;
      this.fire('change');
    }
  },
  _downHandler: function (event) {
    this._setPointerDown(true);

    this._setPressed(true);

    this._setReceivedFocusFromKeyboard(false);
  },
  _upHandler: function () {
    this._setPointerDown(false);

    this._setPressed(false);
  },

  /**
   * @param {!KeyboardEvent} event .
   */
  _spaceKeyDownHandler: function (event) {
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
  _spaceKeyUpHandler: function (event) {
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
  _asyncClick: function () {
    this.async(function () {
      this.click();
    }, 1);
  },
  // any of these changes are considered a change to button state
  _pressedChanged: function (pressed) {
    this._changedButtonState();
  },
  _ariaActiveAttributeChanged: function (value, oldValue) {
    if (oldValue && oldValue != value && this.hasAttribute(oldValue)) {
      this.removeAttribute(oldValue);
    }
  },
  _activeChanged: function (active, ariaActiveAttribute) {
    if (this.toggles) {
      this.setAttribute(this.ariaActiveAttribute, active ? 'true' : 'false');
    } else {
      this.removeAttribute(this.ariaActiveAttribute);
    }

    this._changedButtonState();
  },
  _controlStateChanged: function () {
    if (this.disabled) {
      this._setPressed(false);
    } else {
      this._changedButtonState();
    }
  },
  // provide hook for follow-on behaviors to react to button-state
  _changedButtonState: function () {
    if (this._buttonStateChanged) {
      this._buttonStateChanged(); // abstract

    }
  }
};
/** @polymerBehavior */

const IronButtonState = [_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"], IronButtonStateImpl];

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
  distance: function (x1, y1, x2, y2) {
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

  furthestCornerDistanceFrom: function (x, y) {
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

  resetInteractionState: function () {
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
  draw: function () {
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
  downAction: function (event) {
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
  upAction: function (event) {
    if (!this.isMouseDown) {
      return;
    }

    this.mouseUpStart = Utility.now();
  },
  remove: function () {
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
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        display: block;
        position: absolute;
        border-radius: inherit;
        overflow: hidden;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;

        /* See PolymerElements/paper-behaviors/issues/34. On non-Chrome browsers,
         * creating a node (with a position:absolute) in the middle of an event
         * handler "interrupts" that event handler (which happens when the
         * ripple is created on demand) */
        pointer-events: none;
      }

      :host([animating]) {
        /* This resolves a rendering issue in Chrome (as of 40) where the
           ripple is not properly clipped by its parent (which may have
           rounded corners). See: http://jsbin.com/temexa/4

           Note: We only apply this style conditionally. Otherwise, the browser
           will create a new compositing layer for every ripple element on the
           page, and that would be bad. */
        -webkit-transform: translate(0, 0);
        transform: translate3d(0, 0, 0);
      }

      #background,
      #waves,
      .wave-container,
      .wave {
        pointer-events: none;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }

      #background,
      .wave {
        opacity: 0;
      }

      #waves,
      .wave {
        overflow: hidden;
      }

      .wave-container,
      .wave {
        border-radius: 50%;
      }

      :host(.circle) #background,
      :host(.circle) #waves {
        border-radius: 50%;
      }

      :host(.circle) .wave-container {
        overflow: hidden;
      }
    </style>

    <div id="background"></div>
    <div id="waves"></div>
`,
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
      value: function () {
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
      value: function () {
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
  attached: function () {
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
  detached: function () {
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

  simulatedRipple: function () {
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
  uiDownAction: function (event) {
    if (!this.noink) {
      this.downAction(event);
    }
  },

  /**
   * Provokes a ripple down effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */
  downAction: function (event) {
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
  uiUpAction: function (event) {
    if (!this.noink) {
      this.upAction(event);
    }
  },

  /**
   * Provokes a ripple up effect via a UI event,
   * *not* respecting the `noink` property.
   * @param {Event=} event
   */
  upAction: function (event) {
    if (this.holdDown) {
      return;
    }

    this.ripples.forEach(function (ripple) {
      ripple.upAction(event);
    });
    this._animating = true;
    this.animate();
  },
  onAnimationComplete: function () {
    this._animating = false;
    this.$.background.style.backgroundColor = null;
    this.fire('transitionend');
  },
  addRipple: function () {
    var ripple = new Ripple(this);
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.$.waves).appendChild(ripple.waveContainer);
    this.$.background.style.backgroundColor = ripple.color;
    this.ripples.push(ripple);

    this._setAnimating(true);

    return ripple;
  },
  removeRipple: function (ripple) {
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
  animate: function () {
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
  animateRipple: function () {
    return this.animate();
  },
  _onEnterKeydown: function () {
    this.uiDownAction();
    this.async(this.uiUpAction, 1);
  },
  _onSpaceKeydown: function () {
    this.uiDownAction();
  },
  _onSpaceKeyup: function () {
    this.uiUpAction();
  },
  // note: holdDown does not respect noink since it can be a focus based
  // effect.
  _holdDownChanged: function (newVal, oldVal) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nfm9uYm9hcmRpbmctY29yZS1jb25maWcuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXJpcHBsZS9wYXBlci1yaXBwbGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICcuL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICogQHBvbHltZXJCZWhhdmlvciBJcm9uQnV0dG9uU3RhdGVcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25CdXR0b25TdGF0ZUltcGwgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIHVzZXIgaXMgY3VycmVudGx5IGhvbGRpbmcgZG93biB0aGUgYnV0dG9uLlxuICAgICAqL1xuICAgIHByZXNzZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgIG9ic2VydmVyOiAnX3ByZXNzZWRDaGFuZ2VkJ1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIHRvZ2dsZXMgdGhlIGFjdGl2ZSBzdGF0ZSB3aXRoIGVhY2ggdGFwIG9yIHByZXNzXG4gICAgICogb2YgdGhlIHNwYWNlYmFyLlxuICAgICAqL1xuICAgIHRvZ2dsZXM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgYnV0dG9uIGlzIGEgdG9nZ2xlIGFuZCBpcyBjdXJyZW50bHkgaW4gdGhlIGFjdGl2ZSBzdGF0ZS5cbiAgICAgKi9cbiAgICBhY3RpdmU6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG5vdGlmeTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhlIGVsZW1lbnQgaXMgY3VycmVudGx5IGJlaW5nIHByZXNzZWQgYnkgYSBcInBvaW50ZXIsXCIgd2hpY2hcbiAgICAgKiBpcyBsb29zZWx5IGRlZmluZWQgYXMgbW91c2Ugb3IgdG91Y2ggaW5wdXQgKGJ1dCBzcGVjaWZpY2FsbHkgZXhjbHVkaW5nXG4gICAgICoga2V5Ym9hcmQgaW5wdXQpLlxuICAgICAqL1xuICAgIHBvaW50ZXJEb3duOiB7dHlwZTogQm9vbGVhbiwgcmVhZE9ubHk6IHRydWUsIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBpbnB1dCBkZXZpY2UgdGhhdCBjYXVzZWQgdGhlIGVsZW1lbnQgdG8gcmVjZWl2ZSBmb2N1c1xuICAgICAqIHdhcyBhIGtleWJvYXJkLlxuICAgICAqL1xuICAgIHJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQ6IHt0eXBlOiBCb29sZWFuLCByZWFkT25seTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXJpYSBhdHRyaWJ1dGUgdG8gYmUgc2V0IGlmIHRoZSBidXR0b24gaXMgYSB0b2dnbGUgYW5kIGluIHRoZVxuICAgICAqIGFjdGl2ZSBzdGF0ZS5cbiAgICAgKi9cbiAgICBhcmlhQWN0aXZlQXR0cmlidXRlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJ2FyaWEtcHJlc3NlZCcsXG4gICAgICBvYnNlcnZlcjogJ19hcmlhQWN0aXZlQXR0cmlidXRlQ2hhbmdlZCdcbiAgICB9XG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7ZG93bjogJ19kb3duSGFuZGxlcicsIHVwOiAnX3VwSGFuZGxlcicsIHRhcDogJ190YXBIYW5kbGVyJ30sXG5cbiAgb2JzZXJ2ZXJzOlxuICAgICAgWydfZm9jdXNDaGFuZ2VkKGZvY3VzZWQpJywgJ19hY3RpdmVDaGFuZ2VkKGFjdGl2ZSwgYXJpYUFjdGl2ZUF0dHJpYnV0ZSknXSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczoge1xuICAgICdlbnRlcjprZXlkb3duJzogJ19hc3luY0NsaWNrJyxcbiAgICAnc3BhY2U6a2V5ZG93bic6ICdfc3BhY2VLZXlEb3duSGFuZGxlcicsXG4gICAgJ3NwYWNlOmtleXVwJzogJ19zcGFjZUtleVVwSGFuZGxlcicsXG4gIH0sXG5cbiAgX21vdXNlRXZlbnRSZTogL15tb3VzZS8sXG5cbiAgX3RhcEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgIC8vIGEgdGFwIGlzIG5lZWRlZCB0byB0b2dnbGUgdGhlIGFjdGl2ZSBzdGF0ZVxuICAgICAgdGhpcy5fdXNlckFjdGl2YXRlKCF0aGlzLmFjdGl2ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxuICB9LFxuXG4gIF9mb2N1c0NoYW5nZWQ6IGZ1bmN0aW9uKGZvY3VzZWQpIHtcbiAgICB0aGlzLl9kZXRlY3RLZXlib2FyZEZvY3VzKGZvY3VzZWQpO1xuXG4gICAgaWYgKCFmb2N1c2VkKSB7XG4gICAgICB0aGlzLl9zZXRQcmVzc2VkKGZhbHNlKTtcbiAgICB9XG4gIH0sXG5cbiAgX2RldGVjdEtleWJvYXJkRm9jdXM6IGZ1bmN0aW9uKGZvY3VzZWQpIHtcbiAgICB0aGlzLl9zZXRSZWNlaXZlZEZvY3VzRnJvbUtleWJvYXJkKCF0aGlzLnBvaW50ZXJEb3duICYmIGZvY3VzZWQpO1xuICB9LFxuXG4gIC8vIHRvIGVtdWxhdGUgbmF0aXZlIGNoZWNrYm94LCAoZGUtKWFjdGl2YXRpb25zIGZyb20gYSB1c2VyIGludGVyYWN0aW9uIGZpcmVcbiAgLy8gJ2NoYW5nZScgZXZlbnRzXG4gIF91c2VyQWN0aXZhdGU6IGZ1bmN0aW9uKGFjdGl2ZSkge1xuICAgIGlmICh0aGlzLmFjdGl2ZSAhPT0gYWN0aXZlKSB7XG4gICAgICB0aGlzLmFjdGl2ZSA9IGFjdGl2ZTtcbiAgICAgIHRoaXMuZmlyZSgnY2hhbmdlJyk7XG4gICAgfVxuICB9LFxuXG4gIF9kb3duSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9zZXRQb2ludGVyRG93bih0cnVlKTtcbiAgICB0aGlzLl9zZXRQcmVzc2VkKHRydWUpO1xuICAgIHRoaXMuX3NldFJlY2VpdmVkRm9jdXNGcm9tS2V5Ym9hcmQoZmFsc2UpO1xuICB9LFxuXG4gIF91cEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3NldFBvaW50ZXJEb3duKGZhbHNlKTtcbiAgICB0aGlzLl9zZXRQcmVzc2VkKGZhbHNlKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHshS2V5Ym9hcmRFdmVudH0gZXZlbnQgLlxuICAgKi9cbiAgX3NwYWNlS2V5RG93bkhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGtleWJvYXJkRXZlbnQgPSBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudDtcbiAgICB2YXIgdGFyZ2V0ID0gZG9tKGtleWJvYXJkRXZlbnQpLmxvY2FsVGFyZ2V0O1xuXG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiB0aGlzIGlzIGNvbWluZyBmcm9tIGEgZm9jdXNlZCBsaWdodCBjaGlsZCwgc2luY2UgdGhhdFxuICAgIC8vIGVsZW1lbnQgd2lsbCBkZWFsIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuaXNMaWdodERlc2NlbmRhbnQoLyoqIEB0eXBlIHtOb2RlfSAqLyAodGFyZ2V0KSkpXG4gICAgICByZXR1cm47XG5cbiAgICBrZXlib2FyZEV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAga2V5Ym9hcmRFdmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICB0aGlzLl9zZXRQcmVzc2VkKHRydWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFLZXlib2FyZEV2ZW50fSBldmVudCAuXG4gICAqL1xuICBfc3BhY2VLZXlVcEhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIGtleWJvYXJkRXZlbnQgPSBldmVudC5kZXRhaWwua2V5Ym9hcmRFdmVudDtcbiAgICB2YXIgdGFyZ2V0ID0gZG9tKGtleWJvYXJkRXZlbnQpLmxvY2FsVGFyZ2V0O1xuXG4gICAgLy8gSWdub3JlIHRoZSBldmVudCBpZiB0aGlzIGlzIGNvbWluZyBmcm9tIGEgZm9jdXNlZCBsaWdodCBjaGlsZCwgc2luY2UgdGhhdFxuICAgIC8vIGVsZW1lbnQgd2lsbCBkZWFsIHdpdGggaXQuXG4gICAgaWYgKHRoaXMuaXNMaWdodERlc2NlbmRhbnQoLyoqIEB0eXBlIHtOb2RlfSAqLyAodGFyZ2V0KSkpXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAodGhpcy5wcmVzc2VkKSB7XG4gICAgICB0aGlzLl9hc3luY0NsaWNrKCk7XG4gICAgfVxuICAgIHRoaXMuX3NldFByZXNzZWQoZmFsc2UpO1xuICB9LFxuXG4gIC8vIHRyaWdnZXIgY2xpY2sgYXN5bmNocm9ub3VzbHksIHRoZSBhc3luY2hyb255IGlzIHVzZWZ1bCB0byBhbGxvdyBvbmVcbiAgLy8gZXZlbnQgaGFuZGxlciB0byB1bndpbmQgYmVmb3JlIHRyaWdnZXJpbmcgYW5vdGhlciBldmVudFxuICBfYXN5bmNDbGljazogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hc3luYyhmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuY2xpY2soKTtcbiAgICB9LCAxKTtcbiAgfSxcblxuICAvLyBhbnkgb2YgdGhlc2UgY2hhbmdlcyBhcmUgY29uc2lkZXJlZCBhIGNoYW5nZSB0byBidXR0b24gc3RhdGVcblxuICBfcHJlc3NlZENoYW5nZWQ6IGZ1bmN0aW9uKHByZXNzZWQpIHtcbiAgICB0aGlzLl9jaGFuZ2VkQnV0dG9uU3RhdGUoKTtcbiAgfSxcblxuICBfYXJpYUFjdGl2ZUF0dHJpYnV0ZUNoYW5nZWQ6IGZ1bmN0aW9uKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmIChvbGRWYWx1ZSAmJiBvbGRWYWx1ZSAhPSB2YWx1ZSAmJiB0aGlzLmhhc0F0dHJpYnV0ZShvbGRWYWx1ZSkpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKG9sZFZhbHVlKTtcbiAgICB9XG4gIH0sXG5cbiAgX2FjdGl2ZUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2ZSwgYXJpYUFjdGl2ZUF0dHJpYnV0ZSkge1xuICAgIGlmICh0aGlzLnRvZ2dsZXMpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKHRoaXMuYXJpYUFjdGl2ZUF0dHJpYnV0ZSwgYWN0aXZlID8gJ3RydWUnIDogJ2ZhbHNlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKHRoaXMuYXJpYUFjdGl2ZUF0dHJpYnV0ZSk7XG4gICAgfVxuICAgIHRoaXMuX2NoYW5nZWRCdXR0b25TdGF0ZSgpO1xuICB9LFxuXG4gIF9jb250cm9sU3RhdGVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgdGhpcy5fc2V0UHJlc3NlZChmYWxzZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NoYW5nZWRCdXR0b25TdGF0ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvLyBwcm92aWRlIGhvb2sgZm9yIGZvbGxvdy1vbiBiZWhhdmlvcnMgdG8gcmVhY3QgdG8gYnV0dG9uLXN0YXRlXG5cbiAgX2NoYW5nZWRCdXR0b25TdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX2J1dHRvblN0YXRlQ2hhbmdlZCkge1xuICAgICAgdGhpcy5fYnV0dG9uU3RhdGVDaGFuZ2VkKCk7ICAvLyBhYnN0cmFjdFxuICAgIH1cbiAgfVxuXG59O1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IElyb25CdXR0b25TdGF0ZSA9IFtJcm9uQTExeUtleXNCZWhhdmlvciwgSXJvbkJ1dHRvblN0YXRlSW1wbF07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTQgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxudmFyIFV0aWxpdHkgPSB7XG4gIGRpc3RhbmNlOiBmdW5jdGlvbih4MSwgeTEsIHgyLCB5Mikge1xuICAgIHZhciB4RGVsdGEgPSAoeDEgLSB4Mik7XG4gICAgdmFyIHlEZWx0YSA9ICh5MSAtIHkyKTtcblxuICAgIHJldHVybiBNYXRoLnNxcnQoeERlbHRhICogeERlbHRhICsgeURlbHRhICogeURlbHRhKTtcbiAgfSxcblxuICBub3c6IHdpbmRvdy5wZXJmb3JtYW5jZSAmJiB3aW5kb3cucGVyZm9ybWFuY2Uubm93ID9cbiAgICAgIHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cuYmluZCh3aW5kb3cucGVyZm9ybWFuY2UpIDpcbiAgICAgIERhdGUubm93XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5mdW5jdGlvbiBFbGVtZW50TWV0cmljcyhlbGVtZW50KSB7XG4gIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gIHRoaXMud2lkdGggPSB0aGlzLmJvdW5kaW5nUmVjdC53aWR0aDtcbiAgdGhpcy5oZWlnaHQgPSB0aGlzLmJvdW5kaW5nUmVjdC5oZWlnaHQ7XG5cbiAgdGhpcy5zaXplID0gTWF0aC5tYXgodGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xufVxuXG5FbGVtZW50TWV0cmljcy5wcm90b3R5cGUgPSB7XG4gIGdldCBib3VuZGluZ1JlY3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSxcblxuICBmdXJ0aGVzdENvcm5lckRpc3RhbmNlRnJvbTogZnVuY3Rpb24oeCwgeSkge1xuICAgIHZhciB0b3BMZWZ0ID0gVXRpbGl0eS5kaXN0YW5jZSh4LCB5LCAwLCAwKTtcbiAgICB2YXIgdG9wUmlnaHQgPSBVdGlsaXR5LmRpc3RhbmNlKHgsIHksIHRoaXMud2lkdGgsIDApO1xuICAgIHZhciBib3R0b21MZWZ0ID0gVXRpbGl0eS5kaXN0YW5jZSh4LCB5LCAwLCB0aGlzLmhlaWdodCk7XG4gICAgdmFyIGJvdHRvbVJpZ2h0ID0gVXRpbGl0eS5kaXN0YW5jZSh4LCB5LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XG5cbiAgICByZXR1cm4gTWF0aC5tYXgodG9wTGVmdCwgdG9wUmlnaHQsIGJvdHRvbUxlZnQsIGJvdHRvbVJpZ2h0KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gKiBAY29uc3RydWN0b3JcbiAqL1xuZnVuY3Rpb24gUmlwcGxlKGVsZW1lbnQpIHtcbiAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgdGhpcy5jb2xvciA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsZW1lbnQpLmNvbG9yO1xuXG4gIHRoaXMud2F2ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLndhdmVDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgdGhpcy53YXZlLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHRoaXMuY29sb3I7XG4gIHRoaXMud2F2ZS5jbGFzc0xpc3QuYWRkKCd3YXZlJyk7XG4gIHRoaXMud2F2ZUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd3YXZlLWNvbnRhaW5lcicpO1xuICBkb20odGhpcy53YXZlQ29udGFpbmVyKS5hcHBlbmRDaGlsZCh0aGlzLndhdmUpO1xuXG4gIHRoaXMucmVzZXRJbnRlcmFjdGlvblN0YXRlKCk7XG59XG5cblJpcHBsZS5NQVhfUkFESVVTID0gMzAwO1xuXG5SaXBwbGUucHJvdG90eXBlID0ge1xuICBnZXQgcmVjZW50ZXJzKCkge1xuICAgIHJldHVybiB0aGlzLmVsZW1lbnQucmVjZW50ZXJzO1xuICB9LFxuXG4gIGdldCBjZW50ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5jZW50ZXI7XG4gIH0sXG5cbiAgZ2V0IG1vdXNlRG93bkVsYXBzZWQoKSB7XG4gICAgdmFyIGVsYXBzZWQ7XG5cbiAgICBpZiAoIXRoaXMubW91c2VEb3duU3RhcnQpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cblxuICAgIGVsYXBzZWQgPSBVdGlsaXR5Lm5vdygpIC0gdGhpcy5tb3VzZURvd25TdGFydDtcblxuICAgIGlmICh0aGlzLm1vdXNlVXBTdGFydCkge1xuICAgICAgZWxhcHNlZCAtPSB0aGlzLm1vdXNlVXBFbGFwc2VkO1xuICAgIH1cblxuICAgIHJldHVybiBlbGFwc2VkO1xuICB9LFxuXG4gIGdldCBtb3VzZVVwRWxhcHNlZCgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVVwU3RhcnQgPyBVdGlsaXR5Lm5vdygpIC0gdGhpcy5tb3VzZVVwU3RhcnQgOiAwO1xuICB9LFxuXG4gIGdldCBtb3VzZURvd25FbGFwc2VkU2Vjb25kcygpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZURvd25FbGFwc2VkIC8gMTAwMDtcbiAgfSxcblxuICBnZXQgbW91c2VVcEVsYXBzZWRTZWNvbmRzKCkge1xuICAgIHJldHVybiB0aGlzLm1vdXNlVXBFbGFwc2VkIC8gMTAwMDtcbiAgfSxcblxuICBnZXQgbW91c2VJbnRlcmFjdGlvblNlY29uZHMoKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VEb3duRWxhcHNlZFNlY29uZHMgKyB0aGlzLm1vdXNlVXBFbGFwc2VkU2Vjb25kcztcbiAgfSxcblxuICBnZXQgaW5pdGlhbE9wYWNpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5pbml0aWFsT3BhY2l0eTtcbiAgfSxcblxuICBnZXQgb3BhY2l0eURlY2F5VmVsb2NpdHkoKSB7XG4gICAgcmV0dXJuIHRoaXMuZWxlbWVudC5vcGFjaXR5RGVjYXlWZWxvY2l0eTtcbiAgfSxcblxuICBnZXQgcmFkaXVzKCkge1xuICAgIHZhciB3aWR0aDIgPSB0aGlzLmNvbnRhaW5lck1ldHJpY3Mud2lkdGggKiB0aGlzLmNvbnRhaW5lck1ldHJpY3Mud2lkdGg7XG4gICAgdmFyIGhlaWdodDIgPSB0aGlzLmNvbnRhaW5lck1ldHJpY3MuaGVpZ2h0ICogdGhpcy5jb250YWluZXJNZXRyaWNzLmhlaWdodDtcbiAgICB2YXIgd2F2ZVJhZGl1cyA9XG4gICAgICAgIE1hdGgubWluKE1hdGguc3FydCh3aWR0aDIgKyBoZWlnaHQyKSwgUmlwcGxlLk1BWF9SQURJVVMpICogMS4xICsgNTtcblxuICAgIHZhciBkdXJhdGlvbiA9IDEuMSAtIDAuMiAqICh3YXZlUmFkaXVzIC8gUmlwcGxlLk1BWF9SQURJVVMpO1xuICAgIHZhciB0aW1lTm93ID0gdGhpcy5tb3VzZUludGVyYWN0aW9uU2Vjb25kcyAvIGR1cmF0aW9uO1xuICAgIHZhciBzaXplID0gd2F2ZVJhZGl1cyAqICgxIC0gTWF0aC5wb3coODAsIC10aW1lTm93KSk7XG5cbiAgICByZXR1cm4gTWF0aC5hYnMoc2l6ZSk7XG4gIH0sXG5cbiAgZ2V0IG9wYWNpdHkoKSB7XG4gICAgaWYgKCF0aGlzLm1vdXNlVXBTdGFydCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5pdGlhbE9wYWNpdHk7XG4gICAgfVxuXG4gICAgcmV0dXJuIE1hdGgubWF4KFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmluaXRpYWxPcGFjaXR5IC1cbiAgICAgICAgICAgIHRoaXMubW91c2VVcEVsYXBzZWRTZWNvbmRzICogdGhpcy5vcGFjaXR5RGVjYXlWZWxvY2l0eSk7XG4gIH0sXG5cbiAgZ2V0IG91dGVyT3BhY2l0eSgpIHtcbiAgICAvLyBMaW5lYXIgaW5jcmVhc2UgaW4gYmFja2dyb3VuZCBvcGFjaXR5LCBjYXBwZWQgYXQgdGhlIG9wYWNpdHlcbiAgICAvLyBvZiB0aGUgd2F2ZWZyb250ICh3YXZlT3BhY2l0eSkuXG4gICAgdmFyIG91dGVyT3BhY2l0eSA9IHRoaXMubW91c2VVcEVsYXBzZWRTZWNvbmRzICogMC4zO1xuICAgIHZhciB3YXZlT3BhY2l0eSA9IHRoaXMub3BhY2l0eTtcblxuICAgIHJldHVybiBNYXRoLm1heCgwLCBNYXRoLm1pbihvdXRlck9wYWNpdHksIHdhdmVPcGFjaXR5KSk7XG4gIH0sXG5cbiAgZ2V0IGlzT3BhY2l0eUZ1bGx5RGVjYXllZCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5IDwgMC4wMSAmJlxuICAgICAgICB0aGlzLnJhZGl1cyA+PSBNYXRoLm1pbih0aGlzLm1heFJhZGl1cywgUmlwcGxlLk1BWF9SQURJVVMpO1xuICB9LFxuXG4gIGdldCBpc1Jlc3RpbmdBdE1heFJhZGl1cygpIHtcbiAgICByZXR1cm4gdGhpcy5vcGFjaXR5ID49IHRoaXMuaW5pdGlhbE9wYWNpdHkgJiZcbiAgICAgICAgdGhpcy5yYWRpdXMgPj0gTWF0aC5taW4odGhpcy5tYXhSYWRpdXMsIFJpcHBsZS5NQVhfUkFESVVTKTtcbiAgfSxcblxuICBnZXQgaXNBbmltYXRpb25Db21wbGV0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5tb3VzZVVwU3RhcnQgPyB0aGlzLmlzT3BhY2l0eUZ1bGx5RGVjYXllZCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5pc1Jlc3RpbmdBdE1heFJhZGl1cztcbiAgfSxcblxuICBnZXQgdHJhbnNsYXRpb25GcmFjdGlvbigpIHtcbiAgICByZXR1cm4gTWF0aC5taW4oXG4gICAgICAgIDEsIHRoaXMucmFkaXVzIC8gdGhpcy5jb250YWluZXJNZXRyaWNzLnNpemUgKiAyIC8gTWF0aC5zcXJ0KDIpKTtcbiAgfSxcblxuICBnZXQgeE5vdygpIHtcbiAgICBpZiAodGhpcy54RW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy54U3RhcnQgKyB0aGlzLnRyYW5zbGF0aW9uRnJhY3Rpb24gKiAodGhpcy54RW5kIC0gdGhpcy54U3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnhTdGFydDtcbiAgfSxcblxuICBnZXQgeU5vdygpIHtcbiAgICBpZiAodGhpcy55RW5kKSB7XG4gICAgICByZXR1cm4gdGhpcy55U3RhcnQgKyB0aGlzLnRyYW5zbGF0aW9uRnJhY3Rpb24gKiAodGhpcy55RW5kIC0gdGhpcy55U3RhcnQpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnlTdGFydDtcbiAgfSxcblxuICBnZXQgaXNNb3VzZURvd24oKSB7XG4gICAgcmV0dXJuIHRoaXMubW91c2VEb3duU3RhcnQgJiYgIXRoaXMubW91c2VVcFN0YXJ0O1xuICB9LFxuXG4gIHJlc2V0SW50ZXJhY3Rpb25TdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5tYXhSYWRpdXMgPSAwO1xuICAgIHRoaXMubW91c2VEb3duU3RhcnQgPSAwO1xuICAgIHRoaXMubW91c2VVcFN0YXJ0ID0gMDtcblxuICAgIHRoaXMueFN0YXJ0ID0gMDtcbiAgICB0aGlzLnlTdGFydCA9IDA7XG4gICAgdGhpcy54RW5kID0gMDtcbiAgICB0aGlzLnlFbmQgPSAwO1xuICAgIHRoaXMuc2xpZGVEaXN0YW5jZSA9IDA7XG5cbiAgICB0aGlzLmNvbnRhaW5lck1ldHJpY3MgPSBuZXcgRWxlbWVudE1ldHJpY3ModGhpcy5lbGVtZW50KTtcbiAgfSxcblxuICBkcmF3OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2NhbGU7XG4gICAgdmFyIGR4O1xuICAgIHZhciBkeTtcblxuICAgIHRoaXMud2F2ZS5zdHlsZS5vcGFjaXR5ID0gdGhpcy5vcGFjaXR5O1xuXG4gICAgc2NhbGUgPSB0aGlzLnJhZGl1cyAvICh0aGlzLmNvbnRhaW5lck1ldHJpY3Muc2l6ZSAvIDIpO1xuICAgIGR4ID0gdGhpcy54Tm93IC0gKHRoaXMuY29udGFpbmVyTWV0cmljcy53aWR0aCAvIDIpO1xuICAgIGR5ID0gdGhpcy55Tm93IC0gKHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLyAyKTtcblxuXG4gICAgLy8gMmQgdHJhbnNmb3JtIGZvciBzYWZhcmkgYmVjYXVzZSBvZiBib3JkZXItcmFkaXVzIGFuZCBvdmVyZmxvdzpoaWRkZW5cbiAgICAvLyBjbGlwcGluZyBidWcuIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD05ODUzOFxuICAgIHRoaXMud2F2ZUNvbnRhaW5lci5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPVxuICAgICAgICAndHJhbnNsYXRlKCcgKyBkeCArICdweCwgJyArIGR5ICsgJ3B4KSc7XG4gICAgdGhpcy53YXZlQ29udGFpbmVyLnN0eWxlLnRyYW5zZm9ybSA9XG4gICAgICAgICd0cmFuc2xhdGUzZCgnICsgZHggKyAncHgsICcgKyBkeSArICdweCwgMCknO1xuICAgIHRoaXMud2F2ZS5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnc2NhbGUoJyArIHNjYWxlICsgJywnICsgc2NhbGUgKyAnKSc7XG4gICAgdGhpcy53YXZlLnN0eWxlLnRyYW5zZm9ybSA9ICdzY2FsZTNkKCcgKyBzY2FsZSArICcsJyArIHNjYWxlICsgJywxKSc7XG4gIH0sXG5cbiAgLyoqIEBwYXJhbSB7RXZlbnQ9fSBldmVudCAqL1xuICBkb3duQWN0aW9uOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciB4Q2VudGVyID0gdGhpcy5jb250YWluZXJNZXRyaWNzLndpZHRoIC8gMjtcbiAgICB2YXIgeUNlbnRlciA9IHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLyAyO1xuXG4gICAgdGhpcy5yZXNldEludGVyYWN0aW9uU3RhdGUoKTtcbiAgICB0aGlzLm1vdXNlRG93blN0YXJ0ID0gVXRpbGl0eS5ub3coKTtcblxuICAgIGlmICh0aGlzLmNlbnRlcikge1xuICAgICAgdGhpcy54U3RhcnQgPSB4Q2VudGVyO1xuICAgICAgdGhpcy55U3RhcnQgPSB5Q2VudGVyO1xuICAgICAgdGhpcy5zbGlkZURpc3RhbmNlID1cbiAgICAgICAgICBVdGlsaXR5LmRpc3RhbmNlKHRoaXMueFN0YXJ0LCB0aGlzLnlTdGFydCwgdGhpcy54RW5kLCB0aGlzLnlFbmQpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnhTdGFydCA9IGV2ZW50ID9cbiAgICAgICAgICBldmVudC5kZXRhaWwueCAtIHRoaXMuY29udGFpbmVyTWV0cmljcy5ib3VuZGluZ1JlY3QubGVmdCA6XG4gICAgICAgICAgdGhpcy5jb250YWluZXJNZXRyaWNzLndpZHRoIC8gMjtcbiAgICAgIHRoaXMueVN0YXJ0ID0gZXZlbnQgP1xuICAgICAgICAgIGV2ZW50LmRldGFpbC55IC0gdGhpcy5jb250YWluZXJNZXRyaWNzLmJvdW5kaW5nUmVjdC50b3AgOlxuICAgICAgICAgIHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLyAyO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnJlY2VudGVycykge1xuICAgICAgdGhpcy54RW5kID0geENlbnRlcjtcbiAgICAgIHRoaXMueUVuZCA9IHlDZW50ZXI7XG4gICAgICB0aGlzLnNsaWRlRGlzdGFuY2UgPVxuICAgICAgICAgIFV0aWxpdHkuZGlzdGFuY2UodGhpcy54U3RhcnQsIHRoaXMueVN0YXJ0LCB0aGlzLnhFbmQsIHRoaXMueUVuZCk7XG4gICAgfVxuXG4gICAgdGhpcy5tYXhSYWRpdXMgPSB0aGlzLmNvbnRhaW5lck1ldHJpY3MuZnVydGhlc3RDb3JuZXJEaXN0YW5jZUZyb20oXG4gICAgICAgIHRoaXMueFN0YXJ0LCB0aGlzLnlTdGFydCk7XG5cbiAgICB0aGlzLndhdmVDb250YWluZXIuc3R5bGUudG9wID1cbiAgICAgICAgKHRoaXMuY29udGFpbmVyTWV0cmljcy5oZWlnaHQgLSB0aGlzLmNvbnRhaW5lck1ldHJpY3Muc2l6ZSkgLyAyICsgJ3B4JztcbiAgICB0aGlzLndhdmVDb250YWluZXIuc3R5bGUubGVmdCA9XG4gICAgICAgICh0aGlzLmNvbnRhaW5lck1ldHJpY3Mud2lkdGggLSB0aGlzLmNvbnRhaW5lck1ldHJpY3Muc2l6ZSkgLyAyICsgJ3B4JztcblxuICAgIHRoaXMud2F2ZUNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHRoaXMuY29udGFpbmVyTWV0cmljcy5zaXplICsgJ3B4JztcbiAgICB0aGlzLndhdmVDb250YWluZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5jb250YWluZXJNZXRyaWNzLnNpemUgKyAncHgnO1xuICB9LFxuXG4gIC8qKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnQgKi9cbiAgdXBBY3Rpb246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlzTW91c2VEb3duKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5tb3VzZVVwU3RhcnQgPSBVdGlsaXR5Lm5vdygpO1xuICB9LFxuXG4gIHJlbW92ZTogZnVuY3Rpb24oKSB7XG4gICAgZG9tKHRoaXMud2F2ZUNvbnRhaW5lci5wYXJlbnROb2RlKS5yZW1vdmVDaGlsZCh0aGlzLndhdmVDb250YWluZXIpO1xuICB9XG59O1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjogW1N1cmZhY2VcbnJlYWN0aW9uXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2FuaW1hdGlvbi9yZXNwb25zaXZlLWludGVyYWN0aW9uLmh0bWwjcmVzcG9uc2l2ZS1pbnRlcmFjdGlvbi1zdXJmYWNlLXJlYWN0aW9uKVxuXG5gcGFwZXItcmlwcGxlYCBwcm92aWRlcyBhIHZpc3VhbCBlZmZlY3QgdGhhdCBvdGhlciBwYXBlciBlbGVtZW50cyBjYW5cbnVzZSB0byBzaW11bGF0ZSBhIHJpcHBsaW5nIGVmZmVjdCBlbWFuYXRpbmcgZnJvbSB0aGUgcG9pbnQgb2YgY29udGFjdC4gIFRoZVxuZWZmZWN0IGNhbiBiZSB2aXN1YWxpemVkIGFzIGEgY29uY2VudHJpYyBjaXJjbGUgd2l0aCBtb3Rpb24uXG5cbkV4YW1wbGU6XG5cbiAgICA8ZGl2IHN0eWxlPVwicG9zaXRpb246cmVsYXRpdmVcIj5cbiAgICAgIDxwYXBlci1yaXBwbGU+PC9wYXBlci1yaXBwbGU+XG4gICAgPC9kaXY+XG5cbk5vdGUsIGl0J3MgaW1wb3J0YW50IHRoYXQgdGhlIHBhcmVudCBjb250YWluZXIgb2YgdGhlIHJpcHBsZSBiZSByZWxhdGl2ZVxucG9zaXRpb24sIG90aGVyd2lzZSB0aGUgcmlwcGxlIHdpbGwgZW1hbmF0ZSBvdXRzaWRlIG9mIHRoZSBkZXNpcmVkIGNvbnRhaW5lci5cblxuYHBhcGVyLXJpcHBsZWAgbGlzdGVucyB0byBcIm1vdXNlZG93blwiIGFuZCBcIm1vdXNldXBcIiBldmVudHMgc28gaXQgd291bGQgZGlzcGxheVxucmlwcGxlIGVmZmVjdCB3aGVuIHRvdWNoZXMgb24gaXQuICBZb3UgY2FuIGFsc28gZGVmZWF0IHRoZSBkZWZhdWx0IGJlaGF2aW9yIGFuZFxubWFudWFsbHkgcm91dGUgdGhlIGRvd24gYW5kIHVwIGFjdGlvbnMgdG8gdGhlIHJpcHBsZSBlbGVtZW50LiAgTm90ZSB0aGF0IGl0IGlzXG5pbXBvcnRhbnQgaWYgeW91IGNhbGwgYGRvd25BY3Rpb24oKWAgeW91IHdpbGwgaGF2ZSB0byBtYWtlIHN1cmUgdG8gY2FsbFxuYHVwQWN0aW9uKClgIHNvIHRoYXQgYHBhcGVyLXJpcHBsZWAgd291bGQgZW5kIHRoZSBhbmltYXRpb24gbG9vcC5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1yaXBwbGUgaWQ9XCJyaXBwbGVcIiBzdHlsZT1cInBvaW50ZXItZXZlbnRzOiBub25lO1wiPjwvcGFwZXItcmlwcGxlPlxuICAgIC4uLlxuICAgIGRvd25BY3Rpb246IGZ1bmN0aW9uKGUpIHtcbiAgICAgIHRoaXMuJC5yaXBwbGUuZG93bkFjdGlvbihlLmRldGFpbCk7XG4gICAgfSxcbiAgICB1cEFjdGlvbjogZnVuY3Rpb24oZSkge1xuICAgICAgdGhpcy4kLnJpcHBsZS51cEFjdGlvbigpO1xuICAgIH1cblxuU3R5bGluZyByaXBwbGUgZWZmZWN0OlxuXG4gIFVzZSBDU1MgY29sb3IgcHJvcGVydHkgdG8gc3R5bGUgdGhlIHJpcHBsZTpcblxuICAgIHBhcGVyLXJpcHBsZSB7XG4gICAgICBjb2xvcjogIzQyODVmNDtcbiAgICB9XG5cbiAgTm90ZSB0aGF0IENTUyBjb2xvciBwcm9wZXJ0eSBpcyBpbmhlcml0ZWQgc28gaXQgaXMgbm90IHJlcXVpcmVkIHRvIHNldCBpdCBvblxuICB0aGUgYHBhcGVyLXJpcHBsZWAgZWxlbWVudCBkaXJlY3RseS5cblxuQnkgZGVmYXVsdCwgdGhlIHJpcHBsZSBpcyBjZW50ZXJlZCBvbiB0aGUgcG9pbnQgb2YgY29udGFjdC4gIEFwcGx5IHRoZVxuYHJlY2VudGVyc2AgYXR0cmlidXRlIHRvIGhhdmUgdGhlIHJpcHBsZSBncm93IHRvd2FyZCB0aGUgY2VudGVyIG9mIGl0c1xuY29udGFpbmVyLlxuXG4gICAgPHBhcGVyLXJpcHBsZSByZWNlbnRlcnM+PC9wYXBlci1yaXBwbGU+XG5cbllvdSBjYW4gYWxzbyAgY2VudGVyIHRoZSByaXBwbGUgaW5zaWRlIGl0cyBjb250YWluZXIgZnJvbSB0aGUgc3RhcnQuXG5cbiAgICA8cGFwZXItcmlwcGxlIGNlbnRlcj48L3BhcGVyLXJpcHBsZT5cblxuQXBwbHkgYGNpcmNsZWAgY2xhc3MgdG8gbWFrZSB0aGUgcmlwcGxpbmcgZWZmZWN0IHdpdGhpbiBhIGNpcmNsZS5cblxuICAgIDxwYXBlci1yaXBwbGUgY2xhc3M9XCJjaXJjbGVcIj48L3BhcGVyLXJpcHBsZT5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1yaXBwbGVcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogaW5oZXJpdDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuXG4gICAgICAgIC8qIFNlZSBQb2x5bWVyRWxlbWVudHMvcGFwZXItYmVoYXZpb3JzL2lzc3Vlcy8zNC4gT24gbm9uLUNocm9tZSBicm93c2VycyxcbiAgICAgICAgICogY3JlYXRpbmcgYSBub2RlICh3aXRoIGEgcG9zaXRpb246YWJzb2x1dGUpIGluIHRoZSBtaWRkbGUgb2YgYW4gZXZlbnRcbiAgICAgICAgICogaGFuZGxlciBcImludGVycnVwdHNcIiB0aGF0IGV2ZW50IGhhbmRsZXIgKHdoaWNoIGhhcHBlbnMgd2hlbiB0aGVcbiAgICAgICAgICogcmlwcGxlIGlzIGNyZWF0ZWQgb24gZGVtYW5kKSAqL1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2FuaW1hdGluZ10pIHtcbiAgICAgICAgLyogVGhpcyByZXNvbHZlcyBhIHJlbmRlcmluZyBpc3N1ZSBpbiBDaHJvbWUgKGFzIG9mIDQwKSB3aGVyZSB0aGVcbiAgICAgICAgICAgcmlwcGxlIGlzIG5vdCBwcm9wZXJseSBjbGlwcGVkIGJ5IGl0cyBwYXJlbnQgKHdoaWNoIG1heSBoYXZlXG4gICAgICAgICAgIHJvdW5kZWQgY29ybmVycykuIFNlZTogaHR0cDovL2pzYmluLmNvbS90ZW1leGEvNFxuXG4gICAgICAgICAgIE5vdGU6IFdlIG9ubHkgYXBwbHkgdGhpcyBzdHlsZSBjb25kaXRpb25hbGx5LiBPdGhlcndpc2UsIHRoZSBicm93c2VyXG4gICAgICAgICAgIHdpbGwgY3JlYXRlIGEgbmV3IGNvbXBvc2l0aW5nIGxheWVyIGZvciBldmVyeSByaXBwbGUgZWxlbWVudCBvbiB0aGVcbiAgICAgICAgICAgcGFnZSwgYW5kIHRoYXQgd291bGQgYmUgYmFkLiAqL1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICAjYmFja2dyb3VuZCxcbiAgICAgICN3YXZlcyxcbiAgICAgIC53YXZlLWNvbnRhaW5lcixcbiAgICAgIC53YXZlIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICAjYmFja2dyb3VuZCxcbiAgICAgIC53YXZlIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgI3dhdmVzLFxuICAgICAgLndhdmUge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAud2F2ZS1jb250YWluZXIsXG4gICAgICAud2F2ZSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmNpcmNsZSkgI2JhY2tncm91bmQsXG4gICAgICA6aG9zdCguY2lyY2xlKSAjd2F2ZXMge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jaXJjbGUpIC53YXZlLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJiYWNrZ3JvdW5kXCI+PC9kaXY+XG4gICAgPGRpdiBpZD1cIndhdmVzXCI+PC9kaXY+XG5gLFxuXG4gIGlzOiAncGFwZXItcmlwcGxlJyxcbiAgYmVoYXZpb3JzOiBbSXJvbkExMXlLZXlzQmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBvcGFjaXR5IHNldCBvbiB0aGUgd2F2ZS5cbiAgICAgKlxuICAgICAqIEBhdHRyaWJ1dGUgaW5pdGlhbE9wYWNpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjI1XG4gICAgICovXG4gICAgaW5pdGlhbE9wYWNpdHk6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwLjI1fSxcblxuICAgIC8qKlxuICAgICAqIEhvdyBmYXN0IChvcGFjaXR5IHBlciBzZWNvbmQpIHRoZSB3YXZlIGZhZGVzIG91dC5cbiAgICAgKlxuICAgICAqIEBhdHRyaWJ1dGUgb3BhY2l0eURlY2F5VmVsb2NpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjhcbiAgICAgKi9cbiAgICBvcGFjaXR5RGVjYXlWZWxvY2l0eToge3R5cGU6IE51bWJlciwgdmFsdWU6IDAuOH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByaXBwbGVzIHdpbGwgZXhoaWJpdCBhIGdyYXZpdGF0aW9uYWwgcHVsbCB0b3dhcmRzXG4gICAgICogdGhlIGNlbnRlciBvZiB0aGVpciBjb250YWluZXIgYXMgdGhleSBmYWRlIGF3YXkuXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIHJlY2VudGVyc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIHJlY2VudGVyczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCByaXBwbGVzIHdpbGwgY2VudGVyIGluc2lkZSBpdHMgY29udGFpbmVyXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIHJlY2VudGVyc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuICAgIGNlbnRlcjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBBIGxpc3Qgb2YgdGhlIHZpc3VhbCByaXBwbGVzLlxuICAgICAqXG4gICAgICogQGF0dHJpYnV0ZSByaXBwbGVzXG4gICAgICogQHR5cGUgQXJyYXlcbiAgICAgKiBAZGVmYXVsdCBbXVxuICAgICAqL1xuICAgIHJpcHBsZXM6IHtcbiAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgd2hlbiB0aGVyZSBhcmUgdmlzaWJsZSByaXBwbGVzIGFuaW1hdGluZyB3aXRoaW4gdGhlXG4gICAgICogZWxlbWVudC5cbiAgICAgKi9cbiAgICBhbmltYXRpbmc6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCByZWFkT25seTogdHJ1ZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIHJpcHBsZSB3aWxsIHJlbWFpbiBpbiB0aGUgXCJkb3duXCIgc3RhdGUgdW50aWwgYGhvbGREb3duYFxuICAgICAqIGlzIHNldCB0byBmYWxzZSBhZ2Fpbi5cbiAgICAgKi9cbiAgICBob2xkRG93bjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgb2JzZXJ2ZXI6ICdfaG9sZERvd25DaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgcmlwcGxlIHdpbGwgbm90IGdlbmVyYXRlIGEgcmlwcGxlIGVmZmVjdFxuICAgICAqIHZpYSBwb2ludGVyIGludGVyYWN0aW9uLlxuICAgICAqIENhbGxpbmcgcmlwcGxlJ3MgaW1wZXJhdGl2ZSBhcGkgbGlrZSBgc2ltdWxhdGVkUmlwcGxlYCB3aWxsXG4gICAgICogc3RpbGwgZ2VuZXJhdGUgdGhlIHJpcHBsZSBlZmZlY3QuXG4gICAgICovXG4gICAgbm9pbms6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgX2FuaW1hdGluZzoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgX2JvdW5kQW5pbWF0ZToge1xuICAgICAgdHlwZTogRnVuY3Rpb24sXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFuaW1hdGUuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICByZXR1cm4gdGhpcy5rZXlFdmVudFRhcmdldDtcbiAgfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczoge1xuICAgICdlbnRlcjprZXlkb3duJzogJ19vbkVudGVyS2V5ZG93bicsXG4gICAgJ3NwYWNlOmtleWRvd24nOiAnX29uU3BhY2VLZXlkb3duJyxcbiAgICAnc3BhY2U6a2V5dXAnOiAnX29uU3BhY2VLZXl1cCdcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gU2V0IHVwIGExMXlLZXlzQmVoYXZpb3IgdG8gbGlzdGVuIHRvIGtleSBldmVudHMgb24gdGhlIHRhcmdldCxcbiAgICAvLyBzbyB0aGF0IHNwYWNlIGFuZCBlbnRlciBhY3RpdmF0ZSB0aGUgcmlwcGxlIGV2ZW4gaWYgdGhlIHRhcmdldCBkb2Vzbid0XG4gICAgLy8gaGFuZGxlIGtleSBldmVudHMuIFRoZSBrZXkgaGFuZGxlcnMgZGVhbCB3aXRoIGBub2lua2AgdGhlbXNlbHZlcy5cbiAgICBpZiAodGhpcy5wYXJlbnROb2RlLm5vZGVUeXBlID09IDExKSB7ICAvLyBET0NVTUVOVF9GUkFHTUVOVF9OT0RFXG4gICAgICB0aGlzLmtleUV2ZW50VGFyZ2V0ID0gZG9tKHRoaXMpLmdldE93bmVyUm9vdCgpLmhvc3Q7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMua2V5RXZlbnRUYXJnZXQgPSB0aGlzLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHZhciBrZXlFdmVudFRhcmdldCA9IC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAodGhpcy5rZXlFdmVudFRhcmdldCk7XG4gICAgdGhpcy5saXN0ZW4oa2V5RXZlbnRUYXJnZXQsICd1cCcsICd1aVVwQWN0aW9uJyk7XG4gICAgdGhpcy5saXN0ZW4oa2V5RXZlbnRUYXJnZXQsICdkb3duJywgJ3VpRG93bkFjdGlvbicpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVubGlzdGVuKHRoaXMua2V5RXZlbnRUYXJnZXQsICd1cCcsICd1aVVwQWN0aW9uJyk7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLmtleUV2ZW50VGFyZ2V0LCAnZG93bicsICd1aURvd25BY3Rpb24nKTtcbiAgICB0aGlzLmtleUV2ZW50VGFyZ2V0ID0gbnVsbDtcbiAgfSxcblxuICBnZXQgc2hvdWxkS2VlcEFuaW1hdGluZygpIHtcbiAgICBmb3IgKHZhciBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5yaXBwbGVzLmxlbmd0aDsgKytpbmRleCkge1xuICAgICAgaWYgKCF0aGlzLnJpcHBsZXNbaW5kZXhdLmlzQW5pbWF0aW9uQ29tcGxldGUpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIHNpbXVsYXRlZFJpcHBsZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5kb3duQWN0aW9uKG51bGwpO1xuXG4gICAgLy8gUGxlYXNlIHNlZSBwb2x5bWVyL3BvbHltZXIjMTMwNVxuICAgIHRoaXMuYXN5bmMoZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLnVwQWN0aW9uKCk7XG4gICAgfSwgMSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFByb3Zva2VzIGEgcmlwcGxlIGRvd24gZWZmZWN0IHZpYSBhIFVJIGV2ZW50LFxuICAgKiByZXNwZWN0aW5nIHRoZSBgbm9pbmtgIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcbiAgICovXG4gIHVpRG93bkFjdGlvbjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMubm9pbmspIHtcbiAgICAgIHRoaXMuZG93bkFjdGlvbihldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBQcm92b2tlcyBhIHJpcHBsZSBkb3duIGVmZmVjdCB2aWEgYSBVSSBldmVudCxcbiAgICogKm5vdCogcmVzcGVjdGluZyB0aGUgYG5vaW5rYCBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG4gICAqL1xuICBkb3duQWN0aW9uOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLmhvbGREb3duICYmIHRoaXMucmlwcGxlcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHJpcHBsZSA9IHRoaXMuYWRkUmlwcGxlKCk7XG5cbiAgICByaXBwbGUuZG93bkFjdGlvbihldmVudCk7XG5cbiAgICBpZiAoIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgdGhpcy5fYW5pbWF0aW5nID0gdHJ1ZTtcbiAgICAgIHRoaXMuYW5pbWF0ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUHJvdm9rZXMgYSByaXBwbGUgdXAgZWZmZWN0IHZpYSBhIFVJIGV2ZW50LFxuICAgKiByZXNwZWN0aW5nIHRoZSBgbm9pbmtgIHByb3BlcnR5LlxuICAgKiBAcGFyYW0ge0V2ZW50PX0gZXZlbnRcbiAgICovXG4gIHVpVXBBY3Rpb246IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5vaW5rKSB7XG4gICAgICB0aGlzLnVwQWN0aW9uKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFByb3Zva2VzIGEgcmlwcGxlIHVwIGVmZmVjdCB2aWEgYSBVSSBldmVudCxcbiAgICogKm5vdCogcmVzcGVjdGluZyB0aGUgYG5vaW5rYCBwcm9wZXJ0eS5cbiAgICogQHBhcmFtIHtFdmVudD19IGV2ZW50XG4gICAqL1xuICB1cEFjdGlvbjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5ob2xkRG93bikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMucmlwcGxlcy5mb3JFYWNoKGZ1bmN0aW9uKHJpcHBsZSkge1xuICAgICAgcmlwcGxlLnVwQWN0aW9uKGV2ZW50KTtcbiAgICB9KTtcblxuICAgIHRoaXMuX2FuaW1hdGluZyA9IHRydWU7XG4gICAgdGhpcy5hbmltYXRlKCk7XG4gIH0sXG5cbiAgb25BbmltYXRpb25Db21wbGV0ZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYW5pbWF0aW5nID0gZmFsc2U7XG4gICAgdGhpcy4kLmJhY2tncm91bmQuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gbnVsbDtcbiAgICB0aGlzLmZpcmUoJ3RyYW5zaXRpb25lbmQnKTtcbiAgfSxcblxuICBhZGRSaXBwbGU6IGZ1bmN0aW9uKCkge1xuICAgIHZhciByaXBwbGUgPSBuZXcgUmlwcGxlKHRoaXMpO1xuXG4gICAgZG9tKHRoaXMuJC53YXZlcykuYXBwZW5kQ2hpbGQocmlwcGxlLndhdmVDb250YWluZXIpO1xuICAgIHRoaXMuJC5iYWNrZ3JvdW5kLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IHJpcHBsZS5jb2xvcjtcbiAgICB0aGlzLnJpcHBsZXMucHVzaChyaXBwbGUpO1xuXG4gICAgdGhpcy5fc2V0QW5pbWF0aW5nKHRydWUpO1xuXG4gICAgcmV0dXJuIHJpcHBsZTtcbiAgfSxcblxuICByZW1vdmVSaXBwbGU6IGZ1bmN0aW9uKHJpcHBsZSkge1xuICAgIHZhciByaXBwbGVJbmRleCA9IHRoaXMucmlwcGxlcy5pbmRleE9mKHJpcHBsZSk7XG5cbiAgICBpZiAocmlwcGxlSW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yaXBwbGVzLnNwbGljZShyaXBwbGVJbmRleCwgMSk7XG5cbiAgICByaXBwbGUucmVtb3ZlKCk7XG5cbiAgICBpZiAoIXRoaXMucmlwcGxlcy5sZW5ndGgpIHtcbiAgICAgIHRoaXMuX3NldEFuaW1hdGluZyhmYWxzZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBEZXByZWNhdGVkLiBQbGVhc2UgdXNlIGFuaW1hdGVSaXBwbGUoKSBpbnN0ZWFkLlxuICAgKlxuICAgKiBUaGlzIG1ldGhvZCBuYW1lIGNvbmZsaWN0cyB3aXRoIEVsZW1lbnQjYW5pbWF0ZSgpLlxuICAgKiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvRWxlbWVudC9hbmltYXRlLlxuICAgKlxuICAgKiBAc3VwcHJlc3Mge2NoZWNrVHlwZXN9XG4gICAqL1xuICBhbmltYXRlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX2FuaW1hdGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgaW5kZXg7XG4gICAgdmFyIHJpcHBsZTtcblxuICAgIGZvciAoaW5kZXggPSAwOyBpbmRleCA8IHRoaXMucmlwcGxlcy5sZW5ndGg7ICsraW5kZXgpIHtcbiAgICAgIHJpcHBsZSA9IHRoaXMucmlwcGxlc1tpbmRleF07XG5cbiAgICAgIHJpcHBsZS5kcmF3KCk7XG5cbiAgICAgIHRoaXMuJC5iYWNrZ3JvdW5kLnN0eWxlLm9wYWNpdHkgPSByaXBwbGUub3V0ZXJPcGFjaXR5O1xuXG4gICAgICBpZiAocmlwcGxlLmlzT3BhY2l0eUZ1bGx5RGVjYXllZCAmJiAhcmlwcGxlLmlzUmVzdGluZ0F0TWF4UmFkaXVzKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlUmlwcGxlKHJpcHBsZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLnNob3VsZEtlZXBBbmltYXRpbmcgJiYgdGhpcy5yaXBwbGVzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgdGhpcy5vbkFuaW1hdGlvbkNvbXBsZXRlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy5fYm91bmRBbmltYXRlKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFuIGFsaWFzIGZvciBhbmltYXRlKCkgd2hvc2UgbmFtZSBkb2VzIG5vdCBjb25mbGljdCB3aXRoIHRoZSBwbGF0Zm9ybVxuICAgKiBFbGVtZW50LmFuaW1hdGUoKSBtZXRob2QuXG4gICAqL1xuICBhbmltYXRlUmlwcGxlOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5hbmltYXRlKCk7XG4gIH0sXG5cbiAgX29uRW50ZXJLZXlkb3duOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnVpRG93bkFjdGlvbigpO1xuICAgIHRoaXMuYXN5bmModGhpcy51aVVwQWN0aW9uLCAxKTtcbiAgfSxcblxuICBfb25TcGFjZUtleWRvd246IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudWlEb3duQWN0aW9uKCk7XG4gIH0sXG5cbiAgX29uU3BhY2VLZXl1cDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy51aVVwQWN0aW9uKCk7XG4gIH0sXG5cbiAgLy8gbm90ZTogaG9sZERvd24gZG9lcyBub3QgcmVzcGVjdCBub2luayBzaW5jZSBpdCBjYW4gYmUgYSBmb2N1cyBiYXNlZFxuICAvLyBlZmZlY3QuXG4gIF9ob2xkRG93bkNoYW5nZWQ6IGZ1bmN0aW9uKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgaWYgKG9sZFZhbCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChuZXdWYWwpIHtcbiAgICAgIHRoaXMuZG93bkFjdGlvbigpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnVwQWN0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gIEZpcmVkIHdoZW4gdGhlIGFuaW1hdGlvbiBmaW5pc2hlcy5cbiAgVGhpcyBpcyB1c2VmdWwgaWYgeW91IHdhbnQgdG8gd2FpdCB1bnRpbFxuICB0aGUgcmlwcGxlIGFuaW1hdGlvbiBmaW5pc2hlcyB0byBwZXJmb3JtIHNvbWUgYWN0aW9uLlxuXG4gIEBldmVudCB0cmFuc2l0aW9uZW5kXG4gIEBwYXJhbSB7e25vZGU6IE9iamVjdH19IGRldGFpbCBDb250YWlucyB0aGUgYW5pbWF0ZWQgbm9kZS5cbiAgKi9cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUNBO0FBT0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUExQ0E7QUFpREE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMUxBO0FBOExBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7O0FDbk5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBUkE7QUFhQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQVpBO0FBZUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWxOQTtBQXFOQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBeUVBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBM0VBO0FBQ0E7QUFrRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBclhBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=