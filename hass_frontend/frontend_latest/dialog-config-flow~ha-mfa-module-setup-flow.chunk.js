(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dialog-config-flow~ha-mfa-module-setup-flow"],{

/***/ "./src/components/ha-form.js":
/*!***********************************!*\
  !*** ./src/components/ha-form.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_paper_slider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-paper-slider */ "./src/components/ha-paper-slider.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");










/*
 * @appliesMixin EventsMixin
 */

class HaForm extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_9__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style>
        .error {
          color: red;
        }
        paper-checkbox {
          display: inline-block;
          padding: 22px 0;
        }
      </style>
      <template is="dom-if" if="[[_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error.base]]">
          <div class="error">[[computeError(error.base, schema)]]</div>
        </template>

        <template is="dom-repeat" items="[[schema]]">
          <ha-form
            data="[[_getValue(data, item)]]"
            schema="[[item]]"
            error="[[_getValue(error, item)]]"
            on-data-changed="_valueChanged"
            compute-label="[[computeLabel]]"
            compute-error="[[computeError]]"
          ></ha-form>
        </template>
      </template>
      <template is="dom-if" if="[[!_isArray(schema)]]" restamp="">
        <template is="dom-if" if="[[error]]">
          <div class="error">[[computeError(error, schema)]]</div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "string")]]'
          restamp=""
        >
          <template
            is="dom-if"
            if='[[_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              type="[[_passwordFieldType(unmaskedPassword)]]"
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            >
              <paper-icon-button
                toggles
                active="{{unmaskedPassword}}"
                slot="suffix"
                icon="[[_passwordFieldIcon(unmaskedPassword)]]"
                id="iconButton"
                title="Click to toggle between masked and clear password"
              >
              </paper-icon-button>
            </paper-input>
          </template>
          <template
            is="dom-if"
            if='[[!_includes(schema.name, "password")]]'
            restamp=""
          >
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "integer")]]'
          restamp=""
        >
          <template is="dom-if" if="[[_isRange(schema)]]" restamp="">
            <div>
              [[computeLabel(schema)]]
              <ha-paper-slider
                pin=""
                value="{{data}}"
                min="[[schema.valueMin]]"
                max="[[schema.valueMax]]"
              ></ha-paper-slider>
            </div>
          </template>
          <template is="dom-if" if="[[!_isRange(schema)]]" restamp="">
            <paper-input
              label="[[computeLabel(schema)]]"
              value="{{data}}"
              type="number"
              required="[[schema.required]]"
              auto-validate="[[schema.required]]"
              error-message="Required"
            ></paper-input>
          </template>
        </template>

        <template is="dom-if" if='[[_equals(schema.type, "float")]]' restamp="">
          <!-- TODO -->
          <paper-input
            label="[[computeLabel(schema)]]"
            value="{{data}}"
            required="[[schema.required]]"
            auto-validate="[[schema.required]]"
            error-message="Required"
          ></paper-input>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "boolean")]]'
          restamp=""
        >
          <div>
            <paper-checkbox checked="{{data}}"
              >[[computeLabel(schema)]]</paper-checkbox
            >
          </div>
        </template>

        <template
          is="dom-if"
          if='[[_equals(schema.type, "select")]]'
          restamp=""
        >
          <paper-dropdown-menu label="[[computeLabel(schema)]]">
            <paper-listbox
              slot="dropdown-content"
              attr-for-selected="item-name"
              selected="{{data}}"
            >
              <template is="dom-repeat" items="[[schema.options]]">
                <paper-item item-name$="[[_optionValue(item)]]"
                  >[[_optionLabel(item)]]</paper-item
                >
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </template>
      </template>
    `;
  }

  static get properties() {
    return {
      data: {
        type: Object,
        notify: true
      },
      schema: Object,
      error: Object,
      // A function that will computes the label to be displayed for a given
      // schema object.
      computeLabel: {
        type: Function,
        value: () => schema => schema && schema.name
      },
      // A function that will computes an error message to be displayed for a
      // given error ID, and relevant schema object
      computeError: {
        type: Function,
        value: () => (error, schema) => error // eslint-disable-line no-unused-vars

      }
    };
  }

  focus() {
    const input = this.shadowRoot.querySelector("ha-form, paper-input, ha-paper-slider, paper-checkbox, paper-dropdown-menu");

    if (!input) {
      return;
    }

    input.focus();
  }

  _isArray(val) {
    return Array.isArray(val);
  }

  _isRange(schema) {
    return "valueMin" in schema && "valueMax" in schema;
  }

  _equals(a, b) {
    return a === b;
  }

  _includes(a, b) {
    return a.indexOf(b) >= 0;
  }

  _getValue(obj, item) {
    if (obj) {
      return obj[item.name];
    }

    return null;
  }

  _valueChanged(ev) {
    let value = ev.detail.value;

    if (ev.model.item.type === "integer") {
      value = Number(ev.detail.value);
    }

    this.set(["data", ev.model.item.name], value);
  }

  _passwordFieldType(unmaskedPassword) {
    return unmaskedPassword ? "text" : "password";
  }

  _passwordFieldIcon(unmaskedPassword) {
    return unmaskedPassword ? "hass:eye-off" : "hass:eye";
  }

  _optionValue(item) {
    return Array.isArray(item) ? item[0] : item;
  }

  _optionLabel(item) {
    return Array.isArray(item) ? item[1] : item;
  }

}

customElements.define("ha-form", HaForm);

/***/ }),

/***/ "./src/components/ha-markdown.js":
/*!***************************************!*\
  !*** ./src/components/ha-markdown.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");


let loaded = null;
/**
 * White list allowed svg tag.
 * Only put in the tag used in QR code, can be extend in future.
 */

const svgWhiteList = ["svg", "path"];
/*
 * @appliesMixin EventsMixin
 */

class HaMarkdown extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_1__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]) {
  static get properties() {
    return {
      content: {
        type: String,
        observer: "_render"
      },
      allowSvg: {
        type: Boolean,
        value: false
      }
    };
  }

  connectedCallback() {
    super.connectedCallback(); // 0 = not loaded, 1 = success, 2 = error

    this._scriptLoaded = 0;
    this._renderScheduled = false;

    this._resize = () => this.fire("iron-resize");

    if (!loaded) {
      loaded = Promise.all(/*! import() | load_markdown */[__webpack_require__.e("vendors~load_markdown"), __webpack_require__.e("load_markdown")]).then(__webpack_require__.bind(null, /*! ../resources/load_markdown */ "./src/resources/load_markdown.js"));
    }

    loaded.then(({
      marked,
      filterXSS
    }) => {
      this.marked = marked;
      this.filterXSS = filterXSS;
      this._scriptLoaded = 1;
    }, () => {
      this._scriptLoaded = 2;
    }).then(() => this._render());
  }

  _render() {
    if (this._scriptLoaded === 0 || this._renderScheduled) return;
    this._renderScheduled = true; // debounce it to next microtask.

    Promise.resolve().then(() => {
      this._renderScheduled = false;

      if (this._scriptLoaded === 1) {
        this.innerHTML = this.filterXSS(this.marked(this.content, {
          gfm: true,
          tables: true,
          breaks: true
        }), {
          onIgnoreTag: this.allowSvg ? (tag, html) => svgWhiteList.indexOf(tag) >= 0 ? html : null : null
        });

        this._resize();

        const walker = document.createTreeWalker(this, 1
        /* SHOW_ELEMENT */
        , null, false);

        while (walker.nextNode()) {
          const node = walker.currentNode; // Open external links in a new window

          if (node.tagName === "A" && node.host !== document.location.host) {
            node.target = "_blank"; // Fire a resize event when images loaded to notify content resized
          } else if (node.tagName === "IMG") {
            node.addEventListener("load", this._resize);
          }
        }
      } else if (this._scriptLoaded === 2) {
        this.innerText = this.content;
      }
    });
  }

}

customElements.define("ha-markdown", HaMarkdown);

/***/ }),

/***/ "./src/components/ha-paper-slider.js":
/*!*******************************************!*\
  !*** ./src/components/ha-paper-slider.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_slider_paper_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-slider/paper-slider */ "./node_modules/@polymer/paper-slider/paper-slider.js");

/**
 * @polymer
 * @customElement
 * @appliesMixin paper-slider
 */

const PaperSliderClass = customElements.get("paper-slider");

class HaPaperSlider extends PaperSliderClass {
  static get template() {
    const tpl = document.createElement("template");
    tpl.innerHTML = PaperSliderClass.template.innerHTML;
    const styleEl = document.createElement("style");
    styleEl.innerHTML = `
      .pin > .slider-knob > .slider-knob-inner {
        font-size:  var(--ha-paper-slider-pin-font-size, 10px);
        line-height: normal;
      }

      .pin > .slider-knob > .slider-knob-inner::before {
        top: unset;
        margin-left: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        width: 2.2em;
        height: 2.2em;

        -webkit-transform-origin: left bottom;
        transform-origin: left bottom;
        -webkit-transform: rotate(-45deg) scale(0) translate(0);
        transform: rotate(-45deg) scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::before {
        -webkit-transform: rotate(-45deg) scale(1) translate(7px, -7px);
        transform: rotate(-45deg) scale(1) translate(7px, -7px);
      }

      .pin > .slider-knob > .slider-knob-inner::after {
        top: unset;
        font-size: unset;

        bottom: calc(15px + var(--calculated-paper-slider-height)/2);
        left: 50%;
        margin-left: -1.1em;
        width: 2.2em;
        height: 2.1em;

        -webkit-transform-origin: center bottom;
        transform-origin: center bottom;
        -webkit-transform: scale(0) translate(0);
        transform: scale(0) translate(0);
      }

      .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -10px);
        transform: scale(1) translate(0, -10px);
      }

      :host([dir="rtl"]) .pin.expand > .slider-knob > .slider-knob-inner::after {
        -webkit-transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        transform: scale(1) translate(0, -17px) scaleX(-1) !important;
        }
    `;
    tpl.content.appendChild(styleEl);
    return tpl;
  }

}

customElements.define("ha-paper-slider", HaPaperSlider);

/***/ })

}]);
//# sourceMappingURL=dialog-config-flow~ha-mfa-module-setup-flow.chunk.js.map