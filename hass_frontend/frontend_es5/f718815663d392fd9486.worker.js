/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/frontend_es5/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/babel-loader/lib/index.js?!./src/components/data-table/sort_filter_worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/memoize-one/dist/memoize-one.esm.js":
/*!**********************************************************!*\
  !*** ./node_modules/memoize-one/dist/memoize-one.esm.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function areInputsEqual(newInputs, lastInputs) {
  if (newInputs.length !== lastInputs.length) {
    return false;
  }

  for (var i = 0; i < newInputs.length; i++) {
    if (newInputs[i] !== lastInputs[i]) {
      return false;
    }
  }

  return true;
}

function index(resultFn, isEqual) {
  if (isEqual === void 0) {
    isEqual = areInputsEqual;
  }

  var lastThis;
  var lastArgs = [];
  var lastResult;
  var calledOnce = false;

  var result = function result() {
    for (var _len = arguments.length, newArgs = new Array(_len), _key = 0; _key < _len; _key++) {
      newArgs[_key] = arguments[_key];
    }

    if (calledOnce && lastThis === this && isEqual(newArgs, lastArgs)) {
      return lastResult;
    }

    lastResult = resultFn.apply(this, newArgs);
    calledOnce = true;
    lastThis = this;
    lastArgs = newArgs;
    return lastResult;
  };

  return result;
}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/babel-loader/lib/index.js?!./src/components/data-table/sort_filter_worker.ts":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/babel-loader/lib??ref--4!./src/components/data-table/sort_filter_worker.ts ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: filterSortData, filterData, sortData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterSortData", function() { return filterSortData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "filterData", function() { return filterData; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sortData", function() { return sortData; });
/* harmony import */ var memoize_one__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! memoize-one */ "./node_modules/memoize-one/dist/memoize-one.esm.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


var filterSortData = Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(function _callee(data, columns, filter, direction, sortColumn) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          if (!sortColumn) {
            _context.next = 11;
            break;
          }

          _context.t1 = _memSortData;
          _context.next = 4;
          return regeneratorRuntime.awrap(_memFilterData(data, columns, filter));

        case 4:
          _context.t2 = _context.sent;
          _context.t3 = columns;
          _context.t4 = direction;
          _context.t5 = sortColumn;
          _context.t0 = (0, _context.t1)(_context.t2, _context.t3, _context.t4, _context.t5);
          _context.next = 12;
          break;

        case 11:
          _context.t0 = _memFilterData(data, columns, filter);

        case 12:
          return _context.abrupt("return", _context.t0);

        case 13:
        case "end":
          return _context.stop();
      }
    }
  });
});

var _memFilterData = Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(function _callee2(data, columns, filter) {
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          if (filter) {
            _context2.next = 2;
            break;
          }

          return _context2.abrupt("return", data);

        case 2:
          return _context2.abrupt("return", filterData(data, columns, filter.toUpperCase()));

        case 3:
        case "end":
          return _context2.stop();
      }
    }
  });
});

var _memSortData = Object(memoize_one__WEBPACK_IMPORTED_MODULE_0__["default"])(function (data, columns, direction, sortColumn) {
  return sortData(data, columns[sortColumn], direction, sortColumn);
});

var filterData = function filterData(data, columns, filter) {
  return data.filter(function (row) {
    return Object.entries(columns).some(function (columnEntry) {
      var _columnEntry = _slicedToArray(columnEntry, 2),
          key = _columnEntry[0],
          column = _columnEntry[1];

      if (column.filterable) {
        if ((column.filterKey ? row[key][column.filterKey] : row[key]).toUpperCase().includes(filter)) {
          return true;
        }
      }

      return false;
    });
  });
};
var sortData = function sortData(data, column, direction, sortColumn) {
  return data.sort(function (a, b) {
    var sort = 1;

    if (direction === "desc") {
      sort = -1;
    }

    var valA = column.filterKey ? a[sortColumn][column.filterKey] : a[sortColumn];
    var valB = column.filterKey ? b[sortColumn][column.filterKey] : b[sortColumn];

    if (typeof valA === "string") {
      valA = valA.toUpperCase();
    }

    if (typeof valB === "string") {
      valB = valB.toUpperCase();
    }

    if (valA < valB) {
      return sort * -1;
    }

    if (valA > valB) {
      return sort * 1;
    }

    return 0;
  });
};
addEventListener('message', function (e) {var ref = e.data;var type = ref.type;var method = ref.method;var id = ref.id;var params = ref.params;var f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () { return f.apply(__webpack_exports__, params); });} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZjcxODgxNTY2M2QzOTJmZDk0ODYud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tZW1vaXplLW9uZS9kaXN0L21lbW9pemUtb25lLmVzbS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29tcG9uZW50cy9kYXRhLXRhYmxlL3NvcnRfZmlsdGVyX3dvcmtlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9mcm9udGVuZF9lczUvXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbm9kZV9tb2R1bGVzL3dvcmtlcml6ZS1sb2FkZXIvZGlzdC9ycGMtd29ya2VyLWxvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzPyEuL3NyYy9jb21wb25lbnRzL2RhdGEtdGFibGUvc29ydF9maWx0ZXJfd29ya2VyLnRzXCIpO1xuIiwiZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld0lucHV0c1tpXSAhPT0gbGFzdElucHV0c1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBpbmRleCAocmVzdWx0Rm4sIGlzRXF1YWwpIHtcbiAgaWYgKGlzRXF1YWwgPT09IHZvaWQgMCkge1xuICAgIGlzRXF1YWwgPSBhcmVJbnB1dHNFcXVhbDtcbiAgfVxuXG4gIHZhciBsYXN0VGhpcztcbiAgdmFyIGxhc3RBcmdzID0gW107XG4gIHZhciBsYXN0UmVzdWx0O1xuICB2YXIgY2FsbGVkT25jZSA9IGZhbHNlO1xuXG4gIHZhciByZXN1bHQgPSBmdW5jdGlvbiByZXN1bHQoKSB7XG4gICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIG5ld0FyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICBuZXdBcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgIH1cblxuICAgIGlmIChjYWxsZWRPbmNlICYmIGxhc3RUaGlzID09PSB0aGlzICYmIGlzRXF1YWwobmV3QXJncywgbGFzdEFyZ3MpKSB7XG4gICAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgICB9XG5cbiAgICBsYXN0UmVzdWx0ID0gcmVzdWx0Rm4uYXBwbHkodGhpcywgbmV3QXJncyk7XG4gICAgY2FsbGVkT25jZSA9IHRydWU7XG4gICAgbGFzdFRoaXMgPSB0aGlzO1xuICAgIGxhc3RBcmdzID0gbmV3QXJncztcbiAgICByZXR1cm4gbGFzdFJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgZGVmYXVsdCBpbmRleDtcbiIsImZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfZSA9IHVuZGVmaW5lZDsgdHJ5IHsgZm9yICh2YXIgX2kgPSBhcnJbU3ltYm9sLml0ZXJhdG9yXSgpLCBfczsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5pbXBvcnQgbWVtb2l6ZU9uZSBmcm9tIFwibWVtb2l6ZS1vbmVcIjtcbmV4cG9ydCB2YXIgZmlsdGVyU29ydERhdGEgPSBtZW1vaXplT25lKGZ1bmN0aW9uIF9jYWxsZWUoZGF0YSwgY29sdW1ucywgZmlsdGVyLCBkaXJlY3Rpb24sIHNvcnRDb2x1bW4pIHtcbiAgcmV0dXJuIHJlZ2VuZXJhdG9yUnVudGltZS5hc3luYyhmdW5jdGlvbiBfY2FsbGVlJChfY29udGV4dCkge1xuICAgIHdoaWxlICgxKSB7XG4gICAgICBzd2l0Y2ggKF9jb250ZXh0LnByZXYgPSBfY29udGV4dC5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBpZiAoIXNvcnRDb2x1bW4pIHtcbiAgICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSAxMTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIF9jb250ZXh0LnQxID0gX21lbVNvcnREYXRhO1xuICAgICAgICAgIF9jb250ZXh0Lm5leHQgPSA0O1xuICAgICAgICAgIHJldHVybiByZWdlbmVyYXRvclJ1bnRpbWUuYXdyYXAoX21lbUZpbHRlckRhdGEoZGF0YSwgY29sdW1ucywgZmlsdGVyKSk7XG5cbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIF9jb250ZXh0LnQyID0gX2NvbnRleHQuc2VudDtcbiAgICAgICAgICBfY29udGV4dC50MyA9IGNvbHVtbnM7XG4gICAgICAgICAgX2NvbnRleHQudDQgPSBkaXJlY3Rpb247XG4gICAgICAgICAgX2NvbnRleHQudDUgPSBzb3J0Q29sdW1uO1xuICAgICAgICAgIF9jb250ZXh0LnQwID0gKDAsIF9jb250ZXh0LnQxKShfY29udGV4dC50MiwgX2NvbnRleHQudDMsIF9jb250ZXh0LnQ0LCBfY29udGV4dC50NSk7XG4gICAgICAgICAgX2NvbnRleHQubmV4dCA9IDEyO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgMTE6XG4gICAgICAgICAgX2NvbnRleHQudDAgPSBfbWVtRmlsdGVyRGF0YShkYXRhLCBjb2x1bW5zLCBmaWx0ZXIpO1xuXG4gICAgICAgIGNhc2UgMTI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0LmFicnVwdChcInJldHVyblwiLCBfY29udGV4dC50MCk7XG5cbiAgICAgICAgY2FzZSAxMzpcbiAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dC5zdG9wKCk7XG4gICAgICB9XG4gICAgfVxuICB9KTtcbn0pO1xuXG52YXIgX21lbUZpbHRlckRhdGEgPSBtZW1vaXplT25lKGZ1bmN0aW9uIF9jYWxsZWUyKGRhdGEsIGNvbHVtbnMsIGZpbHRlcikge1xuICByZXR1cm4gcmVnZW5lcmF0b3JSdW50aW1lLmFzeW5jKGZ1bmN0aW9uIF9jYWxsZWUyJChfY29udGV4dDIpIHtcbiAgICB3aGlsZSAoMSkge1xuICAgICAgc3dpdGNoIChfY29udGV4dDIucHJldiA9IF9jb250ZXh0Mi5uZXh0KSB7XG4gICAgICAgIGNhc2UgMDpcbiAgICAgICAgICBpZiAoZmlsdGVyKSB7XG4gICAgICAgICAgICBfY29udGV4dDIubmV4dCA9IDI7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByZXR1cm4gX2NvbnRleHQyLmFicnVwdChcInJldHVyblwiLCBkYXRhKTtcblxuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgcmV0dXJuIF9jb250ZXh0Mi5hYnJ1cHQoXCJyZXR1cm5cIiwgZmlsdGVyRGF0YShkYXRhLCBjb2x1bW5zLCBmaWx0ZXIudG9VcHBlckNhc2UoKSkpO1xuXG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgY2FzZSBcImVuZFwiOlxuICAgICAgICAgIHJldHVybiBfY29udGV4dDIuc3RvcCgpO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG59KTtcblxudmFyIF9tZW1Tb3J0RGF0YSA9IG1lbW9pemVPbmUoZnVuY3Rpb24gKGRhdGEsIGNvbHVtbnMsIGRpcmVjdGlvbiwgc29ydENvbHVtbikge1xuICByZXR1cm4gc29ydERhdGEoZGF0YSwgY29sdW1uc1tzb3J0Q29sdW1uXSwgZGlyZWN0aW9uLCBzb3J0Q29sdW1uKTtcbn0pO1xuXG5leHBvcnQgdmFyIGZpbHRlckRhdGEgPSBmdW5jdGlvbiBmaWx0ZXJEYXRhKGRhdGEsIGNvbHVtbnMsIGZpbHRlcikge1xuICByZXR1cm4gZGF0YS5maWx0ZXIoZnVuY3Rpb24gKHJvdykge1xuICAgIHJldHVybiBPYmplY3QuZW50cmllcyhjb2x1bW5zKS5zb21lKGZ1bmN0aW9uIChjb2x1bW5FbnRyeSkge1xuICAgICAgdmFyIF9jb2x1bW5FbnRyeSA9IF9zbGljZWRUb0FycmF5KGNvbHVtbkVudHJ5LCAyKSxcbiAgICAgICAgICBrZXkgPSBfY29sdW1uRW50cnlbMF0sXG4gICAgICAgICAgY29sdW1uID0gX2NvbHVtbkVudHJ5WzFdO1xuXG4gICAgICBpZiAoY29sdW1uLmZpbHRlcmFibGUpIHtcbiAgICAgICAgaWYgKChjb2x1bW4uZmlsdGVyS2V5ID8gcm93W2tleV1bY29sdW1uLmZpbHRlcktleV0gOiByb3dba2V5XSkudG9VcHBlckNhc2UoKS5pbmNsdWRlcyhmaWx0ZXIpKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH0pO1xuICB9KTtcbn07XG5leHBvcnQgdmFyIHNvcnREYXRhID0gZnVuY3Rpb24gc29ydERhdGEoZGF0YSwgY29sdW1uLCBkaXJlY3Rpb24sIHNvcnRDb2x1bW4pIHtcbiAgcmV0dXJuIGRhdGEuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgIHZhciBzb3J0ID0gMTtcblxuICAgIGlmIChkaXJlY3Rpb24gPT09IFwiZGVzY1wiKSB7XG4gICAgICBzb3J0ID0gLTE7XG4gICAgfVxuXG4gICAgdmFyIHZhbEEgPSBjb2x1bW4uZmlsdGVyS2V5ID8gYVtzb3J0Q29sdW1uXVtjb2x1bW4uZmlsdGVyS2V5XSA6IGFbc29ydENvbHVtbl07XG4gICAgdmFyIHZhbEIgPSBjb2x1bW4uZmlsdGVyS2V5ID8gYltzb3J0Q29sdW1uXVtjb2x1bW4uZmlsdGVyS2V5XSA6IGJbc29ydENvbHVtbl07XG5cbiAgICBpZiAodHlwZW9mIHZhbEEgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIHZhbEEgPSB2YWxBLnRvVXBwZXJDYXNlKCk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiB2YWxCID09PSBcInN0cmluZ1wiKSB7XG4gICAgICB2YWxCID0gdmFsQi50b1VwcGVyQ2FzZSgpO1xuICAgIH1cblxuICAgIGlmICh2YWxBIDwgdmFsQikge1xuICAgICAgcmV0dXJuIHNvcnQgKiAtMTtcbiAgICB9XG5cbiAgICBpZiAodmFsQSA+IHZhbEIpIHtcbiAgICAgIHJldHVybiBzb3J0ICogMTtcbiAgICB9XG5cbiAgICByZXR1cm4gMDtcbiAgfSk7XG59O1xuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGZ1bmN0aW9uIChlKSB7dmFyIHJlZiA9IGUuZGF0YTt2YXIgdHlwZSA9IHJlZi50eXBlO3ZhciBtZXRob2QgPSByZWYubWV0aG9kO3ZhciBpZCA9IHJlZi5pZDt2YXIgcGFyYW1zID0gcmVmLnBhcmFtczt2YXIgZixwO2lmICh0eXBlID09PSAnUlBDJyAmJiBtZXRob2QpIHtpZiAoZiA9IF9fd2VicGFja19leHBvcnRzX19bbWV0aG9kXSkge3AgPSBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGYuYXBwbHkoX193ZWJwYWNrX2V4cG9ydHNfXywgcGFyYW1zKTsgfSk7fSBlbHNlIHtwID0gUHJvbWlzZS5yZWplY3QoJ05vIHN1Y2ggbWV0aG9kJyk7fXAudGhlbihmdW5jdGlvbiAocmVzdWx0KSB7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxyZXN1bHQ6IHJlc3VsdH0pO30pLmNhdGNoKGZ1bmN0aW9uIChlKSB7dmFyIGVycm9yID0ge21lc3NhZ2U6IGV9O2lmIChlLnN0YWNrKSB7ZXJyb3IubWVzc2FnZSA9IGUubWVzc2FnZTtlcnJvci5zdGFjayA9IGUuc3RhY2s7ZXJyb3IubmFtZSA9IGUubmFtZTt9cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLGlkOiBpZCxlcnJvcjogZXJyb3J9KTt9KTt9fSk7cG9zdE1lc3NhZ2Uoe3R5cGU6ICdSUEMnLG1ldGhvZDogJ3JlYWR5J30pOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUMzQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=