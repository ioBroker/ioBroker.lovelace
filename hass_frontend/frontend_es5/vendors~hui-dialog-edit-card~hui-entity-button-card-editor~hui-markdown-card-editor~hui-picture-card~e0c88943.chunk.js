(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["vendors~hui-dialog-edit-card~hui-entity-button-card-editor~hui-markdown-card-editor~hui-picture-card~e0c88943"],{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVuZG9yc35odWktZGlhbG9nLWVkaXQtY2FyZH5odWktZW50aXR5LWJ1dHRvbi1jYXJkLWVkaXRvcn5odWktbWFya2Rvd24tY2FyZC1lZGl0b3J+aHVpLXBpY3R1cmUtY2FyZH5lMGM4ODk0My5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AcG9seW1lci9pcm9uLWF1dG9ncm93LXRleHRhcmVhL2lyb24tYXV0b2dyb3ctdGV4dGFyZWEuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0Bwb2x5bWVyL3BhcGVyLWlucHV0L3BhcGVyLXRleHRhcmVhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuQGxpY2Vuc2VcbkNvcHlyaWdodCAoYykgMjAxNSBUaGUgUG9seW1lciBQcm9qZWN0IEF1dGhvcnMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG5UaGlzIGNvZGUgbWF5IG9ubHkgYmUgdXNlZCB1bmRlciB0aGUgQlNEIHN0eWxlIGxpY2Vuc2UgZm91bmQgYXRcbmh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9MSUNFTlNFLnR4dCBUaGUgY29tcGxldGUgc2V0IG9mIGF1dGhvcnMgbWF5IGJlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vQVVUSE9SUy50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBjb250cmlidXRvcnMgbWF5IGJlXG5mb3VuZCBhdCBodHRwOi8vcG9seW1lci5naXRodWIuaW8vQ09OVFJJQlVUT1JTLnR4dCBDb2RlIGRpc3RyaWJ1dGVkIGJ5IEdvb2dsZSBhc1xucGFydCBvZiB0aGUgcG9seW1lciBwcm9qZWN0IGlzIGFsc28gc3ViamVjdCB0byBhbiBhZGRpdGlvbmFsIElQIHJpZ2h0cyBncmFudFxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL1BBVEVOVFMudHh0XG4qL1xuaW1wb3J0ICdAcG9seW1lci9wb2x5bWVyL3BvbHltZXItbGVnYWN5LmpzJztcbmltcG9ydCAnQHBvbHltZXIvaXJvbi1mbGV4LWxheW91dC9pcm9uLWZsZXgtbGF5b3V0LmpzJztcblxuaW1wb3J0IHtJcm9uQ29udHJvbFN0YXRlfSBmcm9tICdAcG9seW1lci9pcm9uLWJlaGF2aW9ycy9pcm9uLWNvbnRyb2wtc3RhdGUuanMnO1xuaW1wb3J0IHtJcm9uVmFsaWRhdGFibGVCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi12YWxpZGF0YWJsZS1iZWhhdmlvci9pcm9uLXZhbGlkYXRhYmxlLWJlaGF2aW9yLmpzJztcbmltcG9ydCB7UG9seW1lcn0gZnJvbSAnQHBvbHltZXIvcG9seW1lci9saWIvbGVnYWN5L3BvbHltZXItZm4uanMnO1xuaW1wb3J0IHtkb219IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL2xlZ2FjeS9wb2x5bWVyLmRvbS5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuLyoqXG5gaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYWAgaXMgYW4gZWxlbWVudCBjb250YWluaW5nIGEgdGV4dGFyZWEgdGhhdCBncm93cyBpblxuaGVpZ2h0IGFzIG1vcmUgbGluZXMgb2YgaW5wdXQgYXJlIGVudGVyZWQuIFVubGVzcyBhbiBleHBsaWNpdCBoZWlnaHQgb3IgdGhlXG5gbWF4Um93c2AgcHJvcGVydHkgaXMgc2V0LCBpdCB3aWxsIG5ldmVyIHNjcm9sbC5cblxuRXhhbXBsZTpcblxuICAgIDxpcm9uLWF1dG9ncm93LXRleHRhcmVhPjwvaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYT5cblxuIyMjIFN0eWxpbmdcblxuVGhlIGZvbGxvd2luZyBjdXN0b20gcHJvcGVydGllcyBhbmQgbWl4aW5zIGFyZSBhdmFpbGFibGUgZm9yIHN0eWxpbmc6XG5cbkN1c3RvbSBwcm9wZXJ0eSB8IERlc2NyaXB0aW9uIHwgRGVmYXVsdFxuLS0tLS0tLS0tLS0tLS0tLXwtLS0tLS0tLS0tLS0tfC0tLS0tLS0tLS1cbmAtLWlyb24tYXV0b2dyb3ctdGV4dGFyZWFgIHwgTWl4aW4gYXBwbGllZCB0byB0aGUgdGV4dGFyZWEgfCBge31gXG5gLS1pcm9uLWF1dG9ncm93LXRleHRhcmVhLXBsYWNlaG9sZGVyYCB8IE1peGluIGFwcGxpZWQgdG8gdGhlIHRleHRhcmVhIHBsYWNlaG9sZGVyIHwgYHt9YFxuXG5AZ3JvdXAgSXJvbiBFbGVtZW50c1xuQGhlcm8gaGVyby5zdmdcbkBkZW1vIGRlbW8vaW5kZXguaHRtbFxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICAgICAgcGFkZGluZzogMnB4O1xuICAgICAgICAtbW96LWFwcGVhcmFuY2U6IHRleHRhcmVhO1xuICAgICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRhcmVhO1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgfVxuXG4gICAgICAubWlycm9yLXRleHQge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYTtcbiAgICAgIH1cblxuICAgICAgLmZpdCB7XG4gICAgICAgIEBhcHBseSAtLWxheW91dC1maXQ7XG4gICAgICB9XG5cbiAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIHJlc2l6ZTogbm9uZTtcbiAgICAgICAgYmFja2dyb3VuZDogaW5oZXJpdDtcbiAgICAgICAgY29sb3I6IGluaGVyaXQ7XG4gICAgICAgIC8qIHNlZSBjb21tZW50cyBpbiB0ZW1wbGF0ZSAqL1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICBmb250LXNpemU6IGluaGVyaXQ7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBpbmhlcml0O1xuICAgICAgICBsaW5lLWhlaWdodDogaW5oZXJpdDtcbiAgICAgICAgdGV4dC1hbGlnbjogaW5oZXJpdDtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYTtcbiAgICAgIH1cblxuICAgICAgdGV4dGFyZWE6Oi13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWF1dG9ncm93LXRleHRhcmVhLXBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYTotbW96LXBsYWNlaG9sZGVyIHtcbiAgICAgICAgQGFwcGx5IC0taXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYS1wbGFjZWhvbGRlcjtcbiAgICAgIH1cblxuICAgICAgdGV4dGFyZWE6Oi1tb3otcGxhY2Vob2xkZXIge1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWF1dG9ncm93LXRleHRhcmVhLXBsYWNlaG9sZGVyO1xuICAgICAgfVxuXG4gICAgICB0ZXh0YXJlYTotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgICAgICBAYXBwbHkgLS1pcm9uLWF1dG9ncm93LXRleHRhcmVhLXBsYWNlaG9sZGVyO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8IS0tIHRoZSBtaXJyb3Igc2l6ZXMgdGhlIGlucHV0L3RleHRhcmVhIHNvIGl0IGdyb3dzIHdpdGggdHlwaW5nIC0tPlxuICAgIDwhLS0gdXNlICYjMTYwOyBpbnN0ZWFkICZuYnNwOyBvZiB0byBhbGxvdyB0aGlzIGVsZW1lbnQgdG8gYmUgdXNlZCBpbiBYSFRNTCAtLT5cbiAgICA8ZGl2IGlkPVwibWlycm9yXCIgY2xhc3M9XCJtaXJyb3ItdGV4dFwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiPiZuYnNwOzwvZGl2PlxuXG4gICAgPCEtLSBzaXplIHRoZSBpbnB1dC90ZXh0YXJlYSB3aXRoIGEgZGl2LCBiZWNhdXNlIHRoZSB0ZXh0YXJlYSBoYXMgaW50cmluc2ljIHNpemUgaW4gZmYgLS0+XG4gICAgPGRpdiBjbGFzcz1cInRleHRhcmVhLWNvbnRhaW5lciBmaXRcIj5cbiAgICAgIDx0ZXh0YXJlYSBpZD1cInRleHRhcmVhXCIgbmFtZVxcJD1cIltbbmFtZV1dXCIgYXJpYS1sYWJlbFxcJD1cIltbbGFiZWxdXVwiIGF1dG9jb21wbGV0ZVxcJD1cIltbYXV0b2NvbXBsZXRlXV1cIiBhdXRvZm9jdXNcXCQ9XCJbW2F1dG9mb2N1c11dXCIgaW5wdXRtb2RlXFwkPVwiW1tpbnB1dG1vZGVdXVwiIHBsYWNlaG9sZGVyXFwkPVwiW1twbGFjZWhvbGRlcl1dXCIgcmVhZG9ubHlcXCQ9XCJbW3JlYWRvbmx5XV1cIiByZXF1aXJlZFxcJD1cIltbcmVxdWlyZWRdXVwiIGRpc2FibGVkXFwkPVwiW1tkaXNhYmxlZF1dXCIgcm93c1xcJD1cIltbcm93c11dXCIgbWlubGVuZ3RoXFwkPVwiW1ttaW5sZW5ndGhdXVwiIG1heGxlbmd0aFxcJD1cIltbbWF4bGVuZ3RoXV1cIj48L3RleHRhcmVhPlxuICAgIDwvZGl2PlxuYCxcblxuICBpczogJ2lyb24tYXV0b2dyb3ctdGV4dGFyZWEnLFxuICBiZWhhdmlvcnM6IFtJcm9uVmFsaWRhdGFibGVCZWhhdmlvciwgSXJvbkNvbnRyb2xTdGF0ZV0sXG5cbiAgcHJvcGVydGllczoge1xuICAgIC8qKlxuICAgICAqIFVzZSB0aGlzIHByb3BlcnR5IGluc3RlYWQgb2YgYGJpbmQtdmFsdWVgIGZvciB0d28td2F5IGRhdGEgYmluZGluZy5cbiAgICAgKiBAdHlwZSB7c3RyaW5nfG51bWJlcn1cbiAgICAgKi9cbiAgICB2YWx1ZToge29ic2VydmVyOiAnX3ZhbHVlQ2hhbmdlZCcsIHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoaXMgcHJvcGVydHkgaXMgZGVwcmVjYXRlZCwgYW5kIGp1c3QgbWlycm9ycyBgdmFsdWVgLiBVc2UgYHZhbHVlYFxuICAgICAqIGluc3RlYWQuXG4gICAgICogQHR5cGUge3N0cmluZ3xudW1iZXJ9XG4gICAgICovXG4gICAgYmluZFZhbHVlOiB7b2JzZXJ2ZXI6ICdfYmluZFZhbHVlQ2hhbmdlZCcsIHR5cGU6IFN0cmluZywgbm90aWZ5OiB0cnVlfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBpbml0aWFsIG51bWJlciBvZiByb3dzLlxuICAgICAqXG4gICAgICogQGF0dHJpYnV0ZSByb3dzXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHJvd3M6IHt0eXBlOiBOdW1iZXIsIHZhbHVlOiAxLCBvYnNlcnZlcjogJ191cGRhdGVDYWNoZWQnfSxcblxuICAgIC8qKlxuICAgICAqIFRoZSBtYXhpbXVtIG51bWJlciBvZiByb3dzIHRoaXMgZWxlbWVudCBjYW4gZ3JvdyB0byB1bnRpbCBpdFxuICAgICAqIHNjcm9sbHMuIDAgbWVhbnMgbm8gbWF4aW11bS5cbiAgICAgKlxuICAgICAqIEBhdHRyaWJ1dGUgbWF4Um93c1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBtYXhSb3dzOiB7dHlwZTogTnVtYmVyLCB2YWx1ZTogMCwgb2JzZXJ2ZXI6ICdfdXBkYXRlQ2FjaGVkJ30sXG5cbiAgICAvKipcbiAgICAgKiBCb3VuZCB0byB0aGUgdGV4dGFyZWEncyBgYXV0b2NvbXBsZXRlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgYXV0b2NvbXBsZXRlOiB7dHlwZTogU3RyaW5nLCB2YWx1ZTogJ29mZid9LFxuXG4gICAgLyoqXG4gICAgICogQm91bmQgdG8gdGhlIHRleHRhcmVhJ3MgYGF1dG9mb2N1c2AgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGF1dG9mb2N1czoge3R5cGU6IEJvb2xlYW4sIHZhbHVlOiBmYWxzZX0sXG5cbiAgICAvKipcbiAgICAgKiBCb3VuZCB0byB0aGUgdGV4dGFyZWEncyBgaW5wdXRtb2RlYCBhdHRyaWJ1dGUuXG4gICAgICovXG4gICAgaW5wdXRtb2RlOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIEJvdW5kIHRvIHRoZSB0ZXh0YXJlYSdzIGBwbGFjZWhvbGRlcmAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHBsYWNlaG9sZGVyOiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIEJvdW5kIHRvIHRoZSB0ZXh0YXJlYSdzIGByZWFkb25seWAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5OiB7dHlwZTogU3RyaW5nfSxcblxuICAgIC8qKlxuICAgICAqIFNldCB0byB0cnVlIHRvIG1hcmsgdGhlIHRleHRhcmVhIGFzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlcXVpcmVkOiB7dHlwZTogQm9vbGVhbn0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWluaW11bSBsZW5ndGggb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqL1xuICAgIG1pbmxlbmd0aDoge3R5cGU6IE51bWJlcn0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBsZW5ndGggb2YgdGhlIGlucHV0IHZhbHVlLlxuICAgICAqL1xuICAgIG1heGxlbmd0aDoge3R5cGU6IE51bWJlcn0sXG5cbiAgICAvKipcbiAgICAgKiBCb3VuZCB0byB0aGUgdGV4dGFyZWEncyBgYXJpYS1sYWJlbGAgYXR0cmlidXRlLlxuICAgICAqL1xuICAgIGxhYmVsOiB7dHlwZTogU3RyaW5nfVxuXG4gIH0sXG5cbiAgbGlzdGVuZXJzOiB7J2lucHV0JzogJ19vbklucHV0J30sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIHVuZGVybHlpbmcgdGV4dGFyZWEuXG4gICAqIEByZXR1cm4geyFIVE1MVGV4dEFyZWFFbGVtZW50fVxuICAgKi9cbiAgZ2V0IHRleHRhcmVhKCkge1xuICAgIHJldHVybiB0aGlzLiQudGV4dGFyZWE7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGV4dGFyZWEncyBzZWxlY3Rpb24gc3RhcnQuXG4gICAqIEByZXR1cm4ge251bWJlcn1cbiAgICovXG4gIGdldCBzZWxlY3Rpb25TdGFydCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnRleHRhcmVhLnNlbGVjdGlvblN0YXJ0O1xuICB9LFxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRleHRhcmVhJ3Mgc2VsZWN0aW9uIGVuZC5cbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlbGVjdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLnRleHRhcmVhLnNlbGVjdGlvbkVuZDtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dGFyZWEncyBzZWxlY3Rpb24gc3RhcnQuXG4gICAqL1xuICBzZXQgc2VsZWN0aW9uU3RhcnQodmFsdWUpIHtcbiAgICB0aGlzLiQudGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQgPSB2YWx1ZTtcbiAgfSxcblxuICAvKipcbiAgICogU2V0cyB0aGUgdGV4dGFyZWEncyBzZWxlY3Rpb24gZW5kLlxuICAgKi9cbiAgc2V0IHNlbGVjdGlvbkVuZCh2YWx1ZSkge1xuICAgIHRoaXMuJC50ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSB2YWx1ZTtcbiAgfSxcblxuICBhdHRhY2hlZDogZnVuY3Rpb24oKSB7XG4gICAgLyogaU9TIGhhcyBhbiBhcmJpdHJhcnkgbGVmdCBtYXJnaW4gb2YgM3B4IHRoYXQgaXNuJ3QgcHJlc2VudFxuICAgICAqIGluIGFueSBvdGhlciBicm93c2VyLCBhbmQgbWVhbnMgdGhhdCB0aGUgcGFwZXItdGV4dGFyZWEncyBjdXJzb3JcbiAgICAgKiBvdmVybGFwcyB0aGUgbGFiZWwuXG4gICAgICogU2VlIGh0dHBzOi8vZ2l0aHViLmNvbS9Qb2x5bWVyRWxlbWVudHMvcGFwZXItaW5wdXQvaXNzdWVzLzQ2OC5cbiAgICAgKi9cbiAgICB2YXIgSVNfSU9TID0gbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCgvaVAoPzpbb2FdZHxob25lKS8pO1xuICAgIGlmIChJU19JT1MpIHtcbiAgICAgIHRoaXMuJC50ZXh0YXJlYS5zdHlsZS5tYXJnaW5MZWZ0ID0gJy0zcHgnO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogUmV0dXJucyB0cnVlIGlmIGB2YWx1ZWAgaXMgdmFsaWQuIFRoZSB2YWxpZGF0b3IgcHJvdmlkZWQgaW4gYHZhbGlkYXRvcmBcbiAgICogd2lsbCBiZSB1c2VkIGZpcnN0LCBpZiBpdCBleGlzdHM7IG90aGVyd2lzZSwgdGhlIGB0ZXh0YXJlYWAncyB2YWxpZGl0eVxuICAgKiBpcyB1c2VkLlxuICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2YWx1ZSBpcyB2YWxpZC5cbiAgICovXG4gIHZhbGlkYXRlOiBmdW5jdGlvbigpIHtcbiAgICAvLyBVc2UgdGhlIG5lc3RlZCBpbnB1dCdzIG5hdGl2ZSB2YWxpZGl0eS5cbiAgICB2YXIgdmFsaWQgPSB0aGlzLiQudGV4dGFyZWEudmFsaWRpdHkudmFsaWQ7XG5cbiAgICAvLyBPbmx5IGRvIGV4dHJhIGNoZWNraW5nIGlmIHRoZSBicm93c2VyIHRob3VnaHQgdGhpcyB3YXMgdmFsaWQuXG4gICAgaWYgKHZhbGlkKSB7XG4gICAgICAvLyBFbXB0eSwgcmVxdWlyZWQgaW5wdXQgaXMgaW52YWxpZFxuICAgICAgaWYgKHRoaXMucmVxdWlyZWQgJiYgdGhpcy52YWx1ZSA9PT0gJycpIHtcbiAgICAgICAgdmFsaWQgPSBmYWxzZTtcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5oYXNWYWxpZGF0b3IoKSkge1xuICAgICAgICB2YWxpZCA9IElyb25WYWxpZGF0YWJsZUJlaGF2aW9yLnZhbGlkYXRlLmNhbGwodGhpcywgdGhpcy52YWx1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5pbnZhbGlkID0gIXZhbGlkO1xuICAgIHRoaXMuZmlyZSgnaXJvbi1pbnB1dC12YWxpZGF0ZScpO1xuICAgIHJldHVybiB2YWxpZDtcbiAgfSxcblxuICBfYmluZFZhbHVlQ2hhbmdlZDogZnVuY3Rpb24oYmluZFZhbHVlKSB7XG4gICAgdGhpcy52YWx1ZSA9IGJpbmRWYWx1ZTtcbiAgfSxcblxuICBfdmFsdWVDaGFuZ2VkOiBmdW5jdGlvbih2YWx1ZSkge1xuICAgIHZhciB0ZXh0YXJlYSA9IHRoaXMudGV4dGFyZWE7XG4gICAgaWYgKCF0ZXh0YXJlYSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIElmIHRoZSBiaW5kVmFsdWUgY2hhbmdlZCBtYW51YWxseSwgdGhlbiB3ZSBuZWVkIHRvIGFsc28gdXBkYXRlXG4gICAgLy8gdGhlIHVuZGVybHlpbmcgdGV4dGFyZWEncyB2YWx1ZS4gT3RoZXJ3aXNlIHRoaXMgY2hhbmdlIHdhcyBwcm9iYWJseVxuICAgIC8vIGdlbmVyYXRlZCBmcm9tIHRoZSBfb25JbnB1dCBoYW5kbGVyLCBhbmQgdGhlIHR3byB2YWx1ZXMgYXJlIGFscmVhZHlcbiAgICAvLyB0aGUgc2FtZS5cbiAgICBpZiAodGV4dGFyZWEudmFsdWUgIT09IHZhbHVlKSB7XG4gICAgICB0ZXh0YXJlYS52YWx1ZSA9ICEodmFsdWUgfHwgdmFsdWUgPT09IDApID8gJycgOiB2YWx1ZTtcbiAgICB9XG5cbiAgICB0aGlzLmJpbmRWYWx1ZSA9IHZhbHVlO1xuICAgIHRoaXMuJC5taXJyb3IuaW5uZXJIVE1MID0gdGhpcy5fdmFsdWVGb3JNaXJyb3IoKTtcblxuICAgIC8vIE1hbnVhbGx5IG5vdGlmeSBiZWNhdXNlIHdlIGRvbid0IHdhbnQgdG8gbm90aWZ5IHVudGlsIGFmdGVyIHNldHRpbmdcbiAgICAvLyB2YWx1ZS5cbiAgICB0aGlzLmZpcmUoJ2JpbmQtdmFsdWUtY2hhbmdlZCcsIHt2YWx1ZTogdGhpcy5iaW5kVmFsdWV9KTtcbiAgfSxcblxuICBfb25JbnB1dDogZnVuY3Rpb24oZXZlbnQpIHtcbiAgICB2YXIgZXZlbnRQYXRoID0gZG9tKGV2ZW50KS5wYXRoO1xuICAgIHRoaXMudmFsdWUgPSBldmVudFBhdGggPyBldmVudFBhdGhbMF0udmFsdWUgOiBldmVudC50YXJnZXQudmFsdWU7XG4gIH0sXG5cbiAgX2NvbnN0cmFpbjogZnVuY3Rpb24odG9rZW5zKSB7XG4gICAgdmFyIF90b2tlbnM7XG4gICAgdG9rZW5zID0gdG9rZW5zIHx8IFsnJ107XG4gICAgLy8gRW5mb3JjZSB0aGUgbWluIGFuZCBtYXggaGVpZ2h0cyBmb3IgYSBtdWx0aWxpbmUgaW5wdXQgdG8gYXZvaWRcbiAgICAvLyBtZWFzdXJlbWVudFxuICAgIGlmICh0aGlzLm1heFJvd3MgPiAwICYmIHRva2Vucy5sZW5ndGggPiB0aGlzLm1heFJvd3MpIHtcbiAgICAgIF90b2tlbnMgPSB0b2tlbnMuc2xpY2UoMCwgdGhpcy5tYXhSb3dzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgX3Rva2VucyA9IHRva2Vucy5zbGljZSgwKTtcbiAgICB9XG4gICAgd2hpbGUgKHRoaXMucm93cyA+IDAgJiYgX3Rva2Vucy5sZW5ndGggPCB0aGlzLnJvd3MpIHtcbiAgICAgIF90b2tlbnMucHVzaCgnJyk7XG4gICAgfVxuICAgIC8vIFVzZSAmIzE2MDsgaW5zdGVhZCAmbmJzcDsgb2YgdG8gYWxsb3cgdGhpcyBlbGVtZW50IHRvIGJlIHVzZWQgaW4gWEhUTUwuXG4gICAgcmV0dXJuIF90b2tlbnMuam9pbignPGJyLz4nKSArICcmIzE2MDsnO1xuICB9LFxuXG4gIF92YWx1ZUZvck1pcnJvcjogZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlucHV0ID0gdGhpcy50ZXh0YXJlYTtcbiAgICBpZiAoIWlucHV0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMudG9rZW5zID0gKGlucHV0ICYmIGlucHV0LnZhbHVlKSA/IGlucHV0LnZhbHVlLnJlcGxhY2UoLyYvZ20sICcmYW1wOycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC9cIi9nbSwgJyZxdW90OycpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXBsYWNlKC8nL2dtLCAnJiMzOTsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPC9nbSwgJyZsdDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVwbGFjZSgvPi9nbSwgJyZndDsnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuc3BsaXQoJ1xcbicpIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbJyddO1xuICAgIHJldHVybiB0aGlzLl9jb25zdHJhaW4odGhpcy50b2tlbnMpO1xuICB9LFxuXG4gIF91cGRhdGVDYWNoZWQ6IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuJC5taXJyb3IuaW5uZXJIVE1MID0gdGhpcy5fY29uc3RyYWluKHRoaXMudG9rZW5zKTtcbiAgfVxufSk7XG4iLCIvKipcbkBsaWNlbnNlXG5Db3B5cmlnaHQgKGMpIDIwMTUgVGhlIFBvbHltZXIgUHJvamVjdCBBdXRob3JzLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuVGhpcyBjb2RlIG1heSBvbmx5IGJlIHVzZWQgdW5kZXIgdGhlIEJTRCBzdHlsZSBsaWNlbnNlIGZvdW5kIGF0XG5odHRwOi8vcG9seW1lci5naXRodWIuaW8vTElDRU5TRS50eHQgVGhlIGNvbXBsZXRlIHNldCBvZiBhdXRob3JzIG1heSBiZSBmb3VuZCBhdFxuaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0FVVEhPUlMudHh0IFRoZSBjb21wbGV0ZSBzZXQgb2YgY29udHJpYnV0b3JzIG1heSBiZVxuZm91bmQgYXQgaHR0cDovL3BvbHltZXIuZ2l0aHViLmlvL0NPTlRSSUJVVE9SUy50eHQgQ29kZSBkaXN0cmlidXRlZCBieSBHb29nbGUgYXNcbnBhcnQgb2YgdGhlIHBvbHltZXIgcHJvamVjdCBpcyBhbHNvIHN1YmplY3QgdG8gYW4gYWRkaXRpb25hbCBJUCByaWdodHMgZ3JhbnRcbmZvdW5kIGF0IGh0dHA6Ly9wb2x5bWVyLmdpdGh1Yi5pby9QQVRFTlRTLnR4dFxuKi9cbmltcG9ydCAnQHBvbHltZXIvcG9seW1lci9wb2x5bWVyLWxlZ2FjeS5qcyc7XG5pbXBvcnQgJ0Bwb2x5bWVyL2lyb24tYXV0b2dyb3ctdGV4dGFyZWEvaXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYS5qcyc7XG5pbXBvcnQgJy4vcGFwZXItaW5wdXQtY2hhci1jb3VudGVyLmpzJztcbmltcG9ydCAnLi9wYXBlci1pbnB1dC1jb250YWluZXIuanMnO1xuaW1wb3J0ICcuL3BhcGVyLWlucHV0LWVycm9yLmpzJztcblxuaW1wb3J0IHtJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcn0gZnJvbSAnQHBvbHltZXIvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IvaXJvbi1mb3JtLWVsZW1lbnQtYmVoYXZpb3IuanMnO1xuaW1wb3J0IHtQb2x5bWVyfSBmcm9tICdAcG9seW1lci9wb2x5bWVyL2xpYi9sZWdhY3kvcG9seW1lci1mbi5qcyc7XG5pbXBvcnQge2h0bWx9IGZyb20gJ0Bwb2x5bWVyL3BvbHltZXIvbGliL3V0aWxzL2h0bWwtdGFnLmpzJztcblxuaW1wb3J0IHtQYXBlcklucHV0QmVoYXZpb3J9IGZyb20gJy4vcGFwZXItaW5wdXQtYmVoYXZpb3IuanMnO1xuXG4vKlxuYDxwYXBlci10ZXh0YXJlYT5gIGlzIGEgbXVsdGktbGluZSB0ZXh0IGZpZWxkIHdpdGggTWF0ZXJpYWwgRGVzaWduIHN0eWxpbmcuXG5cbiAgICA8cGFwZXItdGV4dGFyZWEgbGFiZWw9XCJUZXh0YXJlYSBsYWJlbFwiPjwvcGFwZXItdGV4dGFyZWE+XG5cblNlZSBgUG9seW1lci5QYXBlcklucHV0QmVoYXZpb3JgIGZvciBtb3JlIEFQSSBkb2NzLlxuXG4jIyMgVmFsaWRhdGlvblxuXG5DdXJyZW50bHkgb25seSBgcmVxdWlyZWRgIGFuZCBgbWF4bGVuZ3RoYCB2YWxpZGF0aW9uIGlzIHN1cHBvcnRlZC5cblxuIyMjIFN0eWxpbmdcblxuU2VlIGBQb2x5bWVyLlBhcGVySW5wdXRDb250YWluZXJgIGZvciBhIGxpc3Qgb2YgY3VzdG9tIHByb3BlcnRpZXMgdXNlZCB0b1xuc3R5bGUgdGhpcyBlbGVtZW50LlxuKi9cblBvbHltZXIoe1xuICBfdGVtcGxhdGU6IGh0bWxgXG4gICAgPHN0eWxlPlxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgOmhvc3QoW2hpZGRlbl0pIHtcbiAgICAgICAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xuICAgICAgfVxuXG4gICAgICBsYWJlbCB7XG4gICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICAgICAgfVxuICAgIDwvc3R5bGU+XG5cbiAgICA8cGFwZXItaW5wdXQtY29udGFpbmVyIG5vLWxhYmVsLWZsb2F0JD1cIltbbm9MYWJlbEZsb2F0XV1cIiBhbHdheXMtZmxvYXQtbGFiZWw9XCJbW19jb21wdXRlQWx3YXlzRmxvYXRMYWJlbChhbHdheXNGbG9hdExhYmVsLHBsYWNlaG9sZGVyKV1dXCIgYXV0by12YWxpZGF0ZSQ9XCJbW2F1dG9WYWxpZGF0ZV1dXCIgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCIgaW52YWxpZD1cIltbaW52YWxpZF1dXCI+XG5cbiAgICAgIDxsYWJlbCBoaWRkZW4kPVwiW1shbGFiZWxdXVwiIGFyaWEtaGlkZGVuPVwidHJ1ZVwiIGZvciQ9XCJbW19pbnB1dElkXV1cIiBzbG90PVwibGFiZWxcIj5bW2xhYmVsXV08L2xhYmVsPlxuXG4gICAgICA8aXJvbi1hdXRvZ3Jvdy10ZXh0YXJlYSBjbGFzcz1cInBhcGVyLWlucHV0LWlucHV0XCIgc2xvdD1cImlucHV0XCIgaWQkPVwiW1tfaW5wdXRJZF1dXCIgYXJpYS1sYWJlbGxlZGJ5JD1cIltbX2FyaWFMYWJlbGxlZEJ5XV1cIiBhcmlhLWRlc2NyaWJlZGJ5JD1cIltbX2FyaWFEZXNjcmliZWRCeV1dXCIgYmluZC12YWx1ZT1cInt7dmFsdWV9fVwiIGludmFsaWQ9XCJ7e2ludmFsaWR9fVwiIHZhbGlkYXRvciQ9XCJbW3ZhbGlkYXRvcl1dXCIgZGlzYWJsZWQkPVwiW1tkaXNhYmxlZF1dXCIgYXV0b2NvbXBsZXRlJD1cIltbYXV0b2NvbXBsZXRlXV1cIiBhdXRvZm9jdXMkPVwiW1thdXRvZm9jdXNdXVwiIGlucHV0bW9kZSQ9XCJbW2lucHV0bW9kZV1dXCIgbmFtZSQ9XCJbW25hbWVdXVwiIHBsYWNlaG9sZGVyJD1cIltbcGxhY2Vob2xkZXJdXVwiIHJlYWRvbmx5JD1cIltbcmVhZG9ubHldXVwiIHJlcXVpcmVkJD1cIltbcmVxdWlyZWRdXVwiIG1pbmxlbmd0aCQ9XCJbW21pbmxlbmd0aF1dXCIgbWF4bGVuZ3RoJD1cIltbbWF4bGVuZ3RoXV1cIiBhdXRvY2FwaXRhbGl6ZSQ9XCJbW2F1dG9jYXBpdGFsaXplXV1cIiByb3dzJD1cIltbcm93c11dXCIgbWF4LXJvd3MkPVwiW1ttYXhSb3dzXV1cIiBvbi1jaGFuZ2U9XCJfb25DaGFuZ2VcIj48L2lyb24tYXV0b2dyb3ctdGV4dGFyZWE+XG5cbiAgICAgIDx0ZW1wbGF0ZSBpcz1cImRvbS1pZlwiIGlmPVwiW1tlcnJvck1lc3NhZ2VdXVwiPlxuICAgICAgICA8cGFwZXItaW5wdXQtZXJyb3IgYXJpYS1saXZlPVwiYXNzZXJ0aXZlXCIgc2xvdD1cImFkZC1vblwiPltbZXJyb3JNZXNzYWdlXV08L3BhcGVyLWlucHV0LWVycm9yPlxuICAgICAgPC90ZW1wbGF0ZT5cblxuICAgICAgPHRlbXBsYXRlIGlzPVwiZG9tLWlmXCIgaWY9XCJbW2NoYXJDb3VudGVyXV1cIj5cbiAgICAgICAgPHBhcGVyLWlucHV0LWNoYXItY291bnRlciBzbG90PVwiYWRkLW9uXCI+PC9wYXBlci1pbnB1dC1jaGFyLWNvdW50ZXI+XG4gICAgICA8L3RlbXBsYXRlPlxuXG4gICAgPC9wYXBlci1pbnB1dC1jb250YWluZXI+XG5gLFxuXG4gIGlzOiAncGFwZXItdGV4dGFyZWEnLFxuXG4gIGJlaGF2aW9yczogW1xuICAgIFBhcGVySW5wdXRCZWhhdmlvcixcbiAgICBJcm9uRm9ybUVsZW1lbnRCZWhhdmlvcixcbiAgXSxcblxuICBwcm9wZXJ0aWVzOiB7XG4gICAgX2FyaWFMYWJlbGxlZEJ5OiB7XG4gICAgICBvYnNlcnZlcjogJ19hcmlhTGFiZWxsZWRCeUNoYW5nZWQnLFxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgICBfYXJpYURlc2NyaWJlZEJ5OiB7XG4gICAgICBvYnNlcnZlcjogJ19hcmlhRGVzY3JpYmVkQnlDaGFuZ2VkJyxcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICB9LFxuXG4gICAgdmFsdWU6IHtcbiAgICAgIC8vIFJlcXVpcmVkIGZvciB0aGUgY29ycmVjdCBUeXBlU2NyaXB0IHR5cGUtZ2VuZXJhdGlvblxuICAgICAgdHlwZTogU3RyaW5nLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaW5pdGlhbCBudW1iZXIgb2Ygcm93cy5cbiAgICAgKlxuICAgICAqIEBhdHRyaWJ1dGUgcm93c1xuICAgICAqIEB0eXBlIHtudW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIHJvd3M6IHtcbiAgICAgIHR5cGU6IE51bWJlcixcbiAgICAgIHZhbHVlOiAxLFxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbWF4aW11bSBudW1iZXIgb2Ygcm93cyB0aGlzIGVsZW1lbnQgY2FuIGdyb3cgdG8gdW50aWwgaXRcbiAgICAgKiBzY3JvbGxzLiAwIG1lYW5zIG5vIG1heGltdW0uXG4gICAgICpcbiAgICAgKiBAYXR0cmlidXRlIG1heFJvd3NcbiAgICAgKiBAdHlwZSB7bnVtYmVyfVxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cbiAgICBtYXhSb3dzOiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogMCxcbiAgICB9LFxuICB9LFxuXG4gIC8qKlxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqL1xuICBnZXQgc2VsZWN0aW9uU3RhcnQoKSB7XG4gICAgcmV0dXJuIHRoaXMuJC5pbnB1dC50ZXh0YXJlYS5zZWxlY3Rpb25TdGFydDtcbiAgfSxcblxuICBzZXQgc2VsZWN0aW9uU3RhcnQoc3RhcnQpIHtcbiAgICB0aGlzLiQuaW5wdXQudGV4dGFyZWEuc2VsZWN0aW9uU3RhcnQgPSBzdGFydDtcbiAgfSxcblxuICAvKipcbiAgICogQHJldHVybiB7bnVtYmVyfVxuICAgKi9cbiAgZ2V0IHNlbGVjdGlvbkVuZCgpIHtcbiAgICByZXR1cm4gdGhpcy4kLmlucHV0LnRleHRhcmVhLnNlbGVjdGlvbkVuZDtcbiAgfSxcblxuICBzZXQgc2VsZWN0aW9uRW5kKGVuZCkge1xuICAgIHRoaXMuJC5pbnB1dC50ZXh0YXJlYS5zZWxlY3Rpb25FbmQgPSBlbmQ7XG4gIH0sXG5cbiAgX2FyaWFMYWJlbGxlZEJ5Q2hhbmdlZDogZnVuY3Rpb24oYXJpYUxhYmVsbGVkQnkpIHtcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1sYWJlbGxlZGJ5JywgYXJpYUxhYmVsbGVkQnkpO1xuICB9LFxuXG4gIF9hcmlhRGVzY3JpYmVkQnlDaGFuZ2VkOiBmdW5jdGlvbihhcmlhRGVzY3JpYmVkQnkpIHtcbiAgICB0aGlzLl9mb2N1c2FibGVFbGVtZW50LnNldEF0dHJpYnV0ZSgnYXJpYS1kZXNjcmliZWRieScsIGFyaWFEZXNjcmliZWRCeSk7XG4gIH0sXG5cbiAgZ2V0IF9mb2N1c2FibGVFbGVtZW50KCkge1xuICAgIHJldHVybiB0aGlzLmlucHV0RWxlbWVudC50ZXh0YXJlYTtcbiAgfVxufSk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQW1FQTtBQUNBO0FBRUE7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7OztBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7O0FBT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FBUUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUE1RUE7QUFnRkE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFPQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBclNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekNBOzs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBZ0JBO0FBQ0E7QUFnQ0E7QUFFQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFLQTtBQUNBO0FBQ0E7QUFGQTtBQUtBO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUZBO0FBQ0E7QUFJQTs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFGQTtBQXBDQTtBQUNBO0FBeUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbkhBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=