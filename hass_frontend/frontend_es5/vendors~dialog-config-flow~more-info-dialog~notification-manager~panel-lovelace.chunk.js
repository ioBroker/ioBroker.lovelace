(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~dialog-config-flow~more-info-dialog~notification-manager~panel-lovelace"],{

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
//# sourceMappingURL=vendors~dialog-config-flow~more-info-dialog~notification-manager~panel-lovelace.chunk.js.map