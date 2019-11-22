(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js":
/*!**************************************************************!*\
  !*** ./node_modules/@polymer/paper-tooltip/paper-tooltip.js ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Tooltips](https://www.google.com/design/spec/components/tooltips.html)
`<paper-tooltip>` is a label that appears on hover and focus when the user
hovers over an element with the cursor or with the keyboard. It will be centered
to an anchor element specified in the `for` attribute, or, if that doesn't
exist, centered to the parent node containing it.
Example:
    <div style="display:inline-block">
      <button>Click me!</button>
      <paper-tooltip>Tooltip text</paper-tooltip>
    </div>
    <div>
      <button id="btn">Click me!</button>
      <paper-tooltip for="btn">Tooltip text</paper-tooltip>
    </div>
The tooltip can be positioned on the top|bottom|left|right of the anchor using
the `position` attribute. The default position is bottom.
    <paper-tooltip for="btn" position="left">Tooltip text</paper-tooltip>
    <paper-tooltip for="btn" position="top">Tooltip text</paper-tooltip>

### Styling
The following custom properties and mixins are available for styling:
Custom property | Description | Default
----------------|-------------|----------
`--paper-tooltip-background` | The background color of the tooltip | `#616161`
`--paper-tooltip-opacity` | The opacity of the tooltip | `0.9`
`--paper-tooltip-text-color` | The text color of the tooltip | `white`
`--paper-tooltip` | Mixin applied to the tooltip | `{}`
`--paper-tooltip-delay-in` | Delay before tooltip starts to fade in | `500`
`--paper-tooltip-delay-out` | Delay before tooltip starts to fade out | `0`
`--paper-tooltip-duration-in` | Timing for animation when showing tooltip | `500`
`--paper-tooltip-duration-out` | Timing for animation when hiding tooltip | `0`
`--paper-tooltip-animation` | Mixin applied to the tooltip animation | `{}`
@group Paper Elements
@element paper-tooltip
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>
      :host {
        display: block;
        position: absolute;
        outline: none;
        z-index: 1002;
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        user-select: none;
        cursor: default;
      }

      #tooltip {
        display: block;
        outline: none;
        @apply --paper-font-common-base;
        font-size: 10px;
        line-height: 1;
        background-color: var(--paper-tooltip-background, #616161);
        color: var(--paper-tooltip-text-color, white);
        padding: 8px;
        border-radius: 2px;
        @apply --paper-tooltip;
      }

      @keyframes keyFrameScaleUp {
        0% {
          transform: scale(0.0);
        }
        100% {
          transform: scale(1.0);
        }
      }

      @keyframes keyFrameScaleDown {
        0% {
          transform: scale(1.0);
        }
        100% {
          transform: scale(0.0);
        }
      }

      @keyframes keyFrameFadeInOpacity {
        0% {
          opacity: 0;
        }
        100% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameFadeOutOpacity {
        0% {
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        100% {
          opacity: 0;
        }
      }

      @keyframes keyFrameSlideDownIn {
        0% {
          transform: translateY(-2000px);
          opacity: 0;
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
      }

      @keyframes keyFrameSlideDownOut {
        0% {
          transform: translateY(0);
          opacity: var(--paper-tooltip-opacity, 0.9);
        }
        10% {
          opacity: 0.2;
        }
        100% {
          transform: translateY(-2000px);
          opacity: 0;
        }
      }

      .fade-in-animation {
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameFadeInOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .fade-out-animation {
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 0ms);
        animation-name: keyFrameFadeOutOpacity;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-up-animation {
        transform: scale(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-in, 500ms);
        animation-name: keyFrameScaleUp;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-in, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .scale-down-animation {
        transform: scale(1);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameScaleDown;
        animation-iteration-count: 1;
        animation-timing-function: ease-in;
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation {
        transform: translateY(-2000px);
        opacity: 0;
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownIn;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.0, 0.0, 0.2, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .slide-down-animation-out {
        transform: translateY(0);
        opacity: var(--paper-tooltip-opacity, 0.9);
        animation-delay: var(--paper-tooltip-delay-out, 500ms);
        animation-name: keyFrameSlideDownOut;
        animation-iteration-count: 1;
        animation-timing-function: cubic-bezier(0.4, 0.0, 1, 1);
        animation-duration: var(--paper-tooltip-duration-out, 500ms);
        animation-fill-mode: forwards;
        @apply --paper-tooltip-animation;
      }

      .cancel-animation {
        animation-delay: -30s !important;
      }

      /* Thanks IE 10. */

      .hidden {
        display: none !important;
      }
    </style>

    <div id="tooltip" class="hidden">
      <slot></slot>
    </div>
`,
  is: 'paper-tooltip',
  hostAttributes: {
    role: 'tooltip',
    tabindex: -1
  },
  properties: {
    /**
     * The id of the element that the tooltip is anchored to. This element
     * must be a sibling of the tooltip. If this property is not set,
     * then the tooltip will be centered to the parent node containing it.
     */
    for: {
      type: String,
      observer: '_findTarget'
    },

    /**
     * Set this to true if you want to manually control when the tooltip
     * is shown or hidden.
     */
    manualMode: {
      type: Boolean,
      value: false,
      observer: '_manualModeChanged'
    },

    /**
     * Positions the tooltip to the top, right, bottom, left of its content.
     */
    position: {
      type: String,
      value: 'bottom'
    },

    /**
     * If true, no parts of the tooltip will ever be shown offscreen.
     */
    fitToVisibleBounds: {
      type: Boolean,
      value: false
    },

    /**
     * The spacing between the top of the tooltip and the element it is
     * anchored to.
     */
    offset: {
      type: Number,
      value: 14
    },

    /**
     * This property is deprecated, but left over so that it doesn't
     * break exiting code. Please use `offset` instead. If both `offset` and
     * `marginTop` are provided, `marginTop` will be ignored.
     * @deprecated since version 1.0.3
     */
    marginTop: {
      type: Number,
      value: 14
    },

    /**
     * The delay that will be applied before the `entry` animation is
     * played when showing the tooltip.
     */
    animationDelay: {
      type: Number,
      value: 500,
      observer: '_delayChange'
    },

    /**
     * The animation that will be played on entry.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationEntry: {
      type: String,
      value: ''
    },

    /**
     * The animation that will be played on exit.  This replaces the
     * deprecated animationConfig.  Entries here will override the
     * animationConfig settings.  You can enter your own animation
     * by setting it to the css class name.
     */
    animationExit: {
      type: String,
      value: ''
    },

    /**
     * This property is deprecated.  Use --paper-tooltip-animation to change the
     * animation. The entry and exit animations that will be played when showing
     * and hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     * @deprecated since version
     *
     * The entry and exit animations that will be played when showing and
     * hiding the tooltip. If you want to override this, you must ensure
     * that your animationConfig has the exact format below.
     */
    animationConfig: {
      type: Object,
      value: function () {
        return {
          'entry': [{
            name: 'fade-in-animation',
            node: this,
            timing: {
              delay: 0
            }
          }],
          'exit': [{
            name: 'fade-out-animation',
            node: this
          }]
        };
      }
    },
    _showing: {
      type: Boolean,
      value: false
    }
  },
  listeners: {
    'webkitAnimationEnd': '_onAnimationEnd'
  },

  /**
   * Returns the target element that this tooltip is anchored to. It is
   * either the element given by the `for` attribute, or the immediate parent
   * of the tooltip.
   *
   * @type {Node}
   */
  get target() {
    var parentNode = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).parentNode; // If the parentNode is a document fragment, then we need to use the host.

    var ownerRoot = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).getOwnerRoot();
    var target;

    if (this.for) {
      target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(ownerRoot).querySelector('#' + this.for);
    } else {
      target = parentNode.nodeType == Node.DOCUMENT_FRAGMENT_NODE ? ownerRoot.host : parentNode;
    }

    return target;
  },

  /**
   * @return {void}
   */
  attached: function () {
    this._findTarget();
  },

  /**
   * @return {void}
   */
  detached: function () {
    if (!this.manualMode) this._removeListeners();
  },

  /**
   * Replaces Neon-Animation playAnimation - just calls show and hide.
   * @deprecated Use show and hide instead.
   * @param {string} type Either `entry` or `exit`
   */
  playAnimation: function (type) {
    if (type === 'entry') {
      this.show();
    } else if (type === 'exit') {
      this.hide();
    }
  },

  /**
   * Cancels the animation and either fully shows or fully hides tooltip
   */
  cancelAnimation: function () {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.add('cancel-animation');
  },

  /**
   * Shows the tooltip programatically
   * @return {void}
   */
  show: function () {
    // If the tooltip is already showing, there's nothing to do.
    if (this._showing) return;

    if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).textContent.trim() === '') {
      // Check if effective children are also empty
      var allChildrenEmpty = true;
      var effectiveChildren = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this).getEffectiveChildNodes();

      for (var i = 0; i < effectiveChildren.length; i++) {
        if (effectiveChildren[i].textContent.trim() !== '') {
          allChildrenEmpty = false;
          break;
        }
      }

      if (allChildrenEmpty) {
        return;
      }
    }

    this._showing = true;
    this.$.tooltip.classList.remove('hidden');
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.updatePosition();
    this._animationPlaying = true;
    this.$.tooltip.classList.add(this._getAnimationType('entry'));
  },

  /**
   * Hides the tooltip programatically
   * @return {void}
   */
  hide: function () {
    // If the tooltip is already hidden, there's nothing to do.
    if (!this._showing) {
      return;
    } // If the entry animation is still playing, don't try to play the exit
    // animation since this will reset the opacity to 1. Just end the animation.


    if (this._animationPlaying) {
      this._showing = false;

      this._cancelAnimation();

      return;
    } else {
      // Play Exit Animation
      this._onAnimationFinish();
    }

    this._showing = false;
    this._animationPlaying = true;
  },

  /**
   * @return {void}
   */
  updatePosition: function () {
    if (!this._target || !this.offsetParent) return;
    var offset = this.offset; // If a marginTop has been provided by the user (pre 1.0.3), use it.

    if (this.marginTop != 14 && this.offset == 14) offset = this.marginTop;
    var parentRect = this.offsetParent.getBoundingClientRect();

    var targetRect = this._target.getBoundingClientRect();

    var thisRect = this.getBoundingClientRect();
    var horizontalCenterOffset = (targetRect.width - thisRect.width) / 2;
    var verticalCenterOffset = (targetRect.height - thisRect.height) / 2;
    var targetLeft = targetRect.left - parentRect.left;
    var targetTop = targetRect.top - parentRect.top;
    var tooltipLeft, tooltipTop;

    switch (this.position) {
      case 'top':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop - thisRect.height - offset;
        break;

      case 'bottom':
        tooltipLeft = targetLeft + horizontalCenterOffset;
        tooltipTop = targetTop + targetRect.height + offset;
        break;

      case 'left':
        tooltipLeft = targetLeft - thisRect.width - offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;

      case 'right':
        tooltipLeft = targetLeft + targetRect.width + offset;
        tooltipTop = targetTop + verticalCenterOffset;
        break;
    } // TODO(noms): This should use IronFitBehavior if possible.


    if (this.fitToVisibleBounds) {
      // Clip the left/right side
      if (parentRect.left + tooltipLeft + thisRect.width > window.innerWidth) {
        this.style.right = '0px';
        this.style.left = 'auto';
      } else {
        this.style.left = Math.max(0, tooltipLeft) + 'px';
        this.style.right = 'auto';
      } // Clip the top/bottom side.


      if (parentRect.top + tooltipTop + thisRect.height > window.innerHeight) {
        this.style.bottom = parentRect.height - targetTop + offset + 'px';
        this.style.top = 'auto';
      } else {
        this.style.top = Math.max(-parentRect.top, tooltipTop) + 'px';
        this.style.bottom = 'auto';
      }
    } else {
      this.style.left = tooltipLeft + 'px';
      this.style.top = tooltipTop + 'px';
    }
  },
  _addListeners: function () {
    if (this._target) {
      this.listen(this._target, 'mouseenter', 'show');
      this.listen(this._target, 'focus', 'show');
      this.listen(this._target, 'mouseleave', 'hide');
      this.listen(this._target, 'blur', 'hide');
      this.listen(this._target, 'tap', 'hide');
    }

    this.listen(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.listen(this, 'mouseenter', 'hide');
  },
  _findTarget: function () {
    if (!this.manualMode) this._removeListeners();
    this._target = this.target;
    if (!this.manualMode) this._addListeners();
  },
  _delayChange: function (newValue) {
    // Only Update delay if different value set
    if (newValue !== 500) {
      this.updateStyles({
        '--paper-tooltip-delay-in': newValue + 'ms'
      });
    }
  },
  _manualModeChanged: function () {
    if (this.manualMode) this._removeListeners();else this._addListeners();
  },
  _cancelAnimation: function () {
    // Short-cut and cancel all animations and hide
    this.$.tooltip.classList.remove(this._getAnimationType('entry'));
    this.$.tooltip.classList.remove(this._getAnimationType('exit'));
    this.$.tooltip.classList.remove('cancel-animation');
    this.$.tooltip.classList.add('hidden');
  },
  _onAnimationFinish: function () {
    if (this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('entry'));
      this.$.tooltip.classList.remove('cancel-animation');
      this.$.tooltip.classList.add(this._getAnimationType('exit'));
    }
  },
  _onAnimationEnd: function () {
    // If no longer showing add class hidden to completely hide tooltip
    this._animationPlaying = false;

    if (!this._showing) {
      this.$.tooltip.classList.remove(this._getAnimationType('exit'));
      this.$.tooltip.classList.add('hidden');
    }
  },
  _getAnimationType: function (type) {
    // These properties have priority over animationConfig values
    if (type === 'entry' && this.animationEntry !== '') {
      return this.animationEntry;
    }

    if (type === 'exit' && this.animationExit !== '') {
      return this.animationExit;
    } // If no results then return the legacy value from animationConfig


    if (this.animationConfig[type] && typeof this.animationConfig[type][0].name === 'string') {
      // Checking Timing and Update if necessary - Legacy for animationConfig
      if (this.animationConfig[type][0].timing && this.animationConfig[type][0].timing.delay && this.animationConfig[type][0].timing.delay !== 0) {
        var timingDelay = this.animationConfig[type][0].timing.delay; // Has Timing Change - Update CSS

        if (type === 'entry') {
          this.updateStyles({
            '--paper-tooltip-delay-in': timingDelay + 'ms'
          });
        } else if (type === 'exit') {
          this.updateStyles({
            '--paper-tooltip-delay-out': timingDelay + 'ms'
          });
        }
      }

      return this.animationConfig[type][0].name;
    }
  },
  _removeListeners: function () {
    if (this._target) {
      this.unlisten(this._target, 'mouseenter', 'show');
      this.unlisten(this._target, 'focus', 'show');
      this.unlisten(this._target, 'mouseleave', 'hide');
      this.unlisten(this._target, 'blur', 'hide');
      this.unlisten(this._target, 'tap', 'hide');
    }

    this.unlisten(this.$.tooltip, 'animationend', '_onAnimationEnd');
    this.unlisten(this, 'mouseenter', 'hide');
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci10b29sdGlwL3BhcGVyLXRvb2x0aXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW1Rvb2x0aXBzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvdG9vbHRpcHMuaHRtbClcbmA8cGFwZXItdG9vbHRpcD5gIGlzIGEgbGFiZWwgdGhhdCBhcHBlYXJzIG9uIGhvdmVyIGFuZCBmb2N1cyB3aGVuIHRoZSB1c2VyXG5ob3ZlcnMgb3ZlciBhbiBlbGVtZW50IHdpdGggdGhlIGN1cnNvciBvciB3aXRoIHRoZSBrZXlib2FyZC4gSXQgd2lsbCBiZSBjZW50ZXJlZFxudG8gYW4gYW5jaG9yIGVsZW1lbnQgc3BlY2lmaWVkIGluIHRoZSBgZm9yYCBhdHRyaWJ1dGUsIG9yLCBpZiB0aGF0IGRvZXNuJ3RcbmV4aXN0LCBjZW50ZXJlZCB0byB0aGUgcGFyZW50IG5vZGUgY29udGFpbmluZyBpdC5cbkV4YW1wbGU6XG4gICAgPGRpdiBzdHlsZT1cImRpc3BsYXk6aW5saW5lLWJsb2NrXCI+XG4gICAgICA8YnV0dG9uPkNsaWNrIG1lITwvYnV0dG9uPlxuICAgICAgPHBhcGVyLXRvb2x0aXA+VG9vbHRpcCB0ZXh0PC9wYXBlci10b29sdGlwPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgICA8YnV0dG9uIGlkPVwiYnRuXCI+Q2xpY2sgbWUhPC9idXR0b24+XG4gICAgICA8cGFwZXItdG9vbHRpcCBmb3I9XCJidG5cIj5Ub29sdGlwIHRleHQ8L3BhcGVyLXRvb2x0aXA+XG4gICAgPC9kaXY+XG5UaGUgdG9vbHRpcCBjYW4gYmUgcG9zaXRpb25lZCBvbiB0aGUgdG9wfGJvdHRvbXxsZWZ0fHJpZ2h0IG9mIHRoZSBhbmNob3IgdXNpbmdcbnRoZSBgcG9zaXRpb25gIGF0dHJpYnV0ZS4gVGhlIGRlZmF1bHQgcG9zaXRpb24gaXMgYm90dG9tLlxuICAgIDxwYXBlci10b29sdGlwIGZvcj1cImJ0blwiIHBvc2l0aW9uPVwibGVmdFwiPlRvb2x0aXAgdGV4dDwvcGFwZXItdG9vbHRpcD5cbiAgICA8cGFwZXItdG9vbHRpcCBmb3I9XCJidG5cIiBwb3NpdGlvbj1cInRvcFwiPlRvb2x0aXAgdGV4dDwvcGFwZXItdG9vbHRpcD5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItdG9vbHRpcC1iYWNrZ3JvdW5kYCB8IFRoZSBiYWNrZ3JvdW5kIGNvbG9yIG9mIHRoZSB0b29sdGlwIHwgYCM2MTYxNjFgXG5gLS1wYXBlci10b29sdGlwLW9wYWNpdHlgIHwgVGhlIG9wYWNpdHkgb2YgdGhlIHRvb2x0aXAgfCBgMC45YFxuYC0tcGFwZXItdG9vbHRpcC10ZXh0LWNvbG9yYCB8IFRoZSB0ZXh0IGNvbG9yIG9mIHRoZSB0b29sdGlwIHwgYHdoaXRlYFxuYC0tcGFwZXItdG9vbHRpcGAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0b29sdGlwIHwgYHt9YFxuYC0tcGFwZXItdG9vbHRpcC1kZWxheS1pbmAgfCBEZWxheSBiZWZvcmUgdG9vbHRpcCBzdGFydHMgdG8gZmFkZSBpbiB8IGA1MDBgXG5gLS1wYXBlci10b29sdGlwLWRlbGF5LW91dGAgfCBEZWxheSBiZWZvcmUgdG9vbHRpcCBzdGFydHMgdG8gZmFkZSBvdXQgfCBgMGBcbmAtLXBhcGVyLXRvb2x0aXAtZHVyYXRpb24taW5gIHwgVGltaW5nIGZvciBhbmltYXRpb24gd2hlbiBzaG93aW5nIHRvb2x0aXAgfCBgNTAwYFxuYC0tcGFwZXItdG9vbHRpcC1kdXJhdGlvbi1vdXRgIHwgVGltaW5nIGZvciBhbmltYXRpb24gd2hlbiBoaWRpbmcgdG9vbHRpcCB8IGAwYFxuYC0tcGFwZXItdG9vbHRpcC1hbmltYXRpb25gIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdG9vbHRpcCBhbmltYXRpb24gfCBge31gXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXRvb2x0aXBcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICB6LWluZGV4OiAxMDAyO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgICN0b29sdGlwIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtY29tbW9uLWJhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvb2x0aXAtYmFja2dyb3VuZCwgIzYxNjE2MSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci10b29sdGlwLXRleHQtY29sb3IsIHdoaXRlKTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRvb2x0aXA7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMga2V5RnJhbWVTY2FsZVVwIHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMC4wKTtcbiAgICAgICAgfVxuICAgICAgICAxMDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBrZXlGcmFtZVNjYWxlRG93biB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEuMCk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjApO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMga2V5RnJhbWVGYWRlSW5PcGFjaXR5IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogdmFyKC0tcGFwZXItdG9vbHRpcC1vcGFjaXR5LCAwLjkpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMga2V5RnJhbWVGYWRlT3V0T3BhY2l0eSB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci10b29sdGlwLW9wYWNpdHksIDAuOSk7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGtleUZyYW1lU2xpZGVEb3duSW4ge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgICAgMTAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDApO1xuICAgICAgICAgIG9wYWNpdHk6IHZhcigtLXBhcGVyLXRvb2x0aXAtb3BhY2l0eSwgMC45KTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGtleUZyYW1lU2xpZGVEb3duT3V0IHtcbiAgICAgICAgMCUge1xuICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcbiAgICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci10b29sdGlwLW9wYWNpdHksIDAuOSk7XG4gICAgICAgIH1cbiAgICAgICAgMTAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgIH1cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0yMDAwcHgpO1xuICAgICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLmZhZGUtaW4tYW5pbWF0aW9uIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1wYXBlci10b29sdGlwLWRlbGF5LWluLCA1MDBtcyk7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXlGcmFtZUZhZGVJbk9wYWNpdHk7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItdG9vbHRpcC1kdXJhdGlvbi1pbiwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdG9vbHRpcC1hbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIC5mYWRlLW91dC1hbmltYXRpb24ge1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1wYXBlci10b29sdGlwLW9wYWNpdHksIDAuOSk7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tcGFwZXItdG9vbHRpcC1kZWxheS1vdXQsIDBtcyk7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXlGcmFtZUZhZGVPdXRPcGFjaXR5O1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiAxO1xuICAgICAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLWluO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXRvb2x0aXAtZHVyYXRpb24tb3V0LCA1MDBtcyk7XG4gICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci10b29sdGlwLWFuaW1hdGlvbjtcbiAgICAgIH1cblxuICAgICAgLnNjYWxlLXVwLWFuaW1hdGlvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCk7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLXBhcGVyLXRvb2x0aXAtb3BhY2l0eSwgMC45KTtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1wYXBlci10b29sdGlwLWRlbGF5LWluLCA1MDBtcyk7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBrZXlGcmFtZVNjYWxlVXA7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItdG9vbHRpcC1kdXJhdGlvbi1pbiwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdG9vbHRpcC1hbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIC5zY2FsZS1kb3duLWFuaW1hdGlvbiB7XG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLXBhcGVyLXRvb2x0aXAtb3BhY2l0eSwgMC45KTtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1wYXBlci10b29sdGlwLWRlbGF5LW91dCwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5RnJhbWVTY2FsZURvd247XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW47XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItdG9vbHRpcC1kdXJhdGlvbi1vdXQsIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRvb2x0aXAtYW5pbWF0aW9uO1xuICAgICAgfVxuXG4gICAgICAuc2xpZGUtZG93bi1hbmltYXRpb24ge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwMDBweCk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogdmFyKC0tcGFwZXItdG9vbHRpcC1kZWxheS1vdXQsIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGtleUZyYW1lU2xpZGVEb3duSW47XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjAsIDAuMCwgMC4yLCAxKTtcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci10b29sdGlwLWR1cmF0aW9uLW91dCwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItdG9vbHRpcC1hbmltYXRpb247XG4gICAgICB9XG5cbiAgICAgIC5zbGlkZS1kb3duLWFuaW1hdGlvbi1vdXQge1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLXBhcGVyLXRvb2x0aXAtb3BhY2l0eSwgMC45KTtcbiAgICAgICAgYW5pbWF0aW9uLWRlbGF5OiB2YXIoLS1wYXBlci10b29sdGlwLWRlbGF5LW91dCwgNTAwbXMpO1xuICAgICAgICBhbmltYXRpb24tbmFtZToga2V5RnJhbWVTbGlkZURvd25PdXQ7XG4gICAgICAgIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDE7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAuMCwgMSwgMSk7XG4gICAgICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogdmFyKC0tcGFwZXItdG9vbHRpcC1kdXJhdGlvbi1vdXQsIDUwMG1zKTtcbiAgICAgICAgYW5pbWF0aW9uLWZpbGwtbW9kZTogZm9yd2FyZHM7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLXRvb2x0aXAtYW5pbWF0aW9uO1xuICAgICAgfVxuXG4gICAgICAuY2FuY2VsLWFuaW1hdGlvbiB7XG4gICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTMwcyAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAvKiBUaGFua3MgSUUgMTAuICovXG5cbiAgICAgIC5oaWRkZW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJ0b29sdGlwXCIgY2xhc3M9XCJoaWRkZW5cIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdwYXBlci10b29sdGlwJyxcbiAgaG9zdEF0dHJpYnV0ZXM6IHtyb2xlOiAndG9vbHRpcCcsIHRhYmluZGV4OiAtMX0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBpZCBvZiB0aGUgZWxlbWVudCB0aGF0IHRoZSB0b29sdGlwIGlzIGFuY2hvcmVkIHRvLiBUaGlzIGVsZW1lbnRcbiAgICAgKiBtdXN0IGJlIGEgc2libGluZyBvZiB0aGUgdG9vbHRpcC4gSWYgdGhpcyBwcm9wZXJ0eSBpcyBub3Qgc2V0LFxuICAgICAqIHRoZW4gdGhlIHRvb2x0aXAgd2lsbCBiZSBjZW50ZXJlZCB0byB0aGUgcGFyZW50IG5vZGUgY29udGFpbmluZyBpdC5cbiAgICAgKi9cbiAgICBmb3I6IHt0eXBlOiBTdHJpbmcsIG9ic2VydmVyOiAnX2ZpbmRUYXJnZXQnfSxcbiAgICAvKipcbiAgICAgKiBTZXQgdGhpcyB0byB0cnVlIGlmIHlvdSB3YW50IHRvIG1hbnVhbGx5IGNvbnRyb2wgd2hlbiB0aGUgdG9vbHRpcFxuICAgICAqIGlzIHNob3duIG9yIGhpZGRlbi5cbiAgICAgKi9cbiAgICBtYW51YWxNb2RlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCBvYnNlcnZlcjogJ19tYW51YWxNb2RlQ2hhbmdlZCd9LFxuICAgIC8qKlxuICAgICAqIFBvc2l0aW9ucyB0aGUgdG9vbHRpcCB0byB0aGUgdG9wLCByaWdodCwgYm90dG9tLCBsZWZ0IG9mIGl0cyBjb250ZW50LlxuICAgICAqL1xuICAgIHBvc2l0aW9uOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2JvdHRvbSd9LFxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIG5vIHBhcnRzIG9mIHRoZSB0b29sdGlwIHdpbGwgZXZlciBiZSBzaG93biBvZmZzY3JlZW4uXG4gICAgICovXG4gICAgZml0VG9WaXNpYmxlQm91bmRzOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcbiAgICAvKipcbiAgICAgKiBUaGUgc3BhY2luZyBiZXR3ZWVuIHRoZSB0b3Agb2YgdGhlIHRvb2x0aXAgYW5kIHRoZSBlbGVtZW50IGl0IGlzXG4gICAgICogYW5jaG9yZWQgdG8uXG4gICAgICovXG4gICAgb2Zmc2V0OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMTR9LFxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgYnV0IGxlZnQgb3ZlciBzbyB0aGF0IGl0IGRvZXNuJ3RcbiAgICAgKiBicmVhayBleGl0aW5nIGNvZGUuIFBsZWFzZSB1c2UgYG9mZnNldGAgaW5zdGVhZC4gSWYgYm90aCBgb2Zmc2V0YCBhbmRcbiAgICAgKiBgbWFyZ2luVG9wYCBhcmUgcHJvdmlkZWQsIGBtYXJnaW5Ub3BgIHdpbGwgYmUgaWdub3JlZC5cbiAgICAgKiBAZGVwcmVjYXRlZCBzaW5jZSB2ZXJzaW9uIDEuMC4zXG4gICAgICovXG4gICAgbWFyZ2luVG9wOiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMTR9LFxuICAgIC8qKlxuICAgICAqIFRoZSBkZWxheSB0aGF0IHdpbGwgYmUgYXBwbGllZCBiZWZvcmUgdGhlIGBlbnRyeWAgYW5pbWF0aW9uIGlzXG4gICAgICogcGxheWVkIHdoZW4gc2hvd2luZyB0aGUgdG9vbHRpcC5cbiAgICAgKi9cbiAgICBhbmltYXRpb25EZWxheToge3R5cGU6IE51bWJlciwgdmFsdWU6IDUwMCwgb2JzZXJ2ZXI6ICdfZGVsYXlDaGFuZ2UnfSxcbiAgICAvKipcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHRoYXQgd2lsbCBiZSBwbGF5ZWQgb24gZW50cnkuICBUaGlzIHJlcGxhY2VzIHRoZVxuICAgICAqIGRlcHJlY2F0ZWQgYW5pbWF0aW9uQ29uZmlnLiAgRW50cmllcyBoZXJlIHdpbGwgb3ZlcnJpZGUgdGhlXG4gICAgICogYW5pbWF0aW9uQ29uZmlnIHNldHRpbmdzLiAgWW91IGNhbiBlbnRlciB5b3VyIG93biBhbmltYXRpb25cbiAgICAgKiBieSBzZXR0aW5nIGl0IHRvIHRoZSBjc3MgY2xhc3MgbmFtZS5cbiAgICAgKi9cbiAgICBhbmltYXRpb25FbnRyeToge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcbiAgICAvKipcbiAgICAgKiBUaGUgYW5pbWF0aW9uIHRoYXQgd2lsbCBiZSBwbGF5ZWQgb24gZXhpdC4gIFRoaXMgcmVwbGFjZXMgdGhlXG4gICAgICogZGVwcmVjYXRlZCBhbmltYXRpb25Db25maWcuICBFbnRyaWVzIGhlcmUgd2lsbCBvdmVycmlkZSB0aGVcbiAgICAgKiBhbmltYXRpb25Db25maWcgc2V0dGluZ3MuICBZb3UgY2FuIGVudGVyIHlvdXIgb3duIGFuaW1hdGlvblxuICAgICAqIGJ5IHNldHRpbmcgaXQgdG8gdGhlIGNzcyBjbGFzcyBuYW1lLlxuICAgICAqL1xuICAgIGFuaW1hdGlvbkV4aXQ6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnJ30sXG4gICAgLyoqXG4gICAgICogVGhpcyBwcm9wZXJ0eSBpcyBkZXByZWNhdGVkLiAgVXNlIC0tcGFwZXItdG9vbHRpcC1hbmltYXRpb24gdG8gY2hhbmdlIHRoZVxuICAgICAqIGFuaW1hdGlvbi4gVGhlIGVudHJ5IGFuZCBleGl0IGFuaW1hdGlvbnMgdGhhdCB3aWxsIGJlIHBsYXllZCB3aGVuIHNob3dpbmdcbiAgICAgKiBhbmQgaGlkaW5nIHRoZSB0b29sdGlwLiBJZiB5b3Ugd2FudCB0byBvdmVycmlkZSB0aGlzLCB5b3UgbXVzdCBlbnN1cmVcbiAgICAgKiB0aGF0IHlvdXIgYW5pbWF0aW9uQ29uZmlnIGhhcyB0aGUgZXhhY3QgZm9ybWF0IGJlbG93LlxuICAgICAqIEBkZXByZWNhdGVkIHNpbmNlIHZlcnNpb25cbiAgICAgKlxuICAgICAqIFRoZSBlbnRyeSBhbmQgZXhpdCBhbmltYXRpb25zIHRoYXQgd2lsbCBiZSBwbGF5ZWQgd2hlbiBzaG93aW5nIGFuZFxuICAgICAqIGhpZGluZyB0aGUgdG9vbHRpcC4gSWYgeW91IHdhbnQgdG8gb3ZlcnJpZGUgdGhpcywgeW91IG11c3QgZW5zdXJlXG4gICAgICogdGhhdCB5b3VyIGFuaW1hdGlvbkNvbmZpZyBoYXMgdGhlIGV4YWN0IGZvcm1hdCBiZWxvdy5cbiAgICAgKi9cbiAgICBhbmltYXRpb25Db25maWc6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAnZW50cnknOlxuICAgICAgICAgICAgICBbe25hbWU6ICdmYWRlLWluLWFuaW1hdGlvbicsIG5vZGU6IHRoaXMsIHRpbWluZzoge2RlbGF5OiAwfX1dLFxuICAgICAgICAgICAgICAnZXhpdCc6IFt7bmFtZTogJ2ZhZGUtb3V0LWFuaW1hdGlvbicsIG5vZGU6IHRoaXN9XVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSxcbiAgICBfc2hvd2luZzoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX1cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAnd2Via2l0QW5pbWF0aW9uRW5kJzogJ19vbkFuaW1hdGlvbkVuZCcsXG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHRhcmdldCBlbGVtZW50IHRoYXQgdGhpcyB0b29sdGlwIGlzIGFuY2hvcmVkIHRvLiBJdCBpc1xuICAgKiBlaXRoZXIgdGhlIGVsZW1lbnQgZ2l2ZW4gYnkgdGhlIGBmb3JgIGF0dHJpYnV0ZSwgb3IgdGhlIGltbWVkaWF0ZSBwYXJlbnRcbiAgICogb2YgdGhlIHRvb2x0aXAuXG4gICAqXG4gICAqIEB0eXBlIHtOb2RlfVxuICAgKi9cbiAgZ2V0IHRhcmdldCgpIHtcbiAgICB2YXIgcGFyZW50Tm9kZSA9IGRvbSh0aGlzKS5wYXJlbnROb2RlO1xuICAgIC8vIElmIHRoZSBwYXJlbnROb2RlIGlzIGEgZG9jdW1lbnQgZnJhZ21lbnQsIHRoZW4gd2UgbmVlZCB0byB1c2UgdGhlIGhvc3QuXG4gICAgdmFyIG93bmVyUm9vdCA9IGRvbSh0aGlzKS5nZXRPd25lclJvb3QoKTtcbiAgICB2YXIgdGFyZ2V0O1xuICAgIGlmICh0aGlzLmZvcikge1xuICAgICAgdGFyZ2V0ID0gZG9tKG93bmVyUm9vdCkucXVlcnlTZWxlY3RvcignIycgKyB0aGlzLmZvcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldCA9IHBhcmVudE5vZGUubm9kZVR5cGUgPT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFID9cbiAgICAgICAgICBvd25lclJvb3QuaG9zdCA6XG4gICAgICAgICAgcGFyZW50Tm9kZTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldDtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9maW5kVGFyZ2V0KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEByZXR1cm4ge3ZvaWR9XG4gICAqL1xuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLm1hbnVhbE1vZGUpXG4gICAgICB0aGlzLl9yZW1vdmVMaXN0ZW5lcnMoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVwbGFjZXMgTmVvbi1BbmltYXRpb24gcGxheUFuaW1hdGlvbiAtIGp1c3QgY2FsbHMgc2hvdyBhbmQgaGlkZS5cbiAgICogQGRlcHJlY2F0ZWQgVXNlIHNob3cgYW5kIGhpZGUgaW5zdGVhZC5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGUgRWl0aGVyIGBlbnRyeWAgb3IgYGV4aXRgXG4gICAqL1xuICBwbGF5QW5pbWF0aW9uOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgaWYgKHR5cGUgPT09ICdlbnRyeScpIHtcbiAgICAgIHRoaXMuc2hvdygpO1xuICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gJ2V4aXQnKSB7XG4gICAgICB0aGlzLmhpZGUoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgdGhlIGFuaW1hdGlvbiBhbmQgZWl0aGVyIGZ1bGx5IHNob3dzIG9yIGZ1bGx5IGhpZGVzIHRvb2x0aXBcbiAgICovXG4gIGNhbmNlbEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgLy8gU2hvcnQtY3V0IGFuZCBjYW5jZWwgYWxsIGFuaW1hdGlvbnMgYW5kIGhpZGVcbiAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QuYWRkKCdjYW5jZWwtYW5pbWF0aW9uJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3dzIHRoZSB0b29sdGlwIHByb2dyYW1hdGljYWxseVxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgc2hvdzogZnVuY3Rpb24oKSB7XG4gICAgLy8gSWYgdGhlIHRvb2x0aXAgaXMgYWxyZWFkeSBzaG93aW5nLCB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uXG4gICAgaWYgKHRoaXMuX3Nob3dpbmcpXG4gICAgICByZXR1cm47XG5cbiAgICBpZiAoZG9tKHRoaXMpLnRleHRDb250ZW50LnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIC8vIENoZWNrIGlmIGVmZmVjdGl2ZSBjaGlsZHJlbiBhcmUgYWxzbyBlbXB0eVxuICAgICAgdmFyIGFsbENoaWxkcmVuRW1wdHkgPSB0cnVlO1xuICAgICAgdmFyIGVmZmVjdGl2ZUNoaWxkcmVuID0gZG9tKHRoaXMpLmdldEVmZmVjdGl2ZUNoaWxkTm9kZXMoKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWZmZWN0aXZlQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKGVmZmVjdGl2ZUNoaWxkcmVuW2ldLnRleHRDb250ZW50LnRyaW0oKSAhPT0gJycpIHtcbiAgICAgICAgICBhbGxDaGlsZHJlbkVtcHR5ID0gZmFsc2U7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhbGxDaGlsZHJlbkVtcHR5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9zaG93aW5nID0gdHJ1ZTtcbiAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdjYW5jZWwtYW5pbWF0aW9uJyk7XG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9nZXRBbmltYXRpb25UeXBlKCdleGl0JykpO1xuICAgIHRoaXMudXBkYXRlUG9zaXRpb24oKTtcbiAgICB0aGlzLl9hbmltYXRpb25QbGF5aW5nID0gdHJ1ZTtcbiAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QuYWRkKHRoaXMuX2dldEFuaW1hdGlvblR5cGUoJ2VudHJ5JykpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBIaWRlcyB0aGUgdG9vbHRpcCBwcm9ncmFtYXRpY2FsbHlcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIGhpZGU6IGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIHRoZSB0b29sdGlwIGlzIGFscmVhZHkgaGlkZGVuLCB0aGVyZSdzIG5vdGhpbmcgdG8gZG8uXG4gICAgaWYgKCF0aGlzLl9zaG93aW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGVudHJ5IGFuaW1hdGlvbiBpcyBzdGlsbCBwbGF5aW5nLCBkb24ndCB0cnkgdG8gcGxheSB0aGUgZXhpdFxuICAgIC8vIGFuaW1hdGlvbiBzaW5jZSB0aGlzIHdpbGwgcmVzZXQgdGhlIG9wYWNpdHkgdG8gMS4gSnVzdCBlbmQgdGhlIGFuaW1hdGlvbi5cbiAgICBpZiAodGhpcy5fYW5pbWF0aW9uUGxheWluZykge1xuICAgICAgdGhpcy5fc2hvd2luZyA9IGZhbHNlO1xuICAgICAgdGhpcy5fY2FuY2VsQW5pbWF0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFBsYXkgRXhpdCBBbmltYXRpb25cbiAgICAgIHRoaXMuX29uQW5pbWF0aW9uRmluaXNoKCk7XG4gICAgfVxuXG4gICAgdGhpcy5fc2hvd2luZyA9IGZhbHNlO1xuICAgIHRoaXMuX2FuaW1hdGlvblBsYXlpbmcgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgdXBkYXRlUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5fdGFyZ2V0IHx8ICF0aGlzLm9mZnNldFBhcmVudClcbiAgICAgIHJldHVybjtcbiAgICB2YXIgb2Zmc2V0ID0gdGhpcy5vZmZzZXQ7XG4gICAgLy8gSWYgYSBtYXJnaW5Ub3AgaGFzIGJlZW4gcHJvdmlkZWQgYnkgdGhlIHVzZXIgKHByZSAxLjAuMyksIHVzZSBpdC5cbiAgICBpZiAodGhpcy5tYXJnaW5Ub3AgIT0gMTQgJiYgdGhpcy5vZmZzZXQgPT0gMTQpXG4gICAgICBvZmZzZXQgPSB0aGlzLm1hcmdpblRvcDtcbiAgICB2YXIgcGFyZW50UmVjdCA9IHRoaXMub2Zmc2V0UGFyZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB0YXJnZXRSZWN0ID0gdGhpcy5fdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciB0aGlzUmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGhvcml6b250YWxDZW50ZXJPZmZzZXQgPSAodGFyZ2V0UmVjdC53aWR0aCAtIHRoaXNSZWN0LndpZHRoKSAvIDI7XG4gICAgdmFyIHZlcnRpY2FsQ2VudGVyT2Zmc2V0ID0gKHRhcmdldFJlY3QuaGVpZ2h0IC0gdGhpc1JlY3QuaGVpZ2h0KSAvIDI7XG4gICAgdmFyIHRhcmdldExlZnQgPSB0YXJnZXRSZWN0LmxlZnQgLSBwYXJlbnRSZWN0LmxlZnQ7XG4gICAgdmFyIHRhcmdldFRvcCA9IHRhcmdldFJlY3QudG9wIC0gcGFyZW50UmVjdC50b3A7XG4gICAgdmFyIHRvb2x0aXBMZWZ0LCB0b29sdGlwVG9wO1xuICAgIHN3aXRjaCAodGhpcy5wb3NpdGlvbikge1xuICAgICAgY2FzZSAndG9wJzpcbiAgICAgICAgdG9vbHRpcExlZnQgPSB0YXJnZXRMZWZ0ICsgaG9yaXpvbnRhbENlbnRlck9mZnNldDtcbiAgICAgICAgdG9vbHRpcFRvcCA9IHRhcmdldFRvcCAtIHRoaXNSZWN0LmhlaWdodCAtIG9mZnNldDtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdib3R0b20nOlxuICAgICAgICB0b29sdGlwTGVmdCA9IHRhcmdldExlZnQgKyBob3Jpem9udGFsQ2VudGVyT2Zmc2V0O1xuICAgICAgICB0b29sdGlwVG9wID0gdGFyZ2V0VG9wICsgdGFyZ2V0UmVjdC5oZWlnaHQgKyBvZmZzZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgIHRvb2x0aXBMZWZ0ID0gdGFyZ2V0TGVmdCAtIHRoaXNSZWN0LndpZHRoIC0gb2Zmc2V0O1xuICAgICAgICB0b29sdGlwVG9wID0gdGFyZ2V0VG9wICsgdmVydGljYWxDZW50ZXJPZmZzZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICB0b29sdGlwTGVmdCA9IHRhcmdldExlZnQgKyB0YXJnZXRSZWN0LndpZHRoICsgb2Zmc2V0O1xuICAgICAgICB0b29sdGlwVG9wID0gdGFyZ2V0VG9wICsgdmVydGljYWxDZW50ZXJPZmZzZXQ7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICAvLyBUT0RPKG5vbXMpOiBUaGlzIHNob3VsZCB1c2UgSXJvbkZpdEJlaGF2aW9yIGlmIHBvc3NpYmxlLlxuICAgIGlmICh0aGlzLmZpdFRvVmlzaWJsZUJvdW5kcykge1xuICAgICAgLy8gQ2xpcCB0aGUgbGVmdC9yaWdodCBzaWRlXG4gICAgICBpZiAocGFyZW50UmVjdC5sZWZ0ICsgdG9vbHRpcExlZnQgKyB0aGlzUmVjdC53aWR0aCA+IHdpbmRvdy5pbm5lcldpZHRoKSB7XG4gICAgICAgIHRoaXMuc3R5bGUucmlnaHQgPSAnMHB4JztcbiAgICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gJ2F1dG8nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gTWF0aC5tYXgoMCwgdG9vbHRpcExlZnQpICsgJ3B4JztcbiAgICAgICAgdGhpcy5zdHlsZS5yaWdodCA9ICdhdXRvJztcbiAgICAgIH1cbiAgICAgIC8vIENsaXAgdGhlIHRvcC9ib3R0b20gc2lkZS5cbiAgICAgIGlmIChwYXJlbnRSZWN0LnRvcCArIHRvb2x0aXBUb3AgKyB0aGlzUmVjdC5oZWlnaHQgPiB3aW5kb3cuaW5uZXJIZWlnaHQpIHtcbiAgICAgICAgdGhpcy5zdHlsZS5ib3R0b20gPSAocGFyZW50UmVjdC5oZWlnaHQgLSB0YXJnZXRUb3AgKyBvZmZzZXQpICsgJ3B4JztcbiAgICAgICAgdGhpcy5zdHlsZS50b3AgPSAnYXV0byc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnN0eWxlLnRvcCA9IE1hdGgubWF4KC1wYXJlbnRSZWN0LnRvcCwgdG9vbHRpcFRvcCkgKyAncHgnO1xuICAgICAgICB0aGlzLnN0eWxlLmJvdHRvbSA9ICdhdXRvJztcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gdG9vbHRpcExlZnQgKyAncHgnO1xuICAgICAgdGhpcy5zdHlsZS50b3AgPSB0b29sdGlwVG9wICsgJ3B4JztcbiAgICB9XG4gIH0sXG5cbiAgX2FkZExpc3RlbmVyczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3RhcmdldCkge1xuICAgICAgdGhpcy5saXN0ZW4odGhpcy5fdGFyZ2V0LCAnbW91c2VlbnRlcicsICdzaG93Jyk7XG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLl90YXJnZXQsICdmb2N1cycsICdzaG93Jyk7XG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLl90YXJnZXQsICdtb3VzZWxlYXZlJywgJ2hpZGUnKTtcbiAgICAgIHRoaXMubGlzdGVuKHRoaXMuX3RhcmdldCwgJ2JsdXInLCAnaGlkZScpO1xuICAgICAgdGhpcy5saXN0ZW4odGhpcy5fdGFyZ2V0LCAndGFwJywgJ2hpZGUnKTtcbiAgICB9XG4gICAgdGhpcy5saXN0ZW4odGhpcy4kLnRvb2x0aXAsICdhbmltYXRpb25lbmQnLCAnX29uQW5pbWF0aW9uRW5kJyk7XG4gICAgdGhpcy5saXN0ZW4odGhpcywgJ21vdXNlZW50ZXInLCAnaGlkZScpO1xuICB9LFxuXG4gIF9maW5kVGFyZ2V0OiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMubWFudWFsTW9kZSlcbiAgICAgIHRoaXMuX3JlbW92ZUxpc3RlbmVycygpO1xuICAgIHRoaXMuX3RhcmdldCA9IHRoaXMudGFyZ2V0O1xuICAgIGlmICghdGhpcy5tYW51YWxNb2RlKVxuICAgICAgdGhpcy5fYWRkTGlzdGVuZXJzKCk7XG4gIH0sXG5cbiAgX2RlbGF5Q2hhbmdlOiBmdW5jdGlvbihuZXdWYWx1ZSkge1xuICAgIC8vIE9ubHkgVXBkYXRlIGRlbGF5IGlmIGRpZmZlcmVudCB2YWx1ZSBzZXRcbiAgICBpZiAobmV3VmFsdWUgIT09IDUwMCkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZXMoeyctLXBhcGVyLXRvb2x0aXAtZGVsYXktaW4nOiBuZXdWYWx1ZSArICdtcyd9KTtcbiAgICB9XG4gIH0sXG5cbiAgX21hbnVhbE1vZGVDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5tYW51YWxNb2RlKVxuICAgICAgdGhpcy5fcmVtb3ZlTGlzdGVuZXJzKCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5fYWRkTGlzdGVuZXJzKCk7XG4gIH0sXG5cbiAgX2NhbmNlbEFuaW1hdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgLy8gU2hvcnQtY3V0IGFuZCBjYW5jZWwgYWxsIGFuaW1hdGlvbnMgYW5kIGhpZGVcbiAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuX2dldEFuaW1hdGlvblR5cGUoJ2VudHJ5JykpO1xuICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5fZ2V0QW5pbWF0aW9uVHlwZSgnZXhpdCcpKTtcbiAgICB0aGlzLiQudG9vbHRpcC5jbGFzc0xpc3QucmVtb3ZlKCdjYW5jZWwtYW5pbWF0aW9uJyk7XG4gICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIH0sXG5cbiAgX29uQW5pbWF0aW9uRmluaXNoOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fc2hvd2luZykge1xuICAgICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9nZXRBbmltYXRpb25UeXBlKCdlbnRyeScpKTtcbiAgICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5yZW1vdmUoJ2NhbmNlbC1hbmltYXRpb24nKTtcbiAgICAgIHRoaXMuJC50b29sdGlwLmNsYXNzTGlzdC5hZGQodGhpcy5fZ2V0QW5pbWF0aW9uVHlwZSgnZXhpdCcpKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uQW5pbWF0aW9uRW5kOiBmdW5jdGlvbigpIHtcbiAgICAvLyBJZiBubyBsb25nZXIgc2hvd2luZyBhZGQgY2xhc3MgaGlkZGVuIHRvIGNvbXBsZXRlbHkgaGlkZSB0b29sdGlwXG4gICAgdGhpcy5fYW5pbWF0aW9uUGxheWluZyA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5fc2hvd2luZykge1xuICAgICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLl9nZXRBbmltYXRpb25UeXBlKCdleGl0JykpO1xuICAgICAgdGhpcy4kLnRvb2x0aXAuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9LFxuXG4gIF9nZXRBbmltYXRpb25UeXBlOiBmdW5jdGlvbih0eXBlKSB7XG4gICAgLy8gVGhlc2UgcHJvcGVydGllcyBoYXZlIHByaW9yaXR5IG92ZXIgYW5pbWF0aW9uQ29uZmlnIHZhbHVlc1xuICAgIGlmICgodHlwZSA9PT0gJ2VudHJ5JykgJiYgKHRoaXMuYW5pbWF0aW9uRW50cnkgIT09ICcnKSkge1xuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uRW50cnk7XG4gICAgfVxuICAgIGlmICgodHlwZSA9PT0gJ2V4aXQnKSAmJiAodGhpcy5hbmltYXRpb25FeGl0ICE9PSAnJykpIHtcbiAgICAgIHJldHVybiB0aGlzLmFuaW1hdGlvbkV4aXQ7XG4gICAgfVxuICAgIC8vIElmIG5vIHJlc3VsdHMgdGhlbiByZXR1cm4gdGhlIGxlZ2FjeSB2YWx1ZSBmcm9tIGFuaW1hdGlvbkNvbmZpZ1xuICAgIGlmICh0aGlzLmFuaW1hdGlvbkNvbmZpZ1t0eXBlXSAmJlxuICAgICAgICB0eXBlb2YgdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV1bMF0ubmFtZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIENoZWNraW5nIFRpbWluZyBhbmQgVXBkYXRlIGlmIG5lY2Vzc2FyeSAtIExlZ2FjeSBmb3IgYW5pbWF0aW9uQ29uZmlnXG4gICAgICBpZiAodGhpcy5hbmltYXRpb25Db25maWdbdHlwZV1bMF0udGltaW5nICYmXG4gICAgICAgICAgdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV1bMF0udGltaW5nLmRlbGF5ICYmXG4gICAgICAgICAgdGhpcy5hbmltYXRpb25Db25maWdbdHlwZV1bMF0udGltaW5nLmRlbGF5ICE9PSAwKSB7XG4gICAgICAgIHZhciB0aW1pbmdEZWxheSA9IHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdWzBdLnRpbWluZy5kZWxheTtcbiAgICAgICAgLy8gSGFzIFRpbWluZyBDaGFuZ2UgLSBVcGRhdGUgQ1NTXG4gICAgICAgIGlmICh0eXBlID09PSAnZW50cnknKSB7XG4gICAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoeyctLXBhcGVyLXRvb2x0aXAtZGVsYXktaW4nOiB0aW1pbmdEZWxheSArICdtcyd9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSAnZXhpdCcpIHtcbiAgICAgICAgICB0aGlzLnVwZGF0ZVN0eWxlcyh7Jy0tcGFwZXItdG9vbHRpcC1kZWxheS1vdXQnOiB0aW1pbmdEZWxheSArICdtcyd9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuYW5pbWF0aW9uQ29uZmlnW3R5cGVdWzBdLm5hbWU7XG4gICAgfVxuICB9LFxuXG4gIF9yZW1vdmVMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl90YXJnZXQpIHtcbiAgICAgIHRoaXMudW5saXN0ZW4odGhpcy5fdGFyZ2V0LCAnbW91c2VlbnRlcicsICdzaG93Jyk7XG4gICAgICB0aGlzLnVubGlzdGVuKHRoaXMuX3RhcmdldCwgJ2ZvY3VzJywgJ3Nob3cnKTtcbiAgICAgIHRoaXMudW5saXN0ZW4odGhpcy5fdGFyZ2V0LCAnbW91c2VsZWF2ZScsICdoaWRlJyk7XG4gICAgICB0aGlzLnVubGlzdGVuKHRoaXMuX3RhcmdldCwgJ2JsdXInLCAnaGlkZScpO1xuICAgICAgdGhpcy51bmxpc3Rlbih0aGlzLl90YXJnZXQsICd0YXAnLCAnaGlkZScpO1xuICAgIH1cbiAgICB0aGlzLnVubGlzdGVuKHRoaXMuJC50b29sdGlwLCAnYW5pbWF0aW9uZW5kJywgJ19vbkFuaW1hdGlvbkVuZCcpO1xuICAgIHRoaXMudW5saXN0ZW4odGhpcywgJ21vdXNlZW50ZXInLCAnaGlkZScpO1xuICB9XG59KTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXNDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFrTEE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7QUFNQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBSEE7QUFLQTtBQVJBO0FBVUE7QUFBQTtBQUFBO0FBQUE7QUF4RUE7QUEyRUE7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWhCQTtBQUNBO0FBQ0E7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXBoQkE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==