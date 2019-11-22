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
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>

      :host {
        @apply --layout-horizontal;
        @apply --layout-center;
        position: relative;
        height: 64px;
        padding: 0 16px;
        pointer-events: none;
        font-size: var(--app-toolbar-font-size, 20px);
      }

      :host ::slotted(*) {
        pointer-events: auto;
      }

      :host ::slotted(paper-icon-button) {
        /* paper-icon-button/issues/33 */
        font-size: 0;
      }

      :host ::slotted([main-title]),
      :host ::slotted([condensed-title]) {
        pointer-events: none;
        @apply --layout-flex;
      }

      :host ::slotted([bottom-item]) {
        position: absolute;
        right: 0;
        bottom: 0;
        left: 0;
      }

      :host ::slotted([top-item]) {
        position: absolute;
        top: 0;
        right: 0;
        left: 0;
      }

      :host ::slotted([spacer]) {
        margin-left: 64px;
      }
    </style>

    <slot></slot>
`,
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
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,
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
  _iconChanged: function (icon) {
    var parts = (icon || '').split(':');
    this._iconName = parts.pop();
    this._iconsetName = parts.pop() || this._DEFAULT_ICONSET;

    this._updateIcon();
  },
  _srcChanged: function (src) {
    this._updateIcon();
  },
  _usesIconset: function () {
    return this.icon || !this.src;
  },

  /** @suppress {visibility} */
  _updateIcon: function () {
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
      value: function () {
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
  attached: function () {
    this.style.display = 'none';
    this.queryChanged();
  },
  detached: function () {
    this._remove();
  },
  _add: function () {
    if (this._mq) {
      this._mq.addListener(this._boundMQHandler);
    }
  },
  _remove: function () {
    if (this._mq) {
      this._mq.removeListener(this._boundMQHandler);
    }

    this._mq = null;
  },
  queryChanged: function () {
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
  queryHandler: function (mq) {
    this._setQueryMatches(mq.matches);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-card/paper-card.js":
/*!********************************************************!*\
  !*** ./node_modules/@polymer/paper-card/paper-card.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_image_iron_image_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-image/iron-image.js */ "./node_modules/@polymer/iron-image/iron-image.js");
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles.js */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
[Cards](https://www.google.com/design/spec/components/cards.html)

`paper-card` is a container with a drop shadow.

Example:

    <paper-card heading="Card Title">
      <div class="card-content">Some content</div>
      <div class="card-actions">
        <paper-button>Some action</paper-button>
      </div>
    </paper-card>

Example - top card image:

    <paper-card heading="Card Title" image="/path/to/image.png" alt="image">
      ...
    </paper-card>

### Accessibility

By default, the `aria-label` will be set to the value of the `heading`
attribute.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-card-background-color` | The background color of the card | `--primary-background-color`
`--paper-card-header-color` | The color of the header text | `#000`
`--paper-card-header` | Mixin applied to the card header section | `{}`
`--paper-card-header-text` | Mixin applied to the title in the card header section | `{}`
`--paper-card-header-image` | Mixin applied to the image in the card header section | `{}`
`--paper-card-header-image-text` | Mixin applied to the text overlapping the image in the card header section | `{}`
`--paper-card-content` | Mixin applied to the card content section| `{}`
`--paper-card-actions` | Mixin applied to the card action section | `{}`
`--paper-card` | Mixin applied to the card | `{}`

@group Paper Elements
@element paper-card
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_5__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"]`
    <style include="paper-material-styles">
      :host {
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        background-color: var(--paper-card-background-color, var(--primary-background-color));
        border-radius: 2px;

        @apply --paper-font-common-base;
        @apply --paper-card;
      }

      /* IE 10 support for HTML5 hidden attr */
      :host([hidden]), [hidden] {
        display: none !important;
      }

      .header {
        position: relative;
        border-top-left-radius: inherit;
        border-top-right-radius: inherit;
        overflow: hidden;

        @apply --paper-card-header;
      }

      .header iron-image {
        display: block;
        width: 100%;
        --iron-image-width: 100%;
        pointer-events: none;

        @apply --paper-card-header-image;
      }

      .header .title-text {
        padding: 16px;
        font-size: 24px;
        font-weight: 400;
        color: var(--paper-card-header-color, #000);

        @apply --paper-card-header-text;
      }

      .header .title-text.over-image {
        position: absolute;
        bottom: 0px;

        @apply --paper-card-header-image-text;
      }

      :host ::slotted(.card-content) {
        padding: 16px;
        position:relative;

        @apply --paper-card-content;
      }

      :host ::slotted(.card-actions) {
        border-top: 1px solid #e8e8e8;
        padding: 5px 16px;
        position:relative;

        @apply --paper-card-actions;
      }

      :host([elevation="1"]) {
        @apply --paper-material-elevation-1;
      }

      :host([elevation="2"]) {
        @apply --paper-material-elevation-2;
      }

      :host([elevation="3"]) {
        @apply --paper-material-elevation-3;
      }

      :host([elevation="4"]) {
        @apply --paper-material-elevation-4;
      }

      :host([elevation="5"]) {
        @apply --paper-material-elevation-5;
      }
    </style>

    <div class="header">
      <iron-image hidden\$="[[!image]]" aria-hidden\$="[[_isHidden(image)]]" src="[[image]]" alt="[[alt]]" placeholder="[[placeholderImage]]" preload="[[preloadImage]]" fade="[[fadeImage]]"></iron-image>
      <div hidden\$="[[!heading]]" class\$="title-text [[_computeHeadingClass(image)]]">[[heading]]</div>
    </div>

    <slot></slot>
`,
  is: 'paper-card',
  properties: {
    /**
     * The title of the card.
     */
    heading: {
      type: String,
      value: '',
      observer: '_headingChanged'
    },

    /**
     * The url of the title image of the card.
     */
    image: {
      type: String,
      value: ''
    },

    /**
     * The text alternative of the card's title image.
     */
    alt: {
      type: String
    },

    /**
     * When `true`, any change to the image url property will cause the
     * `placeholder` image to be shown until the image is fully rendered.
     */
    preloadImage: {
      type: Boolean,
      value: false
    },

    /**
     * When `preloadImage` is true, setting `fadeImage` to true will cause the
     * image to fade into place.
     */
    fadeImage: {
      type: Boolean,
      value: false
    },

    /**
     * This image will be used as a background/placeholder until the src image
     * has loaded. Use of a data-URI for placeholder is encouraged for instant
     * rendering.
     */
    placeholderImage: {
      type: String,
      value: null
    },

    /**
     * The z-depth of the card, from 0-5.
     */
    elevation: {
      type: Number,
      value: 1,
      reflectToAttribute: true
    },

    /**
     * Set this to true to animate the card shadow when setting a new
     * `z` value.
     */
    animatedShadow: {
      type: Boolean,
      value: false
    },

    /**
     * Read-only property used to pass down the `animatedShadow` value to
     * the underlying paper-material style (since they have different names).
     */
    animated: {
      type: Boolean,
      reflectToAttribute: true,
      readOnly: true,
      computed: '_computeAnimated(animatedShadow)'
    }
  },

  /**
   * Format function for aria-hidden. Use the ! operator results in the
   * empty string when given a falsy value.
   */
  _isHidden: function (image) {
    return image ? 'false' : 'true';
  },
  _headingChanged: function (heading) {
    var currentHeading = this.getAttribute('heading'),
        currentLabel = this.getAttribute('aria-label');

    if (typeof currentLabel !== 'string' || currentLabel === currentHeading) {
      this.setAttribute('aria-label', heading);
    }
  },
  _computeHeadingClass: function (image) {
    return image ? ' over-image' : '';
  },
  _computeAnimated: function (animatedShadow) {
    return animatedShadow;
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

const PaperDialogBehaviorImpl = {
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
  ready: function () {
    // Only now these properties can be read.
    this.__prevNoCancelOnOutsideClick = this.noCancelOnOutsideClick;
    this.__prevNoCancelOnEscKey = this.noCancelOnEscKey;
    this.__prevWithBackdrop = this.withBackdrop;
    this.__readied = true;
  },
  _modalChanged: function (modal, readied) {
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
  _updateClosingReasonConfirmed: function (confirmed) {
    this.closingReason = this.closingReason || {};
    this.closingReason.confirmed = confirmed;
  },

  /**
   * Will dismiss the dialog if user clicked on an element with dialog-dismiss
   * or dialog-confirm attribute.
   */
  _onDialogClick: function (event) {
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

const PaperDialogBehavior = [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"], PaperDialogBehaviorImpl];

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





const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-dialog-shared-styles">
  <template>
    <style>
      :host {
        display: block;
        margin: 24px 40px;

        background: var(--paper-dialog-background-color, var(--primary-background-color));
        color: var(--paper-dialog-color, var(--primary-text-color));

        @apply --paper-font-body1;
        @apply --shadow-elevation-16dp;
        @apply --paper-dialog;
      }

      :host > ::slotted(*) {
        margin-top: 20px;
        padding: 0 24px;
      }

      :host > ::slotted(.no-padding) {
        padding: 0;
      }

      
      :host > ::slotted(*:first-child) {
        margin-top: 24px;
      }

      :host > ::slotted(*:last-child) {
        margin-bottom: 24px;
      }

      /* In 1.x, this selector was \`:host > ::content h2\`. In 2.x <slot> allows
      to select direct children only, which increases the weight of this
      selector, so we have to re-define first-child/last-child margins below. */
      :host > ::slotted(h2) {
        position: relative;
        margin: 0;

        @apply --paper-font-title;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-top. */
      :host > ::slotted(h2:first-child) {
        margin-top: 24px;
        @apply --paper-dialog-title;
      }

      /* Apply mixin again, in case it sets margin-bottom. */
      :host > ::slotted(h2:last-child) {
        margin-bottom: 24px;
        @apply --paper-dialog-title;
      }

      :host > ::slotted(.paper-dialog-buttons),
      :host > ::slotted(.buttons) {
        position: relative;
        padding: 8px 8px 8px 24px;
        margin: 0;

        color: var(--paper-dialog-button-color, var(--primary-color));

        @apply --layout-horizontal;
        @apply --layout-end-justified;
      }
    </style>
  </template>
</dom-module>`;
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

class ButtonElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`;
  }

  static get is() {
    return 'vaadin-button';
  }

  static get version() {
    return '2.2.1';
  }

  ready() {
    super.ready(); // Leaving default role in the native button, makes navigation announcement
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


  disconnectedCallback() {
    super.disconnectedCallback(); // `active` state is preserved when the element is disconnected between keydown and keyup events.
    // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

    if (this.hasAttribute('active')) {
      this.removeAttribute('active');
    }
  }

  _addActiveListeners() {
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'down', () => !this.disabled && this.setAttribute('active', ''));
    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_6__["addListener"])(this, 'up', () => this.removeAttribute('active'));
    this.addEventListener('keydown', e => !this.disabled && [13, 32].indexOf(e.keyCode) >= 0 && this.setAttribute('active', ''));
    this.addEventListener('keyup', () => this.removeAttribute('active'));
    this.addEventListener('blur', () => this.removeAttribute('active'));
  }
  /**
   * @protected
   */


  get focusElement() {
    return this.$.button;
  }

}

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




const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`<dom-module id="material-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        padding: 8px;
        min-width: 64px;
        box-sizing: border-box;
        display: inline-flex;
        align-items: baseline;
        justify-content: center;
        border-radius: 4px;
        color: var(--material-primary-text-color);
        font-family: var(--material-font-family);
        text-transform: uppercase;
        font-size: var(--material-button-font-size);
        line-height: 20px;
        font-weight: 500;
        letter-spacing: 0.05em;
        white-space: nowrap;
        overflow: hidden;
        transition: box-shadow 0.2s;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      @-moz-document url-prefix() {
        :host {
          vertical-align: -13px;
        }
      }

      :host::before,
      :host::after {
        content: "";
        pointer-events: none;
        position: absolute;
        border-radius: inherit;
        opacity: 0;
        background-color: currentColor;
      }

      :host::before {
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        transition: opacity 0.5s;
      }

      :host::after {
        border-radius: 50%;
        width: 320px;
        height: 320px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        transition: all 0.9s;
      }

      [part="label"] ::slotted(*) {
        vertical-align: middle;
      }

      :host(:hover)::before,
      :host([focus-ring])::before {
        opacity: 0.08;
        transition-duration: 0.2s;
      }

      :host([active])::before {
        opacity: 0.16;
        transition: opacity 0.4s;
      }

      :host([active])::after {
        transform: translate(-50%, -50%) scale(0.0000001); /* animation works weirdly with scale(0) */
        opacity: 0.1;
        transition: 0s;
      }

      :host(:hover:not([active]))::after {
        transform: translate(-50%, -50%) scale(1);
        opacity: 0;
      }

      :host([disabled]) {
        pointer-events: none;
        color: var(--material-disabled-text-color);
      }

      /* Contained and outline variants */
      :host([theme~="contained"]),
      :host([theme~="outlined"]) {
        padding: 8px 16px;
      }

      :host([theme~="outlined"]) {
        box-shadow: inset 0 0 0 1px var(--_material-button-outline-color, rgba(0, 0, 0, 0.2));
      }

      :host([theme~="contained"]:not([disabled])) {
        background-color: var(--material-primary-color);
        color: var(--material-primary-contrast-color);
        box-shadow: var(--material-shadow-elevation-2dp);
      }

      :host([theme~="contained"][disabled]) {
        background-color: var(--material-secondary-background-color);
      }

      :host([theme~="contained"]:hover) {
        box-shadow: var(--material-shadow-elevation-4dp);
      }

      :host([theme~="contained"][active]) {
        box-shadow: var(--material-shadow-elevation-8dp);
      }

      /* Icon alignment */

      [part] ::slotted(iron-icon) {
        display: block;
        width: 18px;
        height: 18px;
      }

      [part="prefix"] ::slotted(iron-icon) {
        margin-right: 8px;
        margin-left: -4px;
      }

      [part="suffix"] ::slotted(iron-icon) {
        margin-left: 8px;
        margin-right: -4px;
      }
    </style>
  </template>
</dom-module>`;
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
const TabIndexMixin = superClass => class VaadinTabIndexMixin extends superClass {
  static get properties() {
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

};
/**
 * Polymer.IronControlState is not a proper 2.0 class, also, its tabindex
 * implementation fails in the shadow dom, so we have this for vaadin elements.
 * @polymerMixin
 */


const ControlStateMixin = superClass => class VaadinControlStateMixin extends TabIndexMixin(superClass) {
  static get properties() {
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

  ready() {
    this.addEventListener('focusin', e => {
      if (e.composedPath()[0] === this) {
        this._focus(e);
      } else if (e.composedPath().indexOf(this.focusElement) !== -1 && !this.disabled) {
        this._setFocused(true);
      }
    });
    this.addEventListener('focusout', e => this._setFocused(false)); // In super.ready() other 'focusin' and 'focusout' listeners might be
    // added, so we call it after our own ones to ensure they execute first.
    // Issue to watch out: when incorrect, <vaadin-combo-box> refocuses the
    // input field on iOS after “Done” is pressed.

    super.ready(); // This fixes the bug in Firefox 61 (https://bugzilla.mozilla.org/show_bug.cgi?id=1472887)
    // where focusout event does not go out of shady DOM because composed property in the event is not true

    const ensureEventComposed = e => {
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
    this.addEventListener('keydown', e => {
      if (!e.defaultPrevented && e.keyCode === 9) {
        if (e.shiftKey) {
          // Flag is checked in _focus event handler.
          this._isShiftTabbing = true;
          HTMLElement.prototype.focus.apply(this);

          this._setFocused(false); // Event handling in IE is asynchronous and the flag is removed asynchronously as well


          setTimeout(() => this._isShiftTabbing = false, 0);
        } else {
          // Workaround for FF63-65 bug that causes the focus to get lost when
          // blurring a slotted component with focusable shadow root content
          // https://bugzilla.mozilla.org/show_bug.cgi?id=1528686
          // TODO: Remove when safe
          const firefox = window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);

          if (firefox && parseFloat(firefox[1]) >= 63 && parseFloat(firefox[1]) < 66 && this.parentNode && this.nextSibling) {
            const fakeTarget = document.createElement('input');
            fakeTarget.style.position = 'absolute';
            fakeTarget.style.opacity = 0;
            fakeTarget.tabIndex = this.tabIndex;
            this.parentNode.insertBefore(fakeTarget, this.nextSibling);
            fakeTarget.focus();
            fakeTarget.addEventListener('focusout', () => this.parentNode.removeChild(fakeTarget));
          }
        }
      }
    });

    if (this.autofocus && !this.focused && !this.disabled) {
      window.requestAnimationFrame(() => {
        this._focus();

        this._setFocused(true);

        this.setAttribute('focus-ring', '');
      });
    }

    this._boundKeydownListener = this._bodyKeydownListener.bind(this);
    this._boundKeyupListener = this._bodyKeyupListener.bind(this);
  }
  /**
   * @protected
   */


  connectedCallback() {
    super.connectedCallback();
    document.body.addEventListener('keydown', this._boundKeydownListener, true);
    document.body.addEventListener('keyup', this._boundKeyupListener, true);
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback();
    document.body.removeEventListener('keydown', this._boundKeydownListener, true);
    document.body.removeEventListener('keyup', this._boundKeyupListener, true); // in non-Chrome browsers, blur does not fire on the element when it is disconnected.
    // reproducible in `<vaadin-date-picker>` when closing on `Cancel` or `Today` click.

    if (this.hasAttribute('focused')) {
      this._setFocused(false);
    }
  }

  _setFocused(focused) {
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

  _bodyKeydownListener(e) {
    this._tabPressed = e.keyCode === 9;
  }

  _bodyKeyupListener() {
    this._tabPressed = false;
  }
  /**
   * Any element extending this mixin is required to implement this getter.
   * It returns the actual focusable element in the component.
   */


  get focusElement() {
    window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`);
    return this;
  }

  _focus(e) {
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


  focus() {
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


  blur() {
    this.focusElement.blur();

    this._setFocused(false);
  }

  _disabledChanged(disabled) {
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

  _tabindexChanged(tabindex) {
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


  click() {
    if (!this.disabled) {
      super.click();
    }
  }

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
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
const DatePickerHelper = class VaadinDatePickerHelper {
  /**
   * Get ISO 8601 week number for the given date.
   *
   * @param {Date} Date object
   * @return {Number} Week number
   */
  static _getISOWeekNumber(date) {
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


  static _dateEquals(date1, date2) {
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


  static _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }
  /**
   * Get closest date from array of dates.
   *
   * @param {Date} date The date to compare dates with
   * @param {Array} dates Array of date objects
   * @return {Date} Closest date
   */


  static _getClosestDate(date, dates) {
    return dates.filter(date => date !== undefined).reduce((closestDate, candidate) => {
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


  static _extractDateParts(date) {
    return {
      day: date.getDate(),
      month: date.getMonth(),
      year: date.getFullYear()
    };
  }

};

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
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/





/**
 * @polymerMixin
 */

const DatePickerMixin = subclass => class VaadinDatePickerMixin extends Object(_polymer_polymer_lib_legacy_class_js__WEBPACK_IMPORTED_MODULE_4__["mixinBehaviors"])([_polymer_iron_resizable_behavior_iron_resizable_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronResizableBehavior"]], subclass) {
  static get properties() {
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
        value: () => {
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
            formatDate: d => {
              const yearStr = String(d.year).replace(/\d+/, y => '0000'.substr(y.length) + y);
              return [d.month + 1, d.day, yearStr].join('/');
            },
            parseDate: text => {
              const parts = text.split('/');
              const today = new Date();
              let date,
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
                  month,
                  year
                };
              }
            },
            formatTitle: (monthName, fullYear) => {
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

  static get observers() {
    return ['_updateHasValue(value)', '_validateInput(_selectedDate, _minDate, _maxDate)', '_selectedDateChanged(_selectedDate, i18n.formatDate)', '_focusedDateChanged(_focusedDate, i18n.formatDate)', '_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)'];
  }

  ready() {
    super.ready();
    this._boundOnScroll = this._onScroll.bind(this);
    this._boundFocus = this._focus.bind(this);
    this._boundUpdateAlignmentAndPosition = this._updateAlignmentAndPosition.bind(this);

    const isClearButton = e => {
      const path = e.composedPath();
      const inputIndex = path.indexOf(this._inputElement);
      return path.slice(0, inputIndex).filter(el => el.getAttribute && el.getAttribute('part') === 'clear-button').length === 1;
    };

    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_3__["addListener"])(this, 'tap', e => {
      // FIXME(platosha): use preventDefault in the text field clear button,
      // then the following composedPath check could be simplified down
      // to `if (!e.defaultPrevented)`.
      // https://github.com/vaadin/vaadin-text-field/issues/352
      if (!isClearButton(e)) {
        this.open();
      }
    });
    this.addEventListener('touchend', e => {
      if (!isClearButton(e)) {
        e.preventDefault();
      }
    });
    this.addEventListener('keydown', this._onKeydown.bind(this));
    this.addEventListener('input', this._onUserInput.bind(this));
    this.addEventListener('focus', e => this._noInput && e.target.blur());
    this.addEventListener('blur', e => !this.opened && this.validate());
  }

  _initOverlay() {
    this.$.overlay.removeAttribute('disable-upgrade');
    this._overlayInitialized = true;
    this.$.overlay.addEventListener('opened-changed', e => this.opened = e.detail.value);

    this._overlayContent.addEventListener('close', this._close.bind(this));

    this._overlayContent.addEventListener('focus-input', this._focusAndSelect.bind(this));

    this.$.overlay.addEventListener('vaadin-overlay-escape-press', this._boundFocus); // Keep focus attribute in focusElement for styling

    this._overlayContent.addEventListener('focus', () => this.focusElement._setFocused(true));

    this.$.overlay.addEventListener('vaadin-overlay-close', this._onVaadinOverlayClose.bind(this));
  }
  /**
   * @protected
   */


  disconnectedCallback() {
    super.disconnectedCallback();

    if (this._overlayInitialized) {
      this.$.overlay.removeEventListener('vaadin-overlay-escape-press', this._boundFocus);
    }

    this.opened = false;
  }
  /**
   * Opens the dropdown.
   */


  open() {
    if (!this.disabled && !this.readonly) {
      this.opened = true;
    }
  }

  _close(e) {
    if (e) {
      e.stopPropagation();
    }

    this._focus();

    this.close();
  }
  /**
   * Closes the dropdown.
   */


  close() {
    if (this._overlayInitialized) {
      this.$.overlay.close();
    }
  }

  get _inputElement() {
    return this._input();
  }

  get _nativeInput() {
    if (this._inputElement) {
      // vaadin-text-field's input is focusElement
      // iron-input's input is inputElement
      return this._inputElement.focusElement ? this._inputElement.focusElement : this._inputElement.inputElement ? this._inputElement.inputElement : window.unwrap ? window.unwrap(this._inputElement) : this._inputElement;
    }
  }

  _parseDate(str) {
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

  _isNoInput(fullscreen, ios, i18n) {
    return !this._inputElement || fullscreen || ios || !i18n.parseDate;
  }

  _formatISO(date) {
    if (!(date instanceof Date)) {
      return '';
    }

    const pad = (num, fmt = '00') => (fmt + num).substr((fmt + num).length - fmt.length);

    let yearSign = '';
    let yearFmt = '0000';
    let yearAbs = date.getFullYear();

    if (yearAbs < 0) {
      yearAbs = -yearAbs;
      yearSign = '-';
      yearFmt = '000000';
    } else if (date.getFullYear() >= 10000) {
      yearSign = '+';
      yearFmt = '000000';
    }

    const year = yearSign + pad(yearAbs, yearFmt);
    const month = pad(date.getMonth() + 1);
    const day = pad(date.getDate());
    return [year, month, day].join('-');
  }

  _openedChanged(opened) {
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

  _selectedDateChanged(selectedDate, formatDate) {
    if (selectedDate === undefined || formatDate === undefined) {
      return;
    }

    if (this.__userInputOccurred) {
      this.__dispatchChange = true;
    }

    const inputValue = selectedDate && formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(selectedDate));

    const value = this._formatISO(selectedDate);

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

  _focusedDateChanged(focusedDate, formatDate) {
    if (focusedDate === undefined || formatDate === undefined) {
      return;
    }

    this.__userInputOccurred = true;

    if (!this._ignoreFocusedDateChange && !this._noInput) {
      this._inputValue = focusedDate ? formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._extractDateParts(focusedDate)) : '';
    }
  }

  _updateHasValue(value) {
    if (value) {
      this.setAttribute('has-value', '');
    } else {
      this.removeAttribute('has-value');
    }
  }

  __getOverlayTheme(theme, overlayInitialized) {
    if (overlayInitialized) {
      return theme;
    }
  }

  _handleDateChange(property, value, oldValue) {
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

  _valueChanged(value, oldValue) {
    if (this.__dispatchChange) {
      this.dispatchEvent(new CustomEvent('change', {
        bubbles: true
      }));
    }

    this._handleDateChange('_selectedDate', value, oldValue);
  }

  _minChanged(value, oldValue) {
    this._handleDateChange('_minDate', value, oldValue);
  }

  _maxChanged(value, oldValue) {
    this._handleDateChange('_maxDate', value, oldValue);
  }

  _updateAlignmentAndPosition() {
    if (!this._overlayInitialized) {
      return;
    }

    if (!this._fullscreen) {
      const inputRect = this._inputElement.getBoundingClientRect();

      const bottomAlign = inputRect.top > window.innerHeight / 2;
      const rightAlign = inputRect.left + this.clientWidth / 2 > window.innerWidth / 2;

      if (rightAlign) {
        const viewportWidth = Math.min(window.innerWidth, document.documentElement.clientWidth);
        this.$.overlay.setAttribute('right-aligned', '');
        this.$.overlay.style.removeProperty('left');
        this.$.overlay.style.right = viewportWidth - inputRect.right + 'px';
      } else {
        this.$.overlay.removeAttribute('right-aligned');
        this.$.overlay.style.removeProperty('right');
        this.$.overlay.style.left = inputRect.left + 'px';
      }

      if (bottomAlign) {
        const viewportHeight = Math.min(window.innerHeight, document.documentElement.clientHeight);
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

  _fullscreenChanged() {
    if (this._overlayInitialized && this.$.overlay.opened) {
      this._updateAlignmentAndPosition();
    }
  }

  _onOverlayOpened() {
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


  _preventWebkitOverflowScrollingTouch(element) {
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

  _onOverlayClosed() {
    this._ignoreAnnounce = true;
    window.removeEventListener('scroll', this._boundOnScroll, true);
    this.removeEventListener('iron-resize', this._boundUpdateAlignmentAndPosition);

    if (this._touchPrevented) {
      this._touchPrevented.forEach(prevented => prevented.element.style.webkitOverflowScrolling = prevented.oldInlineValue);

      this._touchPrevented = [];
    }

    this.updateStyles(); // Select the parsed input or focused date

    this._ignoreFocusedDateChange = true;

    if (this.i18n.parseDate) {
      var inputValue = this._inputValue || '';
      const dateObject = this.i18n.parseDate(inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

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


  validate(value) {
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


  checkValidity(value) {
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

  _onScroll(e) {
    if (e.target === window || !this._overlayContent.contains(e.target)) {
      this._updateAlignmentAndPosition();
    }
  }

  _focus() {
    if (this._noInput) {
      this._overlayInitialized && this._overlayContent.focus();
    } else {
      this._inputElement.focus();
    }
  }

  _focusAndSelect() {
    this._focus();

    this._setSelectionRange(0, this._inputValue.length);
  }

  _setSelectionRange(a, b) {
    if (this._nativeInput && this._nativeInput.setSelectionRange) {
      this._nativeInput.setSelectionRange(a, b);
    }
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'enter', 'esc', 'tab'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _isValidDate(d) {
    return d && !isNaN(d.getTime());
  }

  _onKeydown(e) {
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
          const dateObject = this.i18n.parseDate(this._inputValue);

          const parsedDate = dateObject && this._parseDate(dateObject.year + '-' + (dateObject.month + 1) + '-' + dateObject.day);

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

  _validateInput(date, min, max) {
    if (date && (min || max)) {
      this.invalid = !_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateAllowed(date, min, max);
    }
  }

  _onUserInput(e) {
    if (!this.opened && this._inputElement.value) {
      this.open();
    }

    this._userInputValueChanged();
  }

  _userInputValueChanged(value) {
    if (this.opened && this._inputValue) {
      const dateObject = this.i18n.parseDate && this.i18n.parseDate(this._inputValue);

      const parsedDate = dateObject && this._parseDate(`${dateObject.year}-${dateObject.month + 1}-${dateObject.day}`);

      if (this._isValidDate(parsedDate)) {
        this._ignoreFocusedDateChange = true;

        if (!_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_2__["DatePickerHelper"]._dateEquals(parsedDate, this._focusedDate)) {
          this._focusedDate = parsedDate;
        }

        this._ignoreFocusedDateChange = false;
      }
    }
  }

  _announceFocusedDate(_focusedDate, opened, _ignoreAnnounce) {
    if (opened && !_ignoreAnnounce) {
      this._overlayContent.announceFocusedDate();
    }
  }

  get _overlayContent() {
    return this.$.overlay.content.querySelector('#overlay-content');
  }
  /**
   * Fired when the user commits a value change.
   *
   * @event change
   */


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
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
















/**
 * @memberof Vaadin
 * @private
 */

class DatePickerOverlayContentElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_6__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_7__["ThemePropertyMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_12__["html"]`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-date-picker-overlay-content';
  }

  static get properties() {
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

  ready() {
    super.ready();
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


  connectedCallback() {
    super.connectedCallback();

    this._closeYearScroller();

    this._toggleAnimateClass(true);

    Object(_polymer_polymer_lib_utils_gestures_js__WEBPACK_IMPORTED_MODULE_13__["setTouchAction"])(this.$.scrollers, 'pan-y');
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_4__["IronA11yAnnouncer"].requestAvailability();
  }

  announceFocusedDate() {
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


  focusCancel() {
    this.$.cancelButton.focus();
  }
  /**
   * Scrolls the list to the given Date.
   */


  scrollToDate(date, animate) {
    this._scrollToPosition(this._differenceInMonths(date, this._originDate), animate);
  }

  _focusedDateChanged(focusedDate) {
    this.revealDate(focusedDate);
  }

  _isCurrentYear(yearsFromNow) {
    return yearsFromNow === 0;
  }

  _isSelectedYear(yearsFromNow, selectedDate) {
    if (selectedDate) {
      return selectedDate.getFullYear() === this._originDate.getFullYear() + yearsFromNow;
    }
  }
  /**
   * Scrolls the month and year scrollers enough to reveal the given date.
   */


  revealDate(date) {
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

  _onOverlayFocus() {
    this._focused = true;
  }

  _onOverlayBlur() {
    this._focused = false;
  }

  _initialPositionChanged(initialPosition) {
    this.scrollToDate(initialPosition);
  }

  _repositionYearScroller() {
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
    this.$.yearScroller.position = (this.$.monthScroller.position + this._originDate.getMonth()) / 12;
  }

  _repositionMonthScroller() {
    this.$.monthScroller.position = this.$.yearScroller.position * 12 - this._originDate.getMonth();
    this._visibleMonthIndex = Math.floor(this.$.monthScroller.position);
  }

  _onMonthScroll() {
    this._repositionYearScroller();

    this._doIgnoreTaps();
  }

  _onYearScroll() {
    this._repositionMonthScroller();

    this._doIgnoreTaps();
  }

  _onYearScrollTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);

    this._repositionMonthScroller();
  }

  _onMonthScrollTouchStart() {
    this._repositionYearScroller();
  }

  _doIgnoreTaps() {
    this._ignoreTaps = true;
    this._debouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_14__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_15__["timeOut"].after(300), () => this._ignoreTaps = false);
  }

  _formatDisplayed(date, formatDate, label) {
    if (date) {
      return formatDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._extractDateParts(date));
    } else {
      return label;
    }
  }

  _onTodayTap() {
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

  _scrollToCurrentMonth() {
    if (this.focusedDate) {
      this.focusedDate = new Date();
    }

    this.scrollToDate(new Date(), true);
  }

  _showClear(selectedDate) {
    return !!selectedDate;
  }

  _onYearTap(e) {
    if (!this._ignoreTaps && !this._notTapping) {
      var scrollDelta = e.detail.y - (this.$.yearScroller.getBoundingClientRect().top + this.$.yearScroller.clientHeight / 2);
      var yearDelta = scrollDelta / this.$.yearScroller.itemHeight;

      this._scrollToPosition(this.$.monthScroller.position + yearDelta * 12, true);
    }
  }

  _scrollToPosition(targetPosition, animate) {
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

    var easingFunction = (t, b, c, d) => {
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

    var smoothScroll = timestamp => {
      start = start || timestamp;
      var currentTime = timestamp - start;

      if (currentTime < duration) {
        var currentPos = easingFunction(currentTime, initialPosition, this._targetPosition - initialPosition, duration);
        this.$.monthScroller.position = currentPos;
        window.requestAnimationFrame(smoothScroll);
      } else {
        this.dispatchEvent(new CustomEvent('scroll-animation-finished', {
          bubbles: true,
          composed: true,
          detail: {
            position: this._targetPosition,
            oldPosition: initialPosition
          }
        }));
        this.$.monthScroller.position = this._targetPosition;
        this._targetPosition = undefined;
      }

      setTimeout(this._repositionYearScroller.bind(this), 1);
    }; // Start the animation.


    window.requestAnimationFrame(smoothScroll);
  }

  _limit(value, range) {
    return Math.min(range.max, Math.max(range.min, value));
  }

  _handleTrack(e) {
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

  _track(e) {
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

  _toggleAnimateClass(enable) {
    if (enable) {
      this.classList.add('animate');
    } else {
      this.classList.remove('animate');
    }
  }

  _toggleYearScroller() {
    this._isYearScrollerVisible() ? this._closeYearScroller() : this._openYearScroller();
  }

  _openYearScroller() {
    this._translateX = 0;
    this.setAttribute('years-visible', '');
  }

  _closeYearScroller() {
    this.removeAttribute('years-visible');
    this._translateX = this._yearScrollerWidth;
  }

  _isYearScrollerVisible() {
    return this._translateX < this._yearScrollerWidth / 2;
  }

  _translateXChanged(x) {
    if (!this._desktopMode) {
      this.$.monthScroller.style.transform = 'translateX(' + (x - this._yearScrollerWidth) + 'px)';
      this.$.yearScroller.style.transform = 'translateX(' + x + 'px)';
    }
  }

  _yearAfterXYears(index) {
    var result = new Date(this._originDate);
    result.setFullYear(parseInt(index) + this._originDate.getFullYear());
    return result.getFullYear();
  }

  _yearAfterXMonths(months) {
    return this._dateAfterXMonths(months).getFullYear();
  }

  _dateAfterXMonths(months) {
    var result = new Date(this._originDate);
    result.setDate(1);
    result.setMonth(parseInt(months) + this._originDate.getMonth());
    return result;
  }

  _differenceInMonths(date1, date2) {
    var months = (date1.getFullYear() - date2.getFullYear()) * 12;
    return months - date2.getMonth() + date1.getMonth();
  }

  _differenceInYears(date1, date2) {
    return this._differenceInMonths(date1, date2) / 12;
  }

  _clear() {
    this.selectedDate = '';
  }

  _close() {
    const overlayContent = this.getRootNode().host;
    const overlay = overlayContent ? overlayContent.getRootNode().host : null;

    if (overlay) {
      overlay.opened = false;
    }

    this.dispatchEvent(new CustomEvent('close', {
      bubbles: true,
      composed: true
    }));
  }

  _cancel() {
    this.focusedDate = this.selectedDate;

    this._close();
  }

  _preventDefault(e) {
    e.preventDefault();
  }
  /**
   * Keyboard Navigation
   */


  _eventKey(e) {
    var keys = ['down', 'up', 'right', 'left', 'enter', 'space', 'home', 'end', 'pageup', 'pagedown', 'tab', 'esc'];

    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];

      if (_polymer_iron_a11y_keys_behavior_iron_a11y_keys_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronA11yKeysBehavior"].keyboardEventMatchesKeys(e, k)) {
        return k;
      }
    }
  }

  _onKeydown(e) {
    var focus = this._currentlyFocusedDate(); // Cannot use (today/cancel).focused flag because vaadin-text-field removes it
    // previously in the keydown event.


    const isToday = e.composedPath().indexOf(this.$.todayButton) >= 0;
    const isCancel = e.composedPath().indexOf(this.$.cancelButton) >= 0;
    const isScroller = !isToday && !isCancel;

    var eventKey = this._eventKey(e);

    if (eventKey === 'tab') {
      // We handle tabs here and don't want to bubble up.
      e.stopPropagation();
      const isFullscreen = this.hasAttribute('fullscreen');
      const isShift = e.shiftKey;

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
        setTimeout(() => this.revealDate(this.focusedDate), 1);
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

  _currentlyFocusedDate() {
    return this.focusedDate || this.selectedDate || this.initialPosition || new Date();
  }

  _focusDate(dateToFocus) {
    this.focusedDate = dateToFocus;
    this._focusedMonthDate = dateToFocus.getDate();
  }

  _focusClosestDate(focus) {
    this._focusDate(_vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_10__["DatePickerHelper"]._getClosestDate(focus, [this.minDate, this.maxDate]));
  }

  _moveFocusByDays(days) {
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

  _moveFocusByMonths(months) {
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

  _moveFocusInsideMonth(focusedDate, property) {
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

  _dateAllowed(date, min, max) {
    return (!min || date >= min) && (!max || date <= max);
  }

  _isTodayAllowed(min, max) {
    var today = new Date();
    var todayMidnight = new Date(0, 0);
    todayMidnight.setFullYear(today.getFullYear());
    todayMidnight.setMonth(today.getMonth());
    todayMidnight.setDate(today.getDate());
    return this._dateAllowed(todayMidnight, min, max);
  }

  _stopPropagation(e) {
    e.stopPropagation();
  }

}

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

class DatePickerOverlayElement extends Object(_polymer_polymer_lib_mixins_disable_upgrade_mixin_js__WEBPACK_IMPORTED_MODULE_1__["DisableUpgradeMixin"])(_vaadin_vaadin_overlay_src_vaadin_overlay_js__WEBPACK_IMPORTED_MODULE_0__["OverlayElement"]) {
  static get is() {
    return 'vaadin-date-picker-overlay';
  }

}

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

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">
  <template>
    <style>
      :host {
        align-items: flex-start;
        justify-content: flex-start;
      }

      :host([bottom-aligned]) {
        justify-content: flex-end;
      }

      :host([right-aligned]) {
        align-items: flex-end;
      }

      :host([right-aligned][dir="rtl"]) {
        align-items: flex-start;
      }

      [part="overlay"] {
        display: flex;
        flex: auto;
      }

      [part~="content"] {
        flex: auto;
      }
    </style>
  </template>
</dom-module>`;
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

class DatePickerElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_10__["ElementMixin"])(Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_5__["ControlStateMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_3__["ThemableMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_theme_property_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemePropertyMixin"])(Object(_vaadin_date_picker_mixin_js__WEBPACK_IMPORTED_MODULE_8__["DatePickerMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_1__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])))))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_11__["html"]`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`;
  }

  static get is() {
    return 'vaadin-date-picker';
  }

  static get version() {
    return '4.0.5';
  }

  static get properties() {
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

  static get observers() {
    return ['_userInputValueChanged(_userInputValue)', '_setClearButtonLabel(i18n.clear)'];
  }

  ready() {
    super.ready(); // In order to have synchronized invalid property, we need to use the same validate logic.

    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_12__["afterNextRender"])(this, () => this._inputElement.validate = () => {}); // FIXME(platosha): dispatch `input` event on
    // <vaadin-text-field> clear button
    // https://github.com/vaadin/vaadin-text-field/issues/347

    this._inputElement.addEventListener('change', () => {
      if (this._inputElement.value === '') {
        this.__dispatchChange = true;
        this.value = '';
        this.validate();
        this.__dispatchChange = false;
      }
    });
  }

  _onVaadinOverlayClose(e) {
    if (this._openedWithFocusRing && this.hasAttribute('focused')) {
      this.focusElement.setAttribute('focus-ring', '');
    } else if (!this.hasAttribute('focused')) {
      this.focusElement.blur();
    }

    if (e.detail.sourceEvent && e.detail.sourceEvent.composedPath().indexOf(this) !== -1) {
      e.preventDefault();
    }
  }

  _toggle(e) {
    e.stopPropagation();
    this[this._overlayInitialized && this.$.overlay.opened ? 'close' : 'open']();
  }

  _input() {
    return this.$.input;
  }

  set _inputValue(value) {
    this._inputElement.value = value;
  }

  get _inputValue() {
    return this._inputElement.value;
  }

  _getAriaExpanded(opened) {
    return Boolean(opened).toString();
  }
  /**
   * Focussable element used by vaadin-control-state-mixin
   */


  get focusElement() {
    return this._input() || this;
  }

  _setClearButtonLabel(i18nClear) {
    // FIXME(platosha): expose i18n API in <vaadin-text-field>
    // https://github.com/vaadin/vaadin-text-field/issues/348
    this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute('aria-label', i18nClear);
  }

}

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
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/







/**
 * @memberof Vaadin
 * @private
 */

class InfiniteScrollerElement extends _polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-infinite-scroller';
  }

  static get properties() {
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

  ready() {
    super.ready();
    this._buffers = Array.prototype.slice.call(this.root.querySelectorAll('.buffer'));
    this.$.fullHeight.style.height = this._initialScroll * 2 + 'px';
    var tpl = this.querySelector('template');
    this._TemplateClass = Object(_polymer_polymer_lib_utils_templatize_js__WEBPACK_IMPORTED_MODULE_4__["templatize"])(tpl, this, {
      forwardHostProp: function (prop, value) {
        if (prop !== 'index') {
          this._buffers.forEach(buffer => {
            [].forEach.call(buffer.children, insertionPoint => {
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

  _activated(active) {
    if (active && !this._initialized) {
      this._createPool();

      this._initialized = true;
    }
  }

  _finishInit() {
    if (!this._initDone) {
      // Once the first set of items start fading in, stamp the rest
      this._buffers.forEach(buffer => {
        [].forEach.call(buffer.children, insertionPoint => this._ensureStampedInstance(insertionPoint._itemWrapper));
      }, this);

      if (!this._buffers[0].translateY) {
        this._reset();
      }

      this._initDone = true;
    }
  }

  _translateBuffer(up) {
    var index = up ? 1 : 0;
    this._buffers[index].translateY = this._buffers[index ? 0 : 1].translateY + this._bufferHeight * (index ? -1 : 1);
    this._buffers[index].style.transform = 'translate3d(0, ' + this._buffers[index].translateY + 'px, 0)';
    this._buffers[index].updated = false;

    this._buffers.reverse();
  }

  _scroll() {
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
    this._debouncerScrollFinish = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerScrollFinish, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), () => {
      var scrollerRect = this.$.scroller.getBoundingClientRect();

      if (!this._isVisible(this._buffers[0], scrollerRect) && !this._isVisible(this._buffers[1], scrollerRect)) {
        this.position = this.position;
      }
    });
  }
  /**
   * Current scroller position as index. Can be a fractional number.
   *
   * @type {Number}
   */


  set position(index) {
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
      setTimeout(() => {
        // Restore -webkit-overflow-scrolling: touch; after a small delay.
        this.$.scroller.classList.remove('notouchscroll');
      }, 10);
    }
  }
  /**
   * @private
   */


  get position() {
    return (this.$.scroller.scrollTop - this._buffers[0].translateY) / this.itemHeight + this._firstIndex;
  }

  get itemHeight() {
    if (!this._itemHeightVal) {
      if (!(window.ShadyCSS && window.ShadyCSS.nativeCss)) {
        this.updateStyles();
      }

      const itemHeight = window.ShadyCSS ? window.ShadyCSS.getComputedStyleValue(this, '--vaadin-infinite-scroller-item-height') : getComputedStyle(this).getPropertyValue('--vaadin-infinite-scroller-item-height'); // Use background-position temp inline style for unit conversion

      const tmpStyleProp = 'background-position';
      this.$.fullHeight.style.setProperty(tmpStyleProp, itemHeight);
      const itemHeightPx = getComputedStyle(this.$.fullHeight).getPropertyValue(tmpStyleProp);
      this.$.fullHeight.style.removeProperty(tmpStyleProp);
      this._itemHeightVal = parseFloat(itemHeightPx);
    }

    return this._itemHeightVal;
  }

  get _bufferHeight() {
    return this.itemHeight * this.bufferSize;
  }

  _reset() {
    this._scrollDisabled = true;
    this.$.scroller.scrollTop = this._initialScroll;
    this._buffers[0].translateY = this._initialScroll - this._bufferHeight;
    this._buffers[1].translateY = this._initialScroll;

    this._buffers.forEach(buffer => {
      buffer.style.transform = 'translate3d(0, ' + buffer.translateY + 'px, 0)';
    });

    this._buffers[0].updated = this._buffers[1].updated = false;

    this._updateClones(true);

    this._debouncerUpdateClones = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncerUpdateClones, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(200), () => {
      this._buffers[0].updated = this._buffers[1].updated = false;

      this._updateClones();
    });
    this._scrollDisabled = false;
  }

  _createPool() {
    var container = this.getBoundingClientRect();

    this._buffers.forEach(buffer => {
      for (var i = 0; i < this.bufferSize; i++) {
        const itemWrapper = document.createElement('div');
        itemWrapper.style.height = this.itemHeight + 'px';
        itemWrapper.instance = {};
        const contentId = InfiniteScrollerElement._contentIndex = InfiniteScrollerElement._contentIndex + 1 || 0;
        const slotName = 'vaadin-infinite-scroller-item-content-' + contentId;
        const insertionPoint = document.createElement('slot');
        insertionPoint.setAttribute('name', slotName);
        insertionPoint._itemWrapper = itemWrapper;
        buffer.appendChild(insertionPoint);
        itemWrapper.setAttribute('slot', slotName);
        this.appendChild(itemWrapper); // This is needed by IE

        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_3__["flush"])();
        setTimeout(() => {
          // Only stamp the visible instances first
          if (this._isVisible(itemWrapper, container)) {
            this._ensureStampedInstance(itemWrapper);
          }
        }, 1); // Wait for first reset
      }
    }, this);

    setTimeout(() => {
      Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_6__["afterNextRender"])(this, this._finishInit.bind(this));
    }, 1);
  }

  _ensureStampedInstance(itemWrapper) {
    if (itemWrapper.firstElementChild) {
      return;
    }

    var tmpInstance = itemWrapper.instance;
    itemWrapper.instance = new this._TemplateClass({});
    itemWrapper.appendChild(itemWrapper.instance.root);
    Object.keys(tmpInstance).forEach(prop => {
      itemWrapper.instance.set(prop, tmpInstance[prop]);
    });
  }

  _updateClones(viewPortOnly) {
    this._firstIndex = ~~((this._buffers[0].translateY - this._initialScroll) / this.itemHeight) + this._initialIndex;
    var scrollerRect = viewPortOnly ? this.$.scroller.getBoundingClientRect() : undefined;

    this._buffers.forEach((buffer, bufferIndex) => {
      if (!buffer.updated) {
        var firstIndex = this._firstIndex + this.bufferSize * bufferIndex;
        [].forEach.call(buffer.children, (insertionPoint, index) => {
          const itemWrapper = insertionPoint._itemWrapper;

          if (!viewPortOnly || this._isVisible(itemWrapper, scrollerRect)) {
            itemWrapper.instance.index = firstIndex + index;
          }
        });
        buffer.updated = true;
      }
    }, this);
  }

  _isVisible(element, container) {
    var rect = element.getBoundingClientRect();
    return rect.bottom > container.top && rect.top < container.bottom;
  }

}

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
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/






/**
 * @memberof Vaadin
 * @private
 */

class MonthCalendarElement extends Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(Object(_polymer_polymer_lib_mixins_gesture_event_listeners_js__WEBPACK_IMPORTED_MODULE_2__["GestureEventListeners"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`;
  }

  static get is() {
    return 'vaadin-month-calendar';
  }

  static get properties() {
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

  static get observers() {
    return ['_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)'];
  }

  _dateEquals(date1, date2) {
    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateEquals(date1, date2);
  }

  _dateAllowed(date, min, max) {
    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._dateAllowed(date, min, max);
  }
  /* Returns true if all the dates in the month are out of the allowed range */


  _isDisabled(month, minDate, maxDate) {
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

  _getTitle(month, monthNames) {
    if (month === undefined || monthNames === undefined) {
      return;
    }

    return this.i18n.formatTitle(monthNames[month.getMonth()], month.getFullYear());
  }

  _onMonthGridTouchStart() {
    this._notTapping = false;
    setTimeout(() => this._notTapping = true, 300);
  }

  _dateAdd(date, delta) {
    date.setDate(date.getDate() + delta);
  }

  _applyFirstDayOfWeek(weekDayNames, firstDayOfWeek) {
    if (weekDayNames === undefined || firstDayOfWeek === undefined) {
      return;
    }

    return weekDayNames.slice(firstDayOfWeek).concat(weekDayNames.slice(0, firstDayOfWeek));
  }

  _getWeekDayNames(weekDayNames, weekDayNamesShort, showWeekNumbers, firstDayOfWeek) {
    if (weekDayNames === undefined || weekDayNamesShort === undefined || showWeekNumbers === undefined || firstDayOfWeek === undefined) {
      return;
    }

    weekDayNames = this._applyFirstDayOfWeek(weekDayNames, firstDayOfWeek);
    weekDayNamesShort = this._applyFirstDayOfWeek(weekDayNamesShort, firstDayOfWeek);
    weekDayNames = weekDayNames.map((day, index) => {
      return {
        weekDay: day,
        weekDayShort: weekDayNamesShort[index]
      };
    });
    return weekDayNames;
  }

  _getDate(date) {
    return date ? date.getDate() : '';
  }

  _showWeekNumbersChanged(showWeekNumbers, firstDayOfWeek) {
    if (showWeekNumbers && firstDayOfWeek === 1) {
      this.setAttribute('week-numbers', '');
    } else {
      this.removeAttribute('week-numbers');
    }
  }

  _showWeekSeparator(showWeekNumbers, firstDayOfWeek) {
    // Currently only supported for locales that start the week on Monday.
    return showWeekNumbers && firstDayOfWeek === 1;
  }

  _isToday(date) {
    return this._dateEquals(new Date(), date);
  }

  _getDays(month, firstDayOfWeek) {
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

  _getWeekNumber(date, days) {
    if (date === undefined || days === undefined) {
      return;
    }

    if (!date) {
      // Get the first non-null date from the days array.
      date = days.reduce((acc, d) => {
        return !acc && d ? d : acc;
      });
    }

    return _vaadin_date_picker_helper_js__WEBPACK_IMPORTED_MODULE_3__["DatePickerHelper"]._getISOWeekNumber(date);
  }

  _getWeekNumbers(dates) {
    return dates.map(date => this._getWeekNumber(date, dates)).filter((week, index, arr) => arr.indexOf(week) === index);
  }

  _handleTap(e) {
    if (!this.ignoreTaps && !this._notTapping && e.target.date && !e.target.hasAttribute('disabled')) {
      this.selectedDate = e.target.date;
      this.dispatchEvent(new CustomEvent('date-tap', {
        bubbles: true,
        composed: true
      }));
    }
  }

  _preventDefault(e) {
    e.preventDefault();
  }

  _getRole(date) {
    return date ? 'button' : 'presentation';
  }

  _getAriaLabel(date) {
    if (!date) {
      return '';
    }

    var ariaLabel = this._getDate(date) + ' ' + this.i18n.monthNames[date.getMonth()] + ' ' + date.getFullYear() + ', ' + this.i18n.weekdays[date.getDay()];

    if (this._isToday(date)) {
      ariaLabel += ', ' + this.i18n.today;
    }

    return ariaLabel;
  }

  _getAriaDisabled(date, min, max) {
    if (date === undefined || min === undefined || max === undefined) {
      return;
    }

    return this._dateAllowed(date, min, max) ? 'false' : 'true';
  }

}

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






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="material-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        font-family: var(--material-font-family);
        font-size: var(--material-body-font-size);
        -webkit-text-size-adjust: 100%;
        line-height: 1.4;

        /* FIXME(platosha): fix the core styles and remove this override. */
        background: transparent;
      }

      :host([fullscreen]) {
        position: absolute;
      }

      /* Fullscreen Toolbar */

      [part="overlay-header"] {
        display: flex;
        align-items: baseline;
        position: relative;
        z-index: 2;
        color: var(--material-body-text-color);
        background: var(--material-secondary-background-color);
        border-bottom: 2px solid var(--material-primary-color);
        padding: 8px;
        box-shadow: var(--material-shadow-elevation-4dp);
      }

      /* FIXME(platosha): fix the core styles and remove this override. */
      [part="overlay-header"]:not([desktop]) {
        padding-bottom: 8px;
      }

      [part="label"] {
        padding: 0 8px;
        flex: auto;
      }

      [part="clear-button"],
      [part="toggle-button"] {
        font-family: 'material-icons';
        font-size: var(--material-icon-font-size);
        line-height: 24px;
        width: 24px;
        height: 24px;
        text-align: center;
      }

      [part="clear-button"],
      [part="toggle-button"],
      [part="years-toggle-button"] {
        padding: 8px;
        color: var(--material-secondary-text-color);
      }

      [part="clear-button"]:hover,
      [part="toggle-button"]:hover,
      [part="years-toggle-button"]:hover {
        color: inherit;
      }

      [part="clear-button"]::before {
        content: var(--material-icons-clear);
      }

      [part="toggle-button"]::before {
        content: var(--material-icons-calendar);
      }

      [part="years-toggle-button"] {
        position: static;
        padding: 4px 8px;
        font-size: var(--material-body-font-size);
        font-weight: 500;
        line-height: 24px;
        letter-spacing: 0.05em;
        color: var(--material-secondary-text-color);
      }

      [part="years-toggle-button"]::before {
        content: '';
        display: none;
      }

      [part="years-toggle-button"]::after {
        content: var(--material-icons-play);
        display: inline-block;
        width: 24px;
        font-family: 'material-icons';
        font-size: var(--material-icon-font-size);
        line-height: 24px;
        text-align: center;
        transition: transform 100ms cubic-bezier(.4, 0, .2, 1);
      }

      :host([years-visible]) [part="years-toggle-button"]::after {
        transform: rotate(90deg);
      }

      /* Month scroller */

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 320px;
        text-align: center;
      }

      /* Year scroller */

      [part="years"] {
        z-index: 1;
        background: var(--material-secondary-text-color);
        color: var(--material-background-color);
        text-align: center;
      }

      [part="years"]::before {
        z-index: 2;
        border: 0;
        width: 8px;
        height: 8px;
        transform: translateX(-50%) rotate(-45deg);
        background: var(--material-background-color);
      }

      :host([years-visible]) [part="years"]::after {
        top: calc(20px + 16px);
        height: calc(100% - 20px - 16px);
      }

      [part="year-number"] {
        font-size: var(--material-small-font-size);
        line-height: 10px; /* NOTE(platosha): chosen to align years to months */
      }

      [part="year-separator"] {
        background-color: currentColor;
        width: 4px;
        height: 4px;
        border-radius: 50%;
        margin: calc(0.5 * var(--vaadin-infinite-scroller-item-height, 80px) - 0.5 * 10px - 0.5 * 4px) auto;
      }

      /* Bottom Bar */

      [part="toolbar"] {
        display: flex;
        justify-content: flex-end;
        padding: 8px 4px;
        border-top: 1px solid var(--material-divider-color);
      }

      [part="cancel-button"] {
        order: 1;
      }

      [part="today-button"] {
        order: 2;
      }

      [part="today-button"],
      [part="cancel-button"] {
        margin: 0 4px;
      }
    </style>
  </template>
</dom-module>`;
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


const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_1__["html"]`<dom-module id="material-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="material-overlay">
      :host([fullscreen]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: stretch;
      }

      [part="overlay"] {
        overflow: hidden;
        -webkit-overflow-scrolling: auto;
      }

      :host(:not([fullscreen])) [part="overlay"] {
        width: 360px;
        max-height: 500px;
        border-radius: 0 4px 4px;
      }

      :host(:not([fullscreen])[right-aligned]) [part="overlay"] {
        border-radius: 4px 0 4px 4px;
      }

      :host(:not([fullscreen])[bottom-aligned]) [part="overlay"] {
        border-radius: 4px;
      }

      :host(:not([fullscreen])[show-week-numbers]) [part="overlay"] {
        width: 396px;
      }

      [part="content"] {
        padding: 0;
      }
    </style>
  </template>
</dom-module>`;
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








const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"]`<dom-module id="material-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="material-field-button">
      :host {
        display: inline-flex;
        -webkit-tap-highlight-color: transparent;
      }

      [part="clear-button"]::before {
        content: var(--material-icons-clear);
      }

      [part="toggle-button"]::before {
        content: var(--material-icons-calendar);
      }
    </style>
  </template>
</dom-module>`;
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



const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`<dom-module id="material-date-picker-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        color: var(--material-body-text-color);
        padding: 0 calc(50% / 8 - 0.5em + 8px);
      }

      :host([show-week-numbers]) {
        padding: 0 calc(50% / 9 - 0.5em + 8px);
      }

      [part="month-header"] {
        font-size: var(--material-h6-font-size);
        line-height: 1;
        padding-top: 20px;
        margin-bottom: 8px;
      }

      [part="week-number"],
      [part="weekday"] {
        font-size: var(--material-caption-font-size);
        line-height: 44px;
        height: 40px;
        color: var(--material-secondary-text-color);
      }

      :host([disabled]),
      :host([disabled]) [part="week-number"],
      :host([disabled]) [part="weekday"] {
        color: var(--material-disabled-text-color);
      }

      [part="date"] {
        position: relative;
        font-size: var(--material-body-font-size);
        line-height: 42px;
        height: 40px;
        cursor: default;
      }

      [part="date"]::after {
        content: '';
        position: absolute;
        z-index: -4;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 38px;
        height: 38px;
        box-sizing: border-box;
        border-radius: 50%;
        border: 2px solid transparent;
      }

      /* Today */

      [part="date"][today] {
        color: var(--material-primary-text-color);
      }

      /* Hover */

      [part="date"]:not([disabled]):hover::after {
        background-color: var(--material-secondary-background-color);
        border-color: var(--material-secondary-background-color);
        z-index: -3;
      }

      /* Hide for touch devices */
      @media (hover: none) {
        [part="date"]:not([disabled]):hover::after {
          background-color: transparent;
          border-color: transparent;
          z-index: -4;
        }
      }

      /* Selected */

      [part="date"][selected] {
        font-weight: 500;
      }

      [part="date"]:not([disabled])[selected]::after,
      [part="date"][selected]::after {
        background-color: transparent;
        border-color: currentColor;
        z-index: -2;
      }

      /* Focused */

      [part="date"]:not([disabled])[focused],
      [part="date"]:not([disabled]):active {
        color: var(--material-primary-contrast-color);
      }

      [part="date"]:not([disabled])[focused]::after,
      [part="date"]:not([disabled]):active::after {
        opacity: 0.7;
        background-color: var(--material-primary-color);
        border-color: var(--material-primary-color);
        z-index: -1;
      }

      [part="date"][disabled] {
        color: var(--material-disabled-text-color);
      }

      :host([focused]) [part="date"]:not([disabled])[focused]::after {
        opacity: 1;
      }
    </style>
  </template>
</dom-module>`;
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
const DEV_MODE_CODE_REGEXP = /\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i;
const FlowClients = window.Vaadin && window.Vaadin.Flow && window.Vaadin.Flow.clients;

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
    const productionModeApps = Object.keys(FlowClients).map(key => FlowClients[key]).filter(client => client.productionMode);

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

  const match = DEV_MODE_CODE_REGEXP.exec(callback.toString());

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

const runIfDevelopmentMode = function (callback, args) {
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

let statsJob;
const registered = new Set();
/**
 * @polymerMixin
 */

const ElementMixin = superClass => class VaadinElementMixin extends superClass {
  /** @protected */
  static finalize() {
    super.finalize();
    const {
      is
    } = this; // Registers a class prototype for telemetry purposes.

    if (is && !registered.has(is)) {
      window.Vaadin.registrations.push(this);
      registered.add(is);

      if (window.Vaadin.developmentModeCallback) {
        statsJob = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_1__["Debouncer"].debounce(statsJob, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_0__["idlePeriod"], () => {
          window.Vaadin.developmentModeCallback['vaadin-usage-statistics']();
        });
        Object(_polymer_polymer_lib_utils_flush_js__WEBPACK_IMPORTED_MODULE_2__["enqueueDebouncer"])(statsJob);
      }
    }
  }

  constructor() {
    super();

    if (document.doctype === null) {
      console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.');
    }
  }

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

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="material-field-button">
  <template>
    <style>
      /* TODO(platosha): align icon sizes with other elements */
      [part\$="button"] {
        flex: none;
        width: 24px;
        height: 24px;
        padding: 4px;
        color: var(--material-secondary-text-color);
        font-size: var(--material-icon-font-size);
        line-height: 24px;
        text-align: center;
      }

      :host(:not([readonly])) [part\$="button"] {
        cursor: pointer;
      }

      :host(:not([readonly])) [part\$="button"]:hover {
        color: var(--material-text-color);
      }

      :host([disabled]) [part\$="button"],
      :host([readonly]) [part\$="button"] {
        color: var(--material-disabled-text-color);
      }

      :host([disabled]) [part="clear-button"] {
        display: none;
      }

      [part\$="button"]::before {
        font-family: "material-icons";
      }
    </style>
  </template>
</dom-module>`;
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

const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="material-required-field">
  <template>
    <style>
      [part="label"] {
        display: block;
        position: absolute;
        top: 8px;
        font-size: 1em;
        line-height: 1;
        height: 20px;
        margin-bottom: -4px;
        white-space: nowrap;
        overflow-x: hidden;
        text-overflow: ellipsis;
        color: var(--material-secondary-text-color);
        transform-origin: 0 75%;
        transform: scale(0.75);
      }

      :host([required]) [part="label"]::after {
        content: " *";
        color: inherit;
      }

      :host([invalid]) [part="label"] {
        color: var(--material-error-text-color);
      }

      [part="error-message"] {
        font-size: .75em;
        line-height: 1;
        color: var(--material-error-text-color);
      }

      /* Margin that doesn’t reserve space when there’s no error message */
      [part="error-message"]:not(:empty)::before {
        content: "";
        display: block;
        height: 6px;
      }

      :host(:not([invalid])) [part="error-message"] {
        margin-top: 0;
        max-height: 0;
        overflow: hidden;
      }

      :host([invalid]) [part="error-message"] {
        animation: reveal 0.2s;
      }

      @keyframes reveal {
        0% {
          opacity: 0;
        }
      }
    </style>
  </template>
</dom-module>`;
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
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/




const $_documentContainer = document.createElement('template');
$_documentContainer.innerHTML = `<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);
const HOST_PROPS = {
  default: ['list', 'autofocus', 'pattern', 'autocapitalize', 'autocorrect', 'maxlength', 'minlength', 'name', 'placeholder', 'autocomplete', 'title'],
  accessible: ['disabled', 'readonly', 'required', 'invalid']
};
const PROP_TYPE = {
  DEFAULT: 'default',
  ACCESSIBLE: 'accessible'
};
/**
 * @polymerMixin
 * @mixes Vaadin.ControlStateMixin
 */

const TextFieldMixin = subclass => class VaadinTextFieldMixin extends Object(_vaadin_vaadin_control_state_mixin_vaadin_control_state_mixin_js__WEBPACK_IMPORTED_MODULE_1__["ControlStateMixin"])(subclass) {
  static get properties() {
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
        value: () => {
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

  static get observers() {
    return ['_stateChanged(disabled, readonly, clearButtonVisible, hasValue)', '_hostPropsChanged(' + HOST_PROPS.default.join(', ') + ')', '_hostAccessiblePropsChanged(' + HOST_PROPS.accessible.join(', ') + ')', '_getActiveErrorId(invalid, errorMessage, _errorId)', '_getActiveLabelId(label, _labelId, _inputId)', '__observeOffsetHeight(errorMessage, invalid, label)'];
  }

  get focusElement() {
    if (!this.shadowRoot) {
      return;
    }

    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

    if (slotted) {
      return slotted;
    }

    return this.shadowRoot.querySelector('[part="value"]');
  }
  /**
   * @private
   */


  get inputElement() {
    return this.focusElement;
  }

  get _slottedTagName() {
    return 'input';
  }

  _createConstraintsObserver() {
    // This complex observer needs to be added dynamically here (instead of defining it above in the `get observers()`)
    // so that it runs after complex observers of inheriting classes. Otherwise e.g. `_stepOrMinChanged()` observer of
    // vaadin-number-field would run after this and the `min` and `step` properties would not yet be propagated to
    // the `inputElement` when this runs.
    this._createMethodObserver('_constraintsChanged(required, minlength, maxlength, pattern)');
  }

  _onInput(e) {
    if (this.__preventInput) {
      e.stopImmediatePropagation();
      this.__preventInput = false;
      return;
    }

    if (this.preventInvalidInput) {
      const input = this.inputElement;

      if (input.value.length > 0 && !this.checkValidity()) {
        input.value = this.value || ''; // add input-prevented attribute for 200ms

        this.setAttribute('input-prevented', '');
        this._inputDebouncer = _polymer_polymer_lib_utils_debounce_js__WEBPACK_IMPORTED_MODULE_3__["Debouncer"].debounce(this._inputDebouncer, _polymer_polymer_lib_utils_async_js__WEBPACK_IMPORTED_MODULE_2__["timeOut"].after(200), () => {
          this.removeAttribute('input-prevented');
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


  _stateChanged(disabled, readonly, clearButtonVisible, hasValue) {
    if (!disabled && !readonly && clearButtonVisible && hasValue) {
      this.$.clearButton.removeAttribute('hidden');
    } else {
      this.$.clearButton.setAttribute('hidden', true);
    }
  }

  _onChange(e) {
    if (this._valueClearing) {
      return;
    } // In the Shadow DOM, the `change` event is not leaked into the
    // ancestor tree, so we must do this manually.


    const changeEvent = new CustomEvent('change', {
      detail: {
        sourceEvent: e
      },
      bubbles: e.bubbles,
      cancelable: e.cancelable
    });
    this.dispatchEvent(changeEvent);
  }

  _valueChanged(newVal, oldVal) {
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

  _labelChanged(label) {
    if (label !== '' && label != null) {
      this.setAttribute('has-label', '');
    } else {
      this.removeAttribute('has-label');
    }
  }

  _onSlotChange() {
    const slotted = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

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

    Object.keys(PROP_TYPE).map(key => PROP_TYPE[key]).forEach(type => this._propagateHostAttributes(HOST_PROPS[type].map(attr => this[attr]), type));
  }

  _hostPropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.DEFAULT);
  }

  _hostAccessiblePropsChanged(...attributesValues) {
    this._propagateHostAttributes(attributesValues, PROP_TYPE.ACCESSIBLE);
  }

  _validateSlottedValue(slotted) {
    if (slotted.value !== this.value) {
      console.warn('Please define value on the vaadin-text-field component!');
      slotted.value = '';
    }
  }

  _propagateHostAttributes(attributesValues, type) {
    const input = this.inputElement;
    const attributeNames = HOST_PROPS[type];

    if (type === 'accessible') {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);

        this._setOrToggleAttribute(`aria-${attr}`, attributesValues[index], input);
      });
    } else {
      attributeNames.forEach((attr, index) => {
        this._setOrToggleAttribute(attr, attributesValues[index], input);
      });
    }
  }

  _setOrToggleAttribute(name, value, node) {
    if (!name || !node) {
      return;
    }

    if (value) {
      node.setAttribute(name, typeof value === 'boolean' ? '' : value);
    } else {
      node.removeAttribute(name);
    }
  }

  _constraintsChanged(required, minlength, maxlength, pattern) {
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


  checkValidity() {
    if (this.required || this.pattern || this.maxlength || this.minlength) {
      return this.inputElement.checkValidity();
    } else {
      return !this.invalid;
    }
  }

  _addInputListeners(node) {
    node.addEventListener('input', this._boundOnInput);
    node.addEventListener('change', this._boundOnChange);
    node.addEventListener('blur', this._boundOnBlur);
    node.addEventListener('focus', this._boundOnFocus);
  }

  _removeInputListeners(node) {
    node.removeEventListener('input', this._boundOnInput);
    node.removeEventListener('change', this._boundOnChange);
    node.removeEventListener('blur', this._boundOnBlur);
    node.removeEventListener('focus', this._boundOnFocus);
  }

  ready() {
    super.ready();

    this._createConstraintsObserver();

    this._boundOnInput = this._onInput.bind(this);
    this._boundOnChange = this._onChange.bind(this);
    this._boundOnBlur = this._onBlur.bind(this);
    this._boundOnFocus = this._onFocus.bind(this);
    const defaultInput = this.shadowRoot.querySelector('[part="value"]');
    this._slottedInput = this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);

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

    this.$.clearButton.addEventListener('mousedown', () => this._valueClearing = true);
    this.$.clearButton.addEventListener('mouseleave', () => this._valueClearing = false);
    this.$.clearButton.addEventListener('click', this._onClearButtonClick.bind(this));
    this.addEventListener('keydown', this._onKeyDown.bind(this));
    var uniqueId = TextFieldMixin._uniqueId = 1 + TextFieldMixin._uniqueId || 0;
    this._errorId = `${this.constructor.is}-error-${uniqueId}`;
    this._labelId = `${this.constructor.is}-label-${uniqueId}`;
    this._inputId = `${this.constructor.is}-input-${uniqueId}`; // Lumo theme defines a max-height transition for the "error-message"
    // part on invalid state change.

    this.shadowRoot.querySelector('[part="error-message"]').addEventListener('transitionend', () => {
      this.__observeOffsetHeight();
    });
  }
  /**
   * Returns true if `value` is valid.
   * `<iron-form>` uses this to check the validity for all its elements.
   *
   * @return {boolean} True if the value is valid.
   */


  validate() {
    return !(this.invalid = !this.checkValidity());
  }

  clear() {
    this.value = '';
  }

  _onBlur() {
    this.validate();
  }

  _onFocus() {
    if (this.autoselect) {
      this.inputElement.select(); // iOS 9 workaround: https://stackoverflow.com/a/7436574

      setTimeout(() => {
        try {
          this.inputElement.setSelectionRange(0, 9999);
        } catch (e) {// The workaround may cause errors on different input types.
          // Needs to be suppressed. See https://github.com/vaadin/flow/issues/6070
        }
      });
    }
  }

  _onClearButtonClick(e) {
    e.preventDefault(); // NOTE(yuriy): This line won't affect focus on the host. Cannot be properly tested.

    this.inputElement.focus();
    this.clear();
    this._valueClearing = false;

    if (navigator.userAgent.match(/Trident/)) {
      // Disable IE input" event prevention here, we want the input event from
      // below to propagate normally.
      this.__preventInput = false;
    }

    const inputEvent = new Event('input', {
      bubbles: true,
      composed: true
    });
    inputEvent.__fromClearButton = true;
    const changeEvent = new Event('change', {
      bubbles: !this._slottedInput
    });
    changeEvent.__fromClearButton = true;
    this.inputElement.dispatchEvent(inputEvent);
    this.inputElement.dispatchEvent(changeEvent);
  }

  _onKeyDown(e) {
    if (e.keyCode === 27 && this.clearButtonVisible) {
      const dispatchChange = !!this.value;
      this.clear();
      dispatchChange && this.inputElement.dispatchEvent(new Event('change', {
        bubbles: !this._slottedInput
      }));
    }
  }

  _addIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      // IE11 dispatches `input` event in following cases:
      // - focus or blur, when placeholder attribute is set
      // - placeholder attribute value changed
      // https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/101220/
      this._shouldPreventInput = () => {
        this.__preventInput = true;
        requestAnimationFrame(() => {
          this.__preventInput = false;
        });
      };

      node.addEventListener('focusin', this._shouldPreventInput);
      node.addEventListener('focusout', this._shouldPreventInput);

      this._createPropertyObserver('placeholder', this._shouldPreventInput);
    }
  }

  _removeIEListeners(node) {
    /* istanbul ignore if */
    if (navigator.userAgent.match(/Trident/)) {
      node.removeEventListener('focusin', this._shouldPreventInput);
      node.removeEventListener('focusout', this._shouldPreventInput);
    }
  }

  _getActiveErrorId(invalid, errorMessage, errorId) {
    this._setOrToggleAttribute('aria-describedby', errorMessage && invalid ? errorId : undefined, this.focusElement);
  }

  _getActiveLabelId(label, _labelId, _inputId) {
    let ids = _inputId;

    if (label) {
      ids = `${_labelId} ${_inputId}`;
    }

    this.focusElement.setAttribute('aria-labelledby', ids);
  }

  _getErrorMessageAriaHidden(invalid, errorMessage, errorId) {
    return (!(errorMessage && invalid ? errorId : undefined)).toString();
  }

  _dispatchIronResizeEventIfNeeded(sizePropertyName, value) {
    const previousSizePropertyName = '__previous' + sizePropertyName;

    if (this[previousSizePropertyName] !== undefined && this[previousSizePropertyName] !== value) {
      this.dispatchEvent(new CustomEvent('iron-resize', {
        bubbles: true
      }));
    }

    this[previousSizePropertyName] = value;
  }

  __observeOffsetHeight() {
    this._dispatchIronResizeEventIfNeeded('Height', this.offsetHeight);
  }
  /**
   * @protected
   */


  attributeChangedCallback(prop, oldVal, newVal) {
    super.attributeChangedCallback(prop, oldVal, newVal); // Needed until Edge has CSS Custom Properties (present in Edge Preview)

    /* istanbul ignore if */

    if (!(window.ShadyCSS && window.ShadyCSS.nativeCss) && /^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(prop)) {
      this.updateStyles();
    } // Safari has an issue with repainting shadow root element styles when a host attribute changes.
    // Need this workaround (toggle any inline css property on and off) until the issue gets fixed.


    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    /* istanbul ignore if */

    if (isSafari && this.root) {
      const WEBKIT_PROPERTY = '-webkit-backface-visibility';
      this.root.querySelectorAll('*').forEach(el => {
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

class TextFieldElement extends Object(_vaadin_vaadin_element_mixin_vaadin_element_mixin_js__WEBPACK_IMPORTED_MODULE_2__["ElementMixin"])(Object(_vaadin_text_field_mixin_js__WEBPACK_IMPORTED_MODULE_1__["TextFieldMixin"])(Object(_vaadin_vaadin_themable_mixin_vaadin_themable_mixin_js__WEBPACK_IMPORTED_MODULE_4__["ThemableMixin"])(_polymer_polymer_polymer_element_js__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]))) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`;
  }

  static get is() {
    return 'vaadin-text-field';
  }

  static get version() {
    return '2.4.14';
  }

  static get properties() {
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

}

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






const $_documentContainer = _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"]`<dom-module id="material-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="material-required-field material-field-button">
      :host {
        display: inline-flex;
        position: relative;
        padding-top: 8px;
        margin-bottom: 8px;
        outline: none;
        color: var(--material-body-text-color);
        font-size: var(--material-body-font-size);
        line-height: 24px;
        font-family: var(--material-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host::before {
        line-height: 32px;
      }

      /* Strange gymnastics to make fields vertically align nicely in most cases
         (no label, with label, without prefix, with prefix, etc.) */

      :host([has-label]) {
        padding-top: 24px;
      }

      [part="label"]:empty {
        display: none;
      }

      [part="label"]:empty::before {
        content: " ";
        position: absolute;
      }

      [part="input-field"] {
        position: relative;
        top: -0.2px; /* NOTE(platosha): Adjusts for wrong flex baseline in Chrome & Safari */
        height: 32px;
        padding-left: 0;
        background-color: transparent;
        margin: 0;
      }

      [part="input-field"]::before,
      [part="input-field"]::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        height: 1px;
        transform-origin: 50% 0%;
        background-color: var(--_material-text-field-input-line-background-color, #000);
        opacity: var(--_material-text-field-input-line-opacity, 0.42);
      }

      [part="input-field"]::after {
        background-color: var(--material-primary-color);
        opacity: 0;
        height: 2px;
        bottom: 0;
        transform: scaleX(0);
        transition: opacity 0.175s;
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(input),
      :host([disabled]) [part="input-field"] ::slotted(textarea),
      :host([disabled]) [part="input-field"] ::slotted([part="value"]) {
        color: var(--material-disabled-text-color);
        -webkit-text-fill-color: var(--material-disabled-text-color);
      }

      [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(input),
      :host([disabled]) [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        outline: none;
        margin: 0;
        border: 0;
        border-radius: 0;
        padding: 8px 0;
        width: 100%;
        height: 100%;
        font-family: inherit;
        font-size: 1em;
        line-height: inherit;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      /* TODO: the text opacity should be 42%, but the disabled style is 38%.
      Would need to introduce another property for it if we want to be 100% accurate. */
      [part="value"]::-webkit-input-placeholder {
        color: var(--material-disabled-text-color);
        transition: opacity 0.175s 0.05s;
        opacity: 1;
      }

      [part="value"]:-ms-input-placeholder {
        color: var(--material-disabled-text-color);
      }

      [part="value"]::-moz-placeholder {
        color: var(--material-disabled-text-color);
        transition: opacity 0.175s 0.05s;
        opacity: 1;
      }

      [part="value"]::placeholder {
        color: var(--material-disabled-text-color);
        transition: opacity 0.175s 0.1s;
        opacity: 1;
      }

      :host([has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
        transition-delay: 0;
      }

      :host([has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="value"]::-moz-placeholder {
        opacity: 0;
        transition-delay: 0;
      }

      :host([has-label]:not([focused]):not([invalid]):not([theme="always-float-label"])) [part="value"]::placeholder {
        opacity: 0;
        transition-delay: 0;
      }

      /* IE11 doesn’t show the placeholder when the input is focused, so it’s basically useless for this theme */
      :host([has-label]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      [part="label"] {
        width: 133%;
        transition: transform 0.175s, color 0.175s, width 0.175s;
        transition-timing-function: ease, ease, step-end;
      }

      /* TODO: using unsupported selector to fix IE11 (even thought the label element is scaled down,
         the 133% width still takes the same space as an unscaled element */
      ::-ms-backdrop,
      .vaadin-text-field-container {
        overflow: hidden;
      }

      /* Same fix for MS Edge ^^   */
      @supports (-ms-ime-align:auto) {
        .vaadin-text-field-container {
          overflow: hidden;
        }
      }

      :host(:hover:not([readonly]):not([invalid])) [part="input-field"]::before {
        opacity: var(--_material-text-field-input-line-hover-opacity, 0.87);
      }

      :host([focused]:not([invalid])) [part="label"] {
        color: var(--material-primary-text-color);
      }

      :host([focused]) [part="input-field"]::after,
      :host([invalid]) [part="input-field"]::after {
        opacity: 1;
        transform: none;
        transition: transform 0.175s, opacity 0.175s;
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--material-error-color);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--material-error-text-color);
      }

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        color: var(--material-disabled-text-color);
      }

      :host([disabled]) [part="input-field"]::before {
        background-color: transparent;
        background-image: linear-gradient(90deg, var(--_material-text-field-input-line-background-color, #000) 0, var(--_material-text-field-input-line-background-color, #000) 2px, transparent 2px);
        background-size: 4px 1px;
        background-repeat: repeat-x;
      }

      /* Only target the visible floating label */
      :host([has-label]:not([has-value]):not([focused]):not([invalid]):not([theme~="always-float-label"])) [part="label"] {
        width: 100%;
        /* IE11 doesn’t work with calc inside the translate function, so we need to have a fixed pixel value instead of 50% + 16px */
        transform: scale(1) translateY(24px);
        transition-timing-function: ease, ease, step-start;
        pointer-events: none;
        left: auto;
        transition-delay: 0.1s;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(*:not([part="value"]):not([part\$="-button"]):not(input):not(textarea)) {
        color: var(--material-secondary-text-color);
      }

      [part="clear-button"]::before {
        content: var(--material-icons-clear);
      }
    </style>
  </template>
</dom-module>`;
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

const usageStatistics = function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35tb3JlLWluZm8tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2FwcC1sYXlvdXQvYXBwLXRvb2xiYXIvYXBwLXRvb2xiYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24taWNvbi9pcm9uLWljb24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tbWVkaWEtcXVlcnkvaXJvbi1tZWRpYS1xdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItY2FyZC9wYXBlci1jYXJkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWJ1dHRvbi9zcmMvdmFhZGluLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tYnV0dG9uL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi1idXR0b24tc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1idXR0b24vdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi92YWFkaW4tY29udHJvbC1zdGF0ZS1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3NyYy92YWFkaW4tZGF0ZS1waWNrZXItbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3NyYy92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRhdGUtcGlja2VyL3NyYy92YWFkaW4tZGF0ZS1waWNrZXItc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWRhdGUtcGlja2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci9zcmMvdmFhZGluLW1vbnRoLWNhbGVuZGFyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci90aGVtZS9tYXRlcmlhbC92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50LXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci90aGVtZS9tYXRlcmlhbC92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tZGF0ZS1waWNrZXIvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWRhdGUtcGlja2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci90aGVtZS9tYXRlcmlhbC92YWFkaW4tbW9udGgtY2FsZW5kYXItc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1kYXRlLXBpY2tlci90aGVtZS9tYXRlcmlhbC92YWFkaW4tbW9udGgtY2FsZW5kYXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IvdmFhZGluLWRldmVsb3BtZW50LW1vZGUtZGV0ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLWVsZW1lbnQtbWl4aW4vdmFhZGluLWVsZW1lbnQtbWl4aW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9taXhpbnMvZmllbGQtYnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL3JlcXVpcmVkLWZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3NyYy92YWFkaW4tdGV4dC1maWVsZC1taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC9zcmMvdmFhZGluLXRleHQtZmllbGQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLXRleHQtZmllbGQvdGhlbWUvbWF0ZXJpYWwvdmFhZGluLXRleHQtZmllbGQtc3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL3RoZW1lL21hdGVyaWFsL3ZhYWRpbi10ZXh0LWZpZWxkLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLWNvbGxlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B2YWFkaW4vdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MvdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcbmltcG9ydCB7aHRtbH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG4vKipcbmFwcC10b29sYmFyIGlzIGEgaG9yaXpvbnRhbCB0b29sYmFyIGNvbnRhaW5pbmcgaXRlbXMgdGhhdCBjYW4gYmUgdXNlZCBmb3JcbmxhYmVsLCBuYXZpZ2F0aW9uLCBzZWFyY2ggYW5kIGFjdGlvbnMuXG5cbiMjIyBFeGFtcGxlXG5cbkFkZCBhIHRpdGxlIHRvIHRoZSB0b29sYmFyLlxuXG5gYGBodG1sXG48YXBwLXRvb2xiYXI+XG4gIDxkaXYgbWFpbi10aXRsZT5BcHAgbmFtZTwvZGl2PlxuPC9hcHAtdG9vbGJhcj5cbmBgYFxuXG5BZGQgYSBidXR0b24gdG8gdGhlIGxlZnQgYW5kIHJpZ2h0IHNpZGUgb2YgdGhlIHRvb2xiYXIuXG5cbmBgYGh0bWxcbjxhcHAtdG9vbGJhcj5cbiAgPHBhcGVyLWljb24tYnV0dG9uIGljb249XCJtZW51XCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbiAgPGRpdiBtYWluLXRpdGxlPkFwcCBuYW1lPC9kaXY+XG4gIDxwYXBlci1pY29uLWJ1dHRvbiBpY29uPVwic2VhcmNoXCI+PC9wYXBlci1pY29uLWJ1dHRvbj5cbjwvYXBwLXRvb2xiYXI+XG5gYGBcblxuWW91IGNhbiB1c2UgdGhlIGF0dHJpYnV0ZXMgYHRvcC1pdGVtYCBvciBgYm90dG9tLWl0ZW1gIHRvIGNvbXBsZXRlbHkgZml0IGFuXG5lbGVtZW50IHRvIHRoZSB0b3Agb3IgYm90dG9tIG9mIHRoZSB0b29sYmFyIHJlc3BlY3RpdmVseS5cblxuIyMjIENvbnRlbnQgYXR0cmlidXRlc1xuXG5BdHRyaWJ1dGUgICAgICAgICAgICB8IERlc2NyaXB0aW9uXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gbWFpbi10aXRsZWAgICAgICAgICB8IFRoZSBtYWluIHRpdGxlIGVsZW1lbnQuXG5gY29uZGVuc2VkLXRpdGxlYCAgICB8IFRoZSB0aXRsZSBlbGVtZW50IGlmIHVzZWQgaW5zaWRlIGEgY29uZGVuc2VkIGFwcC1oZWFkZXIuXG5gc3BhY2VyYCAgICAgICAgICAgICB8IEFkZHMgYSBsZWZ0IG1hcmdpbiBvZiBgNjRweGAuXG5gYm90dG9tLWl0ZW1gICAgICAgICB8IFN0aWNrcyB0aGUgZWxlbWVudCB0byB0aGUgYm90dG9tIG9mIHRoZSB0b29sYmFyLlxuYHRvcC1pdGVtYCAgICAgICAgICAgfCBTdGlja3MgdGhlIGVsZW1lbnQgdG8gdGhlIHRvcCBvZiB0aGUgdG9vbGJhci5cblxuIyMjIFN0eWxpbmdcblxuQ3VzdG9tIHByb3BlcnR5ICAgICAgICAgICAgICB8IERlc2NyaXB0aW9uICAgICAgICAgICAgICAgICAgfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbmAtLWFwcC10b29sYmFyLWZvbnQtc2l6ZWAgICAgfCBUb29sYmFyIGZvbnQgc2l6ZSAgICAgICAgICAgIHwgMjBweFxuXG5AZ3JvdXAgQXBwIEVsZW1lbnRzXG5AZWxlbWVudCBhcHAtdG9vbGJhclxuQGRlbW8gYXBwLXRvb2xiYXIvZGVtby9pbmRleC5odG1sXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWhvcml6b250YWw7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1jZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDE2cHg7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBmb250LXNpemU6IHZhcigtLWFwcC10b29sYmFyLWZvbnQtc2l6ZSwgMjBweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQocGFwZXItaWNvbi1idXR0b24pIHtcbiAgICAgICAgLyogcGFwZXItaWNvbi1idXR0b24vaXNzdWVzLzMzICovXG4gICAgICAgIGZvbnQtc2l6ZTogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKFttYWluLXRpdGxlXSksXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoW2NvbmRlbnNlZC10aXRsZV0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1mbGV4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoW2JvdHRvbS1pdGVtXSkge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZChbdG9wLWl0ZW1dKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgOjpzbG90dGVkKFtzcGFjZXJdKSB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA2NHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAnYXBwLXRvb2xiYXInXG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuXG5pbXBvcnQge0lyb25NZXRhfSBmcm9tICdAcG9seW1lci9pcm9uLW1ldGEvaXJvbi1tZXRhLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7QmFzZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8qKlxuXG5UaGUgYGlyb24taWNvbmAgZWxlbWVudCBkaXNwbGF5cyBhbiBpY29uLiBCeSBkZWZhdWx0IGFuIGljb24gcmVuZGVycyBhcyBhIDI0cHhcbnNxdWFyZS5cblxuRXhhbXBsZSB1c2luZyBzcmM6XG5cbiAgICA8aXJvbi1pY29uIHNyYz1cInN0YXIucG5nXCI+PC9pcm9uLWljb24+XG5cbkV4YW1wbGUgc2V0dGluZyBzaXplIHRvIDMycHggeCAzMnB4OlxuXG4gICAgPGlyb24taWNvbiBjbGFzcz1cImJpZ1wiIHNyYz1cImJpZ19zdGFyLnBuZ1wiPjwvaXJvbi1pY29uPlxuXG4gICAgPHN0eWxlIGlzPVwiY3VzdG9tLXN0eWxlXCI+XG4gICAgICAuYmlnIHtcbiAgICAgICAgLS1pcm9uLWljb24taGVpZ2h0OiAzMnB4O1xuICAgICAgICAtLWlyb24taWNvbi13aWR0aDogMzJweDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG5UaGUgaXJvbiBlbGVtZW50cyBpbmNsdWRlIHNldmVyYWwgc2V0cyBvZiBpY29ucy4gVG8gdXNlIHRoZSBkZWZhdWx0IHNldCBvZlxuaWNvbnMsIGltcG9ydCBgaXJvbi1pY29ucy5qc2AgYW5kIHVzZSB0aGUgYGljb25gIGF0dHJpYnV0ZSB0byBzcGVjaWZ5IGFuIGljb246XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCBcIkBwb2x5bWVyL2lyb24taWNvbnMvaXJvbi1pY29ucy5qc1wiO1xuICAgIDwvc2NyaXB0PlxuXG4gICAgPGlyb24taWNvbiBpY29uPVwibWVudVwiPjwvaXJvbi1pY29uPlxuXG5UbyB1c2UgYSBkaWZmZXJlbnQgYnVpbHQtaW4gc2V0IG9mIGljb25zLCBpbXBvcnQgdGhlIHNwZWNpZmljXG5gaXJvbi1pY29ucy88aWNvbnNldD4taWNvbnMuanNgLCBhbmQgc3BlY2lmeSB0aGUgaWNvbiBhcyBgPGljb25zZXQ+OjxpY29uPmAuXG5Gb3IgZXhhbXBsZSwgdG8gdXNlIGEgY29tbXVuaWNhdGlvbiBpY29uLCB5b3Ugd291bGQgdXNlOlxuXG4gICAgPHNjcmlwdCB0eXBlPVwibW9kdWxlXCI+XG4gICAgICBpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb25zL2NvbW11bmljYXRpb24taWNvbnMuanNcIjtcbiAgICA8L3NjcmlwdD5cblxuICAgIDxpcm9uLWljb24gaWNvbj1cImNvbW11bmljYXRpb246ZW1haWxcIj48L2lyb24taWNvbj5cblxuWW91IGNhbiBhbHNvIGNyZWF0ZSBjdXN0b20gaWNvbiBzZXRzIG9mIGJpdG1hcCBvciBTVkcgaWNvbnMuXG5cbkV4YW1wbGUgb2YgdXNpbmcgYW4gaWNvbiBuYW1lZCBgY2hlcnJ5YCBmcm9tIGEgY3VzdG9tIGljb25zZXQgd2l0aCB0aGUgSURcbmBmcnVpdGA6XG5cbiAgICA8aXJvbi1pY29uIGljb249XCJmcnVpdDpjaGVycnlcIj48L2lyb24taWNvbj5cblxuU2VlIGA8aXJvbi1pY29uc2V0PmAgYW5kIGA8aXJvbi1pY29uc2V0LXN2Zz5gIGZvciBtb3JlIGluZm9ybWF0aW9uIGFib3V0IGhvdyB0b1xuY3JlYXRlIGEgY3VzdG9tIGljb25zZXQuXG5cblNlZSB0aGUgYGlyb24taWNvbnNgIGRlbW8gdG8gc2VlIHRoZSBpY29ucyBhdmFpbGFibGUgaW4gdGhlIHZhcmlvdXMgaWNvbnNldHMuXG5cbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0taXJvbi1pY29uYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGljb24gfCB7fVxuYC0taXJvbi1pY29uLXdpZHRoYCB8IFdpZHRoIG9mIHRoZSBpY29uIHwgYDI0cHhgXG5gLS1pcm9uLWljb24taGVpZ2h0YCB8IEhlaWdodCBvZiB0aGUgaWNvbiB8IGAyNHB4YFxuYC0taXJvbi1pY29uLWZpbGwtY29sb3JgIHwgRmlsbCBjb2xvciBvZiB0aGUgc3ZnIGljb24gfCBgY3VycmVudGNvbG9yYFxuYC0taXJvbi1pY29uLXN0cm9rZS1jb2xvcmAgfCBTdHJva2UgY29sb3Igb2YgdGhlIHN2ZyBpY29uIHwgbm9uZVxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGVsZW1lbnQgaXJvbi1pY29uXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG5AaG9tZXBhZ2UgcG9seW1lci5naXRodWIuaW9cbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWlubGluZTtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWNlbnRlci1jZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXG4gICAgICAgIGZpbGw6IHZhcigtLWlyb24taWNvbi1maWxsLWNvbG9yLCBjdXJyZW50Y29sb3IpO1xuICAgICAgICBzdHJva2U6IHZhcigtLWlyb24taWNvbi1zdHJva2UtY29sb3IsIG5vbmUpO1xuXG4gICAgICAgIHdpZHRoOiB2YXIoLS1pcm9uLWljb24td2lkdGgsIDI0cHgpO1xuICAgICAgICBoZWlnaHQ6IHZhcigtLWlyb24taWNvbi1oZWlnaHQsIDI0cHgpO1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWljb247XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbmAsXG5cbiAgaXM6ICdpcm9uLWljb24nLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSBpY29uIHRvIHVzZS4gVGhlIG5hbWUgc2hvdWxkIGJlIG9mIHRoZSBmb3JtOlxuICAgICAqIGBpY29uc2V0X25hbWU6aWNvbl9uYW1lYC5cbiAgICAgKi9cbiAgICBpY29uOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBuYW1lIG9mIHRoZSB0aGVtZSB0byB1c2VkLCBpZiBvbmUgaXMgc3BlY2lmaWVkIGJ5IHRoZVxuICAgICAqIGljb25zZXQuXG4gICAgICovXG4gICAgdGhlbWU6IHt0eXBlOiBTdHJpbmd9LFxuXG4gICAgLyoqXG4gICAgICogSWYgdXNpbmcgaXJvbi1pY29uIHdpdGhvdXQgYW4gaWNvbnNldCwgeW91IGNhbiBzZXQgdGhlIHNyYyB0byBiZVxuICAgICAqIHRoZSBVUkwgb2YgYW4gaW5kaXZpZHVhbCBpY29uIGltYWdlIGZpbGUuIE5vdGUgdGhhdCB0aGlzIHdpbGwgdGFrZVxuICAgICAqIHByZWNlZGVuY2Ugb3ZlciBhIGdpdmVuIGljb24gYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHNyYzoge3R5cGU6IFN0cmluZ30sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7IUlyb25NZXRhfVxuICAgICAqL1xuICAgIF9tZXRhOiB7dmFsdWU6IEJhc2UuY3JlYXRlKCdpcm9uLW1ldGEnLCB7dHlwZTogJ2ljb25zZXQnfSl9XG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFtcbiAgICAnX3VwZGF0ZUljb24oX21ldGEsIGlzQXR0YWNoZWQpJyxcbiAgICAnX3VwZGF0ZUljb24odGhlbWUsIGlzQXR0YWNoZWQpJyxcbiAgICAnX3NyY0NoYW5nZWQoc3JjLCBpc0F0dGFjaGVkKScsXG4gICAgJ19pY29uQ2hhbmdlZChpY29uLCBpc0F0dGFjaGVkKSdcbiAgXSxcblxuICBfREVGQVVMVF9JQ09OU0VUOiAnaWNvbnMnLFxuXG4gIF9pY29uQ2hhbmdlZDogZnVuY3Rpb24oaWNvbikge1xuICAgIHZhciBwYXJ0cyA9IChpY29uIHx8ICcnKS5zcGxpdCgnOicpO1xuICAgIHRoaXMuX2ljb25OYW1lID0gcGFydHMucG9wKCk7XG4gICAgdGhpcy5faWNvbnNldE5hbWUgPSBwYXJ0cy5wb3AoKSB8fCB0aGlzLl9ERUZBVUxUX0lDT05TRVQ7XG4gICAgdGhpcy5fdXBkYXRlSWNvbigpO1xuICB9LFxuXG4gIF9zcmNDaGFuZ2VkOiBmdW5jdGlvbihzcmMpIHtcbiAgICB0aGlzLl91cGRhdGVJY29uKCk7XG4gIH0sXG5cbiAgX3VzZXNJY29uc2V0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pY29uIHx8ICF0aGlzLnNyYztcbiAgfSxcblxuICAvKiogQHN1cHByZXNzIHt2aXNpYmlsaXR5fSAqL1xuICBfdXBkYXRlSWNvbjogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3VzZXNJY29uc2V0KCkpIHtcbiAgICAgIGlmICh0aGlzLl9pbWcgJiYgdGhpcy5faW1nLnBhcmVudE5vZGUpIHtcbiAgICAgICAgZG9tKHRoaXMucm9vdCkucmVtb3ZlQ2hpbGQodGhpcy5faW1nKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLl9pY29uTmFtZSA9PT0gJycpIHtcbiAgICAgICAgaWYgKHRoaXMuX2ljb25zZXQpIHtcbiAgICAgICAgICB0aGlzLl9pY29uc2V0LnJlbW92ZUljb24odGhpcyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faWNvbnNldE5hbWUgJiYgdGhpcy5fbWV0YSkge1xuICAgICAgICB0aGlzLl9pY29uc2V0ID0gLyoqIEB0eXBlIHs/UG9seW1lci5JY29uc2V0fSAqLyAoXG4gICAgICAgICAgICB0aGlzLl9tZXRhLmJ5S2V5KHRoaXMuX2ljb25zZXROYW1lKSk7XG4gICAgICAgIGlmICh0aGlzLl9pY29uc2V0KSB7XG4gICAgICAgICAgdGhpcy5faWNvbnNldC5hcHBseUljb24odGhpcywgdGhpcy5faWNvbk5hbWUsIHRoaXMudGhlbWUpO1xuICAgICAgICAgIHRoaXMudW5saXN0ZW4od2luZG93LCAnaXJvbi1pY29uc2V0LWFkZGVkJywgJ191cGRhdGVJY29uJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5saXN0ZW4od2luZG93LCAnaXJvbi1pY29uc2V0LWFkZGVkJywgJ191cGRhdGVJY29uJyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgaWYgKHRoaXMuX2ljb25zZXQpIHtcbiAgICAgICAgdGhpcy5faWNvbnNldC5yZW1vdmVJY29uKHRoaXMpO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLl9pbWcpIHtcbiAgICAgICAgdGhpcy5faW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgICAgIHRoaXMuX2ltZy5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5faW1nLnN0eWxlLmhlaWdodCA9ICcxMDAlJztcbiAgICAgICAgdGhpcy5faW1nLmRyYWdnYWJsZSA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgdGhpcy5faW1nLnNyYyA9IHRoaXMuc3JjO1xuICAgICAgZG9tKHRoaXMucm9vdCkuYXBwZW5kQ2hpbGQodGhpcy5faW1nKTtcbiAgICB9XG4gIH1cbn0pO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge1BvbHltZXJ9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLWZuLmpzJztcblxuLyoqXG5gaXJvbi1tZWRpYS1xdWVyeWAgY2FuIGJlIHVzZWQgdG8gZGF0YSBiaW5kIHRvIGEgQ1NTIG1lZGlhIHF1ZXJ5LlxuVGhlIGBxdWVyeWAgcHJvcGVydHkgaXMgYSBiYXJlIENTUyBtZWRpYSBxdWVyeS5cblRoZSBgcXVlcnktbWF0Y2hlc2AgcHJvcGVydHkgaXMgYSBib29sZWFuIHJlcHJlc2VudGluZyB3aGV0aGVyIHRoZSBwYWdlIG1hdGNoZXNcbnRoYXQgbWVkaWEgcXVlcnkuXG5cbkV4YW1wbGU6XG5cbmBgYGh0bWxcbjxpcm9uLW1lZGlhLXF1ZXJ5IHF1ZXJ5PVwiKG1pbi13aWR0aDogNjAwcHgpXCIgcXVlcnktbWF0Y2hlcz1cInt7cXVlcnlNYXRjaGVzfX1cIj5cbjwvaXJvbi1tZWRpYS1xdWVyeT5cbmBgYFxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG5AaGVybyBoZXJvLnN2Z1xuQGVsZW1lbnQgaXJvbi1tZWRpYS1xdWVyeVxuKi9cblBvbHltZXIoe1xuXG4gIGlzOiAnaXJvbi1tZWRpYS1xdWVyeScsXG5cbiAgcHJvcGVydGllczoge1xuXG4gICAgLyoqXG4gICAgICogVGhlIEJvb2xlYW4gcmV0dXJuIHZhbHVlIG9mIHRoZSBtZWRpYSBxdWVyeS5cbiAgICAgKi9cbiAgICBxdWVyeU1hdGNoZXM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2UsIHJlYWRPbmx5OiB0cnVlLCBub3RpZnk6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIENTUyBtZWRpYSBxdWVyeSB0byBldmFsdWF0ZS5cbiAgICAgKi9cbiAgICBxdWVyeToge3R5cGU6IFN0cmluZywgb2JzZXJ2ZXI6ICdxdWVyeUNoYW5nZWQnfSxcblxuICAgIC8qKlxuICAgICAqIElmIHRydWUsIHRoZSBxdWVyeSBhdHRyaWJ1dGUgaXMgYXNzdW1lZCB0byBiZSBhIGNvbXBsZXRlIG1lZGlhIHF1ZXJ5XG4gICAgICogc3RyaW5nIHJhdGhlciB0aGFuIGEgc2luZ2xlIG1lZGlhIGZlYXR1cmUuXG4gICAgICovXG4gICAgZnVsbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBAdHlwZSB7ZnVuY3Rpb24oTWVkaWFRdWVyeUxpc3QpfVxuICAgICAqL1xuICAgIF9ib3VuZE1RSGFuZGxlcjoge1xuICAgICAgdmFsdWU6IGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5xdWVyeUhhbmRsZXIuYmluZCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQHR5cGUge01lZGlhUXVlcnlMaXN0fVxuICAgICAqL1xuICAgIF9tcToge3ZhbHVlOiBudWxsfVxuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgdGhpcy5xdWVyeUNoYW5nZWQoKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVtb3ZlKCk7XG4gIH0sXG5cbiAgX2FkZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX21xKSB7XG4gICAgICB0aGlzLl9tcS5hZGRMaXN0ZW5lcih0aGlzLl9ib3VuZE1RSGFuZGxlcik7XG4gICAgfVxuICB9LFxuXG4gIF9yZW1vdmU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9tcSkge1xuICAgICAgdGhpcy5fbXEucmVtb3ZlTGlzdGVuZXIodGhpcy5fYm91bmRNUUhhbmRsZXIpO1xuICAgIH1cbiAgICB0aGlzLl9tcSA9IG51bGw7XG4gIH0sXG5cbiAgcXVlcnlDaGFuZ2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZW1vdmUoKTtcbiAgICB2YXIgcXVlcnkgPSB0aGlzLnF1ZXJ5O1xuICAgIGlmICghcXVlcnkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCF0aGlzLmZ1bGwgJiYgcXVlcnlbMF0gIT09ICcoJykge1xuICAgICAgcXVlcnkgPSAnKCcgKyBxdWVyeSArICcpJztcbiAgICB9XG4gICAgdGhpcy5fbXEgPSB3aW5kb3cubWF0Y2hNZWRpYShxdWVyeSk7XG4gICAgdGhpcy5fYWRkKCk7XG4gICAgdGhpcy5xdWVyeUhhbmRsZXIodGhpcy5fbXEpO1xuICB9LFxuXG4gIHF1ZXJ5SGFuZGxlcjogZnVuY3Rpb24obXEpIHtcbiAgICB0aGlzLl9zZXRRdWVyeU1hdGNoZXMobXEubWF0Y2hlcyk7XG4gIH1cblxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1pbWFnZS9pcm9uLWltYWdlLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL2VsZW1lbnQtc3R5bGVzL3BhcGVyLW1hdGVyaWFsLXN0eWxlcy5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOlxuW0NhcmRzXShodHRwczovL3d3dy5nb29nbGUuY29tL2Rlc2lnbi9zcGVjL2NvbXBvbmVudHMvY2FyZHMuaHRtbClcblxuYHBhcGVyLWNhcmRgIGlzIGEgY29udGFpbmVyIHdpdGggYSBkcm9wIHNoYWRvdy5cblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci1jYXJkIGhlYWRpbmc9XCJDYXJkIFRpdGxlXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1jb250ZW50XCI+U29tZSBjb250ZW50PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+U29tZSBhY3Rpb248L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItY2FyZD5cblxuRXhhbXBsZSAtIHRvcCBjYXJkIGltYWdlOlxuXG4gICAgPHBhcGVyLWNhcmQgaGVhZGluZz1cIkNhcmQgVGl0bGVcIiBpbWFnZT1cIi9wYXRoL3RvL2ltYWdlLnBuZ1wiIGFsdD1cImltYWdlXCI+XG4gICAgICAuLi5cbiAgICA8L3BhcGVyLWNhcmQ+XG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cbkJ5IGRlZmF1bHQsIHRoZSBgYXJpYS1sYWJlbGAgd2lsbCBiZSBzZXQgdG8gdGhlIHZhbHVlIG9mIHRoZSBgaGVhZGluZ2BcbmF0dHJpYnV0ZS5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWNhcmQtYmFja2dyb3VuZC1jb2xvcmAgfCBUaGUgYmFja2dyb3VuZCBjb2xvciBvZiB0aGUgY2FyZCB8IGAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyLWNvbG9yYCB8IFRoZSBjb2xvciBvZiB0aGUgaGVhZGVyIHRleHQgfCBgIzAwMGBcbmAtLXBhcGVyLWNhcmQtaGVhZGVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci10ZXh0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRpdGxlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2VgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgaW1hZ2UgaW4gdGhlIGNhcmQgaGVhZGVyIHNlY3Rpb24gfCBge31gXG5gLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZS10ZXh0YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRleHQgb3ZlcmxhcHBpbmcgdGhlIGltYWdlIGluIHRoZSBjYXJkIGhlYWRlciBzZWN0aW9uIHwgYHt9YFxuYC0tcGFwZXItY2FyZC1jb250ZW50YCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGNhcmQgY29udGVudCBzZWN0aW9ufCBge31gXG5gLS1wYXBlci1jYXJkLWFjdGlvbnNgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCBhY3Rpb24gc2VjdGlvbiB8IGB7fWBcbmAtLXBhcGVyLWNhcmRgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgY2FyZCB8IGB7fWBcblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1jYXJkXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItbWF0ZXJpYWwtc3R5bGVzXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWJhY2tncm91bmQtY29sb3IsIHZhcigtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcikpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAycHg7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZDtcbiAgICAgIH1cblxuICAgICAgLyogSUUgMTAgc3VwcG9ydCBmb3IgSFRNTDUgaGlkZGVuIGF0dHIgKi9cbiAgICAgIDpob3N0KFtoaWRkZW5dKSwgW2hpZGRlbl0ge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IGluaGVyaXQ7XG4gICAgICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWNhcmQtaGVhZGVyO1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyIGlyb24taW1hZ2Uge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIC0taXJvbi1pbWFnZS13aWR0aDogMTAwJTtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItaW1hZ2U7XG4gICAgICB9XG5cbiAgICAgIC5oZWFkZXIgLnRpdGxlLXRleHQge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1jYXJkLWhlYWRlci1jb2xvciwgIzAwMCk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1oZWFkZXItdGV4dDtcbiAgICAgIH1cblxuICAgICAgLmhlYWRlciAudGl0bGUtdGV4dC5vdmVyLWltYWdlIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDBweDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWhlYWRlci1pbWFnZS10ZXh0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA6OnNsb3R0ZWQoLmNhcmQtY29udGVudCkge1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBwb3NpdGlvbjpyZWxhdGl2ZTtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1jYXJkLWNvbnRlbnQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0IDo6c2xvdHRlZCguY2FyZC1hY3Rpb25zKSB7XG4gICAgICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZThlOGU4O1xuICAgICAgICBwYWRkaW5nOiA1cHggMTZweDtcbiAgICAgICAgcG9zaXRpb246cmVsYXRpdmU7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItY2FyZC1hY3Rpb25zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiMVwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tMTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjJcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtlbGV2YXRpb249XCIzXCJdKSB7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLW1hdGVyaWFsLWVsZXZhdGlvbi0zO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZWxldmF0aW9uPVwiNFwiXSkge1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1tYXRlcmlhbC1lbGV2YXRpb24tNDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2VsZXZhdGlvbj1cIjVcIl0pIHtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItbWF0ZXJpYWwtZWxldmF0aW9uLTU7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cblxuICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5cbiAgICAgIDxpcm9uLWltYWdlIGhpZGRlblxcJD1cIltbIWltYWdlXV1cIiBhcmlhLWhpZGRlblxcJD1cIltbX2lzSGlkZGVuKGltYWdlKV1dXCIgc3JjPVwiW1tpbWFnZV1dXCIgYWx0PVwiW1thbHRdXVwiIHBsYWNlaG9sZGVyPVwiW1twbGFjZWhvbGRlckltYWdlXV1cIiBwcmVsb2FkPVwiW1twcmVsb2FkSW1hZ2VdXVwiIGZhZGU9XCJbW2ZhZGVJbWFnZV1dXCI+PC9pcm9uLWltYWdlPlxuICAgICAgPGRpdiBoaWRkZW5cXCQ9XCJbWyFoZWFkaW5nXV1cIiBjbGFzc1xcJD1cInRpdGxlLXRleHQgW1tfY29tcHV0ZUhlYWRpbmdDbGFzcyhpbWFnZSldXVwiPltbaGVhZGluZ11dPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8c2xvdD48L3Nsb3Q+XG5gLFxuXG4gIGlzOiAncGFwZXItY2FyZCcsXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSB0aXRsZSBvZiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBoZWFkaW5nOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJycsIG9ic2VydmVyOiAnX2hlYWRpbmdDaGFuZ2VkJ30sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdXJsIG9mIHRoZSB0aXRsZSBpbWFnZSBvZiB0aGUgY2FyZC5cbiAgICAgKi9cbiAgICBpbWFnZToge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0ZXh0IGFsdGVybmF0aXZlIG9mIHRoZSBjYXJkJ3MgdGl0bGUgaW1hZ2UuXG4gICAgICovXG4gICAgYWx0OiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFdoZW4gYHRydWVgLCBhbnkgY2hhbmdlIHRvIHRoZSBpbWFnZSB1cmwgcHJvcGVydHkgd2lsbCBjYXVzZSB0aGVcbiAgICAgKiBgcGxhY2Vob2xkZXJgIGltYWdlIHRvIGJlIHNob3duIHVudGlsIHRoZSBpbWFnZSBpcyBmdWxseSByZW5kZXJlZC5cbiAgICAgKi9cbiAgICBwcmVsb2FkSW1hZ2U6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9LFxuXG4gICAgLyoqXG4gICAgICogV2hlbiBgcHJlbG9hZEltYWdlYCBpcyB0cnVlLCBzZXR0aW5nIGBmYWRlSW1hZ2VgIHRvIHRydWUgd2lsbCBjYXVzZSB0aGVcbiAgICAgKiBpbWFnZSB0byBmYWRlIGludG8gcGxhY2UuXG4gICAgICovXG4gICAgZmFkZUltYWdlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgaW1hZ2Ugd2lsbCBiZSB1c2VkIGFzIGEgYmFja2dyb3VuZC9wbGFjZWhvbGRlciB1bnRpbCB0aGUgc3JjIGltYWdlXG4gICAgICogaGFzIGxvYWRlZC4gVXNlIG9mIGEgZGF0YS1VUkkgZm9yIHBsYWNlaG9sZGVyIGlzIGVuY291cmFnZWQgZm9yIGluc3RhbnRcbiAgICAgKiByZW5kZXJpbmcuXG4gICAgICovXG4gICAgcGxhY2Vob2xkZXJJbWFnZToge3R5cGU6IFN0cmluZywgdmFsdWU6IG51bGx9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIHotZGVwdGggb2YgdGhlIGNhcmQsIGZyb20gMC01LlxuICAgICAqL1xuICAgIGVsZXZhdGlvbjoge3R5cGU6IE51bWJlciwgdmFsdWU6IDEsIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZX0sXG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhpcyB0byB0cnVlIHRvIGFuaW1hdGUgdGhlIGNhcmQgc2hhZG93IHdoZW4gc2V0dGluZyBhIG5ld1xuICAgICAqIGB6YCB2YWx1ZS5cbiAgICAgKi9cbiAgICBhbmltYXRlZFNoYWRvdzoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBSZWFkLW9ubHkgcHJvcGVydHkgdXNlZCB0byBwYXNzIGRvd24gdGhlIGBhbmltYXRlZFNoYWRvd2AgdmFsdWUgdG9cbiAgICAgKiB0aGUgdW5kZXJseWluZyBwYXBlci1tYXRlcmlhbCBzdHlsZSAoc2luY2UgdGhleSBoYXZlIGRpZmZlcmVudCBuYW1lcykuXG4gICAgICovXG4gICAgYW5pbWF0ZWQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICByZWFkT25seTogdHJ1ZSxcbiAgICAgIGNvbXB1dGVkOiAnX2NvbXB1dGVBbmltYXRlZChhbmltYXRlZFNoYWRvdyknXG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBGb3JtYXQgZnVuY3Rpb24gZm9yIGFyaWEtaGlkZGVuLiBVc2UgdGhlICEgb3BlcmF0b3IgcmVzdWx0cyBpbiB0aGVcbiAgICogZW1wdHkgc3RyaW5nIHdoZW4gZ2l2ZW4gYSBmYWxzeSB2YWx1ZS5cbiAgICovXG4gIF9pc0hpZGRlbjogZnVuY3Rpb24oaW1hZ2UpIHtcbiAgICByZXR1cm4gaW1hZ2UgPyAnZmFsc2UnIDogJ3RydWUnO1xuICB9LFxuXG4gIF9oZWFkaW5nQ2hhbmdlZDogZnVuY3Rpb24oaGVhZGluZykge1xuICAgIHZhciBjdXJyZW50SGVhZGluZyA9IHRoaXMuZ2V0QXR0cmlidXRlKCdoZWFkaW5nJyksXG4gICAgICAgIGN1cnJlbnRMYWJlbCA9IHRoaXMuZ2V0QXR0cmlidXRlKCdhcmlhLWxhYmVsJyk7XG5cbiAgICBpZiAodHlwZW9mIGN1cnJlbnRMYWJlbCAhPT0gJ3N0cmluZycgfHwgY3VycmVudExhYmVsID09PSBjdXJyZW50SGVhZGluZykge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBoZWFkaW5nKTtcbiAgICB9XG4gIH0sXG5cbiAgX2NvbXB1dGVIZWFkaW5nQ2xhc3M6IGZ1bmN0aW9uKGltYWdlKSB7XG4gICAgcmV0dXJuIGltYWdlID8gJyBvdmVyLWltYWdlJyA6ICcnO1xuICB9LFxuXG4gIF9jb21wdXRlQW5pbWF0ZWQ6IGZ1bmN0aW9uKGFuaW1hdGVkU2hhZG93KSB7XG4gICAgcmV0dXJuIGFuaW1hdGVkU2hhZG93O1xuICB9XG59KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtJcm9uT3ZlcmxheUJlaGF2aW9yfSBmcm9tICdAcG9seW1lci9pcm9uLW92ZXJsYXktYmVoYXZpb3IvaXJvbi1vdmVybGF5LWJlaGF2aW9yLmpzJztcbmltcG9ydCB7ZG9tfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanMnO1xuXG4vKipcbiAgVXNlIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgIGFuZCBgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuaHRtbGAgdG9cbiAgaW1wbGVtZW50IGEgTWF0ZXJpYWwgRGVzaWduIGRpYWxvZy5cblxuICBGb3IgZXhhbXBsZSwgaWYgYDxwYXBlci1kaWFsb2ctaW1wbD5gIGltcGxlbWVudHMgdGhpcyBiZWhhdmlvcjpcblxuICAgICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgICAgIDxoMj5IZWFkZXI8L2gyPlxuICAgICAgICAgIDxkaXY+RGlhbG9nIGJvZHk8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1kaXNtaXNzPkNhbmNlbDwvcGFwZXItYnV0dG9uPlxuICAgICAgICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1jb25maXJtPkFjY2VwdDwvcGFwZXItYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuICBgcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuaHRtbGAgcHJvdmlkZSBzdHlsZXMgZm9yIGEgaGVhZGVyLCBjb250ZW50IGFyZWEsXG4gIGFuZCBhbiBhY3Rpb24gYXJlYSBmb3IgYnV0dG9ucy4gVXNlIHRoZSBgPGgyPmAgdGFnIGZvciB0aGUgaGVhZGVyIGFuZCB0aGVcbiAgYGJ1dHRvbnNgIGNsYXNzIGZvciB0aGUgYWN0aW9uIGFyZWEuIFlvdSBjYW4gdXNlIHRoZSBgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVgXG4gIGVsZW1lbnQgKGluIGl0cyBvd24gcmVwb3NpdG9yeSkgaWYgeW91IG5lZWQgYSBzY3JvbGxpbmcgY29udGVudCBhcmVhLlxuXG4gIFVzZSB0aGUgYGRpYWxvZy1kaXNtaXNzYCBhbmQgYGRpYWxvZy1jb25maXJtYCBhdHRyaWJ1dGVzIG9uIGludGVyYWN0aXZlXG4gIGNvbnRyb2xzIHRvIGNsb3NlIHRoZSBkaWFsb2cuIElmIHRoZSB1c2VyIGRpc21pc3NlcyB0aGUgZGlhbG9nIHdpdGhcbiAgYGRpYWxvZy1jb25maXJtYCwgdGhlIGBjbG9zaW5nUmVhc29uYCB3aWxsIHVwZGF0ZSB0byBpbmNsdWRlIGBjb25maXJtZWQ6XG4gIHRydWVgLlxuXG4gICMjIyBBY2Nlc3NpYmlsaXR5XG5cbiAgVGhpcyBlbGVtZW50IGhhcyBgcm9sZT1cImRpYWxvZ1wiYCBieSBkZWZhdWx0LiBEZXBlbmRpbmcgb24gdGhlIGNvbnRleHQsIGl0IG1heVxuICBiZSBtb3JlIGFwcHJvcHJpYXRlIHRvIG92ZXJyaWRlIHRoaXMgYXR0cmlidXRlIHdpdGggYHJvbGU9XCJhbGVydGRpYWxvZ1wiYC5cblxuICBJZiBgbW9kYWxgIGlzIHNldCwgdGhlIGVsZW1lbnQgd2lsbCBwcmV2ZW50IHRoZSBmb2N1cyBmcm9tIGV4aXRpbmcgdGhlXG4gIGVsZW1lbnQuIEl0IHdpbGwgYWxzbyBlbnN1cmUgdGhhdCBmb2N1cyByZW1haW5zIGluIHRoZSBkaWFsb2cuXG5cbiAgQGhlcm8gaGVyby5zdmdcbiAgQGRlbW8gZGVtby9pbmRleC5odG1sXG4gIEBwb2x5bWVyQmVoYXZpb3IgUGFwZXJEaWFsb2dCZWhhdmlvclxuICovXG5leHBvcnQgY29uc3QgUGFwZXJEaWFsb2dCZWhhdmlvckltcGwgPSB7XG5cbiAgaG9zdEF0dHJpYnV0ZXM6IHsncm9sZSc6ICdkaWFsb2cnLCAndGFiaW5kZXgnOiAnLTEnfSxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBJZiBgbW9kYWxgIGlzIHRydWUsIHRoaXMgaW1wbGllcyBgbm8tY2FuY2VsLW9uLW91dHNpZGUtY2xpY2tgLFxuICAgICAqIGBuby1jYW5jZWwtb24tZXNjLWtleWAgYW5kIGB3aXRoLWJhY2tkcm9wYC5cbiAgICAgKi9cbiAgICBtb2RhbDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICBfX3JlYWRpZWQ6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9XG5cbiAgfSxcblxuICBvYnNlcnZlcnM6IFsnX21vZGFsQ2hhbmdlZChtb2RhbCwgX19yZWFkaWVkKSddLFxuXG4gIGxpc3RlbmVyczogeyd0YXAnOiAnX29uRGlhbG9nQ2xpY2snfSxcblxuICAvKipcbiAgICogQHJldHVybiB7dm9pZH1cbiAgICovXG4gIHJlYWR5OiBmdW5jdGlvbigpIHtcbiAgICAvLyBPbmx5IG5vdyB0aGVzZSBwcm9wZXJ0aWVzIGNhbiBiZSByZWFkLlxuICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICB0aGlzLl9fcHJldk5vQ2FuY2VsT25Fc2NLZXkgPSB0aGlzLm5vQ2FuY2VsT25Fc2NLZXk7XG4gICAgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcDtcbiAgICB0aGlzLl9fcmVhZGllZCA9IHRydWU7XG4gIH0sXG5cbiAgX21vZGFsQ2hhbmdlZDogZnVuY3Rpb24obW9kYWwsIHJlYWRpZWQpIHtcbiAgICAvLyBtb2RhbCBpbXBsaWVzIG5vQ2FuY2VsT25PdXRzaWRlQ2xpY2ssIG5vQ2FuY2VsT25Fc2NLZXkgYW5kIHdpdGhCYWNrZHJvcC5cbiAgICAvLyBXZSBuZWVkIHRvIHdhaXQgZm9yIHRoZSBlbGVtZW50IHRvIGJlIHJlYWR5IGJlZm9yZSB3ZSBjYW4gcmVhZCB0aGVcbiAgICAvLyBwcm9wZXJ0aWVzIHZhbHVlcy5cbiAgICBpZiAoIXJlYWRpZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobW9kYWwpIHtcbiAgICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleSA9IHRoaXMubm9DYW5jZWxPbkVzY0tleTtcbiAgICAgIHRoaXMuX19wcmV2V2l0aEJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3A7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPSB0cnVlO1xuICAgICAgdGhpcy5ub0NhbmNlbE9uRXNjS2V5ID0gdHJ1ZTtcbiAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gSWYgdGhlIHZhbHVlIHdhcyBjaGFuZ2VkIHRvIGZhbHNlLCBsZXQgaXQgZmFsc2UuXG4gICAgICB0aGlzLm5vQ2FuY2VsT25PdXRzaWRlQ2xpY2sgPVxuICAgICAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayAmJiB0aGlzLl9fcHJldk5vQ2FuY2VsT25PdXRzaWRlQ2xpY2s7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25Fc2NLZXkgPVxuICAgICAgICAgIHRoaXMubm9DYW5jZWxPbkVzY0tleSAmJiB0aGlzLl9fcHJldk5vQ2FuY2VsT25Fc2NLZXk7XG4gICAgICB0aGlzLndpdGhCYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wICYmIHRoaXMuX19wcmV2V2l0aEJhY2tkcm9wO1xuICAgIH1cbiAgfSxcblxuICBfdXBkYXRlQ2xvc2luZ1JlYXNvbkNvbmZpcm1lZDogZnVuY3Rpb24oY29uZmlybWVkKSB7XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uID0gdGhpcy5jbG9zaW5nUmVhc29uIHx8IHt9O1xuICAgIHRoaXMuY2xvc2luZ1JlYXNvbi5jb25maXJtZWQgPSBjb25maXJtZWQ7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFdpbGwgZGlzbWlzcyB0aGUgZGlhbG9nIGlmIHVzZXIgY2xpY2tlZCBvbiBhbiBlbGVtZW50IHdpdGggZGlhbG9nLWRpc21pc3NcbiAgICogb3IgZGlhbG9nLWNvbmZpcm0gYXR0cmlidXRlLlxuICAgKi9cbiAgX29uRGlhbG9nQ2xpY2s6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgLy8gU2VhcmNoIGZvciB0aGUgZWxlbWVudCB3aXRoIGRpYWxvZy1jb25maXJtIG9yIGRpYWxvZy1kaXNtaXNzLFxuICAgIC8vIGZyb20gdGhlIHJvb3QgdGFyZ2V0IHVudGlsIHRoaXMgKGV4Y2x1ZGVkKS5cbiAgICB2YXIgcGF0aCA9IGRvbShldmVudCkucGF0aDtcbiAgICBmb3IgKHZhciBpID0gMCwgbCA9IHBhdGguaW5kZXhPZih0aGlzKTsgaSA8IGw7IGkrKykge1xuICAgICAgdmFyIHRhcmdldCA9IHBhdGhbaV07XG4gICAgICBpZiAodGFyZ2V0Lmhhc0F0dHJpYnV0ZSAmJlxuICAgICAgICAgICh0YXJnZXQuaGFzQXR0cmlidXRlKCdkaWFsb2ctZGlzbWlzcycpIHx8XG4gICAgICAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1jb25maXJtJykpKSB7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsb3NpbmdSZWFzb25Db25maXJtZWQoXG4gICAgICAgICAgICB0YXJnZXQuaGFzQXR0cmlidXRlKCdkaWFsb2ctY29uZmlybScpKTtcbiAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbn07XG5cbi8qKiBAcG9seW1lckJlaGF2aW9yICovXG5leHBvcnQgY29uc3QgUGFwZXJEaWFsb2dCZWhhdmlvciA9XG4gICAgW0lyb25PdmVybGF5QmVoYXZpb3IsIFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsXTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiMjIyBTdHlsaW5nXG5cblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nLlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvcmAgfCBEaWFsb2cgYmFja2dyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktYmFja2dyb3VuZC1jb2xvcmBcbmAtLXBhcGVyLWRpYWxvZy1jb2xvcmAgfCBEaWFsb2cgZm9yZWdyb3VuZCBjb2xvciB8IGAtLXByaW1hcnktdGV4dC1jb2xvcmBcbmAtLXBhcGVyLWRpYWxvZ2AgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSBkaWFsb2cgfCBge31gXG5gLS1wYXBlci1kaWFsb2ctdGl0bGVgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGl0bGUgKGA8aDI+YCkgZWxlbWVudCB8IGB7fWBcbmAtLXBhcGVyLWRpYWxvZy1idXR0b24tY29sb3JgIHwgQnV0dG9uIGFyZWEgZm9yZWdyb3VuZCBjb2xvciB8IGAtLWRlZmF1bHQtcHJpbWFyeS1jb2xvcmBcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3NoYWRvdy5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbiRfZG9jdW1lbnRDb250YWluZXIuc2V0QXR0cmlidXRlKCdzdHlsZScsICdkaXNwbGF5OiBub25lOycpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInBhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBtYXJnaW46IDI0cHggNDBweDtcblxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1wYXBlci1kaWFsb2ctYmFja2dyb3VuZC1jb2xvciwgdmFyKC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yKSk7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1kaWFsb2ctY29sb3IsIHZhcigtLXByaW1hcnktdGV4dC1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWZvbnQtYm9keTE7XG4gICAgICAgIEBhcHBseSAtLXNoYWRvdy1lbGV2YXRpb24tMTZkcDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDAgMjRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoLm5vLXBhZGRpbmcpIHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgIH1cblxuICAgICAgXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgqOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCo6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgfVxuXG4gICAgICAvKiBJbiAxLngsIHRoaXMgc2VsZWN0b3Igd2FzIFxcYDpob3N0ID4gOjpjb250ZW50IGgyXFxgLiBJbiAyLnggPHNsb3Q+IGFsbG93c1xuICAgICAgdG8gc2VsZWN0IGRpcmVjdCBjaGlsZHJlbiBvbmx5LCB3aGljaCBpbmNyZWFzZXMgdGhlIHdlaWdodCBvZiB0aGlzXG4gICAgICBzZWxlY3Rvciwgc28gd2UgaGF2ZSB0byByZS1kZWZpbmUgZmlyc3QtY2hpbGQvbGFzdC1jaGlsZCBtYXJnaW5zIGJlbG93LiAqL1xuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoaDIpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC10aXRsZTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXRpdGxlO1xuICAgICAgfVxuXG4gICAgICAvKiBBcHBseSBtaXhpbiBhZ2FpbiwgaW4gY2FzZSBpdCBzZXRzIG1hcmdpbi10b3AuICovXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChoMjpmaXJzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tdG9wOiAyNHB4O1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFwcGx5IG1peGluIGFnYWluLCBpbiBjYXNlIGl0IHNldHMgbWFyZ2luLWJvdHRvbS4gKi9cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGgyOmxhc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjRweDtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZGlhbG9nLXRpdGxlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgucGFwZXItZGlhbG9nLWJ1dHRvbnMpLFxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoLmJ1dHRvbnMpIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAyNHB4O1xuICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1idXR0b24tY29sb3IsIHZhcigtLXByaW1hcnktY29sb3IpKTtcblxuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtaG9yaXpvbnRhbDtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWVuZC1qdXN0aWZpZWQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgR2VzdHVyZUV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbWl4aW5zL2dlc3R1cmUtZXZlbnQtbGlzdGVuZXJzLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgQ29udHJvbFN0YXRlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluL3ZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluLmpzJztcbmltcG9ydCB7IEVsZW1lbnRNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWVsZW1lbnQtbWl4aW4vdmFhZGluLWVsZW1lbnQtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IGFkZExpc3RlbmVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuLyoqXG4gKiBgPHZhYWRpbi1idXR0b24+YCBpcyBhIFdlYiBDb21wb25lbnQgcHJvdmlkaW5nIGFuIGFjY2Vzc2libGUgYW5kIGN1c3RvbWl6YWJsZSBidXR0b24uXG4gKlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1idXR0b24+XG4gKiA8L3ZhYWRpbi1idXR0b24+XG4gKiBgYGBcbiAqXG4gKiBgYGBqc1xuICogZG9jdW1lbnQucXVlcnlTZWxlY3RvcigndmFhZGluLWJ1dHRvbicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gYWxlcnQoJ0hlbGxvIFdvcmxkIScpKTtcbiAqIGBgYFxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogVGhlIGZvbGxvd2luZyBzaGFkb3cgRE9NIHBhcnRzIGFyZSBleHBvc2VkIGZvciBzdHlsaW5nOlxuICpcbiAqIFBhcnQgbmFtZSB8IERlc2NyaXB0aW9uXG4gKiAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS1cbiAqIGBsYWJlbGAgfCBUaGUgbGFiZWwgKHRleHQpIGluc2lkZSB0aGUgYnV0dG9uXG4gKiBgcHJlZml4YCB8IEEgc2xvdCBmb3IgZS5nLiBhbiBpY29uIGJlZm9yZSB0aGUgbGFiZWxcbiAqIGBzdWZmaXhgIHwgQSBzbG90IGZvciBlLmcuIGFuIGljb24gYWZ0ZXIgdGhlIGxhYmVsXG4gKlxuICpcbiAqIFRoZSBmb2xsb3dpbmcgYXR0cmlidXRlcyBhcmUgZXhwb3NlZCBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tIHwgLS0tLS0tLS0tLS1cbiAqIGBhY3RpdmVgIHwgU2V0IHdoZW4gdGhlIGJ1dHRvbiBpcyBwcmVzc2VkIGRvd24sIGVpdGhlciB3aXRoIG1vdXNlLCB0b3VjaCBvciB0aGUga2V5Ym9hcmQuXG4gKiBgZGlzYWJsZWRgIHwgU2V0IHdoZW4gdGhlIGJ1dHRvbiBpcyBkaXNhYmxlZC5cbiAqIGBmb2N1cy1yaW5nYCB8IFNldCB3aGVuIHRoZSBidXR0b24gaXMgZm9jdXNlZCB1c2luZyB0aGUga2V5Ym9hcmQuXG4gKiBgZm9jdXNlZGAgfCBTZXQgd2hlbiB0aGUgYnV0dG9uIGlzIGZvY3VzZWQuXG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQG1peGVzIFZhYWRpbi5FbGVtZW50TWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uQ29udHJvbFN0YXRlTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICogQG1peGVzIFBvbHltZXIuR2VzdHVyZUV2ZW50TGlzdGVuZXJzXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqL1xuY2xhc3MgQnV0dG9uRWxlbWVudCBleHRlbmRzXG4gIEVsZW1lbnRNaXhpbihcbiAgICBDb250cm9sU3RhdGVNaXhpbihcbiAgICAgIFRoZW1hYmxlTWl4aW4oXG4gICAgICAgIEdlc3R1cmVFdmVudExpc3RlbmVycyhQb2x5bWVyRWxlbWVudCkpKSkge1xuICBzdGF0aWMgZ2V0IHRlbXBsYXRlKCkge1xuICAgIHJldHVybiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoaWRkZW5dKSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbiAgICAgIH1cblxuICAgICAgLyogRW5zdXJlIHRoZSBidXR0b24gaXMgYWx3YXlzIGFsaWduZWQgb24gdGhlIGJhc2VsaW5lICovXG4gICAgICAudmFhZGluLWJ1dHRvbi1jb250YWluZXI6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXFxcXDIwMDNcIjtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB3aWR0aDogMDtcbiAgICAgIH1cblxuICAgICAgLnZhYWRpbi1idXR0b24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1pbi1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIHRleHQtc2hhZG93OiBpbmhlcml0O1xuICAgICAgICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJwcmVmaXhcIl0sXG4gICAgICBbcGFydD1cInN1ZmZpeFwiXSB7XG4gICAgICAgIGZsZXg6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgIH1cblxuICAgICAgI2J1dHRvbiB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBjdXJzb3I6IGluaGVyaXQ7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGNsYXNzPVwidmFhZGluLWJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgIDxkaXYgcGFydD1cInByZWZpeFwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IHBhcnQ9XCJsYWJlbFwiPlxuICAgICAgICA8c2xvdD48L3Nsb3Q+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgcGFydD1cInN1ZmZpeFwiPlxuICAgICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPGJ1dHRvbiBpZD1cImJ1dHRvblwiIHR5cGU9XCJidXR0b25cIj48L2J1dHRvbj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWJ1dHRvbic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHZlcnNpb24oKSB7XG4gICAgcmV0dXJuICcyLjIuMSc7XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgLy8gTGVhdmluZyBkZWZhdWx0IHJvbGUgaW4gdGhlIG5hdGl2ZSBidXR0b24sIG1ha2VzIG5hdmlnYXRpb24gYW5ub3VuY2VtZW50XG4gICAgLy8gYmVpbmcgZGlmZmVyZW50IHdoZW4gdXNpbmcgZm9jdXMgbmF2aWdhdGlvbiAodGFiKSB2ZXJzdXMgdXNpbmcgbm9ybWFsXG4gICAgLy8gbmF2aWdhdGlvbiAoYXJyb3dzKS4gVGhlIGZpcnN0IHdheSBhbm5vdW5jZXMgdGhlIGxhYmVsIG9uIGEgYnV0dG9uXG4gICAgLy8gc2luY2UgdGhlIGZvY3VzIGlzIG1vdmVkIHByb2dyYW1tYXRpY2FsbHksIGFuZCB0aGUgc2Vjb25kIG9uIGEgZ3JvdXAuXG4gICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XG4gICAgdGhpcy4kLmJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAncHJlc2VudGF0aW9uJyk7XG5cbiAgICB0aGlzLl9hZGRBY3RpdmVMaXN0ZW5lcnMoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgLy8gYGFjdGl2ZWAgc3RhdGUgaXMgcHJlc2VydmVkIHdoZW4gdGhlIGVsZW1lbnQgaXMgZGlzY29ubmVjdGVkIGJldHdlZW4ga2V5ZG93biBhbmQga2V5dXAgZXZlbnRzLlxuICAgIC8vIHJlcHJvZHVjaWJsZSBpbiBgPHZhYWRpbi1kYXRlLXBpY2tlcj5gIHdoZW4gY2xvc2luZyBvbiBgQ2FuY2VsYCBvciBgVG9kYXlgIGNsaWNrLlxuICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJykpIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICB9XG4gIH1cblxuICBfYWRkQWN0aXZlTGlzdGVuZXJzKCkge1xuICAgIGFkZExpc3RlbmVyKHRoaXMsICdkb3duJywgKCkgPT4gIXRoaXMuZGlzYWJsZWQgJiYgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FjdGl2ZScsICcnKSk7XG4gICAgYWRkTGlzdGVuZXIodGhpcywgJ3VwJywgKCkgPT4gdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2FjdGl2ZScpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBlID0+ICF0aGlzLmRpc2FibGVkICYmIFsxMywgMzJdLmluZGV4T2YoZS5rZXlDb2RlKSA+PSAwICYmIHRoaXMuc2V0QXR0cmlidXRlKCdhY3RpdmUnLCAnJykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCAoKSA9PiB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYWN0aXZlJykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHRoaXMucmVtb3ZlQXR0cmlidXRlKCdhY3RpdmUnKSk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgZ2V0IGZvY3VzRWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLmJ1dHRvbjtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoQnV0dG9uRWxlbWVudC5pcywgQnV0dG9uRWxlbWVudCk7XG5cbmV4cG9ydCB7IEJ1dHRvbkVsZW1lbnQgfTtcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3NoYWRvdy5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBodG1sYDxkb20tbW9kdWxlIGlkPVwibWF0ZXJpYWwtYnV0dG9uXCIgdGhlbWUtZm9yPVwidmFhZGluLWJ1dHRvblwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIG1pbi13aWR0aDogNjRweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1tYXRlcmlhbC1mb250LWZhbWlseSk7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtYnV0dG9uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC4wNWVtO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMnM7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAgICAgICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xuICAgICAgfVxuXG4gICAgICBALW1vei1kb2N1bWVudCB1cmwtcHJlZml4KCkge1xuICAgICAgICA6aG9zdCB7XG4gICAgICAgICAgdmVydGljYWwtYWxpZ246IC0xM3B4O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIDpob3N0OjpiZWZvcmUsXG4gICAgICA6aG9zdDo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XG4gICAgICB9XG5cbiAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC41cztcbiAgICAgIH1cblxuICAgICAgOmhvc3Q6OmFmdGVyIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIGhlaWdodDogMzIwcHg7XG4gICAgICAgIHRvcDogNTAlO1xuICAgICAgICBsZWZ0OiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC45cztcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXSA6OnNsb3R0ZWQoKikge1xuICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6aG92ZXIpOjpiZWZvcmUsXG4gICAgICA6aG9zdChbZm9jdXMtcmluZ10pOjpiZWZvcmUge1xuICAgICAgICBvcGFjaXR5OiAwLjA4O1xuICAgICAgICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbYWN0aXZlXSk6OmJlZm9yZSB7XG4gICAgICAgIG9wYWNpdHk6IDAuMTY7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC40cztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2FjdGl2ZV0pOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDAuMDAwMDAwMSk7IC8qIGFuaW1hdGlvbiB3b3JrcyB3ZWlyZGx5IHdpdGggc2NhbGUoMCkgKi9cbiAgICAgICAgb3BhY2l0eTogMC4xO1xuICAgICAgICB0cmFuc2l0aW9uOiAwcztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyOm5vdChbYWN0aXZlXSkpOjphZnRlciB7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpIHNjYWxlKDEpO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC8qIENvbnRhaW5lZCBhbmQgb3V0bGluZSB2YXJpYW50cyAqL1xuICAgICAgOmhvc3QoW3RoZW1lfj1cImNvbnRhaW5lZFwiXSksXG4gICAgICA6aG9zdChbdGhlbWV+PVwib3V0bGluZWRcIl0pIHtcbiAgICAgICAgcGFkZGluZzogOHB4IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJvdXRsaW5lZFwiXSkge1xuICAgICAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgMCAxcHggdmFyKC0tX21hdGVyaWFsLWJ1dHRvbi1vdXRsaW5lLWNvbG9yLCByZ2JhKDAsIDAsIDAsIDAuMikpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbdGhlbWV+PVwiY29udGFpbmVkXCJdOm5vdChbZGlzYWJsZWRdKSkge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29udHJhc3QtY29sb3IpO1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTJkcCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJjb250YWluZWRcIl1bZGlzYWJsZWRdKSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3RoZW1lfj1cImNvbnRhaW5lZFwiXTpob3Zlcikge1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLTRkcCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFt0aGVtZX49XCJjb250YWluZWRcIl1bYWN0aXZlXSkge1xuICAgICAgICBib3gtc2hhZG93OiB2YXIoLS1tYXRlcmlhbC1zaGFkb3ctZWxldmF0aW9uLThkcCk7XG4gICAgICB9XG5cbiAgICAgIC8qIEljb24gYWxpZ25tZW50ICovXG5cbiAgICAgIFtwYXJ0XSA6OnNsb3R0ZWQoaXJvbi1pY29uKSB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMThweDtcbiAgICAgICAgaGVpZ2h0OiAxOHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInByZWZpeFwiXSA6OnNsb3R0ZWQoaXJvbi1pY29uKSB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogOHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogLTRweDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJzdWZmaXhcIl0gOjpzbG90dGVkKGlyb24taWNvbikge1xuICAgICAgICBtYXJnaW4tbGVmdDogOHB4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC00cHg7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWJ1dHRvbi1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWJ1dHRvbi5qcyc7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG4vKipcbiAqIEEgcHJpdmF0ZSBtaXhpbiB0byBhdm9pZCBwcm9ibGVtcyB3aXRoIGR5bmFtaWMgcHJvcGVydGllcyBhbmQgUG9seW1lciBBbmFseXplci5cbiAqIE5vIG5lZWQgdG8gZXhwb3NlIHRoZXNlIHByb3BlcnRpZXMgaW4gdGhlIEFQSSBkb2NzLlxuICogQHBvbHltZXJNaXhpblxuICovXG5jb25zdCBUYWJJbmRleE1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBWYWFkaW5UYWJJbmRleE1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICAgIC8qKlxuICAgICAgICogSW50ZXJuYWwgcHJvcGVydHkgbmVlZGVkIHRvIGxpc3RlbiB0byBgdGFiaW5kZXhgIGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgICAgICpcbiAgICAgICAqIEZvciBjaGFuZ2luZyB0aGUgdGFiaW5kZXggb2YgdGhpcyBjb21wb25lbnQgdXNlIHRoZSBuYXRpdmUgYHRhYkluZGV4YCBwcm9wZXJ0eS5cbiAgICAgICAqIEBwcml2YXRlXG4gICAgICAgKi9cbiAgICAgIHRhYmluZGV4OiB7XG4gICAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgICAgdmFsdWU6IDAsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfdGFiaW5kZXhDaGFuZ2VkJ1xuICAgICAgfVxuICAgIH07XG5cbiAgICBpZiAod2luZG93LlNoYWR5RE9NKSB7XG4gICAgICAvLyBTaGFkeURPTSBicm93c2VycyBuZWVkIHRoZSBgdGFiSW5kZXhgIGluIG9yZGVyIHRvIG5vdGlmeSB3aGVuIHRoZSB1c2VyIGNoYW5nZXMgaXQgcHJvZ3JhbW1hdGljYWxseS5cbiAgICAgIHByb3BlcnRpZXNbJ3RhYkluZGV4J10gPSBwcm9wZXJ0aWVzLnRhYmluZGV4O1xuICAgIH1cblxuICAgIHJldHVybiBwcm9wZXJ0aWVzO1xuICB9XG59O1xuXG4vKipcbiAqIFBvbHltZXIuSXJvbkNvbnRyb2xTdGF0ZSBpcyBub3QgYSBwcm9wZXIgMi4wIGNsYXNzLCBhbHNvLCBpdHMgdGFiaW5kZXhcbiAqIGltcGxlbWVudGF0aW9uIGZhaWxzIGluIHRoZSBzaGFkb3cgZG9tLCBzbyB3ZSBoYXZlIHRoaXMgZm9yIHZhYWRpbiBlbGVtZW50cy5cbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IENvbnRyb2xTdGF0ZU1peGluID0gc3VwZXJDbGFzcyA9PiBjbGFzcyBWYWFkaW5Db250cm9sU3RhdGVNaXhpbiBleHRlbmRzIFRhYkluZGV4TWl4aW4oc3VwZXJDbGFzcykge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmeSB0aGF0IHRoaXMgY29udHJvbCBzaG91bGQgaGF2ZSBpbnB1dCBmb2N1cyB3aGVuIHRoZSBwYWdlIGxvYWRzLlxuICAgICAgICovXG4gICAgICBhdXRvZm9jdXM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTdG9yZXMgdGhlIHByZXZpb3VzIHZhbHVlIG9mIHRhYmluZGV4IGF0dHJpYnV0ZSBvZiB0aGUgZGlzYWJsZWQgZWxlbWVudFxuICAgICAgICovXG4gICAgICBfcHJldmlvdXNUYWJJbmRleDoge1xuICAgICAgICB0eXBlOiBOdW1iZXJcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogSWYgdHJ1ZSwgdGhlIHVzZXIgY2Fubm90IGludGVyYWN0IHdpdGggdGhpcyBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBkaXNhYmxlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICBvYnNlcnZlcjogJ19kaXNhYmxlZENoYW5nZWQnLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIF9pc1NoaWZ0VGFiYmluZzoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIGUgPT4ge1xuICAgICAgaWYgKGUuY29tcG9zZWRQYXRoKClbMF0gPT09IHRoaXMpIHtcbiAgICAgICAgdGhpcy5fZm9jdXMoZSk7XG4gICAgICB9IGVsc2UgaWYgKGUuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzLmZvY3VzRWxlbWVudCkgIT09IC0xICYmICF0aGlzLmRpc2FibGVkKSB7XG4gICAgICAgIHRoaXMuX3NldEZvY3VzZWQodHJ1ZSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1c291dCcsIGUgPT4gdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSkpO1xuXG4gICAgLy8gSW4gc3VwZXIucmVhZHkoKSBvdGhlciAnZm9jdXNpbicgYW5kICdmb2N1c291dCcgbGlzdGVuZXJzIG1pZ2h0IGJlXG4gICAgLy8gYWRkZWQsIHNvIHdlIGNhbGwgaXQgYWZ0ZXIgb3VyIG93biBvbmVzIHRvIGVuc3VyZSB0aGV5IGV4ZWN1dGUgZmlyc3QuXG4gICAgLy8gSXNzdWUgdG8gd2F0Y2ggb3V0OiB3aGVuIGluY29ycmVjdCwgPHZhYWRpbi1jb21iby1ib3g+IHJlZm9jdXNlcyB0aGVcbiAgICAvLyBpbnB1dCBmaWVsZCBvbiBpT1MgYWZ0ZXIg4oCcRG9uZeKAnSBpcyBwcmVzc2VkLlxuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICAvLyBUaGlzIGZpeGVzIHRoZSBidWcgaW4gRmlyZWZveCA2MSAoaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTQ3Mjg4NylcbiAgICAvLyB3aGVyZSBmb2N1c291dCBldmVudCBkb2VzIG5vdCBnbyBvdXQgb2Ygc2hhZHkgRE9NIGJlY2F1c2UgY29tcG9zZWQgcHJvcGVydHkgaW4gdGhlIGV2ZW50IGlzIG5vdCB0cnVlXG4gICAgY29uc3QgZW5zdXJlRXZlbnRDb21wb3NlZCA9IGUgPT4ge1xuICAgICAgaWYgKCFlLmNvbXBvc2VkKSB7XG4gICAgICAgIGUudGFyZ2V0LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KGUudHlwZSwge1xuICAgICAgICAgIGJ1YmJsZXM6IHRydWUsXG4gICAgICAgICAgY29tcG9zZWQ6IHRydWUsXG4gICAgICAgICAgY2FuY2VsYWJsZTogZmFsc2VcbiAgICAgICAgfSkpO1xuICAgICAgfVxuICAgIH07XG4gICAgdGhpcy5zaGFkb3dSb290LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzaW4nLCBlbnN1cmVFdmVudENvbXBvc2VkKTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBlbnN1cmVFdmVudENvbXBvc2VkKTtcblxuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGUgPT4ge1xuICAgICAgaWYgKCFlLmRlZmF1bHRQcmV2ZW50ZWQgJiYgZS5rZXlDb2RlID09PSA5KSB7XG4gICAgICAgIGlmIChlLnNoaWZ0S2V5KSB7XG4gICAgICAgICAgLy8gRmxhZyBpcyBjaGVja2VkIGluIF9mb2N1cyBldmVudCBoYW5kbGVyLlxuICAgICAgICAgIHRoaXMuX2lzU2hpZnRUYWJiaW5nID0gdHJ1ZTtcbiAgICAgICAgICBIVE1MRWxlbWVudC5wcm90b3R5cGUuZm9jdXMuYXBwbHkodGhpcyk7XG4gICAgICAgICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gICAgICAgICAgLy8gRXZlbnQgaGFuZGxpbmcgaW4gSUUgaXMgYXN5bmNocm9ub3VzIGFuZCB0aGUgZmxhZyBpcyByZW1vdmVkIGFzeW5jaHJvbm91c2x5IGFzIHdlbGxcbiAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX2lzU2hpZnRUYWJiaW5nID0gZmFsc2UsIDApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIC8vIFdvcmthcm91bmQgZm9yIEZGNjMtNjUgYnVnIHRoYXQgY2F1c2VzIHRoZSBmb2N1cyB0byBnZXQgbG9zdCB3aGVuXG4gICAgICAgICAgLy8gYmx1cnJpbmcgYSBzbG90dGVkIGNvbXBvbmVudCB3aXRoIGZvY3VzYWJsZSBzaGFkb3cgcm9vdCBjb250ZW50XG4gICAgICAgICAgLy8gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTUyODY4NlxuICAgICAgICAgIC8vIFRPRE86IFJlbW92ZSB3aGVuIHNhZmVcbiAgICAgICAgICBjb25zdCBmaXJlZm94ID0gd2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQubWF0Y2goL0ZpcmVmb3hcXC8oXFxkXFxkXFwuXFxkKS8pO1xuICAgICAgICAgIGlmIChmaXJlZm94XG4gICAgICAgICAgICAmJiBwYXJzZUZsb2F0KGZpcmVmb3hbMV0pID49IDYzXG4gICAgICAgICAgICAmJiBwYXJzZUZsb2F0KGZpcmVmb3hbMV0pIDwgNjZcbiAgICAgICAgICAgICYmIHRoaXMucGFyZW50Tm9kZVxuICAgICAgICAgICAgJiYgdGhpcy5uZXh0U2libGluZykge1xuICAgICAgICAgICAgY29uc3QgZmFrZVRhcmdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgICAgICBmYWtlVGFyZ2V0LnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcbiAgICAgICAgICAgIGZha2VUYXJnZXQuc3R5bGUub3BhY2l0eSA9IDA7XG4gICAgICAgICAgICBmYWtlVGFyZ2V0LnRhYkluZGV4ID0gdGhpcy50YWJJbmRleDtcblxuICAgICAgICAgICAgdGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShmYWtlVGFyZ2V0LCB0aGlzLm5leHRTaWJsaW5nKTtcbiAgICAgICAgICAgIGZha2VUYXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgIGZha2VUYXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCAoKSA9PiB0aGlzLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZmFrZVRhcmdldCkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5hdXRvZm9jdXMgJiYgIXRoaXMuZm9jdXNlZCAmJiAhdGhpcy5kaXNhYmxlZCkge1xuICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiB7XG4gICAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgICAgIHRoaXMuX3NldEZvY3VzZWQodHJ1ZSk7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb2N1cy1yaW5nJywgJycpO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgdGhpcy5fYm91bmRLZXlkb3duTGlzdGVuZXIgPSB0aGlzLl9ib2R5S2V5ZG93bkxpc3RlbmVyLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRLZXl1cExpc3RlbmVyID0gdGhpcy5fYm9keUtleXVwTGlzdGVuZXIuYmluZCh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fYm91bmRLZXlkb3duTGlzdGVuZXIsIHRydWUpO1xuICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcigna2V5dXAnLCB0aGlzLl9ib3VuZEtleXVwTGlzdGVuZXIsIHRydWUpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9ib3VuZEtleWRvd25MaXN0ZW5lciwgdHJ1ZSk7XG4gICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXl1cCcsIHRoaXMuX2JvdW5kS2V5dXBMaXN0ZW5lciwgdHJ1ZSk7XG5cbiAgICAvLyBpbiBub24tQ2hyb21lIGJyb3dzZXJzLCBibHVyIGRvZXMgbm90IGZpcmUgb24gdGhlIGVsZW1lbnQgd2hlbiBpdCBpcyBkaXNjb25uZWN0ZWQuXG4gICAgLy8gcmVwcm9kdWNpYmxlIGluIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgd2hlbiBjbG9zaW5nIG9uIGBDYW5jZWxgIG9yIGBUb2RheWAgY2xpY2suXG4gICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdmb2N1c2VkJykpIHtcbiAgICAgIHRoaXMuX3NldEZvY3VzZWQoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRGb2N1c2VkKGZvY3VzZWQpIHtcbiAgICBpZiAoZm9jdXNlZCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2ZvY3VzZWQnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCdmb2N1c2VkJyk7XG4gICAgfVxuXG4gICAgLy8gZm9jdXMtcmluZyBpcyB0cnVlIHdoZW4gdGhlIGVsZW1lbnQgd2FzIGZvY3VzZWQgZnJvbSB0aGUga2V5Ym9hcmQuXG4gICAgLy8gRm9jdXMgUmluZyBbQTExeWNhc3RzXTogaHR0cHM6Ly95b3V0dS5iZS9pbGoyUDUtNUNqSVxuICAgIGlmIChmb2N1c2VkICYmIHRoaXMuX3RhYlByZXNzZWQpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmb2N1cy1yaW5nJywgJycpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnZm9jdXMtcmluZycpO1xuICAgIH1cbiAgfVxuXG4gIF9ib2R5S2V5ZG93bkxpc3RlbmVyKGUpIHtcbiAgICB0aGlzLl90YWJQcmVzc2VkID0gZS5rZXlDb2RlID09PSA5O1xuICB9XG5cbiAgX2JvZHlLZXl1cExpc3RlbmVyKCkge1xuICAgIHRoaXMuX3RhYlByZXNzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbnkgZWxlbWVudCBleHRlbmRpbmcgdGhpcyBtaXhpbiBpcyByZXF1aXJlZCB0byBpbXBsZW1lbnQgdGhpcyBnZXR0ZXIuXG4gICAqIEl0IHJldHVybnMgdGhlIGFjdHVhbCBmb2N1c2FibGUgZWxlbWVudCBpbiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgZ2V0IGZvY3VzRWxlbWVudCgpIHtcbiAgICB3aW5kb3cuY29uc29sZS53YXJuKGBQbGVhc2UgaW1wbGVtZW50IHRoZSAnZm9jdXNFbGVtZW50JyBwcm9wZXJ0eSBpbiA8JHt0aGlzLmxvY2FsTmFtZX0+YCk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBfZm9jdXMoZSkge1xuICAgIGlmICh0aGlzLl9pc1NoaWZ0VGFiYmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuZm9jdXNFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5fc2V0Rm9jdXNlZCh0cnVlKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBNb3ZpbmcgdGhlIGZvY3VzIGZyb20gdGhlIGhvc3QgZWxlbWVudCBjYXVzZXMgZmlyaW5nIG9mIHRoZSBibHVyIGV2ZW50IHdoYXQgbGVhZHMgdG8gcHJvYmxlbXMgaW4gSUUuXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBmb2N1cygpIHtcbiAgICBpZiAoIXRoaXMuZm9jdXNFbGVtZW50IHx8IHRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmZvY3VzRWxlbWVudC5mb2N1cygpO1xuICAgIHRoaXMuX3NldEZvY3VzZWQodHJ1ZSk7XG4gIH1cblxuICAvKipcbiAgICogTmF0aXZlIGJsdXJpbmcgaW4gdGhlIGhvc3QgZWxlbWVudCBkb2VzIG5vdGhpbmcgYmVjYXVzZSBpdCBkb2VzIG5vdCBoYXZlIHRoZSBmb2N1cy5cbiAgICogSW4gY2hyb21lIGl0IHdvcmtzLCBidXQgbm90IGluIEZGLlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYmx1cigpIHtcbiAgICB0aGlzLmZvY3VzRWxlbWVudC5ibHVyKCk7XG4gICAgdGhpcy5fc2V0Rm9jdXNlZChmYWxzZSk7XG4gIH1cblxuICBfZGlzYWJsZWRDaGFuZ2VkKGRpc2FibGVkKSB7XG4gICAgdGhpcy5mb2N1c0VsZW1lbnQuZGlzYWJsZWQgPSBkaXNhYmxlZDtcbiAgICBpZiAoZGlzYWJsZWQpIHtcbiAgICAgIHRoaXMuYmx1cigpO1xuICAgICAgdGhpcy5fcHJldmlvdXNUYWJJbmRleCA9IHRoaXMudGFiaW5kZXg7XG4gICAgICB0aGlzLnRhYmluZGV4ID0gLTE7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsICd0cnVlJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0eXBlb2YgdGhpcy5fcHJldmlvdXNUYWJJbmRleCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgdGhpcy50YWJpbmRleCA9IHRoaXMuX3ByZXZpb3VzVGFiSW5kZXg7XG4gICAgICB9XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xuICAgIH1cbiAgfVxuXG4gIF90YWJpbmRleENoYW5nZWQodGFiaW5kZXgpIHtcbiAgICBpZiAodGFiaW5kZXggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQudGFiSW5kZXggPSB0YWJpbmRleDtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5kaXNhYmxlZCAmJiB0aGlzLnRhYmluZGV4KSB7XG4gICAgICAvLyBJZiB0YWJpbmRleCBhdHRyaWJ1dGUgd2FzIGNoYW5nZWQgd2hpbGUgY2hlY2tib3ggd2FzIGRpc2FibGVkXG4gICAgICBpZiAodGhpcy50YWJpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgdGhpcy5fcHJldmlvdXNUYWJJbmRleCA9IHRoaXMudGFiaW5kZXg7XG4gICAgICB9XG4gICAgICB0aGlzLnRhYmluZGV4ID0gdGFiaW5kZXggPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgaWYgKHdpbmRvdy5TaGFkeURPTSkge1xuICAgICAgdGhpcy5zZXRQcm9wZXJ0aWVzKHt0YWJJbmRleDogdGFiaW5kZXgsIHRhYmluZGV4OiB0YWJpbmRleH0pO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBjbGljaygpIHtcbiAgICBpZiAoIXRoaXMuZGlzYWJsZWQpIHtcbiAgICAgIHN1cGVyLmNsaWNrKCk7XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuZXhwb3J0IGNvbnN0IERhdGVQaWNrZXJIZWxwZXIgPSBjbGFzcyBWYWFkaW5EYXRlUGlja2VySGVscGVyIHtcbiAgLyoqXG4gICAqIEdldCBJU08gODYwMSB3ZWVrIG51bWJlciBmb3IgdGhlIGdpdmVuIGRhdGUuXG4gICAqXG4gICAqIEBwYXJhbSB7RGF0ZX0gRGF0ZSBvYmplY3RcbiAgICogQHJldHVybiB7TnVtYmVyfSBXZWVrIG51bWJlclxuICAgKi9cbiAgc3RhdGljIF9nZXRJU09XZWVrTnVtYmVyKGRhdGUpIHtcbiAgICAvLyBQb3J0ZWQgZnJvbSBWYWFkaW4gRnJhbWV3b3JrIG1ldGhvZCBjb20udmFhZGluLmNsaWVudC5EYXRlVGltZVNlcnZpY2UuZ2V0SVNPV2Vla051bWJlcihkYXRlKVxuICAgIHZhciBkYXlPZldlZWsgPSBkYXRlLmdldERheSgpOyAvLyAwID09IHN1bmRheVxuXG4gICAgLy8gSVNPIDg2MDEgdXNlIHdlZWtzIHRoYXQgc3RhcnQgb24gbW9uZGF5IHNvIHdlIHVzZVxuICAgIC8vIG1vbj0xLHR1ZT0yLC4uLnN1bj03O1xuICAgIGlmIChkYXlPZldlZWsgPT09IDApIHtcbiAgICAgIGRheU9mV2VlayA9IDc7XG4gICAgfVxuICAgIC8vIEZpbmQgbmVhcmVzdCB0aHVyc2RheSAoZGVmaW5lcyB0aGUgd2VlayBpbiBJU08gODYwMSkuIFRoZSB3ZWVrIG51bWJlclxuICAgIC8vIGZvciB0aGUgbmVhcmVzdCB0aHVyc2RheSBpcyB0aGUgc2FtZSBhcyBmb3IgdGhlIHRhcmdldCBkYXRlLlxuICAgIHZhciBuZWFyZXN0VGh1cnNkYXlEaWZmID0gNCAtIGRheU9mV2VlazsgLy8gNCBpcyB0aHVyc2RheVxuICAgIHZhciBuZWFyZXN0VGh1cnNkYXkgPSBuZXcgRGF0ZShkYXRlLmdldFRpbWUoKSArIG5lYXJlc3RUaHVyc2RheURpZmYgKiAyNCAqIDM2MDAgKiAxMDAwKTtcblxuICAgIHZhciBmaXJzdE9mSmFudWFyeSA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGZpcnN0T2ZKYW51YXJ5LnNldEZ1bGxZZWFyKG5lYXJlc3RUaHVyc2RheS5nZXRGdWxsWWVhcigpKTtcblxuICAgIHZhciB0aW1lRGlmZiA9IG5lYXJlc3RUaHVyc2RheS5nZXRUaW1lKCkgLSBmaXJzdE9mSmFudWFyeS5nZXRUaW1lKCk7XG5cbiAgICAvLyBSb3VuZGluZyB0aGUgcmVzdWx0LCBhcyB0aGUgZGl2aXNpb24gZG9lc24ndCByZXN1bHQgaW4gYW4gaW50ZWdlclxuICAgIC8vIHdoZW4gdGhlIGdpdmVuIGRhdGUgaXMgaW5zaWRlIGRheWxpZ2h0IHNhdmluZyB0aW1lIHBlcmlvZC5cbiAgICB2YXIgZGF5c1NpbmNlRmlyc3RPZkphbnVhcnkgPSBNYXRoLnJvdW5kKHRpbWVEaWZmIC8gKDI0ICogMzYwMCAqIDEwMDApKTtcblxuICAgIHJldHVybiBNYXRoLmZsb29yKChkYXlzU2luY2VGaXJzdE9mSmFudWFyeSkgLyA3ICsgMSk7XG4gIH1cblxuICAvKipcbiAgICogQ2hlY2sgaWYgdHdvIGRhdGVzIGFyZSBlcXVhbC5cbiAgICpcbiAgICogQHBhcmFtIHtEYXRlfSBkYXRlMVxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUyXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgdGhlIGdpdmVuIGRhdGUgb2JqZWN0cyByZWZlciB0byB0aGUgc2FtZSBkYXRlXG4gICAqL1xuICBzdGF0aWMgX2RhdGVFcXVhbHMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIGRhdGUxIGluc3RhbmNlb2YgRGF0ZSAmJiBkYXRlMiBpbnN0YW5jZW9mIERhdGUgJiZcbiAgICAgICAgZGF0ZTEuZ2V0RnVsbFllYXIoKSA9PT0gZGF0ZTIuZ2V0RnVsbFllYXIoKSAmJlxuICAgICAgICBkYXRlMS5nZXRNb250aCgpID09PSBkYXRlMi5nZXRNb250aCgpICYmXG4gICAgICAgIGRhdGUxLmdldERhdGUoKSA9PT0gZGF0ZTIuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHRoZSBnaXZlbiBkYXRlIGlzIGluIHRoZSByYW5nZSBvZiBhbGxvd2VkIGRhdGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgVGhlIGRhdGUgdG8gY2hlY2tcbiAgICogQHBhcmFtIHtEYXRlfSBtaW4gUmFuZ2Ugc3RhcnRcbiAgICogQHBhcmFtIHtEYXRlfSBtYXggUmFuZ2UgZW5kXG4gICAqIEByZXR1cm4ge0Jvb2xlYW59IFRydWUgaWYgdGhlIGRhdGUgaXMgaW4gdGhlIHJhbmdlXG4gICAqL1xuICBzdGF0aWMgX2RhdGVBbGxvd2VkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuICghbWluIHx8IGRhdGUgPj0gbWluKSAmJiAoIW1heCB8fCBkYXRlIDw9IG1heCk7XG4gIH1cblxuICAvKipcbiAgICogR2V0IGNsb3Nlc3QgZGF0ZSBmcm9tIGFycmF5IG9mIGRhdGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0RhdGV9IGRhdGUgVGhlIGRhdGUgdG8gY29tcGFyZSBkYXRlcyB3aXRoXG4gICAqIEBwYXJhbSB7QXJyYXl9IGRhdGVzIEFycmF5IG9mIGRhdGUgb2JqZWN0c1xuICAgKiBAcmV0dXJuIHtEYXRlfSBDbG9zZXN0IGRhdGVcbiAgICovXG4gIHN0YXRpYyBfZ2V0Q2xvc2VzdERhdGUoZGF0ZSwgZGF0ZXMpIHtcbiAgICByZXR1cm4gZGF0ZXMuZmlsdGVyKGRhdGUgPT4gZGF0ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgLnJlZHVjZSgoY2xvc2VzdERhdGUsIGNhbmRpZGF0ZSkgPT4ge1xuICAgICAgICBpZiAoIWNhbmRpZGF0ZSkge1xuICAgICAgICAgIHJldHVybiBjbG9zZXN0RGF0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghY2xvc2VzdERhdGUpIHtcbiAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNhbmRpZGF0ZURpZmYgPSBNYXRoLmFicyhkYXRlLmdldFRpbWUoKSAtIGNhbmRpZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICB2YXIgY2xvc2VzdERhdGVEaWZmID0gTWF0aC5hYnMoY2xvc2VzdERhdGUuZ2V0VGltZSgpIC0gZGF0ZS5nZXRUaW1lKCkpO1xuICAgICAgICByZXR1cm4gY2FuZGlkYXRlRGlmZiA8IGNsb3Nlc3REYXRlRGlmZiA/IGNhbmRpZGF0ZSA6IGNsb3Nlc3REYXRlO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGJhc2ljIGNvbXBvbmVudCBwYXJ0cyBvZiBhIGRhdGUgKGRheSwgbW9udGggYW5kIHllYXIpXG4gICAqIHRvIHRoZSBleHBlY3RlZCBmb3JtYXQuXG4gICAqL1xuICBzdGF0aWMgX2V4dHJhY3REYXRlUGFydHMoZGF0ZSkge1xuICAgIHJldHVybiB7XG4gICAgICBkYXk6IGRhdGUuZ2V0RGF0ZSgpLFxuICAgICAgbW9udGg6IGRhdGUuZ2V0TW9udGgoKSxcbiAgICAgIHllYXI6IGRhdGUuZ2V0RnVsbFllYXIoKVxuICAgIH07XG4gIH1cbn07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBJcm9uQTExeUtleXNCZWhhdmlvciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yL2lyb24tYTExeS1rZXlzLWJlaGF2aW9yLmpzJztcblxuaW1wb3J0IHsgSXJvblJlc2l6YWJsZUJlaGF2aW9yIH0gZnJvbSAnQHBvbHltZXIvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IvaXJvbi1yZXNpemFibGUtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckhlbHBlciB9IGZyb20gJy4vdmFhZGluLWRhdGUtcGlja2VyLWhlbHBlci5qcyc7XG5pbXBvcnQgeyBhZGRMaXN0ZW5lciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2dlc3R1cmVzLmpzJztcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L2NsYXNzLmpzJztcblxuLyoqXG4gKiBAcG9seW1lck1peGluXG4gKi9cbmV4cG9ydCBjb25zdCBEYXRlUGlja2VyTWl4aW4gPSBzdWJjbGFzcyA9PiBjbGFzcyBWYWFkaW5EYXRlUGlja2VyTWl4aW4gZXh0ZW5kcyBtaXhpbkJlaGF2aW9ycyhcbiAgW0lyb25SZXNpemFibGVCZWhhdmlvcl0sIHN1YmNsYXNzXG4pIHtcblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIGN1cnJlbnQgc2VsZWN0ZWQgZGF0ZS5cbiAgICAgICAqL1xuICAgICAgX3NlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlXG4gICAgICB9LFxuXG4gICAgICBfZm9jdXNlZERhdGU6IERhdGUsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGVsZW1lbnQuXG4gICAgICAgKlxuICAgICAgICogU3VwcG9ydGVkIGRhdGUgZm9ybWF0czpcbiAgICAgICAqIC0gSVNPIDg2MDEgYFwiWVlZWS1NTS1ERFwiYCAoZGVmYXVsdClcbiAgICAgICAqIC0gNi1kaWdpdCBleHRlbmRlZCBJU08gODYwMSBgXCIrWVlZWVlZLU1NLUREXCJgLCBgXCItWVlZWVlZLU1NLUREXCJgXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICBvYnNlcnZlcjogJ192YWx1ZUNoYW5nZWQnLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBtYXJrIHRoZSBpbnB1dCBhcyByZXF1aXJlZC5cbiAgICAgICAqL1xuICAgICAgcmVxdWlyZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBuYW1lIG9mIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRGF0ZSB3aGljaCBzaG91bGQgYmUgdmlzaWJsZSB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxuICAgICAgICpcbiAgICAgICAqIFRoZSBzYW1lIGRhdGUgZm9ybWF0cyBhcyBmb3IgdGhlIGB2YWx1ZWAgcHJvcGVydHkgYXJlIHN1cHBvcnRlZC5cbiAgICAgICAqL1xuICAgICAgaW5pdGlhbFBvc2l0aW9uOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGxhYmVsIGZvciB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRydWUgdG8gb3BlbiB0aGUgZGF0ZSBzZWxlY3RvciBvdmVybGF5LlxuICAgICAgICovXG4gICAgICBvcGVuZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX29wZW5lZENoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNldCB0cnVlIHRvIGRpc3BsYXkgSVNPLTg2MDEgd2VlayBudW1iZXJzIGluIHRoZSBjYWxlbmRhci4gTm90aWNlIHRoYXRcbiAgICAgICAqIGRpc3BsYXlpbmcgd2VlayBudW1iZXJzIGlzIG9ubHkgc3VwcG9ydGVkIHdoZW4gYGkxOG4uZmlyc3REYXlPZldlZWtgXG4gICAgICAgKiBpcyAxIChNb25kYXkpLlxuICAgICAgICovXG4gICAgICBzaG93V2Vla051bWJlcnM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfSxcblxuICAgICAgX2Z1bGxzY3JlZW46IHtcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICBvYnNlcnZlcjogJ19mdWxsc2NyZWVuQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF9mdWxsc2NyZWVuTWVkaWFRdWVyeToge1xuICAgICAgICB2YWx1ZTogJyhtYXgtd2lkdGg6IDQyMHB4KSwgKG1heC1oZWlnaHQ6IDQyMHB4KSdcbiAgICAgIH0sXG5cbiAgICAgIC8vIEFuIGFycmF5IG9mIGFuY2VzdG9yIGVsZW1lbnRzIHdob3NlIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nIGlzIGZvcmNlZCBmcm9tIHZhbHVlXG4gICAgICAvLyAndG91Y2gnIHRvIHZhbHVlICdhdXRvJyBpbiBvcmRlciB0byBwcmV2ZW50IHRoZW0gZnJvbSBjbGlwcGluZyB0aGUgZHJvcGRvd24uIGlPUyBvbmx5LlxuICAgICAgX3RvdWNoUHJldmVudGVkOiBBcnJheSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgb2JqZWN0IHVzZWQgdG8gbG9jYWxpemUgdGhpcyBjb21wb25lbnQuXG4gICAgICAgKiBUbyBjaGFuZ2UgdGhlIGRlZmF1bHQgbG9jYWxpemF0aW9uLCByZXBsYWNlIHRoZSBlbnRpcmVcbiAgICAgICAqIF9pMThuXyBvYmplY3Qgb3IganVzdCB0aGUgcHJvcGVydHkgeW91IHdhbnQgdG8gbW9kaWZ5LlxuICAgICAgICpcbiAgICAgICAqIFRoZSBvYmplY3QgaGFzIHRoZSBmb2xsb3dpbmcgSlNPTiBzdHJ1Y3R1cmUgYW5kIGRlZmF1bHQgdmFsdWVzOlxuXG4gICAgICAgICAge1xuICAgICAgICAgICAgLy8gQW4gYXJyYXkgd2l0aCB0aGUgZnVsbCBuYW1lcyBvZiBtb250aHMgc3RhcnRpbmdcbiAgICAgICAgICAgIC8vIHdpdGggSmFudWFyeS5cbiAgICAgICAgICAgIG1vbnRoTmFtZXM6IFtcbiAgICAgICAgICAgICAgJ0phbnVhcnknLCAnRmVicnVhcnknLCAnTWFyY2gnLCAnQXByaWwnLCAnTWF5JyxcbiAgICAgICAgICAgICAgJ0p1bmUnLCAnSnVseScsICdBdWd1c3QnLCAnU2VwdGVtYmVyJyxcbiAgICAgICAgICAgICAgJ09jdG9iZXInLCAnTm92ZW1iZXInLCAnRGVjZW1iZXInXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiB3ZWVrZGF5IG5hbWVzIHN0YXJ0aW5nIHdpdGggU3VuZGF5LiBVc2VkXG4gICAgICAgICAgICAvLyBpbiBzY3JlZW4gcmVhZGVyIGFubm91bmNlbWVudHMuXG4gICAgICAgICAgICB3ZWVrZGF5czogW1xuICAgICAgICAgICAgICAnU3VuZGF5JywgJ01vbmRheScsICdUdWVzZGF5JywgJ1dlZG5lc2RheScsXG4gICAgICAgICAgICAgICdUaHVyc2RheScsICdGcmlkYXknLCAnU2F0dXJkYXknXG4gICAgICAgICAgICBdLFxuXG4gICAgICAgICAgICAvLyBBbiBhcnJheSBvZiBzaG9ydCB3ZWVrZGF5IG5hbWVzIHN0YXJ0aW5nIHdpdGggU3VuZGF5LlxuICAgICAgICAgICAgLy8gRGlzcGxheWVkIGluIHRoZSBjYWxlbmRhci5cbiAgICAgICAgICAgIHdlZWtkYXlzU2hvcnQ6IFtcbiAgICAgICAgICAgICAgJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCdcbiAgICAgICAgICAgIF0sXG5cbiAgICAgICAgICAgIC8vIEFuIGludGVnZXIgaW5kaWNhdGluZyB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrXG4gICAgICAgICAgICAvLyAoMCA9IFN1bmRheSwgMSA9IE1vbmRheSwgZXRjLikuXG4gICAgICAgICAgICBmaXJzdERheU9mV2VlazogMCxcblxuICAgICAgICAgICAgLy8gVXNlZCBpbiBzY3JlZW4gcmVhZGVyIGFubm91bmNlbWVudHMgYWxvbmcgd2l0aCB3ZWVrXG4gICAgICAgICAgICAvLyBudW1iZXJzLCBpZiB0aGV5IGFyZSBkaXNwbGF5ZWQuXG4gICAgICAgICAgICB3ZWVrOiAnV2VlaycsXG5cbiAgICAgICAgICAgIC8vIFRyYW5zbGF0aW9uIG9mIHRoZSBDYWxlbmRhciBpY29uIGJ1dHRvbiB0aXRsZS5cbiAgICAgICAgICAgIGNhbGVuZGFyOiAnQ2FsZW5kYXInLFxuXG4gICAgICAgICAgICAvLyBUcmFuc2xhdGlvbiBvZiB0aGUgQ2xlYXIgaWNvbiBidXR0b24gdGl0bGUuXG4gICAgICAgICAgICBjbGVhcjogJ0NsZWFyJyxcblxuICAgICAgICAgICAgLy8gVHJhbnNsYXRpb24gb2YgdGhlIFRvZGF5IHNob3J0Y3V0IGJ1dHRvbiB0ZXh0LlxuICAgICAgICAgICAgdG9kYXk6ICdUb2RheScsXG5cbiAgICAgICAgICAgIC8vIFRyYW5zbGF0aW9uIG9mIHRoZSBDYW5jZWwgYnV0dG9uIHRleHQuXG4gICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuXG4gICAgICAgICAgICAvLyBBIGZ1bmN0aW9uIHRvIGZvcm1hdCBnaXZlbiBgT2JqZWN0YCBhc1xuICAgICAgICAgICAgLy8gZGF0ZSBzdHJpbmcuIE9iamVjdCBpcyBpbiB0aGUgZm9ybWF0IGB7IGRheTogLi4uLCBtb250aDogLi4uLCB5ZWFyOiAuLi4gfWBcbiAgICAgICAgICAgIC8vIE5vdGU6IFRoZSBhcmd1bWVudCBtb250aCBpcyAwLWJhc2VkLiBUaGlzIG1lYW5zIHRoYXQgSmFudWFyeSA9IDAgYW5kIERlY2VtYmVyID0gMTEuXG4gICAgICAgICAgICBmb3JtYXREYXRlOiBkID0+IHtcbiAgICAgICAgICAgICAgLy8gcmV0dXJucyBhIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW5cbiAgICAgICAgICAgICAgLy8gb2JqZWN0IGluICdNTS9ERC9ZWVlZJyAtZm9ybWF0XG4gICAgICAgICAgICB9LFxuXG4gICAgICAgICAgICAvLyBBIGZ1bmN0aW9uIHRvIHBhcnNlIHRoZSBnaXZlbiB0ZXh0IHRvIGFuIGBPYmplY3RgIGluIHRoZSBmb3JtYXQgYHsgZGF5OiAuLi4sIG1vbnRoOiAuLi4sIHllYXI6IC4uLiB9YC5cbiAgICAgICAgICAgIC8vIE11c3QgcHJvcGVybHkgcGFyc2UgKGF0IGxlYXN0KSB0ZXh0IGZvcm1hdHRlZCBieSBgZm9ybWF0RGF0ZWAuXG4gICAgICAgICAgICAvLyBTZXR0aW5nIHRoZSBwcm9wZXJ0eSB0byBudWxsIHdpbGwgZGlzYWJsZSBrZXlib2FyZCBpbnB1dCBmZWF0dXJlLlxuICAgICAgICAgICAgLy8gTm90ZTogVGhlIGFyZ3VtZW50IG1vbnRoIGlzIDAtYmFzZWQuIFRoaXMgbWVhbnMgdGhhdCBKYW51YXJ5ID0gMCBhbmQgRGVjZW1iZXIgPSAxMS5cbiAgICAgICAgICAgIHBhcnNlRGF0ZTogdGV4dCA9PiB7XG4gICAgICAgICAgICAgIC8vIFBhcnNlcyBhIHN0cmluZyBpbiAnTU0vREQvWVknLCAnTU0vREQnIG9yICdERCcgLWZvcm1hdCB0b1xuICAgICAgICAgICAgICAvLyBhbiBgT2JqZWN0YCBpbiB0aGUgZm9ybWF0IGB7IGRheTogLi4uLCBtb250aDogLi4uLCB5ZWFyOiAuLi4gfWAuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIEEgZnVuY3Rpb24gdG8gZm9ybWF0IGdpdmVuIGBtb250aE5hbWVgIGFuZFxuICAgICAgICAgICAgLy8gYGZ1bGxZZWFyYCBpbnRlZ2VyIGFzIGNhbGVuZGFyIHRpdGxlIHN0cmluZy5cbiAgICAgICAgICAgIGZvcm1hdFRpdGxlOiAobW9udGhOYW1lLCBmdWxsWWVhcikgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gbW9udGhOYW1lICsgJyAnICsgZnVsbFllYXI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuXG4gICAgICAgKlxuICAgICAgICogQGRlZmF1bHQge0VuZ2xpc2gvVVN9XG4gICAgICAgKi9cbiAgICAgIGkxOG46IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb250aE5hbWVzOiBbXG4gICAgICAgICAgICAgICdKYW51YXJ5JywgJ0ZlYnJ1YXJ5JywgJ01hcmNoJywgJ0FwcmlsJywgJ01heScsXG4gICAgICAgICAgICAgICdKdW5lJywgJ0p1bHknLCAnQXVndXN0JywgJ1NlcHRlbWJlcicsICdPY3RvYmVyJywgJ05vdmVtYmVyJywgJ0RlY2VtYmVyJ1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHdlZWtkYXlzOiBbJ1N1bmRheScsICdNb25kYXknLCAnVHVlc2RheScsICdXZWRuZXNkYXknLCAnVGh1cnNkYXknLCAnRnJpZGF5JywgJ1NhdHVyZGF5J10sXG4gICAgICAgICAgICB3ZWVrZGF5c1Nob3J0OiBbJ1N1bicsICdNb24nLCAnVHVlJywgJ1dlZCcsICdUaHUnLCAnRnJpJywgJ1NhdCddLFxuICAgICAgICAgICAgZmlyc3REYXlPZldlZWs6IDAsXG4gICAgICAgICAgICB3ZWVrOiAnV2VlaycsXG4gICAgICAgICAgICBjYWxlbmRhcjogJ0NhbGVuZGFyJyxcbiAgICAgICAgICAgIGNsZWFyOiAnQ2xlYXInLFxuICAgICAgICAgICAgdG9kYXk6ICdUb2RheScsXG4gICAgICAgICAgICBjYW5jZWw6ICdDYW5jZWwnLFxuICAgICAgICAgICAgZm9ybWF0RGF0ZTogZCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHllYXJTdHIgPSBTdHJpbmcoZC55ZWFyKS5yZXBsYWNlKC9cXGQrLywgeSA9PiAnMDAwMCcuc3Vic3RyKHkubGVuZ3RoKSArIHkpO1xuICAgICAgICAgICAgICByZXR1cm4gW2QubW9udGggKyAxLCBkLmRheSwgeWVhclN0cl0uam9pbignLycpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHBhcnNlRGF0ZTogdGV4dCA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhcnRzID0gdGV4dC5zcGxpdCgnLycpO1xuICAgICAgICAgICAgICBjb25zdCB0b2RheSA9IG5ldyBEYXRlKCk7XG4gICAgICAgICAgICAgIGxldCBkYXRlLCBtb250aCA9IHRvZGF5LmdldE1vbnRoKCksIHllYXIgPSB0b2RheS5nZXRGdWxsWWVhcigpO1xuXG4gICAgICAgICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDMpIHtcbiAgICAgICAgICAgICAgICB5ZWFyID0gcGFyc2VJbnQocGFydHNbMl0pO1xuICAgICAgICAgICAgICAgIGlmIChwYXJ0c1syXS5sZW5ndGggPCAzICYmIHllYXIgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgeWVhciArPSB5ZWFyIDwgNTAgPyAyMDAwIDogMTkwMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbW9udGggPSBwYXJzZUludChwYXJ0c1swXSkgLSAxO1xuICAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZUludChwYXJ0c1sxXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAyKSB7XG4gICAgICAgICAgICAgICAgbW9udGggPSBwYXJzZUludChwYXJ0c1swXSkgLSAxO1xuICAgICAgICAgICAgICAgIGRhdGUgPSBwYXJzZUludChwYXJ0c1sxXSk7XG4gICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydHMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgZGF0ZSA9IHBhcnNlSW50KHBhcnRzWzBdKTtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGlmIChkYXRlICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge2RheTogZGF0ZSwgbW9udGgsIHllYXJ9O1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZm9ybWF0VGl0bGU6IChtb250aE5hbWUsIGZ1bGxZZWFyKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBtb250aE5hbWUgKyAnICcgKyBmdWxsWWVhcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgZWFybGllciBkYXRlcyB3aWxsIGJlIGRpc2FibGVkLlxuICAgICAgICpcbiAgICAgICAqIFN1cHBvcnRlZCBkYXRlIGZvcm1hdHM6XG4gICAgICAgKiAtIElTTyA4NjAxIGBcIllZWVktTU0tRERcImAgKGRlZmF1bHQpXG4gICAgICAgKiAtIDYtZGlnaXQgZXh0ZW5kZWQgSVNPIDg2MDEgYFwiK1lZWVlZWS1NTS1ERFwiYCwgYFwiLVlZWVlZWS1NTS1ERFwiYFxuICAgICAgICpcbiAgICAgICAqIEB0eXBlIHtTdHJpbmd9XG4gICAgICAgKi9cbiAgICAgIG1pbjoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIG9ic2VydmVyOiAnX21pbkNoYW5nZWQnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGxhdGVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKlxuICAgICAgICogU3VwcG9ydGVkIGRhdGUgZm9ybWF0czpcbiAgICAgICAqIC0gSVNPIDg2MDEgYFwiWVlZWS1NTS1ERFwiYCAoZGVmYXVsdClcbiAgICAgICAqIC0gNi1kaWdpdCBleHRlbmRlZCBJU08gODYwMSBgXCIrWVlZWVlZLU1NLUREXCJgLCBgXCItWVlZWVlZLU1NLUREXCJgXG4gICAgICAgKlxuICAgICAgICogQHR5cGUge1N0cmluZ31cbiAgICAgICAqL1xuICAgICAgbWF4OiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfbWF4Q2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVhcmxpZXN0IGRhdGUgdGhhdCBjYW4gYmUgc2VsZWN0ZWQuIEFsbCBlYXJsaWVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIF9taW5EYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIC8vIG51bGwgZG9lcyBub3Qgd29yayBoZXJlIGJlY2F1c2UgbWluaW1pemVyIHBhc3NlcyB1bmRlZmluZWQgdG8gb3ZlcmxheSAoIzM1MSlcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGxhdGVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIF9tYXhEYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIHZhbHVlOiAnJ1xuICAgICAgfSxcblxuICAgICAgX25vSW5wdXQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgY29tcHV0ZWQ6ICdfaXNOb0lucHV0KF9mdWxsc2NyZWVuLCBfaW9zLCBpMThuLCBpMThuLiopJ1xuICAgICAgfSxcblxuICAgICAgX2lvczoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoPzpob25lfGFkOyg/OiBVOyk/IENQVSkgT1MgKFxcZCspLylcbiAgICAgIH0sXG5cbiAgICAgIF93ZWJraXRPdmVyZmxvd1Njcm9sbDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jykuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPT09ICcnXG4gICAgICB9LFxuXG4gICAgICBfaWdub3JlQW5ub3VuY2U6IHtcbiAgICAgICAgdmFsdWU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIF9mb2N1c092ZXJsYXlPbk9wZW46IEJvb2xlYW4sXG5cbiAgICAgIF9vdmVybGF5SW5pdGlhbGl6ZWQ6IEJvb2xlYW5cbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlcnMoKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICdfdXBkYXRlSGFzVmFsdWUodmFsdWUpJyxcbiAgICAgICdfdmFsaWRhdGVJbnB1dChfc2VsZWN0ZWREYXRlLCBfbWluRGF0ZSwgX21heERhdGUpJyxcbiAgICAgICdfc2VsZWN0ZWREYXRlQ2hhbmdlZChfc2VsZWN0ZWREYXRlLCBpMThuLmZvcm1hdERhdGUpJyxcbiAgICAgICdfZm9jdXNlZERhdGVDaGFuZ2VkKF9mb2N1c2VkRGF0ZSwgaTE4bi5mb3JtYXREYXRlKScsXG4gICAgICAnX2Fubm91bmNlRm9jdXNlZERhdGUoX2ZvY3VzZWREYXRlLCBvcGVuZWQsIF9pZ25vcmVBbm5vdW5jZSknXG4gICAgXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG4gICAgdGhpcy5fYm91bmRPblNjcm9sbCA9IHRoaXMuX29uU2Nyb2xsLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRGb2N1cyA9IHRoaXMuX2ZvY3VzLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRVcGRhdGVBbGlnbm1lbnRBbmRQb3NpdGlvbiA9IHRoaXMuX3VwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uLmJpbmQodGhpcyk7XG5cbiAgICBjb25zdCBpc0NsZWFyQnV0dG9uID0gZSA9PiB7XG4gICAgICBjb25zdCBwYXRoID0gZS5jb21wb3NlZFBhdGgoKTtcbiAgICAgIGNvbnN0IGlucHV0SW5kZXggPSBwYXRoLmluZGV4T2YodGhpcy5faW5wdXRFbGVtZW50KTtcbiAgICAgIHJldHVybiBwYXRoLnNsaWNlKDAsIGlucHV0SW5kZXgpXG4gICAgICAgIC5maWx0ZXIoZWwgPT4gZWwuZ2V0QXR0cmlidXRlICYmIGVsLmdldEF0dHJpYnV0ZSgncGFydCcpID09PSAnY2xlYXItYnV0dG9uJylcbiAgICAgICAgLmxlbmd0aCA9PT0gMTtcbiAgICB9O1xuXG4gICAgYWRkTGlzdGVuZXIodGhpcywgJ3RhcCcsIGUgPT4ge1xuICAgICAgLy8gRklYTUUocGxhdG9zaGEpOiB1c2UgcHJldmVudERlZmF1bHQgaW4gdGhlIHRleHQgZmllbGQgY2xlYXIgYnV0dG9uLFxuICAgICAgLy8gdGhlbiB0aGUgZm9sbG93aW5nIGNvbXBvc2VkUGF0aCBjaGVjayBjb3VsZCBiZSBzaW1wbGlmaWVkIGRvd25cbiAgICAgIC8vIHRvIGBpZiAoIWUuZGVmYXVsdFByZXZlbnRlZClgLlxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC9pc3N1ZXMvMzUyXG4gICAgICBpZiAoIWlzQ2xlYXJCdXR0b24oZSkpIHtcbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgZSA9PiB7XG4gICAgICBpZiAoIWlzQ2xlYXJCdXR0b24oZSkpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5ZG93bi5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgdGhpcy5fb25Vc2VySW5wdXQuYmluZCh0aGlzKSk7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGUgPT4gdGhpcy5fbm9JbnB1dCAmJiBlLnRhcmdldC5ibHVyKCkpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGUgPT4gIXRoaXMub3BlbmVkICYmIHRoaXMudmFsaWRhdGUoKSk7XG4gIH1cblxuICBfaW5pdE92ZXJsYXkoKSB7XG4gICAgdGhpcy4kLm92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlLXVwZ3JhZGUnKTtcbiAgICB0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy4kLm92ZXJsYXkuYWRkRXZlbnRMaXN0ZW5lcignb3BlbmVkLWNoYW5nZWQnLCBlID0+IHRoaXMub3BlbmVkID0gZS5kZXRhaWwudmFsdWUpO1xuXG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xvc2UnLCB0aGlzLl9jbG9zZS5iaW5kKHRoaXMpKTtcbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5hZGRFdmVudExpc3RlbmVyKCdmb2N1cy1pbnB1dCcsIHRoaXMuX2ZvY3VzQW5kU2VsZWN0LmJpbmQodGhpcykpO1xuICAgIHRoaXMuJC5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ3ZhYWRpbi1vdmVybGF5LWVzY2FwZS1wcmVzcycsIHRoaXMuX2JvdW5kRm9jdXMpO1xuXG4gICAgLy8gS2VlcCBmb2N1cyBhdHRyaWJ1dGUgaW4gZm9jdXNFbGVtZW50IGZvciBzdHlsaW5nXG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCAoKSA9PiB0aGlzLmZvY3VzRWxlbWVudC5fc2V0Rm9jdXNlZCh0cnVlKSk7XG5cbiAgICB0aGlzLiQub3ZlcmxheS5hZGRFdmVudExpc3RlbmVyKCd2YWFkaW4tb3ZlcmxheS1jbG9zZScsIHRoaXMuX29uVmFhZGluT3ZlcmxheUNsb3NlLmJpbmQodGhpcykpO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG5cbiAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5yZW1vdmVFdmVudExpc3RlbmVyKCd2YWFkaW4tb3ZlcmxheS1lc2NhcGUtcHJlc3MnLCB0aGlzLl9ib3VuZEZvY3VzKTtcbiAgICB9XG5cbiAgICB0aGlzLm9wZW5lZCA9IGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqIE9wZW5zIHRoZSBkcm9wZG93bi5cbiAgICovXG4gIG9wZW4oKSB7XG4gICAgaWYgKCF0aGlzLmRpc2FibGVkICYmICF0aGlzLnJlYWRvbmx5KSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2Nsb3NlKGUpIHtcbiAgICBpZiAoZSkge1xuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICB9XG4gICAgdGhpcy5fZm9jdXMoKTtcbiAgICB0aGlzLmNsb3NlKCk7XG4gIH1cblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBkcm9wZG93bi5cbiAgICovXG4gIGNsb3NlKCkge1xuICAgIGlmICh0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHRoaXMuJC5vdmVybGF5LmNsb3NlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IF9pbnB1dEVsZW1lbnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0KCk7XG4gIH1cblxuICBnZXQgX25hdGl2ZUlucHV0KCkge1xuICAgIGlmICh0aGlzLl9pbnB1dEVsZW1lbnQpIHtcbiAgICAgIC8vIHZhYWRpbi10ZXh0LWZpZWxkJ3MgaW5wdXQgaXMgZm9jdXNFbGVtZW50XG4gICAgICAvLyBpcm9uLWlucHV0J3MgaW5wdXQgaXMgaW5wdXRFbGVtZW50XG4gICAgICByZXR1cm4gdGhpcy5faW5wdXRFbGVtZW50LmZvY3VzRWxlbWVudCA/IHRoaXMuX2lucHV0RWxlbWVudC5mb2N1c0VsZW1lbnQgOlxuICAgICAgICB0aGlzLl9pbnB1dEVsZW1lbnQuaW5wdXRFbGVtZW50ID8gdGhpcy5faW5wdXRFbGVtZW50LmlucHV0RWxlbWVudCA6XG4gICAgICAgICAgd2luZG93LnVud3JhcCA/IHdpbmRvdy51bndyYXAodGhpcy5faW5wdXRFbGVtZW50KSA6IHRoaXMuX2lucHV0RWxlbWVudDtcbiAgICB9XG4gIH1cblxuICBfcGFyc2VEYXRlKHN0cikge1xuICAgIC8vIFBhcnNpbmcgd2l0aCBSZWdFeHAgdG8gZW5zdXJlIGNvcnJlY3QgZm9ybWF0XG4gICAgdmFyIHBhcnRzID0gL14oWy0rXVxcZHsxfXxcXGR7Miw0fXxbLStdXFxkezZ9KS0oXFxkezEsMn0pLShcXGR7MSwyfSkkLy5leGVjKHN0cik7XG4gICAgaWYgKCFwYXJ0cykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBkYXRlID0gbmV3IERhdGUoMCwgMCk7IC8vIFdyb25nIGRhdGUgKDE5MDAtMDEtMDEpLCBidXQgd2l0aCBtaWRuaWdodCBpbiBsb2NhbCB0aW1lXG4gICAgZGF0ZS5zZXRGdWxsWWVhcihwYXJzZUludChwYXJ0c1sxXSwgMTApKTtcbiAgICBkYXRlLnNldE1vbnRoKHBhcnNlSW50KHBhcnRzWzJdLCAxMCkgLSAxKTtcbiAgICBkYXRlLnNldERhdGUocGFyc2VJbnQocGFydHNbM10sIDEwKSk7XG4gICAgcmV0dXJuIGRhdGU7XG4gIH1cblxuICBfaXNOb0lucHV0KGZ1bGxzY3JlZW4sIGlvcywgaTE4bikge1xuICAgIHJldHVybiAhdGhpcy5faW5wdXRFbGVtZW50IHx8IGZ1bGxzY3JlZW4gfHwgaW9zIHx8ICFpMThuLnBhcnNlRGF0ZTtcbiAgfVxuXG4gIF9mb3JtYXRJU08oZGF0ZSkge1xuICAgIGlmICghKGRhdGUgaW5zdGFuY2VvZiBEYXRlKSkge1xuICAgICAgcmV0dXJuICcnO1xuICAgIH1cblxuICAgIGNvbnN0IHBhZCA9IChudW0sIGZtdCA9ICcwMCcpID0+IChmbXQgKyBudW0pLnN1YnN0cigoZm10ICsgbnVtKS5sZW5ndGggLSBmbXQubGVuZ3RoKTtcblxuICAgIGxldCB5ZWFyU2lnbiA9ICcnO1xuICAgIGxldCB5ZWFyRm10ID0gJzAwMDAnO1xuICAgIGxldCB5ZWFyQWJzID0gZGF0ZS5nZXRGdWxsWWVhcigpO1xuICAgIGlmICh5ZWFyQWJzIDwgMCkge1xuICAgICAgeWVhckFicyA9IC15ZWFyQWJzO1xuICAgICAgeWVhclNpZ24gPSAnLSc7XG4gICAgICB5ZWFyRm10ID0gJzAwMDAwMCc7XG4gICAgfSBlbHNlIGlmIChkYXRlLmdldEZ1bGxZZWFyKCkgPj0gMTAwMDApIHtcbiAgICAgIHllYXJTaWduID0gJysnO1xuICAgICAgeWVhckZtdCA9ICcwMDAwMDAnO1xuICAgIH1cblxuICAgIGNvbnN0IHllYXIgPSB5ZWFyU2lnbiArIHBhZCh5ZWFyQWJzLCB5ZWFyRm10KTtcbiAgICBjb25zdCBtb250aCA9IHBhZChkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICBjb25zdCBkYXkgPSBwYWQoZGF0ZS5nZXREYXRlKCkpO1xuICAgIHJldHVybiBbeWVhciwgbW9udGgsIGRheV0uam9pbignLScpO1xuICB9XG5cbiAgX29wZW5lZENoYW5nZWQob3BlbmVkKSB7XG4gICAgaWYgKG9wZW5lZCAmJiAhdGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9pbml0T3ZlcmxheSgpO1xuICAgIH1cbiAgICBpZiAodGhpcy5fb3ZlcmxheUluaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLiQub3ZlcmxheS5vcGVuZWQgPSBvcGVuZWQ7XG4gICAgfVxuICAgIGlmIChvcGVuZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgX3NlbGVjdGVkRGF0ZUNoYW5nZWQoc2VsZWN0ZWREYXRlLCBmb3JtYXREYXRlKSB7XG4gICAgaWYgKHNlbGVjdGVkRGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGZvcm1hdERhdGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAodGhpcy5fX3VzZXJJbnB1dE9jY3VycmVkKSB7XG4gICAgICB0aGlzLl9fZGlzcGF0Y2hDaGFuZ2UgPSB0cnVlO1xuICAgIH1cbiAgICBjb25zdCBpbnB1dFZhbHVlID0gc2VsZWN0ZWREYXRlICYmIGZvcm1hdERhdGUoRGF0ZVBpY2tlckhlbHBlci5fZXh0cmFjdERhdGVQYXJ0cyhzZWxlY3RlZERhdGUpKTtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuX2Zvcm1hdElTTyhzZWxlY3RlZERhdGUpO1xuICAgIGlmICh2YWx1ZSAhPT0gdGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy52YWxpZGF0ZShpbnB1dFZhbHVlKTtcbiAgICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgICB9XG4gICAgdGhpcy5fX3VzZXJJbnB1dE9jY3VycmVkID0gZmFsc2U7XG4gICAgdGhpcy5fX2Rpc3BhdGNoQ2hhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSB0cnVlO1xuICAgIHRoaXMuX2ZvY3VzZWREYXRlID0gc2VsZWN0ZWREYXRlO1xuICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gZmFsc2U7XG4gICAgdGhpcy5faW5wdXRWYWx1ZSA9IHNlbGVjdGVkRGF0ZSA/IGlucHV0VmFsdWUgOiAnJztcbiAgfVxuXG4gIF9mb2N1c2VkRGF0ZUNoYW5nZWQoZm9jdXNlZERhdGUsIGZvcm1hdERhdGUpIHtcbiAgICBpZiAoZm9jdXNlZERhdGUgPT09IHVuZGVmaW5lZCB8fCBmb3JtYXREYXRlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5fX3VzZXJJbnB1dE9jY3VycmVkID0gdHJ1ZTtcbiAgICBpZiAoIXRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlICYmICF0aGlzLl9ub0lucHV0KSB7XG4gICAgICB0aGlzLl9pbnB1dFZhbHVlID0gZm9jdXNlZERhdGUgPyBmb3JtYXREYXRlKERhdGVQaWNrZXJIZWxwZXIuX2V4dHJhY3REYXRlUGFydHMoZm9jdXNlZERhdGUpKSA6ICcnO1xuICAgIH1cbiAgfVxuXG4gIF91cGRhdGVIYXNWYWx1ZSh2YWx1ZSkge1xuICAgIGlmICh2YWx1ZSkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hhcy12YWx1ZScsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2hhcy12YWx1ZScpO1xuICAgIH1cbiAgfVxuXG5cbiAgX19nZXRPdmVybGF5VGhlbWUodGhlbWUsIG92ZXJsYXlJbml0aWFsaXplZCkge1xuICAgIGlmIChvdmVybGF5SW5pdGlhbGl6ZWQpIHtcbiAgICAgIHJldHVybiB0aGVtZTtcbiAgICB9XG4gIH1cblxuICBfaGFuZGxlRGF0ZUNoYW5nZShwcm9wZXJ0eSwgdmFsdWUsIG9sZFZhbHVlKSB7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgdGhpc1twcm9wZXJ0eV0gPSAnJztcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgZGF0ZSA9IHRoaXMuX3BhcnNlRGF0ZSh2YWx1ZSk7XG4gICAgaWYgKCFkYXRlKSB7XG4gICAgICB0aGlzLnZhbHVlID0gb2xkVmFsdWU7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmICghRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyh0aGlzW3Byb3BlcnR5XSwgZGF0ZSkpIHtcbiAgICAgIHRoaXNbcHJvcGVydHldID0gZGF0ZTtcbiAgICB9XG4gIH1cblxuICBfdmFsdWVDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIGlmICh0aGlzLl9fZGlzcGF0Y2hDaGFuZ2UpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHtidWJibGVzOiB0cnVlfSkpO1xuICAgIH1cbiAgICB0aGlzLl9oYW5kbGVEYXRlQ2hhbmdlKCdfc2VsZWN0ZWREYXRlJywgdmFsdWUsIG9sZFZhbHVlKTtcbiAgfVxuXG4gIF9taW5DaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIHRoaXMuX2hhbmRsZURhdGVDaGFuZ2UoJ19taW5EYXRlJywgdmFsdWUsIG9sZFZhbHVlKTtcbiAgfVxuXG4gIF9tYXhDaGFuZ2VkKHZhbHVlLCBvbGRWYWx1ZSkge1xuICAgIHRoaXMuX2hhbmRsZURhdGVDaGFuZ2UoJ19tYXhEYXRlJywgdmFsdWUsIG9sZFZhbHVlKTtcbiAgfVxuXG4gIF91cGRhdGVBbGlnbm1lbnRBbmRQb3NpdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuX292ZXJsYXlJbml0aWFsaXplZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoIXRoaXMuX2Z1bGxzY3JlZW4pIHtcbiAgICAgIGNvbnN0IGlucHV0UmVjdCA9IHRoaXMuX2lucHV0RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcblxuICAgICAgY29uc3QgYm90dG9tQWxpZ24gPSBpbnB1dFJlY3QudG9wID4gd2luZG93LmlubmVySGVpZ2h0IC8gMjtcbiAgICAgIGNvbnN0IHJpZ2h0QWxpZ24gPSBpbnB1dFJlY3QubGVmdCArIHRoaXMuY2xpZW50V2lkdGggLyAyID4gd2luZG93LmlubmVyV2lkdGggLyAyO1xuXG4gICAgICBpZiAocmlnaHRBbGlnbikge1xuICAgICAgICBjb25zdCB2aWV3cG9ydFdpZHRoID0gTWF0aC5taW4od2luZG93LmlubmVyV2lkdGgsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnNldEF0dHJpYnV0ZSgncmlnaHQtYWxpZ25lZCcsICcnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2xlZnQnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUucmlnaHQgPSAodmlld3BvcnRXaWR0aCAtIGlucHV0UmVjdC5yaWdodCkgKyAncHgnO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkucmVtb3ZlQXR0cmlidXRlKCdyaWdodC1hbGlnbmVkJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdyaWdodCcpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5sZWZ0ID0gaW5wdXRSZWN0LmxlZnQgKyAncHgnO1xuICAgICAgfVxuXG4gICAgICBpZiAoYm90dG9tQWxpZ24pIHtcbiAgICAgICAgY29uc3Qgdmlld3BvcnRIZWlnaHQgPSBNYXRoLm1pbih3aW5kb3cuaW5uZXJIZWlnaHQsIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRIZWlnaHQpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2JvdHRvbS1hbGlnbmVkJywgJycpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnN0eWxlLmJvdHRvbSA9ICh2aWV3cG9ydEhlaWdodCAtIGlucHV0UmVjdC50b3ApICsgJ3B4JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuJC5vdmVybGF5LnJlbW92ZUF0dHJpYnV0ZSgnYm90dG9tLWFsaWduZWQnKTtcbiAgICAgICAgdGhpcy4kLm92ZXJsYXkuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ2JvdHRvbScpO1xuICAgICAgICB0aGlzLiQub3ZlcmxheS5zdHlsZS50b3AgPSBpbnB1dFJlY3QuYm90dG9tICsgJ3B4JztcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLiQub3ZlcmxheS5zZXRBdHRyaWJ1dGUoJ2RpcicsXG4gICAgICBnZXRDb21wdXRlZFN0eWxlKHRoaXMuX2lucHV0RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnZGlyZWN0aW9uJylcbiAgICApO1xuICAgIHRoaXMuX292ZXJsYXlDb250ZW50Ll9yZXBvc2l0aW9uWWVhclNjcm9sbGVyKCk7XG4gIH1cblxuICBfZnVsbHNjcmVlbkNoYW5nZWQoKSB7XG4gICAgaWYgKHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCAmJiB0aGlzLiQub3ZlcmxheS5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX3VwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKCk7XG4gICAgfVxuICB9XG5cbiAgX29uT3ZlcmxheU9wZW5lZCgpIHtcbiAgICB0aGlzLl9vcGVuZWRXaXRoRm9jdXNSaW5nID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnKSB8fCAodGhpcy5mb2N1c0VsZW1lbnQgJiYgdGhpcy5mb2N1c0VsZW1lbnQuaGFzQXR0cmlidXRlKCdmb2N1cy1yaW5nJykpO1xuXG4gICAgdmFyIHBhcnNlZEluaXRpYWxQb3NpdGlvbiA9IHRoaXMuX3BhcnNlRGF0ZSh0aGlzLmluaXRpYWxQb3NpdGlvbik7XG5cbiAgICB2YXIgaW5pdGlhbFBvc2l0aW9uID0gdGhpcy5fc2VsZWN0ZWREYXRlIHx8IHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbiB8fFxuICAgICAgcGFyc2VkSW5pdGlhbFBvc2l0aW9uIHx8IG5ldyBEYXRlKCk7XG5cbiAgICBpZiAocGFyc2VkSW5pdGlhbFBvc2l0aW9uIHx8XG4gICAgICBEYXRlUGlja2VySGVscGVyLl9kYXRlQWxsb3dlZChpbml0aWFsUG9zaXRpb24sIHRoaXMuX21pbkRhdGUsIHRoaXMuX21heERhdGUpKSB7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5pbml0aWFsUG9zaXRpb24gPSBpbml0aWFsUG9zaXRpb247XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LmluaXRpYWxQb3NpdGlvbiA9XG4gICAgICAgIERhdGVQaWNrZXJIZWxwZXIuX2dldENsb3Nlc3REYXRlKGluaXRpYWxQb3NpdGlvbiwgW3RoaXMuX21pbkRhdGUsIHRoaXMuX21heERhdGVdKTtcbiAgICB9XG5cbiAgICB0aGlzLl9vdmVybGF5Q29udGVudC5zY3JvbGxUb0RhdGUodGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXNlZERhdGUgfHwgdGhpcy5fb3ZlcmxheUNvbnRlbnQuaW5pdGlhbFBvc2l0aW9uKTtcbiAgICAvLyBIYXZlIGEgZGVmYXVsdCBmb2N1c2VkIGRhdGVcbiAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IHRydWU7XG4gICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXNlZERhdGUgPSB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZSB8fCB0aGlzLl9vdmVybGF5Q29udGVudC5pbml0aWFsUG9zaXRpb247XG4gICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSBmYWxzZTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCB0aGlzLl9ib3VuZE9uU2Nyb2xsLCB0cnVlKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2lyb24tcmVzaXplJywgdGhpcy5fYm91bmRVcGRhdGVBbGlnbm1lbnRBbmRQb3NpdGlvbik7XG5cbiAgICBpZiAodGhpcy5fd2Via2l0T3ZlcmZsb3dTY3JvbGwpIHtcbiAgICAgIHRoaXMuX3RvdWNoUHJldmVudGVkID0gdGhpcy5fcHJldmVudFdlYmtpdE92ZXJmbG93U2Nyb2xsaW5nVG91Y2godGhpcy5wYXJlbnRFbGVtZW50KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fZm9jdXNPdmVybGF5T25PcGVuKSB7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1cygpO1xuICAgICAgdGhpcy5fZm9jdXNPdmVybGF5T25PcGVuID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZvY3VzKCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX25vSW5wdXQgJiYgdGhpcy5mb2N1c0VsZW1lbnQpIHtcbiAgICAgIHRoaXMuZm9jdXNFbGVtZW50LmJsdXIoKTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuXG4gICAgdGhpcy5faWdub3JlQW5ub3VuY2UgPSBmYWxzZTtcbiAgfVxuXG4gIC8vIEEgaGFjayBuZWVkZWQgZm9yIGlPUyB0byBwcmV2ZW50IGRyb3Bkb3duIGZyb20gYmVpbmcgY2xpcHBlZCBpbiBhblxuICAvLyBhbmNlc3RvciBjb250YWluZXIgd2l0aCAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gIF9wcmV2ZW50V2Via2l0T3ZlcmZsb3dTY3JvbGxpbmdUb3VjaChlbGVtZW50KSB7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHdoaWxlIChlbGVtZW50KSB7XG4gICAgICBpZiAod2luZG93LmdldENvbXB1dGVkU3R5bGUoZWxlbWVudCkud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPT09ICd0b3VjaCcpIHtcbiAgICAgICAgdmFyIG9sZElubGluZVZhbHVlID0gZWxlbWVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZztcbiAgICAgICAgZWxlbWVudC5zdHlsZS53ZWJraXRPdmVyZmxvd1Njcm9sbGluZyA9ICdhdXRvJztcbiAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgIGVsZW1lbnQ6IGVsZW1lbnQsXG4gICAgICAgICAgb2xkSW5saW5lVmFsdWU6IG9sZElubGluZVZhbHVlXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgICAgZWxlbWVudCA9IGVsZW1lbnQucGFyZW50RWxlbWVudDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIF9vbk92ZXJsYXlDbG9zZWQoKSB7XG4gICAgdGhpcy5faWdub3JlQW5ub3VuY2UgPSB0cnVlO1xuXG4gICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIHRoaXMuX2JvdW5kT25TY3JvbGwsIHRydWUpO1xuICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignaXJvbi1yZXNpemUnLCB0aGlzLl9ib3VuZFVwZGF0ZUFsaWdubWVudEFuZFBvc2l0aW9uKTtcblxuICAgIGlmICh0aGlzLl90b3VjaFByZXZlbnRlZCkge1xuICAgICAgdGhpcy5fdG91Y2hQcmV2ZW50ZWQuZm9yRWFjaChwcmV2ZW50ZWQgPT5cbiAgICAgICAgcHJldmVudGVkLmVsZW1lbnQuc3R5bGUud2Via2l0T3ZlcmZsb3dTY3JvbGxpbmcgPSBwcmV2ZW50ZWQub2xkSW5saW5lVmFsdWUpO1xuICAgICAgdGhpcy5fdG91Y2hQcmV2ZW50ZWQgPSBbXTtcbiAgICB9XG5cbiAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuXG4gICAgLy8gU2VsZWN0IHRoZSBwYXJzZWQgaW5wdXQgb3IgZm9jdXNlZCBkYXRlXG4gICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSB0cnVlO1xuICAgIGlmICh0aGlzLmkxOG4ucGFyc2VEYXRlKSB7XG4gICAgICB2YXIgaW5wdXRWYWx1ZSA9IHRoaXMuX2lucHV0VmFsdWUgfHwgJyc7XG4gICAgICBjb25zdCBkYXRlT2JqZWN0ID0gdGhpcy5pMThuLnBhcnNlRGF0ZShpbnB1dFZhbHVlKTtcbiAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBkYXRlT2JqZWN0ICYmXG4gICAgICAgIHRoaXMuX3BhcnNlRGF0ZShgJHtkYXRlT2JqZWN0LnllYXJ9LSR7ZGF0ZU9iamVjdC5tb250aCArIDF9LSR7ZGF0ZU9iamVjdC5kYXl9YCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1ZhbGlkRGF0ZShwYXJzZWREYXRlKSkge1xuICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSBwYXJzZWREYXRlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gbnVsbDtcbiAgICAgICAgdGhpcy5faW5wdXRWYWx1ZSA9IGlucHV0VmFsdWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmICh0aGlzLl9mb2N1c2VkRGF0ZSkge1xuICAgICAgdGhpcy5fc2VsZWN0ZWREYXRlID0gdGhpcy5fZm9jdXNlZERhdGU7XG4gICAgfVxuICAgIHRoaXMuX2lnbm9yZUZvY3VzZWREYXRlQ2hhbmdlID0gZmFsc2U7XG5cbiAgICBpZiAodGhpcy5fbmF0aXZlSW5wdXQgJiYgdGhpcy5fbmF0aXZlSW5wdXQuc2VsZWN0aW9uU3RhcnQpIHtcbiAgICAgIHRoaXMuX25hdGl2ZUlucHV0LnNlbGVjdGlvblN0YXJ0ID0gdGhpcy5fbmF0aXZlSW5wdXQuc2VsZWN0aW9uRW5kO1xuICAgIH1cbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQsIGFuZCBzZXRzIHRoZSBgaW52YWxpZGAgZmxhZyBhcHByb3ByaWF0ZWx5LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdmFsdWUgVmFsdWUgdG8gdmFsaWRhdGUuIE9wdGlvbmFsLCBkZWZhdWx0cyB0byB1c2VyJ3MgaW5wdXQgdmFsdWUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHZhbGlkIGFuZCBzZXRzIHRoZSBgaW52YWxpZGAgZmxhZyBhcHByb3ByaWF0ZWx5XG4gICAqL1xuICB2YWxpZGF0ZSh2YWx1ZSkge1xuICAgIC8vIHJlc2V0IGludmFsaWQgc3RhdGUgb24gdGhlIHVuZGVybHlpbmcgdGV4dCBmaWVsZFxuICAgIHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuICAgIHZhbHVlID0gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDogdGhpcy5faW5wdXRWYWx1ZTtcbiAgICByZXR1cm4gISh0aGlzLmludmFsaWQgPSAhdGhpcy5jaGVja1ZhbGlkaXR5KHZhbHVlKSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBjdXJyZW50IGlucHV0IHZhbHVlIHNhdGlzZmllcyBhbGwgY29uc3RyYWludHMgKGlmIGFueSlcbiAgICpcbiAgICogT3ZlcnJpZGUgdGhlIGBjaGVja1ZhbGlkaXR5YCBtZXRob2QgZm9yIGN1c3RvbSB2YWxpZGF0aW9ucy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlIFZhbHVlIHRvIHZhbGlkYXRlLiBPcHRpb25hbCwgZGVmYXVsdHMgdG8gdGhlIHNlbGVjdGVkIGRhdGUuXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIHZhbHVlIGlzIHZhbGlkXG4gICAqL1xuICBjaGVja1ZhbGlkaXR5KHZhbHVlKSB7XG4gICAgdmFyIGlucHV0VmFsaWQgPSAhdmFsdWUgfHxcbiAgICAgICh0aGlzLl9zZWxlY3RlZERhdGUgJiYgdmFsdWUgPT09IHRoaXMuaTE4bi5mb3JtYXREYXRlKERhdGVQaWNrZXJIZWxwZXIuX2V4dHJhY3REYXRlUGFydHModGhpcy5fc2VsZWN0ZWREYXRlKSkpO1xuICAgIHZhciBtaW5NYXhWYWxpZCA9ICF0aGlzLl9zZWxlY3RlZERhdGUgfHxcbiAgICAgIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVBbGxvd2VkKHRoaXMuX3NlbGVjdGVkRGF0ZSwgdGhpcy5fbWluRGF0ZSwgdGhpcy5fbWF4RGF0ZSk7XG5cbiAgICB2YXIgaW5wdXRWYWxpZGl0eSA9IHRydWU7XG4gICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudCkge1xuICAgICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KSB7XG4gICAgICAgIC8vIHZhYWRpbiBuYXRpdmUgaW5wdXQgZWxlbWVudHMgaGF2ZSB0aGUgY2hlY2tWYWxpZGl0eSBtZXRob2RcbiAgICAgICAgaW5wdXRWYWxpZGl0eSA9IHRoaXMuX2lucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KHZhbHVlKTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5faW5wdXRFbGVtZW50LnZhbGlkYXRlKSB7XG4gICAgICAgIC8vIGlyb24tZm9ybS1lbGVtZW50cyBoYXZlIHRoZSB2YWxpZGF0ZSBBUElcbiAgICAgICAgaW5wdXRWYWxpZGl0eSA9IHRoaXMuX2lucHV0RWxlbWVudC52YWxpZGF0ZSh2YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGlucHV0VmFsaWQgJiYgbWluTWF4VmFsaWQgJiYgaW5wdXRWYWxpZGl0eTtcbiAgfVxuXG4gIF9vblNjcm9sbChlKSB7XG4gICAgaWYgKGUudGFyZ2V0ID09PSB3aW5kb3cgfHwgIXRoaXMuX292ZXJsYXlDb250ZW50LmNvbnRhaW5zKGUudGFyZ2V0KSkge1xuICAgICAgdGhpcy5fdXBkYXRlQWxpZ25tZW50QW5kUG9zaXRpb24oKTtcbiAgICB9XG4gIH1cblxuICBfZm9jdXMoKSB7XG4gICAgaWYgKHRoaXMuX25vSW5wdXQpIHtcbiAgICAgIHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCAmJiB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1cygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9pbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICB9XG4gIH1cblxuICBfZm9jdXNBbmRTZWxlY3QoKSB7XG4gICAgdGhpcy5fZm9jdXMoKTtcbiAgICB0aGlzLl9zZXRTZWxlY3Rpb25SYW5nZSgwLCB0aGlzLl9pbnB1dFZhbHVlLmxlbmd0aCk7XG4gIH1cblxuICBfc2V0U2VsZWN0aW9uUmFuZ2UoYSwgYikge1xuICAgIGlmICh0aGlzLl9uYXRpdmVJbnB1dCAmJiB0aGlzLl9uYXRpdmVJbnB1dC5zZXRTZWxlY3Rpb25SYW5nZSkge1xuICAgICAgdGhpcy5fbmF0aXZlSW5wdXQuc2V0U2VsZWN0aW9uUmFuZ2UoYSwgYik7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEtleWJvYXJkIE5hdmlnYXRpb25cbiAgICovXG4gIF9ldmVudEtleShlKSB7XG4gICAgdmFyIGtleXMgPSBbJ2Rvd24nLCAndXAnLCAnZW50ZXInLCAnZXNjJywgJ3RhYiddO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgayA9IGtleXNbaV07XG4gICAgICBpZiAoSXJvbkExMXlLZXlzQmVoYXZpb3Iua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGUsIGspKSB7XG4gICAgICAgIHJldHVybiBrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9pc1ZhbGlkRGF0ZShkKSB7XG4gICAgcmV0dXJuIGQgJiYgIWlzTmFOKGQuZ2V0VGltZSgpKTtcbiAgfVxuXG4gIF9vbktleWRvd24oZSkge1xuICAgIGlmICh0aGlzLl9ub0lucHV0KSB7XG4gICAgICAvLyBUaGUgaW5wdXQgZWxlbWVudCBjYW5ub3QgYmUgcmVhZG9ubHkgYXMgaXQgd291bGQgY29uZmxpY3Qgd2l0aFxuICAgICAgLy8gdGhlIHJlcXVpcmVkIGF0dHJpYnV0ZS4gQm90aCBhcmUgbm90IGFsbG93ZWQgb24gYW4gaW5wdXQgZWxlbWVudC5cbiAgICAgIC8vIFRoZXJlZm9yZSB3ZSBwcmV2ZW50IGRlZmF1bHQgb24gbW9zdCBrZXlkb3duIGV2ZW50cy5cbiAgICAgIHZhciBhbGxvd2VkS2V5cyA9IFtcbiAgICAgICAgOSAvLyB0YWJcbiAgICAgIF07XG4gICAgICBpZiAoYWxsb3dlZEtleXMuaW5kZXhPZihlLmtleUNvZGUpID09PSAtMSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgc3dpdGNoICh0aGlzLl9ldmVudEtleShlKSkge1xuICAgICAgY2FzZSAnZG93bic6XG4gICAgICBjYXNlICd1cCc6XG4gICAgICAgIC8vIHByZXZlbnQgc2Nyb2xsaW5nIHRoZSBwYWdlIHdpdGggYXJyb3dzXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1cygpO1xuICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50Ll9vbktleWRvd24oZSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgdGhpcy5fZm9jdXNPdmVybGF5T25PcGVuID0gdHJ1ZTtcbiAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW50ZXInOiB7XG4gICAgICAgIGNvbnN0IGRhdGVPYmplY3QgPSB0aGlzLmkxOG4ucGFyc2VEYXRlKHRoaXMuX2lucHV0VmFsdWUpO1xuICAgICAgICBjb25zdCBwYXJzZWREYXRlID0gZGF0ZU9iamVjdCAmJlxuICAgICAgICAgIHRoaXMuX3BhcnNlRGF0ZShkYXRlT2JqZWN0LnllYXIgKyAnLScgKyAoZGF0ZU9iamVjdC5tb250aCArIDEpICsgJy0nICsgZGF0ZU9iamVjdC5kYXkpO1xuXG4gICAgICAgIGlmICh0aGlzLl9vdmVybGF5SW5pdGlhbGl6ZWQgJiYgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXNlZERhdGUgJiYgdGhpcy5faXNWYWxpZERhdGUocGFyc2VkRGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLl9zZWxlY3RlZERhdGUgPSB0aGlzLl9vdmVybGF5Q29udGVudC5mb2N1c2VkRGF0ZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgICAgY2FzZSAnZXNjJzpcbiAgICAgICAgdGhpcy5fZm9jdXNlZERhdGUgPSB0aGlzLl9zZWxlY3RlZERhdGU7XG4gICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAndGFiJzpcbiAgICAgICAgaWYgKHRoaXMub3BlbmVkKSB7XG4gICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgIC8vIENsZWFyIHRoZSBzZWxlY3Rpb24gcmFuZ2UgKHJlbWFpbnMgdmlzaWJsZSBvbiBJRSlcbiAgICAgICAgICB0aGlzLl9zZXRTZWxlY3Rpb25SYW5nZSgwLCAwKTtcbiAgICAgICAgICBpZiAoZS5zaGlmdEtleSkge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXNDYW5jZWwoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5fb3ZlcmxheUNvbnRlbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIHRoaXMuX292ZXJsYXlDb250ZW50LnJldmVhbERhdGUodGhpcy5fZm9jdXNlZERhdGUpO1xuICAgICAgICAgIH1cblxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIF92YWxpZGF0ZUlucHV0KGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgaWYgKGRhdGUgJiYgKG1pbiB8fCBtYXgpKSB7XG4gICAgICB0aGlzLmludmFsaWQgPSAhRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpO1xuICAgIH1cbiAgfVxuXG4gIF9vblVzZXJJbnB1dChlKSB7XG4gICAgaWYgKCF0aGlzLm9wZW5lZCAmJiB0aGlzLl9pbnB1dEVsZW1lbnQudmFsdWUpIHtcbiAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICB0aGlzLl91c2VySW5wdXRWYWx1ZUNoYW5nZWQoKTtcbiAgfVxuXG4gIF91c2VySW5wdXRWYWx1ZUNoYW5nZWQodmFsdWUpIHtcbiAgICBpZiAodGhpcy5vcGVuZWQgJiYgdGhpcy5faW5wdXRWYWx1ZSkge1xuICAgICAgY29uc3QgZGF0ZU9iamVjdCA9IHRoaXMuaTE4bi5wYXJzZURhdGUgJiYgdGhpcy5pMThuLnBhcnNlRGF0ZSh0aGlzLl9pbnB1dFZhbHVlKTtcbiAgICAgIGNvbnN0IHBhcnNlZERhdGUgPSBkYXRlT2JqZWN0ICYmXG4gICAgICAgIHRoaXMuX3BhcnNlRGF0ZShgJHtkYXRlT2JqZWN0LnllYXJ9LSR7ZGF0ZU9iamVjdC5tb250aCArIDF9LSR7ZGF0ZU9iamVjdC5kYXl9YCk7XG5cbiAgICAgIGlmICh0aGlzLl9pc1ZhbGlkRGF0ZShwYXJzZWREYXRlKSkge1xuICAgICAgICB0aGlzLl9pZ25vcmVGb2N1c2VkRGF0ZUNoYW5nZSA9IHRydWU7XG4gICAgICAgIGlmICghRGF0ZVBpY2tlckhlbHBlci5fZGF0ZUVxdWFscyhwYXJzZWREYXRlLCB0aGlzLl9mb2N1c2VkRGF0ZSkpIHtcbiAgICAgICAgICB0aGlzLl9mb2N1c2VkRGF0ZSA9IHBhcnNlZERhdGU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5faWdub3JlRm9jdXNlZERhdGVDaGFuZ2UgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBfYW5ub3VuY2VGb2N1c2VkRGF0ZShfZm9jdXNlZERhdGUsIG9wZW5lZCwgX2lnbm9yZUFubm91bmNlKSB7XG4gICAgaWYgKG9wZW5lZCAmJiAhX2lnbm9yZUFubm91bmNlKSB7XG4gICAgICB0aGlzLl9vdmVybGF5Q29udGVudC5hbm5vdW5jZUZvY3VzZWREYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IF9vdmVybGF5Q29udGVudCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLm92ZXJsYXkuY29udGVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheS1jb250ZW50Jyk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgdXNlciBjb21taXRzIGEgdmFsdWUgY2hhbmdlLlxuICAgKlxuICAgKiBAZXZlbnQgY2hhbmdlXG4gICAqL1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNyBWYWFkaW4gTHRkLlxuVGhpcyBwcm9ncmFtIGlzIGF2YWlsYWJsZSB1bmRlciBBcGFjaGUgTGljZW5zZSBWZXJzaW9uIDIuMCwgYXZhaWxhYmxlIGF0IGh0dHBzOi8vdmFhZGluLmNvbS9saWNlbnNlL1xuKi9cbmltcG9ydCB7IFBvbHltZXJFbGVtZW50IH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWVsZW1lbnQuanMnO1xuXG5pbXBvcnQgeyBHZXN0dXJlRXZlbnRMaXN0ZW5lcnMgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9taXhpbnMvZ2VzdHVyZS1ldmVudC1saXN0ZW5lcnMuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLW1lZGlhLXF1ZXJ5L2lyb24tbWVkaWEtcXVlcnkuanMnO1xuaW1wb3J0IHsgSXJvbkExMXlLZXlzQmVoYXZpb3IgfSBmcm9tICdAcG9seW1lci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci9pcm9uLWExMXkta2V5cy1iZWhhdmlvci5qcyc7XG5pbXBvcnQgeyBJcm9uQTExeUFubm91bmNlciB9IGZyb20gJ0Bwb2x5bWVyL2lyb24tYTExeS1hbm5vdW5jZXIvaXJvbi1hMTF5LWFubm91bmNlci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLWJ1dHRvbi9zcmMvdmFhZGluLWJ1dHRvbi5qcyc7XG5pbXBvcnQgeyBUaGVtYWJsZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzJztcbmltcG9ydCB7IFRoZW1lUHJvcGVydHlNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtZS1wcm9wZXJ0eS1taXhpbi5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLW1vbnRoLWNhbGVuZGFyLmpzJztcbmltcG9ydCAnLi92YWFkaW4taW5maW5pdGUtc2Nyb2xsZXIuanMnO1xuaW1wb3J0IHsgRGF0ZVBpY2tlckhlbHBlciB9IGZyb20gJy4vdmFhZGluLWRhdGUtcGlja2VyLWhlbHBlci5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLXN0eWxlcy5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgYWRkTGlzdGVuZXIsIHNldFRvdWNoQWN0aW9uIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZ2VzdHVyZXMuanMnO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcbi8qKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGF0ZVBpY2tlck92ZXJsYXlDb250ZW50RWxlbWVudCBleHRlbmRzXG4gIFRoZW1hYmxlTWl4aW4oXG4gICAgVGhlbWVQcm9wZXJ0eU1peGluKFxuICAgICAgR2VzdHVyZUV2ZW50TGlzdGVuZXJzKFBvbHltZXJFbGVtZW50KSkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwib3ZlcmxheS1oZWFkZXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2Z1bGxzY3JlZW5dKSkgW3BhcnQ9XCJvdmVybGF5LWhlYWRlclwiXSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdOm5vdChbc2hvd2NsZWFyXSkge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl1bZGVza3RvcF0ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFt5ZWFycy12aXNpYmxlXSkpIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcbiAgICAgIH1cblxuICAgICAgI3Njcm9sbGVycyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJtb250aHNcIl0sXG4gICAgICBbcGFydD1cInllYXJzXCJdIHtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm1vbnRoc1wiXSB7XG4gICAgICAgIC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0OiAyNzBweDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlcnNbZGVza3RvcF0gW3BhcnQ9XCJtb250aHNcIl0ge1xuICAgICAgICByaWdodDogNTBweDtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICAtLXZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1pdGVtLWhlaWdodDogODBweDtcbiAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxMDAlKTtcbiAgICAgICAgLXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgICAgLyogQ2VudGVyIHRoZSB5ZWFyIHNjcm9sbGVyIHBvc2l0aW9uLiAqL1xuICAgICAgICAtLXZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1idWZmZXItb2Zmc2V0OiA1MCU7XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlcnNbZGVza3RvcF0gW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBoZWlnaHQ6IDA7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgbGVmdDogMDtcbiAgICAgICAgdG9wOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiA2cHg7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMDAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguYW5pbWF0ZSkgW3BhcnQ9XCJtb250aHNcIl0sXG4gICAgICA6aG9zdCguYW5pbWF0ZSkgW3BhcnQ9XCJ5ZWFyc1wiXSB7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAyMDBtcztcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0b29sYmFyXCJdIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwib3ZlcmxheS1oZWFkZXJcIl06bm90KFtkZXNrdG9wXSkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICAgIH1cblxuICAgICAgW3BhcnR+PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiBhdXRvO1xuICAgICAgICByaWdodDogOHB4O1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgIH1cblxuICAgICAgI2Fubm91bmNlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBjbGlwOiByZWN0KDAsIDAsIDAsIDApO1xuICAgICAgICBjbGlwLXBhdGg6IGluc2V0KDEwMCUpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwiYW5ub3VuY2VyXCIgcm9sZT1cImFsZXJ0XCIgYXJpYS1saXZlPVwicG9saXRlXCI+XG4gICAgICBbW2kxOG4uY2FsZW5kYXJdXVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBwYXJ0PVwib3ZlcmxheS1oZWFkZXJcIiBvbi10b3VjaGVuZD1cIl9wcmV2ZW50RGVmYXVsdFwiIGRlc2t0b3BcXCQ9XCJbW19kZXNrdG9wTW9kZV1dXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+XG4gICAgICA8ZGl2IHBhcnQ9XCJsYWJlbFwiPltbX2Zvcm1hdERpc3BsYXllZChzZWxlY3RlZERhdGUsIGkxOG4uZm9ybWF0RGF0ZSwgbGFiZWwpXV08L2Rpdj5cbiAgICAgIDxkaXYgcGFydD1cImNsZWFyLWJ1dHRvblwiIG9uLXRhcD1cIl9jbGVhclwiIHNob3djbGVhclxcJD1cIltbX3Nob3dDbGVhcihzZWxlY3RlZERhdGUpXV1cIj48L2Rpdj5cbiAgICAgIDxkaXYgcGFydD1cInRvZ2dsZS1idXR0b25cIiBvbi10YXA9XCJfY2FuY2VsXCI+PC9kaXY+XG5cbiAgICAgIDxkaXYgcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIiBkZXNrdG9wXFwkPVwiW1tfZGVza3RvcE1vZGVdXVwiIG9uLXRhcD1cIl90b2dnbGVZZWFyU2Nyb2xsZXJcIiBhcmlhLWhpZGRlbj1cInRydWVcIj5cbiAgICAgICAgW1tfeWVhckFmdGVyWE1vbnRocyhfdmlzaWJsZU1vbnRoSW5kZXgpXV1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBpZD1cInNjcm9sbGVyc1wiIGRlc2t0b3BcXCQ9XCJbW19kZXNrdG9wTW9kZV1dXCIgb24tdHJhY2s9XCJfdHJhY2tcIj5cbiAgICAgIDx2YWFkaW4taW5maW5pdGUtc2Nyb2xsZXIgaWQ9XCJtb250aFNjcm9sbGVyXCIgb24tY3VzdG9tLXNjcm9sbD1cIl9vbk1vbnRoU2Nyb2xsXCIgb24tdG91Y2hzdGFydD1cIl9vbk1vbnRoU2Nyb2xsVG91Y2hTdGFydFwiIGJ1ZmZlci1zaXplPVwiM1wiIGFjdGl2ZT1cIltbaW5pdGlhbFBvc2l0aW9uXV1cIiBwYXJ0PVwibW9udGhzXCI+XG4gICAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgICA8dmFhZGluLW1vbnRoLWNhbGVuZGFyIGkxOG49XCJbW2kxOG5dXVwiIG1vbnRoPVwiW1tfZGF0ZUFmdGVyWE1vbnRocyhpbmRleCldXVwiIHNlbGVjdGVkLWRhdGU9XCJ7e3NlbGVjdGVkRGF0ZX19XCIgZm9jdXNlZC1kYXRlPVwiW1tmb2N1c2VkRGF0ZV1dXCIgaWdub3JlLXRhcHM9XCJbW19pZ25vcmVUYXBzXV1cIiBzaG93LXdlZWstbnVtYmVycz1cIltbc2hvd1dlZWtOdW1iZXJzXV1cIiBtaW4tZGF0ZT1cIltbbWluRGF0ZV1dXCIgbWF4LWRhdGU9XCJbW21heERhdGVdXVwiIGZvY3VzZWRcXCQ9XCJbW19mb2N1c2VkXV1cIiBwYXJ0PVwibW9udGhcIiB0aGVtZVxcJD1cIltbdGhlbWVdXVwiPlxuICAgICAgICAgIDwvdmFhZGluLW1vbnRoLWNhbGVuZGFyPlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC92YWFkaW4taW5maW5pdGUtc2Nyb2xsZXI+XG4gICAgICA8dmFhZGluLWluZmluaXRlLXNjcm9sbGVyIGlkPVwieWVhclNjcm9sbGVyXCIgb24tdGFwPVwiX29uWWVhclRhcFwiIG9uLWN1c3RvbS1zY3JvbGw9XCJfb25ZZWFyU2Nyb2xsXCIgb24tdG91Y2hzdGFydD1cIl9vblllYXJTY3JvbGxUb3VjaFN0YXJ0XCIgYnVmZmVyLXNpemU9XCIxMlwiIGFjdGl2ZT1cIltbaW5pdGlhbFBvc2l0aW9uXV1cIiBwYXJ0PVwieWVhcnNcIj5cbiAgICAgICAgPHRlbXBsYXRlPlxuICAgICAgICAgIDxkaXYgcGFydD1cInllYXItbnVtYmVyXCIgcm9sZT1cImJ1dHRvblwiIGN1cnJlbnRcXCQ9XCJbW19pc0N1cnJlbnRZZWFyKGluZGV4KV1dXCIgc2VsZWN0ZWRcXCQ9XCJbW19pc1NlbGVjdGVkWWVhcihpbmRleCwgc2VsZWN0ZWREYXRlKV1dXCI+XG4gICAgICAgICAgICBbW195ZWFyQWZ0ZXJYWWVhcnMoaW5kZXgpXV1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IHBhcnQ9XCJ5ZWFyLXNlcGFyYXRvclwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvZGl2PlxuICAgICAgICA8L3RlbXBsYXRlPlxuICAgICAgPC92YWFkaW4taW5maW5pdGUtc2Nyb2xsZXI+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IG9uLXRvdWNoZW5kPVwiX3ByZXZlbnREZWZhdWx0XCIgcm9sZT1cInRvb2xiYXJcIiBwYXJ0PVwidG9vbGJhclwiPlxuICAgICAgPHZhYWRpbi1idXR0b24gaWQ9XCJ0b2RheUJ1dHRvblwiIHBhcnQ9XCJ0b2RheS1idXR0b25cIiBkaXNhYmxlZD1cIltbIV9pc1RvZGF5QWxsb3dlZChtaW5EYXRlLCBtYXhEYXRlKV1dXCIgb24tdGFwPVwiX29uVG9kYXlUYXBcIj5cbiAgICAgICAgW1tpMThuLnRvZGF5XV1cbiAgICAgIDwvdmFhZGluLWJ1dHRvbj5cbiAgICAgIDx2YWFkaW4tYnV0dG9uIGlkPVwiY2FuY2VsQnV0dG9uXCIgcGFydD1cImNhbmNlbC1idXR0b25cIiBvbi10YXA9XCJfY2FuY2VsXCI+XG4gICAgICAgIFtbaTE4bi5jYW5jZWxdXVxuICAgICAgPC92YWFkaW4tYnV0dG9uPlxuICAgIDwvZGl2PlxuXG4gICAgPGlyb24tbWVkaWEtcXVlcnkgcXVlcnk9XCIobWluLXdpZHRoOiAzNzVweClcIiBxdWVyeS1tYXRjaGVzPVwie3tfZGVza3RvcE1vZGV9fVwiPjwvaXJvbi1tZWRpYS1xdWVyeT5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudCc7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogVGhlIHZhbHVlIGZvciB0aGlzIGVsZW1lbnQuXG4gICAgICAgKi9cbiAgICAgIHNlbGVjdGVkRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBub3RpZnk6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogRGF0ZSB2YWx1ZSB3aGljaCBpcyBmb2N1c2VkIHVzaW5nIGtleWJvYXJkLlxuICAgICAgICovXG4gICAgICBmb2N1c2VkRGF0ZToge1xuICAgICAgICB0eXBlOiBEYXRlLFxuICAgICAgICBub3RpZnk6IHRydWUsXG4gICAgICAgIG9ic2VydmVyOiAnX2ZvY3VzZWREYXRlQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF9mb2N1c2VkTW9udGhEYXRlOiBOdW1iZXIsXG5cbiAgICAgIC8qKlxuICAgICAgICogRGF0ZSB3aGljaCBzaG91bGQgYmUgdmlzaWJsZSB3aGVuIHRoZXJlIGlzIG5vIHZhbHVlIHNlbGVjdGVkLlxuICAgICAgICovXG4gICAgICBpbml0aWFsUG9zaXRpb246IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfaW5pdGlhbFBvc2l0aW9uQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF9vcmlnaW5EYXRlOiB7XG4gICAgICAgIHZhbHVlOiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuXG4gICAgICBfdmlzaWJsZU1vbnRoSW5kZXg6IE51bWJlcixcblxuICAgICAgX2Rlc2t0b3BNb2RlOiBCb29sZWFuLFxuXG4gICAgICBfdHJhbnNsYXRlWDoge1xuICAgICAgICBvYnNlcnZlcjogJ190cmFuc2xhdGVYQ2hhbmdlZCdcbiAgICAgIH0sXG5cbiAgICAgIF95ZWFyU2Nyb2xsZXJXaWR0aDoge1xuICAgICAgICB2YWx1ZTogNTBcbiAgICAgIH0sXG5cbiAgICAgIGkxOG46IHtcbiAgICAgICAgdHlwZTogT2JqZWN0XG4gICAgICB9LFxuXG4gICAgICBzaG93V2Vla051bWJlcnM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhblxuICAgICAgfSxcblxuICAgICAgX2lnbm9yZVRhcHM6IEJvb2xlYW4sXG5cbiAgICAgIF9ub3RUYXBwaW5nOiBCb29sZWFuLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgZWFybGllciBkYXRlcyB3aWxsIGJlIGRpc2FibGVkLlxuICAgICAgICovXG4gICAgICBtaW5EYXRlOiBEYXRlLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGxhdGVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIG1heERhdGU6IERhdGUsXG5cbiAgICAgIF9mb2N1c2VkOiBCb29sZWFuLFxuXG4gICAgICAvKipcbiAgICAgICAqIElucHV0IGxhYmVsXG4gICAgICAgKi9cbiAgICAgIGxhYmVsOiBTdHJpbmdcbiAgICB9O1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcbiAgICB0aGlzLnNldEF0dHJpYnV0ZSgndGFiaW5kZXgnLCAwKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9vbktleWRvd24uYmluZCh0aGlzKSk7XG4gICAgYWRkTGlzdGVuZXIodGhpcywgJ3RhcCcsIHRoaXMuX3N0b3BQcm9wYWdhdGlvbik7XG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX29uT3ZlcmxheUZvY3VzLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIHRoaXMuX29uT3ZlcmxheUJsdXIuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgc2Nyb2xsZXIgcmVhY2hlcyB0aGUgdGFyZ2V0IHNjcm9sbGluZyBwb3NpdGlvbi5cbiAgICogQGV2ZW50IHNjcm9sbC1hbmltYXRpb24tZmluaXNoZWRcbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRldGFpbC5wb3NpdGlvbiBuZXcgcG9zaXRpb25cbiAgICogQHBhcmFtIHtOdW1iZXJ9IGRldGFpbC5vbGRQb3NpdGlvbiBvbGQgcG9zaXRpb25cbiAgICovXG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICB0aGlzLl9jbG9zZVllYXJTY3JvbGxlcigpO1xuICAgIHRoaXMuX3RvZ2dsZUFuaW1hdGVDbGFzcyh0cnVlKTtcbiAgICBzZXRUb3VjaEFjdGlvbih0aGlzLiQuc2Nyb2xsZXJzLCAncGFuLXknKTtcbiAgICBJcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gIH1cblxuICBhbm5vdW5jZUZvY3VzZWREYXRlKCkge1xuICAgIHZhciBmb2N1c2VkRGF0ZSA9IHRoaXMuX2N1cnJlbnRseUZvY3VzZWREYXRlKCk7XG4gICAgdmFyIGFubm91bmNlID0gW107XG4gICAgaWYgKERhdGVQaWNrZXJIZWxwZXIuX2RhdGVFcXVhbHMoZm9jdXNlZERhdGUsIG5ldyBEYXRlKCkpKSB7XG4gICAgICBhbm5vdW5jZS5wdXNoKHRoaXMuaTE4bi50b2RheSk7XG4gICAgfVxuICAgIGFubm91bmNlID0gYW5ub3VuY2UuY29uY2F0KFtcbiAgICAgIHRoaXMuaTE4bi53ZWVrZGF5c1tmb2N1c2VkRGF0ZS5nZXREYXkoKV0sXG4gICAgICBmb2N1c2VkRGF0ZS5nZXREYXRlKCksXG4gICAgICB0aGlzLmkxOG4ubW9udGhOYW1lc1tmb2N1c2VkRGF0ZS5nZXRNb250aCgpXSxcbiAgICAgIGZvY3VzZWREYXRlLmdldEZ1bGxZZWFyKClcbiAgICBdKTtcbiAgICBpZiAodGhpcy5zaG93V2Vla051bWJlcnMgJiYgdGhpcy5pMThuLmZpcnN0RGF5T2ZXZWVrID09PSAxKSB7XG4gICAgICBhbm5vdW5jZS5wdXNoKHRoaXMuaTE4bi53ZWVrKTtcbiAgICAgIGFubm91bmNlLnB1c2goRGF0ZVBpY2tlckhlbHBlci5fZ2V0SVNPV2Vla051bWJlcihmb2N1c2VkRGF0ZSkpO1xuICAgIH1cbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdpcm9uLWFubm91bmNlJywge1xuICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHRleHQ6IGFubm91bmNlLmpvaW4oJyAnKVxuICAgICAgfVxuICAgIH0pKTtcbiAgICByZXR1cm47XG4gIH1cblxuICAvKipcbiAgICogRm9jdXNlcyB0aGUgY2FuY2VsIGJ1dHRvblxuICAgKi9cbiAgZm9jdXNDYW5jZWwoKSB7XG4gICAgdGhpcy4kLmNhbmNlbEJ1dHRvbi5mb2N1cygpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNjcm9sbHMgdGhlIGxpc3QgdG8gdGhlIGdpdmVuIERhdGUuXG4gICAqL1xuICBzY3JvbGxUb0RhdGUoZGF0ZSwgYW5pbWF0ZSkge1xuICAgIHRoaXMuX3Njcm9sbFRvUG9zaXRpb24odGhpcy5fZGlmZmVyZW5jZUluTW9udGhzKGRhdGUsIHRoaXMuX29yaWdpbkRhdGUpLCBhbmltYXRlKTtcbiAgfVxuXG4gIF9mb2N1c2VkRGF0ZUNoYW5nZWQoZm9jdXNlZERhdGUpIHtcbiAgICB0aGlzLnJldmVhbERhdGUoZm9jdXNlZERhdGUpO1xuICB9XG5cbiAgX2lzQ3VycmVudFllYXIoeWVhcnNGcm9tTm93KSB7XG4gICAgcmV0dXJuIHllYXJzRnJvbU5vdyA9PT0gMDtcbiAgfVxuXG4gIF9pc1NlbGVjdGVkWWVhcih5ZWFyc0Zyb21Ob3csIHNlbGVjdGVkRGF0ZSkge1xuICAgIGlmIChzZWxlY3RlZERhdGUpIHtcbiAgICAgIHJldHVybiBzZWxlY3RlZERhdGUuZ2V0RnVsbFllYXIoKSA9PT0gdGhpcy5fb3JpZ2luRGF0ZS5nZXRGdWxsWWVhcigpICsgeWVhcnNGcm9tTm93O1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTY3JvbGxzIHRoZSBtb250aCBhbmQgeWVhciBzY3JvbGxlcnMgZW5vdWdoIHRvIHJldmVhbCB0aGUgZ2l2ZW4gZGF0ZS5cbiAgICovXG4gIHJldmVhbERhdGUoZGF0ZSkge1xuICAgIGlmIChkYXRlKSB7XG4gICAgICB2YXIgZGlmZiA9IHRoaXMuX2RpZmZlcmVuY2VJbk1vbnRocyhkYXRlLCB0aGlzLl9vcmlnaW5EYXRlKTtcbiAgICAgIHZhciBzY3JvbGxlZEFib3ZlVmlld3BvcnQgPSB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiA+IGRpZmY7XG5cbiAgICAgIHZhciB2aXNpYmxlSXRlbXMgPSB0aGlzLiQubW9udGhTY3JvbGxlci5jbGllbnRIZWlnaHQgLyB0aGlzLiQubW9udGhTY3JvbGxlci5pdGVtSGVpZ2h0O1xuICAgICAgdmFyIHNjcm9sbGVkQmVsb3dWaWV3cG9ydCA9IHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uICsgdmlzaWJsZUl0ZW1zIC0gMSA8IGRpZmY7XG5cbiAgICAgIGlmIChzY3JvbGxlZEFib3ZlVmlld3BvcnQpIHtcbiAgICAgICAgdGhpcy5fc2Nyb2xsVG9Qb3NpdGlvbihkaWZmLCB0cnVlKTtcbiAgICAgIH0gZWxzZSBpZiAoc2Nyb2xsZWRCZWxvd1ZpZXdwb3J0KSB7XG4gICAgICAgIHRoaXMuX3Njcm9sbFRvUG9zaXRpb24oZGlmZiAtIHZpc2libGVJdGVtcyArIDEsIHRydWUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbk92ZXJsYXlGb2N1cygpIHtcbiAgICB0aGlzLl9mb2N1c2VkID0gdHJ1ZTtcbiAgfVxuXG4gIF9vbk92ZXJsYXlCbHVyKCkge1xuICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgfVxuXG4gIF9pbml0aWFsUG9zaXRpb25DaGFuZ2VkKGluaXRpYWxQb3NpdGlvbikge1xuICAgIHRoaXMuc2Nyb2xsVG9EYXRlKGluaXRpYWxQb3NpdGlvbik7XG4gIH1cblxuICBfcmVwb3NpdGlvblllYXJTY3JvbGxlcigpIHtcbiAgICB0aGlzLl92aXNpYmxlTW9udGhJbmRleCA9IE1hdGguZmxvb3IodGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24pO1xuICAgIHRoaXMuJC55ZWFyU2Nyb2xsZXIucG9zaXRpb24gPSAodGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gKyB0aGlzLl9vcmlnaW5EYXRlLmdldE1vbnRoKCkpIC8gMTI7XG4gIH1cblxuICBfcmVwb3NpdGlvbk1vbnRoU2Nyb2xsZXIoKSB7XG4gICAgdGhpcy4kLm1vbnRoU2Nyb2xsZXIucG9zaXRpb24gPSB0aGlzLiQueWVhclNjcm9sbGVyLnBvc2l0aW9uICogMTIgLSB0aGlzLl9vcmlnaW5EYXRlLmdldE1vbnRoKCk7XG4gICAgdGhpcy5fdmlzaWJsZU1vbnRoSW5kZXggPSBNYXRoLmZsb29yKHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uKTtcbiAgfVxuXG4gIF9vbk1vbnRoU2Nyb2xsKCkge1xuICAgIHRoaXMuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIoKTtcbiAgICB0aGlzLl9kb0lnbm9yZVRhcHMoKTtcbiAgfVxuXG4gIF9vblllYXJTY3JvbGwoKSB7XG4gICAgdGhpcy5fcmVwb3NpdGlvbk1vbnRoU2Nyb2xsZXIoKTtcbiAgICB0aGlzLl9kb0lnbm9yZVRhcHMoKTtcbiAgfVxuXG4gIF9vblllYXJTY3JvbGxUb3VjaFN0YXJ0KCkge1xuICAgIHRoaXMuX25vdFRhcHBpbmcgPSBmYWxzZTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuX25vdFRhcHBpbmcgPSB0cnVlLCAzMDApO1xuXG4gICAgdGhpcy5fcmVwb3NpdGlvbk1vbnRoU2Nyb2xsZXIoKTtcbiAgfVxuXG4gIF9vbk1vbnRoU2Nyb2xsVG91Y2hTdGFydCgpIHtcbiAgICB0aGlzLl9yZXBvc2l0aW9uWWVhclNjcm9sbGVyKCk7XG4gIH1cblxuICBfZG9JZ25vcmVUYXBzKCkge1xuICAgIHRoaXMuX2lnbm9yZVRhcHMgPSB0cnVlO1xuICAgIHRoaXMuX2RlYm91bmNlciA9IERlYm91bmNlci5kZWJvdW5jZSh0aGlzLl9kZWJvdW5jZXIsXG4gICAgICB0aW1lT3V0LmFmdGVyKDMwMCksICgpID0+IHRoaXMuX2lnbm9yZVRhcHMgPSBmYWxzZSk7XG4gIH1cblxuICBfZm9ybWF0RGlzcGxheWVkKGRhdGUsIGZvcm1hdERhdGUsIGxhYmVsKSB7XG4gICAgaWYgKGRhdGUpIHtcbiAgICAgIHJldHVybiBmb3JtYXREYXRlKERhdGVQaWNrZXJIZWxwZXIuX2V4dHJhY3REYXRlUGFydHMoZGF0ZSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbGFiZWw7XG4gICAgfVxuICB9XG5cbiAgX29uVG9kYXlUYXAoKSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcblxuICAgIGlmIChNYXRoLmFicyh0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiAtIHRoaXMuX2RpZmZlcmVuY2VJbk1vbnRocyh0b2RheSwgdGhpcy5fb3JpZ2luRGF0ZSkpIDwgMC4wMDEpIHtcbiAgICAgIC8vIFNlbGVjdCB0b2RheSBvbmx5IGlmIHRoZSBtb250aCBzY3JvbGxlciBpcyBwb3NpdGlvbmVkIGFwcHJveGltYXRlbHlcbiAgICAgIC8vIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIGN1cnJlbnQgbW9udGhcbiAgICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gdG9kYXk7XG4gICAgICB0aGlzLl9jbG9zZSgpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9zY3JvbGxUb0N1cnJlbnRNb250aCgpO1xuICAgIH1cbiAgfVxuXG4gIF9zY3JvbGxUb0N1cnJlbnRNb250aCgpIHtcbiAgICBpZiAodGhpcy5mb2N1c2VkRGF0ZSkge1xuICAgICAgdGhpcy5mb2N1c2VkRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgfVxuXG4gICAgdGhpcy5zY3JvbGxUb0RhdGUobmV3IERhdGUoKSwgdHJ1ZSk7XG4gIH1cblxuICBfc2hvd0NsZWFyKHNlbGVjdGVkRGF0ZSkge1xuICAgIHJldHVybiAhIXNlbGVjdGVkRGF0ZTtcbiAgfVxuXG4gIF9vblllYXJUYXAoZSkge1xuICAgIGlmICghdGhpcy5faWdub3JlVGFwcyAmJiAhdGhpcy5fbm90VGFwcGluZykge1xuICAgICAgdmFyIHNjcm9sbERlbHRhID0gZS5kZXRhaWwueSAtICh0aGlzLiQueWVhclNjcm9sbGVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCArIHRoaXMuJC55ZWFyU2Nyb2xsZXIuY2xpZW50SGVpZ2h0IC8gMik7XG4gICAgICB2YXIgeWVhckRlbHRhID0gc2Nyb2xsRGVsdGEgLyB0aGlzLiQueWVhclNjcm9sbGVyLml0ZW1IZWlnaHQ7XG4gICAgICB0aGlzLl9zY3JvbGxUb1Bvc2l0aW9uKHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uICsgeWVhckRlbHRhICogMTIsIHRydWUpO1xuICAgIH1cbiAgfVxuXG4gIF9zY3JvbGxUb1Bvc2l0aW9uKHRhcmdldFBvc2l0aW9uLCBhbmltYXRlKSB7XG4gICAgaWYgKHRoaXMuX3RhcmdldFBvc2l0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuX3RhcmdldFBvc2l0aW9uID0gdGFyZ2V0UG9zaXRpb247XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFhbmltYXRlKSB7XG4gICAgICB0aGlzLiQubW9udGhTY3JvbGxlci5wb3NpdGlvbiA9IHRhcmdldFBvc2l0aW9uO1xuICAgICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24gPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9yZXBvc2l0aW9uWWVhclNjcm9sbGVyKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5fdGFyZ2V0UG9zaXRpb24gPSB0YXJnZXRQb3NpdGlvbjtcblxuICAgIC8vIGh0dHA6Ly9naXptYS5jb20vZWFzaW5nL1xuICAgIHZhciBlYXNpbmdGdW5jdGlvbiA9ICh0LCBiLCBjLCBkKSA9PiB7XG4gICAgICB0IC89IGQgLyAyO1xuICAgICAgaWYgKHQgPCAxKSB7XG4gICAgICAgIHJldHVybiBjIC8gMiAqIHQgKiB0ICsgYjtcbiAgICAgIH1cbiAgICAgIHQtLTtcbiAgICAgIHJldHVybiAtYyAvIDIgKiAodCAqICh0IC0gMikgLSAxKSArIGI7XG4gICAgfTtcblxuICAgIHZhciBkdXJhdGlvbiA9IGFuaW1hdGUgPyAzMDAgOiAwO1xuICAgIHZhciBzdGFydCA9IDA7XG4gICAgdmFyIGluaXRpYWxQb3NpdGlvbiA9IHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uO1xuXG4gICAgdmFyIHNtb290aFNjcm9sbCA9IHRpbWVzdGFtcCA9PiB7XG4gICAgICBzdGFydCA9IHN0YXJ0IHx8IHRpbWVzdGFtcDtcbiAgICAgIHZhciBjdXJyZW50VGltZSA9IHRpbWVzdGFtcCAtIHN0YXJ0O1xuXG4gICAgICBpZiAoY3VycmVudFRpbWUgPCBkdXJhdGlvbikge1xuICAgICAgICB2YXIgY3VycmVudFBvcyA9IGVhc2luZ0Z1bmN0aW9uKGN1cnJlbnRUaW1lLCBpbml0aWFsUG9zaXRpb24sIHRoaXMuX3RhcmdldFBvc2l0aW9uIC0gaW5pdGlhbFBvc2l0aW9uLCBkdXJhdGlvbik7XG4gICAgICAgIHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uID0gY3VycmVudFBvcztcbiAgICAgICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGhTY3JvbGwpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnc2Nyb2xsLWFuaW1hdGlvbi1maW5pc2hlZCcsIHtcbiAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIGNvbXBvc2VkOiB0cnVlLFxuICAgICAgICAgIGRldGFpbDoge1xuICAgICAgICAgICAgcG9zaXRpb246IHRoaXMuX3RhcmdldFBvc2l0aW9uLFxuICAgICAgICAgICAgb2xkUG9zaXRpb246IGluaXRpYWxQb3NpdGlvblxuICAgICAgICAgIH1cbiAgICAgICAgfSkpO1xuXG4gICAgICAgIHRoaXMuJC5tb250aFNjcm9sbGVyLnBvc2l0aW9uID0gdGhpcy5fdGFyZ2V0UG9zaXRpb247XG4gICAgICAgIHRoaXMuX3RhcmdldFBvc2l0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBzZXRUaW1lb3V0KHRoaXMuX3JlcG9zaXRpb25ZZWFyU2Nyb2xsZXIuYmluZCh0aGlzKSwgMSk7XG4gICAgfTtcblxuICAgIC8vIFN0YXJ0IHRoZSBhbmltYXRpb24uXG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShzbW9vdGhTY3JvbGwpO1xuICB9XG5cbiAgX2xpbWl0KHZhbHVlLCByYW5nZSkge1xuICAgIHJldHVybiBNYXRoLm1pbihyYW5nZS5tYXgsIE1hdGgubWF4KHJhbmdlLm1pbiwgdmFsdWUpKTtcbiAgfVxuXG4gIF9oYW5kbGVUcmFjayhlKSB7XG4gICAgLy8gQ2hlY2sgaWYgaG9yaXpvbnRhbCBtb3ZlbWVudCB0aHJlc2hvbGQgKGR4KSBub3QgZXhjZWVkZWQgb3JcbiAgICAvLyBzY3JvbGxpbmcgZmFzdCB2ZXJ0aWNhbGx5IChkZHkpLlxuICAgIGlmIChNYXRoLmFicyhlLmRldGFpbC5keCkgPCAxMCB8fCBNYXRoLmFicyhlLmRldGFpbC5kZHkpID4gMTApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBJZiB3ZSdyZSBmbGluZ2luZyBxdWlja2x5IC0+IHN0YXJ0IGFuaW1hdGluZyBhbHJlYWR5LlxuICAgIGlmIChNYXRoLmFicyhlLmRldGFpbC5kZHgpID4gdGhpcy5feWVhclNjcm9sbGVyV2lkdGggLyAzKSB7XG4gICAgICB0aGlzLl90b2dnbGVBbmltYXRlQ2xhc3ModHJ1ZSk7XG4gICAgfVxuXG4gICAgdmFyIG5ld1RyYW5zbGF0ZVggPSB0aGlzLl90cmFuc2xhdGVYICsgZS5kZXRhaWwuZGR4O1xuICAgIHRoaXMuX3RyYW5zbGF0ZVggPSB0aGlzLl9saW1pdChuZXdUcmFuc2xhdGVYLCB7XG4gICAgICBtaW46IDAsXG4gICAgICBtYXg6IHRoaXMuX3llYXJTY3JvbGxlcldpZHRoXG4gICAgfSk7XG4gIH1cblxuICBfdHJhY2soZSkge1xuICAgIGlmICh0aGlzLl9kZXNrdG9wTW9kZSkge1xuICAgICAgLy8gTm8gbmVlZCB0byB0cmFjayBmb3Igc3dpcGUgZ2VzdHVyZXMgb24gZGVza3RvcC5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzd2l0Y2ggKGUuZGV0YWlsLnN0YXRlKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHRoaXMuX3RvZ2dsZUFuaW1hdGVDbGFzcyhmYWxzZSk7XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlICd0cmFjayc6XG4gICAgICAgIHRoaXMuX2hhbmRsZVRyYWNrKGUpO1xuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgdGhpcy5fdG9nZ2xlQW5pbWF0ZUNsYXNzKHRydWUpO1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNsYXRlWCA+PSB0aGlzLl95ZWFyU2Nyb2xsZXJXaWR0aCAvIDIpIHtcbiAgICAgICAgICB0aGlzLl9jbG9zZVllYXJTY3JvbGxlcigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuX29wZW5ZZWFyU2Nyb2xsZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlQW5pbWF0ZUNsYXNzKGVuYWJsZSkge1xuICAgIGlmIChlbmFibGUpIHtcbiAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYW5pbWF0ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FuaW1hdGUnKTtcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlWWVhclNjcm9sbGVyKCkge1xuICAgIHRoaXMuX2lzWWVhclNjcm9sbGVyVmlzaWJsZSgpID8gdGhpcy5fY2xvc2VZZWFyU2Nyb2xsZXIoKSA6IHRoaXMuX29wZW5ZZWFyU2Nyb2xsZXIoKTtcbiAgfVxuXG4gIF9vcGVuWWVhclNjcm9sbGVyKCkge1xuICAgIHRoaXMuX3RyYW5zbGF0ZVggPSAwO1xuICAgIHRoaXMuc2V0QXR0cmlidXRlKCd5ZWFycy12aXNpYmxlJywgJycpO1xuICB9XG5cbiAgX2Nsb3NlWWVhclNjcm9sbGVyKCkge1xuICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd5ZWFycy12aXNpYmxlJyk7XG4gICAgdGhpcy5fdHJhbnNsYXRlWCA9IHRoaXMuX3llYXJTY3JvbGxlcldpZHRoO1xuICB9XG5cbiAgX2lzWWVhclNjcm9sbGVyVmlzaWJsZSgpIHtcbiAgICByZXR1cm4gdGhpcy5fdHJhbnNsYXRlWCA8IHRoaXMuX3llYXJTY3JvbGxlcldpZHRoIC8gMjtcbiAgfVxuXG4gIF90cmFuc2xhdGVYQ2hhbmdlZCh4KSB7XG4gICAgaWYgKCF0aGlzLl9kZXNrdG9wTW9kZSkge1xuICAgICAgdGhpcy4kLm1vbnRoU2Nyb2xsZXIuc3R5bGUudHJhbnNmb3JtID0gJ3RyYW5zbGF0ZVgoJyArICh4IC0gdGhpcy5feWVhclNjcm9sbGVyV2lkdGgpICsgJ3B4KSc7XG4gICAgICB0aGlzLiQueWVhclNjcm9sbGVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGVYKCcgKyB4ICsgJ3B4KSc7XG4gICAgfVxuICB9XG5cbiAgX3llYXJBZnRlclhZZWFycyhpbmRleCkge1xuICAgIHZhciByZXN1bHQgPSBuZXcgRGF0ZSh0aGlzLl9vcmlnaW5EYXRlKTtcbiAgICByZXN1bHQuc2V0RnVsbFllYXIocGFyc2VJbnQoaW5kZXgpICsgdGhpcy5fb3JpZ2luRGF0ZS5nZXRGdWxsWWVhcigpKTtcbiAgICByZXR1cm4gcmVzdWx0LmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBfeWVhckFmdGVyWE1vbnRocyhtb250aHMpIHtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFmdGVyWE1vbnRocyhtb250aHMpLmdldEZ1bGxZZWFyKCk7XG4gIH1cblxuICBfZGF0ZUFmdGVyWE1vbnRocyhtb250aHMpIHtcbiAgICB2YXIgcmVzdWx0ID0gbmV3IERhdGUodGhpcy5fb3JpZ2luRGF0ZSk7XG4gICAgcmVzdWx0LnNldERhdGUoMSk7XG4gICAgcmVzdWx0LnNldE1vbnRoKHBhcnNlSW50KG1vbnRocykgKyB0aGlzLl9vcmlnaW5EYXRlLmdldE1vbnRoKCkpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBfZGlmZmVyZW5jZUluTW9udGhzKGRhdGUxLCBkYXRlMikge1xuICAgIHZhciBtb250aHMgPSAoZGF0ZTEuZ2V0RnVsbFllYXIoKSAtIGRhdGUyLmdldEZ1bGxZZWFyKCkpICogMTI7XG4gICAgcmV0dXJuIG1vbnRocyAtIGRhdGUyLmdldE1vbnRoKCkgKyBkYXRlMS5nZXRNb250aCgpO1xuICB9XG5cbiAgX2RpZmZlcmVuY2VJblllYXJzKGRhdGUxLCBkYXRlMikge1xuICAgIHJldHVybiB0aGlzLl9kaWZmZXJlbmNlSW5Nb250aHMoZGF0ZTEsIGRhdGUyKSAvIDEyO1xuICB9XG5cbiAgX2NsZWFyKCkge1xuICAgIHRoaXMuc2VsZWN0ZWREYXRlID0gJyc7XG4gIH1cblxuICBfY2xvc2UoKSB7XG4gICAgY29uc3Qgb3ZlcmxheUNvbnRlbnQgPSB0aGlzLmdldFJvb3ROb2RlKCkuaG9zdDtcbiAgICBjb25zdCBvdmVybGF5ID0gb3ZlcmxheUNvbnRlbnQgPyBvdmVybGF5Q29udGVudC5nZXRSb290Tm9kZSgpLmhvc3QgOiBudWxsO1xuICAgIGlmIChvdmVybGF5KSB7XG4gICAgICBvdmVybGF5Lm9wZW5lZCA9IGZhbHNlO1xuICAgIH1cblxuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2Nsb3NlJywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICB9XG5cbiAgX2NhbmNlbCgpIHtcbiAgICB0aGlzLmZvY3VzZWREYXRlID0gdGhpcy5zZWxlY3RlZERhdGU7XG4gICAgdGhpcy5fY2xvc2UoKTtcbiAgfVxuXG4gIF9wcmV2ZW50RGVmYXVsdChlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgLyoqXG4gICAqIEtleWJvYXJkIE5hdmlnYXRpb25cbiAgICovXG4gIF9ldmVudEtleShlKSB7XG4gICAgdmFyIGtleXMgPSBbJ2Rvd24nLCAndXAnLCAncmlnaHQnLCAnbGVmdCcsICdlbnRlcicsICdzcGFjZScsICdob21lJywgJ2VuZCcsICdwYWdldXAnLCAncGFnZWRvd24nLCAndGFiJywgJ2VzYyddO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgayA9IGtleXNbaV07XG4gICAgICBpZiAoSXJvbkExMXlLZXlzQmVoYXZpb3Iua2V5Ym9hcmRFdmVudE1hdGNoZXNLZXlzKGUsIGspKSB7XG4gICAgICAgIHJldHVybiBrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9vbktleWRvd24oZSkge1xuICAgIHZhciBmb2N1cyA9IHRoaXMuX2N1cnJlbnRseUZvY3VzZWREYXRlKCk7XG5cbiAgICAvLyBDYW5ub3QgdXNlICh0b2RheS9jYW5jZWwpLmZvY3VzZWQgZmxhZyBiZWNhdXNlIHZhYWRpbi10ZXh0LWZpZWxkIHJlbW92ZXMgaXRcbiAgICAvLyBwcmV2aW91c2x5IGluIHRoZSBrZXlkb3duIGV2ZW50LlxuICAgIGNvbnN0IGlzVG9kYXkgPSBlLmNvbXBvc2VkUGF0aCgpLmluZGV4T2YodGhpcy4kLnRvZGF5QnV0dG9uKSA+PSAwO1xuICAgIGNvbnN0IGlzQ2FuY2VsID0gZS5jb21wb3NlZFBhdGgoKS5pbmRleE9mKHRoaXMuJC5jYW5jZWxCdXR0b24pID49IDA7XG4gICAgY29uc3QgaXNTY3JvbGxlciA9ICFpc1RvZGF5ICYmICFpc0NhbmNlbDtcblxuICAgIHZhciBldmVudEtleSA9IHRoaXMuX2V2ZW50S2V5KGUpO1xuICAgIGlmIChldmVudEtleSA9PT0gJ3RhYicpIHtcbiAgICAgIC8vIFdlIGhhbmRsZSB0YWJzIGhlcmUgYW5kIGRvbid0IHdhbnQgdG8gYnViYmxlIHVwLlxuICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcblxuICAgICAgY29uc3QgaXNGdWxsc2NyZWVuID0gdGhpcy5oYXNBdHRyaWJ1dGUoJ2Z1bGxzY3JlZW4nKTtcbiAgICAgIGNvbnN0IGlzU2hpZnQgPSBlLnNoaWZ0S2V5O1xuXG4gICAgICBpZiAoaXNGdWxsc2NyZWVuKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIH0gZWxzZSBpZiAoaXNTaGlmdCAmJiBpc1Njcm9sbGVyIHx8ICFpc1NoaWZ0ICYmIGlzQ2FuY2VsKSB7XG4gICAgICAgIC8vIFJldHVybiBmb2N1cyBiYWNrIHRvIHRoZSBpbnB1dCBmaWVsZFxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2ZvY3VzLWlucHV0Jywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICAgICAgfSBlbHNlIGlmIChpc1NoaWZ0ICYmIGlzVG9kYXkpIHtcbiAgICAgICAgLy8gQnJvd3NlciByZXR1cm5zIGZvY3VzIGJhY2sgdG8gdGhlIHNjcm9sbGFibGUgYXJlYS4gV2UgbmVlZCB0byBzZXRcbiAgICAgICAgLy8gdGhlIGZvY3VzZWQgZmxhZywgYW5kIG1vdmUgdGhlIHNjcm9sbCB0byBmb2N1c2VkIGRhdGUuXG4gICAgICAgIHRoaXMuX2ZvY3VzZWQgPSB0cnVlO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMucmV2ZWFsRGF0ZSh0aGlzLmZvY3VzZWREYXRlKSwgMSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBCcm93c2VyIG1vdmVzIHRoZSBmb2N1cyBvdXQgb2YgdGhlIHNjcm9sbGVyLCBoZW5jZSBmb2N1c2VkIGZsYWcgbXVzdFxuICAgICAgICAvLyBzZXQgdG8gZmFsc2UuXG4gICAgICAgIHRoaXMuX2ZvY3VzZWQgPSBmYWxzZTtcbiAgICAgIH1cbiAgICB9IGVsc2UgaWYgKGV2ZW50S2V5KSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgc3dpdGNoIChldmVudEtleSkge1xuICAgICAgICBjYXNlICdkb3duJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeURheXMoNyk7XG4gICAgICAgICAgdGhpcy5mb2N1cygpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd1cCc6XG4gICAgICAgICAgdGhpcy5fbW92ZUZvY3VzQnlEYXlzKC03KTtcbiAgICAgICAgICB0aGlzLmZvY3VzKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3JpZ2h0JzpcbiAgICAgICAgICBpZiAoaXNTY3JvbGxlcikge1xuICAgICAgICAgICAgdGhpcy5fbW92ZUZvY3VzQnlEYXlzKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnbGVmdCc6XG4gICAgICAgICAgaWYgKGlzU2Nyb2xsZXIpIHtcbiAgICAgICAgICAgIHRoaXMuX21vdmVGb2N1c0J5RGF5cygtMSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlbnRlcic6XG4gICAgICAgICAgaWYgKGlzU2Nyb2xsZXIgfHwgaXNDYW5jZWwpIHtcbiAgICAgICAgICAgIHRoaXMuX2Nsb3NlKCk7XG4gICAgICAgICAgfSBlbHNlIGlmIChpc1RvZGF5KSB7XG4gICAgICAgICAgICB0aGlzLl9vblRvZGF5VGFwKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdzcGFjZSc6XG4gICAgICAgICAgaWYgKGlzQ2FuY2VsKSB7XG4gICAgICAgICAgICB0aGlzLl9jbG9zZSgpO1xuICAgICAgICAgIH0gZWxzZSBpZiAoaXNUb2RheSkge1xuICAgICAgICAgICAgdGhpcy5fb25Ub2RheVRhcCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2YXIgZm9jdXNlZERhdGUgPSB0aGlzLmZvY3VzZWREYXRlO1xuICAgICAgICAgICAgaWYgKERhdGVQaWNrZXJIZWxwZXIuX2RhdGVFcXVhbHMoZm9jdXNlZERhdGUsIHRoaXMuc2VsZWN0ZWREYXRlKSkge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9ICcnO1xuICAgICAgICAgICAgICB0aGlzLmZvY3VzZWREYXRlID0gZm9jdXNlZERhdGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGZvY3VzZWREYXRlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnaG9tZSc6XG4gICAgICAgICAgdGhpcy5fbW92ZUZvY3VzSW5zaWRlTW9udGgoZm9jdXMsICdtaW5EYXRlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgdGhpcy5fbW92ZUZvY3VzSW5zaWRlTW9udGgoZm9jdXMsICdtYXhEYXRlJyk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BhZ2Vkb3duJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeU1vbnRocyhlLnNoaWZ0S2V5ID8gMTIgOiAxKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGFnZXVwJzpcbiAgICAgICAgICB0aGlzLl9tb3ZlRm9jdXNCeU1vbnRocyhlLnNoaWZ0S2V5ID8gLTEyIDogLTEpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdlc2MnOlxuICAgICAgICAgIHRoaXMuX2NhbmNlbCgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9jdXJyZW50bHlGb2N1c2VkRGF0ZSgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c2VkRGF0ZSB8fCB0aGlzLnNlbGVjdGVkRGF0ZSB8fCB0aGlzLmluaXRpYWxQb3NpdGlvbiB8fCBuZXcgRGF0ZSgpO1xuICB9XG5cbiAgX2ZvY3VzRGF0ZShkYXRlVG9Gb2N1cykge1xuICAgIHRoaXMuZm9jdXNlZERhdGUgPSBkYXRlVG9Gb2N1cztcbiAgICB0aGlzLl9mb2N1c2VkTW9udGhEYXRlID0gZGF0ZVRvRm9jdXMuZ2V0RGF0ZSgpO1xuICB9XG5cbiAgX2ZvY3VzQ2xvc2VzdERhdGUoZm9jdXMpIHtcbiAgICB0aGlzLl9mb2N1c0RhdGUoRGF0ZVBpY2tlckhlbHBlci5fZ2V0Q2xvc2VzdERhdGUoZm9jdXMsIFt0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZV0pKTtcbiAgfVxuXG4gIF9tb3ZlRm9jdXNCeURheXMoZGF5cykge1xuICAgIHZhciBmb2N1cyA9IHRoaXMuX2N1cnJlbnRseUZvY3VzZWREYXRlKCk7XG4gICAgdmFyIGRhdGVUb0ZvY3VzID0gbmV3IERhdGUoMCwgMCk7XG4gICAgZGF0ZVRvRm9jdXMuc2V0RnVsbFllYXIoZm9jdXMuZ2V0RnVsbFllYXIoKSk7XG4gICAgZGF0ZVRvRm9jdXMuc2V0TW9udGgoZm9jdXMuZ2V0TW9udGgoKSk7XG4gICAgZGF0ZVRvRm9jdXMuc2V0RGF0ZShmb2N1cy5nZXREYXRlKCkgKyBkYXlzKTtcblxuICAgIGlmICh0aGlzLl9kYXRlQWxsb3dlZChkYXRlVG9Gb2N1cywgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICB0aGlzLl9mb2N1c0RhdGUoZGF0ZVRvRm9jdXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBpZiAodGhpcy5fZGF0ZUFsbG93ZWQoZm9jdXMsIHRoaXMubWluRGF0ZSwgdGhpcy5tYXhEYXRlKSkge1xuICAgICAgICAvLyBNb3ZlIHRvIG1pbiBvciBtYXggZGF0ZVxuICAgICAgICBpZiAoZGF5cyA+IDApIHsgLy8gZG93biBvciByaWdodFxuICAgICAgICAgIHRoaXMuX2ZvY3VzRGF0ZSh0aGlzLm1heERhdGUpO1xuICAgICAgICB9IGVsc2UgeyAvLyB1cCBvciBsZWZ0XG4gICAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXMubWluRGF0ZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIE1vdmUgdG8gY2xvc2VzdCBhbGxvd2VkIGRhdGVcbiAgICAgICAgdGhpcy5fZm9jdXNDbG9zZXN0RGF0ZShmb2N1cyk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgX21vdmVGb2N1c0J5TW9udGhzKG1vbnRocykge1xuICAgIHZhciBmb2N1cyA9IHRoaXMuX2N1cnJlbnRseUZvY3VzZWREYXRlKCk7XG4gICAgdmFyIGRhdGVUb0ZvY3VzID0gbmV3IERhdGUoMCwgMCk7XG4gICAgZGF0ZVRvRm9jdXMuc2V0RnVsbFllYXIoZm9jdXMuZ2V0RnVsbFllYXIoKSk7XG4gICAgZGF0ZVRvRm9jdXMuc2V0TW9udGgoZm9jdXMuZ2V0TW9udGgoKSArIG1vbnRocyk7XG5cbiAgICB2YXIgdGFyZ2V0TW9udGggPSBkYXRlVG9Gb2N1cy5nZXRNb250aCgpO1xuXG4gICAgZGF0ZVRvRm9jdXMuc2V0RGF0ZSh0aGlzLl9mb2N1c2VkTW9udGhEYXRlIHx8ICh0aGlzLl9mb2N1c2VkTW9udGhEYXRlID0gZm9jdXMuZ2V0RGF0ZSgpKSk7XG4gICAgaWYgKGRhdGVUb0ZvY3VzLmdldE1vbnRoKCkgIT09IHRhcmdldE1vbnRoKSB7XG4gICAgICBkYXRlVG9Gb2N1cy5zZXREYXRlKDApO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9kYXRlQWxsb3dlZChkYXRlVG9Gb2N1cywgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICB0aGlzLmZvY3VzZWREYXRlID0gZGF0ZVRvRm9jdXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9kYXRlQWxsb3dlZChmb2N1cywgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICAgIC8vIE1vdmUgdG8gbWluIG9yIG1heCBkYXRlXG4gICAgICAgIGlmIChtb250aHMgPiAwKSB7IC8vIHBhZ2Vkb3duXG4gICAgICAgICAgdGhpcy5fZm9jdXNEYXRlKHRoaXMubWF4RGF0ZSk7XG4gICAgICAgIH0gZWxzZSB7IC8vIHBhZ2V1cFxuICAgICAgICAgIHRoaXMuX2ZvY3VzRGF0ZSh0aGlzLm1pbkRhdGUpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNb3ZlIHRvIGNsb3Nlc3QgYWxsb3dlZCBkYXRlXG4gICAgICAgIHRoaXMuX2ZvY3VzQ2xvc2VzdERhdGUoZm9jdXMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9tb3ZlRm9jdXNJbnNpZGVNb250aChmb2N1c2VkRGF0ZSwgcHJvcGVydHkpIHtcbiAgICB2YXIgZGF0ZVRvRm9jdXMgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBkYXRlVG9Gb2N1cy5zZXRGdWxsWWVhcihmb2N1c2VkRGF0ZS5nZXRGdWxsWWVhcigpKTtcblxuICAgIGlmIChwcm9wZXJ0eSA9PT0gJ21pbkRhdGUnKSB7XG4gICAgICBkYXRlVG9Gb2N1cy5zZXRNb250aChmb2N1c2VkRGF0ZS5nZXRNb250aCgpKTtcbiAgICAgIGRhdGVUb0ZvY3VzLnNldERhdGUoMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGRhdGVUb0ZvY3VzLnNldE1vbnRoKGZvY3VzZWREYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICAgIGRhdGVUb0ZvY3VzLnNldERhdGUoMCk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX2RhdGVBbGxvd2VkKGRhdGVUb0ZvY3VzLCB0aGlzLm1pbkRhdGUsIHRoaXMubWF4RGF0ZSkpIHtcbiAgICAgIHRoaXMuX2ZvY3VzRGF0ZShkYXRlVG9Gb2N1cyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmICh0aGlzLl9kYXRlQWxsb3dlZChmb2N1c2VkRGF0ZSwgdGhpcy5taW5EYXRlLCB0aGlzLm1heERhdGUpKSB7XG4gICAgICAgIC8vIE1vdmUgdG8gbWluRGF0ZSBvciBtYXhEYXRlXG4gICAgICAgIHRoaXMuX2ZvY3VzRGF0ZSh0aGlzW3Byb3BlcnR5XSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNb3ZlIHRvIGNsb3Nlc3QgYWxsb3dlZCBkYXRlXG4gICAgICAgIHRoaXMuX2ZvY3VzQ2xvc2VzdERhdGUoZm9jdXNlZERhdGUpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIF9kYXRlQWxsb3dlZChkYXRlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiAoIW1pbiB8fCBkYXRlID49IG1pbikgJiYgKCFtYXggfHwgZGF0ZSA8PSBtYXgpO1xuICB9XG5cbiAgX2lzVG9kYXlBbGxvd2VkKG1pbiwgbWF4KSB7XG4gICAgdmFyIHRvZGF5ID0gbmV3IERhdGUoKTtcbiAgICB2YXIgdG9kYXlNaWRuaWdodCA9IG5ldyBEYXRlKDAsIDApO1xuICAgIHRvZGF5TWlkbmlnaHQuc2V0RnVsbFllYXIodG9kYXkuZ2V0RnVsbFllYXIoKSk7XG4gICAgdG9kYXlNaWRuaWdodC5zZXRNb250aCh0b2RheS5nZXRNb250aCgpKTtcbiAgICB0b2RheU1pZG5pZ2h0LnNldERhdGUodG9kYXkuZ2V0RGF0ZSgpKTtcbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFsbG93ZWQodG9kYXlNaWRuaWdodCwgbWluLCBtYXgpO1xuICB9XG5cbiAgX3N0b3BQcm9wYWdhdGlvbihlKSB7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoRGF0ZVBpY2tlck92ZXJsYXlDb250ZW50RWxlbWVudC5pcywgRGF0ZVBpY2tlck92ZXJsYXlDb250ZW50RWxlbWVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBPdmVybGF5RWxlbWVudCB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLW92ZXJsYXkvc3JjL3ZhYWRpbi1vdmVybGF5LmpzJztcblxuaW1wb3J0IHsgRGlzYWJsZVVwZ3JhZGVNaXhpbiB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9kaXNhYmxlLXVwZ3JhZGUtbWl4aW4uanMnO1xuLyoqXG4gKiBUaGUgb3ZlcmxheSBlbGVtZW50LlxuICpcbiAqICMjIyBTdHlsaW5nXG4gKlxuICogU2VlIFtgPHZhYWRpbi1vdmVybGF5PmAgZG9jdW1lbnRhdGlvbl0oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tb3ZlcmxheS9ibG9iL21hc3Rlci9zcmMvdmFhZGluLW92ZXJsYXkuaHRtbClcbiAqIGZvciBgPHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5PmAgcGFydHMuXG4gKlxuICogU2VlIFtUaGVtYWJsZU1peGluIOKAkyBob3cgdG8gYXBwbHkgc3R5bGVzIGZvciBzaGFkb3cgcGFydHNdKGh0dHBzOi8vZ2l0aHViLmNvbS92YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3dpa2kpXG4gKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgRGF0ZVBpY2tlck92ZXJsYXlFbGVtZW50IGV4dGVuZHMgRGlzYWJsZVVwZ3JhZGVNaXhpbihPdmVybGF5RWxlbWVudCkge1xuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXknO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZShEYXRlUGlja2VyT3ZlcmxheUVsZW1lbnQuaXMsIERhdGVQaWNrZXJPdmVybGF5RWxlbWVudCk7XG4iLCJpbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2VsZW1lbnRzL2N1c3RvbS1zdHlsZS5qcyc7XG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1zdHlsZXNcIiB0aGVtZS1mb3I9XCJ2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheVwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbYm90dG9tLWFsaWduZWRdKSB7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtyaWdodC1hbGlnbmVkXSkge1xuICAgICAgICBhbGlnbi1pdGVtczogZmxleC1lbmQ7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtyaWdodC1hbGlnbmVkXVtkaXI9XCJydGxcIl0pIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwib3ZlcmxheVwiXSB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0fj1cImNvbnRlbnRcIl0ge1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IEdlc3R1cmVFdmVudExpc3RlbmVycyB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9nZXN0dXJlLWV2ZW50LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tbWVkaWEtcXVlcnkvaXJvbi1tZWRpYS1xdWVyeS5qcyc7XG5pbXBvcnQgeyBUaGVtYWJsZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzJztcbmltcG9ydCB7IFRoZW1lUHJvcGVydHlNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLXRoZW1hYmxlLW1peGluL3ZhYWRpbi10aGVtZS1wcm9wZXJ0eS1taXhpbi5qcyc7XG5pbXBvcnQgeyBDb250cm9sU3RhdGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4uanMnO1xuaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LmpzJztcbmltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50LmpzJztcbmltcG9ydCB7IERhdGVQaWNrZXJNaXhpbiB9IGZyb20gJy4vdmFhZGluLWRhdGUtcGlja2VyLW1peGluLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC9zcmMvdmFhZGluLXRleHQtZmllbGQuanMnO1xuaW1wb3J0IHsgRWxlbWVudE1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tZWxlbWVudC1taXhpbi92YWFkaW4tZWxlbWVudC1taXhpbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuaW1wb3J0IHsgYWZ0ZXJOZXh0UmVuZGVyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvcmVuZGVyLXN0YXR1cy5qcyc7XG4vKipcbiAqXG4gKiBgPHZhYWRpbi1kYXRlLXBpY2tlcj5gIGlzIGEgZGF0ZSBzZWxlY3Rpb24gZmllbGQgd2hpY2ggaW5jbHVkZXMgYSBzY3JvbGxhYmxlXG4gKiBtb250aCBjYWxlbmRhciB2aWV3LlxuICogYGBgaHRtbFxuICogPHZhYWRpbi1kYXRlLXBpY2tlciBsYWJlbD1cIkJpcnRoZGF5XCI+PC92YWFkaW4tZGF0ZS1waWNrZXI+XG4gKiBgYGBcbiAqIGBgYGpzXG4gKiBkYXRlUGlja2VyLnZhbHVlID0gJzIwMTYtMDMtMDInO1xuICogYGBgXG4gKiBXaGVuIHRoZSBzZWxlY3RlZCBgdmFsdWVgIGlzIGNoYW5nZWQsIGEgYHZhbHVlLWNoYW5nZWRgIGV2ZW50IGlzIHRyaWdnZXJlZC5cbiAqXG4gKlxuICogIyMjIFN0eWxpbmdcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHNoYWRvdyBET00gcGFydHMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBQYXJ0IG5hbWUgfCBEZXNjcmlwdGlvbiB8IFRoZW1lIGZvciBFbGVtZW50XG4gKiAtLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLS0tLVxuICogYHRleHQtZmllbGRgIHwgSW5wdXQgZWxlbWVudCB8IHZhYWRpbi1kYXRlLXBpY2tlclxuICogYGNsZWFyLWJ1dHRvbmAgfCBDbGVhciBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXJcbiAqIGB0b2dnbGUtYnV0dG9uYCB8IFRvZ2dsZSBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXJcbiAqIGBvdmVybGF5LWNvbnRlbnRgIHwgVGhlIG92ZXJsYXkgZWxlbWVudCB8IHZhYWRpbi1kYXRlLXBpY2tlclxuICogYG92ZXJsYXktaGVhZGVyYCB8IEZ1bGxzY3JlZW4gbW9kZSBoZWFkZXIgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgbGFiZWxgIHwgRnVsbHNjcmVlbiBtb2RlIHZhbHVlL2xhYmVsIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYGNsZWFyLWJ1dHRvbmAgfCBGdWxsc2NyZWVuIG1vZGUgY2xlYXIgYnV0dG9uIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYHRvZ2dsZS1idXR0b25gIHwgRnVsbHNjcmVlbiBtb2RlIHRvZ2dsZSBidXR0b24gfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgeWVhcnMtdG9nZ2xlLWJ1dHRvbmAgfCBGdWxsc2NyZWVuIG1vZGUgeWVhcnMgc2Nyb2xsZXIgdG9nZ2xlIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYG1vbnRoc2AgfCBNb250aHMgc2Nyb2xsZXIgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgeWVhcnNgIHwgWWVhcnMgc2Nyb2xsZXIgfCB2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS1jb250ZW50XG4gKiBgdG9vbGJhcmAgfCBGb290ZXIgYmFyIHdpdGggYnV0dG9ucyB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB0b2RheS1idXR0b25gIHwgVG9kYXkgYnV0dG9uIHwgdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFxuICogYGNhbmNlbC1idXR0b25gIHwgQ2FuY2VsIGJ1dHRvbiB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGBtb250aGAgfCBNb250aCBjYWxlbmRhciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB5ZWFyLW51bWJlcmAgfCBZZWFyIG51bWJlciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGB5ZWFyLXNlcGFyYXRvcmAgfCBZZWFyIHNlcGFyYXRvciB8IHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcbiAqIGBtb250aC1oZWFkZXJgIHwgTW9udGggdGl0bGUgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqIGB3ZWVrZGF5c2AgfCBXZWVrZGF5IGNvbnRhaW5lciB8IHZhYWRpbi1tb250aC1jYWxlbmRhclxuICogYHdlZWtkYXlgIHwgV2Vla2RheSBlbGVtZW50IHwgdmFhZGluLW1vbnRoLWNhbGVuZGFyXG4gKiBgd2Vlay1udW1iZXJzYCB8IFdlZWsgbnVtYmVycyBjb250YWluZXIgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqIGB3ZWVrLW51bWJlcmAgfCBXZWVrIG51bWJlciBlbGVtZW50IHwgdmFhZGluLW1vbnRoLWNhbGVuZGFyXG4gKiBgZGF0ZWAgfCBEYXRlIGVsZW1lbnQgfCB2YWFkaW4tbW9udGgtY2FsZW5kYXJcbiAqXG4gKiBTZWUgW1RoZW1hYmxlTWl4aW4g4oCTIGhvdyB0byBhcHBseSBzdHlsZXMgZm9yIHNoYWRvdyBwYXJ0c10oaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vd2lraSlcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgICAgfCBEZXNjcmlwdGlvbiB8IFBhcnQgbmFtZVxuICogLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLVxuICogYGludmFsaWRgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgaW52YWxpZCB8IDpob3N0XG4gKiBgb3BlbmVkYCB8IFNldCB3aGVuIHRoZSBkYXRlIHNlbGVjdG9yIG92ZXJsYXkgaXMgb3BlbmVkIHwgOmhvc3RcbiAqIGByZWFkb25seWAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyByZWFkb25seSB8IDpob3N0XG4gKiBgZGlzYWJsZWRgIHwgU2V0IHdoZW4gdGhlIGVsZW1lbnQgaXMgZGlzYWJsZWQgfCA6aG9zdFxuICogYHRvZGF5YCB8IFNldCBvbiB0aGUgZGF0ZSBjb3JyZXNwb25kaW5nIHRvIHRoZSBjdXJyZW50IGRheSB8IGRhdGVcbiAqIGBmb2N1c2VkYCB8IFNldCBvbiB0aGUgZm9jdXNlZCBkYXRlIHwgZGF0ZVxuICogYGRpc2FibGVkYCB8IFNldCBvbiB0aGUgZGF0ZSBvdXQgb2YgdGhlIGFsbG93ZWQgcmFuZ2UgfCBkYXRlXG4gKiBgc2VsZWN0ZWRgIHwgU2V0IG9uIHRoZSBzZWxlY3RlZCBkYXRlIHwgZGF0ZVxuICpcbiAqIElmIHlvdSB3YW50IHRvIHJlcGxhY2UgdGhlIGRlZmF1bHQgaW5wdXQgZmllbGQgd2l0aCBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvbiwgeW91IHNob3VsZCB1c2UgdGhlXG4gKiBbYDx2YWFkaW4tZGF0ZS1waWNrZXItbGlnaHQ+YF0oI3ZhYWRpbi1kYXRlLXBpY2tlci1saWdodCkgZWxlbWVudC5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBgPHZhYWRpbi1kYXRlLXBpY2tlcj5gIGl0c2VsZiwgdGhlIGZvbGxvd2luZyBpbnRlcm5hbFxuICogY29tcG9uZW50cyBhcmUgdGhlbWFibGU6XG4gKlxuICogLSBgPHZhYWRpbi10ZXh0LWZpZWxkPmBcbiAqIC0gYDx2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheT5gXG4gKiAtIGA8dmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudD5gXG4gKiAtIGA8dmFhZGluLW1vbnRoLWNhbGVuZGFyPmBcbiAqXG4gKiBOb3RlOiB0aGUgYHRoZW1lYCBhdHRyaWJ1dGUgdmFsdWUgc2V0IG9uIGA8dmFhZGluLWRhdGUtcGlja2VyPmAgaXNcbiAqIHByb3BhZ2F0ZWQgdG8gdGhlIGludGVybmFsIHRoZW1hYmxlIGNvbXBvbmVudHMgbGlzdGVkIGFib3ZlLlxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBtaXhlcyBWYWFkaW4uRWxlbWVudE1peGluXG4gKiBAbWl4ZXMgVmFhZGluLkNvbnRyb2xTdGF0ZU1peGluXG4gKiBAbWl4ZXMgVmFhZGluLlRoZW1hYmxlTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWVQcm9wZXJ0eU1peGluXG4gKiBAbWl4ZXMgVmFhZGluLkRhdGVQaWNrZXJNaXhpblxuICogQG1peGVzIFBvbHltZXIuR2VzdHVyZUV2ZW50TGlzdGVuZXJzXG4gKiBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAqL1xuY2xhc3MgRGF0ZVBpY2tlckVsZW1lbnQgZXh0ZW5kc1xuICBFbGVtZW50TWl4aW4oXG4gICAgQ29udHJvbFN0YXRlTWl4aW4oXG4gICAgICBUaGVtYWJsZU1peGluKFxuICAgICAgICBUaGVtZVByb3BlcnR5TWl4aW4oXG4gICAgICAgICAgRGF0ZVBpY2tlck1peGluKFxuICAgICAgICAgICAgR2VzdHVyZUV2ZW50TGlzdGVuZXJzKFBvbHltZXJFbGVtZW50KSkpKSkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbb3BlbmVkXSkge1xuICAgICAgICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0ZXh0LWZpZWxkXCJdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG5cbiAgICA8dmFhZGluLXRleHQtZmllbGQgaWQ9XCJpbnB1dFwiIHJvbGU9XCJhcHBsaWNhdGlvblwiIGF1dG9jb21wbGV0ZT1cIm9mZlwiIG9uLWZvY3VzPVwiX2ZvY3VzXCIgdmFsdWU9XCJ7e191c2VySW5wdXRWYWx1ZX19XCIgaW52YWxpZD1cIltbaW52YWxpZF1dXCIgbGFiZWw9XCJbW2xhYmVsXV1cIiBuYW1lPVwiW1tuYW1lXV1cIiBwbGFjZWhvbGRlcj1cIltbcGxhY2Vob2xkZXJdXVwiIHJlcXVpcmVkPVwiW1tyZXF1aXJlZF1dXCIgZGlzYWJsZWQ9XCJbW2Rpc2FibGVkXV1cIiByZWFkb25seT1cIltbcmVhZG9ubHldXVwiIGVycm9yLW1lc3NhZ2U9XCJbW2Vycm9yTWVzc2FnZV1dXCIgY2xlYXItYnV0dG9uLXZpc2libGU9XCJbW2NsZWFyQnV0dG9uVmlzaWJsZV1dXCIgYXJpYS1sYWJlbFxcJD1cIltbbGFiZWxdXVwiIHBhcnQ9XCJ0ZXh0LWZpZWxkXCIgdGhlbWVcXCQ9XCJbW3RoZW1lXV1cIj5cbiAgICAgIDxzbG90IG5hbWU9XCJwcmVmaXhcIiBzbG90PVwicHJlZml4XCI+PC9zbG90PlxuICAgICAgPGRpdiBwYXJ0PVwidG9nZ2xlLWJ1dHRvblwiIHNsb3Q9XCJzdWZmaXhcIiBvbi10YXA9XCJfdG9nZ2xlXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWxcXCQ9XCJbW2kxOG4uY2FsZW5kYXJdXVwiIGFyaWEtZXhwYW5kZWRcXCQ9XCJbW19nZXRBcmlhRXhwYW5kZWQob3BlbmVkKV1dXCI+PC9kaXY+XG4gICAgPC92YWFkaW4tdGV4dC1maWVsZD5cblxuICAgIDx2YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheSBpZD1cIm92ZXJsYXlcIiBmdWxsc2NyZWVuXFwkPVwiW1tfZnVsbHNjcmVlbl1dXCIgdGhlbWVcXCQ9XCJbW19fZ2V0T3ZlcmxheVRoZW1lKHRoZW1lLCBfb3ZlcmxheUluaXRpYWxpemVkKV1dXCIgb24tdmFhZGluLW92ZXJsYXktb3Blbj1cIl9vbk92ZXJsYXlPcGVuZWRcIiBvbi12YWFkaW4tb3ZlcmxheS1jbG9zZT1cIl9vbk92ZXJsYXlDbG9zZWRcIiBkaXNhYmxlLXVwZ3JhZGU9XCJcIj5cbiAgICAgIDx0ZW1wbGF0ZT5cbiAgICAgICAgPHZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQgaWQ9XCJvdmVybGF5LWNvbnRlbnRcIiBpMThuPVwiW1tpMThuXV1cIiBmdWxsc2NyZWVuXFwkPVwiW1tfZnVsbHNjcmVlbl1dXCIgbGFiZWw9XCJbW2xhYmVsXV1cIiBzZWxlY3RlZC1kYXRlPVwie3tfc2VsZWN0ZWREYXRlfX1cIiBzbG90PVwiZHJvcGRvd24tY29udGVudFwiIGZvY3VzZWQtZGF0ZT1cInt7X2ZvY3VzZWREYXRlfX1cIiBzaG93LXdlZWstbnVtYmVycz1cIltbc2hvd1dlZWtOdW1iZXJzXV1cIiBtaW4tZGF0ZT1cIltbX21pbkRhdGVdXVwiIG1heC1kYXRlPVwiW1tfbWF4RGF0ZV1dXCIgcm9sZT1cImRpYWxvZ1wiIG9uLWRhdGUtdGFwPVwiX2Nsb3NlXCIgcGFydD1cIm92ZXJsYXktY29udGVudFwiIHRoZW1lXFwkPVwiW1tfX2dldE92ZXJsYXlUaGVtZSh0aGVtZSwgX292ZXJsYXlJbml0aWFsaXplZCldXVwiPlxuICAgICAgICA8L3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQ+XG4gICAgICA8L3RlbXBsYXRlPlxuICAgIDwvdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXk+XG5cbiAgICA8aXJvbi1tZWRpYS1xdWVyeSBxdWVyeT1cIltbX2Z1bGxzY3JlZW5NZWRpYVF1ZXJ5XV1cIiBxdWVyeS1tYXRjaGVzPVwie3tfZnVsbHNjcmVlbn19XCI+XG4gICAgPC9pcm9uLW1lZGlhLXF1ZXJ5PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4tZGF0ZS1waWNrZXInO1xuICB9XG5cbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiAnNC4wLjUnO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG4gICAgICAvKipcbiAgICAgICAqIFNldCB0byB0cnVlIHRvIGRpc3BsYXkgdGhlIGNsZWFyIGljb24gd2hpY2ggY2xlYXJzIHRoZSBpbnB1dC5cbiAgICAgICAqL1xuICAgICAgY2xlYXJCdXR0b25WaXNpYmxlOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHZhbHVlOiBmYWxzZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBTZXQgdG8gdHJ1ZSB0byBkaXNhYmxlIHRoaXMgZWxlbWVudC5cbiAgICAgICAqL1xuICAgICAgZGlzYWJsZWQ6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhlIGVycm9yIG1lc3NhZ2UgdG8gZGlzcGxheSB3aGVuIHRoZSBpbnB1dCBpcyBpbnZhbGlkLlxuICAgICAgICovXG4gICAgICBlcnJvck1lc3NhZ2U6IFN0cmluZyxcblxuICAgICAgLyoqXG4gICAgICAgKiBBIHBsYWNlaG9sZGVyIHN0cmluZyBpbiBhZGRpdGlvbiB0byB0aGUgbGFiZWwuIElmIHRoaXMgaXMgc2V0LCB0aGUgbGFiZWwgd2lsbCBhbHdheXMgZmxvYXQuXG4gICAgICAgKi9cbiAgICAgIHBsYWNlaG9sZGVyOiBTdHJpbmcsXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gbWFrZSB0aGlzIGVsZW1lbnQgcmVhZC1vbmx5LlxuICAgICAgICovXG4gICAgICByZWFkb25seToge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBfdXNlcklucHV0VmFsdWU6IFN0cmluZ1xuICAgIH07XG4gIH1cblxuICBzdGF0aWMgZ2V0IG9ic2VydmVycygpIHtcbiAgICByZXR1cm4gW1xuICAgICAgJ191c2VySW5wdXRWYWx1ZUNoYW5nZWQoX3VzZXJJbnB1dFZhbHVlKScsXG4gICAgICAnX3NldENsZWFyQnV0dG9uTGFiZWwoaTE4bi5jbGVhciknXG4gICAgXTtcbiAgfVxuXG4gIHJlYWR5KCkge1xuICAgIHN1cGVyLnJlYWR5KCk7XG5cbiAgICAvLyBJbiBvcmRlciB0byBoYXZlIHN5bmNocm9uaXplZCBpbnZhbGlkIHByb3BlcnR5LCB3ZSBuZWVkIHRvIHVzZSB0aGUgc2FtZSB2YWxpZGF0ZSBsb2dpYy5cbiAgICBhZnRlck5leHRSZW5kZXIodGhpcywgKCkgPT4gdGhpcy5faW5wdXRFbGVtZW50LnZhbGlkYXRlID0gKCkgPT4ge30pO1xuXG4gICAgLy8gRklYTUUocGxhdG9zaGEpOiBkaXNwYXRjaCBgaW5wdXRgIGV2ZW50IG9uXG4gICAgLy8gPHZhYWRpbi10ZXh0LWZpZWxkPiBjbGVhciBidXR0b25cbiAgICAvLyBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10ZXh0LWZpZWxkL2lzc3Vlcy8zNDdcbiAgICB0aGlzLl9pbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgaWYgKHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdGhpcy5fX2Rpc3BhdGNoQ2hhbmdlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgICAgIHRoaXMuX19kaXNwYXRjaENoYW5nZSA9IGZhbHNlO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgX29uVmFhZGluT3ZlcmxheUNsb3NlKGUpIHtcbiAgICBpZiAodGhpcy5fb3BlbmVkV2l0aEZvY3VzUmluZyAmJiB0aGlzLmhhc0F0dHJpYnV0ZSgnZm9jdXNlZCcpKSB7XG4gICAgICB0aGlzLmZvY3VzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2ZvY3VzLXJpbmcnLCAnJyk7XG4gICAgfSBlbHNlIGlmICghdGhpcy5oYXNBdHRyaWJ1dGUoJ2ZvY3VzZWQnKSkge1xuICAgICAgdGhpcy5mb2N1c0VsZW1lbnQuYmx1cigpO1xuICAgIH1cbiAgICBpZiAoZS5kZXRhaWwuc291cmNlRXZlbnQgJiYgZS5kZXRhaWwuc291cmNlRXZlbnQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZih0aGlzKSAhPT0gLTEpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH1cblxuICBfdG9nZ2xlKGUpIHtcbiAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgIHRoaXNbKHRoaXMuX292ZXJsYXlJbml0aWFsaXplZCAmJiB0aGlzLiQub3ZlcmxheS5vcGVuZWQpID8gJ2Nsb3NlJyA6ICdvcGVuJ10oKTtcbiAgfVxuXG4gIF9pbnB1dCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLmlucHV0O1xuICB9XG5cbiAgc2V0IF9pbnB1dFZhbHVlKHZhbHVlKSB7XG4gICAgdGhpcy5faW5wdXRFbGVtZW50LnZhbHVlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgX2lucHV0VmFsdWUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lucHV0RWxlbWVudC52YWx1ZTtcbiAgfVxuXG4gIF9nZXRBcmlhRXhwYW5kZWQob3BlbmVkKSB7XG4gICAgcmV0dXJuIEJvb2xlYW4ob3BlbmVkKS50b1N0cmluZygpO1xuICB9XG5cbiAgLyoqXG4gICAqIEZvY3Vzc2FibGUgZWxlbWVudCB1c2VkIGJ5IHZhYWRpbi1jb250cm9sLXN0YXRlLW1peGluXG4gICAqL1xuICBnZXQgZm9jdXNFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLl9pbnB1dCgpIHx8IHRoaXM7XG4gIH1cblxuICBfc2V0Q2xlYXJCdXR0b25MYWJlbChpMThuQ2xlYXIpIHtcbiAgICAvLyBGSVhNRShwbGF0b3NoYSk6IGV4cG9zZSBpMThuIEFQSSBpbiA8dmFhZGluLXRleHQtZmllbGQ+XG4gICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC9pc3N1ZXMvMzQ4XG4gICAgdGhpcy5faW5wdXRFbGVtZW50LnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW3BhcnQ9XCJjbGVhci1idXR0b25cIl0nKVxuICAgICAgLnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbCcsIGkxOG5DbGVhcik7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKERhdGVQaWNrZXJFbGVtZW50LmlzLCBEYXRlUGlja2VyRWxlbWVudCk7XG5cbmV4cG9ydCB7IERhdGVQaWNrZXJFbGVtZW50IH07XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlLmpzJztcbmltcG9ydCB7IGZsdXNoIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZmx1c2guanMnO1xuaW1wb3J0IHsgdGVtcGxhdGl6ZSB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3RlbXBsYXRpemUuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7IGFmdGVyTmV4dFJlbmRlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL3JlbmRlci1zdGF0dXMuanMnO1xuLyoqXG4gKiBAbWVtYmVyb2YgVmFhZGluXG4gKiBAcHJpdmF0ZVxuICovXG5jbGFzcyBJbmZpbml0ZVNjcm9sbGVyRWxlbWVudCBleHRlbmRzIFBvbHltZXJFbGVtZW50IHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICBoZWlnaHQ6IDUwMHB4O1xuICAgICAgfVxuXG4gICAgICAjc2Nyb2xsZXIge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLTQwcHg7XG4gICAgICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcbiAgICAgICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlci5ub3RvdWNoc2Nyb2xsIHtcbiAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICNzY3JvbGxlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAuYnVmZmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogdmFyKC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWJ1ZmZlci13aWR0aCwgMTAwJSk7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDQwcHg7XG4gICAgICAgIHRvcDogdmFyKC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWJ1ZmZlci1vZmZzZXQsIDApO1xuICAgICAgICBhbmltYXRpb246IGZhZGVpbiAwLjJzO1xuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGZhZGVpbiB7XG4gICAgICAgIGZyb20geyBvcGFjaXR5OiAwOyB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMTsgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwic2Nyb2xsZXJcIiBvbi1zY3JvbGw9XCJfc2Nyb2xsXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnVmZmVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnVmZmVyXCI+PC9kaXY+XG4gICAgICA8ZGl2IGlkPVwiZnVsbEhlaWdodFwiPjwvZGl2PlxuICAgIDwvZGl2PlxuYDtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgaXMoKSB7XG4gICAgcmV0dXJuICd2YWFkaW4taW5maW5pdGUtc2Nyb2xsZXInO1xuICB9XG5cbiAgc3RhdGljIGdldCBwcm9wZXJ0aWVzKCkge1xuICAgIHJldHVybiB7XG5cbiAgICAgIC8qKlxuICAgICAgICogQ291bnQgb2YgaW5kaXZpZHVhbCBpdGVtcyBpbiBlYWNoIGJ1ZmZlci5cbiAgICAgICAqIFRoZSBzY3JvbGxlciBoYXMgMiBidWZmZXJzIGFsdG9nZXRoZXIgc28gYnVmZmVyU2l6ZSBvZiAyMFxuICAgICAgICogd2lsbCByZXN1bHQgaW4gNDAgYnVmZmVyZWQgRE9NIGl0ZW1zIGluIHRvdGFsLlxuICAgICAgICogQ2hhbmdpbmcgYWZ0ZXIgaW5pdGlhbGl6YXRpb24gbm90IHN1cHBvcnRlZC5cbiAgICAgICAqL1xuICAgICAgYnVmZmVyU2l6ZToge1xuICAgICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICAgIHZhbHVlOiAyMFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgYW1vdW50IG9mIGluaXRpYWwgc2Nyb2xsIHRvcC4gTmVlZGVkIGluIG9yZGVyIGZvciB0aGVcbiAgICAgICAqIHVzZXIgdG8gYmUgYWJsZSB0byBzY3JvbGwgYmFja3dhcmRzLlxuICAgICAgICovXG4gICAgICBfaW5pdGlhbFNjcm9sbDoge1xuICAgICAgICB2YWx1ZTogNTAwMDAwXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBpbmRleC9wb3NpdGlvbiBtYXBwZWQgYXQgX2luaXRpYWxTY3JvbGwgcG9pbnQuXG4gICAgICAgKi9cbiAgICAgIF9pbml0aWFsSW5kZXg6IHtcbiAgICAgICAgdmFsdWU6IDBcbiAgICAgIH0sXG5cbiAgICAgIF9idWZmZXJzOiBBcnJheSxcblxuICAgICAgX3ByZXZlbnRTY3JvbGxFdmVudDogQm9vbGVhbixcblxuICAgICAgX21heUhhdmVNb21lbnR1bTogQm9vbGVhbixcblxuICAgICAgX2luaXRpYWxpemVkOiBCb29sZWFuLFxuXG4gICAgICBhY3RpdmU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgb2JzZXJ2ZXI6ICdfYWN0aXZhdGVkJ1xuICAgICAgfVxuICAgIH07XG4gIH1cblxuICByZWFkeSgpIHtcbiAgICBzdXBlci5yZWFkeSgpO1xuXG4gICAgdGhpcy5fYnVmZmVycyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMucm9vdC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVmZmVyJykpO1xuXG4gICAgdGhpcy4kLmZ1bGxIZWlnaHQuc3R5bGUuaGVpZ2h0ID0gdGhpcy5faW5pdGlhbFNjcm9sbCAqIDIgKyAncHgnO1xuXG4gICAgdmFyIHRwbCA9IHRoaXMucXVlcnlTZWxlY3RvcigndGVtcGxhdGUnKTtcbiAgICB0aGlzLl9UZW1wbGF0ZUNsYXNzID0gdGVtcGxhdGl6ZSh0cGwsIHRoaXMsIHtcbiAgICAgIGZvcndhcmRIb3N0UHJvcDogZnVuY3Rpb24ocHJvcCwgdmFsdWUpIHtcbiAgICAgICAgaWYgKHByb3AgIT09ICdpbmRleCcpIHtcbiAgICAgICAgICB0aGlzLl9idWZmZXJzLmZvckVhY2goYnVmZmVyID0+IHtcbiAgICAgICAgICAgIFtdLmZvckVhY2guY2FsbChidWZmZXIuY2hpbGRyZW4sIGluc2VydGlvblBvaW50ID0+IHtcbiAgICAgICAgICAgICAgaW5zZXJ0aW9uUG9pbnQuX2l0ZW1XcmFwcGVyLmluc3RhbmNlW3Byb3BdID0gdmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gRmlyZWZveCBpbnRlcnByZXRzIGVsZW1lbnRzIHdpdGggb3ZlcmZsb3c6YXV0byBhcyBmb2N1c2FibGVcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD0xMDY5NzM5XG4gICAgdmFyIGlzRmlyZWZveCA9IG5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKS5pbmRleE9mKCdmaXJlZm94JykgPiAtMTtcbiAgICBpZiAoaXNGaXJlZm94KSB7XG4gICAgICB0aGlzLiQuc2Nyb2xsZXIudGFiSW5kZXggPSAtMTtcbiAgICB9XG4gIH1cblxuICBfYWN0aXZhdGVkKGFjdGl2ZSkge1xuICAgIGlmIChhY3RpdmUgJiYgIXRoaXMuX2luaXRpYWxpemVkKSB7XG4gICAgICB0aGlzLl9jcmVhdGVQb29sKCk7XG4gICAgICB0aGlzLl9pbml0aWFsaXplZCA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX2ZpbmlzaEluaXQoKSB7XG4gICAgaWYgKCF0aGlzLl9pbml0RG9uZSkge1xuICAgICAgLy8gT25jZSB0aGUgZmlyc3Qgc2V0IG9mIGl0ZW1zIHN0YXJ0IGZhZGluZyBpbiwgc3RhbXAgdGhlIHJlc3RcbiAgICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgICBbXS5mb3JFYWNoLmNhbGwoYnVmZmVyLmNoaWxkcmVuLFxuICAgICAgICAgIGluc2VydGlvblBvaW50ID0+IHRoaXMuX2Vuc3VyZVN0YW1wZWRJbnN0YW5jZShpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXIpKTtcbiAgICAgIH0sIHRoaXMpO1xuXG4gICAgICBpZiAoIXRoaXMuX2J1ZmZlcnNbMF0udHJhbnNsYXRlWSkge1xuICAgICAgICB0aGlzLl9yZXNldCgpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLl9pbml0RG9uZSA9IHRydWU7XG4gICAgfVxuICB9XG5cbiAgX3RyYW5zbGF0ZUJ1ZmZlcih1cCkge1xuICAgIHZhciBpbmRleCA9IHVwID8gMSA6IDA7XG4gICAgdGhpcy5fYnVmZmVyc1tpbmRleF0udHJhbnNsYXRlWSA9IHRoaXMuX2J1ZmZlcnNbKGluZGV4ID8gMCA6IDEpXS50cmFuc2xhdGVZICsgdGhpcy5fYnVmZmVySGVpZ2h0ICogKGluZGV4ID8gLTEgOiAxKTtcbiAgICB0aGlzLl9idWZmZXJzW2luZGV4XS5zdHlsZS50cmFuc2Zvcm0gPSAndHJhbnNsYXRlM2QoMCwgJyArIHRoaXMuX2J1ZmZlcnNbaW5kZXhdLnRyYW5zbGF0ZVkgKyAncHgsIDApJztcbiAgICB0aGlzLl9idWZmZXJzW2luZGV4XS51cGRhdGVkID0gZmFsc2U7XG4gICAgdGhpcy5fYnVmZmVycy5yZXZlcnNlKCk7XG4gIH1cblxuICBfc2Nyb2xsKCkge1xuICAgIGlmICh0aGlzLl9zY3JvbGxEaXNhYmxlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciBzY3JvbGxUb3AgPSB0aGlzLiQuc2Nyb2xsZXIuc2Nyb2xsVG9wO1xuICAgIGlmIChzY3JvbGxUb3AgPCB0aGlzLl9idWZmZXJIZWlnaHQgfHwgc2Nyb2xsVG9wID4gdGhpcy5faW5pdGlhbFNjcm9sbCAqIDIgLSB0aGlzLl9idWZmZXJIZWlnaHQpIHtcbiAgICAgIC8vIFNjcm9sbGVkIG5lYXIgdGhlIGVuZC9iZWdpbm5pbmcgb2YgdGhlIHNjcm9sbGFibGUgYXJlYSAtPiByZXNldC5cbiAgICAgIHRoaXMuX2luaXRpYWxJbmRleCA9IH5+dGhpcy5wb3NpdGlvbjtcbiAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgaWYgd2Ugc2Nyb2xsZWQgZW5vdWdoIHRvIHRyYW5zbGF0ZSB0aGUgYnVmZmVyIHBvc2l0aW9ucy5cbiAgICB2YXIgYnVmZmVyT2Zmc2V0ID0gdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3IoJy5idWZmZXInKS5vZmZzZXRUb3A7XG4gICAgdmFyIHVwcGVyVGhyZXNob2xkUmVhY2hlZCA9IHNjcm9sbFRvcCA+IHRoaXMuX2J1ZmZlcnNbMV0udHJhbnNsYXRlWSArIHRoaXMuaXRlbUhlaWdodCArIGJ1ZmZlck9mZnNldDtcbiAgICB2YXIgbG93ZXJUaHJlc2hvbGRSZWFjaGVkID0gc2Nyb2xsVG9wIDwgdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZICsgdGhpcy5pdGVtSGVpZ2h0ICsgYnVmZmVyT2Zmc2V0O1xuXG4gICAgaWYgKHVwcGVyVGhyZXNob2xkUmVhY2hlZCB8fCBsb3dlclRocmVzaG9sZFJlYWNoZWQpIHtcbiAgICAgIHRoaXMuX3RyYW5zbGF0ZUJ1ZmZlcihsb3dlclRocmVzaG9sZFJlYWNoZWQpO1xuICAgICAgdGhpcy5fdXBkYXRlQ2xvbmVzKCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9wcmV2ZW50U2Nyb2xsRXZlbnQpIHtcbiAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2N1c3RvbS1zY3JvbGwnLCB7YnViYmxlczogZmFsc2UsIGNvbXBvc2VkOiB0cnVlfSkpO1xuICAgICAgdGhpcy5fbWF5SGF2ZU1vbWVudHVtID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy5fcHJldmVudFNjcm9sbEV2ZW50ID0gZmFsc2U7XG5cbiAgICB0aGlzLl9kZWJvdW5jZXJTY3JvbGxGaW5pc2ggPSBEZWJvdW5jZXIuZGVib3VuY2UodGhpcy5fZGVib3VuY2VyU2Nyb2xsRmluaXNoLFxuICAgICAgdGltZU91dC5hZnRlcigyMDApLCAoKSA9PiB7XG4gICAgICAgIHZhciBzY3JvbGxlclJlY3QgPSB0aGlzLiQuc2Nyb2xsZXIuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgIGlmICghdGhpcy5faXNWaXNpYmxlKHRoaXMuX2J1ZmZlcnNbMF0sIHNjcm9sbGVyUmVjdCkgJiYgIXRoaXMuX2lzVmlzaWJsZSh0aGlzLl9idWZmZXJzWzFdLCBzY3JvbGxlclJlY3QpKSB7XG4gICAgICAgICAgdGhpcy5wb3NpdGlvbiA9IHRoaXMucG9zaXRpb247XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIEN1cnJlbnQgc2Nyb2xsZXIgcG9zaXRpb24gYXMgaW5kZXguIENhbiBiZSBhIGZyYWN0aW9uYWwgbnVtYmVyLlxuICAgKlxuICAgKiBAdHlwZSB7TnVtYmVyfVxuICAgKi9cbiAgc2V0IHBvc2l0aW9uKGluZGV4KSB7XG4gICAgdGhpcy5fcHJldmVudFNjcm9sbEV2ZW50ID0gdHJ1ZTtcbiAgICBpZiAoaW5kZXggPiB0aGlzLl9maXJzdEluZGV4ICYmIGluZGV4IDwgdGhpcy5fZmlyc3RJbmRleCArIHRoaXMuYnVmZmVyU2l6ZSAqIDIpIHtcbiAgICAgIHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3AgPSB0aGlzLml0ZW1IZWlnaHQgKiAoaW5kZXggLSB0aGlzLl9maXJzdEluZGV4KSArIHRoaXMuX2J1ZmZlcnNbMF0udHJhbnNsYXRlWTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faW5pdGlhbEluZGV4ID0gfn5pbmRleDtcbiAgICAgIHRoaXMuX3Jlc2V0KCk7XG4gICAgICB0aGlzLl9zY3JvbGxEaXNhYmxlZCA9IHRydWU7XG4gICAgICB0aGlzLiQuc2Nyb2xsZXIuc2Nyb2xsVG9wICs9IGluZGV4ICUgMSAqIHRoaXMuaXRlbUhlaWdodDtcbiAgICAgIHRoaXMuX3Njcm9sbERpc2FibGVkID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX21heUhhdmVNb21lbnR1bSkge1xuICAgICAgLy8gU3RvcCB0aGUgcG9zc2libGUgaU9TIFNhZmFyaSBtb21lbnR1bSB3aXRoIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiBhdXRvO1xuICAgICAgdGhpcy4kLnNjcm9sbGVyLmNsYXNzTGlzdC5hZGQoJ25vdG91Y2hzY3JvbGwnKTtcbiAgICAgIHRoaXMuX21heUhhdmVNb21lbnR1bSA9IGZhbHNlO1xuXG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgLy8gUmVzdG9yZSAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7IGFmdGVyIGEgc21hbGwgZGVsYXkuXG4gICAgICAgIHRoaXMuJC5zY3JvbGxlci5jbGFzc0xpc3QucmVtb3ZlKCdub3RvdWNoc2Nyb2xsJyk7XG4gICAgICB9LCAxMCk7XG4gICAgfVxuXG4gIH1cblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGdldCBwb3NpdGlvbigpIHtcbiAgICByZXR1cm4gKHRoaXMuJC5zY3JvbGxlci5zY3JvbGxUb3AgLSB0aGlzLl9idWZmZXJzWzBdLnRyYW5zbGF0ZVkpIC8gdGhpcy5pdGVtSGVpZ2h0ICsgdGhpcy5fZmlyc3RJbmRleDtcbiAgfVxuXG4gIGdldCBpdGVtSGVpZ2h0KCkge1xuICAgIGlmICghdGhpcy5faXRlbUhlaWdodFZhbCkge1xuICAgICAgaWYgKCEod2luZG93LlNoYWR5Q1NTICYmIHdpbmRvdy5TaGFkeUNTUy5uYXRpdmVDc3MpKSB7XG4gICAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGl0ZW1IZWlnaHQgPSB3aW5kb3cuU2hhZHlDU1NcbiAgICAgICAgPyB3aW5kb3cuU2hhZHlDU1MuZ2V0Q29tcHV0ZWRTdHlsZVZhbHVlKHRoaXMsICctLXZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1pdGVtLWhlaWdodCcpXG4gICAgICAgIDogZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzKS5nZXRQcm9wZXJ0eVZhbHVlKCctLXZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1pdGVtLWhlaWdodCcpO1xuICAgICAgLy8gVXNlIGJhY2tncm91bmQtcG9zaXRpb24gdGVtcCBpbmxpbmUgc3R5bGUgZm9yIHVuaXQgY29udmVyc2lvblxuICAgICAgY29uc3QgdG1wU3R5bGVQcm9wID0gJ2JhY2tncm91bmQtcG9zaXRpb24nO1xuICAgICAgdGhpcy4kLmZ1bGxIZWlnaHQuc3R5bGUuc2V0UHJvcGVydHkodG1wU3R5bGVQcm9wLCBpdGVtSGVpZ2h0KTtcbiAgICAgIGNvbnN0IGl0ZW1IZWlnaHRQeCA9IGdldENvbXB1dGVkU3R5bGUodGhpcy4kLmZ1bGxIZWlnaHQpLmdldFByb3BlcnR5VmFsdWUodG1wU3R5bGVQcm9wKTtcbiAgICAgIHRoaXMuJC5mdWxsSGVpZ2h0LnN0eWxlLnJlbW92ZVByb3BlcnR5KHRtcFN0eWxlUHJvcCk7XG4gICAgICB0aGlzLl9pdGVtSGVpZ2h0VmFsID0gcGFyc2VGbG9hdChpdGVtSGVpZ2h0UHgpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLl9pdGVtSGVpZ2h0VmFsO1xuICB9XG5cbiAgZ2V0IF9idWZmZXJIZWlnaHQoKSB7XG4gICAgcmV0dXJuIHRoaXMuaXRlbUhlaWdodCAqIHRoaXMuYnVmZmVyU2l6ZTtcbiAgfVxuXG4gIF9yZXNldCgpIHtcbiAgICB0aGlzLl9zY3JvbGxEaXNhYmxlZCA9IHRydWU7XG4gICAgdGhpcy4kLnNjcm9sbGVyLnNjcm9sbFRvcCA9IHRoaXMuX2luaXRpYWxTY3JvbGw7XG4gICAgdGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZID0gdGhpcy5faW5pdGlhbFNjcm9sbCAtIHRoaXMuX2J1ZmZlckhlaWdodDtcbiAgICB0aGlzLl9idWZmZXJzWzFdLnRyYW5zbGF0ZVkgPSB0aGlzLl9pbml0aWFsU2Nyb2xsO1xuICAgIHRoaXMuX2J1ZmZlcnMuZm9yRWFjaChidWZmZXIgPT4ge1xuICAgICAgYnVmZmVyLnN0eWxlLnRyYW5zZm9ybSA9ICd0cmFuc2xhdGUzZCgwLCAnICsgYnVmZmVyLnRyYW5zbGF0ZVkgKyAncHgsIDApJztcbiAgICB9KTtcbiAgICB0aGlzLl9idWZmZXJzWzBdLnVwZGF0ZWQgPSB0aGlzLl9idWZmZXJzWzFdLnVwZGF0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl91cGRhdGVDbG9uZXModHJ1ZSk7XG5cbiAgICB0aGlzLl9kZWJvdW5jZXJVcGRhdGVDbG9uZXMgPSBEZWJvdW5jZXIuZGVib3VuY2UoXG4gICAgICB0aGlzLl9kZWJvdW5jZXJVcGRhdGVDbG9uZXMsXG4gICAgICB0aW1lT3V0LmFmdGVyKDIwMCksICgpID0+IHtcbiAgICAgICAgdGhpcy5fYnVmZmVyc1swXS51cGRhdGVkID0gdGhpcy5fYnVmZmVyc1sxXS51cGRhdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3VwZGF0ZUNsb25lcygpO1xuICAgICAgfSk7XG5cbiAgICB0aGlzLl9zY3JvbGxEaXNhYmxlZCA9IGZhbHNlO1xuICB9XG5cbiAgX2NyZWF0ZVBvb2woKSB7XG4gICAgdmFyIGNvbnRhaW5lciA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgdGhpcy5fYnVmZmVycy5mb3JFYWNoKGJ1ZmZlciA9PiB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuYnVmZmVyU2l6ZTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IGl0ZW1XcmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGl0ZW1XcmFwcGVyLnN0eWxlLmhlaWdodCA9IHRoaXMuaXRlbUhlaWdodCArICdweCc7XG4gICAgICAgIGl0ZW1XcmFwcGVyLmluc3RhbmNlID0ge307XG5cbiAgICAgICAgY29uc3QgY29udGVudElkID0gSW5maW5pdGVTY3JvbGxlckVsZW1lbnQuX2NvbnRlbnRJbmRleCA9IEluZmluaXRlU2Nyb2xsZXJFbGVtZW50Ll9jb250ZW50SW5kZXggKyAxIHx8IDA7XG4gICAgICAgIGNvbnN0IHNsb3ROYW1lID0gJ3ZhYWRpbi1pbmZpbml0ZS1zY3JvbGxlci1pdGVtLWNvbnRlbnQtJyArIGNvbnRlbnRJZDtcblxuICAgICAgICBjb25zdCBpbnNlcnRpb25Qb2ludCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3Nsb3QnKTtcbiAgICAgICAgaW5zZXJ0aW9uUG9pbnQuc2V0QXR0cmlidXRlKCduYW1lJywgc2xvdE5hbWUpO1xuICAgICAgICBpbnNlcnRpb25Qb2ludC5faXRlbVdyYXBwZXIgPSBpdGVtV3JhcHBlcjtcbiAgICAgICAgYnVmZmVyLmFwcGVuZENoaWxkKGluc2VydGlvblBvaW50KTtcblxuICAgICAgICBpdGVtV3JhcHBlci5zZXRBdHRyaWJ1dGUoJ3Nsb3QnLCBzbG90TmFtZSk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoaXRlbVdyYXBwZXIpO1xuXG4gICAgICAgIC8vIFRoaXMgaXMgbmVlZGVkIGJ5IElFXG4gICAgICAgIGZsdXNoKCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgLy8gT25seSBzdGFtcCB0aGUgdmlzaWJsZSBpbnN0YW5jZXMgZmlyc3RcbiAgICAgICAgICBpZiAodGhpcy5faXNWaXNpYmxlKGl0ZW1XcmFwcGVyLCBjb250YWluZXIpKSB7XG4gICAgICAgICAgICB0aGlzLl9lbnN1cmVTdGFtcGVkSW5zdGFuY2UoaXRlbVdyYXBwZXIpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgMSk7IC8vIFdhaXQgZm9yIGZpcnN0IHJlc2V0XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGFmdGVyTmV4dFJlbmRlcih0aGlzLCB0aGlzLl9maW5pc2hJbml0LmJpbmQodGhpcykpO1xuICAgIH0sIDEpO1xuICB9XG5cbiAgX2Vuc3VyZVN0YW1wZWRJbnN0YW5jZShpdGVtV3JhcHBlcikge1xuICAgIGlmIChpdGVtV3JhcHBlci5maXJzdEVsZW1lbnRDaGlsZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHZhciB0bXBJbnN0YW5jZSA9IGl0ZW1XcmFwcGVyLmluc3RhbmNlO1xuXG4gICAgaXRlbVdyYXBwZXIuaW5zdGFuY2UgPSBuZXcgdGhpcy5fVGVtcGxhdGVDbGFzcyh7fSk7XG4gICAgaXRlbVdyYXBwZXIuYXBwZW5kQ2hpbGQoaXRlbVdyYXBwZXIuaW5zdGFuY2Uucm9vdCk7XG5cbiAgICBPYmplY3Qua2V5cyh0bXBJbnN0YW5jZSkuZm9yRWFjaChwcm9wID0+IHtcbiAgICAgIGl0ZW1XcmFwcGVyLmluc3RhbmNlLnNldChwcm9wLCB0bXBJbnN0YW5jZVtwcm9wXSk7XG4gICAgfSk7XG4gIH1cblxuICBfdXBkYXRlQ2xvbmVzKHZpZXdQb3J0T25seSkge1xuICAgIHRoaXMuX2ZpcnN0SW5kZXggPSB+figodGhpcy5fYnVmZmVyc1swXS50cmFuc2xhdGVZIC0gdGhpcy5faW5pdGlhbFNjcm9sbCkgLyB0aGlzLml0ZW1IZWlnaHQpICsgdGhpcy5faW5pdGlhbEluZGV4O1xuXG4gICAgdmFyIHNjcm9sbGVyUmVjdCA9IHZpZXdQb3J0T25seSA/IHRoaXMuJC5zY3JvbGxlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSA6IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9idWZmZXJzLmZvckVhY2goKGJ1ZmZlciwgYnVmZmVySW5kZXgpID0+IHtcbiAgICAgIGlmICghYnVmZmVyLnVwZGF0ZWQpIHtcbiAgICAgICAgdmFyIGZpcnN0SW5kZXggPSB0aGlzLl9maXJzdEluZGV4ICsgdGhpcy5idWZmZXJTaXplICogYnVmZmVySW5kZXg7XG5cbiAgICAgICAgW10uZm9yRWFjaC5jYWxsKGJ1ZmZlci5jaGlsZHJlbiwgKGluc2VydGlvblBvaW50LCBpbmRleCkgPT4ge1xuICAgICAgICAgIGNvbnN0IGl0ZW1XcmFwcGVyID0gaW5zZXJ0aW9uUG9pbnQuX2l0ZW1XcmFwcGVyO1xuICAgICAgICAgIGlmICghdmlld1BvcnRPbmx5IHx8IHRoaXMuX2lzVmlzaWJsZShpdGVtV3JhcHBlciwgc2Nyb2xsZXJSZWN0KSkge1xuICAgICAgICAgICAgaXRlbVdyYXBwZXIuaW5zdGFuY2UuaW5kZXggPSBmaXJzdEluZGV4ICsgaW5kZXg7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgYnVmZmVyLnVwZGF0ZWQgPSB0cnVlO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuICB9XG5cbiAgX2lzVmlzaWJsZShlbGVtZW50LCBjb250YWluZXIpIHtcbiAgICB2YXIgcmVjdCA9IGVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgcmV0dXJuIHJlY3QuYm90dG9tID4gY29udGFpbmVyLnRvcCAmJiByZWN0LnRvcCA8IGNvbnRhaW5lci5ib3R0b207XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKEluZmluaXRlU2Nyb2xsZXJFbGVtZW50LmlzLCBJbmZpbml0ZVNjcm9sbGVyRWxlbWVudCk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTcgVmFhZGluIEx0ZC5cblRoaXMgcHJvZ3JhbSBpcyBhdmFpbGFibGUgdW5kZXIgQXBhY2hlIExpY2Vuc2UgVmVyc2lvbiAyLjAsIGF2YWlsYWJsZSBhdCBodHRwczovL3ZhYWRpbi5jb20vbGljZW5zZS9cbiovXG5pbXBvcnQgeyBQb2x5bWVyRWxlbWVudCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1lbGVtZW50LmpzJztcblxuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL2xpYi9lbGVtZW50cy9kb20tcmVwZWF0LmpzJztcbmltcG9ydCB7IEdlc3R1cmVFdmVudExpc3RlbmVycyB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL21peGlucy9nZXN0dXJlLWV2ZW50LWxpc3RlbmVycy5qcyc7XG5pbXBvcnQgeyBEYXRlUGlja2VySGVscGVyIH0gZnJvbSAnLi92YWFkaW4tZGF0ZS1waWNrZXItaGVscGVyLmpzJztcbmltcG9ydCB7IFRoZW1hYmxlTWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbi8qKlxuICogQG1lbWJlcm9mIFZhYWRpblxuICogQHByaXZhdGVcbiAqL1xuY2xhc3MgTW9udGhDYWxlbmRhckVsZW1lbnQgZXh0ZW5kcyBUaGVtYWJsZU1peGluKEdlc3R1cmVFdmVudExpc3RlbmVycyhQb2x5bWVyRWxlbWVudCkpIHtcbiAgc3RhdGljIGdldCB0ZW1wbGF0ZSgpIHtcbiAgICByZXR1cm4gaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIndlZWtkYXlzXCJdLFxuICAgICAgI2RheXMge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICAgIH1cblxuICAgICAgI2RheXMtY29udGFpbmVyLFxuICAgICAgI3dlZWtkYXlzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwid2Vlay1udW1iZXJzXCJdIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ3ZWVrLW51bWJlcnNcIl1baGlkZGVuXSxcbiAgICAgIFtwYXJ0PVwid2Vla2RheVwiXVtoaWRkZW5dIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdLFxuICAgICAgW3BhcnQ9XCJkYXRlXCJdIHtcbiAgICAgICAgLyogV291bGQgdXNlIGNhbGMoMTAwJSAvIDcpIGJ1dCBpdCBkb2Vzbid0IHdvcmsgbmljZSBvbiBJRSAqL1xuICAgICAgICB3aWR0aDogMTQuMjg1NzE0Mjg2JTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ3ZWVrZGF5XCJdOmVtcHR5LFxuICAgICAgW3BhcnQ9XCJ3ZWVrLW51bWJlcnNcIl0ge1xuICAgICAgICB3aWR0aDogMTIuNSU7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IHBhcnQ9XCJtb250aC1oZWFkZXJcIiByb2xlPVwiaGVhZGluZ1wiPltbX2dldFRpdGxlKG1vbnRoLCBpMThuLm1vbnRoTmFtZXMpXV08L2Rpdj5cbiAgICA8ZGl2IGlkPVwibW9udGhHcmlkXCIgb24tdGFwPVwiX2hhbmRsZVRhcFwiIG9uLXRvdWNoZW5kPVwiX3ByZXZlbnREZWZhdWx0XCIgb24tdG91Y2hzdGFydD1cIl9vbk1vbnRoR3JpZFRvdWNoU3RhcnRcIj5cbiAgICAgIDxkaXYgaWQ9XCJ3ZWVrZGF5cy1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBoaWRkZW49XCJbWyFfc2hvd1dlZWtTZXBhcmF0b3Ioc2hvd1dlZWtOdW1iZXJzLCBpMThuLmZpcnN0RGF5T2ZXZWVrKV1dXCIgcGFydD1cIndlZWtkYXlcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBwYXJ0PVwid2Vla2RheXNcIj5cbiAgICAgICAgICA8dGVtcGxhdGUgaXM9XCJkb20tcmVwZWF0XCIgaXRlbXM9XCJbW19nZXRXZWVrRGF5TmFtZXMoaTE4bi53ZWVrZGF5cywgaTE4bi53ZWVrZGF5c1Nob3J0LCBzaG93V2Vla051bWJlcnMsIGkxOG4uZmlyc3REYXlPZldlZWspXV1cIj5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cIndlZWtkYXlcIiByb2xlPVwiaGVhZGluZ1wiIGFyaWEtbGFiZWxcXCQ9XCJbW2l0ZW0ud2Vla0RheV1dXCI+W1tpdGVtLndlZWtEYXlTaG9ydF1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgaWQ9XCJkYXlzLWNvbnRhaW5lclwiPlxuICAgICAgICA8ZGl2IHBhcnQ9XCJ3ZWVrLW51bWJlcnNcIiBoaWRkZW49XCJbWyFfc2hvd1dlZWtTZXBhcmF0b3Ioc2hvd1dlZWtOdW1iZXJzLCBpMThuLmZpcnN0RGF5T2ZXZWVrKV1dXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfZ2V0V2Vla051bWJlcnMoX2RheXMpXV1cIj5cbiAgICAgICAgICAgIDxkaXYgcGFydD1cIndlZWstbnVtYmVyXCIgcm9sZT1cImhlYWRpbmdcIiBhcmlhLWxhYmVsXFwkPVwiW1tpMThuLndlZWtdXSBbW2l0ZW1dXVwiPltbaXRlbV1dPC9kaXY+XG4gICAgICAgICAgPC90ZW1wbGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgaWQ9XCJkYXlzXCI+XG4gICAgICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLXJlcGVhdFwiIGl0ZW1zPVwiW1tfZGF5c11dXCI+XG4gICAgICAgICAgICA8ZGl2IHBhcnQ9XCJkYXRlXCIgdG9kYXlcXCQ9XCJbW19pc1RvZGF5KGl0ZW0pXV1cIiBzZWxlY3RlZFxcJD1cIltbX2RhdGVFcXVhbHMoaXRlbSwgc2VsZWN0ZWREYXRlKV1dXCIgZm9jdXNlZFxcJD1cIltbX2RhdGVFcXVhbHMoaXRlbSwgZm9jdXNlZERhdGUpXV1cIiBkYXRlPVwiW1tpdGVtXV1cIiBkaXNhYmxlZFxcJD1cIltbIV9kYXRlQWxsb3dlZChpdGVtLCBtaW5EYXRlLCBtYXhEYXRlKV1dXCIgcm9sZVxcJD1cIltbX2dldFJvbGUoaXRlbSldXVwiIGFyaWEtbGFiZWxcXCQ9XCJbW19nZXRBcmlhTGFiZWwoaXRlbSldXVwiIGFyaWEtZGlzYWJsZWRcXCQ9XCJbW19nZXRBcmlhRGlzYWJsZWQoaXRlbSwgbWluRGF0ZSwgbWF4RGF0ZSldXVwiPltbX2dldERhdGUoaXRlbSldXTwvZGl2PlxuICAgICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5gO1xuICB9XG5cbiAgc3RhdGljIGdldCBpcygpIHtcbiAgICByZXR1cm4gJ3ZhYWRpbi1tb250aC1jYWxlbmRhcic7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogQSBgRGF0ZWAgb2JqZWN0IGRlZmluaW5nIHRoZSBtb250aCB0byBiZSBkaXNwbGF5ZWQuIE9ubHkgeWVhciBhbmRcbiAgICAgICAqIG1vbnRoIHByb3BlcnRpZXMgYXJlIGFjdHVhbGx5IHVzZWQuXG4gICAgICAgKi9cbiAgICAgIG1vbnRoOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIHZhbHVlOiBuZXcgRGF0ZSgpXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgYERhdGVgIG9iamVjdCBmb3IgdGhlIGN1cnJlbnRseSBzZWxlY3RlZCBkYXRlLlxuICAgICAgICovXG4gICAgICBzZWxlY3RlZERhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgbm90aWZ5OiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgYERhdGVgIG9iamVjdCBmb3IgdGhlIGN1cnJlbnRseSBmb2N1c2VkIGRhdGUuXG4gICAgICAgKi9cbiAgICAgIGZvY3VzZWREYXRlOiBEYXRlLFxuXG4gICAgICBzaG93V2Vla051bWJlcnM6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICBpMThuOiB7XG4gICAgICAgIHR5cGU6IE9iamVjdFxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBGbGFnIHN0YXRpbmcgd2hldGhlciB0YXBzIG9uIHRoZSBjb21wb25lbnQgc2hvdWxkIGJlIGlnbm9yZWQuXG4gICAgICAgKi9cbiAgICAgIGlnbm9yZVRhcHM6IEJvb2xlYW4sXG5cbiAgICAgIF9ub3RUYXBwaW5nOiBCb29sZWFuLFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBlYXJsaWVzdCBkYXRlIHRoYXQgY2FuIGJlIHNlbGVjdGVkLiBBbGwgZWFybGllciBkYXRlcyB3aWxsIGJlIGRpc2FibGVkLlxuICAgICAgICovXG4gICAgICBtaW5EYXRlOiB7XG4gICAgICAgIHR5cGU6IERhdGUsXG4gICAgICAgIHZhbHVlOiBudWxsXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoZSBsYXRlc3QgZGF0ZSB0aGF0IGNhbiBiZSBzZWxlY3RlZC4gQWxsIGxhdGVyIGRhdGVzIHdpbGwgYmUgZGlzYWJsZWQuXG4gICAgICAgKi9cbiAgICAgIG1heERhdGU6IHtcbiAgICAgICAgdHlwZTogRGF0ZSxcbiAgICAgICAgdmFsdWU6IG51bGxcbiAgICAgIH0sXG5cbiAgICAgIF9kYXlzOiB7XG4gICAgICAgIHR5cGU6IEFycmF5LFxuICAgICAgICBjb21wdXRlZDogJ19nZXREYXlzKG1vbnRoLCBpMThuLmZpcnN0RGF5T2ZXZWVrLCBtaW5EYXRlLCBtYXhEYXRlKSdcbiAgICAgIH0sXG5cbiAgICAgIGRpc2FibGVkOiB7XG4gICAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICAgIHJlZmxlY3RUb0F0dHJpYnV0ZTogdHJ1ZSxcbiAgICAgICAgY29tcHV0ZWQ6ICdfaXNEaXNhYmxlZChtb250aCwgbWluRGF0ZSwgbWF4RGF0ZSknXG4gICAgICB9XG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbXG4gICAgICAnX3Nob3dXZWVrTnVtYmVyc0NoYW5nZWQoc2hvd1dlZWtOdW1iZXJzLCBpMThuLmZpcnN0RGF5T2ZXZWVrKSdcbiAgICBdO1xuICB9XG5cbiAgX2RhdGVFcXVhbHMoZGF0ZTEsIGRhdGUyKSB7XG4gICAgcmV0dXJuIERhdGVQaWNrZXJIZWxwZXIuX2RhdGVFcXVhbHMoZGF0ZTEsIGRhdGUyKTtcbiAgfVxuXG4gIF9kYXRlQWxsb3dlZChkYXRlLCBtaW4sIG1heCkge1xuICAgIHJldHVybiBEYXRlUGlja2VySGVscGVyLl9kYXRlQWxsb3dlZChkYXRlLCBtaW4sIG1heCk7XG4gIH1cblxuICAvKiBSZXR1cm5zIHRydWUgaWYgYWxsIHRoZSBkYXRlcyBpbiB0aGUgbW9udGggYXJlIG91dCBvZiB0aGUgYWxsb3dlZCByYW5nZSAqL1xuICBfaXNEaXNhYmxlZChtb250aCwgbWluRGF0ZSwgbWF4RGF0ZSkge1xuICAgIC8vIEZpcnN0IGRheSBvZiB0aGUgbW9udGhcbiAgICB2YXIgZmlyc3REYXRlID0gbmV3IERhdGUoMCwgMCk7XG4gICAgZmlyc3REYXRlLnNldEZ1bGxZZWFyKG1vbnRoLmdldEZ1bGxZZWFyKCkpO1xuICAgIGZpcnN0RGF0ZS5zZXRNb250aChtb250aC5nZXRNb250aCgpKTtcbiAgICBmaXJzdERhdGUuc2V0RGF0ZSgxKTtcblxuICAgIC8vIExhc3QgZGF5IG9mIHRoZSBtb250aFxuICAgIHZhciBsYXN0RGF0ZSA9IG5ldyBEYXRlKDAsIDApO1xuICAgIGxhc3REYXRlLnNldEZ1bGxZZWFyKG1vbnRoLmdldEZ1bGxZZWFyKCkpO1xuICAgIGxhc3REYXRlLnNldE1vbnRoKG1vbnRoLmdldE1vbnRoKCkgKyAxKTtcbiAgICBsYXN0RGF0ZS5zZXREYXRlKDApO1xuXG4gICAgaWYgKChtaW5EYXRlICYmIG1heERhdGUpXG4gICAgICAmJiBtaW5EYXRlLmdldE1vbnRoKCkgPT09IG1heERhdGUuZ2V0TW9udGgoKVxuICAgICAgJiYgbWluRGF0ZS5nZXRNb250aCgpID09PSBtb250aC5nZXRNb250aCgpXG4gICAgICAmJiBtYXhEYXRlLmdldERhdGUoKSAtIG1pbkRhdGUuZ2V0RGF0ZSgpID49IDApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICByZXR1cm4gIXRoaXMuX2RhdGVBbGxvd2VkKGZpcnN0RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSlcbiAgICAgICYmICF0aGlzLl9kYXRlQWxsb3dlZChsYXN0RGF0ZSwgbWluRGF0ZSwgbWF4RGF0ZSk7XG4gIH1cblxuICBfZ2V0VGl0bGUobW9udGgsIG1vbnRoTmFtZXMpIHtcbiAgICBpZiAobW9udGggPT09IHVuZGVmaW5lZCB8fCBtb250aE5hbWVzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuaTE4bi5mb3JtYXRUaXRsZShtb250aE5hbWVzW21vbnRoLmdldE1vbnRoKCldLCBtb250aC5nZXRGdWxsWWVhcigpKTtcbiAgfVxuXG4gIF9vbk1vbnRoR3JpZFRvdWNoU3RhcnQoKSB7XG4gICAgdGhpcy5fbm90VGFwcGluZyA9IGZhbHNlO1xuICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5fbm90VGFwcGluZyA9IHRydWUsIDMwMCk7XG4gIH1cblxuICBfZGF0ZUFkZChkYXRlLCBkZWx0YSkge1xuICAgIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGRlbHRhKTtcbiAgfVxuXG4gIF9hcHBseUZpcnN0RGF5T2ZXZWVrKHdlZWtEYXlOYW1lcywgZmlyc3REYXlPZldlZWspIHtcbiAgICBpZiAod2Vla0RheU5hbWVzID09PSB1bmRlZmluZWQgfHwgZmlyc3REYXlPZldlZWsgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHJldHVybiB3ZWVrRGF5TmFtZXMuc2xpY2UoZmlyc3REYXlPZldlZWspLmNvbmNhdCh3ZWVrRGF5TmFtZXMuc2xpY2UoMCwgZmlyc3REYXlPZldlZWspKTtcbiAgfVxuXG4gIF9nZXRXZWVrRGF5TmFtZXMod2Vla0RheU5hbWVzLCB3ZWVrRGF5TmFtZXNTaG9ydCwgc2hvd1dlZWtOdW1iZXJzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIGlmICh3ZWVrRGF5TmFtZXMgPT09IHVuZGVmaW5lZCB8fCB3ZWVrRGF5TmFtZXNTaG9ydCA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICBzaG93V2Vla051bWJlcnMgPT09IHVuZGVmaW5lZCB8fCBmaXJzdERheU9mV2VlayA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlZWtEYXlOYW1lcyA9IHRoaXMuX2FwcGx5Rmlyc3REYXlPZldlZWsod2Vla0RheU5hbWVzLCBmaXJzdERheU9mV2Vlayk7XG4gICAgd2Vla0RheU5hbWVzU2hvcnQgPSB0aGlzLl9hcHBseUZpcnN0RGF5T2ZXZWVrKHdlZWtEYXlOYW1lc1Nob3J0LCBmaXJzdERheU9mV2Vlayk7XG4gICAgd2Vla0RheU5hbWVzID0gd2Vla0RheU5hbWVzLm1hcCgoZGF5LCBpbmRleCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgd2Vla0RheTogZGF5LFxuICAgICAgICB3ZWVrRGF5U2hvcnQ6IHdlZWtEYXlOYW1lc1Nob3J0W2luZGV4XVxuICAgICAgfTtcbiAgICB9KTtcblxuICAgIHJldHVybiB3ZWVrRGF5TmFtZXM7XG4gIH1cblxuICBfZ2V0RGF0ZShkYXRlKSB7XG4gICAgcmV0dXJuIGRhdGUgPyBkYXRlLmdldERhdGUoKSA6ICcnO1xuICB9XG5cbiAgX3Nob3dXZWVrTnVtYmVyc0NoYW5nZWQoc2hvd1dlZWtOdW1iZXJzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIGlmIChzaG93V2Vla051bWJlcnMgJiYgZmlyc3REYXlPZldlZWsgPT09IDEpIHtcbiAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCd3ZWVrLW51bWJlcnMnLCAnJyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVtb3ZlQXR0cmlidXRlKCd3ZWVrLW51bWJlcnMnKTtcbiAgICB9XG4gIH1cblxuICBfc2hvd1dlZWtTZXBhcmF0b3Ioc2hvd1dlZWtOdW1iZXJzLCBmaXJzdERheU9mV2Vlaykge1xuICAgIC8vIEN1cnJlbnRseSBvbmx5IHN1cHBvcnRlZCBmb3IgbG9jYWxlcyB0aGF0IHN0YXJ0IHRoZSB3ZWVrIG9uIE1vbmRheS5cbiAgICByZXR1cm4gc2hvd1dlZWtOdW1iZXJzICYmIGZpcnN0RGF5T2ZXZWVrID09PSAxO1xuICB9XG5cbiAgX2lzVG9kYXkoZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLl9kYXRlRXF1YWxzKG5ldyBEYXRlKCksIGRhdGUpO1xuICB9XG5cbiAgX2dldERheXMobW9udGgsIGZpcnN0RGF5T2ZXZWVrKSB7XG4gICAgaWYgKG1vbnRoID09PSB1bmRlZmluZWQgfHwgZmlyc3REYXlPZldlZWsgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICAvLyBGaXJzdCBkYXkgb2YgdGhlIG1vbnRoIChhdCBtaWRuaWdodCkuXG4gICAgdmFyIGRhdGUgPSBuZXcgRGF0ZSgwLCAwKTtcbiAgICBkYXRlLnNldEZ1bGxZZWFyKG1vbnRoLmdldEZ1bGxZZWFyKCkpO1xuICAgIGRhdGUuc2V0TW9udGgobW9udGguZ2V0TW9udGgoKSk7XG4gICAgZGF0ZS5zZXREYXRlKDEpO1xuXG4gICAgLy8gUmV3aW5kIHRvIGZpcnN0IGRheSBvZiB0aGUgd2Vlay5cbiAgICB3aGlsZSAoZGF0ZS5nZXREYXkoKSAhPT0gZmlyc3REYXlPZldlZWspIHtcbiAgICAgIHRoaXMuX2RhdGVBZGQoZGF0ZSwgLTEpO1xuICAgIH1cblxuICAgIHZhciBkYXlzID0gW107XG4gICAgdmFyIHN0YXJ0TW9udGggPSBkYXRlLmdldE1vbnRoKCk7XG4gICAgdmFyIHRhcmdldE1vbnRoID0gbW9udGguZ2V0TW9udGgoKTtcbiAgICB3aGlsZSAoZGF0ZS5nZXRNb250aCgpID09PSB0YXJnZXRNb250aCB8fCBkYXRlLmdldE1vbnRoKCkgPT09IHN0YXJ0TW9udGgpIHtcbiAgICAgIGRheXMucHVzaChkYXRlLmdldE1vbnRoKCkgPT09IHRhcmdldE1vbnRoID8gbmV3IERhdGUoZGF0ZS5nZXRUaW1lKCkpIDogbnVsbCk7XG5cbiAgICAgIC8vIEFkdmFuY2UgdG8gbmV4dCBkYXkuXG4gICAgICB0aGlzLl9kYXRlQWRkKGRhdGUsIDEpO1xuICAgIH1cbiAgICByZXR1cm4gZGF5cztcbiAgfVxuXG4gIF9nZXRXZWVrTnVtYmVyKGRhdGUsIGRheXMpIHtcbiAgICBpZiAoZGF0ZSA9PT0gdW5kZWZpbmVkIHx8IGRheXMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghZGF0ZSkge1xuICAgICAgLy8gR2V0IHRoZSBmaXJzdCBub24tbnVsbCBkYXRlIGZyb20gdGhlIGRheXMgYXJyYXkuXG4gICAgICBkYXRlID0gZGF5cy5yZWR1Y2UoKGFjYywgZCkgPT4ge1xuICAgICAgICByZXR1cm4gIWFjYyAmJiBkID8gZCA6IGFjYztcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBEYXRlUGlja2VySGVscGVyLl9nZXRJU09XZWVrTnVtYmVyKGRhdGUpO1xuICB9XG5cbiAgX2dldFdlZWtOdW1iZXJzKGRhdGVzKSB7XG4gICAgcmV0dXJuIGRhdGVzXG4gICAgICAubWFwKGRhdGUgPT4gdGhpcy5fZ2V0V2Vla051bWJlcihkYXRlLCBkYXRlcykpXG4gICAgICAuZmlsdGVyKCh3ZWVrLCBpbmRleCwgYXJyKSA9PiBhcnIuaW5kZXhPZih3ZWVrKSA9PT0gaW5kZXgpO1xuICB9XG5cbiAgX2hhbmRsZVRhcChlKSB7XG4gICAgaWYgKCF0aGlzLmlnbm9yZVRhcHMgJiYgIXRoaXMuX25vdFRhcHBpbmcgJiYgZS50YXJnZXQuZGF0ZSAmJiAhZS50YXJnZXQuaGFzQXR0cmlidXRlKCdkaXNhYmxlZCcpKSB7XG4gICAgICB0aGlzLnNlbGVjdGVkRGF0ZSA9IGUudGFyZ2V0LmRhdGU7XG4gICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdkYXRlLXRhcCcsIHtidWJibGVzOiB0cnVlLCBjb21wb3NlZDogdHJ1ZX0pKTtcbiAgICB9XG4gIH1cblxuICBfcHJldmVudERlZmF1bHQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfVxuXG4gIF9nZXRSb2xlKGRhdGUpIHtcbiAgICByZXR1cm4gZGF0ZSA/ICdidXR0b24nIDogJ3ByZXNlbnRhdGlvbic7XG4gIH1cblxuICBfZ2V0QXJpYUxhYmVsKGRhdGUpIHtcbiAgICBpZiAoIWRhdGUpIHtcbiAgICAgIHJldHVybiAnJztcbiAgICB9XG5cbiAgICB2YXIgYXJpYUxhYmVsID0gdGhpcy5fZ2V0RGF0ZShkYXRlKSArICcgJyArXG4gICAgICB0aGlzLmkxOG4ubW9udGhOYW1lc1tkYXRlLmdldE1vbnRoKCldICsgJyAnICtcbiAgICAgIGRhdGUuZ2V0RnVsbFllYXIoKSArICcsICcgK1xuICAgICAgdGhpcy5pMThuLndlZWtkYXlzW2RhdGUuZ2V0RGF5KCldO1xuXG4gICAgaWYgKHRoaXMuX2lzVG9kYXkoZGF0ZSkpIHtcbiAgICAgIGFyaWFMYWJlbCArPSAnLCAnICsgdGhpcy5pMThuLnRvZGF5O1xuICAgIH1cblxuICAgIHJldHVybiBhcmlhTGFiZWw7XG4gIH1cblxuICBfZ2V0QXJpYURpc2FibGVkKGRhdGUsIG1pbiwgbWF4KSB7XG4gICAgaWYgKGRhdGUgPT09IHVuZGVmaW5lZCB8fCBtaW4gPT09IHVuZGVmaW5lZCB8fCBtYXggPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZGF0ZUFsbG93ZWQoZGF0ZSwgbWluLCBtYXgpID8gJ2ZhbHNlJyA6ICd0cnVlJztcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoTW9udGhDYWxlbmRhckVsZW1lbnQuaXMsIE1vbnRoQ2FsZW5kYXJFbGVtZW50KTtcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2ZvbnQtaWNvbnMuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvdHlwb2dyYXBoeS5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9zaGFkb3cuanMnO1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1idXR0b24vdGhlbWUvbWF0ZXJpYWwvdmFhZGluLWJ1dHRvbi5qcyc7XG5pbXBvcnQgeyBodG1sIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvaHRtbC10YWcuanMnO1xuXG5jb25zdCAkX2RvY3VtZW50Q29udGFpbmVyID0gaHRtbGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudFwiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1hdGVyaWFsLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1ib2R5LWZvbnQtc2l6ZSk7XG4gICAgICAgIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcblxuICAgICAgICAvKiBGSVhNRShwbGF0b3NoYSk6IGZpeCB0aGUgY29yZSBzdHlsZXMgYW5kIHJlbW92ZSB0aGlzIG92ZXJyaWRlLiAqL1xuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2Z1bGxzY3JlZW5dKSB7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIH1cblxuICAgICAgLyogRnVsbHNjcmVlbiBUb29sYmFyICovXG5cbiAgICAgIFtwYXJ0PVwib3ZlcmxheS1oZWFkZXJcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogYmFzZWxpbmU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMjtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcik7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29sb3IpO1xuICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IHZhcigtLW1hdGVyaWFsLXNoYWRvdy1lbGV2YXRpb24tNGRwKTtcbiAgICAgIH1cblxuICAgICAgLyogRklYTUUocGxhdG9zaGEpOiBmaXggdGhlIGNvcmUgc3R5bGVzIGFuZCByZW1vdmUgdGhpcyBvdmVycmlkZS4gKi9cbiAgICAgIFtwYXJ0PVwib3ZlcmxheS1oZWFkZXJcIl06bm90KFtkZXNrdG9wXSkge1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogOHB4O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgcGFkZGluZzogMCA4cHg7XG4gICAgICAgIGZsZXg6IGF1dG87XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdLFxuICAgICAgW3BhcnQ9XCJ0b2dnbGUtYnV0dG9uXCJdIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdtYXRlcmlhbC1pY29ucyc7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtaWNvbi1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgd2lkdGg6IDI0cHg7XG4gICAgICAgIGhlaWdodDogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXSxcbiAgICAgIFtwYXJ0PVwidG9nZ2xlLWJ1dHRvblwiXSxcbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDhweDtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06aG92ZXIsXG4gICAgICBbcGFydD1cInRvZ2dsZS1idXR0b25cIl06aG92ZXIsXG4gICAgICBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl06aG92ZXIge1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJjbGVhci1idXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IHZhcigtLW1hdGVyaWFsLWljb25zLWNsZWFyKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1tYXRlcmlhbC1pY29ucy1jYWxlbmRhcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhcnMtdG9nZ2xlLWJ1dHRvblwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiBzdGF0aWM7XG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtYm9keS1mb250LXNpemUpO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuMDVlbTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ5ZWFycy10b2dnbGUtYnV0dG9uXCJdOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IHZhcigtLW1hdGVyaWFsLWljb25zLXBsYXkpO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICBmb250LWZhbWlseTogJ21hdGVyaWFsLWljb25zJztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1pY29uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAxMDBtcyBjdWJpYy1iZXppZXIoLjQsIDAsIC4yLCAxKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3llYXJzLXZpc2libGVdKSBbcGFydD1cInllYXJzLXRvZ2dsZS1idXR0b25cIl06OmFmdGVyIHtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpO1xuICAgICAgfVxuXG4gICAgICAvKiBNb250aCBzY3JvbGxlciAqL1xuXG4gICAgICBbcGFydD1cIm1vbnRoc1wiXSB7XG4gICAgICAgIC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0OiAzMjBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAvKiBZZWFyIHNjcm9sbGVyICovXG5cbiAgICAgIFtwYXJ0PVwieWVhcnNcIl0ge1xuICAgICAgICB6LWluZGV4OiAxO1xuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXJzXCJdOjpiZWZvcmUge1xuICAgICAgICB6LWluZGV4OiAyO1xuICAgICAgICBib3JkZXI6IDA7XG4gICAgICAgIHdpZHRoOiA4cHg7XG4gICAgICAgIGhlaWdodDogOHB4O1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSkgcm90YXRlKC00NWRlZyk7XG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLW1hdGVyaWFsLWJhY2tncm91bmQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbeWVhcnMtdmlzaWJsZV0pIFtwYXJ0PVwieWVhcnNcIl06OmFmdGVyIHtcbiAgICAgICAgdG9wOiBjYWxjKDIwcHggKyAxNnB4KTtcbiAgICAgICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAyMHB4IC0gMTZweCk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwieWVhci1udW1iZXJcIl0ge1xuICAgICAgICBmb250LXNpemU6IHZhcigtLW1hdGVyaWFsLXNtYWxsLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxMHB4OyAvKiBOT1RFKHBsYXRvc2hhKTogY2hvc2VuIHRvIGFsaWduIHllYXJzIHRvIG1vbnRocyAqL1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInllYXItc2VwYXJhdG9yXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xuICAgICAgICB3aWR0aDogNHB4O1xuICAgICAgICBoZWlnaHQ6IDRweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBtYXJnaW46IGNhbGMoMC41ICogdmFyKC0tdmFhZGluLWluZmluaXRlLXNjcm9sbGVyLWl0ZW0taGVpZ2h0LCA4MHB4KSAtIDAuNSAqIDEwcHggLSAwLjUgKiA0cHgpIGF1dG87XG4gICAgICB9XG5cbiAgICAgIC8qIEJvdHRvbSBCYXIgKi9cblxuICAgICAgW3BhcnQ9XCJ0b29sYmFyXCJdIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICAgICAgcGFkZGluZzogOHB4IDRweDtcbiAgICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHZhcigtLW1hdGVyaWFsLWRpdmlkZXItY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNhbmNlbC1idXR0b25cIl0ge1xuICAgICAgICBvcmRlcjogMTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0b2RheS1idXR0b25cIl0ge1xuICAgICAgICBvcmRlcjogMjtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ0b2RheS1idXR0b25cIl0sXG4gICAgICBbcGFydD1cImNhbmNlbC1idXR0b25cIl0ge1xuICAgICAgICBtYXJnaW46IDAgNHB4O1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQtc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LWNvbnRlbnQuanMnO1xuIiwiaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi1tYXRlcmlhbC1zdHlsZXMvbWl4aW5zL292ZXJsYXkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1kYXRlLXBpY2tlci1vdmVybGF5XCIgdGhlbWUtZm9yPVwidmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXlcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibWF0ZXJpYWwtb3ZlcmxheVwiPlxuICAgICAgOmhvc3QoW2Z1bGxzY3JlZW5dKSB7XG4gICAgICAgIHRvcDogMCAhaW1wb3J0YW50O1xuICAgICAgICByaWdodDogMCAhaW1wb3J0YW50O1xuICAgICAgICBib3R0b206IHZhcigtLXZhYWRpbi1vdmVybGF5LXZpZXdwb3J0LWJvdHRvbSkgIWltcG9ydGFudDtcbiAgICAgICAgbGVmdDogMCAhaW1wb3J0YW50O1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzdHJldGNoO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogYXV0bztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZnVsbHNjcmVlbl0pKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICB3aWR0aDogMzYwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwIDRweCA0cHg7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KDpub3QoW2Z1bGxzY3JlZW5dKVtyaWdodC1hbGlnbmVkXSkgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDAgNHB4IDRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbZnVsbHNjcmVlbl0pW2JvdHRvbS1hbGlnbmVkXSkgW3BhcnQ9XCJvdmVybGF5XCJdIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtmdWxsc2NyZWVuXSlbc2hvdy13ZWVrLW51bWJlcnNdKSBbcGFydD1cIm92ZXJsYXlcIl0ge1xuICAgICAgICB3aWR0aDogMzk2cHg7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY29udGVudFwiXSB7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi1kYXRlLXBpY2tlci1vdmVybGF5LmpzJztcbiIsImltcG9ydCAnLi92YWFkaW4tZGF0ZS1waWNrZXItb3ZlcmxheS5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLWRhdGUtcGlja2VyLW92ZXJsYXktY29udGVudC5qcyc7XG5pbXBvcnQgJy4vdmFhZGluLW1vbnRoLWNhbGVuZGFyLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tdGV4dC1maWVsZC90aGVtZS9tYXRlcmlhbC92YWFkaW4tdGV4dC1maWVsZC5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9mb250LWljb25zLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL21peGlucy9maWVsZC1idXR0b24uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1kYXRlLXBpY2tlclwiIHRoZW1lLWZvcj1cInZhYWRpbi1kYXRlLXBpY2tlclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlIGluY2x1ZGU9XCJtYXRlcmlhbC1maWVsZC1idXR0b25cIj5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIC13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiB2YXIoLS1tYXRlcmlhbC1pY29ucy1jbGVhcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidG9nZ2xlLWJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbWF0ZXJpYWwtaWNvbnMtY2FsZW5kYXIpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi1kYXRlLXBpY2tlci1zdHlsZXMuanMnO1xuaW1wb3J0ICcuLi8uLi9zcmMvdmFhZGluLWRhdGUtcGlja2VyLmpzJztcbiIsImltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL2NvbG9yLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC1kYXRlLXBpY2tlci1tb250aC1jYWxlbmRhclwiIHRoZW1lLWZvcj1cInZhYWRpbi1tb250aC1jYWxlbmRhclwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtYm9keS10ZXh0LWNvbG9yKTtcbiAgICAgICAgcGFkZGluZzogMCBjYWxjKDUwJSAvIDggLSAwLjVlbSArIDhweCk7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtzaG93LXdlZWstbnVtYmVyc10pIHtcbiAgICAgICAgcGFkZGluZzogMCBjYWxjKDUwJSAvIDkgLSAwLjVlbSArIDhweCk7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibW9udGgtaGVhZGVyXCJdIHtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1oNi1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ3ZWVrLW51bWJlclwiXSxcbiAgICAgIFtwYXJ0PVwid2Vla2RheVwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtY2FwdGlvbi1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogNDRweDtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwid2Vlay1udW1iZXJcIl0sXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cIndlZWtkYXlcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1tYXRlcmlhbC1ib2R5LWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA0MnB4O1xuICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHotaW5kZXg6IC00O1xuICAgICAgICB0b3A6IDUwJTtcbiAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbiAgICAgICAgd2lkdGg6IDM4cHg7XG4gICAgICAgIGhlaWdodDogMzhweDtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgICAgIH1cblxuICAgICAgLyogVG9kYXkgKi9cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdW3RvZGF5XSB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICAvKiBIb3ZlciAqL1xuXG4gICAgICBbcGFydD1cImRhdGVcIl06bm90KFtkaXNhYmxlZF0pOmhvdmVyOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLXNlY29uZGFyeS1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIHotaW5kZXg6IC0zO1xuICAgICAgfVxuXG4gICAgICAvKiBIaWRlIGZvciB0b3VjaCBkZXZpY2VzICovXG4gICAgICBAbWVkaWEgKGhvdmVyOiBub25lKSB7XG4gICAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSk6aG92ZXI6OmFmdGVyIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAgIHotaW5kZXg6IC00O1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIC8qIFNlbGVjdGVkICovXG5cbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXVtzZWxlY3RlZF0ge1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl06bm90KFtkaXNhYmxlZF0pW3NlbGVjdGVkXTo6YWZ0ZXIsXG4gICAgICBbcGFydD1cImRhdGVcIl1bc2VsZWN0ZWRdOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBib3JkZXItY29sb3I6IGN1cnJlbnRDb2xvcjtcbiAgICAgICAgei1pbmRleDogLTI7XG4gICAgICB9XG5cbiAgICAgIC8qIEZvY3VzZWQgKi9cblxuICAgICAgW3BhcnQ9XCJkYXRlXCJdOm5vdChbZGlzYWJsZWRdKVtmb2N1c2VkXSxcbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSk6YWN0aXZlIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktY29udHJhc3QtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl06bm90KFtkaXNhYmxlZF0pW2ZvY3VzZWRdOjphZnRlcixcbiAgICAgIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSk6YWN0aXZlOjphZnRlciB7XG4gICAgICAgIG9wYWNpdHk6IDAuNztcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtcHJpbWFyeS1jb2xvcik7XG4gICAgICAgIHotaW5kZXg6IC0xO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImRhdGVcIl1bZGlzYWJsZWRdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZm9jdXNlZF0pIFtwYXJ0PVwiZGF0ZVwiXTpub3QoW2Rpc2FibGVkXSlbZm9jdXNlZF06OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsImltcG9ydCAnLi92YWFkaW4tbW9udGgtY2FsZW5kYXItc3R5bGVzLmpzJztcbmltcG9ydCAnLi4vLi4vc3JjL3ZhYWRpbi1tb250aC1jYWxlbmRhci5qcyc7XG4iLCJjb25zdCBERVZfTU9ERV9DT0RFX1JFR0VYUCA9XG4gIC9cXC9cXCpcXCpcXHMrdmFhZGluLWRldi1tb2RlOnN0YXJ0KFtcXHNcXFNdKil2YWFkaW4tZGV2LW1vZGU6ZW5kXFxzK1xcKlxcKlxcLy9pO1xuXG5jb25zdCBGbG93Q2xpZW50cyA9IHdpbmRvdy5WYWFkaW4gJiYgd2luZG93LlZhYWRpbi5GbG93ICYmIHdpbmRvdy5WYWFkaW4uRmxvdy5jbGllbnRzO1xuXG5mdW5jdGlvbiBpc01pbmlmaWVkKCkge1xuICBmdW5jdGlvbiB0ZXN0KCkge1xuICAgIC8qKiB2YWFkaW4tZGV2LW1vZGU6c3RhcnRcbiAgICByZXR1cm4gZmFsc2U7XG4gICAgdmFhZGluLWRldi1tb2RlOmVuZCAqKi9cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICByZXR1cm4gdW5jb21tZW50QW5kUnVuKHRlc3QpO1xufVxuXG5mdW5jdGlvbiBpc0RldmVsb3BtZW50TW9kZSgpIHtcbiAgdHJ5IHtcbiAgICBpZiAoaXNGb3JjZWREZXZlbG9wbWVudE1vZGUoKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKCFpc0xvY2FsaG9zdCgpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKEZsb3dDbGllbnRzKSB7XG4gICAgICByZXR1cm4gIWlzRmxvd1Byb2R1Y3Rpb25Nb2RlKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuICFpc01pbmlmaWVkKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAvLyBTb21lIGVycm9yIGluIHRoaXMgY29kZSwgYXNzdW1lIHByb2R1Y3Rpb24gc28gbm8gZnVydGhlciBhY3Rpb25zIHdpbGwgYmUgdGFrZW5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNGb3JjZWREZXZlbG9wbWVudE1vZGUoKSB7XG4gIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZhYWRpbi5kZXZlbG9wbWVudG1vZGUuZm9yY2VcIik7XG59XG5cbmZ1bmN0aW9uIGlzTG9jYWxob3N0KCkge1xuICByZXR1cm4gKFtcImxvY2FsaG9zdFwiLFwiMTI3LjAuMC4xXCJdLmluZGV4T2Yod2luZG93LmxvY2F0aW9uLmhvc3RuYW1lKSA+PSAwKTtcbn1cblxuZnVuY3Rpb24gaXNGbG93UHJvZHVjdGlvbk1vZGUoKSB7XG4gIGlmIChGbG93Q2xpZW50cykge1xuICAgIGNvbnN0IHByb2R1Y3Rpb25Nb2RlQXBwcyA9IE9iamVjdC5rZXlzKEZsb3dDbGllbnRzKVxuICAgICAgLm1hcChrZXkgPT4gRmxvd0NsaWVudHNba2V5XSlcbiAgICAgIC5maWx0ZXIoY2xpZW50ID0+IGNsaWVudC5wcm9kdWN0aW9uTW9kZSk7XG4gICAgaWYgKHByb2R1Y3Rpb25Nb2RlQXBwcy5sZW5ndGggPiAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiB1bmNvbW1lbnRBbmRSdW4oY2FsbGJhY2ssIGFyZ3MpIHtcbiAgaWYgKHR5cGVvZiBjYWxsYmFjayAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIGNvbnN0IG1hdGNoID0gREVWX01PREVfQ09ERV9SRUdFWFAuZXhlYyhjYWxsYmFjay50b1N0cmluZygpKTtcbiAgaWYgKG1hdGNoKSB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIHJlcXVpcmVzIENTUDogc2NyaXB0LXNyYyAndW5zYWZlLWV2YWwnXG4gICAgICBjYWxsYmFjayA9IG5ldyBGdW5jdGlvbihtYXRjaFsxXSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gZWF0IHRoZSBleGNlcHRpb25cbiAgICAgIGNvbnNvbGUubG9nKCd2YWFkaW4tZGV2ZWxvcG1lbnQtbW9kZS1kZXRlY3RvcjogdW5jb21tZW50QW5kUnVuKCkgZmFpbGVkJywgZSlcbiAgICB9XG4gIH1cblxuICByZXR1cm4gY2FsbGJhY2soYXJncyk7XG59XG5cbi8vIEEgZ3VhcmQgYWdhaW5zdCBwb2x5bWVyLW1vZHVsaXplciByZW1vdmluZyB0aGUgd2luZG93LlZhYWRpblxuLy8gaW5pdGlhbGl6YXRpb24gYWJvdmUuXG53aW5kb3dbJ1ZhYWRpbiddID0gd2luZG93WydWYWFkaW4nXSB8fCB7fTtcblxuLyoqXG4gKiBJbnNwZWN0cyB0aGUgc291cmNlIGNvZGUgb2YgdGhlIGdpdmVuIGBjYWxsYmFja2AgZnVuY3Rpb24gZm9yXG4gKiBzcGVjaWFsbHktbWFya2VkIF9jb21tZW50ZWRfIGNvZGUuIElmIHN1Y2ggY29tbWVudGVkIGNvZGUgaXMgZm91bmQgaW4gdGhlXG4gKiBjYWxsYmFjayBzb3VyY2UsIHVuY29tbWVudHMgYW5kIHJ1bnMgdGhhdCBjb2RlIGluc3RlYWQgb2YgdGhlIGNhbGxiYWNrXG4gKiBpdHNlbGYuIE90aGVyd2lzZSBydW5zIHRoZSBjYWxsYmFjayBhcyBpcy5cbiAqXG4gKiBUaGUgb3B0aW9uYWwgYXJndW1lbnRzIGFyZSBwYXNzZWQgaW50byB0aGUgY2FsbGJhY2sgLyB1bmNvbW1lbnRlZCBjb2RlLFxuICogdGhlIHJlc3VsdCBpcyByZXR1cm5lZC5cbiAqXG4gKiBTZWUgdGhlIGBpc01pbmlmaWVkKClgIGZ1bmN0aW9uIHNvdXJjZSBjb2RlIGluIHRoaXMgZmlsZSBmb3IgYW4gZXhhbXBsZS5cbiAqXG4gKi9cbmV4cG9ydCBjb25zdCBydW5JZkRldmVsb3BtZW50TW9kZSA9IGZ1bmN0aW9uKGNhbGxiYWNrLCBhcmdzKSB7XG4gIGlmICh3aW5kb3cuVmFhZGluLmRldmVsb3BtZW50TW9kZSkge1xuICAgIHJldHVybiB1bmNvbW1lbnRBbmRSdW4oY2FsbGJhY2ssIGFyZ3MpO1xuICB9XG59O1xuXG5pZiAod2luZG93LlZhYWRpbi5kZXZlbG9wbWVudE1vZGUgPT09IHVuZGVmaW5lZCkge1xuICB3aW5kb3cuVmFhZGluLmRldmVsb3BtZW50TW9kZSA9IGlzRGV2ZWxvcG1lbnRNb2RlKCk7XG59XG4iLCJpbXBvcnQgeyBpZGxlUGVyaW9kIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvYXN5bmMuanMnO1xuaW1wb3J0IHsgRGVib3VuY2VyIH0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvZGVib3VuY2UuanMnO1xuaW1wb3J0IHsgZW5xdWV1ZURlYm91bmNlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2ZsdXNoLmpzJztcblxuaW1wb3J0IHsgdXNhZ2VTdGF0aXN0aWNzIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy5qcyc7XG5pZiAoIXdpbmRvdy5WYWFkaW4pIHtcbiAgd2luZG93WydWYWFkaW4nXSA9IHt9O1xufVxuXG4vKipcbiAqIEFycmF5IG9mIFZhYWRpbiBjdXN0b20gZWxlbWVudCBjbGFzc2VzIHRoYXQgaGF2ZSBiZWVuIGZpbmFsaXplZC5cbiAqL1xud2luZG93WydWYWFkaW4nXS5yZWdpc3RyYXRpb25zID0gd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zIHx8IFtdO1xuXG4vLyBVc2UgdGhlIGhhY2sgdG8gcHJldmVudCBwb2x5bWVyLW1vZHVsaXplciBmcm9tIGNvbnZlcnRpbmcgdG8gZXhwb3J0c1xud2luZG93WydWYWFkaW4nXS5kZXZlbG9wbWVudE1vZGVDYWxsYmFjayA9IHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlQ2FsbGJhY2sgfHwge307XG53aW5kb3dbJ1ZhYWRpbiddLmRldmVsb3BtZW50TW9kZUNhbGxiYWNrWyd2YWFkaW4tdXNhZ2Utc3RhdGlzdGljcyddID0gZnVuY3Rpb24oKSB7XG4gIGlmICh1c2FnZVN0YXRpc3RpY3MpIHtcbiAgICB1c2FnZVN0YXRpc3RpY3MoKTtcbiAgfVxufTtcblxubGV0IHN0YXRzSm9iO1xuXG5jb25zdCByZWdpc3RlcmVkID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IEVsZW1lbnRNaXhpbiA9IHN1cGVyQ2xhc3MgPT4gY2xhc3MgVmFhZGluRWxlbWVudE1peGluIGV4dGVuZHMgc3VwZXJDbGFzcyB7XG4gIC8qKiBAcHJvdGVjdGVkICovXG4gIHN0YXRpYyBmaW5hbGl6ZSgpIHtcbiAgICBzdXBlci5maW5hbGl6ZSgpO1xuXG4gICAgY29uc3Qge2lzfSA9IHRoaXM7XG5cbiAgICAvLyBSZWdpc3RlcnMgYSBjbGFzcyBwcm90b3R5cGUgZm9yIHRlbGVtZXRyeSBwdXJwb3Nlcy5cbiAgICBpZiAoaXMgJiYgIXJlZ2lzdGVyZWQuaGFzKGlzKSkge1xuICAgICAgd2luZG93LlZhYWRpbi5yZWdpc3RyYXRpb25zLnB1c2godGhpcyk7XG4gICAgICByZWdpc3RlcmVkLmFkZChpcyk7XG5cbiAgICAgIGlmICh3aW5kb3cuVmFhZGluLmRldmVsb3BtZW50TW9kZUNhbGxiYWNrKSB7XG4gICAgICAgIHN0YXRzSm9iID0gRGVib3VuY2VyLmRlYm91bmNlKHN0YXRzSm9iLFxuICAgICAgICAgIGlkbGVQZXJpb2QsICgpID0+IHtcbiAgICAgICAgICAgIHdpbmRvdy5WYWFkaW4uZGV2ZWxvcG1lbnRNb2RlQ2FsbGJhY2tbJ3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzJ10oKTtcbiAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgICAgIGVucXVldWVEZWJvdW5jZXIoc3RhdHNKb2IpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICAgIGlmIChkb2N1bWVudC5kb2N0eXBlID09PSBudWxsKSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdWYWFkaW4gY29tcG9uZW50cyByZXF1aXJlIHRoZSBcInN0YW5kYXJkcyBtb2RlXCIgZGVjbGFyYXRpb24uIFBsZWFzZSBhZGQgPCFET0NUWVBFIGh0bWw+IHRvIHRoZSBIVE1MIGRvY3VtZW50LidcbiAgICAgICk7XG4gICAgfVxuICB9XG59O1xuIiwiaW1wb3J0ICcuLi9mb250LWljb25zLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLWZpZWxkLWJ1dHRvblwiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLyogVE9ETyhwbGF0b3NoYSk6IGFsaWduIGljb24gc2l6ZXMgd2l0aCBvdGhlciBlbGVtZW50cyAqL1xuICAgICAgW3BhcnRcXCQ9XCJidXR0b25cIl0ge1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgICB3aWR0aDogMjRweDtcbiAgICAgICAgaGVpZ2h0OiAyNHB4O1xuICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1zZWNvbmRhcnktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtaWNvbi1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtyZWFkb25seV0pKSBbcGFydFxcJD1cImJ1dHRvblwiXSB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoOm5vdChbcmVhZG9ubHldKSkgW3BhcnRcXCQ9XCJidXR0b25cIl06aG92ZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0XFwkPVwiYnV0dG9uXCJdLFxuICAgICAgOmhvc3QoW3JlYWRvbmx5XSkgW3BhcnRcXCQ9XCJidXR0b25cIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnRcXCQ9XCJidXR0b25cIl06OmJlZm9yZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIm1hdGVyaWFsLWljb25zXCI7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG4iLCJpbXBvcnQgJy4uL2NvbG9yLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cIm1hdGVyaWFsLXJlcXVpcmVkLWZpZWxkXCI+XG4gIDx0ZW1wbGF0ZT5cbiAgICA8c3R5bGU+XG4gICAgICBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiA4cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogMTtcbiAgICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAtNHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47XG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB0cmFuc2Zvcm0tb3JpZ2luOiAwIDc1JTtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgwLjc1KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3JlcXVpcmVkXSkgW3BhcnQ9XCJsYWJlbFwiXTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiBcIiAqXCI7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaW52YWxpZF0pIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZXJyb3ItdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiZXJyb3ItbWVzc2FnZVwiXSB7XG4gICAgICAgIGZvbnQtc2l6ZTogLjc1ZW07XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZXJyb3ItdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC8qIE1hcmdpbiB0aGF0IGRvZXNu4oCZdCByZXNlcnZlIHNwYWNlIHdoZW4gdGhlcmXigJlzIG5vIGVycm9yIG1lc3NhZ2UgKi9cbiAgICAgIFtwYXJ0PVwiZXJyb3ItbWVzc2FnZVwiXTpub3QoOmVtcHR5KTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogNnB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCg6bm90KFtpbnZhbGlkXSkpIFtwYXJ0PVwiZXJyb3ItbWVzc2FnZVwiXSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIG1heC1oZWlnaHQ6IDA7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtpbnZhbGlkXSkgW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdIHtcbiAgICAgICAgYW5pbWF0aW9uOiByZXZlYWwgMC4ycztcbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyByZXZlYWwge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0ICdAdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4uanMnO1xuXG5pbXBvcnQgeyBDb250cm9sU3RhdGVNaXhpbiB9IGZyb20gJ0B2YWFkaW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4vdmFhZGluLWNvbnRyb2wtc3RhdGUtbWl4aW4uanMnO1xuaW1wb3J0IHsgdGltZU91dCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2FzeW5jLmpzJztcbmltcG9ydCB7IERlYm91bmNlciB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2RlYm91bmNlLmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuXG4kX2RvY3VtZW50Q29udGFpbmVyLmlubmVySFRNTCA9IGA8ZG9tLW1vZHVsZSBpZD1cInZhYWRpbi10ZXh0LWZpZWxkLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiBcIlxcXFwyMDAzXCI7XG4gICAgICAgIHdpZHRoOiAwO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIC8qIFNpemUgYW5kIHBvc2l0aW9uIHRoaXMgZWxlbWVudCBvbiB0aGUgc2FtZSB2ZXJ0aWNhbCBwb3NpdGlvbiBhcyB0aGUgaW5wdXQtZmllbGQgZWxlbWVudFxuICAgICAgICAgICB0byBtYWtlIHZlcnRpY2FsIGFsaWduIGZvciB0aGUgaG9zdCBlbGVtZW50IHdvcmsgYXMgZXhwZWN0ZWQgKi9cbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICAudmFhZGluLXRleHQtZmllbGQtY29udGFpbmVyLFxuICAgICAgLnZhYWRpbi10ZXh0LWFyZWEtY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgbWluLXdpZHRoOiAxMDAlO1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICAgIHdpZHRoOiB2YXIoLS12YWFkaW4tdGV4dC1maWVsZC1kZWZhdWx0LXdpZHRoLCAxMmVtKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXTplbXB0eSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBmbGV4OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICAudmFhZGluLXRleHQtZmllbGQtY29udGFpbmVyIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBmbGV4LWdyb3c6IDA7XG4gICAgICB9XG5cbiAgICAgIC8qIFJlc2V0IHRoZSBuYXRpdmUgaW5wdXQgc3R5bGVzICovXG4gICAgICBbcGFydD1cInZhbHVlXCJdLFxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQodGV4dGFyZWEpIHtcbiAgICAgICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgYm9yZGVyOiAwO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBtaW4td2lkdGg6IDA7XG4gICAgICAgIGZvbnQ6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgICAgICBsaW5lLWhlaWdodDogbm9ybWFsO1xuICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC8qIERpc2FibGUgZGVmYXVsdCBpbnZhbGlkIHN0eWxlIGluIEZpcmVmb3ggKi9cbiAgICAgICAgYm94LXNoYWRvdzogbm9uZTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoKikge1xuICAgICAgICBmbGV4OiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdLFxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoaW5wdXQpLFxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQodGV4dGFyZWEpLFxuICAgICAgLyogU2xvdHRlZCBieSB2YWFkaW4tc2VsZWN0LXRleHQtZmllbGQgKi9cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKFtwYXJ0PVwidmFsdWVcIl0pIHtcbiAgICAgICAgZmxleDogYXV0bztcbiAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQodGV4dGFyZWEpIHtcbiAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjotbXMtY2xlYXIsXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpbnB1dCk6Oi1tcy1jbGVhciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwiY2xlYXItYnV0dG9uXCJdIHtcbiAgICAgICAgY3Vyc29yOiBkZWZhdWx0O1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogXCLinJVcIjtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcblxuY29uc3QgSE9TVF9QUk9QUyA9IHtcbiAgZGVmYXVsdDogWydsaXN0JywgJ2F1dG9mb2N1cycsICdwYXR0ZXJuJywgJ2F1dG9jYXBpdGFsaXplJywgJ2F1dG9jb3JyZWN0JywgJ21heGxlbmd0aCcsXG4gICAgJ21pbmxlbmd0aCcsICduYW1lJywgJ3BsYWNlaG9sZGVyJywgJ2F1dG9jb21wbGV0ZScsICd0aXRsZSddLFxuICBhY2Nlc3NpYmxlOiBbJ2Rpc2FibGVkJywgJ3JlYWRvbmx5JywgJ3JlcXVpcmVkJywgJ2ludmFsaWQnXVxufTtcblxuY29uc3QgUFJPUF9UWVBFID0ge1xuICBERUZBVUxUOiAnZGVmYXVsdCcsXG4gIEFDQ0VTU0lCTEU6ICdhY2Nlc3NpYmxlJ1xufTtcblxuXG4vKipcbiAqIEBwb2x5bWVyTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uQ29udHJvbFN0YXRlTWl4aW5cbiAqL1xuZXhwb3J0IGNvbnN0IFRleHRGaWVsZE1peGluID0gc3ViY2xhc3MgPT4gY2xhc3MgVmFhZGluVGV4dEZpZWxkTWl4aW4gZXh0ZW5kcyBDb250cm9sU3RhdGVNaXhpbihzdWJjbGFzcykge1xuICBzdGF0aWMgZ2V0IHByb3BlcnRpZXMoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIC8qKlxuICAgICAgICogV2hldGhlciB0aGUgdmFsdWUgb2YgdGhlIGNvbnRyb2wgY2FuIGJlIGF1dG9tYXRpY2FsbHkgY29tcGxldGVkIGJ5IHRoZSBicm93c2VyLlxuICAgICAgICogTGlzdCBvZiBhdmFpbGFibGUgb3B0aW9ucyBhdDpcbiAgICAgICAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuL2RvY3MvV2ViL0hUTUwvRWxlbWVudC9pbnB1dCNhdHRyLWF1dG9jb21wbGV0ZVxuICAgICAgICovXG4gICAgICBhdXRvY29tcGxldGU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFRoaXMgaXMgYSBwcm9wZXJ0eSBzdXBwb3J0ZWQgYnkgU2FmYXJpIHRoYXQgaXMgdXNlZCB0byBjb250cm9sIHdoZXRoZXJcbiAgICAgICAqIGF1dG9jb3JyZWN0aW9uIHNob3VsZCBiZSBlbmFibGVkIHdoZW4gdGhlIHVzZXIgaXMgZW50ZXJpbmcvZWRpdGluZyB0aGUgdGV4dC5cbiAgICAgICAqIFBvc3NpYmxlIHZhbHVlcyBhcmU6XG4gICAgICAgKiBvbjogRW5hYmxlIGF1dG9jb3JyZWN0aW9uLlxuICAgICAgICogb2ZmOiBEaXNhYmxlIGF1dG9jb3JyZWN0aW9uLlxuICAgICAgICovXG4gICAgICBhdXRvY29ycmVjdDoge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogVGhpcyBpcyBhIHByb3BlcnR5IHN1cHBvcnRlZCBieSBTYWZhcmkgYW5kIENocm9tZSB0aGF0IGlzIHVzZWQgdG8gY29udHJvbCB3aGV0aGVyXG4gICAgICAgKiBhdXRvY2FwaXRhbGl6YXRpb24gc2hvdWxkIGJlIGVuYWJsZWQgd2hlbiB0aGUgdXNlciBpcyBlbnRlcmluZy9lZGl0aW5nIHRoZSB0ZXh0LlxuICAgICAgICogUG9zc2libGUgdmFsdWVzIGFyZTpcbiAgICAgICAqIGNoYXJhY3RlcnM6IENoYXJhY3RlcnMgY2FwaXRhbGl6YXRpb24uXG4gICAgICAgKiB3b3JkczogV29yZHMgY2FwaXRhbGl6YXRpb24uXG4gICAgICAgKiBzZW50ZW5jZXM6IFNlbnRlbmNlcyBjYXBpdGFsaXphdGlvbi5cbiAgICAgICAqIG5vbmU6IE5vIGNhcGl0YWxpemF0aW9uLlxuICAgICAgICovXG4gICAgICBhdXRvY2FwaXRhbGl6ZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmeSB0aGF0IHRoZSB2YWx1ZSBzaG91bGQgYmUgYXV0b21hdGljYWxseSBzZWxlY3RlZCB3aGVuIHRoZSBmaWVsZCBnYWlucyBmb2N1cy5cbiAgICAgICAqL1xuICAgICAgYXV0b3NlbGVjdDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICB2YWx1ZTogZmFsc2VcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU2V0IHRvIHRydWUgdG8gZGlzcGxheSB0aGUgY2xlYXIgaWNvbiB3aGljaCBjbGVhcnMgdGhlIGlucHV0LlxuICAgICAgICovXG4gICAgICBjbGVhckJ1dHRvblZpc2libGU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEVycm9yIHRvIHNob3cgd2hlbiB0aGUgaW5wdXQgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgZXJyb3JNZXNzYWdlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgICAgdmFsdWU6ICcnXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE9iamVjdCB3aXRoIHRyYW5zbGF0ZWQgc3RyaW5ncyB1c2VkIGZvciBsb2NhbGl6YXRpb24uIEhhc1xuICAgICAgICogdGhlIGZvbGxvd2luZyBzdHJ1Y3R1cmUgYW5kIGRlZmF1bHQgdmFsdWVzOlxuICAgICAgICpcbiAgICAgICAqIGBgYFxuICAgICAgICoge1xuICAgICAgICogICAvLyBUcmFuc2xhdGlvbiBvZiB0aGUgY2xlYXIgaWNvbiBidXR0b24gYWNjZXNzaWJsZSBsYWJlbFxuICAgICAgICogICBjbGVhcjogJ0NsZWFyJ1xuICAgICAgICogfVxuICAgICAgICogYGBgXG4gICAgICAgKi9cbiAgICAgIGkxOG46IHtcbiAgICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgICB2YWx1ZTogKCkgPT4ge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBjbGVhcjogJ0NsZWFyJ1xuICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogU3RyaW5nIHVzZWQgZm9yIHRoZSBsYWJlbCBlbGVtZW50LlxuICAgICAgICovXG4gICAgICBsYWJlbDoge1xuICAgICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICAgIHZhbHVlOiAnJyxcbiAgICAgICAgb2JzZXJ2ZXI6ICdfbGFiZWxDaGFuZ2VkJ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBNYXhpbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIChpbiBVbmljb2RlIGNvZGUgcG9pbnRzKSB0aGF0IHRoZSB1c2VyIGNhbiBlbnRlci5cbiAgICAgICAqL1xuICAgICAgbWF4bGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBNaW5pbXVtIG51bWJlciBvZiBjaGFyYWN0ZXJzIChpbiBVbmljb2RlIGNvZGUgcG9pbnRzKSB0aGF0IHRoZSB1c2VyIGNhbiBlbnRlci5cbiAgICAgICAqL1xuICAgICAgbWlubGVuZ3RoOiB7XG4gICAgICAgIHR5cGU6IE51bWJlclxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgbmFtZSBvZiB0aGUgY29udHJvbCwgd2hpY2ggaXMgc3VibWl0dGVkIHdpdGggdGhlIGZvcm0gZGF0YS5cbiAgICAgICAqL1xuICAgICAgbmFtZToge1xuICAgICAgICB0eXBlOiBTdHJpbmdcbiAgICAgIH0sXG5cbiAgICAgIC8qKlxuICAgICAgICogQSBoaW50IHRvIHRoZSB1c2VyIG9mIHdoYXQgY2FuIGJlIGVudGVyZWQgaW4gdGhlIGNvbnRyb2wuXG4gICAgICAgKi9cbiAgICAgIHBsYWNlaG9sZGVyOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIGF0dHJpYnV0ZSBpbmRpY2F0ZXMgdGhhdCB0aGUgdXNlciBjYW5ub3QgbW9kaWZ5IHRoZSB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICAgICAqL1xuICAgICAgcmVhZG9ubHk6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGF0IHRoZSB1c2VyIG11c3QgZmlsbCBpbiBhIHZhbHVlLlxuICAgICAgICovXG4gICAgICByZXF1aXJlZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWVcbiAgICAgIH0sXG5cblxuICAgICAgLyoqXG4gICAgICAgKiBUaGUgaW5pdGlhbCB2YWx1ZSBvZiB0aGUgY29udHJvbC5cbiAgICAgICAqIEl0IGNhbiBiZSB1c2VkIGZvciB0d28td2F5IGRhdGEgYmluZGluZy5cbiAgICAgICAqL1xuICAgICAgdmFsdWU6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgICB2YWx1ZTogJycsXG4gICAgICAgIG9ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCcsXG4gICAgICAgIG5vdGlmeTogdHJ1ZVxuICAgICAgfSxcblxuICAgICAgLyoqXG4gICAgICAgKiBUaGlzIHByb3BlcnR5IGlzIHNldCB0byB0cnVlIHdoZW4gdGhlIGNvbnRyb2wgdmFsdWUgaXMgaW52YWxpZC5cbiAgICAgICAqL1xuICAgICAgaW52YWxpZDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICAgIG5vdGlmeTogdHJ1ZSxcbiAgICAgICAgdmFsdWU6IGZhbHNlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFNwZWNpZmllcyB0aGF0IHRoZSB0ZXh0IGZpZWxkIGhhcyB2YWx1ZS5cbiAgICAgICAqL1xuICAgICAgaGFzVmFsdWU6IHtcbiAgICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgICAgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIFdoZW4gc2V0IHRvIHRydWUsIHVzZXIgaXMgcHJldmVudGVkIGZyb20gdHlwaW5nIGEgdmFsdWUgdGhhdFxuICAgICAgICogY29uZmxpY3RzIHdpdGggdGhlIGdpdmVuIGBwYXR0ZXJuYC5cbiAgICAgICAqL1xuICAgICAgcHJldmVudEludmFsaWRJbnB1dDoge1xuICAgICAgICB0eXBlOiBCb29sZWFuXG4gICAgICB9LFxuXG4gICAgICBfbGFiZWxJZDogU3RyaW5nLFxuXG4gICAgICBfZXJyb3JJZDogU3RyaW5nLFxuXG4gICAgICBfaW5wdXRJZDogU3RyaW5nXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZXJzKCkge1xuICAgIHJldHVybiBbJ19zdGF0ZUNoYW5nZWQoZGlzYWJsZWQsIHJlYWRvbmx5LCBjbGVhckJ1dHRvblZpc2libGUsIGhhc1ZhbHVlKScsXG4gICAgICAnX2hvc3RQcm9wc0NoYW5nZWQoJyArIEhPU1RfUFJPUFMuZGVmYXVsdC5qb2luKCcsICcpICsgJyknLFxuICAgICAgJ19ob3N0QWNjZXNzaWJsZVByb3BzQ2hhbmdlZCgnICsgSE9TVF9QUk9QUy5hY2Nlc3NpYmxlLmpvaW4oJywgJykgKyAnKScsXG4gICAgICAnX2dldEFjdGl2ZUVycm9ySWQoaW52YWxpZCwgZXJyb3JNZXNzYWdlLCBfZXJyb3JJZCknLFxuICAgICAgJ19nZXRBY3RpdmVMYWJlbElkKGxhYmVsLCBfbGFiZWxJZCwgX2lucHV0SWQpJyxcbiAgICAgICdfX29ic2VydmVPZmZzZXRIZWlnaHQoZXJyb3JNZXNzYWdlLCBpbnZhbGlkLCBsYWJlbCknXG4gICAgXTtcbiAgfVxuXG4gIGdldCBmb2N1c0VsZW1lbnQoKSB7XG4gICAgaWYgKCF0aGlzLnNoYWRvd1Jvb3QpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3Qgc2xvdHRlZCA9IHRoaXMucXVlcnlTZWxlY3RvcihgJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1bc2xvdD1cIiR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9XCJdYCk7XG4gICAgaWYgKHNsb3R0ZWQpIHtcbiAgICAgIHJldHVybiBzbG90dGVkO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1twYXJ0PVwidmFsdWVcIl0nKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZ2V0IGlucHV0RWxlbWVudCgpIHtcbiAgICByZXR1cm4gdGhpcy5mb2N1c0VsZW1lbnQ7XG4gIH1cblxuICBnZXQgX3Nsb3R0ZWRUYWdOYW1lKCkge1xuICAgIHJldHVybiAnaW5wdXQnO1xuICB9XG5cbiAgX2NyZWF0ZUNvbnN0cmFpbnRzT2JzZXJ2ZXIoKSB7XG4gICAgLy8gVGhpcyBjb21wbGV4IG9ic2VydmVyIG5lZWRzIHRvIGJlIGFkZGVkIGR5bmFtaWNhbGx5IGhlcmUgKGluc3RlYWQgb2YgZGVmaW5pbmcgaXQgYWJvdmUgaW4gdGhlIGBnZXQgb2JzZXJ2ZXJzKClgKVxuICAgIC8vIHNvIHRoYXQgaXQgcnVucyBhZnRlciBjb21wbGV4IG9ic2VydmVycyBvZiBpbmhlcml0aW5nIGNsYXNzZXMuIE90aGVyd2lzZSBlLmcuIGBfc3RlcE9yTWluQ2hhbmdlZCgpYCBvYnNlcnZlciBvZlxuICAgIC8vIHZhYWRpbi1udW1iZXItZmllbGQgd291bGQgcnVuIGFmdGVyIHRoaXMgYW5kIHRoZSBgbWluYCBhbmQgYHN0ZXBgIHByb3BlcnRpZXMgd291bGQgbm90IHlldCBiZSBwcm9wYWdhdGVkIHRvXG4gICAgLy8gdGhlIGBpbnB1dEVsZW1lbnRgIHdoZW4gdGhpcyBydW5zLlxuICAgIHRoaXMuX2NyZWF0ZU1ldGhvZE9ic2VydmVyKCdfY29uc3RyYWludHNDaGFuZ2VkKHJlcXVpcmVkLCBtaW5sZW5ndGgsIG1heGxlbmd0aCwgcGF0dGVybiknKTtcbiAgfVxuXG4gIF9vbklucHV0KGUpIHtcbiAgICBpZiAodGhpcy5fX3ByZXZlbnRJbnB1dCkge1xuICAgICAgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgIHRoaXMuX19wcmV2ZW50SW5wdXQgPSBmYWxzZTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5wcmV2ZW50SW52YWxpZElucHV0KSB7XG4gICAgICBjb25zdCBpbnB1dCA9IHRoaXMuaW5wdXRFbGVtZW50O1xuICAgICAgaWYgKGlucHV0LnZhbHVlLmxlbmd0aCA+IDAgJiYgIXRoaXMuY2hlY2tWYWxpZGl0eSgpKSB7XG4gICAgICAgIGlucHV0LnZhbHVlID0gdGhpcy52YWx1ZSB8fCAnJztcbiAgICAgICAgLy8gYWRkIGlucHV0LXByZXZlbnRlZCBhdHRyaWJ1dGUgZm9yIDIwMG1zXG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdpbnB1dC1wcmV2ZW50ZWQnLCAnJyk7XG4gICAgICAgIHRoaXMuX2lucHV0RGVib3VuY2VyID0gRGVib3VuY2VyLmRlYm91bmNlKFxuICAgICAgICAgIHRoaXMuX2lucHV0RGVib3VuY2VyLFxuICAgICAgICAgIHRpbWVPdXQuYWZ0ZXIoMjAwKSwgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2lucHV0LXByZXZlbnRlZCcpO1xuICAgICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKCFlLl9fZnJvbUNsZWFyQnV0dG9uKSB7XG4gICAgICB0aGlzLl9fdXNlcklucHV0ID0gdHJ1ZTtcbiAgICB9XG4gICAgdGhpcy52YWx1ZSA9IGUudGFyZ2V0LnZhbHVlO1xuICB9XG5cbiAgLy8gTk9URSh5dXJpeSk6IFdvcmthcm91bmQgbmVlZGVkIGZvciBJRTExIGFuZCBFZGdlIGZvciBwcm9wZXIgZGlzcGxheWluZ1xuICAvLyBvZiB0aGUgY2xlYXIgYnV0dG9uIGluc3RlYWQgb2Ygc2V0dGluZyBkaXNwbGF5IHByb3BlcnR5IGZvciBpdCBkZXBlbmRpbmcgb24gc3RhdGUuXG4gIF9zdGF0ZUNoYW5nZWQoZGlzYWJsZWQsIHJlYWRvbmx5LCBjbGVhckJ1dHRvblZpc2libGUsIGhhc1ZhbHVlKSB7XG4gICAgaWYgKCFkaXNhYmxlZCAmJlxuICAgICAgICAhcmVhZG9ubHkgJiZcbiAgICAgICAgY2xlYXJCdXR0b25WaXNpYmxlICYmXG4gICAgICAgIGhhc1ZhbHVlXG4gICAgKSB7XG4gICAgICB0aGlzLiQuY2xlYXJCdXR0b24ucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy4kLmNsZWFyQnV0dG9uLnNldEF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2hhbmdlKGUpIHtcbiAgICBpZiAodGhpcy5fdmFsdWVDbGVhcmluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIEluIHRoZSBTaGFkb3cgRE9NLCB0aGUgYGNoYW5nZWAgZXZlbnQgaXMgbm90IGxlYWtlZCBpbnRvIHRoZVxuICAgIC8vIGFuY2VzdG9yIHRyZWUsIHNvIHdlIG11c3QgZG8gdGhpcyBtYW51YWxseS5cbiAgICBjb25zdCBjaGFuZ2VFdmVudCA9IG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywge1xuICAgICAgZGV0YWlsOiB7XG4gICAgICAgIHNvdXJjZUV2ZW50OiBlXG4gICAgICB9LFxuICAgICAgYnViYmxlczogZS5idWJibGVzLFxuICAgICAgY2FuY2VsYWJsZTogZS5jYW5jZWxhYmxlLFxuICAgIH0pO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gIH1cblxuICBfdmFsdWVDaGFuZ2VkKG5ld1ZhbCwgb2xkVmFsKSB7XG4gICAgLy8gc2V0dGluZyBpbml0aWFsIHZhbHVlIHRvIGVtcHR5IHN0cmluZywgc2tpcCB2YWxpZGF0aW9uXG4gICAgaWYgKG5ld1ZhbCA9PT0gJycgJiYgb2xkVmFsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAobmV3VmFsICE9PSAnJyAmJiBuZXdWYWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5oYXNWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGFzVmFsdWUgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fX3VzZXJJbnB1dCkge1xuICAgICAgdGhpcy5fX3VzZXJJbnB1dCA9IGZhbHNlO1xuICAgICAgcmV0dXJuO1xuICAgIH0gZWxzZSBpZiAobmV3VmFsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuaW5wdXRFbGVtZW50LnZhbHVlID0gbmV3VmFsO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbHVlID0gdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICBpZiAodGhpcy5pbnZhbGlkKSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgX2xhYmVsQ2hhbmdlZChsYWJlbCkge1xuICAgIGlmIChsYWJlbCAhPT0gJycgJiYgbGFiZWwgIT0gbnVsbCkge1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hhcy1sYWJlbCcsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5yZW1vdmVBdHRyaWJ1dGUoJ2hhcy1sYWJlbCcpO1xuICAgIH1cbiAgfVxuXG4gIF9vblNsb3RDaGFuZ2UoKSB7XG4gICAgY29uc3Qgc2xvdHRlZCA9IHRoaXMucXVlcnlTZWxlY3RvcihgJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1bc2xvdD1cIiR7dGhpcy5fc2xvdHRlZFRhZ05hbWV9XCJdYCk7XG5cbiAgICBpZiAodGhpcy52YWx1ZSkge1xuICAgICAgdGhpcy5pbnB1dEVsZW1lbnQudmFsdWUgPSB0aGlzLnZhbHVlO1xuICAgICAgdGhpcy52YWxpZGF0ZSgpO1xuICAgIH1cblxuICAgIGlmIChzbG90dGVkICYmICF0aGlzLl9zbG90dGVkSW5wdXQpIHtcbiAgICAgIHRoaXMuX3ZhbGlkYXRlU2xvdHRlZFZhbHVlKHNsb3R0ZWQpO1xuICAgICAgdGhpcy5fYWRkSW5wdXRMaXN0ZW5lcnMoc2xvdHRlZCk7XG4gICAgICB0aGlzLl9hZGRJRUxpc3RlbmVycyhzbG90dGVkKTtcbiAgICAgIHRoaXMuX3Nsb3R0ZWRJbnB1dCA9IHNsb3R0ZWQ7XG4gICAgfSBlbHNlIGlmICghc2xvdHRlZCAmJiB0aGlzLl9zbG90dGVkSW5wdXQpIHtcbiAgICAgIHRoaXMuX3JlbW92ZUlucHV0TGlzdGVuZXJzKHRoaXMuX3Nsb3R0ZWRJbnB1dCk7XG4gICAgICB0aGlzLl9yZW1vdmVJRUxpc3RlbmVycyh0aGlzLl9zbG90dGVkSW5wdXQpO1xuICAgICAgdGhpcy5fc2xvdHRlZElucHV0ID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIE9iamVjdC5rZXlzKFBST1BfVFlQRSkubWFwKGtleSA9PiBQUk9QX1RZUEVba2V5XSkuZm9yRWFjaCh0eXBlID0+XG4gICAgICB0aGlzLl9wcm9wYWdhdGVIb3N0QXR0cmlidXRlcyhIT1NUX1BST1BTW3R5cGVdLm1hcChhdHRyID0+IHRoaXNbYXR0cl0pLCB0eXBlKSk7XG4gIH1cblxuICBfaG9zdFByb3BzQ2hhbmdlZCguLi5hdHRyaWJ1dGVzVmFsdWVzKSB7XG4gICAgdGhpcy5fcHJvcGFnYXRlSG9zdEF0dHJpYnV0ZXMoYXR0cmlidXRlc1ZhbHVlcywgUFJPUF9UWVBFLkRFRkFVTFQpO1xuICB9XG5cbiAgX2hvc3RBY2Nlc3NpYmxlUHJvcHNDaGFuZ2VkKC4uLmF0dHJpYnV0ZXNWYWx1ZXMpIHtcbiAgICB0aGlzLl9wcm9wYWdhdGVIb3N0QXR0cmlidXRlcyhhdHRyaWJ1dGVzVmFsdWVzLCBQUk9QX1RZUEUuQUNDRVNTSUJMRSk7XG4gIH1cblxuICBfdmFsaWRhdGVTbG90dGVkVmFsdWUoc2xvdHRlZCkge1xuICAgIGlmIChzbG90dGVkLnZhbHVlICE9PSB0aGlzLnZhbHVlKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ1BsZWFzZSBkZWZpbmUgdmFsdWUgb24gdGhlIHZhYWRpbi10ZXh0LWZpZWxkIGNvbXBvbmVudCEnKTtcbiAgICAgIHNsb3R0ZWQudmFsdWUgPSAnJztcbiAgICB9XG4gIH1cblxuICBfcHJvcGFnYXRlSG9zdEF0dHJpYnV0ZXMoYXR0cmlidXRlc1ZhbHVlcywgdHlwZSkge1xuICAgIGNvbnN0IGlucHV0ID0gdGhpcy5pbnB1dEVsZW1lbnQ7XG4gICAgY29uc3QgYXR0cmlidXRlTmFtZXMgPSBIT1NUX1BST1BTW3R5cGVdO1xuXG4gICAgaWYgKHR5cGUgPT09ICdhY2Nlc3NpYmxlJykge1xuICAgICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0ciwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0T3JUb2dnbGVBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1ZhbHVlc1tpbmRleF0sIGlucHV0KTtcbiAgICAgICAgdGhpcy5fc2V0T3JUb2dnbGVBdHRyaWJ1dGUoYGFyaWEtJHthdHRyfWAsIGF0dHJpYnV0ZXNWYWx1ZXNbaW5kZXhdLCBpbnB1dCk7XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXR0cmlidXRlTmFtZXMuZm9yRWFjaCgoYXR0ciwgaW5kZXgpID0+IHtcbiAgICAgICAgdGhpcy5fc2V0T3JUb2dnbGVBdHRyaWJ1dGUoYXR0ciwgYXR0cmlidXRlc1ZhbHVlc1tpbmRleF0sIGlucHV0KTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIF9zZXRPclRvZ2dsZUF0dHJpYnV0ZShuYW1lLCB2YWx1ZSwgbm9kZSkge1xuICAgIGlmICghbmFtZSB8fCAhbm9kZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgbm9kZS5zZXRBdHRyaWJ1dGUobmFtZSwgKHR5cGVvZiB2YWx1ZSA9PT0gJ2Jvb2xlYW4nKSA/ICcnIDogdmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBub2RlLnJlbW92ZUF0dHJpYnV0ZShuYW1lKTtcbiAgICB9XG4gIH1cblxuICBfY29uc3RyYWludHNDaGFuZ2VkKHJlcXVpcmVkLCBtaW5sZW5ndGgsIG1heGxlbmd0aCwgcGF0dGVybikge1xuICAgIGlmICghdGhpcy5pbnZhbGlkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKCFyZXF1aXJlZCAmJiAhbWlubGVuZ3RoICYmICFtYXhsZW5ndGggJiYgIXBhdHRlcm4pIHtcbiAgICAgIHRoaXMuaW52YWxpZCA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnZhbGlkYXRlKCk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgY3VycmVudCBpbnB1dCB2YWx1ZSBzYXRpc2ZpZXMgYWxsIGNvbnN0cmFpbnRzIChpZiBhbnkpXG4gICAqIEByZXR1cm5zIHtib29sZWFufVxuICAgKi9cbiAgY2hlY2tWYWxpZGl0eSgpIHtcbiAgICBpZiAodGhpcy5yZXF1aXJlZCB8fCB0aGlzLnBhdHRlcm4gfHwgdGhpcy5tYXhsZW5ndGggfHwgdGhpcy5taW5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC5jaGVja1ZhbGlkaXR5KCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAhdGhpcy5pbnZhbGlkO1xuICAgIH1cbiAgfVxuXG4gIF9hZGRJbnB1dExpc3RlbmVycyhub2RlKSB7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIHRoaXMuX2JvdW5kT25JbnB1dCk7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCB0aGlzLl9ib3VuZE9uQ2hhbmdlKTtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCB0aGlzLl9ib3VuZE9uQmx1cik7XG4gICAgbm9kZS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIHRoaXMuX2JvdW5kT25Gb2N1cyk7XG4gIH1cblxuICBfcmVtb3ZlSW5wdXRMaXN0ZW5lcnMobm9kZSkge1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCB0aGlzLl9ib3VuZE9uSW5wdXQpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgdGhpcy5fYm91bmRPbkNoYW5nZSk7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgdGhpcy5fYm91bmRPbkJsdXIpO1xuICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLl9ib3VuZE9uRm9jdXMpO1xuICB9XG5cbiAgcmVhZHkoKSB7XG4gICAgc3VwZXIucmVhZHkoKTtcblxuICAgIHRoaXMuX2NyZWF0ZUNvbnN0cmFpbnRzT2JzZXJ2ZXIoKTtcblxuICAgIHRoaXMuX2JvdW5kT25JbnB1dCA9IHRoaXMuX29uSW5wdXQuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uQ2hhbmdlID0gdGhpcy5fb25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLl9ib3VuZE9uQmx1ciA9IHRoaXMuX29uQmx1ci5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT25Gb2N1cyA9IHRoaXMuX29uRm9jdXMuYmluZCh0aGlzKTtcblxuICAgIGNvbnN0IGRlZmF1bHRJbnB1dCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdbcGFydD1cInZhbHVlXCJdJyk7XG4gICAgdGhpcy5fc2xvdHRlZElucHV0ID0gdGhpcy5xdWVyeVNlbGVjdG9yKGAke3RoaXMuX3Nsb3R0ZWRUYWdOYW1lfVtzbG90PVwiJHt0aGlzLl9zbG90dGVkVGFnTmFtZX1cIl1gKTtcbiAgICB0aGlzLl9hZGRJbnB1dExpc3RlbmVycyhkZWZhdWx0SW5wdXQpO1xuICAgIHRoaXMuX2FkZElFTGlzdGVuZXJzKGRlZmF1bHRJbnB1dCk7XG4gICAgaWYgKHRoaXMuX3Nsb3R0ZWRJbnB1dCkge1xuICAgICAgdGhpcy5fYWRkSUVMaXN0ZW5lcnModGhpcy5fc2xvdHRlZElucHV0KTtcbiAgICAgIHRoaXMuX2FkZElucHV0TGlzdGVuZXJzKHRoaXMuX3Nsb3R0ZWRJbnB1dCk7XG4gICAgfVxuXG4gICAgdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiaW5wdXRcIl0sIFtuYW1lPVwidGV4dGFyZWFcIl0nKVxuICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ3Nsb3RjaGFuZ2UnLCB0aGlzLl9vblNsb3RDaGFuZ2UuYmluZCh0aGlzKSk7XG5cbiAgICBpZiAoISh3aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcykpIHtcbiAgICAgIHRoaXMudXBkYXRlU3R5bGVzKCk7XG4gICAgfVxuXG4gICAgdGhpcy4kLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsICgpID0+IHRoaXMuX3ZhbHVlQ2xlYXJpbmcgPSB0cnVlKTtcbiAgICB0aGlzLiQuY2xlYXJCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsICgpID0+IHRoaXMuX3ZhbHVlQ2xlYXJpbmcgPSBmYWxzZSk7XG4gICAgdGhpcy4kLmNsZWFyQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5fb25DbGVhckJ1dHRvbkNsaWNrLmJpbmQodGhpcykpO1xuICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX29uS2V5RG93bi5iaW5kKHRoaXMpKTtcblxuICAgIHZhciB1bmlxdWVJZCA9IFRleHRGaWVsZE1peGluLl91bmlxdWVJZCA9IDEgKyBUZXh0RmllbGRNaXhpbi5fdW5pcXVlSWQgfHwgMDtcbiAgICB0aGlzLl9lcnJvcklkID0gYCR7dGhpcy5jb25zdHJ1Y3Rvci5pc30tZXJyb3ItJHt1bmlxdWVJZH1gO1xuICAgIHRoaXMuX2xhYmVsSWQgPSBgJHt0aGlzLmNvbnN0cnVjdG9yLmlzfS1sYWJlbC0ke3VuaXF1ZUlkfWA7XG4gICAgdGhpcy5faW5wdXRJZCA9IGAke3RoaXMuY29uc3RydWN0b3IuaXN9LWlucHV0LSR7dW5pcXVlSWR9YDtcblxuICAgIC8vIEx1bW8gdGhlbWUgZGVmaW5lcyBhIG1heC1oZWlnaHQgdHJhbnNpdGlvbiBmb3IgdGhlIFwiZXJyb3ItbWVzc2FnZVwiXG4gICAgLy8gcGFydCBvbiBpbnZhbGlkIHN0YXRlIGNoYW5nZS5cbiAgICB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcignW3BhcnQ9XCJlcnJvci1tZXNzYWdlXCJdJylcbiAgICAgIC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgKCkgPT4ge1xuICAgICAgICB0aGlzLl9fb2JzZXJ2ZU9mZnNldEhlaWdodCgpO1xuICAgICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuXG4gICAqIGA8aXJvbi1mb3JtPmAgdXNlcyB0aGlzIHRvIGNoZWNrIHRoZSB2YWxpZGl0eSBmb3IgYWxsIGl0cyBlbGVtZW50cy5cbiAgICpcbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgdmFsdWUgaXMgdmFsaWQuXG4gICAqL1xuICB2YWxpZGF0ZSgpIHtcbiAgICByZXR1cm4gISh0aGlzLmludmFsaWQgPSAhdGhpcy5jaGVja1ZhbGlkaXR5KCkpO1xuICB9XG5cbiAgY2xlYXIoKSB7XG4gICAgdGhpcy52YWx1ZSA9ICcnO1xuICB9XG5cbiAgX29uQmx1cigpIHtcbiAgICB0aGlzLnZhbGlkYXRlKCk7XG4gIH1cblxuICBfb25Gb2N1cygpIHtcbiAgICBpZiAodGhpcy5hdXRvc2VsZWN0KSB7XG4gICAgICB0aGlzLmlucHV0RWxlbWVudC5zZWxlY3QoKTtcbiAgICAgIC8vIGlPUyA5IHdvcmthcm91bmQ6IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vYS83NDM2NTc0XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGlzLmlucHV0RWxlbWVudC5zZXRTZWxlY3Rpb25SYW5nZSgwLCA5OTk5KTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIFRoZSB3b3JrYXJvdW5kIG1heSBjYXVzZSBlcnJvcnMgb24gZGlmZmVyZW50IGlucHV0IHR5cGVzLlxuICAgICAgICAgIC8vIE5lZWRzIHRvIGJlIHN1cHByZXNzZWQuIFNlZSBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL2Zsb3cvaXNzdWVzLzYwNzBcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgX29uQ2xlYXJCdXR0b25DbGljayhlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIE5PVEUoeXVyaXkpOiBUaGlzIGxpbmUgd29uJ3QgYWZmZWN0IGZvY3VzIG9uIHRoZSBob3N0LiBDYW5ub3QgYmUgcHJvcGVybHkgdGVzdGVkLlxuICAgIHRoaXMuaW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgdGhpcy5jbGVhcigpO1xuICAgIHRoaXMuX3ZhbHVlQ2xlYXJpbmcgPSBmYWxzZTtcbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC8pKSB7XG4gICAgICAvLyBEaXNhYmxlIElFIGlucHV0XCIgZXZlbnQgcHJldmVudGlvbiBoZXJlLCB3ZSB3YW50IHRoZSBpbnB1dCBldmVudCBmcm9tXG4gICAgICAvLyBiZWxvdyB0byBwcm9wYWdhdGUgbm9ybWFsbHkuXG4gICAgICB0aGlzLl9fcHJldmVudElucHV0ID0gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGlucHV0RXZlbnQgPSBuZXcgRXZlbnQoJ2lucHV0Jywge2J1YmJsZXM6IHRydWUsIGNvbXBvc2VkOiB0cnVlfSk7XG4gICAgaW5wdXRFdmVudC5fX2Zyb21DbGVhckJ1dHRvbiA9IHRydWU7XG4gICAgY29uc3QgY2hhbmdlRXZlbnQgPSBuZXcgRXZlbnQoJ2NoYW5nZScsIHtidWJibGVzOiAhdGhpcy5fc2xvdHRlZElucHV0fSk7XG4gICAgY2hhbmdlRXZlbnQuX19mcm9tQ2xlYXJCdXR0b24gPSB0cnVlO1xuICAgIHRoaXMuaW5wdXRFbGVtZW50LmRpc3BhdGNoRXZlbnQoaW5wdXRFdmVudCk7XG4gICAgdGhpcy5pbnB1dEVsZW1lbnQuZGlzcGF0Y2hFdmVudChjaGFuZ2VFdmVudCk7XG4gIH1cblxuICBfb25LZXlEb3duKGUpIHtcbiAgICBpZiAoZS5rZXlDb2RlID09PSAyNyAmJiB0aGlzLmNsZWFyQnV0dG9uVmlzaWJsZSkge1xuICAgICAgY29uc3QgZGlzcGF0Y2hDaGFuZ2UgPSAhIXRoaXMudmFsdWU7XG4gICAgICB0aGlzLmNsZWFyKCk7XG4gICAgICBkaXNwYXRjaENoYW5nZSAmJiB0aGlzLmlucHV0RWxlbWVudC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJywge2J1YmJsZXM6ICF0aGlzLl9zbG90dGVkSW5wdXR9KSk7XG4gICAgfVxuICB9XG5cbiAgX2FkZElFTGlzdGVuZXJzKG5vZGUpIHtcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAobmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvVHJpZGVudC8pKSB7XG4gICAgICAvLyBJRTExIGRpc3BhdGNoZXMgYGlucHV0YCBldmVudCBpbiBmb2xsb3dpbmcgY2FzZXM6XG4gICAgICAvLyAtIGZvY3VzIG9yIGJsdXIsIHdoZW4gcGxhY2Vob2xkZXIgYXR0cmlidXRlIGlzIHNldFxuICAgICAgLy8gLSBwbGFjZWhvbGRlciBhdHRyaWJ1dGUgdmFsdWUgY2hhbmdlZFxuICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubWljcm9zb2Z0LmNvbS9lbi11cy9taWNyb3NvZnQtZWRnZS9wbGF0Zm9ybS9pc3N1ZXMvMTAxMjIwL1xuICAgICAgdGhpcy5fc2hvdWxkUHJldmVudElucHV0ID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9fcHJldmVudElucHV0ID0gdHJ1ZTtcbiAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IHtcbiAgICAgICAgICB0aGlzLl9fcHJldmVudElucHV0ID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuX3Nob3VsZFByZXZlbnRJbnB1dCk7XG4gICAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5fc2hvdWxkUHJldmVudElucHV0KTtcbiAgICAgIHRoaXMuX2NyZWF0ZVByb3BlcnR5T2JzZXJ2ZXIoJ3BsYWNlaG9sZGVyJywgdGhpcy5fc2hvdWxkUHJldmVudElucHV0KTtcbiAgICB9XG4gIH1cblxuICBfcmVtb3ZlSUVMaXN0ZW5lcnMobm9kZSkge1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChuYXZpZ2F0b3IudXNlckFnZW50Lm1hdGNoKC9UcmlkZW50LykpIHtcbiAgICAgIG5vZGUucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXNpbicsIHRoaXMuX3Nob3VsZFByZXZlbnRJbnB1dCk7XG4gICAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3Vzb3V0JywgdGhpcy5fc2hvdWxkUHJldmVudElucHV0KTtcbiAgICB9XG4gIH1cblxuICBfZ2V0QWN0aXZlRXJyb3JJZChpbnZhbGlkLCBlcnJvck1lc3NhZ2UsIGVycm9ySWQpIHtcbiAgICB0aGlzLl9zZXRPclRvZ2dsZUF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsXG4gICAgICAoZXJyb3JNZXNzYWdlICYmIGludmFsaWQgPyBlcnJvcklkIDogdW5kZWZpbmVkKSxcbiAgICAgIHRoaXMuZm9jdXNFbGVtZW50KTtcbiAgfVxuXG4gIF9nZXRBY3RpdmVMYWJlbElkKGxhYmVsLCBfbGFiZWxJZCwgX2lucHV0SWQpIHtcbiAgICBsZXQgaWRzID0gX2lucHV0SWQ7XG4gICAgaWYgKGxhYmVsKSB7XG4gICAgICBpZHMgPSBgJHtfbGFiZWxJZH0gJHtfaW5wdXRJZH1gO1xuICAgIH1cbiAgICB0aGlzLmZvY3VzRWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWxsZWRieScsIGlkcyk7XG4gIH1cblxuICBfZ2V0RXJyb3JNZXNzYWdlQXJpYUhpZGRlbihpbnZhbGlkLCBlcnJvck1lc3NhZ2UsIGVycm9ySWQpIHtcbiAgICByZXR1cm4gKCEoZXJyb3JNZXNzYWdlICYmIGludmFsaWQgPyBlcnJvcklkIDogdW5kZWZpbmVkKSkudG9TdHJpbmcoKTtcbiAgfVxuXG4gIF9kaXNwYXRjaElyb25SZXNpemVFdmVudElmTmVlZGVkKHNpemVQcm9wZXJ0eU5hbWUsIHZhbHVlKSB7XG4gICAgY29uc3QgcHJldmlvdXNTaXplUHJvcGVydHlOYW1lID0gJ19fcHJldmlvdXMnICsgc2l6ZVByb3BlcnR5TmFtZTtcbiAgICBpZiAodGhpc1twcmV2aW91c1NpemVQcm9wZXJ0eU5hbWVdICE9PSB1bmRlZmluZWRcbiAgICAgICAgJiYgdGhpc1twcmV2aW91c1NpemVQcm9wZXJ0eU5hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KFxuICAgICAgICBuZXcgQ3VzdG9tRXZlbnQoJ2lyb24tcmVzaXplJywge2J1YmJsZXM6IHRydWV9KVxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzW3ByZXZpb3VzU2l6ZVByb3BlcnR5TmFtZV0gPSB2YWx1ZTtcbiAgfVxuXG4gIF9fb2JzZXJ2ZU9mZnNldEhlaWdodCgpIHtcbiAgICB0aGlzLl9kaXNwYXRjaElyb25SZXNpemVFdmVudElmTmVlZGVkKCdIZWlnaHQnLCB0aGlzLm9mZnNldEhlaWdodCk7XG4gIH1cblxuICAvKipcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHByb3AsIG9sZFZhbCwgbmV3VmFsKSB7XG4gICAgc3VwZXIuYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKHByb3AsIG9sZFZhbCwgbmV3VmFsKTtcbiAgICAvLyBOZWVkZWQgdW50aWwgRWRnZSBoYXMgQ1NTIEN1c3RvbSBQcm9wZXJ0aWVzIChwcmVzZW50IGluIEVkZ2UgUHJldmlldylcbiAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgKi9cbiAgICBpZiAoISh3aW5kb3cuU2hhZHlDU1MgJiYgd2luZG93LlNoYWR5Q1NTLm5hdGl2ZUNzcykgJiZcbiAgICAgIC9eKGZvY3VzZWR8Zm9jdXMtcmluZ3xpbnZhbGlkfGRpc2FibGVkfHBsYWNlaG9sZGVyfGhhcy12YWx1ZSkkLy50ZXN0KHByb3ApKSB7XG4gICAgICB0aGlzLnVwZGF0ZVN0eWxlcygpO1xuICAgIH1cblxuICAgIC8vIFNhZmFyaSBoYXMgYW4gaXNzdWUgd2l0aCByZXBhaW50aW5nIHNoYWRvdyByb290IGVsZW1lbnQgc3R5bGVzIHdoZW4gYSBob3N0IGF0dHJpYnV0ZSBjaGFuZ2VzLlxuICAgIC8vIE5lZWQgdGhpcyB3b3JrYXJvdW5kICh0b2dnbGUgYW55IGlubGluZSBjc3MgcHJvcGVydHkgb24gYW5kIG9mZikgdW50aWwgdGhlIGlzc3VlIGdldHMgZml4ZWQuXG4gICAgY29uc3QgaXNTYWZhcmkgPSAvXigoPyFjaHJvbWV8YW5kcm9pZCkuKSpzYWZhcmkvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAqL1xuICAgIGlmIChpc1NhZmFyaSAmJiB0aGlzLnJvb3QpIHtcbiAgICAgIGNvbnN0IFdFQktJVF9QUk9QRVJUWSA9ICctd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHknO1xuICAgICAgdGhpcy5yb290LnF1ZXJ5U2VsZWN0b3JBbGwoJyonKS5mb3JFYWNoKGVsID0+IHtcbiAgICAgICAgZWwuc3R5bGVbV0VCS0lUX1BST1BFUlRZXSA9ICd2aXNpYmxlJztcbiAgICAgICAgZWwuc3R5bGVbV0VCS0lUX1BST1BFUlRZXSA9ICcnO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgY29tbWl0cyBhIHZhbHVlIGNoYW5nZS5cbiAgICpcbiAgICogQGV2ZW50IGNoYW5nZVxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgdmFsdWUgaXMgY2hhbmdlZCBieSB0aGUgdXNlcjogb24gZXZlcnkgdHlwaW5nIGtleXN0cm9rZSxcbiAgICogYW5kIHRoZSB2YWx1ZSBpcyBjbGVhcmVkIHVzaW5nIHRoZSBjbGVhciBidXR0b24uXG4gICAqXG4gICAqIEBldmVudCBpbnB1dFxuICAgKi9cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiB0aGUgc2l6ZSBvZiB0aGUgZWxlbWVudCBjaGFuZ2VzLlxuICAgKlxuICAgKiBAZXZlbnQgaXJvbi1yZXNpemVcbiAgICovXG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE3IFZhYWRpbiBMdGQuXG5UaGlzIHByb2dyYW0gaXMgYXZhaWxhYmxlIHVuZGVyIEFwYWNoZSBMaWNlbnNlIFZlcnNpb24gMi4wLCBhdmFpbGFibGUgYXQgaHR0cHM6Ly92YWFkaW4uY29tL2xpY2Vuc2UvXG4qL1xuaW1wb3J0IHsgUG9seW1lckVsZW1lbnQgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItZWxlbWVudC5qcyc7XG5cbmltcG9ydCB7IFRleHRGaWVsZE1peGluIH0gZnJvbSAnLi92YWFkaW4tdGV4dC1maWVsZC1taXhpbi5qcyc7XG5pbXBvcnQgeyBFbGVtZW50TWl4aW4gfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1lbGVtZW50LW1peGluL3ZhYWRpbi1lbGVtZW50LW1peGluLmpzJztcbmltcG9ydCB7IGh0bWwgfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5pbXBvcnQgeyBUaGVtYWJsZU1peGluIH0gZnJvbSAnQHZhYWRpbi92YWFkaW4tdGhlbWFibGUtbWl4aW4vdmFhZGluLXRoZW1hYmxlLW1peGluLmpzJztcbi8qKlxuICogYDx2YWFkaW4tdGV4dC1maWVsZD5gIGlzIGEgV2ViIENvbXBvbmVudCBmb3IgdGV4dCBmaWVsZCBjb250cm9sIGluIGZvcm1zLlxuICpcbiAqIGBgYGh0bWxcbiAqIDx2YWFkaW4tdGV4dC1maWVsZCBsYWJlbD1cIkZpcnN0IE5hbWVcIj5cbiAqIDwvdmFhZGluLXRleHQtZmllbGQ+XG4gKiBgYGBcbiAqXG4gKiAjIyMgUHJlZml4ZXMgYW5kIHN1ZmZpeGVzXG4gKlxuICogVGhlc2UgYXJlIGNoaWxkIGVsZW1lbnRzIG9mIGEgYDx2YWFkaW4tdGV4dC1maWVsZD5gIHRoYXQgYXJlIGRpc3BsYXllZFxuICogaW5saW5lIHdpdGggdGhlIGlucHV0LCBiZWZvcmUgb3IgYWZ0ZXIuXG4gKiBJbiBvcmRlciBmb3IgYW4gZWxlbWVudCB0byBiZSBjb25zaWRlcmVkIGFzIGEgcHJlZml4LCBpdCBtdXN0IGhhdmUgdGhlIHNsb3RcbiAqIGF0dHJpYnV0ZSBzZXQgdG8gYHByZWZpeGAgKGFuZCBzaW1pbGFybHkgZm9yIGBzdWZmaXhgKS5cbiAqXG4gKiBgYGBodG1sXG4gKiA8dmFhZGluLXRleHQtZmllbGQgbGFiZWw9XCJFbWFpbCBhZGRyZXNzXCI+XG4gKiAgIDxkaXYgc2xvdD1cInByZWZpeFwiPlNlbnQgdG86PC9kaXY+XG4gKiAgIDxkaXYgc2xvdD1cInN1ZmZpeFwiPkB2YWFkaW4uY29tPC9kaXY+XG4gKiA8L3ZhYWRpbi10ZXh0LWFyZWE+XG4gKiBgYGBcbiAqXG4gKiAjIyMgU3R5bGluZ1xuICpcbiAqIFRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBDdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbiAqIC0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tXG4gKiBgLS12YWFkaW4tdGV4dC1maWVsZC1kZWZhdWx0LXdpZHRoYCB8IFNldCB0aGUgZGVmYXVsdCB3aWR0aCBvZiB0aGUgaW5wdXQgZmllbGQgfCBgMTJlbWBcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHNoYWRvdyBET00gcGFydHMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBQYXJ0IG5hbWUgfCBEZXNjcmlwdGlvblxuICogLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tXG4gKiBgbGFiZWxgIHwgVGhlIGxhYmVsIGVsZW1lbnRcbiAqIGBpbnB1dC1maWVsZGAgfCBUaGUgZWxlbWVudCB0aGF0IHdyYXBzIHByZWZpeCwgdmFsdWUgYW5kIHN1ZmZpeFxuICogYHZhbHVlYCB8IFRoZSB0ZXh0IHZhbHVlIGVsZW1lbnQgaW5zaWRlIHRoZSBgaW5wdXQtZmllbGRgIGVsZW1lbnRcbiAqIGBlcnJvci1tZXNzYWdlYCB8IFRoZSBlcnJvciBtZXNzYWdlIGVsZW1lbnRcbiAqXG4gKiBUaGUgZm9sbG93aW5nIHN0YXRlIGF0dHJpYnV0ZXMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcbiAqXG4gKiBBdHRyaWJ1dGUgICAgfCBEZXNjcmlwdGlvbiB8IFBhcnQgbmFtZVxuICogLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLVxuICogYGRpc2FibGVkYCB8IFNldCB0byBhIGRpc2FibGVkIHRleHQgZmllbGQgfCA6aG9zdFxuICogYGhhcy12YWx1ZWAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBoYXMgYSB2YWx1ZSB8IDpob3N0XG4gKiBgaGFzLWxhYmVsYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGhhcyBhIGxhYmVsIHwgOmhvc3RcbiAqIGBpbnZhbGlkYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGludmFsaWQgfCA6aG9zdFxuICogYGlucHV0LXByZXZlbnRlZGAgfCBUZW1wb3JhcmlseSBzZXQgd2hlbiBpbnZhbGlkIGlucHV0IGlzIHByZXZlbnRlZCB8IDpob3N0XG4gKiBgZm9jdXNlZGAgfCBTZXQgd2hlbiB0aGUgZWxlbWVudCBpcyBmb2N1c2VkIHwgOmhvc3RcbiAqIGBmb2N1cy1yaW5nYCB8IFNldCB3aGVuIHRoZSBlbGVtZW50IGlzIGtleWJvYXJkIGZvY3VzZWQgfCA6aG9zdFxuICogYHJlYWRvbmx5YCB8IFNldCB0byBhIHJlYWRvbmx5IHRleHQgZmllbGQgfCA6aG9zdFxuICpcbiAqIFNlZSBbVGhlbWFibGVNaXhpbiDigJMgaG93IHRvIGFwcGx5IHN0eWxlcyBmb3Igc2hhZG93IHBhcnRzXShodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi10aGVtYWJsZS1taXhpbi93aWtpKVxuICpcbiAqIEBtZW1iZXJvZiBWYWFkaW5cbiAqIEBtaXhlcyBWYWFkaW4uVGV4dEZpZWxkTWl4aW5cbiAqIEBtaXhlcyBWYWFkaW4uVGhlbWFibGVNaXhpblxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKi9cbmNsYXNzIFRleHRGaWVsZEVsZW1lbnQgZXh0ZW5kcyBFbGVtZW50TWl4aW4oVGV4dEZpZWxkTWl4aW4oVGhlbWFibGVNaXhpbihQb2x5bWVyRWxlbWVudCkpKSB7XG4gIHN0YXRpYyBnZXQgdGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIGh0bWxgXG4gICAgPHN0eWxlIGluY2x1ZGU9XCJ2YWFkaW4tdGV4dC1maWVsZC1zaGFyZWQtc3R5bGVzXCI+XG4gICAgICAvKiBwb2x5bWVyLWNsaSBsaW50ZXIgYnJlYWtzIHdpdGggZW1wdHkgbGluZSAqL1xuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGNsYXNzPVwidmFhZGluLXRleHQtZmllbGQtY29udGFpbmVyXCI+XG5cbiAgICAgIDxsYWJlbCBwYXJ0PVwibGFiZWxcIiBvbi1jbGljaz1cImZvY3VzXCIgaWQ9XCJbW19sYWJlbElkXV1cIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8ZGl2IHBhcnQ9XCJpbnB1dC1maWVsZFwiIGlkPVwiW1tfaW5wdXRJZF1dXCI+XG5cbiAgICAgICAgPHNsb3QgbmFtZT1cInByZWZpeFwiPjwvc2xvdD5cblxuICAgICAgICA8c2xvdCBuYW1lPVwiaW5wdXRcIj5cbiAgICAgICAgICA8aW5wdXQgcGFydD1cInZhbHVlXCI+XG4gICAgICAgIDwvc2xvdD5cblxuICAgICAgICA8ZGl2IHBhcnQ9XCJjbGVhci1idXR0b25cIiBpZD1cImNsZWFyQnV0dG9uXCIgcm9sZT1cImJ1dHRvblwiIGFyaWEtbGFiZWxcXCQ9XCJbW2kxOG4uY2xlYXJdXVwiPjwvZGl2PlxuICAgICAgICA8c2xvdCBuYW1lPVwic3VmZml4XCI+PC9zbG90PlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBwYXJ0PVwiZXJyb3ItbWVzc2FnZVwiIGlkPVwiW1tfZXJyb3JJZF1dXCIgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgYXJpYS1oaWRkZW5cXCQ9XCJbW19nZXRFcnJvck1lc3NhZ2VBcmlhSGlkZGVuKGludmFsaWQsIGVycm9yTWVzc2FnZSwgX2Vycm9ySWQpXV1cIj5bW2Vycm9yTWVzc2FnZV1dPC9kaXY+XG5cbiAgICA8L2Rpdj5cbmA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IGlzKCkge1xuICAgIHJldHVybiAndmFhZGluLXRleHQtZmllbGQnO1xuICB9XG5cbiAgc3RhdGljIGdldCB2ZXJzaW9uKCkge1xuICAgIHJldHVybiAnMi40LjE0JztcbiAgfVxuXG4gIHN0YXRpYyBnZXQgcHJvcGVydGllcygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgLyoqXG4gICAgICAgKiBJZGVudGlmaWVzIGEgbGlzdCBvZiBwcmUtZGVmaW5lZCBvcHRpb25zIHRvIHN1Z2dlc3QgdG8gdGhlIHVzZXIuXG4gICAgICAgKiBUaGUgdmFsdWUgbXVzdCBiZSB0aGUgaWQgb2YgYSA8ZGF0YWxpc3Q+IGVsZW1lbnQgaW4gdGhlIHNhbWUgZG9jdW1lbnQuXG4gICAgICAgKi9cbiAgICAgIGxpc3Q6IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIEEgcmVndWxhciBleHByZXNzaW9uIHRoYXQgdGhlIHZhbHVlIGlzIGNoZWNrZWQgYWdhaW5zdC5cbiAgICAgICAqIFRoZSBwYXR0ZXJuIG11c3QgbWF0Y2ggdGhlIGVudGlyZSB2YWx1ZSwgbm90IGp1c3Qgc29tZSBzdWJzZXQuXG4gICAgICAgKi9cbiAgICAgIHBhdHRlcm46IHtcbiAgICAgICAgdHlwZTogU3RyaW5nXG4gICAgICB9LFxuXG4gICAgICAvKipcbiAgICAgICAqIE1lc3NhZ2UgdG8gc2hvdyB0byB0aGUgdXNlciB3aGVuIHZhbGlkYXRpb24gZmFpbHMuXG4gICAgICAgKi9cbiAgICAgIHRpdGxlOiB7XG4gICAgICAgIHR5cGU6IFN0cmluZ1xuICAgICAgfVxuICAgIH07XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFRleHRGaWVsZEVsZW1lbnQuaXMsIFRleHRGaWVsZEVsZW1lbnQpO1xuXG5leHBvcnQgeyBUZXh0RmllbGRFbGVtZW50IH07XG4iLCJpbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9jb2xvci5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy90eXBvZ3JhcGh5LmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL21peGlucy9yZXF1aXJlZC1maWVsZC5qcyc7XG5pbXBvcnQgJ0B2YWFkaW4vdmFhZGluLW1hdGVyaWFsLXN0eWxlcy9mb250LWljb25zLmpzJztcbmltcG9ydCAnQHZhYWRpbi92YWFkaW4tbWF0ZXJpYWwtc3R5bGVzL21peGlucy9maWVsZC1idXR0b24uanMnO1xuaW1wb3J0IHsgaHRtbCB9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGh0bWxgPGRvbS1tb2R1bGUgaWQ9XCJtYXRlcmlhbC10ZXh0LWZpZWxkXCIgdGhlbWUtZm9yPVwidmFhZGluLXRleHQtZmllbGRcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZSBpbmNsdWRlPVwibWF0ZXJpYWwtcmVxdWlyZWQtZmllbGQgbWF0ZXJpYWwtZmllbGQtYnV0dG9uXCI+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWJvZHktdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tbWF0ZXJpYWwtYm9keS1mb250LXNpemUpO1xuICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLW1hdGVyaWFsLWZvbnQtZmFtaWx5KTtcbiAgICAgICAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gICAgICAgIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0OjpiZWZvcmUge1xuICAgICAgICBsaW5lLWhlaWdodDogMzJweDtcbiAgICAgIH1cblxuICAgICAgLyogU3RyYW5nZSBneW1uYXN0aWNzIHRvIG1ha2UgZmllbGRzIHZlcnRpY2FsbHkgYWxpZ24gbmljZWx5IGluIG1vc3QgY2FzZXNcbiAgICAgICAgIChubyBsYWJlbCwgd2l0aCBsYWJlbCwgd2l0aG91dCBwcmVmaXgsIHdpdGggcHJlZml4LCBldGMuKSAqL1xuXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXSkge1xuICAgICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJsYWJlbFwiXTplbXB0eSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl06ZW1wdHk6OmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6IFwiwqBcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC0wLjJweDsgLyogTk9URShwbGF0b3NoYSk6IEFkanVzdHMgZm9yIHdyb25nIGZsZXggYmFzZWxpbmUgaW4gQ2hyb21lICYgU2FmYXJpICovXG4gICAgICAgIGhlaWdodDogMzJweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdOjpiZWZvcmUsXG4gICAgICBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICByaWdodDogMDtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIHRyYW5zZm9ybS1vcmlnaW46IDUwJSAwJTtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1iYWNrZ3JvdW5kLWNvbG9yLCAjMDAwKTtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1vcGFjaXR5LCAwLjQyKTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYXRlcmlhbC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgaGVpZ2h0OiAycHg7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgdHJhbnNmb3JtOiBzY2FsZVgoMCk7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNzVzO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cImxhYmVsXCJdLFxuICAgICAgOmhvc3QoW2Rpc2FibGVkXSkgW3BhcnQ9XCJ2YWx1ZVwiXSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKGlucHV0KSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKHRleHRhcmVhKSxcbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKFtwYXJ0PVwidmFsdWVcIl0pIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICAtd2Via2l0LXRleHQtZmlsbC1jb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl0sXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZChpbnB1dCksXG4gICAgICA6aG9zdChbZGlzYWJsZWRdKSBbcGFydD1cImlucHV0LWZpZWxkXCJdIDo6c2xvdHRlZCh0ZXh0YXJlYSksXG4gICAgICAvKiBTbG90dGVkIGJ5IHZhYWRpbi1zZWxlY3QtdGV4dC1maWVsZCAqL1xuICAgICAgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXSA6OnNsb3R0ZWQoW3BhcnQ9XCJ2YWx1ZVwiXSkge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgcGFkZGluZzogOHB4IDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBmb250LXNpemU6IDFlbTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IGluaGVyaXQ7XG4gICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLyogRGlzYWJsZSBkZWZhdWx0IGludmFsaWQgc3R5bGUgaW4gRmlyZWZveCAqL1xuICAgICAgICBib3gtc2hhZG93OiBub25lO1xuICAgICAgfVxuXG4gICAgICAvKiBUT0RPOiB0aGUgdGV4dCBvcGFjaXR5IHNob3VsZCBiZSA0MiUsIGJ1dCB0aGUgZGlzYWJsZWQgc3R5bGUgaXMgMzglLlxuICAgICAgV291bGQgbmVlZCB0byBpbnRyb2R1Y2UgYW5vdGhlciBwcm9wZXJ0eSBmb3IgaXQgaWYgd2Ugd2FudCB0byBiZSAxMDAlIGFjY3VyYXRlLiAqL1xuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXTo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1tYXRlcmlhbC1kaXNhYmxlZC10ZXh0LWNvbG9yKTtcbiAgICAgICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjE3NXMgMC4wNXM7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwidmFsdWVcIl06LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cInZhbHVlXCJdOjotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLWRpc2FibGVkLXRleHQtY29sb3IpO1xuICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuMTc1cyAwLjA1cztcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgIH1cblxuICAgICAgW3BhcnQ9XCJ2YWx1ZVwiXTo6cGxhY2Vob2xkZXIge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4xNzVzIDAuMXM7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtoYXMtbGFiZWxdOm5vdChbZm9jdXNlZF0pOm5vdChbaW52YWxpZF0pOm5vdChbdGhlbWU9XCJhbHdheXMtZmxvYXQtbGFiZWxcIl0pKSBbcGFydD1cInZhbHVlXCJdOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hhcy1sYWJlbF06bm90KFtmb2N1c2VkXSk6bm90KFtpbnZhbGlkXSk6bm90KFt0aGVtZT1cImFsd2F5cy1mbG9hdC1sYWJlbFwiXSkpIFtwYXJ0PVwidmFsdWVcIl06Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbaGFzLWxhYmVsXTpub3QoW2ZvY3VzZWRdKTpub3QoW2ludmFsaWRdKTpub3QoW3RoZW1lPVwiYWx3YXlzLWZsb2F0LWxhYmVsXCJdKSkgW3BhcnQ9XCJ2YWx1ZVwiXTo6cGxhY2Vob2xkZXIge1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB0cmFuc2l0aW9uLWRlbGF5OiAwO1xuICAgICAgfVxuXG4gICAgICAvKiBJRTExIGRvZXNu4oCZdCBzaG93IHRoZSBwbGFjZWhvbGRlciB3aGVuIHRoZSBpbnB1dCBpcyBmb2N1c2VkLCBzbyBpdOKAmXMgYmFzaWNhbGx5IHVzZWxlc3MgZm9yIHRoaXMgdGhlbWUgKi9cbiAgICAgIDpob3N0KFtoYXMtbGFiZWxdKSBbcGFydD1cInZhbHVlXCJdOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICB9XG5cbiAgICAgIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICB3aWR0aDogMTMzJTtcbiAgICAgICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMTc1cywgY29sb3IgMC4xNzVzLCB3aWR0aCAwLjE3NXM7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBlYXNlLCBzdGVwLWVuZDtcbiAgICAgIH1cblxuICAgICAgLyogVE9ETzogdXNpbmcgdW5zdXBwb3J0ZWQgc2VsZWN0b3IgdG8gZml4IElFMTEgKGV2ZW4gdGhvdWdodCB0aGUgbGFiZWwgZWxlbWVudCBpcyBzY2FsZWQgZG93bixcbiAgICAgICAgIHRoZSAxMzMlIHdpZHRoIHN0aWxsIHRha2VzIHRoZSBzYW1lIHNwYWNlIGFzIGFuIHVuc2NhbGVkIGVsZW1lbnQgKi9cbiAgICAgIDo6LW1zLWJhY2tkcm9wLFxuICAgICAgLnZhYWRpbi10ZXh0LWZpZWxkLWNvbnRhaW5lciB7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC8qIFNhbWUgZml4IGZvciBNUyBFZGdlIF5eICAgKi9cbiAgICAgIEBzdXBwb3J0cyAoLW1zLWltZS1hbGlnbjphdXRvKSB7XG4gICAgICAgIC52YWFkaW4tdGV4dC1maWVsZC1jb250YWluZXIge1xuICAgICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgOmhvc3QoOmhvdmVyOm5vdChbcmVhZG9ubHldKTpub3QoW2ludmFsaWRdKSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YmVmb3JlIHtcbiAgICAgICAgb3BhY2l0eTogdmFyKC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1ob3Zlci1vcGFjaXR5LCAwLjg3KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ZvY3VzZWRdOm5vdChbaW52YWxpZF0pKSBbcGFydD1cImxhYmVsXCJdIHtcbiAgICAgICAgY29sb3I6IHZhcigtLW1hdGVyaWFsLXByaW1hcnktdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtmb2N1c2VkXSkgW3BhcnQ9XCJpbnB1dC1maWVsZFwiXTo6YWZ0ZXIsXG4gICAgICA6aG9zdChbaW52YWxpZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmFmdGVyIHtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xuICAgICAgICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMC4xNzVzLCBvcGFjaXR5IDAuMTc1cztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2ludmFsaWRdKSBbcGFydD1cImlucHV0LWZpZWxkXCJdOjphZnRlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW1hdGVyaWFsLWVycm9yLWNvbG9yKTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2lucHV0LXByZXZlbnRlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZXJyb3ItdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIHtcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0ge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtZGlzYWJsZWQtdGV4dC1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtkaXNhYmxlZF0pIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl06OmJlZm9yZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoOTBkZWcsIHZhcigtLV9tYXRlcmlhbC10ZXh0LWZpZWxkLWlucHV0LWxpbmUtYmFja2dyb3VuZC1jb2xvciwgIzAwMCkgMCwgdmFyKC0tX21hdGVyaWFsLXRleHQtZmllbGQtaW5wdXQtbGluZS1iYWNrZ3JvdW5kLWNvbG9yLCAjMDAwKSAycHgsIHRyYW5zcGFyZW50IDJweCk7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogNHB4IDFweDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdC14O1xuICAgICAgfVxuXG4gICAgICAvKiBPbmx5IHRhcmdldCB0aGUgdmlzaWJsZSBmbG9hdGluZyBsYWJlbCAqL1xuICAgICAgOmhvc3QoW2hhcy1sYWJlbF06bm90KFtoYXMtdmFsdWVdKTpub3QoW2ZvY3VzZWRdKTpub3QoW2ludmFsaWRdKTpub3QoW3RoZW1lfj1cImFsd2F5cy1mbG9hdC1sYWJlbFwiXSkpIFtwYXJ0PVwibGFiZWxcIl0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgLyogSUUxMSBkb2VzbuKAmXQgd29yayB3aXRoIGNhbGMgaW5zaWRlIHRoZSB0cmFuc2xhdGUgZnVuY3Rpb24sIHNvIHdlIG5lZWQgdG8gaGF2ZSBhIGZpeGVkIHBpeGVsIHZhbHVlIGluc3RlYWQgb2YgNTAlICsgMTZweCAqL1xuICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHRyYW5zbGF0ZVkoMjRweCk7XG4gICAgICAgIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLCBlYXNlLCBzdGVwLXN0YXJ0O1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgICAgdHJhbnNpdGlvbi1kZWxheTogMC4xcztcbiAgICAgIH1cblxuICAgICAgLyogU2xvdHRlZCBjb250ZW50ICovXG5cbiAgICAgIFtwYXJ0PVwiaW5wdXQtZmllbGRcIl0gOjpzbG90dGVkKCo6bm90KFtwYXJ0PVwidmFsdWVcIl0pOm5vdChbcGFydFxcJD1cIi1idXR0b25cIl0pOm5vdChpbnB1dCk6bm90KHRleHRhcmVhKSkge1xuICAgICAgICBjb2xvcjogdmFyKC0tbWF0ZXJpYWwtc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgfVxuXG4gICAgICBbcGFydD1cImNsZWFyLWJ1dHRvblwiXTo6YmVmb3JlIHtcbiAgICAgICAgY29udGVudDogdmFyKC0tbWF0ZXJpYWwtaWNvbnMtY2xlYXIpO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG4gIDwvdGVtcGxhdGU+XG48L2RvbS1tb2R1bGU+YDtcblxuZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCgkX2RvY3VtZW50Q29udGFpbmVyLmNvbnRlbnQpO1xuIiwiaW1wb3J0ICcuL3ZhYWRpbi10ZXh0LWZpZWxkLXN0eWxlcy5qcyc7XG5pbXBvcnQgJy4uLy4uL3NyYy92YWFkaW4tdGV4dC1maWVsZC5qcyc7XG4iLCIvKiBUaGlzIGZpbGUgaXMgYXV0b2dlbmVyYXRlZCBmcm9tIHNyYy92YWFkaW4tdXNhZ2Utc3RhdGlzdGljcy50cGwuaHRtbCAqL1xuLypcblxuVGhpcyBzY3JpcHQgZ2F0aGVycyB1c2FnZSBzdGF0aXN0aWNzIGZyb20gdGhlIGFwcGxpY2F0aW9uIHJ1bm5pbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZS5cblxuU3RhdGlzdGljcyBnYXRoZXJpbmcgaXMgYXV0b21hdGljYWxseSBkaXNhYmxlZCBhbmQgZXhjbHVkZWQgZnJvbSBwcm9kdWN0aW9uIGJ1aWxkcy5cblxuRm9yIGRldGFpbHMgYW5kIHRvIG9wdC1vdXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLlxuXG4qL1xuLypcbiAgRklYTUUocG9seW1lci1tb2R1bGl6ZXIpOiB0aGUgYWJvdmUgY29tbWVudHMgd2VyZSBleHRyYWN0ZWRcbiAgZnJvbSBIVE1MIGFuZCBtYXkgYmUgb3V0IG9mIHBsYWNlIGhlcmUuIFJldmlldyB0aGVtIGFuZFxuICB0aGVuIGRlbGV0ZSB0aGlzIGNvbW1lbnQhXG4qL1xuaW1wb3J0IHsgcnVuSWZEZXZlbG9wbWVudE1vZGUgfSBmcm9tICdAdmFhZGluL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yL3ZhYWRpbi1kZXZlbG9wbWVudC1tb2RlLWRldGVjdG9yLmpzJztcblxuZnVuY3Rpb24gbWF5YmVHYXRoZXJBbmRTZW5kU3RhdHMoKSB7XG4gIC8qKiB2YWFkaW4tZGV2LW1vZGU6c3RhcnRcbiAgKGZ1bmN0aW9uICgpIHtcbid1c2Ugc3RyaWN0JztcblxudmFyIF90eXBlb2YgPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIiA/IGZ1bmN0aW9uIChvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmo7XG59IDogZnVuY3Rpb24gKG9iaikge1xuICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbn07XG5cbnZhciBjbGFzc0NhbGxDaGVjayA9IGZ1bmN0aW9uIChpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59O1xuXG52YXIgY3JlYXRlQ2xhc3MgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gICAgaWYgKHByb3RvUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgICBpZiAoc3RhdGljUHJvcHMpIGRlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgICByZXR1cm4gQ29uc3RydWN0b3I7XG4gIH07XG59KCk7XG5cbnZhciBnZXRQb2x5bWVyVmVyc2lvbiA9IGZ1bmN0aW9uIGdldFBvbHltZXJWZXJzaW9uKCkge1xuICByZXR1cm4gd2luZG93LlBvbHltZXIgJiYgd2luZG93LlBvbHltZXIudmVyc2lvbjtcbn07XG5cbnZhciBTdGF0aXN0aWNzR2F0aGVyZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRpc3RpY3NHYXRoZXJlcihsb2dnZXIpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aXN0aWNzR2F0aGVyZXIpO1xuXG4gICAgdGhpcy5ub3cgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB0aGlzLmxvZ2dlciA9IGxvZ2dlcjtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFN0YXRpc3RpY3NHYXRoZXJlciwgW3tcbiAgICBrZXk6ICdmcmFtZXdvcmtWZXJzaW9uRGV0ZWN0b3JzJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZnJhbWV3b3JrVmVyc2lvbkRldGVjdG9ycygpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICdGbG93JzogZnVuY3Rpb24gRmxvdygpIHtcbiAgICAgICAgICBpZiAod2luZG93LlZhYWRpbiAmJiB3aW5kb3cuVmFhZGluLkZsb3cgJiYgd2luZG93LlZhYWRpbi5GbG93LmNsaWVudHMpIHtcbiAgICAgICAgICAgIHZhciBmbG93VmVyc2lvbnMgPSBPYmplY3Qua2V5cyh3aW5kb3cuVmFhZGluLkZsb3cuY2xpZW50cykubWFwKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5WYWFkaW4uRmxvdy5jbGllbnRzW2tleV07XG4gICAgICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGNsaWVudCkge1xuICAgICAgICAgICAgICByZXR1cm4gY2xpZW50LmdldFZlcnNpb25JbmZvO1xuICAgICAgICAgICAgfSkubWFwKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRWZXJzaW9uSW5mbygpLmZsb3c7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChmbG93VmVyc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gZmxvd1ZlcnNpb25zWzBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ1ZhYWRpbiBGcmFtZXdvcmsnOiBmdW5jdGlvbiBWYWFkaW5GcmFtZXdvcmsoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy52YWFkaW4gJiYgd2luZG93LnZhYWRpbi5jbGllbnRzKSB7XG4gICAgICAgICAgICB2YXIgZnJhbWV3b3JrVmVyc2lvbnMgPSBPYmplY3QudmFsdWVzKHdpbmRvdy52YWFkaW4uY2xpZW50cykuZmlsdGVyKGZ1bmN0aW9uIChjbGllbnQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGNsaWVudC5nZXRWZXJzaW9uSW5mbztcbiAgICAgICAgICAgIH0pLm1hcChmdW5jdGlvbiAoY2xpZW50KSB7XG4gICAgICAgICAgICAgIHJldHVybiBjbGllbnQuZ2V0VmVyc2lvbkluZm8oKS52YWFkaW5WZXJzaW9uO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoZnJhbWV3b3JrVmVyc2lvbnMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gZnJhbWV3b3JrVmVyc2lvbnNbMF07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnQW5ndWxhckpzJzogZnVuY3Rpb24gQW5ndWxhckpzKCkge1xuICAgICAgICAgIGlmICh3aW5kb3cuYW5ndWxhciAmJiB3aW5kb3cuYW5ndWxhci52ZXJzaW9uICYmIHdpbmRvdy5hbmd1bGFyLnZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuYW5ndWxhci52ZXJzaW9uLmZ1bGw7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnQW5ndWxhcic6IGZ1bmN0aW9uIEFuZ3VsYXIoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5uZykge1xuICAgICAgICAgICAgdmFyIHRhZ3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiW25nLXZlcnNpb25dXCIpO1xuICAgICAgICAgICAgaWYgKHRhZ3MubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gdGFnc1swXS5nZXRBdHRyaWJ1dGUoXCJuZy12ZXJzaW9uXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFwiVW5rbm93blwiO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ0JhY2tib25lLmpzJzogZnVuY3Rpb24gQmFja2JvbmVKcygpIHtcbiAgICAgICAgICBpZiAod2luZG93LkJhY2tib25lKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LkJhY2tib25lLlZFUlNJT047XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnUmVhY3QnOiBmdW5jdGlvbiBSZWFjdCgpIHtcbiAgICAgICAgICB2YXIgcmVhY3RTZWxlY3RvciA9ICdbZGF0YS1yZWFjdHJvb3RdLCBbZGF0YS1yZWFjdGlkXSc7XG4gICAgICAgICAgaWYgKCEhZG9jdW1lbnQucXVlcnlTZWxlY3RvcihyZWFjdFNlbGVjdG9yKSkge1xuICAgICAgICAgICAgLy8gUmVhY3QgZG9lcyBub3QgcHVibGlzaCB0aGUgdmVyc2lvbiBieSBkZWZhdWx0XG4gICAgICAgICAgICByZXR1cm4gXCJ1bmtub3duXCI7XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnRW1iZXInOiBmdW5jdGlvbiBFbWJlcigpIHtcbiAgICAgICAgICBpZiAod2luZG93LkVtICYmIHdpbmRvdy5FbS5WRVJTSU9OKSB7XG4gICAgICAgICAgICByZXR1cm4gd2luZG93LkVtLlZFUlNJT047XG4gICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuRW1iZXIgJiYgd2luZG93LkVtYmVyLlZFUlNJT04pIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuRW1iZXIuVkVSU0lPTjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdqUXVlcnknOiBmdW5jdGlvbiAoX2pRdWVyeSkge1xuICAgICAgICAgIGZ1bmN0aW9uIGpRdWVyeSgpIHtcbiAgICAgICAgICAgIHJldHVybiBfalF1ZXJ5LmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgalF1ZXJ5LnRvU3RyaW5nID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcmV0dXJuIF9qUXVlcnkudG9TdHJpbmcoKTtcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgcmV0dXJuIGpRdWVyeTtcbiAgICAgICAgfShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBqUXVlcnkgPT09ICdmdW5jdGlvbicgJiYgalF1ZXJ5LnByb3RvdHlwZS5qcXVlcnkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuIGpRdWVyeS5wcm90b3R5cGUuanF1ZXJ5O1xuICAgICAgICAgIH1cbiAgICAgICAgfSksXG4gICAgICAgICdQb2x5bWVyJzogZnVuY3Rpb24gUG9seW1lcigpIHtcbiAgICAgICAgICB2YXIgdmVyc2lvbiA9IGdldFBvbHltZXJWZXJzaW9uKCk7XG4gICAgICAgICAgaWYgKHZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICAgICAgJ0xpdEVsZW1lbnQnOiBmdW5jdGlvbiBMaXRFbGVtZW50KCkge1xuICAgICAgICAgIHZhciB2ZXJzaW9uID0gd2luZG93LmxpdEVsZW1lbnRWZXJzaW9ucyAmJiB3aW5kb3cubGl0RWxlbWVudFZlcnNpb25zWzBdO1xuICAgICAgICAgIGlmICh2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdmVyc2lvbjtcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgICdMaXRIdG1sJzogZnVuY3Rpb24gTGl0SHRtbCgpIHtcbiAgICAgICAgICB2YXIgdmVyc2lvbiA9IHdpbmRvdy5saXRIdG1sVmVyc2lvbnMgJiYgd2luZG93LmxpdEh0bWxWZXJzaW9uc1swXTtcbiAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICAnVnVlLmpzJzogZnVuY3Rpb24gVnVlSnMoKSB7XG4gICAgICAgICAgaWYgKHdpbmRvdy5WdWUpIHtcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3cuVnVlLnZlcnNpb247XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldFVzZWRWYWFkaW5FbGVtZW50cycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZWRWYWFkaW5FbGVtZW50cyhlbGVtZW50cykge1xuICAgICAgdmFyIHZlcnNpb24gPSBnZXRQb2x5bWVyVmVyc2lvbigpO1xuICAgICAgdmFyIGVsZW1lbnRDbGFzc2VzID0gdm9pZCAwO1xuICAgICAgLy8gTk9URTogSW4gY2FzZSB5b3UgZWRpdCB0aGUgY29kZSBoZXJlLCBZT1UgTVVTVCBVUERBVEUgYW55IHN0YXRpc3RpY3MgcmVwb3J0aW5nIGNvZGUgaW4gRmxvdy5cbiAgICAgIC8vIENoZWNrIGFsbCBsb2NhdGlvbnMgY2FsbGluZyB0aGUgbWV0aG9kIGdldEVudHJpZXMoKSBpblxuICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL3ZhYWRpbi9mbG93L2Jsb2IvbWFzdGVyL2Zsb3ctc2VydmVyL3NyYy9tYWluL2phdmEvY29tL3ZhYWRpbi9mbG93L2ludGVybmFsL1VzYWdlU3RhdGlzdGljcy5qYXZhI0wxMDZcbiAgICAgIC8vIEN1cnJlbnRseSBpdCBpcyBvbmx5IHVzZWQgYnkgQm9vdHN0cmFwSGFuZGxlci5cbiAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24uaW5kZXhPZignMicpID09PSAwKSB7XG4gICAgICAgIC8vIFBvbHltZXIgMjogY29tcG9uZW50cyBjbGFzc2VzIGFyZSBzdG9yZWQgaW4gd2luZG93LlZhYWRpblxuICAgICAgICBlbGVtZW50Q2xhc3NlcyA9IE9iamVjdC5rZXlzKHdpbmRvdy5WYWFkaW4pLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgIHJldHVybiB3aW5kb3cuVmFhZGluW2NdO1xuICAgICAgICB9KS5maWx0ZXIoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICByZXR1cm4gYy5pcztcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBQb2x5bWVyIDM6IGNvbXBvbmVudHMgY2xhc3NlcyBhcmUgc3RvcmVkIGluIHdpbmRvdy5WYWFkaW4ucmVnaXN0cmF0aW9uc1xuICAgICAgICBlbGVtZW50Q2xhc3NlcyA9IHdpbmRvdy5WYWFkaW4ucmVnaXN0cmF0aW9ucyB8fCBbXTtcbiAgICAgIH1cbiAgICAgIGVsZW1lbnRDbGFzc2VzLmZvckVhY2goZnVuY3Rpb24gKGtsYXNzKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0ga2xhc3MudmVyc2lvbiA/IGtsYXNzLnZlcnNpb24gOiBcIjAuMC4wXCI7XG4gICAgICAgIGVsZW1lbnRzW2tsYXNzLmlzXSA9IHsgdmVyc2lvbjogdmVyc2lvbiB9O1xuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2V0VXNlZFZhYWRpblRoZW1lcycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdldFVzZWRWYWFkaW5UaGVtZXModGhlbWVzKSB7XG4gICAgICBbJ0x1bW8nLCAnTWF0ZXJpYWwnXS5mb3JFYWNoKGZ1bmN0aW9uICh0aGVtZU5hbWUpIHtcbiAgICAgICAgdmFyIHRoZW1lO1xuICAgICAgICB2YXIgdmVyc2lvbiA9IGdldFBvbHltZXJWZXJzaW9uKCk7XG4gICAgICAgIGlmICh2ZXJzaW9uICYmIHZlcnNpb24uaW5kZXhPZignMicpID09PSAwKSB7XG4gICAgICAgICAgLy8gUG9seW1lciAyOiB0aGVtZXMgYXJlIHN0b3JlZCBpbiB3aW5kb3cuVmFhZGluXG4gICAgICAgICAgdGhlbWUgPSB3aW5kb3cuVmFhZGluW3RoZW1lTmFtZV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gUG9seW1lciAzOiB0aGVtZXMgYXJlIHN0b3JlZCBpbiBjdXN0b20gZWxlbWVudCByZWdpc3RyeVxuICAgICAgICAgIHRoZW1lID0gY3VzdG9tRWxlbWVudHMuZ2V0KCd2YWFkaW4tJyArIHRoZW1lTmFtZS50b0xvd2VyQ2FzZSgpICsgJy1zdHlsZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhlbWUgJiYgdGhlbWUudmVyc2lvbikge1xuICAgICAgICAgIHRoZW1lc1t0aGVtZU5hbWVdID0geyB2ZXJzaW9uOiB0aGVtZS52ZXJzaW9uIH07XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2dldEZyYW1ld29ya3MnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBnZXRGcmFtZXdvcmtzKGZyYW1ld29ya3MpIHtcbiAgICAgIHZhciBkZXRlY3RvcnMgPSB0aGlzLmZyYW1ld29ya1ZlcnNpb25EZXRlY3RvcnMoKTtcbiAgICAgIE9iamVjdC5rZXlzKGRldGVjdG9ycykuZm9yRWFjaChmdW5jdGlvbiAoZnJhbWV3b3JrKSB7XG4gICAgICAgIHZhciBkZXRlY3RvciA9IGRldGVjdG9yc1tmcmFtZXdvcmtdO1xuICAgICAgICB0cnkge1xuICAgICAgICAgIHZhciB2ZXJzaW9uID0gZGV0ZWN0b3IoKTtcbiAgICAgICAgICBpZiAodmVyc2lvbikge1xuICAgICAgICAgICAgZnJhbWV3b3Jrc1tmcmFtZXdvcmtdID0geyB2ZXJzaW9uOiB2ZXJzaW9uIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7fVxuICAgICAgfSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnZ2F0aGVyJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ2F0aGVyKHN0b3JhZ2UpIHtcbiAgICAgIHZhciBzdG9yZWRTdGF0cyA9IHN0b3JhZ2UucmVhZCgpO1xuICAgICAgdmFyIGdhdGhlcmVkU3RhdHMgPSB7fTtcbiAgICAgIHZhciB0eXBlcyA9IFtcImVsZW1lbnRzXCIsIFwiZnJhbWV3b3Jrc1wiLCBcInRoZW1lc1wiXTtcblxuICAgICAgdHlwZXMuZm9yRWFjaChmdW5jdGlvbiAodHlwZSkge1xuICAgICAgICBnYXRoZXJlZFN0YXRzW3R5cGVdID0ge307XG4gICAgICAgIGlmICghc3RvcmVkU3RhdHNbdHlwZV0pIHtcbiAgICAgICAgICBzdG9yZWRTdGF0c1t0eXBlXSA9IHt9O1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgdmFyIHByZXZpb3VzU3RhdHMgPSBKU09OLnN0cmluZ2lmeShzdG9yZWRTdGF0cyk7XG5cbiAgICAgIHRoaXMuZ2V0VXNlZFZhYWRpbkVsZW1lbnRzKGdhdGhlcmVkU3RhdHMuZWxlbWVudHMpO1xuICAgICAgdGhpcy5nZXRGcmFtZXdvcmtzKGdhdGhlcmVkU3RhdHMuZnJhbWV3b3Jrcyk7XG4gICAgICB0aGlzLmdldFVzZWRWYWFkaW5UaGVtZXMoZ2F0aGVyZWRTdGF0cy50aGVtZXMpO1xuXG4gICAgICB2YXIgbm93ID0gdGhpcy5ub3c7XG4gICAgICB0eXBlcy5mb3JFYWNoKGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZ2F0aGVyZWRTdGF0c1t0eXBlXSk7XG4gICAgICAgIGtleXMuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgaWYgKCFzdG9yZWRTdGF0c1t0eXBlXVtrZXldIHx8IF90eXBlb2Yoc3RvcmVkU3RhdHNbdHlwZV1ba2V5XSkgIT0gX3R5cGVvZih7fSkpIHtcbiAgICAgICAgICAgIHN0b3JlZFN0YXRzW3R5cGVdW2tleV0gPSB7IGZpcnN0VXNlZDogbm93IH07XG4gICAgICAgICAgfVxuICAgICAgICAgIC8vIERpc2NhcmRzIGFueSBwcmV2aW91c2x5IGxvZ2dlZCB2ZXJzaW9uIG51bWJlclxuICAgICAgICAgIHN0b3JlZFN0YXRzW3R5cGVdW2tleV0udmVyc2lvbiA9IGdhdGhlcmVkU3RhdHNbdHlwZV1ba2V5XS52ZXJzaW9uO1xuICAgICAgICAgIHN0b3JlZFN0YXRzW3R5cGVdW2tleV0ubGFzdFVzZWQgPSBub3c7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIHZhciBuZXdTdGF0cyA9IEpTT04uc3RyaW5naWZ5KHN0b3JlZFN0YXRzKTtcbiAgICAgIHN0b3JhZ2Uud3JpdGUobmV3U3RhdHMpO1xuICAgICAgaWYgKG5ld1N0YXRzICE9IHByZXZpb3VzU3RhdHMgJiYgT2JqZWN0LmtleXMoc3RvcmVkU3RhdHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJOZXcgc3RhdHM6IFwiICsgbmV3U3RhdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3RhdGlzdGljc0dhdGhlcmVyO1xufSgpO1xuXG52YXIgU3RhdGlzdGljc1N0b3JhZ2UgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRpc3RpY3NTdG9yYWdlKGtleSkge1xuICAgIGNsYXNzQ2FsbENoZWNrKHRoaXMsIFN0YXRpc3RpY3NTdG9yYWdlKTtcblxuICAgIHRoaXMua2V5ID0ga2V5O1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhdGlzdGljc1N0b3JhZ2UsIFt7XG4gICAga2V5OiAncmVhZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHJlYWQoKSB7XG4gICAgICB2YXIgbG9jYWxTdG9yYWdlU3RhdHNTdHJpbmcgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSh0aGlzLmtleSk7XG4gICAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2VTdGF0c1N0cmluZyA/IGxvY2FsU3RvcmFnZVN0YXRzU3RyaW5nIDogJ3t9Jyk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7fTtcbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICd3cml0ZScsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHdyaXRlKGRhdGEpIHtcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKHRoaXMua2V5LCBkYXRhKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdjbGVhcicsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5rZXkpO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2lzRW1wdHknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpc0VtcHR5KCkge1xuICAgICAgdmFyIHN0b3JlZFN0YXRzID0gdGhpcy5yZWFkKCk7XG4gICAgICB2YXIgZW1wdHkgPSB0cnVlO1xuICAgICAgT2JqZWN0LmtleXMoc3RvcmVkU3RhdHMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoT2JqZWN0LmtleXMoc3RvcmVkU3RhdHNba2V5XSkubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGVtcHR5ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gZW1wdHk7XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdGF0aXN0aWNzU3RvcmFnZTtcbn0oKTtcblxudmFyIFN0YXRpc3RpY3NTZW5kZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRpc3RpY3NTZW5kZXIodXJsLCBsb2dnZXIpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aXN0aWNzU2VuZGVyKTtcblxuICAgIHRoaXMudXJsID0gdXJsO1xuICAgIHRoaXMubG9nZ2VyID0gbG9nZ2VyO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoU3RhdGlzdGljc1NlbmRlciwgW3tcbiAgICBrZXk6ICdzZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZChkYXRhLCBlcnJvckhhbmRsZXIpIHtcbiAgICAgIHZhciBsb2dnZXIgPSB0aGlzLmxvZ2dlcjtcblxuICAgICAgaWYgKG5hdmlnYXRvci5vbkxpbmUgPT09IGZhbHNlKSB7XG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIk9mZmxpbmUsIGNhbid0IHNlbmRcIik7XG4gICAgICAgIGVycm9ySGFuZGxlcigpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsb2dnZXIuZGVidWcoXCJTZW5kaW5nIGRhdGEgdG8gXCIgKyB0aGlzLnVybCk7XG5cbiAgICAgIHZhciByZXEgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgIHJlcS53aXRoQ3JlZGVudGlhbHMgPSB0cnVlO1xuICAgICAgcmVxLmFkZEV2ZW50TGlzdGVuZXIoXCJsb2FkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gU3RhdHMgc2VudCwgbm90aGluZyBtb3JlIHRvIGRvXG4gICAgICAgIGxvZ2dlci5kZWJ1ZyhcIlJlc3BvbnNlOiBcIiArIHJlcS5yZXNwb25zZVRleHQpO1xuICAgICAgfSk7XG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiU2VuZCBmYWlsZWRcIik7XG4gICAgICAgIGVycm9ySGFuZGxlcigpO1xuICAgICAgfSk7XG4gICAgICByZXEuYWRkRXZlbnRMaXN0ZW5lcihcImFib3J0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbG9nZ2VyLmRlYnVnKFwiU2VuZCBhYm9ydGVkXCIpO1xuICAgICAgICBlcnJvckhhbmRsZXIoKTtcbiAgICAgIH0pO1xuICAgICAgcmVxLm9wZW4oXCJQT1NUXCIsIHRoaXMudXJsKTtcbiAgICAgIHJlcS5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgIHJlcS5zZW5kKGRhdGEpO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gU3RhdGlzdGljc1NlbmRlcjtcbn0oKTtcblxudmFyIFN0YXRpc3RpY3NMb2dnZXIgPSBmdW5jdGlvbiAoKSB7XG4gIGZ1bmN0aW9uIFN0YXRpc3RpY3NMb2dnZXIoaWQpIHtcbiAgICBjbGFzc0NhbGxDaGVjayh0aGlzLCBTdGF0aXN0aWNzTG9nZ2VyKTtcblxuICAgIHRoaXMuaWQgPSBpZDtcbiAgfVxuXG4gIGNyZWF0ZUNsYXNzKFN0YXRpc3RpY3NMb2dnZXIsIFt7XG4gICAga2V5OiAnX2lzRGVidWcnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBfaXNEZWJ1ZygpIHtcbiAgICAgIHJldHVybiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInZhYWRpbi5cIiArIHRoaXMuaWQgKyBcIi5kZWJ1Z1wiKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdkZWJ1ZycsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlYnVnKG1zZykge1xuICAgICAgaWYgKHRoaXMuX2lzRGVidWcoKSkge1xuICAgICAgICBjb25zb2xlLmluZm8odGhpcy5pZCArIFwiOiBcIiArIG1zZyk7XG4gICAgICB9XG4gICAgfVxuICB9XSk7XG4gIHJldHVybiBTdGF0aXN0aWNzTG9nZ2VyO1xufSgpO1xuXG52YXIgVXNhZ2VTdGF0aXN0aWNzID0gZnVuY3Rpb24gKCkge1xuICBmdW5jdGlvbiBVc2FnZVN0YXRpc3RpY3MoKSB7XG4gICAgY2xhc3NDYWxsQ2hlY2sodGhpcywgVXNhZ2VTdGF0aXN0aWNzKTtcblxuICAgIHRoaXMubm93ID0gbmV3IERhdGUoKTtcbiAgICB0aGlzLnRpbWVOb3cgPSB0aGlzLm5vdy5nZXRUaW1lKCk7XG4gICAgdGhpcy5nYXRoZXJEZWxheSA9IDEwOyAvLyBEZWxheSBiZXR3ZWVuIGxvYWRpbmcgdGhpcyBmaWxlIGFuZCBnYXRoZXJpbmcgc3RhdHNcbiAgICB0aGlzLmluaXRpYWxEZWxheSA9IDI0ICogNjAgKiA2MDtcblxuICAgIHRoaXMubG9nZ2VyID0gbmV3IFN0YXRpc3RpY3NMb2dnZXIoXCJzdGF0aXN0aWNzXCIpO1xuICAgIHRoaXMuc3RvcmFnZSA9IG5ldyBTdGF0aXN0aWNzU3RvcmFnZShcInZhYWRpbi5zdGF0aXN0aWNzLmJhc2tldFwiKTtcbiAgICB0aGlzLmdhdGhlcmVyID0gbmV3IFN0YXRpc3RpY3NHYXRoZXJlcih0aGlzLmxvZ2dlcik7XG4gICAgdGhpcy5zZW5kZXIgPSBuZXcgU3RhdGlzdGljc1NlbmRlcihcImh0dHBzOi8vdG9vbHMudmFhZGluLmNvbS91c2FnZS1zdGF0cy9zdWJtaXRcIiwgdGhpcy5sb2dnZXIpO1xuICB9XG5cbiAgY3JlYXRlQ2xhc3MoVXNhZ2VTdGF0aXN0aWNzLCBbe1xuICAgIGtleTogJ21heWJlR2F0aGVyQW5kU2VuZCcsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG1heWJlR2F0aGVyQW5kU2VuZCgpIHtcbiAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG5cbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2FnZVN0YXRpc3RpY3Mub3B0T3V0S2V5KSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICB0aGlzLmdhdGhlcmVyLmdhdGhlcih0aGlzLnN0b3JhZ2UpO1xuICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIF90aGlzLm1heWJlU2VuZCgpO1xuICAgICAgfSwgdGhpcy5nYXRoZXJEZWxheSAqIDEwMDApO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ2xvdHRlcnknLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb3R0ZXJ5KCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnY3VycmVudE1vbnRoJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gY3VycmVudE1vbnRoKCkge1xuICAgICAgcmV0dXJuIHRoaXMubm93LmdldFllYXIoKSAqIDEyICsgdGhpcy5ub3cuZ2V0TW9udGgoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdtYXliZVNlbmQnLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBtYXliZVNlbmQoKSB7XG4gICAgICB2YXIgZmlyc3RVc2UgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLmZpcnN0VXNlS2V5KSk7XG4gICAgICB2YXIgbW9udGhQcm9jZXNzZWQgPSBOdW1iZXIobG9jYWxTdG9yYWdlLmdldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLm1vbnRoUHJvY2Vzc2VkS2V5KSk7XG5cbiAgICAgIGlmICghZmlyc3RVc2UpIHtcbiAgICAgICAgLy8gVXNlIGEgZ3JhY2UgcGVyaW9kIHRvIGF2b2lkIGludGVyZmVyaW5nIHdpdGggdGVzdHMsIGluY29nbml0byBtb2RlIGV0Y1xuICAgICAgICBmaXJzdFVzZSA9IHRoaXMudGltZU5vdztcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLmZpcnN0VXNlS2V5LCBmaXJzdFVzZSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0aGlzLnRpbWVOb3cgPCBmaXJzdFVzZSArIHRoaXMuaW5pdGlhbERlbGF5ICogMTAwMCkge1xuICAgICAgICB0aGlzLmxvZ2dlci5kZWJ1ZyhcIk5vIHN0YXRpc3RpY3Mgd2lsbCBiZSBzZW50IHVudGlsIHRoZSBpbml0aWFsIGRlbGF5IG9mIFwiICsgdGhpcy5pbml0aWFsRGVsYXkgKyBcInMgaGFzIHBhc3NlZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY3VycmVudE1vbnRoKCkgPD0gbW9udGhQcm9jZXNzZWQpIHtcbiAgICAgICAgdGhpcy5sb2dnZXIuZGVidWcoXCJUaGlzIG1vbnRoIGhhcyBhbHJlYWR5IGJlZW4gcHJvY2Vzc2VkXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShVc2FnZVN0YXRpc3RpY3MubW9udGhQcm9jZXNzZWRLZXksIHRoaXMuY3VycmVudE1vbnRoKCkpO1xuICAgICAgLy8gVXNlIHJhbmRvbSBzYW1wbGluZ1xuICAgICAgaWYgKHRoaXMubG90dGVyeSgpKSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiQ29uZ3JhdHVsYXRpb25zLCB3ZSBoYXZlIGEgd2lubmVyIVwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMubG9nZ2VyLmRlYnVnKFwiU29ycnksIG5vIHN0YXRzIGZyb20geW91IHRoaXMgdGltZVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNlbmQoKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdzZW5kJyxcbiAgICB2YWx1ZTogZnVuY3Rpb24gc2VuZCgpIHtcbiAgICAgIC8vIEVuc3VyZSB3ZSBoYXZlIHRoZSBsYXRlc3QgZGF0YVxuICAgICAgdGhpcy5nYXRoZXJlci5nYXRoZXIodGhpcy5zdG9yYWdlKTtcblxuICAgICAgLy8gUmVhZCwgc2VuZCBhbmQgY2xlYW4gdXBcbiAgICAgIHZhciBkYXRhID0gdGhpcy5zdG9yYWdlLnJlYWQoKTtcbiAgICAgIGRhdGFbXCJmaXJzdFVzZVwiXSA9IE51bWJlcihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShVc2FnZVN0YXRpc3RpY3MuZmlyc3RVc2VLZXkpKTtcbiAgICAgIGRhdGFbXCJ1c2FnZVN0YXRpc3RpY3NWZXJzaW9uXCJdID0gVXNhZ2VTdGF0aXN0aWNzLnZlcnNpb247XG4gICAgICB2YXIgaW5mbyA9ICdUaGlzIHJlcXVlc3QgY29udGFpbnMgdXNhZ2Ugc3RhdGlzdGljcyBnYXRoZXJlZCBmcm9tIHRoZSBhcHBsaWNhdGlvbiBydW5uaW5nIGluIGRldmVsb3BtZW50IG1vZGUuIFxcblxcblN0YXRpc3RpY3MgZ2F0aGVyaW5nIGlzIGF1dG9tYXRpY2FsbHkgZGlzYWJsZWQgYW5kIGV4Y2x1ZGVkIGZyb20gcHJvZHVjdGlvbiBidWlsZHMuXFxuXFxuRm9yIGRldGFpbHMgYW5kIHRvIG9wdC1vdXQsIHNlZSBodHRwczovL2dpdGh1Yi5jb20vdmFhZGluL3ZhYWRpbi11c2FnZS1zdGF0aXN0aWNzLlxcblxcblxcblxcbic7XG4gICAgICB2YXIgc2VsZiA9IHRoaXM7XG4gICAgICB0aGlzLnNlbmRlci5zZW5kKGluZm8gKyBKU09OLnN0cmluZ2lmeShkYXRhKSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBSZXZlcnQgdGhlICdtb250aCBwcm9jZXNzZWQnIGZsYWdcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oVXNhZ2VTdGF0aXN0aWNzLm1vbnRoUHJvY2Vzc2VkS2V5LCBzZWxmLmN1cnJlbnRNb250aCgpIC0gMSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH1dLCBbe1xuICAgIGtleTogJ3ZlcnNpb24nLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0JDEoKSB7XG4gICAgICByZXR1cm4gJzIuMS4wJztcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6ICdmaXJzdFVzZUtleScsXG4gICAgZ2V0OiBmdW5jdGlvbiBnZXQkMSgpIHtcbiAgICAgIHJldHVybiAndmFhZGluLnN0YXRpc3RpY3MuZmlyc3R1c2UnO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogJ21vbnRoUHJvY2Vzc2VkS2V5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxKCkge1xuICAgICAgcmV0dXJuICd2YWFkaW4uc3RhdGlzdGljcy5tb250aFByb2Nlc3NlZCc7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiAnb3B0T3V0S2V5JyxcbiAgICBnZXQ6IGZ1bmN0aW9uIGdldCQxKCkge1xuICAgICAgcmV0dXJuICd2YWFkaW4uc3RhdGlzdGljcy5vcHRvdXQnO1xuICAgIH1cbiAgfV0pO1xuICByZXR1cm4gVXNhZ2VTdGF0aXN0aWNzO1xufSgpO1xuXG50cnkge1xuICB3aW5kb3cuVmFhZGluID0gd2luZG93LlZhYWRpbiB8fCB7fTtcbiAgd2luZG93LlZhYWRpbi51c2FnZVN0YXRzQ2hlY2tlciA9IHdpbmRvdy5WYWFkaW4udXNhZ2VTdGF0c0NoZWNrZXIgfHwgbmV3IFVzYWdlU3RhdGlzdGljcygpO1xuICB3aW5kb3cuVmFhZGluLnVzYWdlU3RhdHNDaGVja2VyLm1heWJlR2F0aGVyQW5kU2VuZCgpO1xufSBjYXRjaCAoZSkge1xuICAvLyBJbnRlbnRpb25hbGx5IGlnbm9yZWQgYXMgdGhpcyBpcyBub3QgYSBwcm9ibGVtIGluIHRoZSBhcHAgYmVpbmcgZGV2ZWxvcGVkXG59XG5cbn0oKSk7XG5cbiAgdmFhZGluLWRldi1tb2RlOmVuZCAqKi9cbn1cblxuZXhwb3J0IGNvbnN0IHVzYWdlU3RhdGlzdGljcyA9IGZ1bmN0aW9uKCkge1xuICBpZiAodHlwZW9mIHJ1bklmRGV2ZWxvcG1lbnRNb2RlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHJ1bklmRGV2ZWxvcG1lbnRNb2RlKG1heWJlR2F0aGVyQW5kU2VuZFN0YXRzKTtcbiAgfVxufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vdmFhZGluLXVzYWdlLXN0YXRpc3RpY3MtY29sbGVjdC5qcyc7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUErQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUFtREE7QUFuREE7Ozs7Ozs7Ozs7OztBQy9EQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBb0VBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQURBO0FBd0JBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4QkE7QUE0QkE7QUFPQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQS9HQTs7Ozs7Ozs7Ozs7O0FDdkZBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBRUE7QUFFQTtBQUVBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUFBO0FBQUE7QUE5QkE7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQTNFQTs7Ozs7Ozs7Ozs7O0FDaENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBOENBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFEQTtBQWlHQTtBQUVBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQWxEQTtBQUNBO0FBeURBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQXBMQTs7Ozs7Ozs7Ozs7O0FDakVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcUNBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUVBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVJBO0FBWUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWpGQTtBQXFGQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQzFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7OztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBdUVBOzs7Ozs7Ozs7Ozs7QUN0R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBeUNBO0FBS0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUF4SEE7QUFDQTtBQXlIQTs7Ozs7Ozs7Ozs7OztBQ3BMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUE0SUE7Ozs7Ozs7Ozs7OztBQ2pKQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTs7Ozs7O0FBS0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQVBBO0FBQ0E7QUFjQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBeEJBO0FBMEJBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQUNBO0FBREE7QUF4QkE7QUE0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhQQTs7Ozs7Ozs7Ozs7O0FDekNBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUNBOzs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFJQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBOUZBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBSUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7Ozs7QUFLQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTRFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUExQ0E7QUE0Q0E7QUEvQ0E7QUFDQTtBQWlEQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFDQTtBQUtBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFyUkE7QUF1UkE7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBM0NBO0FBNkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7QUE1MUJBOzs7Ozs7Ozs7Ozs7QUNqQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFJQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBb0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBTUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBREE7QUFJQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUF2RUE7QUF5RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFIQTtBQU9BO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFIQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBaEJBO0FBa0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUF2REE7QUF5REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMTFCQTtBQUNBO0FBMjFCQTs7Ozs7Ozs7Ozs7O0FDejNCQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7O0FBYUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFLQTs7Ozs7Ozs7Ozs7O0FDM0JBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ0NBOzs7Ozs7Ozs7Ozs7QUNuQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWlGQTtBQU9BO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBQ0E7QUFLQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUEvQ0E7QUFpREE7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQTNLQTtBQUNBO0FBNEtBOzs7Ozs7Ozs7Ozs7O0FDdlJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQWdEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUlBO0FBRUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFwQ0E7QUF5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBYUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFoV0E7QUFDQTtBQWlXQTs7Ozs7Ozs7Ozs7O0FDblhBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7O0FBS0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7O0FBSUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1FQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUhBO0FBNURBO0FBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBM1VBO0FBQ0E7QUE0VUE7Ozs7Ozs7Ozs7OztBQzdWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBLQTs7Ozs7Ozs7Ozs7O0FDakxBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwQ0E7Ozs7Ozs7Ozs7OztBQzdDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW1CQTs7Ozs7Ozs7Ozs7O0FDNUJBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBcUhBOzs7Ozs7Ozs7Ozs7QUN6SEE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUVBOzs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNuR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQTlCQTs7Ozs7Ozs7Ozs7O0FDN0JBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQXVDQTs7Ozs7Ozs7Ozs7O0FDMUNBO0FBQUE7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTREQTs7Ozs7Ozs7Ozs7O0FDL0RBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7OztBQUtBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQW9HQTtBQUVBO0FBQ0E7QUFFQTtBQUhBO0FBTUE7QUFDQTtBQUNBO0FBRkE7QUFNQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7Ozs7O0FBT0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQURBO0FBQ0E7QUFHQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7QUFHQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQU5BO0FBQ0E7QUFRQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUNBO0FBS0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUtBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQURBO0FBSUE7QUFFQTtBQUVBO0FBN0tBO0FBK0tBO0FBQ0E7QUFDQTtBQUNBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQU1BOzs7Ozs7O0FBT0E7Ozs7Ozs7QUEzbUJBOzs7Ozs7Ozs7Ozs7QUNsSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7QUFLQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQTBCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFEQTtBQUNBO0FBR0E7Ozs7QUFJQTtBQUNBO0FBREE7QUFDQTtBQUdBOzs7QUFHQTtBQUNBO0FBREE7QUFwQkE7QUF3QkE7QUFDQTtBQWhFQTtBQUNBO0FBaUVBOzs7Ozs7Ozs7Ozs7O0FDeElBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBZ09BOzs7Ozs7Ozs7Ozs7QUN2T0E7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTs7Ozs7Ozs7O0FBUUE7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBK2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2ZkE7QUFBQTtBQUFBO0FBQUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=