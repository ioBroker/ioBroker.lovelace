(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ha-mfa-module-setup-flow"],{

/***/ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js ***!
  \**********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_paper_styles_default_theme_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-styles/default-theme.js */ "./node_modules/@polymer/paper-styles/default-theme.js");
/* harmony import */ var _polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-behavior/paper-dialog-behavior.js */ "./node_modules/@polymer/paper-dialog-behavior/paper-dialog-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n\n      :host {\n        display: block;\n        @apply --layout-relative;\n      }\n\n      :host(.is-scrolled:not(:first-child))::before {\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      :host(.can-scroll:not(.scrolled-to-bottom):not(:last-child))::after {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        right: 0;\n        height: 1px;\n        background: var(--divider-color);\n      }\n\n      .scrollable {\n        padding: 0 24px;\n\n        @apply --layout-scroll;\n        @apply --paper-dialog-scrollable;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n    </style>\n\n    <div id=\"scrollable\" class=\"scrollable\" on-scroll=\"updateScrollState\">\n      <slot></slot>\n    </div>\n"]);

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

`paper-dialog-scrollable` implements a scrolling area used in a Material Design
dialog. It shows a divider at the top and/or bottom indicating more content,
depending on scroll position. Use this together with elements implementing
`Polymer.PaperDialogBehavior`.

    <paper-dialog-impl>
      <h2>Header</h2>
      <paper-dialog-scrollable>
        Lorem ipsum...
      </paper-dialog-scrollable>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

It shows a top divider after scrolling if it is not the first child in its
parent container, indicating there is more content above. It shows a bottom
divider if it is scrollable and it is not the last child in its parent
container, indicating there is more content below. The bottom divider is hidden
if it is scrolled to the bottom.

If `paper-dialog-scrollable` is not a direct child of the element implementing
`Polymer.PaperDialogBehavior`, remember to set the `dialogElement`:

    <paper-dialog-impl id="myDialog">
      <h2>Header</h2>
      <div class="my-content-wrapper">
        <h4>Sub-header</h4>
        <paper-dialog-scrollable>
          Lorem ipsum...
        </paper-dialog-scrollable>
      </div>
      <div class="buttons">
        <paper-button>OK</paper-button>
      </div>
    </paper-dialog-impl>

    <script>
      var scrollable =
Polymer.dom(myDialog).querySelector('paper-dialog-scrollable');
      scrollable.dialogElement = myDialog;
    </script>

### Styling
The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-dialog-scrollable` | Mixin for the scrollable content | {}

@group Paper Elements
@element paper-dialog-scrollable
@demo demo/index.html
@hero hero.svg
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_5__["html"])(_templateObject()),
  is: 'paper-dialog-scrollable',
  properties: {
    /**
     * The dialog element that implements `Polymer.PaperDialogBehavior`
     * containing this element.
     * @type {?Node}
     */
    dialogElement: {
      type: Object
    }
  },

  /**
   * Returns the scrolling element.
   */
  get scrollTarget() {
    return this.$.scrollable;
  },

  ready: function ready() {
    this._ensureTarget();

    this.classList.add('no-padding');
  },
  attached: function attached() {
    this._ensureTarget();

    requestAnimationFrame(this.updateScrollState.bind(this));
  },
  updateScrollState: function updateScrollState() {
    this.toggleClass('is-scrolled', this.scrollTarget.scrollTop > 0);
    this.toggleClass('can-scroll', this.scrollTarget.offsetHeight < this.scrollTarget.scrollHeight);
    this.toggleClass('scrolled-to-bottom', this.scrollTarget.scrollTop + this.scrollTarget.offsetHeight >= this.scrollTarget.scrollHeight);
  },
  _ensureTarget: function _ensureTarget() {
    // Read parentElement instead of parentNode in order to skip shadowRoots.
    this.dialogElement = this.dialogElement || this.parentElement; // Check if dialog implements paper-dialog-behavior. If not, fit
    // scrollTarget to host.

    if (this.dialogElement && this.dialogElement.behaviors && this.dialogElement.behaviors.indexOf(_polymer_paper_dialog_behavior_paper_dialog_behavior_js__WEBPACK_IMPORTED_MODULE_3__["PaperDialogBehaviorImpl"]) >= 0) {
      this.dialogElement.sizingTarget = this.scrollTarget;
      this.scrollTarget.classList.remove('fit');
    } else if (this.dialogElement) {
      this.scrollTarget.classList.add('fit');
    }
  }
});

/***/ }),

/***/ "./src/components/dialog/ha-iron-focusables-helper.js":
/*!************************************************************!*\
  !*** ./src/components/dialog/ha-iron-focusables-helper.js ***!
  \************************************************************/
/*! exports provided: HaIronFocusablesHelper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaIronFocusablesHelper", function() { return HaIronFocusablesHelper; });
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-overlay-behavior/iron-focusables-helper.js */ "./node_modules/@polymer/iron-overlay-behavior/iron-focusables-helper.js");
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

/*
  Fixes issue with not using shadow dom properly in iron-overlay-behavior/icon-focusables-helper.js
*/


var HaIronFocusablesHelper = {
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
      return _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._sortByTabIndex(result);
    }

    return result;
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
    if (node.nodeType !== Node.ELEMENT_NODE || !_polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._isVisible(node)) {
      return false;
    }

    var element =
    /** @type {!HTMLElement} */
    node;

    var tabIndex = _polymer_iron_overlay_behavior_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_1__["IronFocusablesHelper"]._normalizedTabIndex(element);

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

    if (element.localName === "content" || element.localName === "slot") {
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element).getDistributedNodes();
    } else {
      // /////////////////////////
      // Use shadow root if possible, will check for distributed nodes.
      // THIS IS THE CHANGED LINE
      children = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_0__["dom"])(element.shadowRoot || element.root || element).children; // /////////////////////////
    }

    for (var i = 0; i < children.length; i++) {
      // Ensure method is always invoked to collect tabbable children.
      needsSort = this._collectTabbableNodes(children[i], result) || needsSort;
    }

    return needsSort;
  }
};

/***/ }),

/***/ "./src/components/dialog/ha-paper-dialog.ts":
/*!**************************************************!*\
  !*** ./src/components/dialog/ha-paper-dialog.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDialog", function() { return HaPaperDialog; });
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/class */ "./node_modules/@polymer/polymer/lib/legacy/class.js");
/* harmony import */ var _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-iron-focusables-helper.js */ "./src/components/dialog/ha-iron-focusables-helper.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



 // tslint:disable-next-line

var paperDialogClass = customElements.get("paper-dialog"); // behavior that will override existing iron-overlay-behavior and call the fixed implementation

var haTabFixBehaviorImpl = {
  get _focusableNodes() {
    return _ha_iron_focusables_helper_js__WEBPACK_IMPORTED_MODULE_2__["HaIronFocusablesHelper"].getTabbableNodes(this);
  }

}; // paper-dialog that uses the haTabFixBehaviorImpl behvaior
// export class HaPaperDialog extends paperDialogClass {}
// @ts-ignore

var HaPaperDialog =
/*#__PURE__*/
function (_mixinBehaviors) {
  _inherits(HaPaperDialog, _mixinBehaviors);

  function HaPaperDialog() {
    _classCallCheck(this, HaPaperDialog);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPaperDialog).apply(this, arguments));
  }

  return HaPaperDialog;
}(Object(_polymer_polymer_lib_legacy_class__WEBPACK_IMPORTED_MODULE_1__["mixinBehaviors"])([haTabFixBehaviorImpl], paperDialogClass));
customElements.define("ha-paper-dialog", HaPaperDialog);

/***/ }),

/***/ "./src/panels/profile/ha-mfa-module-setup-flow.js":
/*!********************************************************!*\
  !*** ./src/panels/profile/ha-mfa-module-setup-flow.js ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _components_ha_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-form */ "./src/components/ha-form.js");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/ha-markdown */ "./src/components/ha-markdown.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style-dialog\">\n        .error {\n          color: red;\n        }\n        ha-paper-dialog {\n          max-width: 500px;\n        }\n        ha-markdown img:first-child:last-child,\n        ha-markdown svg:first-child:last-child {\n          display: block;\n          margin: 0 auto;\n        }\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        .init-spinner {\n          padding: 10px 100px 34px;\n          text-align: center;\n        }\n        .submit-spinner {\n          margin-right: 16px;\n        }\n      </style>\n      <ha-paper-dialog\n        id=\"dialog\"\n        with-backdrop=\"\"\n        opened=\"{{_opened}}\"\n        on-opened-changed=\"_openedChanged\"\n      >\n        <h2>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'abort')]]\">\n            [[localize('ui.panel.profile.mfa_setup.title_aborted')]]\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'create_entry')]]\">\n            [[localize('ui.panel.profile.mfa_setup.title_success')]]\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'form')]]\">\n            [[_computeStepTitle(localize, _step)]]\n          </template>\n        </h2>\n        <paper-dialog-scrollable>\n          <template is=\"dom-if\" if=\"[[_errorMsg]]\">\n            <div class=\"error\">[[_errorMsg]]</div>\n          </template>\n          <template is=\"dom-if\" if=\"[[!_step]]\">\n            <div class=\"init-spinner\">\n              <paper-spinner active></paper-spinner>\n            </div>\n          </template>\n          <template is=\"dom-if\" if=\"[[_step]]\">\n            <template is=\"dom-if\" if=\"[[_equals(_step.type, 'abort')]]\">\n              <ha-markdown\n                content=\"[[_computeStepAbortedReason(localize, _step)]]\"\n              ></ha-markdown>\n            </template>\n\n            <template is=\"dom-if\" if=\"[[_equals(_step.type, 'create_entry')]]\">\n              <p>\n                [[localize('ui.panel.profile.mfa_setup.step_done', 'step',\n                _step.title)]]\n              </p>\n            </template>\n\n            <template is=\"dom-if\" if=\"[[_equals(_step.type, 'form')]]\">\n              <template\n                is=\"dom-if\"\n                if=\"[[_computeStepDescription(localize, _step)]]\"\n              >\n                <ha-markdown\n                  content=\"[[_computeStepDescription(localize, _step)]]\"\n                  allow-svg\n                ></ha-markdown>\n              </template>\n\n              <ha-form\n                data=\"{{_stepData}}\"\n                schema=\"[[_step.data_schema]]\"\n                error=\"[[_step.errors]]\"\n                compute-label=\"[[_computeLabelCallback(localize, _step)]]\"\n                compute-error=\"[[_computeErrorCallback(localize, _step)]]\"\n              ></ha-form>\n            </template>\n          </template>\n        </paper-dialog-scrollable>\n        <div class=\"buttons\">\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'abort')]]\">\n            <mwc-button on-click=\"_flowDone\"\n              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button\n            >\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'create_entry')]]\">\n            <mwc-button on-click=\"_flowDone\"\n              >[[localize('ui.panel.profile.mfa_setup.close')]]</mwc-button\n            >\n          </template>\n          <template is=\"dom-if\" if=\"[[_equals(_step.type, 'form')]]\">\n            <template is=\"dom-if\" if=\"[[_loading]]\">\n              <div class=\"submit-spinner\">\n                <paper-spinner active></paper-spinner>\n              </div>\n            </template>\n            <template is=\"dom-if\" if=\"[[!_loading]]\">\n              <mwc-button on-click=\"_submitStep\"\n                >[[localize('ui.panel.profile.mfa_setup.submit')]]</mwc-button\n              >\n            </template>\n          </template>\n        </div>\n      </ha-paper-dialog>\n    "]);

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












var instance = 0;
/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaMfaModuleSetupFlow =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaMfaModuleSetupFlow, _LocalizeMixin);

  function HaMfaModuleSetupFlow() {
    _classCallCheck(this, HaMfaModuleSetupFlow);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaMfaModuleSetupFlow).apply(this, arguments));
  }

  _createClass(HaMfaModuleSetupFlow, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaMfaModuleSetupFlow.prototype), "ready", this).call(this);

      this.addEventListener("keypress", function (ev) {
        if (ev.keyCode === 13) {
          _this._submitStep();
        }
      });
    }
  }, {
    key: "showDialog",
    value: function showDialog(_ref) {
      var _this2 = this;

      var hass = _ref.hass,
          continueFlowId = _ref.continueFlowId,
          mfaModuleId = _ref.mfaModuleId,
          dialogClosedCallback = _ref.dialogClosedCallback;
      this.hass = hass;
      this._instance = instance++;
      this._dialogClosedCallback = dialogClosedCallback;
      this._createdFromHandler = !!mfaModuleId;
      this._loading = true;
      this._opened = true;
      var fetchStep = continueFlowId ? this.hass.callWS({
        type: "auth/setup_mfa",
        flow_id: continueFlowId
      }) : this.hass.callWS({
        type: "auth/setup_mfa",
        mfa_module_id: mfaModuleId
      });
      var curInstance = this._instance;
      fetchStep.then(function (step) {
        if (curInstance !== _this2._instance) return;

        _this2._processStep(step);

        _this2._loading = false; // When the flow changes, center the dialog.
        // Don't do it on each step or else the dialog keeps bouncing.

        setTimeout(function () {
          return _this2.$.dialog.center();
        }, 0);
      });
    }
  }, {
    key: "_submitStep",
    value: function _submitStep() {
      var _this3 = this;

      this._loading = true;
      this._errorMsg = null;
      var curInstance = this._instance;
      this.hass.callWS({
        type: "auth/setup_mfa",
        flow_id: this._step.flow_id,
        user_input: this._stepData
      }).then(function (step) {
        if (curInstance !== _this3._instance) return;

        _this3._processStep(step);

        _this3._loading = false;
      }, function (err) {
        _this3._errorMsg = err && err.body && err.body.message || "Unknown error occurred";
        _this3._loading = false;
      });
    }
  }, {
    key: "_processStep",
    value: function _processStep(step) {
      if (!step.errors) step.errors = {};
      this._step = step; // We got a new form if there are no errors.

      if (Object.keys(step.errors).length === 0) {
        this._stepData = {};
      }
    }
  }, {
    key: "_flowDone",
    value: function _flowDone() {
      this._opened = false;
      var flowFinished = this._step && ["create_entry", "abort"].includes(this._step.type);

      if (this._step && !flowFinished && this._createdFromHandler) {// console.log('flow not finish');
      }

      this._dialogClosedCallback({
        flowFinished: flowFinished
      });

      this._errorMsg = null;
      this._step = null;
      this._stepData = {};
      this._dialogClosedCallback = null;
    }
  }, {
    key: "_equals",
    value: function _equals(a, b) {
      return a === b;
    }
  }, {
    key: "_openedChanged",
    value: function _openedChanged(ev) {
      // Closed dialog by clicking on the overlay
      if (this._step && !ev.detail.value) {
        this._flowDone();
      }
    }
  }, {
    key: "_computeStepAbortedReason",
    value: function _computeStepAbortedReason(localize, step) {
      return localize("component.auth.mfa_setup.".concat(step.handler, ".abort.").concat(step.reason));
    }
  }, {
    key: "_computeStepTitle",
    value: function _computeStepTitle(localize, step) {
      return localize("component.auth.mfa_setup.".concat(step.handler, ".step.").concat(step.step_id, ".title")) || "Setup Multi-factor Authentication";
    }
  }, {
    key: "_computeStepDescription",
    value: function _computeStepDescription(localize, step) {
      var args = ["component.auth.mfa_setup.".concat(step.handler, ".step.").concat(step.step_id, ".description")];
      var placeholders = step.description_placeholders || {};
      Object.keys(placeholders).forEach(function (key) {
        args.push(key);
        args.push(placeholders[key]);
      });
      return localize.apply(void 0, args);
    }
  }, {
    key: "_computeLabelCallback",
    value: function _computeLabelCallback(localize, step) {
      // Returns a callback for ha-form to calculate labels per schema object
      return function (schema) {
        return localize("component.auth.mfa_setup.".concat(step.handler, ".step.").concat(step.step_id, ".data.").concat(schema.name)) || schema.name;
      };
    }
  }, {
    key: "_computeErrorCallback",
    value: function _computeErrorCallback(localize, step) {
      // Returns a callback for ha-form to calculate error messages
      return function (error) {
        return localize("component.auth.mfa_setup.".concat(step.handler, ".error.").concat(error)) || error;
      };
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        _hass: Object,
        _dialogClosedCallback: Function,
        _instance: Number,
        _loading: {
          type: Boolean,
          value: false
        },
        // Error message when can't talk to server etc
        _errorMsg: String,
        _opened: {
          type: Boolean,
          value: false
        },
        _step: {
          type: Object,
          value: null
        },

        /*
         * Store user entered data.
         */
        _stepData: Object
      };
    }
  }]);

  return HaMfaModuleSetupFlow;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_10__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])));

customElements.define("ha-mfa-module-setup-flow", HaMfaModuleSetupFlow);

/***/ })

}]);
//# sourceMappingURL=ha-mfa-module-setup-flow.chunk.js.map