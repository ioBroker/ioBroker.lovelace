/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/data-table/sort_filter_worker.ts":
/*!*********************************************************!*\
  !*** ./src/components/data-table/sort_filter_worker.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-polyfill */ \"./node_modules/proxy-polyfill/src/index.js\");\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(proxy_polyfill__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n// To use comlink under ES5\n\n\n\nvar filterData = function filterData(data, columns, filter) {\n  filter = filter.toUpperCase();\n  return data.filter(function (row) {\n    return Object.entries(columns).some(function (columnEntry) {\n      var _columnEntry = _slicedToArray(columnEntry, 2),\n          key = _columnEntry[0],\n          column = _columnEntry[1];\n\n      if (column.filterable) {\n        if (String(column.filterKey ? row[column.valueColumn || key][column.filterKey] : row[column.valueColumn || key]).toUpperCase().includes(filter)) {\n          return true;\n        }\n      }\n\n      return false;\n    });\n  });\n};\n\nvar sortData = function sortData(data, column, direction, sortColumn) {\n  return data.sort(function (a, b) {\n    var sort = 1;\n\n    if (direction === \"desc\") {\n      sort = -1;\n    }\n\n    var valA = column.filterKey ? a[column.valueColumn || sortColumn][column.filterKey] : a[column.valueColumn || sortColumn];\n    var valB = column.filterKey ? b[column.valueColumn || sortColumn][column.filterKey] : b[column.valueColumn || sortColumn];\n\n    if (typeof valA === \"string\") {\n      valA = valA.toUpperCase();\n    }\n\n    if (typeof valB === \"string\") {\n      valB = valB.toUpperCase();\n    } // Ensure \"undefined\" is always sorted to the bottom\n\n\n    if (valA === undefined && valB !== undefined) {\n      return 1;\n    }\n\n    if (valB === undefined && valA !== undefined) {\n      return -1;\n    }\n\n    if (valA < valB) {\n      return sort * -1;\n    }\n\n    if (valA > valB) {\n      return sort * 1;\n    }\n\n    return 0;\n  });\n};\n\nvar api = {\n  filterData: filterData,\n  sortData: sortData\n};\n(0,comlink__WEBPACK_IMPORTED_MODULE_1__.expose)(api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9kYXRhLXRhYmxlL3NvcnRfZmlsdGVyX3dvcmtlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOztBQVFBO0FBS0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFTQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQWpCQTtBQW1CQTs7QUFFQTtBQUFBO0FBT0E7O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBSUE7O0FBSUE7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBQ0E7QUFDQTtBQUNBOztBQUNBO0FBQ0E7QUExQ0E7O0FBNENBO0FBQ0E7QUFDQTtBQUZBO0FBT0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvc29ydF9maWx0ZXJfd29ya2VyLnRzPzJiNTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVG8gdXNlIGNvbWxpbmsgdW5kZXIgRVM1XG5pbXBvcnQgeyBleHBvc2UgfSBmcm9tIFwiY29tbGlua1wiO1xuaW1wb3J0IFwicHJveHktcG9seWZpbGxcIjtcbmltcG9ydCB0eXBlIHtcbiAgQ2xvbmVkRGF0YVRhYmxlQ29sdW1uRGF0YSxcbiAgRGF0YVRhYmxlUm93RGF0YSxcbiAgU29ydGFibGVDb2x1bW5Db250YWluZXIsXG4gIFNvcnRpbmdEaXJlY3Rpb24sXG59IGZyb20gXCIuL2hhLWRhdGEtdGFibGVcIjtcblxuY29uc3QgZmlsdGVyRGF0YSA9IChcbiAgZGF0YTogRGF0YVRhYmxlUm93RGF0YVtdLFxuICBjb2x1bW5zOiBTb3J0YWJsZUNvbHVtbkNvbnRhaW5lcixcbiAgZmlsdGVyOiBzdHJpbmdcbikgPT4ge1xuICBmaWx0ZXIgPSBmaWx0ZXIudG9VcHBlckNhc2UoKTtcbiAgcmV0dXJuIGRhdGEuZmlsdGVyKChyb3cpID0+XG4gICAgT2JqZWN0LmVudHJpZXMoY29sdW1ucykuc29tZSgoY29sdW1uRW50cnkpID0+IHtcbiAgICAgIGNvbnN0IFtrZXksIGNvbHVtbl0gPSBjb2x1bW5FbnRyeTtcbiAgICAgIGlmIChjb2x1bW4uZmlsdGVyYWJsZSkge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgU3RyaW5nKFxuICAgICAgICAgICAgY29sdW1uLmZpbHRlcktleVxuICAgICAgICAgICAgICA/IHJvd1tjb2x1bW4udmFsdWVDb2x1bW4gfHwga2V5XVtjb2x1bW4uZmlsdGVyS2V5XVxuICAgICAgICAgICAgICA6IHJvd1tjb2x1bW4udmFsdWVDb2x1bW4gfHwga2V5XVxuICAgICAgICAgIClcbiAgICAgICAgICAgIC50b1VwcGVyQ2FzZSgpXG4gICAgICAgICAgICAuaW5jbHVkZXMoZmlsdGVyKVxuICAgICAgICApIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pXG4gICk7XG59O1xuXG5jb25zdCBzb3J0RGF0YSA9IChcbiAgZGF0YTogRGF0YVRhYmxlUm93RGF0YVtdLFxuICBjb2x1bW46IENsb25lZERhdGFUYWJsZUNvbHVtbkRhdGEsXG4gIGRpcmVjdGlvbjogU29ydGluZ0RpcmVjdGlvbixcbiAgc29ydENvbHVtbjogc3RyaW5nXG4pID0+XG4gIGRhdGEuc29ydCgoYSwgYikgPT4ge1xuICAgIGxldCBzb3J0ID0gMTtcbiAgICBpZiAoZGlyZWN0aW9uID09PSBcImRlc2NcIikge1xuICAgICAgc29ydCA9IC0xO1xuICAgIH1cblxuICAgIGxldCB2YWxBID0gY29sdW1uLmZpbHRlcktleVxuICAgICAgPyBhW2NvbHVtbi52YWx1ZUNvbHVtbiB8fCBzb3J0Q29sdW1uXVtjb2x1bW4uZmlsdGVyS2V5XVxuICAgICAgOiBhW2NvbHVtbi52YWx1ZUNvbHVtbiB8fCBzb3J0Q29sdW1uXTtcblxuICAgIGxldCB2YWxCID0gY29sdW1uLmZpbHRlcktleVxuICAgICAgPyBiW2NvbHVtbi52YWx1ZUNvbHVtbiB8fCBzb3J0Q29sdW1uXVtjb2x1bW4uZmlsdGVyS2V5XVxuICAgICAgOiBiW2NvbHVtbi52YWx1ZUNvbHVtbiB8fCBzb3J0Q29sdW1uXTtcblxuICAgIGlmICh0eXBlb2YgdmFsQSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgdmFsQSA9IHZhbEEudG9VcHBlckNhc2UoKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB2YWxCID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YWxCID0gdmFsQi50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIC8vIEVuc3VyZSBcInVuZGVmaW5lZFwiIGlzIGFsd2F5cyBzb3J0ZWQgdG8gdGhlIGJvdHRvbVxuICAgIGlmICh2YWxBID09PSB1bmRlZmluZWQgJiYgdmFsQiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHZhbEIgPT09IHVuZGVmaW5lZCAmJiB2YWxBICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG5cbiAgICBpZiAodmFsQSA8IHZhbEIpIHtcbiAgICAgIHJldHVybiBzb3J0ICogLTE7XG4gICAgfVxuICAgIGlmICh2YWxBID4gdmFsQikge1xuICAgICAgcmV0dXJuIHNvcnQgKiAxO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbiAgfSk7XG5cbmNvbnN0IGFwaSA9IHtcbiAgZmlsdGVyRGF0YSxcbiAgc29ydERhdGEsXG59O1xuXG5leHBvcnQgdHlwZSBBcGkgPSB0eXBlb2YgYXBpO1xuXG5leHBvc2UoYXBpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/data-table/sort_filter_worker.ts\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = function() {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_comlink_dist_esm_comlink_mjs","vendors-node_modules_proxy-polyfill_src_index_js"], function() { return __webpack_require__("./src/components/data-table/sort_filter_worker.ts"); })
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	!function() {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = function(chunkId) {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce(function(promises, key) {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	!function() {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = function(chunkId) {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".chunk.js";
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "/frontend_es5/";
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_components_data-table_sort_filter_worker_ts-_58841": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = function(data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			while(chunkIds.length)
/******/ 				installedChunks[chunkIds.pop()] = 1;
/******/ 			parentChunkLoadingFunction(data);
/******/ 		};
/******/ 		__webpack_require__.f.i = function(chunkId, promises) {
/******/ 			// "1" is the signal for "already loaded"
/******/ 			if(!installedChunks[chunkId]) {
/******/ 				if(true) { // all chunks have JS
/******/ 					importScripts(__webpack_require__.p + __webpack_require__.u(chunkId));
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = installChunk;
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	!function() {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = function() {
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e("vendors-node_modules_comlink_dist_esm_comlink_mjs"),
/******/ 				__webpack_require__.e("vendors-node_modules_proxy-polyfill_src_index_js")
/******/ 			]).then(next);
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;