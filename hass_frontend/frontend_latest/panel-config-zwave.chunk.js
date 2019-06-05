(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-config-zwave"],{

/***/ "./src/common/config/is_pwa.ts":
/*!*************************************!*\
  !*** ./src/common/config/is_pwa.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isPwa; });
/** Return if the displaymode is in standalone mode (PWA). */
function isPwa() {
  return window.matchMedia("(display-mode: standalone)").matches;
}

/***/ }),

/***/ "./src/common/entity/compute_domain.ts":
/*!*********************************************!*\
  !*** ./src/common/entity/compute_domain.ts ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeDomain; });
function computeDomain(entityId) {
  return entityId.substr(0, entityId.indexOf("."));
}

/***/ }),

/***/ "./src/common/entity/compute_object_id.ts":
/*!************************************************!*\
  !*** ./src/common/entity/compute_object_id.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeObjectId; });
/** Compute the object ID of a state. */
function computeObjectId(entityId) {
  return entityId.substr(entityId.indexOf(".") + 1);
}

/***/ }),

/***/ "./src/common/entity/compute_state_domain.ts":
/*!***************************************************!*\
  !*** ./src/common/entity/compute_state_domain.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeStateDomain; });
/* harmony import */ var _compute_domain__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_domain */ "./src/common/entity/compute_domain.ts");

function computeStateDomain(stateObj) {
  return Object(_compute_domain__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id);
}

/***/ }),

/***/ "./src/common/entity/compute_state_name.ts":
/*!*************************************************!*\
  !*** ./src/common/entity/compute_state_name.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _compute_object_id__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_object_id */ "./src/common/entity/compute_object_id.ts");

/* harmony default export */ __webpack_exports__["default"] = (stateObj => stateObj.attributes.friendly_name === undefined ? Object(_compute_object_id__WEBPACK_IMPORTED_MODULE_0__["default"])(stateObj.entity_id).replace(/_/g, " ") : stateObj.attributes.friendly_name || "");

/***/ }),

/***/ "./src/common/entity/states_sort_by_name.ts":
/*!**************************************************!*\
  !*** ./src/common/entity/states_sort_by_name.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return sortStatesByName; });
/* harmony import */ var _compute_state_name__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./compute_state_name */ "./src/common/entity/compute_state_name.ts");
/**
 * Sort function to help sort states by name
 *
 * Usage:
 *   const states = [state1, state2]
 *   states.sort(statesSortByName);
 */

function sortStatesByName(entityA, entityB) {
  const nameA = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(entityA);
  const nameB = Object(_compute_state_name__WEBPACK_IMPORTED_MODULE_0__["default"])(entityB);

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
}

/***/ }),

/***/ "./src/components/buttons/ha-call-api-button.js":
/*!******************************************************!*\
  !*** ./src/components/buttons/ha-call-api-button.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lit_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lit-element */ "./node_modules/lit-element/lit-element.js");
/* harmony import */ var _ha_progress_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-progress-button */ "./src/components/buttons/ha-progress-button.js");
/* harmony import */ var _common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../common/dom/fire_event */ "./src/common/dom/fire_event.ts");




class HaCallApiButton extends lit_element__WEBPACK_IMPORTED_MODULE_0__["LitElement"] {
  render() {
    return lit_element__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-progress-button
        .progress="${this.progress}"
        @click="${this._buttonTapped}"
        ?disabled="${this.disabled}"
        ><slot></slot
      ></ha-progress-button>
    `;
  }

  constructor() {
    super();
    this.method = "POST";
    this.data = {};
    this.disabled = false;
    this.progress = false;
  }

  static get properties() {
    return {
      hass: {},
      progress: Boolean,
      path: String,
      method: String,
      data: {},
      disabled: Boolean
    };
  }

  get progressButton() {
    return this.renderRoot.querySelector("ha-progress-button");
  }

  async _buttonTapped() {
    this.progress = true;
    const eventData = {
      method: this.method,
      path: this.path,
      data: this.data
    };

    try {
      const resp = await this.hass.callApi(this.method, this.path, this.data);
      this.progress = false;
      this.progressButton.actionSuccess();
      eventData.success = true;
      eventData.response = resp;
    } catch (err) {
      this.progress = false;
      this.progressButton.actionError();
      eventData.success = false;
      eventData.response = err;
    }

    Object(_common_dom_fire_event__WEBPACK_IMPORTED_MODULE_2__["fireEvent"])(this, "hass-api-called", eventData);
  }

}

customElements.define("ha-call-api-button", HaCallApiButton);

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

/***/ "./src/components/ha-service-description.js":
/*!**************************************************!*\
  !*** ./src/components/ha-service-description.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



class HaServiceDescription extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      [[_getDescription(hass, domain, service)]]
    `;
  }

  static get properties() {
    return {
      hass: Object,
      domain: String,
      service: String
    };
  }

  _getDescription(hass, domain, service) {
    var domainServices = hass.services[domain];
    if (!domainServices) return "";
    var serviceObject = domainServices[service];
    if (!serviceObject) return "";
    return serviceObject.description;
  }

}

customElements.define("ha-service-description", HaServiceDescription);

/***/ }),

/***/ "./src/layouts/ha-app-layout.js":
/*!**************************************!*\
  !*** ./src/layouts/ha-app-layout.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

/*
This code is copied from app-header-layout.
'fullbleed' support is removed as Home Assisstant doesn't use it.
transform: translate(0) is added.
*/

/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/




class HaAppLayout extends customElements.get("app-header-layout") {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style>
        :host {
          display: block;
          /**
         * Force app-header-layout to have its own stacking context so that its parent can
         * control the stacking of it relative to other elements (e.g. app-drawer-layout).
         * This could be done using \`isolation: isolate\`, but that's not well supported
         * across browsers.
         */
          position: relative;
          z-index: 0;
        }

        #wrapper ::slotted([slot="header"]) {
          @apply --layout-fixed-top;
          z-index: 1;
        }

        #wrapper.initializing ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) {
          height: 100%;
        }

        :host([has-scrolling-region]) #wrapper ::slotted([slot="header"]) {
          position: absolute;
        }

        :host([has-scrolling-region])
          #wrapper.initializing
          ::slotted([slot="header"]) {
          position: relative;
        }

        :host([has-scrolling-region]) #wrapper #contentContainer {
          @apply --layout-fit;
          overflow-y: auto;
          -webkit-overflow-scrolling: touch;
        }

        :host([has-scrolling-region]) #wrapper.initializing #contentContainer {
          position: relative;
        }

        #contentContainer {
          /* Create a stacking context here so that all children appear below the header. */
          position: relative;
          z-index: 0;
          /* Using 'transform' will cause 'position: fixed' elements to behave like
           'position: absolute' relative to this element. */
          transform: translate(0);
        }

        @media print {
          :host([has-scrolling-region]) #wrapper #contentContainer {
            overflow-y: visible;
          }
        }
      </style>

      <div id="wrapper" class="initializing">
        <slot id="headerSlot" name="header"></slot>

        <div id="contentContainer"><slot></slot></div>
        <slot id="fab" name="fab"></slot>
      </div>
    `;
  }

}

customElements.define("ha-app-layout", HaAppLayout);

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

/***/ "./src/mixins/localize-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/localize-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");

/**
 * Polymer Mixin to enable a localize function powered by language/resources from hass object.
 *
 * @polymerMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(superClass => class extends superClass {
  static get properties() {
    return {
      hass: Object,

      /**
       * Translates a string to the current `language`. Any parameters to the
       * string should be passed in order, as follows:
       * `localize(stringKey, param1Name, param1Value, param2Name, param2Value)`
       */
      localize: {
        type: Function,
        computed: "__computeLocalize(hass.localize)"
      }
    };
  }

  __computeLocalize(localize) {
    return localize;
  }

}));

/***/ }),

/***/ "./src/panels/config/ha-config-section.js":
/*!************************************************!*\
  !*** ./src/panels/config/ha-config-section.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");




class HaConfigSection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style include="iron-flex ha-style">
        .content {
          padding: 28px 20px 0;
          max-width: 1040px;
          margin: 0 auto;
        }

        .header {
          @apply --paper-font-display1;
          opacity: var(--dark-primary-opacity);
        }

        .together {
          margin-top: 32px;
        }

        .intro {
          @apply --paper-font-subhead;
          width: 100%;
          max-width: 400px;
          margin-right: 40px;
          opacity: var(--dark-primary-opacity);
        }

        .panel {
          margin-top: -24px;
        }

        .panel ::slotted(*) {
          margin-top: 24px;
          display: block;
        }

        .narrow.content {
          max-width: 640px;
        }
        .narrow .together {
          margin-top: 20px;
        }
        .narrow .header {
          @apply --paper-font-headline;
        }
        .narrow .intro {
          font-size: 14px;
          padding-bottom: 20px;
          margin-right: 0;
          max-width: 500px;
        }
      </style>
      <div class$="[[computeContentClasses(isWide)]]">
        <div class="header"><slot name="header"></slot></div>
        <div class$="[[computeClasses(isWide)]]">
          <div class="intro"><slot name="introduction"></slot></div>
          <div class="panel flex-auto"><slot></slot></div>
        </div>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object
      },
      narrow: {
        type: Boolean
      },
      isWide: {
        type: Boolean,
        value: false
      }
    };
  }

  computeContentClasses(isWide) {
    var classes = "content ";
    return isWide ? classes : classes + "narrow";
  }

  computeClasses(isWide) {
    var classes = "together layout ";
    return classes + (isWide ? "horizontal" : "vertical narrow");
  }

}

customElements.define("ha-config-section", HaConfigSection);

/***/ }),

/***/ "./src/panels/config/ha-form-style.js":
/*!********************************************!*\
  !*** ./src/panels/config/ha-form-style.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

const documentContainer = document.createElement("template");
documentContainer.setAttribute("style", "display: none;");
documentContainer.innerHTML = `<dom-module id="ha-form-style">
  <template>
    <style>
      .form-group {
        @apply --layout-horizontal;
        @apply --layout-center;
        padding: 8px 16px;
      }

      .form-group label {
        @apply --layout-flex-2;
      }

      .form-group .form-control {
        @apply --layout-flex;
      }

      .form-group.vertical {
        @apply --layout-vertical;
        @apply --layout-start;
      }

      paper-dropdown-menu.form-control {
        margin: -9px 0;
      }
    </style>
  </template>
</dom-module>`;
document.head.appendChild(documentContainer.content);

/***/ }),

/***/ "./src/panels/config/zwave/ha-config-zwave.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/ha-config-zwave.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_paper_icon_button_arrow_prev__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../components/ha-paper-icon-button-arrow-prev */ "./src/components/ha-paper-icon-button-arrow-prev.ts");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../ha-form-style */ "./src/panels/config/ha-form-style.js");
/* harmony import */ var _ha_form_style__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_ha_form_style__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _zwave_groups__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./zwave-groups */ "./src/panels/config/zwave/zwave-groups.js");
/* harmony import */ var _zwave_log__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./zwave-log */ "./src/panels/config/zwave/zwave-log.js");
/* harmony import */ var _zwave_network__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./zwave-network */ "./src/panels/config/zwave/zwave-network.js");
/* harmony import */ var _zwave_node_config__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./zwave-node-config */ "./src/panels/config/zwave/zwave-node-config.js");
/* harmony import */ var _zwave_usercodes__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./zwave-usercodes */ "./src/panels/config/zwave/zwave-usercodes.js");
/* harmony import */ var _zwave_values__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./zwave-values */ "./src/panels/config/zwave/zwave-values.js");
/* harmony import */ var _zwave_node_protection__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./zwave-node-protection */ "./src/panels/config/zwave/zwave-node-protection.js");
/* harmony import */ var _common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../../common/entity/states_sort_by_name */ "./src/common/entity/states_sort_by_name.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");






























/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class HaConfigZwave extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_29__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_28__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_8__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_7__["html"]`
      <style include="iron-flex ha-style ha-form-style">
        .content {
          margin-top: 24px;
        }

        .node-info {
          margin-left: 16px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }

        .toggle-help-icon {
          position: absolute;
          top: 6px;
          right: 0;
          color: var(--primary-color);
        }
      </style>
      <ha-app-layout has-scrolling-region="">
        <app-header slot="header" fixed="">
          <app-toolbar>
            <ha-paper-icon-button-arrow-prev
              on-click="_backTapped"
            ></ha-paper-icon-button-arrow-prev>
            <div main-title="">
              [[localize('ui.panel.config.zwave.caption')]]
            </div>
          </app-toolbar>
        </app-header>

        <zwave-network
          id="zwave-network"
          is-wide="[[isWide]]"
          hass="[[hass]]"
        ></zwave-network>

        <!-- Node card -->
        <ha-config-section is-wide="[[isWide]]">
          <div style="position: relative" slot="header">
            <span>Z-Wave Node Management</span>
            <paper-icon-button
              class="toggle-help-icon"
              on-click="toggleHelp"
              icon="hass:help-circle"
            ></paper-icon-button>
          </div>
          <span slot="introduction">
            Run Z-Wave commands that affect a single node. Pick a node to see a
            list of available commands.
          </span>

          <ha-card class="content">
            <div class="device-picker">
              <paper-dropdown-menu dynamic-align="" label="Nodes" class="flex">
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{selectedNode}}"
                >
                  <template is="dom-repeat" items="[[nodes]]" as="state">
                    <paper-item>[[computeSelectCaption(state)]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
            <template is="dom-if" if="[[!computeIsNodeSelected(selectedNode)]]">
              <template is="dom-if" if="[[showHelp]]">
                <div style="color: grey; padding: 12px">
                  Select node to view per-node options
                </div>
              </template>
            </template>

            <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
              <div class="card-actions">
                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Refresh Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="refresh_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <template is="dom-if" if="[[nodeFailed]]">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Remove Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="remove_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>

                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    service-data="[[computeNodeServiceData(selectedNode)]]"
                  >
                    Replace Failed Node
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="replace_failed_node"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                </template>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Print Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="print_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  service-data="[[computeHealNodeServiceData(selectedNode)]]"
                >
                  Heal Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="heal_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>

                <ha-call-service-button
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  service-data="[[computeNodeServiceData(selectedNode)]]"
                >
                  Test Node
                </ha-call-service-button>
                <ha-service-description
                  hass="[[hass]]"
                  domain="zwave"
                  service="test_node"
                  hidden$="[[!showHelp]]"
                >
                </ha-service-description>
                <mwc-button on-click="_nodeMoreInfo"
                  >Node Information</mwc-button
                >
              </div>

              <div class="device-picker">
                <paper-dropdown-menu
                  label="Entities of this node"
                  dynamic-align=""
                  class="flex"
                >
                  <paper-listbox
                    slot="dropdown-content"
                    selected="{{selectedEntity}}"
                  >
                    <template is="dom-repeat" items="[[entities]]" as="state">
                      <paper-item>[[state.entity_id]]</paper-item>
                    </template>
                  </paper-listbox>
                </paper-dropdown-menu>
              </div>
              <template
                is="dom-if"
                if="[[!computeIsEntitySelected(selectedEntity)]]"
              >
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    service-data="[[computeRefreshEntityServiceData(selectedEntity)]]"
                  >
                    Refresh Entity
                  </ha-call-service-button>
                  <ha-service-description
                    hass="[[hass]]"
                    domain="zwave"
                    service="refresh_entity"
                    hidden$="[[!showHelp]]"
                  >
                  </ha-service-description>
                  <mwc-button on-click="_entityMoreInfo"
                    >Entity Information</mwc-button
                  >
                </div>
                <div class="form-group">
                  <paper-checkbox
                    checked="{{entityIgnored}}"
                    class="form-control"
                  >
                    Exclude this entity from ioBroker
                  </paper-checkbox>
                  <paper-input
                    disabled="{{entityIgnored}}"
                    label="Polling intensity"
                    type="number"
                    min="0"
                    value="{{entityPollingIntensity}}"
                  >
                  </paper-input>
                </div>
                <div class="card-actions">
                  <ha-call-service-button
                    hass="[[hass]]"
                    domain="zwave"
                    service="set_poll_intensity"
                    service-data="[[computePollIntensityServiceData(entityPollingIntensity)]]"
                  >
                    Save
                  </ha-call-service-button>
                </div>
              </template>
            </template>
          </ha-card>

          <template is="dom-if" if="[[computeIsNodeSelected(selectedNode)]]">
            <!-- Value card -->
            <zwave-values
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              values="[[values]]"
            ></zwave-values>

            <!-- Group card -->
            <zwave-groups
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              groups="[[groups]]"
            ></zwave-groups>

            <!-- Config card -->
            <zwave-node-config
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              config="[[config]]"
            ></zwave-node-config>
          </template>

          <!-- Protection card -->
          <template is="dom-if" if="{{_protectionNode}}">
            <zwave-node-protection
              hass="[[hass]]"
              nodes="[[nodes]]"
              selected-node="[[selectedNode]]"
              protection="[[_protection]]"
            ></zwave-node-protection>
          </template>

          <!-- User Codes -->
          <template is="dom-if" if="{{hasNodeUserCodes}}">
            <zwave-usercodes
              id="zwave-usercodes"
              hass="[[hass]]"
              nodes="[[nodes]]"
              user-codes="[[userCodes]]"
              selected-node="[[selectedNode]]"
            ></zwave-usercodes>
          </template>
        </ha-config-section>

        <!-- Ozw log -->
        <ozw-log is-wide="[[isWide]]" hass="[[hass]]"></ozw-log>
      </ha-app-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: Boolean,
      nodes: {
        type: Array,
        computed: "computeNodes(hass)"
      },
      selectedNode: {
        type: Number,
        value: -1,
        observer: "selectedNodeChanged"
      },
      nodeFailed: {
        type: Boolean,
        value: false
      },
      config: {
        type: Array,
        value: () => []
      },
      entities: {
        type: Array,
        computed: "computeEntities(selectedNode)"
      },
      selectedEntity: {
        type: Number,
        value: -1,
        observer: "selectedEntityChanged"
      },
      values: {
        type: Array
      },
      groups: {
        type: Array
      },
      userCodes: {
        type: Array,
        value: () => []
      },
      hasNodeUserCodes: {
        type: Boolean,
        value: false
      },
      showHelp: {
        type: Boolean,
        value: false
      },
      entityIgnored: Boolean,
      entityPollingIntensity: {
        type: Number,
        value: 0
      },
      _protection: {
        type: Array,
        value: () => []
      },
      _protectionNode: {
        type: Boolean,
        value: false
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success && ev.detail.service === "set_poll_intensity") {
      this._saveEntity();
    }
  }

  computeNodes(hass) {
    return Object.keys(hass.states).map(key => hass.states[key]).filter(ent => ent.entity_id.match("zwave[.]")).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["default"]);
  }

  computeEntities(selectedNode) {
    if (!this.nodes || selectedNode === -1) return -1;
    const nodeid = this.nodes[this.selectedNode].attributes.node_id;
    const hass = this.hass;
    return Object.keys(this.hass.states).map(key => hass.states[key]).filter(ent => {
      if (ent.attributes.node_id === undefined) {
        return false;
      }

      return !ent.attributes.hidden && "node_id" in ent.attributes && ent.attributes.node_id === nodeid && !ent.entity_id.match("zwave[.]");
    }).sort(_common_entity_states_sort_by_name__WEBPACK_IMPORTED_MODULE_25__["default"]);
  }

  selectedNodeChanged(selectedNode) {
    if (selectedNode === -1) return;
    this.selectedEntity = -1;
    this.hass.callApi("GET", `zwave/config/${this.nodes[selectedNode].attributes.node_id}`).then(configs => {
      this.config = this._objToArray(configs);
    });
    this.hass.callApi("GET", `zwave/values/${this.nodes[selectedNode].attributes.node_id}`).then(values => {
      this.values = this._objToArray(values);
    });
    this.hass.callApi("GET", `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`).then(groups => {
      this.groups = this._objToArray(groups);
    });
    this.hasNodeUserCodes = false;
    this.notifyPath("hasNodeUserCodes");
    this.hass.callApi("GET", `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`).then(usercodes => {
      this.userCodes = this._objToArray(usercodes);
      this.hasNodeUserCodes = this.userCodes.length > 0;
      this.notifyPath("hasNodeUserCodes");
    });
    this.hass.callApi("GET", `zwave/protection/${this.nodes[selectedNode].attributes.node_id}`).then(protections => {
      this._protection = this._objToArray(protections);

      if (this._protection) {
        if (this._protection.length === 0) {
          return;
        }

        this._protectionNode = true;
      }
    });
    this.nodeFailed = this.nodes[selectedNode].attributes.is_failed;
  }

  selectedEntityChanged(selectedEntity) {
    if (selectedEntity === -1) return;
    this.hass.callApi("GET", `zwave/values/${this.nodes[this.selectedNode].attributes.node_id}`).then(values => {
      this.values = this._objToArray(values);
    });
    const valueId = this.entities[selectedEntity].attributes.value_id;
    const valueData = this.values.find(obj => obj.key === valueId);
    const valueIndex = this.values.indexOf(valueData);
    this.hass.callApi("GET", `config/zwave/device_config/${this.entities[selectedEntity].entity_id}`).then(data => {
      this.setProperties({
        entityIgnored: data.ignored || false,
        entityPollingIntensity: this.values[valueIndex].value.poll_intensity
      });
    }).catch(() => {
      this.setProperties({
        entityIgnored: false,
        entityPollingIntensity: this.values[valueIndex].value.poll_intensity
      });
    });
  }

  computeSelectCaption(stateObj) {
    return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["default"])(stateObj) + " (Node:" + stateObj.attributes.node_id + " " + stateObj.attributes.query_stage + ")";
  }

  computeSelectCaptionEnt(stateObj) {
    return Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_27__["default"])(stateObj) + "." + Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_26__["default"])(stateObj);
  }

  computeIsNodeSelected() {
    return this.nodes && this.selectedNode !== -1;
  }

  computeIsEntitySelected(selectedEntity) {
    return selectedEntity === -1;
  }

  computeNodeServiceData(selectedNode) {
    return {
      node_id: this.nodes[selectedNode].attributes.node_id
    };
  }

  computeHealNodeServiceData(selectedNode) {
    return {
      node_id: this.nodes[selectedNode].attributes.node_id,
      return_routes: true
    };
  }

  computeRefreshEntityServiceData(selectedEntity) {
    if (selectedEntity === -1) return -1;
    return {
      entity_id: this.entities[selectedEntity].entity_id
    };
  }

  computePollIntensityServiceData(entityPollingIntensity) {
    if (!this.selectedNode === -1 || this.selectedEntity === -1) return -1;
    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      value_id: this.entities[this.selectedEntity].attributes.value_id,
      poll_intensity: parseInt(entityPollingIntensity)
    };
  }

  _nodeMoreInfo() {
    this.fire("hass-more-info", {
      entityId: this.nodes[this.selectedNode].entity_id
    });
  }

  _entityMoreInfo() {
    this.fire("hass-more-info", {
      entityId: this.entities[this.selectedEntity].entity_id
    });
  }

  _saveEntity() {
    const data = {
      ignored: this.entityIgnored,
      polling_intensity: parseInt(this.entityPollingIntensity)
    };
    return this.hass.callApi("POST", `config/zwave/device_config/${this.entities[this.selectedEntity].entity_id}`, data);
  }

  toggleHelp() {
    this.showHelp = !this.showHelp;
  }

  _objToArray(obj) {
    const array = [];
    Object.keys(obj).forEach(key => {
      array.push({
        key,
        value: obj[key]
      });
    });
    return array;
  }

  _backTapped() {
    history.back();
  }

}

customElements.define("ha-config-zwave", HaConfigZwave);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-groups.js":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-groups.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");









class ZwaveGroups extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 12px;
        }
      </style>
      <ha-card class="content" header="Node group associations">
        <!-- TODO make api for getting groups and members -->
        <div class="device-picker">
          <paper-dropdown-menu label="Group" dynamic-align="" class="flex">
            <paper-listbox
              slot="dropdown-content"
              selected="{{_selectedGroup}}"
            >
              <template is="dom-repeat" items="[[groups]]" as="state">
                <paper-item>[[_computeSelectCaptionGroup(state)]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
        </div>
        <template is="dom-if" if="[[_computeIsGroupSelected(_selectedGroup)]]">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Node to control"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedTargetNode}}"
              >
                <template is="dom-repeat" items="[[nodes]]" as="state">
                  <paper-item>[[_computeSelectCaption(state)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <div class="help-text">
            <span>Other Nodes in this group:</span>
            <template is="dom-repeat" items="[[_otherGroupNodes]]" as="state">
              <div>[[state]]</div>
            </template>
          </div>
          <div class="help-text">
            <span>Max Associations:</span> <span>[[_maxAssociations]]</span>
          </div>
        </template>

        <template
          is="dom-if"
          if="[[_computeIsTargetNodeSelected(_selectedTargetNode)]]"
        >
          <div class="card-actions">
            <template is="dom-if" if="[[!_noAssociationsLeft]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_addAssocServiceData]]"
              >
                Add To Group
              </ha-call-service-button>
            </template>
            <template
              is="dom-if"
              if="[[_computeTargetInGroup(_selectedGroup, _selectedTargetNode)]]"
            >
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeAssocServiceData]]"
              >
                Remove From Group
              </ha-call-service-button>
            </template>
            <template is="dom-if" if="[[_isBroadcastNodeInGroup]]">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="change_association"
                service-data="[[_removeBroadcastNodeServiceData]]"
              >
                Remove Broadcast
              </ha-call-service-button>
            </template>
          </div>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      groups: Array,
      selectedNode: {
        type: Number,
        observer: "_selectedNodeChanged"
      },
      _selectedTargetNode: {
        type: Number,
        value: -1,
        observer: "_selectedTargetNodeChanged"
      },
      _selectedGroup: {
        type: Number,
        value: -1
      },
      _otherGroupNodes: {
        type: Array,
        value: -1,
        computed: "_computeOtherGroupNodes(_selectedGroup)"
      },
      _maxAssociations: {
        type: String,
        value: "",
        computed: "_computeMaxAssociations(_selectedGroup)"
      },
      _noAssociationsLeft: {
        type: Boolean,
        value: true,
        computed: "_computeAssociationsLeft(_selectedGroup)"
      },
      _addAssocServiceData: {
        type: String,
        value: ""
      },
      _removeAssocServiceData: {
        type: String,
        value: ""
      },
      _removeBroadcastNodeServiceData: {
        type: String,
        value: ""
      },
      _isBroadcastNodeInGroup: {
        type: Boolean,
        value: false
      }
    };
  }

  static get observers() {
    return ["_selectedGroupChanged(groups, _selectedGroup)"];
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshGroups(this.selectedNode);
      }, 5000);
    }
  }

  _computeAssociationsLeft(selectedGroup) {
    if (selectedGroup === -1) return true;
    return this._maxAssociations === this._otherGroupNodes.length;
  }

  _computeMaxAssociations(selectedGroup) {
    if (selectedGroup === -1) return -1;
    const maxAssociations = this.groups[selectedGroup].value.max_associations;
    if (!maxAssociations) return "None";
    return maxAssociations;
  }

  _computeOtherGroupNodes(selectedGroup) {
    if (selectedGroup === -1) return -1;
    this.setProperties({
      _isBroadcastNodeInGroup: false
    });
    const associations = Object.values(this.groups[selectedGroup].value.association_instances);
    if (!associations.length) return ["None"];
    return associations.map(assoc => {
      if (!assoc.length || assoc.length !== 2) {
        return `Unknown Node: ${assoc}`;
      }

      const id = assoc[0];
      const instance = assoc[1];
      const node = this.nodes.find(n => n.attributes.node_id === id);

      if (id === 255) {
        this.setProperties({
          _isBroadcastNodeInGroup: true,
          _removeBroadcastNodeServiceData: {
            node_id: this.nodes[this.selectedNode].attributes.node_id,
            association: "remove",
            target_node_id: 255,
            group: this.groups[selectedGroup].key
          }
        });
      }

      if (!node) {
        return `Unknown Node (${id}: (${instance} ? ${id}.${instance} : ${id}))`;
      }

      let caption = this._computeSelectCaption(node);

      if (instance) {
        caption += `/ Instance: ${instance}`;
      }

      return caption;
    });
  }

  _computeTargetInGroup(selectedGroup, selectedTargetNode) {
    if (selectedGroup === -1 || selectedTargetNode === -1) return false;
    const associations = Object.values(this.groups[selectedGroup].value.associations);
    if (!associations.length) return false;
    return associations.indexOf(this.nodes[selectedTargetNode].attributes.node_id) !== -1;
  }

  _computeSelectCaption(stateObj) {
    return `${Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["default"])(stateObj)}
      (Node: ${stateObj.attributes.node_id}
      ${stateObj.attributes.query_stage})`;
  }

  _computeSelectCaptionGroup(stateObj) {
    return `${stateObj.key}: ${stateObj.value.label}`;
  }

  _computeIsTargetNodeSelected(selectedTargetNode) {
    return this.nodes && selectedTargetNode !== -1;
  }

  _computeIsGroupSelected(selectedGroup) {
    return this.nodes && this.selectedNode !== -1 && selectedGroup !== -1;
  }

  _computeAssocServiceData(selectedGroup, type) {
    if (!this.groups === -1 || selectedGroup === -1 || this.selectedNode === -1 || this._selectedTargetNode === -1) return -1;
    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      association: type,
      target_node_id: this.nodes[this._selectedTargetNode].attributes.node_id,
      group: this.groups[selectedGroup].key
    };
  }

  async _refreshGroups(selectedNode) {
    const groupData = [];
    const groups = await this.hass.callApi("GET", `zwave/groups/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(groups).forEach(key => {
      groupData.push({
        key,
        value: groups[key]
      });
    });
    this.setProperties({
      groups: groupData,
      _maxAssociations: groupData[this._selectedGroup].value.max_associations,
      _otherGroupNodes: Object.values(groupData[this._selectedGroup].value.associations),
      _isBroadcastNodeInGroup: false
    });
    const oldGroup = this._selectedGroup;
    this.setProperties({
      _selectedGroup: -1
    });
    this.setProperties({
      _selectedGroup: oldGroup
    });
  }

  _selectedGroupChanged() {
    if (this._selectedGroup === -1) return;
    this.setProperties({
      _maxAssociations: this.groups[this._selectedGroup].value.max_associations,
      _otherGroupNodes: Object.values(this.groups[this._selectedGroup].value.associations)
    });
  }

  _selectedTargetNodeChanged() {
    if (this._selectedGroup === -1) return;

    if (this._computeTargetInGroup(this._selectedGroup, this._selectedTargetNode)) {
      this.setProperties({
        _removeAssocServiceData: this._computeAssocServiceData(this._selectedGroup, "remove")
      });
    } else {
      this.setProperties({
        _addAssocServiceData: this._computeAssocServiceData(this._selectedGroup, "add")
      });
    }
  }

  _selectedNodeChanged() {
    if (this.selectedNode === -1) return;
    this.setProperties({
      _selectedTargetNode: -1,
      _selectedGroup: -1
    });
  }

}

customElements.define("zwave-groups", ZwaveGroups);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-log.js":
/*!**********************************************!*\
  !*** ./src/panels/config/zwave/zwave-log.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_checkbox_paper_checkbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-checkbox/paper-checkbox */ "./node_modules/@polymer/paper-checkbox/paper-checkbox.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _common_config_is_pwa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../common/config/is_pwa */ "./src/common/config/is_pwa.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");









let registeredDialog = false;

class OzwLog extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
    <style include="iron-flex ha-style">
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        padding-left: 24px;
        padding-right: 24px;
        padding-bottom: 24px;
      }

    </style>
    <ha-config-section is-wide="[[isWide]]">
      <span slot="header">OZW Log</span>
      <ha-card>
        <div class="device-picker">
          <paper-input label="Number of last log lines." type="number" min="0" max="1000" step="10" value="{{numLogLines}}">
          </paper-input>
        </div>
        <div class="card-actions">
          <mwc-button raised="true" on-click="_openLogWindow">Load</mwc-button>
          <mwc-button raised="true" on-click="_tailLog" disabled="{{_completeLog}}">Tail</mwc-button>
      </ha-card>
    </ha-config-section>
`;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: {
        type: Boolean,
        value: false
      },
      _ozwLogs: String,
      _completeLog: {
        type: Boolean,
        value: true
      },
      numLogLines: {
        type: Number,
        value: 0,
        observer: "_isCompleteLog"
      },
      _intervalId: String,
      tail: Boolean
    };
  }

  async _tailLog() {
    this.setProperties({
      tail: true
    });
    const ozwWindow = await this._openLogWindow();

    if (!Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_6__["default"])()) {
      this.setProperties({
        _intervalId: setInterval(() => {
          this._refreshLog(ozwWindow);
        }, 1500)
      });
    }
  }

  async _openLogWindow() {
    const info = await this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines);
    this.setProperties({
      _ozwLogs: info
    });

    if (Object(_common_config_is_pwa__WEBPACK_IMPORTED_MODULE_6__["default"])()) {
      this._showOzwlogDialog();

      return -1;
    }

    const ozwWindow = open("", "ozwLog", "toolbar");
    ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
    return ozwWindow;
  }

  async _refreshLog(ozwWindow) {
    if (ozwWindow.closed === true) {
      clearInterval(this._intervalId);
      this.setProperties({
        _intervalId: null
      });
    } else {
      const info = await this.hass.callApi("GET", "zwave/ozwlog?lines=" + this.numLogLines);
      this.setProperties({
        _ozwLogs: info
      });
      ozwWindow.document.body.innerHTML = `<pre>${this._ozwLogs}</pre>`;
    }
  }

  _isCompleteLog() {
    if (this.numLogLines !== "0") {
      this.setProperties({
        _completeLog: false
      });
    } else {
      this.setProperties({
        _completeLog: true
      });
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-ozwlog-dialog",
        dialogTag: "zwave-log-dialog",
        dialogImport: () => Promise.all(/*! import() | zwave-log-dialog */[__webpack_require__.e("vendors~area-registry-detail-dialog~cloud-webhook-manage-dialog~device-registry-detail-dialog~dialog~c2bc888a"), __webpack_require__.e("zwave-log-dialog")]).then(__webpack_require__.bind(null, /*! ./zwave-log-dialog */ "./src/panels/config/zwave/zwave-log-dialog.js"))
      });
    }
  }

  _showOzwlogDialog() {
    this.fire("show-ozwlog-dialog", {
      hass: this.hass,
      _numLogLines: this.numLogLines,
      _ozwLog: this._ozwLogs,
      _tail: this.tail,
      dialogClosedCallback: () => this._dialogClosed()
    });
  }

  _dialogClosed() {
    this.setProperties({
      tail: false
    });
  }

}

customElements.define("ozw-log", OzwLog);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-network.js":
/*!**************************************************!*\
  !*** ./src/panels/config/zwave/zwave-network.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_service_description__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/ha-service-description */ "./src/components/ha-service-description.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _ha_config_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../ha-config-section */ "./src/panels/config/ha-config-section.js");









class ZwaveNetwork extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .card-actions.warning ha-call-service-button {
          color: var(--google-red-500);
        }

        .toggle-help-icon {
          position: absolute;
          top: -6px;
          right: 0;
          color: var(--primary-color);
        }

        ha-service-description {
          display: block;
          color: grey;
        }

        [hidden] {
          display: none;
        }
      </style>
      <ha-config-section is-wide="[[isWide]]">
        <div style="position: relative" slot="header">
          <span>Z-Wave Network Management</span>
          <paper-icon-button
            class="toggle-help-icon"
            on-click="helpTap"
            icon="hass:help-circle"
          ></paper-icon-button>
        </div>
        <span slot="introduction">
          Run commands that affect the Z-Wave network. You won't get feedback on
          whether the command succeeded, but you can look in the OZW Log to try
          to figure out.
        </span>

        <ha-card class="content">
          <div class="card-actions">
            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="add_node_secure"
            >
              Add Node Secure
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="add_node_secure"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>

            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="add_node"
            >
              Add Node
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="add_node"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>

            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="remove_node"
            >
              Remove Node
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="remove_node"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>
          </div>
          <div class="card-actions warning">
            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="cancel_command"
            >
              Cancel Command
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="cancel_command"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>
          </div>
          <div class="card-actions">
            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="heal_network"
            >
              Heal Network
            </ha-call-service-button>

            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="start_network"
            >
              Start Network
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="start_network"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>

            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="stop_network"
            >
              Stop Network
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="stop_network"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>

            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="soft_reset"
            >
              Soft Reset
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="soft_reset"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>

            <ha-call-service-button
              hass="[[hass]]"
              domain="zwave"
              service="test_network"
            >
              Test Network
            </ha-call-service-button>
            <ha-service-description
              hass="[[hass]]"
              domain="zwave"
              service="test_network"
              hidden$="[[!showDescription]]"
            >
            </ha-service-description>

            <ha-call-api-button hass="[[hass]]" path="zwave/saveconfig">
              Save Config
            </ha-call-api-button>
          </div>
        </ha-card>
      </ha-config-section>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      isWide: {
        type: Boolean,
        value: false
      },
      showDescription: {
        type: Boolean,
        value: false
      }
    };
  }

  helpTap() {
    this.showDescription = !this.showDescription;
  }

}

customElements.define("zwave-network", ZwaveNetwork);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-config.js":
/*!******************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-config.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");









class ZwaveNodeConfig extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }
      </style>
      <div class="content">
        <ha-card header="Node config options">
          <template is="dom-if" if="[[_wakeupNode]]">
            <div class="card-actions">
              <paper-input
                float-label="Wakeup Interval"
                type="number"
                value="{{_wakeupInput}}"
                placeholder="[[_computeGetWakeupValue(selectedNode)]]"
              >
                <div suffix="">seconds</div>
              </paper-input>
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="set_wakeup"
                service-data="[[_computeWakeupServiceData(_wakeupInput)]]"
              >
                Set Wakeup
              </ha-call-service-button>
            </div>
          </template>
          <div class="device-picker">
            <paper-dropdown-menu
              label="Config parameter"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedConfigParameter}}"
              >
                <template is="dom-repeat" items="[[config]]" as="state">
                  <paper-item
                    >[[_computeSelectCaptionConfigParameter(state)]]</paper-item
                  >
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'List')]]"
          >
            <div class="device-picker">
              <paper-dropdown-menu
                label="Config value"
                dynamic-align=""
                class="flex"
                placeholder="{{_loadedConfigValue}}"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{_selectedConfigValue}}"
                >
                  <template
                    is="dom-repeat"
                    items="[[_selectedConfigParameterValues]]"
                    as="state"
                  >
                    <paper-item>[[state]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
          </template>

          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'Byte Short Int')]]"
          >
            <div class="card-actions">
              <paper-input
                label="{{_selectedConfigParameterNumValues}}"
                type="number"
                value="{{_selectedConfigValue}}"
                max="{{_configParameterMax}}"
                min="{{_configParameterMin}}"
              >
              </paper-input>
            </div>
          </template>
          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'Bool Button')]]"
          >
            <div class="device-picker">
              <paper-dropdown-menu
                label="Config value"
                class="flex"
                dynamic-align=""
                placeholder="{{_loadedConfigValue}}"
              >
                <paper-listbox
                  slot="dropdown-content"
                  selected="{{_selectedConfigValue}}"
                >
                  <template
                    is="dom-repeat"
                    items="[[_selectedConfigParameterValues]]"
                    as="state"
                  >
                    <paper-item>[[state]]</paper-item>
                  </template>
                </paper-listbox>
              </paper-dropdown-menu>
            </div>
          </template>
          <div class="help-text"><span>[[_configValueHelpText]]</span></div>
          <template
            is="dom-if"
            if="[[_isConfigParameterSelected(_selectedConfigParameter, 'Bool Button Byte Short Int List')]]"
          >
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="zwave"
                service="set_config_parameter"
                service-data="[[_computeSetConfigParameterServiceData(_selectedConfigValue)]]"
              >
                Set Config Parameter
              </ha-call-service-button>
            </div>
          </template>
        </ha-card>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      selectedNode: {
        type: Number,
        observer: "_nodesChanged"
      },
      config: {
        type: Array,
        value: () => []
      },
      _selectedConfigParameter: {
        type: Number,
        value: -1,
        observer: "_selectedConfigParameterChanged"
      },
      _configParameterMax: {
        type: Number,
        value: -1
      },
      _configParameterMin: {
        type: Number,
        value: -1
      },
      _configValueHelpText: {
        type: String,
        value: "",
        computed: "_computeConfigValueHelp(_selectedConfigParameter)"
      },
      _selectedConfigParameterType: {
        type: String,
        value: ""
      },
      _selectedConfigValue: {
        type: Number,
        value: -1,
        observer: "_computeSetConfigParameterServiceData"
      },
      _selectedConfigParameterValues: {
        type: Array,
        value: () => []
      },
      _selectedConfigParameterNumValues: {
        type: String,
        value: ""
      },
      _loadedConfigValue: {
        type: Number,
        value: -1
      },
      _wakeupInput: Number,
      _wakeupNode: {
        type: Boolean,
        value: false
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshConfig(this.selectedNode);
      }, 5000);
    }
  }

  _nodesChanged() {
    if (!this.nodes) return;
    this.setProperties({
      _selectedConfigParameter: -1
    });
    this._wakeupNode = this.nodes[this.selectedNode].attributes.wake_up_interval === 0 || this.nodes[this.selectedNode].attributes.wake_up_interval;

    if (this._wakeupNode) {
      if (this.nodes[this.selectedNode].attributes.wake_up_interval === 0) this.setProperties({
        _wakeupInput: ""
      });else {
        this.setProperties({
          _wakeupInput: this.nodes[this.selectedNode].attributes.wake_up_interval
        });
      }
    }
  }

  _computeGetWakeupValue(selectedNode) {
    if (this.selectedNode === -1 || !this.nodes[selectedNode].attributes.wake_up_interval) return "unknown";
    return this.nodes[selectedNode].attributes.wake_up_interval;
  }

  _computeWakeupServiceData(wakeupInput) {
    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      value: wakeupInput
    };
  }

  _computeConfigValueHelp(selectedConfigParameter) {
    if (selectedConfigParameter === -1) return "";
    const helpText = this.config[selectedConfigParameter].value.help;
    if (!helpText) return ["No helptext available"];
    return helpText;
  }

  _computeSetConfigParameterServiceData(selectedConfigValue) {
    if (this.selectedNode === -1 || this._selectedConfigParameter === -1) return -1;
    var valueData = null;

    if ("Short Byte Int".includes(this._selectedConfigParameterType)) {
      valueData = parseInt(selectedConfigValue, 10);
    }

    if ("Bool Button List".includes(this._selectedConfigParameterType)) {
      valueData = this._selectedConfigParameterValues[selectedConfigValue];
    }

    return {
      node_id: this.nodes[this.selectedNode].attributes.node_id,
      parameter: this.config[this._selectedConfigParameter].key,
      value: valueData
    };
  }

  _selectedConfigParameterChanged(selectedConfigParameter) {
    if (selectedConfigParameter === -1) return;
    this.setProperties({
      _selectedConfigValue: -1,
      _loadedConfigValue: -1,
      _selectedConfigParameterValues: []
    });
    this.setProperties({
      _selectedConfigParameterType: this.config[selectedConfigParameter].value.type,
      _configParameterMax: this.config[selectedConfigParameter].value.max,
      _configParameterMin: this.config[selectedConfigParameter].value.min,
      _loadedConfigValue: this.config[selectedConfigParameter].value.data,
      _configValueHelpText: this.config[selectedConfigParameter].value.help
    });

    if ("Short Byte Int".includes(this._selectedConfigParameterType)) {
      this.setProperties({
        _selectedConfigParameterNumValues: this.config[selectedConfigParameter].value.data_items,
        _selectedConfigValue: this._loadedConfigValue
      });
    }

    if ("Bool Button".includes(this._selectedConfigParameterType)) {
      this.setProperties({
        _selectedConfigParameterValues: ["True", "False"]
      });

      if (this.config[selectedConfigParameter].value.data) {
        this.setProperties({
          _loadedConfigValue: "True"
        });
      } else this.setProperties({
        _loadedConfigValue: "False"
      });
    }

    if ("List".includes(this._selectedConfigParameterType)) {
      this.setProperties({
        _selectedConfigParameterValues: this.config[selectedConfigParameter].value.data_items
      });
    }
  }

  _isConfigParameterSelected(selectedConfigParameter, type) {
    if (selectedConfigParameter === -1) return false;
    if (this.config[selectedConfigParameter].value.type === type) return true;
    if (type.includes(this.config[selectedConfigParameter].value.type)) return true;
    return false;
  }

  _computeSelectCaptionConfigParameter(stateObj) {
    return `${stateObj.key}: ${stateObj.value.label}`;
  }

  async _refreshConfig(selectedNode) {
    const configData = [];
    const config = await this.hass.callApi("GET", `zwave/config/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(config).forEach(key => {
      configData.push({
        key: key,
        value: config[key]
      });
    });
    this.setProperties({
      config: configData
    });

    this._selectedConfigParameterChanged(this._selectedConfigParameter);
  }

}

customElements.define("zwave-node-config", ZwaveNodeConfig);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-node-protection.js":
/*!**********************************************************!*\
  !*** ./src/panels/config/zwave/zwave-node-protection.js ***!
  \**********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_api_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-api-button */ "./src/components/buttons/ha-call-api-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");









class ZwaveNodeProtection extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
    <style include="iron-flex ha-style">
      .card-actions.warning ha-call-api-button {
        color: var(--google-red-500);
      }
      .content {
        margin-top: 24px;
      }

      ha-card {
        margin: 0 auto;
        max-width: 600px;
      }

      .device-picker {
        @apply --layout-horizontal;
        @apply --layout-center-center;
        padding: 0 24px 24px 24px;
        }

    </style>
      <div class="content">
        <ha-card header="Node protection">
          <div class="device-picker">
          <paper-dropdown-menu label="Protection" dynamic-align class="flex" placeholder="{{_loadedProtectionValue}}">
            <paper-listbox slot="dropdown-content" selected="{{_selectedProtectionParameter}}">
              <template is="dom-repeat" items="[[_protectionOptions]]" as="state">
                <paper-item>[[state]]</paper-item>
              </template>
            </paper-listbox>
          </paper-dropdown-menu>
          </div>
          <div class="card-actions">
            <ha-call-api-button
              hass="[[hass]]"
              path="[[_nodePath]]"
              data="[[_protectionData]]">
              Set Protection
            </ha-call-service-button>
          </div>
        </ha-card>
      </div>
`;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      selectedNode: {
        type: Number,
        value: -1
      },
      protectionNode: {
        type: Boolean,
        value: false
      },
      _protectionValueID: {
        type: Number,
        value: -1
      },
      _selectedProtectionParameter: {
        type: Number,
        value: -1,
        observer: "_computeProtectionData"
      },
      _protectionOptions: Array,
      _protection: {
        type: Array,
        value: () => []
      },
      _loadedProtectionValue: {
        type: String,
        value: ""
      },
      _protectionData: {
        type: Object,
        value: {}
      },
      _nodePath: String
    };
  }

  static get observers() {
    return ["_nodesChanged(nodes, selectedNode)"];
  }

  ready() {
    super.ready();
    this.addEventListener("hass-api-called", ev => this.apiCalled(ev));
  }

  apiCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshProtection(this.selectedNode);
      }, 5000);
    }
  }

  _nodesChanged() {
    if (!this.nodes) return;

    if (this.protection) {
      if (this.protection.length === 0) {
        return;
      }

      this.setProperties({
        protectionNode: true,
        _protectionOptions: this.protection[0].value,
        _loadedProtectionValue: this.protection[1].value,
        _protectionValueID: this.protection[2].value
      });
    }
  }

  async _refreshProtection(selectedNode) {
    const protectionValues = [];
    const protections = await this.hass.callApi("GET", `zwave/protection/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(protections).forEach(key => {
      protectionValues.push({
        key,
        value: protections[key]
      });
    });
    this.setProperties({
      _protection: protectionValues,
      _selectedProtectionParameter: -1,
      _loadedProtectionValue: this.protection[1].value
    });
  }

  _computeProtectionData(selectedProtectionParameter) {
    if (this.selectedNode === -1 || selectedProtectionParameter === -1) return;
    this._protectionData = {
      selection: this._protectionOptions[selectedProtectionParameter],
      value_id: this._protectionValueID
    };
    this._nodePath = `zwave/protection/${this.nodes[this.selectedNode].attributes.node_id}`;
  }

}

customElements.define("zwave-node-protection", ZwaveNodeProtection);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-usercodes.js":
/*!****************************************************!*\
  !*** ./src/panels/config/zwave/zwave-usercodes.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");









class ZwaveUsercodes extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_5__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_4__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }
      </style>
      <div class="content">
        <ha-card header="Node user codes">
          <div class="device-picker">
            <paper-dropdown-menu
              label="Code slot"
              dynamic-align=""
              class="flex"
            >
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedUserCode}}"
              >
                <template is="dom-repeat" items="[[userCodes]]" as="state">
                  <paper-item
                    >[[_computeSelectCaptionUserCodes(state)]]</paper-item
                  >
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>

          <template is="dom-if" if="[[_isUserCodeSelected(_selectedUserCode)]]">
            <div class="card-actions">
              <paper-input
                label="User code"
                type="text"
                allowed-pattern="[0-9,a-f,x,\\\\]"
                maxlength="40"
                minlength="16"
                value="{{_selectedUserCodeValue}}"
              >
              </paper-input>
              <pre>Ascii: [[_computedCodeOutput]]</pre>
            </div>
            <div class="card-actions">
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="set_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCodeValue, "Add")]]'
              >
                Set Usercode
              </ha-call-service-button>
              <ha-call-service-button
                hass="[[hass]]"
                domain="lock"
                service="clear_usercode"
                service-data='[[_computeUserCodeServiceData(_selectedUserCode, "Delete")]]'
              >
                Delete Usercode
              </ha-call-service-button>
            </div>
          </template>
        </ha-card>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      selectedNode: {
        type: Number,
        observer: "_selectedNodeChanged"
      },
      userCodes: Object,
      _selectedUserCode: {
        type: Number,
        value: -1,
        observer: "_selectedUserCodeChanged"
      },
      _selectedUserCodeValue: String,
      _computedCodeOutput: {
        type: String,
        value: ""
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshUserCodes(this.selectedNode);
      }, 5000);
    }
  }

  _isUserCodeSelected(selectedUserCode) {
    if (selectedUserCode === -1) return false;
    return true;
  }

  _computeSelectCaptionUserCodes(stateObj) {
    return `${stateObj.key}: ${stateObj.value.label}`;
  }

  _selectedUserCodeChanged(selectedUserCode) {
    if (this._selectedUserCode === -1 || selectedUserCode === -1) return;
    const value = this.userCodes[selectedUserCode].value.code;
    this.setProperties({
      _selectedUserCodeValue: this._a2hex(value),
      _computedCodeOutput: `[${this._hex2a(this._a2hex(value))}]`
    });
  }

  _computeUserCodeServiceData(selectedUserCodeValue, type) {
    if (this.selectedNode === -1 || !selectedUserCodeValue) return -1;
    let serviceData = null;
    let valueData = null;

    if (type === "Add") {
      valueData = this._hex2a(selectedUserCodeValue);
      this._computedCodeOutput = `[${valueData}]`;
      serviceData = {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        code_slot: this._selectedUserCode,
        usercode: valueData
      };
    }

    if (type === "Delete") {
      serviceData = {
        node_id: this.nodes[this.selectedNode].attributes.node_id,
        code_slot: this._selectedUserCode
      };
    }

    return serviceData;
  }

  async _refreshUserCodes(selectedNode) {
    this.setProperties({
      _selectedUserCodeValue: ""
    });
    const userCodes = [];
    const userCodeData = await this.hass.callApi("GET", `zwave/usercodes/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(userCodeData).forEach(key => {
      userCodes.push({
        key,
        value: userCodeData[key]
      });
    });
    this.setProperties({
      userCodes: userCodes
    });

    this._selectedUserCodeChanged(this._selectedUserCode);
  }

  _a2hex(str) {
    const arr = [];
    let output = "";

    for (let i = 0, l = str.length; i < l; i++) {
      const hex = Number(str.charCodeAt(i)).toString(16);

      if (hex === "0") {
        output = "00";
      } else {
        output = hex;
      }

      arr.push("\\x" + output);
    }

    return arr.join("");
  }

  _hex2a(hexx) {
    const hex = hexx.toString();
    const hexMod = hex.replace(/\\x/g, "");
    let str = "";

    for (let i = 0; i < hexMod.length; i += 2) {
      str += String.fromCharCode(parseInt(hexMod.substr(i, 2), 16));
    }

    return str;
  }

  _selectedNodeChanged() {
    if (this.selectedNode === -1) return;
    this.setProperties({
      _selecteduserCode: -1
    });
  }

}

customElements.define("zwave-usercodes", ZwaveUsercodes);

/***/ }),

/***/ "./src/panels/config/zwave/zwave-values.js":
/*!*************************************************!*\
  !*** ./src/panels/config/zwave/zwave-values.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_buttons_ha_call_service_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/buttons/ha-call-service-button */ "./src/components/buttons/ha-call-service-button.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../components/ha-card */ "./src/components/ha-card.ts");








class ZwaveValues extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .content {
          margin-top: 24px;
        }

        ha-card {
          margin: 0 auto;
          max-width: 600px;
        }

        .device-picker {
          @apply --layout-horizontal;
          @apply --layout-center-center;
          padding-left: 24px;
          padding-right: 24px;
          padding-bottom: 24px;
        }

        .help-text {
          padding-left: 24px;
          padding-right: 24px;
        }
      </style>
      <div class="content">
        <ha-card header="Node Values">
          <div class="device-picker">
            <paper-dropdown-menu label="Value" dynamic-align="" class="flex">
              <paper-listbox
                slot="dropdown-content"
                selected="{{_selectedValue}}"
              >
                <template is="dom-repeat" items="[[values]]" as="item">
                  <paper-item>[[_computeSelectCaption(item)]]</paper-item>
                </template>
              </paper-listbox>
            </paper-dropdown-menu>
          </div>
        </ha-card>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      nodes: Array,
      values: Array,
      selectedNode: {
        type: Number,
        observer: "selectedNodeChanged"
      },
      _selectedValue: {
        type: Number,
        value: -1,
        observer: "_selectedValueChanged"
      }
    };
  }

  ready() {
    super.ready();
    this.addEventListener("hass-service-called", ev => this.serviceCalled(ev));
  }

  serviceCalled(ev) {
    if (ev.detail.success) {
      setTimeout(() => {
        this._refreshValues(this.selectedNode);
      }, 5000);
    }
  }

  _computeSelectCaption(item) {
    return `${item.value.label} (Instance: ${item.value.instance}, Index: ${item.value.index})`;
  }

  async _refreshValues(selectedNode) {
    const valueData = [];
    const values = await this.hass.callApi("GET", `zwave/values/${this.nodes[selectedNode].attributes.node_id}`);
    Object.keys(values).forEach(key => {
      valueData.push({
        key,
        value: values[key]
      });
    });
    this.setProperties({
      values: valueData
    });

    this._selectedValueChanged(this._selectedValue);
  }

  _selectedValueChanged() {}

  selectedNodeChanged(selectedNode) {
    if (selectedNode === -1) return;
    this.setProperties({
      _selectedValue: -1
    });
  }

}

customElements.define("zwave-values", ZwaveValues);

/***/ })

}]);
//# sourceMappingURL=panel-config-zwave.chunk.js.map