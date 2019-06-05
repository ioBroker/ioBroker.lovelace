(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-kiosk"],{

/***/ "./src/panels/kiosk/ha-panel-kiosk.js":
/*!********************************************!*\
  !*** ./src/panels/kiosk/ha-panel-kiosk.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _states_ha_panel_states__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../states/ha-panel-states */ "./src/panels/states/ha-panel-states.js");




class HaPanelKiosk extends _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"] {
  static get template() {
    return _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"]`
      <ha-panel-states
        id="kiosk-states"
        hass="[[hass]]"
        show-menu
        route="[[route]]"
        panel-visible
      ></ha-panel-states>
    `;
  }

  static get properties() {
    return {
      hass: Object,
      route: Object
    };
  }

}

customElements.define("ha-panel-kiosk", HaPanelKiosk);

/***/ })

}]);
//# sourceMappingURL=panel-kiosk.chunk.js.map