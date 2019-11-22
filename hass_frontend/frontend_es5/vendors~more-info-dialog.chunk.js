(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~more-info-dialog"],{

/***/ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        @apply --layout-horizontal;\n        @apply --layout-center;\n        position: relative;\n        height: 64px;\n        padding: 0 16px;\n        pointer-events: none;\n        font-size: var(--app-toolbar-font-size, 20px);\n      }\n\n      :host ::slotted(*) {\n        pointer-events: auto;\n      }\n\n      :host ::slotted(paper-icon-button) {\n        /* paper-icon-button/issues/33 */\n        font-size: 0;\n      }\n\n      :host ::slotted([main-title]),\n      :host ::slotted([condensed-title]) {\n        pointer-events: none;\n        @apply --layout-flex;\n      }\n\n      :host ::slotted([bottom-item]) {\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n      }\n\n      :host ::slotted([top-item]) {\n        position: absolute;\n        top: 0;\n        right: 0;\n        left: 0;\n      }\n\n      :host ::slotted([spacer]) {\n        margin-left: 64px;\n      }\n    </style>\n\n    <slot></slot>\n"]);

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
app-toolbar is a horizontal toolbar containing items that can be used for
label, navigation, search and actions.

### Example

Add a title to the toolbar.

```html
<app-toolbar>
  <div main-title>App name</div>
</app-toolbar>
```

Add a button to the left and right side of the toolbar.

```html
<app-toolbar>
  <paper-icon-button icon="menu"></paper-icon-button>
  <div main-title>App name</div>
  <paper-icon-button icon="search"></paper-icon-button>
</app-toolbar>
```

You can use the attributes `top-item` or `bottom-item` to completely fit an
element to the top or bottom of the toolbar respectively.

### Content attributes

Attribute            | Description
---------------------|---------------------------------------------------------
`main-title`         | The main title element.
`condensed-title`    | The title element if used inside a condensed app-header.
`spacer`             | Adds a left margin of `64px`.
`bottom-item`        | Sticks the element to the bottom of the toolbar.
`top-item`           | Sticks the element to the top of the toolbar.

### Styling

Custom property              | Description                  | Default
-----------------------------|------------------------------|-----------------------
`--app-toolbar-font-size`    | Toolbar font size            | 20px

@group App Elements
@element app-toolbar
@demo app-toolbar/demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject()),
  is: 'app-toolbar'
});

/***/ }),

/***/ "./node_modules/@polymer/iron-icon/iron-icon.js":
/*!******************************************************!*\
  !*** ./node_modules/@polymer/iron-icon/iron-icon.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_meta_iron_meta_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-meta/iron-meta.js */ "./node_modules/@polymer/iron-meta/iron-meta.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        @apply --layout-inline;\n        @apply --layout-center-center;\n        position: relative;\n\n        vertical-align: middle;\n\n        fill: var(--iron-icon-fill-color, currentcolor);\n        stroke: var(--iron-icon-stroke-color, none);\n\n        width: var(--iron-icon-width, 24px);\n        height: var(--iron-icon-height, 24px);\n        @apply --iron-icon;\n      }\n\n      :host([hidden]) {\n        display: none;\n      }\n    </style>\n"]);

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

The `iron-icon` element displays an icon. By default an icon renders as a 24px
square.

Example using src:

    <iron-icon src="star.png"></iron-icon>

Example setting size to 32px x 32px:

    <iron-icon class="big" src="big_star.png"></iron-icon>

    <style is="custom-style">
      .big {
        --iron-icon-height: 32px;
        --iron-icon-width: 32px;
      }
    </style>

The iron elements include several sets of icons. To use the default set of
icons, import `iron-icons.js` and use the `icon` attribute to specify an icon:

    <script type="module">
      import "@polymer/iron-icons/iron-icons.js";
    </script>

    <iron-icon icon="menu"></iron-icon>

To use a different built-in set of icons, import the specific
`iron-icons/<iconset>-icons.js`, and specify the icon as `<iconset>:<icon>`.
For example, to use a communication icon, you would use:

    <script type="module">
      import "@polymer/iron-icons/communication-icons.js";
    </script>

    <iron-icon icon="communication:email"></iron-icon>

You can also create custom icon sets of bitmap or SVG icons.

Example of using an icon named `cherry` from a custom iconset with the ID
`fruit`:

    <iron-icon icon="fruit:cherry"></iron-icon>

See `<iron-iconset>` and `<iron-iconset-svg>` for more information about how to
create a custom iconset.

See the `iron-icons` demo to see the icons available in the various iconsets.

### Styling

The following custom properties are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-icon` | Mixin applied to the icon | {}
`--iron-icon-width` | Width of the icon | `24px`
`--iron-icon-height` | Height of the icon | `24px`
`--iron-icon-fill-color` | Fill color of the svg icon | `currentcolor`
`--iron-icon-stroke-color` | Stroke color of the svg icon | none

@group Iron Elements
@element iron-icon
@demo demo/index.html
@hero hero.svg
@homepage polymer.github.io
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'iron-icon',
  properties: {
    /**
     * The name of the icon to use. The name should be of the form:
     * `iconset_name:icon_name`.
     */
    icon: {
      type: String
    },

    /**
     * The name of the theme to used, if one is specified by the
     * iconset.
     */
    theme: {
      type: String
    },

    /**
     * If using iron-icon without an iconset, you can set the src to be
     * the URL of an individual icon image file. Note that this will take
     * precedence over a given icon attribute.
     */
    src: {
      type: String
    },

    /**
     * @type {!IronMeta}
     */
    _meta: {
      value: _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_5__["Base"].create('iron-meta', {
        type: 'iconset'
      })
    }
  },
  observers: ['_updateIcon(_meta, isAttached)', '_updateIcon(theme, isAttached)', '_srcChanged(src, isAttached)', '_iconChanged(icon, isAttached)'],
  _DEFAULT_ICONSET: 'icons',
  _iconChanged: function _iconChanged(icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function _srcChanged(src) {
    this._updateIcon();
  },
  _usesIconset: function _usesIconset() {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function _updateIcon() {
    if (this._usesIconset()) {
      if (this._img && this._img.parentNode) {
        Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).removeChild(this._img);
      }

      if (this._iconName === '') {
        if (this._iconset) {
          this._iconset.removeIcon(this);
        }
      } else if (this._iconsetName && this._meta) {
        this._iconset =
        /** @type {?Polymer.Iconset} */
        this._meta.byKey(this._iconsetName);

        if (this._iconset) {
          this._iconset.applyIcon(this, this._iconName, this.theme);

          this.unlisten(window, 'iron-iconset-added', '_updateIcon');
        } else {
          this.listen(window, 'iron-iconset-added', '_updateIcon');
        }
      }
    } else {
      if (this._iconset) {
        this._iconset.removeIcon(this);
      }

      if (!this._img) {
        this._img = document.createElement('img');
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.draggable = false;
      }

      this._img.src = this.src;
      Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this.root).appendChild(this._img);
    }
  }
});

/***/ }),

/***/ "./node_modules/@polymer/iron-media-query/iron-media-query.js":
/*!********************************************************************!*\
  !*** ./node_modules/@polymer/iron-media-query/iron-media-query.js ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
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
`iron-media-query` can be used to data bind to a CSS media query.
The `query` property is a bare CSS media query.
The `query-matches` property is a boolean representing whether the page matches
that media query.

Example:

```html
<iron-media-query query="(min-width: 600px)" query-matches="{{queryMatches}}">
</iron-media-query>
```

@group Iron Elements
@demo demo/index.html
@hero hero.svg
@element iron-media-query
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: 'iron-media-query',
  properties: {
    /**
     * The Boolean return value of the media query.
     */
    queryMatches: {
      type: Boolean,
      value: false,
      readOnly: true,
      notify: true
    },

    /**
     * The CSS media query to evaluate.
     */
    query: {
      type: String,
      observer: 'queryChanged'
    },

    /**
     * If true, the query attribute is assumed to be a complete media query
     * string rather than a single media feature.
     */
    full: {
      type: Boolean,
      value: false
    },

    /**
     * @type {function(MediaQueryList)}
     */
    _boundMQHandler: {
      value: function value() {
        return this.queryHandler.bind(this);
      }
    },

    /**
     * @type {MediaQueryList}
     */
    _mq: {
      value: null
    }
  },
  attached: function attached() {
    this.style.display = 'none';
    this.queryChanged();
  },
  detached: function detached() {
    this._remove();
  },
  _add: function _add() {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },
  _remove: function _remove() {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }

    this._mq = null;
  },
  queryChanged: function queryChanged() {
    this._remove();

    var query = this.query;

    if (!query) {
      return;
    }

    if (!this.full && query[0] !== '(') {
      query = '(' + query + ')';
    }

    this._mq = window.matchMedia(query);

    this._add();

    this.queryHandler(this._mq);
  },
  queryHandler: function queryHandler(mq) {
    this._setQueryMatches(mq.matches);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js ***!
  \******************************************************************************/
/*! exports provided: PaperDialogBehaviorImpl, PaperDialogBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehaviorImpl", function() { return PaperDialogBehaviorImpl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperDialogBehavior", function() { return PaperDialogBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
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
  Use `Polymer.PaperDialogBehavior` and `paper-dialog-shared-styles.html` to
  implement a Material Design dialog.

  For example, if `<paper-dialog-impl>` implements this behavior:

      <paper-dialog-impl>
          <h2>Header</h2>
          <div>Dialog body</div>
          <div class="buttons">
              <paper-button dialog-dismiss>Cancel</paper-button>
              <paper-button dialog-confirm>Accept</paper-button>
          </div>
      </paper-dialog-impl>

  `paper-dialog-shared-styles.html` provide styles for a header, content area,
  and an action area for buttons. Use the `<h2>` tag for the header and the
  `buttons` class for the action area. You can use the `paper-dialog-scrollable`
  element (in its own repository) if you need a scrolling content area.

  Use the `dialog-dismiss` and `dialog-confirm` attributes on interactive
  controls to close the dialog. If the user dismisses the dialog with
  `dialog-confirm`, the `closingReason` will update to include `confirmed:
  true`.

  ### Accessibility

  This element has `role="dialog"` by default. Depending on the context, it may
  be more appropriate to override this attribute with `role="alertdialog"`.

  If `modal` is set, the element will prevent the focus from exiting the
  element. It will also ensure that focus remains in the dialog.

  @hero hero.svg
  @demo demo/index.html
  @polymerBehavior PaperDialogBehavior
 */

var PaperDialogBehaviorImpl = {
  hostAttributes: {
    'role': 'dialog',
    'tabindex': '-1'
  },
  properties: {
    /**
     * If `modal` is true, this implies `no-cancel-on-outside-click`,
     * `no-cancel-on-esc-key` and `with-backdrop`.
     */
    modal: {
      type: Boolean,
      value: false
    },
    __readied: {
      type: Boolean,
      value: false
    }
  },
  observers: ['_modalChanged(modal, __readied)'],
  listeners: {
    'tap': '_onDialogClick'
  },

  /**
   * @return {void}
   */
  ready: function ready() {
    // Only now these properties can be read.
    this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
    this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
    this.__prevWithBackdrop = this.withBackdrop;
    this.__readied = true;
  },
  _modalChanged: function _modalChanged(modal, readied) {
    // modal implies noCancelOnOutsideClick, noCancelOnEscKey and withBackdrop.
    // We need to wait for the element to be ready before we can read the
    // properties values.
    if (!readied) {
      return;
    }

    if (modal) {
      this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
      this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
      this.__prevWithBackdrop = this.withBackdrop;
      this.noCancelOnOutsideClick = true;
      this.noCancelOnEscKey = true;
      this.withBackdrop = true;
    } else {
      // If the value was changed to false, let it false.
      this.noCancelOnOutsideClick = this.noCancelOnOutsideClick && this.__prevNoCancelOnOutsideClick;
      this.noCancelOnEscKey = this.noCancelOnEscKey && this.__prevNoCancelOnEscKey;
      this.withBackdrop = this.withBackdrop && this.__prevWithBackdrop;
    }
  },
  _updateClosingReasonConfirmed: function _updateClosingReasonConfirmed(confirmed) {
    this.closingReason = this.closingReason || {};
    this.closingReason.confirmed = confirmed;
  },

  /**
   * Will dismiss the dialog if user clicked on an element with dialog-dismiss
   * or dialog-confirm attribute.
   */
  _onDialogClick: function _onDialogClick(event) {
    // Search for the element with dialog-confirm or dialog-dismiss,
    // from the root target until this (excluded).
    var path = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_2__["dom"])(event).path;

    for (var i = 0, l = path.indexOf(this); i < l; i++) {
      var target = path[i];

      if (target.hasAttribute && (target.hasAttribute('dialog-dismiss') || target.hasAttribute('dialog-confirm'))) {
        this._updateClosingReasonConfirmed(target.hasAttribute('dialog-confirm'));

        this.close();
        event.stopPropagation();
        break;
      }
    }
  }
};
/** @polymerBehavior */

var PaperDialogBehavior = [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"], PaperDialogBehaviorImpl];

/***/ }),

/***/ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_styles_typography_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/typography.js */ "./node_modules/@polymer/paper-styles/typography.js");
/* harmony import */ var _polymer_paper_styles_shadow_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/shadow.js */ "./node_modules/@polymer/paper-styles/shadow.js");
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
### Styling

The following custom properties and mixins are available for styling.

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-background-color` | Dialog background color | `--primary-background-color`
`--paper-dialog-color` | Dialog foreground color | `--primary-text-color`
`--paper-dialog` | Mixin applied to the dialog | `{}`
`--paper-dialog-title` | Mixin applied to the title (`<h2>`) element | `{}`
`--paper-dialog-button-color` | Button area foreground color | `--default-primary-color`
*/





var $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = "<dom-module id=\"paper-dialog-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: block;\n        margin: 24px 40px;\n\n        background: var(--paper-dialog-background-color, var(--primary-background-color));\n        color: var(--paper-dialog-color, var(--primary-text-color));\n\n        @apply --paper-font-body1;\n        @apply --shadow-elevation-16dp;\n        @apply --paper-dialog;\n      }\n\n      :host > ::slotted(*) {\n        margin-top: 20px;\n        padding: 0 24px;\n      }\n\n      :host > ::slotted(.no-padding) {\n        padding: 0;\n      }\n\n      \n      :host > ::slotted(*:first-child) {\n        margin-top: 24px;\n      }\n\n      :host > ::slotted(*:last-child) {\n        margin-bottom: 24px;\n      }\n\n      /* In 1.x, this selector was `:host > ::content h2`. In 2.x <slot> allows\n      to select direct children only, which increases the weight of this\n      selector, so we have to re-define first-child/last-child margins below. */\n      :host > ::slotted(h2) {\n        position: relative;\n        margin: 0;\n\n        @apply --paper-font-title;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-top. */\n      :host > ::slotted(h2:first-child) {\n        margin-top: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      /* Apply mixin again, in case it sets margin-bottom. */\n      :host > ::slotted(h2:last-child) {\n        margin-bottom: 24px;\n        @apply --paper-dialog-title;\n      }\n\n      :host > ::slotted(.paper-dialog-buttons),\n      :host > ::slotted(.buttons) {\n        position: relative;\n        padding: 8px 8px 8px 24px;\n        margin: 0;\n\n        color: var(--paper-dialog-button-color, var(--primary-color));\n\n        @apply --layout-horizontal;\n        @apply --layout-end-justified;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/src/vaadin-button.js ***!
  \*****************************************************************/
/*! exports provided: ButtonElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonElement", function() { return ButtonElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        outline: none;\n        white-space: nowrap;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      /* Ensure the button is always aligned on the baseline */\n      .vaadin-button-container::before {\n        content: \"\\\\2003\";\n        display: inline-block;\n        width: 0;\n      }\n\n      .vaadin-button-container {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        text-align: center;\n        width: 100%;\n        height: 100%;\n        min-height: inherit;\n        text-shadow: inherit;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        user-select: none;\n      }\n\n      [part=\"prefix\"],\n      [part=\"suffix\"] {\n        flex: none;\n      }\n\n      [part=\"label\"] {\n        white-space: nowrap;\n        overflow: hidden;\n        text-overflow: ellipsis;\n      }\n\n      #button {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        opacity: 0;\n        cursor: inherit;\n      }\n    </style>\n    <div class=\"vaadin-button-container\">\n      <div part=\"prefix\">\n        <slot name=\"prefix\"></slot>\n      </div>\n      <div part=\"label\">\n        <slot></slot>\n      </div>\n      <div part=\"suffix\">\n        <slot name=\"suffix\"></slot>\n      </div>\n    </div>\n    <button id=\"button\" type=\"button\"></button>\n"]);

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
 * `<vaadin-button>` is a Web Component providing an accessible and customizable button.
 *
 * ```html
 * <vaadin-button>
 * </vaadin-button>
 * ```
 *
 * ```js
 * document.querySelector('vaadin-button').addEventListener('click', () => alert('Hello World!'));
 * ```
 *
 * ### Styling
 *
 * The following shadow DOM parts are exposed for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label (text) inside the button
 * `prefix` | A slot for e.g. an icon before the label
 * `suffix` | A slot for e.g. an icon after the label
 *
 *
 * The following attributes are exposed for styling:
 *
 * Attribute | Description
 * --------- | -----------
 * `active` | Set when the button is pressed down, either with mouse, touch or the keyboard.
 * `disabled` | Set when the button is disabled.
 * `focus-ring` | Set when the button is focused using the keyboard.
 * `focused` | Set when the button is focused.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

var ButtonElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(ButtonElement, _ElementMixin);

  function ButtonElement() {
    _classCallCheck(this, ButtonElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(ButtonElement).apply(this, arguments));
  }

  _createClass(ButtonElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(ButtonElement.prototype), "ready", this).call(this); // Leaving default role in the native button, makes navigation announcement
      // being different when using focus navigation (tab) versus using normal
      // navigation (arrows). The first way announces the label on a button
      // since the focus is moved programmatically, and the second on a group.


      this.setAttribute('role', 'button');
      this.$.button.setAttribute('role', 'presentation');

      this._addActiveListeners();
    }
    /**
     * @protected
     */

  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(ButtonElement.prototype), "disconnectedCallback", this).call(this); // `active` state is preserved when the element is disconnected between keydown and keyup events.
      // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.


      if (this.hasAttribute('active')) {
        this.removeAttribute('active');
      }
    }
  }, {
    key: "_addActiveListeners",
    value: function _addActiveListeners() {
      var _this = this;

      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'down', function () {
        return !_this.disabled && _this.setAttribute('active', '');
      });
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'up', function () {
        return _this.removeAttribute('active');
      });
      this.addEventListener('keydown', function (e) {
        return !_this.disabled && [13, 32].indexOf(e.keyCode) >= 0 && _this.setAttribute('active', '');
      });
      this.addEventListener('keyup', function () {
        return _this.removeAttribute('active');
      });
      this.addEventListener('blur', function () {
        return _this.removeAttribute('active');
      });
    }
    /**
     * @protected
     */

  }, {
    key: "focusElement",
    get: function get() {
      return this.$.button;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-button';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.2.1';
    }
  }]);

  return ButtonElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))));

customElements.define(ButtonElement.is, ButtonElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button-styles.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button-styles.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_shadow_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/shadow.js */ "./node_modules/@vaadin/vaadin-material-styles/shadow.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-button\" theme-for=\"vaadin-button\">\n  <template>\n    <style>\n      :host {\n        padding: 8px;\n        min-width: 64px;\n        box-sizing: border-box;\n        display: inline-flex;\n        align-items: baseline;\n        justify-content: center;\n        border-radius: 4px;\n        color: var(--material-primary-text-color);\n        font-family: var(--material-font-family);\n        text-transform: uppercase;\n        font-size: var(--material-button-font-size);\n        line-height: 20px;\n        font-weight: 500;\n        letter-spacing: 0.05em;\n        white-space: nowrap;\n        overflow: hidden;\n        transition: box-shadow 0.2s;\n        -webkit-tap-highlight-color: transparent;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      @-moz-document url-prefix() {\n        :host {\n          vertical-align: -13px;\n        }\n      }\n\n      :host::before,\n      :host::after {\n        content: \"\";\n        pointer-events: none;\n        position: absolute;\n        border-radius: inherit;\n        opacity: 0;\n        background-color: currentColor;\n      }\n\n      :host::before {\n        width: 100%;\n        height: 100%;\n        top: 0;\n        left: 0;\n        transition: opacity 0.5s;\n      }\n\n      :host::after {\n        border-radius: 50%;\n        width: 320px;\n        height: 320px;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        transition: all 0.9s;\n      }\n\n      [part=\"label\"] ::slotted(*) {\n        vertical-align: middle;\n      }\n\n      :host(:hover)::before,\n      :host([focus-ring])::before {\n        opacity: 0.08;\n        transition-duration: 0.2s;\n      }\n\n      :host([active])::before {\n        opacity: 0.16;\n        transition: opacity 0.4s;\n      }\n\n      :host([active])::after {\n        transform: translate(-50%, -50%) scale(0.0000001); /* animation works weirdly with scale(0) */\n        opacity: 0.1;\n        transition: 0s;\n      }\n\n      :host(:hover:not([active]))::after {\n        transform: translate(-50%, -50%) scale(1);\n        opacity: 0;\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n        color: var(--material-disabled-text-color);\n      }\n\n      /* Contained and outline variants */\n      :host([theme~=\"contained\"]),\n      :host([theme~=\"outlined\"]) {\n        padding: 8px 16px;\n      }\n\n      :host([theme~=\"outlined\"]) {\n        box-shadow: inset 0 0 0 1px var(--_material-button-outline-color, rgba(0, 0, 0, 0.2));\n      }\n\n      :host([theme~=\"contained\"]:not([disabled])) {\n        background-color: var(--material-primary-color);\n        color: var(--material-primary-contrast-color);\n        box-shadow: var(--material-shadow-elevation-2dp);\n      }\n\n      :host([theme~=\"contained\"][disabled]) {\n        background-color: var(--material-secondary-background-color);\n      }\n\n      :host([theme~=\"contained\"]:hover) {\n        box-shadow: var(--material-shadow-elevation-4dp);\n      }\n\n      :host([theme~=\"contained\"][active]) {\n        box-shadow: var(--material-shadow-elevation-8dp);\n      }\n\n      /* Icon alignment */\n\n      [part] ::slotted(iron-icon) {\n        display: block;\n        width: 18px;\n        height: 18px;\n      }\n\n      [part=\"prefix\"] ::slotted(iron-icon) {\n        margin-right: 8px;\n        margin-left: -4px;\n      }\n\n      [part=\"suffix\"] ::slotted(iron-icon) {\n        margin-left: 8px;\n        margin-right: -4px;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_button_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-button-styles.js */ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button-styles.js");
/* harmony import */ var _src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js ***!
  \***************************************************************************************/
/*! exports provided: ControlStateMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlStateMixin", function() { return ControlStateMixin; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

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
 * A private mixin to avoid problems with dynamic properties and Polymer Analyzer.
 * No need to expose these properties in the API docs.
 * @polymerMixin
 */
var TabIndexMixin = function TabIndexMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinTabIndexMixin, _superClass);

      function VaadinTabIndexMixin() {
        _classCallCheck(this, VaadinTabIndexMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinTabIndexMixin).apply(this, arguments));
      }

      _createClass(VaadinTabIndexMixin, null, [{
        key: "properties",
        get: function get() {
          var properties = {
            /**
             * Internal property needed to listen to `tabindex` attribute changes.
             *
             * For changing the tabindex of this component use the native `tabIndex` property.
             * @private
             */
            tabindex: {
              type: Number,
              value: 0,
              reflectToAttribute: true,
              observer: '_tabindexChanged'
            }
          };

          if (window.ShadyDOM) {
            // ShadyDOM browsers need the `tabIndex` in order to notify when the user changes it programmatically.
            properties['tabIndex'] = properties.tabindex;
          }

          return properties;
        }
      }]);

      return VaadinTabIndexMixin;
    }(superClass)
  );
};
/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 * @polymerMixin
 */


var ControlStateMixin = function ControlStateMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_TabIndexMixin) {
      _inherits(VaadinControlStateMixin, _TabIndexMixin);

      function VaadinControlStateMixin() {
        _classCallCheck(this, VaadinControlStateMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinControlStateMixin).apply(this, arguments));
      }

      _createClass(VaadinControlStateMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          this.addEventListener('focusin', function (e) {
            if (e.composedPath()[0] === _this) {
              _this._focus(e);
            } else if (e.composedPath().indexOf(_this.focusElement) !== -1 && !_this.disabled) {
              _this._setFocused(true);
            }
          });
          this.addEventListener('focusout', function (e) {
            return _this._setFocused(false);
          }); // In super.ready() other 'focusin' and 'focusout' listeners might be
          // added, so we call it after our own ones to ensure they execute first.
          // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
          // input field on iOS after “Done” is pressed.

          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "ready", this).call(this); // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
          // where focusout event does not go out of shady DOM because composed property in the event is not true


          var ensureEventComposed = function ensureEventComposed(e) {
            if (!e.composed) {
              e.target.dispatchEvent(new CustomEvent(e.type, {
                bubbles: true,
                composed: true,
                cancelable: false
              }));
            }
          };

          this.shadowRoot.addEventListener('focusin', ensureEventComposed);
          this.shadowRoot.addEventListener('focusout', ensureEventComposed);
          this.addEventListener('keydown', function (e) {
            if (!e.defaultPrevented && e.keyCode === 9) {
              if (e.shiftKey) {
                // Flag is checked in _focus event handler.
                _this._isShiftTabbing = true;
                HTMLElement.prototype.focus.apply(_this);

                _this._setFocused(false); // Event handling in IE is asynchronous and the flag is removed asynchronously as well


                setTimeout(function () {
                  return _this._isShiftTabbing = false;
                }, 0);
              } else {
                // Workaround for FF63-65 bug that causes the focus to get lost when
                // blurring a slotted component with focusable shadow root content
                // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
                // TODO: Remove when safe
                var firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);

                if (firefox && parseFloat(firefox[1]) >= 63 && parseFloat(firefox[1]) < 66 && _this.parentNode && _this.nextSibling) {
                  var fakeTarget = document.createElement('input');
                  fakeTarget.style.position = 'absolute';
                  fakeTarget.style.opacity = 0;
                  fakeTarget.tabIndex = _this.tabIndex;

                  _this.parentNode.insertBefore(fakeTarget, _this.nextSibling);

                  fakeTarget.focus();
                  fakeTarget.addEventListener('focusout', function () {
                    return _this.parentNode.removeChild(fakeTarget);
                  });
                }
              }
            }
          });

          if (this.autofocus && !this.focused && !this.disabled) {
            window.requestAnimationFrame(function () {
              _this._focus();

              _this._setFocused(true);

              _this.setAttribute('focus-ring', '');
            });
          }

          this._boundKeydownListener = this._bodyKeydownListener.bind(this);
          this._boundKeyupListener = this._bodyKeyupListener.bind(this);
        }
        /**
         * @protected
         */

      }, {
        key: "connectedCallback",
        value: function connectedCallback() {
          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "connectedCallback", this).call(this);

          document.body.addEventListener('keydown', this._boundKeydownListener, true);
          document.body.addEventListener('keyup', this._boundKeyupListener, true);
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "disconnectedCallback", this).call(this);

          document.body.removeEventListener('keydown', this._boundKeydownListener, true);
          document.body.removeEventListener('keyup', this._boundKeyupListener, true); // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
          // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

          if (this.hasAttribute('focused')) {
            this._setFocused(false);
          }
        }
      }, {
        key: "_setFocused",
        value: function _setFocused(focused) {
          if (focused) {
            this.setAttribute('focused', '');
          } else {
            this.removeAttribute('focused');
          } // focus-ring is true when the element was focused from the keyboard.
          // Focus Ring [A11ycasts]: https://youtu.be/ilj2P5-5CjI


          if (focused && this._tabPressed) {
            this.setAttribute('focus-ring', '');
          } else {
            this.removeAttribute('focus-ring');
          }
        }
      }, {
        key: "_bodyKeydownListener",
        value: function _bodyKeydownListener(e) {
          this._tabPressed = e.keyCode === 9;
        }
      }, {
        key: "_bodyKeyupListener",
        value: function _bodyKeyupListener() {
          this._tabPressed = false;
        }
        /**
         * Any element extending this mixin is required to implement this getter.
         * It returns the actual focusable element in the component.
         */

      }, {
        key: "_focus",
        value: function _focus(e) {
          if (this._isShiftTabbing) {
            return;
          }

          this.focusElement.focus();

          this._setFocused(true);
        }
        /**
         * Moving the focus from the host element causes firing of the blur event what leads to problems in IE.
         * @private
         */

      }, {
        key: "focus",
        value: function focus() {
          if (!this.focusElement || this.disabled) {
            return;
          }

          this.focusElement.focus();

          this._setFocused(true);
        }
        /**
         * Native bluring in the host element does nothing because it does not have the focus.
         * In chrome it works, but not in FF.
         * @private
         */

      }, {
        key: "blur",
        value: function blur() {
          this.focusElement.blur();

          this._setFocused(false);
        }
      }, {
        key: "_disabledChanged",
        value: function _disabledChanged(disabled) {
          this.focusElement.disabled = disabled;

          if (disabled) {
            this.blur();
            this._previousTabIndex = this.tabindex;
            this.tabindex = -1;
            this.setAttribute('aria-disabled', 'true');
          } else {
            if (typeof this._previousTabIndex !== 'undefined') {
              this.tabindex = this._previousTabIndex;
            }

            this.removeAttribute('aria-disabled');
          }
        }
      }, {
        key: "_tabindexChanged",
        value: function _tabindexChanged(tabindex) {
          if (tabindex !== undefined) {
            this.focusElement.tabIndex = tabindex;
          }

          if (this.disabled && this.tabindex) {
            // If tabindex attribute was changed while checkbox was disabled
            if (this.tabindex !== -1) {
              this._previousTabIndex = this.tabindex;
            }

            this.tabindex = tabindex = undefined;
          }

          if (window.ShadyDOM) {
            this.setProperties({
              tabIndex: tabindex,
              tabindex: tabindex
            });
          }
        }
        /**
         * @protected
         */

      }, {
        key: "click",
        value: function click() {
          if (!this.disabled) {
            _get(_getPrototypeOf(VaadinControlStateMixin.prototype), "click", this).call(this);
          }
        }
      }, {
        key: "focusElement",
        get: function get() {
          window.console.warn("Please implement the 'focusElement' property in <".concat(this.localName, ">"));
          return this;
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Specify that this control should have input focus when the page loads.
             */
            autofocus: {
              type: Boolean
            },

            /**
             * Stores the previous value of tabindex attribute of the disabled element
             */
            _previousTabIndex: {
              type: Number
            },

            /**
             * If true, the user cannot interact with this element.
             */
            disabled: {
              type: Boolean,
              observer: '_disabledChanged',
              reflectToAttribute: true
            },
            _isShiftTabbing: {
              type: Boolean
            }
          };
        }
      }]);

      return VaadinControlStateMixin;
    }(TabIndexMixin(superClass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js ***!
  \**********************************************************************************/
/*! exports provided: DatePickerHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerHelper", function() { return DatePickerHelper; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var DatePickerHelper =
/*#__PURE__*/
function () {
  function VaadinDatePickerHelper() {
    _classCallCheck(this, VaadinDatePickerHelper);
  }

  _createClass(VaadinDatePickerHelper, null, [{
    key: "_getISOWeekNumber",

    /**
     * Get ISO 8601 week number for the given date.
     *
     * @param {Date} Date object
     * @return {Number} Week number
     */
    value: function _getISOWeekNumber(date) {
      // Ported from Vaadin Framework method com.vaadin.client.DateTimeService.getISOWeekNumber(date)
      var dayOfWeek = date.getDay(); // 0 == sunday
      // ISO 8601 use weeks that start on monday so we use
      // mon=1,tue=2,...sun=7;

      if (dayOfWeek === 0) {
        dayOfWeek = 7;
      } // Find nearest thursday (defines the week in ISO 8601). The week number
      // for the nearest thursday is the same as for the target date.


      var nearestThursdayDiff = 4 - dayOfWeek; // 4 is thursday

      var nearestThursday = new Date(date.getTime() + nearestThursdayDiff * 24 * 3600 * 1000);
      var firstOfJanuary = new Date(0, 0);
      firstOfJanuary.setFullYear(nearestThursday.getFullYear());
      var timeDiff = nearestThursday.getTime() - firstOfJanuary.getTime(); // Rounding the result, as the division doesn't result in an integer
      // when the given date is inside daylight saving time period.

      var daysSinceFirstOfJanuary = Math.round(timeDiff / (24 * 3600 * 1000));
      return Math.floor(daysSinceFirstOfJanuary / 7 + 1);
    }
    /**
     * Check if two dates are equal.
     *
     * @param {Date} date1
     * @param {Date} date2
     * @return {Boolean} True if the given date objects refer to the same date
     */

  }, {
    key: "_dateEquals",
    value: function _dateEquals(date1, date2) {
      return date1 instanceof Date && date2 instanceof Date && date1.getFullYear() === date2.getFullYear() && date1.getMonth() === date2.getMonth() && date1.getDate() === date2.getDate();
    }
    /**
     * Check if the given date is in the range of allowed dates.
     *
     * @param {Date} date The date to check
     * @param {Date} min Range start
     * @param {Date} max Range end
     * @return {Boolean} True if the date is in the range
     */

  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return (!min || date >= min) && (!max || date <= max);
    }
    /**
     * Get closest date from array of dates.
     *
     * @param {Date} date The date to compare dates with
     * @param {Array} dates Array of date objects
     * @return {Date} Closest date
     */

  }, {
    key: "_getClosestDate",
    value: function _getClosestDate(date, dates) {
      return dates.filter(function (date) {
        return date !== undefined;
      }).reduce(function (closestDate, candidate) {
        if (!candidate) {
          return closestDate;
        }

        if (!closestDate) {
          return candidate;
        }

        var candidateDiff = Math.abs(date.getTime() - candidate.getTime());
        var closestDateDiff = Math.abs(closestDate.getTime() - date.getTime());
        return candidateDiff < closestDateDiff ? candidate : closestDate;
      });
    }
    /**
     * Extracts the basic component parts of a date (day, month and year)
     * to the expected format.
     */

  }, {
    key: "_extractDateParts",
    value: function _extractDateParts(date) {
      return {
        day: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
      };
    }
  }]);

  return VaadinDatePickerHelper;
}();

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js ***!
  \*********************************************************************************/
/*! exports provided: DatePickerMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerMixin", function() { return DatePickerMixin; });
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-resizable-behavior/iron-resizable-behavior.js */ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class.js */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
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

var DatePickerMixin = function DatePickerMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_mixinBehaviors) {
      _inherits(VaadinDatePickerMixin, _mixinBehaviors);

      function VaadinDatePickerMixin() {
        _classCallCheck(this, VaadinDatePickerMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinDatePickerMixin).apply(this, arguments));
      }

      _createClass(VaadinDatePickerMixin, [{
        key: "ready",
        value: function ready() {
          var _this = this;

          _get(_getPrototypeOf(VaadinDatePickerMixin.prototype), "ready", this).call(this);

          this._boundOnScroll = this._onScroll.bind(this);
          this._boundFocus = this._focus.bind(this);
          this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(this);

          var isClearButton = function isClearButton(e) {
            var path = e.composedPath();
            var inputIndex = path.indexOf(_this._inputElement);
            return path.slice(0, inputIndex).filter(function (el) {
              return el.getAttribute && el.getAttribute('part') === 'clear-button';
            }).length === 1;
          };

          Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__["addListener"])(this, 'tap', function (e) {
            // FIXME(platosha): use preventDefault in the text field clear button,
            // then the following composedPath check could be simplified down
            // to `if (!e.defaultPrevented)`.
            // https://github.com/vaadin/vaadin-text-field/issues/352
            if (!isClearButton(e)) {
              _this.open();
            }
          });
          this.addEventListener('touchend', function (e) {
            if (!isClearButton(e)) {
              e.preventDefault();
            }
          });
          this.addEventListener('keydown', this._onKeydown.bind(this));
          this.addEventListener('input', this._onUserInput.bind(this));
          this.addEventListener('focus', function (e) {
            return _this._noInput && e.target.blur();
          });
          this.addEventListener('blur', function (e) {
            return !_this.opened && _this.validate();
          });
        }
      }, {
        key: "_initOverlay",
        value: function _initOverlay() {
          var _this2 = this;

          this.$.overlay.removeAttribute('disable-upgrade');
          this._overlayInitialized = true;
          this.$.overlay.addEventListener('opened-changed', function (e) {
            return _this2.opened = e.detail.value;
          });

          this._overlayContent.addEventListener('close', this._close.bind(this));

          this._overlayContent.addEventListener('focus-input', this._focusAndSelect.bind(this));

          this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._boundFocus); // Keep focus attribute in focusElement for styling

          this._overlayContent.addEventListener('focus', function () {
            return _this2.focusElement._setFocused(true);
          });

          this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
        }
        /**
         * @protected
         */

      }, {
        key: "disconnectedCallback",
        value: function disconnectedCallback() {
          _get(_getPrototypeOf(VaadinDatePickerMixin.prototype), "disconnectedCallback", this).call(this);

          if (this._overlayInitialized) {
            this.$.overlay.removeEventListener('vaadin-overlay-escape-press', this._boundFocus);
          }

          this.opened = false;
        }
        /**
         * Opens the dropdown.
         */

      }, {
        key: "open",
        value: function open() {
          if (!this.disabled && !this.readonly) {
            this.opened = true;
          }
        }
      }, {
        key: "_close",
        value: function _close(e) {
          if (e) {
            e.stopPropagation();
          }

          this._focus();

          this.close();
        }
        /**
         * Closes the dropdown.
         */

      }, {
        key: "close",
        value: function close() {
          if (this._overlayInitialized) {
            this.$.overlay.close();
          }
        }
      }, {
        key: "_parseDate",
        value: function _parseDate(str) {
          // Parsing with RegExp to ensure correct format
          var parts = /^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(str);

          if (!parts) {
            return;
          }

          var date = new Date(0, 0); // Wrong date (1900-01-01), but with midnight in local time

          date.setFullYear(parseInt(parts[1], 10));
          date.setMonth(parseInt(parts[2], 10) - 1);
          date.setDate(parseInt(parts[3], 10));
          return date;
        }
      }, {
        key: "_isNoInput",
        value: function _isNoInput(fullscreen, ios, i18n) {
          return !this._inputElement || fullscreen || ios || !i18n.parseDate;
        }
      }, {
        key: "_formatISO",
        value: function _formatISO(date) {
          if (!(date instanceof Date)) {
            return '';
          }

          var pad = function pad(num) {
            var fmt = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '00';
            return (fmt + num).substr((fmt + num).length - fmt.length);
          };

          var yearSign = '';
          var yearFmt = '0000';
          var yearAbs = date.getFullYear();

          if (yearAbs < 0) {
            yearAbs = -yearAbs;
            yearSign = '-';
            yearFmt = '000000';
          } else if (date.getFullYear() >= 10000) {
            yearSign = '+';
            yearFmt = '000000';
          }

          var year = yearSign + pad(yearAbs, yearFmt);
          var month = pad(date.getMonth() + 1);
          var day = pad(date.getDate());
          return [year, month, day].join('-');
        }
      }, {
        key: "_openedChanged",
        value: function _openedChanged(opened) {
          if (opened && !this._overlayInitialized) {
            this._initOverlay();
          }

          if (this._overlayInitialized) {
            this.$.overlay.opened = opened;
          }

          if (opened) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_selectedDateChanged",
        value: function _selectedDateChanged(selectedDate, formatDate) {
          if (selectedDate === undefined || formatDate === undefined) {
            return;
          }

          if (this.__userInputOccurred) {
            this.__dispatchChange = true;
          }

          var inputValue = selectedDate && formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(selectedDate));

          var value = this._formatISO(selectedDate);

          if (value !== this.value) {
            this.validate(inputValue);
            this.value = value;
          }

          this.__userInputOccurred = false;
          this.__dispatchChange = false;
          this._ignoreFocusedDateChange = true;
          this._focusedDate = selectedDate;
          this._ignoreFocusedDateChange = false;
          this._inputValue = selectedDate ? inputValue : '';
        }
      }, {
        key: "_focusedDateChanged",
        value: function _focusedDateChanged(focusedDate, formatDate) {
          if (focusedDate === undefined || formatDate === undefined) {
            return;
          }

          this.__userInputOccurred = true;

          if (!this._ignoreFocusedDateChange && !this._noInput) {
            this._inputValue = focusedDate ? formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(focusedDate)) : '';
          }
        }
      }, {
        key: "_updateHasValue",
        value: function _updateHasValue(value) {
          if (value) {
            this.setAttribute('has-value', '');
          } else {
            this.removeAttribute('has-value');
          }
        }
      }, {
        key: "__getOverlayTheme",
        value: function __getOverlayTheme(theme, overlayInitialized) {
          if (overlayInitialized) {
            return theme;
          }
        }
      }, {
        key: "_handleDateChange",
        value: function _handleDateChange(property, value, oldValue) {
          if (!value) {
            this[property] = '';
            return;
          }

          var date = this._parseDate(value);

          if (!date) {
            this.value = oldValue;
            return;
          }

          if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(this[property], date)) {
            this[property] = date;
          }
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(value, oldValue) {
          if (this.__dispatchChange) {
            this.dispatchEvent(new CustomEvent('change', {
              bubbles: true
            }));
          }

          this._handleDateChange('_selectedDate', value, oldValue);
        }
      }, {
        key: "_minChanged",
        value: function _minChanged(value, oldValue) {
          this._handleDateChange('_minDate', value, oldValue);
        }
      }, {
        key: "_maxChanged",
        value: function _maxChanged(value, oldValue) {
          this._handleDateChange('_maxDate', value, oldValue);
        }
      }, {
        key: "_updateAlignmentAndPosition",
        value: function _updateAlignmentAndPosition() {
          if (!this._overlayInitialized) {
            return;
          }

          if (!this._fullscreen) {
            var inputRect = this._inputElement.getBoundingClientRect();

            var bottomAlign = inputRect.top > window.innerHeight / 2;
            var rightAlign = inputRect.left + this.clientWidth / 2 > window.innerWidth / 2;

            if (rightAlign) {
              var viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
              this.$.overlay.setAttribute('right-aligned', '');
              this.$.overlay.style.removeProperty('left');
              this.$.overlay.style.right = viewportWidth - inputRect.right + 'px';
            } else {
              this.$.overlay.removeAttribute('right-aligned');
              this.$.overlay.style.removeProperty('right');
              this.$.overlay.style.left = inputRect.left + 'px';
            }

            if (bottomAlign) {
              var viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
              this.$.overlay.setAttribute('bottom-aligned', '');
              this.$.overlay.style.removeProperty('top');
              this.$.overlay.style.bottom = viewportHeight - inputRect.top + 'px';
            } else {
              this.$.overlay.removeAttribute('bottom-aligned');
              this.$.overlay.style.removeProperty('bottom');
              this.$.overlay.style.top = inputRect.bottom + 'px';
            }
          }

          this.$.overlay.setAttribute('dir', getComputedStyle(this._inputElement).getPropertyValue('direction'));

          this._overlayContent._repositionYearScroller();
        }
      }, {
        key: "_fullscreenChanged",
        value: function _fullscreenChanged() {
          if (this._overlayInitialized && this.$.overlay.opened) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_onOverlayOpened",
        value: function _onOverlayOpened() {
          this._openedWithFocusRing = this.hasAttribute('focus-ring') || this.focusElement && this.focusElement.hasAttribute('focus-ring');

          var parsedInitialPosition = this._parseDate(this.initialPosition);

          var initialPosition = this._selectedDate || this._overlayContent.initialPosition || parsedInitialPosition || new Date();

          if (parsedInitialPosition || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(initialPosition, this._minDate, this._maxDate)) {
            this._overlayContent.initialPosition = initialPosition;
          } else {
            this._overlayContent.initialPosition = _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._getClosestDate(initialPosition, [this._minDate, this._maxDate]);
          }

          this._overlayContent.scrollToDate(this._overlayContent.focusedDate || this._overlayContent.initialPosition); // Have a default focused date


          this._ignoreFocusedDateChange = true;
          this._overlayContent.focusedDate = this._overlayContent.focusedDate || this._overlayContent.initialPosition;
          this._ignoreFocusedDateChange = false;
          window.addEventListener('scroll', this._boundOnScroll, true);
          this.addEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

          if (this._webkitOverflowScroll) {
            this._touchPrevented = this._preventWebkitOverflowScrollingTouch(this.parentElement);
          }

          if (this._focusOverlayOnOpen) {
            this._overlayContent.focus();

            this._focusOverlayOnOpen = false;
          } else {
            this._focus();
          }

          if (this._noInput && this.focusElement) {
            this.focusElement.blur();
          }

          this.updateStyles();
          this._ignoreAnnounce = false;
        } // A hack needed for iOS to prevent dropdown from being clipped in an
        // ancestor container with -webkit-overflow-scrolling: touch;

      }, {
        key: "_preventWebkitOverflowScrollingTouch",
        value: function _preventWebkitOverflowScrollingTouch(element) {
          var result = [];

          while (element) {
            if (window.getComputedStyle(element).webkitOverflowScrolling === 'touch') {
              var oldInlineValue = element.style.webkitOverflowScrolling;
              element.style.webkitOverflowScrolling = 'auto';
              result.push({
                element: element,
                oldInlineValue: oldInlineValue
              });
            }

            element = element.parentElement;
          }

          return result;
        }
      }, {
        key: "_onOverlayClosed",
        value: function _onOverlayClosed() {
          this._ignoreAnnounce = true;
          window.removeEventListener('scroll', this._boundOnScroll, true);
          this.removeEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

          if (this._touchPrevented) {
            this._touchPrevented.forEach(function (prevented) {
              return prevented.element.style.webkitOverflowScrolling = prevented.oldInlineValue;
            });

            this._touchPrevented = [];
          }

          this.updateStyles(); // Select the parsed input or focused date

          this._ignoreFocusedDateChange = true;

          if (this.i18n.parseDate) {
            var inputValue = this._inputValue || '';
            var dateObject = this.i18n.parseDate(inputValue);

            var parsedDate = dateObject && this._parseDate("".concat(dateObject.year, "-").concat(dateObject.month + 1, "-").concat(dateObject.day));

            if (this._isValidDate(parsedDate)) {
              this._selectedDate = parsedDate;
            } else {
              this._selectedDate = null;
              this._inputValue = inputValue;
            }
          } else if (this._focusedDate) {
            this._selectedDate = this._focusedDate;
          }

          this._ignoreFocusedDateChange = false;

          if (this._nativeInput && this._nativeInput.selectionStart) {
            this._nativeInput.selectionStart = this._nativeInput.selectionEnd;
          }

          this.validate();
        }
        /**
         * Returns true if `value` is valid, and sets the `invalid` flag appropriately.
         *
         * @param {string} value Value to validate. Optional, defaults to user's input value.
         * @return {boolean} True if the value is valid and sets the `invalid` flag appropriately
         */

      }, {
        key: "validate",
        value: function validate(value) {
          // reset invalid state on the underlying text field
          this.invalid = false;
          value = value !== undefined ? value : this._inputValue;
          return !(this.invalid = !this.checkValidity(value));
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         *
         * Override the `checkValidity` method for custom validations.
         *
         * @param {string} value Value to validate. Optional, defaults to the selected date.
         * @return {boolean} True if the value is valid
         */

      }, {
        key: "checkValidity",
        value: function checkValidity(value) {
          var inputValid = !value || this._selectedDate && value === this.i18n.formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(this._selectedDate));

          var minMaxValid = !this._selectedDate || _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(this._selectedDate, this._minDate, this._maxDate);

          var inputValidity = true;

          if (this._inputElement) {
            if (this._inputElement.checkValidity) {
              // vaadin native input elements have the checkValidity method
              inputValidity = this._inputElement.checkValidity(value);
            } else if (this._inputElement.validate) {
              // iron-form-elements have the validate API
              inputValidity = this._inputElement.validate(value);
            }
          }

          return inputValid && minMaxValid && inputValidity;
        }
      }, {
        key: "_onScroll",
        value: function _onScroll(e) {
          if (e.target === window || !this._overlayContent.contains(e.target)) {
            this._updateAlignmentAndPosition();
          }
        }
      }, {
        key: "_focus",
        value: function _focus() {
          if (this._noInput) {
            this._overlayInitialized && this._overlayContent.focus();
          } else {
            this._inputElement.focus();
          }
        }
      }, {
        key: "_focusAndSelect",
        value: function _focusAndSelect() {
          this._focus();

          this._setSelectionRange(0, this._inputValue.length);
        }
      }, {
        key: "_setSelectionRange",
        value: function _setSelectionRange(a, b) {
          if (this._nativeInput && this._nativeInput.setSelectionRange) {
            this._nativeInput.setSelectionRange(a, b);
          }
        }
        /**
         * Keyboard Navigation
         */

      }, {
        key: "_eventKey",
        value: function _eventKey(e) {
          var keys = ['down', 'up', 'enter', 'esc', 'tab'];

          for (var i = 0; i < keys.length; i++) {
            var k = keys[i];

            if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
              return k;
            }
          }
        }
      }, {
        key: "_isValidDate",
        value: function _isValidDate(d) {
          return d && !isNaN(d.getTime());
        }
      }, {
        key: "_onKeydown",
        value: function _onKeydown(e) {
          if (this._noInput) {
            // The input element cannot be readonly as it would conflict with
            // the required attribute. Both are not allowed on an input element.
            // Therefore we prevent default on most keydown events.
            var allowedKeys = [9 // tab
            ];

            if (allowedKeys.indexOf(e.keyCode) === -1) {
              e.preventDefault();
            }
          }

          switch (this._eventKey(e)) {
            case 'down':
            case 'up':
              // prevent scrolling the page with arrows
              e.preventDefault();

              if (this.opened) {
                this._overlayContent.focus();

                this._overlayContent._onKeydown(e);
              } else {
                this._focusOverlayOnOpen = true;
                this.open();
              }

              break;

            case 'enter':
              {
                var dateObject = this.i18n.parseDate(this._inputValue);

                var parsedDate = dateObject && this._parseDate(dateObject.year + '-' + (dateObject.month + 1) + '-' + dateObject.day);

                if (this._overlayInitialized && this._overlayContent.focusedDate && this._isValidDate(parsedDate)) {
                  this._selectedDate = this._overlayContent.focusedDate;
                }

                this.close();
                break;
              }

            case 'esc':
              this._focusedDate = this._selectedDate;

              this._close();

              break;

            case 'tab':
              if (this.opened) {
                e.preventDefault(); // Clear the selection range (remains visible on IE)

                this._setSelectionRange(0, 0);

                if (e.shiftKey) {
                  this._overlayContent.focusCancel();
                } else {
                  this._overlayContent.focus();

                  this._overlayContent.revealDate(this._focusedDate);
                }
              }

              break;
          }
        }
      }, {
        key: "_validateInput",
        value: function _validateInput(date, min, max) {
          if (date && (min || max)) {
            this.invalid = !_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(date, min, max);
          }
        }
      }, {
        key: "_onUserInput",
        value: function _onUserInput(e) {
          if (!this.opened && this._inputElement.value) {
            this.open();
          }

          this._userInputValueChanged();
        }
      }, {
        key: "_userInputValueChanged",
        value: function _userInputValueChanged(value) {
          if (this.opened && this._inputValue) {
            var dateObject = this.i18n.parseDate && this.i18n.parseDate(this._inputValue);

            var parsedDate = dateObject && this._parseDate("".concat(dateObject.year, "-").concat(dateObject.month + 1, "-").concat(dateObject.day));

            if (this._isValidDate(parsedDate)) {
              this._ignoreFocusedDateChange = true;

              if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(parsedDate, this._focusedDate)) {
                this._focusedDate = parsedDate;
              }

              this._ignoreFocusedDateChange = false;
            }
          }
        }
      }, {
        key: "_announceFocusedDate",
        value: function _announceFocusedDate(_focusedDate, opened, _ignoreAnnounce) {
          if (opened && !_ignoreAnnounce) {
            this._overlayContent.announceFocusedDate();
          }
        }
      }, {
        key: "_inputElement",
        get: function get() {
          return this._input();
        }
      }, {
        key: "_nativeInput",
        get: function get() {
          if (this._inputElement) {
            // vaadin-text-field's input is focusElement
            // iron-input's input is inputElement
            return this._inputElement.focusElement ? this._inputElement.focusElement : this._inputElement.inputElement ? this._inputElement.inputElement : window.unwrap ? window.unwrap(this._inputElement) : this._inputElement;
          }
        }
      }, {
        key: "_overlayContent",
        get: function get() {
          return this.$.overlay.content.querySelector('#overlay-content');
        }
        /**
         * Fired when the user commits a value change.
         *
         * @event change
         */

      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * The current selected date.
             */
            _selectedDate: {
              type: Date
            },
            _focusedDate: Date,

            /**
             * The value for this element.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            value: {
              type: String,
              observer: '_valueChanged',
              notify: true,
              value: ''
            },

            /**
             * Set to true to mark the input as required.
             */
            required: {
              type: Boolean,
              value: false
            },

            /**
             * The name of this element.
             */
            name: {
              type: String
            },

            /**
             * Date which should be visible when there is no value selected.
             *
             * The same date formats as for the `value` property are supported.
             */
            initialPosition: String,

            /**
             * The label for this element.
             */
            label: String,

            /**
             * Set true to open the date selector overlay.
             */
            opened: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              observer: '_openedChanged'
            },

            /**
             * Set true to display ISO-8601 week numbers in the calendar. Notice that
             * displaying week numbers is only supported when `i18n.firstDayOfWeek`
             * is 1 (Monday).
             */
            showWeekNumbers: {
              type: Boolean
            },
            _fullscreen: {
              value: false,
              observer: '_fullscreenChanged'
            },
            _fullscreenMediaQuery: {
              value: '(max-width: 420px), (max-height: 420px)'
            },
            // An array of ancestor elements whose -webkit-overflow-scrolling is forced from value
            // 'touch' to value 'auto' in order to prevent them from clipping the dropdown. iOS only.
            _touchPrevented: Array,

            /**
             * The object used to localize this component.
             * To change the default localization, replace the entire
             * _i18n_ object or just the property you want to modify.
             *
             * The object has the following JSON structure and default values:
                 {
                  // An array with the full names of months starting
                  // with January.
                  monthNames: [
                    'January', 'February', 'March', 'April', 'May',
                    'June', 'July', 'August', 'September',
                    'October', 'November', 'December'
                  ],
                   // An array of weekday names starting with Sunday. Used
                  // in screen reader announcements.
                  weekdays: [
                    'Sunday', 'Monday', 'Tuesday', 'Wednesday',
                    'Thursday', 'Friday', 'Saturday'
                  ],
                   // An array of short weekday names starting with Sunday.
                  // Displayed in the calendar.
                  weekdaysShort: [
                    'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'
                  ],
                   // An integer indicating the first day of the week
                  // (0 = Sunday, 1 = Monday, etc.).
                  firstDayOfWeek: 0,
                   // Used in screen reader announcements along with week
                  // numbers, if they are displayed.
                  week: 'Week',
                   // Translation of the Calendar icon button title.
                  calendar: 'Calendar',
                   // Translation of the Clear icon button title.
                  clear: 'Clear',
                   // Translation of the Today shortcut button text.
                  today: 'Today',
                   // Translation of the Cancel button text.
                  cancel: 'Cancel',
                   // A function to format given `Object` as
                  // date string. Object is in the format `{ day: ..., month: ..., year: ... }`
                  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
                  formatDate: d => {
                    // returns a string representation of the given
                    // object in 'MM/DD/YYYY' -format
                  },
                   // A function to parse the given text to an `Object` in the format `{ day: ..., month: ..., year: ... }`.
                  // Must properly parse (at least) text formatted by `formatDate`.
                  // Setting the property to null will disable keyboard input feature.
                  // Note: The argument month is 0-based. This means that January = 0 and December = 11.
                  parseDate: text => {
                    // Parses a string in 'MM/DD/YY', 'MM/DD' or 'DD' -format to
                    // an `Object` in the format `{ day: ..., month: ..., year: ... }`.
                  }
                   // A function to format given `monthName` and
                  // `fullYear` integer as calendar title string.
                  formatTitle: (monthName, fullYear) => {
                    return monthName + ' ' + fullYear;
                  }
                }
              *
             * @default {English/US}
             */
            i18n: {
              type: Object,
              value: function value() {
                return {
                  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
                  weekdays: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
                  weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                  firstDayOfWeek: 0,
                  week: 'Week',
                  calendar: 'Calendar',
                  clear: 'Clear',
                  today: 'Today',
                  cancel: 'Cancel',
                  formatDate: function formatDate(d) {
                    var yearStr = String(d.year).replace(/\d+/, function (y) {
                      return '0000'.substr(y.length) + y;
                    });
                    return [d.month + 1, d.day, yearStr].join('/');
                  },
                  parseDate: function parseDate(text) {
                    var parts = text.split('/');
                    var today = new Date();
                    var date,
                        month = today.getMonth(),
                        year = today.getFullYear();

                    if (parts.length === 3) {
                      year = parseInt(parts[2]);

                      if (parts[2].length < 3 && year >= 0) {
                        year += year < 50 ? 2000 : 1900;
                      }

                      month = parseInt(parts[0]) - 1;
                      date = parseInt(parts[1]);
                    } else if (parts.length === 2) {
                      month = parseInt(parts[0]) - 1;
                      date = parseInt(parts[1]);
                    } else if (parts.length === 1) {
                      date = parseInt(parts[0]);
                    }

                    if (date !== undefined) {
                      return {
                        day: date,
                        month: month,
                        year: year
                      };
                    }
                  },
                  formatTitle: function formatTitle(monthName, fullYear) {
                    return monthName + ' ' + fullYear;
                  }
                };
              }
            },

            /**
             * The earliest date that can be selected. All earlier dates will be disabled.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            min: {
              type: String,
              observer: '_minChanged'
            },

            /**
             * The latest date that can be selected. All later dates will be disabled.
             *
             * Supported date formats:
             * - ISO 8601 `"YYYY-MM-DD"` (default)
             * - 6-digit extended ISO 8601 `"+YYYYYY-MM-DD"`, `"-YYYYYY-MM-DD"`
             *
             * @type {String}
             */
            max: {
              type: String,
              observer: '_maxChanged'
            },

            /**
             * The earliest date that can be selected. All earlier dates will be disabled.
             */
            _minDate: {
              type: Date,
              // null does not work here because minimizer passes undefined to overlay (#351)
              value: ''
            },

            /**
             * The latest date that can be selected. All later dates will be disabled.
             */
            _maxDate: {
              type: Date,
              value: ''
            },
            _noInput: {
              type: Boolean,
              computed: '_isNoInput(_fullscreen, _ios, i18n, i18n.*)'
            },
            _ios: {
              type: Boolean,
              value: navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)
            },
            _webkitOverflowScroll: {
              type: Boolean,
              value: document.createElement('div').style.webkitOverflowScrolling === ''
            },
            _ignoreAnnounce: {
              value: true
            },
            _focusOverlayOnOpen: Boolean,
            _overlayInitialized: Boolean
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_updateHasValue(value)', '_validateInput(_selectedDate, _minDate, _maxDate)', '_selectedDateChanged(_selectedDate, i18n.formatDate)', '_focusedDateChanged(_focusedDate, i18n.formatDate)', '_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)'];
        }
      }]);

      return VaadinDatePickerMixin;
    }(Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], subclass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js */ "./node_modules/@polymer/iron-a11y-keys-behavior/iron-a11y-keys-behavior.js");
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _vaadin_vaadin_button_src_vaadin_button_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-button/src/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/src/vaadin-button.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js");
/* harmony import */ var _vaadin_infinite_scroller_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./vaadin-infinite-scroller.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @polymer/polymer/lib/utils/gestures.js */ "./node_modules/@polymer/polymer/lib/utils/gestures.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused$=\"[[_focused]]\" part=\"month\" theme$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current$=\"[[_isCurrentYear(index)]]\" selected$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"], ["\n    <style>\n      :host {\n        display: flex;\n        flex-direction: column;\n        height: 100%;\n        width: 100%;\n        outline: none;\n        background: #fff;\n      }\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        flex-shrink: 0;\n        flex-wrap: nowrap;\n        align-items: center;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay-header\"] {\n        display: none;\n      }\n\n      [part=\"label\"] {\n        flex-grow: 1;\n      }\n\n      [part=\"clear-button\"]:not([showclear]) {\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"] {\n        display: flex;\n      }\n\n      [part=\"years-toggle-button\"][desktop] {\n        display: none;\n      }\n\n      :host(:not([years-visible])) [part=\"years-toggle-button\"]::before {\n        transform: rotate(180deg);\n      }\n\n      #scrollers {\n        display: flex;\n        height: 100%;\n        width: 100%;\n        position: relative;\n        overflow: hidden;\n      }\n\n      [part=\"months\"],\n      [part=\"years\"] {\n        height: 100%;\n      }\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 270px;\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        bottom: 0;\n      }\n\n      #scrollers[desktop] [part=\"months\"] {\n        right: 50px;\n        transform: none !important;\n      }\n\n      [part=\"years\"] {\n        --vaadin-infinite-scroller-item-height: 80px;\n        width: 50px;\n        position: absolute;\n        right: 0;\n        transform: translateX(100%);\n        -webkit-tap-highlight-color: transparent;\n        -webkit-user-select: none;\n        -moz-user-select: none;\n        -ms-user-select: none;\n        user-select: none;\n        /* Center the year scroller position. */\n        --vaadin-infinite-scroller-buffer-offset: 50%;\n      }\n\n      #scrollers[desktop] [part=\"years\"] {\n        position: absolute;\n        transform: none !important;\n      }\n\n      [part=\"years\"]::before {\n        content: '';\n        display: block;\n        background: transparent;\n        width: 0;\n        height: 0;\n        position: absolute;\n        left: 0;\n        top: 50%;\n        transform: translateY(-50%);\n        border-width: 6px;\n        border-style: solid;\n        border-color: transparent;\n        border-left-color: #000;\n      }\n\n      :host(.animate) [part=\"months\"],\n      :host(.animate) [part=\"years\"] {\n        transition: all 200ms;\n      }\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: space-between;\n        z-index: 2;\n        flex-shrink: 0;\n      }\n\n      [part~=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 40px;\n      }\n\n      [part~=\"years-toggle-button\"] {\n        position: absolute;\n        top: auto;\n        right: 8px;\n        bottom: 0;\n        z-index: 1;\n        padding: 8px;\n      }\n\n      #announcer {\n        display: inline-block;\n        position: fixed;\n        clip: rect(0, 0, 0, 0);\n        clip-path: inset(100%);\n      }\n    </style>\n\n    <div id=\"announcer\" role=\"alert\" aria-live=\"polite\">\n      [[i18n.calendar]]\n    </div>\n\n    <div part=\"overlay-header\" on-touchend=\"_preventDefault\" desktop\\$=\"[[_desktopMode]]\" aria-hidden=\"true\">\n      <div part=\"label\">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>\n      <div part=\"clear-button\" on-tap=\"_clear\" showclear\\$=\"[[_showClear(selectedDate)]]\"></div>\n      <div part=\"toggle-button\" on-tap=\"_cancel\"></div>\n\n      <div part=\"years-toggle-button\" desktop\\$=\"[[_desktopMode]]\" on-tap=\"_toggleYearScroller\" aria-hidden=\"true\">\n        [[_yearAfterXMonths(_visibleMonthIndex)]]\n      </div>\n    </div>\n\n    <div id=\"scrollers\" desktop\\$=\"[[_desktopMode]]\" on-track=\"_track\">\n      <vaadin-infinite-scroller id=\"monthScroller\" on-custom-scroll=\"_onMonthScroll\" on-touchstart=\"_onMonthScrollTouchStart\" buffer-size=\"3\" active=\"[[initialPosition]]\" part=\"months\">\n        <template>\n          <vaadin-month-calendar i18n=\"[[i18n]]\" month=\"[[_dateAfterXMonths(index)]]\" selected-date=\"{{selectedDate}}\" focused-date=\"[[focusedDate]]\" ignore-taps=\"[[_ignoreTaps]]\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[minDate]]\" max-date=\"[[maxDate]]\" focused\\$=\"[[_focused]]\" part=\"month\" theme\\$=\"[[theme]]\">\n          </vaadin-month-calendar>\n        </template>\n      </vaadin-infinite-scroller>\n      <vaadin-infinite-scroller id=\"yearScroller\" on-tap=\"_onYearTap\" on-custom-scroll=\"_onYearScroll\" on-touchstart=\"_onYearScrollTouchStart\" buffer-size=\"12\" active=\"[[initialPosition]]\" part=\"years\">\n        <template>\n          <div part=\"year-number\" role=\"button\" current\\$=\"[[_isCurrentYear(index)]]\" selected\\$=\"[[_isSelectedYear(index, selectedDate)]]\">\n            [[_yearAfterXYears(index)]]\n          </div>\n          <div part=\"year-separator\" aria-hidden=\"true\"></div>\n        </template>\n      </vaadin-infinite-scroller>\n    </div>\n\n    <div on-touchend=\"_preventDefault\" role=\"toolbar\" part=\"toolbar\">\n      <vaadin-button id=\"todayButton\" part=\"today-button\" disabled=\"[[!_isTodayAllowed(minDate, maxDate)]]\" on-tap=\"_onTodayTap\">\n        [[i18n.today]]\n      </vaadin-button>\n      <vaadin-button id=\"cancelButton\" part=\"cancel-button\" on-tap=\"_cancel\">\n        [[i18n.cancel]]\n      </vaadin-button>\n    </div>\n\n    <iron-media-query query=\"(min-width: 375px)\" query-matches=\"{{_desktopMode}}\"></iron-media-query>\n"]);

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
 * @memberof Vaadin
 * @private
 */

var DatePickerOverlayContentElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(DatePickerOverlayContentElement, _ThemableMixin);

  function DatePickerOverlayContentElement() {
    _classCallCheck(this, DatePickerOverlayContentElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerOverlayContentElement).apply(this, arguments));
  }

  _createClass(DatePickerOverlayContentElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(DatePickerOverlayContentElement.prototype), "ready", this).call(this);

      this.setAttribute('tabindex', 0);
      this.addEventListener('keydown', this._onKeydown.bind(this));
      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["addListener"])(this, 'tap', this._stopPropagation);
      this.addEventListener('focus', this._onOverlayFocus.bind(this));
      this.addEventListener('blur', this._onOverlayBlur.bind(this));
    }
    /**
     * Fired when the scroller reaches the target scrolling position.
     * @event scroll-animation-finished
     * @param {Number} detail.position new position
     * @param {Number} detail.oldPosition old position
     */

  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      _get(_getPrototypeOf(DatePickerOverlayContentElement.prototype), "connectedCallback", this).call(this);

      this._closeYearScroller();

      this._toggleAnimateClass(true);

      Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["setTouchAction"])(this.$.scrollers, 'pan-y');
      _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability();
    }
  }, {
    key: "announceFocusedDate",
    value: function announceFocusedDate() {
      var focusedDate = this._currentlyFocusedDate();

      var announce = [];

      if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, new Date())) {
        announce.push(this.i18n.today);
      }

      announce = announce.concat([this.i18n.weekdays[focusedDate.getDay()], focusedDate.getDate(), this.i18n.monthNames[focusedDate.getMonth()], focusedDate.getFullYear()]);

      if (this.showWeekNumbers && this.i18n.firstDayOfWeek === 1) {
        announce.push(this.i18n.week);
        announce.push(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getISOWeekNumber(focusedDate));
      }

      this.dispatchEvent(new CustomEvent('iron-announce', {
        bubbles: true,
        composed: true,
        detail: {
          text: announce.join(' ')
        }
      }));
      return;
    }
    /**
     * Focuses the cancel button
     */

  }, {
    key: "focusCancel",
    value: function focusCancel() {
      this.$.cancelButton.focus();
    }
    /**
     * Scrolls the list to the given Date.
     */

  }, {
    key: "scrollToDate",
    value: function scrollToDate(date, animate) {
      this._scrollToPosition(this._differenceInMonths(date, this._originDate), animate);
    }
  }, {
    key: "_focusedDateChanged",
    value: function _focusedDateChanged(focusedDate) {
      this.revealDate(focusedDate);
    }
  }, {
    key: "_isCurrentYear",
    value: function _isCurrentYear(yearsFromNow) {
      return yearsFromNow === 0;
    }
  }, {
    key: "_isSelectedYear",
    value: function _isSelectedYear(yearsFromNow, selectedDate) {
      if (selectedDate) {
        return selectedDate.getFullYear() === this._originDate.getFullYear() + yearsFromNow;
      }
    }
    /**
     * Scrolls the month and year scrollers enough to reveal the given date.
     */

  }, {
    key: "revealDate",
    value: function revealDate(date) {
      if (date) {
        var diff = this._differenceInMonths(date, this._originDate);

        var scrolledAboveViewport = this.$.monthScroller.position > diff;
        var visibleItems = this.$.monthScroller.clientHeight / this.$.monthScroller.itemHeight;
        var scrolledBelowViewport = this.$.monthScroller.position + visibleItems - 1 < diff;

        if (scrolledAboveViewport) {
          this._scrollToPosition(diff, true);
        } else if (scrolledBelowViewport) {
          this._scrollToPosition(diff - visibleItems + 1, true);
        }
      }
    }
  }, {
    key: "_onOverlayFocus",
    value: function _onOverlayFocus() {
      this._focused = true;
    }
  }, {
    key: "_onOverlayBlur",
    value: function _onOverlayBlur() {
      this._focused = false;
    }
  }, {
    key: "_initialPositionChanged",
    value: function _initialPositionChanged(initialPosition) {
      this.scrollToDate(initialPosition);
    }
  }, {
    key: "_repositionYearScroller",
    value: function _repositionYearScroller() {
      this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
      this.$.yearScroller.position = (this.$.monthScroller.position + this._originDate.getMonth()) / 12;
    }
  }, {
    key: "_repositionMonthScroller",
    value: function _repositionMonthScroller() {
      this.$.monthScroller.position = this.$.yearScroller.position * 12 - this._originDate.getMonth();
      this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
    }
  }, {
    key: "_onMonthScroll",
    value: function _onMonthScroll() {
      this._repositionYearScroller();

      this._doIgnoreTaps();
    }
  }, {
    key: "_onYearScroll",
    value: function _onYearScroll() {
      this._repositionMonthScroller();

      this._doIgnoreTaps();
    }
  }, {
    key: "_onYearScrollTouchStart",
    value: function _onYearScrollTouchStart() {
      var _this = this;

      this._notTapping = false;
      setTimeout(function () {
        return _this._notTapping = true;
      }, 300);

      this._repositionMonthScroller();
    }
  }, {
    key: "_onMonthScrollTouchStart",
    value: function _onMonthScrollTouchStart() {
      this._repositionYearScroller();
    }
  }, {
    key: "_doIgnoreTaps",
    value: function _doIgnoreTaps() {
      var _this2 = this;

      this._ignoreTaps = true;
      this._debouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__["timeOut"].after(300), function () {
        return _this2._ignoreTaps = false;
      });
    }
  }, {
    key: "_formatDisplayed",
    value: function _formatDisplayed(date, formatDate, label) {
      if (date) {
        return formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._extractDateParts(date));
      } else {
        return label;
      }
    }
  }, {
    key: "_onTodayTap",
    value: function _onTodayTap() {
      var today = new Date();

      if (Math.abs(this.$.monthScroller.position - this._differenceInMonths(today, this._originDate)) < 0.001) {
        // Select today only if the month scroller is positioned approximately
        // at the beginning of the current month
        this.selectedDate = today;

        this._close();
      } else {
        this._scrollToCurrentMonth();
      }
    }
  }, {
    key: "_scrollToCurrentMonth",
    value: function _scrollToCurrentMonth() {
      if (this.focusedDate) {
        this.focusedDate = new Date();
      }

      this.scrollToDate(new Date(), true);
    }
  }, {
    key: "_showClear",
    value: function _showClear(selectedDate) {
      return !!selectedDate;
    }
  }, {
    key: "_onYearTap",
    value: function _onYearTap(e) {
      if (!this._ignoreTaps && !this._notTapping) {
        var scrollDelta = e.detail.y - (this.$.yearScroller.getBoundingClientRect().top + this.$.yearScroller.clientHeight / 2);
        var yearDelta = scrollDelta / this.$.yearScroller.itemHeight;

        this._scrollToPosition(this.$.monthScroller.position + yearDelta * 12, true);
      }
    }
  }, {
    key: "_scrollToPosition",
    value: function _scrollToPosition(targetPosition, animate) {
      var _this3 = this;

      if (this._targetPosition !== undefined) {
        this._targetPosition = targetPosition;
        return;
      }

      if (!animate) {
        this.$.monthScroller.position = targetPosition;
        this._targetPosition = undefined;

        this._repositionYearScroller();

        return;
      }

      this._targetPosition = targetPosition; // http://gizma.com/easing/

      var easingFunction = function easingFunction(t, b, c, d) {
        t /= d / 2;

        if (t < 1) {
          return c / 2 * t * t + b;
        }

        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
      };

      var duration = animate ? 300 : 0;
      var start = 0;
      var initialPosition = this.$.monthScroller.position;

      var smoothScroll = function smoothScroll(timestamp) {
        start = start || timestamp;
        var currentTime = timestamp - start;

        if (currentTime < duration) {
          var currentPos = easingFunction(currentTime, initialPosition, _this3._targetPosition - initialPosition, duration);
          _this3.$.monthScroller.position = currentPos;
          window.requestAnimationFrame(smoothScroll);
        } else {
          _this3.dispatchEvent(new CustomEvent('scroll-animation-finished', {
            bubbles: true,
            composed: true,
            detail: {
              position: _this3._targetPosition,
              oldPosition: initialPosition
            }
          }));

          _this3.$.monthScroller.position = _this3._targetPosition;
          _this3._targetPosition = undefined;
        }

        setTimeout(_this3._repositionYearScroller.bind(_this3), 1);
      }; // Start the animation.


      window.requestAnimationFrame(smoothScroll);
    }
  }, {
    key: "_limit",
    value: function _limit(value, range) {
      return Math.min(range.max, Math.max(range.min, value));
    }
  }, {
    key: "_handleTrack",
    value: function _handleTrack(e) {
      // Check if horizontal movement threshold (dx) not exceeded or
      // scrolling fast vertically (ddy).
      if (Math.abs(e.detail.dx) < 10 || Math.abs(e.detail.ddy) > 10) {
        return;
      } // If we're flinging quickly -> start animating already.


      if (Math.abs(e.detail.ddx) > this._yearScrollerWidth / 3) {
        this._toggleAnimateClass(true);
      }

      var newTranslateX = this._translateX + e.detail.ddx;
      this._translateX = this._limit(newTranslateX, {
        min: 0,
        max: this._yearScrollerWidth
      });
    }
  }, {
    key: "_track",
    value: function _track(e) {
      if (this._desktopMode) {
        // No need to track for swipe gestures on desktop.
        return;
      }

      switch (e.detail.state) {
        case 'start':
          this._toggleAnimateClass(false);

          break;

        case 'track':
          this._handleTrack(e);

          break;

        case 'end':
          this._toggleAnimateClass(true);

          if (this._translateX >= this._yearScrollerWidth / 2) {
            this._closeYearScroller();
          } else {
            this._openYearScroller();
          }

          break;
      }
    }
  }, {
    key: "_toggleAnimateClass",
    value: function _toggleAnimateClass(enable) {
      if (enable) {
        this.classList.add('animate');
      } else {
        this.classList.remove('animate');
      }
    }
  }, {
    key: "_toggleYearScroller",
    value: function _toggleYearScroller() {
      this._isYearScrollerVisible() ? this._closeYearScroller() : this._openYearScroller();
    }
  }, {
    key: "_openYearScroller",
    value: function _openYearScroller() {
      this._translateX = 0;
      this.setAttribute('years-visible', '');
    }
  }, {
    key: "_closeYearScroller",
    value: function _closeYearScroller() {
      this.removeAttribute('years-visible');
      this._translateX = this._yearScrollerWidth;
    }
  }, {
    key: "_isYearScrollerVisible",
    value: function _isYearScrollerVisible() {
      return this._translateX < this._yearScrollerWidth / 2;
    }
  }, {
    key: "_translateXChanged",
    value: function _translateXChanged(x) {
      if (!this._desktopMode) {
        this.$.monthScroller.style.transform = 'translateX(' + (x - this._yearScrollerWidth) + 'px)';
        this.$.yearScroller.style.transform = 'translateX(' + x + 'px)';
      }
    }
  }, {
    key: "_yearAfterXYears",
    value: function _yearAfterXYears(index) {
      var result = new Date(this._originDate);
      result.setFullYear(parseInt(index) + this._originDate.getFullYear());
      return result.getFullYear();
    }
  }, {
    key: "_yearAfterXMonths",
    value: function _yearAfterXMonths(months) {
      return this._dateAfterXMonths(months).getFullYear();
    }
  }, {
    key: "_dateAfterXMonths",
    value: function _dateAfterXMonths(months) {
      var result = new Date(this._originDate);
      result.setDate(1);
      result.setMonth(parseInt(months) + this._originDate.getMonth());
      return result;
    }
  }, {
    key: "_differenceInMonths",
    value: function _differenceInMonths(date1, date2) {
      var months = (date1.getFullYear() - date2.getFullYear()) * 12;
      return months - date2.getMonth() + date1.getMonth();
    }
  }, {
    key: "_differenceInYears",
    value: function _differenceInYears(date1, date2) {
      return this._differenceInMonths(date1, date2) / 12;
    }
  }, {
    key: "_clear",
    value: function _clear() {
      this.selectedDate = '';
    }
  }, {
    key: "_close",
    value: function _close() {
      var overlayContent = this.getRootNode().host;
      var overlay = overlayContent ? overlayContent.getRootNode().host : null;

      if (overlay) {
        overlay.opened = false;
      }

      this.dispatchEvent(new CustomEvent('close', {
        bubbles: true,
        composed: true
      }));
    }
  }, {
    key: "_cancel",
    value: function _cancel() {
      this.focusedDate = this.selectedDate;

      this._close();
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      e.preventDefault();
    }
    /**
     * Keyboard Navigation
     */

  }, {
    key: "_eventKey",
    value: function _eventKey(e) {
      var keys = ['down', 'up', 'right', 'left', 'enter', 'space', 'home', 'end', 'pageup', 'pagedown', 'tab', 'esc'];

      for (var i = 0; i < keys.length; i++) {
        var k = keys[i];

        if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
          return k;
        }
      }
    }
  }, {
    key: "_onKeydown",
    value: function _onKeydown(e) {
      var _this4 = this;

      var focus = this._currentlyFocusedDate(); // Cannot use (today/cancel).focused flag because vaadin-text-field removes it
      // previously in the keydown event.


      var isToday = e.composedPath().indexOf(this.$.todayButton) >= 0;
      var isCancel = e.composedPath().indexOf(this.$.cancelButton) >= 0;
      var isScroller = !isToday && !isCancel;

      var eventKey = this._eventKey(e);

      if (eventKey === 'tab') {
        // We handle tabs here and don't want to bubble up.
        e.stopPropagation();
        var isFullscreen = this.hasAttribute('fullscreen');
        var isShift = e.shiftKey;

        if (isFullscreen) {
          e.preventDefault();
        } else if (isShift && isScroller || !isShift && isCancel) {
          // Return focus back to the input field
          e.preventDefault();
          this.dispatchEvent(new CustomEvent('focus-input', {
            bubbles: true,
            composed: true
          }));
        } else if (isShift && isToday) {
          // Browser returns focus back to the scrollable area. We need to set
          // the focused flag, and move the scroll to focused date.
          this._focused = true;
          setTimeout(function () {
            return _this4.revealDate(_this4.focusedDate);
          }, 1);
        } else {
          // Browser moves the focus out of the scroller, hence focused flag must
          // set to false.
          this._focused = false;
        }
      } else if (eventKey) {
        e.preventDefault();
        e.stopPropagation();

        switch (eventKey) {
          case 'down':
            this._moveFocusByDays(7);

            this.focus();
            break;

          case 'up':
            this._moveFocusByDays(-7);

            this.focus();
            break;

          case 'right':
            if (isScroller) {
              this._moveFocusByDays(1);
            }

            break;

          case 'left':
            if (isScroller) {
              this._moveFocusByDays(-1);
            }

            break;

          case 'enter':
            if (isScroller || isCancel) {
              this._close();
            } else if (isToday) {
              this._onTodayTap();
            }

            break;

          case 'space':
            if (isCancel) {
              this._close();
            } else if (isToday) {
              this._onTodayTap();
            } else {
              var focusedDate = this.focusedDate;

              if (_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._dateEquals(focusedDate, this.selectedDate)) {
                this.selectedDate = '';
                this.focusedDate = focusedDate;
              } else {
                this.selectedDate = focusedDate;
              }
            }

            break;

          case 'home':
            this._moveFocusInsideMonth(focus, 'minDate');

            break;

          case 'end':
            this._moveFocusInsideMonth(focus, 'maxDate');

            break;

          case 'pagedown':
            this._moveFocusByMonths(e.shiftKey ? 12 : 1);

            break;

          case 'pageup':
            this._moveFocusByMonths(e.shiftKey ? -12 : -1);

            break;

          case 'esc':
            this._cancel();

            break;
        }
      }
    }
  }, {
    key: "_currentlyFocusedDate",
    value: function _currentlyFocusedDate() {
      return this.focusedDate || this.selectedDate || this.initialPosition || new Date();
    }
  }, {
    key: "_focusDate",
    value: function _focusDate(dateToFocus) {
      this.focusedDate = dateToFocus;
      this._focusedMonthDate = dateToFocus.getDate();
    }
  }, {
    key: "_focusClosestDate",
    value: function _focusClosestDate(focus) {
      this._focusDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getClosestDate(focus, [this.minDate, this.maxDate]));
    }
  }, {
    key: "_moveFocusByDays",
    value: function _moveFocusByDays(days) {
      var focus = this._currentlyFocusedDate();

      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focus.getFullYear());
      dateToFocus.setMonth(focus.getMonth());
      dateToFocus.setDate(focus.getDate() + days);

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this._focusDate(dateToFocus);
      } else {
        if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
          // Move to min or max date
          if (days > 0) {
            // down or right
            this._focusDate(this.maxDate);
          } else {
            // up or left
            this._focusDate(this.minDate);
          }
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focus);
        }
      }
    }
  }, {
    key: "_moveFocusByMonths",
    value: function _moveFocusByMonths(months) {
      var focus = this._currentlyFocusedDate();

      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focus.getFullYear());
      dateToFocus.setMonth(focus.getMonth() + months);
      var targetMonth = dateToFocus.getMonth();
      dateToFocus.setDate(this._focusedMonthDate || (this._focusedMonthDate = focus.getDate()));

      if (dateToFocus.getMonth() !== targetMonth) {
        dateToFocus.setDate(0);
      }

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this.focusedDate = dateToFocus;
      } else {
        if (this._dateAllowed(focus, this.minDate, this.maxDate)) {
          // Move to min or max date
          if (months > 0) {
            // pagedown
            this._focusDate(this.maxDate);
          } else {
            // pageup
            this._focusDate(this.minDate);
          }
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focus);
        }
      }
    }
  }, {
    key: "_moveFocusInsideMonth",
    value: function _moveFocusInsideMonth(focusedDate, property) {
      var dateToFocus = new Date(0, 0);
      dateToFocus.setFullYear(focusedDate.getFullYear());

      if (property === 'minDate') {
        dateToFocus.setMonth(focusedDate.getMonth());
        dateToFocus.setDate(1);
      } else {
        dateToFocus.setMonth(focusedDate.getMonth() + 1);
        dateToFocus.setDate(0);
      }

      if (this._dateAllowed(dateToFocus, this.minDate, this.maxDate)) {
        this._focusDate(dateToFocus);
      } else {
        if (this._dateAllowed(focusedDate, this.minDate, this.maxDate)) {
          // Move to minDate or maxDate
          this._focusDate(this[property]);
        } else {
          // Move to closest allowed date
          this._focusClosestDate(focusedDate);
        }
      }
    }
  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return (!min || date >= min) && (!max || date <= max);
    }
  }, {
    key: "_isTodayAllowed",
    value: function _isTodayAllowed(min, max) {
      var today = new Date();
      var todayMidnight = new Date(0, 0);
      todayMidnight.setFullYear(today.getFullYear());
      todayMidnight.setMonth(today.getMonth());
      todayMidnight.setDate(today.getDate());
      return this._dateAllowed(todayMidnight, min, max);
    }
  }, {
    key: "_stopPropagation",
    value: function _stopPropagation(e) {
      e.stopPropagation();
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-date-picker-overlay-content';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * The value for this element.
         */
        selectedDate: {
          type: Date,
          notify: true
        },

        /**
         * Date value which is focused using keyboard.
         */
        focusedDate: {
          type: Date,
          notify: true,
          observer: '_focusedDateChanged'
        },
        _focusedMonthDate: Number,

        /**
         * Date which should be visible when there is no value selected.
         */
        initialPosition: {
          type: Date,
          observer: '_initialPositionChanged'
        },
        _originDate: {
          value: new Date()
        },
        _visibleMonthIndex: Number,
        _desktopMode: Boolean,
        _translateX: {
          observer: '_translateXChanged'
        },
        _yearScrollerWidth: {
          value: 50
        },
        i18n: {
          type: Object
        },
        showWeekNumbers: {
          type: Boolean
        },
        _ignoreTaps: Boolean,
        _notTapping: Boolean,

        /**
         * The earliest date that can be selected. All earlier dates will be disabled.
         */
        minDate: Date,

        /**
         * The latest date that can be selected. All later dates will be disabled.
         */
        maxDate: Date,
        _focused: Boolean,

        /**
         * Input label
         */
        label: String
      };
    }
  }]);

  return DatePickerOverlayContentElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ThemePropertyMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))));

customElements.define(DatePickerOverlayContentElement.is, DatePickerOverlayContentElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-overlay/src/vaadin-overlay.js */ "./node_modules/@vaadin/vaadin-overlay/src/vaadin-overlay.js");
/* harmony import */ var _polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/disable-upgrade-mixin.js */ "./node_modules/@polymer/polymer/lib/mixins/disable-upgrade-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
 * The overlay element.
 *
 * ### Styling
 *
 * See [`<vaadin-overlay>` documentation](https://github.com/vaadin/vaadin-overlay/blob/master/src/vaadin-overlay.html)
 * for `<vaadin-date-picker-overlay>` parts.
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @private
 */

var DatePickerOverlayElement =
/*#__PURE__*/
function (_DisableUpgradeMixin) {
  _inherits(DatePickerOverlayElement, _DisableUpgradeMixin);

  function DatePickerOverlayElement() {
    _classCallCheck(this, DatePickerOverlayElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerOverlayElement).apply(this, arguments));
  }

  _createClass(DatePickerOverlayElement, null, [{
    key: "is",
    get: function get() {
      return 'vaadin-date-picker-overlay';
    }
  }]);

  return DatePickerOverlayElement;
}(Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__["OverlayElement"]));

customElements.define(DatePickerOverlayElement.is, DatePickerOverlayElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-styles.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_elements_custom_style_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/elements/custom-style.js */ "./node_modules/@polymer/polymer/lib/elements/custom-style.js");

var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"vaadin-date-picker-overlay-styles\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([right-aligned][dir=\"rtl\"]) {\n        align-items: flex-start;\n      }\n\n      [part=\"overlay\"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~=\"content\"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js ***!
  \***************************************************************************/
/*! exports provided: DatePickerElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickerElement", function() { return DatePickerElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _polymer_iron_media_query_iron_media_query_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-media-query/iron-media-query.js */ "./node_modules/@polymer/iron-media-query/iron-media-query.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-theme-property-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js");
/* harmony import */ var _vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./vaadin-date-picker-mixin.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-mixin.js");
/* harmony import */ var _vaadin_vaadin_text_field_src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @vaadin/vaadin-text-field/src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" clear-button-visible=\"[[clearButtonVisible]]\" aria-label$=\"[[label]]\" part=\"text-field\" theme$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label$=\"[[i18n.calendar]]\" aria-expanded$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen$=\"[[_fullscreen]]\" theme$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      :host([opened]) {\n        pointer-events: auto;\n      }\n\n      [part=\"text-field\"] {\n        width: 100%;\n        min-width: 0;\n      }\n    </style>\n\n\n    <vaadin-text-field id=\"input\" role=\"application\" autocomplete=\"off\" on-focus=\"_focus\" value=\"{{_userInputValue}}\" invalid=\"[[invalid]]\" label=\"[[label]]\" name=\"[[name]]\" placeholder=\"[[placeholder]]\" required=\"[[required]]\" disabled=\"[[disabled]]\" readonly=\"[[readonly]]\" error-message=\"[[errorMessage]]\" clear-button-visible=\"[[clearButtonVisible]]\" aria-label\\$=\"[[label]]\" part=\"text-field\" theme\\$=\"[[theme]]\">\n      <slot name=\"prefix\" slot=\"prefix\"></slot>\n      <div part=\"toggle-button\" slot=\"suffix\" on-tap=\"_toggle\" role=\"button\" aria-label\\$=\"[[i18n.calendar]]\" aria-expanded\\$=\"[[_getAriaExpanded(opened)]]\"></div>\n    </vaadin-text-field>\n\n    <vaadin-date-picker-overlay id=\"overlay\" fullscreen\\$=\"[[_fullscreen]]\" theme\\$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\" on-vaadin-overlay-open=\"_onOverlayOpened\" on-vaadin-overlay-close=\"_onOverlayClosed\" disable-upgrade=\"\">\n      <template>\n        <vaadin-date-picker-overlay-content id=\"overlay-content\" i18n=\"[[i18n]]\" fullscreen\\$=\"[[_fullscreen]]\" label=\"[[label]]\" selected-date=\"{{_selectedDate}}\" slot=\"dropdown-content\" focused-date=\"{{_focusedDate}}\" show-week-numbers=\"[[showWeekNumbers]]\" min-date=\"[[_minDate]]\" max-date=\"[[_maxDate]]\" role=\"dialog\" on-date-tap=\"_close\" part=\"overlay-content\" theme\\$=\"[[__getOverlayTheme(theme, _overlayInitialized)]]\">\n        </vaadin-date-picker-overlay-content>\n      </template>\n    </vaadin-date-picker-overlay>\n\n    <iron-media-query query=\"[[_fullscreenMediaQuery]]\" query-matches=\"{{_fullscreen}}\">\n    </iron-media-query>\n"]);

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
 *
 * `<vaadin-date-picker>` is a date selection field which includes a scrollable
 * month calendar view.
 * ```html
 * <vaadin-date-picker label="Birthday"></vaadin-date-picker>
 * ```
 * ```js
 * datePicker.value = '2016-03-02';
 * ```
 * When the selected `value` is changed, a `value-changed` event is triggered.
 *
 *
 * ### Styling
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description | Theme for Element
 * ----------------|----------------|----------------
 * `text-field` | Input element | vaadin-date-picker
 * `clear-button` | Clear button | vaadin-date-picker
 * `toggle-button` | Toggle button | vaadin-date-picker
 * `overlay-content` | The overlay element | vaadin-date-picker
 * `overlay-header` | Fullscreen mode header | vaadin-date-picker-overlay-content
 * `label` | Fullscreen mode value/label | vaadin-date-picker-overlay-content
 * `clear-button` | Fullscreen mode clear button | vaadin-date-picker-overlay-content
 * `toggle-button` | Fullscreen mode toggle button | vaadin-date-picker-overlay-content
 * `years-toggle-button` | Fullscreen mode years scroller toggle | vaadin-date-picker-overlay-content
 * `months` | Months scroller | vaadin-date-picker-overlay-content
 * `years` | Years scroller | vaadin-date-picker-overlay-content
 * `toolbar` | Footer bar with buttons | vaadin-date-picker-overlay-content
 * `today-button` | Today button | vaadin-date-picker-overlay-content
 * `cancel-button` | Cancel button | vaadin-date-picker-overlay-content
 * `month` | Month calendar | vaadin-date-picker-overlay-content
 * `year-number` | Year number | vaadin-date-picker-overlay-content
 * `year-separator` | Year separator | vaadin-date-picker-overlay-content
 * `month-header` | Month title | vaadin-month-calendar
 * `weekdays` | Weekday container | vaadin-month-calendar
 * `weekday` | Weekday element | vaadin-month-calendar
 * `week-numbers` | Week numbers container | vaadin-month-calendar
 * `week-number` | Week number element | vaadin-month-calendar
 * `date` | Date element | vaadin-month-calendar
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `invalid` | Set when the element is invalid | :host
 * `opened` | Set when the date selector overlay is opened | :host
 * `readonly` | Set when the element is readonly | :host
 * `disabled` | Set when the element is disabled | :host
 * `today` | Set on the date corresponding to the current day | date
 * `focused` | Set on the focused date | date
 * `disabled` | Set on the date out of the allowed range | date
 * `selected` | Set on the selected date | date
 *
 * If you want to replace the default input field with a custom implementation, you should use the
 * [`<vaadin-date-picker-light>`](#vaadin-date-picker-light) element.
 *
 * In addition to `<vaadin-date-picker>` itself, the following internal
 * components are themable:
 *
 * - `<vaadin-text-field>`
 * - `<vaadin-date-picker-overlay>`
 * - `<vaadin-date-picker-overlay-content>`
 * - `<vaadin-month-calendar>`
 *
 * Note: the `theme` attribute value set on `<vaadin-date-picker>` is
 * propagated to the internal themable components listed above.
 *
 * @memberof Vaadin
 * @mixes Vaadin.ElementMixin
 * @mixes Vaadin.ControlStateMixin
 * @mixes Vaadin.ThemableMixin
 * @mixes Vaadin.ThemePropertyMixin
 * @mixes Vaadin.DatePickerMixin
 * @mixes Polymer.GestureEventListeners
 * @demo demo/index.html
 */

var DatePickerElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(DatePickerElement, _ElementMixin);

  function DatePickerElement() {
    _classCallCheck(this, DatePickerElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(DatePickerElement).apply(this, arguments));
  }

  _createClass(DatePickerElement, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(DatePickerElement.prototype), "ready", this).call(this); // In order to have synchronized invalid property, we need to use the same validate logic.


      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__["afterNextRender"])(this, function () {
        return _this._inputElement.validate = function () {};
      }); // FIXME(platosha): dispatch `input` event on
      // <vaadin-text-field> clear button
      // https://github.com/vaadin/vaadin-text-field/issues/347

      this._inputElement.addEventListener('change', function () {
        if (_this._inputElement.value === '') {
          _this.__dispatchChange = true;
          _this.value = '';

          _this.validate();

          _this.__dispatchChange = false;
        }
      });
    }
  }, {
    key: "_onVaadinOverlayClose",
    value: function _onVaadinOverlayClose(e) {
      if (this._openedWithFocusRing && this.hasAttribute('focused')) {
        this.focusElement.setAttribute('focus-ring', '');
      } else if (!this.hasAttribute('focused')) {
        this.focusElement.blur();
      }

      if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().indexOf(this) !== -1) {
        e.preventDefault();
      }
    }
  }, {
    key: "_toggle",
    value: function _toggle(e) {
      e.stopPropagation();
      this[this._overlayInitialized && this.$.overlay.opened ? 'close' : 'open']();
    }
  }, {
    key: "_input",
    value: function _input() {
      return this.$.input;
    }
  }, {
    key: "_getAriaExpanded",
    value: function _getAriaExpanded(opened) {
      return Boolean(opened).toString();
    }
    /**
     * Focussable element used by vaadin-control-state-mixin
     */

  }, {
    key: "_setClearButtonLabel",
    value: function _setClearButtonLabel(i18nClear) {
      // FIXME(platosha): expose i18n API in <vaadin-text-field>
      // https://github.com/vaadin/vaadin-text-field/issues/348
      this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute('aria-label', i18nClear);
    }
  }, {
    key: "_inputValue",
    set: function set(value) {
      this._inputElement.value = value;
    },
    get: function get() {
      return this._inputElement.value;
    }
  }, {
    key: "focusElement",
    get: function get() {
      return this._input() || this;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-date-picker';
    }
  }, {
    key: "version",
    get: function get() {
      return '4.0.5';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Set to true to display the clear icon which clears the input.
         */
        clearButtonVisible: {
          type: Boolean,
          value: false
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
         * The error message to display when the input is invalid.
         */
        errorMessage: String,

        /**
         * A placeholder string in addition to the label. If this is set, the label will always float.
         */
        placeholder: String,

        /**
         * Set to true to make this element read-only.
         */
        readonly: {
          type: Boolean,
          value: false,
          reflectToAttribute: true
        },

        /**
         * This property is set to true when the control value invalid.
         */
        invalid: {
          type: Boolean,
          reflectToAttribute: true,
          notify: true,
          value: false
        },
        _userInputValue: String
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_userInputValueChanged(_userInputValue)', '_setClearButtonLabel(i18n.clear)'];
    }
  }]);

  return DatePickerElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DatePickerMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))))));

customElements.define(DatePickerElement.is, DatePickerElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-infinite-scroller.js ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/templatize.js */ "./node_modules/@polymer/polymer/lib/utils/templatize.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n        overflow: hidden;\n        height: 500px;\n      }\n\n      #scroller {\n        position: relative;\n        height: 100%;\n        overflow: auto;\n        outline: none;\n        margin-right: -40px;\n        -webkit-overflow-scrolling: touch;\n        -ms-overflow-style: none;\n        overflow-x: hidden;\n      }\n\n      #scroller.notouchscroll {\n        -webkit-overflow-scrolling: auto;\n      }\n\n      #scroller::-webkit-scrollbar {\n        display: none;\n      }\n\n      .buffer {\n        position: absolute;\n        width: var(--vaadin-infinite-scroller-buffer-width, 100%);\n        box-sizing: border-box;\n        padding-right: 40px;\n        top: var(--vaadin-infinite-scroller-buffer-offset, 0);\n        animation: fadein 0.2s;\n      }\n\n      @keyframes fadein {\n        from { opacity: 0; }\n        to { opacity: 1; }\n      }\n    </style>\n\n    <div id=\"scroller\" on-scroll=\"_scroll\">\n      <div class=\"buffer\"></div>\n      <div class=\"buffer\"></div>\n      <div id=\"fullHeight\"></div>\n    </div>\n"]);

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
 * @memberof Vaadin
 * @private
 */

var InfiniteScrollerElement =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(InfiniteScrollerElement, _PolymerElement);

  function InfiniteScrollerElement() {
    _classCallCheck(this, InfiniteScrollerElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(InfiniteScrollerElement).apply(this, arguments));
  }

  _createClass(InfiniteScrollerElement, [{
    key: "ready",
    value: function ready() {
      _get(_getPrototypeOf(InfiniteScrollerElement.prototype), "ready", this).call(this);

      this._buffers = Array.prototype.slice.call(this.root.querySelectorAll('.buffer'));
      this.$.fullHeight.style.height = this._initialScroll * 2 + 'px';
      var tpl = this.querySelector('template');
      this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__["templatize"])(tpl, this, {
        forwardHostProp: function forwardHostProp(prop, value) {
          if (prop !== 'index') {
            this._buffers.forEach(function (buffer) {
              [].forEach.call(buffer.children, function (insertionPoint) {
                insertionPoint._itemWrapper.instance[prop] = value;
              });
            });
          }
        }
      }); // Firefox interprets elements with overflow:auto as focusable
      // https://bugzilla.mozilla.org/show_bug.cgi?id=1069739

      var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;

      if (isFirefox) {
        this.$.scroller.tabIndex = -1;
      }
    }
  }, {
    key: "_activated",
    value: function _activated(active) {
      if (active && !this._initialized) {
        this._createPool();

        this._initialized = true;
      }
    }
  }, {
    key: "_finishInit",
    value: function _finishInit() {
      var _this = this;

      if (!this._initDone) {
        // Once the first set of items start fading in, stamp the rest
        this._buffers.forEach(function (buffer) {
          [].forEach.call(buffer.children, function (insertionPoint) {
            return _this._ensureStampedInstance(insertionPoint._itemWrapper);
          });
        }, this);

        if (!this._buffers[0].translateY) {
          this._reset();
        }

        this._initDone = true;
      }
    }
  }, {
    key: "_translateBuffer",
    value: function _translateBuffer(up) {
      var index = up ? 1 : 0;
      this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
      this._buffers[index].style.transform = 'translate3d(0, ' + this._buffers[index].translateY + 'px, 0)';
      this._buffers[index].updated = false;

      this._buffers.reverse();
    }
  }, {
    key: "_scroll",
    value: function _scroll() {
      var _this2 = this;

      if (this._scrollDisabled) {
        return;
      }

      var scrollTop = this.$.scroller.scrollTop;

      if (scrollTop < this._bufferHeight || scrollTop > this._initialScroll * 2 - this._bufferHeight) {
        // Scrolled near the end/beginning of the scrollable area -> reset.
        this._initialIndex = ~~this.position;

        this._reset();
      } // Check if we scrolled enough to translate the buffer positions.


      var bufferOffset = this.root.querySelector('.buffer').offsetTop;
      var upperThresholdReached = scrollTop > this._buffers[1].translateY + this.itemHeight + bufferOffset;
      var lowerThresholdReached = scrollTop < this._buffers[0].translateY + this.itemHeight + bufferOffset;

      if (upperThresholdReached || lowerThresholdReached) {
        this._translateBuffer(lowerThresholdReached);

        this._updateClones();
      }

      if (!this._preventScrollEvent) {
        this.dispatchEvent(new CustomEvent('custom-scroll', {
          bubbles: false,
          composed: true
        }));
        this._mayHaveMomentum = true;
      }

      this._preventScrollEvent = false;
      this._debouncerScrollFinish = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerScrollFinish, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), function () {
        var scrollerRect = _this2.$.scroller.getBoundingClientRect();

        if (!_this2._isVisible(_this2._buffers[0], scrollerRect) && !_this2._isVisible(_this2._buffers[1], scrollerRect)) {
          _this2.position = _this2.position;
        }
      });
    }
    /**
     * Current scroller position as index. Can be a fractional number.
     *
     * @type {Number}
     */

  }, {
    key: "_reset",
    value: function _reset() {
      var _this3 = this;

      this._scrollDisabled = true;
      this.$.scroller.scrollTop = this._initialScroll;
      this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
      this._buffers[1].translateY = this._initialScroll;

      this._buffers.forEach(function (buffer) {
        buffer.style.transform = 'translate3d(0, ' + buffer.translateY + 'px, 0)';
      });

      this._buffers[0].updated = this._buffers[1].updated = false;

      this._updateClones(true);

      this._debouncerUpdateClones = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerUpdateClones, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), function () {
        _this3._buffers[0].updated = _this3._buffers[1].updated = false;

        _this3._updateClones();
      });
      this._scrollDisabled = false;
    }
  }, {
    key: "_createPool",
    value: function _createPool() {
      var _this4 = this;

      var container = this.getBoundingClientRect();

      this._buffers.forEach(function (buffer) {
        var _loop = function _loop() {
          var itemWrapper = document.createElement('div');
          itemWrapper.style.height = _this4.itemHeight + 'px';
          itemWrapper.instance = {};
          var contentId = InfiniteScrollerElement._contentIndex = InfiniteScrollerElement._contentIndex + 1 || 0;
          var slotName = 'vaadin-infinite-scroller-item-content-' + contentId;
          var insertionPoint = document.createElement('slot');
          insertionPoint.setAttribute('name', slotName);
          insertionPoint._itemWrapper = itemWrapper;
          buffer.appendChild(insertionPoint);
          itemWrapper.setAttribute('slot', slotName);

          _this4.appendChild(itemWrapper); // This is needed by IE


          Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__["flush"])();
          setTimeout(function () {
            // Only stamp the visible instances first
            if (_this4._isVisible(itemWrapper, container)) {
              _this4._ensureStampedInstance(itemWrapper);
            }
          }, 1); // Wait for first reset
        };

        for (var i = 0; i < _this4.bufferSize; i++) {
          _loop();
        }
      }, this);

      setTimeout(function () {
        Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(_this4, _this4._finishInit.bind(_this4));
      }, 1);
    }
  }, {
    key: "_ensureStampedInstance",
    value: function _ensureStampedInstance(itemWrapper) {
      if (itemWrapper.firstElementChild) {
        return;
      }

      var tmpInstance = itemWrapper.instance;
      itemWrapper.instance = new this._TemplateClass({});
      itemWrapper.appendChild(itemWrapper.instance.root);
      Object.keys(tmpInstance).forEach(function (prop) {
        itemWrapper.instance.set(prop, tmpInstance[prop]);
      });
    }
  }, {
    key: "_updateClones",
    value: function _updateClones(viewPortOnly) {
      var _this5 = this;

      this._firstIndex = ~~((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
      var scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : undefined;

      this._buffers.forEach(function (buffer, bufferIndex) {
        if (!buffer.updated) {
          var firstIndex = _this5._firstIndex + _this5.bufferSize * bufferIndex;
          [].forEach.call(buffer.children, function (insertionPoint, index) {
            var itemWrapper = insertionPoint._itemWrapper;

            if (!viewPortOnly || _this5._isVisible(itemWrapper, scrollerRect)) {
              itemWrapper.instance.index = firstIndex + index;
            }
          });
          buffer.updated = true;
        }
      }, this);
    }
  }, {
    key: "_isVisible",
    value: function _isVisible(element, container) {
      var rect = element.getBoundingClientRect();
      return rect.bottom > container.top && rect.top < container.bottom;
    }
  }, {
    key: "position",
    set: function set(index) {
      var _this6 = this;

      this._preventScrollEvent = true;

      if (index > this._firstIndex && index < this._firstIndex + this.bufferSize * 2) {
        this.$.scroller.scrollTop = this.itemHeight * (index - this._firstIndex) + this._buffers[0].translateY;
      } else {
        this._initialIndex = ~~index;

        this._reset();

        this._scrollDisabled = true;
        this.$.scroller.scrollTop += index % 1 * this.itemHeight;
        this._scrollDisabled = false;
      }

      if (this._mayHaveMomentum) {
        // Stop the possible iOS Safari momentum with -webkit-overflow-scrolling: auto;
        this.$.scroller.classList.add('notouchscroll');
        this._mayHaveMomentum = false;
        setTimeout(function () {
          // Restore -webkit-overflow-scrolling: touch; after a small delay.
          _this6.$.scroller.classList.remove('notouchscroll');
        }, 10);
      }
    }
    /**
     * @private
     */
    ,
    get: function get() {
      return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
    }
  }, {
    key: "itemHeight",
    get: function get() {
      if (!this._itemHeightVal) {
        if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
          this.updateStyles();
        }

        var itemHeight = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-infinite-scroller-item-height') : getComputedStyle(this).getPropertyValue('--vaadin-infinite-scroller-item-height'); // Use background-position temp inline style for unit conversion

        var tmpStyleProp = 'background-position';
        this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
        var itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
        this.$.fullHeight.style.removeProperty(tmpStyleProp);
        this._itemHeightVal = parseFloat(itemHeightPx);
      }

      return this._itemHeightVal;
    }
  }, {
    key: "_bufferHeight",
    get: function get() {
      return this.itemHeight * this.bufferSize;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-infinite-scroller';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Count of individual items in each buffer.
         * The scroller has 2 buffers altogether so bufferSize of 20
         * will result in 40 buffered DOM items in total.
         * Changing after initialization not supported.
         */
        bufferSize: {
          type: Number,
          value: 20
        },

        /**
         * The amount of initial scroll top. Needed in order for the
         * user to be able to scroll backwards.
         */
        _initialScroll: {
          value: 500000
        },

        /**
         * The index/position mapped at _initialScroll point.
         */
        _initialIndex: {
          value: 0
        },
        _buffers: Array,
        _preventScrollEvent: Boolean,
        _mayHaveMomentum: Boolean,
        _initialized: Boolean,
        active: {
          type: Boolean,
          observer: '_activated'
        }
      };
    }
  }]);

  return InfiniteScrollerElement;
}(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

customElements.define(InfiniteScrollerElement.is, InfiniteScrollerElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_lib_elements_dom_repeat_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/elements/dom-repeat.js */ "./node_modules/@polymer/polymer/lib/elements/dom-repeat.js");
/* harmony import */ var _polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/mixins/gesture-event-listeners.js */ "./node_modules/@polymer/polymer/lib/mixins/gesture-event-listeners.js");
/* harmony import */ var _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./vaadin-date-picker-helper.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-helper.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today$=\"[[_isToday(item)]]\" selected$=\"[[_dateEquals(item, selectedDate)]]\" focused$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role$=\"[[_getRole(item)]]\" aria-label$=\"[[_getAriaLabel(item)]]\" aria-disabled$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: block;\n      }\n\n      [part=\"weekdays\"],\n      #days {\n        display: flex;\n        flex-wrap: wrap;\n        flex-grow: 1;\n      }\n\n      #days-container,\n      #weekdays-container {\n        display: flex;\n      }\n\n      [part=\"week-numbers\"] {\n        display: flex;\n        flex-direction: column;\n        justify-content: space-between;\n        flex-shrink: 0;\n      }\n\n      [part=\"week-numbers\"][hidden],\n      [part=\"weekday\"][hidden] {\n        display: none;\n      }\n\n      [part=\"weekday\"],\n      [part=\"date\"] {\n        /* Would use calc(100% / 7) but it doesn't work nice on IE */\n        width: 14.285714286%;\n      }\n\n      [part=\"weekday\"]:empty,\n      [part=\"week-numbers\"] {\n        width: 12.5%;\n        flex-shrink: 0;\n      }\n    </style>\n\n    <div part=\"month-header\" role=\"heading\">[[_getTitle(month, i18n.monthNames)]]</div>\n    <div id=\"monthGrid\" on-tap=\"_handleTap\" on-touchend=\"_preventDefault\" on-touchstart=\"_onMonthGridTouchStart\">\n      <div id=\"weekdays-container\">\n        <div hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\" part=\"weekday\"></div>\n        <div part=\"weekdays\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]\">\n            <div part=\"weekday\" role=\"heading\" aria-label\\$=\"[[item.weekDay]]\">[[item.weekDayShort]]</div>\n          </template>\n        </div>\n      </div>\n      <div id=\"days-container\">\n        <div part=\"week-numbers\" hidden=\"[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]\">\n          <template is=\"dom-repeat\" items=\"[[_getWeekNumbers(_days)]]\">\n            <div part=\"week-number\" role=\"heading\" aria-label\\$=\"[[i18n.week]] [[item]]\">[[item]]</div>\n          </template>\n        </div>\n        <div id=\"days\">\n          <template is=\"dom-repeat\" items=\"[[_days]]\">\n            <div part=\"date\" today\\$=\"[[_isToday(item)]]\" selected\\$=\"[[_dateEquals(item, selectedDate)]]\" focused\\$=\"[[_dateEquals(item, focusedDate)]]\" date=\"[[item]]\" disabled\\$=\"[[!_dateAllowed(item, minDate, maxDate)]]\" role\\$=\"[[_getRole(item)]]\" aria-label\\$=\"[[_getAriaLabel(item)]]\" aria-disabled\\$=\"[[_getAriaDisabled(item, minDate, maxDate)]]\">[[_getDate(item)]]</div>\n          </template>\n        </div>\n      </div>\n    </div>\n"]);

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
 * @memberof Vaadin
 * @private
 */

var MonthCalendarElement =
/*#__PURE__*/
function (_ThemableMixin) {
  _inherits(MonthCalendarElement, _ThemableMixin);

  function MonthCalendarElement() {
    _classCallCheck(this, MonthCalendarElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(MonthCalendarElement).apply(this, arguments));
  }

  _createClass(MonthCalendarElement, [{
    key: "_dateEquals",
    value: function _dateEquals(date1, date2) {
      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateEquals(date1, date2);
    }
  }, {
    key: "_dateAllowed",
    value: function _dateAllowed(date, min, max) {
      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateAllowed(date, min, max);
    }
    /* Returns true if all the dates in the month are out of the allowed range */

  }, {
    key: "_isDisabled",
    value: function _isDisabled(month, minDate, maxDate) {
      // First day of the month
      var firstDate = new Date(0, 0);
      firstDate.setFullYear(month.getFullYear());
      firstDate.setMonth(month.getMonth());
      firstDate.setDate(1); // Last day of the month

      var lastDate = new Date(0, 0);
      lastDate.setFullYear(month.getFullYear());
      lastDate.setMonth(month.getMonth() + 1);
      lastDate.setDate(0);

      if (minDate && maxDate && minDate.getMonth() === maxDate.getMonth() && minDate.getMonth() === month.getMonth() && maxDate.getDate() - minDate.getDate() >= 0) {
        return false;
      }

      return !this._dateAllowed(firstDate, minDate, maxDate) && !this._dateAllowed(lastDate, minDate, maxDate);
    }
  }, {
    key: "_getTitle",
    value: function _getTitle(month, monthNames) {
      if (month === undefined || monthNames === undefined) {
        return;
      }

      return this.i18n.formatTitle(monthNames[month.getMonth()], month.getFullYear());
    }
  }, {
    key: "_onMonthGridTouchStart",
    value: function _onMonthGridTouchStart() {
      var _this = this;

      this._notTapping = false;
      setTimeout(function () {
        return _this._notTapping = true;
      }, 300);
    }
  }, {
    key: "_dateAdd",
    value: function _dateAdd(date, delta) {
      date.setDate(date.getDate() + delta);
    }
  }, {
    key: "_applyFirstDayOfWeek",
    value: function _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
      if (weekDayNames === undefined || firstDayOfWeek === undefined) {
        return;
      }

      return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
    }
  }, {
    key: "_getWeekDayNames",
    value: function _getWeekDayNames(weekDayNames, weekDayNamesShort, showWeekNumbers, firstDayOfWeek) {
      if (weekDayNames === undefined || weekDayNamesShort === undefined || showWeekNumbers === undefined || firstDayOfWeek === undefined) {
        return;
      }

      weekDayNames = this._applyFirstDayOfWeek(weekDayNames, firstDayOfWeek);
      weekDayNamesShort = this._applyFirstDayOfWeek(weekDayNamesShort, firstDayOfWeek);
      weekDayNames = weekDayNames.map(function (day, index) {
        return {
          weekDay: day,
          weekDayShort: weekDayNamesShort[index]
        };
      });
      return weekDayNames;
    }
  }, {
    key: "_getDate",
    value: function _getDate(date) {
      return date ? date.getDate() : '';
    }
  }, {
    key: "_showWeekNumbersChanged",
    value: function _showWeekNumbersChanged(showWeekNumbers, firstDayOfWeek) {
      if (showWeekNumbers && firstDayOfWeek === 1) {
        this.setAttribute('week-numbers', '');
      } else {
        this.removeAttribute('week-numbers');
      }
    }
  }, {
    key: "_showWeekSeparator",
    value: function _showWeekSeparator(showWeekNumbers, firstDayOfWeek) {
      // Currently only supported for locales that start the week on Monday.
      return showWeekNumbers && firstDayOfWeek === 1;
    }
  }, {
    key: "_isToday",
    value: function _isToday(date) {
      return this._dateEquals(new Date(), date);
    }
  }, {
    key: "_getDays",
    value: function _getDays(month, firstDayOfWeek) {
      if (month === undefined || firstDayOfWeek === undefined) {
        return;
      } // First day of the month (at midnight).


      var date = new Date(0, 0);
      date.setFullYear(month.getFullYear());
      date.setMonth(month.getMonth());
      date.setDate(1); // Rewind to first day of the week.

      while (date.getDay() !== firstDayOfWeek) {
        this._dateAdd(date, -1);
      }

      var days = [];
      var startMonth = date.getMonth();
      var targetMonth = month.getMonth();

      while (date.getMonth() === targetMonth || date.getMonth() === startMonth) {
        days.push(date.getMonth() === targetMonth ? new Date(date.getTime()) : null); // Advance to next day.

        this._dateAdd(date, 1);
      }

      return days;
    }
  }, {
    key: "_getWeekNumber",
    value: function _getWeekNumber(date, days) {
      if (date === undefined || days === undefined) {
        return;
      }

      if (!date) {
        // Get the first non-null date from the days array.
        date = days.reduce(function (acc, d) {
          return !acc && d ? d : acc;
        });
      }

      return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._getISOWeekNumber(date);
    }
  }, {
    key: "_getWeekNumbers",
    value: function _getWeekNumbers(dates) {
      var _this2 = this;

      return dates.map(function (date) {
        return _this2._getWeekNumber(date, dates);
      }).filter(function (week, index, arr) {
        return arr.indexOf(week) === index;
      });
    }
  }, {
    key: "_handleTap",
    value: function _handleTap(e) {
      if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute('disabled')) {
        this.selectedDate = e.target.date;
        this.dispatchEvent(new CustomEvent('date-tap', {
          bubbles: true,
          composed: true
        }));
      }
    }
  }, {
    key: "_preventDefault",
    value: function _preventDefault(e) {
      e.preventDefault();
    }
  }, {
    key: "_getRole",
    value: function _getRole(date) {
      return date ? 'button' : 'presentation';
    }
  }, {
    key: "_getAriaLabel",
    value: function _getAriaLabel(date) {
      if (!date) {
        return '';
      }

      var ariaLabel = this._getDate(date) + ' ' + this.i18n.monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + this.i18n.weekdays[date.getDay()];

      if (this._isToday(date)) {
        ariaLabel += ', ' + this.i18n.today;
      }

      return ariaLabel;
    }
  }, {
    key: "_getAriaDisabled",
    value: function _getAriaDisabled(date, min, max) {
      if (date === undefined || min === undefined || max === undefined) {
        return;
      }

      return this._dateAllowed(date, min, max) ? 'false' : 'true';
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-month-calendar';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * A `Date` object defining the month to be displayed. Only year and
         * month properties are actually used.
         */
        month: {
          type: Date,
          value: new Date()
        },

        /**
         * A `Date` object for the currently selected date.
         */
        selectedDate: {
          type: Date,
          notify: true
        },

        /**
         * A `Date` object for the currently focused date.
         */
        focusedDate: Date,
        showWeekNumbers: {
          type: Boolean,
          value: false
        },
        i18n: {
          type: Object
        },

        /**
         * Flag stating whether taps on the component should be ignored.
         */
        ignoreTaps: Boolean,
        _notTapping: Boolean,

        /**
         * The earliest date that can be selected. All earlier dates will be disabled.
         */
        minDate: {
          type: Date,
          value: null
        },

        /**
         * The latest date that can be selected. All later dates will be disabled.
         */
        maxDate: {
          type: Date,
          value: null
        },
        _days: {
          type: Array,
          computed: '_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)'
        },
        disabled: {
          type: Boolean,
          reflectToAttribute: true,
          computed: '_isDisabled(month, minDate, maxDate)'
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ['_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)'];
    }
  }]);

  return MonthCalendarElement;
}(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])));

customElements.define(MonthCalendarElement.is, MonthCalendarElement);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content-styles.js":
/*!*************************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content-styles.js ***!
  \*************************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_material_styles_shadow_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/shadow.js */ "./node_modules/@vaadin/vaadin-material-styles/shadow.js");
/* harmony import */ var _vaadin_vaadin_button_theme_material_vaadin_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-button/theme/material/vaadin-button.js */ "./node_modules/@vaadin/vaadin-button/theme/material/vaadin-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-date-picker-overlay-content\" theme-for=\"vaadin-date-picker-overlay-content\">\n  <template>\n    <style>\n      :host {\n        font-family: var(--material-font-family);\n        font-size: var(--material-body-font-size);\n        -webkit-text-size-adjust: 100%;\n        line-height: 1.4;\n\n        /* FIXME(platosha): fix the core styles and remove this override. */\n        background: transparent;\n      }\n\n      :host([fullscreen]) {\n        position: absolute;\n      }\n\n      /* Fullscreen Toolbar */\n\n      [part=\"overlay-header\"] {\n        display: flex;\n        align-items: baseline;\n        position: relative;\n        z-index: 2;\n        color: var(--material-body-text-color);\n        background: var(--material-secondary-background-color);\n        border-bottom: 2px solid var(--material-primary-color);\n        padding: 8px;\n        box-shadow: var(--material-shadow-elevation-4dp);\n      }\n\n      /* FIXME(platosha): fix the core styles and remove this override. */\n      [part=\"overlay-header\"]:not([desktop]) {\n        padding-bottom: 8px;\n      }\n\n      [part=\"label\"] {\n        padding: 0 8px;\n        flex: auto;\n      }\n\n      [part=\"clear-button\"],\n      [part=\"toggle-button\"] {\n        font-family: 'material-icons';\n        font-size: var(--material-icon-font-size);\n        line-height: 24px;\n        width: 24px;\n        height: 24px;\n        text-align: center;\n      }\n\n      [part=\"clear-button\"],\n      [part=\"toggle-button\"],\n      [part=\"years-toggle-button\"] {\n        padding: 8px;\n        color: var(--material-secondary-text-color);\n      }\n\n      [part=\"clear-button\"]:hover,\n      [part=\"toggle-button\"]:hover,\n      [part=\"years-toggle-button\"]:hover {\n        color: inherit;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--material-icons-clear);\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: var(--material-icons-calendar);\n      }\n\n      [part=\"years-toggle-button\"] {\n        position: static;\n        padding: 4px 8px;\n        font-size: var(--material-body-font-size);\n        font-weight: 500;\n        line-height: 24px;\n        letter-spacing: 0.05em;\n        color: var(--material-secondary-text-color);\n      }\n\n      [part=\"years-toggle-button\"]::before {\n        content: '';\n        display: none;\n      }\n\n      [part=\"years-toggle-button\"]::after {\n        content: var(--material-icons-play);\n        display: inline-block;\n        width: 24px;\n        font-family: 'material-icons';\n        font-size: var(--material-icon-font-size);\n        line-height: 24px;\n        text-align: center;\n        transition: transform 100ms cubic-bezier(.4, 0, .2, 1);\n      }\n\n      :host([years-visible]) [part=\"years-toggle-button\"]::after {\n        transform: rotate(90deg);\n      }\n\n      /* Month scroller */\n\n      [part=\"months\"] {\n        --vaadin-infinite-scroller-item-height: 320px;\n        text-align: center;\n      }\n\n      /* Year scroller */\n\n      [part=\"years\"] {\n        z-index: 1;\n        background: var(--material-secondary-text-color);\n        color: var(--material-background-color);\n        text-align: center;\n      }\n\n      [part=\"years\"]::before {\n        z-index: 2;\n        border: 0;\n        width: 8px;\n        height: 8px;\n        transform: translateX(-50%) rotate(-45deg);\n        background: var(--material-background-color);\n      }\n\n      :host([years-visible]) [part=\"years\"]::after {\n        top: calc(20px + 16px);\n        height: calc(100% - 20px - 16px);\n      }\n\n      [part=\"year-number\"] {\n        font-size: var(--material-small-font-size);\n        line-height: 10px; /* NOTE(platosha): chosen to align years to months */\n      }\n\n      [part=\"year-separator\"] {\n        background-color: currentColor;\n        width: 4px;\n        height: 4px;\n        border-radius: 50%;\n        margin: calc(0.5 * var(--vaadin-infinite-scroller-item-height, 80px) - 0.5 * 10px - 0.5 * 4px) auto;\n      }\n\n      /* Bottom Bar */\n\n      [part=\"toolbar\"] {\n        display: flex;\n        justify-content: flex-end;\n        padding: 8px 4px;\n        border-top: 1px solid var(--material-divider-color);\n      }\n\n      [part=\"cancel-button\"] {\n        order: 1;\n      }\n\n      [part=\"today-button\"] {\n        order: 2;\n      }\n\n      [part=\"today-button\"],\n      [part=\"cancel-button\"] {\n        margin: 0 4px;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content.js":
/*!******************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content.js ***!
  \******************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_content_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content-styles.js");
/* harmony import */ var _src_vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay-content.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-styles.js":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-styles.js ***!
  \*****************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/overlay.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/overlay.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-date-picker-overlay\" theme-for=\"vaadin-date-picker-overlay\">\n  <template>\n    <style include=\"material-overlay\">\n      :host([fullscreen]) {\n        top: 0 !important;\n        right: 0 !important;\n        bottom: var(--vaadin-overlay-viewport-bottom) !important;\n        left: 0 !important;\n        align-items: stretch;\n        justify-content: stretch;\n      }\n\n      [part=\"overlay\"] {\n        overflow: hidden;\n        -webkit-overflow-scrolling: auto;\n      }\n\n      :host(:not([fullscreen])) [part=\"overlay\"] {\n        width: 360px;\n        max-height: 500px;\n        border-radius: 0 4px 4px;\n      }\n\n      :host(:not([fullscreen])[right-aligned]) [part=\"overlay\"] {\n        border-radius: 4px 0 4px 4px;\n      }\n\n      :host(:not([fullscreen])[bottom-aligned]) [part=\"overlay\"] {\n        border-radius: 4px;\n      }\n\n      :host(:not([fullscreen])[show-week-numbers]) [part=\"overlay\"] {\n        width: 396px;\n      }\n\n      [part=\"content\"] {\n        padding: 0;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay.js":
/*!**********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay.js ***!
  \**********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-styles.js");
/* harmony import */ var _src_vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker-overlay.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-styles.js":
/*!*********************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-styles.js ***!
  \*********************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_overlay_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-overlay.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay.js");
/* harmony import */ var _vaadin_date_picker_overlay_content_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-date-picker-overlay-content.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-overlay-content.js");
/* harmony import */ var _vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar.js");
/* harmony import */ var _vaadin_vaadin_text_field_theme_material_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-text-field/theme/material/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js");
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-date-picker\" theme-for=\"vaadin-date-picker\">\n  <template>\n    <style include=\"material-field-button\">\n      :host {\n        display: inline-flex;\n        -webkit-tap-highlight-color: transparent;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--material-icons-clear);\n      }\n\n      [part=\"toggle-button\"]::before {\n        content: var(--material-icons-calendar);\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker.js ***!
  \**************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_date_picker_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-date-picker-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-date-picker-styles.js");
/* harmony import */ var _src_vaadin_date_picker_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-date-picker.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-date-picker.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar-styles.js":
/*!************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar-styles.js ***!
  \************************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-date-picker-month-calendar\" theme-for=\"vaadin-month-calendar\">\n  <template>\n    <style>\n      :host {\n        color: var(--material-body-text-color);\n        padding: 0 calc(50% / 8 - 0.5em + 8px);\n      }\n\n      :host([show-week-numbers]) {\n        padding: 0 calc(50% / 9 - 0.5em + 8px);\n      }\n\n      [part=\"month-header\"] {\n        font-size: var(--material-h6-font-size);\n        line-height: 1;\n        padding-top: 20px;\n        margin-bottom: 8px;\n      }\n\n      [part=\"week-number\"],\n      [part=\"weekday\"] {\n        font-size: var(--material-caption-font-size);\n        line-height: 44px;\n        height: 40px;\n        color: var(--material-secondary-text-color);\n      }\n\n      :host([disabled]),\n      :host([disabled]) [part=\"week-number\"],\n      :host([disabled]) [part=\"weekday\"] {\n        color: var(--material-disabled-text-color);\n      }\n\n      [part=\"date\"] {\n        position: relative;\n        font-size: var(--material-body-font-size);\n        line-height: 42px;\n        height: 40px;\n        cursor: default;\n      }\n\n      [part=\"date\"]::after {\n        content: '';\n        position: absolute;\n        z-index: -4;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 38px;\n        height: 38px;\n        box-sizing: border-box;\n        border-radius: 50%;\n        border: 2px solid transparent;\n      }\n\n      /* Today */\n\n      [part=\"date\"][today] {\n        color: var(--material-primary-text-color);\n      }\n\n      /* Hover */\n\n      [part=\"date\"]:not([disabled]):hover::after {\n        background-color: var(--material-secondary-background-color);\n        border-color: var(--material-secondary-background-color);\n        z-index: -3;\n      }\n\n      /* Hide for touch devices */\n      @media (hover: none) {\n        [part=\"date\"]:not([disabled]):hover::after {\n          background-color: transparent;\n          border-color: transparent;\n          z-index: -4;\n        }\n      }\n\n      /* Selected */\n\n      [part=\"date\"][selected] {\n        font-weight: 500;\n      }\n\n      [part=\"date\"]:not([disabled])[selected]::after,\n      [part=\"date\"][selected]::after {\n        background-color: transparent;\n        border-color: currentColor;\n        z-index: -2;\n      }\n\n      /* Focused */\n\n      [part=\"date\"]:not([disabled])[focused],\n      [part=\"date\"]:not([disabled]):active {\n        color: var(--material-primary-contrast-color);\n      }\n\n      [part=\"date\"]:not([disabled])[focused]::after,\n      [part=\"date\"]:not([disabled]):active::after {\n        opacity: 0.7;\n        background-color: var(--material-primary-color);\n        border-color: var(--material-primary-color);\n        z-index: -1;\n      }\n\n      [part=\"date\"][disabled] {\n        color: var(--material-disabled-text-color);\n      }\n\n      :host([focused]) [part=\"date\"]:not([disabled])[focused]::after {\n        opacity: 1;\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }




var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar.js ***!
  \*****************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_month_calendar_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-month-calendar-styles.js */ "./node_modules/@vaadin/vaadin-date-picker/theme/material/vaadin-month-calendar-styles.js");
/* harmony import */ var _src_vaadin_month_calendar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-month-calendar.js */ "./node_modules/@vaadin/vaadin-date-picker/src/vaadin-month-calendar.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js":
/*!***************************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js ***!
  \***************************************************************************************************/
/*! exports provided: runIfDevelopmentMode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runIfDevelopmentMode", function() { return runIfDevelopmentMode; });
var DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
var FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

function isMinified() {
  function test() {
    /** vaadin-dev-mode:start
    return false;
    vaadin-dev-mode:end **/
    return true;
  }

  return uncommentAndRun(test);
}

function isDevelopmentMode() {
  try {
    if (isForcedDevelopmentMode()) {
      return true;
    }

    if (!isLocalhost()) {
      return false;
    }

    if (FlowClients) {
      return !isFlowProductionMode();
    }

    return !isMinified();
  } catch (e) {
    // Some error in this code, assume production so no further actions will be taken
    return false;
  }
}

function isForcedDevelopmentMode() {
  return localStorage.getItem("vaadin.developmentmode.force");
}

function isLocalhost() {
  return ["localhost", "127.0.0.1"].indexOf(window.location.hostname) >= 0;
}

function isFlowProductionMode() {
  if (FlowClients) {
    var productionModeApps = Object.keys(FlowClients).map(function (key) {
      return FlowClients[key];
    }).filter(function (client) {
      return client.productionMode;
    });

    if (productionModeApps.length > 0) {
      return true;
    }
  }

  return false;
}

function uncommentAndRun(callback, args) {
  if (typeof callback !== 'function') {
    return;
  }

  var match = DEV_MODE_CODE_REGEXP.exec(callback.toString());

  if (match) {
    try {
      // requires CSP: script-src 'unsafe-eval'
      callback = new Function(match[1]);
    } catch (e) {
      // eat the exception
      console.log('vaadin-development-mode-detector: uncommentAndRun() failed', e);
    }
  }

  return callback(args);
} // A guard against polymer-modulizer removing the window.Vaadin
// initialization above.


window['Vaadin'] = window['Vaadin'] || {};
/**
 * Inspects the source code of the given `callback` function for
 * specially-marked _commented_ code. If such commented code is found in the
 * callback source, uncomments and runs that code instead of the callback
 * itself. Otherwise runs the callback as is.
 *
 * The optional arguments are passed into the callback / uncommented code,
 * the result is returned.
 *
 * See the `isMinified()` function source code in this file for an example.
 *
 */

var runIfDevelopmentMode = function runIfDevelopmentMode(callback, args) {
  if (window.Vaadin.developmentMode) {
    return uncommentAndRun(callback, args);
  }
};

if (window.Vaadin.developmentMode === undefined) {
  window.Vaadin.developmentMode = isDevelopmentMode();
}

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js ***!
  \***************************************************************************/
/*! exports provided: ElementMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ElementMixin", function() { return ElementMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/flush.js */ "./node_modules/@polymer/polymer/lib/utils/flush.js");
/* harmony import */ var _vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }






if (!window.Vaadin) {
  window['Vaadin'] = {};
}
/**
 * Array of Vaadin custom element classes that have been finalized.
 */


window['Vaadin'].registrations = window.Vaadin.registrations || []; // Use the hack to prevent polymer-modulizer from converting to exports

window['Vaadin'].developmentModeCallback = window.Vaadin.developmentModeCallback || {};

window['Vaadin'].developmentModeCallback['vaadin-usage-statistics'] = function () {
  if (_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"]) {
    Object(_vaadin_vaadin_usage_statistics_vaadin_usage_statistics_js__WEBPACK_IMPORTED_MODULE_3__["usageStatistics"])();
  }
};

var statsJob;
var registered = new Set();
/**
 * @polymerMixin
 */

var ElementMixin = function ElementMixin(superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(VaadinElementMixin, _superClass);

      _createClass(VaadinElementMixin, null, [{
        key: "finalize",

        /** @protected */
        value: function finalize() {
          _get(_getPrototypeOf(VaadinElementMixin), "finalize", this).call(this);

          var is = this.is; // Registers a class prototype for telemetry purposes.

          if (is && !registered.has(is)) {
            window.Vaadin.registrations.push(this);
            registered.add(is);

            if (window.Vaadin.developmentModeCallback) {
              statsJob = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(statsJob, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["idlePeriod"], function () {
                window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
              });
              Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["enqueueDebouncer"])(statsJob);
            }
          }
        }
      }]);

      function VaadinElementMixin() {
        var _this;

        _classCallCheck(this, VaadinElementMixin);

        _this = _possibleConstructorReturn(this, _getPrototypeOf(VaadinElementMixin).call(this));

        if (document.doctype === null) {
          console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
        }

        return _this;
      }

      return VaadinElementMixin;
    }(superClass)
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js ***!
  \****************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _font_icons_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");

var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"material-field-button\">\n  <template>\n    <style>\n      /* TODO(platosha): align icon sizes with other elements */\n      [part$=\"button\"] {\n        flex: none;\n        width: 24px;\n        height: 24px;\n        padding: 4px;\n        color: var(--material-secondary-text-color);\n        font-size: var(--material-icon-font-size);\n        line-height: 24px;\n        text-align: center;\n      }\n\n      :host(:not([readonly])) [part$=\"button\"] {\n        cursor: pointer;\n      }\n\n      :host(:not([readonly])) [part$=\"button\"]:hover {\n        color: var(--material-text-color);\n      }\n\n      :host([disabled]) [part$=\"button\"],\n      :host([readonly]) [part$=\"button\"] {\n        color: var(--material-disabled-text-color);\n      }\n\n      :host([disabled]) [part=\"clear-button\"] {\n        display: none;\n      }\n\n      [part$=\"button\"]::before {\n        font-family: \"material-icons\";\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-material-styles/mixins/required-field.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-material-styles/mixins/required-field.js ***!
  \******************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");

var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"material-required-field\">\n  <template>\n    <style>\n      [part=\"label\"] {\n        display: block;\n        position: absolute;\n        top: 8px;\n        font-size: 1em;\n        line-height: 1;\n        height: 20px;\n        margin-bottom: -4px;\n        white-space: nowrap;\n        overflow-x: hidden;\n        text-overflow: ellipsis;\n        color: var(--material-secondary-text-color);\n        transform-origin: 0 75%;\n        transform: scale(0.75);\n      }\n\n      :host([required]) [part=\"label\"]::after {\n        content: \" *\";\n        color: inherit;\n      }\n\n      :host([invalid]) [part=\"label\"] {\n        color: var(--material-error-text-color);\n      }\n\n      [part=\"error-message\"] {\n        font-size: .75em;\n        line-height: 1;\n        color: var(--material-error-text-color);\n      }\n\n      /* Margin that doesn\u2019t reserve space when there\u2019s no error message */\n      [part=\"error-message\"]:not(:empty)::before {\n        content: \"\";\n        display: block;\n        height: 6px;\n      }\n\n      :host(:not([invalid])) [part=\"error-message\"] {\n        margin-top: 0;\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      :host([invalid]) [part=\"error-message\"] {\n        animation: reveal 0.2s;\n      }\n\n      @keyframes reveal {\n        0% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js ***!
  \*******************************************************************************/
/*! exports provided: TextFieldMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldMixin", function() { return TextFieldMixin; });
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
/* harmony import */ var _vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js */ "./node_modules/@vaadin/vaadin-control-state-mixin/vaadin-control-state-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async.js */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce.js */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
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




var $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = "<dom-module id=\"vaadin-text-field-shared-styles\">\n  <template>\n    <style>\n      :host {\n        display: inline-flex;\n        outline: none;\n      }\n\n      :host::before {\n        content: \"\\2003\";\n        width: 0;\n        display: inline-block;\n        /* Size and position this element on the same vertical position as the input-field element\n           to make vertical align for the host element work as expected */\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      .vaadin-text-field-container,\n      .vaadin-text-area-container {\n        display: flex;\n        flex-direction: column;\n        min-width: 100%;\n        max-width: 100%;\n        width: var(--vaadin-text-field-default-width, 12em);\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"input-field\"] {\n        display: flex;\n        align-items: center;\n        flex: auto;\n      }\n\n      .vaadin-text-field-container [part=\"input-field\"] {\n        flex-grow: 0;\n      }\n\n      /* Reset the native input styles */\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea) {\n        -webkit-appearance: none;\n        -moz-appearance: none;\n        outline: none;\n        margin: 0;\n        padding: 0;\n        border: 0;\n        border-radius: 0;\n        min-width: 0;\n        font: inherit;\n        font-size: 1em;\n        line-height: normal;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      [part=\"input-field\"] ::slotted(*) {\n        flex: none;\n      }\n\n      [part=\"value\"],\n      [part=\"input-field\"] ::slotted(input),\n      [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        flex: auto;\n        white-space: nowrap;\n        overflow: hidden;\n        width: 100%;\n        height: 100%;\n      }\n\n      [part=\"input-field\"] ::slotted(textarea) {\n        resize: none;\n      }\n\n      [part=\"value\"]::-ms-clear,\n      [part=\"input-field\"] ::slotted(input)::-ms-clear {\n        display: none;\n      }\n\n      [part=\"clear-button\"] {\n        cursor: default;\n      }\n\n      [part=\"clear-button\"]::before {\n        content: \"\u2715\";\n      }\n    </style>\n  </template>\n</dom-module>";
document.head.appendChild($_documentContainer.content);
var HOST_PROPS = {
  "default": ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title'],
  accessible: ['disabled', 'readonly', 'required', 'invalid']
};
var PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};
/**
 * @polymerMixin
 * @mixes Vaadin.ControlStateMixin
 */

var TextFieldMixin = function TextFieldMixin(subclass) {
  return (
    /*#__PURE__*/
    function (_ControlStateMixin) {
      _inherits(VaadinTextFieldMixin, _ControlStateMixin);

      function VaadinTextFieldMixin() {
        _classCallCheck(this, VaadinTextFieldMixin);

        return _possibleConstructorReturn(this, _getPrototypeOf(VaadinTextFieldMixin).apply(this, arguments));
      }

      _createClass(VaadinTextFieldMixin, [{
        key: "_createConstraintsObserver",
        value: function _createConstraintsObserver() {
          // This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
          // so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
          // vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
          // the `inputElement` when this runs.
          this._createMethodObserver('_constraintsChanged(required, minlength, maxlength, pattern)');
        }
      }, {
        key: "_onInput",
        value: function _onInput(e) {
          var _this = this;

          if (this.__preventInput) {
            e.stopImmediatePropagation();
            this.__preventInput = false;
            return;
          }

          if (this.preventInvalidInput) {
            var input = this.inputElement;

            if (input.value.length > 0 && !this.checkValidity()) {
              input.value = this.value || ''; // add input-prevented attribute for 200ms

              this.setAttribute('input-prevented', '');
              this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._inputDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(200), function () {
                _this.removeAttribute('input-prevented');
              });
              return;
            }
          }

          if (!e.__fromClearButton) {
            this.__userInput = true;
          }

          this.value = e.target.value;
        } // NOTE(yuriy): Workaround needed for IE11 and Edge for proper displaying
        // of the clear button instead of setting display property for it depending on state.

      }, {
        key: "_stateChanged",
        value: function _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
          if (!disabled && !readonly && clearButtonVisible && hasValue) {
            this.$.clearButton.removeAttribute('hidden');
          } else {
            this.$.clearButton.setAttribute('hidden', true);
          }
        }
      }, {
        key: "_onChange",
        value: function _onChange(e) {
          if (this._valueClearing) {
            return;
          } // In the Shadow DOM, the `change` event is not leaked into the
          // ancestor tree, so we must do this manually.


          var changeEvent = new CustomEvent('change', {
            detail: {
              sourceEvent: e
            },
            bubbles: e.bubbles,
            cancelable: e.cancelable
          });
          this.dispatchEvent(changeEvent);
        }
      }, {
        key: "_valueChanged",
        value: function _valueChanged(newVal, oldVal) {
          // setting initial value to empty string, skip validation
          if (newVal === '' && oldVal === undefined) {
            return;
          }

          if (newVal !== '' && newVal != null) {
            this.hasValue = true;
          } else {
            this.hasValue = false;
          }

          if (this.__userInput) {
            this.__userInput = false;
            return;
          } else if (newVal !== undefined) {
            this.inputElement.value = newVal;
          } else {
            this.value = this.inputElement.value = '';
          }

          if (this.invalid) {
            this.validate();
          }
        }
      }, {
        key: "_labelChanged",
        value: function _labelChanged(label) {
          if (label !== '' && label != null) {
            this.setAttribute('has-label', '');
          } else {
            this.removeAttribute('has-label');
          }
        }
      }, {
        key: "_onSlotChange",
        value: function _onSlotChange() {
          var _this2 = this;

          var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          if (this.value) {
            this.inputElement.value = this.value;
            this.validate();
          }

          if (slotted && !this._slottedInput) {
            this._validateSlottedValue(slotted);

            this._addInputListeners(slotted);

            this._addIEListeners(slotted);

            this._slottedInput = slotted;
          } else if (!slotted && this._slottedInput) {
            this._removeInputListeners(this._slottedInput);

            this._removeIEListeners(this._slottedInput);

            this._slottedInput = undefined;
          }

          Object.keys(PROP_TYPE).map(function (key) {
            return PROP_TYPE[key];
          }).forEach(function (type) {
            return _this2._propagateHostAttributes(HOST_PROPS[type].map(function (attr) {
              return _this2[attr];
            }), type);
          });
        }
      }, {
        key: "_hostPropsChanged",
        value: function _hostPropsChanged() {
          for (var _len = arguments.length, attributesValues = new Array(_len), _key = 0; _key < _len; _key++) {
            attributesValues[_key] = arguments[_key];
          }

          this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
        }
      }, {
        key: "_hostAccessiblePropsChanged",
        value: function _hostAccessiblePropsChanged() {
          for (var _len2 = arguments.length, attributesValues = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            attributesValues[_key2] = arguments[_key2];
          }

          this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
        }
      }, {
        key: "_validateSlottedValue",
        value: function _validateSlottedValue(slotted) {
          if (slotted.value !== this.value) {
            console.warn('Please define value on the vaadin-text-field component!');
            slotted.value = '';
          }
        }
      }, {
        key: "_propagateHostAttributes",
        value: function _propagateHostAttributes(attributesValues, type) {
          var _this3 = this;

          var input = this.inputElement;
          var attributeNames = HOST_PROPS[type];

          if (type === 'accessible') {
            attributeNames.forEach(function (attr, index) {
              _this3._setOrToggleAttribute(attr, attributesValues[index], input);

              _this3._setOrToggleAttribute("aria-".concat(attr), attributesValues[index], input);
            });
          } else {
            attributeNames.forEach(function (attr, index) {
              _this3._setOrToggleAttribute(attr, attributesValues[index], input);
            });
          }
        }
      }, {
        key: "_setOrToggleAttribute",
        value: function _setOrToggleAttribute(name, value, node) {
          if (!name || !node) {
            return;
          }

          if (value) {
            node.setAttribute(name, typeof value === 'boolean' ? '' : value);
          } else {
            node.removeAttribute(name);
          }
        }
      }, {
        key: "_constraintsChanged",
        value: function _constraintsChanged(required, minlength, maxlength, pattern) {
          if (!this.invalid) {
            return;
          }

          if (!required && !minlength && !maxlength && !pattern) {
            this.invalid = false;
          } else {
            this.validate();
          }
        }
        /**
         * Returns true if the current input value satisfies all constraints (if any)
         * @returns {boolean}
         */

      }, {
        key: "checkValidity",
        value: function checkValidity() {
          if (this.required || this.pattern || this.maxlength || this.minlength) {
            return this.inputElement.checkValidity();
          } else {
            return !this.invalid;
          }
        }
      }, {
        key: "_addInputListeners",
        value: function _addInputListeners(node) {
          node.addEventListener('input', this._boundOnInput);
          node.addEventListener('change', this._boundOnChange);
          node.addEventListener('blur', this._boundOnBlur);
          node.addEventListener('focus', this._boundOnFocus);
        }
      }, {
        key: "_removeInputListeners",
        value: function _removeInputListeners(node) {
          node.removeEventListener('input', this._boundOnInput);
          node.removeEventListener('change', this._boundOnChange);
          node.removeEventListener('blur', this._boundOnBlur);
          node.removeEventListener('focus', this._boundOnFocus);
        }
      }, {
        key: "ready",
        value: function ready() {
          var _this4 = this;

          _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "ready", this).call(this);

          this._createConstraintsObserver();

          this._boundOnInput = this._onInput.bind(this);
          this._boundOnChange = this._onChange.bind(this);
          this._boundOnBlur = this._onBlur.bind(this);
          this._boundOnFocus = this._onFocus.bind(this);
          var defaultInput = this.shadowRoot.querySelector('[part="value"]');
          this._slottedInput = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          this._addInputListeners(defaultInput);

          this._addIEListeners(defaultInput);

          if (this._slottedInput) {
            this._addIEListeners(this._slottedInput);

            this._addInputListeners(this._slottedInput);
          }

          this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener('slotchange', this._onSlotChange.bind(this));

          if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
            this.updateStyles();
          }

          this.$.clearButton.addEventListener('mousedown', function () {
            return _this4._valueClearing = true;
          });
          this.$.clearButton.addEventListener('mouseleave', function () {
            return _this4._valueClearing = false;
          });
          this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
          this.addEventListener('keydown', this._onKeyDown.bind(this));
          var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
          this._errorId = "".concat(this.constructor.is, "-error-").concat(uniqueId);
          this._labelId = "".concat(this.constructor.is, "-label-").concat(uniqueId);
          this._inputId = "".concat(this.constructor.is, "-input-").concat(uniqueId); // Lumo theme defines a max-height transition for the "error-message"
          // part on invalid state change.

          this.shadowRoot.querySelector('[part="error-message"]').addEventListener('transitionend', function () {
            _this4.__observeOffsetHeight();
          });
        }
        /**
         * Returns true if `value` is valid.
         * `<iron-form>` uses this to check the validity for all its elements.
         *
         * @return {boolean} True if the value is valid.
         */

      }, {
        key: "validate",
        value: function validate() {
          return !(this.invalid = !this.checkValidity());
        }
      }, {
        key: "clear",
        value: function clear() {
          this.value = '';
        }
      }, {
        key: "_onBlur",
        value: function _onBlur() {
          this.validate();
        }
      }, {
        key: "_onFocus",
        value: function _onFocus() {
          var _this5 = this;

          if (this.autoselect) {
            this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

            setTimeout(function () {
              try {
                _this5.inputElement.setSelectionRange(0, 9999);
              } catch (e) {// The workaround may cause errors on different input types.
                // Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
              }
            });
          }
        }
      }, {
        key: "_onClearButtonClick",
        value: function _onClearButtonClick(e) {
          e.preventDefault(); // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.

          this.inputElement.focus();
          this.clear();
          this._valueClearing = false;

          if (navigator.userAgent.match(/Trident/)) {
            // Disable IE input" event prevention here, we want the input event from
            // below to propagate normally.
            this.__preventInput = false;
          }

          var inputEvent = new Event('input', {
            bubbles: true,
            composed: true
          });
          inputEvent.__fromClearButton = true;
          var changeEvent = new Event('change', {
            bubbles: !this._slottedInput
          });
          changeEvent.__fromClearButton = true;
          this.inputElement.dispatchEvent(inputEvent);
          this.inputElement.dispatchEvent(changeEvent);
        }
      }, {
        key: "_onKeyDown",
        value: function _onKeyDown(e) {
          if (e.keyCode === 27 && this.clearButtonVisible) {
            var dispatchChange = !!this.value;
            this.clear();
            dispatchChange && this.inputElement.dispatchEvent(new Event('change', {
              bubbles: !this._slottedInput
            }));
          }
        }
      }, {
        key: "_addIEListeners",
        value: function _addIEListeners(node) {
          var _this6 = this;

          /* istanbul ignore if */
          if (navigator.userAgent.match(/Trident/)) {
            // IE11 dispatches `input` event in following cases:
            // - focus or blur, when placeholder attribute is set
            // - placeholder attribute value changed
            // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
            this._shouldPreventInput = function () {
              _this6.__preventInput = true;
              requestAnimationFrame(function () {
                _this6.__preventInput = false;
              });
            };

            node.addEventListener('focusin', this._shouldPreventInput);
            node.addEventListener('focusout', this._shouldPreventInput);

            this._createPropertyObserver('placeholder', this._shouldPreventInput);
          }
        }
      }, {
        key: "_removeIEListeners",
        value: function _removeIEListeners(node) {
          /* istanbul ignore if */
          if (navigator.userAgent.match(/Trident/)) {
            node.removeEventListener('focusin', this._shouldPreventInput);
            node.removeEventListener('focusout', this._shouldPreventInput);
          }
        }
      }, {
        key: "_getActiveErrorId",
        value: function _getActiveErrorId(invalid, errorMessage, errorId) {
          this._setOrToggleAttribute('aria-describedby', errorMessage && invalid ? errorId : undefined, this.focusElement);
        }
      }, {
        key: "_getActiveLabelId",
        value: function _getActiveLabelId(label, _labelId, _inputId) {
          var ids = _inputId;

          if (label) {
            ids = "".concat(_labelId, " ").concat(_inputId);
          }

          this.focusElement.setAttribute('aria-labelledby', ids);
        }
      }, {
        key: "_getErrorMessageAriaHidden",
        value: function _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
          return (!(errorMessage && invalid ? errorId : undefined)).toString();
        }
      }, {
        key: "_dispatchIronResizeEventIfNeeded",
        value: function _dispatchIronResizeEventIfNeeded(sizePropertyName, value) {
          var previousSizePropertyName = '__previous' + sizePropertyName;

          if (this[previousSizePropertyName] !== undefined && this[previousSizePropertyName] !== value) {
            this.dispatchEvent(new CustomEvent('iron-resize', {
              bubbles: true
            }));
          }

          this[previousSizePropertyName] = value;
        }
      }, {
        key: "__observeOffsetHeight",
        value: function __observeOffsetHeight() {
          this._dispatchIronResizeEventIfNeeded('Height', this.offsetHeight);
        }
        /**
         * @protected
         */

      }, {
        key: "attributeChangedCallback",
        value: function attributeChangedCallback(prop, oldVal, newVal) {
          _get(_getPrototypeOf(VaadinTextFieldMixin.prototype), "attributeChangedCallback", this).call(this, prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

          /* istanbul ignore if */


          if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
            this.updateStyles();
          } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
          // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


          var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
          /* istanbul ignore if */

          if (isSafari && this.root) {
            var WEBKIT_PROPERTY = '-webkit-backface-visibility';
            this.root.querySelectorAll('*').forEach(function (el) {
              el.style[WEBKIT_PROPERTY] = 'visible';
              el.style[WEBKIT_PROPERTY] = '';
            });
          }
        }
        /**
         * Fired when the user commits a value change.
         *
         * @event change
         */

        /**
         * Fired when the value is changed by the user: on every typing keystroke,
         * and the value is cleared using the clear button.
         *
         * @event input
         */

        /**
         * Fired when the size of the element changes.
         *
         * @event iron-resize
         */

      }, {
        key: "focusElement",
        get: function get() {
          if (!this.shadowRoot) {
            return;
          }

          var slotted = this.querySelector("".concat(this._slottedTagName, "[slot=\"").concat(this._slottedTagName, "\"]"));

          if (slotted) {
            return slotted;
          }

          return this.shadowRoot.querySelector('[part="value"]');
        }
        /**
         * @private
         */

      }, {
        key: "inputElement",
        get: function get() {
          return this.focusElement;
        }
      }, {
        key: "_slottedTagName",
        get: function get() {
          return 'input';
        }
      }], [{
        key: "properties",
        get: function get() {
          return {
            /**
             * Whether the value of the control can be automatically completed by the browser.
             * List of available options at:
             * https://developer.mozilla.org/en/docs/Web/HTML/Element/input#attr-autocomplete
             */
            autocomplete: {
              type: String
            },

            /**
             * This is a property supported by Safari that is used to control whether
             * autocorrection should be enabled when the user is entering/editing the text.
             * Possible values are:
             * on: Enable autocorrection.
             * off: Disable autocorrection.
             */
            autocorrect: {
              type: String
            },

            /**
             * This is a property supported by Safari and Chrome that is used to control whether
             * autocapitalization should be enabled when the user is entering/editing the text.
             * Possible values are:
             * characters: Characters capitalization.
             * words: Words capitalization.
             * sentences: Sentences capitalization.
             * none: No capitalization.
             */
            autocapitalize: {
              type: String
            },

            /**
             * Specify that the value should be automatically selected when the field gains focus.
             */
            autoselect: {
              type: Boolean,
              value: false
            },

            /**
             * Set to true to display the clear icon which clears the input.
             */
            clearButtonVisible: {
              type: Boolean,
              value: false
            },

            /**
             * Error to show when the input value is invalid.
             */
            errorMessage: {
              type: String,
              value: ''
            },

            /**
             * Object with translated strings used for localization. Has
             * the following structure and default values:
             *
             * ```
             * {
             *   // Translation of the clear icon button accessible label
             *   clear: 'Clear'
             * }
             * ```
             */
            i18n: {
              type: Object,
              value: function value() {
                return {
                  clear: 'Clear'
                };
              }
            },

            /**
             * String used for the label element.
             */
            label: {
              type: String,
              value: '',
              observer: '_labelChanged'
            },

            /**
             * Maximum number of characters (in Unicode code points) that the user can enter.
             */
            maxlength: {
              type: Number
            },

            /**
             * Minimum number of characters (in Unicode code points) that the user can enter.
             */
            minlength: {
              type: Number
            },

            /**
             * The name of the control, which is submitted with the form data.
             */
            name: {
              type: String
            },

            /**
             * A hint to the user of what can be entered in the control.
             */
            placeholder: {
              type: String
            },

            /**
             * This attribute indicates that the user cannot modify the value of the control.
             */
            readonly: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * Specifies that the user must fill in a value.
             */
            required: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * The initial value of the control.
             * It can be used for two-way data binding.
             */
            value: {
              type: String,
              value: '',
              observer: '_valueChanged',
              notify: true
            },

            /**
             * This property is set to true when the control value is invalid.
             */
            invalid: {
              type: Boolean,
              reflectToAttribute: true,
              notify: true,
              value: false
            },

            /**
             * Specifies that the text field has value.
             */
            hasValue: {
              type: Boolean,
              reflectToAttribute: true
            },

            /**
             * When set to true, user is prevented from typing a value that
             * conflicts with the given `pattern`.
             */
            preventInvalidInput: {
              type: Boolean
            },
            _labelId: String,
            _errorId: String,
            _inputId: String
          };
        }
      }, {
        key: "observers",
        get: function get() {
          return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS["default"].join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId)', '_getActiveLabelId(label, _labelId, _inputId)', '__observeOffsetHeight(errorMessage, invalid, label)'];
        }
      }]);

      return VaadinTextFieldMixin;
    }(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ControlStateMixin"])(subclass))
  );
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js":
/*!*************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js ***!
  \*************************************************************************/
/*! exports provided: TextFieldElement */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TextFieldElement", function() { return TextFieldElement; });
/* harmony import */ var _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element.js */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./vaadin-text-field-mixin.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field-mixin.js");
/* harmony import */ var _vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-element-mixin/vaadin-element-mixin.js */ "./node_modules/@vaadin/vaadin-element-mixin/vaadin-element-mixin.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js */ "./node_modules/@vaadin/vaadin-themable-mixin/vaadin-themable-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"], ["\n    <style include=\"vaadin-text-field-shared-styles\">\n      /* polymer-cli linter breaks with empty line */\n    </style>\n\n    <div class=\"vaadin-text-field-container\">\n\n      <label part=\"label\" on-click=\"focus\" id=\"[[_labelId]]\">[[label]]</label>\n\n      <div part=\"input-field\" id=\"[[_inputId]]\">\n\n        <slot name=\"prefix\"></slot>\n\n        <slot name=\"input\">\n          <input part=\"value\">\n        </slot>\n\n        <div part=\"clear-button\" id=\"clearButton\" role=\"button\" aria-label\\$=\"[[i18n.clear]]\"></div>\n        <slot name=\"suffix\"></slot>\n\n      </div>\n\n      <div part=\"error-message\" id=\"[[_errorId]]\" aria-live=\"assertive\" aria-hidden\\$=\"[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]\">[[errorMessage]]</div>\n\n    </div>\n"]);

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
 * `<vaadin-text-field>` is a Web Component for text field control in forms.
 *
 * ```html
 * <vaadin-text-field label="First Name">
 * </vaadin-text-field>
 * ```
 *
 * ### Prefixes and suffixes
 *
 * These are child elements of a `<vaadin-text-field>` that are displayed
 * inline with the input, before or after.
 * In order for an element to be considered as a prefix, it must have the slot
 * attribute set to `prefix` (and similarly for `suffix`).
 *
 * ```html
 * <vaadin-text-field label="Email address">
 *   <div slot="prefix">Sent to:</div>
 *   <div slot="suffix">@vaadin.com</div>
 * </vaadin-text-area>
 * ```
 *
 * ### Styling
 *
 * The following custom properties are available for styling:
 *
 * Custom property | Description | Default
 * ----------------|-------------|-------------
 * `--vaadin-text-field-default-width` | Set the default width of the input field | `12em`
 *
 * The following shadow DOM parts are available for styling:
 *
 * Part name | Description
 * ----------------|----------------
 * `label` | The label element
 * `input-field` | The element that wraps prefix, value and suffix
 * `value` | The text value element inside the `input-field` element
 * `error-message` | The error message element
 *
 * The following state attributes are available for styling:
 *
 * Attribute    | Description | Part name
 * -------------|-------------|------------
 * `disabled` | Set to a disabled text field | :host
 * `has-value` | Set when the element has a value | :host
 * `has-label` | Set when the element has a label | :host
 * `invalid` | Set when the element is invalid | :host
 * `input-prevented` | Temporarily set when invalid input is prevented | :host
 * `focused` | Set when the element is focused | :host
 * `focus-ring` | Set when the element is keyboard focused | :host
 * `readonly` | Set to a readonly text field | :host
 *
 * See [ThemableMixin – how to apply styles for shadow parts](https://github.com/vaadin/vaadin-themable-mixin/wiki)
 *
 * @memberof Vaadin
 * @mixes Vaadin.TextFieldMixin
 * @mixes Vaadin.ThemableMixin
 * @demo demo/index.html
 */

var TextFieldElement =
/*#__PURE__*/
function (_ElementMixin) {
  _inherits(TextFieldElement, _ElementMixin);

  function TextFieldElement() {
    _classCallCheck(this, TextFieldElement);

    return _possibleConstructorReturn(this, _getPrototypeOf(TextFieldElement).apply(this, arguments));
  }

  _createClass(TextFieldElement, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "is",
    get: function get() {
      return 'vaadin-text-field';
    }
  }, {
    key: "version",
    get: function get() {
      return '2.4.14';
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        /**
         * Identifies a list of pre-defined options to suggest to the user.
         * The value must be the id of a <datalist> element in the same document.
         */
        list: {
          type: String
        },

        /**
         * A regular expression that the value is checked against.
         * The pattern must match the entire value, not just some subset.
         */
        pattern: {
          type: String
        },

        /**
         * Message to show to the user when validation fails.
         */
        title: {
          type: String
        }
      };
    }
  }]);

  return TextFieldElement;
}(Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))));

customElements.define(TextFieldElement.is, TextFieldElement);


/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field-styles.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field-styles.js ***!
  \*******************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_vaadin_material_styles_color_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/color.js */ "./node_modules/@vaadin/vaadin-material-styles/color.js");
/* harmony import */ var _vaadin_vaadin_material_styles_typography_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/typography.js */ "./node_modules/@vaadin/vaadin-material-styles/typography.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_required_field_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/required-field.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/required-field.js");
/* harmony import */ var _vaadin_vaadin_material_styles_font_icons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/font-icons.js */ "./node_modules/@vaadin/vaadin-material-styles/font-icons.js");
/* harmony import */ var _vaadin_vaadin_material_styles_mixins_field_button_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @vaadin/vaadin-material-styles/mixins/field-button.js */ "./node_modules/@vaadin/vaadin-material-styles/mixins/field-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["<dom-module id=\"material-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"material-required-field material-field-button\">\n      :host {\n        display: inline-flex;\n        position: relative;\n        padding-top: 8px;\n        margin-bottom: 8px;\n        outline: none;\n        color: var(--material-body-text-color);\n        font-size: var(--material-body-font-size);\n        line-height: 24px;\n        font-family: var(--material-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host::before {\n        line-height: 32px;\n      }\n\n      /* Strange gymnastics to make fields vertically align nicely in most cases\n         (no label, with label, without prefix, with prefix, etc.) */\n\n      :host([has-label]) {\n        padding-top: 24px;\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"label\"]:empty::before {\n        content: \"\xA0\";\n        position: absolute;\n      }\n\n      [part=\"input-field\"] {\n        position: relative;\n        top: -0.2px; /* NOTE(platosha): Adjusts for wrong flex baseline in Chrome & Safari */\n        height: 32px;\n        padding-left: 0;\n        background-color: transparent;\n        margin: 0;\n      }\n\n      [part=\"input-field\"]::before,\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        transform-origin: 50% 0%;\n        background-color: var(--_material-text-field-input-line-background-color, #000);\n        opacity: var(--_material-text-field-input-line-opacity, 0.42);\n      }\n\n      [part=\"input-field\"]::after {\n        background-color: var(--material-primary-color);\n        opacity: 0;\n        height: 2px;\n        bottom: 0;\n        transform: scaleX(0);\n        transition: opacity 0.175s;\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(input),\n      :host([disabled]) [part=\"input-field\"] ::slotted(textarea),\n      :host([disabled]) [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        color: var(--material-disabled-text-color);\n        -webkit-text-fill-color: var(--material-disabled-text-color);\n      }\n\n      [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(input),\n      :host([disabled]) [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        outline: none;\n        margin: 0;\n        border: 0;\n        border-radius: 0;\n        padding: 8px 0;\n        width: 100%;\n        height: 100%;\n        font-family: inherit;\n        font-size: 1em;\n        line-height: inherit;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      /* TODO: the text opacity should be 42%, but the disabled style is 38%.\n      Would need to introduce another property for it if we want to be 100% accurate. */\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: var(--material-disabled-text-color);\n        transition: opacity 0.175s 0.05s;\n        opacity: 1;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: var(--material-disabled-text-color);\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: var(--material-disabled-text-color);\n        transition: opacity 0.175s 0.05s;\n        opacity: 1;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: var(--material-disabled-text-color);\n        transition: opacity 0.175s 0.1s;\n        opacity: 1;\n      }\n\n      :host([has-label]:not([focused]):not([invalid]):not([theme=\"always-float-label\"])) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n        transition-delay: 0;\n      }\n\n      :host([has-label]:not([focused]):not([invalid]):not([theme=\"always-float-label\"])) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n        transition-delay: 0;\n      }\n\n      :host([has-label]:not([focused]):not([invalid]):not([theme=\"always-float-label\"])) [part=\"value\"]::placeholder {\n        opacity: 0;\n        transition-delay: 0;\n      }\n\n      /* IE11 doesn\u2019t show the placeholder when the input is focused, so it\u2019s basically useless for this theme */\n      :host([has-label]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      [part=\"label\"] {\n        width: 133%;\n        transition: transform 0.175s, color 0.175s, width 0.175s;\n        transition-timing-function: ease, ease, step-end;\n      }\n\n      /* TODO: using unsupported selector to fix IE11 (even thought the label element is scaled down,\n         the 133% width still takes the same space as an unscaled element */\n      ::-ms-backdrop,\n      .vaadin-text-field-container {\n        overflow: hidden;\n      }\n\n      /* Same fix for MS Edge ^^   */\n      @supports (-ms-ime-align:auto) {\n        .vaadin-text-field-container {\n          overflow: hidden;\n        }\n      }\n\n      :host(:hover:not([readonly]):not([invalid])) [part=\"input-field\"]::before {\n        opacity: var(--_material-text-field-input-line-hover-opacity, 0.87);\n      }\n\n      :host([focused]:not([invalid])) [part=\"label\"] {\n        color: var(--material-primary-text-color);\n      }\n\n      :host([focused]) [part=\"input-field\"]::after,\n      :host([invalid]) [part=\"input-field\"]::after {\n        opacity: 1;\n        transform: none;\n        transition: transform 0.175s, opacity 0.175s;\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--material-error-color);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--material-error-text-color);\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        color: var(--material-disabled-text-color);\n      }\n\n      :host([disabled]) [part=\"input-field\"]::before {\n        background-color: transparent;\n        background-image: linear-gradient(90deg, var(--_material-text-field-input-line-background-color, #000) 0, var(--_material-text-field-input-line-background-color, #000) 2px, transparent 2px);\n        background-size: 4px 1px;\n        background-repeat: repeat-x;\n      }\n\n      /* Only target the visible floating label */\n      :host([has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~=\"always-float-label\"])) [part=\"label\"] {\n        width: 100%;\n        /* IE11 doesn\u2019t work with calc inside the translate function, so we need to have a fixed pixel value instead of 50% + 16px */\n        transform: scale(1) translateY(24px);\n        transition-timing-function: ease, ease, step-start;\n        pointer-events: none;\n        left: auto;\n        transition-delay: 0.1s;\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(*:not([part=\"value\"]):not([part$=\"-button\"]):not(input):not(textarea)) {\n        color: var(--material-secondary-text-color);\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--material-icons-clear);\n      }\n    </style>\n  </template>\n</dom-module>"], ["<dom-module id=\"material-text-field\" theme-for=\"vaadin-text-field\">\n  <template>\n    <style include=\"material-required-field material-field-button\">\n      :host {\n        display: inline-flex;\n        position: relative;\n        padding-top: 8px;\n        margin-bottom: 8px;\n        outline: none;\n        color: var(--material-body-text-color);\n        font-size: var(--material-body-font-size);\n        line-height: 24px;\n        font-family: var(--material-font-family);\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      :host::before {\n        line-height: 32px;\n      }\n\n      /* Strange gymnastics to make fields vertically align nicely in most cases\n         (no label, with label, without prefix, with prefix, etc.) */\n\n      :host([has-label]) {\n        padding-top: 24px;\n      }\n\n      [part=\"label\"]:empty {\n        display: none;\n      }\n\n      [part=\"label\"]:empty::before {\n        content: \"\xA0\";\n        position: absolute;\n      }\n\n      [part=\"input-field\"] {\n        position: relative;\n        top: -0.2px; /* NOTE(platosha): Adjusts for wrong flex baseline in Chrome & Safari */\n        height: 32px;\n        padding-left: 0;\n        background-color: transparent;\n        margin: 0;\n      }\n\n      [part=\"input-field\"]::before,\n      [part=\"input-field\"]::after {\n        content: \"\";\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        transform-origin: 50% 0%;\n        background-color: var(--_material-text-field-input-line-background-color, #000);\n        opacity: var(--_material-text-field-input-line-opacity, 0.42);\n      }\n\n      [part=\"input-field\"]::after {\n        background-color: var(--material-primary-color);\n        opacity: 0;\n        height: 2px;\n        bottom: 0;\n        transform: scaleX(0);\n        transition: opacity 0.175s;\n      }\n\n      :host([disabled]) [part=\"label\"],\n      :host([disabled]) [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(input),\n      :host([disabled]) [part=\"input-field\"] ::slotted(textarea),\n      :host([disabled]) [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        color: var(--material-disabled-text-color);\n        -webkit-text-fill-color: var(--material-disabled-text-color);\n      }\n\n      [part=\"value\"],\n      :host([disabled]) [part=\"input-field\"] ::slotted(input),\n      :host([disabled]) [part=\"input-field\"] ::slotted(textarea),\n      /* Slotted by vaadin-select-text-field */\n      [part=\"input-field\"] ::slotted([part=\"value\"]) {\n        outline: none;\n        margin: 0;\n        border: 0;\n        border-radius: 0;\n        padding: 8px 0;\n        width: 100%;\n        height: 100%;\n        font-family: inherit;\n        font-size: 1em;\n        line-height: inherit;\n        color: inherit;\n        background-color: transparent;\n        /* Disable default invalid style in Firefox */\n        box-shadow: none;\n      }\n\n      /* TODO: the text opacity should be 42%, but the disabled style is 38%.\n      Would need to introduce another property for it if we want to be 100% accurate. */\n      [part=\"value\"]::-webkit-input-placeholder {\n        color: var(--material-disabled-text-color);\n        transition: opacity 0.175s 0.05s;\n        opacity: 1;\n      }\n\n      [part=\"value\"]:-ms-input-placeholder {\n        color: var(--material-disabled-text-color);\n      }\n\n      [part=\"value\"]::-moz-placeholder {\n        color: var(--material-disabled-text-color);\n        transition: opacity 0.175s 0.05s;\n        opacity: 1;\n      }\n\n      [part=\"value\"]::placeholder {\n        color: var(--material-disabled-text-color);\n        transition: opacity 0.175s 0.1s;\n        opacity: 1;\n      }\n\n      :host([has-label]:not([focused]):not([invalid]):not([theme=\"always-float-label\"])) [part=\"value\"]::-webkit-input-placeholder {\n        opacity: 0;\n        transition-delay: 0;\n      }\n\n      :host([has-label]:not([focused]):not([invalid]):not([theme=\"always-float-label\"])) [part=\"value\"]::-moz-placeholder {\n        opacity: 0;\n        transition-delay: 0;\n      }\n\n      :host([has-label]:not([focused]):not([invalid]):not([theme=\"always-float-label\"])) [part=\"value\"]::placeholder {\n        opacity: 0;\n        transition-delay: 0;\n      }\n\n      /* IE11 doesn\u2019t show the placeholder when the input is focused, so it\u2019s basically useless for this theme */\n      :host([has-label]) [part=\"value\"]:-ms-input-placeholder {\n        opacity: 0;\n      }\n\n      [part=\"label\"] {\n        width: 133%;\n        transition: transform 0.175s, color 0.175s, width 0.175s;\n        transition-timing-function: ease, ease, step-end;\n      }\n\n      /* TODO: using unsupported selector to fix IE11 (even thought the label element is scaled down,\n         the 133% width still takes the same space as an unscaled element */\n      ::-ms-backdrop,\n      .vaadin-text-field-container {\n        overflow: hidden;\n      }\n\n      /* Same fix for MS Edge ^^   */\n      @supports (-ms-ime-align:auto) {\n        .vaadin-text-field-container {\n          overflow: hidden;\n        }\n      }\n\n      :host(:hover:not([readonly]):not([invalid])) [part=\"input-field\"]::before {\n        opacity: var(--_material-text-field-input-line-hover-opacity, 0.87);\n      }\n\n      :host([focused]:not([invalid])) [part=\"label\"] {\n        color: var(--material-primary-text-color);\n      }\n\n      :host([focused]) [part=\"input-field\"]::after,\n      :host([invalid]) [part=\"input-field\"]::after {\n        opacity: 1;\n        transform: none;\n        transition: transform 0.175s, opacity 0.175s;\n      }\n\n      :host([invalid]) [part=\"input-field\"]::after {\n        background-color: var(--material-error-color);\n      }\n\n      :host([input-prevented]) [part=\"input-field\"] {\n        color: var(--material-error-text-color);\n      }\n\n      :host([disabled]) {\n        pointer-events: none;\n      }\n\n      :host([disabled]) [part=\"input-field\"] {\n        color: var(--material-disabled-text-color);\n      }\n\n      :host([disabled]) [part=\"input-field\"]::before {\n        background-color: transparent;\n        background-image: linear-gradient(90deg, var(--_material-text-field-input-line-background-color, #000) 0, var(--_material-text-field-input-line-background-color, #000) 2px, transparent 2px);\n        background-size: 4px 1px;\n        background-repeat: repeat-x;\n      }\n\n      /* Only target the visible floating label */\n      :host([has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~=\"always-float-label\"])) [part=\"label\"] {\n        width: 100%;\n        /* IE11 doesn\u2019t work with calc inside the translate function, so we need to have a fixed pixel value instead of 50% + 16px */\n        transform: scale(1) translateY(24px);\n        transition-timing-function: ease, ease, step-start;\n        pointer-events: none;\n        left: auto;\n        transition-delay: 0.1s;\n      }\n\n      /* Slotted content */\n\n      [part=\"input-field\"] ::slotted(*:not([part=\"value\"]):not([part\\$=\"-button\"]):not(input):not(textarea)) {\n        color: var(--material-secondary-text-color);\n      }\n\n      [part=\"clear-button\"]::before {\n        content: var(--material-icons-clear);\n      }\n    </style>\n  </template>\n</dom-module>"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }







var $_documentContainer = Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject());
document.head.appendChild($_documentContainer.content);

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field.js ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_text_field_styles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-text-field-styles.js */ "./node_modules/@vaadin/vaadin-text-field/theme/material/vaadin-text-field-styles.js");
/* harmony import */ var _src_vaadin_text_field_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../src/vaadin-text-field.js */ "./node_modules/@vaadin/vaadin-text-field/src/vaadin-text-field.js");



/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js ***!
  \*****************************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return usageStatistics; });
/* harmony import */ var _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js */ "./node_modules/@vaadin/vaadin-development-mode-detector/vaadin-development-mode-detector.js");
/* This file is autogenerated from src/vaadin-usage-statistics.tpl.html */

/*

This script gathers usage statistics from the application running in development mode.

Statistics gathering is automatically disabled and excluded from production builds.

For details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.

*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/


function maybeGatherAndSendStats() {
  /** vaadin-dev-mode:start
  (function () {
  'use strict';
  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
  } : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };
  var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
  };
  var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
   return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
  }();
  var getPolymerVersion = function getPolymerVersion() {
  return window.Polymer && window.Polymer.version;
  };
  var StatisticsGatherer = function () {
  function StatisticsGatherer(logger) {
    classCallCheck(this, StatisticsGatherer);
     this.now = new Date().getTime();
    this.logger = logger;
  }
   createClass(StatisticsGatherer, [{
    key: 'frameworkVersionDetectors',
    value: function frameworkVersionDetectors() {
      return {
        'Flow': function Flow() {
          if (window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients) {
            var flowVersions = Object.keys(window.Vaadin.Flow.clients).map(function (key) {
              return window.Vaadin.Flow.clients[key];
            }).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().flow;
            });
            if (flowVersions.length > 0) {
              return flowVersions[0];
            }
          }
        },
        'Vaadin Framework': function VaadinFramework() {
          if (window.vaadin && window.vaadin.clients) {
            var frameworkVersions = Object.values(window.vaadin.clients).filter(function (client) {
              return client.getVersionInfo;
            }).map(function (client) {
              return client.getVersionInfo().vaadinVersion;
            });
            if (frameworkVersions.length > 0) {
              return frameworkVersions[0];
            }
          }
        },
        'AngularJs': function AngularJs() {
          if (window.angular && window.angular.version && window.angular.version) {
            return window.angular.version.full;
          }
        },
        'Angular': function Angular() {
          if (window.ng) {
            var tags = document.querySelectorAll("[ng-version]");
            if (tags.length > 0) {
              return tags[0].getAttribute("ng-version");
            }
            return "Unknown";
          }
        },
        'Backbone.js': function BackboneJs() {
          if (window.Backbone) {
            return window.Backbone.VERSION;
          }
        },
        'React': function React() {
          var reactSelector = '[data-reactroot], [data-reactid]';
          if (!!document.querySelector(reactSelector)) {
            // React does not publish the version by default
            return "unknown";
          }
        },
        'Ember': function Ember() {
          if (window.Em && window.Em.VERSION) {
            return window.Em.VERSION;
          } else if (window.Ember && window.Ember.VERSION) {
            return window.Ember.VERSION;
          }
        },
        'jQuery': function (_jQuery) {
          function jQuery() {
            return _jQuery.apply(this, arguments);
          }
           jQuery.toString = function () {
            return _jQuery.toString();
          };
           return jQuery;
        }(function () {
          if (typeof jQuery === 'function' && jQuery.prototype.jquery !== undefined) {
            return jQuery.prototype.jquery;
          }
        }),
        'Polymer': function Polymer() {
          var version = getPolymerVersion();
          if (version) {
            return version;
          }
        },
        'LitElement': function LitElement() {
          var version = window.litElementVersions && window.litElementVersions[0];
          if (version) {
            return version;
          }
        },
        'LitHtml': function LitHtml() {
          var version = window.litHtmlVersions && window.litHtmlVersions[0];
          if (version) {
            return version;
          }
        },
        'Vue.js': function VueJs() {
          if (window.Vue) {
            return window.Vue.version;
          }
        }
      };
    }
  }, {
    key: 'getUsedVaadinElements',
    value: function getUsedVaadinElements(elements) {
      var version = getPolymerVersion();
      var elementClasses = void 0;
      // NOTE: In case you edit the code here, YOU MUST UPDATE any statistics reporting code in Flow.
      // Check all locations calling the method getEntries() in
      // https://github.com/vaadin/flow/blob/master/flow-server/src/main/java/com/vaadin/flow/internal/UsageStatistics.java#L106
      // Currently it is only used by BootstrapHandler.
      if (version && version.indexOf('2') === 0) {
        // Polymer 2: components classes are stored in window.Vaadin
        elementClasses = Object.keys(window.Vaadin).map(function (c) {
          return window.Vaadin[c];
        }).filter(function (c) {
          return c.is;
        });
      } else {
        // Polymer 3: components classes are stored in window.Vaadin.registrations
        elementClasses = window.Vaadin.registrations || [];
      }
      elementClasses.forEach(function (klass) {
        var version = klass.version ? klass.version : "0.0.0";
        elements[klass.is] = { version: version };
      });
    }
  }, {
    key: 'getUsedVaadinThemes',
    value: function getUsedVaadinThemes(themes) {
      ['Lumo', 'Material'].forEach(function (themeName) {
        var theme;
        var version = getPolymerVersion();
        if (version && version.indexOf('2') === 0) {
          // Polymer 2: themes are stored in window.Vaadin
          theme = window.Vaadin[themeName];
        } else {
          // Polymer 3: themes are stored in custom element registry
          theme = customElements.get('vaadin-' + themeName.toLowerCase() + '-styles');
        }
        if (theme && theme.version) {
          themes[themeName] = { version: theme.version };
        }
      });
    }
  }, {
    key: 'getFrameworks',
    value: function getFrameworks(frameworks) {
      var detectors = this.frameworkVersionDetectors();
      Object.keys(detectors).forEach(function (framework) {
        var detector = detectors[framework];
        try {
          var version = detector();
          if (version) {
            frameworks[framework] = { version: version };
          }
        } catch (e) {}
      });
    }
  }, {
    key: 'gather',
    value: function gather(storage) {
      var storedStats = storage.read();
      var gatheredStats = {};
      var types = ["elements", "frameworks", "themes"];
       types.forEach(function (type) {
        gatheredStats[type] = {};
        if (!storedStats[type]) {
          storedStats[type] = {};
        }
      });
       var previousStats = JSON.stringify(storedStats);
       this.getUsedVaadinElements(gatheredStats.elements);
      this.getFrameworks(gatheredStats.frameworks);
      this.getUsedVaadinThemes(gatheredStats.themes);
       var now = this.now;
      types.forEach(function (type) {
        var keys = Object.keys(gatheredStats[type]);
        keys.forEach(function (key) {
          if (!storedStats[type][key] || _typeof(storedStats[type][key]) != _typeof({})) {
            storedStats[type][key] = { firstUsed: now };
          }
          // Discards any previously logged version number
          storedStats[type][key].version = gatheredStats[type][key].version;
          storedStats[type][key].lastUsed = now;
        });
      });
       var newStats = JSON.stringify(storedStats);
      storage.write(newStats);
      if (newStats != previousStats && Object.keys(storedStats).length > 0) {
        this.logger.debug("New stats: " + newStats);
      }
    }
  }]);
  return StatisticsGatherer;
  }();
  var StatisticsStorage = function () {
  function StatisticsStorage(key) {
    classCallCheck(this, StatisticsStorage);
     this.key = key;
  }
   createClass(StatisticsStorage, [{
    key: 'read',
    value: function read() {
      var localStorageStatsString = localStorage.getItem(this.key);
      try {
        return JSON.parse(localStorageStatsString ? localStorageStatsString : '{}');
      } catch (e) {
        return {};
      }
    }
  }, {
    key: 'write',
    value: function write(data) {
      localStorage.setItem(this.key, data);
    }
  }, {
    key: 'clear',
    value: function clear() {
      localStorage.removeItem(this.key);
    }
  }, {
    key: 'isEmpty',
    value: function isEmpty() {
      var storedStats = this.read();
      var empty = true;
      Object.keys(storedStats).forEach(function (key) {
        if (Object.keys(storedStats[key]).length > 0) {
          empty = false;
        }
      });
       return empty;
    }
  }]);
  return StatisticsStorage;
  }();
  var StatisticsSender = function () {
  function StatisticsSender(url, logger) {
    classCallCheck(this, StatisticsSender);
     this.url = url;
    this.logger = logger;
  }
   createClass(StatisticsSender, [{
    key: 'send',
    value: function send(data, errorHandler) {
      var logger = this.logger;
       if (navigator.onLine === false) {
        logger.debug("Offline, can't send");
        errorHandler();
        return;
      }
      logger.debug("Sending data to " + this.url);
       var req = new XMLHttpRequest();
      req.withCredentials = true;
      req.addEventListener("load", function () {
        // Stats sent, nothing more to do
        logger.debug("Response: " + req.responseText);
      });
      req.addEventListener("error", function () {
        logger.debug("Send failed");
        errorHandler();
      });
      req.addEventListener("abort", function () {
        logger.debug("Send aborted");
        errorHandler();
      });
      req.open("POST", this.url);
      req.setRequestHeader("Content-Type", "application/json");
      req.send(data);
    }
  }]);
  return StatisticsSender;
  }();
  var StatisticsLogger = function () {
  function StatisticsLogger(id) {
    classCallCheck(this, StatisticsLogger);
     this.id = id;
  }
   createClass(StatisticsLogger, [{
    key: '_isDebug',
    value: function _isDebug() {
      return localStorage.getItem("vaadin." + this.id + ".debug");
    }
  }, {
    key: 'debug',
    value: function debug(msg) {
      if (this._isDebug()) {
        console.info(this.id + ": " + msg);
      }
    }
  }]);
  return StatisticsLogger;
  }();
  var UsageStatistics = function () {
  function UsageStatistics() {
    classCallCheck(this, UsageStatistics);
     this.now = new Date();
    this.timeNow = this.now.getTime();
    this.gatherDelay = 10; // Delay between loading this file and gathering stats
    this.initialDelay = 24 * 60 * 60;
     this.logger = new StatisticsLogger("statistics");
    this.storage = new StatisticsStorage("vaadin.statistics.basket");
    this.gatherer = new StatisticsGatherer(this.logger);
    this.sender = new StatisticsSender("https://tools.vaadin.com/usage-stats/submit", this.logger);
  }
   createClass(UsageStatistics, [{
    key: 'maybeGatherAndSend',
    value: function maybeGatherAndSend() {
      var _this = this;
       if (localStorage.getItem(UsageStatistics.optOutKey)) {
        return;
      }
      this.gatherer.gather(this.storage);
      setTimeout(function () {
        _this.maybeSend();
      }, this.gatherDelay * 1000);
    }
  }, {
    key: 'lottery',
    value: function lottery() {
      return true;
    }
  }, {
    key: 'currentMonth',
    value: function currentMonth() {
      return this.now.getYear() * 12 + this.now.getMonth();
    }
  }, {
    key: 'maybeSend',
    value: function maybeSend() {
      var firstUse = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      var monthProcessed = Number(localStorage.getItem(UsageStatistics.monthProcessedKey));
       if (!firstUse) {
        // Use a grace period to avoid interfering with tests, incognito mode etc
        firstUse = this.timeNow;
        localStorage.setItem(UsageStatistics.firstUseKey, firstUse);
      }
       if (this.timeNow < firstUse + this.initialDelay * 1000) {
        this.logger.debug("No statistics will be sent until the initial delay of " + this.initialDelay + "s has passed");
        return;
      }
      if (this.currentMonth() <= monthProcessed) {
        this.logger.debug("This month has already been processed");
        return;
      }
      localStorage.setItem(UsageStatistics.monthProcessedKey, this.currentMonth());
      // Use random sampling
      if (this.lottery()) {
        this.logger.debug("Congratulations, we have a winner!");
      } else {
        this.logger.debug("Sorry, no stats from you this time");
        return;
      }
       this.send();
    }
  }, {
    key: 'send',
    value: function send() {
      // Ensure we have the latest data
      this.gatherer.gather(this.storage);
       // Read, send and clean up
      var data = this.storage.read();
      data["firstUse"] = Number(localStorage.getItem(UsageStatistics.firstUseKey));
      data["usageStatisticsVersion"] = UsageStatistics.version;
      var info = 'This request contains usage statistics gathered from the application running in development mode. \n\nStatistics gathering is automatically disabled and excluded from production builds.\n\nFor details and to opt-out, see https://github.com/vaadin/vaadin-usage-statistics.\n\n\n\n';
      var self = this;
      this.sender.send(info + JSON.stringify(data), function () {
        // Revert the 'month processed' flag
        localStorage.setItem(UsageStatistics.monthProcessedKey, self.currentMonth() - 1);
      });
    }
  }], [{
    key: 'version',
    get: function get$1() {
      return '2.1.0';
    }
  }, {
    key: 'firstUseKey',
    get: function get$1() {
      return 'vaadin.statistics.firstuse';
    }
  }, {
    key: 'monthProcessedKey',
    get: function get$1() {
      return 'vaadin.statistics.monthProcessed';
    }
  }, {
    key: 'optOutKey',
    get: function get$1() {
      return 'vaadin.statistics.optout';
    }
  }]);
  return UsageStatistics;
  }();
  try {
  window.Vaadin = window.Vaadin || {};
  window.Vaadin.usageStatsChecker = window.Vaadin.usageStatsChecker || new UsageStatistics();
  window.Vaadin.usageStatsChecker.maybeGatherAndSend();
  } catch (e) {
  // Intentionally ignored as this is not a problem in the app being developed
  }
  }());
   vaadin-dev-mode:end **/
}

var usageStatistics = function usageStatistics() {
  if (typeof _vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"] === 'function') {
    return Object(_vaadin_vaadin_development_mode_detector_vaadin_development_mode_detector_js__WEBPACK_IMPORTED_MODULE_0__["runIfDevelopmentMode"])(maybeGatherAndSendStats);
  }
};

/***/ }),

/***/ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics.js ***!
  \*********************************************************************************/
/*! exports provided: usageStatistics */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./vaadin-usage-statistics-collect.js */ "./node_modules/@vaadin/vaadin-usage-statistics/vaadin-usage-statistics-collect.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "usageStatistics", function() { return _vaadin_usage_statistics_collect_js__WEBPACK_IMPORTED_MODULE_0__["usageStatistics"]; });



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tbWVkaWEtcXVlcnkvaXJvbi1tZWRpYS1xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1iZWhhdmlvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1idXR0b24vc3JjL3ZhYWRpbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWJ1dHRvbi90aGVtZS9tYXRlcmlhbC92YWFkaW4tYnV0dG9uLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tYnV0dG9uL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3NyYy92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1tb250aC1jYWxlbmRhci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1kYXRlLXBpY2tlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLW1vbnRoLWNhbGVuZGFyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLW1vbnRoLWNhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1lbGVtZW50LW1peGluL3ZhYWRpbi1lbGVtZW50LW1peGluLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL2ZpZWxkLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL21peGlucy9yZXF1aXJlZC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC9zcmMvdmFhZGluLXRleHQtZmllbGQtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLXRleHQtZmllbGQvc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi10ZXh0LWZpZWxkLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC90aGVtZS9tYXRlcmlhbC92YWFkaW4tdGV4dC1maWVsZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy1jb2xsZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5hcHAtdG9vbGJhciBpcyBhIGhvcml6b250YWwgdG9vbGJhciBjb250YWluaW5nIGl0ZW1zIHRoYXQgY2FuIGJlIHVzZWQgZm9yXG5sYWJlbCwgbmF2aWdhdGlvbiwgc2VhcmNoIGFuZCBhY3Rpb25zLlxuXG4jIyMgRXhhbXBsZVxuXG5BZGQgYSB0aXRsZSB0byB0aGUgdG9vbGJhci5cblxuYGBgaHRtbFxuPGFwcC10b29sYmFyPlxuICA8ZGl2IG1haW4tdGl0bGU+QXBwIG5hbWU8L2Rpdj5cbjwvYXBwLXRvb2xiYXI+XG5gYGBcblxuQWRkIGEgYnV0dG9uIHRvIHRoZSBsZWZ0IGFuZCByaWdodCBzaWRlIG9mIHRoZSB0b29sYmFyLlxuXG5gYGBodG1sXG48YXBwLXRvb2xiYXI+XG4gIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwibWVudVwiPjwvcGFwZXItaWNvbi1idXR0b24+XG4gIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuICA8cGFwZXItaWNvbi1idXR0b24gaWNvbj1cInNlYXJjaFwiPjwvcGFwZXItaWNvbi1idXR0b24+XG48L2FwcC10b29sYmFyPlxuYGBgXG5cbllvdSBjYW4gdXNlIHRoZSBhdHRyaWJ1dGVzIGB0b3AtaXRlbWAgb3IgYGJvdHRvbS1pdGVtYCB0byBjb21wbGV0ZWx5IGZpdCBhblxuZWxlbWVudCB0byB0aGUgdG9wIG9yIGJvdHRvbSBvZiB0aGUgdG9vbGJhciByZXNwZWN0aXZlbHkuXG5cbiMjIyBDb250ZW50IGF0dHJpYnV0ZXNcblxuQXR0cmlidXRlICAgICAgICAgICAgfCBEZXNjcmlwdGlvblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuYG1haW4tdGl0bGVgICAgICAgICAgfCBUaGUgbWFpbiB0aXRsZSBlbGVtZW50LlxuYGNvbmRlbnNlZC10aXRsZWAgICAgfCBUaGUgdGl0bGUgZWxlbWVudCBpZiB1c2VkIGluc2lkZSBhIGNvbmRlbnNlZCBhcHAtaGVhZGVyLlxuYHNwYWNlcmAgICAgICAgICAgICAgfCBBZGRzIGEgbGVmdCBtYXJnaW4gb2YgYDY0cHhgLlxuYGJvdHRvbS1pdGVtYCAgICAgICAgfCBTdGlja3MgdGhlIGVsZW1lbnQgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdG9vbGJhci5cbmB0b3AtaXRlbWAgICAgICAgICAgIHwgU3RpY2tzIHRoZSBlbGVtZW50IHRvIHRoZSB0b3Agb2YgdGhlIHRvb2xiYXIuXG5cbiMjIyBTdHlsaW5nXG5cbkN1c3RvbSBwcm9wZXJ0eSAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gLS1hcHAtdG9vbGJhci1mb250LXNpemVgICAgIHwgVG9vbGJhciBmb250IHNpemUgICAgICAgICAgICB8IDIwcHhcblxuQGdyb3VwIEFwcCBFbGVtZW50c1xuQGVsZW1lbnQgYXBwLXRvb2xiYXJcbkBkZW1vIGFwcC10b29sYmFyL2RlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogNjRweDtcbiAgICAgICAgcGFkZGluZzogMCAxNnB4O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1hcHAtdG9vbGJhci1mb250LXNpemUsIDIwcHgpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoKikge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKHBhcGVyLWljb24tYnV0dG9uKSB7XG4gICAgICAgIC8qIHBhcGVyLWljb24tYnV0dG9uL2lzc3Vlcy8zMyAqL1xuICAgICAgICBmb250LXNpemU6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbbWFpbi10aXRsZV0pLFxuICAgICAgOmhvc3QgOjpzbG90dGVkKFtjb25kZW5zZWQtdGl0bGVdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZmxleDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKFtib3R0b20taXRlbV0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoW3RvcC1pdGVtXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbc3BhY2VyXSkge1xuICAgICAgICBtYXJnaW4tbGVmdDogNjRweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNsb3Q+PC9zbG90PlxuYCxcblxuICBpczogJ2FwcC10b29sYmFyJ1xufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uTWV0YX0gZnJvbSAnQHBvbHltZXIvaXJvbi1tZXRhL2lyb24tbWV0YS5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQge0Jhc2V9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKipcblxuVGhlIGBpcm9uLWljb25gIGVsZW1lbnQgZGlzcGxheXMgYW4gaWNvbi4gQnkgZGVmYXVsdCBhbiBpY29uIHJlbmRlcnMgYXMgYSAyNHB4XG5zcXVhcmUuXG5cbkV4YW1wbGUgdXNpbmcgc3JjOlxuXG4gICAgPGlyb24taWNvbiBzcmM9XCJzdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG5FeGFtcGxlIHNldHRpbmcgc2l6ZSB0byAzMnB4IHggMzJweDpcblxuICAgIDxpcm9uLWljb24gY2xhc3M9XCJiaWdcIiBzcmM9XCJiaWdfc3Rhci5wbmdcIj48L2lyb24taWNvbj5cblxuICAgIDxzdHlsZSBpcz1cImN1c3RvbS1zdHlsZVwiPlxuICAgICAgLmJpZyB7XG4gICAgICAgIC0taXJvbi1pY29uLWhlaWdodDogMzJweDtcbiAgICAgICAgLS1pcm9uLWljb24td2lkdGg6IDMycHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuVGhlIGlyb24gZWxlbWVudHMgaW5jbHVkZSBzZXZlcmFsIHNldHMgb2YgaWNvbnMuIFRvIHVzZSB0aGUgZGVmYXVsdCBzZXQgb2Zcbmljb25zLCBpbXBvcnQgYGlyb24taWNvbnMuanNgIGFuZCB1c2UgdGhlIGBpY29uYCBhdHRyaWJ1dGUgdG8gc3BlY2lmeSBhbiBpY29uOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2lyb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cIm1lbnVcIj48L2lyb24taWNvbj5cblxuVG8gdXNlIGEgZGlmZmVyZW50IGJ1aWx0LWluIHNldCBvZiBpY29ucywgaW1wb3J0IHRoZSBzcGVjaWZpY1xuYGlyb24taWNvbnMvPGljb25zZXQ+LWljb25zLmpzYCwgYW5kIHNwZWNpZnkgdGhlIGljb24gYXMgYDxpY29uc2V0Pjo8aWNvbj5gLlxuRm9yIGV4YW1wbGUsIHRvIHVzZSBhIGNvbW11bmljYXRpb24gaWNvbiwgeW91IHdvdWxkIHVzZTpcblxuICAgIDxzY3JpcHQgdHlwZT1cIm1vZHVsZVwiPlxuICAgICAgaW1wb3J0IFwiQHBvbHltZXIvaXJvbi1pY29ucy9jb21tdW5pY2F0aW9uLWljb25zLmpzXCI7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJjb21tdW5pY2F0aW9uOmVtYWlsXCI+PC9pcm9uLWljb24+XG5cbllvdSBjYW4gYWxzbyBjcmVhdGUgY3VzdG9tIGljb24gc2V0cyBvZiBiaXRtYXAgb3IgU1ZHIGljb25zLlxuXG5FeGFtcGxlIG9mIHVzaW5nIGFuIGljb24gbmFtZWQgYGNoZXJyeWAgZnJvbSBhIGN1c3RvbSBpY29uc2V0IHdpdGggdGhlIElEXG5gZnJ1aXRgOlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwiZnJ1aXQ6Y2hlcnJ5XCI+PC9pcm9uLWljb24+XG5cblNlZSBgPGlyb24taWNvbnNldD5gIGFuZCBgPGlyb24taWNvbnNldC1zdmc+YCBmb3IgbW9yZSBpbmZvcm1hdGlvbiBhYm91dCBob3cgdG9cbmNyZWF0ZSBhIGN1c3RvbSBpY29uc2V0LlxuXG5TZWUgdGhlIGBpcm9uLWljb25zYCBkZW1vIHRvIHNlZSB0aGUgaWNvbnMgYXZhaWxhYmxlIGluIHRoZSB2YXJpb3VzIGljb25zZXRzLlxuXG4jIyMgU3R5bGluZ1xuXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24taWNvbmAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBpY29uIHwge31cbmAtLWlyb24taWNvbi13aWR0aGAgfCBXaWR0aCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWhlaWdodGAgfCBIZWlnaHQgb2YgdGhlIGljb24gfCBgMjRweGBcbmAtLWlyb24taWNvbi1maWxsLWNvbG9yYCB8IEZpbGwgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgYGN1cnJlbnRjb2xvcmBcbmAtLWlyb24taWNvbi1zdHJva2UtY29sb3JgIHwgU3Ryb2tlIGNvbG9yIG9mIHRoZSBzdmcgaWNvbiB8IG5vbmVcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBlbGVtZW50IGlyb24taWNvblxuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGhvbWVwYWdlIHBvbHltZXIuZ2l0aHViLmlvXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1pbmxpbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXItY2VudGVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcblxuICAgICAgICBmaWxsOiB2YXIoLS1pcm9uLWljb24tZmlsbC1jb2xvciwgY3VycmVudGNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1pcm9uLWljb24tc3Ryb2tlLWNvbG9yLCBub25lKTtcblxuICAgICAgICB3aWR0aDogdmFyKC0taXJvbi1pY29uLXdpZHRoLCAyNHB4KTtcbiAgICAgICAgaGVpZ2h0OiB2YXIoLS1pcm9uLWljb24taGVpZ2h0LCAyNHB4KTtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1pY29uO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5gLFxuXG4gIGlzOiAnaXJvbi1pY29uJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgaWNvbiB0byB1c2UuIFRoZSBuYW1lIHNob3VsZCBiZSBvZiB0aGUgZm9ybTpcbiAgICAgKiBgaWNvbnNldF9uYW1lOmljb25fbmFtZWAuXG4gICAgICovXG4gICAgaWNvbjoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbmFtZSBvZiB0aGUgdGhlbWUgdG8gdXNlZCwgaWYgb25lIGlzIHNwZWNpZmllZCBieSB0aGVcbiAgICAgKiBpY29uc2V0LlxuICAgICAqL1xuICAgIHRoZW1lOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIElmIHVzaW5nIGlyb24taWNvbiB3aXRob3V0IGFuIGljb25zZXQsIHlvdSBjYW4gc2V0IHRoZSBzcmMgdG8gYmVcbiAgICAgKiB0aGUgVVJMIG9mIGFuIGluZGl2aWR1YWwgaWNvbiBpbWFnZSBmaWxlLiBOb3RlIHRoYXQgdGhpcyB3aWxsIHRha2VcbiAgICAgKiBwcmVjZWRlbmNlIG92ZXIgYSBnaXZlbiBpY29uIGF0dHJpYnV0ZS5cbiAgICAgKi9cbiAgICBzcmM6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUgeyFJcm9uTWV0YX1cbiAgICAgKi9cbiAgICBfbWV0YToge3ZhbHVlOiBCYXNlLmNyZWF0ZSgnaXJvbi1tZXRhJywge3R5cGU6ICdpY29uc2V0J30pfVxuXG4gIH0sXG5cbiAgb2JzZXJ2ZXJzOiBbXG4gICAgJ191cGRhdGVJY29uKF9tZXRhLCBpc0F0dGFjaGVkKScsXG4gICAgJ191cGRhdGVJY29uKHRoZW1lLCBpc0F0dGFjaGVkKScsXG4gICAgJ19zcmNDaGFuZ2VkKHNyYywgaXNBdHRhY2hlZCknLFxuICAgICdfaWNvbkNoYW5nZWQoaWNvbiwgaXNBdHRhY2hlZCknXG4gIF0sXG5cbiAgX0RFRkFVTFRfSUNPTlNFVDogJ2ljb25zJyxcblxuICBfaWNvbkNoYW5nZWQ6IGZ1bmN0aW9uKGljb24pIHtcbiAgICB2YXIgcGFydHMgPSAoaWNvbiB8fCAnJykuc3BsaXQoJzonKTtcbiAgICB0aGlzLl9pY29uTmFtZSA9IHBhcnRzLnBvcCgpO1xuICAgIHRoaXMuX2ljb25zZXROYW1lID0gcGFydHMucG9wKCkgfHwgdGhpcy5fREVGQVVMVF9JQ09OU0VUO1xuICAgIHRoaXMuX3VwZGF0ZUljb24oKTtcbiAgfSxcblxuICBfc3JjQ2hhbmdlZDogZnVuY3Rpb24oc3JjKSB7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF91c2VzSWNvbnNldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuaWNvbiB8fCAhdGhpcy5zcmM7XG4gIH0sXG5cbiAgLyoqIEBzdXBwcmVzcyB7dmlzaWJpbGl0eX0gKi9cbiAgX3VwZGF0ZUljb246IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl91c2VzSWNvbnNldCgpKSB7XG4gICAgICBpZiAodGhpcy5faW1nICYmIHRoaXMuX2ltZy5wYXJlbnROb2RlKSB7XG4gICAgICAgIGRvbSh0aGlzLnJvb3QpLnJlbW92ZUNoaWxkKHRoaXMuX2ltZyk7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5faWNvbk5hbWUgPT09ICcnKSB7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHRoaXMuX2ljb25zZXROYW1lICYmIHRoaXMuX21ldGEpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldCA9IC8qKiBAdHlwZSB7P1BvbHltZXIuSWNvbnNldH0gKi8gKFxuICAgICAgICAgICAgdGhpcy5fbWV0YS5ieUtleSh0aGlzLl9pY29uc2V0TmFtZSkpO1xuICAgICAgICBpZiAodGhpcy5faWNvbnNldCkge1xuICAgICAgICAgIHRoaXMuX2ljb25zZXQuYXBwbHlJY29uKHRoaXMsIHRoaXMuX2ljb25OYW1lLCB0aGlzLnRoZW1lKTtcbiAgICAgICAgICB0aGlzLnVubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMubGlzdGVuKHdpbmRvdywgJ2lyb24taWNvbnNldC1hZGRlZCcsICdfdXBkYXRlSWNvbicpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgIHRoaXMuX2ljb25zZXQucmVtb3ZlSWNvbih0aGlzKTtcbiAgICAgIH1cbiAgICAgIGlmICghdGhpcy5faW1nKSB7XG4gICAgICAgIHRoaXMuX2ltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgICAgICB0aGlzLl9pbWcuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIHRoaXMuX2ltZy5kcmFnZ2FibGUgPSBmYWxzZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuX2ltZy5zcmMgPSB0aGlzLnNyYztcbiAgICAgIGRvbSh0aGlzLnJvb3QpLmFwcGVuZENoaWxkKHRoaXMuX2ltZyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5cbi8qKlxuYGlyb24tbWVkaWEtcXVlcnlgIGNhbiBiZSB1c2VkIHRvIGRhdGEgYmluZCB0byBhIENTUyBtZWRpYSBxdWVyeS5cblRoZSBgcXVlcnlgIHByb3BlcnR5IGlzIGEgYmFyZSBDU1MgbWVkaWEgcXVlcnkuXG5UaGUgYHF1ZXJ5LW1hdGNoZXNgIHByb3BlcnR5IGlzIGEgYm9vbGVhbiByZXByZXNlbnRpbmcgd2hldGhlciB0aGUgcGFnZSBtYXRjaGVzXG50aGF0IG1lZGlhIHF1ZXJ5LlxuXG5FeGFtcGxlOlxuXG5gYGBodG1sXG48aXJvbi1tZWRpYS1xdWVyeSBxdWVyeT1cIihtaW4td2lkdGg6IDYwMHB4KVwiIHF1ZXJ5LW1hdGNoZXM9XCJ7e3F1ZXJ5TWF0Y2hlc319XCI+XG48L2lyb24tbWVkaWEtcXVlcnk+XG5gYGBcblxuQGdyb3VwIElyb24gRWxlbWVudHNcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbkBlbGVtZW50IGlyb24tbWVkaWEtcXVlcnlcbiovXG5Qb2x5bWVyKHtcblxuICBpczogJ2lyb24tbWVkaWEtcXVlcnknLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBCb29sZWFuIHJldHVybiB2YWx1ZSBvZiB0aGUgbWVkaWEgcXVlcnkuXG4gICAgICovXG4gICAgcXVlcnlNYXRjaGVzOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWFkT25seTogdHJ1ZSwgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBDU1MgbWVkaWEgcXVlcnkgdG8gZXZhbHVhdGUuXG4gICAgICovXG4gICAgcXVlcnk6IHt0eXBlOiBTdHJpbmcsIG9ic2VydmVyOiAncXVlcnlDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBJZiB0cnVlLCB0aGUgcXVlcnkgYXR0cmlidXRlIGlzIGFzc3VtZWQgdG8gYmUgYSBjb21wbGV0ZSBtZWRpYSBxdWVyeVxuICAgICAqIHN0cmluZyByYXRoZXIgdGhhbiBhIHNpbmdsZSBtZWRpYSBmZWF0dXJlLlxuICAgICAqL1xuICAgIGZ1bGw6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge2Z1bmN0aW9uKE1lZGlhUXVlcnlMaXN0KX1cbiAgICAgKi9cbiAgICBfYm91bmRNUUhhbmRsZXI6IHtcbiAgICAgIHZhbHVlOiBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucXVlcnlIYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEB0eXBlIHtNZWRpYVF1ZXJ5TGlzdH1cbiAgICAgKi9cbiAgICBfbXE6IHt2YWx1ZTogbnVsbH1cbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIHRoaXMucXVlcnlDaGFuZ2VkKCk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX3JlbW92ZSgpO1xuICB9LFxuXG4gIF9hZGQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9tcSkge1xuICAgICAgdGhpcy5fbXEuYWRkTGlzdGVuZXIodGhpcy5fYm91bmRNUUhhbmRsZXIpO1xuICAgIH1cbiAgfSxcblxuICBfcmVtb3ZlOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fbXEpIHtcbiAgICAgIHRoaXMuX21xLnJlbW92ZUxpc3RlbmVyKHRoaXMuX2JvdW5kTVFIYW5kbGVyKTtcbiAgICB9XG4gICAgdGhpcy5fbXEgPSBudWxsO1xuICB9LFxuXG4gIHF1ZXJ5Q2hhbmdlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVtb3ZlKCk7XG4gICAgdmFyIHF1ZXJ5ID0gdGhpcy5xdWVyeTtcbiAgICBpZiAoIXF1ZXJ5KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5mdWxsICYmIHF1ZXJ5WzBdICE9PSAnKCcpIHtcbiAgICAgIHF1ZXJ5ID0gJygnICsgcXVlcnkgKyAnKSc7XG4gICAgfVxuICAgIHRoaXMuX21xID0gd2luZG93Lm1hdGNoTWVkaWEocXVlcnkpO1xuICAgIHRoaXMuX2FkZCgpO1xuICAgIHRoaXMucXVlcnlIYW5kbGVyKHRoaXMuX21xKTtcbiAgfSxcblxuICBxdWVyeUhhbmRsZXI6IGZ1bmN0aW9uKG1xKSB7XG4gICAgdGhpcy5fc2V0UXVlcnlNYXRjaGVzKG1xLm1hdGNoZXMpO1xuICB9XG5cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25PdmVybGF5QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICBVc2UgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAgYW5kIGBwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlcy5odG1sYCB0b1xuICBpbXBsZW1lbnQgYSBNYXRlcmlhbCBEZXNpZ24gZGlhbG9nLlxuXG4gIEZvciBleGFtcGxlLCBpZiBgPHBhcGVyLWRpYWxvZy1pbXBsPmAgaW1wbGVtZW50cyB0aGlzIGJlaGF2aW9yOlxuXG4gICAgICA8cGFwZXItZGlhbG9nLWltcGw+XG4gICAgICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICAgICAgPGRpdj5EaWFsb2cgYm9keTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1idXR0b24gZGlhbG9nLWRpc21pc3M+Q2FuY2VsPC9wYXBlci1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1idXR0b24gZGlhbG9nLWNvbmZpcm0+QWNjZXB0PC9wYXBlci1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gIGBwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlcy5odG1sYCBwcm92aWRlIHN0eWxlcyBmb3IgYSBoZWFkZXIsIGNvbnRlbnQgYXJlYSxcbiAgYW5kIGFuIGFjdGlvbiBhcmVhIGZvciBidXR0b25zLiBVc2UgdGhlIGA8aDI+YCB0YWcgZm9yIHRoZSBoZWFkZXIgYW5kIHRoZVxuICBgYnV0dG9uc2AgY2xhc3MgZm9yIHRoZSBhY3Rpb24gYXJlYS4gWW91IGNhbiB1c2UgdGhlIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWBcbiAgZWxlbWVudCAoaW4gaXRzIG93biByZXBvc2l0b3J5KSBpZiB5b3UgbmVlZCBhIHNjcm9sbGluZyBjb250ZW50IGFyZWEuXG5cbiAgVXNlIHRoZSBgZGlhbG9nLWRpc21pc3NgIGFuZCBgZGlhbG9nLWNvbmZpcm1gIGF0dHJpYnV0ZXMgb24gaW50ZXJhY3RpdmVcbiAgY29udHJvbHMgdG8gY2xvc2UgdGhlIGRpYWxvZy4gSWYgdGhlIHVzZXIgZGlzbWlzc2VzIHRoZSBkaWFsb2cgd2l0aFxuICBgZGlhbG9nLWNvbmZpcm1gLCB0aGUgYGNsb3NpbmdSZWFzb25gIHdpbGwgdXBkYXRlIHRvIGluY2x1ZGUgYGNvbmZpcm1lZDpcbiAgdHJ1ZWAuXG5cbiAgIyMjIEFjY2Vzc2liaWxpdHlcblxuICBUaGlzIGVsZW1lbnQgaGFzIGByb2xlPVwiZGlhbG9nXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB0aGUgY29udGV4dCwgaXQgbWF5XG4gIGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gb3ZlcnJpZGUgdGhpcyBhdHRyaWJ1dGUgd2l0aCBgcm9sZT1cImFsZXJ0ZGlhbG9nXCJgLlxuXG4gIElmIGBtb2RhbGAgaXMgc2V0LCB0aGUgZWxlbWVudCB3aWxsIHByZXZlbnQgdGhlIGZvY3VzIGZyb20gZXhpdGluZyB0aGVcbiAgZWxlbWVudC4gSXQgd2lsbCBhbHNvIGVuc3VyZSB0aGF0IGZvY3VzIHJlbWFpbnMgaW4gdGhlIGRpYWxvZy5cblxuICBAaGVybyBoZXJvLnN2Z1xuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgQHBvbHltZXJCZWhhdmlvciBQYXBlckRpYWxvZ0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCA9IHtcblxuICBob3N0QXR0cmlidXRlczogeydyb2xlJzogJ2RpYWxvZycsICd0YWJpbmRleCc6ICctMSd9LFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIGBtb2RhbGAgaXMgdHJ1ZSwgdGhpcyBpbXBsaWVzIGBuby1jYW5jZWwtb24tb3V0c2lkZS1jbGlja2AsXG4gICAgICogYG5vLWNhbmNlbC1vbi1lc2Mta2V5YCBhbmQgYHdpdGgtYmFja2Ryb3BgLlxuICAgICAqL1xuICAgIG1vZGFsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIF9fcmVhZGllZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX1cblxuICB9LFxuXG4gIG9ic2VydmVyczogWydfbW9kYWxDaGFuZ2VkKG1vZGFsLCBfX3JlYWRpZWQpJ10sXG5cbiAgbGlzdGVuZXJzOiB7J3RhcCc6ICdfb25EaWFsb2dDbGljayd9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE9ubHkgbm93IHRoZXNlIHByb3BlcnRpZXMgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrO1xuICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleSA9IHRoaXMubm9DYW5jZWxPbkVzY0tleTtcbiAgICB0aGlzLl9fcHJldldpdGhCYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wO1xuICAgIHRoaXMuX19yZWFkaWVkID0gdHJ1ZTtcbiAgfSxcblxuICBfbW9kYWxDaGFuZ2VkOiBmdW5jdGlvbihtb2RhbCwgcmVhZGllZCkge1xuICAgIC8vIG1vZGFsIGltcGxpZXMgbm9DYW5jZWxPbk91dHNpZGVDbGljaywgbm9DYW5jZWxPbkVzY0tleSBhbmQgd2l0aEJhY2tkcm9wLlxuICAgIC8vIFdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGVsZW1lbnQgdG8gYmUgcmVhZHkgYmVmb3JlIHdlIGNhbiByZWFkIHRoZVxuICAgIC8vIHByb3BlcnRpZXMgdmFsdWVzLlxuICAgIGlmICghcmVhZGllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb2RhbCkge1xuICAgICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrO1xuICAgICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uRXNjS2V5ID0gdGhpcy5ub0NhbmNlbE9uRXNjS2V5O1xuICAgICAgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcDtcbiAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25Fc2NLZXkgPSB0cnVlO1xuICAgICAgdGhpcy53aXRoQmFja2Ryb3AgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgd2FzIGNoYW5nZWQgdG8gZmFsc2UsIGxldCBpdCBmYWxzZS5cbiAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayA9XG4gICAgICAgICAgdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrICYmIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICAgIHRoaXMubm9DYW5jZWxPbkVzY0tleSA9XG4gICAgICAgICAgdGhpcy5ub0NhbmNlbE9uRXNjS2V5ICYmIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleTtcbiAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3AgJiYgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3A7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVDbG9zaW5nUmVhc29uQ29uZmlybWVkOiBmdW5jdGlvbihjb25maXJtZWQpIHtcbiAgICB0aGlzLmNsb3NpbmdSZWFzb24gPSB0aGlzLmNsb3NpbmdSZWFzb24gfHwge307XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uLmNvbmZpcm1lZCA9IGNvbmZpcm1lZDtcbiAgfSxcblxuICAvKipcbiAgICogV2lsbCBkaXNtaXNzIHRoZSBkaWFsb2cgaWYgdXNlciBjbGlja2VkIG9uIGFuIGVsZW1lbnQgd2l0aCBkaWFsb2ctZGlzbWlzc1xuICAgKiBvciBkaWFsb2ctY29uZmlybSBhdHRyaWJ1dGUuXG4gICAqL1xuICBfb25EaWFsb2dDbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBTZWFyY2ggZm9yIHRoZSBlbGVtZW50IHdpdGggZGlhbG9nLWNvbmZpcm0gb3IgZGlhbG9nLWRpc21pc3MsXG4gICAgLy8gZnJvbSB0aGUgcm9vdCB0YXJnZXQgdW50aWwgdGhpcyAoZXhjbHVkZWQpLlxuICAgIHZhciBwYXRoID0gZG9tKGV2ZW50KS5wYXRoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aC5pbmRleE9mKHRoaXMpOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gcGF0aFtpXTtcbiAgICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlICYmXG4gICAgICAgICAgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1kaXNtaXNzJykgfHxcbiAgICAgICAgICAgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlhbG9nLWNvbmZpcm0nKSkpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xvc2luZ1JlYXNvbkNvbmZpcm1lZChcbiAgICAgICAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1jb25maXJtJykpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckRpYWxvZ0JlaGF2aW9yID1cbiAgICBbSXJvbk92ZXJsYXlCZWhhdmlvciwgUGFwZXJEaWFsb2dCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmcuXG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yYCB8IERpYWxvZyBiYWNrZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItZGlhbG9nLWNvbG9yYCB8IERpYWxvZyBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItZGlhbG9nYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGRpYWxvZyB8IGB7fWBcbmAtLXBhcGVyLWRpYWxvZy10aXRsZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0aXRsZSAoYDxoMj5gKSBlbGVtZW50IHwgYHt9YFxuYC0tcGFwZXItZGlhbG9nLWJ1dHRvbi1jb2xvcmAgfCBCdXR0b24gYXJlYSBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yYFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvc2hhZG93LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwicGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMjRweCA0MHB4O1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2c7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgubm8tcGFkZGluZykge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBcbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCo6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKjpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC8qIEluIDEueCwgdGhpcyBzZWxlY3RvciB3YXMgXFxgOmhvc3QgPiA6OmNvbnRlbnQgaDJcXGAuIEluIDIueCA8c2xvdD4gYWxsb3dzXG4gICAgICB0byBzZWxlY3QgZGlyZWN0IGNoaWxkcmVuIG9ubHksIHdoaWNoIGluY3JlYXNlcyB0aGUgd2VpZ2h0IG9mIHRoaXNcbiAgICAgIHNlbGVjdG9yLCBzbyB3ZSBoYXZlIHRvIHJlLWRlZmluZSBmaXJzdC1jaGlsZC9sYXN0LWNoaWxkIG1hcmdpbnMgYmVsb3cuICovXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChoMikge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXRpdGxlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFwcGx5IG1peGluIGFnYWluLCBpbiBjYXNlIGl0IHNldHMgbWFyZ2luLXRvcC4gKi9cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGgyOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy10aXRsZTtcbiAgICAgIH1cblxuICAgICAgLyogQXBwbHkgbWl4aW4gYWdhaW4sIGluIGNhc2UgaXQgc2V0cyBtYXJnaW4tYm90dG9tLiAqL1xuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoaDI6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKC5wYXBlci1kaWFsb2ctYnV0dG9ucyksXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCguYnV0dG9ucykge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDI0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWJ1dHRvbi1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZW5kLWp1c3RpZmllZDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZ2VzdHVyZS1ldmVudC1saXN0ZW5lcnMuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBDb250cm9sU3RhdGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgRWxlbWVudE1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tZWxlbWVudC1taXhpbi92YWFkaW4tZWxlbWVudC1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9nZXN0dXJlcy5qcyc7XG4vKipcbiAqIGA8dmFhZGluLWJ1dHRvbj5gIGlzIGEgV2ViIENvbXBvbmVudCBwcm92aWRpbmcgYW4gYWNjZXNzaWJsZSBhbmQgY3VzdG9taXphYmxlIGJ1dHRvbi5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLWJ1dHRvbj5cbiAqIDwvdmFhZGluLWJ1dHRvbj5cbiAqIGBgYFxuICpcbiAqIGBgYGpzXG4gKiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCd2YWFkaW4tYnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBhbGVydCgnSGVsbG8gV29ybGQhJykpO1xuICogYGBgXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHNoYWRvdyBET00gcGFydHMgYXJlIGV4cG9zZWQgZm9yIHN0eWxpbmc6XG4gKlxuICogUGFydCBuYW1lIHwgRGVzY3JpcHRpb25cbiAqIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLVxuICogYGxhYmVsYCB8IFRoZSBsYWJlbCAodGV4dCkgaW5zaWRlIHRoZSBidXR0b25cbiAqIGBwcmVmaXhgIHwgQSBzbG90IGZvciBlLmcuIGFuIGljb24gYmVmb3JlIHRoZSBsYWJlbFxuICogYHN1ZmZpeGAgfCBBIHNsb3QgZm9yIGUuZy4gYW4gaWNvbiBhZnRlciB0aGUgbGFiZWxcbiAqXG4gKlxuICogVGhlIGZvbGxvd2luZyBhdHRyaWJ1dGVzIGFyZSBleHBvc2VkIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSB8IERlc2NyaXB0aW9uXG4gKiAtLS0tLS0tLS0gfCAtLS0tLS0tLS0tLVxuICogYGFjdGl2ZWAgfCBTZXQgd2hlbiB0aGUgYnV0dG9uIGlzIHByZXNzZWQgZG93biwgZWl0aGVyIHdpdGggbW91c2UsIHRvdWNoIG9yIHRoZSBrZXlib2FyZC5cbiAqIGBkaXNhYmxlZGAgfCBTZXQgd2hlbiB0aGUgYnV0dG9uIGlzIGRpc2FibGVkLlxuICogYGZvY3VzLXJpbmdgIHwgU2V0IHdoZW4gdGhlIGJ1dHRvbiBpcyBmb2N1c2VkIHVzaW5nIHRoZSBrZXlib2FyZC5cbiAqIGBmb2N1c2VkYCB8IFNldCB3aGVuIHRoZSBidXR0b24gaXMgZm9jdXNlZC5cbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAbWl4ZXMgVmFhZGluLkVsZW1lbnRNaXhpblxuICogQG1peGVzIFZhYWRpbi5Db250cm9sU3RhdGVNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAbWl4ZXMgUG9seW1lci5HZXN0dXJlRXZlbnRMaXN0ZW5lcnNcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICovXG5jbGFzcyBCdXR0b25FbGVtZW50IGV4dGVuZHNcbiAgRWxlbWVudE1peGluKFxuICAgIENvbnRyb2xTdGF0ZU1peGluKFxuICAgICAgVGhlbWFibGVNaXhpbihcbiAgICAgICAgR2VzdHVyZUV2ZW50TGlzdGVuZXJzKFBvbHltZXJFbGVtZW50KSkpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAvKiBFbnN1cmUgdGhlIGJ1dHRvbiBpcyBhbHdheXMgYWxpZ25lZCBvbiB0aGUgYmFzZWxpbmUgKi9cbiAgICAgIC52YWFkaW4tYnV0dG9uLWNvbnRhaW5lcjo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcXFxcMjAwM1wiO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgfVxuXG4gICAgICAudmFhZGluLWJ1dHRvbi1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgbWluLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1zaGFkb3c6IGluaGVyaXQ7XG4gICAgICAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInByZWZpeFwiXSxcbiAgICAgIFtwYXJ0PVwic3VmZml4XCJdIHtcbiAgICAgICAgZmxleDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgfVxuXG4gICAgICAjYnV0dG9uIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGN1cnNvcjogaW5oZXJpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICAgIDxkaXYgY2xhc3M9XCJ2YWFkaW4tYnV0dG9uLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBwYXJ0PVwicHJlZml4XCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcGFydD1cImxhYmVsXCI+XG4gICAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBwYXJ0PVwic3VmZml4XCI+XG4gICAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIj48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgICA8YnV0dG9uIGlkPVwiYnV0dG9uXCIgdHlwZT1cImJ1dHRvblwiPjwvYnV0dG9uPlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tYnV0dG9uJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgdmVyc2lvbigpIHtcbiAgICByZXR1cm4gJzIuMi4xJztcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICAvLyBMZWF2aW5nIGRlZmF1bHQgcm9sZSBpbiB0aGUgbmF0aXZlIGJ1dHRvbiwgbWFrZXMgbmF2aWdhdGlvbiBhbm5vdW5jZW1lbnRcbiAgICAvLyBiZWluZyBkaWZmZXJlbnQgd2hlbiB1c2luZyBmb2N1cyBuYXZpZ2F0aW9uICh0YWIpIHZlcnN1cyB1c2luZyBub3JtYWxcbiAgICAvLyBuYXZpZ2F0aW9uIChhcnJvd3MpLiBUaGUgZmlyc3Qgd2F5IGFubm91bmNlcyB0aGUgbGFiZWwgb24gYSBidXR0b25cbiAgICAvLyBzaW5jZSB0aGUgZm9jdXMgaXMgbW92ZWQgcHJvZ3JhbW1hdGljYWxseSwgYW5kIHRoZSBzZWNvbmQgb24gYSBncm91cC5cbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgncm9sZScsICdidXR0b24nKTtcbiAgICB0aGlzLiQuYnV0dG9uLnNldEF0dHJpYnV0ZSgncm9sZScsICdwcmVzZW50YXRpb24nKTtcblxuICAgIHRoaXMuX2FkZEFjdGl2ZUxpc3RlbmVycygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICAvLyBgYWN0aXZlYCBzdGF0ZSBpcyBwcmVzZXJ2ZWQgd2hlbiB0aGUgZWxlbWVudCBpcyBkaXNjb25uZWN0ZWQgYmV0d2VlbiBrZXlkb3duIGFuZCBrZXl1cCBldmVudHMuXG4gICAgLy8gcmVwcm9kdWNpYmxlIGluIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgd2hlbiBjbG9zaW5nIG9uIGBDYW5jZWxgIG9yIGBUb2RheWAgY2xpY2suXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdhY3RpdmUnKSkge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgfVxuXG4gIF9hZGRBY3RpdmVMaXN0ZW5lcnMoKSB7XG4gICAgYWRkTGlzdGVuZXIodGhpcywgJ2Rvd24nLCAoKSA9PiAhdGhpcy5kaXNhYmxlZCAmJiB0aGlzLnNldEF0dHJpYnV0ZSgnYWN0aXZlJywgJycpKTtcbiAgICBhZGRMaXN0ZW5lcih0aGlzLCAndXAnLCAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4gIXRoaXMuZGlzYWJsZWQgJiYgWzEzLCAzMl0uaW5kZXhPZihlLmtleUNvZGUpID49IDAgJiYgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBnZXQgZm9jdXNFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLiQuYnV0dG9uO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShCdXR0b25FbGVtZW50LmlzLCBCdXR0b25FbGVtZW50KTtcblxuZXhwb3J0IHsgQnV0dG9uRWxlbWVudCB9O1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvc2hhZG93LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1idXR0b25cIiB0aGVtZS1mb3I9XCJ2YWFkaW4tYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgbWluLXdpZHRoOiA2NHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1hdGVyaWFsLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1idXR0b24tZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjA1ZW07XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHRyYW5zaXRpb246IGJveC1zaGFkb3cgMC4ycztcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG5cbiAgICAgIEAtbW96LWRvY3VtZW50IHVybC1wcmVmaXgoKSB7XG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogLTEzcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSxcbiAgICAgIDpob3N0OjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjVzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdDo6YWZ0ZXIge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgaGVpZ2h0OiAzMjBweDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIGxlZnQ6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjlzO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpob3Zlcik6OmJlZm9yZSxcbiAgICAgIDpob3N0KFtmb2N1cy1yaW5nXSk6OmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMDg7XG4gICAgICAgIHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFthY3RpdmVdKTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogMC4xNjtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjRzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbYWN0aXZlXSk6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMC4wMDAwMDAxKTsgLyogYW5pbWF0aW9uIHdvcmtzIHdlaXJkbHkgd2l0aCBzY2FsZSgwKSAqL1xuICAgICAgICBvcGFjaXR5OiAwLjE7XG4gICAgICAgIHRyYW5zaXRpb246IDBzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXI6bm90KFthY3RpdmVdKSk6OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSkgc2NhbGUoMSk7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLyogQ29udGFpbmVkIGFuZCBvdXRsaW5lIHZhcmlhbnRzICovXG4gICAgICA6aG9zdChbdGhlbWV+PVwiY29udGFpbmVkXCJdKSxcbiAgICAgIDpob3N0KFt0aGVtZX49XCJvdXRsaW5lZFwiXSkge1xuICAgICAgICBwYWRkaW5nOiA4cHggMTZweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cIm91dGxpbmVkXCJdKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCAwIDFweCB2YXIoLS1fbWF0ZXJpYWwtYnV0dG9uLW91dGxpbmUtY29sb3IsIHJnYmEoMCwgMCwgMCwgMC4yKSk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJjb250YWluZWRcIl06bm90KFtkaXNhYmxlZF0pKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb250cmFzdC1jb2xvcik7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tMmRwKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImNvbnRhaW5lZFwiXVtkaXNhYmxlZF0pIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhlbWV+PVwiY29udGFpbmVkXCJdOmhvdmVyKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tNGRwKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImNvbnRhaW5lZFwiXVthY3RpdmVdKSB7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tOGRwKTtcbiAgICAgIH1cblxuICAgICAgLyogSWNvbiBhbGlnbm1lbnQgKi9cblxuICAgICAgW3BhcnRdIDo6c2xvdHRlZChpcm9uLWljb24pIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHdpZHRoOiAxOHB4O1xuICAgICAgICBoZWlnaHQ6IDE4cHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwicHJlZml4XCJdIDo6c2xvdHRlZChpcm9uLWljb24pIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtNHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInN1ZmZpeFwiXSA6OnNsb3R0ZWQoaXJvbi1pY29uKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA4cHg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTRweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92YWFkaW4tYnV0dG9uLXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL3NyYy92YWFkaW4tYnV0dG9uLmpzJztcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbi8qKlxuICogQSBwcml2YXRlIG1peGluIHRvIGF2b2lkIHByb2JsZW1zIHdpdGggZHluYW1pYyBwcm9wZXJ0aWVzIGFuZCBQb2x5bWVyIEFuYWx5emVyLlxuICogTm8gbmVlZCB0byBleHBvc2UgdGhlc2UgcHJvcGVydGllcyBpbiB0aGUgQVBJIGRvY3MuXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmNvbnN0IFRhYkluZGV4TWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIFZhYWRpblRhYkluZGV4TWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHZhciBwcm9wZXJ0aWVzID0ge1xuICAgICAgLyoqXG4gICAgICAgKiBJbnRlcm5hbCBwcm9wZXJ0eSBuZWVkZWQgdG8gbGlzdGVuIHRvIGB0YWJpbmRleGAgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgICAgKlxuICAgICAgICogRm9yIGNoYW5naW5nIHRoZSB0YWJpbmRleCBvZiB0aGlzIGNvbXBvbmVudCB1c2UgdGhlIG5hdGl2ZSBgdGFiSW5kZXhgIHByb3BlcnR5LlxuICAgICAgICogQHByaXZhdGVcbiAgICAgICAqL1xuICAgICAgdGFiaW5kZXg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgICB2YWx1ZTogMCxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBvYnNlcnZlcjogJ190YWJpbmRleENoYW5nZWQnXG4gICAgICB9XG4gICAgfTtcblxuICAgIGlmICh3aW5kb3cuU2hhZHlET00pIHtcbiAgICAgIC8vIFNoYWR5RE9NIGJyb3dzZXJzIG5lZWQgdGhlIGB0YWJJbmRleGAgaW4gb3JkZXIgdG8gbm90aWZ5IHdoZW4gdGhlIHVzZXIgY2hhbmdlcyBpdCBwcm9ncmFtbWF0aWNhbGx5LlxuICAgICAgcHJvcGVydGllc1sndGFiSW5kZXgnXSA9IHByb3BlcnRpZXMudGFiaW5kZXg7XG4gICAgfVxuXG4gICAgcmV0dXJuIHByb3BlcnRpZXM7XG4gIH1cbn07XG5cbi8qKlxuICogUG9seW1lci5Jcm9uQ29udHJvbFN0YXRlIGlzIG5vdCBhIHByb3BlciAyLjAgY2xhc3MsIGFsc28sIGl0cyB0YWJpbmRleFxuICogaW1wbGVtZW50YXRpb24gZmFpbHMgaW4gdGhlIHNoYWRvdyBkb20sIHNvIHdlIGhhdmUgdGhpcyBmb3IgdmFhZGluIGVsZW1lbnRzLlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgQ29udHJvbFN0YXRlTWl4aW4gPSBzdXBlckNsYXNzID0+IGNsYXNzIFZhYWRpbkNvbnRyb2xTdGF0ZU1peGluIGV4dGVuZHMgVGFiSW5kZXhNaXhpbihzdXBlckNsYXNzKSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZ5IHRoYXQgdGhpcyBjb250cm9sIHNob3VsZCBoYXZlIGlucHV0IGZvY3VzIHdoZW4gdGhlIHBhZ2UgbG9hZHMuXG4gICAgICAgKi9cbiAgICAgIGF1dG9mb2N1czoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFN0b3JlcyB0aGUgcHJldmlvdXMgdmFsdWUgb2YgdGFiaW5kZXggYXR0cmlidXRlIG9mIHRoZSBkaXNhYmxlZCBlbGVtZW50XG4gICAgICAgKi9cbiAgICAgIF9wcmV2aW91c1RhYkluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBJZiB0cnVlLCB0aGUgdXNlciBjYW5ub3QgaW50ZXJhY3Qgd2l0aCB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIG9ic2VydmVyOiAnX2Rpc2FibGVkQ2hhbmdlZCcsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2lzU2hpZnRUYWJiaW5nOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgZSA9PiB7XG4gICAgICBpZiAoZS5jb21wb3NlZFBhdGgoKVswXSA9PT0gdGhpcykge1xuICAgICAgICB0aGlzLl9mb2N1cyhlKTtcbiAgICAgIH0gZWxzZSBpZiAoZS5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuZm9jdXNFbGVtZW50KSAhPT0gLTEgJiYgIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgZSA9PiB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKSk7XG5cbiAgICAvLyBJbiBzdXBlci5yZWFkeSgpIG90aGVyICdmb2N1c2luJyBhbmQgJ2ZvY3Vzb3V0JyBsaXN0ZW5lcnMgbWlnaHQgYmVcbiAgICAvLyBhZGRlZCwgc28gd2UgY2FsbCBpdCBhZnRlciBvdXIgb3duIG9uZXMgdG8gZW5zdXJlIHRoZXkgZXhlY3V0ZSBmaXJzdC5cbiAgICAvLyBJc3N1ZSB0byB3YXRjaCBvdXQ6IHdoZW4gaW5jb3JyZWN0LCA8dmFhZGluLWNvbWJvLWJveD4gcmVmb2N1c2VzIHRoZVxuICAgIC8vIGlucHV0IGZpZWxkIG9uIGlPUyBhZnRlciDigJxEb25l4oCdIGlzIHByZXNzZWQuXG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIC8vIFRoaXMgZml4ZXMgdGhlIGJ1ZyBpbiBGaXJlZm94IDYxIChodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNDcyODg3KVxuICAgIC8vIHdoZXJlIGZvY3Vzb3V0IGV2ZW50IGRvZXMgbm90IGdvIG91dCBvZiBzaGFkeSBET00gYmVjYXVzZSBjb21wb3NlZCBwcm9wZXJ0eSBpbiB0aGUgZXZlbnQgaXMgbm90IHRydWVcbiAgICBjb25zdCBlbnN1cmVFdmVudENvbXBvc2VkID0gZSA9PiB7XG4gICAgICBpZiAoIWUuY29tcG9zZWQpIHtcbiAgICAgICAgZS50YXJnZXQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoZS50eXBlLCB7XG4gICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICBjb21wb3NlZDogdHJ1ZSxcbiAgICAgICAgICBjYW5jZWxhYmxlOiBmYWxzZVxuICAgICAgICB9KSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGVuc3VyZUV2ZW50Q29tcG9zZWQpO1xuICAgIHRoaXMuc2hhZG93Um9vdC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGVuc3VyZUV2ZW50Q29tcG9zZWQpO1xuXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZSA9PiB7XG4gICAgICBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZCAmJiBlLmtleUNvZGUgPT09IDkpIHtcbiAgICAgICAgaWYgKGUuc2hpZnRLZXkpIHtcbiAgICAgICAgICAvLyBGbGFnIGlzIGNoZWNrZWQgaW4gX2ZvY3VzIGV2ZW50IGhhbmRsZXIuXG4gICAgICAgICAgdGhpcy5faXNTaGlmdFRhYmJpbmcgPSB0cnVlO1xuICAgICAgICAgIEhUTUxFbGVtZW50LnByb3RvdHlwZS5mb2N1cy5hcHBseSh0aGlzKTtcbiAgICAgICAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgICAgICAgICAvLyBFdmVudCBoYW5kbGluZyBpbiBJRSBpcyBhc3luY2hyb25vdXMgYW5kIHRoZSBmbGFnIGlzIHJlbW92ZWQgYXN5bmNocm9ub3VzbHkgYXMgd2VsbFxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5faXNTaGlmdFRhYmJpbmcgPSBmYWxzZSwgMCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gV29ya2Fyb3VuZCBmb3IgRkY2My02NSBidWcgdGhhdCBjYXVzZXMgdGhlIGZvY3VzIHRvIGdldCBsb3N0IHdoZW5cbiAgICAgICAgICAvLyBibHVycmluZyBhIHNsb3R0ZWQgY29tcG9uZW50IHdpdGggZm9jdXNhYmxlIHNoYWRvdyByb290IGNvbnRlbnRcbiAgICAgICAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xNTI4Njg2XG4gICAgICAgICAgLy8gVE9ETzogUmVtb3ZlIHdoZW4gc2FmZVxuICAgICAgICAgIGNvbnN0IGZpcmVmb3ggPSB3aW5kb3cubmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvRmlyZWZveFxcLyhcXGRcXGRcXC5cXGQpLyk7XG4gICAgICAgICAgaWYgKGZpcmVmb3hcbiAgICAgICAgICAgICYmIHBhcnNlRmxvYXQoZmlyZWZveFsxXSkgPj0gNjNcbiAgICAgICAgICAgICYmIHBhcnNlRmxvYXQoZmlyZWZveFsxXSkgPCA2NlxuICAgICAgICAgICAgJiYgdGhpcy5wYXJlbnROb2RlXG4gICAgICAgICAgICAmJiB0aGlzLm5leHRTaWJsaW5nKSB7XG4gICAgICAgICAgICBjb25zdCBmYWtlVGFyZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgICAgIGZha2VUYXJnZXQuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5zdHlsZS5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGZha2VUYXJnZXQudGFiSW5kZXggPSB0aGlzLnRhYkluZGV4O1xuXG4gICAgICAgICAgICB0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGZha2VUYXJnZXQsIHRoaXMubmV4dFNpYmxpbmcpO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5mb2N1cygpO1xuICAgICAgICAgICAgZmFrZVRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsICgpID0+IHRoaXMucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChmYWtlVGFyZ2V0KSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGlmICh0aGlzLmF1dG9mb2N1cyAmJiAhdGhpcy5mb2N1c2VkICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciA9IHRoaXMuX2JvZHlLZXlkb3duTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZEtleXVwTGlzdGVuZXIgPSB0aGlzLl9ib2R5S2V5dXBMaXN0ZW5lci5iaW5kKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2JvdW5kS2V5dXBMaXN0ZW5lciwgdHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kS2V5ZG93bkxpc3RlbmVyLCB0cnVlKTtcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXVwJywgdGhpcy5fYm91bmRLZXl1cExpc3RlbmVyLCB0cnVlKTtcblxuICAgIC8vIGluIG5vbi1DaHJvbWUgYnJvd3NlcnMsIGJsdXIgZG9lcyBub3QgZmlyZSBvbiB0aGUgZWxlbWVudCB3aGVuIGl0IGlzIGRpc2Nvbm5lY3RlZC5cbiAgICAvLyByZXByb2R1Y2libGUgaW4gYDx2YWFkaW4tZGF0ZS1waWNrZXI+YCB3aGVuIGNsb3Npbmcgb24gYENhbmNlbGAgb3IgYFRvZGF5YCBjbGljay5cbiAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSkge1xuICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgX3NldEZvY3VzZWQoZm9jdXNlZCkge1xuICAgIGlmIChmb2N1c2VkKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZm9jdXNlZCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2ZvY3VzZWQnKTtcbiAgICB9XG5cbiAgICAvLyBmb2N1cy1yaW5nIGlzIHRydWUgd2hlbiB0aGUgZWxlbWVudCB3YXMgZm9jdXNlZCBmcm9tIHRoZSBrZXlib2FyZC5cbiAgICAvLyBGb2N1cyBSaW5nIFtBMTF5Y2FzdHNdOiBodHRwczovL3lvdXR1LmJlL2lsajJQNS01Q2pJXG4gICAgaWYgKGZvY3VzZWQgJiYgdGhpcy5fdGFiUHJlc3NlZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdmb2N1cy1yaW5nJyk7XG4gICAgfVxuICB9XG5cbiAgX2JvZHlLZXlkb3duTGlzdGVuZXIoZSkge1xuICAgIHRoaXMuX3RhYlByZXNzZWQgPSBlLmtleUNvZGUgPT09IDk7XG4gIH1cblxuICBfYm9keUtleXVwTGlzdGVuZXIoKSB7XG4gICAgdGhpcy5fdGFiUHJlc3NlZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFueSBlbGVtZW50IGV4dGVuZGluZyB0aGlzIG1peGluIGlzIHJlcXVpcmVkIHRvIGltcGxlbWVudCB0aGlzIGdldHRlci5cbiAgICogSXQgcmV0dXJucyB0aGUgYWN0dWFsIGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBnZXQgZm9jdXNFbGVtZW50KCkge1xuICAgIHdpbmRvdy5jb25zb2xlLndhcm4oYFBsZWFzZSBpbXBsZW1lbnQgdGhlICdmb2N1c0VsZW1lbnQnIHByb3BlcnR5IGluIDwke3RoaXMubG9jYWxOYW1lfT5gKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIF9mb2N1cyhlKSB7XG4gICAgaWYgKHRoaXMuX2lzU2hpZnRUYWJiaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5mb2N1c0VsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1vdmluZyB0aGUgZm9jdXMgZnJvbSB0aGUgaG9zdCBlbGVtZW50IGNhdXNlcyBmaXJpbmcgb2YgdGhlIGJsdXIgZXZlbnQgd2hhdCBsZWFkcyB0byBwcm9ibGVtcyBpbiBJRS5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZvY3VzKCkge1xuICAgIGlmICghdGhpcy5mb2N1c0VsZW1lbnQgfHwgdGhpcy5kaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBOYXRpdmUgYmx1cmluZyBpbiB0aGUgaG9zdCBlbGVtZW50IGRvZXMgbm90aGluZyBiZWNhdXNlIGl0IGRvZXMgbm90IGhhdmUgdGhlIGZvY3VzLlxuICAgKiBJbiBjaHJvbWUgaXQgd29ya3MsIGJ1dCBub3QgaW4gRkYuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBibHVyKCkge1xuICAgIHRoaXMuZm9jdXNFbGVtZW50LmJsdXIoKTtcbiAgICB0aGlzLl9zZXRGb2N1c2VkKGZhbHNlKTtcbiAgfVxuXG4gIF9kaXNhYmxlZENoYW5nZWQoZGlzYWJsZWQpIHtcbiAgICB0aGlzLmZvY3VzRWxlbWVudC5kaXNhYmxlZCA9IGRpc2FibGVkO1xuICAgIGlmIChkaXNhYmxlZCkge1xuICAgICAgdGhpcy5ibHVyKCk7XG4gICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID0gdGhpcy50YWJpbmRleDtcbiAgICAgIHRoaXMudGFiaW5kZXggPSAtMTtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgJ3RydWUnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHR5cGVvZiB0aGlzLl9wcmV2aW91c1RhYkluZGV4ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICB0aGlzLnRhYmluZGV4ID0gdGhpcy5fcHJldmlvdXNUYWJJbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJyk7XG4gICAgfVxuICB9XG5cbiAgX3RhYmluZGV4Q2hhbmdlZCh0YWJpbmRleCkge1xuICAgIGlmICh0YWJpbmRleCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudC50YWJJbmRleCA9IHRhYmluZGV4O1xuICAgIH1cblxuICAgIGlmICh0aGlzLmRpc2FibGVkICYmIHRoaXMudGFiaW5kZXgpIHtcbiAgICAgIC8vIElmIHRhYmluZGV4IGF0dHJpYnV0ZSB3YXMgY2hhbmdlZCB3aGlsZSBjaGVja2JveCB3YXMgZGlzYWJsZWRcbiAgICAgIGlmICh0aGlzLnRhYmluZGV4ICE9PSAtMSkge1xuICAgICAgICB0aGlzLl9wcmV2aW91c1RhYkluZGV4ID0gdGhpcy50YWJpbmRleDtcbiAgICAgIH1cbiAgICAgIHRoaXMudGFiaW5kZXggPSB0YWJpbmRleCA9IHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBpZiAod2luZG93LlNoYWR5RE9NKSB7XG4gICAgICB0aGlzLnNldFByb3BlcnRpZXMoe3RhYkluZGV4OiB0YWJpbmRleCwgdGFiaW5kZXg6IHRhYmluZGV4fSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGNsaWNrKCkge1xuICAgIGlmICghdGhpcy5kaXNhYmxlZCkge1xuICAgICAgc3VwZXIuY2xpY2soKTtcbiAgICB9XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5leHBvcnQgY29uc3QgRGF0ZVBpY2tlckhlbHBlciA9IGNsYXNzIFZhYWRpbkRhdGVQaWNrZXJIZWxwZXIge1xuICAvKipcbiAgICogR2V0IElTTyA4NjAxIHdlZWsgbnVtYmVyIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfSBEYXRlIG9iamVjdFxuICAgKiBAcmV0dXJuIHtOdW1iZXJ9IFdlZWsgbnVtYmVyXG4gICAqL1xuICBzdGF0aWMgX2dldElTT1dlZWtOdW1iZXIoZGF0ZSkge1xuICAgIC8vIFBvcnRlZCBmcm9tIFZhYWRpbiBGcmFtZXdvcmsgbWV0aG9kIGNvbS52YWFkaW4uY2xpZW50LkRhdGVUaW1lU2VydmljZS5nZXRJU09XZWVrTnVtYmVyKGRhdGUpXG4gICAgdmFyIGRheU9mV2VlayA9IGRhdGUuZ2V0RGF5KCk7IC8vIDAgPT0gc3VuZGF5XG5cbiAgICAvLyBJU08gODYwMSB1c2Ugd2Vla3MgdGhhdCBzdGFydCBvbiBtb25kYXkgc28gd2UgdXNlXG4gICAgLy8gbW9uPTEsdHVlPTIsLi4uc3VuPTc7XG4gICAgaWYgKGRheU9mV2VlayA9PT0gMCkge1xuICAgICAgZGF5T2ZXZWVrID0gNztcbiAgICB9XG4gICAgLy8gRmluZCBuZWFyZXN0IHRodXJzZGF5IChkZWZpbmVzIHRoZSB3ZWVrIGluIElTTyA4NjAxKS4gVGhlIHdlZWsgbnVtYmVyXG4gICAgLy8gZm9yIHRoZSBuZWFyZXN0IHRodXJzZGF5IGlzIHRoZSBzYW1lIGFzIGZvciB0aGUgdGFyZ2V0IGRhdGUuXG4gICAgdmFyIG5lYXJlc3RUaHVyc2RheURpZmYgPSA0IC0gZGF5T2ZXZWVrOyAvLyA0IGlzIHRodXJzZGF5XG4gICAgdmFyIG5lYXJlc3RUaHVyc2RheSA9IG5ldyBEYXRlKGRhdGUuZ2V0VGltZSgpICsgbmVhcmVzdFRodXJzZGF5RGlmZiAqIDI0ICogMzYwMCAqIDEwMDApO1xuXG4gICAgdmFyIGZpcnN0T2ZKYW51YXJ5ID0gbmV3IERhdGUoMCwgMCk7XG4gICAgZmlyc3RPZkphbnVhcnkuc2V0RnVsbFllYXIobmVhcmVzdFRodXJzZGF5LmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgdmFyIHRpbWVEaWZmID0gbmVhcmVzdFRodXJzZGF5LmdldFRpbWUoKSAtIGZpcnN0T2ZKYW51YXJ5LmdldFRpbWUoKTtcblxuICAgIC8vIFJvdW5kaW5nIHRoZSByZXN1bHQsIGFzIHRoZSBkaXZpc2lvbiBkb2Vzbid0IHJlc3VsdCBpbiBhbiBpbnRlZ2VyXG4gICAgLy8gd2hlbiB0aGUgZ2l2ZW4gZGF0ZSBpcyBpbnNpZGUgZGF5bGlnaHQgc2F2aW5nIHRpbWUgcGVyaW9kLlxuICAgIHZhciBkYXlzU2luY2VGaXJzdE9mSmFudWFyeSA9IE1hdGgucm91bmQodGltZURpZmYgLyAoMjQgKiAzNjAwICogMTAwMCkpO1xuXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoKGRheXNTaW5jZUZpcnN0T2ZKYW51YXJ5KSAvIDcgKyAxKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVjayBpZiB0d28gZGF0ZXMgYXJlIGVxdWFsLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUxXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZTJcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgZ2l2ZW4gZGF0ZSBvYmplY3RzIHJlZmVyIHRvIHRoZSBzYW1lIGRhdGVcbiAgICovXG4gIHN0YXRpYyBfZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gZGF0ZTEgaW5zdGFuY2VvZiBEYXRlICYmIGRhdGUyIGluc3RhbmNlb2YgRGF0ZSAmJlxuICAgICAgICBkYXRlMS5nZXRGdWxsWWVhcigpID09PSBkYXRlMi5nZXRGdWxsWWVhcigpICYmXG4gICAgICAgIGRhdGUxLmdldE1vbnRoKCkgPT09IGRhdGUyLmdldE1vbnRoKCkgJiZcbiAgICAgICAgZGF0ZTEuZ2V0RGF0ZSgpID09PSBkYXRlMi5nZXREYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdGhlIGdpdmVuIGRhdGUgaXMgaW4gdGhlIHJhbmdlIG9mIGFsbG93ZWQgZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB0byBjaGVja1xuICAgKiBAcGFyYW0ge0RhdGV9IG1pbiBSYW5nZSBzdGFydFxuICAgKiBAcGFyYW0ge0RhdGV9IG1heCBSYW5nZSBlbmRcbiAgICogQHJldHVybiB7Qm9vbGVhbn0gVHJ1ZSBpZiB0aGUgZGF0ZSBpcyBpbiB0aGUgcmFuZ2VcbiAgICovXG4gIHN0YXRpYyBfZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpIHtcbiAgICByZXR1cm4gKCFtaW4gfHwgZGF0ZSA+PSBtaW4pICYmICghbWF4IHx8IGRhdGUgPD0gbWF4KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgY2xvc2VzdCBkYXRlIGZyb20gYXJyYXkgb2YgZGF0ZXMuXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gZGF0ZSBUaGUgZGF0ZSB0byBjb21wYXJlIGRhdGVzIHdpdGhcbiAgICogQHBhcmFtIHtBcnJheX0gZGF0ZXMgQXJyYXkgb2YgZGF0ZSBvYmplY3RzXG4gICAqIEByZXR1cm4ge0RhdGV9IENsb3Nlc3QgZGF0ZVxuICAgKi9cbiAgc3RhdGljIF9nZXRDbG9zZXN0RGF0ZShkYXRlLCBkYXRlcykge1xuICAgIHJldHVybiBkYXRlcy5maWx0ZXIoZGF0ZSA9PiBkYXRlICE9PSB1bmRlZmluZWQpXG4gICAgICAucmVkdWNlKChjbG9zZXN0RGF0ZSwgY2FuZGlkYXRlKSA9PiB7XG4gICAgICAgIGlmICghY2FuZGlkYXRlKSB7XG4gICAgICAgICAgcmV0dXJuIGNsb3Nlc3REYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFjbG9zZXN0RGF0ZSkge1xuICAgICAgICAgIHJldHVybiBjYW5kaWRhdGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgY2FuZGlkYXRlRGlmZiA9IE1hdGguYWJzKGRhdGUuZ2V0VGltZSgpIC0gY2FuZGlkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIHZhciBjbG9zZXN0RGF0ZURpZmYgPSBNYXRoLmFicyhjbG9zZXN0RGF0ZS5nZXRUaW1lKCkgLSBkYXRlLmdldFRpbWUoKSk7XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVEaWZmIDwgY2xvc2VzdERhdGVEaWZmID8gY2FuZGlkYXRlIDogY2xvc2VzdERhdGU7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBFeHRyYWN0cyB0aGUgYmFzaWMgY29tcG9uZW50IHBhcnRzIG9mIGEgZGF0ZSAoZGF5LCBtb250aCBhbmQgeWVhcilcbiAgICogdG8gdGhlIGV4cGVjdGVkIGZvcm1hdC5cbiAgICovXG4gIHN0YXRpYyBfZXh0cmFjdERhdGVQYXJ0cyhkYXRlKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRheTogZGF0ZS5nZXREYXRlKCksXG4gICAgICBtb250aDogZGF0ZS5nZXRNb250aCgpLFxuICAgICAgeWVhcjogZGF0ZS5nZXRGdWxsWWVhcigpXG4gICAgfTtcbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IElyb25BMTF5S2V5c0JlaGF2aW9yIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IvaXJvbi1hMTF5LWtleXMtYmVoYXZpb3IuanMnO1xuXG5pbXBvcnQgeyBJcm9uUmVzaXphYmxlQmVoYXZpb3IgfSBmcm9tICdAcG9seW1lci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci9pcm9uLXJlc2l6YWJsZS1iZWhhdmlvci5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySGVscGVyIH0gZnJvbSAnLi92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzJztcbmltcG9ydCB7IGFkZExpc3RlbmVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHsgbWl4aW5CZWhhdmlvcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvY2xhc3MuanMnO1xuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IERhdGVQaWNrZXJNaXhpbiA9IHN1YmNsYXNzID0+IGNsYXNzIFZhYWRpbkRhdGVQaWNrZXJNaXhpbiBleHRlbmRzIG1peGluQmVoYXZpb3JzKFxuICBbSXJvblJlc2l6YWJsZUJlaGF2aW9yXSwgc3ViY2xhc3Ncbikge1xuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgY3VycmVudCBzZWxlY3RlZCBkYXRlLlxuICAgICAgICovXG4gICAgICBfc2VsZWN0ZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGVcbiAgICAgIH0sXG5cbiAgICAgIF9mb2N1c2VkRGF0ZTogRGF0ZSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqXG4gICAgICAgKiBTdXBwb3J0ZWQgZGF0ZSBmb3JtYXRzOlxuICAgICAgICogLSBJU08gODYwMSBgXCJZWVlZLU1NLUREXCJgIChkZWZhdWx0KVxuICAgICAgICogLSA2LWRpZ2l0IGV4dGVuZGVkIElTTyA4NjAxIGBcIitZWVlZWVktTU0tRERcImAsIGBcIi1ZWVlZWVktTU0tRERcImBcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIGlucHV0IGFzIHJlcXVpcmVkLlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIG5hbWUgb2YgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEYXRlIHdoaWNoIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXG4gICAgICAgKlxuICAgICAgICogVGhlIHNhbWUgZGF0ZSBmb3JtYXRzIGFzIGZvciB0aGUgYHZhbHVlYCBwcm9wZXJ0eSBhcmUgc3VwcG9ydGVkLlxuICAgICAgICovXG4gICAgICBpbml0aWFsUG9zaXRpb246IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbGFiZWwgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbGFiZWw6IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdHJ1ZSB0byBvcGVuIHRoZSBkYXRlIHNlbGVjdG9yIG92ZXJsYXkuXG4gICAgICAgKi9cbiAgICAgIG9wZW5lZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfb3BlbmVkQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRydWUgdG8gZGlzcGxheSBJU08tODYwMSB3ZWVrIG51bWJlcnMgaW4gdGhlIGNhbGVuZGFyLiBOb3RpY2UgdGhhdFxuICAgICAgICogZGlzcGxheWluZyB3ZWVrIG51bWJlcnMgaXMgb25seSBzdXBwb3J0ZWQgd2hlbiBgaTE4bi5maXJzdERheU9mV2Vla2BcbiAgICAgICAqIGlzIDEgKE1vbmRheSkuXG4gICAgICAgKi9cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfZnVsbHNjcmVlbjoge1xuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIG9ic2VydmVyOiAnX2Z1bGxzY3JlZW5DaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX2Z1bGxzY3JlZW5NZWRpYVF1ZXJ5OiB7XG4gICAgICAgIHZhbHVlOiAnKG1heC13aWR0aDogNDIwcHgpLCAobWF4LWhlaWdodDogNDIwcHgpJ1xuICAgICAgfSxcblxuICAgICAgLy8gQW4gYXJyYXkgb2YgYW5jZXN0b3IgZWxlbWVudHMgd2hvc2UgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmcgaXMgZm9yY2VkIGZyb20gdmFsdWVcbiAgICAgIC8vICd0b3VjaCcgdG8gdmFsdWUgJ2F1dG8nIGluIG9yZGVyIHRvIHByZXZlbnQgdGhlbSBmcm9tIGNsaXBwaW5nIHRoZSBkcm9wZG93bi4gaU9TIG9ubHkuXG4gICAgICBfdG91Y2hQcmV2ZW50ZWQ6IEFycmF5LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBvYmplY3QgdXNlZCB0byBsb2NhbGl6ZSB0aGlzIGNvbXBvbmVudC5cbiAgICAgICAqIFRvIGNoYW5nZSB0aGUgZGVmYXVsdCBsb2NhbGl6YXRpb24sIHJlcGxhY2UgdGhlIGVudGlyZVxuICAgICAgICogX2kxOG5fIG9iamVjdCBvciBqdXN0IHRoZSBwcm9wZXJ0eSB5b3Ugd2FudCB0byBtb2RpZnkuXG4gICAgICAgKlxuICAgICAgICogVGhlIG9iamVjdCBoYXMgdGhlIGZvbGxvd2luZyBKU09OIHN0cnVjdHVyZSBhbmQgZGVmYXVsdCB2YWx1ZXM6XG5cbiAgICAgICAgICB7XG4gICAgICAgICAgICAvLyBBbiBhcnJheSB3aXRoIHRoZSBmdWxsIG5hbWVzIG9mIG1vbnRocyBzdGFydGluZ1xuICAgICAgICAgICAgLy8gd2l0aCBKYW51YXJ5LlxuICAgICAgICAgICAgbW9udGhOYW1lczogW1xuICAgICAgICAgICAgICAnSmFudWFyeScsICdGZWJydWFyeScsICdNYXJjaCcsICdBcHJpbCcsICdNYXknLFxuICAgICAgICAgICAgICAnSnVuZScsICdKdWx5JywgJ0F1Z3VzdCcsICdTZXB0ZW1iZXInLFxuICAgICAgICAgICAgICAnT2N0b2JlcicsICdOb3ZlbWJlcicsICdEZWNlbWJlcidcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIHdlZWtkYXkgbmFtZXMgc3RhcnRpbmcgd2l0aCBTdW5kYXkuIFVzZWRcbiAgICAgICAgICAgIC8vIGluIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VtZW50cy5cbiAgICAgICAgICAgIHdlZWtkYXlzOiBbXG4gICAgICAgICAgICAgICdTdW5kYXknLCAnTW9uZGF5JywgJ1R1ZXNkYXknLCAnV2VkbmVzZGF5JyxcbiAgICAgICAgICAgICAgJ1RodXJzZGF5JywgJ0ZyaWRheScsICdTYXR1cmRheSdcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIC8vIEFuIGFycmF5IG9mIHNob3J0IHdlZWtkYXkgbmFtZXMgc3RhcnRpbmcgd2l0aCBTdW5kYXkuXG4gICAgICAgICAgICAvLyBEaXNwbGF5ZWQgaW4gdGhlIGNhbGVuZGFyLlxuICAgICAgICAgICAgd2Vla2RheXNTaG9ydDogW1xuICAgICAgICAgICAgICAnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J1xuICAgICAgICAgICAgXSxcblxuICAgICAgICAgICAgLy8gQW4gaW50ZWdlciBpbmRpY2F0aW5nIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWtcbiAgICAgICAgICAgIC8vICgwID0gU3VuZGF5LCAxID0gTW9uZGF5LCBldGMuKS5cbiAgICAgICAgICAgIGZpcnN0RGF5T2ZXZWVrOiAwLFxuXG4gICAgICAgICAgICAvLyBVc2VkIGluIHNjcmVlbiByZWFkZXIgYW5ub3VuY2VtZW50cyBhbG9uZyB3aXRoIHdlZWtcbiAgICAgICAgICAgIC8vIG51bWJlcnMsIGlmIHRoZXkgYXJlIGRpc3BsYXllZC5cbiAgICAgICAgICAgIHdlZWs6ICdXZWVrJyxcblxuICAgICAgICAgICAgLy8gVHJhbnNsYXRpb24gb2YgdGhlIENhbGVuZGFyIGljb24gYnV0dG9uIHRpdGxlLlxuICAgICAgICAgICAgY2FsZW5kYXI6ICdDYWxlbmRhcicsXG5cbiAgICAgICAgICAgIC8vIFRyYW5zbGF0aW9uIG9mIHRoZSBDbGVhciBpY29uIGJ1dHRvbiB0aXRsZS5cbiAgICAgICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuXG4gICAgICAgICAgICAvLyBUcmFuc2xhdGlvbiBvZiB0aGUgVG9kYXkgc2hvcnRjdXQgYnV0dG9uIHRleHQuXG4gICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcblxuICAgICAgICAgICAgLy8gVHJhbnNsYXRpb24gb2YgdGhlIENhbmNlbCBidXR0b24gdGV4dC5cbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG5cbiAgICAgICAgICAgIC8vIEEgZnVuY3Rpb24gdG8gZm9ybWF0IGdpdmVuIGBPYmplY3RgIGFzXG4gICAgICAgICAgICAvLyBkYXRlIHN0cmluZy4gT2JqZWN0IGlzIGluIHRoZSBmb3JtYXQgYHsgZGF5OiAuLi4sIG1vbnRoOiAuLi4sIHllYXI6IC4uLiB9YFxuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGFyZ3VtZW50IG1vbnRoIGlzIDAtYmFzZWQuIFRoaXMgbWVhbnMgdGhhdCBKYW51YXJ5ID0gMCBhbmQgRGVjZW1iZXIgPSAxMS5cbiAgICAgICAgICAgIGZvcm1hdERhdGU6IGQgPT4ge1xuICAgICAgICAgICAgICAvLyByZXR1cm5zIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIG9mIHRoZSBnaXZlblxuICAgICAgICAgICAgICAvLyBvYmplY3QgaW4gJ01NL0REL1lZWVknIC1mb3JtYXRcbiAgICAgICAgICAgIH0sXG5cbiAgICAgICAgICAgIC8vIEEgZnVuY3Rpb24gdG8gcGFyc2UgdGhlIGdpdmVuIHRleHQgdG8gYW4gYE9iamVjdGAgaW4gdGhlIGZvcm1hdCBgeyBkYXk6IC4uLiwgbW9udGg6IC4uLiwgeWVhcjogLi4uIH1gLlxuICAgICAgICAgICAgLy8gTXVzdCBwcm9wZXJseSBwYXJzZSAoYXQgbGVhc3QpIHRleHQgZm9ybWF0dGVkIGJ5IGBmb3JtYXREYXRlYC5cbiAgICAgICAgICAgIC8vIFNldHRpbmcgdGhlIHByb3BlcnR5IHRvIG51bGwgd2lsbCBkaXNhYmxlIGtleWJvYXJkIGlucHV0IGZlYXR1cmUuXG4gICAgICAgICAgICAvLyBOb3RlOiBUaGUgYXJndW1lbnQgbW9udGggaXMgMC1iYXNlZC4gVGhpcyBtZWFucyB0aGF0IEphbnVhcnkgPSAwIGFuZCBEZWNlbWJlciA9IDExLlxuICAgICAgICAgICAgcGFyc2VEYXRlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgLy8gUGFyc2VzIGEgc3RyaW5nIGluICdNTS9ERC9ZWScsICdNTS9ERCcgb3IgJ0REJyAtZm9ybWF0IHRvXG4gICAgICAgICAgICAgIC8vIGFuIGBPYmplY3RgIGluIHRoZSBmb3JtYXQgYHsgZGF5OiAuLi4sIG1vbnRoOiAuLi4sIHllYXI6IC4uLiB9YC5cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gQSBmdW5jdGlvbiB0byBmb3JtYXQgZ2l2ZW4gYG1vbnRoTmFtZWAgYW5kXG4gICAgICAgICAgICAvLyBgZnVsbFllYXJgIGludGVnZXIgYXMgY2FsZW5kYXIgdGl0bGUgc3RyaW5nLlxuICAgICAgICAgICAgZm9ybWF0VGl0bGU6IChtb250aE5hbWUsIGZ1bGxZZWFyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBtb250aE5hbWUgKyAnICcgKyBmdWxsWWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAqXG4gICAgICAgKiBAZGVmYXVsdCB7RW5nbGlzaC9VU31cbiAgICAgICAqL1xuICAgICAgaTE4bjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JyxcbiAgICAgICAgICAgICAgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJywgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgd2Vla2RheXM6IFsnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXSxcbiAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ6IFsnU3VuJywgJ01vbicsICdUdWUnLCAnV2VkJywgJ1RodScsICdGcmknLCAnU2F0J10sXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogMCxcbiAgICAgICAgICAgIHdlZWs6ICdXZWVrJyxcbiAgICAgICAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXInLFxuICAgICAgICAgICAgY2xlYXI6ICdDbGVhcicsXG4gICAgICAgICAgICB0b2RheTogJ1RvZGF5JyxcbiAgICAgICAgICAgIGNhbmNlbDogJ0NhbmNlbCcsXG4gICAgICAgICAgICBmb3JtYXREYXRlOiBkID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgeWVhclN0ciA9IFN0cmluZyhkLnllYXIpLnJlcGxhY2UoL1xcZCsvLCB5ID0+ICcwMDAwJy5zdWJzdHIoeS5sZW5ndGgpICsgeSk7XG4gICAgICAgICAgICAgIHJldHVybiBbZC5tb250aCArIDEsIGQuZGF5LCB5ZWFyU3RyXS5qb2luKCcvJyk7XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgcGFyc2VEYXRlOiB0ZXh0ID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcGFydHMgPSB0ZXh0LnNwbGl0KCcvJyk7XG4gICAgICAgICAgICAgIGNvbnN0IHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICAgICAgICAgICAgbGV0IGRhdGUsIG1vbnRoID0gdG9kYXkuZ2V0TW9udGgoKSwgeWVhciA9IHRvZGF5LmdldEZ1bGxZZWFyKCk7XG5cbiAgICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA9PT0gMykge1xuICAgICAgICAgICAgICAgIHllYXIgPSBwYXJzZUludChwYXJ0c1syXSk7XG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzWzJdLmxlbmd0aCA8IDMgJiYgeWVhciA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICB5ZWFyICs9IHllYXIgPCA1MCA/IDIwMDAgOiAxOTAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtb250aCA9IHBhcnNlSW50KHBhcnRzWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgICAgICAgICBtb250aCA9IHBhcnNlSW50KHBhcnRzWzBdKSAtIDE7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlSW50KHBhcnRzWzFdKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXJ0cy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBkYXRlID0gcGFyc2VJbnQocGFydHNbMF0pO1xuICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgaWYgKGRhdGUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7ZGF5OiBkYXRlLCBtb250aCwgeWVhcn07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmb3JtYXRUaXRsZTogKG1vbnRoTmFtZSwgZnVsbFllYXIpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIG1vbnRoTmFtZSArICcgJyArIGZ1bGxZZWFyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKlxuICAgICAgICogU3VwcG9ydGVkIGRhdGUgZm9ybWF0czpcbiAgICAgICAqIC0gSVNPIDg2MDEgYFwiWVlZWS1NTS1ERFwiYCAoZGVmYXVsdClcbiAgICAgICAqIC0gNi1kaWdpdCBleHRlbmRlZCBJU08gODYwMSBgXCIrWVlZWVlZLU1NLUREXCJgLCBgXCItWVlZWVlZLU1NLUREXCJgXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAqL1xuICAgICAgbWluOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfbWluQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqXG4gICAgICAgKiBTdXBwb3J0ZWQgZGF0ZSBmb3JtYXRzOlxuICAgICAgICogLSBJU08gODYwMSBgXCJZWVlZLU1NLUREXCJgIChkZWZhdWx0KVxuICAgICAgICogLSA2LWRpZ2l0IGV4dGVuZGVkIElTTyA4NjAxIGBcIitZWVlZWVktTU0tRERcImAsIGBcIi1ZWVlZWVktTU0tRERcImBcbiAgICAgICAqXG4gICAgICAgKiBAdHlwZSB7U3RyaW5nfVxuICAgICAgICovXG4gICAgICBtYXg6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ19tYXhDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZWFybGllc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGVhcmxpZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgX21pbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgLy8gbnVsbCBkb2VzIG5vdCB3b3JrIGhlcmUgYmVjYXVzZSBtaW5pbWl6ZXIgcGFzc2VzIHVuZGVmaW5lZCB0byBvdmVybGF5ICgjMzUxKVxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgX21heERhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICBfbm9JbnB1dDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBjb21wdXRlZDogJ19pc05vSW5wdXQoX2Z1bGxzY3JlZW4sIF9pb3MsIGkxOG4sIGkxOG4uKiknXG4gICAgICB9LFxuXG4gICAgICBfaW9zOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9pUCg/OmhvbmV8YWQ7KD86IFU7KT8gQ1BVKSBPUyAoXFxkKykvKVxuICAgICAgfSxcblxuICAgICAgX3dlYmtpdE92ZXJmbG93U2Nyb2xsOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKS5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9PT0gJydcbiAgICAgIH0sXG5cbiAgICAgIF9pZ25vcmVBbm5vdW5jZToge1xuICAgICAgICB2YWx1ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgX2ZvY3VzT3ZlcmxheU9uT3BlbjogQm9vbGVhbixcblxuICAgICAgX292ZXJsYXlJbml0aWFsaXplZDogQm9vbGVhblxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ191cGRhdGVIYXNWYWx1ZSh2YWx1ZSknLFxuICAgICAgJ192YWxpZGF0ZUlucHV0KF9zZWxlY3RlZERhdGUsIF9taW5EYXRlLCBfbWF4RGF0ZSknLFxuICAgICAgJ19zZWxlY3RlZERhdGVDaGFuZ2VkKF9zZWxlY3RlZERhdGUsIGkxOG4uZm9ybWF0RGF0ZSknLFxuICAgICAgJ19mb2N1c2VkRGF0ZUNoYW5nZWQoX2ZvY3VzZWREYXRlLCBpMThuLmZvcm1hdERhdGUpJyxcbiAgICAgICdfYW5ub3VuY2VGb2N1c2VkRGF0ZShfZm9jdXNlZERhdGUsIG9wZW5lZCwgX2lnbm9yZUFubm91bmNlKSdcbiAgICBdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLl9ib3VuZE9uU2Nyb2xsID0gdGhpcy5fb25TY3JvbGwuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZEZvY3VzID0gdGhpcy5fZm9jdXMuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZFVwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uID0gdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24uYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IGlzQ2xlYXJCdXR0b24gPSBlID0+IHtcbiAgICAgIGNvbnN0IHBhdGggPSBlLmNvbXBvc2VkUGF0aCgpO1xuICAgICAgY29uc3QgaW5wdXRJbmRleCA9IHBhdGguaW5kZXhPZih0aGlzLl9pbnB1dEVsZW1lbnQpO1xuICAgICAgcmV0dXJuIHBhdGguc2xpY2UoMCwgaW5wdXRJbmRleClcbiAgICAgICAgLmZpbHRlcihlbCA9PiBlbC5nZXRBdHRyaWJ1dGUgJiYgZWwuZ2V0QXR0cmlidXRlKCdwYXJ0JykgPT09ICdjbGVhci1idXR0b24nKVxuICAgICAgICAubGVuZ3RoID09PSAxO1xuICAgIH07XG5cbiAgICBhZGRMaXN0ZW5lcih0aGlzLCAndGFwJywgZSA9PiB7XG4gICAgICAvLyBGSVhNRShwbGF0b3NoYSk6IHVzZSBwcmV2ZW50RGVmYXVsdCBpbiB0aGUgdGV4dCBmaWVsZCBjbGVhciBidXR0b24sXG4gICAgICAvLyB0aGVuIHRoZSBmb2xsb3dpbmcgY29tcG9zZWRQYXRoIGNoZWNrIGNvdWxkIGJlIHNpbXBsaWZpZWQgZG93blxuICAgICAgLy8gdG8gYGlmICghZS5kZWZhdWx0UHJldmVudGVkKWAuXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL2lzc3Vlcy8zNTJcbiAgICAgIGlmICghaXNDbGVhckJ1dHRvbihlKSkge1xuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCBlID0+IHtcbiAgICAgIGlmICghaXNDbGVhckJ1dHRvbihlKSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlkb3duLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9vblVzZXJJbnB1dC5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgZSA9PiB0aGlzLl9ub0lucHV0ICYmIGUudGFyZ2V0LmJsdXIoKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgZSA9PiAhdGhpcy5vcGVuZWQgJiYgdGhpcy52YWxpZGF0ZSgpKTtcbiAgfVxuXG4gIF9pbml0T3ZlcmxheSgpIHtcbiAgICB0aGlzLiQub3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ2Rpc2FibGUtdXBncmFkZScpO1xuICAgIHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCdvcGVuZWQtY2hhbmdlZCcsIGUgPT4gdGhpcy5vcGVuZWQgPSBlLmRldGFpbC52YWx1ZSk7XG5cbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCdjbG9zZScsIHRoaXMuX2Nsb3NlLmJpbmQodGhpcykpO1xuICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzLWlucHV0JywgdGhpcy5fZm9jdXNBbmRTZWxlY3QuYmluZCh0aGlzKSk7XG4gICAgdGhpcy4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcigndmFhZGluLW92ZXJsYXktZXNjYXBlLXByZXNzJywgdGhpcy5fYm91bmRGb2N1cyk7XG5cbiAgICAvLyBLZWVwIGZvY3VzIGF0dHJpYnV0ZSBpbiBmb2N1c0VsZW1lbnQgZm9yIHN0eWxpbmdcbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsICgpID0+IHRoaXMuZm9jdXNFbGVtZW50Ll9zZXRGb2N1c2VkKHRydWUpKTtcblxuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LWNsb3NlJywgdGhpcy5fb25WYWFkaW5PdmVybGF5Q2xvc2UuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcblxuICAgIGlmICh0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuJC5vdmVybGF5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LWVzY2FwZS1wcmVzcycsIHRoaXMuX2JvdW5kRm9jdXMpO1xuICAgIH1cblxuICAgIHRoaXMub3BlbmVkID0gZmFsc2U7XG4gIH1cblxuICAvKipcbiAgICogT3BlbnMgdGhlIGRyb3Bkb3duLlxuICAgKi9cbiAgb3BlbigpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQgJiYgIXRoaXMucmVhZG9ubHkpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfY2xvc2UoZSkge1xuICAgIGlmIChlKSB7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIH1cbiAgICB0aGlzLl9mb2N1cygpO1xuICAgIHRoaXMuY2xvc2UoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDbG9zZXMgdGhlIGRyb3Bkb3duLlxuICAgKi9cbiAgY2xvc2UoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCkge1xuICAgICAgdGhpcy4kLm92ZXJsYXkuY2xvc2UoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX2lucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXQoKTtcbiAgfVxuXG4gIGdldCBfbmF0aXZlSW5wdXQoKSB7XG4gICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudCkge1xuICAgICAgLy8gdmFhZGluLXRleHQtZmllbGQncyBpbnB1dCBpcyBmb2N1c0VsZW1lbnRcbiAgICAgIC8vIGlyb24taW5wdXQncyBpbnB1dCBpcyBpbnB1dEVsZW1lbnRcbiAgICAgIHJldHVybiB0aGlzLl9pbnB1dEVsZW1lbnQuZm9jdXNFbGVtZW50ID8gdGhpcy5faW5wdXRFbGVtZW50LmZvY3VzRWxlbWVudCA6XG4gICAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5pbnB1dEVsZW1lbnQgPyB0aGlzLl9pbnB1dEVsZW1lbnQuaW5wdXRFbGVtZW50IDpcbiAgICAgICAgICB3aW5kb3cudW53cmFwID8gd2luZG93LnVud3JhcCh0aGlzLl9pbnB1dEVsZW1lbnQpIDogdGhpcy5faW5wdXRFbGVtZW50O1xuICAgIH1cbiAgfVxuXG4gIF9wYXJzZURhdGUoc3RyKSB7XG4gICAgLy8gUGFyc2luZyB3aXRoIFJlZ0V4cCB0byBlbnN1cmUgY29ycmVjdCBmb3JtYXRcbiAgICB2YXIgcGFydHMgPSAvXihbLStdXFxkezF9fFxcZHsyLDR9fFstK11cXGR7Nn0pLShcXGR7MSwyfSktKFxcZHsxLDJ9KSQvLmV4ZWMoc3RyKTtcbiAgICBpZiAoIXBhcnRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwLCAwKTsgLy8gV3JvbmcgZGF0ZSAoMTkwMC0wMS0wMSksIGJ1dCB3aXRoIG1pZG5pZ2h0IGluIGxvY2FsIHRpbWVcbiAgICBkYXRlLnNldEZ1bGxZZWFyKHBhcnNlSW50KHBhcnRzWzFdLCAxMCkpO1xuICAgIGRhdGUuc2V0TW9udGgocGFyc2VJbnQocGFydHNbMl0sIDEwKSAtIDEpO1xuICAgIGRhdGUuc2V0RGF0ZShwYXJzZUludChwYXJ0c1szXSwgMTApKTtcbiAgICByZXR1cm4gZGF0ZTtcbiAgfVxuXG4gIF9pc05vSW5wdXQoZnVsbHNjcmVlbiwgaW9zLCBpMThuKSB7XG4gICAgcmV0dXJuICF0aGlzLl9pbnB1dEVsZW1lbnQgfHwgZnVsbHNjcmVlbiB8fCBpb3MgfHwgIWkxOG4ucGFyc2VEYXRlO1xuICB9XG5cbiAgX2Zvcm1hdElTTyhkYXRlKSB7XG4gICAgaWYgKCEoZGF0ZSBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuXG4gICAgY29uc3QgcGFkID0gKG51bSwgZm10ID0gJzAwJykgPT4gKGZtdCArIG51bSkuc3Vic3RyKChmbXQgKyBudW0pLmxlbmd0aCAtIGZtdC5sZW5ndGgpO1xuXG4gICAgbGV0IHllYXJTaWduID0gJyc7XG4gICAgbGV0IHllYXJGbXQgPSAnMDAwMCc7XG4gICAgbGV0IHllYXJBYnMgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgaWYgKHllYXJBYnMgPCAwKSB7XG4gICAgICB5ZWFyQWJzID0gLXllYXJBYnM7XG4gICAgICB5ZWFyU2lnbiA9ICctJztcbiAgICAgIHllYXJGbXQgPSAnMDAwMDAwJztcbiAgICB9IGVsc2UgaWYgKGRhdGUuZ2V0RnVsbFllYXIoKSA+PSAxMDAwMCkge1xuICAgICAgeWVhclNpZ24gPSAnKyc7XG4gICAgICB5ZWFyRm10ID0gJzAwMDAwMCc7XG4gICAgfVxuXG4gICAgY29uc3QgeWVhciA9IHllYXJTaWduICsgcGFkKHllYXJBYnMsIHllYXJGbXQpO1xuICAgIGNvbnN0IG1vbnRoID0gcGFkKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIGNvbnN0IGRheSA9IHBhZChkYXRlLmdldERhdGUoKSk7XG4gICAgcmV0dXJuIFt5ZWFyLCBtb250aCwgZGF5XS5qb2luKCctJyk7XG4gIH1cblxuICBfb3BlbmVkQ2hhbmdlZChvcGVuZWQpIHtcbiAgICBpZiAob3BlbmVkICYmICF0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2luaXRPdmVybGF5KCk7XG4gICAgfVxuICAgIGlmICh0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCA9IG9wZW5lZDtcbiAgICB9XG4gICAgaWYgKG9wZW5lZCkge1xuICAgICAgdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfc2VsZWN0ZWREYXRlQ2hhbmdlZChzZWxlY3RlZERhdGUsIGZvcm1hdERhdGUpIHtcbiAgICBpZiAoc2VsZWN0ZWREYXRlID09PSB1bmRlZmluZWQgfHwgZm9ybWF0RGF0ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICh0aGlzLl9fdXNlcklucHV0T2NjdXJyZWQpIHtcbiAgICAgIHRoaXMuX19kaXNwYXRjaENoYW5nZSA9IHRydWU7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0VmFsdWUgPSBzZWxlY3RlZERhdGUgJiYgZm9ybWF0RGF0ZShEYXRlUGlja2VySGVscGVyLl9leHRyYWN0RGF0ZVBhcnRzKHNlbGVjdGVkRGF0ZSkpO1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5fZm9ybWF0SVNPKHNlbGVjdGVkRGF0ZSk7XG4gICAgaWYgKHZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKGlucHV0VmFsdWUpO1xuICAgICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9fdXNlcklucHV0T2NjdXJyZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9fZGlzcGF0Y2hDaGFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IHRydWU7XG4gICAgdGhpcy5fZm9jdXNlZERhdGUgPSBzZWxlY3RlZERhdGU7XG4gICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSBmYWxzZTtcbiAgICB0aGlzLl9pbnB1dFZhbHVlID0gc2VsZWN0ZWREYXRlID8gaW5wdXRWYWx1ZSA6ICcnO1xuICB9XG5cbiAgX2ZvY3VzZWREYXRlQ2hhbmdlZChmb2N1c2VkRGF0ZSwgZm9ybWF0RGF0ZSkge1xuICAgIGlmIChmb2N1c2VkRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGZvcm1hdERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLl9fdXNlcklucHV0T2NjdXJyZWQgPSB0cnVlO1xuICAgIGlmICghdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgJiYgIXRoaXMuX25vSW5wdXQpIHtcbiAgICAgIHRoaXMuX2lucHV0VmFsdWUgPSBmb2N1c2VkRGF0ZSA/IGZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyhmb2N1c2VkRGF0ZSkpIDogJyc7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZUhhc1ZhbHVlKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaGFzLXZhbHVlJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaGFzLXZhbHVlJyk7XG4gICAgfVxuICB9XG5cblxuICBfX2dldE92ZXJsYXlUaGVtZSh0aGVtZSwgb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgaWYgKG92ZXJsYXlJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuIHRoZW1lO1xuICAgIH1cbiAgfVxuXG4gIF9oYW5kbGVEYXRlQ2hhbmdlKHByb3BlcnR5LCB2YWx1ZSwgb2xkVmFsdWUpIHtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICB0aGlzW3Byb3BlcnR5XSA9ICcnO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRlID0gdGhpcy5fcGFyc2VEYXRlKHZhbHVlKTtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHRoaXMudmFsdWUgPSBvbGRWYWx1ZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFEYXRlUGlja2VySGVscGVyLl9kYXRlRXF1YWxzKHRoaXNbcHJvcGVydHldLCBkYXRlKSkge1xuICAgICAgdGhpc1twcm9wZXJ0eV0gPSBkYXRlO1xuICAgIH1cbiAgfVxuXG4gIF92YWx1ZUNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKHRoaXMuX19kaXNwYXRjaENoYW5nZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge2J1YmJsZXM6IHRydWV9KSk7XG4gICAgfVxuICAgIHRoaXMuX2hhbmRsZURhdGVDaGFuZ2UoJ19zZWxlY3RlZERhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX21pbkNoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5faGFuZGxlRGF0ZUNoYW5nZSgnX21pbkRhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX21heENoYW5nZWQodmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgdGhpcy5faGFuZGxlRGF0ZUNoYW5nZSgnX21heERhdGUnLCB2YWx1ZSwgb2xkVmFsdWUpO1xuICB9XG5cbiAgX3VwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKCkge1xuICAgIGlmICghdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghdGhpcy5fZnVsbHNjcmVlbikge1xuICAgICAgY29uc3QgaW5wdXRSZWN0ID0gdGhpcy5faW5wdXRFbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG4gICAgICBjb25zdCBib3R0b21BbGlnbiA9IGlucHV0UmVjdC50b3AgPiB3aW5kb3cuaW5uZXJIZWlnaHQgLyAyO1xuICAgICAgY29uc3QgcmlnaHRBbGlnbiA9IGlucHV0UmVjdC5sZWZ0ICsgdGhpcy5jbGllbnRXaWR0aCAvIDIgPiB3aW5kb3cuaW5uZXJXaWR0aCAvIDI7XG5cbiAgICAgIGlmIChyaWdodEFsaWduKSB7XG4gICAgICAgIGNvbnN0IHZpZXdwb3J0V2lkdGggPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJXaWR0aCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudFdpZHRoKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc2V0QXR0cmlidXRlKCdyaWdodC1hbGlnbmVkJywgJycpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbGVmdCcpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yaWdodCA9ICh2aWV3cG9ydFdpZHRoIC0gaW5wdXRSZWN0LnJpZ2h0KSArICdweCc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5yZW1vdmVBdHRyaWJ1dGUoJ3JpZ2h0LWFsaWduZWQnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3JpZ2h0Jyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLmxlZnQgPSBpbnB1dFJlY3QubGVmdCArICdweCc7XG4gICAgICB9XG5cbiAgICAgIGlmIChib3R0b21BbGlnbikge1xuICAgICAgICBjb25zdCB2aWV3cG9ydEhlaWdodCA9IE1hdGgubWluKHdpbmRvdy5pbm5lckhlaWdodCwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgnYm90dG9tLWFsaWduZWQnLCAnJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUuYm90dG9tID0gKHZpZXdwb3J0SGVpZ2h0IC0gaW5wdXRSZWN0LnRvcCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdib3R0b20tYWxpZ25lZCcpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnYm90dG9tJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnRvcCA9IGlucHV0UmVjdC5ib3R0b20gKyAncHgnO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgnZGlyJyxcbiAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5faW5wdXRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCdkaXJlY3Rpb24nKVxuICAgICk7XG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgfVxuXG4gIF9mdWxsc2NyZWVuQ2hhbmdlZCgpIHtcbiAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCkge1xuICAgICAgdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfb25PdmVybGF5T3BlbmVkKCkge1xuICAgIHRoaXMuX29wZW5lZFdpdGhGb2N1c1JpbmcgPSB0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXMtcmluZycpIHx8ICh0aGlzLmZvY3VzRWxlbWVudCAmJiB0aGlzLmZvY3VzRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKSk7XG5cbiAgICB2YXIgcGFyc2VkSW5pdGlhbFBvc2l0aW9uID0gdGhpcy5fcGFyc2VEYXRlKHRoaXMuaW5pdGlhbFBvc2l0aW9uKTtcblxuICAgIHZhciBpbml0aWFsUG9zaXRpb24gPSB0aGlzLl9zZWxlY3RlZERhdGUgfHwgdGhpcy5fb3ZlcmxheUNvbnRlbnQuaW5pdGlhbFBvc2l0aW9uIHx8XG4gICAgICBwYXJzZWRJbml0aWFsUG9zaXRpb24gfHwgbmV3IERhdGUoKTtcblxuICAgIGlmIChwYXJzZWRJbml0aWFsUG9zaXRpb24gfHxcbiAgICAgIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKGluaXRpYWxQb3NpdGlvbiwgdGhpcy5fbWluRGF0ZSwgdGhpcy5fbWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbiA9IGluaXRpYWxQb3NpdGlvbjtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuaW5pdGlhbFBvc2l0aW9uID1cbiAgICAgICAgRGF0ZVBpY2tlckhlbHBlci5fZ2V0Q2xvc2VzdERhdGUoaW5pdGlhbFBvc2l0aW9uLCBbdGhpcy5fbWluRGF0ZSwgdGhpcy5fbWF4RGF0ZV0pO1xuICAgIH1cblxuICAgIHRoaXMuX292ZXJsYXlDb250ZW50LnNjcm9sbFRvRGF0ZSh0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSB8fCB0aGlzLl9vdmVybGF5Q29udGVudC5pbml0aWFsUG9zaXRpb24pO1xuICAgIC8vIEhhdmUgYSBkZWZhdWx0IGZvY3VzZWQgZGF0ZVxuICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gdHJ1ZTtcbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSA9IHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzZWREYXRlIHx8IHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbjtcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IGZhbHNlO1xuXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kT25TY3JvbGwsIHRydWUpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1yZXNpemUnLCB0aGlzLl9ib3VuZFVwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLl93ZWJraXRPdmVyZmxvd1Njcm9sbCkge1xuICAgICAgdGhpcy5fdG91Y2hQcmV2ZW50ZWQgPSB0aGlzLl9wcmV2ZW50V2Via2l0T3ZlcmZsb3dTY3JvbGxpbmdUb3VjaCh0aGlzLnBhcmVudEVsZW1lbnQpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9mb2N1c092ZXJsYXlPbk9wZW4pIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgICB0aGlzLl9mb2N1c092ZXJsYXlPbk9wZW4gPSBmYWxzZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZm9jdXMoKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbm9JbnB1dCAmJiB0aGlzLmZvY3VzRWxlbWVudCkge1xuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQuYmx1cigpO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG5cbiAgICB0aGlzLl9pZ25vcmVBbm5vdW5jZSA9IGZhbHNlO1xuICB9XG5cbiAgLy8gQSBoYWNrIG5lZWRlZCBmb3IgaU9TIHRvIHByZXZlbnQgZHJvcGRvd24gZnJvbSBiZWluZyBjbGlwcGVkIGluIGFuXG4gIC8vIGFuY2VzdG9yIGNvbnRhaW5lciB3aXRoIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgX3ByZXZlbnRXZWJraXRPdmVyZmxvd1Njcm9sbGluZ1RvdWNoKGVsZW1lbnQpIHtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgd2hpbGUgKGVsZW1lbnQpIHtcbiAgICAgIGlmICh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbGVtZW50KS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9PT0gJ3RvdWNoJykge1xuICAgICAgICB2YXIgb2xkSW5saW5lVmFsdWUgPSBlbGVtZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nO1xuICAgICAgICBlbGVtZW50LnN0eWxlLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID0gJ2F1dG8nO1xuICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgZWxlbWVudDogZWxlbWVudCxcbiAgICAgICAgICBvbGRJbmxpbmVWYWx1ZTogb2xkSW5saW5lVmFsdWVcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgICBlbGVtZW50ID0gZWxlbWVudC5wYXJlbnRFbGVtZW50O1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgX29uT3ZlcmxheUNsb3NlZCgpIHtcbiAgICB0aGlzLl9pZ25vcmVBbm5vdW5jZSA9IHRydWU7XG5cbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgdGhpcy5fYm91bmRPblNjcm9sbCwgdHJ1ZSk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kVXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24pO1xuXG4gICAgaWYgKHRoaXMuX3RvdWNoUHJldmVudGVkKSB7XG4gICAgICB0aGlzLl90b3VjaFByZXZlbnRlZC5mb3JFYWNoKHByZXZlbnRlZCA9PlxuICAgICAgICBwcmV2ZW50ZWQuZWxlbWVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9IHByZXZlbnRlZC5vbGRJbmxpbmVWYWx1ZSk7XG4gICAgICB0aGlzLl90b3VjaFByZXZlbnRlZCA9IFtdO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG5cbiAgICAvLyBTZWxlY3QgdGhlIHBhcnNlZCBpbnB1dCBvciBmb2N1c2VkIGRhdGVcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IHRydWU7XG4gICAgaWYgKHRoaXMuaTE4bi5wYXJzZURhdGUpIHtcbiAgICAgIHZhciBpbnB1dFZhbHVlID0gdGhpcy5faW5wdXRWYWx1ZSB8fCAnJztcbiAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSB0aGlzLmkxOG4ucGFyc2VEYXRlKGlucHV0VmFsdWUpO1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IGRhdGVPYmplY3QgJiZcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRlKGAke2RhdGVPYmplY3QueWVhcn0tJHtkYXRlT2JqZWN0Lm1vbnRoICsgMX0tJHtkYXRlT2JqZWN0LmRheX1gKTtcblxuICAgICAgaWYgKHRoaXMuX2lzVmFsaWREYXRlKHBhcnNlZERhdGUpKSB7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHBhcnNlZERhdGU7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBudWxsO1xuICAgICAgICB0aGlzLl9pbnB1dFZhbHVlID0gaW5wdXRWYWx1ZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHRoaXMuX2ZvY3VzZWREYXRlKSB7XG4gICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9mb2N1c2VkRGF0ZTtcbiAgICB9XG4gICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSBmYWxzZTtcblxuICAgIGlmICh0aGlzLl9uYXRpdmVJbnB1dCAmJiB0aGlzLl9uYXRpdmVJbnB1dC5zZWxlY3Rpb25TdGFydCkge1xuICAgICAgdGhpcy5fbmF0aXZlSW5wdXQuc2VsZWN0aW9uU3RhcnQgPSB0aGlzLl9uYXRpdmVJbnB1dC5zZWxlY3Rpb25FbmQ7XG4gICAgfVxuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZCwgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHkuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2YWx1ZSBWYWx1ZSB0byB2YWxpZGF0ZS4gT3B0aW9uYWwsIGRlZmF1bHRzIHRvIHVzZXIncyBpbnB1dCB2YWx1ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQgYW5kIHNldHMgdGhlIGBpbnZhbGlkYCBmbGFnIGFwcHJvcHJpYXRlbHlcbiAgICovXG4gIHZhbGlkYXRlKHZhbHVlKSB7XG4gICAgLy8gcmVzZXQgaW52YWxpZCBzdGF0ZSBvbiB0aGUgdW5kZXJseWluZyB0ZXh0IGZpZWxkXG4gICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgdmFsdWUgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkID8gdmFsdWUgOiB0aGlzLl9pbnB1dFZhbHVlO1xuICAgIHJldHVybiAhKHRoaXMuaW52YWxpZCA9ICF0aGlzLmNoZWNrVmFsaWRpdHkodmFsdWUpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIGN1cnJlbnQgaW5wdXQgdmFsdWUgc2F0aXNmaWVzIGFsbCBjb25zdHJhaW50cyAoaWYgYW55KVxuICAgKlxuICAgKiBPdmVycmlkZSB0aGUgYGNoZWNrVmFsaWRpdHlgIG1ldGhvZCBmb3IgY3VzdG9tIHZhbGlkYXRpb25zLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVmFsdWUgdG8gdmFsaWRhdGUuIE9wdGlvbmFsLCBkZWZhdWx0cyB0byB0aGUgc2VsZWN0ZWQgZGF0ZS5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWRcbiAgICovXG4gIGNoZWNrVmFsaWRpdHkodmFsdWUpIHtcbiAgICB2YXIgaW5wdXRWYWxpZCA9ICF2YWx1ZSB8fFxuICAgICAgKHRoaXMuX3NlbGVjdGVkRGF0ZSAmJiB2YWx1ZSA9PT0gdGhpcy5pMThuLmZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyh0aGlzLl9zZWxlY3RlZERhdGUpKSk7XG4gICAgdmFyIG1pbk1heFZhbGlkID0gIXRoaXMuX3NlbGVjdGVkRGF0ZSB8fFxuICAgICAgRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUFsbG93ZWQodGhpcy5fc2VsZWN0ZWREYXRlLCB0aGlzLl9taW5EYXRlLCB0aGlzLl9tYXhEYXRlKTtcblxuICAgIHZhciBpbnB1dFZhbGlkaXR5ID0gdHJ1ZTtcbiAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50KSB7XG4gICAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkpIHtcbiAgICAgICAgLy8gdmFhZGluIG5hdGl2ZSBpbnB1dCBlbGVtZW50cyBoYXZlIHRoZSBjaGVja1ZhbGlkaXR5IG1ldGhvZFxuICAgICAgICBpbnB1dFZhbGlkaXR5ID0gdGhpcy5faW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkodmFsdWUpO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLl9pbnB1dEVsZW1lbnQudmFsaWRhdGUpIHtcbiAgICAgICAgLy8gaXJvbi1mb3JtLWVsZW1lbnRzIGhhdmUgdGhlIHZhbGlkYXRlIEFQSVxuICAgICAgICBpbnB1dFZhbGlkaXR5ID0gdGhpcy5faW5wdXRFbGVtZW50LnZhbGlkYXRlKHZhbHVlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gaW5wdXRWYWxpZCAmJiBtaW5NYXhWYWxpZCAmJiBpbnB1dFZhbGlkaXR5O1xuICB9XG5cbiAgX29uU2Nyb2xsKGUpIHtcbiAgICBpZiAoZS50YXJnZXQgPT09IHdpbmRvdyB8fCAhdGhpcy5fb3ZlcmxheUNvbnRlbnQuY29udGFpbnMoZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLl91cGRhdGVBbGlnbm1lbnRBbmRQb3NpdGlvbigpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1cygpIHtcbiAgICBpZiAodGhpcy5fbm9JbnB1dCkge1xuICAgICAgdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2lucHV0RWxlbWVudC5mb2N1cygpO1xuICAgIH1cbiAgfVxuXG4gIF9mb2N1c0FuZFNlbGVjdCgpIHtcbiAgICB0aGlzLl9mb2N1cygpO1xuICAgIHRoaXMuX3NldFNlbGVjdGlvblJhbmdlKDAsIHRoaXMuX2lucHV0VmFsdWUubGVuZ3RoKTtcbiAgfVxuXG4gIF9zZXRTZWxlY3Rpb25SYW5nZShhLCBiKSB7XG4gICAgaWYgKHRoaXMuX25hdGl2ZUlucHV0ICYmIHRoaXMuX25hdGl2ZUlucHV0LnNldFNlbGVjdGlvblJhbmdlKSB7XG4gICAgICB0aGlzLl9uYXRpdmVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZShhLCBiKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogS2V5Ym9hcmQgTmF2aWdhdGlvblxuICAgKi9cbiAgX2V2ZW50S2V5KGUpIHtcbiAgICB2YXIga2V5cyA9IFsnZG93bicsICd1cCcsICdlbnRlcicsICdlc2MnLCAndGFiJ107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrID0ga2V5c1tpXTtcbiAgICAgIGlmIChJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZSwgaykpIHtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2lzVmFsaWREYXRlKGQpIHtcbiAgICByZXR1cm4gZCAmJiAhaXNOYU4oZC5nZXRUaW1lKCkpO1xuICB9XG5cbiAgX29uS2V5ZG93bihlKSB7XG4gICAgaWYgKHRoaXMuX25vSW5wdXQpIHtcbiAgICAgIC8vIFRoZSBpbnB1dCBlbGVtZW50IGNhbm5vdCBiZSByZWFkb25seSBhcyBpdCB3b3VsZCBjb25mbGljdCB3aXRoXG4gICAgICAvLyB0aGUgcmVxdWlyZWQgYXR0cmlidXRlLiBCb3RoIGFyZSBub3QgYWxsb3dlZCBvbiBhbiBpbnB1dCBlbGVtZW50LlxuICAgICAgLy8gVGhlcmVmb3JlIHdlIHByZXZlbnQgZGVmYXVsdCBvbiBtb3N0IGtleWRvd24gZXZlbnRzLlxuICAgICAgdmFyIGFsbG93ZWRLZXlzID0gW1xuICAgICAgICA5IC8vIHRhYlxuICAgICAgXTtcbiAgICAgIGlmIChhbGxvd2VkS2V5cy5pbmRleE9mKGUua2V5Q29kZSkgPT09IC0xKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBzd2l0Y2ggKHRoaXMuX2V2ZW50S2V5KGUpKSB7XG4gICAgICBjYXNlICdkb3duJzpcbiAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgLy8gcHJldmVudCBzY3JvbGxpbmcgdGhlIHBhZ2Ugd2l0aCBhcnJvd3NcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzKCk7XG4gICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuX29uS2V5ZG93bihlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c092ZXJsYXlPbk9wZW4gPSB0cnVlO1xuICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdlbnRlcic6IHtcbiAgICAgICAgY29uc3QgZGF0ZU9iamVjdCA9IHRoaXMuaTE4bi5wYXJzZURhdGUodGhpcy5faW5wdXRWYWx1ZSk7XG4gICAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBkYXRlT2JqZWN0ICYmXG4gICAgICAgICAgdGhpcy5fcGFyc2VEYXRlKGRhdGVPYmplY3QueWVhciArICctJyArIChkYXRlT2JqZWN0Lm1vbnRoICsgMSkgKyAnLScgKyBkYXRlT2JqZWN0LmRheSk7XG5cbiAgICAgICAgaWYgKHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCAmJiB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSAmJiB0aGlzLl9pc1ZhbGlkRGF0ZShwYXJzZWREYXRlKSkge1xuICAgICAgICAgIHRoaXMuX3NlbGVjdGVkRGF0ZSA9IHRoaXMuX292ZXJsYXlDb250ZW50LmZvY3VzZWREYXRlO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBjYXNlICdlc2MnOlxuICAgICAgICB0aGlzLl9mb2N1c2VkRGF0ZSA9IHRoaXMuX3NlbGVjdGVkRGF0ZTtcbiAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0YWInOlxuICAgICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgLy8gQ2xlYXIgdGhlIHNlbGVjdGlvbiByYW5nZSAocmVtYWlucyB2aXNpYmxlIG9uIElFKVxuICAgICAgICAgIHRoaXMuX3NldFNlbGVjdGlvblJhbmdlKDAsIDApO1xuICAgICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c0NhbmNlbCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1cygpO1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQucmV2ZWFsRGF0ZSh0aGlzLl9mb2N1c2VkRGF0ZSk7XG4gICAgICAgICAgfVxuXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgX3ZhbGlkYXRlSW5wdXQoZGF0ZSwgbWluLCBtYXgpIHtcbiAgICBpZiAoZGF0ZSAmJiAobWluIHx8IG1heCkpIHtcbiAgICAgIHRoaXMuaW52YWxpZCA9ICFEYXRlUGlja2VySGVscGVyLl9kYXRlQWxsb3dlZChkYXRlLCBtaW4sIG1heCk7XG4gICAgfVxuICB9XG5cbiAgX29uVXNlcklucHV0KGUpIHtcbiAgICBpZiAoIXRoaXMub3BlbmVkICYmIHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZSkge1xuICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIHRoaXMuX3VzZXJJbnB1dFZhbHVlQ2hhbmdlZCgpO1xuICB9XG5cbiAgX3VzZXJJbnB1dFZhbHVlQ2hhbmdlZCh2YWx1ZSkge1xuICAgIGlmICh0aGlzLm9wZW5lZCAmJiB0aGlzLl9pbnB1dFZhbHVlKSB7XG4gICAgICBjb25zdCBkYXRlT2JqZWN0ID0gdGhpcy5pMThuLnBhcnNlRGF0ZSAmJiB0aGlzLmkxOG4ucGFyc2VEYXRlKHRoaXMuX2lucHV0VmFsdWUpO1xuICAgICAgY29uc3QgcGFyc2VkRGF0ZSA9IGRhdGVPYmplY3QgJiZcbiAgICAgICAgdGhpcy5fcGFyc2VEYXRlKGAke2RhdGVPYmplY3QueWVhcn0tJHtkYXRlT2JqZWN0Lm1vbnRoICsgMX0tJHtkYXRlT2JqZWN0LmRheX1gKTtcblxuICAgICAgaWYgKHRoaXMuX2lzVmFsaWREYXRlKHBhcnNlZERhdGUpKSB7XG4gICAgICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgaWYgKCFEYXRlUGlja2VySGVscGVyLl9kYXRlRXF1YWxzKHBhcnNlZERhdGUsIHRoaXMuX2ZvY3VzZWREYXRlKSkge1xuICAgICAgICAgIHRoaXMuX2ZvY3VzZWREYXRlID0gcGFyc2VkRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9hbm5vdW5jZUZvY3VzZWREYXRlKF9mb2N1c2VkRGF0ZSwgb3BlbmVkLCBfaWdub3JlQW5ub3VuY2UpIHtcbiAgICBpZiAob3BlbmVkICYmICFfaWdub3JlQW5ub3VuY2UpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmFubm91bmNlRm9jdXNlZERhdGUoKTtcbiAgICB9XG4gIH1cblxuICBnZXQgX292ZXJsYXlDb250ZW50KCkge1xuICAgIHJldHVybiB0aGlzLiQub3ZlcmxheS5jb250ZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5LWNvbnRlbnQnKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIGNvbW1pdHMgYSB2YWx1ZSBjaGFuZ2UuXG4gICAqXG4gICAqIEBldmVudCBjaGFuZ2VcbiAgICovXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IEdlc3R1cmVFdmVudExpc3RlbmVycyB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9nZXN0dXJlLWV2ZW50LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tbWVkaWEtcXVlcnkvaXJvbi1tZWRpYS1xdWVyeS5qcyc7XG5pbXBvcnQgeyBJcm9uQTExeUtleXNCZWhhdmlvciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7IElyb25BMTF5QW5ub3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tYnV0dG9uL3NyYy92YWFkaW4tYnV0dG9uLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wZXJ0eU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1lLXByb3BlcnR5LW1peGluLmpzJztcbmltcG9ydCAnLi92YWFkaW4tbW9udGgtY2FsZW5kYXIuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySGVscGVyIH0gZnJvbSAnLi92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzJztcbmltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItc3R5bGVzLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgeyBhZGRMaXN0ZW5lciwgc2V0VG91Y2hBY3Rpb24gfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9nZXN0dXJlcy5qcyc7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuLyoqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEYXRlUGlja2VyT3ZlcmxheUNvbnRlbnRFbGVtZW50IGV4dGVuZHNcbiAgVGhlbWFibGVNaXhpbihcbiAgICBUaGVtZVByb3BlcnR5TWl4aW4oXG4gICAgICBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMoUG9seW1lckVsZW1lbnQpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZnVsbHNjcmVlbl0pKSBbcGFydD1cIm92ZXJsYXktaGVhZGVyXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06bm90KFtzaG93Y2xlYXJdKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXVtkZXNrdG9wXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW3llYXJzLXZpc2libGVdKSkgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxODBkZWcpO1xuICAgICAgfVxuXG4gICAgICAjc2Nyb2xsZXJzIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm1vbnRoc1wiXSxcbiAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibW9udGhzXCJdIHtcbiAgICAgICAgLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItaXRlbS1oZWlnaHQ6IDI3MHB4O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyc1tkZXNrdG9wXSBbcGFydD1cIm1vbnRoc1wiXSB7XG4gICAgICAgIHJpZ2h0OiA1MHB4O1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0OiA4MHB4O1xuICAgICAgICB3aWR0aDogNTBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDEwMCUpO1xuICAgICAgICAtd2Via2l0LXRhcC1oaWdobGlnaHQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAvKiBDZW50ZXIgdGhlIHllYXIgc2Nyb2xsZXIgcG9zaXRpb24uICovXG4gICAgICAgIC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWJ1ZmZlci1vZmZzZXQ6IDUwJTtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyc1tkZXNrdG9wXSBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGhlaWdodDogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICAgICAgICBib3JkZXItd2lkdGg6IDZweDtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMwMDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5hbmltYXRlKSBbcGFydD1cIm1vbnRoc1wiXSxcbiAgICAgIDpob3N0KC5hbmltYXRlKSBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDIwMG1zO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvb2xiYXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJvdmVybGF5LWhlYWRlclwiXTpub3QoW2Rlc2t0b3BdKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydH49XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIHJpZ2h0OiA4cHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgei1pbmRleDogMTtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgfVxuXG4gICAgICAjYW5ub3VuY2VyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGNsaXA6IHJlY3QoMCwgMCwgMCwgMCk7XG4gICAgICAgIGNsaXAtcGF0aDogaW5zZXQoMTAwJSk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJhbm5vdW5jZXJcIiByb2xlPVwiYWxlcnRcIiBhcmlhLWxpdmU9XCJwb2xpdGVcIj5cbiAgICAgIFtbaTE4bi5jYWxlbmRhcl1dXG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IHBhcnQ9XCJvdmVybGF5LWhlYWRlclwiIG9uLXRvdWNoZW5kPVwiX3ByZXZlbnREZWZhdWx0XCIgZGVza3RvcFxcJD1cIltbX2Rlc2t0b3BNb2RlXV1cIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgIDxkaXYgcGFydD1cImxhYmVsXCI+W1tfZm9ybWF0RGlzcGxheWVkKHNlbGVjdGVkRGF0ZSwgaTE4bi5mb3JtYXREYXRlLCBsYWJlbCldXTwvZGl2PlxuICAgICAgPGRpdiBwYXJ0PVwiY2xlYXItYnV0dG9uXCIgb24tdGFwPVwiX2NsZWFyXCIgc2hvd2NsZWFyXFwkPVwiW1tfc2hvd0NsZWFyKHNlbGVjdGVkRGF0ZSldXVwiPjwvZGl2PlxuICAgICAgPGRpdiBwYXJ0PVwidG9nZ2xlLWJ1dHRvblwiIG9uLXRhcD1cIl9jYW5jZWxcIj48L2Rpdj5cblxuICAgICAgPGRpdiBwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiIGRlc2t0b3BcXCQ9XCJbW19kZXNrdG9wTW9kZV1dXCIgb24tdGFwPVwiX3RvZ2dsZVllYXJTY3JvbGxlclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPlxuICAgICAgICBbW195ZWFyQWZ0ZXJYTW9udGhzKF92aXNpYmxlTW9udGhJbmRleCldXVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGlkPVwic2Nyb2xsZXJzXCIgZGVza3RvcFxcJD1cIltbX2Rlc2t0b3BNb2RlXV1cIiBvbi10cmFjaz1cIl90cmFja1wiPlxuICAgICAgPHZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlciBpZD1cIm1vbnRoU2Nyb2xsZXJcIiBvbi1jdXN0b20tc2Nyb2xsPVwiX29uTW9udGhTY3JvbGxcIiBvbi10b3VjaHN0YXJ0PVwiX29uTW9udGhTY3JvbGxUb3VjaFN0YXJ0XCIgYnVmZmVyLXNpemU9XCIzXCIgYWN0aXZlPVwiW1tpbml0aWFsUG9zaXRpb25dXVwiIHBhcnQ9XCJtb250aHNcIj5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDx2YWFkaW4tbW9udGgtY2FsZW5kYXIgaTE4bj1cIltbaTE4bl1dXCIgbW9udGg9XCJbW19kYXRlQWZ0ZXJYTW9udGhzKGluZGV4KV1dXCIgc2VsZWN0ZWQtZGF0ZT1cInt7c2VsZWN0ZWREYXRlfX1cIiBmb2N1c2VkLWRhdGU9XCJbW2ZvY3VzZWREYXRlXV1cIiBpZ25vcmUtdGFwcz1cIltbX2lnbm9yZVRhcHNdXVwiIHNob3ctd2Vlay1udW1iZXJzPVwiW1tzaG93V2Vla051bWJlcnNdXVwiIG1pbi1kYXRlPVwiW1ttaW5EYXRlXV1cIiBtYXgtZGF0ZT1cIltbbWF4RGF0ZV1dXCIgZm9jdXNlZFxcJD1cIltbX2ZvY3VzZWRdXVwiIHBhcnQ9XCJtb250aFwiIHRoZW1lXFwkPVwiW1t0aGVtZV1dXCI+XG4gICAgICAgICAgPC92YWFkaW4tbW9udGgtY2FsZW5kYXI+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlcj5cbiAgICAgIDx2YWFkaW4taW5maW5pdGUtc2Nyb2xsZXIgaWQ9XCJ5ZWFyU2Nyb2xsZXJcIiBvbi10YXA9XCJfb25ZZWFyVGFwXCIgb24tY3VzdG9tLXNjcm9sbD1cIl9vblllYXJTY3JvbGxcIiBvbi10b3VjaHN0YXJ0PVwiX29uWWVhclNjcm9sbFRvdWNoU3RhcnRcIiBidWZmZXItc2l6ZT1cIjEyXCIgYWN0aXZlPVwiW1tpbml0aWFsUG9zaXRpb25dXVwiIHBhcnQ9XCJ5ZWFyc1wiPlxuICAgICAgICA8dGVtcGxhdGU+XG4gICAgICAgICAgPGRpdiBwYXJ0PVwieWVhci1udW1iZXJcIiByb2xlPVwiYnV0dG9uXCIgY3VycmVudFxcJD1cIltbX2lzQ3VycmVudFllYXIoaW5kZXgpXV1cIiBzZWxlY3RlZFxcJD1cIltbX2lzU2VsZWN0ZWRZZWFyKGluZGV4LCBzZWxlY3RlZERhdGUpXV1cIj5cbiAgICAgICAgICAgIFtbX3llYXJBZnRlclhZZWFycyhpbmRleCldXVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgcGFydD1cInllYXItc2VwYXJhdG9yXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9kaXY+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlcj5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgb24tdG91Y2hlbmQ9XCJfcHJldmVudERlZmF1bHRcIiByb2xlPVwidG9vbGJhclwiIHBhcnQ9XCJ0b29sYmFyXCI+XG4gICAgICA8dmFhZGluLWJ1dHRvbiBpZD1cInRvZGF5QnV0dG9uXCIgcGFydD1cInRvZGF5LWJ1dHRvblwiIGRpc2FibGVkPVwiW1shX2lzVG9kYXlBbGxvd2VkKG1pbkRhdGUsIG1heERhdGUpXV1cIiBvbi10YXA9XCJfb25Ub2RheVRhcFwiPlxuICAgICAgICBbW2kxOG4udG9kYXldXVxuICAgICAgPC92YWFkaW4tYnV0dG9uPlxuICAgICAgPHZhYWRpbi1idXR0b24gaWQ9XCJjYW5jZWxCdXR0b25cIiBwYXJ0PVwiY2FuY2VsLWJ1dHRvblwiIG9uLXRhcD1cIl9jYW5jZWxcIj5cbiAgICAgICAgW1tpMThuLmNhbmNlbF1dXG4gICAgICA8L3ZhYWRpbi1idXR0b24+XG4gICAgPC9kaXY+XG5cbiAgICA8aXJvbi1tZWRpYS1xdWVyeSBxdWVyeT1cIihtaW4td2lkdGg6IDM3NXB4KVwiIHF1ZXJ5LW1hdGNoZXM9XCJ7e19kZXNrdG9wTW9kZX19XCI+PC9pcm9uLW1lZGlhLXF1ZXJ5PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBUaGUgdmFsdWUgZm9yIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgc2VsZWN0ZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBEYXRlIHZhbHVlIHdoaWNoIGlzIGZvY3VzZWQgdXNpbmcga2V5Ym9hcmQuXG4gICAgICAgKi9cbiAgICAgIGZvY3VzZWREYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfZm9jdXNlZERhdGVDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX2ZvY3VzZWRNb250aERhdGU6IE51bWJlcixcblxuICAgICAgLyoqXG4gICAgICAgKiBEYXRlIHdoaWNoIHNob3VsZCBiZSB2aXNpYmxlIHdoZW4gdGhlcmUgaXMgbm8gdmFsdWUgc2VsZWN0ZWQuXG4gICAgICAgKi9cbiAgICAgIGluaXRpYWxQb3NpdGlvbjoge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBvYnNlcnZlcjogJ19pbml0aWFsUG9zaXRpb25DaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX29yaWdpbkRhdGU6IHtcbiAgICAgICAgdmFsdWU6IG5ldyBEYXRlKClcbiAgICAgIH0sXG5cbiAgICAgIF92aXNpYmxlTW9udGhJbmRleDogTnVtYmVyLFxuXG4gICAgICBfZGVza3RvcE1vZGU6IEJvb2xlYW4sXG5cbiAgICAgIF90cmFuc2xhdGVYOiB7XG4gICAgICAgIG9ic2VydmVyOiAnX3RyYW5zbGF0ZVhDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgX3llYXJTY3JvbGxlcldpZHRoOiB7XG4gICAgICAgIHZhbHVlOiA1MFxuICAgICAgfSxcblxuICAgICAgaTE4bjoge1xuICAgICAgICB0eXBlOiBPYmplY3RcbiAgICAgIH0sXG5cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfaWdub3JlVGFwczogQm9vbGVhbixcblxuICAgICAgX25vdFRhcHBpbmc6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIG1pbkRhdGU6IERhdGUsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgbWF4RGF0ZTogRGF0ZSxcblxuICAgICAgX2ZvY3VzZWQ6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogSW5wdXQgbGFiZWxcbiAgICAgICAqL1xuICAgICAgbGFiZWw6IFN0cmluZ1xuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd0YWJpbmRleCcsIDApO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgICBhZGRMaXN0ZW5lcih0aGlzLCAndGFwJywgdGhpcy5fc3RvcFByb3BhZ2F0aW9uKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fb25PdmVybGF5Rm9jdXMuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fb25PdmVybGF5Qmx1ci5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBzY3JvbGxlciByZWFjaGVzIHRoZSB0YXJnZXQgc2Nyb2xsaW5nIHBvc2l0aW9uLlxuICAgKiBAZXZlbnQgc2Nyb2xsLWFuaW1hdGlvbi1maW5pc2hlZFxuICAgKiBAcGFyYW0ge051bWJlcn0gZGV0YWlsLnBvc2l0aW9uIG5ldyBwb3NpdGlvblxuICAgKiBAcGFyYW0ge051bWJlcn0gZGV0YWlsLm9sZFBvc2l0aW9uIG9sZCBwb3NpdGlvblxuICAgKi9cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgIHRoaXMuX2Nsb3NlWWVhclNjcm9sbGVyKCk7XG4gICAgdGhpcy5fdG9nZ2xlQW5pbWF0ZUNsYXNzKHRydWUpO1xuICAgIHNldFRvdWNoQWN0aW9uKHRoaXMuJC5zY3JvbGxlcnMsICdwYW4teScpO1xuICAgIElyb25BMTF5QW5ub3VuY2VyLnJlcXVlc3RBdmFpbGFiaWxpdHkoKTtcbiAgfVxuXG4gIGFubm91bmNlRm9jdXNlZERhdGUoKSB7XG4gICAgdmFyIGZvY3VzZWREYXRlID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcbiAgICB2YXIgYW5ub3VuY2UgPSBbXTtcbiAgICBpZiAoRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhmb2N1c2VkRGF0ZSwgbmV3IERhdGUoKSkpIHtcbiAgICAgIGFubm91bmNlLnB1c2godGhpcy5pMThuLnRvZGF5KTtcbiAgICB9XG4gICAgYW5ub3VuY2UgPSBhbm5vdW5jZS5jb25jYXQoW1xuICAgICAgdGhpcy5pMThuLndlZWtkYXlzW2ZvY3VzZWREYXRlLmdldERheSgpXSxcbiAgICAgIGZvY3VzZWREYXRlLmdldERhdGUoKSxcbiAgICAgIHRoaXMuaTE4bi5tb250aE5hbWVzW2ZvY3VzZWREYXRlLmdldE1vbnRoKCldLFxuICAgICAgZm9jdXNlZERhdGUuZ2V0RnVsbFllYXIoKVxuICAgIF0pO1xuICAgIGlmICh0aGlzLnNob3dXZWVrTnVtYmVycyAmJiB0aGlzLmkxOG4uZmlyc3REYXlPZldlZWsgPT09IDEpIHtcbiAgICAgIGFubm91bmNlLnB1c2godGhpcy5pMThuLndlZWspO1xuICAgICAgYW5ub3VuY2UucHVzaChEYXRlUGlja2VySGVscGVyLl9nZXRJU09XZWVrTnVtYmVyKGZvY3VzZWREYXRlKSk7XG4gICAgfVxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2lyb24tYW5ub3VuY2UnLCB7XG4gICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgdGV4dDogYW5ub3VuY2Uuam9pbignICcpXG4gICAgICB9XG4gICAgfSkpO1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBGb2N1c2VzIHRoZSBjYW5jZWwgYnV0dG9uXG4gICAqL1xuICBmb2N1c0NhbmNlbCgpIHtcbiAgICB0aGlzLiQuY2FuY2VsQnV0dG9uLmZvY3VzKCk7XG4gIH1cblxuICAvKipcbiAgICogU2Nyb2xscyB0aGUgbGlzdCB0byB0aGUgZ2l2ZW4gRGF0ZS5cbiAgICovXG4gIHNjcm9sbFRvRGF0ZShkYXRlLCBhbmltYXRlKSB7XG4gICAgdGhpcy5fc2Nyb2xsVG9Qb3NpdGlvbih0aGlzLl9kaWZmZXJlbmNlSW5Nb250aHMoZGF0ZSwgdGhpcy5fb3JpZ2luRGF0ZSksIGFuaW1hdGUpO1xuICB9XG5cbiAgX2ZvY3VzZWREYXRlQ2hhbmdlZChmb2N1c2VkRGF0ZSkge1xuICAgIHRoaXMucmV2ZWFsRGF0ZShmb2N1c2VkRGF0ZSk7XG4gIH1cblxuICBfaXNDdXJyZW50WWVhcih5ZWFyc0Zyb21Ob3cpIHtcbiAgICByZXR1cm4geWVhcnNGcm9tTm93ID09PSAwO1xuICB9XG5cbiAgX2lzU2VsZWN0ZWRZZWFyKHllYXJzRnJvbU5vdywgc2VsZWN0ZWREYXRlKSB7XG4gICAgaWYgKHNlbGVjdGVkRGF0ZSkge1xuICAgICAgcmV0dXJuIHNlbGVjdGVkRGF0ZS5nZXRGdWxsWWVhcigpID09PSB0aGlzLl9vcmlnaW5EYXRlLmdldEZ1bGxZZWFyKCkgKyB5ZWFyc0Zyb21Ob3c7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIG1vbnRoIGFuZCB5ZWFyIHNjcm9sbGVycyBlbm91Z2ggdG8gcmV2ZWFsIHRoZSBnaXZlbiBkYXRlLlxuICAgKi9cbiAgcmV2ZWFsRGF0ZShkYXRlKSB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIHZhciBkaWZmID0gdGhpcy5fZGlmZmVyZW5jZUluTW9udGhzKGRhdGUsIHRoaXMuX29yaWdpbkRhdGUpO1xuICAgICAgdmFyIHNjcm9sbGVkQWJvdmVWaWV3cG9ydCA9IHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uID4gZGlmZjtcblxuICAgICAgdmFyIHZpc2libGVJdGVtcyA9IHRoaXMuJC5tb250aFNjcm9sbGVyLmNsaWVudEhlaWdodCAvIHRoaXMuJC5tb250aFNjcm9sbGVyLml0ZW1IZWlnaHQ7XG4gICAgICB2YXIgc2Nyb2xsZWRCZWxvd1ZpZXdwb3J0ID0gdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gKyB2aXNpYmxlSXRlbXMgLSAxIDwgZGlmZjtcblxuICAgICAgaWYgKHNjcm9sbGVkQWJvdmVWaWV3cG9ydCkge1xuICAgICAgICB0aGlzLl9zY3JvbGxUb1Bvc2l0aW9uKGRpZmYsIHRydWUpO1xuICAgICAgfSBlbHNlIGlmIChzY3JvbGxlZEJlbG93Vmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9Qb3NpdGlvbihkaWZmIC0gdmlzaWJsZUl0ZW1zICsgMSwgdHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uT3ZlcmxheUZvY3VzKCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICB9XG5cbiAgX29uT3ZlcmxheUJsdXIoKSB7XG4gICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICB9XG5cbiAgX2luaXRpYWxQb3NpdGlvbkNoYW5nZWQoaW5pdGlhbFBvc2l0aW9uKSB7XG4gICAgdGhpcy5zY3JvbGxUb0RhdGUoaW5pdGlhbFBvc2l0aW9uKTtcbiAgfVxuXG4gIF9yZXBvc2l0aW9uWWVhclNjcm9sbGVyKCkge1xuICAgIHRoaXMuX3Zpc2libGVNb250aEluZGV4ID0gTWF0aC5mbG9vcih0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbik7XG4gICAgdGhpcy4kLnllYXJTY3JvbGxlci5wb3NpdGlvbiA9ICh0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiArIHRoaXMuX29yaWdpbkRhdGUuZ2V0TW9udGgoKSkgLyAxMjtcbiAgfVxuXG4gIF9yZXBvc2l0aW9uTW9udGhTY3JvbGxlcigpIHtcbiAgICB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiA9IHRoaXMuJC55ZWFyU2Nyb2xsZXIucG9zaXRpb24gKiAxMiAtIHRoaXMuX29yaWdpbkRhdGUuZ2V0TW9udGgoKTtcbiAgICB0aGlzLl92aXNpYmxlTW9udGhJbmRleCA9IE1hdGguZmxvb3IodGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24pO1xuICB9XG5cbiAgX29uTW9udGhTY3JvbGwoKSB7XG4gICAgdGhpcy5fcmVwb3NpdGlvblllYXJTY3JvbGxlcigpO1xuICAgIHRoaXMuX2RvSWdub3JlVGFwcygpO1xuICB9XG5cbiAgX29uWWVhclNjcm9sbCgpIHtcbiAgICB0aGlzLl9yZXBvc2l0aW9uTW9udGhTY3JvbGxlcigpO1xuICAgIHRoaXMuX2RvSWdub3JlVGFwcygpO1xuICB9XG5cbiAgX29uWWVhclNjcm9sbFRvdWNoU3RhcnQoKSB7XG4gICAgdGhpcy5fbm90VGFwcGluZyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbm90VGFwcGluZyA9IHRydWUsIDMwMCk7XG5cbiAgICB0aGlzLl9yZXBvc2l0aW9uTW9udGhTY3JvbGxlcigpO1xuICB9XG5cbiAgX29uTW9udGhTY3JvbGxUb3VjaFN0YXJ0KCkge1xuICAgIHRoaXMuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgfVxuXG4gIF9kb0lnbm9yZVRhcHMoKSB7XG4gICAgdGhpcy5faWdub3JlVGFwcyA9IHRydWU7XG4gICAgdGhpcy5fZGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKHRoaXMuX2RlYm91bmNlcixcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMzAwKSwgKCkgPT4gdGhpcy5faWdub3JlVGFwcyA9IGZhbHNlKTtcbiAgfVxuXG4gIF9mb3JtYXREaXNwbGF5ZWQoZGF0ZSwgZm9ybWF0RGF0ZSwgbGFiZWwpIHtcbiAgICBpZiAoZGF0ZSkge1xuICAgICAgcmV0dXJuIGZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyhkYXRlKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBsYWJlbDtcbiAgICB9XG4gIH1cblxuICBfb25Ub2RheVRhcCgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuXG4gICAgaWYgKE1hdGguYWJzKHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uIC0gdGhpcy5fZGlmZmVyZW5jZUluTW9udGhzKHRvZGF5LCB0aGlzLl9vcmlnaW5EYXRlKSkgPCAwLjAwMSkge1xuICAgICAgLy8gU2VsZWN0IHRvZGF5IG9ubHkgaWYgdGhlIG1vbnRoIHNjcm9sbGVyIGlzIHBvc2l0aW9uZWQgYXBwcm94aW1hdGVseVxuICAgICAgLy8gYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgY3VycmVudCBtb250aFxuICAgICAgdGhpcy5zZWxlY3RlZERhdGUgPSB0b2RheTtcbiAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX3Njcm9sbFRvQ3VycmVudE1vbnRoKCk7XG4gICAgfVxuICB9XG5cbiAgX3Njcm9sbFRvQ3VycmVudE1vbnRoKCkge1xuICAgIGlmICh0aGlzLmZvY3VzZWREYXRlKSB7XG4gICAgICB0aGlzLmZvY3VzZWREYXRlID0gbmV3IERhdGUoKTtcbiAgICB9XG5cbiAgICB0aGlzLnNjcm9sbFRvRGF0ZShuZXcgRGF0ZSgpLCB0cnVlKTtcbiAgfVxuXG4gIF9zaG93Q2xlYXIoc2VsZWN0ZWREYXRlKSB7XG4gICAgcmV0dXJuICEhc2VsZWN0ZWREYXRlO1xuICB9XG5cbiAgX29uWWVhclRhcChlKSB7XG4gICAgaWYgKCF0aGlzLl9pZ25vcmVUYXBzICYmICF0aGlzLl9ub3RUYXBwaW5nKSB7XG4gICAgICB2YXIgc2Nyb2xsRGVsdGEgPSBlLmRldGFpbC55IC0gKHRoaXMuJC55ZWFyU2Nyb2xsZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wICsgdGhpcy4kLnllYXJTY3JvbGxlci5jbGllbnRIZWlnaHQgLyAyKTtcbiAgICAgIHZhciB5ZWFyRGVsdGEgPSBzY3JvbGxEZWx0YSAvIHRoaXMuJC55ZWFyU2Nyb2xsZXIuaXRlbUhlaWdodDtcbiAgICAgIHRoaXMuX3Njcm9sbFRvUG9zaXRpb24odGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gKyB5ZWFyRGVsdGEgKiAxMiwgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgX3Njcm9sbFRvUG9zaXRpb24odGFyZ2V0UG9zaXRpb24sIGFuaW1hdGUpIHtcbiAgICBpZiAodGhpcy5fdGFyZ2V0UG9zaXRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWFuaW1hdGUpIHtcbiAgICAgIHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb247XG4gICAgICB0aGlzLl90YXJnZXRQb3NpdGlvbiA9IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl90YXJnZXRQb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuXG4gICAgLy8gaHR0cDovL2dpem1hLmNvbS9lYXNpbmcvXG4gICAgdmFyIGVhc2luZ0Z1bmN0aW9uID0gKHQsIGIsIGMsIGQpID0+IHtcbiAgICAgIHQgLz0gZCAvIDI7XG4gICAgICBpZiAodCA8IDEpIHtcbiAgICAgICAgcmV0dXJuIGMgLyAyICogdCAqIHQgKyBiO1xuICAgICAgfVxuICAgICAgdC0tO1xuICAgICAgcmV0dXJuIC1jIC8gMiAqICh0ICogKHQgLSAyKSAtIDEpICsgYjtcbiAgICB9O1xuXG4gICAgdmFyIGR1cmF0aW9uID0gYW5pbWF0ZSA/IDMwMCA6IDA7XG4gICAgdmFyIHN0YXJ0ID0gMDtcbiAgICB2YXIgaW5pdGlhbFBvc2l0aW9uID0gdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb247XG5cbiAgICB2YXIgc21vb3RoU2Nyb2xsID0gdGltZXN0YW1wID0+IHtcbiAgICAgIHN0YXJ0ID0gc3RhcnQgfHwgdGltZXN0YW1wO1xuICAgICAgdmFyIGN1cnJlbnRUaW1lID0gdGltZXN0YW1wIC0gc3RhcnQ7XG5cbiAgICAgIGlmIChjdXJyZW50VGltZSA8IGR1cmF0aW9uKSB7XG4gICAgICAgIHZhciBjdXJyZW50UG9zID0gZWFzaW5nRnVuY3Rpb24oY3VycmVudFRpbWUsIGluaXRpYWxQb3NpdGlvbiwgdGhpcy5fdGFyZ2V0UG9zaXRpb24gLSBpbml0aWFsUG9zaXRpb24sIGR1cmF0aW9uKTtcbiAgICAgICAgdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gPSBjdXJyZW50UG9zO1xuICAgICAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aFNjcm9sbCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdzY3JvbGwtYW5pbWF0aW9uLWZpbmlzaGVkJywge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgZGV0YWlsOiB7XG4gICAgICAgICAgICBwb3NpdGlvbjogdGhpcy5fdGFyZ2V0UG9zaXRpb24sXG4gICAgICAgICAgICBvbGRQb3NpdGlvbjogaW5pdGlhbFBvc2l0aW9uXG4gICAgICAgICAgfVxuICAgICAgICB9KSk7XG5cbiAgICAgICAgdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gPSB0aGlzLl90YXJnZXRQb3NpdGlvbjtcbiAgICAgICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB9XG5cbiAgICAgIHNldFRpbWVvdXQodGhpcy5fcmVwb3NpdGlvblllYXJTY3JvbGxlci5iaW5kKHRoaXMpLCAxKTtcbiAgICB9O1xuXG4gICAgLy8gU3RhcnQgdGhlIGFuaW1hdGlvbi5cbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKHNtb290aFNjcm9sbCk7XG4gIH1cblxuICBfbGltaXQodmFsdWUsIHJhbmdlKSB7XG4gICAgcmV0dXJuIE1hdGgubWluKHJhbmdlLm1heCwgTWF0aC5tYXgocmFuZ2UubWluLCB2YWx1ZSkpO1xuICB9XG5cbiAgX2hhbmRsZVRyYWNrKGUpIHtcbiAgICAvLyBDaGVjayBpZiBob3Jpem9udGFsIG1vdmVtZW50IHRocmVzaG9sZCAoZHgpIG5vdCBleGNlZWRlZCBvclxuICAgIC8vIHNjcm9sbGluZyBmYXN0IHZlcnRpY2FsbHkgKGRkeSkuXG4gICAgaWYgKE1hdGguYWJzKGUuZGV0YWlsLmR4KSA8IDEwIHx8IE1hdGguYWJzKGUuZGV0YWlsLmRkeSkgPiAxMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHdlJ3JlIGZsaW5naW5nIHF1aWNrbHkgLT4gc3RhcnQgYW5pbWF0aW5nIGFscmVhZHkuXG4gICAgaWYgKE1hdGguYWJzKGUuZGV0YWlsLmRkeCkgPiB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aCAvIDMpIHtcbiAgICAgIHRoaXMuX3RvZ2dsZUFuaW1hdGVDbGFzcyh0cnVlKTtcbiAgICB9XG5cbiAgICB2YXIgbmV3VHJhbnNsYXRlWCA9IHRoaXMuX3RyYW5zbGF0ZVggKyBlLmRldGFpbC5kZHg7XG4gICAgdGhpcy5fdHJhbnNsYXRlWCA9IHRoaXMuX2xpbWl0KG5ld1RyYW5zbGF0ZVgsIHtcbiAgICAgIG1pbjogMCxcbiAgICAgIG1heDogdGhpcy5feWVhclNjcm9sbGVyV2lkdGhcbiAgICB9KTtcbiAgfVxuXG4gIF90cmFjayhlKSB7XG4gICAgaWYgKHRoaXMuX2Rlc2t0b3BNb2RlKSB7XG4gICAgICAvLyBObyBuZWVkIHRvIHRyYWNrIGZvciBzd2lwZSBnZXN0dXJlcyBvbiBkZXNrdG9wLlxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHN3aXRjaCAoZS5kZXRhaWwuc3RhdGUpIHtcbiAgICAgIGNhc2UgJ3N0YXJ0JzpcbiAgICAgICAgdGhpcy5fdG9nZ2xlQW5pbWF0ZUNsYXNzKGZhbHNlKTtcbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgJ3RyYWNrJzpcbiAgICAgICAgdGhpcy5faGFuZGxlVHJhY2soZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICdlbmQnOlxuICAgICAgICB0aGlzLl90b2dnbGVBbmltYXRlQ2xhc3ModHJ1ZSk7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2xhdGVYID49IHRoaXMuX3llYXJTY3JvbGxlcldpZHRoIC8gMikge1xuICAgICAgICAgIHRoaXMuX2Nsb3NlWWVhclNjcm9sbGVyKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fb3BlblllYXJTY3JvbGxlcigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVBbmltYXRlQ2xhc3MoZW5hYmxlKSB7XG4gICAgaWYgKGVuYWJsZSkge1xuICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhbmltYXRlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYW5pbWF0ZScpO1xuICAgIH1cbiAgfVxuXG4gIF90b2dnbGVZZWFyU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5faXNZZWFyU2Nyb2xsZXJWaXNpYmxlKCkgPyB0aGlzLl9jbG9zZVllYXJTY3JvbGxlcigpIDogdGhpcy5fb3BlblllYXJTY3JvbGxlcigpO1xuICB9XG5cbiAgX29wZW5ZZWFyU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5fdHJhbnNsYXRlWCA9IDA7XG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3llYXJzLXZpc2libGUnLCAnJyk7XG4gIH1cblxuICBfY2xvc2VZZWFyU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3llYXJzLXZpc2libGUnKTtcbiAgICB0aGlzLl90cmFuc2xhdGVYID0gdGhpcy5feWVhclNjcm9sbGVyV2lkdGg7XG4gIH1cblxuICBfaXNZZWFyU2Nyb2xsZXJWaXNpYmxlKCkge1xuICAgIHJldHVybiB0aGlzLl90cmFuc2xhdGVYIDwgdGhpcy5feWVhclNjcm9sbGVyV2lkdGggLyAyO1xuICB9XG5cbiAgX3RyYW5zbGF0ZVhDaGFuZ2VkKHgpIHtcbiAgICBpZiAoIXRoaXMuX2Rlc2t0b3BNb2RlKSB7XG4gICAgICB0aGlzLiQubW9udGhTY3JvbGxlci5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlWCgnICsgKHggLSB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aCkgKyAncHgpJztcbiAgICAgIHRoaXMuJC55ZWFyU2Nyb2xsZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArIHggKyAncHgpJztcbiAgICB9XG4gIH1cblxuICBfeWVhckFmdGVyWFllYXJzKGluZGV4KSB7XG4gICAgdmFyIHJlc3VsdCA9IG5ldyBEYXRlKHRoaXMuX29yaWdpbkRhdGUpO1xuICAgIHJlc3VsdC5zZXRGdWxsWWVhcihwYXJzZUludChpbmRleCkgKyB0aGlzLl9vcmlnaW5EYXRlLmdldEZ1bGxZZWFyKCkpO1xuICAgIHJldHVybiByZXN1bHQuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIF95ZWFyQWZ0ZXJYTW9udGhzKG1vbnRocykge1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWZ0ZXJYTW9udGhzKG1vbnRocykuZ2V0RnVsbFllYXIoKTtcbiAgfVxuXG4gIF9kYXRlQWZ0ZXJYTW9udGhzKG1vbnRocykge1xuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSh0aGlzLl9vcmlnaW5EYXRlKTtcbiAgICByZXN1bHQuc2V0RGF0ZSgxKTtcbiAgICByZXN1bHQuc2V0TW9udGgocGFyc2VJbnQobW9udGhzKSArIHRoaXMuX29yaWdpbkRhdGUuZ2V0TW9udGgoKSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9kaWZmZXJlbmNlSW5Nb250aHMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgdmFyIG1vbnRocyA9IChkYXRlMS5nZXRGdWxsWWVhcigpIC0gZGF0ZTIuZ2V0RnVsbFllYXIoKSkgKiAxMjtcbiAgICByZXR1cm4gbW9udGhzIC0gZGF0ZTIuZ2V0TW9udGgoKSArIGRhdGUxLmdldE1vbnRoKCk7XG4gIH1cblxuICBfZGlmZmVyZW5jZUluWWVhcnMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RpZmZlcmVuY2VJbk1vbnRocyhkYXRlMSwgZGF0ZTIpIC8gMTI7XG4gIH1cblxuICBfY2xlYXIoKSB7XG4gICAgdGhpcy5zZWxlY3RlZERhdGUgPSAnJztcbiAgfVxuXG4gIF9jbG9zZSgpIHtcbiAgICBjb25zdCBvdmVybGF5Q29udGVudCA9IHRoaXMuZ2V0Um9vdE5vZGUoKS5ob3N0O1xuICAgIGNvbnN0IG92ZXJsYXkgPSBvdmVybGF5Q29udGVudCA/IG92ZXJsYXlDb250ZW50LmdldFJvb3ROb2RlKCkuaG9zdCA6IG51bGw7XG4gICAgaWYgKG92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkub3BlbmVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2xvc2UnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gIH1cblxuICBfY2FuY2VsKCkge1xuICAgIHRoaXMuZm9jdXNlZERhdGUgPSB0aGlzLnNlbGVjdGVkRGF0ZTtcbiAgICB0aGlzLl9jbG9zZSgpO1xuICB9XG5cbiAgX3ByZXZlbnREZWZhdWx0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gIH1cblxuICAvKipcbiAgICogS2V5Ym9hcmQgTmF2aWdhdGlvblxuICAgKi9cbiAgX2V2ZW50S2V5KGUpIHtcbiAgICB2YXIga2V5cyA9IFsnZG93bicsICd1cCcsICdyaWdodCcsICdsZWZ0JywgJ2VudGVyJywgJ3NwYWNlJywgJ2hvbWUnLCAnZW5kJywgJ3BhZ2V1cCcsICdwYWdlZG93bicsICd0YWInLCAnZXNjJ107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBrID0ga2V5c1tpXTtcbiAgICAgIGlmIChJcm9uQTExeUtleXNCZWhhdmlvci5rZXlib2FyZEV2ZW50TWF0Y2hlc0tleXMoZSwgaykpIHtcbiAgICAgICAgcmV0dXJuIGs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX29uS2V5ZG93bihlKSB7XG4gICAgdmFyIGZvY3VzID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcblxuICAgIC8vIENhbm5vdCB1c2UgKHRvZGF5L2NhbmNlbCkuZm9jdXNlZCBmbGFnIGJlY2F1c2UgdmFhZGluLXRleHQtZmllbGQgcmVtb3ZlcyBpdFxuICAgIC8vIHByZXZpb3VzbHkgaW4gdGhlIGtleWRvd24gZXZlbnQuXG4gICAgY29uc3QgaXNUb2RheSA9IGUuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLiQudG9kYXlCdXR0b24pID49IDA7XG4gICAgY29uc3QgaXNDYW5jZWwgPSBlLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLmNhbmNlbEJ1dHRvbikgPj0gMDtcbiAgICBjb25zdCBpc1Njcm9sbGVyID0gIWlzVG9kYXkgJiYgIWlzQ2FuY2VsO1xuXG4gICAgdmFyIGV2ZW50S2V5ID0gdGhpcy5fZXZlbnRLZXkoZSk7XG4gICAgaWYgKGV2ZW50S2V5ID09PSAndGFiJykge1xuICAgICAgLy8gV2UgaGFuZGxlIHRhYnMgaGVyZSBhbmQgZG9uJ3Qgd2FudCB0byBidWJibGUgdXAuXG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuXG4gICAgICBjb25zdCBpc0Z1bGxzY3JlZW4gPSB0aGlzLmhhc0F0dHJpYnV0ZSgnZnVsbHNjcmVlbicpO1xuICAgICAgY29uc3QgaXNTaGlmdCA9IGUuc2hpZnRLZXk7XG5cbiAgICAgIGlmIChpc0Z1bGxzY3JlZW4pIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfSBlbHNlIGlmIChpc1NoaWZ0ICYmIGlzU2Nyb2xsZXIgfHwgIWlzU2hpZnQgJiYgaXNDYW5jZWwpIHtcbiAgICAgICAgLy8gUmV0dXJuIGZvY3VzIGJhY2sgdG8gdGhlIGlucHV0IGZpZWxkXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnZm9jdXMtaW5wdXQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gICAgICB9IGVsc2UgaWYgKGlzU2hpZnQgJiYgaXNUb2RheSkge1xuICAgICAgICAvLyBCcm93c2VyIHJldHVybnMgZm9jdXMgYmFjayB0byB0aGUgc2Nyb2xsYWJsZSBhcmVhLiBXZSBuZWVkIHRvIHNldFxuICAgICAgICAvLyB0aGUgZm9jdXNlZCBmbGFnLCBhbmQgbW92ZSB0aGUgc2Nyb2xsIHRvIGZvY3VzZWQgZGF0ZS5cbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IHRydWU7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5yZXZlYWxEYXRlKHRoaXMuZm9jdXNlZERhdGUpLCAxKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIEJyb3dzZXIgbW92ZXMgdGhlIGZvY3VzIG91dCBvZiB0aGUgc2Nyb2xsZXIsIGhlbmNlIGZvY3VzZWQgZmxhZyBtdXN0XG4gICAgICAgIC8vIHNldCB0byBmYWxzZS5cbiAgICAgICAgdGhpcy5fZm9jdXNlZCA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoZXZlbnRLZXkpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICBzd2l0Y2ggKGV2ZW50S2V5KSB7XG4gICAgICAgIGNhc2UgJ2Rvd24nOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5RGF5cyg3KTtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3VwJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeURheXMoLTcpO1xuICAgICAgICAgIHRoaXMuZm9jdXMoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncmlnaHQnOlxuICAgICAgICAgIGlmIChpc1Njcm9sbGVyKSB7XG4gICAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeURheXMoMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdsZWZ0JzpcbiAgICAgICAgICBpZiAoaXNTY3JvbGxlcikge1xuICAgICAgICAgICAgdGhpcy5fbW92ZUZvY3VzQnlEYXlzKC0xKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VudGVyJzpcbiAgICAgICAgICBpZiAoaXNTY3JvbGxlciB8fCBpc0NhbmNlbCkge1xuICAgICAgICAgICAgdGhpcy5fY2xvc2UoKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKGlzVG9kYXkpIHtcbiAgICAgICAgICAgIHRoaXMuX29uVG9kYXlUYXAoKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3NwYWNlJzpcbiAgICAgICAgICBpZiAoaXNDYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1RvZGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9vblRvZGF5VGFwKCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHZhciBmb2N1c2VkRGF0ZSA9IHRoaXMuZm9jdXNlZERhdGU7XG4gICAgICAgICAgICBpZiAoRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhmb2N1c2VkRGF0ZSwgdGhpcy5zZWxlY3RlZERhdGUpKSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gJyc7XG4gICAgICAgICAgICAgIHRoaXMuZm9jdXNlZERhdGUgPSBmb2N1c2VkRGF0ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZm9jdXNlZERhdGU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdob21lJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNJbnNpZGVNb250aChmb2N1cywgJ21pbkRhdGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNJbnNpZGVNb250aChmb2N1cywgJ21heERhdGUnKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFnZWRvd24nOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5TW9udGhzKGUuc2hpZnRLZXkgPyAxMiA6IDEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwYWdldXAnOlxuICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5TW9udGhzKGUuc2hpZnRLZXkgPyAtMTIgOiAtMSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VzYyc6XG4gICAgICAgICAgdGhpcy5fY2FuY2VsKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2N1cnJlbnRseUZvY3VzZWREYXRlKCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzZWREYXRlIHx8IHRoaXMuc2VsZWN0ZWREYXRlIHx8IHRoaXMuaW5pdGlhbFBvc2l0aW9uIHx8IG5ldyBEYXRlKCk7XG4gIH1cblxuICBfZm9jdXNEYXRlKGRhdGVUb0ZvY3VzKSB7XG4gICAgdGhpcy5mb2N1c2VkRGF0ZSA9IGRhdGVUb0ZvY3VzO1xuICAgIHRoaXMuX2ZvY3VzZWRNb250aERhdGUgPSBkYXRlVG9Gb2N1cy5nZXREYXRlKCk7XG4gIH1cblxuICBfZm9jdXNDbG9zZXN0RGF0ZShmb2N1cykge1xuICAgIHRoaXMuX2ZvY3VzRGF0ZShEYXRlUGlja2VySGVscGVyLl9nZXRDbG9zZXN0RGF0ZShmb2N1cywgW3RoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlXSkpO1xuICB9XG5cbiAgX21vdmVGb2N1c0J5RGF5cyhkYXlzKSB7XG4gICAgdmFyIGZvY3VzID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcbiAgICB2YXIgZGF0ZVRvRm9jdXMgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRGdWxsWWVhcihmb2N1cy5nZXRGdWxsWWVhcigpKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRNb250aChmb2N1cy5nZXRNb250aCgpKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXREYXRlKGZvY3VzLmdldERhdGUoKSArIGRheXMpO1xuXG4gICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGRhdGVUb0ZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzRGF0ZShkYXRlVG9Gb2N1cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9kYXRlQWxsb3dlZChmb2N1cywgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICAgIC8vIE1vdmUgdG8gbWluIG9yIG1heCBkYXRlXG4gICAgICAgIGlmIChkYXlzID4gMCkgeyAvLyBkb3duIG9yIHJpZ2h0XG4gICAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXMubWF4RGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIHVwIG9yIGxlZnRcbiAgICAgICAgICB0aGlzLl9mb2N1c0RhdGUodGhpcy5taW5EYXRlKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTW92ZSB0byBjbG9zZXN0IGFsbG93ZWQgZGF0ZVxuICAgICAgICB0aGlzLl9mb2N1c0Nsb3Nlc3REYXRlKGZvY3VzKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfbW92ZUZvY3VzQnlNb250aHMobW9udGhzKSB7XG4gICAgdmFyIGZvY3VzID0gdGhpcy5fY3VycmVudGx5Rm9jdXNlZERhdGUoKTtcbiAgICB2YXIgZGF0ZVRvRm9jdXMgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRGdWxsWWVhcihmb2N1cy5nZXRGdWxsWWVhcigpKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRNb250aChmb2N1cy5nZXRNb250aCgpICsgbW9udGhzKTtcblxuICAgIHZhciB0YXJnZXRNb250aCA9IGRhdGVUb0ZvY3VzLmdldE1vbnRoKCk7XG5cbiAgICBkYXRlVG9Gb2N1cy5zZXREYXRlKHRoaXMuX2ZvY3VzZWRNb250aERhdGUgfHwgKHRoaXMuX2ZvY3VzZWRNb250aERhdGUgPSBmb2N1cy5nZXREYXRlKCkpKTtcbiAgICBpZiAoZGF0ZVRvRm9jdXMuZ2V0TW9udGgoKSAhPT0gdGFyZ2V0TW9udGgpIHtcbiAgICAgIGRhdGVUb0ZvY3VzLnNldERhdGUoMCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGRhdGVUb0ZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuZm9jdXNlZERhdGUgPSBkYXRlVG9Gb2N1cztcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgICAgLy8gTW92ZSB0byBtaW4gb3IgbWF4IGRhdGVcbiAgICAgICAgaWYgKG1vbnRocyA+IDApIHsgLy8gcGFnZWRvd25cbiAgICAgICAgICB0aGlzLl9mb2N1c0RhdGUodGhpcy5tYXhEYXRlKTtcbiAgICAgICAgfSBlbHNlIHsgLy8gcGFnZXVwXG4gICAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXMubWluRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1vdmUgdG8gY2xvc2VzdCBhbGxvd2VkIGRhdGVcbiAgICAgICAgdGhpcy5fZm9jdXNDbG9zZXN0RGF0ZShmb2N1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVGb2N1c0luc2lkZU1vbnRoKGZvY3VzZWREYXRlLCBwcm9wZXJ0eSkge1xuICAgIHZhciBkYXRlVG9Gb2N1cyA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGRhdGVUb0ZvY3VzLnNldEZ1bGxZZWFyKGZvY3VzZWREYXRlLmdldEZ1bGxZZWFyKCkpO1xuXG4gICAgaWYgKHByb3BlcnR5ID09PSAnbWluRGF0ZScpIHtcbiAgICAgIGRhdGVUb0ZvY3VzLnNldE1vbnRoKGZvY3VzZWREYXRlLmdldE1vbnRoKCkpO1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0RGF0ZSgxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0TW9udGgoZm9jdXNlZERhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgICAgZGF0ZVRvRm9jdXMuc2V0RGF0ZSgwKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZGF0ZUFsbG93ZWQoZGF0ZVRvRm9jdXMsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSkge1xuICAgICAgdGhpcy5fZm9jdXNEYXRlKGRhdGVUb0ZvY3VzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGZvY3VzZWREYXRlLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgICAgLy8gTW92ZSB0byBtaW5EYXRlIG9yIG1heERhdGVcbiAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXNbcHJvcGVydHldKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1vdmUgdG8gY2xvc2VzdCBhbGxvd2VkIGRhdGVcbiAgICAgICAgdGhpcy5fZm9jdXNDbG9zZXN0RGF0ZShmb2N1c2VkRGF0ZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuICghbWluIHx8IGRhdGUgPj0gbWluKSAmJiAoIW1heCB8fCBkYXRlIDw9IG1heCk7XG4gIH1cblxuICBfaXNUb2RheUFsbG93ZWQobWluLCBtYXgpIHtcbiAgICB2YXIgdG9kYXkgPSBuZXcgRGF0ZSgpO1xuICAgIHZhciB0b2RheU1pZG5pZ2h0ID0gbmV3IERhdGUoMCwgMCk7XG4gICAgdG9kYXlNaWRuaWdodC5zZXRGdWxsWWVhcih0b2RheS5nZXRGdWxsWWVhcigpKTtcbiAgICB0b2RheU1pZG5pZ2h0LnNldE1vbnRoKHRvZGF5LmdldE1vbnRoKCkpO1xuICAgIHRvZGF5TWlkbmlnaHQuc2V0RGF0ZSh0b2RheS5nZXREYXRlKCkpO1xuICAgIHJldHVybiB0aGlzLl9kYXRlQWxsb3dlZCh0b2RheU1pZG5pZ2h0LCBtaW4sIG1heCk7XG4gIH1cblxuICBfc3RvcFByb3BhZ2F0aW9uKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShEYXRlUGlja2VyT3ZlcmxheUNvbnRlbnRFbGVtZW50LmlzLCBEYXRlUGlja2VyT3ZlcmxheUNvbnRlbnRFbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IE92ZXJsYXlFbGVtZW50IH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tb3ZlcmxheS9zcmMvdmFhZGluLW92ZXJsYXkuanMnO1xuXG5pbXBvcnQgeyBEaXNhYmxlVXBncmFkZU1peGluIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2Rpc2FibGUtdXBncmFkZS1taXhpbi5qcyc7XG4vKipcbiAqIFRoZSBvdmVybGF5IGVsZW1lbnQuXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBTZWUgW2A8dmFhZGluLW92ZXJsYXk+YCBkb2N1bWVudGF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi1vdmVybGF5L2Jsb2IvbWFzdGVyL3NyYy92YWFkaW4tb3ZlcmxheS5odG1sKVxuICogZm9yIGA8dmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXk+YCBwYXJ0cy5cbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBEYXRlUGlja2VyT3ZlcmxheUVsZW1lbnQgZXh0ZW5kcyBEaXNhYmxlVXBncmFkZU1peGluKE92ZXJsYXlFbGVtZW50KSB7XG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheSc7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKERhdGVQaWNrZXJPdmVybGF5RWxlbWVudC5pcywgRGF0ZVBpY2tlck92ZXJsYXlFbGVtZW50KTtcbiIsImltcG9ydCAnQHBvbHltZXIvcG9seW1lci9saWIvZWxlbWVudHMvY3VzdG9tLXN0eWxlLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LXN0eWxlc1wiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5XCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtib3R0b20tYWxpZ25lZF0pIHtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3JpZ2h0LWFsaWduZWRdKSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LWVuZDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3JpZ2h0LWFsaWduZWRdW2Rpcj1cInJ0bFwiXSkge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwiY29udGVudFwiXSB7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgR2VzdHVyZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2dlc3R1cmUtZXZlbnQtbGlzdGVuZXJzLmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1tZWRpYS1xdWVyeS9pcm9uLW1lZGlhLXF1ZXJ5LmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgVGhlbWVQcm9wZXJ0eU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1lLXByb3BlcnR5LW1peGluLmpzJztcbmltcG9ydCB7IENvbnRyb2xTdGF0ZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkuanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQuanMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlck1peGluIH0gZnJvbSAnLi92YWFkaW4tZGF0ZS1waWNrZXItbWl4aW4uanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3NyYy92YWFkaW4tdGV4dC1maWVsZC5qcyc7XG5pbXBvcnQgeyBFbGVtZW50TWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1lbGVtZW50LW1peGluL3ZhYWRpbi1lbGVtZW50LW1peGluLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgeyBhZnRlck5leHRSZW5kZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9yZW5kZXItc3RhdHVzLmpzJztcbi8qKlxuICpcbiAqIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgaXMgYSBkYXRlIHNlbGVjdGlvbiBmaWVsZCB3aGljaCBpbmNsdWRlcyBhIHNjcm9sbGFibGVcbiAqIG1vbnRoIGNhbGVuZGFyIHZpZXcuXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLWRhdGUtcGlja2VyIGxhYmVsPVwiQmlydGhkYXlcIj48L3ZhYWRpbi1kYXRlLXBpY2tlcj5cbiAqIGBgYFxuICogYGBganNcbiAqIGRhdGVQaWNrZXIudmFsdWUgPSAnMjAxNi0wMy0wMic7XG4gKiBgYGBcbiAqIFdoZW4gdGhlIHNlbGVjdGVkIGB2YWx1ZWAgaXMgY2hhbmdlZCwgYSBgdmFsdWUtY2hhbmdlZGAgZXZlbnQgaXMgdHJpZ2dlcmVkLlxuICpcbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgc2hhZG93IERPTSBwYXJ0cyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIFBhcnQgbmFtZSB8IERlc2NyaXB0aW9uIHwgVGhlbWUgZm9yIEVsZW1lbnRcbiAqIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tXG4gKiBgdGV4dC1maWVsZGAgfCBJbnB1dCBlbGVtZW50IHwgdmFhZGluLWRhdGUtcGlja2VyXG4gKiBgY2xlYXItYnV0dG9uYCB8IENsZWFyIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlclxuICogYHRvZ2dsZS1idXR0b25gIHwgVG9nZ2xlIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlclxuICogYG92ZXJsYXktY29udGVudGAgfCBUaGUgb3ZlcmxheSBlbGVtZW50IHwgdmFhZGluLWRhdGUtcGlja2VyXG4gKiBgb3ZlcmxheS1oZWFkZXJgIHwgRnVsbHNjcmVlbiBtb2RlIGhlYWRlciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGBsYWJlbGAgfCBGdWxsc2NyZWVuIG1vZGUgdmFsdWUvbGFiZWwgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgY2xlYXItYnV0dG9uYCB8IEZ1bGxzY3JlZW4gbW9kZSBjbGVhciBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgdG9nZ2xlLWJ1dHRvbmAgfCBGdWxsc2NyZWVuIG1vZGUgdG9nZ2xlIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB5ZWFycy10b2dnbGUtYnV0dG9uYCB8IEZ1bGxzY3JlZW4gbW9kZSB5ZWFycyBzY3JvbGxlciB0b2dnbGUgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgbW9udGhzYCB8IE1vbnRocyBzY3JvbGxlciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB5ZWFyc2AgfCBZZWFycyBzY3JvbGxlciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB0b29sYmFyYCB8IEZvb3RlciBiYXIgd2l0aCBidXR0b25zIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHRvZGF5LWJ1dHRvbmAgfCBUb2RheSBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgY2FuY2VsLWJ1dHRvbmAgfCBDYW5jZWwgYnV0dG9uIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYG1vbnRoYCB8IE1vbnRoIGNhbGVuZGFyIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHllYXItbnVtYmVyYCB8IFllYXIgbnVtYmVyIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHllYXItc2VwYXJhdG9yYCB8IFllYXIgc2VwYXJhdG9yIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYG1vbnRoLWhlYWRlcmAgfCBNb250aCB0aXRsZSB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICogYHdlZWtkYXlzYCB8IFdlZWtkYXkgY29udGFpbmVyIHwgdmFhZGluLW1vbnRoLWNhbGVuZGFyXG4gKiBgd2Vla2RheWAgfCBXZWVrZGF5IGVsZW1lbnQgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqIGB3ZWVrLW51bWJlcnNgIHwgV2VlayBudW1iZXJzIGNvbnRhaW5lciB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICogYHdlZWstbnVtYmVyYCB8IFdlZWsgbnVtYmVyIGVsZW1lbnQgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqIGBkYXRlYCB8IERhdGUgZWxlbWVudCB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICpcbiAqIFNlZSBbVGhlbWFibGVNaXhpbiDigJMgaG93IHRvIGFwcGx5IHN0eWxlcyBmb3Igc2hhZG93IHBhcnRzXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi93aWtpKVxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc3RhdGUgYXR0cmlidXRlcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSAgICB8IERlc2NyaXB0aW9uIHwgUGFydCBuYW1lXG4gKiAtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tXG4gKiBgaW52YWxpZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBpbnZhbGlkIHwgOmhvc3RcbiAqIGBvcGVuZWRgIHwgU2V0IHdoZW4gdGhlIGRhdGUgc2VsZWN0b3Igb3ZlcmxheSBpcyBvcGVuZWQgfCA6aG9zdFxuICogYHJlYWRvbmx5YCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIHJlYWRvbmx5IHwgOmhvc3RcbiAqIGBkaXNhYmxlZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBkaXNhYmxlZCB8IDpob3N0XG4gKiBgdG9kYXlgIHwgU2V0IG9uIHRoZSBkYXRlIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGN1cnJlbnQgZGF5IHwgZGF0ZVxuICogYGZvY3VzZWRgIHwgU2V0IG9uIHRoZSBmb2N1c2VkIGRhdGUgfCBkYXRlXG4gKiBgZGlzYWJsZWRgIHwgU2V0IG9uIHRoZSBkYXRlIG91dCBvZiB0aGUgYWxsb3dlZCByYW5nZSB8IGRhdGVcbiAqIGBzZWxlY3RlZGAgfCBTZXQgb24gdGhlIHNlbGVjdGVkIGRhdGUgfCBkYXRlXG4gKlxuICogSWYgeW91IHdhbnQgdG8gcmVwbGFjZSB0aGUgZGVmYXVsdCBpbnB1dCBmaWVsZCB3aXRoIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uLCB5b3Ugc2hvdWxkIHVzZSB0aGVcbiAqIFtgPHZhYWRpbi1kYXRlLXBpY2tlci1saWdodD5gXSgjdmFhZGluLWRhdGUtcGlja2VyLWxpZ2h0KSBlbGVtZW50LlxuICpcbiAqIEluIGFkZGl0aW9uIHRvIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgaXRzZWxmLCB0aGUgZm9sbG93aW5nIGludGVybmFsXG4gKiBjb21wb25lbnRzIGFyZSB0aGVtYWJsZTpcbiAqXG4gKiAtIGA8dmFhZGluLXRleHQtZmllbGQ+YFxuICogLSBgPHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5PmBcbiAqIC0gYDx2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50PmBcbiAqIC0gYDx2YWFkaW4tbW9udGgtY2FsZW5kYXI+YFxuICpcbiAqIE5vdGU6IHRoZSBgdGhlbWVgIGF0dHJpYnV0ZSB2YWx1ZSBzZXQgb24gYDx2YWFkaW4tZGF0ZS1waWNrZXI+YCBpc1xuICogcHJvcGFnYXRlZCB0byB0aGUgaW50ZXJuYWwgdGhlbWFibGUgY29tcG9uZW50cyBsaXN0ZWQgYWJvdmUuXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5FbGVtZW50TWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uQ29udHJvbFN0YXRlTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtZVByb3BlcnR5TWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uRGF0ZVBpY2tlck1peGluXG4gKiBAbWl4ZXMgUG9seW1lci5HZXN0dXJlRXZlbnRMaXN0ZW5lcnNcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICovXG5jbGFzcyBEYXRlUGlja2VyRWxlbWVudCBleHRlbmRzXG4gIEVsZW1lbnRNaXhpbihcbiAgICBDb250cm9sU3RhdGVNaXhpbihcbiAgICAgIFRoZW1hYmxlTWl4aW4oXG4gICAgICAgIFRoZW1lUHJvcGVydHlNaXhpbihcbiAgICAgICAgICBEYXRlUGlja2VyTWl4aW4oXG4gICAgICAgICAgICBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMoUG9seW1lckVsZW1lbnQpKSkpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtvcGVuZWRdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRleHQtZmllbGRcIl0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWluLXdpZHRoOiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cblxuICAgIDx2YWFkaW4tdGV4dC1maWVsZCBpZD1cImlucHV0XCIgcm9sZT1cImFwcGxpY2F0aW9uXCIgYXV0b2NvbXBsZXRlPVwib2ZmXCIgb24tZm9jdXM9XCJfZm9jdXNcIiB2YWx1ZT1cInt7X3VzZXJJbnB1dFZhbHVlfX1cIiBpbnZhbGlkPVwiW1tpbnZhbGlkXV1cIiBsYWJlbD1cIltbbGFiZWxdXVwiIG5hbWU9XCJbW25hbWVdXVwiIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlcl1dXCIgcmVxdWlyZWQ9XCJbW3JlcXVpcmVkXV1cIiBkaXNhYmxlZD1cIltbZGlzYWJsZWRdXVwiIHJlYWRvbmx5PVwiW1tyZWFkb25seV1dXCIgZXJyb3ItbWVzc2FnZT1cIltbZXJyb3JNZXNzYWdlXV1cIiBjbGVhci1idXR0b24tdmlzaWJsZT1cIltbY2xlYXJCdXR0b25WaXNpYmxlXV1cIiBhcmlhLWxhYmVsXFwkPVwiW1tsYWJlbF1dXCIgcGFydD1cInRleHQtZmllbGRcIiB0aGVtZVxcJD1cIltbdGhlbWVdXVwiPlxuICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiIHNsb3Q9XCJwcmVmaXhcIj48L3Nsb3Q+XG4gICAgICA8ZGl2IHBhcnQ9XCJ0b2dnbGUtYnV0dG9uXCIgc2xvdD1cInN1ZmZpeFwiIG9uLXRhcD1cIl90b2dnbGVcIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbFxcJD1cIltbaTE4bi5jYWxlbmRhcl1dXCIgYXJpYS1leHBhbmRlZFxcJD1cIltbX2dldEFyaWFFeHBhbmRlZChvcGVuZWQpXV1cIj48L2Rpdj5cbiAgICA8L3ZhYWRpbi10ZXh0LWZpZWxkPlxuXG4gICAgPHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5IGlkPVwib3ZlcmxheVwiIGZ1bGxzY3JlZW5cXCQ9XCJbW19mdWxsc2NyZWVuXV1cIiB0aGVtZVxcJD1cIltbX19nZXRPdmVybGF5VGhlbWUodGhlbWUsIF9vdmVybGF5SW5pdGlhbGl6ZWQpXV1cIiBvbi12YWFkaW4tb3ZlcmxheS1vcGVuPVwiX29uT3ZlcmxheU9wZW5lZFwiIG9uLXZhYWRpbi1vdmVybGF5LWNsb3NlPVwiX29uT3ZlcmxheUNsb3NlZFwiIGRpc2FibGUtdXBncmFkZT1cIlwiPlxuICAgICAgPHRlbXBsYXRlPlxuICAgICAgICA8dmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudCBpZD1cIm92ZXJsYXktY29udGVudFwiIGkxOG49XCJbW2kxOG5dXVwiIGZ1bGxzY3JlZW5cXCQ9XCJbW19mdWxsc2NyZWVuXV1cIiBsYWJlbD1cIltbbGFiZWxdXVwiIHNlbGVjdGVkLWRhdGU9XCJ7e19zZWxlY3RlZERhdGV9fVwiIHNsb3Q9XCJkcm9wZG93bi1jb250ZW50XCIgZm9jdXNlZC1kYXRlPVwie3tfZm9jdXNlZERhdGV9fVwiIHNob3ctd2Vlay1udW1iZXJzPVwiW1tzaG93V2Vla051bWJlcnNdXVwiIG1pbi1kYXRlPVwiW1tfbWluRGF0ZV1dXCIgbWF4LWRhdGU9XCJbW19tYXhEYXRlXV1cIiByb2xlPVwiZGlhbG9nXCIgb24tZGF0ZS10YXA9XCJfY2xvc2VcIiBwYXJ0PVwib3ZlcmxheS1jb250ZW50XCIgdGhlbWVcXCQ9XCJbW19fZ2V0T3ZlcmxheVRoZW1lKHRoZW1lLCBfb3ZlcmxheUluaXRpYWxpemVkKV1dXCI+XG4gICAgICAgIDwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudD5cbiAgICAgIDwvdGVtcGxhdGU+XG4gICAgPC92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheT5cblxuICAgIDxpcm9uLW1lZGlhLXF1ZXJ5IHF1ZXJ5PVwiW1tfZnVsbHNjcmVlbk1lZGlhUXVlcnldXVwiIHF1ZXJ5LW1hdGNoZXM9XCJ7e19mdWxsc2NyZWVufX1cIj5cbiAgICA8L2lyb24tbWVkaWEtcXVlcnk+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1kYXRlLXBpY2tlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICc0LjAuNSc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzcGxheSB0aGUgY2xlYXIgaWNvbiB3aGljaCBjbGVhcnMgdGhlIGlucHV0LlxuICAgICAgICovXG4gICAgICBjbGVhckJ1dHRvblZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc2FibGUgdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgZXJyb3IgbWVzc2FnZSB0byBkaXNwbGF5IHdoZW4gdGhlIGlucHV0IGlzIGludmFsaWQuXG4gICAgICAgKi9cbiAgICAgIGVycm9yTWVzc2FnZTogU3RyaW5nLFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcGxhY2Vob2xkZXIgc3RyaW5nIGluIGFkZGl0aW9uIHRvIHRoZSBsYWJlbC4gSWYgdGhpcyBpcyBzZXQsIHRoZSBsYWJlbCB3aWxsIGFsd2F5cyBmbG9hdC5cbiAgICAgICAqL1xuICAgICAgcGxhY2Vob2xkZXI6IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYWtlIHRoaXMgZWxlbWVudCByZWFkLW9ubHkuXG4gICAgICAgKi9cbiAgICAgIHJlYWRvbmx5OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZSxcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIF91c2VySW5wdXRWYWx1ZTogU3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnX3VzZXJJbnB1dFZhbHVlQ2hhbmdlZChfdXNlcklucHV0VmFsdWUpJyxcbiAgICAgICdfc2V0Q2xlYXJCdXR0b25MYWJlbChpMThuLmNsZWFyKSdcbiAgICBdO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIC8vIEluIG9yZGVyIHRvIGhhdmUgc3luY2hyb25pemVkIGludmFsaWQgcHJvcGVydHksIHdlIG5lZWQgdG8gdXNlIHRoZSBzYW1lIHZhbGlkYXRlIGxvZ2ljLlxuICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCAoKSA9PiB0aGlzLl9pbnB1dEVsZW1lbnQudmFsaWRhdGUgPSAoKSA9PiB7fSk7XG5cbiAgICAvLyBGSVhNRShwbGF0b3NoYSk6IGRpc3BhdGNoIGBpbnB1dGAgZXZlbnQgb25cbiAgICAvLyA8dmFhZGluLXRleHQtZmllbGQ+IGNsZWFyIGJ1dHRvblxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRleHQtZmllbGQvaXNzdWVzLzM0N1xuICAgIHRoaXMuX2lucHV0RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5faW5wdXRFbGVtZW50LnZhbHVlID09PSAnJykge1xuICAgICAgICB0aGlzLl9fZGlzcGF0Y2hDaGFuZ2UgPSB0cnVlO1xuICAgICAgICB0aGlzLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICAgICAgdGhpcy5fX2Rpc3BhdGNoQ2hhbmdlID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBfb25WYWFkaW5PdmVybGF5Q2xvc2UoZSkge1xuICAgIGlmICh0aGlzLl9vcGVuZWRXaXRoRm9jdXNSaW5nICYmIHRoaXMuaGFzQXR0cmlidXRlKCdmb2N1c2VkJykpIHtcbiAgICAgIHRoaXMuZm9jdXNFbGVtZW50LnNldEF0dHJpYnV0ZSgnZm9jdXMtcmluZycsICcnKTtcbiAgICB9IGVsc2UgaWYgKCF0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXNlZCcpKSB7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudC5ibHVyKCk7XG4gICAgfVxuICAgIGlmIChlLmRldGFpbC5zb3VyY2VFdmVudCAmJiBlLmRldGFpbC5zb3VyY2VFdmVudC5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMpICE9PSAtMSkge1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH1cbiAgfVxuXG4gIF90b2dnbGUoZSkge1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdGhpc1sodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkICYmIHRoaXMuJC5vdmVybGF5Lm9wZW5lZCkgPyAnY2xvc2UnIDogJ29wZW4nXSgpO1xuICB9XG5cbiAgX2lucHV0KCkge1xuICAgIHJldHVybiB0aGlzLiQuaW5wdXQ7XG4gIH1cblxuICBzZXQgX2lucHV0VmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBfaW5wdXRWYWx1ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlO1xuICB9XG5cbiAgX2dldEFyaWFFeHBhbmRlZChvcGVuZWQpIHtcbiAgICByZXR1cm4gQm9vbGVhbihvcGVuZWQpLnRvU3RyaW5nKCk7XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNzYWJsZSBlbGVtZW50IHVzZWQgYnkgdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW5cbiAgICovXG4gIGdldCBmb2N1c0VsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0KCkgfHwgdGhpcztcbiAgfVxuXG4gIF9zZXRDbGVhckJ1dHRvbkxhYmVsKGkxOG5DbGVhcikge1xuICAgIC8vIEZJWE1FKHBsYXRvc2hhKTogZXhwb3NlIGkxOG4gQVBJIGluIDx2YWFkaW4tdGV4dC1maWVsZD5cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL2lzc3Vlcy8zNDhcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbcGFydD1cImNsZWFyLWJ1dHRvblwiXScpXG4gICAgICAuc2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJywgaTE4bkNsZWFyKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoRGF0ZVBpY2tlckVsZW1lbnQuaXMsIERhdGVQaWNrZXJFbGVtZW50KTtcblxuZXhwb3J0IHsgRGF0ZVBpY2tlckVsZW1lbnQgfTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgZmx1c2ggfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9mbHVzaC5qcyc7XG5pbXBvcnQgeyB0ZW1wbGF0aXplIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvdGVtcGxhdGl6ZS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG4vKipcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBwcml2YXRlXG4gKi9cbmNsYXNzIEluZmluaXRlU2Nyb2xsZXJFbGVtZW50IGV4dGVuZHMgUG9seW1lckVsZW1lbnQge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIGhlaWdodDogNTAwcHg7XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlciB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvdmVyZmxvdzogYXV0bztcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtNDBweDtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyLm5vdG91Y2hzY3JvbGwge1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogYXV0bztcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5idWZmZXIge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHdpZHRoOiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLXdpZHRoLCAxMDAlKTtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgcGFkZGluZy1yaWdodDogNDBweDtcbiAgICAgICAgdG9wOiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItYnVmZmVyLW9mZnNldCwgMCk7XG4gICAgICAgIGFuaW1hdGlvbjogZmFkZWluIDAuMnM7XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmFkZWluIHtcbiAgICAgICAgZnJvbSB7IG9wYWNpdHk6IDA7IH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAxOyB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgaWQ9XCJzY3JvbGxlclwiIG9uLXNjcm9sbD1cIl9zY3JvbGxcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidWZmZXJcIj48L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJmdWxsSGVpZ2h0XCI+PC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcblxuICAgICAgLyoqXG4gICAgICAgKiBDb3VudCBvZiBpbmRpdmlkdWFsIGl0ZW1zIGluIGVhY2ggYnVmZmVyLlxuICAgICAgICogVGhlIHNjcm9sbGVyIGhhcyAyIGJ1ZmZlcnMgYWx0b2dldGhlciBzbyBidWZmZXJTaXplIG9mIDIwXG4gICAgICAgKiB3aWxsIHJlc3VsdCBpbiA0MCBidWZmZXJlZCBET00gaXRlbXMgaW4gdG90YWwuXG4gICAgICAgKiBDaGFuZ2luZyBhZnRlciBpbml0aWFsaXphdGlvbiBub3Qgc3VwcG9ydGVkLlxuICAgICAgICovXG4gICAgICBidWZmZXJTaXplOiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDIwXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBhbW91bnQgb2YgaW5pdGlhbCBzY3JvbGwgdG9wLiBOZWVkZWQgaW4gb3JkZXIgZm9yIHRoZVxuICAgICAgICogdXNlciB0byBiZSBhYmxlIHRvIHNjcm9sbCBiYWNrd2FyZHMuXG4gICAgICAgKi9cbiAgICAgIF9pbml0aWFsU2Nyb2xsOiB7XG4gICAgICAgIHZhbHVlOiA1MDAwMDBcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGluZGV4L3Bvc2l0aW9uIG1hcHBlZCBhdCBfaW5pdGlhbFNjcm9sbCBwb2ludC5cbiAgICAgICAqL1xuICAgICAgX2luaXRpYWxJbmRleDoge1xuICAgICAgICB2YWx1ZTogMFxuICAgICAgfSxcblxuICAgICAgX2J1ZmZlcnM6IEFycmF5LFxuXG4gICAgICBfcHJldmVudFNjcm9sbEV2ZW50OiBCb29sZWFuLFxuXG4gICAgICBfbWF5SGF2ZU1vbWVudHVtOiBCb29sZWFuLFxuXG4gICAgICBfaW5pdGlhbGl6ZWQ6IEJvb2xlYW4sXG5cbiAgICAgIGFjdGl2ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogJ19hY3RpdmF0ZWQnXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICB0aGlzLl9idWZmZXJzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJy5idWZmZXInKSk7XG5cbiAgICB0aGlzLiQuZnVsbEhlaWdodC5zdHlsZS5oZWlnaHQgPSB0aGlzLl9pbml0aWFsU2Nyb2xsICogMiArICdweCc7XG5cbiAgICB2YXIgdHBsID0gdGhpcy5xdWVyeVNlbGVjdG9yKCd0ZW1wbGF0ZScpO1xuICAgIHRoaXMuX1RlbXBsYXRlQ2xhc3MgPSB0ZW1wbGF0aXplKHRwbCwgdGhpcywge1xuICAgICAgZm9yd2FyZEhvc3RQcm9wOiBmdW5jdGlvbihwcm9wLCB2YWx1ZSkge1xuICAgICAgICBpZiAocHJvcCAhPT0gJ2luZGV4Jykge1xuICAgICAgICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICAgICAgW10uZm9yRWFjaC5jYWxsKGJ1ZmZlci5jaGlsZHJlbiwgaW5zZXJ0aW9uUG9pbnQgPT4ge1xuICAgICAgICAgICAgICBpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXIuaW5zdGFuY2VbcHJvcF0gPSB2YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBGaXJlZm94IGludGVycHJldHMgZWxlbWVudHMgd2l0aCBvdmVyZmxvdzphdXRvIGFzIGZvY3VzYWJsZVxuICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTEwNjk3MzlcbiAgICB2YXIgaXNGaXJlZm94ID0gbmF2aWdhdG9yLnVzZXJBZ2VudC50b0xvd2VyQ2FzZSgpLmluZGV4T2YoJ2ZpcmVmb3gnKSA+IC0xO1xuICAgIGlmIChpc0ZpcmVmb3gpIHtcbiAgICAgIHRoaXMuJC5zY3JvbGxlci50YWJJbmRleCA9IC0xO1xuICAgIH1cbiAgfVxuXG4gIF9hY3RpdmF0ZWQoYWN0aXZlKSB7XG4gICAgaWYgKGFjdGl2ZSAmJiAhdGhpcy5faW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuX2NyZWF0ZVBvb2woKTtcbiAgICAgIHRoaXMuX2luaXRpYWxpemVkID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfZmluaXNoSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuX2luaXREb25lKSB7XG4gICAgICAvLyBPbmNlIHRoZSBmaXJzdCBzZXQgb2YgaXRlbXMgc3RhcnQgZmFkaW5nIGluLCBzdGFtcCB0aGUgcmVzdFxuICAgICAgdGhpcy5fYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICAgIFtdLmZvckVhY2guY2FsbChidWZmZXIuY2hpbGRyZW4sXG4gICAgICAgICAgaW5zZXJ0aW9uUG9pbnQgPT4gdGhpcy5fZW5zdXJlU3RhbXBlZEluc3RhbmNlKGluc2VydGlvblBvaW50Ll9pdGVtV3JhcHBlcikpO1xuICAgICAgfSwgdGhpcyk7XG5cbiAgICAgIGlmICghdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZKSB7XG4gICAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuX2luaXREb25lID0gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBfdHJhbnNsYXRlQnVmZmVyKHVwKSB7XG4gICAgdmFyIGluZGV4ID0gdXAgPyAxIDogMDtcbiAgICB0aGlzLl9idWZmZXJzW2luZGV4XS50cmFuc2xhdGVZID0gdGhpcy5fYnVmZmVyc1soaW5kZXggPyAwIDogMSldLnRyYW5zbGF0ZVkgKyB0aGlzLl9idWZmZXJIZWlnaHQgKiAoaW5kZXggPyAtMSA6IDEpO1xuICAgIHRoaXMuX2J1ZmZlcnNbaW5kZXhdLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAnICsgdGhpcy5fYnVmZmVyc1tpbmRleF0udHJhbnNsYXRlWSArICdweCwgMCknO1xuICAgIHRoaXMuX2J1ZmZlcnNbaW5kZXhdLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9idWZmZXJzLnJldmVyc2UoKTtcbiAgfVxuXG4gIF9zY3JvbGwoKSB7XG4gICAgaWYgKHRoaXMuX3Njcm9sbERpc2FibGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHNjcm9sbFRvcCA9IHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3A7XG4gICAgaWYgKHNjcm9sbFRvcCA8IHRoaXMuX2J1ZmZlckhlaWdodCB8fCBzY3JvbGxUb3AgPiB0aGlzLl9pbml0aWFsU2Nyb2xsICogMiAtIHRoaXMuX2J1ZmZlckhlaWdodCkge1xuICAgICAgLy8gU2Nyb2xsZWQgbmVhciB0aGUgZW5kL2JlZ2lubmluZyBvZiB0aGUgc2Nyb2xsYWJsZSBhcmVhIC0+IHJlc2V0LlxuICAgICAgdGhpcy5faW5pdGlhbEluZGV4ID0gfn50aGlzLnBvc2l0aW9uO1xuICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBpZiB3ZSBzY3JvbGxlZCBlbm91Z2ggdG8gdHJhbnNsYXRlIHRoZSBidWZmZXIgcG9zaXRpb25zLlxuICAgIHZhciBidWZmZXJPZmZzZXQgPSB0aGlzLnJvb3QucXVlcnlTZWxlY3RvcignLmJ1ZmZlcicpLm9mZnNldFRvcDtcbiAgICB2YXIgdXBwZXJUaHJlc2hvbGRSZWFjaGVkID0gc2Nyb2xsVG9wID4gdGhpcy5fYnVmZmVyc1sxXS50cmFuc2xhdGVZICsgdGhpcy5pdGVtSGVpZ2h0ICsgYnVmZmVyT2Zmc2V0O1xuICAgIHZhciBsb3dlclRocmVzaG9sZFJlYWNoZWQgPSBzY3JvbGxUb3AgPCB0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgKyB0aGlzLml0ZW1IZWlnaHQgKyBidWZmZXJPZmZzZXQ7XG5cbiAgICBpZiAodXBwZXJUaHJlc2hvbGRSZWFjaGVkIHx8IGxvd2VyVGhyZXNob2xkUmVhY2hlZCkge1xuICAgICAgdGhpcy5fdHJhbnNsYXRlQnVmZmVyKGxvd2VyVGhyZXNob2xkUmVhY2hlZCk7XG4gICAgICB0aGlzLl91cGRhdGVDbG9uZXMoKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3ByZXZlbnRTY3JvbGxFdmVudCkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY3VzdG9tLXNjcm9sbCcsIHtidWJibGVzOiBmYWxzZSwgY29tcG9zZWQ6IHRydWV9KSk7XG4gICAgICB0aGlzLl9tYXlIYXZlTW9tZW50dW0gPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLl9wcmV2ZW50U2Nyb2xsRXZlbnQgPSBmYWxzZTtcblxuICAgIHRoaXMuX2RlYm91bmNlclNjcm9sbEZpbmlzaCA9IERlYm91bmNlci5kZWJvdW5jZSh0aGlzLl9kZWJvdW5jZXJTY3JvbGxGaW5pc2gsXG4gICAgICB0aW1lT3V0LmFmdGVyKDIwMCksICgpID0+IHtcbiAgICAgICAgdmFyIHNjcm9sbGVyUmVjdCA9IHRoaXMuJC5zY3JvbGxlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgaWYgKCF0aGlzLl9pc1Zpc2libGUodGhpcy5fYnVmZmVyc1swXSwgc2Nyb2xsZXJSZWN0KSAmJiAhdGhpcy5faXNWaXNpYmxlKHRoaXMuX2J1ZmZlcnNbMV0sIHNjcm9sbGVyUmVjdCkpIHtcbiAgICAgICAgICB0aGlzLnBvc2l0aW9uID0gdGhpcy5wb3NpdGlvbjtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQ3VycmVudCBzY3JvbGxlciBwb3NpdGlvbiBhcyBpbmRleC4gQ2FuIGJlIGEgZnJhY3Rpb25hbCBudW1iZXIuXG4gICAqXG4gICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAqL1xuICBzZXQgcG9zaXRpb24oaW5kZXgpIHtcbiAgICB0aGlzLl9wcmV2ZW50U2Nyb2xsRXZlbnQgPSB0cnVlO1xuICAgIGlmIChpbmRleCA+IHRoaXMuX2ZpcnN0SW5kZXggJiYgaW5kZXggPCB0aGlzLl9maXJzdEluZGV4ICsgdGhpcy5idWZmZXJTaXplICogMikge1xuICAgICAgdGhpcy4kLnNjcm9sbGVyLnNjcm9sbFRvcCA9IHRoaXMuaXRlbUhlaWdodCAqIChpbmRleCAtIHRoaXMuX2ZpcnN0SW5kZXgpICsgdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbml0aWFsSW5kZXggPSB+fmluZGV4O1xuICAgICAgdGhpcy5fcmVzZXQoKTtcbiAgICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3AgKz0gaW5kZXggJSAxICogdGhpcy5pdGVtSGVpZ2h0O1xuICAgICAgdGhpcy5fc2Nyb2xsRGlzYWJsZWQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbWF5SGF2ZU1vbWVudHVtKSB7XG4gICAgICAvLyBTdG9wIHRoZSBwb3NzaWJsZSBpT1MgU2FmYXJpIG1vbWVudHVtIHdpdGggLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XG4gICAgICB0aGlzLiQuc2Nyb2xsZXIuY2xhc3NMaXN0LmFkZCgnbm90b3VjaHNjcm9sbCcpO1xuICAgICAgdGhpcy5fbWF5SGF2ZU1vbWVudHVtID0gZmFsc2U7XG5cbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAvLyBSZXN0b3JlIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDsgYWZ0ZXIgYSBzbWFsbCBkZWxheS5cbiAgICAgICAgdGhpcy4kLnNjcm9sbGVyLmNsYXNzTGlzdC5yZW1vdmUoJ25vdG91Y2hzY3JvbGwnKTtcbiAgICAgIH0sIDEwKTtcbiAgICB9XG5cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IHBvc2l0aW9uKCkge1xuICAgIHJldHVybiAodGhpcy4kLnNjcm9sbGVyLnNjcm9sbFRvcCAtIHRoaXMuX2J1ZmZlcnNbMF0udHJhbnNsYXRlWSkgLyB0aGlzLml0ZW1IZWlnaHQgKyB0aGlzLl9maXJzdEluZGV4O1xuICB9XG5cbiAgZ2V0IGl0ZW1IZWlnaHQoKSB7XG4gICAgaWYgKCF0aGlzLl9pdGVtSGVpZ2h0VmFsKSB7XG4gICAgICBpZiAoISh3aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcykpIHtcbiAgICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgaXRlbUhlaWdodCA9IHdpbmRvdy5TaGFkeUNTU1xuICAgICAgICA/IHdpbmRvdy5TaGFkeUNTUy5nZXRDb21wdXRlZFN0eWxlVmFsdWUodGhpcywgJy0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0JylcbiAgICAgICAgOiBnZXRDb21wdXRlZFN0eWxlKHRoaXMpLmdldFByb3BlcnR5VmFsdWUoJy0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0Jyk7XG4gICAgICAvLyBVc2UgYmFja2dyb3VuZC1wb3NpdGlvbiB0ZW1wIGlubGluZSBzdHlsZSBmb3IgdW5pdCBjb252ZXJzaW9uXG4gICAgICBjb25zdCB0bXBTdHlsZVByb3AgPSAnYmFja2dyb3VuZC1wb3NpdGlvbic7XG4gICAgICB0aGlzLiQuZnVsbEhlaWdodC5zdHlsZS5zZXRQcm9wZXJ0eSh0bXBTdHlsZVByb3AsIGl0ZW1IZWlnaHQpO1xuICAgICAgY29uc3QgaXRlbUhlaWdodFB4ID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLiQuZnVsbEhlaWdodCkuZ2V0UHJvcGVydHlWYWx1ZSh0bXBTdHlsZVByb3ApO1xuICAgICAgdGhpcy4kLmZ1bGxIZWlnaHQuc3R5bGUucmVtb3ZlUHJvcGVydHkodG1wU3R5bGVQcm9wKTtcbiAgICAgIHRoaXMuX2l0ZW1IZWlnaHRWYWwgPSBwYXJzZUZsb2F0KGl0ZW1IZWlnaHRQeCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuX2l0ZW1IZWlnaHRWYWw7XG4gIH1cblxuICBnZXQgX2J1ZmZlckhlaWdodCgpIHtcbiAgICByZXR1cm4gdGhpcy5pdGVtSGVpZ2h0ICogdGhpcy5idWZmZXJTaXplO1xuICB9XG5cbiAgX3Jlc2V0KCkge1xuICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLiQuc2Nyb2xsZXIuc2Nyb2xsVG9wID0gdGhpcy5faW5pdGlhbFNjcm9sbDtcbiAgICB0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgPSB0aGlzLl9pbml0aWFsU2Nyb2xsIC0gdGhpcy5fYnVmZmVySGVpZ2h0O1xuICAgIHRoaXMuX2J1ZmZlcnNbMV0udHJhbnNsYXRlWSA9IHRoaXMuX2luaXRpYWxTY3JvbGw7XG4gICAgdGhpcy5fYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICBidWZmZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZTNkKDAsICcgKyBidWZmZXIudHJhbnNsYXRlWSArICdweCwgMCknO1xuICAgIH0pO1xuICAgIHRoaXMuX2J1ZmZlcnNbMF0udXBkYXRlZCA9IHRoaXMuX2J1ZmZlcnNbMV0udXBkYXRlZCA9IGZhbHNlO1xuICAgIHRoaXMuX3VwZGF0ZUNsb25lcyh0cnVlKTtcblxuICAgIHRoaXMuX2RlYm91bmNlclVwZGF0ZUNsb25lcyA9IERlYm91bmNlci5kZWJvdW5jZShcbiAgICAgIHRoaXMuX2RlYm91bmNlclVwZGF0ZUNsb25lcyxcbiAgICAgIHRpbWVPdXQuYWZ0ZXIoMjAwKSwgKCkgPT4ge1xuICAgICAgICB0aGlzLl9idWZmZXJzWzBdLnVwZGF0ZWQgPSB0aGlzLl9idWZmZXJzWzFdLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xvbmVzKCk7XG4gICAgICB9KTtcblxuICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gZmFsc2U7XG4gIH1cblxuICBfY3JlYXRlUG9vbCgpIHtcbiAgICB2YXIgY29udGFpbmVyID0gdGhpcy5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICB0aGlzLl9idWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5idWZmZXJTaXplOyBpKyspIHtcbiAgICAgICAgY29uc3QgaXRlbVdyYXBwZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaXRlbVdyYXBwZXIuc3R5bGUuaGVpZ2h0ID0gdGhpcy5pdGVtSGVpZ2h0ICsgJ3B4JztcbiAgICAgICAgaXRlbVdyYXBwZXIuaW5zdGFuY2UgPSB7fTtcblxuICAgICAgICBjb25zdCBjb250ZW50SWQgPSBJbmZpbml0ZVNjcm9sbGVyRWxlbWVudC5fY29udGVudEluZGV4ID0gSW5maW5pdGVTY3JvbGxlckVsZW1lbnQuX2NvbnRlbnRJbmRleCArIDEgfHwgMDtcbiAgICAgICAgY29uc3Qgc2xvdE5hbWUgPSAndmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0tY29udGVudC0nICsgY29udGVudElkO1xuXG4gICAgICAgIGNvbnN0IGluc2VydGlvblBvaW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2xvdCcpO1xuICAgICAgICBpbnNlcnRpb25Qb2ludC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBzbG90TmFtZSk7XG4gICAgICAgIGluc2VydGlvblBvaW50Ll9pdGVtV3JhcHBlciA9IGl0ZW1XcmFwcGVyO1xuICAgICAgICBidWZmZXIuYXBwZW5kQ2hpbGQoaW5zZXJ0aW9uUG9pbnQpO1xuXG4gICAgICAgIGl0ZW1XcmFwcGVyLnNldEF0dHJpYnV0ZSgnc2xvdCcsIHNsb3ROYW1lKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChpdGVtV3JhcHBlcik7XG5cbiAgICAgICAgLy8gVGhpcyBpcyBuZWVkZWQgYnkgSUVcbiAgICAgICAgZmx1c2goKTtcblxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAvLyBPbmx5IHN0YW1wIHRoZSB2aXNpYmxlIGluc3RhbmNlcyBmaXJzdFxuICAgICAgICAgIGlmICh0aGlzLl9pc1Zpc2libGUoaXRlbVdyYXBwZXIsIGNvbnRhaW5lcikpIHtcbiAgICAgICAgICAgIHRoaXMuX2Vuc3VyZVN0YW1wZWRJbnN0YW5jZShpdGVtV3JhcHBlcik7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAxKTsgLy8gV2FpdCBmb3IgZmlyc3QgcmVzZXRcbiAgICAgIH1cbiAgICB9LCB0aGlzKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIHRoaXMuX2ZpbmlzaEluaXQuYmluZCh0aGlzKSk7XG4gICAgfSwgMSk7XG4gIH1cblxuICBfZW5zdXJlU3RhbXBlZEluc3RhbmNlKGl0ZW1XcmFwcGVyKSB7XG4gICAgaWYgKGl0ZW1XcmFwcGVyLmZpcnN0RWxlbWVudENoaWxkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIHRtcEluc3RhbmNlID0gaXRlbVdyYXBwZXIuaW5zdGFuY2U7XG5cbiAgICBpdGVtV3JhcHBlci5pbnN0YW5jZSA9IG5ldyB0aGlzLl9UZW1wbGF0ZUNsYXNzKHt9KTtcbiAgICBpdGVtV3JhcHBlci5hcHBlbmRDaGlsZChpdGVtV3JhcHBlci5pbnN0YW5jZS5yb290KTtcblxuICAgIE9iamVjdC5rZXlzKHRtcEluc3RhbmNlKS5mb3JFYWNoKHByb3AgPT4ge1xuICAgICAgaXRlbVdyYXBwZXIuaW5zdGFuY2Uuc2V0KHByb3AsIHRtcEluc3RhbmNlW3Byb3BdKTtcbiAgICB9KTtcbiAgfVxuXG4gIF91cGRhdGVDbG9uZXModmlld1BvcnRPbmx5KSB7XG4gICAgdGhpcy5fZmlyc3RJbmRleCA9IH5+KCh0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkgLSB0aGlzLl9pbml0aWFsU2Nyb2xsKSAvIHRoaXMuaXRlbUhlaWdodCkgKyB0aGlzLl9pbml0aWFsSW5kZXg7XG5cbiAgICB2YXIgc2Nyb2xsZXJSZWN0ID0gdmlld1BvcnRPbmx5ID8gdGhpcy4kLnNjcm9sbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpIDogdW5kZWZpbmVkO1xuICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaCgoYnVmZmVyLCBidWZmZXJJbmRleCkgPT4ge1xuICAgICAgaWYgKCFidWZmZXIudXBkYXRlZCkge1xuICAgICAgICB2YXIgZmlyc3RJbmRleCA9IHRoaXMuX2ZpcnN0SW5kZXggKyB0aGlzLmJ1ZmZlclNpemUgKiBidWZmZXJJbmRleDtcblxuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYnVmZmVyLmNoaWxkcmVuLCAoaW5zZXJ0aW9uUG9pbnQsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgaXRlbVdyYXBwZXIgPSBpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXI7XG4gICAgICAgICAgaWYgKCF2aWV3UG9ydE9ubHkgfHwgdGhpcy5faXNWaXNpYmxlKGl0ZW1XcmFwcGVyLCBzY3JvbGxlclJlY3QpKSB7XG4gICAgICAgICAgICBpdGVtV3JhcHBlci5pbnN0YW5jZS5pbmRleCA9IGZpcnN0SW5kZXggKyBpbmRleDtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBidWZmZXIudXBkYXRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG4gIH1cblxuICBfaXNWaXNpYmxlKGVsZW1lbnQsIGNvbnRhaW5lcikge1xuICAgIHZhciByZWN0ID0gZWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICByZXR1cm4gcmVjdC5ib3R0b20gPiBjb250YWluZXIudG9wICYmIHJlY3QudG9wIDwgY29udGFpbmVyLmJvdHRvbTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoSW5maW5pdGVTY3JvbGxlckVsZW1lbnQuaXMsIEluZmluaXRlU2Nyb2xsZXJFbGVtZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2RvbS1yZXBlYXQuanMnO1xuaW1wb3J0IHsgR2VzdHVyZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2dlc3R1cmUtZXZlbnQtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IERhdGVQaWNrZXJIZWxwZXIgfSBmcm9tICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1oZWxwZXIuanMnO1xuaW1wb3J0IHsgVGhlbWFibGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuLyoqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBNb250aENhbGVuZGFyRWxlbWVudCBleHRlbmRzIFRoZW1hYmxlTWl4aW4oR2VzdHVyZUV2ZW50TGlzdGVuZXJzKFBvbHltZXJFbGVtZW50KSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwid2Vla2RheXNcIl0sXG4gICAgICAjZGF5cyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgZmxleC1ncm93OiAxO1xuICAgICAgfVxuXG4gICAgICAjZGF5cy1jb250YWluZXIsXG4gICAgICAjd2Vla2RheXMtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ3ZWVrLW51bWJlcnNcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyc1wiXVtoaWRkZW5dLFxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlcIl0sXG4gICAgICBbcGFydD1cImRhdGVcIl0ge1xuICAgICAgICAvKiBXb3VsZCB1c2UgY2FsYygxMDAlIC8gNykgYnV0IGl0IGRvZXNuJ3Qgd29yayBuaWNlIG9uIElFICovXG4gICAgICAgIHdpZHRoOiAxNC4yODU3MTQyODYlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlcIl06ZW1wdHksXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyc1wiXSB7XG4gICAgICAgIHdpZHRoOiAxMi41JTtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgcGFydD1cIm1vbnRoLWhlYWRlclwiIHJvbGU9XCJoZWFkaW5nXCI+W1tfZ2V0VGl0bGUobW9udGgsIGkxOG4ubW9udGhOYW1lcyldXTwvZGl2PlxuICAgIDxkaXYgaWQ9XCJtb250aEdyaWRcIiBvbi10YXA9XCJfaGFuZGxlVGFwXCIgb24tdG91Y2hlbmQ9XCJfcHJldmVudERlZmF1bHRcIiBvbi10b3VjaHN0YXJ0PVwiX29uTW9udGhHcmlkVG91Y2hTdGFydFwiPlxuICAgICAgPGRpdiBpZD1cIndlZWtkYXlzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IGhpZGRlbj1cIltbIV9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspXV1cIiBwYXJ0PVwid2Vla2RheVwiPjwvZGl2PlxuICAgICAgICA8ZGl2IHBhcnQ9XCJ3ZWVrZGF5c1wiPlxuICAgICAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1yZXBlYXRcIiBpdGVtcz1cIltbX2dldFdlZWtEYXlOYW1lcyhpMThuLndlZWtkYXlzLCBpMThuLndlZWtkYXlzU2hvcnQsIHNob3dXZWVrTnVtYmVycywgaTE4bi5maXJzdERheU9mV2VlayldXVwiPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwid2Vla2RheVwiIHJvbGU9XCJoZWFkaW5nXCIgYXJpYS1sYWJlbFxcJD1cIltbaXRlbS53ZWVrRGF5XV1cIj5bW2l0ZW0ud2Vla0RheVNob3J0XV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cImRheXMtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgcGFydD1cIndlZWstbnVtYmVyc1wiIGhpZGRlbj1cIltbIV9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspXV1cIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19nZXRXZWVrTnVtYmVycyhfZGF5cyldXVwiPlxuICAgICAgICAgICAgPGRpdiBwYXJ0PVwid2Vlay1udW1iZXJcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGFiZWxcXCQ9XCJbW2kxOG4ud2Vla11dIFtbaXRlbV1dXCI+W1tpdGVtXV08L2Rpdj5cbiAgICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBpZD1cImRheXNcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19kYXlzXV1cIj5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cImRhdGVcIiB0b2RheVxcJD1cIltbX2lzVG9kYXkoaXRlbSldXVwiIHNlbGVjdGVkXFwkPVwiW1tfZGF0ZUVxdWFscyhpdGVtLCBzZWxlY3RlZERhdGUpXV1cIiBmb2N1c2VkXFwkPVwiW1tfZGF0ZUVxdWFscyhpdGVtLCBmb2N1c2VkRGF0ZSldXVwiIGRhdGU9XCJbW2l0ZW1dXVwiIGRpc2FibGVkXFwkPVwiW1shX2RhdGVBbGxvd2VkKGl0ZW0sIG1pbkRhdGUsIG1heERhdGUpXV1cIiByb2xlXFwkPVwiW1tfZ2V0Um9sZShpdGVtKV1dXCIgYXJpYS1sYWJlbFxcJD1cIltbX2dldEFyaWFMYWJlbChpdGVtKV1dXCIgYXJpYS1kaXNhYmxlZFxcJD1cIltbX2dldEFyaWFEaXNhYmxlZChpdGVtLCBtaW5EYXRlLCBtYXhEYXRlKV1dXCI+W1tfZ2V0RGF0ZShpdGVtKV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLW1vbnRoLWNhbGVuZGFyJztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBBIGBEYXRlYCBvYmplY3QgZGVmaW5pbmcgdGhlIG1vbnRoIHRvIGJlIGRpc3BsYXllZC4gT25seSB5ZWFyIGFuZFxuICAgICAgICogbW9udGggcHJvcGVydGllcyBhcmUgYWN0dWFsbHkgdXNlZC5cbiAgICAgICAqL1xuICAgICAgbW9udGg6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6IG5ldyBEYXRlKClcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBgRGF0ZWAgb2JqZWN0IGZvciB0aGUgY3VycmVudGx5IHNlbGVjdGVkIGRhdGUuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBgRGF0ZWAgb2JqZWN0IGZvciB0aGUgY3VycmVudGx5IGZvY3VzZWQgZGF0ZS5cbiAgICAgICAqL1xuICAgICAgZm9jdXNlZERhdGU6IERhdGUsXG5cbiAgICAgIHNob3dXZWVrTnVtYmVyczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIGkxOG46IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEZsYWcgc3RhdGluZyB3aGV0aGVyIHRhcHMgb24gdGhlIGNvbXBvbmVudCBzaG91bGQgYmUgaWdub3JlZC5cbiAgICAgICAqL1xuICAgICAgaWdub3JlVGFwczogQm9vbGVhbixcblxuICAgICAgX25vdFRhcHBpbmc6IEJvb2xlYW4sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIG1pbkRhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhdGVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgbGF0ZXIgZGF0ZXMgd2lsbCBiZSBkaXNhYmxlZC5cbiAgICAgICAqL1xuICAgICAgbWF4RGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICB2YWx1ZTogbnVsbFxuICAgICAgfSxcblxuICAgICAgX2RheXM6IHtcbiAgICAgICAgdHlwZTogQXJyYXksXG4gICAgICAgIGNvbXB1dGVkOiAnX2dldERheXMobW9udGgsIGkxOG4uZmlyc3REYXlPZldlZWssIG1pbkRhdGUsIG1heERhdGUpJ1xuICAgICAgfSxcblxuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBjb21wdXRlZDogJ19pc0Rpc2FibGVkKG1vbnRoLCBtaW5EYXRlLCBtYXhEYXRlKSdcbiAgICAgIH1cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfc2hvd1dlZWtOdW1iZXJzQ2hhbmdlZChzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspJ1xuICAgIF07XG4gIH1cblxuICBfZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpIHtcbiAgICByZXR1cm4gRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhkYXRlMSwgZGF0ZTIpO1xuICB9XG5cbiAgX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KTtcbiAgfVxuXG4gIC8qIFJldHVybnMgdHJ1ZSBpZiBhbGwgdGhlIGRhdGVzIGluIHRoZSBtb250aCBhcmUgb3V0IG9mIHRoZSBhbGxvd2VkIHJhbmdlICovXG4gIF9pc0Rpc2FibGVkKG1vbnRoLCBtaW5EYXRlLCBtYXhEYXRlKSB7XG4gICAgLy8gRmlyc3QgZGF5IG9mIHRoZSBtb250aFxuICAgIHZhciBmaXJzdERhdGUgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBmaXJzdERhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgZmlyc3REYXRlLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkpO1xuICAgIGZpcnN0RGF0ZS5zZXREYXRlKDEpO1xuXG4gICAgLy8gTGFzdCBkYXkgb2YgdGhlIG1vbnRoXG4gICAgdmFyIGxhc3REYXRlID0gbmV3IERhdGUoMCwgMCk7XG4gICAgbGFzdERhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgbGFzdERhdGUuc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSArIDEpO1xuICAgIGxhc3REYXRlLnNldERhdGUoMCk7XG5cbiAgICBpZiAoKG1pbkRhdGUgJiYgbWF4RGF0ZSlcbiAgICAgICYmIG1pbkRhdGUuZ2V0TW9udGgoKSA9PT0gbWF4RGF0ZS5nZXRNb250aCgpXG4gICAgICAmJiBtaW5EYXRlLmdldE1vbnRoKCkgPT09IG1vbnRoLmdldE1vbnRoKClcbiAgICAgICYmIG1heERhdGUuZ2V0RGF0ZSgpIC0gbWluRGF0ZS5nZXREYXRlKCkgPj0gMCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cblxuICAgIHJldHVybiAhdGhpcy5fZGF0ZUFsbG93ZWQoZmlyc3REYXRlLCBtaW5EYXRlLCBtYXhEYXRlKVxuICAgICAgJiYgIXRoaXMuX2RhdGVBbGxvd2VkKGxhc3REYXRlLCBtaW5EYXRlLCBtYXhEYXRlKTtcbiAgfVxuXG4gIF9nZXRUaXRsZShtb250aCwgbW9udGhOYW1lcykge1xuICAgIGlmIChtb250aCA9PT0gdW5kZWZpbmVkIHx8IG1vbnRoTmFtZXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5pMThuLmZvcm1hdFRpdGxlKG1vbnRoTmFtZXNbbW9udGguZ2V0TW9udGgoKV0sIG1vbnRoLmdldEZ1bGxZZWFyKCkpO1xuICB9XG5cbiAgX29uTW9udGhHcmlkVG91Y2hTdGFydCgpIHtcbiAgICB0aGlzLl9ub3RUYXBwaW5nID0gZmFsc2U7XG4gICAgc2V0VGltZW91dCgoKSA9PiB0aGlzLl9ub3RUYXBwaW5nID0gdHJ1ZSwgMzAwKTtcbiAgfVxuXG4gIF9kYXRlQWRkKGRhdGUsIGRlbHRhKSB7XG4gICAgZGF0ZS5zZXREYXRlKGRhdGUuZ2V0RGF0ZSgpICsgZGVsdGEpO1xuICB9XG5cbiAgX2FwcGx5Rmlyc3REYXlPZldlZWsod2Vla0RheU5hbWVzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIGlmICh3ZWVrRGF5TmFtZXMgPT09IHVuZGVmaW5lZCB8fCBmaXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgcmV0dXJuIHdlZWtEYXlOYW1lcy5zbGljZShmaXJzdERheU9mV2VlaykuY29uY2F0KHdlZWtEYXlOYW1lcy5zbGljZSgwLCBmaXJzdERheU9mV2VlaykpO1xuICB9XG5cbiAgX2dldFdlZWtEYXlOYW1lcyh3ZWVrRGF5TmFtZXMsIHdlZWtEYXlOYW1lc1Nob3J0LCBzaG93V2Vla051bWJlcnMsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgaWYgKHdlZWtEYXlOYW1lcyA9PT0gdW5kZWZpbmVkIHx8IHdlZWtEYXlOYW1lc1Nob3J0ID09PSB1bmRlZmluZWQgfHxcbiAgICAgIHNob3dXZWVrTnVtYmVycyA9PT0gdW5kZWZpbmVkIHx8IGZpcnN0RGF5T2ZXZWVrID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2Vla0RheU5hbWVzID0gdGhpcy5fYXBwbHlGaXJzdERheU9mV2Vlayh3ZWVrRGF5TmFtZXMsIGZpcnN0RGF5T2ZXZWVrKTtcbiAgICB3ZWVrRGF5TmFtZXNTaG9ydCA9IHRoaXMuX2FwcGx5Rmlyc3REYXlPZldlZWsod2Vla0RheU5hbWVzU2hvcnQsIGZpcnN0RGF5T2ZXZWVrKTtcbiAgICB3ZWVrRGF5TmFtZXMgPSB3ZWVrRGF5TmFtZXMubWFwKChkYXksIGluZGV4KSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICB3ZWVrRGF5OiBkYXksXG4gICAgICAgIHdlZWtEYXlTaG9ydDogd2Vla0RheU5hbWVzU2hvcnRbaW5kZXhdXG4gICAgICB9O1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHdlZWtEYXlOYW1lcztcbiAgfVxuXG4gIF9nZXREYXRlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSA/IGRhdGUuZ2V0RGF0ZSgpIDogJyc7XG4gIH1cblxuICBfc2hvd1dlZWtOdW1iZXJzQ2hhbmdlZChzaG93V2Vla051bWJlcnMsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgaWYgKHNob3dXZWVrTnVtYmVycyAmJiBmaXJzdERheU9mV2VlayA9PT0gMSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3dlZWstbnVtYmVycycsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ3dlZWstbnVtYmVycycpO1xuICAgIH1cbiAgfVxuXG4gIF9zaG93V2Vla1NlcGFyYXRvcihzaG93V2Vla051bWJlcnMsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgLy8gQ3VycmVudGx5IG9ubHkgc3VwcG9ydGVkIGZvciBsb2NhbGVzIHRoYXQgc3RhcnQgdGhlIHdlZWsgb24gTW9uZGF5LlxuICAgIHJldHVybiBzaG93V2Vla051bWJlcnMgJiYgZmlyc3REYXlPZldlZWsgPT09IDE7XG4gIH1cblxuICBfaXNUb2RheShkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMuX2RhdGVFcXVhbHMobmV3IERhdGUoKSwgZGF0ZSk7XG4gIH1cblxuICBfZ2V0RGF5cyhtb250aCwgZmlyc3REYXlPZldlZWspIHtcbiAgICBpZiAobW9udGggPT09IHVuZGVmaW5lZCB8fCBmaXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIC8vIEZpcnN0IGRheSBvZiB0aGUgbW9udGggKGF0IG1pZG5pZ2h0KS5cbiAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGRhdGUuc2V0RnVsbFllYXIobW9udGguZ2V0RnVsbFllYXIoKSk7XG4gICAgZGF0ZS5zZXRNb250aChtb250aC5nZXRNb250aCgpKTtcbiAgICBkYXRlLnNldERhdGUoMSk7XG5cbiAgICAvLyBSZXdpbmQgdG8gZmlyc3QgZGF5IG9mIHRoZSB3ZWVrLlxuICAgIHdoaWxlIChkYXRlLmdldERheSgpICE9PSBmaXJzdERheU9mV2Vlaykge1xuICAgICAgdGhpcy5fZGF0ZUFkZChkYXRlLCAtMSk7XG4gICAgfVxuXG4gICAgdmFyIGRheXMgPSBbXTtcbiAgICB2YXIgc3RhcnRNb250aCA9IGRhdGUuZ2V0TW9udGgoKTtcbiAgICB2YXIgdGFyZ2V0TW9udGggPSBtb250aC5nZXRNb250aCgpO1xuICAgIHdoaWxlIChkYXRlLmdldE1vbnRoKCkgPT09IHRhcmdldE1vbnRoIHx8IGRhdGUuZ2V0TW9udGgoKSA9PT0gc3RhcnRNb250aCkge1xuICAgICAgZGF5cy5wdXNoKGRhdGUuZ2V0TW9udGgoKSA9PT0gdGFyZ2V0TW9udGggPyBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSkgOiBudWxsKTtcblxuICAgICAgLy8gQWR2YW5jZSB0byBuZXh0IGRheS5cbiAgICAgIHRoaXMuX2RhdGVBZGQoZGF0ZSwgMSk7XG4gICAgfVxuICAgIHJldHVybiBkYXlzO1xuICB9XG5cbiAgX2dldFdlZWtOdW1iZXIoZGF0ZSwgZGF5cykge1xuICAgIGlmIChkYXRlID09PSB1bmRlZmluZWQgfHwgZGF5cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICAvLyBHZXQgdGhlIGZpcnN0IG5vbi1udWxsIGRhdGUgZnJvbSB0aGUgZGF5cyBhcnJheS5cbiAgICAgIGRhdGUgPSBkYXlzLnJlZHVjZSgoYWNjLCBkKSA9PiB7XG4gICAgICAgIHJldHVybiAhYWNjICYmIGQgPyBkIDogYWNjO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIERhdGVQaWNrZXJIZWxwZXIuX2dldElTT1dlZWtOdW1iZXIoZGF0ZSk7XG4gIH1cblxuICBfZ2V0V2Vla051bWJlcnMoZGF0ZXMpIHtcbiAgICByZXR1cm4gZGF0ZXNcbiAgICAgIC5tYXAoZGF0ZSA9PiB0aGlzLl9nZXRXZWVrTnVtYmVyKGRhdGUsIGRhdGVzKSlcbiAgICAgIC5maWx0ZXIoKHdlZWssIGluZGV4LCBhcnIpID0+IGFyci5pbmRleE9mKHdlZWspID09PSBpbmRleCk7XG4gIH1cblxuICBfaGFuZGxlVGFwKGUpIHtcbiAgICBpZiAoIXRoaXMuaWdub3JlVGFwcyAmJiAhdGhpcy5fbm90VGFwcGluZyAmJiBlLnRhcmdldC5kYXRlICYmICFlLnRhcmdldC5oYXNBdHRyaWJ1dGUoJ2Rpc2FibGVkJykpIHtcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gZS50YXJnZXQuZGF0ZTtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2RhdGUtdGFwJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICAgIH1cbiAgfVxuXG4gIF9wcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgX2dldFJvbGUoZGF0ZSkge1xuICAgIHJldHVybiBkYXRlID8gJ2J1dHRvbicgOiAncHJlc2VudGF0aW9uJztcbiAgfVxuXG4gIF9nZXRBcmlhTGFiZWwoZGF0ZSkge1xuICAgIGlmICghZGF0ZSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIHZhciBhcmlhTGFiZWwgPSB0aGlzLl9nZXREYXRlKGRhdGUpICsgJyAnICtcbiAgICAgIHRoaXMuaTE4bi5tb250aE5hbWVzW2RhdGUuZ2V0TW9udGgoKV0gKyAnICcgK1xuICAgICAgZGF0ZS5nZXRGdWxsWWVhcigpICsgJywgJyArXG4gICAgICB0aGlzLmkxOG4ud2Vla2RheXNbZGF0ZS5nZXREYXkoKV07XG5cbiAgICBpZiAodGhpcy5faXNUb2RheShkYXRlKSkge1xuICAgICAgYXJpYUxhYmVsICs9ICcsICcgKyB0aGlzLmkxOG4udG9kYXk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFyaWFMYWJlbDtcbiAgfVxuXG4gIF9nZXRBcmlhRGlzYWJsZWQoZGF0ZSwgbWluLCBtYXgpIHtcbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IG1pbiA9PT0gdW5kZWZpbmVkIHx8IG1heCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9kYXRlQWxsb3dlZChkYXRlLCBtaW4sIG1heCkgPyAnZmFsc2UnIDogJ3RydWUnO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShNb250aENhbGVuZGFyRWxlbWVudC5pcywgTW9udGhDYWxlbmRhckVsZW1lbnQpO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvZm9udC1pY29ucy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3NoYWRvdy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWJ1dHRvbi90aGVtZS9tYXRlcmlhbC92YWFkaW4tYnV0dG9uLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBodG1sYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbWF0ZXJpYWwtZm9udC1mYW1pbHkpO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplKTtcbiAgICAgICAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuXG4gICAgICAgIC8qIEZJWE1FKHBsYXRvc2hhKTogZml4IHRoZSBjb3JlIHN0eWxlcyBhbmQgcmVtb3ZlIHRoaXMgb3ZlcnJpZGUuICovXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZnVsbHNjcmVlbl0pIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICAvKiBGdWxsc2NyZWVuIFRvb2xiYXIgKi9cblxuICAgICAgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgYm94LXNoYWRvdzogdmFyKC0tbWF0ZXJpYWwtc2hhZG93LWVsZXZhdGlvbi00ZHApO1xuICAgICAgfVxuXG4gICAgICAvKiBGSVhNRShwbGF0b3NoYSk6IGZpeCB0aGUgY29yZSBzdHlsZXMgYW5kIHJlbW92ZSB0aGlzIG92ZXJyaWRlLiAqL1xuICAgICAgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXTpub3QoW2Rlc2t0b3BdKSB7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBwYWRkaW5nOiAwIDhweDtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl0sXG4gICAgICBbcGFydD1cInRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBmb250LWZhbWlseTogJ21hdGVyaWFsLWljb25zJztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1pY29uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdLFxuICAgICAgW3BhcnQ9XCJ0b2dnbGUtYnV0dG9uXCJdLFxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgcGFkZGluZzogOHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTpob3ZlcixcbiAgICAgIFtwYXJ0PVwidG9nZ2xlLWJ1dHRvblwiXTpob3ZlcixcbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbWF0ZXJpYWwtaWNvbnMtY2xlYXIpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvZ2dsZS1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhcigtLW1hdGVyaWFsLWljb25zLWNhbGVuZGFyKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHN0YXRpYztcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1ib2R5LWZvbnQtc2l6ZSk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl06OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbWF0ZXJpYWwtaWNvbnMtcGxheSk7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnbWF0ZXJpYWwtaWNvbnMnO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWljb24tZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDEwMG1zIGN1YmljLWJlemllciguNCwgMCwgLjIsIDEpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbeWVhcnMtdmlzaWJsZV0pIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXTo6YWZ0ZXIge1xuICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG4gICAgICB9XG5cbiAgICAgIC8qIE1vbnRoIHNjcm9sbGVyICovXG5cbiAgICAgIFtwYXJ0PVwibW9udGhzXCJdIHtcbiAgICAgICAgLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItaXRlbS1oZWlnaHQ6IDMyMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIC8qIFllYXIgc2Nyb2xsZXIgKi9cblxuICAgICAgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl06OmJlZm9yZSB7XG4gICAgICAgIHotaW5kZXg6IDI7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgd2lkdGg6IDhweDtcbiAgICAgICAgaGVpZ2h0OiA4cHg7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tbWF0ZXJpYWwtYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt5ZWFycy12aXNpYmxlXSkgW3BhcnQ9XCJ5ZWFyc1wiXTo6YWZ0ZXIge1xuICAgICAgICB0b3A6IGNhbGMoMjBweCArIDE2cHgpO1xuICAgICAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDIwcHggLSAxNnB4KTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFyLW51bWJlclwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtc21hbGwtZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcHg7IC8qIE5PVEUocGxhdG9zaGEpOiBjaG9zZW4gdG8gYWxpZ24geWVhcnMgdG8gbW9udGhzICovXG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhci1zZXBhcmF0b3JcIl0ge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICAgIHdpZHRoOiA0cHg7XG4gICAgICAgIGhlaWdodDogNHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIG1hcmdpbjogY2FsYygwLjUgKiB2YXIoLS12YWFkaW4taW5maW5pdGUtc2Nyb2xsZXItaXRlbS1oZWlnaHQsIDgwcHgpIC0gMC41ICogMTBweCAtIDAuNSAqIDRweCkgYXV0bztcbiAgICAgIH1cblxuICAgICAgLyogQm90dG9tIEJhciAqL1xuXG4gICAgICBbcGFydD1cInRvb2xiYXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgICAgICBwYWRkaW5nOiA4cHggNHB4O1xuICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgdmFyKC0tbWF0ZXJpYWwtZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2FuY2VsLWJ1dHRvblwiXSB7XG4gICAgICAgIG9yZGVyOiAxO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvZGF5LWJ1dHRvblwiXSB7XG4gICAgICAgIG9yZGVyOiAyO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInRvZGF5LWJ1dHRvblwiXSxcbiAgICAgIFtwYXJ0PVwiY2FuY2VsLWJ1dHRvblwiXSB7XG4gICAgICAgIG1hcmdpbjogMCA0cHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyc7XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9taXhpbnMvb3ZlcmxheS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWRhdGUtcGlja2VyLW92ZXJsYXlcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJtYXRlcmlhbC1vdmVybGF5XCI+XG4gICAgICA6aG9zdChbZnVsbHNjcmVlbl0pIHtcbiAgICAgICAgdG9wOiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIHJpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGJvdHRvbTogdmFyKC0tdmFhZGluLW92ZXJsYXktdmlld3BvcnQtYm90dG9tKSAhaW1wb3J0YW50O1xuICAgICAgICBsZWZ0OiAwICFpbXBvcnRhbnQ7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHN0cmV0Y2g7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtmdWxsc2NyZWVuXSkpIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIHdpZHRoOiAzNjBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDAgNHB4IDRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZnVsbHNjcmVlbl0pW3JpZ2h0LWFsaWduZWRdKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHggMCA0cHggNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtmdWxsc2NyZWVuXSlbYm90dG9tLWFsaWduZWRdKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2Z1bGxzY3JlZW5dKVtzaG93LXdlZWstbnVtYmVyc10pIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIHdpZHRoOiAzOTZweDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjb250ZW50XCJdIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkuanMnO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LmpzJztcbmltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50LmpzJztcbmltcG9ydCAnLi92YWFkaW4tbW9udGgtY2FsZW5kYXIuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi10ZXh0LWZpZWxkLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2ZvbnQtaWNvbnMuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL2ZpZWxkLWJ1dHRvbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWRhdGUtcGlja2VyXCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGUgaW5jbHVkZT1cIm1hdGVyaWFsLWZpZWxkLWJ1dHRvblwiPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhcigtLW1hdGVyaWFsLWljb25zLWNsZWFyKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1tYXRlcmlhbC1pY29ucy1jYWxlbmRhcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL3NyYy92YWFkaW4tZGF0ZS1waWNrZXIuanMnO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvY29sb3IuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWRhdGUtcGlja2VyLW1vbnRoLWNhbGVuZGFyXCIgdGhlbWUtZm9yPVwidmFhZGluLW1vbnRoLWNhbGVuZGFyXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1ib2R5LXRleHQtY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiAwIGNhbGMoNTAlIC8gOCAtIDAuNWVtICsgOHB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3Nob3ctd2Vlay1udW1iZXJzXSkge1xuICAgICAgICBwYWRkaW5nOiAwIGNhbGMoNTAlIC8gOSAtIDAuNWVtICsgOHB4KTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJtb250aC1oZWFkZXJcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWg2LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWstbnVtYmVyXCJdLFxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1jYXB0aW9uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0NHB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJ3ZWVrLW51bWJlclwiXSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwid2Vla2RheVwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLWJvZHktZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQycHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl06OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgei1pbmRleDogLTQ7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB3aWR0aDogMzhweDtcbiAgICAgICAgaGVpZ2h0OiAzOHB4O1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgfVxuXG4gICAgICAvKiBUb2RheSAqL1xuXG4gICAgICBbcGFydD1cImRhdGVcIl1bdG9kYXldIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC8qIEhvdmVyICovXG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgei1pbmRleDogLTM7XG4gICAgICB9XG5cbiAgICAgIC8qIEhpZGUgZm9yIHRvdWNoIGRldmljZXMgKi9cbiAgICAgIEBtZWRpYSAoaG92ZXI6IG5vbmUpIHtcbiAgICAgICAgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKTpob3Zlcjo6YWZ0ZXIge1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgICAgei1pbmRleDogLTQ7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLyogU2VsZWN0ZWQgKi9cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3NlbGVjdGVkXSB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSlbc2VsZWN0ZWRdOjphZnRlcixcbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtzZWxlY3RlZF06OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICB6LWluZGV4OiAtMjtcbiAgICAgIH1cblxuICAgICAgLyogRm9jdXNlZCAqL1xuXG4gICAgICBbcGFydD1cImRhdGVcIl06bm90KFtkaXNhYmxlZF0pW2ZvY3VzZWRdLFxuICAgICAgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKTphY3RpdmUge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb250cmFzdC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSlbZm9jdXNlZF06OmFmdGVyLFxuICAgICAgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKTphY3RpdmU6OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMC43O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtkaXNhYmxlZF0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKVtmb2N1c2VkXTo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1tb250aC1jYWxlbmRhci1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLW1vbnRoLWNhbGVuZGFyLmpzJztcbiIsImNvbnN0IERFVl9NT0RFX0NPREVfUkVHRVhQID1cbiAgL1xcL1xcKlxcKlxccyt2YWFkaW4tZGV2LW1vZGU6c3RhcnQoW1xcc1xcU10qKXZhYWRpbi1kZXYtbW9kZTplbmRcXHMrXFwqXFwqXFwvL2k7XG5cbmNvbnN0IEZsb3dDbGllbnRzID0gd2luZG93LlZhYWRpbiAmJiB3aW5kb3cuVmFhZGluLkZsb3cgJiYgd2luZG93LlZhYWRpbi5GbG93LmNsaWVudHM7XG5cbmZ1bmN0aW9uIGlzTWluaWZpZWQoKSB7XG4gIGZ1bmN0aW9uIHRlc3QoKSB7XG4gICAgLyoqIHZhYWRpbi1kZXYtbW9kZTpzdGFydFxuICAgIHJldHVybiBmYWxzZTtcbiAgICB2YWFkaW4tZGV2LW1vZGU6ZW5kICoqL1xuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHJldHVybiB1bmNvbW1lbnRBbmRSdW4odGVzdCk7XG59XG5cbmZ1bmN0aW9uIGlzRGV2ZWxvcG1lbnRNb2RlKCkge1xuICB0cnkge1xuICAgIGlmIChpc0ZvcmNlZERldmVsb3BtZW50TW9kZSgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoIWlzTG9jYWxob3N0KCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAoRmxvd0NsaWVudHMpIHtcbiAgICAgIHJldHVybiAhaXNGbG93UHJvZHVjdGlvbk1vZGUoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIWlzTWluaWZpZWQoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIC8vIFNvbWUgZXJyb3IgaW4gdGhpcyBjb2RlLCBhc3N1bWUgcHJvZHVjdGlvbiBzbyBubyBmdXJ0aGVyIGFjdGlvbnMgd2lsbCBiZSB0YWtlblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0ZvcmNlZERldmVsb3BtZW50TW9kZSgpIHtcbiAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmFhZGluLmRldmVsb3BtZW50bW9kZS5mb3JjZVwiKTtcbn1cblxuZnVuY3Rpb24gaXNMb2NhbGhvc3QoKSB7XG4gIHJldHVybiAoW1wibG9jYWxob3N0XCIsXCIxMjcuMC4wLjFcIl0uaW5kZXhPZih3aW5kb3cubG9jYXRpb24uaG9zdG5hbWUpID49IDApO1xufVxuXG5mdW5jdGlvbiBpc0Zsb3dQcm9kdWN0aW9uTW9kZSgpIHtcbiAgaWYgKEZsb3dDbGllbnRzKSB7XG4gICAgY29uc3QgcHJvZHVjdGlvbk1vZGVBcHBzID0gT2JqZWN0LmtleXMoRmxvd0NsaWVudHMpXG4gICAgICAubWFwKGtleSA9PiBGbG93Q2xpZW50c1trZXldKVxuICAgICAgLmZpbHRlcihjbGllbnQgPT4gY2xpZW50LnByb2R1Y3Rpb25Nb2RlKTtcbiAgICBpZiAocHJvZHVjdGlvbk1vZGVBcHBzLmxlbmd0aCA+IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gZmFsc2U7XG59XG5cbmZ1bmN0aW9uIHVuY29tbWVudEFuZFJ1bihjYWxsYmFjaywgYXJncykge1xuICBpZiAodHlwZW9mIGNhbGxiYWNrICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgY29uc3QgbWF0Y2ggPSBERVZfTU9ERV9DT0RFX1JFR0VYUC5leGVjKGNhbGxiYWNrLnRvU3RyaW5nKCkpO1xuICBpZiAobWF0Y2gpIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVxdWlyZXMgQ1NQOiBzY3JpcHQtc3JjICd1bnNhZmUtZXZhbCdcbiAgICAgIGNhbGxiYWNrID0gbmV3IEZ1bmN0aW9uKG1hdGNoWzFdKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAvLyBlYXQgdGhlIGV4Y2VwdGlvblxuICAgICAgY29uc29sZS5sb2coJ3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yOiB1bmNvbW1lbnRBbmRSdW4oKSBmYWlsZWQnLCBlKVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBjYWxsYmFjayhhcmdzKTtcbn1cblxuLy8gQSBndWFyZCBhZ2FpbnN0IHBvbHltZXItbW9kdWxpemVyIHJlbW92aW5nIHRoZSB3aW5kb3cuVmFhZGluXG4vLyBpbml0aWFsaXphdGlvbiBhYm92ZS5cbndpbmRvd1snVmFhZGluJ10gPSB3aW5kb3dbJ1ZhYWRpbiddIHx8IHt9O1xuXG4vKipcbiAqIEluc3BlY3RzIHRoZSBzb3VyY2UgY29kZSBvZiB0aGUgZ2l2ZW4gYGNhbGxiYWNrYCBmdW5jdGlvbiBmb3JcbiAqIHNwZWNpYWxseS1tYXJrZWQgX2NvbW1lbnRlZF8gY29kZS4gSWYgc3VjaCBjb21tZW50ZWQgY29kZSBpcyBmb3VuZCBpbiB0aGVcbiAqIGNhbGxiYWNrIHNvdXJjZSwgdW5jb21tZW50cyBhbmQgcnVucyB0aGF0IGNvZGUgaW5zdGVhZCBvZiB0aGUgY2FsbGJhY2tcbiAqIGl0c2VsZi4gT3RoZXJ3aXNlIHJ1bnMgdGhlIGNhbGxiYWNrIGFzIGlzLlxuICpcbiAqIFRoZSBvcHRpb25hbCBhcmd1bWVudHMgYXJlIHBhc3NlZCBpbnRvIHRoZSBjYWxsYmFjayAvIHVuY29tbWVudGVkIGNvZGUsXG4gKiB0aGUgcmVzdWx0IGlzIHJldHVybmVkLlxuICpcbiAqIFNlZSB0aGUgYGlzTWluaWZpZWQoKWAgZnVuY3Rpb24gc291cmNlIGNvZGUgaW4gdGhpcyBmaWxlIGZvciBhbiBleGFtcGxlLlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IHJ1bklmRGV2ZWxvcG1lbnRNb2RlID0gZnVuY3Rpb24oY2FsbGJhY2ssIGFyZ3MpIHtcbiAgaWYgKHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlKSB7XG4gICAgcmV0dXJuIHVuY29tbWVudEFuZFJ1bihjYWxsYmFjaywgYXJncyk7XG4gIH1cbn07XG5cbmlmICh3aW5kb3cuVmFhZGluLmRldmVsb3BtZW50TW9kZSA9PT0gdW5kZWZpbmVkKSB7XG4gIHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlID0gaXNEZXZlbG9wbWVudE1vZGUoKTtcbn1cbiIsImltcG9ydCB7IGlkbGVQZXJpb2QgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9hc3luYy5qcyc7XG5pbXBvcnQgeyBEZWJvdW5jZXIgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9kZWJvdW5jZS5qcyc7XG5pbXBvcnQgeyBlbnF1ZXVlRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZmx1c2guanMnO1xuXG5pbXBvcnQgeyB1c2FnZVN0YXRpc3RpY3MgfSBmcm9tICdAdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLmpzJztcbmlmICghd2luZG93LlZhYWRpbikge1xuICB3aW5kb3dbJ1ZhYWRpbiddID0ge307XG59XG5cbi8qKlxuICogQXJyYXkgb2YgVmFhZGluIGN1c3RvbSBlbGVtZW50IGNsYXNzZXMgdGhhdCBoYXZlIGJlZW4gZmluYWxpemVkLlxuICovXG53aW5kb3dbJ1ZhYWRpbiddLnJlZ2lzdHJhdGlvbnMgPSB3aW5kb3cuVmFhZGluLnJlZ2lzdHJhdGlvbnMgfHwgW107XG5cbi8vIFVzZSB0aGUgaGFjayB0byBwcmV2ZW50IHBvbHltZXItbW9kdWxpemVyIGZyb20gY29udmVydGluZyB0byBleHBvcnRzXG53aW5kb3dbJ1ZhYWRpbiddLmRldmVsb3BtZW50TW9kZUNhbGxiYWNrID0gd2luZG93LlZhYWRpbi5kZXZlbG9wbWVudE1vZGVDYWxsYmFjayB8fCB7fTtcbndpbmRvd1snVmFhZGluJ10uZGV2ZWxvcG1lbnRNb2RlQ2FsbGJhY2tbJ3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzJ10gPSBmdW5jdGlvbigpIHtcbiAgaWYgKHVzYWdlU3RhdGlzdGljcykge1xuICAgIHVzYWdlU3RhdGlzdGljcygpO1xuICB9XG59O1xuXG5sZXQgc3RhdHNKb2I7XG5cbmNvbnN0IHJlZ2lzdGVyZWQgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogQHBvbHltZXJNaXhpblxuICovXG5leHBvcnQgY29uc3QgRWxlbWVudE1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBWYWFkaW5FbGVtZW50TWl4aW4gZXh0ZW5kcyBzdXBlckNsYXNzIHtcbiAgLyoqIEBwcm90ZWN0ZWQgKi9cbiAgc3RhdGljIGZpbmFsaXplKCkge1xuICAgIHN1cGVyLmZpbmFsaXplKCk7XG5cbiAgICBjb25zdCB7aXN9ID0gdGhpcztcblxuICAgIC8vIFJlZ2lzdGVycyBhIGNsYXNzIHByb3RvdHlwZSBmb3IgdGVsZW1ldHJ5IHB1cnBvc2VzLlxuICAgIGlmIChpcyAmJiAhcmVnaXN0ZXJlZC5oYXMoaXMpKSB7XG4gICAgICB3aW5kb3cuVmFhZGluLnJlZ2lzdHJhdGlvbnMucHVzaCh0aGlzKTtcbiAgICAgIHJlZ2lzdGVyZWQuYWRkKGlzKTtcblxuICAgICAgaWYgKHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlQ2FsbGJhY2spIHtcbiAgICAgICAgc3RhdHNKb2IgPSBEZWJvdW5jZXIuZGVib3VuY2Uoc3RhdHNKb2IsXG4gICAgICAgICAgaWRsZVBlcmlvZCwgKCkgPT4ge1xuICAgICAgICAgICAgd2luZG93LlZhYWRpbi5kZXZlbG9wbWVudE1vZGVDYWxsYmFja1sndmFhZGluLXVzYWdlLXN0YXRpc3RpY3MnXSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgKTtcbiAgICAgICAgZW5xdWV1ZURlYm91bmNlcihzdGF0c0pvYik7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gICAgaWYgKGRvY3VtZW50LmRvY3R5cGUgPT09IG51bGwpIHtcbiAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgJ1ZhYWRpbiBjb21wb25lbnRzIHJlcXVpcmUgdGhlIFwic3RhbmRhcmRzIG1vZGVcIiBkZWNsYXJhdGlvbi4gUGxlYXNlIGFkZCA8IURPQ1RZUEUgaHRtbD4gdG8gdGhlIEhUTUwgZG9jdW1lbnQuJ1xuICAgICAgKTtcbiAgICB9XG4gIH1cbn07XG4iLCJpbXBvcnQgJy4uL2ZvbnQtaWNvbnMuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtZmllbGQtYnV0dG9uXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICAvKiBUT0RPKHBsYXRvc2hhKTogYWxpZ24gaWNvbiBzaXplcyB3aXRoIG90aGVyIGVsZW1lbnRzICovXG4gICAgICBbcGFydFxcJD1cImJ1dHRvblwiXSB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgIHBhZGRpbmc6IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1pY29uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW3JlYWRvbmx5XSkpIFtwYXJ0XFwkPVwiYnV0dG9uXCJdIHtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtyZWFkb25seV0pKSBbcGFydFxcJD1cImJ1dHRvblwiXTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnRcXCQ9XCJidXR0b25cIl0sXG4gICAgICA6aG9zdChbcmVhZG9ubHldKSBbcGFydFxcJD1cImJ1dHRvblwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJjbGVhci1idXR0b25cIl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydFxcJD1cImJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwibWF0ZXJpYWwtaWNvbnNcIjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi4vY29sb3IuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtcmVxdWlyZWQtZmllbGRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDhweDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IC00cHg7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcbiAgICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDAgNzUlO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDAuNzUpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcmVxdWlyZWRdKSBbcGFydD1cImxhYmVsXCJdOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiICpcIjtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiAuNzVlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgLyogTWFyZ2luIHRoYXQgZG9lc27igJl0IHJlc2VydmUgc3BhY2Ugd2hlbiB0aGVyZeKAmXMgbm8gZXJyb3IgbWVzc2FnZSAqL1xuICAgICAgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdOm5vdCg6ZW1wdHkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgaGVpZ2h0OiA2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2ludmFsaWRdKSkgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgbWF4LWhlaWdodDogMDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSBbcGFydD1cImVycm9yLW1lc3NhZ2VcIl0ge1xuICAgICAgICBhbmltYXRpb246IHJldmVhbCAwLjJzO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIHJldmVhbCB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi5qcyc7XG5cbmltcG9ydCB7IENvbnRyb2xTdGF0ZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi5qcyc7XG5pbXBvcnQgeyB0aW1lT3V0IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwidmFhZGluLXRleHQtZmllbGQtc2hhcmVkLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxcXDIwMDNcIjtcbiAgICAgICAgd2lkdGg6IDA7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgLyogU2l6ZSBhbmQgcG9zaXRpb24gdGhpcyBlbGVtZW50IG9uIHRoZSBzYW1lIHZlcnRpY2FsIHBvc2l0aW9uIGFzIHRoZSBpbnB1dC1maWVsZCBlbGVtZW50XG4gICAgICAgICAgIHRvIG1ha2UgdmVydGljYWwgYWxpZ24gZm9yIHRoZSBob3N0IGVsZW1lbnQgd29yayBhcyBleHBlY3RlZCAqL1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGlkZGVuXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC52YWFkaW4tdGV4dC1maWVsZC1jb250YWluZXIsXG4gICAgICAudmFhZGluLXRleHQtYXJlYS1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtaW4td2lkdGg6IDEwMCU7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgd2lkdGg6IHZhcigtLXZhYWRpbi10ZXh0LWZpZWxkLWRlZmF1bHQtd2lkdGgsIDEyZW0pO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdOmVtcHR5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIC52YWFkaW4tdGV4dC1maWVsZC1jb250YWluZXIgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGZsZXgtZ3JvdzogMDtcbiAgICAgIH1cblxuICAgICAgLyogUmVzZXQgdGhlIG5hdGl2ZSBpbnB1dCBzdHlsZXMgKi9cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl0sXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSkge1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgZm9udDogaW5oZXJpdDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLyogRGlzYWJsZSBkZWZhdWx0IGludmFsaWQgc3R5bGUgaW4gRmlyZWZveCAqL1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl0sXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAvKiBTbG90dGVkIGJ5IHZhYWRpbi1zZWxlY3QtdGV4dC1maWVsZCAqL1xuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoW3BhcnQ9XCJ2YWx1ZVwiXSkge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSkge1xuICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl06Oi1tcy1jbGVhcixcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KTo6LW1zLWNsZWFyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl0ge1xuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIuKclVwiO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuXG5jb25zdCBIT1NUX1BST1BTID0ge1xuICBkZWZhdWx0OiBbJ2xpc3QnLCAnYXV0b2ZvY3VzJywgJ3BhdHRlcm4nLCAnYXV0b2NhcGl0YWxpemUnLCAnYXV0b2NvcnJlY3QnLCAnbWF4bGVuZ3RoJyxcbiAgICAnbWlubGVuZ3RoJywgJ25hbWUnLCAncGxhY2Vob2xkZXInLCAnYXV0b2NvbXBsZXRlJywgJ3RpdGxlJ10sXG4gIGFjY2Vzc2libGU6IFsnZGlzYWJsZWQnLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnaW52YWxpZCddXG59O1xuXG5jb25zdCBQUk9QX1RZUEUgPSB7XG4gIERFRkFVTFQ6ICdkZWZhdWx0JyxcbiAgQUNDRVNTSUJMRTogJ2FjY2Vzc2libGUnXG59O1xuXG5cbi8qKlxuICogQHBvbHltZXJNaXhpblxuICogQG1peGVzIFZhYWRpbi5Db250cm9sU3RhdGVNaXhpblxuICovXG5leHBvcnQgY29uc3QgVGV4dEZpZWxkTWl4aW4gPSBzdWJjbGFzcyA9PiBjbGFzcyBWYWFkaW5UZXh0RmllbGRNaXhpbiBleHRlbmRzIENvbnRyb2xTdGF0ZU1peGluKHN1YmNsYXNzKSB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBXaGV0aGVyIHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbCBjYW4gYmUgYXV0b21hdGljYWxseSBjb21wbGV0ZWQgYnkgdGhlIGJyb3dzZXIuXG4gICAgICAgKiBMaXN0IG9mIGF2YWlsYWJsZSBvcHRpb25zIGF0OlxuICAgICAgICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4vZG9jcy9XZWIvSFRNTC9FbGVtZW50L2lucHV0I2F0dHItYXV0b2NvbXBsZXRlXG4gICAgICAgKi9cbiAgICAgIGF1dG9jb21wbGV0ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBpcyBhIHByb3BlcnR5IHN1cHBvcnRlZCBieSBTYWZhcmkgdGhhdCBpcyB1c2VkIHRvIGNvbnRyb2wgd2hldGhlclxuICAgICAgICogYXV0b2NvcnJlY3Rpb24gc2hvdWxkIGJlIGVuYWJsZWQgd2hlbiB0aGUgdXNlciBpcyBlbnRlcmluZy9lZGl0aW5nIHRoZSB0ZXh0LlxuICAgICAgICogUG9zc2libGUgdmFsdWVzIGFyZTpcbiAgICAgICAqIG9uOiBFbmFibGUgYXV0b2NvcnJlY3Rpb24uXG4gICAgICAgKiBvZmY6IERpc2FibGUgYXV0b2NvcnJlY3Rpb24uXG4gICAgICAgKi9cbiAgICAgIGF1dG9jb3JyZWN0OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGlzIGEgcHJvcGVydHkgc3VwcG9ydGVkIGJ5IFNhZmFyaSBhbmQgQ2hyb21lIHRoYXQgaXMgdXNlZCB0byBjb250cm9sIHdoZXRoZXJcbiAgICAgICAqIGF1dG9jYXBpdGFsaXphdGlvbiBzaG91bGQgYmUgZW5hYmxlZCB3aGVuIHRoZSB1c2VyIGlzIGVudGVyaW5nL2VkaXRpbmcgdGhlIHRleHQuXG4gICAgICAgKiBQb3NzaWJsZSB2YWx1ZXMgYXJlOlxuICAgICAgICogY2hhcmFjdGVyczogQ2hhcmFjdGVycyBjYXBpdGFsaXphdGlvbi5cbiAgICAgICAqIHdvcmRzOiBXb3JkcyBjYXBpdGFsaXphdGlvbi5cbiAgICAgICAqIHNlbnRlbmNlczogU2VudGVuY2VzIGNhcGl0YWxpemF0aW9uLlxuICAgICAgICogbm9uZTogTm8gY2FwaXRhbGl6YXRpb24uXG4gICAgICAgKi9cbiAgICAgIGF1dG9jYXBpdGFsaXplOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTcGVjaWZ5IHRoYXQgdGhlIHZhbHVlIHNob3VsZCBiZSBhdXRvbWF0aWNhbGx5IHNlbGVjdGVkIHdoZW4gdGhlIGZpZWxkIGdhaW5zIGZvY3VzLlxuICAgICAgICovXG4gICAgICBhdXRvc2VsZWN0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNwbGF5IHRoZSBjbGVhciBpY29uIHdoaWNoIGNsZWFycyB0aGUgaW5wdXQuXG4gICAgICAgKi9cbiAgICAgIGNsZWFyQnV0dG9uVmlzaWJsZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRXJyb3IgdG8gc2hvdyB3aGVuIHRoZSBpbnB1dCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBlcnJvck1lc3NhZ2U6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJydcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogT2JqZWN0IHdpdGggdHJhbnNsYXRlZCBzdHJpbmdzIHVzZWQgZm9yIGxvY2FsaXphdGlvbi4gSGFzXG4gICAgICAgKiB0aGUgZm9sbG93aW5nIHN0cnVjdHVyZSBhbmQgZGVmYXVsdCB2YWx1ZXM6XG4gICAgICAgKlxuICAgICAgICogYGBgXG4gICAgICAgKiB7XG4gICAgICAgKiAgIC8vIFRyYW5zbGF0aW9uIG9mIHRoZSBjbGVhciBpY29uIGJ1dHRvbiBhY2Nlc3NpYmxlIGxhYmVsXG4gICAgICAgKiAgIGNsZWFyOiAnQ2xlYXInXG4gICAgICAgKiB9XG4gICAgICAgKiBgYGBcbiAgICAgICAqL1xuICAgICAgaTE4bjoge1xuICAgICAgICB0eXBlOiBPYmplY3QsXG4gICAgICAgIHZhbHVlOiAoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNsZWFyOiAnQ2xlYXInXG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTdHJpbmcgdXNlZCBmb3IgdGhlIGxhYmVsIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnLFxuICAgICAgICBvYnNlcnZlcjogJ19sYWJlbENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1heGltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgKGluIFVuaWNvZGUgY29kZSBwb2ludHMpIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyLlxuICAgICAgICovXG4gICAgICBtYXhsZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1pbmltdW0gbnVtYmVyIG9mIGNoYXJhY3RlcnMgKGluIFVuaWNvZGUgY29kZSBwb2ludHMpIHRoYXQgdGhlIHVzZXIgY2FuIGVudGVyLlxuICAgICAgICovXG4gICAgICBtaW5sZW5ndGg6IHtcbiAgICAgICAgdHlwZTogTnVtYmVyXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoZSBjb250cm9sLCB3aGljaCBpcyBzdWJtaXR0ZWQgd2l0aCB0aGUgZm9ybSBkYXRhLlxuICAgICAgICovXG4gICAgICBuYW1lOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIGhpbnQgdG8gdGhlIHVzZXIgb2Ygd2hhdCBjYW4gYmUgZW50ZXJlZCBpbiB0aGUgY29udHJvbC5cbiAgICAgICAqL1xuICAgICAgcGxhY2Vob2xkZXI6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgYXR0cmlidXRlIGluZGljYXRlcyB0aGF0IHRoZSB1c2VyIGNhbm5vdCBtb2RpZnkgdGhlIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICovXG4gICAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoYXQgdGhlIHVzZXIgbXVzdCBmaWxsIGluIGEgdmFsdWUuXG4gICAgICAgKi9cbiAgICAgIHJlcXVpcmVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBpbml0aWFsIHZhbHVlIG9mIHRoZSBjb250cm9sLlxuICAgICAgICogSXQgY2FuIGJlIHVzZWQgZm9yIHR3by13YXkgZGF0YSBiaW5kaW5nLlxuICAgICAgICovXG4gICAgICB2YWx1ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfdmFsdWVDaGFuZ2VkJyxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgcHJvcGVydHkgaXMgc2V0IHRvIHRydWUgd2hlbiB0aGUgY29udHJvbCB2YWx1ZSBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBpbnZhbGlkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoYXQgdGhlIHRleHQgZmllbGQgaGFzIHZhbHVlLlxuICAgICAgICovXG4gICAgICBoYXNWYWx1ZToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogV2hlbiBzZXQgdG8gdHJ1ZSwgdXNlciBpcyBwcmV2ZW50ZWQgZnJvbSB0eXBpbmcgYSB2YWx1ZSB0aGF0XG4gICAgICAgKiBjb25mbGljdHMgd2l0aCB0aGUgZ2l2ZW4gYHBhdHRlcm5gLlxuICAgICAgICovXG4gICAgICBwcmV2ZW50SW52YWxpZElucHV0OiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW5cbiAgICAgIH0sXG5cbiAgICAgIF9sYWJlbElkOiBTdHJpbmcsXG5cbiAgICAgIF9lcnJvcklkOiBTdHJpbmcsXG5cbiAgICAgIF9pbnB1dElkOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFsnX3N0YXRlQ2hhbmdlZChkaXNhYmxlZCwgcmVhZG9ubHksIGNsZWFyQnV0dG9uVmlzaWJsZSwgaGFzVmFsdWUpJyxcbiAgICAgICdfaG9zdFByb3BzQ2hhbmdlZCgnICsgSE9TVF9QUk9QUy5kZWZhdWx0LmpvaW4oJywgJykgKyAnKScsXG4gICAgICAnX2hvc3RBY2Nlc3NpYmxlUHJvcHNDaGFuZ2VkKCcgKyBIT1NUX1BST1BTLmFjY2Vzc2libGUuam9pbignLCAnKSArICcpJyxcbiAgICAgICdfZ2V0QWN0aXZlRXJyb3JJZChpbnZhbGlkLCBlcnJvck1lc3NhZ2UsIF9lcnJvcklkKScsXG4gICAgICAnX2dldEFjdGl2ZUxhYmVsSWQobGFiZWwsIF9sYWJlbElkLCBfaW5wdXRJZCknLFxuICAgICAgJ19fb2JzZXJ2ZU9mZnNldEhlaWdodChlcnJvck1lc3NhZ2UsIGludmFsaWQsIGxhYmVsKSdcbiAgICBdO1xuICB9XG5cbiAgZ2V0IGZvY3VzRWxlbWVudCgpIHtcbiAgICBpZiAoIXRoaXMuc2hhZG93Um9vdCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBzbG90dGVkID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAke3RoaXMuX3Nsb3R0ZWRUYWdOYW1lfVtzbG90PVwiJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1cIl1gKTtcbiAgICBpZiAoc2xvdHRlZCkge1xuICAgICAgcmV0dXJuIHNsb3R0ZWQ7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW3BhcnQ9XCJ2YWx1ZVwiXScpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBnZXQgaW5wdXRFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmZvY3VzRWxlbWVudDtcbiAgfVxuXG4gIGdldCBfc2xvdHRlZFRhZ05hbWUoKSB7XG4gICAgcmV0dXJuICdpbnB1dCc7XG4gIH1cblxuICBfY3JlYXRlQ29uc3RyYWludHNPYnNlcnZlcigpIHtcbiAgICAvLyBUaGlzIGNvbXBsZXggb2JzZXJ2ZXIgbmVlZHMgdG8gYmUgYWRkZWQgZHluYW1pY2FsbHkgaGVyZSAoaW5zdGVhZCBvZiBkZWZpbmluZyBpdCBhYm92ZSBpbiB0aGUgYGdldCBvYnNlcnZlcnMoKWApXG4gICAgLy8gc28gdGhhdCBpdCBydW5zIGFmdGVyIGNvbXBsZXggb2JzZXJ2ZXJzIG9mIGluaGVyaXRpbmcgY2xhc3Nlcy4gT3RoZXJ3aXNlIGUuZy4gYF9zdGVwT3JNaW5DaGFuZ2VkKClgIG9ic2VydmVyIG9mXG4gICAgLy8gdmFhZGluLW51bWJlci1maWVsZCB3b3VsZCBydW4gYWZ0ZXIgdGhpcyBhbmQgdGhlIGBtaW5gIGFuZCBgc3RlcGAgcHJvcGVydGllcyB3b3VsZCBub3QgeWV0IGJlIHByb3BhZ2F0ZWQgdG9cbiAgICAvLyB0aGUgYGlucHV0RWxlbWVudGAgd2hlbiB0aGlzIHJ1bnMuXG4gICAgdGhpcy5fY3JlYXRlTWV0aG9kT2JzZXJ2ZXIoJ19jb25zdHJhaW50c0NoYW5nZWQocmVxdWlyZWQsIG1pbmxlbmd0aCwgbWF4bGVuZ3RoLCBwYXR0ZXJuKScpO1xuICB9XG5cbiAgX29uSW5wdXQoZSkge1xuICAgIGlmICh0aGlzLl9fcHJldmVudElucHV0KSB7XG4gICAgICBlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgdGhpcy5fX3ByZXZlbnRJbnB1dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnByZXZlbnRJbnZhbGlkSW5wdXQpIHtcbiAgICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dEVsZW1lbnQ7XG4gICAgICBpZiAoaW5wdXQudmFsdWUubGVuZ3RoID4gMCAmJiAhdGhpcy5jaGVja1ZhbGlkaXR5KCkpIHtcbiAgICAgICAgaW5wdXQudmFsdWUgPSB0aGlzLnZhbHVlIHx8ICcnO1xuICAgICAgICAvLyBhZGQgaW5wdXQtcHJldmVudGVkIGF0dHJpYnV0ZSBmb3IgMjAwbXNcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2lucHV0LXByZXZlbnRlZCcsICcnKTtcbiAgICAgICAgdGhpcy5faW5wdXREZWJvdW5jZXIgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICAgICAgdGhpcy5faW5wdXREZWJvdW5jZXIsXG4gICAgICAgICAgdGltZU91dC5hZnRlcigyMDApLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaW5wdXQtcHJldmVudGVkJyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoIWUuX19mcm9tQ2xlYXJCdXR0b24pIHtcbiAgICAgIHRoaXMuX191c2VySW5wdXQgPSB0cnVlO1xuICAgIH1cbiAgICB0aGlzLnZhbHVlID0gZS50YXJnZXQudmFsdWU7XG4gIH1cblxuICAvLyBOT1RFKHl1cml5KTogV29ya2Fyb3VuZCBuZWVkZWQgZm9yIElFMTEgYW5kIEVkZ2UgZm9yIHByb3BlciBkaXNwbGF5aW5nXG4gIC8vIG9mIHRoZSBjbGVhciBidXR0b24gaW5zdGVhZCBvZiBzZXR0aW5nIGRpc3BsYXkgcHJvcGVydHkgZm9yIGl0IGRlcGVuZGluZyBvbiBzdGF0ZS5cbiAgX3N0YXRlQ2hhbmdlZChkaXNhYmxlZCwgcmVhZG9ubHksIGNsZWFyQnV0dG9uVmlzaWJsZSwgaGFzVmFsdWUpIHtcbiAgICBpZiAoIWRpc2FibGVkICYmXG4gICAgICAgICFyZWFkb25seSAmJlxuICAgICAgICBjbGVhckJ1dHRvblZpc2libGUgJiZcbiAgICAgICAgaGFzVmFsdWVcbiAgICApIHtcbiAgICAgIHRoaXMuJC5jbGVhckJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLiQuY2xlYXJCdXR0b24uc2V0QXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICB9XG4gIH1cblxuICBfb25DaGFuZ2UoZSkge1xuICAgIGlmICh0aGlzLl92YWx1ZUNsZWFyaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gSW4gdGhlIFNoYWRvdyBET00sIHRoZSBgY2hhbmdlYCBldmVudCBpcyBub3QgbGVha2VkIGludG8gdGhlXG4gICAgLy8gYW5jZXN0b3IgdHJlZSwgc28gd2UgbXVzdCBkbyB0aGlzIG1hbnVhbGx5LlxuICAgIGNvbnN0IGNoYW5nZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7XG4gICAgICBkZXRhaWw6IHtcbiAgICAgICAgc291cmNlRXZlbnQ6IGVcbiAgICAgIH0sXG4gICAgICBidWJibGVzOiBlLmJ1YmJsZXMsXG4gICAgICBjYW5jZWxhYmxlOiBlLmNhbmNlbGFibGUsXG4gICAgfSk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIF92YWx1ZUNoYW5nZWQobmV3VmFsLCBvbGRWYWwpIHtcbiAgICAvLyBzZXR0aW5nIGluaXRpYWwgdmFsdWUgdG8gZW1wdHkgc3RyaW5nLCBza2lwIHZhbGlkYXRpb25cbiAgICBpZiAobmV3VmFsID09PSAnJyAmJiBvbGRWYWwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChuZXdWYWwgIT09ICcnICYmIG5ld1ZhbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLmhhc1ZhbHVlID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5oYXNWYWx1ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9fdXNlcklucHV0KSB7XG4gICAgICB0aGlzLl9fdXNlcklucHV0ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfSBlbHNlIGlmIChuZXdWYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSBuZXdWYWw7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsdWUgPSB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9ICcnO1xuICAgIH1cblxuICAgIGlmICh0aGlzLmludmFsaWQpIHtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICBfbGFiZWxDaGFuZ2VkKGxhYmVsKSB7XG4gICAgaWYgKGxhYmVsICE9PSAnJyAmJiBsYWJlbCAhPSBudWxsKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaGFzLWxhYmVsJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnaGFzLWxhYmVsJyk7XG4gICAgfVxuICB9XG5cbiAgX29uU2xvdENoYW5nZSgpIHtcbiAgICBjb25zdCBzbG90dGVkID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAke3RoaXMuX3Nsb3R0ZWRUYWdOYW1lfVtzbG90PVwiJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1cIl1gKTtcblxuICAgIGlmICh0aGlzLnZhbHVlKSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC52YWx1ZSA9IHRoaXMudmFsdWU7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuXG4gICAgaWYgKHNsb3R0ZWQgJiYgIXRoaXMuX3Nsb3R0ZWRJbnB1dCkge1xuICAgICAgdGhpcy5fdmFsaWRhdGVTbG90dGVkVmFsdWUoc2xvdHRlZCk7XG4gICAgICB0aGlzLl9hZGRJbnB1dExpc3RlbmVycyhzbG90dGVkKTtcbiAgICAgIHRoaXMuX2FkZElFTGlzdGVuZXJzKHNsb3R0ZWQpO1xuICAgICAgdGhpcy5fc2xvdHRlZElucHV0ID0gc2xvdHRlZDtcbiAgICB9IGVsc2UgaWYgKCFzbG90dGVkICYmIHRoaXMuX3Nsb3R0ZWRJbnB1dCkge1xuICAgICAgdGhpcy5fcmVtb3ZlSW5wdXRMaXN0ZW5lcnModGhpcy5fc2xvdHRlZElucHV0KTtcbiAgICAgIHRoaXMuX3JlbW92ZUlFTGlzdGVuZXJzKHRoaXMuX3Nsb3R0ZWRJbnB1dCk7XG4gICAgICB0aGlzLl9zbG90dGVkSW5wdXQgPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgT2JqZWN0LmtleXMoUFJPUF9UWVBFKS5tYXAoa2V5ID0+IFBST1BfVFlQRVtrZXldKS5mb3JFYWNoKHR5cGUgPT5cbiAgICAgIHRoaXMuX3Byb3BhZ2F0ZUhvc3RBdHRyaWJ1dGVzKEhPU1RfUFJPUFNbdHlwZV0ubWFwKGF0dHIgPT4gdGhpc1thdHRyXSksIHR5cGUpKTtcbiAgfVxuXG4gIF9ob3N0UHJvcHNDaGFuZ2VkKC4uLmF0dHJpYnV0ZXNWYWx1ZXMpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVIb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzVmFsdWVzLCBQUk9QX1RZUEUuREVGQVVMVCk7XG4gIH1cblxuICBfaG9zdEFjY2Vzc2libGVQcm9wc0NoYW5nZWQoLi4uYXR0cmlidXRlc1ZhbHVlcykge1xuICAgIHRoaXMuX3Byb3BhZ2F0ZUhvc3RBdHRyaWJ1dGVzKGF0dHJpYnV0ZXNWYWx1ZXMsIFBST1BfVFlQRS5BQ0NFU1NJQkxFKTtcbiAgfVxuXG4gIF92YWxpZGF0ZVNsb3R0ZWRWYWx1ZShzbG90dGVkKSB7XG4gICAgaWYgKHNsb3R0ZWQudmFsdWUgIT09IHRoaXMudmFsdWUpIHtcbiAgICAgIGNvbnNvbGUud2FybignUGxlYXNlIGRlZmluZSB2YWx1ZSBvbiB0aGUgdmFhZGluLXRleHQtZmllbGQgY29tcG9uZW50IScpO1xuICAgICAgc2xvdHRlZC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgfVxuXG4gIF9wcm9wYWdhdGVIb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzVmFsdWVzLCB0eXBlKSB7XG4gICAgY29uc3QgaW5wdXQgPSB0aGlzLmlucHV0RWxlbWVudDtcbiAgICBjb25zdCBhdHRyaWJ1dGVOYW1lcyA9IEhPU1RfUFJPUFNbdHlwZV07XG5cbiAgICBpZiAodHlwZSA9PT0gJ2FjY2Vzc2libGUnKSB7XG4gICAgICBhdHRyaWJ1dGVOYW1lcy5mb3JFYWNoKChhdHRyLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRPclRvZ2dsZUF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzVmFsdWVzW2luZGV4XSwgaW5wdXQpO1xuICAgICAgICB0aGlzLl9zZXRPclRvZ2dsZUF0dHJpYnV0ZShgYXJpYS0ke2F0dHJ9YCwgYXR0cmlidXRlc1ZhbHVlc1tpbmRleF0sIGlucHV0KTtcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhdHRyaWJ1dGVOYW1lcy5mb3JFYWNoKChhdHRyLCBpbmRleCkgPT4ge1xuICAgICAgICB0aGlzLl9zZXRPclRvZ2dsZUF0dHJpYnV0ZShhdHRyLCBhdHRyaWJ1dGVzVmFsdWVzW2luZGV4XSwgaW5wdXQpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX3NldE9yVG9nZ2xlQXR0cmlidXRlKG5hbWUsIHZhbHVlLCBub2RlKSB7XG4gICAgaWYgKCFuYW1lIHx8ICFub2RlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICBub2RlLnNldEF0dHJpYnV0ZShuYW1lLCAodHlwZW9mIHZhbHVlID09PSAnYm9vbGVhbicpID8gJycgOiB2YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5vZGUucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xuICAgIH1cbiAgfVxuXG4gIF9jb25zdHJhaW50c0NoYW5nZWQocmVxdWlyZWQsIG1pbmxlbmd0aCwgbWF4bGVuZ3RoLCBwYXR0ZXJuKSB7XG4gICAgaWYgKCF0aGlzLmludmFsaWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIXJlcXVpcmVkICYmICFtaW5sZW5ndGggJiYgIW1heGxlbmd0aCAmJiAhcGF0dGVybikge1xuICAgICAgdGhpcy5pbnZhbGlkID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IGlucHV0IHZhbHVlIHNhdGlzZmllcyBhbGwgY29uc3RyYWludHMgKGlmIGFueSlcbiAgICogQHJldHVybnMge2Jvb2xlYW59XG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KCkge1xuICAgIGlmICh0aGlzLnJlcXVpcmVkIHx8IHRoaXMucGF0dGVybiB8fCB0aGlzLm1heGxlbmd0aCB8fCB0aGlzLm1pbmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHRoaXMuaW5wdXRFbGVtZW50LmNoZWNrVmFsaWRpdHkoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuICF0aGlzLmludmFsaWQ7XG4gICAgfVxuICB9XG5cbiAgX2FkZElucHV0TGlzdGVuZXJzKG5vZGUpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fYm91bmRPbklucHV0KTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIHRoaXMuX2JvdW5kT25DaGFuZ2UpO1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX2JvdW5kT25CbHVyKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5fYm91bmRPbkZvY3VzKTtcbiAgfVxuXG4gIF9yZW1vdmVJbnB1dExpc3RlbmVycyhub2RlKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25JbnB1dCk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZE9uQmx1cik7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JvdW5kT25Gb2N1cyk7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgdGhpcy5fY3JlYXRlQ29uc3RyYWludHNPYnNlcnZlcigpO1xuXG4gICAgdGhpcy5fYm91bmRPbklucHV0ID0gdGhpcy5fb25JbnB1dC5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT25DaGFuZ2UgPSB0aGlzLl9vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT25CbHVyID0gdGhpcy5fb25CbHVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPbkZvY3VzID0gdGhpcy5fb25Gb2N1cy5iaW5kKHRoaXMpO1xuXG4gICAgY29uc3QgZGVmYXVsdElucHV0ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwidmFsdWVcIl0nKTtcbiAgICB0aGlzLl9zbG90dGVkSW5wdXQgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoYCR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9W3Nsb3Q9XCIke3RoaXMuX3Nsb3R0ZWRUYWdOYW1lfVwiXWApO1xuICAgIHRoaXMuX2FkZElucHV0TGlzdGVuZXJzKGRlZmF1bHRJbnB1dCk7XG4gICAgdGhpcy5fYWRkSUVMaXN0ZW5lcnMoZGVmYXVsdElucHV0KTtcbiAgICBpZiAodGhpcy5fc2xvdHRlZElucHV0KSB7XG4gICAgICB0aGlzLl9hZGRJRUxpc3RlbmVycyh0aGlzLl9zbG90dGVkSW5wdXQpO1xuICAgICAgdGhpcy5fYWRkSW5wdXRMaXN0ZW5lcnModGhpcy5fc2xvdHRlZElucHV0KTtcbiAgICB9XG5cbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW25hbWU9XCJpbnB1dFwiXSwgW25hbWU9XCJ0ZXh0YXJlYVwiXScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignc2xvdGNoYW5nZScsIHRoaXMuX29uU2xvdENoYW5nZS5iaW5kKHRoaXMpKTtcblxuICAgIGlmICghKHdpbmRvdy5TaGFkeUNTUyAmJiB3aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzKSkge1xuICAgICAgdGhpcy51cGRhdGVTdHlsZXMoKTtcbiAgICB9XG5cbiAgICB0aGlzLiQuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKCkgPT4gdGhpcy5fdmFsdWVDbGVhcmluZyA9IHRydWUpO1xuICAgIHRoaXMuJC5jbGVhckJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4gdGhpcy5fdmFsdWVDbGVhcmluZyA9IGZhbHNlKTtcbiAgICB0aGlzLiQuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLl9vbkNsZWFyQnV0dG9uQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fb25LZXlEb3duLmJpbmQodGhpcykpO1xuXG4gICAgdmFyIHVuaXF1ZUlkID0gVGV4dEZpZWxkTWl4aW4uX3VuaXF1ZUlkID0gMSArIFRleHRGaWVsZE1peGluLl91bmlxdWVJZCB8fCAwO1xuICAgIHRoaXMuX2Vycm9ySWQgPSBgJHt0aGlzLmNvbnN0cnVjdG9yLmlzfS1lcnJvci0ke3VuaXF1ZUlkfWA7XG4gICAgdGhpcy5fbGFiZWxJZCA9IGAke3RoaXMuY29uc3RydWN0b3IuaXN9LWxhYmVsLSR7dW5pcXVlSWR9YDtcbiAgICB0aGlzLl9pbnB1dElkID0gYCR7dGhpcy5jb25zdHJ1Y3Rvci5pc30taW5wdXQtJHt1bmlxdWVJZH1gO1xuXG4gICAgLy8gTHVtbyB0aGVtZSBkZWZpbmVzIGEgbWF4LWhlaWdodCB0cmFuc2l0aW9uIGZvciB0aGUgXCJlcnJvci1tZXNzYWdlXCJcbiAgICAvLyBwYXJ0IG9uIGludmFsaWQgc3RhdGUgY2hhbmdlLlxuICAgIHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbcGFydD1cImVycm9yLW1lc3NhZ2VcIl0nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgIHRoaXMuX19vYnNlcnZlT2Zmc2V0SGVpZ2h0KCk7XG4gICAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRydWUgaWYgYHZhbHVlYCBpcyB2YWxpZC5cbiAgICogYDxpcm9uLWZvcm0+YCB1c2VzIHRoaXMgdG8gY2hlY2sgdGhlIHZhbGlkaXR5IGZvciBhbGwgaXRzIGVsZW1lbnRzLlxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICovXG4gIHZhbGlkYXRlKCkge1xuICAgIHJldHVybiAhKHRoaXMuaW52YWxpZCA9ICF0aGlzLmNoZWNrVmFsaWRpdHkoKSk7XG4gIH1cblxuICBjbGVhcigpIHtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIH1cblxuICBfb25CbHVyKCkge1xuICAgIHRoaXMudmFsaWRhdGUoKTtcbiAgfVxuXG4gIF9vbkZvY3VzKCkge1xuICAgIGlmICh0aGlzLmF1dG9zZWxlY3QpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNlbGVjdCgpO1xuICAgICAgLy8gaU9TIDkgd29ya2Fyb3VuZDogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9hLzc0MzY1NzRcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnNldFNlbGVjdGlvblJhbmdlKDAsIDk5OTkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gVGhlIHdvcmthcm91bmQgbWF5IGNhdXNlIGVycm9ycyBvbiBkaWZmZXJlbnQgaW5wdXQgdHlwZXMuXG4gICAgICAgICAgLy8gTmVlZHMgdG8gYmUgc3VwcHJlc3NlZC4gU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vZmxvdy9pc3N1ZXMvNjA3MFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBfb25DbGVhckJ1dHRvbkNsaWNrKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gTk9URSh5dXJpeSk6IFRoaXMgbGluZSB3b24ndCBhZmZlY3QgZm9jdXMgb24gdGhlIGhvc3QuIENhbm5vdCBiZSBwcm9wZXJseSB0ZXN0ZWQuXG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB0aGlzLmNsZWFyKCk7XG4gICAgdGhpcy5fdmFsdWVDbGVhcmluZyA9IGZhbHNlO1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LykpIHtcbiAgICAgIC8vIERpc2FibGUgSUUgaW5wdXRcIiBldmVudCBwcmV2ZW50aW9uIGhlcmUsIHdlIHdhbnQgdGhlIGlucHV0IGV2ZW50IGZyb21cbiAgICAgIC8vIGJlbG93IHRvIHByb3BhZ2F0ZSBub3JtYWxseS5cbiAgICAgIHRoaXMuX19wcmV2ZW50SW5wdXQgPSBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgaW5wdXRFdmVudCA9IG5ldyBFdmVudCgnaW5wdXQnLCB7YnViYmxlczogdHJ1ZSwgY29tcG9zZWQ6IHRydWV9KTtcbiAgICBpbnB1dEV2ZW50Ll9fZnJvbUNsZWFyQnV0dG9uID0gdHJ1ZTtcbiAgICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBFdmVudCgnY2hhbmdlJywge2J1YmJsZXM6ICF0aGlzLl9zbG90dGVkSW5wdXR9KTtcbiAgICBjaGFuZ2VFdmVudC5fX2Zyb21DbGVhckJ1dHRvbiA9IHRydWU7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZGlzcGF0Y2hFdmVudChpbnB1dEV2ZW50KTtcbiAgICB0aGlzLmlucHV0RWxlbWVudC5kaXNwYXRjaEV2ZW50KGNoYW5nZUV2ZW50KTtcbiAgfVxuXG4gIF9vbktleURvd24oZSkge1xuICAgIGlmIChlLmtleUNvZGUgPT09IDI3ICYmIHRoaXMuY2xlYXJCdXR0b25WaXNpYmxlKSB7XG4gICAgICBjb25zdCBkaXNwYXRjaENoYW5nZSA9ICEhdGhpcy52YWx1ZTtcbiAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgIGRpc3BhdGNoQ2hhbmdlICYmIHRoaXMuaW5wdXRFbGVtZW50LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnLCB7YnViYmxlczogIXRoaXMuX3Nsb3R0ZWRJbnB1dH0pKTtcbiAgICB9XG4gIH1cblxuICBfYWRkSUVMaXN0ZW5lcnMobm9kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LykpIHtcbiAgICAgIC8vIElFMTEgZGlzcGF0Y2hlcyBgaW5wdXRgIGV2ZW50IGluIGZvbGxvd2luZyBjYXNlczpcbiAgICAgIC8vIC0gZm9jdXMgb3IgYmx1ciwgd2hlbiBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgaXMgc2V0XG4gICAgICAvLyAtIHBsYWNlaG9sZGVyIGF0dHJpYnV0ZSB2YWx1ZSBjaGFuZ2VkXG4gICAgICAvLyBodHRwczovL2RldmVsb3Blci5taWNyb3NvZnQuY29tL2VuLXVzL21pY3Jvc29mdC1lZGdlL3BsYXRmb3JtL2lzc3Vlcy8xMDEyMjAvXG4gICAgICB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX19wcmV2ZW50SW5wdXQgPSB0cnVlO1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHRoaXMuX19wcmV2ZW50SW5wdXQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICB9O1xuICAgICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5fc2hvdWxkUHJldmVudElucHV0KTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgICAgdGhpcy5fY3JlYXRlUHJvcGVydHlPYnNlcnZlcigncGxhY2Vob2xkZXInLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIF9yZW1vdmVJRUxpc3RlbmVycyhub2RlKSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKG5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL1RyaWRlbnQvKSkge1xuICAgICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1c2luJywgdGhpcy5fc2hvdWxkUHJldmVudElucHV0KTtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCB0aGlzLl9zaG91bGRQcmV2ZW50SW5wdXQpO1xuICAgIH1cbiAgfVxuXG4gIF9nZXRBY3RpdmVFcnJvcklkKGludmFsaWQsIGVycm9yTWVzc2FnZSwgZXJyb3JJZCkge1xuICAgIHRoaXMuX3NldE9yVG9nZ2xlQXR0cmlidXRlKCdhcmlhLWRlc2NyaWJlZGJ5JyxcbiAgICAgIChlcnJvck1lc3NhZ2UgJiYgaW52YWxpZCA/IGVycm9ySWQgOiB1bmRlZmluZWQpLFxuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQpO1xuICB9XG5cbiAgX2dldEFjdGl2ZUxhYmVsSWQobGFiZWwsIF9sYWJlbElkLCBfaW5wdXRJZCkge1xuICAgIGxldCBpZHMgPSBfaW5wdXRJZDtcbiAgICBpZiAobGFiZWwpIHtcbiAgICAgIGlkcyA9IGAke19sYWJlbElkfSAke19pbnB1dElkfWA7XG4gICAgfVxuICAgIHRoaXMuZm9jdXNFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgaWRzKTtcbiAgfVxuXG4gIF9nZXRFcnJvck1lc3NhZ2VBcmlhSGlkZGVuKGludmFsaWQsIGVycm9yTWVzc2FnZSwgZXJyb3JJZCkge1xuICAgIHJldHVybiAoIShlcnJvck1lc3NhZ2UgJiYgaW52YWxpZCA/IGVycm9ySWQgOiB1bmRlZmluZWQpKS50b1N0cmluZygpO1xuICB9XG5cbiAgX2Rpc3BhdGNoSXJvblJlc2l6ZUV2ZW50SWZOZWVkZWQoc2l6ZVByb3BlcnR5TmFtZSwgdmFsdWUpIHtcbiAgICBjb25zdCBwcmV2aW91c1NpemVQcm9wZXJ0eU5hbWUgPSAnX19wcmV2aW91cycgKyBzaXplUHJvcGVydHlOYW1lO1xuICAgIGlmICh0aGlzW3ByZXZpb3VzU2l6ZVByb3BlcnR5TmFtZV0gIT09IHVuZGVmaW5lZFxuICAgICAgICAmJiB0aGlzW3ByZXZpb3VzU2l6ZVByb3BlcnR5TmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgIG5ldyBDdXN0b21FdmVudCgnaXJvbi1yZXNpemUnLCB7YnViYmxlczogdHJ1ZX0pXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXNbcHJldmlvdXNTaXplUHJvcGVydHlOYW1lXSA9IHZhbHVlO1xuICB9XG5cbiAgX19vYnNlcnZlT2Zmc2V0SGVpZ2h0KCkge1xuICAgIHRoaXMuX2Rpc3BhdGNoSXJvblJlc2l6ZUV2ZW50SWZOZWVkZWQoJ0hlaWdodCcsIHRoaXMub2Zmc2V0SGVpZ2h0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2socHJvcCwgb2xkVmFsLCBuZXdWYWwpIHtcbiAgICBzdXBlci5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2socHJvcCwgb2xkVmFsLCBuZXdWYWwpO1xuICAgIC8vIE5lZWRlZCB1bnRpbCBFZGdlIGhhcyBDU1MgQ3VzdG9tIFByb3BlcnRpZXMgKHByZXNlbnQgaW4gRWRnZSBQcmV2aWV3KVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmICghKHdpbmRvdy5TaGFkeUNTUyAmJiB3aW5kb3cuU2hhZHlDU1MubmF0aXZlQ3NzKSAmJlxuICAgICAgL14oZm9jdXNlZHxmb2N1cy1yaW5nfGludmFsaWR8ZGlzYWJsZWR8cGxhY2Vob2xkZXJ8aGFzLXZhbHVlKSQvLnRlc3QocHJvcCkpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgLy8gU2FmYXJpIGhhcyBhbiBpc3N1ZSB3aXRoIHJlcGFpbnRpbmcgc2hhZG93IHJvb3QgZWxlbWVudCBzdHlsZXMgd2hlbiBhIGhvc3QgYXR0cmlidXRlIGNoYW5nZXMuXG4gICAgLy8gTmVlZCB0aGlzIHdvcmthcm91bmQgKHRvZ2dsZSBhbnkgaW5saW5lIGNzcyBwcm9wZXJ0eSBvbiBhbmQgb2ZmKSB1bnRpbCB0aGUgaXNzdWUgZ2V0cyBmaXhlZC5cbiAgICBjb25zdCBpc1NhZmFyaSA9IC9eKCg/IWNocm9tZXxhbmRyb2lkKS4pKnNhZmFyaS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCk7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIGlmICovXG4gICAgaWYgKGlzU2FmYXJpICYmIHRoaXMucm9vdCkge1xuICAgICAgY29uc3QgV0VCS0lUX1BST1BFUlRZID0gJy13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eSc7XG4gICAgICB0aGlzLnJvb3QucXVlcnlTZWxlY3RvckFsbCgnKicpLmZvckVhY2goZWwgPT4ge1xuICAgICAgICBlbC5zdHlsZVtXRUJLSVRfUFJPUEVSVFldID0gJ3Zpc2libGUnO1xuICAgICAgICBlbC5zdHlsZVtXRUJLSVRfUFJPUEVSVFldID0gJyc7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgdXNlciBjb21taXRzIGEgdmFsdWUgY2hhbmdlLlxuICAgKlxuICAgKiBAZXZlbnQgY2hhbmdlXG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSB2YWx1ZSBpcyBjaGFuZ2VkIGJ5IHRoZSB1c2VyOiBvbiBldmVyeSB0eXBpbmcga2V5c3Ryb2tlLFxuICAgKiBhbmQgdGhlIHZhbHVlIGlzIGNsZWFyZWQgdXNpbmcgdGhlIGNsZWFyIGJ1dHRvbi5cbiAgICpcbiAgICogQGV2ZW50IGlucHV0XG4gICAqL1xuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBzaXplIG9mIHRoZSBlbGVtZW50IGNoYW5nZXMuXG4gICAqXG4gICAqIEBldmVudCBpcm9uLXJlc2l6ZVxuICAgKi9cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgVGV4dEZpZWxkTWl4aW4gfSBmcm9tICcuL3ZhYWRpbi10ZXh0LWZpZWxkLW1peGluLmpzJztcbmltcG9ydCB7IEVsZW1lbnRNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWVsZW1lbnQtbWl4aW4vdmFhZGluLWVsZW1lbnQtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuLyoqXG4gKiBgPHZhYWRpbi10ZXh0LWZpZWxkPmAgaXMgYSBXZWIgQ29tcG9uZW50IGZvciB0ZXh0IGZpZWxkIGNvbnRyb2wgaW4gZm9ybXMuXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi10ZXh0LWZpZWxkIGxhYmVsPVwiRmlyc3QgTmFtZVwiPlxuICogPC92YWFkaW4tdGV4dC1maWVsZD5cbiAqIGBgYFxuICpcbiAqICMjIyBQcmVmaXhlcyBhbmQgc3VmZml4ZXNcbiAqXG4gKiBUaGVzZSBhcmUgY2hpbGQgZWxlbWVudHMgb2YgYSBgPHZhYWRpbi10ZXh0LWZpZWxkPmAgdGhhdCBhcmUgZGlzcGxheWVkXG4gKiBpbmxpbmUgd2l0aCB0aGUgaW5wdXQsIGJlZm9yZSBvciBhZnRlci5cbiAqIEluIG9yZGVyIGZvciBhbiBlbGVtZW50IHRvIGJlIGNvbnNpZGVyZWQgYXMgYSBwcmVmaXgsIGl0IG11c3QgaGF2ZSB0aGUgc2xvdFxuICogYXR0cmlidXRlIHNldCB0byBgcHJlZml4YCAoYW5kIHNpbWlsYXJseSBmb3IgYHN1ZmZpeGApLlxuICpcbiAqIGBgYGh0bWxcbiAqIDx2YWFkaW4tdGV4dC1maWVsZCBsYWJlbD1cIkVtYWlsIGFkZHJlc3NcIj5cbiAqICAgPGRpdiBzbG90PVwicHJlZml4XCI+U2VudCB0bzo8L2Rpdj5cbiAqICAgPGRpdiBzbG90PVwic3VmZml4XCI+QHZhYWRpbi5jb208L2Rpdj5cbiAqIDwvdmFhZGluLXRleHQtYXJlYT5cbiAqIGBgYFxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIEN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuICogLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS1cbiAqIGAtLXZhYWRpbi10ZXh0LWZpZWxkLWRlZmF1bHQtd2lkdGhgIHwgU2V0IHRoZSBkZWZhdWx0IHdpZHRoIG9mIHRoZSBpbnB1dCBmaWVsZCB8IGAxMmVtYFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc2hhZG93IERPTSBwYXJ0cyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIFBhcnQgbmFtZSB8IERlc2NyaXB0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS1cbiAqIGBsYWJlbGAgfCBUaGUgbGFiZWwgZWxlbWVudFxuICogYGlucHV0LWZpZWxkYCB8IFRoZSBlbGVtZW50IHRoYXQgd3JhcHMgcHJlZml4LCB2YWx1ZSBhbmQgc3VmZml4XG4gKiBgdmFsdWVgIHwgVGhlIHRleHQgdmFsdWUgZWxlbWVudCBpbnNpZGUgdGhlIGBpbnB1dC1maWVsZGAgZWxlbWVudFxuICogYGVycm9yLW1lc3NhZ2VgIHwgVGhlIGVycm9yIG1lc3NhZ2UgZWxlbWVudFxuICpcbiAqIFRoZSBmb2xsb3dpbmcgc3RhdGUgYXR0cmlidXRlcyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuICpcbiAqIEF0dHJpYnV0ZSAgICB8IERlc2NyaXB0aW9uIHwgUGFydCBuYW1lXG4gKiAtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tXG4gKiBgZGlzYWJsZWRgIHwgU2V0IHRvIGEgZGlzYWJsZWQgdGV4dCBmaWVsZCB8IDpob3N0XG4gKiBgaGFzLXZhbHVlYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGhhcyBhIHZhbHVlIHwgOmhvc3RcbiAqIGBoYXMtbGFiZWxgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaGFzIGEgbGFiZWwgfCA6aG9zdFxuICogYGludmFsaWRgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgaW52YWxpZCB8IDpob3N0XG4gKiBgaW5wdXQtcHJldmVudGVkYCB8IFRlbXBvcmFyaWx5IHNldCB3aGVuIGludmFsaWQgaW5wdXQgaXMgcHJldmVudGVkIHwgOmhvc3RcbiAqIGBmb2N1c2VkYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGZvY3VzZWQgfCA6aG9zdFxuICogYGZvY3VzLXJpbmdgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMga2V5Ym9hcmQgZm9jdXNlZCB8IDpob3N0XG4gKiBgcmVhZG9ubHlgIHwgU2V0IHRvIGEgcmVhZG9ubHkgdGV4dCBmaWVsZCB8IDpob3N0XG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5UZXh0RmllbGRNaXhpblxuICogQG1peGVzIFZhYWRpbi5UaGVtYWJsZU1peGluXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqL1xuY2xhc3MgVGV4dEZpZWxkRWxlbWVudCBleHRlbmRzIEVsZW1lbnRNaXhpbihUZXh0RmllbGRNaXhpbihUaGVtYWJsZU1peGluKFBvbHltZXJFbGVtZW50KSkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGUgaW5jbHVkZT1cInZhYWRpbi10ZXh0LWZpZWxkLXNoYXJlZC1zdHlsZXNcIj5cbiAgICAgIC8qIHBvbHltZXItY2xpIGxpbnRlciBicmVha3Mgd2l0aCBlbXB0eSBsaW5lICovXG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJ2YWFkaW4tdGV4dC1maWVsZC1jb250YWluZXJcIj5cblxuICAgICAgPGxhYmVsIHBhcnQ9XCJsYWJlbFwiIG9uLWNsaWNrPVwiZm9jdXNcIiBpZD1cIltbX2xhYmVsSWRdXVwiPltbbGFiZWxdXTwvbGFiZWw+XG5cbiAgICAgIDxkaXYgcGFydD1cImlucHV0LWZpZWxkXCIgaWQ9XCJbW19pbnB1dElkXV1cIj5cblxuICAgICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90PlxuXG4gICAgICAgIDxzbG90IG5hbWU9XCJpbnB1dFwiPlxuICAgICAgICAgIDxpbnB1dCBwYXJ0PVwidmFsdWVcIj5cbiAgICAgICAgPC9zbG90PlxuXG4gICAgICAgIDxkaXYgcGFydD1cImNsZWFyLWJ1dHRvblwiIGlkPVwiY2xlYXJCdXR0b25cIiByb2xlPVwiYnV0dG9uXCIgYXJpYS1sYWJlbFxcJD1cIltbaTE4bi5jbGVhcl1dXCI+PC9kaXY+XG4gICAgICAgIDxzbG90IG5hbWU9XCJzdWZmaXhcIj48L3Nsb3Q+XG5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IHBhcnQ9XCJlcnJvci1tZXNzYWdlXCIgaWQ9XCJbW19lcnJvcklkXV1cIiBhcmlhLWxpdmU9XCJhc3NlcnRpdmVcIiBhcmlhLWhpZGRlblxcJD1cIltbX2dldEVycm9yTWVzc2FnZUFyaWFIaWRkZW4oaW52YWxpZCwgZXJyb3JNZXNzYWdlLCBfZXJyb3JJZCldXVwiPltbZXJyb3JNZXNzYWdlXV08L2Rpdj5cblxuICAgIDwvZGl2PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tdGV4dC1maWVsZCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICcyLjQuMTQnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIElkZW50aWZpZXMgYSBsaXN0IG9mIHByZS1kZWZpbmVkIG9wdGlvbnMgdG8gc3VnZ2VzdCB0byB0aGUgdXNlci5cbiAgICAgICAqIFRoZSB2YWx1ZSBtdXN0IGJlIHRoZSBpZCBvZiBhIDxkYXRhbGlzdD4gZWxlbWVudCBpbiB0aGUgc2FtZSBkb2N1bWVudC5cbiAgICAgICAqL1xuICAgICAgbGlzdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSByZWd1bGFyIGV4cHJlc3Npb24gdGhhdCB0aGUgdmFsdWUgaXMgY2hlY2tlZCBhZ2FpbnN0LlxuICAgICAgICogVGhlIHBhdHRlcm4gbXVzdCBtYXRjaCB0aGUgZW50aXJlIHZhbHVlLCBub3QganVzdCBzb21lIHN1YnNldC5cbiAgICAgICAqL1xuICAgICAgcGF0dGVybjoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogTWVzc2FnZSB0byBzaG93IHRvIHRoZSB1c2VyIHdoZW4gdmFsaWRhdGlvbiBmYWlscy5cbiAgICAgICAqL1xuICAgICAgdGl0bGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9XG4gICAgfTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoVGV4dEZpZWxkRWxlbWVudC5pcywgVGV4dEZpZWxkRWxlbWVudCk7XG5cbmV4cG9ydCB7IFRleHRGaWVsZEVsZW1lbnQgfTtcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL3JlcXVpcmVkLWZpZWxkLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2ZvbnQtaWNvbnMuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL2ZpZWxkLWJ1dHRvbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLXRleHQtZmllbGRcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tdGV4dC1maWVsZFwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJtYXRlcmlhbC1yZXF1aXJlZC1maWVsZCBtYXRlcmlhbC1maWVsZC1idXR0b25cIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1ib2R5LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICBmb250LWZhbWlseTogdmFyKC0tbWF0ZXJpYWwtZm9udC1mYW1pbHkpO1xuICAgICAgICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgICAgICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmJlZm9yZSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzMnB4O1xuICAgICAgfVxuXG4gICAgICAvKiBTdHJhbmdlIGd5bW5hc3RpY3MgdG8gbWFrZSBmaWVsZHMgdmVydGljYWxseSBhbGlnbiBuaWNlbHkgaW4gbW9zdCBjYXNlc1xuICAgICAgICAgKG5vIGxhYmVsLCB3aXRoIGxhYmVsLCB3aXRob3V0IHByZWZpeCwgd2l0aCBwcmVmaXgsIGV0Yy4pICovXG5cbiAgICAgIDpob3N0KFtoYXMtbGFiZWxdKSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdOmVtcHR5IHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXTplbXB0eTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLCoFwiO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTAuMnB4OyAvKiBOT1RFKHBsYXRvc2hhKTogQWRqdXN0cyBmb3Igd3JvbmcgZmxleCBiYXNlbGluZSBpbiBDaHJvbWUgJiBTYWZhcmkgKi9cbiAgICAgICAgaGVpZ2h0OiAzMnB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmJlZm9yZSxcbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgdHJhbnNmb3JtLW9yaWdpbjogNTAlIDAlO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWJhY2tncm91bmQtY29sb3IsICMwMDApO1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLW9wYWNpdHksIDAuNDIpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBoZWlnaHQ6IDJweDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlWCgwKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE3NXM7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwibGFiZWxcIl0sXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cInZhbHVlXCJdLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoW3BhcnQ9XCJ2YWx1ZVwiXSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIC13ZWJraXQtdGV4dC1maWxsLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIC8qIFNsb3R0ZWQgYnkgdmFhZGluLXNlbGVjdC10ZXh0LWZpZWxkICovXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChbcGFydD1cInZhbHVlXCJdKSB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBwYWRkaW5nOiA4cHggMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgZm9udC1mYW1pbHk6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAvKiBEaXNhYmxlIGRlZmF1bHQgaW52YWxpZCBzdHlsZSBpbiBGaXJlZm94ICovXG4gICAgICAgIGJveC1zaGFkb3c6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC8qIFRPRE86IHRoZSB0ZXh0IG9wYWNpdHkgc2hvdWxkIGJlIDQyJSwgYnV0IHRoZSBkaXNhYmxlZCBzdHlsZSBpcyAzOCUuXG4gICAgICBXb3VsZCBuZWVkIHRvIGludHJvZHVjZSBhbm90aGVyIHByb3BlcnR5IGZvciBpdCBpZiB3ZSB3YW50IHRvIGJlIDEwMCUgYWNjdXJhdGUuICovXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTc1cyAwLjA1cztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl06Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNzVzIDAuMDVzO1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE3NXMgMC4xcztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1sYWJlbF06bm90KFtmb2N1c2VkXSk6bm90KFtpbnZhbGlkXSk6bm90KFt0aGVtZT1cImFsd2F5cy1mbG9hdC1sYWJlbFwiXSkpIFtwYXJ0PVwidmFsdWVcIl06Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXTpub3QoW2ZvY3VzZWRdKTpub3QoW2ludmFsaWRdKTpub3QoW3RoZW1lPVwiYWx3YXlzLWZsb2F0LWxhYmVsXCJdKSkgW3BhcnQ9XCJ2YWx1ZVwiXTo6LW1vei1wbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtbGFiZWxdOm5vdChbZm9jdXNlZF0pOm5vdChbaW52YWxpZF0pOm5vdChbdGhlbWU9XCJhbHdheXMtZmxvYXQtbGFiZWxcIl0pKSBbcGFydD1cInZhbHVlXCJdOjpwbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb24tZGVsYXk6IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIElFMTEgZG9lc27igJl0IHNob3cgdGhlIHBsYWNlaG9sZGVyIHdoZW4gdGhlIGlucHV0IGlzIGZvY3VzZWQsIHNvIGl04oCZcyBiYXNpY2FsbHkgdXNlbGVzcyBmb3IgdGhpcyB0aGVtZSAqL1xuICAgICAgOmhvc3QoW2hhcy1sYWJlbF0pIFtwYXJ0PVwidmFsdWVcIl06LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHdpZHRoOiAxMzMlO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNzVzLCBjb2xvciAwLjE3NXMsIHdpZHRoIDAuMTc1cztcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIGVhc2UsIHN0ZXAtZW5kO1xuICAgICAgfVxuXG4gICAgICAvKiBUT0RPOiB1c2luZyB1bnN1cHBvcnRlZCBzZWxlY3RvciB0byBmaXggSUUxMSAoZXZlbiB0aG91Z2h0IHRoZSBsYWJlbCBlbGVtZW50IGlzIHNjYWxlZCBkb3duLFxuICAgICAgICAgdGhlIDEzMyUgd2lkdGggc3RpbGwgdGFrZXMgdGhlIHNhbWUgc3BhY2UgYXMgYW4gdW5zY2FsZWQgZWxlbWVudCAqL1xuICAgICAgOjotbXMtYmFja2Ryb3AsXG4gICAgICAudmFhZGluLXRleHQtZmllbGQtY29udGFpbmVyIHtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgLyogU2FtZSBmaXggZm9yIE1TIEVkZ2UgXl4gICAqL1xuICAgICAgQHN1cHBvcnRzICgtbXMtaW1lLWFsaWduOmF1dG8pIHtcbiAgICAgICAgLnZhYWRpbi10ZXh0LWZpZWxkLWNvbnRhaW5lciB7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXI6bm90KFtyZWFkb25seV0pOm5vdChbaW52YWxpZF0pKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWhvdmVyLW9wYWNpdHksIDAuODcpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF06bm90KFtpbnZhbGlkXSkpIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlcixcbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjE3NXMsIG9wYWNpdHkgMC4xNzVzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW52YWxpZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtZXJyb3ItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW5wdXQtcHJldmVudGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1lcnJvci10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YmVmb3JlIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCg5MGRlZywgdmFyKC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1iYWNrZ3JvdW5kLWNvbG9yLCAjMDAwKSAwLCB2YXIoLS1fbWF0ZXJpYWwtdGV4dC1maWVsZC1pbnB1dC1saW5lLWJhY2tncm91bmQtY29sb3IsICMwMDApIDJweCwgdHJhbnNwYXJlbnQgMnB4KTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA0cHggMXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXg7XG4gICAgICB9XG5cbiAgICAgIC8qIE9ubHkgdGFyZ2V0IHRoZSB2aXNpYmxlIGZsb2F0aW5nIGxhYmVsICovXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXTpub3QoW2hhcy12YWx1ZV0pOm5vdChbZm9jdXNlZF0pOm5vdChbaW52YWxpZF0pOm5vdChbdGhlbWV+PVwiYWx3YXlzLWZsb2F0LWxhYmVsXCJdKSkgW3BhcnQ9XCJsYWJlbFwiXSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAvKiBJRTExIGRvZXNu4oCZdCB3b3JrIHdpdGggY2FsYyBpbnNpZGUgdGhlIHRyYW5zbGF0ZSBmdW5jdGlvbiwgc28gd2UgbmVlZCB0byBoYXZlIGEgZml4ZWQgcGl4ZWwgdmFsdWUgaW5zdGVhZCBvZiA1MCUgKyAxNnB4ICovXG4gICAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgdHJhbnNsYXRlWSgyNHB4KTtcbiAgICAgICAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UsIGVhc2UsIHN0ZXAtc3RhcnQ7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwLjFzO1xuICAgICAgfVxuXG4gICAgICAvKiBTbG90dGVkIGNvbnRlbnQgKi9cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoKjpub3QoW3BhcnQ9XCJ2YWx1ZVwiXSk6bm90KFtwYXJ0XFwkPVwiLWJ1dHRvblwiXSk6bm90KGlucHV0KTpub3QodGV4dGFyZWEpKSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1tYXRlcmlhbC1pY29ucy1jbGVhcik7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLXRleHQtZmllbGQtc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi10ZXh0LWZpZWxkLmpzJztcbiIsIi8qIFRoaXMgZmlsZSBpcyBhdXRvZ2VuZXJhdGVkIGZyb20gc3JjL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLnRwbC5odG1sICovXG4vKlxuXG5UaGlzIHNjcmlwdCBnYXRoZXJzIHVzYWdlIHN0YXRpc3RpY3MgZnJvbSB0aGUgYXBwbGljYXRpb24gcnVubmluZyBpbiBkZXZlbG9wbWVudCBtb2RlLlxuXG5TdGF0aXN0aWNzIGdhdGhlcmluZyBpcyBhdXRvbWF0aWNhbGx5IGRpc2FibGVkIGFuZCBleGNsdWRlZCBmcm9tIHByb2R1Y3Rpb24gYnVpbGRzLlxuXG5Gb3IgZGV0YWlscyBhbmQgdG8gb3B0LW91dCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MuXG5cbiovXG4vKlxuICBGSVhNRShwb2x5bWVyLW1vZHVsaXplcik6IHRoZSBhYm92ZSBjb21tZW50cyB3ZXJlIGV4dHJhY3RlZFxuICBmcm9tIEhUTUwgYW5kIG1heSBiZSBvdXQgb2YgcGxhY2UgaGVyZS4gUmV2aWV3IHRoZW0gYW5kXG4gIHRoZW4gZGVsZXRlIHRoaXMgY29tbWVudCFcbiovXG5pbXBvcnQgeyBydW5JZkRldmVsb3BtZW50TW9kZSB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IvdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IuanMnO1xuXG5mdW5jdGlvbiBtYXliZUdhdGhlckFuZFNlbmRTdGF0cygpIHtcbiAgLyoqIHZhYWRpbi1kZXYtbW9kZTpzdGFydFxuICAoZnVuY3Rpb24gKCkge1xuJ3VzZSBzdHJpY3QnO1xuXG52YXIgX3R5cGVvZiA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiID8gZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gdHlwZW9mIG9iajtcbn0gOiBmdW5jdGlvbiAob2JqKSB7XG4gIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xufTtcblxudmFyIGNsYXNzQ2FsbENoZWNrID0gZnVuY3Rpb24gKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn07XG5cbnZhciBjcmVhdGVDbGFzcyA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgICBpZiAocHJvdG9Qcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICAgIGlmIChzdGF0aWNQcm9wcykgZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICAgIHJldHVybiBDb25zdHJ1Y3RvcjtcbiAgfTtcbn0oKTtcblxudmFyIGdldFBvbHltZXJWZXJzaW9uID0gZnVuY3Rpb24gZ2V0UG9seW1lclZlcnNpb24oKSB7XG4gIHJldHVybiB3aW5kb3cuUG9seW1lciAmJiB3aW5kb3cuUG9seW1lci52ZXJzaW9uO1xufTtcblxudmFyIFN0YXRpc3RpY3NHYXRoZXJlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc0dhdGhlcmVyKGxvZ2dlcikge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NHYXRoZXJlcik7XG5cbiAgICB0aGlzLm5vdyA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhdGlzdGljc0dhdGhlcmVyLCBbe1xuICAgIGtleTogJ2ZyYW1ld29ya1ZlcnNpb25EZXRlY3RvcnMnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBmcmFtZXdvcmtWZXJzaW9uRGV0ZWN0b3JzKCkge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgJ0Zsb3cnOiBmdW5jdGlvbiBGbG93KCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuVmFhZGluICYmIHdpbmRvdy5WYWFkaW4uRmxvdyAmJiB3aW5kb3cuVmFhZGluLkZsb3cuY2xpZW50cykge1xuICAgICAgICAgICAgdmFyIGZsb3dWZXJzaW9ucyA9IE9iamVjdC5rZXlzKHdpbmRvdy5WYWFkaW4uRmxvdy5jbGllbnRzKS5tYXAoZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgICByZXR1cm4gd2luZG93LlZhYWRpbi5GbG93LmNsaWVudHNba2V5XTtcbiAgICAgICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjbGllbnQuZ2V0VmVyc2lvbkluZm87XG4gICAgICAgICAgICB9KS5tYXAoZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldFZlcnNpb25JbmZvKCkuZmxvdztcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKGZsb3dWZXJzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmbG93VmVyc2lvbnNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnVmFhZGluIEZyYW1ld29yayc6IGZ1bmN0aW9uIFZhYWRpbkZyYW1ld29yaygpIHtcbiAgICAgICAgICBpZiAod2luZG93LnZhYWRpbiAmJiB3aW5kb3cudmFhZGluLmNsaWVudHMpIHtcbiAgICAgICAgICAgIHZhciBmcmFtZXdvcmtWZXJzaW9ucyA9IE9iamVjdC52YWx1ZXMod2luZG93LnZhYWRpbi5jbGllbnRzKS5maWx0ZXIoZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldFZlcnNpb25JbmZvO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRWZXJzaW9uSW5mbygpLnZhYWRpblZlcnNpb247XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChmcmFtZXdvcmtWZXJzaW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiBmcmFtZXdvcmtWZXJzaW9uc1swXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdBbmd1bGFySnMnOiBmdW5jdGlvbiBBbmd1bGFySnMoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5hbmd1bGFyICYmIHdpbmRvdy5hbmd1bGFyLnZlcnNpb24gJiYgd2luZG93LmFuZ3VsYXIudmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5hbmd1bGFyLnZlcnNpb24uZnVsbDtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdBbmd1bGFyJzogZnVuY3Rpb24gQW5ndWxhcigpIHtcbiAgICAgICAgICBpZiAod2luZG93Lm5nKSB7XG4gICAgICAgICAgICB2YXIgdGFncyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJbbmctdmVyc2lvbl1cIik7XG4gICAgICAgICAgICBpZiAodGFncy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0YWdzWzBdLmdldEF0dHJpYnV0ZShcIm5nLXZlcnNpb25cIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gXCJVbmtub3duXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnQmFja2JvbmUuanMnOiBmdW5jdGlvbiBCYWNrYm9uZUpzKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuQmFja2JvbmUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuQmFja2JvbmUuVkVSU0lPTjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdSZWFjdCc6IGZ1bmN0aW9uIFJlYWN0KCkge1xuICAgICAgICAgIHZhciByZWFjdFNlbGVjdG9yID0gJ1tkYXRhLXJlYWN0cm9vdF0sIFtkYXRhLXJlYWN0aWRdJztcbiAgICAgICAgICBpZiAoISFkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHJlYWN0U2VsZWN0b3IpKSB7XG4gICAgICAgICAgICAvLyBSZWFjdCBkb2VzIG5vdCBwdWJsaXNoIHRoZSB2ZXJzaW9uIGJ5IGRlZmF1bHRcbiAgICAgICAgICAgIHJldHVybiBcInVua25vd25cIjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdFbWJlcic6IGZ1bmN0aW9uIEVtYmVyKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuRW0gJiYgd2luZG93LkVtLlZFUlNJT04pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRW0uVkVSU0lPTjtcbiAgICAgICAgICB9IGVsc2UgaWYgKHdpbmRvdy5FbWJlciAmJiB3aW5kb3cuRW1iZXIuVkVSU0lPTikge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5FbWJlci5WRVJTSU9OO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ2pRdWVyeSc6IGZ1bmN0aW9uIChfalF1ZXJ5KSB7XG4gICAgICAgICAgZnVuY3Rpb24galF1ZXJ5KCkge1xuICAgICAgICAgICAgcmV0dXJuIF9qUXVlcnkuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBqUXVlcnkudG9TdHJpbmcgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICByZXR1cm4gX2pRdWVyeS50b1N0cmluZygpO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICByZXR1cm4galF1ZXJ5O1xuICAgICAgICB9KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGpRdWVyeSA9PT0gJ2Z1bmN0aW9uJyAmJiBqUXVlcnkucHJvdG90eXBlLmpxdWVyeSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4galF1ZXJ5LnByb3RvdHlwZS5qcXVlcnk7XG4gICAgICAgICAgfVxuICAgICAgICB9KSxcbiAgICAgICAgJ1BvbHltZXInOiBmdW5jdGlvbiBQb2x5bWVyKCkge1xuICAgICAgICAgIHZhciB2ZXJzaW9uID0gZ2V0UG9seW1lclZlcnNpb24oKTtcbiAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnTGl0RWxlbWVudCc6IGZ1bmN0aW9uIExpdEVsZW1lbnQoKSB7XG4gICAgICAgICAgdmFyIHZlcnNpb24gPSB3aW5kb3cubGl0RWxlbWVudFZlcnNpb25zICYmIHdpbmRvdy5saXRFbGVtZW50VmVyc2lvbnNbMF07XG4gICAgICAgICAgaWYgKHZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ0xpdEh0bWwnOiBmdW5jdGlvbiBMaXRIdG1sKCkge1xuICAgICAgICAgIHZhciB2ZXJzaW9uID0gd2luZG93LmxpdEh0bWxWZXJzaW9ucyAmJiB3aW5kb3cubGl0SHRtbFZlcnNpb25zWzBdO1xuICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdWdWUuanMnOiBmdW5jdGlvbiBWdWVKcygpIHtcbiAgICAgICAgICBpZiAod2luZG93LlZ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5WdWUudmVyc2lvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH07XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXNlZFZhYWRpbkVsZW1lbnRzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlZFZhYWRpbkVsZW1lbnRzKGVsZW1lbnRzKSB7XG4gICAgICB2YXIgdmVyc2lvbiA9IGdldFBvbHltZXJWZXJzaW9uKCk7XG4gICAgICB2YXIgZWxlbWVudENsYXNzZXMgPSB2b2lkIDA7XG4gICAgICAvLyBOT1RFOiBJbiBjYXNlIHlvdSBlZGl0IHRoZSBjb2RlIGhlcmUsIFlPVSBNVVNUIFVQREFURSBhbnkgc3RhdGlzdGljcyByZXBvcnRpbmcgY29kZSBpbiBGbG93LlxuICAgICAgLy8gQ2hlY2sgYWxsIGxvY2F0aW9ucyBjYWxsaW5nIHRoZSBtZXRob2QgZ2V0RW50cmllcygpIGluXG4gICAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL2Zsb3cvYmxvYi9tYXN0ZXIvZmxvdy1zZXJ2ZXIvc3JjL21haW4vamF2YS9jb20vdmFhZGluL2Zsb3cvaW50ZXJuYWwvVXNhZ2VTdGF0aXN0aWNzLmphdmEjTDEwNlxuICAgICAgLy8gQ3VycmVudGx5IGl0IGlzIG9ubHkgdXNlZCBieSBCb290c3RyYXBIYW5kbGVyLlxuICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbi5pbmRleE9mKCcyJykgPT09IDApIHtcbiAgICAgICAgLy8gUG9seW1lciAyOiBjb21wb25lbnRzIGNsYXNzZXMgYXJlIHN0b3JlZCBpbiB3aW5kb3cuVmFhZGluXG4gICAgICAgIGVsZW1lbnRDbGFzc2VzID0gT2JqZWN0LmtleXMod2luZG93LlZhYWRpbikubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgcmV0dXJuIHdpbmRvdy5WYWFkaW5bY107XG4gICAgICAgIH0pLmZpbHRlcihmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiBjLmlzO1xuICAgICAgICB9KTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFBvbHltZXIgMzogY29tcG9uZW50cyBjbGFzc2VzIGFyZSBzdG9yZWQgaW4gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zXG4gICAgICAgIGVsZW1lbnRDbGFzc2VzID0gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zIHx8IFtdO1xuICAgICAgfVxuICAgICAgZWxlbWVudENsYXNzZXMuZm9yRWFjaChmdW5jdGlvbiAoa2xhc3MpIHtcbiAgICAgICAgdmFyIHZlcnNpb24gPSBrbGFzcy52ZXJzaW9uID8ga2xhc3MudmVyc2lvbiA6IFwiMC4wLjBcIjtcbiAgICAgICAgZWxlbWVudHNba2xhc3MuaXNdID0geyB2ZXJzaW9uOiB2ZXJzaW9uIH07XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnZXRVc2VkVmFhZGluVGhlbWVzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2V0VXNlZFZhYWRpblRoZW1lcyh0aGVtZXMpIHtcbiAgICAgIFsnTHVtbycsICdNYXRlcmlhbCddLmZvckVhY2goZnVuY3Rpb24gKHRoZW1lTmFtZSkge1xuICAgICAgICB2YXIgdGhlbWU7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gZ2V0UG9seW1lclZlcnNpb24oKTtcbiAgICAgICAgaWYgKHZlcnNpb24gJiYgdmVyc2lvbi5pbmRleE9mKCcyJykgPT09IDApIHtcbiAgICAgICAgICAvLyBQb2x5bWVyIDI6IHRoZW1lcyBhcmUgc3RvcmVkIGluIHdpbmRvdy5WYWFkaW5cbiAgICAgICAgICB0aGVtZSA9IHdpbmRvdy5WYWFkaW5bdGhlbWVOYW1lXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAvLyBQb2x5bWVyIDM6IHRoZW1lcyBhcmUgc3RvcmVkIGluIGN1c3RvbSBlbGVtZW50IHJlZ2lzdHJ5XG4gICAgICAgICAgdGhlbWUgPSBjdXN0b21FbGVtZW50cy5nZXQoJ3ZhYWRpbi0nICsgdGhlbWVOYW1lLnRvTG93ZXJDYXNlKCkgKyAnLXN0eWxlcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGVtZSAmJiB0aGVtZS52ZXJzaW9uKSB7XG4gICAgICAgICAgdGhlbWVzW3RoZW1lTmFtZV0gPSB7IHZlcnNpb246IHRoZW1lLnZlcnNpb24gfTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0RnJhbWV3b3JrcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldEZyYW1ld29ya3MoZnJhbWV3b3Jrcykge1xuICAgICAgdmFyIGRldGVjdG9ycyA9IHRoaXMuZnJhbWV3b3JrVmVyc2lvbkRldGVjdG9ycygpO1xuICAgICAgT2JqZWN0LmtleXMoZGV0ZWN0b3JzKS5mb3JFYWNoKGZ1bmN0aW9uIChmcmFtZXdvcmspIHtcbiAgICAgICAgdmFyIGRldGVjdG9yID0gZGV0ZWN0b3JzW2ZyYW1ld29ya107XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdmFyIHZlcnNpb24gPSBkZXRlY3RvcigpO1xuICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICBmcmFtZXdvcmtzW2ZyYW1ld29ya10gPSB7IHZlcnNpb246IHZlcnNpb24gfTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHt9XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdnYXRoZXInLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnYXRoZXIoc3RvcmFnZSkge1xuICAgICAgdmFyIHN0b3JlZFN0YXRzID0gc3RvcmFnZS5yZWFkKCk7XG4gICAgICB2YXIgZ2F0aGVyZWRTdGF0cyA9IHt9O1xuICAgICAgdmFyIHR5cGVzID0gW1wiZWxlbWVudHNcIiwgXCJmcmFtZXdvcmtzXCIsIFwidGhlbWVzXCJdO1xuXG4gICAgICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGdhdGhlcmVkU3RhdHNbdHlwZV0gPSB7fTtcbiAgICAgICAgaWYgKCFzdG9yZWRTdGF0c1t0eXBlXSkge1xuICAgICAgICAgIHN0b3JlZFN0YXRzW3R5cGVdID0ge307XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICB2YXIgcHJldmlvdXNTdGF0cyA9IEpTT04uc3RyaW5naWZ5KHN0b3JlZFN0YXRzKTtcblxuICAgICAgdGhpcy5nZXRVc2VkVmFhZGluRWxlbWVudHMoZ2F0aGVyZWRTdGF0cy5lbGVtZW50cyk7XG4gICAgICB0aGlzLmdldEZyYW1ld29ya3MoZ2F0aGVyZWRTdGF0cy5mcmFtZXdvcmtzKTtcbiAgICAgIHRoaXMuZ2V0VXNlZFZhYWRpblRoZW1lcyhnYXRoZXJlZFN0YXRzLnRoZW1lcyk7XG5cbiAgICAgIHZhciBub3cgPSB0aGlzLm5vdztcbiAgICAgIHR5cGVzLmZvckVhY2goZnVuY3Rpb24gKHR5cGUpIHtcbiAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhnYXRoZXJlZFN0YXRzW3R5cGVdKTtcbiAgICAgICAga2V5cy5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICBpZiAoIXN0b3JlZFN0YXRzW3R5cGVdW2tleV0gfHwgX3R5cGVvZihzdG9yZWRTdGF0c1t0eXBlXVtrZXldKSAhPSBfdHlwZW9mKHt9KSkge1xuICAgICAgICAgICAgc3RvcmVkU3RhdHNbdHlwZV1ba2V5XSA9IHsgZmlyc3RVc2VkOiBub3cgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gRGlzY2FyZHMgYW55IHByZXZpb3VzbHkgbG9nZ2VkIHZlcnNpb24gbnVtYmVyXG4gICAgICAgICAgc3RvcmVkU3RhdHNbdHlwZV1ba2V5XS52ZXJzaW9uID0gZ2F0aGVyZWRTdGF0c1t0eXBlXVtrZXldLnZlcnNpb247XG4gICAgICAgICAgc3RvcmVkU3RhdHNbdHlwZV1ba2V5XS5sYXN0VXNlZCA9IG5vdztcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgdmFyIG5ld1N0YXRzID0gSlNPTi5zdHJpbmdpZnkoc3RvcmVkU3RhdHMpO1xuICAgICAgc3RvcmFnZS53cml0ZShuZXdTdGF0cyk7XG4gICAgICBpZiAobmV3U3RhdHMgIT0gcHJldmlvdXNTdGF0cyAmJiBPYmplY3Qua2V5cyhzdG9yZWRTdGF0cykubGVuZ3RoID4gMCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIk5ldyBzdGF0czogXCIgKyBuZXdTdGF0cyk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdGF0aXN0aWNzR2F0aGVyZXI7XG59KCk7XG5cbnZhciBTdGF0aXN0aWNzU3RvcmFnZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc1N0b3JhZ2Uoa2V5KSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgU3RhdGlzdGljc1N0b3JhZ2UpO1xuXG4gICAgdGhpcy5rZXkgPSBrZXk7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTdGF0aXN0aWNzU3RvcmFnZSwgW3tcbiAgICBrZXk6ICdyZWFkJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gcmVhZCgpIHtcbiAgICAgIHZhciBsb2NhbFN0b3JhZ2VTdGF0c1N0cmluZyA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKHRoaXMua2V5KTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZVN0YXRzU3RyaW5nID8gbG9jYWxTdG9yYWdlU3RhdHNTdHJpbmcgOiAne30nKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHt9O1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3dyaXRlJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gd3JpdGUoZGF0YSkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5rZXksIGRhdGEpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2NsZWFyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSh0aGlzLmtleSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnaXNFbXB0eScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGlzRW1wdHkoKSB7XG4gICAgICB2YXIgc3RvcmVkU3RhdHMgPSB0aGlzLnJlYWQoKTtcbiAgICAgIHZhciBlbXB0eSA9IHRydWU7XG4gICAgICBPYmplY3Qua2V5cyhzdG9yZWRTdGF0cykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmIChPYmplY3Qua2V5cyhzdG9yZWRTdGF0c1trZXldKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgZW1wdHkgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiBlbXB0eTtcbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0YXRpc3RpY3NTdG9yYWdlO1xufSgpO1xuXG52YXIgU3RhdGlzdGljc1NlbmRlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc1NlbmRlcih1cmwsIGxvZ2dlcikge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NTZW5kZXIpO1xuXG4gICAgdGhpcy51cmwgPSB1cmw7XG4gICAgdGhpcy5sb2dnZXIgPSBsb2dnZXI7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhTdGF0aXN0aWNzU2VuZGVyLCBbe1xuICAgIGtleTogJ3NlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKGRhdGEsIGVycm9ySGFuZGxlcikge1xuICAgICAgdmFyIGxvZ2dlciA9IHRoaXMubG9nZ2VyO1xuXG4gICAgICBpZiAobmF2aWdhdG9yLm9uTGluZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiT2ZmbGluZSwgY2FuJ3Qgc2VuZFwiKTtcbiAgICAgICAgZXJyb3JIYW5kbGVyKCk7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvZ2dlci5kZWJ1ZyhcIlNlbmRpbmcgZGF0YSB0byBcIiArIHRoaXMudXJsKTtcblxuICAgICAgdmFyIHJlcSA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuICAgICAgcmVxLndpdGhDcmVkZW50aWFscyA9IHRydWU7XG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBTdGF0cyBzZW50LCBub3RoaW5nIG1vcmUgdG8gZG9cbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiUmVzcG9uc2U6IFwiICsgcmVxLnJlc3BvbnNlVGV4dCk7XG4gICAgICB9KTtcbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJTZW5kIGZhaWxlZFwiKTtcbiAgICAgICAgZXJyb3JIYW5kbGVyKCk7XG4gICAgICB9KTtcbiAgICAgIHJlcS5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBsb2dnZXIuZGVidWcoXCJTZW5kIGFib3J0ZWRcIik7XG4gICAgICAgIGVycm9ySGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICByZXEub3BlbihcIlBPU1RcIiwgdGhpcy51cmwpO1xuICAgICAgcmVxLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgcmVxLnNlbmQoZGF0YSk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdGF0aXN0aWNzU2VuZGVyO1xufSgpO1xuXG52YXIgU3RhdGlzdGljc0xvZ2dlciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gU3RhdGlzdGljc0xvZ2dlcihpZCkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NMb2dnZXIpO1xuXG4gICAgdGhpcy5pZCA9IGlkO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhdGlzdGljc0xvZ2dlciwgW3tcbiAgICBrZXk6ICdfaXNEZWJ1ZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIF9pc0RlYnVnKCkge1xuICAgICAgcmV0dXJuIGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidmFhZGluLlwiICsgdGhpcy5pZCArIFwiLmRlYnVnXCIpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2RlYnVnJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVidWcobXNnKSB7XG4gICAgICBpZiAodGhpcy5faXNEZWJ1ZygpKSB7XG4gICAgICAgIGNvbnNvbGUuaW5mbyh0aGlzLmlkICsgXCI6IFwiICsgbXNnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1dKTtcbiAgcmV0dXJuIFN0YXRpc3RpY3NMb2dnZXI7XG59KCk7XG5cbnZhciBVc2FnZVN0YXRpc3RpY3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFVzYWdlU3RhdGlzdGljcygpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBVc2FnZVN0YXRpc3RpY3MpO1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpO1xuICAgIHRoaXMudGltZU5vdyA9IHRoaXMubm93LmdldFRpbWUoKTtcbiAgICB0aGlzLmdhdGhlckRlbGF5ID0gMTA7IC8vIERlbGF5IGJldHdlZW4gbG9hZGluZyB0aGlzIGZpbGUgYW5kIGdhdGhlcmluZyBzdGF0c1xuICAgIHRoaXMuaW5pdGlhbERlbGF5ID0gMjQgKiA2MCAqIDYwO1xuXG4gICAgdGhpcy5sb2dnZXIgPSBuZXcgU3RhdGlzdGljc0xvZ2dlcihcInN0YXRpc3RpY3NcIik7XG4gICAgdGhpcy5zdG9yYWdlID0gbmV3IFN0YXRpc3RpY3NTdG9yYWdlKFwidmFhZGluLnN0YXRpc3RpY3MuYmFza2V0XCIpO1xuICAgIHRoaXMuZ2F0aGVyZXIgPSBuZXcgU3RhdGlzdGljc0dhdGhlcmVyKHRoaXMubG9nZ2VyKTtcbiAgICB0aGlzLnNlbmRlciA9IG5ldyBTdGF0aXN0aWNzU2VuZGVyKFwiaHR0cHM6Ly90b29scy52YWFkaW4uY29tL3VzYWdlLXN0YXRzL3N1Ym1pdFwiLCB0aGlzLmxvZ2dlcik7XG4gIH1cblxuICBjcmVhdGVDbGFzcyhVc2FnZVN0YXRpc3RpY3MsIFt7XG4gICAga2V5OiAnbWF5YmVHYXRoZXJBbmRTZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gbWF5YmVHYXRoZXJBbmRTZW5kKCkge1xuICAgICAgdmFyIF90aGlzID0gdGhpcztcblxuICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVzYWdlU3RhdGlzdGljcy5vcHRPdXRLZXkpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHRoaXMuZ2F0aGVyZXIuZ2F0aGVyKHRoaXMuc3RvcmFnZSk7XG4gICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgX3RoaXMubWF5YmVTZW5kKCk7XG4gICAgICB9LCB0aGlzLmdhdGhlckRlbGF5ICogMTAwMCk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbG90dGVyeScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvdHRlcnkoKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjdXJyZW50TW9udGgnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjdXJyZW50TW9udGgoKSB7XG4gICAgICByZXR1cm4gdGhpcy5ub3cuZ2V0WWVhcigpICogMTIgKyB0aGlzLm5vdy5nZXRNb250aCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21heWJlU2VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1heWJlU2VuZCgpIHtcbiAgICAgIHZhciBmaXJzdFVzZSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2FnZVN0YXRpc3RpY3MuZmlyc3RVc2VLZXkpKTtcbiAgICAgIHZhciBtb250aFByb2Nlc3NlZCA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2FnZVN0YXRpc3RpY3MubW9udGhQcm9jZXNzZWRLZXkpKTtcblxuICAgICAgaWYgKCFmaXJzdFVzZSkge1xuICAgICAgICAvLyBVc2UgYSBncmFjZSBwZXJpb2QgdG8gYXZvaWQgaW50ZXJmZXJpbmcgd2l0aCB0ZXN0cywgaW5jb2duaXRvIG1vZGUgZXRjXG4gICAgICAgIGZpcnN0VXNlID0gdGhpcy50aW1lTm93O1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVc2FnZVN0YXRpc3RpY3MuZmlyc3RVc2VLZXksIGZpcnN0VXNlKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRoaXMudGltZU5vdyA8IGZpcnN0VXNlICsgdGhpcy5pbml0aWFsRGVsYXkgKiAxMDAwKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiTm8gc3RhdGlzdGljcyB3aWxsIGJlIHNlbnQgdW50aWwgdGhlIGluaXRpYWwgZGVsYXkgb2YgXCIgKyB0aGlzLmluaXRpYWxEZWxheSArIFwicyBoYXMgcGFzc2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jdXJyZW50TW9udGgoKSA8PSBtb250aFByb2Nlc3NlZCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIlRoaXMgbW9udGggaGFzIGFscmVhZHkgYmVlbiBwcm9jZXNzZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFVzYWdlU3RhdGlzdGljcy5tb250aFByb2Nlc3NlZEtleSwgdGhpcy5jdXJyZW50TW9udGgoKSk7XG4gICAgICAvLyBVc2UgcmFuZG9tIHNhbXBsaW5nXG4gICAgICBpZiAodGhpcy5sb3R0ZXJ5KCkpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJDb25ncmF0dWxhdGlvbnMsIHdlIGhhdmUgYSB3aW5uZXIhXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJTb3JyeSwgbm8gc3RhdHMgZnJvbSB5b3UgdGhpcyB0aW1lXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2VuZCgpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ3NlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzZW5kKCkge1xuICAgICAgLy8gRW5zdXJlIHdlIGhhdmUgdGhlIGxhdGVzdCBkYXRhXG4gICAgICB0aGlzLmdhdGhlcmVyLmdhdGhlcih0aGlzLnN0b3JhZ2UpO1xuXG4gICAgICAvLyBSZWFkLCBzZW5kIGFuZCBjbGVhbiB1cFxuICAgICAgdmFyIGRhdGEgPSB0aGlzLnN0b3JhZ2UucmVhZCgpO1xuICAgICAgZGF0YVtcImZpcnN0VXNlXCJdID0gTnVtYmVyKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFVzYWdlU3RhdGlzdGljcy5maXJzdFVzZUtleSkpO1xuICAgICAgZGF0YVtcInVzYWdlU3RhdGlzdGljc1ZlcnNpb25cIl0gPSBVc2FnZVN0YXRpc3RpY3MudmVyc2lvbjtcbiAgICAgIHZhciBpbmZvID0gJ1RoaXMgcmVxdWVzdCBjb250YWlucyB1c2FnZSBzdGF0aXN0aWNzIGdhdGhlcmVkIGZyb20gdGhlIGFwcGxpY2F0aW9uIHJ1bm5pbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZS4gXFxuXFxuU3RhdGlzdGljcyBnYXRoZXJpbmcgaXMgYXV0b21hdGljYWxseSBkaXNhYmxlZCBhbmQgZXhjbHVkZWQgZnJvbSBwcm9kdWN0aW9uIGJ1aWxkcy5cXG5cXG5Gb3IgZGV0YWlscyBhbmQgdG8gb3B0LW91dCwgc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MuXFxuXFxuXFxuXFxuJztcbiAgICAgIHZhciBzZWxmID0gdGhpcztcbiAgICAgIHRoaXMuc2VuZGVyLnNlbmQoaW5mbyArIEpTT04uc3RyaW5naWZ5KGRhdGEpLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIC8vIFJldmVydCB0aGUgJ21vbnRoIHByb2Nlc3NlZCcgZmxhZ1xuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVc2FnZVN0YXRpc3RpY3MubW9udGhQcm9jZXNzZWRLZXksIHNlbGYuY3VycmVudE1vbnRoKCkgLSAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfV0sIFt7XG4gICAga2V5OiAndmVyc2lvbicsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkMSgpIHtcbiAgICAgIHJldHVybiAnMi4xLjAnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2ZpcnN0VXNlS2V5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxKCkge1xuICAgICAgcmV0dXJuICd2YWFkaW4uc3RhdGlzdGljcy5maXJzdHVzZSc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnbW9udGhQcm9jZXNzZWRLZXknLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEoKSB7XG4gICAgICByZXR1cm4gJ3ZhYWRpbi5zdGF0aXN0aWNzLm1vbnRoUHJvY2Vzc2VkJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdvcHRPdXRLZXknLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEoKSB7XG4gICAgICByZXR1cm4gJ3ZhYWRpbi5zdGF0aXN0aWNzLm9wdG91dCc7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBVc2FnZVN0YXRpc3RpY3M7XG59KCk7XG5cbnRyeSB7XG4gIHdpbmRvdy5WYWFkaW4gPSB3aW5kb3cuVmFhZGluIHx8IHt9O1xuICB3aW5kb3cuVmFhZGluLnVzYWdlU3RhdHNDaGVja2VyID0gd2luZG93LlZhYWRpbi51c2FnZVN0YXRzQ2hlY2tlciB8fCBuZXcgVXNhZ2VTdGF0aXN0aWNzKCk7XG4gIHdpbmRvdy5WYWFkaW4udXNhZ2VTdGF0c0NoZWNrZXIubWF5YmVHYXRoZXJBbmRTZW5kKCk7XG59IGNhdGNoIChlKSB7XG4gIC8vIEludGVudGlvbmFsbHkgaWdub3JlZCBhcyB0aGlzIGlzIG5vdCBhIHByb2JsZW0gaW4gdGhlIGFwcCBiZWluZyBkZXZlbG9wZWRcbn1cblxufSgpKTtcblxuICB2YWFkaW4tZGV2LW1vZGU6ZW5kICoqL1xufVxuXG5leHBvcnQgY29uc3QgdXNhZ2VTdGF0aXN0aWNzID0gZnVuY3Rpb24oKSB7XG4gIGlmICh0eXBlb2YgcnVuSWZEZXZlbG9wbWVudE1vZGUgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gcnVuSWZEZXZlbG9wbWVudE1vZGUobWF5YmVHYXRoZXJBbmRTZW5kU3RhdHMpO1xuICB9XG59O1xuIiwiZXhwb3J0ICogZnJvbSAnLi92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy1jb2xsZWN0LmpzJztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQTtBQWtEQTtBQW5EQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9EQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW9FQTtBQUNBO0FBdUJBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUE0QkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUFBO0FBQUE7QUE5QkE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTNFQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBWUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpGQTtBQXFGQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUF1RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0R0E7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBOzs7Ozs7Ozs7Ozs7O0FBb0ZBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTs7O0FBdEhBO0FBQ0E7QUFvRUE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7O0FBakZBO0FBQ0E7QUE0SEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BMQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBNElBOzs7Ozs7Ozs7Ozs7QUNqSkE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBRUE7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBUEE7QUFDQTtBQWNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBdkJBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQTBCQTs7Ozs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQWdDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBNUdBO0FBQUE7QUFBQTtBQWdIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUF0SEE7QUFBQTtBQUFBO0FBMEhBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcElBO0FBQUE7QUFBQTtBQXVJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBcEpBO0FBQUE7QUFBQTtBQXVKQTtBQUNBO0FBeEpBO0FBQUE7QUFBQTtBQTJKQTtBQUNBO0FBRUE7Ozs7O0FBOUpBO0FBQUE7QUFBQTtBQXdLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBaExBO0FBQUE7QUFBQTtBQXFMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQTdMQTtBQUFBO0FBQUE7QUFtTUE7QUFDQTtBQUFBO0FBQ0E7QUFyTUE7QUFBQTtBQUFBO0FBd01BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQXBOQTtBQUFBO0FBQUE7QUF1TkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBeE9BO0FBQUE7QUFBQTtBQTRPQTtBQUNBO0FBQ0E7QUFDQTtBQS9PQTtBQUFBO0FBQUE7QUFtS0E7QUFDQTtBQUNBO0FBcktBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUF4QkE7QUE0QkE7QUE5QkE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQUFBOzs7Ozs7QUFEQTtBQVFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBakNBO0FBQUE7QUFBQTtBQXlDQTtBQUlBO0FBRUE7Ozs7Ozs7OztBQS9DQTtBQUFBO0FBQUE7QUF3REE7QUFDQTtBQUVBOzs7Ozs7OztBQTNEQTtBQUFBO0FBQUE7QUFtRUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFuRkE7QUFBQTtBQUFBO0FBd0ZBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQTdGQTtBQUNBO0FBREE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUF3U0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBelVBO0FBQUE7QUFBQTtBQTJVQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUEzVkE7QUFBQTtBQUFBO0FBK1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQXhXQTtBQUFBO0FBQUE7QUE0V0E7QUFDQTtBQUNBO0FBQ0E7QUEvV0E7QUFBQTtBQUFBO0FBa1hBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7OztBQXpYQTtBQUFBO0FBQUE7QUE2WEE7QUFDQTtBQUNBO0FBQ0E7QUFoWUE7QUFBQTtBQUFBO0FBaVpBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1WkE7QUFBQTtBQUFBO0FBK1pBO0FBQ0E7QUFoYUE7QUFBQTtBQUFBO0FBbWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXpiQTtBQUFBO0FBQUE7QUE0YkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcmNBO0FBQUE7QUFBQTtBQXdjQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExZEE7QUFBQTtBQUFBO0FBNmRBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBcGVBO0FBQUE7QUFBQTtBQXVlQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1ZUE7QUFBQTtBQUFBO0FBZ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBbmZBO0FBQUE7QUFBQTtBQXNmQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQW5nQkE7QUFBQTtBQUFBO0FBc2dCQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBMWdCQTtBQUFBO0FBQUE7QUE2Z0JBO0FBQ0E7QUE5Z0JBO0FBQUE7QUFBQTtBQWloQkE7QUFDQTtBQWxoQkE7QUFBQTtBQUFBO0FBcWhCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQXpqQkE7QUFBQTtBQUFBO0FBNGpCQTtBQUNBO0FBQ0E7QUFDQTtBQS9qQkE7QUFBQTtBQUFBO0FBa2tCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFobkJBO0FBQUE7QUFBQTtBQWluQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQTluQkE7QUFBQTtBQUFBO0FBaW9CQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBdnFCQTtBQUFBO0FBQUE7QUE4cUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBcHJCQTtBQUFBO0FBQUE7QUE2ckJBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTlzQkE7QUFBQTtBQUFBO0FBaXRCQTtBQUNBO0FBQ0E7QUFDQTtBQXB0QkE7QUFBQTtBQUFBO0FBdXRCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE1dEJBO0FBQUE7QUFBQTtBQSt0QkE7QUFDQTtBQUFBO0FBQ0E7QUFqdUJBO0FBQUE7QUFBQTtBQW91QkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQXp1QkE7QUFBQTtBQUFBO0FBNnVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXJ2QkE7QUFBQTtBQUFBO0FBd3ZCQTtBQUNBO0FBenZCQTtBQUFBO0FBQUE7QUE0dkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQTNDQTtBQTZDQTtBQXJ6QkE7QUFBQTtBQUFBO0FBd3pCQTtBQUNBO0FBQ0E7QUFDQTtBQTN6QkE7QUFBQTtBQUFBO0FBOHpCQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFsMEJBO0FBQUE7QUFBQTtBQXEwQkE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFsMUJBO0FBQUE7QUFBQTtBQXExQkE7QUFDQTtBQUNBO0FBQ0E7QUF4MUJBO0FBQUE7QUFBQTtBQW1ZQTtBQUNBO0FBcFlBO0FBQUE7QUFBQTtBQXVZQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUE5WUE7QUFBQTtBQUFBO0FBMjFCQTtBQUNBO0FBRUE7Ozs7OztBQTkxQkE7QUFBQTtBQUFBO0FBS0E7QUFDQTs7O0FBR0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7O0FBS0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7Ozs7O0FBS0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUE0RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFDQTtBQTRDQTtBQS9DQTtBQUNBO0FBaURBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBSUE7QUFFQTtBQXJSQTtBQXVSQTtBQTVSQTtBQUFBO0FBQUE7QUErUkE7QUFPQTtBQXRTQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUEyUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUhBO0FBT0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBR0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSEE7QUFDQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBaEJBO0FBa0JBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUF2REE7QUF5REE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBeDFCQTtBQUNBO0FBb0xBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUF2RUE7QUF5RUE7Ozs7QUF4UUE7QUFDQTtBQTYxQkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ozQkE7Ozs7O0FBS0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQWFBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBOzs7O0FBSEE7QUFDQTtBQUtBOzs7Ozs7Ozs7Ozs7QUMzQkE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQWdDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25DQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBaUZBOzs7Ozs7Ozs7Ozs7O0FBaUhBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQVVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7QUF4QkE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7QUFTQTtBQUNBO0FBQ0E7OztBQWxLQTtBQUNBO0FBb0NBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBL0NBO0FBaURBOzs7QUFFQTtBQUNBO0FBSUE7Ozs7QUE5R0E7QUFDQTtBQWlMQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZSQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBOzs7Ozs7Ozs7Ozs7O0FBb0dBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFhQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBNkRBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekJBO0FBQ0E7QUFBQTtBQUFBO0FBeUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUF0SkE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7QUFHQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBOVBBO0FBQ0E7QUFnREE7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUVBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRUE7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBcENBO0FBeUNBOzs7O0FBbEdBO0FBQ0E7QUFpV0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuWEE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7Ozs7Ozs7Ozs7Ozs7QUFzSkE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUVBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7OztBQXpVQTtBQUNBO0FBbUVBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUE1REE7QUFrRUE7OztBQUVBO0FBQ0E7QUFHQTs7OztBQXBKQTtBQUNBO0FBNFVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN1ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBMEtBOzs7Ozs7Ozs7Ozs7QUNqTEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBRUE7QUEwQ0E7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW1CQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUVBO0FBcUhBOzs7Ozs7Ozs7Ozs7QUN6SEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUdBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBckJBO0FBQ0E7QUFxQkE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQVBBO0FBT0E7QUFDQTtBQTlCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUF1Q0E7Ozs7Ozs7Ozs7OztBQzFDQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBNERBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQW9HQTtBQUVBO0FBQ0E7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFNQTs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFvTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBek5BO0FBQUE7QUFBQTtBQTJOQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUF6UEE7QUFBQTtBQUFBO0FBMFBBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5RQTtBQUFBO0FBQUE7QUFzUUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBTEE7QUFPQTtBQUNBO0FBcFJBO0FBQUE7QUFBQTtBQXVSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5U0E7QUFBQTtBQUFBO0FBaVRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXRUQTtBQUFBO0FBQUE7QUF3VEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFEQTtBQUVBO0FBN1VBO0FBQUE7QUFBQTtBQStVQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFqVkE7QUFBQTtBQUFBO0FBbVZBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQXJWQTtBQUFBO0FBQUE7QUF3VkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVWQTtBQUFBO0FBQUE7QUE4VkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTVXQTtBQUFBO0FBQUE7QUErV0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF4WEE7QUFBQTtBQUFBO0FBMlhBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBdFlBO0FBQUE7QUFBQTtBQTJZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoWkE7QUFBQTtBQUFBO0FBbVpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUF2WkE7QUFBQTtBQUFBO0FBMFpBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE5WkE7QUFBQTtBQUFBO0FBZ2FBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQTVjQTtBQUFBO0FBQUE7QUFtZEE7QUFDQTtBQXBkQTtBQUFBO0FBQUE7QUF1ZEE7QUFDQTtBQXhkQTtBQUFBO0FBQUE7QUEyZEE7QUFDQTtBQTVkQTtBQUFBO0FBQUE7QUE4ZEE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNlQTtBQUFBO0FBQUE7QUE4ZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBOWZBO0FBQUE7QUFBQTtBQWlnQkE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQXRnQkE7QUFBQTtBQUFBO0FBd2dCQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUF6aEJBO0FBQUE7QUFBQTtBQTRoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBamlCQTtBQUFBO0FBQUE7QUFvaUJBO0FBR0E7QUF2aUJBO0FBQUE7QUFBQTtBQTBpQkE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQS9pQkE7QUFBQTtBQUFBO0FBa2pCQTtBQUNBO0FBbmpCQTtBQUFBO0FBQUE7QUFzakJBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBL2pCQTtBQUFBO0FBQUE7QUFra0JBO0FBQ0E7QUFFQTs7OztBQXJrQkE7QUFBQTtBQUFBO0FBeWtCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFNQTs7Ozs7OztBQU9BOzs7Ozs7QUEzbUJBO0FBQUE7QUFBQTtBQThMQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTs7OztBQXhNQTtBQUFBO0FBQUE7QUE0TUE7QUFDQTtBQTdNQTtBQUFBO0FBQUE7QUFnTkE7QUFDQTtBQWpOQTtBQUFBO0FBQUE7QUFFQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7Ozs7QUFPQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBTkE7QUFDQTtBQVFBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBS0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU1BOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7Ozs7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBRUE7QUE3S0E7QUErS0E7QUFqTEE7QUFBQTtBQUFBO0FBb0xBO0FBT0E7QUEzTEE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbElBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBMkRBOzs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQTBCQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFFQTtBQUNBO0FBQ0E7OztBQUVBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFwQkE7QUF3QkE7Ozs7QUEvREE7QUFDQTtBQWlFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4SUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFnT0E7Ozs7Ozs7Ozs7OztBQ3ZPQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBOzs7Ozs7Ozs7QUFRQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3ZmQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==