/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/proxy-polyfill/src/index.js":
/*!**************************************************!*\
  !*** ./node_modules/proxy-polyfill/src/index.js ***!
  \**************************************************/
/***/ (() => {

eval("/* empty file that we alias some files to that we don't want to include *///# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLWFzc2lzdGFudC1mcm9udGVuZC8uL3NyYy91dGlsL2VtcHR5LmpzPzVlMjkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlbXB0eSBmaWxlIHRoYXQgd2UgYWxpYXMgc29tZSBmaWxlcyB0byB0aGF0IHdlIGRvbid0IHdhbnQgdG8gaW5jbHVkZSAqL1xuIl0sImZpbGUiOiIuL25vZGVfbW9kdWxlcy9wcm94eS1wb2x5ZmlsbC9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/proxy-polyfill/src/index.js\n");

/***/ }),

/***/ "./src/resources/markdown_worker.ts":
/*!******************************************!*\
  !*** ./src/resources/markdown_worker.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var comlink__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! comlink */ \"./node_modules/comlink/dist/esm/comlink.mjs\");\n/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ \"./node_modules/marked/lib/marked.esm.js\");\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proxy-polyfill */ \"./node_modules/proxy-polyfill/src/index.js\");\n/* harmony import */ var proxy_polyfill__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proxy_polyfill__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! xss */ \"./node_modules/xss/lib/index.js\");\n/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_2__);\n// To use comlink under ES5\n\n\n\n\nlet whiteListNormal;\nlet whiteListSvg; // Override the default `onTagAttr` behavior to only render\n// our markdown checkboxes.\n// Returning undefined causes the default measure to be taken\n// in the xss library.\n\nconst onTagAttr = (tag, name, value) => {\n  if (tag === \"input\") {\n    if (name === \"type\" && value === \"checkbox\" || name === \"checked\" || name === \"disabled\") {\n      return undefined;\n    }\n\n    return \"\";\n  }\n\n  return undefined;\n};\n\nconst renderMarkdown = (content, markedOptions, hassOptions = {}) => {\n  if (!whiteListNormal) {\n    whiteListNormal = { ...(0,xss__WEBPACK_IMPORTED_MODULE_2__.getDefaultWhiteList)(),\n      input: [\"type\", \"disabled\", \"checked\"],\n      \"ha-icon\": [\"icon\"],\n      \"ha-svg-icon\": [\"path\"],\n      \"ha-alert\": [\"alert-type\", \"title\"]\n    };\n  }\n\n  let whiteList;\n\n  if (hassOptions.allowSvg) {\n    if (!whiteListSvg) {\n      whiteListSvg = { ...whiteListNormal,\n        svg: [\"xmlns\", \"height\", \"width\"],\n        path: [\"transform\", \"stroke\", \"d\"],\n        img: [\"src\"]\n      };\n    }\n\n    whiteList = whiteListSvg;\n  } else {\n    whiteList = whiteListNormal;\n  }\n\n  return (0,xss__WEBPACK_IMPORTED_MODULE_2__.filterXSS)((0,marked__WEBPACK_IMPORTED_MODULE_0__.marked)(content, markedOptions), {\n    whiteList,\n    onTagAttr\n  });\n};\n\nconst api = {\n  renderMarkdown\n};\n(0,comlink__WEBPACK_IMPORTED_MODULE_3__.expose)(api);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVzb3VyY2VzL21hcmtkb3duX3dvcmtlci50cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7O0FBQ0E7QUFLQTtBQUNBO0FBS0E7QUFDQTs7QUFDQTtBQUNBOztBQUNBO0FBQ0E7O0FBRUE7QUFRQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFMQTtBQU9BOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUpBO0FBTUE7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQTs7QUFFQTtBQUNBO0FBREE7QUFNQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXIudHM/Nzk3NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUbyB1c2UgY29tbGluayB1bmRlciBFUzVcbmltcG9ydCB7IGV4cG9zZSB9IGZyb20gXCJjb21saW5rXCI7XG5pbXBvcnQgeyBtYXJrZWQgfSBmcm9tIFwibWFya2VkXCI7XG5pbXBvcnQgXCJwcm94eS1wb2x5ZmlsbFwiO1xuaW1wb3J0IHsgZmlsdGVyWFNTLCBnZXREZWZhdWx0V2hpdGVMaXN0IH0gZnJvbSBcInhzc1wiO1xuXG5pbnRlcmZhY2UgV2hpdGVMaXN0IHtcbiAgW3RhZzogc3RyaW5nXTogc3RyaW5nW107XG59XG5cbmxldCB3aGl0ZUxpc3ROb3JtYWw6IFdoaXRlTGlzdCB8IHVuZGVmaW5lZDtcbmxldCB3aGl0ZUxpc3RTdmc6IFdoaXRlTGlzdCB8IHVuZGVmaW5lZDtcblxuLy8gT3ZlcnJpZGUgdGhlIGRlZmF1bHQgYG9uVGFnQXR0cmAgYmVoYXZpb3IgdG8gb25seSByZW5kZXJcbi8vIG91ciBtYXJrZG93biBjaGVja2JveGVzLlxuLy8gUmV0dXJuaW5nIHVuZGVmaW5lZCBjYXVzZXMgdGhlIGRlZmF1bHQgbWVhc3VyZSB0byBiZSB0YWtlblxuLy8gaW4gdGhlIHhzcyBsaWJyYXJ5LlxuY29uc3Qgb25UYWdBdHRyID0gKFxuICB0YWc6IHN0cmluZyxcbiAgbmFtZTogc3RyaW5nLFxuICB2YWx1ZTogc3RyaW5nXG4pOiBzdHJpbmcgfCB1bmRlZmluZWQgPT4ge1xuICBpZiAodGFnID09PSBcImlucHV0XCIpIHtcbiAgICBpZiAoXG4gICAgICAobmFtZSA9PT0gXCJ0eXBlXCIgJiYgdmFsdWUgPT09IFwiY2hlY2tib3hcIikgfHxcbiAgICAgIG5hbWUgPT09IFwiY2hlY2tlZFwiIHx8XG4gICAgICBuYW1lID09PSBcImRpc2FibGVkXCJcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJldHVybiB1bmRlZmluZWQ7XG59O1xuXG5jb25zdCByZW5kZXJNYXJrZG93biA9IChcbiAgY29udGVudDogc3RyaW5nLFxuICBtYXJrZWRPcHRpb25zOiBtYXJrZWQuTWFya2VkT3B0aW9ucyxcbiAgaGFzc09wdGlvbnM6IHtcbiAgICAvLyBEbyBub3QgYWxsb3cgU1ZHIG9uIHVudHJ1c3RlZCBjb250ZW50LCBpdCBhbGxvd3MgWFNTLlxuICAgIGFsbG93U3ZnPzogYm9vbGVhbjtcbiAgfSA9IHt9XG4pOiBzdHJpbmcgPT4ge1xuICBpZiAoIXdoaXRlTGlzdE5vcm1hbCkge1xuICAgIHdoaXRlTGlzdE5vcm1hbCA9IHtcbiAgICAgIC4uLihnZXREZWZhdWx0V2hpdGVMaXN0KCkgYXMgV2hpdGVMaXN0KSxcbiAgICAgIGlucHV0OiBbXCJ0eXBlXCIsIFwiZGlzYWJsZWRcIiwgXCJjaGVja2VkXCJdLFxuICAgICAgXCJoYS1pY29uXCI6IFtcImljb25cIl0sXG4gICAgICBcImhhLXN2Zy1pY29uXCI6IFtcInBhdGhcIl0sXG4gICAgICBcImhhLWFsZXJ0XCI6IFtcImFsZXJ0LXR5cGVcIiwgXCJ0aXRsZVwiXSxcbiAgICB9O1xuICB9XG5cbiAgbGV0IHdoaXRlTGlzdDogV2hpdGVMaXN0IHwgdW5kZWZpbmVkO1xuXG4gIGlmIChoYXNzT3B0aW9ucy5hbGxvd1N2Zykge1xuICAgIGlmICghd2hpdGVMaXN0U3ZnKSB7XG4gICAgICB3aGl0ZUxpc3RTdmcgPSB7XG4gICAgICAgIC4uLndoaXRlTGlzdE5vcm1hbCxcbiAgICAgICAgc3ZnOiBbXCJ4bWxuc1wiLCBcImhlaWdodFwiLCBcIndpZHRoXCJdLFxuICAgICAgICBwYXRoOiBbXCJ0cmFuc2Zvcm1cIiwgXCJzdHJva2VcIiwgXCJkXCJdLFxuICAgICAgICBpbWc6IFtcInNyY1wiXSxcbiAgICAgIH07XG4gICAgfVxuICAgIHdoaXRlTGlzdCA9IHdoaXRlTGlzdFN2ZztcbiAgfSBlbHNlIHtcbiAgICB3aGl0ZUxpc3QgPSB3aGl0ZUxpc3ROb3JtYWw7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyWFNTKG1hcmtlZChjb250ZW50LCBtYXJrZWRPcHRpb25zKSwge1xuICAgIHdoaXRlTGlzdCxcbiAgICBvblRhZ0F0dHIsXG4gIH0pO1xufTtcblxuY29uc3QgYXBpID0ge1xuICByZW5kZXJNYXJrZG93bixcbn07XG5cbmV4cG9ydCB0eXBlIEFwaSA9IHR5cGVvZiBhcGk7XG5cbmV4cG9zZShhcGkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/resources/markdown_worker.ts\n");

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
/******/ 		var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_xss_lib_index_js-node_modules_comlink_dist_esm_comlink_mjs-node_modules_-577d12"], () => (__webpack_require__("./src/resources/markdown_worker.ts")))
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
/******/ 			return "" + chunkId + ".chunk.js";
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
/******/ 			return __webpack_require__.e("vendors-node_modules_xss_lib_index_js-node_modules_comlink_dist_esm_comlink_mjs-node_modules_-577d12").then(next);
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