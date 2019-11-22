(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~0fce0282"],{

/***/ "./node_modules/@polymer/iron-list/iron-list.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-list/iron-list.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js */ "./node_modules/@polymer/iron-scroll-target-behavior/iron-scroll-target-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/mutable-data-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/mutable-data-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/templatizer-behavior.js */ "./node_modules/@polymer/polymer/lib/legacy/templatizer-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/path.js */ "./node_modules/@polymer/polymer/lib/utils/path.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      @media only screen and (-webkit-max-device-pixel-ratio: 1) {\n        :host {\n          will-change: transform;\n        }\n      }\n\n      #items {\n        @apply --iron-list-items-container;\n        position: relative;\n      }\n\n      :host(:not([grid])) #items > ::slotted(*) {\n        width: 100%;\n      }\n\n      #items > ::slotted(*) {\n        box-sizing: border-box;\n        margin: 0;\n        position: absolute;\n        top: 0;\n        will-change: transform;\n      }\n    </style>\n\n    <array-selector id=\"selector\" items=\"{{items}}\" selected=\"{{selectedItems}}\" selected-item=\"{{selectedItem}}\"></array-selector>\n\n    <div id=\"items\">\n      <slot></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

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














var IOS = navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/);
var IOS_TOUCH_SCROLLING = IOS && IOS[1] >= 8;
var DEFAULT_PHYSICAL_COUNT = 3;
var HIDDEN_Y = '-10000px';
var SECRET_TABINDEX = -100;
/**

`iron-list` displays a virtual, 'infinite' list. The template inside
the iron-list element represents the DOM to create for each list item.
The `items` property specifies an array of list item data.

For performance reasons, not every item in the list is rendered at once;
instead a small subset of actual template elements *(enough to fill the
viewport)* are rendered and reused as the user scrolls. As such, it is important
that all state of the list template is bound to the model driving it, since the
view may be reused with a new model at any time. Particularly, any state that
may change as the result of a user interaction with the list item must be bound
to the model to avoid view state inconsistency.

### Sizing iron-list

`iron-list` must either be explicitly sized, or delegate scrolling to an
explicitly sized parent. By "explicitly sized", we mean it either has an
explicit CSS `height` property set via a class or inline style, or else is sized
by other layout means (e.g. the `flex` or `fit` classes).

#### Flexbox - [jsbin](https://jsbin.com/vejoni/edit?html,output)

```html
<template is="x-list">
  <style>
    :host {
      display: block;
      height: 100vh;
      display: flex;
      flex-direction: column;
    }

    iron-list {
      flex: 1 1 auto;
    }
  </style>
  <app-toolbar>App name</app-toolbar>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Explicit size - [jsbin](https://jsbin.com/vopucus/edit?html,output)
```html
<template is="x-list">
  <style>
    :host {
      display: block;
    }

    iron-list {
      height: 100vh; /* don't use % values unless the parent element is sized.
*\/
    }
  </style>
  <iron-list items="[[items]]">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</template>
```
#### Main document scrolling -
[jsbin](https://jsbin.com/wevirow/edit?html,output)
```html
<head>
  <style>
    body {
      height: 100vh;
      margin: 0;
      display: flex;
      flex-direction: column;
    }

    app-toolbar {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
    }

    iron-list {
      /* add padding since the app-toolbar is fixed at the top *\/
      padding-top: 64px;
    }
  </style>
</head>
<body>
  <app-toolbar>App name</app-toolbar>
  <iron-list scroll-target="document">
    <template>
      <div>
        ...
      </div>
    </template>
  </iron-list>
</body>
```

`iron-list` must be given a `<template>` which contains exactly one element. In
the examples above we used a `<div>`, but you can provide any element (including
custom elements).

### Template model

List item templates should bind to template models of the following structure:

```js
{
  index: 0,        // index in the item array
  selected: false, // true if the current item is selected
  tabIndex: -1,    // a dynamically generated tabIndex for focus management
  item: {}         // user data corresponding to items[index]
}
```

Alternatively, you can change the property name used as data index by changing
the `indexAs` property. The `as` property defines the name of the variable to
add to the binding scope for the array.

For example, given the following `data` array:

##### data.json

```js
[
  {"name": "Bob"},
  {"name": "Tim"},
  {"name": "Mike"}
]
```

The following code would render the list (note the name property is bound from
the model object provided to the template scope):

```html
<iron-ajax url="data.json" last-response="{{data}}" auto></iron-ajax>
<iron-list items="[[data]]" as="item">
  <template>
    <div>
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Grid layout

`iron-list` supports a grid layout in addition to linear layout by setting
the `grid` attribute.  In this case, the list template item must have both fixed
width and height (e.g. via CSS). Based on this, the number of items
per row are determined automatically based on the size of the list viewport.

### Accessibility

`iron-list` automatically manages the focus state for the items. It also
provides a `tabIndex` property within the template scope that can be used for
keyboard navigation. For example, users can press the up and down keys to move
to previous and next items in the list:

```html
<iron-list items="[[data]]" as="item">
  <template>
    <div tabindex$="[[tabIndex]]">
      Name: [[item.name]]
    </div>
  </template>
</iron-list>
```

### Styling

You can use the `--iron-list-items-container` mixin to style the container of
items:

```css
iron-list {
 --iron-list-items-container: {
    margin: auto;
  };
}
```

### Resizing

`iron-list` lays out the items when it receives a notification via the
`iron-resize` event. This event is fired by any element that implements
`IronResizableBehavior`.

By default, elements such as `iron-pages`, `paper-tabs` or `paper-dialog` will
trigger this event automatically. If you hide the list manually (e.g. you use
`display: none`) you might want to implement `IronResizableBehavior` or fire
this event manually right after the list became visible again. For example:

```js
document.querySelector('iron-list').fire('iron-resize');
```

### When should `<iron-list>` be used?

`iron-list` should be used when a page has significantly more DOM nodes than the
ones visible on the screen. e.g. the page has 500 nodes, but only 20 are visible
at a time. This is why we refer to it as a `virtual` list. In this case, a
`dom-repeat` will still create 500 nodes which could slow down the web app, but
`iron-list` will only create 20.

However, having an `iron-list` does not mean that you can load all the data at
once. Say you have a million records in the database, you want to split the data
into pages so you can bring in a page at the time. The page could contain 500
items, and iron-list will only render 20.

@element iron-list
@demo demo/index.html

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  /** @override */
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject()),
  is: 'iron-list',
  properties: {
    /**
     * An array containing items determining how many instances of the template
     * to stamp and that that each template instance should bind to.
     */
    items: {
      type: Array
    },

    /**
     * The name of the variable to add to the binding scope for the array
     * element associated with a given template instance.
     */
    as: {
      type: String,
      value: 'item'
    },

    /**
     * The name of the variable to add to the binding scope with the index
     * for the row.
     */
    indexAs: {
      type: String,
      value: 'index'
    },

    /**
     * The name of the variable to add to the binding scope to indicate
     * if the row is selected.
     */
    selectedAs: {
      type: String,
      value: 'selected'
    },

    /**
     * When true, the list is rendered as a grid. Grid items must have
     * fixed width and height set via CSS. e.g.
     *
     * ```html
     * <iron-list grid>
     *   <template>
     *      <div style="width: 100px; height: 100px;"> 100x100 </div>
     *   </template>
     * </iron-list>
     * ```
     */
    grid: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '_gridChanged'
    },

    /**
     * When true, tapping a row will select the item, placing its data model
     * in the set of selected items retrievable via the selection property.
     *
     * Note that tapping focusable elements within the list item will not
     * result in selection, since they are presumed to have their * own action.
     */
    selectionEnabled: {
      type: Boolean,
      value: false
    },

    /**
     * When `multiSelection` is false, this is the currently selected item, or
     * `null` if no item is selected.
     */
    selectedItem: {
      type: Object,
      notify: true
    },

    /**
     * When `multiSelection` is true, this is an array that contains the
     * selected items.
     */
    selectedItems: {
      type: Object,
      notify: true
    },

    /**
     * When `true`, multiple items may be selected at once (in this case,
     * `selected` is an array of currently selected items).  When `false`,
     * only one item may be selected at a time.
     */
    multiSelection: {
      type: Boolean,
      value: false
    },

    /**
     * The offset top from the scrolling element to the iron-list element.
     * This value can be computed using the position returned by
     * `getBoundingClientRect()` although it's preferred to use a constant value
     * when possible.
     *
     * This property is useful when an external scrolling element is used and
     * there's some offset between the scrolling element and the list. For
     * example: a header is placed above the list.
     */
    scrollOffset: {
      type: Number,
      value: 0
    }
  },
  observers: ['_itemsChanged(items.*)', '_selectionEnabledChanged(selectionEnabled)', '_multiSelectionChanged(multiSelection)', '_setOverflow(scrollTarget, scrollOffset)'],
  behaviors: [_polymer_polymer_lib_legacy_templatizer_behavior_js__WEBPACK_IMPORTED_MODULE_7__["Templatizer"], _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_2__["IronResizableBehavior"], _polymer_iron_scroll_target_behavior_iron_scroll_target_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronScrollTargetBehavior"], _polymer_polymer_lib_legacy_mutable_data_behavior_js__WEBPACK_IMPORTED_MODULE_4__["OptionalMutableDataBehavior"]],

  /**
   * The ratio of hidden tiles that should remain in the scroll direction.
   * Recommended value ~0.5, so it will distribute tiles evenly in both
   * directions.
   */
  _ratio: 0.5,

  /**
   * The padding-top value for the list.
   */
  _scrollerPaddingTop: 0,

  /**
   * This value is a cached value of `scrollTop` from the last `scroll` event.
   */
  _scrollPosition: 0,

  /**
   * The sum of the heights of all the tiles in the DOM.
   */
  _physicalSize: 0,

  /**
   * The average `offsetHeight` of the tiles observed till now.
   */
  _physicalAverage: 0,

  /**
   * The number of tiles which `offsetHeight` > 0 observed until now.
   */
  _physicalAverageCount: 0,

  /**
   * The Y position of the item rendered in the `_physicalStart`
   * tile relative to the scrolling list.
   */
  _physicalTop: 0,

  /**
   * The number of items in the list.
   */
  _virtualCount: 0,

  /**
   * The estimated scroll height based on `_physicalAverage`
   */
  _estScrollHeight: 0,

  /**
   * The scroll height of the dom node
   */
  _scrollHeight: 0,

  /**
   * The height of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportHeight: 0,

  /**
   * The width of the list. This is referred as the viewport in the context of
   * list.
   */
  _viewportWidth: 0,

  /**
   * An array of DOM nodes that are currently in the tree
   * @type {?Array<!HTMLElement>}
   */
  _physicalItems: null,

  /**
   * An array of heights for each item in `_physicalItems`
   * @type {?Array<number>}
   */
  _physicalSizes: null,

  /**
   * A cached value for the first visible index.
   * See `firstVisibleIndex`
   * @type {?number}
   */
  _firstVisibleIndexVal: null,

  /**
   * A cached value for the last visible index.
   * See `lastVisibleIndex`
   * @type {?number}
   */
  _lastVisibleIndexVal: null,

  /**
   * The max number of pages to render. One page is equivalent to the height of
   * the list.
   */
  _maxPages: 2,

  /**
   * The currently focused physical item.
   */
  _focusedItem: null,

  /**
   * The virtual index of the focused item.
   */
  _focusedVirtualIndex: -1,

  /**
   * The physical index of the focused item.
   */
  _focusedPhysicalIndex: -1,

  /**
   * The the item that is focused if it is moved offscreen.
   * @private {?HTMLElement}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
   * @type {?HTMLElement}
   */
  _focusBackfillItem: null,

  /**
   * The maximum items per row
   */
  _itemsPerRow: 1,

  /**
   * The width of each grid item
   */
  _itemWidth: 0,

  /**
   * The height of the row in grid layout.
   */
  _rowHeight: 0,

  /**
   * The cost of stamping a template in ms.
   */
  _templateCost: 0,

  /**
   * Needed to pass event.model property to declarative event handlers -
   * see polymer/polymer#4339.
   */
  _parentModel: true,

  /**
   * The bottom of the physical content.
   */
  get _physicalBottom() {
    return this._physicalTop + this._physicalSize;
  },

  /**
   * The bottom of the scroll.
   */
  get _scrollBottom() {
    return this._scrollPosition + this._viewportHeight;
  },

  /**
   * The n-th item rendered in the last physical item.
   */
  get _virtualEnd() {
    return this._virtualStart + this._physicalCount - 1;
  },

  /**
   * The height of the physical content that isn't on the screen.
   */
  get _hiddenContentSize() {
    var size = this.grid ? this._physicalRows * this._rowHeight : this._physicalSize;
    return size - this._viewportHeight;
  },

  /**
   * The parent node for the _userTemplate.
   */
  get _itemsParent() {
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(this._userTemplate).parentNode);
  },

  /**
   * The maximum scroll top value.
   */
  get _maxScrollTop() {
    return this._estScrollHeight - this._viewportHeight + this._scrollOffset;
  },

  /**
   * The largest n-th value for an item such that it can be rendered in
   * `_physicalStart`.
   */
  get _maxVirtualStart() {
    var virtualCount = this._convertIndexToCompleteRow(this._virtualCount);

    return Math.max(0, virtualCount - this._physicalCount);
  },

  set _virtualStart(val) {
    val = this._clamp(val, 0, this._maxVirtualStart);

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._virtualStartVal = val;
  },

  get _virtualStart() {
    return this._virtualStartVal || 0;
  },

  /**
   * The k-th tile that is at the top of the scrolling list.
   */
  set _physicalStart(val) {
    val = val % this._physicalCount;

    if (val < 0) {
      val = this._physicalCount + val;
    }

    if (this.grid) {
      val = val - val % this._itemsPerRow;
    }

    this._physicalStartVal = val;
  },

  get _physicalStart() {
    return this._physicalStartVal || 0;
  },

  /**
   * The k-th tile that is at the bottom of the scrolling list.
   */
  get _physicalEnd() {
    return (this._physicalStart + this._physicalCount - 1) % this._physicalCount;
  },

  set _physicalCount(val) {
    this._physicalCountVal = val;
  },

  get _physicalCount() {
    return this._physicalCountVal || 0;
  },

  /**
   * An optimal physical size such that we will have enough physical items
   * to fill up the viewport and recycle when the user scrolls.
   *
   * This default value assumes that we will at least have the equivalent
   * to a viewport of physical items above and below the user's viewport.
   */
  get _optPhysicalSize() {
    return this._viewportHeight === 0 ? Infinity : this._viewportHeight * this._maxPages;
  },

  /**
   * True if the current list is visible.
   */
  get _isVisible() {
    return Boolean(this.offsetWidth || this.offsetHeight);
  },

  /**
   * Gets the index of the first visible item in the viewport.
   *
   * @type {number}
   */
  get firstVisibleIndex() {
    var idx = this._firstVisibleIndexVal;

    if (idx == null) {
      var physicalOffset = this._physicalTop + this._scrollOffset;
      idx = this._iterateItems(function (pidx, vidx) {
        physicalOffset += this._getPhysicalSizeIncrement(pidx);

        if (physicalOffset > this._scrollPosition) {
          return this.grid ? vidx - vidx % this._itemsPerRow : vidx;
        } // Handle a partially rendered final row in grid mode


        if (this.grid && this._virtualCount - 1 === vidx) {
          return vidx - vidx % this._itemsPerRow;
        }
      }) || 0;
      this._firstVisibleIndexVal = idx;
    }

    return idx;
  },

  /**
   * Gets the index of the last visible item in the viewport.
   *
   * @type {number}
   */
  get lastVisibleIndex() {
    var idx = this._lastVisibleIndexVal;

    if (idx == null) {
      if (this.grid) {
        idx = Math.min(this._virtualCount, this.firstVisibleIndex + this._estRowsInView * this._itemsPerRow - 1);
      } else {
        var physicalOffset = this._physicalTop + this._scrollOffset;

        this._iterateItems(function (pidx, vidx) {
          if (physicalOffset < this._scrollBottom) {
            idx = vidx;
          }

          physicalOffset += this._getPhysicalSizeIncrement(pidx);
        });
      }

      this._lastVisibleIndexVal = idx;
    }

    return idx;
  },

  get _defaultScrollTarget() {
    return this;
  },

  get _virtualRowCount() {
    return Math.ceil(this._virtualCount / this._itemsPerRow);
  },

  get _estRowsInView() {
    return Math.ceil(this._viewportHeight / this._rowHeight);
  },

  get _physicalRows() {
    return Math.ceil(this._physicalCount / this._itemsPerRow);
  },

  get _scrollOffset() {
    return this._scrollerPaddingTop + this.scrollOffset;
  },

  /** @override */
  ready: function ready() {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },

  /** @override */
  attached: function attached() {
    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]); // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.


    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },

  /** @override */
  detached: function detached() {
    this.unlisten(this, 'iron-resize', '_resizeHandler');
    this.unlisten(this, 'keydown', '_keydownHandler');
  },

  /**
   * Set the overflow property if this element has its own scrolling region
   */
  _setOverflow: function _setOverflow(scrollTarget) {
    this.style.webkitOverflowScrolling = scrollTarget === this ? 'touch' : '';
    this.style.overflowY = scrollTarget === this ? 'auto' : ''; // Clear cache.

    this._lastVisibleIndexVal = null;
    this._firstVisibleIndexVal = null;

    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Invoke this method if you dynamically update the viewport's
   * size or CSS padding.
   *
   * @method updateViewportBoundaries
   */
  updateViewportBoundaries: function updateViewportBoundaries() {
    var styles = window.getComputedStyle(this);
    this._scrollerPaddingTop = this.scrollTarget === this ? 0 : parseInt(styles['padding-top'], 10);
    this._isRTL = Boolean(styles.direction === 'rtl');
    this._viewportWidth = this.$.items.offsetWidth;
    this._viewportHeight = this._scrollTargetHeight;
    this.grid && this._updateGridMetrics();
  },

  /**
   * Recycles the physical items when needed.
   */
  _scrollHandler: function _scrollHandler() {
    var scrollTop = Math.max(0, Math.min(this._maxScrollTop, this._scrollTop));
    var delta = scrollTop - this._scrollPosition;
    var isScrollingDown = delta >= 0; // Track the current scroll position.

    this._scrollPosition = scrollTop; // Clear indexes for first and last visible indexes.

    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null; // Random access.

    if (Math.abs(delta) > this._physicalSize && this._physicalSize > 0) {
      delta = delta - this._scrollOffset;

      var idxAdjustment = Math.round(delta / this._physicalAverage) * this._itemsPerRow;

      this._virtualStart = this._virtualStart + idxAdjustment;
      this._physicalStart = this._physicalStart + idxAdjustment; // Estimate new physical offset based on the virtual start index.
      // adjusts the physical start position to stay in sync with the clamped
      // virtual start index. It's critical not to let this value be
      // more than the scroll position however, since that would result in
      // the physical items not covering the viewport, and leading to
      // _increasePoolIfNeeded to run away creating items to try to fill it.

      this._physicalTop = Math.min(Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage, this._scrollPosition);

      this._update();
    } else if (this._physicalCount > 0) {
      var reusables = this._getReusables(isScrollingDown);

      if (isScrollingDown) {
        this._physicalTop = reusables.physicalTop;
        this._virtualStart = this._virtualStart + reusables.indexes.length;
        this._physicalStart = this._physicalStart + reusables.indexes.length;
      } else {
        this._virtualStart = this._virtualStart - reusables.indexes.length;
        this._physicalStart = this._physicalStart - reusables.indexes.length;
      }

      this._update(reusables.indexes, isScrollingDown ? null : reusables.indexes);

      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, 0), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    }
  },

  /**
   * Returns an object that contains the indexes of the physical items
   * that might be reused and the physicalTop.
   *
   * @param {boolean} fromTop If the potential reusable items are above the scrolling region.
   */
  _getReusables: function _getReusables(fromTop) {
    var ith, lastIth, offsetContent, physicalItemHeight;
    var idxs = [];
    var protectedOffsetContent = this._hiddenContentSize * this._ratio;
    var virtualStart = this._virtualStart;
    var virtualEnd = this._virtualEnd;
    var physicalCount = this._physicalCount;
    var top = this._physicalTop + this._scrollOffset;
    var bottom = this._physicalBottom + this._scrollOffset; // This may be called outside of a scrollHandler, so use last cached position

    var scrollTop = this._scrollPosition;
    var scrollBottom = this._scrollBottom;

    if (fromTop) {
      ith = this._physicalStart;
      lastIth = this._physicalEnd;
      offsetContent = scrollTop - top;
    } else {
      ith = this._physicalEnd;
      lastIth = this._physicalStart;
      offsetContent = bottom - scrollBottom;
    }

    while (true) {
      physicalItemHeight = this._getPhysicalSizeIncrement(ith);
      offsetContent = offsetContent - physicalItemHeight;

      if (idxs.length >= physicalCount || offsetContent <= protectedOffsetContent) {
        break;
      }

      if (fromTop) {
        // Check that index is within the valid range.
        if (virtualEnd + idxs.length + 1 >= this._virtualCount) {
          break;
        } // Check that the index is not visible.


        if (top + physicalItemHeight >= scrollTop - this._scrollOffset) {
          break;
        }

        idxs.push(ith);
        top = top + physicalItemHeight;
        ith = (ith + 1) % physicalCount;
      } else {
        // Check that index is within the valid range.
        if (virtualStart - idxs.length <= 0) {
          break;
        } // Check that the index is not visible.


        if (top + this._physicalSize - physicalItemHeight <= scrollBottom) {
          break;
        }

        idxs.push(ith);
        top = top - physicalItemHeight;
        ith = ith === 0 ? physicalCount - 1 : ith - 1;
      }
    }

    return {
      indexes: idxs,
      physicalTop: top - this._scrollOffset
    };
  },

  /**
   * Update the list of items, starting from the `_virtualStart` item.
   * @param {!Array<number>=} itemSet
   * @param {!Array<number>=} movingUp
   */
  _update: function _update(itemSet, movingUp) {
    if (itemSet && itemSet.length === 0 || this._physicalCount === 0) {
      return;
    }

    this._manageFocus();

    this._assignModels(itemSet);

    this._updateMetrics(itemSet); // Adjust offset after measuring.


    if (movingUp) {
      while (movingUp.length) {
        var idx = movingUp.pop();
        this._physicalTop -= this._getPhysicalSizeIncrement(idx);
      }
    }

    this._positionItems();

    this._updateScrollerSize();
  },

  /**
   * Creates a pool of DOM elements and attaches them to the local dom.
   *
   * @param {number} size Size of the pool
   */
  _createPool: function _createPool(size) {
    this._ensureTemplatized();

    var i, inst;
    var physicalItems = new Array(size);

    for (i = 0; i < size; i++) {
      inst = this.stamp(null); // TODO(blasten):
      // First element child is item; Safari doesn't support children[0]
      // on a doc fragment. Test this to see if it still matters.

      physicalItems[i] = inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    }

    return physicalItems;
  },
  _isClientFull: function _isClientFull() {
    return this._scrollBottom != 0 && this._physicalBottom - 1 >= this._scrollBottom && this._physicalTop <= this._scrollPosition;
  },

  /**
   * Increases the pool size.
   */
  _increasePoolIfNeeded: function _increasePoolIfNeeded(count) {
    var nextPhysicalCount = this._clamp(this._physicalCount + count, DEFAULT_PHYSICAL_COUNT, this._virtualCount - this._virtualStart);

    nextPhysicalCount = this._convertIndexToCompleteRow(nextPhysicalCount);

    if (this.grid) {
      var correction = nextPhysicalCount % this._itemsPerRow;

      if (correction && nextPhysicalCount - correction <= this._physicalCount) {
        nextPhysicalCount += this._itemsPerRow;
      }

      nextPhysicalCount -= correction;
    }

    var delta = nextPhysicalCount - this._physicalCount;
    var nextIncrease = Math.round(this._physicalCount * 0.5);

    if (delta < 0) {
      return;
    }

    if (delta > 0) {
      var ts = window.performance.now(); // Concat arrays in place.

      [].push.apply(this._physicalItems, this._createPool(delta)); // Push 0s into physicalSizes. Can't use Array.fill because IE11 doesn't
      // support it.

      for (var i = 0; i < delta; i++) {
        this._physicalSizes.push(0);
      }

      this._physicalCount = this._physicalCount + delta; // Update the physical start if it needs to preserve the model of the
      // focused item. In this situation, the focused item is currently rendered
      // and its model would have changed after increasing the pool if the
      // physical start remained unchanged.

      if (this._physicalStart > this._physicalEnd && this._isIndexRendered(this._focusedVirtualIndex) && this._getPhysicalIndex(this._focusedVirtualIndex) < this._physicalEnd) {
        this._physicalStart = this._physicalStart + delta;
      }

      this._update();

      this._templateCost = (window.performance.now() - ts) / delta;
      nextIncrease = Math.round(this._physicalCount * 0.5);
    } // The upper bounds is not fixed when dealing with a grid that doesn't
    // fill it's last row with the exact number of items per row.


    if (this._virtualEnd >= this._virtualCount - 1 || nextIncrease === 0) {// Do nothing.
    } else if (!this._isClientFull()) {
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, nextIncrease), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["microTask"]);
    } else if (this._physicalSize < this._optPhysicalSize) {
      // Yield and increase the pool during idle time until the physical size is
      // optimal.
      this._debounce('_increasePoolIfNeeded', this._increasePoolIfNeeded.bind(this, this._clamp(Math.round(50 / this._templateCost), 1, nextIncrease)), _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["idlePeriod"]);
    }
  },

  /**
   * Renders the a new list.
   */
  _render: function _render() {
    if (!this.isAttached || !this._isVisible) {
      return;
    }

    if (this._physicalCount !== 0) {
      var reusables = this._getReusables(true);

      this._physicalTop = reusables.physicalTop;
      this._virtualStart = this._virtualStart + reusables.indexes.length;
      this._physicalStart = this._physicalStart + reusables.indexes.length;

      this._update(reusables.indexes);

      this._update();

      this._increasePoolIfNeeded(0);
    } else if (this._virtualCount > 0) {
      // Initial render
      this.updateViewportBoundaries();

      this._increasePoolIfNeeded(DEFAULT_PHYSICAL_COUNT);
    }
  },

  /**
   * Templetizes the user template.
   */
  _ensureTemplatized: function _ensureTemplatized() {
    if (this.ctor) {
      return;
    }

    this._userTemplate =
    /** @type {!HTMLTemplateElement} */
    this.queryEffectiveChildren('template');

    if (!this._userTemplate) {
      console.warn('iron-list requires a template to be provided in light-dom');
    }

    var instanceProps = {};
    instanceProps.__key__ = true;
    instanceProps[this.as] = true;
    instanceProps[this.indexAs] = true;
    instanceProps[this.selectedAs] = true;
    instanceProps.tabIndex = true;
    this._instanceProps = instanceProps;
    this.templatize(this._userTemplate, this.mutableData);
  },
  _gridChanged: function _gridChanged(newGrid, oldGrid) {
    if (typeof oldGrid === 'undefined') return;
    this.notifyResize();
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    newGrid && this._updateGridMetrics();
  },

  /**
   * Called when the items have changed. That is, reassignments
   * to `items`, splices or updates to a single item.
   */
  _itemsChanged: function _itemsChanged(change) {
    if (change.path === 'items') {
      this._virtualStart = 0;
      this._physicalTop = 0;
      this._virtualCount = this.items ? this.items.length : 0;
      this._physicalIndexForKey = {};
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;
      this._physicalCount = this._physicalCount || 0;
      this._physicalItems = this._physicalItems || [];
      this._physicalSizes = this._physicalSizes || [];
      this._physicalStart = 0;

      if (this._scrollTop > this._scrollOffset) {
        this._resetScrollPosition(0);
      }

      this._removeFocusedItem();

      this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
    } else if (change.path === 'items.splices') {
      this._adjustVirtualIndex(change.value.indexSplices);

      this._virtualCount = this.items ? this.items.length : 0; // Only blur if at least one item is added or removed.

      var itemAddedOrRemoved = change.value.indexSplices.some(function (splice) {
        return splice.addedCount > 0 || splice.removed.length > 0;
      });

      if (itemAddedOrRemoved) {
        // Only blur activeElement if it is a descendant of the list (#505,
        // #507).
        var activeElement = this._getActiveElement();

        if (this.contains(activeElement)) {
          activeElement.blur();
        }
      } // Render only if the affected index is rendered.


      var affectedIndexRendered = change.value.indexSplices.some(function (splice) {
        return splice.index + splice.addedCount >= this._virtualStart && splice.index <= this._virtualEnd;
      }, this);

      if (!this._isClientFull() || affectedIndexRendered) {
        this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
      }
    } else if (change.path !== 'items.length') {
      this._forwardItemPath(change.path, change.value);
    }
  },
  _forwardItemPath: function _forwardItemPath(path, value) {
    path = path.slice(6); // 'items.'.length == 6

    var dot = path.indexOf('.');

    if (dot === -1) {
      dot = path.length;
    }

    var isIndexRendered;
    var pidx;
    var inst;
    var offscreenInstance = this.modelForElement(this._offscreenFocusedItem);
    var vidx = parseInt(path.substring(0, dot), 10);
    isIndexRendered = this._isIndexRendered(vidx);

    if (isIndexRendered) {
      pidx = this._getPhysicalIndex(vidx);
      inst = this.modelForElement(this._physicalItems[pidx]);
    } else if (offscreenInstance) {
      inst = offscreenInstance;
    }

    if (!inst || inst[this.indexAs] !== vidx) {
      return;
    }

    path = path.substring(dot + 1);
    path = this.as + (path ? '.' + path : '');

    inst._setPendingPropertyOrPath(path, value, false, true);

    inst._flushProperties && inst._flushProperties(); // TODO(blasten): V1 doesn't do this and it's a bug

    if (isIndexRendered) {
      this._updateMetrics([pidx]);

      this._positionItems();

      this._updateScrollerSize();
    }
  },

  /**
   * @param {!Array<!Object>} splices
   */
  _adjustVirtualIndex: function _adjustVirtualIndex(splices) {
    splices.forEach(function (splice) {
      // deselect removed items
      splice.removed.forEach(this._removeItem, this); // We only need to care about changes happening above the current position

      if (splice.index < this._virtualStart) {
        var delta = Math.max(splice.addedCount - splice.removed.length, splice.index - this._virtualStart);
        this._virtualStart = this._virtualStart + delta;

        if (this._focusedVirtualIndex >= 0) {
          this._focusedVirtualIndex = this._focusedVirtualIndex + delta;
        }
      }
    }, this);
  },
  _removeItem: function _removeItem(item) {
    this.$.selector.deselect(item); // remove the current focused item

    if (this._focusedItem && this.modelForElement(this._focusedItem)[this.as] === item) {
      this._removeFocusedItem();
    }
  },

  /**
   * Executes a provided function per every physical index in `itemSet`
   * `itemSet` default value is equivalent to the entire set of physical
   * indexes.
   *
   * @param {!function(number, number)} fn
   * @param {!Array<number>=} itemSet
   */
  _iterateItems: function _iterateItems(fn, itemSet) {
    var pidx, vidx, rtn, i;

    if (arguments.length === 2 && itemSet) {
      for (i = 0; i < itemSet.length; i++) {
        pidx = itemSet[i];
        vidx = this._computeVidx(pidx);

        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    } else {
      pidx = this._physicalStart;
      vidx = this._virtualStart;

      for (; pidx < this._physicalCount; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }

      for (pidx = 0; pidx < this._physicalStart; pidx++, vidx++) {
        if ((rtn = fn.call(this, pidx, vidx)) != null) {
          return rtn;
        }
      }
    }
  },

  /**
   * Returns the virtual index for a given physical index
   *
   * @param {number} pidx Physical index
   * @return {number}
   */
  _computeVidx: function _computeVidx(pidx) {
    if (pidx >= this._physicalStart) {
      return this._virtualStart + (pidx - this._physicalStart);
    }

    return this._virtualStart + (this._physicalCount - this._physicalStart) + pidx;
  },

  /**
   * Assigns the data models to a given set of items.
   * @param {!Array<number>=} itemSet
   */
  _assignModels: function _assignModels(itemSet) {
    this._iterateItems(function (pidx, vidx) {
      var el = this._physicalItems[pidx];
      var item = this.items && this.items[vidx];

      if (item != null) {
        var inst = this.modelForElement(el);
        inst.__key__ = null;

        this._forwardProperty(inst, this.as, item);

        this._forwardProperty(inst, this.selectedAs, this.$.selector.isSelected(item));

        this._forwardProperty(inst, this.indexAs, vidx);

        this._forwardProperty(inst, 'tabIndex', this._focusedVirtualIndex === vidx ? 0 : -1);

        this._physicalIndexForKey[inst.__key__] = pidx;
        inst._flushProperties && inst._flushProperties(true);
        el.removeAttribute('hidden');
      } else {
        el.setAttribute('hidden', '');
      }
    }, itemSet);
  },

  /**
   * Updates the height for a given set of items.
   *
   * @param {!Array<number>=} itemSet
   */
  _updateMetrics: function _updateMetrics(itemSet) {
    // Make sure we distributed all the physical items
    // so we can measure them.
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])();
    var newPhysicalSize = 0;
    var oldPhysicalSize = 0;
    var prevAvgCount = this._physicalAverageCount;
    var prevPhysicalAvg = this._physicalAverage;

    this._iterateItems(function (pidx, vidx) {
      oldPhysicalSize += this._physicalSizes[pidx];
      this._physicalSizes[pidx] = this._physicalItems[pidx].offsetHeight;
      newPhysicalSize += this._physicalSizes[pidx];
      this._physicalAverageCount += this._physicalSizes[pidx] ? 1 : 0;
    }, itemSet);

    if (this.grid) {
      this._updateGridMetrics();

      this._physicalSize = Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
    } else {
      oldPhysicalSize = this._itemsPerRow === 1 ? oldPhysicalSize : Math.ceil(this._physicalCount / this._itemsPerRow) * this._rowHeight;
      this._physicalSize = this._physicalSize + newPhysicalSize - oldPhysicalSize;
      this._itemsPerRow = 1;
    } // Update the average if it measured something.


    if (this._physicalAverageCount !== prevAvgCount) {
      this._physicalAverage = Math.round((prevPhysicalAvg * prevAvgCount + newPhysicalSize) / this._physicalAverageCount);
    }
  },
  _updateGridMetrics: function _updateGridMetrics() {
    this._itemWidth = this._physicalCount > 0 ? this._physicalItems[0].getBoundingClientRect().width : 200;
    this._rowHeight = this._physicalCount > 0 ? this._physicalItems[0].offsetHeight : 200;
    this._itemsPerRow = this._itemWidth ? Math.floor(this._viewportWidth / this._itemWidth) : this._itemsPerRow;
  },

  /**
   * Updates the position of the physical items.
   */
  _positionItems: function _positionItems() {
    this._adjustScrollPosition();

    var y = this._physicalTop;

    if (this.grid) {
      var totalItemWidth = this._itemsPerRow * this._itemWidth;
      var rowOffset = (this._viewportWidth - totalItemWidth) / 2;

      this._iterateItems(function (pidx, vidx) {
        var modulus = vidx % this._itemsPerRow;
        var x = Math.floor(modulus * this._itemWidth + rowOffset);

        if (this._isRTL) {
          x = x * -1;
        }

        this.translate3d(x + 'px', y + 'px', 0, this._physicalItems[pidx]);

        if (this._shouldRenderNextRow(vidx)) {
          y += this._rowHeight;
        }
      });
    } else {
      var order = [];

      this._iterateItems(function (pidx, vidx) {
        var item = this._physicalItems[pidx];
        this.translate3d(0, y + 'px', 0, item);
        y += this._physicalSizes[pidx];
        var itemId = item.id;

        if (itemId) {
          order.push(itemId);
        }
      });

      if (order.length) {
        this.setAttribute('aria-owns', order.join(' '));
      }
    }
  },
  _getPhysicalSizeIncrement: function _getPhysicalSizeIncrement(pidx) {
    if (!this.grid) {
      return this._physicalSizes[pidx];
    }

    if (this._computeVidx(pidx) % this._itemsPerRow !== this._itemsPerRow - 1) {
      return 0;
    }

    return this._rowHeight;
  },

  /**
   * Returns, based on the current index,
   * whether or not the next index will need
   * to be rendered on a new row.
   *
   * @param {number} vidx Virtual index
   * @return {boolean}
   */
  _shouldRenderNextRow: function _shouldRenderNextRow(vidx) {
    return vidx % this._itemsPerRow === this._itemsPerRow - 1;
  },

  /**
   * Adjusts the scroll position when it was overestimated.
   */
  _adjustScrollPosition: function _adjustScrollPosition() {
    var deltaHeight = this._virtualStart === 0 ? this._physicalTop : Math.min(this._scrollPosition + this._physicalTop, 0); // Note: the delta can be positive or negative.

    if (deltaHeight !== 0) {
      this._physicalTop = this._physicalTop - deltaHeight; // This may be called outside of a scrollHandler, so use last cached position

      var scrollTop = this._scrollPosition; // juking scroll position during interial scrolling on iOS is no bueno

      if (!IOS_TOUCH_SCROLLING && scrollTop > 0) {
        this._resetScrollPosition(scrollTop - deltaHeight);
      }
    }
  },

  /**
   * Sets the position of the scroll.
   */
  _resetScrollPosition: function _resetScrollPosition(pos) {
    if (this.scrollTarget && pos >= 0) {
      this._scrollTop = pos;
      this._scrollPosition = this._scrollTop;
    }
  },

  /**
   * Sets the scroll height, that's the height of the content,
   *
   * @param {boolean=} forceUpdate If true, updates the height no matter what.
   */
  _updateScrollerSize: function _updateScrollerSize(forceUpdate) {
    if (this.grid) {
      this._estScrollHeight = this._virtualRowCount * this._rowHeight;
    } else {
      this._estScrollHeight = this._physicalBottom + Math.max(this._virtualCount - this._physicalCount - this._virtualStart, 0) * this._physicalAverage;
    }

    forceUpdate = forceUpdate || this._scrollHeight === 0;
    forceUpdate = forceUpdate || this._scrollPosition >= this._estScrollHeight - this._physicalSize;
    forceUpdate = forceUpdate || this.grid && this.$.items.style.height < this._estScrollHeight; // Amortize height adjustment, so it won't trigger large repaints too often.

    if (forceUpdate || Math.abs(this._estScrollHeight - this._scrollHeight) >= this._viewportHeight) {
      this.$.items.style.height = this._estScrollHeight + 'px';
      this._scrollHeight = this._estScrollHeight;
    }
  },

  /**
   * Scroll to a specific item in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToItem
   * @param {(Object)} item The item to be scrolled to
   */
  scrollToItem: function scrollToItem(item) {
    return this.scrollToIndex(this.items.indexOf(item));
  },

  /**
   * Scroll to a specific index in the virtual list regardless
   * of the physical items in the DOM tree.
   *
   * @method scrollToIndex
   * @param {number} idx The index of the item
   */
  scrollToIndex: function scrollToIndex(idx) {
    if (typeof idx !== 'number' || idx < 0 || idx > this.items.length - 1) {
      return;
    }

    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["flush"])(); // Items should have been rendered prior scrolling to an index.

    if (this._physicalCount === 0) {
      return;
    }

    idx = this._clamp(idx, 0, this._virtualCount - 1); // Update the virtual start only when needed.

    if (!this._isIndexRendered(idx) || idx >= this._maxVirtualStart) {
      this._virtualStart = this.grid ? idx - this._itemsPerRow * 2 : idx - 1;
    }

    this._manageFocus();

    this._assignModels();

    this._updateMetrics(); // Estimate new physical offset.


    this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;
    var currentTopItem = this._physicalStart;
    var currentVirtualItem = this._virtualStart;
    var targetOffsetTop = 0;
    var hiddenContentSize = this._hiddenContentSize; // scroll to the item as much as we can.

    while (currentVirtualItem < idx && targetOffsetTop <= hiddenContentSize) {
      targetOffsetTop = targetOffsetTop + this._getPhysicalSizeIncrement(currentTopItem);
      currentTopItem = (currentTopItem + 1) % this._physicalCount;
      currentVirtualItem++;
    }

    this._updateScrollerSize(true);

    this._positionItems();

    this._resetScrollPosition(this._physicalTop + this._scrollOffset + targetOffsetTop);

    this._increasePoolIfNeeded(0); // clear cached visible index.


    this._firstVisibleIndexVal = null;
    this._lastVisibleIndexVal = null;
  },

  /**
   * Reset the physical average and the average count.
   */
  _resetAverage: function _resetAverage() {
    this._physicalAverage = 0;
    this._physicalAverageCount = 0;
  },

  /**
   * A handler for the `iron-resize` event triggered by `IronResizableBehavior`
   * when the element is resized.
   */
  _resizeHandler: function _resizeHandler() {
    this._debounce('_render', function () {
      // clear cached visible index.
      this._firstVisibleIndexVal = null;
      this._lastVisibleIndexVal = null;

      if (this._isVisible) {
        this.updateViewportBoundaries(); // Reinstall the scroll event listener.

        this.toggleScrollListener(true);

        this._resetAverage();

        this._render();
      } else {
        // Uninstall the scroll event listener.
        this.toggleScrollListener(false);
      }
    }, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]);
  },

  /**
   * Selects the given item.
   *
   * @method selectItem
   * @param {Object} item The item instance.
   */
  selectItem: function selectItem(item) {
    return this.selectIndex(this.items.indexOf(item));
  },

  /**
   * Selects the item at the given index in the items array.
   *
   * @method selectIndex
   * @param {number} index The index of the item in the items array.
   */
  selectIndex: function selectIndex(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (!this.multiSelection && this.selectedItem) {
      this.clearSelection();
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);

      if (model) {
        model[this.selectedAs] = true;
      }

      this.updateSizeForIndex(index);
    }

    this.$.selector.selectIndex(index);
  },

  /**
   * Deselects the given item.
   *
   * @method deselect
   * @param {Object} item The item instance.
   */
  deselectItem: function deselectItem(item) {
    return this.deselectIndex(this.items.indexOf(item));
  },

  /**
   * Deselects the item at the given index in the items array.
   *
   * @method deselectIndex
   * @param {number} index The index of the item in the items array.
   */
  deselectIndex: function deselectIndex(index) {
    if (index < 0 || index >= this._virtualCount) {
      return;
    }

    if (this._isIndexRendered(index)) {
      var model = this.modelForElement(this._physicalItems[this._getPhysicalIndex(index)]);
      model[this.selectedAs] = false;
      this.updateSizeForIndex(index);
    }

    this.$.selector.deselectIndex(index);
  },

  /**
   * Selects or deselects a given item depending on whether the item
   * has already been selected.
   *
   * @method toggleSelectionForItem
   * @param {Object} item The item object.
   */
  toggleSelectionForItem: function toggleSelectionForItem(item) {
    return this.toggleSelectionForIndex(this.items.indexOf(item));
  },

  /**
   * Selects or deselects the item at the given index in the items array
   * depending on whether the item has already been selected.
   *
   * @method toggleSelectionForIndex
   * @param {number} index The index of the item in the items array.
   */
  toggleSelectionForIndex: function toggleSelectionForIndex(index) {
    var isSelected = this.$.selector.isIndexSelected ? this.$.selector.isIndexSelected(index) : this.$.selector.isSelected(this.items[index]);
    isSelected ? this.deselectIndex(index) : this.selectIndex(index);
  },

  /**
   * Clears the current selection in the list.
   *
   * @method clearSelection
   */
  clearSelection: function clearSelection() {
    this._iterateItems(function (pidx, vidx) {
      this.modelForElement(this._physicalItems[pidx])[this.selectedAs] = false;
    });

    this.$.selector.clearSelection();
  },

  /**
   * Add an event listener to `tap` if `selectionEnabled` is true,
   * it will remove the listener otherwise.
   */
  _selectionEnabledChanged: function _selectionEnabledChanged(selectionEnabled) {
    var handler = selectionEnabled ? this.listen : this.unlisten;
    handler.call(this, this, 'tap', '_selectionHandler');
  },

  /**
   * Select an item from an event object.
   */
  _selectionHandler: function _selectionHandler(e) {
    var model = this.modelForElement(e.target);

    if (!model) {
      return;
    }

    var modelTabIndex, activeElTabIndex;
    var target = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(e).path[0];

    var activeEl = this._getActiveElement();

    var physicalItem = this._physicalItems[this._getPhysicalIndex(model[this.indexAs])]; // Safari does not focus certain form controls via mouse
    // https://bugs.webkit.org/show_bug.cgi?id=118043


    if (target.localName === 'input' || target.localName === 'button' || target.localName === 'select') {
      return;
    } // Set a temporary tabindex


    modelTabIndex = model.tabIndex;
    model.tabIndex = SECRET_TABINDEX;
    activeElTabIndex = activeEl ? activeEl.tabIndex : -1;
    model.tabIndex = modelTabIndex; // Only select the item if the tap wasn't on a focusable child
    // or the element bound to `tabIndex`

    if (activeEl && physicalItem !== activeEl && physicalItem.contains(activeEl) && activeElTabIndex !== SECRET_TABINDEX) {
      return;
    }

    this.toggleSelectionForItem(model[this.as]);
  },
  _multiSelectionChanged: function _multiSelectionChanged(multiSelection) {
    this.clearSelection();
    this.$.selector.multi = multiSelection;
  },

  /**
   * Updates the size of a given list item.
   *
   * @method updateSizeForItem
   * @param {Object} item The item instance.
   */
  updateSizeForItem: function updateSizeForItem(item) {
    return this.updateSizeForIndex(this.items.indexOf(item));
  },

  /**
   * Updates the size of the item at the given index in the items array.
   *
   * @method updateSizeForIndex
   * @param {number} index The index of the item in the items array.
   */
  updateSizeForIndex: function updateSizeForIndex(index) {
    if (!this._isIndexRendered(index)) {
      return null;
    }

    this._updateMetrics([this._getPhysicalIndex(index)]);

    this._positionItems();

    return null;
  },

  /**
   * Creates a temporary backfill item in the rendered pool of physical items
   * to replace the main focused item. The focused item has tabIndex = 0
   * and might be currently focused by the user.
   *
   * This dynamic replacement helps to preserve the focus state.
   */
  _manageFocus: function _manageFocus() {
    var fidx = this._focusedVirtualIndex;

    if (fidx >= 0 && fidx < this._virtualCount) {
      // if it's a valid index, check if that index is rendered
      // in a physical item.
      if (this._isIndexRendered(fidx)) {
        this._restoreFocusedItem();
      } else {
        this._createFocusBackfillItem();
      }
    } else if (this._virtualCount > 0 && this._physicalCount > 0) {
      // otherwise, assign the initial focused index.
      this._focusedPhysicalIndex = this._physicalStart;
      this._focusedVirtualIndex = this._virtualStart;
      this._focusedItem = this._physicalItems[this._physicalStart];
    }
  },

  /**
   * Converts a random index to the index of the item that completes it's row.
   * Allows for better order and fill computation when grid == true.
   */
  _convertIndexToCompleteRow: function _convertIndexToCompleteRow(idx) {
    // when grid == false _itemPerRow can be unset.
    this._itemsPerRow = this._itemsPerRow || 1;
    return this.grid ? Math.ceil(idx / this._itemsPerRow) * this._itemsPerRow : idx;
  },
  _isIndexRendered: function _isIndexRendered(idx) {
    return idx >= this._virtualStart && idx <= this._virtualEnd;
  },
  _isIndexVisible: function _isIndexVisible(idx) {
    return idx >= this.firstVisibleIndex && idx <= this.lastVisibleIndex;
  },
  _getPhysicalIndex: function _getPhysicalIndex(vidx) {
    return (this._physicalStart + (vidx - this._virtualStart)) % this._physicalCount;
  },
  focusItem: function focusItem(idx) {
    this._focusPhysicalItem(idx);
  },
  _focusPhysicalItem: function _focusPhysicalItem(idx) {
    if (idx < 0 || idx >= this._virtualCount) {
      return;
    }

    this._restoreFocusedItem(); // scroll to index to make sure it's rendered


    if (!this._isIndexRendered(idx)) {
      this.scrollToIndex(idx);
    }

    var physicalItem = this._physicalItems[this._getPhysicalIndex(idx)];

    var model = this.modelForElement(physicalItem);
    var focusable; // set a secret tab index

    model.tabIndex = SECRET_TABINDEX; // check if focusable element is the physical item

    if (physicalItem.tabIndex === SECRET_TABINDEX) {
      focusable = physicalItem;
    } // search for the element which tabindex is bound to the secret tab index


    if (!focusable) {
      focusable = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(physicalItem).querySelector('[tabindex="' + SECRET_TABINDEX + '"]');
    } // restore the tab index


    model.tabIndex = 0; // focus the focusable element

    this._focusedVirtualIndex = idx;
    focusable && focusable.focus();
  },
  _removeFocusedItem: function _removeFocusedItem() {
    if (this._offscreenFocusedItem) {
      this._itemsParent.removeChild(this._offscreenFocusedItem);
    }

    this._offscreenFocusedItem = null;
    this._focusBackfillItem = null;
    this._focusedItem = null;
    this._focusedVirtualIndex = -1;
    this._focusedPhysicalIndex = -1;
  },
  _createFocusBackfillItem: function _createFocusBackfillItem() {
    var fpidx = this._focusedPhysicalIndex;

    if (this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    }

    if (!this._focusBackfillItem) {
      // Create a physical item.
      var inst = this.stamp(null);
      this._focusBackfillItem =
      /** @type {!HTMLElement} */
      inst.root.querySelector('*');

      this._itemsParent.appendChild(inst.root);
    } // Set the offcreen focused physical item.


    this._offscreenFocusedItem = this._physicalItems[fpidx];
    this.modelForElement(this._offscreenFocusedItem).tabIndex = 0;
    this._physicalItems[fpidx] = this._focusBackfillItem;
    this._focusedPhysicalIndex = fpidx; // Hide the focused physical.

    this.translate3d(0, HIDDEN_Y, 0, this._offscreenFocusedItem);
  },
  _restoreFocusedItem: function _restoreFocusedItem() {
    if (!this._offscreenFocusedItem || this._focusedVirtualIndex < 0) {
      return;
    } // Assign models to the focused index.


    this._assignModels(); // Get the new physical index for the focused index.


    var fpidx = this._focusedPhysicalIndex = this._getPhysicalIndex(this._focusedVirtualIndex);

    var onScreenItem = this._physicalItems[fpidx];

    if (!onScreenItem) {
      return;
    }

    var onScreenInstance = this.modelForElement(onScreenItem);
    var offScreenInstance = this.modelForElement(this._offscreenFocusedItem); // Restores the physical item only when it has the same model
    // as the offscreen one. Use key for comparison since users can set
    // a new item via set('items.idx').

    if (onScreenInstance[this.as] === offScreenInstance[this.as]) {
      // Flip the focus backfill.
      this._focusBackfillItem = onScreenItem;
      onScreenInstance.tabIndex = -1; // Restore the focused physical item.

      this._physicalItems[fpidx] = this._offscreenFocusedItem; // Hide the physical item that backfills.

      this.translate3d(0, HIDDEN_Y, 0, this._focusBackfillItem);
    } else {
      this._removeFocusedItem();

      this._focusBackfillItem = null;
    }

    this._offscreenFocusedItem = null;
  },
  _didFocus: function _didFocus(e) {
    var targetModel = this.modelForElement(e.target);
    var focusedModel = this.modelForElement(this._focusedItem);
    var hasOffscreenFocusedItem = this._offscreenFocusedItem !== null;
    var fidx = this._focusedVirtualIndex;

    if (!targetModel) {
      return;
    }

    if (focusedModel === targetModel) {
      // If the user focused the same item, then bring it into view if it's not
      // visible.
      if (!this._isIndexVisible(fidx)) {
        this.scrollToIndex(fidx);
      }
    } else {
      this._restoreFocusedItem(); // Restore tabIndex for the currently focused item.


      if (focusedModel) {
        focusedModel.tabIndex = -1;
      } // Set the tabIndex for the next focused item.


      targetModel.tabIndex = 0;
      fidx = targetModel[this.indexAs];
      this._focusedVirtualIndex = fidx;
      this._focusedPhysicalIndex = this._getPhysicalIndex(fidx);
      this._focusedItem = this._physicalItems[this._focusedPhysicalIndex];

      if (hasOffscreenFocusedItem && !this._offscreenFocusedItem) {
        this._update();
      }
    }
  },
  _keydownHandler: function _keydownHandler(e) {
    switch (e.keyCode) {
      case
      /* ARROW_DOWN */
      40:
        if (this._focusedVirtualIndex < this._virtualCount - 1) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex + (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_RIGHT */
      39:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? -1 : 1));
        break;

      case
      /* ARROW_UP */
      38:
        if (this._focusedVirtualIndex > 0) e.preventDefault();

        this._focusPhysicalItem(this._focusedVirtualIndex - (this.grid ? this._itemsPerRow : 1));

        break;

      case
      /* ARROW_LEFT */
      37:
        if (this.grid) this._focusPhysicalItem(this._focusedVirtualIndex + (this._isRTL ? 1 : -1));
        break;

      case
      /* ENTER */
      13:
        this._focusPhysicalItem(this._focusedVirtualIndex);

        if (this.selectionEnabled) this._selectionHandler(e);
        break;
    }
  },
  _clamp: function _clamp(v, min, max) {
    return Math.min(max, Math.max(min, v));
  },
  _debounce: function _debounce(name, cb, asyncModule) {
    this._debouncers = this._debouncers || {};
    this._debouncers[name] = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_9__["Debouncer"].debounce(this._debouncers[name], asyncModule, cb.bind(this));
    Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_10__["enqueueDebouncer"])(this._debouncers[name]);
  },
  _forwardProperty: function _forwardProperty(inst, name, value) {
    inst._setPendingProperty(name, value);
  },

  /* Templatizer bindings for v2 */
  _forwardHostPropV2: function _forwardHostPropV2(prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).forwardHostProp(prop, value);
      }
    }, this);
  },
  _notifyInstancePropV2: function _notifyInstancePropV2(inst, prop, value) {
    if (Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["matches"])(this.as, prop)) {
      var idx = inst[this.indexAs];

      if (prop == this.as) {
        this.items[idx] = value;
      }

      this.notifyPath(Object(_polymer_polymer_lib_utils_path_js__WEBPACK_IMPORTED_MODULE_12__["translate"])(this.as, 'items.' + idx, prop), value);
    }
  },

  /* Templatizer bindings for v1 */
  _getStampedChildren: function _getStampedChildren() {
    return this._physicalItems;
  },
  _forwardInstancePath: function _forwardInstancePath(inst, path, value) {
    if (path.indexOf(this.as + '.') === 0) {
      this.notifyPath('items.' + inst.__key__ + '.' + path.slice(this.as.length + 1), value);
    }
  },
  _forwardParentPath: function _forwardParentPath(path, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item).notifyPath(path, value);
      }
    }, this);
  },
  _forwardParentProp: function _forwardParentProp(prop, value) {
    (this._physicalItems || []).concat([this._offscreenFocusedItem, this._focusBackfillItem]).forEach(function (item) {
      if (item) {
        this.modelForElement(item)[prop] = value;
      }
    }, this);
  },

  /* Gets the activeElement of the shadow root/host that contains the list. */
  _getActiveElement: function _getActiveElement() {
    var itemsHost = this._itemsParent.node.domHost;
    return Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_6__["dom"])(itemsHost ? itemsHost.root : document).activeElement;
  }
});

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js ***!
  \*******************************************************************************************/
/*! exports provided: ComboBoxDataProviderMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxDataProviderMixin", function() { return ComboBoxDataProviderMixin; });
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * @polymerMixin
 */

var ComboBoxDataProviderMixin = function ComboBoxDataProviderMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(DataProviderMixin, _superClass);

      function DataProviderMixin() {
        _classCallCheck(this, DataProviderMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(DataProviderMixin).apply(this, arguments));
      }

      _createClass(DataProviderMixin, [{
        key: "_dataProviderClearFilter",
        value: function _dataProviderClearFilter(dataProvider, opened, value) {
          // Can't depend on filter in this obsever as we don't want
          // to clear the filter whenever it's set
          if (dataProvider && this.filter) {
            this.size = undefined;
            this._pendingRequests = {};
            this.filter = '';
            this.clearCache();
          }
        }
      }, {
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(DataProviderMixin.prototype), "ready", this).call(this);

          this.clearCache();
          this.$.overlay.addEventListener('index-requested', function (e) {
            var index = e.detail.index;

            if (index !== undefined) {
              var page = _this._getPageForIndex(index);

              if (_this._shouldLoadPage(page)) {
                _this._loadPage(page);
              }
            }
          });
        }
      }, {
        key: "_dataProviderFilterChanged",
        value: function _dataProviderFilterChanged() {
          if (this.dataProvider && this.opened) {
            this.size = undefined;
            this._pendingRequests = {};
            this.clearCache();
          }
        }
      }, {
        key: "_ensureFirstPage",
        value: function _ensureFirstPage(opened) {
          if (opened && this._shouldLoadPage(0)) {
            this._loadPage(0);
          }
        }
      }, {
        key: "_shouldLoadPage",
        value: function _shouldLoadPage(page) {
          if (!this.filteredItems || this._forceNextRequest) {
            this._forceNextRequest = false;
            return true;
          }

          var loadedItem = this.filteredItems[page * this.pageSize];

          if (loadedItem !== undefined) {
            return loadedItem instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"];
          } else {
            return this.size === undefined;
          }
        }
      }, {
        key: "_loadPage",
        value: function _loadPage(page) {
          var _this2 = this;

          // make sure same page isn't requested multiple times.
          if (!this._pendingRequests[page] && this.dataProvider) {
            this.loading = true;
            var params = {
              page: page,
              pageSize: this.pageSize,
              filter: this.filter
            };

            var callback = function callback(items, size) {
              if (_this2._pendingRequests[page] === callback) {
                if (!_this2.filteredItems) {
                  var filteredItems = [];
                  filteredItems.splice.apply(filteredItems, [params.page * params.pageSize, items.length].concat(_toConsumableArray(items)));
                  _this2.filteredItems = filteredItems;
                } else {
                  _this2.splice.apply(_this2, ['filteredItems', params.page * params.pageSize, items.length].concat(_toConsumableArray(items)));
                } // Update selectedItem from filteredItems if value is set


                if (_this2._isValidValue(_this2.value) && _this2._getItemValue(_this2.selectedItem) !== _this2.value) {
                  _this2._selectItemForValue(_this2.value);
                }

                _this2.size = size;
                delete _this2._pendingRequests[page];

                if (Object.keys(_this2._pendingRequests).length === 0) {
                  _this2.loading = false;
                }

                if (page === 0 && _this2.__repositionOverlayDebouncer && items.length > (_this2.__maxRenderedItems || 0)) {
                  setTimeout(function () {
                    return _this2.__repositionOverlayDebouncer.flush();
                  });
                  _this2.__maxRenderedItems = items.length;
                }
              }
            };

            this._pendingRequests[page] = callback;
            this.dataProvider(params, callback);
          }
        }
      }, {
        key: "_getPageForIndex",
        value: function _getPageForIndex(index) {
          return Math.floor(index / this.pageSize);
        }
        /**
         * Clears the cached pages and reloads data from dataprovider when needed.
         */

      }, {
        key: "clearCache",
        value: function clearCache() {
          if (!this.dataProvider) {
            return;
          }

          this._pendingRequests = {};
          var filteredItems = [];

          for (var i = 0; i < (this.size || 0); i++) {
            filteredItems.push(this.__placeHolder);
          }

          this.filteredItems = filteredItems;

          if (this.opened) {
            this._loadPage(0);
          } else {
            this._forceNextRequest = true;
          }
        }
      }, {
        key: "_sizeChanged",
        value: function _sizeChanged() {
          var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
          var filteredItems = (this.filteredItems || []).slice(0, size);

          for (var i = 0; i < size; i++) {
            filteredItems[i] = filteredItems[i] !== undefined ? filteredItems[i] : this.__placeHolder;
          }

          this.filteredItems = filteredItems;
        }
      }, {
        key: "_pageSizeChanged",
        value: function _pageSizeChanged(pageSize, oldPageSize) {
          if (Math.floor(pageSize) !== pageSize || pageSize < 1) {
            this.pageSize = oldPageSize;
            throw new Error('`pageSize` value must be an integer > 0');
          }

          this.clearCache();
        }
      }, {
        key: "_dataProviderChanged",
        value: function _dataProviderChanged(dataProvider, oldDataProvider) {
          var _this3 = this;

          this._ensureItemsOrDataProvider(function () {
            _this3.dataProvider = oldDataProvider;
          });
        }
      }, {
        key: "_ensureItemsOrDataProvider",
        value: function _ensureItemsOrDataProvider(restoreOldValueCallback) {
          if (this.items !== undefined && this.dataProvider !== undefined) {
            restoreOldValueCallback();
            throw new Error('Using `items` and `dataProvider` together is not supported');
          } else if (this.dataProvider && !this.filteredItems) {
            this.filteredItems = [];
          }
        }
      }, {
        key: "_warnDataProviderValue",
        value: function _warnDataProviderValue(dataProvider, value) {
          if (dataProvider && value !== '' && (this.selectedItem === undefined || this.selectedItem === null)) {
            var valueIndex = this._indexOfValue(value, this.filteredItems);

            if (valueIndex < 0 || !this._getItemLabel(this.filteredItems[valueIndex])) {
              /* eslint-disable no-console */
              console.warn('Warning: unable to determine the label for the provided `value`. ' + 'Nothing to display in the text field. This usually happens when ' + 'setting an initial `value` before any items are returned from ' + 'the `dataProvider` callback. Consider setting `selectedItem` ' + 'instead of `value`');
              /* eslint-enable no-console */
            }
          }
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Number of items fetched at a time from the dataprovider.
             */
            pageSize: {
              type: Number,
              value: 50,
              observer: '_pageSizeChanged'
            },

            /**
             * Total number of items.
             */
            size: {
              type: Number,
              observer: '_sizeChanged'
            },

            /**
             * Function that provides items lazily. Receives arguments `params`, `callback`
             *
             * `params.page` Requested page index
             *
             * `params.pageSize` Current page size
             *
             * `params.filter` Currently applied filter
             *
             * `callback(items, size)` Callback function with arguments:
             *   - `items` Current page of items
             *   - `size` Total number of items.
             */
            dataProvider: {
              type: Object,
              observer: '_dataProviderChanged'
            },
            _pendingRequests: {
              value: function value() {
                return {};
              }
            },
            __placeHolder: {
              value: new _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_0__["ComboBoxPlaceholder"]()
            }
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_dataProviderFilterChanged(filter, dataProvider)', '_dataProviderClearFilter(dataProvider, opened, value)', '_warnDataProviderValue(dataProvider, value)', '_ensureFirstPage(opened)'];
        }
      }]);

      return DataProviderMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_iron_list_iron_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-list/iron-list.js */ "./node_modules/@polymer/iron-list/iron-list.js");
/* harmony import */ var _vaadin_combo_box_item_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-combo-box-item.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js");
/* harmony import */ var _vaadin_combo_box_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role$=\"[[_getAriaRole(index)]]\" aria-selected$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"], ["\n    <vaadin-combo-box-dropdown id=\"dropdown\" hidden=\"[[_hidden(_items.*, loading)]]\" position-target=\"[[positionTarget]]\" on-template-changed=\"_templateChanged\" on-position-changed=\"_setOverlayHeight\" disable-upgrade=\"\" theme=\"[[theme]]\">\n      <template>\n        <style>\n          #scroller {\n            overflow: auto;\n\n            /* Fixes item background from getting on top of scrollbars on Safari */\n            transform: translate3d(0, 0, 0);\n\n            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */\n            -webkit-overflow-scrolling: touch;\n\n            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */\n            box-shadow: 0 0 0 white;\n          }\n        </style>\n        <div id=\"scroller\" on-click=\"_stopPropagation\">\n          <iron-list id=\"selector\" role=\"listbox\" items=\"[[_getItems(opened, _items)]]\" scroll-target=\"[[_scroller]]\">\n            <template>\n              <vaadin-combo-box-item on-click=\"_onItemClick\" index=\"[[__requestItemByIndex(item, index)]]\" item=\"[[item]]\" label=\"[[getItemLabel(item, _itemLabelPath)]]\" selected=\"[[_isItemSelected(item, _selectedItem, _itemIdPath)]]\" renderer=\"[[renderer]]\" role\\$=\"[[_getAriaRole(index)]]\" aria-selected\\$=\"[[_getAriaSelected(_focusedIndex,index)]]\" focused=\"[[_isItemFocused(_focusedIndex,index)]]\" tabindex=\"-1\" theme\\$=\"[[theme]]\">\n              </vaadin-combo-box-item>\n            </template>\n          </iron-list>\n        </div>\n      </template>\n    </vaadin-combo-box-dropdown>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







var TOUCH_DEVICE = function () {
  try {
    document.createEvent('TouchEvent');
    return true;
  } catch (e) {
    return false;
  }
}();
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */


var ComboBoxDropdownWrapperElement =
/*#__PURE__*/
function (_ref) {
  _inherits(ComboBoxDropdownWrapperElement, _ref);

  function ComboBoxDropdownWrapperElement() {
    _classCallCheck(this, ComboBoxDropdownWrapperElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxDropdownWrapperElement).apply(this, arguments));
  }

  _createClass(ComboBoxDropdownWrapperElement, [{
    key: "_fireTouchAction",
    value: function _fireTouchAction(sourceEvent) {
      this.dispatchEvent(new CustomEvent('vaadin-overlay-touch-action', {
        detail: {
          sourceEvent: sourceEvent
        }
      }));
    }
  }, {
    key: "_getItems",
    value: function _getItems(opened, items) {
      return opened ? items : [];
    }
  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, items, loading) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        if (!opened) {
          return;
        } else {
          this._initDropdown();
        }
      } // Do not attach if no items
      // Do not dettach if opened but user types an invalid search


      this.$.dropdown.opened = !!(opened && (loading || this.$.dropdown.opened || items && items.length));
    }
  }, {
    key: "_initDropdown",
    value: function _initDropdown() {
      var _this = this;

      this.$.dropdown.removeAttribute('disable-upgrade');

      this._templateChanged();

      this._loadingChanged(this.loading);

      this.$.dropdown.$.overlay.addEventListener('touchend', function (e) {
        return _this._fireTouchAction(e);
      });
      this.$.dropdown.$.overlay.addEventListener('touchmove', function (e) {
        return _this._fireTouchAction(e);
      }); // Prevent blurring the input when clicking inside the overlay.

      this.$.dropdown.$.overlay.addEventListener('mousedown', function (e) {
        return e.preventDefault();
      }); // IE11: when scrolling with mouse, the focus goes to the scroller.
      // This causes the overlay closing due to defocusing the input field.
      // Prevent focusing the scroller by setting `unselectable="on"`.

      if (/Trident/.test(navigator.userAgent)) {
        this._scroller.setAttribute('unselectable', 'on');
      }
    }
  }, {
    key: "_templateChanged",
    value: function _templateChanged(e) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        return;
      }

      this._selector = this.$.dropdown.$.overlay.content.querySelector('#selector');
      this._scroller = this.$.dropdown.$.overlay.content.querySelector('#scroller');
    }
  }, {
    key: "_loadingChanged",
    value: function _loadingChanged(loading) {
      if (this.$.dropdown.hasAttribute('disable-upgrade')) {
        return;
      }

      if (loading) {
        this.$.dropdown.$.overlay.setAttribute('loading', '');
      } else {
        this.$.dropdown.$.overlay.removeAttribute('loading');
      }
    }
  }, {
    key: "_selectorChanged",
    value: function _selectorChanged(selector) {
      this._patchWheelOverScrolling();
    }
  }, {
    key: "_setOverlayHeight",
    value: function _setOverlayHeight() {
      if (!this.opened || !this.positionTarget || !this._selector) {
        return;
      }

      var targetRect = this.positionTarget.getBoundingClientRect();
      this._scroller.style.maxHeight = (window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-combo-box-overlay-max-height') : getComputedStyle(this).getPropertyValue('--vaadin-combo-box-overlay-max-height')) || '65vh';

      var maxHeight = this._maxOverlayHeight(targetRect); // overlay max height is restrained by the #scroller max height which is set to 65vh in CSS.


      this.$.dropdown.$.overlay.style.maxHeight = maxHeight; // we need to set height for iron-list to make its `firstVisibleIndex` work correctly.

      this._selector.style.maxHeight = maxHeight;
      this.updateViewportBoundaries();
    }
  }, {
    key: "_maxOverlayHeight",
    value: function _maxOverlayHeight(targetRect) {
      var margin = 8;
      var minHeight = 116; // Height of two items in combo-box

      var bottom = Math.min(window.innerHeight, document.body.scrollHeight - document.body.scrollTop);

      if (this.$.dropdown.alignedAbove) {
        return Math.max(targetRect.top - margin + Math.min(document.body.scrollTop, 0), minHeight) + 'px';
      } else {
        return Math.max(bottom - targetRect.bottom - margin, minHeight) + 'px';
      }
    }
  }, {
    key: "_getFocusedItem",
    value: function _getFocusedItem(focusedIndex) {
      if (focusedIndex >= 0) {
        return this._items[focusedIndex];
      }
    }
  }, {
    key: "_isItemSelected",
    value: function _isItemSelected(item, selectedItem, itemIdPath) {
      if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"]) {
        return false;
      } else if (itemIdPath && item !== undefined && selectedItem !== undefined) {
        return this.get(itemIdPath, item) === this.get(itemIdPath, selectedItem);
      } else {
        return item === selectedItem;
      }
    }
  }, {
    key: "_onItemClick",
    value: function _onItemClick(e) {
      if (e.detail && e.detail.sourceEvent && e.detail.sourceEvent.stopPropagation) {
        this._stopPropagation(e.detail.sourceEvent);
      }

      this.dispatchEvent(new CustomEvent('selection-changed', {
        detail: {
          item: e.model.item
        }
      }));
    }
    /**
     * Gets the index of the item with the provided label.
     * @return {Number}
     */

  }, {
    key: "indexOfLabel",
    value: function indexOfLabel(label) {
      if (this._items && label) {
        for (var i = 0; i < this._items.length; i++) {
          if (this.getItemLabel(this._items[i]).toString().toLowerCase() === label.toString().toLowerCase()) {
            return i;
          }
        }
      }

      return -1;
    }
    /**
     * If dataProvider is used, dispatch a request for the item’s index if
     * the item is a placeholder object.
     *
     * @return {Number}
     */

  }, {
    key: "__requestItemByIndex",
    value: function __requestItemByIndex(item, index) {
      if (item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxPlaceholder"] && index !== undefined) {
        this.dispatchEvent(new CustomEvent('index-requested', {
          detail: {
            index: index
          }
        }));
      }

      return index;
    }
    /**
     * Gets the label string for the item based on the `_itemLabelPath`.
     * @return {String}
     */

  }, {
    key: "getItemLabel",
    value: function getItemLabel(item, itemLabelPath) {
      itemLabelPath = itemLabelPath || this._itemLabelPath;
      var label = item && itemLabelPath ? this.get(itemLabelPath, item) : undefined;

      if (label === undefined || label === null) {
        label = item ? item.toString() : '';
      }

      return label;
    }
  }, {
    key: "_isItemFocused",
    value: function _isItemFocused(focusedIndex, itemIndex) {
      return focusedIndex == itemIndex;
    }
  }, {
    key: "_getAriaSelected",
    value: function _getAriaSelected(focusedIndex, itemIndex) {
      return this._isItemFocused(focusedIndex, itemIndex).toString();
    }
  }, {
    key: "_getAriaRole",
    value: function _getAriaRole(itemIndex) {
      return itemIndex !== undefined ? 'option' : false;
    }
  }, {
    key: "_focusedIndexChanged",
    value: function _focusedIndexChanged(index) {
      if (index >= 0) {
        this._scrollIntoView(index);
      }
    }
  }, {
    key: "_scrollIntoView",
    value: function _scrollIntoView(index) {
      if (!(this.opened && index >= 0)) {
        return;
      }

      var visibleItemsCount = this._visibleItemsCount();

      if (visibleItemsCount === undefined) {
        // Scroller is not visible. Moving is unnecessary.
        return;
      }

      var targetIndex = index;

      if (index > this._selector.lastVisibleIndex - 1) {
        // Index is below the bottom, scrolling down. Make the item appear at the bottom.
        // First scroll to target (will be at the top of the scroller) to make sure it's rendered.
        this._selector.scrollToIndex(index); // Then calculate the index for the following scroll (to get the target to bottom of the scroller).


        targetIndex = index - visibleItemsCount + 1;
      } else if (index > this._selector.firstVisibleIndex) {
        // The item is already visible, scrolling is unnecessary per se. But we need to trigger iron-list to set
        // the correct scrollTop on the scrollTarget. Scrolling to firstVisibleIndex.
        targetIndex = this._selector.firstVisibleIndex;
      }

      this._selector.scrollToIndex(Math.max(0, targetIndex)); // Sometimes the item is partly below the bottom edge, detect and adjust.


      var pidx = this._selector._getPhysicalIndex(index),
          physicalItem = this._selector._physicalItems[pidx];

      if (!physicalItem) {
        return;
      }

      var physicalItemRect = physicalItem.getBoundingClientRect(),
          scrollerRect = this._scroller.getBoundingClientRect(),
          scrollTopAdjust = physicalItemRect.bottom - scrollerRect.bottom + this._viewportTotalPaddingBottom;

      if (scrollTopAdjust > 0) {
        this._scroller.scrollTop += scrollTopAdjust;
      }
    }
  }, {
    key: "ensureItemsRendered",
    value: function ensureItemsRendered() {
      this._selector._render();
    }
  }, {
    key: "adjustScrollPosition",
    value: function adjustScrollPosition() {
      if (this.opened && this._items) {
        this._scrollIntoView(this._focusedIndex);
      }
    }
    /**
     * We want to prevent the kinetic scrolling energy from being transferred from the overlay contents over to the parent.
     * Further improvement ideas: after the contents have been scrolled to the top or bottom and scrolling has stopped, it could allow
     * scrolling the parent similarly to touch scrolling.
     */

  }, {
    key: "_patchWheelOverScrolling",
    value: function _patchWheelOverScrolling() {
      var selector = this._selector;
      selector.addEventListener('wheel', function (e) {
        var scroller = selector._scroller || selector.scrollTarget;
        var scrolledToTop = scroller.scrollTop === 0;
        var scrolledToBottom = scroller.scrollHeight - scroller.scrollTop - scroller.clientHeight <= 1;

        if (scrolledToTop && e.deltaY < 0) {
          e.preventDefault();
        } else if (scrolledToBottom && e.deltaY > 0) {
          e.preventDefault();
        }
      });
    }
  }, {
    key: "updateViewportBoundaries",
    value: function updateViewportBoundaries() {
      this._cachedViewportTotalPaddingBottom = undefined;

      this._selector.updateViewportBoundaries();
    }
  }, {
    key: "_visibleItemsCount",
    value: function _visibleItemsCount() {
      if (!this._selector) {
        return;
      } // Ensure items are rendered


      this._selector.flushDebouncer('_debounceTemplate'); // Ensure items are positioned


      this._selector.scrollToIndex(this._selector.firstVisibleIndex); // Ensure viewport boundaries are up-to-date


      this.updateViewportBoundaries();
      return this._selector.lastVisibleIndex - this._selector.firstVisibleIndex + 1;
    }
  }, {
    key: "_selectItem",
    value: function _selectItem(item) {
      item = typeof item === 'number' ? this._items[item] : item;

      if (this._selector.selectedItem !== item) {
        this._selector.selectItem(item);
      }
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      if (e.cancelable) {
        e.preventDefault();
      }
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(e) {
      e.stopPropagation();
    }
  }, {
    key: "_hidden",
    value: function _hidden(itemsChange) {
      return !this.loading && (!this._items || !this._items.length);
    }
  }, {
    key: "_viewportTotalPaddingBottom",
    get: function get() {
      if (this._cachedViewportTotalPaddingBottom === undefined) {
        var itemsStyle = window.getComputedStyle(this._selector.$.items);
        this._cachedViewportTotalPaddingBottom = [itemsStyle.paddingBottom, itemsStyle.borderBottomWidth].map(function (v) {
          return parseInt(v, 10);
        }).reduce(function (sum, v) {
          return sum + v;
        });
      }

      return this._cachedViewportTotalPaddingBottom;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-dropdown-wrapper';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * True if the device supports touch events.
         */
        touchDevice: {
          type: Boolean,
          value: TOUCH_DEVICE
        },
        opened: Boolean,

        /**
         * The element to position/align the dropdown by.
         */
        positionTarget: {
          type: Object
        },

        /**
         * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
         */
        renderer: Function,

        /**
         * `true` when new items are being loaded.
         */
        loading: {
          type: Boolean,
          value: false,
          reflectToAttribute: true,
          observer: '_setOverlayHeight'
        },

        /**
         * Used to propagate the `theme` attribute from the host element.
         */
        theme: String,
        _selectedItem: {
          type: Object
        },
        _items: {
          type: Object
        },
        _focusedIndex: {
          type: Number,
          value: -1,
          observer: '_focusedIndexChanged'
        },
        _focusedItem: {
          type: String,
          computed: '_getFocusedItem(_focusedIndex)'
        },
        _itemLabelPath: {
          type: String,
          value: 'label'
        },
        _itemValuePath: {
          type: String,
          value: 'value'
        },
        _selector: Object,
        _itemIdPath: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_selectorChanged(_selector)', '_loadingChanged(loading)', '_openedChanged(opened, _items, loading)'];
    }
  }]);

  return ComboBoxDropdownWrapperElement;
}(
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(_class, _PolymerElement);

  function _class() {
    _classCallCheck(this, _class);

    return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
  }

  return _class;
}(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define(ComboBoxDropdownWrapperElement.is, ComboBoxDropdownWrapperElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js");
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"], ["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host > #overlay {\n        display: none;\n      }\n    </style>\n    <vaadin-combo-box-overlay id=\"overlay\" hidden\\$=\"[[hidden]]\" opened=\"[[opened]]\" template=\"{{template}}\" style=\"align-items: stretch; margin: 0;\" theme\\$=\"[[theme]]\">\n      <slot></slot>\n    </vaadin-combo-box-overlay>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-combo-box-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

var ComboBoxOverlayElement =
/*#__PURE__*/
function (_OverlayElement) {
  _inherits(ComboBoxOverlayElement, _OverlayElement);

  function ComboBoxOverlayElement() {
    _classCallCheck(this, ComboBoxOverlayElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxOverlayElement).apply(this, arguments));
  }

  _createClass(ComboBoxOverlayElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxOverlayElement.prototype), "ready", this).call(this);

      var loader = document.createElement('div');
      loader.setAttribute('part', 'loader');
      var content = this.shadowRoot.querySelector('[part~="content"]');
      content.parentNode.insertBefore(loader, content);
    }
  }], [{
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-overlay';
    }
  }]);

  return ComboBoxOverlayElement;
}(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_2__["OverlayElement"]);

customElements.define(ComboBoxOverlayElement.is, ComboBoxOverlayElement);
/**
 * Element for internal use only.
 *
 * @memberof Vaadin
 * @private
 */

var ComboBoxDropdownElement =
/*#__PURE__*/
function (_DisableUpgradeMixin) {
  _inherits(ComboBoxDropdownElement, _DisableUpgradeMixin);

  _createClass(ComboBoxDropdownElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-dropdown';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        opened: {
          type: Boolean,
          observer: '_openedChanged'
        },
        template: {
          type: Object,
          notify: true
        },

        /**
         * The element to position/align the dropdown by.
         */
        positionTarget: {
          type: Object
        },

        /**
         * If `true`, overlay is aligned above the `positionTarget`
         */
        alignedAbove: {
          type: Boolean,
          value: false
        },

        /**
         * Used to propagate the `theme` attribute from the host element.
         */
        theme: String
      };
    }
  }]);

  function ComboBoxDropdownElement() {
    var _this;

    _classCallCheck(this, ComboBoxDropdownElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxDropdownElement).call(this));
    _this._boundSetPosition = _this._setPosition.bind(_assertThisInitialized(_this));
    _this._boundOutsideClickListener = _this._outsideClickListener.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ComboBoxDropdownElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "connectedCallback", this).call(this);

      this.addEventListener('iron-resize', this._boundSetPosition);
    }
  }, {
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "ready", this).call(this); // Preventing the default modal behaviour of the overlay on input clicking


      this.$.overlay.addEventListener('vaadin-overlay-outside-click', function (e) {
        e.preventDefault();
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "disconnectedCallback", this).call(this);

      this.removeEventListener('iron-resize', this._boundSetPosition); // Making sure the overlay is closed and removed from DOM after detaching the dropdown.

      this.opened = false;
    }
  }, {
    key: "notifyResize",
    value: function notifyResize() {
      _get(_getPrototypeOf(ComboBoxDropdownElement.prototype), "notifyResize", this).call(this);

      if (this.positionTarget && this.opened) {
        this._setPosition(); // Schedule another position update (to cover virtual keyboard opening for example)


        requestAnimationFrame(this._setPosition.bind(this));
      }
    }
    /**
     * Fired after the `vaadin-combo-box-dropdown` opens.
     *
     * @event vaadin-combo-box-dropdown-opened
     */

    /**
     * Fired after the `vaadin-combo-box-dropdown` closes.
     *
     * @event vaadin-combo-box-dropdown-closed
     */

  }, {
    key: "_openedChanged",
    value: function _openedChanged(opened, oldValue) {
      if (!!opened === !!oldValue) {
        return;
      }

      if (opened) {
        this.$.overlay.style.position = this._isPositionFixed(this.positionTarget) ? 'fixed' : 'absolute';

        this._setPosition();

        window.addEventListener('scroll', this._boundSetPosition, true);
        document.addEventListener('click', this._boundOutsideClickListener, true);
        this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-opened', {
          bubbles: true,
          composed: true
        }));
      } else {
        window.removeEventListener('scroll', this._boundSetPosition, true);
        document.removeEventListener('click', this._boundOutsideClickListener, true);
        this.dispatchEvent(new CustomEvent('vaadin-combo-box-dropdown-closed', {
          bubbles: true,
          composed: true
        }));
      }
    } // We need to listen on 'click' event and capture it and close the overlay before
    // propagating the event to the listener in the button. Otherwise, if the clicked button would call
    // open(), this would happen: https://www.youtube.com/watch?v=Z86V_ICUCD4

  }, {
    key: "_outsideClickListener",
    value: function _outsideClickListener(event) {
      var eventPath = event.composedPath();

      if (eventPath.indexOf(this.positionTarget) < 0 && eventPath.indexOf(this.$.overlay) < 0) {
        this.opened = false;
      }
    }
  }, {
    key: "_isPositionFixed",
    value: function _isPositionFixed(element) {
      var offsetParent = this._getOffsetParent(element);

      return window.getComputedStyle(element).position === 'fixed' || offsetParent && this._isPositionFixed(offsetParent);
    }
  }, {
    key: "_getOffsetParent",
    value: function _getOffsetParent(element) {
      if (element.assignedSlot) {
        return element.assignedSlot.parentElement;
      } else if (element.parentElement) {
        return element.offsetParent;
      }

      var parent = element.parentNode;

      if (parent && parent.nodeType === 11 && parent.host) {
        return parent.host; // parent is #shadowRoot
      }
    }
  }, {
    key: "_verticalOffset",
    value: function _verticalOffset(overlayRect, targetRect) {
      return this.alignedAbove ? -overlayRect.height : targetRect.height;
    }
  }, {
    key: "_shouldAlignAbove",
    value: function _shouldAlignAbove(targetRect) {
      var spaceBelow = (window.innerHeight - targetRect.bottom - Math.min(document.body.scrollTop, 0)) / window.innerHeight;
      return spaceBelow < 0.30;
    }
  }, {
    key: "_setPosition",
    value: function _setPosition(e) {
      if (this.hidden) {
        return;
      }

      if (e && e.target) {
        var target = e.target === document ? document.body : e.target;
        var parent = this.$.overlay.parentElement;

        if (!(target.contains(this.$.overlay) || target.contains(this.positionTarget)) || parent !== document.body) {
          return;
        }
      }

      var targetRect = this.positionTarget.getBoundingClientRect();
      this.alignedAbove = this._shouldAlignAbove(targetRect);
      var overlayRect = this.$.overlay.getBoundingClientRect();
      this._translateX = targetRect.left - overlayRect.left + (this._translateX || 0);
      this._translateY = targetRect.top - overlayRect.top + (this._translateY || 0) + this._verticalOffset(overlayRect, targetRect);

      var _devicePixelRatio = window.devicePixelRatio || 1;

      this._translateX = Math.round(this._translateX * _devicePixelRatio) / _devicePixelRatio;
      this._translateY = Math.round(this._translateY * _devicePixelRatio) / _devicePixelRatio;
      this.$.overlay.style.transform = "translate3d(".concat(this._translateX, "px, ").concat(this._translateY, "px, 0)");
      this.$.overlay.style.width = this.positionTarget.clientWidth + 'px';
      this.$.overlay.style.justifyContent = this.alignedAbove ? 'flex-end' : 'flex-start'; // TODO: fire only when position actually changes changes

      this.dispatchEvent(new CustomEvent('position-changed'));
    }
  }]);

  return ComboBoxDropdownElement;
}(Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_5__["mixinBehaviors"])(_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronResizableBehavior"], _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(ComboBoxDropdownElement.is, ComboBoxDropdownElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-item.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n         display: none;\n      }\n    </style>\n    <div part=\"content\" id=\"content\"></div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/



/**
 * The default element used for items in the vaadin-combo-box.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the item label or template content
 *
 * The following state attributes are exposed for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `selected` | Set when the item is selected | :host
 * `focused` | Set when the item is focused | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ThemableMixin
 * @private
 */

var ComboBoxItemElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(ComboBoxItemElement, _ThemableMixin);

  function ComboBoxItemElement() {
    _classCallCheck(this, ComboBoxItemElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxItemElement).apply(this, arguments));
  }

  _createClass(ComboBoxItemElement, [{
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxItemElement.prototype), "connectedCallback", this).call(this);

      if (!this._itemTemplateInstance) {
        // 2.0 has __dataHost. Might want to consider assigning combobox reference directly to item.
        var overlay = this.getRootNode().host.getRootNode().host;
        var dropdown = overlay.__dataHost;
        var comboBoxOverlay = dropdown.getRootNode().host;
        this._comboBox = comboBoxOverlay.getRootNode().host;

        this._comboBox._ensureTemplatized();

        if (this._comboBox._TemplateClass) {
          this._itemTemplateInstance = new this._comboBox._TemplateClass({});
          this.$.content.textContent = '';
          this.$.content.appendChild(this._itemTemplateInstance.root);
        }
      }
    }
  }, {
    key: "_render",
    value: function _render() {
      if (!this.renderer) {
        return;
      }

      var model = {
        index: this.index,
        item: this.item
      };
      this.renderer(this.$.content, this._comboBox, model);
    }
  }, {
    key: "_rendererOrItemChanged",
    value: function _rendererOrItemChanged(renderer, index, item) {
      if (item === undefined || index === undefined) {
        return;
      }

      if (this._oldRenderer !== renderer) {
        this.$.content.innerHTML = '';
      }

      if (renderer) {
        this._oldRenderer = renderer;

        this._render();
      }
    }
  }, {
    key: "_updateLabel",
    value: function _updateLabel(label, _itemTemplateInstance) {
      if (_itemTemplateInstance === undefined && this.$.content && !this.renderer) {
        // Only set label to textContent no template
        this.$.content.textContent = label;
      }
    }
  }, {
    key: "_updateTemplateInstanceVariable",
    value: function _updateTemplateInstanceVariable(variable, value, _itemTemplateInstance) {
      if (variable === undefined || value === undefined || _itemTemplateInstance === undefined) {
        return;
      }

      _itemTemplateInstance[variable] = value;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-item';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * The index of the item
         */
        index: Number,

        /**
         * The item to render
         * @type {(String|Object)}
         */
        item: Object,

        /**
         * The text label corresponding to the item
         */
        label: String,

        /**
         * True when item is selected
         */
        selected: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * True when item is focused
         */
        focused: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * The template instance corresponding to the item
         */
        _itemTemplateInstance: Object,

        /**
         * Custom function for rendering the content of the `<vaadin-combo-box-item>` propagated from the combo box element.
         */
        renderer: Function,

        /**
         * Saved instance of a custom renderer function.
         */
        _oldRenderer: Function
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_rendererOrItemChanged(renderer, index, item.*)', '_updateLabel(label, _itemTemplateInstance)', '_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)', '_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)', '_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)', '_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)'];
    }
  }]);

  return ComboBoxItemElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]));

customElements.define(ComboBoxItemElement.is, ComboBoxItemElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js ***!
  \*****************************************************************************/
/*! exports provided: ComboBoxLightElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxLightElement", function() { return ComboBoxLightElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-combo-box-mixin.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js");
/* harmony import */ var _vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./vaadin-combo-box-data-provider-mixin.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-data-provider-mixin.js");
/* harmony import */ var _vaadin_combo_box_dropdown_wrapper_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-wrapper.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-dropdown-wrapper.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/case-map.js */ "./node_modules/@polymer/polymer/lib/utils/case-map.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host([opened]) {\n        pointer-events: auto;\n      }\n    </style>\n\n    <slot></slot>\n\n    <vaadin-combo-box-dropdown-wrapper id=\"overlay\" opened=\"[[opened]]\" position-target=\"[[inputElement]]\" renderer=\"[[renderer]]\" _focused-index=\"[[_focusedIndex]]\" _item-id-path=\"[[itemIdPath]]\" _item-label-path=\"[[itemLabelPath]]\" loading=\"[[loading]]\" theme=\"[[theme]]\">\n    </vaadin-combo-box-dropdown-wrapper>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * `<vaadin-combo-box-light>` is a customizable version of the `<vaadin-combo-box>` providing
 * only the dropdown functionality and leaving the input field definition to the user.
 *
 * The element has the same API as `<vaadin-combo-box>`.
 *
 * To create a custom input field, you need to add a child element which has a two-way
 * data-bindable property representing the input value. The property name is expected
 * to be `value` by default. See the example below for a simplest possible example
 * using a `<vaadin-text-field>` element.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <vaadin-text-field>
 *   </vaadin-text-field>
 * </vaadin-combo-box-light>
 * ```
 *
 * If you are using other custom input fields like `<iron-input>`, you
 * need to define the name of the bindable property with the `attrForValue` attribute.
 *
 * ```html
 * <vaadin-combo-box-light attr-for-value="bind-value">
 *   <iron-input>
 *     <input>
 *   </iron-input>
 * </vaadin-combo-box-light>
 * ```
 *
 * In the next example you can see how to create a custom input field based
 * on a `<paper-input>` decorated with a custom `<iron-icon>` and
 * two `<paper-button>`s to act as the clear and toggle controls.
 *
 * ```html
 * <vaadin-combo-box-light>
 *   <paper-input label="Elements" class="input">
 *     <iron-icon icon="toll" slot="prefix"></iron-icon>
 *     <paper-button slot="suffix" class="clear-button">Clear</paper-button>
 *     <paper-button slot="suffix" class="toggle-button">Toggle</paper-button>
 *   </paper-input>
 * </vaadin-combo-box-light>
 * ```
 * @memberof Vaadin
 * @mixes Vaadin.ComboBoxDataProviderMixin
 * @mixes Vaadin.ComboBoxMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 */

var ComboBoxLightElement =
/*#__PURE__*/
function (_ThemePropertyMixin) {
  _inherits(ComboBoxLightElement, _ThemePropertyMixin);

  _createClass(ComboBoxLightElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-combo-box-light';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Name of the two-way data-bindable property representing the
         * value of the custom input field.
         */
        attrForValue: {
          type: String,
          value: 'value'
        },
        inputElement: {
          type: Element,
          readOnly: true
        }
      };
    }
  }]);

  function ComboBoxLightElement() {
    var _this;

    _classCallCheck(this, ComboBoxLightElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ComboBoxLightElement).call(this));
    _this._boundInputValueChanged = _this._inputValueChanged.bind(_assertThisInitialized(_this));
    _this.__boundInputValueCommitted = _this.__inputValueCommitted.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(ComboBoxLightElement, [{
    key: "ready",
    value: function ready() {
      var _this2 = this;

      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "ready", this).call(this);

      this._toggleElement = this.querySelector('.toggle-button');
      this._clearElement = this.querySelector('.clear-button');

      if (this._clearElement) {
        this._clearElement.addEventListener('mousedown', function (e) {
          e.preventDefault(); // Prevent native focus changes
          // _focusableElement is needed for paper-input

          (_this2.inputElement._focusableElement || _this2.inputElement).focus();
        });
      }
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "connectedCallback", this).call(this);

      var cssSelector = 'vaadin-text-field,iron-input,paper-input,.paper-input-input,.input';

      this._setInputElement(this.querySelector(cssSelector));

      this._revertInputValue();

      this.inputElement.addEventListener('input', this._boundInputValueChanged);
      this.inputElement.addEventListener('change', this.__boundInputValueCommitted);

      this._preventInputBlur();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "disconnectedCallback", this).call(this);

      this.inputElement.removeEventListener('input', this._boundInputValueChanged);
      this.inputElement.removeEventListener('change', this.__boundInputValueCommitted);

      this._restoreInputBlur();
    }
  }, {
    key: "__inputValueCommitted",
    value: function __inputValueCommitted(e) {
      // Detect if the input was cleared (by clicking the clear button on a vaadin-text-field)
      // and propagate the value change to combo box value immediately.
      if (e.__fromClearButton) {
        this._clear();
      }
    }
  }, {
    key: "focused",
    get: function get() {
      return this.getRootNode().activeElement === this.inputElement;
    }
  }, {
    key: "_propertyForValue",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_case_map_js__WEBPACK_IMPORTED_MODULE_7__["dashToCamelCase"])(this.attrForValue);
    }
  }, {
    key: "_inputElementValue",
    get: function get() {
      return this.inputElement && this.inputElement[this._propertyForValue];
    },
    set: function set(value) {
      if (this.inputElement) {
        this.inputElement[this._propertyForValue] = value;
      }
    }
  }]);

  return ComboBoxLightElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemePropertyMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(Object(_vaadin_combo_box_data_provider_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ComboBoxDataProviderMixin"])(Object(_vaadin_combo_box_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ComboBoxMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

customElements.define(ComboBoxLightElement.is, ComboBoxLightElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-mixin.js ***!
  \*****************************************************************************/
/*! exports provided: ComboBoxMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxMixin", function() { return ComboBoxMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flattened-nodes-observer.js */ "./node_modules/@polymer/polymer/lib/utils/flattened-nodes-observer.js");
/* harmony import */ var _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-combo-box-placeholder.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/








/**
 * @polymerMixin
 */

var ComboBoxMixin = function ComboBoxMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_subclass) {
      _inherits(VaadinComboBoxMixinElement, _subclass);

      _createClass(VaadinComboBoxMixinElement, null, [{
        key: "properties",
        get: function get() {
          return {
            /**
             * True if the dropdown is open, false otherwise.
             */
            opened: {
              type: Boolean,
              notify: true,
              value: false,
              reflectToAttribute: true,
              observer: '_openedChanged'
            },

            /**
             * Set to true to disable this element.
             */
            disabled: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },

            /**
             * When present, it specifies that the element field is read-only.
             */
            readonly: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },

            /**
             * Custom function for rendering the content of every item.
             * Receives three arguments:
             *
             * - `root` The `<vaadin-combo-box-item>` internal container DOM element.
             * - `comboBox` The reference to the `<vaadin-combo-box>` element.
             * - `model` The object with the properties related with the rendered
             *   item, contains:
             *   - `model.index` The index of the rendered item.
             *   - `model.item` The item.
             */
            renderer: Function,

            /**
             * A full set of items to filter the visible options from.
             * The items can be of either `String` or `Object` type.
             */
            items: {
              type: Array,
              observer: '_itemsChanged'
            },

            /**
             * If `true`, the user can input a value that is not present in the items list.
             * `value` property will be set to the input value in this case.
             * Also, when `value` is set programmatically, the input value will be set
             * to reflect that value.
             */
            allowCustomValue: {
              type: Boolean,
              value: false
            },

            /**
             * A subset of items, filtered based on the user input. Filtered items
             * can be assigned directly to omit the internal filtering functionality.
             * The items can be of either `String` or `Object` type.
             */
            filteredItems: {
              type: Array
            },

            /**
             * The `String` value for the selected item of the combo box. Provides
             * the value for `iron-form`.
             *
             * When there’s no item selected, the value is an empty string.
             *
             * Use `selectedItem` property to get the raw selected item from
             * the `items` array.
             */
            value: {
              type: String,
              observer: '_valueChanged',
              notify: true,
              value: ''
            },

            /**
             * Used to detect user value changes and fire `change` events.
             */
            _lastCommittedValue: String,

            /*
             * When set to `true`, "loading" attribute is added to host and the overlay element.
             */
            loading: {
              type: Boolean,
              value: false,
              reflectToAttribute: true
            },
            _focusedIndex: {
              type: Number,
              value: -1
            },

            /**
             * Filtering string the user has typed into the input field.
             */
            filter: {
              type: String,
              value: '',
              notify: true
            },

            /**
             * The selected item from the `items` array.
             */
            selectedItem: {
              type: Object,
              notify: true
            },

            /**
             * Path for label of the item. If `items` is an array of objects, the
             * `itemLabelPath` is used to fetch the displayed string label for each
             * item.
             *
             * The item label is also used for matching items when processing user
             * input, i.e., for filtering and selecting items.
             *
             * When using item templates, the property is still needed because it is used
             * for filtering, and for displaying the selected item value in the input box.
             */
            itemLabelPath: {
              type: String,
              value: 'label',
              observer: '_itemLabelPathChanged'
            },

            /**
             * Path for the value of the item. If `items` is an array of objects, the
             * `itemValuePath:` is used to fetch the string value for the selected
             * item.
             *
             * The item value is used in the `value` property of the combo box,
             * to provide the form value.
             */
            itemValuePath: {
              type: String,
              value: 'value'
            },

            /**
             * Path for the id of the item. If `items` is an array of objects,
             * the `itemIdPath` is used to compare and identify the same item
             * in `selectedItem` and `filteredItems` (items given by the
             * `dataProvider` callback).
             */
            itemIdPath: String,

            /**
             * The name of this element.
             */
            name: {
              type: String
            },

            /**
             * Set to true if the value is invalid.
             */
            invalid: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              value: false
            },
            _toggleElement: Object,
            _clearElement: Object,
            _inputElementValue: String,
            _closeOnBlurIsPrevented: Boolean,
            _previousDocumentPointerEvents: String,
            _itemTemplate: Object
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_filterChanged(filter, itemValuePath, itemLabelPath)', '_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)', '_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)', '_templateOrRendererChanged(_itemTemplate, renderer)', '_loadingChanged(loading)', '_selectedItemChanged(selectedItem, itemLabelPath)', '_toggleElementChanged(_toggleElement)'];
        }
      }]);

      function VaadinComboBoxMixinElement() {
        var _this;

        _classCallCheck(this, VaadinComboBoxMixinElement);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(VaadinComboBoxMixinElement).call(this));
        _this._boundOnFocusout = _this._onFocusout.bind(_assertThisInitialized(_this));
        _this._boundOverlaySelectedItemChanged = _this._overlaySelectedItemChanged.bind(_assertThisInitialized(_this));
        _this._boundClose = _this.close.bind(_assertThisInitialized(_this));
        _this._boundOnOpened = _this._onOpened.bind(_assertThisInitialized(_this));
        _this._boundOnKeyDown = _this._onKeyDown.bind(_assertThisInitialized(_this));
        _this._boundOnClick = _this._onClick.bind(_assertThisInitialized(_this));
        _this._boundOnOverlayTouchAction = _this._onOverlayTouchAction.bind(_assertThisInitialized(_this));
        _this._boundOnTouchend = _this._onTouchend.bind(_assertThisInitialized(_this));
        return _this;
      }

      _createClass(VaadinComboBoxMixinElement, [{
        key: "ready",
        value: function ready() {
          var _this2 = this;

          _get(_getPrototypeOf(VaadinComboBoxMixinElement.prototype), "ready", this).call(this);

          this.addEventListener('focusout', this._boundOnFocusout);
          this._lastCommittedValue = this.value;
          _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability(); // 2.0 does not support 'overlay.selection-changed' syntax in listeners

          this.$.overlay.addEventListener('selection-changed', this._boundOverlaySelectedItemChanged);
          this.addEventListener('vaadin-combo-box-dropdown-closed', this._boundClose);
          this.addEventListener('vaadin-combo-box-dropdown-opened', this._boundOnOpened);
          this.addEventListener('keydown', this._boundOnKeyDown);
          this.addEventListener('click', this._boundOnClick);
          this.$.overlay.addEventListener('vaadin-overlay-touch-action', this._boundOnOverlayTouchAction);
          this.addEventListener('touchend', this._boundOnTouchend);
          this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_6__["FlattenedNodesObserver"](this, function (info) {
            _this2._setTemplateFromNodes(info.addedNodes);
          });
        }
        /**
         * Manually invoke existing renderer.
         */

      }, {
        key: "render",
        value: function render() {
          if (this.$.overlay._selector) {
            this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item').forEach(function (item) {
              return item._render();
            });
          }
        }
      }, {
        key: "_setTemplateFromNodes",
        value: function _setTemplateFromNodes(nodes) {
          this._itemTemplate = nodes.filter(function (node) {
            return node.localName && node.localName === 'template';
          })[0] || this._itemTemplate;
        }
      }, {
        key: "_removeNewRendererOrTemplate",
        value: function _removeNewRendererOrTemplate(template, oldTemplate, renderer, oldRenderer) {
          if (template !== oldTemplate) {
            this._itemTemplate = undefined;
          } else if (renderer !== oldRenderer) {
            this.renderer = undefined;
          }
        }
      }, {
        key: "_templateOrRendererChanged",
        value: function _templateOrRendererChanged(template, renderer) {
          if (template && renderer) {
            this._removeNewRendererOrTemplate(template, this._oldTemplate, renderer, this._oldRenderer);

            throw new Error('You should only use either a renderer or a template for combo box items');
          }

          this._oldTemplate = template;
          this._oldRenderer = renderer;
        }
        /**
         * Opens the dropdown list.
         */

      }, {
        key: "open",
        value: function open() {
          // Prevent _open() being called when input is disabled or read-only
          if (!this.disabled && !this.readonly) {
            this.opened = true;
          }
        }
        /**
         * Closes the dropdown list.
         */

      }, {
        key: "close",
        value: function close() {
          this.opened = false;
        }
      }, {
        key: "_openedChanged",
        value: function _openedChanged(value, old) {
          // Prevent _close() being called when opened is set to its default value (false).
          if (old === undefined) {
            return;
          }

          if (this.opened) {
            this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring'); // For touch devices, we don't want to popup virtual keyboard unless input is explicitly focused by the user.

            if (!this.hasAttribute('focused') && !this.$.overlay.touchDevice) {
              this.focus();
            }
          } else {
            this._onClosed();

            if (this._openedWithFocusRing && this.hasAttribute('focused')) {
              this.focusElement.setAttribute('focus-ring', '');
            }
          }
        }
      }, {
        key: "_onOverlayTouchAction",
        value: function _onOverlayTouchAction(event) {
          // On touch devices, blur the input on touch start inside the overlay, in order to hide
          // the virtual keyboard. But don't close the overlay on this blur.
          this._closeOnBlurIsPrevented = true;
          this.inputElement.blur();
          this._closeOnBlurIsPrevented = false;
        }
      }, {
        key: "_onClick",
        value: function _onClick(e) {
          this._closeOnBlurIsPrevented = true;
          var path = e.composedPath();
          var isClearElement = path.indexOf(this._clearElement) !== -1 || path[0].getAttribute('part') === 'clear-button';

          if (isClearElement) {
            this._clear();

            this.focus();
          } else if (path.indexOf(this.inputElement) !== -1) {
            if (path.indexOf(this._toggleElement) > -1 && this.opened) {
              this.close();
            } else {
              this.open();
            }
          }

          this._closeOnBlurIsPrevented = false;
        }
        /**
         * Keyboard navigation
         */

      }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
          if (this._isEventKey(e, 'down')) {
            this._closeOnBlurIsPrevented = true;

            this._onArrowDown();

            this._closeOnBlurIsPrevented = false; // prevent caret from moving

            e.preventDefault();
          } else if (this._isEventKey(e, 'up')) {
            this._closeOnBlurIsPrevented = true;

            this._onArrowUp();

            this._closeOnBlurIsPrevented = false; // prevent caret from moving

            e.preventDefault();
          } else if (this._isEventKey(e, 'enter')) {
            this._onEnter(e);
          } else if (this._isEventKey(e, 'esc')) {
            this._onEscape(e);
          }
        }
      }, {
        key: "_isEventKey",
        value: function _isEventKey(e, k) {
          return _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k);
        }
      }, {
        key: "_getItemLabel",
        value: function _getItemLabel(item) {
          return this.$.overlay.getItemLabel(item);
        }
      }, {
        key: "_getItemValue",
        value: function _getItemValue(item) {
          var value = item && this.itemValuePath ? this.get(this.itemValuePath, item) : undefined;

          if (value === undefined) {
            value = item ? item.toString() : '';
          }

          return value;
        }
      }, {
        key: "_onArrowDown",
        value: function _onArrowDown() {
          if (this.opened) {
            if (this.$.overlay._items) {
              this._focusedIndex = Math.min(this.$.overlay._items.length - 1, this._focusedIndex + 1);

              this._prefillFocusedItemLabel();
            }
          } else {
            this.open();
          }
        }
      }, {
        key: "_onArrowUp",
        value: function _onArrowUp() {
          if (this.opened) {
            if (this._focusedIndex > -1) {
              this._focusedIndex = Math.max(0, this._focusedIndex - 1);
            } else {
              if (this.$.overlay._items) {
                this._focusedIndex = this.$.overlay._items.length - 1;
              }
            }

            this._prefillFocusedItemLabel();
          } else {
            this.open();
          }
        }
      }, {
        key: "_prefillFocusedItemLabel",
        value: function _prefillFocusedItemLabel() {
          var _this3 = this;

          if (this._focusedIndex > -1) {
            // Reset the input value asyncronously to prevent partial value changes
            // announce. Makes OSX VoiceOver to announce the complete value instead.
            this._inputElementValue = ''; // 1ms delay needed for OSX VoiceOver to realise input value was reset

            setTimeout(function () {
              _this3._inputElementValue = _this3._getItemLabel(_this3.$.overlay._focusedItem);

              _this3._markAllSelectionRange();
            }, 1);
          }
        }
      }, {
        key: "_setSelectionRange",
        value: function _setSelectionRange(start, end) {
          // vaadin-text-field does not implement setSelectionRange, hence we need the native input
          var input = this._nativeInput || this.inputElement; // Setting selection range focuses and/or moves the caret in some browsers,
          // and there's no need to modify the selection range if the input isn't focused anyway.
          // This affects Safari. When the overlay is open, and then hiting tab, browser should focus
          // the next focusable element instead of the combo-box itself.
          // Checking the focused property here is enough instead of checking the activeElement.

          if (this.hasAttribute('focused') && input && input.setSelectionRange) {
            try {
              input.setSelectionRange(start, end);
            } catch (ignore) {// IE11 randomly fails when running tests in Sauce.
            }
          }
        }
      }, {
        key: "_markAllSelectionRange",
        value: function _markAllSelectionRange() {
          if (this._inputElementValue !== undefined) {
            this._setSelectionRange(0, this._inputElementValue.length);
          }
        }
      }, {
        key: "_clearSelectionRange",
        value: function _clearSelectionRange() {
          if (this._inputElementValue !== undefined) {
            var pos = this._inputElementValue ? this._inputElementValue.length : 0;

            this._setSelectionRange(pos, pos);
          }
        }
      }, {
        key: "_onEnter",
        value: function _onEnter(e) {
          // should close on enter when custom values are allowed, input field is cleared, or when an existing
          // item is focused with keyboard.
          if (this.opened && (this.allowCustomValue || this._inputElementValue === '' || this._focusedIndex > -1)) {
            this.close(); // Do not submit the surrounding form.

            e.preventDefault(); // Do not trigger global listeners

            e.stopPropagation();
          }
        }
      }, {
        key: "_onEscape",
        value: function _onEscape(e) {
          if (this.opened) {
            this._stopPropagation(e);

            if (this._focusedIndex > -1) {
              this._focusedIndex = -1;

              this._revertInputValue();
            } else {
              this.cancel();
            }
          }
        }
      }, {
        key: "_toggleElementChanged",
        value: function _toggleElementChanged(toggleElement) {
          var _this4 = this;

          if (toggleElement) {
            // Don't blur the input on toggle mousedown
            toggleElement.addEventListener('mousedown', function (e) {
              return e.preventDefault();
            }); // Unfocus previously focused element if focus is not inside combo box (on touch devices)

            toggleElement.addEventListener('click', function (e) {
              if (_this4.$.overlay.touchDevice && !_this4.hasAttribute('focused')) {
                document.activeElement.blur();
              }
            });
          }
        }
        /**
         * Clears the current value.
         */

      }, {
        key: "_clear",
        value: function _clear() {
          this.selectedItem = null;

          if (this.allowCustomValue) {
            this.value = '';
          }

          this._detectAndDispatchChange();
        }
        /**
         * Reverts back to original value.
         */

      }, {
        key: "cancel",
        value: function cancel() {
          this._revertInputValueToValue(); // In the next _detectAndDispatchChange() call, the change detection should not pass


          this._lastCommittedValue = this.value;
          this.close();
        }
      }, {
        key: "_onOpened",
        value: function _onOpened() {
          var _this5 = this;

          // Pre P2 iron-list used a debouncer to render. Now that we synchronously render items,
          // we need to flush the DOM to make sure it doesn't get flushed in the middle of _render call
          // because that will cause problems to say the least.
          Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])(); // With iron-list v1.3.9, calling `notifyResize()` no longer renders
          // the items synchronously. It is required to have the items rendered
          // before we update the overlay and the list positions and sizes.

          this.$.overlay.ensureItemsRendered();

          this.$.overlay._selector.toggleScrollListener(true); // Ensure metrics are up-to-date


          this.$.overlay.updateViewportBoundaries(); // Force iron-list to create reusable nodes. Otherwise it will only start
          // doing that in scroll listener, which is especially slow in Edge.

          this.$.overlay._selector._increasePoolIfNeeded();

          setTimeout(function () {
            return _this5._resizeDropdown();
          }, 1); // Defer scroll position adjustment to prevent freeze in Edge

          window.requestAnimationFrame(function () {
            return _this5.$.overlay.adjustScrollPosition();
          }); // _detectAndDispatchChange() should not consider value changes done before opening

          this._lastCommittedValue = this.value;
        }
      }, {
        key: "_onClosed",
        value: function _onClosed() {
          var _this6 = this;

          // Happens when the overlay is closed by clicking outside
          if (this.opened) {
            this.close();
          }

          if (this.$.overlay._items && this._focusedIndex > -1) {
            var focusedItem = this.$.overlay._items[this._focusedIndex];

            if (this.selectedItem !== focusedItem) {
              this.selectedItem = focusedItem;
            } // make sure input field is updated in case value doesn't change (i.e. FOO -> foo)


            this._inputElementValue = this._getItemLabel(this.selectedItem);
          } else if (this._inputElementValue === '' || this._inputElementValue === undefined) {
            this.selectedItem = null;

            if (this.allowCustomValue) {
              this.value = '';
            }
          } else {
            if (this.allowCustomValue // to prevent a repetitive input value being saved after pressing ESC and Tab.
            && !(this.filteredItems && this.filteredItems.filter(function (item) {
              return _this6._getItemLabel(item) === _this6._inputElementValue;
            }).length)) {
              var e = new CustomEvent('custom-value-set', {
                detail: this._inputElementValue,
                composed: true,
                cancelable: true,
                bubbles: true
              });
              this.dispatchEvent(e);

              if (!e.defaultPrevented) {
                var customValue = this._inputElementValue;

                this._selectItemForValue(customValue);

                this.value = customValue;
              }
            } else {
              this._inputElementValue = this.selectedItem ? this._getItemLabel(this.selectedItem) : this.value || '';
            }
          }

          this._detectAndDispatchChange();

          this._clearSelectionRange();

          if (!this.dataProvider) {
            this.filter = '';
          }
        }
      }, {
        key: "_inputValueChanged",

        /**
         *  Filtering and items handling
         */
        value: function _inputValueChanged(e) {
          // Handle only input events from our inputElement.
          if (e.composedPath().indexOf(this.inputElement) !== -1) {
            this._inputElementValue = this.inputElement[this._propertyForValue];

            this._filterFromInput(e);
          }
        }
      }, {
        key: "_filterFromInput",
        value: function _filterFromInput(e) {
          if (!this.opened && !e.__fromClearButton) {
            this.open();
          }

          if (this.filter === this._inputElementValue) {
            // Filter and input value might get out of sync, while keyboard navigating for example.
            // Afterwards, input value might be changed to the same value as used in filtering.
            // In situation like these, we need to make sure all the filter changes handlers are run.
            this._filterChanged(this.filter, this.itemValuePath, this.itemLabelPath);
          } else {
            this.filter = this._inputElementValue;
          }
        }
      }, {
        key: "_itemLabelPathChanged",
        value: function _itemLabelPathChanged(itemLabelPath, oldItemLabelPath) {
          if (typeof itemLabelPath !== 'string') {
            console.error('You should set itemLabelPath to a valid string');
          }
        }
      }, {
        key: "_filterChanged",
        value: function _filterChanged(filter, itemValuePath, itemLabelPath) {
          if (filter === undefined) {
            return;
          }

          if (this.items) {
            this.filteredItems = this._filterItems(this.items, filter);
          } else {
            // With certain use cases (e. g., external filtering), `items` are
            // undefined. Filtering is unnecessary per se, but the filteredItems
            // observer should still be invoked to update focused item.
            this._filteredItemsChanged({
              path: 'filteredItems',
              value: this.filteredItems
            }, itemValuePath, itemLabelPath);
          }
        }
      }, {
        key: "_loadingChanged",
        value: function _loadingChanged(loading) {
          if (loading) {
            this._focusedIndex = -1;
          }
        }
      }, {
        key: "_revertInputValue",
        value: function _revertInputValue() {
          if (this.filter !== '') {
            this._inputElementValue = this.filter;
          } else {
            this._revertInputValueToValue();
          }

          this._clearSelectionRange();
        }
      }, {
        key: "_revertInputValueToValue",
        value: function _revertInputValueToValue() {
          if (this.allowCustomValue && !this.selectedItem) {
            this._inputElementValue = this.value;
          } else {
            this._inputElementValue = this._getItemLabel(this.selectedItem);
          }
        }
      }, {
        key: "_resizeDropdown",
        value: function _resizeDropdown() {
          this.$.overlay.$.dropdown.notifyResize();
        }
      }, {
        key: "_updateHasValue",
        value: function _updateHasValue(hasValue) {
          if (hasValue) {
            this.setAttribute('has-value', '');
          } else {
            this.removeAttribute('has-value');
          }
        }
      }, {
        key: "_selectedItemChanged",
        value: function _selectedItemChanged(selectedItem, itemLabelPath) {
          if (selectedItem === null || selectedItem === undefined) {
            if (this.filteredItems) {
              if (!this.allowCustomValue) {
                this.value = '';
              }

              this._updateHasValue(this.value !== '');

              this._inputElementValue = this.value;
            }
          } else {
            var value = this._getItemValue(selectedItem);

            if (this.value !== value) {
              this.value = value;

              if (this.value !== value) {
                // The value was changed to something else in value-changed listener,
                // so prevent from resetting it to the previous value.
                return;
              }
            }

            this._updateHasValue(true);

            this._inputElementValue = this._getItemLabel(selectedItem); // Could not be defined in 1.x because ready is called after all prop-setters

            if (this.inputElement) {
              this.inputElement[this._propertyForValue] = this._inputElementValue;
            }
          }

          this.$.overlay._selectedItem = selectedItem;

          if (this.filteredItems && this.$.overlay._items) {
            this._focusedIndex = this.filteredItems.indexOf(selectedItem);
          }
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(value, oldVal) {
          if (value === '' && oldVal === undefined) {
            // initializing, no need to do anything (#554)
            return;
          }

          if (this._isValidValue(value)) {
            var item;

            if (this._getItemValue(this.selectedItem) !== value) {
              this._selectItemForValue(value);
            } else {
              item = this.selectedItem;
            }

            if (!item && this.allowCustomValue) {
              this._inputElementValue = value;
            }

            this._updateHasValue(this.value !== '');
          } else {
            this.selectedItem = null;
          } // In the next _detectAndDispatchChange() call, the change detection should pass


          this._lastCommittedValue = undefined;
        }
      }, {
        key: "_detectAndDispatchChange",
        value: function _detectAndDispatchChange() {
          if (this.value !== this._lastCommittedValue) {
            this.dispatchEvent(new CustomEvent('change', {
              bubbles: true
            }));
            this._lastCommittedValue = this.value;
          }
        }
      }, {
        key: "_itemsChanged",
        value: function _itemsChanged(items, oldItems) {
          var _this7 = this;

          this._ensureItemsOrDataProvider(function () {
            _this7.items = oldItems;
          });
        }
      }, {
        key: "_itemsOrPathsChanged",
        value: function _itemsOrPathsChanged(e, itemValuePath, itemLabelPath) {
          if (e.value === undefined) {
            return;
          }

          if (e.path === 'items' || e.path === 'items.splices') {
            this.filteredItems = this.items ? this.items.slice(0) : this.items;

            var valueIndex = this._indexOfValue(this.value, this.items);

            this._focusedIndex = valueIndex;
            var item = valueIndex > -1 && this.items[valueIndex];

            if (item) {
              this.selectedItem = item;
            }
          }
        }
      }, {
        key: "_filteredItemsChanged",
        value: function _filteredItemsChanged(e, itemValuePath, itemLabelPath) {
          if (e.value === undefined) {
            return;
          }

          if (e.path === 'filteredItems' || e.path === 'filteredItems.splices') {
            this._setOverlayItems(this.filteredItems);

            this._focusedIndex = this.opened ? this.$.overlay.indexOfLabel(this.filter) : this._indexOfValue(this.value, this.filteredItems);

            if (this.opened) {
              this._repositionOverlay();
            }
          }
        }
      }, {
        key: "_filterItems",
        value: function _filterItems(arr, filter) {
          var _this8 = this;

          if (!arr) {
            return arr;
          }

          return arr.filter(function (item) {
            filter = filter ? filter.toString().toLowerCase() : ''; // Check if item contains input value.

            return _this8._getItemLabel(item).toString().toLowerCase().indexOf(filter) > -1;
          });
        }
      }, {
        key: "_selectItemForValue",
        value: function _selectItemForValue(value) {
          var valueIndex = this._indexOfValue(value, this.filteredItems);

          var previouslySelectedItem = this.selectedItem;
          this.selectedItem = valueIndex >= 0 ? this.filteredItems[valueIndex] : this.dataProvider && this.selectedItem === undefined ? undefined : null;

          if (this.selectedItem === null && previouslySelectedItem === null) {
            this._selectedItemChanged(this.selectedItem);
          }
        }
      }, {
        key: "_setOverlayItems",
        value: function _setOverlayItems(items) {
          this.$.overlay.set('_items', items);
        }
      }, {
        key: "_repositionOverlay",
        value: function _repositionOverlay() {
          var _this9 = this;

          // async needed to reposition correctly after filtering
          // (especially when aligned on top of input)
          this.__repositionOverlayDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this.__repositionOverlayDebouncer, // Long debounce: sizing updates invoke multiple styling rounds,
          // which is very slow in Edge
          _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(500), function () {
            var selector = _this9.$.overlay._selector;

            if (!selector._isClientFull()) {
              // Due to the mismatch of the Y position of the item rendered
              // at the top of the scrolling list with some specific scroll
              // position values (2324, 3486, 6972, 60972, 95757 etc.)
              // iron-list loops the increasing of the pool and adds
              // too many items to the DOM.
              // Adjusting scroll position to equal the current scrollTop value
              // to avoid looping.
              selector._resetScrollPosition(selector._physicalTop);
            }

            _this9._resizeDropdown();

            _this9.$.overlay.updateViewportBoundaries();

            _this9.$.overlay.ensureItemsRendered();

            selector.notifyResize();
            Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["flush"])();
          });
        }
      }, {
        key: "_indexOfValue",
        value: function _indexOfValue(value, items) {
          if (items && this._isValidValue(value)) {
            for (var i = 0; i < items.length; i++) {
              if (this._getItemValue(items[i]) === value) {
                return i;
              }
            }
          }

          return -1;
        }
        /**
         * Checks if the value is supported as an item value in this control.
         *
         * @return {boolean}
         */

      }, {
        key: "_isValidValue",
        value: function _isValidValue(value) {
          return value !== undefined && value !== null;
        }
      }, {
        key: "_overlaySelectedItemChanged",
        value: function _overlaySelectedItemChanged(e) {
          // stop this private event from leaking outside.
          e.stopPropagation();

          if (e.detail.item instanceof _vaadin_combo_box_placeholder_js__WEBPACK_IMPORTED_MODULE_7__["ComboBoxPlaceholder"]) {
            // Placeholder items should not be selectable.
            return;
          }

          if (this.opened) {
            this._focusedIndex = this.filteredItems.indexOf(e.detail.item);
            this.close();
          } else if (this.selectedItem !== e.detail.item) {
            this.selectedItem = e.detail.item;

            this._detectAndDispatchChange();
          }
        }
      }, {
        key: "_onFocusout",
        value: function _onFocusout(event) {
          // Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
          var dropdown = this.$.overlay.$.dropdown;

          if (dropdown && dropdown.$ && event.relatedTarget === dropdown.$.overlay) {
            event.composedPath()[0].focus();
            return;
          }

          if (!this._closeOnBlurIsPrevented) {
            this.close();
          }
        }
      }, {
        key: "_onTouchend",
        value: function _onTouchend(event) {
          if (!this._clearElement || event.composedPath()[0] !== this._clearElement) {
            return;
          }

          event.preventDefault();

          this._clear();
        }
        /**
         * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
         *
         * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
         */

      }, {
        key: "validate",
        value: function validate() {
          return !(this.invalid = !this.checkValidity());
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         *
         * You can override the `checkValidity` method for custom validations.
         */

      }, {
        key: "checkValidity",
        value: function checkValidity() {
          if (this.inputElement.validate) {
            return this.inputElement.validate();
          }
        }
      }, {
        key: "_ensureTemplatized",
        value: function _ensureTemplatized() {
          if (!this._TemplateClass) {
            var tpl = this._itemTemplate || this._getRootTemplate();

            if (tpl) {
              this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_3__["templatize"])(tpl, this, {
                instanceProps: this._instanceProps,
                forwardHostProp: function forwardHostProp(prop, value) {
                  var items = this.$.overlay._selector.querySelectorAll('vaadin-combo-box-item');

                  Array.prototype.forEach.call(items, function (item) {
                    if (item._itemTemplateInstance) {
                      item._itemTemplateInstance.set(prop, value);

                      item._itemTemplateInstance.notifyPath(prop, value, true);
                    }
                  });
                }
              });
            }
          }
        }
      }, {
        key: "_getRootTemplate",
        value: function _getRootTemplate() {
          return Array.prototype.filter.call(this.children, function (elem) {
            return elem.tagName === 'TEMPLATE';
          })[0];
        }
      }, {
        key: "_preventInputBlur",
        value: function _preventInputBlur() {
          if (this._toggleElement) {
            this._toggleElement.addEventListener('click', this._preventDefault);
          }

          if (this._clearElement) {
            this._clearElement.addEventListener('click', this._preventDefault);
          }
        }
      }, {
        key: "_restoreInputBlur",
        value: function _restoreInputBlur() {
          if (this._toggleElement) {
            this._toggleElement.removeEventListener('click', this._preventDefault);
          }

          if (this._clearElement) {
            this._clearElement.removeEventListener('click', this._preventDefault);
          }
        }
      }, {
        key: "_preventDefault",
        value: function _preventDefault(e) {
          e.preventDefault();
        }
      }, {
        key: "_stopPropagation",
        value: function _stopPropagation(e) {
          e.stopPropagation();
        }
        /**
         * Fired when the value changes.
         *
         * @event value-changed
         * @param {Object} detail
         *  @param {String} detail.value the combobox value
         */

        /**
         * Fired when selected item changes.
         *
         * @event selected-item-changed
         * @param {Object} detail
         *  @param {Object|String} detail.value the selected item. Type is the same as the type of `items`.
         */

        /**
         * Fired when the user sets a custom value.
         * @event custom-value-set
         * @param {String} detail the custom value
         */

        /**
         * Fired when value changes.
         * To comply with https://developer.mozilla.org/en-US/docs/Web/Events/change
         * @event change
         */

      }, {
        key: "_propertyForValue",
        get: function get() {
          return 'value';
        }
      }, {
        key: "_instanceProps",
        get: function get() {
          return {
            item: true,
            index: true,
            selected: true,
            focused: true
          };
        }
      }]);

      return VaadinComboBoxMixinElement;
    }(subclass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-placeholder.js ***!
  \***********************************************************************************/
/*! exports provided: ComboBoxPlaceholder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComboBoxPlaceholder", function() { return ComboBoxPlaceholder; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/*
 * Placeholder object class representing items being loaded.
 *
 * @private
 */
var ComboBoxPlaceholder =
/*#__PURE__*/
function () {
  function ComboBoxPlaceholder() {
    _classCallCheck(this, ComboBoxPlaceholder);
  }

  _createClass(ComboBoxPlaceholder, [{
    key: "toString",
    value: function toString() {
      return '';
    }
  }]);

  return ComboBoxPlaceholder;
}();

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-dropdown-styles.js":
/*!**************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-dropdown-styles.js ***!
  \**************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/menu-overlay.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/menu-overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-combo-box-overlay\" theme-for=\"vaadin-combo-box-overlay\">\n  <template>\n    <style include=\"material-menu-overlay\">\n      :host {\n        /* TODO using a legacy mixin (unsupported) */\n        --iron-list-items-container: {\n          border-width: 8px 0;\n          border-style: solid;\n          border-color: transparent;\n        };\n      }\n\n      [part=\"overlay\"] {\n        position: relative;\n        overflow: visible;\n        border-top-left-radius: 0;\n        border-top-right-radius: 0;\n      }\n\n      [part=\"content\"] {\n        padding: 0;\n      }\n\n      :host([loading]) [part=\"loader\"] {\n        height: 2px;\n        position: absolute;\n        z-index: 1;\n        top: -2px;\n        left: 0;\n        right: 0;\n        background:\n          var(--material-background-color) linear-gradient(\n            90deg,\n            transparent 0%,\n            transparent 20%,\n            var(--material-primary-color) 20%,\n            var(--material-primary-color) 40%,\n            transparent 40%,\n            transparent 60%,\n            var(--material-primary-color) 60%,\n            var(--material-primary-color) 80%,\n            transparent 80%,\n            transparent 100%\n          ) 0 0 / 400% 100% repeat-x;\n        opacity: 0;\n        animation:\n          3s linear infinite material-combo-box-loader-progress,\n          .3s .1s both material-combo-box-loader-fade-in;\n      }\n\n      [part=\"loader\"]::before {\n        content: '';\n        display: block;\n        height: 100%;\n        opacity: 0.16;\n        background: var(--material-primary-color);\n      }\n\n      @keyframes material-combo-box-loader-fade-in {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes material-combo-box-loader-progress {\n        0% {\n          background-position: 0 0;\n          background-size: 300% 100%;\n        }\n\n        33% {\n          background-position: -100% 0;\n          background-size: 400% 100%;\n        }\n\n        67% {\n          background-position: -200% 0;\n          background-size: 250% 100%;\n        }\n\n        100% {\n          background-position: -300% 0;\n          background-size: 300% 100%;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-item-styles.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-item-styles.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_item_theme_material_vaadin_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-item/theme/material/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-combo-box-item\" theme-for=\"vaadin-combo-box-item\">\n  <template>\n    <style include=\"material-item\">\n      :host {\n        cursor: pointer;\n        -webkit-tap-highlight-color: transparent;\n        padding: 4px 10px;\n        min-height: 36px;\n        font-size: var(--material-small-font-size);\n        --_material-item-selected-icon-display: block;\n      }\n\n      /* ShadyCSS workaround */\n      :host::before {\n        display: block;\n      }\n\n      :host(:hover) {\n        background-color: var(--material-secondary-background-color);\n      }\n\n      :host([focused]) {\n        background-color: var(--material-divider-color);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover),\n        :host([focused]) {\n          background-color: transparent;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-light.js ***!
  \****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_combo_box_dropdown_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-dropdown-styles.js");
/* harmony import */ var _vaadin_combo_box_item_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-combo-box-item-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/material/vaadin-combo-box-item-styles.js");
/* harmony import */ var _src_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/vaadin-combo-box-light.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js");




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js ***!
  \*******************************************************************/
/*! exports provided: ItemMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemMixin", function() { return ItemMixin; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/

/**
 * A mixin providing `focused`, `focus-ring`, `active`, `disabled` and `selected`.
 *
 * `focused`, `active` and `focus-ring` are set as only as attributes.
 * @polymerMixin
 */
var ItemMixin = function ItemMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinItemMixin, _superClass);

      function VaadinItemMixin() {
        _classCallCheck(this, VaadinItemMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinItemMixin).apply(this, arguments));
      }

      _createClass(VaadinItemMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinItemMixin.prototype), "ready", this).call(this);

          var attrValue = this.getAttribute('value');

          if (attrValue !== null) {
            this.value = attrValue;
          }

          this.addEventListener('focus', function (e) {
            return _this._setFocused(true);
          }, true);
          this.addEventListener('blur', function (e) {
            return _this._setFocused(false);
          }, true);
          this.addEventListener('mousedown', function (e) {
            _this._setActive(_this._mousedown = true);

            var mouseUpListener = function mouseUpListener() {
              _this._setActive(_this._mousedown = false);

              document.removeEventListener('mouseup', mouseUpListener);
            };

            document.addEventListener('mouseup', mouseUpListener);
          });
          this.addEventListener('keydown', function (e) {
            return _this._onKeydown(e);
          });
          this.addEventListener('keyup', function (e) {
            return _this._onKeyup(e);
          });
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinItemMixin.prototype), "disconnectedCallback", this).call(this); // in Firefox and Safari, blur does not fire on the element when it is removed,
          // especially between keydown and keyup events, being active at the same time.
          // reproducible in `<vaadin-select>` when closing overlay on select.


          if (this.hasAttribute('active')) {
            this._setFocused(false);
          }
        }
      }, {
        key: "_selectedChanged",
        value: function _selectedChanged(selected) {
          this.setAttribute('aria-selected', selected);
        }
      }, {
        key: "_disabledChanged",
        value: function _disabledChanged(disabled) {
          if (disabled) {
            this.selected = false;
            this.setAttribute('aria-disabled', 'true');
            this.blur();
          } else {
            this.removeAttribute('aria-disabled');
          }
        }
      }, {
        key: "_setFocused",
        value: function _setFocused(focused) {
          if (focused) {
            this.setAttribute('focused', '');

            if (!this._mousedown) {
              this.setAttribute('focus-ring', '');
            }
          } else {
            this.removeAttribute('focused');
            this.removeAttribute('focus-ring');

            this._setActive(false);
          }
        }
      }, {
        key: "_setActive",
        value: function _setActive(active) {
          if (active) {
            this.setAttribute('active', '');
          } else {
            this.removeAttribute('active');
          }
        }
      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          if (/^( |SpaceBar|Enter)$/.test(event.key) && !event.defaultPrevented) {
            event.preventDefault();

            this._setActive(true);
          }
        }
      }, {
        key: "_onKeyup",
        value: function _onKeyup(event) {
          if (this.hasAttribute('active')) {
            this._setActive(false);

            this.click();
          }
        }
      }, {
        key: "value",
        get: function get() {
          return this._value !== undefined ? this._value : this.textContent.trim();
        },
        set: function set(value) {
          this._value = value;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Used for mixin detection because `instanceof` does not work with mixins.
             * e.g. in VaadinListMixin it filters items by using the
             * `element._hasVaadinItemMixin` condition.
             */
            _hasVaadinItemMixin: {
              value: true
            },

            /**
             * If true, the user cannot interact with this element.
             */
            disabled: {
              type: Boolean,
              value: false,
              observer: '_disabledChanged',
              reflectToAttribute: true
            },

            /**
             * If true, the item is in selected state.
             */
            selected: {
              type: Boolean,
              value: false,
              reflectToAttribute: true,
              observer: '_selectedChanged'
            },
            _value: String
          };
        }
      }]);

      return VaadinItemMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/src/vaadin-item.js":
/*!*************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/src/vaadin-item.js ***!
  \*************************************************************/
/*! exports provided: ItemElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemElement", function() { return ItemElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-item-mixin.js */ "./node_modules/@vaadin/vaadin-item/src/vaadin-item-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n    </style>\n    <div part=\"content\">\n      <slot></slot>\n    </div>\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




/**
 * `<vaadin-item>` is a Web Component providing layout for items in tabs and menus.
 *
 * ```
 *   <vaadin-item>
 *     Item content
 *   </vaadin-item>
 * ```
 *
 * ### Selectable
 *
 * `<vaadin-item>` has the `selected` property and the corresponding state attribute.
 * Currently, the component sets the `selected` to false, when `disabled` property is set to true.
 * But other than that, the `<vaadin-item>` does not switch selection by itself.
 * In general, it is the wrapper component, like `<vaadin-list-box>`, which should update
 * the `selected` property on the items, e. g. on mousedown or when Enter / Spacebar is pressed.
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ---|---
 * `content` | The element that wraps the slot
 *
 * The following state attributes are available for styling:
 *
 * Attribute  | Description | Part name
 * -----------|-------------|------------
 * `disabled` | Set to a disabled item | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `selected` | Set when the item is selected | :host
 * `active` | Set when mousedown or enter/spacebar pressed | :host
 *
 * @memberof Vaadin
 * @mixes Vaadin.ItemMixin
 * @mixes Vaadin.ThemableMixin
 */

var ItemElement =
/*#__PURE__*/
function (_ItemMixin) {
  _inherits(ItemElement, _ItemMixin);

  _createClass(ItemElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-item';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.1.1';
    }
  }]);

  function ItemElement() {
    var _this;

    _classCallCheck(this, ItemElement);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ItemElement).call(this));
    /**
     * Submittable string value. The default value is the trimmed text content of the element.
     * @type {string}
     */

    _this.value;
    return _this;
  }

  return ItemElement;
}(Object(_vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ItemMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(ItemElement.is, ItemElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item-styles.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item-styles.js ***!
  \*******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-item\" theme-for=\"vaadin-item\">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        overflow: hidden;\n        font-family: var(--material-font-family);\n        font-size: var(--material-body-font-size);\n        line-height: 24px;\n        padding: 4px 0;\n      }\n\n      /* It's the list-box's responsibility to add the focus style */\n      :host([focused]) {\n        outline: none;\n      }\n\n      /* Selected item has an icon */\n\n      :host::before {\n        display: var(--_material-item-selected-icon-display, none);\n        content: \"\";\n        font-family: material-icons;\n        font-size: 24px;\n        line-height: 1;\n        font-weight: 400;\n        width: 24px;\n        text-align: center;\n        margin-right: 10px;\n        color: var(--material-secondary-text-color);\n        flex: none;\n      }\n\n      :host([selected])::before {\n        content: var(--material-icons-check);\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--material-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item.js":
/*!************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item.js ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_item_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-item-styles.js */ "./node_modules/@vaadin/vaadin-item/theme/material/vaadin-item-styles.js");
/* harmony import */ var _src_vaadin_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/src/vaadin-item.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/menu-overlay.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/menu-overlay.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js");


var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"material-menu-overlay\">\n  <template>\n    <style include=\"material-overlay\">\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktYWxhcm0tcGFuZWwtY2FyZC1lZGl0b3J+aHVpLWRpYWxvZy1lZGl0LXZpZXd+aHVpLWVudGl0aWVzLWNhcmQtZWRpdG9yfmh1aS1lbnRpdHktYnV0dG9uLX4wZmNlMDI4Mi5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWxpc3QvaXJvbi1saXN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvc3JjL3ZhYWRpbi1jb21iby1ib3gtZGF0YS1wcm92aWRlci1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC9zcmMvdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC9zcmMvdmFhZGluLWNvbWJvLWJveC1saWdodC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3NyYy92YWFkaW4tY29tYm8tYm94LW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1jb21iby1ib3gvc3JjL3ZhYWRpbi1jb21iby1ib3gtcGxhY2Vob2xkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC90aGVtZS9tYXRlcmlhbC92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29tYm8tYm94L3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1jb21iby1ib3gtaXRlbS1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbWJvLWJveC90aGVtZS9tYXRlcmlhbC92YWFkaW4tY29tYm8tYm94LWxpZ2h0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1pdGVtL3NyYy92YWFkaW4taXRlbS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4taXRlbS9zcmMvdmFhZGluLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWl0ZW0vdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWl0ZW0tc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1pdGVtL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1pdGVtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL21lbnUtb3ZlcmxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTYgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHtJcm9uUmVzaXphYmxlQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7SXJvblNjcm9sbFRhcmdldEJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLXNjcm9sbC10YXJnZXQtYmVoYXZpb3IvaXJvbi1zY3JvbGwtdGFyZ2V0LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7T3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvbXV0YWJsZS1kYXRhLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lciBhcyBQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7VGVtcGxhdGl6ZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS90ZW1wbGF0aXplci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge2FuaW1hdGlvbkZyYW1lLCBpZGxlUGVyaW9kLCBtaWNyb1Rhc2t9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcbmltcG9ydCB7RGVib3VuY2VyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQge2VucXVldWVEZWJvdW5jZXIsIGZsdXNofSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7bWF0Y2hlcywgdHJhbnNsYXRlfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9wYXRoLmpzJztcbmltcG9ydCB7VGVtcGxhdGVJbnN0YW5jZUJhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3RlbXBsYXRpemUuanMnO1xuXG52YXIgSU9TID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoPzpob25lfGFkOyg/OiBVOyk/IENQVSkgT1MgKFxcZCspLyk7XG52YXIgSU9TX1RPVUNIX1NDUk9MTElORyA9IElPUyAmJiBJT1NbMV0gPj0gODtcbnZhciBERUZBVUxUX1BIWVNJQ0FMX0NPVU5UID0gMztcbnZhciBISURERU5fWSA9ICctMTAwMDBweCc7XG52YXIgU0VDUkVUX1RBQklOREVYID0gLTEwMDtcblxuLyoqXG5cbmBpcm9uLWxpc3RgIGRpc3BsYXlzIGEgdmlydHVhbCwgJ2luZmluaXRlJyBsaXN0LiBUaGUgdGVtcGxhdGUgaW5zaWRlXG50aGUgaXJvbi1saXN0IGVsZW1lbnQgcmVwcmVzZW50cyB0aGUgRE9NIHRvIGNyZWF0ZSBmb3IgZWFjaCBsaXN0IGl0ZW0uXG5UaGUgYGl0ZW1zYCBwcm9wZXJ0eSBzcGVjaWZpZXMgYW4gYXJyYXkgb2YgbGlzdCBpdGVtIGRhdGEuXG5cbkZvciBwZXJmb3JtYW5jZSByZWFzb25zLCBub3QgZXZlcnkgaXRlbSBpbiB0aGUgbGlzdCBpcyByZW5kZXJlZCBhdCBvbmNlO1xuaW5zdGVhZCBhIHNtYWxsIHN1YnNldCBvZiBhY3R1YWwgdGVtcGxhdGUgZWxlbWVudHMgKihlbm91Z2ggdG8gZmlsbCB0aGVcbnZpZXdwb3J0KSogYXJlIHJlbmRlcmVkIGFuZCByZXVzZWQgYXMgdGhlIHVzZXIgc2Nyb2xscy4gQXMgc3VjaCwgaXQgaXMgaW1wb3J0YW50XG50aGF0IGFsbCBzdGF0ZSBvZiB0aGUgbGlzdCB0ZW1wbGF0ZSBpcyBib3VuZCB0byB0aGUgbW9kZWwgZHJpdmluZyBpdCwgc2luY2UgdGhlXG52aWV3IG1heSBiZSByZXVzZWQgd2l0aCBhIG5ldyBtb2RlbCBhdCBhbnkgdGltZS4gUGFydGljdWxhcmx5LCBhbnkgc3RhdGUgdGhhdFxubWF5IGNoYW5nZSBhcyB0aGUgcmVzdWx0IG9mIGEgdXNlciBpbnRlcmFjdGlvbiB3aXRoIHRoZSBsaXN0IGl0ZW0gbXVzdCBiZSBib3VuZFxudG8gdGhlIG1vZGVsIHRvIGF2b2lkIHZpZXcgc3RhdGUgaW5jb25zaXN0ZW5jeS5cblxuIyMjIFNpemluZyBpcm9uLWxpc3RcblxuYGlyb24tbGlzdGAgbXVzdCBlaXRoZXIgYmUgZXhwbGljaXRseSBzaXplZCwgb3IgZGVsZWdhdGUgc2Nyb2xsaW5nIHRvIGFuXG5leHBsaWNpdGx5IHNpemVkIHBhcmVudC4gQnkgXCJleHBsaWNpdGx5IHNpemVkXCIsIHdlIG1lYW4gaXQgZWl0aGVyIGhhcyBhblxuZXhwbGljaXQgQ1NTIGBoZWlnaHRgIHByb3BlcnR5IHNldCB2aWEgYSBjbGFzcyBvciBpbmxpbmUgc3R5bGUsIG9yIGVsc2UgaXMgc2l6ZWRcbmJ5IG90aGVyIGxheW91dCBtZWFucyAoZS5nLiB0aGUgYGZsZXhgIG9yIGBmaXRgIGNsYXNzZXMpLlxuXG4jIyMjIEZsZXhib3ggLSBbanNiaW5dKGh0dHBzOi8vanNiaW4uY29tL3Zlam9uaS9lZGl0P2h0bWwsb3V0cHV0KVxuXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxhcHAtdG9vbGJhcj5BcHAgbmFtZTwvYXBwLXRvb2xiYXI+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBFeHBsaWNpdCBzaXplIC0gW2pzYmluXShodHRwczovL2pzYmluLmNvbS92b3B1Y3VzL2VkaXQ/aHRtbCxvdXRwdXQpXG5gYGBodG1sXG48dGVtcGxhdGUgaXM9XCJ4LWxpc3RcIj5cbiAgPHN0eWxlPlxuICAgIDpob3N0IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICBoZWlnaHQ6IDEwMHZoOyAvKiBkb24ndCB1c2UgJSB2YWx1ZXMgdW5sZXNzIHRoZSBwYXJlbnQgZWxlbWVudCBpcyBzaXplZC5cbipcXC9cbiAgICB9XG4gIDwvc3R5bGU+XG4gIDxpcm9uLWxpc3QgaXRlbXM9XCJbW2l0ZW1zXV1cIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC90ZW1wbGF0ZT5cbmBgYFxuIyMjIyBNYWluIGRvY3VtZW50IHNjcm9sbGluZyAtXG5banNiaW5dKGh0dHBzOi8vanNiaW4uY29tL3dldmlyb3cvZWRpdD9odG1sLG91dHB1dClcbmBgYGh0bWxcbjxoZWFkPlxuICA8c3R5bGU+XG4gICAgYm9keSB7XG4gICAgICBoZWlnaHQ6IDEwMHZoO1xuICAgICAgbWFyZ2luOiAwO1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgfVxuXG4gICAgYXBwLXRvb2xiYXIge1xuICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgdG9wOiAwO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHJpZ2h0OiAwO1xuICAgIH1cblxuICAgIGlyb24tbGlzdCB7XG4gICAgICAvKiBhZGQgcGFkZGluZyBzaW5jZSB0aGUgYXBwLXRvb2xiYXIgaXMgZml4ZWQgYXQgdGhlIHRvcCAqXFwvXG4gICAgICBwYWRkaW5nLXRvcDogNjRweDtcbiAgICB9XG4gIDwvc3R5bGU+XG48L2hlYWQ+XG48Ym9keT5cbiAgPGFwcC10b29sYmFyPkFwcCBuYW1lPC9hcHAtdG9vbGJhcj5cbiAgPGlyb24tbGlzdCBzY3JvbGwtdGFyZ2V0PVwiZG9jdW1lbnRcIj5cbiAgICA8dGVtcGxhdGU+XG4gICAgICA8ZGl2PlxuICAgICAgICAuLi5cbiAgICAgIDwvZGl2PlxuICAgIDwvdGVtcGxhdGU+XG4gIDwvaXJvbi1saXN0PlxuPC9ib2R5PlxuYGBgXG5cbmBpcm9uLWxpc3RgIG11c3QgYmUgZ2l2ZW4gYSBgPHRlbXBsYXRlPmAgd2hpY2ggY29udGFpbnMgZXhhY3RseSBvbmUgZWxlbWVudC4gSW5cbnRoZSBleGFtcGxlcyBhYm92ZSB3ZSB1c2VkIGEgYDxkaXY+YCwgYnV0IHlvdSBjYW4gcHJvdmlkZSBhbnkgZWxlbWVudCAoaW5jbHVkaW5nXG5jdXN0b20gZWxlbWVudHMpLlxuXG4jIyMgVGVtcGxhdGUgbW9kZWxcblxuTGlzdCBpdGVtIHRlbXBsYXRlcyBzaG91bGQgYmluZCB0byB0ZW1wbGF0ZSBtb2RlbHMgb2YgdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmU6XG5cbmBgYGpzXG57XG4gIGluZGV4OiAwLCAgICAgICAgLy8gaW5kZXggaW4gdGhlIGl0ZW0gYXJyYXlcbiAgc2VsZWN0ZWQ6IGZhbHNlLCAvLyB0cnVlIGlmIHRoZSBjdXJyZW50IGl0ZW0gaXMgc2VsZWN0ZWRcbiAgdGFiSW5kZXg6IC0xLCAgICAvLyBhIGR5bmFtaWNhbGx5IGdlbmVyYXRlZCB0YWJJbmRleCBmb3IgZm9jdXMgbWFuYWdlbWVudFxuICBpdGVtOiB7fSAgICAgICAgIC8vIHVzZXIgZGF0YSBjb3JyZXNwb25kaW5nIHRvIGl0ZW1zW2luZGV4XVxufVxuYGBgXG5cbkFsdGVybmF0aXZlbHksIHlvdSBjYW4gY2hhbmdlIHRoZSBwcm9wZXJ0eSBuYW1lIHVzZWQgYXMgZGF0YSBpbmRleCBieSBjaGFuZ2luZ1xudGhlIGBpbmRleEFzYCBwcm9wZXJ0eS4gVGhlIGBhc2AgcHJvcGVydHkgZGVmaW5lcyB0aGUgbmFtZSBvZiB0aGUgdmFyaWFibGUgdG9cbmFkZCB0byB0aGUgYmluZGluZyBzY29wZSBmb3IgdGhlIGFycmF5LlxuXG5Gb3IgZXhhbXBsZSwgZ2l2ZW4gdGhlIGZvbGxvd2luZyBgZGF0YWAgYXJyYXk6XG5cbiMjIyMjIGRhdGEuanNvblxuXG5gYGBqc1xuW1xuICB7XCJuYW1lXCI6IFwiQm9iXCJ9LFxuICB7XCJuYW1lXCI6IFwiVGltXCJ9LFxuICB7XCJuYW1lXCI6IFwiTWlrZVwifVxuXVxuYGBgXG5cblRoZSBmb2xsb3dpbmcgY29kZSB3b3VsZCByZW5kZXIgdGhlIGxpc3QgKG5vdGUgdGhlIG5hbWUgcHJvcGVydHkgaXMgYm91bmQgZnJvbVxudGhlIG1vZGVsIG9iamVjdCBwcm92aWRlZCB0byB0aGUgdGVtcGxhdGUgc2NvcGUpOlxuXG5gYGBodG1sXG48aXJvbi1hamF4IHVybD1cImRhdGEuanNvblwiIGxhc3QtcmVzcG9uc2U9XCJ7e2RhdGF9fVwiIGF1dG8+PC9pcm9uLWFqYXg+XG48aXJvbi1saXN0IGl0ZW1zPVwiW1tkYXRhXV1cIiBhcz1cIml0ZW1cIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxkaXY+XG4gICAgICBOYW1lOiBbW2l0ZW0ubmFtZV1dXG4gICAgPC9kaXY+XG4gIDwvdGVtcGxhdGU+XG48L2lyb24tbGlzdD5cbmBgYFxuXG4jIyMgR3JpZCBsYXlvdXRcblxuYGlyb24tbGlzdGAgc3VwcG9ydHMgYSBncmlkIGxheW91dCBpbiBhZGRpdGlvbiB0byBsaW5lYXIgbGF5b3V0IGJ5IHNldHRpbmdcbnRoZSBgZ3JpZGAgYXR0cmlidXRlLiAgSW4gdGhpcyBjYXNlLCB0aGUgbGlzdCB0ZW1wbGF0ZSBpdGVtIG11c3QgaGF2ZSBib3RoIGZpeGVkXG53aWR0aCBhbmQgaGVpZ2h0IChlLmcuIHZpYSBDU1MpLiBCYXNlZCBvbiB0aGlzLCB0aGUgbnVtYmVyIG9mIGl0ZW1zXG5wZXIgcm93IGFyZSBkZXRlcm1pbmVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gdGhlIHNpemUgb2YgdGhlIGxpc3Qgdmlld3BvcnQuXG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbmBpcm9uLWxpc3RgIGF1dG9tYXRpY2FsbHkgbWFuYWdlcyB0aGUgZm9jdXMgc3RhdGUgZm9yIHRoZSBpdGVtcy4gSXQgYWxzb1xucHJvdmlkZXMgYSBgdGFiSW5kZXhgIHByb3BlcnR5IHdpdGhpbiB0aGUgdGVtcGxhdGUgc2NvcGUgdGhhdCBjYW4gYmUgdXNlZCBmb3JcbmtleWJvYXJkIG5hdmlnYXRpb24uIEZvciBleGFtcGxlLCB1c2VycyBjYW4gcHJlc3MgdGhlIHVwIGFuZCBkb3duIGtleXMgdG8gbW92ZVxudG8gcHJldmlvdXMgYW5kIG5leHQgaXRlbXMgaW4gdGhlIGxpc3Q6XG5cbmBgYGh0bWxcbjxpcm9uLWxpc3QgaXRlbXM9XCJbW2RhdGFdXVwiIGFzPVwiaXRlbVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPGRpdiB0YWJpbmRleCQ9XCJbW3RhYkluZGV4XV1cIj5cbiAgICAgIE5hbWU6IFtbaXRlbS5uYW1lXV1cbiAgICA8L2Rpdj5cbiAgPC90ZW1wbGF0ZT5cbjwvaXJvbi1saXN0PlxuYGBgXG5cbiMjIyBTdHlsaW5nXG5cbllvdSBjYW4gdXNlIHRoZSBgLS1pcm9uLWxpc3QtaXRlbXMtY29udGFpbmVyYCBtaXhpbiB0byBzdHlsZSB0aGUgY29udGFpbmVyIG9mXG5pdGVtczpcblxuYGBgY3NzXG5pcm9uLWxpc3Qge1xuIC0taXJvbi1saXN0LWl0ZW1zLWNvbnRhaW5lcjoge1xuICAgIG1hcmdpbjogYXV0bztcbiAgfTtcbn1cbmBgYFxuXG4jIyMgUmVzaXppbmdcblxuYGlyb24tbGlzdGAgbGF5cyBvdXQgdGhlIGl0ZW1zIHdoZW4gaXQgcmVjZWl2ZXMgYSBub3RpZmljYXRpb24gdmlhIHRoZVxuYGlyb24tcmVzaXplYCBldmVudC4gVGhpcyBldmVudCBpcyBmaXJlZCBieSBhbnkgZWxlbWVudCB0aGF0IGltcGxlbWVudHNcbmBJcm9uUmVzaXphYmxlQmVoYXZpb3JgLlxuXG5CeSBkZWZhdWx0LCBlbGVtZW50cyBzdWNoIGFzIGBpcm9uLXBhZ2VzYCwgYHBhcGVyLXRhYnNgIG9yIGBwYXBlci1kaWFsb2dgIHdpbGxcbnRyaWdnZXIgdGhpcyBldmVudCBhdXRvbWF0aWNhbGx5LiBJZiB5b3UgaGlkZSB0aGUgbGlzdCBtYW51YWxseSAoZS5nLiB5b3UgdXNlXG5gZGlzcGxheTogbm9uZWApIHlvdSBtaWdodCB3YW50IHRvIGltcGxlbWVudCBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYCBvciBmaXJlXG50aGlzIGV2ZW50IG1hbnVhbGx5IHJpZ2h0IGFmdGVyIHRoZSBsaXN0IGJlY2FtZSB2aXNpYmxlIGFnYWluLiBGb3IgZXhhbXBsZTpcblxuYGBganNcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lyb24tbGlzdCcpLmZpcmUoJ2lyb24tcmVzaXplJyk7XG5gYGBcblxuIyMjIFdoZW4gc2hvdWxkIGA8aXJvbi1saXN0PmAgYmUgdXNlZD9cblxuYGlyb24tbGlzdGAgc2hvdWxkIGJlIHVzZWQgd2hlbiBhIHBhZ2UgaGFzIHNpZ25pZmljYW50bHkgbW9yZSBET00gbm9kZXMgdGhhbiB0aGVcbm9uZXMgdmlzaWJsZSBvbiB0aGUgc2NyZWVuLiBlLmcuIHRoZSBwYWdlIGhhcyA1MDAgbm9kZXMsIGJ1dCBvbmx5IDIwIGFyZSB2aXNpYmxlXG5hdCBhIHRpbWUuIFRoaXMgaXMgd2h5IHdlIHJlZmVyIHRvIGl0IGFzIGEgYHZpcnR1YWxgIGxpc3QuIEluIHRoaXMgY2FzZSwgYVxuYGRvbS1yZXBlYXRgIHdpbGwgc3RpbGwgY3JlYXRlIDUwMCBub2RlcyB3aGljaCBjb3VsZCBzbG93IGRvd24gdGhlIHdlYiBhcHAsIGJ1dFxuYGlyb24tbGlzdGAgd2lsbCBvbmx5IGNyZWF0ZSAyMC5cblxuSG93ZXZlciwgaGF2aW5nIGFuIGBpcm9uLWxpc3RgIGRvZXMgbm90IG1lYW4gdGhhdCB5b3UgY2FuIGxvYWQgYWxsIHRoZSBkYXRhIGF0XG5vbmNlLiBTYXkgeW91IGhhdmUgYSBtaWxsaW9uIHJlY29yZHMgaW4gdGhlIGRhdGFiYXNlLCB5b3Ugd2FudCB0byBzcGxpdCB0aGUgZGF0YVxuaW50byBwYWdlcyBzbyB5b3UgY2FuIGJyaW5nIGluIGEgcGFnZSBhdCB0aGUgdGltZS4gVGhlIHBhZ2UgY291bGQgY29udGFpbiA1MDBcbml0ZW1zLCBhbmQgaXJvbi1saXN0IHdpbGwgb25seSByZW5kZXIgMjAuXG5cbkBlbGVtZW50IGlyb24tbGlzdFxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5cbiovXG5Qb2x5bWVyKHtcbiAgLyoqIEBvdmVycmlkZSAqL1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAoLXdlYmtpdC1tYXgtZGV2aWNlLXBpeGVsLXJhdGlvOiAxKSB7XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB3aWxsLWNoYW5nZTogdHJhbnNmb3JtO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgICNpdGVtcyB7XG4gICAgICAgIEBhcHBseSAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZ3JpZF0pKSAjaXRlbXMgPiA6OnNsb3R0ZWQoKikge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI2l0ZW1zID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lsbC1jaGFuZ2U6IHRyYW5zZm9ybTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGFycmF5LXNlbGVjdG9yIGlkPVwic2VsZWN0b3JcIiBpdGVtcz1cInt7aXRlbXN9fVwiIHNlbGVjdGVkPVwie3tzZWxlY3RlZEl0ZW1zfX1cIiBzZWxlY3RlZC1pdGVtPVwie3tzZWxlY3RlZEl0ZW19fVwiPjwvYXJyYXktc2VsZWN0b3I+XG5cbiAgICA8ZGl2IGlkPVwiaXRlbXNcIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdpcm9uLWxpc3QnLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IGNvbnRhaW5pbmcgaXRlbXMgZGV0ZXJtaW5pbmcgaG93IG1hbnkgaW5zdGFuY2VzIG9mIHRoZSB0ZW1wbGF0ZVxuICAgICAqIHRvIHN0YW1wIGFuZCB0aGF0IHRoYXQgZWFjaCB0ZW1wbGF0ZSBpbnN0YW5jZSBzaG91bGQgYmluZCB0by5cbiAgICAgKi9cbiAgICBpdGVtczoge3R5cGU6IEFycmF5fSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgZm9yIHRoZSBhcnJheVxuICAgICAqIGVsZW1lbnQgYXNzb2NpYXRlZCB3aXRoIGEgZ2l2ZW4gdGVtcGxhdGUgaW5zdGFuY2UuXG4gICAgICovXG4gICAgYXM6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnaXRlbSd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG5hbWUgb2YgdGhlIHZhcmlhYmxlIHRvIGFkZCB0byB0aGUgYmluZGluZyBzY29wZSB3aXRoIHRoZSBpbmRleFxuICAgICAqIGZvciB0aGUgcm93LlxuICAgICAqL1xuICAgIGluZGV4QXM6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnaW5kZXgnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB2YXJpYWJsZSB0byBhZGQgdG8gdGhlIGJpbmRpbmcgc2NvcGUgdG8gaW5kaWNhdGVcbiAgICAgKiBpZiB0aGUgcm93IGlzIHNlbGVjdGVkLlxuICAgICAqL1xuICAgIHNlbGVjdGVkQXM6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnc2VsZWN0ZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGhlIGxpc3QgaXMgcmVuZGVyZWQgYXMgYSBncmlkLiBHcmlkIGl0ZW1zIG11c3QgaGF2ZVxuICAgICAqIGZpeGVkIHdpZHRoIGFuZCBoZWlnaHQgc2V0IHZpYSBDU1MuIGUuZy5cbiAgICAgKlxuICAgICAqIGBgYGh0bWxcbiAgICAgKiA8aXJvbi1saXN0IGdyaWQ+XG4gICAgICogICA8dGVtcGxhdGU+XG4gICAgICogICAgICA8ZGl2IHN0eWxlPVwid2lkdGg6IDEwMHB4OyBoZWlnaHQ6IDEwMHB4O1wiPiAxMDB4MTAwIDwvZGl2PlxuICAgICAqICAgPC90ZW1wbGF0ZT5cbiAgICAgKiA8L2lyb24tbGlzdD5cbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgICBncmlkOiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgb2JzZXJ2ZXI6ICdfZ3JpZENoYW5nZWQnXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gdHJ1ZSwgdGFwcGluZyBhIHJvdyB3aWxsIHNlbGVjdCB0aGUgaXRlbSwgcGxhY2luZyBpdHMgZGF0YSBtb2RlbFxuICAgICAqIGluIHRoZSBzZXQgb2Ygc2VsZWN0ZWQgaXRlbXMgcmV0cmlldmFibGUgdmlhIHRoZSBzZWxlY3Rpb24gcHJvcGVydHkuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGFwcGluZyBmb2N1c2FibGUgZWxlbWVudHMgd2l0aGluIHRoZSBsaXN0IGl0ZW0gd2lsbCBub3RcbiAgICAgKiByZXN1bHQgaW4gc2VsZWN0aW9uLCBzaW5jZSB0aGV5IGFyZSBwcmVzdW1lZCB0byBoYXZlIHRoZWlyICogb3duIGFjdGlvbi5cbiAgICAgKi9cbiAgICBzZWxlY3Rpb25FbmFibGVkOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYG11bHRpU2VsZWN0aW9uYCBpcyBmYWxzZSwgdGhpcyBpcyB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGl0ZW0sIG9yXG4gICAgICogYG51bGxgIGlmIG5vIGl0ZW0gaXMgc2VsZWN0ZWQuXG4gICAgICovXG4gICAgc2VsZWN0ZWRJdGVtOiB7dHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgbXVsdGlTZWxlY3Rpb25gIGlzIHRydWUsIHRoaXMgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGVcbiAgICAgKiBzZWxlY3RlZCBpdGVtcy5cbiAgICAgKi9cbiAgICBzZWxlY3RlZEl0ZW1zOiB7dHlwZTogT2JqZWN0LCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgdHJ1ZWAsIG11bHRpcGxlIGl0ZW1zIG1heSBiZSBzZWxlY3RlZCBhdCBvbmNlIChpbiB0aGlzIGNhc2UsXG4gICAgICogYHNlbGVjdGVkYCBpcyBhbiBhcnJheSBvZiBjdXJyZW50bHkgc2VsZWN0ZWQgaXRlbXMpLiAgV2hlbiBgZmFsc2VgLFxuICAgICAqIG9ubHkgb25lIGl0ZW0gbWF5IGJlIHNlbGVjdGVkIGF0IGEgdGltZS5cbiAgICAgKi9cbiAgICBtdWx0aVNlbGVjdGlvbjoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgb2Zmc2V0IHRvcCBmcm9tIHRoZSBzY3JvbGxpbmcgZWxlbWVudCB0byB0aGUgaXJvbi1saXN0IGVsZW1lbnQuXG4gICAgICogVGhpcyB2YWx1ZSBjYW4gYmUgY29tcHV0ZWQgdXNpbmcgdGhlIHBvc2l0aW9uIHJldHVybmVkIGJ5XG4gICAgICogYGdldEJvdW5kaW5nQ2xpZW50UmVjdCgpYCBhbHRob3VnaCBpdCdzIHByZWZlcnJlZCB0byB1c2UgYSBjb25zdGFudCB2YWx1ZVxuICAgICAqIHdoZW4gcG9zc2libGUuXG4gICAgICpcbiAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHVzZWZ1bCB3aGVuIGFuIGV4dGVybmFsIHNjcm9sbGluZyBlbGVtZW50IGlzIHVzZWQgYW5kXG4gICAgICogdGhlcmUncyBzb21lIG9mZnNldCBiZXR3ZWVuIHRoZSBzY3JvbGxpbmcgZWxlbWVudCBhbmQgdGhlIGxpc3QuIEZvclxuICAgICAqIGV4YW1wbGU6IGEgaGVhZGVyIGlzIHBsYWNlZCBhYm92ZSB0aGUgbGlzdC5cbiAgICAgKi9cbiAgICBzY3JvbGxPZmZzZXQ6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAwfVxuICB9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdfaXRlbXNDaGFuZ2VkKGl0ZW1zLiopJyxcbiAgICAnX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkKHNlbGVjdGlvbkVuYWJsZWQpJyxcbiAgICAnX211bHRpU2VsZWN0aW9uQ2hhbmdlZChtdWx0aVNlbGVjdGlvbiknLFxuICAgICdfc2V0T3ZlcmZsb3coc2Nyb2xsVGFyZ2V0LCBzY3JvbGxPZmZzZXQpJ1xuICBdLFxuXG4gIGJlaGF2aW9yczogW1xuICAgIFRlbXBsYXRpemVyLFxuICAgIElyb25SZXNpemFibGVCZWhhdmlvcixcbiAgICBJcm9uU2Nyb2xsVGFyZ2V0QmVoYXZpb3IsXG4gICAgT3B0aW9uYWxNdXRhYmxlRGF0YUJlaGF2aW9yXG4gIF0sXG5cbiAgLyoqXG4gICAqIFRoZSByYXRpbyBvZiBoaWRkZW4gdGlsZXMgdGhhdCBzaG91bGQgcmVtYWluIGluIHRoZSBzY3JvbGwgZGlyZWN0aW9uLlxuICAgKiBSZWNvbW1lbmRlZCB2YWx1ZSB+MC41LCBzbyBpdCB3aWxsIGRpc3RyaWJ1dGUgdGlsZXMgZXZlbmx5IGluIGJvdGhcbiAgICogZGlyZWN0aW9ucy5cbiAgICovXG4gIF9yYXRpbzogMC41LFxuXG4gIC8qKlxuICAgKiBUaGUgcGFkZGluZy10b3AgdmFsdWUgZm9yIHRoZSBsaXN0LlxuICAgKi9cbiAgX3Njcm9sbGVyUGFkZGluZ1RvcDogMCxcblxuICAvKipcbiAgICogVGhpcyB2YWx1ZSBpcyBhIGNhY2hlZCB2YWx1ZSBvZiBgc2Nyb2xsVG9wYCBmcm9tIHRoZSBsYXN0IGBzY3JvbGxgIGV2ZW50LlxuICAgKi9cbiAgX3Njcm9sbFBvc2l0aW9uOiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgc3VtIG9mIHRoZSBoZWlnaHRzIG9mIGFsbCB0aGUgdGlsZXMgaW4gdGhlIERPTS5cbiAgICovXG4gIF9waHlzaWNhbFNpemU6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBhdmVyYWdlIGBvZmZzZXRIZWlnaHRgIG9mIHRoZSB0aWxlcyBvYnNlcnZlZCB0aWxsIG5vdy5cbiAgICovXG4gIF9waHlzaWNhbEF2ZXJhZ2U6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgdGlsZXMgd2hpY2ggYG9mZnNldEhlaWdodGAgPiAwIG9ic2VydmVkIHVudGlsIG5vdy5cbiAgICovXG4gIF9waHlzaWNhbEF2ZXJhZ2VDb3VudDogMCxcblxuICAvKipcbiAgICogVGhlIFkgcG9zaXRpb24gb2YgdGhlIGl0ZW0gcmVuZGVyZWQgaW4gdGhlIGBfcGh5c2ljYWxTdGFydGBcbiAgICogdGlsZSByZWxhdGl2ZSB0byB0aGUgc2Nyb2xsaW5nIGxpc3QuXG4gICAqL1xuICBfcGh5c2ljYWxUb3A6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBudW1iZXIgb2YgaXRlbXMgaW4gdGhlIGxpc3QuXG4gICAqL1xuICBfdmlydHVhbENvdW50OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgZXN0aW1hdGVkIHNjcm9sbCBoZWlnaHQgYmFzZWQgb24gYF9waHlzaWNhbEF2ZXJhZ2VgXG4gICAqL1xuICBfZXN0U2Nyb2xsSGVpZ2h0OiAwLFxuXG4gIC8qKlxuICAgKiBUaGUgc2Nyb2xsIGhlaWdodCBvZiB0aGUgZG9tIG5vZGVcbiAgICovXG4gIF9zY3JvbGxIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGxpc3QuIFRoaXMgaXMgcmVmZXJyZWQgYXMgdGhlIHZpZXdwb3J0IGluIHRoZSBjb250ZXh0IG9mXG4gICAqIGxpc3QuXG4gICAqL1xuICBfdmlld3BvcnRIZWlnaHQ6IDAsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiB0aGUgbGlzdC4gVGhpcyBpcyByZWZlcnJlZCBhcyB0aGUgdmlld3BvcnQgaW4gdGhlIGNvbnRleHQgb2ZcbiAgICogbGlzdC5cbiAgICovXG4gIF92aWV3cG9ydFdpZHRoOiAwLFxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBET00gbm9kZXMgdGhhdCBhcmUgY3VycmVudGx5IGluIHRoZSB0cmVlXG4gICAqIEB0eXBlIHs/QXJyYXk8IUhUTUxFbGVtZW50Pn1cbiAgICovXG4gIF9waHlzaWNhbEl0ZW1zOiBudWxsLFxuXG4gIC8qKlxuICAgKiBBbiBhcnJheSBvZiBoZWlnaHRzIGZvciBlYWNoIGl0ZW0gaW4gYF9waHlzaWNhbEl0ZW1zYFxuICAgKiBAdHlwZSB7P0FycmF5PG51bWJlcj59XG4gICAqL1xuICBfcGh5c2ljYWxTaXplczogbnVsbCxcblxuICAvKipcbiAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBmaXJzdCB2aXNpYmxlIGluZGV4LlxuICAgKiBTZWUgYGZpcnN0VmlzaWJsZUluZGV4YFxuICAgKiBAdHlwZSB7P251bWJlcn1cbiAgICovXG4gIF9maXJzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAvKipcbiAgICogQSBjYWNoZWQgdmFsdWUgZm9yIHRoZSBsYXN0IHZpc2libGUgaW5kZXguXG4gICAqIFNlZSBgbGFzdFZpc2libGVJbmRleGBcbiAgICogQHR5cGUgez9udW1iZXJ9XG4gICAqL1xuICBfbGFzdFZpc2libGVJbmRleFZhbDogbnVsbCxcblxuICAvKipcbiAgICogVGhlIG1heCBudW1iZXIgb2YgcGFnZXMgdG8gcmVuZGVyLiBPbmUgcGFnZSBpcyBlcXVpdmFsZW50IHRvIHRoZSBoZWlnaHQgb2ZcbiAgICogdGhlIGxpc3QuXG4gICAqL1xuICBfbWF4UGFnZXM6IDIsXG5cbiAgLyoqXG4gICAqIFRoZSBjdXJyZW50bHkgZm9jdXNlZCBwaHlzaWNhbCBpdGVtLlxuICAgKi9cbiAgX2ZvY3VzZWRJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgdmlydHVhbCBpbmRleCBvZiB0aGUgZm9jdXNlZCBpdGVtLlxuICAgKi9cbiAgX2ZvY3VzZWRWaXJ0dWFsSW5kZXg6IC0xLFxuXG4gIC8qKlxuICAgKiBUaGUgcGh5c2ljYWwgaW5kZXggb2YgdGhlIGZvY3VzZWQgaXRlbS5cbiAgICovXG4gIF9mb2N1c2VkUGh5c2ljYWxJbmRleDogLTEsXG5cbiAgLyoqXG4gICAqIFRoZSB0aGUgaXRlbSB0aGF0IGlzIGZvY3VzZWQgaWYgaXQgaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgKiBAcHJpdmF0ZSB7P0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX29mZnNjcmVlbkZvY3VzZWRJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgaXRlbSB0aGF0IGJhY2tmaWxscyB0aGUgYF9vZmZzY3JlZW5Gb2N1c2VkSXRlbWAgaW4gdGhlIHBoeXNpY2FsIGl0ZW1zXG4gICAqIGxpc3Qgd2hlbiB0aGF0IGl0ZW0gaXMgbW92ZWQgb2Zmc2NyZWVuLlxuICAgKiBAdHlwZSB7P0hUTUxFbGVtZW50fVxuICAgKi9cbiAgX2ZvY3VzQmFja2ZpbGxJdGVtOiBudWxsLFxuXG4gIC8qKlxuICAgKiBUaGUgbWF4aW11bSBpdGVtcyBwZXIgcm93XG4gICAqL1xuICBfaXRlbXNQZXJSb3c6IDEsXG5cbiAgLyoqXG4gICAqIFRoZSB3aWR0aCBvZiBlYWNoIGdyaWQgaXRlbVxuICAgKi9cbiAgX2l0ZW1XaWR0aDogMCxcblxuICAvKipcbiAgICogVGhlIGhlaWdodCBvZiB0aGUgcm93IGluIGdyaWQgbGF5b3V0LlxuICAgKi9cbiAgX3Jvd0hlaWdodDogMCxcblxuICAvKipcbiAgICogVGhlIGNvc3Qgb2Ygc3RhbXBpbmcgYSB0ZW1wbGF0ZSBpbiBtcy5cbiAgICovXG4gIF90ZW1wbGF0ZUNvc3Q6IDAsXG5cbiAgLyoqXG4gICAqIE5lZWRlZCB0byBwYXNzIGV2ZW50Lm1vZGVsIHByb3BlcnR5IHRvIGRlY2xhcmF0aXZlIGV2ZW50IGhhbmRsZXJzIC1cbiAgICogc2VlIHBvbHltZXIvcG9seW1lciM0MzM5LlxuICAgKi9cbiAgX3BhcmVudE1vZGVsOiB0cnVlLFxuXG4gIC8qKlxuICAgKiBUaGUgYm90dG9tIG9mIHRoZSBwaHlzaWNhbCBjb250ZW50LlxuICAgKi9cbiAgZ2V0IF9waHlzaWNhbEJvdHRvbSgpIHtcbiAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9waHlzaWNhbFNpemU7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBib3R0b20gb2YgdGhlIHNjcm9sbC5cbiAgICovXG4gIGdldCBfc2Nyb2xsQm90dG9tKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3ZpZXdwb3J0SGVpZ2h0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgbi10aCBpdGVtIHJlbmRlcmVkIGluIHRoZSBsYXN0IHBoeXNpY2FsIGl0ZW0uXG4gICAqL1xuICBnZXQgX3ZpcnR1YWxFbmQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZpcnR1YWxTdGFydCArIHRoaXMuX3BoeXNpY2FsQ291bnQgLSAxO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGUgaGVpZ2h0IG9mIHRoZSBwaHlzaWNhbCBjb250ZW50IHRoYXQgaXNuJ3Qgb24gdGhlIHNjcmVlbi5cbiAgICovXG4gIGdldCBfaGlkZGVuQ29udGVudFNpemUoKSB7XG4gICAgdmFyIHNpemUgPVxuICAgICAgICB0aGlzLmdyaWQgPyB0aGlzLl9waHlzaWNhbFJvd3MgKiB0aGlzLl9yb3dIZWlnaHQgOiB0aGlzLl9waHlzaWNhbFNpemU7XG4gICAgcmV0dXJuIHNpemUgLSB0aGlzLl92aWV3cG9ydEhlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIHBhcmVudCBub2RlIGZvciB0aGUgX3VzZXJUZW1wbGF0ZS5cbiAgICovXG4gIGdldCBfaXRlbXNQYXJlbnQoKSB7XG4gICAgcmV0dXJuIGRvbShkb20odGhpcy5fdXNlclRlbXBsYXRlKS5wYXJlbnROb2RlKTtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIG1heGltdW0gc2Nyb2xsIHRvcCB2YWx1ZS5cbiAgICovXG4gIGdldCBfbWF4U2Nyb2xsVG9wKCkge1xuICAgIHJldHVybiB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl92aWV3cG9ydEhlaWdodCArIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGxhcmdlc3Qgbi10aCB2YWx1ZSBmb3IgYW4gaXRlbSBzdWNoIHRoYXQgaXQgY2FuIGJlIHJlbmRlcmVkIGluXG4gICAqIGBfcGh5c2ljYWxTdGFydGAuXG4gICAqL1xuICBnZXQgX21heFZpcnR1YWxTdGFydCgpIHtcbiAgICB2YXIgdmlydHVhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyh0aGlzLl92aXJ0dWFsQ291bnQpO1xuICAgIHJldHVybiBNYXRoLm1heCgwLCB2aXJ0dWFsQ291bnQgLSB0aGlzLl9waHlzaWNhbENvdW50KTtcbiAgfSxcblxuICBzZXQgX3ZpcnR1YWxTdGFydCh2YWwpIHtcbiAgICB2YWwgPSB0aGlzLl9jbGFtcCh2YWwsIDAsIHRoaXMuX21heFZpcnR1YWxTdGFydCk7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdmFsID0gdmFsIC0gKHZhbCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICB9XG4gICAgdGhpcy5fdmlydHVhbFN0YXJ0VmFsID0gdmFsO1xuICB9LFxuXG4gIGdldCBfdmlydHVhbFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnRWYWwgfHwgMDtcbiAgfSxcblxuICAvKipcbiAgICogVGhlIGstdGggdGlsZSB0aGF0IGlzIGF0IHRoZSB0b3Agb2YgdGhlIHNjcm9sbGluZyBsaXN0LlxuICAgKi9cbiAgc2V0IF9waHlzaWNhbFN0YXJ0KHZhbCkge1xuICAgIHZhbCA9IHZhbCAlIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgaWYgKHZhbCA8IDApIHtcbiAgICAgIHZhbCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgKyB2YWw7XG4gICAgfVxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIHZhbCA9IHZhbCAtICh2YWwgJSB0aGlzLl9pdGVtc1BlclJvdyk7XG4gICAgfVxuICAgIHRoaXMuX3BoeXNpY2FsU3RhcnRWYWwgPSB2YWw7XG4gIH0sXG5cbiAgZ2V0IF9waHlzaWNhbFN0YXJ0KCkge1xuICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFN0YXJ0VmFsIHx8IDA7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoZSBrLXRoIHRpbGUgdGhhdCBpcyBhdCB0aGUgYm90dG9tIG9mIHRoZSBzY3JvbGxpbmcgbGlzdC5cbiAgICovXG4gIGdldCBfcGh5c2ljYWxFbmQoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgdGhpcy5fcGh5c2ljYWxDb3VudCAtIDEpICVcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgfSxcblxuICBzZXQgX3BoeXNpY2FsQ291bnQodmFsKSB7XG4gICAgdGhpcy5fcGh5c2ljYWxDb3VudFZhbCA9IHZhbDtcbiAgfSxcblxuICBnZXQgX3BoeXNpY2FsQ291bnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3BoeXNpY2FsQ291bnRWYWwgfHwgMDtcbiAgfSxcblxuICAvKipcbiAgICogQW4gb3B0aW1hbCBwaHlzaWNhbCBzaXplIHN1Y2ggdGhhdCB3ZSB3aWxsIGhhdmUgZW5vdWdoIHBoeXNpY2FsIGl0ZW1zXG4gICAqIHRvIGZpbGwgdXAgdGhlIHZpZXdwb3J0IGFuZCByZWN5Y2xlIHdoZW4gdGhlIHVzZXIgc2Nyb2xscy5cbiAgICpcbiAgICogVGhpcyBkZWZhdWx0IHZhbHVlIGFzc3VtZXMgdGhhdCB3ZSB3aWxsIGF0IGxlYXN0IGhhdmUgdGhlIGVxdWl2YWxlbnRcbiAgICogdG8gYSB2aWV3cG9ydCBvZiBwaHlzaWNhbCBpdGVtcyBhYm92ZSBhbmQgYmVsb3cgdGhlIHVzZXIncyB2aWV3cG9ydC5cbiAgICovXG4gIGdldCBfb3B0UGh5c2ljYWxTaXplKCkge1xuICAgIHJldHVybiB0aGlzLl92aWV3cG9ydEhlaWdodCA9PT0gMCA/IEluZmluaXR5IDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCAqIHRoaXMuX21heFBhZ2VzO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUcnVlIGlmIHRoZSBjdXJyZW50IGxpc3QgaXMgdmlzaWJsZS5cbiAgICovXG4gIGdldCBfaXNWaXNpYmxlKCkge1xuICAgIHJldHVybiBCb29sZWFuKHRoaXMub2Zmc2V0V2lkdGggfHwgdGhpcy5vZmZzZXRIZWlnaHQpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBHZXRzIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgdmlzaWJsZSBpdGVtIGluIHRoZSB2aWV3cG9ydC5cbiAgICpcbiAgICogQHR5cGUge251bWJlcn1cbiAgICovXG4gIGdldCBmaXJzdFZpc2libGVJbmRleCgpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWw7XG4gICAgaWYgKGlkeCA9PSBudWxsKSB7XG4gICAgICB2YXIgcGh5c2ljYWxPZmZzZXQgPSB0aGlzLl9waHlzaWNhbFRvcCArIHRoaXMuX3Njcm9sbE9mZnNldDtcblxuICAgICAgaWR4ID0gdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuXG4gICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA+IHRoaXMuX3Njcm9sbFBvc2l0aW9uKSB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMuZ3JpZCA/IHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KSA6IHZpZHg7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSGFuZGxlIGEgcGFydGlhbGx5IHJlbmRlcmVkIGZpbmFsIHJvdyBpbiBncmlkIG1vZGVcbiAgICAgICAgaWYgKHRoaXMuZ3JpZCAmJiB0aGlzLl92aXJ0dWFsQ291bnQgLSAxID09PSB2aWR4KSB7XG4gICAgICAgICAgcmV0dXJuIHZpZHggLSAodmlkeCAlIHRoaXMuX2l0ZW1zUGVyUm93KTtcbiAgICAgICAgfVxuICAgICAgfSkgfHxcbiAgICAgICAgICAwO1xuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGluZGV4IG9mIHRoZSBsYXN0IHZpc2libGUgaXRlbSBpbiB0aGUgdmlld3BvcnQuXG4gICAqXG4gICAqIEB0eXBlIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgbGFzdFZpc2libGVJbmRleCgpIHtcbiAgICB2YXIgaWR4ID0gdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbDtcbiAgICBpZiAoaWR4ID09IG51bGwpIHtcbiAgICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgICAgaWR4ID0gTWF0aC5taW4oXG4gICAgICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQsXG4gICAgICAgICAgICB0aGlzLmZpcnN0VmlzaWJsZUluZGV4ICsgdGhpcy5fZXN0Um93c0luVmlldyAqIHRoaXMuX2l0ZW1zUGVyUm93IC1cbiAgICAgICAgICAgICAgICAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBwaHlzaWNhbE9mZnNldCA9IHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICAgIGlmIChwaHlzaWNhbE9mZnNldCA8IHRoaXMuX3Njcm9sbEJvdHRvbSkge1xuICAgICAgICAgICAgaWR4ID0gdmlkeDtcbiAgICAgICAgICB9XG4gICAgICAgICAgcGh5c2ljYWxPZmZzZXQgKz0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KHBpZHgpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBpZHg7XG4gICAgfVxuICAgIHJldHVybiBpZHg7XG4gIH0sXG5cbiAgZ2V0IF9kZWZhdWx0U2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzO1xuICB9LFxuXG4gIGdldCBfdmlydHVhbFJvd0NvdW50KCkge1xuICAgIHJldHVybiBNYXRoLmNlaWwodGhpcy5fdmlydHVhbENvdW50IC8gdGhpcy5faXRlbXNQZXJSb3cpO1xuICB9LFxuXG4gIGdldCBfZXN0Um93c0luVmlldygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3ZpZXdwb3J0SGVpZ2h0IC8gdGhpcy5fcm93SGVpZ2h0KTtcbiAgfSxcblxuICBnZXQgX3BoeXNpY2FsUm93cygpIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdyk7XG4gIH0sXG5cbiAgZ2V0IF9zY3JvbGxPZmZzZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Njcm9sbGVyUGFkZGluZ1RvcCArIHRoaXMuc2Nyb2xsT2Zmc2V0O1xuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9kaWRGb2N1cy5iaW5kKHRoaXMpLCB0cnVlKTtcbiAgfSxcblxuICAvKiogQG92ZXJyaWRlICovXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgYW5pbWF0aW9uRnJhbWUpO1xuICAgIC8vIGBpcm9uLXJlc2l6ZWAgaXMgZmlyZWQgd2hlbiB0aGUgbGlzdCBpcyBhdHRhY2hlZCBpZiB0aGUgZXZlbnQgaXMgYWRkZWRcbiAgICAvLyBiZWZvcmUgYXR0YWNoZWQgY2F1c2luZyB1bm5lY2Vzc2FyeSB3b3JrLlxuICAgIHRoaXMubGlzdGVuKHRoaXMsICdpcm9uLXJlc2l6ZScsICdfcmVzaXplSGFuZGxlcicpO1xuICAgIHRoaXMubGlzdGVuKHRoaXMsICdrZXlkb3duJywgJ19rZXlkb3duSGFuZGxlcicpO1xuICB9LFxuXG4gIC8qKiBAb3ZlcnJpZGUgKi9cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMudW5saXN0ZW4odGhpcywgJ2lyb24tcmVzaXplJywgJ19yZXNpemVIYW5kbGVyJyk7XG4gICAgdGhpcy51bmxpc3Rlbih0aGlzLCAna2V5ZG93bicsICdfa2V5ZG93bkhhbmRsZXInKTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0IHRoZSBvdmVyZmxvdyBwcm9wZXJ0eSBpZiB0aGlzIGVsZW1lbnQgaGFzIGl0cyBvd24gc2Nyb2xsaW5nIHJlZ2lvblxuICAgKi9cbiAgX3NldE92ZXJmbG93OiBmdW5jdGlvbihzY3JvbGxUYXJnZXQpIHtcbiAgICB0aGlzLnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ3RvdWNoJyA6ICcnO1xuICAgIHRoaXMuc3R5bGUub3ZlcmZsb3dZID0gc2Nyb2xsVGFyZ2V0ID09PSB0aGlzID8gJ2F1dG8nIDogJyc7XG4gICAgLy8gQ2xlYXIgY2FjaGUuXG4gICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgIHRoaXMuX2RlYm91bmNlKCdfcmVuZGVyJywgdGhpcy5fcmVuZGVyLCBhbmltYXRpb25GcmFtZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEludm9rZSB0aGlzIG1ldGhvZCBpZiB5b3UgZHluYW1pY2FsbHkgdXBkYXRlIHRoZSB2aWV3cG9ydCdzXG4gICAqIHNpemUgb3IgQ1NTIHBhZGRpbmcuXG4gICAqXG4gICAqIEBtZXRob2QgdXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzXG4gICAqL1xuICB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXM6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKTtcbiAgICB0aGlzLl9zY3JvbGxlclBhZGRpbmdUb3AgPVxuICAgICAgICB0aGlzLnNjcm9sbFRhcmdldCA9PT0gdGhpcyA/IDAgOiBwYXJzZUludChzdHlsZXNbJ3BhZGRpbmctdG9wJ10sIDEwKTtcbiAgICB0aGlzLl9pc1JUTCA9IEJvb2xlYW4oc3R5bGVzLmRpcmVjdGlvbiA9PT0gJ3J0bCcpO1xuICAgIHRoaXMuX3ZpZXdwb3J0V2lkdGggPSB0aGlzLiQuaXRlbXMub2Zmc2V0V2lkdGg7XG4gICAgdGhpcy5fdmlld3BvcnRIZWlnaHQgPSB0aGlzLl9zY3JvbGxUYXJnZXRIZWlnaHQ7XG4gICAgdGhpcy5ncmlkICYmIHRoaXMuX3VwZGF0ZUdyaWRNZXRyaWNzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlY3ljbGVzIHRoZSBwaHlzaWNhbCBpdGVtcyB3aGVuIG5lZWRlZC5cbiAgICovXG4gIF9zY3JvbGxIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgc2Nyb2xsVG9wID0gTWF0aC5tYXgoMCwgTWF0aC5taW4odGhpcy5fbWF4U2Nyb2xsVG9wLCB0aGlzLl9zY3JvbGxUb3ApKTtcbiAgICB2YXIgZGVsdGEgPSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICB2YXIgaXNTY3JvbGxpbmdEb3duID0gZGVsdGEgPj0gMDtcbiAgICAvLyBUcmFjayB0aGUgY3VycmVudCBzY3JvbGwgcG9zaXRpb24uXG4gICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPSBzY3JvbGxUb3A7XG4gICAgLy8gQ2xlYXIgaW5kZXhlcyBmb3IgZmlyc3QgYW5kIGxhc3QgdmlzaWJsZSBpbmRleGVzLlxuICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICB0aGlzLl9sYXN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAvLyBSYW5kb20gYWNjZXNzLlxuICAgIGlmIChNYXRoLmFicyhkZWx0YSkgPiB0aGlzLl9waHlzaWNhbFNpemUgJiYgdGhpcy5fcGh5c2ljYWxTaXplID4gMCkge1xuICAgICAgZGVsdGEgPSBkZWx0YSAtIHRoaXMuX3Njcm9sbE9mZnNldDtcbiAgICAgIHZhciBpZHhBZGp1c3RtZW50ID1cbiAgICAgICAgICBNYXRoLnJvdW5kKGRlbHRhIC8gdGhpcy5fcGh5c2ljYWxBdmVyYWdlKSAqIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU3RhcnQgPSB0aGlzLl9waHlzaWNhbFN0YXJ0ICsgaWR4QWRqdXN0bWVudDtcbiAgICAgIC8vIEVzdGltYXRlIG5ldyBwaHlzaWNhbCBvZmZzZXQgYmFzZWQgb24gdGhlIHZpcnR1YWwgc3RhcnQgaW5kZXguXG4gICAgICAvLyBhZGp1c3RzIHRoZSBwaHlzaWNhbCBzdGFydCBwb3NpdGlvbiB0byBzdGF5IGluIHN5bmMgd2l0aCB0aGUgY2xhbXBlZFxuICAgICAgLy8gdmlydHVhbCBzdGFydCBpbmRleC4gSXQncyBjcml0aWNhbCBub3QgdG8gbGV0IHRoaXMgdmFsdWUgYmVcbiAgICAgIC8vIG1vcmUgdGhhbiB0aGUgc2Nyb2xsIHBvc2l0aW9uIGhvd2V2ZXIsIHNpbmNlIHRoYXQgd291bGQgcmVzdWx0IGluXG4gICAgICAvLyB0aGUgcGh5c2ljYWwgaXRlbXMgbm90IGNvdmVyaW5nIHRoZSB2aWV3cG9ydCwgYW5kIGxlYWRpbmcgdG9cbiAgICAgIC8vIF9pbmNyZWFzZVBvb2xJZk5lZWRlZCB0byBydW4gYXdheSBjcmVhdGluZyBpdGVtcyB0byB0cnkgdG8gZmlsbCBpdC5cbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5taW4oXG4gICAgICAgICAgTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKlxuICAgICAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2UsXG4gICAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24pO1xuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID4gMCkge1xuICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyhpc1Njcm9sbGluZ0Rvd24pO1xuICAgICAgaWYgKGlzU2Nyb2xsaW5nRG93bikge1xuICAgICAgICB0aGlzLl9waHlzaWNhbFRvcCA9IHJldXNhYmxlcy5waHlzaWNhbFRvcDtcbiAgICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gdGhpcy5fcGh5c2ljYWxTdGFydCArIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCAtIHJldXNhYmxlcy5pbmRleGVzLmxlbmd0aDtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgLSByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICB9XG4gICAgICB0aGlzLl91cGRhdGUoXG4gICAgICAgICAgcmV1c2FibGVzLmluZGV4ZXMsIGlzU2Nyb2xsaW5nRG93biA/IG51bGwgOiByZXVzYWJsZXMuaW5kZXhlcyk7XG4gICAgICB0aGlzLl9kZWJvdW5jZShcbiAgICAgICAgICAnX2luY3JlYXNlUG9vbElmTmVlZGVkJyxcbiAgICAgICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZC5iaW5kKHRoaXMsIDApLFxuICAgICAgICAgIG1pY3JvVGFzayk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGFuIG9iamVjdCB0aGF0IGNvbnRhaW5zIHRoZSBpbmRleGVzIG9mIHRoZSBwaHlzaWNhbCBpdGVtc1xuICAgKiB0aGF0IG1pZ2h0IGJlIHJldXNlZCBhbmQgdGhlIHBoeXNpY2FsVG9wLlxuICAgKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZyb21Ub3AgSWYgdGhlIHBvdGVudGlhbCByZXVzYWJsZSBpdGVtcyBhcmUgYWJvdmUgdGhlIHNjcm9sbGluZyByZWdpb24uXG4gICAqL1xuICBfZ2V0UmV1c2FibGVzOiBmdW5jdGlvbihmcm9tVG9wKSB7XG4gICAgdmFyIGl0aCwgbGFzdEl0aCwgb2Zmc2V0Q29udGVudCwgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgIHZhciBpZHhzID0gW107XG4gICAgdmFyIHByb3RlY3RlZE9mZnNldENvbnRlbnQgPSB0aGlzLl9oaWRkZW5Db250ZW50U2l6ZSAqIHRoaXMuX3JhdGlvO1xuICAgIHZhciB2aXJ0dWFsU3RhcnQgPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgdmFyIHZpcnR1YWxFbmQgPSB0aGlzLl92aXJ0dWFsRW5kO1xuICAgIHZhciBwaHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICB2YXIgdG9wID0gdGhpcy5fcGh5c2ljYWxUb3AgKyB0aGlzLl9zY3JvbGxPZmZzZXQ7XG4gICAgdmFyIGJvdHRvbSA9IHRoaXMuX3BoeXNpY2FsQm90dG9tICsgdGhpcy5fc2Nyb2xsT2Zmc2V0O1xuICAgIC8vIFRoaXMgbWF5IGJlIGNhbGxlZCBvdXRzaWRlIG9mIGEgc2Nyb2xsSGFuZGxlciwgc28gdXNlIGxhc3QgY2FjaGVkIHBvc2l0aW9uXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICAgIHZhciBzY3JvbGxCb3R0b20gPSB0aGlzLl9zY3JvbGxCb3R0b207XG5cbiAgICBpZiAoZnJvbVRvcCkge1xuICAgICAgaXRoID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIGxhc3RJdGggPSB0aGlzLl9waHlzaWNhbEVuZDtcbiAgICAgIG9mZnNldENvbnRlbnQgPSBzY3JvbGxUb3AgLSB0b3A7XG4gICAgfSBlbHNlIHtcbiAgICAgIGl0aCA9IHRoaXMuX3BoeXNpY2FsRW5kO1xuICAgICAgbGFzdEl0aCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQ7XG4gICAgICBvZmZzZXRDb250ZW50ID0gYm90dG9tIC0gc2Nyb2xsQm90dG9tO1xuICAgIH1cbiAgICB3aGlsZSAodHJ1ZSkge1xuICAgICAgcGh5c2ljYWxJdGVtSGVpZ2h0ID0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGl0aCk7XG4gICAgICBvZmZzZXRDb250ZW50ID0gb2Zmc2V0Q29udGVudCAtIHBoeXNpY2FsSXRlbUhlaWdodDtcbiAgICAgIGlmIChpZHhzLmxlbmd0aCA+PSBwaHlzaWNhbENvdW50IHx8XG4gICAgICAgICAgb2Zmc2V0Q29udGVudCA8PSBwcm90ZWN0ZWRPZmZzZXRDb250ZW50KSB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgaWYgKGZyb21Ub3ApIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICBpZiAodmlydHVhbEVuZCArIGlkeHMubGVuZ3RoICsgMSA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayB0aGF0IHRoZSBpbmRleCBpcyBub3QgdmlzaWJsZS5cbiAgICAgICAgaWYgKHRvcCArIHBoeXNpY2FsSXRlbUhlaWdodCA+PSBzY3JvbGxUb3AgLSB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZHhzLnB1c2goaXRoKTtcbiAgICAgICAgdG9wID0gdG9wICsgcGh5c2ljYWxJdGVtSGVpZ2h0O1xuICAgICAgICBpdGggPSAoaXRoICsgMSkgJSBwaHlzaWNhbENvdW50O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gQ2hlY2sgdGhhdCBpbmRleCBpcyB3aXRoaW4gdGhlIHZhbGlkIHJhbmdlLlxuICAgICAgICBpZiAodmlydHVhbFN0YXJ0IC0gaWR4cy5sZW5ndGggPD0gMCkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIHRoYXQgdGhlIGluZGV4IGlzIG5vdCB2aXNpYmxlLlxuICAgICAgICBpZiAodG9wICsgdGhpcy5fcGh5c2ljYWxTaXplIC0gcGh5c2ljYWxJdGVtSGVpZ2h0IDw9IHNjcm9sbEJvdHRvbSkge1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIGlkeHMucHVzaChpdGgpO1xuICAgICAgICB0b3AgPSB0b3AgLSBwaHlzaWNhbEl0ZW1IZWlnaHQ7XG4gICAgICAgIGl0aCA9IChpdGggPT09IDApID8gcGh5c2ljYWxDb3VudCAtIDEgOiBpdGggLSAxO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge2luZGV4ZXM6IGlkeHMsIHBoeXNpY2FsVG9wOiB0b3AgLSB0aGlzLl9zY3JvbGxPZmZzZXR9O1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGUgdGhlIGxpc3Qgb2YgaXRlbXMsIHN0YXJ0aW5nIGZyb20gdGhlIGBfdmlydHVhbFN0YXJ0YCBpdGVtLlxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gbW92aW5nVXBcbiAgICovXG4gIF91cGRhdGU6IGZ1bmN0aW9uKGl0ZW1TZXQsIG1vdmluZ1VwKSB7XG4gICAgaWYgKChpdGVtU2V0ICYmIGl0ZW1TZXQubGVuZ3RoID09PSAwKSB8fCB0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX21hbmFnZUZvY3VzKCk7XG4gICAgdGhpcy5fYXNzaWduTW9kZWxzKGl0ZW1TZXQpO1xuICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoaXRlbVNldCk7XG4gICAgLy8gQWRqdXN0IG9mZnNldCBhZnRlciBtZWFzdXJpbmcuXG4gICAgaWYgKG1vdmluZ1VwKSB7XG4gICAgICB3aGlsZSAobW92aW5nVXAubGVuZ3RoKSB7XG4gICAgICAgIHZhciBpZHggPSBtb3ZpbmdVcC5wb3AoKTtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgLT0gdGhpcy5fZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50KGlkeCk7XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUoKTtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHBvb2wgb2YgRE9NIGVsZW1lbnRzIGFuZCBhdHRhY2hlcyB0aGVtIHRvIHRoZSBsb2NhbCBkb20uXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplIFNpemUgb2YgdGhlIHBvb2xcbiAgICovXG4gIF9jcmVhdGVQb29sOiBmdW5jdGlvbihzaXplKSB7XG4gICAgdGhpcy5fZW5zdXJlVGVtcGxhdGl6ZWQoKTtcbiAgICB2YXIgaSwgaW5zdDtcbiAgICB2YXIgcGh5c2ljYWxJdGVtcyA9IG5ldyBBcnJheShzaXplKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgIC8vIFRPRE8oYmxhc3Rlbik6XG4gICAgICAvLyBGaXJzdCBlbGVtZW50IGNoaWxkIGlzIGl0ZW07IFNhZmFyaSBkb2Vzbid0IHN1cHBvcnQgY2hpbGRyZW5bMF1cbiAgICAgIC8vIG9uIGEgZG9jIGZyYWdtZW50LiBUZXN0IHRoaXMgdG8gc2VlIGlmIGl0IHN0aWxsIG1hdHRlcnMuXG4gICAgICBwaHlzaWNhbEl0ZW1zW2ldID0gaW5zdC5yb290LnF1ZXJ5U2VsZWN0b3IoJyonKTtcbiAgICAgIHRoaXMuX2l0ZW1zUGFyZW50LmFwcGVuZENoaWxkKGluc3Qucm9vdCk7XG4gICAgfVxuICAgIHJldHVybiBwaHlzaWNhbEl0ZW1zO1xuICB9LFxuXG4gIF9pc0NsaWVudEZ1bGw6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl9zY3JvbGxCb3R0b20gIT0gMCAmJlxuICAgICAgICB0aGlzLl9waHlzaWNhbEJvdHRvbSAtIDEgPj0gdGhpcy5fc2Nyb2xsQm90dG9tICYmXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wIDw9IHRoaXMuX3Njcm9sbFBvc2l0aW9uO1xuICB9LFxuXG4gIC8qKlxuICAgKiBJbmNyZWFzZXMgdGhlIHBvb2wgc2l6ZS5cbiAgICovXG4gIF9pbmNyZWFzZVBvb2xJZk5lZWRlZDogZnVuY3Rpb24oY291bnQpIHtcbiAgICB2YXIgbmV4dFBoeXNpY2FsQ291bnQgPSB0aGlzLl9jbGFtcChcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCArIGNvdW50LFxuICAgICAgICBERUZBVUxUX1BIWVNJQ0FMX0NPVU5ULFxuICAgICAgICB0aGlzLl92aXJ0dWFsQ291bnQgLSB0aGlzLl92aXJ0dWFsU3RhcnQpO1xuICAgIG5leHRQaHlzaWNhbENvdW50ID0gdGhpcy5fY29udmVydEluZGV4VG9Db21wbGV0ZVJvdyhuZXh0UGh5c2ljYWxDb3VudCk7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdmFyIGNvcnJlY3Rpb24gPSBuZXh0UGh5c2ljYWxDb3VudCAlIHRoaXMuX2l0ZW1zUGVyUm93O1xuICAgICAgaWYgKGNvcnJlY3Rpb24gJiYgbmV4dFBoeXNpY2FsQ291bnQgLSBjb3JyZWN0aW9uIDw9IHRoaXMuX3BoeXNpY2FsQ291bnQpIHtcbiAgICAgICAgbmV4dFBoeXNpY2FsQ291bnQgKz0gdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICB9XG4gICAgICBuZXh0UGh5c2ljYWxDb3VudCAtPSBjb3JyZWN0aW9uO1xuICAgIH1cbiAgICB2YXIgZGVsdGEgPSBuZXh0UGh5c2ljYWxDb3VudCAtIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gICAgdmFyIG5leHRJbmNyZWFzZSA9IE1hdGgucm91bmQodGhpcy5fcGh5c2ljYWxDb3VudCAqIDAuNSk7XG5cbiAgICBpZiAoZGVsdGEgPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgIHZhciB0cyA9IHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKTtcbiAgICAgIC8vIENvbmNhdCBhcnJheXMgaW4gcGxhY2UuXG4gICAgICBbXS5wdXNoLmFwcGx5KHRoaXMuX3BoeXNpY2FsSXRlbXMsIHRoaXMuX2NyZWF0ZVBvb2woZGVsdGEpKTtcbiAgICAgIC8vIFB1c2ggMHMgaW50byBwaHlzaWNhbFNpemVzLiBDYW4ndCB1c2UgQXJyYXkuZmlsbCBiZWNhdXNlIElFMTEgZG9lc24ndFxuICAgICAgLy8gc3VwcG9ydCBpdC5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZGVsdGE7IGkrKykge1xuICAgICAgICB0aGlzLl9waHlzaWNhbFNpemVzLnB1c2goMCk7XG4gICAgICB9XG4gICAgICB0aGlzLl9waHlzaWNhbENvdW50ID0gdGhpcy5fcGh5c2ljYWxDb3VudCArIGRlbHRhO1xuICAgICAgLy8gVXBkYXRlIHRoZSBwaHlzaWNhbCBzdGFydCBpZiBpdCBuZWVkcyB0byBwcmVzZXJ2ZSB0aGUgbW9kZWwgb2YgdGhlXG4gICAgICAvLyBmb2N1c2VkIGl0ZW0uIEluIHRoaXMgc2l0dWF0aW9uLCB0aGUgZm9jdXNlZCBpdGVtIGlzIGN1cnJlbnRseSByZW5kZXJlZFxuICAgICAgLy8gYW5kIGl0cyBtb2RlbCB3b3VsZCBoYXZlIGNoYW5nZWQgYWZ0ZXIgaW5jcmVhc2luZyB0aGUgcG9vbCBpZiB0aGVcbiAgICAgIC8vIHBoeXNpY2FsIHN0YXJ0IHJlbWFpbmVkIHVuY2hhbmdlZC5cbiAgICAgIGlmICh0aGlzLl9waHlzaWNhbFN0YXJ0ID4gdGhpcy5fcGh5c2ljYWxFbmQgJiZcbiAgICAgICAgICB0aGlzLl9pc0luZGV4UmVuZGVyZWQodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCkgJiZcbiAgICAgICAgICB0aGlzLl9nZXRQaHlzaWNhbEluZGV4KHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXgpIDxcbiAgICAgICAgICAgICAgdGhpcy5fcGh5c2ljYWxFbmQpIHtcbiAgICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyBkZWx0YTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgdGhpcy5fdGVtcGxhdGVDb3N0ID0gKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3coKSAtIHRzKSAvIGRlbHRhO1xuICAgICAgbmV4dEluY3JlYXNlID0gTWF0aC5yb3VuZCh0aGlzLl9waHlzaWNhbENvdW50ICogMC41KTtcbiAgICB9XG4gICAgLy8gVGhlIHVwcGVyIGJvdW5kcyBpcyBub3QgZml4ZWQgd2hlbiBkZWFsaW5nIHdpdGggYSBncmlkIHRoYXQgZG9lc24ndFxuICAgIC8vIGZpbGwgaXQncyBsYXN0IHJvdyB3aXRoIHRoZSBleGFjdCBudW1iZXIgb2YgaXRlbXMgcGVyIHJvdy5cbiAgICBpZiAodGhpcy5fdmlydHVhbEVuZCA+PSB0aGlzLl92aXJ0dWFsQ291bnQgLSAxIHx8IG5leHRJbmNyZWFzZSA9PT0gMCkge1xuICAgICAgLy8gRG8gbm90aGluZy5cbiAgICB9IGVsc2UgaWYgKCF0aGlzLl9pc0NsaWVudEZ1bGwoKSkge1xuICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZCh0aGlzLCBuZXh0SW5jcmVhc2UpLFxuICAgICAgICAgIG1pY3JvVGFzayk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9waHlzaWNhbFNpemUgPCB0aGlzLl9vcHRQaHlzaWNhbFNpemUpIHtcbiAgICAgIC8vIFlpZWxkIGFuZCBpbmNyZWFzZSB0aGUgcG9vbCBkdXJpbmcgaWRsZSB0aW1lIHVudGlsIHRoZSBwaHlzaWNhbCBzaXplIGlzXG4gICAgICAvLyBvcHRpbWFsLlxuICAgICAgdGhpcy5fZGVib3VuY2UoXG4gICAgICAgICAgJ19pbmNyZWFzZVBvb2xJZk5lZWRlZCcsXG4gICAgICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQuYmluZChcbiAgICAgICAgICAgICAgdGhpcyxcbiAgICAgICAgICAgICAgdGhpcy5fY2xhbXAoXG4gICAgICAgICAgICAgICAgICBNYXRoLnJvdW5kKDUwIC8gdGhpcy5fdGVtcGxhdGVDb3N0KSwgMSwgbmV4dEluY3JlYXNlKSksXG4gICAgICAgICAgaWRsZVBlcmlvZCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZW5kZXJzIHRoZSBhIG5ldyBsaXN0LlxuICAgKi9cbiAgX3JlbmRlcjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQgfHwgIXRoaXMuX2lzVmlzaWJsZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fcGh5c2ljYWxDb3VudCAhPT0gMCkge1xuICAgICAgdmFyIHJldXNhYmxlcyA9IHRoaXMuX2dldFJldXNhYmxlcyh0cnVlKTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gcmV1c2FibGVzLnBoeXNpY2FsVG9wO1xuICAgICAgdGhpcy5fdmlydHVhbFN0YXJ0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ICsgcmV1c2FibGVzLmluZGV4ZXMubGVuZ3RoO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTdGFydCA9IHRoaXMuX3BoeXNpY2FsU3RhcnQgKyByZXVzYWJsZXMuaW5kZXhlcy5sZW5ndGg7XG4gICAgICB0aGlzLl91cGRhdGUocmV1c2FibGVzLmluZGV4ZXMpO1xuICAgICAgdGhpcy5fdXBkYXRlKCk7XG4gICAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX3ZpcnR1YWxDb3VudCA+IDApIHtcbiAgICAgIC8vIEluaXRpYWwgcmVuZGVyXG4gICAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICAgICAgdGhpcy5faW5jcmVhc2VQb29sSWZOZWVkZWQoREVGQVVMVF9QSFlTSUNBTF9DT1VOVCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBUZW1wbGV0aXplcyB0aGUgdXNlciB0ZW1wbGF0ZS5cbiAgICovXG4gIF9lbnN1cmVUZW1wbGF0aXplZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuY3Rvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl91c2VyVGVtcGxhdGUgPSAvKiogQHR5cGUgeyFIVE1MVGVtcGxhdGVFbGVtZW50fSAqLyAoXG4gICAgICAgIHRoaXMucXVlcnlFZmZlY3RpdmVDaGlsZHJlbigndGVtcGxhdGUnKSk7XG4gICAgaWYgKCF0aGlzLl91c2VyVGVtcGxhdGUpIHtcbiAgICAgIGNvbnNvbGUud2FybignaXJvbi1saXN0IHJlcXVpcmVzIGEgdGVtcGxhdGUgdG8gYmUgcHJvdmlkZWQgaW4gbGlnaHQtZG9tJyk7XG4gICAgfVxuICAgIHZhciBpbnN0YW5jZVByb3BzID0ge307XG4gICAgaW5zdGFuY2VQcm9wcy5fX2tleV9fID0gdHJ1ZTtcbiAgICBpbnN0YW5jZVByb3BzW3RoaXMuYXNdID0gdHJ1ZTtcbiAgICBpbnN0YW5jZVByb3BzW3RoaXMuaW5kZXhBc10gPSB0cnVlO1xuICAgIGluc3RhbmNlUHJvcHNbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgaW5zdGFuY2VQcm9wcy50YWJJbmRleCA9IHRydWU7XG4gICAgdGhpcy5faW5zdGFuY2VQcm9wcyA9IGluc3RhbmNlUHJvcHM7XG4gICAgdGhpcy50ZW1wbGF0aXplKHRoaXMuX3VzZXJUZW1wbGF0ZSwgdGhpcy5tdXRhYmxlRGF0YSk7XG4gIH0sXG5cbiAgX2dyaWRDaGFuZ2VkOiBmdW5jdGlvbihuZXdHcmlkLCBvbGRHcmlkKSB7XG4gICAgaWYgKHR5cGVvZiBvbGRHcmlkID09PSAndW5kZWZpbmVkJylcbiAgICAgIHJldHVybjtcbiAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgIGZsdXNoKCk7XG4gICAgbmV3R3JpZCAmJiB0aGlzLl91cGRhdGVHcmlkTWV0cmljcygpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgd2hlbiB0aGUgaXRlbXMgaGF2ZSBjaGFuZ2VkLiBUaGF0IGlzLCByZWFzc2lnbm1lbnRzXG4gICAqIHRvIGBpdGVtc2AsIHNwbGljZXMgb3IgdXBkYXRlcyB0byBhIHNpbmdsZSBpdGVtLlxuICAgKi9cbiAgX2l0ZW1zQ2hhbmdlZDogZnVuY3Rpb24oY2hhbmdlKSB7XG4gICAgaWYgKGNoYW5nZS5wYXRoID09PSAnaXRlbXMnKSB7XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPSAwO1xuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSAwO1xuICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXkgPSB7fTtcbiAgICAgIHRoaXMuX2ZpcnN0VmlzaWJsZUluZGV4VmFsID0gbnVsbDtcbiAgICAgIHRoaXMuX2xhc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fcGh5c2ljYWxDb3VudCA9IHRoaXMuX3BoeXNpY2FsQ291bnQgfHwgMDtcbiAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXMgPSB0aGlzLl9waHlzaWNhbEl0ZW1zIHx8IFtdO1xuICAgICAgdGhpcy5fcGh5c2ljYWxTaXplcyA9IHRoaXMuX3BoeXNpY2FsU2l6ZXMgfHwgW107XG4gICAgICB0aGlzLl9waHlzaWNhbFN0YXJ0ID0gMDtcbiAgICAgIGlmICh0aGlzLl9zY3JvbGxUb3AgPiB0aGlzLl9zY3JvbGxPZmZzZXQpIHtcbiAgICAgICAgdGhpcy5fcmVzZXRTY3JvbGxQb3NpdGlvbigwKTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX3JlbW92ZUZvY3VzZWRJdGVtKCk7XG4gICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgYW5pbWF0aW9uRnJhbWUpO1xuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggPT09ICdpdGVtcy5zcGxpY2VzJykge1xuICAgICAgdGhpcy5fYWRqdXN0VmlydHVhbEluZGV4KGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMpO1xuICAgICAgdGhpcy5fdmlydHVhbENvdW50ID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMubGVuZ3RoIDogMDtcbiAgICAgIC8vIE9ubHkgYmx1ciBpZiBhdCBsZWFzdCBvbmUgaXRlbSBpcyBhZGRlZCBvciByZW1vdmVkLlxuICAgICAgdmFyIGl0ZW1BZGRlZE9yUmVtb3ZlZCA9IGNoYW5nZS52YWx1ZS5pbmRleFNwbGljZXMuc29tZShmdW5jdGlvbihzcGxpY2UpIHtcbiAgICAgICAgcmV0dXJuIHNwbGljZS5hZGRlZENvdW50ID4gMCB8fCBzcGxpY2UucmVtb3ZlZC5sZW5ndGggPiAwO1xuICAgICAgfSk7XG4gICAgICBpZiAoaXRlbUFkZGVkT3JSZW1vdmVkKSB7XG4gICAgICAgIC8vIE9ubHkgYmx1ciBhY3RpdmVFbGVtZW50IGlmIGl0IGlzIGEgZGVzY2VuZGFudCBvZiB0aGUgbGlzdCAoIzUwNSxcbiAgICAgICAgLy8gIzUwNykuXG4gICAgICAgIHZhciBhY3RpdmVFbGVtZW50ID0gdGhpcy5fZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgICAgICBpZiAodGhpcy5jb250YWlucyhhY3RpdmVFbGVtZW50KSkge1xuICAgICAgICAgIGFjdGl2ZUVsZW1lbnQuYmx1cigpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBSZW5kZXIgb25seSBpZiB0aGUgYWZmZWN0ZWQgaW5kZXggaXMgcmVuZGVyZWQuXG4gICAgICB2YXIgYWZmZWN0ZWRJbmRleFJlbmRlcmVkID1cbiAgICAgICAgICBjaGFuZ2UudmFsdWUuaW5kZXhTcGxpY2VzLnNvbWUoZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAgICAgICByZXR1cm4gc3BsaWNlLmluZGV4ICsgc3BsaWNlLmFkZGVkQ291bnQgPj0gdGhpcy5fdmlydHVhbFN0YXJ0ICYmXG4gICAgICAgICAgICAgICAgc3BsaWNlLmluZGV4IDw9IHRoaXMuX3ZpcnR1YWxFbmQ7XG4gICAgICAgICAgfSwgdGhpcyk7XG4gICAgICBpZiAoIXRoaXMuX2lzQ2xpZW50RnVsbCgpIHx8IGFmZmVjdGVkSW5kZXhSZW5kZXJlZCkge1xuICAgICAgICB0aGlzLl9kZWJvdW5jZSgnX3JlbmRlcicsIHRoaXMuX3JlbmRlciwgYW5pbWF0aW9uRnJhbWUpO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY2hhbmdlLnBhdGggIT09ICdpdGVtcy5sZW5ndGgnKSB7XG4gICAgICB0aGlzLl9mb3J3YXJkSXRlbVBhdGgoY2hhbmdlLnBhdGgsIGNoYW5nZS52YWx1ZSk7XG4gICAgfVxuICB9LFxuXG4gIF9mb3J3YXJkSXRlbVBhdGg6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgcGF0aCA9IHBhdGguc2xpY2UoNik7ICAvLyAnaXRlbXMuJy5sZW5ndGggPT0gNlxuICAgIHZhciBkb3QgPSBwYXRoLmluZGV4T2YoJy4nKTtcbiAgICBpZiAoZG90ID09PSAtMSkge1xuICAgICAgZG90ID0gcGF0aC5sZW5ndGg7XG4gICAgfVxuICAgIHZhciBpc0luZGV4UmVuZGVyZWQ7XG4gICAgdmFyIHBpZHg7XG4gICAgdmFyIGluc3Q7XG4gICAgdmFyIG9mZnNjcmVlbkluc3RhbmNlID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgIHZhciB2aWR4ID0gcGFyc2VJbnQocGF0aC5zdWJzdHJpbmcoMCwgZG90KSwgMTApO1xuICAgIGlzSW5kZXhSZW5kZXJlZCA9IHRoaXMuX2lzSW5kZXhSZW5kZXJlZCh2aWR4KTtcbiAgICBpZiAoaXNJbmRleFJlbmRlcmVkKSB7XG4gICAgICBwaWR4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh2aWR4KTtcbiAgICAgIGluc3QgPSB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICB9IGVsc2UgaWYgKG9mZnNjcmVlbkluc3RhbmNlKSB7XG4gICAgICBpbnN0ID0gb2Zmc2NyZWVuSW5zdGFuY2U7XG4gICAgfVxuXG4gICAgaWYgKCFpbnN0IHx8IGluc3RbdGhpcy5pbmRleEFzXSAhPT0gdmlkeCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBwYXRoID0gcGF0aC5zdWJzdHJpbmcoZG90ICsgMSk7XG4gICAgcGF0aCA9IHRoaXMuYXMgKyAocGF0aCA/ICcuJyArIHBhdGggOiAnJyk7XG4gICAgaW5zdC5fc2V0UGVuZGluZ1Byb3BlcnR5T3JQYXRoKHBhdGgsIHZhbHVlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgaW5zdC5fZmx1c2hQcm9wZXJ0aWVzICYmIGluc3QuX2ZsdXNoUHJvcGVydGllcygpO1xuICAgIC8vIFRPRE8oYmxhc3Rlbik6IFYxIGRvZXNuJ3QgZG8gdGhpcyBhbmQgaXQncyBhIGJ1Z1xuICAgIGlmIChpc0luZGV4UmVuZGVyZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoW3BpZHhdKTtcbiAgICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICAgIHRoaXMuX3VwZGF0ZVNjcm9sbGVyU2l6ZSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHshQXJyYXk8IU9iamVjdD59IHNwbGljZXNcbiAgICovXG4gIF9hZGp1c3RWaXJ0dWFsSW5kZXg6IGZ1bmN0aW9uKHNwbGljZXMpIHtcbiAgICBzcGxpY2VzLmZvckVhY2goZnVuY3Rpb24oc3BsaWNlKSB7XG4gICAgICAvLyBkZXNlbGVjdCByZW1vdmVkIGl0ZW1zXG4gICAgICBzcGxpY2UucmVtb3ZlZC5mb3JFYWNoKHRoaXMuX3JlbW92ZUl0ZW0sIHRoaXMpO1xuICAgICAgLy8gV2Ugb25seSBuZWVkIHRvIGNhcmUgYWJvdXQgY2hhbmdlcyBoYXBwZW5pbmcgYWJvdmUgdGhlIGN1cnJlbnQgcG9zaXRpb25cbiAgICAgIGlmIChzcGxpY2UuaW5kZXggPCB0aGlzLl92aXJ0dWFsU3RhcnQpIHtcbiAgICAgICAgdmFyIGRlbHRhID0gTWF0aC5tYXgoXG4gICAgICAgICAgICBzcGxpY2UuYWRkZWRDb3VudCAtIHNwbGljZS5yZW1vdmVkLmxlbmd0aCxcbiAgICAgICAgICAgIHNwbGljZS5pbmRleCAtIHRoaXMuX3ZpcnR1YWxTdGFydCk7XG4gICAgICAgIHRoaXMuX3ZpcnR1YWxTdGFydCA9IHRoaXMuX3ZpcnR1YWxTdGFydCArIGRlbHRhO1xuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA+PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyBkZWx0YTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIF9yZW1vdmVJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0KGl0ZW0pO1xuICAgIC8vIHJlbW92ZSB0aGUgY3VycmVudCBmb2N1c2VkIGl0ZW1cbiAgICBpZiAodGhpcy5fZm9jdXNlZEl0ZW0gJiZcbiAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pW3RoaXMuYXNdID09PSBpdGVtKSB7XG4gICAgICB0aGlzLl9yZW1vdmVGb2N1c2VkSXRlbSgpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogRXhlY3V0ZXMgYSBwcm92aWRlZCBmdW5jdGlvbiBwZXIgZXZlcnkgcGh5c2ljYWwgaW5kZXggaW4gYGl0ZW1TZXRgXG4gICAqIGBpdGVtU2V0YCBkZWZhdWx0IHZhbHVlIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGVudGlyZSBzZXQgb2YgcGh5c2ljYWxcbiAgICogaW5kZXhlcy5cbiAgICpcbiAgICogQHBhcmFtIHshZnVuY3Rpb24obnVtYmVyLCBudW1iZXIpfSBmblxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKi9cbiAgX2l0ZXJhdGVJdGVtczogZnVuY3Rpb24oZm4sIGl0ZW1TZXQpIHtcbiAgICB2YXIgcGlkeCwgdmlkeCwgcnRuLCBpO1xuXG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDIgJiYgaXRlbVNldCkge1xuICAgICAgZm9yIChpID0gMDsgaSA8IGl0ZW1TZXQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcGlkeCA9IGl0ZW1TZXRbaV07XG4gICAgICAgIHZpZHggPSB0aGlzLl9jb21wdXRlVmlkeChwaWR4KTtcbiAgICAgICAgaWYgKChydG4gPSBmbi5jYWxsKHRoaXMsIHBpZHgsIHZpZHgpKSAhPSBudWxsKSB7XG4gICAgICAgICAgcmV0dXJuIHJ0bjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBwaWR4ID0gdGhpcy5fcGh5c2ljYWxTdGFydDtcbiAgICAgIHZpZHggPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgICBmb3IgKDsgcGlkeCA8IHRoaXMuX3BoeXNpY2FsQ291bnQ7IHBpZHgrKywgdmlkeCsrKSB7XG4gICAgICAgIGlmICgocnRuID0gZm4uY2FsbCh0aGlzLCBwaWR4LCB2aWR4KSkgIT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiBydG47XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGZvciAocGlkeCA9IDA7IHBpZHggPCB0aGlzLl9waHlzaWNhbFN0YXJ0OyBwaWR4KyssIHZpZHgrKykge1xuICAgICAgICBpZiAoKHJ0biA9IGZuLmNhbGwodGhpcywgcGlkeCwgdmlkeCkpICE9IG51bGwpIHtcbiAgICAgICAgICByZXR1cm4gcnRuO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSB2aXJ0dWFsIGluZGV4IGZvciBhIGdpdmVuIHBoeXNpY2FsIGluZGV4XG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBwaWR4IFBoeXNpY2FsIGluZGV4XG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIF9jb21wdXRlVmlkeDogZnVuY3Rpb24ocGlkeCkge1xuICAgIGlmIChwaWR4ID49IHRoaXMuX3BoeXNpY2FsU3RhcnQpIHtcbiAgICAgIHJldHVybiB0aGlzLl92aXJ0dWFsU3RhcnQgKyAocGlkeCAtIHRoaXMuX3BoeXNpY2FsU3RhcnQpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fdmlydHVhbFN0YXJ0ICsgKHRoaXMuX3BoeXNpY2FsQ291bnQgLSB0aGlzLl9waHlzaWNhbFN0YXJ0KSArXG4gICAgICAgIHBpZHg7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEFzc2lnbnMgdGhlIGRhdGEgbW9kZWxzIHRvIGEgZ2l2ZW4gc2V0IG9mIGl0ZW1zLlxuICAgKiBAcGFyYW0geyFBcnJheTxudW1iZXI+PX0gaXRlbVNldFxuICAgKi9cbiAgX2Fzc2lnbk1vZGVsczogZnVuY3Rpb24oaXRlbVNldCkge1xuICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICB2YXIgZWwgPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdO1xuICAgICAgdmFyIGl0ZW0gPSB0aGlzLml0ZW1zICYmIHRoaXMuaXRlbXNbdmlkeF07XG4gICAgICBpZiAoaXRlbSAhPSBudWxsKSB7XG4gICAgICAgIHZhciBpbnN0ID0gdGhpcy5tb2RlbEZvckVsZW1lbnQoZWwpO1xuICAgICAgICBpbnN0Ll9fa2V5X18gPSBudWxsO1xuICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5hcywgaXRlbSk7XG4gICAgICAgIHRoaXMuX2ZvcndhcmRQcm9wZXJ0eShcbiAgICAgICAgICAgIGluc3QsIHRoaXMuc2VsZWN0ZWRBcywgdGhpcy4kLnNlbGVjdG9yLmlzU2VsZWN0ZWQoaXRlbSkpO1xuICAgICAgICB0aGlzLl9mb3J3YXJkUHJvcGVydHkoaW5zdCwgdGhpcy5pbmRleEFzLCB2aWR4KTtcbiAgICAgICAgdGhpcy5fZm9yd2FyZFByb3BlcnR5KFxuICAgICAgICAgICAgaW5zdCwgJ3RhYkluZGV4JywgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9PT0gdmlkeCA/IDAgOiAtMSk7XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsSW5kZXhGb3JLZXlbaW5zdC5fX2tleV9fXSA9IHBpZHg7XG4gICAgICAgIGluc3QuX2ZsdXNoUHJvcGVydGllcyAmJiBpbnN0Ll9mbHVzaFByb3BlcnRpZXModHJ1ZSk7XG4gICAgICAgIGVsLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2hpZGRlbicsICcnKTtcbiAgICAgIH1cbiAgICB9LCBpdGVtU2V0KTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgaGVpZ2h0IGZvciBhIGdpdmVuIHNldCBvZiBpdGVtcy5cbiAgICpcbiAgICogQHBhcmFtIHshQXJyYXk8bnVtYmVyPj19IGl0ZW1TZXRcbiAgICovXG4gIF91cGRhdGVNZXRyaWNzOiBmdW5jdGlvbihpdGVtU2V0KSB7XG4gICAgLy8gTWFrZSBzdXJlIHdlIGRpc3RyaWJ1dGVkIGFsbCB0aGUgcGh5c2ljYWwgaXRlbXNcbiAgICAvLyBzbyB3ZSBjYW4gbWVhc3VyZSB0aGVtLlxuICAgIGZsdXNoKCk7XG5cbiAgICB2YXIgbmV3UGh5c2ljYWxTaXplID0gMDtcbiAgICB2YXIgb2xkUGh5c2ljYWxTaXplID0gMDtcbiAgICB2YXIgcHJldkF2Z0NvdW50ID0gdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQ7XG4gICAgdmFyIHByZXZQaHlzaWNhbEF2ZyA9IHRoaXMuX3BoeXNpY2FsQXZlcmFnZTtcblxuICAgIHRoaXMuX2l0ZXJhdGVJdGVtcyhmdW5jdGlvbihwaWR4LCB2aWR4KSB7XG4gICAgICBvbGRQaHlzaWNhbFNpemUgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZXNbcGlkeF0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdLm9mZnNldEhlaWdodDtcbiAgICAgIG5ld1BoeXNpY2FsU2l6ZSArPSB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XSA/IDEgOiAwO1xuICAgIH0sIGl0ZW1TZXQpO1xuXG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdGhpcy5fdXBkYXRlR3JpZE1ldHJpY3MoKTtcbiAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSA9XG4gICAgICAgICAgTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9sZFBoeXNpY2FsU2l6ZSA9ICh0aGlzLl9pdGVtc1BlclJvdyA9PT0gMSkgP1xuICAgICAgICAgIG9sZFBoeXNpY2FsU2l6ZSA6XG4gICAgICAgICAgTWF0aC5jZWlsKHRoaXMuX3BoeXNpY2FsQ291bnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9yb3dIZWlnaHQ7XG4gICAgICB0aGlzLl9waHlzaWNhbFNpemUgPVxuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsU2l6ZSArIG5ld1BoeXNpY2FsU2l6ZSAtIG9sZFBoeXNpY2FsU2l6ZTtcbiAgICAgIHRoaXMuX2l0ZW1zUGVyUm93ID0gMTtcbiAgICB9XG4gICAgLy8gVXBkYXRlIHRoZSBhdmVyYWdlIGlmIGl0IG1lYXN1cmVkIHNvbWV0aGluZy5cbiAgICBpZiAodGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgIT09IHByZXZBdmdDb3VudCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlID0gTWF0aC5yb3VuZChcbiAgICAgICAgICAoKHByZXZQaHlzaWNhbEF2ZyAqIHByZXZBdmdDb3VudCkgKyBuZXdQaHlzaWNhbFNpemUpIC9cbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2VDb3VudCk7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVHcmlkTWV0cmljczogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faXRlbVdpZHRoID0gdGhpcy5fcGh5c2ljYWxDb3VudCA+IDAgP1xuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zWzBdLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoIDpcbiAgICAgICAgMjAwO1xuICAgIHRoaXMuX3Jvd0hlaWdodCA9XG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwID8gdGhpcy5fcGh5c2ljYWxJdGVtc1swXS5vZmZzZXRIZWlnaHQgOiAyMDA7XG4gICAgdGhpcy5faXRlbXNQZXJSb3cgPSB0aGlzLl9pdGVtV2lkdGggP1xuICAgICAgICBNYXRoLmZsb29yKHRoaXMuX3ZpZXdwb3J0V2lkdGggLyB0aGlzLl9pdGVtV2lkdGgpIDpcbiAgICAgICAgdGhpcy5faXRlbXNQZXJSb3c7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVwZGF0ZXMgdGhlIHBvc2l0aW9uIG9mIHRoZSBwaHlzaWNhbCBpdGVtcy5cbiAgICovXG4gIF9wb3NpdGlvbkl0ZW1zOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9hZGp1c3RTY3JvbGxQb3NpdGlvbigpO1xuXG4gICAgdmFyIHkgPSB0aGlzLl9waHlzaWNhbFRvcDtcblxuICAgIGlmICh0aGlzLmdyaWQpIHtcbiAgICAgIHZhciB0b3RhbEl0ZW1XaWR0aCA9IHRoaXMuX2l0ZW1zUGVyUm93ICogdGhpcy5faXRlbVdpZHRoO1xuICAgICAgdmFyIHJvd09mZnNldCA9ICh0aGlzLl92aWV3cG9ydFdpZHRoIC0gdG90YWxJdGVtV2lkdGgpIC8gMjtcblxuICAgICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgICAgdmFyIG1vZHVsdXMgPSB2aWR4ICUgdGhpcy5faXRlbXNQZXJSb3c7XG4gICAgICAgIHZhciB4ID0gTWF0aC5mbG9vcigobW9kdWx1cyAqIHRoaXMuX2l0ZW1XaWR0aCkgKyByb3dPZmZzZXQpO1xuICAgICAgICBpZiAodGhpcy5faXNSVEwpIHtcbiAgICAgICAgICB4ID0geCAqIC0xO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudHJhbnNsYXRlM2QoeCArICdweCcsIHkgKyAncHgnLCAwLCB0aGlzLl9waHlzaWNhbEl0ZW1zW3BpZHhdKTtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZFJlbmRlck5leHRSb3codmlkeCkpIHtcbiAgICAgICAgICB5ICs9IHRoaXMuX3Jvd0hlaWdodDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IG9yZGVyID0gW107XG4gICAgICB0aGlzLl9pdGVyYXRlSXRlbXMoZnVuY3Rpb24ocGlkeCwgdmlkeCkge1xuICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1twaWR4XTtcbiAgICAgICAgdGhpcy50cmFuc2xhdGUzZCgwLCB5ICsgJ3B4JywgMCwgaXRlbSk7XG4gICAgICAgIHkgKz0gdGhpcy5fcGh5c2ljYWxTaXplc1twaWR4XTtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gaXRlbS5pZDtcbiAgICAgICAgaWYgKGl0ZW1JZCkge1xuICAgICAgICAgIG9yZGVyLnB1c2goaXRlbUlkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBpZiAob3JkZXIubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLW93bnMnLCBvcmRlci5qb2luKCcgJykpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfZ2V0UGh5c2ljYWxTaXplSW5jcmVtZW50OiBmdW5jdGlvbihwaWR4KSB7XG4gICAgaWYgKCF0aGlzLmdyaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLl9waHlzaWNhbFNpemVzW3BpZHhdO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY29tcHV0ZVZpZHgocGlkeCkgJSB0aGlzLl9pdGVtc1BlclJvdyAhPT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX3Jvd0hlaWdodDtcbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucywgYmFzZWQgb24gdGhlIGN1cnJlbnQgaW5kZXgsXG4gICAqIHdoZXRoZXIgb3Igbm90IHRoZSBuZXh0IGluZGV4IHdpbGwgbmVlZFxuICAgKiB0byBiZSByZW5kZXJlZCBvbiBhIG5ldyByb3cuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2aWR4IFZpcnR1YWwgaW5kZXhcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9zaG91bGRSZW5kZXJOZXh0Um93OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgcmV0dXJuIHZpZHggJSB0aGlzLl9pdGVtc1BlclJvdyA9PT0gdGhpcy5faXRlbXNQZXJSb3cgLSAxO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBZGp1c3RzIHRoZSBzY3JvbGwgcG9zaXRpb24gd2hlbiBpdCB3YXMgb3ZlcmVzdGltYXRlZC5cbiAgICovXG4gIF9hZGp1c3RTY3JvbGxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGRlbHRhSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFN0YXJ0ID09PSAwID9cbiAgICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgOlxuICAgICAgICBNYXRoLm1pbih0aGlzLl9zY3JvbGxQb3NpdGlvbiArIHRoaXMuX3BoeXNpY2FsVG9wLCAwKTtcbiAgICAvLyBOb3RlOiB0aGUgZGVsdGEgY2FuIGJlIHBvc2l0aXZlIG9yIG5lZ2F0aXZlLlxuICAgIGlmIChkZWx0YUhlaWdodCAhPT0gMCkge1xuICAgICAgdGhpcy5fcGh5c2ljYWxUb3AgPSB0aGlzLl9waHlzaWNhbFRvcCAtIGRlbHRhSGVpZ2h0O1xuICAgICAgLy8gVGhpcyBtYXkgYmUgY2FsbGVkIG91dHNpZGUgb2YgYSBzY3JvbGxIYW5kbGVyLCBzbyB1c2UgbGFzdCBjYWNoZWQgcG9zaXRpb25cbiAgICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLl9zY3JvbGxQb3NpdGlvbjtcbiAgICAgIC8vIGp1a2luZyBzY3JvbGwgcG9zaXRpb24gZHVyaW5nIGludGVyaWFsIHNjcm9sbGluZyBvbiBpT1MgaXMgbm8gYnVlbm9cbiAgICAgIGlmICghSU9TX1RPVUNIX1NDUk9MTElORyAmJiBzY3JvbGxUb3AgPiAwKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oc2Nyb2xsVG9wIC0gZGVsdGFIZWlnaHQpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgcG9zaXRpb24gb2YgdGhlIHNjcm9sbC5cbiAgICovXG4gIF9yZXNldFNjcm9sbFBvc2l0aW9uOiBmdW5jdGlvbihwb3MpIHtcbiAgICBpZiAodGhpcy5zY3JvbGxUYXJnZXQgJiYgcG9zID49IDApIHtcbiAgICAgIHRoaXMuX3Njcm9sbFRvcCA9IHBvcztcbiAgICAgIHRoaXMuX3Njcm9sbFBvc2l0aW9uID0gdGhpcy5fc2Nyb2xsVG9wO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgc2Nyb2xsIGhlaWdodCwgdGhhdCdzIHRoZSBoZWlnaHQgb2YgdGhlIGNvbnRlbnQsXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbj19IGZvcmNlVXBkYXRlIElmIHRydWUsIHVwZGF0ZXMgdGhlIGhlaWdodCBubyBtYXR0ZXIgd2hhdC5cbiAgICovXG4gIF91cGRhdGVTY3JvbGxlclNpemU6IGZ1bmN0aW9uKGZvcmNlVXBkYXRlKSB7XG4gICAgaWYgKHRoaXMuZ3JpZCkge1xuICAgICAgdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0ID0gdGhpcy5fdmlydHVhbFJvd0NvdW50ICogdGhpcy5fcm93SGVpZ2h0O1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9lc3RTY3JvbGxIZWlnaHQgPVxuICAgICAgICAgICh0aGlzLl9waHlzaWNhbEJvdHRvbSArXG4gICAgICAgICAgIE1hdGgubWF4KFxuICAgICAgICAgICAgICAgdGhpcy5fdmlydHVhbENvdW50IC0gdGhpcy5fcGh5c2ljYWxDb3VudCAtIHRoaXMuX3ZpcnR1YWxTdGFydCxcbiAgICAgICAgICAgICAgIDApICpcbiAgICAgICAgICAgICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSk7XG4gICAgfVxuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHwgdGhpcy5fc2Nyb2xsSGVpZ2h0ID09PSAwO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5fc2Nyb2xsUG9zaXRpb24gPj0gdGhpcy5fZXN0U2Nyb2xsSGVpZ2h0IC0gdGhpcy5fcGh5c2ljYWxTaXplO1xuICAgIGZvcmNlVXBkYXRlID0gZm9yY2VVcGRhdGUgfHxcbiAgICAgICAgdGhpcy5ncmlkICYmIHRoaXMuJC5pdGVtcy5zdHlsZS5oZWlnaHQgPCB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgLy8gQW1vcnRpemUgaGVpZ2h0IGFkanVzdG1lbnQsIHNvIGl0IHdvbid0IHRyaWdnZXIgbGFyZ2UgcmVwYWludHMgdG9vIG9mdGVuLlxuICAgIGlmIChmb3JjZVVwZGF0ZSB8fFxuICAgICAgICBNYXRoLmFicyh0aGlzLl9lc3RTY3JvbGxIZWlnaHQgLSB0aGlzLl9zY3JvbGxIZWlnaHQpID49XG4gICAgICAgICAgICB0aGlzLl92aWV3cG9ydEhlaWdodCkge1xuICAgICAgdGhpcy4kLml0ZW1zLnN0eWxlLmhlaWdodCA9IHRoaXMuX2VzdFNjcm9sbEhlaWdodCArICdweCc7XG4gICAgICB0aGlzLl9zY3JvbGxIZWlnaHQgPSB0aGlzLl9lc3RTY3JvbGxIZWlnaHQ7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTY3JvbGwgdG8gYSBzcGVjaWZpYyBpdGVtIGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSXRlbVxuICAgKiBAcGFyYW0geyhPYmplY3QpfSBpdGVtIFRoZSBpdGVtIHRvIGJlIHNjcm9sbGVkIHRvXG4gICAqL1xuICBzY3JvbGxUb0l0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy5zY3JvbGxUb0luZGV4KHRoaXMuaXRlbXMuaW5kZXhPZihpdGVtKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNjcm9sbCB0byBhIHNwZWNpZmljIGluZGV4IGluIHRoZSB2aXJ0dWFsIGxpc3QgcmVnYXJkbGVzc1xuICAgKiBvZiB0aGUgcGh5c2ljYWwgaXRlbXMgaW4gdGhlIERPTSB0cmVlLlxuICAgKlxuICAgKiBAbWV0aG9kIHNjcm9sbFRvSW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGlkeCBUaGUgaW5kZXggb2YgdGhlIGl0ZW1cbiAgICovXG4gIHNjcm9sbFRvSW5kZXg6IGZ1bmN0aW9uKGlkeCkge1xuICAgIGlmICh0eXBlb2YgaWR4ICE9PSAnbnVtYmVyJyB8fCBpZHggPCAwIHx8IGlkeCA+IHRoaXMuaXRlbXMubGVuZ3RoIC0gMSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmbHVzaCgpO1xuICAgIC8vIEl0ZW1zIHNob3VsZCBoYXZlIGJlZW4gcmVuZGVyZWQgcHJpb3Igc2Nyb2xsaW5nIHRvIGFuIGluZGV4LlxuICAgIGlmICh0aGlzLl9waHlzaWNhbENvdW50ID09PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlkeCA9IHRoaXMuX2NsYW1wKGlkeCwgMCwgdGhpcy5fdmlydHVhbENvdW50IC0gMSk7XG4gICAgLy8gVXBkYXRlIHRoZSB2aXJ0dWFsIHN0YXJ0IG9ubHkgd2hlbiBuZWVkZWQuXG4gICAgaWYgKCF0aGlzLl9pc0luZGV4UmVuZGVyZWQoaWR4KSB8fCBpZHggPj0gdGhpcy5fbWF4VmlydHVhbFN0YXJ0KSB7XG4gICAgICB0aGlzLl92aXJ0dWFsU3RhcnQgPVxuICAgICAgICAgIHRoaXMuZ3JpZCA/IChpZHggLSB0aGlzLl9pdGVtc1BlclJvdyAqIDIpIDogKGlkeCAtIDEpO1xuICAgIH1cbiAgICB0aGlzLl9tYW5hZ2VGb2N1cygpO1xuICAgIHRoaXMuX2Fzc2lnbk1vZGVscygpO1xuICAgIHRoaXMuX3VwZGF0ZU1ldHJpY3MoKTtcbiAgICAvLyBFc3RpbWF0ZSBuZXcgcGh5c2ljYWwgb2Zmc2V0LlxuICAgIHRoaXMuX3BoeXNpY2FsVG9wID0gTWF0aC5mbG9vcih0aGlzLl92aXJ0dWFsU3RhcnQgLyB0aGlzLl9pdGVtc1BlclJvdykgKlxuICAgICAgICB0aGlzLl9waHlzaWNhbEF2ZXJhZ2U7XG5cbiAgICB2YXIgY3VycmVudFRvcEl0ZW0gPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgIHZhciBjdXJyZW50VmlydHVhbEl0ZW0gPSB0aGlzLl92aXJ0dWFsU3RhcnQ7XG4gICAgdmFyIHRhcmdldE9mZnNldFRvcCA9IDA7XG4gICAgdmFyIGhpZGRlbkNvbnRlbnRTaXplID0gdGhpcy5faGlkZGVuQ29udGVudFNpemU7XG4gICAgLy8gc2Nyb2xsIHRvIHRoZSBpdGVtIGFzIG11Y2ggYXMgd2UgY2FuLlxuICAgIHdoaWxlIChjdXJyZW50VmlydHVhbEl0ZW0gPCBpZHggJiYgdGFyZ2V0T2Zmc2V0VG9wIDw9IGhpZGRlbkNvbnRlbnRTaXplKSB7XG4gICAgICB0YXJnZXRPZmZzZXRUb3AgPVxuICAgICAgICAgIHRhcmdldE9mZnNldFRvcCArIHRoaXMuX2dldFBoeXNpY2FsU2l6ZUluY3JlbWVudChjdXJyZW50VG9wSXRlbSk7XG4gICAgICBjdXJyZW50VG9wSXRlbSA9IChjdXJyZW50VG9wSXRlbSArIDEpICUgdGhpcy5fcGh5c2ljYWxDb3VudDtcbiAgICAgIGN1cnJlbnRWaXJ0dWFsSXRlbSsrO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVTY3JvbGxlclNpemUodHJ1ZSk7XG4gICAgdGhpcy5fcG9zaXRpb25JdGVtcygpO1xuICAgIHRoaXMuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsVG9wICsgdGhpcy5fc2Nyb2xsT2Zmc2V0ICsgdGFyZ2V0T2Zmc2V0VG9wKTtcbiAgICB0aGlzLl9pbmNyZWFzZVBvb2xJZk5lZWRlZCgwKTtcbiAgICAvLyBjbGVhciBjYWNoZWQgdmlzaWJsZSBpbmRleC5cbiAgICB0aGlzLl9maXJzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJlc2V0IHRoZSBwaHlzaWNhbCBhdmVyYWdlIGFuZCB0aGUgYXZlcmFnZSBjb3VudC5cbiAgICovXG4gIF9yZXNldEF2ZXJhZ2U6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3BoeXNpY2FsQXZlcmFnZSA9IDA7XG4gICAgdGhpcy5fcGh5c2ljYWxBdmVyYWdlQ291bnQgPSAwO1xuICB9LFxuXG4gIC8qKlxuICAgKiBBIGhhbmRsZXIgZm9yIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50IHRyaWdnZXJlZCBieSBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYFxuICAgKiB3aGVuIHRoZSBlbGVtZW50IGlzIHJlc2l6ZWQuXG4gICAqL1xuICBfcmVzaXplSGFuZGxlcjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZGVib3VuY2UoJ19yZW5kZXInLCBmdW5jdGlvbigpIHtcbiAgICAgIC8vIGNsZWFyIGNhY2hlZCB2aXNpYmxlIGluZGV4LlxuICAgICAgdGhpcy5fZmlyc3RWaXNpYmxlSW5kZXhWYWwgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFZpc2libGVJbmRleFZhbCA9IG51bGw7XG4gICAgICBpZiAodGhpcy5faXNWaXNpYmxlKSB7XG4gICAgICAgIHRoaXMudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgICAgIC8vIFJlaW5zdGFsbCB0aGUgc2Nyb2xsIGV2ZW50IGxpc3RlbmVyLlxuICAgICAgICB0aGlzLnRvZ2dsZVNjcm9sbExpc3RlbmVyKHRydWUpO1xuICAgICAgICB0aGlzLl9yZXNldEF2ZXJhZ2UoKTtcbiAgICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBVbmluc3RhbGwgdGhlIHNjcm9sbCBldmVudCBsaXN0ZW5lci5cbiAgICAgICAgdGhpcy50b2dnbGVTY3JvbGxMaXN0ZW5lcihmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgYW5pbWF0aW9uRnJhbWUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIHRoZSBnaXZlbiBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdEl0ZW1cbiAgICogQHBhcmFtIHtPYmplY3R9IGl0ZW0gVGhlIGl0ZW0gaW5zdGFuY2UuXG4gICAqL1xuICBzZWxlY3RJdGVtOiBmdW5jdGlvbihpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogU2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKlxuICAgKiBAbWV0aG9kIHNlbGVjdEluZGV4XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbmRleCBUaGUgaW5kZXggb2YgdGhlIGl0ZW0gaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKi9cbiAgc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLm11bHRpU2VsZWN0aW9uICYmIHRoaXMuc2VsZWN0ZWRJdGVtKSB7XG4gICAgICB0aGlzLmNsZWFyU2VsZWN0aW9uKCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9pc0luZGV4UmVuZGVyZWQoaW5kZXgpKSB7XG4gICAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChcbiAgICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgoaW5kZXgpXSk7XG4gICAgICBpZiAobW9kZWwpIHtcbiAgICAgICAgbW9kZWxbdGhpcy5zZWxlY3RlZEFzXSA9IHRydWU7XG4gICAgICB9XG4gICAgICB0aGlzLnVwZGF0ZVNpemVGb3JJbmRleChpbmRleCk7XG4gICAgfVxuICAgIHRoaXMuJC5zZWxlY3Rvci5zZWxlY3RJbmRleChpbmRleCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIERlc2VsZWN0cyB0aGUgZ2l2ZW4gaXRlbS5cbiAgICpcbiAgICogQG1ldGhvZCBkZXNlbGVjdFxuICAgKiBAcGFyYW0ge09iamVjdH0gaXRlbSBUaGUgaXRlbSBpbnN0YW5jZS5cbiAgICovXG4gIGRlc2VsZWN0SXRlbTogZnVuY3Rpb24oaXRlbSkge1xuICAgIHJldHVybiB0aGlzLmRlc2VsZWN0SW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogRGVzZWxlY3RzIHRoZSBpdGVtIGF0IHRoZSBnaXZlbiBpbmRleCBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAqXG4gICAqIEBtZXRob2QgZGVzZWxlY3RJbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICovXG4gIGRlc2VsZWN0SW5kZXg6IGZ1bmN0aW9uKGluZGV4KSB7XG4gICAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgIHZhciBtb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KFxuICAgICAgICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpbmRleCldKTtcbiAgICAgIG1vZGVsW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICAgIHRoaXMudXBkYXRlU2l6ZUZvckluZGV4KGluZGV4KTtcbiAgICB9XG4gICAgdGhpcy4kLnNlbGVjdG9yLmRlc2VsZWN0SW5kZXgoaW5kZXgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyBhIGdpdmVuIGl0ZW0gZGVwZW5kaW5nIG9uIHdoZXRoZXIgdGhlIGl0ZW1cbiAgICogaGFzIGFscmVhZHkgYmVlbiBzZWxlY3RlZC5cbiAgICpcbiAgICogQG1ldGhvZCB0b2dnbGVTZWxlY3Rpb25Gb3JJdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIG9iamVjdC5cbiAgICovXG4gIHRvZ2dsZVNlbGVjdGlvbkZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy50b2dnbGVTZWxlY3Rpb25Gb3JJbmRleCh0aGlzLml0ZW1zLmluZGV4T2YoaXRlbSkpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWxlY3RzIG9yIGRlc2VsZWN0cyB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5XG4gICAqIGRlcGVuZGluZyBvbiB3aGV0aGVyIHRoZSBpdGVtIGhhcyBhbHJlYWR5IGJlZW4gc2VsZWN0ZWQuXG4gICAqXG4gICAqIEBtZXRob2QgdG9nZ2xlU2VsZWN0aW9uRm9ySW5kZXhcbiAgICogQHBhcmFtIHtudW1iZXJ9IGluZGV4IFRoZSBpbmRleCBvZiB0aGUgaXRlbSBpbiB0aGUgaXRlbXMgYXJyYXkuXG4gICAqL1xuICB0b2dnbGVTZWxlY3Rpb25Gb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICB2YXIgaXNTZWxlY3RlZCA9IHRoaXMuJC5zZWxlY3Rvci5pc0luZGV4U2VsZWN0ZWQgP1xuICAgICAgICB0aGlzLiQuc2VsZWN0b3IuaXNJbmRleFNlbGVjdGVkKGluZGV4KSA6XG4gICAgICAgIHRoaXMuJC5zZWxlY3Rvci5pc1NlbGVjdGVkKHRoaXMuaXRlbXNbaW5kZXhdKTtcbiAgICBpc1NlbGVjdGVkID8gdGhpcy5kZXNlbGVjdEluZGV4KGluZGV4KSA6IHRoaXMuc2VsZWN0SW5kZXgoaW5kZXgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGN1cnJlbnQgc2VsZWN0aW9uIGluIHRoZSBsaXN0LlxuICAgKlxuICAgKiBAbWV0aG9kIGNsZWFyU2VsZWN0aW9uXG4gICAqL1xuICBjbGVhclNlbGVjdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5faXRlcmF0ZUl0ZW1zKGZ1bmN0aW9uKHBpZHgsIHZpZHgpIHtcbiAgICAgIHRoaXMubW9kZWxGb3JFbGVtZW50KHRoaXMuX3BoeXNpY2FsSXRlbXNbcGlkeF0pW3RoaXMuc2VsZWN0ZWRBc10gPSBmYWxzZTtcbiAgICB9KTtcbiAgICB0aGlzLiQuc2VsZWN0b3IuY2xlYXJTZWxlY3Rpb24oKTtcbiAgfSxcblxuICAvKipcbiAgICogQWRkIGFuIGV2ZW50IGxpc3RlbmVyIHRvIGB0YXBgIGlmIGBzZWxlY3Rpb25FbmFibGVkYCBpcyB0cnVlLFxuICAgKiBpdCB3aWxsIHJlbW92ZSB0aGUgbGlzdGVuZXIgb3RoZXJ3aXNlLlxuICAgKi9cbiAgX3NlbGVjdGlvbkVuYWJsZWRDaGFuZ2VkOiBmdW5jdGlvbihzZWxlY3Rpb25FbmFibGVkKSB7XG4gICAgdmFyIGhhbmRsZXIgPSBzZWxlY3Rpb25FbmFibGVkID8gdGhpcy5saXN0ZW4gOiB0aGlzLnVubGlzdGVuO1xuICAgIGhhbmRsZXIuY2FsbCh0aGlzLCB0aGlzLCAndGFwJywgJ19zZWxlY3Rpb25IYW5kbGVyJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNlbGVjdCBhbiBpdGVtIGZyb20gYW4gZXZlbnQgb2JqZWN0LlxuICAgKi9cbiAgX3NlbGVjdGlvbkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChlLnRhcmdldCk7XG4gICAgaWYgKCFtb2RlbCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgbW9kZWxUYWJJbmRleCwgYWN0aXZlRWxUYWJJbmRleDtcbiAgICB2YXIgdGFyZ2V0ID0gZG9tKGUpLnBhdGhbMF07XG4gICAgdmFyIGFjdGl2ZUVsID0gdGhpcy5fZ2V0QWN0aXZlRWxlbWVudCgpO1xuICAgIHZhciBwaHlzaWNhbEl0ZW0gPVxuICAgICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW3RoaXMuX2dldFBoeXNpY2FsSW5kZXgobW9kZWxbdGhpcy5pbmRleEFzXSldO1xuICAgIC8vIFNhZmFyaSBkb2VzIG5vdCBmb2N1cyBjZXJ0YWluIGZvcm0gY29udHJvbHMgdmlhIG1vdXNlXG4gICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTExODA0M1xuICAgIGlmICh0YXJnZXQubG9jYWxOYW1lID09PSAnaW5wdXQnIHx8IHRhcmdldC5sb2NhbE5hbWUgPT09ICdidXR0b24nIHx8XG4gICAgICAgIHRhcmdldC5sb2NhbE5hbWUgPT09ICdzZWxlY3QnKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIFNldCBhIHRlbXBvcmFyeSB0YWJpbmRleFxuICAgIG1vZGVsVGFiSW5kZXggPSBtb2RlbC50YWJJbmRleDtcbiAgICBtb2RlbC50YWJJbmRleCA9IFNFQ1JFVF9UQUJJTkRFWDtcbiAgICBhY3RpdmVFbFRhYkluZGV4ID0gYWN0aXZlRWwgPyBhY3RpdmVFbC50YWJJbmRleCA6IC0xO1xuICAgIG1vZGVsLnRhYkluZGV4ID0gbW9kZWxUYWJJbmRleDtcbiAgICAvLyBPbmx5IHNlbGVjdCB0aGUgaXRlbSBpZiB0aGUgdGFwIHdhc24ndCBvbiBhIGZvY3VzYWJsZSBjaGlsZFxuICAgIC8vIG9yIHRoZSBlbGVtZW50IGJvdW5kIHRvIGB0YWJJbmRleGBcbiAgICBpZiAoYWN0aXZlRWwgJiYgcGh5c2ljYWxJdGVtICE9PSBhY3RpdmVFbCAmJlxuICAgICAgICBwaHlzaWNhbEl0ZW0uY29udGFpbnMoYWN0aXZlRWwpICYmXG4gICAgICAgIGFjdGl2ZUVsVGFiSW5kZXggIT09IFNFQ1JFVF9UQUJJTkRFWCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnRvZ2dsZVNlbGVjdGlvbkZvckl0ZW0obW9kZWxbdGhpcy5hc10pO1xuICB9LFxuXG4gIF9tdWx0aVNlbGVjdGlvbkNoYW5nZWQ6IGZ1bmN0aW9uKG11bHRpU2VsZWN0aW9uKSB7XG4gICAgdGhpcy5jbGVhclNlbGVjdGlvbigpO1xuICAgIHRoaXMuJC5zZWxlY3Rvci5tdWx0aSA9IG11bHRpU2VsZWN0aW9uO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVcGRhdGVzIHRoZSBzaXplIG9mIGEgZ2l2ZW4gbGlzdCBpdGVtLlxuICAgKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJdGVtXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBpdGVtIFRoZSBpdGVtIGluc3RhbmNlLlxuICAgKi9cbiAgdXBkYXRlU2l6ZUZvckl0ZW06IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gdGhpcy51cGRhdGVTaXplRm9ySW5kZXgodGhpcy5pdGVtcy5pbmRleE9mKGl0ZW0pKTtcbiAgfSxcblxuICAvKipcbiAgICogVXBkYXRlcyB0aGUgc2l6ZSBvZiB0aGUgaXRlbSBhdCB0aGUgZ2l2ZW4gaW5kZXggaW4gdGhlIGl0ZW1zIGFycmF5LlxuICAgKlxuICAgKiBAbWV0aG9kIHVwZGF0ZVNpemVGb3JJbmRleFxuICAgKiBAcGFyYW0ge251bWJlcn0gaW5kZXggVGhlIGluZGV4IG9mIHRoZSBpdGVtIGluIHRoZSBpdGVtcyBhcnJheS5cbiAgICovXG4gIHVwZGF0ZVNpemVGb3JJbmRleDogZnVuY3Rpb24oaW5kZXgpIHtcbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpbmRleCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICB0aGlzLl91cGRhdGVNZXRyaWNzKFt0aGlzLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KV0pO1xuICAgIHRoaXMuX3Bvc2l0aW9uSXRlbXMoKTtcbiAgICByZXR1cm4gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRlbXBvcmFyeSBiYWNrZmlsbCBpdGVtIGluIHRoZSByZW5kZXJlZCBwb29sIG9mIHBoeXNpY2FsIGl0ZW1zXG4gICAqIHRvIHJlcGxhY2UgdGhlIG1haW4gZm9jdXNlZCBpdGVtLiBUaGUgZm9jdXNlZCBpdGVtIGhhcyB0YWJJbmRleCA9IDBcbiAgICogYW5kIG1pZ2h0IGJlIGN1cnJlbnRseSBmb2N1c2VkIGJ5IHRoZSB1c2VyLlxuICAgKlxuICAgKiBUaGlzIGR5bmFtaWMgcmVwbGFjZW1lbnQgaGVscHMgdG8gcHJlc2VydmUgdGhlIGZvY3VzIHN0YXRlLlxuICAgKi9cbiAgX21hbmFnZUZvY3VzOiBmdW5jdGlvbigpIHtcbiAgICB2YXIgZmlkeCA9IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXg7XG5cbiAgICBpZiAoZmlkeCA+PSAwICYmIGZpZHggPCB0aGlzLl92aXJ0dWFsQ291bnQpIHtcbiAgICAgIC8vIGlmIGl0J3MgYSB2YWxpZCBpbmRleCwgY2hlY2sgaWYgdGhhdCBpbmRleCBpcyByZW5kZXJlZFxuICAgICAgLy8gaW4gYSBwaHlzaWNhbCBpdGVtLlxuICAgICAgaWYgKHRoaXMuX2lzSW5kZXhSZW5kZXJlZChmaWR4KSkge1xuICAgICAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NyZWF0ZUZvY3VzQmFja2ZpbGxJdGVtKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl92aXJ0dWFsQ291bnQgPiAwICYmIHRoaXMuX3BoeXNpY2FsQ291bnQgPiAwKSB7XG4gICAgICAvLyBvdGhlcndpc2UsIGFzc2lnbiB0aGUgaW5pdGlhbCBmb2N1c2VkIGluZGV4LlxuICAgICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSB0aGlzLl9waHlzaWNhbFN0YXJ0O1xuICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA9IHRoaXMuX3ZpcnR1YWxTdGFydDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9waHlzaWNhbFN0YXJ0XTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgcmFuZG9tIGluZGV4IHRvIHRoZSBpbmRleCBvZiB0aGUgaXRlbSB0aGF0IGNvbXBsZXRlcyBpdCdzIHJvdy5cbiAgICogQWxsb3dzIGZvciBiZXR0ZXIgb3JkZXIgYW5kIGZpbGwgY29tcHV0YXRpb24gd2hlbiBncmlkID09IHRydWUuXG4gICAqL1xuICBfY29udmVydEluZGV4VG9Db21wbGV0ZVJvdzogZnVuY3Rpb24oaWR4KSB7XG4gICAgLy8gd2hlbiBncmlkID09IGZhbHNlIF9pdGVtUGVyUm93IGNhbiBiZSB1bnNldC5cbiAgICB0aGlzLl9pdGVtc1BlclJvdyA9IHRoaXMuX2l0ZW1zUGVyUm93IHx8IDE7XG4gICAgcmV0dXJuIHRoaXMuZ3JpZCA/IE1hdGguY2VpbChpZHggLyB0aGlzLl9pdGVtc1BlclJvdykgKiB0aGlzLl9pdGVtc1BlclJvdyA6XG4gICAgICAgICAgICAgICAgICAgICAgIGlkeDtcbiAgfSxcblxuICBfaXNJbmRleFJlbmRlcmVkOiBmdW5jdGlvbihpZHgpIHtcbiAgICByZXR1cm4gaWR4ID49IHRoaXMuX3ZpcnR1YWxTdGFydCAmJiBpZHggPD0gdGhpcy5fdmlydHVhbEVuZDtcbiAgfSxcblxuICBfaXNJbmRleFZpc2libGU6IGZ1bmN0aW9uKGlkeCkge1xuICAgIHJldHVybiBpZHggPj0gdGhpcy5maXJzdFZpc2libGVJbmRleCAmJiBpZHggPD0gdGhpcy5sYXN0VmlzaWJsZUluZGV4O1xuICB9LFxuXG4gIF9nZXRQaHlzaWNhbEluZGV4OiBmdW5jdGlvbih2aWR4KSB7XG4gICAgcmV0dXJuICh0aGlzLl9waHlzaWNhbFN0YXJ0ICsgKHZpZHggLSB0aGlzLl92aXJ0dWFsU3RhcnQpKSAlXG4gICAgICAgIHRoaXMuX3BoeXNpY2FsQ291bnQ7XG4gIH0sXG5cbiAgZm9jdXNJdGVtOiBmdW5jdGlvbihpZHgpIHtcbiAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShpZHgpO1xuICB9LFxuXG4gIF9mb2N1c1BoeXNpY2FsSXRlbTogZnVuY3Rpb24oaWR4KSB7XG4gICAgaWYgKGlkeCA8IDAgfHwgaWR4ID49IHRoaXMuX3ZpcnR1YWxDb3VudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9yZXN0b3JlRm9jdXNlZEl0ZW0oKTtcbiAgICAvLyBzY3JvbGwgdG8gaW5kZXggdG8gbWFrZSBzdXJlIGl0J3MgcmVuZGVyZWRcbiAgICBpZiAoIXRoaXMuX2lzSW5kZXhSZW5kZXJlZChpZHgpKSB7XG4gICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoaWR4KTtcbiAgICB9XG4gICAgdmFyIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3BoeXNpY2FsSXRlbXNbdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChpZHgpXTtcbiAgICB2YXIgbW9kZWwgPSB0aGlzLm1vZGVsRm9yRWxlbWVudChwaHlzaWNhbEl0ZW0pO1xuICAgIHZhciBmb2N1c2FibGU7XG4gICAgLy8gc2V0IGEgc2VjcmV0IHRhYiBpbmRleFxuICAgIG1vZGVsLnRhYkluZGV4ID0gU0VDUkVUX1RBQklOREVYO1xuICAgIC8vIGNoZWNrIGlmIGZvY3VzYWJsZSBlbGVtZW50IGlzIHRoZSBwaHlzaWNhbCBpdGVtXG4gICAgaWYgKHBoeXNpY2FsSXRlbS50YWJJbmRleCA9PT0gU0VDUkVUX1RBQklOREVYKSB7XG4gICAgICBmb2N1c2FibGUgPSBwaHlzaWNhbEl0ZW07XG4gICAgfVxuICAgIC8vIHNlYXJjaCBmb3IgdGhlIGVsZW1lbnQgd2hpY2ggdGFiaW5kZXggaXMgYm91bmQgdG8gdGhlIHNlY3JldCB0YWIgaW5kZXhcbiAgICBpZiAoIWZvY3VzYWJsZSkge1xuICAgICAgZm9jdXNhYmxlID0gZG9tKHBoeXNpY2FsSXRlbSlcbiAgICAgICAgICAgICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW3RhYmluZGV4PVwiJyArIFNFQ1JFVF9UQUJJTkRFWCArICdcIl0nKTtcbiAgICB9XG4gICAgLy8gcmVzdG9yZSB0aGUgdGFiIGluZGV4XG4gICAgbW9kZWwudGFiSW5kZXggPSAwO1xuICAgIC8vIGZvY3VzIHRoZSBmb2N1c2FibGUgZWxlbWVudFxuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSBpZHg7XG4gICAgZm9jdXNhYmxlICYmIGZvY3VzYWJsZS5mb2N1cygpO1xuICB9LFxuXG4gIF9yZW1vdmVGb2N1c2VkSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICB0aGlzLl9pdGVtc1BhcmVudC5yZW1vdmVDaGlsZCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSk7XG4gICAgfVxuICAgIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtID0gbnVsbDtcbiAgICB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSA9IG51bGw7XG4gICAgdGhpcy5fZm9jdXNlZEl0ZW0gPSBudWxsO1xuICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPSAtMTtcbiAgICB0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleCA9IC0xO1xuICB9LFxuXG4gIF9jcmVhdGVGb2N1c0JhY2tmaWxsSXRlbTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGZwaWR4ID0gdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXg7XG5cbiAgICBpZiAodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gfHwgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbSkge1xuICAgICAgLy8gQ3JlYXRlIGEgcGh5c2ljYWwgaXRlbS5cbiAgICAgIHZhciBpbnN0ID0gdGhpcy5zdGFtcChudWxsKTtcbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID1cbiAgICAgICAgICAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKGluc3Qucm9vdC5xdWVyeVNlbGVjdG9yKCcqJykpO1xuICAgICAgdGhpcy5faXRlbXNQYXJlbnQuYXBwZW5kQ2hpbGQoaW5zdC5yb290KTtcbiAgICB9XG4gICAgLy8gU2V0IHRoZSBvZmZjcmVlbiBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XTtcbiAgICB0aGlzLm1vZGVsRm9yRWxlbWVudCh0aGlzLl9vZmZzY3JlZW5Gb2N1c2VkSXRlbSkudGFiSW5kZXggPSAwO1xuICAgIHRoaXMuX3BoeXNpY2FsSXRlbXNbZnBpZHhdID0gdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW07XG4gICAgdGhpcy5fZm9jdXNlZFBoeXNpY2FsSW5kZXggPSBmcGlkeDtcbiAgICAvLyBIaWRlIHRoZSBmb2N1c2VkIHBoeXNpY2FsLlxuICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKTtcbiAgfSxcblxuICBfcmVzdG9yZUZvY3VzZWRJdGVtOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtIHx8IHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggPCAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEFzc2lnbiBtb2RlbHMgdG8gdGhlIGZvY3VzZWQgaW5kZXguXG4gICAgdGhpcy5fYXNzaWduTW9kZWxzKCk7XG4gICAgLy8gR2V0IHRoZSBuZXcgcGh5c2ljYWwgaW5kZXggZm9yIHRoZSBmb2N1c2VkIGluZGV4LlxuICAgIHZhciBmcGlkeCA9IHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID1cbiAgICAgICAgdGhpcy5fZ2V0UGh5c2ljYWxJbmRleCh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KTtcblxuICAgIHZhciBvblNjcmVlbkl0ZW0gPSB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XTtcbiAgICBpZiAoIW9uU2NyZWVuSXRlbSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB2YXIgb25TY3JlZW5JbnN0YW5jZSA9IHRoaXMubW9kZWxGb3JFbGVtZW50KG9uU2NyZWVuSXRlbSk7XG4gICAgdmFyIG9mZlNjcmVlbkluc3RhbmNlID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0pO1xuICAgIC8vIFJlc3RvcmVzIHRoZSBwaHlzaWNhbCBpdGVtIG9ubHkgd2hlbiBpdCBoYXMgdGhlIHNhbWUgbW9kZWxcbiAgICAvLyBhcyB0aGUgb2Zmc2NyZWVuIG9uZS4gVXNlIGtleSBmb3IgY29tcGFyaXNvbiBzaW5jZSB1c2VycyBjYW4gc2V0XG4gICAgLy8gYSBuZXcgaXRlbSB2aWEgc2V0KCdpdGVtcy5pZHgnKS5cbiAgICBpZiAob25TY3JlZW5JbnN0YW5jZVt0aGlzLmFzXSA9PT0gb2ZmU2NyZWVuSW5zdGFuY2VbdGhpcy5hc10pIHtcbiAgICAgIC8vIEZsaXAgdGhlIGZvY3VzIGJhY2tmaWxsLlxuICAgICAgdGhpcy5fZm9jdXNCYWNrZmlsbEl0ZW0gPSBvblNjcmVlbkl0ZW07XG4gICAgICBvblNjcmVlbkluc3RhbmNlLnRhYkluZGV4ID0gLTE7XG4gICAgICAvLyBSZXN0b3JlIHRoZSBmb2N1c2VkIHBoeXNpY2FsIGl0ZW0uXG4gICAgICB0aGlzLl9waHlzaWNhbEl0ZW1zW2ZwaWR4XSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtO1xuICAgICAgLy8gSGlkZSB0aGUgcGh5c2ljYWwgaXRlbSB0aGF0IGJhY2tmaWxscy5cbiAgICAgIHRoaXMudHJhbnNsYXRlM2QoMCwgSElEREVOX1ksIDAsIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fcmVtb3ZlRm9jdXNlZEl0ZW0oKTtcbiAgICAgIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtID0gbnVsbDtcbiAgICB9XG4gICAgdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0gPSBudWxsO1xuICB9LFxuXG4gIF9kaWRGb2N1czogZnVuY3Rpb24oZSkge1xuICAgIHZhciB0YXJnZXRNb2RlbCA9IHRoaXMubW9kZWxGb3JFbGVtZW50KGUudGFyZ2V0KTtcbiAgICB2YXIgZm9jdXNlZE1vZGVsID0gdGhpcy5tb2RlbEZvckVsZW1lbnQodGhpcy5fZm9jdXNlZEl0ZW0pO1xuICAgIHZhciBoYXNPZmZzY3JlZW5Gb2N1c2VkSXRlbSA9IHRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtICE9PSBudWxsO1xuICAgIHZhciBmaWR4ID0gdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleDtcbiAgICBpZiAoIXRhcmdldE1vZGVsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChmb2N1c2VkTW9kZWwgPT09IHRhcmdldE1vZGVsKSB7XG4gICAgICAvLyBJZiB0aGUgdXNlciBmb2N1c2VkIHRoZSBzYW1lIGl0ZW0sIHRoZW4gYnJpbmcgaXQgaW50byB2aWV3IGlmIGl0J3Mgbm90XG4gICAgICAvLyB2aXNpYmxlLlxuICAgICAgaWYgKCF0aGlzLl9pc0luZGV4VmlzaWJsZShmaWR4KSkge1xuICAgICAgICB0aGlzLnNjcm9sbFRvSW5kZXgoZmlkeCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Jlc3RvcmVGb2N1c2VkSXRlbSgpO1xuICAgICAgLy8gUmVzdG9yZSB0YWJJbmRleCBmb3IgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGl0ZW0uXG4gICAgICBpZiAoZm9jdXNlZE1vZGVsKSB7XG4gICAgICAgIGZvY3VzZWRNb2RlbC50YWJJbmRleCA9IC0xO1xuICAgICAgfVxuICAgICAgLy8gU2V0IHRoZSB0YWJJbmRleCBmb3IgdGhlIG5leHQgZm9jdXNlZCBpdGVtLlxuICAgICAgdGFyZ2V0TW9kZWwudGFiSW5kZXggPSAwO1xuICAgICAgZmlkeCA9IHRhcmdldE1vZGVsW3RoaXMuaW5kZXhBc107XG4gICAgICB0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID0gZmlkeDtcbiAgICAgIHRoaXMuX2ZvY3VzZWRQaHlzaWNhbEluZGV4ID0gdGhpcy5fZ2V0UGh5c2ljYWxJbmRleChmaWR4KTtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJdGVtID0gdGhpcy5fcGh5c2ljYWxJdGVtc1t0aGlzLl9mb2N1c2VkUGh5c2ljYWxJbmRleF07XG4gICAgICBpZiAoaGFzT2Zmc2NyZWVuRm9jdXNlZEl0ZW0gJiYgIXRoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZSgpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfa2V5ZG93bkhhbmRsZXI6IGZ1bmN0aW9uKGUpIHtcbiAgICBzd2l0Y2ggKGUua2V5Q29kZSkge1xuICAgICAgY2FzZSAvKiBBUlJPV19ET1dOICovIDQwOlxuICAgICAgICBpZiAodGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCA8IHRoaXMuX3ZpcnR1YWxDb3VudCAtIDEpXG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShcbiAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5ncmlkID8gdGhpcy5faXRlbXNQZXJSb3cgOiAxKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAvKiBBUlJPV19SSUdIVCAqLyAzOTpcbiAgICAgICAgaWYgKHRoaXMuZ3JpZClcbiAgICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbShcbiAgICAgICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCArICh0aGlzLl9pc1JUTCA/IC0xIDogMSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgLyogQVJST1dfVVAgKi8gMzg6XG4gICAgICAgIGlmICh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4ID4gMClcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuX2ZvY3VzUGh5c2ljYWxJdGVtKFxuICAgICAgICAgICAgdGhpcy5fZm9jdXNlZFZpcnR1YWxJbmRleCAtICh0aGlzLmdyaWQgPyB0aGlzLl9pdGVtc1BlclJvdyA6IDEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIEFSUk9XX0xFRlQgKi8gMzc6XG4gICAgICAgIGlmICh0aGlzLmdyaWQpXG4gICAgICAgICAgdGhpcy5fZm9jdXNQaHlzaWNhbEl0ZW0oXG4gICAgICAgICAgICAgIHRoaXMuX2ZvY3VzZWRWaXJ0dWFsSW5kZXggKyAodGhpcy5faXNSVEwgPyAxIDogLTEpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIC8qIEVOVEVSICovIDEzOlxuICAgICAgICB0aGlzLl9mb2N1c1BoeXNpY2FsSXRlbSh0aGlzLl9mb2N1c2VkVmlydHVhbEluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuc2VsZWN0aW9uRW5hYmxlZClcbiAgICAgICAgICB0aGlzLl9zZWxlY3Rpb25IYW5kbGVyKGUpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgX2NsYW1wOiBmdW5jdGlvbih2LCBtaW4sIG1heCkge1xuICAgIHJldHVybiBNYXRoLm1pbihtYXgsIE1hdGgubWF4KG1pbiwgdikpO1xuICB9LFxuXG4gIF9kZWJvdW5jZTogZnVuY3Rpb24obmFtZSwgY2IsIGFzeW5jTW9kdWxlKSB7XG4gICAgdGhpcy5fZGVib3VuY2VycyA9IHRoaXMuX2RlYm91bmNlcnMgfHwge307XG4gICAgdGhpcy5fZGVib3VuY2Vyc1tuYW1lXSA9XG4gICAgICAgIERlYm91bmNlci5kZWJvdW5jZSh0aGlzLl9kZWJvdW5jZXJzW25hbWVdLCBhc3luY01vZHVsZSwgY2IuYmluZCh0aGlzKSk7XG4gICAgZW5xdWV1ZURlYm91bmNlcih0aGlzLl9kZWJvdW5jZXJzW25hbWVdKTtcbiAgfSxcblxuICBfZm9yd2FyZFByb3BlcnR5OiBmdW5jdGlvbihpbnN0LCBuYW1lLCB2YWx1ZSkge1xuICAgIGluc3QuX3NldFBlbmRpbmdQcm9wZXJ0eShuYW1lLCB2YWx1ZSk7XG4gIH0sXG5cbiAgLyogVGVtcGxhdGl6ZXIgYmluZGluZ3MgZm9yIHYyICovXG4gIF9mb3J3YXJkSG9zdFByb3BWMjogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAodGhpcy5fcGh5c2ljYWxJdGVtcyB8fCBbXSlcbiAgICAgICAgLmNvbmNhdChbdGhpcy5fb2Zmc2NyZWVuRm9jdXNlZEl0ZW0sIHRoaXMuX2ZvY3VzQmFja2ZpbGxJdGVtXSlcbiAgICAgICAgLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xuICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICB0aGlzLm1vZGVsRm9yRWxlbWVudChpdGVtKS5mb3J3YXJkSG9zdFByb3AocHJvcCwgdmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG4gIH0sXG5cbiAgX25vdGlmeUluc3RhbmNlUHJvcFYyOiBmdW5jdGlvbihpbnN0LCBwcm9wLCB2YWx1ZSkge1xuICAgIGlmIChtYXRjaGVzKHRoaXMuYXMsIHByb3ApKSB7XG4gICAgICB2YXIgaWR4ID0gaW5zdFt0aGlzLmluZGV4QXNdO1xuICAgICAgaWYgKHByb3AgPT0gdGhpcy5hcykge1xuICAgICAgICB0aGlzLml0ZW1zW2lkeF0gPSB2YWx1ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMubm90aWZ5UGF0aCh0cmFuc2xhdGUodGhpcy5hcywgJ2l0ZW1zLicgKyBpZHgsIHByb3ApLCB2YWx1ZSk7XG4gICAgfVxuICB9LFxuXG4gIC8qIFRlbXBsYXRpemVyIGJpbmRpbmdzIGZvciB2MSAqL1xuICBfZ2V0U3RhbXBlZENoaWxkcmVuOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5fcGh5c2ljYWxJdGVtcztcbiAgfSxcblxuICBfZm9yd2FyZEluc3RhbmNlUGF0aDogZnVuY3Rpb24oaW5zdCwgcGF0aCwgdmFsdWUpIHtcbiAgICBpZiAocGF0aC5pbmRleE9mKHRoaXMuYXMgKyAnLicpID09PSAwKSB7XG4gICAgICB0aGlzLm5vdGlmeVBhdGgoXG4gICAgICAgICAgJ2l0ZW1zLicgKyBpbnN0Ll9fa2V5X18gKyAnLicgKyBwYXRoLnNsaWNlKHRoaXMuYXMubGVuZ3RoICsgMSksXG4gICAgICAgICAgdmFsdWUpO1xuICAgIH1cbiAgfSxcblxuICBfZm9yd2FyZFBhcmVudFBhdGg6IGZ1bmN0aW9uKHBhdGgsIHZhbHVlKSB7XG4gICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSkubm90aWZ5UGF0aChwYXRoLCB2YWx1ZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcbiAgfSxcblxuICBfZm9yd2FyZFBhcmVudFByb3A6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgKHRoaXMuX3BoeXNpY2FsSXRlbXMgfHwgW10pXG4gICAgICAgIC5jb25jYXQoW3RoaXMuX29mZnNjcmVlbkZvY3VzZWRJdGVtLCB0aGlzLl9mb2N1c0JhY2tmaWxsSXRlbV0pXG4gICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgdGhpcy5tb2RlbEZvckVsZW1lbnQoaXRlbSlbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0sIHRoaXMpO1xuICB9LFxuXG4gIC8qIEdldHMgdGhlIGFjdGl2ZUVsZW1lbnQgb2YgdGhlIHNoYWRvdyByb290L2hvc3QgdGhhdCBjb250YWlucyB0aGUgbGlzdC4gKi9cbiAgX2dldEFjdGl2ZUVsZW1lbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHZhciBpdGVtc0hvc3QgPSB0aGlzLl9pdGVtc1BhcmVudC5ub2RlLmRvbUhvc3Q7XG4gICAgcmV0dXJuIGRvbShpdGVtc0hvc3QgPyBpdGVtc0hvc3Qucm9vdCA6IGRvY3VtZW50KS5hY3RpdmVFbGVtZW50O1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxOCBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IENvbWJvQm94UGxhY2Vob2xkZXIgfSBmcm9tICcuL3ZhYWRpbi1jb21iby1ib3gtcGxhY2Vob2xkZXIuanMnO1xuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbWJvQm94RGF0YVByb3ZpZGVyTWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIERhdGFQcm92aWRlck1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogTnVtYmVyIG9mIGl0ZW1zIGZldGNoZWQgYXQgYSB0aW1lIGZyb20gdGhlIGRhdGFwcm92aWRlci5cbiAgICAgICAqL1xuICAgICAgcGFnZVNpemU6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogNTAsXG4gICAgICAgIG9ic2VydmVyOiAnX3BhZ2VTaXplQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVG90YWwgbnVtYmVyIG9mIGl0ZW1zLlxuICAgICAgICovXG4gICAgICBzaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgb2JzZXJ2ZXI6ICdfc2l6ZUNoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZ1bmN0aW9uIHRoYXQgcHJvdmlkZXMgaXRlbXMgbGF6aWx5LiBSZWNlaXZlcyBhcmd1bWVudHMgYHBhcmFtc2AsIGBjYWxsYmFja2BcbiAgICAgICAqXG4gICAgICAgKiBgcGFyYW1zLnBhZ2VgIFJlcXVlc3RlZCBwYWdlIGluZGV4XG4gICAgICAgKlxuICAgICAgICogYHBhcmFtcy5wYWdlU2l6ZWAgQ3VycmVudCBwYWdlIHNpemVcbiAgICAgICAqXG4gICAgICAgKiBgcGFyYW1zLmZpbHRlcmAgQ3VycmVudGx5IGFwcGxpZWQgZmlsdGVyXG4gICAgICAgKlxuICAgICAgICogYGNhbGxiYWNrKGl0ZW1zLCBzaXplKWAgQ2FsbGJhY2sgZnVuY3Rpb24gd2l0aCBhcmd1bWVudHM6XG4gICAgICAgKiAgIC0gYGl0ZW1zYCBDdXJyZW50IHBhZ2Ugb2YgaXRlbXNcbiAgICAgICAqICAgLSBgc2l6ZWAgVG90YWwgbnVtYmVyIG9mIGl0ZW1zLlxuICAgICAgICovXG4gICAgICBkYXRhUHJvdmlkZXI6IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBvYnNlcnZlcjogJ19kYXRhUHJvdmlkZXJDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX3BlbmRpbmdSZXF1ZXN0czoge1xuICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7fTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgX19wbGFjZUhvbGRlcjoge1xuICAgICAgICB2YWx1ZTogbmV3IENvbWJvQm94UGxhY2Vob2xkZXIoKVxuICAgICAgfVxuXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnX2RhdGFQcm92aWRlckZpbHRlckNoYW5nZWQoZmlsdGVyLCBkYXRhUHJvdmlkZXIpJyxcbiAgICAgICdfZGF0YVByb3ZpZGVyQ2xlYXJGaWx0ZXIoZGF0YVByb3ZpZGVyLCBvcGVuZWQsIHZhbHVlKScsXG4gICAgICAnX3dhcm5EYXRhUHJvdmlkZXJWYWx1ZShkYXRhUHJvdmlkZXIsIHZhbHVlKScsXG4gICAgICAnX2Vuc3VyZUZpcnN0UGFnZShvcGVuZWQpJyxcbiAgICBdO1xuICB9XG5cbiAgX2RhdGFQcm92aWRlckNsZWFyRmlsdGVyKGRhdGFQcm92aWRlciwgb3BlbmVkLCB2YWx1ZSkge1xuICAgIC8vIENhbid0IGRlcGVuZCBvbiBmaWx0ZXIgaW4gdGhpcyBvYnNldmVyIGFzIHdlIGRvbid0IHdhbnRcbiAgICAvLyB0byBjbGVhciB0aGUgZmlsdGVyIHdoZW5ldmVyIGl0J3Mgc2V0XG4gICAgaWYgKGRhdGFQcm92aWRlciAmJiB0aGlzLmZpbHRlcikge1xuICAgICAgdGhpcy5zaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzID0ge307XG4gICAgICB0aGlzLmZpbHRlciA9ICcnO1xuICAgICAgdGhpcy5jbGVhckNhY2hlKCk7XG4gICAgfVxuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdpbmRleC1yZXF1ZXN0ZWQnLCBlID0+IHtcbiAgICAgIGNvbnN0IGluZGV4ID0gZS5kZXRhaWwuaW5kZXg7XG4gICAgICBpZiAoaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBjb25zdCBwYWdlID0gdGhpcy5fZ2V0UGFnZUZvckluZGV4KGluZGV4KTtcbiAgICAgICAgaWYgKHRoaXMuX3Nob3VsZExvYWRQYWdlKHBhZ2UpKSB7XG4gICAgICAgICAgdGhpcy5fbG9hZFBhZ2UocGFnZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIF9kYXRhUHJvdmlkZXJGaWx0ZXJDaGFuZ2VkKCkge1xuICAgIGlmICh0aGlzLmRhdGFQcm92aWRlciAmJiB0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5zaXplID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzID0ge307XG4gICAgICB0aGlzLmNsZWFyQ2FjaGUoKTtcbiAgICB9XG4gIH1cblxuICBfZW5zdXJlRmlyc3RQYWdlKG9wZW5lZCkge1xuICAgIGlmIChvcGVuZWQgJiYgdGhpcy5fc2hvdWxkTG9hZFBhZ2UoMCkpIHtcbiAgICAgIHRoaXMuX2xvYWRQYWdlKDApO1xuICAgIH1cbiAgfVxuXG4gIF9zaG91bGRMb2FkUGFnZShwYWdlKSB7XG4gICAgaWYgKCF0aGlzLmZpbHRlcmVkSXRlbXMgfHwgdGhpcy5fZm9yY2VOZXh0UmVxdWVzdCkge1xuICAgICAgdGhpcy5fZm9yY2VOZXh0UmVxdWVzdCA9IGZhbHNlO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgY29uc3QgbG9hZGVkSXRlbSA9IHRoaXMuZmlsdGVyZWRJdGVtc1twYWdlICogdGhpcy5wYWdlU2l6ZV07XG4gICAgaWYgKGxvYWRlZEl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGxvYWRlZEl0ZW0gaW5zdGFuY2VvZiBDb21ib0JveFBsYWNlaG9sZGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zaXplID09PSB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgX2xvYWRQYWdlKHBhZ2UpIHtcbiAgICAvLyBtYWtlIHN1cmUgc2FtZSBwYWdlIGlzbid0IHJlcXVlc3RlZCBtdWx0aXBsZSB0aW1lcy5cbiAgICBpZiAoIXRoaXMuX3BlbmRpbmdSZXF1ZXN0c1twYWdlXSAmJiB0aGlzLmRhdGFQcm92aWRlcikge1xuICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBwYWdlLFxuICAgICAgICBwYWdlU2l6ZTogdGhpcy5wYWdlU2l6ZSxcbiAgICAgICAgZmlsdGVyOiB0aGlzLmZpbHRlclxuICAgICAgfTtcblxuICAgICAgY29uc3QgY2FsbGJhY2sgPSAoaXRlbXMsIHNpemUpID0+IHtcbiAgICAgICAgaWYgKHRoaXMuX3BlbmRpbmdSZXF1ZXN0c1twYWdlXSA9PT0gY2FsbGJhY2spIHtcbiAgICAgICAgICBpZiAoIXRoaXMuZmlsdGVyZWRJdGVtcykge1xuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgICAgICAgICAgZmlsdGVyZWRJdGVtcy5zcGxpY2UocGFyYW1zLnBhZ2UgKiBwYXJhbXMucGFnZVNpemUsIGl0ZW1zLmxlbmd0aCwgLi4uaXRlbXMpO1xuICAgICAgICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zcGxpY2UoJ2ZpbHRlcmVkSXRlbXMnLCBwYXJhbXMucGFnZSAqIHBhcmFtcy5wYWdlU2l6ZSwgaXRlbXMubGVuZ3RoLCAuLi5pdGVtcyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIFVwZGF0ZSBzZWxlY3RlZEl0ZW0gZnJvbSBmaWx0ZXJlZEl0ZW1zIGlmIHZhbHVlIGlzIHNldFxuICAgICAgICAgIGlmICh0aGlzLl9pc1ZhbGlkVmFsdWUodGhpcy52YWx1ZSkgJiYgdGhpcy5fZ2V0SXRlbVZhbHVlKHRoaXMuc2VsZWN0ZWRJdGVtKSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5fc2VsZWN0SXRlbUZvclZhbHVlKHRoaXMudmFsdWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xuXG4gICAgICAgICAgZGVsZXRlIHRoaXMuX3BlbmRpbmdSZXF1ZXN0c1twYWdlXTtcblxuICAgICAgICAgIGlmIChPYmplY3Qua2V5cyh0aGlzLl9wZW5kaW5nUmVxdWVzdHMpLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChwYWdlID09PSAwICYmIHRoaXMuX19yZXBvc2l0aW9uT3ZlcmxheURlYm91bmNlciAmJiBpdGVtcy5sZW5ndGggPiAodGhpcy5fX21heFJlbmRlcmVkSXRlbXMgfHwgMCkpIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fX3JlcG9zaXRpb25PdmVybGF5RGVib3VuY2VyLmZsdXNoKCkpO1xuICAgICAgICAgICAgdGhpcy5fX21heFJlbmRlcmVkSXRlbXMgPSBpdGVtcy5sZW5ndGg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgICAgdGhpcy5fcGVuZGluZ1JlcXVlc3RzW3BhZ2VdID0gY2FsbGJhY2s7XG4gICAgICB0aGlzLmRhdGFQcm92aWRlcihwYXJhbXMsIGNhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBfZ2V0UGFnZUZvckluZGV4KGluZGV4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoaW5kZXggLyB0aGlzLnBhZ2VTaXplKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbGVhcnMgdGhlIGNhY2hlZCBwYWdlcyBhbmQgcmVsb2FkcyBkYXRhIGZyb20gZGF0YXByb3ZpZGVyIHdoZW4gbmVlZGVkLlxuICAgKi9cbiAgY2xlYXJDYWNoZSgpIHtcbiAgICBpZiAoIXRoaXMuZGF0YVByb3ZpZGVyKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3BlbmRpbmdSZXF1ZXN0cyA9IHt9O1xuICAgIGNvbnN0IGZpbHRlcmVkSXRlbXMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8ICh0aGlzLnNpemUgfHwgMCk7IGkrKykge1xuICAgICAgZmlsdGVyZWRJdGVtcy5wdXNoKHRoaXMuX19wbGFjZUhvbGRlcik7XG4gICAgfVxuICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IGZpbHRlcmVkSXRlbXM7XG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9sb2FkUGFnZSgwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9yY2VOZXh0UmVxdWVzdCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX3NpemVDaGFuZ2VkKHNpemUgPSAwKSB7XG4gICAgY29uc3QgZmlsdGVyZWRJdGVtcyA9ICh0aGlzLmZpbHRlcmVkSXRlbXMgfHwgW10pLnNsaWNlKDAsIHNpemUpO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgaSsrKSB7XG4gICAgICBmaWx0ZXJlZEl0ZW1zW2ldID0gZmlsdGVyZWRJdGVtc1tpXSAhPT0gdW5kZWZpbmVkID8gZmlsdGVyZWRJdGVtc1tpXSA6IHRoaXMuX19wbGFjZUhvbGRlcjtcbiAgICB9XG4gICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gZmlsdGVyZWRJdGVtcztcbiAgfVxuXG4gIF9wYWdlU2l6ZUNoYW5nZWQocGFnZVNpemUsIG9sZFBhZ2VTaXplKSB7XG4gICAgaWYgKE1hdGguZmxvb3IocGFnZVNpemUpICE9PSBwYWdlU2l6ZSB8fCBwYWdlU2l6ZSA8IDEpIHtcbiAgICAgIHRoaXMucGFnZVNpemUgPSBvbGRQYWdlU2l6ZTtcbiAgICAgIHRocm93IG5ldyBFcnJvcignYHBhZ2VTaXplYCB2YWx1ZSBtdXN0IGJlIGFuIGludGVnZXIgPiAwJyk7XG4gICAgfVxuICAgIHRoaXMuY2xlYXJDYWNoZSgpO1xuICB9XG5cbiAgX2RhdGFQcm92aWRlckNoYW5nZWQoZGF0YVByb3ZpZGVyLCBvbGREYXRhUHJvdmlkZXIpIHtcbiAgICB0aGlzLl9lbnN1cmVJdGVtc09yRGF0YVByb3ZpZGVyKCgpID0+IHtcbiAgICAgIHRoaXMuZGF0YVByb3ZpZGVyID0gb2xkRGF0YVByb3ZpZGVyO1xuICAgIH0pO1xuICB9XG5cbiAgX2Vuc3VyZUl0ZW1zT3JEYXRhUHJvdmlkZXIocmVzdG9yZU9sZFZhbHVlQ2FsbGJhY2spIHtcbiAgICBpZiAodGhpcy5pdGVtcyAhPT0gdW5kZWZpbmVkICYmIHRoaXMuZGF0YVByb3ZpZGVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJlc3RvcmVPbGRWYWx1ZUNhbGxiYWNrKCk7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzaW5nIGBpdGVtc2AgYW5kIGBkYXRhUHJvdmlkZXJgIHRvZ2V0aGVyIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGF0YVByb3ZpZGVyICYmICF0aGlzLmZpbHRlcmVkSXRlbXMpIHtcbiAgICAgIHRoaXMuZmlsdGVyZWRJdGVtcyA9IFtdO1xuICAgIH1cbiAgfVxuXG4gIF93YXJuRGF0YVByb3ZpZGVyVmFsdWUoZGF0YVByb3ZpZGVyLCB2YWx1ZSkge1xuICAgIGlmIChkYXRhUHJvdmlkZXIgJiYgdmFsdWUgIT09ICcnICYmICh0aGlzLnNlbGVjdGVkSXRlbSA9PT0gdW5kZWZpbmVkIHx8IHRoaXMuc2VsZWN0ZWRJdGVtID09PSBudWxsKSkge1xuICAgICAgY29uc3QgdmFsdWVJbmRleCA9IHRoaXMuX2luZGV4T2ZWYWx1ZSh2YWx1ZSwgdGhpcy5maWx0ZXJlZEl0ZW1zKTtcbiAgICAgIGlmICh2YWx1ZUluZGV4IDwgMCB8fCAhdGhpcy5fZ2V0SXRlbUxhYmVsKHRoaXMuZmlsdGVyZWRJdGVtc1t2YWx1ZUluZGV4XSkpIHtcbiAgICAgICAgLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgJ1dhcm5pbmc6IHVuYWJsZSB0byBkZXRlcm1pbmUgdGhlIGxhYmVsIGZvciB0aGUgcHJvdmlkZWQgYHZhbHVlYC4gJyArXG4gICAgICAgICAgJ05vdGhpbmcgdG8gZGlzcGxheSBpbiB0aGUgdGV4dCBmaWVsZC4gVGhpcyB1c3VhbGx5IGhhcHBlbnMgd2hlbiAnICtcbiAgICAgICAgICAnc2V0dGluZyBhbiBpbml0aWFsIGB2YWx1ZWAgYmVmb3JlIGFueSBpdGVtcyBhcmUgcmV0dXJuZWQgZnJvbSAnICtcbiAgICAgICAgICAndGhlIGBkYXRhUHJvdmlkZXJgIGNhbGxiYWNrLiBDb25zaWRlciBzZXR0aW5nIGBzZWxlY3RlZEl0ZW1gICcgK1xuICAgICAgICAgICdpbnN0ZWFkIG9mIGB2YWx1ZWAnXG4gICAgICAgICk7XG4gICAgICAgIC8qIGVzbGludC1lbmFibGUgbm8tY29uc29sZSAqL1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1saXN0L2lyb24tbGlzdC5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWNvbWJvLWJveC1pdGVtLmpzJztcbmltcG9ydCAnLi92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLmpzJztcbmltcG9ydCB7IENvbWJvQm94UGxhY2Vob2xkZXIgfSBmcm9tICcuL3ZhYWRpbi1jb21iby1ib3gtcGxhY2Vob2xkZXIuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgVE9VQ0hfREVWSUNFID0gKCgpID0+IHtcbiAgdHJ5IHtcbiAgICBkb2N1bWVudC5jcmVhdGVFdmVudCgnVG91Y2hFdmVudCcpO1xuICAgIHJldHVybiB0cnVlO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59KSgpO1xuXG4vKipcbiAqIEVsZW1lbnQgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENvbWJvQm94RHJvcGRvd25XcmFwcGVyRWxlbWVudCBleHRlbmRzIChjbGFzcyBleHRlbmRzIFBvbHltZXJFbGVtZW50IHt9KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24gaWQ9XCJkcm9wZG93blwiIGhpZGRlbj1cIltbX2hpZGRlbihfaXRlbXMuKiwgbG9hZGluZyldXVwiIHBvc2l0aW9uLXRhcmdldD1cIltbcG9zaXRpb25UYXJnZXRdXVwiIG9uLXRlbXBsYXRlLWNoYW5nZWQ9XCJfdGVtcGxhdGVDaGFuZ2VkXCIgb24tcG9zaXRpb24tY2hhbmdlZD1cIl9zZXRPdmVybGF5SGVpZ2h0XCIgZGlzYWJsZS11cGdyYWRlPVwiXCIgdGhlbWU9XCJbW3RoZW1lXV1cIj5cbiAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgPHN0eWxlPlxuICAgICAgICAgICNzY3JvbGxlciB7XG4gICAgICAgICAgICBvdmVyZmxvdzogYXV0bztcblxuICAgICAgICAgICAgLyogRml4ZXMgaXRlbSBiYWNrZ3JvdW5kIGZyb20gZ2V0dGluZyBvbiB0b3Agb2Ygc2Nyb2xsYmFycyBvbiBTYWZhcmkgKi9cbiAgICAgICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG5cbiAgICAgICAgICAgIC8qIEVuYWJsZSBtb21lbnR1bSBzY3JvbGxpbmcgb24gaU9TIChpcm9uLWxpc3QgdjEuMisgbm8gbG9uZ2VyIGRvZXMgaXQgZm9yIHVzKSAqL1xuICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuXG4gICAgICAgICAgICAvKiBGaXhlcyBzY3JvbGxiYXIgZGlzYXBwZWFyaW5nIHdoZW4gJ1Nob3cgc2Nyb2xsIGJhcnM6IEFsd2F5cycgZW5hYmxlZCBpbiBTYWZhcmkgKi9cbiAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIHdoaXRlO1xuICAgICAgICAgIH1cbiAgICAgICAgPC9zdHlsZT5cbiAgICAgICAgPGRpdiBpZD1cInNjcm9sbGVyXCIgb24tY2xpY2s9XCJfc3RvcFByb3BhZ2F0aW9uXCI+XG4gICAgICAgICAgPGlyb24tbGlzdCBpZD1cInNlbGVjdG9yXCIgcm9sZT1cImxpc3Rib3hcIiBpdGVtcz1cIltbX2dldEl0ZW1zKG9wZW5lZCwgX2l0ZW1zKV1dXCIgc2Nyb2xsLXRhcmdldD1cIltbX3Njcm9sbGVyXV1cIj5cbiAgICAgICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICAgICAgPHZhYWRpbi1jb21iby1ib3gtaXRlbSBvbi1jbGljaz1cIl9vbkl0ZW1DbGlja1wiIGluZGV4PVwiW1tfX3JlcXVlc3RJdGVtQnlJbmRleChpdGVtLCBpbmRleCldXVwiIGl0ZW09XCJbW2l0ZW1dXVwiIGxhYmVsPVwiW1tnZXRJdGVtTGFiZWwoaXRlbSwgX2l0ZW1MYWJlbFBhdGgpXV1cIiBzZWxlY3RlZD1cIltbX2lzSXRlbVNlbGVjdGVkKGl0ZW0sIF9zZWxlY3RlZEl0ZW0sIF9pdGVtSWRQYXRoKV1dXCIgcmVuZGVyZXI9XCJbW3JlbmRlcmVyXV1cIiByb2xlXFwkPVwiW1tfZ2V0QXJpYVJvbGUoaW5kZXgpXV1cIiBhcmlhLXNlbGVjdGVkXFwkPVwiW1tfZ2V0QXJpYVNlbGVjdGVkKF9mb2N1c2VkSW5kZXgsaW5kZXgpXV1cIiBmb2N1c2VkPVwiW1tfaXNJdGVtRm9jdXNlZChfZm9jdXNlZEluZGV4LGluZGV4KV1dXCIgdGFiaW5kZXg9XCItMVwiIHRoZW1lXFwkPVwiW1t0aGVtZV1dXCI+XG4gICAgICAgICAgICAgIDwvdmFhZGluLWNvbWJvLWJveC1pdGVtPlxuICAgICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgICA8L2lyb24tbGlzdD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi13cmFwcGVyJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUcnVlIGlmIHRoZSBkZXZpY2Ugc3VwcG9ydHMgdG91Y2ggZXZlbnRzLlxuICAgICAgICovXG4gICAgICB0b3VjaERldmljZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogVE9VQ0hfREVWSUNFXG4gICAgICB9LFxuXG4gICAgICBvcGVuZWQ6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVsZW1lbnQgdG8gcG9zaXRpb24vYWxpZ24gdGhlIGRyb3Bkb3duIGJ5LlxuICAgICAgICovXG4gICAgICBwb3NpdGlvblRhcmdldDoge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ3VzdG9tIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgdGhlIGNvbnRlbnQgb2YgdGhlIGA8dmFhZGluLWNvbWJvLWJveC1pdGVtPmAgcHJvcGFnYXRlZCBmcm9tIHRoZSBjb21ibyBib3ggZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgcmVuZGVyZXI6IEZ1bmN0aW9uLFxuXG4gICAgICAvKipcbiAgICAgICAqIGB0cnVlYCB3aGVuIG5ldyBpdGVtcyBhcmUgYmVpbmcgbG9hZGVkLlxuICAgICAgICovXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19zZXRPdmVybGF5SGVpZ2h0J1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2VkIHRvIHByb3BhZ2F0ZSB0aGUgYHRoZW1lYCBhdHRyaWJ1dGUgZnJvbSB0aGUgaG9zdCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICB0aGVtZTogU3RyaW5nLFxuXG4gICAgICBfc2VsZWN0ZWRJdGVtOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgX2l0ZW1zOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgX2ZvY3VzZWRJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAtMSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfZm9jdXNlZEluZGV4Q2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF9mb2N1c2VkSXRlbToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIGNvbXB1dGVkOiAnX2dldEZvY3VzZWRJdGVtKF9mb2N1c2VkSW5kZXgpJ1xuICAgICAgfSxcblxuICAgICAgX2l0ZW1MYWJlbFBhdGg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ2xhYmVsJ1xuICAgICAgfSxcblxuICAgICAgX2l0ZW1WYWx1ZVBhdGg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xuICAgICAgfSxcblxuICAgICAgX3NlbGVjdG9yOiBPYmplY3QsXG5cbiAgICAgIF9pdGVtSWRQYXRoOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFsnX3NlbGVjdG9yQ2hhbmdlZChfc2VsZWN0b3IpJywgJ19sb2FkaW5nQ2hhbmdlZChsb2FkaW5nKScsICdfb3BlbmVkQ2hhbmdlZChvcGVuZWQsIF9pdGVtcywgbG9hZGluZyknXTtcbiAgfVxuXG4gIF9maXJlVG91Y2hBY3Rpb24oc291cmNlRXZlbnQpIHtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd2YWFkaW4tb3ZlcmxheS10b3VjaC1hY3Rpb24nLCB7XG4gICAgICBkZXRhaWw6IHtzb3VyY2VFdmVudDogc291cmNlRXZlbnR9XG4gICAgfSkpO1xuICB9XG5cbiAgX2dldEl0ZW1zKG9wZW5lZCwgaXRlbXMpIHtcbiAgICByZXR1cm4gb3BlbmVkID8gaXRlbXMgOiBbXTtcbiAgfVxuXG4gIF9vcGVuZWRDaGFuZ2VkKG9wZW5lZCwgaXRlbXMsIGxvYWRpbmcpIHtcbiAgICBpZiAodGhpcy4kLmRyb3Bkb3duLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZS11cGdyYWRlJykpIHtcbiAgICAgIGlmICghb3BlbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2luaXREcm9wZG93bigpO1xuICAgICAgfVxuICAgIH1cbiAgICAvLyBEbyBub3QgYXR0YWNoIGlmIG5vIGl0ZW1zXG4gICAgLy8gRG8gbm90IGRldHRhY2ggaWYgb3BlbmVkIGJ1dCB1c2VyIHR5cGVzIGFuIGludmFsaWQgc2VhcmNoXG4gICAgdGhpcy4kLmRyb3Bkb3duLm9wZW5lZCA9ICEhKG9wZW5lZCAmJiAobG9hZGluZyB8fCB0aGlzLiQuZHJvcGRvd24ub3BlbmVkIHx8IGl0ZW1zICYmIGl0ZW1zLmxlbmd0aCkpO1xuICB9XG5cbiAgX2luaXREcm9wZG93bigpIHtcbiAgICB0aGlzLiQuZHJvcGRvd24ucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlLXVwZ3JhZGUnKTtcblxuICAgIHRoaXMuX3RlbXBsYXRlQ2hhbmdlZCgpO1xuICAgIHRoaXMuX2xvYWRpbmdDaGFuZ2VkKHRoaXMubG9hZGluZyk7XG5cbiAgICB0aGlzLiQuZHJvcGRvd24uJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZSA9PiB0aGlzLl9maXJlVG91Y2hBY3Rpb24oZSkpO1xuICAgIHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgZSA9PiB0aGlzLl9maXJlVG91Y2hBY3Rpb24oZSkpO1xuXG4gICAgLy8gUHJldmVudCBibHVycmluZyB0aGUgaW5wdXQgd2hlbiBjbGlja2luZyBpbnNpZGUgdGhlIG92ZXJsYXkuXG4gICAgdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG5cbiAgICAvLyBJRTExOiB3aGVuIHNjcm9sbGluZyB3aXRoIG1vdXNlLCB0aGUgZm9jdXMgZ29lcyB0byB0aGUgc2Nyb2xsZXIuXG4gICAgLy8gVGhpcyBjYXVzZXMgdGhlIG92ZXJsYXkgY2xvc2luZyBkdWUgdG8gZGVmb2N1c2luZyB0aGUgaW5wdXQgZmllbGQuXG4gICAgLy8gUHJldmVudCBmb2N1c2luZyB0aGUgc2Nyb2xsZXIgYnkgc2V0dGluZyBgdW5zZWxlY3RhYmxlPVwib25cImAuXG4gICAgaWYgKC9UcmlkZW50Ly50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpKSB7XG4gICAgICB0aGlzLl9zY3JvbGxlci5zZXRBdHRyaWJ1dGUoJ3Vuc2VsZWN0YWJsZScsICdvbicpO1xuICAgIH1cbiAgfVxuXG4gIF90ZW1wbGF0ZUNoYW5nZWQoZSkge1xuICAgIGlmICh0aGlzLiQuZHJvcGRvd24uaGFzQXR0cmlidXRlKCdkaXNhYmxlLXVwZ3JhZGUnKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX3NlbGVjdG9yID0gdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNzZWxlY3RvcicpO1xuICAgIHRoaXMuX3Njcm9sbGVyID0gdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNzY3JvbGxlcicpO1xuICB9XG5cbiAgX2xvYWRpbmdDaGFuZ2VkKGxvYWRpbmcpIHtcbiAgICBpZiAodGhpcy4kLmRyb3Bkb3duLmhhc0F0dHJpYnV0ZSgnZGlzYWJsZS11cGdyYWRlJykpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobG9hZGluZykge1xuICAgICAgdGhpcy4kLmRyb3Bkb3duLiQub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdsb2FkaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdG9yQ2hhbmdlZChzZWxlY3Rvcikge1xuICAgIHRoaXMuX3BhdGNoV2hlZWxPdmVyU2Nyb2xsaW5nKCk7XG4gIH1cblxuICBfc2V0T3ZlcmxheUhlaWdodCgpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkIHx8ICF0aGlzLnBvc2l0aW9uVGFyZ2V0IHx8ICF0aGlzLl9zZWxlY3Rvcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLnBvc2l0aW9uVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgdGhpcy5fc2Nyb2xsZXIuc3R5bGUubWF4SGVpZ2h0ID0gKHdpbmRvdy5TaGFkeUNTUyA/XG4gICAgICB3aW5kb3cuU2hhZHlDU1MuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKHRoaXMsICctLXZhYWRpbi1jb21iby1ib3gtb3ZlcmxheS1tYXgtaGVpZ2h0JykgOlxuICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5nZXRQcm9wZXJ0eVZhbHVlKCctLXZhYWRpbi1jb21iby1ib3gtb3ZlcmxheS1tYXgtaGVpZ2h0JykpIHx8ICc2NXZoJztcblxuICAgIGNvbnN0IG1heEhlaWdodCA9IHRoaXMuX21heE92ZXJsYXlIZWlnaHQodGFyZ2V0UmVjdCk7XG5cbiAgICAvLyBvdmVybGF5IG1heCBoZWlnaHQgaXMgcmVzdHJhaW5lZCBieSB0aGUgI3Njcm9sbGVyIG1heCBoZWlnaHQgd2hpY2ggaXMgc2V0IHRvIDY1dmggaW4gQ1NTLlxuICAgIHRoaXMuJC5kcm9wZG93bi4kLm92ZXJsYXkuc3R5bGUubWF4SGVpZ2h0ID0gbWF4SGVpZ2h0O1xuXG4gICAgLy8gd2UgbmVlZCB0byBzZXQgaGVpZ2h0IGZvciBpcm9uLWxpc3QgdG8gbWFrZSBpdHMgYGZpcnN0VmlzaWJsZUluZGV4YCB3b3JrIGNvcnJlY3RseS5cbiAgICB0aGlzLl9zZWxlY3Rvci5zdHlsZS5tYXhIZWlnaHQgPSBtYXhIZWlnaHQ7XG5cbiAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICB9XG5cbiAgX21heE92ZXJsYXlIZWlnaHQodGFyZ2V0UmVjdCkge1xuICAgIGNvbnN0IG1hcmdpbiA9IDg7XG4gICAgY29uc3QgbWluSGVpZ2h0ID0gMTE2OyAvLyBIZWlnaHQgb2YgdHdvIGl0ZW1zIGluIGNvbWJvLWJveFxuICAgIGNvbnN0IGJvdHRvbSA9IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgLSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCk7XG5cbiAgICBpZiAodGhpcy4kLmRyb3Bkb3duLmFsaWduZWRBYm92ZSkge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KHRhcmdldFJlY3QudG9wIC0gbWFyZ2luICsgTWF0aC5taW4oZG9jdW1lbnQuYm9keS5zY3JvbGxUb3AsIDApLCBtaW5IZWlnaHQpICsgJ3B4JztcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIE1hdGgubWF4KGJvdHRvbSAtIHRhcmdldFJlY3QuYm90dG9tIC0gbWFyZ2luLCBtaW5IZWlnaHQpICsgJ3B4JztcbiAgICB9XG4gIH1cblxuICBfZ2V0Rm9jdXNlZEl0ZW0oZm9jdXNlZEluZGV4KSB7XG4gICAgaWYgKGZvY3VzZWRJbmRleCA+PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5faXRlbXNbZm9jdXNlZEluZGV4XTtcbiAgICB9XG4gIH1cblxuICBfaXNJdGVtU2VsZWN0ZWQoaXRlbSwgc2VsZWN0ZWRJdGVtLCBpdGVtSWRQYXRoKSB7XG4gICAgaWYgKGl0ZW0gaW5zdGFuY2VvZiBDb21ib0JveFBsYWNlaG9sZGVyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSBlbHNlIGlmIChpdGVtSWRQYXRoICYmIGl0ZW0gIT09IHVuZGVmaW5lZCAmJiBzZWxlY3RlZEl0ZW0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0KGl0ZW1JZFBhdGgsIGl0ZW0pID09PSB0aGlzLmdldChpdGVtSWRQYXRoLCBzZWxlY3RlZEl0ZW0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaXRlbSA9PT0gc2VsZWN0ZWRJdGVtO1xuICAgIH1cbiAgfVxuXG4gIF9vbkl0ZW1DbGljayhlKSB7XG4gICAgaWYgKGUuZGV0YWlsICYmIGUuZGV0YWlsLnNvdXJjZUV2ZW50ICYmIGUuZGV0YWlsLnNvdXJjZUV2ZW50LnN0b3BQcm9wYWdhdGlvbikge1xuICAgICAgdGhpcy5fc3RvcFByb3BhZ2F0aW9uKGUuZGV0YWlsLnNvdXJjZUV2ZW50KTtcbiAgICB9XG5cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzZWxlY3Rpb24tY2hhbmdlZCcsIHtkZXRhaWw6IHtpdGVtOiBlLm1vZGVsLml0ZW19fSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGluZGV4IG9mIHRoZSBpdGVtIHdpdGggdGhlIHByb3ZpZGVkIGxhYmVsLlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBpbmRleE9mTGFiZWwobGFiZWwpIHtcbiAgICBpZiAodGhpcy5faXRlbXMgJiYgbGFiZWwpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5faXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgaWYgKHRoaXMuZ2V0SXRlbUxhYmVsKHRoaXMuX2l0ZW1zW2ldKS50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgPT09XG4gICAgICAgICAgbGFiZWwudG9TdHJpbmcoKS50b0xvd2VyQ2FzZSgpKSB7XG4gICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLTE7XG4gIH1cblxuICAvKipcbiAgICogSWYgZGF0YVByb3ZpZGVyIGlzIHVzZWQsIGRpc3BhdGNoIGEgcmVxdWVzdCBmb3IgdGhlIGl0ZW3igJlzIGluZGV4IGlmXG4gICAqIHRoZSBpdGVtIGlzIGEgcGxhY2Vob2xkZXIgb2JqZWN0LlxuICAgKlxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9XG4gICAqL1xuICBfX3JlcXVlc3RJdGVtQnlJbmRleChpdGVtLCBpbmRleCkge1xuICAgIGlmICgoaXRlbSBpbnN0YW5jZW9mIENvbWJvQm94UGxhY2Vob2xkZXIpICYmIGluZGV4ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2luZGV4LXJlcXVlc3RlZCcsIHtkZXRhaWw6IHtpbmRleH19KSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGV4O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldHMgdGhlIGxhYmVsIHN0cmluZyBmb3IgdGhlIGl0ZW0gYmFzZWQgb24gdGhlIGBfaXRlbUxhYmVsUGF0aGAuXG4gICAqIEByZXR1cm4ge1N0cmluZ31cbiAgICovXG4gIGdldEl0ZW1MYWJlbChpdGVtLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgaXRlbUxhYmVsUGF0aCA9IGl0ZW1MYWJlbFBhdGggfHwgdGhpcy5faXRlbUxhYmVsUGF0aDtcbiAgICBsZXQgbGFiZWwgPSBpdGVtICYmIGl0ZW1MYWJlbFBhdGggPyB0aGlzLmdldChpdGVtTGFiZWxQYXRoLCBpdGVtKSA6IHVuZGVmaW5lZDtcbiAgICBpZiAobGFiZWwgPT09IHVuZGVmaW5lZCB8fCBsYWJlbCA9PT0gbnVsbCkge1xuICAgICAgbGFiZWwgPSBpdGVtID8gaXRlbS50b1N0cmluZygpIDogJyc7XG4gICAgfVxuICAgIHJldHVybiBsYWJlbDtcbiAgfVxuXG4gIF9pc0l0ZW1Gb2N1c2VkKGZvY3VzZWRJbmRleCwgaXRlbUluZGV4KSB7XG4gICAgcmV0dXJuIGZvY3VzZWRJbmRleCA9PSBpdGVtSW5kZXg7XG4gIH1cblxuICBfZ2V0QXJpYVNlbGVjdGVkKGZvY3VzZWRJbmRleCwgaXRlbUluZGV4KSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSXRlbUZvY3VzZWQoZm9jdXNlZEluZGV4LCBpdGVtSW5kZXgpLnRvU3RyaW5nKCk7XG4gIH1cblxuICBfZ2V0QXJpYVJvbGUoaXRlbUluZGV4KSB7XG4gICAgcmV0dXJuIGl0ZW1JbmRleCAhPT0gdW5kZWZpbmVkID8gJ29wdGlvbicgOiBmYWxzZTtcbiAgfVxuXG4gIF9mb2N1c2VkSW5kZXhDaGFuZ2VkKGluZGV4KSB7XG4gICAgaWYgKGluZGV4ID49IDApIHtcbiAgICAgIHRoaXMuX3Njcm9sbEludG9WaWV3KGluZGV4KTtcbiAgICB9XG4gIH1cblxuICBfc2Nyb2xsSW50b1ZpZXcoaW5kZXgpIHtcbiAgICBpZiAoISh0aGlzLm9wZW5lZCAmJiBpbmRleCA+PSAwKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB2aXNpYmxlSXRlbXNDb3VudCA9IHRoaXMuX3Zpc2libGVJdGVtc0NvdW50KCk7XG4gICAgaWYgKHZpc2libGVJdGVtc0NvdW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vIFNjcm9sbGVyIGlzIG5vdCB2aXNpYmxlLiBNb3ZpbmcgaXMgdW5uZWNlc3NhcnkuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IHRhcmdldEluZGV4ID0gaW5kZXg7XG5cbiAgICBpZiAoaW5kZXggPiB0aGlzLl9zZWxlY3Rvci5sYXN0VmlzaWJsZUluZGV4IC0gMSkge1xuICAgICAgLy8gSW5kZXggaXMgYmVsb3cgdGhlIGJvdHRvbSwgc2Nyb2xsaW5nIGRvd24uIE1ha2UgdGhlIGl0ZW0gYXBwZWFyIGF0IHRoZSBib3R0b20uXG4gICAgICAvLyBGaXJzdCBzY3JvbGwgdG8gdGFyZ2V0ICh3aWxsIGJlIGF0IHRoZSB0b3Agb2YgdGhlIHNjcm9sbGVyKSB0byBtYWtlIHN1cmUgaXQncyByZW5kZXJlZC5cbiAgICAgIHRoaXMuX3NlbGVjdG9yLnNjcm9sbFRvSW5kZXgoaW5kZXgpO1xuICAgICAgLy8gVGhlbiBjYWxjdWxhdGUgdGhlIGluZGV4IGZvciB0aGUgZm9sbG93aW5nIHNjcm9sbCAodG8gZ2V0IHRoZSB0YXJnZXQgdG8gYm90dG9tIG9mIHRoZSBzY3JvbGxlcikuXG4gICAgICB0YXJnZXRJbmRleCA9IGluZGV4IC0gdmlzaWJsZUl0ZW1zQ291bnQgKyAxO1xuICAgIH0gZWxzZSBpZiAoaW5kZXggPiB0aGlzLl9zZWxlY3Rvci5maXJzdFZpc2libGVJbmRleCkge1xuICAgICAgLy8gVGhlIGl0ZW0gaXMgYWxyZWFkeSB2aXNpYmxlLCBzY3JvbGxpbmcgaXMgdW5uZWNlc3NhcnkgcGVyIHNlLiBCdXQgd2UgbmVlZCB0byB0cmlnZ2VyIGlyb24tbGlzdCB0byBzZXRcbiAgICAgIC8vIHRoZSBjb3JyZWN0IHNjcm9sbFRvcCBvbiB0aGUgc2Nyb2xsVGFyZ2V0LiBTY3JvbGxpbmcgdG8gZmlyc3RWaXNpYmxlSW5kZXguXG4gICAgICB0YXJnZXRJbmRleCA9IHRoaXMuX3NlbGVjdG9yLmZpcnN0VmlzaWJsZUluZGV4O1xuICAgIH1cbiAgICB0aGlzLl9zZWxlY3Rvci5zY3JvbGxUb0luZGV4KE1hdGgubWF4KDAsIHRhcmdldEluZGV4KSk7XG5cbiAgICAvLyBTb21ldGltZXMgdGhlIGl0ZW0gaXMgcGFydGx5IGJlbG93IHRoZSBib3R0b20gZWRnZSwgZGV0ZWN0IGFuZCBhZGp1c3QuXG4gICAgY29uc3QgcGlkeCA9IHRoaXMuX3NlbGVjdG9yLl9nZXRQaHlzaWNhbEluZGV4KGluZGV4KSxcbiAgICAgIHBoeXNpY2FsSXRlbSA9IHRoaXMuX3NlbGVjdG9yLl9waHlzaWNhbEl0ZW1zW3BpZHhdO1xuICAgIGlmICghcGh5c2ljYWxJdGVtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IHBoeXNpY2FsSXRlbVJlY3QgPSBwaHlzaWNhbEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCksXG4gICAgICBzY3JvbGxlclJlY3QgPSB0aGlzLl9zY3JvbGxlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSxcbiAgICAgIHNjcm9sbFRvcEFkanVzdCA9IHBoeXNpY2FsSXRlbVJlY3QuYm90dG9tIC0gc2Nyb2xsZXJSZWN0LmJvdHRvbSArIHRoaXMuX3ZpZXdwb3J0VG90YWxQYWRkaW5nQm90dG9tO1xuICAgIGlmIChzY3JvbGxUb3BBZGp1c3QgPiAwKSB7XG4gICAgICB0aGlzLl9zY3JvbGxlci5zY3JvbGxUb3AgKz0gc2Nyb2xsVG9wQWRqdXN0O1xuICAgIH1cbiAgfVxuXG4gIGVuc3VyZUl0ZW1zUmVuZGVyZWQoKSB7XG4gICAgdGhpcy5fc2VsZWN0b3IuX3JlbmRlcigpO1xuICB9XG5cbiAgYWRqdXN0U2Nyb2xsUG9zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMub3BlbmVkICYmIHRoaXMuX2l0ZW1zKSB7XG4gICAgICB0aGlzLl9zY3JvbGxJbnRvVmlldyh0aGlzLl9mb2N1c2VkSW5kZXgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBXZSB3YW50IHRvIHByZXZlbnQgdGhlIGtpbmV0aWMgc2Nyb2xsaW5nIGVuZXJneSBmcm9tIGJlaW5nIHRyYW5zZmVycmVkIGZyb20gdGhlIG92ZXJsYXkgY29udGVudHMgb3ZlciB0byB0aGUgcGFyZW50LlxuICAgKiBGdXJ0aGVyIGltcHJvdmVtZW50IGlkZWFzOiBhZnRlciB0aGUgY29udGVudHMgaGF2ZSBiZWVuIHNjcm9sbGVkIHRvIHRoZSB0b3Agb3IgYm90dG9tIGFuZCBzY3JvbGxpbmcgaGFzIHN0b3BwZWQsIGl0IGNvdWxkIGFsbG93XG4gICAqIHNjcm9sbGluZyB0aGUgcGFyZW50IHNpbWlsYXJseSB0byB0b3VjaCBzY3JvbGxpbmcuXG4gICAqL1xuICBfcGF0Y2hXaGVlbE92ZXJTY3JvbGxpbmcoKSB7XG4gICAgY29uc3Qgc2VsZWN0b3IgPSB0aGlzLl9zZWxlY3RvcjtcbiAgICBzZWxlY3Rvci5hZGRFdmVudExpc3RlbmVyKCd3aGVlbCcsIGUgPT4ge1xuICAgICAgY29uc3Qgc2Nyb2xsZXIgPSBzZWxlY3Rvci5fc2Nyb2xsZXIgfHwgc2VsZWN0b3Iuc2Nyb2xsVGFyZ2V0O1xuICAgICAgY29uc3Qgc2Nyb2xsZWRUb1RvcCA9IHNjcm9sbGVyLnNjcm9sbFRvcCA9PT0gMDtcbiAgICAgIGNvbnN0IHNjcm9sbGVkVG9Cb3R0b20gPSAoc2Nyb2xsZXIuc2Nyb2xsSGVpZ2h0IC0gc2Nyb2xsZXIuc2Nyb2xsVG9wIC0gc2Nyb2xsZXIuY2xpZW50SGVpZ2h0KSA8PSAxO1xuXG4gICAgICBpZiAoc2Nyb2xsZWRUb1RvcCAmJiBlLmRlbHRhWSA8IDApIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGxlZFRvQm90dG9tICYmIGUuZGVsdGFZID4gMCkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB1cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKSB7XG4gICAgdGhpcy5fY2FjaGVkVmlld3BvcnRUb3RhbFBhZGRpbmdCb3R0b20gPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5fc2VsZWN0b3IudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gIH1cblxuICBnZXQgX3ZpZXdwb3J0VG90YWxQYWRkaW5nQm90dG9tKCkge1xuICAgIGlmICh0aGlzLl9jYWNoZWRWaWV3cG9ydFRvdGFsUGFkZGluZ0JvdHRvbSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb25zdCBpdGVtc1N0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcy5fc2VsZWN0b3IuJC5pdGVtcyk7XG4gICAgICB0aGlzLl9jYWNoZWRWaWV3cG9ydFRvdGFsUGFkZGluZ0JvdHRvbSA9IFtcbiAgICAgICAgaXRlbXNTdHlsZS5wYWRkaW5nQm90dG9tLFxuICAgICAgICBpdGVtc1N0eWxlLmJvcmRlckJvdHRvbVdpZHRoXG4gICAgICBdLm1hcCh2ID0+IHtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KHYsIDEwKTtcbiAgICAgIH0pLnJlZHVjZSgoc3VtLCB2KSA9PiB7XG4gICAgICAgIHJldHVybiBzdW0gKyB2O1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2NhY2hlZFZpZXdwb3J0VG90YWxQYWRkaW5nQm90dG9tO1xuICB9XG5cbiAgX3Zpc2libGVJdGVtc0NvdW50KCkge1xuICAgIGlmICghdGhpcy5fc2VsZWN0b3IpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBFbnN1cmUgaXRlbXMgYXJlIHJlbmRlcmVkXG4gICAgdGhpcy5fc2VsZWN0b3IuZmx1c2hEZWJvdW5jZXIoJ19kZWJvdW5jZVRlbXBsYXRlJyk7XG4gICAgLy8gRW5zdXJlIGl0ZW1zIGFyZSBwb3NpdGlvbmVkXG4gICAgdGhpcy5fc2VsZWN0b3Iuc2Nyb2xsVG9JbmRleCh0aGlzLl9zZWxlY3Rvci5maXJzdFZpc2libGVJbmRleCk7XG4gICAgLy8gRW5zdXJlIHZpZXdwb3J0IGJvdW5kYXJpZXMgYXJlIHVwLXRvLWRhdGVcbiAgICB0aGlzLnVwZGF0ZVZpZXdwb3J0Qm91bmRhcmllcygpO1xuICAgIHJldHVybiB0aGlzLl9zZWxlY3Rvci5sYXN0VmlzaWJsZUluZGV4IC0gdGhpcy5fc2VsZWN0b3IuZmlyc3RWaXNpYmxlSW5kZXggKyAxO1xuICB9XG5cbiAgX3NlbGVjdEl0ZW0oaXRlbSkge1xuICAgIGl0ZW0gPSAodHlwZW9mIGl0ZW0gPT09ICdudW1iZXInKSA/IHRoaXMuX2l0ZW1zW2l0ZW1dIDogaXRlbTtcbiAgICBpZiAodGhpcy5fc2VsZWN0b3Iuc2VsZWN0ZWRJdGVtICE9PSBpdGVtKSB7XG4gICAgICB0aGlzLl9zZWxlY3Rvci5zZWxlY3RJdGVtKGl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF9wcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgaWYgKGUuY2FuY2VsYWJsZSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIF9zdG9wUHJvcGFnYXRpb24oZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH1cblxuICBfaGlkZGVuKGl0ZW1zQ2hhbmdlKSB7XG4gICAgcmV0dXJuICF0aGlzLmxvYWRpbmcgJiYgKCF0aGlzLl9pdGVtcyB8fCAhdGhpcy5faXRlbXMubGVuZ3RoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoQ29tYm9Cb3hEcm9wZG93bldyYXBwZXJFbGVtZW50LmlzLCBDb21ib0JveERyb3Bkb3duV3JhcHBlckVsZW1lbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IERpc2FibGVVcGdyYWRlTWl4aW4gfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZGlzYWJsZS11cGdyYWRlLW1peGluLmpzJztcbmltcG9ydCB7IE92ZXJsYXlFbGVtZW50IH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tb3ZlcmxheS9zcmMvdmFhZGluLW92ZXJsYXkuanMnO1xuaW1wb3J0IHsgSXJvblJlc2l6YWJsZUJlaGF2aW9yIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzLmpzJztcbi8qKlxuICogVGhlIG92ZXJsYXkgZWxlbWVudC5cbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFNlZSBbYDx2YWFkaW4tb3ZlcmxheT5gIGRvY3VtZW50YXRpb25dKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLW92ZXJsYXkvYmxvYi9tYXN0ZXIvc3JjL3ZhYWRpbi1vdmVybGF5Lmh0bWwpXG4gKiBmb3IgYDx2YWFkaW4tY29tYm8tYm94LW92ZXJsYXk+YCBwYXJ0cy5cbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBDb21ib0JveE92ZXJsYXlFbGVtZW50IGV4dGVuZHMgT3ZlcmxheUVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWNvbWJvLWJveC1vdmVybGF5JztcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbG9hZGVyLnNldEF0dHJpYnV0ZSgncGFydCcsICdsb2FkZXInKTtcbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0fj1cImNvbnRlbnRcIl0nKTtcbiAgICBjb250ZW50LnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxvYWRlciwgY29udGVudCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKENvbWJvQm94T3ZlcmxheUVsZW1lbnQuaXMsIENvbWJvQm94T3ZlcmxheUVsZW1lbnQpO1xuXG4vKipcbiAqIEVsZW1lbnQgZm9yIGludGVybmFsIHVzZSBvbmx5LlxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENvbWJvQm94RHJvcGRvd25FbGVtZW50IGV4dGVuZHMgRGlzYWJsZVVwZ3JhZGVNaXhpbihcbiAgbWl4aW5CZWhhdmlvcnMoSXJvblJlc2l6YWJsZUJlaGF2aW9yLCBQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+ICNvdmVybGF5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDx2YWFkaW4tY29tYm8tYm94LW92ZXJsYXkgaWQ9XCJvdmVybGF5XCIgaGlkZGVuXFwkPVwiW1toaWRkZW5dXVwiIG9wZW5lZD1cIltbb3BlbmVkXV1cIiB0ZW1wbGF0ZT1cInt7dGVtcGxhdGV9fVwiIHN0eWxlPVwiYWxpZ24taXRlbXM6IHN0cmV0Y2g7IG1hcmdpbjogMDtcIiB0aGVtZVxcJD1cIltbdGhlbWVdXVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvdmFhZGluLWNvbWJvLWJveC1vdmVybGF5PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICB0ZW1wbGF0ZToge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZWxlbWVudCB0byBwb3NpdGlvbi9hbGlnbiB0aGUgZHJvcGRvd24gYnkuXG4gICAgICAgKi9cbiAgICAgIHBvc2l0aW9uVGFyZ2V0OiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiBgdHJ1ZWAsIG92ZXJsYXkgaXMgYWxpZ25lZCBhYm92ZSB0aGUgYHBvc2l0aW9uVGFyZ2V0YFxuICAgICAgICovXG4gICAgICBhbGlnbmVkQWJvdmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFVzZWQgdG8gcHJvcGFnYXRlIHRoZSBgdGhlbWVgIGF0dHJpYnV0ZSBmcm9tIHRoZSBob3N0IGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHRoZW1lOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9ib3VuZFNldFBvc2l0aW9uID0gdGhpcy5fc2V0UG9zaXRpb24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyID0gdGhpcy5fb3V0c2lkZUNsaWNrTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kU2V0UG9zaXRpb24pO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIC8vIFByZXZlbnRpbmcgdGhlIGRlZmF1bHQgbW9kYWwgYmVoYXZpb3VyIG9mIHRoZSBvdmVybGF5IG9uIGlucHV0IGNsaWNraW5nXG4gICAgdGhpcy4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndmFhZGluLW92ZXJsYXktb3V0c2lkZS1jbGljaycsIGUgPT4ge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lyb24tcmVzaXplJywgdGhpcy5fYm91bmRTZXRQb3NpdGlvbik7XG5cbiAgICAvLyBNYWtpbmcgc3VyZSB0aGUgb3ZlcmxheSBpcyBjbG9zZWQgYW5kIHJlbW92ZWQgZnJvbSBET00gYWZ0ZXIgZGV0YWNoaW5nIHRoZSBkcm9wZG93bi5cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgbm90aWZ5UmVzaXplKCkge1xuICAgIHN1cGVyLm5vdGlmeVJlc2l6ZSgpO1xuXG4gICAgaWYgKHRoaXMucG9zaXRpb25UYXJnZXQgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX3NldFBvc2l0aW9uKCk7XG4gICAgICAvLyBTY2hlZHVsZSBhbm90aGVyIHBvc2l0aW9uIHVwZGF0ZSAodG8gY292ZXIgdmlydHVhbCBrZXlib2FyZCBvcGVuaW5nIGZvciBleGFtcGxlKVxuICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMuX3NldFBvc2l0aW9uLmJpbmQodGhpcykpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCBhZnRlciB0aGUgYHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd25gIG9wZW5zLlxuICAgKlxuICAgKiBAZXZlbnQgdmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi1vcGVuZWRcbiAgICovXG4gIC8qKlxuICAgKiBGaXJlZCBhZnRlciB0aGUgYHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd25gIGNsb3Nlcy5cbiAgICpcbiAgICogQGV2ZW50IHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tY2xvc2VkXG4gICAqL1xuXG4gIF9vcGVuZWRDaGFuZ2VkKG9wZW5lZCwgb2xkVmFsdWUpIHtcbiAgICBpZiAoISFvcGVuZWQgPT09ICEhb2xkVmFsdWUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAob3BlbmVkKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5wb3NpdGlvbiA9IHRoaXMuX2lzUG9zaXRpb25GaXhlZCh0aGlzLnBvc2l0aW9uVGFyZ2V0KSA/ICdmaXhlZCcgOiAnYWJzb2x1dGUnO1xuICAgICAgdGhpcy5fc2V0UG9zaXRpb24oKTtcblxuICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kU2V0UG9zaXRpb24sIHRydWUpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9ib3VuZE91dHNpZGVDbGlja0xpc3RlbmVyLCB0cnVlKTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tb3BlbmVkJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRTZXRQb3NpdGlvbiwgdHJ1ZSk7XG4gICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX2JvdW5kT3V0c2lkZUNsaWNrTGlzdGVuZXIsIHRydWUpO1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndmFhZGluLWNvbWJvLWJveC1kcm9wZG93bi1jbG9zZWQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gICAgfVxuICB9XG5cblxuICAvLyBXZSBuZWVkIHRvIGxpc3RlbiBvbiAnY2xpY2snIGV2ZW50IGFuZCBjYXB0dXJlIGl0IGFuZCBjbG9zZSB0aGUgb3ZlcmxheSBiZWZvcmVcbiAgLy8gcHJvcGFnYXRpbmcgdGhlIGV2ZW50IHRvIHRoZSBsaXN0ZW5lciBpbiB0aGUgYnV0dG9uLiBPdGhlcndpc2UsIGlmIHRoZSBjbGlja2VkIGJ1dHRvbiB3b3VsZCBjYWxsXG4gIC8vIG9wZW4oKSwgdGhpcyB3b3VsZCBoYXBwZW46IGh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9Wjg2Vl9JQ1VDRDRcbiAgX291dHNpZGVDbGlja0xpc3RlbmVyKGV2ZW50KSB7XG4gICAgY29uc3QgZXZlbnRQYXRoID0gZXZlbnQuY29tcG9zZWRQYXRoKCk7XG4gICAgaWYgKGV2ZW50UGF0aC5pbmRleE9mKHRoaXMucG9zaXRpb25UYXJnZXQpIDwgMCAmJiBldmVudFBhdGguaW5kZXhPZih0aGlzLiQub3ZlcmxheSkgPCAwKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIF9pc1Bvc2l0aW9uRml4ZWQoZWxlbWVudCkge1xuICAgIGNvbnN0IG9mZnNldFBhcmVudCA9IHRoaXMuX2dldE9mZnNldFBhcmVudChlbGVtZW50KTtcblxuICAgIHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fFxuICAgICAgKG9mZnNldFBhcmVudCAmJiB0aGlzLl9pc1Bvc2l0aW9uRml4ZWQob2Zmc2V0UGFyZW50KSk7XG4gIH1cblxuICBfZ2V0T2Zmc2V0UGFyZW50KGVsZW1lbnQpIHtcbiAgICBpZiAoZWxlbWVudC5hc3NpZ25lZFNsb3QpIHtcbiAgICAgIHJldHVybiBlbGVtZW50LmFzc2lnbmVkU2xvdC5wYXJlbnRFbGVtZW50O1xuICAgIH0gZWxzZSBpZiAoZWxlbWVudC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICByZXR1cm4gZWxlbWVudC5vZmZzZXRQYXJlbnQ7XG4gICAgfVxuXG4gICAgY29uc3QgcGFyZW50ID0gZWxlbWVudC5wYXJlbnROb2RlO1xuXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgPT09IDExICYmIHBhcmVudC5ob3N0KSB7XG4gICAgICByZXR1cm4gcGFyZW50Lmhvc3Q7IC8vIHBhcmVudCBpcyAjc2hhZG93Um9vdFxuICAgIH1cbiAgfVxuXG4gIF92ZXJ0aWNhbE9mZnNldChvdmVybGF5UmVjdCwgdGFyZ2V0UmVjdCkge1xuICAgIHJldHVybiB0aGlzLmFsaWduZWRBYm92ZSA/IC1vdmVybGF5UmVjdC5oZWlnaHQgOiB0YXJnZXRSZWN0LmhlaWdodDtcbiAgfVxuXG4gIF9zaG91bGRBbGlnbkFib3ZlKHRhcmdldFJlY3QpIHtcbiAgICBjb25zdCBzcGFjZUJlbG93ID0gKFxuICAgICAgd2luZG93LmlubmVySGVpZ2h0IC1cbiAgICAgIHRhcmdldFJlY3QuYm90dG9tIC1cbiAgICAgIE1hdGgubWluKGRvY3VtZW50LmJvZHkuc2Nyb2xsVG9wLCAwKVxuICAgICkgLyB3aW5kb3cuaW5uZXJIZWlnaHQ7XG5cbiAgICByZXR1cm4gc3BhY2VCZWxvdyA8IDAuMzA7XG4gIH1cblxuICBfc2V0UG9zaXRpb24oZSkge1xuICAgIGlmICh0aGlzLmhpZGRlbikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZSAmJiBlLnRhcmdldCkge1xuICAgICAgY29uc3QgdGFyZ2V0ID0gZS50YXJnZXQgPT09IGRvY3VtZW50ID8gZG9jdW1lbnQuYm9keSA6IGUudGFyZ2V0O1xuICAgICAgY29uc3QgcGFyZW50ID0gdGhpcy4kLm92ZXJsYXkucGFyZW50RWxlbWVudDtcbiAgICAgIGlmICghKHRhcmdldC5jb250YWlucyh0aGlzLiQub3ZlcmxheSkgfHwgdGFyZ2V0LmNvbnRhaW5zKHRoaXMucG9zaXRpb25UYXJnZXQpKSB8fCBwYXJlbnQgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHRhcmdldFJlY3QgPSB0aGlzLnBvc2l0aW9uVGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuYWxpZ25lZEFib3ZlID0gdGhpcy5fc2hvdWxkQWxpZ25BYm92ZSh0YXJnZXRSZWN0KTtcblxuICAgIGNvbnN0IG92ZXJsYXlSZWN0ID0gdGhpcy4kLm92ZXJsYXkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5fdHJhbnNsYXRlWCA9IHRhcmdldFJlY3QubGVmdCAtIG92ZXJsYXlSZWN0LmxlZnQgKyAodGhpcy5fdHJhbnNsYXRlWCB8fCAwKTtcbiAgICB0aGlzLl90cmFuc2xhdGVZID0gdGFyZ2V0UmVjdC50b3AgLSBvdmVybGF5UmVjdC50b3AgKyAodGhpcy5fdHJhbnNsYXRlWSB8fCAwKSArXG4gICAgICB0aGlzLl92ZXJ0aWNhbE9mZnNldChvdmVybGF5UmVjdCwgdGFyZ2V0UmVjdCk7XG5cbiAgICBjb25zdCBfZGV2aWNlUGl4ZWxSYXRpbyA9IHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIHx8IDE7XG4gICAgdGhpcy5fdHJhbnNsYXRlWCA9IE1hdGgucm91bmQodGhpcy5fdHJhbnNsYXRlWCAqIF9kZXZpY2VQaXhlbFJhdGlvKSAvIF9kZXZpY2VQaXhlbFJhdGlvO1xuICAgIHRoaXMuX3RyYW5zbGF0ZVkgPSBNYXRoLnJvdW5kKHRoaXMuX3RyYW5zbGF0ZVkgKiBfZGV2aWNlUGl4ZWxSYXRpbykgLyBfZGV2aWNlUGl4ZWxSYXRpbztcbiAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlM2QoJHt0aGlzLl90cmFuc2xhdGVYfXB4LCAke3RoaXMuX3RyYW5zbGF0ZVl9cHgsIDApYDtcblxuICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLndpZHRoID0gdGhpcy5wb3NpdGlvblRhcmdldC5jbGllbnRXaWR0aCArICdweCc7XG4gICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSB0aGlzLmFsaWduZWRBYm92ZSA/ICdmbGV4LWVuZCcgOiAnZmxleC1zdGFydCc7XG5cbiAgICAvLyBUT0RPOiBmaXJlIG9ubHkgd2hlbiBwb3NpdGlvbiBhY3R1YWxseSBjaGFuZ2VzIGNoYW5nZXNcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdwb3NpdGlvbi1jaGFuZ2VkJykpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShDb21ib0JveERyb3Bkb3duRWxlbWVudC5pcywgQ29tYm9Cb3hEcm9wZG93bkVsZW1lbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbi8qKlxuICogVGhlIGRlZmF1bHQgZWxlbWVudCB1c2VkIGZvciBpdGVtcyBpbiB0aGUgdmFhZGluLWNvbWJvLWJveC5cbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgc2hhZG93IERPTSBwYXJ0cyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIFBhcnQgbmFtZSB8IERlc2NyaXB0aW9uXG4gKiAtLS18LS0tXG4gKiBgY29udGVudGAgfCBUaGUgZWxlbWVudCB0aGF0IHdyYXBzIHRoZSBpdGVtIGxhYmVsIG9yIHRlbXBsYXRlIGNvbnRlbnRcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGV4cG9zZWQgZm9yIHN0eWxpbmc6XG4gKlxuICogQXR0cmlidXRlICAgIHwgRGVzY3JpcHRpb24gfCBQYXJ0IG5hbWVcbiAqIC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS1cbiAqIGBzZWxlY3RlZGAgfCBTZXQgd2hlbiB0aGUgaXRlbSBpcyBzZWxlY3RlZCB8IDpob3N0XG4gKiBgZm9jdXNlZGAgfCBTZXQgd2hlbiB0aGUgaXRlbSBpcyBmb2N1c2VkIHwgOmhvc3RcbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1hYmxlTWl4aW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIENvbWJvQm94SXRlbUVsZW1lbnQgZXh0ZW5kcyBUaGVtYWJsZU1peGluKFBvbHltZXJFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IHBhcnQ9XCJjb250ZW50XCIgaWQ9XCJjb250ZW50XCI+PC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1jb21iby1ib3gtaXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGluZGV4IG9mIHRoZSBpdGVtXG4gICAgICAgKi9cbiAgICAgIGluZGV4OiBOdW1iZXIsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGl0ZW0gdG8gcmVuZGVyXG4gICAgICAgKiBAdHlwZSB7KFN0cmluZ3xPYmplY3QpfVxuICAgICAgICovXG4gICAgICBpdGVtOiBPYmplY3QsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHRleHQgbGFiZWwgY29ycmVzcG9uZGluZyB0byB0aGUgaXRlbVxuICAgICAgICovXG4gICAgICBsYWJlbDogU3RyaW5nLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgd2hlbiBpdGVtIGlzIHNlbGVjdGVkXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRydWUgd2hlbiBpdGVtIGlzIGZvY3VzZWRcbiAgICAgICAqL1xuICAgICAgZm9jdXNlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdGVtcGxhdGUgaW5zdGFuY2UgY29ycmVzcG9uZGluZyB0byB0aGUgaXRlbVxuICAgICAgICovXG4gICAgICBfaXRlbVRlbXBsYXRlSW5zdGFuY2U6IE9iamVjdCxcblxuICAgICAgLyoqXG4gICAgICAgKiBDdXN0b20gZnVuY3Rpb24gZm9yIHJlbmRlcmluZyB0aGUgY29udGVudCBvZiB0aGUgYDx2YWFkaW4tY29tYm8tYm94LWl0ZW0+YCBwcm9wYWdhdGVkIGZyb20gdGhlIGNvbWJvIGJveCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICByZW5kZXJlcjogRnVuY3Rpb24sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2F2ZWQgaW5zdGFuY2Ugb2YgYSBjdXN0b20gcmVuZGVyZXIgZnVuY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIF9vbGRSZW5kZXJlcjogRnVuY3Rpb25cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfcmVuZGVyZXJPckl0ZW1DaGFuZ2VkKHJlbmRlcmVyLCBpbmRleCwgaXRlbS4qKScsXG4gICAgICAnX3VwZGF0ZUxhYmVsKGxhYmVsLCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UpJyxcbiAgICAgICdfdXBkYXRlVGVtcGxhdGVJbnN0YW5jZVZhcmlhYmxlKFwiaW5kZXhcIiwgaW5kZXgsIF9pdGVtVGVtcGxhdGVJbnN0YW5jZSknLFxuICAgICAgJ191cGRhdGVUZW1wbGF0ZUluc3RhbmNlVmFyaWFibGUoXCJpdGVtXCIsIGl0ZW0sIF9pdGVtVGVtcGxhdGVJbnN0YW5jZSknLFxuICAgICAgJ191cGRhdGVUZW1wbGF0ZUluc3RhbmNlVmFyaWFibGUoXCJzZWxlY3RlZFwiLCBzZWxlY3RlZCwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKScsXG4gICAgICAnX3VwZGF0ZVRlbXBsYXRlSW5zdGFuY2VWYXJpYWJsZShcImZvY3VzZWRcIiwgZm9jdXNlZCwgX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKSdcbiAgICBdO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICBpZiAoIXRoaXMuX2l0ZW1UZW1wbGF0ZUluc3RhbmNlKSB7XG4gICAgICAvLyAyLjAgaGFzIF9fZGF0YUhvc3QuIE1pZ2h0IHdhbnQgdG8gY29uc2lkZXIgYXNzaWduaW5nIGNvbWJvYm94IHJlZmVyZW5jZSBkaXJlY3RseSB0byBpdGVtLlxuICAgICAgY29uc3Qgb3ZlcmxheSA9IHRoaXMuZ2V0Um9vdE5vZGUoKS5ob3N0LmdldFJvb3ROb2RlKCkuaG9zdDtcbiAgICAgIGNvbnN0IGRyb3Bkb3duID0gb3ZlcmxheS5fX2RhdGFIb3N0O1xuICAgICAgY29uc3QgY29tYm9Cb3hPdmVybGF5ID0gZHJvcGRvd24uZ2V0Um9vdE5vZGUoKS5ob3N0O1xuICAgICAgdGhpcy5fY29tYm9Cb3ggPSBjb21ib0JveE92ZXJsYXkuZ2V0Um9vdE5vZGUoKS5ob3N0O1xuICAgICAgdGhpcy5fY29tYm9Cb3guX2Vuc3VyZVRlbXBsYXRpemVkKCk7XG4gICAgICBpZiAodGhpcy5fY29tYm9Cb3guX1RlbXBsYXRlQ2xhc3MpIHtcbiAgICAgICAgdGhpcy5faXRlbVRlbXBsYXRlSW5zdGFuY2UgPSBuZXcgdGhpcy5fY29tYm9Cb3guX1RlbXBsYXRlQ2xhc3Moe30pO1xuICAgICAgICB0aGlzLiQuY29udGVudC50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLiQuY29udGVudC5hcHBlbmRDaGlsZCh0aGlzLl9pdGVtVGVtcGxhdGVJbnN0YW5jZS5yb290KTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfcmVuZGVyKCkge1xuICAgIGlmICghdGhpcy5yZW5kZXJlcikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IG1vZGVsID0ge1xuICAgICAgaW5kZXg6IHRoaXMuaW5kZXgsXG4gICAgICBpdGVtOiB0aGlzLml0ZW1cbiAgICB9O1xuXG4gICAgdGhpcy5yZW5kZXJlcih0aGlzLiQuY29udGVudCwgdGhpcy5fY29tYm9Cb3gsIG1vZGVsKTtcbiAgfVxuXG4gIF9yZW5kZXJlck9ySXRlbUNoYW5nZWQocmVuZGVyZXIsIGluZGV4LCBpdGVtKSB7XG4gICAgaWYgKGl0ZW0gPT09IHVuZGVmaW5lZCB8fCBpbmRleCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX29sZFJlbmRlcmVyICE9PSByZW5kZXJlcikge1xuICAgICAgdGhpcy4kLmNvbnRlbnQuaW5uZXJIVE1MID0gJyc7XG4gICAgfVxuXG4gICAgaWYgKHJlbmRlcmVyKSB7XG4gICAgICB0aGlzLl9vbGRSZW5kZXJlciA9IHJlbmRlcmVyO1xuICAgICAgdGhpcy5fcmVuZGVyKCk7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUxhYmVsKGxhYmVsLCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UpIHtcbiAgICBpZiAoX2l0ZW1UZW1wbGF0ZUluc3RhbmNlID09PSB1bmRlZmluZWQgJiYgdGhpcy4kLmNvbnRlbnQgJiYgIXRoaXMucmVuZGVyZXIpIHtcbiAgICAgIC8vIE9ubHkgc2V0IGxhYmVsIHRvIHRleHRDb250ZW50IG5vIHRlbXBsYXRlXG4gICAgICB0aGlzLiQuY29udGVudC50ZXh0Q29udGVudCA9IGxhYmVsO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVUZW1wbGF0ZUluc3RhbmNlVmFyaWFibGUodmFyaWFibGUsIHZhbHVlLCBfaXRlbVRlbXBsYXRlSW5zdGFuY2UpIHtcbiAgICBpZiAodmFyaWFibGUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IF9pdGVtVGVtcGxhdGVJbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIF9pdGVtVGVtcGxhdGVJbnN0YW5jZVt2YXJpYWJsZV0gPSB2YWx1ZTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoQ29tYm9Cb3hJdGVtRWxlbWVudC5pcywgQ29tYm9Cb3hJdGVtRWxlbWVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBUaGVtZVByb3BlcnR5TWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWUtcHJvcGVydHktbWl4aW4uanMnO1xuaW1wb3J0IHsgQ29tYm9Cb3hNaXhpbiB9IGZyb20gJy4vdmFhZGluLWNvbWJvLWJveC1taXhpbi5qcyc7XG5pbXBvcnQgeyBDb21ib0JveERhdGFQcm92aWRlck1peGluIH0gZnJvbSAnLi92YWFkaW4tY29tYm8tYm94LWRhdGEtcHJvdmlkZXItbWl4aW4uanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24td3JhcHBlci5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgZGFzaFRvQ2FtZWxDYXNlIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvY2FzZS1tYXAuanMnO1xuLyoqXG4gKiBgPHZhYWRpbi1jb21iby1ib3gtbGlnaHQ+YCBpcyBhIGN1c3RvbWl6YWJsZSB2ZXJzaW9uIG9mIHRoZSBgPHZhYWRpbi1jb21iby1ib3g+YCBwcm92aWRpbmdcbiAqIG9ubHkgdGhlIGRyb3Bkb3duIGZ1bmN0aW9uYWxpdHkgYW5kIGxlYXZpbmcgdGhlIGlucHV0IGZpZWxkIGRlZmluaXRpb24gdG8gdGhlIHVzZXIuXG4gKlxuICogVGhlIGVsZW1lbnQgaGFzIHRoZSBzYW1lIEFQSSBhcyBgPHZhYWRpbi1jb21iby1ib3g+YC5cbiAqXG4gKiBUbyBjcmVhdGUgYSBjdXN0b20gaW5wdXQgZmllbGQsIHlvdSBuZWVkIHRvIGFkZCBhIGNoaWxkIGVsZW1lbnQgd2hpY2ggaGFzIGEgdHdvLXdheVxuICogZGF0YS1iaW5kYWJsZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgdGhlIGlucHV0IHZhbHVlLiBUaGUgcHJvcGVydHkgbmFtZSBpcyBleHBlY3RlZFxuICogdG8gYmUgYHZhbHVlYCBieSBkZWZhdWx0LiBTZWUgdGhlIGV4YW1wbGUgYmVsb3cgZm9yIGEgc2ltcGxlc3QgcG9zc2libGUgZXhhbXBsZVxuICogdXNpbmcgYSBgPHZhYWRpbi10ZXh0LWZpZWxkPmAgZWxlbWVudC5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAqICAgPHZhYWRpbi10ZXh0LWZpZWxkPlxuICogICA8L3ZhYWRpbi10ZXh0LWZpZWxkPlxuICogPC92YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICogYGBgXG4gKlxuICogSWYgeW91IGFyZSB1c2luZyBvdGhlciBjdXN0b20gaW5wdXQgZmllbGRzIGxpa2UgYDxpcm9uLWlucHV0PmAsIHlvdVxuICogbmVlZCB0byBkZWZpbmUgdGhlIG5hbWUgb2YgdGhlIGJpbmRhYmxlIHByb3BlcnR5IHdpdGggdGhlIGBhdHRyRm9yVmFsdWVgIGF0dHJpYnV0ZS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLWNvbWJvLWJveC1saWdodCBhdHRyLWZvci12YWx1ZT1cImJpbmQtdmFsdWVcIj5cbiAqICAgPGlyb24taW5wdXQ+XG4gKiAgICAgPGlucHV0PlxuICogICA8L2lyb24taW5wdXQ+XG4gKiA8L3ZhYWRpbi1jb21iby1ib3gtbGlnaHQ+XG4gKiBgYGBcbiAqXG4gKiBJbiB0aGUgbmV4dCBleGFtcGxlIHlvdSBjYW4gc2VlIGhvdyB0byBjcmVhdGUgYSBjdXN0b20gaW5wdXQgZmllbGQgYmFzZWRcbiAqIG9uIGEgYDxwYXBlci1pbnB1dD5gIGRlY29yYXRlZCB3aXRoIGEgY3VzdG9tIGA8aXJvbi1pY29uPmAgYW5kXG4gKiB0d28gYDxwYXBlci1idXR0b24+YHMgdG8gYWN0IGFzIHRoZSBjbGVhciBhbmQgdG9nZ2xlIGNvbnRyb2xzLlxuICpcbiAqIGBgYGh0bWxcbiAqIDx2YWFkaW4tY29tYm8tYm94LWxpZ2h0PlxuICogICA8cGFwZXItaW5wdXQgbGFiZWw9XCJFbGVtZW50c1wiIGNsYXNzPVwiaW5wdXRcIj5cbiAqICAgICA8aXJvbi1pY29uIGljb249XCJ0b2xsXCIgc2xvdD1cInByZWZpeFwiPjwvaXJvbi1pY29uPlxuICogICAgIDxwYXBlci1idXR0b24gc2xvdD1cInN1ZmZpeFwiIGNsYXNzPVwiY2xlYXItYnV0dG9uXCI+Q2xlYXI8L3BhcGVyLWJ1dHRvbj5cbiAqICAgICA8cGFwZXItYnV0dG9uIHNsb3Q9XCJzdWZmaXhcIiBjbGFzcz1cInRvZ2dsZS1idXR0b25cIj5Ub2dnbGU8L3BhcGVyLWJ1dHRvbj5cbiAqICAgPC9wYXBlci1pbnB1dD5cbiAqIDwvdmFhZGluLWNvbWJvLWJveC1saWdodD5cbiAqIGBgYFxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5Db21ib0JveERhdGFQcm92aWRlck1peGluXG4gKiBAbWl4ZXMgVmFhZGluLkNvbWJvQm94TWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtZVByb3BlcnR5TWl4aW5cbiAqL1xuY2xhc3MgQ29tYm9Cb3hMaWdodEVsZW1lbnQgZXh0ZW5kc1xuICBUaGVtZVByb3BlcnR5TWl4aW4oXG4gICAgVGhlbWFibGVNaXhpbihcbiAgICAgIENvbWJvQm94RGF0YVByb3ZpZGVyTWl4aW4oXG4gICAgICAgIENvbWJvQm94TWl4aW4oUG9seW1lckVsZW1lbnQpKSkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdChbb3BlbmVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuXG4gICAgPHZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24td3JhcHBlciBpZD1cIm92ZXJsYXlcIiBvcGVuZWQ9XCJbW29wZW5lZF1dXCIgcG9zaXRpb24tdGFyZ2V0PVwiW1tpbnB1dEVsZW1lbnRdXVwiIHJlbmRlcmVyPVwiW1tyZW5kZXJlcl1dXCIgX2ZvY3VzZWQtaW5kZXg9XCJbW19mb2N1c2VkSW5kZXhdXVwiIF9pdGVtLWlkLXBhdGg9XCJbW2l0ZW1JZFBhdGhdXVwiIF9pdGVtLWxhYmVsLXBhdGg9XCJbW2l0ZW1MYWJlbFBhdGhdXVwiIGxvYWRpbmc9XCJbW2xvYWRpbmddXVwiIHRoZW1lPVwiW1t0aGVtZV1dXCI+XG4gICAgPC92YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLXdyYXBwZXI+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1jb21iby1ib3gtbGlnaHQnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIE5hbWUgb2YgdGhlIHR3by13YXkgZGF0YS1iaW5kYWJsZSBwcm9wZXJ0eSByZXByZXNlbnRpbmcgdGhlXG4gICAgICAgKiB2YWx1ZSBvZiB0aGUgY3VzdG9tIGlucHV0IGZpZWxkLlxuICAgICAgICovXG4gICAgICBhdHRyRm9yVmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJ3ZhbHVlJ1xuICAgICAgfSxcblxuICAgICAgaW5wdXRFbGVtZW50OiB7XG4gICAgICAgIHR5cGU6IEVsZW1lbnQsXG4gICAgICAgIHJlYWRPbmx5OiB0cnVlXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYm91bmRJbnB1dFZhbHVlQ2hhbmdlZCA9IHRoaXMuX2lucHV0VmFsdWVDaGFuZ2VkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fX2JvdW5kSW5wdXRWYWx1ZUNvbW1pdHRlZCA9IHRoaXMuX19pbnB1dFZhbHVlQ29tbWl0dGVkLmJpbmQodGhpcyk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuX3RvZ2dsZUVsZW1lbnQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy50b2dnbGUtYnV0dG9uJyk7XG4gICAgdGhpcy5fY2xlYXJFbGVtZW50ID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcuY2xlYXItYnV0dG9uJyk7XG5cbiAgICBpZiAodGhpcy5fY2xlYXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9jbGVhckVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTsgLy8gUHJldmVudCBuYXRpdmUgZm9jdXMgY2hhbmdlc1xuICAgICAgICAvLyBfZm9jdXNhYmxlRWxlbWVudCBpcyBuZWVkZWQgZm9yIHBhcGVyLWlucHV0XG4gICAgICAgICh0aGlzLmlucHV0RWxlbWVudC5fZm9jdXNhYmxlRWxlbWVudCB8fCB0aGlzLmlucHV0RWxlbWVudCkuZm9jdXMoKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGdldCBmb2N1c2VkKCkge1xuICAgIHJldHVybiB0aGlzLmdldFJvb3ROb2RlKCkuYWN0aXZlRWxlbWVudCA9PT0gdGhpcy5pbnB1dEVsZW1lbnQ7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIGNvbnN0IGNzc1NlbGVjdG9yID0gJ3ZhYWRpbi10ZXh0LWZpZWxkLGlyb24taW5wdXQscGFwZXItaW5wdXQsLnBhcGVyLWlucHV0LWlucHV0LC5pbnB1dCc7XG4gICAgdGhpcy5fc2V0SW5wdXRFbGVtZW50KHRoaXMucXVlcnlTZWxlY3Rvcihjc3NTZWxlY3RvcikpO1xuICAgIHRoaXMuX3JldmVydElucHV0VmFsdWUoKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kSW5wdXRWYWx1ZUNoYW5nZWQpO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX19ib3VuZElucHV0VmFsdWVDb21taXR0ZWQpO1xuICAgIHRoaXMuX3ByZXZlbnRJbnB1dEJsdXIoKTtcbiAgfVxuXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZElucHV0VmFsdWVDaGFuZ2VkKTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9fYm91bmRJbnB1dFZhbHVlQ29tbWl0dGVkKTtcbiAgICB0aGlzLl9yZXN0b3JlSW5wdXRCbHVyKCk7XG4gIH1cblxuICBfX2lucHV0VmFsdWVDb21taXR0ZWQoZSkge1xuICAgIC8vIERldGVjdCBpZiB0aGUgaW5wdXQgd2FzIGNsZWFyZWQgKGJ5IGNsaWNraW5nIHRoZSBjbGVhciBidXR0b24gb24gYSB2YWFkaW4tdGV4dC1maWVsZClcbiAgICAvLyBhbmQgcHJvcGFnYXRlIHRoZSB2YWx1ZSBjaGFuZ2UgdG8gY29tYm8gYm94IHZhbHVlIGltbWVkaWF0ZWx5LlxuICAgIGlmIChlLl9fZnJvbUNsZWFyQnV0dG9uKSB7XG4gICAgICB0aGlzLl9jbGVhcigpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBfcHJvcGVydHlGb3JWYWx1ZSgpIHtcbiAgICByZXR1cm4gZGFzaFRvQ2FtZWxDYXNlKHRoaXMuYXR0ckZvclZhbHVlKTtcbiAgfVxuXG4gIGdldCBfaW5wdXRFbGVtZW50VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50ICYmIHRoaXMuaW5wdXRFbGVtZW50W3RoaXMuX3Byb3BlcnR5Rm9yVmFsdWVdO1xuICB9XG5cbiAgc2V0IF9pbnB1dEVsZW1lbnRWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnRbdGhpcy5fcHJvcGVydHlGb3JWYWx1ZV0gPSB2YWx1ZTtcbiAgICB9XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKENvbWJvQm94TGlnaHRFbGVtZW50LmlzLCBDb21ib0JveExpZ2h0RWxlbWVudCk7XG5cbmV4cG9ydCB7IENvbWJvQm94TGlnaHRFbGVtZW50IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuXG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgeyBmbHVzaCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2ZsdXNoLmpzJztcbmltcG9ydCB7IHRlbXBsYXRpemUgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy90ZW1wbGF0aXplLmpzJztcbmltcG9ydCB7IElyb25BMTF5QW5ub3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmpzJztcbmltcG9ydCB7IElyb25BMTF5S2V5c0JlaGF2aW9yIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHsgRmxhdHRlbmVkTm9kZXNPYnNlcnZlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2ZsYXR0ZW5lZC1ub2Rlcy1vYnNlcnZlci5qcyc7XG5pbXBvcnQgeyBDb21ib0JveFBsYWNlaG9sZGVyIH0gZnJvbSAnLi92YWFkaW4tY29tYm8tYm94LXBsYWNlaG9sZGVyLmpzJztcblxuLyoqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBDb21ib0JveE1peGluID0gc3ViY2xhc3MgPT4gY2xhc3MgVmFhZGluQ29tYm9Cb3hNaXhpbkVsZW1lbnQgZXh0ZW5kcyBzdWJjbGFzcyB7XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFRydWUgaWYgdGhlIGRyb3Bkb3duIGlzIG9wZW4sIGZhbHNlIG90aGVyd2lzZS5cbiAgICAgICAqL1xuICAgICAgb3BlbmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBXaGVuIHByZXNlbnQsIGl0IHNwZWNpZmllcyB0aGF0IHRoZSBlbGVtZW50IGZpZWxkIGlzIHJlYWQtb25seS5cbiAgICAgICAqL1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQ3VzdG9tIGZ1bmN0aW9uIGZvciByZW5kZXJpbmcgdGhlIGNvbnRlbnQgb2YgZXZlcnkgaXRlbS5cbiAgICAgICAqIFJlY2VpdmVzIHRocmVlIGFyZ3VtZW50czpcbiAgICAgICAqXG4gICAgICAgKiAtIGByb290YCBUaGUgYDx2YWFkaW4tY29tYm8tYm94LWl0ZW0+YCBpbnRlcm5hbCBjb250YWluZXIgRE9NIGVsZW1lbnQuXG4gICAgICAgKiAtIGBjb21ib0JveGAgVGhlIHJlZmVyZW5jZSB0byB0aGUgYDx2YWFkaW4tY29tYm8tYm94PmAgZWxlbWVudC5cbiAgICAgICAqIC0gYG1vZGVsYCBUaGUgb2JqZWN0IHdpdGggdGhlIHByb3BlcnRpZXMgcmVsYXRlZCB3aXRoIHRoZSByZW5kZXJlZFxuICAgICAgICogICBpdGVtLCBjb250YWluczpcbiAgICAgICAqICAgLSBgbW9kZWwuaW5kZXhgIFRoZSBpbmRleCBvZiB0aGUgcmVuZGVyZWQgaXRlbS5cbiAgICAgICAqICAgLSBgbW9kZWwuaXRlbWAgVGhlIGl0ZW0uXG4gICAgICAgKi9cbiAgICAgIHJlbmRlcmVyOiBGdW5jdGlvbixcblxuICAgICAgLyoqXG4gICAgICAgKiBBIGZ1bGwgc2V0IG9mIGl0ZW1zIHRvIGZpbHRlciB0aGUgdmlzaWJsZSBvcHRpb25zIGZyb20uXG4gICAgICAgKiBUaGUgaXRlbXMgY2FuIGJlIG9mIGVpdGhlciBgU3RyaW5nYCBvciBgT2JqZWN0YCB0eXBlLlxuICAgICAgICovXG4gICAgICBpdGVtczoge1xuICAgICAgICB0eXBlOiBBcnJheSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaXRlbXNDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiBgdHJ1ZWAsIHRoZSB1c2VyIGNhbiBpbnB1dCBhIHZhbHVlIHRoYXQgaXMgbm90IHByZXNlbnQgaW4gdGhlIGl0ZW1zIGxpc3QuXG4gICAgICAgKiBgdmFsdWVgIHByb3BlcnR5IHdpbGwgYmUgc2V0IHRvIHRoZSBpbnB1dCB2YWx1ZSBpbiB0aGlzIGNhc2UuXG4gICAgICAgKiBBbHNvLCB3aGVuIGB2YWx1ZWAgaXMgc2V0IHByb2dyYW1tYXRpY2FsbHksIHRoZSBpbnB1dCB2YWx1ZSB3aWxsIGJlIHNldFxuICAgICAgICogdG8gcmVmbGVjdCB0aGF0IHZhbHVlLlxuICAgICAgICovXG4gICAgICBhbGxvd0N1c3RvbVZhbHVlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHN1YnNldCBvZiBpdGVtcywgZmlsdGVyZWQgYmFzZWQgb24gdGhlIHVzZXIgaW5wdXQuIEZpbHRlcmVkIGl0ZW1zXG4gICAgICAgKiBjYW4gYmUgYXNzaWduZWQgZGlyZWN0bHkgdG8gb21pdCB0aGUgaW50ZXJuYWwgZmlsdGVyaW5nIGZ1bmN0aW9uYWxpdHkuXG4gICAgICAgKiBUaGUgaXRlbXMgY2FuIGJlIG9mIGVpdGhlciBgU3RyaW5nYCBvciBgT2JqZWN0YCB0eXBlLlxuICAgICAgICovXG4gICAgICBmaWx0ZXJlZEl0ZW1zOiB7XG4gICAgICAgIHR5cGU6IEFycmF5XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBgU3RyaW5nYCB2YWx1ZSBmb3IgdGhlIHNlbGVjdGVkIGl0ZW0gb2YgdGhlIGNvbWJvIGJveC4gUHJvdmlkZXNcbiAgICAgICAqIHRoZSB2YWx1ZSBmb3IgYGlyb24tZm9ybWAuXG4gICAgICAgKlxuICAgICAgICogV2hlbiB0aGVyZeKAmXMgbm8gaXRlbSBzZWxlY3RlZCwgdGhlIHZhbHVlIGlzIGFuIGVtcHR5IHN0cmluZy5cbiAgICAgICAqXG4gICAgICAgKiBVc2UgYHNlbGVjdGVkSXRlbWAgcHJvcGVydHkgdG8gZ2V0IHRoZSByYXcgc2VsZWN0ZWQgaXRlbSBmcm9tXG4gICAgICAgKiB0aGUgYGl0ZW1zYCBhcnJheS5cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ192YWx1ZUNoYW5nZWQnLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBVc2VkIHRvIGRldGVjdCB1c2VyIHZhbHVlIGNoYW5nZXMgYW5kIGZpcmUgYGNoYW5nZWAgZXZlbnRzLlxuICAgICAgICovXG4gICAgICBfbGFzdENvbW1pdHRlZFZhbHVlOiBTdHJpbmcsXG5cbiAgICAgIC8qXG4gICAgICAgKiBXaGVuIHNldCB0byBgdHJ1ZWAsIFwibG9hZGluZ1wiIGF0dHJpYnV0ZSBpcyBhZGRlZCB0byBob3N0IGFuZCB0aGUgb3ZlcmxheSBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBsb2FkaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICBfZm9jdXNlZEluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IC0xXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZpbHRlcmluZyBzdHJpbmcgdGhlIHVzZXIgaGFzIHR5cGVkIGludG8gdGhlIGlucHV0IGZpZWxkLlxuICAgICAgICovXG4gICAgICBmaWx0ZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgc2VsZWN0ZWQgaXRlbSBmcm9tIHRoZSBgaXRlbXNgIGFycmF5LlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZEl0ZW06IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGF0aCBmb3IgbGFiZWwgb2YgdGhlIGl0ZW0uIElmIGBpdGVtc2AgaXMgYW4gYXJyYXkgb2Ygb2JqZWN0cywgdGhlXG4gICAgICAgKiBgaXRlbUxhYmVsUGF0aGAgaXMgdXNlZCB0byBmZXRjaCB0aGUgZGlzcGxheWVkIHN0cmluZyBsYWJlbCBmb3IgZWFjaFxuICAgICAgICogaXRlbS5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgaXRlbSBsYWJlbCBpcyBhbHNvIHVzZWQgZm9yIG1hdGNoaW5nIGl0ZW1zIHdoZW4gcHJvY2Vzc2luZyB1c2VyXG4gICAgICAgKiBpbnB1dCwgaS5lLiwgZm9yIGZpbHRlcmluZyBhbmQgc2VsZWN0aW5nIGl0ZW1zLlxuICAgICAgICpcbiAgICAgICAqIFdoZW4gdXNpbmcgaXRlbSB0ZW1wbGF0ZXMsIHRoZSBwcm9wZXJ0eSBpcyBzdGlsbCBuZWVkZWQgYmVjYXVzZSBpdCBpcyB1c2VkXG4gICAgICAgKiBmb3IgZmlsdGVyaW5nLCBhbmQgZm9yIGRpc3BsYXlpbmcgdGhlIHNlbGVjdGVkIGl0ZW0gdmFsdWUgaW4gdGhlIGlucHV0IGJveC5cbiAgICAgICAqL1xuICAgICAgaXRlbUxhYmVsUGF0aDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnbGFiZWwnLFxuICAgICAgICBvYnNlcnZlcjogJ19pdGVtTGFiZWxQYXRoQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGF0aCBmb3IgdGhlIHZhbHVlIG9mIHRoZSBpdGVtLiBJZiBgaXRlbXNgIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsIHRoZVxuICAgICAgICogYGl0ZW1WYWx1ZVBhdGg6YCBpcyB1c2VkIHRvIGZldGNoIHRoZSBzdHJpbmcgdmFsdWUgZm9yIHRoZSBzZWxlY3RlZFxuICAgICAgICogaXRlbS5cbiAgICAgICAqXG4gICAgICAgKiBUaGUgaXRlbSB2YWx1ZSBpcyB1c2VkIGluIHRoZSBgdmFsdWVgIHByb3BlcnR5IG9mIHRoZSBjb21ibyBib3gsXG4gICAgICAgKiB0byBwcm92aWRlIHRoZSBmb3JtIHZhbHVlLlxuICAgICAgICovXG4gICAgICBpdGVtVmFsdWVQYXRoOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICd2YWx1ZSdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogUGF0aCBmb3IgdGhlIGlkIG9mIHRoZSBpdGVtLiBJZiBgaXRlbXNgIGlzIGFuIGFycmF5IG9mIG9iamVjdHMsXG4gICAgICAgKiB0aGUgYGl0ZW1JZFBhdGhgIGlzIHVzZWQgdG8gY29tcGFyZSBhbmQgaWRlbnRpZnkgdGhlIHNhbWUgaXRlbVxuICAgICAgICogaW4gYHNlbGVjdGVkSXRlbWAgYW5kIGBmaWx0ZXJlZEl0ZW1zYCAoaXRlbXMgZ2l2ZW4gYnkgdGhlXG4gICAgICAgKiBgZGF0YVByb3ZpZGVyYCBjYWxsYmFjaykuXG4gICAgICAgKi9cbiAgICAgIGl0ZW1JZFBhdGg6IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIG5hbWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIGlmIHRoZSB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIF90b2dnbGVFbGVtZW50OiBPYmplY3QsXG4gICAgICBfY2xlYXJFbGVtZW50OiBPYmplY3QsXG5cbiAgICAgIF9pbnB1dEVsZW1lbnRWYWx1ZTogU3RyaW5nLFxuXG4gICAgICBfY2xvc2VPbkJsdXJJc1ByZXZlbnRlZDogQm9vbGVhbixcblxuICAgICAgX3ByZXZpb3VzRG9jdW1lbnRQb2ludGVyRXZlbnRzOiBTdHJpbmcsXG5cbiAgICAgIF9pdGVtVGVtcGxhdGU6IE9iamVjdFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ19maWx0ZXJDaGFuZ2VkKGZpbHRlciwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCknLFxuICAgICAgJ19pdGVtc09yUGF0aHNDaGFuZ2VkKGl0ZW1zLiosIGl0ZW1WYWx1ZVBhdGgsIGl0ZW1MYWJlbFBhdGgpJyxcbiAgICAgICdfZmlsdGVyZWRJdGVtc0NoYW5nZWQoZmlsdGVyZWRJdGVtcy4qLCBpdGVtVmFsdWVQYXRoLCBpdGVtTGFiZWxQYXRoKScsXG4gICAgICAnX3RlbXBsYXRlT3JSZW5kZXJlckNoYW5nZWQoX2l0ZW1UZW1wbGF0ZSwgcmVuZGVyZXIpJyxcbiAgICAgICdfbG9hZGluZ0NoYW5nZWQobG9hZGluZyknLFxuICAgICAgJ19zZWxlY3RlZEl0ZW1DaGFuZ2VkKHNlbGVjdGVkSXRlbSwgaXRlbUxhYmVsUGF0aCknLFxuICAgICAgJ190b2dnbGVFbGVtZW50Q2hhbmdlZChfdG9nZ2xlRWxlbWVudCknXG4gICAgXTtcbiAgfVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgdGhpcy5fYm91bmRPbkZvY3Vzb3V0ID0gdGhpcy5fb25Gb2N1c291dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT3ZlcmxheVNlbGVjdGVkSXRlbUNoYW5nZWQgPSB0aGlzLl9vdmVybGF5U2VsZWN0ZWRJdGVtQ2hhbmdlZC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kQ2xvc2UgPSB0aGlzLmNsb3NlLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPbk9wZW5lZCA9IHRoaXMuX29uT3BlbmVkLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPbktleURvd24gPSB0aGlzLl9vbktleURvd24uYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uQ2xpY2sgPSB0aGlzLl9vbkNsaWNrLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPbk92ZXJsYXlUb3VjaEFjdGlvbiA9IHRoaXMuX29uT3ZlcmxheVRvdWNoQWN0aW9uLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPblRvdWNoZW5kID0gdGhpcy5fb25Ub3VjaGVuZC5iaW5kKHRoaXMpO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLl9ib3VuZE9uRm9jdXNvdXQpO1xuXG4gICAgdGhpcy5fbGFzdENvbW1pdHRlZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICBJcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG5cbiAgICAvLyAyLjAgZG9lcyBub3Qgc3VwcG9ydCAnb3ZlcmxheS5zZWxlY3Rpb24tY2hhbmdlZCcgc3ludGF4IGluIGxpc3RlbmVyc1xuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3NlbGVjdGlvbi1jaGFuZ2VkJywgdGhpcy5fYm91bmRPdmVybGF5U2VsZWN0ZWRJdGVtQ2hhbmdlZCk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tY2xvc2VkJywgdGhpcy5fYm91bmRDbG9zZSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd2YWFkaW4tY29tYm8tYm94LWRyb3Bkb3duLW9wZW5lZCcsIHRoaXMuX2JvdW5kT25PcGVuZWQpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kT25LZXlEb3duKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fYm91bmRPbkNsaWNrKTtcblxuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LXRvdWNoLWFjdGlvbicsIHRoaXMuX2JvdW5kT25PdmVybGF5VG91Y2hBY3Rpb24pO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuX2JvdW5kT25Ub3VjaGVuZCk7XG5cbiAgICB0aGlzLl9vYnNlcnZlciA9IG5ldyBGbGF0dGVuZWROb2Rlc09ic2VydmVyKHRoaXMsIGluZm8gPT4ge1xuICAgICAgdGhpcy5fc2V0VGVtcGxhdGVGcm9tTm9kZXMoaW5mby5hZGRlZE5vZGVzKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIE1hbnVhbGx5IGludm9rZSBleGlzdGluZyByZW5kZXJlci5cbiAgICovXG4gIHJlbmRlcigpIHtcbiAgICBpZiAodGhpcy4kLm92ZXJsYXkuX3NlbGVjdG9yKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgndmFhZGluLWNvbWJvLWJveC1pdGVtJykuZm9yRWFjaChpdGVtID0+IGl0ZW0uX3JlbmRlcigpKTtcbiAgICB9XG4gIH1cblxuICBfc2V0VGVtcGxhdGVGcm9tTm9kZXMobm9kZXMpIHtcbiAgICB0aGlzLl9pdGVtVGVtcGxhdGUgPSBub2Rlcy5maWx0ZXIobm9kZSA9PiBub2RlLmxvY2FsTmFtZSAmJiBub2RlLmxvY2FsTmFtZSA9PT0gJ3RlbXBsYXRlJylbMF0gfHwgdGhpcy5faXRlbVRlbXBsYXRlO1xuICB9XG5cbiAgX3JlbW92ZU5ld1JlbmRlcmVyT3JUZW1wbGF0ZSh0ZW1wbGF0ZSwgb2xkVGVtcGxhdGUsIHJlbmRlcmVyLCBvbGRSZW5kZXJlcikge1xuICAgIGlmICh0ZW1wbGF0ZSAhPT0gb2xkVGVtcGxhdGUpIHtcbiAgICAgIHRoaXMuX2l0ZW1UZW1wbGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB9IGVsc2UgaWYgKHJlbmRlcmVyICE9PSBvbGRSZW5kZXJlcikge1xuICAgICAgdGhpcy5yZW5kZXJlciA9IHVuZGVmaW5lZDtcbiAgICB9XG4gIH1cblxuICBfdGVtcGxhdGVPclJlbmRlcmVyQ2hhbmdlZCh0ZW1wbGF0ZSwgcmVuZGVyZXIpIHtcbiAgICBpZiAodGVtcGxhdGUgJiYgcmVuZGVyZXIpIHtcbiAgICAgIHRoaXMuX3JlbW92ZU5ld1JlbmRlcmVyT3JUZW1wbGF0ZSh0ZW1wbGF0ZSwgdGhpcy5fb2xkVGVtcGxhdGUsIHJlbmRlcmVyLCB0aGlzLl9vbGRSZW5kZXJlcik7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1lvdSBzaG91bGQgb25seSB1c2UgZWl0aGVyIGEgcmVuZGVyZXIgb3IgYSB0ZW1wbGF0ZSBmb3IgY29tYm8gYm94IGl0ZW1zJyk7XG4gICAgfVxuXG4gICAgdGhpcy5fb2xkVGVtcGxhdGUgPSB0ZW1wbGF0ZTtcbiAgICB0aGlzLl9vbGRSZW5kZXJlciA9IHJlbmRlcmVyO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBkcm9wZG93biBsaXN0LlxuICAgKi9cbiAgb3BlbigpIHtcbiAgICAvLyBQcmV2ZW50IF9vcGVuKCkgYmVpbmcgY2FsbGVkIHdoZW4gaW5wdXQgaXMgZGlzYWJsZWQgb3IgcmVhZC1vbmx5XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsb3NlcyB0aGUgZHJvcGRvd24gbGlzdC5cbiAgICovXG4gIGNsb3NlKCkge1xuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZCh2YWx1ZSwgb2xkKSB7XG4gICAgLy8gUHJldmVudCBfY2xvc2UoKSBiZWluZyBjYWxsZWQgd2hlbiBvcGVuZWQgaXMgc2V0IHRvIGl0cyBkZWZhdWx0IHZhbHVlIChmYWxzZSkuXG4gICAgaWYgKG9sZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLl9vcGVuZWRXaXRoRm9jdXNSaW5nID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKSB8fCAodGhpcy5mb2N1c0VsZW1lbnQgJiYgdGhpcy5mb2N1c0VsZW1lbnQuaGFzQXR0cmlidXRlKCdmb2N1cy1yaW5nJykpO1xuICAgICAgLy8gRm9yIHRvdWNoIGRldmljZXMsIHdlIGRvbid0IHdhbnQgdG8gcG9wdXAgdmlydHVhbCBrZXlib2FyZCB1bmxlc3MgaW5wdXQgaXMgZXhwbGljaXRseSBmb2N1c2VkIGJ5IHRoZSB1c2VyLlxuICAgICAgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXNlZCcpICYmICF0aGlzLiQub3ZlcmxheS50b3VjaERldmljZSkge1xuICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX29uQ2xvc2VkKCk7XG4gICAgICBpZiAodGhpcy5fb3BlbmVkV2l0aEZvY3VzUmluZyAmJiB0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXNlZCcpKSB7XG4gICAgICAgIHRoaXMuZm9jdXNFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9jdXMtcmluZycsICcnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfb25PdmVybGF5VG91Y2hBY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBPbiB0b3VjaCBkZXZpY2VzLCBibHVyIHRoZSBpbnB1dCBvbiB0b3VjaCBzdGFydCBpbnNpZGUgdGhlIG92ZXJsYXksIGluIG9yZGVyIHRvIGhpZGVcbiAgICAvLyB0aGUgdmlydHVhbCBrZXlib2FyZC4gQnV0IGRvbid0IGNsb3NlIHRoZSBvdmVybGF5IG9uIHRoaXMgYmx1ci5cbiAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gdHJ1ZTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5ibHVyKCk7XG4gICAgdGhpcy5fY2xvc2VPbkJsdXJJc1ByZXZlbnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgX29uQ2xpY2soZSkge1xuICAgIHRoaXMuX2Nsb3NlT25CbHVySXNQcmV2ZW50ZWQgPSB0cnVlO1xuXG4gICAgY29uc3QgcGF0aCA9IGUuY29tcG9zZWRQYXRoKCk7XG4gICAgY29uc3QgaXNDbGVhckVsZW1lbnQgPSAocGF0aC5pbmRleE9mKHRoaXMuX2NsZWFyRWxlbWVudCkgIT09IC0xKSB8fCAocGF0aFswXS5nZXRBdHRyaWJ1dGUoJ3BhcnQnKSA9PT0gJ2NsZWFyLWJ1dHRvbicpO1xuICAgIGlmIChpc0NsZWFyRWxlbWVudCkge1xuICAgICAgdGhpcy5fY2xlYXIoKTtcbiAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICB9IGVsc2UgaWYgKHBhdGguaW5kZXhPZih0aGlzLmlucHV0RWxlbWVudCkgIT09IC0xKSB7XG4gICAgICBpZiAocGF0aC5pbmRleE9mKHRoaXMuX3RvZ2dsZUVsZW1lbnQpID4gLTEgJiYgdGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fY2xvc2VPbkJsdXJJc1ByZXZlbnRlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEtleWJvYXJkIG5hdmlnYXRpb25cbiAgICovXG5cbiAgX29uS2V5RG93bihlKSB7XG4gICAgaWYgKHRoaXMuX2lzRXZlbnRLZXkoZSwgJ2Rvd24nKSkge1xuICAgICAgdGhpcy5fY2xvc2VPbkJsdXJJc1ByZXZlbnRlZCA9IHRydWU7XG4gICAgICB0aGlzLl9vbkFycm93RG93bigpO1xuICAgICAgdGhpcy5fY2xvc2VPbkJsdXJJc1ByZXZlbnRlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBwcmV2ZW50IGNhcmV0IGZyb20gbW92aW5nXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0V2ZW50S2V5KGUsICd1cCcpKSB7XG4gICAgICB0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX29uQXJyb3dVcCgpO1xuICAgICAgdGhpcy5fY2xvc2VPbkJsdXJJc1ByZXZlbnRlZCA9IGZhbHNlO1xuXG4gICAgICAvLyBwcmV2ZW50IGNhcmV0IGZyb20gbW92aW5nXG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9pc0V2ZW50S2V5KGUsICdlbnRlcicpKSB7XG4gICAgICB0aGlzLl9vbkVudGVyKGUpO1xuICAgIH0gZWxzZSBpZiAodGhpcy5faXNFdmVudEtleShlLCAnZXNjJykpIHtcbiAgICAgIHRoaXMuX29uRXNjYXBlKGUpO1xuICAgIH1cbiAgfVxuXG4gIF9pc0V2ZW50S2V5KGUsIGspIHtcbiAgICByZXR1cm4gSXJvbkExMXlLZXlzQmVoYXZpb3Iua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGUsIGspO1xuICB9XG5cbiAgX2dldEl0ZW1MYWJlbChpdGVtKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5vdmVybGF5LmdldEl0ZW1MYWJlbChpdGVtKTtcbiAgfVxuXG4gIF9nZXRJdGVtVmFsdWUoaXRlbSkge1xuICAgIGxldCB2YWx1ZSA9IGl0ZW0gJiYgdGhpcy5pdGVtVmFsdWVQYXRoID8gdGhpcy5nZXQodGhpcy5pdGVtVmFsdWVQYXRoLCBpdGVtKSA6IHVuZGVmaW5lZDtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFsdWUgPSBpdGVtID8gaXRlbS50b1N0cmluZygpIDogJyc7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIF9vbkFycm93RG93bigpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIGlmICh0aGlzLiQub3ZlcmxheS5faXRlbXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gTWF0aC5taW4odGhpcy4kLm92ZXJsYXkuX2l0ZW1zLmxlbmd0aCAtIDEsIHRoaXMuX2ZvY3VzZWRJbmRleCArIDEpO1xuICAgICAgICB0aGlzLl9wcmVmaWxsRm9jdXNlZEl0ZW1MYWJlbCgpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gIH1cblxuICBfb25BcnJvd1VwKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgaWYgKHRoaXMuX2ZvY3VzZWRJbmRleCA+IC0xKSB7XG4gICAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IE1hdGgubWF4KDAsIHRoaXMuX2ZvY3VzZWRJbmRleCAtIDEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuJC5vdmVybGF5Ll9pdGVtcykge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IHRoaXMuJC5vdmVybGF5Ll9pdGVtcy5sZW5ndGggLSAxO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3ByZWZpbGxGb2N1c2VkSXRlbUxhYmVsKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgfVxuXG4gIF9wcmVmaWxsRm9jdXNlZEl0ZW1MYWJlbCgpIHtcbiAgICBpZiAodGhpcy5fZm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgIC8vIFJlc2V0IHRoZSBpbnB1dCB2YWx1ZSBhc3luY3Jvbm91c2x5IHRvIHByZXZlbnQgcGFydGlhbCB2YWx1ZSBjaGFuZ2VzXG4gICAgICAvLyBhbm5vdW5jZS4gTWFrZXMgT1NYIFZvaWNlT3ZlciB0byBhbm5vdW5jZSB0aGUgY29tcGxldGUgdmFsdWUgaW5zdGVhZC5cbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gJyc7XG4gICAgICAvLyAxbXMgZGVsYXkgbmVlZGVkIGZvciBPU1ggVm9pY2VPdmVyIHRvIHJlYWxpc2UgaW5wdXQgdmFsdWUgd2FzIHJlc2V0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLl9nZXRJdGVtTGFiZWwodGhpcy4kLm92ZXJsYXkuX2ZvY3VzZWRJdGVtKTtcbiAgICAgICAgdGhpcy5fbWFya0FsbFNlbGVjdGlvblJhbmdlKCk7XG4gICAgICB9LCAxKTtcbiAgICB9XG4gIH1cblxuICBfc2V0U2VsZWN0aW9uUmFuZ2Uoc3RhcnQsIGVuZCkge1xuICAgIC8vIHZhYWRpbi10ZXh0LWZpZWxkIGRvZXMgbm90IGltcGxlbWVudCBzZXRTZWxlY3Rpb25SYW5nZSwgaGVuY2Ugd2UgbmVlZCB0aGUgbmF0aXZlIGlucHV0XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLl9uYXRpdmVJbnB1dCB8fCB0aGlzLmlucHV0RWxlbWVudDtcblxuICAgIC8vIFNldHRpbmcgc2VsZWN0aW9uIHJhbmdlIGZvY3VzZXMgYW5kL29yIG1vdmVzIHRoZSBjYXJldCBpbiBzb21lIGJyb3dzZXJzLFxuICAgIC8vIGFuZCB0aGVyZSdzIG5vIG5lZWQgdG8gbW9kaWZ5IHRoZSBzZWxlY3Rpb24gcmFuZ2UgaWYgdGhlIGlucHV0IGlzbid0IGZvY3VzZWQgYW55d2F5LlxuICAgIC8vIFRoaXMgYWZmZWN0cyBTYWZhcmkuIFdoZW4gdGhlIG92ZXJsYXkgaXMgb3BlbiwgYW5kIHRoZW4gaGl0aW5nIHRhYiwgYnJvd3NlciBzaG91bGQgZm9jdXNcbiAgICAvLyB0aGUgbmV4dCBmb2N1c2FibGUgZWxlbWVudCBpbnN0ZWFkIG9mIHRoZSBjb21iby1ib3ggaXRzZWxmLlxuICAgIC8vIENoZWNraW5nIHRoZSBmb2N1c2VkIHByb3BlcnR5IGhlcmUgaXMgZW5vdWdoIGluc3RlYWQgb2YgY2hlY2tpbmcgdGhlIGFjdGl2ZUVsZW1lbnQuXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdmb2N1c2VkJykgJiYgaW5wdXQgJiYgaW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlucHV0LnNldFNlbGVjdGlvblJhbmdlKHN0YXJ0LCBlbmQpO1xuICAgICAgfSBjYXRjaCAoaWdub3JlKSB7XG4gICAgICAgIC8vIElFMTEgcmFuZG9tbHkgZmFpbHMgd2hlbiBydW5uaW5nIHRlc3RzIGluIFNhdWNlLlxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tYXJrQWxsU2VsZWN0aW9uUmFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlLmxlbmd0aCk7XG4gICAgfVxuICB9XG5cbiAgX2NsZWFyU2VsZWN0aW9uUmFuZ2UoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnN0IHBvcyA9IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID8gdGhpcy5faW5wdXRFbGVtZW50VmFsdWUubGVuZ3RoIDogMDtcbiAgICAgIHRoaXMuX3NldFNlbGVjdGlvblJhbmdlKHBvcywgcG9zKTtcbiAgICB9XG4gIH1cblxuICBfb25FbnRlcihlKSB7XG4gICAgLy8gc2hvdWxkIGNsb3NlIG9uIGVudGVyIHdoZW4gY3VzdG9tIHZhbHVlcyBhcmUgYWxsb3dlZCwgaW5wdXQgZmllbGQgaXMgY2xlYXJlZCwgb3Igd2hlbiBhbiBleGlzdGluZ1xuICAgIC8vIGl0ZW0gaXMgZm9jdXNlZCB3aXRoIGtleWJvYXJkLlxuICAgIGlmICh0aGlzLm9wZW5lZCAmJiAodGhpcy5hbGxvd0N1c3RvbVZhbHVlIHx8IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID09PSAnJyB8fCB0aGlzLl9mb2N1c2VkSW5kZXggPiAtMSkpIHtcbiAgICAgIHRoaXMuY2xvc2UoKTtcblxuICAgICAgLy8gRG8gbm90IHN1Ym1pdCB0aGUgc3Vycm91bmRpbmcgZm9ybS5cbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgLy8gRG8gbm90IHRyaWdnZXIgZ2xvYmFsIGxpc3RlbmVyc1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfb25Fc2NhcGUoZSkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fc3RvcFByb3BhZ2F0aW9uKGUpO1xuXG4gICAgICBpZiAodGhpcy5fZm9jdXNlZEluZGV4ID4gLTEpIHtcbiAgICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gLTE7XG4gICAgICAgIHRoaXMuX3JldmVydElucHV0VmFsdWUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX3RvZ2dsZUVsZW1lbnRDaGFuZ2VkKHRvZ2dsZUVsZW1lbnQpIHtcbiAgICBpZiAodG9nZ2xlRWxlbWVudCkge1xuICAgICAgLy8gRG9uJ3QgYmx1ciB0aGUgaW5wdXQgb24gdG9nZ2xlIG1vdXNlZG93blxuICAgICAgdG9nZ2xlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBlID0+IGUucHJldmVudERlZmF1bHQoKSk7XG4gICAgICAvLyBVbmZvY3VzIHByZXZpb3VzbHkgZm9jdXNlZCBlbGVtZW50IGlmIGZvY3VzIGlzIG5vdCBpbnNpZGUgY29tYm8gYm94IChvbiB0b3VjaCBkZXZpY2VzKVxuICAgICAgdG9nZ2xlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICBpZiAodGhpcy4kLm92ZXJsYXkudG91Y2hEZXZpY2UgJiYgIXRoaXMuaGFzQXR0cmlidXRlKCdmb2N1c2VkJykpIHtcbiAgICAgICAgICBkb2N1bWVudC5hY3RpdmVFbGVtZW50LmJsdXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIENsZWFycyB0aGUgY3VycmVudCB2YWx1ZS5cbiAgICovXG4gIF9jbGVhcigpIHtcbiAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5hbGxvd0N1c3RvbVZhbHVlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXZlcnRzIGJhY2sgdG8gb3JpZ2luYWwgdmFsdWUuXG4gICAqL1xuICBjYW5jZWwoKSB7XG4gICAgdGhpcy5fcmV2ZXJ0SW5wdXRWYWx1ZVRvVmFsdWUoKTtcbiAgICAvLyBJbiB0aGUgbmV4dCBfZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKSBjYWxsLCB0aGUgY2hhbmdlIGRldGVjdGlvbiBzaG91bGQgbm90IHBhc3NcbiAgICB0aGlzLl9sYXN0Q29tbWl0dGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIF9vbk9wZW5lZCgpIHtcbiAgICAvLyBQcmUgUDIgaXJvbi1saXN0IHVzZWQgYSBkZWJvdW5jZXIgdG8gcmVuZGVyLiBOb3cgdGhhdCB3ZSBzeW5jaHJvbm91c2x5IHJlbmRlciBpdGVtcyxcbiAgICAvLyB3ZSBuZWVkIHRvIGZsdXNoIHRoZSBET00gdG8gbWFrZSBzdXJlIGl0IGRvZXNuJ3QgZ2V0IGZsdXNoZWQgaW4gdGhlIG1pZGRsZSBvZiBfcmVuZGVyIGNhbGxcbiAgICAvLyBiZWNhdXNlIHRoYXQgd2lsbCBjYXVzZSBwcm9ibGVtcyB0byBzYXkgdGhlIGxlYXN0LlxuICAgIGZsdXNoKCk7XG5cbiAgICAvLyBXaXRoIGlyb24tbGlzdCB2MS4zLjksIGNhbGxpbmcgYG5vdGlmeVJlc2l6ZSgpYCBubyBsb25nZXIgcmVuZGVyc1xuICAgIC8vIHRoZSBpdGVtcyBzeW5jaHJvbm91c2x5LiBJdCBpcyByZXF1aXJlZCB0byBoYXZlIHRoZSBpdGVtcyByZW5kZXJlZFxuICAgIC8vIGJlZm9yZSB3ZSB1cGRhdGUgdGhlIG92ZXJsYXkgYW5kIHRoZSBsaXN0IHBvc2l0aW9ucyBhbmQgc2l6ZXMuXG4gICAgdGhpcy4kLm92ZXJsYXkuZW5zdXJlSXRlbXNSZW5kZXJlZCgpO1xuICAgIHRoaXMuJC5vdmVybGF5Ll9zZWxlY3Rvci50b2dnbGVTY3JvbGxMaXN0ZW5lcih0cnVlKTtcblxuICAgIC8vIEVuc3VyZSBtZXRyaWNzIGFyZSB1cC10by1kYXRlXG4gICAgdGhpcy4kLm92ZXJsYXkudXBkYXRlVmlld3BvcnRCb3VuZGFyaWVzKCk7XG4gICAgLy8gRm9yY2UgaXJvbi1saXN0IHRvIGNyZWF0ZSByZXVzYWJsZSBub2Rlcy4gT3RoZXJ3aXNlIGl0IHdpbGwgb25seSBzdGFydFxuICAgIC8vIGRvaW5nIHRoYXQgaW4gc2Nyb2xsIGxpc3RlbmVyLCB3aGljaCBpcyBlc3BlY2lhbGx5IHNsb3cgaW4gRWRnZS5cbiAgICB0aGlzLiQub3ZlcmxheS5fc2VsZWN0b3IuX2luY3JlYXNlUG9vbElmTmVlZGVkKCk7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9yZXNpemVEcm9wZG93bigpLCAxKTtcbiAgICAvLyBEZWZlciBzY3JvbGwgcG9zaXRpb24gYWRqdXN0bWVudCB0byBwcmV2ZW50IGZyZWV6ZSBpbiBFZGdlXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB0aGlzLiQub3ZlcmxheS5hZGp1c3RTY3JvbGxQb3NpdGlvbigpKTtcblxuXG4gICAgLy8gX2RldGVjdEFuZERpc3BhdGNoQ2hhbmdlKCkgc2hvdWxkIG5vdCBjb25zaWRlciB2YWx1ZSBjaGFuZ2VzIGRvbmUgYmVmb3JlIG9wZW5pbmdcbiAgICB0aGlzLl9sYXN0Q29tbWl0dGVkVmFsdWUgPSB0aGlzLnZhbHVlO1xuICB9XG5cbiAgX29uQ2xvc2VkKCkge1xuXG4gICAgLy8gSGFwcGVucyB3aGVuIHRoZSBvdmVybGF5IGlzIGNsb3NlZCBieSBjbGlja2luZyBvdXRzaWRlXG4gICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuJC5vdmVybGF5Ll9pdGVtcyAmJiB0aGlzLl9mb2N1c2VkSW5kZXggPiAtMSkge1xuICAgICAgY29uc3QgZm9jdXNlZEl0ZW0gPSB0aGlzLiQub3ZlcmxheS5faXRlbXNbdGhpcy5fZm9jdXNlZEluZGV4XTtcbiAgICAgIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gZm9jdXNlZEl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBmb2N1c2VkSXRlbTtcbiAgICAgIH1cbiAgICAgIC8vIG1ha2Ugc3VyZSBpbnB1dCBmaWVsZCBpcyB1cGRhdGVkIGluIGNhc2UgdmFsdWUgZG9lc24ndCBjaGFuZ2UgKGkuZS4gRk9PIC0+IGZvbylcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5fZ2V0SXRlbUxhYmVsKHRoaXMuc2VsZWN0ZWRJdGVtKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID09PSAnJyB8fCB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG5cbiAgICAgIGlmICh0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5hbGxvd0N1c3RvbVZhbHVlXG4gICAgICAgIC8vIHRvIHByZXZlbnQgYSByZXBldGl0aXZlIGlucHV0IHZhbHVlIGJlaW5nIHNhdmVkIGFmdGVyIHByZXNzaW5nIEVTQyBhbmQgVGFiLlxuICAgICAgICAmJiAhKHRoaXMuZmlsdGVyZWRJdGVtcyAmJiB0aGlzLmZpbHRlcmVkSXRlbXMuZmlsdGVyKGl0ZW0gPT4gdGhpcy5fZ2V0SXRlbUxhYmVsKGl0ZW0pID09PSB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSkubGVuZ3RoKSkge1xuXG4gICAgICAgIGNvbnN0IGUgPSBuZXcgQ3VzdG9tRXZlbnQoJ2N1c3RvbS12YWx1ZS1zZXQnLCB7ZGV0YWlsOiB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSwgY29tcG9zZWQ6IHRydWUsIGNhbmNlbGFibGU6IHRydWUsIGJ1YmJsZXM6IHRydWV9KTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KGUpO1xuICAgICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgICAgIGNvbnN0IGN1c3RvbVZhbHVlID0gdGhpcy5faW5wdXRFbGVtZW50VmFsdWU7XG4gICAgICAgICAgdGhpcy5fc2VsZWN0SXRlbUZvclZhbHVlKGN1c3RvbVZhbHVlKTtcbiAgICAgICAgICB0aGlzLnZhbHVlID0gY3VzdG9tVmFsdWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy5zZWxlY3RlZEl0ZW0gPyB0aGlzLl9nZXRJdGVtTGFiZWwodGhpcy5zZWxlY3RlZEl0ZW0pIDogKHRoaXMudmFsdWUgfHwgJycpO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2RldGVjdEFuZERpc3BhdGNoQ2hhbmdlKCk7XG5cbiAgICB0aGlzLl9jbGVhclNlbGVjdGlvblJhbmdlKCk7XG5cbiAgICBpZiAoIXRoaXMuZGF0YVByb3ZpZGVyKSB7XG4gICAgICB0aGlzLmZpbHRlciA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIGdldCBfcHJvcGVydHlGb3JWYWx1ZSgpIHtcbiAgICByZXR1cm4gJ3ZhbHVlJztcbiAgfVxuXG4gIC8qKlxuICAgKiAgRmlsdGVyaW5nIGFuZCBpdGVtcyBoYW5kbGluZ1xuICAgKi9cbiAgX2lucHV0VmFsdWVDaGFuZ2VkKGUpIHtcbiAgICAvLyBIYW5kbGUgb25seSBpbnB1dCBldmVudHMgZnJvbSBvdXIgaW5wdXRFbGVtZW50LlxuICAgIGlmIChlLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy5pbnB1dEVsZW1lbnQpICE9PSAtMSkge1xuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudFt0aGlzLl9wcm9wZXJ0eUZvclZhbHVlXTtcbiAgICAgIHRoaXMuX2ZpbHRlckZyb21JbnB1dChlKTtcbiAgICB9XG4gIH1cblxuICBfZmlsdGVyRnJvbUlucHV0KGUpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkICYmICFlLl9fZnJvbUNsZWFyQnV0dG9uKSB7XG4gICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5maWx0ZXIgPT09IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlKSB7XG4gICAgICAvLyBGaWx0ZXIgYW5kIGlucHV0IHZhbHVlIG1pZ2h0IGdldCBvdXQgb2Ygc3luYywgd2hpbGUga2V5Ym9hcmQgbmF2aWdhdGluZyBmb3IgZXhhbXBsZS5cbiAgICAgIC8vIEFmdGVyd2FyZHMsIGlucHV0IHZhbHVlIG1pZ2h0IGJlIGNoYW5nZWQgdG8gdGhlIHNhbWUgdmFsdWUgYXMgdXNlZCBpbiBmaWx0ZXJpbmcuXG4gICAgICAvLyBJbiBzaXR1YXRpb24gbGlrZSB0aGVzZSwgd2UgbmVlZCB0byBtYWtlIHN1cmUgYWxsIHRoZSBmaWx0ZXIgY2hhbmdlcyBoYW5kbGVycyBhcmUgcnVuLlxuICAgICAgdGhpcy5fZmlsdGVyQ2hhbmdlZCh0aGlzLmZpbHRlciwgdGhpcy5pdGVtVmFsdWVQYXRoLCB0aGlzLml0ZW1MYWJlbFBhdGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmZpbHRlciA9IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlO1xuICAgIH1cbiAgfVxuXG4gIF9pdGVtTGFiZWxQYXRoQ2hhbmdlZChpdGVtTGFiZWxQYXRoLCBvbGRJdGVtTGFiZWxQYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBpdGVtTGFiZWxQYXRoICE9PSAnc3RyaW5nJykge1xuICAgICAgY29uc29sZS5lcnJvcignWW91IHNob3VsZCBzZXQgaXRlbUxhYmVsUGF0aCB0byBhIHZhbGlkIHN0cmluZycpO1xuICAgIH1cbiAgfVxuXG4gIF9maWx0ZXJDaGFuZ2VkKGZpbHRlciwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCkge1xuICAgIGlmIChmaWx0ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5pdGVtcykge1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5fZmlsdGVySXRlbXModGhpcy5pdGVtcywgZmlsdGVyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gV2l0aCBjZXJ0YWluIHVzZSBjYXNlcyAoZS4gZy4sIGV4dGVybmFsIGZpbHRlcmluZyksIGBpdGVtc2AgYXJlXG4gICAgICAvLyB1bmRlZmluZWQuIEZpbHRlcmluZyBpcyB1bm5lY2Vzc2FyeSBwZXIgc2UsIGJ1dCB0aGUgZmlsdGVyZWRJdGVtc1xuICAgICAgLy8gb2JzZXJ2ZXIgc2hvdWxkIHN0aWxsIGJlIGludm9rZWQgdG8gdXBkYXRlIGZvY3VzZWQgaXRlbS5cbiAgICAgIHRoaXMuX2ZpbHRlcmVkSXRlbXNDaGFuZ2VkKHtwYXRoOiAnZmlsdGVyZWRJdGVtcycsIHZhbHVlOiB0aGlzLmZpbHRlcmVkSXRlbXN9LCBpdGVtVmFsdWVQYXRoLCBpdGVtTGFiZWxQYXRoKTtcbiAgICB9XG4gIH1cblxuICBfbG9hZGluZ0NoYW5nZWQobG9hZGluZykge1xuICAgIGlmIChsb2FkaW5nKSB7XG4gICAgICB0aGlzLl9mb2N1c2VkSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBfcmV2ZXJ0SW5wdXRWYWx1ZSgpIHtcbiAgICBpZiAodGhpcy5maWx0ZXIgIT09ICcnKSB7XG4gICAgICB0aGlzLl9pbnB1dEVsZW1lbnRWYWx1ZSA9IHRoaXMuZmlsdGVyO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9yZXZlcnRJbnB1dFZhbHVlVG9WYWx1ZSgpO1xuICAgIH1cbiAgICB0aGlzLl9jbGVhclNlbGVjdGlvblJhbmdlKCk7XG4gIH1cblxuICBfcmV2ZXJ0SW5wdXRWYWx1ZVRvVmFsdWUoKSB7XG4gICAgaWYgKHRoaXMuYWxsb3dDdXN0b21WYWx1ZSAmJiAhdGhpcy5zZWxlY3RlZEl0ZW0pIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLl9nZXRJdGVtTGFiZWwodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF9yZXNpemVEcm9wZG93bigpIHtcbiAgICB0aGlzLiQub3ZlcmxheS4kLmRyb3Bkb3duLm5vdGlmeVJlc2l6ZSgpO1xuICB9XG5cbiAgX3VwZGF0ZUhhc1ZhbHVlKGhhc1ZhbHVlKSB7XG4gICAgaWYgKGhhc1ZhbHVlKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaGFzLXZhbHVlJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaGFzLXZhbHVlJyk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGVkSXRlbUNoYW5nZWQoc2VsZWN0ZWRJdGVtLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgaWYgKHNlbGVjdGVkSXRlbSA9PT0gbnVsbCB8fCBzZWxlY3RlZEl0ZW0gPT09IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHRoaXMuZmlsdGVyZWRJdGVtcykge1xuICAgICAgICBpZiAoIXRoaXMuYWxsb3dDdXN0b21WYWx1ZSkge1xuICAgICAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX3VwZGF0ZUhhc1ZhbHVlKHRoaXMudmFsdWUgIT09ICcnKTtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2dldEl0ZW1WYWx1ZShzZWxlY3RlZEl0ZW0pO1xuICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgaWYgKHRoaXMudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICAgICAgLy8gVGhlIHZhbHVlIHdhcyBjaGFuZ2VkIHRvIHNvbWV0aGluZyBlbHNlIGluIHZhbHVlLWNoYW5nZWQgbGlzdGVuZXIsXG4gICAgICAgICAgLy8gc28gcHJldmVudCBmcm9tIHJlc2V0dGluZyBpdCB0byB0aGUgcHJldmlvdXMgdmFsdWUuXG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX3VwZGF0ZUhhc1ZhbHVlKHRydWUpO1xuICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB0aGlzLl9nZXRJdGVtTGFiZWwoc2VsZWN0ZWRJdGVtKTtcblxuICAgICAgLy8gQ291bGQgbm90IGJlIGRlZmluZWQgaW4gMS54IGJlY2F1c2UgcmVhZHkgaXMgY2FsbGVkIGFmdGVyIGFsbCBwcm9wLXNldHRlcnNcbiAgICAgIGlmICh0aGlzLmlucHV0RWxlbWVudCkge1xuICAgICAgICB0aGlzLmlucHV0RWxlbWVudFt0aGlzLl9wcm9wZXJ0eUZvclZhbHVlXSA9IHRoaXMuX2lucHV0RWxlbWVudFZhbHVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJC5vdmVybGF5Ll9zZWxlY3RlZEl0ZW0gPSBzZWxlY3RlZEl0ZW07XG4gICAgaWYgKHRoaXMuZmlsdGVyZWRJdGVtcyAmJiB0aGlzLiQub3ZlcmxheS5faXRlbXMpIHtcbiAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IHRoaXMuZmlsdGVyZWRJdGVtcy5pbmRleE9mKHNlbGVjdGVkSXRlbSk7XG4gICAgfVxuICB9XG5cbiAgX3ZhbHVlQ2hhbmdlZCh2YWx1ZSwgb2xkVmFsKSB7XG4gICAgaWYgKHZhbHVlID09PSAnJyAmJiBvbGRWYWwgPT09IHVuZGVmaW5lZCkgeyAvLyBpbml0aWFsaXppbmcsIG5vIG5lZWQgdG8gZG8gYW55dGhpbmcgKCM1NTQpXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2lzVmFsaWRWYWx1ZSh2YWx1ZSkpIHtcbiAgICAgIGxldCBpdGVtO1xuICAgICAgaWYgKHRoaXMuX2dldEl0ZW1WYWx1ZSh0aGlzLnNlbGVjdGVkSXRlbSkgIT09IHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdEl0ZW1Gb3JWYWx1ZSh2YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBpdGVtID0gdGhpcy5zZWxlY3RlZEl0ZW07XG4gICAgICB9XG5cbiAgICAgIGlmICghaXRlbSAmJiB0aGlzLmFsbG93Q3VzdG9tVmFsdWUpIHtcbiAgICAgICAgdGhpcy5faW5wdXRFbGVtZW50VmFsdWUgPSB2YWx1ZTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5fdXBkYXRlSGFzVmFsdWUodGhpcy52YWx1ZSAhPT0gJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IG51bGw7XG4gICAgfVxuICAgIC8vIEluIHRoZSBuZXh0IF9kZXRlY3RBbmREaXNwYXRjaENoYW5nZSgpIGNhbGwsIHRoZSBjaGFuZ2UgZGV0ZWN0aW9uIHNob3VsZCBwYXNzXG4gICAgdGhpcy5fbGFzdENvbW1pdHRlZFZhbHVlID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgX2RldGVjdEFuZERpc3BhdGNoQ2hhbmdlKCkge1xuICAgIGlmICh0aGlzLnZhbHVlICE9PSB0aGlzLl9sYXN0Q29tbWl0dGVkVmFsdWUpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgICAgdGhpcy5fbGFzdENvbW1pdHRlZFZhbHVlID0gdGhpcy52YWx1ZTtcbiAgICB9XG4gIH1cblxuICBfaXRlbXNDaGFuZ2VkKGl0ZW1zLCBvbGRJdGVtcykge1xuICAgIHRoaXMuX2Vuc3VyZUl0ZW1zT3JEYXRhUHJvdmlkZXIoKCkgPT4ge1xuICAgICAgdGhpcy5pdGVtcyA9IG9sZEl0ZW1zO1xuICAgIH0pO1xuICB9XG5cbiAgX2l0ZW1zT3JQYXRoc0NoYW5nZWQoZSwgaXRlbVZhbHVlUGF0aCwgaXRlbUxhYmVsUGF0aCkge1xuICAgIGlmIChlLnZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGUucGF0aCA9PT0gJ2l0ZW1zJyB8fCBlLnBhdGggPT09ICdpdGVtcy5zcGxpY2VzJykge1xuICAgICAgdGhpcy5maWx0ZXJlZEl0ZW1zID0gdGhpcy5pdGVtcyA/IHRoaXMuaXRlbXMuc2xpY2UoMCkgOiB0aGlzLml0ZW1zO1xuXG4gICAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy5faW5kZXhPZlZhbHVlKHRoaXMudmFsdWUsIHRoaXMuaXRlbXMpO1xuICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gdmFsdWVJbmRleDtcblxuICAgICAgY29uc3QgaXRlbSA9IHZhbHVlSW5kZXggPiAtMSAmJiB0aGlzLml0ZW1zW3ZhbHVlSW5kZXhdO1xuICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBpdGVtO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9maWx0ZXJlZEl0ZW1zQ2hhbmdlZChlLCBpdGVtVmFsdWVQYXRoLCBpdGVtTGFiZWxQYXRoKSB7XG4gICAgaWYgKGUudmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoZS5wYXRoID09PSAnZmlsdGVyZWRJdGVtcycgfHwgZS5wYXRoID09PSAnZmlsdGVyZWRJdGVtcy5zcGxpY2VzJykge1xuICAgICAgdGhpcy5fc2V0T3ZlcmxheUl0ZW1zKHRoaXMuZmlsdGVyZWRJdGVtcyk7XG5cbiAgICAgIHRoaXMuX2ZvY3VzZWRJbmRleCA9IHRoaXMub3BlbmVkID9cbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuaW5kZXhPZkxhYmVsKHRoaXMuZmlsdGVyKSA6XG4gICAgICAgIHRoaXMuX2luZGV4T2ZWYWx1ZSh0aGlzLnZhbHVlLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuXG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fcmVwb3NpdGlvbk92ZXJsYXkoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfZmlsdGVySXRlbXMoYXJyLCBmaWx0ZXIpIHtcbiAgICBpZiAoIWFycikge1xuICAgICAgcmV0dXJuIGFycjtcbiAgICB9XG5cbiAgICByZXR1cm4gYXJyLmZpbHRlcihpdGVtID0+IHtcbiAgICAgIGZpbHRlciA9IGZpbHRlciA/IGZpbHRlci50b1N0cmluZygpLnRvTG93ZXJDYXNlKCkgOiAnJztcbiAgICAgIC8vIENoZWNrIGlmIGl0ZW0gY29udGFpbnMgaW5wdXQgdmFsdWUuXG4gICAgICByZXR1cm4gdGhpcy5fZ2V0SXRlbUxhYmVsKGl0ZW0pLnRvU3RyaW5nKCkudG9Mb3dlckNhc2UoKS5pbmRleE9mKGZpbHRlcikgPiAtMTtcbiAgICB9KTtcbiAgfVxuXG4gIF9zZWxlY3RJdGVtRm9yVmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCB2YWx1ZUluZGV4ID0gdGhpcy5faW5kZXhPZlZhbHVlKHZhbHVlLCB0aGlzLmZpbHRlcmVkSXRlbXMpO1xuICAgIGNvbnN0IHByZXZpb3VzbHlTZWxlY3RlZEl0ZW0gPSB0aGlzLnNlbGVjdGVkSXRlbTtcblxuICAgIHRoaXMuc2VsZWN0ZWRJdGVtID0gdmFsdWVJbmRleCA+PSAwXG4gICAgICA/IHRoaXMuZmlsdGVyZWRJdGVtc1t2YWx1ZUluZGV4XVxuICAgICAgOiAodGhpcy5kYXRhUHJvdmlkZXIgJiYgdGhpcy5zZWxlY3RlZEl0ZW0gPT09IHVuZGVmaW5lZClcbiAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgOiBudWxsO1xuXG4gICAgaWYgKHRoaXMuc2VsZWN0ZWRJdGVtID09PSBudWxsICYmIHByZXZpb3VzbHlTZWxlY3RlZEl0ZW0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuX3NlbGVjdGVkSXRlbUNoYW5nZWQodGhpcy5zZWxlY3RlZEl0ZW0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRPdmVybGF5SXRlbXMoaXRlbXMpIHtcbiAgICB0aGlzLiQub3ZlcmxheS5zZXQoJ19pdGVtcycsIGl0ZW1zKTtcbiAgfVxuXG4gIF9yZXBvc2l0aW9uT3ZlcmxheSgpIHtcbiAgICAvLyBhc3luYyBuZWVkZWQgdG8gcmVwb3NpdGlvbiBjb3JyZWN0bHkgYWZ0ZXIgZmlsdGVyaW5nXG4gICAgLy8gKGVzcGVjaWFsbHkgd2hlbiBhbGlnbmVkIG9uIHRvcCBvZiBpbnB1dClcbiAgICB0aGlzLl9fcmVwb3NpdGlvbk92ZXJsYXlEZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICB0aGlzLl9fcmVwb3NpdGlvbk92ZXJsYXlEZWJvdW5jZXIsXG4gICAgICAvLyBMb25nIGRlYm91bmNlOiBzaXppbmcgdXBkYXRlcyBpbnZva2UgbXVsdGlwbGUgc3R5bGluZyByb3VuZHMsXG4gICAgICAvLyB3aGljaCBpcyB2ZXJ5IHNsb3cgaW4gRWRnZVxuICAgICAgdGltZU91dC5hZnRlcig1MDApLFxuICAgICAgKCkgPT4ge1xuICAgICAgICBjb25zdCBzZWxlY3RvciA9IHRoaXMuJC5vdmVybGF5Ll9zZWxlY3RvcjtcbiAgICAgICAgaWYgKCFzZWxlY3Rvci5faXNDbGllbnRGdWxsKCkpIHtcbiAgICAgICAgICAvLyBEdWUgdG8gdGhlIG1pc21hdGNoIG9mIHRoZSBZIHBvc2l0aW9uIG9mIHRoZSBpdGVtIHJlbmRlcmVkXG4gICAgICAgICAgLy8gYXQgdGhlIHRvcCBvZiB0aGUgc2Nyb2xsaW5nIGxpc3Qgd2l0aCBzb21lIHNwZWNpZmljIHNjcm9sbFxuICAgICAgICAgIC8vIHBvc2l0aW9uIHZhbHVlcyAoMjMyNCwgMzQ4NiwgNjk3MiwgNjA5NzIsIDk1NzU3IGV0Yy4pXG4gICAgICAgICAgLy8gaXJvbi1saXN0IGxvb3BzIHRoZSBpbmNyZWFzaW5nIG9mIHRoZSBwb29sIGFuZCBhZGRzXG4gICAgICAgICAgLy8gdG9vIG1hbnkgaXRlbXMgdG8gdGhlIERPTS5cbiAgICAgICAgICAvLyBBZGp1c3Rpbmcgc2Nyb2xsIHBvc2l0aW9uIHRvIGVxdWFsIHRoZSBjdXJyZW50IHNjcm9sbFRvcCB2YWx1ZVxuICAgICAgICAgIC8vIHRvIGF2b2lkIGxvb3BpbmcuXG4gICAgICAgICAgc2VsZWN0b3IuX3Jlc2V0U2Nyb2xsUG9zaXRpb24oc2VsZWN0b3IuX3BoeXNpY2FsVG9wKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9yZXNpemVEcm9wZG93bigpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS51cGRhdGVWaWV3cG9ydEJvdW5kYXJpZXMoKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuZW5zdXJlSXRlbXNSZW5kZXJlZCgpO1xuICAgICAgICBzZWxlY3Rvci5ub3RpZnlSZXNpemUoKTtcbiAgICAgICAgZmx1c2goKTtcbiAgICAgIH1cbiAgICApO1xuICB9XG5cbiAgX2luZGV4T2ZWYWx1ZSh2YWx1ZSwgaXRlbXMpIHtcbiAgICBpZiAoaXRlbXMgJiYgdGhpcy5faXNWYWxpZFZhbHVlKHZhbHVlKSkge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAodGhpcy5fZ2V0SXRlbVZhbHVlKGl0ZW1zW2ldKSA9PT0gdmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiAtMTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHZhbHVlIGlzIHN1cHBvcnRlZCBhcyBhbiBpdGVtIHZhbHVlIGluIHRoaXMgY29udHJvbC5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICovXG4gIF9pc1ZhbGlkVmFsdWUodmFsdWUpIHtcbiAgICByZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCAmJiB2YWx1ZSAhPT0gbnVsbDtcbiAgfVxuXG4gIF9vdmVybGF5U2VsZWN0ZWRJdGVtQ2hhbmdlZChlKSB7XG4gICAgLy8gc3RvcCB0aGlzIHByaXZhdGUgZXZlbnQgZnJvbSBsZWFraW5nIG91dHNpZGUuXG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgIGlmIChlLmRldGFpbC5pdGVtIGluc3RhbmNlb2YgQ29tYm9Cb3hQbGFjZWhvbGRlcikge1xuICAgICAgLy8gUGxhY2Vob2xkZXIgaXRlbXMgc2hvdWxkIG5vdCBiZSBzZWxlY3RhYmxlLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fZm9jdXNlZEluZGV4ID0gdGhpcy5maWx0ZXJlZEl0ZW1zLmluZGV4T2YoZS5kZXRhaWwuaXRlbSk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnNlbGVjdGVkSXRlbSAhPT0gZS5kZXRhaWwuaXRlbSkge1xuICAgICAgdGhpcy5zZWxlY3RlZEl0ZW0gPSBlLmRldGFpbC5pdGVtO1xuICAgICAgdGhpcy5fZGV0ZWN0QW5kRGlzcGF0Y2hDaGFuZ2UoKTtcbiAgICB9XG4gIH1cblxuICBfb25Gb2N1c291dChldmVudCkge1xuICAgIC8vIEZpeGVzIHRoZSBwcm9ibGVtIHdpdGggYGZvY3Vzb3V0YCBoYXBwZW5pbmcgd2hlbiBjbGlja2luZyBvbiB0aGUgc2Nyb2xsIGJhciBvbiBFZGdlXG4gICAgY29uc3QgZHJvcGRvd24gPSB0aGlzLiQub3ZlcmxheS4kLmRyb3Bkb3duO1xuICAgIGlmIChkcm9wZG93biAmJiBkcm9wZG93bi4kICYmIGV2ZW50LnJlbGF0ZWRUYXJnZXQgPT09IGRyb3Bkb3duLiQub3ZlcmxheSkge1xuICAgICAgZXZlbnQuY29tcG9zZWRQYXRoKClbMF0uZm9jdXMoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLl9jbG9zZU9uQmx1cklzUHJldmVudGVkKSB7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgX29uVG91Y2hlbmQoZXZlbnQpIHtcbiAgICBpZiAoIXRoaXMuX2NsZWFyRWxlbWVudCB8fCBldmVudC5jb21wb3NlZFBhdGgoKVswXSAhPT0gdGhpcy5fY2xlYXJFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLl9jbGVhcigpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiBgdmFsdWVgIGlzIHZhbGlkLCBhbmQgc2V0cyB0aGUgYGludmFsaWRgIGZsYWcgYXBwcm9wcmlhdGVseS5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHlcbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIHJldHVybiAhKHRoaXMuaW52YWxpZCA9ICF0aGlzLmNoZWNrVmFsaWRpdHkoKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IGlucHV0IHZhbHVlIHNhdGlzZmllcyBhbGwgY29uc3RyYWludHMgKGlmIGFueSlcbiAgICpcbiAgICogWW91IGNhbiBvdmVycmlkZSB0aGUgYGNoZWNrVmFsaWRpdHlgIG1ldGhvZCBmb3IgY3VzdG9tIHZhbGlkYXRpb25zLlxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpIHtcbiAgICBpZiAodGhpcy5pbnB1dEVsZW1lbnQudmFsaWRhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC52YWxpZGF0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGdldCBfaW5zdGFuY2VQcm9wcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgaXRlbTogdHJ1ZSxcbiAgICAgIGluZGV4OiB0cnVlLFxuICAgICAgc2VsZWN0ZWQ6IHRydWUsXG4gICAgICBmb2N1c2VkOiB0cnVlXG4gICAgfTtcbiAgfVxuXG4gIF9lbnN1cmVUZW1wbGF0aXplZCgpIHtcbiAgICBpZiAoIXRoaXMuX1RlbXBsYXRlQ2xhc3MpIHtcbiAgICAgIGNvbnN0IHRwbCA9IHRoaXMuX2l0ZW1UZW1wbGF0ZSB8fCB0aGlzLl9nZXRSb290VGVtcGxhdGUoKTtcbiAgICAgIGlmICh0cGwpIHtcbiAgICAgICAgdGhpcy5fVGVtcGxhdGVDbGFzcyA9IHRlbXBsYXRpemUodHBsLCB0aGlzLCB7XG4gICAgICAgICAgaW5zdGFuY2VQcm9wczogdGhpcy5faW5zdGFuY2VQcm9wcyxcbiAgICAgICAgICBmb3J3YXJkSG9zdFByb3A6IGZ1bmN0aW9uKHByb3AsIHZhbHVlKSB7XG4gICAgICAgICAgICBjb25zdCBpdGVtcyA9IHRoaXMuJC5vdmVybGF5Ll9zZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCd2YWFkaW4tY29tYm8tYm94LWl0ZW0nKTtcbiAgICAgICAgICAgIEFycmF5LnByb3RvdHlwZS5mb3JFYWNoLmNhbGwoaXRlbXMsIGl0ZW0gPT4ge1xuICAgICAgICAgICAgICBpZiAoaXRlbS5faXRlbVRlbXBsYXRlSW5zdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBpdGVtLl9pdGVtVGVtcGxhdGVJbnN0YW5jZS5zZXQocHJvcCwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGl0ZW0uX2l0ZW1UZW1wbGF0ZUluc3RhbmNlLm5vdGlmeVBhdGgocHJvcCwgdmFsdWUsIHRydWUpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9nZXRSb290VGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbCh0aGlzLmNoaWxkcmVuLCBlbGVtID0+IGVsZW0udGFnTmFtZSA9PT0gJ1RFTVBMQVRFJylbMF07XG4gIH1cblxuICBfcHJldmVudElucHV0Qmx1cigpIHtcbiAgICBpZiAodGhpcy5fdG9nZ2xlRWxlbWVudCkge1xuICAgICAgdGhpcy5fdG9nZ2xlRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuX3ByZXZlbnREZWZhdWx0KTtcbiAgICB9XG4gICAgaWYgKHRoaXMuX2NsZWFyRWxlbWVudCkge1xuICAgICAgdGhpcy5fY2xlYXJFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fcHJldmVudERlZmF1bHQpO1xuICAgIH1cbiAgfVxuXG4gIF9yZXN0b3JlSW5wdXRCbHVyKCkge1xuICAgIGlmICh0aGlzLl90b2dnbGVFbGVtZW50KSB7XG4gICAgICB0aGlzLl90b2dnbGVFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fcHJldmVudERlZmF1bHQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fY2xlYXJFbGVtZW50KSB7XG4gICAgICB0aGlzLl9jbGVhckVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9wcmV2ZW50RGVmYXVsdCk7XG4gICAgfVxuICB9XG5cbiAgX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHZhbHVlIGNoYW5nZXMuXG4gICAqXG4gICAqIEBldmVudCB2YWx1ZS1jaGFuZ2VkXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBkZXRhaWxcbiAgICogIEBwYXJhbSB7U3RyaW5nfSBkZXRhaWwudmFsdWUgdGhlIGNvbWJvYm94IHZhbHVlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHNlbGVjdGVkIGl0ZW0gY2hhbmdlcy5cbiAgICpcbiAgICogQGV2ZW50IHNlbGVjdGVkLWl0ZW0tY2hhbmdlZFxuICAgKiBAcGFyYW0ge09iamVjdH0gZGV0YWlsXG4gICAqICBAcGFyYW0ge09iamVjdHxTdHJpbmd9IGRldGFpbC52YWx1ZSB0aGUgc2VsZWN0ZWQgaXRlbS4gVHlwZSBpcyB0aGUgc2FtZSBhcyB0aGUgdHlwZSBvZiBgaXRlbXNgLlxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgdXNlciBzZXRzIGEgY3VzdG9tIHZhbHVlLlxuICAgKiBAZXZlbnQgY3VzdG9tLXZhbHVlLXNldFxuICAgKiBAcGFyYW0ge1N0cmluZ30gZGV0YWlsIHRoZSBjdXN0b20gdmFsdWVcbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdmFsdWUgY2hhbmdlcy5cbiAgICogVG8gY29tcGx5IHdpdGggaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvRXZlbnRzL2NoYW5nZVxuICAgKiBAZXZlbnQgY2hhbmdlXG4gICAqL1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxOCBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbi8qXG4gKiBQbGFjZWhvbGRlciBvYmplY3QgY2xhc3MgcmVwcmVzZW50aW5nIGl0ZW1zIGJlaW5nIGxvYWRlZC5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5leHBvcnQgY29uc3QgQ29tYm9Cb3hQbGFjZWhvbGRlciA9IGNsYXNzIENvbWJvQm94UGxhY2Vob2xkZXIge1xuICB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cbn07XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9taXhpbnMvbWVudS1vdmVybGF5LmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBodG1sYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtY29tYm8tYm94LW92ZXJsYXlcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tY29tYm8tYm94LW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibWF0ZXJpYWwtbWVudS1vdmVybGF5XCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIC8qIFRPRE8gdXNpbmcgYSBsZWdhY3kgbWl4aW4gKHVuc3VwcG9ydGVkKSAqL1xuICAgICAgICAtLWlyb24tbGlzdC1pdGVtcy1jb250YWluZXI6IHtcbiAgICAgICAgICBib3JkZXItd2lkdGg6IDhweCAwO1xuICAgICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogdmlzaWJsZTtcbiAgICAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcbiAgICAgICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY29udGVudFwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtsb2FkaW5nXSkgW3BhcnQ9XCJsb2FkZXJcIl0ge1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICB0b3A6IC0ycHg7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kOlxuICAgICAgICAgIHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpIGxpbmVhci1ncmFkaWVudChcbiAgICAgICAgICAgIDkwZGVnLFxuICAgICAgICAgICAgdHJhbnNwYXJlbnQgMCUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAyMCUsXG4gICAgICAgICAgICB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKSAyMCUsXG4gICAgICAgICAgICB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKSA0MCUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA0MCUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA2MCUsXG4gICAgICAgICAgICB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKSA2MCUsXG4gICAgICAgICAgICB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKSA4MCUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCA4MCUsXG4gICAgICAgICAgICB0cmFuc3BhcmVudCAxMDAlXG4gICAgICAgICAgKSAwIDAgLyA0MDAlIDEwMCUgcmVwZWF0LXg7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGFuaW1hdGlvbjpcbiAgICAgICAgICAzcyBsaW5lYXIgaW5maW5pdGUgbWF0ZXJpYWwtY29tYm8tYm94LWxvYWRlci1wcm9ncmVzcyxcbiAgICAgICAgICAuM3MgLjFzIGJvdGggbWF0ZXJpYWwtY29tYm8tYm94LWxvYWRlci1mYWRlLWluO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxvYWRlclwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDAuMTY7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIG1hdGVyaWFsLWNvbWJvLWJveC1sb2FkZXItZmFkZS1pbiB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIG1hdGVyaWFsLWNvbWJvLWJveC1sb2FkZXItcHJvZ3Jlc3Mge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogMCAwO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMzAwJSAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgMzMlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMTAwJSAwO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogNDAwJSAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgNjclIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiAtMjAwJSAwO1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjUwJSAxMDAlO1xuICAgICAgICB9XG5cbiAgICAgICAgMTAwJSB7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogLTMwMCUgMDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDMwMCUgMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvZm9udC1pY29ucy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4taXRlbS90aGVtZS9tYXRlcmlhbC92YWFkaW4taXRlbS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWNvbWJvLWJveC1pdGVtXCIgdGhlbWUtZm9yPVwidmFhZGluLWNvbWJvLWJveC1pdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cIm1hdGVyaWFsLWl0ZW1cIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBwYWRkaW5nOiA0cHggMTBweDtcbiAgICAgICAgbWluLWhlaWdodDogMzZweDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1zbWFsbC1mb250LXNpemUpO1xuICAgICAgICAtLV9tYXRlcmlhbC1pdGVtLXNlbGVjdGVkLWljb24tZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIC8qIFNoYWR5Q1NTIHdvcmthcm91bmQgKi9cbiAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgKHBvaW50ZXI6IGNvYXJzZSkge1xuICAgICAgICA6aG9zdCg6aG92ZXIpLFxuICAgICAgICA6aG9zdChbZm9jdXNlZF0pIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1jb21iby1ib3gtZHJvcGRvd24tc3R5bGVzLmpzJztcbmltcG9ydCAnLi92YWFkaW4tY29tYm8tYm94LWl0ZW0tc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi1jb21iby1ib3gtbGlnaHQuanMnO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuLyoqXG4gKiBBIG1peGluIHByb3ZpZGluZyBgZm9jdXNlZGAsIGBmb2N1cy1yaW5nYCwgYGFjdGl2ZWAsIGBkaXNhYmxlZGAgYW5kIGBzZWxlY3RlZGAuXG4gKlxuICogYGZvY3VzZWRgLCBgYWN0aXZlYCBhbmQgYGZvY3VzLXJpbmdgIGFyZSBzZXQgYXMgb25seSBhcyBhdHRyaWJ1dGVzLlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgSXRlbU1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBWYWFkaW5JdGVtTWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogVXNlZCBmb3IgbWl4aW4gZGV0ZWN0aW9uIGJlY2F1c2UgYGluc3RhbmNlb2ZgIGRvZXMgbm90IHdvcmsgd2l0aCBtaXhpbnMuXG4gICAgICAgKiBlLmcuIGluIFZhYWRpbkxpc3RNaXhpbiBpdCBmaWx0ZXJzIGl0ZW1zIGJ5IHVzaW5nIHRoZVxuICAgICAgICogYGVsZW1lbnQuX2hhc1ZhYWRpbkl0ZW1NaXhpbmAgY29uZGl0aW9uLlxuICAgICAgICovXG4gICAgICBfaGFzVmFhZGluSXRlbU1peGluOiB7XG4gICAgICAgIHZhbHVlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIElmIHRydWUsIHRoZSB1c2VyIGNhbm5vdCBpbnRlcmFjdCB3aXRoIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogJ19kaXNhYmxlZENoYW5nZWQnLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgdGhlIGl0ZW0gaXMgaW4gc2VsZWN0ZWQgc3RhdGUuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ19zZWxlY3RlZENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICBfdmFsdWU6IFN0cmluZ1xuICAgIH07XG4gIH1cblxuICBnZXQgdmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3ZhbHVlICE9PSB1bmRlZmluZWQgPyB0aGlzLl92YWx1ZSA6IHRoaXMudGV4dENvbnRlbnQudHJpbSgpO1xuICB9XG5cbiAgc2V0IHZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICBjb25zdCBhdHRyVmFsdWUgPSB0aGlzLmdldEF0dHJpYnV0ZSgndmFsdWUnKTtcbiAgICBpZiAoYXR0clZhbHVlICE9PSBudWxsKSB7XG4gICAgICB0aGlzLnZhbHVlID0gYXR0clZhbHVlO1xuICAgIH1cblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBlID0+IHRoaXMuX3NldEZvY3VzZWQodHJ1ZSksIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSksIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZSA9PiB7XG4gICAgICB0aGlzLl9zZXRBY3RpdmUodGhpcy5fbW91c2Vkb3duID0gdHJ1ZSk7XG4gICAgICBjb25zdCBtb3VzZVVwTGlzdGVuZXIgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX3NldEFjdGl2ZSh0aGlzLl9tb3VzZWRvd24gPSBmYWxzZSk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xuICAgICAgfTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBtb3VzZVVwTGlzdGVuZXIpO1xuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gdGhpcy5fb25LZXlkb3duKGUpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleXVwJywgZSA9PiB0aGlzLl9vbktleXVwKGUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gaW4gRmlyZWZveCBhbmQgU2FmYXJpLCBibHVyIGRvZXMgbm90IGZpcmUgb24gdGhlIGVsZW1lbnQgd2hlbiBpdCBpcyByZW1vdmVkLFxuICAgIC8vIGVzcGVjaWFsbHkgYmV0d2VlbiBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMsIGJlaW5nIGFjdGl2ZSBhdCB0aGUgc2FtZSB0aW1lLlxuICAgIC8vIHJlcHJvZHVjaWJsZSBpbiBgPHZhYWRpbi1zZWxlY3Q+YCB3aGVuIGNsb3Npbmcgb3ZlcmxheSBvbiBzZWxlY3QuXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGVkQ2hhbmdlZChzZWxlY3RlZCkge1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLXNlbGVjdGVkJywgc2VsZWN0ZWQpO1xuICB9XG5cbiAgX2Rpc2FibGVkQ2hhbmdlZChkaXNhYmxlZCkge1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5zZWxlY3RlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCAndHJ1ZScpO1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX3NldEZvY3VzZWQoZm9jdXNlZCkge1xuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9jdXNlZCcsICcnKTtcbiAgICAgIGlmICghdGhpcy5fbW91c2Vkb3duKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb2N1cy1yaW5nJywgJycpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZm9jdXNlZCcpO1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEFjdGl2ZShhY3RpdmUpIHtcbiAgICBpZiAoYWN0aXZlKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgfVxuICB9XG5cbiAgX29uS2V5ZG93bihldmVudCkge1xuICAgIGlmICgvXiggfFNwYWNlQmFyfEVudGVyKSQvLnRlc3QoZXZlbnQua2V5KSAmJiAhZXZlbnQuZGVmYXVsdFByZXZlbnRlZCkge1xuICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZSh0cnVlKTtcbiAgICB9XG4gIH1cblxuICBfb25LZXl1cChldmVudCkge1xuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgIHRoaXMuX3NldEFjdGl2ZShmYWxzZSk7XG4gICAgICB0aGlzLmNsaWNrKCk7XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgSXRlbU1peGluIH0gZnJvbSAnLi92YWFkaW4taXRlbS1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuLyoqXG4gKiBgPHZhYWRpbi1pdGVtPmAgaXMgYSBXZWIgQ29tcG9uZW50IHByb3ZpZGluZyBsYXlvdXQgZm9yIGl0ZW1zIGluIHRhYnMgYW5kIG1lbnVzLlxuICpcbiAqIGBgYFxuICogICA8dmFhZGluLWl0ZW0+XG4gKiAgICAgSXRlbSBjb250ZW50XG4gKiAgIDwvdmFhZGluLWl0ZW0+XG4gKiBgYGBcbiAqXG4gKiAjIyMgU2VsZWN0YWJsZVxuICpcbiAqIGA8dmFhZGluLWl0ZW0+YCBoYXMgdGhlIGBzZWxlY3RlZGAgcHJvcGVydHkgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHN0YXRlIGF0dHJpYnV0ZS5cbiAqIEN1cnJlbnRseSwgdGhlIGNvbXBvbmVudCBzZXRzIHRoZSBgc2VsZWN0ZWRgIHRvIGZhbHNlLCB3aGVuIGBkaXNhYmxlZGAgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUuXG4gKiBCdXQgb3RoZXIgdGhhbiB0aGF0LCB0aGUgYDx2YWFkaW4taXRlbT5gIGRvZXMgbm90IHN3aXRjaCBzZWxlY3Rpb24gYnkgaXRzZWxmLlxuICogSW4gZ2VuZXJhbCwgaXQgaXMgdGhlIHdyYXBwZXIgY29tcG9uZW50LCBsaWtlIGA8dmFhZGluLWxpc3QtYm94PmAsIHdoaWNoIHNob3VsZCB1cGRhdGVcbiAqIHRoZSBgc2VsZWN0ZWRgIHByb3BlcnR5IG9uIHRoZSBpdGVtcywgZS4gZy4gb24gbW91c2Vkb3duIG9yIHdoZW4gRW50ZXIgLyBTcGFjZWJhciBpcyBwcmVzc2VkLlxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBzaGFkb3cgRE9NIHBhcnRzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG4gKlxuICogUGFydCBuYW1lIHwgRGVzY3JpcHRpb25cbiAqIC0tLXwtLS1cbiAqIGBjb250ZW50YCB8IFRoZSBlbGVtZW50IHRoYXQgd3JhcHMgdGhlIHNsb3RcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgIHwgRGVzY3JpcHRpb24gfCBQYXJ0IG5hbWVcbiAqIC0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tXG4gKiBgZGlzYWJsZWRgIHwgU2V0IHRvIGEgZGlzYWJsZWQgaXRlbSB8IDpob3N0XG4gKiBgZm9jdXNlZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkIHwgOmhvc3RcbiAqIGBmb2N1cy1yaW5nYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGtleWJvYXJkIGZvY3VzZWQgfCA6aG9zdFxuICogYHNlbGVjdGVkYCB8IFNldCB3aGVuIHRoZSBpdGVtIGlzIHNlbGVjdGVkIHwgOmhvc3RcbiAqIGBhY3RpdmVgIHwgU2V0IHdoZW4gbW91c2Vkb3duIG9yIGVudGVyL3NwYWNlYmFyIHByZXNzZWQgfCA6aG9zdFxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBtaXhlcyBWYWFkaW4uSXRlbU1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1hYmxlTWl4aW5cbiAqL1xuY2xhc3MgSXRlbUVsZW1lbnQgZXh0ZW5kcyBJdGVtTWl4aW4oVGhlbWFibGVNaXhpbihQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gICAgPGRpdiBwYXJ0PVwiY29udGVudFwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4taXRlbSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICcyLjEuMSc7XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgLyoqXG4gICAgICogU3VibWl0dGFibGUgc3RyaW5nIHZhbHVlLiBUaGUgZGVmYXVsdCB2YWx1ZSBpcyB0aGUgdHJpbW1lZCB0ZXh0IGNvbnRlbnQgb2YgdGhlIGVsZW1lbnQuXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKi9cbiAgICB0aGlzLnZhbHVlO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShJdGVtRWxlbWVudC5pcywgSXRlbUVsZW1lbnQpO1xuXG5leHBvcnQgeyBJdGVtRWxlbWVudCB9O1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvZm9udC1pY29ucy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBodG1sYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtaXRlbVwiIHRoZW1lLWZvcj1cInZhYWRpbi1pdGVtXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYXRlcmlhbC1mb250LWZhbWlseSk7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtYm9keS1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgcGFkZGluZzogNHB4IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIEl0J3MgdGhlIGxpc3QtYm94J3MgcmVzcG9uc2liaWxpdHkgdG8gYWRkIHRoZSBmb2N1cyBzdHlsZSAqL1xuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC8qIFNlbGVjdGVkIGl0ZW0gaGFzIGFuIGljb24gKi9cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIGRpc3BsYXk6IHZhcigtLV9tYXRlcmlhbC1pdGVtLXNlbGVjdGVkLWljb24tZGlzcGxheSwgbm9uZSk7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBtYXRlcmlhbC1pY29ucztcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbc2VsZWN0ZWRdKTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbWF0ZXJpYWwtaWNvbnMtY2hlY2spO1xuICAgICAgfVxuXG4gICAgICAvKiBEaXNhYmxlZCBpdGVtICovXG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1pdGVtLXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL3NyYy92YWFkaW4taXRlbS5qcyc7XG4iLCJpbXBvcnQgJy4uL2NvbG9yLmpzJztcbmltcG9ydCAnLi9vdmVybGF5LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLW1lbnUtb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJtYXRlcmlhbC1vdmVybGF5XCI+XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBNk5BO0FBQ0E7QUFDQTtBQXFDQTtBQUVBO0FBRUE7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFBQTtBQUFBO0FBbkZBO0FBc0ZBO0FBT0E7QUFDQTtBQU1BOzs7OztBQUtBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUEzQkE7QUE2QkE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhzREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlQQTs7Ozs7QUFLQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBK0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZFQTtBQUFBO0FBQUE7QUF5RUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJGQTtBQUFBO0FBQUE7QUF3RkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBN0ZBO0FBQUE7QUFBQTtBQWdHQTtBQUNBO0FBQ0E7QUFDQTtBQW5HQTtBQUFBO0FBQUE7QUFzR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqSEE7QUFBQTtBQUFBO0FBbUhBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBM0pBO0FBQUE7QUFBQTtBQThKQTtBQUNBO0FBRUE7Ozs7QUFqS0E7QUFBQTtBQUFBO0FBcUtBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkxBO0FBQUE7QUFBQTtBQXFMQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUEzTEE7QUFBQTtBQUFBO0FBOExBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBbk1BO0FBQUE7QUFBQTtBQXFNQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF6TUE7QUFBQTtBQUFBO0FBNE1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbE5BO0FBQUE7QUFBQTtBQXFOQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQW5PQTtBQUFBO0FBQUE7QUFHQTtBQUVBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQURBO0FBM0NBO0FBZ0RBO0FBbkRBO0FBQUE7QUFBQTtBQXNEQTtBQU1BO0FBNURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BOzs7Ozs7Ozs7Ozs7O0FBa0hBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUdBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFrQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQWpEQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQXJZQTtBQUNBO0FBNEJBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFFQTtBQXJFQTtBQXVFQTs7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FBaEhBO0FBQ0E7QUEyYUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeGNBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBVkE7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQWFBO0FBRUE7Ozs7Ozs7QUFNQTs7Ozs7OztBQUVBO0FBQ0E7QUFjQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUE3QkE7QUErQkE7OztBQUVBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQUlBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFLQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTs7O0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFNQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUF6TUE7QUFDQTtBQTJNQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzUEE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF3QkE7Ozs7Ozs7Ozs7Ozs7QUFvRkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBNUlBO0FBQ0E7QUFZQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQWhEQTtBQWtEQTs7O0FBRUE7QUFDQTtBQVFBOzs7O0FBbEZBO0FBQ0E7QUErSUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDakxBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWdEQTs7Ozs7OztBQUtBO0FBQ0E7QUFZQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBVkE7QUFlQTs7O0FBRUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBSUE7QUFDQTs7O0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQTNCQTtBQUNBO0FBQ0E7OztBQTJCQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUF0R0E7QUFDQTtBQXdHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEtBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFPQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBNUxBO0FBOExBO0FBak1BO0FBQUE7QUFBQTtBQW9NQTtBQVNBO0FBN01BO0FBQ0E7QUE4TUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBVUE7QUFDQTtBQTFOQTtBQUFBO0FBQUE7QUEyTkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7OztBQXJQQTtBQUFBO0FBQUE7QUF5UEE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBNVBBO0FBQUE7QUFBQTtBQStQQTtBQUFBO0FBQUE7QUFDQTtBQWhRQTtBQUFBO0FBQUE7QUFtUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeFFBO0FBQUE7QUFBQTtBQTJRQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQXBSQTtBQUFBO0FBQUE7QUF3UkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBOVJBO0FBQUE7QUFBQTtBQWtTQTtBQUNBO0FBblNBO0FBQUE7QUFBQTtBQXNTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZUQTtBQUFBO0FBQUE7QUEwVEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBL1RBO0FBQUE7QUFBQTtBQWtVQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQXBWQTtBQUFBO0FBQUE7QUF5VkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1V0E7QUFBQTtBQUFBO0FBK1dBO0FBQ0E7QUFoWEE7QUFBQTtBQUFBO0FBbVhBO0FBQ0E7QUFwWEE7QUFBQTtBQUFBO0FBdVhBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUE1WEE7QUFBQTtBQUFBO0FBK1hBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdllBO0FBQUE7QUFBQTtBQTBZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdlpBO0FBQUE7QUFBQTtBQXlaQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcGFBO0FBQUE7QUFBQTtBQXVhQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBdGJBO0FBQUE7QUFBQTtBQXliQTtBQUNBO0FBQ0E7QUFDQTtBQTViQTtBQUFBO0FBQUE7QUErYkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBbmNBO0FBQUE7QUFBQTtBQXNjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQWpkQTtBQUFBO0FBQUE7QUFvZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOWRBO0FBQUE7QUFBQTtBQWdlQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQTdlQTtBQUFBO0FBQUE7QUFpZkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBMWZBO0FBQUE7QUFBQTtBQThmQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFsZ0JBO0FBQUE7QUFBQTtBQW9nQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQTVoQkE7QUFBQTtBQUFBO0FBOGhCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFrQkE7QUFBQTtBQUNBO0FBK2tCQTs7O0FBaGxCQTtBQW9sQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF6bEJBO0FBQUE7QUFBQTtBQTRsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4bUJBO0FBQUE7QUFBQTtBQTJtQkE7QUFDQTtBQUNBO0FBQ0E7QUE5bUJBO0FBQUE7QUFBQTtBQWluQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUE1bkJBO0FBQUE7QUFBQTtBQStuQkE7QUFDQTtBQUNBO0FBQ0E7QUFsb0JBO0FBQUE7QUFBQTtBQXFvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTNvQkE7QUFBQTtBQUFBO0FBOG9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFucEJBO0FBQUE7QUFBQTtBQXNwQkE7QUFDQTtBQXZwQkE7QUFBQTtBQUFBO0FBMHBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEvcEJBO0FBQUE7QUFBQTtBQWtxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQW5zQkE7QUFBQTtBQUFBO0FBc3NCQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBNXRCQTtBQUFBO0FBQUE7QUErdEJBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBbnVCQTtBQUFBO0FBQUE7QUFxdUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXp1QkE7QUFBQTtBQUFBO0FBNHVCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMXZCQTtBQUFBO0FBQUE7QUE2dkJBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzd0JBO0FBQUE7QUFBQTtBQTZ3QkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdnhCQTtBQUFBO0FBQUE7QUEweEJBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQXR5QkE7QUFBQTtBQUFBO0FBeXlCQTtBQUNBO0FBMXlCQTtBQUFBO0FBQUE7QUE0eUJBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQXYwQkE7QUFBQTtBQUFBO0FBMDBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFyMUJBO0FBQUE7QUFBQTtBQTIxQkE7QUFDQTtBQTUxQkE7QUFBQTtBQUFBO0FBKzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBOTJCQTtBQUFBO0FBQUE7QUFpM0JBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQTEzQkE7QUFBQTtBQUFBO0FBNjNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQXI0QkE7QUFBQTtBQUFBO0FBMjRCQTtBQUNBO0FBRUE7Ozs7OztBQTk0QkE7QUFBQTtBQUFBO0FBbzVCQTtBQUNBO0FBQ0E7QUFDQTtBQXY1QkE7QUFBQTtBQUFBO0FBbTZCQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBVkE7QUFZQTtBQUNBO0FBQ0E7QUFwN0JBO0FBQUE7QUFBQTtBQXU3QkE7QUFBQTtBQUFBO0FBQ0E7QUF4N0JBO0FBQUE7QUFBQTtBQTI3QkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQWo4QkE7QUFBQTtBQUFBO0FBbzhCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBMThCQTtBQUFBO0FBQUE7QUE2OEJBO0FBQ0E7QUE5OEJBO0FBQUE7QUFBQTtBQWk5QkE7QUFDQTtBQUVBOzs7Ozs7OztBQVFBOzs7Ozs7OztBQVFBOzs7Ozs7QUFNQTs7Ozs7O0FBMStCQTtBQUFBO0FBQUE7QUE2a0JBO0FBQ0E7QUE5a0JBO0FBQUE7QUFBQTtBQTA1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7QUFoNkJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7Ozs7OztBQUtBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUhBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBO0FBRUE7QUE2RkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFtQ0E7Ozs7Ozs7Ozs7OztBQ3pDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNEQTs7Ozs7O0FBS0E7Ozs7OztBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQTZDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7O0FBbkVBO0FBQUE7QUFBQTtBQXVFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUEvRUE7QUFBQTtBQUFBO0FBa0ZBO0FBQ0E7QUFuRkE7QUFBQTtBQUFBO0FBc0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3RkE7QUFBQTtBQUFBO0FBZ0dBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBMUdBO0FBQUE7QUFBQTtBQTZHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsSEE7QUFBQTtBQUFBO0FBcUhBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXpIQTtBQUFBO0FBQUE7QUE0SEE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBaElBO0FBQUE7QUFBQTtBQXNDQTtBQUNBO0FBdkNBO0FBMENBO0FBQ0E7QUEzQ0E7QUFBQTtBQUFBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFPQTtBQS9CQTtBQWlDQTtBQW5DQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1hBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF1Q0E7Ozs7Ozs7QUFDQTtBQUNBO0FBY0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTs7Ozs7QUFJQTtBQVBBO0FBUUE7QUFDQTs7QUFuQ0E7QUFDQTtBQW9DQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEZBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFrREE7Ozs7Ozs7Ozs7OztBQ3ZEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBT0E7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==