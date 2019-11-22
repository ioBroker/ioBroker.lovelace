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
/******/ 	__webpack_require__.p = "/frontend_latest/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/babel-loader/lib/index.js?!./src/resources/markdown_worker.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/cssfilter/lib/css.js":
/*!*******************************************!*\
  !*** ./node_modules/cssfilter/lib/css.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/cssfilter/lib/default.js");

var parseStyle = __webpack_require__(/*! ./parser */ "./node_modules/cssfilter/lib/parser.js");

var _ = __webpack_require__(/*! ./util */ "./node_modules/cssfilter/lib/util.js");
/**
 * 返回值是否为空
 *
 * @param {Object} obj
 * @return {Boolean}
 */


function isNull(obj) {
  return obj === undefined || obj === null;
}
/**
 * 浅拷贝对象
 *
 * @param {Object} obj
 * @return {Object}
 */


function shallowCopyObject(obj) {
  var ret = {};

  for (var i in obj) {
    ret[i] = obj[i];
  }

  return ret;
}
/**
 * 创建CSS过滤器
 *
 * @param {Object} options
 *   - {Object} whiteList
 *   - {Function} onAttr
 *   - {Function} onIgnoreAttr
 *   - {Function} safeAttrValue
 */


function FilterCSS(options) {
  options = shallowCopyObject(options || {});
  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onAttr = options.onAttr || DEFAULT.onAttr;
  options.onIgnoreAttr = options.onIgnoreAttr || DEFAULT.onIgnoreAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  this.options = options;
}

FilterCSS.prototype.process = function (css) {
  // 兼容各种奇葩输入
  css = css || '';
  css = css.toString();
  if (!css) return '';
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onAttr = options.onAttr;
  var onIgnoreAttr = options.onIgnoreAttr;
  var safeAttrValue = options.safeAttrValue;
  var retCSS = parseStyle(css, function (sourcePosition, position, name, value, source) {
    var check = whiteList[name];
    var isWhite = false;
    if (check === true) isWhite = check;else if (typeof check === 'function') isWhite = check(value);else if (check instanceof RegExp) isWhite = check.test(value);
    if (isWhite !== true) isWhite = false; // 如果过滤后 value 为空则直接忽略

    value = safeAttrValue(name, value);
    if (!value) return;
    var opts = {
      position: position,
      sourcePosition: sourcePosition,
      source: source,
      isWhite: isWhite
    };

    if (isWhite) {
      var ret = onAttr(name, value, opts);

      if (isNull(ret)) {
        return name + ':' + value;
      } else {
        return ret;
      }
    } else {
      var ret = onIgnoreAttr(name, value, opts);

      if (!isNull(ret)) {
        return ret;
      }
    }
  });
  return retCSS;
};

module.exports = FilterCSS;

/***/ }),

/***/ "./node_modules/cssfilter/lib/default.js":
/*!***********************************************!*\
  !*** ./node_modules/cssfilter/lib/default.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
function getDefaultWhiteList() {
  // 白名单值说明：
  // true: 允许该属性
  // Function: function (val) { } 返回true表示允许该属性，其他值均表示不允许
  // RegExp: regexp.test(val) 返回true表示允许该属性，其他值均表示不允许
  // 除上面列出的值外均表示不允许
  var whiteList = {};
  whiteList['align-content'] = false; // default: auto

  whiteList['align-items'] = false; // default: auto

  whiteList['align-self'] = false; // default: auto

  whiteList['alignment-adjust'] = false; // default: auto

  whiteList['alignment-baseline'] = false; // default: baseline

  whiteList['all'] = false; // default: depending on individual properties

  whiteList['anchor-point'] = false; // default: none

  whiteList['animation'] = false; // default: depending on individual properties

  whiteList['animation-delay'] = false; // default: 0

  whiteList['animation-direction'] = false; // default: normal

  whiteList['animation-duration'] = false; // default: 0

  whiteList['animation-fill-mode'] = false; // default: none

  whiteList['animation-iteration-count'] = false; // default: 1

  whiteList['animation-name'] = false; // default: none

  whiteList['animation-play-state'] = false; // default: running

  whiteList['animation-timing-function'] = false; // default: ease

  whiteList['azimuth'] = false; // default: center

  whiteList['backface-visibility'] = false; // default: visible

  whiteList['background'] = true; // default: depending on individual properties

  whiteList['background-attachment'] = true; // default: scroll

  whiteList['background-clip'] = true; // default: border-box

  whiteList['background-color'] = true; // default: transparent

  whiteList['background-image'] = true; // default: none

  whiteList['background-origin'] = true; // default: padding-box

  whiteList['background-position'] = true; // default: 0% 0%

  whiteList['background-repeat'] = true; // default: repeat

  whiteList['background-size'] = true; // default: auto

  whiteList['baseline-shift'] = false; // default: baseline

  whiteList['binding'] = false; // default: none

  whiteList['bleed'] = false; // default: 6pt

  whiteList['bookmark-label'] = false; // default: content()

  whiteList['bookmark-level'] = false; // default: none

  whiteList['bookmark-state'] = false; // default: open

  whiteList['border'] = true; // default: depending on individual properties

  whiteList['border-bottom'] = true; // default: depending on individual properties

  whiteList['border-bottom-color'] = true; // default: current color

  whiteList['border-bottom-left-radius'] = true; // default: 0

  whiteList['border-bottom-right-radius'] = true; // default: 0

  whiteList['border-bottom-style'] = true; // default: none

  whiteList['border-bottom-width'] = true; // default: medium

  whiteList['border-collapse'] = true; // default: separate

  whiteList['border-color'] = true; // default: depending on individual properties

  whiteList['border-image'] = true; // default: none

  whiteList['border-image-outset'] = true; // default: 0

  whiteList['border-image-repeat'] = true; // default: stretch

  whiteList['border-image-slice'] = true; // default: 100%

  whiteList['border-image-source'] = true; // default: none

  whiteList['border-image-width'] = true; // default: 1

  whiteList['border-left'] = true; // default: depending on individual properties

  whiteList['border-left-color'] = true; // default: current color

  whiteList['border-left-style'] = true; // default: none

  whiteList['border-left-width'] = true; // default: medium

  whiteList['border-radius'] = true; // default: 0

  whiteList['border-right'] = true; // default: depending on individual properties

  whiteList['border-right-color'] = true; // default: current color

  whiteList['border-right-style'] = true; // default: none

  whiteList['border-right-width'] = true; // default: medium

  whiteList['border-spacing'] = true; // default: 0

  whiteList['border-style'] = true; // default: depending on individual properties

  whiteList['border-top'] = true; // default: depending on individual properties

  whiteList['border-top-color'] = true; // default: current color

  whiteList['border-top-left-radius'] = true; // default: 0

  whiteList['border-top-right-radius'] = true; // default: 0

  whiteList['border-top-style'] = true; // default: none

  whiteList['border-top-width'] = true; // default: medium

  whiteList['border-width'] = true; // default: depending on individual properties

  whiteList['bottom'] = false; // default: auto

  whiteList['box-decoration-break'] = true; // default: slice

  whiteList['box-shadow'] = true; // default: none

  whiteList['box-sizing'] = true; // default: content-box

  whiteList['box-snap'] = true; // default: none

  whiteList['box-suppress'] = true; // default: show

  whiteList['break-after'] = true; // default: auto

  whiteList['break-before'] = true; // default: auto

  whiteList['break-inside'] = true; // default: auto

  whiteList['caption-side'] = false; // default: top

  whiteList['chains'] = false; // default: none

  whiteList['clear'] = true; // default: none

  whiteList['clip'] = false; // default: auto

  whiteList['clip-path'] = false; // default: none

  whiteList['clip-rule'] = false; // default: nonzero

  whiteList['color'] = true; // default: implementation dependent

  whiteList['color-interpolation-filters'] = true; // default: auto

  whiteList['column-count'] = false; // default: auto

  whiteList['column-fill'] = false; // default: balance

  whiteList['column-gap'] = false; // default: normal

  whiteList['column-rule'] = false; // default: depending on individual properties

  whiteList['column-rule-color'] = false; // default: current color

  whiteList['column-rule-style'] = false; // default: medium

  whiteList['column-rule-width'] = false; // default: medium

  whiteList['column-span'] = false; // default: none

  whiteList['column-width'] = false; // default: auto

  whiteList['columns'] = false; // default: depending on individual properties

  whiteList['contain'] = false; // default: none

  whiteList['content'] = false; // default: normal

  whiteList['counter-increment'] = false; // default: none

  whiteList['counter-reset'] = false; // default: none

  whiteList['counter-set'] = false; // default: none

  whiteList['crop'] = false; // default: auto

  whiteList['cue'] = false; // default: depending on individual properties

  whiteList['cue-after'] = false; // default: none

  whiteList['cue-before'] = false; // default: none

  whiteList['cursor'] = false; // default: auto

  whiteList['direction'] = false; // default: ltr

  whiteList['display'] = true; // default: depending on individual properties

  whiteList['display-inside'] = true; // default: auto

  whiteList['display-list'] = true; // default: none

  whiteList['display-outside'] = true; // default: inline-level

  whiteList['dominant-baseline'] = false; // default: auto

  whiteList['elevation'] = false; // default: level

  whiteList['empty-cells'] = false; // default: show

  whiteList['filter'] = false; // default: none

  whiteList['flex'] = false; // default: depending on individual properties

  whiteList['flex-basis'] = false; // default: auto

  whiteList['flex-direction'] = false; // default: row

  whiteList['flex-flow'] = false; // default: depending on individual properties

  whiteList['flex-grow'] = false; // default: 0

  whiteList['flex-shrink'] = false; // default: 1

  whiteList['flex-wrap'] = false; // default: nowrap

  whiteList['float'] = false; // default: none

  whiteList['float-offset'] = false; // default: 0 0

  whiteList['flood-color'] = false; // default: black

  whiteList['flood-opacity'] = false; // default: 1

  whiteList['flow-from'] = false; // default: none

  whiteList['flow-into'] = false; // default: none

  whiteList['font'] = true; // default: depending on individual properties

  whiteList['font-family'] = true; // default: implementation dependent

  whiteList['font-feature-settings'] = true; // default: normal

  whiteList['font-kerning'] = true; // default: auto

  whiteList['font-language-override'] = true; // default: normal

  whiteList['font-size'] = true; // default: medium

  whiteList['font-size-adjust'] = true; // default: none

  whiteList['font-stretch'] = true; // default: normal

  whiteList['font-style'] = true; // default: normal

  whiteList['font-synthesis'] = true; // default: weight style

  whiteList['font-variant'] = true; // default: normal

  whiteList['font-variant-alternates'] = true; // default: normal

  whiteList['font-variant-caps'] = true; // default: normal

  whiteList['font-variant-east-asian'] = true; // default: normal

  whiteList['font-variant-ligatures'] = true; // default: normal

  whiteList['font-variant-numeric'] = true; // default: normal

  whiteList['font-variant-position'] = true; // default: normal

  whiteList['font-weight'] = true; // default: normal

  whiteList['grid'] = false; // default: depending on individual properties

  whiteList['grid-area'] = false; // default: depending on individual properties

  whiteList['grid-auto-columns'] = false; // default: auto

  whiteList['grid-auto-flow'] = false; // default: none

  whiteList['grid-auto-rows'] = false; // default: auto

  whiteList['grid-column'] = false; // default: depending on individual properties

  whiteList['grid-column-end'] = false; // default: auto

  whiteList['grid-column-start'] = false; // default: auto

  whiteList['grid-row'] = false; // default: depending on individual properties

  whiteList['grid-row-end'] = false; // default: auto

  whiteList['grid-row-start'] = false; // default: auto

  whiteList['grid-template'] = false; // default: depending on individual properties

  whiteList['grid-template-areas'] = false; // default: none

  whiteList['grid-template-columns'] = false; // default: none

  whiteList['grid-template-rows'] = false; // default: none

  whiteList['hanging-punctuation'] = false; // default: none

  whiteList['height'] = true; // default: auto

  whiteList['hyphens'] = false; // default: manual

  whiteList['icon'] = false; // default: auto

  whiteList['image-orientation'] = false; // default: auto

  whiteList['image-resolution'] = false; // default: normal

  whiteList['ime-mode'] = false; // default: auto

  whiteList['initial-letters'] = false; // default: normal

  whiteList['inline-box-align'] = false; // default: last

  whiteList['justify-content'] = false; // default: auto

  whiteList['justify-items'] = false; // default: auto

  whiteList['justify-self'] = false; // default: auto

  whiteList['left'] = false; // default: auto

  whiteList['letter-spacing'] = true; // default: normal

  whiteList['lighting-color'] = true; // default: white

  whiteList['line-box-contain'] = false; // default: block inline replaced

  whiteList['line-break'] = false; // default: auto

  whiteList['line-grid'] = false; // default: match-parent

  whiteList['line-height'] = false; // default: normal

  whiteList['line-snap'] = false; // default: none

  whiteList['line-stacking'] = false; // default: depending on individual properties

  whiteList['line-stacking-ruby'] = false; // default: exclude-ruby

  whiteList['line-stacking-shift'] = false; // default: consider-shifts

  whiteList['line-stacking-strategy'] = false; // default: inline-line-height

  whiteList['list-style'] = true; // default: depending on individual properties

  whiteList['list-style-image'] = true; // default: none

  whiteList['list-style-position'] = true; // default: outside

  whiteList['list-style-type'] = true; // default: disc

  whiteList['margin'] = true; // default: depending on individual properties

  whiteList['margin-bottom'] = true; // default: 0

  whiteList['margin-left'] = true; // default: 0

  whiteList['margin-right'] = true; // default: 0

  whiteList['margin-top'] = true; // default: 0

  whiteList['marker-offset'] = false; // default: auto

  whiteList['marker-side'] = false; // default: list-item

  whiteList['marks'] = false; // default: none

  whiteList['mask'] = false; // default: border-box

  whiteList['mask-box'] = false; // default: see individual properties

  whiteList['mask-box-outset'] = false; // default: 0

  whiteList['mask-box-repeat'] = false; // default: stretch

  whiteList['mask-box-slice'] = false; // default: 0 fill

  whiteList['mask-box-source'] = false; // default: none

  whiteList['mask-box-width'] = false; // default: auto

  whiteList['mask-clip'] = false; // default: border-box

  whiteList['mask-image'] = false; // default: none

  whiteList['mask-origin'] = false; // default: border-box

  whiteList['mask-position'] = false; // default: center

  whiteList['mask-repeat'] = false; // default: no-repeat

  whiteList['mask-size'] = false; // default: border-box

  whiteList['mask-source-type'] = false; // default: auto

  whiteList['mask-type'] = false; // default: luminance

  whiteList['max-height'] = true; // default: none

  whiteList['max-lines'] = false; // default: none

  whiteList['max-width'] = true; // default: none

  whiteList['min-height'] = true; // default: 0

  whiteList['min-width'] = true; // default: 0

  whiteList['move-to'] = false; // default: normal

  whiteList['nav-down'] = false; // default: auto

  whiteList['nav-index'] = false; // default: auto

  whiteList['nav-left'] = false; // default: auto

  whiteList['nav-right'] = false; // default: auto

  whiteList['nav-up'] = false; // default: auto

  whiteList['object-fit'] = false; // default: fill

  whiteList['object-position'] = false; // default: 50% 50%

  whiteList['opacity'] = false; // default: 1

  whiteList['order'] = false; // default: 0

  whiteList['orphans'] = false; // default: 2

  whiteList['outline'] = false; // default: depending on individual properties

  whiteList['outline-color'] = false; // default: invert

  whiteList['outline-offset'] = false; // default: 0

  whiteList['outline-style'] = false; // default: none

  whiteList['outline-width'] = false; // default: medium

  whiteList['overflow'] = false; // default: depending on individual properties

  whiteList['overflow-wrap'] = false; // default: normal

  whiteList['overflow-x'] = false; // default: visible

  whiteList['overflow-y'] = false; // default: visible

  whiteList['padding'] = true; // default: depending on individual properties

  whiteList['padding-bottom'] = true; // default: 0

  whiteList['padding-left'] = true; // default: 0

  whiteList['padding-right'] = true; // default: 0

  whiteList['padding-top'] = true; // default: 0

  whiteList['page'] = false; // default: auto

  whiteList['page-break-after'] = false; // default: auto

  whiteList['page-break-before'] = false; // default: auto

  whiteList['page-break-inside'] = false; // default: auto

  whiteList['page-policy'] = false; // default: start

  whiteList['pause'] = false; // default: implementation dependent

  whiteList['pause-after'] = false; // default: implementation dependent

  whiteList['pause-before'] = false; // default: implementation dependent

  whiteList['perspective'] = false; // default: none

  whiteList['perspective-origin'] = false; // default: 50% 50%

  whiteList['pitch'] = false; // default: medium

  whiteList['pitch-range'] = false; // default: 50

  whiteList['play-during'] = false; // default: auto

  whiteList['position'] = false; // default: static

  whiteList['presentation-level'] = false; // default: 0

  whiteList['quotes'] = false; // default: text

  whiteList['region-fragment'] = false; // default: auto

  whiteList['resize'] = false; // default: none

  whiteList['rest'] = false; // default: depending on individual properties

  whiteList['rest-after'] = false; // default: none

  whiteList['rest-before'] = false; // default: none

  whiteList['richness'] = false; // default: 50

  whiteList['right'] = false; // default: auto

  whiteList['rotation'] = false; // default: 0

  whiteList['rotation-point'] = false; // default: 50% 50%

  whiteList['ruby-align'] = false; // default: auto

  whiteList['ruby-merge'] = false; // default: separate

  whiteList['ruby-position'] = false; // default: before

  whiteList['shape-image-threshold'] = false; // default: 0.0

  whiteList['shape-outside'] = false; // default: none

  whiteList['shape-margin'] = false; // default: 0

  whiteList['size'] = false; // default: auto

  whiteList['speak'] = false; // default: auto

  whiteList['speak-as'] = false; // default: normal

  whiteList['speak-header'] = false; // default: once

  whiteList['speak-numeral'] = false; // default: continuous

  whiteList['speak-punctuation'] = false; // default: none

  whiteList['speech-rate'] = false; // default: medium

  whiteList['stress'] = false; // default: 50

  whiteList['string-set'] = false; // default: none

  whiteList['tab-size'] = false; // default: 8

  whiteList['table-layout'] = false; // default: auto

  whiteList['text-align'] = true; // default: start

  whiteList['text-align-last'] = true; // default: auto

  whiteList['text-combine-upright'] = true; // default: none

  whiteList['text-decoration'] = true; // default: none

  whiteList['text-decoration-color'] = true; // default: currentColor

  whiteList['text-decoration-line'] = true; // default: none

  whiteList['text-decoration-skip'] = true; // default: objects

  whiteList['text-decoration-style'] = true; // default: solid

  whiteList['text-emphasis'] = true; // default: depending on individual properties

  whiteList['text-emphasis-color'] = true; // default: currentColor

  whiteList['text-emphasis-position'] = true; // default: over right

  whiteList['text-emphasis-style'] = true; // default: none

  whiteList['text-height'] = true; // default: auto

  whiteList['text-indent'] = true; // default: 0

  whiteList['text-justify'] = true; // default: auto

  whiteList['text-orientation'] = true; // default: mixed

  whiteList['text-overflow'] = true; // default: clip

  whiteList['text-shadow'] = true; // default: none

  whiteList['text-space-collapse'] = true; // default: collapse

  whiteList['text-transform'] = true; // default: none

  whiteList['text-underline-position'] = true; // default: auto

  whiteList['text-wrap'] = true; // default: normal

  whiteList['top'] = false; // default: auto

  whiteList['transform'] = false; // default: none

  whiteList['transform-origin'] = false; // default: 50% 50% 0

  whiteList['transform-style'] = false; // default: flat

  whiteList['transition'] = false; // default: depending on individual properties

  whiteList['transition-delay'] = false; // default: 0s

  whiteList['transition-duration'] = false; // default: 0s

  whiteList['transition-property'] = false; // default: all

  whiteList['transition-timing-function'] = false; // default: ease

  whiteList['unicode-bidi'] = false; // default: normal

  whiteList['vertical-align'] = false; // default: baseline

  whiteList['visibility'] = false; // default: visible

  whiteList['voice-balance'] = false; // default: center

  whiteList['voice-duration'] = false; // default: auto

  whiteList['voice-family'] = false; // default: implementation dependent

  whiteList['voice-pitch'] = false; // default: medium

  whiteList['voice-range'] = false; // default: medium

  whiteList['voice-rate'] = false; // default: normal

  whiteList['voice-stress'] = false; // default: normal

  whiteList['voice-volume'] = false; // default: medium

  whiteList['volume'] = false; // default: medium

  whiteList['white-space'] = false; // default: normal

  whiteList['widows'] = false; // default: 2

  whiteList['width'] = true; // default: auto

  whiteList['will-change'] = false; // default: auto

  whiteList['word-break'] = true; // default: normal

  whiteList['word-spacing'] = true; // default: normal

  whiteList['word-wrap'] = true; // default: normal

  whiteList['wrap-flow'] = false; // default: auto

  whiteList['wrap-through'] = false; // default: wrap

  whiteList['writing-mode'] = false; // default: horizontal-tb

  whiteList['z-index'] = false; // default: auto

  return whiteList;
}
/**
 * 匹配到白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */


function onAttr(name, value, options) {} // do nothing

/**
 * 匹配到不在白名单上的一个属性时
 *
 * @param {String} name
 * @param {String} value
 * @param {Object} options
 * @return {String}
 */


function onIgnoreAttr(name, value, options) {// do nothing
}

var REGEXP_URL_JAVASCRIPT = /javascript\s*\:/img;
/**
 * 过滤属性值
 *
 * @param {String} name
 * @param {String} value
 * @return {String}
 */

function safeAttrValue(name, value) {
  if (REGEXP_URL_JAVASCRIPT.test(value)) return '';
  return value;
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onAttr = onAttr;
exports.onIgnoreAttr = onIgnoreAttr;
exports.safeAttrValue = safeAttrValue;

/***/ }),

/***/ "./node_modules/cssfilter/lib/index.js":
/*!*********************************************!*\
  !*** ./node_modules/cssfilter/lib/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/cssfilter/lib/default.js");

var FilterCSS = __webpack_require__(/*! ./css */ "./node_modules/cssfilter/lib/css.js");
/**
 * XSS过滤
 *
 * @param {String} css 要过滤的CSS代码
 * @param {Object} options 选项：whiteList, onAttr, onIgnoreAttr
 * @return {String}
 */


function filterCSS(html, options) {
  var xss = new FilterCSS(options);
  return xss.process(html);
} // 输出


exports = module.exports = filterCSS;
exports.FilterCSS = FilterCSS;

for (var i in DEFAULT) exports[i] = DEFAULT[i]; // 在浏览器端使用


if (typeof window !== 'undefined') {
  window.filterCSS = module.exports;
}

/***/ }),

/***/ "./node_modules/cssfilter/lib/parser.js":
/*!**********************************************!*\
  !*** ./node_modules/cssfilter/lib/parser.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * cssfilter
 *
 * @author 老雷<leizongmin@gmail.com>
 */
var _ = __webpack_require__(/*! ./util */ "./node_modules/cssfilter/lib/util.js");
/**
 * 解析style
 *
 * @param {String} css
 * @param {Function} onAttr 处理属性的函数
 *   参数格式： function (sourcePosition, position, name, value, source)
 * @return {String}
 */


function parseStyle(css, onAttr) {
  css = _.trimRight(css);
  if (css[css.length - 1] !== ';') css += ';';
  var cssLength = css.length;
  var isParenthesisOpen = false;
  var lastPos = 0;
  var i = 0;
  var retCSS = '';

  function addNewAttr() {
    // 如果没有正常的闭合圆括号，则直接忽略当前属性
    if (!isParenthesisOpen) {
      var source = _.trim(css.slice(lastPos, i));

      var j = source.indexOf(':');

      if (j !== -1) {
        var name = _.trim(source.slice(0, j));

        var value = _.trim(source.slice(j + 1)); // 必须有属性名称


        if (name) {
          var ret = onAttr(lastPos, retCSS.length, name, value, source);
          if (ret) retCSS += ret + '; ';
        }
      }
    }

    lastPos = i + 1;
  }

  for (; i < cssLength; i++) {
    var c = css[i];

    if (c === '/' && css[i + 1] === '*') {
      // 备注开始
      var j = css.indexOf('*/', i + 2); // 如果没有正常的备注结束，则后面的部分全部跳过

      if (j === -1) break; // 直接将当前位置调到备注结尾，并且初始化状态

      i = j + 1;
      lastPos = i + 1;
      isParenthesisOpen = false;
    } else if (c === '(') {
      isParenthesisOpen = true;
    } else if (c === ')') {
      isParenthesisOpen = false;
    } else if (c === ';') {
      if (isParenthesisOpen) {// 在圆括号里面，忽略
      } else {
        addNewAttr();
      }
    } else if (c === '\n') {
      addNewAttr();
    }
  }

  return _.trim(retCSS);
}

module.exports = parseStyle;

/***/ }),

/***/ "./node_modules/cssfilter/lib/util.js":
/*!********************************************!*\
  !*** ./node_modules/cssfilter/lib/util.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;

    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;

    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }

    return str.replace(/(^\s*)|(\s*$)/g, '');
  },
  trimRight: function (str) {
    if (String.prototype.trimRight) {
      return str.trimRight();
    }

    return str.replace(/(\s*$)/g, '');
  }
};

/***/ }),

/***/ "./node_modules/marked/lib/marked.js":
/*!*******************************************!*\
  !*** ./node_modules/marked/lib/marked.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * marked - a markdown parser
 * Copyright (c) 2011-2018, Christopher Jeffrey. (MIT Licensed)
 * https://github.com/markedjs/marked
 */
;

(function (root) {
  'use strict';
  /**
   * Block-Level Grammar
   */

  var block = {
    newline: /^\n+/,
    code: /^( {4}[^\n]+\n*)+/,
    fences: noop,
    hr: /^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,
    heading: /^ *(#{1,6}) *([^\n]+?) *(?:#+ *)?(?:\n+|$)/,
    nptable: noop,
    blockquote: /^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,
    list: /^( {0,3})(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,
    html: '^ {0,3}(?:' // optional indentation
    + '<(script|pre|style)[\\s>][\\s\\S]*?(?:</\\1>[^\\n]*\\n+|$)' // (1)
    + '|comment[^\\n]*(\\n+|$)' // (2)
    + '|<\\?[\\s\\S]*?\\?>\\n*' // (3)
    + '|<![A-Z][\\s\\S]*?>\\n*' // (4)
    + '|<!\\[CDATA\\[[\\s\\S]*?\\]\\]>\\n*' // (5)
    + '|</?(tag)(?: +|\\n|/?>)[\\s\\S]*?(?:\\n{2,}|$)' // (6)
    + '|<(?!script|pre|style)([a-z][\\w-]*)(?:attribute)*? */?>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) open tag
    + '|</(?!script|pre|style)[a-z][\\w-]*\\s*>(?=[ \\t]*(?:\\n|$))[\\s\\S]*?(?:\\n{2,}|$)' // (7) closing tag
    + ')',
    def: /^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,
    table: noop,
    lheading: /^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,
    paragraph: /^([^\n]+(?:\n(?!hr|heading|lheading| {0,3}>|<\/?(?:tag)(?: +|\n|\/?>)|<(?:script|pre|style|!--))[^\n]+)*)/,
    text: /^[^\n]+/
  };
  block._label = /(?!\s*\])(?:\\[\[\]]|[^\[\]])+/;
  block._title = /(?:"(?:\\"?|[^"\\])*"|'[^'\n]*(?:\n[^'\n]+)*\n?'|\([^()]*\))/;
  block.def = edit(block.def).replace('label', block._label).replace('title', block._title).getRegex();
  block.bullet = /(?:[*+-]|\d{1,9}\.)/;
  block.item = /^( *)(bull) ?[^\n]*(?:\n(?!\1bull ?)[^\n]*)*/;
  block.item = edit(block.item, 'gm').replace(/bull/g, block.bullet).getRegex();
  block.list = edit(block.list).replace(/bull/g, block.bullet).replace('hr', '\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))').replace('def', '\\n+(?=' + block.def.source + ')').getRegex();
  block._tag = 'address|article|aside|base|basefont|blockquote|body|caption' + '|center|col|colgroup|dd|details|dialog|dir|div|dl|dt|fieldset|figcaption' + '|figure|footer|form|frame|frameset|h[1-6]|head|header|hr|html|iframe' + '|legend|li|link|main|menu|menuitem|meta|nav|noframes|ol|optgroup|option' + '|p|param|section|source|summary|table|tbody|td|tfoot|th|thead|title|tr' + '|track|ul';
  block._comment = /<!--(?!-?>)[\s\S]*?-->/;
  block.html = edit(block.html, 'i').replace('comment', block._comment).replace('tag', block._tag).replace('attribute', / +[a-zA-Z:_][\w.:-]*(?: *= *"[^"\n]*"| *= *'[^'\n]*'| *= *[^\s"'=<>`]+)?/).getRegex();
  block.paragraph = edit(block.paragraph).replace('hr', block.hr).replace('heading', block.heading).replace('lheading', block.lheading).replace('tag', block._tag) // pars can be interrupted by type (6) html blocks
  .getRegex();
  block.blockquote = edit(block.blockquote).replace('paragraph', block.paragraph).getRegex();
  /**
   * Normal Block Grammar
   */

  block.normal = merge({}, block);
  /**
   * GFM Block Grammar
   */

  block.gfm = merge({}, block.normal, {
    fences: /^ {0,3}(`{3,}|~{3,})([^`\n]*)\n(?:|([\s\S]*?)\n)(?: {0,3}\1[~`]* *(?:\n+|$)|$)/,
    paragraph: /^/,
    heading: /^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/
  });
  block.gfm.paragraph = edit(block.paragraph).replace('(?!', '(?!' + block.gfm.fences.source.replace('\\1', '\\2') + '|' + block.list.source.replace('\\1', '\\3') + '|').getRegex();
  /**
   * GFM + Tables Block Grammar
   */

  block.tables = merge({}, block.gfm, {
    nptable: /^ *([^|\n ].*\|.*)\n *([-:]+ *\|[-| :]*)(?:\n((?:.*[^>\n ].*(?:\n|$))*)\n*|$)/,
    table: /^ *\|(.+)\n *\|?( *[-:]+[-| :]*)(?:\n((?: *[^>\n ].*(?:\n|$))*)\n*|$)/
  });
  /**
   * Pedantic grammar
   */

  block.pedantic = merge({}, block.normal, {
    html: edit('^ *(?:comment *(?:\\n|\\s*$)' + '|<(tag)[\\s\\S]+?</\\1> *(?:\\n{2,}|\\s*$)' // closed tag
    + '|<tag(?:"[^"]*"|\'[^\']*\'|\\s[^\'"/>\\s]*)*?/?> *(?:\\n{2,}|\\s*$))').replace('comment', block._comment).replace(/tag/g, '(?!(?:' + 'a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub' + '|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)' + '\\b)\\w+(?!:|[^\\w\\s@]*@)\\b').getRegex(),
    def: /^ *\[([^\]]+)\]: *<?([^\s>]+)>?(?: +(["(][^\n]+[")]))? *(?:\n+|$)/
  });
  /**
   * Block Lexer
   */

  function Lexer(options) {
    this.tokens = [];
    this.tokens.links = Object.create(null);
    this.options = options || marked.defaults;
    this.rules = block.normal;

    if (this.options.pedantic) {
      this.rules = block.pedantic;
    } else if (this.options.gfm) {
      if (this.options.tables) {
        this.rules = block.tables;
      } else {
        this.rules = block.gfm;
      }
    }
  }
  /**
   * Expose Block Rules
   */


  Lexer.rules = block;
  /**
   * Static Lex Method
   */

  Lexer.lex = function (src, options) {
    var lexer = new Lexer(options);
    return lexer.lex(src);
  };
  /**
   * Preprocessing
   */


  Lexer.prototype.lex = function (src) {
    src = src.replace(/\r\n|\r/g, '\n').replace(/\t/g, '    ').replace(/\u00a0/g, ' ').replace(/\u2424/g, '\n');
    return this.token(src, true);
  };
  /**
   * Lexing
   */


  Lexer.prototype.token = function (src, top) {
    src = src.replace(/^ +$/gm, '');
    var next, loose, cap, bull, b, item, listStart, listItems, t, space, i, tag, l, isordered, istask, ischecked;

    while (src) {
      // newline
      if (cap = this.rules.newline.exec(src)) {
        src = src.substring(cap[0].length);

        if (cap[0].length > 1) {
          this.tokens.push({
            type: 'space'
          });
        }
      } // code


      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        cap = cap[0].replace(/^ {4}/gm, '');
        this.tokens.push({
          type: 'code',
          text: !this.options.pedantic ? rtrim(cap, '\n') : cap
        });
        continue;
      } // fences (gfm)


      if (cap = this.rules.fences.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'code',
          lang: cap[2] ? cap[2].trim() : cap[2],
          text: cap[3] || ''
        });
        continue;
      } // heading


      if (cap = this.rules.heading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[1].length,
          text: cap[2]
        });
        continue;
      } // table no leading pipe (gfm)


      if (cap = this.rules.nptable.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(item.cells[i], item.header.length);
          }

          this.tokens.push(item);
          continue;
        }
      } // hr


      if (cap = this.rules.hr.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'hr'
        });
        continue;
      } // blockquote


      if (cap = this.rules.blockquote.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'blockquote_start'
        });
        cap = cap[0].replace(/^ *> ?/gm, ''); // Pass `top` to keep the current
        // "toplevel" state. This is exactly
        // how markdown.pl works.

        this.token(cap, top);
        this.tokens.push({
          type: 'blockquote_end'
        });
        continue;
      } // list


      if (cap = this.rules.list.exec(src)) {
        src = src.substring(cap[0].length);
        bull = cap[2];
        isordered = bull.length > 1;
        listStart = {
          type: 'list_start',
          ordered: isordered,
          start: isordered ? +bull : '',
          loose: false
        };
        this.tokens.push(listStart); // Get each top-level item.

        cap = cap[0].match(this.rules.item);
        listItems = [];
        next = false;
        l = cap.length;
        i = 0;

        for (; i < l; i++) {
          item = cap[i]; // Remove the list item's bullet
          // so it is seen as the next token.

          space = item.length;
          item = item.replace(/^ *([*+-]|\d+\.) */, ''); // Outdent whatever the
          // list item contains. Hacky.

          if (~item.indexOf('\n ')) {
            space -= item.length;
            item = !this.options.pedantic ? item.replace(new RegExp('^ {1,' + space + '}', 'gm'), '') : item.replace(/^ {1,4}/gm, '');
          } // Determine whether the next list item belongs here.
          // Backpedal if it does not belong in this list.


          if (i !== l - 1) {
            b = block.bullet.exec(cap[i + 1])[0];

            if (bull.length > 1 ? b.length === 1 : b.length > 1 || this.options.smartLists && b !== bull) {
              src = cap.slice(i + 1).join('\n') + src;
              i = l - 1;
            }
          } // Determine whether item is loose or not.
          // Use: /(^|\n)(?! )[^\n]+\n\n(?!\s*$)/
          // for discount behavior.


          loose = next || /\n\n(?!\s*$)/.test(item);

          if (i !== l - 1) {
            next = item.charAt(item.length - 1) === '\n';
            if (!loose) loose = next;
          }

          if (loose) {
            listStart.loose = true;
          } // Check for task list items


          istask = /^\[[ xX]\] /.test(item);
          ischecked = undefined;

          if (istask) {
            ischecked = item[1] !== ' ';
            item = item.replace(/^\[[ xX]\] +/, '');
          }

          t = {
            type: 'list_item_start',
            task: istask,
            checked: ischecked,
            loose: loose
          };
          listItems.push(t);
          this.tokens.push(t); // Recurse.

          this.token(item, false);
          this.tokens.push({
            type: 'list_item_end'
          });
        }

        if (listStart.loose) {
          l = listItems.length;
          i = 0;

          for (; i < l; i++) {
            listItems[i].loose = true;
          }
        }

        this.tokens.push({
          type: 'list_end'
        });
        continue;
      } // html


      if (cap = this.rules.html.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: this.options.sanitize ? 'paragraph' : 'html',
          pre: !this.options.sanitizer && (cap[1] === 'pre' || cap[1] === 'script' || cap[1] === 'style'),
          text: cap[0]
        });
        continue;
      } // def


      if (top && (cap = this.rules.def.exec(src))) {
        src = src.substring(cap[0].length);
        if (cap[3]) cap[3] = cap[3].substring(1, cap[3].length - 1);
        tag = cap[1].toLowerCase().replace(/\s+/g, ' ');

        if (!this.tokens.links[tag]) {
          this.tokens.links[tag] = {
            href: cap[2],
            title: cap[3]
          };
        }

        continue;
      } // table (gfm)


      if (cap = this.rules.table.exec(src)) {
        item = {
          type: 'table',
          header: splitCells(cap[1].replace(/^ *| *\| *$/g, '')),
          align: cap[2].replace(/^ *|\| *$/g, '').split(/ *\| */),
          cells: cap[3] ? cap[3].replace(/\n$/, '').split('\n') : []
        };

        if (item.header.length === item.align.length) {
          src = src.substring(cap[0].length);

          for (i = 0; i < item.align.length; i++) {
            if (/^ *-+: *$/.test(item.align[i])) {
              item.align[i] = 'right';
            } else if (/^ *:-+: *$/.test(item.align[i])) {
              item.align[i] = 'center';
            } else if (/^ *:-+ *$/.test(item.align[i])) {
              item.align[i] = 'left';
            } else {
              item.align[i] = null;
            }
          }

          for (i = 0; i < item.cells.length; i++) {
            item.cells[i] = splitCells(item.cells[i].replace(/^ *\| *| *\| *$/g, ''), item.header.length);
          }

          this.tokens.push(item);
          continue;
        }
      } // lheading


      if (cap = this.rules.lheading.exec(src)) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'heading',
          depth: cap[2] === '=' ? 1 : 2,
          text: cap[1]
        });
        continue;
      } // top-level paragraph


      if (top && (cap = this.rules.paragraph.exec(src))) {
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'paragraph',
          text: cap[1].charAt(cap[1].length - 1) === '\n' ? cap[1].slice(0, -1) : cap[1]
        });
        continue;
      } // text


      if (cap = this.rules.text.exec(src)) {
        // Top-level should never reach here.
        src = src.substring(cap[0].length);
        this.tokens.push({
          type: 'text',
          text: cap[0]
        });
        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return this.tokens;
  };
  /**
   * Inline-Level Grammar
   */


  var inline = {
    escape: /^\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/,
    autolink: /^<(scheme:[^\s\x00-\x1f<>]*|email)>/,
    url: noop,
    tag: '^comment' + '|^</[a-zA-Z][\\w:-]*\\s*>' // self-closing tag
    + '|^<[a-zA-Z][\\w-]*(?:attribute)*?\\s*/?>' // open tag
    + '|^<\\?[\\s\\S]*?\\?>' // processing instruction, e.g. <?php ?>
    + '|^<![a-zA-Z]+\\s[\\s\\S]*?>' // declaration, e.g. <!DOCTYPE html>
    + '|^<!\\[CDATA\\[[\\s\\S]*?\\]\\]>',
    // CDATA section
    link: /^!?\[(label)\]\(href(?:\s+(title))?\s*\)/,
    reflink: /^!?\[(label)\]\[(?!\s*\])((?:\\[\[\]]?|[^\[\]\\])+)\]/,
    nolink: /^!?\[(?!\s*\])((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\](?:\[\])?/,
    strong: /^__([^\s_])__(?!_)|^\*\*([^\s*])\*\*(?!\*)|^__([^\s][\s\S]*?[^\s])__(?!_)|^\*\*([^\s][\s\S]*?[^\s])\*\*(?!\*)/,
    em: /^_([^\s_])_(?!_)|^\*([^\s*"<\[])\*(?!\*)|^_([^\s][\s\S]*?[^\s_])_(?!_|[^\spunctuation])|^_([^\s_][\s\S]*?[^\s])_(?!_|[^\spunctuation])|^\*([^\s"<\[][\s\S]*?[^\s*])\*(?!\*)|^\*([^\s*"<\[][\s\S]*?[^\s])\*(?!\*)/,
    code: /^(`+)([^`]|[^`][\s\S]*?[^`])\1(?!`)/,
    br: /^( {2,}|\\)\n(?!\s*$)/,
    del: noop,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*]|\b_|$)|[^ ](?= {2,}\n))|(?= {2,}\n))/
  }; // list of punctuation marks from common mark spec
  // without ` and ] to workaround Rule 17 (inline code blocks/links)

  inline._punctuation = '!"#$%&\'()*+,\\-./:;<=>?@\\[^_{|}~';
  inline.em = edit(inline.em).replace(/punctuation/g, inline._punctuation).getRegex();
  inline._escapes = /\\([!"#$%&'()*+,\-./:;<=>?@\[\]\\^_`{|}~])/g;
  inline._scheme = /[a-zA-Z][a-zA-Z0-9+.-]{1,31}/;
  inline._email = /[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/;
  inline.autolink = edit(inline.autolink).replace('scheme', inline._scheme).replace('email', inline._email).getRegex();
  inline._attribute = /\s+[a-zA-Z:_][\w.:-]*(?:\s*=\s*"[^"]*"|\s*=\s*'[^']*'|\s*=\s*[^\s"'=<>`]+)?/;
  inline.tag = edit(inline.tag).replace('comment', block._comment).replace('attribute', inline._attribute).getRegex();
  inline._label = /(?:\[[^\[\]]*\]|\\[\[\]]?|`[^`]*`|`(?!`)|[^\[\]\\`])*?/;
  inline._href = /\s*(<(?:\\[<>]?|[^\s<>\\])*>|[^\s\x00-\x1f]*)/;
  inline._title = /"(?:\\"?|[^"\\])*"|'(?:\\'?|[^'\\])*'|\((?:\\\)?|[^)\\])*\)/;
  inline.link = edit(inline.link).replace('label', inline._label).replace('href', inline._href).replace('title', inline._title).getRegex();
  inline.reflink = edit(inline.reflink).replace('label', inline._label).getRegex();
  /**
   * Normal Inline Grammar
   */

  inline.normal = merge({}, inline);
  /**
   * Pedantic Inline Grammar
   */

  inline.pedantic = merge({}, inline.normal, {
    strong: /^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,
    em: /^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/,
    link: edit(/^!?\[(label)\]\((.*?)\)/).replace('label', inline._label).getRegex(),
    reflink: edit(/^!?\[(label)\]\s*\[([^\]]*)\]/).replace('label', inline._label).getRegex()
  });
  /**
   * GFM Inline Grammar
   */

  inline.gfm = merge({}, inline.normal, {
    escape: edit(inline.escape).replace('])', '~|])').getRegex(),
    _extended_email: /[A-Za-z0-9._+-]+(@)[a-zA-Z0-9-_]+(?:\.[a-zA-Z0-9-_]*[a-zA-Z0-9])+(?![-_])/,
    url: /^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/,
    _backpedal: /(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,
    del: /^~+(?=\S)([\s\S]*?\S)~+/,
    text: /^(`+|[^`])(?:[\s\S]*?(?:(?=[\\<!\[`*~]|\b_|https?:\/\/|ftp:\/\/|www\.|$)|[^ ](?= {2,}\n)|[^a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-](?=[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))|(?= {2,}\n|[a-zA-Z0-9.!#$%&'*+\/=?_`{\|}~-]+@))/
  });
  inline.gfm.url = edit(inline.gfm.url, 'i').replace('email', inline.gfm._extended_email).getRegex();
  /**
   * GFM + Line Breaks Inline Grammar
   */

  inline.breaks = merge({}, inline.gfm, {
    br: edit(inline.br).replace('{2,}', '*').getRegex(),
    text: edit(inline.gfm.text).replace(/\{2,\}/g, '*').getRegex()
  });
  /**
   * Inline Lexer & Compiler
   */

  function InlineLexer(links, options) {
    this.options = options || marked.defaults;
    this.links = links;
    this.rules = inline.normal;
    this.renderer = this.options.renderer || new Renderer();
    this.renderer.options = this.options;

    if (!this.links) {
      throw new Error('Tokens array requires a `links` property.');
    }

    if (this.options.pedantic) {
      this.rules = inline.pedantic;
    } else if (this.options.gfm) {
      if (this.options.breaks) {
        this.rules = inline.breaks;
      } else {
        this.rules = inline.gfm;
      }
    }
  }
  /**
   * Expose Inline Rules
   */


  InlineLexer.rules = inline;
  /**
   * Static Lexing/Compiling Method
   */

  InlineLexer.output = function (src, links, options) {
    var inline = new InlineLexer(links, options);
    return inline.output(src);
  };
  /**
   * Lexing/Compiling
   */


  InlineLexer.prototype.output = function (src) {
    var out = '',
        link,
        text,
        href,
        title,
        cap,
        prevCapZero;

    while (src) {
      // escape
      if (cap = this.rules.escape.exec(src)) {
        src = src.substring(cap[0].length);
        out += escape(cap[1]);
        continue;
      } // tag


      if (cap = this.rules.tag.exec(src)) {
        if (!this.inLink && /^<a /i.test(cap[0])) {
          this.inLink = true;
        } else if (this.inLink && /^<\/a>/i.test(cap[0])) {
          this.inLink = false;
        }

        if (!this.inRawBlock && /^<(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = true;
        } else if (this.inRawBlock && /^<\/(pre|code|kbd|script)(\s|>)/i.test(cap[0])) {
          this.inRawBlock = false;
        }

        src = src.substring(cap[0].length);
        out += this.options.sanitize ? this.options.sanitizer ? this.options.sanitizer(cap[0]) : escape(cap[0]) : cap[0];
        continue;
      } // link


      if (cap = this.rules.link.exec(src)) {
        var lastParenIndex = findClosingBracket(cap[2], '()');

        if (lastParenIndex > -1) {
          var linkLen = cap[0].length - (cap[2].length - lastParenIndex) - (cap[3] || '').length;
          cap[2] = cap[2].substring(0, lastParenIndex);
          cap[0] = cap[0].substring(0, linkLen).trim();
          cap[3] = '';
        }

        src = src.substring(cap[0].length);
        this.inLink = true;
        href = cap[2];

        if (this.options.pedantic) {
          link = /^([^'"]*[^\s])\s+(['"])(.*)\2/.exec(href);

          if (link) {
            href = link[1];
            title = link[3];
          } else {
            title = '';
          }
        } else {
          title = cap[3] ? cap[3].slice(1, -1) : '';
        }

        href = href.trim().replace(/^<([\s\S]*)>$/, '$1');
        out += this.outputLink(cap, {
          href: InlineLexer.escapes(href),
          title: InlineLexer.escapes(title)
        });
        this.inLink = false;
        continue;
      } // reflink, nolink


      if ((cap = this.rules.reflink.exec(src)) || (cap = this.rules.nolink.exec(src))) {
        src = src.substring(cap[0].length);
        link = (cap[2] || cap[1]).replace(/\s+/g, ' ');
        link = this.links[link.toLowerCase()];

        if (!link || !link.href) {
          out += cap[0].charAt(0);
          src = cap[0].substring(1) + src;
          continue;
        }

        this.inLink = true;
        out += this.outputLink(cap, link);
        this.inLink = false;
        continue;
      } // strong


      if (cap = this.rules.strong.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.strong(this.output(cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      } // em


      if (cap = this.rules.em.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.em(this.output(cap[6] || cap[5] || cap[4] || cap[3] || cap[2] || cap[1]));
        continue;
      } // code


      if (cap = this.rules.code.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.codespan(escape(cap[2].trim(), true));
        continue;
      } // br


      if (cap = this.rules.br.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.br();
        continue;
      } // del (gfm)


      if (cap = this.rules.del.exec(src)) {
        src = src.substring(cap[0].length);
        out += this.renderer.del(this.output(cap[1]));
        continue;
      } // autolink


      if (cap = this.rules.autolink.exec(src)) {
        src = src.substring(cap[0].length);

        if (cap[2] === '@') {
          text = escape(this.mangle(cap[1]));
          href = 'mailto:' + text;
        } else {
          text = escape(cap[1]);
          href = text;
        }

        out += this.renderer.link(href, null, text);
        continue;
      } // url (gfm)


      if (!this.inLink && (cap = this.rules.url.exec(src))) {
        if (cap[2] === '@') {
          text = escape(cap[0]);
          href = 'mailto:' + text;
        } else {
          // do extended autolink path validation
          do {
            prevCapZero = cap[0];
            cap[0] = this.rules._backpedal.exec(cap[0])[0];
          } while (prevCapZero !== cap[0]);

          text = escape(cap[0]);

          if (cap[1] === 'www.') {
            href = 'http://' + text;
          } else {
            href = text;
          }
        }

        src = src.substring(cap[0].length);
        out += this.renderer.link(href, null, text);
        continue;
      } // text


      if (cap = this.rules.text.exec(src)) {
        src = src.substring(cap[0].length);

        if (this.inRawBlock) {
          out += this.renderer.text(cap[0]);
        } else {
          out += this.renderer.text(escape(this.smartypants(cap[0])));
        }

        continue;
      }

      if (src) {
        throw new Error('Infinite loop on byte: ' + src.charCodeAt(0));
      }
    }

    return out;
  };

  InlineLexer.escapes = function (text) {
    return text ? text.replace(InlineLexer.rules._escapes, '$1') : text;
  };
  /**
   * Compile Link
   */


  InlineLexer.prototype.outputLink = function (cap, link) {
    var href = link.href,
        title = link.title ? escape(link.title) : null;
    return cap[0].charAt(0) !== '!' ? this.renderer.link(href, title, this.output(cap[1])) : this.renderer.image(href, title, escape(cap[1]));
  };
  /**
   * Smartypants Transformations
   */


  InlineLexer.prototype.smartypants = function (text) {
    if (!this.options.smartypants) return text;
    return text // em-dashes
    .replace(/---/g, '\u2014') // en-dashes
    .replace(/--/g, '\u2013') // opening singles
    .replace(/(^|[-\u2014/(\[{"\s])'/g, '$1\u2018') // closing singles & apostrophes
    .replace(/'/g, '\u2019') // opening doubles
    .replace(/(^|[-\u2014/(\[{\u2018\s])"/g, '$1\u201c') // closing doubles
    .replace(/"/g, '\u201d') // ellipses
    .replace(/\.{3}/g, '\u2026');
  };
  /**
   * Mangle Links
   */


  InlineLexer.prototype.mangle = function (text) {
    if (!this.options.mangle) return text;
    var out = '',
        l = text.length,
        i = 0,
        ch;

    for (; i < l; i++) {
      ch = text.charCodeAt(i);

      if (Math.random() > 0.5) {
        ch = 'x' + ch.toString(16);
      }

      out += '&#' + ch + ';';
    }

    return out;
  };
  /**
   * Renderer
   */


  function Renderer(options) {
    this.options = options || marked.defaults;
  }

  Renderer.prototype.code = function (code, infostring, escaped) {
    var lang = (infostring || '').match(/\S*/)[0];

    if (this.options.highlight) {
      var out = this.options.highlight(code, lang);

      if (out != null && out !== code) {
        escaped = true;
        code = out;
      }
    }

    if (!lang) {
      return '<pre><code>' + (escaped ? code : escape(code, true)) + '</code></pre>';
    }

    return '<pre><code class="' + this.options.langPrefix + escape(lang, true) + '">' + (escaped ? code : escape(code, true)) + '</code></pre>\n';
  };

  Renderer.prototype.blockquote = function (quote) {
    return '<blockquote>\n' + quote + '</blockquote>\n';
  };

  Renderer.prototype.html = function (html) {
    return html;
  };

  Renderer.prototype.heading = function (text, level, raw, slugger) {
    if (this.options.headerIds) {
      return '<h' + level + ' id="' + this.options.headerPrefix + slugger.slug(raw) + '">' + text + '</h' + level + '>\n';
    } // ignore IDs


    return '<h' + level + '>' + text + '</h' + level + '>\n';
  };

  Renderer.prototype.hr = function () {
    return this.options.xhtml ? '<hr/>\n' : '<hr>\n';
  };

  Renderer.prototype.list = function (body, ordered, start) {
    var type = ordered ? 'ol' : 'ul',
        startatt = ordered && start !== 1 ? ' start="' + start + '"' : '';
    return '<' + type + startatt + '>\n' + body + '</' + type + '>\n';
  };

  Renderer.prototype.listitem = function (text) {
    return '<li>' + text + '</li>\n';
  };

  Renderer.prototype.checkbox = function (checked) {
    return '<input ' + (checked ? 'checked="" ' : '') + 'disabled="" type="checkbox"' + (this.options.xhtml ? ' /' : '') + '> ';
  };

  Renderer.prototype.paragraph = function (text) {
    return '<p>' + text + '</p>\n';
  };

  Renderer.prototype.table = function (header, body) {
    if (body) body = '<tbody>' + body + '</tbody>';
    return '<table>\n' + '<thead>\n' + header + '</thead>\n' + body + '</table>\n';
  };

  Renderer.prototype.tablerow = function (content) {
    return '<tr>\n' + content + '</tr>\n';
  };

  Renderer.prototype.tablecell = function (content, flags) {
    var type = flags.header ? 'th' : 'td';
    var tag = flags.align ? '<' + type + ' align="' + flags.align + '">' : '<' + type + '>';
    return tag + content + '</' + type + '>\n';
  }; // span level renderer


  Renderer.prototype.strong = function (text) {
    return '<strong>' + text + '</strong>';
  };

  Renderer.prototype.em = function (text) {
    return '<em>' + text + '</em>';
  };

  Renderer.prototype.codespan = function (text) {
    return '<code>' + text + '</code>';
  };

  Renderer.prototype.br = function () {
    return this.options.xhtml ? '<br/>' : '<br>';
  };

  Renderer.prototype.del = function (text) {
    return '<del>' + text + '</del>';
  };

  Renderer.prototype.link = function (href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = '<a href="' + escape(href) + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += '>' + text + '</a>';
    return out;
  };

  Renderer.prototype.image = function (href, title, text) {
    href = cleanUrl(this.options.sanitize, this.options.baseUrl, href);

    if (href === null) {
      return text;
    }

    var out = '<img src="' + href + '" alt="' + text + '"';

    if (title) {
      out += ' title="' + title + '"';
    }

    out += this.options.xhtml ? '/>' : '>';
    return out;
  };

  Renderer.prototype.text = function (text) {
    return text;
  };
  /**
   * TextRenderer
   * returns only the textual part of the token
   */


  function TextRenderer() {} // no need for block level renderers


  TextRenderer.prototype.strong = TextRenderer.prototype.em = TextRenderer.prototype.codespan = TextRenderer.prototype.del = TextRenderer.prototype.text = function (text) {
    return text;
  };

  TextRenderer.prototype.link = TextRenderer.prototype.image = function (href, title, text) {
    return '' + text;
  };

  TextRenderer.prototype.br = function () {
    return '';
  };
  /**
   * Parsing & Compiling
   */


  function Parser(options) {
    this.tokens = [];
    this.token = null;
    this.options = options || marked.defaults;
    this.options.renderer = this.options.renderer || new Renderer();
    this.renderer = this.options.renderer;
    this.renderer.options = this.options;
    this.slugger = new Slugger();
  }
  /**
   * Static Parse Method
   */


  Parser.parse = function (src, options) {
    var parser = new Parser(options);
    return parser.parse(src);
  };
  /**
   * Parse Loop
   */


  Parser.prototype.parse = function (src) {
    this.inline = new InlineLexer(src.links, this.options); // use an InlineLexer with a TextRenderer to extract pure text

    this.inlineText = new InlineLexer(src.links, merge({}, this.options, {
      renderer: new TextRenderer()
    }));
    this.tokens = src.reverse();
    var out = '';

    while (this.next()) {
      out += this.tok();
    }

    return out;
  };
  /**
   * Next Token
   */


  Parser.prototype.next = function () {
    return this.token = this.tokens.pop();
  };
  /**
   * Preview Next Token
   */


  Parser.prototype.peek = function () {
    return this.tokens[this.tokens.length - 1] || 0;
  };
  /**
   * Parse Text Tokens
   */


  Parser.prototype.parseText = function () {
    var body = this.token.text;

    while (this.peek().type === 'text') {
      body += '\n' + this.next().text;
    }

    return this.inline.output(body);
  };
  /**
   * Parse Current Token
   */


  Parser.prototype.tok = function () {
    switch (this.token.type) {
      case 'space':
        {
          return '';
        }

      case 'hr':
        {
          return this.renderer.hr();
        }

      case 'heading':
        {
          return this.renderer.heading(this.inline.output(this.token.text), this.token.depth, unescape(this.inlineText.output(this.token.text)), this.slugger);
        }

      case 'code':
        {
          return this.renderer.code(this.token.text, this.token.lang, this.token.escaped);
        }

      case 'table':
        {
          var header = '',
              body = '',
              i,
              row,
              cell,
              j; // header

          cell = '';

          for (i = 0; i < this.token.header.length; i++) {
            cell += this.renderer.tablecell(this.inline.output(this.token.header[i]), {
              header: true,
              align: this.token.align[i]
            });
          }

          header += this.renderer.tablerow(cell);

          for (i = 0; i < this.token.cells.length; i++) {
            row = this.token.cells[i];
            cell = '';

            for (j = 0; j < row.length; j++) {
              cell += this.renderer.tablecell(this.inline.output(row[j]), {
                header: false,
                align: this.token.align[j]
              });
            }

            body += this.renderer.tablerow(cell);
          }

          return this.renderer.table(header, body);
        }

      case 'blockquote_start':
        {
          body = '';

          while (this.next().type !== 'blockquote_end') {
            body += this.tok();
          }

          return this.renderer.blockquote(body);
        }

      case 'list_start':
        {
          body = '';
          var ordered = this.token.ordered,
              start = this.token.start;

          while (this.next().type !== 'list_end') {
            body += this.tok();
          }

          return this.renderer.list(body, ordered, start);
        }

      case 'list_item_start':
        {
          body = '';
          var loose = this.token.loose;
          var checked = this.token.checked;
          var task = this.token.task;

          if (this.token.task) {
            body += this.renderer.checkbox(checked);
          }

          while (this.next().type !== 'list_item_end') {
            body += !loose && this.token.type === 'text' ? this.parseText() : this.tok();
          }

          return this.renderer.listitem(body, task, checked);
        }

      case 'html':
        {
          // TODO parse inline content if parameter markdown=1
          return this.renderer.html(this.token.text);
        }

      case 'paragraph':
        {
          return this.renderer.paragraph(this.inline.output(this.token.text));
        }

      case 'text':
        {
          return this.renderer.paragraph(this.parseText());
        }

      default:
        {
          var errMsg = 'Token with "' + this.token.type + '" type was not found.';

          if (this.options.silent) {
            console.log(errMsg);
          } else {
            throw new Error(errMsg);
          }
        }
    }
  };
  /**
   * Slugger generates header id
   */


  function Slugger() {
    this.seen = {};
  }
  /**
   * Convert string to unique id
   */


  Slugger.prototype.slug = function (value) {
    var slug = value.toLowerCase().trim().replace(/[\u2000-\u206F\u2E00-\u2E7F\\'!"#$%&()*+,./:;<=>?@[\]^`{|}~]/g, '').replace(/\s/g, '-');

    if (this.seen.hasOwnProperty(slug)) {
      var originalSlug = slug;

      do {
        this.seen[originalSlug]++;
        slug = originalSlug + '-' + this.seen[originalSlug];
      } while (this.seen.hasOwnProperty(slug));
    }

    this.seen[slug] = 0;
    return slug;
  };
  /**
   * Helpers
   */


  function escape(html, encode) {
    if (encode) {
      if (escape.escapeTest.test(html)) {
        return html.replace(escape.escapeReplace, function (ch) {
          return escape.replacements[ch];
        });
      }
    } else {
      if (escape.escapeTestNoEncode.test(html)) {
        return html.replace(escape.escapeReplaceNoEncode, function (ch) {
          return escape.replacements[ch];
        });
      }
    }

    return html;
  }

  escape.escapeTest = /[&<>"']/;
  escape.escapeReplace = /[&<>"']/g;
  escape.replacements = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  };
  escape.escapeTestNoEncode = /[<>"']|&(?!#?\w+;)/;
  escape.escapeReplaceNoEncode = /[<>"']|&(?!#?\w+;)/g;

  function unescape(html) {
    // explicitly match decimal, hex, and named HTML entities
    return html.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/ig, function (_, n) {
      n = n.toLowerCase();
      if (n === 'colon') return ':';

      if (n.charAt(0) === '#') {
        return n.charAt(1) === 'x' ? String.fromCharCode(parseInt(n.substring(2), 16)) : String.fromCharCode(+n.substring(1));
      }

      return '';
    });
  }

  function edit(regex, opt) {
    regex = regex.source || regex;
    opt = opt || '';
    return {
      replace: function (name, val) {
        val = val.source || val;
        val = val.replace(/(^|[^\[])\^/g, '$1');
        regex = regex.replace(name, val);
        return this;
      },
      getRegex: function () {
        return new RegExp(regex, opt);
      }
    };
  }

  function cleanUrl(sanitize, base, href) {
    if (sanitize) {
      try {
        var prot = decodeURIComponent(unescape(href)).replace(/[^\w:]/g, '').toLowerCase();
      } catch (e) {
        return null;
      }

      if (prot.indexOf('javascript:') === 0 || prot.indexOf('vbscript:') === 0 || prot.indexOf('data:') === 0) {
        return null;
      }
    }

    if (base && !originIndependentUrl.test(href)) {
      href = resolveUrl(base, href);
    }

    try {
      href = encodeURI(href).replace(/%25/g, '%');
    } catch (e) {
      return null;
    }

    return href;
  }

  function resolveUrl(base, href) {
    if (!baseUrls[' ' + base]) {
      // we can ignore everything in base after the last slash of its path component,
      // but we might need to add _that_
      // https://tools.ietf.org/html/rfc3986#section-3
      if (/^[^:]+:\/*[^/]*$/.test(base)) {
        baseUrls[' ' + base] = base + '/';
      } else {
        baseUrls[' ' + base] = rtrim(base, '/', true);
      }
    }

    base = baseUrls[' ' + base];

    if (href.slice(0, 2) === '//') {
      return base.replace(/:[\s\S]*/, ':') + href;
    } else if (href.charAt(0) === '/') {
      return base.replace(/(:\/*[^/]*)[\s\S]*/, '$1') + href;
    } else {
      return base + href;
    }
  }

  var baseUrls = {};
  var originIndependentUrl = /^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;

  function noop() {}

  noop.exec = noop;

  function merge(obj) {
    var i = 1,
        target,
        key;

    for (; i < arguments.length; i++) {
      target = arguments[i];

      for (key in target) {
        if (Object.prototype.hasOwnProperty.call(target, key)) {
          obj[key] = target[key];
        }
      }
    }

    return obj;
  }

  function splitCells(tableRow, count) {
    // ensure that every cell-delimiting pipe has a space
    // before it to distinguish it from an escaped pipe
    var row = tableRow.replace(/\|/g, function (match, offset, str) {
      var escaped = false,
          curr = offset;

      while (--curr >= 0 && str[curr] === '\\') escaped = !escaped;

      if (escaped) {
        // odd number of slashes means | is escaped
        // so we leave it alone
        return '|';
      } else {
        // add space before unescaped |
        return ' |';
      }
    }),
        cells = row.split(/ \|/),
        i = 0;

    if (cells.length > count) {
      cells.splice(count);
    } else {
      while (cells.length < count) cells.push('');
    }

    for (; i < cells.length; i++) {
      // leading or trailing whitespace is ignored per the gfm spec
      cells[i] = cells[i].trim().replace(/\\\|/g, '|');
    }

    return cells;
  } // Remove trailing 'c's. Equivalent to str.replace(/c*$/, '').
  // /c*$/ is vulnerable to REDOS.
  // invert: Remove suffix of non-c chars instead. Default falsey.


  function rtrim(str, c, invert) {
    if (str.length === 0) {
      return '';
    } // Length of suffix matching the invert condition.


    var suffLen = 0; // Step left until we fail to match the invert condition.

    while (suffLen < str.length) {
      var currChar = str.charAt(str.length - suffLen - 1);

      if (currChar === c && !invert) {
        suffLen++;
      } else if (currChar !== c && invert) {
        suffLen++;
      } else {
        break;
      }
    }

    return str.substr(0, str.length - suffLen);
  }

  function findClosingBracket(str, b) {
    if (str.indexOf(b[1]) === -1) {
      return -1;
    }

    var level = 0;

    for (var i = 0; i < str.length; i++) {
      if (str[i] === '\\') {
        i++;
      } else if (str[i] === b[0]) {
        level++;
      } else if (str[i] === b[1]) {
        level--;

        if (level < 0) {
          return i;
        }
      }
    }

    return -1;
  }
  /**
   * Marked
   */


  function marked(src, opt, callback) {
    // throw error in case of non string input
    if (typeof src === 'undefined' || src === null) {
      throw new Error('marked(): input parameter is undefined or null');
    }

    if (typeof src !== 'string') {
      throw new Error('marked(): input parameter is of type ' + Object.prototype.toString.call(src) + ', string expected');
    }

    if (callback || typeof opt === 'function') {
      if (!callback) {
        callback = opt;
        opt = null;
      }

      opt = merge({}, marked.defaults, opt || {});
      var highlight = opt.highlight,
          tokens,
          pending,
          i = 0;

      try {
        tokens = Lexer.lex(src, opt);
      } catch (e) {
        return callback(e);
      }

      pending = tokens.length;

      var done = function (err) {
        if (err) {
          opt.highlight = highlight;
          return callback(err);
        }

        var out;

        try {
          out = Parser.parse(tokens, opt);
        } catch (e) {
          err = e;
        }

        opt.highlight = highlight;
        return err ? callback(err) : callback(null, out);
      };

      if (!highlight || highlight.length < 3) {
        return done();
      }

      delete opt.highlight;
      if (!pending) return done();

      for (; i < tokens.length; i++) {
        (function (token) {
          if (token.type !== 'code') {
            return --pending || done();
          }

          return highlight(token.text, token.lang, function (err, code) {
            if (err) return done(err);

            if (code == null || code === token.text) {
              return --pending || done();
            }

            token.text = code;
            token.escaped = true;
            --pending || done();
          });
        })(tokens[i]);
      }

      return;
    }

    try {
      if (opt) opt = merge({}, marked.defaults, opt);
      return Parser.parse(Lexer.lex(src, opt), opt);
    } catch (e) {
      e.message += '\nPlease report this to https://github.com/markedjs/marked.';

      if ((opt || marked.defaults).silent) {
        return '<p>An error occurred:</p><pre>' + escape(e.message + '', true) + '</pre>';
      }

      throw e;
    }
  }
  /**
   * Options
   */


  marked.options = marked.setOptions = function (opt) {
    merge(marked.defaults, opt);
    return marked;
  };

  marked.getDefaults = function () {
    return {
      baseUrl: null,
      breaks: false,
      gfm: true,
      headerIds: true,
      headerPrefix: '',
      highlight: null,
      langPrefix: 'language-',
      mangle: true,
      pedantic: false,
      renderer: new Renderer(),
      sanitize: false,
      sanitizer: null,
      silent: false,
      smartLists: false,
      smartypants: false,
      tables: true,
      xhtml: false
    };
  };

  marked.defaults = marked.getDefaults();
  /**
   * Expose
   */

  marked.Parser = Parser;
  marked.parser = Parser.parse;
  marked.Renderer = Renderer;
  marked.TextRenderer = TextRenderer;
  marked.Lexer = Lexer;
  marked.lexer = Lexer.lex;
  marked.InlineLexer = InlineLexer;
  marked.inlineLexer = InlineLexer.output;
  marked.Slugger = Slugger;
  marked.parse = marked;

  if (true) {
    module.exports = marked;
  } else {}
})(this || (typeof window !== 'undefined' ? window : global));
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if (typeof window === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),

/***/ "./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/babel-loader/lib/index.js?!./src/resources/markdown_worker.ts":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/workerize-loader/dist/rpc-worker-loader.js!./node_modules/babel-loader/lib??ref--4!./src/resources/markdown_worker.ts ***!
  \********************************************************************************************************************************************/
/*! exports provided: renderMarkdown */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderMarkdown", function() { return renderMarkdown; });
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! marked */ "./node_modules/marked/lib/marked.js");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! xss */ "./node_modules/xss/lib/index.js");
/* harmony import */ var xss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(xss__WEBPACK_IMPORTED_MODULE_1__);
 // @ts-ignore


let whiteListNormal;
let whiteListSvg;
const renderMarkdown = (content, markedOptions, hassOptions = {}) => {
  if (!whiteListNormal) {
    whiteListNormal = Object.assign({}, xss__WEBPACK_IMPORTED_MODULE_1___default.a.whiteList, {
      "ha-icon": ["icon"]
    });
  }

  let whiteList;

  if (hassOptions.allowSvg) {
    if (!whiteListSvg) {
      whiteListSvg = Object.assign({}, whiteListNormal, {
        svg: ["xmlns", "height", "width"],
        path: ["transform", "stroke", "d"]
      });
    }

    whiteList = whiteListSvg;
  } else {
    whiteList = whiteListNormal;
  }

  return xss__WEBPACK_IMPORTED_MODULE_1___default()(marked__WEBPACK_IMPORTED_MODULE_0___default()(content, markedOptions), {
    whiteList
  });
};
addEventListener('message', function (e) {var ref = e.data;var type = ref.type;var method = ref.method;var id = ref.id;var params = ref.params;var f,p;if (type === 'RPC' && method) {if (f = __webpack_exports__[method]) {p = Promise.resolve().then(function () { return f.apply(__webpack_exports__, params); });} else {p = Promise.reject('No such method');}p.then(function (result) {postMessage({type: 'RPC',id: id,result: result});}).catch(function (e) {var error = {message: e};if (e.stack) {error.message = e.message;error.stack = e.stack;error.name = e.name;}postMessage({type: 'RPC',id: id,error: error});});}});postMessage({type: 'RPC',method: 'ready'});

/***/ }),

/***/ "./node_modules/xss/lib/default.js":
/*!*****************************************!*\
  !*** ./node_modules/xss/lib/default.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * default settings
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var FilterCSS = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").FilterCSS;

var getDefaultCSSWhiteList = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").getDefaultWhiteList;

var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");

function getDefaultWhiteList() {
  return {
    a: ["target", "href", "title"],
    abbr: ["title"],
    address: [],
    area: ["shape", "coords", "href", "alt"],
    article: [],
    aside: [],
    audio: ["autoplay", "controls", "loop", "preload", "src"],
    b: [],
    bdi: ["dir"],
    bdo: ["dir"],
    big: [],
    blockquote: ["cite"],
    br: [],
    caption: [],
    center: [],
    cite: [],
    code: [],
    col: ["align", "valign", "span", "width"],
    colgroup: ["align", "valign", "span", "width"],
    dd: [],
    del: ["datetime"],
    details: ["open"],
    div: [],
    dl: [],
    dt: [],
    em: [],
    font: ["color", "size", "face"],
    footer: [],
    h1: [],
    h2: [],
    h3: [],
    h4: [],
    h5: [],
    h6: [],
    header: [],
    hr: [],
    i: [],
    img: ["src", "alt", "title", "width", "height"],
    ins: ["datetime"],
    li: [],
    mark: [],
    nav: [],
    ol: [],
    p: [],
    pre: [],
    s: [],
    section: [],
    small: [],
    span: [],
    sub: [],
    sup: [],
    strong: [],
    table: ["width", "border", "align", "valign"],
    tbody: ["align", "valign"],
    td: ["width", "rowspan", "colspan", "align", "valign"],
    tfoot: ["align", "valign"],
    th: ["width", "rowspan", "colspan", "align", "valign"],
    thead: ["align", "valign"],
    tr: ["rowspan", "align", "valign"],
    tt: [],
    u: [],
    ul: [],
    video: ["autoplay", "controls", "loop", "preload", "src", "height", "width"]
  };
}

var defaultCSSFilter = new FilterCSS();
/**
 * default onTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */

function onTag(tag, html, options) {} // do nothing

/**
 * default onIgnoreTag function
 *
 * @param {String} tag
 * @param {String} html
 * @param {Object} options
 * @return {String}
 */


function onIgnoreTag(tag, html, options) {} // do nothing

/**
 * default onTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */


function onTagAttr(tag, name, value) {} // do nothing

/**
 * default onIgnoreTagAttr function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @return {String}
 */


function onIgnoreTagAttr(tag, name, value) {} // do nothing

/**
 * default escapeHtml function
 *
 * @param {String} html
 */


function escapeHtml(html) {
  return html.replace(REGEXP_LT, "&lt;").replace(REGEXP_GT, "&gt;");
}
/**
 * default safeAttrValue function
 *
 * @param {String} tag
 * @param {String} name
 * @param {String} value
 * @param {Object} cssFilter
 * @return {String}
 */


function safeAttrValue(tag, name, value, cssFilter) {
  // unescape attribute value firstly
  value = friendlyAttrValue(value);

  if (name === "href" || name === "src") {
    // filter `href` and `src` attribute
    // only allow the value that starts with `http://` | `https://` | `mailto:` | `/` | `#`
    value = _.trim(value);
    if (value === "#") return "#";

    if (!(value.substr(0, 7) === "http://" || value.substr(0, 8) === "https://" || value.substr(0, 7) === "mailto:" || value.substr(0, 4) === "tel:" || value[0] === "#" || value[0] === "/")) {
      return "";
    }
  } else if (name === "background") {
    // filter `background` attribute (maybe no use)
    // `javascript:`
    REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

    if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
      return "";
    }
  } else if (name === "style") {
    // `expression()`
    REGEXP_DEFAULT_ON_TAG_ATTR_7.lastIndex = 0;

    if (REGEXP_DEFAULT_ON_TAG_ATTR_7.test(value)) {
      return "";
    } // `url()`


    REGEXP_DEFAULT_ON_TAG_ATTR_8.lastIndex = 0;

    if (REGEXP_DEFAULT_ON_TAG_ATTR_8.test(value)) {
      REGEXP_DEFAULT_ON_TAG_ATTR_4.lastIndex = 0;

      if (REGEXP_DEFAULT_ON_TAG_ATTR_4.test(value)) {
        return "";
      }
    }

    if (cssFilter !== false) {
      cssFilter = cssFilter || defaultCSSFilter;
      value = cssFilter.process(value);
    }
  } // escape `<>"` before returns


  value = escapeAttrValue(value);
  return value;
} // RegExp list


var REGEXP_LT = /</g;
var REGEXP_GT = />/g;
var REGEXP_QUOTE = /"/g;
var REGEXP_QUOTE_2 = /&quot;/g;
var REGEXP_ATTR_VALUE_1 = /&#([a-zA-Z0-9]*);?/gim;
var REGEXP_ATTR_VALUE_COLON = /&colon;?/gim;
var REGEXP_ATTR_VALUE_NEWLINE = /&newline;?/gim;
var REGEXP_DEFAULT_ON_TAG_ATTR_3 = /\/\*|\*\//gm;
var REGEXP_DEFAULT_ON_TAG_ATTR_4 = /((j\s*a\s*v\s*a|v\s*b|l\s*i\s*v\s*e)\s*s\s*c\s*r\s*i\s*p\s*t\s*|m\s*o\s*c\s*h\s*a)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_5 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_6 = /^[\s"'`]*(d\s*a\s*t\s*a\s*)\:\s*image\//gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_7 = /e\s*x\s*p\s*r\s*e\s*s\s*s\s*i\s*o\s*n\s*\(.*/gi;
var REGEXP_DEFAULT_ON_TAG_ATTR_8 = /u\s*r\s*l\s*\(.*/gi;
/**
 * escape doube quote
 *
 * @param {String} str
 * @return {String} str
 */

function escapeQuote(str) {
  return str.replace(REGEXP_QUOTE, "&quot;");
}
/**
 * unescape double quote
 *
 * @param {String} str
 * @return {String} str
 */


function unescapeQuote(str) {
  return str.replace(REGEXP_QUOTE_2, '"');
}
/**
 * escape html entities
 *
 * @param {String} str
 * @return {String}
 */


function escapeHtmlEntities(str) {
  return str.replace(REGEXP_ATTR_VALUE_1, function replaceUnicode(str, code) {
    return code[0] === "x" || code[0] === "X" ? String.fromCharCode(parseInt(code.substr(1), 16)) : String.fromCharCode(parseInt(code, 10));
  });
}
/**
 * escape html5 new danger entities
 *
 * @param {String} str
 * @return {String}
 */


function escapeDangerHtml5Entities(str) {
  return str.replace(REGEXP_ATTR_VALUE_COLON, ":").replace(REGEXP_ATTR_VALUE_NEWLINE, " ");
}
/**
 * clear nonprintable characters
 *
 * @param {String} str
 * @return {String}
 */


function clearNonPrintableCharacter(str) {
  var str2 = "";

  for (var i = 0, len = str.length; i < len; i++) {
    str2 += str.charCodeAt(i) < 32 ? " " : str.charAt(i);
  }

  return _.trim(str2);
}
/**
 * get friendly attribute value
 *
 * @param {String} str
 * @return {String}
 */


function friendlyAttrValue(str) {
  str = unescapeQuote(str);
  str = escapeHtmlEntities(str);
  str = escapeDangerHtml5Entities(str);
  str = clearNonPrintableCharacter(str);
  return str;
}
/**
 * unescape attribute value
 *
 * @param {String} str
 * @return {String}
 */


function escapeAttrValue(str) {
  str = escapeQuote(str);
  str = escapeHtml(str);
  return str;
}
/**
 * `onIgnoreTag` function for removing all the tags that are not in whitelist
 */


function onIgnoreTagStripAll() {
  return "";
}
/**
 * remove tag body
 * specify a `tags` list, if the tag is not in the `tags` list then process by the specify function (optional)
 *
 * @param {array} tags
 * @param {function} next
 */


function StripTagBody(tags, next) {
  if (typeof next !== "function") {
    next = function () {};
  }

  var isRemoveAllTag = !Array.isArray(tags);

  function isRemoveTag(tag) {
    if (isRemoveAllTag) return true;
    return _.indexOf(tags, tag) !== -1;
  }

  var removeList = [];
  var posStart = false;
  return {
    onIgnoreTag: function (tag, html, options) {
      if (isRemoveTag(tag)) {
        if (options.isClosing) {
          var ret = "[/removed]";
          var end = options.position + ret.length;
          removeList.push([posStart !== false ? posStart : options.position, end]);
          posStart = false;
          return ret;
        } else {
          if (!posStart) {
            posStart = options.position;
          }

          return "[removed]";
        }
      } else {
        return next(tag, html, options);
      }
    },
    remove: function (html) {
      var rethtml = "";
      var lastPos = 0;

      _.forEach(removeList, function (pos) {
        rethtml += html.slice(lastPos, pos[0]);
        lastPos = pos[1];
      });

      rethtml += html.slice(lastPos);
      return rethtml;
    }
  };
}
/**
 * remove html comments
 *
 * @param {String} html
 * @return {String}
 */


function stripCommentTag(html) {
  return html.replace(STRIP_COMMENT_TAG_REGEXP, "");
}

var STRIP_COMMENT_TAG_REGEXP = /<!--[\s\S]*?-->/g;
/**
 * remove invisible characters
 *
 * @param {String} html
 * @return {String}
 */

function stripBlankChar(html) {
  var chars = html.split("");
  chars = chars.filter(function (char) {
    var c = char.charCodeAt(0);
    if (c === 127) return false;

    if (c <= 31) {
      if (c === 10 || c === 13) return true;
      return false;
    }

    return true;
  });
  return chars.join("");
}

exports.whiteList = getDefaultWhiteList();
exports.getDefaultWhiteList = getDefaultWhiteList;
exports.onTag = onTag;
exports.onIgnoreTag = onIgnoreTag;
exports.onTagAttr = onTagAttr;
exports.onIgnoreTagAttr = onIgnoreTagAttr;
exports.safeAttrValue = safeAttrValue;
exports.escapeHtml = escapeHtml;
exports.escapeQuote = escapeQuote;
exports.unescapeQuote = unescapeQuote;
exports.escapeHtmlEntities = escapeHtmlEntities;
exports.escapeDangerHtml5Entities = escapeDangerHtml5Entities;
exports.clearNonPrintableCharacter = clearNonPrintableCharacter;
exports.friendlyAttrValue = friendlyAttrValue;
exports.escapeAttrValue = escapeAttrValue;
exports.onIgnoreTagStripAll = onIgnoreTagStripAll;
exports.StripTagBody = StripTagBody;
exports.stripCommentTag = stripCommentTag;
exports.stripBlankChar = stripBlankChar;
exports.cssFilter = defaultCSSFilter;
exports.getDefaultCSSWhiteList = getDefaultCSSWhiteList;

/***/ }),

/***/ "./node_modules/xss/lib/index.js":
/*!***************************************!*\
  !*** ./node_modules/xss/lib/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/xss/lib/default.js");

var parser = __webpack_require__(/*! ./parser */ "./node_modules/xss/lib/parser.js");

var FilterXSS = __webpack_require__(/*! ./xss */ "./node_modules/xss/lib/xss.js");
/**
 * filter xss function
 *
 * @param {String} html
 * @param {Object} options { whiteList, onTag, onTagAttr, onIgnoreTag, onIgnoreTagAttr, safeAttrValue, escapeHtml }
 * @return {String}
 */


function filterXSS(html, options) {
  var xss = new FilterXSS(options);
  return xss.process(html);
}

exports = module.exports = filterXSS;
exports.filterXSS = filterXSS;
exports.FilterXSS = FilterXSS;

for (var i in DEFAULT) exports[i] = DEFAULT[i];

for (var i in parser) exports[i] = parser[i]; // using `xss` on the browser, output `filterXSS` to the globals


if (typeof window !== "undefined") {
  window.filterXSS = module.exports;
} // using `xss` on the WebWorker, output `filterXSS` to the globals


function isWorkerEnv() {
  return typeof self !== 'undefined' && typeof DedicatedWorkerGlobalScope !== 'undefined' && self instanceof DedicatedWorkerGlobalScope;
}

if (isWorkerEnv()) {
  self.filterXSS = module.exports;
}

/***/ }),

/***/ "./node_modules/xss/lib/parser.js":
/*!****************************************!*\
  !*** ./node_modules/xss/lib/parser.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Simple HTML Parser
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");
/**
 * get tag name
 *
 * @param {String} html e.g. '<a hef="#">'
 * @return {String}
 */


function getTagName(html) {
  var i = _.spaceIndex(html);

  if (i === -1) {
    var tagName = html.slice(1, -1);
  } else {
    var tagName = html.slice(1, i + 1);
  }

  tagName = _.trim(tagName).toLowerCase();
  if (tagName.slice(0, 1) === "/") tagName = tagName.slice(1);
  if (tagName.slice(-1) === "/") tagName = tagName.slice(0, -1);
  return tagName;
}
/**
 * is close tag?
 *
 * @param {String} html 如：'<a hef="#">'
 * @return {Boolean}
 */


function isClosing(html) {
  return html.slice(0, 2) === "</";
}
/**
 * parse input html and returns processed html
 *
 * @param {String} html
 * @param {Function} onTag e.g. function (sourcePosition, position, tag, html, isClosing)
 * @param {Function} escapeHtml
 * @return {String}
 */


function parseTag(html, onTag, escapeHtml) {
  "user strict";

  var rethtml = "";
  var lastPos = 0;
  var tagStart = false;
  var quoteStart = false;
  var currentPos = 0;
  var len = html.length;
  var currentTagName = "";
  var currentHtml = "";

  for (currentPos = 0; currentPos < len; currentPos++) {
    var c = html.charAt(currentPos);

    if (tagStart === false) {
      if (c === "<") {
        tagStart = currentPos;
        continue;
      }
    } else {
      if (quoteStart === false) {
        if (c === "<") {
          rethtml += escapeHtml(html.slice(lastPos, currentPos));
          tagStart = currentPos;
          lastPos = currentPos;
          continue;
        }

        if (c === ">") {
          rethtml += escapeHtml(html.slice(lastPos, tagStart));
          currentHtml = html.slice(tagStart, currentPos + 1);
          currentTagName = getTagName(currentHtml);
          rethtml += onTag(tagStart, rethtml.length, currentTagName, currentHtml, isClosing(currentHtml));
          lastPos = currentPos + 1;
          tagStart = false;
          continue;
        }

        if ((c === '"' || c === "'") && html.charAt(currentPos - 1) === "=") {
          quoteStart = c;
          continue;
        }
      } else {
        if (c === quoteStart) {
          quoteStart = false;
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    rethtml += escapeHtml(html.substr(lastPos));
  }

  return rethtml;
}

var REGEXP_ILLEGAL_ATTR_NAME = /[^a-zA-Z0-9_:\.\-]/gim;
/**
 * parse input attributes and returns processed attributes
 *
 * @param {String} html e.g. `href="#" target="_blank"`
 * @param {Function} onAttr e.g. `function (name, value)`
 * @return {String}
 */

function parseAttr(html, onAttr) {
  "user strict";

  var lastPos = 0;
  var retAttrs = [];
  var tmpName = false;
  var len = html.length;

  function addAttr(name, value) {
    name = _.trim(name);
    name = name.replace(REGEXP_ILLEGAL_ATTR_NAME, "").toLowerCase();
    if (name.length < 1) return;
    var ret = onAttr(name, value || "");
    if (ret) retAttrs.push(ret);
  } // 逐个分析字符


  for (var i = 0; i < len; i++) {
    var c = html.charAt(i);
    var v, j;

    if (tmpName === false && c === "=") {
      tmpName = html.slice(lastPos, i);
      lastPos = i + 1;
      continue;
    }

    if (tmpName !== false) {
      if (i === lastPos && (c === '"' || c === "'") && html.charAt(i - 1) === "=") {
        j = html.indexOf(c, i + 1);

        if (j === -1) {
          break;
        } else {
          v = _.trim(html.slice(lastPos + 1, j));
          addAttr(tmpName, v);
          tmpName = false;
          i = j;
          lastPos = i + 1;
          continue;
        }
      }
    }

    if (/\s|\n|\t/.test(c)) {
      html = html.replace(/\s|\n|\t/g, " ");

      if (tmpName === false) {
        j = findNextEqual(html, i);

        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          addAttr(v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          i = j - 1;
          continue;
        }
      } else {
        j = findBeforeEqual(html, i - 1);

        if (j === -1) {
          v = _.trim(html.slice(lastPos, i));
          v = stripQuoteWrap(v);
          addAttr(tmpName, v);
          tmpName = false;
          lastPos = i + 1;
          continue;
        } else {
          continue;
        }
      }
    }
  }

  if (lastPos < html.length) {
    if (tmpName === false) {
      addAttr(html.slice(lastPos));
    } else {
      addAttr(tmpName, stripQuoteWrap(_.trim(html.slice(lastPos))));
    }
  }

  return _.trim(retAttrs.join(" "));
}

function findNextEqual(str, i) {
  for (; i < str.length; i++) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function findBeforeEqual(str, i) {
  for (; i > 0; i--) {
    var c = str[i];
    if (c === " ") continue;
    if (c === "=") return i;
    return -1;
  }
}

function isQuoteWrapString(text) {
  if (text[0] === '"' && text[text.length - 1] === '"' || text[0] === "'" && text[text.length - 1] === "'") {
    return true;
  } else {
    return false;
  }
}

function stripQuoteWrap(text) {
  if (isQuoteWrapString(text)) {
    return text.substr(1, text.length - 2);
  } else {
    return text;
  }
}

exports.parseTag = parseTag;
exports.parseAttr = parseAttr;

/***/ }),

/***/ "./node_modules/xss/lib/util.js":
/*!**************************************!*\
  !*** ./node_modules/xss/lib/util.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  indexOf: function (arr, item) {
    var i, j;

    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },
  forEach: function (arr, fn, scope) {
    var i, j;

    if (Array.prototype.forEach) {
      return arr.forEach(fn, scope);
    }

    for (i = 0, j = arr.length; i < j; i++) {
      fn.call(scope, arr[i], i, arr);
    }
  },
  trim: function (str) {
    if (String.prototype.trim) {
      return str.trim();
    }

    return str.replace(/(^\s*)|(\s*$)/g, "");
  },
  spaceIndex: function (str) {
    var reg = /\s|\n|\t/;
    var match = reg.exec(str);
    return match ? match.index : -1;
  }
};

/***/ }),

/***/ "./node_modules/xss/lib/xss.js":
/*!*************************************!*\
  !*** ./node_modules/xss/lib/xss.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * filter xss
 *
 * @author Zongmin Lei<leizongmin@gmail.com>
 */
var FilterCSS = __webpack_require__(/*! cssfilter */ "./node_modules/cssfilter/lib/index.js").FilterCSS;

var DEFAULT = __webpack_require__(/*! ./default */ "./node_modules/xss/lib/default.js");

var parser = __webpack_require__(/*! ./parser */ "./node_modules/xss/lib/parser.js");

var parseTag = parser.parseTag;
var parseAttr = parser.parseAttr;

var _ = __webpack_require__(/*! ./util */ "./node_modules/xss/lib/util.js");
/**
 * returns `true` if the input value is `undefined` or `null`
 *
 * @param {Object} obj
 * @return {Boolean}
 */


function isNull(obj) {
  return obj === undefined || obj === null;
}
/**
 * get attributes for a tag
 *
 * @param {String} html
 * @return {Object}
 *   - {String} html
 *   - {Boolean} closing
 */


function getAttrs(html) {
  var i = _.spaceIndex(html);

  if (i === -1) {
    return {
      html: "",
      closing: html[html.length - 2] === "/"
    };
  }

  html = _.trim(html.slice(i + 1, -1));
  var isClosing = html[html.length - 1] === "/";
  if (isClosing) html = _.trim(html.slice(0, -1));
  return {
    html: html,
    closing: isClosing
  };
}
/**
 * shallow copy
 *
 * @param {Object} obj
 * @return {Object}
 */


function shallowCopyObject(obj) {
  var ret = {};

  for (var i in obj) {
    ret[i] = obj[i];
  }

  return ret;
}
/**
 * FilterXSS class
 *
 * @param {Object} options
 *        whiteList, onTag, onTagAttr, onIgnoreTag,
 *        onIgnoreTagAttr, safeAttrValue, escapeHtml
 *        stripIgnoreTagBody, allowCommentTag, stripBlankChar
 *        css{whiteList, onAttr, onIgnoreAttr} `css=false` means don't use `cssfilter`
 */


function FilterXSS(options) {
  options = shallowCopyObject(options || {});

  if (options.stripIgnoreTag) {
    if (options.onIgnoreTag) {
      console.error('Notes: cannot use these two options "stripIgnoreTag" and "onIgnoreTag" at the same time');
    }

    options.onIgnoreTag = DEFAULT.onIgnoreTagStripAll;
  }

  options.whiteList = options.whiteList || DEFAULT.whiteList;
  options.onTag = options.onTag || DEFAULT.onTag;
  options.onTagAttr = options.onTagAttr || DEFAULT.onTagAttr;
  options.onIgnoreTag = options.onIgnoreTag || DEFAULT.onIgnoreTag;
  options.onIgnoreTagAttr = options.onIgnoreTagAttr || DEFAULT.onIgnoreTagAttr;
  options.safeAttrValue = options.safeAttrValue || DEFAULT.safeAttrValue;
  options.escapeHtml = options.escapeHtml || DEFAULT.escapeHtml;
  this.options = options;

  if (options.css === false) {
    this.cssFilter = false;
  } else {
    options.css = options.css || {};
    this.cssFilter = new FilterCSS(options.css);
  }
}
/**
 * start process and returns result
 *
 * @param {String} html
 * @return {String}
 */


FilterXSS.prototype.process = function (html) {
  // compatible with the input
  html = html || "";
  html = html.toString();
  if (!html) return "";
  var me = this;
  var options = me.options;
  var whiteList = options.whiteList;
  var onTag = options.onTag;
  var onIgnoreTag = options.onIgnoreTag;
  var onTagAttr = options.onTagAttr;
  var onIgnoreTagAttr = options.onIgnoreTagAttr;
  var safeAttrValue = options.safeAttrValue;
  var escapeHtml = options.escapeHtml;
  var cssFilter = me.cssFilter; // remove invisible characters

  if (options.stripBlankChar) {
    html = DEFAULT.stripBlankChar(html);
  } // remove html comments


  if (!options.allowCommentTag) {
    html = DEFAULT.stripCommentTag(html);
  } // if enable stripIgnoreTagBody


  var stripIgnoreTagBody = false;

  if (options.stripIgnoreTagBody) {
    var stripIgnoreTagBody = DEFAULT.StripTagBody(options.stripIgnoreTagBody, onIgnoreTag);
    onIgnoreTag = stripIgnoreTagBody.onIgnoreTag;
  }

  var retHtml = parseTag(html, function (sourcePosition, position, tag, html, isClosing) {
    var info = {
      sourcePosition: sourcePosition,
      position: position,
      isClosing: isClosing,
      isWhite: whiteList.hasOwnProperty(tag)
    }; // call `onTag()`

    var ret = onTag(tag, html, info);
    if (!isNull(ret)) return ret;

    if (info.isWhite) {
      if (info.isClosing) {
        return "</" + tag + ">";
      }

      var attrs = getAttrs(html);
      var whiteAttrList = whiteList[tag];
      var attrsHtml = parseAttr(attrs.html, function (name, value) {
        // call `onTagAttr()`
        var isWhiteAttr = _.indexOf(whiteAttrList, name) !== -1;
        var ret = onTagAttr(tag, name, value, isWhiteAttr);
        if (!isNull(ret)) return ret;

        if (isWhiteAttr) {
          // call `safeAttrValue()`
          value = safeAttrValue(tag, name, value, cssFilter);

          if (value) {
            return name + '="' + value + '"';
          } else {
            return name;
          }
        } else {
          // call `onIgnoreTagAttr()`
          var ret = onIgnoreTagAttr(tag, name, value, isWhiteAttr);
          if (!isNull(ret)) return ret;
          return;
        }
      }); // build new tag html

      var html = "<" + tag;
      if (attrsHtml) html += " " + attrsHtml;
      if (attrs.closing) html += " /";
      html += ">";
      return html;
    } else {
      // call `onIgnoreTag()`
      var ret = onIgnoreTag(tag, html, info);
      if (!isNull(ret)) return ret;
      return escapeHtml(html);
    }
  }, escapeHtml); // if enable stripIgnoreTagBody

  if (stripIgnoreTagBody) {
    retHtml = stripIgnoreTagBody.remove(retHtml);
  }

  return retHtml;
};

module.exports = FilterXSS;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYTlmODAzNjhjZWM5NGQ0ZWFjZWYud29ya2VyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL2Nzcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzZmlsdGVyL2xpYi9kZWZhdWx0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL2luZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3NmaWx0ZXIvbGliL3BhcnNlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzZmlsdGVyL2xpYi91dGlsLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9tYXJrZWQvbGliL21hcmtlZC5qcyIsIndlYnBhY2s6Ly8vKHdlYnBhY2spL2J1aWxkaW4vZ2xvYmFsLmpzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvbWFya2Rvd25fd29ya2VyLnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3MvbGliL2RlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIvcGFyc2VyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy94c3MvbGliL3V0aWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3hzcy9saWIveHNzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL2Zyb250ZW5kX2xhdGVzdC9cIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9ub2RlX21vZHVsZXMvd29ya2VyaXplLWxvYWRlci9kaXN0L3JwYy13b3JrZXItbG9hZGVyLmpzIS4vbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanM/IS4vc3JjL3Jlc291cmNlcy9tYXJrZG93bl93b3JrZXIudHNcIik7XG4iLCIvKipcbiAqIGNzc2ZpbHRlclxuICpcbiAqIEBhdXRob3Ig6ICB6Zu3PGxlaXpvbmdtaW5AZ21haWwuY29tPlxuICovXG5cbnZhciBERUZBVUxUID0gcmVxdWlyZSgnLi9kZWZhdWx0Jyk7XG52YXIgcGFyc2VTdHlsZSA9IHJlcXVpcmUoJy4vcGFyc2VyJyk7XG52YXIgXyA9IHJlcXVpcmUoJy4vdXRpbCcpO1xuXG5cbi8qKlxuICog6L+U5Zue5YC85piv5ZCm5Li656m6XG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdWxsIChvYmopIHtcbiAgcmV0dXJuIChvYmogPT09IHVuZGVmaW5lZCB8fCBvYmogPT09IG51bGwpO1xufVxuXG4vKipcbiAqIOa1heaLt+i0neWvueixoVxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmpcbiAqIEByZXR1cm4ge09iamVjdH1cbiAqL1xuZnVuY3Rpb24gc2hhbGxvd0NvcHlPYmplY3QgKG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgcmV0W2ldID0gb2JqW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICog5Yib5bu6Q1NT6L+H5ruk5ZmoXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgLSB7T2JqZWN0fSB3aGl0ZUxpc3RcbiAqICAgLSB7RnVuY3Rpb259IG9uQXR0clxuICogICAtIHtGdW5jdGlvbn0gb25JZ25vcmVBdHRyXG4gKiAgIC0ge0Z1bmN0aW9ufSBzYWZlQXR0clZhbHVlXG4gKi9cbmZ1bmN0aW9uIEZpbHRlckNTUyAob3B0aW9ucykge1xuICBvcHRpb25zID0gc2hhbGxvd0NvcHlPYmplY3Qob3B0aW9ucyB8fCB7fSk7XG4gIG9wdGlvbnMud2hpdGVMaXN0ID0gb3B0aW9ucy53aGl0ZUxpc3QgfHwgREVGQVVMVC53aGl0ZUxpc3Q7XG4gIG9wdGlvbnMub25BdHRyID0gb3B0aW9ucy5vbkF0dHIgfHwgREVGQVVMVC5vbkF0dHI7XG4gIG9wdGlvbnMub25JZ25vcmVBdHRyID0gb3B0aW9ucy5vbklnbm9yZUF0dHIgfHwgREVGQVVMVC5vbklnbm9yZUF0dHI7XG4gIG9wdGlvbnMuc2FmZUF0dHJWYWx1ZSA9IG9wdGlvbnMuc2FmZUF0dHJWYWx1ZSB8fCBERUZBVUxULnNhZmVBdHRyVmFsdWU7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG59XG5cbkZpbHRlckNTUy5wcm90b3R5cGUucHJvY2VzcyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8g5YW85a655ZCE56eN5aWH6JGp6L6T5YWlXG4gIGNzcyA9IGNzcyB8fCAnJztcbiAgY3NzID0gY3NzLnRvU3RyaW5nKCk7XG4gIGlmICghY3NzKSByZXR1cm4gJyc7XG5cbiAgdmFyIG1lID0gdGhpcztcbiAgdmFyIG9wdGlvbnMgPSBtZS5vcHRpb25zO1xuICB2YXIgd2hpdGVMaXN0ID0gb3B0aW9ucy53aGl0ZUxpc3Q7XG4gIHZhciBvbkF0dHIgPSBvcHRpb25zLm9uQXR0cjtcbiAgdmFyIG9uSWdub3JlQXR0ciA9IG9wdGlvbnMub25JZ25vcmVBdHRyO1xuICB2YXIgc2FmZUF0dHJWYWx1ZSA9IG9wdGlvbnMuc2FmZUF0dHJWYWx1ZTtcblxuICB2YXIgcmV0Q1NTID0gcGFyc2VTdHlsZShjc3MsIGZ1bmN0aW9uIChzb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24sIG5hbWUsIHZhbHVlLCBzb3VyY2UpIHtcblxuICAgIHZhciBjaGVjayA9IHdoaXRlTGlzdFtuYW1lXTtcbiAgICB2YXIgaXNXaGl0ZSA9IGZhbHNlO1xuICAgIGlmIChjaGVjayA9PT0gdHJ1ZSkgaXNXaGl0ZSA9IGNoZWNrO1xuICAgIGVsc2UgaWYgKHR5cGVvZiBjaGVjayA9PT0gJ2Z1bmN0aW9uJykgaXNXaGl0ZSA9IGNoZWNrKHZhbHVlKTtcbiAgICBlbHNlIGlmIChjaGVjayBpbnN0YW5jZW9mIFJlZ0V4cCkgaXNXaGl0ZSA9IGNoZWNrLnRlc3QodmFsdWUpO1xuICAgIGlmIChpc1doaXRlICE9PSB0cnVlKSBpc1doaXRlID0gZmFsc2U7XG5cbiAgICAvLyDlpoLmnpzov4fmu6TlkI4gdmFsdWUg5Li656m65YiZ55u05o6l5b+955WlXG4gICAgdmFsdWUgPSBzYWZlQXR0clZhbHVlKG5hbWUsIHZhbHVlKTtcbiAgICBpZiAoIXZhbHVlKSByZXR1cm47XG5cbiAgICB2YXIgb3B0cyA9IHtcbiAgICAgIHBvc2l0aW9uOiBwb3NpdGlvbixcbiAgICAgIHNvdXJjZVBvc2l0aW9uOiBzb3VyY2VQb3NpdGlvbixcbiAgICAgIHNvdXJjZTogc291cmNlLFxuICAgICAgaXNXaGl0ZTogaXNXaGl0ZVxuICAgIH07XG5cbiAgICBpZiAoaXNXaGl0ZSkge1xuXG4gICAgICB2YXIgcmV0ID0gb25BdHRyKG5hbWUsIHZhbHVlLCBvcHRzKTtcbiAgICAgIGlmIChpc051bGwocmV0KSkge1xuICAgICAgICByZXR1cm4gbmFtZSArICc6JyArIHZhbHVlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgIH1cblxuICAgIH0gZWxzZSB7XG5cbiAgICAgIHZhciByZXQgPSBvbklnbm9yZUF0dHIobmFtZSwgdmFsdWUsIG9wdHMpO1xuICAgICAgaWYgKCFpc051bGwocmV0KSkge1xuICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgfVxuXG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gcmV0Q1NTO1xufTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IEZpbHRlckNTUztcbiIsIi8qKlxuICogY3NzZmlsdGVyXG4gKlxuICogQGF1dGhvciDogIHpm7c8bGVpem9uZ21pbkBnbWFpbC5jb20+XG4gKi9cblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFdoaXRlTGlzdCAoKSB7XG4gIC8vIOeZveWQjeWNleWAvOivtOaYju+8mlxuICAvLyB0cnVlOiDlhYHorrjor6XlsZ7mgKdcbiAgLy8gRnVuY3Rpb246IGZ1bmN0aW9uICh2YWwpIHsgfSDov5Tlm550cnVl6KGo56S65YWB6K646K+l5bGe5oCn77yM5YW25LuW5YC85Z2H6KGo56S65LiN5YWB6K64XG4gIC8vIFJlZ0V4cDogcmVnZXhwLnRlc3QodmFsKSDov5Tlm550cnVl6KGo56S65YWB6K646K+l5bGe5oCn77yM5YW25LuW5YC85Z2H6KGo56S65LiN5YWB6K64XG4gIC8vIOmZpOS4iumdouWIl+WHuueahOWAvOWkluWdh+ihqOekuuS4jeWFgeiuuFxuICB2YXIgd2hpdGVMaXN0ID0ge307XG5cbiAgd2hpdGVMaXN0WydhbGlnbi1jb250ZW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2FsaWduLWl0ZW1zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2FsaWduLXNlbGYnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnYWxpZ25tZW50LWFkanVzdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydhbGlnbm1lbnQtYmFzZWxpbmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBiYXNlbGluZVxuICB3aGl0ZUxpc3RbJ2FsbCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydhbmNob3ItcG9pbnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi1kZWxheSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydhbmltYXRpb24tZGlyZWN0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLWR1cmF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2FuaW1hdGlvbi1maWxsLW1vZGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDFcbiAgd2hpdGVMaXN0WydhbmltYXRpb24tbmFtZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydhbmltYXRpb24tcGxheS1zdGF0ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHJ1bm5pbmdcbiAgd2hpdGVMaXN0WydhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZWFzZVxuICB3aGl0ZUxpc3RbJ2F6aW11dGgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBjZW50ZXJcbiAgd2hpdGVMaXN0WydiYWNrZmFjZS12aXNpYmlsaXR5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogdmlzaWJsZVxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydiYWNrZ3JvdW5kLWF0dGFjaG1lbnQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHNjcm9sbFxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtY2xpcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYm9yZGVyLWJveFxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHRyYW5zcGFyZW50XG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1pbWFnZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtb3JpZ2luJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBwYWRkaW5nLWJveFxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtcG9zaXRpb24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDAlIDAlXG4gIHdoaXRlTGlzdFsnYmFja2dyb3VuZC1yZXBlYXQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHJlcGVhdFxuICB3aGl0ZUxpc3RbJ2JhY2tncm91bmQtc2l6ZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2Jhc2VsaW5lLXNoaWZ0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYmFzZWxpbmVcbiAgd2hpdGVMaXN0WydiaW5kaW5nJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2JsZWVkJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNnB0XG4gIHdoaXRlTGlzdFsnYm9va21hcmstbGFiZWwnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBjb250ZW50KClcbiAgd2hpdGVMaXN0Wydib29rbWFyay1sZXZlbCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib29rbWFyay1zdGF0ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG9wZW5cbiAgd2hpdGVMaXN0Wydib3JkZXInXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3JkZXItYm90dG9tJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWJvdHRvbS1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY3VycmVudCBjb2xvclxuICB3aGl0ZUxpc3RbJ2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1cyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2JvcmRlci1ib3R0b20tc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3JkZXItYm90dG9tLXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wydib3JkZXItY29sbGFwc2UnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHNlcGFyYXRlXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWltYWdlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWltYWdlLW91dHNldCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ2JvcmRlci1pbWFnZS1yZXBlYXQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IHN0cmV0Y2hcbiAgd2hpdGVMaXN0Wydib3JkZXItaW1hZ2Utc2xpY2UnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDEwMCVcbiAgd2hpdGVMaXN0Wydib3JkZXItaW1hZ2Utc291cmNlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWltYWdlLXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAxXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWxlZnQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3JkZXItbGVmdC1jb2xvciddID0gdHJ1ZTsgLy8gZGVmYXVsdDogY3VycmVudCBjb2xvclxuICB3aGl0ZUxpc3RbJ2JvcmRlci1sZWZ0LXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm9yZGVyLWxlZnQtd2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1yYWRpdXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydib3JkZXItcmlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydib3JkZXItcmlnaHQtY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGN1cnJlbnQgY29sb3JcbiAgd2hpdGVMaXN0Wydib3JkZXItcmlnaHQtc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3JkZXItcmlnaHQtd2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ2JvcmRlci1zcGFjaW5nJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXRvcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2JvcmRlci10b3AtY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGN1cnJlbnQgY29sb3JcbiAgd2hpdGVMaXN0Wydib3JkZXItdG9wLWxlZnQtcmFkaXVzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXRvcC1yaWdodC1yYWRpdXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydib3JkZXItdG9wLXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXRvcC13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnYm9yZGVyLXdpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnYm90dG9tJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2JveC1kZWNvcmF0aW9uLWJyZWFrJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBzbGljZVxuICB3aGl0ZUxpc3RbJ2JveC1zaGFkb3cnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydib3gtc2l6aW5nJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjb250ZW50LWJveFxuICB3aGl0ZUxpc3RbJ2JveC1zbmFwJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnYm94LXN1cHByZXNzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBzaG93XG4gIHdoaXRlTGlzdFsnYnJlYWstYWZ0ZXInXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydicmVhay1iZWZvcmUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydicmVhay1pbnNpZGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydjYXB0aW9uLXNpZGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiB0b3BcbiAgd2hpdGVMaXN0WydjaGFpbnMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY2xlYXInXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydjbGlwJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2NsaXAtcGF0aCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydjbGlwLXJ1bGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub256ZXJvXG4gIHdoaXRlTGlzdFsnY29sb3InXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGltcGxlbWVudGF0aW9uIGRlcGVuZGVudFxuICB3aGl0ZUxpc3RbJ2NvbG9yLWludGVycG9sYXRpb24tZmlsdGVycyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2NvbHVtbi1jb3VudCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydjb2x1bW4tZmlsbCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJhbGFuY2VcbiAgd2hpdGVMaXN0Wydjb2x1bW4tZ2FwJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnY29sdW1uLXJ1bGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnY29sdW1uLXJ1bGUtY29sb3InXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBjdXJyZW50IGNvbG9yXG4gIHdoaXRlTGlzdFsnY29sdW1uLXJ1bGUtc3R5bGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBtZWRpdW1cbiAgd2hpdGVMaXN0Wydjb2x1bW4tcnVsZS13aWR0aCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ2NvbHVtbi1zcGFuJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2NvbHVtbi13aWR0aCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydjb2x1bW5zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2NvbnRhaW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY29udGVudCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2NvdW50ZXItaW5jcmVtZW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2NvdW50ZXItcmVzZXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY291bnRlci1zZXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY3JvcCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydjdWUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnY3VlLWFmdGVyJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2N1ZS1iZWZvcmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnY3Vyc29yJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2RpcmVjdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGx0clxuICB3aGl0ZUxpc3RbJ2Rpc3BsYXknXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydkaXNwbGF5LWluc2lkZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2Rpc3BsYXktbGlzdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2Rpc3BsYXktb3V0c2lkZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogaW5saW5lLWxldmVsXG4gIHdoaXRlTGlzdFsnZG9taW5hbnQtYmFzZWxpbmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZWxldmF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbGV2ZWxcbiAgd2hpdGVMaXN0WydlbXB0eS1jZWxscyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHNob3dcbiAgd2hpdGVMaXN0WydmaWx0ZXInXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZmxleCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydmbGV4LWJhc2lzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2ZsZXgtZGlyZWN0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogcm93XG4gIHdoaXRlTGlzdFsnZmxleC1mbG93J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2ZsZXgtZ3JvdyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydmbGV4LXNocmluayddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDFcbiAgd2hpdGVMaXN0WydmbGV4LXdyYXAnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3dyYXBcbiAgd2hpdGVMaXN0WydmbG9hdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydmbG9hdC1vZmZzZXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwIDBcbiAgd2hpdGVMaXN0WydmbG9vZC1jb2xvciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJsYWNrXG4gIHdoaXRlTGlzdFsnZmxvb2Qtb3BhY2l0eSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDFcbiAgd2hpdGVMaXN0WydmbG93LWZyb20nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZmxvdy1pbnRvJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2ZvbnQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wydmb250LWZhbWlseSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XG4gIHdoaXRlTGlzdFsnZm9udC1mZWF0dXJlLXNldHRpbmdzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LWtlcm5pbmcnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wydmb250LWxhbmd1YWdlLW92ZXJyaWRlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXNpemUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ2ZvbnQtc2l6ZS1hZGp1c3QnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wydmb250LXN0cmV0Y2gnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtc3R5bGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtc3ludGhlc2lzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiB3ZWlnaHQgc3R5bGVcbiAgd2hpdGVMaXN0Wydmb250LXZhcmlhbnQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtdmFyaWFudC1hbHRlcm5hdGVzJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXZhcmlhbnQtY2FwcyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnZm9udC12YXJpYW50LWVhc3QtYXNpYW4nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtdmFyaWFudC1saWdhdHVyZXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtdmFyaWFudC1udW1lcmljJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wydmb250LXZhcmlhbnQtcG9zaXRpb24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ZvbnQtd2VpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydncmlkJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ2dyaWQtYXJlYSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydncmlkLWF1dG8tY29sdW1ucyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydncmlkLWF1dG8tZmxvdyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydncmlkLWF1dG8tcm93cyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydncmlkLWNvbHVtbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydncmlkLWNvbHVtbi1lbmQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZ3JpZC1jb2x1bW4tc3RhcnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnZ3JpZC1yb3cnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZ3JpZC1yb3ctZW5kJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2dyaWQtcm93LXN0YXJ0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2dyaWQtdGVtcGxhdGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnZ3JpZC10ZW1wbGF0ZS1hcmVhcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydncmlkLXRlbXBsYXRlLWNvbHVtbnMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnZ3JpZC10ZW1wbGF0ZS1yb3dzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2hhbmdpbmctcHVuY3R1YXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnaGVpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnaHlwaGVucyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1hbnVhbFxuICB3aGl0ZUxpc3RbJ2ljb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnaW1hZ2Utb3JpZW50YXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnaW1hZ2UtcmVzb2x1dGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2ltZS1tb2RlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2luaXRpYWwtbGV0dGVycyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2lubGluZS1ib3gtYWxpZ24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBsYXN0XG4gIHdoaXRlTGlzdFsnanVzdGlmeS1jb250ZW50J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2p1c3RpZnktaXRlbXMnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnanVzdGlmeS1zZWxmJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2xlZnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbGV0dGVyLXNwYWNpbmcnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ2xpZ2h0aW5nLWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiB3aGl0ZVxuICB3aGl0ZUxpc3RbJ2xpbmUtYm94LWNvbnRhaW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBibG9jayBpbmxpbmUgcmVwbGFjZWRcbiAgd2hpdGVMaXN0WydsaW5lLWJyZWFrJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ2xpbmUtZ3JpZCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1hdGNoLXBhcmVudFxuICB3aGl0ZUxpc3RbJ2xpbmUtaGVpZ2h0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnbGluZS1zbmFwJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2xpbmUtc3RhY2tpbmcnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnbGluZS1zdGFja2luZy1ydWJ5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZXhjbHVkZS1ydWJ5XG4gIHdoaXRlTGlzdFsnbGluZS1zdGFja2luZy1zaGlmdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGNvbnNpZGVyLXNoaWZ0c1xuICB3aGl0ZUxpc3RbJ2xpbmUtc3RhY2tpbmctc3RyYXRlZ3knXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBpbmxpbmUtbGluZS1oZWlnaHRcbiAgd2hpdGVMaXN0WydsaXN0LXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnbGlzdC1zdHlsZS1pbWFnZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ2xpc3Qtc3R5bGUtcG9zaXRpb24nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG91dHNpZGVcbiAgd2hpdGVMaXN0WydsaXN0LXN0eWxlLXR5cGUnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRpc2NcbiAgd2hpdGVMaXN0WydtYXJnaW4nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0WydtYXJnaW4tYm90dG9tJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnbWFyZ2luLWxlZnQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydtYXJnaW4tcmlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydtYXJnaW4tdG9wJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnbWFya2VyLW9mZnNldCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydtYXJrZXItc2lkZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGxpc3QtaXRlbVxuICB3aGl0ZUxpc3RbJ21hcmtzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ21hc2snXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBib3JkZXItYm94XG4gIHdoaXRlTGlzdFsnbWFzay1ib3gnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBzZWUgaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnbWFzay1ib3gtb3V0c2V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ21hc2stYm94LXJlcGVhdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHN0cmV0Y2hcbiAgd2hpdGVMaXN0WydtYXNrLWJveC1zbGljZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDAgZmlsbFxuICB3aGl0ZUxpc3RbJ21hc2stYm94LXNvdXJjZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydtYXNrLWJveC13aWR0aCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydtYXNrLWNsaXAnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBib3JkZXItYm94XG4gIHdoaXRlTGlzdFsnbWFzay1pbWFnZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydtYXNrLW9yaWdpbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGJvcmRlci1ib3hcbiAgd2hpdGVMaXN0WydtYXNrLXBvc2l0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogY2VudGVyXG4gIHdoaXRlTGlzdFsnbWFzay1yZXBlYXQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBuby1yZXBlYXRcbiAgd2hpdGVMaXN0WydtYXNrLXNpemUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBib3JkZXItYm94XG4gIHdoaXRlTGlzdFsnbWFzay1zb3VyY2UtdHlwZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydtYXNrLXR5cGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBsdW1pbmFuY2VcbiAgd2hpdGVMaXN0WydtYXgtaGVpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnbWF4LWxpbmVzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ21heC13aWR0aCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ21pbi1oZWlnaHQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydtaW4td2lkdGgnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wydtb3ZlLXRvJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnbmF2LWRvd24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnbmF2LWluZGV4J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ25hdi1sZWZ0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ25hdi1yaWdodCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WyduYXYtdXAnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnb2JqZWN0LWZpdCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGZpbGxcbiAgd2hpdGVMaXN0WydvYmplY3QtcG9zaXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA1MCUgNTAlXG4gIHdoaXRlTGlzdFsnb3BhY2l0eSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDFcbiAgd2hpdGVMaXN0WydvcmRlciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0WydvcnBoYW5zJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMlxuICB3aGl0ZUxpc3RbJ291dGxpbmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsnb3V0bGluZS1jb2xvciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGludmVydFxuICB3aGl0ZUxpc3RbJ291dGxpbmUtb2Zmc2V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ291dGxpbmUtc3R5bGUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsnb3V0bGluZS13aWR0aCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ292ZXJmbG93J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ292ZXJmbG93LXdyYXAnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0WydvdmVyZmxvdy14J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogdmlzaWJsZVxuICB3aGl0ZUxpc3RbJ292ZXJmbG93LXknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiB2aXNpYmxlXG4gIHdoaXRlTGlzdFsncGFkZGluZyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogZGVwZW5kaW5nIG9uIGluZGl2aWR1YWwgcHJvcGVydGllc1xuICB3aGl0ZUxpc3RbJ3BhZGRpbmctYm90dG9tJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsncGFkZGluZy1sZWZ0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsncGFkZGluZy1yaWdodCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3BhZGRpbmctdG9wJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsncGFnZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydwYWdlLWJyZWFrLWFmdGVyJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3BhZ2UtYnJlYWstYmVmb3JlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3BhZ2UtYnJlYWstaW5zaWRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3BhZ2UtcG9saWN5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogc3RhcnRcbiAgd2hpdGVMaXN0WydwYXVzZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGltcGxlbWVudGF0aW9uIGRlcGVuZGVudFxuICB3aGl0ZUxpc3RbJ3BhdXNlLWFmdGVyJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XG4gIHdoaXRlTGlzdFsncGF1c2UtYmVmb3JlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogaW1wbGVtZW50YXRpb24gZGVwZW5kZW50XG4gIHdoaXRlTGlzdFsncGVyc3BlY3RpdmUnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsncGVyc3BlY3RpdmUtb3JpZ2luJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNTAlIDUwJVxuICB3aGl0ZUxpc3RbJ3BpdGNoJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsncGl0Y2gtcmFuZ2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA1MFxuICB3aGl0ZUxpc3RbJ3BsYXktZHVyaW5nJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3Bvc2l0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogc3RhdGljXG4gIHdoaXRlTGlzdFsncHJlc2VudGF0aW9uLWxldmVsJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMFxuICB3aGl0ZUxpc3RbJ3F1b3RlcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IHRleHRcbiAgd2hpdGVMaXN0WydyZWdpb24tZnJhZ21lbnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncmVzaXplJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3Jlc3QnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsncmVzdC1hZnRlciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydyZXN0LWJlZm9yZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydyaWNobmVzcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDUwXG4gIHdoaXRlTGlzdFsncmlnaHQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsncm90YXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsncm90YXRpb24tcG9pbnQnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiA1MCUgNTAlXG4gIHdoaXRlTGlzdFsncnVieS1hbGlnbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydydWJ5LW1lcmdlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogc2VwYXJhdGVcbiAgd2hpdGVMaXN0WydydWJ5LXBvc2l0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYmVmb3JlXG4gIHdoaXRlTGlzdFsnc2hhcGUtaW1hZ2UtdGhyZXNob2xkJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMC4wXG4gIHdoaXRlTGlzdFsnc2hhcGUtb3V0c2lkZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0WydzaGFwZS1tYXJnaW4nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiAwXG4gIHdoaXRlTGlzdFsnc2l6ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydzcGVhayddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0WydzcGVhay1hcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3NwZWFrLWhlYWRlciddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG9uY2VcbiAgd2hpdGVMaXN0WydzcGVhay1udW1lcmFsJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogY29udGludW91c1xuICB3aGl0ZUxpc3RbJ3NwZWFrLXB1bmN0dWF0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3NwZWVjaC1yYXRlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsnc3RyZXNzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNTBcbiAgd2hpdGVMaXN0WydzdHJpbmctc2V0J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RhYi1zaXplJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogOFxuICB3aGl0ZUxpc3RbJ3RhYmxlLWxheW91dCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd0ZXh0LWFsaWduJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBzdGFydFxuICB3aGl0ZUxpc3RbJ3RleHQtYWxpZ24tbGFzdCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3RleHQtY29tYmluZS11cHJpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndGV4dC1kZWNvcmF0aW9uJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub25lXG4gIHdoaXRlTGlzdFsndGV4dC1kZWNvcmF0aW9uLWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjdXJyZW50Q29sb3JcbiAgd2hpdGVMaXN0Wyd0ZXh0LWRlY29yYXRpb24tbGluZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RleHQtZGVjb3JhdGlvbi1za2lwJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBvYmplY3RzXG4gIHdoaXRlTGlzdFsndGV4dC1kZWNvcmF0aW9uLXN0eWxlJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBzb2xpZFxuICB3aGl0ZUxpc3RbJ3RleHQtZW1waGFzaXMnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGRlcGVuZGluZyBvbiBpbmRpdmlkdWFsIHByb3BlcnRpZXNcbiAgd2hpdGVMaXN0Wyd0ZXh0LWVtcGhhc2lzLWNvbG9yJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBjdXJyZW50Q29sb3JcbiAgd2hpdGVMaXN0Wyd0ZXh0LWVtcGhhc2lzLXBvc2l0aW9uJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBvdmVyIHJpZ2h0XG4gIHdoaXRlTGlzdFsndGV4dC1lbXBoYXNpcy1zdHlsZSddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RleHQtaGVpZ2h0J10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsndGV4dC1pbmRlbnQnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IDBcbiAgd2hpdGVMaXN0Wyd0ZXh0LWp1c3RpZnknXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd0ZXh0LW9yaWVudGF0aW9uJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBtaXhlZFxuICB3aGl0ZUxpc3RbJ3RleHQtb3ZlcmZsb3cnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGNsaXBcbiAgd2hpdGVMaXN0Wyd0ZXh0LXNoYWRvdyddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9uZVxuICB3aGl0ZUxpc3RbJ3RleHQtc3BhY2UtY29sbGFwc2UnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IGNvbGxhcHNlXG4gIHdoaXRlTGlzdFsndGV4dC10cmFuc2Zvcm0nXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0ZXh0LXVuZGVybGluZS1wb3NpdGlvbiddID0gdHJ1ZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3RleHQtd3JhcCddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsndG9wJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYXV0b1xuICB3aGl0ZUxpc3RbJ3RyYW5zZm9ybSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vbmVcbiAgd2hpdGVMaXN0Wyd0cmFuc2Zvcm0tb3JpZ2luJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogNTAlIDUwJSAwXG4gIHdoaXRlTGlzdFsndHJhbnNmb3JtLXN0eWxlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZmxhdFxuICB3aGl0ZUxpc3RbJ3RyYW5zaXRpb24nXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBkZXBlbmRpbmcgb24gaW5kaXZpZHVhbCBwcm9wZXJ0aWVzXG4gIHdoaXRlTGlzdFsndHJhbnNpdGlvbi1kZWxheSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBzXG4gIHdoaXRlTGlzdFsndHJhbnNpdGlvbi1kdXJhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IDBzXG4gIHdoaXRlTGlzdFsndHJhbnNpdGlvbi1wcm9wZXJ0eSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGFsbFxuICB3aGl0ZUxpc3RbJ3RyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogZWFzZVxuICB3aGl0ZUxpc3RbJ3VuaWNvZGUtYmlkaSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3ZlcnRpY2FsLWFsaWduJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogYmFzZWxpbmVcbiAgd2hpdGVMaXN0Wyd2aXNpYmlsaXR5J10gPSBmYWxzZTsgLy8gZGVmYXVsdDogdmlzaWJsZVxuICB3aGl0ZUxpc3RbJ3ZvaWNlLWJhbGFuY2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBjZW50ZXJcbiAgd2hpdGVMaXN0Wyd2b2ljZS1kdXJhdGlvbiddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd2b2ljZS1mYW1pbHknXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBpbXBsZW1lbnRhdGlvbiBkZXBlbmRlbnRcbiAgd2hpdGVMaXN0Wyd2b2ljZS1waXRjaCddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ3ZvaWNlLXJhbmdlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbWVkaXVtXG4gIHdoaXRlTGlzdFsndm9pY2UtcmF0ZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3ZvaWNlLXN0cmVzcyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3ZvaWNlLXZvbHVtZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ3ZvbHVtZSddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IG1lZGl1bVxuICB3aGl0ZUxpc3RbJ3doaXRlLXNwYWNlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnd2lkb3dzJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogMlxuICB3aGl0ZUxpc3RbJ3dpZHRoJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnd2lsbC1jaGFuZ2UnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG4gIHdoaXRlTGlzdFsnd29yZC1icmVhayddID0gdHJ1ZTsgLy8gZGVmYXVsdDogbm9ybWFsXG4gIHdoaXRlTGlzdFsnd29yZC1zcGFjaW5nJ10gPSB0cnVlOyAvLyBkZWZhdWx0OiBub3JtYWxcbiAgd2hpdGVMaXN0Wyd3b3JkLXdyYXAnXSA9IHRydWU7IC8vIGRlZmF1bHQ6IG5vcm1hbFxuICB3aGl0ZUxpc3RbJ3dyYXAtZmxvdyddID0gZmFsc2U7IC8vIGRlZmF1bHQ6IGF1dG9cbiAgd2hpdGVMaXN0Wyd3cmFwLXRocm91Z2gnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiB3cmFwXG4gIHdoaXRlTGlzdFsnd3JpdGluZy1tb2RlJ10gPSBmYWxzZTsgLy8gZGVmYXVsdDogaG9yaXpvbnRhbC10YlxuICB3aGl0ZUxpc3RbJ3otaW5kZXgnXSA9IGZhbHNlOyAvLyBkZWZhdWx0OiBhdXRvXG5cbiAgcmV0dXJuIHdoaXRlTGlzdDtcbn1cblxuXG4vKipcbiAqIOWMuemFjeWIsOeZveWQjeWNleS4iueahOS4gOS4quWxnuaAp+aXtlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9uQXR0ciAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuXG4vKipcbiAqIOWMuemFjeWIsOS4jeWcqOeZveWQjeWNleS4iueahOS4gOS4quWxnuaAp+aXtlxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9uSWdub3JlQXR0ciAobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuXG52YXIgUkVHRVhQX1VSTF9KQVZBU0NSSVBUID0gL2phdmFzY3JpcHRcXHMqXFw6L2ltZztcblxuLyoqXG4gKiDov4fmu6TlsZ7mgKflgLxcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHNhZmVBdHRyVmFsdWUobmFtZSwgdmFsdWUpIHtcbiAgaWYgKFJFR0VYUF9VUkxfSkFWQVNDUklQVC50ZXN0KHZhbHVlKSkgcmV0dXJuICcnO1xuICByZXR1cm4gdmFsdWU7XG59XG5cblxuZXhwb3J0cy53aGl0ZUxpc3QgPSBnZXREZWZhdWx0V2hpdGVMaXN0KCk7XG5leHBvcnRzLmdldERlZmF1bHRXaGl0ZUxpc3QgPSBnZXREZWZhdWx0V2hpdGVMaXN0O1xuZXhwb3J0cy5vbkF0dHIgPSBvbkF0dHI7XG5leHBvcnRzLm9uSWdub3JlQXR0ciA9IG9uSWdub3JlQXR0cjtcbmV4cG9ydHMuc2FmZUF0dHJWYWx1ZSA9IHNhZmVBdHRyVmFsdWU7XG4iLCIvKipcbiAqIGNzc2ZpbHRlclxuICpcbiAqIEBhdXRob3Ig6ICB6Zu3PGxlaXpvbmdtaW5AZ21haWwuY29tPlxuICovXG5cbnZhciBERUZBVUxUID0gcmVxdWlyZSgnLi9kZWZhdWx0Jyk7XG52YXIgRmlsdGVyQ1NTID0gcmVxdWlyZSgnLi9jc3MnKTtcblxuXG4vKipcbiAqIFhTU+i/h+a7pFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3Mg6KaB6L+H5ruk55qEQ1NT5Luj56CBXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyDpgInpobnvvJp3aGl0ZUxpc3QsIG9uQXR0ciwgb25JZ25vcmVBdHRyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZpbHRlckNTUyAoaHRtbCwgb3B0aW9ucykge1xuICB2YXIgeHNzID0gbmV3IEZpbHRlckNTUyhvcHRpb25zKTtcbiAgcmV0dXJuIHhzcy5wcm9jZXNzKGh0bWwpO1xufVxuXG5cbi8vIOi+k+WHulxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZmlsdGVyQ1NTO1xuZXhwb3J0cy5GaWx0ZXJDU1MgPSBGaWx0ZXJDU1M7XG5mb3IgKHZhciBpIGluIERFRkFVTFQpIGV4cG9ydHNbaV0gPSBERUZBVUxUW2ldO1xuXG4vLyDlnKjmtY/op4jlmajnq6/kvb/nlKhcbmlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICB3aW5kb3cuZmlsdGVyQ1NTID0gbW9kdWxlLmV4cG9ydHM7XG59XG4iLCIvKipcbiAqIGNzc2ZpbHRlclxuICpcbiAqIEBhdXRob3Ig6ICB6Zu3PGxlaXpvbmdtaW5AZ21haWwuY29tPlxuICovXG5cbnZhciBfID0gcmVxdWlyZSgnLi91dGlsJyk7XG5cblxuLyoqXG4gKiDop6PmnpBzdHlsZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBjc3NcbiAqIEBwYXJhbSB7RnVuY3Rpb259IG9uQXR0ciDlpITnkIblsZ7mgKfnmoTlh73mlbBcbiAqICAg5Y+C5pWw5qC85byP77yaIGZ1bmN0aW9uIChzb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24sIG5hbWUsIHZhbHVlLCBzb3VyY2UpXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlU3R5bGUgKGNzcywgb25BdHRyKSB7XG4gIGNzcyA9IF8udHJpbVJpZ2h0KGNzcyk7XG4gIGlmIChjc3NbY3NzLmxlbmd0aCAtIDFdICE9PSAnOycpIGNzcyArPSAnOyc7XG4gIHZhciBjc3NMZW5ndGggPSBjc3MubGVuZ3RoO1xuICB2YXIgaXNQYXJlbnRoZXNpc09wZW4gPSBmYWxzZTtcbiAgdmFyIGxhc3RQb3MgPSAwO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXRDU1MgPSAnJztcblxuICBmdW5jdGlvbiBhZGROZXdBdHRyICgpIHtcbiAgICAvLyDlpoLmnpzmsqHmnInmraPluLjnmoTpl63lkIjlnIbmi6zlj7fvvIzliJnnm7TmjqXlv73nlaXlvZPliY3lsZ7mgKdcbiAgICBpZiAoIWlzUGFyZW50aGVzaXNPcGVuKSB7XG4gICAgICB2YXIgc291cmNlID0gXy50cmltKGNzcy5zbGljZShsYXN0UG9zLCBpKSk7XG4gICAgICB2YXIgaiA9IHNvdXJjZS5pbmRleE9mKCc6Jyk7XG4gICAgICBpZiAoaiAhPT0gLTEpIHtcbiAgICAgICAgdmFyIG5hbWUgPSBfLnRyaW0oc291cmNlLnNsaWNlKDAsIGopKTtcbiAgICAgICAgdmFyIHZhbHVlID0gXy50cmltKHNvdXJjZS5zbGljZShqICsgMSkpO1xuICAgICAgICAvLyDlv4XpobvmnInlsZ7mgKflkI3np7BcbiAgICAgICAgaWYgKG5hbWUpIHtcbiAgICAgICAgICB2YXIgcmV0ID0gb25BdHRyKGxhc3RQb3MsIHJldENTUy5sZW5ndGgsIG5hbWUsIHZhbHVlLCBzb3VyY2UpO1xuICAgICAgICAgIGlmIChyZXQpIHJldENTUyArPSByZXQgKyAnOyAnO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RQb3MgPSBpICsgMTtcbiAgfVxuXG4gIGZvciAoOyBpIDwgY3NzTGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgYyA9IGNzc1tpXTtcbiAgICBpZiAoYyA9PT0gJy8nICYmIGNzc1tpICsgMV0gPT09ICcqJykge1xuICAgICAgLy8g5aSH5rOo5byA5aeLXG4gICAgICB2YXIgaiA9IGNzcy5pbmRleE9mKCcqLycsIGkgKyAyKTtcbiAgICAgIC8vIOWmguaenOayoeacieato+W4uOeahOWkh+azqOe7k+adn++8jOWImeWQjumdoueahOmDqOWIhuWFqOmDqOi3s+i/h1xuICAgICAgaWYgKGogPT09IC0xKSBicmVhaztcbiAgICAgIC8vIOebtOaOpeWwhuW9k+WJjeS9jee9ruiwg+WIsOWkh+azqOe7k+Wwvu+8jOW5tuS4lOWIneWni+WMlueKtuaAgVxuICAgICAgaSA9IGogKyAxO1xuICAgICAgbGFzdFBvcyA9IGkgKyAxO1xuICAgICAgaXNQYXJlbnRoZXNpc09wZW4gPSBmYWxzZTtcbiAgICB9IGVsc2UgaWYgKGMgPT09ICcoJykge1xuICAgICAgaXNQYXJlbnRoZXNpc09wZW4gPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gJyknKSB7XG4gICAgICBpc1BhcmVudGhlc2lzT3BlbiA9IGZhbHNlO1xuICAgIH0gZWxzZSBpZiAoYyA9PT0gJzsnKSB7XG4gICAgICBpZiAoaXNQYXJlbnRoZXNpc09wZW4pIHtcbiAgICAgICAgLy8g5Zyo5ZyG5ous5Y+36YeM6Z2i77yM5b+955WlXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBhZGROZXdBdHRyKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChjID09PSAnXFxuJykge1xuICAgICAgYWRkTmV3QXR0cigpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfLnRyaW0ocmV0Q1NTKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVN0eWxlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7XG4gIGluZGV4T2Y6IGZ1bmN0aW9uIChhcnIsIGl0ZW0pIHtcbiAgICB2YXIgaSwgajtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IGFyci5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfSxcbiAgZm9yRWFjaDogZnVuY3Rpb24gKGFyciwgZm4sIHNjb3BlKSB7XG4gICAgdmFyIGksIGo7XG4gICAgaWYgKEFycmF5LnByb3RvdHlwZS5mb3JFYWNoKSB7XG4gICAgICByZXR1cm4gYXJyLmZvckVhY2goZm4sIHNjb3BlKTtcbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IGFyci5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGZuLmNhbGwoc2NvcGUsIGFycltpXSwgaSwgYXJyKTtcbiAgICB9XG4gIH0sXG4gIHRyaW06IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBpZiAoU3RyaW5nLnByb3RvdHlwZS50cmltKSB7XG4gICAgICByZXR1cm4gc3RyLnRyaW0oKTtcbiAgICB9XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oXlxccyopfChcXHMqJCkvZywgJycpO1xuICB9LFxuICB0cmltUmlnaHQ6IGZ1bmN0aW9uIChzdHIpIHtcbiAgICBpZiAoU3RyaW5nLnByb3RvdHlwZS50cmltUmlnaHQpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbVJpZ2h0KCk7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKFxccyokKS9nLCAnJyk7XG4gIH1cbn07XG4iLCIvKipcbiAqIG1hcmtlZCAtIGEgbWFya2Rvd24gcGFyc2VyXG4gKiBDb3B5cmlnaHQgKGMpIDIwMTEtMjAxOCwgQ2hyaXN0b3BoZXIgSmVmZnJleS4gKE1JVCBMaWNlbnNlZClcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZWRqcy9tYXJrZWRcbiAqL1xuXG47KGZ1bmN0aW9uKHJvb3QpIHtcbid1c2Ugc3RyaWN0JztcblxuLyoqXG4gKiBCbG9jay1MZXZlbCBHcmFtbWFyXG4gKi9cblxudmFyIGJsb2NrID0ge1xuICBuZXdsaW5lOiAvXlxcbisvLFxuICBjb2RlOiAvXiggezR9W15cXG5dK1xcbiopKy8sXG4gIGZlbmNlczogbm9vcCxcbiAgaHI6IC9eIHswLDN9KCg/Oi0gKil7Myx9fCg/Ol8gKil7Myx9fCg/OlxcKiAqKXszLH0pKD86XFxuK3wkKS8sXG4gIGhlYWRpbmc6IC9eICooI3sxLDZ9KSAqKFteXFxuXSs/KSAqKD86IysgKik/KD86XFxuK3wkKS8sXG4gIG5wdGFibGU6IG5vb3AsXG4gIGJsb2NrcXVvdGU6IC9eKCB7MCwzfT4gPyhwYXJhZ3JhcGh8W15cXG5dKikoPzpcXG58JCkpKy8sXG4gIGxpc3Q6IC9eKCB7MCwzfSkoYnVsbCkgW1xcc1xcU10rPyg/OmhyfGRlZnxcXG57Mix9KD8hICkoPyFcXDFidWxsIClcXG4qfFxccyokKS8sXG4gIGh0bWw6ICdeIHswLDN9KD86JyAvLyBvcHRpb25hbCBpbmRlbnRhdGlvblxuICAgICsgJzwoc2NyaXB0fHByZXxzdHlsZSlbXFxcXHM+XVtcXFxcc1xcXFxTXSo/KD86PC9cXFxcMT5bXlxcXFxuXSpcXFxcbit8JCknIC8vICgxKVxuICAgICsgJ3xjb21tZW50W15cXFxcbl0qKFxcXFxuK3wkKScgLy8gKDIpXG4gICAgKyAnfDxcXFxcP1tcXFxcc1xcXFxTXSo/XFxcXD8+XFxcXG4qJyAvLyAoMylcbiAgICArICd8PCFbQS1aXVtcXFxcc1xcXFxTXSo/PlxcXFxuKicgLy8gKDQpXG4gICAgKyAnfDwhXFxcXFtDREFUQVxcXFxbW1xcXFxzXFxcXFNdKj9cXFxcXVxcXFxdPlxcXFxuKicgLy8gKDUpXG4gICAgKyAnfDwvPyh0YWcpKD86ICt8XFxcXG58Lz8+KVtcXFxcc1xcXFxTXSo/KD86XFxcXG57Mix9fCQpJyAvLyAoNilcbiAgICArICd8PCg/IXNjcmlwdHxwcmV8c3R5bGUpKFthLXpdW1xcXFx3LV0qKSg/OmF0dHJpYnV0ZSkqPyAqLz8+KD89WyBcXFxcdF0qKD86XFxcXG58JCkpW1xcXFxzXFxcXFNdKj8oPzpcXFxcbnsyLH18JCknIC8vICg3KSBvcGVuIHRhZ1xuICAgICsgJ3w8Lyg/IXNjcmlwdHxwcmV8c3R5bGUpW2Etel1bXFxcXHctXSpcXFxccyo+KD89WyBcXFxcdF0qKD86XFxcXG58JCkpW1xcXFxzXFxcXFNdKj8oPzpcXFxcbnsyLH18JCknIC8vICg3KSBjbG9zaW5nIHRhZ1xuICAgICsgJyknLFxuICBkZWY6IC9eIHswLDN9XFxbKGxhYmVsKVxcXTogKlxcbj8gKjw/KFteXFxzPl0rKT4/KD86KD86ICtcXG4/ICp8ICpcXG4gKikodGl0bGUpKT8gKig/Olxcbit8JCkvLFxuICB0YWJsZTogbm9vcCxcbiAgbGhlYWRpbmc6IC9eKFteXFxuXSspXFxuICooPXwtKXsyLH0gKig/Olxcbit8JCkvLFxuICBwYXJhZ3JhcGg6IC9eKFteXFxuXSsoPzpcXG4oPyFocnxoZWFkaW5nfGxoZWFkaW5nfCB7MCwzfT58PFxcLz8oPzp0YWcpKD86ICt8XFxufFxcLz8+KXw8KD86c2NyaXB0fHByZXxzdHlsZXwhLS0pKVteXFxuXSspKikvLFxuICB0ZXh0OiAvXlteXFxuXSsvXG59O1xuXG5ibG9jay5fbGFiZWwgPSAvKD8hXFxzKlxcXSkoPzpcXFxcW1xcW1xcXV18W15cXFtcXF1dKSsvO1xuYmxvY2suX3RpdGxlID0gLyg/OlwiKD86XFxcXFwiP3xbXlwiXFxcXF0pKlwifCdbXidcXG5dKig/OlxcblteJ1xcbl0rKSpcXG4/J3xcXChbXigpXSpcXCkpLztcbmJsb2NrLmRlZiA9IGVkaXQoYmxvY2suZGVmKVxuICAucmVwbGFjZSgnbGFiZWwnLCBibG9jay5fbGFiZWwpXG4gIC5yZXBsYWNlKCd0aXRsZScsIGJsb2NrLl90aXRsZSlcbiAgLmdldFJlZ2V4KCk7XG5cbmJsb2NrLmJ1bGxldCA9IC8oPzpbKistXXxcXGR7MSw5fVxcLikvO1xuYmxvY2suaXRlbSA9IC9eKCAqKShidWxsKSA/W15cXG5dKig/Olxcbig/IVxcMWJ1bGwgPylbXlxcbl0qKSovO1xuYmxvY2suaXRlbSA9IGVkaXQoYmxvY2suaXRlbSwgJ2dtJylcbiAgLnJlcGxhY2UoL2J1bGwvZywgYmxvY2suYnVsbGV0KVxuICAuZ2V0UmVnZXgoKTtcblxuYmxvY2subGlzdCA9IGVkaXQoYmxvY2subGlzdClcbiAgLnJlcGxhY2UoL2J1bGwvZywgYmxvY2suYnVsbGV0KVxuICAucmVwbGFjZSgnaHInLCAnXFxcXG4rKD89XFxcXDE/KD86KD86LSAqKXszLH18KD86XyAqKXszLH18KD86XFxcXCogKil7Myx9KSg/OlxcXFxuK3wkKSknKVxuICAucmVwbGFjZSgnZGVmJywgJ1xcXFxuKyg/PScgKyBibG9jay5kZWYuc291cmNlICsgJyknKVxuICAuZ2V0UmVnZXgoKTtcblxuYmxvY2suX3RhZyA9ICdhZGRyZXNzfGFydGljbGV8YXNpZGV8YmFzZXxiYXNlZm9udHxibG9ja3F1b3RlfGJvZHl8Y2FwdGlvbidcbiAgKyAnfGNlbnRlcnxjb2x8Y29sZ3JvdXB8ZGR8ZGV0YWlsc3xkaWFsb2d8ZGlyfGRpdnxkbHxkdHxmaWVsZHNldHxmaWdjYXB0aW9uJ1xuICArICd8ZmlndXJlfGZvb3Rlcnxmb3JtfGZyYW1lfGZyYW1lc2V0fGhbMS02XXxoZWFkfGhlYWRlcnxocnxodG1sfGlmcmFtZSdcbiAgKyAnfGxlZ2VuZHxsaXxsaW5rfG1haW58bWVudXxtZW51aXRlbXxtZXRhfG5hdnxub2ZyYW1lc3xvbHxvcHRncm91cHxvcHRpb24nXG4gICsgJ3xwfHBhcmFtfHNlY3Rpb258c291cmNlfHN1bW1hcnl8dGFibGV8dGJvZHl8dGR8dGZvb3R8dGh8dGhlYWR8dGl0bGV8dHInXG4gICsgJ3x0cmFja3x1bCc7XG5ibG9jay5fY29tbWVudCA9IC88IS0tKD8hLT8+KVtcXHNcXFNdKj8tLT4vO1xuYmxvY2suaHRtbCA9IGVkaXQoYmxvY2suaHRtbCwgJ2knKVxuICAucmVwbGFjZSgnY29tbWVudCcsIGJsb2NrLl9jb21tZW50KVxuICAucmVwbGFjZSgndGFnJywgYmxvY2suX3RhZylcbiAgLnJlcGxhY2UoJ2F0dHJpYnV0ZScsIC8gK1thLXpBLVo6X11bXFx3LjotXSooPzogKj0gKlwiW15cIlxcbl0qXCJ8ICo9IConW14nXFxuXSonfCAqPSAqW15cXHNcIic9PD5gXSspPy8pXG4gIC5nZXRSZWdleCgpO1xuXG5ibG9jay5wYXJhZ3JhcGggPSBlZGl0KGJsb2NrLnBhcmFncmFwaClcbiAgLnJlcGxhY2UoJ2hyJywgYmxvY2suaHIpXG4gIC5yZXBsYWNlKCdoZWFkaW5nJywgYmxvY2suaGVhZGluZylcbiAgLnJlcGxhY2UoJ2xoZWFkaW5nJywgYmxvY2subGhlYWRpbmcpXG4gIC5yZXBsYWNlKCd0YWcnLCBibG9jay5fdGFnKSAvLyBwYXJzIGNhbiBiZSBpbnRlcnJ1cHRlZCBieSB0eXBlICg2KSBodG1sIGJsb2Nrc1xuICAuZ2V0UmVnZXgoKTtcblxuYmxvY2suYmxvY2txdW90ZSA9IGVkaXQoYmxvY2suYmxvY2txdW90ZSlcbiAgLnJlcGxhY2UoJ3BhcmFncmFwaCcsIGJsb2NrLnBhcmFncmFwaClcbiAgLmdldFJlZ2V4KCk7XG5cbi8qKlxuICogTm9ybWFsIEJsb2NrIEdyYW1tYXJcbiAqL1xuXG5ibG9jay5ub3JtYWwgPSBtZXJnZSh7fSwgYmxvY2spO1xuXG4vKipcbiAqIEdGTSBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2suZ2ZtID0gbWVyZ2Uoe30sIGJsb2NrLm5vcm1hbCwge1xuICBmZW5jZXM6IC9eIHswLDN9KGB7Myx9fH57Myx9KShbXmBcXG5dKilcXG4oPzp8KFtcXHNcXFNdKj8pXFxuKSg/OiB7MCwzfVxcMVt+YF0qICooPzpcXG4rfCQpfCQpLyxcbiAgcGFyYWdyYXBoOiAvXi8sXG4gIGhlYWRpbmc6IC9eICooI3sxLDZ9KSArKFteXFxuXSs/KSAqIyogKig/Olxcbit8JCkvXG59KTtcblxuYmxvY2suZ2ZtLnBhcmFncmFwaCA9IGVkaXQoYmxvY2sucGFyYWdyYXBoKVxuICAucmVwbGFjZSgnKD8hJywgJyg/ISdcbiAgICArIGJsb2NrLmdmbS5mZW5jZXMuc291cmNlLnJlcGxhY2UoJ1xcXFwxJywgJ1xcXFwyJykgKyAnfCdcbiAgICArIGJsb2NrLmxpc3Quc291cmNlLnJlcGxhY2UoJ1xcXFwxJywgJ1xcXFwzJykgKyAnfCcpXG4gIC5nZXRSZWdleCgpO1xuXG4vKipcbiAqIEdGTSArIFRhYmxlcyBCbG9jayBHcmFtbWFyXG4gKi9cblxuYmxvY2sudGFibGVzID0gbWVyZ2Uoe30sIGJsb2NrLmdmbSwge1xuICBucHRhYmxlOiAvXiAqKFtefFxcbiBdLipcXHwuKilcXG4gKihbLTpdKyAqXFx8Wy18IDpdKikoPzpcXG4oKD86LipbXj5cXG4gXS4qKD86XFxufCQpKSopXFxuKnwkKS8sXG4gIHRhYmxlOiAvXiAqXFx8KC4rKVxcbiAqXFx8PyggKlstOl0rWy18IDpdKikoPzpcXG4oKD86ICpbXj5cXG4gXS4qKD86XFxufCQpKSopXFxuKnwkKS9cbn0pO1xuXG4vKipcbiAqIFBlZGFudGljIGdyYW1tYXJcbiAqL1xuXG5ibG9jay5wZWRhbnRpYyA9IG1lcmdlKHt9LCBibG9jay5ub3JtYWwsIHtcbiAgaHRtbDogZWRpdChcbiAgICAnXiAqKD86Y29tbWVudCAqKD86XFxcXG58XFxcXHMqJCknXG4gICAgKyAnfDwodGFnKVtcXFxcc1xcXFxTXSs/PC9cXFxcMT4gKig/OlxcXFxuezIsfXxcXFxccyokKScgLy8gY2xvc2VkIHRhZ1xuICAgICsgJ3w8dGFnKD86XCJbXlwiXSpcInxcXCdbXlxcJ10qXFwnfFxcXFxzW15cXCdcIi8+XFxcXHNdKikqPy8/PiAqKD86XFxcXG57Mix9fFxcXFxzKiQpKScpXG4gICAgLnJlcGxhY2UoJ2NvbW1lbnQnLCBibG9jay5fY29tbWVudClcbiAgICAucmVwbGFjZSgvdGFnL2csICcoPyEoPzonXG4gICAgICArICdhfGVtfHN0cm9uZ3xzbWFsbHxzfGNpdGV8cXxkZm58YWJicnxkYXRhfHRpbWV8Y29kZXx2YXJ8c2FtcHxrYmR8c3ViJ1xuICAgICAgKyAnfHN1cHxpfGJ8dXxtYXJrfHJ1Ynl8cnR8cnB8YmRpfGJkb3xzcGFufGJyfHdicnxpbnN8ZGVsfGltZyknXG4gICAgICArICdcXFxcYilcXFxcdysoPyE6fFteXFxcXHdcXFxcc0BdKkApXFxcXGInKVxuICAgIC5nZXRSZWdleCgpLFxuICBkZWY6IC9eICpcXFsoW15cXF1dKylcXF06ICo8PyhbXlxccz5dKyk+Pyg/OiArKFtcIihdW15cXG5dK1tcIildKSk/ICooPzpcXG4rfCQpL1xufSk7XG5cbi8qKlxuICogQmxvY2sgTGV4ZXJcbiAqL1xuXG5mdW5jdGlvbiBMZXhlcihvcHRpb25zKSB7XG4gIHRoaXMudG9rZW5zID0gW107XG4gIHRoaXMudG9rZW5zLmxpbmtzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBtYXJrZWQuZGVmYXVsdHM7XG4gIHRoaXMucnVsZXMgPSBibG9jay5ub3JtYWw7XG5cbiAgaWYgKHRoaXMub3B0aW9ucy5wZWRhbnRpYykge1xuICAgIHRoaXMucnVsZXMgPSBibG9jay5wZWRhbnRpYztcbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy50YWJsZXMpIHtcbiAgICAgIHRoaXMucnVsZXMgPSBibG9jay50YWJsZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucnVsZXMgPSBibG9jay5nZm07XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogRXhwb3NlIEJsb2NrIFJ1bGVzXG4gKi9cblxuTGV4ZXIucnVsZXMgPSBibG9jaztcblxuLyoqXG4gKiBTdGF0aWMgTGV4IE1ldGhvZFxuICovXG5cbkxleGVyLmxleCA9IGZ1bmN0aW9uKHNyYywgb3B0aW9ucykge1xuICB2YXIgbGV4ZXIgPSBuZXcgTGV4ZXIob3B0aW9ucyk7XG4gIHJldHVybiBsZXhlci5sZXgoc3JjKTtcbn07XG5cbi8qKlxuICogUHJlcHJvY2Vzc2luZ1xuICovXG5cbkxleGVyLnByb3RvdHlwZS5sZXggPSBmdW5jdGlvbihzcmMpIHtcbiAgc3JjID0gc3JjXG4gICAgLnJlcGxhY2UoL1xcclxcbnxcXHIvZywgJ1xcbicpXG4gICAgLnJlcGxhY2UoL1xcdC9nLCAnICAgICcpXG4gICAgLnJlcGxhY2UoL1xcdTAwYTAvZywgJyAnKVxuICAgIC5yZXBsYWNlKC9cXHUyNDI0L2csICdcXG4nKTtcblxuICByZXR1cm4gdGhpcy50b2tlbihzcmMsIHRydWUpO1xufTtcblxuLyoqXG4gKiBMZXhpbmdcbiAqL1xuXG5MZXhlci5wcm90b3R5cGUudG9rZW4gPSBmdW5jdGlvbihzcmMsIHRvcCkge1xuICBzcmMgPSBzcmMucmVwbGFjZSgvXiArJC9nbSwgJycpO1xuICB2YXIgbmV4dCxcbiAgICAgIGxvb3NlLFxuICAgICAgY2FwLFxuICAgICAgYnVsbCxcbiAgICAgIGIsXG4gICAgICBpdGVtLFxuICAgICAgbGlzdFN0YXJ0LFxuICAgICAgbGlzdEl0ZW1zLFxuICAgICAgdCxcbiAgICAgIHNwYWNlLFxuICAgICAgaSxcbiAgICAgIHRhZyxcbiAgICAgIGwsXG4gICAgICBpc29yZGVyZWQsXG4gICAgICBpc3Rhc2ssXG4gICAgICBpc2NoZWNrZWQ7XG5cbiAgd2hpbGUgKHNyYykge1xuICAgIC8vIG5ld2xpbmVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5uZXdsaW5lLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChjYXBbMF0ubGVuZ3RoID4gMSkge1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgICB0eXBlOiAnc3BhY2UnXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGNvZGVcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5jb2RlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGNhcCA9IGNhcFswXS5yZXBsYWNlKC9eIHs0fS9nbSwgJycpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgdGV4dDogIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgID8gcnRyaW0oY2FwLCAnXFxuJylcbiAgICAgICAgICA6IGNhcFxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBmZW5jZXMgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5mZW5jZXMuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdjb2RlJyxcbiAgICAgICAgbGFuZzogY2FwWzJdID8gY2FwWzJdLnRyaW0oKSA6IGNhcFsyXSxcbiAgICAgICAgdGV4dDogY2FwWzNdIHx8ICcnXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGhlYWRpbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5oZWFkaW5nLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnaGVhZGluZycsXG4gICAgICAgIGRlcHRoOiBjYXBbMV0ubGVuZ3RoLFxuICAgICAgICB0ZXh0OiBjYXBbMl1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGFibGUgbm8gbGVhZGluZyBwaXBlIChnZm0pXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubnB0YWJsZS5leGVjKHNyYykpIHtcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIGhlYWRlcjogc3BsaXRDZWxscyhjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKSksXG4gICAgICAgIGFsaWduOiBjYXBbMl0ucmVwbGFjZSgvXiAqfFxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgY2VsbHM6IGNhcFszXSA/IGNhcFszXS5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKSA6IFtdXG4gICAgICB9O1xuXG4gICAgICBpZiAoaXRlbS5oZWFkZXIubGVuZ3RoID09PSBpdGVtLmFsaWduLmxlbmd0aCkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKC9eICotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAncmlnaHQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnY2VudGVyJztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSsgKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXRlbS5jZWxsc1tpXSA9IHNwbGl0Q2VsbHMoaXRlbS5jZWxsc1tpXSwgaXRlbS5oZWFkZXIubGVuZ3RoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goaXRlbSk7XG5cbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaHJcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5oci5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2hyJ1xuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBibG9ja3F1b3RlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYmxvY2txdW90ZS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAnYmxvY2txdW90ZV9zdGFydCdcbiAgICAgIH0pO1xuXG4gICAgICBjYXAgPSBjYXBbMF0ucmVwbGFjZSgvXiAqPiA/L2dtLCAnJyk7XG5cbiAgICAgIC8vIFBhc3MgYHRvcGAgdG8ga2VlcCB0aGUgY3VycmVudFxuICAgICAgLy8gXCJ0b3BsZXZlbFwiIHN0YXRlLiBUaGlzIGlzIGV4YWN0bHlcbiAgICAgIC8vIGhvdyBtYXJrZG93bi5wbCB3b3Jrcy5cbiAgICAgIHRoaXMudG9rZW4oY2FwLCB0b3ApO1xuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2Jsb2NrcXVvdGVfZW5kJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGxpc3RcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5saXN0LmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGJ1bGwgPSBjYXBbMl07XG4gICAgICBpc29yZGVyZWQgPSBidWxsLmxlbmd0aCA+IDE7XG5cbiAgICAgIGxpc3RTdGFydCA9IHtcbiAgICAgICAgdHlwZTogJ2xpc3Rfc3RhcnQnLFxuICAgICAgICBvcmRlcmVkOiBpc29yZGVyZWQsXG4gICAgICAgIHN0YXJ0OiBpc29yZGVyZWQgPyArYnVsbCA6ICcnLFxuICAgICAgICBsb29zZTogZmFsc2VcbiAgICAgIH07XG5cbiAgICAgIHRoaXMudG9rZW5zLnB1c2gobGlzdFN0YXJ0KTtcblxuICAgICAgLy8gR2V0IGVhY2ggdG9wLWxldmVsIGl0ZW0uXG4gICAgICBjYXAgPSBjYXBbMF0ubWF0Y2godGhpcy5ydWxlcy5pdGVtKTtcblxuICAgICAgbGlzdEl0ZW1zID0gW107XG4gICAgICBuZXh0ID0gZmFsc2U7XG4gICAgICBsID0gY2FwLmxlbmd0aDtcbiAgICAgIGkgPSAwO1xuXG4gICAgICBmb3IgKDsgaSA8IGw7IGkrKykge1xuICAgICAgICBpdGVtID0gY2FwW2ldO1xuXG4gICAgICAgIC8vIFJlbW92ZSB0aGUgbGlzdCBpdGVtJ3MgYnVsbGV0XG4gICAgICAgIC8vIHNvIGl0IGlzIHNlZW4gYXMgdGhlIG5leHQgdG9rZW4uXG4gICAgICAgIHNwYWNlID0gaXRlbS5sZW5ndGg7XG4gICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL14gKihbKistXXxcXGQrXFwuKSAqLywgJycpO1xuXG4gICAgICAgIC8vIE91dGRlbnQgd2hhdGV2ZXIgdGhlXG4gICAgICAgIC8vIGxpc3QgaXRlbSBjb250YWlucy4gSGFja3kuXG4gICAgICAgIGlmICh+aXRlbS5pbmRleE9mKCdcXG4gJykpIHtcbiAgICAgICAgICBzcGFjZSAtPSBpdGVtLmxlbmd0aDtcbiAgICAgICAgICBpdGVtID0gIXRoaXMub3B0aW9ucy5wZWRhbnRpY1xuICAgICAgICAgICAgPyBpdGVtLnJlcGxhY2UobmV3IFJlZ0V4cCgnXiB7MSwnICsgc3BhY2UgKyAnfScsICdnbScpLCAnJylcbiAgICAgICAgICAgIDogaXRlbS5yZXBsYWNlKC9eIHsxLDR9L2dtLCAnJyk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBEZXRlcm1pbmUgd2hldGhlciB0aGUgbmV4dCBsaXN0IGl0ZW0gYmVsb25ncyBoZXJlLlxuICAgICAgICAvLyBCYWNrcGVkYWwgaWYgaXQgZG9lcyBub3QgYmVsb25nIGluIHRoaXMgbGlzdC5cbiAgICAgICAgaWYgKGkgIT09IGwgLSAxKSB7XG4gICAgICAgICAgYiA9IGJsb2NrLmJ1bGxldC5leGVjKGNhcFtpICsgMV0pWzBdO1xuICAgICAgICAgIGlmIChidWxsLmxlbmd0aCA+IDEgPyBiLmxlbmd0aCA9PT0gMVxuICAgICAgICAgICAgOiAoYi5sZW5ndGggPiAxIHx8ICh0aGlzLm9wdGlvbnMuc21hcnRMaXN0cyAmJiBiICE9PSBidWxsKSkpIHtcbiAgICAgICAgICAgIHNyYyA9IGNhcC5zbGljZShpICsgMSkuam9pbignXFxuJykgKyBzcmM7XG4gICAgICAgICAgICBpID0gbCAtIDE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gRGV0ZXJtaW5lIHdoZXRoZXIgaXRlbSBpcyBsb29zZSBvciBub3QuXG4gICAgICAgIC8vIFVzZTogLyhefFxcbikoPyEgKVteXFxuXStcXG5cXG4oPyFcXHMqJCkvXG4gICAgICAgIC8vIGZvciBkaXNjb3VudCBiZWhhdmlvci5cbiAgICAgICAgbG9vc2UgPSBuZXh0IHx8IC9cXG5cXG4oPyFcXHMqJCkvLnRlc3QoaXRlbSk7XG4gICAgICAgIGlmIChpICE9PSBsIC0gMSkge1xuICAgICAgICAgIG5leHQgPSBpdGVtLmNoYXJBdChpdGVtLmxlbmd0aCAtIDEpID09PSAnXFxuJztcbiAgICAgICAgICBpZiAoIWxvb3NlKSBsb29zZSA9IG5leHQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobG9vc2UpIHtcbiAgICAgICAgICBsaXN0U3RhcnQubG9vc2UgPSB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gQ2hlY2sgZm9yIHRhc2sgbGlzdCBpdGVtc1xuICAgICAgICBpc3Rhc2sgPSAvXlxcW1sgeFhdXFxdIC8udGVzdChpdGVtKTtcbiAgICAgICAgaXNjaGVja2VkID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaXN0YXNrKSB7XG4gICAgICAgICAgaXNjaGVja2VkID0gaXRlbVsxXSAhPT0gJyAnO1xuICAgICAgICAgIGl0ZW0gPSBpdGVtLnJlcGxhY2UoL15cXFtbIHhYXVxcXSArLywgJycpO1xuICAgICAgICB9XG5cbiAgICAgICAgdCA9IHtcbiAgICAgICAgICB0eXBlOiAnbGlzdF9pdGVtX3N0YXJ0JyxcbiAgICAgICAgICB0YXNrOiBpc3Rhc2ssXG4gICAgICAgICAgY2hlY2tlZDogaXNjaGVja2VkLFxuICAgICAgICAgIGxvb3NlOiBsb29zZVxuICAgICAgICB9O1xuXG4gICAgICAgIGxpc3RJdGVtcy5wdXNoKHQpO1xuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKHQpO1xuXG4gICAgICAgIC8vIFJlY3Vyc2UuXG4gICAgICAgIHRoaXMudG9rZW4oaXRlbSwgZmFsc2UpO1xuXG4gICAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICAgIHR5cGU6ICdsaXN0X2l0ZW1fZW5kJ1xuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKGxpc3RTdGFydC5sb29zZSkge1xuICAgICAgICBsID0gbGlzdEl0ZW1zLmxlbmd0aDtcbiAgICAgICAgaSA9IDA7XG4gICAgICAgIGZvciAoOyBpIDwgbDsgaSsrKSB7XG4gICAgICAgICAgbGlzdEl0ZW1zW2ldLmxvb3NlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB0aGlzLnRva2Vucy5wdXNoKHtcbiAgICAgICAgdHlwZTogJ2xpc3RfZW5kJ1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGh0bWxcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5odG1sLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiB0aGlzLm9wdGlvbnMuc2FuaXRpemVcbiAgICAgICAgICA/ICdwYXJhZ3JhcGgnXG4gICAgICAgICAgOiAnaHRtbCcsXG4gICAgICAgIHByZTogIXRoaXMub3B0aW9ucy5zYW5pdGl6ZXJcbiAgICAgICAgICAmJiAoY2FwWzFdID09PSAncHJlJyB8fCBjYXBbMV0gPT09ICdzY3JpcHQnIHx8IGNhcFsxXSA9PT0gJ3N0eWxlJyksXG4gICAgICAgIHRleHQ6IGNhcFswXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBkZWZcbiAgICBpZiAodG9wICYmIChjYXAgPSB0aGlzLnJ1bGVzLmRlZi5leGVjKHNyYykpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgaWYgKGNhcFszXSkgY2FwWzNdID0gY2FwWzNdLnN1YnN0cmluZygxLCBjYXBbM10ubGVuZ3RoIC0gMSk7XG4gICAgICB0YWcgPSBjYXBbMV0udG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICcgJyk7XG4gICAgICBpZiAoIXRoaXMudG9rZW5zLmxpbmtzW3RhZ10pIHtcbiAgICAgICAgdGhpcy50b2tlbnMubGlua3NbdGFnXSA9IHtcbiAgICAgICAgICBocmVmOiBjYXBbMl0sXG4gICAgICAgICAgdGl0bGU6IGNhcFszXVxuICAgICAgICB9O1xuICAgICAgfVxuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGFibGUgKGdmbSlcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50YWJsZS5leGVjKHNyYykpIHtcbiAgICAgIGl0ZW0gPSB7XG4gICAgICAgIHR5cGU6ICd0YWJsZScsXG4gICAgICAgIGhlYWRlcjogc3BsaXRDZWxscyhjYXBbMV0ucmVwbGFjZSgvXiAqfCAqXFx8ICokL2csICcnKSksXG4gICAgICAgIGFsaWduOiBjYXBbMl0ucmVwbGFjZSgvXiAqfFxcfCAqJC9nLCAnJykuc3BsaXQoLyAqXFx8ICovKSxcbiAgICAgICAgY2VsbHM6IGNhcFszXSA/IGNhcFszXS5yZXBsYWNlKC9cXG4kLywgJycpLnNwbGl0KCdcXG4nKSA6IFtdXG4gICAgICB9O1xuXG4gICAgICBpZiAoaXRlbS5oZWFkZXIubGVuZ3RoID09PSBpdGVtLmFsaWduLmxlbmd0aCkge1xuICAgICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmFsaWduLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaWYgKC9eICotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAncmlnaHQnO1xuICAgICAgICAgIH0gZWxzZSBpZiAoL14gKjotKzogKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnY2VudGVyJztcbiAgICAgICAgICB9IGVsc2UgaWYgKC9eICo6LSsgKiQvLnRlc3QoaXRlbS5hbGlnbltpXSkpIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSAnbGVmdCc7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGl0ZW0uYWxpZ25baV0gPSBudWxsO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBpdGVtLmNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgaXRlbS5jZWxsc1tpXSA9IHNwbGl0Q2VsbHMoXG4gICAgICAgICAgICBpdGVtLmNlbGxzW2ldLnJlcGxhY2UoL14gKlxcfCAqfCAqXFx8ICokL2csICcnKSxcbiAgICAgICAgICAgIGl0ZW0uaGVhZGVyLmxlbmd0aCk7XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLnRva2Vucy5wdXNoKGl0ZW0pO1xuXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIC8vIGxoZWFkaW5nXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMubGhlYWRpbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICdoZWFkaW5nJyxcbiAgICAgICAgZGVwdGg6IGNhcFsyXSA9PT0gJz0nID8gMSA6IDIsXG4gICAgICAgIHRleHQ6IGNhcFsxXVxuICAgICAgfSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyB0b3AtbGV2ZWwgcGFyYWdyYXBoXG4gICAgaWYgKHRvcCAmJiAoY2FwID0gdGhpcy5ydWxlcy5wYXJhZ3JhcGguZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMudG9rZW5zLnB1c2goe1xuICAgICAgICB0eXBlOiAncGFyYWdyYXBoJyxcbiAgICAgICAgdGV4dDogY2FwWzFdLmNoYXJBdChjYXBbMV0ubGVuZ3RoIC0gMSkgPT09ICdcXG4nXG4gICAgICAgICAgPyBjYXBbMV0uc2xpY2UoMCwgLTEpXG4gICAgICAgICAgOiBjYXBbMV1cbiAgICAgIH0pO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdGV4dFxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRleHQuZXhlYyhzcmMpKSB7XG4gICAgICAvLyBUb3AtbGV2ZWwgc2hvdWxkIG5ldmVyIHJlYWNoIGhlcmUuXG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgdGhpcy50b2tlbnMucHVzaCh7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgdGV4dDogY2FwWzBdXG4gICAgICB9KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIGlmIChzcmMpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignSW5maW5pdGUgbG9vcCBvbiBieXRlOiAnICsgc3JjLmNoYXJDb2RlQXQoMCkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0aGlzLnRva2Vucztcbn07XG5cbi8qKlxuICogSW5saW5lLUxldmVsIEdyYW1tYXJcbiAqL1xuXG52YXIgaW5saW5lID0ge1xuICBlc2NhcGU6IC9eXFxcXChbIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFxcW1xcXVxcXFxeX2B7fH1+XSkvLFxuICBhdXRvbGluazogL148KHNjaGVtZTpbXlxcc1xceDAwLVxceDFmPD5dKnxlbWFpbCk+LyxcbiAgdXJsOiBub29wLFxuICB0YWc6ICdeY29tbWVudCdcbiAgICArICd8XjwvW2EtekEtWl1bXFxcXHc6LV0qXFxcXHMqPicgLy8gc2VsZi1jbG9zaW5nIHRhZ1xuICAgICsgJ3xePFthLXpBLVpdW1xcXFx3LV0qKD86YXR0cmlidXRlKSo/XFxcXHMqLz8+JyAvLyBvcGVuIHRhZ1xuICAgICsgJ3xePFxcXFw/W1xcXFxzXFxcXFNdKj9cXFxcPz4nIC8vIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24sIGUuZy4gPD9waHAgPz5cbiAgICArICd8XjwhW2EtekEtWl0rXFxcXHNbXFxcXHNcXFxcU10qPz4nIC8vIGRlY2xhcmF0aW9uLCBlLmcuIDwhRE9DVFlQRSBodG1sPlxuICAgICsgJ3xePCFcXFxcW0NEQVRBXFxcXFtbXFxcXHNcXFxcU10qP1xcXFxdXFxcXF0+JywgLy8gQ0RBVEEgc2VjdGlvblxuICBsaW5rOiAvXiE/XFxbKGxhYmVsKVxcXVxcKGhyZWYoPzpcXHMrKHRpdGxlKSk/XFxzKlxcKS8sXG4gIHJlZmxpbms6IC9eIT9cXFsobGFiZWwpXFxdXFxbKD8hXFxzKlxcXSkoKD86XFxcXFtcXFtcXF1dP3xbXlxcW1xcXVxcXFxdKSspXFxdLyxcbiAgbm9saW5rOiAvXiE/XFxbKD8hXFxzKlxcXSkoKD86XFxbW15cXFtcXF1dKlxcXXxcXFxcW1xcW1xcXV18W15cXFtcXF1dKSopXFxdKD86XFxbXFxdKT8vLFxuICBzdHJvbmc6IC9eX18oW15cXHNfXSlfXyg/IV8pfF5cXCpcXCooW15cXHMqXSlcXCpcXCooPyFcXCopfF5fXyhbXlxcc11bXFxzXFxTXSo/W15cXHNdKV9fKD8hXyl8XlxcKlxcKihbXlxcc11bXFxzXFxTXSo/W15cXHNdKVxcKlxcKig/IVxcKikvLFxuICBlbTogL15fKFteXFxzX10pXyg/IV8pfF5cXCooW15cXHMqXCI8XFxbXSlcXCooPyFcXCopfF5fKFteXFxzXVtcXHNcXFNdKj9bXlxcc19dKV8oPyFffFteXFxzcHVuY3R1YXRpb25dKXxeXyhbXlxcc19dW1xcc1xcU10qP1teXFxzXSlfKD8hX3xbXlxcc3B1bmN0dWF0aW9uXSl8XlxcKihbXlxcc1wiPFxcW11bXFxzXFxTXSo/W15cXHMqXSlcXCooPyFcXCopfF5cXCooW15cXHMqXCI8XFxbXVtcXHNcXFNdKj9bXlxcc10pXFwqKD8hXFwqKS8sXG4gIGNvZGU6IC9eKGArKShbXmBdfFteYF1bXFxzXFxTXSo/W15gXSlcXDEoPyFgKS8sXG4gIGJyOiAvXiggezIsfXxcXFxcKVxcbig/IVxccyokKS8sXG4gIGRlbDogbm9vcCxcbiAgdGV4dDogL14oYCt8W15gXSkoPzpbXFxzXFxTXSo/KD86KD89W1xcXFw8IVxcW2AqXXxcXGJffCQpfFteIF0oPz0gezIsfVxcbikpfCg/PSB7Mix9XFxuKSkvXG59O1xuXG4vLyBsaXN0IG9mIHB1bmN0dWF0aW9uIG1hcmtzIGZyb20gY29tbW9uIG1hcmsgc3BlY1xuLy8gd2l0aG91dCBgIGFuZCBdIHRvIHdvcmthcm91bmQgUnVsZSAxNyAoaW5saW5lIGNvZGUgYmxvY2tzL2xpbmtzKVxuaW5saW5lLl9wdW5jdHVhdGlvbiA9ICchXCIjJCUmXFwnKCkqKyxcXFxcLS4vOjs8PT4/QFxcXFxbXl97fH1+JztcbmlubGluZS5lbSA9IGVkaXQoaW5saW5lLmVtKS5yZXBsYWNlKC9wdW5jdHVhdGlvbi9nLCBpbmxpbmUuX3B1bmN0dWF0aW9uKS5nZXRSZWdleCgpO1xuXG5pbmxpbmUuX2VzY2FwZXMgPSAvXFxcXChbIVwiIyQlJicoKSorLFxcLS4vOjs8PT4/QFxcW1xcXVxcXFxeX2B7fH1+XSkvZztcblxuaW5saW5lLl9zY2hlbWUgPSAvW2EtekEtWl1bYS16QS1aMC05Ky4tXXsxLDMxfS87XG5pbmxpbmUuX2VtYWlsID0gL1thLXpBLVowLTkuISMkJSYnKisvPT9eX2B7fH1+LV0rKEApW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KD86XFwuW2EtekEtWjAtOV0oPzpbYS16QS1aMC05LV17MCw2MX1bYS16QS1aMC05XSk/KSsoPyFbLV9dKS87XG5pbmxpbmUuYXV0b2xpbmsgPSBlZGl0KGlubGluZS5hdXRvbGluaylcbiAgLnJlcGxhY2UoJ3NjaGVtZScsIGlubGluZS5fc2NoZW1lKVxuICAucmVwbGFjZSgnZW1haWwnLCBpbmxpbmUuX2VtYWlsKVxuICAuZ2V0UmVnZXgoKTtcblxuaW5saW5lLl9hdHRyaWJ1dGUgPSAvXFxzK1thLXpBLVo6X11bXFx3LjotXSooPzpcXHMqPVxccypcIlteXCJdKlwifFxccyo9XFxzKidbXiddKid8XFxzKj1cXHMqW15cXHNcIic9PD5gXSspPy87XG5cbmlubGluZS50YWcgPSBlZGl0KGlubGluZS50YWcpXG4gIC5yZXBsYWNlKCdjb21tZW50JywgYmxvY2suX2NvbW1lbnQpXG4gIC5yZXBsYWNlKCdhdHRyaWJ1dGUnLCBpbmxpbmUuX2F0dHJpYnV0ZSlcbiAgLmdldFJlZ2V4KCk7XG5cbmlubGluZS5fbGFiZWwgPSAvKD86XFxbW15cXFtcXF1dKlxcXXxcXFxcW1xcW1xcXV0/fGBbXmBdKmB8YCg/IWApfFteXFxbXFxdXFxcXGBdKSo/LztcbmlubGluZS5faHJlZiA9IC9cXHMqKDwoPzpcXFxcWzw+XT98W15cXHM8PlxcXFxdKSo+fFteXFxzXFx4MDAtXFx4MWZdKikvO1xuaW5saW5lLl90aXRsZSA9IC9cIig/OlxcXFxcIj98W15cIlxcXFxdKSpcInwnKD86XFxcXCc/fFteJ1xcXFxdKSonfFxcKCg/OlxcXFxcXCk/fFteKVxcXFxdKSpcXCkvO1xuXG5pbmxpbmUubGluayA9IGVkaXQoaW5saW5lLmxpbmspXG4gIC5yZXBsYWNlKCdsYWJlbCcsIGlubGluZS5fbGFiZWwpXG4gIC5yZXBsYWNlKCdocmVmJywgaW5saW5lLl9ocmVmKVxuICAucmVwbGFjZSgndGl0bGUnLCBpbmxpbmUuX3RpdGxlKVxuICAuZ2V0UmVnZXgoKTtcblxuaW5saW5lLnJlZmxpbmsgPSBlZGl0KGlubGluZS5yZWZsaW5rKVxuICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAuZ2V0UmVnZXgoKTtcblxuLyoqXG4gKiBOb3JtYWwgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUubm9ybWFsID0gbWVyZ2Uoe30sIGlubGluZSk7XG5cbi8qKlxuICogUGVkYW50aWMgSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUucGVkYW50aWMgPSBtZXJnZSh7fSwgaW5saW5lLm5vcm1hbCwge1xuICBzdHJvbmc6IC9eX18oPz1cXFMpKFtcXHNcXFNdKj9cXFMpX18oPyFfKXxeXFwqXFwqKD89XFxTKShbXFxzXFxTXSo/XFxTKVxcKlxcKig/IVxcKikvLFxuICBlbTogL15fKD89XFxTKShbXFxzXFxTXSo/XFxTKV8oPyFfKXxeXFwqKD89XFxTKShbXFxzXFxTXSo/XFxTKVxcKig/IVxcKikvLFxuICBsaW5rOiBlZGl0KC9eIT9cXFsobGFiZWwpXFxdXFwoKC4qPylcXCkvKVxuICAgIC5yZXBsYWNlKCdsYWJlbCcsIGlubGluZS5fbGFiZWwpXG4gICAgLmdldFJlZ2V4KCksXG4gIHJlZmxpbms6IGVkaXQoL14hP1xcWyhsYWJlbClcXF1cXHMqXFxbKFteXFxdXSopXFxdLylcbiAgICAucmVwbGFjZSgnbGFiZWwnLCBpbmxpbmUuX2xhYmVsKVxuICAgIC5nZXRSZWdleCgpXG59KTtcblxuLyoqXG4gKiBHRk0gSW5saW5lIEdyYW1tYXJcbiAqL1xuXG5pbmxpbmUuZ2ZtID0gbWVyZ2Uoe30sIGlubGluZS5ub3JtYWwsIHtcbiAgZXNjYXBlOiBlZGl0KGlubGluZS5lc2NhcGUpLnJlcGxhY2UoJ10pJywgJ358XSknKS5nZXRSZWdleCgpLFxuICBfZXh0ZW5kZWRfZW1haWw6IC9bQS1aYS16MC05Ll8rLV0rKEApW2EtekEtWjAtOS1fXSsoPzpcXC5bYS16QS1aMC05LV9dKlthLXpBLVowLTldKSsoPyFbLV9dKS8sXG4gIHVybDogL14oKD86ZnRwfGh0dHBzPyk6XFwvXFwvfHd3d1xcLikoPzpbYS16QS1aMC05XFwtXStcXC4/KStbXlxcczxdKnxeZW1haWwvLFxuICBfYmFja3BlZGFsOiAvKD86W14/IS4sOjsqX34oKSZdK3xcXChbXildKlxcKXwmKD8hW2EtekEtWjAtOV0rOyQpfFs/IS4sOjsqX34pXSsoPyEkKSkrLyxcbiAgZGVsOiAvXn4rKD89XFxTKShbXFxzXFxTXSo/XFxTKX4rLyxcbiAgdGV4dDogL14oYCt8W15gXSkoPzpbXFxzXFxTXSo/KD86KD89W1xcXFw8IVxcW2Aqfl18XFxiX3xodHRwcz86XFwvXFwvfGZ0cDpcXC9cXC98d3d3XFwufCQpfFteIF0oPz0gezIsfVxcbil8W15hLXpBLVowLTkuISMkJSYnKitcXC89P19ge1xcfH1+LV0oPz1bYS16QS1aMC05LiEjJCUmJyorXFwvPT9fYHtcXHx9fi1dK0ApKXwoPz0gezIsfVxcbnxbYS16QS1aMC05LiEjJCUmJyorXFwvPT9fYHtcXHx9fi1dK0ApKS9cbn0pO1xuXG5pbmxpbmUuZ2ZtLnVybCA9IGVkaXQoaW5saW5lLmdmbS51cmwsICdpJylcbiAgLnJlcGxhY2UoJ2VtYWlsJywgaW5saW5lLmdmbS5fZXh0ZW5kZWRfZW1haWwpXG4gIC5nZXRSZWdleCgpO1xuLyoqXG4gKiBHRk0gKyBMaW5lIEJyZWFrcyBJbmxpbmUgR3JhbW1hclxuICovXG5cbmlubGluZS5icmVha3MgPSBtZXJnZSh7fSwgaW5saW5lLmdmbSwge1xuICBicjogZWRpdChpbmxpbmUuYnIpLnJlcGxhY2UoJ3syLH0nLCAnKicpLmdldFJlZ2V4KCksXG4gIHRleHQ6IGVkaXQoaW5saW5lLmdmbS50ZXh0KS5yZXBsYWNlKC9cXHsyLFxcfS9nLCAnKicpLmdldFJlZ2V4KClcbn0pO1xuXG4vKipcbiAqIElubGluZSBMZXhlciAmIENvbXBpbGVyXG4gKi9cblxuZnVuY3Rpb24gSW5saW5lTGV4ZXIobGlua3MsIG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBtYXJrZWQuZGVmYXVsdHM7XG4gIHRoaXMubGlua3MgPSBsaW5rcztcbiAgdGhpcy5ydWxlcyA9IGlubGluZS5ub3JtYWw7XG4gIHRoaXMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFJlbmRlcmVyKCk7XG4gIHRoaXMucmVuZGVyZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcblxuICBpZiAoIXRoaXMubGlua3MpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ1Rva2VucyBhcnJheSByZXF1aXJlcyBhIGBsaW5rc2AgcHJvcGVydHkuJyk7XG4gIH1cblxuICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgdGhpcy5ydWxlcyA9IGlubGluZS5wZWRhbnRpYztcbiAgfSBlbHNlIGlmICh0aGlzLm9wdGlvbnMuZ2ZtKSB7XG4gICAgaWYgKHRoaXMub3B0aW9ucy5icmVha3MpIHtcbiAgICAgIHRoaXMucnVsZXMgPSBpbmxpbmUuYnJlYWtzO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLnJ1bGVzID0gaW5saW5lLmdmbTtcbiAgICB9XG4gIH1cbn1cblxuLyoqXG4gKiBFeHBvc2UgSW5saW5lIFJ1bGVzXG4gKi9cblxuSW5saW5lTGV4ZXIucnVsZXMgPSBpbmxpbmU7XG5cbi8qKlxuICogU3RhdGljIExleGluZy9Db21waWxpbmcgTWV0aG9kXG4gKi9cblxuSW5saW5lTGV4ZXIub3V0cHV0ID0gZnVuY3Rpb24oc3JjLCBsaW5rcywgb3B0aW9ucykge1xuICB2YXIgaW5saW5lID0gbmV3IElubGluZUxleGVyKGxpbmtzLCBvcHRpb25zKTtcbiAgcmV0dXJuIGlubGluZS5vdXRwdXQoc3JjKTtcbn07XG5cbi8qKlxuICogTGV4aW5nL0NvbXBpbGluZ1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5vdXRwdXQgPSBmdW5jdGlvbihzcmMpIHtcbiAgdmFyIG91dCA9ICcnLFxuICAgICAgbGluayxcbiAgICAgIHRleHQsXG4gICAgICBocmVmLFxuICAgICAgdGl0bGUsXG4gICAgICBjYXAsXG4gICAgICBwcmV2Q2FwWmVybztcblxuICB3aGlsZSAoc3JjKSB7XG4gICAgLy8gZXNjYXBlXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuZXNjYXBlLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSBlc2NhcGUoY2FwWzFdKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRhZ1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLnRhZy5leGVjKHNyYykpIHtcbiAgICAgIGlmICghdGhpcy5pbkxpbmsgJiYgL148YSAvaS50ZXN0KGNhcFswXSkpIHtcbiAgICAgICAgdGhpcy5pbkxpbmsgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmluTGluayAmJiAvXjxcXC9hPi9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgfVxuICAgICAgaWYgKCF0aGlzLmluUmF3QmxvY2sgJiYgL148KHByZXxjb2RlfGtiZHxzY3JpcHQpKFxcc3w+KS9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmluUmF3QmxvY2sgPSB0cnVlO1xuICAgICAgfSBlbHNlIGlmICh0aGlzLmluUmF3QmxvY2sgJiYgL148XFwvKHByZXxjb2RlfGtiZHxzY3JpcHQpKFxcc3w+KS9pLnRlc3QoY2FwWzBdKSkge1xuICAgICAgICB0aGlzLmluUmF3QmxvY2sgPSBmYWxzZTtcbiAgICAgIH1cblxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIG91dCArPSB0aGlzLm9wdGlvbnMuc2FuaXRpemVcbiAgICAgICAgPyB0aGlzLm9wdGlvbnMuc2FuaXRpemVyXG4gICAgICAgICAgPyB0aGlzLm9wdGlvbnMuc2FuaXRpemVyKGNhcFswXSlcbiAgICAgICAgICA6IGVzY2FwZShjYXBbMF0pXG4gICAgICAgIDogY2FwWzBdO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gbGlua1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmxpbmsuZXhlYyhzcmMpKSB7XG4gICAgICB2YXIgbGFzdFBhcmVuSW5kZXggPSBmaW5kQ2xvc2luZ0JyYWNrZXQoY2FwWzJdLCAnKCknKTtcbiAgICAgIGlmIChsYXN0UGFyZW5JbmRleCA+IC0xKSB7XG4gICAgICAgIHZhciBsaW5rTGVuID0gY2FwWzBdLmxlbmd0aCAtIChjYXBbMl0ubGVuZ3RoIC0gbGFzdFBhcmVuSW5kZXgpIC0gKGNhcFszXSB8fCAnJykubGVuZ3RoO1xuICAgICAgICBjYXBbMl0gPSBjYXBbMl0uc3Vic3RyaW5nKDAsIGxhc3RQYXJlbkluZGV4KTtcbiAgICAgICAgY2FwWzBdID0gY2FwWzBdLnN1YnN0cmluZygwLCBsaW5rTGVuKS50cmltKCk7XG4gICAgICAgIGNhcFszXSA9ICcnO1xuICAgICAgfVxuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIGhyZWYgPSBjYXBbMl07XG4gICAgICBpZiAodGhpcy5vcHRpb25zLnBlZGFudGljKSB7XG4gICAgICAgIGxpbmsgPSAvXihbXidcIl0qW15cXHNdKVxccysoWydcIl0pKC4qKVxcMi8uZXhlYyhocmVmKTtcblxuICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgIGhyZWYgPSBsaW5rWzFdO1xuICAgICAgICAgIHRpdGxlID0gbGlua1szXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aXRsZSA9ICcnO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aXRsZSA9IGNhcFszXSA/IGNhcFszXS5zbGljZSgxLCAtMSkgOiAnJztcbiAgICAgIH1cbiAgICAgIGhyZWYgPSBocmVmLnRyaW0oKS5yZXBsYWNlKC9ePChbXFxzXFxTXSopPiQvLCAnJDEnKTtcbiAgICAgIG91dCArPSB0aGlzLm91dHB1dExpbmsoY2FwLCB7XG4gICAgICAgIGhyZWY6IElubGluZUxleGVyLmVzY2FwZXMoaHJlZiksXG4gICAgICAgIHRpdGxlOiBJbmxpbmVMZXhlci5lc2NhcGVzKHRpdGxlKVxuICAgICAgfSk7XG4gICAgICB0aGlzLmluTGluayA9IGZhbHNlO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gcmVmbGluaywgbm9saW5rXG4gICAgaWYgKChjYXAgPSB0aGlzLnJ1bGVzLnJlZmxpbmsuZXhlYyhzcmMpKVxuICAgICAgICB8fCAoY2FwID0gdGhpcy5ydWxlcy5ub2xpbmsuZXhlYyhzcmMpKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGxpbmsgPSAoY2FwWzJdIHx8IGNhcFsxXSkucmVwbGFjZSgvXFxzKy9nLCAnICcpO1xuICAgICAgbGluayA9IHRoaXMubGlua3NbbGluay50b0xvd2VyQ2FzZSgpXTtcbiAgICAgIGlmICghbGluayB8fCAhbGluay5ocmVmKSB7XG4gICAgICAgIG91dCArPSBjYXBbMF0uY2hhckF0KDApO1xuICAgICAgICBzcmMgPSBjYXBbMF0uc3Vic3RyaW5nKDEpICsgc3JjO1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIHRoaXMuaW5MaW5rID0gdHJ1ZTtcbiAgICAgIG91dCArPSB0aGlzLm91dHB1dExpbmsoY2FwLCBsaW5rKTtcbiAgICAgIHRoaXMuaW5MaW5rID0gZmFsc2U7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBzdHJvbmdcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5zdHJvbmcuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuc3Ryb25nKHRoaXMub3V0cHV0KGNhcFs0XSB8fCBjYXBbM10gfHwgY2FwWzJdIHx8IGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gZW1cbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy5lbS5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5lbSh0aGlzLm91dHB1dChjYXBbNl0gfHwgY2FwWzVdIHx8IGNhcFs0XSB8fCBjYXBbM10gfHwgY2FwWzJdIHx8IGNhcFsxXSkpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gY29kZVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmNvZGUuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuY29kZXNwYW4oZXNjYXBlKGNhcFsyXS50cmltKCksIHRydWUpKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGJyXG4gICAgaWYgKGNhcCA9IHRoaXMucnVsZXMuYnIuZXhlYyhzcmMpKSB7XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIuYnIoKTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIGRlbCAoZ2ZtKVxuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmRlbC5leGVjKHNyYykpIHtcbiAgICAgIHNyYyA9IHNyYy5zdWJzdHJpbmcoY2FwWzBdLmxlbmd0aCk7XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5kZWwodGhpcy5vdXRwdXQoY2FwWzFdKSk7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICAvLyBhdXRvbGlua1xuICAgIGlmIChjYXAgPSB0aGlzLnJ1bGVzLmF1dG9saW5rLmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGlmIChjYXBbMl0gPT09ICdAJykge1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKHRoaXMubWFuZ2xlKGNhcFsxXSkpO1xuICAgICAgICBocmVmID0gJ21haWx0bzonICsgdGV4dDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRleHQgPSBlc2NhcGUoY2FwWzFdKTtcbiAgICAgICAgaHJlZiA9IHRleHQ7XG4gICAgICB9XG4gICAgICBvdXQgKz0gdGhpcy5yZW5kZXJlci5saW5rKGhyZWYsIG51bGwsIHRleHQpO1xuICAgICAgY29udGludWU7XG4gICAgfVxuXG4gICAgLy8gdXJsIChnZm0pXG4gICAgaWYgKCF0aGlzLmluTGluayAmJiAoY2FwID0gdGhpcy5ydWxlcy51cmwuZXhlYyhzcmMpKSkge1xuICAgICAgaWYgKGNhcFsyXSA9PT0gJ0AnKSB7XG4gICAgICAgIHRleHQgPSBlc2NhcGUoY2FwWzBdKTtcbiAgICAgICAgaHJlZiA9ICdtYWlsdG86JyArIHRleHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICAvLyBkbyBleHRlbmRlZCBhdXRvbGluayBwYXRoIHZhbGlkYXRpb25cbiAgICAgICAgZG8ge1xuICAgICAgICAgIHByZXZDYXBaZXJvID0gY2FwWzBdO1xuICAgICAgICAgIGNhcFswXSA9IHRoaXMucnVsZXMuX2JhY2twZWRhbC5leGVjKGNhcFswXSlbMF07XG4gICAgICAgIH0gd2hpbGUgKHByZXZDYXBaZXJvICE9PSBjYXBbMF0pO1xuICAgICAgICB0ZXh0ID0gZXNjYXBlKGNhcFswXSk7XG4gICAgICAgIGlmIChjYXBbMV0gPT09ICd3d3cuJykge1xuICAgICAgICAgIGhyZWYgPSAnaHR0cDovLycgKyB0ZXh0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGhyZWYgPSB0ZXh0O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBzcmMgPSBzcmMuc3Vic3RyaW5nKGNhcFswXS5sZW5ndGgpO1xuICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIubGluayhocmVmLCBudWxsLCB0ZXh0KTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cblxuICAgIC8vIHRleHRcbiAgICBpZiAoY2FwID0gdGhpcy5ydWxlcy50ZXh0LmV4ZWMoc3JjKSkge1xuICAgICAgc3JjID0gc3JjLnN1YnN0cmluZyhjYXBbMF0ubGVuZ3RoKTtcbiAgICAgIGlmICh0aGlzLmluUmF3QmxvY2spIHtcbiAgICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIudGV4dChjYXBbMF0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgb3V0ICs9IHRoaXMucmVuZGVyZXIudGV4dChlc2NhcGUodGhpcy5zbWFydHlwYW50cyhjYXBbMF0pKSk7XG4gICAgICB9XG4gICAgICBjb250aW51ZTtcbiAgICB9XG5cbiAgICBpZiAoc3JjKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0luZmluaXRlIGxvb3Agb24gYnl0ZTogJyArIHNyYy5jaGFyQ29kZUF0KDApKTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuSW5saW5lTGV4ZXIuZXNjYXBlcyA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuIHRleHQgPyB0ZXh0LnJlcGxhY2UoSW5saW5lTGV4ZXIucnVsZXMuX2VzY2FwZXMsICckMScpIDogdGV4dDtcbn07XG5cbi8qKlxuICogQ29tcGlsZSBMaW5rXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLm91dHB1dExpbmsgPSBmdW5jdGlvbihjYXAsIGxpbmspIHtcbiAgdmFyIGhyZWYgPSBsaW5rLmhyZWYsXG4gICAgICB0aXRsZSA9IGxpbmsudGl0bGUgPyBlc2NhcGUobGluay50aXRsZSkgOiBudWxsO1xuXG4gIHJldHVybiBjYXBbMF0uY2hhckF0KDApICE9PSAnISdcbiAgICA/IHRoaXMucmVuZGVyZXIubGluayhocmVmLCB0aXRsZSwgdGhpcy5vdXRwdXQoY2FwWzFdKSlcbiAgICA6IHRoaXMucmVuZGVyZXIuaW1hZ2UoaHJlZiwgdGl0bGUsIGVzY2FwZShjYXBbMV0pKTtcbn07XG5cbi8qKlxuICogU21hcnR5cGFudHMgVHJhbnNmb3JtYXRpb25zXG4gKi9cblxuSW5saW5lTGV4ZXIucHJvdG90eXBlLnNtYXJ0eXBhbnRzID0gZnVuY3Rpb24odGV4dCkge1xuICBpZiAoIXRoaXMub3B0aW9ucy5zbWFydHlwYW50cykgcmV0dXJuIHRleHQ7XG4gIHJldHVybiB0ZXh0XG4gICAgLy8gZW0tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tLS9nLCAnXFx1MjAxNCcpXG4gICAgLy8gZW4tZGFzaGVzXG4gICAgLnJlcGxhY2UoLy0tL2csICdcXHUyMDEzJylcbiAgICAvLyBvcGVuaW5nIHNpbmdsZXNcbiAgICAucmVwbGFjZSgvKF58Wy1cXHUyMDE0LyhcXFt7XCJcXHNdKScvZywgJyQxXFx1MjAxOCcpXG4gICAgLy8gY2xvc2luZyBzaW5nbGVzICYgYXBvc3Ryb3BoZXNcbiAgICAucmVwbGFjZSgvJy9nLCAnXFx1MjAxOScpXG4gICAgLy8gb3BlbmluZyBkb3VibGVzXG4gICAgLnJlcGxhY2UoLyhefFstXFx1MjAxNC8oXFxbe1xcdTIwMThcXHNdKVwiL2csICckMVxcdTIwMWMnKVxuICAgIC8vIGNsb3NpbmcgZG91Ymxlc1xuICAgIC5yZXBsYWNlKC9cIi9nLCAnXFx1MjAxZCcpXG4gICAgLy8gZWxsaXBzZXNcbiAgICAucmVwbGFjZSgvXFwuezN9L2csICdcXHUyMDI2Jyk7XG59O1xuXG4vKipcbiAqIE1hbmdsZSBMaW5rc1xuICovXG5cbklubGluZUxleGVyLnByb3RvdHlwZS5tYW5nbGUgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIGlmICghdGhpcy5vcHRpb25zLm1hbmdsZSkgcmV0dXJuIHRleHQ7XG4gIHZhciBvdXQgPSAnJyxcbiAgICAgIGwgPSB0ZXh0Lmxlbmd0aCxcbiAgICAgIGkgPSAwLFxuICAgICAgY2g7XG5cbiAgZm9yICg7IGkgPCBsOyBpKyspIHtcbiAgICBjaCA9IHRleHQuY2hhckNvZGVBdChpKTtcbiAgICBpZiAoTWF0aC5yYW5kb20oKSA+IDAuNSkge1xuICAgICAgY2ggPSAneCcgKyBjaC50b1N0cmluZygxNik7XG4gICAgfVxuICAgIG91dCArPSAnJiMnICsgY2ggKyAnOyc7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufTtcblxuLyoqXG4gKiBSZW5kZXJlclxuICovXG5cbmZ1bmN0aW9uIFJlbmRlcmVyKG9wdGlvbnMpIHtcbiAgdGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCBtYXJrZWQuZGVmYXVsdHM7XG59XG5cblJlbmRlcmVyLnByb3RvdHlwZS5jb2RlID0gZnVuY3Rpb24oY29kZSwgaW5mb3N0cmluZywgZXNjYXBlZCkge1xuICB2YXIgbGFuZyA9IChpbmZvc3RyaW5nIHx8ICcnKS5tYXRjaCgvXFxTKi8pWzBdO1xuICBpZiAodGhpcy5vcHRpb25zLmhpZ2hsaWdodCkge1xuICAgIHZhciBvdXQgPSB0aGlzLm9wdGlvbnMuaGlnaGxpZ2h0KGNvZGUsIGxhbmcpO1xuICAgIGlmIChvdXQgIT0gbnVsbCAmJiBvdXQgIT09IGNvZGUpIHtcbiAgICAgIGVzY2FwZWQgPSB0cnVlO1xuICAgICAgY29kZSA9IG91dDtcbiAgICB9XG4gIH1cblxuICBpZiAoIWxhbmcpIHtcbiAgICByZXR1cm4gJzxwcmU+PGNvZGU+J1xuICAgICAgKyAoZXNjYXBlZCA/IGNvZGUgOiBlc2NhcGUoY29kZSwgdHJ1ZSkpXG4gICAgICArICc8L2NvZGU+PC9wcmU+JztcbiAgfVxuXG4gIHJldHVybiAnPHByZT48Y29kZSBjbGFzcz1cIidcbiAgICArIHRoaXMub3B0aW9ucy5sYW5nUHJlZml4XG4gICAgKyBlc2NhcGUobGFuZywgdHJ1ZSlcbiAgICArICdcIj4nXG4gICAgKyAoZXNjYXBlZCA/IGNvZGUgOiBlc2NhcGUoY29kZSwgdHJ1ZSkpXG4gICAgKyAnPC9jb2RlPjwvcHJlPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuYmxvY2txdW90ZSA9IGZ1bmN0aW9uKHF1b3RlKSB7XG4gIHJldHVybiAnPGJsb2NrcXVvdGU+XFxuJyArIHF1b3RlICsgJzwvYmxvY2txdW90ZT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmh0bWwgPSBmdW5jdGlvbihodG1sKSB7XG4gIHJldHVybiBodG1sO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmhlYWRpbmcgPSBmdW5jdGlvbih0ZXh0LCBsZXZlbCwgcmF3LCBzbHVnZ2VyKSB7XG4gIGlmICh0aGlzLm9wdGlvbnMuaGVhZGVySWRzKSB7XG4gICAgcmV0dXJuICc8aCdcbiAgICAgICsgbGV2ZWxcbiAgICAgICsgJyBpZD1cIidcbiAgICAgICsgdGhpcy5vcHRpb25zLmhlYWRlclByZWZpeFxuICAgICAgKyBzbHVnZ2VyLnNsdWcocmF3KVxuICAgICAgKyAnXCI+J1xuICAgICAgKyB0ZXh0XG4gICAgICArICc8L2gnXG4gICAgICArIGxldmVsXG4gICAgICArICc+XFxuJztcbiAgfVxuICAvLyBpZ25vcmUgSURzXG4gIHJldHVybiAnPGgnICsgbGV2ZWwgKyAnPicgKyB0ZXh0ICsgJzwvaCcgKyBsZXZlbCArICc+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5ociA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy5vcHRpb25zLnhodG1sID8gJzxoci8+XFxuJyA6ICc8aHI+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saXN0ID0gZnVuY3Rpb24oYm9keSwgb3JkZXJlZCwgc3RhcnQpIHtcbiAgdmFyIHR5cGUgPSBvcmRlcmVkID8gJ29sJyA6ICd1bCcsXG4gICAgICBzdGFydGF0dCA9IChvcmRlcmVkICYmIHN0YXJ0ICE9PSAxKSA/ICgnIHN0YXJ0PVwiJyArIHN0YXJ0ICsgJ1wiJykgOiAnJztcbiAgcmV0dXJuICc8JyArIHR5cGUgKyBzdGFydGF0dCArICc+XFxuJyArIGJvZHkgKyAnPC8nICsgdHlwZSArICc+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saXN0aXRlbSA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuICc8bGk+JyArIHRleHQgKyAnPC9saT5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmNoZWNrYm94ID0gZnVuY3Rpb24oY2hlY2tlZCkge1xuICByZXR1cm4gJzxpbnB1dCAnXG4gICAgKyAoY2hlY2tlZCA/ICdjaGVja2VkPVwiXCIgJyA6ICcnKVxuICAgICsgJ2Rpc2FibGVkPVwiXCIgdHlwZT1cImNoZWNrYm94XCInXG4gICAgKyAodGhpcy5vcHRpb25zLnhodG1sID8gJyAvJyA6ICcnKVxuICAgICsgJz4gJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5wYXJhZ3JhcGggPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPHA+JyArIHRleHQgKyAnPC9wPlxcbic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGFibGUgPSBmdW5jdGlvbihoZWFkZXIsIGJvZHkpIHtcbiAgaWYgKGJvZHkpIGJvZHkgPSAnPHRib2R5PicgKyBib2R5ICsgJzwvdGJvZHk+JztcblxuICByZXR1cm4gJzx0YWJsZT5cXG4nXG4gICAgKyAnPHRoZWFkPlxcbidcbiAgICArIGhlYWRlclxuICAgICsgJzwvdGhlYWQ+XFxuJ1xuICAgICsgYm9keVxuICAgICsgJzwvdGFibGU+XFxuJztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS50YWJsZXJvdyA9IGZ1bmN0aW9uKGNvbnRlbnQpIHtcbiAgcmV0dXJuICc8dHI+XFxuJyArIGNvbnRlbnQgKyAnPC90cj5cXG4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLnRhYmxlY2VsbCA9IGZ1bmN0aW9uKGNvbnRlbnQsIGZsYWdzKSB7XG4gIHZhciB0eXBlID0gZmxhZ3MuaGVhZGVyID8gJ3RoJyA6ICd0ZCc7XG4gIHZhciB0YWcgPSBmbGFncy5hbGlnblxuICAgID8gJzwnICsgdHlwZSArICcgYWxpZ249XCInICsgZmxhZ3MuYWxpZ24gKyAnXCI+J1xuICAgIDogJzwnICsgdHlwZSArICc+JztcbiAgcmV0dXJuIHRhZyArIGNvbnRlbnQgKyAnPC8nICsgdHlwZSArICc+XFxuJztcbn07XG5cbi8vIHNwYW4gbGV2ZWwgcmVuZGVyZXJcblJlbmRlcmVyLnByb3RvdHlwZS5zdHJvbmcgPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPHN0cm9uZz4nICsgdGV4dCArICc8L3N0cm9uZz4nO1xufTtcblxuUmVuZGVyZXIucHJvdG90eXBlLmVtID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxlbT4nICsgdGV4dCArICc8L2VtPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuY29kZXNwYW4gPSBmdW5jdGlvbih0ZXh0KSB7XG4gIHJldHVybiAnPGNvZGU+JyArIHRleHQgKyAnPC9jb2RlPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuYnIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMub3B0aW9ucy54aHRtbCA/ICc8YnIvPicgOiAnPGJyPic7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuZGVsID0gZnVuY3Rpb24odGV4dCkge1xuICByZXR1cm4gJzxkZWw+JyArIHRleHQgKyAnPC9kZWw+Jztcbn07XG5cblJlbmRlcmVyLnByb3RvdHlwZS5saW5rID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgaHJlZiA9IGNsZWFuVXJsKHRoaXMub3B0aW9ucy5zYW5pdGl6ZSwgdGhpcy5vcHRpb25zLmJhc2VVcmwsIGhyZWYpO1xuICBpZiAoaHJlZiA9PT0gbnVsbCkge1xuICAgIHJldHVybiB0ZXh0O1xuICB9XG4gIHZhciBvdXQgPSAnPGEgaHJlZj1cIicgKyBlc2NhcGUoaHJlZikgKyAnXCInO1xuICBpZiAodGl0bGUpIHtcbiAgICBvdXQgKz0gJyB0aXRsZT1cIicgKyB0aXRsZSArICdcIic7XG4gIH1cbiAgb3V0ICs9ICc+JyArIHRleHQgKyAnPC9hPic7XG4gIHJldHVybiBvdXQ7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUuaW1hZ2UgPSBmdW5jdGlvbihocmVmLCB0aXRsZSwgdGV4dCkge1xuICBocmVmID0gY2xlYW5VcmwodGhpcy5vcHRpb25zLnNhbml0aXplLCB0aGlzLm9wdGlvbnMuYmFzZVVybCwgaHJlZik7XG4gIGlmIChocmVmID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHRleHQ7XG4gIH1cblxuICB2YXIgb3V0ID0gJzxpbWcgc3JjPVwiJyArIGhyZWYgKyAnXCIgYWx0PVwiJyArIHRleHQgKyAnXCInO1xuICBpZiAodGl0bGUpIHtcbiAgICBvdXQgKz0gJyB0aXRsZT1cIicgKyB0aXRsZSArICdcIic7XG4gIH1cbiAgb3V0ICs9IHRoaXMub3B0aW9ucy54aHRtbCA/ICcvPicgOiAnPic7XG4gIHJldHVybiBvdXQ7XG59O1xuXG5SZW5kZXJlci5wcm90b3R5cGUudGV4dCA9IGZ1bmN0aW9uKHRleHQpIHtcbiAgcmV0dXJuIHRleHQ7XG59O1xuXG4vKipcbiAqIFRleHRSZW5kZXJlclxuICogcmV0dXJucyBvbmx5IHRoZSB0ZXh0dWFsIHBhcnQgb2YgdGhlIHRva2VuXG4gKi9cblxuZnVuY3Rpb24gVGV4dFJlbmRlcmVyKCkge31cblxuLy8gbm8gbmVlZCBmb3IgYmxvY2sgbGV2ZWwgcmVuZGVyZXJzXG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuc3Ryb25nID1cblRleHRSZW5kZXJlci5wcm90b3R5cGUuZW0gPVxuVGV4dFJlbmRlcmVyLnByb3RvdHlwZS5jb2Rlc3BhbiA9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmRlbCA9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLnRleHQgPSBmdW5jdGlvbiAodGV4dCkge1xuICByZXR1cm4gdGV4dDtcbn07XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUubGluayA9XG5UZXh0UmVuZGVyZXIucHJvdG90eXBlLmltYWdlID0gZnVuY3Rpb24oaHJlZiwgdGl0bGUsIHRleHQpIHtcbiAgcmV0dXJuICcnICsgdGV4dDtcbn07XG5cblRleHRSZW5kZXJlci5wcm90b3R5cGUuYnIgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuICcnO1xufTtcblxuLyoqXG4gKiBQYXJzaW5nICYgQ29tcGlsaW5nXG4gKi9cblxuZnVuY3Rpb24gUGFyc2VyKG9wdGlvbnMpIHtcbiAgdGhpcy50b2tlbnMgPSBbXTtcbiAgdGhpcy50b2tlbiA9IG51bGw7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnMgfHwgbWFya2VkLmRlZmF1bHRzO1xuICB0aGlzLm9wdGlvbnMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXIgfHwgbmV3IFJlbmRlcmVyKCk7XG4gIHRoaXMucmVuZGVyZXIgPSB0aGlzLm9wdGlvbnMucmVuZGVyZXI7XG4gIHRoaXMucmVuZGVyZXIub3B0aW9ucyA9IHRoaXMub3B0aW9ucztcbiAgdGhpcy5zbHVnZ2VyID0gbmV3IFNsdWdnZXIoKTtcbn1cblxuLyoqXG4gKiBTdGF0aWMgUGFyc2UgTWV0aG9kXG4gKi9cblxuUGFyc2VyLnBhcnNlID0gZnVuY3Rpb24oc3JjLCBvcHRpb25zKSB7XG4gIHZhciBwYXJzZXIgPSBuZXcgUGFyc2VyKG9wdGlvbnMpO1xuICByZXR1cm4gcGFyc2VyLnBhcnNlKHNyYyk7XG59O1xuXG4vKipcbiAqIFBhcnNlIExvb3BcbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBhcnNlID0gZnVuY3Rpb24oc3JjKSB7XG4gIHRoaXMuaW5saW5lID0gbmV3IElubGluZUxleGVyKHNyYy5saW5rcywgdGhpcy5vcHRpb25zKTtcbiAgLy8gdXNlIGFuIElubGluZUxleGVyIHdpdGggYSBUZXh0UmVuZGVyZXIgdG8gZXh0cmFjdCBwdXJlIHRleHRcbiAgdGhpcy5pbmxpbmVUZXh0ID0gbmV3IElubGluZUxleGVyKFxuICAgIHNyYy5saW5rcyxcbiAgICBtZXJnZSh7fSwgdGhpcy5vcHRpb25zLCB7cmVuZGVyZXI6IG5ldyBUZXh0UmVuZGVyZXIoKX0pXG4gICk7XG4gIHRoaXMudG9rZW5zID0gc3JjLnJldmVyc2UoKTtcblxuICB2YXIgb3V0ID0gJyc7XG4gIHdoaWxlICh0aGlzLm5leHQoKSkge1xuICAgIG91dCArPSB0aGlzLnRvaygpO1xuICB9XG5cbiAgcmV0dXJuIG91dDtcbn07XG5cbi8qKlxuICogTmV4dCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUubmV4dCA9IGZ1bmN0aW9uKCkge1xuICByZXR1cm4gdGhpcy50b2tlbiA9IHRoaXMudG9rZW5zLnBvcCgpO1xufTtcblxuLyoqXG4gKiBQcmV2aWV3IE5leHQgVG9rZW5cbiAqL1xuXG5QYXJzZXIucHJvdG90eXBlLnBlZWsgPSBmdW5jdGlvbigpIHtcbiAgcmV0dXJuIHRoaXMudG9rZW5zW3RoaXMudG9rZW5zLmxlbmd0aCAtIDFdIHx8IDA7XG59O1xuXG4vKipcbiAqIFBhcnNlIFRleHQgVG9rZW5zXG4gKi9cblxuUGFyc2VyLnByb3RvdHlwZS5wYXJzZVRleHQgPSBmdW5jdGlvbigpIHtcbiAgdmFyIGJvZHkgPSB0aGlzLnRva2VuLnRleHQ7XG5cbiAgd2hpbGUgKHRoaXMucGVlaygpLnR5cGUgPT09ICd0ZXh0Jykge1xuICAgIGJvZHkgKz0gJ1xcbicgKyB0aGlzLm5leHQoKS50ZXh0O1xuICB9XG5cbiAgcmV0dXJuIHRoaXMuaW5saW5lLm91dHB1dChib2R5KTtcbn07XG5cbi8qKlxuICogUGFyc2UgQ3VycmVudCBUb2tlblxuICovXG5cblBhcnNlci5wcm90b3R5cGUudG9rID0gZnVuY3Rpb24oKSB7XG4gIHN3aXRjaCAodGhpcy50b2tlbi50eXBlKSB7XG4gICAgY2FzZSAnc3BhY2UnOiB7XG4gICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGNhc2UgJ2hyJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuaHIoKTtcbiAgICB9XG4gICAgY2FzZSAnaGVhZGluZyc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmhlYWRpbmcoXG4gICAgICAgIHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLnRleHQpLFxuICAgICAgICB0aGlzLnRva2VuLmRlcHRoLFxuICAgICAgICB1bmVzY2FwZSh0aGlzLmlubGluZVRleHQub3V0cHV0KHRoaXMudG9rZW4udGV4dCkpLFxuICAgICAgICB0aGlzLnNsdWdnZXIpO1xuICAgIH1cbiAgICBjYXNlICdjb2RlJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIuY29kZSh0aGlzLnRva2VuLnRleHQsXG4gICAgICAgIHRoaXMudG9rZW4ubGFuZyxcbiAgICAgICAgdGhpcy50b2tlbi5lc2NhcGVkKTtcbiAgICB9XG4gICAgY2FzZSAndGFibGUnOiB7XG4gICAgICB2YXIgaGVhZGVyID0gJycsXG4gICAgICAgICAgYm9keSA9ICcnLFxuICAgICAgICAgIGksXG4gICAgICAgICAgcm93LFxuICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgajtcblxuICAgICAgLy8gaGVhZGVyXG4gICAgICBjZWxsID0gJyc7XG4gICAgICBmb3IgKGkgPSAwOyBpIDwgdGhpcy50b2tlbi5oZWFkZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgY2VsbCArPSB0aGlzLnJlbmRlcmVyLnRhYmxlY2VsbChcbiAgICAgICAgICB0aGlzLmlubGluZS5vdXRwdXQodGhpcy50b2tlbi5oZWFkZXJbaV0pLFxuICAgICAgICAgIHsgaGVhZGVyOiB0cnVlLCBhbGlnbjogdGhpcy50b2tlbi5hbGlnbltpXSB9XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBoZWFkZXIgKz0gdGhpcy5yZW5kZXJlci50YWJsZXJvdyhjZWxsKTtcblxuICAgICAgZm9yIChpID0gMDsgaSA8IHRoaXMudG9rZW4uY2VsbHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgcm93ID0gdGhpcy50b2tlbi5jZWxsc1tpXTtcblxuICAgICAgICBjZWxsID0gJyc7XG4gICAgICAgIGZvciAoaiA9IDA7IGogPCByb3cubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICBjZWxsICs9IHRoaXMucmVuZGVyZXIudGFibGVjZWxsKFxuICAgICAgICAgICAgdGhpcy5pbmxpbmUub3V0cHV0KHJvd1tqXSksXG4gICAgICAgICAgICB7IGhlYWRlcjogZmFsc2UsIGFsaWduOiB0aGlzLnRva2VuLmFsaWduW2pdIH1cbiAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgYm9keSArPSB0aGlzLnJlbmRlcmVyLnRhYmxlcm93KGNlbGwpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIudGFibGUoaGVhZGVyLCBib2R5KTtcbiAgICB9XG4gICAgY2FzZSAnYmxvY2txdW90ZV9zdGFydCc6IHtcbiAgICAgIGJvZHkgPSAnJztcblxuICAgICAgd2hpbGUgKHRoaXMubmV4dCgpLnR5cGUgIT09ICdibG9ja3F1b3RlX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSB0aGlzLnRvaygpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5ibG9ja3F1b3RlKGJvZHkpO1xuICAgIH1cbiAgICBjYXNlICdsaXN0X3N0YXJ0Jzoge1xuICAgICAgYm9keSA9ICcnO1xuICAgICAgdmFyIG9yZGVyZWQgPSB0aGlzLnRva2VuLm9yZGVyZWQsXG4gICAgICAgICAgc3RhcnQgPSB0aGlzLnRva2VuLnN0YXJ0O1xuXG4gICAgICB3aGlsZSAodGhpcy5uZXh0KCkudHlwZSAhPT0gJ2xpc3RfZW5kJykge1xuICAgICAgICBib2R5ICs9IHRoaXMudG9rKCk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmxpc3QoYm9keSwgb3JkZXJlZCwgc3RhcnQpO1xuICAgIH1cbiAgICBjYXNlICdsaXN0X2l0ZW1fc3RhcnQnOiB7XG4gICAgICBib2R5ID0gJyc7XG4gICAgICB2YXIgbG9vc2UgPSB0aGlzLnRva2VuLmxvb3NlO1xuICAgICAgdmFyIGNoZWNrZWQgPSB0aGlzLnRva2VuLmNoZWNrZWQ7XG4gICAgICB2YXIgdGFzayA9IHRoaXMudG9rZW4udGFzaztcblxuICAgICAgaWYgKHRoaXMudG9rZW4udGFzaykge1xuICAgICAgICBib2R5ICs9IHRoaXMucmVuZGVyZXIuY2hlY2tib3goY2hlY2tlZCk7XG4gICAgICB9XG5cbiAgICAgIHdoaWxlICh0aGlzLm5leHQoKS50eXBlICE9PSAnbGlzdF9pdGVtX2VuZCcpIHtcbiAgICAgICAgYm9keSArPSAhbG9vc2UgJiYgdGhpcy50b2tlbi50eXBlID09PSAndGV4dCdcbiAgICAgICAgICA/IHRoaXMucGFyc2VUZXh0KClcbiAgICAgICAgICA6IHRoaXMudG9rKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5yZW5kZXJlci5saXN0aXRlbShib2R5LCB0YXNrLCBjaGVja2VkKTtcbiAgICB9XG4gICAgY2FzZSAnaHRtbCc6IHtcbiAgICAgIC8vIFRPRE8gcGFyc2UgaW5saW5lIGNvbnRlbnQgaWYgcGFyYW1ldGVyIG1hcmtkb3duPTFcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLmh0bWwodGhpcy50b2tlbi50ZXh0KTtcbiAgICB9XG4gICAgY2FzZSAncGFyYWdyYXBoJzoge1xuICAgICAgcmV0dXJuIHRoaXMucmVuZGVyZXIucGFyYWdyYXBoKHRoaXMuaW5saW5lLm91dHB1dCh0aGlzLnRva2VuLnRleHQpKTtcbiAgICB9XG4gICAgY2FzZSAndGV4dCc6IHtcbiAgICAgIHJldHVybiB0aGlzLnJlbmRlcmVyLnBhcmFncmFwaCh0aGlzLnBhcnNlVGV4dCgpKTtcbiAgICB9XG4gICAgZGVmYXVsdDoge1xuICAgICAgdmFyIGVyck1zZyA9ICdUb2tlbiB3aXRoIFwiJyArIHRoaXMudG9rZW4udHlwZSArICdcIiB0eXBlIHdhcyBub3QgZm91bmQuJztcbiAgICAgIGlmICh0aGlzLm9wdGlvbnMuc2lsZW50KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVyck1zZyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZXJyTXNnKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbi8qKlxuICogU2x1Z2dlciBnZW5lcmF0ZXMgaGVhZGVyIGlkXG4gKi9cblxuZnVuY3Rpb24gU2x1Z2dlciAoKSB7XG4gIHRoaXMuc2VlbiA9IHt9O1xufVxuXG4vKipcbiAqIENvbnZlcnQgc3RyaW5nIHRvIHVuaXF1ZSBpZFxuICovXG5cblNsdWdnZXIucHJvdG90eXBlLnNsdWcgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHNsdWcgPSB2YWx1ZVxuICAgIC50b0xvd2VyQ2FzZSgpXG4gICAgLnRyaW0oKVxuICAgIC5yZXBsYWNlKC9bXFx1MjAwMC1cXHUyMDZGXFx1MkUwMC1cXHUyRTdGXFxcXCchXCIjJCUmKCkqKywuLzo7PD0+P0BbXFxdXmB7fH1+XS9nLCAnJylcbiAgICAucmVwbGFjZSgvXFxzL2csICctJyk7XG5cbiAgaWYgKHRoaXMuc2Vlbi5oYXNPd25Qcm9wZXJ0eShzbHVnKSkge1xuICAgIHZhciBvcmlnaW5hbFNsdWcgPSBzbHVnO1xuICAgIGRvIHtcbiAgICAgIHRoaXMuc2VlbltvcmlnaW5hbFNsdWddKys7XG4gICAgICBzbHVnID0gb3JpZ2luYWxTbHVnICsgJy0nICsgdGhpcy5zZWVuW29yaWdpbmFsU2x1Z107XG4gICAgfSB3aGlsZSAodGhpcy5zZWVuLmhhc093blByb3BlcnR5KHNsdWcpKTtcbiAgfVxuICB0aGlzLnNlZW5bc2x1Z10gPSAwO1xuXG4gIHJldHVybiBzbHVnO1xufTtcblxuLyoqXG4gKiBIZWxwZXJzXG4gKi9cblxuZnVuY3Rpb24gZXNjYXBlKGh0bWwsIGVuY29kZSkge1xuICBpZiAoZW5jb2RlKSB7XG4gICAgaWYgKGVzY2FwZS5lc2NhcGVUZXN0LnRlc3QoaHRtbCkpIHtcbiAgICAgIHJldHVybiBodG1sLnJlcGxhY2UoZXNjYXBlLmVzY2FwZVJlcGxhY2UsIGZ1bmN0aW9uIChjaCkgeyByZXR1cm4gZXNjYXBlLnJlcGxhY2VtZW50c1tjaF07IH0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoZXNjYXBlLmVzY2FwZVRlc3ROb0VuY29kZS50ZXN0KGh0bWwpKSB7XG4gICAgICByZXR1cm4gaHRtbC5yZXBsYWNlKGVzY2FwZS5lc2NhcGVSZXBsYWNlTm9FbmNvZGUsIGZ1bmN0aW9uIChjaCkgeyByZXR1cm4gZXNjYXBlLnJlcGxhY2VtZW50c1tjaF07IH0pO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBodG1sO1xufVxuXG5lc2NhcGUuZXNjYXBlVGVzdCA9IC9bJjw+XCInXS87XG5lc2NhcGUuZXNjYXBlUmVwbGFjZSA9IC9bJjw+XCInXS9nO1xuZXNjYXBlLnJlcGxhY2VtZW50cyA9IHtcbiAgJyYnOiAnJmFtcDsnLFxuICAnPCc6ICcmbHQ7JyxcbiAgJz4nOiAnJmd0OycsXG4gICdcIic6ICcmcXVvdDsnLFxuICBcIidcIjogJyYjMzk7J1xufTtcblxuZXNjYXBlLmVzY2FwZVRlc3ROb0VuY29kZSA9IC9bPD5cIiddfCYoPyEjP1xcdys7KS87XG5lc2NhcGUuZXNjYXBlUmVwbGFjZU5vRW5jb2RlID0gL1s8PlwiJ118Jig/ISM/XFx3KzspL2c7XG5cbmZ1bmN0aW9uIHVuZXNjYXBlKGh0bWwpIHtcbiAgLy8gZXhwbGljaXRseSBtYXRjaCBkZWNpbWFsLCBoZXgsIGFuZCBuYW1lZCBIVE1MIGVudGl0aWVzXG4gIHJldHVybiBodG1sLnJlcGxhY2UoLyYoIyg/OlxcZCspfCg/OiN4WzAtOUEtRmEtZl0rKXwoPzpcXHcrKSk7Py9pZywgZnVuY3Rpb24oXywgbikge1xuICAgIG4gPSBuLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKG4gPT09ICdjb2xvbicpIHJldHVybiAnOic7XG4gICAgaWYgKG4uY2hhckF0KDApID09PSAnIycpIHtcbiAgICAgIHJldHVybiBuLmNoYXJBdCgxKSA9PT0gJ3gnXG4gICAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChuLnN1YnN0cmluZygyKSwgMTYpKVxuICAgICAgICA6IFN0cmluZy5mcm9tQ2hhckNvZGUoK24uc3Vic3RyaW5nKDEpKTtcbiAgICB9XG4gICAgcmV0dXJuICcnO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZWRpdChyZWdleCwgb3B0KSB7XG4gIHJlZ2V4ID0gcmVnZXguc291cmNlIHx8IHJlZ2V4O1xuICBvcHQgPSBvcHQgfHwgJyc7XG4gIHJldHVybiB7XG4gICAgcmVwbGFjZTogZnVuY3Rpb24obmFtZSwgdmFsKSB7XG4gICAgICB2YWwgPSB2YWwuc291cmNlIHx8IHZhbDtcbiAgICAgIHZhbCA9IHZhbC5yZXBsYWNlKC8oXnxbXlxcW10pXFxeL2csICckMScpO1xuICAgICAgcmVnZXggPSByZWdleC5yZXBsYWNlKG5hbWUsIHZhbCk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9LFxuICAgIGdldFJlZ2V4OiBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBuZXcgUmVnRXhwKHJlZ2V4LCBvcHQpO1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gY2xlYW5Vcmwoc2FuaXRpemUsIGJhc2UsIGhyZWYpIHtcbiAgaWYgKHNhbml0aXplKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBwcm90ID0gZGVjb2RlVVJJQ29tcG9uZW50KHVuZXNjYXBlKGhyZWYpKVxuICAgICAgICAucmVwbGFjZSgvW15cXHc6XS9nLCAnJylcbiAgICAgICAgLnRvTG93ZXJDYXNlKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGlmIChwcm90LmluZGV4T2YoJ2phdmFzY3JpcHQ6JykgPT09IDAgfHwgcHJvdC5pbmRleE9mKCd2YnNjcmlwdDonKSA9PT0gMCB8fCBwcm90LmluZGV4T2YoJ2RhdGE6JykgPT09IDApIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgfVxuICBpZiAoYmFzZSAmJiAhb3JpZ2luSW5kZXBlbmRlbnRVcmwudGVzdChocmVmKSkge1xuICAgIGhyZWYgPSByZXNvbHZlVXJsKGJhc2UsIGhyZWYpO1xuICB9XG4gIHRyeSB7XG4gICAgaHJlZiA9IGVuY29kZVVSSShocmVmKS5yZXBsYWNlKC8lMjUvZywgJyUnKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBudWxsO1xuICB9XG4gIHJldHVybiBocmVmO1xufVxuXG5mdW5jdGlvbiByZXNvbHZlVXJsKGJhc2UsIGhyZWYpIHtcbiAgaWYgKCFiYXNlVXJsc1snICcgKyBiYXNlXSkge1xuICAgIC8vIHdlIGNhbiBpZ25vcmUgZXZlcnl0aGluZyBpbiBiYXNlIGFmdGVyIHRoZSBsYXN0IHNsYXNoIG9mIGl0cyBwYXRoIGNvbXBvbmVudCxcbiAgICAvLyBidXQgd2UgbWlnaHQgbmVlZCB0byBhZGQgX3RoYXRfXG4gICAgLy8gaHR0cHM6Ly90b29scy5pZXRmLm9yZy9odG1sL3JmYzM5ODYjc2VjdGlvbi0zXG4gICAgaWYgKC9eW146XSs6XFwvKlteL10qJC8udGVzdChiYXNlKSkge1xuICAgICAgYmFzZVVybHNbJyAnICsgYmFzZV0gPSBiYXNlICsgJy8nO1xuICAgIH0gZWxzZSB7XG4gICAgICBiYXNlVXJsc1snICcgKyBiYXNlXSA9IHJ0cmltKGJhc2UsICcvJywgdHJ1ZSk7XG4gICAgfVxuICB9XG4gIGJhc2UgPSBiYXNlVXJsc1snICcgKyBiYXNlXTtcblxuICBpZiAoaHJlZi5zbGljZSgwLCAyKSA9PT0gJy8vJykge1xuICAgIHJldHVybiBiYXNlLnJlcGxhY2UoLzpbXFxzXFxTXSovLCAnOicpICsgaHJlZjtcbiAgfSBlbHNlIGlmIChocmVmLmNoYXJBdCgwKSA9PT0gJy8nKSB7XG4gICAgcmV0dXJuIGJhc2UucmVwbGFjZSgvKDpcXC8qW14vXSopW1xcc1xcU10qLywgJyQxJykgKyBocmVmO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBiYXNlICsgaHJlZjtcbiAgfVxufVxudmFyIGJhc2VVcmxzID0ge307XG52YXIgb3JpZ2luSW5kZXBlbmRlbnRVcmwgPSAvXiR8XlthLXpdW2EtejAtOSsuLV0qOnxeWz8jXS9pO1xuXG5mdW5jdGlvbiBub29wKCkge31cbm5vb3AuZXhlYyA9IG5vb3A7XG5cbmZ1bmN0aW9uIG1lcmdlKG9iaikge1xuICB2YXIgaSA9IDEsXG4gICAgICB0YXJnZXQsXG4gICAgICBrZXk7XG5cbiAgZm9yICg7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICB0YXJnZXQgPSBhcmd1bWVudHNbaV07XG4gICAgZm9yIChrZXkgaW4gdGFyZ2V0KSB7XG4gICAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHRhcmdldCwga2V5KSkge1xuICAgICAgICBvYmpba2V5XSA9IHRhcmdldFtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBvYmo7XG59XG5cbmZ1bmN0aW9uIHNwbGl0Q2VsbHModGFibGVSb3csIGNvdW50KSB7XG4gIC8vIGVuc3VyZSB0aGF0IGV2ZXJ5IGNlbGwtZGVsaW1pdGluZyBwaXBlIGhhcyBhIHNwYWNlXG4gIC8vIGJlZm9yZSBpdCB0byBkaXN0aW5ndWlzaCBpdCBmcm9tIGFuIGVzY2FwZWQgcGlwZVxuICB2YXIgcm93ID0gdGFibGVSb3cucmVwbGFjZSgvXFx8L2csIGZ1bmN0aW9uIChtYXRjaCwgb2Zmc2V0LCBzdHIpIHtcbiAgICAgICAgdmFyIGVzY2FwZWQgPSBmYWxzZSxcbiAgICAgICAgICAgIGN1cnIgPSBvZmZzZXQ7XG4gICAgICAgIHdoaWxlICgtLWN1cnIgPj0gMCAmJiBzdHJbY3Vycl0gPT09ICdcXFxcJykgZXNjYXBlZCA9ICFlc2NhcGVkO1xuICAgICAgICBpZiAoZXNjYXBlZCkge1xuICAgICAgICAgIC8vIG9kZCBudW1iZXIgb2Ygc2xhc2hlcyBtZWFucyB8IGlzIGVzY2FwZWRcbiAgICAgICAgICAvLyBzbyB3ZSBsZWF2ZSBpdCBhbG9uZVxuICAgICAgICAgIHJldHVybiAnfCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgLy8gYWRkIHNwYWNlIGJlZm9yZSB1bmVzY2FwZWQgfFxuICAgICAgICAgIHJldHVybiAnIHwnO1xuICAgICAgICB9XG4gICAgICB9KSxcbiAgICAgIGNlbGxzID0gcm93LnNwbGl0KC8gXFx8LyksXG4gICAgICBpID0gMDtcblxuICBpZiAoY2VsbHMubGVuZ3RoID4gY291bnQpIHtcbiAgICBjZWxscy5zcGxpY2UoY291bnQpO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChjZWxscy5sZW5ndGggPCBjb3VudCkgY2VsbHMucHVzaCgnJyk7XG4gIH1cblxuICBmb3IgKDsgaSA8IGNlbGxzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gbGVhZGluZyBvciB0cmFpbGluZyB3aGl0ZXNwYWNlIGlzIGlnbm9yZWQgcGVyIHRoZSBnZm0gc3BlY1xuICAgIGNlbGxzW2ldID0gY2VsbHNbaV0udHJpbSgpLnJlcGxhY2UoL1xcXFxcXHwvZywgJ3wnKTtcbiAgfVxuICByZXR1cm4gY2VsbHM7XG59XG5cbi8vIFJlbW92ZSB0cmFpbGluZyAnYydzLiBFcXVpdmFsZW50IHRvIHN0ci5yZXBsYWNlKC9jKiQvLCAnJykuXG4vLyAvYyokLyBpcyB2dWxuZXJhYmxlIHRvIFJFRE9TLlxuLy8gaW52ZXJ0OiBSZW1vdmUgc3VmZml4IG9mIG5vbi1jIGNoYXJzIGluc3RlYWQuIERlZmF1bHQgZmFsc2V5LlxuZnVuY3Rpb24gcnRyaW0oc3RyLCBjLCBpbnZlcnQpIHtcbiAgaWYgKHN0ci5sZW5ndGggPT09IDApIHtcbiAgICByZXR1cm4gJyc7XG4gIH1cblxuICAvLyBMZW5ndGggb2Ygc3VmZml4IG1hdGNoaW5nIHRoZSBpbnZlcnQgY29uZGl0aW9uLlxuICB2YXIgc3VmZkxlbiA9IDA7XG5cbiAgLy8gU3RlcCBsZWZ0IHVudGlsIHdlIGZhaWwgdG8gbWF0Y2ggdGhlIGludmVydCBjb25kaXRpb24uXG4gIHdoaWxlIChzdWZmTGVuIDwgc3RyLmxlbmd0aCkge1xuICAgIHZhciBjdXJyQ2hhciA9IHN0ci5jaGFyQXQoc3RyLmxlbmd0aCAtIHN1ZmZMZW4gLSAxKTtcbiAgICBpZiAoY3VyckNoYXIgPT09IGMgJiYgIWludmVydCkge1xuICAgICAgc3VmZkxlbisrO1xuICAgIH0gZWxzZSBpZiAoY3VyckNoYXIgIT09IGMgJiYgaW52ZXJ0KSB7XG4gICAgICBzdWZmTGVuKys7XG4gICAgfSBlbHNlIHtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBzdHIuc3Vic3RyKDAsIHN0ci5sZW5ndGggLSBzdWZmTGVuKTtcbn1cblxuZnVuY3Rpb24gZmluZENsb3NpbmdCcmFja2V0KHN0ciwgYikge1xuICBpZiAoc3RyLmluZGV4T2YoYlsxXSkgPT09IC0xKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHZhciBsZXZlbCA9IDA7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3RyLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0cltpXSA9PT0gJ1xcXFwnKSB7XG4gICAgICBpKys7XG4gICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IGJbMF0pIHtcbiAgICAgIGxldmVsKys7XG4gICAgfSBlbHNlIGlmIChzdHJbaV0gPT09IGJbMV0pIHtcbiAgICAgIGxldmVsLS07XG4gICAgICBpZiAobGV2ZWwgPCAwKSB7XG4gICAgICAgIHJldHVybiBpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gLTE7XG59XG5cbi8qKlxuICogTWFya2VkXG4gKi9cblxuZnVuY3Rpb24gbWFya2VkKHNyYywgb3B0LCBjYWxsYmFjaykge1xuICAvLyB0aHJvdyBlcnJvciBpbiBjYXNlIG9mIG5vbiBzdHJpbmcgaW5wdXRcbiAgaWYgKHR5cGVvZiBzcmMgPT09ICd1bmRlZmluZWQnIHx8IHNyYyA9PT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBFcnJvcignbWFya2VkKCk6IGlucHV0IHBhcmFtZXRlciBpcyB1bmRlZmluZWQgb3IgbnVsbCcpO1xuICB9XG4gIGlmICh0eXBlb2Ygc3JjICE9PSAnc3RyaW5nJykge1xuICAgIHRocm93IG5ldyBFcnJvcignbWFya2VkKCk6IGlucHV0IHBhcmFtZXRlciBpcyBvZiB0eXBlICdcbiAgICAgICsgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHNyYykgKyAnLCBzdHJpbmcgZXhwZWN0ZWQnKTtcbiAgfVxuXG4gIGlmIChjYWxsYmFjayB8fCB0eXBlb2Ygb3B0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKCFjYWxsYmFjaykge1xuICAgICAgY2FsbGJhY2sgPSBvcHQ7XG4gICAgICBvcHQgPSBudWxsO1xuICAgIH1cblxuICAgIG9wdCA9IG1lcmdlKHt9LCBtYXJrZWQuZGVmYXVsdHMsIG9wdCB8fCB7fSk7XG5cbiAgICB2YXIgaGlnaGxpZ2h0ID0gb3B0LmhpZ2hsaWdodCxcbiAgICAgICAgdG9rZW5zLFxuICAgICAgICBwZW5kaW5nLFxuICAgICAgICBpID0gMDtcblxuICAgIHRyeSB7XG4gICAgICB0b2tlbnMgPSBMZXhlci5sZXgoc3JjLCBvcHQpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHJldHVybiBjYWxsYmFjayhlKTtcbiAgICB9XG5cbiAgICBwZW5kaW5nID0gdG9rZW5zLmxlbmd0aDtcblxuICAgIHZhciBkb25lID0gZnVuY3Rpb24oZXJyKSB7XG4gICAgICBpZiAoZXJyKSB7XG4gICAgICAgIG9wdC5oaWdobGlnaHQgPSBoaWdobGlnaHQ7XG4gICAgICAgIHJldHVybiBjYWxsYmFjayhlcnIpO1xuICAgICAgfVxuXG4gICAgICB2YXIgb3V0O1xuXG4gICAgICB0cnkge1xuICAgICAgICBvdXQgPSBQYXJzZXIucGFyc2UodG9rZW5zLCBvcHQpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBlcnIgPSBlO1xuICAgICAgfVxuXG4gICAgICBvcHQuaGlnaGxpZ2h0ID0gaGlnaGxpZ2h0O1xuXG4gICAgICByZXR1cm4gZXJyXG4gICAgICAgID8gY2FsbGJhY2soZXJyKVxuICAgICAgICA6IGNhbGxiYWNrKG51bGwsIG91dCk7XG4gICAgfTtcblxuICAgIGlmICghaGlnaGxpZ2h0IHx8IGhpZ2hsaWdodC5sZW5ndGggPCAzKSB7XG4gICAgICByZXR1cm4gZG9uZSgpO1xuICAgIH1cblxuICAgIGRlbGV0ZSBvcHQuaGlnaGxpZ2h0O1xuXG4gICAgaWYgKCFwZW5kaW5nKSByZXR1cm4gZG9uZSgpO1xuXG4gICAgZm9yICg7IGkgPCB0b2tlbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIChmdW5jdGlvbih0b2tlbikge1xuICAgICAgICBpZiAodG9rZW4udHlwZSAhPT0gJ2NvZGUnKSB7XG4gICAgICAgICAgcmV0dXJuIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGhpZ2hsaWdodCh0b2tlbi50ZXh0LCB0b2tlbi5sYW5nLCBmdW5jdGlvbihlcnIsIGNvZGUpIHtcbiAgICAgICAgICBpZiAoZXJyKSByZXR1cm4gZG9uZShlcnIpO1xuICAgICAgICAgIGlmIChjb2RlID09IG51bGwgfHwgY29kZSA9PT0gdG9rZW4udGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRva2VuLnRleHQgPSBjb2RlO1xuICAgICAgICAgIHRva2VuLmVzY2FwZWQgPSB0cnVlO1xuICAgICAgICAgIC0tcGVuZGluZyB8fCBkb25lKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkodG9rZW5zW2ldKTtcbiAgICB9XG5cbiAgICByZXR1cm47XG4gIH1cbiAgdHJ5IHtcbiAgICBpZiAob3B0KSBvcHQgPSBtZXJnZSh7fSwgbWFya2VkLmRlZmF1bHRzLCBvcHQpO1xuICAgIHJldHVybiBQYXJzZXIucGFyc2UoTGV4ZXIubGV4KHNyYywgb3B0KSwgb3B0KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGUubWVzc2FnZSArPSAnXFxuUGxlYXNlIHJlcG9ydCB0aGlzIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9tYXJrZWRqcy9tYXJrZWQuJztcbiAgICBpZiAoKG9wdCB8fCBtYXJrZWQuZGVmYXVsdHMpLnNpbGVudCkge1xuICAgICAgcmV0dXJuICc8cD5BbiBlcnJvciBvY2N1cnJlZDo8L3A+PHByZT4nXG4gICAgICAgICsgZXNjYXBlKGUubWVzc2FnZSArICcnLCB0cnVlKVxuICAgICAgICArICc8L3ByZT4nO1xuICAgIH1cbiAgICB0aHJvdyBlO1xuICB9XG59XG5cbi8qKlxuICogT3B0aW9uc1xuICovXG5cbm1hcmtlZC5vcHRpb25zID1cbm1hcmtlZC5zZXRPcHRpb25zID0gZnVuY3Rpb24ob3B0KSB7XG4gIG1lcmdlKG1hcmtlZC5kZWZhdWx0cywgb3B0KTtcbiAgcmV0dXJuIG1hcmtlZDtcbn07XG5cbm1hcmtlZC5nZXREZWZhdWx0cyA9IGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIHtcbiAgICBiYXNlVXJsOiBudWxsLFxuICAgIGJyZWFrczogZmFsc2UsXG4gICAgZ2ZtOiB0cnVlLFxuICAgIGhlYWRlcklkczogdHJ1ZSxcbiAgICBoZWFkZXJQcmVmaXg6ICcnLFxuICAgIGhpZ2hsaWdodDogbnVsbCxcbiAgICBsYW5nUHJlZml4OiAnbGFuZ3VhZ2UtJyxcbiAgICBtYW5nbGU6IHRydWUsXG4gICAgcGVkYW50aWM6IGZhbHNlLFxuICAgIHJlbmRlcmVyOiBuZXcgUmVuZGVyZXIoKSxcbiAgICBzYW5pdGl6ZTogZmFsc2UsXG4gICAgc2FuaXRpemVyOiBudWxsLFxuICAgIHNpbGVudDogZmFsc2UsXG4gICAgc21hcnRMaXN0czogZmFsc2UsXG4gICAgc21hcnR5cGFudHM6IGZhbHNlLFxuICAgIHRhYmxlczogdHJ1ZSxcbiAgICB4aHRtbDogZmFsc2VcbiAgfTtcbn07XG5cbm1hcmtlZC5kZWZhdWx0cyA9IG1hcmtlZC5nZXREZWZhdWx0cygpO1xuXG4vKipcbiAqIEV4cG9zZVxuICovXG5cbm1hcmtlZC5QYXJzZXIgPSBQYXJzZXI7XG5tYXJrZWQucGFyc2VyID0gUGFyc2VyLnBhcnNlO1xuXG5tYXJrZWQuUmVuZGVyZXIgPSBSZW5kZXJlcjtcbm1hcmtlZC5UZXh0UmVuZGVyZXIgPSBUZXh0UmVuZGVyZXI7XG5cbm1hcmtlZC5MZXhlciA9IExleGVyO1xubWFya2VkLmxleGVyID0gTGV4ZXIubGV4O1xuXG5tYXJrZWQuSW5saW5lTGV4ZXIgPSBJbmxpbmVMZXhlcjtcbm1hcmtlZC5pbmxpbmVMZXhlciA9IElubGluZUxleGVyLm91dHB1dDtcblxubWFya2VkLlNsdWdnZXIgPSBTbHVnZ2VyO1xuXG5tYXJrZWQucGFyc2UgPSBtYXJrZWQ7XG5cbmlmICh0eXBlb2YgbW9kdWxlICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBtYXJrZWQ7XG59IGVsc2UgaWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuICBkZWZpbmUoZnVuY3Rpb24oKSB7IHJldHVybiBtYXJrZWQ7IH0pO1xufSBlbHNlIHtcbiAgcm9vdC5tYXJrZWQgPSBtYXJrZWQ7XG59XG59KSh0aGlzIHx8ICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyA/IHdpbmRvdyA6IGdsb2JhbCkpO1xuIiwidmFyIGc7XG5cbi8vIFRoaXMgd29ya3MgaW4gbm9uLXN0cmljdCBtb2RlXG5nID0gKGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcztcbn0pKCk7XG5cbnRyeSB7XG5cdC8vIFRoaXMgd29ya3MgaWYgZXZhbCBpcyBhbGxvd2VkIChzZWUgQ1NQKVxuXHRnID0gZyB8fCBuZXcgRnVuY3Rpb24oXCJyZXR1cm4gdGhpc1wiKSgpO1xufSBjYXRjaCAoZSkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIHRoZSB3aW5kb3cgcmVmZXJlbmNlIGlzIGF2YWlsYWJsZVxuXHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gXCJvYmplY3RcIikgZyA9IHdpbmRvdztcbn1cblxuLy8gZyBjYW4gc3RpbGwgYmUgdW5kZWZpbmVkLCBidXQgbm90aGluZyB0byBkbyBhYm91dCBpdC4uLlxuLy8gV2UgcmV0dXJuIHVuZGVmaW5lZCwgaW5zdGVhZCBvZiBub3RoaW5nIGhlcmUsIHNvIGl0J3Ncbi8vIGVhc2llciB0byBoYW5kbGUgdGhpcyBjYXNlLiBpZighZ2xvYmFsKSB7IC4uLn1cblxubW9kdWxlLmV4cG9ydHMgPSBnO1xuIiwiaW1wb3J0IG1hcmtlZCBmcm9tIFwibWFya2VkXCI7IC8vIEB0cy1pZ25vcmVcblxuaW1wb3J0IGZpbHRlclhTUyBmcm9tIFwieHNzXCI7XG5sZXQgd2hpdGVMaXN0Tm9ybWFsO1xubGV0IHdoaXRlTGlzdFN2ZztcbmV4cG9ydCBjb25zdCByZW5kZXJNYXJrZG93biA9IChjb250ZW50LCBtYXJrZWRPcHRpb25zLCBoYXNzT3B0aW9ucyA9IHt9KSA9PiB7XG4gIGlmICghd2hpdGVMaXN0Tm9ybWFsKSB7XG4gICAgd2hpdGVMaXN0Tm9ybWFsID0gT2JqZWN0LmFzc2lnbih7fSwgZmlsdGVyWFNTLndoaXRlTGlzdCwge1xuICAgICAgXCJoYS1pY29uXCI6IFtcImljb25cIl1cbiAgICB9KTtcbiAgfVxuXG4gIGxldCB3aGl0ZUxpc3Q7XG5cbiAgaWYgKGhhc3NPcHRpb25zLmFsbG93U3ZnKSB7XG4gICAgaWYgKCF3aGl0ZUxpc3RTdmcpIHtcbiAgICAgIHdoaXRlTGlzdFN2ZyA9IE9iamVjdC5hc3NpZ24oe30sIHdoaXRlTGlzdE5vcm1hbCwge1xuICAgICAgICBzdmc6IFtcInhtbG5zXCIsIFwiaGVpZ2h0XCIsIFwid2lkdGhcIl0sXG4gICAgICAgIHBhdGg6IFtcInRyYW5zZm9ybVwiLCBcInN0cm9rZVwiLCBcImRcIl1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHdoaXRlTGlzdCA9IHdoaXRlTGlzdFN2ZztcbiAgfSBlbHNlIHtcbiAgICB3aGl0ZUxpc3QgPSB3aGl0ZUxpc3ROb3JtYWw7XG4gIH1cblxuICByZXR1cm4gZmlsdGVyWFNTKG1hcmtlZChjb250ZW50LCBtYXJrZWRPcHRpb25zKSwge1xuICAgIHdoaXRlTGlzdFxuICB9KTtcbn07XG5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgZnVuY3Rpb24gKGUpIHt2YXIgcmVmID0gZS5kYXRhO3ZhciB0eXBlID0gcmVmLnR5cGU7dmFyIG1ldGhvZCA9IHJlZi5tZXRob2Q7dmFyIGlkID0gcmVmLmlkO3ZhciBwYXJhbXMgPSByZWYucGFyYW1zO3ZhciBmLHA7aWYgKHR5cGUgPT09ICdSUEMnICYmIG1ldGhvZCkge2lmIChmID0gX193ZWJwYWNrX2V4cG9ydHNfX1ttZXRob2RdKSB7cCA9IFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4gZi5hcHBseShfX3dlYnBhY2tfZXhwb3J0c19fLCBwYXJhbXMpOyB9KTt9IGVsc2Uge3AgPSBQcm9taXNlLnJlamVjdCgnTm8gc3VjaCBtZXRob2QnKTt9cC50aGVuKGZ1bmN0aW9uIChyZXN1bHQpIHtwb3N0TWVzc2FnZSh7dHlwZTogJ1JQQycsaWQ6IGlkLHJlc3VsdDogcmVzdWx0fSk7fSkuY2F0Y2goZnVuY3Rpb24gKGUpIHt2YXIgZXJyb3IgPSB7bWVzc2FnZTogZX07aWYgKGUuc3RhY2spIHtlcnJvci5tZXNzYWdlID0gZS5tZXNzYWdlO2Vycm9yLnN0YWNrID0gZS5zdGFjaztlcnJvci5uYW1lID0gZS5uYW1lO31wb3N0TWVzc2FnZSh7dHlwZTogJ1JQQycsaWQ6IGlkLGVycm9yOiBlcnJvcn0pO30pO319KTtwb3N0TWVzc2FnZSh7dHlwZTogJ1JQQycsbWV0aG9kOiAncmVhZHknfSk7IiwiLyoqXG4gKiBkZWZhdWx0IHNldHRpbmdzXG4gKlxuICogQGF1dGhvciBab25nbWluIExlaTxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgRmlsdGVyQ1NTID0gcmVxdWlyZShcImNzc2ZpbHRlclwiKS5GaWx0ZXJDU1M7XG52YXIgZ2V0RGVmYXVsdENTU1doaXRlTGlzdCA9IHJlcXVpcmUoXCJjc3NmaWx0ZXJcIikuZ2V0RGVmYXVsdFdoaXRlTGlzdDtcbnZhciBfID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdFdoaXRlTGlzdCgpIHtcbiAgcmV0dXJuIHtcbiAgICBhOiBbXCJ0YXJnZXRcIiwgXCJocmVmXCIsIFwidGl0bGVcIl0sXG4gICAgYWJicjogW1widGl0bGVcIl0sXG4gICAgYWRkcmVzczogW10sXG4gICAgYXJlYTogW1wic2hhcGVcIiwgXCJjb29yZHNcIiwgXCJocmVmXCIsIFwiYWx0XCJdLFxuICAgIGFydGljbGU6IFtdLFxuICAgIGFzaWRlOiBbXSxcbiAgICBhdWRpbzogW1wiYXV0b3BsYXlcIiwgXCJjb250cm9sc1wiLCBcImxvb3BcIiwgXCJwcmVsb2FkXCIsIFwic3JjXCJdLFxuICAgIGI6IFtdLFxuICAgIGJkaTogW1wiZGlyXCJdLFxuICAgIGJkbzogW1wiZGlyXCJdLFxuICAgIGJpZzogW10sXG4gICAgYmxvY2txdW90ZTogW1wiY2l0ZVwiXSxcbiAgICBicjogW10sXG4gICAgY2FwdGlvbjogW10sXG4gICAgY2VudGVyOiBbXSxcbiAgICBjaXRlOiBbXSxcbiAgICBjb2RlOiBbXSxcbiAgICBjb2w6IFtcImFsaWduXCIsIFwidmFsaWduXCIsIFwic3BhblwiLCBcIndpZHRoXCJdLFxuICAgIGNvbGdyb3VwOiBbXCJhbGlnblwiLCBcInZhbGlnblwiLCBcInNwYW5cIiwgXCJ3aWR0aFwiXSxcbiAgICBkZDogW10sXG4gICAgZGVsOiBbXCJkYXRldGltZVwiXSxcbiAgICBkZXRhaWxzOiBbXCJvcGVuXCJdLFxuICAgIGRpdjogW10sXG4gICAgZGw6IFtdLFxuICAgIGR0OiBbXSxcbiAgICBlbTogW10sXG4gICAgZm9udDogW1wiY29sb3JcIiwgXCJzaXplXCIsIFwiZmFjZVwiXSxcbiAgICBmb290ZXI6IFtdLFxuICAgIGgxOiBbXSxcbiAgICBoMjogW10sXG4gICAgaDM6IFtdLFxuICAgIGg0OiBbXSxcbiAgICBoNTogW10sXG4gICAgaDY6IFtdLFxuICAgIGhlYWRlcjogW10sXG4gICAgaHI6IFtdLFxuICAgIGk6IFtdLFxuICAgIGltZzogW1wic3JjXCIsIFwiYWx0XCIsIFwidGl0bGVcIiwgXCJ3aWR0aFwiLCBcImhlaWdodFwiXSxcbiAgICBpbnM6IFtcImRhdGV0aW1lXCJdLFxuICAgIGxpOiBbXSxcbiAgICBtYXJrOiBbXSxcbiAgICBuYXY6IFtdLFxuICAgIG9sOiBbXSxcbiAgICBwOiBbXSxcbiAgICBwcmU6IFtdLFxuICAgIHM6IFtdLFxuICAgIHNlY3Rpb246IFtdLFxuICAgIHNtYWxsOiBbXSxcbiAgICBzcGFuOiBbXSxcbiAgICBzdWI6IFtdLFxuICAgIHN1cDogW10sXG4gICAgc3Ryb25nOiBbXSxcbiAgICB0YWJsZTogW1wid2lkdGhcIiwgXCJib3JkZXJcIiwgXCJhbGlnblwiLCBcInZhbGlnblwiXSxcbiAgICB0Ym9keTogW1wiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGQ6IFtcIndpZHRoXCIsIFwicm93c3BhblwiLCBcImNvbHNwYW5cIiwgXCJhbGlnblwiLCBcInZhbGlnblwiXSxcbiAgICB0Zm9vdDogW1wiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdGg6IFtcIndpZHRoXCIsIFwicm93c3BhblwiLCBcImNvbHNwYW5cIiwgXCJhbGlnblwiLCBcInZhbGlnblwiXSxcbiAgICB0aGVhZDogW1wiYWxpZ25cIiwgXCJ2YWxpZ25cIl0sXG4gICAgdHI6IFtcInJvd3NwYW5cIiwgXCJhbGlnblwiLCBcInZhbGlnblwiXSxcbiAgICB0dDogW10sXG4gICAgdTogW10sXG4gICAgdWw6IFtdLFxuICAgIHZpZGVvOiBbXCJhdXRvcGxheVwiLCBcImNvbnRyb2xzXCIsIFwibG9vcFwiLCBcInByZWxvYWRcIiwgXCJzcmNcIiwgXCJoZWlnaHRcIiwgXCJ3aWR0aFwiXVxuICB9O1xufVxuXG52YXIgZGVmYXVsdENTU0ZpbHRlciA9IG5ldyBGaWx0ZXJDU1MoKTtcblxuLyoqXG4gKiBkZWZhdWx0IG9uVGFnIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9uVGFnKHRhZywgaHRtbCwgb3B0aW9ucykge1xuICAvLyBkbyBub3RoaW5nXG59XG5cbi8qKlxuICogZGVmYXVsdCBvbklnbm9yZVRhZyBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvbklnbm9yZVRhZyh0YWcsIGh0bWwsIG9wdGlvbnMpIHtcbiAgLy8gZG8gbm90aGluZ1xufVxuXG4vKipcbiAqIGRlZmF1bHQgb25UYWdBdHRyIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHRhZ1xuICogQHBhcmFtIHtTdHJpbmd9IG5hbWVcbiAqIEBwYXJhbSB7U3RyaW5nfSB2YWx1ZVxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBvblRhZ0F0dHIodGFnLCBuYW1lLCB2YWx1ZSkge1xuICAvLyBkbyBub3RoaW5nXG59XG5cbi8qKlxuICogZGVmYXVsdCBvbklnbm9yZVRhZ0F0dHIgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gdGFnXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHtTdHJpbmd9IHZhbHVlXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIG9uSWdub3JlVGFnQXR0cih0YWcsIG5hbWUsIHZhbHVlKSB7XG4gIC8vIGRvIG5vdGhpbmdcbn1cblxuLyoqXG4gKiBkZWZhdWx0IGVzY2FwZUh0bWwgZnVuY3Rpb25cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICovXG5mdW5jdGlvbiBlc2NhcGVIdG1sKGh0bWwpIHtcbiAgcmV0dXJuIGh0bWwucmVwbGFjZShSRUdFWFBfTFQsIFwiJmx0O1wiKS5yZXBsYWNlKFJFR0VYUF9HVCwgXCImZ3Q7XCIpO1xufVxuXG4vKipcbiAqIGRlZmF1bHQgc2FmZUF0dHJWYWx1ZSBmdW5jdGlvblxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSB0YWdcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0ge1N0cmluZ30gdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBjc3NGaWx0ZXJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gc2FmZUF0dHJWYWx1ZSh0YWcsIG5hbWUsIHZhbHVlLCBjc3NGaWx0ZXIpIHtcbiAgLy8gdW5lc2NhcGUgYXR0cmlidXRlIHZhbHVlIGZpcnN0bHlcbiAgdmFsdWUgPSBmcmllbmRseUF0dHJWYWx1ZSh2YWx1ZSk7XG5cbiAgaWYgKG5hbWUgPT09IFwiaHJlZlwiIHx8IG5hbWUgPT09IFwic3JjXCIpIHtcbiAgICAvLyBmaWx0ZXIgYGhyZWZgIGFuZCBgc3JjYCBhdHRyaWJ1dGVcbiAgICAvLyBvbmx5IGFsbG93IHRoZSB2YWx1ZSB0aGF0IHN0YXJ0cyB3aXRoIGBodHRwOi8vYCB8IGBodHRwczovL2AgfCBgbWFpbHRvOmAgfCBgL2AgfCBgI2BcbiAgICB2YWx1ZSA9IF8udHJpbSh2YWx1ZSk7XG4gICAgaWYgKHZhbHVlID09PSBcIiNcIikgcmV0dXJuIFwiI1wiO1xuICAgIGlmIChcbiAgICAgICEoXG4gICAgICAgIHZhbHVlLnN1YnN0cigwLCA3KSA9PT0gXCJodHRwOi8vXCIgfHxcbiAgICAgICAgdmFsdWUuc3Vic3RyKDAsIDgpID09PSBcImh0dHBzOi8vXCIgfHxcbiAgICAgICAgdmFsdWUuc3Vic3RyKDAsIDcpID09PSBcIm1haWx0bzpcIiB8fFxuICAgICAgICB2YWx1ZS5zdWJzdHIoMCwgNCkgPT09IFwidGVsOlwiIHx8XG4gICAgICAgIHZhbHVlWzBdID09PSBcIiNcIiB8fFxuICAgICAgICB2YWx1ZVswXSA9PT0gXCIvXCJcbiAgICAgIClcbiAgICApIHtcbiAgICAgIHJldHVybiBcIlwiO1xuICAgIH1cbiAgfSBlbHNlIGlmIChuYW1lID09PSBcImJhY2tncm91bmRcIikge1xuICAgIC8vIGZpbHRlciBgYmFja2dyb3VuZGAgYXR0cmlidXRlIChtYXliZSBubyB1c2UpXG4gICAgLy8gYGphdmFzY3JpcHQ6YFxuICAgIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQubGFzdEluZGV4ID0gMDtcbiAgICBpZiAoUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfNC50ZXN0KHZhbHVlKSkge1xuICAgICAgcmV0dXJuIFwiXCI7XG4gICAgfVxuICB9IGVsc2UgaWYgKG5hbWUgPT09IFwic3R5bGVcIikge1xuICAgIC8vIGBleHByZXNzaW9uKClgXG4gICAgUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfNy5sYXN0SW5kZXggPSAwO1xuICAgIGlmIChSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl83LnRlc3QodmFsdWUpKSB7XG4gICAgICByZXR1cm4gXCJcIjtcbiAgICB9XG4gICAgLy8gYHVybCgpYFxuICAgIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzgubGFzdEluZGV4ID0gMDtcbiAgICBpZiAoUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfOC50ZXN0KHZhbHVlKSkge1xuICAgICAgUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfNC5sYXN0SW5kZXggPSAwO1xuICAgICAgaWYgKFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzQudGVzdCh2YWx1ZSkpIHtcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjc3NGaWx0ZXIgIT09IGZhbHNlKSB7XG4gICAgICBjc3NGaWx0ZXIgPSBjc3NGaWx0ZXIgfHwgZGVmYXVsdENTU0ZpbHRlcjtcbiAgICAgIHZhbHVlID0gY3NzRmlsdGVyLnByb2Nlc3ModmFsdWUpO1xuICAgIH1cbiAgfVxuXG4gIC8vIGVzY2FwZSBgPD5cImAgYmVmb3JlIHJldHVybnNcbiAgdmFsdWUgPSBlc2NhcGVBdHRyVmFsdWUodmFsdWUpO1xuICByZXR1cm4gdmFsdWU7XG59XG5cbi8vIFJlZ0V4cCBsaXN0XG52YXIgUkVHRVhQX0xUID0gLzwvZztcbnZhciBSRUdFWFBfR1QgPSAvPi9nO1xudmFyIFJFR0VYUF9RVU9URSA9IC9cIi9nO1xudmFyIFJFR0VYUF9RVU9URV8yID0gLyZxdW90Oy9nO1xudmFyIFJFR0VYUF9BVFRSX1ZBTFVFXzEgPSAvJiMoW2EtekEtWjAtOV0qKTs/L2dpbTtcbnZhciBSRUdFWFBfQVRUUl9WQUxVRV9DT0xPTiA9IC8mY29sb247Py9naW07XG52YXIgUkVHRVhQX0FUVFJfVkFMVUVfTkVXTElORSA9IC8mbmV3bGluZTs/L2dpbTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl8zID0gL1xcL1xcKnxcXCpcXC8vZ207XG52YXIgUkVHRVhQX0RFRkFVTFRfT05fVEFHX0FUVFJfNCA9IC8oKGpcXHMqYVxccyp2XFxzKmF8dlxccypifGxcXHMqaVxccyp2XFxzKmUpXFxzKnNcXHMqY1xccypyXFxzKmlcXHMqcFxccyp0XFxzKnxtXFxzKm9cXHMqY1xccypoXFxzKmEpXFw6L2dpO1xudmFyIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzUgPSAvXltcXHNcIidgXSooZFxccyphXFxzKnRcXHMqYVxccyopXFw6L2dpO1xudmFyIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzYgPSAvXltcXHNcIidgXSooZFxccyphXFxzKnRcXHMqYVxccyopXFw6XFxzKmltYWdlXFwvL2dpO1xudmFyIFJFR0VYUF9ERUZBVUxUX09OX1RBR19BVFRSXzcgPSAvZVxccyp4XFxzKnBcXHMqclxccyplXFxzKnNcXHMqc1xccyppXFxzKm9cXHMqblxccypcXCguKi9naTtcbnZhciBSRUdFWFBfREVGQVVMVF9PTl9UQUdfQVRUUl84ID0gL3VcXHMqclxccypsXFxzKlxcKC4qL2dpO1xuXG4vKipcbiAqIGVzY2FwZSBkb3ViZSBxdW90ZVxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ30gc3RyXG4gKi9cbmZ1bmN0aW9uIGVzY2FwZVF1b3RlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVHRVhQX1FVT1RFLCBcIiZxdW90O1wiKTtcbn1cblxuLyoqXG4gKiB1bmVzY2FwZSBkb3VibGUgcXVvdGVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9IHN0clxuICovXG5mdW5jdGlvbiB1bmVzY2FwZVF1b3RlKHN0cikge1xuICByZXR1cm4gc3RyLnJlcGxhY2UoUkVHRVhQX1FVT1RFXzIsICdcIicpO1xufVxuXG4vKipcbiAqIGVzY2FwZSBodG1sIGVudGl0aWVzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVIdG1sRW50aXRpZXMoc3RyKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZShSRUdFWFBfQVRUUl9WQUxVRV8xLCBmdW5jdGlvbiByZXBsYWNlVW5pY29kZShzdHIsIGNvZGUpIHtcbiAgICByZXR1cm4gY29kZVswXSA9PT0gXCJ4XCIgfHwgY29kZVswXSA9PT0gXCJYXCJcbiAgICAgID8gU3RyaW5nLmZyb21DaGFyQ29kZShwYXJzZUludChjb2RlLnN1YnN0cigxKSwgMTYpKVxuICAgICAgOiBTdHJpbmcuZnJvbUNoYXJDb2RlKHBhcnNlSW50KGNvZGUsIDEwKSk7XG4gIH0pO1xufVxuXG4vKipcbiAqIGVzY2FwZSBodG1sNSBuZXcgZGFuZ2VyIGVudGl0aWVzXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVEYW5nZXJIdG1sNUVudGl0aWVzKHN0cikge1xuICByZXR1cm4gc3RyXG4gICAgLnJlcGxhY2UoUkVHRVhQX0FUVFJfVkFMVUVfQ09MT04sIFwiOlwiKVxuICAgIC5yZXBsYWNlKFJFR0VYUF9BVFRSX1ZBTFVFX05FV0xJTkUsIFwiIFwiKTtcbn1cblxuLyoqXG4gKiBjbGVhciBub25wcmludGFibGUgY2hhcmFjdGVyc1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHJcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gY2xlYXJOb25QcmludGFibGVDaGFyYWN0ZXIoc3RyKSB7XG4gIHZhciBzdHIyID0gXCJcIjtcbiAgZm9yICh2YXIgaSA9IDAsIGxlbiA9IHN0ci5sZW5ndGg7IGkgPCBsZW47IGkrKykge1xuICAgIHN0cjIgKz0gc3RyLmNoYXJDb2RlQXQoaSkgPCAzMiA/IFwiIFwiIDogc3RyLmNoYXJBdChpKTtcbiAgfVxuICByZXR1cm4gXy50cmltKHN0cjIpO1xufVxuXG4vKipcbiAqIGdldCBmcmllbmRseSBhdHRyaWJ1dGUgdmFsdWVcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gc3RyXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGZyaWVuZGx5QXR0clZhbHVlKHN0cikge1xuICBzdHIgPSB1bmVzY2FwZVF1b3RlKHN0cik7XG4gIHN0ciA9IGVzY2FwZUh0bWxFbnRpdGllcyhzdHIpO1xuICBzdHIgPSBlc2NhcGVEYW5nZXJIdG1sNUVudGl0aWVzKHN0cik7XG4gIHN0ciA9IGNsZWFyTm9uUHJpbnRhYmxlQ2hhcmFjdGVyKHN0cik7XG4gIHJldHVybiBzdHI7XG59XG5cbi8qKlxuICogdW5lc2NhcGUgYXR0cmlidXRlIHZhbHVlXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBlc2NhcGVBdHRyVmFsdWUoc3RyKSB7XG4gIHN0ciA9IGVzY2FwZVF1b3RlKHN0cik7XG4gIHN0ciA9IGVzY2FwZUh0bWwoc3RyKTtcbiAgcmV0dXJuIHN0cjtcbn1cblxuLyoqXG4gKiBgb25JZ25vcmVUYWdgIGZ1bmN0aW9uIGZvciByZW1vdmluZyBhbGwgdGhlIHRhZ3MgdGhhdCBhcmUgbm90IGluIHdoaXRlbGlzdFxuICovXG5mdW5jdGlvbiBvbklnbm9yZVRhZ1N0cmlwQWxsKCkge1xuICByZXR1cm4gXCJcIjtcbn1cblxuLyoqXG4gKiByZW1vdmUgdGFnIGJvZHlcbiAqIHNwZWNpZnkgYSBgdGFnc2AgbGlzdCwgaWYgdGhlIHRhZyBpcyBub3QgaW4gdGhlIGB0YWdzYCBsaXN0IHRoZW4gcHJvY2VzcyBieSB0aGUgc3BlY2lmeSBmdW5jdGlvbiAob3B0aW9uYWwpXG4gKlxuICogQHBhcmFtIHthcnJheX0gdGFnc1xuICogQHBhcmFtIHtmdW5jdGlvbn0gbmV4dFxuICovXG5mdW5jdGlvbiBTdHJpcFRhZ0JvZHkodGFncywgbmV4dCkge1xuICBpZiAodHlwZW9mIG5leHQgIT09IFwiZnVuY3Rpb25cIikge1xuICAgIG5leHQgPSBmdW5jdGlvbigpIHt9O1xuICB9XG5cbiAgdmFyIGlzUmVtb3ZlQWxsVGFnID0gIUFycmF5LmlzQXJyYXkodGFncyk7XG4gIGZ1bmN0aW9uIGlzUmVtb3ZlVGFnKHRhZykge1xuICAgIGlmIChpc1JlbW92ZUFsbFRhZykgcmV0dXJuIHRydWU7XG4gICAgcmV0dXJuIF8uaW5kZXhPZih0YWdzLCB0YWcpICE9PSAtMTtcbiAgfVxuXG4gIHZhciByZW1vdmVMaXN0ID0gW107XG4gIHZhciBwb3NTdGFydCA9IGZhbHNlO1xuXG4gIHJldHVybiB7XG4gICAgb25JZ25vcmVUYWc6IGZ1bmN0aW9uKHRhZywgaHRtbCwgb3B0aW9ucykge1xuICAgICAgaWYgKGlzUmVtb3ZlVGFnKHRhZykpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMuaXNDbG9zaW5nKSB7XG4gICAgICAgICAgdmFyIHJldCA9IFwiWy9yZW1vdmVkXVwiO1xuICAgICAgICAgIHZhciBlbmQgPSBvcHRpb25zLnBvc2l0aW9uICsgcmV0Lmxlbmd0aDtcbiAgICAgICAgICByZW1vdmVMaXN0LnB1c2goW1xuICAgICAgICAgICAgcG9zU3RhcnQgIT09IGZhbHNlID8gcG9zU3RhcnQgOiBvcHRpb25zLnBvc2l0aW9uLFxuICAgICAgICAgICAgZW5kXG4gICAgICAgICAgXSk7XG4gICAgICAgICAgcG9zU3RhcnQgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGlmICghcG9zU3RhcnQpIHtcbiAgICAgICAgICAgIHBvc1N0YXJ0ID0gb3B0aW9ucy5wb3NpdGlvbjtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIFwiW3JlbW92ZWRdXCI7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBuZXh0KHRhZywgaHRtbCwgb3B0aW9ucyk7XG4gICAgICB9XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uKGh0bWwpIHtcbiAgICAgIHZhciByZXRodG1sID0gXCJcIjtcbiAgICAgIHZhciBsYXN0UG9zID0gMDtcbiAgICAgIF8uZm9yRWFjaChyZW1vdmVMaXN0LCBmdW5jdGlvbihwb3MpIHtcbiAgICAgICAgcmV0aHRtbCArPSBodG1sLnNsaWNlKGxhc3RQb3MsIHBvc1swXSk7XG4gICAgICAgIGxhc3RQb3MgPSBwb3NbMV07XG4gICAgICB9KTtcbiAgICAgIHJldGh0bWwgKz0gaHRtbC5zbGljZShsYXN0UG9zKTtcbiAgICAgIHJldHVybiByZXRodG1sO1xuICAgIH1cbiAgfTtcbn1cblxuLyoqXG4gKiByZW1vdmUgaHRtbCBjb21tZW50c1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHN0cmlwQ29tbWVudFRhZyhodG1sKSB7XG4gIHJldHVybiBodG1sLnJlcGxhY2UoU1RSSVBfQ09NTUVOVF9UQUdfUkVHRVhQLCBcIlwiKTtcbn1cbnZhciBTVFJJUF9DT01NRU5UX1RBR19SRUdFWFAgPSAvPCEtLVtcXHNcXFNdKj8tLT4vZztcblxuLyoqXG4gKiByZW1vdmUgaW52aXNpYmxlIGNoYXJhY3RlcnNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBzdHJpcEJsYW5rQ2hhcihodG1sKSB7XG4gIHZhciBjaGFycyA9IGh0bWwuc3BsaXQoXCJcIik7XG4gIGNoYXJzID0gY2hhcnMuZmlsdGVyKGZ1bmN0aW9uKGNoYXIpIHtcbiAgICB2YXIgYyA9IGNoYXIuY2hhckNvZGVBdCgwKTtcbiAgICBpZiAoYyA9PT0gMTI3KSByZXR1cm4gZmFsc2U7XG4gICAgaWYgKGMgPD0gMzEpIHtcbiAgICAgIGlmIChjID09PSAxMCB8fCBjID09PSAxMykgcmV0dXJuIHRydWU7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9KTtcbiAgcmV0dXJuIGNoYXJzLmpvaW4oXCJcIik7XG59XG5cbmV4cG9ydHMud2hpdGVMaXN0ID0gZ2V0RGVmYXVsdFdoaXRlTGlzdCgpO1xuZXhwb3J0cy5nZXREZWZhdWx0V2hpdGVMaXN0ID0gZ2V0RGVmYXVsdFdoaXRlTGlzdDtcbmV4cG9ydHMub25UYWcgPSBvblRhZztcbmV4cG9ydHMub25JZ25vcmVUYWcgPSBvbklnbm9yZVRhZztcbmV4cG9ydHMub25UYWdBdHRyID0gb25UYWdBdHRyO1xuZXhwb3J0cy5vbklnbm9yZVRhZ0F0dHIgPSBvbklnbm9yZVRhZ0F0dHI7XG5leHBvcnRzLnNhZmVBdHRyVmFsdWUgPSBzYWZlQXR0clZhbHVlO1xuZXhwb3J0cy5lc2NhcGVIdG1sID0gZXNjYXBlSHRtbDtcbmV4cG9ydHMuZXNjYXBlUXVvdGUgPSBlc2NhcGVRdW90ZTtcbmV4cG9ydHMudW5lc2NhcGVRdW90ZSA9IHVuZXNjYXBlUXVvdGU7XG5leHBvcnRzLmVzY2FwZUh0bWxFbnRpdGllcyA9IGVzY2FwZUh0bWxFbnRpdGllcztcbmV4cG9ydHMuZXNjYXBlRGFuZ2VySHRtbDVFbnRpdGllcyA9IGVzY2FwZURhbmdlckh0bWw1RW50aXRpZXM7XG5leHBvcnRzLmNsZWFyTm9uUHJpbnRhYmxlQ2hhcmFjdGVyID0gY2xlYXJOb25QcmludGFibGVDaGFyYWN0ZXI7XG5leHBvcnRzLmZyaWVuZGx5QXR0clZhbHVlID0gZnJpZW5kbHlBdHRyVmFsdWU7XG5leHBvcnRzLmVzY2FwZUF0dHJWYWx1ZSA9IGVzY2FwZUF0dHJWYWx1ZTtcbmV4cG9ydHMub25JZ25vcmVUYWdTdHJpcEFsbCA9IG9uSWdub3JlVGFnU3RyaXBBbGw7XG5leHBvcnRzLlN0cmlwVGFnQm9keSA9IFN0cmlwVGFnQm9keTtcbmV4cG9ydHMuc3RyaXBDb21tZW50VGFnID0gc3RyaXBDb21tZW50VGFnO1xuZXhwb3J0cy5zdHJpcEJsYW5rQ2hhciA9IHN0cmlwQmxhbmtDaGFyO1xuZXhwb3J0cy5jc3NGaWx0ZXIgPSBkZWZhdWx0Q1NTRmlsdGVyO1xuZXhwb3J0cy5nZXREZWZhdWx0Q1NTV2hpdGVMaXN0ID0gZ2V0RGVmYXVsdENTU1doaXRlTGlzdDtcbiIsIi8qKlxuICogeHNzXG4gKlxuICogQGF1dGhvciBab25nbWluIExlaTxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgREVGQVVMVCA9IHJlcXVpcmUoXCIuL2RlZmF1bHRcIik7XG52YXIgcGFyc2VyID0gcmVxdWlyZShcIi4vcGFyc2VyXCIpO1xudmFyIEZpbHRlclhTUyA9IHJlcXVpcmUoXCIuL3hzc1wiKTtcblxuLyoqXG4gKiBmaWx0ZXIgeHNzIGZ1bmN0aW9uXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWxcbiAqIEBwYXJhbSB7T2JqZWN0fSBvcHRpb25zIHsgd2hpdGVMaXN0LCBvblRhZywgb25UYWdBdHRyLCBvbklnbm9yZVRhZywgb25JZ25vcmVUYWdBdHRyLCBzYWZlQXR0clZhbHVlLCBlc2NhcGVIdG1sIH1cbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZmlsdGVyWFNTKGh0bWwsIG9wdGlvbnMpIHtcbiAgdmFyIHhzcyA9IG5ldyBGaWx0ZXJYU1Mob3B0aW9ucyk7XG4gIHJldHVybiB4c3MucHJvY2VzcyhodG1sKTtcbn1cblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZmlsdGVyWFNTO1xuZXhwb3J0cy5maWx0ZXJYU1MgPSBmaWx0ZXJYU1M7XG5leHBvcnRzLkZpbHRlclhTUyA9IEZpbHRlclhTUztcbmZvciAodmFyIGkgaW4gREVGQVVMVCkgZXhwb3J0c1tpXSA9IERFRkFVTFRbaV07XG5mb3IgKHZhciBpIGluIHBhcnNlcikgZXhwb3J0c1tpXSA9IHBhcnNlcltpXTtcblxuLy8gdXNpbmcgYHhzc2Agb24gdGhlIGJyb3dzZXIsIG91dHB1dCBgZmlsdGVyWFNTYCB0byB0aGUgZ2xvYmFsc1xuaWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgd2luZG93LmZpbHRlclhTUyA9IG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyB1c2luZyBgeHNzYCBvbiB0aGUgV2ViV29ya2VyLCBvdXRwdXQgYGZpbHRlclhTU2AgdG8gdGhlIGdsb2JhbHNcbmZ1bmN0aW9uIGlzV29ya2VyRW52KCkge1xuICByZXR1cm4gdHlwZW9mIHNlbGYgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiBEZWRpY2F0ZWRXb3JrZXJHbG9iYWxTY29wZSAhPT0gJ3VuZGVmaW5lZCcgJiYgc2VsZiBpbnN0YW5jZW9mIERlZGljYXRlZFdvcmtlckdsb2JhbFNjb3BlO1xufVxuaWYgKGlzV29ya2VyRW52KCkpIHtcbiAgc2VsZi5maWx0ZXJYU1MgPSBtb2R1bGUuZXhwb3J0cztcbn1cbiIsIi8qKlxuICogU2ltcGxlIEhUTUwgUGFyc2VyXG4gKlxuICogQGF1dGhvciBab25nbWluIExlaTxsZWl6b25nbWluQGdtYWlsLmNvbT5cbiAqL1xuXG52YXIgXyA9IHJlcXVpcmUoXCIuL3V0aWxcIik7XG5cbi8qKlxuICogZ2V0IHRhZyBuYW1lXG4gKlxuICogQHBhcmFtIHtTdHJpbmd9IGh0bWwgZS5nLiAnPGEgaGVmPVwiI1wiPidcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZ2V0VGFnTmFtZShodG1sKSB7XG4gIHZhciBpID0gXy5zcGFjZUluZGV4KGh0bWwpO1xuICBpZiAoaSA9PT0gLTEpIHtcbiAgICB2YXIgdGFnTmFtZSA9IGh0bWwuc2xpY2UoMSwgLTEpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YWdOYW1lID0gaHRtbC5zbGljZSgxLCBpICsgMSk7XG4gIH1cbiAgdGFnTmFtZSA9IF8udHJpbSh0YWdOYW1lKS50b0xvd2VyQ2FzZSgpO1xuICBpZiAodGFnTmFtZS5zbGljZSgwLCAxKSA9PT0gXCIvXCIpIHRhZ05hbWUgPSB0YWdOYW1lLnNsaWNlKDEpO1xuICBpZiAodGFnTmFtZS5zbGljZSgtMSkgPT09IFwiL1wiKSB0YWdOYW1lID0gdGFnTmFtZS5zbGljZSgwLCAtMSk7XG4gIHJldHVybiB0YWdOYW1lO1xufVxuXG4vKipcbiAqIGlzIGNsb3NlIHRhZz9cbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbCDlpoLvvJonPGEgaGVmPVwiI1wiPidcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIGlzQ2xvc2luZyhodG1sKSB7XG4gIHJldHVybiBodG1sLnNsaWNlKDAsIDIpID09PSBcIjwvXCI7XG59XG5cbi8qKlxuICogcGFyc2UgaW5wdXQgaHRtbCBhbmQgcmV0dXJucyBwcm9jZXNzZWQgaHRtbFxuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblRhZyBlLmcuIGZ1bmN0aW9uIChzb3VyY2VQb3NpdGlvbiwgcG9zaXRpb24sIHRhZywgaHRtbCwgaXNDbG9zaW5nKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZXNjYXBlSHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5mdW5jdGlvbiBwYXJzZVRhZyhodG1sLCBvblRhZywgZXNjYXBlSHRtbCkge1xuICBcInVzZXIgc3RyaWN0XCI7XG5cbiAgdmFyIHJldGh0bWwgPSBcIlwiO1xuICB2YXIgbGFzdFBvcyA9IDA7XG4gIHZhciB0YWdTdGFydCA9IGZhbHNlO1xuICB2YXIgcXVvdGVTdGFydCA9IGZhbHNlO1xuICB2YXIgY3VycmVudFBvcyA9IDA7XG4gIHZhciBsZW4gPSBodG1sLmxlbmd0aDtcbiAgdmFyIGN1cnJlbnRUYWdOYW1lID0gXCJcIjtcbiAgdmFyIGN1cnJlbnRIdG1sID0gXCJcIjtcblxuICBmb3IgKGN1cnJlbnRQb3MgPSAwOyBjdXJyZW50UG9zIDwgbGVuOyBjdXJyZW50UG9zKyspIHtcbiAgICB2YXIgYyA9IGh0bWwuY2hhckF0KGN1cnJlbnRQb3MpO1xuICAgIGlmICh0YWdTdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChjID09PSBcIjxcIikge1xuICAgICAgICB0YWdTdGFydCA9IGN1cnJlbnRQb3M7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBpZiAocXVvdGVTdGFydCA9PT0gZmFsc2UpIHtcbiAgICAgICAgaWYgKGMgPT09IFwiPFwiKSB7XG4gICAgICAgICAgcmV0aHRtbCArPSBlc2NhcGVIdG1sKGh0bWwuc2xpY2UobGFzdFBvcywgY3VycmVudFBvcykpO1xuICAgICAgICAgIHRhZ1N0YXJ0ID0gY3VycmVudFBvcztcbiAgICAgICAgICBsYXN0UG9zID0gY3VycmVudFBvcztcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYyA9PT0gXCI+XCIpIHtcbiAgICAgICAgICByZXRodG1sICs9IGVzY2FwZUh0bWwoaHRtbC5zbGljZShsYXN0UG9zLCB0YWdTdGFydCkpO1xuICAgICAgICAgIGN1cnJlbnRIdG1sID0gaHRtbC5zbGljZSh0YWdTdGFydCwgY3VycmVudFBvcyArIDEpO1xuICAgICAgICAgIGN1cnJlbnRUYWdOYW1lID0gZ2V0VGFnTmFtZShjdXJyZW50SHRtbCk7XG4gICAgICAgICAgcmV0aHRtbCArPSBvblRhZyhcbiAgICAgICAgICAgIHRhZ1N0YXJ0LFxuICAgICAgICAgICAgcmV0aHRtbC5sZW5ndGgsXG4gICAgICAgICAgICBjdXJyZW50VGFnTmFtZSxcbiAgICAgICAgICAgIGN1cnJlbnRIdG1sLFxuICAgICAgICAgICAgaXNDbG9zaW5nKGN1cnJlbnRIdG1sKVxuICAgICAgICAgICk7XG4gICAgICAgICAgbGFzdFBvcyA9IGN1cnJlbnRQb3MgKyAxO1xuICAgICAgICAgIHRhZ1N0YXJ0ID0gZmFsc2U7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChjID09PSAnXCInIHx8IGMgPT09IFwiJ1wiKSAmJiBodG1sLmNoYXJBdChjdXJyZW50UG9zIC0gMSkgPT09IFwiPVwiKSB7XG4gICAgICAgICAgcXVvdGVTdGFydCA9IGM7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGlmIChjID09PSBxdW90ZVN0YXJ0KSB7XG4gICAgICAgICAgcXVvdGVTdGFydCA9IGZhbHNlO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG4gIGlmIChsYXN0UG9zIDwgaHRtbC5sZW5ndGgpIHtcbiAgICByZXRodG1sICs9IGVzY2FwZUh0bWwoaHRtbC5zdWJzdHIobGFzdFBvcykpO1xuICB9XG5cbiAgcmV0dXJuIHJldGh0bWw7XG59XG5cbnZhciBSRUdFWFBfSUxMRUdBTF9BVFRSX05BTUUgPSAvW15hLXpBLVowLTlfOlxcLlxcLV0vZ2ltO1xuXG4vKipcbiAqIHBhcnNlIGlucHV0IGF0dHJpYnV0ZXMgYW5kIHJldHVybnMgcHJvY2Vzc2VkIGF0dHJpYnV0ZXNcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbCBlLmcuIGBocmVmPVwiI1wiIHRhcmdldD1cIl9ibGFua1wiYFxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25BdHRyIGUuZy4gYGZ1bmN0aW9uIChuYW1lLCB2YWx1ZSlgXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIHBhcnNlQXR0cihodG1sLCBvbkF0dHIpIHtcbiAgXCJ1c2VyIHN0cmljdFwiO1xuXG4gIHZhciBsYXN0UG9zID0gMDtcbiAgdmFyIHJldEF0dHJzID0gW107XG4gIHZhciB0bXBOYW1lID0gZmFsc2U7XG4gIHZhciBsZW4gPSBodG1sLmxlbmd0aDtcblxuICBmdW5jdGlvbiBhZGRBdHRyKG5hbWUsIHZhbHVlKSB7XG4gICAgbmFtZSA9IF8udHJpbShuYW1lKTtcbiAgICBuYW1lID0gbmFtZS5yZXBsYWNlKFJFR0VYUF9JTExFR0FMX0FUVFJfTkFNRSwgXCJcIikudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAobmFtZS5sZW5ndGggPCAxKSByZXR1cm47XG4gICAgdmFyIHJldCA9IG9uQXR0cihuYW1lLCB2YWx1ZSB8fCBcIlwiKTtcbiAgICBpZiAocmV0KSByZXRBdHRycy5wdXNoKHJldCk7XG4gIH1cblxuICAvLyDpgJDkuKrliIbmnpDlrZfnrKZcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIHZhciBjID0gaHRtbC5jaGFyQXQoaSk7XG4gICAgdmFyIHYsIGo7XG4gICAgaWYgKHRtcE5hbWUgPT09IGZhbHNlICYmIGMgPT09IFwiPVwiKSB7XG4gICAgICB0bXBOYW1lID0gaHRtbC5zbGljZShsYXN0UG9zLCBpKTtcbiAgICAgIGxhc3RQb3MgPSBpICsgMTtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBpZiAodG1wTmFtZSAhPT0gZmFsc2UpIHtcbiAgICAgIGlmIChcbiAgICAgICAgaSA9PT0gbGFzdFBvcyAmJlxuICAgICAgICAoYyA9PT0gJ1wiJyB8fCBjID09PSBcIidcIikgJiZcbiAgICAgICAgaHRtbC5jaGFyQXQoaSAtIDEpID09PSBcIj1cIlxuICAgICAgKSB7XG4gICAgICAgIGogPSBodG1sLmluZGV4T2YoYywgaSArIDEpO1xuICAgICAgICBpZiAoaiA9PT0gLTEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB2ID0gXy50cmltKGh0bWwuc2xpY2UobGFzdFBvcyArIDEsIGopKTtcbiAgICAgICAgICBhZGRBdHRyKHRtcE5hbWUsIHYpO1xuICAgICAgICAgIHRtcE5hbWUgPSBmYWxzZTtcbiAgICAgICAgICBpID0gajtcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKC9cXHN8XFxufFxcdC8udGVzdChjKSkge1xuICAgICAgaHRtbCA9IGh0bWwucmVwbGFjZSgvXFxzfFxcbnxcXHQvZywgXCIgXCIpO1xuICAgICAgaWYgKHRtcE5hbWUgPT09IGZhbHNlKSB7XG4gICAgICAgIGogPSBmaW5kTmV4dEVxdWFsKGh0bWwsIGkpO1xuICAgICAgICBpZiAoaiA9PT0gLTEpIHtcbiAgICAgICAgICB2ID0gXy50cmltKGh0bWwuc2xpY2UobGFzdFBvcywgaSkpO1xuICAgICAgICAgIGFkZEF0dHIodik7XG4gICAgICAgICAgdG1wTmFtZSA9IGZhbHNlO1xuICAgICAgICAgIGxhc3RQb3MgPSBpICsgMTtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpID0gaiAtIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGogPSBmaW5kQmVmb3JlRXF1YWwoaHRtbCwgaSAtIDEpO1xuICAgICAgICBpZiAoaiA9PT0gLTEpIHtcbiAgICAgICAgICB2ID0gXy50cmltKGh0bWwuc2xpY2UobGFzdFBvcywgaSkpO1xuICAgICAgICAgIHYgPSBzdHJpcFF1b3RlV3JhcCh2KTtcbiAgICAgICAgICBhZGRBdHRyKHRtcE5hbWUsIHYpO1xuICAgICAgICAgIHRtcE5hbWUgPSBmYWxzZTtcbiAgICAgICAgICBsYXN0UG9zID0gaSArIDE7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBpZiAobGFzdFBvcyA8IGh0bWwubGVuZ3RoKSB7XG4gICAgaWYgKHRtcE5hbWUgPT09IGZhbHNlKSB7XG4gICAgICBhZGRBdHRyKGh0bWwuc2xpY2UobGFzdFBvcykpO1xuICAgIH0gZWxzZSB7XG4gICAgICBhZGRBdHRyKHRtcE5hbWUsIHN0cmlwUXVvdGVXcmFwKF8udHJpbShodG1sLnNsaWNlKGxhc3RQb3MpKSkpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBfLnRyaW0ocmV0QXR0cnMuam9pbihcIiBcIikpO1xufVxuXG5mdW5jdGlvbiBmaW5kTmV4dEVxdWFsKHN0ciwgaSkge1xuICBmb3IgKDsgaSA8IHN0ci5sZW5ndGg7IGkrKykge1xuICAgIHZhciBjID0gc3RyW2ldO1xuICAgIGlmIChjID09PSBcIiBcIikgY29udGludWU7XG4gICAgaWYgKGMgPT09IFwiPVwiKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZEJlZm9yZUVxdWFsKHN0ciwgaSkge1xuICBmb3IgKDsgaSA+IDA7IGktLSkge1xuICAgIHZhciBjID0gc3RyW2ldO1xuICAgIGlmIChjID09PSBcIiBcIikgY29udGludWU7XG4gICAgaWYgKGMgPT09IFwiPVwiKSByZXR1cm4gaTtcbiAgICByZXR1cm4gLTE7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNRdW90ZVdyYXBTdHJpbmcodGV4dCkge1xuICBpZiAoXG4gICAgKHRleHRbMF0gPT09ICdcIicgJiYgdGV4dFt0ZXh0Lmxlbmd0aCAtIDFdID09PSAnXCInKSB8fFxuICAgICh0ZXh0WzBdID09PSBcIidcIiAmJiB0ZXh0W3RleHQubGVuZ3RoIC0gMV0gPT09IFwiJ1wiKVxuICApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaXBRdW90ZVdyYXAodGV4dCkge1xuICBpZiAoaXNRdW90ZVdyYXBTdHJpbmcodGV4dCkpIHtcbiAgICByZXR1cm4gdGV4dC5zdWJzdHIoMSwgdGV4dC5sZW5ndGggLSAyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdGV4dDtcbiAgfVxufVxuXG5leHBvcnRzLnBhcnNlVGFnID0gcGFyc2VUYWc7XG5leHBvcnRzLnBhcnNlQXR0ciA9IHBhcnNlQXR0cjtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBpbmRleE9mOiBmdW5jdGlvbihhcnIsIGl0ZW0pIHtcbiAgICB2YXIgaSwgajtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmluZGV4T2YpIHtcbiAgICAgIHJldHVybiBhcnIuaW5kZXhPZihpdGVtKTtcbiAgICB9XG4gICAgZm9yIChpID0gMCwgaiA9IGFyci5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgIGlmIChhcnJbaV0gPT09IGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiAtMTtcbiAgfSxcbiAgZm9yRWFjaDogZnVuY3Rpb24oYXJyLCBmbiwgc2NvcGUpIHtcbiAgICB2YXIgaSwgajtcbiAgICBpZiAoQXJyYXkucHJvdG90eXBlLmZvckVhY2gpIHtcbiAgICAgIHJldHVybiBhcnIuZm9yRWFjaChmbiwgc2NvcGUpO1xuICAgIH1cbiAgICBmb3IgKGkgPSAwLCBqID0gYXJyLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgZm4uY2FsbChzY29wZSwgYXJyW2ldLCBpLCBhcnIpO1xuICAgIH1cbiAgfSxcbiAgdHJpbTogZnVuY3Rpb24oc3RyKSB7XG4gICAgaWYgKFN0cmluZy5wcm90b3R5cGUudHJpbSkge1xuICAgICAgcmV0dXJuIHN0ci50cmltKCk7XG4gICAgfVxuICAgIHJldHVybiBzdHIucmVwbGFjZSgvKF5cXHMqKXwoXFxzKiQpL2csIFwiXCIpO1xuICB9LFxuICBzcGFjZUluZGV4OiBmdW5jdGlvbihzdHIpIHtcbiAgICB2YXIgcmVnID0gL1xcc3xcXG58XFx0LztcbiAgICB2YXIgbWF0Y2ggPSByZWcuZXhlYyhzdHIpO1xuICAgIHJldHVybiBtYXRjaCA/IG1hdGNoLmluZGV4IDogLTE7XG4gIH1cbn07XG4iLCIvKipcbiAqIGZpbHRlciB4c3NcbiAqXG4gKiBAYXV0aG9yIFpvbmdtaW4gTGVpPGxlaXpvbmdtaW5AZ21haWwuY29tPlxuICovXG5cbnZhciBGaWx0ZXJDU1MgPSByZXF1aXJlKFwiY3NzZmlsdGVyXCIpLkZpbHRlckNTUztcbnZhciBERUZBVUxUID0gcmVxdWlyZShcIi4vZGVmYXVsdFwiKTtcbnZhciBwYXJzZXIgPSByZXF1aXJlKFwiLi9wYXJzZXJcIik7XG52YXIgcGFyc2VUYWcgPSBwYXJzZXIucGFyc2VUYWc7XG52YXIgcGFyc2VBdHRyID0gcGFyc2VyLnBhcnNlQXR0cjtcbnZhciBfID0gcmVxdWlyZShcIi4vdXRpbFwiKTtcblxuLyoqXG4gKiByZXR1cm5zIGB0cnVlYCBpZiB0aGUgaW5wdXQgdmFsdWUgaXMgYHVuZGVmaW5lZGAgb3IgYG51bGxgXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqL1xuZnVuY3Rpb24gaXNOdWxsKG9iaikge1xuICByZXR1cm4gb2JqID09PSB1bmRlZmluZWQgfHwgb2JqID09PSBudWxsO1xufVxuXG4vKipcbiAqIGdldCBhdHRyaWJ1dGVzIGZvciBhIHRhZ1xuICpcbiAqIEBwYXJhbSB7U3RyaW5nfSBodG1sXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiAgIC0ge1N0cmluZ30gaHRtbFxuICogICAtIHtCb29sZWFufSBjbG9zaW5nXG4gKi9cbmZ1bmN0aW9uIGdldEF0dHJzKGh0bWwpIHtcbiAgdmFyIGkgPSBfLnNwYWNlSW5kZXgoaHRtbCk7XG4gIGlmIChpID09PSAtMSkge1xuICAgIHJldHVybiB7XG4gICAgICBodG1sOiBcIlwiLFxuICAgICAgY2xvc2luZzogaHRtbFtodG1sLmxlbmd0aCAtIDJdID09PSBcIi9cIlxuICAgIH07XG4gIH1cbiAgaHRtbCA9IF8udHJpbShodG1sLnNsaWNlKGkgKyAxLCAtMSkpO1xuICB2YXIgaXNDbG9zaW5nID0gaHRtbFtodG1sLmxlbmd0aCAtIDFdID09PSBcIi9cIjtcbiAgaWYgKGlzQ2xvc2luZykgaHRtbCA9IF8udHJpbShodG1sLnNsaWNlKDAsIC0xKSk7XG4gIHJldHVybiB7XG4gICAgaHRtbDogaHRtbCxcbiAgICBjbG9zaW5nOiBpc0Nsb3NpbmdcbiAgfTtcbn1cblxuLyoqXG4gKiBzaGFsbG93IGNvcHlcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKi9cbmZ1bmN0aW9uIHNoYWxsb3dDb3B5T2JqZWN0KG9iaikge1xuICB2YXIgcmV0ID0ge307XG4gIGZvciAodmFyIGkgaW4gb2JqKSB7XG4gICAgcmV0W2ldID0gb2JqW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbi8qKlxuICogRmlsdGVyWFNTIGNsYXNzXG4gKlxuICogQHBhcmFtIHtPYmplY3R9IG9wdGlvbnNcbiAqICAgICAgICB3aGl0ZUxpc3QsIG9uVGFnLCBvblRhZ0F0dHIsIG9uSWdub3JlVGFnLFxuICogICAgICAgIG9uSWdub3JlVGFnQXR0ciwgc2FmZUF0dHJWYWx1ZSwgZXNjYXBlSHRtbFxuICogICAgICAgIHN0cmlwSWdub3JlVGFnQm9keSwgYWxsb3dDb21tZW50VGFnLCBzdHJpcEJsYW5rQ2hhclxuICogICAgICAgIGNzc3t3aGl0ZUxpc3QsIG9uQXR0ciwgb25JZ25vcmVBdHRyfSBgY3NzPWZhbHNlYCBtZWFucyBkb24ndCB1c2UgYGNzc2ZpbHRlcmBcbiAqL1xuZnVuY3Rpb24gRmlsdGVyWFNTKG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IHNoYWxsb3dDb3B5T2JqZWN0KG9wdGlvbnMgfHwge30pO1xuXG4gIGlmIChvcHRpb25zLnN0cmlwSWdub3JlVGFnKSB7XG4gICAgaWYgKG9wdGlvbnMub25JZ25vcmVUYWcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICdOb3RlczogY2Fubm90IHVzZSB0aGVzZSB0d28gb3B0aW9ucyBcInN0cmlwSWdub3JlVGFnXCIgYW5kIFwib25JZ25vcmVUYWdcIiBhdCB0aGUgc2FtZSB0aW1lJ1xuICAgICAgKTtcbiAgICB9XG4gICAgb3B0aW9ucy5vbklnbm9yZVRhZyA9IERFRkFVTFQub25JZ25vcmVUYWdTdHJpcEFsbDtcbiAgfVxuXG4gIG9wdGlvbnMud2hpdGVMaXN0ID0gb3B0aW9ucy53aGl0ZUxpc3QgfHwgREVGQVVMVC53aGl0ZUxpc3Q7XG4gIG9wdGlvbnMub25UYWcgPSBvcHRpb25zLm9uVGFnIHx8IERFRkFVTFQub25UYWc7XG4gIG9wdGlvbnMub25UYWdBdHRyID0gb3B0aW9ucy5vblRhZ0F0dHIgfHwgREVGQVVMVC5vblRhZ0F0dHI7XG4gIG9wdGlvbnMub25JZ25vcmVUYWcgPSBvcHRpb25zLm9uSWdub3JlVGFnIHx8IERFRkFVTFQub25JZ25vcmVUYWc7XG4gIG9wdGlvbnMub25JZ25vcmVUYWdBdHRyID0gb3B0aW9ucy5vbklnbm9yZVRhZ0F0dHIgfHwgREVGQVVMVC5vbklnbm9yZVRhZ0F0dHI7XG4gIG9wdGlvbnMuc2FmZUF0dHJWYWx1ZSA9IG9wdGlvbnMuc2FmZUF0dHJWYWx1ZSB8fCBERUZBVUxULnNhZmVBdHRyVmFsdWU7XG4gIG9wdGlvbnMuZXNjYXBlSHRtbCA9IG9wdGlvbnMuZXNjYXBlSHRtbCB8fCBERUZBVUxULmVzY2FwZUh0bWw7XG4gIHRoaXMub3B0aW9ucyA9IG9wdGlvbnM7XG5cbiAgaWYgKG9wdGlvbnMuY3NzID09PSBmYWxzZSkge1xuICAgIHRoaXMuY3NzRmlsdGVyID0gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucy5jc3MgPSBvcHRpb25zLmNzcyB8fCB7fTtcbiAgICB0aGlzLmNzc0ZpbHRlciA9IG5ldyBGaWx0ZXJDU1Mob3B0aW9ucy5jc3MpO1xuICB9XG59XG5cbi8qKlxuICogc3RhcnQgcHJvY2VzcyBhbmQgcmV0dXJucyByZXN1bHRcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gaHRtbFxuICogQHJldHVybiB7U3RyaW5nfVxuICovXG5GaWx0ZXJYU1MucHJvdG90eXBlLnByb2Nlc3MgPSBmdW5jdGlvbihodG1sKSB7XG4gIC8vIGNvbXBhdGlibGUgd2l0aCB0aGUgaW5wdXRcbiAgaHRtbCA9IGh0bWwgfHwgXCJcIjtcbiAgaHRtbCA9IGh0bWwudG9TdHJpbmcoKTtcbiAgaWYgKCFodG1sKSByZXR1cm4gXCJcIjtcblxuICB2YXIgbWUgPSB0aGlzO1xuICB2YXIgb3B0aW9ucyA9IG1lLm9wdGlvbnM7XG4gIHZhciB3aGl0ZUxpc3QgPSBvcHRpb25zLndoaXRlTGlzdDtcbiAgdmFyIG9uVGFnID0gb3B0aW9ucy5vblRhZztcbiAgdmFyIG9uSWdub3JlVGFnID0gb3B0aW9ucy5vbklnbm9yZVRhZztcbiAgdmFyIG9uVGFnQXR0ciA9IG9wdGlvbnMub25UYWdBdHRyO1xuICB2YXIgb25JZ25vcmVUYWdBdHRyID0gb3B0aW9ucy5vbklnbm9yZVRhZ0F0dHI7XG4gIHZhciBzYWZlQXR0clZhbHVlID0gb3B0aW9ucy5zYWZlQXR0clZhbHVlO1xuICB2YXIgZXNjYXBlSHRtbCA9IG9wdGlvbnMuZXNjYXBlSHRtbDtcbiAgdmFyIGNzc0ZpbHRlciA9IG1lLmNzc0ZpbHRlcjtcblxuICAvLyByZW1vdmUgaW52aXNpYmxlIGNoYXJhY3RlcnNcbiAgaWYgKG9wdGlvbnMuc3RyaXBCbGFua0NoYXIpIHtcbiAgICBodG1sID0gREVGQVVMVC5zdHJpcEJsYW5rQ2hhcihodG1sKTtcbiAgfVxuXG4gIC8vIHJlbW92ZSBodG1sIGNvbW1lbnRzXG4gIGlmICghb3B0aW9ucy5hbGxvd0NvbW1lbnRUYWcpIHtcbiAgICBodG1sID0gREVGQVVMVC5zdHJpcENvbW1lbnRUYWcoaHRtbCk7XG4gIH1cblxuICAvLyBpZiBlbmFibGUgc3RyaXBJZ25vcmVUYWdCb2R5XG4gIHZhciBzdHJpcElnbm9yZVRhZ0JvZHkgPSBmYWxzZTtcbiAgaWYgKG9wdGlvbnMuc3RyaXBJZ25vcmVUYWdCb2R5KSB7XG4gICAgdmFyIHN0cmlwSWdub3JlVGFnQm9keSA9IERFRkFVTFQuU3RyaXBUYWdCb2R5KFxuICAgICAgb3B0aW9ucy5zdHJpcElnbm9yZVRhZ0JvZHksXG4gICAgICBvbklnbm9yZVRhZ1xuICAgICk7XG4gICAgb25JZ25vcmVUYWcgPSBzdHJpcElnbm9yZVRhZ0JvZHkub25JZ25vcmVUYWc7XG4gIH1cblxuICB2YXIgcmV0SHRtbCA9IHBhcnNlVGFnKFxuICAgIGh0bWwsXG4gICAgZnVuY3Rpb24oc291cmNlUG9zaXRpb24sIHBvc2l0aW9uLCB0YWcsIGh0bWwsIGlzQ2xvc2luZykge1xuICAgICAgdmFyIGluZm8gPSB7XG4gICAgICAgIHNvdXJjZVBvc2l0aW9uOiBzb3VyY2VQb3NpdGlvbixcbiAgICAgICAgcG9zaXRpb246IHBvc2l0aW9uLFxuICAgICAgICBpc0Nsb3Npbmc6IGlzQ2xvc2luZyxcbiAgICAgICAgaXNXaGl0ZTogd2hpdGVMaXN0Lmhhc093blByb3BlcnR5KHRhZylcbiAgICAgIH07XG5cbiAgICAgIC8vIGNhbGwgYG9uVGFnKClgXG4gICAgICB2YXIgcmV0ID0gb25UYWcodGFnLCBodG1sLCBpbmZvKTtcbiAgICAgIGlmICghaXNOdWxsKHJldCkpIHJldHVybiByZXQ7XG5cbiAgICAgIGlmIChpbmZvLmlzV2hpdGUpIHtcbiAgICAgICAgaWYgKGluZm8uaXNDbG9zaW5nKSB7XG4gICAgICAgICAgcmV0dXJuIFwiPC9cIiArIHRhZyArIFwiPlwiO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGF0dHJzID0gZ2V0QXR0cnMoaHRtbCk7XG4gICAgICAgIHZhciB3aGl0ZUF0dHJMaXN0ID0gd2hpdGVMaXN0W3RhZ107XG4gICAgICAgIHZhciBhdHRyc0h0bWwgPSBwYXJzZUF0dHIoYXR0cnMuaHRtbCwgZnVuY3Rpb24obmFtZSwgdmFsdWUpIHtcbiAgICAgICAgICAvLyBjYWxsIGBvblRhZ0F0dHIoKWBcbiAgICAgICAgICB2YXIgaXNXaGl0ZUF0dHIgPSBfLmluZGV4T2Yod2hpdGVBdHRyTGlzdCwgbmFtZSkgIT09IC0xO1xuICAgICAgICAgIHZhciByZXQgPSBvblRhZ0F0dHIodGFnLCBuYW1lLCB2YWx1ZSwgaXNXaGl0ZUF0dHIpO1xuICAgICAgICAgIGlmICghaXNOdWxsKHJldCkpIHJldHVybiByZXQ7XG5cbiAgICAgICAgICBpZiAoaXNXaGl0ZUF0dHIpIHtcbiAgICAgICAgICAgIC8vIGNhbGwgYHNhZmVBdHRyVmFsdWUoKWBcbiAgICAgICAgICAgIHZhbHVlID0gc2FmZUF0dHJWYWx1ZSh0YWcsIG5hbWUsIHZhbHVlLCBjc3NGaWx0ZXIpO1xuICAgICAgICAgICAgaWYgKHZhbHVlKSB7XG4gICAgICAgICAgICAgIHJldHVybiBuYW1lICsgJz1cIicgKyB2YWx1ZSArICdcIic7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICByZXR1cm4gbmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gY2FsbCBgb25JZ25vcmVUYWdBdHRyKClgXG4gICAgICAgICAgICB2YXIgcmV0ID0gb25JZ25vcmVUYWdBdHRyKHRhZywgbmFtZSwgdmFsdWUsIGlzV2hpdGVBdHRyKTtcbiAgICAgICAgICAgIGlmICghaXNOdWxsKHJldCkpIHJldHVybiByZXQ7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBidWlsZCBuZXcgdGFnIGh0bWxcbiAgICAgICAgdmFyIGh0bWwgPSBcIjxcIiArIHRhZztcbiAgICAgICAgaWYgKGF0dHJzSHRtbCkgaHRtbCArPSBcIiBcIiArIGF0dHJzSHRtbDtcbiAgICAgICAgaWYgKGF0dHJzLmNsb3NpbmcpIGh0bWwgKz0gXCIgL1wiO1xuICAgICAgICBodG1sICs9IFwiPlwiO1xuICAgICAgICByZXR1cm4gaHRtbDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIGNhbGwgYG9uSWdub3JlVGFnKClgXG4gICAgICAgIHZhciByZXQgPSBvbklnbm9yZVRhZyh0YWcsIGh0bWwsIGluZm8pO1xuICAgICAgICBpZiAoIWlzTnVsbChyZXQpKSByZXR1cm4gcmV0O1xuICAgICAgICByZXR1cm4gZXNjYXBlSHRtbChodG1sKTtcbiAgICAgIH1cbiAgICB9LFxuICAgIGVzY2FwZUh0bWxcbiAgKTtcblxuICAvLyBpZiBlbmFibGUgc3RyaXBJZ25vcmVUYWdCb2R5XG4gIGlmIChzdHJpcElnbm9yZVRhZ0JvZHkpIHtcbiAgICByZXRIdG1sID0gc3RyaXBJZ25vcmVUYWdCb2R5LnJlbW92ZShyZXRIdG1sKTtcbiAgfVxuXG4gIHJldHVybiByZXRIdG1sO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBGaWx0ZXJYU1M7XG4iXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUdBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7OztBQzdHQTs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUM3WUE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBR0E7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvQkE7Ozs7O0FBTUE7QUFHQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDekVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFqQ0E7Ozs7Ozs7Ozs7O0FDQUE7Ozs7O0FBTUE7QUFDQTtBQURBO0FBQ0E7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBVUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQXZCQTtBQTBCQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFJQTtBQU1BO0FBTUE7QUFDQTtBQU1BO0FBQUE7QUFPQTtBQUlBOzs7O0FBSUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFNQTtBQU1BOzs7O0FBSUE7QUFDQTtBQUNBO0FBRkE7QUFLQTs7OztBQUlBO0FBQ0E7QUFDQTtBQVNBO0FBWEE7QUFjQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFFQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQU1BO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQWdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBREE7QUFJQTtBQUdBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQU9BO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBR0E7QUFHQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUpBO0FBT0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFKQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUZBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFsQkE7QUFzQkE7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUtBO0FBRUE7QUFLQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBSUE7Ozs7QUFJQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQU5BO0FBV0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQU5BO0FBU0E7QUFHQTs7OztBQUlBO0FBQ0E7QUFDQTtBQUZBO0FBS0E7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQUE7QUFHQTtBQUdBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFlQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFVQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7OztBQUtBO0FBQ0E7QUFDQTtBQUVBO0FBS0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUVBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBT0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBMUdBO0FBNEdBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBS0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVEE7QUFXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBO0FBQUE7QUFDQTtBQWVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRUE7Ozs7O0FBSUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBakJBO0FBbUJBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUlBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3hwREE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUNuQkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUMvQkE7Ozs7O0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQS9EQTtBQWlFQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUdBOzs7Ozs7O0FBS0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFHQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUdBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQS9CQTtBQWlDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQzlaQTs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDdkNBOzs7OztBQU1BO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDOU9BO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFDQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7O0FBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7O0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSkE7QUFDQTtBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7OztBIiwic291cmNlUm9vdCI6IiJ9