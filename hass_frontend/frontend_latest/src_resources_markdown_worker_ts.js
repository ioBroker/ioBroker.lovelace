/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/proxy-polyfill/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/proxy-polyfill/src/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* empty file that we alias some files to that we don't want to include */\n\n // for Babel to treat as a module//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvcHJveHktcG9seWZpbGwvc3JjL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7QUFBQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3V0aWwvZW1wdHkuanM/MWFjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbXB0eSBmaWxlIHRoYXQgd2UgYWxpYXMgc29tZSBmaWxlcyB0byB0aGF0IHdlIGRvbid0IHdhbnQgdG8gaW5jbHVkZSAqL1xuXG5leHBvcnQge307IC8vIGZvciBCYWJlbCB0byB0cmVhdCBhcyBhIG1vZHVsZVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/proxy-polyfill/src/index.js\n");

/***/ }),

/***/ "./src/resources/markdown_worker.ts":
/*!******************************************!*\
  !*** ./src/resources/markdown_worker.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! proxy-polyfill */ \"./node_modules/proxy-polyfill/src/index.js\");\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ \"./node_modules/xss/lib/index.js\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);\n// To use comlink under ES5\n\n\n\n\nlet whiteListNormal;\nlet whiteListSvg;\n\n// Override the default `onTagAttr` behavior to only render\n// our markdown checkboxes.\n// Returning undefined causes the default measure to be taken\n// in the xss library.\nconst onTagAttr = (tag, name, value) => {\n  if (tag === \"input\") {\n    if (name === \"type\" && value === \"checkbox\" || name === \"checked\" || name === \"disabled\") {\n      return undefined;\n    }\n    return \"\";\n  }\n  return undefined;\n};\nconst renderMarkdown = (content, markedOptions, hassOptions = {}) => {\n  if (!whiteListNormal) {\n    whiteListNormal = {\n      ...(0,xss__WEBPACK_IMPORTED_MODULE_2__.getDefaultWhiteList)(),\n      input: [\"type\", \"disabled\", \"checked\"],\n      \"ha-icon\": [\"icon\"],\n      \"ha-svg-icon\": [\"path\"],\n      \"ha-alert\": [\"alert-type\", \"title\"]\n    };\n  }\n  let whiteList;\n  if (hassOptions.allowSvg) {\n    if (!whiteListSvg) {\n      whiteListSvg = {\n        ...whiteListNormal,\n        svg: [\"xmlns\", \"height\", \"width\"],\n        path: [\"transform\", \"stroke\", \"d\"],\n        img: [\"src\"]\n      };\n    }\n    whiteList = whiteListSvg;\n  } else {\n    whiteList = whiteListNormal;\n  }\n  return (0,xss__WEBPACK_IMPORTED_MODULE_2__.filterXSS)((0,marked__WEBPACK_IMPORTED_MODULE_1__.marked)(content, markedOptions), {\n    whiteList,\n    onTagAttr\n  });\n};\nconst api = {\n  renderMarkdown\n};\n(0,comlink__WEBPACK_IMPORTED_MODULE_3__.expose)(api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXIudHM/NDc1NSJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUbyB1c2UgY29tbGluayB1bmRlciBFUzVcbmltcG9ydCBcInByb3h5LXBvbHlmaWxsXCI7XG5pbXBvcnQgeyBleHBvc2UgfSBmcm9tIFwiY29tbGlua1wiO1xuaW1wb3J0IHsgbWFya2VkIH0gZnJvbSBcIm1hcmtlZFwiO1xuaW1wb3J0IHsgZmlsdGVyWFNTLCBnZXREZWZhdWx0V2hpdGVMaXN0LCBJV2hpdGVMaXN0IH0gZnJvbSBcInhzc1wiO1xuXG5sZXQgd2hpdGVMaXN0Tm9ybWFsOiBJV2hpdGVMaXN0IHwgdW5kZWZpbmVkO1xubGV0IHdoaXRlTGlzdFN2ZzogSVdoaXRlTGlzdCB8IHVuZGVmaW5lZDtcblxuLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYG9uVGFnQXR0cmAgYmVoYXZpb3IgdG8gb25seSByZW5kZXJcbi8vIG91ciBtYXJrZG93biBjaGVja2JveGVzLlxuLy8gUmV0dXJuaW5nIHVuZGVmaW5lZCBjYXVzZXMgdGhlIGRlZmF1bHQgbWVhc3VyZSB0byBiZSB0YWtlblxuLy8gaW4gdGhlIHhzcyBsaWJyYXJ5LlxuY29uc3Qgb25UYWdBdHRyID0gKFxuICB0YWc6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICB2YWx1ZTogc3RyaW5nXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAodGFnID09PSBcImlucHV0XCIpIHtcbiAgICBpZiAoXG4gICAgICAobmFtZSA9PT0gXCJ0eXBlXCIgJiYgdmFsdWUgPT09IFwiY2hlY2tib3hcIikgfHxcbiAgICAgIG5hbWUgPT09IFwiY2hlY2tlZFwiIHx8XG4gICAgICBuYW1lID09PSBcImRpc2FibGVkXCJcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCByZW5kZXJNYXJrZG93biA9IChcbiAgY29udGVudDogc3RyaW5nLFxuICBtYXJrZWRPcHRpb25zOiBtYXJrZWQuTWFya2VkT3B0aW9ucyxcbiAgaGFzc09wdGlvbnM6IHtcbiAgICAvLyBEbyBub3QgYWxsb3cgU1ZHIG9uIHVudHJ1c3RlZCBjb250ZW50LCBpdCBhbGxvd3MgWFNTLlxuICAgIGFsbG93U3ZnPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcgPT4ge1xuICBpZiAoIXdoaXRlTGlzdE5vcm1hbCkge1xuICAgIHdoaXRlTGlzdE5vcm1hbCA9IHtcbiAgICAgIC4uLmdldERlZmF1bHRXaGl0ZUxpc3QoKSxcbiAgICAgIGlucHV0OiBbXCJ0eXBlXCIsIFwiZGlzYWJsZWRcIiwgXCJjaGVja2VkXCJdLFxuICAgICAgXCJoYS1pY29uXCI6IFtcImljb25cIl0sXG4gICAgICBcImhhLXN2Zy1pY29uXCI6IFtcInBhdGhcIl0sXG4gICAgICBcImhhLWFsZXJ0XCI6IFtcImFsZXJ0LXR5cGVcIiwgXCJ0aXRsZVwiXSxcbiAgICB9O1xuICB9XG5cbiAgbGV0IHdoaXRlTGlzdDogSVdoaXRlTGlzdCB8IHVuZGVmaW5lZDtcblxuICBpZiAoaGFzc09wdGlvbnMuYWxsb3dTdmcpIHtcbiAgICBpZiAoIXdoaXRlTGlzdFN2Zykge1xuICAgICAgd2hpdGVMaXN0U3ZnID0ge1xuICAgICAgICAuLi53aGl0ZUxpc3ROb3JtYWwsXG4gICAgICAgIHN2ZzogW1wieG1sbnNcIiwgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXSxcbiAgICAgICAgcGF0aDogW1widHJhbnNmb3JtXCIsIFwic3Ryb2tlXCIsIFwiZFwiXSxcbiAgICAgICAgaW1nOiBbXCJzcmNcIl0sXG4gICAgICB9O1xuICAgIH1cbiAgICB3aGl0ZUxpc3QgPSB3aGl0ZUxpc3RTdmc7XG4gIH0gZWxzZSB7XG4gICAgd2hpdGVMaXN0ID0gd2hpdGVMaXN0Tm9ybWFsO1xuICB9XG5cbiAgcmV0dXJuIGZpbHRlclhTUyhtYXJrZWQoY29udGVudCwgbWFya2VkT3B0aW9ucyksIHtcbiAgICB3aGl0ZUxpc3QsXG4gICAgb25UYWdBdHRyLFxuICB9KTtcbn07XG5cbmNvbnN0IGFwaSA9IHtcbiAgcmVuZGVyTWFya2Rvd24sXG59O1xuXG5leHBvcnQgdHlwZSBBcGkgPSB0eXBlb2YgYXBpO1xuXG5leHBvc2UoYXBpKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/resources/markdown_worker.ts\n");

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
/******/ 	__webpack_require__.x = () => {
/******/ 		// Load entry module and return exports
/******/ 		// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_comlink_dist_esm_comlink_mjs","vendors-node_modules_xss_lib_index_js-node_modules_marked_lib_marked_esm_js"], () => (__webpack_require__("./src/resources/markdown_worker.ts")))
/******/ 		__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 		return __webpack_exports__;
/******/ 	};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks and sibling chunks for the entrypoint
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/frontend_latest/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/importScripts chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded chunks
/******/ 		// "1" means "already loaded"
/******/ 		var installedChunks = {
/******/ 			"src_resources_markdown_worker_ts": 1
/******/ 		};
/******/ 		
/******/ 		// importScripts chunk loading
/******/ 		var installChunk = (data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
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
/******/ 		__webpack_require__.f.i = (chunkId, promises) => {
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
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/startup chunk dependencies */
/******/ 	(() => {
/******/ 		var next = __webpack_require__.x;
/******/ 		__webpack_require__.x = () => {
/******/ 			return Promise.all([
/******/ 				__webpack_require__.e("vendors-node_modules_comlink_dist_esm_comlink_mjs"),
/******/ 				__webpack_require__.e("vendors-node_modules_xss_lib_index_js-node_modules_marked_lib_marked_esm_js")
/******/ 			]).then(next);
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// run startup
/******/ 	var __webpack_exports__ = __webpack_require__.x();
/******/ 	
/******/ })()
;