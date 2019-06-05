(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~704fb8c7"],{

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

@group Iron Element
@element iron-list
@demo demo/index.html

*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
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
   * This value is the same as `scrollTop`.
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
   * @type {?Array<!TemplateInstanceBase>}
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
   * @private {?TemplatizerNode}
   */
  _offscreenFocusedItem: null,

  /**
   * The item that backfills the `_offscreenFocusedItem` in the physical items
   * list when that item is moved offscreen.
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

  ready: function ready() {
    this.addEventListener('focus', this._didFocus.bind(this), true);
  },
  attached: function attached() {
    this._debounce('_render', this._render, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_8__["animationFrame"]); // `iron-resize` is fired when the list is attached if the event is added
    // before attached causing unnecessary work.


    this.listen(this, 'iron-resize', '_resizeHandler');
    this.listen(this, 'keydown', '_keydownHandler');
  },
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
      this._physicalStart = this._physicalStart + idxAdjustment; // Estimate new physical offset.

      this._physicalTop = Math.floor(this._virtualStart / this._itemsPerRow) * this._physicalAverage;

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
    var bottom = this._physicalBottom + this._scrollOffset;
    var scrollTop = this._scrollTop;
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

    this._userTemplate = this.queryEffectiveChildren('template');

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

    inst._flushProperties && inst._flushProperties(true); // TODO(blasten): V1 doesn't do this and it's a bug

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
      this._iterateItems(function (pidx, vidx) {
        this.translate3d(0, y + 'px', 0, this._physicalItems[pidx]);
        y += this._physicalSizes[pidx];
      });
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
      this._physicalTop = this._physicalTop - deltaHeight;
      var scrollTop = this._scrollTop; // juking scroll position during interial scrolling on iOS is no bueno

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
      this._focusBackfillItem = inst.root.querySelector('*');

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
        this.modelForElement(item).notifyPath(path, value, true);
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
          if (Math.floor(pageSize) !== pageSize || pageSize === 0) {
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
      var visibleItemsCount = this._visibleItemsCount();

      if (visibleItemsCount === undefined) {
        // Scroller is not visible. Moving is unnecessary.
        return;
      }

      var targetIndex = index;

      if (index > this._selector.lastVisibleIndex - 1) {
        // Index is below the bottom, scrolling down. Make the item appear at the bottom.
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
      var content = this.shadowRoot.querySelector(['[part~="content"]']);
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
  var data = _taggedTemplateLiteral(["\n    <slot></slot>\n\n    <vaadin-combo-box-dropdown-wrapper id=\"overlay\" opened=\"[[opened]]\" position-target=\"[[inputElement]]\" renderer=\"[[renderer]]\" _focused-index=\"[[_focusedIndex]]\" _item-id-path=\"[[itemIdPath]]\" _item-label-path=\"[[itemLabelPath]]\" loading=\"[[loading]]\" theme=\"[[theme]]\">\n    </vaadin-combo-box-dropdown-wrapper>\n"]);

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
    return _this;
  }

  _createClass(ComboBoxLightElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "ready", this).call(this);

      this._toggleElement = this.querySelector('.toggle-button');
      this._clearElement = this.querySelector('.clear-button');
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "connectedCallback", this).call(this);

      var cssSelector = 'vaadin-text-field,iron-input,paper-input,.paper-input-input,.input';

      this._setInputElement(this.querySelector(cssSelector));

      this._revertInputValue();

      this.inputElement.addEventListener('input', this._boundInputValueChanged);

      this._preventInputBlur();
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ComboBoxLightElement.prototype), "disconnectedCallback", this).call(this);

      this.inputElement.removeEventListener('input', this._boundInputValueChanged);

      this._restoreInputBlur();
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
 * @polymerMixin
 */

var ComboBoxMixin = function ComboBoxMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_subclass) {
      _inherits(VaadinComboBoxMixinElement, _subclass);

      function VaadinComboBoxMixinElement() {
        _classCallCheck(this, VaadinComboBoxMixinElement);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinComboBoxMixinElement).apply(this, arguments));
      }

      _createClass(VaadinComboBoxMixinElement, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinComboBoxMixinElement.prototype), "ready", this).call(this);

          this.addEventListener('focusout', function (e) {
            // Fixes the problem with `focusout` happening when clicking on the scroll bar on Edge
            var dropdown = _this.$.overlay.$.dropdown;

            if (dropdown && dropdown.$ && e.relatedTarget === dropdown.$.overlay) {
              e.composedPath()[0].focus();
              return;
            }

            if (!_this._closeOnBlurIsPrevented) {
              _this.close();
            }
          });
          this._lastCommittedValue = this.value;
          _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability(); // 2.0 does not support 'overlay.selection-changed' syntax in listeners

          this.$.overlay.addEventListener('selection-changed', this._overlaySelectedItemChanged.bind(this));
          this.addEventListener('vaadin-combo-box-dropdown-closed', this.close.bind(this));
          this.addEventListener('vaadin-combo-box-dropdown-opened', this._onOpened.bind(this));
          this.addEventListener('keydown', this._onKeyDown.bind(this));
          this.addEventListener('click', this._onClick.bind(this));
          this.$.overlay.addEventListener('vaadin-overlay-touch-action', this._onOverlayTouchAction.bind(this));
          this.addEventListener('touchend', function (e) {
            if (!_this._clearElement || e.composedPath()[0] !== _this._clearElement) {
              return;
            }

            e.preventDefault();

            _this._clear();
          });
          this._observer = new _polymer_polymer_lib_utils_flattened_nodes_observer_js__WEBPACK_IMPORTED_MODULE_6__["FlattenedNodesObserver"](this, function (info) {
            _this._setTemplateFromNodes(info.addedNodes);
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
            this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring'); // For touch devices, we don't want to popup virtual keyboard on touch devices unless input
            // is explicitly focused by the user.

            if (!this.$.overlay.touchDevice) {
              // Check to see if there is a focused property and if it's already true.
              if (!this.focused) {
                this.focus();
              }
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

          if (path.indexOf(this._clearElement) !== -1) {
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
          var _this2 = this;

          if (this._focusedIndex > -1) {
            // Reset the input value asyncronously to prevent partial value changes
            // announce. Makes OSX VoiceOver to announce the complete value instead.
            this._inputElementValue = ''; // 1ms delay needed for OSX VoiceOver to realise input value was reset

            setTimeout(function () {
              _this2._inputElementValue = _this2._getItemLabel(_this2.$.overlay._focusedItem);

              _this2._markAllSelectionRange();
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

            e.preventDefault();
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
          if (toggleElement) {
            // Don't blur the input on toggle mousedown
            toggleElement.addEventListener('mousedown', function (e) {
              return e.preventDefault();
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
          var _this3 = this;

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
            return _this3._resizeDropdown();
          }, 1); // Defer scroll position adjustment to prevent freeze in Edge

          window.requestAnimationFrame(function () {
            return _this3.$.overlay.adjustScrollPosition();
          }); // _detectAndDispatchChange() should not consider value changes done before opening

          this._lastCommittedValue = this.value;
        }
      }, {
        key: "_onClosed",
        value: function _onClosed() {
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
            if (this.allowCustomValue) {
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
              this._inputElementValue = this.selectedItem ? this._getItemLabel(this.selectedItem) : '';
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

            this._filterFromInput();
          }
        }
      }, {
        key: "_filterFromInput",
        value: function _filterFromInput(e) {
          if (!this.opened) {
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
          var _this4 = this;

          this._ensureItemsOrDataProvider(function () {
            _this4.items = oldItems;
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
          var _this5 = this;

          if (!arr) {
            return arr;
          }

          return arr.filter(function (item) {
            filter = filter ? filter.toString().toLowerCase() : ''; // Check if item contains input value.

            return _this5._getItemLabel(item).toString().toLowerCase().indexOf(filter) > -1;
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
          var _this6 = this;

          // async needed to reposition correctly after filtering
          // (especially when aligned on top of input)
          this.__repositionOverlayDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(this.__repositionOverlayDebouncer, // Long debounce: sizing updates invoke multiple styling rounds,
          // which is very slow in Edge
          _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["timeOut"].after(500), function () {
            _this6._resizeDropdown();

            _this6.$.overlay.updateViewportBoundaries();

            _this6.$.overlay.ensureItemsRendered();

            _this6.$.overlay._selector.notifyResize();

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
            this.close();
          }

          if (this.selectedItem !== e.detail.item) {
            this.selectedItem = e.detail.item;

            this._detectAndDispatchChange();
          }
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
      }], [{
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

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_overlay_theme_lumo_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_menu_overlay_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/menu-overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/menu-overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-combo-box-overlay\" theme-for=\"vaadin-combo-box-overlay\">\n  <template>\n    <style include=\"lumo-overlay lumo-menu-overlay-core\">\n      [part=\"content\"] {\n        padding: 0;\n      }\n\n      :host {\n        /* TODO: using a legacy mixin (unsupported) */\n        --iron-list-items-container: {\n          border-width: var(--lumo-space-xs);\n          border-style: solid;\n          border-color: transparent;\n        };\n      }\n\n      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */\n      :host([opened]) {\n        --iron-list-items-container_-_border-width: var(--lumo-space-xs);\n        --iron-list-items-container_-_border-style: solid;\n        --iron-list-items-container_-_border-color: transparent;\n      }\n\n      /* Loading state */\n\n      /* When items are empty, the sinner needs some room */\n      :host(:not([closing])) [part~=\"content\"] {\n        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));\n      }\n\n      [part~=\"overlay\"] {\n        position: relative;\n      }\n\n      :host([loading]) [part~=\"loader\"] {\n        box-sizing: border-box;\n        width: var(--lumo-icon-size-s);\n        height: var(--lumo-icon-size-s);\n        position: absolute;\n        z-index: 1;\n        left: var(--lumo-space-s);\n        right: var(--lumo-space-s);\n        top: var(--lumo-space-s);\n        margin-left: auto;\n        margin-inline-start: auto;\n        margin-inline-end: 0;\n        border: 2px solid transparent;\n        border-color:\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color-50pct)\n          var(--lumo-primary-color)\n          var(--lumo-primary-color);\n        border-radius: calc(0.5 * var(--lumo-icon-size-s));\n        opacity: 0;\n        animation:\n          1s linear infinite lumo-combo-box-loader-rotate,\n          .3s .1s lumo-combo-box-loader-fade-in both;\n        pointer-events: none;\n      }\n\n      @keyframes lumo-combo-box-loader-fade-in {\n        0% {\n          opacity: 0;\n        }\n\n        100% {\n          opacity: 1;\n        }\n      }\n\n      @keyframes lumo-combo-box-loader-rotate {\n        0% {\n          transform: rotate(0deg);\n        }\n\n        100% {\n          transform: rotate(360deg);\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js":
/*!******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js ***!
  \******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/color.js */ "./node_modules/@vaadin/vaadin-lumo-styles/color.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_item_theme_lumo_vaadin_item_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-item/theme/lumo/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-combo-box-item\" theme-for=\"vaadin-combo-box-item\">\n  <template>\n    <style include=\"lumo-item\">\n      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */\n\n      :host {\n        cursor: default;\n        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);\n        padding-left: calc(var(--lumo-border-radius) / 4);\n        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);\n        transition: background-color 100ms;\n        border-radius: var(--lumo-border-radius);\n        overflow: hidden;\n        --_lumo-item-selected-icon-display: block;\n      }\n\n      /* ShadyCSS workaround (show the selected item checkmark) */\n      :host::before {\n        display: block;\n      }\n\n      :host(:hover) {\n        background-color: var(--lumo-primary-color-10pct);\n      }\n\n      :host([focused]:not([disabled])) {\n        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);\n      }\n\n      @media (pointer: coarse) {\n        :host(:hover) {\n          background-color: transparent;\n        }\n\n        :host([focused]:not([disabled])) {\n          box-shadow: none;\n        }\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_combo_box_dropdown_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-combo-box-dropdown-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-dropdown-styles.js");
/* harmony import */ var _vaadin_combo_box_item_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-combo-box-item-styles.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-item-styles.js");
/* harmony import */ var _src_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../src/vaadin-combo-box-light.js */ "./node_modules/@vaadin/vaadin-combo-box/src/vaadin-combo-box-light.js");




/***/ }),

/***/ "./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-combo-box/vaadin-combo-box-light.js ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _theme_lumo_vaadin_combo_box_light_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./theme/lumo/vaadin-combo-box-light.js */ "./node_modules/@vaadin/vaadin-combo-box/theme/lumo/vaadin-combo-box-light.js");


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

      _createClass(VaadinItemMixin, null, [{
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

      function VaadinItemMixin() {
        var _this;

        _classCallCheck(this, VaadinItemMixin);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(VaadinItemMixin).call(this));
        /**
         * Submittable string value. The default value is the trimmed text content of the element.
         * @type {string}
         */

        _this.value;
        return _this;
      }

      _createClass(VaadinItemMixin, [{
        key: "ready",
        value: function ready() {
          var _this2 = this;

          _get(_getPrototypeOf(VaadinItemMixin.prototype), "ready", this).call(this);

          var attrValue = this.getAttribute('value');

          if (attrValue !== null) {
            this.value = attrValue;
          }

          this.addEventListener('focus', function (e) {
            return _this2._setFocused(true);
          }, true);
          this.addEventListener('blur', function (e) {
            return _this2._setFocused(false);
          }, true);
          this.addEventListener('mousedown', function (e) {
            _this2._setActive(_this2._mousedown = true);

            var mouseUpListener = function mouseUpListener() {
              _this2._setActive(_this2._mousedown = false);

              document.removeEventListener('mouseup', mouseUpListener);
            };

            document.addEventListener('mouseup', mouseUpListener);
          });
          this.addEventListener('keydown', function (e) {
            return _this2._onKeydown(e);
          });
          this.addEventListener('keyup', function (e) {
            return _this2._onKeyup(e);
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
          // reproducible in `<vaadin-dropdown-menu>` when closing overlay on select.


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

  function ItemElement() {
    _classCallCheck(this, ItemElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ItemElement).apply(this, arguments));
  }

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
      return '2.1.0';
    }
  }]);

  return ItemElement;
}(Object(_vaadin_item_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ItemMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(ItemElement.is, ItemElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-lumo-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_sizing_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/sizing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/sizing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_spacing_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/spacing.js */ "./node_modules/@vaadin/vaadin-lumo-styles/spacing.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_style_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/style.js */ "./node_modules/@vaadin/vaadin-lumo-styles/style.js");
/* harmony import */ var _vaadin_vaadin_lumo_styles_typography_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/typography.js */ "./node_modules/@vaadin/vaadin-lumo-styles/typography.js");





var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"lumo-item\" theme-for=\"vaadin-item\">\n  <template>\n    <style>\n      :host {\n        display: flex;\n        align-items: center;\n        box-sizing: border-box;\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        line-height: var(--lumo-line-height-xs);\n        padding: 0.5em 1em;\n        min-height: var(--lumo-size-m);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      /* Selectable items have a checkmark icon */\n      :host([tabindex])::before {\n        display: var(--_lumo-item-selected-icon-display, none);\n        content: var(--lumo-icons-checkmark);\n        font-family: lumo-icons;\n        font-size: var(--lumo-icon-size-m);\n        line-height: 1;\n        font-weight: normal;\n        width: 1em;\n        height: 1em;\n        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;\n        color: var(--lumo-primary-text-color);\n        flex: none;\n        opacity: 0;\n        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;\n      }\n\n      :host([selected])::before {\n        opacity: 1;\n      }\n\n      :host([active]:not([selected]))::before {\n        transform: scale(0.8);\n        opacity: 0;\n        transition-duration: 0s;\n      }\n\n      [part=\"content\"] {\n        flex: auto;\n      }\n\n      /* Disabled item */\n\n      :host([disabled]) {\n        color: var(--lumo-disabled-text-color);\n        cursor: default;\n        pointer-events: none;\n      }\n\n      /* Slotted icons */\n\n      :host ::slotted(iron-icon) {\n        width: var(--lumo-icon-size-m);\n        height: var(--lumo-icon-size-m);\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js":
/*!********************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_item_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-item-styles.js */ "./node_modules/@vaadin/vaadin-item/theme/lumo/vaadin-item-styles.js");
/* harmony import */ var _src_vaadin_item_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-item.js */ "./node_modules/@vaadin/vaadin-item/src/vaadin-item.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_lumo_styles_mixins_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-lumo-styles/mixins/overlay.js */ "./node_modules/@vaadin/vaadin-lumo-styles/mixins/overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"lumo-vaadin-overlay\" theme-for=\"vaadin-overlay\">\n  <template>\n    <style include=\"lumo-overlay\">\n      /* stylelint-disable no-empty-source */\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay.js ***!
  \**************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-overlay-styles.js */ "./node_modules/@vaadin/vaadin-overlay/theme/lumo/vaadin-overlay-styles.js");
/* harmony import */ var _src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");



/***/ })

}]);
//# sourceMappingURL=vendors~hui-alarm-panel-card-editor~hui-dialog-edit-view~hui-entities-card-editor~hui-entity-button-~704fb8c7.chunk.js.map