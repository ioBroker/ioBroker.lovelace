(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~f3f49732"],{

/***/ "./node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js ***!
  \********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout.js */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout.js");
/* harmony import */ var _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/iron-behaviors/iron-control-state.js */ "./node_modules/@polymer/iron-behaviors/iron-control-state.js");
/* harmony import */ var _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/iron-validatable-behavior/iron-validatable-behavior.js */ "./node_modules/@polymer/iron-validatable-behavior/iron-validatable-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer.dom.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer.dom.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    <!-- the mirror sizes the input/textarea so it grows with typing -->\n    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->\n    <div id=\"mirror\" class=\"mirror-text\" aria-hidden=\"true\">&nbsp;</div>\n\n    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->\n    <div class=\"textarea-container fit\">\n      <textarea id=\"textarea\" name$=\"[[name]]\" aria-label$=\"[[label]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" inputmode$=\"[[inputmode]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" disabled$=\"[[disabled]]\" rows$=\"[[rows]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\"></textarea>\n    </div>\n"], ["\n    <style>\n      :host {\n        display: inline-block;\n        position: relative;\n        width: 400px;\n        border: 1px solid;\n        padding: 2px;\n        -moz-appearance: textarea;\n        -webkit-appearance: textarea;\n        overflow: hidden;\n      }\n\n      .mirror-text {\n        visibility: hidden;\n        word-wrap: break-word;\n        @apply --iron-autogrow-textarea;\n      }\n\n      .fit {\n        @apply --layout-fit;\n      }\n\n      textarea {\n        position: relative;\n        outline: none;\n        border: none;\n        resize: none;\n        background: inherit;\n        color: inherit;\n        /* see comments in template */\n        width: 100%;\n        height: 100%;\n        font-size: inherit;\n        font-family: inherit;\n        line-height: inherit;\n        text-align: inherit;\n        @apply --iron-autogrow-textarea;\n      }\n\n      textarea::-webkit-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea::-moz-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n\n      textarea:-ms-input-placeholder {\n        @apply --iron-autogrow-textarea-placeholder;\n      }\n    </style>\n\n    <!-- the mirror sizes the input/textarea so it grows with typing -->\n    <!-- use &#160; instead &nbsp; of to allow this element to be used in XHTML -->\n    <div id=\"mirror\" class=\"mirror-text\" aria-hidden=\"true\">&nbsp;</div>\n\n    <!-- size the input/textarea with a div, because the textarea has intrinsic size in ff -->\n    <div class=\"textarea-container fit\">\n      <textarea id=\"textarea\" name\\$=\"[[name]]\" aria-label\\$=\"[[label]]\" autocomplete\\$=\"[[autocomplete]]\" autofocus\\$=\"[[autofocus]]\" inputmode\\$=\"[[inputmode]]\" placeholder\\$=\"[[placeholder]]\" readonly\\$=\"[[readonly]]\" required\\$=\"[[required]]\" disabled\\$=\"[[disabled]]\" rows\\$=\"[[rows]]\" minlength\\$=\"[[minlength]]\" maxlength\\$=\"[[maxlength]]\"></textarea>\n    </div>\n"]);

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
`iron-autogrow-textarea` is an element containing a textarea that grows in
height as more lines of input are entered. Unless an explicit height or the
`maxRows` property is set, it will never scroll.

Example:

    <iron-autogrow-textarea></iron-autogrow-textarea>

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--iron-autogrow-textarea` | Mixin applied to the textarea | `{}`
`--iron-autogrow-textarea-placeholder` | Mixin applied to the textarea placeholder | `{}`

@group Iron Elements
@hero hero.svg
@demo demo/index.html
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_4__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject()),
  is: 'iron-autogrow-textarea',
  behaviors: [_polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronValidatableBehavior"], _polymer_iron_behaviors_iron_control_state_js__WEBPACK_IMPORTED_MODULE_2__["IronControlState"]],
  properties: {
    /**
     * Use this property instead of `bind-value` for two-way data binding.
     * @type {string|number}
     */
    value: {
      observer: '_valueChanged',
      type: String,
      notify: true
    },

    /**
     * This property is deprecated, and just mirrors `value`. Use `value`
     * instead.
     * @type {string|number}
     */
    bindValue: {
      observer: '_bindValueChanged',
      type: String,
      notify: true
    },

    /**
     * The initial number of rows.
     *
     * @attribute rows
     * @type number
     * @default 1
     */
    rows: {
      type: Number,
      value: 1,
      observer: '_updateCached'
    },

    /**
     * The maximum number of rows this element can grow to until it
     * scrolls. 0 means no maximum.
     *
     * @attribute maxRows
     * @type number
     * @default 0
     */
    maxRows: {
      type: Number,
      value: 0,
      observer: '_updateCached'
    },

    /**
     * Bound to the textarea's `autocomplete` attribute.
     */
    autocomplete: {
      type: String,
      value: 'off'
    },

    /**
     * Bound to the textarea's `autofocus` attribute.
     */
    autofocus: {
      type: Boolean,
      value: false
    },

    /**
     * Bound to the textarea's `inputmode` attribute.
     */
    inputmode: {
      type: String
    },

    /**
     * Bound to the textarea's `placeholder` attribute.
     */
    placeholder: {
      type: String
    },

    /**
     * Bound to the textarea's `readonly` attribute.
     */
    readonly: {
      type: String
    },

    /**
     * Set to true to mark the textarea as required.
     */
    required: {
      type: Boolean
    },

    /**
     * The minimum length of the input value.
     */
    minlength: {
      type: Number
    },

    /**
     * The maximum length of the input value.
     */
    maxlength: {
      type: Number
    },

    /**
     * Bound to the textarea's `aria-label` attribute.
     */
    label: {
      type: String
    }
  },
  listeners: {
    'input': '_onInput'
  },

  /**
   * Returns the underlying textarea.
   * @return {!HTMLTextAreaElement}
   */
  get textarea() {
    return this.$.textarea;
  },

  /**
   * Returns textarea's selection start.
   * @return {number}
   */
  get selectionStart() {
    return this.$.textarea.selectionStart;
  },

  /**
   * Returns textarea's selection end.
   * @return {number}
   */
  get selectionEnd() {
    return this.$.textarea.selectionEnd;
  },

  /**
   * Sets the textarea's selection start.
   */
  set selectionStart(value) {
    this.$.textarea.selectionStart = value;
  },

  /**
   * Sets the textarea's selection end.
   */
  set selectionEnd(value) {
    this.$.textarea.selectionEnd = value;
  },

  attached: function attached() {
    /* iOS has an arbitrary left margin of 3px that isn't present
     * in any other browser, and means that the paper-textarea's cursor
     * overlaps the label.
     * See https://github.com/PolymerElements/paper-input/issues/468.
     */
    var IS_IOS = navigator.userAgent.match(/iP(?:[oa]d|hone)/);

    if (IS_IOS) {
      this.$.textarea.style.marginLeft = '-3px';
    }
  },

  /**
   * Returns true if `value` is valid. The validator provided in `validator`
   * will be used first, if it exists; otherwise, the `textarea`'s validity
   * is used.
   * @return {boolean} True if the value is valid.
   */
  validate: function validate() {
    // Use the nested input's native validity.
    var valid = this.$.textarea.validity.valid; // Only do extra checking if the browser thought this was valid.

    if (valid) {
      // Empty, required input is invalid
      if (this.required && this.value === '') {
        valid = false;
      } else if (this.hasValidator()) {
        valid = _polymer_iron_validatable_behavior_iron_validatable_behavior_js__WEBPACK_IMPORTED_MODULE_3__["IronValidatableBehavior"].validate.call(this, this.value);
      }
    }

    this.invalid = !valid;
    this.fire('iron-input-validate');
    return valid;
  },
  _bindValueChanged: function _bindValueChanged(bindValue) {
    this.value = bindValue;
  },
  _valueChanged: function _valueChanged(value) {
    var textarea = this.textarea;

    if (!textarea) {
      return;
    } // If the bindValue changed manually, then we need to also update
    // the underlying textarea's value. Otherwise this change was probably
    // generated from the _onInput handler, and the two values are already
    // the same.


    if (textarea.value !== value) {
      textarea.value = !(value || value === 0) ? '' : value;
    }

    this.bindValue = value;
    this.$.mirror.innerHTML = this._valueForMirror(); // Manually notify because we don't want to notify until after setting
    // value.

    this.fire('bind-value-changed', {
      value: this.bindValue
    });
  },
  _onInput: function _onInput(event) {
    var eventPath = Object(_polymer_polymer_lib_legacy_polymer_dom_js__WEBPACK_IMPORTED_MODULE_5__["dom"])(event).path;
    this.value = eventPath ? eventPath[0].value : event.target.value;
  },
  _constrain: function _constrain(tokens) {
    var _tokens;

    tokens = tokens || ['']; // Enforce the min and max heights for a multiline input to avoid
    // measurement

    if (this.maxRows > 0 && tokens.length > this.maxRows) {
      _tokens = tokens.slice(0, this.maxRows);
    } else {
      _tokens = tokens.slice(0);
    }

    while (this.rows > 0 && _tokens.length < this.rows) {
      _tokens.push('');
    } // Use &#160; instead &nbsp; of to allow this element to be used in XHTML.


    return _tokens.join('<br/>') + '&#160;';
  },
  _valueForMirror: function _valueForMirror() {
    var input = this.textarea;

    if (!input) {
      return;
    }

    this.tokens = input && input.value ? input.value.replace(/&/gm, '&amp;').replace(/"/gm, '&quot;').replace(/'/gm, '&#39;').replace(/</gm, '&lt;').replace(/>/gm, '&gt;').split('\n') : [''];
    return this._constrain(this.tokens);
  },
  _updateCached: function _updateCached() {
    this.$.mirror.innerHTML = this._constrain(this.tokens);
  }
});

/***/ }),

/***/ "./node_modules/@polymer/paper-input/paper-textarea.js":
/*!*************************************************************!*\
  !*** ./node_modules/@polymer/paper-input/paper-textarea.js ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_legacy_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy.js */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_iron_autogrow_textarea_iron_autogrow_textarea_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-autogrow-textarea/iron-autogrow-textarea.js */ "./node_modules/@polymer/iron-autogrow-textarea/iron-autogrow-textarea.js");
/* harmony import */ var _paper_input_char_counter_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./paper-input-char-counter.js */ "./node_modules/@polymer/paper-input/paper-input-char-counter.js");
/* harmony import */ var _paper_input_container_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./paper-input-container.js */ "./node_modules/@polymer/paper-input/paper-input-container.js");
/* harmony import */ var _paper_input_error_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./paper-input-error.js */ "./node_modules/@polymer/paper-input/paper-input-error.js");
/* harmony import */ var _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/iron-form-element-behavior/iron-form-element-behavior.js */ "./node_modules/@polymer/iron-form-element-behavior/iron-form-element-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn.js */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag.js */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./paper-input-behavior.js */ "./node_modules/@polymer/paper-input/paper-input-behavior.js");
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    <style>\n      :host {\n        display: block;\n      }\n\n      :host([hidden]) {\n        display: none !important;\n      }\n\n      label {\n        pointer-events: none;\n      }\n    </style>\n\n    <paper-input-container no-label-float$=\"[[noLabelFloat]]\" always-float-label=\"[[_computeAlwaysFloatLabel(alwaysFloatLabel,placeholder)]]\" auto-validate$=\"[[autoValidate]]\" disabled$=\"[[disabled]]\" invalid=\"[[invalid]]\">\n\n      <label hidden$=\"[[!label]]\" aria-hidden=\"true\" for$=\"[[_inputId]]\" slot=\"label\">[[label]]</label>\n\n      <iron-autogrow-textarea class=\"paper-input-input\" slot=\"input\" id$=\"[[_inputId]]\" aria-labelledby$=\"[[_ariaLabelledBy]]\" aria-describedby$=\"[[_ariaDescribedBy]]\" bind-value=\"{{value}}\" invalid=\"{{invalid}}\" validator$=\"[[validator]]\" disabled$=\"[[disabled]]\" autocomplete$=\"[[autocomplete]]\" autofocus$=\"[[autofocus]]\" inputmode$=\"[[inputmode]]\" name$=\"[[name]]\" placeholder$=\"[[placeholder]]\" readonly$=\"[[readonly]]\" required$=\"[[required]]\" minlength$=\"[[minlength]]\" maxlength$=\"[[maxlength]]\" autocapitalize$=\"[[autocapitalize]]\" rows$=\"[[rows]]\" max-rows$=\"[[maxRows]]\" on-change=\"_onChange\"></iron-autogrow-textarea>\n\n      <template is=\"dom-if\" if=\"[[errorMessage]]\">\n        <paper-input-error aria-live=\"assertive\" slot=\"add-on\">[[errorMessage]]</paper-input-error>\n      </template>\n\n      <template is=\"dom-if\" if=\"[[charCounter]]\">\n        <paper-input-char-counter slot=\"add-on\"></paper-input-char-counter>\n      </template>\n\n    </paper-input-container>\n"]);

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









/*
`<paper-textarea>` is a multi-line text field with Material Design styling.

    <paper-textarea label="Textarea label"></paper-textarea>

See `Polymer.PaperInputBehavior` for more API docs.

### Validation

Currently only `required` and `maxlength` validation is supported.

### Styling

See `Polymer.PaperInputContainer` for a list of custom properties used to
style this element.
*/

Object(_polymer_polymer_lib_legacy_polymer_fn_js__WEBPACK_IMPORTED_MODULE_6__["Polymer"])({
  _template: Object(_polymer_polymer_lib_utils_html_tag_js__WEBPACK_IMPORTED_MODULE_7__["html"])(_templateObject()),
  is: 'paper-textarea',
  behaviors: [_paper_input_behavior_js__WEBPACK_IMPORTED_MODULE_8__["PaperInputBehavior"], _polymer_iron_form_element_behavior_iron_form_element_behavior_js__WEBPACK_IMPORTED_MODULE_5__["IronFormElementBehavior"]],
  properties: {
    _ariaLabelledBy: {
      observer: '_ariaLabelledByChanged',
      type: String
    },
    _ariaDescribedBy: {
      observer: '_ariaDescribedByChanged',
      type: String
    },
    value: {
      // Required for the correct TypeScript type-generation
      type: String
    },

    /**
     * The initial number of rows.
     *
     * @attribute rows
     * @type {number}
     * @default 1
     */
    rows: {
      type: Number,
      value: 1
    },

    /**
     * The maximum number of rows this element can grow to until it
     * scrolls. 0 means no maximum.
     *
     * @attribute maxRows
     * @type {number}
     * @default 0
     */
    maxRows: {
      type: Number,
      value: 0
    }
  },

  /**
   * @return {number}
   */
  get selectionStart() {
    return this.$.input.textarea.selectionStart;
  },

  set selectionStart(start) {
    this.$.input.textarea.selectionStart = start;
  },

  /**
   * @return {number}
   */
  get selectionEnd() {
    return this.$.input.textarea.selectionEnd;
  },

  set selectionEnd(end) {
    this.$.input.textarea.selectionEnd = end;
  },

  _ariaLabelledByChanged: function _ariaLabelledByChanged(ariaLabelledBy) {
    this._focusableElement.setAttribute('aria-labelledby', ariaLabelledBy);
  },
  _ariaDescribedByChanged: function _ariaDescribedByChanged(ariaDescribedBy) {
    this._focusableElement.setAttribute('aria-describedby', ariaDescribedBy);
  },

  get _focusableElement() {
    return this.inputElement.textarea;
  }

});

/***/ })

}]);
//# sourceMappingURL=vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~f3f49732.chunk.js.map