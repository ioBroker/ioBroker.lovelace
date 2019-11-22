(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["voice-command-dialog"],{

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

/***/ "./src/common/dom/speech-recognition.ts":
/*!**********************************************!*\
  !*** ./src/common/dom/speech-recognition.ts ***!
  \**********************************************/
/*! exports provided: SpeechRecognition, SpeechGrammarList, SpeechRecognitionEvent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognition", function() { return SpeechRecognition; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechGrammarList", function() { return SpeechGrammarList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpeechRecognitionEvent", function() { return SpeechRecognitionEvent; });
/* tslint:disable */
// @ts-ignore
var SpeechRecognition = // @ts-ignore
window.SpeechRecognition || window.webkitSpeechRecognition; // @ts-ignore

var SpeechGrammarList = // @ts-ignore
window.SpeechGrammarList || window.webkitSpeechGrammarList; // @ts-ignore

var SpeechRecognitionEvent = // @ts-ignore
window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;
/* tslint:enable */

/***/ }),

/***/ "./src/common/util/uid.ts":
/*!********************************!*\
  !*** ./src/common/util/uid.ts ***!
  \********************************/
/*! exports provided: uid */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "uid", function() { return uid; });
function s4() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
}

function uid() {
  return s4() + s4() + s4() + s4() + s4();
}

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

/***/ "./src/data/conversation.ts":
/*!**********************************!*\
  !*** ./src/data/conversation.ts ***!
  \**********************************/
/*! exports provided: processText, getAgentInfo, setConversationOnboarding */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "processText", function() { return processText; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAgentInfo", function() { return getAgentInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setConversationOnboarding", function() { return setConversationOnboarding; });
var processText = function processText(hass, text, conversation_id) {
  return hass.callWS({
    type: "conversation/process",
    text: text,
    conversation_id: conversation_id
  });
};
var getAgentInfo = function getAgentInfo(hass) {
  return hass.callWS({
    type: "conversation/agent/info"
  });
};
var setConversationOnboarding = function setConversationOnboarding(hass, value) {
  return hass.callWS({
    type: "conversation/onboarding/set",
    shown: value
  });
};

/***/ }),

/***/ "./src/dialogs/voice-command-dialog/ha-voice-command-dialog.ts":
/*!*********************************************************************!*\
  !*** ./src/dialogs/voice-command-dialog/ha-voice-command-dialog.ts ***!
  \*********************************************************************/
/*! exports provided: HaVoiceCommandDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaVoiceCommandDialog", function() { return HaVoiceCommandDialog; });
/* harmony import */ var _polymer_iron_icon_iron_icon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-icon/iron-icon */ "./node_modules/@polymer/iron-icon/iron-icon.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _components_dialog_ha_paper_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/dialog/ha-paper-dialog */ "./src/components/dialog/ha-paper-dialog.ts");
/* harmony import */ var _polymer_paper_dialog_scrollable_paper_dialog_scrollable__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-dialog-scrollable/paper-dialog-scrollable */ "./node_modules/@polymer/paper-dialog-scrollable/paper-dialog-scrollable.js");
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");
/* harmony import */ var _common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/dom/speech-recognition */ "./src/common/dom/speech-recognition.ts");
/* harmony import */ var _data_conversation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../data/conversation */ "./src/data/conversation.ts");
/* harmony import */ var lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lit-html/directives/class-map */ "./node_modules/lit-html/directives/class-map.js");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _common_util_uid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/util/uid */ "./src/common/util/uid.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n        :host {\n          z-index: 103;\n        }\n\n        paper-icon-button {\n          color: var(--secondary-text-color);\n        }\n\n        paper-icon-button[active] {\n          color: var(--primary-color);\n        }\n\n        .input {\n          margin: 0 0 16px 0;\n        }\n\n        ha-paper-dialog {\n          width: 450px;\n        }\n        a.button {\n          text-decoration: none;\n        }\n        a.button > mwc-button {\n          width: 100%;\n        }\n        .onboarding {\n          padding: 0 24px;\n        }\n        paper-dialog-scrollable.top-border::before {\n          content: \"\";\n          position: absolute;\n          top: 0;\n          left: 0;\n          right: 0;\n          height: 1px;\n          background: var(--divider-color);\n        }\n        .side-by-side {\n          display: flex;\n          margin: 8px 0;\n        }\n        .side-by-side > * {\n          flex: 1 0;\n          padding: 4px;\n        }\n        .attribution {\n          color: var(--secondary-text-color);\n        }\n        .message {\n          font-size: 18px;\n          clear: both;\n          margin: 8px 0;\n          padding: 8px;\n          border-radius: 15px;\n        }\n\n        .message.user {\n          margin-left: 24px;\n          float: right;\n          text-align: right;\n          border-bottom-right-radius: 0px;\n          background-color: var(--light-primary-color);\n          color: var(--primary-text-color);\n        }\n\n        .message.hass {\n          margin-right: 24px;\n          float: left;\n          border-bottom-left-radius: 0px;\n          background-color: var(--primary-color);\n          color: var(--text-primary-color);\n        }\n\n        .message a {\n          color: var(--text-primary-color);\n        }\n\n        .message img {\n          width: 100%;\n          border-radius: 10px;\n        }\n\n        .message.error {\n          background-color: var(--google-red-500);\n          color: var(--text-primary-color);\n        }\n\n        .interimTranscript {\n          color: var(--secondary-text-color);\n        }\n\n        .bouncer {\n          width: 40px;\n          height: 40px;\n          position: absolute;\n          top: 0;\n        }\n        .double-bounce1,\n        .double-bounce2 {\n          width: 40px;\n          height: 40px;\n          border-radius: 50%;\n          background-color: var(--primary-color);\n          opacity: 0.2;\n          position: absolute;\n          top: 0;\n          left: 0;\n          -webkit-animation: sk-bounce 2s infinite ease-in-out;\n          animation: sk-bounce 2s infinite ease-in-out;\n        }\n        .double-bounce2 {\n          -webkit-animation-delay: -1s;\n          animation-delay: -1s;\n        }\n        @-webkit-keyframes sk-bounce {\n          0%,\n          100% {\n            -webkit-transform: scale(0);\n          }\n          50% {\n            -webkit-transform: scale(1);\n          }\n        }\n        @keyframes sk-bounce {\n          0%,\n          100% {\n            transform: scale(0);\n            -webkit-transform: scale(0);\n          }\n          50% {\n            transform: scale(1);\n            -webkit-transform: scale(1);\n          }\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          .message {\n            font-size: 16px;\n          }\n        }\n      "]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n                <a\n                  href=", "\n                  class=\"attribution\"\n                  target=\"_blank\"\n                  >", "</a\n                >\n              "]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n                          <div class=\"bouncer\">\n                            <div class=\"double-bounce1\"></div>\n                            <div class=\"double-bounce2\"></div>\n                          </div>\n                        "]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n                  <span suffix=\"\" slot=\"suffix\">\n                    ", "\n                    <paper-icon-button\n                      .active=", "\n                      icon=\"hass:microphone\"\n                      @click=", "\n                    >\n                    </paper-icon-button>\n                  </span>\n                "]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n                <div class=\"message user\">\n                  <span\n                    class=", "\n                    >", "</span\n                  >", "\n                </div>\n              "]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"", "\">\n                ", "\n              </div>\n            "]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n              <div class=\"onboarding\">\n                ", "\n                <div class=\"side-by-side\" @click=", ">\n                  <a\n                    class=\"button\"\n                    href=\"", "\"\n                    target=\"_blank\"\n                    ><mwc-button unelevated>Yes!</mwc-button></a\n                  >\n                  <mwc-button outlined>No</mwc-button>\n                </div>\n              </div>\n            "]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        paper-dialog-scrollable {\n          --paper-dialog-scrollable: {\n            -webkit-overflow-scrolling: auto;\n            max-height: 50vh !important;\n          }\n        }\n\n        paper-dialog-scrollable.can-scroll {\n          --paper-dialog-scrollable: {\n            -webkit-overflow-scrolling: touch;\n            max-height: 50vh !important;\n          }\n        }\n\n        @media all and (max-width: 450px), all and (max-height: 500px) {\n          paper-dialog-scrollable {\n            --paper-dialog-scrollable: {\n              -webkit-overflow-scrolling: auto;\n              max-height: calc(100vh - 175px) !important;\n            }\n          }\n\n          paper-dialog-scrollable.can-scroll {\n            --paper-dialog-scrollable: {\n              -webkit-overflow-scrolling: touch;\n              max-height: calc(100vh - 175px) !important;\n            }\n          }\n        }\n      </style>\n      <ha-paper-dialog\n        with-backdrop\n        .opened=", "\n        @opened-changed=", "\n      >\n        ", "\n        <paper-dialog-scrollable\n          id=\"messages\"\n          class=", "\n        >\n          ", "\n          ", "\n        </paper-dialog-scrollable>\n        <div class=\"input\">\n          <paper-input\n            @keyup=", "\n            label=\"", "\"\n            autofocus\n          >\n            ", "\n          </paper-input>\n          ", "\n        </div>\n      </ha-paper-dialog>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _decorate(decorators, factory, superClass, mixins) { var api = _getDecoratorsApi(); if (mixins) { for (var i = 0; i < mixins.length; i++) { api = mixins[i](api); } } var r = factory(function initialize(O) { api.initializeInstanceElements(O, decorated.elements); }, superClass); var decorated = api.decorateClass(_coalesceClassElements(r.d.map(_createElementDescriptor)), decorators); api.initializeClassElements(r.F, decorated.elements); return api.runClassFinishers(r.F, decorated.finishers); }

function _getDecoratorsApi() { _getDecoratorsApi = function _getDecoratorsApi() { return api; }; var api = { elementsDefinitionOrder: [["method"], ["field"]], initializeInstanceElements: function initializeInstanceElements(O, elements) { ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { if (element.kind === kind && element.placement === "own") { this.defineClassElement(O, element); } }, this); }, this); }, initializeClassElements: function initializeClassElements(F, elements) { var proto = F.prototype; ["method", "field"].forEach(function (kind) { elements.forEach(function (element) { var placement = element.placement; if (element.kind === kind && (placement === "static" || placement === "prototype")) { var receiver = placement === "static" ? F : proto; this.defineClassElement(receiver, element); } }, this); }, this); }, defineClassElement: function defineClassElement(receiver, element) { var descriptor = element.descriptor; if (element.kind === "field") { var initializer = element.initializer; descriptor = { enumerable: descriptor.enumerable, writable: descriptor.writable, configurable: descriptor.configurable, value: initializer === void 0 ? void 0 : initializer.call(receiver) }; } Object.defineProperty(receiver, element.key, descriptor); }, decorateClass: function decorateClass(elements, decorators) { var newElements = []; var finishers = []; var placements = { "static": [], prototype: [], own: [] }; elements.forEach(function (element) { this.addElementPlacement(element, placements); }, this); elements.forEach(function (element) { if (!_hasDecorators(element)) return newElements.push(element); var elementFinishersExtras = this.decorateElement(element, placements); newElements.push(elementFinishersExtras.element); newElements.push.apply(newElements, elementFinishersExtras.extras); finishers.push.apply(finishers, elementFinishersExtras.finishers); }, this); if (!decorators) { return { elements: newElements, finishers: finishers }; } var result = this.decorateConstructor(newElements, decorators); finishers.push.apply(finishers, result.finishers); result.finishers = finishers; return result; }, addElementPlacement: function addElementPlacement(element, placements, silent) { var keys = placements[element.placement]; if (!silent && keys.indexOf(element.key) !== -1) { throw new TypeError("Duplicated element (" + element.key + ")"); } keys.push(element.key); }, decorateElement: function decorateElement(element, placements) { var extras = []; var finishers = []; for (var decorators = element.decorators, i = decorators.length - 1; i >= 0; i--) { var keys = placements[element.placement]; keys.splice(keys.indexOf(element.key), 1); var elementObject = this.fromElementDescriptor(element); var elementFinisherExtras = this.toElementFinisherExtras((0, decorators[i])(elementObject) || elementObject); element = elementFinisherExtras.element; this.addElementPlacement(element, placements); if (elementFinisherExtras.finisher) { finishers.push(elementFinisherExtras.finisher); } var newExtras = elementFinisherExtras.extras; if (newExtras) { for (var j = 0; j < newExtras.length; j++) { this.addElementPlacement(newExtras[j], placements); } extras.push.apply(extras, newExtras); } } return { element: element, finishers: finishers, extras: extras }; }, decorateConstructor: function decorateConstructor(elements, decorators) { var finishers = []; for (var i = decorators.length - 1; i >= 0; i--) { var obj = this.fromClassDescriptor(elements); var elementsAndFinisher = this.toClassDescriptor((0, decorators[i])(obj) || obj); if (elementsAndFinisher.finisher !== undefined) { finishers.push(elementsAndFinisher.finisher); } if (elementsAndFinisher.elements !== undefined) { elements = elementsAndFinisher.elements; for (var j = 0; j < elements.length - 1; j++) { for (var k = j + 1; k < elements.length; k++) { if (elements[j].key === elements[k].key && elements[j].placement === elements[k].placement) { throw new TypeError("Duplicated element (" + elements[j].key + ")"); } } } } } return { elements: elements, finishers: finishers }; }, fromElementDescriptor: function fromElementDescriptor(element) { var obj = { kind: element.kind, key: element.key, placement: element.placement, descriptor: element.descriptor }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); if (element.kind === "field") obj.initializer = element.initializer; return obj; }, toElementDescriptors: function toElementDescriptors(elementObjects) { if (elementObjects === undefined) return; return _toArray(elementObjects).map(function (elementObject) { var element = this.toElementDescriptor(elementObject); this.disallowProperty(elementObject, "finisher", "An element descriptor"); this.disallowProperty(elementObject, "extras", "An element descriptor"); return element; }, this); }, toElementDescriptor: function toElementDescriptor(elementObject) { var kind = String(elementObject.kind); if (kind !== "method" && kind !== "field") { throw new TypeError('An element descriptor\'s .kind property must be either "method" or' + ' "field", but a decorator created an element descriptor with' + ' .kind "' + kind + '"'); } var key = _toPropertyKey(elementObject.key); var placement = String(elementObject.placement); if (placement !== "static" && placement !== "prototype" && placement !== "own") { throw new TypeError('An element descriptor\'s .placement property must be one of "static",' + ' "prototype" or "own", but a decorator created an element descriptor' + ' with .placement "' + placement + '"'); } var descriptor = elementObject.descriptor; this.disallowProperty(elementObject, "elements", "An element descriptor"); var element = { kind: kind, key: key, placement: placement, descriptor: Object.assign({}, descriptor) }; if (kind !== "field") { this.disallowProperty(elementObject, "initializer", "A method descriptor"); } else { this.disallowProperty(descriptor, "get", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "set", "The property descriptor of a field descriptor"); this.disallowProperty(descriptor, "value", "The property descriptor of a field descriptor"); element.initializer = elementObject.initializer; } return element; }, toElementFinisherExtras: function toElementFinisherExtras(elementObject) { var element = this.toElementDescriptor(elementObject); var finisher = _optionalCallableProperty(elementObject, "finisher"); var extras = this.toElementDescriptors(elementObject.extras); return { element: element, finisher: finisher, extras: extras }; }, fromClassDescriptor: function fromClassDescriptor(elements) { var obj = { kind: "class", elements: elements.map(this.fromElementDescriptor, this) }; var desc = { value: "Descriptor", configurable: true }; Object.defineProperty(obj, Symbol.toStringTag, desc); return obj; }, toClassDescriptor: function toClassDescriptor(obj) { var kind = String(obj.kind); if (kind !== "class") { throw new TypeError('A class descriptor\'s .kind property must be "class", but a decorator' + ' created a class descriptor with .kind "' + kind + '"'); } this.disallowProperty(obj, "key", "A class descriptor"); this.disallowProperty(obj, "placement", "A class descriptor"); this.disallowProperty(obj, "descriptor", "A class descriptor"); this.disallowProperty(obj, "initializer", "A class descriptor"); this.disallowProperty(obj, "extras", "A class descriptor"); var finisher = _optionalCallableProperty(obj, "finisher"); var elements = this.toElementDescriptors(obj.elements); return { elements: elements, finisher: finisher }; }, runClassFinishers: function runClassFinishers(constructor, finishers) { for (var i = 0; i < finishers.length; i++) { var newConstructor = (0, finishers[i])(constructor); if (newConstructor !== undefined) { if (typeof newConstructor !== "function") { throw new TypeError("Finishers must return a constructor."); } constructor = newConstructor; } } return constructor; }, disallowProperty: function disallowProperty(obj, name, objectType) { if (obj[name] !== undefined) { throw new TypeError(objectType + " can't have a ." + name + " property."); } } }; return api; }

function _createElementDescriptor(def) { var key = _toPropertyKey(def.key); var descriptor; if (def.kind === "method") { descriptor = { value: def.value, writable: true, configurable: true, enumerable: false }; } else if (def.kind === "get") { descriptor = { get: def.value, configurable: true, enumerable: false }; } else if (def.kind === "set") { descriptor = { set: def.value, configurable: true, enumerable: false }; } else if (def.kind === "field") { descriptor = { configurable: true, writable: true, enumerable: true }; } var element = { kind: def.kind === "field" ? "field" : "method", key: key, placement: def["static"] ? "static" : def.kind === "field" ? "own" : "prototype", descriptor: descriptor }; if (def.decorators) element.decorators = def.decorators; if (def.kind === "field") element.initializer = def.value; return element; }

function _coalesceGetterSetter(element, other) { if (element.descriptor.get !== undefined) { other.descriptor.get = element.descriptor.get; } else { other.descriptor.set = element.descriptor.set; } }

function _coalesceClassElements(elements) { var newElements = []; var isSameElement = function isSameElement(other) { return other.kind === "method" && other.key === element.key && other.placement === element.placement; }; for (var i = 0; i < elements.length; i++) { var element = elements[i]; var other; if (element.kind === "method" && (other = newElements.find(isSameElement))) { if (_isDataDescriptor(element.descriptor) || _isDataDescriptor(other.descriptor)) { if (_hasDecorators(element) || _hasDecorators(other)) { throw new ReferenceError("Duplicated methods (" + element.key + ") can't be decorated."); } other.descriptor = element.descriptor; } else { if (_hasDecorators(element)) { if (_hasDecorators(other)) { throw new ReferenceError("Decorators can't be placed on different accessors with for " + "the same property (" + element.key + ")."); } other.decorators = element.decorators; } _coalesceGetterSetter(element, other); } } else { newElements.push(element); } } return newElements; }

function _hasDecorators(element) { return element.decorators && element.decorators.length; }

function _isDataDescriptor(desc) { return desc !== undefined && !(desc.value === undefined && desc.writable === undefined); }

function _optionalCallableProperty(obj, name) { var value = obj[name]; if (value !== undefined && typeof value !== "function") { throw new TypeError("Expected '" + name + "' to be a function"); } return value; }

function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return _typeof(key) === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (_typeof(input) !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (_typeof(res) !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }










 // tslint:disable-next-line


var HaVoiceCommandDialog = _decorate([Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["customElement"])("ha-voice-command-dialog")], function (_initialize, _LitElement) {
  var HaVoiceCommandDialog =
  /*#__PURE__*/
  function (_LitElement2) {
    _inherits(HaVoiceCommandDialog, _LitElement2);

    function HaVoiceCommandDialog() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, HaVoiceCommandDialog);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(HaVoiceCommandDialog)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _initialize(_assertThisInitialized(_this));

      return _this;
    }

    return HaVoiceCommandDialog;
  }(_LitElement);

  return {
    F: HaVoiceCommandDialog,
    d: [{
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "hass",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "results",
      value: function value() {
        return null;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_conversation",
      value: function value() {
        return [{
          who: "hass",
          text: ""
        }];
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_opened",
      value: function value() {
        return false;
      }
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["property"])()],
      key: "_agentInfo",
      value: void 0
    }, {
      kind: "field",
      decorators: [Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["query"])("#messages")],
      key: "messages",
      value: void 0
    }, {
      kind: "field",
      key: "recognition",
      value: void 0
    }, {
      kind: "field",
      key: "_conversationId",
      value: void 0
    }, {
      kind: "method",
      key: "showDialog",
      value: function showDialog() {
        return regeneratorRuntime.async(function showDialog$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                this._opened = true;

                if (_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"]) {
                  this._startListening();
                }

                _context.next = 4;
                return regeneratorRuntime.awrap(Object(_data_conversation__WEBPACK_IMPORTED_MODULE_7__["getAgentInfo"])(this.hass));

              case 4:
                this._agentInfo = _context.sent;

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, null, this);
      }
    }, {
      kind: "method",
      key: "render",
      value: function render() {
        var _this2 = this;

        // CSS custom property mixins only work in render https://github.com/Polymer/lit-element/issues/633
        return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject(), this._opened, this._openedChanged, this._agentInfo && this._agentInfo.onboarding ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject2(), this._agentInfo.onboarding.text, this._completeOnboarding, this._agentInfo.onboarding.url) : "", Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__["classMap"])({
          "top-border": Boolean(this._agentInfo && this._agentInfo.onboarding)
        }), this._conversation.map(function (message) {
          return Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject3(), _this2._computeMessageClasses(message), message.text);
        }), this.results ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject4(), Object(lit_html_directives_class_map__WEBPACK_IMPORTED_MODULE_8__["classMap"])({
          interimTranscript: !this.results["final"]
        }), this.results.transcript, !this.results["final"] ? "…" : "") : "", this._handleKeyUp, this.hass.localize("ui.dialogs.voice_command.".concat(_common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"] ? "label_voice" : "label")), _common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"] ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject5(), this.results ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject6()) : "", Boolean(this.results), this._toggleListening) : "", this._agentInfo && this._agentInfo.attribution ? Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["html"])(_templateObject7(), this._agentInfo.attribution.url, this._agentInfo.attribution.name) : "");
      }
    }, {
      kind: "method",
      key: "firstUpdated",
      value: function firstUpdated(changedProps) {
        _get(_getPrototypeOf(HaVoiceCommandDialog.prototype), "updated", this).call(this, changedProps);

        this._conversationId = Object(_common_util_uid__WEBPACK_IMPORTED_MODULE_10__["uid"])();
        this._conversation = [{
          who: "hass",
          text: this.hass.localize("ui.dialogs.voice_command.how_can_i_help")
        }];
      }
    }, {
      kind: "method",
      key: "updated",
      value: function updated(changedProps) {
        _get(_getPrototypeOf(HaVoiceCommandDialog.prototype), "updated", this).call(this, changedProps);

        if (changedProps.has("_conversation") || changedProps.has("results")) {
          this._scrollMessagesBottom();
        }
      }
    }, {
      kind: "method",
      key: "_addMessage",
      value: function _addMessage(message) {
        this._conversation = [].concat(_toConsumableArray(this._conversation), [message]);
      }
    }, {
      kind: "method",
      key: "_handleKeyUp",
      value: function _handleKeyUp(ev) {
        var input = ev.target;

        if (ev.keyCode === 13 && input.value) {
          this._processText(input.value);

          input.value = "";
        }
      }
    }, {
      kind: "method",
      key: "_completeOnboarding",
      value: function _completeOnboarding() {
        Object(_data_conversation__WEBPACK_IMPORTED_MODULE_7__["setConversationOnboarding"])(this.hass, true);
        this._agentInfo = Object.assign({}, this._agentInfo, {
          onboarding: undefined
        });
      }
    }, {
      kind: "method",
      key: "_initRecognition",
      value: function _initRecognition() {
        var _this3 = this;

        this.recognition = new _common_dom_speech_recognition__WEBPACK_IMPORTED_MODULE_6__["SpeechRecognition"]();
        this.recognition.interimResults = true;
        this.recognition.lang = "en-US";

        this.recognition.onstart = function () {
          _this3.results = {
            "final": false,
            transcript: ""
          };
        };

        this.recognition.onerror = function (event) {
          _this3.recognition.abort();

          if (event.error !== "aborted") {
            var text = _this3.results && _this3.results.transcript ? _this3.results.transcript : "<".concat(_this3.hass.localize("ui.dialogs.voice_command.did_not_hear"), ">");

            _this3._addMessage({
              who: "user",
              text: text,
              error: true
            });
          }

          _this3.results = null;
        };

        this.recognition.onend = function () {
          // Already handled by onerror
          if (_this3.results == null) {
            return;
          }

          var text = _this3.results.transcript;
          _this3.results = null;

          if (text) {
            _this3._processText(text);
          } else {
            _this3._addMessage({
              who: "user",
              text: "<".concat(_this3.hass.localize("ui.dialogs.voice_command.did_not_hear"), ">"),
              error: true
            });
          }
        };

        this.recognition.onresult = function (event) {
          var result = event.results[0];
          _this3.results = {
            transcript: result[0].transcript,
            "final": result.isFinal
          };
        };
      }
    }, {
      kind: "method",
      key: "_processText",
      value: function _processText(text) {
        var message, response, plain;
        return regeneratorRuntime.async(function _processText$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                if (this.recognition) {
                  this.recognition.abort();
                }

                this._addMessage({
                  who: "user",
                  text: text
                });

                message = {
                  who: "hass",
                  text: "…"
                }; // To make sure the answer is placed at the right user text, we add it before we process it

                this._addMessage(message);

                _context2.prev = 4;
                _context2.next = 7;
                return regeneratorRuntime.awrap(Object(_data_conversation__WEBPACK_IMPORTED_MODULE_7__["processText"])(this.hass, text, this._conversationId));

              case 7:
                response = _context2.sent;
                plain = response.speech.plain;
                message.text = plain.speech;
                this.requestUpdate("_conversation");
                _context2.next = 18;
                break;

              case 13:
                _context2.prev = 13;
                _context2.t0 = _context2["catch"](4);
                message.text = this.hass.localize("ui.dialogs.voice_command.error");
                message.error = true;
                this.requestUpdate("_conversation");

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, null, this, [[4, 13]]);
      }
    }, {
      kind: "method",
      key: "_toggleListening",
      value: function _toggleListening() {
        if (!this.results) {
          this._startListening();
        } else {
          this.recognition.stop();
        }
      }
    }, {
      kind: "method",
      key: "_startListening",
      value: function _startListening() {
        if (!this.recognition) {
          this._initRecognition();
        }

        if (this.results) {
          return;
        }

        this.results = {
          transcript: "",
          "final": false
        };
        this.recognition.start();
      }
    }, {
      kind: "method",
      key: "_scrollMessagesBottom",
      value: function _scrollMessagesBottom() {
        this.messages.scrollTarget.scrollTop = this.messages.scrollTarget.scrollHeight;

        if (this.messages.scrollTarget.scrollTop === 0) {
          Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_5__["fireEvent"])(this.messages, "iron-resize");
        }
      }
    }, {
      kind: "method",
      key: "_openedChanged",
      value: function _openedChanged(ev) {
        this._opened = ev.detail.value;

        if (!this._opened && this.recognition) {
          this.recognition.abort();
        }
      }
    }, {
      kind: "method",
      key: "_computeMessageClasses",
      value: function _computeMessageClasses(message) {
        return "message ".concat(message.who, " ").concat(message.error ? " error" : "");
      }
    }, {
      kind: "get",
      "static": true,
      key: "styles",
      value: function styles() {
        return [_resources_styles__WEBPACK_IMPORTED_MODULE_9__["haStyleDialog"], Object(lit_element__WEBPACK_IMPORTED_MODULE_4__["css"])(_templateObject8())];
      }
    }]
  };
}, lit_element__WEBPACK_IMPORTED_MODULE_4__["LitElement"]);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidm9pY2UtY29tbWFuZC1kaWFsb2cuY2h1bmsuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQHBvbHltZXIvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUvcGFwZXItZGlhbG9nLXNjcm9sbGFibGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbW1vbi9kb20vc3BlZWNoLXJlY29nbml0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9jb21tb24vdXRpbC91aWQudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbXBvbmVudHMvZGlhbG9nL2hhLXBhcGVyLWRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9jb252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RpYWxvZ3Mvdm9pY2UtY29tbWFuZC1kaWFsb2cvaGEtdm9pY2UtY29tbWFuZC1kaWFsb2cudHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG5AbGljZW5zZVxuQ29weXJpZ2h0IChjKSAyMDE1IFRoZSBQb2x5bWVyIFByb2plY3QgQXV0aG9ycy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cblRoaXMgY29kZSBtYXkgb25seSBiZSB1c2VkIHVuZGVyIHRoZSBCU0Qgc3R5bGUgbGljZW5zZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0xJQ0VOU0UudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgYXV0aG9ycyBtYXkgYmUgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9BVVRIT1JTLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGNvbnRyaWJ1dG9ycyBtYXkgYmVcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9DT05UUklCVVRPUlMudHh0IENvZGUgZGlzdHJpYnV0ZWQgYnkgR29vZ2xlIGFzXG5wYXJ0IG9mIHRoZSBwb2x5bWVyIHByb2plY3QgaXMgYWxzbyBzdWJqZWN0IHRvIGFuIGFkZGl0aW9uYWwgSVAgcmlnaHRzIGdyYW50XG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vUEFURU5UUy50eHRcbiovXG5pbXBvcnQgJ0Bwb2x5bWVyL3BvbHltZXIvcG9seW1lci1sZWdhY3kuanMnO1xuaW1wb3J0ICdAcG9seW1lci9pcm9uLWZsZXgtbGF5b3V0L2lyb24tZmxleC1sYXlvdXQuanMnO1xuaW1wb3J0ICdAcG9seW1lci9wYXBlci1zdHlsZXMvZGVmYXVsdC10aGVtZS5qcyc7XG5cbmltcG9ydCB7UGFwZXJEaWFsb2dCZWhhdmlvckltcGx9IGZyb20gJ0Bwb2x5bWVyL3BhcGVyLWRpYWxvZy1iZWhhdmlvci9wYXBlci1kaWFsb2ctYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5NYXRlcmlhbCBkZXNpZ246XG5bRGlhbG9nc10oaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9kZXNpZ24vc3BlYy9jb21wb25lbnRzL2RpYWxvZ3MuaHRtbClcblxuYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpbXBsZW1lbnRzIGEgc2Nyb2xsaW5nIGFyZWEgdXNlZCBpbiBhIE1hdGVyaWFsIERlc2lnblxuZGlhbG9nLiBJdCBzaG93cyBhIGRpdmlkZXIgYXQgdGhlIHRvcCBhbmQvb3IgYm90dG9tIGluZGljYXRpbmcgbW9yZSBjb250ZW50LFxuZGVwZW5kaW5nIG9uIHNjcm9sbCBwb3NpdGlvbi4gVXNlIHRoaXMgdG9nZXRoZXIgd2l0aCBlbGVtZW50cyBpbXBsZW1lbnRpbmdcbmBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgLlxuXG4gICAgPHBhcGVyLWRpYWxvZy1pbXBsPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgPGRpdiBjbGFzcz1cImJ1dHRvbnNcIj5cbiAgICAgICAgPHBhcGVyLWJ1dHRvbj5PSzwvcGFwZXItYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgPC9wYXBlci1kaWFsb2ctaW1wbD5cblxuSXQgc2hvd3MgYSB0b3AgZGl2aWRlciBhZnRlciBzY3JvbGxpbmcgaWYgaXQgaXMgbm90IHRoZSBmaXJzdCBjaGlsZCBpbiBpdHNcbnBhcmVudCBjb250YWluZXIsIGluZGljYXRpbmcgdGhlcmUgaXMgbW9yZSBjb250ZW50IGFib3ZlLiBJdCBzaG93cyBhIGJvdHRvbVxuZGl2aWRlciBpZiBpdCBpcyBzY3JvbGxhYmxlIGFuZCBpdCBpcyBub3QgdGhlIGxhc3QgY2hpbGQgaW4gaXRzIHBhcmVudFxuY29udGFpbmVyLCBpbmRpY2F0aW5nIHRoZXJlIGlzIG1vcmUgY29udGVudCBiZWxvdy4gVGhlIGJvdHRvbSBkaXZpZGVyIGlzIGhpZGRlblxuaWYgaXQgaXMgc2Nyb2xsZWQgdG8gdGhlIGJvdHRvbS5cblxuSWYgYHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlYCBpcyBub3QgYSBkaXJlY3QgY2hpbGQgb2YgdGhlIGVsZW1lbnQgaW1wbGVtZW50aW5nXG5gUG9seW1lci5QYXBlckRpYWxvZ0JlaGF2aW9yYCwgcmVtZW1iZXIgdG8gc2V0IHRoZSBgZGlhbG9nRWxlbWVudGA6XG5cbiAgICA8cGFwZXItZGlhbG9nLWltcGwgaWQ9XCJteURpYWxvZ1wiPlxuICAgICAgPGgyPkhlYWRlcjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzPVwibXktY29udGVudC13cmFwcGVyXCI+XG4gICAgICAgIDxoND5TdWItaGVhZGVyPC9oND5cbiAgICAgICAgPHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICAgIExvcmVtIGlwc3VtLi4uXG4gICAgICAgIDwvcGFwZXItZGlhbG9nLXNjcm9sbGFibGU+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3M9XCJidXR0b25zXCI+XG4gICAgICAgIDxwYXBlci1idXR0b24+T0s8L3BhcGVyLWJ1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgIDwvcGFwZXItZGlhbG9nLWltcGw+XG5cbiAgICA8c2NyaXB0PlxuICAgICAgdmFyIHNjcm9sbGFibGUgPVxuUG9seW1lci5kb20obXlEaWFsb2cpLnF1ZXJ5U2VsZWN0b3IoJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyk7XG4gICAgICBzY3JvbGxhYmxlLmRpYWxvZ0VsZW1lbnQgPSBteURpYWxvZztcbiAgICA8L3NjcmlwdD5cblxuIyMjIFN0eWxpbmdcblRoZSBmb2xsb3dpbmcgY3VzdG9tIHByb3BlcnRpZXMgYW5kIG1peGlucyBhcmUgYXZhaWxhYmxlIGZvciBzdHlsaW5nOlxuXG5DdXN0b20gcHJvcGVydHkgfCBEZXNjcmlwdGlvbiB8IERlZmF1bHRcbi0tLS0tLS0tLS0tLS0tLS18LS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tXG5gLS1wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZWAgfCBNaXhpbiBmb3IgdGhlIHNjcm9sbGFibGUgY29udGVudCB8IHt9XG5cbkBncm91cCBQYXBlciBFbGVtZW50c1xuQGVsZW1lbnQgcGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuQGhlcm8gaGVyby5zdmdcbiovXG5Qb2x5bWVyKHtcbiAgX3RlbXBsYXRlOiBodG1sYFxuICAgIDxzdHlsZT5cblxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LXJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICA6aG9zdCguaXMtc2Nyb2xsZWQ6bm90KDpmaXJzdC1jaGlsZCkpOjpiZWZvcmUge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB0b3A6IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIDpob3N0KC5jYW4tc2Nyb2xsOm5vdCguc2Nyb2xsZWQtdG8tYm90dG9tKTpub3QoOmxhc3QtY2hpbGQpKTo6YWZ0ZXIge1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHJpZ2h0OiAwO1xuICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgYmFja2dyb3VuZDogdmFyKC0tZGl2aWRlci1jb2xvcik7XG4gICAgICB9XG5cbiAgICAgIC5zY3JvbGxhYmxlIHtcbiAgICAgICAgcGFkZGluZzogMCAyNHB4O1xuXG4gICAgICAgIEBhcHBseSAtLWxheW91dC1zY3JvbGw7XG4gICAgICAgIEBhcHBseSAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlO1xuICAgICAgfVxuXG4gICAgICAuZml0IHtcbiAgICAgICAgQGFwcGx5IC0tbGF5b3V0LWZpdDtcbiAgICAgIH1cbiAgICA8L3N0eWxlPlxuXG4gICAgPGRpdiBpZD1cInNjcm9sbGFibGVcIiBjbGFzcz1cInNjcm9sbGFibGVcIiBvbi1zY3JvbGw9XCJ1cGRhdGVTY3JvbGxTdGF0ZVwiPlxuICAgICAgPHNsb3Q+PC9zbG90PlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlJyxcblxuICBwcm9wZXJ0aWVzOiB7XG5cbiAgICAvKipcbiAgICAgKiBUaGUgZGlhbG9nIGVsZW1lbnQgdGhhdCBpbXBsZW1lbnRzIGBQb2x5bWVyLlBhcGVyRGlhbG9nQmVoYXZpb3JgXG4gICAgICogY29udGFpbmluZyB0aGlzIGVsZW1lbnQuXG4gICAgICogQHR5cGUgez9Ob2RlfVxuICAgICAqL1xuICAgIGRpYWxvZ0VsZW1lbnQ6IHt0eXBlOiBPYmplY3R9XG5cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgc2Nyb2xsaW5nIGVsZW1lbnQuXG4gICAqL1xuICBnZXQgc2Nyb2xsVGFyZ2V0KCkge1xuICAgIHJldHVybiB0aGlzLiQuc2Nyb2xsYWJsZTtcbiAgfSxcblxuICByZWFkeTogZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fZW5zdXJlVGFyZ2V0KCk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCduby1wYWRkaW5nJyk7XG4gIH0sXG5cbiAgYXR0YWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Vuc3VyZVRhcmdldCgpO1xuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZVNjcm9sbFN0YXRlLmJpbmQodGhpcykpO1xuICB9LFxuXG4gIHVwZGF0ZVNjcm9sbFN0YXRlOiBmdW5jdGlvbigpIHtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKCdpcy1zY3JvbGxlZCcsIHRoaXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA+IDApO1xuICAgIHRoaXMudG9nZ2xlQ2xhc3MoXG4gICAgICAgICdjYW4tc2Nyb2xsJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0IDwgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsSGVpZ2h0KTtcbiAgICB0aGlzLnRvZ2dsZUNsYXNzKFxuICAgICAgICAnc2Nyb2xsZWQtdG8tYm90dG9tJyxcbiAgICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuc2Nyb2xsVG9wICsgdGhpcy5zY3JvbGxUYXJnZXQub2Zmc2V0SGVpZ2h0ID49XG4gICAgICAgICAgICB0aGlzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQpO1xuICB9LFxuXG4gIF9lbnN1cmVUYXJnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIC8vIFJlYWQgcGFyZW50RWxlbWVudCBpbnN0ZWFkIG9mIHBhcmVudE5vZGUgaW4gb3JkZXIgdG8gc2tpcCBzaGFkb3dSb290cy5cbiAgICB0aGlzLmRpYWxvZ0VsZW1lbnQgPSB0aGlzLmRpYWxvZ0VsZW1lbnQgfHwgdGhpcy5wYXJlbnRFbGVtZW50O1xuICAgIC8vIENoZWNrIGlmIGRpYWxvZyBpbXBsZW1lbnRzIHBhcGVyLWRpYWxvZy1iZWhhdmlvci4gSWYgbm90LCBmaXRcbiAgICAvLyBzY3JvbGxUYXJnZXQgdG8gaG9zdC5cbiAgICBpZiAodGhpcy5kaWFsb2dFbGVtZW50ICYmIHRoaXMuZGlhbG9nRWxlbWVudC5iZWhhdmlvcnMgJiZcbiAgICAgICAgdGhpcy5kaWFsb2dFbGVtZW50LmJlaGF2aW9ycy5pbmRleE9mKFBhcGVyRGlhbG9nQmVoYXZpb3JJbXBsKSA+PSAwKSB7XG4gICAgICB0aGlzLmRpYWxvZ0VsZW1lbnQuc2l6aW5nVGFyZ2V0ID0gdGhpcy5zY3JvbGxUYXJnZXQ7XG4gICAgICB0aGlzLnNjcm9sbFRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdmaXQnKTtcbiAgICB9IGVsc2UgaWYgKHRoaXMuZGlhbG9nRWxlbWVudCkge1xuICAgICAgdGhpcy5zY3JvbGxUYXJnZXQuY2xhc3NMaXN0LmFkZCgnZml0Jyk7XG4gICAgfVxuICB9XG59KTtcbiIsIi8qIHRzbGludDpkaXNhYmxlICovXG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb24gPVxuICAvLyBAdHMtaWdub3JlXG4gIHdpbmRvdy5TcGVlY2hSZWNvZ25pdGlvbiB8fCB3aW5kb3cud2Via2l0U3BlZWNoUmVjb2duaXRpb247XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgU3BlZWNoR3JhbW1hckxpc3QgPVxuICAvLyBAdHMtaWdub3JlXG4gIHdpbmRvdy5TcGVlY2hHcmFtbWFyTGlzdCB8fCB3aW5kb3cud2Via2l0U3BlZWNoR3JhbW1hckxpc3Q7XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY29uc3QgU3BlZWNoUmVjb2duaXRpb25FdmVudCA9XG4gIC8vIEB0cy1pZ25vcmVcbiAgd2luZG93LlNwZWVjaFJlY29nbml0aW9uRXZlbnQgfHwgd2luZG93LndlYmtpdFNwZWVjaFJlY29nbml0aW9uRXZlbnQ7XG4vKiB0c2xpbnQ6ZW5hYmxlICovXG4iLCJmdW5jdGlvbiBzNCgpIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IoKDEgKyBNYXRoLnJhbmRvbSgpKSAqIDB4MTAwMDApXG4gICAgLnRvU3RyaW5nKDE2KVxuICAgIC5zdWJzdHJpbmcoMSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1aWQoKSB7XG4gIHJldHVybiBzNCgpICsgczQoKSArIHM0KCkgKyBzNCgpICsgczQoKTtcbn1cbiIsIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNiBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuLypcbiAgRml4ZXMgaXNzdWUgd2l0aCBub3QgdXNpbmcgc2hhZG93IGRvbSBwcm9wZXJseSBpbiBpcm9uLW92ZXJsYXktYmVoYXZpb3IvaWNvbi1mb2N1c2FibGVzLWhlbHBlci5qc1xuKi9cbmltcG9ydCB7IGRvbSB9IGZyb20gXCJAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci5kb20uanNcIjtcblxuaW1wb3J0IHsgSXJvbkZvY3VzYWJsZXNIZWxwZXIgfSBmcm9tIFwiQHBvbHltZXIvaXJvbi1vdmVybGF5LWJlaGF2aW9yL2lyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcblxuZXhwb3J0IGNvbnN0IEhhSXJvbkZvY3VzYWJsZXNIZWxwZXIgPSB7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc29ydGVkIGFycmF5IG9mIHRhYmJhYmxlIG5vZGVzLCBpbmNsdWRpbmcgdGhlIHJvb3Qgbm9kZS5cbiAgICogSXQgc2VhcmNoZXMgdGhlIHRhYmJhYmxlIG5vZGVzIGluIHRoZSBsaWdodCBhbmQgc2hhZG93IGRvbSBvZiB0aGUgY2hpZHJlbixcbiAgICogc29ydGluZyB0aGUgcmVzdWx0IGJ5IHRhYmluZGV4LlxuICAgKiBAcGFyYW0geyFOb2RlfSBub2RlXG4gICAqIEByZXR1cm4geyFBcnJheTwhSFRNTEVsZW1lbnQ+fVxuICAgKi9cbiAgZ2V0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSkge1xuICAgIHZhciByZXN1bHQgPSBbXTtcbiAgICAvLyBJZiB0aGVyZSBpcyBhdCBsZWFzdCBvbmUgZWxlbWVudCB3aXRoIHRhYmluZGV4ID4gMCwgd2UgbmVlZCB0byBzb3J0XG4gICAgLy8gdGhlIGZpbmFsIGFycmF5IGJ5IHRhYmluZGV4LlxuICAgIHZhciBuZWVkc1NvcnRCeVRhYkluZGV4ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMobm9kZSwgcmVzdWx0KTtcbiAgICBpZiAobmVlZHNTb3J0QnlUYWJJbmRleCkge1xuICAgICAgcmV0dXJuIElyb25Gb2N1c2FibGVzSGVscGVyLl9zb3J0QnlUYWJJbmRleChyZXN1bHQpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBTZWFyY2hlcyBmb3Igbm9kZXMgdGhhdCBhcmUgdGFiYmFibGUgYW5kIGFkZHMgdGhlbSB0byB0aGUgYHJlc3VsdGAgYXJyYXkuXG4gICAqIFJldHVybnMgaWYgdGhlIGByZXN1bHRgIGFycmF5IG5lZWRzIHRvIGJlIHNvcnRlZCBieSB0YWJpbmRleC5cbiAgICogQHBhcmFtIHshTm9kZX0gbm9kZSBUaGUgc3RhcnRpbmcgcG9pbnQgZm9yIHRoZSBzZWFyY2g7IGFkZGVkIHRvIGByZXN1bHRgXG4gICAqIGlmIHRhYmJhYmxlLlxuICAgKiBAcGFyYW0geyFBcnJheTwhSFRNTEVsZW1lbnQ+fSByZXN1bHRcbiAgICogQHJldHVybiB7Ym9vbGVhbn1cbiAgICogQHByaXZhdGVcbiAgICovXG4gIF9jb2xsZWN0VGFiYmFibGVOb2RlczogZnVuY3Rpb24obm9kZSwgcmVzdWx0KSB7XG4gICAgLy8gSWYgbm90IGFuIGVsZW1lbnQgb3Igbm90IHZpc2libGUsIG5vIG5lZWQgdG8gZXhwbG9yZSBjaGlsZHJlbi5cbiAgICBpZiAoXG4gICAgICBub2RlLm5vZGVUeXBlICE9PSBOb2RlLkVMRU1FTlRfTk9ERSB8fFxuICAgICAgIUlyb25Gb2N1c2FibGVzSGVscGVyLl9pc1Zpc2libGUobm9kZSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGVsZW1lbnQgPSAvKiogQHR5cGUgeyFIVE1MRWxlbWVudH0gKi8gKG5vZGUpO1xuICAgIHZhciB0YWJJbmRleCA9IElyb25Gb2N1c2FibGVzSGVscGVyLl9ub3JtYWxpemVkVGFiSW5kZXgoZWxlbWVudCk7XG4gICAgdmFyIG5lZWRzU29ydCA9IHRhYkluZGV4ID4gMDtcbiAgICBpZiAodGFiSW5kZXggPj0gMCkge1xuICAgICAgcmVzdWx0LnB1c2goZWxlbWVudCk7XG4gICAgfVxuXG4gICAgLy8gSW4gU2hhZG93RE9NIHYxLCB0YWIgb3JkZXIgaXMgYWZmZWN0ZWQgYnkgdGhlIG9yZGVyIG9mIGRpc3RydWJ1dGlvbi5cbiAgICAvLyBFLmcuIGdldFRhYmJhYmxlTm9kZXMoI3Jvb3QpIGluIFNoYWRvd0RPTSB2MSBzaG91bGQgcmV0dXJuIFsjQSwgI0JdO1xuICAgIC8vIGluIFNoYWRvd0RPTSB2MCB0YWIgb3JkZXIgaXMgbm90IGFmZmVjdGVkIGJ5IHRoZSBkaXN0cnVidXRpb24gb3JkZXIsXG4gICAgLy8gaW4gZmFjdCBnZXRUYWJiYWJsZU5vZGVzKCNyb290KSByZXR1cm5zIFsjQiwgI0FdLlxuICAgIC8vICA8ZGl2IGlkPVwicm9vdFwiPlxuICAgIC8vICAgPCEtLSBzaGFkb3cgLS0+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJhXCI+XG4gICAgLy8gICAgIDxzbG90IG5hbWU9XCJiXCI+XG4gICAgLy8gICA8IS0tIC9zaGFkb3cgLS0+XG4gICAgLy8gICA8aW5wdXQgaWQ9XCJBXCIgc2xvdD1cImFcIj5cbiAgICAvLyAgIDxpbnB1dCBpZD1cIkJcIiBzbG90PVwiYlwiIHRhYmluZGV4PVwiMVwiPlxuICAgIC8vICA8L2Rpdj5cbiAgICAvLyBUT0RPKHZhbGRyaW4pIHN1cHBvcnQgU2hhZG93RE9NIHYxIHdoZW4gdXBncmFkaW5nIHRvIFBvbHltZXIgdjIuMC5cbiAgICB2YXIgY2hpbGRyZW47XG4gICAgaWYgKGVsZW1lbnQubG9jYWxOYW1lID09PSBcImNvbnRlbnRcIiB8fCBlbGVtZW50LmxvY2FsTmFtZSA9PT0gXCJzbG90XCIpIHtcbiAgICAgIGNoaWxkcmVuID0gZG9tKGVsZW1lbnQpLmdldERpc3RyaWJ1dGVkTm9kZXMoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vL1xuICAgICAgLy8gVXNlIHNoYWRvdyByb290IGlmIHBvc3NpYmxlLCB3aWxsIGNoZWNrIGZvciBkaXN0cmlidXRlZCBub2Rlcy5cbiAgICAgIC8vIFRISVMgSVMgVEhFIENIQU5HRUQgTElORVxuICAgICAgY2hpbGRyZW4gPSBkb20oZWxlbWVudC5zaGFkb3dSb290IHx8IGVsZW1lbnQucm9vdCB8fCBlbGVtZW50KS5jaGlsZHJlbjtcbiAgICAgIC8vIC8vLy8vLy8vLy8vLy8vLy8vLy8vLy8vLy9cbiAgICB9XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gRW5zdXJlIG1ldGhvZCBpcyBhbHdheXMgaW52b2tlZCB0byBjb2xsZWN0IHRhYmJhYmxlIGNoaWxkcmVuLlxuICAgICAgbmVlZHNTb3J0ID0gdGhpcy5fY29sbGVjdFRhYmJhYmxlTm9kZXMoY2hpbGRyZW5baV0sIHJlc3VsdCkgfHwgbmVlZHNTb3J0O1xuICAgIH1cbiAgICByZXR1cm4gbmVlZHNTb3J0O1xuICB9LFxufTtcbiIsImltcG9ydCBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcbmltcG9ydCB7IG1peGluQmVoYXZpb3JzIH0gZnJvbSBcIkBwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9jbGFzc1wiO1xuaW1wb3J0IHsgSGFJcm9uRm9jdXNhYmxlc0hlbHBlciB9IGZyb20gXCIuL2hhLWlyb24tZm9jdXNhYmxlcy1oZWxwZXIuanNcIjtcbi8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuaW1wb3J0IHsgUGFwZXJEaWFsb2dFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy9wYXBlci1kaWFsb2dcIjtcblxuY29uc3QgcGFwZXJEaWFsb2dDbGFzcyA9IGN1c3RvbUVsZW1lbnRzLmdldChcInBhcGVyLWRpYWxvZ1wiKTtcblxuLy8gYmVoYXZpb3IgdGhhdCB3aWxsIG92ZXJyaWRlIGV4aXN0aW5nIGlyb24tb3ZlcmxheS1iZWhhdmlvciBhbmQgY2FsbCB0aGUgZml4ZWQgaW1wbGVtZW50YXRpb25cbmNvbnN0IGhhVGFiRml4QmVoYXZpb3JJbXBsID0ge1xuICBnZXQgX2ZvY3VzYWJsZU5vZGVzKCkge1xuICAgIHJldHVybiBIYUlyb25Gb2N1c2FibGVzSGVscGVyLmdldFRhYmJhYmxlTm9kZXModGhpcyk7XG4gIH0sXG59O1xuXG4vLyBwYXBlci1kaWFsb2cgdGhhdCB1c2VzIHRoZSBoYVRhYkZpeEJlaGF2aW9ySW1wbCBiZWh2YWlvclxuLy8gZXhwb3J0IGNsYXNzIEhhUGFwZXJEaWFsb2cgZXh0ZW5kcyBwYXBlckRpYWxvZ0NsYXNzIHt9XG4vLyBAdHMtaWdub3JlXG5leHBvcnQgY2xhc3MgSGFQYXBlckRpYWxvZ1xuICBleHRlbmRzIG1peGluQmVoYXZpb3JzKFtoYVRhYkZpeEJlaGF2aW9ySW1wbF0sIHBhcGVyRGlhbG9nQ2xhc3MpXG4gIGltcGxlbWVudHMgUGFwZXJEaWFsb2dFbGVtZW50IHt9XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS1wYXBlci1kaWFsb2dcIjogSGFQYXBlckRpYWxvZztcbiAgfVxufVxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiaGEtcGFwZXItZGlhbG9nXCIsIEhhUGFwZXJEaWFsb2cpO1xuIiwiaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi90eXBlc1wiO1xuXG5pbnRlcmZhY2UgUHJvY2Vzc1Jlc3VsdHMge1xuICBjYXJkOiB7IFtrZXk6IHN0cmluZ106IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0gfTtcbiAgc3BlZWNoOiB7XG4gICAgW1NwZWVjaFR5cGUgaW4gXCJwbGFpblwiIHwgXCJzc21sXCJdOiB7IGV4dHJhX2RhdGE6IGFueTsgc3BlZWNoOiBzdHJpbmcgfVxuICB9O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFnZW50SW5mbyB7XG4gIGF0dHJpYnV0aW9uPzogeyBuYW1lOiBzdHJpbmc7IHVybDogc3RyaW5nIH07XG4gIG9uYm9hcmRpbmc/OiB7IHRleHQ6IHN0cmluZzsgdXJsOiBzdHJpbmcgfTtcbn1cblxuZXhwb3J0IGNvbnN0IHByb2Nlc3NUZXh0ID0gKFxuICBoYXNzOiBIb21lQXNzaXN0YW50LFxuICB0ZXh0OiBzdHJpbmcsXG4gIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTogdmFyaWFibGUtbmFtZVxuICBjb252ZXJzYXRpb25faWQ6IHN0cmluZ1xuKTogUHJvbWlzZTxQcm9jZXNzUmVzdWx0cz4gPT5cbiAgaGFzcy5jYWxsV1Moe1xuICAgIHR5cGU6IFwiY29udmVyc2F0aW9uL3Byb2Nlc3NcIixcbiAgICB0ZXh0LFxuICAgIGNvbnZlcnNhdGlvbl9pZCxcbiAgfSk7XG5cbmV4cG9ydCBjb25zdCBnZXRBZ2VudEluZm8gPSAoaGFzczogSG9tZUFzc2lzdGFudCk6IFByb21pc2U8QWdlbnRJbmZvPiA9PlxuICBoYXNzLmNhbGxXUyh7XG4gICAgdHlwZTogXCJjb252ZXJzYXRpb24vYWdlbnQvaW5mb1wiLFxuICB9KTtcblxuZXhwb3J0IGNvbnN0IHNldENvbnZlcnNhdGlvbk9uYm9hcmRpbmcgPSAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIHZhbHVlOiBib29sZWFuXG4pOiBQcm9taXNlPGJvb2xlYW4+ID0+XG4gIGhhc3MuY2FsbFdTKHtcbiAgICB0eXBlOiBcImNvbnZlcnNhdGlvbi9vbmJvYXJkaW5nL3NldFwiLFxuICAgIHNob3duOiB2YWx1ZSxcbiAgfSk7XG4iLCJpbXBvcnQgXCJAcG9seW1lci9pcm9uLWljb24vaXJvbi1pY29uXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1pY29uLWJ1dHRvbi9wYXBlci1pY29uLWJ1dHRvblwiO1xuaW1wb3J0IFwiLi4vLi4vY29tcG9uZW50cy9kaWFsb2cvaGEtcGFwZXItZGlhbG9nXCI7XG5pbXBvcnQgXCJAcG9seW1lci9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS9wYXBlci1kaWFsb2ctc2Nyb2xsYWJsZVwiO1xuXG5pbXBvcnQge1xuICBMaXRFbGVtZW50LFxuICBodG1sLFxuICBwcm9wZXJ0eSxcbiAgQ1NTUmVzdWx0LFxuICBjc3MsXG4gIGN1c3RvbUVsZW1lbnQsXG4gIHF1ZXJ5LFxuICBQcm9wZXJ0eVZhbHVlcyxcbiAgVGVtcGxhdGVSZXN1bHQsXG59IGZyb20gXCJsaXQtZWxlbWVudFwiO1xuaW1wb3J0IHsgSG9tZUFzc2lzdGFudCB9IGZyb20gXCIuLi8uLi90eXBlc1wiO1xuaW1wb3J0IHsgZmlyZUV2ZW50IH0gZnJvbSBcIi4uLy4uL2NvbW1vbi9kb20vZmlyZV9ldmVudFwiO1xuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb24gfSBmcm9tIFwiLi4vLi4vY29tbW9uL2RvbS9zcGVlY2gtcmVjb2duaXRpb25cIjtcbmltcG9ydCB7XG4gIHByb2Nlc3NUZXh0LFxuICBnZXRBZ2VudEluZm8sXG4gIHNldENvbnZlcnNhdGlvbk9uYm9hcmRpbmcsXG4gIEFnZW50SW5mbyxcbn0gZnJvbSBcIi4uLy4uL2RhdGEvY29udmVyc2F0aW9uXCI7XG5pbXBvcnQgeyBjbGFzc01hcCB9IGZyb20gXCJsaXQtaHRtbC9kaXJlY3RpdmVzL2NsYXNzLW1hcFwiO1xuaW1wb3J0IHsgUGFwZXJJbnB1dEVsZW1lbnQgfSBmcm9tIFwiQHBvbHltZXIvcGFwZXItaW5wdXQvcGFwZXItaW5wdXRcIjtcbmltcG9ydCB7IGhhU3R5bGVEaWFsb2cgfSBmcm9tIFwiLi4vLi4vcmVzb3VyY2VzL3N0eWxlc1wiO1xuLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG5pbXBvcnQgeyBQYXBlckRpYWxvZ1Njcm9sbGFibGVFbGVtZW50IH0gZnJvbSBcIkBwb2x5bWVyL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlL3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlXCI7XG5pbXBvcnQgeyB1aWQgfSBmcm9tIFwiLi4vLi4vY29tbW9uL3V0aWwvdWlkXCI7XG5cbmludGVyZmFjZSBNZXNzYWdlIHtcbiAgd2hvOiBzdHJpbmc7XG4gIHRleHQ/OiBzdHJpbmc7XG4gIGVycm9yPzogYm9vbGVhbjtcbn1cblxuaW50ZXJmYWNlIFJlc3VsdHMge1xuICB0cmFuc2NyaXB0OiBzdHJpbmc7XG4gIGZpbmFsOiBib29sZWFuO1xufVxuXG5AY3VzdG9tRWxlbWVudChcImhhLXZvaWNlLWNvbW1hbmQtZGlhbG9nXCIpXG5leHBvcnQgY2xhc3MgSGFWb2ljZUNvbW1hbmREaWFsb2cgZXh0ZW5kcyBMaXRFbGVtZW50IHtcbiAgQHByb3BlcnR5KCkgcHVibGljIGhhc3MhOiBIb21lQXNzaXN0YW50O1xuICBAcHJvcGVydHkoKSBwdWJsaWMgcmVzdWx0czogUmVzdWx0cyB8IG51bGwgPSBudWxsO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9jb252ZXJzYXRpb246IE1lc3NhZ2VbXSA9IFtcbiAgICB7XG4gICAgICB3aG86IFwiaGFzc1wiLFxuICAgICAgdGV4dDogXCJcIixcbiAgICB9LFxuICBdO1xuICBAcHJvcGVydHkoKSBwcml2YXRlIF9vcGVuZWQgPSBmYWxzZTtcbiAgQHByb3BlcnR5KCkgcHJpdmF0ZSBfYWdlbnRJbmZvPzogQWdlbnRJbmZvO1xuICBAcXVlcnkoXCIjbWVzc2FnZXNcIikgcHJpdmF0ZSBtZXNzYWdlcyE6IFBhcGVyRGlhbG9nU2Nyb2xsYWJsZUVsZW1lbnQ7XG4gIHByaXZhdGUgcmVjb2duaXRpb24hOiBTcGVlY2hSZWNvZ25pdGlvbjtcbiAgcHJpdmF0ZSBfY29udmVyc2F0aW9uSWQ/OiBzdHJpbmc7XG5cbiAgcHVibGljIGFzeW5jIHNob3dEaWFsb2coKTogUHJvbWlzZTx2b2lkPiB7XG4gICAgdGhpcy5fb3BlbmVkID0gdHJ1ZTtcbiAgICBpZiAoU3BlZWNoUmVjb2duaXRpb24pIHtcbiAgICAgIHRoaXMuX3N0YXJ0TGlzdGVuaW5nKCk7XG4gICAgfVxuICAgIHRoaXMuX2FnZW50SW5mbyA9IGF3YWl0IGdldEFnZW50SW5mbyh0aGlzLmhhc3MpO1xuICB9XG5cbiAgcHJvdGVjdGVkIHJlbmRlcigpOiBUZW1wbGF0ZVJlc3VsdCB7XG4gICAgLy8gQ1NTIGN1c3RvbSBwcm9wZXJ0eSBtaXhpbnMgb25seSB3b3JrIGluIHJlbmRlciBodHRwczovL2dpdGh1Yi5jb20vUG9seW1lci9saXQtZWxlbWVudC9pc3N1ZXMvNjMzXG4gICAgcmV0dXJuIGh0bWxgXG4gICAgICA8c3R5bGU+XG4gICAgICAgIHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlIHtcbiAgICAgICAgICAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlOiB7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogYXV0bztcbiAgICAgICAgICAgIG1heC1oZWlnaHQ6IDUwdmggIWltcG9ydGFudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS5jYW4tc2Nyb2xsIHtcbiAgICAgICAgICAtLXBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlOiB7XG4gICAgICAgICAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XG4gICAgICAgICAgICBtYXgtaGVpZ2h0OiA1MHZoICFpbXBvcnRhbnQ7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIGFsbCBhbmQgKG1heC13aWR0aDogNDUwcHgpLCBhbGwgYW5kIChtYXgtaGVpZ2h0OiA1MDBweCkge1xuICAgICAgICAgIHBhcGVyLWRpYWxvZy1zY3JvbGxhYmxlIHtcbiAgICAgICAgICAgIC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU6IHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IGF1dG87XG4gICAgICAgICAgICAgIG1heC1oZWlnaHQ6IGNhbGMoMTAwdmggLSAxNzVweCkgIWltcG9ydGFudDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwYXBlci1kaWFsb2ctc2Nyb2xsYWJsZS5jYW4tc2Nyb2xsIHtcbiAgICAgICAgICAgIC0tcGFwZXItZGlhbG9nLXNjcm9sbGFibGU6IHtcbiAgICAgICAgICAgICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xuICAgICAgICAgICAgICBtYXgtaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTc1cHgpICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICA8L3N0eWxlPlxuICAgICAgPGhhLXBhcGVyLWRpYWxvZ1xuICAgICAgICB3aXRoLWJhY2tkcm9wXG4gICAgICAgIC5vcGVuZWQ9JHt0aGlzLl9vcGVuZWR9XG4gICAgICAgIEBvcGVuZWQtY2hhbmdlZD0ke3RoaXMuX29wZW5lZENoYW5nZWR9XG4gICAgICA+XG4gICAgICAgICR7dGhpcy5fYWdlbnRJbmZvICYmIHRoaXMuX2FnZW50SW5mby5vbmJvYXJkaW5nXG4gICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwib25ib2FyZGluZ1wiPlxuICAgICAgICAgICAgICAgICR7dGhpcy5fYWdlbnRJbmZvLm9uYm9hcmRpbmcudGV4dH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lkZS1ieS1zaWRlXCIgQGNsaWNrPSR7dGhpcy5fY29tcGxldGVPbmJvYXJkaW5nfT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIiR7dGhpcy5fYWdlbnRJbmZvLm9uYm9hcmRpbmcudXJsfVwiXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICAgID48bXdjLWJ1dHRvbiB1bmVsZXZhdGVkPlllcyE8L213Yy1idXR0b24+PC9hXG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8bXdjLWJ1dHRvbiBvdXRsaW5lZD5ObzwvbXdjLWJ1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICBgXG4gICAgICAgICAgOiBcIlwifVxuICAgICAgICA8cGFwZXItZGlhbG9nLXNjcm9sbGFibGVcbiAgICAgICAgICBpZD1cIm1lc3NhZ2VzXCJcbiAgICAgICAgICBjbGFzcz0ke2NsYXNzTWFwKHtcbiAgICAgICAgICAgIFwidG9wLWJvcmRlclwiOiBCb29sZWFuKFxuICAgICAgICAgICAgICB0aGlzLl9hZ2VudEluZm8gJiYgdGhpcy5fYWdlbnRJbmZvLm9uYm9hcmRpbmdcbiAgICAgICAgICAgICksXG4gICAgICAgICAgfSl9XG4gICAgICAgID5cbiAgICAgICAgICAke3RoaXMuX2NvbnZlcnNhdGlvbi5tYXAoXG4gICAgICAgICAgICAobWVzc2FnZSkgPT4gaHRtbGBcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIiR7dGhpcy5fY29tcHV0ZU1lc3NhZ2VDbGFzc2VzKG1lc3NhZ2UpfVwiPlxuICAgICAgICAgICAgICAgICR7bWVzc2FnZS50ZXh0fVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIGBcbiAgICAgICAgICApfVxuICAgICAgICAgICR7dGhpcy5yZXN1bHRzXG4gICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1lc3NhZ2UgdXNlclwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW5cbiAgICAgICAgICAgICAgICAgICAgY2xhc3M9JHtjbGFzc01hcCh7XG4gICAgICAgICAgICAgICAgICAgICAgaW50ZXJpbVRyYW5zY3JpcHQ6ICF0aGlzLnJlc3VsdHMuZmluYWwsXG4gICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICA+JHt0aGlzLnJlc3VsdHMudHJhbnNjcmlwdH08L3NwYW5cbiAgICAgICAgICAgICAgICAgID4keyF0aGlzLnJlc3VsdHMuZmluYWwgPyBcIuKAplwiIDogXCJcIn1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgOiBcIlwifVxuICAgICAgICA8L3BhcGVyLWRpYWxvZy1zY3JvbGxhYmxlPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXRcIj5cbiAgICAgICAgICA8cGFwZXItaW5wdXRcbiAgICAgICAgICAgIEBrZXl1cD0ke3RoaXMuX2hhbmRsZUtleVVwfVxuICAgICAgICAgICAgbGFiZWw9XCIke3RoaXMuaGFzcyEubG9jYWxpemUoXG4gICAgICAgICAgICAgIGB1aS5kaWFsb2dzLnZvaWNlX2NvbW1hbmQuJHtcbiAgICAgICAgICAgICAgICBTcGVlY2hSZWNvZ25pdGlvbiA/IFwibGFiZWxfdm9pY2VcIiA6IFwibGFiZWxcIlxuICAgICAgICAgICAgICB9YFxuICAgICAgICAgICAgKX1cIlxuICAgICAgICAgICAgYXV0b2ZvY3VzXG4gICAgICAgICAgPlxuICAgICAgICAgICAgJHtTcGVlY2hSZWNvZ25pdGlvblxuICAgICAgICAgICAgICA/IGh0bWxgXG4gICAgICAgICAgICAgICAgICA8c3BhbiBzdWZmaXg9XCJcIiBzbG90PVwic3VmZml4XCI+XG4gICAgICAgICAgICAgICAgICAgICR7dGhpcy5yZXN1bHRzXG4gICAgICAgICAgICAgICAgICAgICAgPyBodG1sYFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYm91bmNlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMVwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkb3VibGUtYm91bmNlMlwiPjwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIGBcbiAgICAgICAgICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgICAgICAgICAgIDxwYXBlci1pY29uLWJ1dHRvblxuICAgICAgICAgICAgICAgICAgICAgIC5hY3RpdmU9JHtCb29sZWFuKHRoaXMucmVzdWx0cyl9XG4gICAgICAgICAgICAgICAgICAgICAgaWNvbj1cImhhc3M6bWljcm9waG9uZVwiXG4gICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPSR7dGhpcy5fdG9nZ2xlTGlzdGVuaW5nfVxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDwvcGFwZXItaWNvbi1idXR0b24+XG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgYFxuICAgICAgICAgICAgICA6IFwiXCJ9XG4gICAgICAgICAgPC9wYXBlci1pbnB1dD5cbiAgICAgICAgICAke3RoaXMuX2FnZW50SW5mbyAmJiB0aGlzLl9hZ2VudEluZm8uYXR0cmlidXRpb25cbiAgICAgICAgICAgID8gaHRtbGBcbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj0ke3RoaXMuX2FnZW50SW5mby5hdHRyaWJ1dGlvbi51cmx9XG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImF0dHJpYnV0aW9uXCJcbiAgICAgICAgICAgICAgICAgIHRhcmdldD1cIl9ibGFua1wiXG4gICAgICAgICAgICAgICAgICA+JHt0aGlzLl9hZ2VudEluZm8uYXR0cmlidXRpb24ubmFtZX08L2FcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgIGBcbiAgICAgICAgICAgIDogXCJcIn1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2hhLXBhcGVyLWRpYWxvZz5cbiAgICBgO1xuICB9XG5cbiAgcHJvdGVjdGVkIGZpcnN0VXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIHRoaXMuX2NvbnZlcnNhdGlvbklkID0gdWlkKCk7XG4gICAgdGhpcy5fY29udmVyc2F0aW9uID0gW1xuICAgICAge1xuICAgICAgICB3aG86IFwiaGFzc1wiLFxuICAgICAgICB0ZXh0OiB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnZvaWNlX2NvbW1hbmQuaG93X2Nhbl9pX2hlbHBcIiksXG4gICAgICB9LFxuICAgIF07XG4gIH1cblxuICBwcm90ZWN0ZWQgdXBkYXRlZChjaGFuZ2VkUHJvcHM6IFByb3BlcnR5VmFsdWVzKSB7XG4gICAgc3VwZXIudXBkYXRlZChjaGFuZ2VkUHJvcHMpO1xuICAgIGlmIChjaGFuZ2VkUHJvcHMuaGFzKFwiX2NvbnZlcnNhdGlvblwiKSB8fCBjaGFuZ2VkUHJvcHMuaGFzKFwicmVzdWx0c1wiKSkge1xuICAgICAgdGhpcy5fc2Nyb2xsTWVzc2FnZXNCb3R0b20oKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9hZGRNZXNzYWdlKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICB0aGlzLl9jb252ZXJzYXRpb24gPSBbLi4udGhpcy5fY29udmVyc2F0aW9uLCBtZXNzYWdlXTtcbiAgfVxuXG4gIHByaXZhdGUgX2hhbmRsZUtleVVwKGV2OiBLZXlib2FyZEV2ZW50KSB7XG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQgYXMgUGFwZXJJbnB1dEVsZW1lbnQ7XG4gICAgaWYgKGV2LmtleUNvZGUgPT09IDEzICYmIGlucHV0LnZhbHVlKSB7XG4gICAgICB0aGlzLl9wcm9jZXNzVGV4dChpbnB1dC52YWx1ZSk7XG4gICAgICBpbnB1dC52YWx1ZSA9IFwiXCI7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfY29tcGxldGVPbmJvYXJkaW5nKCkge1xuICAgIHNldENvbnZlcnNhdGlvbk9uYm9hcmRpbmcodGhpcy5oYXNzLCB0cnVlKTtcbiAgICB0aGlzLl9hZ2VudEluZm8hID0geyAuLi50aGlzLl9hZ2VudEluZm8sIG9uYm9hcmRpbmc6IHVuZGVmaW5lZCB9O1xuICB9XG5cbiAgcHJpdmF0ZSBfaW5pdFJlY29nbml0aW9uKCkge1xuICAgIHRoaXMucmVjb2duaXRpb24gPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcbiAgICB0aGlzLnJlY29nbml0aW9uLmludGVyaW1SZXN1bHRzID0gdHJ1ZTtcbiAgICB0aGlzLnJlY29nbml0aW9uLmxhbmcgPSBcImVuLVVTXCI7XG5cbiAgICB0aGlzLnJlY29nbml0aW9uLm9uc3RhcnQgPSAoKSA9PiB7XG4gICAgICB0aGlzLnJlc3VsdHMgPSB7XG4gICAgICAgIGZpbmFsOiBmYWxzZSxcbiAgICAgICAgdHJhbnNjcmlwdDogXCJcIixcbiAgICAgIH07XG4gICAgfTtcbiAgICB0aGlzLnJlY29nbml0aW9uLm9uZXJyb3IgPSAoZXZlbnQpID0+IHtcbiAgICAgIHRoaXMucmVjb2duaXRpb24hLmFib3J0KCk7XG4gICAgICBpZiAoZXZlbnQuZXJyb3IgIT09IFwiYWJvcnRlZFwiKSB7XG4gICAgICAgIGNvbnN0IHRleHQgPVxuICAgICAgICAgIHRoaXMucmVzdWx0cyAmJiB0aGlzLnJlc3VsdHMudHJhbnNjcmlwdFxuICAgICAgICAgICAgPyB0aGlzLnJlc3VsdHMudHJhbnNjcmlwdFxuICAgICAgICAgICAgOiBgPCR7dGhpcy5oYXNzLmxvY2FsaXplKFxuICAgICAgICAgICAgICAgIFwidWkuZGlhbG9ncy52b2ljZV9jb21tYW5kLmRpZF9ub3RfaGVhclwiXG4gICAgICAgICAgICAgICl9PmA7XG4gICAgICAgIHRoaXMuX2FkZE1lc3NhZ2UoeyB3aG86IFwidXNlclwiLCB0ZXh0LCBlcnJvcjogdHJ1ZSB9KTtcbiAgICAgIH1cbiAgICAgIHRoaXMucmVzdWx0cyA9IG51bGw7XG4gICAgfTtcbiAgICB0aGlzLnJlY29nbml0aW9uLm9uZW5kID0gKCkgPT4ge1xuICAgICAgLy8gQWxyZWFkeSBoYW5kbGVkIGJ5IG9uZXJyb3JcbiAgICAgIGlmICh0aGlzLnJlc3VsdHMgPT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCB0ZXh0ID0gdGhpcy5yZXN1bHRzLnRyYW5zY3JpcHQ7XG4gICAgICB0aGlzLnJlc3VsdHMgPSBudWxsO1xuICAgICAgaWYgKHRleHQpIHtcbiAgICAgICAgdGhpcy5fcHJvY2Vzc1RleHQodGV4dCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9hZGRNZXNzYWdlKHtcbiAgICAgICAgICB3aG86IFwidXNlclwiLFxuICAgICAgICAgIHRleHQ6IGA8JHt0aGlzLmhhc3MubG9jYWxpemUoXG4gICAgICAgICAgICBcInVpLmRpYWxvZ3Mudm9pY2VfY29tbWFuZC5kaWRfbm90X2hlYXJcIlxuICAgICAgICAgICl9PmAsXG4gICAgICAgICAgZXJyb3I6IHRydWUsXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB0aGlzLnJlY29nbml0aW9uLm9ucmVzdWx0ID0gKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCByZXN1bHQgPSBldmVudC5yZXN1bHRzWzBdO1xuICAgICAgdGhpcy5yZXN1bHRzID0ge1xuICAgICAgICB0cmFuc2NyaXB0OiByZXN1bHRbMF0udHJhbnNjcmlwdCxcbiAgICAgICAgZmluYWw6IHJlc3VsdC5pc0ZpbmFsLFxuICAgICAgfTtcbiAgICB9O1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfcHJvY2Vzc1RleHQodGV4dDogc3RyaW5nKSB7XG4gICAgaWYgKHRoaXMucmVjb2duaXRpb24pIHtcbiAgICAgIHRoaXMucmVjb2duaXRpb24uYWJvcnQoKTtcbiAgICB9XG4gICAgdGhpcy5fYWRkTWVzc2FnZSh7IHdobzogXCJ1c2VyXCIsIHRleHQgfSk7XG4gICAgY29uc3QgbWVzc2FnZTogTWVzc2FnZSA9IHtcbiAgICAgIHdobzogXCJoYXNzXCIsXG4gICAgICB0ZXh0OiBcIuKAplwiLFxuICAgIH07XG4gICAgLy8gVG8gbWFrZSBzdXJlIHRoZSBhbnN3ZXIgaXMgcGxhY2VkIGF0IHRoZSByaWdodCB1c2VyIHRleHQsIHdlIGFkZCBpdCBiZWZvcmUgd2UgcHJvY2VzcyBpdFxuICAgIHRoaXMuX2FkZE1lc3NhZ2UobWVzc2FnZSk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcHJvY2Vzc1RleHQoXG4gICAgICAgIHRoaXMuaGFzcyxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgdGhpcy5fY29udmVyc2F0aW9uSWQhXG4gICAgICApO1xuICAgICAgY29uc3QgcGxhaW4gPSByZXNwb25zZS5zcGVlY2gucGxhaW47XG4gICAgICBtZXNzYWdlLnRleHQgPSBwbGFpbi5zcGVlY2g7XG5cbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9jb252ZXJzYXRpb25cIik7XG4gICAgfSBjYXRjaCB7XG4gICAgICBtZXNzYWdlLnRleHQgPSB0aGlzLmhhc3MubG9jYWxpemUoXCJ1aS5kaWFsb2dzLnZvaWNlX2NvbW1hbmQuZXJyb3JcIik7XG4gICAgICBtZXNzYWdlLmVycm9yID0gdHJ1ZTtcbiAgICAgIHRoaXMucmVxdWVzdFVwZGF0ZShcIl9jb252ZXJzYXRpb25cIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfdG9nZ2xlTGlzdGVuaW5nKCkge1xuICAgIGlmICghdGhpcy5yZXN1bHRzKSB7XG4gICAgICB0aGlzLl9zdGFydExpc3RlbmluZygpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJlY29nbml0aW9uIS5zdG9wKCk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfc3RhcnRMaXN0ZW5pbmcoKSB7XG4gICAgaWYgKCF0aGlzLnJlY29nbml0aW9uKSB7XG4gICAgICB0aGlzLl9pbml0UmVjb2duaXRpb24oKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5yZXN1bHRzKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhpcy5yZXN1bHRzID0ge1xuICAgICAgdHJhbnNjcmlwdDogXCJcIixcbiAgICAgIGZpbmFsOiBmYWxzZSxcbiAgICB9O1xuICAgIHRoaXMucmVjb2duaXRpb24hLnN0YXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIF9zY3JvbGxNZXNzYWdlc0JvdHRvbSgpIHtcbiAgICB0aGlzLm1lc3NhZ2VzLnNjcm9sbFRhcmdldC5zY3JvbGxUb3AgPSB0aGlzLm1lc3NhZ2VzLnNjcm9sbFRhcmdldC5zY3JvbGxIZWlnaHQ7XG4gICAgaWYgKHRoaXMubWVzc2FnZXMuc2Nyb2xsVGFyZ2V0LnNjcm9sbFRvcCA9PT0gMCkge1xuICAgICAgZmlyZUV2ZW50KHRoaXMubWVzc2FnZXMsIFwiaXJvbi1yZXNpemVcIik7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfb3BlbmVkQ2hhbmdlZChldjogQ3VzdG9tRXZlbnQpIHtcbiAgICB0aGlzLl9vcGVuZWQgPSBldi5kZXRhaWwudmFsdWU7XG4gICAgaWYgKCF0aGlzLl9vcGVuZWQgJiYgdGhpcy5yZWNvZ25pdGlvbikge1xuICAgICAgdGhpcy5yZWNvZ25pdGlvbi5hYm9ydCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2NvbXB1dGVNZXNzYWdlQ2xhc3NlcyhtZXNzYWdlOiBNZXNzYWdlKSB7XG4gICAgcmV0dXJuIGBtZXNzYWdlICR7bWVzc2FnZS53aG99ICR7bWVzc2FnZS5lcnJvciA/IFwiIGVycm9yXCIgOiBcIlwifWA7XG4gIH1cblxuICBzdGF0aWMgZ2V0IHN0eWxlcygpOiBDU1NSZXN1bHRbXSB7XG4gICAgcmV0dXJuIFtcbiAgICAgIGhhU3R5bGVEaWFsb2csXG4gICAgICBjc3NgXG4gICAgICAgIDpob3N0IHtcbiAgICAgICAgICB6LWluZGV4OiAxMDM7XG4gICAgICAgIH1cblxuICAgICAgICBwYXBlci1pY29uLWJ1dHRvbiB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHBhcGVyLWljb24tYnV0dG9uW2FjdGl2ZV0ge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMTZweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgaGEtcGFwZXItZGlhbG9nIHtcbiAgICAgICAgICB3aWR0aDogNDUwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYS5idXR0b24ge1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuICAgICAgICBhLmJ1dHRvbiA+IG13Yy1idXR0b24ge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5vbmJvYXJkaW5nIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDI0cHg7XG4gICAgICAgIH1cbiAgICAgICAgcGFwZXItZGlhbG9nLXNjcm9sbGFibGUudG9wLWJvcmRlcjo6YmVmb3JlIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgICB0b3A6IDA7XG4gICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICBoZWlnaHQ6IDFweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1kaXZpZGVyLWNvbG9yKTtcbiAgICAgICAgfVxuICAgICAgICAuc2lkZS1ieS1zaWRlIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbjogOHB4IDA7XG4gICAgICAgIH1cbiAgICAgICAgLnNpZGUtYnktc2lkZSA+ICoge1xuICAgICAgICAgIGZsZXg6IDEgMDtcbiAgICAgICAgICBwYWRkaW5nOiA0cHg7XG4gICAgICAgIH1cbiAgICAgICAgLmF0dHJpYnV0aW9uIHtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tc2Vjb25kYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG4gICAgICAgIC5tZXNzYWdlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgY2xlYXI6IGJvdGg7XG4gICAgICAgICAgbWFyZ2luOiA4cHggMDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlLnVzZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyNHB4O1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICAgICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMHB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWxpZ2h0LXByaW1hcnktY29sb3IpO1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS1wcmltYXJ5LXRleHQtY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UuaGFzcyB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNHB4O1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5tZXNzYWdlIGEge1xuICAgICAgICAgIGNvbG9yOiB2YXIoLS10ZXh0LXByaW1hcnktY29sb3IpO1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UgaW1nIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLm1lc3NhZ2UuZXJyb3Ige1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWdvb2dsZS1yZWQtNTAwKTtcbiAgICAgICAgICBjb2xvcjogdmFyKC0tdGV4dC1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbnRlcmltVHJhbnNjcmlwdCB7XG4gICAgICAgICAgY29sb3I6IHZhcigtLXNlY29uZGFyeS10ZXh0LWNvbG9yKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ib3VuY2VyIHtcbiAgICAgICAgICB3aWR0aDogNDBweDtcbiAgICAgICAgICBoZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgfVxuICAgICAgICAuZG91YmxlLWJvdW5jZTEsXG4gICAgICAgIC5kb3VibGUtYm91bmNlMiB7XG4gICAgICAgICAgd2lkdGg6IDQwcHg7XG4gICAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1wcmltYXJ5LWNvbG9yKTtcbiAgICAgICAgICBvcGFjaXR5OiAwLjI7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIHRvcDogMDtcbiAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgIC13ZWJraXQtYW5pbWF0aW9uOiBzay1ib3VuY2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgICAgYW5pbWF0aW9uOiBzay1ib3VuY2UgMnMgaW5maW5pdGUgZWFzZS1pbi1vdXQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRvdWJsZS1ib3VuY2UyIHtcbiAgICAgICAgICAtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogLTFzO1xuICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogLTFzO1xuICAgICAgICB9XG4gICAgICAgIEAtd2Via2l0LWtleWZyYW1lcyBzay1ib3VuY2Uge1xuICAgICAgICAgIDAlLFxuICAgICAgICAgIDEwMCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBAa2V5ZnJhbWVzIHNrLWJvdW5jZSB7XG4gICAgICAgICAgMCUsXG4gICAgICAgICAgMTAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDApO1xuICAgICAgICAgIH1cbiAgICAgICAgICA1MCUge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICAgIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgYWxsIGFuZCAobWF4LXdpZHRoOiA0NTBweCksIGFsbCBhbmQgKG1heC1oZWlnaHQ6IDUwMHB4KSB7XG4gICAgICAgICAgLm1lc3NhZ2Uge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYCxcbiAgICBdO1xuICB9XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcbiAgaW50ZXJmYWNlIEhUTUxFbGVtZW50VGFnTmFtZU1hcCB7XG4gICAgXCJoYS12b2ljZS1jb21tYW5kLWRpYWxvZ1wiOiBIYVZvaWNlQ29tbWFuZERpYWxvZztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQTJEQTtBQUNBO0FBNkNBO0FBRUE7QUFFQTs7Ozs7QUFLQTtBQUFBO0FBQUE7QUFQQTtBQUNBO0FBVUE7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUlBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkdBOzs7Ozs7Ozs7Ozs7QUM3RUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNiQTtBQUFBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7O0FBVUE7OztBQUdBO0FBRUE7QUFFQTtBQUNBOzs7Ozs7O0FBT0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUF2RUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFTQTs7Ozs7Ozs7Ozs7O0FDYkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBT0E7QUFDQTtBQUNBO0FBSEE7QUFOQTtBQVlBO0FBQUE7QUFFQTtBQURBO0FBREE7QUFLQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBWUE7QUFDQTtBQUNBO0FBTUE7QUFFQTtBQUNBO0FBRUE7QUFjQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUZBO0FBSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBZUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQUFBO0FBQ0E7QUFEQTtBQUtBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWZBO0FBQUE7QUFBQTtBQUFBO0FBdUJBO0FBQ0E7QUFBQTtBQUNBO0FBd0RBO0FBREE7QUFPQTtBQUFBO0FBV0E7QUFEQTtBQXFEQTtBQXRKQTtBQUFBO0FBQUE7QUFBQTtBQXlKQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFGQTtBQUtBO0FBaktBO0FBQUE7QUFBQTtBQUFBO0FBb0tBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQXhLQTtBQUFBO0FBQUE7QUFBQTtBQTJLQTtBQUNBO0FBNUtBO0FBQUE7QUFBQTtBQUFBO0FBK0tBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFwTEE7QUFBQTtBQUFBO0FBQUE7QUF1TEE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQXpMQTtBQUFBO0FBQUE7QUFBQTtBQTJMQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFMQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUE5T0E7QUFBQTtBQUFBO0FBQUE7QUFnUEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTtBQUNBO0FBWEE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQVlBO0FBS0E7QUFDQTtBQUVBO0FBcEJBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQXNCQTtBQUNBO0FBQ0E7QUFDQTtBQXpCQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQWhQQTtBQUFBO0FBQUE7QUFBQTtBQTZRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsUkE7QUFBQTtBQUFBO0FBQUE7QUFxUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFDQTtBQWxTQTtBQUFBO0FBQUE7QUFBQTtBQXFTQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUF6U0E7QUFBQTtBQUFBO0FBQUE7QUE0U0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBaFRBO0FBQUE7QUFBQTtBQUFBO0FBbVRBO0FBQ0E7QUFwVEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQXVUQTtBQWlKQTtBQXhjQTtBQUFBO0FBQUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==