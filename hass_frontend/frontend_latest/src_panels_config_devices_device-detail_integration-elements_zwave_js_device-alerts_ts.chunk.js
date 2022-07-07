"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome_assistant_frontend"] = self["webpackChunkhome_assistant_frontend"] || []).push([["src_panels_config_devices_device-detail_integration-elements_zwave_js_device-alerts_ts"],{

/***/ "./src/panels/config/devices/device-detail/integration-elements/zwave_js/device-alerts.ts":
/*!************************************************************************************************!*\
  !*** ./src/panels/config/devices/device-detail/integration-elements/zwave_js/device-alerts.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getZwaveDeviceAlerts\": () => (/* binding */ getZwaveDeviceAlerts)\n/* harmony export */ });\n/* harmony import */ var _data_zwave_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../data/zwave_js */ \"./src/data/zwave_js.ts\");\n\nconst getZwaveDeviceAlerts = async (hass, device) => {\n  var _nodeComments$comment;\n\n  const nodeComments = await (0,_data_zwave_js__WEBPACK_IMPORTED_MODULE_0__.fetchZwaveNodeComments)(hass, device.id);\n\n  if (!(nodeComments !== null && nodeComments !== void 0 && (_nodeComments$comment = nodeComments.comments) !== null && _nodeComments$comment !== void 0 && _nodeComments$comment.length)) {\n    return [];\n  }\n\n  return nodeComments.comments.map(comment => ({\n    level: comment.level,\n    text: comment.text\n  }));\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFuZWxzL2NvbmZpZy9kZXZpY2VzL2RldmljZS1kZXRhaWwvaW50ZWdyYXRpb24tZWxlbWVudHMvendhdmVfanMvZGV2aWNlLWFsZXJ0cy50cy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUNBO0FBSUE7QUFHQTs7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBRkE7QUFJQSIsInNvdXJjZXMiOlsid2VicGFjazovL2hvbWUtYXNzaXN0YW50LWZyb250ZW5kLy4vc3JjL3BhbmVscy9jb25maWcvZGV2aWNlcy9kZXZpY2UtZGV0YWlsL2ludGVncmF0aW9uLWVsZW1lbnRzL3p3YXZlX2pzL2RldmljZS1hbGVydHMudHM/NzBmMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEZXZpY2VSZWdpc3RyeUVudHJ5IH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL2RhdGEvZGV2aWNlX3JlZ2lzdHJ5XCI7XG5pbXBvcnQgeyBmZXRjaFp3YXZlTm9kZUNvbW1lbnRzIH0gZnJvbSBcIi4uLy4uLy4uLy4uLy4uLy4uL2RhdGEvendhdmVfanNcIjtcbmltcG9ydCB7IEhvbWVBc3Npc3RhbnQgfSBmcm9tIFwiLi4vLi4vLi4vLi4vLi4vLi4vdHlwZXNcIjtcbmltcG9ydCB7IERldmljZUFsZXJ0IH0gZnJvbSBcIi4uLy4uLy4uL2hhLWNvbmZpZy1kZXZpY2UtcGFnZVwiO1xuXG5leHBvcnQgY29uc3QgZ2V0WndhdmVEZXZpY2VBbGVydHMgPSBhc3luYyAoXG4gIGhhc3M6IEhvbWVBc3Npc3RhbnQsXG4gIGRldmljZTogRGV2aWNlUmVnaXN0cnlFbnRyeVxuKTogUHJvbWlzZTxEZXZpY2VBbGVydFtdPiA9PiB7XG4gIGNvbnN0IG5vZGVDb21tZW50cyA9IGF3YWl0IGZldGNoWndhdmVOb2RlQ29tbWVudHMoaGFzcywgZGV2aWNlLmlkKTtcblxuICBpZiAoIW5vZGVDb21tZW50cz8uY29tbWVudHM/Lmxlbmd0aCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuXG4gIHJldHVybiBub2RlQ29tbWVudHMuY29tbWVudHMubWFwKChjb21tZW50KSA9PiAoe1xuICAgIGxldmVsOiBjb21tZW50LmxldmVsLFxuICAgIHRleHQ6IGNvbW1lbnQudGV4dCxcbiAgfSkpO1xufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/panels/config/devices/device-detail/integration-elements/zwave_js/device-alerts.ts\n");

/***/ })

}]);