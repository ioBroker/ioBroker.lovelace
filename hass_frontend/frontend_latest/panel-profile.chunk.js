(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-profile"],{

/***/ "./src/common/config/is_component_loaded.ts":
/*!**************************************************!*\
  !*** ./src/common/config/is_component_loaded.ts ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return isComponentLoaded; });
/** Return if a component is loaded. */
function isComponentLoaded(hass, component) {
  return hass && hass.config.components.indexOf(component) !== -1;
}

/***/ }),

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

/***/ "./src/components/ha-paper-dropdown-menu.ts":
/*!**************************************************!*\
  !*** ./src/components/ha-paper-dropdown-menu.ts ***!
  \**************************************************/
/*! exports provided: HaPaperDropdownClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HaPaperDropdownClass", function() { return HaPaperDropdownClass; });
/* harmony import */ var _polymer_paper_dropdown_menu_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-dropdown-menu/paper-dropdown-menu */ "./node_modules/@polymer/paper-dropdown-menu/paper-dropdown-menu.js");

const paperDropdownClass = customElements.get("paper-dropdown-menu"); // patches paper drop down to properly support RTL - https://github.com/PolymerElements/paper-dropdown-menu/issues/183

class HaPaperDropdownClass extends paperDropdownClass {
  ready() {
    super.ready(); // wait to check for direction since otherwise direction is wrong even though top level is RTL

    setTimeout(() => {
      if (window.getComputedStyle(this).direction === "rtl") {
        this.style.textAlign = "right";
      }
    }, 100);
  }

}
customElements.define("ha-paper-dropdown-menu", HaPaperDropdownClass);

/***/ }),

/***/ "./src/components/ha-push-notifications-toggle.js":
/*!********************************************************!*\
  !*** ./src/components/ha-push-notifications-toggle.js ***!
  \********************************************************/
/*! exports provided: pushSupported */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pushSupported", function() { return pushSupported; });
/* harmony import */ var _polymer_paper_toggle_button_paper_toggle_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-toggle-button/paper-toggle-button */ "./node_modules/@polymer/paper-toggle-button/paper-toggle-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _data_notify_html5__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../data/notify_html5 */ "./src/data/notify_html5.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");





const pushSupported = "serviceWorker" in navigator && "PushManager" in window && (document.location.protocol === "https:" || document.location.hostname === "localhost" || document.location.hostname === "127.0.0.1");
/*
 * @appliesMixin EventsMixin
 */

class HaPushNotificationsToggle extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <paper-toggle-button
        disabled="[[_compDisabled(disabled, loading)]]"
        checked="{{pushChecked}}"
        on-change="handlePushChange"
      ></paper-toggle-button>
    `;
  }

  static get properties() {
    return {
      hass: {
        type: Object,
        value: null
      },
      disabled: {
        type: Boolean,
        value: false
      },
      pushChecked: {
        type: Boolean,
        value: "Notification" in window && Notification.permission === "granted"
      },
      loading: {
        type: Boolean,
        value: true
      }
    };
  }

  async connectedCallback() {
    super.connectedCallback();
    if (!pushSupported) return;

    try {
      const reg = await navigator.serviceWorker.ready;

      if (!reg.pushManager) {
        return;
      }

      reg.pushManager.getSubscription().then(subscription => {
        this.loading = false;
        this.pushChecked = !!subscription;
      });
    } catch (err) {// We don't set loading to `false` so we remain disabled
    }
  }

  handlePushChange(event) {
    // Somehow this is triggered on Safari on page load causing
    // it to get into a loop and crash the page.
    if (!pushSupported) return;

    if (event.target.checked) {
      this.subscribePushNotifications();
    } else {
      this.unsubscribePushNotifications();
    }
  }

  async subscribePushNotifications() {
    const reg = await navigator.serviceWorker.ready;
    let sub;

    try {
      let browserName;

      if (navigator.userAgent.toLowerCase().indexOf("firefox") > -1) {
        browserName = "firefox";
      } else {
        browserName = "chrome";
      }

      const name = prompt("What should this device be called ?");

      if (name == null) {
        this.pushChecked = false;
        return;
      }

      let applicationServerKey;

      try {
        applicationServerKey = await Object(_data_notify_html5__WEBPACK_IMPORTED_MODULE_3__["getAppKey"])(this.hass);
      } catch (ex) {
        applicationServerKey = null;
      }

      if (applicationServerKey) {
        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey
        });
      } else {
        sub = await reg.pushManager.subscribe({
          userVisibleOnly: true
        });
      }

      await this.hass.callApi("POST", "notify.html5", {
        subscription: sub,
        browser: browserName,
        name
      });
    } catch (err) {
      const message = err.message || "Notification registration failed.";

      if (sub) {
        await sub.unsubscribe();
      } // eslint-disable-next-line


      console.error(err);
      this.fire("hass-notification", {
        message
      });
      this.pushChecked = false;
    }
  }

  async unsubscribePushNotifications() {
    const reg = await navigator.serviceWorker.ready;

    try {
      const sub = await reg.pushManager.getSubscription();
      if (!sub) return;
      await this.hass.callApi("DELETE", "notify.html5", {
        subscription: sub
      });
      await sub.unsubscribe();
    } catch (err) {
      const message = err.message || "Failed unsubscribing for push notifications."; // eslint-disable-next-line

      console.error("Error in unsub push", err);
      this.fire("hass-notification", {
        message
      });
      this.pushChecked = true;
    }
  }

  _compDisabled(disabled, loading) {
    return disabled || loading;
  }

}

customElements.define("ha-push-notifications-toggle", HaPushNotificationsToggle);

/***/ }),

/***/ "./src/data/notify_html5.ts":
/*!**********************************!*\
  !*** ./src/data/notify_html5.ts ***!
  \**********************************/
/*! exports provided: getAppKey */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAppKey", function() { return getAppKey; });
function urlBase64ToUint8Array(base64String) {
  const padding = "=".repeat((4 - base64String.length % 4) % 4);
  const base64 = (base64String + padding).replace(/-/g, "+").replace(/_/g, "/");
  const rawData = window.atob(base64);
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}

const getAppKey = async hass => {
  const res = await hass.callWS({
    type: "notify/html5/appkey"
  });
  return res ? urlBase64ToUint8Array(res) : null;
};

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

/***/ "./src/panels/profile/ha-change-password-card.js":
/*!*******************************************************!*\
  !*** ./src/panels/profile/ha-change-password-card.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_dialog_paper_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-dialog/paper-dialog */ "./node_modules/@polymer/paper-dialog/paper-dialog.js");
/* harmony import */ var _polymer_paper_spinner_paper_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-spinner/paper-spinner */ "./node_modules/@polymer/paper-spinner/paper-spinner.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");








/*
 * @appliesMixin LocalizeMixin
 */

class HaChangePasswordCard extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="ha-style">
        .error {
          color: red;
        }
        .status {
          color: var(--primary-color);
        }
        .error,
        .status {
          position: absolute;
          top: -4px;
        }
        .currentPassword {
          margin-top: -4px;
        }
      </style>
      <div>
        <ha-card
          header="[[localize('ui.panel.profile.change_password.header')]]"
        >
          <div class="card-content">
            <template is="dom-if" if="[[_errorMsg]]">
              <div class="error">[[_errorMsg]]</div>
            </template>
            <template is="dom-if" if="[[_statusMsg]]">
              <div class="status">[[_statusMsg]]</div>
            </template>
            <paper-input
              class="currentPassword"
              label="[[localize('ui.panel.profile.change_password.current_password')]]"
              type="password"
              value="{{_currentPassword}}"
              required
              auto-validate
              error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
            ></paper-input>
            <template is="dom-if" if="[[_currentPassword]]">
              <paper-input
                label="[[localize('ui.panel.profile.change_password.new_password')]]"
                type="password"
                value="{{_password1}}"
                required
                auto-validate
                error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
              ></paper-input>
              <paper-input
                label="[[localize('ui.panel.profile.change_password.confirm_new_password')]]"
                type="password"
                value="{{_password2}}"
                required
                auto-validate
                error-message="[[localize('ui.panel.profile.change_password.error_required')]]"
              ></paper-input>
            </template>
          </div>
          <div class="card-actions">
            <template is="dom-if" if="[[_loading]]">
              <div><paper-spinner active></paper-spinner></div>
            </template>
            <template is="dom-if" if="[[!_loading]]">
              <mwc-button on-click="_changePassword"
                >[[localize('ui.panel.profile.change_password.submit')]]</mwc-button
              >
            </template>
          </div>
        </ha-card>
      </div>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      _loading: {
        type: Boolean,
        value: false
      },
      // Error message when can't talk to server etc
      _statusMsg: String,
      _errorMsg: String,
      _currentPassword: String,
      _password1: String,
      _password2: String
    };
  }

  ready() {
    super.ready();
    this.addEventListener("keypress", ev => {
      this._statusMsg = null;

      if (ev.keyCode === 13) {
        this._changePassword();
      }
    });
  }

  async _changePassword() {
    this._statusMsg = null;
    if (!this._currentPassword || !this._password1 || !this._password2) return;

    if (this._password1 !== this._password2) {
      this._errorMsg = "New password confirmation doesn't match";
      return;
    }

    if (this._currentPassword === this._password1) {
      this._errorMsg = "New password must be different than current password";
      return;
    }

    this._loading = true;
    this._errorMsg = null;

    try {
      await this.hass.callWS({
        type: "config/auth_provider/homeassistant/change_password",
        current_password: this._currentPassword,
        new_password: this._password1
      });
      this.setProperties({
        _statusMsg: "Password changed successfully",
        _currentPassword: null,
        _password1: null,
        _password2: null
      });
    } catch (err) {
      this._errorMsg = err.message;
    }

    this._loading = false;
  }

}

customElements.define("ha-change-password-card", HaChangePasswordCard);

/***/ }),

/***/ "./src/panels/profile/ha-long-lived-access-tokens-card.js":
/*!****************************************************************!*\
  !*** ./src/panels/profile/ha-long-lived-access-tokens-card.js ***!
  \****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");









/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HaLongLivedTokens extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_4__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_3__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"]`
      <style include="ha-style">
        .card-content {
          margin: -1em 0;
        }
        a {
          color: var(--primary-color);
        }
        paper-icon-button {
          color: var(--primary-text-color);
        }
      </style>
      <ha-card
        header="[[localize('ui.panel.profile.long_lived_access_tokens.header')]]"
      >
        <div class="card-content">
          <p>
            [[localize('ui.panel.profile.long_lived_access_tokens.description')]]
            <a
              href="https://developers.home-assistant.io/docs/en/auth_api.html#making-authenticated-requests"
              target="_blank"
            >
              [[localize('ui.panel.profile.long_lived_access_tokens.learn_auth_requests')]]
            </a>
          </p>
          <template is="dom-if" if="[[!_tokens.length]]">
            <p>
              [[localize('ui.panel.profile.long_lived_access_tokens.empty_state')]]
            </p>
          </template>
        </div>
        <template is="dom-repeat" items="[[_tokens]]">
          <ha-settings-row two-line>
            <span slot="heading">[[item.client_name]]</span>
            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>
            <paper-icon-button
              icon="hass:delete"
              on-click="_handleDelete"
            ></paper-icon-button>
          </ha-settings-row>
        </template>
        <div class="card-actions">
          <mwc-button on-click="_handleCreate">
            [[localize('ui.panel.profile.long_lived_access_tokens.create')]]
          </mwc-button>
        </div>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      refreshTokens: Array,
      _tokens: {
        type: Array,
        computed: "_computeTokens(refreshTokens)"
      }
    };
  }

  _computeTokens(refreshTokens) {
    return refreshTokens.filter(tkn => tkn.type === "long_lived_access_token").reverse();
  }

  _formatTitle(name) {
    return this.localize("ui.panel.profile.long_lived_access_tokens.token_title", "name", name);
  }

  _formatCreatedAt(created) {
    return this.localize("ui.panel.profile.long_lived_access_tokens.created_at", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_5__["default"])(new Date(created), this.hass.language));
  }

  async _handleCreate() {
    const name = prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_name"));
    if (!name) return;

    try {
      const token = await this.hass.callWS({
        type: "auth/long_lived_access_token",
        lifespan: 3650,
        client_name: name
      });
      prompt(this.localize("ui.panel.profile.long_lived_access_tokens.prompt_copy_token"), token);
      this.fire("hass-refresh-tokens");
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      alert(this.localize("ui.panel.profile.long_lived_access_tokens.create_failed"));
    }
  }

  async _handleDelete(ev) {
    if (!confirm(this.localize("ui.panel.profile.long_lived_access_tokens.confirm_delete", "name", ev.model.item.client_name))) {
      return;
    }

    try {
      await this.hass.callWS({
        type: "auth/delete_refresh_token",
        refresh_token_id: ev.model.item.id
      });
      this.fire("hass-refresh-tokens");
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      alert(this.localize("ui.panel.profile.long_lived_access_tokens.delete_failed"));
    }
  }

}

customElements.define("ha-long-lived-access-tokens-card", HaLongLivedTokens);

/***/ }),

/***/ "./src/panels/profile/ha-mfa-modules-card.js":
/*!***************************************************!*\
  !*** ./src/panels/profile/ha-mfa-modules-card.js ***!
  \***************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");









let registeredDialog = false;
/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HaMfaModulesCard extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_7__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_8__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style include="iron-flex ha-style">
        .error {
          color: red;
        }
        .status {
          color: var(--primary-color);
        }
        .error,
        .status {
          position: absolute;
          top: -4px;
        }
        mwc-button {
          margin-right: -0.57em;
        }
      </style>
      <ha-card header="[[localize('ui.panel.profile.mfa.header')]]">
        <template is="dom-repeat" items="[[mfaModules]]" as="module">
          <paper-item>
            <paper-item-body two-line="">
              <div>[[module.name]]</div>
              <div secondary="">[[module.id]]</div>
            </paper-item-body>
            <template is="dom-if" if="[[module.enabled]]">
              <mwc-button on-click="_disable"
                >[[localize('ui.panel.profile.mfa.disable')]]</mwc-button
              >
            </template>
            <template is="dom-if" if="[[!module.enabled]]">
              <mwc-button on-click="_enable"
                >[[localize('ui.panel.profile.mfa.enable')]]</mwc-button
              >
            </template>
          </paper-item>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      _loading: {
        type: Boolean,
        value: false
      },
      // Error message when can't talk to server etc
      _statusMsg: String,
      _errorMsg: String,
      mfaModules: Array
    };
  }

  connectedCallback() {
    super.connectedCallback();

    if (!registeredDialog) {
      registeredDialog = true;
      this.fire("register-dialog", {
        dialogShowEvent: "show-mfa-module-setup-flow",
        dialogTag: "ha-mfa-module-setup-flow",
        dialogImport: () => Promise.all(/*! import() | ha-mfa-module-setup-flow */[__webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-calendar~panel-config-cus~ab938ece"), __webpack_require__.e("vendors~dialog-config-flow~ha-mfa-module-setup-flow~more-info-dialog~panel-kiosk~panel-lovelace~pane~abfacb2f"), __webpack_require__.e("dialog-config-flow~ha-mfa-module-setup-flow"), __webpack_require__.e("ha-mfa-module-setup-flow")]).then(__webpack_require__.bind(null, /*! ./ha-mfa-module-setup-flow */ "./src/panels/profile/ha-mfa-module-setup-flow.js"))
      });
    }
  }

  _enable(ev) {
    this.fire("show-mfa-module-setup-flow", {
      hass: this.hass,
      mfaModuleId: ev.model.module.id,
      dialogClosedCallback: () => this._refreshCurrentUser()
    });
  }

  _disable(ev) {
    if (!confirm(this.localize("ui.panel.profile.mfa.confirm_disable", "name", ev.model.module.name))) {
      return;
    }

    const mfaModuleId = ev.model.module.id;
    this.hass.callWS({
      type: "auth/depose_mfa",
      mfa_module_id: mfaModuleId
    }).then(() => {
      this._refreshCurrentUser();
    });
  }

  _refreshCurrentUser() {
    this.fire("hass-refresh-current-user");
  }

}

customElements.define("ha-mfa-modules-card", HaMfaModulesCard);

/***/ }),

/***/ "./src/panels/profile/ha-panel-profile.js":
/*!************************************************!*\
  !*** ./src/panels/profile/ha-panel-profile.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_paper_item_paper_item_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/paper-item/paper-item-body */ "./node_modules/@polymer/paper-item/paper-item-body.js");
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_change_password_card__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ha-change-password-card */ "./src/panels/profile/ha-change-password-card.js");
/* harmony import */ var _ha_mfa_modules_card__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ha-mfa-modules-card */ "./src/panels/profile/ha-mfa-modules-card.js");
/* harmony import */ var _ha_refresh_tokens_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./ha-refresh-tokens-card */ "./src/panels/profile/ha-refresh-tokens-card.js");
/* harmony import */ var _ha_long_lived_access_tokens_card__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./ha-long-lived-access-tokens-card */ "./src/panels/profile/ha-long-lived-access-tokens-card.js");
/* harmony import */ var _ha_pick_language_row__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./ha-pick-language-row */ "./src/panels/profile/ha-pick-language-row.js");
/* harmony import */ var _ha_pick_theme_row__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./ha-pick-theme-row */ "./src/panels/profile/ha-pick-theme-row.js");
/* harmony import */ var _ha_push_notifications_row__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ha-push-notifications-row */ "./src/panels/profile/ha-push-notifications-row.js");




















/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HaPanelProfile extends Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_11__["EventsMixin"])(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_12__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"]`
      <style include="ha-style">
        :host {
          -ms-user-select: initial;
          -webkit-user-select: initial;
          -moz-user-select: initial;
        }

        .content {
          display: block;
          max-width: 600px;
          margin: 0 auto;
        }

        .content > * {
          display: block;
          margin: 24px 0;
        }
      </style>

      <app-header-layout has-scrolling-region>
        <app-header slot="header" fixed>
          <app-toolbar>
            <ha-menu-button></ha-menu-button>
            <div main-title>[[localize('panel.profile')]]</div>
          </app-toolbar>
        </app-header>

        <div class="content">
          <ha-card header="[[hass.user.name]]">
            <div class="card-content">
              [[localize('ui.panel.profile.current_user', 'fullName',
              hass.user.name)]]
              <template is="dom-if" if="[[hass.user.is_owner]]"
                >[[localize('ui.panel.profile.is_owner')]]</template
              >
            </div>

            <hello-world hass="[[hass]]"></hello-world>

            <ha-pick-language-row
              narrow="[[narrow]]"
              hass="[[hass]]"
            ></ha-pick-language-row>
            <ha-pick-theme-row
              narrow="[[narrow]]"
              hass="[[hass]]"
            ></ha-pick-theme-row>
            <ha-push-notifications-row
              narrow="[[narrow]]"
              hass="[[hass]]"
            ></ha-push-notifications-row>

            <div class="card-actions">
              <mwc-button class="warning" on-click="_handleLogOut"
                >[[localize('ui.panel.profile.logout')]]</mwc-button
              >
            </div>
          </ha-card>

          <template is="dom-if" if="[[_canChangePassword(hass.user)]]">
            <ha-change-password-card hass="[[hass]]"></ha-change-password-card>
          </template>

          <ha-mfa-modules-card
            hass="[[hass]]"
            mfa-modules="[[hass.user.mfa_modules]]"
          ></ha-mfa-modules-card>

          <ha-refresh-tokens-card
            hass="[[hass]]"
            refresh-tokens="[[_refreshTokens]]"
            on-hass-refresh-tokens="_refreshRefreshTokens"
          ></ha-refresh-tokens-card>

          <ha-long-lived-access-tokens-card
            hass="[[hass]]"
            refresh-tokens="[[_refreshTokens]]"
            on-hass-refresh-tokens="_refreshRefreshTokens"
          ></ha-long-lived-access-tokens-card>
        </div>
      </app-header-layout>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      _refreshTokens: Array
    };
  }

  connectedCallback() {
    super.connectedCallback();

    this._refreshRefreshTokens();
  }

  async _refreshRefreshTokens() {
    this._refreshTokens = await this.hass.callWS({
      type: "auth/refresh_tokens"
    });
  }

  _handleLogOut() {
    this.fire("hass-logout");
  }

  _canChangePassword(user) {
    return user.credentials.some(cred => cred.auth_provider_type === "homeassistant");
  }

}

customElements.define("ha-panel-profile", HaPanelProfile);

/***/ }),

/***/ "./src/panels/profile/ha-pick-language-row.js":
/*!****************************************************!*\
  !*** ./src/panels/profile/ha-pick-language-row.js ***!
  \****************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");








/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class HaPickLanguageRow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        a {
          color: var(--primary-color);
        }
        paper-item {
          direction: ltr;
        }
        paper-item[is-rtl] {
          direction: rtl;
        }
      </style>
      <ha-settings-row narrow="[[narrow]]">
        <span slot="heading"
          >[[localize('ui.panel.profile.language.header')]]</span
        >
        <span slot="description">
          <a
            href="https://developers.home-assistant.io/docs/en/internationalization_translation.html"
            target="_blank"
            >[[localize('ui.panel.profile.language.link_promo')]]</a
          >
        </span>
        <ha-paper-dropdown-menu
          label="[[localize('ui.panel.profile.language.dropdown_label')]]"
          dynamic-align=""
        >
          <paper-listbox
            slot="dropdown-content"
            attr-for-selected="language-tag"
            selected="{{languageSelection}}"
          >
            <template is="dom-repeat" items="[[languages]]">
              <paper-item language-tag$="[[item.key]]" is-rtl$="[[item.isRTL]]">
                [[item.nativeName]]
              </paper-item>
            </template>
          </paper-listbox>
        </ha-paper-dropdown-menu>
      </ha-settings-row>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      languageSelection: {
        type: String,
        observer: "languageSelectionChanged"
      },
      languages: {
        type: Array,
        computed: "computeLanguages(hass)"
      }
    };
  }

  static get observers() {
    return ["setLanguageSelection(language)"];
  }

  computeLanguages(hass) {
    if (!hass || !hass.translationMetadata) {
      return [];
    }

    const translations = hass.translationMetadata.translations;
    return Object.keys(translations).map(key => Object.assign({
      key
    }, translations[key]));
  }

  setLanguageSelection(language) {
    this.languageSelection = language;
  }

  languageSelectionChanged(newVal) {
    // Only fire event if language was changed. This prevents select updates when
    // responding to hass changes.
    if (newVal !== this.hass.language) {
      this.fire("hass-language-select", {
        language: newVal
      });
    }
  }

  ready() {
    super.ready();

    if (this.hass && this.hass.language) {
      this.setLanguageSelection(this.hass.language);
    }
  }

}

customElements.define("ha-pick-language-row", HaPickLanguageRow);

/***/ }),

/***/ "./src/panels/profile/ha-pick-theme-row.js":
/*!*************************************************!*\
  !*** ./src/panels/profile/ha-pick-theme-row.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_item_paper_item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-item/paper-item */ "./node_modules/@polymer/paper-item/paper-item.js");
/* harmony import */ var _polymer_paper_listbox_paper_listbox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-listbox/paper-listbox */ "./node_modules/@polymer/paper-listbox/paper-listbox.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_paper_dropdown_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../components/ha-paper-dropdown-menu */ "./src/components/ha-paper-dropdown-menu.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");







/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

class HaPickThemeRow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        a {
          color: var(--primary-color);
        }
      </style>
      <ha-settings-row narrow="[[narrow]]">
        <span slot="heading"
          >[[localize('ui.panel.profile.themes.header')]]</span
        >
        <span slot="description">
          <template is="dom-if" if="[[!_hasThemes]]">
            [[localize('ui.panel.profile.themes.error_no_theme')]]
          </template>
          <a
            href="https://embed.windy.com/embed2.html?lat=32.487&lon=-84.023&zoom=5&level=surface&overlay=rain&menu=&message=&marker=&calendar=&pressure=&type=map&location=coordinates&detail=&detailLat=32.487&detailLon=--84.023&metricWind=default&metricTemp=default&radarRange=-1/components/frontend/#defining-themes"
            target="_blank"
            >[[localize('ui.panel.profile.themes.link_promo')]]</a
          >
        </span>
        <ha-paper-dropdown-menu
          label="[[localize('ui.panel.profile.themes.dropdown_label')]]"
          dynamic-align
          disabled="[[!_hasThemes]]"
        >
          <paper-listbox slot="dropdown-content" selected="{{selectedTheme}}">
            <template is="dom-repeat" items="[[themes]]" as="theme">
              <paper-item>[[theme]]</paper-item>
            </template>
          </paper-listbox>
        </ha-paper-dropdown-menu>
      </ha-settings-row>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      _hasThemes: {
        type: Boolean,
        computed: "_compHasThemes(hass)"
      },
      themes: {
        type: Array,
        computed: "_computeThemes(hass)"
      },
      selectedTheme: {
        type: Number
      }
    };
  }

  static get observers() {
    return ["selectionChanged(hass, selectedTheme)"];
  }

  _compHasThemes(hass) {
    return hass.themes && hass.themes.themes && Object.keys(hass.themes.themes).length;
  }

  ready() {
    super.ready();

    if (this.hass.selectedTheme && this.themes.indexOf(this.hass.selectedTheme) > 0) {
      this.selectedTheme = this.themes.indexOf(this.hass.selectedTheme);
    } else if (!this.hass.selectedTheme) {
      this.selectedTheme = 0;
    }
  }

  _computeThemes(hass) {
    if (!hass) return [];
    return ["Backend-selected", "default"].concat(Object.keys(hass.themes.themes).sort());
  }

  selectionChanged(hass, selection) {
    if (selection > 0 && selection < this.themes.length) {
      if (hass.selectedTheme !== this.themes[selection]) {
        this.fire("settheme", this.themes[selection]);
      }
    } else if (selection === 0 && hass.selectedTheme !== "") {
      this.fire("settheme", "");
    }
  }

}

customElements.define("ha-pick-theme-row", HaPickThemeRow);

/***/ }),

/***/ "./src/panels/profile/ha-push-notifications-row.js":
/*!*********************************************************!*\
  !*** ./src/panels/profile/ha-push-notifications-row.js ***!
  \*********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_label_iron_label__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/iron-label/iron-label */ "./node_modules/@polymer/iron-label/iron-label.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../common/config/is_component_loaded */ "./src/common/config/is_component_loaded.ts");
/* harmony import */ var _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/ha-push-notifications-toggle */ "./src/components/ha-push-notifications-toggle.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");








/*
 * @appliesMixin LocalizeMixin
 */

class HaPushNotificationsRow extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_3__["PolymerElement"]) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"]`
      <style>
        a {
          color: var(--primary-color);
        }
      </style>
      <ha-settings-row narrow="[[narrow]]">
        <span slot="heading"
          >[[localize('ui.panel.profile.push_notifications.header')]]</span
        >
        <span slot="description">
          [[_description(_platformLoaded, _pushSupported)]]
          <a
            href="https://www.home-assistant.io/components/notify.html5/"
            target="_blank"
            >[[localize('ui.panel.profile.push_notifications.link_promo')]]</a
          >
        </span>
        <ha-push-notifications-toggle
          hass="[[hass]]"
          disabled="[[_error]]"
        ></ha-push-notifications-toggle>
      </ha-settings-row>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      narrow: Boolean,
      _platformLoaded: {
        type: Boolean,
        computed: "_compPlatformLoaded(hass)"
      },
      _pushSupported: {
        type: Boolean,
        value: _components_ha_push_notifications_toggle__WEBPACK_IMPORTED_MODULE_5__["pushSupported"]
      },
      _error: {
        type: Boolean,
        computed: "_compError(_platformLoaded, _pushSupported)"
      }
    };
  }

  _compPlatformLoaded(hass) {
    return Object(_common_config_is_component_loaded__WEBPACK_IMPORTED_MODULE_4__["default"])(hass, "notify.html5");
  }

  _compError(platformLoaded, pushSupported_) {
    return !platformLoaded || !pushSupported_;
  }

  _description(platformLoaded, pushSupported_) {
    let key;

    if (!pushSupported_) {
      key = "error_use_https";
    } else if (!platformLoaded) {
      key = "error_load_platform";
    } else {
      key = "description";
    }

    return this.localize(`ui.panel.profile.push_notifications.${key}`);
  }

}

customElements.define("ha-push-notifications-row", HaPushNotificationsRow);

/***/ }),

/***/ "./src/panels/profile/ha-refresh-tokens-card.js":
/*!******************************************************!*\
  !*** ./src/panels/profile/ha-refresh-tokens-card.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_icon_button_paper_icon_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-icon-button/paper-icon-button */ "./node_modules/@polymer/paper-icon-button/paper-icon-button.js");
/* harmony import */ var _polymer_paper_tooltip_paper_tooltip__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/paper-tooltip/paper-tooltip */ "./node_modules/@polymer/paper-tooltip/paper-tooltip.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../common/datetime/format_date_time */ "./src/common/datetime/format_date_time.ts");
/* harmony import */ var _ha_settings_row__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ha-settings-row */ "./src/panels/profile/ha-settings-row.js");









/*
 * @appliesMixin EventsMixin
 * @appliesMixin LocalizeMixin
 */

class HaRefreshTokens extends Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"])) {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"]`
      <style>
        paper-icon-button {
          color: var(--primary-text-color);
        }
        paper-icon-button[disabled] {
          color: var(--disabled-text-color);
        }
      </style>
      <ha-card header="[[localize('ui.panel.profile.refresh_tokens.header')]]">
        <div class="card-content">
          [[localize('ui.panel.profile.refresh_tokens.description')]]
        </div>
        <template is="dom-repeat" items="[[_computeTokens(refreshTokens)]]">
          <ha-settings-row three-line>
            <span slot="heading">[[_formatTitle(item.client_id)]]</span>
            <div slot="description">[[_formatCreatedAt(item.created_at)]]</div>
            <div slot="description">[[_formatLastUsed(item)]]</div>
            <div>
              <template is="dom-if" if="[[item.is_current]]">
                <paper-tooltip position="left"
                  >[[localize('ui.panel.profile.refresh_tokens.current_token_tooltip')]]</paper-tooltip
                >
              </template>
              <paper-icon-button
                icon="hass:delete"
                on-click="_handleDelete"
                disabled="[[item.is_current]]"
              ></paper-icon-button>
            </div>
          </ha-settings-row>
        </template>
      </ha-card>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      refreshTokens: Array
    };
  }

  _computeTokens(refreshTokens) {
    return refreshTokens.filter(tkn => tkn.type === "normal").reverse();
  }

  _formatTitle(clientId) {
    return this.localize("ui.panel.profile.refresh_tokens.token_title", "clientId", clientId);
  }

  _formatCreatedAt(created) {
    return this.localize("ui.panel.profile.refresh_tokens.created_at", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(created), this.hass.language));
  }

  _formatLastUsed(item) {
    return item.last_used_at ? this.localize("ui.panel.profile.refresh_tokens.last_used", "date", Object(_common_datetime_format_date_time__WEBPACK_IMPORTED_MODULE_7__["default"])(new Date(item.last_used_at), this.hass.language), "location", item.last_used_ip) : this.localize("ui.panel.profile.refresh_tokens.not_used");
  }

  async _handleDelete(ev) {
    if (!confirm(this.localize("ui.panel.profile.refresh_tokens.confirm_delete", "name", ev.model.item.client_id))) {
      return;
    }

    try {
      await this.hass.callWS({
        type: "auth/delete_refresh_token",
        refresh_token_id: ev.model.item.id
      });
      this.fire("hass-refresh-tokens");
    } catch (err) {
      // eslint-disable-next-line
      console.error(err);
      alert(this.localize("ui.panel.profile.refresh_tokens.delete_failed"));
    }
  }

}

customElements.define("ha-refresh-tokens-card", HaRefreshTokens);

/***/ }),

/***/ "./src/panels/profile/ha-settings-row.js":
/*!***********************************************!*\
  !*** ./src/panels/profile/ha-settings-row.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");



class HaSettingsRow extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <style>
        :host {
          display: flex;
          padding: 0 16px;
          align-content: normal;
          align-self: auto;
          align-items: center;
        }
        :host([narrow]) {
          align-items: normal;
          flex-direction: column;
          border-top: 1px solid var(--divider-color);
          padding-bottom: 8px;
        }
        paper-item-body {
          padding-right: 16px;
        }
      </style>
      <paper-item-body two-line$="[[!threeLine]]" three-line$="[[threeLine]]">
        <slot name="heading"></slot>
        <div secondary><slot name="description"></slot></div>
      </paper-item-body>
      <slot></slot>
    `;
  }

  static get properties() {
    return {
      narrow: {
        type: Boolean,
        reflectToAttribute: true
      },
      threeLine: {
        type: Boolean,
        value: false
      }
    };
  }

}

customElements.define("ha-settings-row", HaSettingsRow);

/***/ })

}]);
//# sourceMappingURL=panel-profile.chunk.js.map