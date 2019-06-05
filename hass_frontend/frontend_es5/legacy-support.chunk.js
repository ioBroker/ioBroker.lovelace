(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["legacy-support"],{

/***/ "./src/util/legacy-support.js":
/*!************************************!*\
  !*** ./src/util/legacy-support.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-legacy */ "./node_modules/@polymer/polymer/polymer-legacy.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/**
 * Provide legacy support to HTML imports by exposing Polymer and
 * Polymer.Element on the window object.
 */



_polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_1__["Polymer"].Element = _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"];
_polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_1__["Polymer"].html = _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_2__["html"];
window.Polymer = _polymer_polymer_polymer_legacy__WEBPACK_IMPORTED_MODULE_1__["Polymer"];

/***/ })

}]);
//# sourceMappingURL=legacy-support.chunk.js.map