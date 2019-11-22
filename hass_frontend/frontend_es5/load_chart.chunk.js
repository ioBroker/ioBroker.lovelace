(self["webpackJsonp"] = self["webpackJsonp"] || []).push([["load_chart"],{

/***/ "./src/resources/ha-chart-scripts.js":
/*!*******************************************!*\
  !*** ./src/resources/ha-chart-scripts.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! chart.js */ "./node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var chartjs_chart_timeline__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! chartjs-chart-timeline */ "./node_modules/chartjs-chart-timeline/src/timeline.js");

 // This function add a new interaction mode to Chart.js that
// returns one point for every dataset.

chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.Interaction.modes.neareach = function (chart, e, options) {
  var getRange = {
    x: function x(a, b) {
      return Math.abs(a.x - b.x);
    },
    y: function y(a, b) {
      return Math.abs(a.y - b.y);
    },
    // eslint-disable-next-line no-restricted-properties
    xy: function xy(a, b) {
      return Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2);
    }
  };
  var getRangeMax = {
    x: function x(r) {
      return r;
    },
    y: function y(r) {
      return r;
    },
    xy: function xy(r) {
      return r * r;
    }
  };
  var position;

  if (e["native"]) {
    position = {
      x: e.x,
      y: e.y
    };
  } else {
    position = chart_js__WEBPACK_IMPORTED_MODULE_0___default.a.helpers.getRelativePosition(e, chart);
  }

  var elements = [];
  var elementsRange = [];
  var datasets = chart.data.datasets;
  var meta;
  options.axis = options.axis || "xy";
  var rangeFunc = getRange[options.axis];
  var rangeMaxFunc = getRangeMax[options.axis];

  for (var i = 0, ilen = datasets.length; i < ilen; ++i) {
    if (!chart.isDatasetVisible(i)) {
      continue;
    }

    meta = chart.getDatasetMeta(i);

    for (var j = 0, jlen = meta.data.length; j < jlen; ++j) {
      var element = meta.data[j];

      if (!element._view.skip) {
        var vm = element._view;
        var range = rangeFunc(vm, position);
        var oldRange = elementsRange[i];

        if (range < rangeMaxFunc(vm.radius + vm.hitRadius)) {
          if (oldRange === undefined || oldRange > range) {
            elementsRange[i] = range;
            elements[i] = element;
          }
        }
      }
    }
  }

  var ret = elements.filter(function (n) {
    return n !== undefined;
  });
  return ret;
};

/* harmony default export */ __webpack_exports__["default"] = (chart_js__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZF9jaGFydC5jaHVuay5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvaGEtY2hhcnQtc2NyaXB0cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2hhcnQgZnJvbSBcImNoYXJ0LmpzXCI7XG5pbXBvcnQgXCJjaGFydGpzLWNoYXJ0LXRpbWVsaW5lXCI7XG5cbi8vIFRoaXMgZnVuY3Rpb24gYWRkIGEgbmV3IGludGVyYWN0aW9uIG1vZGUgdG8gQ2hhcnQuanMgdGhhdFxuLy8gcmV0dXJucyBvbmUgcG9pbnQgZm9yIGV2ZXJ5IGRhdGFzZXQuXG5DaGFydC5JbnRlcmFjdGlvbi5tb2Rlcy5uZWFyZWFjaCA9IGZ1bmN0aW9uKGNoYXJ0LCBlLCBvcHRpb25zKSB7XG4gIGNvbnN0IGdldFJhbmdlID0ge1xuICAgIHg6IChhLCBiKSA9PiBNYXRoLmFicyhhLnggLSBiLngpLFxuICAgIHk6IChhLCBiKSA9PiBNYXRoLmFicyhhLnkgLSBiLnkpLFxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXByb3BlcnRpZXNcbiAgICB4eTogKGEsIGIpID0+IE1hdGgucG93KGEueCAtIGIueCwgMikgKyBNYXRoLnBvdyhhLnkgLSBiLnksIDIpLFxuICB9O1xuICBjb25zdCBnZXRSYW5nZU1heCA9IHtcbiAgICB4OiAocikgPT4gcixcbiAgICB5OiAocikgPT4gcixcbiAgICB4eTogKHIpID0+IHIgKiByLFxuICB9O1xuICBsZXQgcG9zaXRpb247XG4gIGlmIChlLm5hdGl2ZSkge1xuICAgIHBvc2l0aW9uID0ge1xuICAgICAgeDogZS54LFxuICAgICAgeTogZS55LFxuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcG9zaXRpb24gPSBDaGFydC5oZWxwZXJzLmdldFJlbGF0aXZlUG9zaXRpb24oZSwgY2hhcnQpO1xuICB9XG4gIGNvbnN0IGVsZW1lbnRzID0gW107XG4gIGNvbnN0IGVsZW1lbnRzUmFuZ2UgPSBbXTtcbiAgY29uc3QgZGF0YXNldHMgPSBjaGFydC5kYXRhLmRhdGFzZXRzO1xuICBsZXQgbWV0YTtcbiAgb3B0aW9ucy5heGlzID0gb3B0aW9ucy5heGlzIHx8IFwieHlcIjtcbiAgY29uc3QgcmFuZ2VGdW5jID0gZ2V0UmFuZ2Vbb3B0aW9ucy5heGlzXTtcbiAgY29uc3QgcmFuZ2VNYXhGdW5jID0gZ2V0UmFuZ2VNYXhbb3B0aW9ucy5heGlzXTtcblxuICBmb3IgKGxldCBpID0gMCwgaWxlbiA9IGRhdGFzZXRzLmxlbmd0aDsgaSA8IGlsZW47ICsraSkge1xuICAgIGlmICghY2hhcnQuaXNEYXRhc2V0VmlzaWJsZShpKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgbWV0YSA9IGNoYXJ0LmdldERhdGFzZXRNZXRhKGkpO1xuICAgIGZvciAobGV0IGogPSAwLCBqbGVuID0gbWV0YS5kYXRhLmxlbmd0aDsgaiA8IGpsZW47ICsraikge1xuICAgICAgY29uc3QgZWxlbWVudCA9IG1ldGEuZGF0YVtqXTtcbiAgICAgIGlmICghZWxlbWVudC5fdmlldy5za2lwKSB7XG4gICAgICAgIGNvbnN0IHZtID0gZWxlbWVudC5fdmlldztcbiAgICAgICAgY29uc3QgcmFuZ2UgPSByYW5nZUZ1bmModm0sIHBvc2l0aW9uKTtcbiAgICAgICAgY29uc3Qgb2xkUmFuZ2UgPSBlbGVtZW50c1JhbmdlW2ldO1xuICAgICAgICBpZiAocmFuZ2UgPCByYW5nZU1heEZ1bmModm0ucmFkaXVzICsgdm0uaGl0UmFkaXVzKSkge1xuICAgICAgICAgIGlmIChvbGRSYW5nZSA9PT0gdW5kZWZpbmVkIHx8IG9sZFJhbmdlID4gcmFuZ2UpIHtcbiAgICAgICAgICAgIGVsZW1lbnRzUmFuZ2VbaV0gPSByYW5nZTtcbiAgICAgICAgICAgIGVsZW1lbnRzW2ldID0gZWxlbWVudDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgY29uc3QgcmV0ID0gZWxlbWVudHMuZmlsdGVyKChuKSA9PiBuICE9PSB1bmRlZmluZWQpO1xuICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ2hhcnQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBSkE7QUFNQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=