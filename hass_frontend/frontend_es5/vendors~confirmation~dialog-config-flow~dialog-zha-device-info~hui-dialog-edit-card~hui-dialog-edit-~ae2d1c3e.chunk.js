(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~confirmation~dialog-config-flow~dialog-zha-device-info~hui-dialog-edit-card~hui-dialog-edit-~ae2d1c3e"],{

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

/***/ "./node_modules/@polymer/paper-dialog/paper-dialog.js":
/*!************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog/paper-dialog.js ***!
  \************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_shared_styles_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-shared-styles.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-shared-styles.js");
/* harmony import */ var _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/neon-animation/neon-animation-runner-behavior.js */ "./node_modules/@polymer/neon-animation/neon-animation-runner-behavior.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style include=\"paper-dialog-shared-styles\"></style>\n    <slot></slot>\n"]);

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
Material design:
[Dialogs](https://www.google.com/design/spec/components/dialogs.html)

`<paper-dialog>` is a dialog with Material Design styling and optional
animations when it is opened or closed. It provides styles for a header, content
area, and an action area for buttons. You can use the
`<paper-dialog-scrollable>` element (in its own repository) if you need a
scrolling content area. To autofocus a specific child element after opening the
dialog, give it the `autofocus` attribute. See `Polymer.PaperDialogBehavior` and
`Polymer.IronOverlayBehavior` for specifics.

For example, the following code implements a dialog with a header, scrolling
content area and buttons. Focus will be given to the `dialog-confirm` button
when the dialog is opened.

    <paper-dialog>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button dialog-dismiss>Cancel</paper-button>
        <paper-button dialog-confirm autofocus>Accept</paper-button>
      </div>
    </paper-dialog>

### Styling

See the docs for `Polymer.PaperDialogBehavior` for the custom properties
available for styling this element.

### Animations

Set the `entry-animation` and/or `exit-animation` attributes to add an animation
when the dialog is opened or closed. See the documentation in
[PolymerElements/neon-animation](https://github.com/PolymerElements/neon-animation)
for more info.

For example:

    <script type="module">
      import '@polymer/neon-animation/animations/fade-out-animation.js';
      import '@polymer/neon-animation/animations/scale-up-animation.js';
    </script>

    <paper-dialog entry-animation="scale-up-animation"
                  exit-animation="fade-out-animation">
      <h2>Header</h2>
      <div>Dialog body</div>
    </paper-dialog>

### Accessibility

See the docs for `Polymer.PaperDialogBehavior` for accessibility features
implemented by this element.

@group Paper Elements
@element paper-dialog
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-dialog',
  behaviors: [_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehavior"], _polymer_neon_animation_neon_animation_runner_behavior_js__WEBPACK_IMPORTED_MODULE_2__["NeonAnimationRunnerBehavior"]],
  listeners: {
    'neon-animation-finish': '_onNeonAnimationFinish'
  },
  _renderOpened: function _renderOpened() {
    this.cancelAnimation();
    this.playAnimation('entry');
  },
  _renderClosed: function _renderClosed() {
    this.cancelAnimation();
    this.playAnimation('exit');
  },
  _onNeonAnimationFinish: function _onNeonAnimationFinish() {
    if (this.opened) {
      this._finishRenderOpened();
    } else {
      this._finishRenderClosed();
    }
  }
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35jb25maXJtYXRpb25+ZGlhbG9nLWNvbmZpZy1mbG93fmRpYWxvZy16aGEtZGV2aWNlLWluZm9+aHVpLWRpYWxvZy1lZGl0LWNhcmR+aHVpLWRpYWxvZy1lZGl0LX5hZTJkMWMzZS5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLWJlaGF2aW9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9wYXBlci1kaWFsb2ctYmVoYXZpb3IvcGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2cuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuXG5pbXBvcnQge0lyb25PdmVybGF5QmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL2lyb24tb3ZlcmxheS1iZWhhdmlvci9pcm9uLW92ZXJsYXktYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5cbi8qKlxuICBVc2UgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAgYW5kIGBwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlcy5odG1sYCB0b1xuICBpbXBsZW1lbnQgYSBNYXRlcmlhbCBEZXNpZ24gZGlhbG9nLlxuXG4gIEZvciBleGFtcGxlLCBpZiBgPHBhcGVyLWRpYWxvZy1pbXBsPmAgaW1wbGVtZW50cyB0aGlzIGJlaGF2aW9yOlxuXG4gICAgICA8cGFwZXItZGlhbG9nLWltcGw+XG4gICAgICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICAgICAgPGRpdj5EaWFsb2cgYm9keTwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgICAgICAgIDxwYXBlci1idXR0b24gZGlhbG9nLWRpc21pc3M+Q2FuY2VsPC9wYXBlci1idXR0b24+XG4gICAgICAgICAgICAgIDxwYXBlci1idXR0b24gZGlhbG9nLWNvbmZpcm0+QWNjZXB0PC9wYXBlci1idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L3BhcGVyLWRpYWxvZy1pbXBsPlxuXG4gIGBwYXBlci1kaWFsb2ctc2hhcmVkLXN0eWxlcy5odG1sYCBwcm92aWRlIHN0eWxlcyBmb3IgYSBoZWFkZXIsIGNvbnRlbnQgYXJlYSxcbiAgYW5kIGFuIGFjdGlvbiBhcmVhIGZvciBidXR0b25zLiBVc2UgdGhlIGA8aDI+YCB0YWcgZm9yIHRoZSBoZWFkZXIgYW5kIHRoZVxuICBgYnV0dG9uc2AgY2xhc3MgZm9yIHRoZSBhY3Rpb24gYXJlYS4gWW91IGNhbiB1c2UgdGhlIGBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWBcbiAgZWxlbWVudCAoaW4gaXRzIG93biByZXBvc2l0b3J5KSBpZiB5b3UgbmVlZCBhIHNjcm9sbGluZyBjb250ZW50IGFyZWEuXG5cbiAgVXNlIHRoZSBgZGlhbG9nLWRpc21pc3NgIGFuZCBgZGlhbG9nLWNvbmZpcm1gIGF0dHJpYnV0ZXMgb24gaW50ZXJhY3RpdmVcbiAgY29udHJvbHMgdG8gY2xvc2UgdGhlIGRpYWxvZy4gSWYgdGhlIHVzZXIgZGlzbWlzc2VzIHRoZSBkaWFsb2cgd2l0aFxuICBgZGlhbG9nLWNvbmZpcm1gLCB0aGUgYGNsb3NpbmdSZWFzb25gIHdpbGwgdXBkYXRlIHRvIGluY2x1ZGUgYGNvbmZpcm1lZDpcbiAgdHJ1ZWAuXG5cbiAgIyMjIEFjY2Vzc2liaWxpdHlcblxuICBUaGlzIGVsZW1lbnQgaGFzIGByb2xlPVwiZGlhbG9nXCJgIGJ5IGRlZmF1bHQuIERlcGVuZGluZyBvbiB0aGUgY29udGV4dCwgaXQgbWF5XG4gIGJlIG1vcmUgYXBwcm9wcmlhdGUgdG8gb3ZlcnJpZGUgdGhpcyBhdHRyaWJ1dGUgd2l0aCBgcm9sZT1cImFsZXJ0ZGlhbG9nXCJgLlxuXG4gIElmIGBtb2RhbGAgaXMgc2V0LCB0aGUgZWxlbWVudCB3aWxsIHByZXZlbnQgdGhlIGZvY3VzIGZyb20gZXhpdGluZyB0aGVcbiAgZWxlbWVudC4gSXQgd2lsbCBhbHNvIGVuc3VyZSB0aGF0IGZvY3VzIHJlbWFpbnMgaW4gdGhlIGRpYWxvZy5cblxuICBAaGVybyBoZXJvLnN2Z1xuICBAZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiAgQHBvbHltZXJCZWhhdmlvciBQYXBlckRpYWxvZ0JlaGF2aW9yXG4gKi9cbmV4cG9ydCBjb25zdCBQYXBlckRpYWxvZ0JlaGF2aW9ySW1wbCA9IHtcblxuICBob3N0QXR0cmlidXRlczogeydyb2xlJzogJ2RpYWxvZycsICd0YWJpbmRleCc6ICctMSd9LFxuXG4gIHByb3BlcnRpZXM6IHtcblxuICAgIC8qKlxuICAgICAqIElmIGBtb2RhbGAgaXMgdHJ1ZSwgdGhpcyBpbXBsaWVzIGBuby1jYW5jZWwtb24tb3V0c2lkZS1jbGlja2AsXG4gICAgICogYG5vLWNhbmNlbC1vbi1lc2Mta2V5YCBhbmQgYHdpdGgtYmFja2Ryb3BgLlxuICAgICAqL1xuICAgIG1vZGFsOiB7dHlwZTogQm9vbGVhbiwgdmFsdWU6IGZhbHNlfSxcblxuICAgIF9fcmVhZGllZDoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX1cblxuICB9LFxuXG4gIG9ic2VydmVyczogWydfbW9kYWxDaGFuZ2VkKG1vZGFsLCBfX3JlYWRpZWQpJ10sXG5cbiAgbGlzdGVuZXJzOiB7J3RhcCc6ICdfb25EaWFsb2dDbGljayd9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHt2b2lkfVxuICAgKi9cbiAgcmVhZHk6IGZ1bmN0aW9uKCkge1xuICAgIC8vIE9ubHkgbm93IHRoZXNlIHByb3BlcnRpZXMgY2FuIGJlIHJlYWQuXG4gICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrO1xuICAgIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleSA9IHRoaXMubm9DYW5jZWxPbkVzY0tleTtcbiAgICB0aGlzLl9fcHJldldpdGhCYWNrZHJvcCA9IHRoaXMud2l0aEJhY2tkcm9wO1xuICAgIHRoaXMuX19yZWFkaWVkID0gdHJ1ZTtcbiAgfSxcblxuICBfbW9kYWxDaGFuZ2VkOiBmdW5jdGlvbihtb2RhbCwgcmVhZGllZCkge1xuICAgIC8vIG1vZGFsIGltcGxpZXMgbm9DYW5jZWxPbk91dHNpZGVDbGljaywgbm9DYW5jZWxPbkVzY0tleSBhbmQgd2l0aEJhY2tkcm9wLlxuICAgIC8vIFdlIG5lZWQgdG8gd2FpdCBmb3IgdGhlIGVsZW1lbnQgdG8gYmUgcmVhZHkgYmVmb3JlIHdlIGNhbiByZWFkIHRoZVxuICAgIC8vIHByb3BlcnRpZXMgdmFsdWVzLlxuICAgIGlmICghcmVhZGllZCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChtb2RhbCkge1xuICAgICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uT3V0c2lkZUNsaWNrID0gdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrO1xuICAgICAgdGhpcy5fX3ByZXZOb0NhbmNlbE9uRXNjS2V5ID0gdGhpcy5ub0NhbmNlbE9uRXNjS2V5O1xuICAgICAgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3AgPSB0aGlzLndpdGhCYWNrZHJvcDtcbiAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayA9IHRydWU7XG4gICAgICB0aGlzLm5vQ2FuY2VsT25Fc2NLZXkgPSB0cnVlO1xuICAgICAgdGhpcy53aXRoQmFja2Ryb3AgPSB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAvLyBJZiB0aGUgdmFsdWUgd2FzIGNoYW5nZWQgdG8gZmFsc2UsIGxldCBpdCBmYWxzZS5cbiAgICAgIHRoaXMubm9DYW5jZWxPbk91dHNpZGVDbGljayA9XG4gICAgICAgICAgdGhpcy5ub0NhbmNlbE9uT3V0c2lkZUNsaWNrICYmIHRoaXMuX19wcmV2Tm9DYW5jZWxPbk91dHNpZGVDbGljaztcbiAgICAgIHRoaXMubm9DYW5jZWxPbkVzY0tleSA9XG4gICAgICAgICAgdGhpcy5ub0NhbmNlbE9uRXNjS2V5ICYmIHRoaXMuX19wcmV2Tm9DYW5jZWxPbkVzY0tleTtcbiAgICAgIHRoaXMud2l0aEJhY2tkcm9wID0gdGhpcy53aXRoQmFja2Ryb3AgJiYgdGhpcy5fX3ByZXZXaXRoQmFja2Ryb3A7XG4gICAgfVxuICB9LFxuXG4gIF91cGRhdGVDbG9zaW5nUmVhc29uQ29uZmlybWVkOiBmdW5jdGlvbihjb25maXJtZWQpIHtcbiAgICB0aGlzLmNsb3NpbmdSZWFzb24gPSB0aGlzLmNsb3NpbmdSZWFzb24gfHwge307XG4gICAgdGhpcy5jbG9zaW5nUmVhc29uLmNvbmZpcm1lZCA9IGNvbmZpcm1lZDtcbiAgfSxcblxuICAvKipcbiAgICogV2lsbCBkaXNtaXNzIHRoZSBkaWFsb2cgaWYgdXNlciBjbGlja2VkIG9uIGFuIGVsZW1lbnQgd2l0aCBkaWFsb2ctZGlzbWlzc1xuICAgKiBvciBkaWFsb2ctY29uZmlybSBhdHRyaWJ1dGUuXG4gICAqL1xuICBfb25EaWFsb2dDbGljazogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICAvLyBTZWFyY2ggZm9yIHRoZSBlbGVtZW50IHdpdGggZGlhbG9nLWNvbmZpcm0gb3IgZGlhbG9nLWRpc21pc3MsXG4gICAgLy8gZnJvbSB0aGUgcm9vdCB0YXJnZXQgdW50aWwgdGhpcyAoZXhjbHVkZWQpLlxuICAgIHZhciBwYXRoID0gZG9tKGV2ZW50KS5wYXRoO1xuICAgIGZvciAodmFyIGkgPSAwLCBsID0gcGF0aC5pbmRleE9mKHRoaXMpOyBpIDwgbDsgaSsrKSB7XG4gICAgICB2YXIgdGFyZ2V0ID0gcGF0aFtpXTtcbiAgICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlICYmXG4gICAgICAgICAgKHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1kaXNtaXNzJykgfHxcbiAgICAgICAgICAgdGFyZ2V0Lmhhc0F0dHJpYnV0ZSgnZGlhbG9nLWNvbmZpcm0nKSkpIHtcbiAgICAgICAgdGhpcy5fdXBkYXRlQ2xvc2luZ1JlYXNvbkNvbmZpcm1lZChcbiAgICAgICAgICAgIHRhcmdldC5oYXNBdHRyaWJ1dGUoJ2RpYWxvZy1jb25maXJtJykpO1xuICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gIH1cblxufTtcblxuLyoqIEBwb2x5bWVyQmVoYXZpb3IgKi9cbmV4cG9ydCBjb25zdCBQYXBlckRpYWxvZ0JlaGF2aW9yID1cbiAgICBbSXJvbk92ZXJsYXlCZWhhdmlvciwgUGFwZXJEaWFsb2dCZWhhdmlvckltcGxdO1xuIiwiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG4vKlxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmcuXG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yYCB8IERpYWxvZyBiYWNrZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS1iYWNrZ3JvdW5kLWNvbG9yYFxuYC0tcGFwZXItZGlhbG9nLWNvbG9yYCB8IERpYWxvZyBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tcHJpbWFyeS10ZXh0LWNvbG9yYFxuYC0tcGFwZXItZGlhbG9nYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIGRpYWxvZyB8IGB7fWBcbmAtLXBhcGVyLWRpYWxvZy10aXRsZWAgfCBNaXhpbiBhcHBsaWVkIHRvIHRoZSB0aXRsZSAoYDxoMj5gKSBlbGVtZW50IHwgYHt9YFxuYC0tcGFwZXItZGlhbG9nLWJ1dHRvbi1jb2xvcmAgfCBCdXR0b24gYXJlYSBmb3JlZ3JvdW5kIGNvbG9yIHwgYC0tZGVmYXVsdC1wcmltYXJ5LWNvbG9yYFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tZmxleC1sYXlvdXQvaXJvbi1mbGV4LWxheW91dC5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL3BhcGVyLXN0eWxlcy9kZWZhdWx0LXRoZW1lLmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItc3R5bGVzL3R5cG9ncmFwaHkuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvc2hhZG93LmpzJztcbmNvbnN0ICRfZG9jdW1lbnRDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xuJF9kb2N1bWVudENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ3N0eWxlJywgJ2Rpc3BsYXk6IG5vbmU7Jyk7XG5cbiRfZG9jdW1lbnRDb250YWluZXIuaW5uZXJIVE1MID0gYDxkb20tbW9kdWxlIGlkPVwicGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj5cbiAgPHRlbXBsYXRlPlxuICAgIDxzdHlsZT5cbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1hcmdpbjogMjRweCA0MHB4O1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLXBhcGVyLWRpYWxvZy1iYWNrZ3JvdW5kLWNvbG9yLCB2YXIoLS1wcmltYXJ5LWJhY2tncm91bmQtY29sb3IpKTtcbiAgICAgICAgY29sb3I6IHZhcigtLXBhcGVyLWRpYWxvZy1jb2xvciwgdmFyKC0tcHJpbWFyeS10ZXh0LWNvbG9yKSk7XG5cbiAgICAgICAgQGFwcGx5IC0tcGFwZXItZm9udC1ib2R5MTtcbiAgICAgICAgQGFwcGx5IC0tc2hhZG93LWVsZXZhdGlvbi0xNmRwO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2c7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCopIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuICAgICAgfVxuXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCgubm8tcGFkZGluZykge1xuICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgfVxuXG4gICAgICBcbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKCo6Zmlyc3QtY2hpbGQpIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjRweDtcbiAgICAgIH1cblxuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoKjpsYXN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDI0cHg7XG4gICAgICB9XG5cbiAgICAgIC8qIEluIDEueCwgdGhpcyBzZWxlY3RvciB3YXMgXFxgOmhvc3QgPiA6OmNvbnRlbnQgaDJcXGAuIEluIDIueCA8c2xvdD4gYWxsb3dzXG4gICAgICB0byBzZWxlY3QgZGlyZWN0IGNoaWxkcmVuIG9ubHksIHdoaWNoIGluY3JlYXNlcyB0aGUgd2VpZ2h0IG9mIHRoaXNcbiAgICAgIHNlbGVjdG9yLCBzbyB3ZSBoYXZlIHRvIHJlLWRlZmluZSBmaXJzdC1jaGlsZC9sYXN0LWNoaWxkIG1hcmdpbnMgYmVsb3cuICovXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZChoMikge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBAYXBwbHkgLS1wYXBlci1mb250LXRpdGxlO1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIC8qIEFwcGx5IG1peGluIGFnYWluLCBpbiBjYXNlIGl0IHNldHMgbWFyZ2luLXRvcC4gKi9cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKGgyOmZpcnN0LWNoaWxkKSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI0cHg7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy10aXRsZTtcbiAgICAgIH1cblxuICAgICAgLyogQXBwbHkgbWl4aW4gYWdhaW4sIGluIGNhc2UgaXQgc2V0cyBtYXJnaW4tYm90dG9tLiAqL1xuICAgICAgOmhvc3QgPiA6OnNsb3R0ZWQoaDI6bGFzdC1jaGlsZCkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyNHB4O1xuICAgICAgICBAYXBwbHkgLS1wYXBlci1kaWFsb2ctdGl0bGU7XG4gICAgICB9XG5cbiAgICAgIDpob3N0ID4gOjpzbG90dGVkKC5wYXBlci1kaWFsb2ctYnV0dG9ucyksXG4gICAgICA6aG9zdCA+IDo6c2xvdHRlZCguYnV0dG9ucykge1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHBhZGRpbmc6IDhweCA4cHggOHB4IDI0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcblxuICAgICAgICBjb2xvcjogdmFyKC0tcGFwZXItZGlhbG9nLWJ1dHRvbi1jb2xvciwgdmFyKC0tcHJpbWFyeS1jb2xvcikpO1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1ob3Jpem9udGFsO1xuICAgICAgICBAYXBwbHkgLS1sYXlvdXQtZW5kLWp1c3RpZmllZDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuICA8L3RlbXBsYXRlPlxuPC9kb20tbW9kdWxlPmA7XG5cbmRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoJF9kb2N1bWVudENvbnRhaW5lci5jb250ZW50KTtcbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvcGFwZXItZGlhbG9nLWJlaGF2aW9yL3BhcGVyLWRpYWxvZy1zaGFyZWQtc3R5bGVzLmpzJztcblxuaW1wb3J0IHtOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL25lb24tYW5pbWF0aW9uL25lb24tYW5pbWF0aW9uLXJ1bm5lci1iZWhhdmlvci5qcyc7XG5pbXBvcnQge1BhcGVyRGlhbG9nQmVoYXZpb3J9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bRGlhbG9nc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2RpYWxvZ3MuaHRtbClcblxuYDxwYXBlci1kaWFsb2c+YCBpcyBhIGRpYWxvZyB3aXRoIE1hdGVyaWFsIERlc2lnbiBzdHlsaW5nIGFuZCBvcHRpb25hbFxuYW5pbWF0aW9ucyB3aGVuIGl0IGlzIG9wZW5lZCBvciBjbG9zZWQuIEl0IHByb3ZpZGVzIHN0eWxlcyBmb3IgYSBoZWFkZXIsIGNvbnRlbnRcbmFyZWEsIGFuZCBhbiBhY3Rpb24gYXJlYSBmb3IgYnV0dG9ucy4gWW91IGNhbiB1c2UgdGhlXG5gPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPmAgZWxlbWVudCAoaW4gaXRzIG93biByZXBvc2l0b3J5KSBpZiB5b3UgbmVlZCBhXG5zY3JvbGxpbmcgY29udGVudCBhcmVhLiBUbyBhdXRvZm9jdXMgYSBzcGVjaWZpYyBjaGlsZCBlbGVtZW50IGFmdGVyIG9wZW5pbmcgdGhlXG5kaWFsb2csIGdpdmUgaXQgdGhlIGBhdXRvZm9jdXNgIGF0dHJpYnV0ZS4gU2VlIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgIGFuZFxuYFBvbHltZXIuSXJvbk92ZXJsYXlCZWhhdmlvcmAgZm9yIHNwZWNpZmljcy5cblxuRm9yIGV4YW1wbGUsIHRoZSBmb2xsb3dpbmcgY29kZSBpbXBsZW1lbnRzIGEgZGlhbG9nIHdpdGggYSBoZWFkZXIsIHNjcm9sbGluZ1xuY29udGVudCBhcmVhIGFuZCBidXR0b25zLiBGb2N1cyB3aWxsIGJlIGdpdmVuIHRvIHRoZSBgZGlhbG9nLWNvbmZpcm1gIGJ1dHRvblxud2hlbiB0aGUgZGlhbG9nIGlzIG9wZW5lZC5cblxuICAgIDxwYXBlci1kaWFsb2c+XG4gICAgICA8aDI+SGVhZGVyPC9oMj5cbiAgICAgIDxwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZT5cbiAgICAgICAgTG9yZW0gaXBzdW0uLi5cbiAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8ZGl2IGNsYXNzPVwiYnV0dG9uc1wiPlxuICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1kaXNtaXNzPkNhbmNlbDwvcGFwZXItYnV0dG9uPlxuICAgICAgICA8cGFwZXItYnV0dG9uIGRpYWxvZy1jb25maXJtIGF1dG9mb2N1cz5BY2NlcHQ8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nPlxuXG4jIyMgU3R5bGluZ1xuXG5TZWUgdGhlIGRvY3MgZm9yIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgIGZvciB0aGUgY3VzdG9tIHByb3BlcnRpZXNcbmF2YWlsYWJsZSBmb3Igc3R5bGluZyB0aGlzIGVsZW1lbnQuXG5cbiMjIyBBbmltYXRpb25zXG5cblNldCB0aGUgYGVudHJ5LWFuaW1hdGlvbmAgYW5kL29yIGBleGl0LWFuaW1hdGlvbmAgYXR0cmlidXRlcyB0byBhZGQgYW4gYW5pbWF0aW9uXG53aGVuIHRoZSBkaWFsb2cgaXMgb3BlbmVkIG9yIGNsb3NlZC4gU2VlIHRoZSBkb2N1bWVudGF0aW9uIGluXG5bUG9seW1lckVsZW1lbnRzL25lb24tYW5pbWF0aW9uXShodHRwczovL2dpdGh1Yi5jb20vUG9seW1lckVsZW1lbnRzL25lb24tYW5pbWF0aW9uKVxuZm9yIG1vcmUgaW5mby5cblxuRm9yIGV4YW1wbGU6XG5cbiAgICA8c2NyaXB0IHR5cGU9XCJtb2R1bGVcIj5cbiAgICAgIGltcG9ydCAnQHBvbHltZXIvbmVvbi1hbmltYXRpb24vYW5pbWF0aW9ucy9mYWRlLW91dC1hbmltYXRpb24uanMnO1xuICAgICAgaW1wb3J0ICdAcG9seW1lci9uZW9uLWFuaW1hdGlvbi9hbmltYXRpb25zL3NjYWxlLXVwLWFuaW1hdGlvbi5qcyc7XG4gICAgPC9zY3JpcHQ+XG5cbiAgICA8cGFwZXItZGlhbG9nIGVudHJ5LWFuaW1hdGlvbj1cInNjYWxlLXVwLWFuaW1hdGlvblwiXG4gICAgICAgICAgICAgICAgICBleGl0LWFuaW1hdGlvbj1cImZhZGUtb3V0LWFuaW1hdGlvblwiPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8ZGl2PkRpYWxvZyBib2R5PC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2c+XG5cbiMjIyBBY2Nlc3NpYmlsaXR5XG5cblNlZSB0aGUgZG9jcyBmb3IgYFBvbHltZXIuUGFwZXJEaWFsb2dCZWhhdmlvcmAgZm9yIGFjY2Vzc2liaWxpdHkgZmVhdHVyZXNcbmltcGxlbWVudGVkIGJ5IHRoaXMgZWxlbWVudC5cblxuQGdyb3VwIFBhcGVyIEVsZW1lbnRzXG5AZWxlbWVudCBwYXBlci1kaWFsb2dcbkBoZXJvIGhlcm8uc3ZnXG5AZGVtbyBkZW1vL2luZGV4Lmh0bWxcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZSBpbmNsdWRlPVwicGFwZXItZGlhbG9nLXNoYXJlZC1zdHlsZXNcIj48L3N0eWxlPlxuICAgIDxzbG90Pjwvc2xvdD5cbmAsXG5cbiAgaXM6ICdwYXBlci1kaWFsb2cnLFxuICBiZWhhdmlvcnM6IFtQYXBlckRpYWxvZ0JlaGF2aW9yLCBOZW9uQW5pbWF0aW9uUnVubmVyQmVoYXZpb3JdLFxuICBsaXN0ZW5lcnM6IHsnbmVvbi1hbmltYXRpb24tZmluaXNoJzogJ19vbk5lb25BbmltYXRpb25GaW5pc2gnfSxcblxuICBfcmVuZGVyT3BlbmVkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbigpO1xuICAgIHRoaXMucGxheUFuaW1hdGlvbignZW50cnknKTtcbiAgfSxcblxuICBfcmVuZGVyQ2xvc2VkOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLmNhbmNlbEFuaW1hdGlvbigpO1xuICAgIHRoaXMucGxheUFuaW1hdGlvbignZXhpdCcpO1xuICB9LFxuXG4gIF9vbk5lb25BbmltYXRpb25GaW5pc2g6IGZ1bmN0aW9uKCkge1xuICAgIGlmICh0aGlzLm9wZW5lZCkge1xuICAgICAgdGhpcy5fZmluaXNoUmVuZGVyT3BlbmVkKCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2ZpbmlzaFJlbmRlckNsb3NlZCgpO1xuICAgIH1cbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7OztBQVVBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQXFDQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFSQTtBQVlBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFqRkE7QUFxRkE7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7Ozs7Ozs7Ozs7Ozs7QUFhQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBdUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEdBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQThEQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQTFCQTs7OztBIiwic291cmNlUm9vdCI6IiJ9