(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~panel-lovelace"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nfnBhbmVsLWxvdmVsYWNlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tZHJvcGRvd24vaXJvbi1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vYW5pbWF0aW9ucy9mYWRlLWluLWFuaW1hdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vYW5pbWF0aW9ucy9mYWRlLW91dC1hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvbmVvbi1hbmltYXRpb24vbmVvbi1hbmltYXRpb24tYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLXJ1bm5lci1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LWljb25zLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kcm9wZG93bi1tZW51L3BhcGVyLWRyb3Bkb3duLW1lbnUtc2hhcmVkLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZHJvcGRvd24tbWVudS9wYXBlci1kcm9wZG93bi1tZW51LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWl0ZW0vcGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1pdGVtL3BhcGVyLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWxpc3Rib3gvcGFwZXItbGlzdGJveC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b24tYW5pbWF0aW9ucy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItbWVudS1idXR0b24vcGFwZXItbWVudS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7SXJvbkExMXlLZXlzQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvbkNvbnRyb2xTdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1jb250cm9sLXN0YXRlLmpzJztcbmltcG9ydCB7SXJvbk92ZXJsYXlCZWhhdmlvciwgSXJvbk92ZXJsYXlCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLXJ1bm5lci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYDxpcm9uLWRyb3Bkb3duPmAgaXMgYSBnZW5lcmFsaXplZCBlbGVtZW50IHRoYXQgaXMgdXNlZnVsIHdoZW4geW91IGhhdmVcbmhpZGRlbiBjb250ZW50IChgZHJvcGRvd24tY29udGVudGApIHRoYXQgaXMgcmV2ZWFsZWQgZHVlIHRvIHNvbWUgY2hhbmdlIGluXG5zdGF0ZSB0aGF0IHNob3VsZCBjYXVzZSBpdCB0byBkbyBzby5cblxuTm90ZSB0aGF0IHRoaXMgaXMgYSBsb3ctbGV2ZWwgZWxlbWVudCBpbnRlbmRlZCB0byBiZSB1c2VkIGFzIHBhcnQgb2Ygb3RoZXJcbmNvbXBvc2l0ZSBlbGVtZW50cyB0aGF0IGNhdXNlIGRyb3Bkb3ducyB0byBiZSByZXZlYWxlZC5cblxuRXhhbXBsZXMgb2YgZWxlbWVudHMgdGhhdCBtaWdodCBiZSBpbXBsZW1lbnRlZCB1c2luZyBhbiBgaXJvbi1kcm9wZG93bmBcbmluY2x1ZGUgY29tYm9ib3hlcywgbWVudWJ1dHRvbnMsIHNlbGVjdHMuIFRoZSBsaXN0IGdvZXMgb24uXG5cblRoZSBgPGlyb24tZHJvcGRvd24+YCBlbGVtZW50IGV4cG9zZXMgYXR0cmlidXRlcyB0aGF0IGFsbG93IHRoZSBwb3NpdGlvblxub2YgdGhlIGBkcm9wZG93bi1jb250ZW50YCByZWxhdGl2ZSB0byB0aGUgYGRyb3Bkb3duLXRyaWdnZXJgIHRvIGJlXG5jb25maWd1cmVkLlxuXG4gICAgPGlyb24tZHJvcGRvd24gaG9yaXpvbnRhbC1hbGlnbj1cInJpZ2h0XCIgdmVydGljYWwtYWxpZ249XCJ0b3BcIj5cbiAgICAgIDxkaXYgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj5IZWxsbyE8L2Rpdj5cbiAgICA8L2lyb24tZHJvcGRvd24+XG5cbkluIHRoZSBhYm92ZSBleGFtcGxlLCB0aGUgYDxkaXY+YCBhc3NpZ25lZCB0byB0aGUgYGRyb3Bkb3duLWNvbnRlbnRgIHNsb3Qgd2lsbFxuYmUgaGlkZGVuIHVudGlsIHRoZSBkcm9wZG93biBlbGVtZW50IGhhcyBgb3BlbmVkYCBzZXQgdG8gdHJ1ZSwgb3Igd2hlbiB0aGVcbmBvcGVuYCBtZXRob2QgaXMgY2FsbGVkIG9uIHRoZSBlbGVtZW50LlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgfVxuXG4gICAgICAjY29udGVudFdyYXBwZXIgOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50V3JhcHBlci5hbmltYXRpbmcgOjpzbG90dGVkKCopIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJjb250ZW50V3JhcHBlclwiPlxuICAgICAgPHNsb3QgaWQ9XCJjb250ZW50XCIgbmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj48L3Nsb3Q+XG4gICAgPC9kaXY+XG5gLFxuXG4gIGlzOiAnaXJvbi1kcm9wZG93bicsXG5cbiAgYmVoYXZpb3JzOiBbXG4gICAgSXJvbkNvbnRyb2xTdGF0ZSxcbiAgICBJcm9uQTExeUtleXNCZWhhdmlvcixcbiAgICBJcm9uT3ZlcmxheUJlaGF2aW9yLFxuICAgIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvclxuICBdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgZHJvcGRvd24gY29udGVudFxuICAgICAqIGhvcml6b250YWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKiBPdmVycmlkZGVuIGZyb20gYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYC5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbGVmdCcsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgZHJvcGRvd24gY29udGVudFxuICAgICAqIHZlcnRpY2FsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICogT3ZlcnJpZGRlbiBmcm9tIGBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICd0b3AnLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogQW4gYW5pbWF0aW9uIGNvbmZpZy4gSWYgcHJvdmlkZWQsIHRoaXMgd2lsbCBiZSB1c2VkIHRvIGFuaW1hdGUgdGhlXG4gICAgICogb3BlbmluZyBvZiB0aGUgZHJvcGRvd24uIFBhc3MgYW4gQXJyYXkgZm9yIG11bHRpcGxlIGFuaW1hdGlvbnMuXG4gICAgICogU2VlIGBuZW9uLWFuaW1hdGlvbmAgZG9jdW1lbnRhdGlvbiBmb3IgbW9yZSBhbmltYXRpb24gY29uZmlndXJhdGlvblxuICAgICAqIGRldGFpbHMuXG4gICAgICovXG4gICAgb3BlbkFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBBbiBhbmltYXRpb24gY29uZmlnLiBJZiBwcm92aWRlZCwgdGhpcyB3aWxsIGJlIHVzZWQgdG8gYW5pbWF0ZSB0aGVcbiAgICAgKiBjbG9zaW5nIG9mIHRoZSBkcm9wZG93bi4gUGFzcyBhbiBBcnJheSBmb3IgbXVsdGlwbGUgYW5pbWF0aW9ucy5cbiAgICAgKiBTZWUgYG5lb24tYW5pbWF0aW9uYCBkb2N1bWVudGF0aW9uIGZvciBtb3JlIGFuaW1hdGlvbiBjb25maWd1cmF0aW9uXG4gICAgICogZGV0YWlscy5cbiAgICAgKi9cbiAgICBjbG9zZUFuaW1hdGlvbkNvbmZpZzoge3R5cGU6IE9iamVjdH0sXG5cbiAgICAvKipcbiAgICAgKiBJZiBwcm92aWRlZCwgdGhpcyB3aWxsIGJlIHRoZSBlbGVtZW50IHRoYXQgd2lsbCBiZSBmb2N1c2VkIHdoZW5cbiAgICAgKiB0aGUgZHJvcGRvd24gb3BlbnMuXG4gICAgICovXG4gICAgZm9jdXNUYXJnZXQ6IHt0eXBlOiBPYmplY3R9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhbmltYXRpb25zIHdoZW4gb3BlbmluZyBhbmQgY2xvc2luZyB0aGVcbiAgICAgKiBkcm9wZG93bi5cbiAgICAgKi9cbiAgICBub0FuaW1hdGlvbnM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogQnkgZGVmYXVsdCwgdGhlIGRyb3Bkb3duIHdpbGwgY29uc3RyYWluIHNjcm9sbGluZyBvbiB0aGUgcGFnZVxuICAgICAqIHRvIGl0c2VsZiB3aGVuIG9wZW5lZC5cbiAgICAgKiBTZXQgdG8gdHJ1ZSBpbiBvcmRlciB0byBwcmV2ZW50IHNjcm9sbCBmcm9tIGJlaW5nIGNvbnN0cmFpbmVkXG4gICAgICogdG8gdGhlIGRyb3Bkb3duIHdoZW4gaXQgb3BlbnMuXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBhIHNob3J0Y3V0IHRvIHNldCBgc2Nyb2xsQWN0aW9uYCB0byBsb2NrIG9yIHJlZml0LlxuICAgICAqIFByZWZlciBkaXJlY3RseSBzZXR0aW5nIHRoZSBgc2Nyb2xsQWN0aW9uYCBwcm9wZXJ0eS5cbiAgICAgKi9cbiAgICBhbGxvd091dHNpZGVTY3JvbGw6XG4gICAgICAgIHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG9ic2VydmVyOiAnX2FsbG93T3V0c2lkZVNjcm9sbENoYW5nZWQnfVxuICB9LFxuXG4gIGxpc3RlbmVyczogeyduZW9uLWFuaW1hdGlvbi1maW5pc2gnOiAnX29uTmVvbkFuaW1hdGlvbkZpbmlzaCd9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdfdXBkYXRlT3ZlcmxheVBvc2l0aW9uKHBvc2l0aW9uVGFyZ2V0LCB2ZXJ0aWNhbEFsaWduLCBob3Jpem9udGFsQWxpZ24sIHZlcnRpY2FsT2Zmc2V0LCBob3Jpem9udGFsT2Zmc2V0KSdcbiAgXSxcblxuICAvKipcbiAgICogVGhlIGVsZW1lbnQgdGhhdCBpcyBjb250YWluZWQgYnkgdGhlIGRyb3Bkb3duLCBpZiBhbnkuXG4gICAqL1xuICBnZXQgY29udGFpbmVkRWxlbWVudCgpIHtcbiAgICAvLyBQb2x5bWVyIDIueCByZXR1cm5zIHNsb3QuYXNzaWduZWROb2RlcyB3aGljaCBjYW4gY29udGFpbiB0ZXh0IG5vZGVzLlxuICAgIHZhciBub2RlcyA9IGRvbSh0aGlzLiQuY29udGVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gbm9kZXMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgICBpZiAobm9kZXNbaV0ubm9kZVR5cGUgPT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICAgIHJldHVybiBub2Rlc1tpXTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEVuc3VyZSBzY3JvbGxBY3Rpb24gaXMgc2V0LlxuICAgIGlmICghdGhpcy5zY3JvbGxBY3Rpb24pIHtcbiAgICAgIHRoaXMuc2Nyb2xsQWN0aW9uID0gdGhpcy5hbGxvd091dHNpZGVTY3JvbGwgPyAncmVmaXQnIDogJ2xvY2snO1xuICAgIH1cbiAgICB0aGlzLl9yZWFkaWVkID0gdHJ1ZTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLnNpemluZ1RhcmdldCB8fCB0aGlzLnNpemluZ1RhcmdldCA9PT0gdGhpcykge1xuICAgICAgdGhpcy5zaXppbmdUYXJnZXQgPSB0aGlzLmNvbnRhaW5lZEVsZW1lbnQgfHwgdGhpcztcbiAgICB9XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2YWx1ZSBvZiBgb3BlbmVkYCBjaGFuZ2VzLlxuICAgKiBPdmVycmlkZGVuIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgXG4gICAqL1xuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmIHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2FuY2VsQW5pbWF0aW9uKCk7XG4gICAgICB0aGlzLl91cGRhdGVBbmltYXRpb25Db25maWcoKTtcbiAgICAgIElyb25PdmVybGF5QmVoYXZpb3JJbXBsLl9vcGVuZWRDaGFuZ2VkLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZGVuIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgKi9cbiAgX3JlbmRlck9wZW5lZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm5vQW5pbWF0aW9ucyAmJiB0aGlzLmFuaW1hdGlvbkNvbmZpZy5vcGVuKSB7XG4gICAgICB0aGlzLiQuY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LmFkZCgnYW5pbWF0aW5nJyk7XG4gICAgICB0aGlzLnBsYXlBbmltYXRpb24oJ29wZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwuX3JlbmRlck9wZW5lZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICovXG4gIF9yZW5kZXJDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5ub0FuaW1hdGlvbnMgJiYgdGhpcy5hbmltYXRpb25Db25maWcuY2xvc2UpIHtcbiAgICAgIHRoaXMuJC5jb250ZW50V3JhcHBlci5jbGFzc0xpc3QuYWRkKCdhbmltYXRpbmcnKTtcbiAgICAgIHRoaXMucGxheUFuaW1hdGlvbignY2xvc2UnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwuX3JlbmRlckNsb3NlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYW5pbWF0aW9uIGZpbmlzaGVzIG9uIHRoZSBkcm9wZG93biAod2hlbiBvcGVuaW5nIG9yXG4gICAqIGNsb3NpbmcpLiBSZXNwb25zaWJsZSBmb3IgXCJjb21wbGV0aW5nXCIgdGhlIHByb2Nlc3Mgb2Ygb3BlbmluZyBvclxuICAgKiBjbG9zaW5nIHRoZSBkcm9wZG93biBieSBwb3NpdGlvbmluZyBpdCBvciBzZXR0aW5nIGl0cyBkaXNwbGF5IHRvXG4gICAqIG5vbmUuXG4gICAqL1xuICBfb25OZW9uQW5pbWF0aW9uRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQuY29udGVudFdyYXBwZXIuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0aW5nJyk7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9maW5pc2hSZW5kZXJPcGVuZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZmluaXNoUmVuZGVyQ2xvc2VkKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBDb25zdHJ1Y3RzIHRoZSBmaW5hbCBhbmltYXRpb24gY29uZmlnIGZyb20gZGlmZmVyZW50IHByb3BlcnRpZXMgdXNlZFxuICAgKiB0byBjb25maWd1cmUgc3BlY2lmaWMgcGFydHMgb2YgdGhlIG9wZW5pbmcgYW5kIGNsb3NpbmcgYW5pbWF0aW9ucy5cbiAgICovXG4gIF91cGRhdGVBbmltYXRpb25Db25maWc6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFVwZGF0ZSB0aGUgYW5pbWF0aW9uIG5vZGUgdG8gYmUgdGhlIGNvbnRhaW5lZEVsZW1lbnQuXG4gICAgdmFyIGFuaW1hdGlvbk5vZGUgPSB0aGlzLmNvbnRhaW5lZEVsZW1lbnQ7XG4gICAgdmFyIGFuaW1hdGlvbnMgPSBbXS5jb25jYXQodGhpcy5vcGVuQW5pbWF0aW9uQ29uZmlnIHx8IFtdKVxuICAgICAgICAgICAgICAgICAgICAgICAgIC5jb25jYXQodGhpcy5jbG9zZUFuaW1hdGlvbkNvbmZpZyB8fCBbXSk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhbmltYXRpb25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhbmltYXRpb25zW2ldLm5vZGUgPSBhbmltYXRpb25Ob2RlO1xuICAgIH1cbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZyA9IHtcbiAgICAgIG9wZW46IHRoaXMub3BlbkFuaW1hdGlvbkNvbmZpZyxcbiAgICAgIGNsb3NlOiB0aGlzLmNsb3NlQW5pbWF0aW9uQ29uZmlnXG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgb3ZlcmxheSBwb3NpdGlvbiBiYXNlZCBvbiBjb25maWd1cmVkIGhvcml6b250YWxcbiAgICogYW5kIHZlcnRpY2FsIGFsaWdubWVudC5cbiAgICovXG4gIF91cGRhdGVPdmVybGF5UG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIC8vIFRoaXMgdHJpZ2dlcnMgaXJvbi1yZXNpemUsIGFuZCBpcm9uLW92ZXJsYXktYmVoYXZpb3Igd2lsbCBjYWxsIHJlZml0IGlmXG4gICAgICAvLyBuZWVkZWQuXG4gICAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyBzY3JvbGxBY3Rpb24gYWNjb3JkaW5nIHRvIHRoZSB2YWx1ZSBvZiBhbGxvd091dHNpZGVTY3JvbGwuXG4gICAqIFByZWZlciBzZXR0aW5nIGRpcmVjdGx5IHNjcm9sbEFjdGlvbi5cbiAgICovXG4gIF9hbGxvd091dHNpZGVTY3JvbGxDaGFuZ2VkOiBmdW5jdGlvbihhbGxvd091dHNpZGVTY3JvbGwpIHtcbiAgICAvLyBXYWl0IHVudGlsIGluaXRpYWwgdmFsdWVzIGFyZSBhbGwgc2V0LlxuICAgIGlmICghdGhpcy5fcmVhZGllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIWFsbG93T3V0c2lkZVNjcm9sbCkge1xuICAgICAgdGhpcy5zY3JvbGxBY3Rpb24gPSAnbG9jayc7XG4gICAgfSBlbHNlIGlmICghdGhpcy5zY3JvbGxBY3Rpb24gfHwgdGhpcy5zY3JvbGxBY3Rpb24gPT09ICdsb2NrJykge1xuICAgICAgdGhpcy5zY3JvbGxBY3Rpb24gPSAncmVmaXQnO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQXBwbHkgZm9jdXMgdG8gZm9jdXNUYXJnZXQgb3IgY29udGFpbmVkRWxlbWVudFxuICAgKi9cbiAgX2FwcGx5Rm9jdXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBmb2N1c1RhcmdldCA9IHRoaXMuZm9jdXNUYXJnZXQgfHwgdGhpcy5jb250YWluZWRFbGVtZW50O1xuICAgIGlmIChmb2N1c1RhcmdldCAmJiB0aGlzLm9wZW5lZCAmJiAhdGhpcy5ub0F1dG9Gb2N1cykge1xuICAgICAgZm9jdXNUYXJnZXQuZm9jdXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwuX2FwcGx5Rm9jdXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7TmVvbkFuaW1hdGlvbkJlaGF2aW9yfSBmcm9tICcuLi9uZW9uLWFuaW1hdGlvbi1iZWhhdmlvci5qcyc7XG4vKlxuYDxmYWRlLWluLWFuaW1hdGlvbj5gIGFuaW1hdGVzIHRoZSBvcGFjaXR5IG9mIGFuIGVsZW1lbnQgZnJvbSAwIHRvIDEuXG5cbkNvbmZpZ3VyYXRpb246XG5gYGBcbntcbiAgbmFtZTogJ2ZhZGUtaW4tYW5pbWF0aW9uJyxcbiAgbm9kZTogPG5vZGU+XG4gIHRpbWluZzogPGFuaW1hdGlvbi10aW1pbmc+XG59XG5gYGBcbiovXG5Qb2x5bWVyKHtcblxuICBpczogJ2ZhZGUtaW4tYW5pbWF0aW9uJyxcblxuICBiZWhhdmlvcnM6IFtOZW9uQW5pbWF0aW9uQmVoYXZpb3JdLFxuXG4gIGNvbmZpZ3VyZTogZnVuY3Rpb24oY29uZmlnKSB7XG4gICAgdmFyIG5vZGUgPSBjb25maWcubm9kZTtcbiAgICB0aGlzLl9lZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3QoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIFt7J29wYWNpdHknOiAnMCd9LCB7J29wYWNpdHknOiAnMSd9XSxcbiAgICAgICAgdGhpcy50aW1pbmdGcm9tQ29uZmlnKGNvbmZpZykpO1xuICAgIHJldHVybiB0aGlzLl9lZmZlY3Q7XG4gIH1cblxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtOZW9uQW5pbWF0aW9uQmVoYXZpb3J9IGZyb20gJy4uL25lb24tYW5pbWF0aW9uLWJlaGF2aW9yLmpzJztcbi8qXG5gPGZhZGUtb3V0LWFuaW1hdGlvbj5gIGFuaW1hdGVzIHRoZSBvcGFjaXR5IG9mIGFuIGVsZW1lbnQgZnJvbSAxIHRvIDAuXG5cbkNvbmZpZ3VyYXRpb246XG5gYGBcbntcbiAgbmFtZTogJ2ZhZGUtb3V0LWFuaW1hdGlvbicsXG4gIG5vZGU6IDxub2RlPlxuICB0aW1pbmc6IDxhbmltYXRpb24tdGltaW5nPlxufVxuYGBgXG4qL1xuUG9seW1lcih7XG5cbiAgaXM6ICdmYWRlLW91dC1hbmltYXRpb24nLFxuXG4gIGJlaGF2aW9yczogW05lb25BbmltYXRpb25CZWhhdmlvcl0sXG5cbiAgY29uZmlndXJlOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgbm9kZSA9IGNvbmZpZy5ub2RlO1xuICAgIHRoaXMuX2VmZmVjdCA9IG5ldyBLZXlmcmFtZUVmZmVjdChcbiAgICAgICAgbm9kZSxcbiAgICAgICAgW1xuICAgICAgICAgIHsnb3BhY2l0eSc6ICcxJ30sXG4gICAgICAgICAgeydvcGFjaXR5JzogJzAnfSxcbiAgICAgICAgXSxcbiAgICAgICAgdGhpcy50aW1pbmdGcm9tQ29uZmlnKGNvbmZpZykpO1xuICAgIHJldHVybiB0aGlzLl9lZmZlY3Q7XG4gIH1cblxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRhYmxlQmVoYXZpb3JgIGlzIGltcGxlbWVudGVkIGJ5IGVsZW1lbnRzIGNvbnRhaW5pbmdcbiAqIGFuaW1hdGlvbnMgZm9yIHVzZSB3aXRoIGVsZW1lbnRzIGltcGxlbWVudGluZ1xuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAuXG4gKiBAcG9seW1lckJlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0YWJsZUJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIEFuaW1hdGlvbiBjb25maWd1cmF0aW9uLiBTZWUgUkVBRE1FIGZvciBtb3JlIGluZm8uXG4gICAgICovXG4gICAgYW5pbWF0aW9uQ29uZmlnOiB7dHlwZTogT2JqZWN0fSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdlbnRyeScgYW5pbWF0aW9uLiBEbyBub3Qgc2V0XG4gICAgICogYGFuaW1hdGlvbkNvbmZpZy5lbnRyeWAgbWFudWFsbHkgaWYgdXNpbmcgdGhpcy4gVGhlIGFuaW1hdGVkIG5vZGUgaXMgc2V0XG4gICAgICogdG8gYHRoaXNgIGlmIHVzaW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICovXG4gICAgZW50cnlBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZCcsXG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnZlbmllbmNlIHByb3BlcnR5IGZvciBzZXR0aW5nIGFuICdleGl0JyBhbmltYXRpb24uIERvIG5vdCBzZXRcbiAgICAgKiBgYW5pbWF0aW9uQ29uZmlnLmV4aXRgIG1hbnVhbGx5IGlmIHVzaW5nIHRoaXMuIFRoZSBhbmltYXRlZCBub2RlIGlzIHNldFxuICAgICAqIHRvIGB0aGlzYCBpZiB1c2luZyB0aGlzIHByb3BlcnR5LlxuICAgICAqL1xuICAgIGV4aXRBbmltYXRpb246IHtcbiAgICAgIG9ic2VydmVyOiAnX2V4aXRBbmltYXRpb25DaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gIH0sXG5cbiAgX2VudHJ5QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZW50cnknXSA9IFt7bmFtZTogdGhpcy5lbnRyeUFuaW1hdGlvbiwgbm9kZTogdGhpc31dO1xuICB9LFxuXG4gIF9leGl0QW5pbWF0aW9uQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hbmltYXRpb25Db25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZyB8fCB7fTtcbiAgICB0aGlzLmFuaW1hdGlvbkNvbmZpZ1snZXhpdCddID0gW3tuYW1lOiB0aGlzLmV4aXRBbmltYXRpb24sIG5vZGU6IHRoaXN9XTtcbiAgfSxcblxuICBfY29weVByb3BlcnRpZXM6IGZ1bmN0aW9uKGNvbmZpZzEsIGNvbmZpZzIpIHtcbiAgICAvLyBzaGFsbG93bHkgY29weSBwcm9wZXJ0aWVzIGZyb20gY29uZmlnMiB0byBjb25maWcxXG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnMikge1xuICAgICAgY29uZmlnMVtwcm9wZXJ0eV0gPSBjb25maWcyW3Byb3BlcnR5XTtcbiAgICB9XG4gIH0sXG5cbiAgX2Nsb25lQ29uZmlnOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgY2xvbmUgPSB7aXNDbG9uZTogdHJ1ZX07XG4gICAgdGhpcy5fY29weVByb3BlcnRpZXMoY2xvbmUsIGNvbmZpZyk7XG4gICAgcmV0dXJuIGNsb25lO1xuICB9LFxuXG4gIF9nZXRBbmltYXRpb25Db25maWdSZWN1cnNpdmU6IGZ1bmN0aW9uKHR5cGUsIG1hcCwgYWxsQ29uZmlncykge1xuICAgIGlmICghdGhpcy5hbmltYXRpb25Db25maWcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5hbmltYXRpb25Db25maWcudmFsdWUgJiZcbiAgICAgICAgdHlwZW9mIHRoaXMuYW5pbWF0aW9uQ29uZmlnLnZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICB0aGlzLl93YXJuKHRoaXMuX2xvZ2YoXG4gICAgICAgICAgJ3BsYXlBbmltYXRpb24nLFxuICAgICAgICAgICdQbGVhc2UgcHV0IFxcJ2FuaW1hdGlvbkNvbmZpZ1xcJyBpbnNpZGUgb2YgeW91ciBjb21wb25lbnRzIFxcJ3Byb3BlcnRpZXNcXCcgb2JqZWN0IGluc3RlYWQgb2Ygb3V0c2lkZSBvZiBpdC4nKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gdHlwZSBpcyBvcHRpb25hbFxuICAgIHZhciB0aGlzQ29uZmlnO1xuICAgIGlmICh0eXBlKSB7XG4gICAgICB0aGlzQ29uZmlnID0gdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV07XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXNDb25maWcgPSB0aGlzLmFuaW1hdGlvbkNvbmZpZztcbiAgICB9XG5cbiAgICBpZiAoIUFycmF5LmlzQXJyYXkodGhpc0NvbmZpZykpIHtcbiAgICAgIHRoaXNDb25maWcgPSBbdGhpc0NvbmZpZ107XG4gICAgfVxuXG4gICAgLy8gaXRlcmF0ZSBhbmltYXRpb25zIGFuZCByZWN1cnNlIHRvIHByb2Nlc3MgY29uZmlndXJhdGlvbnMgZnJvbSBjaGlsZCBub2Rlc1xuICAgIGlmICh0aGlzQ29uZmlnKSB7XG4gICAgICBmb3IgKHZhciBjb25maWcsIGluZGV4ID0gMDsgY29uZmlnID0gdGhpc0NvbmZpZ1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgICAgaWYgKGNvbmZpZy5hbmltYXRhYmxlKSB7XG4gICAgICAgICAgY29uZmlnLmFuaW1hdGFibGUuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZShcbiAgICAgICAgICAgICAgY29uZmlnLnR5cGUgfHwgdHlwZSwgbWFwLCBhbGxDb25maWdzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoY29uZmlnLmlkKSB7XG4gICAgICAgICAgICB2YXIgY2FjaGVkQ29uZmlnID0gbWFwW2NvbmZpZy5pZF07XG4gICAgICAgICAgICBpZiAoY2FjaGVkQ29uZmlnKSB7XG4gICAgICAgICAgICAgIC8vIG1lcmdlIGNvbmZpZ3VyYXRpb25zIHdpdGggdGhlIHNhbWUgaWQsIG1ha2luZyBhIGNsb25lIGxhemlseVxuICAgICAgICAgICAgICBpZiAoIWNhY2hlZENvbmZpZy5pc0Nsb25lKSB7XG4gICAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSB0aGlzLl9jbG9uZUNvbmZpZyhjYWNoZWRDb25maWcpO1xuICAgICAgICAgICAgICAgIGNhY2hlZENvbmZpZyA9IG1hcFtjb25maWcuaWRdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMuX2NvcHlQcm9wZXJ0aWVzKGNhY2hlZENvbmZpZywgY29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIC8vIHB1dCBhbnkgY29uZmlncyB3aXRoIGFuIGlkIGludG8gYSBtYXBcbiAgICAgICAgICAgICAgbWFwW2NvbmZpZy5pZF0gPSBjb25maWc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsbENvbmZpZ3MucHVzaChjb25maWcpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCBpbXBsZW1lbnRpbmcgYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgY2FsbHMgdGhpc1xuICAgKiBtZXRob2QgdG8gY29uZmlndXJlIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIHR5cGUuIEVsZW1lbnRzXG4gICAqIGltcGxlbWVudGluZyBgTmVvbkFuaW1hdGFibGVCZWhhdmlvcmAgc2hvdWxkIGRlZmluZSB0aGUgcHJvcGVydHlcbiAgICogYGFuaW1hdGlvbkNvbmZpZ2AsIHdoaWNoIGlzIGVpdGhlciBhIGNvbmZpZ3VyYXRpb24gb2JqZWN0IG9yIGEgbWFwIG9mXG4gICAqIGFuaW1hdGlvbiB0eXBlIHRvIGFycmF5IG9mIGNvbmZpZ3VyYXRpb24gb2JqZWN0cy5cbiAgICovXG4gIGdldEFuaW1hdGlvbkNvbmZpZzogZnVuY3Rpb24odHlwZSkge1xuICAgIHZhciBtYXAgPSB7fTtcbiAgICB2YXIgYWxsQ29uZmlncyA9IFtdO1xuICAgIHRoaXMuX2dldEFuaW1hdGlvbkNvbmZpZ1JlY3Vyc2l2ZSh0eXBlLCBtYXAsIGFsbENvbmZpZ3MpO1xuICAgIC8vIGFwcGVuZCB0aGUgY29uZmlndXJhdGlvbnMgc2F2ZWQgaW4gdGhlIG1hcCB0byB0aGUgYXJyYXlcbiAgICBmb3IgKHZhciBrZXkgaW4gbWFwKSB7XG4gICAgICBhbGxDb25maWdzLnB1c2gobWFwW2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gYWxsQ29uZmlncztcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcbiAqIFVzZSBgTmVvbkFuaW1hdGlvbkJlaGF2aW9yYCB0byBpbXBsZW1lbnQgYW4gYW5pbWF0aW9uLlxuICogQHBvbHltZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvbkJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIERlZmluZXMgdGhlIGFuaW1hdGlvbiB0aW1pbmcuXG4gICAgICovXG4gICAgYW5pbWF0aW9uVGltaW5nOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZHVyYXRpb246IDUwMCwgZWFzaW5nOiAnY3ViaWMtYmV6aWVyKDAuNCwgMCwgMC4yLCAxKScsIGZpbGw6ICdib3RoJ1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbiBiZSB1c2VkIHRvIGRldGVybWluZSB0aGF0IGVsZW1lbnRzIGltcGxlbWVudCB0aGlzIGJlaGF2aW9yLlxuICAgKi9cbiAgaXNOZW9uQW5pbWF0aW9uOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBEbyBhbnkgYW5pbWF0aW9uIGNvbmZpZ3VyYXRpb24gaGVyZS5cbiAgICovXG4gIC8vIGNvbmZpZ3VyZTogZnVuY3Rpb24oY29uZmlnKSB7XG4gIC8vIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmFuaW1hdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAnTm8gd2ViIGFuaW1hdGlvbnMgZGV0ZWN0ZWQuIFRoaXMgZWxlbWVudCB3aWxsIG5vdCcgK1xuICAgICAgICAgICcgZnVuY3Rpb24gd2l0aG91dCBhIHdlYiBhbmltYXRpb25zIHBvbHlmaWxsLicpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYW5pbWF0aW9uIHRpbWluZyBieSBtaXhpbmcgaW4gcHJvcGVydGllcyBmcm9tIGBjb25maWdgIHRvIHRoZVxuICAgKiBkZWZhdWx0cyBkZWZpbmVkIGJ5IHRoZSBhbmltYXRpb24uXG4gICAqL1xuICB0aW1pbmdGcm9tQ29uZmlnOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICBpZiAoY29uZmlnLnRpbWluZykge1xuICAgICAgZm9yICh2YXIgcHJvcGVydHkgaW4gY29uZmlnLnRpbWluZykge1xuICAgICAgICB0aGlzLmFuaW1hdGlvblRpbWluZ1twcm9wZXJ0eV0gPSBjb25maWcudGltaW5nW3Byb3BlcnR5XTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uVGltaW5nO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZXRzIGB0cmFuc2Zvcm1gIGFuZCBgdHJhbnNmb3JtT3JpZ2luYCBwcm9wZXJ0aWVzIGFsb25nIHdpdGggdGhlIHByZWZpeGVkXG4gICAqIHZlcnNpb25zLlxuICAgKi9cbiAgc2V0UHJlZml4ZWRQcm9wZXJ0eTogZnVuY3Rpb24obm9kZSwgcHJvcGVydHksIHZhbHVlKSB7XG4gICAgdmFyIG1hcCA9IHtcbiAgICAgICd0cmFuc2Zvcm0nOiBbJ3dlYmtpdFRyYW5zZm9ybSddLFxuICAgICAgJ3RyYW5zZm9ybU9yaWdpbic6IFsnbW96VHJhbnNmb3JtT3JpZ2luJywgJ3dlYmtpdFRyYW5zZm9ybU9yaWdpbiddXG4gICAgfTtcbiAgICB2YXIgcHJlZml4ZXMgPSBtYXBbcHJvcGVydHldO1xuICAgIGZvciAodmFyIHByZWZpeCwgaW5kZXggPSAwOyBwcmVmaXggPSBwcmVmaXhlc1tpbmRleF07IGluZGV4KyspIHtcbiAgICAgIG5vZGUuc3R5bGVbcHJlZml4XSA9IHZhbHVlO1xuICAgIH1cbiAgICBub2RlLnN0eWxlW3Byb3BlcnR5XSA9IHZhbHVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgYW5pbWF0aW9uIGZpbmlzaGVzLlxuICAgKi9cbiAgY29tcGxldGU6IGZ1bmN0aW9uKGNvbmZpZykge31cblxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yfSBmcm9tICcuL25lb24tYW5pbWF0YWJsZS1iZWhhdmlvci5qcyc7XG5cbi8qKlxuICogYE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvcmAgYWRkcyBhIG1ldGhvZCB0byBydW4gYW5pbWF0aW9ucy5cbiAqXG4gKiBAcG9seW1lckJlaGF2aW9yIE5lb25BbmltYXRpb25SdW5uZXJCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgTmVvbkFuaW1hdGlvblJ1bm5lckJlaGF2aW9ySW1wbCA9IHtcblxuICBfY29uZmlndXJlQW5pbWF0aW9uczogZnVuY3Rpb24oY29uZmlncykge1xuICAgIHZhciByZXN1bHRzID0gW107XG4gICAgdmFyIHJlc3VsdHNUb1BsYXkgPSBbXTtcblxuICAgIGlmIChjb25maWdzLmxlbmd0aCA+IDApIHtcbiAgICAgIGZvciAobGV0IGNvbmZpZywgaW5kZXggPSAwOyBjb25maWcgPSBjb25maWdzW2luZGV4XTsgaW5kZXgrKykge1xuICAgICAgICBsZXQgbmVvbkFuaW1hdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoY29uZmlnLm5hbWUpO1xuICAgICAgICAvLyBpcyB0aGlzIGVsZW1lbnQgYWN0dWFsbHkgYSBuZW9uIGFuaW1hdGlvbj9cbiAgICAgICAgaWYgKG5lb25BbmltYXRpb24uaXNOZW9uQW5pbWF0aW9uKSB7XG4gICAgICAgICAgbGV0IHJlc3VsdCA9IG51bGw7XG4gICAgICAgICAgLy8gQ2xvc3VyZSBjb21waWxlciBkb2VzIG5vdCB3b3JrIHdlbGwgd2l0aCBhIHRyeSAvIGNhdGNoIGhlcmUuXG4gICAgICAgICAgLy8gLmNvbmZpZ3VyZSBuZWVkcyB0byBiZSBleHBsaWNpdGx5IGRlZmluZWRcbiAgICAgICAgICBpZiAoIW5lb25BbmltYXRpb24uY29uZmlndXJlKSB7XG4gICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAqIEBwYXJhbSB7T2JqZWN0fSBjb25maWdcbiAgICAgICAgICAgICAqIEByZXR1cm4ge0FuaW1hdGlvbkVmZmVjdFJlYWRPbmx5fVxuICAgICAgICAgICAgICovXG4gICAgICAgICAgICBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZSA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXN1bHQgPSBuZW9uQW5pbWF0aW9uLmNvbmZpZ3VyZShjb25maWcpO1xuICAgICAgICAgIHJlc3VsdHNUb1BsYXkucHVzaCh7XG4gICAgICAgICAgICByZXN1bHQ6IHJlc3VsdCxcbiAgICAgICAgICAgIGNvbmZpZzogY29uZmlnLFxuICAgICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4odGhpcy5pcyArICc6JywgY29uZmlnLm5hbWUsICdub3QgZm91bmQhJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHJlc3VsdHNUb1BsYXkubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxldCByZXN1bHQgPSByZXN1bHRzVG9QbGF5W2ldLnJlc3VsdDtcbiAgICAgIGxldCBjb25maWcgPSByZXN1bHRzVG9QbGF5W2ldLmNvbmZpZztcbiAgICAgIGxldCBuZW9uQW5pbWF0aW9uID0gcmVzdWx0c1RvUGxheVtpXS5uZW9uQW5pbWF0aW9uO1xuICAgICAgLy8gY29uZmlndXJhdGlvbiBvciBwbGF5IGNvdWxkIGZhaWwgaWYgcG9seWZpbGxzIGFyZW4ndCBsb2FkZWRcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHdlIGhhdmUgYW4gRWZmZWN0IHJhdGhlciB0aGFuIGFuIEFuaW1hdGlvblxuICAgICAgICBpZiAodHlwZW9mIHJlc3VsdC5jYW5jZWwgIT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgIHJlc3VsdCA9IGRvY3VtZW50LnRpbWVsaW5lLnBsYXkocmVzdWx0KTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgICAgICBjb25zb2xlLndhcm4oJ0NvdWxkbnQgcGxheScsICcoJywgY29uZmlnLm5hbWUsICcpLicsIGUpO1xuICAgICAgfVxuXG4gICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgIHJlc3VsdHMucHVzaCh7XG4gICAgICAgICAgbmVvbkFuaW1hdGlvbjogbmVvbkFuaW1hdGlvbixcbiAgICAgICAgICBjb25maWc6IGNvbmZpZyxcbiAgICAgICAgICBhbmltYXRpb246IHJlc3VsdCxcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdHM7XG4gIH0sXG5cbiAgX3Nob3VsZENvbXBsZXRlOiBmdW5jdGlvbihhY3RpdmVFbnRyaWVzKSB7XG4gICAgdmFyIGZpbmlzaGVkID0gdHJ1ZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFjdGl2ZUVudHJpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5wbGF5U3RhdGUgIT0gJ2ZpbmlzaGVkJykge1xuICAgICAgICBmaW5pc2hlZCA9IGZhbHNlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZpbmlzaGVkO1xuICB9LFxuXG4gIF9jb21wbGV0ZTogZnVuY3Rpb24oYWN0aXZlRW50cmllcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5uZW9uQW5pbWF0aW9uLmNvbXBsZXRlKGFjdGl2ZUVudHJpZXNbaV0uY29uZmlnKTtcbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhY3RpdmVFbnRyaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBhY3RpdmVFbnRyaWVzW2ldLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFBsYXlzIGFuIGFuaW1hdGlvbiB3aXRoIGFuIG9wdGlvbmFsIGB0eXBlYC5cbiAgICogQHBhcmFtIHtzdHJpbmc9fSB0eXBlXG4gICAqIEBwYXJhbSB7IU9iamVjdD19IGNvb2tpZVxuICAgKi9cbiAgcGxheUFuaW1hdGlvbjogZnVuY3Rpb24odHlwZSwgY29va2llKSB7XG4gICAgdmFyIGNvbmZpZ3MgPSB0aGlzLmdldEFuaW1hdGlvbkNvbmZpZyh0eXBlKTtcbiAgICBpZiAoIWNvbmZpZ3MpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fYWN0aXZlID0gdGhpcy5fYWN0aXZlIHx8IHt9O1xuICAgIGlmICh0aGlzLl9hY3RpdmVbdHlwZV0pIHtcbiAgICAgIHRoaXMuX2NvbXBsZXRlKHRoaXMuX2FjdGl2ZVt0eXBlXSk7XG4gICAgICBkZWxldGUgdGhpcy5fYWN0aXZlW3R5cGVdO1xuICAgIH1cblxuICAgIHZhciBhY3RpdmVFbnRyaWVzID0gdGhpcy5fY29uZmlndXJlQW5pbWF0aW9ucyhjb25maWdzKTtcblxuICAgIGlmIChhY3RpdmVFbnRyaWVzLmxlbmd0aCA9PSAwKSB7XG4gICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aXZlW3R5cGVdID0gYWN0aXZlRW50cmllcztcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYWN0aXZlRW50cmllcy5sZW5ndGg7IGkrKykge1xuICAgICAgYWN0aXZlRW50cmllc1tpXS5hbmltYXRpb24ub25maW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZENvbXBsZXRlKGFjdGl2ZUVudHJpZXMpKSB7XG4gICAgICAgICAgdGhpcy5fY29tcGxldGUoYWN0aXZlRW50cmllcyk7XG4gICAgICAgICAgZGVsZXRlIHRoaXMuX2FjdGl2ZVt0eXBlXTtcbiAgICAgICAgICB0aGlzLmZpcmUoJ25lb24tYW5pbWF0aW9uLWZpbmlzaCcsIGNvb2tpZSwge2J1YmJsZXM6IGZhbHNlfSk7XG4gICAgICAgIH1cbiAgICAgIH0uYmluZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIGN1cnJlbnRseSBydW5uaW5nIGFuaW1hdGlvbnMuXG4gICAqL1xuICBjYW5jZWxBbmltYXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGZvciAodmFyIGsgaW4gdGhpcy5fYWN0aXZlKSB7XG4gICAgICB2YXIgZW50cmllcyA9IHRoaXMuX2FjdGl2ZVtrXVxuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogaW4gZW50cmllcykge1xuICAgICAgICBlbnRyaWVzW2pdLmFuaW1hdGlvbi5jYW5jZWwoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3RpdmUgPSB7fTtcbiAgfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3IgPVxuICAgIFtOZW9uQW5pbWF0YWJsZUJlaGF2aW9yLCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWljb25zZXQtc3ZnL2lyb24taWNvbnNldC1zdmcuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgIGA8aXJvbi1pY29uc2V0LXN2ZyBuYW1lPVwicGFwZXItZHJvcGRvd24tbWVudVwiIHNpemU9XCIyNFwiPlxuPHN2Zz48ZGVmcz5cbjxnIGlkPVwiYXJyb3ctZHJvcC1kb3duXCI+PHBhdGggZD1cIk03IDEwbDUgNSA1LTV6XCI+PC9wYXRoPjwvZz5cbjwvZGVmcz48L3N2Zz5cbjwvaXJvbi1pY29uc2V0LXN2Zz5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2RlZmF1bHQtdGhlbWUuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPVxuICAgIGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWRyb3Bkb3duLW1lbnUtc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcblxuICAgICAgICAvKiBOT1RFKGNkYXRhKTogQm90aCB2YWx1ZXMgYXJlIG5lZWRlZCwgc2luY2Ugc29tZSBwaG9uZXMgcmVxdWlyZSB0aGVcbiAgICAgICAgICogdmFsdWUgdG8gYmUgXFxgdHJhbnNwYXJlbnRcXGAuXG4gICAgICAgICAqL1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHJnYmEoMCwwLDAsMCk7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5cbiAgICAgICAgLS1wYXBlci1pbnB1dC1jb250YWluZXItaW5wdXQ6IHtcbiAgICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9O1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRyb3Bkb3duLW1lbnU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1kaXNhYmxlZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25vaW5rXSkgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW25vLWxhYmVsLWZsb2F0XSkgcGFwZXItcmlwcGxlIHtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIHBhcGVyLXJpcHBsZSB7XG4gICAgICAgIHRvcDogMTJweDtcbiAgICAgICAgbGVmdDogMHB4O1xuICAgICAgICBib3R0b206IDhweDtcbiAgICAgICAgcmlnaHQ6IDBweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LXJpcHBsZTtcbiAgICAgIH1cblxuICAgICAgcGFwZXItbWVudS1idXR0b24ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcGFkZGluZzogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWJ1dHRvbjtcbiAgICAgIH1cblxuICAgICAgcGFwZXItaW5wdXQge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kcm9wZG93bi1tZW51LWlucHV0O1xuICAgICAgfVxuXG4gICAgICBpcm9uLWljb24ge1xuICAgICAgICBjb2xvcjogdmFyKC0tZGlzYWJsZWQtdGV4dC1jb2xvcik7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZHJvcGRvd24tbWVudS1pY29uO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1pbnB1dC9wYXBlci1pbnB1dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLW1lbnUtYnV0dG9uL3BhcGVyLW1lbnUtYnV0dG9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItcmlwcGxlL3BhcGVyLXJpcHBsZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnLi9wYXBlci1kcm9wZG93bi1tZW51LWljb25zLmpzJztcbmltcG9ydCAnLi9wYXBlci1kcm9wZG93bi1tZW51LXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uVmFsaWRhdGFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQgKiBhcyBnZXN0dXJlcyBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9nZXN0dXJlcy5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246IFtEcm9wZG93blxubWVudXNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9idXR0b25zLmh0bWwjYnV0dG9ucy1kcm9wZG93bi1idXR0b25zKVxuXG5gcGFwZXItZHJvcGRvd24tbWVudWAgaXMgc2ltaWxhciB0byBhIG5hdGl2ZSBicm93c2VyIHNlbGVjdCBlbGVtZW50LlxuYHBhcGVyLWRyb3Bkb3duLW1lbnVgIHdvcmtzIHdpdGggc2VsZWN0YWJsZSBjb250ZW50LiBUaGUgY3VycmVudGx5IHNlbGVjdGVkXG5pdGVtIGlzIGRpc3BsYXllZCBpbiB0aGUgY29udHJvbC4gSWYgbm8gaXRlbSBpcyBzZWxlY3RlZCwgdGhlIGBsYWJlbGAgaXNcbmRpc3BsYXllZCBpbnN0ZWFkLlxuXG5FeGFtcGxlOlxuXG4gICAgPHBhcGVyLWRyb3Bkb3duLW1lbnUgbGFiZWw9XCJZb3VyIGZhdm91cml0ZSBwYXN0cnlcIj5cbiAgICAgIDxwYXBlci1saXN0Ym94IHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCI+XG4gICAgICAgIDxwYXBlci1pdGVtPkNyb2lzc2FudDwvcGFwZXItaXRlbT5cbiAgICAgICAgPHBhcGVyLWl0ZW0+RG9udXQ8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPkZpbmFuY2llcjwvcGFwZXItaXRlbT5cbiAgICAgICAgPHBhcGVyLWl0ZW0+TWFkZWxlaW5lPC9wYXBlci1pdGVtPlxuICAgICAgPC9wYXBlci1saXN0Ym94PlxuICAgIDwvcGFwZXItZHJvcGRvd24tbWVudT5cblxuVGhpcyBleGFtcGxlIHJlbmRlcnMgYSBkcm9wZG93biBtZW51IHdpdGggNCBvcHRpb25zLlxuXG5UaGUgY2hpbGQgZWxlbWVudCB3aXRoIHRoZSBzbG90IGBkcm9wZG93bi1jb250ZW50YCBpcyB1c2VkIGFzIHRoZSBkcm9wZG93blxubWVudS4gVGhpcyBjYW4gYmUgYSBbYHBhcGVyLWxpc3Rib3hgXShwYXBlci1saXN0Ym94KSwgb3IgYW55IG90aGVyIG9yXG5lbGVtZW50IHRoYXQgYWN0cyBsaWtlIGFuIFtgaXJvbi1zZWxlY3RvcmBdKGlyb24tc2VsZWN0b3IpLlxuXG5TcGVjaWZpY2FsbHksIHRoZSBtZW51IGNoaWxkIG11c3QgZmlyZSBhblxuW2Bpcm9uLXNlbGVjdGBdKGlyb24tc2VsZWN0b3IjZXZlbnQtaXJvbi1zZWxlY3QpIGV2ZW50IHdoZW4gb25lIG9mIGl0c1xuY2hpbGRyZW4gaXMgc2VsZWN0ZWQsIGFuZCBhblxuW2Bpcm9uLWRlc2VsZWN0YF0oaXJvbi1zZWxlY3RvciNldmVudC1pcm9uLWRlc2VsZWN0KSBldmVudCB3aGVuIGEgY2hpbGQgaXNcbmRlc2VsZWN0ZWQuIFRoZSBzZWxlY3RlZCBvciBkZXNlbGVjdGVkIGl0ZW0gbXVzdCBiZSBwYXNzZWQgYXMgdGhlIGV2ZW50J3NcbmBkZXRhaWwuaXRlbWAgcHJvcGVydHkuXG5cbkFwcGxpY2F0aW9ucyBjYW4gbGlzdGVuIGZvciB0aGUgYGlyb24tc2VsZWN0YCBhbmQgYGlyb24tZGVzZWxlY3RgIGV2ZW50c1xudG8gcmVhY3Qgd2hlbiBvcHRpb25zIGFyZSBzZWxlY3RlZCBhbmQgZGVzZWxlY3RlZC5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhbHNvIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItZHJvcGRvd24tbWVudWAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgZWxlbWVudCBob3N0IHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1kaXNhYmxlZGAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgZWxlbWVudCBob3N0IHdoZW4gZGlzYWJsZWQgfCBge31gXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LXJpcHBsZWAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgcmlwcGxlIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1idXR0b25gIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIG1lbnUgYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItZHJvcGRvd24tbWVudS1pbnB1dGAgfCBBIG1peGluIHRoYXQgaXMgYXBwbGllZCB0byB0aGUgaW50ZXJuYWwgcGFwZXIgaW5wdXQgfCBge31gXG5gLS1wYXBlci1kcm9wZG93bi1tZW51LWljb25gIHwgQSBtaXhpbiB0aGF0IGlzIGFwcGxpZWQgdG8gdGhlIGludGVybmFsIGljb24gfCBge31gXG5cbllvdSBjYW4gYWxzbyB1c2UgYW55IG9mIHRoZSBgcGFwZXItaW5wdXQtY29udGFpbmVyYCBhbmQgYHBhcGVyLW1lbnUtYnV0dG9uYFxuc3R5bGUgbWl4aW5zIGFuZCBjdXN0b20gcHJvcGVydGllcyB0byBzdHlsZSB0aGUgaW50ZXJuYWwgaW5wdXQgYW5kIG1lbnUgYnV0dG9uXG5yZXNwZWN0aXZlbHkuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItZHJvcGRvd24tbWVudVxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLWRyb3Bkb3duLW1lbnUtc2hhcmVkLXN0eWxlc1wiPjwvc3R5bGU+XG5cbiAgICA8IS0tIHRoaXMgZGl2IGZ1bGZpbGxzIGFuIGExMXkgcmVxdWlyZW1lbnQgZm9yIGNvbWJvYm94LCBkbyBub3QgcmVtb3ZlIC0tPlxuICAgIDxzcGFuIHJvbGU9XCJidXR0b25cIj48L3NwYW4+XG4gICAgPHBhcGVyLW1lbnUtYnV0dG9uIGlkPVwibWVudUJ1dHRvblwiIHZlcnRpY2FsLWFsaWduPVwiW1t2ZXJ0aWNhbEFsaWduXV1cIiBob3Jpem9udGFsLWFsaWduPVwiW1tob3Jpem9udGFsQWxpZ25dXVwiIGR5bmFtaWMtYWxpZ249XCJbW2R5bmFtaWNBbGlnbl1dXCIgdmVydGljYWwtb2Zmc2V0PVwiW1tfY29tcHV0ZU1lbnVWZXJ0aWNhbE9mZnNldChub0xhYmVsRmxvYXQsIHZlcnRpY2FsT2Zmc2V0KV1dXCIgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIiBuby1hbmltYXRpb25zPVwiW1tub0FuaW1hdGlvbnNdXVwiIG9uLWlyb24tc2VsZWN0PVwiX29uSXJvblNlbGVjdFwiIG9uLWlyb24tZGVzZWxlY3Q9XCJfb25Jcm9uRGVzZWxlY3RcIiBvcGVuZWQ9XCJ7e29wZW5lZH19XCIgY2xvc2Utb24tYWN0aXZhdGUgYWxsb3ctb3V0c2lkZS1zY3JvbGw9XCJbW2FsbG93T3V0c2lkZVNjcm9sbF1dXCIgcmVzdG9yZS1mb2N1cy1vbi1jbG9zZT1cIltbcmVzdG9yZUZvY3VzT25DbG9zZV1dXCI+XG4gICAgICA8IS0tIHN1cHBvcnQgaHlicmlkIG1vZGU6IHVzZXIgbWlnaHQgYmUgdXNpbmcgcGFwZXItbWVudS1idXR0b24gMS54IHdoaWNoIGRpc3RyaWJ1dGVzIHZpYSA8Y29udGVudD4gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiZHJvcGRvd24tdHJpZ2dlclwiIHNsb3Q9XCJkcm9wZG93bi10cmlnZ2VyXCI+XG4gICAgICAgIDxwYXBlci1yaXBwbGU+PC9wYXBlci1yaXBwbGU+XG4gICAgICAgIDwhLS0gcGFwZXItaW5wdXQgaGFzIHR5cGU9XCJ0ZXh0XCIgZm9yIGExMXksIGRvIG5vdCByZW1vdmUgLS0+XG4gICAgICAgIDxwYXBlci1pbnB1dCB0eXBlPVwidGV4dFwiIGludmFsaWQ9XCJbW2ludmFsaWRdXVwiIHJlYWRvbmx5IGRpc2FibGVkPVwiW1tkaXNhYmxlZF1dXCIgdmFsdWU9XCJbW3ZhbHVlXV1cIiBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJdXVwiIGVycm9yLW1lc3NhZ2U9XCJbW2Vycm9yTWVzc2FnZV1dXCIgYWx3YXlzLWZsb2F0LWxhYmVsPVwiW1thbHdheXNGbG9hdExhYmVsXV1cIiBuby1sYWJlbC1mbG9hdD1cIltbbm9MYWJlbEZsb2F0XV1cIiBsYWJlbD1cIltbbGFiZWxdXVwiPlxuICAgICAgICAgIDwhLS0gc3VwcG9ydCBoeWJyaWQgbW9kZTogdXNlciBtaWdodCBiZSB1c2luZyBwYXBlci1pbnB1dCAxLnggd2hpY2ggZGlzdHJpYnV0ZXMgdmlhIDxjb250ZW50PiAtLT5cbiAgICAgICAgICA8aXJvbi1pY29uIGljb249XCJwYXBlci1kcm9wZG93bi1tZW51OmFycm93LWRyb3AtZG93blwiIHN1ZmZpeCBzbG90PVwic3VmZml4XCI+PC9pcm9uLWljb24+XG4gICAgICAgIDwvcGFwZXItaW5wdXQ+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzbG90IGlkPVwiY29udGVudFwiIG5hbWU9XCJkcm9wZG93bi1jb250ZW50XCIgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIj48L3Nsb3Q+XG4gICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cbmAsXG5cbiAgaXM6ICdwYXBlci1kcm9wZG93bi1tZW51JyxcblxuICBiZWhhdmlvcnM6IFtcbiAgICBJcm9uQnV0dG9uU3RhdGUsXG4gICAgSXJvbkNvbnRyb2xTdGF0ZSxcbiAgICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgICBJcm9uVmFsaWRhdGFibGVCZWhhdmlvclxuICBdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZGVyaXZlZCBcImxhYmVsXCIgb2YgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBpdGVtLiBUaGlzIHZhbHVlXG4gICAgICogaXMgdGhlIGBsYWJlbGAgcHJvcGVydHkgb24gdGhlIHNlbGVjdGVkIGl0ZW0gaWYgc2V0LCBvciBlbHNlIHRoZVxuICAgICAqIHRyaW1tZWQgdGV4dCBjb250ZW50IG9mIHRoZSBzZWxlY3RlZCBpdGVtLlxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbUxhYmVsOiB7dHlwZTogU3RyaW5nLCBub3RpZnk6IHRydWUsIHJlYWRPbmx5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYXN0IHNlbGVjdGVkIGl0ZW0uIEFuIGl0ZW0gaXMgc2VsZWN0ZWQgaWYgdGhlIGRyb3Bkb3duIG1lbnUgaGFzXG4gICAgICogYSBjaGlsZCB3aXRoIHNsb3QgYGRyb3Bkb3duLWNvbnRlbnRgLCBhbmQgdGhhdCBjaGlsZCB0cmlnZ2VycyBhblxuICAgICAqIGBpcm9uLXNlbGVjdGAgZXZlbnQgd2l0aCB0aGUgc2VsZWN0ZWQgYGl0ZW1gIGluIHRoZSBgZGV0YWlsYC5cbiAgICAgKlxuICAgICAqIEB0eXBlIHs/T2JqZWN0fVxuICAgICAqL1xuICAgIHNlbGVjdGVkSXRlbToge3R5cGU6IE9iamVjdCwgbm90aWZ5OiB0cnVlLCByZWFkT25seTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudCB0aGF0IHdpbGwgYmUgdXNlZCB3aGVuIHN1Ym1pdHRpbmcgaW5cbiAgICAgKiBhIGZvcm0uIEl0IHJlZmxlY3RzIHRoZSB2YWx1ZSBvZiBgc2VsZWN0ZWRJdGVtTGFiZWxgLiBJZiBzZXQgZGlyZWN0bHksXG4gICAgICogaXQgd2lsbCBub3QgdXBkYXRlIHRoZSBgc2VsZWN0ZWRJdGVtTGFiZWxgIHZhbHVlLlxuICAgICAqL1xuICAgIHZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBub3RpZnk6IHRydWUsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBsYWJlbCBmb3IgdGhlIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIGxhYmVsOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBwbGFjZWhvbGRlciBmb3IgdGhlIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBlcnJvciBtZXNzYWdlIHRvIGRpc3BsYXkgd2hlbiBpbnZhbGlkLlxuICAgICAqL1xuICAgIGVycm9yTWVzc2FnZToge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBkcm9wZG93biBpcyBvcGVuLiBPdGhlcndpc2UsIGZhbHNlLlxuICAgICAqL1xuICAgIG9wZW5lZDpcbiAgICAgICAge3R5cGU6IEJvb2xlYW4sIG5vdGlmeTogdHJ1ZSwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBCeSBkZWZhdWx0LCB0aGUgZHJvcGRvd24gd2lsbCBjb25zdHJhaW4gc2Nyb2xsaW5nIG9uIHRoZSBwYWdlXG4gICAgICogdG8gaXRzZWxmIHdoZW4gb3BlbmVkLlxuICAgICAqIFNldCB0byB0cnVlIGluIG9yZGVyIHRvIHByZXZlbnQgc2Nyb2xsIGZyb20gYmVpbmcgY29uc3RyYWluZWRcbiAgICAgKiB0byB0aGUgZHJvcGRvd24gd2hlbiBpdCBvcGVucy5cbiAgICAgKi9cbiAgICBhbGxvd091dHNpZGVTY3JvbGw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSB0aGUgZmxvYXRpbmcgbGFiZWwuIEJpbmQgdGhpcyB0byB0aGVcbiAgICAgKiBgPHBhcGVyLWlucHV0LWNvbnRhaW5lcj5gJ3MgYG5vTGFiZWxGbG9hdGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgbm9MYWJlbEZsb2F0OiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gYWx3YXlzIGZsb2F0IHRoZSBsYWJlbC4gQmluZCB0aGlzIHRvIHRoZVxuICAgICAqIGA8cGFwZXItaW5wdXQtY29udGFpbmVyPmAncyBgYWx3YXlzRmxvYXRMYWJlbGAgcHJvcGVydHkuXG4gICAgICovXG4gICAgYWx3YXlzRmxvYXRMYWJlbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGFuaW1hdGlvbnMgd2hlbiBvcGVuaW5nIGFuZCBjbG9zaW5nIHRoZVxuICAgICAqIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIG5vQW5pbWF0aW9uczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgbWVudSBkcm9wZG93blxuICAgICAqIGhvcml6b250YWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAncmlnaHQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBvcmllbnRhdGlvbiBhZ2FpbnN0IHdoaWNoIHRvIGFsaWduIHRoZSBtZW51IGRyb3Bkb3duXG4gICAgICogdmVydGljYWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbEFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ3RvcCd9LFxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGVzIHRoZSB2ZXJ0aWNhbCBvZmZzZXQgY29tcHV0ZWQgaW5cbiAgICAgKiBfY29tcHV0ZU1lbnVWZXJ0aWNhbE9mZnNldC5cbiAgICAgKi9cbiAgICB2ZXJ0aWNhbE9mZnNldDogTnVtYmVyLFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGBob3Jpem9udGFsQWxpZ25gIGFuZCBgdmVydGljYWxBbGlnbmAgcHJvcGVydGllcyB3aWxsXG4gICAgICogYmUgY29uc2lkZXJlZCBwcmVmZXJlbmNlcyBpbnN0ZWFkIG9mIHN0cmljdCByZXF1aXJlbWVudHMgd2hlblxuICAgICAqIHBvc2l0aW9uaW5nIHRoZSBkcm9wZG93biBhbmQgbWF5IGJlIGNoYW5nZWQgaWYgZG9pbmcgc28gcmVkdWNlc1xuICAgICAqIHRoZSBhcmVhIG9mIHRoZSBkcm9wZG93biBmYWxsaW5nIG91dHNpZGUgb2YgYGZpdEludG9gLlxuICAgICAqL1xuICAgIGR5bmFtaWNBbGlnbjoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgLyoqXG4gICAgICogV2hldGhlciBmb2N1cyBzaG91bGQgYmUgcmVzdG9yZWQgdG8gdGhlIGRyb3Bkb3duIHdoZW4gdGhlIG1lbnUgY2xvc2VzLlxuICAgICAqL1xuICAgIHJlc3RvcmVGb2N1c09uQ2xvc2U6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogdHJ1ZX0sXG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7J3RhcCc6ICdfb25UYXAnfSxcblxuICAvKipcbiAgICogQHR5cGUgeyFPYmplY3R9XG4gICAqL1xuICBrZXlCaW5kaW5nczogeyd1cCBkb3duJzogJ29wZW4nLCAnZXNjJzogJ2Nsb3NlJ30sXG5cbiAgaG9zdEF0dHJpYnV0ZXM6XG4gICAgICB7cm9sZTogJ2NvbWJvYm94JywgJ2FyaWEtYXV0b2NvbXBsZXRlJzogJ25vbmUnLCAnYXJpYS1oYXNwb3B1cCc6ICd0cnVlJ30sXG5cbiAgb2JzZXJ2ZXJzOiBbJ19zZWxlY3RlZEl0ZW1DaGFuZ2VkKHNlbGVjdGVkSXRlbSknXSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gTk9URShjZGF0YSk6IER1ZSB0byB0aW1pbmcsIGEgcHJlc2VsZWN0ZWQgdmFsdWUgaW4gYSBgSXJvblNlbGVjdGFibGVgXG4gICAgLy8gY2hpbGQgd2lsbCBjYXVzZSBhbiBgaXJvbi1zZWxlY3RgIGV2ZW50IHRvIGZpcmUgd2hpbGUgdGhlIGVsZW1lbnQgaXNcbiAgICAvLyBzdGlsbCBpbiBhIGBEb2N1bWVudEZyYWdtZW50YC4gVGhpcyBoYXMgdGhlIGVmZmVjdCBvZiBjYXVzaW5nXG4gICAgLy8gaGFuZGxlcnMgbm90IHRvIGZpcmUuIFNvLCB3ZSBkb3VibGUgY2hlY2sgdGhpcyB2YWx1ZSBvbiBhdHRhY2hlZDpcbiAgICB2YXIgY29udGVudEVsZW1lbnQgPSB0aGlzLmNvbnRlbnRFbGVtZW50O1xuICAgIGlmIChjb250ZW50RWxlbWVudCAmJiBjb250ZW50RWxlbWVudC5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGVkSXRlbShjb250ZW50RWxlbWVudC5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgZWxlbWVudCB0aGF0IGlzIGNvbnRhaW5lZCBieSB0aGUgZHJvcGRvd24gbWVudSwgaWYgYW55LlxuICAgKi9cbiAgZ2V0IGNvbnRlbnRFbGVtZW50KCkge1xuICAgIC8vIFBvbHltZXIgMi54IHJldHVybnMgc2xvdC5hc3NpZ25lZE5vZGVzIHdoaWNoIGNhbiBjb250YWluIHRleHQgbm9kZXMuXG4gICAgdmFyIG5vZGVzID0gZG9tKHRoaXMuJC5jb250ZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChub2Rlc1tpXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2hvdyB0aGUgZHJvcGRvd24gY29udGVudC5cbiAgICovXG4gIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5tZW51QnV0dG9uLm9wZW4oKTtcbiAgfSxcblxuICAvKipcbiAgICogSGlkZSB0aGUgZHJvcGRvd24gY29udGVudC5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLiQubWVudUJ1dHRvbi5jbG9zZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBgaXJvbi1zZWxlY3RgIGlzIGZpcmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBbiBgaXJvbi1zZWxlY3RgIGV2ZW50LlxuICAgKi9cbiAgX29uSXJvblNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0oZXZlbnQuZGV0YWlsLml0ZW0pO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgdGhhdCBpcyBjYWxsZWQgd2hlbiBgaXJvbi1kZXNlbGVjdGAgaXMgZmlyZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEFuIGBpcm9uLWRlc2VsZWN0YCBldmVudC5cbiAgICovXG4gIF9vbklyb25EZXNlbGVjdDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB0aGlzLl9zZXRTZWxlY3RlZEl0ZW0obnVsbCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEEgaGFuZGxlciB0aGF0IGlzIGNhbGxlZCB3aGVuIHRoZSBkcm9wZG93biBpcyB0YXBwZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEgdGFwIGV2ZW50LlxuICAgKi9cbiAgX29uVGFwOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChnZXN0dXJlcy5maW5kT3JpZ2luYWxUYXJnZXQoZXZlbnQpID09PSB0aGlzKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbXB1dGUgdGhlIGxhYmVsIGZvciB0aGUgZHJvcGRvd24gZ2l2ZW4gYSBzZWxlY3RlZCBpdGVtLlxuICAgKlxuICAgKiBAcGFyYW0ge0VsZW1lbnR9IHNlbGVjdGVkSXRlbSBBIHNlbGVjdGVkIEVsZW1lbnQgaXRlbSwgd2l0aCBhblxuICAgKiBvcHRpb25hbCBgbGFiZWxgIHByb3BlcnR5LlxuICAgKi9cbiAgX3NlbGVjdGVkSXRlbUNoYW5nZWQ6IGZ1bmN0aW9uKHNlbGVjdGVkSXRlbSkge1xuICAgIHZhciB2YWx1ZSA9ICcnO1xuICAgIGlmICghc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB2YWx1ZSA9ICcnO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YWx1ZSA9IHNlbGVjdGVkSXRlbS5sYWJlbCB8fCBzZWxlY3RlZEl0ZW0uZ2V0QXR0cmlidXRlKCdsYWJlbCcpIHx8XG4gICAgICAgICAgc2VsZWN0ZWRJdGVtLnRleHRDb250ZW50LnRyaW0oKTtcbiAgICB9XG5cbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5fc2V0U2VsZWN0ZWRJdGVtTGFiZWwodmFsdWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDb21wdXRlIHRoZSB2ZXJ0aWNhbCBvZmZzZXQgb2YgdGhlIG1lbnUgYmFzZWQgb24gdGhlIHZhbHVlIG9mXG4gICAqIGBub0xhYmVsRmxvYXRgLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG5vTGFiZWxGbG9hdCBUcnVlIGlmIHRoZSBsYWJlbCBzaG91bGQgbm90IGZsb2F0XG4gICAqIEBwYXJhbSB7bnVtYmVyPX0gb3B0X3ZlcnRpY2FsT2Zmc2V0IE9wdGlvbmFsIG9mZnNldCBmcm9tIHRoZSB1c2VyXG4gICAqIGFib3ZlIHRoZSBpbnB1dCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgX2NvbXB1dGVNZW51VmVydGljYWxPZmZzZXQ6IGZ1bmN0aW9uKG5vTGFiZWxGbG9hdCwgb3B0X3ZlcnRpY2FsT2Zmc2V0KSB7XG4gICAgLy8gT3ZlcnJpZGUgb2Zmc2V0IGlmIGl0J3MgcGFzc2VkIGZyb20gdGhlIHVzZXIuXG4gICAgaWYgKG9wdF92ZXJ0aWNhbE9mZnNldCkge1xuICAgICAgcmV0dXJuIG9wdF92ZXJ0aWNhbE9mZnNldDtcbiAgICB9XG5cbiAgICAvLyBOT1RFKGNkYXRhKTogVGhlc2UgbnVtYmVycyBhcmUgc29tZXdoYXQgbWFnaWNhbCBiZWNhdXNlIHRoZXkgYXJlXG4gICAgLy8gZGVyaXZlZCBmcm9tIHRoZSBtZXRyaWNzIG9mIGVsZW1lbnRzIGludGVybmFsIHRvIGBwYXBlci1pbnB1dGAnc1xuICAgIC8vIHRlbXBsYXRlLiBUaGUgbWV0cmljcyB3aWxsIGNoYW5nZSBkZXBlbmRpbmcgb24gd2hldGhlciBvciBub3QgdGhlXG4gICAgLy8gaW5wdXQgaGFzIGEgZmxvYXRpbmcgbGFiZWwuXG4gICAgcmV0dXJuIG5vTGFiZWxGbG9hdCA/IC00IDogODtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyBmYWxzZSBpZiB0aGUgZWxlbWVudCBpcyByZXF1aXJlZCBhbmQgZG9lcyBub3QgaGF2ZSBhIHNlbGVjdGlvbixcbiAgICogYW5kIHRydWUgb3RoZXJ3aXNlLlxuICAgKiBAcGFyYW0geyo9fSBfdmFsdWUgSWdub3JlZC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gdHJ1ZSBpZiBgcmVxdWlyZWRgIGlzIGZhbHNlLCBvciBpZiBgcmVxdWlyZWRgIGlzIHRydWVcbiAgICogYW5kIHRoZSBlbGVtZW50IGhhcyBhIHZhbGlkIHNlbGVjdGlvbi5cbiAgICovXG4gIF9nZXRWYWxpZGl0eTogZnVuY3Rpb24oX3ZhbHVlKSB7XG4gICAgcmV0dXJuIHRoaXMuZGlzYWJsZWQgfHwgIXRoaXMucmVxdWlyZWQgfHwgKHRoaXMucmVxdWlyZWQgJiYgISF0aGlzLnZhbHVlKTtcbiAgfSxcblxuICBfb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9wZW5TdGF0ZSA9IHRoaXMub3BlbmVkID8gJ3RydWUnIDogJ2ZhbHNlJztcbiAgICB2YXIgZSA9IHRoaXMuY29udGVudEVsZW1lbnQ7XG4gICAgaWYgKGUpIHtcbiAgICAgIGUuc2V0QXR0cmlidXRlKCdhcmlhLWV4cGFuZGVkJywgb3BlblN0YXRlKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25CdXR0b25TdGF0ZX0gZnJvbSAnQHBvbHltZXIvaXJvbi1iZWhhdmlvcnMvaXJvbi1idXR0b24tc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuXG4vKlxuYFBhcGVySXRlbUJlaGF2aW9yYCBpcyBhIGNvbnZlbmllbmNlIGJlaGF2aW9yIHNoYXJlZCBieSA8cGFwZXItaXRlbT4gYW5kXG48cGFwZXItaWNvbi1pdGVtPiB0aGF0IG1hbmFnZXMgdGhlIHNoYXJlZCBjb250cm9sIHN0YXRlcyBhbmQgYXR0cmlidXRlcyBvZlxudGhlIGl0ZW1zLlxuKi9cbi8qKiBAcG9seW1lckJlaGF2aW9yIFBhcGVySXRlbUJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJJdGVtQmVoYXZpb3JJbXBsID0ge1xuICBob3N0QXR0cmlidXRlczoge3JvbGU6ICdvcHRpb24nLCB0YWJpbmRleDogJzAnfVxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckl0ZW1CZWhhdmlvciA9XG4gICAgW0lyb25CdXR0b25TdGF0ZSwgSXJvbkNvbnRyb2xTdGF0ZSwgUGFwZXJJdGVtQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCwgLnBhcGVyLWl0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiB2YXIoLS1wYXBlci1pdGVtLW1pbi1oZWlnaHQsIDQ4cHgpO1xuICAgICAgICBwYWRkaW5nOiAwcHggMTZweDtcbiAgICAgIH1cblxuICAgICAgLnBhcGVyLWl0ZW0ge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXN1YmhlYWQ7XG4gICAgICAgIGJvcmRlcjpub25lO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSwgLnBhcGVyLWl0ZW1baGlkZGVuXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmlyb24tc2VsZWN0ZWQpLCAucGFwZXItaXRlbS5pcm9uLXNlbGVjdGVkIHtcbiAgICAgICAgZm9udC13ZWlnaHQ6IHZhcigtLXBhcGVyLWl0ZW0tc2VsZWN0ZWQtd2VpZ2h0LCBib2xkKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLXNlbGVjdGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSwgLnBhcGVyLWl0ZW1bZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWl0ZW0tZGlzYWJsZWQtY29sb3IsIHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6Zm9jdXMpLCAucGFwZXItaXRlbTpmb2N1cyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3V0bGluZTogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtLWZvY3VzZWQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpmb2N1cyk6YmVmb3JlLCAucGFwZXItaXRlbTpmb2N1czpiZWZvcmUge1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZml0O1xuXG4gICAgICAgIGJhY2tncm91bmQ6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWRhcmstZGl2aWRlci1vcGFjaXR5KTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItaXRlbS1mb2N1c2VkLWJlZm9yZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnLi9wYXBlci1pdGVtLXNoYXJlZC1zdHlsZXMuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5pbXBvcnQge1BhcGVySXRlbUJlaGF2aW9yfSBmcm9tICcuL3BhcGVyLWl0ZW0tYmVoYXZpb3IuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltMaXN0c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2xpc3RzLmh0bWwpXG5cbmA8cGFwZXItaXRlbT5gIGlzIGFuIGludGVyYWN0aXZlIGxpc3QgaXRlbS4gQnkgZGVmYXVsdCwgaXQgaXMgYSBob3Jpem9udGFsXG5mbGV4Ym94LlxuXG4gICAgPHBhcGVyLWl0ZW0+SXRlbTwvcGFwZXItaXRlbT5cblxuVXNlIHRoaXMgZWxlbWVudCB3aXRoIGA8cGFwZXItaXRlbS1ib2R5PmAgdG8gbWFrZSBNYXRlcmlhbCBEZXNpZ24gc3R5bGVkXG50d28tbGluZSBhbmQgdGhyZWUtbGluZSBpdGVtcy5cblxuICAgIDxwYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0tYm9keSB0d28tbGluZT5cbiAgICAgICAgPGRpdj5TaG93IHlvdXIgc3RhdHVzPC9kaXY+XG4gICAgICAgIDxkaXYgc2Vjb25kYXJ5PllvdXIgc3RhdHVzIGlzIHZpc2libGUgdG8gZXZlcnlvbmU8L2Rpdj5cbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPGlyb24taWNvbiBpY29uPVwid2FybmluZ1wiPjwvaXJvbi1pY29uPlxuICAgIDwvcGFwZXItaXRlbT5cblxuVG8gdXNlIGBwYXBlci1pdGVtYCBhcyBhIGxpbmssIHdyYXAgaXQgaW4gYW4gYW5jaG9yIHRhZy4gU2luY2UgYHBhcGVyLWl0ZW1gIHdpbGxcbmFscmVhZHkgcmVjZWl2ZSBmb2N1cywgeW91IG1heSB3YW50IHRvIHByZXZlbnQgdGhlIGFuY2hvciB0YWcgZnJvbSByZWNlaXZpbmdcbmZvY3VzIGFzIHdlbGwgYnkgc2V0dGluZyBpdHMgdGFiaW5kZXggdG8gLTEuXG5cbiAgICA8YSBocmVmPVwiaHR0cHM6Ly93d3cucG9seW1lci1wcm9qZWN0Lm9yZy9cIiB0YWJpbmRleD1cIi0xXCI+XG4gICAgICA8cGFwZXItaXRlbSByYWlzZWQ+UG9seW1lciBQcm9qZWN0PC9wYXBlci1pdGVtPlxuICAgIDwvYT5cblxuSWYgeW91IGFyZSBjb25jZXJuZWQgYWJvdXQgcGVyZm9ybWFuY2UgYW5kIHdhbnQgdG8gdXNlIGBwYXBlci1pdGVtYCBpbiBhXG5gcGFwZXItbGlzdGJveGAgd2l0aCBtYW55IGl0ZW1zLCB5b3UgY2FuIGp1c3QgdXNlIGEgbmF0aXZlIGBidXR0b25gIHdpdGggdGhlXG5gcGFwZXItaXRlbWAgY2xhc3MgYXBwbGllZCAocHJvdmlkZWQgeW91IGhhdmUgY29ycmVjdGx5IGluY2x1ZGVkIHRoZSBzaGFyZWRcbnN0eWxlcyk6XG5cbiAgICA8c3R5bGUgaXM9XCJjdXN0b20tc3R5bGVcIiBpbmNsdWRlPVwicGFwZXItaXRlbS1zaGFyZWQtc3R5bGVzXCI+PC9zdHlsZT5cblxuICAgIDxwYXBlci1saXN0Ym94PlxuICAgICAgPGJ1dHRvbiBjbGFzcz1cInBhcGVyLWl0ZW1cIiByb2xlPVwib3B0aW9uXCI+SW5ib3g8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlN0YXJyZWQ8L2J1dHRvbj5cbiAgICAgIDxidXR0b24gY2xhc3M9XCJwYXBlci1pdGVtXCIgcm9sZT1cIm9wdGlvblwiPlNlbnQgbWFpbDwvYnV0dG9uPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWl0ZW0tbWluLWhlaWdodGAgfCBNaW5pbXVtIGhlaWdodCBvZiB0aGUgaXRlbSB8IGA0OHB4YFxuYC0tcGFwZXItaXRlbWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpdGVtIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZC13ZWlnaHRgIHwgVGhlIGZvbnQgd2VpZ2h0IG9mIGEgc2VsZWN0ZWQgaXRlbSB8IGBib2xkYFxuYC0tcGFwZXItaXRlbS1zZWxlY3RlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIHNlbGVjdGVkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuYC0tcGFwZXItaXRlbS1kaXNhYmxlZC1jb2xvcmAgfCBUaGUgY29sb3IgZm9yIGRpc2FibGVkIHBhcGVyLWl0ZW1zIHwgYC0tZGlzYWJsZWQtdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWl0ZW0tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byBkaXNhYmxlZCBwYXBlci1pdGVtcyB8IGB7fWBcbmAtLXBhcGVyLWl0ZW0tZm9jdXNlZGAgfCBNaXhpbiBhcHBsaWVkIHRvIGZvY3VzZWQgcGFwZXItaXRlbXMgfCBge31gXG5gLS1wYXBlci1pdGVtLWZvY3VzZWQtYmVmb3JlYCB8IE1peGluIGFwcGxpZWQgdG8gOmJlZm9yZSBmb2N1c2VkIHBhcGVyLWl0ZW1zIHwgYHt9YFxuXG4jIyMgQWNjZXNzaWJpbGl0eVxuXG5UaGlzIGVsZW1lbnQgaGFzIGByb2xlPVwibGlzdGl0ZW1cImAgYnkgZGVmYXVsdC4gRGVwZW5kaW5nIG9uIHVzYWdlLCBpdCBtYXkgYmVcbm1vcmUgYXBwcm9wcmlhdGUgdG8gc2V0IGByb2xlPVwibWVudWl0ZW1cImAsIGByb2xlPVwibWVudWl0ZW1jaGVja2JveFwiYCBvclxuYHJvbGU9XCJtZW51aXRlbXJhZGlvXCJgLlxuXG4gICAgPHBhcGVyLWl0ZW0gcm9sZT1cIm1lbnVpdGVtY2hlY2tib3hcIj5cbiAgICAgIDxwYXBlci1pdGVtLWJvZHk+XG4gICAgICAgIFNob3cgeW91ciBzdGF0dXNcbiAgICAgIDwvcGFwZXItaXRlbS1ib2R5PlxuICAgICAgPHBhcGVyLWNoZWNrYm94PjwvcGFwZXItY2hlY2tib3g+XG4gICAgPC9wYXBlci1pdGVtPlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLWl0ZW1cbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJwYXBlci1pdGVtLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtc3ViaGVhZDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1pdGVtO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWl0ZW0nLFxuICBiZWhhdmlvcnM6IFtQYXBlckl0ZW1CZWhhdmlvcl1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7SXJvbk1lbnVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZW51LWJlaGF2aW9yL2lyb24tbWVudS1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbk1hdGVyaWFsIGRlc2lnbjpcbltNZW51c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL21lbnVzLmh0bWwpXG5cbmA8cGFwZXItbGlzdGJveD5gIGltcGxlbWVudHMgYW4gYWNjZXNzaWJsZSBsaXN0Ym94IGNvbnRyb2wgd2l0aCBNYXRlcmlhbCBEZXNpZ25cbnN0eWxpbmcuIFRoZSBmb2N1c2VkIGl0ZW0gaXMgaGlnaGxpZ2h0ZWQsIGFuZCB0aGUgc2VsZWN0ZWQgaXRlbSBoYXMgYm9sZGVkIHRleHQuXG5cbiAgICA8cGFwZXItbGlzdGJveD5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMTwvcGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMjwvcGFwZXItaXRlbT5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbkFuIGluaXRpYWwgc2VsZWN0aW9uIGNhbiBiZSBzcGVjaWZpZWQgd2l0aCB0aGUgYHNlbGVjdGVkYCBhdHRyaWJ1dGUuXG5cbiAgICA8cGFwZXItbGlzdGJveCBzZWxlY3RlZD1cIjBcIj5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMTwvcGFwZXItaXRlbT5cbiAgICAgIDxwYXBlci1pdGVtPkl0ZW0gMjwvcGFwZXItaXRlbT5cbiAgICA8L3BhcGVyLWxpc3Rib3g+XG5cbk1ha2UgYSBtdWx0aS1zZWxlY3QgbGlzdGJveCB3aXRoIHRoZSBgbXVsdGlgIGF0dHJpYnV0ZS4gSXRlbXMgaW4gYSBtdWx0aS1zZWxlY3Rcbmxpc3Rib3ggY2FuIGJlIGRlc2VsZWN0ZWQsIGFuZCBtdWx0aXBsZSBpdGVtIGNhbiBiZSBzZWxlY3RlZC5cblxuICAgIDxwYXBlci1saXN0Ym94IG11bHRpPlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAxPC9wYXBlci1pdGVtPlxuICAgICAgPHBhcGVyLWl0ZW0+SXRlbSAyPC9wYXBlci1pdGVtPlxuICAgIDwvcGFwZXItbGlzdGJveD5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWxpc3Rib3gtYmFja2dyb3VuZC1jb2xvcmAgICB8IE1lbnUgYmFja2dyb3VuZCBjb2xvciB8XG5gLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3JgXG5gLS1wYXBlci1saXN0Ym94LWNvbG9yYCAgICAgICAgICAgICAgfCBNZW51IGZvcmVncm91bmQgY29sb3IgfFxuYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItbGlzdGJveGAgICAgICAgICAgICAgICAgICAgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgbGlzdGJveCB8IGB7fWBcblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuYDxwYXBlci1saXN0Ym94PmAgaGFzIGByb2xlPVwibGlzdGJveFwiYCBieSBkZWZhdWx0LiBBIG11bHRpLXNlbGVjdCBsaXN0Ym94IHdpbGxcbmFsc28gaGF2ZSBgYXJpYS1tdWx0aXNlbGVjdGFibGVgIHNldC4gSXQgaW1wbGVtZW50cyBrZXkgYmluZGluZ3MgdG8gbmF2aWdhdGVcbnRocm91Z2ggdGhlIGxpc3Rib3ggd2l0aCB0aGUgdXAgYW5kIGRvd24gYXJyb3cga2V5cywgZXNjIHRvIGV4aXQgdGhlIGxpc3Rib3gsXG5hbmQgZW50ZXIgdG8gYWN0aXZhdGUgYSBsaXN0Ym94IGl0ZW0uIFR5cGluZyB0aGUgZmlyc3QgbGV0dGVyIG9mIGEgbGlzdGJveCBpdGVtXG53aWxsIGFsc28gZm9jdXMgaXQuXG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItbGlzdGJveFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1saXN0Ym94LWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItbGlzdGJveC1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbGlzdGJveDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ3BhcGVyLWxpc3Rib3gnLFxuICBiZWhhdmlvcnM6IFtJcm9uTWVudUJlaGF2aW9yXSxcblxuICAvKiogQHByaXZhdGUgKi9cbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAnbGlzdGJveCd9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtOZW9uQW5pbWF0aW9uQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuUG9seW1lcih7XG4gIGlzOiAncGFwZXItbWVudS1ncm93LWhlaWdodC1hbmltYXRpb24nLFxuXG4gIGJlaGF2aW9yczogW05lb25BbmltYXRpb25CZWhhdmlvcl0sXG5cbiAgY29uZmlndXJlOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgbm9kZSA9IGNvbmZpZy5ub2RlO1xuICAgIHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgaGVpZ2h0ID0gcmVjdC5oZWlnaHQ7XG5cbiAgICB0aGlzLl9lZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3QoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIFt7aGVpZ2h0OiAoaGVpZ2h0IC8gMikgKyAncHgnfSwge2hlaWdodDogaGVpZ2h0ICsgJ3B4J31dLFxuICAgICAgICB0aGlzLnRpbWluZ0Zyb21Db25maWcoY29uZmlnKSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0O1xuICB9XG59KTtcblxuUG9seW1lcih7XG4gIGlzOiAncGFwZXItbWVudS1ncm93LXdpZHRoLWFuaW1hdGlvbicsXG5cbiAgYmVoYXZpb3JzOiBbTmVvbkFuaW1hdGlvbkJlaGF2aW9yXSxcblxuICBjb25maWd1cmU6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBub2RlID0gY29uZmlnLm5vZGU7XG4gICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB3aWR0aCA9IHJlY3Qud2lkdGg7XG5cbiAgICB0aGlzLl9lZmZlY3QgPSBuZXcgS2V5ZnJhbWVFZmZlY3QoXG4gICAgICAgIG5vZGUsXG4gICAgICAgIFt7d2lkdGg6ICh3aWR0aCAvIDIpICsgJ3B4J30sIHt3aWR0aDogd2lkdGggKyAncHgnfV0sXG4gICAgICAgIHRoaXMudGltaW5nRnJvbUNvbmZpZyhjb25maWcpKTtcblxuICAgIHJldHVybiB0aGlzLl9lZmZlY3Q7XG4gIH1cbn0pO1xuXG5Qb2x5bWVyKHtcbiAgaXM6ICdwYXBlci1tZW51LXNocmluay13aWR0aC1hbmltYXRpb24nLFxuXG4gIGJlaGF2aW9yczogW05lb25BbmltYXRpb25CZWhhdmlvcl0sXG5cbiAgY29uZmlndXJlOiBmdW5jdGlvbihjb25maWcpIHtcbiAgICB2YXIgbm9kZSA9IGNvbmZpZy5ub2RlO1xuICAgIHZhciByZWN0ID0gbm9kZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB2YXIgd2lkdGggPSByZWN0LndpZHRoO1xuXG4gICAgdGhpcy5fZWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0KFxuICAgICAgICBub2RlLFxuICAgICAgICBbe3dpZHRoOiB3aWR0aCArICdweCd9LCB7d2lkdGg6IHdpZHRoIC0gKHdpZHRoIC8gMjApICsgJ3B4J31dLFxuICAgICAgICB0aGlzLnRpbWluZ0Zyb21Db25maWcoY29uZmlnKSk7XG5cbiAgICByZXR1cm4gdGhpcy5fZWZmZWN0O1xuICB9XG59KTtcblxuUG9seW1lcih7XG4gIGlzOiAncGFwZXItbWVudS1zaHJpbmstaGVpZ2h0LWFuaW1hdGlvbicsXG5cbiAgYmVoYXZpb3JzOiBbTmVvbkFuaW1hdGlvbkJlaGF2aW9yXSxcblxuICBjb25maWd1cmU6IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHZhciBub2RlID0gY29uZmlnLm5vZGU7XG4gICAgdmFyIHJlY3QgPSBub2RlLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBoZWlnaHQgPSByZWN0LmhlaWdodDtcblxuICAgIHRoaXMuc2V0UHJlZml4ZWRQcm9wZXJ0eShub2RlLCAndHJhbnNmb3JtT3JpZ2luJywgJzAgMCcpO1xuXG4gICAgdGhpcy5fZWZmZWN0ID0gbmV3IEtleWZyYW1lRWZmZWN0KFxuICAgICAgICBub2RlLFxuICAgICAgICBbXG4gICAgICAgICAge2hlaWdodDogaGVpZ2h0ICsgJ3B4JywgdHJhbnNmb3JtOiAndHJhbnNsYXRlWSgwKSd9LFxuICAgICAgICAgIHtoZWlnaHQ6IGhlaWdodCAvIDIgKyAncHgnLCB0cmFuc2Zvcm06ICd0cmFuc2xhdGVZKC0yMHB4KSd9XG4gICAgICAgIF0sXG4gICAgICAgIHRoaXMudGltaW5nRnJvbUNvbmZpZyhjb25maWcpKTtcblxuICAgIHJldHVybiB0aGlzLl9lZmZlY3Q7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWRyb3Bkb3duL2lyb24tZHJvcGRvd24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9uZW9uLWFuaW1hdGlvbi9hbmltYXRpb25zL2ZhZGUtaW4tYW5pbWF0aW9uLmpzJztcbmltcG9ydCAnQHBvbHltZXIvbmVvbi1hbmltYXRpb24vYW5pbWF0aW9ucy9mYWRlLW91dC1hbmltYXRpb24uanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9zaGFkb3cuanMnO1xuaW1wb3J0ICcuL3BhcGVyLW1lbnUtYnV0dG9uLWFuaW1hdGlvbnMuanMnO1xuXG5pbXBvcnQge0lyb25BMTF5S2V5c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge0lyb25Db250cm9sU3RhdGV9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYmVoYXZpb3JzL2lyb24tY29udHJvbC1zdGF0ZS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbnZhciBjb25maWcgPSB7XG4gIEFOSU1BVElPTl9DVUJJQ19CRVpJRVI6ICdjdWJpYy1iZXppZXIoLjMsLjk1LC41LDEpJyxcbiAgTUFYX0FOSU1BVElPTl9USU1FX01TOiA0MDBcbn07XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbRHJvcGRvd25cbmJ1dHRvbnNdKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9idXR0b25zLmh0bWwjYnV0dG9ucy1kcm9wZG93bi1idXR0b25zKVxuXG5gcGFwZXItbWVudS1idXR0b25gIGFsbG93cyBvbmUgdG8gY29tcG9zZSBhIGRlc2lnbmF0ZWQgXCJ0cmlnZ2VyXCIgZWxlbWVudCB3aXRoXG5hbm90aGVyIGVsZW1lbnQgdGhhdCByZXByZXNlbnRzIFwiY29udGVudFwiLCB0byBjcmVhdGUgYSBkcm9wZG93biBtZW51IHRoYXRcbmRpc3BsYXlzIHRoZSBcImNvbnRlbnRcIiB3aGVuIHRoZSBcInRyaWdnZXJcIiBpcyBjbGlja2VkLlxuXG5UaGUgY2hpbGQgZWxlbWVudCBhc3NpZ25lZCB0byB0aGUgYGRyb3Bkb3duLXRyaWdnZXJgIHNsb3Qgd2lsbCBiZSB1c2VkIGFzIHRoZVxuXCJ0cmlnZ2VyXCIgZWxlbWVudC4gVGhlIGNoaWxkIGVsZW1lbnQgYXNzaWduZWQgdG8gdGhlIGBkcm9wZG93bi1jb250ZW50YCBzbG90XG53aWxsIGJlIHVzZWQgYXMgdGhlIFwiY29udGVudFwiIGVsZW1lbnQuXG5cblRoZSBgcGFwZXItbWVudS1idXR0b25gIGlzIHNlbnNpdGl2ZSB0byBpdHMgY29udGVudCdzIGBpcm9uLXNlbGVjdGAgZXZlbnRzLiBJZlxudGhlIFwiY29udGVudFwiIGVsZW1lbnQgdHJpZ2dlcnMgYW4gYGlyb24tc2VsZWN0YCBldmVudCwgdGhlIGBwYXBlci1tZW51LWJ1dHRvbmBcbndpbGwgY2xvc2UgYXV0b21hdGljYWxseS5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1tZW51LWJ1dHRvbj5cbiAgICAgIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwibWVudVwiXG5zbG90PVwiZHJvcGRvd24tdHJpZ2dlclwiPjwvcGFwZXItaWNvbi1idXR0b24+IDxwYXBlci1saXN0Ym94XG5zbG90PVwiZHJvcGRvd24tY29udGVudFwiPiA8cGFwZXItaXRlbT5TaGFyZTwvcGFwZXItaXRlbT5cbiAgICAgICAgPHBhcGVyLWl0ZW0+U2V0dGluZ3M8L3BhcGVyLWl0ZW0+XG4gICAgICAgIDxwYXBlci1pdGVtPkhlbHA8L3BhcGVyLWl0ZW0+XG4gICAgICA8L3BhcGVyLWxpc3Rib3g+XG4gICAgPC9wYXBlci1tZW51LWJ1dHRvbj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhbHNvIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItbWVudS1idXR0b24tZHJvcGRvd24tYmFja2dyb3VuZGAgfCBCYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSBwYXBlci1tZW51LWJ1dHRvbiBkcm9wZG93biB8IGAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLW1lbnUtYnV0dG9uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHBhcGVyLW1lbnUtYnV0dG9uIHwgYHt9YFxuYC0tcGFwZXItbWVudS1idXR0b24tZGlzYWJsZWRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgcGFwZXItbWVudS1idXR0b24gd2hlbiBkaXNhYmxlZCB8IGB7fWBcbmAtLXBhcGVyLW1lbnUtYnV0dG9uLWRyb3Bkb3duYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHBhcGVyLW1lbnUtYnV0dG9uIGRyb3Bkb3duIHwgYHt9YFxuYC0tcGFwZXItbWVudS1idXR0b24tY29udGVudGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBwYXBlci1tZW51LWJ1dHRvbiBjb250ZW50IHwgYHt9YFxuXG5AaGVybyBoZXJvLnN2Z1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuZXhwb3J0IGNvbnN0IFBhcGVyTWVudUJ1dHRvbiA9IFBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1lbnUtYnV0dG9uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIGN1cnNvcjogYXV0bztcbiAgICAgICAgY29sb3I6IHZhcigtLWRpc2FibGVkLXRleHQtY29sb3IpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1lbnUtYnV0dG9uLWRpc2FibGVkO1xuICAgICAgfVxuXG4gICAgICBpcm9uLWRyb3Bkb3duIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWVudS1idXR0b24tZHJvcGRvd247XG4gICAgICB9XG5cbiAgICAgIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0yZHA7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLW1lbnUtYnV0dG9uLWRyb3Bkb3duLWJhY2tncm91bmQsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1lbnUtYnV0dG9uLWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt2ZXJ0aWNhbC1hbGlnbj1cInRvcFwiXSkgLmRyb3Bkb3duLWNvbnRlbnQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgdG9wOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdmVydGljYWwtYWxpZ249XCJib3R0b21cIl0pIC5kcm9wZG93bi1jb250ZW50IHtcbiAgICAgICAgYm90dG9tOiAxMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtMTBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIH1cblxuICAgICAgI3RyaWdnZXIge1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJ0cmlnZ2VyXCIgb24tdGFwPVwidG9nZ2xlXCI+XG4gICAgICA8c2xvdCBuYW1lPVwiZHJvcGRvd24tdHJpZ2dlclwiPjwvc2xvdD5cbiAgICA8L2Rpdj5cblxuICAgIDxpcm9uLWRyb3Bkb3duIGlkPVwiZHJvcGRvd25cIiBvcGVuZWQ9XCJ7e29wZW5lZH19XCIgaG9yaXpvbnRhbC1hbGlnbj1cIltbaG9yaXpvbnRhbEFsaWduXV1cIiB2ZXJ0aWNhbC1hbGlnbj1cIltbdmVydGljYWxBbGlnbl1dXCIgZHluYW1pYy1hbGlnbj1cIltbZHluYW1pY0FsaWduXV1cIiBob3Jpem9udGFsLW9mZnNldD1cIltbaG9yaXpvbnRhbE9mZnNldF1dXCIgdmVydGljYWwtb2Zmc2V0PVwiW1t2ZXJ0aWNhbE9mZnNldF1dXCIgbm8tb3ZlcmxhcD1cIltbbm9PdmVybGFwXV1cIiBvcGVuLWFuaW1hdGlvbi1jb25maWc9XCJbW29wZW5BbmltYXRpb25Db25maWddXVwiIGNsb3NlLWFuaW1hdGlvbi1jb25maWc9XCJbW2Nsb3NlQW5pbWF0aW9uQ29uZmlnXV1cIiBuby1hbmltYXRpb25zPVwiW1tub0FuaW1hdGlvbnNdXVwiIGZvY3VzLXRhcmdldD1cIltbX2Ryb3Bkb3duQ29udGVudF1dXCIgYWxsb3ctb3V0c2lkZS1zY3JvbGw9XCJbW2FsbG93T3V0c2lkZVNjcm9sbF1dXCIgcmVzdG9yZS1mb2N1cy1vbi1jbG9zZT1cIltbcmVzdG9yZUZvY3VzT25DbG9zZV1dXCIgb24taXJvbi1vdmVybGF5LWNhbmNlbGVkPVwiX19vbklyb25PdmVybGF5Q2FuY2VsZWRcIj5cbiAgICAgIDxkaXYgc2xvdD1cImRyb3Bkb3duLWNvbnRlbnRcIiBjbGFzcz1cImRyb3Bkb3duLWNvbnRlbnRcIj5cbiAgICAgICAgPHNsb3QgaWQ9XCJjb250ZW50XCIgbmFtZT1cImRyb3Bkb3duLWNvbnRlbnRcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2lyb24tZHJvcGRvd24+XG5gLFxuXG4gIGlzOiAncGFwZXItbWVudS1idXR0b24nLFxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBkcm9wZG93biBvcGVucy5cbiAgICpcbiAgICogQGV2ZW50IHBhcGVyLWRyb3Bkb3duLW9wZW5cbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIGRyb3Bkb3duIGNsb3Nlcy5cbiAgICpcbiAgICogQGV2ZW50IHBhcGVyLWRyb3Bkb3duLWNsb3NlXG4gICAqL1xuXG4gIGJlaGF2aW9yczogW0lyb25BMTF5S2V5c0JlaGF2aW9yLCBJcm9uQ29udHJvbFN0YXRlXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgY29udGVudCBpcyBjdXJyZW50bHkgZGlzcGxheWVkLlxuICAgICAqL1xuICAgIG9wZW5lZDpcbiAgICAgICAge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgbm90aWZ5OiB0cnVlLCBvYnNlcnZlcjogJ19vcGVuZWRDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgbWVudSBkcm9wZG93blxuICAgICAqIGhvcml6b250YWxseSByZWxhdGl2ZSB0byB0aGUgZHJvcGRvd24gdHJpZ2dlci5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbGVmdCcsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb3JpZW50YXRpb24gYWdhaW5zdCB3aGljaCB0byBhbGlnbiB0aGUgbWVudSBkcm9wZG93blxuICAgICAqIHZlcnRpY2FsbHkgcmVsYXRpdmUgdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICd0b3AnLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGBob3Jpem9udGFsQWxpZ25gIGFuZCBgdmVydGljYWxBbGlnbmAgcHJvcGVydGllcyB3aWxsXG4gICAgICogYmUgY29uc2lkZXJlZCBwcmVmZXJlbmNlcyBpbnN0ZWFkIG9mIHN0cmljdCByZXF1aXJlbWVudHMgd2hlblxuICAgICAqIHBvc2l0aW9uaW5nIHRoZSBkcm9wZG93biBhbmQgbWF5IGJlIGNoYW5nZWQgaWYgZG9pbmcgc28gcmVkdWNlc1xuICAgICAqIHRoZSBhcmVhIG9mIHRoZSBkcm9wZG93biBmYWxsaW5nIG91dHNpZGUgb2YgYGZpdEludG9gLlxuICAgICAqL1xuICAgIGR5bmFtaWNBbGlnbjoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgLyoqXG4gICAgICogQSBwaXhlbCB2YWx1ZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBvc2l0aW9uIGNhbGN1bGF0ZWQgZm9yIHRoZVxuICAgICAqIGdpdmVuIGBob3Jpem9udGFsQWxpZ25gLiBVc2UgYSBuZWdhdGl2ZSB2YWx1ZSB0byBvZmZzZXQgdG8gdGhlXG4gICAgICogbGVmdCwgb3IgYSBwb3NpdGl2ZSB2YWx1ZSB0byBvZmZzZXQgdG8gdGhlIHJpZ2h0LlxuICAgICAqL1xuICAgIGhvcml6b250YWxPZmZzZXQ6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogQSBwaXhlbCB2YWx1ZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBvc2l0aW9uIGNhbGN1bGF0ZWQgZm9yIHRoZVxuICAgICAqIGdpdmVuIGB2ZXJ0aWNhbEFsaWduYC4gVXNlIGEgbmVnYXRpdmUgdmFsdWUgdG8gb2Zmc2V0IHRvd2FyZHMgdGhlXG4gICAgICogdG9wLCBvciBhIHBvc2l0aXZlIHZhbHVlIHRvIG9mZnNldCB0b3dhcmRzIHRoZSBib3R0b20uXG4gICAgICovXG4gICAgdmVydGljYWxPZmZzZXQ6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdHJ1ZSwgdGhlIGRyb3Bkb3duIHdpbGwgYmUgcG9zaXRpb25lZCBzbyB0aGF0IGl0IGRvZXNuJ3Qgb3ZlcmxhcFxuICAgICAqIHRoZSBidXR0b24uXG4gICAgICovXG4gICAgbm9PdmVybGFwOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGFuaW1hdGlvbnMgd2hlbiBvcGVuaW5nIGFuZCBjbG9zaW5nIHRoZVxuICAgICAqIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIG5vQW5pbWF0aW9uczoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGF1dG9tYXRpY2FsbHkgY2xvc2luZyB0aGUgZHJvcGRvd24gYWZ0ZXJcbiAgICAgKiBhIHNlbGVjdGlvbiBoYXMgYmVlbiBtYWRlLlxuICAgICAqL1xuICAgIGlnbm9yZVNlbGVjdDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBlbmFibGUgYXV0b21hdGljYWxseSBjbG9zaW5nIHRoZSBkcm9wZG93biBhZnRlciBhblxuICAgICAqIGl0ZW0gaGFzIGJlZW4gYWN0aXZhdGVkLCBldmVuIGlmIHRoZSBzZWxlY3Rpb24gZGlkIG5vdCBjaGFuZ2UuXG4gICAgICovXG4gICAgY2xvc2VPbkFjdGl2YXRlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFuaW1hdGlvbiBjb25maWcuIElmIHByb3ZpZGVkLCB0aGlzIHdpbGwgYmUgdXNlZCB0byBhbmltYXRlIHRoZVxuICAgICAqIG9wZW5pbmcgb2YgdGhlIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIG9wZW5BbmltYXRpb25Db25maWc6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICB7bmFtZTogJ2ZhZGUtaW4tYW5pbWF0aW9uJywgdGltaW5nOiB7ZGVsYXk6IDEwMCwgZHVyYXRpb246IDIwMH19LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6ICdwYXBlci1tZW51LWdyb3ctd2lkdGgtYW5pbWF0aW9uJyxcbiAgICAgICAgICAgIHRpbWluZzoge1xuICAgICAgICAgICAgICBkZWxheTogMTAwLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMTUwLFxuICAgICAgICAgICAgICBlYXNpbmc6IGNvbmZpZy5BTklNQVRJT05fQ1VCSUNfQkVaSUVSXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncGFwZXItbWVudS1ncm93LWhlaWdodC1hbmltYXRpb24nLFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgIGRlbGF5OiAxMDAsXG4gICAgICAgICAgICAgIGR1cmF0aW9uOiAyNzUsXG4gICAgICAgICAgICAgIGVhc2luZzogY29uZmlnLkFOSU1BVElPTl9DVUJJQ19CRVpJRVJcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEFuIGFuaW1hdGlvbiBjb25maWcuIElmIHByb3ZpZGVkLCB0aGlzIHdpbGwgYmUgdXNlZCB0byBhbmltYXRlIHRoZVxuICAgICAqIGNsb3Npbmcgb2YgdGhlIGRyb3Bkb3duLlxuICAgICAqL1xuICAgIGNsb3NlQW5pbWF0aW9uQ29uZmlnOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAge25hbWU6ICdmYWRlLW91dC1hbmltYXRpb24nLCB0aW1pbmc6IHtkdXJhdGlvbjogMTUwfX0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogJ3BhcGVyLW1lbnUtc2hyaW5rLXdpZHRoLWFuaW1hdGlvbicsXG4gICAgICAgICAgICB0aW1pbmc6IHtcbiAgICAgICAgICAgICAgZGVsYXk6IDEwMCxcbiAgICAgICAgICAgICAgZHVyYXRpb246IDUwLFxuICAgICAgICAgICAgICBlYXNpbmc6IGNvbmZpZy5BTklNQVRJT05fQ1VCSUNfQkVaSUVSXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiAncGFwZXItbWVudS1zaHJpbmstaGVpZ2h0LWFuaW1hdGlvbicsXG4gICAgICAgICAgICB0aW1pbmc6IHtkdXJhdGlvbjogMjAwLCBlYXNpbmc6ICdlYXNlLWluJ31cbiAgICAgICAgICB9XG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEJ5IGRlZmF1bHQsIHRoZSBkcm9wZG93biB3aWxsIGNvbnN0cmFpbiBzY3JvbGxpbmcgb24gdGhlIHBhZ2VcbiAgICAgKiB0byBpdHNlbGYgd2hlbiBvcGVuZWQuXG4gICAgICogU2V0IHRvIHRydWUgaW4gb3JkZXIgdG8gcHJldmVudCBzY3JvbGwgZnJvbSBiZWluZyBjb25zdHJhaW5lZFxuICAgICAqIHRvIHRoZSBkcm9wZG93biB3aGVuIGl0IG9wZW5zLlxuICAgICAqL1xuICAgIGFsbG93T3V0c2lkZVNjcm9sbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBXaGV0aGVyIGZvY3VzIHNob3VsZCBiZSByZXN0b3JlZCB0byB0aGUgYnV0dG9uIHdoZW4gdGhlIG1lbnUgY2xvc2VzLlxuICAgICAqL1xuICAgIHJlc3RvcmVGb2N1c09uQ2xvc2U6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGlzIGlzIHRoZSBlbGVtZW50IGludGVuZGVkIHRvIGJlIGJvdW5kIGFzIHRoZSBmb2N1cyB0YXJnZXRcbiAgICAgKiBmb3IgdGhlIGBpcm9uLWRyb3Bkb3duYCBjb250YWluZWQgYnkgYHBhcGVyLW1lbnUtYnV0dG9uYC5cbiAgICAgKi9cbiAgICBfZHJvcGRvd25Db250ZW50OiB7dHlwZTogT2JqZWN0fVxuICB9LFxuXG4gIGhvc3RBdHRyaWJ1dGVzOiB7cm9sZTogJ2dyb3VwJywgJ2FyaWEtaGFzcG9wdXAnOiAndHJ1ZSd9LFxuXG4gIGxpc3RlbmVyczpcbiAgICAgIHsnaXJvbi1hY3RpdmF0ZSc6ICdfb25Jcm9uQWN0aXZhdGUnLCAnaXJvbi1zZWxlY3QnOiAnX29uSXJvblNlbGVjdCd9LFxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBlbGVtZW50IHRoYXQgaXMgY29udGFpbmVkIGJ5IHRoZSBtZW51IGJ1dHRvbiwgaWYgYW55LlxuICAgKi9cbiAgZ2V0IGNvbnRlbnRFbGVtZW50KCkge1xuICAgIC8vIFBvbHltZXIgMi54IHJldHVybnMgc2xvdC5hc3NpZ25lZE5vZGVzIHdoaWNoIGNhbiBjb250YWluIHRleHQgbm9kZXMuXG4gICAgdmFyIG5vZGVzID0gZG9tKHRoaXMuJC5jb250ZW50KS5nZXREaXN0cmlidXRlZE5vZGVzKCk7XG4gICAgZm9yICh2YXIgaSA9IDAsIGwgPSBub2Rlcy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgIGlmIChub2Rlc1tpXS5ub2RlVHlwZSA9PT0gTm9kZS5FTEVNRU5UX05PREUpIHtcbiAgICAgICAgcmV0dXJuIG5vZGVzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZHJvcGRvd24gY29udGVudCBiZXR3ZWVuIG9wZW5lZCBhbmQgY2xvc2VkLlxuICAgKi9cbiAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBNYWtlIHRoZSBkcm9wZG93biBjb250ZW50IGFwcGVhciBhcyBhbiBvdmVybGF5IHBvc2l0aW9uZWQgcmVsYXRpdmVcbiAgICogdG8gdGhlIGRyb3Bkb3duIHRyaWdnZXIuXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuJC5kcm9wZG93bi5vcGVuKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhpZGUgdGhlIGRyb3Bkb3duIGNvbnRlbnQuXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy4kLmRyb3Bkb3duLmNsb3NlKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdoZW4gYW4gYGlyb24tc2VsZWN0YCBldmVudCBpcyByZWNlaXZlZCwgdGhlIGRyb3Bkb3duIHNob3VsZFxuICAgKiBhdXRvbWF0aWNhbGx5IGNsb3NlIG9uIHRoZSBhc3N1bXB0aW9uIHRoYXQgYSB2YWx1ZSBoYXMgYmVlbiBjaG9zZW4uXG4gICAqXG4gICAqIEBwYXJhbSB7Q3VzdG9tRXZlbnR9IGV2ZW50IEEgQ3VzdG9tRXZlbnQgaW5zdGFuY2Ugd2l0aCB0eXBlXG4gICAqIHNldCB0byBgXCJpcm9uLXNlbGVjdFwiYC5cbiAgICovXG4gIF9vbklyb25TZWxlY3Q6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLmlnbm9yZVNlbGVjdCkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBkcm9wZG93biB3aGVuIGFuIGBpcm9uLWFjdGl2YXRlYCBldmVudCBpcyByZWNlaXZlZCBpZlxuICAgKiBgY2xvc2VPbkFjdGl2YXRlYCBpcyB0cnVlLlxuICAgKlxuICAgKiBAcGFyYW0ge0N1c3RvbUV2ZW50fSBldmVudCBBIEN1c3RvbUV2ZW50IG9mIHR5cGUgJ2lyb24tYWN0aXZhdGUnLlxuICAgKi9cbiAgX29uSXJvbkFjdGl2YXRlOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLmNsb3NlT25BY3RpdmF0ZSkge1xuICAgICAgdGhpcy5jbG9zZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogV2hlbiB0aGUgZHJvcGRvd24gb3BlbnMsIHRoZSBgcGFwZXItbWVudS1idXR0b25gIGZpcmVzIGBwYXBlci1vcGVuYC5cbiAgICogV2hlbiB0aGUgZHJvcGRvd24gY2xvc2VzLCB0aGUgYHBhcGVyLW1lbnUtYnV0dG9uYCBmaXJlcyBgcGFwZXItY2xvc2VgLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5lZCBUcnVlIGlmIHRoZSBkcm9wZG93biBpcyBvcGVuZWQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICogQHBhcmFtIHtib29sZWFufSBvbGRPcGVuZWQgVGhlIHByZXZpb3VzIHZhbHVlIG9mIGBvcGVuZWRgLlxuICAgKi9cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKG9wZW5lZCwgb2xkT3BlbmVkKSB7XG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgLy8gVE9ETyhjZGF0YSk6IFVwZGF0ZSB0aGlzIHdoZW4gd2UgY2FuIG1lYXN1cmUgY2hhbmdlcyBpbiBkaXN0cmlidXRlZFxuICAgICAgLy8gY2hpbGRyZW4gaW4gYW4gaWRpb21hdGljIHdheS5cbiAgICAgIC8vIFdlIHBva2UgdGhpcyBwcm9wZXJ0eSBpbiBjYXNlIHRoZSBlbGVtZW50IGhhcyBjaGFuZ2VkLiBUaGlzIHdpbGxcbiAgICAgIC8vIGNhdXNlIHRoZSBmb2N1cyB0YXJnZXQgZm9yIHRoZSBgaXJvbi1kcm9wZG93bmAgdG8gYmUgdXBkYXRlZCBhc1xuICAgICAgLy8gbmVjZXNzYXJ5OlxuICAgICAgdGhpcy5fZHJvcGRvd25Db250ZW50ID0gdGhpcy5jb250ZW50RWxlbWVudDtcbiAgICAgIHRoaXMuZmlyZSgncGFwZXItZHJvcGRvd24tb3BlbicpO1xuICAgIH0gZWxzZSBpZiAob2xkT3BlbmVkICE9IG51bGwpIHtcbiAgICAgIHRoaXMuZmlyZSgncGFwZXItZHJvcGRvd24tY2xvc2UnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIElmIHRoZSBkcm9wZG93biBpcyBvcGVuIHdoZW4gZGlzYWJsZWQgYmVjb21lcyB0cnVlLCBjbG9zZSB0aGVcbiAgICogZHJvcGRvd24uXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZGlzYWJsZWQgVHJ1ZSBpZiBkaXNhYmxlZCwgb3RoZXJ3aXNlIGZhbHNlLlxuICAgKi9cbiAgX2Rpc2FibGVkQ2hhbmdlZDogZnVuY3Rpb24oZGlzYWJsZWQpIHtcbiAgICBJcm9uQ29udHJvbFN0YXRlLl9kaXNhYmxlZENoYW5nZWQuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICBpZiAoZGlzYWJsZWQgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICB9XG4gIH0sXG5cbiAgX19vbklyb25PdmVybGF5Q2FuY2VsZWQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHVpRXZlbnQgPSBldmVudC5kZXRhaWw7XG4gICAgdmFyIHRyaWdnZXIgPSB0aGlzLiQudHJpZ2dlcjtcbiAgICB2YXIgcGF0aCA9IGRvbSh1aUV2ZW50KS5wYXRoO1xuXG4gICAgaWYgKHBhdGguaW5kZXhPZih0cmlnZ2VyKSA+IC0xKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxufSk7XG5cbk9iamVjdC5rZXlzKGNvbmZpZykuZm9yRWFjaChmdW5jdGlvbihrZXkpIHtcbiAgUGFwZXJNZW51QnV0dG9uW2tleV0gPSBjb25maWdba2V5XTtcbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICcuL3BhcGVyLXNwaW5uZXItc3R5bGVzLmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlclNwaW5uZXJCZWhhdmlvcn0gZnJvbSAnLi9wYXBlci1zcGlubmVyLWJlaGF2aW9yLmpzJztcblxuY29uc3QgdGVtcGxhdGUgPSBodG1sYFxuICA8c3R5bGUgaW5jbHVkZT1cInBhcGVyLXNwaW5uZXItc3R5bGVzXCI+PC9zdHlsZT5cblxuICA8ZGl2IGlkPVwic3Bpbm5lckNvbnRhaW5lclwiIGNsYXNzLW5hbWU9XCJbW19fY29tcHV0ZUNvbnRhaW5lckNsYXNzZXMoYWN0aXZlLCBfX2Nvb2xpbmdEb3duKV1dXCIgb24tYW5pbWF0aW9uZW5kPVwiX19yZXNldFwiIG9uLXdlYmtpdC1hbmltYXRpb24tZW5kPVwiX19yZXNldFwiPlxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTFcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNwaW5uZXItbGF5ZXIgbGF5ZXItMlwiPlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIGxlZnRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgcmlnaHRcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZVwiPjwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lci1sYXllciBsYXllci0zXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlLWNsaXBwZXIgbGVmdFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciByaWdodFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2lyY2xlXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyLWxheWVyIGxheWVyLTRcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGUtY2xpcHBlciBsZWZ0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzcz1cImNpcmNsZS1jbGlwcGVyIHJpZ2h0XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjaXJjbGVcIj48L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbmA7XG50ZW1wbGF0ZS5zZXRBdHRyaWJ1dGUoJ3N0cmlwLXdoaXRlc3BhY2UnLCAnJyk7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbUHJvZ3Jlc3MgJlxuYWN0aXZpdHldKGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vZGVzaWduL3NwZWMvY29tcG9uZW50cy9wcm9ncmVzcy1hY3Rpdml0eS5odG1sKVxuXG5FbGVtZW50IHByb3ZpZGluZyBhIG11bHRpcGxlIGNvbG9yIG1hdGVyaWFsIGRlc2lnbiBjaXJjdWxhciBzcGlubmVyLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuVGhlIGRlZmF1bHQgc3Bpbm5lciBjeWNsZXMgYmV0d2VlbiBmb3VyIGxheWVycyBvZiBjb2xvcnM7IGJ5IGRlZmF1bHQgdGhleSBhcmVcbmJsdWUsIHJlZCwgeWVsbG93IGFuZCBncmVlbi4gSXQgY2FuIGJlIGN1c3RvbWl6ZWQgdG8gY3ljbGUgYmV0d2VlbiBmb3VyXG5kaWZmZXJlbnQgY29sb3JzLiBVc2UgPHBhcGVyLXNwaW5uZXItbGl0ZT4gZm9yIHNpbmdsZSBjb2xvciBzcGlubmVycy5cblxuIyMjIEFjY2Vzc2liaWxpdHlcblxuQWx0IGF0dHJpYnV0ZSBzaG91bGQgYmUgc2V0IHRvIHByb3ZpZGUgYWRlcXVhdGUgY29udGV4dCBmb3IgYWNjZXNzaWJpbGl0eS4gSWZcbm5vdCBwcm92aWRlZCwgaXQgZGVmYXVsdHMgdG8gJ2xvYWRpbmcnLiBFbXB0eSBhbHQgY2FuIGJlIHByb3ZpZGVkIHRvIG1hcmsgdGhlXG5lbGVtZW50IGFzIGRlY29yYXRpdmUgaWYgYWx0ZXJuYXRpdmUgY29udGVudCBpcyBwcm92aWRlZCBpbiBhbm90aGVyIGZvcm0gKGUuZy4gYVxudGV4dCBibG9jayBmb2xsb3dpbmcgdGhlIHNwaW5uZXIpLlxuXG4gICAgPHBhcGVyLXNwaW5uZXIgYWx0PVwiTG9hZGluZyBjb250YWN0cyBsaXN0XCIgYWN0aXZlPjwvcGFwZXItc3Bpbm5lcj5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvcmAgfCBDb2xvciBvZiB0aGUgZmlyc3Qgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ibHVlLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvcmAgfCBDb2xvciBvZiB0aGUgc2Vjb25kIHNwaW5uZXIgcm90YXRpb24gfCBgLS1nb29nbGUtcmVkLTUwMGBcbmAtLXBhcGVyLXNwaW5uZXItbGF5ZXItMy1jb2xvcmAgfCBDb2xvciBvZiB0aGUgdGhpcmQgc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS15ZWxsb3ctNTAwYFxuYC0tcGFwZXItc3Bpbm5lci1sYXllci00LWNvbG9yYCB8IENvbG9yIG9mIHRoZSBmb3VydGggc3Bpbm5lciByb3RhdGlvbiB8IGAtLWdvb2dsZS1ncmVlbi01MDBgXG5gLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aGAgfCBUaGUgd2lkdGggb2YgdGhlIHNwaW5uZXIgc3Ryb2tlIHwgM3B4XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItc3Bpbm5lclxuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IHRlbXBsYXRlLFxuXG4gIGlzOiAncGFwZXItc3Bpbm5lcicsXG5cbiAgYmVoYXZpb3JzOiBbUGFwZXJTcGlubmVyQmVoYXZpb3JdXG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXlCQTtBQUNBO0FBcUJBO0FBRUE7QUFPQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBcERBO0FBdURBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXhPQTs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQVlBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWJBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FBWUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBaEJBOzs7Ozs7Ozs7Ozs7QUMxQkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBOzs7Ozs7O0FBTUE7QUFFQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQXRCQTtBQTZCQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzSEE7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7Ozs7O0FBSUE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFOQTtBQUxBO0FBQ0E7QUFlQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQXJFQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFFQTs7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFwSUE7QUF1SUE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMzSkE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFPQTs7Ozs7Ozs7Ozs7O0FDckJBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUVBO0FBb0VBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF5REE7QUFDQTtBQW1CQTtBQUVBO0FBT0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBdkdBO0FBMEdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9RQTs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFJQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBd0RBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUVBO0FBQ0E7QUFhQTtBQUNBO0FBZkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVGQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBckJBOzs7Ozs7Ozs7Ozs7QUNwRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFoQkE7QUFtQkE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQWhCQTtBQW1CQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBaEJBO0FBbUJBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFyQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkVBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTBDQTtBQUNBO0FBNERBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7Ozs7O0FBTUE7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUZBO0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQXRCQTtBQUNBO0FBd0JBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBRkE7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFLQTtBQWxCQTtBQUNBO0FBb0JBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQXhJQTtBQTJJQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBM1VBO0FBOFVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN2WkE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQXlDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQ0E7QUFDQTtBQUVBO0FBRUE7QUFMQTs7OztBIiwic291cmNlUm9vdCI6IiJ9