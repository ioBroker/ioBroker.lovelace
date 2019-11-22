(self["webpackJsonp"] = self["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/@polymer/app-layout/app-drawer/app-drawer.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@polymer/app-layout/app-drawer/app-drawer.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/render-status.js */ "./node_modules/@polymer/polymer/lib/utils/render-status.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened$=\"[[opened]]\" persistent$=\"[[persistent]]\" position$=\"[[position]]\" swipe-open$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"], ["\n    <style>\n      :host {\n        position: fixed;\n        top: -120px;\n        right: 0;\n        bottom: -120px;\n        left: 0;\n\n        visibility: hidden;\n\n        transition-property: visibility;\n      }\n\n      :host([opened]) {\n        visibility: visible;\n      }\n\n      :host([persistent]) {\n        width: var(--app-drawer-width, 256px);\n      }\n\n      :host([persistent][position=left]) {\n        right: auto;\n      }\n\n      :host([persistent][position=right]) {\n        left: auto;\n      }\n\n      #contentContainer {\n        position: absolute;\n        top: 0;\n        bottom: 0;\n        left: 0;\n\n        width: var(--app-drawer-width, 256px);\n        padding: 120px 0;\n\n        transition-property: -webkit-transform;\n        transition-property: transform;\n        -webkit-transform: translate3d(-100%, 0, 0);\n        transform: translate3d(-100%, 0, 0);\n\n        background-color: #FFF;\n\n        @apply --app-drawer-content-container;\n      }\n\n      #contentContainer[persistent] {\n        width: 100%;\n      }\n\n      #contentContainer[position=right] {\n        right: 0;\n        left: auto;\n\n        -webkit-transform: translate3d(100%, 0, 0);\n        transform: translate3d(100%, 0, 0);\n      }\n\n      #contentContainer[swipe-open]::after {\n        position: fixed;\n        top: 0;\n        bottom: 0;\n        left: 100%;\n\n        visibility: visible;\n\n        width: 20px;\n\n        content: '';\n      }\n\n      #contentContainer[swipe-open][position=right]::after {\n        right: 100%;\n        left: auto;\n      }\n\n      #contentContainer[opened] {\n        -webkit-transform: translate3d(0, 0, 0);\n        transform: translate3d(0, 0, 0);\n      }\n\n      #scrim {\n        position: absolute;\n        top: 0;\n        right: 0;\n        bottom: 0;\n        left: 0;\n\n        transition-property: opacity;\n        -webkit-transform: translateZ(0);\n        transform:  translateZ(0);\n\n        opacity: 0;\n        background: var(--app-drawer-scrim-background, rgba(0, 0, 0, 0.5));\n      }\n\n      #scrim.visible {\n        opacity: 1;\n      }\n\n      :host([no-transition]) #contentContainer {\n        transition-property: none;\n      }\n    </style>\n\n    <div id=\"scrim\" on-click=\"close\"></div>\n\n    <!-- HACK(keanulee): Bind attributes here (in addition to :host) for styling to workaround Safari\n    bug. https://bugs.webkit.org/show_bug.cgi?id=170762 -->\n    <div id=\"contentContainer\" opened\\$=\"[[opened]]\" persistent\\$=\"[[persistent]]\" position\\$=\"[[position]]\" swipe-open\\$=\"[[swipeOpen]]\">\n      <slot></slot>\n    </div>\n"]);

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
app-drawer is a navigation drawer that can slide in from the left or right.

Example:

Align the drawer at the start, which is left in LTR layouts (default):

```html
<app-drawer opened></app-drawer>
```

Align the drawer at the end:

```html
<app-drawer align="end" opened></app-drawer>
```

To make the contents of the drawer scrollable, create a wrapper for the scroll
content, and apply height and overflow styles to it.

```html
<app-drawer>
  <div style="height: 100%; overflow: auto;"></div>
</app-drawer>
```

### Styling

Custom property                  | Description                            | Default
---------------------------------|----------------------------------------|--------------------
`--app-drawer-width`             | Width of the drawer                    | 256px
`--app-drawer-content-container` | Mixin for the drawer content container | {}
`--app-drawer-scrim-background`  | Background for the scrim               | rgba(0, 0, 0, 0.5)

**NOTE:** If you use `<app-drawer>` with `<app-drawer-layout>` and specify a
value for
`--app-drawer-width`, that value must be accessible by both elements. This can
be done by defining the value on the `:host` that contains `<app-drawer-layout>`
(or `html` if outside a shadow root):

```css
:host {
  --app-drawer-width: 300px;
}
```

@group App Elements
@element app-drawer
@demo app-drawer/demo/left-drawer.html Simple Left Drawer
@demo app-drawer/demo/right-drawer.html Right Drawer with Icons
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_2__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject()),
  is: 'app-drawer',
  properties: {
    /**
     * The opened state of the drawer.
     */
    opened: {
      type: Boolean,
      value: false,
      notify: true,
      reflectToAttribute: true
    },

    /**
     * The drawer does not have a scrim and cannot be swiped close.
     */
    persistent: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * The transition duration of the drawer in milliseconds.
     */
    transitionDuration: {
      type: Number,
      value: 200
    },

    /**
     * The alignment of the drawer on the screen ('left', 'right', 'start' or
     * 'end'). 'start' computes to left and 'end' to right in LTR layout and
     * vice versa in RTL layout.
     */
    align: {
      type: String,
      value: 'left'
    },

    /**
     * The computed, read-only position of the drawer on the screen ('left' or
     * 'right').
     */
    position: {
      type: String,
      readOnly: true,
      reflectToAttribute: true
    },

    /**
     * Create an area at the edge of the screen to swipe open the drawer.
     */
    swipeOpen: {
      type: Boolean,
      value: false,
      reflectToAttribute: true
    },

    /**
     * Trap keyboard focus when the drawer is opened and not persistent.
     */
    noFocusTrap: {
      type: Boolean,
      value: false
    },

    /**
     * Disables swiping on the drawer.
     */
    disableSwipe: {
      type: Boolean,
      value: false
    }
  },
  observers: ['resetLayout(position, isAttached)', '_resetPosition(align, isAttached)', '_styleTransitionDuration(transitionDuration)', '_openedPersistentChanged(opened, persistent)'],
  _translateOffset: 0,
  _trackDetails: null,
  _drawerState: 0,
  _boundEscKeydownHandler: null,
  _firstTabStop: null,
  _lastTabStop: null,
  attached: function attached() {
    Object(_polymer_polymer_lib_utils_render_status_js__WEBPACK_IMPORTED_MODULE_5__["afterNextRender"])(this, function () {
      this._boundEscKeydownHandler = this._escKeydownHandler.bind(this);
      this.addEventListener('keydown', this._tabKeydownHandler.bind(this)); // Only listen for horizontal track so you can vertically scroll
      // inside the drawer.

      this.listen(this, 'track', '_track');
      this.setScrollDirection('y');
    });
    this.fire('app-reset-layout');
  },
  detached: function detached() {
    document.removeEventListener('keydown', this._boundEscKeydownHandler);
  },

  /**
   * Opens the drawer.
   */
  open: function open() {
    this.opened = true;
  },

  /**
   * Closes the drawer.
   */
  close: function close() {
    this.opened = false;
  },

  /**
   * Toggles the drawer open and close.
   */
  toggle: function toggle() {
    this.opened = !this.opened;
  },

  /**
   * Gets the width of the drawer.
   *
   * @return {number} The width of the drawer in pixels.
   */
  getWidth: function getWidth() {
    return this._savedWidth || this.$.contentContainer.offsetWidth;
  },
  _isRTL: function _isRTL() {
    return window.getComputedStyle(this).direction === 'rtl';
  },
  _resetPosition: function _resetPosition() {
    switch (this.align) {
      case 'start':
        this._setPosition(this._isRTL() ? 'right' : 'left');

        return;

      case 'end':
        this._setPosition(this._isRTL() ? 'left' : 'right');

        return;
    }

    this._setPosition(this.align);
  },
  _escKeydownHandler: function _escKeydownHandler(event) {
    var ESC_KEYCODE = 27;

    if (event.keyCode === ESC_KEYCODE) {
      // Prevent any side effects if app-drawer closes.
      event.preventDefault();
      this.close();
    }
  },
  _track: function _track(event) {
    if (this.persistent || this.disableSwipe) {
      return;
    } // Disable user selection on desktop.


    event.preventDefault();

    switch (event.detail.state) {
      case 'start':
        this._trackStart(event);

        break;

      case 'track':
        this._trackMove(event);

        break;

      case 'end':
        this._trackEnd(event);

        break;
    }
  },
  _trackStart: function _trackStart(event) {
    this._drawerState = this._DRAWER_STATE.TRACKING;
    var rect = this.$.contentContainer.getBoundingClientRect();
    this._savedWidth = rect.width;

    if (this.position === 'left') {
      this._translateOffset = rect.left;
    } else {
      this._translateOffset = rect.right - window.innerWidth;
    }

    this._trackDetails = []; // Disable transitions since style attributes will reflect user track
    // events.

    this._styleTransitionDuration(0);

    this.style.visibility = 'visible';
  },
  _trackMove: function _trackMove(event) {
    this._translateDrawer(event.detail.dx + this._translateOffset); // Use Date.now() since event.timeStamp is inconsistent across browsers
    // (e.g. most browsers use milliseconds but FF 44 uses microseconds).


    this._trackDetails.push({
      dx: event.detail.dx,
      timeStamp: Date.now()
    });
  },
  _trackEnd: function _trackEnd(event) {
    var x = event.detail.dx + this._translateOffset;
    var drawerWidth = this.getWidth();
    var isPositionLeft = this.position === 'left';
    var isInEndState = isPositionLeft ? x >= 0 || x <= -drawerWidth : x <= 0 || x >= drawerWidth;

    if (!isInEndState) {
      // No longer need the track events after this method returns - allow them
      // to be GC'd.
      var trackDetails = this._trackDetails;
      this._trackDetails = null;

      this._flingDrawer(event, trackDetails);

      if (this._drawerState === this._DRAWER_STATE.FLINGING) {
        return;
      }
    } // If the drawer is not flinging, toggle the opened state based on the
    // position of the drawer.


    var halfWidth = drawerWidth / 2;

    if (event.detail.dx < -halfWidth) {
      this.opened = this.position === 'right';
    } else if (event.detail.dx > halfWidth) {
      this.opened = this.position === 'left';
    }

    if (isInEndState) {
      this.debounce('_resetDrawerState', this._resetDrawerState);
    } else {
      this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration);
    }

    this._styleTransitionDuration(this.transitionDuration);

    this._resetDrawerTranslate();

    this.style.visibility = '';
  },
  _calculateVelocity: function _calculateVelocity(event, trackDetails) {
    // Find the oldest track event that is within 100ms using binary search.
    var now = Date.now();
    var timeLowerBound = now - 100;
    var trackDetail;
    var min = 0;
    var max = trackDetails.length - 1;

    while (min <= max) {
      // Floor of average of min and max.
      var mid = min + max >> 1;
      var d = trackDetails[mid];

      if (d.timeStamp >= timeLowerBound) {
        trackDetail = d;
        max = mid - 1;
      } else {
        min = mid + 1;
      }
    }

    if (trackDetail) {
      var dx = event.detail.dx - trackDetail.dx;
      var dt = now - trackDetail.timeStamp || 1;
      return dx / dt;
    }

    return 0;
  },
  _flingDrawer: function _flingDrawer(event, trackDetails) {
    var velocity = this._calculateVelocity(event, trackDetails); // Do not fling if velocity is not above a threshold.


    if (Math.abs(velocity) < this._MIN_FLING_THRESHOLD) {
      return;
    }

    this._drawerState = this._DRAWER_STATE.FLINGING;
    var x = event.detail.dx + this._translateOffset;
    var drawerWidth = this.getWidth();
    var isPositionLeft = this.position === 'left';
    var isVelocityPositive = velocity > 0;
    var isClosingLeft = !isVelocityPositive && isPositionLeft;
    var isClosingRight = isVelocityPositive && !isPositionLeft;
    var dx;

    if (isClosingLeft) {
      dx = -(x + drawerWidth);
    } else if (isClosingRight) {
      dx = drawerWidth - x;
    } else {
      dx = -x;
    } // Enforce a minimum transition velocity to make the drawer feel snappy.


    if (isVelocityPositive) {
      velocity = Math.max(velocity, this._MIN_TRANSITION_VELOCITY);
      this.opened = this.position === 'left';
    } else {
      velocity = Math.min(velocity, -this._MIN_TRANSITION_VELOCITY);
      this.opened = this.position === 'right';
    } // Calculate the amount of time needed to finish the transition based on the
    // initial slope of the timing function.


    var t = this._FLING_INITIAL_SLOPE * dx / velocity;

    this._styleTransitionDuration(t);

    this._styleTransitionTimingFunction(this._FLING_TIMING_FUNCTION);

    this._resetDrawerTranslate();

    this.debounce('_resetDrawerState', this._resetDrawerState, t);
  },
  _styleTransitionDuration: function _styleTransitionDuration(duration) {
    this.style.transitionDuration = duration + 'ms';
    this.$.contentContainer.style.transitionDuration = duration + 'ms';
    this.$.scrim.style.transitionDuration = duration + 'ms';
  },
  _styleTransitionTimingFunction: function _styleTransitionTimingFunction(timingFunction) {
    this.$.contentContainer.style.transitionTimingFunction = timingFunction;
    this.$.scrim.style.transitionTimingFunction = timingFunction;
  },
  _translateDrawer: function _translateDrawer(x) {
    var drawerWidth = this.getWidth();

    if (this.position === 'left') {
      x = Math.max(-drawerWidth, Math.min(x, 0));
      this.$.scrim.style.opacity = 1 + x / drawerWidth;
    } else {
      x = Math.max(0, Math.min(x, drawerWidth));
      this.$.scrim.style.opacity = 1 - x / drawerWidth;
    }

    this.translate3d(x + 'px', '0', '0', this.$.contentContainer);
  },
  _resetDrawerTranslate: function _resetDrawerTranslate() {
    this.$.scrim.style.opacity = '';
    this.transform('', this.$.contentContainer);
  },
  _resetDrawerState: function _resetDrawerState() {
    var oldState = this._drawerState; // If the drawer was flinging, we need to reset the style attributes.

    if (oldState === this._DRAWER_STATE.FLINGING) {
      this._styleTransitionDuration(this.transitionDuration);

      this._styleTransitionTimingFunction('');

      this.style.visibility = '';
    }

    this._savedWidth = null;

    if (this.opened) {
      this._drawerState = this.persistent ? this._DRAWER_STATE.OPENED_PERSISTENT : this._DRAWER_STATE.OPENED;
    } else {
      this._drawerState = this._DRAWER_STATE.CLOSED;
    }

    if (oldState !== this._drawerState) {
      if (this._drawerState === this._DRAWER_STATE.OPENED) {
        this._setKeyboardFocusTrap();

        document.addEventListener('keydown', this._boundEscKeydownHandler);
        document.body.style.overflow = 'hidden';
      } else {
        document.removeEventListener('keydown', this._boundEscKeydownHandler);
        document.body.style.overflow = '';
      } // Don't fire the event on initial load.


      if (oldState !== this._DRAWER_STATE.INIT) {
        this.fire('app-drawer-transitioned');
      }
    }
  },

  /**
   * Resets the layout.
   *
   * @method resetLayout
   */
  resetLayout: function resetLayout() {
    this.fire('app-reset-layout');
  },
  _setKeyboardFocusTrap: function _setKeyboardFocusTrap() {
    if (this.noFocusTrap) {
      return;
    } // NOTE: Unless we use /deep/ (which we shouldn't since it's deprecated),
    // this will not select focusable elements inside shadow roots.


    var focusableElementsSelector = ['a[href]:not([tabindex="-1"])', 'area[href]:not([tabindex="-1"])', 'input:not([disabled]):not([tabindex="-1"])', 'select:not([disabled]):not([tabindex="-1"])', 'textarea:not([disabled]):not([tabindex="-1"])', 'button:not([disabled]):not([tabindex="-1"])', 'iframe:not([tabindex="-1"])', '[tabindex]:not([tabindex="-1"])', '[contentEditable=true]:not([tabindex="-1"])'].join(',');
    var focusableElements = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(this).querySelectorAll(focusableElementsSelector);

    if (focusableElements.length > 0) {
      this._firstTabStop = focusableElements[0];
      this._lastTabStop = focusableElements[focusableElements.length - 1];
    } else {
      // Reset saved tab stops when there are no focusable elements in the
      // drawer.
      this._firstTabStop = null;
      this._lastTabStop = null;
    } // Focus on app-drawer if it has non-zero tabindex. Otherwise, focus the
    // first focusable element in the drawer, if it exists. Use the tabindex
    // attribute since the this.tabIndex property in IE/Edge returns 0 (instead
    // of -1) when the attribute is not set.


    var tabindex = this.getAttribute('tabindex');

    if (tabindex && parseInt(tabindex, 10) > -1) {
      this.focus();
    } else if (this._firstTabStop) {
      this._firstTabStop.focus();
    }
  },
  _tabKeydownHandler: function _tabKeydownHandler(event) {
    if (this.noFocusTrap) {
      return;
    }

    var TAB_KEYCODE = 9;

    if (this._drawerState === this._DRAWER_STATE.OPENED && event.keyCode === TAB_KEYCODE) {
      if (event.shiftKey) {
        if (this._firstTabStop && Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).localTarget === this._firstTabStop) {
          event.preventDefault();

          this._lastTabStop.focus();
        }
      } else {
        if (this._lastTabStop && Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_3__["dom"])(event).localTarget === this._lastTabStop) {
          event.preventDefault();

          this._firstTabStop.focus();
        }
      }
    }
  },
  _openedPersistentChanged: function _openedPersistentChanged(opened, persistent) {
    this.toggleClass('visible', opened && !persistent, this.$.scrim); // Use a debounce timer instead of transitionend since transitionend won't
    // fire when app-drawer is display: none.

    this.debounce('_resetDrawerState', this._resetDrawerState, this.transitionDuration);
  },
  _MIN_FLING_THRESHOLD: 0.2,
  _MIN_TRANSITION_VELOCITY: 1.2,
  _FLING_TIMING_FUNCTION: 'cubic-bezier(0.667, 1, 0.667, 1)',
  _FLING_INITIAL_SLOPE: 1.5,
  _DRAWER_STATE: {
    INIT: 0,
    OPENED: 1,
    OPENED_PERSISTENT: 2,
    CLOSED: 3,
    TRACKING: 4,
    FLINGING: 5
    /**
     * Fired when the layout of app-drawer has changed.
     *
     * @event app-reset-layout
     */

    /**
     * Fired when app-drawer has finished transitioning.
     *
     * @event app-drawer-transitioned
     */

  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9hcHAtbGF5b3V0L2FwcC1kcmF3ZXIvYXBwLWRyYXdlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5cbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcbmltcG9ydCB7YWZ0ZXJOZXh0UmVuZGVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9yZW5kZXItc3RhdHVzLmpzJztcblxuLyoqXG5hcHAtZHJhd2VyIGlzIGEgbmF2aWdhdGlvbiBkcmF3ZXIgdGhhdCBjYW4gc2xpZGUgaW4gZnJvbSB0aGUgbGVmdCBvciByaWdodC5cblxuRXhhbXBsZTpcblxuQWxpZ24gdGhlIGRyYXdlciBhdCB0aGUgc3RhcnQsIHdoaWNoIGlzIGxlZnQgaW4gTFRSIGxheW91dHMgKGRlZmF1bHQpOlxuXG5gYGBodG1sXG48YXBwLWRyYXdlciBvcGVuZWQ+PC9hcHAtZHJhd2VyPlxuYGBgXG5cbkFsaWduIHRoZSBkcmF3ZXIgYXQgdGhlIGVuZDpcblxuYGBgaHRtbFxuPGFwcC1kcmF3ZXIgYWxpZ249XCJlbmRcIiBvcGVuZWQ+PC9hcHAtZHJhd2VyPlxuYGBgXG5cblRvIG1ha2UgdGhlIGNvbnRlbnRzIG9mIHRoZSBkcmF3ZXIgc2Nyb2xsYWJsZSwgY3JlYXRlIGEgd3JhcHBlciBmb3IgdGhlIHNjcm9sbFxuY29udGVudCwgYW5kIGFwcGx5IGhlaWdodCBhbmQgb3ZlcmZsb3cgc3R5bGVzIHRvIGl0LlxuXG5gYGBodG1sXG48YXBwLWRyYXdlcj5cbiAgPGRpdiBzdHlsZT1cImhlaWdodDogMTAwJTsgb3ZlcmZsb3c6IGF1dG87XCI+PC9kaXY+XG48L2FwcC1kcmF3ZXI+XG5gYGBcblxuIyMjIFN0eWxpbmdcblxuQ3VzdG9tIHByb3BlcnR5ICAgICAgICAgICAgICAgICAgfCBEZXNjcmlwdGlvbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS0tLS0tLS0tLS0tXG5gLS1hcHAtZHJhd2VyLXdpZHRoYCAgICAgICAgICAgICB8IFdpZHRoIG9mIHRoZSBkcmF3ZXIgICAgICAgICAgICAgICAgICAgIHwgMjU2cHhcbmAtLWFwcC1kcmF3ZXItY29udGVudC1jb250YWluZXJgIHwgTWl4aW4gZm9yIHRoZSBkcmF3ZXIgY29udGVudCBjb250YWluZXIgfCB7fVxuYC0tYXBwLWRyYXdlci1zY3JpbS1iYWNrZ3JvdW5kYCAgfCBCYWNrZ3JvdW5kIGZvciB0aGUgc2NyaW0gICAgICAgICAgICAgICB8IHJnYmEoMCwgMCwgMCwgMC41KVxuXG4qKk5PVEU6KiogSWYgeW91IHVzZSBgPGFwcC1kcmF3ZXI+YCB3aXRoIGA8YXBwLWRyYXdlci1sYXlvdXQ+YCBhbmQgc3BlY2lmeSBhXG52YWx1ZSBmb3JcbmAtLWFwcC1kcmF3ZXItd2lkdGhgLCB0aGF0IHZhbHVlIG11c3QgYmUgYWNjZXNzaWJsZSBieSBib3RoIGVsZW1lbnRzLiBUaGlzIGNhblxuYmUgZG9uZSBieSBkZWZpbmluZyB0aGUgdmFsdWUgb24gdGhlIGA6aG9zdGAgdGhhdCBjb250YWlucyBgPGFwcC1kcmF3ZXItbGF5b3V0PmBcbihvciBgaHRtbGAgaWYgb3V0c2lkZSBhIHNoYWRvdyByb290KTpcblxuYGBgY3NzXG46aG9zdCB7XG4gIC0tYXBwLWRyYXdlci13aWR0aDogMzAwcHg7XG59XG5gYGBcblxuQGdyb3VwIEFwcCBFbGVtZW50c1xuQGVsZW1lbnQgYXBwLWRyYXdlclxuQGRlbW8gYXBwLWRyYXdlci9kZW1vL2xlZnQtZHJhd2VyLmh0bWwgU2ltcGxlIExlZnQgRHJhd2VyXG5AZGVtbyBhcHAtZHJhd2VyL2RlbW8vcmlnaHQtZHJhd2VyLmh0bWwgUmlnaHQgRHJhd2VyIHdpdGggSWNvbnNcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICB0b3A6IC0xMjBweDtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGJvdHRvbTogLTEyMHB4O1xuICAgICAgICBsZWZ0OiAwO1xuXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcblxuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB2aXNpYmlsaXR5O1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbb3BlbmVkXSkge1xuICAgICAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcGVyc2lzdGVudF0pIHtcbiAgICAgICAgd2lkdGg6IHZhcigtLWFwcC1kcmF3ZXItd2lkdGgsIDI1NnB4KTtcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW3BlcnNpc3RlbnRdW3Bvc2l0aW9uPWxlZnRdKSB7XG4gICAgICAgIHJpZ2h0OiBhdXRvO1xuICAgICAgfVxuXG4gICAgICA6aG9zdChbcGVyc2lzdGVudF1bcG9zaXRpb249cmlnaHRdKSB7XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgbGVmdDogMDtcblxuICAgICAgICB3aWR0aDogdmFyKC0tYXBwLWRyYXdlci13aWR0aCwgMjU2cHgpO1xuICAgICAgICBwYWRkaW5nOiAxMjBweCAwO1xuXG4gICAgICAgIHRyYW5zaXRpb24tcHJvcGVydHk6IC13ZWJraXQtdHJhbnNmb3JtO1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoLTEwMCUsIDAsIDApO1xuXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkY7XG5cbiAgICAgICAgQGFwcGx5IC0tYXBwLWRyYXdlci1jb250ZW50LWNvbnRhaW5lcjtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXJbcGVyc2lzdGVudF0ge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXJbcG9zaXRpb249cmlnaHRdIHtcbiAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgIGxlZnQ6IGF1dG87XG5cbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDEwMCUsIDAsIDApO1xuICAgICAgfVxuXG4gICAgICAjY29udGVudENvbnRhaW5lcltzd2lwZS1vcGVuXTo6YWZ0ZXIge1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICBsZWZ0OiAxMDAlO1xuXG4gICAgICAgIHZpc2liaWxpdHk6IHZpc2libGU7XG5cbiAgICAgICAgd2lkdGg6IDIwcHg7XG5cbiAgICAgICAgY29udGVudDogJyc7XG4gICAgICB9XG5cbiAgICAgICNjb250ZW50Q29udGFpbmVyW3N3aXBlLW9wZW5dW3Bvc2l0aW9uPXJpZ2h0XTo6YWZ0ZXIge1xuICAgICAgICByaWdodDogMTAwJTtcbiAgICAgICAgbGVmdDogYXV0bztcbiAgICAgIH1cblxuICAgICAgI2NvbnRlbnRDb250YWluZXJbb3BlbmVkXSB7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgICAgIH1cblxuICAgICAgI3NjcmltIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG5cbiAgICAgICAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogb3BhY2l0eTtcbiAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHRyYW5zbGF0ZVooMCk7XG4gICAgICAgIHRyYW5zZm9ybTogIHRyYW5zbGF0ZVooMCk7XG5cbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tYXBwLWRyYXdlci1zY3JpbS1iYWNrZ3JvdW5kLCByZ2JhKDAsIDAsIDAsIDAuNSkpO1xuICAgICAgfVxuXG4gICAgICAjc2NyaW0udmlzaWJsZSB7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KFtuby10cmFuc2l0aW9uXSkgI2NvbnRlbnRDb250YWluZXIge1xuICAgICAgICB0cmFuc2l0aW9uLXByb3BlcnR5OiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8ZGl2IGlkPVwic2NyaW1cIiBvbi1jbGljaz1cImNsb3NlXCI+PC9kaXY+XG5cbiAgICA8IS0tIEhBQ0soa2VhbnVsZWUpOiBCaW5kIGF0dHJpYnV0ZXMgaGVyZSAoaW4gYWRkaXRpb24gdG8gOmhvc3QpIGZvciBzdHlsaW5nIHRvIHdvcmthcm91bmQgU2FmYXJpXG4gICAgYnVnLiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTcwNzYyIC0tPlxuICAgIDxkaXYgaWQ9XCJjb250ZW50Q29udGFpbmVyXCIgb3BlbmVkXFwkPVwiW1tvcGVuZWRdXVwiIHBlcnNpc3RlbnRcXCQ9XCJbW3BlcnNpc3RlbnRdXVwiIHBvc2l0aW9uXFwkPVwiW1twb3NpdGlvbl1dXCIgc3dpcGUtb3BlblxcJD1cIltbc3dpcGVPcGVuXV1cIj5cbiAgICAgIDxzbG90Pjwvc2xvdD5cbiAgICA8L2Rpdj5cbmAsXG5cbiAgaXM6ICdhcHAtZHJhd2VyJyxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIG9wZW5lZCBzdGF0ZSBvZiB0aGUgZHJhd2VyLlxuICAgICAqL1xuICAgIG9wZW5lZDpcbiAgICAgICAge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgbm90aWZ5OiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVGhlIGRyYXdlciBkb2VzIG5vdCBoYXZlIGEgc2NyaW0gYW5kIGNhbm5vdCBiZSBzd2lwZWQgY2xvc2UuXG4gICAgICovXG4gICAgcGVyc2lzdGVudDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZSwgcmVmbGVjdFRvQXR0cmlidXRlOiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSB0cmFuc2l0aW9uIGR1cmF0aW9uIG9mIHRoZSBkcmF3ZXIgaW4gbWlsbGlzZWNvbmRzLlxuICAgICAqL1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbjoge3R5cGU6IE51bWJlciwgdmFsdWU6IDIwMH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYWxpZ25tZW50IG9mIHRoZSBkcmF3ZXIgb24gdGhlIHNjcmVlbiAoJ2xlZnQnLCAncmlnaHQnLCAnc3RhcnQnIG9yXG4gICAgICogJ2VuZCcpLiAnc3RhcnQnIGNvbXB1dGVzIHRvIGxlZnQgYW5kICdlbmQnIHRvIHJpZ2h0IGluIExUUiBsYXlvdXQgYW5kXG4gICAgICogdmljZSB2ZXJzYSBpbiBSVEwgbGF5b3V0LlxuICAgICAqL1xuICAgIGFsaWduOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ2xlZnQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb21wdXRlZCwgcmVhZC1vbmx5IHBvc2l0aW9uIG9mIHRoZSBkcmF3ZXIgb24gdGhlIHNjcmVlbiAoJ2xlZnQnIG9yXG4gICAgICogJ3JpZ2h0JykuXG4gICAgICovXG4gICAgcG9zaXRpb246IHt0eXBlOiBTdHJpbmcsIHJlYWRPbmx5OiB0cnVlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlIGFuIGFyZWEgYXQgdGhlIGVkZ2Ugb2YgdGhlIHNjcmVlbiB0byBzd2lwZSBvcGVuIHRoZSBkcmF3ZXIuXG4gICAgICovXG4gICAgc3dpcGVPcGVuOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlLCByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWV9LFxuXG4gICAgLyoqXG4gICAgICogVHJhcCBrZXlib2FyZCBmb2N1cyB3aGVuIHRoZSBkcmF3ZXIgaXMgb3BlbmVkIGFuZCBub3QgcGVyc2lzdGVudC5cbiAgICAgKi9cbiAgICBub0ZvY3VzVHJhcDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBEaXNhYmxlcyBzd2lwaW5nIG9uIHRoZSBkcmF3ZXIuXG4gICAgICovXG4gICAgZGlzYWJsZVN3aXBlOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfVxuICB9LFxuXG4gIG9ic2VydmVyczogW1xuICAgICdyZXNldExheW91dChwb3NpdGlvbiwgaXNBdHRhY2hlZCknLFxuICAgICdfcmVzZXRQb3NpdGlvbihhbGlnbiwgaXNBdHRhY2hlZCknLFxuICAgICdfc3R5bGVUcmFuc2l0aW9uRHVyYXRpb24odHJhbnNpdGlvbkR1cmF0aW9uKScsXG4gICAgJ19vcGVuZWRQZXJzaXN0ZW50Q2hhbmdlZChvcGVuZWQsIHBlcnNpc3RlbnQpJ1xuICBdLFxuXG4gIF90cmFuc2xhdGVPZmZzZXQ6IDAsXG4gIF90cmFja0RldGFpbHM6IG51bGwsXG4gIF9kcmF3ZXJTdGF0ZTogMCxcbiAgX2JvdW5kRXNjS2V5ZG93bkhhbmRsZXI6IG51bGwsXG4gIF9maXJzdFRhYlN0b3A6IG51bGwsXG4gIF9sYXN0VGFiU3RvcDogbnVsbCxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgYWZ0ZXJOZXh0UmVuZGVyKHRoaXMsIGZ1bmN0aW9uKCkge1xuICAgICAgdGhpcy5fYm91bmRFc2NLZXlkb3duSGFuZGxlciA9IHRoaXMuX2VzY0tleWRvd25IYW5kbGVyLmJpbmQodGhpcyk7XG4gICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl90YWJLZXlkb3duSGFuZGxlci5iaW5kKHRoaXMpKTtcblxuICAgICAgLy8gT25seSBsaXN0ZW4gZm9yIGhvcml6b250YWwgdHJhY2sgc28geW91IGNhbiB2ZXJ0aWNhbGx5IHNjcm9sbFxuICAgICAgLy8gaW5zaWRlIHRoZSBkcmF3ZXIuXG4gICAgICB0aGlzLmxpc3Rlbih0aGlzLCAndHJhY2snLCAnX3RyYWNrJyk7XG4gICAgICB0aGlzLnNldFNjcm9sbERpcmVjdGlvbigneScpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5maXJlKCdhcHAtcmVzZXQtbGF5b3V0Jyk7XG4gIH0sXG5cbiAgZGV0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLl9ib3VuZEVzY0tleWRvd25IYW5kbGVyKTtcbiAgfSxcblxuICAvKipcbiAgICogT3BlbnMgdGhlIGRyYXdlci5cbiAgICovXG4gIG9wZW46IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMub3BlbmVkID0gdHJ1ZTtcbiAgfSxcblxuICAvKipcbiAgICogQ2xvc2VzIHRoZSBkcmF3ZXIuXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5vcGVuZWQgPSBmYWxzZTtcbiAgfSxcblxuICAvKipcbiAgICogVG9nZ2xlcyB0aGUgZHJhd2VyIG9wZW4gYW5kIGNsb3NlLlxuICAgKi9cbiAgdG9nZ2xlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLm9wZW5lZCA9ICF0aGlzLm9wZW5lZDtcbiAgfSxcblxuICAvKipcbiAgICogR2V0cyB0aGUgd2lkdGggb2YgdGhlIGRyYXdlci5cbiAgICpcbiAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgd2lkdGggb2YgdGhlIGRyYXdlciBpbiBwaXhlbHMuXG4gICAqL1xuICBnZXRXaWR0aDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuX3NhdmVkV2lkdGggfHwgdGhpcy4kLmNvbnRlbnRDb250YWluZXIub2Zmc2V0V2lkdGg7XG4gIH0sXG5cbiAgX2lzUlRMOiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gd2luZG93LmdldENvbXB1dGVkU3R5bGUodGhpcykuZGlyZWN0aW9uID09PSAncnRsJztcbiAgfSxcblxuICBfcmVzZXRQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG4gICAgc3dpdGNoICh0aGlzLmFsaWduKSB7XG4gICAgICBjYXNlICdzdGFydCc6XG4gICAgICAgIHRoaXMuX3NldFBvc2l0aW9uKHRoaXMuX2lzUlRMKCkgPyAncmlnaHQnIDogJ2xlZnQnKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgdGhpcy5fc2V0UG9zaXRpb24odGhpcy5faXNSVEwoKSA/ICdsZWZ0JyA6ICdyaWdodCcpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuX3NldFBvc2l0aW9uKHRoaXMuYWxpZ24pO1xuICB9LFxuXG4gIF9lc2NLZXlkb3duSGFuZGxlcjogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgRVNDX0tFWUNPREUgPSAyNztcbiAgICBpZiAoZXZlbnQua2V5Q29kZSA9PT0gRVNDX0tFWUNPREUpIHtcbiAgICAgIC8vIFByZXZlbnQgYW55IHNpZGUgZWZmZWN0cyBpZiBhcHAtZHJhd2VyIGNsb3Nlcy5cbiAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLmNsb3NlKCk7XG4gICAgfVxuICB9LFxuXG4gIF90cmFjazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5wZXJzaXN0ZW50IHx8IHRoaXMuZGlzYWJsZVN3aXBlKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gRGlzYWJsZSB1c2VyIHNlbGVjdGlvbiBvbiBkZXNrdG9wLlxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICBzd2l0Y2ggKGV2ZW50LmRldGFpbC5zdGF0ZSkge1xuICAgICAgY2FzZSAnc3RhcnQnOlxuICAgICAgICB0aGlzLl90cmFja1N0YXJ0KGV2ZW50KTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICd0cmFjayc6XG4gICAgICAgIHRoaXMuX3RyYWNrTW92ZShldmVudCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgdGhpcy5fdHJhY2tFbmQoZXZlbnQpO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH0sXG5cbiAgX3RyYWNrU3RhcnQ6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdGhpcy5fZHJhd2VyU3RhdGUgPSB0aGlzLl9EUkFXRVJfU1RBVEUuVFJBQ0tJTkc7XG5cbiAgICB2YXIgcmVjdCA9IHRoaXMuJC5jb250ZW50Q29udGFpbmVyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIHRoaXMuX3NhdmVkV2lkdGggPSByZWN0LndpZHRoO1xuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHRoaXMuX3RyYW5zbGF0ZU9mZnNldCA9IHJlY3QubGVmdDtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fdHJhbnNsYXRlT2Zmc2V0ID0gcmVjdC5yaWdodCAtIHdpbmRvdy5pbm5lcldpZHRoO1xuICAgIH1cblxuICAgIHRoaXMuX3RyYWNrRGV0YWlscyA9IFtdO1xuXG4gICAgLy8gRGlzYWJsZSB0cmFuc2l0aW9ucyBzaW5jZSBzdHlsZSBhdHRyaWJ1dGVzIHdpbGwgcmVmbGVjdCB1c2VyIHRyYWNrXG4gICAgLy8gZXZlbnRzLlxuICAgIHRoaXMuX3N0eWxlVHJhbnNpdGlvbkR1cmF0aW9uKDApO1xuICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcbiAgfSxcblxuICBfdHJhY2tNb3ZlOiBmdW5jdGlvbihldmVudCkge1xuICAgIHRoaXMuX3RyYW5zbGF0ZURyYXdlcihldmVudC5kZXRhaWwuZHggKyB0aGlzLl90cmFuc2xhdGVPZmZzZXQpO1xuXG4gICAgLy8gVXNlIERhdGUubm93KCkgc2luY2UgZXZlbnQudGltZVN0YW1wIGlzIGluY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnNcbiAgICAvLyAoZS5nLiBtb3N0IGJyb3dzZXJzIHVzZSBtaWxsaXNlY29uZHMgYnV0IEZGIDQ0IHVzZXMgbWljcm9zZWNvbmRzKS5cbiAgICB0aGlzLl90cmFja0RldGFpbHMucHVzaCh7ZHg6IGV2ZW50LmRldGFpbC5keCwgdGltZVN0YW1wOiBEYXRlLm5vdygpfSk7XG4gIH0sXG5cbiAgX3RyYWNrRW5kOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciB4ID0gZXZlbnQuZGV0YWlsLmR4ICsgdGhpcy5fdHJhbnNsYXRlT2Zmc2V0O1xuICAgIHZhciBkcmF3ZXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICB2YXIgaXNQb3NpdGlvbkxlZnQgPSB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCc7XG4gICAgdmFyIGlzSW5FbmRTdGF0ZSA9IGlzUG9zaXRpb25MZWZ0ID8gKHggPj0gMCB8fCB4IDw9IC1kcmF3ZXJXaWR0aCkgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICh4IDw9IDAgfHwgeCA+PSBkcmF3ZXJXaWR0aCk7XG5cbiAgICBpZiAoIWlzSW5FbmRTdGF0ZSkge1xuICAgICAgLy8gTm8gbG9uZ2VyIG5lZWQgdGhlIHRyYWNrIGV2ZW50cyBhZnRlciB0aGlzIG1ldGhvZCByZXR1cm5zIC0gYWxsb3cgdGhlbVxuICAgICAgLy8gdG8gYmUgR0MnZC5cbiAgICAgIHZhciB0cmFja0RldGFpbHMgPSB0aGlzLl90cmFja0RldGFpbHM7XG4gICAgICB0aGlzLl90cmFja0RldGFpbHMgPSBudWxsO1xuXG4gICAgICB0aGlzLl9mbGluZ0RyYXdlcihldmVudCwgdHJhY2tEZXRhaWxzKTtcbiAgICAgIGlmICh0aGlzLl9kcmF3ZXJTdGF0ZSA9PT0gdGhpcy5fRFJBV0VSX1NUQVRFLkZMSU5HSU5HKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBJZiB0aGUgZHJhd2VyIGlzIG5vdCBmbGluZ2luZywgdG9nZ2xlIHRoZSBvcGVuZWQgc3RhdGUgYmFzZWQgb24gdGhlXG4gICAgLy8gcG9zaXRpb24gb2YgdGhlIGRyYXdlci5cbiAgICB2YXIgaGFsZldpZHRoID0gZHJhd2VyV2lkdGggLyAyO1xuICAgIGlmIChldmVudC5kZXRhaWwuZHggPCAtaGFsZldpZHRoKSB7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCc7XG4gICAgfSBlbHNlIGlmIChldmVudC5kZXRhaWwuZHggPiBoYWxmV2lkdGgpIHtcbiAgICAgIHRoaXMub3BlbmVkID0gdGhpcy5wb3NpdGlvbiA9PT0gJ2xlZnQnO1xuICAgIH1cblxuICAgIGlmIChpc0luRW5kU3RhdGUpIHtcbiAgICAgIHRoaXMuZGVib3VuY2UoJ19yZXNldERyYXdlclN0YXRlJywgdGhpcy5fcmVzZXREcmF3ZXJTdGF0ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuZGVib3VuY2UoXG4gICAgICAgICAgJ19yZXNldERyYXdlclN0YXRlJywgdGhpcy5fcmVzZXREcmF3ZXJTdGF0ZSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHRoaXMuX3N0eWxlVHJhbnNpdGlvbkR1cmF0aW9uKHRoaXMudHJhbnNpdGlvbkR1cmF0aW9uKTtcbiAgICB0aGlzLl9yZXNldERyYXdlclRyYW5zbGF0ZSgpO1xuICAgIHRoaXMuc3R5bGUudmlzaWJpbGl0eSA9ICcnO1xuICB9LFxuXG4gIF9jYWxjdWxhdGVWZWxvY2l0eTogZnVuY3Rpb24oZXZlbnQsIHRyYWNrRGV0YWlscykge1xuICAgIC8vIEZpbmQgdGhlIG9sZGVzdCB0cmFjayBldmVudCB0aGF0IGlzIHdpdGhpbiAxMDBtcyB1c2luZyBiaW5hcnkgc2VhcmNoLlxuICAgIHZhciBub3cgPSBEYXRlLm5vdygpO1xuICAgIHZhciB0aW1lTG93ZXJCb3VuZCA9IG5vdyAtIDEwMDtcbiAgICB2YXIgdHJhY2tEZXRhaWw7XG4gICAgdmFyIG1pbiA9IDA7XG4gICAgdmFyIG1heCA9IHRyYWNrRGV0YWlscy5sZW5ndGggLSAxO1xuXG4gICAgd2hpbGUgKG1pbiA8PSBtYXgpIHtcbiAgICAgIC8vIEZsb29yIG9mIGF2ZXJhZ2Ugb2YgbWluIGFuZCBtYXguXG4gICAgICB2YXIgbWlkID0gKG1pbiArIG1heCkgPj4gMTtcbiAgICAgIHZhciBkID0gdHJhY2tEZXRhaWxzW21pZF07XG4gICAgICBpZiAoZC50aW1lU3RhbXAgPj0gdGltZUxvd2VyQm91bmQpIHtcbiAgICAgICAgdHJhY2tEZXRhaWwgPSBkO1xuICAgICAgICBtYXggPSBtaWQgLSAxO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgbWluID0gbWlkICsgMTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJhY2tEZXRhaWwpIHtcbiAgICAgIHZhciBkeCA9IGV2ZW50LmRldGFpbC5keCAtIHRyYWNrRGV0YWlsLmR4O1xuICAgICAgdmFyIGR0ID0gKG5vdyAtIHRyYWNrRGV0YWlsLnRpbWVTdGFtcCkgfHwgMTtcbiAgICAgIHJldHVybiBkeCAvIGR0O1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSxcblxuICBfZmxpbmdEcmF3ZXI6IGZ1bmN0aW9uKGV2ZW50LCB0cmFja0RldGFpbHMpIHtcbiAgICB2YXIgdmVsb2NpdHkgPSB0aGlzLl9jYWxjdWxhdGVWZWxvY2l0eShldmVudCwgdHJhY2tEZXRhaWxzKTtcblxuICAgIC8vIERvIG5vdCBmbGluZyBpZiB2ZWxvY2l0eSBpcyBub3QgYWJvdmUgYSB0aHJlc2hvbGQuXG4gICAgaWYgKE1hdGguYWJzKHZlbG9jaXR5KSA8IHRoaXMuX01JTl9GTElOR19USFJFU0hPTEQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLl9kcmF3ZXJTdGF0ZSA9IHRoaXMuX0RSQVdFUl9TVEFURS5GTElOR0lORztcblxuICAgIHZhciB4ID0gZXZlbnQuZGV0YWlsLmR4ICsgdGhpcy5fdHJhbnNsYXRlT2Zmc2V0O1xuICAgIHZhciBkcmF3ZXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcbiAgICB2YXIgaXNQb3NpdGlvbkxlZnQgPSB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCc7XG4gICAgdmFyIGlzVmVsb2NpdHlQb3NpdGl2ZSA9IHZlbG9jaXR5ID4gMDtcbiAgICB2YXIgaXNDbG9zaW5nTGVmdCA9ICFpc1ZlbG9jaXR5UG9zaXRpdmUgJiYgaXNQb3NpdGlvbkxlZnQ7XG4gICAgdmFyIGlzQ2xvc2luZ1JpZ2h0ID0gaXNWZWxvY2l0eVBvc2l0aXZlICYmICFpc1Bvc2l0aW9uTGVmdDtcbiAgICB2YXIgZHg7XG4gICAgaWYgKGlzQ2xvc2luZ0xlZnQpIHtcbiAgICAgIGR4ID0gLSh4ICsgZHJhd2VyV2lkdGgpO1xuICAgIH0gZWxzZSBpZiAoaXNDbG9zaW5nUmlnaHQpIHtcbiAgICAgIGR4ID0gKGRyYXdlcldpZHRoIC0geCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGR4ID0gLXg7XG4gICAgfVxuXG4gICAgLy8gRW5mb3JjZSBhIG1pbmltdW0gdHJhbnNpdGlvbiB2ZWxvY2l0eSB0byBtYWtlIHRoZSBkcmF3ZXIgZmVlbCBzbmFwcHkuXG4gICAgaWYgKGlzVmVsb2NpdHlQb3NpdGl2ZSkge1xuICAgICAgdmVsb2NpdHkgPSBNYXRoLm1heCh2ZWxvY2l0eSwgdGhpcy5fTUlOX1RSQU5TSVRJT05fVkVMT0NJVFkpO1xuICAgICAgdGhpcy5vcGVuZWQgPSB0aGlzLnBvc2l0aW9uID09PSAnbGVmdCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZlbG9jaXR5ID0gTWF0aC5taW4odmVsb2NpdHksIC10aGlzLl9NSU5fVFJBTlNJVElPTl9WRUxPQ0lUWSk7XG4gICAgICB0aGlzLm9wZW5lZCA9IHRoaXMucG9zaXRpb24gPT09ICdyaWdodCc7XG4gICAgfVxuXG4gICAgLy8gQ2FsY3VsYXRlIHRoZSBhbW91bnQgb2YgdGltZSBuZWVkZWQgdG8gZmluaXNoIHRoZSB0cmFuc2l0aW9uIGJhc2VkIG9uIHRoZVxuICAgIC8vIGluaXRpYWwgc2xvcGUgb2YgdGhlIHRpbWluZyBmdW5jdGlvbi5cbiAgICB2YXIgdCA9IHRoaXMuX0ZMSU5HX0lOSVRJQUxfU0xPUEUgKiBkeCAvIHZlbG9jaXR5O1xuICAgIHRoaXMuX3N0eWxlVHJhbnNpdGlvbkR1cmF0aW9uKHQpO1xuICAgIHRoaXMuX3N0eWxlVHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uKHRoaXMuX0ZMSU5HX1RJTUlOR19GVU5DVElPTik7XG5cbiAgICB0aGlzLl9yZXNldERyYXdlclRyYW5zbGF0ZSgpO1xuICAgIHRoaXMuZGVib3VuY2UoJ19yZXNldERyYXdlclN0YXRlJywgdGhpcy5fcmVzZXREcmF3ZXJTdGF0ZSwgdCk7XG4gIH0sXG5cbiAgX3N0eWxlVHJhbnNpdGlvbkR1cmF0aW9uOiBmdW5jdGlvbihkdXJhdGlvbikge1xuICAgIHRoaXMuc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICAgIHRoaXMuJC5jb250ZW50Q29udGFpbmVyLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IGR1cmF0aW9uICsgJ21zJztcbiAgICB0aGlzLiQuc2NyaW0uc3R5bGUudHJhbnNpdGlvbkR1cmF0aW9uID0gZHVyYXRpb24gKyAnbXMnO1xuICB9LFxuXG4gIF9zdHlsZVRyYW5zaXRpb25UaW1pbmdGdW5jdGlvbjogZnVuY3Rpb24odGltaW5nRnVuY3Rpb24pIHtcbiAgICB0aGlzLiQuY29udGVudENvbnRhaW5lci5zdHlsZS50cmFuc2l0aW9uVGltaW5nRnVuY3Rpb24gPSB0aW1pbmdGdW5jdGlvbjtcbiAgICB0aGlzLiQuc2NyaW0uc3R5bGUudHJhbnNpdGlvblRpbWluZ0Z1bmN0aW9uID0gdGltaW5nRnVuY3Rpb247XG4gIH0sXG5cbiAgX3RyYW5zbGF0ZURyYXdlcjogZnVuY3Rpb24oeCkge1xuICAgIHZhciBkcmF3ZXJXaWR0aCA9IHRoaXMuZ2V0V2lkdGgoKTtcblxuICAgIGlmICh0aGlzLnBvc2l0aW9uID09PSAnbGVmdCcpIHtcbiAgICAgIHggPSBNYXRoLm1heCgtZHJhd2VyV2lkdGgsIE1hdGgubWluKHgsIDApKTtcbiAgICAgIHRoaXMuJC5zY3JpbS5zdHlsZS5vcGFjaXR5ID0gMSArIHggLyBkcmF3ZXJXaWR0aDtcbiAgICB9IGVsc2Uge1xuICAgICAgeCA9IE1hdGgubWF4KDAsIE1hdGgubWluKHgsIGRyYXdlcldpZHRoKSk7XG4gICAgICB0aGlzLiQuc2NyaW0uc3R5bGUub3BhY2l0eSA9IDEgLSB4IC8gZHJhd2VyV2lkdGg7XG4gICAgfVxuXG4gICAgdGhpcy50cmFuc2xhdGUzZCh4ICsgJ3B4JywgJzAnLCAnMCcsIHRoaXMuJC5jb250ZW50Q29udGFpbmVyKTtcbiAgfSxcblxuICBfcmVzZXREcmF3ZXJUcmFuc2xhdGU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5zY3JpbS5zdHlsZS5vcGFjaXR5ID0gJyc7XG4gICAgdGhpcy50cmFuc2Zvcm0oJycsIHRoaXMuJC5jb250ZW50Q29udGFpbmVyKTtcbiAgfSxcblxuICBfcmVzZXREcmF3ZXJTdGF0ZTogZnVuY3Rpb24oKSB7XG4gICAgdmFyIG9sZFN0YXRlID0gdGhpcy5fZHJhd2VyU3RhdGU7XG5cbiAgICAvLyBJZiB0aGUgZHJhd2VyIHdhcyBmbGluZ2luZywgd2UgbmVlZCB0byByZXNldCB0aGUgc3R5bGUgYXR0cmlidXRlcy5cbiAgICBpZiAob2xkU3RhdGUgPT09IHRoaXMuX0RSQVdFUl9TVEFURS5GTElOR0lORykge1xuICAgICAgdGhpcy5fc3R5bGVUcmFuc2l0aW9uRHVyYXRpb24odGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICAgICAgdGhpcy5fc3R5bGVUcmFuc2l0aW9uVGltaW5nRnVuY3Rpb24oJycpO1xuICAgICAgdGhpcy5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XG4gICAgfVxuXG4gICAgdGhpcy5fc2F2ZWRXaWR0aCA9IG51bGw7XG5cbiAgICBpZiAodGhpcy5vcGVuZWQpIHtcbiAgICAgIHRoaXMuX2RyYXdlclN0YXRlID0gdGhpcy5wZXJzaXN0ZW50ID9cbiAgICAgICAgICB0aGlzLl9EUkFXRVJfU1RBVEUuT1BFTkVEX1BFUlNJU1RFTlQgOlxuICAgICAgICAgIHRoaXMuX0RSQVdFUl9TVEFURS5PUEVORUQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2RyYXdlclN0YXRlID0gdGhpcy5fRFJBV0VSX1NUQVRFLkNMT1NFRDtcbiAgICB9XG5cbiAgICBpZiAob2xkU3RhdGUgIT09IHRoaXMuX2RyYXdlclN0YXRlKSB7XG4gICAgICBpZiAodGhpcy5fZHJhd2VyU3RhdGUgPT09IHRoaXMuX0RSQVdFUl9TVEFURS5PUEVORUQpIHtcbiAgICAgICAgdGhpcy5fc2V0S2V5Ym9hcmRGb2N1c1RyYXAoKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHRoaXMuX2JvdW5kRXNjS2V5ZG93bkhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5fYm91bmRFc2NLZXlkb3duSGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUub3ZlcmZsb3cgPSAnJztcbiAgICAgIH1cblxuICAgICAgLy8gRG9uJ3QgZmlyZSB0aGUgZXZlbnQgb24gaW5pdGlhbCBsb2FkLlxuICAgICAgaWYgKG9sZFN0YXRlICE9PSB0aGlzLl9EUkFXRVJfU1RBVEUuSU5JVCkge1xuICAgICAgICB0aGlzLmZpcmUoJ2FwcC1kcmF3ZXItdHJhbnNpdGlvbmVkJyk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuXG4gIC8qKlxuICAgKiBSZXNldHMgdGhlIGxheW91dC5cbiAgICpcbiAgICogQG1ldGhvZCByZXNldExheW91dFxuICAgKi9cbiAgcmVzZXRMYXlvdXQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmlyZSgnYXBwLXJlc2V0LWxheW91dCcpO1xuICB9LFxuXG4gIF9zZXRLZXlib2FyZEZvY3VzVHJhcDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMubm9Gb2N1c1RyYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBOT1RFOiBVbmxlc3Mgd2UgdXNlIC9kZWVwLyAod2hpY2ggd2Ugc2hvdWxkbid0IHNpbmNlIGl0J3MgZGVwcmVjYXRlZCksXG4gICAgLy8gdGhpcyB3aWxsIG5vdCBzZWxlY3QgZm9jdXNhYmxlIGVsZW1lbnRzIGluc2lkZSBzaGFkb3cgcm9vdHMuXG4gICAgdmFyIGZvY3VzYWJsZUVsZW1lbnRzU2VsZWN0b3IgPSBbXG4gICAgICAnYVtocmVmXTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJyxcbiAgICAgICdhcmVhW2hyZWZdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknLFxuICAgICAgJ2lucHV0Om5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJyxcbiAgICAgICdzZWxlY3Q6bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSknLFxuICAgICAgJ3RleHRhcmVhOm5vdChbZGlzYWJsZWRdKTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJyxcbiAgICAgICdidXR0b246bm90KFtkaXNhYmxlZF0pOm5vdChbdGFiaW5kZXg9XCItMVwiXSknLFxuICAgICAgJ2lmcmFtZTpub3QoW3RhYmluZGV4PVwiLTFcIl0pJyxcbiAgICAgICdbdGFiaW5kZXhdOm5vdChbdGFiaW5kZXg9XCItMVwiXSknLFxuICAgICAgJ1tjb250ZW50RWRpdGFibGU9dHJ1ZV06bm90KFt0YWJpbmRleD1cIi0xXCJdKSdcbiAgICBdLmpvaW4oJywnKTtcbiAgICB2YXIgZm9jdXNhYmxlRWxlbWVudHMgPVxuICAgICAgICBkb20odGhpcykucXVlcnlTZWxlY3RvckFsbChmb2N1c2FibGVFbGVtZW50c1NlbGVjdG9yKTtcblxuICAgIGlmIChmb2N1c2FibGVFbGVtZW50cy5sZW5ndGggPiAwKSB7XG4gICAgICB0aGlzLl9maXJzdFRhYlN0b3AgPSBmb2N1c2FibGVFbGVtZW50c1swXTtcbiAgICAgIHRoaXMuX2xhc3RUYWJTdG9wID0gZm9jdXNhYmxlRWxlbWVudHNbZm9jdXNhYmxlRWxlbWVudHMubGVuZ3RoIC0gMV07XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFJlc2V0IHNhdmVkIHRhYiBzdG9wcyB3aGVuIHRoZXJlIGFyZSBubyBmb2N1c2FibGUgZWxlbWVudHMgaW4gdGhlXG4gICAgICAvLyBkcmF3ZXIuXG4gICAgICB0aGlzLl9maXJzdFRhYlN0b3AgPSBudWxsO1xuICAgICAgdGhpcy5fbGFzdFRhYlN0b3AgPSBudWxsO1xuICAgIH1cblxuICAgIC8vIEZvY3VzIG9uIGFwcC1kcmF3ZXIgaWYgaXQgaGFzIG5vbi16ZXJvIHRhYmluZGV4LiBPdGhlcndpc2UsIGZvY3VzIHRoZVxuICAgIC8vIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IGluIHRoZSBkcmF3ZXIsIGlmIGl0IGV4aXN0cy4gVXNlIHRoZSB0YWJpbmRleFxuICAgIC8vIGF0dHJpYnV0ZSBzaW5jZSB0aGUgdGhpcy50YWJJbmRleCBwcm9wZXJ0eSBpbiBJRS9FZGdlIHJldHVybnMgMCAoaW5zdGVhZFxuICAgIC8vIG9mIC0xKSB3aGVuIHRoZSBhdHRyaWJ1dGUgaXMgbm90IHNldC5cbiAgICB2YXIgdGFiaW5kZXggPSB0aGlzLmdldEF0dHJpYnV0ZSgndGFiaW5kZXgnKTtcbiAgICBpZiAodGFiaW5kZXggJiYgcGFyc2VJbnQodGFiaW5kZXgsIDEwKSA+IC0xKSB7XG4gICAgICB0aGlzLmZvY3VzKCk7XG4gICAgfSBlbHNlIGlmICh0aGlzLl9maXJzdFRhYlN0b3ApIHtcbiAgICAgIHRoaXMuX2ZpcnN0VGFiU3RvcC5mb2N1cygpO1xuICAgIH1cbiAgfSxcblxuICBfdGFiS2V5ZG93bkhhbmRsZXI6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgaWYgKHRoaXMubm9Gb2N1c1RyYXApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB2YXIgVEFCX0tFWUNPREUgPSA5O1xuICAgIGlmICh0aGlzLl9kcmF3ZXJTdGF0ZSA9PT0gdGhpcy5fRFJBV0VSX1NUQVRFLk9QRU5FRCAmJlxuICAgICAgICBldmVudC5rZXlDb2RlID09PSBUQUJfS0VZQ09ERSkge1xuICAgICAgaWYgKGV2ZW50LnNoaWZ0S2V5KSB7XG4gICAgICAgIGlmICh0aGlzLl9maXJzdFRhYlN0b3AgJiZcbiAgICAgICAgICAgIGRvbShldmVudCkubG9jYWxUYXJnZXQgPT09IHRoaXMuX2ZpcnN0VGFiU3RvcCkge1xuICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgdGhpcy5fbGFzdFRhYlN0b3AuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMuX2xhc3RUYWJTdG9wICYmIGRvbShldmVudCkubG9jYWxUYXJnZXQgPT09IHRoaXMuX2xhc3RUYWJTdG9wKSB7XG4gICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICB0aGlzLl9maXJzdFRhYlN0b3AuZm9jdXMoKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfb3BlbmVkUGVyc2lzdGVudENoYW5nZWQ6IGZ1bmN0aW9uKG9wZW5lZCwgcGVyc2lzdGVudCkge1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoJ3Zpc2libGUnLCBvcGVuZWQgJiYgIXBlcnNpc3RlbnQsIHRoaXMuJC5zY3JpbSk7XG5cbiAgICAvLyBVc2UgYSBkZWJvdW5jZSB0aW1lciBpbnN0ZWFkIG9mIHRyYW5zaXRpb25lbmQgc2luY2UgdHJhbnNpdGlvbmVuZCB3b24ndFxuICAgIC8vIGZpcmUgd2hlbiBhcHAtZHJhd2VyIGlzIGRpc3BsYXk6IG5vbmUuXG4gICAgdGhpcy5kZWJvdW5jZShcbiAgICAgICAgJ19yZXNldERyYXdlclN0YXRlJywgdGhpcy5fcmVzZXREcmF3ZXJTdGF0ZSwgdGhpcy50cmFuc2l0aW9uRHVyYXRpb24pO1xuICB9LFxuXG4gIF9NSU5fRkxJTkdfVEhSRVNIT0xEOiAwLjIsXG4gIF9NSU5fVFJBTlNJVElPTl9WRUxPQ0lUWTogMS4yLFxuICBfRkxJTkdfVElNSU5HX0ZVTkNUSU9OOiAnY3ViaWMtYmV6aWVyKDAuNjY3LCAxLCAwLjY2NywgMSknLFxuICBfRkxJTkdfSU5JVElBTF9TTE9QRTogMS41LFxuXG4gIF9EUkFXRVJfU1RBVEU6IHtcbiAgICBJTklUOiAwLFxuICAgIE9QRU5FRDogMSxcbiAgICBPUEVORURfUEVSU0lTVEVOVDogMixcbiAgICBDTE9TRUQ6IDMsXG4gICAgVFJBQ0tJTkc6IDQsXG4gICAgRkxJTkdJTkc6IDVcbiAgfVxuXG4gIC8qKlxuICAgKiBGaXJlZCB3aGVuIHRoZSBsYXlvdXQgb2YgYXBwLWRyYXdlciBoYXMgY2hhbmdlZC5cbiAgICpcbiAgICogQGV2ZW50IGFwcC1yZXNldC1sYXlvdXRcbiAgICovXG5cbiAgLyoqXG4gICAqIEZpcmVkIHdoZW4gYXBwLWRyYXdlciBoYXMgZmluaXNoZWQgdHJhbnNpdGlvbmluZy5cbiAgICpcbiAgICogQGV2ZW50IGFwcC1kcmF3ZXItdHJhbnNpdGlvbmVkXG4gICAqL1xufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7QUFVQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQW1EQTtBQUNBO0FBcUhBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUEzQ0E7QUE4Q0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBTkE7QUFDQTtBQU9BO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBVEE7QUFXQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBREE7QUFXQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7QUFNQTs7Ozs7O0FBZkE7QUF6akJBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=