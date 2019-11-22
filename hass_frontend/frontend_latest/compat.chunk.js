(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["compat"],{

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
  Object.values = target => {
    return Object.keys(target).map(key => target[key]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29tcGF0LmNodW5rLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2VudHJ5cG9pbnRzL2NvbXBhdGliaWxpdHkudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFwibWRuLXBvbHlmaWxscy9BcnJheS5wcm90b3R5cGUuaW5jbHVkZXNcIjtcbmltcG9ydCBcInVuZmV0Y2gvcG9seWZpbGxcIjtcbmltcG9ydCBcInJlZ2VuZXJhdG9yLXJ1bnRpbWUvcnVudGltZVwiO1xuaW1wb3J0IG9iakFzc2lnbiBmcm9tIFwiZXM2LW9iamVjdC1hc3NpZ25cIjtcblxub2JqQXNzaWduLnBvbHlmaWxsKCk7XG5cbmlmIChPYmplY3QudmFsdWVzID09PSB1bmRlZmluZWQpIHtcbiAgT2JqZWN0LnZhbHVlcyA9ICh0YXJnZXQpID0+IHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGFyZ2V0KS5tYXAoKGtleSkgPT4gdGFyZ2V0W2tleV0pO1xuICB9O1xufVxuXG4vKiB0c2xpbnQ6ZGlzYWJsZSAqL1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3V4aXR0ZW4vcG9seWZpbGwvYmxvYi9tYXN0ZXIvc3RyaW5nLnBvbHlmaWxsLmpzXG4vLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9TdHJpbmcvcGFkU3RhcnRcbmlmICghU3RyaW5nLnByb3RvdHlwZS5wYWRTdGFydCkge1xuICBTdHJpbmcucHJvdG90eXBlLnBhZFN0YXJ0ID0gZnVuY3Rpb24gcGFkU3RhcnQodGFyZ2V0TGVuZ3RoLCBwYWRTdHJpbmcpIHtcbiAgICB0YXJnZXRMZW5ndGggPSB0YXJnZXRMZW5ndGggPj4gMDsgLy90cnVuY2F0ZSBpZiBudW1iZXIsIG9yIGNvbnZlcnQgbm9uLW51bWJlciB0byAwO1xuICAgIHBhZFN0cmluZyA9IFN0cmluZyh0eXBlb2YgcGFkU3RyaW5nICE9PSBcInVuZGVmaW5lZFwiID8gcGFkU3RyaW5nIDogXCIgXCIpO1xuICAgIGlmICh0aGlzLmxlbmd0aCA+PSB0YXJnZXRMZW5ndGgpIHtcbiAgICAgIHJldHVybiBTdHJpbmcodGhpcyk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRhcmdldExlbmd0aCA9IHRhcmdldExlbmd0aCAtIHRoaXMubGVuZ3RoO1xuICAgICAgaWYgKHRhcmdldExlbmd0aCA+IHBhZFN0cmluZy5sZW5ndGgpIHtcbiAgICAgICAgcGFkU3RyaW5nICs9IHBhZFN0cmluZy5yZXBlYXQodGFyZ2V0TGVuZ3RoIC8gcGFkU3RyaW5nLmxlbmd0aCk7IC8vYXBwZW5kIHRvIG9yaWdpbmFsIHRvIGVuc3VyZSB3ZSBhcmUgbG9uZ2VyIHRoYW4gbmVlZGVkXG4gICAgICB9XG4gICAgICByZXR1cm4gcGFkU3RyaW5nLnNsaWNlKDAsIHRhcmdldExlbmd0aCkgKyBTdHJpbmcodGhpcyk7XG4gICAgfVxuICB9O1xufVxuLyogdHNsaW50OmVuYWJsZSAqL1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9