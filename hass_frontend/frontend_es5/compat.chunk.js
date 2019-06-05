(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["compat"],{

/***/ "./src/entrypoints/compatibility.ts":
/*!******************************************!*\
  !*** ./src/entrypoints/compatibility.ts ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mdn-polyfills/Array.prototype.includes */ "./node_modules/mdn-polyfills/Array.prototype.includes.js");
/* harmony import */ var mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mdn_polyfills_Array_prototype_includes__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var unfetch_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unfetch/polyfill */ "./node_modules/unfetch/polyfill/polyfill.mjs");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! regenerator-runtime/runtime */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var es6_object_assign__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! es6-object-assign */ "./node_modules/es6-object-assign/index.js");
/* harmony import */ var es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign__WEBPACK_IMPORTED_MODULE_3__);




es6_object_assign__WEBPACK_IMPORTED_MODULE_3___default.a.polyfill();

if (Object.values === undefined) {
  Object.values = function (target) {
    return Object.keys(target).map(function (key) {
      return target[key];
    });
  };
}
/* tslint:disable */
// https://github.com/uxitten/polyfill/blob/master/string.polyfill.js
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/padStart


if (!String.prototype.padStart) {
  String.prototype.padStart = function padStart(targetLength, padString) {
    targetLength = targetLength >> 0; //truncate if number, or convert non-number to 0;

    padString = String(typeof padString !== "undefined" ? padString : " ");

    if (this.length >= targetLength) {
      return String(this);
    } else {
      targetLength = targetLength - this.length;

      if (targetLength > padString.length) {
        padString += padString.repeat(targetLength / padString.length); //append to original to ensure we are longer than needed
      }

      return padString.slice(0, targetLength) + String(this);
    }
  };
}
/* tslint:enable */

/***/ })

}]);
//# sourceMappingURL=compat.chunk.js.map