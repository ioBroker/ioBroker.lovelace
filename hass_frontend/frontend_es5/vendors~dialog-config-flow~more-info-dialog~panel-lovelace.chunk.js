(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dialog-config-flow~more-info-dialog~panel-lovelace"],{

/***/ "./node_modules/@polymer/iron-dropdown/iron-dropdown.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/iron-dropdown/iron-dropdown.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/neon-animation/neon-animation-runner-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n      }\n\n      #contentWrapper ::slotted(*) {\n        overflow: auto;\n      }\n\n      #contentWrapper.animating ::slotted(*) {\n        overflow: hidden;\n        pointer-events: none;\n      }\n    </style>\n\n    <div id=\"contentWrapper\">\n      <slot id=\"content\" name=\"dropdown-content\"></slot>\n    </div>\n"]);

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








/**
`<iron-dropdown>` is a generalized element that is useful when you have
hidden content (`dropdown-content`) that is revealed due to some change in
state that should cause it to do so.

Note that this is a low-level element intended to be used as part of other
composite elements that cause dropdowns to be revealed.

Examples of elements that might be implemented using an `iron-dropdown`
include comboboxes, menubuttons, selects. The list goes on.

The `<iron-dropdown>` element exposes attributes that allow the position
of the `dropdown-content` relative to the `dropdown-trigger` to be
configured.

    <iron-dropdown horizontal-align="right" vertical-align="top">
      <div slot="dropdown-content">Hello!</div>
    </iron-dropdown>

In the above example, the `<div>` assigned to the `dropdown-content` slot will
be hidden until the dropdown element has `opened` set to true, or when the
`open` method is called on the element.

@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject()),
  is: 'iron-dropdown',
  behaviors: [_polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronA11yKeysBehavior"], _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehavior"], _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_4__["NeonAnimationRunnerBehavior"]],
  properties: {
    /**
     * The orientation against which to align the dropdown content
     * horizontally relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    horizontalAlign: {
      type: String,
      value: 'left',
      reflectToAttribute: true
    },

    /**
     * The orientation against which to align the dropdown content
     * vertically relative to the dropdown trigger.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    verticalAlign: {
      type: String,
      value: 'top',
      reflectToAttribute: true
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    openAnimationConfig: {
      type: Object
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown. Pass an Array for multiple animations.
     * See `neon-animation` documentation for more animation configuration
     * details.
     */
    closeAnimationConfig: {
      type: Object
    },

    /**
     * If provided, this will be the element that will be focused when
     * the dropdown opens.
     */
    focusTarget: {
      type: Object
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
     * By default, the dropdown will constrain scrolling on the page
     * to itself when opened.
     * Set to true in order to prevent scroll from being constrained
     * to the dropdown when it opens.
     * This property is a shortcut to set `scrollAction` to lock or refit.
     * Prefer directly setting the `scrollAction` property.
     */
    allowOutsideScroll: {
      type: Boolean,
      value: false,
      observer: '_allowOutsideScrollChanged'
    }
  },
  listeners: {
    'neon-animation-finish': '_onNeonAnimationFinish'
  },
  observers: ['_updateOverlayPosition(positionTarget, verticalAlign, horizontalAlign, verticalOffset, horizontalOffset)'],

  /**
   * The element that is contained by the dropdown, if any.
   */
  get containedElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  ready: function ready() {
    // Ensure scrollAction is set.
    if (!this.scrollAction) {
      this.scrollAction = this.allowOutsideScroll ? 'refit' : 'lock';
    }

    this._readied = true;
  },
  attached: function attached() {
    if (!this.sizingTarget || this.sizingTarget === this) {
      this.sizingTarget = this.containedElement || this;
    }
  },
  detached: function detached() {
    this.cancelAnimation();
  },

  /**
   * Called when the value of `opened` changes.
   * Overridden from `IronOverlayBehavior`
   */
  _openedChanged: function _openedChanged() {
    if (this.opened && this.disabled) {
      this.cancel();
    } else {
      this.cancelAnimation();

      this._updateAnimationConfig();

      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._openedChanged.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderOpened: function _renderOpened() {
    if (!this.noAnimations && this.animationConfig.open) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('open');
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._renderOpened.apply(this, arguments);
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderClosed: function _renderClosed() {
    if (!this.noAnimations && this.animationConfig.close) {
      this.$.contentWrapper.classList.add('animating');
      this.playAnimation('close');
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._renderClosed.apply(this, arguments);
    }
  },

  /**
   * Called when animation finishes on the dropdown (when opening or
   * closing). Responsible for "completing" the process of opening or
   * closing the dropdown by positioning it or setting its display to
   * none.
   */
  _onNeonAnimationFinish: function _onNeonAnimationFinish() {
    this.$.contentWrapper.classList.remove('animating');

    if (this.opened) {
      this._finishRenderOpened();
    } else {
      this._finishRenderClosed();
    }
  },

  /**
   * Constructs the final animation config from different properties used
   * to configure specific parts of the opening and closing animations.
   */
  _updateAnimationConfig: function _updateAnimationConfig() {
    // Update the animation node to be the containedElement.
    var animationNode = this.containedElement;
    var animations = [].concat(this.openAnimationConfig || []).concat(this.closeAnimationConfig || []);

    for (var i = 0; i < animations.length; i++) {
      animations[i].node = animationNode;
    }

    this.animationConfig = {
      open: this.openAnimationConfig,
      close: this.closeAnimationConfig
    };
  },

  /**
   * Updates the overlay position based on configured horizontal
   * and vertical alignment.
   */
  _updateOverlayPosition: function _updateOverlayPosition() {
    if (this.isAttached) {
      // This triggers iron-resize, and iron-overlay-behavior will call refit if
      // needed.
      this.notifyResize();
    }
  },

  /**
   * Sets scrollAction according to the value of allowOutsideScroll.
   * Prefer setting directly scrollAction.
   */
  _allowOutsideScrollChanged: function _allowOutsideScrollChanged(allowOutsideScroll) {
    // Wait until initial values are all set.
    if (!this._readied) {
      return;
    }

    if (!allowOutsideScroll) {
      this.scrollAction = 'lock';
    } else if (!this.scrollAction || this.scrollAction === 'lock') {
      this.scrollAction = 'refit';
    }
  },

  /**
   * Apply focus to focusTarget or containedElement
   */
  _applyFocus: function _applyFocus() {
    var focusTarget = this.focusTarget || this.containedElement;

    if (focusTarget && this.opened && !this.noAutoFocus) {
      focusTarget.focus();
    } else {
      _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronOverlayBehaviorImpl"]._applyFocus.apply(this, arguments);
    }
  }
});

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

var IronRangeBehavior = {
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
  _calcRatio: function _calcRatio(value) {
    return (this._clampValue(value) - this.min) / (this.max - this.min);
  },
  _clampValue: function _clampValue(value) {
    return Math.min(this.max, Math.max(this.min, this._calcStep(value)));
  },
  _calcStep: function _calcStep(value) {
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
  _validateValue: function _validateValue() {
    var v = this._clampValue(this.value);

    this.value = this.oldValue = isNaN(v) ? this.oldValue : v;
    return this.value !== v;
  },
  _update: function _update() {
    this._validateValue();

    this._setRatio(this._calcRatio(this.value) * 100);
  }
};

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/animations/fade-in-animation.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/animations/fade-in-animation.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-animation-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js");
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



/*
`<fade-in-animation>` animates the opacity of an element from 0 to 1.

Configuration:
```
{
  name: 'fade-in-animation',
  node: <node>
  timing: <animation-timing>
}
```
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'fade-in-animation',
  behaviors: [_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__["NeonAnimationBehavior"]],
  configure: function configure(config) {
    var node = config.node;
    this._effect = new KeyframeEffect(node, [{
      'opacity': '0'
    }, {
      'opacity': '1'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/animations/fade-out-animation.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/animations/fade-out-animation.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../neon-animation-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js");
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



/*
`<fade-out-animation>` animates the opacity of an element from 1 to 0.

Configuration:
```
{
  name: 'fade-out-animation',
  node: <node>
  timing: <animation-timing>
}
```
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'fade-out-animation',
  behaviors: [_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_2__["NeonAnimationBehavior"]],
  configure: function configure(config) {
    var node = config.node;
    this._effect = new KeyframeEffect(node, [{
      'opacity': '1'
    }, {
      'opacity': '0'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animatable-behavior.js ***!
  \**************************************************************************/
/*! exports provided: NeonAnimatableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimatableBehavior", function() { return NeonAnimatableBehavior; });
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
 * `NeonAnimatableBehavior` is implemented by elements containing
 * animations for use with elements implementing
 * `NeonAnimationRunnerBehavior`.
 * @polymerBehavior
 */

var NeonAnimatableBehavior = {
  properties: {
    /**
     * Animation configuration. See README for more info.
     */
    animationConfig: {
      type: Object
    },

    /**
     * Convenience property for setting an 'entry' animation. Do not set
     * `animationConfig.entry` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    entryAnimation: {
      observer: '_entryAnimationChanged',
      type: String
    },

    /**
     * Convenience property for setting an 'exit' animation. Do not set
     * `animationConfig.exit` manually if using this. The animated node is set
     * to `this` if using this property.
     */
    exitAnimation: {
      observer: '_exitAnimationChanged',
      type: String
    }
  },
  _entryAnimationChanged: function _entryAnimationChanged() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['entry'] = [{
      name: this.entryAnimation,
      node: this
    }];
  },
  _exitAnimationChanged: function _exitAnimationChanged() {
    this.animationConfig = this.animationConfig || {};
    this.animationConfig['exit'] = [{
      name: this.exitAnimation,
      node: this
    }];
  },
  _copyProperties: function _copyProperties(config1, config2) {
    // shallowly copy properties from config2 to config1
    for (var property in config2) {
      config1[property] = config2[property];
    }
  },
  _cloneConfig: function _cloneConfig(config) {
    var clone = {
      isClone: true
    };

    this._copyProperties(clone, config);

    return clone;
  },
  _getAnimationConfigRecursive: function _getAnimationConfigRecursive(type, map, allConfigs) {
    if (!this.animationConfig) {
      return;
    }

    if (this.animationConfig.value && typeof this.animationConfig.value === 'function') {
      this._warn(this._logf('playAnimation', 'Please put \'animationConfig\' inside of your components \'properties\' object instead of outside of it.'));

      return;
    } // type is optional


    var thisConfig;

    if (type) {
      thisConfig = this.animationConfig[type];
    } else {
      thisConfig = this.animationConfig;
    }

    if (!Array.isArray(thisConfig)) {
      thisConfig = [thisConfig];
    } // iterate animations and recurse to process configurations from child nodes


    if (thisConfig) {
      for (var config, index = 0; config = thisConfig[index]; index++) {
        if (config.animatable) {
          config.animatable._getAnimationConfigRecursive(config.type || type, map, allConfigs);
        } else {
          if (config.id) {
            var cachedConfig = map[config.id];

            if (cachedConfig) {
              // merge configurations with the same id, making a clone lazily
              if (!cachedConfig.isClone) {
                map[config.id] = this._cloneConfig(cachedConfig);
                cachedConfig = map[config.id];
              }

              this._copyProperties(cachedConfig, config);
            } else {
              // put any configs with an id into a map
              map[config.id] = config;
            }
          } else {
            allConfigs.push(config);
          }
        }
      }
    }
  },

  /**
   * An element implementing `NeonAnimationRunnerBehavior` calls this
   * method to configure an animation with an optional type. Elements
   * implementing `NeonAnimatableBehavior` should define the property
   * `animationConfig`, which is either a configuration object or a map of
   * animation type to array of configuration objects.
   */
  getAnimationConfig: function getAnimationConfig(type) {
    var map = {};
    var allConfigs = [];

    this._getAnimationConfigRecursive(type, map, allConfigs); // append the configurations saved in the map to the array


    for (var key in map) {
      allConfigs.push(map[key]);
    }

    return allConfigs;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animation-behavior.js ***!
  \*************************************************************************/
/*! exports provided: NeonAnimationBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationBehavior", function() { return NeonAnimationBehavior; });
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
 * Use `NeonAnimationBehavior` to implement an animation.
 * @polymerBehavior
 */

var NeonAnimationBehavior = {
  properties: {
    /**
     * Defines the animation timing.
     */
    animationTiming: {
      type: Object,
      value: function value() {
        return {
          duration: 500,
          easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
          fill: 'both'
        };
      }
    }
  },

  /**
   * Can be used to determine that elements implement this behavior.
   */
  isNeonAnimation: true,

  /**
   * Do any animation configuration here.
   */
  // configure: function(config) {
  // },
  created: function created() {
    if (!document.body.animate) {
      console.warn('No web animations detected. This element will not' + ' function without a web animations polyfill.');
    }
  },

  /**
   * Returns the animation timing by mixing in properties from `config` to the
   * defaults defined by the animation.
   */
  timingFromConfig: function timingFromConfig(config) {
    if (config.timing) {
      for (var property in config.timing) {
        this.animationTiming[property] = config.timing[property];
      }
    }

    return this.animationTiming;
  },

  /**
   * Sets `transform` and `transformOrigin` properties along with the prefixed
   * versions.
   */
  setPrefixedProperty: function setPrefixedProperty(node, property, value) {
    var map = {
      'transform': ['webkitTransform'],
      'transformOrigin': ['mozTransformOrigin', 'webkitTransformOrigin']
    };
    var prefixes = map[property];

    for (var prefix, index = 0; prefix = prefixes[index]; index++) {
      node.style[prefix] = value;
    }

    node.style[property] = value;
  },

  /**
   * Called when the animation finishes.
   */
  complete: function complete(config) {}
};

/***/ }),

/***/ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js ***!
  \********************************************************************************/
/*! exports provided: NeonAnimationRunnerBehaviorImpl, NeonAnimationRunnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehaviorImpl", function() { return NeonAnimationRunnerBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NeonAnimationRunnerBehavior", function() { return NeonAnimationRunnerBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./neon-animatable-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animatable-behavior.js");
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
 * `NeonAnimationRunnerBehavior` adds a method to run animations.
 *
 * @polymerBehavior NeonAnimationRunnerBehavior
 */

var NeonAnimationRunnerBehaviorImpl = {
  _configureAnimations: function _configureAnimations(configs) {
    var results = [];
    var resultsToPlay = [];

    if (configs.length > 0) {
      for (var config, index = 0; config = configs[index]; index++) {
        var neonAnimation = document.createElement(config.name); // is this element actually a neon animation?

        if (neonAnimation.isNeonAnimation) {
          var result = null; // Closure compiler does not work well with a try / catch here.
          // .configure needs to be explicitly defined

          if (!neonAnimation.configure) {
            /**
             * @param {Object} config
             * @return {AnimationEffectReadOnly}
             */
            neonAnimation.configure = function (config) {
              return null;
            };
          }

          result = neonAnimation.configure(config);
          resultsToPlay.push({
            result: result,
            config: config,
            neonAnimation: neonAnimation
          });
        } else {
          console.warn(this.is + ':', config.name, 'not found!');
        }
      }
    }

    for (var i = 0; i < resultsToPlay.length; i++) {
      var _result = resultsToPlay[i].result;
      var _config = resultsToPlay[i].config;
      var _neonAnimation = resultsToPlay[i].neonAnimation; // configuration or play could fail if polyfills aren't loaded

      try {
        // Check if we have an Effect rather than an Animation
        if (typeof _result.cancel != 'function') {
          _result = document.timeline.play(_result);
        }
      } catch (e) {
        _result = null;
        console.warn('Couldnt play', '(', _config.name, ').', e);
      }

      if (_result) {
        results.push({
          neonAnimation: _neonAnimation,
          config: _config,
          animation: _result
        });
      }
    }

    return results;
  },
  _shouldComplete: function _shouldComplete(activeEntries) {
    var finished = true;

    for (var i = 0; i < activeEntries.length; i++) {
      if (activeEntries[i].animation.playState != 'finished') {
        finished = false;
        break;
      }
    }

    return finished;
  },
  _complete: function _complete(activeEntries) {
    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].neonAnimation.complete(activeEntries[i].config);
    }

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.cancel();
    }
  },

  /**
   * Plays an animation with an optional `type`.
   * @param {string=} type
   * @param {!Object=} cookie
   */
  playAnimation: function playAnimation(type, cookie) {
    var configs = this.getAnimationConfig(type);

    if (!configs) {
      return;
    }

    this._active = this._active || {};

    if (this._active[type]) {
      this._complete(this._active[type]);

      delete this._active[type];
    }

    var activeEntries = this._configureAnimations(configs);

    if (activeEntries.length == 0) {
      this.fire('neon-animation-finish', cookie, {
        bubbles: false
      });
      return;
    }

    this._active[type] = activeEntries;

    for (var i = 0; i < activeEntries.length; i++) {
      activeEntries[i].animation.onfinish = function () {
        if (this._shouldComplete(activeEntries)) {
          this._complete(activeEntries);

          delete this._active[type];
          this.fire('neon-animation-finish', cookie, {
            bubbles: false
          });
        }
      }.bind(this);
    }
  },

  /**
   * Cancels the currently running animations.
   */
  cancelAnimation: function cancelAnimation() {
    for (var k in this._active) {
      var entries = this._active[k];

      for (var j in entries) {
        entries[j].animation.cancel();
      }
    }

    this._active = {};
  }
};
/** @polymerBehavior */

var NeonAnimationRunnerBehavior = [_neon_animatable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimatableBehavior"], NeonAnimationRunnerBehaviorImpl];

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
function _templateObject() {
  var data = _taggedTemplateLiteral(["<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in `attached`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id=\"checkboxContainer\">\n  <div id=\"checkbox\" class$=\"[[_computeCheckboxClass(checked, invalid)]]\">\n    <div id=\"checkmark\" class$=\"[[_computeCheckmarkClass(checked)]]\"></div>\n  </div>\n</div>\n\n<div id=\"checkboxLabel\"><slot></slot></div>"], ["<style>\n  :host {\n    display: inline-block;\n    white-space: nowrap;\n    cursor: pointer;\n    --calculated-paper-checkbox-size: var(--paper-checkbox-size, 18px);\n    /* -1px is a sentinel for the default and is replaced in \\`attached\\`. */\n    --calculated-paper-checkbox-ink-size: var(--paper-checkbox-ink-size, -1px);\n    @apply --paper-font-common-base;\n    line-height: 0;\n    -webkit-tap-highlight-color: transparent;\n  }\n\n  :host([hidden]) {\n    display: none !important;\n  }\n\n  :host(:focus) {\n    outline: none;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  #checkboxContainer {\n    display: inline-block;\n    position: relative;\n    width: var(--calculated-paper-checkbox-size);\n    height: var(--calculated-paper-checkbox-size);\n    min-width: var(--calculated-paper-checkbox-size);\n    margin: var(--paper-checkbox-margin, initial);\n    vertical-align: var(--paper-checkbox-vertical-align, middle);\n    background-color: var(--paper-checkbox-unchecked-background-color, transparent);\n  }\n\n  #ink {\n    position: absolute;\n\n    /* Center the ripple in the checkbox by negative offsetting it by\n     * (inkWidth - rippleWidth) / 2 */\n    top: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    width: var(--calculated-paper-checkbox-ink-size);\n    height: var(--calculated-paper-checkbox-ink-size);\n    color: var(--paper-checkbox-unchecked-ink-color, var(--primary-text-color));\n    opacity: 0.6;\n    pointer-events: none;\n  }\n\n  #ink:dir(rtl) {\n    right: calc(0px - (var(--calculated-paper-checkbox-ink-size) - var(--calculated-paper-checkbox-size)) / 2);\n    left: auto;\n  }\n\n  #ink[checked] {\n    color: var(--paper-checkbox-checked-ink-color, var(--primary-color));\n  }\n\n  #checkbox {\n    position: relative;\n    box-sizing: border-box;\n    height: 100%;\n    border: solid 2px;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    border-radius: 2px;\n    pointer-events: none;\n    -webkit-transition: background-color 140ms, border-color 140ms;\n    transition: background-color 140ms, border-color 140ms;\n\n    -webkit-transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n    transition-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  /* checkbox checked animations */\n  #checkbox.checked #checkmark {\n    -webkit-animation: checkmark-expand 140ms ease-out forwards;\n    animation: checkmark-expand 140ms ease-out forwards;\n\n    -webkit-animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n    animation-duration: var(--paper-checkbox-animation-duration, 140ms);\n  }\n\n  @-webkit-keyframes checkmark-expand {\n    0% {\n      -webkit-transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      -webkit-transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  @keyframes checkmark-expand {\n    0% {\n      transform: scale(0, 0) rotate(45deg);\n    }\n    100% {\n      transform: scale(1, 1) rotate(45deg);\n    }\n  }\n\n  #checkbox.checked {\n    background-color: var(--paper-checkbox-checked-color, var(--primary-color));\n    border-color: var(--paper-checkbox-checked-color, var(--primary-color));\n  }\n\n  #checkmark {\n    position: absolute;\n    width: 36%;\n    height: 70%;\n    border-style: solid;\n    border-top: none;\n    border-left: none;\n    border-right-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-bottom-width: calc(2/15 * var(--calculated-paper-checkbox-size));\n    border-color: var(--paper-checkbox-checkmark-color, white);\n    -webkit-transform-origin: 97% 86%;\n    transform-origin: 97% 86%;\n    box-sizing: content-box; /* protect against page-level box-sizing */\n  }\n\n  #checkmark:dir(rtl) {\n    -webkit-transform-origin: 50% 14%;\n    transform-origin: 50% 14%;\n  }\n\n  /* label */\n  #checkboxLabel {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-left: var(--paper-checkbox-label-spacing, 8px);\n    white-space: normal;\n    line-height: normal;\n    color: var(--paper-checkbox-label-color, var(--primary-text-color));\n    @apply --paper-checkbox-label;\n  }\n\n  :host([checked]) #checkboxLabel {\n    color: var(--paper-checkbox-label-checked-color, var(--paper-checkbox-label-color, var(--primary-text-color)));\n    @apply --paper-checkbox-label-checked;\n  }\n\n  #checkboxLabel:dir(rtl) {\n    padding-right: var(--paper-checkbox-label-spacing, 8px);\n    padding-left: 0;\n  }\n\n  #checkboxLabel[hidden] {\n    display: none;\n  }\n\n  /* disabled state */\n\n  :host([disabled]) #checkbox {\n    opacity: 0.5;\n    border-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n  }\n\n  :host([disabled][checked]) #checkbox {\n    background-color: var(--paper-checkbox-unchecked-color, var(--primary-text-color));\n    opacity: 0.5;\n  }\n\n  :host([disabled]) #checkboxLabel  {\n    opacity: 0.65;\n  }\n\n  /* invalid state */\n  #checkbox.invalid:not(.checked) {\n    border-color: var(--paper-checkbox-error-color, var(--error-color));\n  }\n</style>\n\n<div id=\"checkboxContainer\">\n  <div id=\"checkbox\" class$=\"[[_computeCheckboxClass(checked, invalid)]]\">\n    <div id=\"checkmark\" class$=\"[[_computeCheckmarkClass(checked)]]\"></div>\n  </div>\n</div>\n\n<div id=\"checkboxLabel\"><slot></slot></div>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/







var template = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
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
  attached: function attached() {
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
  _computeCheckboxClass: function _computeCheckboxClass(checked, invalid) {
    var className = '';

    if (checked) {
      className += 'checked ';
    }

    if (invalid) {
      className += 'invalid';
    }

    return className;
  },
  _computeCheckmarkClass: function _computeCheckmarkClass(checked) {
    return checked ? '' : 'hidden';
  },
  // create ripple inside the checkboxContainer
  _createRipple: function _createRipple() {
    this._rippleContainer = this.$.checkboxContainer;
    return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperInkyFocusBehaviorImpl"]._createRipple.call(this);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_iconset_svg_iron_iconset_svg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-iconset-svg/iron-iconset-svg.js */ "./node_modules/@polymer/iron-iconset-svg/iron-iconset-svg.js");
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

var $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<iron-iconset-svg name=\"paper-dropdown-menu\" size=\"24\">\n<svg><defs>\n<g id=\"arrow-drop-down\"><path d=\"M7 10l5 5 5-5z\"></path></g>\n</defs></svg>\n</iron-iconset-svg>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
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

var $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<dom-module id=\"paper-dropdown-menu-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        text-align: left;\n\n        /* NOTE(cdata): Both values are needed, since some phones require the\n         * value to be `transparent`.\n         */\n        -webkit-tap-highlight-color: rgba(0,0,0,0);\n        -webkit-tap-highlight-color: transparent;\n\n        --paper-input-container-input: {\n          overflow: hidden;\n          white-space: nowrap;\n          text-overflow: ellipsis;\n          max-width: 100%;\n          box-sizing: border-box;\n          cursor: pointer;\n        };\n\n        @apply --paper-dropdown-menu;\n      }\n\n      :host([disabled]) {\n        @apply --paper-dropdown-menu-disabled;\n      }\n\n      :host([noink]) paper-ripple {\n        display: none;\n      }\n\n      :host([no-label-float]) paper-ripple {\n        top: 8px;\n      }\n\n      paper-ripple {\n        top: 12px;\n        left: 0px;\n        bottom: 8px;\n        right: 0px;\n\n        @apply --paper-dropdown-menu-ripple;\n      }\n\n      paper-menu-button {\n        display: block;\n        padding: 0;\n\n        @apply --paper-dropdown-menu-button;\n      }\n\n      paper-input {\n        @apply --paper-dropdown-menu-input;\n      }\n\n      iron-icon {\n        color: var(--disabled-text-color);\n\n        @apply --paper-dropdown-menu-icon;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_icon_iron_icon_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon.js */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_input_paper_input_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input.js */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_menu_button_paper_menu_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-menu-button/paper-menu-button.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js");
/* harmony import */ var _polymer_paper_ripple_paper_ripple_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-ripple/paper-ripple.js */ "./node_modules/@polymer/paper-ripple/paper-ripple.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _paper_dropdown_menu_icons_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paper-dropdown-menu-icons.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-icons.js");
/* harmony import */ var _paper_dropdown_menu_shared_styles_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paper-dropdown-menu-shared-styles.js */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu-shared-styles.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"paper-dropdown-menu-shared-styles\"></style>\n\n    <!-- this div fulfills an a11y requirement for combobox, do not remove -->\n    <span role=\"button\"></span>\n    <paper-menu-button id=\"menuButton\" vertical-align=\"[[verticalAlign]]\" horizontal-align=\"[[horizontalAlign]]\" dynamic-align=\"[[dynamicAlign]]\" vertical-offset=\"[[_computeMenuVerticalOffset(noLabelFloat, verticalOffset)]]\" disabled=\"[[disabled]]\" no-animations=\"[[noAnimations]]\" on-iron-select=\"_onIronSelect\" on-iron-deselect=\"_onIronDeselect\" opened=\"{{opened}}\" close-on-activate allow-outside-scroll=\"[[allowOutsideScroll]]\" restore-focus-on-close=\"[[restoreFocusOnClose]]\">\n      <!-- support hybrid mode: user might be using paper-menu-button 1.x which distributes via <content> -->\n      <div class=\"dropdown-trigger\" slot=\"dropdown-trigger\">\n        <paper-ripple></paper-ripple>\n        <!-- paper-input has type=\"text\" for a11y, do not remove -->\n        <paper-input type=\"text\" invalid=\"[[invalid]]\" readonly disabled=\"[[disabled]]\" value=\"[[value]]\" placeholder=\"[[placeholder]]\" error-message=\"[[errorMessage]]\" always-float-label=\"[[alwaysFloatLabel]]\" no-label-float=\"[[noLabelFloat]]\" label=\"[[label]]\">\n          <!-- support hybrid mode: user might be using paper-input 1.x which distributes via <content> -->\n          <iron-icon icon=\"paper-dropdown-menu:arrow-drop-down\" suffix slot=\"suffix\"></iron-icon>\n        </paper-input>\n      </div>\n      <slot id=\"content\" name=\"dropdown-content\" slot=\"dropdown-content\"></slot>\n    </paper-menu-button>\n"]);

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

















/**
Material design: [Dropdown
menus](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

`paper-dropdown-menu` is similar to a native browser select element.
`paper-dropdown-menu` works with selectable content. The currently selected
item is displayed in the control. If no item is selected, the `label` is
displayed instead.

Example:

    <paper-dropdown-menu label="Your favourite pastry">
      <paper-listbox slot="dropdown-content">
        <paper-item>Croissant</paper-item>
        <paper-item>Donut</paper-item>
        <paper-item>Financier</paper-item>
        <paper-item>Madeleine</paper-item>
      </paper-listbox>
    </paper-dropdown-menu>

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
`--paper-dropdown-menu-input` | A mixin that is applied to the internal paper input | `{}`
`--paper-dropdown-menu-icon` | A mixin that is applied to the internal icon | `{}`

You can also use any of the `paper-input-container` and `paper-menu-button`
style mixins and custom properties to style the internal input and menu button
respectively.

@group Paper Elements
@element paper-dropdown-menu
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_13__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_16__["html"])(_templateObject()),
  is: 'paper-dropdown-menu',
  behaviors: [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_9__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_10__["IronControlState"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_11__["IronFormElementBehavior"], _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_12__["IronValidatableBehavior"]],
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
     * a child with slot `dropdown-content`, and that child triggers an
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
      notify: true
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
     * The error message to display when invalid.
     */
    errorMessage: {
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

    /**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */
    dynamicAlign: {
      type: Boolean
    },

    /**
     * Whether focus should be restored to the dropdown when the menu closes.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: true
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
    role: 'combobox',
    'aria-autocomplete': 'none',
    'aria-haspopup': 'true'
  },
  observers: ['_selectedItemChanged(selectedItem)'],
  attached: function attached() {
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
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_14__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  /**
   * Show the dropdown content.
   */
  open: function open() {
    this.$.menuButton.open();
  },

  /**
   * Hide the dropdown content.
   */
  close: function close() {
    this.$.menuButton.close();
  },

  /**
   * A handler that is called when `iron-select` is fired.
   *
   * @param {CustomEvent} event An `iron-select` event.
   */
  _onIronSelect: function _onIronSelect(event) {
    this._setSelectedItem(event.detail.item);
  },

  /**
   * A handler that is called when `iron-deselect` is fired.
   *
   * @param {CustomEvent} event An `iron-deselect` event.
   */
  _onIronDeselect: function _onIronDeselect(event) {
    this._setSelectedItem(null);
  },

  /**
   * A handler that is called when the dropdown is tapped.
   *
   * @param {CustomEvent} event A tap event.
   */
  _onTap: function _onTap(event) {
    if (_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_15__["findOriginalTarget"](event) === this) {
      this.open();
    }
  },

  /**
   * Compute the label for the dropdown given a selected item.
   *
   * @param {Element} selectedItem A selected Element item, with an
   * optional `label` property.
   */
  _selectedItemChanged: function _selectedItemChanged(selectedItem) {
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
  _computeMenuVerticalOffset: function _computeMenuVerticalOffset(noLabelFloat, opt_verticalOffset) {
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
  _getValidity: function _getValidity(_value) {
    return this.disabled || !this.required || this.required && !!this.value;
  },
  _openedChanged: function _openedChanged() {
    var openState = this.opened ? 'true' : 'false';
    var e = this.contentElement;

    if (e) {
      e.setAttribute('aria-expanded', openState);
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-behavior.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-behavior.js ***!
  \*****************************************************************/
/*! exports provided: PaperItemBehaviorImpl, PaperItemBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehaviorImpl", function() { return PaperItemBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperItemBehavior", function() { return PaperItemBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-button-state.js */ "./node_modules/@polymer/iron-behaviors/iron-button-state.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
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



/*
`PaperItemBehavior` is a convenience behavior shared by <paper-item> and
<paper-icon-item> that manages the shared control states and attributes of
the items.
*/

/** @polymerBehavior PaperItemBehavior */

var PaperItemBehaviorImpl = {
  hostAttributes: {
    role: 'option',
    tabindex: '0'
  }
};
/** @polymerBehavior */

var PaperItemBehavior = [_polymer_iron_behaviors_iron_button_state_js__WEBPACK_IMPORTED_MODULE_1__["IronButtonState"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"], PaperItemBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item-shared-styles.js ***!
  \**********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/color.js */ "./src/util/empty.js");
/* harmony import */ var _polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_polymer_paper_styles_color_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
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




var $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<dom-module id=\"paper-item-shared-styles\">\n  <template>\n    <style>\n      :host, .paper-item {\n        display: block;\n        position: relative;\n        min-height: var(--paper-item-min-height, 48px);\n        padding: 0px 16px;\n      }\n\n      .paper-item {\n        @apply --paper-font-subhead;\n        border:none;\n        outline: none;\n        background: white;\n        width: 100%;\n        text-align: left;\n      }\n\n      :host([hidden]), .paper-item[hidden] {\n        display: none !important;\n      }\n\n      :host(.iron-selected), .paper-item.iron-selected {\n        font-weight: var(--paper-item-selected-weight, bold);\n\n        @apply --paper-item-selected;\n      }\n\n      :host([disabled]), .paper-item[disabled] {\n        color: var(--paper-item-disabled-color, var(--disabled-text-color));\n\n        @apply --paper-item-disabled;\n      }\n\n      :host(:focus), .paper-item:focus {\n        position: relative;\n        outline: 0;\n\n        @apply --paper-item-focused;\n      }\n\n      :host(:focus):before, .paper-item:focus:before {\n        @apply --layout-fit;\n\n        background: currentColor;\n        content: '';\n        opacity: var(--dark-divider-opacity);\n        pointer-events: none;\n\n        @apply --paper-item-focused-before;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@polymer/paper-item/paper-item.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-item/paper-item.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _paper_item_shared_styles_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-item-shared-styles.js */ "./node_modules/@polymer/paper-item/paper-item-shared-styles.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paper-item-behavior.js */ "./node_modules/@polymer/paper-item/paper-item-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"paper-item-shared-styles\">\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        @apply --paper-font-subhead;\n\n        @apply --paper-item;\n      }\n    </style>\n    <slot></slot>\n"]);

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






/**
Material design:
[Lists](https://www.google.com/design/spec/components/lists.html)

`<paper-item>` is an interactive list item. By default, it is a horizontal
flexbox.

    <paper-item>Item</paper-item>

Use this element with `<paper-item-body>` to make Material Design styled
two-line and three-line items.

    <paper-item>
      <paper-item-body two-line>
        <div>Show your status</div>
        <div secondary>Your status is visible to everyone</div>
      </paper-item-body>
      <iron-icon icon="warning"></iron-icon>
    </paper-item>

To use `paper-item` as a link, wrap it in an anchor tag. Since `paper-item` will
already receive focus, you may want to prevent the anchor tag from receiving
focus as well by setting its tabindex to -1.

    <a href="https://www.polymer-project.org/" tabindex="-1">
      <paper-item raised>Polymer Project</paper-item>
    </a>

If you are concerned about performance and want to use `paper-item` in a
`paper-listbox` with many items, you can just use a native `button` with the
`paper-item` class applied (provided you have correctly included the shared
styles):

    <style is="custom-style" include="paper-item-shared-styles"></style>

    <paper-listbox>
      <button class="paper-item" role="option">Inbox</button>
      <button class="paper-item" role="option">Starred</button>
      <button class="paper-item" role="option">Sent mail</button>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-item-min-height` | Minimum height of the item | `48px`
`--paper-item` | Mixin applied to the item | `{}`
`--paper-item-selected-weight` | The font weight of a selected item | `bold`
`--paper-item-selected` | Mixin applied to selected paper-items | `{}`
`--paper-item-disabled-color` | The color for disabled paper-items | `--disabled-text-color`
`--paper-item-disabled` | Mixin applied to disabled paper-items | `{}`
`--paper-item-focused` | Mixin applied to focused paper-items | `{}`
`--paper-item-focused-before` | Mixin applied to :before focused paper-items | `{}`

### Accessibility

This element has `role="listitem"` by default. Depending on usage, it may be
more appropriate to set `role="menuitem"`, `role="menuitemcheckbox"` or
`role="menuitemradio"`.

    <paper-item role="menuitemcheckbox">
      <paper-item-body>
        Show your status
      </paper-item-body>
      <paper-checkbox></paper-checkbox>
    </paper-item>

@group Paper Elements
@element paper-item
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'paper-item',
  behaviors: [_paper_item_behavior_js__WEBPACK_IMPORTED_MODULE_5__["PaperItemBehavior"]]
});

/***/ }),

/***/ "./node_modules/@polymer/paper-listbox/paper-listbox.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-listbox/paper-listbox.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-menu-behavior/iron-menu-behavior.js */ "./node_modules/@polymer/iron-menu-behavior/iron-menu-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        padding: 8px 0;\n\n        background: var(--paper-listbox-background-color, var(--primary-background-color));\n        color: var(--paper-listbox-color, var(--primary-text-color));\n\n        @apply --paper-listbox;\n      }\n    </style>\n\n    <slot></slot>\n"]);

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





/**
Material design:
[Menus](https://www.google.com/design/spec/components/menus.html)

`<paper-listbox>` implements an accessible listbox control with Material Design
styling. The focused item is highlighted, and the selected item has bolded text.

    <paper-listbox>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

An initial selection can be specified with the `selected` attribute.

    <paper-listbox selected="0">
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

Make a multi-select listbox with the `multi` attribute. Items in a multi-select
listbox can be deselected, and multiple item can be selected.

    <paper-listbox multi>
      <paper-item>Item 1</paper-item>
      <paper-item>Item 2</paper-item>
    </paper-listbox>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-listbox-background-color`   | Menu background color |
`--primary-background-color`
`--paper-listbox-color`              | Menu foreground color |
`--primary-text-color`
`--paper-listbox`                    | Mixin applied to the listbox | `{}`

### Accessibility

`<paper-listbox>` has `role="listbox"` by default. A multi-select listbox will
also have `aria-multiselectable` set. It implements key bindings to navigate
through the listbox with the up and down arrow keys, esc to exit the listbox,
and enter to activate a listbox item. Typing the first letter of a listbox item
will also focus it.

@group Paper Elements
@element paper-listbox
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_3__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'paper-listbox',
  behaviors: [_polymer_iron_menu_behavior_iron_menu_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronMenuBehavior"]],

  /** @private */
  hostAttributes: {
    role: 'listbox'
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-menu-button/paper-menu-button-animations.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-menu-button/paper-menu-button-animations.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/neon-animation/neon-animation-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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



Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-grow-height-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function configure(config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var height = rect.height;
    this._effect = new KeyframeEffect(node, [{
      height: height / 2 + 'px'
    }, {
      height: height + 'px'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-grow-width-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function configure(config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var width = rect.width;
    this._effect = new KeyframeEffect(node, [{
      width: width / 2 + 'px'
    }, {
      width: width + 'px'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-shrink-width-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function configure(config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var width = rect.width;
    this._effect = new KeyframeEffect(node, [{
      width: width + 'px'
    }, {
      width: width - width / 20 + 'px'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});
Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  is: 'paper-menu-shrink-height-animation',
  behaviors: [_polymer_neon_animation_neon_animation_behavior_js__WEBPACK_IMPORTED_MODULE_1__["NeonAnimationBehavior"]],
  configure: function configure(config) {
    var node = config.node;
    var rect = node.getBoundingClientRect();
    var height = rect.height;
    this.setPrefixedProperty(node, 'transformOrigin', '0 0');
    this._effect = new KeyframeEffect(node, [{
      height: height + 'px',
      transform: 'translateY(0)'
    }, {
      height: height / 2 + 'px',
      transform: 'translateY(-20px)'
    }], this.timingFromConfig(config));
    return this._effect;
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-menu-button/paper-menu-button.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/paper-menu-button/paper-menu-button.js ***!
  \**********************************************************************/
/*! exports provided: PaperMenuButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperMenuButton", function() { return PaperMenuButton; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_dropdown_iron_dropdown_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-dropdown/iron-dropdown.js */ "./node_modules/@polymer/iron-dropdown/iron-dropdown.js");
/* harmony import */ var _polymer_neon_animation_animations_fade_in_animation_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/neon-animation/animations/fade-in-animation.js */ "./node_modules/@polymer/neon-animation/animations/fade-in-animation.js");
/* harmony import */ var _polymer_neon_animation_animations_fade_out_animation_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/neon-animation/animations/fade-out-animation.js */ "./node_modules/@polymer/neon-animation/animations/fade-out-animation.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-styles/shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
/* harmony import */ var _paper_menu_button_animations_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./paper-menu-button-animations.js */ "./node_modules/@polymer/paper-menu-button/paper-menu-button-animations.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        padding: 8px;\n        outline: none;\n\n        @apply --paper-menu-button;\n      }\n\n      :host([disabled]) {\n        cursor: auto;\n        color: var(--disabled-text-color);\n\n        @apply --paper-menu-button-disabled;\n      }\n\n      iron-dropdown {\n        @apply --paper-menu-button-dropdown;\n      }\n\n      .dropdown-content {\n        @apply --shadow-elevation-2dp;\n\n        position: relative;\n        border-radius: 2px;\n        background-color: var(--paper-menu-button-dropdown-background, var(--primary-background-color));\n\n        @apply --paper-menu-button-content;\n      }\n\n      :host([vertical-align=\"top\"]) .dropdown-content {\n        margin-bottom: 20px;\n        margin-top: -10px;\n        top: 10px;\n      }\n\n      :host([vertical-align=\"bottom\"]) .dropdown-content {\n        bottom: 10px;\n        margin-bottom: -10px;\n        margin-top: 20px;\n      }\n\n      #trigger {\n        cursor: pointer;\n      }\n    </style>\n\n    <div id=\"trigger\" on-tap=\"toggle\">\n      <slot name=\"dropdown-trigger\"></slot>\n    </div>\n\n    <iron-dropdown id=\"dropdown\" opened=\"{{opened}}\" horizontal-align=\"[[horizontalAlign]]\" vertical-align=\"[[verticalAlign]]\" dynamic-align=\"[[dynamicAlign]]\" horizontal-offset=\"[[horizontalOffset]]\" vertical-offset=\"[[verticalOffset]]\" no-overlap=\"[[noOverlap]]\" open-animation-config=\"[[openAnimationConfig]]\" close-animation-config=\"[[closeAnimationConfig]]\" no-animations=\"[[noAnimations]]\" focus-target=\"[[_dropdownContent]]\" allow-outside-scroll=\"[[allowOutsideScroll]]\" restore-focus-on-close=\"[[restoreFocusOnClose]]\" on-iron-overlay-canceled=\"__onIronOverlayCanceled\">\n      <div slot=\"dropdown-content\" class=\"dropdown-content\">\n        <slot id=\"content\" name=\"dropdown-content\"></slot>\n      </div>\n    </iron-dropdown>\n"]);

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












var config = {
  ANIMATION_CUBIC_BEZIER: 'cubic-bezier(.3,.95,.5,1)',
  MAX_ANIMATION_TIME_MS: 400
};
/**
Material design: [Dropdown
buttons](https://www.google.com/design/spec/components/buttons.html#buttons-dropdown-buttons)

`paper-menu-button` allows one to compose a designated "trigger" element with
another element that represents "content", to create a dropdown menu that
displays the "content" when the "trigger" is clicked.

The child element assigned to the `dropdown-trigger` slot will be used as the
"trigger" element. The child element assigned to the `dropdown-content` slot
will be used as the "content" element.

The `paper-menu-button` is sensitive to its content's `iron-select` events. If
the "content" element triggers an `iron-select` event, the `paper-menu-button`
will close automatically.

Example:

    <paper-menu-button>
      <paper-icon-button icon="menu"
slot="dropdown-trigger"></paper-icon-button> <paper-listbox
slot="dropdown-content"> <paper-item>Share</paper-item>
        <paper-item>Settings</paper-item>
        <paper-item>Help</paper-item>
      </paper-listbox>
    </paper-menu-button>

### Styling

The following custom properties and mixins are also available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-menu-button-dropdown-background` | Background color of the paper-menu-button dropdown | `--primary-background-color`
`--paper-menu-button` | Mixin applied to the paper-menu-button | `{}`
`--paper-menu-button-disabled` | Mixin applied to the paper-menu-button when disabled | `{}`
`--paper-menu-button-dropdown` | Mixin applied to the paper-menu-button dropdown | `{}`
`--paper-menu-button-content` | Mixin applied to the paper-menu-button content | `{}`

@hero hero.svg
@demo demo/index.html
*/

var PaperMenuButton = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_9__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject()),
  is: 'paper-menu-button',

  /**
   * Fired when the dropdown opens.
   *
   * @event paper-dropdown-open
   */

  /**
   * Fired when the dropdown closes.
   *
   * @event paper-dropdown-close
   */
  behaviors: [_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_7__["IronA11yKeysBehavior"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__["IronControlState"]],
  properties: {
    /**
     * True if the content is currently displayed.
     */
    opened: {
      type: Boolean,
      value: false,
      notify: true,
      observer: '_openedChanged'
    },

    /**
     * The orientation against which to align the menu dropdown
     * horizontally relative to the dropdown trigger.
     */
    horizontalAlign: {
      type: String,
      value: 'left',
      reflectToAttribute: true
    },

    /**
     * The orientation against which to align the menu dropdown
     * vertically relative to the dropdown trigger.
     */
    verticalAlign: {
      type: String,
      value: 'top',
      reflectToAttribute: true
    },

    /**
     * If true, the `horizontalAlign` and `verticalAlign` properties will
     * be considered preferences instead of strict requirements when
     * positioning the dropdown and may be changed if doing so reduces
     * the area of the dropdown falling outside of `fitInto`.
     */
    dynamicAlign: {
      type: Boolean
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`. Use a negative value to offset to the
     * left, or a positive value to offset to the right.
     */
    horizontalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`. Use a negative value to offset towards the
     * top, or a positive value to offset towards the bottom.
     */
    verticalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * If true, the dropdown will be positioned so that it doesn't overlap
     * the button.
     */
    noOverlap: {
      type: Boolean
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
     * Set to true to disable automatically closing the dropdown after
     * a selection has been made.
     */
    ignoreSelect: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to enable automatically closing the dropdown after an
     * item has been activated, even if the selection did not change.
     */
    closeOnActivate: {
      type: Boolean,
      value: false
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * opening of the dropdown.
     */
    openAnimationConfig: {
      type: Object,
      value: function value() {
        return [{
          name: 'fade-in-animation',
          timing: {
            delay: 100,
            duration: 200
          }
        }, {
          name: 'paper-menu-grow-width-animation',
          timing: {
            delay: 100,
            duration: 150,
            easing: config.ANIMATION_CUBIC_BEZIER
          }
        }, {
          name: 'paper-menu-grow-height-animation',
          timing: {
            delay: 100,
            duration: 275,
            easing: config.ANIMATION_CUBIC_BEZIER
          }
        }];
      }
    },

    /**
     * An animation config. If provided, this will be used to animate the
     * closing of the dropdown.
     */
    closeAnimationConfig: {
      type: Object,
      value: function value() {
        return [{
          name: 'fade-out-animation',
          timing: {
            duration: 150
          }
        }, {
          name: 'paper-menu-shrink-width-animation',
          timing: {
            delay: 100,
            duration: 50,
            easing: config.ANIMATION_CUBIC_BEZIER
          }
        }, {
          name: 'paper-menu-shrink-height-animation',
          timing: {
            duration: 200,
            easing: 'ease-in'
          }
        }];
      }
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
     * Whether focus should be restored to the button when the menu closes.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: true
    },

    /**
     * This is the element intended to be bound as the focus target
     * for the `iron-dropdown` contained by `paper-menu-button`.
     */
    _dropdownContent: {
      type: Object
    }
  },
  hostAttributes: {
    role: 'group',
    'aria-haspopup': 'true'
  },
  listeners: {
    'iron-activate': '_onIronActivate',
    'iron-select': '_onIronSelect'
  },

  /**
   * The content element that is contained by the menu button, if any.
   */
  get contentElement() {
    // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
    var nodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_10__["dom"])(this.$.content).getDistributedNodes();

    for (var i = 0, l = nodes.length; i < l; i++) {
      if (nodes[i].nodeType === Node.ELEMENT_NODE) {
        return nodes[i];
      }
    }
  },

  /**
   * Toggles the dropdown content between opened and closed.
   */
  toggle: function toggle() {
    if (this.opened) {
      this.close();
    } else {
      this.open();
    }
  },

  /**
   * Make the dropdown content appear as an overlay positioned relative
   * to the dropdown trigger.
   */
  open: function open() {
    if (this.disabled) {
      return;
    }

    this.$.dropdown.open();
  },

  /**
   * Hide the dropdown content.
   */
  close: function close() {
    this.$.dropdown.close();
  },

  /**
   * When an `iron-select` event is received, the dropdown should
   * automatically close on the assumption that a value has been chosen.
   *
   * @param {CustomEvent} event A CustomEvent instance with type
   * set to `"iron-select"`.
   */
  _onIronSelect: function _onIronSelect(event) {
    if (!this.ignoreSelect) {
      this.close();
    }
  },

  /**
   * Closes the dropdown when an `iron-activate` event is received if
   * `closeOnActivate` is true.
   *
   * @param {CustomEvent} event A CustomEvent of type 'iron-activate'.
   */
  _onIronActivate: function _onIronActivate(event) {
    if (this.closeOnActivate) {
      this.close();
    }
  },

  /**
   * When the dropdown opens, the `paper-menu-button` fires `paper-open`.
   * When the dropdown closes, the `paper-menu-button` fires `paper-close`.
   *
   * @param {boolean} opened True if the dropdown is opened, otherwise false.
   * @param {boolean} oldOpened The previous value of `opened`.
   */
  _openedChanged: function _openedChanged(opened, oldOpened) {
    if (opened) {
      // TODO(cdata): Update this when we can measure changes in distributed
      // children in an idiomatic way.
      // We poke this property in case the element has changed. This will
      // cause the focus target for the `iron-dropdown` to be updated as
      // necessary:
      this._dropdownContent = this.contentElement;
      this.fire('paper-dropdown-open');
    } else if (oldOpened != null) {
      this.fire('paper-dropdown-close');
    }
  },

  /**
   * If the dropdown is open when disabled becomes true, close the
   * dropdown.
   *
   * @param {boolean} disabled True if disabled, otherwise false.
   */
  _disabledChanged: function _disabledChanged(disabled) {
    _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_8__["IronControlState"]._disabledChanged.apply(this, arguments);

    if (disabled && this.opened) {
      this.close();
    }
  },
  __onIronOverlayCanceled: function __onIronOverlayCanceled(event) {
    var uiEvent = event.detail;
    var trigger = this.$.trigger;
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_10__["dom"])(uiEvent).path;

    if (path.indexOf(trigger) > -1) {
      event.preventDefault();
    }
  }
});
Object.keys(config).forEach(function (key) {
  PaperMenuButton[key] = config[key];
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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: \"\";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id=\"progressContainer\">\n      <div id=\"secondaryProgress\" hidden$=\"[[_hideSecondaryProgress(secondaryRatio)]]\"></div>\n      <div id=\"primaryProgress\"></div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n        width: 200px;\n        position: relative;\n        overflow: hidden;\n      }\n\n      :host([hidden]), [hidden] {\n        display: none !important;\n      }\n\n      #progressContainer {\n        @apply --paper-progress-container;\n        position: relative;\n      }\n\n      #progressContainer,\n      /* the stripe for the indeterminate animation*/\n      .indeterminate::after {\n        height: var(--paper-progress-height, 4px);\n      }\n\n      #primaryProgress,\n      #secondaryProgress,\n      .indeterminate::after {\n        @apply --layout-fit;\n      }\n\n      #progressContainer,\n      .indeterminate::after {\n        background: var(--paper-progress-container-color, var(--google-grey-300));\n      }\n\n      :host(.transiting) #primaryProgress,\n      :host(.transiting) #secondaryProgress {\n        -webkit-transition-property: -webkit-transform;\n        transition-property: transform;\n\n        /* Duration */\n        -webkit-transition-duration: var(--paper-progress-transition-duration, 0.08s);\n        transition-duration: var(--paper-progress-transition-duration, 0.08s);\n\n        /* Timing function */\n        -webkit-transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n        transition-timing-function: var(--paper-progress-transition-timing-function, ease);\n\n        /* Delay */\n        -webkit-transition-delay: var(--paper-progress-transition-delay, 0s);\n        transition-delay: var(--paper-progress-transition-delay, 0s);\n      }\n\n      #primaryProgress,\n      #secondaryProgress {\n        @apply --layout-fit;\n        -webkit-transform-origin: left center;\n        transform-origin: left center;\n        -webkit-transform: scaleX(0);\n        transform: scaleX(0);\n        will-change: transform;\n      }\n\n      #primaryProgress {\n        background: var(--paper-progress-active-color, var(--google-green-500));\n      }\n\n      #secondaryProgress {\n        background: var(--paper-progress-secondary-color, var(--google-green-100));\n      }\n\n      :host([disabled]) #primaryProgress {\n        background: var(--paper-progress-disabled-active-color, var(--google-grey-500));\n      }\n\n      :host([disabled]) #secondaryProgress {\n        background: var(--paper-progress-disabled-secondary-color, var(--google-grey-300));\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate {\n        -webkit-transform-origin: right center;\n        transform-origin: right center;\n        -webkit-animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-bar var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      :host(:not([disabled])) #primaryProgress.indeterminate::after {\n        content: \"\";\n        -webkit-transform-origin: center center;\n        transform-origin: center center;\n\n        -webkit-animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n        animation: indeterminate-splitter var(--paper-progress-indeterminate-cycle-duration, 2s) linear infinite;\n      }\n\n      @-webkit-keyframes indeterminate-bar {\n        0% {\n          -webkit-transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          -webkit-transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          -webkit-transform: scaleX(1) translateX(0%);\n          -webkit-animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          -webkit-transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @-webkit-keyframes indeterminate-splitter {\n        0% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          -webkit-transform: scaleX(.75) translateX(-125%);\n          -webkit-animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          -webkit-transform: scaleX(.75) translateX(125%);\n        }\n      }\n\n      @keyframes indeterminate-bar {\n        0% {\n          transform: scaleX(1) translateX(-100%);\n        }\n        50% {\n          transform: scaleX(1) translateX(0%);\n        }\n        75% {\n          transform: scaleX(1) translateX(0%);\n          animation-timing-function: cubic-bezier(.28,.62,.37,.91);\n        }\n        100% {\n          transform: scaleX(0) translateX(0%);\n        }\n      }\n\n      @keyframes indeterminate-splitter {\n        0% {\n          transform: scaleX(.75) translateX(-125%);\n        }\n        30% {\n          transform: scaleX(.75) translateX(-125%);\n          animation-timing-function: cubic-bezier(.42,0,.6,.8);\n        }\n        90% {\n          transform: scaleX(.75) translateX(125%);\n        }\n        100% {\n          transform: scaleX(.75) translateX(125%);\n        }\n      }\n    </style>\n\n    <div id=\"progressContainer\">\n      <div id=\"secondaryProgress\" hidden\\$=\"[[_hideSecondaryProgress(secondaryRatio)]]\"></div>\n      <div id=\"primaryProgress\"></div>\n    </div>\n"]);

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
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
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
  _toggleIndeterminate: function _toggleIndeterminate(indeterminate) {
    // If we use attribute/class binding, the animation sometimes doesn't
    // translate properly on Safari 7.1. So instead, we toggle the class here in
    // the update method.
    this.toggleClass('indeterminate', indeterminate, this.$.primaryProgress);
  },
  _transformProgress: function _transformProgress(progress, ratio) {
    var transform = 'scaleX(' + ratio / 100 + ')';
    progress.style.transform = progress.style.webkitTransform = transform;
  },
  _mainRatioChanged: function _mainRatioChanged(ratio) {
    this._transformProgress(this.$.primaryProgress, ratio);
  },
  _progressChanged: function _progressChanged(secondaryProgress, value, min, max, indeterminate) {
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
  _disabledChanged: function _disabledChanged(disabled) {
    this.setAttribute('aria-disabled', disabled ? 'true' : 'false');
  },
  _hideSecondaryProgress: function _hideSecondaryProgress(secondaryRatio) {
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
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  <style>\n    :host {\n      @apply --layout;\n      @apply --layout-justified;\n      @apply --layout-center;\n      width: 200px;\n      cursor: default;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));\n      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));\n      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));\n      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));\n      --calculated-paper-slider-height: var(--paper-slider-height, 2px);\n    }\n\n    /* focus shows the ripple */\n    :host(:focus) {\n      outline: none;\n    }\n\n    /**\n      * NOTE(keanulee): Though :host-context is not universally supported, some pages\n      * still rely on paper-slider being flipped when dir=\"rtl\" is set on body. For full\n      * compatibility, dir=\"rtl\" must be explicitly set on paper-slider.\n      */\n    :dir(rtl) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): This is separate from the rule above because :host-context may\n      * not be recognized.\n      */\n    :host([dir=\"rtl\"]) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): Needed to override the :host-context rule (where supported)\n      * to support LTR sliders in RTL pages.\n      */\n    :host([dir=\"ltr\"]) #sliderContainer {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n\n    #sliderContainer {\n      position: relative;\n      width: 100%;\n      height: calc(30px + var(--calculated-paper-slider-height));\n      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);\n      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderContainer:focus {\n      outline: 0;\n    }\n\n    #sliderContainer.editable {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n\n    .bar-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n\n    .ring > .bar-container {\n      left: calc(5px + var(--calculated-paper-slider-height)/2);\n      transition: left 0.18s ease;\n    }\n\n    .ring.expand.dragging > .bar-container {\n      transition: none;\n    }\n\n    .ring.expand:not(.pin) > .bar-container {\n      left: calc(8px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderBar {\n      padding: 15px 0;\n      width: 100%;\n      background-color: var(--paper-slider-bar-color, transparent);\n      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));\n      --paper-progress-height: var(--calculated-paper-slider-height);\n    }\n\n    .slider-markers {\n      position: absolute;\n      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/\n      top: 15px;\n      height: var(--calculated-paper-slider-height);\n      left: 0;\n      right: -1px;\n      box-sizing: border-box;\n      pointer-events: none;\n      @apply --layout-horizontal;\n    }\n\n    .slider-marker {\n      @apply --layout-flex;\n    }\n    .slider-markers::after,\n    .slider-marker::after {\n      content: \"\";\n      display: block;\n      margin-left: -1px;\n      width: 2px;\n      height: var(--calculated-paper-slider-height);\n      border-radius: 50%;\n      background-color: var(--paper-slider-markers-color, #000);\n    }\n\n    .slider-knob {\n      position: absolute;\n      left: 0;\n      top: 0;\n      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);\n      width: calc(30px + var(--calculated-paper-slider-height));\n      height: calc(30px + var(--calculated-paper-slider-height));\n    }\n\n    .transiting > .slider-knob {\n      transition: left 0.08s ease;\n    }\n\n    .slider-knob:focus {\n      outline: none;\n    }\n\n    .slider-knob.dragging {\n      transition: none;\n    }\n\n    .snaps > .slider-knob.dragging {\n      transition: -webkit-transform 0.08s ease;\n      transition: transform 0.08s ease;\n    }\n\n    .slider-knob-inner {\n      margin: 10px;\n      width: calc(100% - 20px);\n      height: calc(100% - 20px);\n      background-color: var(--paper-slider-knob-color, var(--google-blue-700));\n      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));\n      border-radius: 50%;\n\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n\n      transition-property: -webkit-transform, background-color, border;\n      transition-property: transform, background-color, border;\n      transition-duration: 0.18s;\n      transition-timing-function: ease;\n    }\n\n    .expand:not(.pin) > .slider-knob > .slider-knob-inner {\n      -webkit-transform: scale(1.5);\n      transform: scale(1.5);\n    }\n\n    .ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-color, var(--google-blue-700));\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -13px;\n      width: 26px;\n      height: 26px;\n      border-radius: 50% 50% 50% 0;\n\n      -webkit-transform: rotate(-45deg) scale(0) translate(0);\n      transform: rotate(-45deg) scale(0) translate(0);\n    }\n\n    .slider-knob-inner::before,\n    .slider-knob-inner::after {\n      transition: -webkit-transform .18s ease, background-color .18s ease;\n      transition: transform .18s ease, background-color .18s ease;\n    }\n\n    .pin.ring > .slider-knob > .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::before {\n      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);\n      transform: rotate(-45deg) scale(1) translate(17px, -17px);\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::after {\n      content: attr(value);\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -16px;\n      width: 32px;\n      height: 26px;\n      text-align: center;\n      color: var(--paper-slider-font-color, #fff);\n      font-size: 10px;\n\n      -webkit-transform: scale(0) translate(0);\n      transform: scale(0) translate(0);\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::after {\n      -webkit-transform: scale(1) translate(0, -17px);\n      transform: scale(1) translate(0, -17px);\n    }\n\n    /* paper-input */\n    .slider-input {\n      width: 50px;\n      overflow: hidden;\n      --paper-input-container-input: {\n        text-align: center;\n        @apply --paper-slider-input-container-input;\n      };\n      @apply --paper-slider-input;\n    }\n\n    /* disabled state */\n    #sliderContainer.disabled {\n      pointer-events: none;\n    }\n\n    .disabled > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      -webkit-transform: scale3d(0.75, 0.75, 1);\n      transform: scale3d(0.75, 0.75, 1);\n    }\n\n    .disabled.ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    paper-ripple {\n      color: var(--paper-slider-knob-color, var(--google-blue-700));\n    }\n  </style>\n\n  <div id=\"sliderContainer\" class$=\"[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]\">\n    <div class=\"bar-container\">\n      <paper-progress disabled$=\"[[disabled]]\" id=\"sliderBar\" aria-hidden=\"true\" min=\"[[min]]\" max=\"[[max]]\" step=\"[[step]]\" value=\"[[immediateValue]]\" secondary-progress=\"[[secondaryProgress]]\" on-down=\"_bardown\" on-up=\"_resetKnob\" on-track=\"_bartrack\" on-tap=\"_barclick\">\n      </paper-progress>\n    </div>\n\n    <template is=\"dom-if\" if=\"[[snaps]]\">\n      <div class=\"slider-markers\">\n        <template is=\"dom-repeat\" items=\"[[markers]]\">\n          <div class=\"slider-marker\"></div>\n        </template>\n      </div>\n    </template>\n\n    <div id=\"sliderKnob\" class=\"slider-knob\" on-down=\"_knobdown\" on-up=\"_resetKnob\" on-track=\"_onTrack\" on-transitionend=\"_knobTransitionEnd\">\n        <div class=\"slider-knob-inner\" value$=\"[[immediateValue]]\"></div>\n    </div>\n  </div>\n\n  <template is=\"dom-if\" if=\"[[editable]]\">\n    <paper-input id=\"input\" type=\"number\" step=\"[[step]]\" min=\"[[min]]\" max=\"[[max]]\" class=\"slider-input\" disabled$=\"[[disabled]]\" value=\"[[immediateValue]]\" on-change=\"_changeValue\" on-keydown=\"_inputKeyDown\" no-label-float>\n    </paper-input>\n  </template>\n"], ["\n  <style>\n    :host {\n      @apply --layout;\n      @apply --layout-justified;\n      @apply --layout-center;\n      width: 200px;\n      cursor: default;\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      -ms-user-select: none;\n      user-select: none;\n      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n      --paper-progress-active-color: var(--paper-slider-active-color, var(--google-blue-700));\n      --paper-progress-secondary-color: var(--paper-slider-secondary-color, var(--google-blue-300));\n      --paper-progress-disabled-active-color: var(--paper-slider-disabled-active-color, var(--paper-grey-400));\n      --paper-progress-disabled-secondary-color: var(--paper-slider-disabled-secondary-color, var(--paper-grey-400));\n      --calculated-paper-slider-height: var(--paper-slider-height, 2px);\n    }\n\n    /* focus shows the ripple */\n    :host(:focus) {\n      outline: none;\n    }\n\n    /**\n      * NOTE(keanulee): Though :host-context is not universally supported, some pages\n      * still rely on paper-slider being flipped when dir=\"rtl\" is set on body. For full\n      * compatibility, dir=\"rtl\" must be explicitly set on paper-slider.\n      */\n    :dir(rtl) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): This is separate from the rule above because :host-context may\n      * not be recognized.\n      */\n    :host([dir=\"rtl\"]) #sliderContainer {\n      -webkit-transform: scaleX(-1);\n      transform: scaleX(-1);\n    }\n\n    /**\n      * NOTE(keanulee): Needed to override the :host-context rule (where supported)\n      * to support LTR sliders in RTL pages.\n      */\n    :host([dir=\"ltr\"]) #sliderContainer {\n      -webkit-transform: scaleX(1);\n      transform: scaleX(1);\n    }\n\n    #sliderContainer {\n      position: relative;\n      width: 100%;\n      height: calc(30px + var(--calculated-paper-slider-height));\n      margin-left: calc(15px + var(--calculated-paper-slider-height)/2);\n      margin-right: calc(15px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderContainer:focus {\n      outline: 0;\n    }\n\n    #sliderContainer.editable {\n      margin-top: 12px;\n      margin-bottom: 12px;\n    }\n\n    .bar-container {\n      position: absolute;\n      top: 0;\n      bottom: 0;\n      left: 0;\n      right: 0;\n      overflow: hidden;\n    }\n\n    .ring > .bar-container {\n      left: calc(5px + var(--calculated-paper-slider-height)/2);\n      transition: left 0.18s ease;\n    }\n\n    .ring.expand.dragging > .bar-container {\n      transition: none;\n    }\n\n    .ring.expand:not(.pin) > .bar-container {\n      left: calc(8px + var(--calculated-paper-slider-height)/2);\n    }\n\n    #sliderBar {\n      padding: 15px 0;\n      width: 100%;\n      background-color: var(--paper-slider-bar-color, transparent);\n      --paper-progress-container-color: var(--paper-slider-container-color, var(--paper-grey-400));\n      --paper-progress-height: var(--calculated-paper-slider-height);\n    }\n\n    .slider-markers {\n      position: absolute;\n      /* slider-knob is 30px + the slider-height so that the markers should start at a offset of 15px*/\n      top: 15px;\n      height: var(--calculated-paper-slider-height);\n      left: 0;\n      right: -1px;\n      box-sizing: border-box;\n      pointer-events: none;\n      @apply --layout-horizontal;\n    }\n\n    .slider-marker {\n      @apply --layout-flex;\n    }\n    .slider-markers::after,\n    .slider-marker::after {\n      content: \"\";\n      display: block;\n      margin-left: -1px;\n      width: 2px;\n      height: var(--calculated-paper-slider-height);\n      border-radius: 50%;\n      background-color: var(--paper-slider-markers-color, #000);\n    }\n\n    .slider-knob {\n      position: absolute;\n      left: 0;\n      top: 0;\n      margin-left: calc(-15px - var(--calculated-paper-slider-height)/2);\n      width: calc(30px + var(--calculated-paper-slider-height));\n      height: calc(30px + var(--calculated-paper-slider-height));\n    }\n\n    .transiting > .slider-knob {\n      transition: left 0.08s ease;\n    }\n\n    .slider-knob:focus {\n      outline: none;\n    }\n\n    .slider-knob.dragging {\n      transition: none;\n    }\n\n    .snaps > .slider-knob.dragging {\n      transition: -webkit-transform 0.08s ease;\n      transition: transform 0.08s ease;\n    }\n\n    .slider-knob-inner {\n      margin: 10px;\n      width: calc(100% - 20px);\n      height: calc(100% - 20px);\n      background-color: var(--paper-slider-knob-color, var(--google-blue-700));\n      border: 2px solid var(--paper-slider-knob-color, var(--google-blue-700));\n      border-radius: 50%;\n\n      -moz-box-sizing: border-box;\n      box-sizing: border-box;\n\n      transition-property: -webkit-transform, background-color, border;\n      transition-property: transform, background-color, border;\n      transition-duration: 0.18s;\n      transition-timing-function: ease;\n    }\n\n    .expand:not(.pin) > .slider-knob > .slider-knob-inner {\n      -webkit-transform: scale(1.5);\n      transform: scale(1.5);\n    }\n\n    .ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-color, var(--google-blue-700));\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::before {\n      content: \"\";\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -13px;\n      width: 26px;\n      height: 26px;\n      border-radius: 50% 50% 50% 0;\n\n      -webkit-transform: rotate(-45deg) scale(0) translate(0);\n      transform: rotate(-45deg) scale(0) translate(0);\n    }\n\n    .slider-knob-inner::before,\n    .slider-knob-inner::after {\n      transition: -webkit-transform .18s ease, background-color .18s ease;\n      transition: transform .18s ease, background-color .18s ease;\n    }\n\n    .pin.ring > .slider-knob > .slider-knob-inner::before {\n      background-color: var(--paper-slider-pin-start-color, var(--paper-grey-400));\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::before {\n      -webkit-transform: rotate(-45deg) scale(1) translate(17px, -17px);\n      transform: rotate(-45deg) scale(1) translate(17px, -17px);\n    }\n\n    .pin > .slider-knob > .slider-knob-inner::after {\n      content: attr(value);\n      position: absolute;\n      top: 0;\n      left: 50%;\n      margin-left: -16px;\n      width: 32px;\n      height: 26px;\n      text-align: center;\n      color: var(--paper-slider-font-color, #fff);\n      font-size: 10px;\n\n      -webkit-transform: scale(0) translate(0);\n      transform: scale(0) translate(0);\n    }\n\n    .pin.expand > .slider-knob > .slider-knob-inner::after {\n      -webkit-transform: scale(1) translate(0, -17px);\n      transform: scale(1) translate(0, -17px);\n    }\n\n    /* paper-input */\n    .slider-input {\n      width: 50px;\n      overflow: hidden;\n      --paper-input-container-input: {\n        text-align: center;\n        @apply --paper-slider-input-container-input;\n      };\n      @apply --paper-slider-input;\n    }\n\n    /* disabled state */\n    #sliderContainer.disabled {\n      pointer-events: none;\n    }\n\n    .disabled > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      border: 2px solid var(--paper-slider-disabled-knob-color, var(--paper-grey-400));\n      -webkit-transform: scale3d(0.75, 0.75, 1);\n      transform: scale3d(0.75, 0.75, 1);\n    }\n\n    .disabled.ring > .slider-knob > .slider-knob-inner {\n      background-color: var(--paper-slider-knob-start-color, transparent);\n      border: 2px solid var(--paper-slider-knob-start-border-color, var(--paper-grey-400));\n    }\n\n    paper-ripple {\n      color: var(--paper-slider-knob-color, var(--google-blue-700));\n    }\n  </style>\n\n  <div id=\"sliderContainer\" class\\$=\"[[_getClassNames(disabled, pin, snaps, immediateValue, min, expand, dragging, transiting, editable)]]\">\n    <div class=\"bar-container\">\n      <paper-progress disabled\\$=\"[[disabled]]\" id=\"sliderBar\" aria-hidden=\"true\" min=\"[[min]]\" max=\"[[max]]\" step=\"[[step]]\" value=\"[[immediateValue]]\" secondary-progress=\"[[secondaryProgress]]\" on-down=\"_bardown\" on-up=\"_resetKnob\" on-track=\"_bartrack\" on-tap=\"_barclick\">\n      </paper-progress>\n    </div>\n\n    <template is=\"dom-if\" if=\"[[snaps]]\">\n      <div class=\"slider-markers\">\n        <template is=\"dom-repeat\" items=\"[[markers]]\">\n          <div class=\"slider-marker\"></div>\n        </template>\n      </div>\n    </template>\n\n    <div id=\"sliderKnob\" class=\"slider-knob\" on-down=\"_knobdown\" on-up=\"_resetKnob\" on-track=\"_onTrack\" on-transitionend=\"_knobTransitionEnd\">\n        <div class=\"slider-knob-inner\" value\\$=\"[[immediateValue]]\"></div>\n    </div>\n  </div>\n\n  <template is=\"dom-if\" if=\"[[editable]]\">\n    <paper-input id=\"input\" type=\"number\" step=\"[[step]]\" min=\"[[min]]\" max=\"[[max]]\" class=\"slider-input\" disabled\\$=\"[[disabled]]\" value=\"[[immediateValue]]\" on-change=\"_changeValue\" on-keydown=\"_inputKeyDown\" no-label-float>\n    </paper-input>\n  </template>\n"]);

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











var template = Object(_polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_10__["html"])(_templateObject());
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
      value: function value() {
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
  ready: function ready() {
    if (this.ignoreBarTouch) {
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_9__["setTouchAction"])(this.$.sliderBar, 'auto');
    }
  },

  /**
   * Increases value by `step` but not above `max`.
   * @method increment
   */
  increment: function increment() {
    this.value = this._clampValue(this.value + this.step);
  },

  /**
   * Decreases value by `step` but not below `min`.
   * @method decrement
   */
  decrement: function decrement() {
    this.value = this._clampValue(this.value - this.step);
  },
  _updateKnob: function _updateKnob(value, min, max, snaps, step) {
    this.setAttribute('aria-valuemin', min);
    this.setAttribute('aria-valuemax', max);
    this.setAttribute('aria-valuenow', value);

    this._positionKnob(this._calcRatio(value) * 100);
  },
  _valueChanged: function _valueChanged() {
    this.fire('value-change', {
      composed: true
    });
  },
  _immediateValueChanged: function _immediateValueChanged() {
    if (this.dragging) {
      this.fire('immediate-value-change', {
        composed: true
      });
    } else {
      this.value = this.immediateValue;
    }
  },
  _secondaryProgressChanged: function _secondaryProgressChanged() {
    this.secondaryProgress = this._clampValue(this.secondaryProgress);
  },
  _expandKnob: function _expandKnob() {
    this._setExpand(true);
  },
  _resetKnob: function _resetKnob() {
    this.cancelDebouncer('expandKnob');

    this._setExpand(false);
  },
  _positionKnob: function _positionKnob(ratio) {
    this._setImmediateValue(this._calcStep(this._calcKnobPosition(ratio)));

    this._setRatio(this._calcRatio(this.immediateValue) * 100);

    this.$.sliderKnob.style.left = this.ratio + '%';

    if (this.dragging) {
      this._knobstartx = this.ratio * this._w / 100;
      this.translate3d(0, 0, 0, this.$.sliderKnob);
    }
  },
  _calcKnobPosition: function _calcKnobPosition(ratio) {
    return (this.max - this.min) * ratio / 100 + this.min;
  },
  _onTrack: function _onTrack(event) {
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
  _trackStart: function _trackStart(event) {
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
  _trackX: function _trackX(event) {
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
  _trackEnd: function _trackEnd() {
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
  _knobdown: function _knobdown(event) {
    this._expandKnob(); // cancel selection


    event.preventDefault(); // set the focus manually because we will called prevent default

    this.focus();
  },
  _bartrack: function _bartrack(event) {
    if (this._allowBarEvent(event)) {
      this._onTrack(event);
    }
  },
  _barclick: function _barclick(event) {
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
  _bardown: function _bardown(event) {
    if (this._allowBarEvent(event)) {
      this.debounce('expandKnob', this._expandKnob, 60);

      this._barclick(event);
    }
  },
  _knobTransitionEnd: function _knobTransitionEnd(event) {
    if (event.target === this.$.sliderKnob) {
      this._setTransiting(false);
    }
  },
  _updateMarkers: function _updateMarkers(maxMarkers, min, max, snaps) {
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
  _mergeClasses: function _mergeClasses(classes) {
    return Object.keys(classes).filter(function (className) {
      return classes[className];
    }).join(' ');
  },
  _getClassNames: function _getClassNames() {
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
  _allowBarEvent: function _allowBarEvent(event) {
    return !this.ignoreBarTouch || event.detail.sourceEvent instanceof MouseEvent;
  },

  get _isRTL() {
    if (this.__isRTL === undefined) {
      this.__isRTL = window.getComputedStyle(this)['direction'] === 'rtl';
    }

    return this.__isRTL;
  },

  _leftKey: function _leftKey(event) {
    if (this._isRTL) this._incrementKey(event);else this._decrementKey(event);
  },
  _rightKey: function _rightKey(event) {
    if (this._isRTL) this._decrementKey(event);else this._incrementKey(event);
  },
  _incrementKey: function _incrementKey(event) {
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
  _decrementKey: function _decrementKey(event) {
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
  _changeValue: function _changeValue(event) {
    this.value = event.target.value;
    this.fire('change', {
      composed: true
    });
  },
  _inputKeyDown: function _inputKeyDown(event) {
    event.stopPropagation();
  },
  // create the element ripple inside the `sliderKnob`
  _createRipple: function _createRipple() {
    this._rippleContainer = this.$.sliderKnob;
    return _polymer_paper_behaviors_paper_inky_focus_behavior_js__WEBPACK_IMPORTED_MODULE_7__["PaperInkyFocusBehaviorImpl"]._createRipple.call(this);
  },
  // Hide the ripple when user is not interacting with keyboard.
  // This behavior is different from other ripple-y controls, but is
  // according to spec:
  // https://www.google.com/design/spec/components/sliders.html
  _focusedChanged: function _focusedChanged(receivedFocusFromKeyboard) {
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

/***/ })

}]);
//# sourceMappingURL=vendors~dialog-config-flow~more-info-dialog~panel-lovelace.chunk.js.map