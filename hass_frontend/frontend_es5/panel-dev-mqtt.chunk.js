(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-dev-mqtt"],{

/***/ "./src/panels/dev-mqtt/ha-panel-dev-mqtt.js":
/*!**************************************************!*\
  !*** ./src/panels/dev-mqtt/ha-panel-dev-mqtt.js ***!
  \**************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_layout_app_header_layout_app_header_layout__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-layout/app-header-layout/app-header-layout */ "./node_modules/@polymer/app-layout/app-header-layout/app-header-layout.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_paper_input_paper_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/paper-input/paper-input */ "./node_modules/@polymer/paper-input/paper-input.js");
/* harmony import */ var _polymer_paper_input_paper_textarea__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/paper-input/paper-textarea */ "./node_modules/@polymer/paper-input/paper-textarea.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _resources_ha_style__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../resources/ha-style */ "./src/resources/ha-style.ts");
/* harmony import */ var _util_app_localstorage_document__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/app-localstorage-document */ "./src/util/app-localstorage-document.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"ha-style\">\n        :host {\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n\n        .content {\n          padding: 24px 0 32px;\n          max-width: 600px;\n          margin: 0 auto;\n          direction: ltr;\n        }\n\n        mwc-button {\n          background-color: white;\n        }\n      </style>\n\n      <app-header-layout has-scrolling-region>\n        <app-header slot=\"header\" fixed>\n          <app-toolbar>\n            <ha-menu-button></ha-menu-button>\n            <div main-title>MQTT</div>\n          </app-toolbar>\n        </app-header>\n\n        <app-localstorage-document key=\"panel-dev-mqtt-topic\" data=\"{{topic}}\">\n        </app-localstorage-document>\n        <app-localstorage-document\n          key=\"panel-dev-mqtt-payload\"\n          data=\"{{payload}}\"\n        >\n        </app-localstorage-document>\n\n        <div class=\"content\">\n          <ha-card header=\"Publish a packet\">\n            <div class=\"card-content\">\n              <paper-input label=\"topic\" value=\"{{topic}}\"></paper-input>\n\n              <paper-textarea\n                always-float-label\n                label=\"Payload (template allowed)\"\n                value=\"{{payload}}\"\n              ></paper-textarea>\n            </div>\n            <div class=\"card-actions\">\n              <mwc-button on-click=\"_publish\">Publish</mwc-button>\n            </div>\n          </ha-card>\n        </div>\n      </app-header-layout>\n    "]);

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

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var HaPanelDevMqtt =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaPanelDevMqtt, _PolymerElement);

  function HaPanelDevMqtt() {
    _classCallCheck(this, HaPanelDevMqtt);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPanelDevMqtt).apply(this, arguments));
  }

  _createClass(HaPanelDevMqtt, [{
    key: "_publish",
    value: function _publish() {
      this.hass.callService("mqtt", "publish", {
        topic: this.topic,
        payload_template: this.payload
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_6__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        topic: String,
        payload: String
      };
    }
  }]);

  return HaPanelDevMqtt;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_7__["PolymerElement"]);

customElements.define("ha-panel-dev-mqtt", HaPanelDevMqtt);

/***/ }),

/***/ "./src/util/app-localstorage-document.js":
/*!***********************************************!*\
  !*** ./src/util/app-localstorage-document.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/app-storage/app-storage-behavior */ "./node_modules/@polymer/app-storage/app-storage-behavior.js");
/* harmony import */ var _polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/legacy/polymer-fn */ "./node_modules/@polymer/polymer/lib/legacy/polymer-fn.js");
/* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* Forked because it contained an import.meta which webpack doesn't support. */

/* eslint-disable */

/**
@license
Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/



/**
 * app-localstorage-document synchronizes storage between an in-memory
 * value and a location in the browser's localStorage system.
 *
 * localStorage is a simple and widely supported storage API that provides both
 * permanent and session-based storage options. Using app-localstorage-document
 * you can easily integrate localStorage into your app via normal Polymer
 * databinding.
 *
 * app-localstorage-document is the reference implementation of an element
 * that uses `AppStorageBehavior`. Reading its code is a good way to get
 * started writing your own storage element.
 *
 * Example use:
 *
 *     <paper-input value="{{search}}"></paper-input>
 *     <app-localstorage-document key="search" data="{{search}}">
 *     </app-localstorage-document>
 *
 * app-localstorage-document automatically synchronizes changes to the
 * same key across multiple tabs.
 *
 * Only supports storing JSON-serializable values.
 */

Object(_polymer_polymer_lib_legacy_polymer_fn__WEBPACK_IMPORTED_MODULE_1__["Polymer"])({
  is: "app-localstorage-document",
  behaviors: [_polymer_app_storage_app_storage_behavior__WEBPACK_IMPORTED_MODULE_0__["AppStorageBehavior"]],
  properties: {
    /**
     * Defines the logical location to store the data.
     *
     * @type{String}
     */
    key: {
      type: String,
      notify: true
    },

    /**
     * If true, the data will automatically be cleared from storage when
     * the page session ends (i.e. when the user has navigated away from
     * the page).
     */
    sessionOnly: {
      type: Boolean,
      value: false
    },

    /**
     * Either `window.localStorage` or `window.sessionStorage`, depending on
     * `this.sessionOnly`.
     */
    storage: {
      type: Object,
      computed: "__computeStorage(sessionOnly)"
    }
  },
  observers: ["__storageSourceChanged(storage, key)"],
  attached: function attached() {
    this.listen(window, "storage", "__onStorage");
    this.listen(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },
  detached: function detached() {
    this.unlisten(window, "storage", "__onStorage");
    this.unlisten(window.top, "app-local-storage-changed", "__onAppLocalStorageChanged");
  },

  get isNew() {
    return !this.key;
  },

  /**
   * Stores a value at the given key, and if successful, updates this.key.
   *
   * @param {*} key The new key to use.
   * @return {Promise}
   */
  saveValue: function saveValue(key) {
    try {
      this.__setStorageValue(
      /*{@type if (key ty){String}}*/
      key, this.data);
    } catch (e) {
      return Promise.reject(e);
    }

    this.key =
    /** @type {String} */
    key;
    return Promise.resolve();
  },
  reset: function reset() {
    this.key = null;
    this.data = this.zeroValue;
  },
  destroy: function destroy() {
    try {
      this.storage.removeItem(this.key);
      this.reset();
    } catch (e) {
      return Promise.reject(e);
    }

    return Promise.resolve();
  },
  getStoredValue: function getStoredValue(path) {
    var value;

    if (this.key != null) {
      try {
        value = this.__parseValueFromStorage();

        if (value != null) {
          value = this.get(path, {
            data: value
          });
        } else {
          value = undefined;
        }
      } catch (e) {
        return Promise.reject(e);
      }
    }

    return Promise.resolve(value);
  },
  setStoredValue: function setStoredValue(path, value) {
    if (this.key != null) {
      try {
        this.__setStorageValue(this.key, this.data);
      } catch (e) {
        return Promise.reject(e);
      }

      this.fire("app-local-storage-changed", this, {
        node: window.top
      });
    }

    return Promise.resolve(value);
  },
  __computeStorage: function __computeStorage(sessionOnly) {
    return sessionOnly ? window.sessionStorage : window.localStorage;
  },
  __storageSourceChanged: function __storageSourceChanged(storage, key) {
    this._initializeStoredValue();
  },
  __onStorage: function __onStorage(event) {
    if (event.key !== this.key || event.storageArea !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", this.__parseValueFromStorage());
    });
  },
  __onAppLocalStorageChanged: function __onAppLocalStorageChanged(event) {
    if (event.detail === this || event.detail.key !== this.key || event.detail.storage !== this.storage) {
      return;
    }

    this.syncToMemory(function () {
      this.set("data", event.detail.data);
    });
  },
  __parseValueFromStorage: function __parseValueFromStorage() {
    try {
      return JSON.parse(this.storage.getItem(this.key));
    } catch (e) {
      console.error("Failed to parse value from storage for", this.key);
    }
  },
  __setStorageValue: function __setStorageValue(key, value) {
    if (typeof value === "undefined") value = null;
    this.storage.setItem(key, JSON.stringify(value));
  }
});

/***/ })

}]);
//# sourceMappingURL=panel-dev-mqtt.chunk.js.map