(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-dev-template"],{

/***/ "./src/panels/dev-template/ha-panel-dev-template.js":
/*!**********************************************************!*\
  !*** ./src/panels/dev-template/ha-panel-dev-template.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");












class HaPanelDevTemplate extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <style include="ha-style iron-flex iron-positioning"></style>
      <style>
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px;
          direction: ltr;
        }

        .edit-pane {
          margin-right: 16px;
        }

        .edit-pane a {
          color: var(--dark-primary-color);
        }

        .horizontal .edit-pane {
          max-width: 50%;
        }

        .render-pane {
          position: relative;
          max-width: 50%;
        }

        .render-spinner {
          position: absolute;
          top: 8px;
          right: 8px;
        }

        paper-textarea {
          --paper-input-container-input: {
            @apply --paper-font-code1;
          }
        }

        .rendered {
          @apply --paper-font-code1;
          clear: both;
          white-space: pre-wrap;
        }

        .rendered.error {
          color: red;
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button></ha-menu-button>
            <div main-title>Templates</div>
          </app-toolbar>
        </app-header>

        <div class$="[[computeFormClasses(narrow)]]">
          <div class="edit-pane">
            <p>
              Templates are rendered using the Jinja2 template engine with some
              ioBroker specific extensions.
            </p>
            <ul>
              <li>
                <a
                  href="http://jinja.pocoo.org/docs/dev/templates/"
                  target="_blank"
                  >Jinja2 template documentation</a
                >
              </li>
              <li>
                <a
                  href="https://home-assistant.io/docs/configuration/templating/"
                  target="_blank"
                  >ioBroker template extensions</a
                >
              </li>
            </ul>
            <paper-textarea
              label="Template editor"
              value="{{template}}"
              autofocus
            ></paper-textarea>
          </div>

          <div class="render-pane">
            <paper-spinner
              class="render-spinner"
              active="[[rendering]]"
            ></paper-spinner>
            <pre class$="[[computeRenderedClasses(error)]]">[[processed]]</pre>
          </div>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      error: {
        type: Boolean,
        value: false
      },
      rendering: {
        type: Boolean,
        value: false
      },
      template: {
        type: String,

        /* eslint-disable max-len */
        value: `Imitate available variables:
{% set my_test_json = {
  "temperature": 25,
  "unit": "°C"
} %}

The temperature is {{ my_test_json.temperature }} {{ my_test_json.unit }}.

{% if is_state("device_tracker.paulus", "home") and
      is_state("device_tracker.anne_therese", "home") -%}
  You are both home, you silly
{%- else -%}
  Anne Therese is at {{ states("device_tracker.anne_therese") }}
  Paulus is at {{ states("device_tracker.paulus") }}
{%- endif %}

For loop example:
{% for state in states.sensor -%}
  {%- if loop.first %}The {% elif loop.last %} and the {% else %}, the {% endif -%}
  {{ state.name | lower }} is {{state.state_with_unit}}
{%- endfor %}.`,

        /* eslint-enable max-len */
        observer: "templateChanged"
      },
      processed: {
        type: String,
        value: ""
      }
    };
  }

  computeFormClasses(narrow) {
    return narrow ? "content fit" : "content fit layout horizontal";
  }

  computeRenderedClasses(error) {
    return error ? "error rendered" : "rendered";
  }

  templateChanged() {
    if (this.error) {
      this.error = false;
    }

    this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_6__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_5__["timeOut"].after(500), () => {
      this.renderTemplate();
    });
  }

  renderTemplate() {
    this.rendering = true;
    this.hass.callApi("POST", "template", {
      template: this.template
    }).then(function (processed) {
      this.processed = processed;
      this.rendering = false;
    }.bind(this), function (error) {
      this.processed = error && error.body && error.body.message || "Unknown error rendering template";
      this.error = true;
      this.rendering = false;
    }.bind(this));
  }

}

customElements.define("ha-panel-dev-template", HaPanelDevTemplate);

/***/ })

}]);
//# sourceMappingURL=panel-dev-template.chunk.js.map