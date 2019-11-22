(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~dialog-config-flow~dialog-zha-device-info~more-info-dialog"],{

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

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner-behavior.js ***!
  \***********************************************************************/
/*! exports provided: PaperSpinnerBehavior */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaperSpinnerBehavior", function() { return PaperSpinnerBehavior; });
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
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

const PaperSpinnerBehavior = {
  properties: {
    /**
     * Displays the spinner.
     */
    active: {
      type: Boolean,
      value: false,
      reflectToAttribute: true,
      observer: '__activeChanged'
    },

    /**
     * Alternative text content for accessibility support.
     * If alt is present, it will add an aria-label whose content matches alt
     * when active. If alt is not present, it will default to 'loading' as the
     * alt value.
     */
    alt: {
      type: String,
      value: 'loading',
      observer: '__altChanged'
    },
    __coolingDown: {
      type: Boolean,
      value: false
    }
  },
  __computeContainerClasses: function (active, coolingDown) {
    return [active || coolingDown ? 'active' : '', coolingDown ? 'cooldown' : ''].join(' ');
  },
  __activeChanged: function (active, old) {
    this.__setAriaHidden(!active);

    this.__coolingDown = !active && old;
  },
  __altChanged: function (alt) {
    // user-provided `aria-label` takes precedence over prototype default
    if (alt === 'loading') {
      this.alt = this.getAttribute('aria-label') || alt;
    } else {
      this.__setAriaHidden(alt === '');

      this.setAttribute('aria-label', alt);
    }
  },
  __setAriaHidden: function (hidden) {
    var attr = 'aria-hidden';

    if (hidden) {
      this.setAttribute(attr, 'true');
    } else {
      this.removeAttribute(attr);
    }
  },
  __reset: function () {
    this.active = false;
    this.__coolingDown = false;
  }
};

/***/ }),

/***/ "./node_modules/@polymer/paper-spinner/paper-spinner-styles.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@polymer/paper-spinner/paper-spinner-styles.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
const $_documentContainer = document.createElement('template');
$_documentContainer.setAttribute('style', 'display: none;');
$_documentContainer.innerHTML = `<dom-module id="paper-spinner-styles">
  <template>
    <style>
      /*
      /**************************/
      /* STYLES FOR THE SPINNER */
      /**************************/

      /*
       * Constants:
       *      ARCSIZE     = 270 degrees (amount of circle the arc takes up)
       *      ARCTIME     = 1333ms (time it takes to expand and contract arc)
       *      ARCSTARTROT = 216 degrees (how much the start location of the arc
       *                                should rotate each time, 216 gives us a
       *                                5 pointed star shape (it's 360/5 * 3).
       *                                For a 7 pointed star, we might do
       *                                360/7 * 3 = 154.286)
       *      SHRINK_TIME = 400ms
       */

      :host {
        display: inline-block;
        position: relative;
        width: 28px;
        height: 28px;

        /* 360 * ARCTIME / (ARCSTARTROT + (360-ARCSIZE)) */
        --paper-spinner-container-rotation-duration: 1568ms;

        /* ARCTIME */
        --paper-spinner-expand-contract-duration: 1333ms;

        /* 4 * ARCTIME */
        --paper-spinner-full-cycle-duration: 5332ms;

        /* SHRINK_TIME */
        --paper-spinner-cooldown-duration: 400ms;
      }

      #spinnerContainer {
        width: 100%;
        height: 100%;

        /* The spinner does not have any contents that would have to be
         * flipped if the direction changes. Always use ltr so that the
         * style works out correctly in both cases. */
        direction: ltr;
      }

      #spinnerContainer.active {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite;
      }

      @-webkit-keyframes container-rotate {
        to { -webkit-transform: rotate(360deg) }
      }

      @keyframes container-rotate {
        to { transform: rotate(360deg) }
      }

      .spinner-layer {
        position: absolute;
        width: 100%;
        height: 100%;
        opacity: 0;
        white-space: nowrap;
        color: var(--paper-spinner-color, var(--google-blue-500));
      }

      .layer-1 {
        color: var(--paper-spinner-layer-1-color, var(--google-blue-500));
      }

      .layer-2 {
        color: var(--paper-spinner-layer-2-color, var(--google-red-500));
      }

      .layer-3 {
        color: var(--paper-spinner-layer-3-color, var(--google-yellow-500));
      }

      .layer-4 {
        color: var(--paper-spinner-layer-4-color, var(--google-green-500));
      }

      /**
       * IMPORTANT NOTE ABOUT CSS ANIMATION PROPERTIES (keanulee):
       *
       * iOS Safari (tested on iOS 8.1) does not handle animation-delay very well - it doesn't
       * guarantee that the animation will start _exactly_ after that value. So we avoid using
       * animation-delay and instead set custom keyframes for each color (as layer-2undant as it
       * seems).
       */
      .active .spinner-layer {
        -webkit-animation-name: fill-unfill-rotate;
        -webkit-animation-duration: var(--paper-spinner-full-cycle-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-name: fill-unfill-rotate;
        animation-duration: var(--paper-spinner-full-cycle-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
        opacity: 1;
      }

      .active .spinner-layer.layer-1 {
        -webkit-animation-name: fill-unfill-rotate, layer-1-fade-in-out;
        animation-name: fill-unfill-rotate, layer-1-fade-in-out;
      }

      .active .spinner-layer.layer-2 {
        -webkit-animation-name: fill-unfill-rotate, layer-2-fade-in-out;
        animation-name: fill-unfill-rotate, layer-2-fade-in-out;
      }

      .active .spinner-layer.layer-3 {
        -webkit-animation-name: fill-unfill-rotate, layer-3-fade-in-out;
        animation-name: fill-unfill-rotate, layer-3-fade-in-out;
      }

      .active .spinner-layer.layer-4 {
        -webkit-animation-name: fill-unfill-rotate, layer-4-fade-in-out;
        animation-name: fill-unfill-rotate, layer-4-fade-in-out;
      }

      @-webkit-keyframes fill-unfill-rotate {
        12.5% { -webkit-transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { -webkit-transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { -webkit-transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { -webkit-transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { -webkit-transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { -webkit-transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { -webkit-transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { -webkit-transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @keyframes fill-unfill-rotate {
        12.5% { transform: rotate(135deg) } /* 0.5 * ARCSIZE */
        25%   { transform: rotate(270deg) } /* 1   * ARCSIZE */
        37.5% { transform: rotate(405deg) } /* 1.5 * ARCSIZE */
        50%   { transform: rotate(540deg) } /* 2   * ARCSIZE */
        62.5% { transform: rotate(675deg) } /* 2.5 * ARCSIZE */
        75%   { transform: rotate(810deg) } /* 3   * ARCSIZE */
        87.5% { transform: rotate(945deg) } /* 3.5 * ARCSIZE */
        to    { transform: rotate(1080deg) } /* 4   * ARCSIZE */
      }

      @-webkit-keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @keyframes layer-1-fade-in-out {
        0% { opacity: 1 }
        25% { opacity: 1 }
        26% { opacity: 0 }
        89% { opacity: 0 }
        90% { opacity: 1 }
        to { opacity: 1 }
      }

      @-webkit-keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-2-fade-in-out {
        0% { opacity: 0 }
        15% { opacity: 0 }
        25% { opacity: 1 }
        50% { opacity: 1 }
        51% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @keyframes layer-3-fade-in-out {
        0% { opacity: 0 }
        40% { opacity: 0 }
        50% { opacity: 1 }
        75% { opacity: 1 }
        76% { opacity: 0 }
        to { opacity: 0 }
      }

      @-webkit-keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes layer-4-fade-in-out {
        0% { opacity: 0 }
        65% { opacity: 0 }
        75% { opacity: 1 }
        90% { opacity: 1 }
        to { opacity: 0 }
      }

      .circle-clipper {
        display: inline-block;
        position: relative;
        width: 50%;
        height: 100%;
        overflow: hidden;
      }

      /**
       * Patch the gap that appear between the two adjacent div.circle-clipper while the
       * spinner is rotating (appears on Chrome 50, Safari 9.1.1, and Edge).
       */
      .spinner-layer::after {
        content: '';
        left: 45%;
        width: 10%;
        border-top-style: solid;
      }

      .spinner-layer::after,
      .circle-clipper .circle {
        box-sizing: border-box;
        position: absolute;
        top: 0;
        border-width: var(--paper-spinner-stroke-width, 3px);
        border-radius: 50%;
      }

      .circle-clipper .circle {
        bottom: 0;
        width: 200%;
        border-style: solid;
        border-bottom-color: transparent !important;
      }

      .circle-clipper.left .circle {
        left: 0;
        border-right-color: transparent !important;
        -webkit-transform: rotate(129deg);
        transform: rotate(129deg);
      }

      .circle-clipper.right .circle {
        left: -100%;
        border-left-color: transparent !important;
        -webkit-transform: rotate(-129deg);
        transform: rotate(-129deg);
      }

      .active .gap-patch::after,
      .active .circle-clipper .circle {
        -webkit-animation-duration: var(--paper-spinner-expand-contract-duration);
        -webkit-animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        -webkit-animation-iteration-count: infinite;
        animation-duration: var(--paper-spinner-expand-contract-duration);
        animation-timing-function: cubic-bezier(0.4, 0.0, 0.2, 1);
        animation-iteration-count: infinite;
      }

      .active .circle-clipper.left .circle {
        -webkit-animation-name: left-spin;
        animation-name: left-spin;
      }

      .active .circle-clipper.right .circle {
        -webkit-animation-name: right-spin;
        animation-name: right-spin;
      }

      @-webkit-keyframes left-spin {
        0% { -webkit-transform: rotate(130deg) }
        50% { -webkit-transform: rotate(-5deg) }
        to { -webkit-transform: rotate(130deg) }
      }

      @keyframes left-spin {
        0% { transform: rotate(130deg) }
        50% { transform: rotate(-5deg) }
        to { transform: rotate(130deg) }
      }

      @-webkit-keyframes right-spin {
        0% { -webkit-transform: rotate(-130deg) }
        50% { -webkit-transform: rotate(5deg) }
        to { -webkit-transform: rotate(-130deg) }
      }

      @keyframes right-spin {
        0% { transform: rotate(-130deg) }
        50% { transform: rotate(5deg) }
        to { transform: rotate(-130deg) }
      }

      #spinnerContainer.cooldown {
        -webkit-animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
        animation: container-rotate var(--paper-spinner-container-rotation-duration) linear infinite, fade-out var(--paper-spinner-cooldown-duration) cubic-bezier(0.4, 0.0, 0.2, 1);
      }

      @-webkit-keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }

      @keyframes fade-out {
        0% { opacity: 1 }
        to { opacity: 0 }
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild($_documentContainer.content);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35kaWFsb2ctY29uZmlnLWZsb3d+ZGlhbG9nLXpoYS1kZXZpY2UtaW5mb35tb3JlLWluZm8tZGlhbG9nLmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yL2lyb24tcmVzaXphYmxlLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1zcGlubmVyL3BhcGVyLXNwaW5uZXItYmVoYXZpb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLXNwaW5uZXIvcGFwZXItc3Bpbm5lci1zdHlsZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge2RvbX0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXIuZG9tLmpzJztcbmltcG9ydCB7dXNlU2hhZG93fSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi91dGlscy9zZXR0aW5ncy5qcyc7XG5cbi8vIENvbnRhaW5zIGFsbCBjb25uZWN0ZWQgcmVzaXphYmxlcyB0aGF0IGRvIG5vdCBoYXZlIGEgcGFyZW50LlxudmFyIE9SUEhBTlMgPSBuZXcgU2V0KCk7XG5cbi8qKlxuICogYElyb25SZXNpemFibGVCZWhhdmlvcmAgaXMgYSBiZWhhdmlvciB0aGF0IGNhbiBiZSB1c2VkIGluIFBvbHltZXIgZWxlbWVudHMgdG9cbiAqIGNvb3JkaW5hdGUgdGhlIGZsb3cgb2YgcmVzaXplIGV2ZW50cyBiZXR3ZWVuIFwicmVzaXplcnNcIiAoZWxlbWVudHMgdGhhdFxuICpjb250cm9sIHRoZSBzaXplIG9yIGhpZGRlbiBzdGF0ZSBvZiB0aGVpciBjaGlsZHJlbikgYW5kIFwicmVzaXphYmxlc1wiIChlbGVtZW50c1xuICp0aGF0IG5lZWQgdG8gYmUgbm90aWZpZWQgd2hlbiB0aGV5IGFyZSByZXNpemVkIG9yIHVuLWhpZGRlbiBieSB0aGVpciBwYXJlbnRzXG4gKmluIG9yZGVyIHRvIHRha2UgYWN0aW9uIG9uIHRoZWlyIG5ldyBtZWFzdXJlbWVudHMpLlxuICpcbiAqIEVsZW1lbnRzIHRoYXQgcGVyZm9ybSBtZWFzdXJlbWVudCBzaG91bGQgYWRkIHRoZSBgSXJvblJlc2l6YWJsZUJlaGF2aW9yYFxuICpiZWhhdmlvciB0byB0aGVpciBlbGVtZW50IGRlZmluaXRpb24gYW5kIGxpc3RlbiBmb3IgdGhlIGBpcm9uLXJlc2l6ZWAgZXZlbnQgb25cbiAqdGhlbXNlbHZlcy4gVGhpcyBldmVudCB3aWxsIGJlIGZpcmVkIHdoZW4gdGhleSBiZWNvbWUgc2hvd2luZyBhZnRlciBoYXZpbmdcbiAqYmVlbiBoaWRkZW4sIHdoZW4gdGhleSBhcmUgcmVzaXplZCBleHBsaWNpdGx5IGJ5IGFub3RoZXIgcmVzaXphYmxlLCBvciB3aGVuXG4gKnRoZSB3aW5kb3cgaGFzIGJlZW4gcmVzaXplZC5cbiAqXG4gKiBOb3RlLCB0aGUgYGlyb24tcmVzaXplYCBldmVudCBpcyBub24tYnViYmxpbmcuXG4gKlxuICogQHBvbHltZXJCZWhhdmlvclxuICogQGRlbW8gZGVtby9pbmRleC5odG1sXG4gKiovXG5leHBvcnQgY29uc3QgSXJvblJlc2l6YWJsZUJlaGF2aW9yID0ge1xuICBwcm9wZXJ0aWVzOiB7XG4gICAgLyoqXG4gICAgICogVGhlIGNsb3Nlc3QgYW5jZXN0b3IgZWxlbWVudCB0aGF0IGltcGxlbWVudHMgYElyb25SZXNpemFibGVCZWhhdmlvcmAuXG4gICAgICovXG4gICAgX3BhcmVudFJlc2l6YWJsZToge1xuICAgICAgdHlwZTogT2JqZWN0LFxuICAgICAgb2JzZXJ2ZXI6ICdfcGFyZW50UmVzaXphYmxlQ2hhbmdlZCcsXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFRydWUgaWYgdGhpcyBlbGVtZW50IGlzIGN1cnJlbnRseSBub3RpZnlpbmcgaXRzIGRlc2NlbmRhbnQgZWxlbWVudHMgb2ZcbiAgICAgKiByZXNpemUuXG4gICAgICovXG4gICAgX25vdGlmeWluZ0Rlc2NlbmRhbnQ6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgfVxuICB9LFxuXG4gIGxpc3RlbmVyczoge1xuICAgICdpcm9uLXJlcXVlc3QtcmVzaXplLW5vdGlmaWNhdGlvbnMnOiAnX29uSXJvblJlcXVlc3RSZXNpemVOb3RpZmljYXRpb25zJ1xuICB9LFxuXG4gIGNyZWF0ZWQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFdlIGRvbid0IHJlYWxseSBuZWVkIHByb3BlcnR5IGVmZmVjdHMgb24gdGhlc2UsIGFuZCBhbHNvIHdlIHdhbnQgdGhlbVxuICAgIC8vIHRvIGJlIGNyZWF0ZWQgYmVmb3JlIHRoZSBgX3BhcmVudFJlc2l6YWJsZWAgb2JzZXJ2ZXIgZmlyZXM6XG4gICAgdGhpcy5faW50ZXJlc3RlZFJlc2l6YWJsZXMgPSBbXTtcbiAgICB0aGlzLl9ib3VuZE5vdGlmeVJlc2l6ZSA9IHRoaXMubm90aWZ5UmVzaXplLmJpbmQodGhpcyk7XG4gICAgdGhpcy5fYm91bmRPbkRlc2NlbmRhbnRJcm9uUmVzaXplID0gdGhpcy5fb25EZXNjZW5kYW50SXJvblJlc2l6ZS5iaW5kKHRoaXMpO1xuICB9LFxuXG4gIGF0dGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLl9yZXF1ZXN0UmVzaXplTm90aWZpY2F0aW9ucygpO1xuICB9LFxuXG4gIGRldGFjaGVkOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5fcGFyZW50UmVzaXphYmxlKSB7XG4gICAgICB0aGlzLl9wYXJlbnRSZXNpemFibGUuc3RvcFJlc2l6ZU5vdGlmaWNhdGlvbnNGb3IodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIE9SUEhBTlMuZGVsZXRlKHRoaXMpO1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2JvdW5kTm90aWZ5UmVzaXplKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnRSZXNpemFibGUgPSBudWxsO1xuICB9LFxuXG4gIC8qKlxuICAgKiBDYW4gYmUgY2FsbGVkIHRvIG1hbnVhbGx5IG5vdGlmeSBhIHJlc2l6YWJsZSBhbmQgaXRzIGRlc2NlbmRhbnRcbiAgICogcmVzaXphYmxlcyBvZiBhIHJlc2l6ZSBjaGFuZ2UuXG4gICAqL1xuICBub3RpZnlSZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIGlmICghdGhpcy5pc0F0dGFjaGVkKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5faW50ZXJlc3RlZFJlc2l6YWJsZXMuZm9yRWFjaChmdW5jdGlvbihyZXNpemFibGUpIHtcbiAgICAgIGlmICh0aGlzLnJlc2l6ZXJTaG91bGROb3RpZnkocmVzaXphYmxlKSkge1xuICAgICAgICB0aGlzLl9ub3RpZnlEZXNjZW5kYW50KHJlc2l6YWJsZSk7XG4gICAgICB9XG4gICAgfSwgdGhpcyk7XG5cbiAgICB0aGlzLl9maXJlUmVzaXplKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gYXNzaWduIHRoZSBjbG9zZXN0IHJlc2l6YWJsZSBhbmNlc3RvciB0byB0aGlzIHJlc2l6YWJsZVxuICAgKiBpZiB0aGUgYW5jZXN0b3IgZGV0ZWN0cyBhIHJlcXVlc3QgZm9yIG5vdGlmaWNhdGlvbnMuXG4gICAqL1xuICBhc3NpZ25QYXJlbnRSZXNpemFibGU6IGZ1bmN0aW9uKHBhcmVudFJlc2l6YWJsZSkge1xuICAgIGlmICh0aGlzLl9wYXJlbnRSZXNpemFibGUpIHtcbiAgICAgIHRoaXMuX3BhcmVudFJlc2l6YWJsZS5zdG9wUmVzaXplTm90aWZpY2F0aW9uc0Zvcih0aGlzKTtcbiAgICB9XG5cbiAgICB0aGlzLl9wYXJlbnRSZXNpemFibGUgPSBwYXJlbnRSZXNpemFibGU7XG5cbiAgICBpZiAocGFyZW50UmVzaXphYmxlICYmXG4gICAgICAgIHBhcmVudFJlc2l6YWJsZS5faW50ZXJlc3RlZFJlc2l6YWJsZXMuaW5kZXhPZih0aGlzKSA9PT0gLTEpIHtcbiAgICAgIHBhcmVudFJlc2l6YWJsZS5faW50ZXJlc3RlZFJlc2l6YWJsZXMucHVzaCh0aGlzKTtcbiAgICAgIHBhcmVudFJlc2l6YWJsZS5fc3Vic2NyaWJlSXJvblJlc2l6ZSh0aGlzKTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVzZWQgdG8gcmVtb3ZlIGEgcmVzaXphYmxlIGRlc2NlbmRhbnQgZnJvbSB0aGUgbGlzdCBvZiBkZXNjZW5kYW50c1xuICAgKiB0aGF0IHNob3VsZCBiZSBub3RpZmllZCBvZiBhIHJlc2l6ZSBjaGFuZ2UuXG4gICAqL1xuICBzdG9wUmVzaXplTm90aWZpY2F0aW9uc0ZvcjogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdmFyIGluZGV4ID0gdGhpcy5faW50ZXJlc3RlZFJlc2l6YWJsZXMuaW5kZXhPZih0YXJnZXQpO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgIHRoaXMuX2ludGVyZXN0ZWRSZXNpemFibGVzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICB0aGlzLl91bnN1YnNjcmliZUlyb25SZXNpemUodGFyZ2V0KTtcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIFN1YnNjcmliZSB0aGlzIGVsZW1lbnQgdG8gbGlzdGVuIHRvIGlyb24tcmVzaXplIGV2ZW50cyBvbiB0aGUgZ2l2ZW4gdGFyZ2V0LlxuICAgKlxuICAgKiBQcmVmZXJyZWQgb3ZlciB0YXJnZXQubGlzdGVuIGJlY2F1c2UgdGhlIHByb3BlcnR5IHJlbmFtZXIgZG9lcyBub3RcbiAgICogdW5kZXJzdGFuZCB0byByZW5hbWUgd2hlbiB0aGUgdGFyZ2V0IGlzIG5vdCBzcGVjaWZpY2FsbHkgXCJ0aGlzXCJcbiAgICpcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHRhcmdldCBFbGVtZW50IHRvIGxpc3RlbiB0byBmb3IgaXJvbi1yZXNpemUgZXZlbnRzLlxuICAgKi9cbiAgX3N1YnNjcmliZUlyb25SZXNpemU6IGZ1bmN0aW9uKHRhcmdldCkge1xuICAgIHRhcmdldC5hZGRFdmVudExpc3RlbmVyKCdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kT25EZXNjZW5kYW50SXJvblJlc2l6ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFVuc3Vic2NyaWJlIHRoaXMgZWxlbWVudCBmcm9tIGxpc3RlbmluZyB0byB0byBpcm9uLXJlc2l6ZSBldmVudHMgb24gdGhlXG4gICAqIGdpdmVuIHRhcmdldC5cbiAgICpcbiAgICogUHJlZmVycmVkIG92ZXIgdGFyZ2V0LnVubGlzdGVuIGJlY2F1c2UgdGhlIHByb3BlcnR5IHJlbmFtZXIgZG9lcyBub3RcbiAgICogdW5kZXJzdGFuZCB0byByZW5hbWUgd2hlbiB0aGUgdGFyZ2V0IGlzIG5vdCBzcGVjaWZpY2FsbHkgXCJ0aGlzXCJcbiAgICpcbiAgICogQHBhcmFtIHshSFRNTEVsZW1lbnR9IHRhcmdldCBFbGVtZW50IHRvIGxpc3RlbiB0byBmb3IgaXJvbi1yZXNpemUgZXZlbnRzLlxuICAgKi9cbiAgX3Vuc3Vic2NyaWJlSXJvblJlc2l6ZTogZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgdGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoXG4gICAgICAgICdpcm9uLXJlc2l6ZScsIHRoaXMuX2JvdW5kT25EZXNjZW5kYW50SXJvblJlc2l6ZSk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFRoaXMgbWV0aG9kIGNhbiBiZSBvdmVycmlkZGVuIHRvIGZpbHRlciBuZXN0ZWQgZWxlbWVudHMgdGhhdCBzaG91bGQgb3JcbiAgICogc2hvdWxkIG5vdCBiZSBub3RpZmllZCBieSB0aGUgY3VycmVudCBlbGVtZW50LiBSZXR1cm4gdHJ1ZSBpZiBhbiBlbGVtZW50XG4gICAqIHNob3VsZCBiZSBub3RpZmllZCwgb3IgZmFsc2UgaWYgaXQgc2hvdWxkIG5vdCBiZSBub3RpZmllZC5cbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudCBBIGNhbmRpZGF0ZSBkZXNjZW5kYW50IGVsZW1lbnQgdGhhdFxuICAgKiBpbXBsZW1lbnRzIGBJcm9uUmVzaXphYmxlQmVoYXZpb3JgLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBgZWxlbWVudGAgc2hvdWxkIGJlIG5vdGlmaWVkIG9mIHJlc2l6ZS5cbiAgICovXG4gIHJlc2l6ZXJTaG91bGROb3RpZnk6IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSxcblxuICBfb25EZXNjZW5kYW50SXJvblJlc2l6ZTogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICBpZiAodGhpcy5fbm90aWZ5aW5nRGVzY2VuZGFudCkge1xuICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gbm8gbmVlZCB0byB1c2UgdGhpcyBkdXJpbmcgc2hhZG93IGRvbSBiZWNhdXNlIG9mIGV2ZW50IHJldGFyZ2V0aW5nXG4gICAgaWYgKCF1c2VTaGFkb3cpIHtcbiAgICAgIHRoaXMuX2ZpcmVSZXNpemUoKTtcbiAgICB9XG4gIH0sXG5cbiAgX2ZpcmVSZXNpemU6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuZmlyZSgnaXJvbi1yZXNpemUnLCBudWxsLCB7bm9kZTogdGhpcywgYnViYmxlczogZmFsc2V9KTtcbiAgfSxcblxuICBfb25Jcm9uUmVxdWVzdFJlc2l6ZU5vdGlmaWNhdGlvbnM6IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7IUV2ZW50VGFyZ2V0fSAqLyAoZG9tKGV2ZW50KS5yb290VGFyZ2V0KTtcbiAgICBpZiAodGFyZ2V0ID09PSB0aGlzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFzc2lnblBhcmVudFJlc2l6YWJsZSh0aGlzKTtcbiAgICB0aGlzLl9ub3RpZnlEZXNjZW5kYW50KHRhcmdldCk7XG5cbiAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgfSxcblxuICBfcGFyZW50UmVzaXphYmxlQ2hhbmdlZDogZnVuY3Rpb24ocGFyZW50UmVzaXphYmxlKSB7XG4gICAgaWYgKHBhcmVudFJlc2l6YWJsZSkge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHRoaXMuX2JvdW5kTm90aWZ5UmVzaXplKTtcbiAgICB9XG4gIH0sXG5cbiAgX25vdGlmeURlc2NlbmRhbnQ6IGZ1bmN0aW9uKGRlc2NlbmRhbnQpIHtcbiAgICAvLyBOT1RFKGNkYXRhKTogSW4gSUUxMCwgYXR0YWNoZWQgaXMgZmlyZWQgb24gY2hpbGRyZW4gZmlyc3QsIHNvIGl0J3NcbiAgICAvLyBpbXBvcnRhbnQgbm90IHRvIG5vdGlmeSB0aGVtIGlmIHRoZSBwYXJlbnQgaXMgbm90IGF0dGFjaGVkIHlldCAob3JcbiAgICAvLyBlbHNlIHRoZXkgd2lsbCBnZXQgcmVkdW5kYW50bHkgbm90aWZpZWQgd2hlbiB0aGUgcGFyZW50IGF0dGFjaGVzKS5cbiAgICBpZiAoIXRoaXMuaXNBdHRhY2hlZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMuX25vdGlmeWluZ0Rlc2NlbmRhbnQgPSB0cnVlO1xuICAgIGRlc2NlbmRhbnQubm90aWZ5UmVzaXplKCk7XG4gICAgdGhpcy5fbm90aWZ5aW5nRGVzY2VuZGFudCA9IGZhbHNlO1xuICB9LFxuXG4gIF9yZXF1ZXN0UmVzaXplTm90aWZpY2F0aW9uczogZnVuY3Rpb24oKSB7XG4gICAgaWYgKCF0aGlzLmlzQXR0YWNoZWQpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2xvYWRpbmcnKSB7XG4gICAgICB2YXIgX3JlcXVlc3RSZXNpemVOb3RpZmljYXRpb25zID1cbiAgICAgICAgICB0aGlzLl9yZXF1ZXN0UmVzaXplTm90aWZpY2F0aW9ucy5iaW5kKHRoaXMpO1xuICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAncmVhZHlzdGF0ZWNoYW5nZScsIGZ1bmN0aW9uIHJlYWR5c3RhdGVjaGFuZ2VkKCkge1xuICAgICAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigncmVhZHlzdGF0ZWNoYW5nZScsIHJlYWR5c3RhdGVjaGFuZ2VkKTtcbiAgICAgICAgICAgIF9yZXF1ZXN0UmVzaXplTm90aWZpY2F0aW9ucygpO1xuICAgICAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9maW5kUGFyZW50KCk7XG5cbiAgICAgIGlmICghdGhpcy5fcGFyZW50UmVzaXphYmxlKSB7XG4gICAgICAgIC8vIElmIHRoaXMgcmVzaXphYmxlIGlzIGFuIG9ycGhhbiwgdGVsbCBvdGhlciBvcnBoYW5zIHRvIHRyeSB0byBmaW5kXG4gICAgICAgIC8vIHRoZWlyIHBhcmVudCBhZ2FpbiwgaW4gY2FzZSBpdCdzIHRoaXMgcmVzaXphYmxlLlxuICAgICAgICBPUlBIQU5TLmZvckVhY2goZnVuY3Rpb24ob3JwaGFuKSB7XG4gICAgICAgICAgaWYgKG9ycGhhbiAhPT0gdGhpcykge1xuICAgICAgICAgICAgb3JwaGFuLl9maW5kUGFyZW50KCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCB0aGlzKTtcblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncmVzaXplJywgdGhpcy5fYm91bmROb3RpZnlSZXNpemUpO1xuICAgICAgICB0aGlzLm5vdGlmeVJlc2l6ZSgpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gSWYgdGhpcyByZXNpemFibGUgaGFzIGEgcGFyZW50LCB0ZWxsIG90aGVyIGNoaWxkIHJlc2l6YWJsZXMgb2ZcbiAgICAgICAgLy8gdGhhdCBwYXJlbnQgdG8gdHJ5IGZpbmRpbmcgdGhlaXIgcGFyZW50IGFnYWluLCBpbiBjYXNlIGl0J3MgdGhpc1xuICAgICAgICAvLyByZXNpemFibGUuXG4gICAgICAgIHRoaXMuX3BhcmVudFJlc2l6YWJsZS5faW50ZXJlc3RlZFJlc2l6YWJsZXNcbiAgICAgICAgICAgIC5mb3JFYWNoKGZ1bmN0aW9uKHJlc2l6YWJsZSkge1xuICAgICAgICAgICAgICBpZiAocmVzaXphYmxlICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgcmVzaXphYmxlLl9maW5kUGFyZW50KCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIHRoaXMpO1xuICAgICAgfVxuICAgIH1cbiAgfSxcblxuICBfZmluZFBhcmVudDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hc3NpZ25QYXJlbnRSZXNpemFibGUobnVsbCk7XG4gICAgdGhpcy5maXJlKFxuICAgICAgICAnaXJvbi1yZXF1ZXN0LXJlc2l6ZS1ub3RpZmljYXRpb25zJyxcbiAgICAgICAgbnVsbCxcbiAgICAgICAge25vZGU6IHRoaXMsIGJ1YmJsZXM6IHRydWUsIGNhbmNlbGFibGU6IHRydWV9KTtcblxuICAgIGlmICghdGhpcy5fcGFyZW50UmVzaXphYmxlKSB7XG4gICAgICBPUlBIQU5TLmFkZCh0aGlzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgT1JQSEFOUy5kZWxldGUodGhpcyk7XG4gICAgfVxuICB9XG59O1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG4vKiogQHBvbHltZXJCZWhhdmlvciAqL1xuZXhwb3J0IGNvbnN0IFBhcGVyU3Bpbm5lckJlaGF2aW9yID0ge1xuXG4gIHByb3BlcnRpZXM6IHtcbiAgICAvKipcbiAgICAgKiBEaXNwbGF5cyB0aGUgc3Bpbm5lci5cbiAgICAgKi9cbiAgICBhY3RpdmU6IHtcbiAgICAgIHR5cGU6IEJvb2xlYW4sXG4gICAgICB2YWx1ZTogZmFsc2UsXG4gICAgICByZWZsZWN0VG9BdHRyaWJ1dGU6IHRydWUsXG4gICAgICBvYnNlcnZlcjogJ19fYWN0aXZlQ2hhbmdlZCdcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQWx0ZXJuYXRpdmUgdGV4dCBjb250ZW50IGZvciBhY2Nlc3NpYmlsaXR5IHN1cHBvcnQuXG4gICAgICogSWYgYWx0IGlzIHByZXNlbnQsIGl0IHdpbGwgYWRkIGFuIGFyaWEtbGFiZWwgd2hvc2UgY29udGVudCBtYXRjaGVzIGFsdFxuICAgICAqIHdoZW4gYWN0aXZlLiBJZiBhbHQgaXMgbm90IHByZXNlbnQsIGl0IHdpbGwgZGVmYXVsdCB0byAnbG9hZGluZycgYXMgdGhlXG4gICAgICogYWx0IHZhbHVlLlxuICAgICAqL1xuICAgIGFsdDoge3R5cGU6IFN0cmluZywgdmFsdWU6ICdsb2FkaW5nJywgb2JzZXJ2ZXI6ICdfX2FsdENoYW5nZWQnfSxcblxuICAgIF9fY29vbGluZ0Rvd246IHt0eXBlOiBCb29sZWFuLCB2YWx1ZTogZmFsc2V9XG4gIH0sXG5cbiAgX19jb21wdXRlQ29udGFpbmVyQ2xhc3NlczogZnVuY3Rpb24oYWN0aXZlLCBjb29saW5nRG93bikge1xuICAgIHJldHVybiBbXG4gICAgICBhY3RpdmUgfHwgY29vbGluZ0Rvd24gPyAnYWN0aXZlJyA6ICcnLFxuICAgICAgY29vbGluZ0Rvd24gPyAnY29vbGRvd24nIDogJydcbiAgICBdLmpvaW4oJyAnKTtcbiAgfSxcblxuICBfX2FjdGl2ZUNoYW5nZWQ6IGZ1bmN0aW9uKGFjdGl2ZSwgb2xkKSB7XG4gICAgdGhpcy5fX3NldEFyaWFIaWRkZW4oIWFjdGl2ZSk7XG4gICAgdGhpcy5fX2Nvb2xpbmdEb3duID0gIWFjdGl2ZSAmJiBvbGQ7XG4gIH0sXG5cbiAgX19hbHRDaGFuZ2VkOiBmdW5jdGlvbihhbHQpIHtcbiAgICAvLyB1c2VyLXByb3ZpZGVkIGBhcmlhLWxhYmVsYCB0YWtlcyBwcmVjZWRlbmNlIG92ZXIgcHJvdG90eXBlIGRlZmF1bHRcbiAgICBpZiAoYWx0ID09PSAnbG9hZGluZycpIHtcbiAgICAgIHRoaXMuYWx0ID0gdGhpcy5nZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnKSB8fCBhbHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX19zZXRBcmlhSGlkZGVuKGFsdCA9PT0gJycpO1xuICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2FyaWEtbGFiZWwnLCBhbHQpO1xuICAgIH1cbiAgfSxcblxuICBfX3NldEFyaWFIaWRkZW46IGZ1bmN0aW9uKGhpZGRlbikge1xuICAgIHZhciBhdHRyID0gJ2FyaWEtaGlkZGVuJztcbiAgICBpZiAoaGlkZGVuKSB7XG4gICAgICB0aGlzLnNldEF0dHJpYnV0ZShhdHRyLCAndHJ1ZScpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlbW92ZUF0dHJpYnV0ZShhdHRyKTtcbiAgICB9XG4gIH0sXG5cbiAgX19yZXNldDogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICB0aGlzLl9fY29vbGluZ0Rvd24gPSBmYWxzZTtcbiAgfVxufTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuY29uc3QgJF9kb2N1bWVudENvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG4kX2RvY3VtZW50Q29udGFpbmVyLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCAnZGlzcGxheTogbm9uZTsnKTtcblxuJF9kb2N1bWVudENvbnRhaW5lci5pbm5lckhUTUwgPSBgPGRvbS1tb2R1bGUgaWQ9XCJwYXBlci1zcGlubmVyLXN0eWxlc1wiPlxuICA8dGVtcGxhdGU+XG4gICAgPHN0eWxlPlxuICAgICAgLypcbiAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgIC8qIFNUWUxFUyBGT1IgVEhFIFNQSU5ORVIgKi9cbiAgICAgIC8qKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuICAgICAgLypcbiAgICAgICAqIENvbnN0YW50czpcbiAgICAgICAqICAgICAgQVJDU0laRSAgICAgPSAyNzAgZGVncmVlcyAoYW1vdW50IG9mIGNpcmNsZSB0aGUgYXJjIHRha2VzIHVwKVxuICAgICAgICogICAgICBBUkNUSU1FICAgICA9IDEzMzNtcyAodGltZSBpdCB0YWtlcyB0byBleHBhbmQgYW5kIGNvbnRyYWN0IGFyYylcbiAgICAgICAqICAgICAgQVJDU1RBUlRST1QgPSAyMTYgZGVncmVlcyAoaG93IG11Y2ggdGhlIHN0YXJ0IGxvY2F0aW9uIG9mIHRoZSBhcmNcbiAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG91bGQgcm90YXRlIGVhY2ggdGltZSwgMjE2IGdpdmVzIHVzIGFcbiAgICAgICAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA1IHBvaW50ZWQgc3RhciBzaGFwZSAoaXQncyAzNjAvNSAqIDMpLlxuICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEZvciBhIDcgcG9pbnRlZCBzdGFyLCB3ZSBtaWdodCBkb1xuICAgICAgICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDM2MC83ICogMyA9IDE1NC4yODYpXG4gICAgICAgKiAgICAgIFNIUklOS19USU1FID0gNDAwbXNcbiAgICAgICAqL1xuXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogMjhweDtcbiAgICAgICAgaGVpZ2h0OiAyOHB4O1xuXG4gICAgICAgIC8qIDM2MCAqIEFSQ1RJTUUgLyAoQVJDU1RBUlRST1QgKyAoMzYwLUFSQ1NJWkUpKSAqL1xuICAgICAgICAtLXBhcGVyLXNwaW5uZXItY29udGFpbmVyLXJvdGF0aW9uLWR1cmF0aW9uOiAxNTY4bXM7XG5cbiAgICAgICAgLyogQVJDVElNRSAqL1xuICAgICAgICAtLXBhcGVyLXNwaW5uZXItZXhwYW5kLWNvbnRyYWN0LWR1cmF0aW9uOiAxMzMzbXM7XG5cbiAgICAgICAgLyogNCAqIEFSQ1RJTUUgKi9cbiAgICAgICAgLS1wYXBlci1zcGlubmVyLWZ1bGwtY3ljbGUtZHVyYXRpb246IDUzMzJtcztcblxuICAgICAgICAvKiBTSFJJTktfVElNRSAqL1xuICAgICAgICAtLXBhcGVyLXNwaW5uZXItY29vbGRvd24tZHVyYXRpb246IDQwMG1zO1xuICAgICAgfVxuXG4gICAgICAjc3Bpbm5lckNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgICAgLyogVGhlIHNwaW5uZXIgZG9lcyBub3QgaGF2ZSBhbnkgY29udGVudHMgdGhhdCB3b3VsZCBoYXZlIHRvIGJlXG4gICAgICAgICAqIGZsaXBwZWQgaWYgdGhlIGRpcmVjdGlvbiBjaGFuZ2VzLiBBbHdheXMgdXNlIGx0ciBzbyB0aGF0IHRoZVxuICAgICAgICAgKiBzdHlsZSB3b3JrcyBvdXQgY29ycmVjdGx5IGluIGJvdGggY2FzZXMuICovXG4gICAgICAgIGRpcmVjdGlvbjogbHRyO1xuICAgICAgfVxuXG4gICAgICAjc3Bpbm5lckNvbnRhaW5lci5hY3RpdmUge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbjogY29udGFpbmVyLXJvdGF0ZSB2YXIoLS1wYXBlci1zcGlubmVyLWNvbnRhaW5lci1yb3RhdGlvbi1kdXJhdGlvbikgbGluZWFyIGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb246IGNvbnRhaW5lci1yb3RhdGUgdmFyKC0tcGFwZXItc3Bpbm5lci1jb250YWluZXItcm90YXRpb24tZHVyYXRpb24pIGxpbmVhciBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGNvbnRhaW5lci1yb3RhdGUge1xuICAgICAgICB0byB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgY29udGFpbmVyLXJvdGF0ZSB7XG4gICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKSB9XG4gICAgICB9XG5cbiAgICAgIC5zcGlubmVyLWxheWVyIHtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBvcGFjaXR5OiAwO1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItc3Bpbm5lci1jb2xvciwgdmFyKC0tZ29vZ2xlLWJsdWUtNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC5sYXllci0xIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXNwaW5uZXItbGF5ZXItMS1jb2xvciwgdmFyKC0tZ29vZ2xlLWJsdWUtNTAwKSk7XG4gICAgICB9XG5cbiAgICAgIC5sYXllci0yIHtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLXNwaW5uZXItbGF5ZXItMi1jb2xvciwgdmFyKC0tZ29vZ2xlLXJlZC01MDApKTtcbiAgICAgIH1cblxuICAgICAgLmxheWVyLTMge1xuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItc3Bpbm5lci1sYXllci0zLWNvbG9yLCB2YXIoLS1nb29nbGUteWVsbG93LTUwMCkpO1xuICAgICAgfVxuXG4gICAgICAubGF5ZXItNCB7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1wYXBlci1zcGlubmVyLWxheWVyLTQtY29sb3IsIHZhcigtLWdvb2dsZS1ncmVlbi01MDApKTtcbiAgICAgIH1cblxuICAgICAgLyoqXG4gICAgICAgKiBJTVBPUlRBTlQgTk9URSBBQk9VVCBDU1MgQU5JTUFUSU9OIFBST1BFUlRJRVMgKGtlYW51bGVlKTpcbiAgICAgICAqXG4gICAgICAgKiBpT1MgU2FmYXJpICh0ZXN0ZWQgb24gaU9TIDguMSkgZG9lcyBub3QgaGFuZGxlIGFuaW1hdGlvbi1kZWxheSB2ZXJ5IHdlbGwgLSBpdCBkb2Vzbid0XG4gICAgICAgKiBndWFyYW50ZWUgdGhhdCB0aGUgYW5pbWF0aW9uIHdpbGwgc3RhcnQgX2V4YWN0bHlfIGFmdGVyIHRoYXQgdmFsdWUuIFNvIHdlIGF2b2lkIHVzaW5nXG4gICAgICAgKiBhbmltYXRpb24tZGVsYXkgYW5kIGluc3RlYWQgc2V0IGN1c3RvbSBrZXlmcmFtZXMgZm9yIGVhY2ggY29sb3IgKGFzIGxheWVyLTJ1bmRhbnQgYXMgaXRcbiAgICAgICAqIHNlZW1zKS5cbiAgICAgICAqL1xuICAgICAgLmFjdGl2ZSAuc3Bpbm5lci1sYXllciB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZTtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXNwaW5uZXItZnVsbC1jeWNsZS1kdXJhdGlvbik7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXNwaW5uZXItZnVsbC1jeWNsZS1kdXJhdGlvbik7XG4gICAgICAgIGFuaW1hdGlvbi10aW1pbmctZnVuY3Rpb246IGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XG4gICAgICAgIG9wYWNpdHk6IDE7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItMSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItMS1mYWRlLWluLW91dDtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItMS1mYWRlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuc3Bpbm5lci1sYXllci5sYXllci0yIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci0yLWZhZGUtaW4tb3V0O1xuICAgICAgICBhbmltYXRpb24tbmFtZTogZmlsbC11bmZpbGwtcm90YXRlLCBsYXllci0yLWZhZGUtaW4tb3V0O1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIC5zcGlubmVyLWxheWVyLmxheWVyLTMge1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTMtZmFkZS1pbi1vdXQ7XG4gICAgICAgIGFuaW1hdGlvbi1uYW1lOiBmaWxsLXVuZmlsbC1yb3RhdGUsIGxheWVyLTMtZmFkZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5hY3RpdmUgLnNwaW5uZXItbGF5ZXIubGF5ZXItNCB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItNC1mYWRlLWluLW91dDtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IGZpbGwtdW5maWxsLXJvdGF0ZSwgbGF5ZXItNC1mYWRlLWluLW91dDtcbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZpbGwtdW5maWxsLXJvdGF0ZSB7XG4gICAgICAgIDEyLjUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIH0gLyogMC41ICogQVJDU0laRSAqL1xuICAgICAgICAyNSUgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMjcwZGVnKSB9IC8qIDEgICAqIEFSQ1NJWkUgKi9cbiAgICAgICAgMzcuNSUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDQwNWRlZykgfSAvKiAxLjUgKiBBUkNTSVpFICovXG4gICAgICAgIDUwJSAgIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpIH0gLyogMiAgICogQVJDU0laRSAqL1xuICAgICAgICA2Mi41JSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoNjc1ZGVnKSB9IC8qIDIuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgNzUlICAgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDgxMGRlZykgfSAvKiAzICAgKiBBUkNTSVpFICovXG4gICAgICAgIDg3LjUlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg5NDVkZWcpIH0gLyogMy41ICogQVJDU0laRSAqL1xuICAgICAgICB0byAgICB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTA4MGRlZykgfSAvKiA0ICAgKiBBUkNTSVpFICovXG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgZmlsbC11bmZpbGwtcm90YXRlIHtcbiAgICAgICAgMTIuNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgxMzVkZWcpIH0gLyogMC41ICogQVJDU0laRSAqL1xuICAgICAgICAyNSUgICB7IHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZykgfSAvKiAxICAgKiBBUkNTSVpFICovXG4gICAgICAgIDM3LjUlIHsgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKSB9IC8qIDEuNSAqIEFSQ1NJWkUgKi9cbiAgICAgICAgNTAlICAgeyB0cmFuc2Zvcm06IHJvdGF0ZSg1NDBkZWcpIH0gLyogMiAgICogQVJDU0laRSAqL1xuICAgICAgICA2Mi41JSB7IHRyYW5zZm9ybTogcm90YXRlKDY3NWRlZykgfSAvKiAyLjUgKiBBUkNTSVpFICovXG4gICAgICAgIDc1JSAgIHsgdHJhbnNmb3JtOiByb3RhdGUoODEwZGVnKSB9IC8qIDMgICAqIEFSQ1NJWkUgKi9cbiAgICAgICAgODcuNSUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg5NDVkZWcpIH0gLyogMy41ICogQVJDU0laRSAqL1xuICAgICAgICB0byAgICB7IHRyYW5zZm9ybTogcm90YXRlKDEwODBkZWcpIH0gLyogNCAgICogQVJDU0laRSAqL1xuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbGF5ZXItMS1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDI1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICAyNiUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgODklIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDkwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDEgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGxheWVyLTEtZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICAyNSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgMjYlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDg5JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA5MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAxIH1cbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGxheWVyLTItZmFkZS1pbi1vdXQge1xuICAgICAgICAwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICAxNSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgMjUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDUwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA1MSUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBsYXllci0yLWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgMTUlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDI1JSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA1MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNTElIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsYXllci0zLWZhZGUtaW4tb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAwIH1cbiAgICAgICAgNDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDUwJSB7IG9wYWNpdHk6IDEgfVxuICAgICAgICA3NSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNzYlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbGF5ZXItMy1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDQwJSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA1MCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgNzUlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIDc2JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICB0byB7IG9wYWNpdHk6IDAgfVxuICAgICAgfVxuXG4gICAgICBALXdlYmtpdC1rZXlmcmFtZXMgbGF5ZXItNC1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDY1JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA3NSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgOTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgbGF5ZXItNC1mYWRlLWluLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMCB9XG4gICAgICAgIDY1JSB7IG9wYWNpdHk6IDAgfVxuICAgICAgICA3NSUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgOTAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtY2xpcHBlciB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG5cbiAgICAgIC8qKlxuICAgICAgICogUGF0Y2ggdGhlIGdhcCB0aGF0IGFwcGVhciBiZXR3ZWVuIHRoZSB0d28gYWRqYWNlbnQgZGl2LmNpcmNsZS1jbGlwcGVyIHdoaWxlIHRoZVxuICAgICAgICogc3Bpbm5lciBpcyByb3RhdGluZyAoYXBwZWFycyBvbiBDaHJvbWUgNTAsIFNhZmFyaSA5LjEuMSwgYW5kIEVkZ2UpLlxuICAgICAgICovXG4gICAgICAuc3Bpbm5lci1sYXllcjo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgbGVmdDogNDUlO1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBib3JkZXItdG9wLXN0eWxlOiBzb2xpZDtcbiAgICAgIH1cblxuICAgICAgLnNwaW5uZXItbGF5ZXI6OmFmdGVyLFxuICAgICAgLmNpcmNsZS1jbGlwcGVyIC5jaXJjbGUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiB2YXIoLS1wYXBlci1zcGlubmVyLXN0cm9rZS13aWR0aCwgM3B4KTtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgICAgfVxuXG4gICAgICAuY2lyY2xlLWNsaXBwZXIgLmNpcmNsZSB7XG4gICAgICAgIGJvdHRvbTogMDtcbiAgICAgICAgd2lkdGg6IDIwMCU7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci1ib3R0b20tY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICB9XG5cbiAgICAgIC5jaXJjbGUtY2xpcHBlci5sZWZ0IC5jaXJjbGUge1xuICAgICAgICBsZWZ0OiAwO1xuICAgICAgICBib3JkZXItcmlnaHQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTI5ZGVnKTtcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMTI5ZGVnKTtcbiAgICAgIH1cblxuICAgICAgLmNpcmNsZS1jbGlwcGVyLnJpZ2h0IC5jaXJjbGUge1xuICAgICAgICBsZWZ0OiAtMTAwJTtcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTEyOWRlZyk7XG4gICAgICAgIHRyYW5zZm9ybTogcm90YXRlKC0xMjlkZWcpO1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIC5nYXAtcGF0Y2g6OmFmdGVyLFxuICAgICAgLmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIgLmNpcmNsZSB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiB2YXIoLS1wYXBlci1zcGlubmVyLWV4cGFuZC1jb250cmFjdC1kdXJhdGlvbik7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgICBhbmltYXRpb24tZHVyYXRpb246IHZhcigtLXBhcGVyLXNwaW5uZXItZXhwYW5kLWNvbnRyYWN0LWR1cmF0aW9uKTtcbiAgICAgICAgYW5pbWF0aW9uLXRpbWluZy1mdW5jdGlvbjogY3ViaWMtYmV6aWVyKDAuNCwgMC4wLCAwLjIsIDEpO1xuICAgICAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICAgIH1cblxuICAgICAgLmFjdGl2ZSAuY2lyY2xlLWNsaXBwZXIubGVmdCAuY2lyY2xlIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogbGVmdC1zcGluO1xuICAgICAgICBhbmltYXRpb24tbmFtZTogbGVmdC1zcGluO1xuICAgICAgfVxuXG4gICAgICAuYWN0aXZlIC5jaXJjbGUtY2xpcHBlci5yaWdodCAuY2lyY2xlIHtcbiAgICAgICAgLXdlYmtpdC1hbmltYXRpb24tbmFtZTogcmlnaHQtc3BpbjtcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHJpZ2h0LXNwaW47XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBsZWZ0LXNwaW4ge1xuICAgICAgICAwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKSB9XG4gICAgICAgIDUwJSB7IC13ZWJraXQtdHJhbnNmb3JtOiByb3RhdGUoLTVkZWcpIH1cbiAgICAgICAgdG8geyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKDEzMGRlZykgfVxuICAgICAgfVxuXG4gICAgICBAa2V5ZnJhbWVzIGxlZnQtc3BpbiB7XG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKSB9XG4gICAgICAgIDUwJSB7IHRyYW5zZm9ybTogcm90YXRlKC01ZGVnKSB9XG4gICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMTMwZGVnKSB9XG4gICAgICB9XG5cbiAgICAgIEAtd2Via2l0LWtleWZyYW1lcyByaWdodC1zcGluIHtcbiAgICAgICAgMCUgeyAtd2Via2l0LXRyYW5zZm9ybTogcm90YXRlKC0xMzBkZWcpIH1cbiAgICAgICAgNTAlIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSB9XG4gICAgICAgIHRvIHsgLXdlYmtpdC10cmFuc2Zvcm06IHJvdGF0ZSgtMTMwZGVnKSB9XG4gICAgICB9XG5cbiAgICAgIEBrZXlmcmFtZXMgcmlnaHQtc3BpbiB7XG4gICAgICAgIDAlIHsgdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZykgfVxuICAgICAgICA1MCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSg1ZGVnKSB9XG4gICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoLTEzMGRlZykgfVxuICAgICAgfVxuXG4gICAgICAjc3Bpbm5lckNvbnRhaW5lci5jb29sZG93biB7XG4gICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBjb250YWluZXItcm90YXRlIHZhcigtLXBhcGVyLXNwaW5uZXItY29udGFpbmVyLXJvdGF0aW9uLWR1cmF0aW9uKSBsaW5lYXIgaW5maW5pdGUsIGZhZGUtb3V0IHZhcigtLXBhcGVyLXNwaW5uZXItY29vbGRvd24tZHVyYXRpb24pIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgICAgICAgYW5pbWF0aW9uOiBjb250YWluZXItcm90YXRlIHZhcigtLXBhcGVyLXNwaW5uZXItY29udGFpbmVyLXJvdGF0aW9uLWR1cmF0aW9uKSBsaW5lYXIgaW5maW5pdGUsIGZhZGUtb3V0IHZhcigtLXBhcGVyLXNwaW5uZXItY29vbGRvd24tZHVyYXRpb24pIGN1YmljLWJlemllcigwLjQsIDAuMCwgMC4yLCAxKTtcbiAgICAgIH1cblxuICAgICAgQC13ZWJraXQta2V5ZnJhbWVzIGZhZGUtb3V0IHtcbiAgICAgICAgMCUgeyBvcGFjaXR5OiAxIH1cbiAgICAgICAgdG8geyBvcGFjaXR5OiAwIH1cbiAgICAgIH1cblxuICAgICAgQGtleWZyYW1lcyBmYWRlLW91dCB7XG4gICAgICAgIDAlIHsgb3BhY2l0eTogMSB9XG4gICAgICAgIHRvIHsgb3BhY2l0eTogMCB9XG4gICAgICB9XG4gICAgPC9zdHlsZT5cbiAgPC90ZW1wbGF0ZT5cbjwvZG9tLW1vZHVsZT5gO1xuXG5kb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCRfZG9jdW1lbnRDb250YWluZXIuY29udGVudCk7XG5cbmV4cG9ydCB7fTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWtCQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFtQkE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUEzT0E7Ozs7Ozs7Ozs7OztBQ3BDQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTs7Ozs7O0FBTUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBbkJBO0FBc0JBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBMURBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUEwVUE7Ozs7O0EiLCJzb3VyY2VSb290IjoiIn0=