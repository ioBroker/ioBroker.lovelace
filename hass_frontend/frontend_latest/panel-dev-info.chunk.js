(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-dev-info"],{

/***/ "./src/common/datetime/format_date_time.ts":
/*!*************************************************!*\
  !*** ./src/common/datetime/format_date_time.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleStringSupportsOptions() {
  try {
    new Date().toLocaleString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleString(locales, {
  year: "numeric",
  month: "long",
  day: "numeric",
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "haDateTime"));

/***/ }),

/***/ "./src/common/datetime/format_time.ts":
/*!********************************************!*\
  !*** ./src/common/datetime/format_time.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var fecha__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fecha */ "./node_modules/fecha/src/fecha.js");
 // Check for support of native locale string options

function toLocaleTimeStringSupportsOptions() {
  try {
    new Date().toLocaleTimeString("i");
  } catch (e) {
    return e.name === "RangeError";
  }

  return false;
}

/* harmony default export */ __webpack_exports__["default"] = (toLocaleTimeStringSupportsOptions() ? (dateObj, locales) => dateObj.toLocaleTimeString(locales, {
  hour: "numeric",
  minute: "2-digit"
}) : dateObj => fecha__WEBPACK_IMPORTED_MODULE_0__["default"].format(dateObj, "shortTime"));

/***/ }),

/***/ "./src/components/buttons/ha-call-service-button.js":
/*!**********************************************************!*\
  !*** ./src/components/buttons/ha-call-service-button.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");




/*
 * @appliesMixin EventsMixin
 */

class HaCallServiceButton extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        id="progress"
        progress="[[progress]]"
        on-click="buttonTapped"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      domain: {
        type: String
      },
      service: {
        type: String
      },
      serviceData: {
        type: Object,
        value: {}
      }
    };
  }

  buttonTapped() {
    this.progress = true;
    var el = this;
    var eventData = {
      domain: this.domain,
      service: this.service,
      serviceData: this.serviceData
    };
    this.hass.callService(this.domain, this.service, this.serviceData).then(function () {
      el.progress = false;
      el.$.progress.actionSuccess();
      eventData.success = true;
    }, function () {
      el.progress = false;
      el.$.progress.actionError();
      eventData.success = false;
    }).then(function () {
      el.fire("hass-service-called", eventData);
    });
  }

}

customElements.define("ha-call-service-button", HaCallServiceButton);

/***/ }),

/***/ "./src/components/buttons/ha-progress-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-progress-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");





class HaProgressButton extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        .container {
          position: relative;
          display: inline-block;
        }

        mwc-button {
          transition: all 1s;
        }

        .success mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-green-500);
          transition: none;
        }

        .error mwc-button {
          --mdc-theme-primary: white;
          background-color: var(--google-red-500);
          transition: none;
        }

        .progress {
          @apply --layout;
          @apply --layout-center-center;
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
        }
      </style>
      <div class="container" id="container">
        <mwc-button
          id="button"
          disabled="[[computeDisabled(disabled, progress)]]"
          on-click="buttonTapped"
        >
          <slot></slot>
        </mwc-button>
        <template is="dom-if" if="[[progress]]">
          <div class="progress"><paper-spinner active=""></paper-spinner></div>
        </template>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      progress: {
        type: Boolean,
        value: false
      },
      disabled: {
        type: Boolean,
        value: false
      }
    };
  }

  tempClass(className) {
    var classList = this.$.container.classList;
    classList.add(className);
    setTimeout(() => {
      classList.remove(className);
    }, 1000);
  }

  ready() {
    super.ready();
    this.addEventListener("click", ev => this.buttonTapped(ev));
  }

  buttonTapped(ev) {
    if (this.progress) ev.stopPropagation();
  }

  actionSuccess() {
    this.tempClass("success");
  }

  actionError() {
    this.tempClass("error");
  }

  computeDisabled(disabled, progress) {
    return disabled || progress;
  }

}

customElements.define("ha-progress-button", HaProgressButton);

/***/ }),

/***/ "./src/data/error_log.ts":
/*!*******************************!*\
  !*** ./src/data/error_log.ts ***!
  \*******************************/
/*! exports provided: fetchErrorLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchErrorLog", function() { return fetchErrorLog; });
const fetchErrorLog = hass => hass.callApi("GET", "error_log");

/***/ }),

/***/ "./src/data/system_health.ts":
/*!***********************************!*\
  !*** ./src/data/system_health.ts ***!
  \***********************************/
/*! exports provided: fetchSystemHealthInfo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSystemHealthInfo", function() { return fetchSystemHealthInfo; });
const fetchSystemHealthInfo = hass => hass.callWS({
  type: "system_health/info"
});

/***/ }),

/***/ "./src/data/system_log.ts":
/*!********************************!*\
  !*** ./src/data/system_log.ts ***!
  \********************************/
/*! exports provided: fetchSystemLog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchSystemLog", function() { return fetchSystemLog; });
const fetchSystemLog = hass => hass.callApi("GET", "error/all");

/***/ }),

/***/ "./src/mixins/events-mixin.js":
/*!************************************!*\
  !*** ./src/mixins/events-mixin.js ***!
  \************************************/
/*! exports provided: EventsMixin */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventsMixin", function() { return EventsMixin; });
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

 // Polymer legacy event helpers used courtesy of the Polymer project.
//
// Copyright (c) 2017 The Polymer Authors. All rights reserved.
//
// Redistribution and use in source and binary forms, with or without
// modification, are permitted provided that the following conditions are
// met:
//
//    * Redistributions of source code must retain the above copyright
// notice, this list of conditions and the following disclaimer.
//    * Redistributions in binary form must reproduce the above
// copyright notice, this list of conditions and the following disclaimer
// in the documentation and/or other materials provided with the
// distribution.
//    * Neither the name of Google Inc. nor the names of its
// contributors may be used to endorse or promote products derived from
// this software without specific prior written permission.
//
// THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
// "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
// LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
// A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
// OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
// SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
// LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
// DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
// THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
// (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
// OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

/* @polymerMixin */

const EventsMixin = Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  /**
  * Dispatches a custom event with an optional detail value.
  *
  * @param {string} type Name of event type.
  * @param {*=} detail Detail value containing event-specific
  *   payload.
  * @param {{ bubbles: (boolean|undefined),
           cancelable: (boolean|undefined),
            composed: (boolean|undefined) }=}
  *  options Object specifying options.  These may include:
  *  `bubbles` (boolean, defaults to `true`),
  *  `cancelable` (boolean, defaults to false), and
  *  `node` on which to fire the event (HTMLElement, defaults to `this`).
  * @return {Event} The new event that was fired.
  */
  fire(type, detail, options) {
    options = options || {};
    return Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_1__["fireEvent"])(options.node || this, type, detail, options);
  }

});

/***/ }),

/***/ "./src/panels/dev-info/error-log-card.ts":
/*!***********************************************!*\
  !*** ./src/panels/dev-info/error-log-card.ts ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _data_error_log__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/error_log */ "./src/data/error_log.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






class ErrorLogCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "_errorLog", void 0);
  }

  static get properties() {
    return {
      hass: {},
      _errorLog: {}
    };
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <p class="error-log-intro">
        ${this._errorLog ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <paper-icon-button
                icon="hass:refresh"
                @click=${this._refreshErrorLog}
              ></paper-icon-button>
            ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <mwc-button raised @click=${this._refreshErrorLog}>
                Load Full ioBroker Log
              </mwc-button>
            `}
      </p>
      <div class="error-log">${this._errorLog}</div>
    `;
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      .error-log-intro {
        text-align: center;
        margin: 16px;
      }

      paper-icon-button {
        float: right;
      }

      .error-log {
        @apply --paper-font-code)
          clear: both;
        white-space: pre-wrap;
        margin: 16px;
      }
    `;
  }

  async _refreshErrorLog() {
    this._errorLog = "Loading error log…";
    const log = await Object(_data_error_log__WEBPACK_IMPORTED_MODULE_3__["fetchErrorLog"])(this.hass);
    this._errorLog = log || "No errors have been reported.";
  }

}

customElements.define("error-log-card", ErrorLogCard);

/***/ }),

/***/ "./src/panels/dev-info/ha-panel-dev-info.ts":
/*!**************************************************!*\
  !*** ./src/panels/dev-info/ha-panel-dev-info.ts ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../resources/styles */ "./src/resources/styles.ts");
/* harmony import */ var _system_log_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./system-log-card */ "./src/panels/dev-info/system-log-card.ts");
/* harmony import */ var _error_log_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./error-log-card */ "./src/panels/dev-info/error-log-card.ts");
/* harmony import */ var _system_health_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./system-health-card */ "./src/panels/dev-info/system-health-card.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }










const JS_VERSION = "latest";
const OPT_IN_PANEL = "states";

class HaPanelDevInfo extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);
  }

  static get properties() {
    return {
      hass: {}
    };
  }

  render() {
    const hass = this.hass;

    if (!hass) {
      return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``;
    }

    const customUiList = window.CUSTOM_UI_LIST || [];
    const nonDefaultLink = localStorage.defaultPage === OPT_IN_PANEL && OPT_IN_PANEL === "states" ? "/lovelace" : "/states";
    const nonDefaultLinkText = localStorage.defaultPage === OPT_IN_PANEL && OPT_IN_PANEL === "states" ? "Go to the Lovelace UI" : "Go to the states UI";
    const defaultPageText = `${localStorage.defaultPage === OPT_IN_PANEL ? "Remove" : "Set"} ${OPT_IN_PANEL} as default page on this device`;
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button></ha-menu-button>
            <div main-title>About</div>
          </app-toolbar>
        </app-header>

        <div class="content">
          <div class="about">
            <p class="version">
              <a href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1" target="_blank"
                ><img src="/static/icons/favicon-192x192.png" height="192"/></a
              ><br />
              ioBroker<br />
              ${hass.config.version}
            </p>
            <p>
              Path to configuration.yaml: ${hass.config.config_dir}
            </p>
            <p class="develop">
              <a
                href="https://www.home-assistant.io/developers/credits/"
                target="_blank"
              >
                Developed by a bunch of awesome people.
              </a>
            </p>
            <p>
              Published under the Apache 2.0 license<br />
              Source:
              <a
                href="https://github.com/home-assistant/home-assistant"
                target="_blank"
                >server</a
              >
              &mdash;
              <a
                href="https://github.com/home-assistant/home-assistant-polymer"
                target="_blank"
                >frontend-ui</a
              >
            </p>
            <p>
              Built using
              <a href="https://www.python.org">Python 3</a>,
              <a href="https://www.polymer-project.org" target="_blank"
                >Polymer</a
              >, Icons by
              <a href="https://www.google.com/design/icons/" target="_blank"
                >Google</a
              >
              and
              <a href="https://MaterialDesignIcons.com" target="_blank"
                >MaterialDesignIcons.com</a
              >.
            </p>
            <p>
              Frontend JavaScript version: ${JS_VERSION}
              ${customUiList.length > 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                    <div>
                      Custom UIs:
                      ${customUiList.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                          <div>
                            <a href="${item.url}" target="_blank">
                              ${item.name}</a
                            >: ${item.version}
                          </div>
                        `)}
                    </div>
                  ` : ""}
            </p>
            <p>
              <a href="${nonDefaultLink}">${nonDefaultLinkText}</a><br />
              <mwc-button @click="${this._toggleDefaultPage}" raised>
                ${defaultPageText}
              </mwc-button>
            </p>
          </div>
          <system-health-card .hass=${this.hass}></system-health-card>
          <system-log-card .hass=${this.hass}></system-log-card>
          <error-log-card .hass=${this.hass}></error-log-card>
        </div>
      </app-header-layout>
    `;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps); // Legacy custom UI can be slow to register, give them time.

    const customUI = (window.CUSTOM_UI_LIST || []).length;
    setTimeout(() => {
      if ((window.CUSTOM_UI_LIST || []).length !== customUI.length) {
        this.requestUpdate();
      }
    }, 1000);
  }

  _toggleDefaultPage() {
    if (localStorage.defaultPage === OPT_IN_PANEL) {
      delete localStorage.defaultPage;
    } else {
      localStorage.defaultPage = OPT_IN_PANEL;
    }

    this.requestUpdate();
  }

  static get styles() {
    return [_resources_styles__WEBPACK_IMPORTED_MODULE_5__["haStyle"], lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          padding: 16px 0px 16px 0;
          direction: ltr;
        }

        .about {
          text-align: center;
          line-height: 2em;
        }

        .version {
          @apply --paper-font-headline;
        }

        .develop {
          @apply --paper-font-subhead;
        }

        .about a {
          color: var(--dark-primary-color);
        }

        system-health-card {
          display: block;
          max-width: 600px;
          margin: 0 auto;
        }
      `];
  }

}

customElements.define("ha-panel-dev-info", HaPanelDevInfo);

/***/ }),

/***/ "./src/panels/dev-info/show-dialog-system-log-detail.ts":
/*!**************************************************************!*\
  !*** ./src/panels/dev-info/show-dialog-system-log-detail.ts ***!
  \**************************************************************/
/*! exports provided: showSystemLogDetailDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showSystemLogDetailDialog", function() { return showSystemLogDetailDialog; });
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");

let registeredDialog = false;
const dialogShowEvent = "show-dialog-system-log-detail";
const dialogTag = "dialog-system-log-detail";

const registerDialog = element => Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, "register-dialog", {
  dialogShowEvent,
  dialogTag,
  dialogImport: () => Promise.all(/*! import() | system-log-detail-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~dialog-cloud-certificate~dialog-conf~c4d256c6"), __webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("vendors~system-log-detail-dialog"), __webpack_require__.e("system-log-detail-dialog")]).then(__webpack_require__.bind(null, /*! ./dialog-system-log-detail */ "./src/panels/dev-info/dialog-system-log-detail.ts"))
});

const showSystemLogDetailDialog = (element, systemLogDetailParams) => {
  if (!registeredDialog) {
    registeredDialog = true;
    registerDialog(element);
  }

  Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_0__["fireEvent"])(element, dialogShowEvent, systemLogDetailParams);
};

/***/ }),

/***/ "./src/panels/dev-info/system-health-card.ts":
/*!***************************************************!*\
  !*** ./src/panels/dev-info/system-health-card.ts ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _data_system_health__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../data/system_health */ "./src/data/system_health.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const sortKeys = (a, b) => {
  if (a === "homeassistant") {
    return -1;
  }

  if (b === "homeassistant") {
    return 1;
  }

  if (a < b) {
    return -1;
  }

  if (b < a) {
    return 1;
  }

  return 0;
};

class SystemHealthCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "_info", void 0);
  }

  static get properties() {
    return {
      hass: {},
      _info: {}
    };
  }

  render() {
    if (!this.hass) {
      return;
    }

    const sections = [];

    if (!this._info) {
      sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <div class="loading-container">
            <paper-spinner active></paper-spinner>
          </div>
        `);
    } else {
      const domains = Object.keys(this._info).sort(sortKeys);

      for (const domain of domains) {
        const keys = [];

        for (const key of Object.keys(this._info[domain]).sort()) {
          keys.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
            <tr>
              <td>${key}</td>
              <td>${this._info[domain][key]}</td>
            </tr>
          `);
        }

        if (domain !== "homeassistant") {
          sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
              <h3>${this.hass.localize(`domain.${domain}`) || domain}</h3>
            `);
        }

        sections.push(lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
          <table>
            ${keys}
          </table>
        `);
      }
    }

    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-card header="System Health">
        <div class="card-content">${sections}</div>
      </ha-card>
    `;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this._fetchInfo();
  }

  async _fetchInfo() {
    try {
      if (!this.hass.config.components.includes("system_health")) {
        throw new Error();
      }

      this._info = await Object(_data_system_health__WEBPACK_IMPORTED_MODULE_3__["fetchSystemHealthInfo"])(this.hass);
    } catch (err) {
      this._info = {
        system_health: {
          error: "System Health component is not loaded. Add 'system_health:' to configuration.yaml"
        }
      };
    }
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      table {
        width: 100%;
      }

      td:first-child {
        width: 33%;
      }

      .loading-container {
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }

}

customElements.define("system-health-card", SystemHealthCard);

/***/ }),

/***/ "./src/panels/dev-info/system-log-card.ts":
/*!************************************************!*\
  !*** ./src/panels/dev-info/system-log-card.ts ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_buttons_ha_progress_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/buttons/ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _data_system_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../data/system_log */ "./src/data/system_log.ts");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _common_datetime_format_time__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../common/datetime/format_time */ "./src/common/datetime/format_time.ts");
/* harmony import */ var _show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./show-dialog-system-log-detail */ "./src/panels/dev-info/show-dialog-system-log-detail.ts");
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const formatLogTime = (date, language) => {
  const today = new Date().setHours(0, 0, 0, 0);
  const dateTime = new Date(date * 1000);
  const dateTimeDay = new Date(date * 1000).setHours(0, 0, 0, 0);
  return dateTimeDay < today ? Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_9__["default"])(dateTime, language) : Object(_common_datetime_format_time__WEBPACK_IMPORTED_MODULE_10__["default"])(dateTime, language);
};

class SystemLogCard extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "hass", void 0);

    _defineProperty(this, "_items", void 0);
  }

  static get properties() {
    return {
      hass: {},
      _items: {}
    };
  }

  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <div class="system-log-intro">
        <ha-card>
          ${this._items === undefined ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                <div class="loading-container">
                  <paper-spinner active></paper-spinner>
                </div>
              ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                ${this._items.length === 0 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                      <div class="card-content">There are no new issues!</div>
                    ` : this._items.map(item => lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                        <paper-item @click=${this._openLog} .logItem=${item}>
                          <paper-item-body two-line>
                            <div class="row">
                              ${item.message}
                            </div>
                            <div secondary>
                              ${formatLogTime(item.timestamp, this.hass.language)}
                              ${item.source} (${item.level})
                              ${item.count > 1 ? lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
                                    - message first occured at
                                    ${formatLogTime(item.first_occured, this.hass.language)}
                                    and shows up ${item.count} times
                                  ` : lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]``}
                            </div>
                          </paper-item-body>
                        </paper-item>
                      `)}

                <div class="card-actions">
                  <ha-call-service-button
                    .hass=${this.hass}
                    domain="system_log"
                    service="clear"
                    >Clear</ha-call-service-button
                  >
                  <ha-progress-button @click=${this._fetchData}
                    >Refresh</ha-progress-button
                  >
                </div>
              `}
        </ha-card>
      </div>
    `;
  }

  firstUpdated(changedProps) {
    super.firstUpdated(changedProps);

    this._fetchData();

    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    // Check if this is for us
    if (ev.detail.success && ev.detail.domain === "system_log") {
      // Do the right thing depending on service
      if (ev.detail.service === "clear") {
        this._items = [];
      }
    }
  }

  async _fetchData() {
    this._items = undefined;
    this._items = await Object(_data_system_log__WEBPACK_IMPORTED_MODULE_8__["fetchSystemLog"])(this.hass);
  }

  _openLog(ev) {
    const item = ev.currentTarget.logItem;
    Object(_show_dialog_system_log_detail__WEBPACK_IMPORTED_MODULE_11__["showSystemLogDetailDialog"])(this, {
      item
    });
  }

  static get styles() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["css"]`
      ha-card {
        padding-top: 16px;
      }

      paper-item {
        cursor: pointer;
      }

      .system-log-intro {
        margin: 16px;
        border-top: 1px solid var(--light-primary-color);
        padding-top: 16px;
      }

      .loading-container {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `;
  }

}

customElements.define("system-log-card", SystemLogCard);

/***/ })

}]);
//# sourceMappingURL=panel-dev-info.chunk.js.map