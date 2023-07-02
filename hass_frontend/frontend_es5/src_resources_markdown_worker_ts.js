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

/***/ "./src/resources/markdown_worker.ts":
/*!******************************************!*\
  !*** ./src/resources/markdown_worker.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-polyfill */ \"./node_modules/proxy-polyfill/src/index.js\");\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(proxy_polyfill__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ \"./node_modules/xss/lib/index.js\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);\n// To use comlink under ES5\n\n\n\n\nvar whiteListNormal;\nvar whiteListSvg;\n\n// Override the default `onTagAttr` behavior to only render\n// our markdown checkboxes.\n// Returning undefined causes the default measure to be taken\n// in the xss library.\nvar onTagAttr = function onTagAttr(tag, name, value) {\n  if (tag === \"input\") {\n    if (name === \"type\" && value === \"checkbox\" || name === \"checked\" || name === \"disabled\") {\n      return undefined;\n    }\n    return \"\";\n  }\n  return undefined;\n};\nvar renderMarkdown = function renderMarkdown(content, markedOptions) {\n  var hassOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n  if (!whiteListNormal) {\n    whiteListNormal = Object.assign(Object.assign({}, (0,xss__WEBPACK_IMPORTED_MODULE_2__.getDefaultWhiteList)()), {}, {\n      input: [\"type\", \"disabled\", \"checked\"],\n      \"ha-icon\": [\"icon\"],\n      \"ha-svg-icon\": [\"path\"],\n      \"ha-alert\": [\"alert-type\", \"title\"]\n    });\n  }\n  var whiteList;\n  if (hassOptions.allowSvg) {\n    if (!whiteListSvg) {\n      whiteListSvg = Object.assign(Object.assign({}, whiteListNormal), {}, {\n        svg: [\"xmlns\", \"height\", \"width\"],\n        path: [\"transform\", \"stroke\", \"d\"],\n        img: [\"src\"]\n      });\n    }\n    whiteList = whiteListSvg;\n  } else {\n    whiteList = whiteListNormal;\n  }\n  return (0,xss__WEBPACK_IMPORTED_MODULE_2__.filterXSS)((0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(content, markedOptions), {\n    whiteList: whiteList,\n    onTagAttr: onTagAttr\n  });\n};\nvar api = {\n  renderMarkdown: renderMarkdown\n};\n(0,comlink__WEBPACK_IMPORTED_MODULE_3__.expose)(api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU9BO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUlBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS1hc3Npc3RhbnQtZnJvbnRlbmQvLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50cz80NzU1Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRvIHVzZSBjb21saW5rIHVuZGVyIEVTNVxuaW1wb3J0IFwicHJveHktcG9seWZpbGxcIjtcbmltcG9ydCB7IGV4cG9zZSB9IGZyb20gXCJjb21saW5rXCI7XG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XG5pbXBvcnQgeyBmaWx0ZXJYU1MsIGdldERlZmF1bHRXaGl0ZUxpc3QsIElXaGl0ZUxpc3QgfSBmcm9tIFwieHNzXCI7XG5cbmxldCB3aGl0ZUxpc3ROb3JtYWw6IElXaGl0ZUxpc3QgfCB1bmRlZmluZWQ7XG5sZXQgd2hpdGVMaXN0U3ZnOiBJV2hpdGVMaXN0IHwgdW5kZWZpbmVkO1xuXG4vLyBPdmVycmlkZSB0aGUgZGVmYXVsdCBgb25UYWdBdHRyYCBiZWhhdmlvciB0byBvbmx5IHJlbmRlclxuLy8gb3VyIG1hcmtkb3duIGNoZWNrYm94ZXMuXG4vLyBSZXR1cm5pbmcgdW5kZWZpbmVkIGNhdXNlcyB0aGUgZGVmYXVsdCBtZWFzdXJlIHRvIGJlIHRha2VuXG4vLyBpbiB0aGUgeHNzIGxpYnJhcnkuXG5jb25zdCBvblRhZ0F0dHIgPSAoXG4gIHRhZzogc3RyaW5nLFxuICBuYW1lOiBzdHJpbmcsXG4gIHZhbHVlOiBzdHJpbmdcbik6IHN0cmluZyB8IHVuZGVmaW5lZCA9PiB7XG4gIGlmICh0YWcgPT09IFwiaW5wdXRcIikge1xuICAgIGlmIChcbiAgICAgIChuYW1lID09PSBcInR5cGVcIiAmJiB2YWx1ZSA9PT0gXCJjaGVja2JveFwiKSB8fFxuICAgICAgbmFtZSA9PT0gXCJjaGVja2VkXCIgfHxcbiAgICAgIG5hbWUgPT09IFwiZGlzYWJsZWRcIlxuICAgICkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn07XG5cbmNvbnN0IHJlbmRlck1hcmtkb3duID0gKFxuICBjb250ZW50OiBzdHJpbmcsXG4gIG1hcmtlZE9wdGlvbnM6IG1hcmtlZC5NYXJrZWRPcHRpb25zLFxuICBoYXNzT3B0aW9uczoge1xuICAgIC8vIERvIG5vdCBhbGxvdyBTVkcgb24gdW50cnVzdGVkIGNvbnRlbnQsIGl0IGFsbG93cyBYU1MuXG4gICAgYWxsb3dTdmc/OiBib29sZWFuO1xuICB9ID0ge31cbik6IHN0cmluZyA9PiB7XG4gIGlmICghd2hpdGVMaXN0Tm9ybWFsKSB7XG4gICAgd2hpdGVMaXN0Tm9ybWFsID0ge1xuICAgICAgLi4uZ2V0RGVmYXVsdFdoaXRlTGlzdCgpLFxuICAgICAgaW5wdXQ6IFtcInR5cGVcIiwgXCJkaXNhYmxlZFwiLCBcImNoZWNrZWRcIl0sXG4gICAgICBcImhhLWljb25cIjogW1wiaWNvblwiXSxcbiAgICAgIFwiaGEtc3ZnLWljb25cIjogW1wicGF0aFwiXSxcbiAgICAgIFwiaGEtYWxlcnRcIjogW1wiYWxlcnQtdHlwZVwiLCBcInRpdGxlXCJdLFxuICAgIH07XG4gIH1cblxuICBsZXQgd2hpdGVMaXN0OiBJV2hpdGVMaXN0IHwgdW5kZWZpbmVkO1xuXG4gIGlmIChoYXNzT3B0aW9ucy5hbGxvd1N2Zykge1xuICAgIGlmICghd2hpdGVMaXN0U3ZnKSB7XG4gICAgICB3aGl0ZUxpc3RTdmcgPSB7XG4gICAgICAgIC4uLndoaXRlTGlzdE5vcm1hbCxcbiAgICAgICAgc3ZnOiBbXCJ4bWxuc1wiLCBcImhlaWdodFwiLCBcIndpZHRoXCJdLFxuICAgICAgICBwYXRoOiBbXCJ0cmFuc2Zvcm1cIiwgXCJzdHJva2VcIiwgXCJkXCJdLFxuICAgICAgICBpbWc6IFtcInNyY1wiXSxcbiAgICAgIH07XG4gICAgfVxuICAgIHdoaXRlTGlzdCA9IHdoaXRlTGlzdFN2ZztcbiAgfSBlbHNlIHtcbiAgICB3aGl0ZUxpc3QgPSB3aGl0ZUxpc3ROb3JtYWw7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyWFNTKG1hcmtlZChjb250ZW50LCBtYXJrZWRPcHRpb25zKSwge1xuICAgIHdoaXRlTGlzdCxcbiAgICBvblRhZ0F0dHIsXG4gIH0pO1xufTtcblxuY29uc3QgYXBpID0ge1xuICByZW5kZXJNYXJrZG93bixcbn07XG5cbmV4cG9ydCB0eXBlIEFwaSA9IHR5cGVvZiBhcGk7XG5cbmV4cG9zZShhcGkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/resources/markdown_worker.ts\n");

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_comlink_dist_esm_comlink_mjs","vendors-node_modules_proxy-polyfill_src_index_js-node_modules_babel_runtime_helpers_esm_const-96ac4d","vendors-node_modules_xss_lib_index_js-node_modules_marked_lib_marked_esm_js"], function() { return __webpack_require__("./src/resources/markdown_worker.ts"); })
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
/******/ 			return "" + chunkId + ".js";
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
/******/ 			"src_resources_markdown_worker_ts": 1
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
/******/ 			return Promise.all(["vendors-node_modules_comlink_dist_esm_comlink_mjs","vendors-node_modules_proxy-polyfill_src_index_js-node_modules_babel_runtime_helpers_esm_const-96ac4d","vendors-node_modules_xss_lib_index_js-node_modules_marked_lib_marked_esm_js"].map(__webpack_require__.e, __webpack_require__)).then(next);
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