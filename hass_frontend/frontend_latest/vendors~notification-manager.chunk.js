(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~notification-manager"],{

/***/ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js ***!
  \**************************************************************************/
/*! exports provided: IronA11yAnnouncer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronA11yAnnouncer", function() { return IronA11yAnnouncer; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
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
`iron-a11y-announcer` is a singleton element that is intended to add a11y
to features that require on-demand announcement from screen readers. In
order to make use of the announcer, it is best to request its availability
in the announcing element.

Example:

    Polymer({

      is: 'x-chatty',

      attached: function() {
        // This will create the singleton element if it has not
        // been created yet:
        Polymer.IronA11yAnnouncer.requestAvailability();
      }
    });

After the `iron-a11y-announcer` has been made available, elements can
make announces by firing bubbling `iron-announce` events.

Example:

    this.fire('iron-announce', {
      text: 'This is an announcement!'
    }, { bubbles: true });

Note: announcements are only audible if you have a screen reader enabled.

@group Iron Elements
@demo demo/index.html
*/

const IronA11yAnnouncer = Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_2__["html"]`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,
  is: 'iron-a11y-announcer',
  properties: {
    /**
     * The value of mode is used to set the `aria-live` attribute
     * for the element that will be announced. Valid values are: `off`,
     * `polite` and `assertive`.
     */
    mode: {
      type: String,
      value: 'polite'
    },
    _text: {
      type: String,
      value: ''
    }
  },
  created: function () {
    if (!IronA11yAnnouncer.instance) {
      IronA11yAnnouncer.instance = this;
    }

    document.body.addEventListener('iron-announce', this._onIronAnnounce.bind(this));
  },

  /**
   * Cause a text string to be announced by screen readers.
   *
   * @param {string} text The text that should be announced.
   */
  announce: function (text) {
    this._text = '';
    this.async(function () {
      this._text = text;
    }, 100);
  },
  _onIronAnnounce: function (event) {
    if (event.detail && event.detail.text) {
      this.announce(event.detail.text);
    }
  }
});
IronA11yAnnouncer.instance = null;

IronA11yAnnouncer.requestAvailability = function () {
  if (!IronA11yAnnouncer.instance) {
    IronA11yAnnouncer.instance = document.createElement('iron-a11y-announcer');
  }

  document.body.appendChild(IronA11yAnnouncer.instance);
};

/***/ }),

/***/ "./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/iron-resizable-behavior/iron-resizable-behavior.js ***!
  \**********************************************************************************/
/*! exports provided: IronResizableBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IronResizableBehavior", function() { return IronResizableBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/settings.js */ "./node_modules/@polymer/polymer/lib/utils/settings.js");
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


 // Contains all connected resizables that do not have a parent.

var ORPHANS = new Set();
/**
 * `IronResizableBehavior` is a behavior that can be used in Polymer elements to
 * coordinate the flow of resize events between "resizers" (elements that
 *control the size or hidden state of their children) and "resizables" (elements
 *that need to be notified when they are resized or un-hidden by their parents
 *in order to take action on their new measurements).
 *
 * Elements that perform measurement should add the `IronResizableBehavior`
 *behavior to their element definition and listen for the `iron-resize` event on
 *themselves. This event will be fired when they become showing after having
 *been hidden, when they are resized explicitly by another resizable, or when
 *the window has been resized.
 *
 * Note, the `iron-resize` event is non-bubbling.
 *
 * @polymerBehavior
 * @demo demo/index.html
 **/

const IronResizableBehavior = {
  properties: {
    /**
     * The closest ancestor element that implements `IronResizableBehavior`.
     */
    _parentResizable: {
      type: Object,
      observer: '_parentResizableChanged'
    },

    /**
     * True if this element is currently notifying its descendant elements of
     * resize.
     */
    _notifyingDescendant: {
      type: Boolean,
      value: false
    }
  },
  listeners: {
    'iron-request-resize-notifications': '_onIronRequestResizeNotifications'
  },
  created: function () {
    // We don't really need property effects on these, and also we want them
    // to be created before the `_parentResizable` observer fires:
    this._interestedResizables = [];
    this._boundNotifyResize = this.notifyResize.bind(this);
    this._boundOnDescendantIronResize = this._onDescendantIronResize.bind(this);
  },
  attached: function () {
    this._requestResizeNotifications();
  },
  detached: function () {
    if (this._parentResizable) {
      this._parentResizable.stopResizeNotificationsFor(this);
    } else {
      ORPHANS.delete(this);
      window.removeEventListener('resize', this._boundNotifyResize);
    }

    this._parentResizable = null;
  },

  /**
   * Can be called to manually notify a resizable and its descendant
   * resizables of a resize change.
   */
  notifyResize: function () {
    if (!this.isAttached) {
      return;
    }

    this._interestedResizables.forEach(function (resizable) {
      if (this.resizerShouldNotify(resizable)) {
        this._notifyDescendant(resizable);
      }
    }, this);

    this._fireResize();
  },

  /**
   * Used to assign the closest resizable ancestor to this resizable
   * if the ancestor detects a request for notifications.
   */
  assignParentResizable: function (parentResizable) {
    if (this._parentResizable) {
      this._parentResizable.stopResizeNotificationsFor(this);
    }

    this._parentResizable = parentResizable;

    if (parentResizable && parentResizable._interestedResizables.indexOf(this) === -1) {
      parentResizable._interestedResizables.push(this);

      parentResizable._subscribeIronResize(this);
    }
  },

  /**
   * Used to remove a resizable descendant from the list of descendants
   * that should be notified of a resize change.
   */
  stopResizeNotificationsFor: function (target) {
    var index = this._interestedResizables.indexOf(target);

    if (index > -1) {
      this._interestedResizables.splice(index, 1);

      this._unsubscribeIronResize(target);
    }
  },

  /**
   * Subscribe this element to listen to iron-resize events on the given target.
   *
   * Preferred over target.listen because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */
  _subscribeIronResize: function (target) {
    target.addEventListener('iron-resize', this._boundOnDescendantIronResize);
  },

  /**
   * Unsubscribe this element from listening to to iron-resize events on the
   * given target.
   *
   * Preferred over target.unlisten because the property renamer does not
   * understand to rename when the target is not specifically "this"
   *
   * @param {!HTMLElement} target Element to listen to for iron-resize events.
   */
  _unsubscribeIronResize: function (target) {
    target.removeEventListener('iron-resize', this._boundOnDescendantIronResize);
  },

  /**
   * This method can be overridden to filter nested elements that should or
   * should not be notified by the current element. Return true if an element
   * should be notified, or false if it should not be notified.
   *
   * @param {HTMLElement} element A candidate descendant element that
   * implements `IronResizableBehavior`.
   * @return {boolean} True if the `element` should be notified of resize.
   */
  resizerShouldNotify: function (element) {
    return true;
  },
  _onDescendantIronResize: function (event) {
    if (this._notifyingDescendant) {
      event.stopPropagation();
      return;
    } // no need to use this during shadow dom because of event retargeting


    if (!_polymer_polymer_lib_utils_settings_js__WEBPACK_IMPORTED_MODULE_2__["useShadow"]) {
      this._fireResize();
    }
  },
  _fireResize: function () {
    this.fire('iron-resize', null, {
      node: this,
      bubbles: false
    });
  },
  _onIronRequestResizeNotifications: function (event) {
    var target =
    /** @type {!EventTarget} */
    Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_1__["dom"])(event).rootTarget;

    if (target === this) {
      return;
    }

    target.assignParentResizable(this);

    this._notifyDescendant(target);

    event.stopPropagation();
  },
  _parentResizableChanged: function (parentResizable) {
    if (parentResizable) {
      window.removeEventListener('resize', this._boundNotifyResize);
    }
  },
  _notifyDescendant: function (descendant) {
    // NOTE(cdata): In IE10, attached is fired on children first, so it's
    // important not to notify them if the parent is not attached yet (or
    // else they will get redundantly notified when the parent attaches).
    if (!this.isAttached) {
      return;
    }

    this._notifyingDescendant = true;
    descendant.notifyResize();
    this._notifyingDescendant = false;
  },
  _requestResizeNotifications: function () {
    if (!this.isAttached) {
      return;
    }

    if (document.readyState === 'loading') {
      var _requestResizeNotifications = this._requestResizeNotifications.bind(this);

      document.addEventListener('readystatechange', function readystatechanged() {
        document.removeEventListener('readystatechange', readystatechanged);

        _requestResizeNotifications();
      });
    } else {
      this._findParent();

      if (!this._parentResizable) {
        // If this resizable is an orphan, tell other orphans to try to find
        // their parent again, in case it's this resizable.
        ORPHANS.forEach(function (orphan) {
          if (orphan !== this) {
            orphan._findParent();
          }
        }, this);
        window.addEventListener('resize', this._boundNotifyResize);
        this.notifyResize();
      } else {
        // If this resizable has a parent, tell other child resizables of
        // that parent to try finding their parent again, in case it's this
        // resizable.
        this._parentResizable._interestedResizables.forEach(function (resizable) {
          if (resizable !== this) {
            resizable._findParent();
          }
        }, this);
      }
    }
  },
  _findParent: function () {
    this.assignParentResizable(null);
    this.fire('iron-request-resize-notifications', null, {
      node: this,
      bubbles: true,
      cancelable: true
    });

    if (!this._parentResizable) {
      ORPHANS.add(this);
    } else {
      ORPHANS.delete(this);
    }
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-toast/paper-toast.js":
/*!**********************************************************!*\
  !*** ./node_modules/@polymer/paper-toast/paper-toast.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-a11y-announcer/iron-a11y-announcer.js */ "./node_modules/@polymer/iron-a11y-announcer/iron-a11y-announcer.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-overlay-behavior.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-overlay-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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




 // Keeps track of the toast currently opened.

var currentToast = null;
/**
Material design: [Snackbars &
toasts](https://www.google.com/design/spec/components/snackbars-toasts.html)

`paper-toast` provides a subtle notification toast. Only one `paper-toast` will
be visible on screen.

Use `opened` to show the toast:

Example:

    <paper-toast text="Hello world!" opened></paper-toast>

Also `open()` or `show()` can be used to show the toast:

Example:

    <paper-button on-click="openToast">Open Toast</paper-button>
    <paper-toast id="toast" text="Hello world!"></paper-toast>

    ...

    openToast: function() {
      this.$.toast.open();
    }

Set `duration` to 0, a negative number or Infinity to persist the toast on
screen:

Example:

    <paper-toast text="Terms and conditions" opened duration="0">
      <a href="#">Show more</a>
    </paper-toast>


### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-toast-background-color` | The paper-toast background-color | `#323232`
`--paper-toast-color` | The paper-toast color | `#f1f1f1`

This element applies the mixin `--paper-font-common-base` but does not import
`paper-styles/typography.html`. In order to apply the `Roboto` font to this
element, make sure you've imported `paper-styles/typography.html`.

@group Paper Elements
@element paper-toast
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,
  is: 'paper-toast',
  behaviors: [_polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehavior"]],
  properties: {
    /**
     * The element to fit `this` into.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    fitInto: {
      type: Object,
      value: window,
      observer: '_onFitIntoChanged'
    },

    /**
     * The orientation against which to align the dropdown content
     * horizontally relative to `positionTarget`.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    horizontalAlign: {
      type: String,
      value: 'left'
    },

    /**
     * The orientation against which to align the dropdown content
     * vertically relative to `positionTarget`.
     * Overridden from `Polymer.IronFitBehavior`.
     */
    verticalAlign: {
      type: String,
      value: 'bottom'
    },

    /**
     * The duration in milliseconds to show the toast.
     * Set to `0`, a negative number, or `Infinity`, to disable the
     * toast auto-closing.
     */
    duration: {
      type: Number,
      value: 3000
    },

    /**
     * The text to display in the toast.
     */
    text: {
      type: String,
      value: ''
    },

    /**
     * Overridden from `IronOverlayBehavior`.
     * Set to false to enable closing of the toast by clicking outside it.
     */
    noCancelOnOutsideClick: {
      type: Boolean,
      value: true
    },

    /**
     * Overridden from `IronOverlayBehavior`.
     * Set to true to disable auto-focusing the toast or child nodes with
     * the `autofocus` attribute` when the overlay is opened.
     */
    noAutoFocus: {
      type: Boolean,
      value: true
    }
  },
  listeners: {
    'transitionend': '__onTransitionEnd'
  },

  /**
   * Read-only. Deprecated. Use `opened` from `IronOverlayBehavior`.
   * @property visible
   * @deprecated
   */
  get visible() {
    _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__["Base"]._warn('`visible` is deprecated, use `opened` instead');

    return this.opened;
  },

  /**
   * Read-only. Can auto-close if duration is a positive finite number.
   * @property _canAutoClose
   */
  get _canAutoClose() {
    return this.duration > 0 && this.duration !== Infinity;
  },

  created: function () {
    this._autoClose = null;
    _polymer_iron_a11y_announcer_iron_a11y_announcer_js__WEBPACK_IMPORTED_MODULE_0__["IronA11yAnnouncer"].requestAvailability();
  },

  /**
   * Show the toast. Without arguments, this is the same as `open()` from
   * `IronOverlayBehavior`.
   * @param {(Object|string)=} properties Properties to be set before opening the toast.
   * e.g. `toast.show('hello')` or `toast.show({text: 'hello', duration: 3000})`
   */
  show: function (properties) {
    if (typeof properties == 'string') {
      properties = {
        text: properties
      };
    }

    for (var property in properties) {
      if (property.indexOf('_') === 0) {
        _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__["Base"]._warn('The property "' + property + '" is private and was not set.');
      } else if (property in this) {
        this[property] = properties[property];
      } else {
        _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_4__["Base"]._warn('The property "' + property + '" is not valid.');
      }
    }

    this.open();
  },

  /**
   * Hide the toast. Same as `close()` from `IronOverlayBehavior`.
   */
  hide: function () {
    this.close();
  },

  /**
   * Called on transitions of the toast, indicating a finished animation
   * @private
   */
  __onTransitionEnd: function (e) {
    // there are different transitions that are happening when opening and
    // closing the toast. The last one so far is for `opacity`.
    // This marks the end of the transition, so we check for this to determine
    // if this is the correct event.
    if (e && e.target === this && e.propertyName === 'opacity') {
      if (this.opened) {
        this._finishRenderOpened();
      } else {
        this._finishRenderClosed();
      }
    }
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   * Called when the value of `opened` changes.
   */
  _openedChanged: function () {
    if (this._autoClose !== null) {
      this.cancelAsync(this._autoClose);
      this._autoClose = null;
    }

    if (this.opened) {
      if (currentToast && currentToast !== this) {
        currentToast.close();
      }

      currentToast = this;
      this.fire('iron-announce', {
        text: this.text
      });

      if (this._canAutoClose) {
        this._autoClose = this.async(this.close, this.duration);
      }
    } else if (currentToast === this) {
      currentToast = null;
    }

    _polymer_iron_overlay_behavior_iron_overlay_behavior_js__WEBPACK_IMPORTED_MODULE_1__["IronOverlayBehaviorImpl"]._openedChanged.apply(this, arguments);
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderOpened: function () {
    this.classList.add('paper-toast-open');
  },

  /**
   * Overridden from `IronOverlayBehavior`.
   */
  _renderClosed: function () {
    this.classList.remove('paper-toast-open');
  },

  /**
   * @private
   */
  _onFitIntoChanged: function (fitInto) {
    this.positionTarget = fitInto;
  }
  /**
   * Fired when `paper-toast` is opened.
   *
   * @event 'iron-announce'
   * @param {{text: string}} detail Contains text that will be announced.
   */

});

/***/ })

}]);
//# sourceMappingURL=vendors~notification-manager.chunk.js.map