(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["panel-states"],{

/***/ "./src/cards/ha-badges-card.js":
/*!*************************************!*\
  !*** ./src/cards/ha-badges-card.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_state_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/entity/ha-state-label-badge */ "./src/components/entity/ha-state-label-badge.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        ha-state-label-badge {\n          display: inline-block;\n          margin-bottom: var(--ha-state-label-badge-margin-bottom, 16px);\n        }\n      </style>\n      <template is=\"dom-repeat\" items=\"[[states]]\">\n        <ha-state-label-badge\n          hass=\"[[hass]]\"\n          state=\"[[item]]\"\n        ></ha-state-label-badge>\n      </template>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HaBadgesCard =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaBadgesCard, _PolymerElement);

  function HaBadgesCard() {
    _classCallCheck(this, HaBadgesCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaBadgesCard).apply(this, arguments));
  }

  _createClass(HaBadgesCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        states: Array
      };
    }
  }]);

  return HaBadgesCard;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-badges-card", HaBadgesCard);

/***/ }),

/***/ "./src/cards/ha-camera-card.js":
/*!*************************************!*\
  !*** ./src/cards/ha-camera-card.js ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_paper_styles_element_styles_paper_material_styles__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/paper-styles/element-styles/paper-material-styles */ "./node_modules/@polymer/paper-styles/element-styles/paper-material-styles.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _data_camera__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../data/camera */ "./src/data/camera.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"paper-material-styles\">\n        :host {\n          @apply --paper-material-elevation-1;\n          display: block;\n          position: relative;\n          font-size: 0px;\n          border-radius: 2px;\n          cursor: pointer;\n          min-height: 48px;\n          line-height: 0;\n        }\n        .camera-feed {\n          width: 100%;\n          height: auto;\n          border-radius: 2px;\n        }\n        .caption {\n          @apply --paper-font-common-nowrap;\n          position: absolute;\n          left: 0px;\n          right: 0px;\n          bottom: 0px;\n          border-bottom-left-radius: 2px;\n          border-bottom-right-radius: 2px;\n\n          background-color: rgba(0, 0, 0, 0.3);\n          padding: 16px;\n\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 16px;\n          color: white;\n        }\n      </style>\n\n      <template is=\"dom-if\" if=\"[[cameraFeedSrc]]\">\n        <img\n          src=\"[[cameraFeedSrc]]\"\n          class=\"camera-feed\"\n          alt=\"[[_computeStateName(stateObj)]]\"\n          on-load=\"_imageLoaded\"\n          on-error=\"_imageError\"\n        />\n      </template>\n      <div class=\"caption\">\n        [[_computeStateName(stateObj)]]\n        <template is=\"dom-if\" if=\"[[!imageLoaded]]\">\n          ([[localize('ui.card.camera.not_available')]])\n        </template>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var UPDATE_INTERVAL = 10000; // ms

/*
 * @appliesMixin LocalizeMixin
 * @appliesMixin EventsMixin
 */

var HaCameraCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaCameraCard, _LocalizeMixin);

  function HaCameraCard() {
    _classCallCheck(this, HaCameraCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCameraCard).apply(this, arguments));
  }

  _createClass(HaCameraCard, [{
    key: "ready",
    value: function ready() {
      var _this = this;

      _get(_getPrototypeOf(HaCameraCard.prototype), "ready", this).call(this);

      this.addEventListener("click", function () {
        return _this.cardTapped();
      });
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(HaCameraCard.prototype), "connectedCallback", this).call(this);

      this.timer = setInterval(function () {
        return _this2.updateCameraFeedSrc();
      }, UPDATE_INTERVAL);
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      _get(_getPrototypeOf(HaCameraCard.prototype), "disconnectedCallback", this).call(this);

      clearInterval(this.timer);
    }
  }, {
    key: "_imageLoaded",
    value: function _imageLoaded() {
      this.imageLoaded = true;
    }
  }, {
    key: "_imageError",
    value: function _imageError() {
      this.imageLoaded = false;
    }
  }, {
    key: "cardTapped",
    value: function cardTapped() {
      this.fire("hass-more-info", {
        entityId: this.stateObj.entity_id
      });
    }
  }, {
    key: "updateCameraFeedSrc",
    value: function () {
      var _updateCameraFeedSrc = _asyncToGenerator(
      /*#__PURE__*/
      regeneratorRuntime.mark(function _callee() {
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return Object(_data_camera__WEBPACK_IMPORTED_MODULE_6__["fetchThumbnailUrlWithCache"])(this.hass, this.stateObj.entity_id);

              case 2:
                this.cameraFeedSrc = _context.sent;

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function updateCameraFeedSrc() {
        return _updateCameraFeedSrc.apply(this, arguments);
      }

      return updateCameraFeedSrc;
    }()
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_3__["default"])(stateObj);
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: {
          type: Object,
          observer: "updateCameraFeedSrc"
        },
        cameraFeedSrc: {
          type: String,
          value: ""
        },
        imageLoaded: {
          type: Boolean,
          value: true
        }
      };
    }
  }]);

  return HaCameraCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_5__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_4__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])));

customElements.define("ha-camera-card", HaCameraCard);

/***/ }),

/***/ "./src/cards/ha-card-chooser.js":
/*!**************************************!*\
  !*** ./src/cards/ha-card-chooser.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_camera_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ha-camera-card */ "./src/cards/ha-camera-card.js");
/* harmony import */ var _ha_entities_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-entities-card */ "./src/cards/ha-entities-card.js");
/* harmony import */ var _ha_history_graph_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ha-history_graph-card */ "./src/cards/ha-history_graph-card.js");
/* harmony import */ var _ha_media_player_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ha-media_player-card */ "./src/cards/ha-media_player-card.js");
/* harmony import */ var _ha_persistent_notification_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ha-persistent_notification-card */ "./src/cards/ha-persistent_notification-card.js");
/* harmony import */ var _ha_plant_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ha-plant-card */ "./src/cards/ha-plant-card.js");
/* harmony import */ var _ha_weather_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-weather-card */ "./src/cards/ha-weather-card.js");
/* harmony import */ var _common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/dom/dynamic_content_updater */ "./src/common/dom/dynamic_content_updater.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











var HaCardChooser =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCardChooser, _PolymerElement);

  function HaCardChooser() {
    _classCallCheck(this, HaCardChooser);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCardChooser).apply(this, arguments));
  }

  _createClass(HaCardChooser, [{
    key: "_updateCard",
    value: function _updateCard(newData) {
      Object(_common_dom_dynamic_content_updater__WEBPACK_IMPORTED_MODULE_8__["default"])(this, "HA-" + newData.cardType.toUpperCase() + "-CARD", newData);
    }
  }, {
    key: "createObserver",
    value: function createObserver() {
      var _this = this;

      this._updatesAllowed = false;
      this.observer = new IntersectionObserver(function (entries) {
        if (!entries.length) return;

        if (entries[0].isIntersecting) {
          _this.style.height = "";

          if (_this._detachedChild) {
            _this.appendChild(_this._detachedChild);

            _this._detachedChild = null;
          }

          _this._updateCard(_this.cardData); // Don't use 'newData' as it might have changed.


          _this._updatesAllowed = true;
        } else {
          // Set the card to be 48px high. Otherwise if the card is kept as 0px height then all
          // following cards would trigger the observer at once.
          var offsetHeight = _this.offsetHeight;
          _this.style.height = "".concat(offsetHeight || 48, "px");

          if (_this.lastChild) {
            _this._detachedChild = _this.lastChild;

            _this.removeChild(_this.lastChild);
          }

          _this._updatesAllowed = false;
        }
      });
      this.observer.observe(this);
    }
  }, {
    key: "cardDataChanged",
    value: function cardDataChanged(newData) {
      if (!newData) return; // ha-entities-card is exempt from observer as it doesn't load heavy resources.
      // and usually doesn't load external resources (except for entity_picture).

      var eligibleToObserver = window.IntersectionObserver && newData.cardType !== "entities";

      if (!eligibleToObserver) {
        if (this.observer) {
          this.observer.unobserve(this);
          this.observer = null;
        }

        this.style.height = "";

        this._updateCard(newData);

        return;
      }

      if (!this.observer) {
        this.createObserver();
      }

      if (this._updatesAllowed) {
        this._updateCard(newData);
      }
    }
  }], [{
    key: "properties",
    get: function get() {
      return {
        cardData: {
          type: Object,
          observer: "cardDataChanged"
        }
      };
    }
  }]);

  return HaCardChooser;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_0__["PolymerElement"]);

customElements.define("ha-card-chooser", HaCardChooser);

/***/ }),

/***/ "./src/cards/ha-entities-card.js":
/*!***************************************!*\
  !*** ./src/cards/ha-entities-card.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_entity_ha_entity_toggle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/entity/ha-entity-toggle */ "./src/components/entity/ha-entity-toggle.ts");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _state_summary_state_card_content__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../state-summary/state-card-content */ "./src/state-summary/state-card-content.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/state_more_info_type */ "./src/common/entity/state_more_info_type.ts");
/* harmony import */ var _common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/entity/can_toggle_state */ "./src/common/entity/can_toggle_state.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex\"></style>\n      <style>\n        ha-card {\n          padding: 16px;\n        }\n        .states {\n          margin: -4px 0;\n        }\n        .state {\n          padding: 4px 0;\n        }\n        .header {\n          @apply --paper-font-headline;\n          /* overwriting line-height +8 because entity-toggle can be 40px height,\n           compensating this with reduced padding */\n          line-height: 40px;\n          color: var(--primary-text-color);\n          padding: 4px 0 12px;\n        }\n        .header .name {\n          @apply --paper-font-common-nowrap;\n        }\n        ha-entity-toggle {\n          margin-left: 16px;\n        }\n        .more-info {\n          cursor: pointer;\n        }\n      </style>\n\n      <ha-card>\n        <template is=\"dom-if\" if=\"[[title]]\">\n          <div\n            class$=\"[[computeTitleClass(groupEntity)]]\"\n            on-click=\"entityTapped\"\n          >\n            <div class=\"flex name\">[[title]]</div>\n            <template is=\"dom-if\" if=\"[[showGroupToggle(groupEntity, states)]]\">\n              <ha-entity-toggle\n                hass=\"[[hass]]\"\n                state-obj=\"[[groupEntity]]\"\n              ></ha-entity-toggle>\n            </template>\n          </div>\n        </template>\n        <div class=\"states\">\n          <template\n            is=\"dom-repeat\"\n            items=\"[[states]]\"\n            on-dom-change=\"addTapEvents\"\n          >\n            <div class$=\"[[computeStateClass(item)]]\">\n              <state-card-content\n                hass=\"[[hass]]\"\n                class=\"state-card\"\n                state-obj=\"[[item]]\"\n              ></state-card-content>\n            </div>\n          </template>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }














var HaEntitiesCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaEntitiesCard, _LocalizeMixin);

  _createClass(HaEntitiesCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        states: Array,
        groupEntity: Object,
        title: {
          type: String,
          computed: "computeTitle(states, groupEntity, localize)"
        }
      };
    }
  }]);

  function HaEntitiesCard() {
    var _this;

    _classCallCheck(this, HaEntitiesCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaEntitiesCard).call(this)); // We need to save a single bound function reference to ensure the event listener
    // can identify it properly.

    _this.entityTapped = _this.entityTapped.bind(_assertThisInitialized(_this));
    return _this;
  }

  _createClass(HaEntitiesCard, [{
    key: "computeTitle",
    value: function computeTitle(states, groupEntity, localize) {
      if (groupEntity) {
        return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_7__["default"])(groupEntity).trim();
      }

      var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_6__["default"])(states[0]);
      return localize && localize("domain.".concat(domain)) || domain.replace(/_/g, " ");
    }
  }, {
    key: "computeTitleClass",
    value: function computeTitleClass(groupEntity) {
      var classes = "header horizontal layout center ";

      if (groupEntity) {
        classes += "more-info";
      }

      return classes;
    }
  }, {
    key: "computeStateClass",
    value: function computeStateClass(stateObj) {
      return Object(_common_entity_state_more_info_type__WEBPACK_IMPORTED_MODULE_8__["default"])(stateObj) !== "hidden" ? "state more-info" : "state";
    }
  }, {
    key: "addTapEvents",
    value: function addTapEvents() {
      var _this2 = this;

      var cards = this.root.querySelectorAll(".state");
      cards.forEach(function (card) {
        if (card.classList.contains("more-info")) {
          card.addEventListener("click", _this2.entityTapped);
        } else {
          card.removeEventListener("click", _this2.entityTapped);
        }
      });
    }
  }, {
    key: "entityTapped",
    value: function entityTapped(ev) {
      var item = this.root.querySelector("dom-repeat").itemForElement(ev.target);
      var entityId;

      if (!item && !this.groupEntity) {
        return;
      }

      ev.stopPropagation();

      if (item) {
        entityId = item.entity_id;
      } else {
        entityId = this.groupEntity.entity_id;
      }

      this.fire("hass-more-info", {
        entityId: entityId
      });
    }
  }, {
    key: "showGroupToggle",
    value: function showGroupToggle(groupEntity, states) {
      if (!groupEntity || !states || groupEntity.attributes.control === "hidden" || groupEntity.state !== "on" && groupEntity.state !== "off") {
        return false;
      } // Only show if we can toggle 2+ entities in group


      var canToggleCount = 0;

      for (var i = 0; i < states.length; i++) {
        if (!Object(_common_entity_can_toggle_state__WEBPACK_IMPORTED_MODULE_9__["default"])(this.hass, states[i])) {
          continue;
        }

        canToggleCount++;

        if (canToggleCount > 1) {
          break;
        }
      }

      return canToggleCount > 1;
    }
  }]);

  return HaEntitiesCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_11__["default"])(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_10__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"])));

customElements.define("ha-entities-card", HaEntitiesCard);

/***/ }),

/***/ "./src/cards/ha-persistent_notification-card.js":
/*!******************************************************!*\
  !*** ./src/cards/ha-persistent_notification-card.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _material_mwc_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @material/mwc-button */ "./node_modules/@material/mwc-button/mwc-button.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_markdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/ha-markdown */ "./src/components/ha-markdown.js");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../mixins/localize-mixin */ "./src/mixins/localize-mixin.js");
/* harmony import */ var _common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/entity/compute_object_id */ "./src/common/entity/compute_object_id.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          @apply --paper-font-body1;\n        }\n        ha-markdown {\n          display: block;\n          padding: 0 16px;\n          -ms-user-select: initial;\n          -webkit-user-select: initial;\n          -moz-user-select: initial;\n        }\n        ha-markdown p:first-child {\n          margin-top: 0;\n        }\n        ha-markdown p:last-child {\n          margin-bottom: 0;\n        }\n        ha-markdown a {\n          color: var(--primary-color);\n        }\n        ha-markdown img {\n          max-width: 100%;\n        }\n        mwc-button {\n          margin: 8px;\n        }\n      </style>\n\n      <ha-card header=\"[[computeTitle(stateObj)]]\">\n        <ha-markdown content=\"[[stateObj.attributes.message]]\"></ha-markdown>\n        <mwc-button on-click=\"dismissTap\"\n          >[[localize('ui.card.persistent_notification.dismiss')]]</mwc-button\n        >\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }









/*
 * @appliesMixin LocalizeMixin
 */

var HaPersistentNotificationCard =
/*#__PURE__*/
function (_LocalizeMixin) {
  _inherits(HaPersistentNotificationCard, _LocalizeMixin);

  function HaPersistentNotificationCard() {
    _classCallCheck(this, HaPersistentNotificationCard);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaPersistentNotificationCard).apply(this, arguments));
  }

  _createClass(HaPersistentNotificationCard, [{
    key: "computeTitle",
    value: function computeTitle(stateObj) {
      return stateObj.attributes.title || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_5__["default"])(stateObj);
    }
  }, {
    key: "dismissTap",
    value: function dismissTap(ev) {
      ev.preventDefault();
      this.hass.callService("persistent_notification", "dismiss", {
        notification_id: Object(_common_entity_compute_object_id__WEBPACK_IMPORTED_MODULE_7__["default"])(this.stateObj.entity_id)
      });
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_1__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object
      };
    }
  }]);

  return HaPersistentNotificationCard;
}(Object(_mixins_localize_mixin__WEBPACK_IMPORTED_MODULE_6__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_2__["PolymerElement"]));

customElements.define("ha-persistent_notification-card", HaPersistentNotificationCard);

/***/ }),

/***/ "./src/cards/ha-plant-card.js":
/*!************************************!*\
  !*** ./src/cards/ha-plant-card.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _components_ha_card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/ha-card */ "./src/components/ha-card.ts");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        .banner {\n          display: flex;\n          align-items: flex-end;\n          background-repeat: no-repeat;\n          background-size: cover;\n          background-position: center;\n          padding-top: 12px;\n        }\n        .has-plant-image .banner {\n          padding-top: 30%;\n        }\n        .header {\n          @apply --paper-font-headline;\n          line-height: 40px;\n          padding: 8px 16px;\n        }\n        .has-plant-image .header {\n          font-size: 16px;\n          font-weight: 500;\n          line-height: 16px;\n          padding: 16px;\n          color: white;\n          width: 100%;\n          background: rgba(0, 0, 0, var(--dark-secondary-opacity));\n        }\n        .content {\n          display: flex;\n          justify-content: space-between;\n          padding: 16px 32px 24px 32px;\n        }\n        .has-plant-image .content {\n          padding-bottom: 16px;\n        }\n        ha-icon {\n          color: var(--paper-item-icon-color);\n          margin-bottom: 8px;\n        }\n        .attributes {\n          cursor: pointer;\n        }\n        .attributes div {\n          text-align: center;\n        }\n        .problem {\n          color: var(--google-red-500);\n          font-weight: bold;\n        }\n        .uom {\n          color: var(--secondary-text-color);\n        }\n      </style>\n\n      <ha-card\n        class$=\"[[computeImageClass(stateObj.attributes.entity_picture)]]\"\n      >\n        <div\n          class=\"banner\"\n          style=\"background-image:url([[stateObj.attributes.entity_picture]])\"\n        >\n          <div class=\"header\">[[computeTitle(stateObj)]]</div>\n        </div>\n        <div class=\"content\">\n          <template\n            is=\"dom-repeat\"\n            items=\"[[computeAttributes(stateObj.attributes)]]\"\n          >\n            <div class=\"attributes\" on-click=\"attributeClicked\">\n              <div>\n                <ha-icon\n                  icon=\"[[computeIcon(item, stateObj.attributes.battery)]]\"\n                ></ha-icon>\n              </div>\n              <div\n                class$=\"[[computeAttributeClass(stateObj.attributes.problem, item)]]\"\n              >\n                [[computeValue(stateObj.attributes, item)]]\n              </div>\n              <div class=\"uom\">\n                [[computeUom(stateObj.attributes.unit_of_measurement_dict,\n                item)]]\n              </div>\n            </div>\n          </template>\n        </div>\n      </ha-card>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var HaPlantCard =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(HaPlantCard, _EventsMixin);

  _createClass(HaPlantCard, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        stateObj: Object,
        config: Object
      };
    }
  }]);

  function HaPlantCard() {
    var _this;

    _classCallCheck(this, HaPlantCard);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(HaPlantCard).call(this));
    _this.sensors = {
      moisture: "hass:water",
      temperature: "hass:thermometer",
      brightness: "hass:white-balance-sunny",
      conductivity: "hass:emoticon-poop",
      battery: "hass:battery"
    };
    return _this;
  }

  _createClass(HaPlantCard, [{
    key: "computeTitle",
    value: function computeTitle(stateObj) {
      return this.config && this.config.name || Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_4__["default"])(stateObj);
    }
  }, {
    key: "computeAttributes",
    value: function computeAttributes(data) {
      return Object.keys(this.sensors).filter(function (key) {
        return key in data;
      });
    }
  }, {
    key: "computeIcon",
    value: function computeIcon(attr, batLvl) {
      var icon = this.sensors[attr];

      if (attr === "battery") {
        if (batLvl <= 5) {
          return "".concat(icon, "-alert");
        }

        if (batLvl < 95) {
          return "".concat(icon, "-").concat(Math.round(batLvl / 10 - 0.01) * 10);
        }
      }

      return icon;
    }
  }, {
    key: "computeValue",
    value: function computeValue(attributes, attr) {
      return attributes[attr];
    }
  }, {
    key: "computeUom",
    value: function computeUom(dict, attr) {
      return dict[attr] || "";
    }
  }, {
    key: "computeAttributeClass",
    value: function computeAttributeClass(problem, attr) {
      return problem.indexOf(attr) === -1 ? "" : "problem";
    }
  }, {
    key: "computeImageClass",
    value: function computeImageClass(entityPicture) {
      return entityPicture ? "has-plant-image" : "";
    }
  }, {
    key: "attributeClicked",
    value: function attributeClicked(ev) {
      this.fire("hass-more-info", {
        entityId: this.stateObj.attributes.sensors[ev.model.item]
      });
    }
  }]);

  return HaPlantCard;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_5__["EventsMixin"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]));

customElements.define("ha-plant-card", HaPlantCard);

/***/ }),

/***/ "./src/common/config/location_name.ts":
/*!********************************************!*\
  !*** ./src/common/config/location_name.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return computeLocationName; });
/** Get the location name from a hass object. */
function computeLocationName(hass) {
  return hass && hass.config.location_name;
}

/***/ }),

/***/ "./src/components/ha-cards.js":
/*!************************************!*\
  !*** ./src/components/ha-cards.js ***!
  \************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/lib/utils/async */ "./node_modules/@polymer/polymer/lib/utils/async.js");
/* harmony import */ var _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/polymer/lib/utils/debounce */ "./node_modules/@polymer/polymer/lib/utils/debounce.js");
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _cards_ha_badges_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../cards/ha-badges-card */ "./src/cards/ha-badges-card.js");
/* harmony import */ var _cards_ha_card_chooser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../cards/ha-card-chooser */ "./src/cards/ha-card-chooser.js");
/* harmony import */ var _ha_demo_badge__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ha-demo-badge */ "./src/components/ha-demo-badge.js");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../common/entity/split_by_groups */ "./src/common/entity/split_by_groups.ts");
/* harmony import */ var _common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../common/entity/get_group_entities */ "./src/common/entity/get_group_entities.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-flex-factors\"></style>\n      <style>\n        :host {\n          display: block;\n          padding: 4px 4px 0;\n          transform: translateZ(0);\n          position: relative;\n        }\n\n        .badges {\n          font-size: 85%;\n          text-align: center;\n          padding-top: 16px;\n        }\n\n        .column {\n          max-width: 500px;\n          overflow-x: hidden;\n        }\n\n        ha-card-chooser {\n          display: block;\n          margin: 4px 4px 8px;\n        }\n\n        @media (max-width: 500px) {\n          :host {\n            padding-left: 0;\n            padding-right: 0;\n          }\n\n          ha-card-chooser {\n            margin-left: 0;\n            margin-right: 0;\n          }\n        }\n\n        @media (max-width: 599px) {\n          .column {\n            max-width: 600px;\n          }\n        }\n      </style>\n\n      <div id=\"main\">\n        <template is=\"dom-if\" if=\"[[cards.badges.length]]\">\n          <div class=\"badges\">\n            <template is=\"dom-if\" if=\"[[cards.demo]]\">\n              <ha-demo-badge></ha-demo-badge>\n            </template>\n\n            <ha-badges-card\n              states=\"[[cards.badges]]\"\n              hass=\"[[hass]]\"\n            ></ha-badges-card>\n          </div>\n        </template>\n\n        <div class=\"horizontal layout center-justified\">\n          <template is=\"dom-repeat\" items=\"[[cards.columns]]\" as=\"column\">\n            <div class=\"column flex-1\">\n              <template is=\"dom-repeat\" items=\"[[column]]\" as=\"card\">\n                <ha-card-chooser card-data=\"[[card]]\"></ha-card-chooser>\n              </template>\n            </div>\n          </template>\n        </div>\n      </div>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }











 // mapping domain to size of the card.

var DOMAINS_WITH_CARD = {
  camera: 4,
  history_graph: 4,
  media_player: 3,
  persistent_notification: 0,
  plant: 3,
  weather: 4
}; // 4 types:
// badges: 0 .. 10
// before groups < 0
// groups: X
// rest: 100

var PRIORITY = {
  // before groups < 0
  configurator: -20,
  persistent_notification: -15,
  // badges have priority >= 0
  updater: 0,
  sun: 1,
  person: 2,
  device_tracker: 3,
  alarm_control_panel: 4,
  timer: 5,
  sensor: 6,
  binary_sensor: 7,
  mailbox: 8
};

var getPriority = function getPriority(domain) {
  return domain in PRIORITY ? PRIORITY[domain] : 100;
};

var sortPriority = function sortPriority(domainA, domainB) {
  return domainA.priority - domainB.priority;
};

var entitySortBy = function entitySortBy(entityA, entityB) {
  var nameA = (entityA.attributes.friendly_name || entityA.entity_id).toLowerCase();
  var nameB = (entityB.attributes.friendly_name || entityB.entity_id).toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

var iterateDomainSorted = function iterateDomainSorted(collection, func) {
  Object.keys(collection).map(function (key) {
    return collection[key];
  }).sort(sortPriority).forEach(function (domain) {
    domain.states.sort(entitySortBy);
    func(domain);
  });
};

var HaCards =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaCards, _PolymerElement);

  function HaCards() {
    _classCallCheck(this, HaCards);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaCards).apply(this, arguments));
  }

  _createClass(HaCards, [{
    key: "updateCards",
    value: function updateCards(columns, states, viewVisible, orderedGroupEntities) {
      var _this = this;

      if (!viewVisible) {
        if (this.$.main.parentNode) {
          this.$.main._parentNode = this.$.main.parentNode;
          this.$.main.parentNode.removeChild(this.$.main);
        }

        return;
      }

      if (!this.$.main.parentNode && this.$.main._parentNode) {
        this.$.main._parentNode.appendChild(this.$.main);
      }

      this._debouncer = _polymer_polymer_lib_utils_debounce__WEBPACK_IMPORTED_MODULE_2__["Debouncer"].debounce(this._debouncer, _polymer_polymer_lib_utils_async__WEBPACK_IMPORTED_MODULE_1__["timeOut"].after(10), function () {
        // Things might have changed since it got scheduled.
        if (_this.viewVisible) {
          _this.cards = _this.computeCards(columns, states, orderedGroupEntities);
        }
      });
    }
  }, {
    key: "emptyCards",
    value: function emptyCards() {
      return {
        demo: false,
        badges: [],
        columns: []
      };
    }
  }, {
    key: "computeCards",
    value: function computeCards(columns, states, orderedGroupEntities) {
      var hass = this.hass;
      var cards = this.emptyCards();
      var entityCount = [];

      for (var i = 0; i < columns; i++) {
        cards.columns.push([]);
        entityCount.push(0);
      } // Find column with < 5 entities, else column with lowest count


      function getIndex(size) {
        var minIndex = 0;

        for (var _i = 0; _i < entityCount.length; _i++) {
          if (entityCount[_i] < 5) {
            minIndex = _i;
            break;
          }

          if (entityCount[_i] < entityCount[minIndex]) {
            minIndex = _i;
          }
        }

        entityCount[minIndex] += size;
        return minIndex;
      }

      function addEntitiesCard(name, entities, groupEntity) {
        if (entities.length === 0) return;
        var owncard = [];
        var other = [];
        var size = 0;
        entities.forEach(function (entity) {
          var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["default"])(entity);

          if (domain in DOMAINS_WITH_CARD && !entity.attributes.custom_ui_state_card) {
            owncard.push(entity);
            size += DOMAINS_WITH_CARD[domain];
          } else {
            other.push(entity);
            size++;
          }
        }); // Add 1 to the size if we're rendering entities card

        size += other.length > 0;
        var curIndex = getIndex(size);

        if (other.length > 0) {
          cards.columns[curIndex].push({
            hass: hass,
            cardType: "entities",
            states: other,
            groupEntity: groupEntity || false
          });
        }

        owncard.forEach(function (entity) {
          cards.columns[curIndex].push({
            hass: hass,
            cardType: Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["default"])(entity),
            stateObj: entity
          });
        });
      }

      var splitted = Object(_common_entity_split_by_groups__WEBPACK_IMPORTED_MODULE_9__["default"])(states);

      if (orderedGroupEntities) {
        splitted.groups.sort(function (gr1, gr2) {
          return orderedGroupEntities[gr1.entity_id] - orderedGroupEntities[gr2.entity_id];
        });
      } else {
        splitted.groups.sort(function (gr1, gr2) {
          return gr1.attributes.order - gr2.attributes.order;
        });
      }

      var badgesColl = {};
      var beforeGroupColl = {};
      var afterGroupedColl = {};
      Object.keys(splitted.ungrouped).forEach(function (key) {
        var state = splitted.ungrouped[key];
        var domain = Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_8__["default"])(state);

        if (domain === "a") {
          cards.demo = true;
          return;
        }

        var priority = getPriority(domain);
        var coll;

        if (priority < 0) {
          coll = beforeGroupColl;
        } else if (priority < 10) {
          coll = badgesColl;
        } else {
          coll = afterGroupedColl;
        }

        if (!(domain in coll)) {
          coll[domain] = {
            domain: domain,
            priority: priority,
            states: []
          };
        }

        coll[domain].states.push(state);
      });

      if (orderedGroupEntities) {
        Object.keys(badgesColl).map(function (key) {
          return badgesColl[key];
        }).forEach(function (domain) {
          cards.badges.push.apply(cards.badges, domain.states);
        });
        cards.badges.sort(function (e1, e2) {
          return orderedGroupEntities[e1.entity_id] - orderedGroupEntities[e2.entity_id];
        });
      } else {
        iterateDomainSorted(badgesColl, function (domain) {
          cards.badges.push.apply(cards.badges, domain.states);
        });
      }

      iterateDomainSorted(beforeGroupColl, function (domain) {
        addEntitiesCard(domain.domain, domain.states);
      });
      splitted.groups.forEach(function (groupState) {
        var entities = Object(_common_entity_get_group_entities__WEBPACK_IMPORTED_MODULE_10__["default"])(states, groupState);
        addEntitiesCard(groupState.entity_id, Object.keys(entities).map(function (key) {
          return entities[key];
        }), groupState);
      });
      iterateDomainSorted(afterGroupedColl, function (domain) {
        addEntitiesCard(domain.domain, domain.states);
      }); // Remove empty columns

      cards.columns = cards.columns.filter(function (val) {
        return val.length > 0;
      });
      return cards;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_3__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: Object,
        columns: {
          type: Number,
          value: 2
        },
        states: Object,
        viewVisible: {
          type: Boolean,
          value: false
        },
        orderedGroupEntities: Array,
        cards: Object
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["updateCards(columns, states, viewVisible, orderedGroupEntities)"];
    }
  }]);

  return HaCards;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_4__["PolymerElement"]);

customElements.define("ha-cards", HaCards);

/***/ }),

/***/ "./src/components/ha-demo-badge.js":
/*!*****************************************!*\
  !*** ./src/components/ha-demo-badge.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _ha_label_badge__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ha-label-badge */ "./src/components/ha-label-badge.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style>\n        :host {\n          --ha-label-badge-color: #dac90d;\n        }\n      </style>\n\n      <ha-label-badge\n        icon=\"hass:emoticon\"\n        label=\"Demo\"\n        description=\"\"\n      ></ha-label-badge>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var HaDemoBadge =
/*#__PURE__*/
function (_PolymerElement) {
  _inherits(HaDemoBadge, _PolymerElement);

  function HaDemoBadge() {
    _classCallCheck(this, HaDemoBadge);

    return _possibleConstructorReturn(this, _getPrototypeOf(HaDemoBadge).apply(this, arguments));
  }

  _createClass(HaDemoBadge, null, [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }]);

  return HaDemoBadge;
}(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"]);

customElements.define("ha-demo-badge", HaDemoBadge);

/***/ }),

/***/ "./src/mixins/navigate-mixin.js":
/*!**************************************!*\
  !*** ./src/mixins/navigate-mixin.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/mixin */ "./node_modules/@polymer/polymer/lib/utils/mixin.js");
/* harmony import */ var _common_navigate__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/navigate */ "./src/common/navigate.ts");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/*
 * @polymerMixin
 * @appliesMixin EventsMixin
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_polymer_polymer_lib_utils_mixin__WEBPACK_IMPORTED_MODULE_0__["dedupingMixin"])(function (superClass) {
  return (
    /*#__PURE__*/
    function (_superClass) {
      _inherits(_class, _superClass);

      function _class() {
        _classCallCheck(this, _class);

        return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
      }

      _createClass(_class, [{
        key: "navigate",
        value: function navigate() {
          for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
          }

          _common_navigate__WEBPACK_IMPORTED_MODULE_1__["navigate"].apply(void 0, [this].concat(args));
        }
      }]);

      return _class;
    }(superClass)
  );
}));

/***/ }),

/***/ "./src/panels/states/ha-panel-states.js":
/*!**********************************************!*\
  !*** ./src/panels/states/ha-panel-states.js ***!
  \**********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @polymer/polymer/lib/utils/html-tag */ "./node_modules/@polymer/polymer/lib/utils/html-tag.js");
/* harmony import */ var _polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @polymer/polymer/polymer-element */ "./node_modules/@polymer/polymer/polymer-element.js");
/* harmony import */ var _polymer_app_layout_app_header_app_header__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @polymer/app-layout/app-header/app-header */ "./node_modules/@polymer/app-layout/app-header/app-header.js");
/* harmony import */ var _polymer_app_layout_app_scroll_effects_effects_waterfall__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @polymer/app-layout/app-scroll-effects/effects/waterfall */ "./node_modules/@polymer/app-layout/app-scroll-effects/effects/waterfall.js");
/* harmony import */ var _polymer_app_layout_app_toolbar_app_toolbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @polymer/app-layout/app-toolbar/app-toolbar */ "./node_modules/@polymer/app-layout/app-toolbar/app-toolbar.js");
/* harmony import */ var _polymer_app_route_app_route__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @polymer/app-route/app-route */ "./node_modules/@polymer/app-route/app-route.js");
/* harmony import */ var _polymer_iron_flex_layout_iron_flex_layout_classes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @polymer/iron-flex-layout/iron-flex-layout-classes */ "./node_modules/@polymer/iron-flex-layout/iron-flex-layout-classes.js");
/* harmony import */ var _polymer_iron_pages_iron_pages__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @polymer/iron-pages/iron-pages */ "./node_modules/@polymer/iron-pages/iron-pages.js");
/* harmony import */ var _polymer_paper_tabs_paper_tab__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tab */ "./node_modules/@polymer/paper-tabs/paper-tab.js");
/* harmony import */ var _polymer_paper_tabs_paper_tabs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @polymer/paper-tabs/paper-tabs */ "./node_modules/@polymer/paper-tabs/paper-tabs.js");
/* harmony import */ var _components_ha_cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/ha-cards */ "./src/components/ha-cards.js");
/* harmony import */ var _components_ha_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/ha-icon */ "./src/components/ha-icon.ts");
/* harmony import */ var _components_ha_menu_button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/ha-menu-button */ "./src/components/ha-menu-button.ts");
/* harmony import */ var _components_ha_start_voice_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/ha-start-voice-button */ "./src/components/ha-start-voice-button.js");
/* harmony import */ var _layouts_ha_app_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../layouts/ha-app-layout */ "./src/layouts/ha-app-layout.js");
/* harmony import */ var _common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../common/entity/extract_views */ "./src/common/entity/extract_views.ts");
/* harmony import */ var _common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../common/entity/get_view_entities */ "./src/common/entity/get_view_entities.ts");
/* harmony import */ var _common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../common/entity/compute_state_name */ "./src/common/entity/compute_state_name.ts");
/* harmony import */ var _common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../common/entity/compute_state_domain */ "./src/common/entity/compute_state_domain.ts");
/* harmony import */ var _common_config_location_name__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../common/config/location_name */ "./src/common/config/location_name.ts");
/* harmony import */ var _mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../mixins/navigate-mixin */ "./src/mixins/navigate-mixin.js");
/* harmony import */ var _mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../mixins/events-mixin */ "./src/mixins/events-mixin.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n      <style include=\"iron-flex iron-positioning ha-style\">\n        :host {\n          -ms-user-select: none;\n          -webkit-user-select: none;\n          -moz-user-select: none;\n        }\n\n        ha-app-layout {\n          min-height: 100%;\n          background-color: var(--secondary-background-color, #e5e5e5);\n        }\n\n        iron-pages {\n          height: 100%;\n        }\n\n        paper-tabs {\n          margin-left: 12px;\n          --paper-tabs-selection-bar-color: var(--text-primary-color, #fff);\n          text-transform: uppercase;\n        }\n      </style>\n      <app-route\n        route=\"{{route}}\"\n        pattern=\"/:view\"\n        data=\"{{routeData}}\"\n        active=\"{{routeMatch}}\"\n      ></app-route>\n      <ha-app-layout id=\"layout\">\n        <app-header effects=\"waterfall\" condenses=\"\" fixed=\"\" slot=\"header\">\n          <app-toolbar>\n            <ha-menu-button></ha-menu-button>\n            <div main-title=\"\">\n              [[computeTitle(views, defaultView, locationName)]]\n            </div>\n            <ha-start-voice-button hass=\"[[hass]]\"></ha-start-voice-button>\n          </app-toolbar>\n\n          <div sticky=\"\" hidden$=\"[[areTabsHidden(views, showTabs)]]\">\n            <paper-tabs\n              scrollable=\"\"\n              selected=\"[[currentView]]\"\n              attr-for-selected=\"data-entity\"\n              on-iron-activate=\"handleViewSelected\"\n            >\n              <paper-tab data-entity=\"\" on-click=\"scrollToTop\">\n                <template is=\"dom-if\" if=\"[[!defaultView]]\">\n                  Home\n                </template>\n                <template is=\"dom-if\" if=\"[[defaultView]]\">\n                  <template is=\"dom-if\" if=\"[[defaultView.attributes.icon]]\">\n                    <ha-icon\n                      title$=\"[[_computeStateName(defaultView)]]\"\n                      icon=\"[[defaultView.attributes.icon]]\"\n                    ></ha-icon>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[!defaultView.attributes.icon]]\">\n                    [[_computeStateName(defaultView)]]\n                  </template>\n                </template>\n              </paper-tab>\n              <template is=\"dom-repeat\" items=\"[[views]]\">\n                <paper-tab\n                  data-entity$=\"[[item.entity_id]]\"\n                  on-click=\"scrollToTop\"\n                >\n                  <template is=\"dom-if\" if=\"[[item.attributes.icon]]\">\n                    <ha-icon\n                      title$=\"[[_computeStateName(item)]]\"\n                      icon=\"[[item.attributes.icon]]\"\n                    ></ha-icon>\n                  </template>\n                  <template is=\"dom-if\" if=\"[[!item.attributes.icon]]\">\n                    [[_computeStateName(item)]]\n                  </template>\n                </paper-tab>\n              </template>\n            </paper-tabs>\n          </div>\n        </app-header>\n\n        <iron-pages\n          attr-for-selected=\"data-view\"\n          selected=\"[[currentView]]\"\n          selected-attribute=\"view-visible\"\n        >\n          <ha-cards\n            data-view=\"\"\n            states=\"[[viewStates]]\"\n            columns=\"[[_columns]]\"\n            hass=\"[[hass]]\"\n            panel-visible=\"[[panelVisible]]\"\n            ordered-group-entities=\"[[orderedGroupEntities]]\"\n          ></ha-cards>\n\n          <template is=\"dom-repeat\" items=\"[[views]]\">\n            <ha-cards\n              data-view$=\"[[item.entity_id]]\"\n              states=\"[[viewStates]]\"\n              columns=\"[[_columns]]\"\n              hass=\"[[hass]]\"\n              panel-visible=\"[[panelVisible]]\"\n              ordered-group-entities=\"[[orderedGroupEntities]]\"\n            ></ha-cards>\n          </template>\n        </iron-pages>\n      </ha-app-layout>\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }























var DEFAULT_VIEW_ENTITY_ID = "group.default_view";
var ALWAYS_SHOW_DOMAIN = ["persistent_notification", "configurator"];
/*
 * @appliesMixin EventsMixin
 * @appliesMixin NavigateMixin
 */

var PartialCards =
/*#__PURE__*/
function (_EventsMixin) {
  _inherits(PartialCards, _EventsMixin);

  function PartialCards() {
    _classCallCheck(this, PartialCards);

    return _possibleConstructorReturn(this, _getPrototypeOf(PartialCards).apply(this, arguments));
  }

  _createClass(PartialCards, [{
    key: "ready",
    value: function ready() {
      this._updateColumns = this._updateColumns.bind(this);
      this.mqls = [300, 600, 900, 1200].map(function (width) {
        return matchMedia("(min-width: ".concat(width, "px)"));
      });

      _get(_getPrototypeOf(PartialCards.prototype), "ready", this).call(this);
    }
  }, {
    key: "connectedCallback",
    value: function connectedCallback() {
      var _this = this;

      _get(_getPrototypeOf(PartialCards.prototype), "connectedCallback", this).call(this);

      this.mqls.forEach(function (mql) {
        return mql.addListener(_this._updateColumns);
      });
    }
  }, {
    key: "disconnectedCallback",
    value: function disconnectedCallback() {
      var _this2 = this;

      _get(_getPrototypeOf(PartialCards.prototype), "disconnectedCallback", this).call(this);

      this.mqls.forEach(function (mql) {
        return mql.removeListener(_this2._updateColumns);
      });
    }
  }, {
    key: "_updateColumns",
    value: function _updateColumns() {
      var matchColumns = this.mqls.reduce(function (cols, mql) {
        return cols + mql.matches;
      }, 0); // Do -1 column if the menu is docked and open

      this._columns = Math.max(1, matchColumns - (!this.narrow && this.hass.dockedSidebar));
    }
  }, {
    key: "areTabsHidden",
    value: function areTabsHidden(views, showTabs) {
      return !views || !views.length || !showTabs;
    }
    /**
     * Scroll to a specific y coordinate.
     *
     * Copied from paper-scroll-header-panel.
     *
     * @method scroll
     * @param {number} top The coordinate to scroll to, along the y-axis.
     * @param {boolean} smooth true if the scroll position should be smoothly adjusted.
     */

  }, {
    key: "scrollToTop",
    value: function scrollToTop() {
      // the scroll event will trigger _updateScrollState directly,
      // However, _updateScrollState relies on the previous `scrollTop` to update the states.
      // Calling _updateScrollState will ensure that the states are synced correctly.
      var top = 0;
      var scroller = this.$.layout.header.scrollTarget;

      var easingFn = function easeOutQuad(t, b, c, d) {
        /* eslint-disable no-param-reassign, space-infix-ops, no-mixed-operators */
        t /= d;
        return -c * t * (t - 2) + b;
        /* eslint-enable no-param-reassign, space-infix-ops, no-mixed-operators */
      };

      var animationId = Math.random();
      var duration = 200;
      var startTime = Date.now();
      var currentScrollTop = scroller.scrollTop;
      var deltaScrollTop = top - currentScrollTop;
      this._currentAnimationId = animationId;
      (function updateFrame() {
        var now = Date.now();
        var elapsedTime = now - startTime;

        if (elapsedTime > duration) {
          scroller.scrollTop = top;
        } else if (this._currentAnimationId === animationId) {
          scroller.scrollTop = easingFn(elapsedTime, currentScrollTop, deltaScrollTop, duration);
          requestAnimationFrame(updateFrame.bind(this));
        }
      }).call(this);
    }
  }, {
    key: "handleViewSelected",
    value: function handleViewSelected(ev) {
      var view = ev.detail.item.getAttribute("data-entity") || null;

      if (view !== this.currentView) {
        var path = "/states";

        if (view) {
          path += "/" + view;
        }

        this.navigate(path);
      }
    }
  }, {
    key: "_computeCurrentView",
    value: function _computeCurrentView(hass, routeMatch, routeData) {
      if (!routeMatch) return "";

      if (!hass.states[routeData.view] || !hass.states[routeData.view].attributes.view) {
        return "";
      }

      return routeData.view;
    }
  }, {
    key: "computeTitle",
    value: function computeTitle(views, defaultView, locationName) {
      return views && views.length > 0 && !defaultView && locationName === "Home" || !locationName ? "ioBroker" : locationName;
    }
  }, {
    key: "_computeStateName",
    value: function _computeStateName(stateObj) {
      return Object(_common_entity_compute_state_name__WEBPACK_IMPORTED_MODULE_17__["default"])(stateObj);
    }
  }, {
    key: "_computeLocationName",
    value: function _computeLocationName(hass) {
      return Object(_common_config_location_name__WEBPACK_IMPORTED_MODULE_19__["default"])(hass);
    }
  }, {
    key: "hassChanged",
    value: function hassChanged(hass) {
      if (!hass) return;
      var views = Object(_common_entity_extract_views__WEBPACK_IMPORTED_MODULE_15__["default"])(hass.states);
      var defaultView = null; // If default view present, it's in first index.

      if (views.length > 0 && views[0].entity_id === DEFAULT_VIEW_ENTITY_ID) {
        defaultView = views.shift();
      }

      this.setProperties({
        views: views,
        defaultView: defaultView
      });
    }
  }, {
    key: "isView",
    value: function isView(currentView, defaultView) {
      return (currentView || defaultView) && this.hass.states[currentView || DEFAULT_VIEW_ENTITY_ID];
    }
  }, {
    key: "_defaultViewFilter",
    value: function _defaultViewFilter(hass, entityId) {
      // Filter out hidden
      return !hass.states[entityId].attributes.hidden;
    }
  }, {
    key: "_computeDefaultViewStates",
    value: function _computeDefaultViewStates(hass, entityIds) {
      var states = {};
      entityIds.filter(this._defaultViewFilter.bind(null, hass)).forEach(function (entityId) {
        states[entityId] = hass.states[entityId];
      });
      return states;
    }
    /*
      Compute the states to show for current view.
       Will make sure we always show entities from ALWAYS_SHOW_DOMAINS domains.
    */

  }, {
    key: "computeViewStates",
    value: function computeViewStates(currentView, hass, defaultView) {
      var entityIds = Object.keys(hass.states); // If we base off all entities, only have to filter out hidden

      if (!this.isView(currentView, defaultView)) {
        return this._computeDefaultViewStates(hass, entityIds);
      }

      var states;

      if (currentView) {
        states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["default"])(hass.states, hass.states[currentView]);
      } else {
        states = Object(_common_entity_get_view_entities__WEBPACK_IMPORTED_MODULE_16__["default"])(hass.states, hass.states[DEFAULT_VIEW_ENTITY_ID]);
      } // Make sure certain domains are always shown.


      entityIds.forEach(function (entityId) {
        var state = hass.states[entityId];

        if (ALWAYS_SHOW_DOMAIN.includes(Object(_common_entity_compute_state_domain__WEBPACK_IMPORTED_MODULE_18__["default"])(state))) {
          states[entityId] = state;
        }
      });
      return states;
    }
    /*
      Compute the ordered list of groups for this view
    */

  }, {
    key: "computeOrderedGroupEntities",
    value: function computeOrderedGroupEntities(currentView, hass, defaultView) {
      if (!this.isView(currentView, defaultView)) {
        return null;
      }

      var orderedGroupEntities = {};
      var entitiesList = hass.states[currentView || DEFAULT_VIEW_ENTITY_ID].attributes.entity_id;

      for (var i = 0; i < entitiesList.length; i++) {
        orderedGroupEntities[entitiesList[i]] = i;
      }

      return orderedGroupEntities;
    }
  }], [{
    key: "template",
    get: function get() {
      return Object(_polymer_polymer_lib_utils_html_tag__WEBPACK_IMPORTED_MODULE_0__["html"])(_templateObject());
    }
  }, {
    key: "properties",
    get: function get() {
      return {
        hass: {
          type: Object,
          value: null,
          observer: "hassChanged"
        },
        narrow: {
          type: Boolean,
          value: false
        },
        panelVisible: {
          type: Boolean,
          value: false
        },
        route: Object,
        routeData: Object,
        routeMatch: Boolean,
        _columns: {
          type: Number,
          value: 1
        },
        locationName: {
          type: String,
          value: "",
          computed: "_computeLocationName(hass)"
        },
        currentView: {
          type: String,
          computed: "_computeCurrentView(hass, routeMatch, routeData)"
        },
        views: {
          type: Array
        },
        defaultView: {
          type: Object
        },
        viewStates: {
          type: Object,
          computed: "computeViewStates(currentView, hass, defaultView)"
        },
        orderedGroupEntities: {
          type: Array,
          computed: "computeOrderedGroupEntities(currentView, hass, defaultView)"
        },
        showTabs: {
          type: Boolean,
          value: true
        }
      };
    }
  }, {
    key: "observers",
    get: function get() {
      return ["_updateColumns(narrow, hass.dockedSidebar)"];
    }
  }]);

  return PartialCards;
}(Object(_mixins_events_mixin__WEBPACK_IMPORTED_MODULE_21__["EventsMixin"])(Object(_mixins_navigate_mixin__WEBPACK_IMPORTED_MODULE_20__["default"])(_polymer_polymer_polymer_element__WEBPACK_IMPORTED_MODULE_1__["PolymerElement"])));

customElements.define("ha-panel-states", PartialCards);

/***/ })

}]);
//# sourceMappingURL=panel-states.chunk.js.map