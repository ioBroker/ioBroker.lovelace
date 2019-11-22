(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog~notification-manager~panel-lovelace"],{

/***/ "./node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js ***!
  \**********************************************************************/
/*! exports provided: IronFitBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFitBehavior", function() { return IronFitBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
`Polymer.IronFitBehavior` fits an element in another element using `max-height`
and `max-width`, and optionally centers it in the window or another element.

The element will only be sized and/or positioned if it has not already been
sized and/or positioned by CSS.

CSS properties            | Action
--------------------------|-------------------------------------------
`position` set            | Element is not centered horizontally or vertically
`top` or `bottom` set     | Element is not vertically centered
`left` or `right` set     | Element is not horizontally centered
`max-height` set          | Element respects `max-height`
`max-width` set           | Element respects `max-width`

`Polymer.IronFitBehavior` can position an element into another element using
`verticalAlign` and `horizontalAlign`. This will override the element's css
position.

    <div class="container">
      <iron-fit-impl vertical-align="top" horizontal-align="auto">
        Positioned into the container
      </iron-fit-impl>
    </div>

Use `noOverlap` to position the element around another element without
overlapping it.

    <div class="container">
      <iron-fit-impl no-overlap vertical-align="auto" horizontal-align="auto">
        Positioned around the container
      </iron-fit-impl>
    </div>

Use `horizontalOffset, verticalOffset` to offset the element from its
`positionTarget`; `Polymer.IronFitBehavior` will collapse these in order to
keep the element within `fitInto` boundaries, while preserving the element's
CSS margin values.

    <div class="container">
      <iron-fit-impl vertical-align="top" vertical-offset="20">
        With vertical offset
      </iron-fit-impl>
    </div>

@demo demo/index.html
@polymerBehavior
*/

var IronFitBehavior = {
  properties: {
    /**
     * The element that will receive a `max-height`/`width`. By default it is
     * the same as `this`, but it can be set to a child element. This is useful,
     * for example, for implementing a scrolling region inside the element.
     * @type {!Element}
     */
    sizingTarget: {
      type: Object,
      value: function value() {
        return this;
      }
    },

    /**
     * The element to fit `this` into.
     */
    fitInto: {
      type: Object,
      value: window
    },

    /**
     * Will position the element around the positionTarget without overlapping
     * it.
     */
    noOverlap: {
      type: Boolean
    },

    /**
     * The element that should be used to position the element. If not set, it
     * will default to the parent node.
     * @type {!Element}
     */
    positionTarget: {
      type: Element
    },

    /**
     * The orientation against which to align the element horizontally
     * relative to the `positionTarget`. Possible values are "left", "right",
     * "center", "auto".
     */
    horizontalAlign: {
      type: String
    },

    /**
     * The orientation against which to align the element vertically
     * relative to the `positionTarget`. Possible values are "top", "bottom",
     * "middle", "auto".
     */
    verticalAlign: {
      type: String
    },

    /**
     * If true, it will use `horizontalAlign` and `verticalAlign` values as
     * preferred alignment and if there's not enough space, it will pick the
     * values which minimize the cropping.
     */
    dynamicAlign: {
      type: Boolean
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `horizontalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `horizontalAlign`.
     *
     * If `horizontalAlign` is "left" or "center", this offset will increase or
     * decrease the distance to the left side of the screen: a negative offset
     * will move the dropdown to the left; a positive one, to the right.
     *
     * Conversely if `horizontalAlign` is "right", this offset will increase
     * or decrease the distance to the right side of the screen: a negative
     * offset will move the dropdown to the right; a positive one, to the left.
     */
    horizontalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * A pixel value that will be added to the position calculated for the
     * given `verticalAlign`, in the direction of alignment. You can think
     * of it as increasing or decreasing the distance to the side of the
     * screen given by `verticalAlign`.
     *
     * If `verticalAlign` is "top" or "middle", this offset will increase or
     * decrease the distance to the top side of the screen: a negative offset
     * will move the dropdown upwards; a positive one, downwards.
     *
     * Conversely if `verticalAlign` is "bottom", this offset will increase
     * or decrease the distance to the bottom side of the screen: a negative
     * offset will move the dropdown downwards; a positive one, upwards.
     */
    verticalOffset: {
      type: Number,
      value: 0,
      notify: true
    },

    /**
     * Set to true to auto-fit on attach.
     */
    autoFitOnAttach: {
      type: Boolean,
      value: false
    },

    /** @type {?Object} */
    _fitInfo: {
      type: Object
    }
  },

  get _fitWidth() {
    var fitWidth;

    if (this.fitInto === window) {
      fitWidth = this.fitInto.innerWidth;
    } else {
      fitWidth = this.fitInto.getBoundingClientRect().width;
    }

    return fitWidth;
  },

  get _fitHeight() {
    var fitHeight;

    if (this.fitInto === window) {
      fitHeight = this.fitInto.innerHeight;
    } else {
      fitHeight = this.fitInto.getBoundingClientRect().height;
    }

    return fitHeight;
  },

  get _fitLeft() {
    var fitLeft;

    if (this.fitInto === window) {
      fitLeft = 0;
    } else {
      fitLeft = this.fitInto.getBoundingClientRect().left;
    }

    return fitLeft;
  },

  get _fitTop() {
    var fitTop;

    if (this.fitInto === window) {
      fitTop = 0;
    } else {
      fitTop = this.fitInto.getBoundingClientRect().top;
    }

    return fitTop;
  },

  /**
   * The element that should be used to position the element,
   * if no position target is configured.
   */
  get _defaultPositionTarget() {
    var parent = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(this).parentNode;

    if (parent && parent.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
      parent = parent.host;
    }

    return parent;
  },

  /**
   * The horizontal align value, accounting for the RTL/LTR text direction.
   */
  get _localeHorizontalAlign() {
    if (this._isRTL) {
      // In RTL, "left" becomes "right".
      if (this.horizontalAlign === 'right') {
        return 'left';
      }

      if (this.horizontalAlign === 'left') {
        return 'right';
      }
    }

    return this.horizontalAlign;
  },

  /**
   * True if the element should be positioned instead of centered.
   * @private
   */
  get __shouldPosition() {
    return (this.horizontalAlign || this.verticalAlign) && this.positionTarget;
  },

  attached: function attached() {
    // Memoize this to avoid expensive calculations & relayouts.
    // Make sure we do it only once
    if (typeof this._isRTL === 'undefined') {
      this._isRTL = window.getComputedStyle(this).direction == 'rtl';
    }

    this.positionTarget = this.positionTarget || this._defaultPositionTarget;

    if (this.autoFitOnAttach) {
      if (window.getComputedStyle(this).display === 'none') {
        setTimeout(function () {
          this.fit();
        }.bind(this));
      } else {
        // NOTE: shadydom applies distribution asynchronously
        // for performance reasons webcomponents/shadydom#120
        // Flush to get correct layout info.
        window.ShadyDOM && ShadyDOM.flush();
        this.fit();
      }
    }
  },
  detached: function detached() {
    if (this.__deferredFit) {
      clearTimeout(this.__deferredFit);
      this.__deferredFit = null;
    }
  },

  /**
   * Positions and fits the element into the `fitInto` element.
   */
  fit: function fit() {
    this.position();
    this.constrain();
    this.center();
  },

  /**
   * Memoize information needed to position and size the target element.
   * @suppress {deprecated}
   */
  _discoverInfo: function _discoverInfo() {
    if (this._fitInfo) {
      return;
    }

    var target = window.getComputedStyle(this);
    var sizer = window.getComputedStyle(this.sizingTarget);
    this._fitInfo = {
      inlineStyle: {
        top: this.style.top || '',
        left: this.style.left || '',
        position: this.style.position || ''
      },
      sizerInlineStyle: {
        maxWidth: this.sizingTarget.style.maxWidth || '',
        maxHeight: this.sizingTarget.style.maxHeight || '',
        boxSizing: this.sizingTarget.style.boxSizing || ''
      },
      positionedBy: {
        vertically: target.top !== 'auto' ? 'top' : target.bottom !== 'auto' ? 'bottom' : null,
        horizontally: target.left !== 'auto' ? 'left' : target.right !== 'auto' ? 'right' : null
      },
      sizedBy: {
        height: sizer.maxHeight !== 'none',
        width: sizer.maxWidth !== 'none',
        minWidth: parseInt(sizer.minWidth, 10) || 0,
        minHeight: parseInt(sizer.minHeight, 10) || 0
      },
      margin: {
        top: parseInt(target.marginTop, 10) || 0,
        right: parseInt(target.marginRight, 10) || 0,
        bottom: parseInt(target.marginBottom, 10) || 0,
        left: parseInt(target.marginLeft, 10) || 0
      }
    };
  },

  /**
   * Resets the target element's position and size constraints, and clear
   * the memoized data.
   */
  resetFit: function resetFit() {
    var info = this._fitInfo || {};

    for (var property in info.sizerInlineStyle) {
      this.sizingTarget.style[property] = info.sizerInlineStyle[property];
    }

    for (var property in info.inlineStyle) {
      this.style[property] = info.inlineStyle[property];
    }

    this._fitInfo = null;
  },

  /**
   * Equivalent to calling `resetFit()` and `fit()`. Useful to call this after
   * the element or the `fitInto` element has been resized, or if any of the
   * positioning properties (e.g. `horizontalAlign, verticalAlign`) is updated.
   * It preserves the scroll position of the sizingTarget.
   */
  refit: function refit() {
    var scrollLeft = this.sizingTarget.scrollLeft;
    var scrollTop = this.sizingTarget.scrollTop;
    this.resetFit();
    this.fit();
    this.sizingTarget.scrollLeft = scrollLeft;
    this.sizingTarget.scrollTop = scrollTop;
  },

  /**
   * Positions the element according to `horizontalAlign, verticalAlign`.
   */
  position: function position() {
    if (!this.__shouldPosition) {
      // needs to be centered, and it is done after constrain.
      return;
    }

    this._discoverInfo();

    this.style.position = 'fixed'; // Need border-box for margin/padding.

    this.sizingTarget.style.boxSizing = 'border-box'; // Set to 0, 0 in order to discover any offset caused by parent stacking
    // contexts.

    this.style.left = '0px';
    this.style.top = '0px';
    var rect = this.getBoundingClientRect();

    var positionRect = this.__getNormalizedRect(this.positionTarget);

    var fitRect = this.__getNormalizedRect(this.fitInto);

    var margin = this._fitInfo.margin; // Consider the margin as part of the size for position calculations.

    var size = {
      width: rect.width + margin.left + margin.right,
      height: rect.height + margin.top + margin.bottom
    };

    var position = this.__getPosition(this._localeHorizontalAlign, this.verticalAlign, size, rect, positionRect, fitRect);

    var left = position.left + margin.left;
    var top = position.top + margin.top; // We first limit right/bottom within fitInto respecting the margin,
    // then use those values to limit top/left.

    var right = Math.min(fitRect.right - margin.right, left + rect.width);
    var bottom = Math.min(fitRect.bottom - margin.bottom, top + rect.height); // Keep left/top within fitInto respecting the margin.

    left = Math.max(fitRect.left + margin.left, Math.min(left, right - this._fitInfo.sizedBy.minWidth));
    top = Math.max(fitRect.top + margin.top, Math.min(top, bottom - this._fitInfo.sizedBy.minHeight)); // Use right/bottom to set maxWidth/maxHeight, and respect
    // minWidth/minHeight.

    this.sizingTarget.style.maxWidth = Math.max(right - left, this._fitInfo.sizedBy.minWidth) + 'px';
    this.sizingTarget.style.maxHeight = Math.max(bottom - top, this._fitInfo.sizedBy.minHeight) + 'px'; // Remove the offset caused by any stacking context.

    this.style.left = left - rect.left + 'px';
    this.style.top = top - rect.top + 'px';
  },

  /**
   * Constrains the size of the element to `fitInto` by setting `max-height`
   * and/or `max-width`.
   */
  constrain: function constrain() {
    if (this.__shouldPosition) {
      return;
    }

    this._discoverInfo();

    var info = this._fitInfo; // position at (0px, 0px) if not already positioned, so we can measure the
    // natural size.

    if (!info.positionedBy.vertically) {
      this.style.position = 'fixed';
      this.style.top = '0px';
    }

    if (!info.positionedBy.horizontally) {
      this.style.position = 'fixed';
      this.style.left = '0px';
    } // need border-box for margin/padding


    this.sizingTarget.style.boxSizing = 'border-box'; // constrain the width and height if not already set

    var rect = this.getBoundingClientRect();

    if (!info.sizedBy.height) {
      this.__sizeDimension(rect, info.positionedBy.vertically, 'top', 'bottom', 'Height');
    }

    if (!info.sizedBy.width) {
      this.__sizeDimension(rect, info.positionedBy.horizontally, 'left', 'right', 'Width');
    }
  },

  /**
   * @protected
   * @deprecated
   */
  _sizeDimension: function _sizeDimension(rect, positionedBy, start, end, extent) {
    this.__sizeDimension(rect, positionedBy, start, end, extent);
  },

  /**
   * @private
   */
  __sizeDimension: function __sizeDimension(rect, positionedBy, start, end, extent) {
    var info = this._fitInfo;

    var fitRect = this.__getNormalizedRect(this.fitInto);

    var max = extent === 'Width' ? fitRect.width : fitRect.height;
    var flip = positionedBy === end;
    var offset = flip ? max - rect[end] : rect[start];
    var margin = info.margin[flip ? start : end];
    var offsetExtent = 'offset' + extent;
    var sizingOffset = this[offsetExtent] - this.sizingTarget[offsetExtent];
    this.sizingTarget.style['max' + extent] = max - margin - offset - sizingOffset + 'px';
  },

  /**
   * Centers horizontally and vertically if not already positioned. This also
   * sets `position:fixed`.
   */
  center: function center() {
    if (this.__shouldPosition) {
      return;
    }

    this._discoverInfo();

    var positionedBy = this._fitInfo.positionedBy;

    if (positionedBy.vertically && positionedBy.horizontally) {
      // Already positioned.
      return;
    } // Need position:fixed to center


    this.style.position = 'fixed'; // Take into account the offset caused by parents that create stacking
    // contexts (e.g. with transform: translate3d). Translate to 0,0 and
    // measure the bounding rect.

    if (!positionedBy.vertically) {
      this.style.top = '0px';
    }

    if (!positionedBy.horizontally) {
      this.style.left = '0px';
    } // It will take in consideration margins and transforms


    var rect = this.getBoundingClientRect();

    var fitRect = this.__getNormalizedRect(this.fitInto);

    if (!positionedBy.vertically) {
      var top = fitRect.top - rect.top + (fitRect.height - rect.height) / 2;
      this.style.top = top + 'px';
    }

    if (!positionedBy.horizontally) {
      var left = fitRect.left - rect.left + (fitRect.width - rect.width) / 2;
      this.style.left = left + 'px';
    }
  },
  __getNormalizedRect: function __getNormalizedRect(target) {
    if (target === document.documentElement || target === window) {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
        right: window.innerWidth,
        bottom: window.innerHeight
      };
    }

    return target.getBoundingClientRect();
  },
  __getOffscreenArea: function __getOffscreenArea(position, size, fitRect) {
    var verticalCrop = Math.min(0, position.top) + Math.min(0, fitRect.bottom - (position.top + size.height));
    var horizontalCrop = Math.min(0, position.left) + Math.min(0, fitRect.right - (position.left + size.width));
    return Math.abs(verticalCrop) * size.width + Math.abs(horizontalCrop) * size.height;
  },
  __getPosition: function __getPosition(hAlign, vAlign, size, sizeNoMargins, positionRect, fitRect) {
    // All the possible configurations.
    // Ordered as top-left, top-right, bottom-left, bottom-right.
    var positions = [{
      verticalAlign: 'top',
      horizontalAlign: 'left',
      top: positionRect.top + this.verticalOffset,
      left: positionRect.left + this.horizontalOffset
    }, {
      verticalAlign: 'top',
      horizontalAlign: 'right',
      top: positionRect.top + this.verticalOffset,
      left: positionRect.right - size.width - this.horizontalOffset
    }, {
      verticalAlign: 'bottom',
      horizontalAlign: 'left',
      top: positionRect.bottom - size.height - this.verticalOffset,
      left: positionRect.left + this.horizontalOffset
    }, {
      verticalAlign: 'bottom',
      horizontalAlign: 'right',
      top: positionRect.bottom - size.height - this.verticalOffset,
      left: positionRect.right - size.width - this.horizontalOffset
    }];

    if (this.noOverlap) {
      // Duplicate.
      for (var i = 0, l = positions.length; i < l; i++) {
        var copy = {};

        for (var key in positions[i]) {
          copy[key] = positions[i][key];
        }

        positions.push(copy);
      } // Horizontal overlap only.


      positions[0].top = positions[1].top += positionRect.height;
      positions[2].top = positions[3].top -= positionRect.height; // Vertical overlap only.

      positions[4].left = positions[6].left += positionRect.width;
      positions[5].left = positions[7].left -= positionRect.width;
    } // Consider auto as null for coding convenience.


    vAlign = vAlign === 'auto' ? null : vAlign;
    hAlign = hAlign === 'auto' ? null : hAlign;

    if (!hAlign || hAlign === 'center') {
      positions.push({
        verticalAlign: 'top',
        horizontalAlign: 'center',
        top: positionRect.top + this.verticalOffset + (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 + positionRect.width / 2 + this.horizontalOffset
      });
      positions.push({
        verticalAlign: 'bottom',
        horizontalAlign: 'center',
        top: positionRect.bottom - size.height - this.verticalOffset - (this.noOverlap ? positionRect.height : 0),
        left: positionRect.left - sizeNoMargins.width / 2 + positionRect.width / 2 + this.horizontalOffset
      });
    }

    if (!vAlign || vAlign === 'middle') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'left',
        top: positionRect.top - sizeNoMargins.height / 2 + positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left + this.horizontalOffset + (this.noOverlap ? positionRect.width : 0)
      });
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'right',
        top: positionRect.top - sizeNoMargins.height / 2 + positionRect.height / 2 + this.verticalOffset,
        left: positionRect.right - size.width - this.horizontalOffset - (this.noOverlap ? positionRect.width : 0)
      });
    }

    if (vAlign === 'middle' && hAlign === 'center') {
      positions.push({
        verticalAlign: 'middle',
        horizontalAlign: 'center',
        top: positionRect.top - sizeNoMargins.height / 2 + positionRect.height / 2 + this.verticalOffset,
        left: positionRect.left - sizeNoMargins.width / 2 + positionRect.width / 2 + this.horizontalOffset
      });
    }

    var position;

    for (var i = 0; i < positions.length; i++) {
      var candidate = positions[i];
      var vAlignOk = candidate.verticalAlign === vAlign;
      var hAlignOk = candidate.horizontalAlign === hAlign; // If both vAlign and hAlign are defined, return exact match.
      // For dynamicAlign and noOverlap we'll have more than one candidate, so
      // we'll have to check the offscreenArea to make the best choice.

      if (!this.dynamicAlign && !this.noOverlap && vAlignOk && hAlignOk) {
        position = candidate;
        break;
      } // Align is ok if alignment preferences are respected. If no preferences,
      // it is considered ok.


      var alignOk = (!vAlign || vAlignOk) && (!hAlign || hAlignOk); // Filter out elements that don't match the alignment (if defined).
      // With dynamicAlign, we need to consider all the positions to find the
      // one that minimizes the cropped area.

      if (!this.dynamicAlign && !alignOk) {
        continue;
      }

      candidate.offscreenArea = this.__getOffscreenArea(candidate, size, fitRect); // If not cropped and respects the align requirements, keep it.
      // This allows to prefer positions overlapping horizontally over the
      // ones overlapping vertically.

      if (candidate.offscreenArea === 0 && alignOk) {
        position = candidate;
        break;
      }

      position = position || candidate;
      var diff = candidate.offscreenArea - position.offscreenArea; // Check which crops less. If it crops equally, check if at least one
      // align setting is ok.

      if (diff < 0 || diff === 0 && (vAlignOk || hAlignOk)) {
        position = candidate;
      }
    }

    return position;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js ***!
  \*******************************************************************************/
/*! exports provided: IronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronFocusablesHelper", function() { return IronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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


var p = Element.prototype;
var matches = p.matches || p.matchesSelector || p.mozMatchesSelector || p.msMatchesSelector || p.oMatchesSelector || p.webkitMatchesSelector;
var IronFocusablesHelper = {
  /**
   * Returns a sorted array of tabbable nodes, including the root node.
   * It searches the tabbable nodes in the light and shadow dom of the chidren,
   * sorting the result by tabindex.
   * @param {!Node} node
   * @return {!Array<!HTMLElement>}
   */
  getTabbableNodes: function getTabbableNodes(node) {
    var result = []; // If there is at least one element with tabindex > 0, we need to sort
    // the final array by tabindex.

    var needsSortByTabIndex = this._collectTabbableNodes(node, result);

    if (needsSortByTabIndex) {
      return this._sortByTabIndex(result);
    }

    return result;
  },

  /**
   * Returns if a element is focusable.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isFocusable: function isFocusable(element) {
    // From http://stackoverflow.com/a/1600194/4228703:
    // There isn't a definite list, it's up to the browser. The only
    // standard we have is DOM Level 2 HTML
    // https://www.w3.org/TR/DOM-Level-2-HTML/html.html, according to which the
    // only elements that have a focus() method are HTMLInputElement,
    // HTMLSelectElement, HTMLTextAreaElement and HTMLAnchorElement. This
    // notably omits HTMLButtonElement and HTMLAreaElement. Referring to these
    // tests with tabbables in different browsers
    // http://allyjs.io/data-tables/focusable.html
    // Elements that cannot be focused if they have [disabled] attribute.
    if (matches.call(element, 'input, select, textarea, button, object')) {
      return matches.call(element, ':not([disabled])');
    } // Elements that can be focused even if they have [disabled] attribute.


    return matches.call(element, 'a[href], area[href], iframe, [tabindex], [contentEditable]');
  },

  /**
   * Returns if a element is tabbable. To be tabbable, a element must be
   * focusable, visible, and with a tabindex !== -1.
   * @param {!HTMLElement} element
   * @return {boolean}
   */
  isTabbable: function isTabbable(element) {
    return this.isFocusable(element) && matches.call(element, ':not([tabindex="-1"])') && this._isVisible(element);
  },

  /**
   * Returns the normalized element tabindex. If not focusable, returns -1.
   * It checks for the attribute "tabindex" instead of the element property
   * `tabIndex` since browsers assign different values to it.
   * e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
   * @param {!HTMLElement} element
   * @return {!number}
   * @private
   */
  _normalizedTabIndex: function _normalizedTabIndex(element) {
    if (this.isFocusable(element)) {
      var tabIndex = element.getAttribute('tabindex') || 0;
      return Number(tabIndex);
    }

    return -1;
  },

  /**
   * Searches for nodes that are tabbable and adds them to the `result` array.
   * Returns if the `result` array needs to be sorted by tabindex.
   * @param {!Node} node The starting point for the search; added to `result`
   * if tabbable.
   * @param {!Array<!HTMLElement>} result
   * @return {boolean}
   * @private
   */
  _collectTabbableNodes: function _collectTabbableNodes(node, result) {
    // If not an element or not visible, no need to explore children.
    if (node.nodeType !== Node.ELEMENT_NODE || !this._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = this._normalizedTabIndex(element);

    var needsSort = tabIndex > 0;

    if (tabIndex >= 0) {
      result.push(element);
    } // In ShadowDOM v1, tab order is affected by the order of distrubution.
    // E.g. getTabbableNodes(#root) in ShadowDOM v1 should return [#A, #B];
    // in ShadowDOM v0 tab order is not affected by the distrubution order,
    // in fact getTabbableNodes(#root) returns [#B, #A].
    //  <div id="root">
    //   <!-- shadow -->
    //     <slot name="a">
    //     <slot name="b">
    //   <!-- /shadow -->
    //   <input id="A" slot="a">
    //   <input id="B" slot="b" tabindex="1">
    //  </div>
    // TODO(valdrin) support ShadowDOM v1 when upgrading to Polymer v2.0.


    var children;

    if (element.localName === 'content' || element.localName === 'slot') {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).getDistributedNodes();
    } else {
      // Use shadow root if possible, will check for distributed nodes.
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element.root || element).children;
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  },

  /**
   * Returns false if the element has `visibility: hidden` or `display: none`
   * @param {!HTMLElement} element
   * @return {boolean}
   * @private
   */
  _isVisible: function _isVisible(element) {
    // Check inline style first to save a re-flow. If looks good, check also
    // computed style.
    var style = element.style;

    if (style.visibility !== 'hidden' && style.display !== 'none') {
      style = window.getComputedStyle(element);
      return style.visibility !== 'hidden' && style.display !== 'none';
    }

    return false;
  },

  /**
   * Sorts an array of tabbable elements by tabindex. Returns a new array.
   * @param {!Array<!HTMLElement>} tabbables
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _sortByTabIndex: function _sortByTabIndex(tabbables) {
    // Implement a merge sort as Array.prototype.sort does a non-stable sort
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    var len = tabbables.length;

    if (len < 2) {
      return tabbables;
    }

    var pivot = Math.ceil(len / 2);

    var left = this._sortByTabIndex(tabbables.slice(0, pivot));

    var right = this._sortByTabIndex(tabbables.slice(pivot));

    return this._mergeSortByTabIndex(left, right);
  },

  /**
   * Merge sort iterator, merges the two arrays into one, sorted by tab index.
   * @param {!Array<!HTMLElement>} left
   * @param {!Array<!HTMLElement>} right
   * @return {!Array<!HTMLElement>}
   * @private
   */
  _mergeSortByTabIndex: function _mergeSortByTabIndex(left, right) {
    var result = [];

    while (left.length > 0 && right.length > 0) {
      if (this._hasLowerTabOrder(left[0], right[0])) {
        result.push(right.shift());
      } else {
        result.push(left.shift());
      }
    }

    return result.concat(left, right);
  },

  /**
   * Returns if element `a` has lower tab order compared to element `b`
   * (both elements are assumed to be focusable and tabbable).
   * Elements with tabindex = 0 have lower tab order compared to elements
   * with tabindex > 0.
   * If both have same tabindex, it returns false.
   * @param {!HTMLElement} a
   * @param {!HTMLElement} b
   * @return {boolean}
   * @private
   */
  _hasLowerTabOrder: function _hasLowerTabOrder(a, b) {
    // Normalize tabIndexes
    // e.g. in Firefox `<div contenteditable>` has `tabIndex = -1`
    var ati = Math.max(a.tabIndex, 0);
    var bti = Math.max(b.tabIndex, 0);
    return ati === 0 || bti === 0 ? bti > ati : ati > bti;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background-color: var(--iron-overlay-backdrop-background-color, #000);\n        opacity: 0;\n        transition: opacity 0.2s;\n        pointer-events: none;\n        @apply --iron-overlay-backdrop;\n      }\n\n      :host(.opened) {\n        opacity: var(--iron-overlay-backdrop-opacity, 0.6);\n        pointer-events: auto;\n        @apply --iron-overlay-backdrop-opened;\n      }\n    </style>\n\n    <slot></slot>\n"]);

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




/*
`iron-overlay-backdrop` is a backdrop used by `Polymer.IronOverlayBehavior`. It
should be a singleton.

### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
-------------------------------------------|------------------------|---------
`--iron-overlay-backdrop-background-color` | Backdrop background color | #000
`--iron-overlay-backdrop-opacity`          | Backdrop opacity | 0.6
`--iron-overlay-backdrop`                  | Mixin applied to `iron-overlay-backdrop`.                      | {}
`--iron-overlay-backdrop-opened`           | Mixin applied to `iron-overlay-backdrop` when it is displayed | {}
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject()),
  is: 'iron-overlay-backdrop',
  properties: {
    /**
     * Returns true if the backdrop is opened.
     */
    opened: {
      reflectToAttribute: true,
      type: Boolean,
      value: false,
      observer: '_openedChanged'
    }
  },
  listeners: {
    'transitionend': '_onTransitionend'
  },
  created: function created() {
    // Used to cancel previous requestAnimationFrame calls when opened changes.
    this.__openedRaf = null;
  },
  attached: function attached() {
    this.opened && this._openedChanged(this.opened);
  },

  /**
   * Appends the backdrop to document body if needed.
   */
  prepare: function prepare() {
    if (this.opened && !this.parentNode) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(document.body).appendChild(this);
    }
  },

  /**
   * Shows the backdrop.
   */
  open: function open() {
    this.opened = true;
  },

  /**
   * Hides the backdrop.
   */
  close: function close() {
    this.opened = false;
  },

  /**
   * Removes the backdrop from document body if needed.
   */
  complete: function complete() {
    if (!this.opened && this.parentNode === document.body) {
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(this.parentNode).removeChild(this);
    }
  },
  _onTransitionend: function _onTransitionend(event) {
    if (event && event.target === this) {
      this.complete();
    }
  },

  /**
   * @param {boolean} opened
   * @private
   */
  _openedChanged: function _openedChanged(opened) {
    if (opened) {
      // Auto-attach.
      this.prepare();
    } else {
      // Animation might be disabled via the mixin or opacity custom property.
      // If it is disabled in other ways, it's up to the user to call complete.
      var cs = window.getComputedStyle(this);

      if (cs.transitionDuration === '0s' || cs.opacity == 0) {
        this.complete();
      }
    }

    if (!this.isAttached) {
      return;
    } // Always cancel previous requestAnimationFrame.


    if (this.__openedRaf) {
      window.cancelAnimationFrame(this.__openedRaf);
      this.__openedRaf = null;
    } // Force relayout to ensure proper transitions.


    this.scrollTop = this.scrollTop;
    this.__openedRaf = window.requestAnimationFrame(function () {
      this.__openedRaf = null;
      this.toggleClass('opened', this.opened);
    }.bind(this));
  }
});

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js ***!
  \******************************************************************************/
/*! exports provided: IronOverlayBehaviorImpl, IronOverlayBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayBehaviorImpl", function() { return IronOverlayBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayBehavior", function() { return IronOverlayBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_fit_behavior_iron_fit_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-fit-behavior/iron-fit-behavior.js */ "./node_modules/@polymer/iron-fit-behavior/iron-fit-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js");
/* harmony import */ var _iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
/* harmony import */ var _iron_overlay_manager_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./iron-overlay-manager.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js");
/* harmony import */ var _iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./iron-scroll-manager.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js");
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








/** @polymerBehavior */

var IronOverlayBehaviorImpl = {
  properties: {
    /**
     * True if the overlay is currently displayed.
     */
    opened: {
      observer: '_openedChanged',
      type: Boolean,
      value: false,
      notify: true
    },

    /**
     * True if the overlay was canceled when it was last closed.
     */
    canceled: {
      observer: '_canceledChanged',
      readOnly: true,
      type: Boolean,
      value: false
    },

    /**
     * Set to true to display a backdrop behind the overlay. It traps the focus
     * within the light DOM of the overlay.
     */
    withBackdrop: {
      observer: '_withBackdropChanged',
      type: Boolean
    },

    /**
     * Set to true to disable auto-focusing the overlay or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */
    noAutoFocus: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable canceling the overlay with the ESC key.
     */
    noCancelOnEscKey: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to disable canceling the overlay by clicking outside it.
     */
    noCancelOnOutsideClick: {
      type: Boolean,
      value: false
    },

    /**
     * Contains the reason(s) this overlay was last closed (see
     * `iron-overlay-closed`). `IronOverlayBehavior` provides the `canceled`
     * reason; implementers of the behavior can provide other reasons in
     * addition to `canceled`.
     */
    closingReason: {
      // was a getter before, but needs to be a property so other
      // behaviors can override this.
      type: Object
    },

    /**
     * Set to true to enable restoring of focus when overlay is closed.
     */
    restoreFocusOnClose: {
      type: Boolean,
      value: false
    },

    /**
     * Set to true to allow clicks to go through overlays.
     * When the user clicks outside this overlay, the click may
     * close the overlay below.
     */
    allowClickThrough: {
      type: Boolean
    },

    /**
     * Set to true to keep overlay always on top.
     */
    alwaysOnTop: {
      type: Boolean
    },

    /**
     * Determines which action to perform when scroll outside an opened overlay
     * happens. Possible values: lock - blocks scrolling from happening, refit -
     * computes the new position on the overlay cancel - causes the overlay to
     * close
     */
    scrollAction: {
      type: String
    },

    /**
     * Shortcut to access to the overlay manager.
     * @private
     * @type {!IronOverlayManagerClass}
     */
    _manager: {
      type: Object,
      value: _iron_overlay_manager_js__WEBPACK_IMPORTED_MODULE_6__["IronOverlayManager"]
    },

    /**
     * The node being focused.
     * @type {?Node}
     */
    _focusedChild: {
      type: Object
    }
  },
  listeners: {
    'iron-resize': '_onIronResize'
  },
  observers: ['__updateScrollObservers(isAttached, opened, scrollAction)'],

  /**
   * The backdrop element.
   * @return {!Element}
   */
  get backdropElement() {
    return this._manager.backdropElement;
  },

  /**
   * Returns the node to give focus to.
   * @return {!Node}
   */
  get _focusNode() {
    return this._focusedChild || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelector('[autofocus]') || this;
  },

  /**
   * Array of nodes that can receive focus (overlay included), ordered by
   * `tabindex`. This is used to retrieve which is the first and last focusable
   * nodes in order to wrap the focus for overlays `with-backdrop`.
   *
   * If you know what is your content (specifically the first and last focusable
   * children), you can override this method to return only `[firstFocusable,
   * lastFocusable];`
   * @return {!Array<!Node>}
   * @protected
   */
  get _focusableNodes() {
    return _iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_5__["IronFocusablesHelper"].getTabbableNodes(this);
  },

  /**
   * @return {void}
   */
  ready: function ready() {
    // Used to skip calls to notifyResize and refit while the overlay is
    // animating.
    this.__isAnimating = false; // with-backdrop needs tabindex to be set in order to trap the focus.
    // If it is not set, IronOverlayBehavior will set it, and remove it if
    // with-backdrop = false.

    this.__shouldRemoveTabIndex = false; // Used for wrapping the focus on TAB / Shift+TAB.

    this.__firstFocusableNode = this.__lastFocusableNode = null; // Used by to keep track of the RAF callbacks.

    this.__rafs = {}; // Focused node before overlay gets opened. Can be restored on close.

    this.__restoreFocusNode = null; // Scroll info to be restored.

    this.__scrollTop = this.__scrollLeft = null;
    this.__onCaptureScroll = this.__onCaptureScroll.bind(this); // Root nodes hosting the overlay, used to listen for scroll events on them.

    this.__rootNodes = null;

    this._ensureSetup();
  },
  attached: function attached() {
    // Call _openedChanged here so that position can be computed correctly.
    if (this.opened) {
      this._openedChanged(this.opened);
    }

    this._observer = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).observeNodes(this._onNodesChange);
  },
  detached: function detached() {
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).unobserveNodes(this._observer);
    this._observer = null;

    for (var cb in this.__rafs) {
      if (this.__rafs[cb] !== null) {
        cancelAnimationFrame(this.__rafs[cb]);
      }
    }

    this.__rafs = {};

    this._manager.removeOverlay(this); // We got detached while animating, ensure we show/hide the overlay
    // and fire iron-overlay-opened/closed event!


    if (this.__isAnimating) {
      if (this.opened) {
        this._finishRenderOpened();
      } else {
        // Restore the focus if necessary.
        this._applyFocus();

        this._finishRenderClosed();
      }
    }
  },

  /**
   * Toggle the opened state of the overlay.
   */
  toggle: function toggle() {
    this._setCanceled(false);

    this.opened = !this.opened;
  },

  /**
   * Open the overlay.
   */
  open: function open() {
    this._setCanceled(false);

    this.opened = true;
  },

  /**
   * Close the overlay.
   */
  close: function close() {
    this._setCanceled(false);

    this.opened = false;
  },

  /**
   * Cancels the overlay.
   * @param {Event=} event The original event
   */
  cancel: function cancel(event) {
    var cancelEvent = this.fire('iron-overlay-canceled', event, {
      cancelable: true
    });

    if (cancelEvent.defaultPrevented) {
      return;
    }

    this._setCanceled(true);

    this.opened = false;
  },

  /**
   * Invalidates the cached tabbable nodes. To be called when any of the
   * focusable content changes (e.g. a button is disabled).
   */
  invalidateTabbables: function invalidateTabbables() {
    this.__firstFocusableNode = this.__lastFocusableNode = null;
  },
  _ensureSetup: function _ensureSetup() {
    if (this._overlaySetup) {
      return;
    }

    this._overlaySetup = true;
    this.style.outline = 'none';
    this.style.display = 'none';
  },

  /**
   * Called when `opened` changes.
   * @param {boolean=} opened
   * @protected
   */
  _openedChanged: function _openedChanged(opened) {
    if (opened) {
      this.removeAttribute('aria-hidden');
    } else {
      this.setAttribute('aria-hidden', 'true');
    } // Defer any animation-related code on attached
    // (_openedChanged gets called again on attached).


    if (!this.isAttached) {
      return;
    }

    this.__isAnimating = true; // Deraf for non-blocking rendering.

    this.__deraf('__openedChanged', this.__openedChanged);
  },
  _canceledChanged: function _canceledChanged() {
    this.closingReason = this.closingReason || {};
    this.closingReason.canceled = this.canceled;
  },
  _withBackdropChanged: function _withBackdropChanged() {
    // If tabindex is already set, no need to override it.
    if (this.withBackdrop && !this.hasAttribute('tabindex')) {
      this.setAttribute('tabindex', '-1');
      this.__shouldRemoveTabIndex = true;
    } else if (this.__shouldRemoveTabIndex) {
      this.removeAttribute('tabindex');
      this.__shouldRemoveTabIndex = false;
    }

    if (this.opened && this.isAttached) {
      this._manager.trackBackdrop();
    }
  },

  /**
   * tasks which must occur before opening; e.g. making the element visible.
   * @protected
   */
  _prepareRenderOpened: function _prepareRenderOpened() {
    // Store focused node.
    this.__restoreFocusNode = this._manager.deepActiveElement; // Needed to calculate the size of the overlay so that transitions on its
    // size will have the correct starting points.

    this._preparePositioning();

    this.refit();

    this._finishPositioning(); // Safari will apply the focus to the autofocus element when displayed
    // for the first time, so we make sure to return the focus where it was.


    if (this.noAutoFocus && document.activeElement === this._focusNode) {
      this._focusNode.blur();

      this.__restoreFocusNode.focus();
    }
  },

  /**
   * Tasks which cause the overlay to actually open; typically play an
   * animation.
   * @protected
   */
  _renderOpened: function _renderOpened() {
    this._finishRenderOpened();
  },

  /**
   * Tasks which cause the overlay to actually close; typically play an
   * animation.
   * @protected
   */
  _renderClosed: function _renderClosed() {
    this._finishRenderClosed();
  },

  /**
   * Tasks to be performed at the end of open action. Will fire
   * `iron-overlay-opened`.
   * @protected
   */
  _finishRenderOpened: function _finishRenderOpened() {
    this.notifyResize();
    this.__isAnimating = false;
    this.fire('iron-overlay-opened');
  },

  /**
   * Tasks to be performed at the end of close action. Will fire
   * `iron-overlay-closed`.
   * @protected
   */
  _finishRenderClosed: function _finishRenderClosed() {
    // Hide the overlay.
    this.style.display = 'none'; // Reset z-index only at the end of the animation.

    this.style.zIndex = '';
    this.notifyResize();
    this.__isAnimating = false;
    this.fire('iron-overlay-closed', this.closingReason);
  },
  _preparePositioning: function _preparePositioning() {
    this.style.transition = this.style.webkitTransition = 'none';
    this.style.transform = this.style.webkitTransform = 'none';
    this.style.display = '';
  },
  _finishPositioning: function _finishPositioning() {
    // First, make it invisible & reactivate animations.
    this.style.display = 'none'; // Force reflow before re-enabling animations so that they don't start.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.

    this.scrollTop = this.scrollTop;
    this.style.transition = this.style.webkitTransition = '';
    this.style.transform = this.style.webkitTransform = ''; // Now that animations are enabled, make it visible again

    this.style.display = ''; // Force reflow, so that following animations are properly started.
    // Set scrollTop to itself so that Closure Compiler doesn't remove this.

    this.scrollTop = this.scrollTop;
  },

  /**
   * Applies focus according to the opened state.
   * @protected
   */
  _applyFocus: function _applyFocus() {
    if (this.opened) {
      if (!this.noAutoFocus) {
        this._focusNode.focus();
      }
    } else {
      // Restore focus.
      if (this.restoreFocusOnClose && this.__restoreFocusNode) {
        // If the activeElement is `<body>` or inside the overlay,
        // we are allowed to restore the focus. In all the other
        // cases focus might have been moved elsewhere by another
        // component or by an user interaction (e.g. click on a
        // button outside the overlay).
        var activeElement = this._manager.deepActiveElement;

        if (activeElement === document.body || Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).deepContains(activeElement)) {
          this.__restoreFocusNode.focus();
        }
      }

      this.__restoreFocusNode = null;

      this._focusNode.blur();

      this._focusedChild = null;
    }
  },

  /**
   * Cancels (closes) the overlay. Call when click happens outside the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureClick: function _onCaptureClick(event) {
    if (!this.noCancelOnOutsideClick) {
      this.cancel(event);
    }
  },

  /**
   * Keeps track of the focused child. If withBackdrop, traps focus within
   * overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureFocus: function _onCaptureFocus(event) {
    if (!this.withBackdrop) {
      return;
    }

    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path;

    if (path.indexOf(this) === -1) {
      event.stopPropagation();

      this._applyFocus();
    } else {
      this._focusedChild = path[0];
    }
  },

  /**
   * Handles the ESC key event and cancels (closes) the overlay.
   * @param {!Event} event
   * @protected
   */
  _onCaptureEsc: function _onCaptureEsc(event) {
    if (!this.noCancelOnEscKey) {
      this.cancel(event);
    }
  },

  /**
   * Handles TAB key events to track focus changes.
   * Will wrap focus for overlays withBackdrop.
   * @param {!Event} event
   * @protected
   */
  _onCaptureTab: function _onCaptureTab(event) {
    if (!this.withBackdrop) {
      return;
    }

    this.__ensureFirstLastFocusables(); // TAB wraps from last to first focusable.
    // Shift + TAB wraps from first to last focusable.


    var shift = event.shiftKey;
    var nodeToCheck = shift ? this.__firstFocusableNode : this.__lastFocusableNode;
    var nodeToSet = shift ? this.__lastFocusableNode : this.__firstFocusableNode;
    var shouldWrap = false;

    if (nodeToCheck === nodeToSet) {
      // If nodeToCheck is the same as nodeToSet, it means we have an overlay
      // with 0 or 1 focusables; in either case we still need to trap the
      // focus within the overlay.
      shouldWrap = true;
    } else {
      // In dom=shadow, the manager will receive focus changes on the main
      // root but not the ones within other shadow roots, so we can't rely on
      // _focusedChild, but we should check the deepest active element.
      var focusedNode = this._manager.deepActiveElement; // If the active element is not the nodeToCheck but the overlay itself,
      // it means the focus is about to go outside the overlay, hence we
      // should prevent that (e.g. user opens the overlay and hit Shift+TAB).

      shouldWrap = focusedNode === nodeToCheck || focusedNode === this;
    }

    if (shouldWrap) {
      // When the overlay contains the last focusable element of the document
      // and it's already focused, pressing TAB would move the focus outside
      // the document (e.g. to the browser search bar). Similarly, when the
      // overlay contains the first focusable element of the document and it's
      // already focused, pressing Shift+TAB would move the focus outside the
      // document (e.g. to the browser search bar).
      // In both cases, we would not receive a focus event, but only a blur.
      // In order to achieve focus wrapping, we prevent this TAB event and
      // force the focus. This will also prevent the focus to temporarily move
      // outside the overlay, which might cause scrolling.
      event.preventDefault();
      this._focusedChild = nodeToSet;

      this._applyFocus();
    }
  },

  /**
   * Refits if the overlay is opened and not animating.
   * @protected
   */
  _onIronResize: function _onIronResize() {
    if (this.opened && !this.__isAnimating) {
      this.__deraf('refit', this.refit);
    }
  },

  /**
   * Will call notifyResize if overlay is opened.
   * Can be overridden in order to avoid multiple observers on the same node.
   * @protected
   */
  _onNodesChange: function _onNodesChange() {
    if (this.opened && !this.__isAnimating) {
      // It might have added focusable nodes, so invalidate cached values.
      this.invalidateTabbables();
      this.notifyResize();
    }
  },

  /**
   * Updates the references to the first and last focusable nodes.
   * @private
   */
  __ensureFirstLastFocusables: function __ensureFirstLastFocusables() {
    var focusableNodes = this._focusableNodes;
    this.__firstFocusableNode = focusableNodes[0];
    this.__lastFocusableNode = focusableNodes[focusableNodes.length - 1];
  },

  /**
   * Tasks executed when opened changes: prepare for the opening, move the
   * focus, update the manager, render opened/closed.
   * @private
   */
  __openedChanged: function __openedChanged() {
    if (this.opened) {
      // Make overlay visible, then add it to the manager.
      this._prepareRenderOpened();

      this._manager.addOverlay(this); // Move the focus to the child node with [autofocus].


      this._applyFocus();

      this._renderOpened();
    } else {
      // Remove overlay, then restore the focus before actually closing.
      this._manager.removeOverlay(this);

      this._applyFocus();

      this._renderClosed();
    }
  },

  /**
   * Debounces the execution of a callback to the next animation frame.
   * @param {!string} jobname
   * @param {!Function} callback Always bound to `this`
   * @private
   */
  __deraf: function __deraf(jobname, callback) {
    var rafs = this.__rafs;

    if (rafs[jobname] !== null) {
      cancelAnimationFrame(rafs[jobname]);
    }

    rafs[jobname] = requestAnimationFrame(function nextAnimationFrame() {
      rafs[jobname] = null;
      callback.call(this);
    }.bind(this));
  },

  /**
   * @param {boolean} isAttached
   * @param {boolean} opened
   * @param {string=} scrollAction
   * @private
   */
  __updateScrollObservers: function __updateScrollObservers(isAttached, opened, scrollAction) {
    if (!isAttached || !opened || !this.__isValidScrollAction(scrollAction)) {
      Object(_iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__["removeScrollLock"])(this);

      this.__removeScrollListeners();
    } else {
      if (scrollAction === 'lock') {
        this.__saveScrollPosition();

        Object(_iron_scroll_manager_js__WEBPACK_IMPORTED_MODULE_7__["pushScrollLock"])(this);
      }

      this.__addScrollListeners();
    }
  },

  /**
   * @private
   */
  __addScrollListeners: function __addScrollListeners() {
    if (!this.__rootNodes) {
      this.__rootNodes = []; // Listen for scroll events in all shadowRoots hosting this overlay only
      // when in native ShadowDOM.

      if (_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_4__["useShadow"]) {
        var node = this;

        while (node) {
          if (node.nodeType === Node.DOCUMENT_FRAGMENT_NODE && node.host) {
            this.__rootNodes.push(node);
          }

          node = node.host || node.assignedSlot || node.parentNode;
        }
      }

      this.__rootNodes.push(document);
    }

    this.__rootNodes.forEach(function (el) {
      el.addEventListener('scroll', this.__onCaptureScroll, {
        capture: true,
        passive: true
      });
    }, this);
  },

  /**
   * @private
   */
  __removeScrollListeners: function __removeScrollListeners() {
    if (this.__rootNodes) {
      this.__rootNodes.forEach(function (el) {
        el.removeEventListener('scroll', this.__onCaptureScroll, {
          capture: true,
          passive: true
        });
      }, this);
    }

    if (!this.isAttached) {
      this.__rootNodes = null;
    }
  },

  /**
   * @param {string=} scrollAction
   * @return {boolean}
   * @private
   */
  __isValidScrollAction: function __isValidScrollAction(scrollAction) {
    return scrollAction === 'lock' || scrollAction === 'refit' || scrollAction === 'cancel';
  },

  /**
   * @private
   */
  __onCaptureScroll: function __onCaptureScroll(event) {
    if (this.__isAnimating) {
      return;
    } // Check if scroll outside the overlay.


    if (Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path.indexOf(this) >= 0) {
      return;
    }

    switch (this.scrollAction) {
      case 'lock':
        // NOTE: scrolling might happen if a scroll event is not cancellable, or
        // if user pressed keys that cause scrolling (they're not prevented in
        // order not to break a11y features like navigate with arrow keys).
        this.__restoreScrollPosition();

        break;

      case 'refit':
        this.__deraf('refit', this.refit);

        break;

      case 'cancel':
        this.cancel(event);
        break;
    }
  },

  /**
   * Memoizes the scroll position of the outside scrolling element.
   * @private
   */
  __saveScrollPosition: function __saveScrollPosition() {
    if (document.scrollingElement) {
      this.__scrollTop = document.scrollingElement.scrollTop;
      this.__scrollLeft = document.scrollingElement.scrollLeft;
    } else {
      // Since we don't know if is the body or html, get max.
      this.__scrollTop = Math.max(document.documentElement.scrollTop, document.body.scrollTop);
      this.__scrollLeft = Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
    }
  },

  /**
   * Resets the scroll position of the outside scrolling element.
   * @private
   */
  __restoreScrollPosition: function __restoreScrollPosition() {
    if (document.scrollingElement) {
      document.scrollingElement.scrollTop = this.__scrollTop;
      document.scrollingElement.scrollLeft = this.__scrollLeft;
    } else {
      // Since we don't know if is the body or html, set both.
      document.documentElement.scrollTop = document.body.scrollTop = this.__scrollTop;
      document.documentElement.scrollLeft = document.body.scrollLeft = this.__scrollLeft;
    }
  }
};
/**
  Use `Polymer.IronOverlayBehavior` to implement an element that can be hidden
  or shown, and displays on top of other content. It includes an optional
  backdrop, and can be used to implement a variety of UI controls including
  dialogs and drop downs. Multiple overlays may be displayed at once.

  See the [demo source
  code](https://github.com/PolymerElements/iron-overlay-behavior/blob/master/demo/simple-overlay.html)
  for an example.

  ### Closing and canceling

  An overlay may be hidden by closing or canceling. The difference between close
  and cancel is user intent. Closing generally implies that the user
  acknowledged the content on the overlay. By default, it will cancel whenever
  the user taps outside it or presses the escape key. This behavior is
  configurable with the `no-cancel-on-esc-key` and the
  `no-cancel-on-outside-click` properties. `close()` should be called explicitly
  by the implementer when the user interacts with a control in the overlay
  element. When the dialog is canceled, the overlay fires an
  'iron-overlay-canceled' event. Call `preventDefault` on this event to prevent
  the overlay from closing.

  ### Positioning

  By default the element is sized and positioned to fit and centered inside the
  window. You can position and size it manually using CSS. See
  `Polymer.IronFitBehavior`.

  ### Backdrop

  Set the `with-backdrop` attribute to display a backdrop behind the overlay.
  The backdrop is appended to `<body>` and is of type `<iron-overlay-backdrop>`.
  See its doc page for styling options.

  In addition, `with-backdrop` will wrap the focus within the content in the
  light DOM. Override the [`_focusableNodes`
  getter](#Polymer.IronOverlayBehavior:property-_focusableNodes) to achieve a
  different behavior.

  ### Limitations

  The element is styled to appear on top of other content by setting its
  `z-index` property. You must ensure no element has a stacking context with a
  higher `z-index` than its parent stacking context. You should place this
  element as a child of `<body>` whenever possible.

  @demo demo/index.html
  @polymerBehavior
 */

var IronOverlayBehavior = [_polymer_iron_fit_behavior_iron_fit_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronFitBehavior"], _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"], IronOverlayBehaviorImpl];
/**
 * Fired after the overlay opens.
 * @event iron-overlay-opened
 */

/**
 * Fired when the overlay is canceled, but before it is closed.
 * @event iron-overlay-canceled
 * @param {Event} event The closing of the overlay can be prevented
 * by calling `event.preventDefault()`. The `event.detail` is the original event
 * that originated the canceling (e.g. ESC keyboard event or click event outside
 * the overlay).
 */

/**
 * Fired after the overlay closes.
 * @event iron-overlay-closed
 * @param {Event} event The `event.detail` is the `closingReason` property
 * (contains `canceled`, whether the overlay was canceled).
 */

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-overlay-manager.js ***!
  \*****************************************************************************/
/*! exports provided: IronOverlayManagerClass, IronOverlayManager */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayManagerClass", function() { return IronOverlayManagerClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronOverlayManager", function() { return IronOverlayManager; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _iron_overlay_backdrop_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iron-overlay-backdrop.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-backdrop.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
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
 * @struct
 * @constructor
 * @private
 */

var IronOverlayManagerClass = function IronOverlayManagerClass() {
  /**
   * Used to keep track of the opened overlays.
   * @private {!Array<!Element>}
   */
  this._overlays = [];
  /**
   * iframes have a default z-index of 100,
   * so this default should be at least that.
   * @private {number}
   */

  this._minimumZ = 101;
  /**
   * Memoized backdrop element.
   * @private {Element|null}
   */

  this._backdropElement = null; // Enable document-wide tap recognizer.
  // NOTE: Use useCapture=true to avoid accidentally prevention of the closing
  // of an overlay via event.stopPropagation(). The only way to prevent
  // closing of an overlay should be through its APIs.
  // NOTE: enable tap on <html> to workaround Polymer/polymer#4459
  // Pass no-op function because MSEdge 15 doesn't handle null as 2nd argument
  // https://github.com/Microsoft/ChakraCore/issues/3863

  _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_4__["add"](document.documentElement, 'tap', function () {});
  document.addEventListener('tap', this._onCaptureClick.bind(this), true);
  document.addEventListener('focus', this._onCaptureFocus.bind(this), true);
  document.addEventListener('keydown', this._onCaptureKeyDown.bind(this), true);
};
IronOverlayManagerClass.prototype = {
  constructor: IronOverlayManagerClass,

  /**
   * The shared backdrop element.
   * @return {!Element} backdropElement
   */
  get backdropElement() {
    if (!this._backdropElement) {
      this._backdropElement = document.createElement('iron-overlay-backdrop');
    }

    return this._backdropElement;
  },

  /**
   * The deepest active element.
   * @return {!Element} activeElement the active element
   */
  get deepActiveElement() {
    var active = document.activeElement; // document.activeElement can be null
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
    // In IE 11, it can also be an object when operating in iframes.
    // In these cases, default it to document.body.

    if (!active || active instanceof Element === false) {
      active = document.body;
    }

    while (active.root && Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(active.root).activeElement) {
      active = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(active.root).activeElement;
    }

    return active;
  },

  /**
   * Brings the overlay at the specified index to the front.
   * @param {number} i
   * @private
   */
  _bringOverlayAtIndexToFront: function _bringOverlayAtIndexToFront(i) {
    var overlay = this._overlays[i];

    if (!overlay) {
      return;
    }

    var lastI = this._overlays.length - 1;
    var currentOverlay = this._overlays[lastI]; // Ensure always-on-top overlay stays on top.

    if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      lastI--;
    } // If already the top element, return.


    if (i >= lastI) {
      return;
    } // Update z-index to be on top.


    var minimumZ = Math.max(this.currentOverlayZ(), this._minimumZ);

    if (this._getZ(overlay) <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    } // Shift other overlays behind the new on top.


    while (i < lastI) {
      this._overlays[i] = this._overlays[i + 1];
      i++;
    }

    this._overlays[lastI] = overlay;
  },

  /**
   * Adds the overlay and updates its z-index if it's opened, or removes it if
   * it's closed. Also updates the backdrop z-index.
   * @param {!Element} overlay
   */
  addOrRemoveOverlay: function addOrRemoveOverlay(overlay) {
    if (overlay.opened) {
      this.addOverlay(overlay);
    } else {
      this.removeOverlay(overlay);
    }
  },

  /**
   * Tracks overlays for z-index and focus management.
   * Ensures the last added overlay with always-on-top remains on top.
   * @param {!Element} overlay
   */
  addOverlay: function addOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);

    if (i >= 0) {
      this._bringOverlayAtIndexToFront(i);

      this.trackBackdrop();
      return;
    }

    var insertionIndex = this._overlays.length;
    var currentOverlay = this._overlays[insertionIndex - 1];
    var minimumZ = Math.max(this._getZ(currentOverlay), this._minimumZ);

    var newZ = this._getZ(overlay); // Ensure always-on-top overlay stays on top.


    if (currentOverlay && this._shouldBeBehindOverlay(overlay, currentOverlay)) {
      // This bumps the z-index of +2.
      this._applyOverlayZ(currentOverlay, minimumZ);

      insertionIndex--; // Update minimumZ to match previous overlay's z-index.

      var previousOverlay = this._overlays[insertionIndex - 1];
      minimumZ = Math.max(this._getZ(previousOverlay), this._minimumZ);
    } // Update z-index and insert overlay.


    if (newZ <= minimumZ) {
      this._applyOverlayZ(overlay, minimumZ);
    }

    this._overlays.splice(insertionIndex, 0, overlay);

    this.trackBackdrop();
  },

  /**
   * @param {!Element} overlay
   */
  removeOverlay: function removeOverlay(overlay) {
    var i = this._overlays.indexOf(overlay);

    if (i === -1) {
      return;
    }

    this._overlays.splice(i, 1);

    this.trackBackdrop();
  },

  /**
   * Returns the current overlay.
   * @return {!Element|undefined}
   */
  currentOverlay: function currentOverlay() {
    var i = this._overlays.length - 1;
    return this._overlays[i];
  },

  /**
   * Returns the current overlay z-index.
   * @return {number}
   */
  currentOverlayZ: function currentOverlayZ() {
    return this._getZ(this.currentOverlay());
  },

  /**
   * Ensures that the minimum z-index of new overlays is at least `minimumZ`.
   * This does not effect the z-index of any existing overlays.
   * @param {number} minimumZ
   */
  ensureMinimumZ: function ensureMinimumZ(minimumZ) {
    this._minimumZ = Math.max(this._minimumZ, minimumZ);
  },
  focusOverlay: function focusOverlay() {
    var current =
    /** @type {?} */
    this.currentOverlay();

    if (current) {
      current._applyFocus();
    }
  },

  /**
   * Updates the backdrop z-index.
   */
  trackBackdrop: function trackBackdrop() {
    var overlay = this._overlayWithBackdrop(); // Avoid creating the backdrop if there is no overlay with backdrop.


    if (!overlay && !this._backdropElement) {
      return;
    }

    this.backdropElement.style.zIndex = this._getZ(overlay) - 1;
    this.backdropElement.opened = !!overlay; // Property observers are not fired until element is attached
    // in Polymer 2.x, so we ensure element is attached if needed.
    // https://github.com/Polymer/polymer/issues/4526

    this.backdropElement.prepare();
  },

  /**
   * @return {!Array<!Element>}
   */
  getBackdrops: function getBackdrops() {
    var backdrops = [];

    for (var i = 0; i < this._overlays.length; i++) {
      if (this._overlays[i].withBackdrop) {
        backdrops.push(this._overlays[i]);
      }
    }

    return backdrops;
  },

  /**
   * Returns the z-index for the backdrop.
   * @return {number}
   */
  backdropZ: function backdropZ() {
    return this._getZ(this._overlayWithBackdrop()) - 1;
  },

  /**
   * Returns the top opened overlay that has a backdrop.
   * @return {!Element|undefined}
   * @private
   */
  _overlayWithBackdrop: function _overlayWithBackdrop() {
    for (var i = this._overlays.length - 1; i >= 0; i--) {
      if (this._overlays[i].withBackdrop) {
        return this._overlays[i];
      }
    }
  },

  /**
   * Calculates the minimum z-index for the overlay.
   * @param {Element=} overlay
   * @private
   */
  _getZ: function _getZ(overlay) {
    var z = this._minimumZ;

    if (overlay) {
      var z1 = Number(overlay.style.zIndex || window.getComputedStyle(overlay).zIndex); // Check if is a number
      // Number.isNaN not supported in IE 10+

      if (z1 === z1) {
        z = z1;
      }
    }

    return z;
  },

  /**
   * @param {!Element} element
   * @param {number|string} z
   * @private
   */
  _setZ: function _setZ(element, z) {
    element.style.zIndex = z;
  },

  /**
   * @param {!Element} overlay
   * @param {number} aboveZ
   * @private
   */
  _applyOverlayZ: function _applyOverlayZ(overlay, aboveZ) {
    this._setZ(overlay, aboveZ + 2);
  },

  /**
   * Returns the deepest overlay in the path.
   * @param {!Array<!Element>=} path
   * @return {!Element|undefined}
   * @suppress {missingProperties}
   * @private
   */
  _overlayInPath: function _overlayInPath(path) {
    path = path || [];

    for (var i = 0; i < path.length; i++) {
      if (path[i]._manager === this) {
        return path[i];
      }
    }
  },

  /**
   * Ensures the click event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureClick: function _onCaptureClick(event) {
    var i = this._overlays.length - 1;
    if (i === -1) return;
    var path =
    /** @type {!Array<!EventTarget>} */
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).path;
    var overlay; // Check if clicked outside of overlay.

    while ((overlay =
    /** @type {?} */
    this._overlays[i]) && this._overlayInPath(path) !== overlay) {
      overlay._onCaptureClick(event);

      if (overlay.allowClickThrough) {
        i--;
      } else {
        break;
      }
    }
  },

  /**
   * Ensures the focus event is delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureFocus: function _onCaptureFocus(event) {
    var overlay =
    /** @type {?} */
    this.currentOverlay();

    if (overlay) {
      overlay._onCaptureFocus(event);
    }
  },

  /**
   * Ensures TAB and ESC keyboard events are delegated to the right overlay.
   * @param {!Event} event
   * @private
   */
  _onCaptureKeyDown: function _onCaptureKeyDown(event) {
    var overlay =
    /** @type {?} */
    this.currentOverlay();

    if (overlay) {
      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(event, 'esc')) {
        overlay._onCaptureEsc(event);
      } else if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(event, 'tab')) {
        overlay._onCaptureTab(event);
      }
    }
  },

  /**
   * Returns if the overlay1 should be behind overlay2.
   * @param {!Element} overlay1
   * @param {!Element} overlay2
   * @return {boolean}
   * @suppress {missingProperties}
   * @private
   */
  _shouldBeBehindOverlay: function _shouldBeBehindOverlay(overlay1, overlay2) {
    return !overlay1.alwaysOnTop && overlay2.alwaysOnTop;
  }
};
var IronOverlayManager = new IronOverlayManagerClass();

/***/ }),

/***/ "./node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@polymer/iron-overlay-behavior/iron-scroll-manager.js ***!
  \****************************************************************************/
/*! exports provided: currentLockingElement, elementIsScrollLocked, pushScrollLock, removeScrollLock, _lockingElements, _lockedElementCache, _unlockedElementCache, _hasCachedLockedElement, _hasCachedUnlockedElement, _composedTreeContains, _scrollInteractionHandler, _boundScrollHandler, _lockScrollInteractions, _unlockScrollInteractions, _shouldPreventScrolling, _getScrollableNodes, _getScrollingNode, _getScrollInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "currentLockingElement", function() { return currentLockingElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "elementIsScrollLocked", function() { return elementIsScrollLocked; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushScrollLock", function() { return pushScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeScrollLock", function() { return removeScrollLock; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockingElements", function() { return _lockingElements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockedElementCache", function() { return _lockedElementCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unlockedElementCache", function() { return _unlockedElementCache; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_hasCachedLockedElement", function() { return _hasCachedLockedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_hasCachedUnlockedElement", function() { return _hasCachedUnlockedElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_composedTreeContains", function() { return _composedTreeContains; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_scrollInteractionHandler", function() { return _scrollInteractionHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_boundScrollHandler", function() { return _boundScrollHandler; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_lockScrollInteractions", function() { return _lockScrollInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_unlockScrollInteractions", function() { return _unlockScrollInteractions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_shouldPreventScrolling", function() { return _shouldPreventScrolling; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollableNodes", function() { return _getScrollableNodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollingNode", function() { return _getScrollingNode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_getScrollInfo", function() { return _getScrollInfo; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/


/**
 * Used to calculate the scroll direction during touch events.
 * @type {!Object}
 */

var lastTouchPosition = {
  pageX: 0,
  pageY: 0
};
/**
 * Used to avoid computing event.path and filter scrollable nodes (better perf).
 * @type {?EventTarget}
 */

var lastRootTarget = null;
/**
 * @type {!Array<!Node>}
 */

var lastScrollableNodes = [];
/**
 * @type {!Array<string>}
 */

var scrollEvents = [// Modern `wheel` event for mouse wheel scrolling:
'wheel', // Older, non-standard `mousewheel` event for some FF:
'mousewheel', // IE:
'DOMMouseScroll', // Touch enabled devices
'touchstart', 'touchmove']; // must be defined for modulizer

var _boundScrollHandler;

var currentLockingElement;
/**
 * The IronScrollManager is intended to provide a central source
 * of authority and control over which elements in a document are currently
 * allowed to scroll.
 *
 */

"TODO(modulizer): A namespace named Polymer.IronScrollManager was\ndeclared here. The surrounding comments should be reviewed,\nand this string can then be deleted";
/**
 * The current element that defines the DOM boundaries of the
 * scroll lock. This is always the most recently locking element.
 *
 * @return {!Node|undefined}
 */


/**
 * Returns true if the provided element is "scroll locked", which is to
 * say that it cannot be scrolled via pointer or keyboard interactions.
 *
 * @param {!HTMLElement} element An HTML element instance which may or may
 * not be scroll locked.
 */

function elementIsScrollLocked(element) {
  var lockingElement = currentLockingElement;

  if (lockingElement === undefined) {
    return false;
  }

  var scrollLocked;

  if (_hasCachedLockedElement(element)) {
    return true;
  }

  if (_hasCachedUnlockedElement(element)) {
    return false;
  }

  scrollLocked = !!lockingElement && lockingElement !== element && !_composedTreeContains(lockingElement, element);

  if (scrollLocked) {
    _lockedElementCache.push(element);
  } else {
    _unlockedElementCache.push(element);
  }

  return scrollLocked;
}
/**
 * Push an element onto the current scroll lock stack. The most recently
 * pushed element and its children will be considered scrollable. All
 * other elements will not be scrollable.
 *
 * Scroll locking is implemented as a stack so that cases such as
 * dropdowns within dropdowns are handled well.
 *
 * @param {!HTMLElement} element The element that should lock scroll.
 */

function pushScrollLock(element) {
  // Prevent pushing the same element twice
  if (_lockingElements.indexOf(element) >= 0) {
    return;
  }

  if (_lockingElements.length === 0) {
    _lockScrollInteractions();
  }

  _lockingElements.push(element);

  currentLockingElement = _lockingElements[_lockingElements.length - 1];
  _lockedElementCache = [];
  _unlockedElementCache = [];
}
/**
 * Remove an element from the scroll lock stack. The element being
 * removed does not need to be the most recently pushed element. However,
 * the scroll lock constraints only change when the most recently pushed
 * element is removed.
 *
 * @param {!HTMLElement} element The element to remove from the scroll
 * lock stack.
 */

function removeScrollLock(element) {
  var index = _lockingElements.indexOf(element);

  if (index === -1) {
    return;
  }

  _lockingElements.splice(index, 1);

  currentLockingElement = _lockingElements[_lockingElements.length - 1];
  _lockedElementCache = [];
  _unlockedElementCache = [];

  if (_lockingElements.length === 0) {
    _unlockScrollInteractions();
  }
}
var _lockingElements = [];
var _lockedElementCache = null;
var _unlockedElementCache = null;
function _hasCachedLockedElement(element) {
  return _lockedElementCache.indexOf(element) > -1;
}
function _hasCachedUnlockedElement(element) {
  return _unlockedElementCache.indexOf(element) > -1;
}
function _composedTreeContains(element, child) {
  // NOTE(cdata): This method iterates over content elements and their
  // corresponding distributed nodes to implement a contains-like method
  // that pierces through the composed tree of the ShadowDOM. Results of
  // this operation are cached (elsewhere) on a per-scroll-lock basis, to
  // guard against potentially expensive lookups happening repeatedly as
  // a user scrolls / touchmoves.
  var contentElements;
  var distributedNodes;
  var contentIndex;
  var nodeIndex;

  if (element.contains(child)) {
    return true;
  }

  contentElements = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(element).querySelectorAll('content,slot');

  for (contentIndex = 0; contentIndex < contentElements.length; ++contentIndex) {
    distributedNodes = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(contentElements[contentIndex]).getDistributedNodes();

    for (nodeIndex = 0; nodeIndex < distributedNodes.length; ++nodeIndex) {
      // Polymer 2.x returns slot.assignedNodes which can contain text nodes.
      if (distributedNodes[nodeIndex].nodeType !== Node.ELEMENT_NODE) continue;

      if (_composedTreeContains(distributedNodes[nodeIndex], child)) {
        return true;
      }
    }
  }

  return false;
}
function _scrollInteractionHandler(event) {
  // Avoid canceling an event with cancelable=false, e.g. scrolling is in
  // progress and cannot be interrupted.
  if (event.cancelable && _shouldPreventScrolling(event)) {
    event.preventDefault();
  } // If event has targetTouches (touch event), update last touch position.


  if (event.targetTouches) {
    var touch = event.targetTouches[0];
    lastTouchPosition.pageX = touch.pageX;
    lastTouchPosition.pageY = touch.pageY;
  }
}
/**
 * @private
 */


function _lockScrollInteractions() {
  _boundScrollHandler = _boundScrollHandler || _scrollInteractionHandler.bind(undefined);

  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.addEventListener(scrollEvents[i], _boundScrollHandler, {
      capture: true,
      passive: false
    });
  }
}
function _unlockScrollInteractions() {
  for (var i = 0, l = scrollEvents.length; i < l; i++) {
    // NOTE: browsers that don't support objects as third arg will
    // interpret it as boolean, hence useCapture = true in this case.
    document.removeEventListener(scrollEvents[i], _boundScrollHandler, {
      capture: true,
      passive: false
    });
  }
}
/**
 * Returns true if the event causes scroll outside the current locking
 * element, e.g. pointer/keyboard interactions, or scroll "leaking"
 * outside the locking element when it is already at its scroll boundaries.
 * @param {!Event} event
 * @return {boolean}
 * @private
 */

function _shouldPreventScrolling(event) {
  // Update if root target changed. For touch events, ensure we don't
  // update during touchmove.
  var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(event).rootTarget;

  if (event.type !== 'touchmove' && lastRootTarget !== target) {
    lastRootTarget = target;
    lastScrollableNodes = _getScrollableNodes(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(event).path);
  } // Prevent event if no scrollable nodes.


  if (!lastScrollableNodes.length) {
    return true;
  } // Don't prevent touchstart event inside the locking element when it has
  // scrollable nodes.


  if (event.type === 'touchstart') {
    return false;
  } // Get deltaX/Y.


  var info = _getScrollInfo(event); // Prevent if there is no child that can scroll.


  return !_getScrollingNode(lastScrollableNodes, info.deltaX, info.deltaY);
}
/**
 * Returns an array of scrollable nodes up to the current locking element,
 * which is included too if scrollable.
 * @param {!Array<!Node>} nodes
 * @return {!Array<!Node>} scrollables
 * @private
 */

function _getScrollableNodes(nodes) {
  var scrollables = [];
  var lockingIndex = nodes.indexOf(currentLockingElement); // Loop from root target to locking element (included).

  for (var i = 0; i <= lockingIndex; i++) {
    // Skip non-Element nodes.
    if (nodes[i].nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    var node =
    /** @type {!Element} */
    nodes[i]; // Check inline style before checking computed style.

    var style = node.style;

    if (style.overflow !== 'scroll' && style.overflow !== 'auto') {
      style = window.getComputedStyle(node);
    }

    if (style.overflow === 'scroll' || style.overflow === 'auto') {
      scrollables.push(node);
    }
  }

  return scrollables;
}
/**
 * Returns the node that is scrolling. If there is no scrolling,
 * returns undefined.
 * @param {!Array<!Node>} nodes
 * @param {number} deltaX Scroll delta on the x-axis
 * @param {number} deltaY Scroll delta on the y-axis
 * @return {!Node|undefined}
 * @private
 */

function _getScrollingNode(nodes, deltaX, deltaY) {
  // No scroll.
  if (!deltaX && !deltaY) {
    return;
  } // Check only one axis according to where there is more scroll.
  // Prefer vertical to horizontal.


  var verticalScroll = Math.abs(deltaY) >= Math.abs(deltaX);

  for (var i = 0; i < nodes.length; i++) {
    var node = nodes[i];
    var canScroll = false;

    if (verticalScroll) {
      // delta < 0 is scroll up, delta > 0 is scroll down.
      canScroll = deltaY < 0 ? node.scrollTop > 0 : node.scrollTop < node.scrollHeight - node.clientHeight;
    } else {
      // delta < 0 is scroll left, delta > 0 is scroll right.
      canScroll = deltaX < 0 ? node.scrollLeft > 0 : node.scrollLeft < node.scrollWidth - node.clientWidth;
    }

    if (canScroll) {
      return node;
    }
  }
}
/**
 * Returns scroll `deltaX` and `deltaY`.
 * @param {!Event} event The scroll event
 * @return {{deltaX: number, deltaY: number}} Object containing the
 * x-axis scroll delta (positive: scroll right, negative: scroll left,
 * 0: no scroll), and the y-axis scroll delta (positive: scroll down,
 * negative: scroll up, 0: no scroll).
 * @private
 */

function _getScrollInfo(event) {
  var info = {
    deltaX: event.deltaX,
    deltaY: event.deltaY
  }; // Already available.

  if ('deltaX' in event) {} // do nothing, values are already good.
  // Safari has scroll info in `wheelDeltaX/Y`.
  else if ('wheelDeltaX' in event && 'wheelDeltaY' in event) {
      info.deltaX = -event.wheelDeltaX;
      info.deltaY = -event.wheelDeltaY;
    } // IE10 has only vertical scroll info in `wheelDelta`.
    else if ('wheelDelta' in event) {
        info.deltaX = 0;
        info.deltaY = -event.wheelDelta;
      } // Firefox has scroll info in `detail` and `axis`.
      else if ('axis' in event) {
          info.deltaX = event.axis === 1 ? event.detail : 0;
          info.deltaY = event.axis === 2 ? event.detail : 0;
        } // On mobile devices, calculate scroll direction.
        else if (event.targetTouches) {
            var touch = event.targetTouches[0]; // Touch moves from right to left => scrolling goes right.

            info.deltaX = lastTouchPosition.pageX - touch.pageX; // Touch moves from down to up => scrolling goes down.

            info.deltaY = lastTouchPosition.pageY - touch.pageY;
          }

  return info;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nfm5vdGlmaWNhdGlvbi1tYW5hZ2VyfnBhbmVsLWxvdmVsYWNlLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tZml0LWJlaGF2aW9yL2lyb24tZml0LWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1mb2N1c2FibGVzLWhlbHBlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1iYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tb3ZlcmxheS1tYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1zY3JvbGwtbWFuYWdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbmBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAgZml0cyBhbiBlbGVtZW50IGluIGFub3RoZXIgZWxlbWVudCB1c2luZyBgbWF4LWhlaWdodGBcbmFuZCBgbWF4LXdpZHRoYCwgYW5kIG9wdGlvbmFsbHkgY2VudGVycyBpdCBpbiB0aGUgd2luZG93IG9yIGFub3RoZXIgZWxlbWVudC5cblxuVGhlIGVsZW1lbnQgd2lsbCBvbmx5IGJlIHNpemVkIGFuZC9vciBwb3NpdGlvbmVkIGlmIGl0IGhhcyBub3QgYWxyZWFkeSBiZWVuXG5zaXplZCBhbmQvb3IgcG9zaXRpb25lZCBieSBDU1MuXG5cbkNTUyBwcm9wZXJ0aWVzICAgICAgICAgICAgfCBBY3Rpb25cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmBwb3NpdGlvbmAgc2V0ICAgICAgICAgICAgfCBFbGVtZW50IGlzIG5vdCBjZW50ZXJlZCBob3Jpem9udGFsbHkgb3IgdmVydGljYWxseVxuYHRvcGAgb3IgYGJvdHRvbWAgc2V0ICAgICB8IEVsZW1lbnQgaXMgbm90IHZlcnRpY2FsbHkgY2VudGVyZWRcbmBsZWZ0YCBvciBgcmlnaHRgIHNldCAgICAgfCBFbGVtZW50IGlzIG5vdCBob3Jpem9udGFsbHkgY2VudGVyZWRcbmBtYXgtaGVpZ2h0YCBzZXQgICAgICAgICAgfCBFbGVtZW50IHJlc3BlY3RzIGBtYXgtaGVpZ2h0YFxuYG1heC13aWR0aGAgc2V0ICAgICAgICAgICB8IEVsZW1lbnQgcmVzcGVjdHMgYG1heC13aWR0aGBcblxuYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYCBjYW4gcG9zaXRpb24gYW4gZWxlbWVudCBpbnRvIGFub3RoZXIgZWxlbWVudCB1c2luZ1xuYHZlcnRpY2FsQWxpZ25gIGFuZCBgaG9yaXpvbnRhbEFsaWduYC4gVGhpcyB3aWxsIG92ZXJyaWRlIHRoZSBlbGVtZW50J3MgY3NzXG5wb3NpdGlvbi5cblxuICAgIDxkaXYgY2xhc3M9XCJjb250YWluZXJcIj5cbiAgICAgIDxpcm9uLWZpdC1pbXBsIHZlcnRpY2FsLWFsaWduPVwidG9wXCIgaG9yaXpvbnRhbC1hbGlnbj1cImF1dG9cIj5cbiAgICAgICAgUG9zaXRpb25lZCBpbnRvIHRoZSBjb250YWluZXJcbiAgICAgIDwvaXJvbi1maXQtaW1wbD5cbiAgICA8L2Rpdj5cblxuVXNlIGBub092ZXJsYXBgIHRvIHBvc2l0aW9uIHRoZSBlbGVtZW50IGFyb3VuZCBhbm90aGVyIGVsZW1lbnQgd2l0aG91dFxub3ZlcmxhcHBpbmcgaXQuXG5cbiAgICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyXCI+XG4gICAgICA8aXJvbi1maXQtaW1wbCBuby1vdmVybGFwIHZlcnRpY2FsLWFsaWduPVwiYXV0b1wiIGhvcml6b250YWwtYWxpZ249XCJhdXRvXCI+XG4gICAgICAgIFBvc2l0aW9uZWQgYXJvdW5kIHRoZSBjb250YWluZXJcbiAgICAgIDwvaXJvbi1maXQtaW1wbD5cbiAgICA8L2Rpdj5cblxuVXNlIGBob3Jpem9udGFsT2Zmc2V0LCB2ZXJ0aWNhbE9mZnNldGAgdG8gb2Zmc2V0IHRoZSBlbGVtZW50IGZyb20gaXRzXG5gcG9zaXRpb25UYXJnZXRgOyBgUG9seW1lci5Jcm9uRml0QmVoYXZpb3JgIHdpbGwgY29sbGFwc2UgdGhlc2UgaW4gb3JkZXIgdG9cbmtlZXAgdGhlIGVsZW1lbnQgd2l0aGluIGBmaXRJbnRvYCBib3VuZGFyaWVzLCB3aGlsZSBwcmVzZXJ2aW5nIHRoZSBlbGVtZW50J3NcbkNTUyBtYXJnaW4gdmFsdWVzLlxuXG4gICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgPGlyb24tZml0LWltcGwgdmVydGljYWwtYWxpZ249XCJ0b3BcIiB2ZXJ0aWNhbC1vZmZzZXQ9XCIyMFwiPlxuICAgICAgICBXaXRoIHZlcnRpY2FsIG9mZnNldFxuICAgICAgPC9pcm9uLWZpdC1pbXBsPlxuICAgIDwvZGl2PlxuXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBwb2x5bWVyQmVoYXZpb3JcbiovXG5leHBvcnQgY29uc3QgSXJvbkZpdEJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBlbGVtZW50IHRoYXQgd2lsbCByZWNlaXZlIGEgYG1heC1oZWlnaHRgL2B3aWR0aGAuIEJ5IGRlZmF1bHQgaXQgaXNcbiAgICAgKiB0aGUgc2FtZSBhcyBgdGhpc2AsIGJ1dCBpdCBjYW4gYmUgc2V0IHRvIGEgY2hpbGQgZWxlbWVudC4gVGhpcyBpcyB1c2VmdWwsXG4gICAgICogZm9yIGV4YW1wbGUsIGZvciBpbXBsZW1lbnRpbmcgYSBzY3JvbGxpbmcgcmVnaW9uIGluc2lkZSB0aGUgZWxlbWVudC5cbiAgICAgKiBAdHlwZSB7IUVsZW1lbnR9XG4gICAgICovXG4gICAgc2l6aW5nVGFyZ2V0OiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBmaXQgYHRoaXNgIGludG8uXG4gICAgICovXG4gICAgZml0SW50bzoge3R5cGU6IE9iamVjdCwgdmFsdWU6IHdpbmRvd30sXG5cbiAgICAvKipcbiAgICAgKiBXaWxsIHBvc2l0aW9uIHRoZSBlbGVtZW50IGFyb3VuZCB0aGUgcG9zaXRpb25UYXJnZXQgd2l0aG91dCBvdmVybGFwcGluZ1xuICAgICAqIGl0LlxuICAgICAqL1xuICAgIG5vT3ZlcmxhcDoge3R5cGU6IEJvb2xlYW59LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGVsZW1lbnQgdGhhdCBzaG91bGQgYmUgdXNlZCB0byBwb3NpdGlvbiB0aGUgZWxlbWVudC4gSWYgbm90IHNldCwgaXRcbiAgICAgKiB3aWxsIGRlZmF1bHQgdG8gdGhlIHBhcmVudCBub2RlLlxuICAgICAqIEB0eXBlIHshRWxlbWVudH1cbiAgICAgKi9cbiAgICBwb3NpdGlvblRhcmdldDoge3R5cGU6IEVsZW1lbnR9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGVsZW1lbnQgaG9yaXpvbnRhbGx5XG4gICAgICogcmVsYXRpdmUgdG8gdGhlIGBwb3NpdGlvblRhcmdldGAuIFBvc3NpYmxlIHZhbHVlcyBhcmUgXCJsZWZ0XCIsIFwicmlnaHRcIixcbiAgICAgKiBcImNlbnRlclwiLCBcImF1dG9cIi5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGVsZW1lbnQgdmVydGljYWxseVxuICAgICAqIHJlbGF0aXZlIHRvIHRoZSBgcG9zaXRpb25UYXJnZXRgLiBQb3NzaWJsZSB2YWx1ZXMgYXJlIFwidG9wXCIsIFwiYm90dG9tXCIsXG4gICAgICogXCJtaWRkbGVcIiwgXCJhdXRvXCIuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCBpdCB3aWxsIHVzZSBgaG9yaXpvbnRhbEFsaWduYCBhbmQgYHZlcnRpY2FsQWxpZ25gIHZhbHVlcyBhc1xuICAgICAqIHByZWZlcnJlZCBhbGlnbm1lbnQgYW5kIGlmIHRoZXJlJ3Mgbm90IGVub3VnaCBzcGFjZSwgaXQgd2lsbCBwaWNrIHRoZVxuICAgICAqIHZhbHVlcyB3aGljaCBtaW5pbWl6ZSB0aGUgY3JvcHBpbmcuXG4gICAgICovXG4gICAgZHluYW1pY0FsaWduOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICAvKipcbiAgICAgKiBBIHBpeGVsIHZhbHVlIHRoYXQgd2lsbCBiZSBhZGRlZCB0byB0aGUgcG9zaXRpb24gY2FsY3VsYXRlZCBmb3IgdGhlXG4gICAgICogZ2l2ZW4gYGhvcml6b250YWxBbGlnbmAsIGluIHRoZSBkaXJlY3Rpb24gb2YgYWxpZ25tZW50LiBZb3UgY2FuIHRoaW5rXG4gICAgICogb2YgaXQgYXMgaW5jcmVhc2luZyBvciBkZWNyZWFzaW5nIHRoZSBkaXN0YW5jZSB0byB0aGUgc2lkZSBvZiB0aGVcbiAgICAgKiBzY3JlZW4gZ2l2ZW4gYnkgYGhvcml6b250YWxBbGlnbmAuXG4gICAgICpcbiAgICAgKiBJZiBgaG9yaXpvbnRhbEFsaWduYCBpcyBcImxlZnRcIiBvciBcImNlbnRlclwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlIG9yXG4gICAgICogZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSBsZWZ0IHNpZGUgb2YgdGhlIHNjcmVlbjogYSBuZWdhdGl2ZSBvZmZzZXRcbiAgICAgKiB3aWxsIG1vdmUgdGhlIGRyb3Bkb3duIHRvIHRoZSBsZWZ0OyBhIHBvc2l0aXZlIG9uZSwgdG8gdGhlIHJpZ2h0LlxuICAgICAqXG4gICAgICogQ29udmVyc2VseSBpZiBgaG9yaXpvbnRhbEFsaWduYCBpcyBcInJpZ2h0XCIsIHRoaXMgb2Zmc2V0IHdpbGwgaW5jcmVhc2VcbiAgICAgKiBvciBkZWNyZWFzZSB0aGUgZGlzdGFuY2UgdG8gdGhlIHJpZ2h0IHNpZGUgb2YgdGhlIHNjcmVlbjogYSBuZWdhdGl2ZVxuICAgICAqIG9mZnNldCB3aWxsIG1vdmUgdGhlIGRyb3Bkb3duIHRvIHRoZSByaWdodDsgYSBwb3NpdGl2ZSBvbmUsIHRvIHRoZSBsZWZ0LlxuICAgICAqL1xuICAgIGhvcml6b250YWxPZmZzZXQ6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogQSBwaXhlbCB2YWx1ZSB0aGF0IHdpbGwgYmUgYWRkZWQgdG8gdGhlIHBvc2l0aW9uIGNhbGN1bGF0ZWQgZm9yIHRoZVxuICAgICAqIGdpdmVuIGB2ZXJ0aWNhbEFsaWduYCwgaW4gdGhlIGRpcmVjdGlvbiBvZiBhbGlnbm1lbnQuIFlvdSBjYW4gdGhpbmtcbiAgICAgKiBvZiBpdCBhcyBpbmNyZWFzaW5nIG9yIGRlY3JlYXNpbmcgdGhlIGRpc3RhbmNlIHRvIHRoZSBzaWRlIG9mIHRoZVxuICAgICAqIHNjcmVlbiBnaXZlbiBieSBgdmVydGljYWxBbGlnbmAuXG4gICAgICpcbiAgICAgKiBJZiBgdmVydGljYWxBbGlnbmAgaXMgXCJ0b3BcIiBvciBcIm1pZGRsZVwiLCB0aGlzIG9mZnNldCB3aWxsIGluY3JlYXNlIG9yXG4gICAgICogZGVjcmVhc2UgdGhlIGRpc3RhbmNlIHRvIHRoZSB0b3Agc2lkZSBvZiB0aGUgc2NyZWVuOiBhIG5lZ2F0aXZlIG9mZnNldFxuICAgICAqIHdpbGwgbW92ZSB0aGUgZHJvcGRvd24gdXB3YXJkczsgYSBwb3NpdGl2ZSBvbmUsIGRvd253YXJkcy5cbiAgICAgKlxuICAgICAqIENvbnZlcnNlbHkgaWYgYHZlcnRpY2FsQWxpZ25gIGlzIFwiYm90dG9tXCIsIHRoaXMgb2Zmc2V0IHdpbGwgaW5jcmVhc2VcbiAgICAgKiBvciBkZWNyZWFzZSB0aGUgZGlzdGFuY2UgdG8gdGhlIGJvdHRvbSBzaWRlIG9mIHRoZSBzY3JlZW46IGEgbmVnYXRpdmVcbiAgICAgKiBvZmZzZXQgd2lsbCBtb3ZlIHRoZSBkcm9wZG93biBkb3dud2FyZHM7IGEgcG9zaXRpdmUgb25lLCB1cHdhcmRzLlxuICAgICAqL1xuICAgIHZlcnRpY2FsT2Zmc2V0OiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMCwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGF1dG8tZml0IG9uIGF0dGFjaC5cbiAgICAgKi9cbiAgICBhdXRvRml0T25BdHRhY2g6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqIEB0eXBlIHs/T2JqZWN0fSAqL1xuICAgIF9maXRJbmZvOiB7dHlwZTogT2JqZWN0fVxuICB9LFxuXG4gIGdldCBfZml0V2lkdGgoKSB7XG4gICAgdmFyIGZpdFdpZHRoO1xuICAgIGlmICh0aGlzLmZpdEludG8gPT09IHdpbmRvdykge1xuICAgICAgZml0V2lkdGggPSB0aGlzLmZpdEludG8uaW5uZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgZml0V2lkdGggPSB0aGlzLmZpdEludG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgfVxuICAgIHJldHVybiBmaXRXaWR0aDtcbiAgfSxcblxuICBnZXQgX2ZpdEhlaWdodCgpIHtcbiAgICB2YXIgZml0SGVpZ2h0O1xuICAgIGlmICh0aGlzLmZpdEludG8gPT09IHdpbmRvdykge1xuICAgICAgZml0SGVpZ2h0ID0gdGhpcy5maXRJbnRvLmlubmVySGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXRIZWlnaHQgPSB0aGlzLmZpdEludG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0O1xuICAgIH1cbiAgICByZXR1cm4gZml0SGVpZ2h0O1xuICB9LFxuXG4gIGdldCBfZml0TGVmdCgpIHtcbiAgICB2YXIgZml0TGVmdDtcbiAgICBpZiAodGhpcy5maXRJbnRvID09PSB3aW5kb3cpIHtcbiAgICAgIGZpdExlZnQgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXRMZWZ0ID0gdGhpcy5maXRJbnRvLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLmxlZnQ7XG4gICAgfVxuICAgIHJldHVybiBmaXRMZWZ0O1xuICB9LFxuXG4gIGdldCBfZml0VG9wKCkge1xuICAgIHZhciBmaXRUb3A7XG4gICAgaWYgKHRoaXMuZml0SW50byA9PT0gd2luZG93KSB7XG4gICAgICBmaXRUb3AgPSAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBmaXRUb3AgPSB0aGlzLmZpdEludG8uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIH1cbiAgICByZXR1cm4gZml0VG9wO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBiZSB1c2VkIHRvIHBvc2l0aW9uIHRoZSBlbGVtZW50LFxuICAgKiBpZiBubyBwb3NpdGlvbiB0YXJnZXQgaXMgY29uZmlndXJlZC5cbiAgICovXG4gIGdldCBfZGVmYXVsdFBvc2l0aW9uVGFyZ2V0KCkge1xuICAgIHZhciBwYXJlbnQgPSBkb20odGhpcykucGFyZW50Tm9kZTtcblxuICAgIGlmIChwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlID09PSBOb2RlLkRPQ1VNRU5UX0ZSQUdNRU5UX05PREUpIHtcbiAgICAgIHBhcmVudCA9IHBhcmVudC5ob3N0O1xuICAgIH1cblxuICAgIHJldHVybiBwYXJlbnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBob3Jpem9udGFsIGFsaWduIHZhbHVlLCBhY2NvdW50aW5nIGZvciB0aGUgUlRML0xUUiB0ZXh0IGRpcmVjdGlvbi5cbiAgICovXG4gIGdldCBfbG9jYWxlSG9yaXpvbnRhbEFsaWduKCkge1xuICAgIGlmICh0aGlzLl9pc1JUTCkge1xuICAgICAgLy8gSW4gUlRMLCBcImxlZnRcIiBiZWNvbWVzIFwicmlnaHRcIi5cbiAgICAgIGlmICh0aGlzLmhvcml6b250YWxBbGlnbiA9PT0gJ3JpZ2h0Jykge1xuICAgICAgICByZXR1cm4gJ2xlZnQnO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaG9yaXpvbnRhbEFsaWduID09PSAnbGVmdCcpIHtcbiAgICAgICAgcmV0dXJuICdyaWdodCc7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmhvcml6b250YWxBbGlnbjtcbiAgfSxcblxuICAvKipcbiAgICogVHJ1ZSBpZiB0aGUgZWxlbWVudCBzaG91bGQgYmUgcG9zaXRpb25lZCBpbnN0ZWFkIG9mIGNlbnRlcmVkLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IF9fc2hvdWxkUG9zaXRpb24oKSB7XG4gICAgcmV0dXJuICh0aGlzLmhvcml6b250YWxBbGlnbiB8fCB0aGlzLnZlcnRpY2FsQWxpZ24pICYmIHRoaXMucG9zaXRpb25UYXJnZXQ7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE1lbW9pemUgdGhpcyB0byBhdm9pZCBleHBlbnNpdmUgY2FsY3VsYXRpb25zICYgcmVsYXlvdXRzLlxuICAgIC8vIE1ha2Ugc3VyZSB3ZSBkbyBpdCBvbmx5IG9uY2VcbiAgICBpZiAodHlwZW9mIHRoaXMuX2lzUlRMID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdGhpcy5faXNSVEwgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXJlY3Rpb24gPT0gJ3J0bCc7XG4gICAgfVxuICAgIHRoaXMucG9zaXRpb25UYXJnZXQgPSB0aGlzLnBvc2l0aW9uVGFyZ2V0IHx8IHRoaXMuX2RlZmF1bHRQb3NpdGlvblRhcmdldDtcbiAgICBpZiAodGhpcy5hdXRvRml0T25BdHRhY2gpIHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5kaXNwbGF5ID09PSAnbm9uZScpIHtcbiAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICB0aGlzLmZpdCgpO1xuICAgICAgICB9LmJpbmQodGhpcykpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTk9URTogc2hhZHlkb20gYXBwbGllcyBkaXN0cmlidXRpb24gYXN5bmNocm9ub3VzbHlcbiAgICAgICAgLy8gZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMgd2ViY29tcG9uZW50cy9zaGFkeWRvbSMxMjBcbiAgICAgICAgLy8gRmx1c2ggdG8gZ2V0IGNvcnJlY3QgbGF5b3V0IGluZm8uXG4gICAgICAgIHdpbmRvdy5TaGFkeURPTSAmJiBTaGFkeURPTS5mbHVzaCgpO1xuICAgICAgICB0aGlzLmZpdCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX19kZWZlcnJlZEZpdCkge1xuICAgICAgY2xlYXJUaW1lb3V0KHRoaXMuX19kZWZlcnJlZEZpdCk7XG4gICAgICB0aGlzLl9fZGVmZXJyZWRGaXQgPSBudWxsO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUG9zaXRpb25zIGFuZCBmaXRzIHRoZSBlbGVtZW50IGludG8gdGhlIGBmaXRJbnRvYCBlbGVtZW50LlxuICAgKi9cbiAgZml0OiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnBvc2l0aW9uKCk7XG4gICAgdGhpcy5jb25zdHJhaW4oKTtcbiAgICB0aGlzLmNlbnRlcigpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNZW1vaXplIGluZm9ybWF0aW9uIG5lZWRlZCB0byBwb3NpdGlvbiBhbmQgc2l6ZSB0aGUgdGFyZ2V0IGVsZW1lbnQuXG4gICAqIEBzdXBwcmVzcyB7ZGVwcmVjYXRlZH1cbiAgICovXG4gIF9kaXNjb3ZlckluZm86IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9maXRJbmZvKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0YXJnZXQgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICB2YXIgc2l6ZXIgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLnNpemluZ1RhcmdldCk7XG5cbiAgICB0aGlzLl9maXRJbmZvID0ge1xuICAgICAgaW5saW5lU3R5bGU6IHtcbiAgICAgICAgdG9wOiB0aGlzLnN0eWxlLnRvcCB8fCAnJyxcbiAgICAgICAgbGVmdDogdGhpcy5zdHlsZS5sZWZ0IHx8ICcnLFxuICAgICAgICBwb3NpdGlvbjogdGhpcy5zdHlsZS5wb3NpdGlvbiB8fCAnJ1xuICAgICAgfSxcbiAgICAgIHNpemVySW5saW5lU3R5bGU6IHtcbiAgICAgICAgbWF4V2lkdGg6IHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heFdpZHRoIHx8ICcnLFxuICAgICAgICBtYXhIZWlnaHQ6IHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heEhlaWdodCB8fCAnJyxcbiAgICAgICAgYm94U2l6aW5nOiB0aGlzLnNpemluZ1RhcmdldC5zdHlsZS5ib3hTaXppbmcgfHwgJydcbiAgICAgIH0sXG4gICAgICBwb3NpdGlvbmVkQnk6IHtcbiAgICAgICAgdmVydGljYWxseTogdGFyZ2V0LnRvcCAhPT0gJ2F1dG8nID9cbiAgICAgICAgICAgICd0b3AnIDpcbiAgICAgICAgICAgICh0YXJnZXQuYm90dG9tICE9PSAnYXV0bycgPyAnYm90dG9tJyA6IG51bGwpLFxuICAgICAgICBob3Jpem9udGFsbHk6IHRhcmdldC5sZWZ0ICE9PSAnYXV0bycgP1xuICAgICAgICAgICAgJ2xlZnQnIDpcbiAgICAgICAgICAgICh0YXJnZXQucmlnaHQgIT09ICdhdXRvJyA/ICdyaWdodCcgOiBudWxsKVxuICAgICAgfSxcbiAgICAgIHNpemVkQnk6IHtcbiAgICAgICAgaGVpZ2h0OiBzaXplci5tYXhIZWlnaHQgIT09ICdub25lJyxcbiAgICAgICAgd2lkdGg6IHNpemVyLm1heFdpZHRoICE9PSAnbm9uZScsXG4gICAgICAgIG1pbldpZHRoOiBwYXJzZUludChzaXplci5taW5XaWR0aCwgMTApIHx8IDAsXG4gICAgICAgIG1pbkhlaWdodDogcGFyc2VJbnQoc2l6ZXIubWluSGVpZ2h0LCAxMCkgfHwgMFxuICAgICAgfSxcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IHBhcnNlSW50KHRhcmdldC5tYXJnaW5Ub3AsIDEwKSB8fCAwLFxuICAgICAgICByaWdodDogcGFyc2VJbnQodGFyZ2V0Lm1hcmdpblJpZ2h0LCAxMCkgfHwgMCxcbiAgICAgICAgYm90dG9tOiBwYXJzZUludCh0YXJnZXQubWFyZ2luQm90dG9tLCAxMCkgfHwgMCxcbiAgICAgICAgbGVmdDogcGFyc2VJbnQodGFyZ2V0Lm1hcmdpbkxlZnQsIDEwKSB8fCAwXG4gICAgICB9XG4gICAgfTtcbiAgfSxcblxuICAvKipcbiAgICogUmVzZXRzIHRoZSB0YXJnZXQgZWxlbWVudCdzIHBvc2l0aW9uIGFuZCBzaXplIGNvbnN0cmFpbnRzLCBhbmQgY2xlYXJcbiAgICogdGhlIG1lbW9pemVkIGRhdGEuXG4gICAqL1xuICByZXNldEZpdDogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGluZm8gPSB0aGlzLl9maXRJbmZvIHx8IHt9O1xuICAgIGZvciAodmFyIHByb3BlcnR5IGluIGluZm8uc2l6ZXJJbmxpbmVTdHlsZSkge1xuICAgICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGVbcHJvcGVydHldID0gaW5mby5zaXplcklubGluZVN0eWxlW3Byb3BlcnR5XTtcbiAgICB9XG4gICAgZm9yICh2YXIgcHJvcGVydHkgaW4gaW5mby5pbmxpbmVTdHlsZSkge1xuICAgICAgdGhpcy5zdHlsZVtwcm9wZXJ0eV0gPSBpbmZvLmlubGluZVN0eWxlW3Byb3BlcnR5XTtcbiAgICB9XG5cbiAgICB0aGlzLl9maXRJbmZvID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogRXF1aXZhbGVudCB0byBjYWxsaW5nIGByZXNldEZpdCgpYCBhbmQgYGZpdCgpYC4gVXNlZnVsIHRvIGNhbGwgdGhpcyBhZnRlclxuICAgKiB0aGUgZWxlbWVudCBvciB0aGUgYGZpdEludG9gIGVsZW1lbnQgaGFzIGJlZW4gcmVzaXplZCwgb3IgaWYgYW55IG9mIHRoZVxuICAgKiBwb3NpdGlvbmluZyBwcm9wZXJ0aWVzIChlLmcuIGBob3Jpem9udGFsQWxpZ24sIHZlcnRpY2FsQWxpZ25gKSBpcyB1cGRhdGVkLlxuICAgKiBJdCBwcmVzZXJ2ZXMgdGhlIHNjcm9sbCBwb3NpdGlvbiBvZiB0aGUgc2l6aW5nVGFyZ2V0LlxuICAgKi9cbiAgcmVmaXQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzY3JvbGxMZWZ0ID0gdGhpcy5zaXppbmdUYXJnZXQuc2Nyb2xsTGVmdDtcbiAgICB2YXIgc2Nyb2xsVG9wID0gdGhpcy5zaXppbmdUYXJnZXQuc2Nyb2xsVG9wO1xuICAgIHRoaXMucmVzZXRGaXQoKTtcbiAgICB0aGlzLmZpdCgpO1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbExlZnQgPSBzY3JvbGxMZWZ0O1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnNjcm9sbFRvcCA9IHNjcm9sbFRvcDtcbiAgfSxcblxuICAvKipcbiAgICogUG9zaXRpb25zIHRoZSBlbGVtZW50IGFjY29yZGluZyB0byBgaG9yaXpvbnRhbEFsaWduLCB2ZXJ0aWNhbEFsaWduYC5cbiAgICovXG4gIHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX19zaG91bGRQb3NpdGlvbikge1xuICAgICAgLy8gbmVlZHMgdG8gYmUgY2VudGVyZWQsIGFuZCBpdCBpcyBkb25lIGFmdGVyIGNvbnN0cmFpbi5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGlzY292ZXJJbmZvKCk7XG5cbiAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAvLyBOZWVkIGJvcmRlci1ib3ggZm9yIG1hcmdpbi9wYWRkaW5nLlxuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLmJveFNpemluZyA9ICdib3JkZXItYm94JztcbiAgICAvLyBTZXQgdG8gMCwgMCBpbiBvcmRlciB0byBkaXNjb3ZlciBhbnkgb2Zmc2V0IGNhdXNlZCBieSBwYXJlbnQgc3RhY2tpbmdcbiAgICAvLyBjb250ZXh0cy5cbiAgICB0aGlzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB0aGlzLnN0eWxlLnRvcCA9ICcwcHgnO1xuXG4gICAgdmFyIHJlY3QgPSB0aGlzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHZhciBwb3NpdGlvblJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5wb3NpdGlvblRhcmdldCk7XG4gICAgdmFyIGZpdFJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5maXRJbnRvKTtcblxuICAgIHZhciBtYXJnaW4gPSB0aGlzLl9maXRJbmZvLm1hcmdpbjtcblxuICAgIC8vIENvbnNpZGVyIHRoZSBtYXJnaW4gYXMgcGFydCBvZiB0aGUgc2l6ZSBmb3IgcG9zaXRpb24gY2FsY3VsYXRpb25zLlxuICAgIHZhciBzaXplID0ge1xuICAgICAgd2lkdGg6IHJlY3Qud2lkdGggKyBtYXJnaW4ubGVmdCArIG1hcmdpbi5yaWdodCxcbiAgICAgIGhlaWdodDogcmVjdC5oZWlnaHQgKyBtYXJnaW4udG9wICsgbWFyZ2luLmJvdHRvbVxuICAgIH07XG5cbiAgICB2YXIgcG9zaXRpb24gPSB0aGlzLl9fZ2V0UG9zaXRpb24oXG4gICAgICAgIHRoaXMuX2xvY2FsZUhvcml6b250YWxBbGlnbixcbiAgICAgICAgdGhpcy52ZXJ0aWNhbEFsaWduLFxuICAgICAgICBzaXplLFxuICAgICAgICByZWN0LFxuICAgICAgICBwb3NpdGlvblJlY3QsXG4gICAgICAgIGZpdFJlY3QpO1xuXG4gICAgdmFyIGxlZnQgPSBwb3NpdGlvbi5sZWZ0ICsgbWFyZ2luLmxlZnQ7XG4gICAgdmFyIHRvcCA9IHBvc2l0aW9uLnRvcCArIG1hcmdpbi50b3A7XG5cbiAgICAvLyBXZSBmaXJzdCBsaW1pdCByaWdodC9ib3R0b20gd2l0aGluIGZpdEludG8gcmVzcGVjdGluZyB0aGUgbWFyZ2luLFxuICAgIC8vIHRoZW4gdXNlIHRob3NlIHZhbHVlcyB0byBsaW1pdCB0b3AvbGVmdC5cbiAgICB2YXIgcmlnaHQgPSBNYXRoLm1pbihmaXRSZWN0LnJpZ2h0IC0gbWFyZ2luLnJpZ2h0LCBsZWZ0ICsgcmVjdC53aWR0aCk7XG4gICAgdmFyIGJvdHRvbSA9IE1hdGgubWluKGZpdFJlY3QuYm90dG9tIC0gbWFyZ2luLmJvdHRvbSwgdG9wICsgcmVjdC5oZWlnaHQpO1xuXG4gICAgLy8gS2VlcCBsZWZ0L3RvcCB3aXRoaW4gZml0SW50byByZXNwZWN0aW5nIHRoZSBtYXJnaW4uXG4gICAgbGVmdCA9IE1hdGgubWF4KFxuICAgICAgICBmaXRSZWN0LmxlZnQgKyBtYXJnaW4ubGVmdCxcbiAgICAgICAgTWF0aC5taW4obGVmdCwgcmlnaHQgLSB0aGlzLl9maXRJbmZvLnNpemVkQnkubWluV2lkdGgpKTtcbiAgICB0b3AgPSBNYXRoLm1heChcbiAgICAgICAgZml0UmVjdC50b3AgKyBtYXJnaW4udG9wLFxuICAgICAgICBNYXRoLm1pbih0b3AsIGJvdHRvbSAtIHRoaXMuX2ZpdEluZm8uc2l6ZWRCeS5taW5IZWlnaHQpKTtcblxuICAgIC8vIFVzZSByaWdodC9ib3R0b20gdG8gc2V0IG1heFdpZHRoL21heEhlaWdodCwgYW5kIHJlc3BlY3RcbiAgICAvLyBtaW5XaWR0aC9taW5IZWlnaHQuXG4gICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGUubWF4V2lkdGggPVxuICAgICAgICBNYXRoLm1heChyaWdodCAtIGxlZnQsIHRoaXMuX2ZpdEluZm8uc2l6ZWRCeS5taW5XaWR0aCkgKyAncHgnO1xuICAgIHRoaXMuc2l6aW5nVGFyZ2V0LnN0eWxlLm1heEhlaWdodCA9XG4gICAgICAgIE1hdGgubWF4KGJvdHRvbSAtIHRvcCwgdGhpcy5fZml0SW5mby5zaXplZEJ5Lm1pbkhlaWdodCkgKyAncHgnO1xuXG4gICAgLy8gUmVtb3ZlIHRoZSBvZmZzZXQgY2F1c2VkIGJ5IGFueSBzdGFja2luZyBjb250ZXh0LlxuICAgIHRoaXMuc3R5bGUubGVmdCA9IChsZWZ0IC0gcmVjdC5sZWZ0KSArICdweCc7XG4gICAgdGhpcy5zdHlsZS50b3AgPSAodG9wIC0gcmVjdC50b3ApICsgJ3B4JztcbiAgfSxcblxuICAvKipcbiAgICogQ29uc3RyYWlucyB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCB0byBgZml0SW50b2AgYnkgc2V0dGluZyBgbWF4LWhlaWdodGBcbiAgICogYW5kL29yIGBtYXgtd2lkdGhgLlxuICAgKi9cbiAgY29uc3RyYWluOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX3Nob3VsZFBvc2l0aW9uKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX2Rpc2NvdmVySW5mbygpO1xuXG4gICAgdmFyIGluZm8gPSB0aGlzLl9maXRJbmZvO1xuICAgIC8vIHBvc2l0aW9uIGF0ICgwcHgsIDBweCkgaWYgbm90IGFscmVhZHkgcG9zaXRpb25lZCwgc28gd2UgY2FuIG1lYXN1cmUgdGhlXG4gICAgLy8gbmF0dXJhbCBzaXplLlxuICAgIGlmICghaW5mby5wb3NpdGlvbmVkQnkudmVydGljYWxseSkge1xuICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICB0aGlzLnN0eWxlLnRvcCA9ICcwcHgnO1xuICAgIH1cbiAgICBpZiAoIWluZm8ucG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSkge1xuICAgICAgdGhpcy5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICB0aGlzLnN0eWxlLmxlZnQgPSAnMHB4JztcbiAgICB9XG5cbiAgICAvLyBuZWVkIGJvcmRlci1ib3ggZm9yIG1hcmdpbi9wYWRkaW5nXG4gICAgdGhpcy5zaXppbmdUYXJnZXQuc3R5bGUuYm94U2l6aW5nID0gJ2JvcmRlci1ib3gnO1xuICAgIC8vIGNvbnN0cmFpbiB0aGUgd2lkdGggYW5kIGhlaWdodCBpZiBub3QgYWxyZWFkeSBzZXRcbiAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgaWYgKCFpbmZvLnNpemVkQnkuaGVpZ2h0KSB7XG4gICAgICB0aGlzLl9fc2l6ZURpbWVuc2lvbihcbiAgICAgICAgICByZWN0LCBpbmZvLnBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5LCAndG9wJywgJ2JvdHRvbScsICdIZWlnaHQnKTtcbiAgICB9XG4gICAgaWYgKCFpbmZvLnNpemVkQnkud2lkdGgpIHtcbiAgICAgIHRoaXMuX19zaXplRGltZW5zaW9uKFxuICAgICAgICAgIHJlY3QsIGluZm8ucG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSwgJ2xlZnQnLCAncmlnaHQnLCAnV2lkdGgnKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIF9zaXplRGltZW5zaW9uOiBmdW5jdGlvbihyZWN0LCBwb3NpdGlvbmVkQnksIHN0YXJ0LCBlbmQsIGV4dGVudCkge1xuICAgIHRoaXMuX19zaXplRGltZW5zaW9uKHJlY3QsIHBvc2l0aW9uZWRCeSwgc3RhcnQsIGVuZCwgZXh0ZW50KTtcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fc2l6ZURpbWVuc2lvbjogZnVuY3Rpb24ocmVjdCwgcG9zaXRpb25lZEJ5LCBzdGFydCwgZW5kLCBleHRlbnQpIHtcbiAgICB2YXIgaW5mbyA9IHRoaXMuX2ZpdEluZm87XG4gICAgdmFyIGZpdFJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5maXRJbnRvKTtcbiAgICB2YXIgbWF4ID0gZXh0ZW50ID09PSAnV2lkdGgnID8gZml0UmVjdC53aWR0aCA6IGZpdFJlY3QuaGVpZ2h0O1xuICAgIHZhciBmbGlwID0gKHBvc2l0aW9uZWRCeSA9PT0gZW5kKTtcbiAgICB2YXIgb2Zmc2V0ID0gZmxpcCA/IG1heCAtIHJlY3RbZW5kXSA6IHJlY3Rbc3RhcnRdO1xuICAgIHZhciBtYXJnaW4gPSBpbmZvLm1hcmdpbltmbGlwID8gc3RhcnQgOiBlbmRdO1xuICAgIHZhciBvZmZzZXRFeHRlbnQgPSAnb2Zmc2V0JyArIGV4dGVudDtcbiAgICB2YXIgc2l6aW5nT2Zmc2V0ID0gdGhpc1tvZmZzZXRFeHRlbnRdIC0gdGhpcy5zaXppbmdUYXJnZXRbb2Zmc2V0RXh0ZW50XTtcbiAgICB0aGlzLnNpemluZ1RhcmdldC5zdHlsZVsnbWF4JyArIGV4dGVudF0gPVxuICAgICAgICAobWF4IC0gbWFyZ2luIC0gb2Zmc2V0IC0gc2l6aW5nT2Zmc2V0KSArICdweCc7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENlbnRlcnMgaG9yaXpvbnRhbGx5IGFuZCB2ZXJ0aWNhbGx5IGlmIG5vdCBhbHJlYWR5IHBvc2l0aW9uZWQuIFRoaXMgYWxzb1xuICAgKiBzZXRzIGBwb3NpdGlvbjpmaXhlZGAuXG4gICAqL1xuICBjZW50ZXI6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9fc2hvdWxkUG9zaXRpb24pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fZGlzY292ZXJJbmZvKCk7XG5cbiAgICB2YXIgcG9zaXRpb25lZEJ5ID0gdGhpcy5fZml0SW5mby5wb3NpdGlvbmVkQnk7XG4gICAgaWYgKHBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5ICYmIHBvc2l0aW9uZWRCeS5ob3Jpem9udGFsbHkpIHtcbiAgICAgIC8vIEFscmVhZHkgcG9zaXRpb25lZC5cbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gTmVlZCBwb3NpdGlvbjpmaXhlZCB0byBjZW50ZXJcbiAgICB0aGlzLnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAvLyBUYWtlIGludG8gYWNjb3VudCB0aGUgb2Zmc2V0IGNhdXNlZCBieSBwYXJlbnRzIHRoYXQgY3JlYXRlIHN0YWNraW5nXG4gICAgLy8gY29udGV4dHMgKGUuZy4gd2l0aCB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKS4gVHJhbnNsYXRlIHRvIDAsMCBhbmRcbiAgICAvLyBtZWFzdXJlIHRoZSBib3VuZGluZyByZWN0LlxuICAgIGlmICghcG9zaXRpb25lZEJ5LnZlcnRpY2FsbHkpIHtcbiAgICAgIHRoaXMuc3R5bGUudG9wID0gJzBweCc7XG4gICAgfVxuICAgIGlmICghcG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSkge1xuICAgICAgdGhpcy5zdHlsZS5sZWZ0ID0gJzBweCc7XG4gICAgfVxuICAgIC8vIEl0IHdpbGwgdGFrZSBpbiBjb25zaWRlcmF0aW9uIG1hcmdpbnMgYW5kIHRyYW5zZm9ybXNcbiAgICB2YXIgcmVjdCA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdmFyIGZpdFJlY3QgPSB0aGlzLl9fZ2V0Tm9ybWFsaXplZFJlY3QodGhpcy5maXRJbnRvKTtcbiAgICBpZiAoIXBvc2l0aW9uZWRCeS52ZXJ0aWNhbGx5KSB7XG4gICAgICB2YXIgdG9wID0gZml0UmVjdC50b3AgLSByZWN0LnRvcCArIChmaXRSZWN0LmhlaWdodCAtIHJlY3QuaGVpZ2h0KSAvIDI7XG4gICAgICB0aGlzLnN0eWxlLnRvcCA9IHRvcCArICdweCc7XG4gICAgfVxuICAgIGlmICghcG9zaXRpb25lZEJ5Lmhvcml6b250YWxseSkge1xuICAgICAgdmFyIGxlZnQgPSBmaXRSZWN0LmxlZnQgLSByZWN0LmxlZnQgKyAoZml0UmVjdC53aWR0aCAtIHJlY3Qud2lkdGgpIC8gMjtcbiAgICAgIHRoaXMuc3R5bGUubGVmdCA9IGxlZnQgKyAncHgnO1xuICAgIH1cbiAgfSxcblxuICBfX2dldE5vcm1hbGl6ZWRSZWN0OiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICBpZiAodGFyZ2V0ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgfHwgdGFyZ2V0ID09PSB3aW5kb3cpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIHRvcDogMCxcbiAgICAgICAgbGVmdDogMCxcbiAgICAgICAgd2lkdGg6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcbiAgICAgICAgcmlnaHQ6IHdpbmRvdy5pbm5lcldpZHRoLFxuICAgICAgICBib3R0b206IHdpbmRvdy5pbm5lckhlaWdodFxuICAgICAgfTtcbiAgICB9XG4gICAgcmV0dXJuIHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgfSxcblxuICBfX2dldE9mZnNjcmVlbkFyZWE6IGZ1bmN0aW9uKHBvc2l0aW9uLCBzaXplLCBmaXRSZWN0KSB7XG4gICAgdmFyIHZlcnRpY2FsQ3JvcCA9IE1hdGgubWluKDAsIHBvc2l0aW9uLnRvcCkgK1xuICAgICAgICBNYXRoLm1pbigwLCBmaXRSZWN0LmJvdHRvbSAtIChwb3NpdGlvbi50b3AgKyBzaXplLmhlaWdodCkpO1xuICAgIHZhciBob3Jpem9udGFsQ3JvcCA9IE1hdGgubWluKDAsIHBvc2l0aW9uLmxlZnQpICtcbiAgICAgICAgTWF0aC5taW4oMCwgZml0UmVjdC5yaWdodCAtIChwb3NpdGlvbi5sZWZ0ICsgc2l6ZS53aWR0aCkpO1xuICAgIHJldHVybiBNYXRoLmFicyh2ZXJ0aWNhbENyb3ApICogc2l6ZS53aWR0aCArXG4gICAgICAgIE1hdGguYWJzKGhvcml6b250YWxDcm9wKSAqIHNpemUuaGVpZ2h0O1xuICB9LFxuXG5cbiAgX19nZXRQb3NpdGlvbjogZnVuY3Rpb24oXG4gICAgICBoQWxpZ24sIHZBbGlnbiwgc2l6ZSwgc2l6ZU5vTWFyZ2lucywgcG9zaXRpb25SZWN0LCBmaXRSZWN0KSB7XG4gICAgLy8gQWxsIHRoZSBwb3NzaWJsZSBjb25maWd1cmF0aW9ucy5cbiAgICAvLyBPcmRlcmVkIGFzIHRvcC1sZWZ0LCB0b3AtcmlnaHQsIGJvdHRvbS1sZWZ0LCBib3R0b20tcmlnaHQuXG4gICAgdmFyIHBvc2l0aW9ucyA9IFtcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCArIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ3JpZ2h0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LnJpZ2h0IC0gc2l6ZS53aWR0aCAtIHRoaXMuaG9yaXpvbnRhbE9mZnNldFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ2JvdHRvbScsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2xlZnQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCAtIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5sZWZ0ICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9LFxuICAgICAge1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAncmlnaHQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC5ib3R0b20gLSBzaXplLmhlaWdodCAtIHRoaXMudmVydGljYWxPZmZzZXQsXG4gICAgICAgIGxlZnQ6IHBvc2l0aW9uUmVjdC5yaWdodCAtIHNpemUud2lkdGggLSB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH1cbiAgICBdO1xuXG4gICAgaWYgKHRoaXMubm9PdmVybGFwKSB7XG4gICAgICAvLyBEdXBsaWNhdGUuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBvc2l0aW9ucy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAgICAgdmFyIGNvcHkgPSB7fTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIHBvc2l0aW9uc1tpXSkge1xuICAgICAgICAgIGNvcHlba2V5XSA9IHBvc2l0aW9uc1tpXVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHBvc2l0aW9ucy5wdXNoKGNvcHkpO1xuICAgICAgfVxuICAgICAgLy8gSG9yaXpvbnRhbCBvdmVybGFwIG9ubHkuXG4gICAgICBwb3NpdGlvbnNbMF0udG9wID0gcG9zaXRpb25zWzFdLnRvcCArPSBwb3NpdGlvblJlY3QuaGVpZ2h0O1xuICAgICAgcG9zaXRpb25zWzJdLnRvcCA9IHBvc2l0aW9uc1szXS50b3AgLT0gcG9zaXRpb25SZWN0LmhlaWdodDtcbiAgICAgIC8vIFZlcnRpY2FsIG92ZXJsYXAgb25seS5cbiAgICAgIHBvc2l0aW9uc1s0XS5sZWZ0ID0gcG9zaXRpb25zWzZdLmxlZnQgKz0gcG9zaXRpb25SZWN0LndpZHRoO1xuICAgICAgcG9zaXRpb25zWzVdLmxlZnQgPSBwb3NpdGlvbnNbN10ubGVmdCAtPSBwb3NpdGlvblJlY3Qud2lkdGg7XG4gICAgfVxuXG4gICAgLy8gQ29uc2lkZXIgYXV0byBhcyBudWxsIGZvciBjb2RpbmcgY29udmVuaWVuY2UuXG4gICAgdkFsaWduID0gdkFsaWduID09PSAnYXV0bycgPyBudWxsIDogdkFsaWduO1xuICAgIGhBbGlnbiA9IGhBbGlnbiA9PT0gJ2F1dG8nID8gbnVsbCA6IGhBbGlnbjtcblxuICAgIGlmICghaEFsaWduIHx8IGhBbGlnbiA9PT0gJ2NlbnRlcicpIHtcbiAgICAgIHBvc2l0aW9ucy5wdXNoKHtcbiAgICAgICAgdmVydGljYWxBbGlnbjogJ3RvcCcsXG4gICAgICAgIGhvcml6b250YWxBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIHRvcDogcG9zaXRpb25SZWN0LnRvcCArIHRoaXMudmVydGljYWxPZmZzZXQgK1xuICAgICAgICAgICAgKHRoaXMubm9PdmVybGFwID8gcG9zaXRpb25SZWN0LmhlaWdodCA6IDApLFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCAtIHNpemVOb01hcmdpbnMud2lkdGggLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC53aWR0aCAvIDIgKyB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0pO1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnYm90dG9tJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAnY2VudGVyJyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QuYm90dG9tIC0gc2l6ZS5oZWlnaHQgLSB0aGlzLnZlcnRpY2FsT2Zmc2V0IC1cbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC5oZWlnaHQgOiAwKSxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgLSBzaXplTm9NYXJnaW5zLndpZHRoIC8gMiArXG4gICAgICAgICAgICBwb3NpdGlvblJlY3Qud2lkdGggLyAyICsgdGhpcy5ob3Jpem9udGFsT2Zmc2V0XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoIXZBbGlnbiB8fCB2QWxpZ24gPT09ICdtaWRkbGUnKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdsZWZ0JyxcbiAgICAgICAgdG9wOiBwb3NpdGlvblJlY3QudG9wIC0gc2l6ZU5vTWFyZ2lucy5oZWlnaHQgLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC5oZWlnaHQgLyAyICsgdGhpcy52ZXJ0aWNhbE9mZnNldCxcbiAgICAgICAgbGVmdDogcG9zaXRpb25SZWN0LmxlZnQgKyB0aGlzLmhvcml6b250YWxPZmZzZXQgK1xuICAgICAgICAgICAgKHRoaXMubm9PdmVybGFwID8gcG9zaXRpb25SZWN0LndpZHRoIDogMClcbiAgICAgIH0pO1xuICAgICAgcG9zaXRpb25zLnB1c2goe1xuICAgICAgICB2ZXJ0aWNhbEFsaWduOiAnbWlkZGxlJyxcbiAgICAgICAgaG9yaXpvbnRhbEFsaWduOiAncmlnaHQnLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgLSBzaXplTm9NYXJnaW5zLmhlaWdodCAvIDIgK1xuICAgICAgICAgICAgcG9zaXRpb25SZWN0LmhlaWdodCAvIDIgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QucmlnaHQgLSBzaXplLndpZHRoIC0gdGhpcy5ob3Jpem9udGFsT2Zmc2V0IC1cbiAgICAgICAgICAgICh0aGlzLm5vT3ZlcmxhcCA/IHBvc2l0aW9uUmVjdC53aWR0aCA6IDApXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodkFsaWduID09PSAnbWlkZGxlJyAmJiBoQWxpZ24gPT09ICdjZW50ZXInKSB7XG4gICAgICBwb3NpdGlvbnMucHVzaCh7XG4gICAgICAgIHZlcnRpY2FsQWxpZ246ICdtaWRkbGUnLFxuICAgICAgICBob3Jpem9udGFsQWxpZ246ICdjZW50ZXInLFxuICAgICAgICB0b3A6IHBvc2l0aW9uUmVjdC50b3AgLSBzaXplTm9NYXJnaW5zLmhlaWdodCAvIDIgK1xuICAgICAgICAgICAgcG9zaXRpb25SZWN0LmhlaWdodCAvIDIgKyB0aGlzLnZlcnRpY2FsT2Zmc2V0LFxuICAgICAgICBsZWZ0OiBwb3NpdGlvblJlY3QubGVmdCAtIHNpemVOb01hcmdpbnMud2lkdGggLyAyICtcbiAgICAgICAgICAgIHBvc2l0aW9uUmVjdC53aWR0aCAvIDIgKyB0aGlzLmhvcml6b250YWxPZmZzZXRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHZhciBwb3NpdGlvbjtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc2l0aW9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGNhbmRpZGF0ZSA9IHBvc2l0aW9uc1tpXTtcbiAgICAgIHZhciB2QWxpZ25PayA9IGNhbmRpZGF0ZS52ZXJ0aWNhbEFsaWduID09PSB2QWxpZ247XG4gICAgICB2YXIgaEFsaWduT2sgPSBjYW5kaWRhdGUuaG9yaXpvbnRhbEFsaWduID09PSBoQWxpZ247XG5cbiAgICAgIC8vIElmIGJvdGggdkFsaWduIGFuZCBoQWxpZ24gYXJlIGRlZmluZWQsIHJldHVybiBleGFjdCBtYXRjaC5cbiAgICAgIC8vIEZvciBkeW5hbWljQWxpZ24gYW5kIG5vT3ZlcmxhcCB3ZSdsbCBoYXZlIG1vcmUgdGhhbiBvbmUgY2FuZGlkYXRlLCBzb1xuICAgICAgLy8gd2UnbGwgaGF2ZSB0byBjaGVjayB0aGUgb2Zmc2NyZWVuQXJlYSB0byBtYWtlIHRoZSBiZXN0IGNob2ljZS5cbiAgICAgIGlmICghdGhpcy5keW5hbWljQWxpZ24gJiYgIXRoaXMubm9PdmVybGFwICYmIHZBbGlnbk9rICYmIGhBbGlnbk9rKSB7XG4gICAgICAgIHBvc2l0aW9uID0gY2FuZGlkYXRlO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgLy8gQWxpZ24gaXMgb2sgaWYgYWxpZ25tZW50IHByZWZlcmVuY2VzIGFyZSByZXNwZWN0ZWQuIElmIG5vIHByZWZlcmVuY2VzLFxuICAgICAgLy8gaXQgaXMgY29uc2lkZXJlZCBvay5cbiAgICAgIHZhciBhbGlnbk9rID0gKCF2QWxpZ24gfHwgdkFsaWduT2spICYmICghaEFsaWduIHx8IGhBbGlnbk9rKTtcblxuICAgICAgLy8gRmlsdGVyIG91dCBlbGVtZW50cyB0aGF0IGRvbid0IG1hdGNoIHRoZSBhbGlnbm1lbnQgKGlmIGRlZmluZWQpLlxuICAgICAgLy8gV2l0aCBkeW5hbWljQWxpZ24sIHdlIG5lZWQgdG8gY29uc2lkZXIgYWxsIHRoZSBwb3NpdGlvbnMgdG8gZmluZCB0aGVcbiAgICAgIC8vIG9uZSB0aGF0IG1pbmltaXplcyB0aGUgY3JvcHBlZCBhcmVhLlxuICAgICAgaWYgKCF0aGlzLmR5bmFtaWNBbGlnbiAmJiAhYWxpZ25Paykge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgY2FuZGlkYXRlLm9mZnNjcmVlbkFyZWEgPVxuICAgICAgICAgIHRoaXMuX19nZXRPZmZzY3JlZW5BcmVhKGNhbmRpZGF0ZSwgc2l6ZSwgZml0UmVjdCk7XG4gICAgICAvLyBJZiBub3QgY3JvcHBlZCBhbmQgcmVzcGVjdHMgdGhlIGFsaWduIHJlcXVpcmVtZW50cywga2VlcCBpdC5cbiAgICAgIC8vIFRoaXMgYWxsb3dzIHRvIHByZWZlciBwb3NpdGlvbnMgb3ZlcmxhcHBpbmcgaG9yaXpvbnRhbGx5IG92ZXIgdGhlXG4gICAgICAvLyBvbmVzIG92ZXJsYXBwaW5nIHZlcnRpY2FsbHkuXG4gICAgICBpZiAoY2FuZGlkYXRlLm9mZnNjcmVlbkFyZWEgPT09IDAgJiYgYWxpZ25Paykge1xuICAgICAgICBwb3NpdGlvbiA9IGNhbmRpZGF0ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBwb3NpdGlvbiA9IHBvc2l0aW9uIHx8IGNhbmRpZGF0ZTtcbiAgICAgIHZhciBkaWZmID0gY2FuZGlkYXRlLm9mZnNjcmVlbkFyZWEgLSBwb3NpdGlvbi5vZmZzY3JlZW5BcmVhO1xuICAgICAgLy8gQ2hlY2sgd2hpY2ggY3JvcHMgbGVzcy4gSWYgaXQgY3JvcHMgZXF1YWxseSwgY2hlY2sgaWYgYXQgbGVhc3Qgb25lXG4gICAgICAvLyBhbGlnbiBzZXR0aW5nIGlzIG9rLlxuICAgICAgaWYgKGRpZmYgPCAwIHx8IChkaWZmID09PSAwICYmICh2QWxpZ25PayB8fCBoQWxpZ25PaykpKSB7XG4gICAgICAgIHBvc2l0aW9uID0gY2FuZGlkYXRlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbjtcbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE2IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcblxudmFyIHAgPSBFbGVtZW50LnByb3RvdHlwZTtcbnZhciBtYXRjaGVzID0gcC5tYXRjaGVzIHx8IHAubWF0Y2hlc1NlbGVjdG9yIHx8IHAubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG4gICAgcC5tc01hdGNoZXNTZWxlY3RvciB8fCBwLm9NYXRjaGVzU2VsZWN0b3IgfHwgcC53ZWJraXRNYXRjaGVzU2VsZWN0b3I7XG5cbmV4cG9ydCBjb25zdCBJcm9uRm9jdXNhYmxlc0hlbHBlciA9IHtcblxuICAvKipcbiAgICogUmV0dXJucyBhIHNvcnRlZCBhcnJheSBvZiB0YWJiYWJsZSBub2RlcywgaW5jbHVkaW5nIHRoZSByb290IG5vZGUuXG4gICAqIEl0IHNlYXJjaGVzIHRoZSB0YWJiYWJsZSBub2RlcyBpbiB0aGUgbGlnaHQgYW5kIHNoYWRvdyBkb20gb2YgdGhlIGNoaWRyZW4sXG4gICAqIHNvcnRpbmcgdGhlIHJlc3VsdCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZVxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIGdldFRhYmJhYmxlTm9kZXM6IGZ1bmN0aW9uKG5vZGUpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgLy8gSWYgdGhlcmUgaXMgYXQgbGVhc3Qgb25lIGVsZW1lbnQgd2l0aCB0YWJpbmRleCA+IDAsIHdlIG5lZWQgdG8gc29ydFxuICAgIC8vIHRoZSBmaW5hbCBhcnJheSBieSB0YWJpbmRleC5cbiAgICB2YXIgbmVlZHNTb3J0QnlUYWJJbmRleCA9IHRoaXMuX2NvbGxlY3RUYWJiYWJsZU5vZGVzKG5vZGUsIHJlc3VsdCk7XG4gICAgaWYgKG5lZWRzU29ydEJ5VGFiSW5kZXgpIHtcbiAgICAgIHJldHVybiB0aGlzLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIGEgZWxlbWVudCBpcyBmb2N1c2FibGUuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc0ZvY3VzYWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIC8vIEZyb20gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMTYwMDE5NC80MjI4NzAzOlxuICAgIC8vIFRoZXJlIGlzbid0IGEgZGVmaW5pdGUgbGlzdCwgaXQncyB1cCB0byB0aGUgYnJvd3Nlci4gVGhlIG9ubHlcbiAgICAvLyBzdGFuZGFyZCB3ZSBoYXZlIGlzIERPTSBMZXZlbCAyIEhUTUxcbiAgICAvLyBodHRwczovL3d3dy53My5vcmcvVFIvRE9NLUxldmVsLTItSFRNTC9odG1sLmh0bWwsIGFjY29yZGluZyB0byB3aGljaCB0aGVcbiAgICAvLyBvbmx5IGVsZW1lbnRzIHRoYXQgaGF2ZSBhIGZvY3VzKCkgbWV0aG9kIGFyZSBIVE1MSW5wdXRFbGVtZW50LFxuICAgIC8vIEhUTUxTZWxlY3RFbGVtZW50LCBIVE1MVGV4dEFyZWFFbGVtZW50IGFuZCBIVE1MQW5jaG9yRWxlbWVudC4gVGhpc1xuICAgIC8vIG5vdGFibHkgb21pdHMgSFRNTEJ1dHRvbkVsZW1lbnQgYW5kIEhUTUxBcmVhRWxlbWVudC4gUmVmZXJyaW5nIHRvIHRoZXNlXG4gICAgLy8gdGVzdHMgd2l0aCB0YWJiYWJsZXMgaW4gZGlmZmVyZW50IGJyb3dzZXJzXG4gICAgLy8gaHR0cDovL2FsbHlqcy5pby9kYXRhLXRhYmxlcy9mb2N1c2FibGUuaHRtbFxuXG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW5ub3QgYmUgZm9jdXNlZCBpZiB0aGV5IGhhdmUgW2Rpc2FibGVkXSBhdHRyaWJ1dGUuXG4gICAgaWYgKG1hdGNoZXMuY2FsbChlbGVtZW50LCAnaW5wdXQsIHNlbGVjdCwgdGV4dGFyZWEsIGJ1dHRvbiwgb2JqZWN0JykpIHtcbiAgICAgIHJldHVybiBtYXRjaGVzLmNhbGwoZWxlbWVudCwgJzpub3QoW2Rpc2FibGVkXSknKTtcbiAgICB9XG4gICAgLy8gRWxlbWVudHMgdGhhdCBjYW4gYmUgZm9jdXNlZCBldmVuIGlmIHRoZXkgaGF2ZSBbZGlzYWJsZWRdIGF0dHJpYnV0ZS5cbiAgICByZXR1cm4gbWF0Y2hlcy5jYWxsKFxuICAgICAgICBlbGVtZW50LCAnYVtocmVmXSwgYXJlYVtocmVmXSwgaWZyYW1lLCBbdGFiaW5kZXhdLCBbY29udGVudEVkaXRhYmxlXScpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIGEgZWxlbWVudCBpcyB0YWJiYWJsZS4gVG8gYmUgdGFiYmFibGUsIGEgZWxlbWVudCBtdXN0IGJlXG4gICAqIGZvY3VzYWJsZSwgdmlzaWJsZSwgYW5kIHdpdGggYSB0YWJpbmRleCAhPT0gLTEuXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSBlbGVtZW50XG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBpc1RhYmJhYmxlOiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRoaXMuaXNGb2N1c2FibGUoZWxlbWVudCkgJiZcbiAgICAgICAgbWF0Y2hlcy5jYWxsKGVsZW1lbnQsICc6bm90KFt0YWJpbmRleD1cIi0xXCJdKScpICYmXG4gICAgICAgIHRoaXMuX2lzVmlzaWJsZShlbGVtZW50KTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgbm9ybWFsaXplZCBlbGVtZW50IHRhYmluZGV4LiBJZiBub3QgZm9jdXNhYmxlLCByZXR1cm5zIC0xLlxuICAgKiBJdCBjaGVja3MgZm9yIHRoZSBhdHRyaWJ1dGUgXCJ0YWJpbmRleFwiIGluc3RlYWQgb2YgdGhlIGVsZW1lbnQgcHJvcGVydHlcbiAgICogYHRhYkluZGV4YCBzaW5jZSBicm93c2VycyBhc3NpZ24gZGlmZmVyZW50IHZhbHVlcyB0byBpdC5cbiAgICogZS5nLiBpbiBGaXJlZm94IGA8ZGl2IGNvbnRlbnRlZGl0YWJsZT5gIGhhcyBgdGFiSW5kZXggPSAtMWBcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHJldHVybiB7IW51bWJlcn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9ub3JtYWxpemVkVGFiSW5kZXg6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICBpZiAodGhpcy5pc0ZvY3VzYWJsZShlbGVtZW50KSkge1xuICAgICAgdmFyIHRhYkluZGV4ID0gZWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JykgfHwgMDtcbiAgICAgIHJldHVybiBOdW1iZXIodGFiSW5kZXgpO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlYXJjaGVzIGZvciBub2RlcyB0aGF0IGFyZSB0YWJiYWJsZSBhbmQgYWRkcyB0aGVtIHRvIHRoZSBgcmVzdWx0YCBhcnJheS5cbiAgICogUmV0dXJucyBpZiB0aGUgYHJlc3VsdGAgYXJyYXkgbmVlZHMgdG8gYmUgc29ydGVkIGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlIFRoZSBzdGFydGluZyBwb2ludCBmb3IgdGhlIHNlYXJjaDsgYWRkZWQgdG8gYHJlc3VsdGBcbiAgICogaWYgdGFiYmFibGUuXG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJlc3VsdFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2NvbGxlY3RUYWJiYWJsZU5vZGVzOiBmdW5jdGlvbihub2RlLCByZXN1bHQpIHtcbiAgICAvLyBJZiBub3QgYW4gZWxlbWVudCBvciBub3QgdmlzaWJsZSwgbm8gbmVlZCB0byBleHBsb3JlIGNoaWxkcmVuLlxuICAgIGlmIChub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fCAhdGhpcy5faXNWaXNpYmxlKG5vZGUpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBlbGVtZW50ID0gLyoqIEB0eXBlIHshSFRNTEVsZW1lbnR9ICovIChub2RlKTtcbiAgICB2YXIgdGFiSW5kZXggPSB0aGlzLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSAnY29udGVudCcgfHwgZWxlbWVudC5sb2NhbE5hbWUgPT09ICdzbG90Jykge1xuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudCkuZ2V0RGlzdHJpYnV0ZWROb2RlcygpO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBVc2Ugc2hhZG93IHJvb3QgaWYgcG9zc2libGUsIHdpbGwgY2hlY2sgZm9yIGRpc3RyaWJ1dGVkIG5vZGVzLlxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5yb290IHx8IGVsZW1lbnQpLmNoaWxkcmVuO1xuICAgIH1cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyBFbnN1cmUgbWV0aG9kIGlzIGFsd2F5cyBpbnZva2VkIHRvIGNvbGxlY3QgdGFiYmFibGUgY2hpbGRyZW4uXG4gICAgICBuZWVkc1NvcnQgPSB0aGlzLl9jb2xsZWN0VGFiYmFibGVOb2RlcyhjaGlsZHJlbltpXSwgcmVzdWx0KSB8fCBuZWVkc1NvcnQ7XG4gICAgfVxuICAgIHJldHVybiBuZWVkc1NvcnQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgZmFsc2UgaWYgdGhlIGVsZW1lbnQgaGFzIGB2aXNpYmlsaXR5OiBoaWRkZW5gIG9yIGBkaXNwbGF5OiBub25lYFxuICAgKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2lzVmlzaWJsZTogZnVuY3Rpb24oZWxlbWVudCkge1xuICAgIC8vIENoZWNrIGlubGluZSBzdHlsZSBmaXJzdCB0byBzYXZlIGEgcmUtZmxvdy4gSWYgbG9va3MgZ29vZCwgY2hlY2sgYWxzb1xuICAgIC8vIGNvbXB1dGVkIHN0eWxlLlxuICAgIHZhciBzdHlsZSA9IGVsZW1lbnQuc3R5bGU7XG4gICAgaWYgKHN0eWxlLnZpc2liaWxpdHkgIT09ICdoaWRkZW4nICYmIHN0eWxlLmRpc3BsYXkgIT09ICdub25lJykge1xuICAgICAgc3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KTtcbiAgICAgIHJldHVybiAoc3R5bGUudmlzaWJpbGl0eSAhPT0gJ2hpZGRlbicgJiYgc3R5bGUuZGlzcGxheSAhPT0gJ25vbmUnKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTb3J0cyBhbiBhcnJheSBvZiB0YWJiYWJsZSBlbGVtZW50cyBieSB0YWJpbmRleC4gUmV0dXJucyBhIG5ldyBhcnJheS5cbiAgICogQHBhcmFtIHshQXJyYXk8IUhUTUxFbGVtZW50Pn0gdGFiYmFibGVzXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3NvcnRCeVRhYkluZGV4OiBmdW5jdGlvbih0YWJiYWJsZXMpIHtcbiAgICAvLyBJbXBsZW1lbnQgYSBtZXJnZSBzb3J0IGFzIEFycmF5LnByb3RvdHlwZS5zb3J0IGRvZXMgYSBub24tc3RhYmxlIHNvcnRcbiAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9BcnJheS9zb3J0XG4gICAgdmFyIGxlbiA9IHRhYmJhYmxlcy5sZW5ndGg7XG4gICAgaWYgKGxlbiA8IDIpIHtcbiAgICAgIHJldHVybiB0YWJiYWJsZXM7XG4gICAgfVxuICAgIHZhciBwaXZvdCA9IE1hdGguY2VpbChsZW4gLyAyKTtcbiAgICB2YXIgbGVmdCA9IHRoaXMuX3NvcnRCeVRhYkluZGV4KHRhYmJhYmxlcy5zbGljZSgwLCBwaXZvdCkpO1xuICAgIHZhciByaWdodCA9IHRoaXMuX3NvcnRCeVRhYkluZGV4KHRhYmJhYmxlcy5zbGljZShwaXZvdCkpO1xuICAgIHJldHVybiB0aGlzLl9tZXJnZVNvcnRCeVRhYkluZGV4KGxlZnQsIHJpZ2h0KTtcbiAgfSxcblxuICAvKipcbiAgICogTWVyZ2Ugc29ydCBpdGVyYXRvciwgbWVyZ2VzIHRoZSB0d28gYXJyYXlzIGludG8gb25lLCBzb3J0ZWQgYnkgdGFiIGluZGV4LlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSBsZWZ0XG4gICAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRWxlbWVudD59IHJpZ2h0XG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX21lcmdlU29ydEJ5VGFiSW5kZXg6IGZ1bmN0aW9uKGxlZnQsIHJpZ2h0KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHdoaWxlICgobGVmdC5sZW5ndGggPiAwKSAmJiAocmlnaHQubGVuZ3RoID4gMCkpIHtcbiAgICAgIGlmICh0aGlzLl9oYXNMb3dlclRhYk9yZGVyKGxlZnRbMF0sIHJpZ2h0WzBdKSkge1xuICAgICAgICByZXN1bHQucHVzaChyaWdodC5zaGlmdCgpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGxlZnQuc2hpZnQoKSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlc3VsdC5jb25jYXQobGVmdCwgcmlnaHQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIGVsZW1lbnQgYGFgIGhhcyBsb3dlciB0YWIgb3JkZXIgY29tcGFyZWQgdG8gZWxlbWVudCBgYmBcbiAgICogKGJvdGggZWxlbWVudHMgYXJlIGFzc3VtZWQgdG8gYmUgZm9jdXNhYmxlIGFuZCB0YWJiYWJsZSkuXG4gICAqIEVsZW1lbnRzIHdpdGggdGFiaW5kZXggPSAwIGhhdmUgbG93ZXIgdGFiIG9yZGVyIGNvbXBhcmVkIHRvIGVsZW1lbnRzXG4gICAqIHdpdGggdGFiaW5kZXggPiAwLlxuICAgKiBJZiBib3RoIGhhdmUgc2FtZSB0YWJpbmRleCwgaXQgcmV0dXJucyBmYWxzZS5cbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGFcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IGJcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9oYXNMb3dlclRhYk9yZGVyOiBmdW5jdGlvbihhLCBiKSB7XG4gICAgLy8gTm9ybWFsaXplIHRhYkluZGV4ZXNcbiAgICAvLyBlLmcuIGluIEZpcmVmb3ggYDxkaXYgY29udGVudGVkaXRhYmxlPmAgaGFzIGB0YWJJbmRleCA9IC0xYFxuICAgIHZhciBhdGkgPSBNYXRoLm1heChhLnRhYkluZGV4LCAwKTtcbiAgICB2YXIgYnRpID0gTWF0aC5tYXgoYi50YWJJbmRleCwgMCk7XG4gICAgcmV0dXJuIChhdGkgPT09IDAgfHwgYnRpID09PSAwKSA/IGJ0aSA+IGF0aSA6IGF0aSA+IGJ0aTtcbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKlxuYGlyb24tb3ZlcmxheS1iYWNrZHJvcGAgaXMgYSBiYWNrZHJvcCB1c2VkIGJ5IGBQb2x5bWVyLklyb25PdmVybGF5QmVoYXZpb3JgLiBJdFxuc2hvdWxkIGJlIGEgc2luZ2xldG9uLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZy5cblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS1cbmAtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yYCB8IEJhY2tkcm9wIGJhY2tncm91bmQgY29sb3IgfCAjMDAwXG5gLS1pcm9uLW92ZXJsYXktYmFja2Ryb3Atb3BhY2l0eWAgICAgICAgICAgfCBCYWNrZHJvcCBvcGFjaXR5IHwgMC42XG5gLS1pcm9uLW92ZXJsYXktYmFja2Ryb3BgICAgICAgICAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIGBpcm9uLW92ZXJsYXktYmFja2Ryb3BgLiAgICAgICAgICAgICAgICAgICAgICB8IHt9XG5gLS1pcm9uLW92ZXJsYXktYmFja2Ryb3Atb3BlbmVkYCAgICAgICAgICAgfCBNaXhpbiBhcHBsaWVkIHRvIGBpcm9uLW92ZXJsYXktYmFja2Ryb3BgIHdoZW4gaXQgaXMgZGlzcGxheWVkIHwge31cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1iYWNrZ3JvdW5kLWNvbG9yLCAjMDAwKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjJzO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1vdmVybGF5LWJhY2tkcm9wO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCgub3BlbmVkKSB7XG4gICAgICAgIG9wYWNpdHk6IHZhcigtLWlyb24tb3ZlcmxheS1iYWNrZHJvcC1vcGFjaXR5LCAwLjYpO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgICAgQGFwcGx5IC0taXJvbi1vdmVybGF5LWJhY2tkcm9wLW9wZW5lZDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ2lyb24tb3ZlcmxheS1iYWNrZHJvcCcsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBiYWNrZHJvcCBpcyBvcGVuZWQuXG4gICAgICovXG4gICAgb3BlbmVkOiB7XG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgb2JzZXJ2ZXI6ICdfb3BlbmVkQ2hhbmdlZCcsXG4gICAgfVxuXG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7XG4gICAgJ3RyYW5zaXRpb25lbmQnOiAnX29uVHJhbnNpdGlvbmVuZCcsXG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlZCB0byBjYW5jZWwgcHJldmlvdXMgcmVxdWVzdEFuaW1hdGlvbkZyYW1lIGNhbGxzIHdoZW4gb3BlbmVkIGNoYW5nZXMuXG4gICAgdGhpcy5fX29wZW5lZFJhZiA9IG51bGw7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3BlbmVkICYmIHRoaXMuX29wZW5lZENoYW5nZWQodGhpcy5vcGVuZWQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcHBlbmRzIHRoZSBiYWNrZHJvcCB0byBkb2N1bWVudCBib2R5IGlmIG5lZWRlZC5cbiAgICovXG4gIHByZXBhcmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhdGhpcy5wYXJlbnROb2RlKSB7XG4gICAgICBkb20oZG9jdW1lbnQuYm9keSkuYXBwZW5kQ2hpbGQodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgYmFja2Ryb3AuXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhpZGVzIHRoZSBiYWNrZHJvcC5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZW1vdmVzIHRoZSBiYWNrZHJvcCBmcm9tIGRvY3VtZW50IGJvZHkgaWYgbmVlZGVkLlxuICAgKi9cbiAgY29tcGxldGU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5vcGVuZWQgJiYgdGhpcy5wYXJlbnROb2RlID09PSBkb2N1bWVudC5ib2R5KSB7XG4gICAgICBkb20odGhpcy5wYXJlbnROb2RlKS5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgX29uVHJhbnNpdGlvbmVuZDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAoZXZlbnQgJiYgZXZlbnQudGFyZ2V0ID09PSB0aGlzKSB7XG4gICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IG9wZW5lZFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKG9wZW5lZCkge1xuICAgIGlmIChvcGVuZWQpIHtcbiAgICAgIC8vIEF1dG8tYXR0YWNoLlxuICAgICAgdGhpcy5wcmVwYXJlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIEFuaW1hdGlvbiBtaWdodCBiZSBkaXNhYmxlZCB2aWEgdGhlIG1peGluIG9yIG9wYWNpdHkgY3VzdG9tIHByb3BlcnR5LlxuICAgICAgLy8gSWYgaXQgaXMgZGlzYWJsZWQgaW4gb3RoZXIgd2F5cywgaXQncyB1cCB0byB0aGUgdXNlciB0byBjYWxsIGNvbXBsZXRlLlxuICAgICAgdmFyIGNzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcyk7XG4gICAgICBpZiAoY3MudHJhbnNpdGlvbkR1cmF0aW9uID09PSAnMHMnIHx8IGNzLm9wYWNpdHkgPT0gMCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBbHdheXMgY2FuY2VsIHByZXZpb3VzIHJlcXVlc3RBbmltYXRpb25GcmFtZS5cbiAgICBpZiAodGhpcy5fX29wZW5lZFJhZikge1xuICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX19vcGVuZWRSYWYpO1xuICAgICAgdGhpcy5fX29wZW5lZFJhZiA9IG51bGw7XG4gICAgfVxuICAgIC8vIEZvcmNlIHJlbGF5b3V0IHRvIGVuc3VyZSBwcm9wZXIgdHJhbnNpdGlvbnMuXG4gICAgdGhpcy5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgICB0aGlzLl9fb3BlbmVkUmFmID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbigpIHtcbiAgICAgIHRoaXMuX19vcGVuZWRSYWYgPSBudWxsO1xuICAgICAgdGhpcy50b2dnbGVDbGFzcygnb3BlbmVkJywgdGhpcy5vcGVuZWQpO1xuICAgIH0uYmluZCh0aGlzKSk7XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25GaXRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1maXQtYmVoYXZpb3IvaXJvbi1maXQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHt1c2VTaGFkb3d9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3NldHRpbmdzLmpzJztcblxuaW1wb3J0IHtJcm9uRm9jdXNhYmxlc0hlbHBlcn0gZnJvbSAnLi9pcm9uLWZvY3VzYWJsZXMtaGVscGVyLmpzJztcbmltcG9ydCB7SXJvbk92ZXJsYXlNYW5hZ2VyfSBmcm9tICcuL2lyb24tb3ZlcmxheS1tYW5hZ2VyLmpzJztcbmltcG9ydCB7cHVzaFNjcm9sbExvY2ssIHJlbW92ZVNjcm9sbExvY2t9IGZyb20gJy4vaXJvbi1zY3JvbGwtbWFuYWdlci5qcyc7XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgSXJvbk92ZXJsYXlCZWhhdmlvckltcGwgPSB7XG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVHJ1ZSBpZiB0aGUgb3ZlcmxheSBpcyBjdXJyZW50bHkgZGlzcGxheWVkLlxuICAgICAqL1xuICAgIG9wZW5lZDpcbiAgICAgICAge29ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnLCB0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIG5vdGlmeTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoZSBvdmVybGF5IHdhcyBjYW5jZWxlZCB3aGVuIGl0IHdhcyBsYXN0IGNsb3NlZC5cbiAgICAgKi9cbiAgICBjYW5jZWxlZDoge1xuICAgICAgb2JzZXJ2ZXI6ICdfY2FuY2VsZWRDaGFuZ2VkJyxcbiAgICAgIHJlYWRPbmx5OiB0cnVlLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNwbGF5IGEgYmFja2Ryb3AgYmVoaW5kIHRoZSBvdmVybGF5LiBJdCB0cmFwcyB0aGUgZm9jdXNcbiAgICAgKiB3aXRoaW4gdGhlIGxpZ2h0IERPTSBvZiB0aGUgb3ZlcmxheS5cbiAgICAgKi9cbiAgICB3aXRoQmFja2Ryb3A6IHtcbiAgICAgIG9ic2VydmVyOiAnX3dpdGhCYWNrZHJvcENoYW5nZWQnLFxuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvLWZvY3VzaW5nIHRoZSBvdmVybGF5IG9yIGNoaWxkIG5vZGVzIHdpdGhcbiAgICAgKiB0aGUgYGF1dG9mb2N1c2AgYXR0cmlidXRlYCB3aGVuIHRoZSBvdmVybGF5IGlzIG9wZW5lZC5cbiAgICAgKi9cbiAgICBub0F1dG9Gb2N1czoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBjYW5jZWxpbmcgdGhlIG92ZXJsYXkgd2l0aCB0aGUgRVNDIGtleS5cbiAgICAgKi9cbiAgICBub0NhbmNlbE9uRXNjS2V5OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIGNhbmNlbGluZyB0aGUgb3ZlcmxheSBieSBjbGlja2luZyBvdXRzaWRlIGl0LlxuICAgICAqL1xuICAgIG5vQ2FuY2VsT25PdXRzaWRlQ2xpY2s6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIENvbnRhaW5zIHRoZSByZWFzb24ocykgdGhpcyBvdmVybGF5IHdhcyBsYXN0IGNsb3NlZCAoc2VlXG4gICAgICogYGlyb24tb3ZlcmxheS1jbG9zZWRgKS4gYElyb25PdmVybGF5QmVoYXZpb3JgIHByb3ZpZGVzIHRoZSBgY2FuY2VsZWRgXG4gICAgICogcmVhc29uOyBpbXBsZW1lbnRlcnMgb2YgdGhlIGJlaGF2aW9yIGNhbiBwcm92aWRlIG90aGVyIHJlYXNvbnMgaW5cbiAgICAgKiBhZGRpdGlvbiB0byBgY2FuY2VsZWRgLlxuICAgICAqL1xuICAgIGNsb3NpbmdSZWFzb246IHtcbiAgICAgIC8vIHdhcyBhIGdldHRlciBiZWZvcmUsIGJ1dCBuZWVkcyB0byBiZSBhIHByb3BlcnR5IHNvIG90aGVyXG4gICAgICAvLyBiZWhhdmlvcnMgY2FuIG92ZXJyaWRlIHRoaXMuXG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIGVuYWJsZSByZXN0b3Jpbmcgb2YgZm9jdXMgd2hlbiBvdmVybGF5IGlzIGNsb3NlZC5cbiAgICAgKi9cbiAgICByZXN0b3JlRm9jdXNPbkNsb3NlOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBhbGxvdyBjbGlja3MgdG8gZ28gdGhyb3VnaCBvdmVybGF5cy5cbiAgICAgKiBXaGVuIHRoZSB1c2VyIGNsaWNrcyBvdXRzaWRlIHRoaXMgb3ZlcmxheSwgdGhlIGNsaWNrIG1heVxuICAgICAqIGNsb3NlIHRoZSBvdmVybGF5IGJlbG93LlxuICAgICAqL1xuICAgIGFsbG93Q2xpY2tUaHJvdWdoOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdG8gdHJ1ZSB0byBrZWVwIG92ZXJsYXkgYWx3YXlzIG9uIHRvcC5cbiAgICAgKi9cbiAgICBhbHdheXNPblRvcDoge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogRGV0ZXJtaW5lcyB3aGljaCBhY3Rpb24gdG8gcGVyZm9ybSB3aGVuIHNjcm9sbCBvdXRzaWRlIGFuIG9wZW5lZCBvdmVybGF5XG4gICAgICogaGFwcGVucy4gUG9zc2libGUgdmFsdWVzOiBsb2NrIC0gYmxvY2tzIHNjcm9sbGluZyBmcm9tIGhhcHBlbmluZywgcmVmaXQgLVxuICAgICAqIGNvbXB1dGVzIHRoZSBuZXcgcG9zaXRpb24gb24gdGhlIG92ZXJsYXkgY2FuY2VsIC0gY2F1c2VzIHRoZSBvdmVybGF5IHRvXG4gICAgICogY2xvc2VcbiAgICAgKi9cbiAgICBzY3JvbGxBY3Rpb246IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogU2hvcnRjdXQgdG8gYWNjZXNzIHRvIHRoZSBvdmVybGF5IG1hbmFnZXIuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAdHlwZSB7IUlyb25PdmVybGF5TWFuYWdlckNsYXNzfVxuICAgICAqL1xuICAgIF9tYW5hZ2VyOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgICB2YWx1ZTogSXJvbk92ZXJsYXlNYW5hZ2VyLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbm9kZSBiZWluZyBmb2N1c2VkLlxuICAgICAqIEB0eXBlIHs/Tm9kZX1cbiAgICAgKi9cbiAgICBfZm9jdXNlZENoaWxkOiB7XG4gICAgICB0eXBlOiBPYmplY3QsXG4gICAgfVxuXG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7J2lyb24tcmVzaXplJzogJ19vbklyb25SZXNpemUnfSxcblxuICBvYnNlcnZlcnM6IFsnX191cGRhdGVTY3JvbGxPYnNlcnZlcnMoaXNBdHRhY2hlZCwgb3BlbmVkLCBzY3JvbGxBY3Rpb24pJ10sXG5cbiAgLyoqXG4gICAqIFRoZSBiYWNrZHJvcCBlbGVtZW50LlxuICAgKiBAcmV0dXJuIHshRWxlbWVudH1cbiAgICovXG4gIGdldCBiYWNrZHJvcEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX21hbmFnZXIuYmFja2Ryb3BFbGVtZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBub2RlIHRvIGdpdmUgZm9jdXMgdG8uXG4gICAqIEByZXR1cm4geyFOb2RlfVxuICAgKi9cbiAgZ2V0IF9mb2N1c05vZGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2ZvY3VzZWRDaGlsZCB8fCBkb20odGhpcykucXVlcnlTZWxlY3RvcignW2F1dG9mb2N1c10nKSB8fCB0aGlzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBcnJheSBvZiBub2RlcyB0aGF0IGNhbiByZWNlaXZlIGZvY3VzIChvdmVybGF5IGluY2x1ZGVkKSwgb3JkZXJlZCBieVxuICAgKiBgdGFiaW5kZXhgLiBUaGlzIGlzIHVzZWQgdG8gcmV0cmlldmUgd2hpY2ggaXMgdGhlIGZpcnN0IGFuZCBsYXN0IGZvY3VzYWJsZVxuICAgKiBub2RlcyBpbiBvcmRlciB0byB3cmFwIHRoZSBmb2N1cyBmb3Igb3ZlcmxheXMgYHdpdGgtYmFja2Ryb3BgLlxuICAgKlxuICAgKiBJZiB5b3Uga25vdyB3aGF0IGlzIHlvdXIgY29udGVudCAoc3BlY2lmaWNhbGx5IHRoZSBmaXJzdCBhbmQgbGFzdCBmb2N1c2FibGVcbiAgICogY2hpbGRyZW4pLCB5b3UgY2FuIG92ZXJyaWRlIHRoaXMgbWV0aG9kIHRvIHJldHVybiBvbmx5IGBbZmlyc3RGb2N1c2FibGUsXG4gICAqIGxhc3RGb2N1c2FibGVdO2BcbiAgICogQHJldHVybiB7IUFycmF5PCFOb2RlPn1cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0IF9mb2N1c2FibGVOb2RlcygpIHtcbiAgICByZXR1cm4gSXJvbkZvY3VzYWJsZXNIZWxwZXIuZ2V0VGFiYmFibGVOb2Rlcyh0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBVc2VkIHRvIHNraXAgY2FsbHMgdG8gbm90aWZ5UmVzaXplIGFuZCByZWZpdCB3aGlsZSB0aGUgb3ZlcmxheSBpc1xuICAgIC8vIGFuaW1hdGluZy5cbiAgICB0aGlzLl9faXNBbmltYXRpbmcgPSBmYWxzZTtcbiAgICAvLyB3aXRoLWJhY2tkcm9wIG5lZWRzIHRhYmluZGV4IHRvIGJlIHNldCBpbiBvcmRlciB0byB0cmFwIHRoZSBmb2N1cy5cbiAgICAvLyBJZiBpdCBpcyBub3Qgc2V0LCBJcm9uT3ZlcmxheUJlaGF2aW9yIHdpbGwgc2V0IGl0LCBhbmQgcmVtb3ZlIGl0IGlmXG4gICAgLy8gd2l0aC1iYWNrZHJvcCA9IGZhbHNlLlxuICAgIHRoaXMuX19zaG91bGRSZW1vdmVUYWJJbmRleCA9IGZhbHNlO1xuICAgIC8vIFVzZWQgZm9yIHdyYXBwaW5nIHRoZSBmb2N1cyBvbiBUQUIgLyBTaGlmdCtUQUIuXG4gICAgdGhpcy5fX2ZpcnN0Rm9jdXNhYmxlTm9kZSA9IHRoaXMuX19sYXN0Rm9jdXNhYmxlTm9kZSA9IG51bGw7XG4gICAgLy8gVXNlZCBieSB0byBrZWVwIHRyYWNrIG9mIHRoZSBSQUYgY2FsbGJhY2tzLlxuICAgIHRoaXMuX19yYWZzID0ge307XG4gICAgLy8gRm9jdXNlZCBub2RlIGJlZm9yZSBvdmVybGF5IGdldHMgb3BlbmVkLiBDYW4gYmUgcmVzdG9yZWQgb24gY2xvc2UuXG4gICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUgPSBudWxsO1xuICAgIC8vIFNjcm9sbCBpbmZvIHRvIGJlIHJlc3RvcmVkLlxuICAgIHRoaXMuX19zY3JvbGxUb3AgPSB0aGlzLl9fc2Nyb2xsTGVmdCA9IG51bGw7XG4gICAgdGhpcy5fX29uQ2FwdHVyZVNjcm9sbCA9IHRoaXMuX19vbkNhcHR1cmVTY3JvbGwuYmluZCh0aGlzKTtcbiAgICAvLyBSb290IG5vZGVzIGhvc3RpbmcgdGhlIG92ZXJsYXksIHVzZWQgdG8gbGlzdGVuIGZvciBzY3JvbGwgZXZlbnRzIG9uIHRoZW0uXG4gICAgdGhpcy5fX3Jvb3ROb2RlcyA9IG51bGw7XG4gICAgdGhpcy5fZW5zdXJlU2V0dXAoKTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gQ2FsbCBfb3BlbmVkQ2hhbmdlZCBoZXJlIHNvIHRoYXQgcG9zaXRpb24gY2FuIGJlIGNvbXB1dGVkIGNvcnJlY3RseS5cbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX29wZW5lZENoYW5nZWQodGhpcy5vcGVuZWQpO1xuICAgIH1cbiAgICB0aGlzLl9vYnNlcnZlciA9IGRvbSh0aGlzKS5vYnNlcnZlTm9kZXModGhpcy5fb25Ob2Rlc0NoYW5nZSk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGRvbSh0aGlzKS51bm9ic2VydmVOb2Rlcyh0aGlzLl9vYnNlcnZlcik7XG4gICAgdGhpcy5fb2JzZXJ2ZXIgPSBudWxsO1xuICAgIGZvciAodmFyIGNiIGluIHRoaXMuX19yYWZzKSB7XG4gICAgICBpZiAodGhpcy5fX3JhZnNbY2JdICE9PSBudWxsKSB7XG4gICAgICAgIGNhbmNlbEFuaW1hdGlvbkZyYW1lKHRoaXMuX19yYWZzW2NiXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX19yYWZzID0ge307XG4gICAgdGhpcy5fbWFuYWdlci5yZW1vdmVPdmVybGF5KHRoaXMpO1xuXG4gICAgLy8gV2UgZ290IGRldGFjaGVkIHdoaWxlIGFuaW1hdGluZywgZW5zdXJlIHdlIHNob3cvaGlkZSB0aGUgb3ZlcmxheVxuICAgIC8vIGFuZCBmaXJlIGlyb24tb3ZlcmxheS1vcGVuZWQvY2xvc2VkIGV2ZW50IVxuICAgIGlmICh0aGlzLl9faXNBbmltYXRpbmcpIHtcbiAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICB0aGlzLl9maW5pc2hSZW5kZXJPcGVuZWQoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFJlc3RvcmUgdGhlIGZvY3VzIGlmIG5lY2Vzc2FyeS5cbiAgICAgICAgdGhpcy5fYXBwbHlGb2N1cygpO1xuICAgICAgICB0aGlzLl9maW5pc2hSZW5kZXJDbG9zZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRvZ2dsZSB0aGUgb3BlbmVkIHN0YXRlIG9mIHRoZSBvdmVybGF5LlxuICAgKi9cbiAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZXRDYW5jZWxlZChmYWxzZSk7XG4gICAgdGhpcy5vcGVuZWQgPSAhdGhpcy5vcGVuZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE9wZW4gdGhlIG92ZXJsYXkuXG4gICAqL1xuICBvcGVuOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZXRDYW5jZWxlZChmYWxzZSk7XG4gICAgdGhpcy5vcGVuZWQgPSB0cnVlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDbG9zZSB0aGUgb3ZlcmxheS5cbiAgICovXG4gIGNsb3NlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9zZXRDYW5jZWxlZChmYWxzZSk7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2FuY2VscyB0aGUgb3ZlcmxheS5cbiAgICogQHBhcmFtIHtFdmVudD19IGV2ZW50IFRoZSBvcmlnaW5hbCBldmVudFxuICAgKi9cbiAgY2FuY2VsOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBjYW5jZWxFdmVudCA9XG4gICAgICAgIHRoaXMuZmlyZSgnaXJvbi1vdmVybGF5LWNhbmNlbGVkJywgZXZlbnQsIHtjYW5jZWxhYmxlOiB0cnVlfSk7XG4gICAgaWYgKGNhbmNlbEV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9zZXRDYW5jZWxlZCh0cnVlKTtcbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbnZhbGlkYXRlcyB0aGUgY2FjaGVkIHRhYmJhYmxlIG5vZGVzLiBUbyBiZSBjYWxsZWQgd2hlbiBhbnkgb2YgdGhlXG4gICAqIGZvY3VzYWJsZSBjb250ZW50IGNoYW5nZXMgKGUuZy4gYSBidXR0b24gaXMgZGlzYWJsZWQpLlxuICAgKi9cbiAgaW52YWxpZGF0ZVRhYmJhYmxlczogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fX2ZpcnN0Rm9jdXNhYmxlTm9kZSA9IHRoaXMuX19sYXN0Rm9jdXNhYmxlTm9kZSA9IG51bGw7XG4gIH0sXG5cbiAgX2Vuc3VyZVNldHVwOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheVNldHVwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX292ZXJsYXlTZXR1cCA9IHRydWU7XG4gICAgdGhpcy5zdHlsZS5vdXRsaW5lID0gJ25vbmUnO1xuICAgIHRoaXMuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgfSxcblxuICAvKipcbiAgICogQ2FsbGVkIHdoZW4gYG9wZW5lZGAgY2hhbmdlcy5cbiAgICogQHBhcmFtIHtib29sZWFuPX0gb3BlbmVkXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vcGVuZWRDaGFuZ2VkOiBmdW5jdGlvbihvcGVuZWQpIHtcbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1oaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtaGlkZGVuJywgJ3RydWUnKTtcbiAgICB9XG5cbiAgICAvLyBEZWZlciBhbnkgYW5pbWF0aW9uLXJlbGF0ZWQgY29kZSBvbiBhdHRhY2hlZFxuICAgIC8vIChfb3BlbmVkQ2hhbmdlZCBnZXRzIGNhbGxlZCBhZ2FpbiBvbiBhdHRhY2hlZCkuXG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9faXNBbmltYXRpbmcgPSB0cnVlO1xuXG4gICAgLy8gRGVyYWYgZm9yIG5vbi1ibG9ja2luZyByZW5kZXJpbmcuXG4gICAgdGhpcy5fX2RlcmFmKCdfX29wZW5lZENoYW5nZWQnLCB0aGlzLl9fb3BlbmVkQ2hhbmdlZCk7XG4gIH0sXG5cbiAgX2NhbmNlbGVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uID0gdGhpcy5jbG9zaW5nUmVhc29uIHx8IHt9O1xuICAgIHRoaXMuY2xvc2luZ1JlYXNvbi5jYW5jZWxlZCA9IHRoaXMuY2FuY2VsZWQ7XG4gIH0sXG5cbiAgX3dpdGhCYWNrZHJvcENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIElmIHRhYmluZGV4IGlzIGFscmVhZHkgc2V0LCBubyBuZWVkIHRvIG92ZXJyaWRlIGl0LlxuICAgIGlmICh0aGlzLndpdGhCYWNrZHJvcCAmJiAhdGhpcy5oYXNBdHRyaWJ1dGUoJ3RhYmluZGV4JykpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsICctMScpO1xuICAgICAgdGhpcy5fX3Nob3VsZFJlbW92ZVRhYkluZGV4ID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX19zaG91bGRSZW1vdmVUYWJJbmRleCkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3RhYmluZGV4Jyk7XG4gICAgICB0aGlzLl9fc2hvdWxkUmVtb3ZlVGFiSW5kZXggPSBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3BlbmVkICYmIHRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgdGhpcy5fbWFuYWdlci50cmFja0JhY2tkcm9wKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiB0YXNrcyB3aGljaCBtdXN0IG9jY3VyIGJlZm9yZSBvcGVuaW5nOyBlLmcuIG1ha2luZyB0aGUgZWxlbWVudCB2aXNpYmxlLlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfcHJlcGFyZVJlbmRlck9wZW5lZDogZnVuY3Rpb24oKSB7XG4gICAgLy8gU3RvcmUgZm9jdXNlZCBub2RlLlxuICAgIHRoaXMuX19yZXN0b3JlRm9jdXNOb2RlID0gdGhpcy5fbWFuYWdlci5kZWVwQWN0aXZlRWxlbWVudDtcblxuICAgIC8vIE5lZWRlZCB0byBjYWxjdWxhdGUgdGhlIHNpemUgb2YgdGhlIG92ZXJsYXkgc28gdGhhdCB0cmFuc2l0aW9ucyBvbiBpdHNcbiAgICAvLyBzaXplIHdpbGwgaGF2ZSB0aGUgY29ycmVjdCBzdGFydGluZyBwb2ludHMuXG4gICAgdGhpcy5fcHJlcGFyZVBvc2l0aW9uaW5nKCk7XG4gICAgdGhpcy5yZWZpdCgpO1xuICAgIHRoaXMuX2ZpbmlzaFBvc2l0aW9uaW5nKCk7XG5cbiAgICAvLyBTYWZhcmkgd2lsbCBhcHBseSB0aGUgZm9jdXMgdG8gdGhlIGF1dG9mb2N1cyBlbGVtZW50IHdoZW4gZGlzcGxheWVkXG4gICAgLy8gZm9yIHRoZSBmaXJzdCB0aW1lLCBzbyB3ZSBtYWtlIHN1cmUgdG8gcmV0dXJuIHRoZSBmb2N1cyB3aGVyZSBpdCB3YXMuXG4gICAgaWYgKHRoaXMubm9BdXRvRm9jdXMgJiYgZG9jdW1lbnQuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5fZm9jdXNOb2RlKSB7XG4gICAgICB0aGlzLl9mb2N1c05vZGUuYmx1cigpO1xuICAgICAgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUuZm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRhc2tzIHdoaWNoIGNhdXNlIHRoZSBvdmVybGF5IHRvIGFjdHVhbGx5IG9wZW47IHR5cGljYWxseSBwbGF5IGFuXG4gICAqIGFuaW1hdGlvbi5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX3JlbmRlck9wZW5lZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZmluaXNoUmVuZGVyT3BlbmVkKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRhc2tzIHdoaWNoIGNhdXNlIHRoZSBvdmVybGF5IHRvIGFjdHVhbGx5IGNsb3NlOyB0eXBpY2FsbHkgcGxheSBhblxuICAgKiBhbmltYXRpb24uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9yZW5kZXJDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2ZpbmlzaFJlbmRlckNsb3NlZCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUYXNrcyB0byBiZSBwZXJmb3JtZWQgYXQgdGhlIGVuZCBvZiBvcGVuIGFjdGlvbi4gV2lsbCBmaXJlXG4gICAqIGBpcm9uLW92ZXJsYXktb3BlbmVkYC5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX2ZpbmlzaFJlbmRlck9wZW5lZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICB0aGlzLl9faXNBbmltYXRpbmcgPSBmYWxzZTtcblxuICAgIHRoaXMuZmlyZSgnaXJvbi1vdmVybGF5LW9wZW5lZCcpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUYXNrcyB0byBiZSBwZXJmb3JtZWQgYXQgdGhlIGVuZCBvZiBjbG9zZSBhY3Rpb24uIFdpbGwgZmlyZVxuICAgKiBgaXJvbi1vdmVybGF5LWNsb3NlZGAuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9maW5pc2hSZW5kZXJDbG9zZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIEhpZGUgdGhlIG92ZXJsYXkuXG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vIFJlc2V0IHotaW5kZXggb25seSBhdCB0aGUgZW5kIG9mIHRoZSBhbmltYXRpb24uXG4gICAgdGhpcy5zdHlsZS56SW5kZXggPSAnJztcbiAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIHRoaXMuX19pc0FuaW1hdGluZyA9IGZhbHNlO1xuICAgIHRoaXMuZmlyZSgnaXJvbi1vdmVybGF5LWNsb3NlZCcsIHRoaXMuY2xvc2luZ1JlYXNvbik7XG4gIH0sXG5cbiAgX3ByZXBhcmVQb3NpdGlvbmluZzogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS50cmFuc2l0aW9uID0gdGhpcy5zdHlsZS53ZWJraXRUcmFuc2l0aW9uID0gJ25vbmUnO1xuICAgIHRoaXMuc3R5bGUudHJhbnNmb3JtID0gdGhpcy5zdHlsZS53ZWJraXRUcmFuc2Zvcm0gPSAnbm9uZSc7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gIH0sXG5cbiAgX2ZpbmlzaFBvc2l0aW9uaW5nOiBmdW5jdGlvbigpIHtcbiAgICAvLyBGaXJzdCwgbWFrZSBpdCBpbnZpc2libGUgJiByZWFjdGl2YXRlIGFuaW1hdGlvbnMuXG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIC8vIEZvcmNlIHJlZmxvdyBiZWZvcmUgcmUtZW5hYmxpbmcgYW5pbWF0aW9ucyBzbyB0aGF0IHRoZXkgZG9uJ3Qgc3RhcnQuXG4gICAgLy8gU2V0IHNjcm9sbFRvcCB0byBpdHNlbGYgc28gdGhhdCBDbG9zdXJlIENvbXBpbGVyIGRvZXNuJ3QgcmVtb3ZlIHRoaXMuXG4gICAgdGhpcy5zY3JvbGxUb3AgPSB0aGlzLnNjcm9sbFRvcDtcbiAgICB0aGlzLnN0eWxlLnRyYW5zaXRpb24gPSB0aGlzLnN0eWxlLndlYmtpdFRyYW5zaXRpb24gPSAnJztcbiAgICB0aGlzLnN0eWxlLnRyYW5zZm9ybSA9IHRoaXMuc3R5bGUud2Via2l0VHJhbnNmb3JtID0gJyc7XG4gICAgLy8gTm93IHRoYXQgYW5pbWF0aW9ucyBhcmUgZW5hYmxlZCwgbWFrZSBpdCB2aXNpYmxlIGFnYWluXG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJyc7XG4gICAgLy8gRm9yY2UgcmVmbG93LCBzbyB0aGF0IGZvbGxvd2luZyBhbmltYXRpb25zIGFyZSBwcm9wZXJseSBzdGFydGVkLlxuICAgIC8vIFNldCBzY3JvbGxUb3AgdG8gaXRzZWxmIHNvIHRoYXQgQ2xvc3VyZSBDb21waWxlciBkb2Vzbid0IHJlbW92ZSB0aGlzLlxuICAgIHRoaXMuc2Nyb2xsVG9wID0gdGhpcy5zY3JvbGxUb3A7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFwcGxpZXMgZm9jdXMgYWNjb3JkaW5nIHRvIHRoZSBvcGVuZWQgc3RhdGUuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9hcHBseUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIGlmICghdGhpcy5ub0F1dG9Gb2N1cykge1xuICAgICAgICB0aGlzLl9mb2N1c05vZGUuZm9jdXMoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVzdG9yZSBmb2N1cy5cbiAgICAgIGlmICh0aGlzLnJlc3RvcmVGb2N1c09uQ2xvc2UgJiYgdGhpcy5fX3Jlc3RvcmVGb2N1c05vZGUpIHtcbiAgICAgICAgLy8gSWYgdGhlIGFjdGl2ZUVsZW1lbnQgaXMgYDxib2R5PmAgb3IgaW5zaWRlIHRoZSBvdmVybGF5LFxuICAgICAgICAvLyB3ZSBhcmUgYWxsb3dlZCB0byByZXN0b3JlIHRoZSBmb2N1cy4gSW4gYWxsIHRoZSBvdGhlclxuICAgICAgICAvLyBjYXNlcyBmb2N1cyBtaWdodCBoYXZlIGJlZW4gbW92ZWQgZWxzZXdoZXJlIGJ5IGFub3RoZXJcbiAgICAgICAgLy8gY29tcG9uZW50IG9yIGJ5IGFuIHVzZXIgaW50ZXJhY3Rpb24gKGUuZy4gY2xpY2sgb24gYVxuICAgICAgICAvLyBidXR0b24gb3V0c2lkZSB0aGUgb3ZlcmxheSkuXG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gdGhpcy5fbWFuYWdlci5kZWVwQWN0aXZlRWxlbWVudDtcbiAgICAgICAgaWYgKGFjdGl2ZUVsZW1lbnQgPT09IGRvY3VtZW50LmJvZHkgfHxcbiAgICAgICAgICAgIGRvbSh0aGlzKS5kZWVwQ29udGFpbnMoYWN0aXZlRWxlbWVudCkpIHtcbiAgICAgICAgICB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZS5mb2N1cygpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLl9fcmVzdG9yZUZvY3VzTm9kZSA9IG51bGw7XG4gICAgICB0aGlzLl9mb2N1c05vZGUuYmx1cigpO1xuICAgICAgdGhpcy5fZm9jdXNlZENoaWxkID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhbmNlbHMgKGNsb3NlcykgdGhlIG92ZXJsYXkuIENhbGwgd2hlbiBjbGljayBoYXBwZW5zIG91dHNpZGUgdGhlIG92ZXJsYXkuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb25DYXB0dXJlQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2spIHtcbiAgICAgIHRoaXMuY2FuY2VsKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEtlZXBzIHRyYWNrIG9mIHRoZSBmb2N1c2VkIGNoaWxkLiBJZiB3aXRoQmFja2Ryb3AsIHRyYXBzIGZvY3VzIHdpdGhpblxuICAgKiBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uQ2FwdHVyZUZvY3VzOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy53aXRoQmFja2Ryb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIHBhdGggPSBkb20oZXZlbnQpLnBhdGg7XG4gICAgaWYgKHBhdGguaW5kZXhPZih0aGlzKSA9PT0gLTEpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5fYXBwbHlGb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9mb2N1c2VkQ2hpbGQgPSBwYXRoWzBdO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogSGFuZGxlcyB0aGUgRVNDIGtleSBldmVudCBhbmQgY2FuY2VscyAoY2xvc2VzKSB0aGUgb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbkNhcHR1cmVFc2M6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKCF0aGlzLm5vQ2FuY2VsT25Fc2NLZXkpIHtcbiAgICAgIHRoaXMuY2FuY2VsKGV2ZW50KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgVEFCIGtleSBldmVudHMgdG8gdHJhY2sgZm9jdXMgY2hhbmdlcy5cbiAgICogV2lsbCB3cmFwIGZvY3VzIGZvciBvdmVybGF5cyB3aXRoQmFja2Ryb3AuXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBldmVudFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBfb25DYXB0dXJlVGFiOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICghdGhpcy53aXRoQmFja2Ryb3ApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX2Vuc3VyZUZpcnN0TGFzdEZvY3VzYWJsZXMoKTtcbiAgICAvLyBUQUIgd3JhcHMgZnJvbSBsYXN0IHRvIGZpcnN0IGZvY3VzYWJsZS5cbiAgICAvLyBTaGlmdCArIFRBQiB3cmFwcyBmcm9tIGZpcnN0IHRvIGxhc3QgZm9jdXNhYmxlLlxuICAgIHZhciBzaGlmdCA9IGV2ZW50LnNoaWZ0S2V5O1xuICAgIHZhciBub2RlVG9DaGVjayA9XG4gICAgICAgIHNoaWZ0ID8gdGhpcy5fX2ZpcnN0Rm9jdXNhYmxlTm9kZSA6IHRoaXMuX19sYXN0Rm9jdXNhYmxlTm9kZTtcbiAgICB2YXIgbm9kZVRvU2V0ID1cbiAgICAgICAgc2hpZnQgPyB0aGlzLl9fbGFzdEZvY3VzYWJsZU5vZGUgOiB0aGlzLl9fZmlyc3RGb2N1c2FibGVOb2RlO1xuICAgIHZhciBzaG91bGRXcmFwID0gZmFsc2U7XG4gICAgaWYgKG5vZGVUb0NoZWNrID09PSBub2RlVG9TZXQpIHtcbiAgICAgIC8vIElmIG5vZGVUb0NoZWNrIGlzIHRoZSBzYW1lIGFzIG5vZGVUb1NldCwgaXQgbWVhbnMgd2UgaGF2ZSBhbiBvdmVybGF5XG4gICAgICAvLyB3aXRoIDAgb3IgMSBmb2N1c2FibGVzOyBpbiBlaXRoZXIgY2FzZSB3ZSBzdGlsbCBuZWVkIHRvIHRyYXAgdGhlXG4gICAgICAvLyBmb2N1cyB3aXRoaW4gdGhlIG92ZXJsYXkuXG4gICAgICBzaG91bGRXcmFwID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSW4gZG9tPXNoYWRvdywgdGhlIG1hbmFnZXIgd2lsbCByZWNlaXZlIGZvY3VzIGNoYW5nZXMgb24gdGhlIG1haW5cbiAgICAgIC8vIHJvb3QgYnV0IG5vdCB0aGUgb25lcyB3aXRoaW4gb3RoZXIgc2hhZG93IHJvb3RzLCBzbyB3ZSBjYW4ndCByZWx5IG9uXG4gICAgICAvLyBfZm9jdXNlZENoaWxkLCBidXQgd2Ugc2hvdWxkIGNoZWNrIHRoZSBkZWVwZXN0IGFjdGl2ZSBlbGVtZW50LlxuICAgICAgdmFyIGZvY3VzZWROb2RlID0gdGhpcy5fbWFuYWdlci5kZWVwQWN0aXZlRWxlbWVudDtcbiAgICAgIC8vIElmIHRoZSBhY3RpdmUgZWxlbWVudCBpcyBub3QgdGhlIG5vZGVUb0NoZWNrIGJ1dCB0aGUgb3ZlcmxheSBpdHNlbGYsXG4gICAgICAvLyBpdCBtZWFucyB0aGUgZm9jdXMgaXMgYWJvdXQgdG8gZ28gb3V0c2lkZSB0aGUgb3ZlcmxheSwgaGVuY2Ugd2VcbiAgICAgIC8vIHNob3VsZCBwcmV2ZW50IHRoYXQgKGUuZy4gdXNlciBvcGVucyB0aGUgb3ZlcmxheSBhbmQgaGl0IFNoaWZ0K1RBQikuXG4gICAgICBzaG91bGRXcmFwID0gKGZvY3VzZWROb2RlID09PSBub2RlVG9DaGVjayB8fCBmb2N1c2VkTm9kZSA9PT0gdGhpcyk7XG4gICAgfVxuXG4gICAgaWYgKHNob3VsZFdyYXApIHtcbiAgICAgIC8vIFdoZW4gdGhlIG92ZXJsYXkgY29udGFpbnMgdGhlIGxhc3QgZm9jdXNhYmxlIGVsZW1lbnQgb2YgdGhlIGRvY3VtZW50XG4gICAgICAvLyBhbmQgaXQncyBhbHJlYWR5IGZvY3VzZWQsIHByZXNzaW5nIFRBQiB3b3VsZCBtb3ZlIHRoZSBmb2N1cyBvdXRzaWRlXG4gICAgICAvLyB0aGUgZG9jdW1lbnQgKGUuZy4gdG8gdGhlIGJyb3dzZXIgc2VhcmNoIGJhcikuIFNpbWlsYXJseSwgd2hlbiB0aGVcbiAgICAgIC8vIG92ZXJsYXkgY29udGFpbnMgdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IG9mIHRoZSBkb2N1bWVudCBhbmQgaXQnc1xuICAgICAgLy8gYWxyZWFkeSBmb2N1c2VkLCBwcmVzc2luZyBTaGlmdCtUQUIgd291bGQgbW92ZSB0aGUgZm9jdXMgb3V0c2lkZSB0aGVcbiAgICAgIC8vIGRvY3VtZW50IChlLmcuIHRvIHRoZSBicm93c2VyIHNlYXJjaCBiYXIpLlxuICAgICAgLy8gSW4gYm90aCBjYXNlcywgd2Ugd291bGQgbm90IHJlY2VpdmUgYSBmb2N1cyBldmVudCwgYnV0IG9ubHkgYSBibHVyLlxuICAgICAgLy8gSW4gb3JkZXIgdG8gYWNoaWV2ZSBmb2N1cyB3cmFwcGluZywgd2UgcHJldmVudCB0aGlzIFRBQiBldmVudCBhbmRcbiAgICAgIC8vIGZvcmNlIHRoZSBmb2N1cy4gVGhpcyB3aWxsIGFsc28gcHJldmVudCB0aGUgZm9jdXMgdG8gdGVtcG9yYXJpbHkgbW92ZVxuICAgICAgLy8gb3V0c2lkZSB0aGUgb3ZlcmxheSwgd2hpY2ggbWlnaHQgY2F1c2Ugc2Nyb2xsaW5nLlxuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRDaGlsZCA9IG5vZGVUb1NldDtcbiAgICAgIHRoaXMuX2FwcGx5Rm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlZml0cyBpZiB0aGUgb3ZlcmxheSBpcyBvcGVuZWQgYW5kIG5vdCBhbmltYXRpbmcuXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIF9vbklyb25SZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhdGhpcy5fX2lzQW5pbWF0aW5nKSB7XG4gICAgICB0aGlzLl9fZGVyYWYoJ3JlZml0JywgdGhpcy5yZWZpdCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBXaWxsIGNhbGwgbm90aWZ5UmVzaXplIGlmIG92ZXJsYXkgaXMgb3BlbmVkLlxuICAgKiBDYW4gYmUgb3ZlcnJpZGRlbiBpbiBvcmRlciB0byBhdm9pZCBtdWx0aXBsZSBvYnNlcnZlcnMgb24gdGhlIHNhbWUgbm9kZS5cbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgX29uTm9kZXNDaGFuZ2U6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAhdGhpcy5fX2lzQW5pbWF0aW5nKSB7XG4gICAgICAvLyBJdCBtaWdodCBoYXZlIGFkZGVkIGZvY3VzYWJsZSBub2Rlcywgc28gaW52YWxpZGF0ZSBjYWNoZWQgdmFsdWVzLlxuICAgICAgdGhpcy5pbnZhbGlkYXRlVGFiYmFibGVzKCk7XG4gICAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgcmVmZXJlbmNlcyB0byB0aGUgZmlyc3QgYW5kIGxhc3QgZm9jdXNhYmxlIG5vZGVzLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19lbnN1cmVGaXJzdExhc3RGb2N1c2FibGVzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZm9jdXNhYmxlTm9kZXMgPSB0aGlzLl9mb2N1c2FibGVOb2RlcztcbiAgICB0aGlzLl9fZmlyc3RGb2N1c2FibGVOb2RlID0gZm9jdXNhYmxlTm9kZXNbMF07XG4gICAgdGhpcy5fX2xhc3RGb2N1c2FibGVOb2RlID0gZm9jdXNhYmxlTm9kZXNbZm9jdXNhYmxlTm9kZXMubGVuZ3RoIC0gMV07XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRhc2tzIGV4ZWN1dGVkIHdoZW4gb3BlbmVkIGNoYW5nZXM6IHByZXBhcmUgZm9yIHRoZSBvcGVuaW5nLCBtb3ZlIHRoZVxuICAgKiBmb2N1cywgdXBkYXRlIHRoZSBtYW5hZ2VyLCByZW5kZXIgb3BlbmVkL2Nsb3NlZC5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fb3BlbmVkQ2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAvLyBNYWtlIG92ZXJsYXkgdmlzaWJsZSwgdGhlbiBhZGQgaXQgdG8gdGhlIG1hbmFnZXIuXG4gICAgICB0aGlzLl9wcmVwYXJlUmVuZGVyT3BlbmVkKCk7XG4gICAgICB0aGlzLl9tYW5hZ2VyLmFkZE92ZXJsYXkodGhpcyk7XG4gICAgICAvLyBNb3ZlIHRoZSBmb2N1cyB0byB0aGUgY2hpbGQgbm9kZSB3aXRoIFthdXRvZm9jdXNdLlxuICAgICAgdGhpcy5fYXBwbHlGb2N1cygpO1xuXG4gICAgICB0aGlzLl9yZW5kZXJPcGVuZWQoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUmVtb3ZlIG92ZXJsYXksIHRoZW4gcmVzdG9yZSB0aGUgZm9jdXMgYmVmb3JlIGFjdHVhbGx5IGNsb3NpbmcuXG4gICAgICB0aGlzLl9tYW5hZ2VyLnJlbW92ZU92ZXJsYXkodGhpcyk7XG4gICAgICB0aGlzLl9hcHBseUZvY3VzKCk7XG5cbiAgICAgIHRoaXMuX3JlbmRlckNsb3NlZCgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRGVib3VuY2VzIHRoZSBleGVjdXRpb24gb2YgYSBjYWxsYmFjayB0byB0aGUgbmV4dCBhbmltYXRpb24gZnJhbWUuXG4gICAqIEBwYXJhbSB7IXN0cmluZ30gam9ibmFtZVxuICAgKiBAcGFyYW0geyFGdW5jdGlvbn0gY2FsbGJhY2sgQWx3YXlzIGJvdW5kIHRvIGB0aGlzYFxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19kZXJhZjogZnVuY3Rpb24oam9ibmFtZSwgY2FsbGJhY2spIHtcbiAgICB2YXIgcmFmcyA9IHRoaXMuX19yYWZzO1xuICAgIGlmIChyYWZzW2pvYm5hbWVdICE9PSBudWxsKSB7XG4gICAgICBjYW5jZWxBbmltYXRpb25GcmFtZShyYWZzW2pvYm5hbWVdKTtcbiAgICB9XG4gICAgcmFmc1tqb2JuYW1lXSA9IHJlcXVlc3RBbmltYXRpb25GcmFtZShmdW5jdGlvbiBuZXh0QW5pbWF0aW9uRnJhbWUoKSB7XG4gICAgICByYWZzW2pvYm5hbWVdID0gbnVsbDtcbiAgICAgIGNhbGxiYWNrLmNhbGwodGhpcyk7XG4gICAgfS5iaW5kKHRoaXMpKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSBpc0F0dGFjaGVkXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gb3BlbmVkXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc2Nyb2xsQWN0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX3VwZGF0ZVNjcm9sbE9ic2VydmVyczogZnVuY3Rpb24oaXNBdHRhY2hlZCwgb3BlbmVkLCBzY3JvbGxBY3Rpb24pIHtcbiAgICBpZiAoIWlzQXR0YWNoZWQgfHwgIW9wZW5lZCB8fCAhdGhpcy5fX2lzVmFsaWRTY3JvbGxBY3Rpb24oc2Nyb2xsQWN0aW9uKSkge1xuICAgICAgcmVtb3ZlU2Nyb2xsTG9jayh0aGlzKTtcbiAgICAgIHRoaXMuX19yZW1vdmVTY3JvbGxMaXN0ZW5lcnMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHNjcm9sbEFjdGlvbiA9PT0gJ2xvY2snKSB7XG4gICAgICAgIHRoaXMuX19zYXZlU2Nyb2xsUG9zaXRpb24oKTtcbiAgICAgICAgcHVzaFNjcm9sbExvY2sodGhpcyk7XG4gICAgICB9XG4gICAgICB0aGlzLl9fYWRkU2Nyb2xsTGlzdGVuZXJzKCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19hZGRTY3JvbGxMaXN0ZW5lcnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5fX3Jvb3ROb2Rlcykge1xuICAgICAgdGhpcy5fX3Jvb3ROb2RlcyA9IFtdO1xuICAgICAgLy8gTGlzdGVuIGZvciBzY3JvbGwgZXZlbnRzIGluIGFsbCBzaGFkb3dSb290cyBob3N0aW5nIHRoaXMgb3ZlcmxheSBvbmx5XG4gICAgICAvLyB3aGVuIGluIG5hdGl2ZSBTaGFkb3dET00uXG4gICAgICBpZiAodXNlU2hhZG93KSB7XG4gICAgICAgIHZhciBub2RlID0gdGhpcztcbiAgICAgICAgd2hpbGUgKG5vZGUpIHtcbiAgICAgICAgICBpZiAobm9kZS5ub2RlVHlwZSA9PT0gTm9kZS5ET0NVTUVOVF9GUkFHTUVOVF9OT0RFICYmIG5vZGUuaG9zdCkge1xuICAgICAgICAgICAgdGhpcy5fX3Jvb3ROb2Rlcy5wdXNoKG5vZGUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBub2RlID0gbm9kZS5ob3N0IHx8IG5vZGUuYXNzaWduZWRTbG90IHx8IG5vZGUucGFyZW50Tm9kZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5fX3Jvb3ROb2Rlcy5wdXNoKGRvY3VtZW50KTtcbiAgICB9XG4gICAgdGhpcy5fX3Jvb3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9fb25DYXB0dXJlU2Nyb2xsLCB7XG4gICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICB9KTtcbiAgICB9LCB0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fcmVtb3ZlU2Nyb2xsTGlzdGVuZXJzOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fX3Jvb3ROb2Rlcykge1xuICAgICAgdGhpcy5fX3Jvb3ROb2Rlcy5mb3JFYWNoKGZ1bmN0aW9uKGVsKSB7XG4gICAgICAgIGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX19vbkNhcHR1cmVTY3JvbGwsIHtcbiAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgIHBhc3NpdmU6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfSwgdGhpcyk7XG4gICAgfVxuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICB0aGlzLl9fcm9vdE5vZGVzID0gbnVsbDtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nPX0gc2Nyb2xsQWN0aW9uXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX2lzVmFsaWRTY3JvbGxBY3Rpb246IGZ1bmN0aW9uKHNjcm9sbEFjdGlvbikge1xuICAgIHJldHVybiBzY3JvbGxBY3Rpb24gPT09ICdsb2NrJyB8fCBzY3JvbGxBY3Rpb24gPT09ICdyZWZpdCcgfHxcbiAgICAgICAgc2Nyb2xsQWN0aW9uID09PSAnY2FuY2VsJztcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9fb25DYXB0dXJlU2Nyb2xsOiBmdW5jdGlvbihldmVudCkge1xuICAgIGlmICh0aGlzLl9faXNBbmltYXRpbmcpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gQ2hlY2sgaWYgc2Nyb2xsIG91dHNpZGUgdGhlIG92ZXJsYXkuXG4gICAgaWYgKGRvbShldmVudCkucGF0aC5pbmRleE9mKHRoaXMpID49IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgc3dpdGNoICh0aGlzLnNjcm9sbEFjdGlvbikge1xuICAgICAgY2FzZSAnbG9jayc6XG4gICAgICAgIC8vIE5PVEU6IHNjcm9sbGluZyBtaWdodCBoYXBwZW4gaWYgYSBzY3JvbGwgZXZlbnQgaXMgbm90IGNhbmNlbGxhYmxlLCBvclxuICAgICAgICAvLyBpZiB1c2VyIHByZXNzZWQga2V5cyB0aGF0IGNhdXNlIHNjcm9sbGluZyAodGhleSdyZSBub3QgcHJldmVudGVkIGluXG4gICAgICAgIC8vIG9yZGVyIG5vdCB0byBicmVhayBhMTF5IGZlYXR1cmVzIGxpa2UgbmF2aWdhdGUgd2l0aCBhcnJvdyBrZXlzKS5cbiAgICAgICAgdGhpcy5fX3Jlc3RvcmVTY3JvbGxQb3NpdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ3JlZml0JzpcbiAgICAgICAgdGhpcy5fX2RlcmFmKCdyZWZpdCcsIHRoaXMucmVmaXQpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ2NhbmNlbCc6XG4gICAgICAgIHRoaXMuY2FuY2VsKGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBNZW1vaXplcyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBvdXRzaWRlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19zYXZlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmIChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgICB0aGlzLl9fc2Nyb2xsVG9wID0gZG9jdW1lbnQuc2Nyb2xsaW5nRWxlbWVudC5zY3JvbGxUb3A7XG4gICAgICB0aGlzLl9fc2Nyb2xsTGVmdCA9IGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnQuc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2luY2Ugd2UgZG9uJ3Qga25vdyBpZiBpcyB0aGUgYm9keSBvciBodG1sLCBnZXQgbWF4LlxuICAgICAgdGhpcy5fX3Njcm9sbFRvcCA9XG4gICAgICAgICAgTWF0aC5tYXgoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcCwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApO1xuICAgICAgdGhpcy5fX3Njcm9sbExlZnQgPSBNYXRoLm1heChcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdCwgZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgc2Nyb2xsIHBvc2l0aW9uIG9mIHRoZSBvdXRzaWRlIHNjcm9sbGluZyBlbGVtZW50LlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX19yZXN0b3JlU2Nyb2xsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuICAgIGlmIChkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50KSB7XG4gICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbFRvcCA9IHRoaXMuX19zY3JvbGxUb3A7XG4gICAgICBkb2N1bWVudC5zY3JvbGxpbmdFbGVtZW50LnNjcm9sbExlZnQgPSB0aGlzLl9fc2Nyb2xsTGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gU2luY2Ugd2UgZG9uJ3Qga25vdyBpZiBpcyB0aGUgYm9keSBvciBodG1sLCBzZXQgYm90aC5cbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCA9XG4gICAgICAgICAgdGhpcy5fX3Njcm9sbFRvcDtcbiAgICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0ID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0ID1cbiAgICAgICAgICB0aGlzLl9fc2Nyb2xsTGVmdDtcbiAgICB9XG4gIH0sXG5cbn07XG5cbi8qKlxuICBVc2UgYFBvbHltZXIuSXJvbk92ZXJsYXlCZWhhdmlvcmAgdG8gaW1wbGVtZW50IGFuIGVsZW1lbnQgdGhhdCBjYW4gYmUgaGlkZGVuXG4gIG9yIHNob3duLCBhbmQgZGlzcGxheXMgb24gdG9wIG9mIG90aGVyIGNvbnRlbnQuIEl0IGluY2x1ZGVzIGFuIG9wdGlvbmFsXG4gIGJhY2tkcm9wLCBhbmQgY2FuIGJlIHVzZWQgdG8gaW1wbGVtZW50IGEgdmFyaWV0eSBvZiBVSSBjb250cm9scyBpbmNsdWRpbmdcbiAgZGlhbG9ncyBhbmQgZHJvcCBkb3ducy4gTXVsdGlwbGUgb3ZlcmxheXMgbWF5IGJlIGRpc3BsYXllZCBhdCBvbmNlLlxuXG4gIFNlZSB0aGUgW2RlbW8gc291cmNlXG4gIGNvZGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2Jsb2IvbWFzdGVyL2RlbW8vc2ltcGxlLW92ZXJsYXkuaHRtbClcbiAgZm9yIGFuIGV4YW1wbGUuXG5cbiAgIyMjIENsb3NpbmcgYW5kIGNhbmNlbGluZ1xuXG4gIEFuIG92ZXJsYXkgbWF5IGJlIGhpZGRlbiBieSBjbG9zaW5nIG9yIGNhbmNlbGluZy4gVGhlIGRpZmZlcmVuY2UgYmV0d2VlbiBjbG9zZVxuICBhbmQgY2FuY2VsIGlzIHVzZXIgaW50ZW50LiBDbG9zaW5nIGdlbmVyYWxseSBpbXBsaWVzIHRoYXQgdGhlIHVzZXJcbiAgYWNrbm93bGVkZ2VkIHRoZSBjb250ZW50IG9uIHRoZSBvdmVybGF5LiBCeSBkZWZhdWx0LCBpdCB3aWxsIGNhbmNlbCB3aGVuZXZlclxuICB0aGUgdXNlciB0YXBzIG91dHNpZGUgaXQgb3IgcHJlc3NlcyB0aGUgZXNjYXBlIGtleS4gVGhpcyBiZWhhdmlvciBpc1xuICBjb25maWd1cmFibGUgd2l0aCB0aGUgYG5vLWNhbmNlbC1vbi1lc2Mta2V5YCBhbmQgdGhlXG4gIGBuby1jYW5jZWwtb24tb3V0c2lkZS1jbGlja2AgcHJvcGVydGllcy4gYGNsb3NlKClgIHNob3VsZCBiZSBjYWxsZWQgZXhwbGljaXRseVxuICBieSB0aGUgaW1wbGVtZW50ZXIgd2hlbiB0aGUgdXNlciBpbnRlcmFjdHMgd2l0aCBhIGNvbnRyb2wgaW4gdGhlIG92ZXJsYXlcbiAgZWxlbWVudC4gV2hlbiB0aGUgZGlhbG9nIGlzIGNhbmNlbGVkLCB0aGUgb3ZlcmxheSBmaXJlcyBhblxuICAnaXJvbi1vdmVybGF5LWNhbmNlbGVkJyBldmVudC4gQ2FsbCBgcHJldmVudERlZmF1bHRgIG9uIHRoaXMgZXZlbnQgdG8gcHJldmVudFxuICB0aGUgb3ZlcmxheSBmcm9tIGNsb3NpbmcuXG5cbiAgIyMjIFBvc2l0aW9uaW5nXG5cbiAgQnkgZGVmYXVsdCB0aGUgZWxlbWVudCBpcyBzaXplZCBhbmQgcG9zaXRpb25lZCB0byBmaXQgYW5kIGNlbnRlcmVkIGluc2lkZSB0aGVcbiAgd2luZG93LiBZb3UgY2FuIHBvc2l0aW9uIGFuZCBzaXplIGl0IG1hbnVhbGx5IHVzaW5nIENTUy4gU2VlXG4gIGBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAuXG5cbiAgIyMjIEJhY2tkcm9wXG5cbiAgU2V0IHRoZSBgd2l0aC1iYWNrZHJvcGAgYXR0cmlidXRlIHRvIGRpc3BsYXkgYSBiYWNrZHJvcCBiZWhpbmQgdGhlIG92ZXJsYXkuXG4gIFRoZSBiYWNrZHJvcCBpcyBhcHBlbmRlZCB0byBgPGJvZHk+YCBhbmQgaXMgb2YgdHlwZSBgPGlyb24tb3ZlcmxheS1iYWNrZHJvcD5gLlxuICBTZWUgaXRzIGRvYyBwYWdlIGZvciBzdHlsaW5nIG9wdGlvbnMuXG5cbiAgSW4gYWRkaXRpb24sIGB3aXRoLWJhY2tkcm9wYCB3aWxsIHdyYXAgdGhlIGZvY3VzIHdpdGhpbiB0aGUgY29udGVudCBpbiB0aGVcbiAgbGlnaHQgRE9NLiBPdmVycmlkZSB0aGUgW2BfZm9jdXNhYmxlTm9kZXNgXG4gIGdldHRlcl0oI1BvbHltZXIuSXJvbk92ZXJsYXlCZWhhdmlvcjpwcm9wZXJ0eS1fZm9jdXNhYmxlTm9kZXMpIHRvIGFjaGlldmUgYVxuICBkaWZmZXJlbnQgYmVoYXZpb3IuXG5cbiAgIyMjIExpbWl0YXRpb25zXG5cbiAgVGhlIGVsZW1lbnQgaXMgc3R5bGVkIHRvIGFwcGVhciBvbiB0b3Agb2Ygb3RoZXIgY29udGVudCBieSBzZXR0aW5nIGl0c1xuICBgei1pbmRleGAgcHJvcGVydHkuIFlvdSBtdXN0IGVuc3VyZSBubyBlbGVtZW50IGhhcyBhIHN0YWNraW5nIGNvbnRleHQgd2l0aCBhXG4gIGhpZ2hlciBgei1pbmRleGAgdGhhbiBpdHMgcGFyZW50IHN0YWNraW5nIGNvbnRleHQuIFlvdSBzaG91bGQgcGxhY2UgdGhpc1xuICBlbGVtZW50IGFzIGEgY2hpbGQgb2YgYDxib2R5PmAgd2hlbmV2ZXIgcG9zc2libGUuXG5cbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3JcbiAqL1xuZXhwb3J0IGNvbnN0IElyb25PdmVybGF5QmVoYXZpb3IgPVxuICAgIFtJcm9uRml0QmVoYXZpb3IsIElyb25SZXNpemFibGVCZWhhdmlvciwgSXJvbk92ZXJsYXlCZWhhdmlvckltcGxdO1xuXG4vKipcbiAqIEZpcmVkIGFmdGVyIHRoZSBvdmVybGF5IG9wZW5zLlxuICogQGV2ZW50IGlyb24tb3ZlcmxheS1vcGVuZWRcbiAqL1xuXG4vKipcbiAqIEZpcmVkIHdoZW4gdGhlIG92ZXJsYXkgaXMgY2FuY2VsZWQsIGJ1dCBiZWZvcmUgaXQgaXMgY2xvc2VkLlxuICogQGV2ZW50IGlyb24tb3ZlcmxheS1jYW5jZWxlZFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGNsb3Npbmcgb2YgdGhlIG92ZXJsYXkgY2FuIGJlIHByZXZlbnRlZFxuICogYnkgY2FsbGluZyBgZXZlbnQucHJldmVudERlZmF1bHQoKWAuIFRoZSBgZXZlbnQuZGV0YWlsYCBpcyB0aGUgb3JpZ2luYWwgZXZlbnRcbiAqIHRoYXQgb3JpZ2luYXRlZCB0aGUgY2FuY2VsaW5nIChlLmcuIEVTQyBrZXlib2FyZCBldmVudCBvciBjbGljayBldmVudCBvdXRzaWRlXG4gKiB0aGUgb3ZlcmxheSkuXG4gKi9cblxuLyoqXG4gKiBGaXJlZCBhZnRlciB0aGUgb3ZlcmxheSBjbG9zZXMuXG4gKiBAZXZlbnQgaXJvbi1vdmVybGF5LWNsb3NlZFxuICogQHBhcmFtIHtFdmVudH0gZXZlbnQgVGhlIGBldmVudC5kZXRhaWxgIGlzIHRoZSBgY2xvc2luZ1JlYXNvbmAgcHJvcGVydHlcbiAqIChjb250YWlucyBgY2FuY2VsZWRgLCB3aGV0aGVyIHRoZSBvdmVybGF5IHdhcyBjYW5jZWxlZCkuXG4gKi9cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnLi9pcm9uLW92ZXJsYXktYmFja2Ryb3AuanMnO1xuXG5pbXBvcnQge0lyb25BMTF5S2V5c0JlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCAqIGFzIGdlc3R1cmVzIGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2dlc3R1cmVzLmpzJztcblxuLyoqXG4gKiBAc3RydWN0XG4gKiBAY29uc3RydWN0b3JcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBjb25zdCBJcm9uT3ZlcmxheU1hbmFnZXJDbGFzcyA9IGZ1bmN0aW9uKCkge1xuICAvKipcbiAgICogVXNlZCB0byBrZWVwIHRyYWNrIG9mIHRoZSBvcGVuZWQgb3ZlcmxheXMuXG4gICAqIEBwcml2YXRlIHshQXJyYXk8IUVsZW1lbnQ+fVxuICAgKi9cbiAgdGhpcy5fb3ZlcmxheXMgPSBbXTtcblxuICAvKipcbiAgICogaWZyYW1lcyBoYXZlIGEgZGVmYXVsdCB6LWluZGV4IG9mIDEwMCxcbiAgICogc28gdGhpcyBkZWZhdWx0IHNob3VsZCBiZSBhdCBsZWFzdCB0aGF0LlxuICAgKiBAcHJpdmF0ZSB7bnVtYmVyfVxuICAgKi9cbiAgdGhpcy5fbWluaW11bVogPSAxMDE7XG5cbiAgLyoqXG4gICAqIE1lbW9pemVkIGJhY2tkcm9wIGVsZW1lbnQuXG4gICAqIEBwcml2YXRlIHtFbGVtZW50fG51bGx9XG4gICAqL1xuICB0aGlzLl9iYWNrZHJvcEVsZW1lbnQgPSBudWxsO1xuXG4gIC8vIEVuYWJsZSBkb2N1bWVudC13aWRlIHRhcCByZWNvZ25pemVyLlxuICAvLyBOT1RFOiBVc2UgdXNlQ2FwdHVyZT10cnVlIHRvIGF2b2lkIGFjY2lkZW50YWxseSBwcmV2ZW50aW9uIG9mIHRoZSBjbG9zaW5nXG4gIC8vIG9mIGFuIG92ZXJsYXkgdmlhIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpLiBUaGUgb25seSB3YXkgdG8gcHJldmVudFxuICAvLyBjbG9zaW5nIG9mIGFuIG92ZXJsYXkgc2hvdWxkIGJlIHRocm91Z2ggaXRzIEFQSXMuXG4gIC8vIE5PVEU6IGVuYWJsZSB0YXAgb24gPGh0bWw+IHRvIHdvcmthcm91bmQgUG9seW1lci9wb2x5bWVyIzQ0NTlcbiAgLy8gUGFzcyBuby1vcCBmdW5jdGlvbiBiZWNhdXNlIE1TRWRnZSAxNSBkb2Vzbid0IGhhbmRsZSBudWxsIGFzIDJuZCBhcmd1bWVudFxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vTWljcm9zb2Z0L0NoYWtyYUNvcmUvaXNzdWVzLzM4NjNcbiAgZ2VzdHVyZXMuYWRkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ3RhcCcsIGZ1bmN0aW9uKCkge30pO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0YXAnLCB0aGlzLl9vbkNhcHR1cmVDbGljay5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9vbkNhcHR1cmVGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uQ2FwdHVyZUtleURvd24uYmluZCh0aGlzKSwgdHJ1ZSk7XG59O1xuXG5Jcm9uT3ZlcmxheU1hbmFnZXJDbGFzcy5wcm90b3R5cGUgPSB7XG5cbiAgY29uc3RydWN0b3I6IElyb25PdmVybGF5TWFuYWdlckNsYXNzLFxuXG4gIC8qKlxuICAgKiBUaGUgc2hhcmVkIGJhY2tkcm9wIGVsZW1lbnQuXG4gICAqIEByZXR1cm4geyFFbGVtZW50fSBiYWNrZHJvcEVsZW1lbnRcbiAgICovXG4gIGdldCBiYWNrZHJvcEVsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLl9iYWNrZHJvcEVsZW1lbnQpIHtcbiAgICAgIHRoaXMuX2JhY2tkcm9wRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lyb24tb3ZlcmxheS1iYWNrZHJvcCcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYmFja2Ryb3BFbGVtZW50O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgZGVlcGVzdCBhY3RpdmUgZWxlbWVudC5cbiAgICogQHJldHVybiB7IUVsZW1lbnR9IGFjdGl2ZUVsZW1lbnQgdGhlIGFjdGl2ZSBlbGVtZW50XG4gICAqL1xuICBnZXQgZGVlcEFjdGl2ZUVsZW1lbnQoKSB7XG4gICAgdmFyIGFjdGl2ZSA9IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG4gICAgLy8gZG9jdW1lbnQuYWN0aXZlRWxlbWVudCBjYW4gYmUgbnVsbFxuICAgIC8vIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9Eb2N1bWVudC9hY3RpdmVFbGVtZW50XG4gICAgLy8gSW4gSUUgMTEsIGl0IGNhbiBhbHNvIGJlIGFuIG9iamVjdCB3aGVuIG9wZXJhdGluZyBpbiBpZnJhbWVzLlxuICAgIC8vIEluIHRoZXNlIGNhc2VzLCBkZWZhdWx0IGl0IHRvIGRvY3VtZW50LmJvZHkuXG4gICAgaWYgKCFhY3RpdmUgfHwgYWN0aXZlIGluc3RhbmNlb2YgRWxlbWVudCA9PT0gZmFsc2UpIHtcbiAgICAgIGFjdGl2ZSA9IGRvY3VtZW50LmJvZHk7XG4gICAgfVxuICAgIHdoaWxlIChhY3RpdmUucm9vdCAmJiBkb20oYWN0aXZlLnJvb3QpLmFjdGl2ZUVsZW1lbnQpIHtcbiAgICAgIGFjdGl2ZSA9IGRvbShhY3RpdmUucm9vdCkuYWN0aXZlRWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIGFjdGl2ZTtcbiAgfSxcblxuICAvKipcbiAgICogQnJpbmdzIHRoZSBvdmVybGF5IGF0IHRoZSBzcGVjaWZpZWQgaW5kZXggdG8gdGhlIGZyb250LlxuICAgKiBAcGFyYW0ge251bWJlcn0gaVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2JyaW5nT3ZlcmxheUF0SW5kZXhUb0Zyb250OiBmdW5jdGlvbihpKSB7XG4gICAgdmFyIG92ZXJsYXkgPSB0aGlzLl9vdmVybGF5c1tpXTtcbiAgICBpZiAoIW92ZXJsYXkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGxhc3RJID0gdGhpcy5fb3ZlcmxheXMubGVuZ3RoIC0gMTtcbiAgICB2YXIgY3VycmVudE92ZXJsYXkgPSB0aGlzLl9vdmVybGF5c1tsYXN0SV07XG4gICAgLy8gRW5zdXJlIGFsd2F5cy1vbi10b3Agb3ZlcmxheSBzdGF5cyBvbiB0b3AuXG4gICAgaWYgKGN1cnJlbnRPdmVybGF5ICYmXG4gICAgICAgIHRoaXMuX3Nob3VsZEJlQmVoaW5kT3ZlcmxheShvdmVybGF5LCBjdXJyZW50T3ZlcmxheSkpIHtcbiAgICAgIGxhc3RJLS07XG4gICAgfVxuICAgIC8vIElmIGFscmVhZHkgdGhlIHRvcCBlbGVtZW50LCByZXR1cm4uXG4gICAgaWYgKGkgPj0gbGFzdEkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHotaW5kZXggdG8gYmUgb24gdG9wLlxuICAgIHZhciBtaW5pbXVtWiA9IE1hdGgubWF4KHRoaXMuY3VycmVudE92ZXJsYXlaKCksIHRoaXMuX21pbmltdW1aKTtcbiAgICBpZiAodGhpcy5fZ2V0WihvdmVybGF5KSA8PSBtaW5pbXVtWikge1xuICAgICAgdGhpcy5fYXBwbHlPdmVybGF5WihvdmVybGF5LCBtaW5pbXVtWik7XG4gICAgfVxuXG4gICAgLy8gU2hpZnQgb3RoZXIgb3ZlcmxheXMgYmVoaW5kIHRoZSBuZXcgb24gdG9wLlxuICAgIHdoaWxlIChpIDwgbGFzdEkpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlzW2ldID0gdGhpcy5fb3ZlcmxheXNbaSArIDFdO1xuICAgICAgaSsrO1xuICAgIH1cbiAgICB0aGlzLl9vdmVybGF5c1tsYXN0SV0gPSBvdmVybGF5O1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGRzIHRoZSBvdmVybGF5IGFuZCB1cGRhdGVzIGl0cyB6LWluZGV4IGlmIGl0J3Mgb3BlbmVkLCBvciByZW1vdmVzIGl0IGlmXG4gICAqIGl0J3MgY2xvc2VkLiBBbHNvIHVwZGF0ZXMgdGhlIGJhY2tkcm9wIHotaW5kZXguXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IG92ZXJsYXlcbiAgICovXG4gIGFkZE9yUmVtb3ZlT3ZlcmxheTogZnVuY3Rpb24ob3ZlcmxheSkge1xuICAgIGlmIChvdmVybGF5Lm9wZW5lZCkge1xuICAgICAgdGhpcy5hZGRPdmVybGF5KG92ZXJsYXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZU92ZXJsYXkob3ZlcmxheSk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUcmFja3Mgb3ZlcmxheXMgZm9yIHotaW5kZXggYW5kIGZvY3VzIG1hbmFnZW1lbnQuXG4gICAqIEVuc3VyZXMgdGhlIGxhc3QgYWRkZWQgb3ZlcmxheSB3aXRoIGFsd2F5cy1vbi10b3AgcmVtYWlucyBvbiB0b3AuXG4gICAqIEBwYXJhbSB7IUVsZW1lbnR9IG92ZXJsYXlcbiAgICovXG4gIGFkZE92ZXJsYXk6IGZ1bmN0aW9uKG92ZXJsYXkpIHtcbiAgICB2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmluZGV4T2Yob3ZlcmxheSk7XG4gICAgaWYgKGkgPj0gMCkge1xuICAgICAgdGhpcy5fYnJpbmdPdmVybGF5QXRJbmRleFRvRnJvbnQoaSk7XG4gICAgICB0aGlzLnRyYWNrQmFja2Ryb3AoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdmFyIGluc2VydGlvbkluZGV4ID0gdGhpcy5fb3ZlcmxheXMubGVuZ3RoO1xuICAgIHZhciBjdXJyZW50T3ZlcmxheSA9IHRoaXMuX292ZXJsYXlzW2luc2VydGlvbkluZGV4IC0gMV07XG4gICAgdmFyIG1pbmltdW1aID0gTWF0aC5tYXgodGhpcy5fZ2V0WihjdXJyZW50T3ZlcmxheSksIHRoaXMuX21pbmltdW1aKTtcbiAgICB2YXIgbmV3WiA9IHRoaXMuX2dldFoob3ZlcmxheSk7XG5cbiAgICAvLyBFbnN1cmUgYWx3YXlzLW9uLXRvcCBvdmVybGF5IHN0YXlzIG9uIHRvcC5cbiAgICBpZiAoY3VycmVudE92ZXJsYXkgJiZcbiAgICAgICAgdGhpcy5fc2hvdWxkQmVCZWhpbmRPdmVybGF5KG92ZXJsYXksIGN1cnJlbnRPdmVybGF5KSkge1xuICAgICAgLy8gVGhpcyBidW1wcyB0aGUgei1pbmRleCBvZiArMi5cbiAgICAgIHRoaXMuX2FwcGx5T3ZlcmxheVooY3VycmVudE92ZXJsYXksIG1pbmltdW1aKTtcbiAgICAgIGluc2VydGlvbkluZGV4LS07XG4gICAgICAvLyBVcGRhdGUgbWluaW11bVogdG8gbWF0Y2ggcHJldmlvdXMgb3ZlcmxheSdzIHotaW5kZXguXG4gICAgICB2YXIgcHJldmlvdXNPdmVybGF5ID0gdGhpcy5fb3ZlcmxheXNbaW5zZXJ0aW9uSW5kZXggLSAxXTtcbiAgICAgIG1pbmltdW1aID0gTWF0aC5tYXgodGhpcy5fZ2V0WihwcmV2aW91c092ZXJsYXkpLCB0aGlzLl9taW5pbXVtWik7XG4gICAgfVxuXG4gICAgLy8gVXBkYXRlIHotaW5kZXggYW5kIGluc2VydCBvdmVybGF5LlxuICAgIGlmIChuZXdaIDw9IG1pbmltdW1aKSB7XG4gICAgICB0aGlzLl9hcHBseU92ZXJsYXlaKG92ZXJsYXksIG1pbmltdW1aKTtcbiAgICB9XG4gICAgdGhpcy5fb3ZlcmxheXMuc3BsaWNlKGluc2VydGlvbkluZGV4LCAwLCBvdmVybGF5KTtcblxuICAgIHRoaXMudHJhY2tCYWNrZHJvcCgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5XG4gICAqL1xuICByZW1vdmVPdmVybGF5OiBmdW5jdGlvbihvdmVybGF5KSB7XG4gICAgdmFyIGkgPSB0aGlzLl9vdmVybGF5cy5pbmRleE9mKG92ZXJsYXkpO1xuICAgIGlmIChpID09PSAtMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9vdmVybGF5cy5zcGxpY2UoaSwgMSk7XG5cbiAgICB0aGlzLnRyYWNrQmFja2Ryb3AoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBvdmVybGF5LlxuICAgKiBAcmV0dXJuIHshRWxlbWVudHx1bmRlZmluZWR9XG4gICAqL1xuICBjdXJyZW50T3ZlcmxheTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGkgPSB0aGlzLl9vdmVybGF5cy5sZW5ndGggLSAxO1xuICAgIHJldHVybiB0aGlzLl9vdmVybGF5c1tpXTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgY3VycmVudCBvdmVybGF5IHotaW5kZXguXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGN1cnJlbnRPdmVybGF5WjogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX2dldFoodGhpcy5jdXJyZW50T3ZlcmxheSgpKTtcbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyB0aGF0IHRoZSBtaW5pbXVtIHotaW5kZXggb2YgbmV3IG92ZXJsYXlzIGlzIGF0IGxlYXN0IGBtaW5pbXVtWmAuXG4gICAqIFRoaXMgZG9lcyBub3QgZWZmZWN0IHRoZSB6LWluZGV4IG9mIGFueSBleGlzdGluZyBvdmVybGF5cy5cbiAgICogQHBhcmFtIHtudW1iZXJ9IG1pbmltdW1aXG4gICAqL1xuICBlbnN1cmVNaW5pbXVtWjogZnVuY3Rpb24obWluaW11bVopIHtcbiAgICB0aGlzLl9taW5pbXVtWiA9IE1hdGgubWF4KHRoaXMuX21pbmltdW1aLCBtaW5pbXVtWik7XG4gIH0sXG5cbiAgZm9jdXNPdmVybGF5OiBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudCA9IC8qKiBAdHlwZSB7P30gKi8gKHRoaXMuY3VycmVudE92ZXJsYXkoKSk7XG4gICAgaWYgKGN1cnJlbnQpIHtcbiAgICAgIGN1cnJlbnQuX2FwcGx5Rm9jdXMoKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIGJhY2tkcm9wIHotaW5kZXguXG4gICAqL1xuICB0cmFja0JhY2tkcm9wOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgb3ZlcmxheSA9IHRoaXMuX292ZXJsYXlXaXRoQmFja2Ryb3AoKTtcbiAgICAvLyBBdm9pZCBjcmVhdGluZyB0aGUgYmFja2Ryb3AgaWYgdGhlcmUgaXMgbm8gb3ZlcmxheSB3aXRoIGJhY2tkcm9wLlxuICAgIGlmICghb3ZlcmxheSAmJiAhdGhpcy5fYmFja2Ryb3BFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50LnN0eWxlLnpJbmRleCA9IHRoaXMuX2dldFoob3ZlcmxheSkgLSAxO1xuICAgIHRoaXMuYmFja2Ryb3BFbGVtZW50Lm9wZW5lZCA9ICEhb3ZlcmxheTtcbiAgICAvLyBQcm9wZXJ0eSBvYnNlcnZlcnMgYXJlIG5vdCBmaXJlZCB1bnRpbCBlbGVtZW50IGlzIGF0dGFjaGVkXG4gICAgLy8gaW4gUG9seW1lciAyLngsIHNvIHdlIGVuc3VyZSBlbGVtZW50IGlzIGF0dGFjaGVkIGlmIG5lZWRlZC5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9wb2x5bWVyL2lzc3Vlcy80NTI2XG4gICAgdGhpcy5iYWNrZHJvcEVsZW1lbnQucHJlcGFyZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHshQXJyYXk8IUVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0QmFja2Ryb3BzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgYmFja2Ryb3BzID0gW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9vdmVybGF5cy5sZW5ndGg7IGkrKykge1xuICAgICAgaWYgKHRoaXMuX292ZXJsYXlzW2ldLndpdGhCYWNrZHJvcCkge1xuICAgICAgICBiYWNrZHJvcHMucHVzaCh0aGlzLl9vdmVybGF5c1tpXSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYWNrZHJvcHM7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHotaW5kZXggZm9yIHRoZSBiYWNrZHJvcC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgYmFja2Ryb3BaOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fZ2V0Wih0aGlzLl9vdmVybGF5V2l0aEJhY2tkcm9wKCkpIC0gMTtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgdG9wIG9wZW5lZCBvdmVybGF5IHRoYXQgaGFzIGEgYmFja2Ryb3AuXG4gICAqIEByZXR1cm4geyFFbGVtZW50fHVuZGVmaW5lZH1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vdmVybGF5V2l0aEJhY2tkcm9wOiBmdW5jdGlvbigpIHtcbiAgICBmb3IgKHZhciBpID0gdGhpcy5fb3ZlcmxheXMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgIGlmICh0aGlzLl9vdmVybGF5c1tpXS53aXRoQmFja2Ryb3ApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX292ZXJsYXlzW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQ2FsY3VsYXRlcyB0aGUgbWluaW11bSB6LWluZGV4IGZvciB0aGUgb3ZlcmxheS5cbiAgICogQHBhcmFtIHtFbGVtZW50PX0gb3ZlcmxheVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX2dldFo6IGZ1bmN0aW9uKG92ZXJsYXkpIHtcbiAgICB2YXIgeiA9IHRoaXMuX21pbmltdW1aO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICB2YXIgejEgPSBOdW1iZXIoXG4gICAgICAgICAgb3ZlcmxheS5zdHlsZS56SW5kZXggfHwgd2luZG93LmdldENvbXB1dGVkU3R5bGUob3ZlcmxheSkuekluZGV4KTtcbiAgICAgIC8vIENoZWNrIGlmIGlzIGEgbnVtYmVyXG4gICAgICAvLyBOdW1iZXIuaXNOYU4gbm90IHN1cHBvcnRlZCBpbiBJRSAxMCtcbiAgICAgIGlmICh6MSA9PT0gejEpIHtcbiAgICAgICAgeiA9IHoxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gejtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge251bWJlcnxzdHJpbmd9IHpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9zZXRaOiBmdW5jdGlvbihlbGVtZW50LCB6KSB7XG4gICAgZWxlbWVudC5zdHlsZS56SW5kZXggPSB6O1xuICB9LFxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBhYm92ZVpcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9hcHBseU92ZXJsYXlaOiBmdW5jdGlvbihvdmVybGF5LCBhYm92ZVopIHtcbiAgICB0aGlzLl9zZXRaKG92ZXJsYXksIGFib3ZlWiArIDIpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBkZWVwZXN0IG92ZXJsYXkgaW4gdGhlIHBhdGguXG4gICAqIEBwYXJhbSB7IUFycmF5PCFFbGVtZW50Pj19IHBhdGhcbiAgICogQHJldHVybiB7IUVsZW1lbnR8dW5kZWZpbmVkfVxuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX292ZXJsYXlJblBhdGg6IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICBwYXRoID0gcGF0aCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChwYXRoW2ldLl9tYW5hZ2VyID09PSB0aGlzKSB7XG4gICAgICAgIHJldHVybiBwYXRoW2ldO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRW5zdXJlcyB0aGUgY2xpY2sgZXZlbnQgaXMgZGVsZWdhdGVkIHRvIHRoZSByaWdodCBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkNhcHR1cmVDbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgaSA9IHRoaXMuX292ZXJsYXlzLmxlbmd0aCAtIDE7XG4gICAgaWYgKGkgPT09IC0xKVxuICAgICAgcmV0dXJuO1xuICAgIHZhciBwYXRoID0gLyoqIEB0eXBlIHshQXJyYXk8IUV2ZW50VGFyZ2V0Pn0gKi8gKGRvbShldmVudCkucGF0aCk7XG4gICAgdmFyIG92ZXJsYXk7XG4gICAgLy8gQ2hlY2sgaWYgY2xpY2tlZCBvdXRzaWRlIG9mIG92ZXJsYXkuXG4gICAgd2hpbGUgKChvdmVybGF5ID0gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5fb3ZlcmxheXNbaV0pKSAmJlxuICAgICAgICAgICB0aGlzLl9vdmVybGF5SW5QYXRoKHBhdGgpICE9PSBvdmVybGF5KSB7XG4gICAgICBvdmVybGF5Ll9vbkNhcHR1cmVDbGljayhldmVudCk7XG4gICAgICBpZiAob3ZlcmxheS5hbGxvd0NsaWNrVGhyb3VnaCkge1xuICAgICAgICBpLS07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEVuc3VyZXMgdGhlIGZvY3VzIGV2ZW50IGlzIGRlbGVnYXRlZCB0byB0aGUgcmlnaHQgb3ZlcmxheS5cbiAgICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfb25DYXB0dXJlRm9jdXM6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIG92ZXJsYXkgPSAvKiogQHR5cGUgez99ICovICh0aGlzLmN1cnJlbnRPdmVybGF5KCkpO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBvdmVybGF5Ll9vbkNhcHR1cmVGb2N1cyhldmVudCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBFbnN1cmVzIFRBQiBhbmQgRVNDIGtleWJvYXJkIGV2ZW50cyBhcmUgZGVsZWdhdGVkIHRvIHRoZSByaWdodCBvdmVybGF5LlxuICAgKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkNhcHR1cmVLZXlEb3duOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBvdmVybGF5ID0gLyoqIEB0eXBlIHs/fSAqLyAodGhpcy5jdXJyZW50T3ZlcmxheSgpKTtcbiAgICBpZiAob3ZlcmxheSkge1xuICAgICAgaWYgKElyb25BMTF5S2V5c0JlaGF2aW9yLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhldmVudCwgJ2VzYycpKSB7XG4gICAgICAgIG92ZXJsYXkuX29uQ2FwdHVyZUVzYyhldmVudCk7XG4gICAgICB9IGVsc2UgaWYgKElyb25BMTF5S2V5c0JlaGF2aW9yLmtleWJvYXJkRXZlbnRNYXRjaGVzS2V5cyhldmVudCwgJ3RhYicpKSB7XG4gICAgICAgIG92ZXJsYXkuX29uQ2FwdHVyZVRhYihldmVudCk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGlmIHRoZSBvdmVybGF5MSBzaG91bGQgYmUgYmVoaW5kIG92ZXJsYXkyLlxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5MVxuICAgKiBAcGFyYW0geyFFbGVtZW50fSBvdmVybGF5MlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAc3VwcHJlc3Mge21pc3NpbmdQcm9wZXJ0aWVzfVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgX3Nob3VsZEJlQmVoaW5kT3ZlcmxheTogZnVuY3Rpb24ob3ZlcmxheTEsIG92ZXJsYXkyKSB7XG4gICAgcmV0dXJuICFvdmVybGF5MS5hbHdheXNPblRvcCAmJiBvdmVybGF5Mi5hbHdheXNPblRvcDtcbiAgfVxufTtcblxuZXhwb3J0IGNvbnN0IElyb25PdmVybGF5TWFuYWdlciA9IG5ldyBJcm9uT3ZlcmxheU1hbmFnZXJDbGFzcygpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbi8qKlxuICogVXNlZCB0byBjYWxjdWxhdGUgdGhlIHNjcm9sbCBkaXJlY3Rpb24gZHVyaW5nIHRvdWNoIGV2ZW50cy5cbiAqIEB0eXBlIHshT2JqZWN0fVxuICovXG52YXIgbGFzdFRvdWNoUG9zaXRpb24gPSB7cGFnZVg6IDAsIHBhZ2VZOiAwfTtcbi8qKlxuICogVXNlZCB0byBhdm9pZCBjb21wdXRpbmcgZXZlbnQucGF0aCBhbmQgZmlsdGVyIHNjcm9sbGFibGUgbm9kZXMgKGJldHRlciBwZXJmKS5cbiAqIEB0eXBlIHs/RXZlbnRUYXJnZXR9XG4gKi9cbnZhciBsYXN0Um9vdFRhcmdldCA9IG51bGw7XG4vKipcbiAqIEB0eXBlIHshQXJyYXk8IU5vZGU+fVxuICovXG52YXIgbGFzdFNjcm9sbGFibGVOb2RlcyA9IFtdO1xuLyoqXG4gKiBAdHlwZSB7IUFycmF5PHN0cmluZz59XG4gKi9cbnZhciBzY3JvbGxFdmVudHMgPSBbXG4gIC8vIE1vZGVybiBgd2hlZWxgIGV2ZW50IGZvciBtb3VzZSB3aGVlbCBzY3JvbGxpbmc6XG4gICd3aGVlbCcsXG4gIC8vIE9sZGVyLCBub24tc3RhbmRhcmQgYG1vdXNld2hlZWxgIGV2ZW50IGZvciBzb21lIEZGOlxuICAnbW91c2V3aGVlbCcsXG4gIC8vIElFOlxuICAnRE9NTW91c2VTY3JvbGwnLFxuICAvLyBUb3VjaCBlbmFibGVkIGRldmljZXNcbiAgJ3RvdWNoc3RhcnQnLFxuICAndG91Y2htb3ZlJ1xuXTtcbi8vIG11c3QgYmUgZGVmaW5lZCBmb3IgbW9kdWxpemVyXG52YXIgX2JvdW5kU2Nyb2xsSGFuZGxlcjtcbnZhciBjdXJyZW50TG9ja2luZ0VsZW1lbnQ7XG5cbi8qKlxuICogVGhlIElyb25TY3JvbGxNYW5hZ2VyIGlzIGludGVuZGVkIHRvIHByb3ZpZGUgYSBjZW50cmFsIHNvdXJjZVxuICogb2YgYXV0aG9yaXR5IGFuZCBjb250cm9sIG92ZXIgd2hpY2ggZWxlbWVudHMgaW4gYSBkb2N1bWVudCBhcmUgY3VycmVudGx5XG4gKiBhbGxvd2VkIHRvIHNjcm9sbC5cbiAqXG4gKi9cbmBUT0RPKG1vZHVsaXplcik6IEEgbmFtZXNwYWNlIG5hbWVkIFBvbHltZXIuSXJvblNjcm9sbE1hbmFnZXIgd2FzXG5kZWNsYXJlZCBoZXJlLiBUaGUgc3Vycm91bmRpbmcgY29tbWVudHMgc2hvdWxkIGJlIHJldmlld2VkLFxuYW5kIHRoaXMgc3RyaW5nIGNhbiB0aGVuIGJlIGRlbGV0ZWRgO1xuXG4vKipcbiAqIFRoZSBjdXJyZW50IGVsZW1lbnQgdGhhdCBkZWZpbmVzIHRoZSBET00gYm91bmRhcmllcyBvZiB0aGVcbiAqIHNjcm9sbCBsb2NrLiBUaGlzIGlzIGFsd2F5cyB0aGUgbW9zdCByZWNlbnRseSBsb2NraW5nIGVsZW1lbnQuXG4gKlxuICogQHJldHVybiB7IU5vZGV8dW5kZWZpbmVkfVxuICovXG5leHBvcnQge2N1cnJlbnRMb2NraW5nRWxlbWVudH07XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBwcm92aWRlZCBlbGVtZW50IGlzIFwic2Nyb2xsIGxvY2tlZFwiLCB3aGljaCBpcyB0b1xuICogc2F5IHRoYXQgaXQgY2Fubm90IGJlIHNjcm9sbGVkIHZpYSBwb2ludGVyIG9yIGtleWJvYXJkIGludGVyYWN0aW9ucy5cbiAqXG4gKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudCBBbiBIVE1MIGVsZW1lbnQgaW5zdGFuY2Ugd2hpY2ggbWF5IG9yIG1heVxuICogbm90IGJlIHNjcm9sbCBsb2NrZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBlbGVtZW50SXNTY3JvbGxMb2NrZWQoZWxlbWVudCkge1xuICB2YXIgbG9ja2luZ0VsZW1lbnQgPSBjdXJyZW50TG9ja2luZ0VsZW1lbnQ7XG5cbiAgaWYgKGxvY2tpbmdFbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgc2Nyb2xsTG9ja2VkO1xuXG4gIGlmIChfaGFzQ2FjaGVkTG9ja2VkRWxlbWVudChlbGVtZW50KSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKF9oYXNDYWNoZWRVbmxvY2tlZEVsZW1lbnQoZWxlbWVudCkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzY3JvbGxMb2NrZWQgPSAhIWxvY2tpbmdFbGVtZW50ICYmIGxvY2tpbmdFbGVtZW50ICE9PSBlbGVtZW50ICYmXG4gICAgICAhX2NvbXBvc2VkVHJlZUNvbnRhaW5zKGxvY2tpbmdFbGVtZW50LCBlbGVtZW50KTtcblxuICBpZiAoc2Nyb2xsTG9ja2VkKSB7XG4gICAgX2xvY2tlZEVsZW1lbnRDYWNoZS5wdXNoKGVsZW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIF91bmxvY2tlZEVsZW1lbnRDYWNoZS5wdXNoKGVsZW1lbnQpO1xuICB9XG5cbiAgcmV0dXJuIHNjcm9sbExvY2tlZDtcbn1cblxuLyoqXG4gKiBQdXNoIGFuIGVsZW1lbnQgb250byB0aGUgY3VycmVudCBzY3JvbGwgbG9jayBzdGFjay4gVGhlIG1vc3QgcmVjZW50bHlcbiAqIHB1c2hlZCBlbGVtZW50IGFuZCBpdHMgY2hpbGRyZW4gd2lsbCBiZSBjb25zaWRlcmVkIHNjcm9sbGFibGUuIEFsbFxuICogb3RoZXIgZWxlbWVudHMgd2lsbCBub3QgYmUgc2Nyb2xsYWJsZS5cbiAqXG4gKiBTY3JvbGwgbG9ja2luZyBpcyBpbXBsZW1lbnRlZCBhcyBhIHN0YWNrIHNvIHRoYXQgY2FzZXMgc3VjaCBhc1xuICogZHJvcGRvd25zIHdpdGhpbiBkcm9wZG93bnMgYXJlIGhhbmRsZWQgd2VsbC5cbiAqXG4gKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0aGF0IHNob3VsZCBsb2NrIHNjcm9sbC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHB1c2hTY3JvbGxMb2NrKGVsZW1lbnQpIHtcbiAgLy8gUHJldmVudCBwdXNoaW5nIHRoZSBzYW1lIGVsZW1lbnQgdHdpY2VcbiAgaWYgKF9sb2NraW5nRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KSA+PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgaWYgKF9sb2NraW5nRWxlbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgX2xvY2tTY3JvbGxJbnRlcmFjdGlvbnMoKTtcbiAgfVxuXG4gIF9sb2NraW5nRWxlbWVudHMucHVzaChlbGVtZW50KTtcbiAgY3VycmVudExvY2tpbmdFbGVtZW50ID0gX2xvY2tpbmdFbGVtZW50c1tfbG9ja2luZ0VsZW1lbnRzLmxlbmd0aCAtIDFdO1xuXG4gIF9sb2NrZWRFbGVtZW50Q2FjaGUgPSBbXTtcbiAgX3VubG9ja2VkRWxlbWVudENhY2hlID0gW107XG59XG5cbi8qKlxuICogUmVtb3ZlIGFuIGVsZW1lbnQgZnJvbSB0aGUgc2Nyb2xsIGxvY2sgc3RhY2suIFRoZSBlbGVtZW50IGJlaW5nXG4gKiByZW1vdmVkIGRvZXMgbm90IG5lZWQgdG8gYmUgdGhlIG1vc3QgcmVjZW50bHkgcHVzaGVkIGVsZW1lbnQuIEhvd2V2ZXIsXG4gKiB0aGUgc2Nyb2xsIGxvY2sgY29uc3RyYWludHMgb25seSBjaGFuZ2Ugd2hlbiB0aGUgbW9zdCByZWNlbnRseSBwdXNoZWRcbiAqIGVsZW1lbnQgaXMgcmVtb3ZlZC5cbiAqXG4gKiBAcGFyYW0geyFIVE1MRWxlbWVudH0gZWxlbWVudCBUaGUgZWxlbWVudCB0byByZW1vdmUgZnJvbSB0aGUgc2Nyb2xsXG4gKiBsb2NrIHN0YWNrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlU2Nyb2xsTG9jayhlbGVtZW50KSB7XG4gIHZhciBpbmRleCA9IF9sb2NraW5nRWxlbWVudHMuaW5kZXhPZihlbGVtZW50KTtcblxuICBpZiAoaW5kZXggPT09IC0xKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgX2xvY2tpbmdFbGVtZW50cy5zcGxpY2UoaW5kZXgsIDEpO1xuICBjdXJyZW50TG9ja2luZ0VsZW1lbnQgPSBfbG9ja2luZ0VsZW1lbnRzW19sb2NraW5nRWxlbWVudHMubGVuZ3RoIC0gMV07XG5cbiAgX2xvY2tlZEVsZW1lbnRDYWNoZSA9IFtdO1xuICBfdW5sb2NrZWRFbGVtZW50Q2FjaGUgPSBbXTtcblxuICBpZiAoX2xvY2tpbmdFbGVtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICBfdW5sb2NrU2Nyb2xsSW50ZXJhY3Rpb25zKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNvbnN0IF9sb2NraW5nRWxlbWVudHMgPSBbXTtcbmV4cG9ydCBsZXQgX2xvY2tlZEVsZW1lbnRDYWNoZSA9IG51bGw7XG5leHBvcnQgbGV0IF91bmxvY2tlZEVsZW1lbnRDYWNoZSA9IG51bGw7XG5cbmV4cG9ydCBmdW5jdGlvbiBfaGFzQ2FjaGVkTG9ja2VkRWxlbWVudChlbGVtZW50KSB7XG4gIHJldHVybiBfbG9ja2VkRWxlbWVudENhY2hlLmluZGV4T2YoZWxlbWVudCkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9oYXNDYWNoZWRVbmxvY2tlZEVsZW1lbnQoZWxlbWVudCkge1xuICByZXR1cm4gX3VubG9ja2VkRWxlbWVudENhY2hlLmluZGV4T2YoZWxlbWVudCkgPiAtMTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9jb21wb3NlZFRyZWVDb250YWlucyhlbGVtZW50LCBjaGlsZCkge1xuICAvLyBOT1RFKGNkYXRhKTogVGhpcyBtZXRob2QgaXRlcmF0ZXMgb3ZlciBjb250ZW50IGVsZW1lbnRzIGFuZCB0aGVpclxuICAvLyBjb3JyZXNwb25kaW5nIGRpc3RyaWJ1dGVkIG5vZGVzIHRvIGltcGxlbWVudCBhIGNvbnRhaW5zLWxpa2UgbWV0aG9kXG4gIC8vIHRoYXQgcGllcmNlcyB0aHJvdWdoIHRoZSBjb21wb3NlZCB0cmVlIG9mIHRoZSBTaGFkb3dET00uIFJlc3VsdHMgb2ZcbiAgLy8gdGhpcyBvcGVyYXRpb24gYXJlIGNhY2hlZCAoZWxzZXdoZXJlKSBvbiBhIHBlci1zY3JvbGwtbG9jayBiYXNpcywgdG9cbiAgLy8gZ3VhcmQgYWdhaW5zdCBwb3RlbnRpYWxseSBleHBlbnNpdmUgbG9va3VwcyBoYXBwZW5pbmcgcmVwZWF0ZWRseSBhc1xuICAvLyBhIHVzZXIgc2Nyb2xscyAvIHRvdWNobW92ZXMuXG4gIHZhciBjb250ZW50RWxlbWVudHM7XG4gIHZhciBkaXN0cmlidXRlZE5vZGVzO1xuICB2YXIgY29udGVudEluZGV4O1xuICB2YXIgbm9kZUluZGV4O1xuXG4gIGlmIChlbGVtZW50LmNvbnRhaW5zKGNoaWxkKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgY29udGVudEVsZW1lbnRzID0gZG9tKGVsZW1lbnQpLnF1ZXJ5U2VsZWN0b3JBbGwoJ2NvbnRlbnQsc2xvdCcpO1xuXG4gIGZvciAoY29udGVudEluZGV4ID0gMDsgY29udGVudEluZGV4IDwgY29udGVudEVsZW1lbnRzLmxlbmd0aDtcbiAgICAgICArK2NvbnRlbnRJbmRleCkge1xuICAgIGRpc3RyaWJ1dGVkTm9kZXMgPSBkb20oY29udGVudEVsZW1lbnRzW2NvbnRlbnRJbmRleF0pLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcblxuICAgIGZvciAobm9kZUluZGV4ID0gMDsgbm9kZUluZGV4IDwgZGlzdHJpYnV0ZWROb2Rlcy5sZW5ndGg7ICsrbm9kZUluZGV4KSB7XG4gICAgICAvLyBQb2x5bWVyIDIueCByZXR1cm5zIHNsb3QuYXNzaWduZWROb2RlcyB3aGljaCBjYW4gY29udGFpbiB0ZXh0IG5vZGVzLlxuICAgICAgaWYgKGRpc3RyaWJ1dGVkTm9kZXNbbm9kZUluZGV4XS5ub2RlVHlwZSAhPT0gTm9kZS5FTEVNRU5UX05PREUpXG4gICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICBpZiAoX2NvbXBvc2VkVHJlZUNvbnRhaW5zKGRpc3RyaWJ1dGVkTm9kZXNbbm9kZUluZGV4XSwgY2hpbGQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9zY3JvbGxJbnRlcmFjdGlvbkhhbmRsZXIoZXZlbnQpIHtcbiAgLy8gQXZvaWQgY2FuY2VsaW5nIGFuIGV2ZW50IHdpdGggY2FuY2VsYWJsZT1mYWxzZSwgZS5nLiBzY3JvbGxpbmcgaXMgaW5cbiAgLy8gcHJvZ3Jlc3MgYW5kIGNhbm5vdCBiZSBpbnRlcnJ1cHRlZC5cbiAgaWYgKGV2ZW50LmNhbmNlbGFibGUgJiYgX3Nob3VsZFByZXZlbnRTY3JvbGxpbmcoZXZlbnQpKSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgfVxuICAvLyBJZiBldmVudCBoYXMgdGFyZ2V0VG91Y2hlcyAodG91Y2ggZXZlbnQpLCB1cGRhdGUgbGFzdCB0b3VjaCBwb3NpdGlvbi5cbiAgaWYgKGV2ZW50LnRhcmdldFRvdWNoZXMpIHtcbiAgICB2YXIgdG91Y2ggPSBldmVudC50YXJnZXRUb3VjaGVzWzBdO1xuICAgIGxhc3RUb3VjaFBvc2l0aW9uLnBhZ2VYID0gdG91Y2gucGFnZVg7XG4gICAgbGFzdFRvdWNoUG9zaXRpb24ucGFnZVkgPSB0b3VjaC5wYWdlWTtcbiAgfVxufVxuXG4vKipcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCB7X2JvdW5kU2Nyb2xsSGFuZGxlcn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfbG9ja1Njcm9sbEludGVyYWN0aW9ucygpIHtcbiAgX2JvdW5kU2Nyb2xsSGFuZGxlciA9XG4gICAgICBfYm91bmRTY3JvbGxIYW5kbGVyIHx8IF9zY3JvbGxJbnRlcmFjdGlvbkhhbmRsZXIuYmluZCh1bmRlZmluZWQpO1xuICBmb3IgKHZhciBpID0gMCwgbCA9IHNjcm9sbEV2ZW50cy5sZW5ndGg7IGkgPCBsOyBpKyspIHtcbiAgICAvLyBOT1RFOiBicm93c2VycyB0aGF0IGRvbid0IHN1cHBvcnQgb2JqZWN0cyBhcyB0aGlyZCBhcmcgd2lsbFxuICAgIC8vIGludGVycHJldCBpdCBhcyBib29sZWFuLCBoZW5jZSB1c2VDYXB0dXJlID0gdHJ1ZSBpbiB0aGlzIGNhc2UuXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgc2Nyb2xsRXZlbnRzW2ldLCBfYm91bmRTY3JvbGxIYW5kbGVyLCB7Y2FwdHVyZTogdHJ1ZSwgcGFzc2l2ZTogZmFsc2V9KTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gX3VubG9ja1Njcm9sbEludGVyYWN0aW9ucygpIHtcbiAgZm9yICh2YXIgaSA9IDAsIGwgPSBzY3JvbGxFdmVudHMubGVuZ3RoOyBpIDwgbDsgaSsrKSB7XG4gICAgLy8gTk9URTogYnJvd3NlcnMgdGhhdCBkb24ndCBzdXBwb3J0IG9iamVjdHMgYXMgdGhpcmQgYXJnIHdpbGxcbiAgICAvLyBpbnRlcnByZXQgaXQgYXMgYm9vbGVhbiwgaGVuY2UgdXNlQ2FwdHVyZSA9IHRydWUgaW4gdGhpcyBjYXNlLlxuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgIHNjcm9sbEV2ZW50c1tpXSwgX2JvdW5kU2Nyb2xsSGFuZGxlciwge2NhcHR1cmU6IHRydWUsIHBhc3NpdmU6IGZhbHNlfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm5zIHRydWUgaWYgdGhlIGV2ZW50IGNhdXNlcyBzY3JvbGwgb3V0c2lkZSB0aGUgY3VycmVudCBsb2NraW5nXG4gKiBlbGVtZW50LCBlLmcuIHBvaW50ZXIva2V5Ym9hcmQgaW50ZXJhY3Rpb25zLCBvciBzY3JvbGwgXCJsZWFraW5nXCJcbiAqIG91dHNpZGUgdGhlIGxvY2tpbmcgZWxlbWVudCB3aGVuIGl0IGlzIGFscmVhZHkgYXQgaXRzIHNjcm9sbCBib3VuZGFyaWVzLlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJuIHtib29sZWFufVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9zaG91bGRQcmV2ZW50U2Nyb2xsaW5nKGV2ZW50KSB7XG4gIC8vIFVwZGF0ZSBpZiByb290IHRhcmdldCBjaGFuZ2VkLiBGb3IgdG91Y2ggZXZlbnRzLCBlbnN1cmUgd2UgZG9uJ3RcbiAgLy8gdXBkYXRlIGR1cmluZyB0b3VjaG1vdmUuXG4gIHZhciB0YXJnZXQgPSBkb20oZXZlbnQpLnJvb3RUYXJnZXQ7XG4gIGlmIChldmVudC50eXBlICE9PSAndG91Y2htb3ZlJyAmJiBsYXN0Um9vdFRhcmdldCAhPT0gdGFyZ2V0KSB7XG4gICAgbGFzdFJvb3RUYXJnZXQgPSB0YXJnZXQ7XG4gICAgbGFzdFNjcm9sbGFibGVOb2RlcyA9IF9nZXRTY3JvbGxhYmxlTm9kZXMoZG9tKGV2ZW50KS5wYXRoKTtcbiAgfVxuXG4gIC8vIFByZXZlbnQgZXZlbnQgaWYgbm8gc2Nyb2xsYWJsZSBub2Rlcy5cbiAgaWYgKCFsYXN0U2Nyb2xsYWJsZU5vZGVzLmxlbmd0aCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIC8vIERvbid0IHByZXZlbnQgdG91Y2hzdGFydCBldmVudCBpbnNpZGUgdGhlIGxvY2tpbmcgZWxlbWVudCB3aGVuIGl0IGhhc1xuICAvLyBzY3JvbGxhYmxlIG5vZGVzLlxuICBpZiAoZXZlbnQudHlwZSA9PT0gJ3RvdWNoc3RhcnQnKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEdldCBkZWx0YVgvWS5cbiAgdmFyIGluZm8gPSBfZ2V0U2Nyb2xsSW5mbyhldmVudCk7XG4gIC8vIFByZXZlbnQgaWYgdGhlcmUgaXMgbm8gY2hpbGQgdGhhdCBjYW4gc2Nyb2xsLlxuICByZXR1cm4gIV9nZXRTY3JvbGxpbmdOb2RlKGxhc3RTY3JvbGxhYmxlTm9kZXMsIGluZm8uZGVsdGFYLCBpbmZvLmRlbHRhWSk7XG59XG5cbi8qKlxuICogUmV0dXJucyBhbiBhcnJheSBvZiBzY3JvbGxhYmxlIG5vZGVzIHVwIHRvIHRoZSBjdXJyZW50IGxvY2tpbmcgZWxlbWVudCxcbiAqIHdoaWNoIGlzIGluY2x1ZGVkIHRvbyBpZiBzY3JvbGxhYmxlLlxuICogQHBhcmFtIHshQXJyYXk8IU5vZGU+fSBub2Rlc1xuICogQHJldHVybiB7IUFycmF5PCFOb2RlPn0gc2Nyb2xsYWJsZXNcbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U2Nyb2xsYWJsZU5vZGVzKG5vZGVzKSB7XG4gIHZhciBzY3JvbGxhYmxlcyA9IFtdO1xuICB2YXIgbG9ja2luZ0luZGV4ID0gbm9kZXMuaW5kZXhPZihjdXJyZW50TG9ja2luZ0VsZW1lbnQpO1xuICAvLyBMb29wIGZyb20gcm9vdCB0YXJnZXQgdG8gbG9ja2luZyBlbGVtZW50IChpbmNsdWRlZCkuXG4gIGZvciAodmFyIGkgPSAwOyBpIDw9IGxvY2tpbmdJbmRleDsgaSsrKSB7XG4gICAgLy8gU2tpcCBub24tRWxlbWVudCBub2Rlcy5cbiAgICBpZiAobm9kZXNbaV0ubm9kZVR5cGUgIT09IE5vZGUuRUxFTUVOVF9OT0RFKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgdmFyIG5vZGUgPSAvKiogQHR5cGUgeyFFbGVtZW50fSAqLyAobm9kZXNbaV0pO1xuICAgIC8vIENoZWNrIGlubGluZSBzdHlsZSBiZWZvcmUgY2hlY2tpbmcgY29tcHV0ZWQgc3R5bGUuXG4gICAgdmFyIHN0eWxlID0gbm9kZS5zdHlsZTtcbiAgICBpZiAoc3R5bGUub3ZlcmZsb3cgIT09ICdzY3JvbGwnICYmIHN0eWxlLm92ZXJmbG93ICE9PSAnYXV0bycpIHtcbiAgICAgIHN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUobm9kZSk7XG4gICAgfVxuICAgIGlmIChzdHlsZS5vdmVyZmxvdyA9PT0gJ3Njcm9sbCcgfHwgc3R5bGUub3ZlcmZsb3cgPT09ICdhdXRvJykge1xuICAgICAgc2Nyb2xsYWJsZXMucHVzaChub2RlKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHNjcm9sbGFibGVzO1xufVxuXG4vKipcbiAqIFJldHVybnMgdGhlIG5vZGUgdGhhdCBpcyBzY3JvbGxpbmcuIElmIHRoZXJlIGlzIG5vIHNjcm9sbGluZyxcbiAqIHJldHVybnMgdW5kZWZpbmVkLlxuICogQHBhcmFtIHshQXJyYXk8IU5vZGU+fSBub2Rlc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWCBTY3JvbGwgZGVsdGEgb24gdGhlIHgtYXhpc1xuICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhWSBTY3JvbGwgZGVsdGEgb24gdGhlIHktYXhpc1xuICogQHJldHVybiB7IU5vZGV8dW5kZWZpbmVkfVxuICogQHByaXZhdGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIF9nZXRTY3JvbGxpbmdOb2RlKG5vZGVzLCBkZWx0YVgsIGRlbHRhWSkge1xuICAvLyBObyBzY3JvbGwuXG4gIGlmICghZGVsdGFYICYmICFkZWx0YVkpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgLy8gQ2hlY2sgb25seSBvbmUgYXhpcyBhY2NvcmRpbmcgdG8gd2hlcmUgdGhlcmUgaXMgbW9yZSBzY3JvbGwuXG4gIC8vIFByZWZlciB2ZXJ0aWNhbCB0byBob3Jpem9udGFsLlxuICB2YXIgdmVydGljYWxTY3JvbGwgPSBNYXRoLmFicyhkZWx0YVkpID49IE1hdGguYWJzKGRlbHRhWCk7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbm9kZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgbm9kZSA9IG5vZGVzW2ldO1xuICAgIHZhciBjYW5TY3JvbGwgPSBmYWxzZTtcbiAgICBpZiAodmVydGljYWxTY3JvbGwpIHtcbiAgICAgIC8vIGRlbHRhIDwgMCBpcyBzY3JvbGwgdXAsIGRlbHRhID4gMCBpcyBzY3JvbGwgZG93bi5cbiAgICAgIGNhblNjcm9sbCA9IGRlbHRhWSA8IDAgP1xuICAgICAgICAgIG5vZGUuc2Nyb2xsVG9wID4gMCA6XG4gICAgICAgICAgbm9kZS5zY3JvbGxUb3AgPCBub2RlLnNjcm9sbEhlaWdodCAtIG5vZGUuY2xpZW50SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBkZWx0YSA8IDAgaXMgc2Nyb2xsIGxlZnQsIGRlbHRhID4gMCBpcyBzY3JvbGwgcmlnaHQuXG4gICAgICBjYW5TY3JvbGwgPSBkZWx0YVggPCAwID9cbiAgICAgICAgICBub2RlLnNjcm9sbExlZnQgPiAwIDpcbiAgICAgICAgICBub2RlLnNjcm9sbExlZnQgPCBub2RlLnNjcm9sbFdpZHRoIC0gbm9kZS5jbGllbnRXaWR0aDtcbiAgICB9XG4gICAgaWYgKGNhblNjcm9sbCkge1xuICAgICAgcmV0dXJuIG5vZGU7XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogUmV0dXJucyBzY3JvbGwgYGRlbHRhWGAgYW5kIGBkZWx0YVlgLlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50IFRoZSBzY3JvbGwgZXZlbnRcbiAqIEByZXR1cm4ge3tkZWx0YVg6IG51bWJlciwgZGVsdGFZOiBudW1iZXJ9fSBPYmplY3QgY29udGFpbmluZyB0aGVcbiAqIHgtYXhpcyBzY3JvbGwgZGVsdGEgKHBvc2l0aXZlOiBzY3JvbGwgcmlnaHQsIG5lZ2F0aXZlOiBzY3JvbGwgbGVmdCxcbiAqIDA6IG5vIHNjcm9sbCksIGFuZCB0aGUgeS1heGlzIHNjcm9sbCBkZWx0YSAocG9zaXRpdmU6IHNjcm9sbCBkb3duLFxuICogbmVnYXRpdmU6IHNjcm9sbCB1cCwgMDogbm8gc2Nyb2xsKS5cbiAqIEBwcml2YXRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBfZ2V0U2Nyb2xsSW5mbyhldmVudCkge1xuICB2YXIgaW5mbyA9IHtkZWx0YVg6IGV2ZW50LmRlbHRhWCwgZGVsdGFZOiBldmVudC5kZWx0YVl9O1xuICAvLyBBbHJlYWR5IGF2YWlsYWJsZS5cbiAgaWYgKCdkZWx0YVgnIGluIGV2ZW50KSB7XG4gICAgLy8gZG8gbm90aGluZywgdmFsdWVzIGFyZSBhbHJlYWR5IGdvb2QuXG4gIH1cbiAgLy8gU2FmYXJpIGhhcyBzY3JvbGwgaW5mbyBpbiBgd2hlZWxEZWx0YVgvWWAuXG4gIGVsc2UgaWYgKCd3aGVlbERlbHRhWCcgaW4gZXZlbnQgJiYgJ3doZWVsRGVsdGFZJyBpbiBldmVudCkge1xuICAgIGluZm8uZGVsdGFYID0gLWV2ZW50LndoZWVsRGVsdGFYO1xuICAgIGluZm8uZGVsdGFZID0gLWV2ZW50LndoZWVsRGVsdGFZO1xuICB9XG4gIC8vIElFMTAgaGFzIG9ubHkgdmVydGljYWwgc2Nyb2xsIGluZm8gaW4gYHdoZWVsRGVsdGFgLlxuICBlbHNlIGlmICgnd2hlZWxEZWx0YScgaW4gZXZlbnQpIHtcbiAgICBpbmZvLmRlbHRhWCA9IDA7XG4gICAgaW5mby5kZWx0YVkgPSAtZXZlbnQud2hlZWxEZWx0YTtcbiAgfVxuICAvLyBGaXJlZm94IGhhcyBzY3JvbGwgaW5mbyBpbiBgZGV0YWlsYCBhbmQgYGF4aXNgLlxuICBlbHNlIGlmICgnYXhpcycgaW4gZXZlbnQpIHtcbiAgICBpbmZvLmRlbHRhWCA9IGV2ZW50LmF4aXMgPT09IDEgPyBldmVudC5kZXRhaWwgOiAwO1xuICAgIGluZm8uZGVsdGFZID0gZXZlbnQuYXhpcyA9PT0gMiA/IGV2ZW50LmRldGFpbCA6IDA7XG4gIH1cbiAgLy8gT24gbW9iaWxlIGRldmljZXMsIGNhbGN1bGF0ZSBzY3JvbGwgZGlyZWN0aW9uLlxuICBlbHNlIGlmIChldmVudC50YXJnZXRUb3VjaGVzKSB7XG4gICAgdmFyIHRvdWNoID0gZXZlbnQudGFyZ2V0VG91Y2hlc1swXTtcbiAgICAvLyBUb3VjaCBtb3ZlcyBmcm9tIHJpZ2h0IHRvIGxlZnQgPT4gc2Nyb2xsaW5nIGdvZXMgcmlnaHQuXG4gICAgaW5mby5kZWx0YVggPSBsYXN0VG91Y2hQb3NpdGlvbi5wYWdlWCAtIHRvdWNoLnBhZ2VYO1xuICAgIC8vIFRvdWNoIG1vdmVzIGZyb20gZG93biB0byB1cCA9PiBzY3JvbGxpbmcgZ29lcyBkb3duLlxuICAgIGluZm8uZGVsdGFZID0gbGFzdFRvdWNoUG9zaXRpb24ucGFnZVkgLSB0b3VjaC5wYWdlWTtcbiAgfVxuICByZXR1cm4gaW5mbztcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnREE7QUFFQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBY0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQTVGQTtBQUNBO0FBOEZBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFHQTtBQUpBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBekJBO0FBZ0NBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQU9BO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUtBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUVBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFMQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL21CQTs7Ozs7Ozs7Ozs7O0FDOURBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBRUE7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FBV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuTUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7OztBQWVBO0FBQ0E7QUF5QkE7QUFFQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFMQTtBQWNBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0hBOzs7Ozs7Ozs7Ozs7QUMvQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7OztBQUdBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7OztBQU1BO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQURBO0FBaEhBO0FBc0hBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFaQTtBQWNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBdHRCQTtBQTB0QkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtEQTtBQUdBOzs7OztBQUtBOzs7Ozs7Ozs7QUFTQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuekJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBS0E7QUFDQTs7OztBQUlBO0FBRUE7Ozs7OztBQUtBO0FBRUE7Ozs7O0FBSUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBMVVBO0FBNlVBOzs7Ozs7Ozs7Ozs7QUNwWUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTs7Ozs7QUFJQTtBQUNBOzs7O0FBR0E7QUFDQTs7OztBQUdBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7O0FBTUE7QUFJQTs7Ozs7OztBQU1BO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==