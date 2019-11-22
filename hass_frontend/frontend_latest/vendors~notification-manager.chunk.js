(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~notification-manager"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35ub3RpZmljYXRpb24tbWFuYWdlci5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWExMXktYW5ub3VuY2VyL2lyb24tYTExeS1hbm5vdW5jZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci10b2FzdC9wYXBlci10b2FzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtodG1sfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9odG1sLXRhZy5qcyc7XG5cbi8qKlxuYGlyb24tYTExeS1hbm5vdW5jZXJgIGlzIGEgc2luZ2xldG9uIGVsZW1lbnQgdGhhdCBpcyBpbnRlbmRlZCB0byBhZGQgYTExeVxudG8gZmVhdHVyZXMgdGhhdCByZXF1aXJlIG9uLWRlbWFuZCBhbm5vdW5jZW1lbnQgZnJvbSBzY3JlZW4gcmVhZGVycy4gSW5cbm9yZGVyIHRvIG1ha2UgdXNlIG9mIHRoZSBhbm5vdW5jZXIsIGl0IGlzIGJlc3QgdG8gcmVxdWVzdCBpdHMgYXZhaWxhYmlsaXR5XG5pbiB0aGUgYW5ub3VuY2luZyBlbGVtZW50LlxuXG5FeGFtcGxlOlxuXG4gICAgUG9seW1lcih7XG5cbiAgICAgIGlzOiAneC1jaGF0dHknLFxuXG4gICAgICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCBjcmVhdGUgdGhlIHNpbmdsZXRvbiBlbGVtZW50IGlmIGl0IGhhcyBub3RcbiAgICAgICAgLy8gYmVlbiBjcmVhdGVkIHlldDpcbiAgICAgICAgUG9seW1lci5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gICAgICB9XG4gICAgfSk7XG5cbkFmdGVyIHRoZSBgaXJvbi1hMTF5LWFubm91bmNlcmAgaGFzIGJlZW4gbWFkZSBhdmFpbGFibGUsIGVsZW1lbnRzIGNhblxubWFrZSBhbm5vdW5jZXMgYnkgZmlyaW5nIGJ1YmJsaW5nIGBpcm9uLWFubm91bmNlYCBldmVudHMuXG5cbkV4YW1wbGU6XG5cbiAgICB0aGlzLmZpcmUoJ2lyb24tYW5ub3VuY2UnLCB7XG4gICAgICB0ZXh0OiAnVGhpcyBpcyBhbiBhbm5vdW5jZW1lbnQhJ1xuICAgIH0sIHsgYnViYmxlczogdHJ1ZSB9KTtcblxuTm90ZTogYW5ub3VuY2VtZW50cyBhcmUgb25seSBhdWRpYmxlIGlmIHlvdSBoYXZlIGEgc2NyZWVuIHJlYWRlciBlbmFibGVkLlxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGRlbW8gZGVtby9pbmRleC5odG1sXG4qL1xuZXhwb3J0IGNvbnN0IElyb25BMTF5QW5ub3VuY2VyID0gUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBjbGlwOiByZWN0KDBweCwwcHgsMHB4LDBweCk7XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgICA8ZGl2IGFyaWEtbGl2ZSQ9XCJbW21vZGVdXVwiPltbX3RleHRdXTwvZGl2PlxuYCxcblxuICBpczogJ2lyb24tYTExeS1hbm5vdW5jZXInLFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIFRoZSB2YWx1ZSBvZiBtb2RlIGlzIHVzZWQgdG8gc2V0IHRoZSBgYXJpYS1saXZlYCBhdHRyaWJ1dGVcbiAgICAgKiBmb3IgdGhlIGVsZW1lbnQgdGhhdCB3aWxsIGJlIGFubm91bmNlZC4gVmFsaWQgdmFsdWVzIGFyZTogYG9mZmAsXG4gICAgICogYHBvbGl0ZWAgYW5kIGBhc3NlcnRpdmVgLlxuICAgICAqL1xuICAgIG1vZGU6IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAncG9saXRlJ30sXG5cbiAgICBfdGV4dDoge3R5cGU6IFN0cmluZywgdmFsdWU6ICcnfVxuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICAgIElyb25BMTF5QW5ub3VuY2VyLmluc3RhbmNlID0gdGhpcztcbiAgICB9XG5cbiAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdpcm9uLWFubm91bmNlJywgdGhpcy5fb25Jcm9uQW5ub3VuY2UuYmluZCh0aGlzKSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIENhdXNlIGEgdGV4dCBzdHJpbmcgdG8gYmUgYW5ub3VuY2VkIGJ5IHNjcmVlbiByZWFkZXJzLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdGV4dCBUaGUgdGV4dCB0aGF0IHNob3VsZCBiZSBhbm5vdW5jZWQuXG4gICAqL1xuICBhbm5vdW5jZTogZnVuY3Rpb24odGV4dCkge1xuICAgIHRoaXMuX3RleHQgPSAnJztcbiAgICB0aGlzLmFzeW5jKGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fdGV4dCA9IHRleHQ7XG4gICAgfSwgMTAwKTtcbiAgfSxcblxuICBfb25Jcm9uQW5ub3VuY2U6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKGV2ZW50LmRldGFpbCAmJiBldmVudC5kZXRhaWwudGV4dCkge1xuICAgICAgdGhpcy5hbm5vdW5jZShldmVudC5kZXRhaWwudGV4dCk7XG4gICAgfVxuICB9XG59KTtcblxuSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UgPSBudWxsO1xuXG5Jcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5ID0gZnVuY3Rpb24oKSB7XG4gIGlmICghSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpIHtcbiAgICBJcm9uQTExeUFubm91bmNlci5pbnN0YW5jZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lyb24tYTExeS1hbm5vdW5jZXInKTtcbiAgfVxuXG4gIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoSXJvbkExMXlBbm5vdW5jZXIuaW5zdGFuY2UpO1xufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcblxuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge3VzZVNoYWRvd30gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvdXRpbHMvc2V0dGluZ3MuanMnO1xuXG4vLyBDb250YWlucyBhbGwgY29ubmVjdGVkIHJlc2l6YWJsZXMgdGhhdCBkbyBub3QgaGF2ZSBhIHBhcmVudC5cbnZhciBPUlBIQU5TID0gbmV3IFNldCgpO1xuXG4vKipcbiAqIGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgIGlzIGEgYmVoYXZpb3IgdGhhdCBjYW4gYmUgdXNlZCBpbiBQb2x5bWVyIGVsZW1lbnRzIHRvXG4gKiBjb29yZGluYXRlIHRoZSBmbG93IG9mIHJlc2l6ZSBldmVudHMgYmV0d2VlbiBcInJlc2l6ZXJzXCIgKGVsZW1lbnRzIHRoYXRcbiAqY29udHJvbCB0aGUgc2l6ZSBvciBoaWRkZW4gc3RhdGUgb2YgdGhlaXIgY2hpbGRyZW4pIGFuZCBcInJlc2l6YWJsZXNcIiAoZWxlbWVudHNcbiAqdGhhdCBuZWVkIHRvIGJlIG5vdGlmaWVkIHdoZW4gdGhleSBhcmUgcmVzaXplZCBvciB1bi1oaWRkZW4gYnkgdGhlaXIgcGFyZW50c1xuICppbiBvcmRlciB0byB0YWtlIGFjdGlvbiBvbiB0aGVpciBuZXcgbWVhc3VyZW1lbnRzKS5cbiAqXG4gKiBFbGVtZW50cyB0aGF0IHBlcmZvcm0gbWVhc3VyZW1lbnQgc2hvdWxkIGFkZCB0aGUgYElyb25SZXNpemFibGVCZWhhdmlvcmBcbiAqYmVoYXZpb3IgdG8gdGhlaXIgZWxlbWVudCBkZWZpbml0aW9uIGFuZCBsaXN0ZW4gZm9yIHRoZSBgaXJvbi1yZXNpemVgIGV2ZW50IG9uXG4gKnRoZW1zZWx2ZXMuIFRoaXMgZXZlbnQgd2lsbCBiZSBmaXJlZCB3aGVuIHRoZXkgYmVjb21lIHNob3dpbmcgYWZ0ZXIgaGF2aW5nXG4gKmJlZW4gaGlkZGVuLCB3aGVuIHRoZXkgYXJlIHJlc2l6ZWQgZXhwbGljaXRseSBieSBhbm90aGVyIHJlc2l6YWJsZSwgb3Igd2hlblxuICp0aGUgd2luZG93IGhhcyBiZWVuIHJlc2l6ZWQuXG4gKlxuICogTm90ZSwgdGhlIGBpcm9uLXJlc2l6ZWAgZXZlbnQgaXMgbm9uLWJ1YmJsaW5nLlxuICpcbiAqIEBwb2x5bWVyQmVoYXZpb3JcbiAqIEBkZW1vIGRlbW8vaW5kZXguaHRtbFxuICoqL1xuZXhwb3J0IGNvbnN0IElyb25SZXNpemFibGVCZWhhdmlvciA9IHtcbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFRoZSBjbG9zZXN0IGFuY2VzdG9yIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgLlxuICAgICAqL1xuICAgIF9wYXJlbnRSZXNpemFibGU6IHtcbiAgICAgIHR5cGU6IE9iamVjdCxcbiAgICAgIG9ic2VydmVyOiAnX3BhcmVudFJlc2l6YWJsZUNoYW5nZWQnLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUcnVlIGlmIHRoaXMgZWxlbWVudCBpcyBjdXJyZW50bHkgbm90aWZ5aW5nIGl0cyBkZXNjZW5kYW50IGVsZW1lbnRzIG9mXG4gICAgICogcmVzaXplLlxuICAgICAqL1xuICAgIF9ub3RpZnlpbmdEZXNjZW5kYW50OiB7XG4gICAgICB0eXBlOiBCb29sZWFuLFxuICAgICAgdmFsdWU6IGZhbHNlLFxuICAgIH1cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHtcbiAgICAnaXJvbi1yZXF1ZXN0LXJlc2l6ZS1ub3RpZmljYXRpb25zJzogJ19vbklyb25SZXF1ZXN0UmVzaXplTm90aWZpY2F0aW9ucydcbiAgfSxcblxuICBjcmVhdGVkOiBmdW5jdGlvbigpIHtcbiAgICAvLyBXZSBkb24ndCByZWFsbHkgbmVlZCBwcm9wZXJ0eSBlZmZlY3RzIG9uIHRoZXNlLCBhbmQgYWxzbyB3ZSB3YW50IHRoZW1cbiAgICAvLyB0byBiZSBjcmVhdGVkIGJlZm9yZSB0aGUgYF9wYXJlbnRSZXNpemFibGVgIG9ic2VydmVyIGZpcmVzOlxuICAgIHRoaXMuX2ludGVyZXN0ZWRSZXNpemFibGVzID0gW107XG4gICAgdGhpcy5fYm91bmROb3RpZnlSZXNpemUgPSB0aGlzLm5vdGlmeVJlc2l6ZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuX2JvdW5kT25EZXNjZW5kYW50SXJvblJlc2l6ZSA9IHRoaXMuX29uRGVzY2VuZGFudElyb25SZXNpemUuYmluZCh0aGlzKTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fcmVxdWVzdFJlc2l6ZU5vdGlmaWNhdGlvbnMoKTtcbiAgfSxcblxuICBkZXRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuX3BhcmVudFJlc2l6YWJsZSkge1xuICAgICAgdGhpcy5fcGFyZW50UmVzaXphYmxlLnN0b3BSZXNpemVOb3RpZmljYXRpb25zRm9yKHRoaXMpO1xuICAgIH0gZWxzZSB7XG4gICAgICBPUlBIQU5TLmRlbGV0ZSh0aGlzKTtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9ib3VuZE5vdGlmeVJlc2l6ZSk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50UmVzaXphYmxlID0gbnVsbDtcbiAgfSxcblxuICAvKipcbiAgICogQ2FuIGJlIGNhbGxlZCB0byBtYW51YWxseSBub3RpZnkgYSByZXNpemFibGUgYW5kIGl0cyBkZXNjZW5kYW50XG4gICAqIHJlc2l6YWJsZXMgb2YgYSByZXNpemUgY2hhbmdlLlxuICAgKi9cbiAgbm90aWZ5UmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX2ludGVyZXN0ZWRSZXNpemFibGVzLmZvckVhY2goZnVuY3Rpb24ocmVzaXphYmxlKSB7XG4gICAgICBpZiAodGhpcy5yZXNpemVyU2hvdWxkTm90aWZ5KHJlc2l6YWJsZSkpIHtcbiAgICAgICAgdGhpcy5fbm90aWZ5RGVzY2VuZGFudChyZXNpemFibGUpO1xuICAgICAgfVxuICAgIH0sIHRoaXMpO1xuXG4gICAgdGhpcy5fZmlyZVJlc2l6ZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIGFzc2lnbiB0aGUgY2xvc2VzdCByZXNpemFibGUgYW5jZXN0b3IgdG8gdGhpcyByZXNpemFibGVcbiAgICogaWYgdGhlIGFuY2VzdG9yIGRldGVjdHMgYSByZXF1ZXN0IGZvciBub3RpZmljYXRpb25zLlxuICAgKi9cbiAgYXNzaWduUGFyZW50UmVzaXphYmxlOiBmdW5jdGlvbihwYXJlbnRSZXNpemFibGUpIHtcbiAgICBpZiAodGhpcy5fcGFyZW50UmVzaXphYmxlKSB7XG4gICAgICB0aGlzLl9wYXJlbnRSZXNpemFibGUuc3RvcFJlc2l6ZU5vdGlmaWNhdGlvbnNGb3IodGhpcyk7XG4gICAgfVxuXG4gICAgdGhpcy5fcGFyZW50UmVzaXphYmxlID0gcGFyZW50UmVzaXphYmxlO1xuXG4gICAgaWYgKHBhcmVudFJlc2l6YWJsZSAmJlxuICAgICAgICBwYXJlbnRSZXNpemFibGUuX2ludGVyZXN0ZWRSZXNpemFibGVzLmluZGV4T2YodGhpcykgPT09IC0xKSB7XG4gICAgICBwYXJlbnRSZXNpemFibGUuX2ludGVyZXN0ZWRSZXNpemFibGVzLnB1c2godGhpcyk7XG4gICAgICBwYXJlbnRSZXNpemFibGUuX3N1YnNjcmliZUlyb25SZXNpemUodGhpcyk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBVc2VkIHRvIHJlbW92ZSBhIHJlc2l6YWJsZSBkZXNjZW5kYW50IGZyb20gdGhlIGxpc3Qgb2YgZGVzY2VuZGFudHNcbiAgICogdGhhdCBzaG91bGQgYmUgbm90aWZpZWQgb2YgYSByZXNpemUgY2hhbmdlLlxuICAgKi9cbiAgc3RvcFJlc2l6ZU5vdGlmaWNhdGlvbnNGb3I6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHZhciBpbmRleCA9IHRoaXMuX2ludGVyZXN0ZWRSZXNpemFibGVzLmluZGV4T2YodGFyZ2V0KTtcblxuICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICB0aGlzLl9pbnRlcmVzdGVkUmVzaXphYmxlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgdGhpcy5fdW5zdWJzY3JpYmVJcm9uUmVzaXplKHRhcmdldCk7XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBTdWJzY3JpYmUgdGhpcyBlbGVtZW50IHRvIGxpc3RlbiB0byBpcm9uLXJlc2l6ZSBldmVudHMgb24gdGhlIGdpdmVuIHRhcmdldC5cbiAgICpcbiAgICogUHJlZmVycmVkIG92ZXIgdGFyZ2V0Lmxpc3RlbiBiZWNhdXNlIHRoZSBwcm9wZXJ0eSByZW5hbWVyIGRvZXMgbm90XG4gICAqIHVuZGVyc3RhbmQgdG8gcmVuYW1lIHdoZW4gdGhlIHRhcmdldCBpcyBub3Qgc3BlY2lmaWNhbGx5IFwidGhpc1wiXG4gICAqXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSB0YXJnZXQgRWxlbWVudCB0byBsaXN0ZW4gdG8gZm9yIGlyb24tcmVzaXplIGV2ZW50cy5cbiAgICovXG4gIF9zdWJzY3JpYmVJcm9uUmVzaXplOiBmdW5jdGlvbih0YXJnZXQpIHtcbiAgICB0YXJnZXQuYWRkRXZlbnRMaXN0ZW5lcignaXJvbi1yZXNpemUnLCB0aGlzLl9ib3VuZE9uRGVzY2VuZGFudElyb25SZXNpemUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBVbnN1YnNjcmliZSB0aGlzIGVsZW1lbnQgZnJvbSBsaXN0ZW5pbmcgdG8gdG8gaXJvbi1yZXNpemUgZXZlbnRzIG9uIHRoZVxuICAgKiBnaXZlbiB0YXJnZXQuXG4gICAqXG4gICAqIFByZWZlcnJlZCBvdmVyIHRhcmdldC51bmxpc3RlbiBiZWNhdXNlIHRoZSBwcm9wZXJ0eSByZW5hbWVyIGRvZXMgbm90XG4gICAqIHVuZGVyc3RhbmQgdG8gcmVuYW1lIHdoZW4gdGhlIHRhcmdldCBpcyBub3Qgc3BlY2lmaWNhbGx5IFwidGhpc1wiXG4gICAqXG4gICAqIEBwYXJhbSB7IUhUTUxFbGVtZW50fSB0YXJnZXQgRWxlbWVudCB0byBsaXN0ZW4gdG8gZm9yIGlyb24tcmVzaXplIGV2ZW50cy5cbiAgICovXG4gIF91bnN1YnNjcmliZUlyb25SZXNpemU6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAnaXJvbi1yZXNpemUnLCB0aGlzLl9ib3VuZE9uRGVzY2VuZGFudElyb25SZXNpemUpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBUaGlzIG1ldGhvZCBjYW4gYmUgb3ZlcnJpZGRlbiB0byBmaWx0ZXIgbmVzdGVkIGVsZW1lbnRzIHRoYXQgc2hvdWxkIG9yXG4gICAqIHNob3VsZCBub3QgYmUgbm90aWZpZWQgYnkgdGhlIGN1cnJlbnQgZWxlbWVudC4gUmV0dXJuIHRydWUgaWYgYW4gZWxlbWVudFxuICAgKiBzaG91bGQgYmUgbm90aWZpZWQsIG9yIGZhbHNlIGlmIGl0IHNob3VsZCBub3QgYmUgbm90aWZpZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnQgQSBjYW5kaWRhdGUgZGVzY2VuZGFudCBlbGVtZW50IHRoYXRcbiAgICogaW1wbGVtZW50cyBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYC5cbiAgICogQHJldHVybiB7Ym9vbGVhbn0gVHJ1ZSBpZiB0aGUgYGVsZW1lbnRgIHNob3VsZCBiZSBub3RpZmllZCBvZiByZXNpemUuXG4gICAqL1xuICByZXNpemVyU2hvdWxkTm90aWZ5OiBmdW5jdGlvbihlbGVtZW50KSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0sXG5cbiAgX29uRGVzY2VuZGFudElyb25SZXNpemU6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMuX25vdGlmeWluZ0Rlc2NlbmRhbnQpIHtcbiAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIG5vIG5lZWQgdG8gdXNlIHRoaXMgZHVyaW5nIHNoYWRvdyBkb20gYmVjYXVzZSBvZiBldmVudCByZXRhcmdldGluZ1xuICAgIGlmICghdXNlU2hhZG93KSB7XG4gICAgICB0aGlzLl9maXJlUmVzaXplKCk7XG4gICAgfVxuICB9LFxuXG4gIF9maXJlUmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmZpcmUoJ2lyb24tcmVzaXplJywgbnVsbCwge25vZGU6IHRoaXMsIGJ1YmJsZXM6IGZhbHNlfSk7XG4gIH0sXG5cbiAgX29uSXJvblJlcXVlc3RSZXNpemVOb3RpZmljYXRpb25zOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciB0YXJnZXQgPSAvKiogQHR5cGUgeyFFdmVudFRhcmdldH0gKi8gKGRvbShldmVudCkucm9vdFRhcmdldCk7XG4gICAgaWYgKHRhcmdldCA9PT0gdGhpcykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRhcmdldC5hc3NpZ25QYXJlbnRSZXNpemFibGUodGhpcyk7XG4gICAgdGhpcy5fbm90aWZ5RGVzY2VuZGFudCh0YXJnZXQpO1xuXG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG5cbiAgX3BhcmVudFJlc2l6YWJsZUNoYW5nZWQ6IGZ1bmN0aW9uKHBhcmVudFJlc2l6YWJsZSkge1xuICAgIGlmIChwYXJlbnRSZXNpemFibGUpIHtcbiAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdyZXNpemUnLCB0aGlzLl9ib3VuZE5vdGlmeVJlc2l6ZSk7XG4gICAgfVxuICB9LFxuXG4gIF9ub3RpZnlEZXNjZW5kYW50OiBmdW5jdGlvbihkZXNjZW5kYW50KSB7XG4gICAgLy8gTk9URShjZGF0YSk6IEluIElFMTAsIGF0dGFjaGVkIGlzIGZpcmVkIG9uIGNoaWxkcmVuIGZpcnN0LCBzbyBpdCdzXG4gICAgLy8gaW1wb3J0YW50IG5vdCB0byBub3RpZnkgdGhlbSBpZiB0aGUgcGFyZW50IGlzIG5vdCBhdHRhY2hlZCB5ZXQgKG9yXG4gICAgLy8gZWxzZSB0aGV5IHdpbGwgZ2V0IHJlZHVuZGFudGx5IG5vdGlmaWVkIHdoZW4gdGhlIHBhcmVudCBhdHRhY2hlcykuXG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9ub3RpZnlpbmdEZXNjZW5kYW50ID0gdHJ1ZTtcbiAgICBkZXNjZW5kYW50Lm5vdGlmeVJlc2l6ZSgpO1xuICAgIHRoaXMuX25vdGlmeWluZ0Rlc2NlbmRhbnQgPSBmYWxzZTtcbiAgfSxcblxuICBfcmVxdWVzdFJlc2l6ZU5vdGlmaWNhdGlvbnM6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdsb2FkaW5nJykge1xuICAgICAgdmFyIF9yZXF1ZXN0UmVzaXplTm90aWZpY2F0aW9ucyA9XG4gICAgICAgICAgdGhpcy5fcmVxdWVzdFJlc2l6ZU5vdGlmaWNhdGlvbnMuYmluZCh0aGlzKTtcbiAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgJ3JlYWR5c3RhdGVjaGFuZ2UnLCBmdW5jdGlvbiByZWFkeXN0YXRlY2hhbmdlZCgpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3JlYWR5c3RhdGVjaGFuZ2UnLCByZWFkeXN0YXRlY2hhbmdlZCk7XG4gICAgICAgICAgICBfcmVxdWVzdFJlc2l6ZU5vdGlmaWNhdGlvbnMoKTtcbiAgICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fZmluZFBhcmVudCgpO1xuXG4gICAgICBpZiAoIXRoaXMuX3BhcmVudFJlc2l6YWJsZSkge1xuICAgICAgICAvLyBJZiB0aGlzIHJlc2l6YWJsZSBpcyBhbiBvcnBoYW4sIHRlbGwgb3RoZXIgb3JwaGFucyB0byB0cnkgdG8gZmluZFxuICAgICAgICAvLyB0aGVpciBwYXJlbnQgYWdhaW4sIGluIGNhc2UgaXQncyB0aGlzIHJlc2l6YWJsZS5cbiAgICAgICAgT1JQSEFOUy5mb3JFYWNoKGZ1bmN0aW9uKG9ycGhhbikge1xuICAgICAgICAgIGlmIChvcnBoYW4gIT09IHRoaXMpIHtcbiAgICAgICAgICAgIG9ycGhhbi5fZmluZFBhcmVudCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSwgdGhpcyk7XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2JvdW5kTm90aWZ5UmVzaXplKTtcbiAgICAgICAgdGhpcy5ub3RpZnlSZXNpemUoKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIElmIHRoaXMgcmVzaXphYmxlIGhhcyBhIHBhcmVudCwgdGVsbCBvdGhlciBjaGlsZCByZXNpemFibGVzIG9mXG4gICAgICAgIC8vIHRoYXQgcGFyZW50IHRvIHRyeSBmaW5kaW5nIHRoZWlyIHBhcmVudCBhZ2FpbiwgaW4gY2FzZSBpdCdzIHRoaXNcbiAgICAgICAgLy8gcmVzaXphYmxlLlxuICAgICAgICB0aGlzLl9wYXJlbnRSZXNpemFibGUuX2ludGVyZXN0ZWRSZXNpemFibGVzXG4gICAgICAgICAgICAuZm9yRWFjaChmdW5jdGlvbihyZXNpemFibGUpIHtcbiAgICAgICAgICAgICAgaWYgKHJlc2l6YWJsZSAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIHJlc2l6YWJsZS5fZmluZFBhcmVudCgpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCB0aGlzKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgX2ZpbmRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuYXNzaWduUGFyZW50UmVzaXphYmxlKG51bGwpO1xuICAgIHRoaXMuZmlyZShcbiAgICAgICAgJ2lyb24tcmVxdWVzdC1yZXNpemUtbm90aWZpY2F0aW9ucycsXG4gICAgICAgIG51bGwsXG4gICAgICAgIHtub2RlOiB0aGlzLCBidWJibGVzOiB0cnVlLCBjYW5jZWxhYmxlOiB0cnVlfSk7XG5cbiAgICBpZiAoIXRoaXMuX3BhcmVudFJlc2l6YWJsZSkge1xuICAgICAgT1JQSEFOUy5hZGQodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9SUEhBTlMuZGVsZXRlKHRoaXMpO1xuICAgIH1cbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0IHtJcm9uQTExeUFubm91bmNlcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1hMTF5LWFubm91bmNlci9pcm9uLWExMXktYW5ub3VuY2VyLmpzJztcbmltcG9ydCB7SXJvbk92ZXJsYXlCZWhhdmlvciwgSXJvbk92ZXJsYXlCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7QmFzZX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5cbi8vIEtlZXBzIHRyYWNrIG9mIHRoZSB0b2FzdCBjdXJyZW50bHkgb3BlbmVkLlxudmFyIGN1cnJlbnRUb2FzdCA9IG51bGw7XG5cbi8qKlxuTWF0ZXJpYWwgZGVzaWduOiBbU25hY2tiYXJzICZcbnRvYXN0c10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL3NuYWNrYmFycy10b2FzdHMuaHRtbClcblxuYHBhcGVyLXRvYXN0YCBwcm92aWRlcyBhIHN1YnRsZSBub3RpZmljYXRpb24gdG9hc3QuIE9ubHkgb25lIGBwYXBlci10b2FzdGAgd2lsbFxuYmUgdmlzaWJsZSBvbiBzY3JlZW4uXG5cblVzZSBgb3BlbmVkYCB0byBzaG93IHRoZSB0b2FzdDpcblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci10b2FzdCB0ZXh0PVwiSGVsbG8gd29ybGQhXCIgb3BlbmVkPjwvcGFwZXItdG9hc3Q+XG5cbkFsc28gYG9wZW4oKWAgb3IgYHNob3coKWAgY2FuIGJlIHVzZWQgdG8gc2hvdyB0aGUgdG9hc3Q6XG5cbkV4YW1wbGU6XG5cbiAgICA8cGFwZXItYnV0dG9uIG9uLWNsaWNrPVwib3BlblRvYXN0XCI+T3BlbiBUb2FzdDwvcGFwZXItYnV0dG9uPlxuICAgIDxwYXBlci10b2FzdCBpZD1cInRvYXN0XCIgdGV4dD1cIkhlbGxvIHdvcmxkIVwiPjwvcGFwZXItdG9hc3Q+XG5cbiAgICAuLi5cblxuICAgIG9wZW5Ub2FzdDogZnVuY3Rpb24oKSB7XG4gICAgICB0aGlzLiQudG9hc3Qub3BlbigpO1xuICAgIH1cblxuU2V0IGBkdXJhdGlvbmAgdG8gMCwgYSBuZWdhdGl2ZSBudW1iZXIgb3IgSW5maW5pdHkgdG8gcGVyc2lzdCB0aGUgdG9hc3Qgb25cbnNjcmVlbjpcblxuRXhhbXBsZTpcblxuICAgIDxwYXBlci10b2FzdCB0ZXh0PVwiVGVybXMgYW5kIGNvbmRpdGlvbnNcIiBvcGVuZWQgZHVyYXRpb249XCIwXCI+XG4gICAgICA8YSBocmVmPVwiI1wiPlNob3cgbW9yZTwvYT5cbiAgICA8L3BhcGVyLXRvYXN0PlxuXG5cbiMjIyBTdHlsaW5nXG5UaGUgZm9sbG93aW5nIGN1c3RvbSBwcm9wZXJ0aWVzIGFuZCBtaXhpbnMgYXJlIGF2YWlsYWJsZSBmb3Igc3R5bGluZzpcblxuQ3VzdG9tIHByb3BlcnR5IHwgRGVzY3JpcHRpb24gfCBEZWZhdWx0XG4tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLVxuYC0tcGFwZXItdG9hc3QtYmFja2dyb3VuZC1jb2xvcmAgfCBUaGUgcGFwZXItdG9hc3QgYmFja2dyb3VuZC1jb2xvciB8IGAjMzIzMjMyYFxuYC0tcGFwZXItdG9hc3QtY29sb3JgIHwgVGhlIHBhcGVyLXRvYXN0IGNvbG9yIHwgYCNmMWYxZjFgXG5cblRoaXMgZWxlbWVudCBhcHBsaWVzIHRoZSBtaXhpbiBgLS1wYXBlci1mb250LWNvbW1vbi1iYXNlYCBidXQgZG9lcyBub3QgaW1wb3J0XG5gcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuaHRtbGAuIEluIG9yZGVyIHRvIGFwcGx5IHRoZSBgUm9ib3RvYCBmb250IHRvIHRoaXNcbmVsZW1lbnQsIG1ha2Ugc3VyZSB5b3UndmUgaW1wb3J0ZWQgYHBhcGVyLXN0eWxlcy90eXBvZ3JhcGh5Lmh0bWxgLlxuXG5AZ3JvdXAgUGFwZXIgRWxlbWVudHNcbkBlbGVtZW50IHBhcGVyLXRvYXN0XG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbkBoZXJvIGhlcm8uc3ZnXG4qL1xuUG9seW1lcih7XG4gIF90ZW1wbGF0ZTogaHRtbGBcbiAgICA8c3R5bGU+XG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXBhcGVyLXRvYXN0LWJhY2tncm91bmQtY29sb3IsICMzMjMyMzIpO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItdG9hc3QtY29sb3IsICNmMWYxZjEpO1xuICAgICAgICBtaW4taGVpZ2h0OiA0OHB4O1xuICAgICAgICBtaW4td2lkdGg6IDI4OHB4O1xuICAgICAgICBwYWRkaW5nOiAxNnB4IDI0cHg7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4yNik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbiAgICAgICAgbWFyZ2luOiAxMnB4O1xuICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiAtd2Via2l0LXRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjNzLCBvcGFjaXR5IDAuM3M7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDEwMHB4KTtcbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1jb21tb24tYmFzZTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmNhcHN1bGUpIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMjRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoLmZpdC1ib3R0b20pIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1pbi13aWR0aDogMDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCgucGFwZXItdG9hc3Qtb3Blbikge1xuICAgICAgICBvcGFjaXR5OiAxO1xuICAgICAgICAtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPHNwYW4gaWQ9XCJsYWJlbFwiPnt7dGV4dH19PC9zcGFuPlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci10b2FzdCcsXG4gIGJlaGF2aW9yczogW0lyb25PdmVybGF5QmVoYXZpb3JdLFxuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBUaGUgZWxlbWVudCB0byBmaXQgYHRoaXNgIGludG8uXG4gICAgICogT3ZlcnJpZGRlbiBmcm9tIGBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAuXG4gICAgICovXG4gICAgZml0SW50bzoge3R5cGU6IE9iamVjdCwgdmFsdWU6IHdpbmRvdywgb2JzZXJ2ZXI6ICdfb25GaXRJbnRvQ2hhbmdlZCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGRyb3Bkb3duIGNvbnRlbnRcbiAgICAgKiBob3Jpem9udGFsbHkgcmVsYXRpdmUgdG8gYHBvc2l0aW9uVGFyZ2V0YC5cbiAgICAgKiBPdmVycmlkZGVuIGZyb20gYFBvbHltZXIuSXJvbkZpdEJlaGF2aW9yYC5cbiAgICAgKi9cbiAgICBob3Jpem9udGFsQWxpZ246IHt0eXBlOiBTdHJpbmcsIHZhbHVlOiAnbGVmdCd9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIG9yaWVudGF0aW9uIGFnYWluc3Qgd2hpY2ggdG8gYWxpZ24gdGhlIGRyb3Bkb3duIGNvbnRlbnRcbiAgICAgKiB2ZXJ0aWNhbGx5IHJlbGF0aXZlIHRvIGBwb3NpdGlvblRhcmdldGAuXG4gICAgICogT3ZlcnJpZGRlbiBmcm9tIGBQb2x5bWVyLklyb25GaXRCZWhhdmlvcmAuXG4gICAgICovXG4gICAgdmVydGljYWxBbGlnbjoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdib3R0b20nfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHMgdG8gc2hvdyB0aGUgdG9hc3QuXG4gICAgICogU2V0IHRvIGAwYCwgYSBuZWdhdGl2ZSBudW1iZXIsIG9yIGBJbmZpbml0eWAsIHRvIGRpc2FibGUgdGhlXG4gICAgICogdG9hc3QgYXV0by1jbG9zaW5nLlxuICAgICAqL1xuICAgIGR1cmF0aW9uOiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMzAwMH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGV4dCB0byBkaXNwbGF5IGluIHRoZSB0b2FzdC5cbiAgICAgKi9cbiAgICB0ZXh0OiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJyd9LFxuXG4gICAgLyoqXG4gICAgICogT3ZlcnJpZGRlbiBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICAgKiBTZXQgdG8gZmFsc2UgdG8gZW5hYmxlIGNsb3Npbmcgb2YgdGhlIHRvYXN0IGJ5IGNsaWNraW5nIG91dHNpZGUgaXQuXG4gICAgICovXG4gICAgbm9DYW5jZWxPbk91dHNpZGVDbGljazoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIE92ZXJyaWRkZW4gZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmAuXG4gICAgICogU2V0IHRvIHRydWUgdG8gZGlzYWJsZSBhdXRvLWZvY3VzaW5nIHRoZSB0b2FzdCBvciBjaGlsZCBub2RlcyB3aXRoXG4gICAgICogdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZWAgd2hlbiB0aGUgb3ZlcmxheSBpcyBvcGVuZWQuXG4gICAgICovXG4gICAgbm9BdXRvRm9jdXM6IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogdHJ1ZX1cbiAgfSxcblxuICBsaXN0ZW5lcnM6IHsndHJhbnNpdGlvbmVuZCc6ICdfX29uVHJhbnNpdGlvbkVuZCd9LFxuXG4gIC8qKlxuICAgKiBSZWFkLW9ubHkuIERlcHJlY2F0ZWQuIFVzZSBgb3BlbmVkYCBmcm9tIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICogQHByb3BlcnR5IHZpc2libGVcbiAgICogQGRlcHJlY2F0ZWRcbiAgICovXG4gIGdldCB2aXNpYmxlKCkge1xuICAgIEJhc2UuX3dhcm4oJ2B2aXNpYmxlYCBpcyBkZXByZWNhdGVkLCB1c2UgYG9wZW5lZGAgaW5zdGVhZCcpO1xuICAgIHJldHVybiB0aGlzLm9wZW5lZDtcbiAgfSxcblxuICAvKipcbiAgICogUmVhZC1vbmx5LiBDYW4gYXV0by1jbG9zZSBpZiBkdXJhdGlvbiBpcyBhIHBvc2l0aXZlIGZpbml0ZSBudW1iZXIuXG4gICAqIEBwcm9wZXJ0eSBfY2FuQXV0b0Nsb3NlXG4gICAqL1xuICBnZXQgX2NhbkF1dG9DbG9zZSgpIHtcbiAgICByZXR1cm4gdGhpcy5kdXJhdGlvbiA+IDAgJiYgdGhpcy5kdXJhdGlvbiAhPT0gSW5maW5pdHk7XG4gIH0sXG5cbiAgY3JlYXRlZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fYXV0b0Nsb3NlID0gbnVsbDtcbiAgICBJcm9uQTExeUFubm91bmNlci5yZXF1ZXN0QXZhaWxhYmlsaXR5KCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNob3cgdGhlIHRvYXN0LiBXaXRob3V0IGFyZ3VtZW50cywgdGhpcyBpcyB0aGUgc2FtZSBhcyBgb3BlbigpYCBmcm9tXG4gICAqIGBJcm9uT3ZlcmxheUJlaGF2aW9yYC5cbiAgICogQHBhcmFtIHsoT2JqZWN0fHN0cmluZyk9fSBwcm9wZXJ0aWVzIFByb3BlcnRpZXMgdG8gYmUgc2V0IGJlZm9yZSBvcGVuaW5nIHRoZSB0b2FzdC5cbiAgICogZS5nLiBgdG9hc3Quc2hvdygnaGVsbG8nKWAgb3IgYHRvYXN0LnNob3coe3RleHQ6ICdoZWxsbycsIGR1cmF0aW9uOiAzMDAwfSlgXG4gICAqL1xuICBzaG93OiBmdW5jdGlvbihwcm9wZXJ0aWVzKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9wZXJ0aWVzID09ICdzdHJpbmcnKSB7XG4gICAgICBwcm9wZXJ0aWVzID0ge3RleHQ6IHByb3BlcnRpZXN9O1xuICAgIH1cbiAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7XG4gICAgICBpZiAocHJvcGVydHkuaW5kZXhPZignXycpID09PSAwKSB7XG4gICAgICAgIEJhc2UuX3dhcm4oXG4gICAgICAgICAgICAnVGhlIHByb3BlcnR5IFwiJyArIHByb3BlcnR5ICsgJ1wiIGlzIHByaXZhdGUgYW5kIHdhcyBub3Qgc2V0LicpO1xuICAgICAgfSBlbHNlIGlmIChwcm9wZXJ0eSBpbiB0aGlzKSB7XG4gICAgICAgIHRoaXNbcHJvcGVydHldID0gcHJvcGVydGllc1twcm9wZXJ0eV07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBCYXNlLl93YXJuKCdUaGUgcHJvcGVydHkgXCInICsgcHJvcGVydHkgKyAnXCIgaXMgbm90IHZhbGlkLicpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLm9wZW4oKTtcbiAgfSxcblxuICAvKipcbiAgICogSGlkZSB0aGUgdG9hc3QuIFNhbWUgYXMgYGNsb3NlKClgIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgKi9cbiAgaGlkZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbG9zZSgpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYWxsZWQgb24gdHJhbnNpdGlvbnMgb2YgdGhlIHRvYXN0LCBpbmRpY2F0aW5nIGEgZmluaXNoZWQgYW5pbWF0aW9uXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBfX29uVHJhbnNpdGlvbkVuZDogZnVuY3Rpb24oZSkge1xuICAgIC8vIHRoZXJlIGFyZSBkaWZmZXJlbnQgdHJhbnNpdGlvbnMgdGhhdCBhcmUgaGFwcGVuaW5nIHdoZW4gb3BlbmluZyBhbmRcbiAgICAvLyBjbG9zaW5nIHRoZSB0b2FzdC4gVGhlIGxhc3Qgb25lIHNvIGZhciBpcyBmb3IgYG9wYWNpdHlgLlxuICAgIC8vIFRoaXMgbWFya3MgdGhlIGVuZCBvZiB0aGUgdHJhbnNpdGlvbiwgc28gd2UgY2hlY2sgZm9yIHRoaXMgdG8gZGV0ZXJtaW5lXG4gICAgLy8gaWYgdGhpcyBpcyB0aGUgY29ycmVjdCBldmVudC5cbiAgICBpZiAoZSAmJiBlLnRhcmdldCA9PT0gdGhpcyAmJiBlLnByb3BlcnR5TmFtZSA9PT0gJ29wYWNpdHknKSB7XG4gICAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgICAgdGhpcy5fZmluaXNoUmVuZGVyT3BlbmVkKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9maW5pc2hSZW5kZXJDbG9zZWQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRkZW4gZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmAuXG4gICAqIENhbGxlZCB3aGVuIHRoZSB2YWx1ZSBvZiBgb3BlbmVkYCBjaGFuZ2VzLlxuICAgKi9cbiAgX29wZW5lZENoYW5nZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLl9hdXRvQ2xvc2UgIT09IG51bGwpIHtcbiAgICAgIHRoaXMuY2FuY2VsQXN5bmModGhpcy5fYXV0b0Nsb3NlKTtcbiAgICAgIHRoaXMuX2F1dG9DbG9zZSA9IG51bGw7XG4gICAgfVxuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgaWYgKGN1cnJlbnRUb2FzdCAmJiBjdXJyZW50VG9hc3QgIT09IHRoaXMpIHtcbiAgICAgICAgY3VycmVudFRvYXN0LmNsb3NlKCk7XG4gICAgICB9XG4gICAgICBjdXJyZW50VG9hc3QgPSB0aGlzO1xuICAgICAgdGhpcy5maXJlKCdpcm9uLWFubm91bmNlJywge3RleHQ6IHRoaXMudGV4dH0pO1xuICAgICAgaWYgKHRoaXMuX2NhbkF1dG9DbG9zZSkge1xuICAgICAgICB0aGlzLl9hdXRvQ2xvc2UgPSB0aGlzLmFzeW5jKHRoaXMuY2xvc2UsIHRoaXMuZHVyYXRpb24pO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoY3VycmVudFRvYXN0ID09PSB0aGlzKSB7XG4gICAgICBjdXJyZW50VG9hc3QgPSBudWxsO1xuICAgIH1cbiAgICBJcm9uT3ZlcmxheUJlaGF2aW9ySW1wbC5fb3BlbmVkQ2hhbmdlZC5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9LFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZGVuIGZyb20gYElyb25PdmVybGF5QmVoYXZpb3JgLlxuICAgKi9cbiAgX3JlbmRlck9wZW5lZDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdwYXBlci10b2FzdC1vcGVuJyk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRkZW4gZnJvbSBgSXJvbk92ZXJsYXlCZWhhdmlvcmAuXG4gICAqL1xuICBfcmVuZGVyQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ3BhcGVyLXRvYXN0LW9wZW4nKTtcbiAgfSxcblxuICAvKipcbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9vbkZpdEludG9DaGFuZ2VkOiBmdW5jdGlvbihmaXRJbnRvKSB7XG4gICAgdGhpcy5wb3NpdGlvblRhcmdldCA9IGZpdEludG87XG4gIH1cblxuICAvKipcbiAgICogRmlyZWQgd2hlbiBgcGFwZXItdG9hc3RgIGlzIG9wZW5lZC5cbiAgICpcbiAgICogQGV2ZW50ICdpcm9uLWFubm91bmNlJ1xuICAgKiBAcGFyYW0ge3t0ZXh0OiBzdHJpbmd9fSBkZXRhaWwgQ29udGFpbnMgdGV4dCB0aGF0IHdpbGwgYmUgYW5ub3VuY2VkLlxuICAgKi9cbn0pO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFpQ0E7QUFDQTs7Ozs7Ozs7O0FBREE7QUFZQTtBQUVBO0FBRUE7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQVRBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFuREE7QUFzREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUM5R0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBa0JBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBRkE7QUFDQTtBQUlBOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQW1CQTtBQUNBO0FBREE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTNPQTs7Ozs7Ozs7Ozs7O0FDcENBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBcURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBREE7QUErQ0E7QUFDQTtBQUVBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBNUNBO0FBK0NBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7OztBQXZOQTs7OztBIiwic291cmNlUm9vdCI6IiJ9